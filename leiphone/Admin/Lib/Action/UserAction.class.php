<?php
class UserAction extends Action{
    function member(){
        $m =M('member');
        if($_POST['val']){
           $where['member_name|email|phone|member_gender']=array('like',"%{$_POST['val']}%");
           $data = $m->where($where)->select();
          // var_dump( $data);
        }else{
           $data=$m->select();
        }
       
        $this->assign('member',$data);
        $this->display();
    }
    
    function Del($db,$id){
      var_dump($_GET['id']);
       // $m =M('member');
        $where ="$id in({$_GET['id']})";
      $num =  $db->where($where)->delete();
        if($num){
            $this->success("成功移除{$num}个用户");
        }else{
            $this->error('移除用户失败');
        }
    }
  
    function memberDel(){
        $m =M('member');
        $this->Del($m,uid);
    }
    function authorDel(){
        $m =M('columnist');
        $this->Del($m,cid);     
    }
    function author(){
        $m =M('columnist');
        if($_POST['val']){
            $where['author_name|email|phone']=array('like',"%{$_POST['val']}%");
            $data = $m->where($where)->select();
            // var_dump( $data);
        }else{
            
            $data=$m->select();
        }
         
        $this->assign('member',$data);
        $this->display();
    }
    function addUser(){
        var_dump($_POST);
        $m = M('columnist');
            $m->create();
        $num = $m->add();
        var_dump($num );
        if($num){
            $this->success('添加用户成功');
        }else{
            $this->error('添加用户失败');
        }
        $this->display();
    }
    
    
    
    function admin(){
        $admin = M('admin');
        $admin->select();
        
       // var_dump($admin);
        
       $this->display(); 
    }
}