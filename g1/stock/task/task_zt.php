<?php
// 中投证券 https://etrade.china-invs.cn/

require_once(APP . 'vsigner.php');

class task_zt extends taskBase{
    function __construct(){
    }

    // 出售
    public function sell($taskValue, $param){
        return msgStr(-1, 'TODO: task_zt::sell');
    }

    // 查询股票数据
    public function stock_query($taskValue, $stockcode){
    	$cookie = $taskValue->get('cookie');

    	$url = 'https://etrade.china-invs.cn/stock_hq.php';
    	$v_post = tools::arrayFromString('cmd=cmd_stock_query&table=main_tb&auto_ref=0&force=1&loc_cal_buyable=0&sjwt_type=&price=&op_type=mairu&g_newpwd=&sjwt=');
    	$v_post['stockcode'] = $stockcode;// 股票代码
    	$v_post['kyye'] = $taskValue->get('coin');
		$v_post['token_id'] = $taskValue->get('token_id');
		$content = tools::curlGet($url, null, $cookie, $v_post, 0);
    }

    public function buy($taskValue, $param){
    	if (!stock_buy_check_param($param, $err_msg, 'zt')) {
    		return msgStr(30, 'invalid param('. $err_msg.')');
    	}

    	$token_id = $taskValue->get('token_id');
    	$online = $taskValue->get('online');
    	if (empty($online)) {
    		$ret = $this->update($taskValue, $param);
    		$err = tools::arrayElement($ret, 'err');
    		if (!empty($err)) {
    			return msgStr(31, 'offline!');
    		}
    	}
    	else if (empty($token_id)) {
    		return msgStr(32, 'miss token id');
    	}

    	$cookie = $taskValue->get('cookie');
    	$token_id = $taskValue->get('token_id');

    	$stockcode = tools::arrayElement($param, 'stockcode');
    	$stockname = tools::arrayElement($param, 'stockname');
    	$price = tools::arrayElement($param, 'price');
    	$stocknum = tools::arrayElement($param, 'stocknum');

    	$coin = $taskValue->get('coin');

    	//var_dump('task_zt::buy');
    	$url = 'https://etrade.china-invs.cn/stock_weituo.php';
    	$v_post = tools::arrayFromString('cmd=cmd_wt_mairu&mkcode=2&table=main_tb');
    	$v_post['stockcode'] = $stockcode;// 股票代码
    	$v_post['stockname'] = $stockname;// 股票名称
    	$v_post['price'] = $price;// 价格
    	$v_post['kmsl'] = intval($coin / $price / 100) * 100;// 可买数量
    	$v_post['amount'] = $stocknum;// 购买数量
    	$v_post['zjzh'] = $taskValue->get('account');
		$v_post['gdzh'] = $taskValue->get('gdzh');
		$v_post['token_id'] = $token_id;
		$content = tools::curlGet($url, null, $cookie, $v_post, 0);

		// {"gdzh":"A217317952","client_cmd":"cmd_wt_mairu","table":"main_tb","ret_msg":"\u4e0d\u652f\u6301\u9694\u65e5\u59d4\u6258","ret_code":"-1"}
		$ret_code =  tools::stringMid($content, 'ret_code":"', '"');
		$ret_msg =  json_decode(tools::stringMid($content, 'ret_msg":', ','));
		if ($ret_code) {
			url_dbg($url, $cookie, $v_post, $content);
		}
        return msgStr($ret_code, $ret_msg);
    }

    // 更新（$param 为空）
    public function update($taskValue, $param){
    	$is_logined = false;
		$token_id = $taskValue->get('token_id');
		if ($token_id) {
			// 获取账号余额，根据此就可以表达是否登录
			$url = 'https://etrade.china-invs.cn/stock_query.php';
			// 资金查询页面POST https://etrade.china-invs.cn/stock_query.php
			//		cmd=cmd_zijin_query&&&client_cmd=cmd_zijin_query&&table=data_tb&zjzh=84811654&token_id=75fcq8ej0d3rmv42ros0ql1lu4_3&gdzh=A217317952&mkcode=2&
			$cookie = $taskValue->get('cookie', 'PHPSESSID=75fcq8ej0d3rmv42ros0ql1lu4; yyb_info=1; AccTypeIndex1=0');
			$url = 'https://etrade.china-invs.cn/stock_query.php';

			$v_post = tools::arrayFromString('page_currency=0&cmd=cmd_zijin_query&&client_cmd=cmd_zijin_query&table=data_tb&mkcode=2');
			$v_post['zjzh'] = $taskValue->get('account');
			$v_post['gdzh'] = $taskValue->get('gdzh');
			$v_post['token_id'] = $taskValue->get('token_id');

			$content = tools::curlGet($url, null, $cookie, $v_post, 0);
			$ret_code = tools::stringMid($content, 'ret_code":"', '"');// "ret_code":"0"
			if ($ret_code === null || $ret_code != 0) {
				url_dbg($url, $cookie, $v_post, $content);
			}
			if ($ret_code === null) {
				// 获取页面错误，等待下次处理
				return msgStr(0, 'Wait');
			}
			else if ($ret_code == 0) {
				// 状态正常，更新资金数量			
				$coin = tools::stringMid($content, 'kyje":"', '"');// "kyje":"23410.9300"
				if ($coin != null) {
					$taskValue->set('coin', $coin);// 记录可用金额数量
				}
				$is_logined = true;
			}
			else{
				// 错误状态，需要重新登录
				$taskValue->set('online', 0);
				$is_logined = false;
			}
		}

		// 如果需要登录处理
		if (empty($is_logined)) {
			return $this->login($taskValue, $param);
		}

		return msgStr(0, 'OK');
    }

    // 登录（$param 为空）
    public function login($taskValue, $param){
		$taskValue->set('online', 0);// 设定在线状态

		// 检查是否已经登录
		$cookie = $taskValue->get('cookie', 'PHPSESSID=75fcq8ej0d3rmv42ros0ql1lu4; yyb_info=1; AccTypeIndex1=0');

		/////////////////////////////////////////////
		// [Step 1] 登录
		// 快速交易页面 https://etrade.china-invs.cn/trade.php?token_id=mq5jv4r1e3rg8rrj1bsthiq931_2
		$v_post = tools::arrayFromString('yyb_name=1&account_type=0');
		//$v_post['yyb_name'] = '1';// 中投证券网上交易厅
		//$v_post['account_type'] = '0';// 0资金账号 1深圳账号
		$v_post['account'] = $taskValue->get('account');
		$v_post['tradekey'] = tools::authcode($taskValue->get('password'), 0);

		// 获取图形验证码字符串
		$url = 'https://etrade.china-invs.cn/login.php?do=login&';
		$content = tools::curlGet($url, $url, $cookie, null, false);
		$code_pic = tools::stringMid($content, '<img src="', '"');
		if (empty($code_pic)) {
			return msgStr(11, 'miss code img url');
		}

		// 获取图形验证码
		$url = 'https://etrade.china-invs.cn/'.$code_pic;//'https://etrade.china-invs.cn/text2png.php?act=draw_txtPNG&msg=c672e2&font=arial.ttf&size=14&rot=0&pad=1&red=0&grn=0&blu=0&bg_red=241&bg_grn=10&bg_blu=102&tr=1';
		$content = tools::curlGet($url, $url, $cookie, null, false);
		$vsigner = new vsigner();
		if(!$vsigner->setPicData($content)){
			return msgStr(12, 'seccode pic data error');
		}
		$code = $vsigner->getCode();
		//tools::fileWrite((empty($global_log_path) ? APP : $global_log_path) .time().'_'.$code.'.png', $content);// 保存验证码图片到本地
		if (empty($code)) {
			return msgStr(13, 'cannot get code');
		}
		$v_post['seccode'] = $code;

		$PHPSESSID = tools::arrayElement(tools::arrayFromString($cookie, ';'), 'PHPSESSID');
		if (!empty($PHPSESSID)) {
			$v_post['token'] = $PHPSESSID;
		}
		$url = 'https://etrade.china-invs.cn/login.php?do=do_login';
		$content = tools::curlGet($url, $url, $cookie, $v_post);
		$cookie = tools::cookieFromContent($cookie, $content);// 解析cookie
		$taskValue->set('cookie', $cookie);// 保存cookie

		// 解析出tokenid  self.parent.login('p1dt77rki485iha5psl4njlt36_','xxx');
		$token_id = tools::stringMid($content, "self.parent.login('", "'");
		if (empty($token_id)) {
			url_dbg($url, $cookie, $v_post, $content);
		}

		$gdzh = '';
		if (!empty($token_id)) {
			$taskValue->set('token_id', $token_id);

			/////////////////////////////////////////////
			// [Step 2] 获取资金账号
			$url = 'https://etrade.china-invs.cn/trade.php?token_id='.$token_id;
			$v_post = null;
			$content = tools::curlGet($url, 'https://etrade.china-invs.cn/', $cookie, $v_post, 0);
			$gdzh = tools::stringMid($content, '"gdzh":"A', '"');//"gdzh":"A217317952"
			if (!empty($gdzh)) {
				$gdzh = 'A' . $gdzh;
				$taskValue->set('gdzh', $gdzh);
			}
			else{
				url_dbg($url, $cookie, $v_post, $content);
			}
		}

		if (!empty($token_id)) {
			$ret = 'Login('. $v_post['account'] . ') token_id[' . $token_id . '] gdzh['.$gdzh.']';
			$taskValue->set('online', 1);
			App::log()->log_test($ret, '_login');
			return msgStr(0, $ret);
		}

		return msgStr(14, 'Miss token id');
    }
}