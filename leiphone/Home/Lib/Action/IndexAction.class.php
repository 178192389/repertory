<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
        //一级页面 加载类型
        $type = M('category');
        $this->type = $type->select();  
         
   
         $index = M('news');
         //加载分页类
         $common=A("Common");
         $count = $index->count();
         $listRows = 10;
         $common->beautify_page($count, $listRows);
     
          //关联查询   ,'user on news.uid = member.uid'
        $join=array('category on news.category_id = category.category_id','columnist on news.cid = columnist.cid');
        $this->data=$index->join($join)->order('time desc')->page($_GET['p']."+1,".$listRows)->select();

     // var_dump($this->data);
        //field('id,category_id,headline,file_name')->
        $pic = $index->join($join)->order('time desc')->limit('1,8')->select();
          //  var_dump($pic);
        $this->assign('pic',$pic);
        
        $this->display();
    }
  /*   function aaa(){
        $this->display();
    } */
   
}