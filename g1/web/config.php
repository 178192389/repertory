<?php
define('APP_ROOT','');
define('APP','app/');
define('APP_V', APP_ROOT.'v/');
define('APP_C', APP_ROOT.'c/');
define('APP_M', APP_ROOT.'m/');

$global_debug = 1;// 是否调试
$global_log_path = '../log/';// 日志路径

// 缓存redis配置
/*$global_redis_set = array(
	'local' 	=> array('127.0.0.1', '6379', ''),//本地配置
	'global' 	=> array('127.0.0.1', '6379', ''),// 全局配置
);*/
$global_redis_set = array(
	'local' 	=> array('127.0.0.1', '6379', ''),//本地配置
	'global' 	=> array('127.0.0.1', '6379', ''),// 全局配置
);
// db配置
/*$global_db_set = array(
	'local' 	=> array('host' => '192.168.1.99:3306', 'user' => 'debug', 'pass' => 'debug', 'db' => 'jrd1_db'),//本地配置
);*/
$global_db_set = array(
	'local' 	=> array('host' => '192.168.1.99:3306', 'user' => 'root', 'pass' => 'root', 'db' => 'jrd_db'),//本地配置
);

// 配置url路由
$global_route_config = array(
  '/login/'=>'/home/login/',
  '/logout/'=>'/home/logout/',
);