<?php
header('content-type:text/html; charset= utf-8');
class SiteAction extends ProtectAction{
    function index(){  
        $m = M('member');
        $id = "uid = ".$_SESSION['id'];
        $data = $m->where($id)->field(array('member_name','depict','member_portrait'))->find();
        $_SESSION['pic'] = $data['member_portrait'];
      
        $this->assign('data',$data);
        $this->display();
    }
    //头像加载
    function portrait(){
        $pic = M('member');
        $id = "uid = ".$_SESSION['id'];
        $this->pic = $pic->where($id)->getField('member_portrait');        
       // var_dump($this->pic);
        $this->display();
    }
    //头像上传
    function picCheck(){
       $this->upload();
       $info =  $this->getInfo();
       var_dump($_POST);
       $m = M('member');
       $id = "uid = ".$_SESSION['id'];
       $pic = array('member_portrait'=>"{$info[0][savename]}");
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
        $info = M('member');
        $id = "uid = ".$_SESSION['id'];
        $data =  $info->where($id)->find();
        //用session读取 用户名  传入安全中心验证
        $_SESSION['member_name'] = $data['member_name'] ;
        
        $this->assign('info',$data);
     //   var_dump($data);
        $this->display();
    }
    
    function update(){
         var_dump($_POST);
  
         $data = M('Member');
         $id = "uid = ".$_SESSION['id'];
        
       /*   if($data->create()){ */
         $field =array('member_name'=>$_POST['member_name'],'member_gender'=>$_POST['member_gender'],'wechat'=>$_POST['wechat'],'depict'=>$_POST['depict']);
         $num = $data->where($id)->setField($field);
             if($num){
                     $this->success('保存成功');
                 }else{
                   $this->error('保存有误');
                 } 
             var_dump($num);
        /*  }else{
             echo '<pre>';
             print_r($data->getError());
             echo '</pre>';
            $this->error();
         } */
         $this->display();
    }
    
    function security(){
    
        $this->display();
    } 
    
    function pwd(){
        $this->display();
    }
    function modifyPwd(){
        $m = D('Member');
        $id = "uid = ".$_SESSION['id'];
        $pwd = $m->where($id)->getField('member_password');
        //var_dump($pwd);
        if($pwd ==md5($_POST['pwd'])){
           if($m->create()){
              // $_POST['member_password'] = md5($_POST['member_password']);
              $num = $m->where($id)->field('member_password')->save(); 
              //var_dump($m);
                $this->success('成功修改密码',U('Login/login'));
            }else{
              echo '<pre>';
             print_r($m->getError());
             echo '</pre>';
            } 
        }else{
          $this->error('原始密码输入有误');
        } 
        $this->display();
    }
    
    function email(){
        $this->display(); 
    }
    function modifyEmail(){
        $m = D('member');
        if($m->create()){
            $id = "uid = ".$_SESSION['id'];
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

?>