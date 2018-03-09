<?php
namespace Home\Controller;
use Think\Controller;
class IndexenController extends Controller {
    public function index(){
        if ($_SESSION['adminname'] != '') {
            $this->display();
        }else{
            $this->display('login');
        }
    }
    public function _empty(){
        $this->display('System/show');
    }
    //后台登录页面
    public function login(){
        $_SESSION['adminname'] = '';
        $this->display();
    }
    public function loginCheck(){
        $con['ad_name'] = I('get.name');
        $con['ad_pwd'] = md5(I('get.pwd'));
        $admin = M('admin');   
        $result = $admin->where($con)->find();
        if ($result) {
            $_SESSION['adminname'] = $result['ad_name'];
            echo 1;
        }else{
            echo 2;
        }
    }
    public function addProductSeries(){
        $series = M('en_series');
        $con['level'] = 1;
        $result = $series->where($con)->select();
        $this->assign('result',$result);
        $this->display();
    }
    public function seriesManage(){
        $series = M('en_series');
        $str = '';
        if ($_POST['name']) {
            $con['name'] = array('like',"%{$_POST['name']}%");
            $str = $_POST['name'];
        }else{
            $con['name'] = array('like',"%{$_GET['name']}%");
            $str = $_GET['name'];
        }
        $con['level'] = 1;
        $total = $series->where($con)->count();//计算总数
        $page = new \Think\Page($total,5);
        $page->parameter = array('name'=>$str);
        $page_list = $series->where($con)->limit($page->firstRow.",".$page->listRows)->select();
        $page->setConfig('theme',"<span class='pages'>页次%NOW_PAGE%/%TOTAL_PAGE%</span> %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span class='total'>共%TOTAL_ROW%条记录</span>");
        $page_show = $page->show();
        $slen = count($page_list);
        for ($i=0; $i < $slen; $i++) { 
            $ser_con['pid'] = $page_list[$i]['id'];
            $page_list[$i]['subseries'] = $series->where($ser_con)->select();
        }
        $this->assign('page_list',$page_list);
        $this->assign('page_show',$page_show);
        $this->display();
    }
    public function updateSeries(){
        $series = M('en_series');
        $con['id'] = I('get.id');
        $data['name'] = I('post.name');
        $data['recomend'] = I('post.show');
        $data['miaoshu'] = $_POST['miaoshu'];
        $data['keywords'] = $_POST['keywords'];
        // $data['jieshao'] = $_POST['jieshao'];
        //$result = $series->where($con)->find();
        if ($series->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error('修改失败'.$series->getError());
        }
    }
    public function addZixun(){
        $this->display();
    }
    public function zixunAdd(){
        $data['title'] = I('post.title');
        $data['content'] = $_POST['content'];
        $data['type'] = I('post.type');
        $data['keywords'] = I('post.keywords');
        $data['miaoshu'] = I('post.miaoshu');
        $data['addtime'] = date('Y-m-d H:i:s',time());
        $news = M('en_news');
        if ($news->add($data)) {
            $this->success('添加成功');
        }else{
            $this->error($news->getError());
        }
    }
    public function updateZixun(){
        $con['id'] = $_GET['id'];
        $data['title'] = I('post.title');
        $data['content'] = $_POST['content'];
        $data['keywords'] = I('post.keywords');
        $data['miaoshu'] = I('post.miaoshu');
        //echo $data['miaoshu'].$data['keywords'];
        $news = M('en_news');
        if ($news->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error($news->getError());
        }
    }
    public function zixunManage(){
        $news = M('en_news');
        $total = $news->where('type=1')->count();//计算总数
        $page = new \Think\Page($total,5);
        $page_list = $news->where('type=1')->limit($page->firstRow.",".$page->listRows)->select();
        $page->setConfig('theme',"<span class='pages'>页次%NOW_PAGE%/%TOTAL_PAGE%</span> %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span class='total'>共%TOTAL_ROW%条记录</span>");
        $page_show = $page->show();
        // dump($page_list);
        $this->assign('page_list',$page_list);
        $this->assign('page_show',$page_show);
        $this->display();
    }
    public function deleteZixun(){
        $con['id'] = I('get.id');
        $con['type'] = 1;
        $news = M('en_news');
        //$result = $news->where($con)->find();
        if ($news->where($con)->delete()) {
            echo 1;
        }else{
           echo 0;
        }
    }
    public function addNews(){
        $this->display();
    }
    public function newsManage(){
        $news = M('en_news');
        $total = $news->where('type=0')->count();//计算总数
        $page = new \Think\Page($total,5);
        $page_list = $news->where('type=0')->limit($page->firstRow.",".$page->listRows)->select();
        $page->setConfig('theme',"<span class='pages'>页次%NOW_PAGE%/%TOTAL_PAGE%</span> %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span class='total'>共%TOTAL_ROW%条记录</span>");
        $page_show = $page->show();
        $this->assign('page_list',$page_list);
        $this->assign('page_show',$page_show);
        $this->display();
    }
    public function updateNews(){
        $con['id'] = $_GET['id'];
        $data['title'] = I('post.title');
        $data['content'] = $_POST['content'];
        $data['keywords'] = I('post.keywords');
        $data['miaoshu'] = I('post.miaoshu');
        $news = M('en_news');
        if ($news->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error($news->getError());
        }
    }
    public function deleteNews(){
        $con['id'] = I('get.id');
        $con['type'] = 0;
        $news = M('en_news');
        if ($news->where($con)->delete()) {
            echo 1;
        }else{
           echo 0;
        }
    }
    public function addProduct(){
        $series = M('en_series');
        $list = $series->order('pid')->select();
        for ($i=0; $i < count($list); $i++) { 
            $con['pid'] = $list[$i]['id'];
            $res = $series->where($con)->select();
            if (count($res)>=1) {
                unset($list[$i]);
            }
        }
        $this->assign('series',$list);
        $this->display();
    }
    public function productAdd(){
        $product = M('en_product');
        $data['fk_pid'] = $_POST['fk_pid'];
        $data['type'] = $_POST['type'];
        $data['vin'] = $_POST['vin'];
        $data['vout'] = $_POST['vout'];
        $data['iout'] = $_POST['iout'];
        $data['jingtai'] = $_POST['jingtai'];
        $data['rate'] = $_POST['rate'];
        $data['jingdu'] = $_POST['jingdu'];
        $data['fengz'] = $_POST['fengz'];
        $data['neizu'] = $_POST['neizu'];
        $data['dianliang'] = $_POST['dianliang'];
        $data['guocong'] = $_POST['guocong'];
        $data['guofang'] = $_POST['guofang'];
        $data['beizhu'] = $_POST['beizhu'];
        
        $file = $_FILES['guigeshu'];
        if ($file['name']=='') {
           $data['guigeshu'] = '';
        }else{
            $config = array(
            'maxSize'    =>    0,
            'savePath'   =>    '/series_pdf/',
            'saveName'   =>    time().'_'.mt_rand(10000,99999),
            'exts'       =>    array('pdf'),
            'autoSub'    =>    true,
            'subName'    =>    array('date','Ymd'),
            );
            $upload = new \Think\Upload($config);// 
            $info = $upload->upload();
            if (!$info) {
                $this->error('上传失败'.$info->getError());
            }
            $data['guigeshu'] = 'Uploads'.$info['guigeshu']['savepath'].$info['guigeshu']['savename'];
        }
        if ($product->add($data)) {
            $this->success('添加成功');
        }else{
            $this->error('添加失败');
        }
    }
    public function productManage(){
        $series = M('en_series');
        $product = M('en_product');
        $total = $series->count();//计算总数
        $page = new \Think\Page($total,10);
        $page->parameter = array('name'=>$str);
        $page_list = $series->limit($page->firstRow.",".$page->listRows)->select();
        $page->setConfig('theme',"<span class='pages'>页次%NOW_PAGE%/%TOTAL_PAGE%</span> %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span class='total'>共%TOTAL_ROW%条记录</span>");
        $page_show = $page->show();
        $slen = count($page_list);
        // dump($page_list);
        for ($i=0; $i < $slen; $i++) { 
            $pro_con['fk_pid'] = $page_list[$i]['id'];
            $page_list[$i]['total'] = $product->where($pro_con)->count();
            // if ($page_list[$i]['total']<=0) {
            //     unset($page_list[$i]);
            // }
        }
        $this->assign('page_list',$page_list);
        $this->assign('page_show',$page_show);
        $this->display();
    }
    public function updateProduct(){
        $con['id'] = $_GET['id'];
        $product = M('en_product');
        $result = $product->where($con)->find();
        $data['type'] = $_POST['type'];
        $data['vin'] = $_POST['vin'];
        $data['vout'] = $_POST['vout'];
        $data['iout'] = $_POST['iout'];
        $data['jingtai'] = $_POST['jingtai'];
        $data['rate'] = $_POST['rate'];
        $data['jingdu'] = $_POST['jingdu'];
        $data['fengz'] = $_POST['fengz'];
        $data['neizu'] = $_POST['neizu'];
        $data['dianliang'] = $_POST['dianliang'];
        $data['guocong'] = $_POST['guocong'];
        $data['guofang'] = $_POST['guofang'];
        $data['beizhu'] = $_POST['beizhu'];
        $file = $_FILES['guigeshu'];
        if ($file['name']=='') {
           $data['guigeshu'] = $result['guigeshu'];
        }else{
            if (is_file($result['guigeshu'])) {
                unlink($result['guigeshu']);
            }
            $config = array(
            'maxSize'    =>    0,
            'savePath'   =>    '/series_pdf/',
            'saveName'   =>    time().'_'.mt_rand(10000,99999),
            'exts'       =>    array('pdf'),
            'autoSub'    =>    true,
            'subName'    =>    array('date','Ymd'),
            );
            $upload = new \Think\Upload($config);// 
            $info = $upload->upload();
            if (!$info) {
                $this->error('上传失败'.$info->getError());
            }
            $data['guigeshu'] = 'Uploads'.$info['guigeshu']['savepath'].$info['guigeshu']['savename'];
        }
        //dump($data);
        if ($product->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error('修改失败');//.$product->getError()
        }
    }
    public function productUpdate(){
        $product = M('en_product');
        $series = M('en_series');
        $con['fk_pid'] = $_GET['id'];
        $alt['id'] = $_GET['id'];
        $series_name = $series->where($alt)->field('name')->find();
        $list = $product->where($con)->select();
        $this->assign('series_name',$series_name['name']);
        $this->assign('list',$list);
        $this->display();
    }
    public function delProduct(){
        $con['id'] = $_GET['id'];
        $product = M('en_product');
        $res = $product->where($con)->find();
        if(is_file($res['guigeshu'])){
            unlink($res['guigeshu']);
        }
        if ($product->where($con)->delete()) {
            echo 1;
        }else{
            echo 0;
        }
    }
    public function deletePro(){
        $arr = json_decode($_GET['str']);
        $product = M('en_product');
        $len = count($arr);
        for ($i=0; $i < $len; $i++) { 
            $con['id'] = $arr[$i];
            $result = $product->where($con)->find();
            if (is_file($result['guigeshu'])) {
                unlink($result['guigeshu']);
            }
            $cc = $product->where($con)->delete();
            if (!$cc) {
                echo 0;
            }
        }
        echo 1;
    }
    // public function proManagement(){
    //     $con['sid'] = $_GET['id'];
    //     //所属系列
    //     $series = M('en_series');
    //     $sname = $series->field('name')->where($con2)->find();
    //     $this->assign('sname',$sname['name']);

    //     $con2['id'] = $_GET['id'];
    //     $product = M('en_product');
    //     $product_list = $product->where($con)->select();
    //     $this->assign('product_list',$product_list);
    //     $this->display();
    // }
    public function liuyanManage(){
        $message = M('message');
        $para = array();
        if ($_POST['column']) {
            $column = $_POST['column'];
            if ($column == '') {
                $con['id'] = array('like',"%%");
                $para = array();
            }else{
                $content = $_POST['content'];
                $con[$column] = array('like',"%{$content}%");
                $para['column'] = $column;
                $para['content'] = $content;
            }
        }else{
            if ($_GET['column'] && $_GET['content']) {
                $column = $_GET['column'];
                $content = $_GET['content'];
                $para['column'] = $column;
                $para['content'] = $content;
                $con[$column] = array('like',"%{$content}%");
            }else{
                 $con['id'] = array('like',"%%");
            } 
        }
        $total = $message->where($con)->count();//计算总数
        $page = new \Think\Page($total,5);
        if (count($para) != 0) {
            foreach ($para as $key => $value) {
                $page->parameter[$key] = $value;
            }
        }
        $page_list = $message->where($con)->limit($page->firstRow.",".$page->listRows)->select();
        $page->setConfig('theme',"<span class='pages'>页次%NOW_PAGE%/%TOTAL_PAGE%</span> %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span class='total'>共%TOTAL_ROW%条记录</span>");
        $page_show = $page->show();
        $this->assign('page_list',$page_list);
        $this->assign('page_show',$page_show);
        $this->display();
    }
    public function delliuyan(){
        $con['id'] = I('get.id');
        $message = M('message');
        $result = $message->where($con)->delete();
        if ($result) {
            echo 1;
        }else{
            echo 0;
        }
    }
    public function addSeries(){
        $series = M('en_series');
        $data['name'] = I('post.name');
        $data['miaoshu'] = $_POST['miaoshu'];
        $data['keywords'] = $_POST['keywords'];
        $pid= I('post.pid');
        $data['pid'] = $pid;
        if ($pid>0) {
            $data['level'] = 2;
        }else{
            $data['level'] = 1;
        }
        //dump($data);
        if ($series->add($data)) {
            $this->success('添加成功');
        }else{
            $this->error('添加失败');
        }
    }
    public function delSeries(){
        $con['id'] = I('get.id');
        $series = M('en_series');
        //echo $con['id'];
        $result = $series->where($con)->delete();
        if ($result) {
            echo 1;
        }else{
            echo 0;
        }
    }
    public function uniqueSeries(){
        $con['name'] = I('get.name');
        $series = M('en_series');
        if ($series->where($con)->find()) {
            echo 1;
        }else{
            echo 0;
        }
    }
    public function addFlink(){
        $this->display();
    }
    public function flinkAdd(){
        $flink = M('flink');
        $data['website'] = I('post.website');//网站名称
        $data['addr']  = I('post.addr');//链接地址  
        $config = array(
            'maxSize'    =>    2097152,
            'savePath'   =>    '/flink_imgs/',
            'saveName'   =>    time().'_'.mt_rand(10000,99999),
            'exts'       =>    array('jpg', 'gif', 'png', 'jpeg','bmp'),
            'autoSub'    =>    false,
            'subName'    =>    false,
        );
        $upload = new \Think\Upload($config);// 
        $info = $upload->upload();
        $data['logo'] = 'Uploads'.$info['logo']['savepath'].$info['logo']['savename'];
        //dump($data);
        if ($flink->add($data)) {
            $this->success('添加成功');
        }else{
            $this->error('添加失败'.$info->getError());
        }
    }
    public function flinkManage(){
        $flink = M('flink');
        $list = $flink->select();
        $this->assign('flink',$list);
        $this->display();
    }
}