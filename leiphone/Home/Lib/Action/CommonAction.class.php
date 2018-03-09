<?php
class CommonAction extends Action{
 
//     分页的处理
    function beautify_page($count,$listRows){
        import('ORG.Util.Page');
      //  $count = $db->count();
        $page = new Page($count,$listRows);
        //自定义 分页
        $str="<li class='previous'>%upPage%</a></li>";
        $str.="<li>%first% %prePage% %linkPage% %nextPage% %end%</li>";
        $str.="<li class='next'>%downPage%</li>";
       /*  $str="<ul class='pager'><li class='previous'>%upPage%</a></li>";
            
        $str.="<li class='next'>%downPage%</li></ul>"; */
       $page->setConfig('theme',$str);
       
        $show = $page->show();
        $this->assign('page',$show);
         
    }
    
    Public function verify($width=80,$height=46){
        import('ORG.Util.Image');
        Image::buildImageVerify('5','1','png',$width,$height);
        //Image::GBVerify('4','png','','46','simhei.ttf');
    }
    /*类型对应的文章 封装  */
   /*  function type_num($num){
        $m = M('news');
        $common=A("Common");
        $listRows = 3;
        $common->beautify_page($m, $listRows);
        $join=array('category on news.category_id = category.category_id');
        $this->data=$m->where("category.category_id =$num")->join($join)->select();
        //where("category.category_id =$num")
    }
     */
  
    
}