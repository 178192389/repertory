<?php
class CategoryAction extends CommonAction{
	function read(){
		$m = M('category');
		$type=$m->select();
		
	
		//$news = M('news');
		//$news->"";
	//	var_dump($type);
		$this->assign('data',$type);
		$this->display();
	}
	
	function add(){
		$this->display();
	}
	function create(){
		$m= M('category');
		$m->create();
	   $num=$m->add();
	   if($num){
	       $this->success('新增类型成功',read);
	   }
	}
	function del(){
	    $get = $_GET['id'];
	    $m = M('category');
	    $where="category_id in($get)";
	    $num=$m->where($where)->delete();
	   // var_dump($get);
    	if($num){
			$this->success("删除{$num}个类型",read);
		}else{
			$this->error('删除失败');
		}
	}
}
