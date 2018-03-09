





function sendAjax() {
  //构造表单数据
  var formData = new FormData();
  formData.user = $("#user").val()
  //;append('username', 'johndoe');
  formData.pwd = $("#pwd").val();
  //append('id', 123456);
  //创建xhr对象 
  var xhr = new XMLHttpRequest();
  //设置xhr请求的超时时间
  xhr.timeout = 1000;
  //设置响应返回的数据格式
  xhr.responseType = "text";
  //创建一个 post 请求，采用异步
  xhr.open('POST', './login1.php', true);
  //将响应数据按照纯文本格式来解析，字符集替换为用户自己定义的字符集
  xhr.overrideMimeType('text/plain; charset=x-user-defined');


  /*xhr.onreadystatechange =function(){
     if (this.readyState === 4 && this.status === 200) {

              var type = this.responseText;
              jsonobj = eval('(' + type + ')');
              alert(jsonobj);
      }

  }*/
  //注册相关事件回调处理函数
  xhr.onload = function(e) { 
    if(this.status == 200||this.status == 304){
          var data=this.responseText;
         alert(data);
    }
  };
  xhr.ontimeout = function(e) {
    alert(this.status+'延时')
   };
  xhr.onerror = function(e) { 
      alert(this.status+'错误');
   };
  xhr.upload.onprogress = function(e) {
      alert(this.status+'下载');
   };
 
  //发送数据
  xhr.send(formData);
};





$(function(){

/*window.onload = function(){
  f1();
};*/
//function f1(){


  var xhr = new XMLHttpRequest();
  xhr.timeout = 3000;
  xhr.responseType = "text";
  var url="https://localhost.gf.com.cn:37022/version";
  xhr.open('POST', url, true);
  xhr.overrideMimeType('text/plain; charset=x-user-defined');
 // xhr.setRequestHeader("Content-Type", "text/plain");
  xhr.onloadend =function(e){
   if(this.status == 200||this.status == 304){
        str=this.responseText;
        $('#checkEnc').append('<input type="password" id="pwd" required="" placeholder="密码" name="password" value=""> '); 
        alert(str+'SUCCESS');
    }else{
        $('#checkEnc').append(' <a href="https://cdn.gfzq.cn/gf-trader/safe_plugins/GF-LoginHelper-0.0.3.exe" class="installSecTips" title="安装后请刷新页面！" target="_blank">点击安装新版安全控件</a>');
    }
  };
  xhr.send();
//};



//ws://183.63.121.125"
//wss://fgtradews.gf.com.cn/
//"TRADE":
site= [
    {
      "NAME": "站点1",
      "HOST": "wss://bjtradews.gf.com.cn",
      "PORT": "443"
    },
    {
      "NAME": "站点2",
      "HOST": "wss://mctradews.gf.com.cn",
      "PORT": "443"
    },
    {
      "NAME": "站点3",
      "HOST": "wss://kxcnewtradews.gf.com.cn",
      "PORT": "443"
    },
    {
      "NAME": "站点4",
      "HOST": "wss://shdxtradews.gf.com.cn",
      "PORT": "443"
    },
    {
      "NAME": "站点5",
      "HOST": "wss://shlttradews.gf.com.cn",
      "PORT": "443"
    },
    {
      "NAME": "站点6",
      "HOST": "wss://shhjtradews.gf.com.cn",
      "PORT": "443"
    },
    {
      "NAME": "站点7",
      "HOST": "wss://fgtradews.gf.com.cn",
      "PORT": "443"
    }
  ];
  //http://gateway.hippo.gf.com.cn/query?config=webtraderConfig.json
  if(typeof(WebSocket) == "undefined") {
        alert("您的浏览器不支持WebSocket");
  };

var ws = new WebSocket("wss://kxcnewtradews.gf.com.cn:443",["msg-hippo"]);
ws.onopen = function(){

  console.log("握手成功");
}
ws.onmessage = function(e){
  console.log("message:" + e.data);
}
ws.onerror = function(){
  console.log("error");
}
    $("#result").click(function() {

         ws.send("*DA*90E*5D*18*2F*92*2ADug*E6*DC*F6d*F6G*97*883*91G*16bw*22*A05*A8*CCL8G*97*883*91G*16bw*22*A05*A8*CCL8G*97*883*91G*16bw*22*A05*A8*CCL8*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00*00");
    });

//STOCK_SYNC:  HOST:"http://ws.gf.com.cn/uc/fav/stocks"  PATH:"/uc/fav/stocks"]
// CODELIST_URL:   HOST:"http://quote.gf.com.cn"   PATH:"/codelist" 
// NEWS:HOST:"http://mds.gf.com.cn"  PATH:"/geninfo/v1.0/news"            





//alert('gf');

	function xhrRequest(url,data){
	  var xhr = new XMLHttpRequest();
	  xhr.timeout = 3000;
	  xhr.responseType = "text";
	  //var url="https://localhost.gf.com.cn:37022/version";
	
	  alert(typeof url);
	 
	  	for(var i in url){
	 	 xhr.open('POST', url[i], true);
	 	 alert(url[i]);
	  	}
	 
	  xhr.overrideMimeType('text/plain; charset=x-user-defined');
	  //xhr.setRequestHeader("Content-Type", "text/plain");
	  
	  
	  	if(data==null){
	  		xhr.send();
	  	}else{
	  		xhr.send(data);
	  	}
	}

	
	function getLogger(){
		//var url =new Array();
		
		 t="https://localhost.gf.com.cn:37022/version";
		var url =[t]; 
	/*	 {
  "token": "2f2a9a62f122f56d184ed9a49784045d855e3ce847fb8637cc37cbf2c22cf56a",
  "connector": {
    "host": "wshippo.gf.com.cn",
    "port": 80
  },
  "servers": {
    "connector": {
      "address": "conn.gf.com.cn",
      "port": 80
    },
    "connector-socket-io": {
      "address": "conn.gf.com.cn",
      "port": 8080
    }
  }
}*/

		 xhrRequest(url);
		  xhr.onloadend =function(e){
			   if(this.status == 200||this.status == 304){
			        str=this.responseText;
			        $('#checkEnc').append('<input type="password" id="pwd" required="" placeholder="密码" name="password" value=""> '); 
			        alert(str);
			    }else{
			        $('#checkEnc').append(' <a href="https://cdn.gfzq.cn/gf-trader/safe_plugins/GF-LoginHelper-0.0.3.exe" class="installSecTips" title="安装后请刷新页面！" target="_blank">点击安装新版安全控件</a>');
			    }
			  };

		
	}

	function login(e){
	



	}

getLogger();

	       t.prototype.login = function (e, t) {
                var n = new o.FixMessage(l.MsgTypes.LOGON);
                n.setField(l.Fields.SecureDataLen, "" + t.length),
                n.setField(l.Fields.SecureData, t);
                var r = e.split(":"),
                    i = r[0],
                    u = r[1],
                    a = r[2];
                return n.setField(l.Fields.CstmApplVerID, i),
                n.setField(l.Fields.XmlDataLen, "0"),
                n.setField(l.Fields.LastMsgSeqNumProcessed, "0"),
                n.setField(l.Fields.EncryptMethod, "0"),
                n.setField(l.Fields.HeartBtInt, "300"),
                n.setField(l.Fields.Username, u),
                n.setField(l.Fields.Password, a),
                ["HSUF.AUTH", n]
                alert(r);

			}
})

//"{"expireKey":"a1ade181ae78886aeb24915e258050865e0264465de2716ae038eb357e96b51b",
//"encryptData":"be24cba3be2050cb8e928cca455b3a51e0c8fd00446c8cf7c21e38f51ce313717b684958c8cea7301a059b35752b2b4ad91bfd82afc8e4ad73eeacfe
//4c4380646ccb48b19d17b0719104bbfb197762963570592eb0a197c20594c9e8a50b299acac2f1bdfa49124f0e6b65c3a4c1a7f433ee7aa176f67b6cfd76a4423fc13e8a
//7ad0aa5a71c52d5e83510890e1cab9726e382063178f8bcd5dfed3bd8df7987c"}"
//
//