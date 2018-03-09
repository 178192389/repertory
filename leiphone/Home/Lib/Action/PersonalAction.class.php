<?php
class PersonalAction extends ProtectAction{
    
    function index(){
        $m = M('columnist');
      
        $this->count();
        
        $cid = "cid = ".$_SESSION['cid'];
        $data = $m->where($cid)->field(array('author_name','depict','portrait'))->find();
        $_SESSION['pic'] = $data['portrait'];
        //用session读取 用户名  传入安全中心验证
        $_SESSION['author_name'] = $data['author_name'];
        //var_dump($data);
        $this->assign('data',$data);
        $this->display();
    }
  protected  function count(){
        $news = M('news');
        $cid ="cid = {$_SESSION['cid']}";
        $this->a=$news->where($cid." and news_status ='未审核'")->count();
        $this->b=$news->where($cid." and news_status ='待审核'")->count();
        $this->c=$news->where($cid." and news_status ='已审核'")->count();
        $this->d=$news->where($cid." and news_status ='未通过'")->count();
    }
    //文章
    function article(){
        $news = M('news');
        
        $this->count();
        $cid ="cid = {$_SESSION['cid']}";
        $common=A("Common");  
        $count = $news->where($cid)->count();
        $listRows = 8;
        $common->beautify_page($count, $listRows);
        
       $this->personalNews = $news->where($cid)->order('time desc')->page($_GET['p']."+1,".$listRows)->select();
     
        $type = M('category');
        $this->type = $type->select();
    
        $this->display();
    }
    function del(){
        $perNews = M('news');
        $id ="id in({$_GET['id']})";
       // var_dump($id);
       $num = $perNews->where($id)->delete();
       if($num){
           $this->success("成功移除{$num}文章");
       }else{
           $this->error('移除文章失败');
       }
    }
    function createNews(){
        //var_dump($_POST);
        $this->upload();
        $info =$this->getInfo();
        
        $d= M("news");
        $d->create();
        $d->file_name=$info[0][savename];
       $num=$d->add();
        if($num > 0){
            $this->success("新增资讯成功");
        }else{
            $this->error("新增资讯失败");
        }
        $this->display();
    }
    
    //头像加载
    function portrait(){
        $pic = M('columnist');
        $id = "cid = ".$_SESSION['cid'];
        $this->pic = $pic->where($id)->getField('portrait');
        // var_dump($this->pic);
        $this->display();
    }
    //头像上传
    function picCheck(){
        $this->upload();
        $info =  $this->getInfo();
       //  var_dump($_POST);
        $m = M('columnist');
        $id = "cid = ".$_SESSION['cid'];
        $pic = array('portrait'=>"{$info[0][savename]}");
        $num = $m->where($id)->setField($pic);
        //var_dump(   $num );
        if($num){
            $this->success('上传成功',index);
        }else{
            $this->error('上传有误');
        }
        $this->display();
    }
    
    //基本资料
    function info(){
        $info = M('columnist');
        $id = "cid = ".$_SESSION['cid'];
        $data =  $info->where($id)->find();
        //用session读取 用户名  传入安全中心验证
        //$_SESSION['author_name'] = $data['author_name'] ;
    
        $this->assign('info',$data);
        //   var_dump($data);
        $this->display();
    }
    
    //修改 简介
    function depictSave(){
        $data = M('Columnist');
        $data->save($_POST);
        $this->success('保存成功');   
        //$this->display();
     }
/*     
    function update(){
        var_dump($_POST);
        
        $data = M('Columnist');
        $id = "cid = ".$_SESSION['cid'];
       
      //  $data->create();
        $num = $data->where($id)->field('author_name,wechat,depict')->save($_POST);
        if($num){
           // $this->success('保存成功');
        }else{
          //  $this->error('保存有误');
        }
           var_dump($num);
        $this->display();
    } */
    
    function security(){
    
        $this->display();
    }
    
    function pwd(){
      $_SESSION['cid'] =  I('get.pwd');
        $this->display();
    }
    
    function modifyPwd(){
        $m = D('Columnist');
        $id = "cid = ".$_SESSION['cid'];
        $pwd = $m->where($id)->getField('password');
        //var_dump($pwd);
        if($pwd ==md5($_POST['pwd'])){
            if($m->create()){
                // $_POST['member_password'] = md5($_POST['member_password']);
                $num = $m->where($id)->field('password')->save();
                //var_dump($m);
                $this->success('成功修改密码',U('Login/login'));
            }else{
                echo '<pre>';
                print_r($m->getError());
                echo '</pre>';
                $this->error('修改失败');
            }
        }else{
            $this->error('原始密码输入有误');
        }
        $this->display();
    }
    
    function email(){  
        $_SESSION['cid'] =  I('get.pwd');
        
        $this->display();
    }
    function modifyEmail(){
        $m = D('Columnist');
        if($m->create()){
            $id = "cid = ".$_SESSION['cid'];
            $num = $m->where($id)->setField('email', $_POST['email']);
           if($num){
                $this->success('更换邮箱成功',U('Login/login'));
            }else{
                $this->success('更换邮箱成功',U('Login/login'));
            }
        }else{
                echo '<pre>';
                print_r($m->getError());
                echo '</pre>';
                $this->error('修改失败');
            }
    }
}