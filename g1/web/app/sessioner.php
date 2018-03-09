<?php

define('SESSION_SIGN', 'ss_');
define('SESSION_USE_REDIS', 1);

class sessioner
{
    public function cookieKey($expire=86400){
        $sign = SESSION_SIGN;
        $ret = null;
        if(isset($_COOKIE[$sign])){
            $ret = $_COOKIE[$sign];
        }
        else{
            //在IE6下的iframe无法获取到cookie,于是我使用了get方式传递了cookie的名字
            if(isset($_GET[$sign])){
                $ret = $_GET[$sign];
            }else{
                $ret = SESSION_SIGN.md5(uniqid(rand(), true)).time();
            }

            $expireAt=time()+$expire;
            setcookie($sign, $ret, $expireAt, "/");
        }
        return $ret;
    }
    // 增加cookit有效期
    public function expire($expire=86400){
        $sign = SESSION_SIGN;
        $ret = $this->cookieKey();
        $expireAt=time()+$expire;
        setcookie($sign, "");// 先删除
        setcookie($sign, $ret, $expireAt, "/");
    }
	public function get($key, $throwException = null){
        // 直接使用redis
        if(SESSION_USE_REDIS){
            $cacheName = $this->cookieKey().$key;
            $ret = App::redis()->get($cacheName);
            if (!empty($ret)) {
                return unserialize($ret);
            }
            return null;            
        }

        // 普通模式
        if (isset($_SESSION[$key])) { // 存在,直接返回
            return $_SESSION[$key];
        } else if ($throwException) { // 不存在,且需要抛异常
            throw new UserException(UserException::ERROR_RUNTIME_ERROR, 'Session expired!');
        } else {
            return NULL;
        }
	}

	public function set($key, $value){
        // 直接使用redis
        if(SESSION_USE_REDIS){
            $cacheName = $this->cookieKey().$key;
            if (empty($value)) {
                App::redis()->del($cacheName);
            }
            else{
                App::redis()->setEx($cacheName, 12*60*60, serialize($value));
            }
        }
        else
        {
            if (empty($value)) {
                unset($_SESSION[$key]);
            }
            else{
                $_SESSION[$key] = $value;
            }
        }
        
	}
}

?>