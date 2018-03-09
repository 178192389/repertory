<?php


class tools
{
	// 实例数组
  	private static $_cacheArr = array();

	// 等待毫秒级
	static public function sleep($ctime){
		usleep(1000*$ctime);
	}

	// 文件路径
	static public function dirname($path = null){
		if (empty($path)) {
			$path = self::uri();
		}
	}

	// 随机数(如果最小值和最大值都为false，取0~1的浮点数)
	static public function rand($min = false, $max = false){
		if ($min == $max && $max === false) {
			return floatval(1) / RAND_MAX * rand();
		}
		else if ($max < 32768) {
			return rand($min, $max);
		}

		return mt_rand($min, $max);
	}

	// url串检查，并转换为合法字符
	static public function urlCheck($str){
      	$str = str_replace('\\', '＼', $str);
      	$str = str_replace('"', '“', $str);
      	$str = str_replace('\'', '‘', $str);
      	$str = str_replace('(', '（', $str);
      	$str = str_replace(')', '）', $str);
      	$str = str_replace(';', '；', $str);
      	return $str;
	}

	// 是否合法输入串
	static public function strIsLegal($str){
		return !preg_match('/substr|hex|unhex|select|insert|update|delete|\'|"|\\*|\*|\.\.\/|\.\/|union|into|load_file|outfile/i',  strtolower($str));
	}

	// 字符串取中间
	static public function stringMid($str, $head, $tail, $i_start=0){
		$i_head = strpos($str, $head, $i_start);
		if ($i_head === false) {
			return null;
		}
		$i_head += strlen($head);
		$i_tail = strpos($str, $tail, $i_head);
		if ($i_tail === false) {
			return null;
		}

		return substr($str, $i_head, $i_tail - $i_head);
	}

	// 获取url串
	static public function &urlGet($name, $default=null, $inc_get = 1, $inc_post = 1){
		$ret = $default;
		if ($inc_get && isset($_GET[$name]) && !empty($_GET[$name])) {
			$ret = self::urlCheck($_GET[$name]);
		}
		else if ($inc_post && isset($_POST[$name]) && !empty($_POST[$name])) {
			$ret = self::urlCheck($_POST[$name]);
		}
		return $ret;
	}

	// 读取文件
	static public function &fileRead($file_name, $cache_time = 0){
		if (App::isDebug()) {
			$cache_time = 0;
		}
		if ($cache_time > 0) {
			$cache_name = 'cache_f_'.MD5($file_name);
			// 在缓存中获取数据
			$ret = App::redis()->get($cache_name);
			if ($ret !== null) {
				return $ret;
			}
		}

		if(file_exists($file_name)){
			$ret = file_get_contents($file_name);
		}
		else{
			$ret = false;
		}
		if ($ret === false) {
			App::log()->log_dbg('miss file>'. $file_name);
			return $ret;
		}

		if ($cache_time > 0) {
			// 缓存起来
			App::redis()->setEx($cache_name, $cache_time, $ret);
		}

		return $ret;
	}

	// 写文件
	static public function fileWrite($file_name, &$file_content){
		return file_put_contents($file_name, $file_content);
	}

	// 实时强制锁
	static public function runtimeLocked($name, $lock_time = 30, $redis_name=''){
		$cache_name = 'lk_' . $name;
		$redis = App::redis($redis_name);
		$redis->set($cache_name, 1);
		if ($lock_time > 0) {
			$redis->expire($cache_name, $lock_time);
		}
	}

	// 实时锁(名称，等待解锁时间，锁定时间)
	static public function runtimeLock($name, $wait_time=0, $lock_time=30, $redis_name=''){
		//if (App::isDebug() && $lock_time > 3) $lock_time = 3;

		if ($wait_time > 0 && $wait_time < 100000) {
			$wait_time += time();
		}

		$try_num = 0;
		$redis = App::redis($redis_name);
		$cache_name = 'lk_' . $name;
		while (time() <= $wait_time || $try_num <= 0) {
			++$try_num;
			if ($redis->setNx($cache_name, time() + $lock_time + 1)) {
				if($lock_time > 0 && !$redis->expire($cache_name, $lock_time)){
					$redis->del($cache_name);
				}
				else{
					return true;
				}
			}

			self::sleep(50);
		}

		// 如果锁已经超时，强制解锁
		if ($lock_time > 0) {
			$expire_t = $redis->get($cache_name);
			if ($expire_t > 1000 && $expire_t < time()) {
				$redis->del($cache_name);
			}
		}

		return false;
	}

	// 实时锁 解锁
	static public function runtimeUnlock($name, $redis_name=''){
		$redis = App::redis($redis_name);
		$cache_name = 'lk_' . $name;
		$redis->del($cache_name);
	}

	// 保存缓存数据
	static public function cacheSet($key, $value, $valid_time = 600, $redis_name=''){
		App::redis($redis_name)->setEx($key, ($valid_time <= 0) ? 3600*24*30 : $valid_time, $value);
	}

	// 读取缓存数据
	static public function cacheGet($key, $redis_name=''){
		return App::redis($redis_name)->get($key);
	}

	// 缓存数据删除
	static public function cacheDel($key, $redis_name=''){
		return App::redis($redis_name)->del($key);
	}


	// sql 缓存
	static public function sqlCache($key, $sql, $sql_param = null, $valid_time = 30){
		global $_sql_cache;
		if(empty($key)){
			$key = $sql;
		}
		$g_key = md5($sql);
		if(empty($_sql_cache) || !is_array($_sql_cache)){
			$_sql_cache = array();
		}
		else if (isset($_sql_cache[$g_key])){
			return $_sql_cache[$g_key];
		}

		$ret = self::cacheGet($key);
		if(empty($ret)){
			$rows = App::db()->execAll($sql, $sql_param);
			if(isset($rows[0])){
				$ret = (count($rows) > 1) ? $rows : $rows[0];
				self::cacheSet($key, self::serialize($ret), $valid_time);
			}
		}
		else{
			$ret = self::unserialize($ret);
		}

		$_sql_cache[$g_key] = $ret;
		return $ret;
	}

	/*
	* 自动缓存函数返回的数据(1.全局对象取值；2.缓存中取值；3.函数中取值)
	*/
	static public function cacheFunc($name, $cache_time, $func, $func_argv = null, $dirty_time = 3600*24){
		$name = 'cachefunc_' . $name;// 增加前缀
		$expire = false;
		$ret = null;
		$ret_bak = null;
		if(isset(self::$_cacheArr[$name])){
			// 是否过期
			$expire = App::time()->expire(self::$_cacheArr[$name][1]);
			if(!$expire){
				return self::$_cacheArr[$name][0];
			}

			$ret_bak = self::$_cacheArr[$name][0];
		}

		if (!$expire) {
			$v = self::cacheGet($name);
			if (!empty($v)) {
				self::$_cacheArr[$name] = self::unserialize($v);
				// 是否过期
				$expire = App::time()->expire(self::$_cacheArr[$name][1]);
				if(!$expire){
					return self::$_cacheArr[$name][0];
				}

				$ret_bak = self::$_cacheArr[$name][0];
			}
		}

		// 调用锁定
		$lock = false;
		if (self::runtimeLock($name, empty($ret_bak) ? min(3, $cache_time) : 0, $cache_time)) {
			if (!empty($func_argv) && is_array($func_argv)) {
				$ret = call_user_func_array($func, $func_argv);
			}
			else{
				$ret = call_user_func($func, $func_argv);
			}
			$lock = true;
		}

		if (!empty($ret)) {
			$expire = App::time()->get() + $cache_time;
			self::$_cacheArr[$name] = array($ret, $expire);
			// 缓存时间长一点，保障中间取数据时不取到无效数据
			self::cacheSet($name, self::serialize(self::$_cacheArr[$name]), $dirty_time);
		}

		if ($lock) {
			self::runtimeUnlock($name);
		}

		return empty($ret) ? $ret_bak : $ret;
	}

	// 输出值
	static public function var_dump($v, $spcace = '', $tab_spilter='&nbsp;&nbsp;', $line_spilter='<br>'){
		if (is_array($v)) {
			echo 'array['.count($v).'] {'.$line_spilter;
			foreach ($v as $key => $value) {
				echo $spcace.$tab_spilter.'"'.$key.'" => ';
				self::var_dump($value, $spcace.$tab_spilter, $tab_spilter, $line_spilter);
				echo ',' . $line_spilter;
			};
			echo $spcace.'}';
		}
		else if(is_string($v)){
			echo '"'.$v.'"';
		}
		else if(is_numeric($v)){
			echo $v;
		}
		else{
			var_dump($v);
		}
	}
	// 设定全局值(只支持同一主key)
	static public function globalValueSets(&$arr, $redis_name=''){
		$key_arr = null;
		foreach ($arr as $key => $value) {
			if (empty($key_arr)) {
				$key_arr = explode('|', $key);
				break;
			}
		}
		
		$p_key = $key_arr[0];
		$count = count($key_arr);
		if (empty($p_key)) {
			return;
		}
		if(!self::runtimeLock($p_key, 3, 30)){
			App::log()->log_dbg('globalValueSets(array['.count($arr).']) failed: lock failed');
			return;
		}

		// 取值
		$redis = App::redis($redis_name);
		$old_value = $redis->get('gv_' . $p_key);
		if (empty($old_value)) {
			$old_value = ($count > 1) ? array() : '';
		}
		else{
			$old_value = self::unserialize($old_value);
		}
		foreach ($arr as $key => $value) {
			$key2_arr = explode('|', $key);
			$p_key2 = $key_arr[0];
			if ($p_key2 != $p_key) {
				App::log()->log_dbg('globalValueSets(array['.count($arr).']) failed: too many major keys');
				continue;
			}

			self::globalValueSetEx($key, $value, $redis_name, $old_value);
		}

		// 保存起来
		$redis->setEx('gv_' .$p_key, 3600*24, self::serialize($old_value));
		
		self::runtimeUnlock($p_key);
	}

	static public function globalValueSet($key, $value, $redis_name=''){
		$old_value = null;
		return self::globalValueSetEx($key, $value, $redis_name, $old_value);
	}

	// 设定全局值($key 根据|自动分成子数组模式)
	static public function globalValueSetEx($key, $value, $redis_name, &$old_value){
		if (empty($key)) {
			return;
		}
		$key_arr = explode('|', $key);
		$count = count($key_arr);
		$p_key = $key_arr[0];
		$lock_flag = ($old_value === null) ? 1 : 0;
		if($lock_flag && !self::runtimeLock($p_key, 3, 0)){
			App::log()->log_dbg('globalValueSet('.$key.','.$value.') failed: lock failed');
			return;
		}

		// 写入值
		if ($lock_flag) {
			$redis = App::redis($redis_name);
			$old_value = $redis->get('gv_' . $p_key);
			if (empty($old_value)) {
				$old_value = ($count > 1) ? array() : '';
			}
			else{
				$old_value = self::unserialize($old_value);
			}
		}

		if ($count == 5) {
			$old_value[$key_arr[1]][$key_arr[2]][$key_arr[3]][$key_arr[4]] = $value;
		}
		else if ($count == 4) {
			$old_value[$key_arr[1]][$key_arr[2]][$key_arr[3]] = $value;
		}
		else if ($count == 3) {
			$old_value[$key_arr[1]][$key_arr[2]] = $value;
		}
		else if ($count == 2) {
			$old_value[$key_arr[1]] = $value;
		}
		else if ($count == 1) {
			$old_value = $value;
		}
		else{
			App::log()->log_dbg('globalValueSet('.$key.','.$value.') failed: key is too long');
			if ($lock_flag) {
				self::runtimeUnlock($p_key);
			}
			return;			
		}

		// at last
		if ($lock_flag) {
			// 保存起来
			$redis->setEx('gv_' .$p_key, 3600*24, self::serialize($old_value));

			self::runtimeUnlock($p_key);
		}
	}

	// 读取全局值
	static public function globalValueGet($key, $redis_name=''){
		if (empty($key)) {
			return null;
		}
		$redis = App::redis($redis_name);
		$key_arr = explode('|', $key);
		$count = count($key_arr);
		$p_key = $key_arr[0];
		$old_value = $redis->get('gv_' . $p_key);
		if (empty($old_value)) {
			return null;
		}

		$old_value = self::unserialize($old_value);

		if ($count == 5) {
			return $old_value[$key_arr[1]][$key_arr[2]][$key_arr[3]][$key_arr[4]];
		}
		else if ($count == 4) {
			return $old_value[$key_arr[1]][$key_arr[2]][$key_arr[3]];
		}
		else if ($count == 3) {
			return $old_value[$key_arr[1]][$key_arr[2]];
		}
		else if ($count == 2) {
			return $old_value[$key_arr[1]];
		}
		else if ($count == 1) {
			return $old_value;
		}
		return null;
	}

	// 删除全局值
	static public function globalValueDel($key, $redis_name=''){
		if (empty($key)) {
			return true;
		}
		$redis = App::redis($redis_name);
		$key_arr = explode('|', $key);
		$count = count($key_arr);
		$p_key = $key_arr[0];
		$old_value = $redis->get('gv_' . $p_key);
		if (empty($old_value)) {
			return true;
		}
		$old_value = self::unserialize($old_value);

		if ($count == 5) {
			unset($old_value[$key_arr[1]][$key_arr[2]][$key_arr[3]][$key_arr[4]]);
		}
		else if ($count == 4) {
			unset($old_value[$key_arr[1]][$key_arr[2]][$key_arr[3]]);
		}
		else if ($count == 3) {
			unset($old_value[$key_arr[1]][$key_arr[2]]);
		}
		else if ($count == 2) {
			unset($old_value[$key_arr[1]]);
		}
		else if ($count == 1) {
			return App::redis($redis_name)->del('gv_' . $p_key);
		}

		if(!self::runtimeLock($p_key, 3, 0)){
			App::log()->log_dbg('globalValueDel('.$key.') failed: lock failed');
			return;
		}

		// 保存起来
		$redis->setEx('gv_' . $p_key, 3600*24, self::serialize($old_value));

		// at last
		self::runtimeUnlock($p_key);
		return true;
	}

	// 数据序列化
	static public function serialize($value){
		return serialize($value);
	}

	// 数据反序列化
	static public function unserialize($value){
		return unserialize($value);
	}

	// 数组中删除指定值的元素
	static public function arrayRemoveElement(&$arr, $element){
	    if(in_array($element, $arr)){
	        array_splice($arr, array_search($element, $arr),1);
	    }
	}

	// 数组取值
	static public function arrayElement(&$arr, $key, $default = null){
		if(!empty($arr) && is_array($arr) && isset($arr[$key])){
			return $arr[$key];
		}
		return $default;
	}

	// 数组取值
	static public function arrayElement2(&$arr, $key, $key2, $default = null){
		if(!empty($arr) && isset($arr[$key][$key2])){
			return $arr[$key][$key2];
		}
		return $default;
	}

	// 从字符串中解析数组
	static public function &arrayFromString($str, $spilter = '&', $spilter_minor = '='){
		$ret = array();
		if (!empty($str)) {
			$arr = explode($spilter, $str);
			foreach ($arr as $key => $value) {
				$arr_minor = explode($spilter_minor, $value);
				if (count($arr_minor) == 2) {
					$ret[$arr_minor[0]] = $arr_minor[1];
				}
			}
		}

		return $ret;
	}

	// 数组转字符串
	static public function &arrayToString($arr, $spilter = '&', $spilter_minor = '='){
		$ret = '';
		foreach ($arr as $key => $value) {
			if (!empty($ret)) {
				$ret.=$spilter;
			}
			$ret.= $key.$spilter_minor.$value;
		}
		return $ret;
	}

	// unicode解码文字
	static public function unicodeDecode($str){
		return preg_replace("#\\\u([0-9a-f]{4})#ie", "iconv('UCS-2BE', 'UTF-8', pack('H4', '\\1'))", $str);
	}


	// 从文本内容来调整cookie
	static public function cookieFromContent($cookie, &$content){
		$cookie = str_replace(' ', '', $cookie);// 去掉空格
		$cookie_arr = self::arrayFromString($cookie, ';');
		preg_match_all('/Set-Cookie:(.*);/iU', $content, $arr); //正则匹配
		if (count($arr) && isset($arr[1])) {
			foreach ($arr[1] as $key => $value) {
			    //$value = trim($value);//去掉特殊符号
			    $value = str_replace(' ', '', $value);
			    $arr_minor = explode('=', $value);
				if (count($arr_minor) == 2) {
					if ($arr_minor[1] == 'deleted') {
						unset($cookie_arr[$arr_minor[0]]);
					}
					else{
						$cookie_arr[$arr_minor[0]] = $arr_minor[1];
					}
				}
			}
		}

		return self::arrayToString($cookie_arr, '; ');
	}

	/**
	* 压缩html
	* @param $string
	* @return 压缩后的$string
	* */
	static function htmlCompress($string) {
		$pattern = array(
			"/> *([^ ]*) *</", //去掉注释标记
			//"/[\s]+/",
			"/<!--[^!]*-->/",
			"/\" /",
			"/ \"/",
			"'/\*[^*]*\*/'",
			"#//.*#",
		);
		$replace = array(
			">\\1<",
			//" ",
			"",
			"\"",
			"\"",
			"",
			"",
		);
		$string = preg_replace($pattern, $replace, $string);
		//$string = str_replace("\r\n", '', $string); //清除换行符
		//$string = str_replace("\n", '', $string); //清除换行符
		$string = str_replace("\t", '', $string); //清除制表符
		return $string;
	}

	// 数据压缩
	static function compress($str, $auto_serial = false, $urlencode = false, $base64 = false){
		if ($auto_serial) $str = self::serialize($str);
		$str = gzcompress($str, 7);
		if ($base64) $str = base64_encode($str);
		if ($urlencode) $str = rawurlencode($str);

		return $str;
	}

	// 数据解压缩
	static function uncompress($str, $auto_serial = false, $urlencode = false, $base64 = false){
		if ($urlencode) $str = rawurldecode($str);
		if ($base64) $str = base64_decode($str);
		$str = gzuncompress($str);
		if ($auto_serial) $str = self::unserialize( $str );
		return $str;
	}

	// 字符串加密/解密
	static function authcode($string, $is_code = 1, $key = '', $expiry = 0, $is_compress = 0) {
		if ($is_code && $is_compress) {
			$string = gzcompress($string, 7);
		}
	    // 动态密匙长度，相同的明文会生成不同密文就是依靠动态密匙
	    $ckey_length = 4;
	       
	    // 密匙   
	    $key = md5($key ? $key : 'default_key');

	    // 密匙a会参与加解密
	    $keya = md5(substr($key, 0, 16));
	    // 密匙b会用来做数据完整性验证
	    $keyb = md5(substr($key, 16, 16));
	    // 密匙c用于变化生成的密文   
	    $keyc = $ckey_length ? ($is_code ? substr(md5(microtime()), -$ckey_length): substr($string, 0, $ckey_length)) : '';
	    // 参与运算的密匙
	    $cryptkey = $keya.md5($keya.$keyc);
	    $key_length = strlen($cryptkey);
	    // 明文，前10位用来保存时间戳，解密时验证数据有效性，10保存是否压缩过，11到27位用来保存$keyb(密匙b),
		//解密时会通过这个密匙验证数据完整性   
	    // 如果是解码的话，会从第$ckey_length位开始，因为密文前$ckey_length位保存 动态密匙，以保证解密正确   
	    $string = $is_code ? (sprintf('%010d%1d', $expiry ? $expiry + time() : 0, $is_compress).substr(md5($string.$keyb), 0, 16).$string) :
	    	base64_decode(substr($string, $ckey_length));
	    $string_length = strlen($string);
	    $result = '';
	    $box = range(0, 255);
	    $rndkey = array();
	    // 产生密匙簿
	    for($i = 0; $i <= 255; $i++) {
	        $rndkey[$i] = ord($cryptkey[$i % $key_length]);
	    }
	    // 用固定的算法，打乱密匙簿，增加随机性，好像很复杂，实际上对并不会增加密文的强度
	    for($j = $i = 0; $i < 256; $i++) {
	        $j = ($j + $box[$i] + $rndkey[$i]) % 256;
	        $tmp = $box[$i];
	        $box[$i] = $box[$j];
	        $box[$j] = $tmp;
	    }
	    // 核心加解密部分
	    for($a = $j = $i = 0; $i < $string_length; $i++) {
	        $a = ($a + 1) % 256;
	        $j = ($j + $box[$a]) % 256;
	        $tmp = $box[$a];
	        $box[$a] = $box[$j];
	        $box[$j] = $tmp;
	        // 从密匙簿得出密匙进行异或，再转成字符
	        $result .= chr(ord($string[$i]) ^ ($box[($box[$a] + $box[$j]) % 256]));
	    }
	    if($is_code) {
	        // 把动态密匙保存在密文里，这也是为什么同样的明文，生产不同密文后能解密的原因
	        // 因为加密后的密文可能是一些特殊字符，复制过程可能会丢失，所以用base64编码
	        return $keyc.str_replace('=', '', base64_encode($result));
	    } else {
	        // 验证数据有效性，请看未加密明文的格式
	        $v_expiry = substr($result, 0, 10);
	        if(($v_expiry == 0 || $v_expiry > time()) &&
				substr($result, 11, 16) == substr(md5(substr($result, 27).$keyb), 0, 16)) {
	        	$is_compress = substr($result, 10, 1);
	            return $is_compress ? gzuncompress(substr($result, 27)) : substr($result, 27);
	        } else {
	            return '';
	        }
	    }   
	}

	// 获取url包含的域名信息
	static public function domainGet($url, $inc_port = false){
		preg_match("/^(http:\/\/)?([^\/]+)/i",$url, $matches);
		if (isset($matches[2])) {
			$host = $matches[2];
			if ($inc_port) {
				return $host;
			}
			$host_arr = explode(':', $host);
			return $host_arr[0];
		}
		return '';
    }

	// 获取url包含的域名后面的信息
	static public function domainGetTail($url){
		preg_match("/[^\.\/]+\.[^\.\/]+$/", $url, $matches);
		return isset($matches[0]) ? $matches[0] : '';
    }



    /**
     * 获取访问者IP
     * @return string
     */
    static public function getIP($userName = null) {        
        // 此顺序不要更改
        $keyArr = array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'REMOTE_ADDR');
        foreach ($keyArr as $key) {
            if (isset($_SERVER[$key])) {
                // 如果是多IP，只取第一个
                $ip_arr = explode(',', $_SERVER[$key]);
                $addr = isset($ip_arr[0]) ? $ip_arr[0] : '';
                $addr = str_replace(' ', '', $addr);// 去掉空格
                if (empty($addr) || strlen($addr) < 7) {
                    continue;
                }
                return $addr;
            }
        }
        return '0.0.0.0';
    }

    /**
     * 重新定位页面
     */
    static public function redirect($url){
    	header("location:" . $url);
    }

	// 是否有多线程执行错误(用于判断多线程执行的效果)
	static public function curlGetError(){
		global $curl_exec_err;
		return $curl_exec_err;
	}

	//// 设置curl有执行错误
	static public function curlSetError($err = false){
		global $curl_exec_err;
		$curl_exec_err = $err;
	}

	/*
	* 单线程执行获取url
	*/
	static public function &curlGet($url, $url_referer = null, $cookie = null, $v_post = null, $is_header = 1, $http_head_arr = null){	
		$ch = curl_init();
		if (!empty($url_referer)) {
			curl_setopt($ch, CURLOPT_REFERER, $url_referer);
		}
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_HEADER, $is_header);//是否显示头信息
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//是否自动显示返回的信息
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($ch, CURLOPT_TIMEOUT, 5);// 保证子url先结束
	    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 4);// 超时设置
		//curl_setopt($ch, CURLOPT_USERAGENT, 'Chrome/49.0.2587.3');// 模拟浏览器
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.104 Safari/537.36 Core/1.53.2372.400 QQBrowser/9.5.11096.400');
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); //解决重定向问题
		if (!empty($cookie)) {
			curl_setopt($ch, CURLOPT_COOKIE, $cookie);
		}

		if (!empty($v_post)) {
			curl_setopt( $ch, CURLOPT_POST, 1); //设置为POST方式
			if (is_array($v_post)) {
				curl_setopt($ch, CURLOPT_POSTFIELDS, $v_post); //数据传输
			}
			else{
				curl_setopt($ch, CURLOPT_POSTFIELDS, $v_post); //数据传输
			}
		}
		if (!empty($http_head_arr)) {
			$header = array();
			$header [] = 'Accept-Language:zh-CN,zh;q=0.8';
			foreach ($http_head_arr as $key => $value) {
				$header[] = $value;
			}
			curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
			//if (App::isDebug()) {
			//	curl_setopt($ch,CURLINFO_HEADER_OUT,true);
			//}
		}
		$data = curl_exec($ch);
		//if (App::isDebug()) {
		//	App::log()->log_dbg(curl_getinfo($ch, CURLINFO_HEADER_OUT));
		//}
		curl_close($ch);

		return $data;
	}


	/*
	* 多线程执行获取url
	* $exec_arr $key => $url / array('url','referer','header', 'useragent', 'cookie', 'post', 'httphead')
	*/
	static public function curlExec(&$exec_arr, $execTime = 20, $checkSign=null, $clearError = true) {
		if($clearError){
			self::curlSetError();
		}

		if (empty($exec_arr) || !count($exec_arr)) {
			return null;
		}
		$queue = curl_multi_init();
		$map = array();

		foreach ($exec_arr as $key => $data) {
			$ch = curl_init();

			if (is_array($data)) {
				if (isset($data['referer']) && !empty($data['referer'])) {
					curl_setopt($ch, CURLOPT_REFERER, $data['referer']);
				}

				if (isset($data['header']) && !empty($data['header'])) {
					curl_setopt($ch, CURLOPT_HEADER, 1);
				}
				else{
					curl_setopt($ch, CURLOPT_HEADER, 0);
				}

				if (isset($data['useragent'])) {
					if (empty($data['useragent']) || $data['useragent'] == '1') {
						curl_setopt($ch, CURLOPT_USERAGENT, 'Chrome/49.0.2587.3');
					}
					else{
						curl_setopt($ch, CURLOPT_USERAGENT, $data['useragent']);
					}
				}

				if (isset($data['cookie']) && !empty($data['cookie'])) {
					curl_setopt($ch, CURLOPT_COOKIE, $data['cookie']);
				}

				if (isset($data['post']) && !empty($data['post'])) {
					curl_setopt( $ch, CURLOPT_POST, 1); //设置为POST方式
					curl_setopt($ch, CURLOPT_POSTFIELDS, $data['post']); //数据传输
				}

				if (isset($data['httphead']) && !empty($data['httphead'])) {
					$header = array();
					// $header[] = 'Accept-Language:zh-CN,zh;q=0.8';
					if (is_array($data['httphead'])) {
						foreach ($data['httphead'] as $key2 => $value2) {
							$header[] = $value2;
						}
					}
					else{
						$header[] = $data['httphead'];
					}
					curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
				}
			}
			else{
				$url = $data;
				curl_setopt($ch, CURLOPT_HEADER, 0);
			}

			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
			curl_setopt($ch, CURLOPT_URL, $url); 
			curl_setopt($ch, CURLOPT_TIMEOUT, $execTime - 2);// 保证子url先结束
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); //解决重定向问题
    		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $execTime > 5 ? ($execTime - 2) : 3);// 超时设置
			//curl_setopt($ch, CURLOPT_NOSIGNAL, true);// 毫秒级超时

			curl_multi_add_handle($queue, $ch);
			$map[(string) $ch] = array($key, $url);
		} 

		$responses = array();
		do { 
			while (($code = curl_multi_exec($queue, $active)) == CURLM_CALL_MULTI_PERFORM) { usleep(100); }

			if ($code != CURLM_OK) { break; } 

			// a request was just completed -- find out which one 
			while ($done = curl_multi_info_read($queue)) {
				$error = curl_error($done['handle']); 
				$v_map = $map[(string) $done['handle']];
				$v_key = $v_map[0];
				$v_url = $v_map[1];
				if($error){
					$responses[$v_key] = '';
					//App::log()->log_test($v_url . ' => ' . $error, '_curl');
					self::curlSetError(true);
				}
				else{
					$str = curl_multi_getcontent($done['handle']);
					//App::log()->log_test($v_url . ' => '.$str, '_curl');
					if($checkSign){// 如果要检查起始头
						$lenSign = strlen($checkSign);
						$lenStr = strlen($str);
						$tail_offset = 0;// 尾部默认长度
						if (substr($str, 0, $lenSign) == $checkSign
							&& substr($str, $lenStr-$lenSign-$tail_offset, $lenSign) == $checkSign) {
							$sign = substr($str, $lenSign, 1);
							$lenStr += (-2*$lenSign - 1 - $tail_offset);
							if($sign == '>'){// 序列化
								//App::log()->log_dbg($v_url . ' e| ' . $str, "_cross");
								$v = substr($str, $lenSign + 1, $lenStr);
								if(!empty($v)){
									$responses[$v_key] = self::unserialize($v);
								}
							}
							else if($sign == '<'){// 原串输出
								$v = substr($str, $lenSign + 1, $lenStr);
								if(!empty($v)){
									$responses[$v_key] = $v;
								}
							}
							else{
								//App::log()->log_test($v_url . ' e| ' . $str, "_curl");
								$responses[$v_key] = null;
								self::curlSetError(true);
							}
						}
						else{
							App::log()->log_dbg($v_url . ' E'.substr($str, 0, $lenSign).'-'.
								substr($str, $lenStr-$lenSign-$tail_offset, $lenSign).'| '. $str, "_curl");
							$responses[$v_key] = null;
							self::curlSetError(true);
						}						
					}
					else{
						$responses[$v_key] = $str;
						//self::curlSetError(true);
					}
				}

				// remove the curl handle that just completed 
				curl_multi_remove_handle($queue, $done['handle']); 
				curl_close($done['handle']); 
			} 

			// Block for data in / output; error handling is done by curl_multi_exec 
			if ($active > 0) { 
				curl_multi_select($queue, 0.5); 
			}

		} while ($active); 

		curl_multi_close($queue); 
		return $responses; 
	}
}