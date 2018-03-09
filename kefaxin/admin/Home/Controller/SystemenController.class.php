<?php
namespace Home\Controller;
use Think\Controller;
class SystemenController extends Controller {
//     //管理员管理
    public function index(){
        $admin = M('admin');
        $res = $admin->select();
        $this->assign('res',$res);
        $this->display();
    }
    public function addAdmin(){
        $data['ad_name'] = I('post.ad_name');
        $data['ad_pwd'] = md5(I('post.ad_pwd'));
        $admin = M('admin');
        if ($admin->add($data)) {
            $this->success('添加成功');
        }else{
            $this->error('添加失败');
        }
    }
    public function delAdmin(){
        $con['ad_id'] = $_GET['ad_id'];
        $admin = M('admin');
        if ($admin->where($con)->delete()) {
            $this->success('删除成功');
        }else{
            $this->error('删除失败');
        }
    }
    public function updateAdmin(){
        $con['ad_id'] = $_GET['ad_id'];
        $data['ad_pwd'] = md5($_POST['new_pwd']);
        $admin = M('admin');
        if ($admin->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error('修改失败');
        }
    }    
    public function contactManage(){
        $contact = M('en_contact');
        $res = $contact->find();
        $this->assign('res',$res);
        $this->display();
    }
    public function updateContact(){
        $data['company'] = I('post.company');
        $data['person'] = I('post.person');
        $data['phone'] = I('post.phone');
        $data['zongji'] = I('post.zongji');
        $data['zuoji1'] = I('post.zuoji1');
        $data['zuoji2'] = I('post.zuoji2');
        $data['qq'] = I('post.qq');
        $data['url'] = I('post.url');
        $data['email'] = I('post.email');
        $data['address'] = I('post.address');
        $data['sitename'] = I('post.sitename');
        $data['miaoshu'] = I('post.miaoshu');
        $data['keywords'] = I('post.keywords');
        $contact = M('en_contact');
        $con['id'] = $_GET['id'];
        if ($contact->where($con)->save($data)) {
            $this->success('修改成功');
        }
    }
//     // 后台管理首页显示
    // public function show(){
    //     $this->display();
    // }
    public function setBanner(){
        $banner = M('en_banner');
        $ban = $banner->select();
        $this->assign('banner',$ban);
        $this->display();
    }
    public function addSolution(){
        $title = M('en_title');
        $tlist = $title->field('id,maintitle')->select();
        $this->assign('tlist',$tlist);
        $this->display();
    }
    public function addSolutionCheck(){
        $data['maintitle'] = I('post.maintitle');
        $data['subtitle'] = I('post.subtitle');
        $data['keywords'] = I('post.keywords');
        $data['miaoshu'] = I('post.miaoshu');
        $data['passage'] = $_POST['passage'];
        $data['tid'] = $_POST['tid'];
        $solution = M('en_solution');
            $config = array(
                'maxSize'    =>    0,
                'savePath'   =>    '/solution_imgs/',
                'saveName'   =>    time().'_'.mt_rand(10000,99999),
                'exts'       =>    array('jpg','png','gif','bmp'),
                'autoSub'    =>    false,
                'subName'    =>    false,
            );
            $upload = new \Think\Upload($config);
            $info = $upload->upload();
            $data['image'] = 'Uploads'.$info['image']['savepath'].$info['image']['savename'];
        //dump($data);
        if ($solution->add($data)) {
            $this->success('添加成功');
        }else{
            $this->error('添加失败'.$solution->getError());
        }
    }
    public function solutionManage(){
        $title = M('en_title');
        $solution = M('en_solution');
        $res = $title->select();
        $count = count($res);
        for ($i=0; $i < $count; $i++) { 
            $con['tid'] = $res[$i]['id'];
            $res[$i]['total'] = $solution->where($con)->count();
        }
        //dump($res);
        $this->assign('title',$res);
        $this->display();
    }
    public function subSolManage(){
        $con['tid'] = $_GET['id'];
        $alter['id'] = $_GET['id'];
        $title = M('en_title');
        $tlist = $title->where($alter)->find();
        $maintitle = $tlist['maintitle'];

        $solution = M('en_solution');

        $total = $solution->where($con)->count();//计算总数
        $page = new \Think\Page($total,5);
        $page_list = $solution->where($con)->limit($page->firstRow.",".$page->listRows)->select();
        $page->setConfig('theme',"<span class='pages'>页次%NOW_PAGE%/%TOTAL_PAGE%</span> %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% <span class='total'>共%TOTAL_ROW%条记录</span>");
        $page_show = $page->show();
        // dump($page_list);
        $this->assign('page_list',$page_list);
        $this->assign('page_show',$page_show);
        $this->assign('solution',$res);
        $this->assign('maintitle',$maintitle);
        $this->display();
    }
    public function updateSolution(){
        $data['maintitle'] = I('post.maintitle');
        $data['subtitle'] = I('post.subtitle');
        $data['content'] = I('post.content');
        $data['keywords'] = I('post.keywords');
        $data['miaoshu'] = I('post.miaoshu');
        // $data['passage'] = $_POST['passage'];
        $title = M('en_title');
        $con['id'] = I('get.id');
        if ($title->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error($title->getError());
        }
    }
    public function updateSubSolution(){
        $con['id'] = $_GET['id'];
        $solution = M('en_solution');
        $list = $solution->where($con)->find();
        $data['maintitle'] = I('post.maintitle');
        $data['subtitle'] = I('post.subtitle');
        $data['keywords'] = I('post.keywords');
        $data['miaoshu'] = I('post.miaoshu');
        $data['passage'] = $_POST['passage'];
        $img_name = $_FILES['image']['name'];
        //dump($_FILES['image']);
        if (strlen($img_name)>0) {//有新图
            if (is_file($list['image'])) {
                unlink($list['image']);
            }
             $config = array(
                'maxSize'    =>    0,
                'savePath'   =>    '/solution_imgs/',
                'saveName'   =>    time().'_'.mt_rand(10000,99999),
                'exts'       =>    array('jpg','png','gif','bmp'),
                'autoSub'    =>    false,
                'subName'    =>    false,
            );
            $upload = new \Think\Upload($config);
            $info = $upload->upload();
            $data['image'] = 'Uploads'.$info['image']['savepath'].$info['image']['savename'];
        }else{//无图上传
            $data['image'] = $list['image'];
        }       
           
        //dump($data);
        if ($solution->where($con)->save($data)) {
            $this->success('修改成功');
        }else{
            $this->error('修改失败'.$solution->getError());
        }

    }
    public function deleteSolution(){
        $con['id'] = $_GET['id'];
        $solution = M('en_solution');
        if ($solution->where($con)->delete()) {
            echo 1;
        }else{
            echo $solution->getError();
        }
    }
    public function bannerSet(){
        $con['id'] = I('get.id');
        $banner = M('en_banner');
        $ban = $banner->where($con)->find();
        $img_file = './Uploads/banner_imgs/'.$ban['image'];
        if (is_file($img_file)) {
           unlink($img_file);
        }
        if (strlen($_FILES['image']['name'])>0) {
            $config = array(
                'maxSize'    =>    0,
                'savePath'   =>    '/banner_imgs/',
                'saveName'   =>    time().'_'.mt_rand(10000,99999),
                'exts'       =>    array('jpg','png','gif','bmp'),
                'autoSub'    =>    false,
                'subName'    =>    false,
            );
            $upload = new \Think\Upload($config);
            $info = $upload->upload();
            //dump($info);
            $data['image'] = $info['image']['savename'];
            if ($banner->where($con)->save($data)) {
                $this->success('修改成功');
            }else{
                $this->error($banner->getError());
            }
        }
    }
    public function aboutUs(){
        $aboutus = M('en_aboutus');
        $list = $aboutus->limit(1)->find();
        $this->assign('list',$list);
        $this->display();
    }
    public function aboutUsUpdate(){
        $aboutus = M('en_aboutus');
        $con['id'] = $_GET['id'];
        $res = $aboutus->where($con)->find();
        $data['content'] = $_POST['content'];
        if ($_FILES['image']['name'] != '') {
            if (is_file($res['image'])) {
                unlink($res['image']);
            }
            $config = array(
                'maxSize'    =>    0,
                'savePath'   =>    '/about_imgs/',
                'saveName'   =>    time().'_'.mt_rand(10000,99999),
                'exts'       =>    array('jpg','png','gif','bmp'),
                'autoSub'    =>    false,
                'subName'    =>    false,
            );
            $upload = new \Think\Upload($config);
            $info = $upload->upload();
            $data['image'] = 'Uploads'.$info['image']['savepath'].$info['image']['savename'];
        }else{
            $data['image'] = $res['image'];
        }
            if ($aboutus->where($con)->save($data)) {
                $this->success('修改成功');
            }else{
                $this->error('修改失败');
            }
    }
    public function removeCache(){
        $dir1 = RUNTIME_PATH;
        $dir2 = "./home/Runtime/";
        $obj1 = cleanup_directory($dir1);
        $obj2 = cleanup_directory($dir2);
        if ($obj1 && $obj2) {
            echo '清除缓存成功';
        }else{
            echo '清除缓存失败';
        }  
    }
    public function dumpDatabase(){
        $title = M('en_title');
        $mysql= "set charset utf8;\r\n";
        $tables = $title->query('show tables');
        $tblen = count($tables);
        for ($i=0; $i < $tblen; $i++) { 
            $table = $tables[$i]["Tables_in_szkfx"];
            $q2=mysql_query("show create table `$table`");
            $sql = mysql_fetch_array($q2);
            $mysql.=$sql['Create Table'].";\r\n";
            $q3=mysql_query("select * from `$table`");//resource类型
            while ($data=mysql_fetch_assoc($q3)) {
                $keys=array_keys($data);
                $keys=array_map('addslashes',$keys);
                $keys=join('`,`',$keys);
                $keys="`".$keys."`";
                $vals=array_values($data);
                $vals=array_map('addslashes',$vals);
                $vals=join("','",$vals);
                $vals="'".$vals."'";
                $mysql.="insert into `$table`($keys) values($vals);\r\n";
                
            }
            echo '备份数据表 '.$table." 成功<br>\n";
        }
        $name1 = 'kefaxin_'.date('YmdHis',time()).'.sql';;
        $name = 'Public/sql/'.$name1;
        $fp = fopen($name,'w');
        $result = fwrite($fp,$mysql);
        if ($result) {
            echo "数据库备份成功!";
            echo"<br>FTP路径：<span style='color:blue;'>wwwroot/Public/sql/</span>";
            echo "<br>文 件 名：<span style='color:blue;'>".$name1."</span>";
        }else{
            echo '数据库备份失败';
        }
    }
}