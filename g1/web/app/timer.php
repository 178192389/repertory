<?php

class timer
{
	private $time_now;

	function __construct($time_now = null){
		$this->set($time_now);
	}

	// 判断时间是否有效
	function isValid($time_now, $diff_max = 600){
		return (abs(intval($time_now) - $this->time_now) < $diff_max) ? 1 : 0;
	}

	function diff($time, $time_now = null){
		if($time_now === null){
			$time_now = $this->time_now;
		}

		return abs($time - $time_now);
	}
	
	// 是否给定时间已经过了
	function expire($time){

		return ($this->time_now >= $time) ? true : false;
	}

	function get(){
		return $this->time_now;
	}

	function set($time_now){
		$this->time_now = empty($time_now) ? time() : $time_now;
	}

	function setStr($time_str){
		$this->time_now = strtotime($time_str);
	}

	function getStr($dis_format = 'Y-m-d H:i:s', $time_now = 0){
		return date($dis_format, empty($time_now) ? $this->time_now : $time_now);
	}

	/**
	* 获取月头
	*/
	function thisMonth($dis_format = 'Y-m'){
		return date($dis_format, $this->time_now);
	}

	/**
	* 获取 上个月 月头
	*/
	function lastMonth($diff = -1, $dis_format = 'Y-m'){
		$m = intval(date('Y', $this->time_now)) * 12 + intval(date('m', $this->time_now)) + $diff;
		$v_year = intval($m / 12);
		$v_month = $m % 12;
		$v = strtotime(sprintf('%04d-%02d', $v_year, $v_month));
		return date($dis_format, $v);
	}	

	/**
	* 获取 月头第一天
	*/
	function monthFirstDay($dis_format = 'Y-m-d H:i:s'){
		$v = strtotime(date('Y-m', $this->time_now).'-01 00:00:00');
		return date($dis_format, $v);
	}	

	/**
	* 获取 月头最后一天
	*/
	function monthLastDay($dis_format = 'Y-m-d H:i:s'){
		$v = strtotime($this->lastMonth(1))-1;
		return date($dis_format, $v);
	}
}

?>