<?php
header("content-type:text/html;charset=utf-8");
class AuthorLoginAction extends Action{
    function doReg(){
       $d = D('Columnist');
        if($d->create()){
            $d->accessExpires =time()+60*60;//过期时间为1小时后
            //账户激活码
            $accessToken = $d->accessToken = md5($_POST['author_name'].$_POST['password'].$d->accessExpires);
          //  $d->enabled = ;//账户状态
            //var_dump(  $d->accessExpires);
             
            if($d->add() == false){
                $this->error('创建失败');
            }else{
                $link = "http://192.168.10.53/leiphone/index.php/AuthorLogin/activation?accessToken={$accessToken}";
                $content = "{$_POST['author_name']} 您好！<p></p>  感谢您在注册帐户！<p></p>
                帐户需要激活才能使用，赶紧激活成为正式一员吧:)<p></p>
                点击下面的链接立即激活帐户(或将网址复制到浏览器中打开):<p></p>
                $link";
                $title = '账户激活验证';
                $Email = A('Email');
                $Email->sendMail($_POST['email'],$title,$content);
               // $this->success('注册成功,返回登录界面,请进入邮箱激活账户',"../Login/login");
                //$this->redirect(Login/login);
            }
        }else{
            echo '<pre>';
            print_r($d->getError());
            echo '</pre>';
            $this->error('注册失败',U('Index/index'));
        }
    }
    
    
    // 用户点击激活方法
    function activation(){
        $accessToken = I('get.accessToken');
        $where['accessToken'] = $accessToken;
        $m = M('columnist');
        $res = $m->where($where)->find();
     //   var_dump($res);
        if($res['enabled'] =='已激活'){
            $this->success('您已激活账户,无需再次激活,请登录',"../Login/login");
        }else{
            $nowTime = time();
            if (!$res) exit($this->error('没有该账户',"../Login/login"));
            if ($nowTime > $res['accessExpires']) exit( $this->error('您的激活有效期已过，请登录您的帐号重新发送激活邮件',"../Login/login"));
            $id ="cid =".$res['cid'];
            $update = $m->where($id)->setField('enabled','已激活');
           
            if ($update == false){
                $this->error('激活失败',"../Index/index");
            }else{
                $this->success('激活账户成功,请登录',U("Login/login"));
            }
        }
    }
    
    function doLogin(){
        $d = D('Columnist');
        //获取当前用户id
        $where['author_name|email|phone'] = $_POST['name'];
        $row = $d->where($where)->find();
        
        //判断登录账号
        if($_POST['name']==$row['author_name'] || $_POST['name']==$row['email'] || $_POST['name']==$row['phone']){
            //判断密码是否正确
            if($row['password']==md5($_POST['password'])){
                //检查账户是否激活
                if($row['enabled'] == '未激活')  exit( $this->error('您的账户未激活，请激活后登录',login) );
                //上一次登录时间  与IP
                $_SESSION['update_time'] =$row['update_time'];
                $_SESSION['client_ip'] =$row['client_ip'];
                //var_dump($row);
                //当前登录时间 与 IP 存入数据库
                $data = array('update_time'=>date('Y-m-d H:i:s',time()),'client_ip' =>get_client_ip());
                $where = "cid=".$row['cid'];
                $num = $d->where($where)->setField($data);
                if($num){
                   
                    //用于 修改 个人信息
                    $_SESSION['cid'] =$row['cid'];
                    //邮箱 替换
                    $str =substr_replace( $row['email'],"****",3,4);
                    var_dump($str);
                    $_SESSION['email'] = $str;
                    
                   $this->success('登录成功',U('Personal/index'));
                }else{
                    $this->error('登录失败');
                }
            }else{
                $this->error('密码有误');
            }
        }else{
            $this->error('此用户名不存在');
        }
    
        function logout(){
            session(null);
            session(['destroy']);
             
            cookie($_SESSION,null);
        
            $this->redirect('Index/index');
        }
    }
}