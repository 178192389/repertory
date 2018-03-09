<?php

class stocker{
	// 获取股票名称
	public function getName($stockcode, $task_class = null){
		$info = $this->getInfo($stockcode, $task_class);
		return tools::arrayElement($info, 'name');
	}

	function _getInfoCallback($stockcode, $task_class){
		// 从网络查询
		$ret = $this->_getInfo_sina($stockcode);
		return $ret;
	}

	// 获取股票信息(名称，当前报价)
	public function getInfo($stockcode, $task_class = null){
		return tools::cacheFunc('stock_'.$stockcode, 3, array($this, '_getInfoCallback'), array($stockcode, $task_class));
	}

	// 从新浪获取股票信息
	private function _getInfo_sina($stockcode){
		$content = file_get_contents('http://hq.sinajs.cn/list=sh'.$stockcode);

		$v = tools::stringMid($content, 'hq_str_sh'.$stockcode.'="', '"');
		if (!empty($v)) {
			$v_arr = explode(',', $v);
			$ret = array();
			$ret['name'] = $v_arr[0];//股票名字
			$ret['price_open'] = $v_arr[1];//今日开盘价
			for ($i=0; $i < 5; $i++) { 
				$ret['buy_'.$i] = array($v_arr[11+$i*2], $v_arr[10+$i*2]);// 价格，数量
				$ret['sell_'.$i] = array($v_arr[21+$i*2], $v_arr[20+$i*2]);// 价格，数量
			}
			//$ret['time'] = strtotime($v_arr[30] .' '. $v_arr[31]);
			$ret['valid_time'] = App::time()->get() + 3;// 3秒有效缓存数据
			//App::log()->log_test($content, '_url');
			return $ret;
		}

		return null;
	}
}

?>