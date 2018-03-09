<?php
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');
define('APP_PATH','./home/');
define('APP_NAME','home');
define('BUILD_DIR_SECURE', false);
require './ThinkPHP/ThinkPHP.php';