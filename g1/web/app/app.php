<?php
/**
 * 设置默认输出错误
 */
error_reporting(E_ERROR | E_WARNING | E_PARSE);
/**
 * 设置默认时区
 */
date_default_timezone_set('Asia/Shanghai');
ini_set('max_execution_time', 20);

class App{
	// 实例数组
  private static $_instArr = array();

  private static $_debugMode = false;

	static public function log(){ return self::getInst('loger'); }
  static public function time(){ return self::getInst('timer'); }
  static public function session(){ return self::getInst('sessioner'); }
  static public function stock(){ return self::getInst('stocker'); }

	/**
	 * 初始化
     * @param [string] $path1,$path2,... 可变参数,每个参数为一个有效物理路径
	 */
	static public function init(){
		// 调试状态
		self::$_debugMode = false;
    global $global_debug;
    if (!empty($global_debug)) {
      self::$_debugMode = true;
    }
    // 设置包含文件自动搜寻路径
    //$pathArr = func_get_args();
    //if (!empty($pathArr)) {
    //    set_include_path(get_include_path() . PATH_SEPARATOR . implode(PATH_SEPARATOR, $pathArr));
    //}
    // 注册类文件自动加载函数
    //spl_autoload_register(array(__CLASS__, 'autoload'));
    // 设置自定义错误处理函数
    set_error_handler(array(__CLASS__, 'errorHandler'), E_ALL);
    try{
        // GET/POST/COOKIE超全局数组特殊字符转义处理
        self::__addSlashesForGPC();
        // 启动SESSION会话
        self::__sessionStart();
    }
    catch (Exception $e) {
        App::log()->log_warn('start failed>' . $e->getMessage());
    }

    if (self::$_debugMode) {
      App::log()->set_log_level(LOGTYPE_LOG);
      //App::log()->log('app engine start!');
    }
	}

  /**
   * 获取Redis辅助类的实例
   */
  public static function db($name = null) {
    global $global_db_set;
    if (empty($global_db_set)) {
      return null;
    }

    // 如果没有配置， 直接从配置中取
    if (empty($name)) {
      $name = 'local';
    }

    $arr = isset($global_db_set[$name]) ? $global_db_set[$name] : null;
    if (empty($arr)) {
      return null;
    }

    return self::getInst('dber', $arr, 'db_'.$name);
  }

  /**
   * 获取Redis辅助类的实例
   */
  public static function redis($name = null) {
    global $global_redis_set;
  	if (empty($global_redis_set)) {
  		return null;
  	}

    // 如果没有配置， 直接从配置中取
    if (empty($name)) {
      $name = 'local';
    }

    $arr = isset($global_redis_set[$name]) ? $global_redis_set[$name] : null;
    if (empty($arr)) {
    	return null;
    }

    return self::getInst('rediser', $arr, 'redis_'.$name);
  }

  /**
   * 启动SESSION会话
   */
  private static function __sessionStart() {
      try{
        global $global_redis_set;
        if (isset($global_redis_set['local'])) {
          $arr = $global_redis_set['local'];
          $redis_set = 'tcp://'.$arr[0].':'.$arr[1].'?auth='.$arr[2];
          // 使用redis保存session
          ini_set("session.save_handler","redis");
          ini_set("session.save_path", $redis_set);
              
          if (session_id() === '') {
              session_set_cookie_params(5*60*60);// 设置session有效时间
              session_start();
          }
        }
      }
      catch(Exception $e){            
          App::log()->log_warn('session start failed>' . $e->getMessage());
      }
  }


  /**
   * 自动加载类文件
   * @param string $class 类名
   */
  public static function autoload($class) {
	//	echo $class;
      require_once($class . '.php');
  }

  /**
   * 错误处理函数
   * @param int $errNo 错误级别
   * @param string $errStr 错误信息
   * @param string $errFile 错误所在文件名
   * @param int $errLine 错误所在行号
   */
  public static function errorHandler($errNo, $errStr, $errFile, $errLine) {
      self::log()->log_dbg($errFile.'('.$errLine.') : '.$errStr.' (err:'.$errNo.')');
  }

  /**
   * 对GET/POST/COOKIE超全局数组中的特殊字符进行转义处理
   */
  private static function __addSlashesForGPC() {
      // 如果系统没有开启对超全局变量中的特殊字符自动转义，则手动进行转义之
      if (!get_magic_quotes_gpc() && !defined('GPC_SLASHES_ADDED')) {
          define('GPC_SLASHES_ADDED', 1);
          !empty($_GET) && self::addSlashes($_GET);
          !empty($_POST) && self::addSlashes($_POST);
          !empty($_COOKIE) && self::addSlashes($_COOKIE);
      }
  }

  /**
   * 递归将数组字符串元素中的特殊字符转义（单引号（）、双引号（）、反斜线（\）、NUL（NULL字符））
   * @param &array $arr 数组
   */
  public static function addSlashes(&$arr) {
      foreach ($arr as &$val) { // 注意这里的$val一定要是引用
          if (is_string($val)) {
              $val = addslashes($val);
          } else if (is_array($val)) {
              call_user_func(array(__CLASS__, __FUNCTION__), $val);
          }
      }
  }

  /**
   * 获取指定类的实例
   * @param string $class 类名
   * @param array $args 类实例化时传递给构造函数的参数(默认为NULL)
   * @param string $key 实例标识Key,用来区分同一个类的不同实例(默认为NULL)
   * @param bool $singleton 是否为单例(默认为true,即单例模式)
   * @return &object
   */
  public static function &getInst($class, $args = NULL, $key = NULL, $singleton = true) {
      if ($key === NULL) {
          $key = ($singleton || !isset(self::$_instArr[$class])) ? 0 : count(self::$_instArr[$class]);
      }
      if (!isset(self::$_instArr[$class][$key])) { // 不存在,创建一个新实例
          $file_n = APP . $class . '.php';
          require_once($file_n);
          if($args !== NULL && method_exists($class,'__construct')){
              $obj = new $class($args);
          }
          else{
              $obj = new $class();
          }

          self::$_instArr[$class][$key] = $obj;
      }
      return self::$_instArr[$class][$key];
  }

  /**
   * 是否调式模式
   */
  public static function isDebug(){
     return self::$_debugMode;
  }


  private static function _render_url($uri)
  { 
    // redirect abc/def to abc/def/ to make SEO url 
    if(strpos($uri,'.'))return;
    if($_SERVER['QUERY_STRING'])return;
    if(substr($uri,-1)=='/')return;
    if($uri =='')return;
    header("HTTP/1.1 301 Moved Permanently");
    header ('Location:'.$_SERVER['REQUEST_URI'].'/');
    exit(0);
  }

  private static function _serverGet($name, &$out_v){
    if (isset($_SERVER[$name]) && !empty($_SERVER[$name])){
      $out_v = $_SERVER[$name];
      return true;
    }
    return false;
  }

  /**
   * 运行mvc模式
   */
  public static function run_mvc(){
      // 获取请求的地址兼容 SAE
      $uri = '';
      if(self::_serverGet('PATH_INFO', $uri) || self::_serverGet('ORIG_PATH_INFO', $uri)){
      }
      elseif(isset($_SERVER['QUERY_STRING'])){ 
        $ss = explode('&',$_SERVER['QUERY_STRING']);
        $uri = $ss[0];
      }
      
      self::_render_url($uri);

      //echo $uri;
      //print_r($_SERVER);
      //echo ' 去除Magic_Quotes';
      if(get_magic_quotes_gpc()) // Maybe would be removed in php6
      {
        function stripslashes_deep($value)
        {
          $value = is_array($value) ? array_map('stripslashes_deep', $value) : (isset($value) ? stripslashes($value) : null);
          return $value;
        }
        $_POST = stripslashes_deep($_POST);
        $_GET = stripslashes_deep($_GET);
        $_COOKIE = stripslashes_deep($_COOKIE);
      }

      // 执行
      self::redirect($uri);
  }

  // 定位执行
  public static function redirect($uri){
      // 执行 config.php 中配置的url路由
      global $global_route_config;
      foreach ($global_route_config as $key => $val)
      { 
        $key = str_replace(':any', '([^\/.]+)', str_replace(':num', '([0-9]+)', $key));
        if (preg_match('#^'.$key.'#', $uri)){
            $uri = preg_replace('#^'.$key.'#', $val, $uri);
            break;
          }
      }

      //echo ' 获取URL中每一段的参数';
      $uri = rtrim($uri,'/');
      $seg = explode('/',$uri);
      $des_dir = $dir = '';

      /* 依次载入控制器上级所有目录的架构文件 __construct.php
      * 架构文件可以包含当前目录下的所有控制器的父类，和需要调用的函数 
      */
      foreach($seg as $cur_dir) 
      {
        $des_dir.=$cur_dir."/";
        if(is_file(APP_C.$des_dir.'__construct.php')) {
          require_once(APP_C.$des_dir.'__construct.php'); 
          $dir .=array_shift($seg).'/';
        }
        else {
          break;
        }
      }

      /* 根据 url 调用控制器中的方法，如果不存在返回 404 错误
      * 默认请求 class home->index()
      */
      //echo  '默认请求 class home->index()';
      //$dir = $dir ? $dir:'/';
      array_unshift($seg,NULL);
      $class  = (isset($seg[1]) && !empty($seg[1]))?$seg[1]:'home';
      $method = isset($seg[2])?$seg[2]:'index'; 
      $file_n = APP_C.$dir.$class.'.php';
      if(!is_file($file_n)){
        self::show_404($file_n);
      }

      // 调用方法
      require_once($file_n);
      if(!class_exists($class))show_404('class_not_exists: '.$class);
      if(!method_exists($class,$method))self::show_404('method_not_exists: '.$class.'::'.$method.'()');
      $B2 = new $class();
      call_user_func_array(array(&$B2, $method), array_slice($seg, 3));
  }

  //echo ' 显示404错误';
  public static function show_404($msg = '', $redirect_url = null) //显示 404 错误
  {
    if (self::isDebug()) {
      header("HTTP/1.1 404 Not Found");
      // 调用 模板 v/404.php
      if (!empty($msg)) {
        $msg = '404: '.$msg;
        echo $msg;

        // 写日志
        self::log()->log_dbg($msg);
      }
      //view('v/404');
    }
    else if (!empty($redirect_url)) {
      header("location:" . $redirect_url);
    }
    exit(1);
  }
}

// 抽象的控制器类，建议所有的控制器均基层此类或者此类的子类 
class c_base {
  function index()
  {
    echo "基于 mvc 创建";
  }
}


// 模块类，建议所有模块都继承此类。
class m_base {
  function __construct(){
  }

  public function __call($name, $arg) {
    return call_user_func_array(array($this, $name), $arg);
  }
}

/* 调用 view 文件
* function view($view,$param = array(),$cache = FALSE)
* $view 是模板文件相对 app/v/ 目录的地址，地址应去除 .php 文件后缀
* $param 数组中的变量会传递给模板文件
* $cache = TRUE 时，不像浏览器输出结果，而是以 string 的形式 return
*/
function VIEW($view, $param = array(), $cache = FALSE)
{
  if(!empty($param))extract($param);
  if ($cache === TRUE) {
    ob_start();
  }
  if(strpos($view, '.php')){
    $file_n = APP_V.$view;
  }
  else{
    $file_n = APP_V.$view.'.php';
  }
  if(is_file($file_n)) {
    require_once $file_n;
  }
  else {
    App::log()->log_dbg('view '.$file_n.' desn\'t exist');
    return false;
  }
  // Return the file data if requested
  if ($cache === TRUE)
  {
    $buffer = ob_get_contents();
    @ob_end_clean();
    return $buffer;
  }
}

/*
* LOAD($path,$class_name,$instantiate) 可以动态载入对象，如：控制器、Model、库类等
* $path 是类文件相对 app 的地址
* $instantiate 为 False 时，仅引用文件，不实例化对象
* $instantiate 为数组时，数组内容会作为参数传递给对象 
*/
 
function &LOAD($path, $class_name = null, $instantiate = TRUE )
{
  $param = FALSE;
  if(is_array($instantiate)) {
    $param = $instantiate;
    $instantiate = TRUE;
  }

  $object_name = md5($path);  
  static $objects = array();
  if (isset($objects[$object_name])) return $objects[$object_name];
  require($path.'.php');

  $file = explode('/',$path);
  if(empty($class_name)){
    $class_name = array_pop($file);
  }

  if ($instantiate == FALSE) $objects[$object_name] = TRUE;
  elseif ($param) $objects[$object_name] = new $class_name($param);
  else  $objects[$object_name] = new $class_name();
  return $objects[$object_name];
}

// 数值显示
function ECHO_V(&$v){
  if (!empty($v)) {
    echo $v;
  }
}

// css显示
function ECHO_CSS(&$css){
  if (is_array($css)) {
    foreach ($css as $key => $value) {
      ECHO_CSS($value);
    }
  }
  else if(!empty($css)){
    echo '<link href="'.$css.'" rel="stylesheet" type="text/css">';
  }
}

// init
require_once(APP . 'tools.php');
App::Init();
