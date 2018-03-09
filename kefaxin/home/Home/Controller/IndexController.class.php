<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    private function isMobile(){ 
  $useragent=isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : ''; 
  $useragent_commentsblock=preg_match('|\(.*?\)|',$useragent,$matches)>0?$matches[0]:'';    
  function CheckSubstrs($substrs,$text){ 
    foreach($substrs as $substr) 
      if(false!==strpos($text,$substr)){ 
        return true; 
      } 
      return false; 
  }
  $mobile_os_list=array('Google Wireless Transcoder','Windows CE','WindowsCE','Symbian','Android','armv6l','armv5','Mobile','CentOS','mowser','AvantGo','Opera Mobi','J2ME/MIDP','Smartphone','Go.Web','Palm','iPAQ');
  $mobile_token_list=array('Profile/MIDP','Configuration/CLDC-','160×160','176×220','240×240','240×320','320×240','UP.Browser','UP.Link','SymbianOS','PalmOS','PocketPC','SonyEricsson','Nokia','BlackBerry','Vodafone','BenQ','Novarra-Vision','Iris','NetFront','HTC_','Xda_','SAMSUNG-SGH','Wapaka','DoCoMo','iPhone','iPod'); 
     
  $found_mobile=CheckSubstrs($mobile_os_list,$useragent_commentsblock) || 
       CheckSubstrs($mobile_token_list,$useragent); 
     
  if ($found_mobile){ 
    return true; 
  }else{ 
    return false; 
  } 
}
    public function index(){
        if ($this->isMobile()) {
            header('Location:http://www.szkfx.com/index.php/Home/wap/');
        }
        //页面title中的网站名称
        $contact = M('contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //dump($site_info);
        //banner轮播
        $banner = M('banner');
        $ban = $banner->field('image')->select();
        $this->assign('ban',$ban);
        //方案内容
        $title = M('title');
        $res = $title->select();
        $this->assign('title',$res);
        //友情链接
        $flink = M('flink');
        $flink_list = $flink->limit(6)->select();
        $this->assign('flink',$flink_list);
        //网站底部产品系列
        $series = M('series');
        $btm_list = $series->where('level=1')->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        //网站底部产品方案
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);
        
        //dump($solution_list);
        //技术资讯文章
        $news = M('news');
        $news_list = $news->where('type=1')->limit(8)->order('id desc')->select();
        $this->assign('news_list',$news_list);
        $zixun_list = $news->where('type=0')->limit(8)->order('id desc')->select();
        $this->assign('zixun_list',$zixun_list);
        $this->assign('news_list',$news_list);
        //新闻动态文章
        $this->display();
    }
    public function aboutus(){
        //关于我们页面内容
        $aboutus = M('aboutus');
        $about = $aboutus->find();
        $this->assign('about',$about);
        //页面title中的网站名称
        $contact = M('contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //网站底部产品方案
        $title = M('title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);
        //网站底部产品系列
        //网站底部产品系列
        $series = M('series');
        $btm_list = $series->where('level=1')->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        $this->display();
    }
    public function contactus(){
        //页面title中的网站名称
        $contact = M('contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //网站底部产品方案
        $title = M('title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);
        //网站底部产品系列
        $series = M('series');
        $btm_list = $series->where('level=1')->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        //联系我们
        $contact = M('contact');
        $res = $contact->find();
        $this->assign('res',$res);

        $this->display();
    }
    public function content(){
        //页面title中的网站名称
        $contact = M('contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //网站底部产品方案
        $title = M('title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);
        //网站底部产品系列
        $series = M('series');
        $btm_list = $series->where('level=1')->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        //左侧产品系列
        $series = M('series');
        $product = M('product');
        $result = $series->where('level=1')->order('recomend desc')->select();
        $len = count($result);
        for ($i=0; $i < $len; $i++) { 
            $arr['pid'] = $result[$i]['id'];
            $arr['level'] = 2;
            $list = $series->where($arr)->select();
            $result[$i]['son'] = $list;
        }
        $this->assign('result',$result);
        //左侧联系我们
        $contact = M('contact');
        $res = $contact->find();
        $this->assign('res',$res);

        $solution = M('solution');
        $con['id']  = I('get.id');
        $news = M('news');
        if ($_GET['type']=='sol') {
            $result2 = $solution->where($con)->find();
            $type = $_GET['type'];
            $this->assign('type',$type);
        }else{
            $result2 = $news->where($con)->find();
        }
        $this->assign('result2',$result2);
        $this->display();
    }
    
    public function service(){  
    //页面title中的网站名称
        $contact = M('contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
    //网站底部产品方案
        $title = M('title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);  
    //产品服务页面servie
        $product = M('product');
        $series = M('series');
        $column = M('column');
        if ($_GET['id']) {//产品外键sid
            $boy['id'] = $_GET['id'];

            $ser_con['pid'] = $_GET['id'];
            $ser_num = $series->where($ser_con)->count();
            if ($ser_num>0) {
                $condition['pid'] = $_GET['id'];
                $ser_list = $series->where($condition)->find();
                // dump($ser_list);
                $id = $ser_list['id'];                
            }else{
                $id = $_GET['id'];
                //dump($ser_list);
            }
            $col_con['ser_id'] = $id;
            $col_con['col_name'] = array('neq','');
            $col_list = $column->where($col_con)->select();
            // echo $column->where($col_con)->select(false);
            //要显示的列
            $pro_con['ser_id'] = $id;
            $pro_len= count($col_list);
            $ziduan = array();
            for ($i=0; $i <$pro_len; $i++) { 
                $ziduan[] = $col_list[$i]['ziduan'];
            }
            $field = implode(',',$ziduan);
            $pro_list = $product->field($field.',guigeshu,beizhu,id,recomend')->where($pro_con)->order('recomend desc')->select();
            for ($k=0; $k < count($pro_list); $k++) {  
                for ($h=0; $h < count($col_list); $h++) { 
                    $pro_list[$k]['ziduan'][$h]['value']=$pro_list[$k][$col_list[$h]['ziduan']];
                    $pro_list[$k]['ziduan'][$h]['col_name']=$col_list[$h]['col_name'];
                }
            }
            $boy_list = $series->where($boy)->find();
            $series_name = $boy_list['name'];
        }else{////页面初始化时展现的产品
            $rest1 = $series->order('recomend desc')->limit(1)->find();
            $con3['pid'] = $rest1['id'];
            $rest2  = $series->where($con3)->find();
            if (count($rest2)>=1) {
                $alter['ser_id'] = $rest2['id'];
                $boy['id'] = $rest2['id'];
            }else{
                $alter['ser_id'] = $rest1['id'];
                $boy['id'] = $rest1['id'];
            }
            $col_con['ser_id'] = $boy['id'];
            $col_con['col_name'] = array('neq','');
            $col_list = $column->where($col_con)->select();//要显示的列
            $pro_con['ser_id'] = $boy['id'];
            $pro_len= count($col_list);
            $ziduan = array();
            for ($i=0; $i <$pro_len; $i++) { 
                $ziduan[] = $col_list[$i]['ziduan'];
            }
            $field = implode(',',$ziduan);
            $pro_list = $product->field($field.',guigeshu,beizhu,id,recomend')->where($pro_con)->order('recomend')->select();
            for ($k=0; $k < count($pro_list); $k++) {  
                for ($h=0; $h < count($col_list); $h++) { 
                    $pro_list[$k]['ziduan'][$h]['value']=$pro_list[$k][$col_list[$h]['ziduan']];
                    $pro_list[$k]['ziduan'][$h]['col_name']=$col_list[$h]['col_name'];
                }
            }
            $boy_list = $series->where($boy)->find();
            $series_name = $boy_list['name'];
        }
        $this->assign('series_name',$series_name);
        $this->assign('pro_list',$pro_list);
        $this->assign('col_list',$col_list);
        // dump($pro_list);
        // dump($init);
        //网站底部产品系列
        //$series = M('series');
        $btm_list = $series->where('level=1')->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        //所有产品系列名称
        $result = $series->where('level=1')->order('recomend desc')->select();
        $len = count($result);
        for ($i=0; $i < $len; $i++) { 
            $arr['pid'] = $result[$i]['id'];
            $arr['level'] = 2;
            $list = $series->where($arr)->select();
            $result[$i]['son'] = $list;
        }
        
        $this->assign('result',$result);
        $this->display();
    }
    public function solution(){
        //页面title中的网站名称
        $contact = M('contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //网站底部产品方案
        $title = M('title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);

        $sub_solution = M('solution');
        $tt = $title->select();
        $this->assign('tt',$tt);
        if ($_GET['id']) {//主类解决方案的ID
            $con['id'] = $_GET['id'];
            $solution = $title->where($con)->find();
            $sub_con['tid'] = $solution['id'];
            $sub_list = $sub_solution->where($sub_con)->select();
            $this->assign('sub_list',$sub_list);
            $this->assign('solution',$solution);
        }else{
            $solution = $title->order('id')->find();
            $sub_con['tid'] = $solution['id'];
            $sub_list = $sub_solution->where($sub_con)->select();
            $this->assign('sub_list',$sub_list);
            $this->assign('solution',$solution);  
        }
        $series = M('series');
        //网站底部产品系列
        $series = M('series');
        $btm_list = $series->where('level=1')->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        //左侧联系我们
        $contact = M('contact');
        $res = $contact->find();
        $this->assign('res',$res);        
        $this->assign('btm_list',$btm_list);
        $this->display();
    }
    public function technology(){
        //页面title中的网站名称
        $contact = M('contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //网站底部产品方案
        $title = M('title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);
        $series = M('series');
        //网站底部产品系列
        $series = M('series');
        $btm_list = $series->where('level=1')->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        //左侧产品系列
        $series = M('series');
        $product = M('product');
        $result = $series->where('level=1')->order('recomend desc')->select();
        $len = count($result);
        for ($i=0; $i < $len; $i++) { 
            $arr['pid'] = $result[$i]['id'];
            $arr['level'] = 2;
            $list = $series->where($arr)->select();
            $result[$i]['son'] = $list;
        }
        $this->assign('result',$result);
        //左侧联系我们
        $contact = M('contact');
        $res = $contact->find();
        $this->assign('res',$res);
        //新闻动态分页
        $news = M('news');
        $total = $news->where('type=1')->order('addtime desc')->count();//计算总数
        $page = new \Think\Page($total,8);
        $news_list = $news->where('type=1')->order('addtime desc')->limit($page->firstRow.",".$page->listRows)->select();
        $page->setConfig('theme',"<span class='pages'>页次%NOW_PAGE%/%TOTAL_PAGE%</span> %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span class='total'>共%TOTAL_ROW%条记录</span>");
        $page_show = $page->show();
        $this->assign('page_show',$page_show);
        $this->assign('news_list',$news_list);
        $this->display();
    }
    public function addLiuYan(){
        $info = json_decode($_GET['json']);
        $message = M('message');
        $data['time'] = date('Y-m-d H:i:s',time());
        $data['phone'] = $info[0];
        $data['name'] = $info[1];
        $data['content'] = $info[2];
        //dump($data);
        if ($message->add($data)) {
            echo 1;
        }else{
            echo 0;
        }
    }
    public function queryProduct(){
        $tb = $_GET['tb'];
        $con['id'] = I('get.id');
        //echo $tb.'<br>'.$con['id'];
        //return;
        if ($tb=='series') {
            $series = M('series');
            $list = $series->where($con)->find();
            echo json_encode($list);
        }elseif ($tb=='product') {
            $product = M('product');
            $list = $product->where($con)->find();
            echo json_encode($list);
        }
    }
    public function getPassage(){
        $con['id'] = $_GET['solid'];
        $title = M('title');
        $result = $title->where($con)->find();
        echo $result['passage'];
    }
    public function download(){
        $con['id'] = $_GET['pid'];
        $product = M('product');
        $res = $product->where($con)->find();
        if (is_file($res['guigeshu'])) {
            header("Content-type:application/octet-stream");
            $filename = basename($res['guigeshu']);
            header("Content-Disposition:attachment;filename = ".$filename);
            header("Accept-ranges:bytes");
            header("Accept-length:".filesize($file));
            readfile($file);
        }
    }
}