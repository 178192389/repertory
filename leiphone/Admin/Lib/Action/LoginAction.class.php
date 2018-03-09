<?php
//header("Content-type: text/html; charset= utf-8");
class LoginAction extends Action{
    function login(){
        $this->display();
    }
 
    //验证码
    Public function verify($width=80,$height=46){
        import('ORG.Util.Image');
        Image::buildImageVerify('5','1','png',$width,$height);
        //  Image::GBVerify('4','png','','46','simhei.ttf');
    }
    
    function doLogin(){
        $m = M('admin'); 
        var_dump($m);
       if(md5($_POST['fcode']) == $_SESSION['verify']){
          $_POST['a_password']=md5($_POST['a_password']);
           $num = $m->where($_POST)->find();
            if($num){
                $_SESSION['a_name'] = $num['a_name'];
                $_SESSION['login'] =1 ;
               $this->success("欢迎{$_POST['name']}登录后台",U('Index/index'));
           }else{
               $this->error('用户名或密码有误！');
           } 
       }else{
           $this->error('验证码有误');
       }
    }
    
    function logout(){
        var_dump(session('a_name'));
        session(null);
        session(['destroy']);
        cookie('a_name',null);
        
      $this->success('成功退出',login);
    }
    //insertUser
  /*   function register(){
     $d = D('User');
     var_dump($_POST);  
       
     $where['user_name'] =$_POST['name'];
     $where['user_password'] = $_POST['pwd']; 
     $d->create();
       $list= $d->add();
      var_dump($list);
         if($d->create()){
             //$d->add_time = date('Y-m-d H:i:s',time());
        
             var_dump($where);
           $list=$d->add();
           var_dump( $list);
             if($list){
                 $this->success('注册成功，跳转首页',login);
             }else{
                 $this->error('错误');
             }
         }else{
             echo '<pre>';
             print_r($d->getError());
             //print_r($d);
             echo '</pre>'; 
        }
        $this->display();
    } */
}