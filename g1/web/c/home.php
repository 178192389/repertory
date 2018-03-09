<?php
class home extends base{
    function __construct()
    {	
    	parent::__construct();
    }
	function index($param = array()){
		
		$param['u'] = $this->m()->check();
		if (isset($param['u'])) {
			$account_data = $this->m()->account_data($param['u']['account_id']);
			if($account_data['group_id']!=0){
				$param['page_css'] = array('css/bootstrap.min.css','css/admin_styles.css');
				$this->display('admin/admin', $param,'admin/admin_fm');
			}else{
				$param['page_css'] = array('css/bootstrap.css', 'css/platform.css','dist/sidebar-menu.css','css/jquery.ui.css','css/jquery-ui.css');
				$param['get_user_set'] = json_decode($account_data['user_set']); //用户快捷键
				$this->display('main', $param, 'index');
                
				$ui_set  = $account_data['ui_set']; //用户界面布局
				$this->view_buju($ui_set);

				
			}
		}
		else{
			$param['page_css'] = array('css/bootstrap.css', 'css/layout.css');
			$this->display('login', $param, null, 'html_home_login'.tools::arrayElement($param, 'page_errmsg'), 3600*24);
		}
	}

	function login(){
		// 检查用户是否能够登录
		$ret_msg = '';
		if(!$this->m()->login(tools::urlGet('username'), tools::urlGet('password'), tools::urlGet('seccode'), $ret_msg)){
			$param['page_errmsg'] = $ret_msg;
			$this->index($param);
		}
		else{
		tools::redirect('.');
		}
	}

	function logout(){
		$this->m()->logout();
		$this->index();
	}
    //界面保存
	function checkSet(){
		
		$ui_set =  json_encode(tools::urlGet('str')); 
	
        if (empty($ui_set)) {
        	echo "保存失败！";
        	exit;
        }
		$account_id = App::session()->get('md_account'); //获取account_id
        if (empty($account_id)) {
        	echo "保存失败！";
        	exit;
        }
        $str_sql = "call account_modify(?,'ui_set',?);";
		App::db()->execAll($str_sql, array($account_id, $ui_set));
		$this->m()->clear_account_data($account_id);
		echo '保存成功！';
	}
	//快捷键页面
	function quick(){
		$account_id = App::session()->get('md_account');
        $quick_data = $this->m()->_account_data_callback($account_id); 
        $param['quick'] = json_decode($quick_data['user_set']);
		$param['page_css'] = array('css/bootstrap.css', 'css/platform.css','dist/sidebar-menu.css');
		$this->display('main', $param, 'quick');
	}
    //快捷键保存
	function userSet(){
		
		$user_set =  json_encode(tools::urlGet('str')); 
		
        if (empty($user_set)) {
        	echo "保存失败！";
        	exit;
        }
		$account_id = App::session()->get('md_account'); //获取account_id
        if (empty($account_id)) {
        	echo "保存失败！";
        	exit;
        }
        $str_sql = "call account_modify(?,'user_set',?);";
		$rs = App::db()->execAll($str_sql, array($account_id, $user_set));
		$this->m()->clear_account_data($account_id);
		echo '保存成功！';
		
	}
	//页面布局读取
	function view_buju($array){
		$account_id = App::session()->get('md_account'); //获取account_id
		$this->m()->clear_account_data($account_id);
		if(empty($array)){
			exit;
		}
        $arr = json_decode($array);
        if ($arr) {
        	echo "<script>$('.drag-box div').remove();</script>";
        }
        for ($i=0; $i < count($arr); $i++) {
            
        	if ($arr[$i][0] == 'zx') {
        		$width = $arr[$i][1];
        		$height = $arr[$i][2];
        		$top = $arr[$i][3];
        		$left = $arr[$i][4];
        		$zIndex = $arr[$i][5];
        		echo '<script>zx('.$width.','.$height.','.$top.','.$left.','.$zIndex.');</script>';
        	}
        	if ($arr[$i][0] == 'hq') {
        		$width = $arr[$i][1];
        		$height = $arr[$i][2];
        		$top = $arr[$i][3];
        		$left = $arr[$i][4];
        		$zIndex = $arr[$i][5];
        		echo '<script>hq('.$width.','.$height.','.$top.','.$left.','.$zIndex.');</script>';
        	}
        	if ($arr[$i][0] == 'wtjl') {
        		$width = $arr[$i][1];
        		$height = $arr[$i][2];
        		$top = $arr[$i][3];
        		$left = $arr[$i][4];
        		$zIndex = $arr[$i][5];
        		echo '<script>wtjl('.$width.','.$height.','.$top.','.$left.','.$zIndex.');</script>';
        	}
        	if ($arr[$i][0] == 'dqcc') {
        		$width = $arr[$i][1];
        		$height = $arr[$i][2];
        		$top = $arr[$i][3];
        		$left = $arr[$i][4];
        		$zIndex = $arr[$i][5];
        		echo '<script>dqcc('.$width.','.$height.','.$top.','.$left.','.$zIndex.');</script>';
        	}
        	if ($arr[$i][0] == 'wtdd') {
        		$width = $arr[$i][1];
        		$height = $arr[$i][2];
        		$top = $arr[$i][3];
        		$left = $arr[$i][4];
        		$zIndex = $arr[$i][5];
        		echo '<script>wtdd('.$width.','.$height.','.$top.','.$left.','.$zIndex.');</script>';
        	}
        	if ($arr[$i][0] == 'gpc' ) {
        		$width = $arr[$i][1];
        		$height = $arr[$i][2];
        		$top = $arr[$i][3];
        		$left = $arr[$i][4];
        		$zIndex = $arr[$i][5];
        		echo '<script>gpc('.$width.','.$height.','.$top.','.$left.','.$zIndex.');</script>';
        	}
        	if ($arr[$i][0] == 'zh') {
        		$width = $arr[$i][1];
        		$height = $arr[$i][2];
        		$top = $arr[$i][3];
        		$left = $arr[$i][4];
        		$zIndex = $arr[$i][5];
        		echo '<script>zh('.$width.','.$height.','.$top.','.$left.','.$zIndex.');</script>';
        	}
        }
	}
}