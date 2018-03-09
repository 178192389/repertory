<?php
header('content-type:text/html;charset=utf-8');
class admin extends base{
	function __construct(){
		parent::__construct();
	}

	/*private function check_auth($param, $auth_id)
	{
		$param['u'] = $this->m()->check();
		if (isset($param['u'])) {
			if($this->m()->is_admin_auth($param['u']['account_id'], $auth_id)){
				return true;
			}
		}
		tools::redirect('.');
		return false;
	}
*/




	function admin_view($page){
	/*	if(!$this->check_auth($param, 1)){
			return ;
		}*/
		if($page){
			$param['page_css'] = array('css/bootstrap.min.css','css/admin_styles.css');
			$param['page'] = $page;
			$this->display('admin/'.$page, $param, 'admin/admin_fm');
		}else{
			tools::redirect('.');
			return false;
		}
	}


	/*function is_auth(){
	 $data = $this->m()->check();
	 $account_data = $this->m()->account_data($data['account_id']);
	$group_data = $this->m()->group_get_data($account_data['group_id']);
	 $group_auth = json_decode($group_data['auth'],true);

	 //print_r($group_auth);
	return  $group_auth;
}*/






}
?>