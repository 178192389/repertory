<?php
class NewsAction extends Action{
    function index(){
        $type = M('category');
        $this->type = $type->select();
         
        $news = M('news');
        $type = $_GET['type'];
        $this->assign('cid', $type);
        
        //根据 跳转过来的 文字ID 加载数据
        $id ="id=".$_GET['nid'];
       $variable =  $news->where($id)->find();
        $this->assign('news', $variable);
        
        $columnist= M('columnist');
        $cid= "cid=".$variable['cid'];
       $this->author= $columnist->where( $cid)->find();
         //var_dump( $author);
        $this->display();
    }
}