<?php

define('LOGTYPE_LOG', 	'0');
define('LOGTYPE_WARN', 	'1');
define('LOGTYPE_ERR', 	'2');
define('LOGTYPE_NONE', 	'99');


class loger
{
	private $set_log_level = LOGTYPE_ERR;// 日志输出级别
	private $_logs = array();// 所有调试信息
	
	/**
	 * 设定调试级别
	 * @param [int] $level
	 */
	public function set_log_level($level){
		$this->set_log_level = $level;
	}

	/**
	 * 获取调试级别
	 * @return [int]
	 */
	public function get_log_level(){
		return $this->set_log_level;
	}

	private function _log_path(){
		global $global_log_path;
		return empty($global_log_path) ? (dirname(__FILE__) . '/../log/') : $global_log_path;
	}

	private function _log($filen, $str){
		$fp = @fopen($filen, 'ab+');
		if($fp){
			@fwrite($fp, $str . "\r\n");// 必须要双引号引起来
			@fclose($fp);
		}
		else{
			var_dump('write file('.$filen.') failed!');
		}
		$str = str_replace("\\", "\\\\", $str);
		$str = str_replace("\'", "\\'", $str);
		$this->_logs[] = $str;
	}

	/**
	 * 输出日志
	 * @param  [object] $v 日志类容
	 * @param  [string] $type
	 */
	public function log($v, $type = LOGTYPE_LOG, $filename=""){
		if($type < $this->set_log_level)
			return;

		$log_path = $this->_log_path();

		// 写日志
		if (App::isDebug()) {
			$t = date('Y_m_d', time());
			$filen = $log_path . $t.'_log'.$filename.'.txt';
			$this->_log($filen, date( "y-m-d H:i:s | ", time()) . $v);
		}
		else{
			// 写入
			if (empty($filename)) {
				$filename = 'dbg_log.txt';
			}
			else{
				$filename = 'log_'.$filename.'.txt';
			}
			$this->_log($log_path . $filename, date( "y-m-d H:i:s | ", time()) . $v);
		}
	}

	public function log_test($v, $filename="_test"){
		// 写入
		$filen = $this->_log_path() . 'dbg_log'.$filename.'.txt';
		$this->_log($filen, date( "y-m-d H:i:s | ", time()) . $v);
	}

	public function log_dbg($v, $filename=""){
		$this->log($v, LOGTYPE_ERR, $filename);
	}

	public function log_warn($v){
		$this->log($v, LOGTYPE_WARN);
	}

	public function log_cheat($v){
		$this->log_test($v, '_cheat');
	}

	/**
	 * 调试位置
	 */
	public function dbg($v = 'debug'){		
		echo '<pre>';print_r($v);
	}

	/**
	 * js控制台输出
	 */
	public function js_console_log(){
		if (count($this->_logs)) {
			echo '<script>';
			foreach ($this->_logs as $key => $value) {
				echo "console.log('".$value."');";
			}
			echo '</script>';
		}
	}
}

?>