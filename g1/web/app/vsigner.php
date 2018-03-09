<?php

// 验证码识别
class vsigner{
	private $image_info;
	public function __construct($sign_url = null, $pic_format = null){
		if (!empty($sign_url)) {
			$this->setPicUrl($sign_url, $pic_format);
		}
	}
	function setPicData($file_data){
		if (empty($file_data)) {
			App::log()->log_dbg('Can\'t vsign with empty data>'. $pic_format);
			return false;
		}

		$this->image_info = null;
		try{
			$this->image_info = imagecreatefromstring($file_data);
		}
	    catch (Exception $e) {
	    	$this->image_info = null;
	    }

		return $this->image_info ? true : false;
	}

	function setPicUrl($sign_url, $pic_format = null){
		if (file_exists($sign_url)) {
			$data = file_get_contents($sign_url);
			return $this->setPicData($data);
		}

		$this->image_info = null;
		try{
			if($pic_format == 'png'){
				$this->image_info = imagecreatefrompng($sign_url);
			}elseif($pic_format == 'jpg'){
				$this->image_info = imagecreatefromjpeg($sign_url);
			}
			if($pic_format == 'bmp'){
				$this->image_info = imagecreatefromwbmp($sign_url);
			}
			if($pic_format == 'gif'){
				$this->image_info = imagecreatefromgif($sign_url);
			}
			else{
				App::log()->log_dbg('Can\'t vsign pic format>'. $pic_format);
				return false;
			}
		}
	    catch (Exception $e) {
	    	$this->image_info = null;
	    }

		return $this->image_info ? true : false;
	}

	function width() {
		return empty($this->image_info) ? 0 : imagesx($this->image_info);
	}

	function height() {
		return empty($this->image_info) ? 0 : imagesy($this->image_info);
	}

	function getCode($num_code = 4, $inc_num = 1, $inc_abc = 0) {
		$ret = '';
	    $wid = $this->width();
	    $hid = $this->height();
		$arr = $this->getErzhi(90);
		//$arr = $this->reduceZao($arr);// 降噪
		$arr = $this->getJinsuo($arr);// 紧缩
		$small = $this->cutSmall($arr);// 切割成三维数组

		// 逐一获取编码
		foreach ($small as $key => $value) {
			$ret .= vsigner_lib::getCode($value, $inc_num, $inc_abc);
		}

		return $ret;
	}

	/*获取图片RGB信息*/
	function &getRgb(){
	    $rgbArray = array();
	    $res = &$this->image_info;
	    $wid = $this->width();
	    $hid = $this->height();
	    for($i=0; $i < $hid; ++$i){
	        for($j=0; $j < $wid; ++$j){
	            $rgb = imagecolorat($res,$j,$i);
	            $rgbArray[$i][$j] = imagecolorsforindex($res, $rgb);
	        }
	    }
	    return $rgbArray;
	}

	/*
	 *获取灰度信息
	 */
	function &getGray(){
	    $grayArray = array();
	    $res = &$this->image_info;
	    $rgbarray = $this->getRgb();
	    $wid = $this->width();
	    $hid = $this->height();
	    for($i=0; $i < $hid; ++$i){
	        for($j=0; $j < $wid; ++$j){
	            $grayArray[$i][$j] = (299*$rgbarray[$i][$j]['red']+587*$rgbarray[$i][$j]['green']+144*$rgbarray[$i][$j]['blue'])/1000;
	        }
	    }
	    return $grayArray;
	}

	/*
	 *根据自定义的规则，获取二值化二维数组
	 *@return  图片高*宽的二值数组（0,1）
	 */
	function &getErzhi($v_check = 90){
	    $erzhiArray = array();
	    $grayArray = $this->getGray();
	    $wid = $this->width();
	    $hid = $this->height();
	    for($i=0; $i < $hid; ++$i){
	        for($j=0; $j <$wid; ++$j){
	            if($grayArray[$i][$j] < $v_check){
	                $erzhiArray[$i][$j]=1;
	            }else{
	                $erzhiArray[$i][$j]=0;
	            }
	        }
	    }
	    return $erzhiArray;
	}

	/*
	 *二值化图片降噪
	 *@param $erzhiArray二值化数组
	 */
	function &reduceZao(&$arr){
	    $hid = count($arr);
	    $wid = count($arr['0']);

	    $retArr = array();
	    for($i=0;$i<$hid;$i++){
	        for($j=0;$j<$wid;$j++){
	            $num = 0;  
	            if($arr[$i][$j] == 1)  
	            {
	                // 上  
	                if(isset($arr[$i-1][$j])){  
	                    $num = $num + $arr[$i-1][$j];  
	                }  
	                // 下  
	                if(isset($arr[$i+1][$j])){  
	                    $num = $num + $arr[$i+1][$j];  
	                }  
	                // 左  
	                if(isset($arr[$i][$j-1])){  
	                    $num = $num + $arr[$i][$j-1];  
	                }  
	                // 右  
	                if(isset($arr[$i][$j+1])){  
	                    $num = $num + $arr[$i][$j+1];  
	                }  
	                // 上左  
	                if(isset($arr[$i-1][$j-1])){  
	                    $num = $num + $arr[$i-1][$j-1];  
	                }  
	                // 上右  
	                if(isset($arr[$i-1][$j+1])){  
	                    $num = $num + $arr[$i-1][$j+1];  
	                }  
	                // 下左  
	                if(isset($arr[$i+1][$j-1])){  
	                    $num = $num + $arr[$i+1][$j-1];  
	                }  
	                // 下右  
	                if(isset($arr[$i+1][$j+1])){  
	                    $num = $num + $arr[$i+1][$j+1];  
	                }  
	            }

	            $retArr[$i][$j] = ($num < 1) ? 0 : 1;
	        }
	    }
	    return $retArr;
	}

	/*
	 *归一化处理,针对一个个的数字,即去除字符周围的白点
	 *@param $singleArray 二值化数组
	 */
	function getJinsuo(&$singleArray){
	    $dianCount = 0;
	    $rearr = array();
	    
	    $gao = count($singleArray);
	    $kuan = count($singleArray['0']);
	    
	    $dianCount = 0;
	    $shangKuang = 0;
	    $xiaKuang = 0;
	    $zuoKuang = 0;
	    $youKuang = 0;
	    //从上到下扫描
	    for($i=0; $i < $gao; ++$i){
	        for($j=0; $j < $kuan; ++$j){
	            if( $singleArray[$i][$j] == 1){
	                $dianCount++;
	            }
	        }
	        if($dianCount>1){
	            $shangKuang = $i;
	            $dianCount = 0;
	            break;
	        }
	    }
	    //从下到上扫描
	    for($i=$gao-1; $i > -1; $i--){
	        for($j=0; $j < $kuan; ++$j){
	            if( $singleArray[$i][$j] == 1){
	                $dianCount++;
	            }
	        }
	        if($dianCount>1){
	            $xiaKuang = $i;
	            $dianCount = 0;
	            break;
	        }
	    }
	    //从左到右扫描
	    for($i=0; $i < $kuan; ++$i){
	        for($j=0; $j < $gao; ++$j){
	            if( $singleArray[$j][$i] == 1){
	                $dianCount++;
	            }
	        }
	        if($dianCount>1){
	            $zuoKuang = $i;
	            $dianCount = 0;
	            break;
	        }
	    }
	    //从右到左扫描
	    for($i=$kuan-1; $i > -1; --$i){
	        for($j=0; $j < $gao; ++$j){
	            if( $singleArray[$j][$i] == 1){
	                $dianCount++;
	            }
	        }
	        if($dianCount>1){
	            $youKuang = $i;
	            $dianCount = 0;
	            break;
	        }
	    }
	    for($i=0;$i<$xiaKuang-$shangKuang+1;$i++){
	        for($j=0;$j<$youKuang-$zuoKuang+1;$j++){
	            $rearr[$i][$j] = $singleArray[$shangKuang+$i][$zuoKuang+$j];
	        }
	    }
	    return $rearr;
	}

	// 线条化
	function getLineForming(&$arr){
		// 横向线条化
	}

	private function findEmptyLine(&$arr, $line_start = 0, $wid = 0, $hid =0, $empty_flag = 1){
		for ($i=$line_start; $i < $wid; $i++) { 
			$is_empty = 1;
			for ($j=0; $j < $hid; $j++) { 
				if (isset($arr[$j][$i]) && $arr[$j][$i]) {
					$is_empty = 0;
					break;
				}
			}

			if ($is_empty == $empty_flag) {
				return $i;
			}
		}

		return $i;
	}

	/*
	 *切割成三维数组，每个小数字在一个数组里面
	 *只适用四个数字一起的数组
	 *@param 经过归一化处理的二值化数组
	 */
	function cutSmall(&$erzhiArray){
		$hid = count($erzhiArray);
	    $wid = count($erzhiArray['0']);

	    $retArray = array();
	    $line_start = $this->findEmptyLine($erzhiArray, 0, $wid, $hid, 0);
	    while ($line_start < $wid) {
			$line_end = $this->findEmptyLine($erzhiArray, $line_start, $wid, $hid);
			// 增加一个数组
			$arr = array();
			for ($y=0; $y < $hid; $y++) { 
				for ($x=0; $x < ($line_end - $line_start); $x++) { 
					$arr[$y][$x] = $erzhiArray[$y][$x + $line_start];
				}
			}
			$retArray[] = $arr;

			// 找到下一条非空格
			$line_start = $this->findEmptyLine($erzhiArray, $line_end + 1, $wid, $hid, 0);
	    }

	    return $retArray;
	}
};

// 直接使用对比法，找出最接近的编码
class vsigner_lib{
	static function getCode(&$arr, $inc_num, $inc_abc){
		// 获取设置
		$cache_name = 'vsigner_set_arr';
		$feature_set_arr = tools::cacheGet($cache_name);
		if (empty($feature_set_arr)) {
			// 创建
			$f16_arr = array(
				'0' => 'eNozMDAwMIQCAyhA5cNYEBohY2iIX9/A8ZHdh+5+dH0AXmwwiQ==',
				'1' => 'eNozMDAwhAIDKEDhGyKAAQIMXb4hGgAATbEwaA==',
				'2' => 'eNozMDBEAAMQwMMHiqAJG0B5MBEDJICfj2QDNtWosoZ4ZcF87BYZorkfHRgAAFhpMHo=',
				'3' => 'eNozMDAwRAADEEDhG2ICAwMkZQZIAJWPVxabUYaY+vGZTxwf1Vuo/gGJAgBbXzB5',
				'4' => 'eNozMIABQyAwQAKofENDZL6hITofWT2EhYuPSRPSRQowINI/MD4AVCkwfw==',
				'5' => 'eNozMAACQwQwIMyHC0MBskpkpWAxQnx0Y9BFSOGDRLA4DMkTqPaDRAFiZzCE',
				'6' => 'eNozMIABQzAwwMY3hAFkKTSFhlg4uPnoALc1xJiGaTqcDxWEy6I7AgBZCjCF',
				'7' => 'eNozMDBEAQZofGzAAApQeSC+gQEyj1T+QOgGAFjQMGE=',
				'8' => 'eNozMDAwRAADEEDhIyTQlSGJoPPR1SPxiTDIEANgMZ1c96ALAwBzGDCx',
				'9' => 'eNozMDCEAwMwQOXDWMg0NnWYfIQIOp8Ym9D1ItuMjY/NJmw8dHMBZrcwiw==',
				);
			$feature_set_arr = array();
			foreach ($f16_arr as $key => $value) {
				$minor_arr = array();
				$source_arr = vsigner_tools::feature2Array(tools::uncompress($value, false, false, true));// s16
				//vsigner_tools::echoArray($source_arr);

				if (count($source_arr) != 16) {
					App::log()->log_dbg('feature set failed> ' . $key);
					continue;
				}
				$minor_arr['arr16'] = $source_arr;
				$s_len = 8;
				while ($s_len >= 4) {
					$minor_arr['arr' . $s_len] = vsigner_tools::scallArray($source_arr, $s_len, $s_len);
					//vsigner_tools::echoArray($minor_arr['arr' . $s_len]);
					$s_len = $s_len >> 1;
				}

				$feature_set_arr[$key] = $minor_arr;
			}
			tools::cacheSet($cache_name, tools::compress($feature_set_arr, 1), App::isDebug() ? 3 : 3600*24);
		}
		else{
			$feature_set_arr = tools::uncompress($feature_set_arr, 1);
		}

		// 找到最接近的编码
		$s_len = 16;
		$source_arr = vsigner_tools::scallArray($arr, $s_len, $s_len);
		$ret = '';
		$ret_score = 0;
		$parent_weight = 0.6;// 父权重
		$dbg_info = '';
		foreach ($feature_set_arr as $key => $feature_arr) {
			if (empty($inc_num)) {
				if (preg_match ("/^[0-9]/", $key)){
					continue;
				}
			}
			else if (empty($inc_abc)) {
				if (preg_match ("/^[A-Za-z]/", $key)){
					continue;
				}
			}

			$v_score = vsigner_tools::getArraySimilarity($source_arr, $feature_arr['arr'.$s_len], 2);
			//$v_score += 0.4 * vsigner_tools::getArraySimilarity($source_arr, $feature_arr['arr'.$s_len], 3);

			//$dbg_info .= '['.$key.':'.round($v_score,2).']';
			if ($v_score > $ret_score) {
				$ret_score = $v_score;
				$ret = $key;
			}
		}

		//$dbg_info = '■'.$ret.'■'.round($ret_score,2).' => ' . $dbg_info;
		//App::log()->log_dbg($dbg_info);

		return $ret;
	}
}


class vsigner_tools{
	static function echoArray(&$arr){
	    $hid = count($arr);
	    $wid = count($arr['0']);

        for($i=0; $i < $hid; ++$i){
            for($j=0; $j < $wid; ++$j){
            	echo (isset($arr[$i][$j]) && $arr[$i][$j]) ? '■':'□';
            }
            echo "<br>";
        }
	}

	// 获取特征值 字符串16编码
	static function getFeature(&$arr, $ftype = 's16'){
		if ($ftype == 's16') {
			// 扩展到16*16的图片大小
			return self::arrayBitString(self::scallArray($arr, 16, 16));
		}

		return null;
	}

	// 特征码转数组
	static function &feature2Array($str, $ftype = ''){
		$ret = array();
		if (empty($ftype)) {
			$len = strlen($str);
			if ($len == 256) {
				$ftype = 's16';
			}
		}
		if ($ftype == 's16') {
			$wid = $hid = 16;
		}
		else{
			App::log()->log_dbg('feature2Array() failed> unknown type');
		}
		if (!empty($wid)) {
		    for($i=0; $i < $hid; ++$i){
		        for($j=0; $j < $wid; ++$j){
		        	$ret[$i][$j] = substr($str, $j + $i * $wid, 1);
		        }
		    }
		}
		return $ret;
	}

	// 获取2个数组的相似度(返回0~1)
	static function getArraySimilarity(&$v1, &$v2, $cell_side = 2){
	    $hid = count($v1);
	    $wid = count($v1['0']);
	    if ($hid != count($v2) || $wid != count($v2['0'])) {
	    	App::log()->log_dbg('getArraySimilarity() failed.');
	    	return 0;
	    }

	    // 拆分为粒度
	    $same_count = 0;// 相同计数
	    $diff_count = 0;// 不同计数
	    $same_min = 0.8 * $cell_side * $cell_side;
	    for($i=0; $i < $hid; $i+=$cell_side){
	        for($j=0; $j < $wid; $j+=$cell_side){
	        	$same_num = 0;
	        	for ($ci=0; $ci < $cell_side; $ci++) {
		        	for ($cj=0; $cj < $cell_side; $cj++) {
	        			$same_num += (self::_arrElement($v1, $j + $cj, $i + $ci, $wid, $hid) == self::_arrElement($v2, $j + $cj, $i + $ci, $wid, $hid)) ? 1 : 0;
		        	}
	        	}
	        	if ($same_num >= $same_min) {
	        		++$same_count;
	        	}
	        	else{
	        		++$diff_count;
	        	}
	       	}
	    }

	    return floatval($same_count)/($same_count+$diff_count);

	    /*$ret = 0;
	    for($i=0; $i < $hid; ++$i){
	        for($j=0; $j < $wid; ++$j){
	        	if ($v1[$i][$j] == $v2[$i][$j]) {
	        		++$ret;
	        	}
	       	}
	    }

	    return floatval($ret)/($hid * $wid);*/
	}

	static function arrayBitString(&$arr){
	    $hid = count($arr);
	    $ret = '';
	    for($i=0; $i < $hid; ++$i){
	    	$ret .= implode('', $arr[$i]);
	    }
	    return $ret;
	}

	static private function _arrElement(&$arr, $x, $y, $wid, $hid){
		if ($x >= 0 && $x < $wid && $y >= 0 && $y < $hid) {
			return $arr[intval($y)][intval($x)];
		}
		return 0;
	}

	static function &scallArray(&$arr, $wid, $hid){
		$ret = array();
	    $old_h = count($arr);
	    $old_w = count($arr['0']);
	    for($i=0; $i < $hid; ++$i){
	        for($j=0; $j < $wid; ++$j){
	        	$x_scale = doubleval($old_w) / $wid;
	        	$y_scale = doubleval($old_h) / $hid;
	        	$x = $x_scale * $j;
	        	$y = $y_scale * $i;
	        	$v = self::_arrElement($arr, $x, $y, $old_w, $old_h);
	        	$v += self::_arrElement($arr, $x - 0.5, $y, $old_w, $old_h);
	        	$v += self::_arrElement($arr, $x + 0.5, $y, $old_w, $old_h);
	        	$v += self::_arrElement($arr, $x, $y - 0.5, $old_w, $old_h);
	        	$v += self::_arrElement($arr, $x, $y + 0.5, $old_w, $old_h);

	        	$ret[$i][$j] = ($v >= 3) ? 1 : 0;
	        }
	    }

	    return $ret;
	}
};
