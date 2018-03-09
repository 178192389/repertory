<?php
//类型

class CategoryAction extends Action{
	function index(){
     //二级页面 类型加载
	   $type = M('category');
       $this->type = $type->select();   

   
      
       $typeNews = M('news');
       //分页加载
       $common = A('Common');
       //获取对应类型id
       $this->nameId = $type_id = $_GET['id'];
       $count = $typeNews->where("category_id =".$type_id)->count();
       $listRows = 10;
       $common->beautify_page($count, $listRows);
       
       //对 对应类型 文章数据 的加载
       $where = " category.category_id =".$type_id;
       $join=array('category on news.category_id = category.category_id','columnist on news.cid = columnist.cid');
       $variable = $typeNews->where($where)->join($join)->order('time desc')->page($_GET['p']."+1,".$listRows)->select();
      //var_dump($variable);
       $this->assign('dis', $variable);
        
	   //类型幻灯片数据加载
       $pic = $typeNews->where($where)->join($join)->order('time desc')->limit('1,5')->select();
        //var_dump($pic);
       $this->assign('pic',$pic);
       
	    $this->display();
	}
	
	protected function  Common(){
	    //加载 对应类型  id
	    $type = M('category');
	    $this->type = $type->select();
	       //$croe = M('member');
	    $news= M('news');
	    $this->keywords=$news->select();
	    $this->display();
	}

}