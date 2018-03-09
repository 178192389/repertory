<?php

class base extends c_base{
	function __construct(){
	}

	function &m(){
		return LOAD(APP_M.'user_m');
	}

	// $parent_view 是否显示父视图
	// $static_name 是否静态化
	function display($view, $param = array(), $parent_view = null, $static_name = null, $static_time = 600, $template = 'template'){
		if (!empty($static_name)) {
			$content = tools::cacheGet($static_name);
			if (!empty($content)) {
				echo $content;
				return;
			}
		}
		$this->m()->viewCommon($param);

	    $param['al_content'] = empty($view) ? '' : VIEW($view, $param, TRUE);
	    
		if (!empty($parent_view)) {
			if (is_array($parent_view)) {
				foreach ($parent_view as $key => $value) {
	    			$param['al_content'] = VIEW($value, $param, TRUE);
				}
			}
			else{
	    		$param['al_content'] = VIEW($parent_view, $param, TRUE);
			}
		}

	    //header("Content-type: text/html; charset=utf-8");
	    $content = VIEW($template, $param, empty($static_name) ? FALSE : TRUE);
	    if (!empty($static_name)) {
	    	$content = tools::htmlCompress($content);
	    	tools::cacheSet($static_name, $content, App::isDebug() ? 3 : $static_time);
	    	echo $content;
	    }
	}
}
