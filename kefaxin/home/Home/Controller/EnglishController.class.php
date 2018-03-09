<?php
namespace Home\Controller;
use Think\Controller;
class EnglishController extends Controller {
    public function index(){
        //页面title中的网站名称
        $contact = M('en_contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //dump($site_info);i
        //banner轮播
        $banner = M('en_banner');
        $ban = $banner->field('image')->select();
        // dump($ban);
        // $json = json_encode($ban);
        // $this->assign('banner',$json);
        $this->assign('ban',$ban);
        //方案内容
        $title = M('en_title');
        $res = $title->select();
        $this->assign('title',$res);
        //友情链接
        $flink = M('flink');
        $flink_list = $flink->limit(6)->select();
        $this->assign('flink',$flink_list);
        //网站底部产品系列
        $series = M('en_series');
        $btm_list = $series->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        //网站底部产品方案
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);
        //dump($solution_list);
        //技术资讯文章
        $news = M('en_news');
        $news_list = $news->where('type=1')->limit(4)->select();
        $this->assign('news_list',$news_list);
        $zixun_list = $news->where('type=1')->limit(4)->select();
        $this->assign('zixun_list',$zixun_list);
        $this->assign('news_list',$news_list);
        //新闻动态文章
        $this->display();
    }
    public function aboutus(){
        //关于我们页面内容
        $aboutus = M('en_aboutus');
        $about = $aboutus->find();
        $this->assign('about',$about);
        //页面title中的网站名称
        $contact = M('en_contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //网站底部产品方案
        $title = M('en_title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);
        //网站底部产品系列
        //网站底部产品系列
        $series = M('en_series');
        // print_r($series->select());
        // dump($series);
        $btm_list = $series->limit(5)->order('recomend desc')->select();
        // dump(count($series->select()));
        $this->assign('btm_list',$btm_list);
        $this->display();
    }
    public function contactus(){
        //页面title中的网站名称
        $contact = M('en_contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //网站底部产品方案
        $title = M('en_title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);
        //网站底部产品系列->order('recomend desc')
        $series = M('en_series');
        $btm_list = $series->limit(5)->select();
        $this->assign('btm_list',$btm_list);
        //联系我们
        $contact = M('en_contact');
        $res = $contact->find();
        $this->assign('res',$res);

        $this->display();
    }
    public function content(){
        //页面title中的网站名称
        $contact = M('en_contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //网站底部产品方案
        $title = M('en_title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);
        //网站底部产品系列
        $series = M('en_series');
        $btm_list = $series->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        //左侧产品系列
        $series = M('en_series');
        $product = M('en_product');
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
        $contact = M('en_contact');
        $res = $contact->find();
        $this->assign('res',$res);

        $solution = M('en_solution');
        $con['id']  = I('get.id');
        $news = M('en_news');
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
        $contact = M('en_contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
    //网站底部产品方案
        $title = M('en_title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);  
    //产品服务页面servie
        $product = M('en_product');
        $series = M('en_series');
        if ($_GET['id']) {//产品外键sid
            $boy['id'] = $_GET['id'];
            $boy_list = $series->where($boy)->find();
            $series_name = $boy_list['name'];
            $alter['fk_pid'] = $_GET['id'];
            $init = $product->where($alter)->select();
        }else{////页面初始化时展现的产品
            $rest1 = $series->order('recomend desc')->limit(1)->find();
            $con3['pid'] = $rest1['id'];
            $rest2  = $series->where($con3)->find();
            if (count($rest2)>=1) {
                $alter['fk_pid'] = $rest2['id'];
                $boy['id'] = $rest2['id'];
            }else{
                $alter['fk_pid'] = $rest1['id'];
                $boy['id'] = $rest1['id'];
            }
            $boy_list = $series->where($boy)->find();
            $series_name = $boy_list['name'];
            $init = $product->where($alter)->select();
        }
        $this->assign('series_name',$series_name);
        $this->assign('init',$init);
        // dump($init);
        //网站底部产品系列
        //$series = M('en_series');
        $btm_list = $series->limit(5)->order('recomend desc')->select();
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
        $contact = M('en_contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //网站底部产品方案
        $title = M('en_title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);

        $sub_solution = M('en_solution');
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
        $series = M('en_series');
        //网站底部产品系列
        $series = M('en_series');
        $btm_list = $series->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        //左侧联系我们
        $contact = M('en_contact');
        $res = $contact->find();
        $this->assign('res',$res);        
        $this->assign('btm_list',$btm_list);
        $this->display();
    }
    public function technology(){
        //页面title中的网站名称
        $contact = M('en_contact');
        $site_info = $contact->find();
        $this->assign('site_info',$site_info);
        //网站底部产品方案
        $title = M('en_title');
        $solution_list = $title->limit(5)->select();
        $this->assign('solution_list',$solution_list);
        $series = M('en_series');
        //网站底部产品系列
        $series = M('en_series');
        $btm_list = $series->limit(5)->order('recomend desc')->select();
        $this->assign('btm_list',$btm_list);
        //左侧产品系列
        $series = M('en_series');
        $product = M('en_product');
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
        $contact = M('en_contact');
        $res = $contact->find();
        $this->assign('res',$res);
        //新闻动态分页
        $news = M('en_news');
        $total = $news->where('type=1')->order('addtime desc')->count();//计算总数
        $page = new \Think\Page($total,5);
        $news_list = $news->where('type=1')->order('addtime desc')->limit($page->firstRow.",".$page->listRows)->select();
        $page->setConfig('theme',"<span class='pages'>page%NOW_PAGE%/%TOTAL_PAGE%</span> %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span class='total'>%TOTAL_ROW% articles</span>");
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
        // print_r($data);
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
            $series = M('en_series');
            $list = $series->where($con)->find();
            echo json_encode($list);
        }elseif ($tb=='product') {
            $product = M('en_product');
            $list = $product->where($con)->find();
            echo json_encode($list);
        }
    }
    public function getPassage(){
        $con['id'] = $_GET['solid'];
        $title = M('en_title');
        $result = $title->where($con)->find();
        echo $result['passage'];
    }
    // public function test(){
    //     header("Content-type:text/html;charset=utf-8;");
    //     $series = M('en_series');
    //     $arr = array(45,53,54,56,57,59,60,68,72,73,74,75,80);
    //     $len = count($arr);
    //     for ($i=0; $i < $len; $i++) { 
    //         $con['id'] = $arr[$i];
    //         $bol = $series->where($con)->delete();
    //         if ($bol) {
    //             echo 'yes<br>';
    //         }
    //     }
    // }
}