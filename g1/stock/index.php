<?php

// 执行串(多任务)
// v = array(id => array('account', 'password', 'act', ['s_company_id'], ['task_class']))
// s_company_id 证券公司id
// task_class 任务类名称

// 执行串(单任务)
// s = array('account', 'password', 'act', ['s_company_id'], ['task_class'])


require_once('config.php');
require_once(APP . 'app.php');
require_once(APP_LIB . 'utility.php');
require_once('task.php');

function taskExec(&$v, $isMulti){
	global $global_stock_task_key;
	$param = tools::authcode(rawurldecode($v), 0, $global_stock_task_key);
	if (!empty($param)) {
		$param = tools::unserialize($param);
		// 执行
		if ($isMulti) {
			// 重新调用任务执行
			$exec_arr = array();
			$exec_path = '';
			if(isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER'])){
				$exec_path = $_SERVER['HTTP_REFERER'];
				// 去掉?后面的数据
				$exec_path = strtok($exec_path, '?');
			}
			foreach ($param as $key => $value) {
				$s = tools::authcode(tools::serialize($value), 1, $global_stock_task_key, 600);
				$exec_arr[$key] = $exec_path.'?s='.urlencode($s);
			}
			$exec_ret_arr = tools::curlExec($exec_arr, 20);
			$data = array();
			foreach ($exec_ret_arr as $key => $value) {
				$data[$key] = json_decode($value, true);
			}

			$err = tools::curlGetError();
			$err_msg = $err ? ('multi exec('.count($data).') with errors'):'';
			msgOutputStr($err, $err_msg, $data);
		}
		else{
			taskDo($param);
		}
	}
	elseif ($global_debug) {
		msgOutputStr(2, 'uncompress failed!' . rawurldecode($v));
	}
}


//////////////////////////////////////////////////////
$v = tools::urlGet('v');// 多任务执行
if (!empty($v)) {
	taskExec($v, true);
	exit;
}

$v = tools::urlGet('s');// 单任务执行
if (!empty($v)) {
	taskExec($v, false);
	exit;
}

if (App::isDebug()) {// 调试处理
	require_once('task_dbg.php');
	if (!empty($v_task)) {
		taskDo($v_task);
		exit;
	}
}

msgOutputStr(1, 'no input!');