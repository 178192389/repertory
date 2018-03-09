<?php
define('APP_ROOT','');
define('APP','../web/app/');
define('APP_LIB','../web/lib/');

$global_debug = 1;// 是否调试
$global_log_path = '../log/';// 日志路径
$global_stock_task_key = 'stock_task';// 任务密匙

// 缓存redis配置
$global_redis_set = array(
	'local' 	=> array('127.0.0.1', '6379', ''),//本地redis配置
);

// db配置
$global_db_set = array(
	'local' 	=> array('host' => '127.0.0.1:3369', 'user' => 'root', 'pass' => 'our', 'db' => 'jrd1_db'),//本地配置
);