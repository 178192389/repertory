<?php 
include_once('public/public.php');
header("Content-type: text/html; charset=utf-8"); 
//header("Content-type: application:json; charset=utf-8"); 
header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');

error_reporting(E_ERROR | E_WARNING | E_PARSE);
class demo{
		protected $usuer_id;
		protected $passowrd;
		public    $scd;
		public    $sdc;
		public    $url;
		public   $cookie;
		protected  $erferer;
		function __construct($cookie="",$user_id="",$password="",$url="",$erferer=""){
			//$this->user_id = trim($_POST['user_id']); 
			//$this->password = trim($_POST['password']);
			$this->url = "https://localhost.gf.com.cn:37022/getenc";
			//$this->url = "ws://183.63.121.125:80"; 
			//$this->url = "wss://kxcnewtradews.gf.com.cn"; 
			//$this->url = "wss://kxcnewtradews.gf.com.cn"; 
			// 183.63.121.125 3074390397 广东省广州市 电信 
			$this->erferer = "http://hippo.gf.com.cn";
			//$this->cookie =dirname(__FILE__).'/test.txt';  
			//
			//$this->url = "http://localhost/project/1.php";
		set_error_handler(array(__CLASS__, 'errorHandler'), E_ALL);

		}



  /**
   * 错误处理函数
   * @param int $errNo 错误级别
   * @param string $errStr 错误信息
   * @param string $errFile 错误所在文件名
   * @param int $errLine 错误所在行号
   */
  public static function errorHandler($errNo, $errStr, $errFile, $errLine) {
      var_dump($errFile.'('.$errLine.') : '.$errStr.' (err:'.$errNo.')');
  }

		

	 function login(){
	 	$post["user_id"] = '111111';
	 	$post['password'] = '222222';
		 	
			echo "<pre>";	
			print_r($data);		
			echo "</pre>";*/
				$ch=curl_init();  //初始化一个cURL会话
			$user = strlen('user_id='.$post["user_id"].'&password='.$post['password']);	
			
			ECHO $user;
			$header = array();
			$header [] = 'Accept-Language:zh-CN,zh;q=0.8';
			$header [] = 'Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8';
			$header[] = 'Cache-Control:max-age=0';
			$header[] = 'Connection:keep-alive';
			$header[] = 'Host:localhost.gf.com.cn:37022';
			$header[] = 'Accept-Encoding:gzip, deflate, br';
			$header[] = 'Content-Type:application/x-www-form-urlencoded';
			$header[] = 'Content-Length:'.$user;
			curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
			
				curl_setopt($ch, CURLOPT_HEADER, 1);
			    curl_setopt($ch,CURLOPT_URL,$this->url);
			   
		     	curl_setopt( $ch, CURLOPT_REFERER, $this->erferer); 
		     	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.104 Safari/537.36 Core/1.53.2372.400 QQBrowser/9.5.11096.400');
		     		 curl_setopt( $ch, CURLOPT_POST, 1); //设置为POST方式
		          curl_setopt($ch, CURLOPT_POSTFIELDS, $post); 
 				curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //是否自动显示返回的信息
 				//curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
 				//curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
 				//curl_setopt($ch, CURLOPT_COOKIE, $this->cookie);

			//curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($ch,CURLINFO_HEADER_OUT,true);

				$result=curl_exec($ch);//执行一个cURL会话
		 		 //echo $result;
				echo '<pre>';
		 		print_r( curl_getinfo($ch, CURLINFO_HEADER_OUT) );
		  		 curl_close($ch);//关闭cURL

				return json_decode($result);

	}
}
	
	$demo = new demo();
	$demo->login();


	



		
		
    
?>


