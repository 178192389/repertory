
<style type="text/css">
     
   html,body{
     height: 100%;
     padding: 0;
   }
   .input-group img{
     display: inline-block;
     height: 44px;
     width: 119px;
     margin-left:10px;
     cursor: pointer;
   }
   .error{
      height: 30px;
      text-align: center;
      line-height: 30px;
      color:red;
      margin-bottom: 5px;
   }
   .login-server{
    height: 150px;
    display: none;
   }
   .server-middle{
    width: 318px;
    margin:0 auto;
   }
   .server-url{
    margin-bottom: 20px;
   }
   .server-url,.server-port{
    width: 318px;
    min-height: 44px;
    border-radius:4px;
    padding: 10px;
    border: 1px solid #bfbac5;
   }
   .server-url:focus,.server-port:focus {
    outline: none;
    border: 1px solid #77a7dc;
    }
</style>

<!--大图  登录-->
<div class="container-fluid loginbg" >
  
 <img src="images/banner02.png" style="width:auto;height:auto;max-width:100%;max-height:100%;margin-top:1%;">
  <div class="login">
  	<div class="container">
    	<form class="login-form" id="login-form" action="?/login/" method="post">
          <div class="form-group">   
            <div class="error"><?php ECHO_V($page_errmsg); ?></div>
            <div class="input-group">             
                <input type="text" class="form-control login-tel" id="username" name="username" placeholder="请输入账号" autocomplete="off">              
            </div>
            <div class="input-group">             
                <input type="password" class="form-control login-password" id="pwd" name="password" placeholder="请输入6-20位密码" autocomplete="off">              
            </div>
            <div class="input-group">             
                <input type="text" class="form-control login-code" id="code" name="seccode" placeholder="验证码" autocomplete="off">
                <img src="text2png.php" onclick="javascript:this.src='text2png.php?tm='+Math.random()" alt="刷新，试一试" title="点击，刷新">       
            </div>
            <div class="input-group">
                <div class="pull-left"><input type="checkbox" name="check" id='check'><span>记住用户名</span></div>
                <div class="pull-right"><a href="forget-password.html">忘记密码？</a></div>
            </div>

            <div class="input-group login-pd15"><a href="javascript:void(0)"  class="login-btn" onclick="return login();">立即登录</a></div>          
          	<!-- <div class="login-register"><a href="javascript:void(0)" id="server-show">设置服务器</a></div> -->
          </div> 
          <!-- <div class="login-server">
              <div class="server-middle">
                <input type="text" class="server-url" id="" name="" placeholder="请输入服务器地址" autocomplete="off">
                <input type="text" class="server-port" id="" name="" placeholder="请输入端口号" autocomplete="off">
              </div>
          </div>    -->  
        </form>
    </div>  	 	
  </div>  
</div>

<!-- pop-login -->
<div class="modal fade" id="pop-login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content pop-login">      
      <div class="modal-body">请填写用户名、密码或验证码</div>  
      <div class="modal-footer"><a href="javascript:void(0)" class="btn btn-default" id="btn" data-dismiss="modal">确定</a></div>                
    </div>
  </div>
</div>

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/md5.js"></script>
<!--[if lt IE 9]>
<script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<script type="text/javascript">
  
   function login(){
    
     var username = $('#username').val();
     var pwd = $('#pwd').val();
     var code = $('#code').val();

     if (username == null || username == '') {
          var str = "请输入账号";
          $('.modal-body').html(str);
          $('#pop-login').modal({backdrop: 'static', keyboard: false});
          $('#pop-login').on('hidden.bs.modal', function () {
             $('#username').focus();
          });
          return false;
     }

     if (pwd == null || pwd == '') {
        var str = "请输入密码";
        $('.modal-body').html(str);
        $('#pop-login').modal('show');
        $('#pop-login').on('hidden.bs.modal', function () {
             $('#pwd').focus();
          });
        return false;
     }
     if (code == '' || code == null) {
       var str = "请输入验证码";
       $('.modal-body').html(str);
       $('#pop-login').modal('show');
       $('#pop-login').on('hidden.bs.modal', function () {
             $('#code').focus();
          });
       return false;
     }else{
       var pwd = hex_md5(code + hex_md5(pwd));
       $('#pwd').val(pwd);
       
       $('#login-form').submit();
       ischeck(username);
       return true;
     }
     
   }
   function ischeck(username){
       var u_name = "u_name"; 
       if ($("#check").is(':checked')) {
          setCookie(u_name,username);
       }else{
          delCookie(u_name);

       }
    }

   //写cookies
  function setCookie(name, value) {
   var Days = 30;
   var exp = new Date();
   exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
   document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  }
  //读取cookies 
  function getCookie(name) {
   var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
   if (arr = document.cookie.match(reg)) return unescape(arr[2]);
   else return null;
  }
  //删除cookies 
  function delCookie(name) {
   var exp = new Date();
   exp.setTime(exp.getTime() - 1);
   var cval = getCookie(name);
   if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
  window.onload=function(){
    var u_name = 'u_name'; 
    var get = getCookie(u_name);
    
    if (get != null) {
      $('#username').val(get);
      $("#check").attr("checked","checked");
    }

   } 
  
    $('#pop-login').on('show.bs.modal', function(){
          var $this = $(this);
          var $modal_dialog = $this.find('.modal-dialog');
          // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
          $this.css('display', 'block');
          $modal_dialog.css({'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2) });

        });



</script>