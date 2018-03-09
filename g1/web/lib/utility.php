<?php


// 输出错误信息
function msgOutput($arr){
	echo json_encode($arr);
}


function msgOutputStr($err=0, $err_msg=null, $data = null){
	msgOutput(msgStr($err, $err_msg, $data));
}

function &msgStr($err=0, $err_msg=null, $data = null){
	$ret = array('err' => $err);
	if (!empty($err_msg)) {
		$ret['err_msg'] = $err_msg;
	}
	if (!empty($data)) {
		$ret['data'] = $data;
	}
	if (App::isDebug()) {
		$ret['err_time'] = App::time()->getStr();
	}
	return $ret;
}

function url_dbg($url, $cookie, $post, $context){
	App::log()->log_test($url.'('.(empty($cookie)?'':$cookie).')'.(empty($post)?'':'('.tools::arrayToString($post).')').' -> '.(empty($context)?'':$context), '_url');
}


// 股票购买检查参数是否正确
function stock_buy_check_param(&$param, &$out_info, $task_class = null){
	$stockcode = tools::arrayElement($param, 'stockcode');
	$stockname = tools::arrayElement($param, 'stockname');
	$price = tools::arrayElement($param, 'price');
	$stocknum = tools::arrayElement($param, 'stocknum');
	// TODO: 股票代码必须是允许买卖的

	if (!is_numeric($stockcode) || $stockcode <= 0 || $stockcode > 1000000) {
		$out_info = 'stockcode is illegal';
		return false;
	}
	if (!is_numeric($price) || $price <= 0 || $price > 100000) {
		$out_info = 'price is illegal';
		return false;
	}
	if (!is_numeric($stocknum) || $stocknum < 100 || $stocknum > 100000000/* || intval($stocknum/100) * 100 != $stocknum*/) {
		$out_info = 'stocknum is illegal';
		return false;
	}

	// 如果股票代码没有名称
	if (empty($stockname)) {
		$param['stockname'] = App::stock()->getName($stockcode, $task_class);
	}
	/*else if ($stockname != App::stock()->getName($stockcode, $task_class)) {
		return false;
	}*/

	if (!isset($param['stockname']) || empty($param['stockname'])) {
		$out_info = 'stockname is illegal';
		return false;
	}

	return true;
}