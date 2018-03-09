<?php
define('ACCOUNT_SESSION_NAME', 'md_account');

class user_m extends m_base{
	function __construct(){
		parent::__construct();
	}

	function viewCommon(&$param){
		$param['page_title'] = 'welcome';
		$param['page_company'] = '深圳市明大投资管理有限公司';
		$param['page_homesite'] = '.';
	}

	// 是否合法字符串
	function stringIsLegal($str, $min_len, $max_len){
		$len = strlen($str);
		return ($len >= $min_len && $len <= $max_len);
	}

	// 是否为数字
	function stringIsNum($str, $min_len = 1, $max_len = 32){
		if (!$this->stringIsLegal($str, $min_len, $max_len)) {
			return false;
		}
		return preg_match("/^[0-9]+$/",$str) ? true : false;
	}

	// 是否合法账号
	function isLegalAccount($str){
		if (!$this->stringIsLegal($str, 1, 32)) {
			return false;
		}
		return preg_match("/^[\|\-\_a-zA-Z0-9]+$/",$str) ? true : false;
	}

	// 是否合法密码
	function isLegalPassword($str, $min_len = 1, $max_len = 64){
		if (!$this->stringIsLegal($str, $min_len, $max_len)) {
			return false;
		}
		return true;
	}

    
    // 用户合法性检查，并记录用户基本信息
	function check(){
		$account_id = App::session()->get(ACCOUNT_SESSION_NAME);
		if (!empty($account_id)) {
			$account = tools::cacheGet(ACCOUNT_SESSION_NAME.$account_id);
			if (!empty($account)) {
				$ret = tools::unserialize($account);
				$re = tools::arrayElement($ret, 'is_multi_login');
				return (tools::arrayElement($ret, 'is_multi_login') || App::session()->cookieKey() == tools::arrayElement($ret, 'account_cookiekey')) ? $ret : null;
			}
			else{
				App::session()->set(ACCOUNT_SESSION_NAME, 0);
			}
		}

		return null;
	}

	// 登录检查
	function login($userName, $userPass, $secCode, &$out_msg){
		// 检查输入串是否合法
		if (!$this->isLegalAccount($userName)) {
			$out_msg = '账号输入不合法';
			return false;
		}
		else if (!$this->isLegalPassword($userPass, 30, 34)) {
			$out_msg = '密码输入不合法';
			return false;
		}
		else if (!$this->stringIsNum($secCode, 1, 8)) {
			$out_msg = '验证码输入不合法';
			return false;
		}

		if (!App::isDebug()) {
			// 校验输入的key是否正确
			if ($secCode != App::session()->get('seccode_session')) {
				$out_msg = '验证码输入错误';
				return false;
			}
			else if (!App::time()->isValid(App::session()->get('seccode_session_t'))) {
				$out_msg = '验证码已经过期';
				return false;
			}
		}

		// 取数据库，获取登录信息
		$sql_str = "call account_login(?,?,?,?);";
		$rows = App::db()->execAll($sql_str, array($userName, $userPass, $secCode, tools::getIP()));
		$ret = 11;
		if (isset($rows[0])) {
			
			$ret = tools::arrayElement($rows[0], 'ret', '12');
			$account_id = tools::arrayElement($rows[0], 'account_id');
			if (empty($ret)) {
				$account = array(
					'account_id' => $account_id,
					'account_name' => $userName,
					'account_cookiekey' => App::session()->cookieKey(),
					'account_nick' => tools::arrayElement($rows[0], 'account_nick'),
					'is_multi_login' => tools::arrayElement($rows[0], 'is_multi_login'),
				);
				App::session()->set(ACCOUNT_SESSION_NAME, $account_id);
				tools::cacheSet(ACCOUNT_SESSION_NAME.$account_id, tools::serialize($account), 3600*12);
			}
			else{
				// 输出调试信息
				$out_msg = tools::arrayElement($rows[0], 'ret_msg');
				App::log()->log_test('User('.$userName.', '.$userPass.', '.$secCode.') login failed> '.$out_msg.$ret, '_login');

				if ($ret >= 3 && !App::isDebug()) {
					$out_msg = '输入账号或密码有误';
				}

				if (App::isDebug()) {
					$out_msg.='(#'.$ret.')';
				}
			}
		}
		return $ret ? false : true;
	}

	// 登出
	function logout(){
		App::session()->set(ACCOUNT_SESSION_NAME, 0);
	}

	// 获取账号数据(自动缓存)
	function account_data($id){
		return tools::cacheFunc("account_data".$id, 60, 'user_m::_account_data_callback', array($id));
	}

	// 清理账号数据缓存
	function clear_account_data($id){
		tools::cacheDel("cachefunc_account_data".$id);
	}

	static function _account_data_callback($id){
		$sql_str = "select * from account_tb where account_id=?;";
		$rows = App::db()->execAll($sql_str, array($id));
		return isset($rows[0]) ? $rows[0] : array();
	}



	//更新组信息
	function group_update($group_id, $data){
		tools::cacheDel('group_data_'. $group_id);
	}
	//根据组id获取组信息
	function group_get_data($group_id){
		$ret = tools::sqlCache('group_data_'. $group_id, 'select * from group_tb where group_id = '.$group_id.';');
		return $ret;
	}
	//获取组id 的 名称
	function group_get_name($group_id){
		$data = $this->group_get_data($group_id);
		return isset($data['group_name']) ? $data['group_name'] : ('ERROR_GROUP_'. $group_id); //提示错误组id
	}



	// 是否有后台管理权限
	/*function is_admin_auth($user_id, $id){
		$account_data = $this->account_data($user_id);
		$group_id = $account_data['group_id'];
		$group_data = $this->group_get_data($group_id);
		$group_auth = $group_data['auth'];

		if($group_auth == 1){
			return true;
		}
		
		if(in_array($id, $group_auth))
		{
			return true;
		}

		return false;
	}*/

}