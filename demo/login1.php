<?php
header("Content-type: text/html; charset=utf-8"); 
//header("Content-type: application:json; charset=utf-8"); 
header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');

error_reporting(E_ERROR | E_WARNING | E_PARSE);

class demo{
		protected $usuer_id;
		protected $passowrd;
		public    $url;
		public   $cookie;
		//protected  $erferer;
	function __construct($usuer_id="",$passowrd="",$url=""){

		//$this->user_id = trim($_POST['user_id']); 
		$this->password = trim($_POST['password']);
		$this->url = 'https://localhost.gf.com.cn:37022/getenc';
		//getserial
		//getmac
		//$this->url = "http://localhost/project/1.php";
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
  		$post["user_id"] = $this->user_id;
	 	$post['password'] = $this->password;
  		/*foreach ($post as $k => $v) {
  			$user.=$k.'='.$v;
  		}*/
  		//$ch=curl_init();  //初始化一个cURL会话
		//$user = strlen('user_id='.$post["user_id"].'&password='.$post['password']);	
		$user = strlen($user);
		
		$urls = array();
		$urls[] = 'https://localhost.gf.com.cn:37022/getenc';
		$urls[] = 'https://localhost.gf.com.cn:37022/getmac';
		$urls[] = 'https://localhost.gf.com.cn:37022/getserial';
		$urls[] ='http://gateway.hippo.gf.com.cn/query?config=webtraderConfig.json';

		 $mh = curl_multi_init();

		 $curl_array = array();
        foreach($urls as $i => $u){  
        	$curl_arr[$i] = curl_init($u);

            $header = array();
			$header [] = 'Accept-Language:zh-CN,zh;q=0.8';
			//$header [] = 'Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8';
			//$header[] = 'Cache-Control:max-age=0';
			//$header[] = 'Connection:keep-alive';
			$header[] = 'Host:localhost.gf.com.cn:37022';
			//$header[] = 'Accept-Encoding:gzip, deflate, br';
			$header[] = 'Content-Type:application/x-www-form-urlencoded';
			$header[] = 'Content-Length:'.$user;
			curl_setopt($curl_arr[$i], CURLOPT_HTTPHEADER, $header);
			//curl_setopt($curl_arr[$i], CURLOPT_HEADER, 1);
			curl_setopt($curl_arr[$i], CURLOPT_POST, 1); 
			curl_setopt($curl_arr[$i], CURLOPT_POSTFIELDS, $post); 
			curl_setopt($curl_arr[$i], CURLOPT_RETURNTRANSFER, 1); //是否自动显示返回的信息
            curl_setopt($curl_arr[$i], CURLOPT_REFERER,"http://hippo.gf.com.cn"); 	
	 		curl_setopt($curl_arr[$i], CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.104 Safari/537.36 Core/1.53.2372.400 QQBrowser/9.5.11096.400');
			curl_setopt($curl_arr[$i],CURLOPT_SSL_VERIFYPEER, FALSE);
			curl_setopt($curl_arr[$i],CURLOPT_SSL_VERIFYHOST, FALSE);
			//curl_setopt($curl_arr[$i],CURLINFO_HEADER_OUT,true);
			//curl_setopt($curl_arr[$i],CURLOPT_FOLLOWLOCATION,true);

            curl_multi_add_handle($mh, $curl_arr[$i]);
        }
		  //产生一个Cookie文件
		//$cookie = dirname(__FILE__) . '/cookie.txt'; 
		//curl_setopt($ch,CURLOPT_COOKIEFILE,$cookie);
        //curl_setopt($ch,CURLOPT_COOKIEJAR,$cookie); 
        
        

		 //$result=curl_exec($ch);//执行一个cURL会话
 		$running = NULL;
        do {
            usleep(10000);
            curl_multi_exec($mh,$running);
        } while($running > 0);
       
        $result = array();
        $param = ['passsword','mac','hdd','1'];
        foreach( $param as $i => $u)
        {
            $result[$u] = curl_multi_getcontent($curl_arr[$i]);
           // ECHO  $result[$u];
        }

        foreach($urls as $i => $u){
            curl_multi_remove_handle($mh, $curl_arr[$i]);
        }
         curl_multi_close($mh);  
         	
     	echo '<pre>';
 		//print_r( curl_getinfo($ch, CURLINFO_HEADER_OUT) );
 		//print_r($result);
 		var_dump(json_encode($result));
 		echo '</pre>';


	 return $data=json_encode($result); 
 		

 //e87c42e65fec292ac78c22e9dd6e508fa69afd5bb1ca5d7a3823f9b355c8108a185839cd4a30e3a5ce4d860a08b27a09e3bf75f718f3af770af85f42401573e489df6238fba54c7341ada452c0922e503 
 //7ff65bd760c52c223ecbd06490751ae2f439a57a30213297d41a4be2ed6bbd778b6aa2b1f883416db3b6b1439b0a6e3c4d68f10419a6723b0a9c1838c06cddf238549d3b5dcbb9f99377611ee2035b413 
 //wss://fgtradews.gf.com.cn/
 //wss://kxcnewtradews.gf.com.cn/  ${Sec-WebSocket-Accept}=base64(sha1(${Sec-WebSocket-Key}+"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"))
	}
	//encryptData:"09DBE6BF9180F4E5BE4A9ED116D23B2A"
	//"{"expireKey":"dfc609dd1ea6f1e1ab4a29d3ec8a5477652832b1f448b600fb5e06de8e04cca3","encryptData":"be24cba3be2050cb8e928cca455b3a51e4386a420cf3f56b5069e22b961f3020438b228a0af2840b654f5d8fa11b477b63ce75d5e16e25c0962f8f23402d9b7fca98b98faf4d19d02dd882097c5a54b3faf351ce23e3b59bcba68b5367a6fbaebd8c53c17eb79e34b746d7e16ad80b85c2fdb3cb16fe84fbd34eea40457f0aca1a790f5ee45eb09229f81ea31c1ce752ae2e5735616a38a27eed76d0ef075780ad93a5db5d7b493a14fa79c03ec8cd32006e4b4660b32a3b33fbab58b586ebda8d07d8e1ceeda6e963dd81921da97f689bedad760794f43ea61d479c48ebbbf142c6b63cff0e025b579074c64273a1abca0f76793b574195c80a0b94743760f703fb015763700fd40cde6e4c5dbbf7c49da4dab51170671290314fbb2ff2d757cfe4dbe41c3dd0f0807a98b966680963d78c17b388b59ab10f4312be32197a20adecd31b5a7ed76d54243c3be3cde6de0ab01fc4a35436347cdf8f8321c9f29554bf04b7e996f3b11b5d122bb3ff443b33c971ab8d51ad843ed2273772ac00d9fcd0d6d41dfaf552a515b564a1f1295b76b786644ab0aaa1056271b6d094cd2af39f0f044fbb9adc485cf1f8300cf96349ded5003ce62f94ea05305f94fe77b4df0821e19859dd730a415906fd7f5785e1d7fd23e0072a16db20a3605a1f59c98f8195d61c472c890a9c971a9d45dc5ed56ea87324b4d2e6387302e21e2cc4ef52d3304da14bea1cc1df52fd73b11f7143b3b813cf8dfe8f748f57b67efaf419a1b92107c93fb37d6842e27a2568927ef46968f4734f259088f8ce67db5374446466b94dc5f629b665acc961d4d49d40f19aa6782f426a177be06d5d116454a365494e52ea7c795b660ac465e46ad6d0b8479d710e19b3a43eb44c30a2c2bdb8eac69596919e0704f427939b2babaac93e6cf2dca144dc9f9c32665e23d24bc833b0631e11f5e67426f9e2c51aff6d7b0bfd44764fe1c246f409788e4c5a65a27173f3a36706e5cfc6a7d44774a35d46850c130e1f3682934436d48eba394ed8b7451995cc798df9a66494e396c2cfaa 7ff65bd760c52c223ecbd06490751ae2f439a57a30213297d41a4be2ed6bbd778b6aa2b1f883416db3b6b1439b0a6e3c4d68f10419a6723b0a9c1838c06cddf238549d3b5dcbb9f99377611ee2035b413 e76f7749f0a91ad519261027274c93221160a38ba84a36456c6cb75d5d45009"}"
	//"{"expireKey":"4c45e491dbb713fbfc30788698f471d3117ecb92827c96ad1d9840f20348dde7","encryptData":"be24cba3be2050cb8e928cca455b3a51e4386a420cf3f56b5069e22b961f3020438b228a0af2840b654f5d8fa11b477b63ce75d5e16e25c0962f8f23402d9b7fca98b98faf4d19d02dd882097c5a54b3faf351ce23e3b59bcba68b5367a6fbaebd8c53c17eb79e34b746d7e16ad80b85c2fdb3cb16fe84fbd34eea40457f0aca1a790f5ee45eb09229f81ea31c1ce752ae2e5735616a38a27eed76d0ef075780ad93a5db5d7b493a14fa79c03ec8cd32006e4b4660b32a3b33fbab58b586ebda8d07d8e1ceeda6e963dd81921da97f689bedad760794f43ea61d479c48ebbbf142c6b63cff0e025b579074c64273a1abca0f76793b574195c80a0b94743760f703fb015763700fd40cde6e4c5dbbf7c49da4dab51170671290314fbb2ff2d757cfe4dbe41c3dd0f0807a98b966680963d78c17b388b59ab10f4312be32197a20adecd31b5a7ed76d54243c3be3cde6de0ab01fc4a35436347cdf8f8321c9f29554bf04b7e996f3b11b5d122bb3ff443b33c971ab8d51ad843ed2273772ac00d9fcd0d6d41dfaf552a515b564a1f1295b76b786644ab0aaa1056271b6d094cd2af39f0f044fbb9adc485cf1f8300cf96349ded5003ce62f94ea05305f94fe77b4df0821e19859dd730a415906fd7f5785e1d7fd23e0072a16db20a3605a1f59c98f8195d61c472c890a9c971a9d45dc5ed56ea87324b4d2e6387302e21e2cc4ef52d3304da14bea1cc1df52fd73b11f7143b3b813cf8dfe8f748f57b67efaf419a1b92107c93fb37d6842e27a2568927ef46968f4734f259088f8ce67db5374446466b94dc5f629b665acc961d4d49d40f19aa6782f426a177be06d5d116454a365494e52ea7c795b660ac465e46ad6d0b8479d710e19b3a43eb44c30a2c2bdb8eac69596919e0704f427939b2babaac93e6cf2dca144dc9f9c32665e23d24bc833b0631e11f5e67426f9e2c51aff6d7b0bfd44764fe1c246f409788e4c5a65a27173f3a36706e5cfc6a7d44774a35d46850c130e1f3682934436d48eba394ed8b7451995cc798df9a66494e396c2cfaa e87c42e65fec292ac78c22e9dd6e508fa69afd5bb1ca5d7a3823f9b355c8108a185839cd4a30e3a5ce4d860a08b27a09e3bf75f718f3af770af85f42401573e489df6238fba54c7341ada452c0922e503 e76f7749f0a91ad519261027274c93221160a38ba84a36456c6cb75d5d45009"}"

	//"*DA*90E*5D*18*2F*92*2ADug*E6*DC*F6d*F6G*97*883*91G*16bw*22*A05*A8*CCL8G*97*883*91G*16bw*22*A05*A8*CCL8G*97*883*91G*16bw*22*A05*A8*CCL8*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00"
}
$demo = new demo();
$v = $demo->login();




class gf
{
	public function login($account, $password)
	{
		
	}
}


?>