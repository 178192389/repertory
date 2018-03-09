<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
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
        $series = M('series');
        $con['level'] = 1;
        $result = $series->where($con)->select();
        $this->assign('result',$result);
        $this->display();
    }
    public function seriesManage(){
        $series = M('series');
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
        $page_list = $series->where($con)->order('recomend desc')->limit($page->firstRow.",".$page->listRows)->select();
        $page->setConfig('theme',"<span class='pages'>页次%NOW_PAGE%/%TOTAL_PAGE%</span> %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span class='total'>共%TOTAL_ROW%条记录</span>");
        $page_show = $page->show();
        $slen = count($page_list);
        for ($i=0; $i < $slen; $i++) { 
            $ser_con['pid'] = $page_list[$i]['id'];
            $page_list[$i]['subseries'] = $series->where($ser_con)->select();
        }
        // dump($page_list);
        $this->assign('page_list',$page_list);
        $this->assign('page_show',$page_show);
        $this->display();
    }
    public function updateSeries(){
        $series = M('series');
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
        $news = M('news');
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
        $news = M('news');
        if ($news->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error($news->getError());
        }
    }
    public function zixunManage(){
        $news = M('news');
        $total = $news->where('type=1')->count();//计算总数
        $page = new \Think\Page($total,10);
        $page_list = $news->where('type=1')->limit($page->firstRow.",".$page->listRows)->order('id desc')->select();
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
        $news = M('news');
        //$result = $news->where($con)->find();
        if ($news->where($con)->delete()) {
            echo 1;
        }else{
           echo 0;
        }
    }
    //新闻动态
    public function addActive(){
        $this->display();
    }
    public function activeAdd(){
        $data['title'] = I('post.title');
        $data['content'] = $_POST['content'];
        $data['type'] = I('post.type');
        $data['keywords'] = I('post.keywords');
        $data['miaoshu'] = I('post.miaoshu');
        $data['addtime'] = date('Y-m-d H:i:s',time());
        $data['type'] = 0;
        $news = M('news');
        if ($news->add($data)) {
            $this->success('添加成功');
        }else{
            $this->error($news->getError());
        }
    }
    public function updateActive(){
        $con['id'] = $_GET['id'];
        $data['title'] = I('post.title');
        $data['content'] = $_POST['content'];
        $data['keywords'] = I('post.keywords');
        $data['miaoshu'] = I('post.miaoshu');
        //echo $data['miaoshu'].$data['keywords'];
        $news = M('news');
        if ($news->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error($news->getError());
        }
    }
    public function activeManage(){
        $news = M('news');
        $total = $news->where('type=0')->count();//计算总数
        $page = new \Think\Page($total,10);
        $page_list = $news->where('type=0')->limit($page->firstRow.",".$page->listRows)->order('id desc')->select();
        $page->setConfig('theme',"<span class='pages'>页次%NOW_PAGE%/%TOTAL_PAGE%</span> %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span class='total'>共%TOTAL_ROW%条记录</span>");
        $page_show = $page->show();
        // dump($page_list);
        $this->assign('page_list',$page_list);
        $this->assign('page_show',$page_show);
        $this->display();
    }
    public function deleteActive(){
        $con['id'] = I('get.id');
        $con['type'] = 0;
        $news = M('news');
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
        $news = M('news');
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
        $news = M('news');
        if ($news->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error($news->getError());
        }
    }
    public function deleteNews(){
        $con['id'] = I('get.id');
        $con['type'] = 0;
        $news = M('news');
        if ($news->where($con)->delete()) {
            echo 1;
        }else{
           echo 0;
        }
    }
    public function addProduct(){
        $con['id'] = I('get.id');//产品系列ID        
        $series = M('series');
        $column = M('column');
        $list = $series->where($con)->find();
        $col_con['ser_id'] = I('get.id');
        $col_con['col_name'] = array('neq','');
        $col_list = $column->where($col_con)->select();
        //dump($col_list);
        $this->assign('list',$list);
        // dump($list);        
        $this->assign('col_list',$col_list);
        $this->display();
    }
    public function productAdd(){        
        // return false;
        $product = M('product');
        $post_arr = I('post.');
        $keys = array_keys($post_arr);
        //dump($keys);
        $col_arr = array();
        $total = count($keys);
        for($i=0;$i<$total;$i++){
            $var = preg_match('/^col\d{1,}/',$keys[$i]);
            if ($var) {
                $col_arr[] = $keys[$i];
            }
        }
        $count = count($col_arr);
        for($k=0;$k<$count;$k++){
            $data[$col_arr[$k]] = $_POST[$col_arr[$k]];
        }
        // $data['beizhu'] = $_POST['beizhu'];
        $data['ser_id'] = $_GET['id'];
        // dump($col_arr);
        $file = $_FILES['guigeshu'];
        if ($file['name']=='') {
           $data['guigeshu'] = '';
        }else{
            $config = array(
            'maxSize'    =>    0,
            'savePath'   =>    '/product_pdf/',
            'saveName'   =>    time().'_'.mt_rand(10000,99999),
            'exts'       =>    array('pdf'),
            'autoSub'    =>    false,
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
        if ($product->add($data)) {
            $this->success('添加成功');
        }else{
            $this->error('添加失败');
        }
    }
    public function productManage(){
        $id = $_GET['id']; //seriesID  
        $col_con['ser_id'] = $id;
        $col_con['col_name'] = array('neq','');
        $series = M('series');
        $product = M('product');
        $column = M('column');
        $ser_con['id'] = $id;
        $ser_list = $series->where($ser_con)->find();
        $col_list = $column->where($col_con)->select();//要显示的列
        //dump($col_list);
        $pro_con['ser_id'] = $id;
        $pro_len= count($col_list);
        $ziduan = array();
        for ($i=0; $i <$pro_len; $i++) { 
            $ziduan[] = $col_list[$i]['ziduan'];
        }
        $field = implode(',',$ziduan);
        $pro_list = $product->field($field.',guigeshu,beizhu,id,recomend')->where($pro_con)->select();
        // echo count($col_list);
        for ($k=0; $k < count($pro_list); $k++) {    
            // dump(123);
            for ($h=0; $h < count($col_list); $h++) { 
                $pro_list[$k]['ziduan'][$h]['value']=$pro_list[$k][$col_list[$h]['ziduan']];
                $pro_list[$k]['ziduan'][$h]['col_name']=$col_list[$h]['col_name'];
                $pro_list[$k]['ziduan'][$h]['ziduan']=$col_list[$h]['ziduan'];
                $pro_list[$k]['ziduan'][$h]['id']=$pro_list[$k]['id'];
            }
        }
        $this->assign('pro_list',$pro_list);
        $this->assign('col_list',$col_list);
        $this->assign('ser_list',$ser_list);
        $this->assign('ziduan',$ziduan);
        // dump($pro_list);
        // dump($col_list);
        $this->display();
    }
    public function updateProduct(){
        $product = M('product');
        $post_arr = I('post.');
        $keys = array_keys($post_arr);
        $con['id'] = $_GET['id'];
        // dump($_GET['id']);
        $pro_list = $product->where($con)->find();
        $col_arr = array();
        $total = count($keys);
        for($i=0;$i<$total;$i++){
            $var = preg_match('/^col\d{1,}/',$keys[$i]);
            if ($var) {
                $col_arr[] = $keys[$i];
            }
        }
        $count = count($col_arr);
        for($k=0;$k<$count;$k++){
            $data[$col_arr[$k]] = $_POST[$col_arr[$k]];
        }
        $data['beizhu'] = $_POST['beizhu'];
        $data['recomend'] = $_POST['recomend'];
        $file = $_FILES['guigeshu'];
        if ($file['name']=='') {
           $data['guigeshu'] = $pro_list['guigeshu'];
        }else{
            $config = array(
            'maxSize'    =>    0,
            'savePath'   =>    '/product_pdf/',
            'saveName'   =>    time().'_'.mt_rand(10000,99999),
            'exts'       =>    array('pdf'),
            'autoSub'    =>    false,
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
            $this->error('修改失败');
        }
    }
    
    public function deleteProduct(){
        $con['id'] = $_GET['id'];
        $product = M('product');
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
        $series = M('series');
        $column = M('column');
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
        if ($series->add($data)) {
            $lastId = $series->query('select last_insert_id() as ser_id');
            $ser_id = $lastId[0]['ser_id'];
            for ($i=1; $i <= 15; $i++) { 
                $col = 'col'.$i;
                $col_data['ser_id'] = $ser_id;
                $col_data['ziduan'] = $col;
                $column->add($col_data);           
            }
            $data1['ser_id'] = $ser_id;
            $data1['ziduan'] = 'guigeshu';   
            $data2['ser_id'] = $ser_id;
            $data2['ziduan'] = 'beizhu';
            $column->add($data1);
            $column->add($data2);
            $this->success('添加成功');
        }else{
            //echo '添加失败';
            $this->error('添加失败');
        }
    }
    public function delSeries(){
        $con['id'] = I('get.id');
        $series = M('series');
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
        $series = M('series');
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
    public function attributeManage(){
        $con['id'] = $_GET['id'];//产品系列ID
        $series = M('series');        
        $column = M('column');
        $series_res = $series->where($con)->find();
        $col_con['ser_id'] = $_GET['id'];
        $col_list = $column->where($col_con)->select();//
        $this->assign('col_list',$col_list);
        $this->assign('series_res',$series_res);
        //dump($series_res);
        $this->display();
    }
    public function addColumn(){
        $col_name = $_POST['$col_name'];
        $con['id'] = $_GET['id'];//产品系列ID
        $series = M('series');        
        $column = M('column');
        $ser_res = $series->where($con)->find();
        $data['col_name'] = $_POST['col_name'];
        $data['ser_id'] = $_GET['id'];
        if ($column->add($data)) {
            $this->success('添加成功');
        }else{
            $this->error('添加失败');
        }
    }
    public function updateColumn(){
        $con['id'] = $_GET['id'];
        $column = M('column');
        $data['col_name'] = $_POST['col_name'];
        if ($column->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error('修改失败');
        }
    }
    public function deleteColumn(){
        $con['id'] = $_GET['id'];
        $column = M('column');
        $res = $column->where($con)->find();
        if ($column->where($con)->delete()) {
            echo 1;
        }
    }
    public function setColumn(){
        $column = M('column');     
        $con['ser_id'] = $_GET['id'];
        for ($i=1; $i <= 15; $i++) { 
            $col = 'col'.$i;
            $data['col_name'] = $_POST[$col];
            $con['ziduan'] = $col;
            $column->where($con)->save($data);
        }
        $this->success('设置成功');
    }
}