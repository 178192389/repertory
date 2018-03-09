<?php
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');
define('APP_PATH','./admin/');
define('APP_NAME','admin');
define('BUILD_DIR_SECURE', false);
define('APP_DEBUG', false);
require './ThinkPHP/ThinkPHP.php';