<?php
	//对文章的 增 删 改 查
class NewsAction extends CommonAction{
	function select(){	
	    //类型查询	
		$c = M('category');
		$this->category=$c->select();
		
		$m =D("news");
		$listRows = 20;		
		//var_dump( $_GET['category_id']);
		if($_POST['category_id'] !=0 || $_GET['category_id']!=0){
		    //对单个类型的文章 加载
		    if($_GET['category_id']){
		        $where = "category_id=".$_GET['category_id'];
		    }else{
		        $where = "category_id=".$_POST['category_id']; 
		    }
		    $name = $m->where($where)->order('time desc,id desc')->page($_GET['p']."+1,".$listRows)->select();
		     //查找对应类型的名称
		    $this->typeName=$c->where($where)->find();
		  //  var_dump($this->typeName);
		    $this->count = $count = $m->where($where)->count();
		    $this->a=$m->where( $where." and news_status ='未审核'")->count();
            $this->b=$m->where($where." and news_status ='待审核'")->count();
            $this->c=$m->where($where." and news_status ='已审核'")->count();
            $this->d=$m->where( $where." and news_status ='未通过'")->count();
		}else{
		    $this->count = $count = $m->count();
		    $this->a=$m->where("news_status ='未审核'")->count();
            $this->b=$m->where("news_status ='待审核'")->count();
            $this->c=$m->where("news_status ='已审核'")->count();
            $this->d=$m->where("news_status ='未通过'")->count();
		    //全文章加载
		    $join = array("category on news.category_id=category.category_id ","columnist on news.cid = columnist.cid");
	        $name=$m->join($join)->order('time desc,id desc')->page($_GET['p']."+1,".$listRows)->select();
		  // var_dump($name);
		}
		
		$this->beautify_page($count,$listRows);
	    $this->assign('name',$name);
	    $this->assign('type',$_POST['category_id']);
	    
		$this->display();
	}
	function del(){
		$id =$_GET['id'];
		//var_dump($id);
		$m=M('news');
		/* if(is_array($id)){
			$where="id in(".implode(',',$id).")";
			var_dump($where);
		}else{
			$where='id='.$id;
		} */
		$where="id in($id)";
		$num=$m->where($where)->delete();
	
		if($num){
			$this->success("成功删除{$num}文章",U('News/select'));
		}else{
			$this->error('删除文章失败');
		}
	
	}

	function add(){
		$m = M('category');
		$this->id=$m->where('category_id')->select();
		$c = M('columnist');
		$this->cid=$c->select();
		//var_dump($this->cid);
		$this->display();
	}
	
	function create(){
		//var_dump($_POST);
		$this->upload();
		$info =$this->getInfo();
	
		$d= M("news");
		$d->create();
		$d->file_name=$info[0][savename];
		$d->time=date('y-m-d H:i:s',time());
		$num=$d->add();
		if($num > 0){
			$this->success("新增资讯成功",U("select"));
		}else{
			$this->error("新增资讯失败");
		}
	}
	//加载数据 修改
	function modify(){
	    $id = $_GET['id'];
	    $m=M('news');
	    $this->data=$m->find($id);
	    
	    $c = M('columnist');
	    $this->cid=$c->select();
	    
	  //  var_dump( $this->data);
	    $this->display();
	}
	//判定 修改是否成功
	function update(){
	    //$id = $_POST['id'];
	    $this->upload();
	    $info =$this->getInfo();
	    var_dump($info);
	     
	    $m=M('news');
	    $m->create();
	    $m->file_name=$info[0][savename];
	    $m->time=date('y-m-d H:i:s',time());
	    var_dump($_POST);
	    $num=$m->save();
	    if($num > 0){
	        $this->success("成功修改文章",select);
	    }else{
	        $this->error('修改失败');
	    }
	}

}