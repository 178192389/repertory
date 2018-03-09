<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1"> 
<title>登录页面</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css"> 
</head>
<style>
/* background-image:radial-gradient(circle at left top,#fff 10%,#ccc 30%,#000 60%,#555 80%,#888 100%);
background-image:radial-gradient(circle at 25% 35%,pink,#31a4a4,rgba(255,255,255,0.5)); circle at top,#fff,green,black
  *   */
body{  background-image:radial-gradient(circle at top,#fff,green,black);}
.container{width:580px;}
.container .jumbotron{margin:128px auto;
 background:rgba(255,255,255,0.1);border-radius:12%;
/* 	box-shadow:1px 1px 10px 10px green; */
}
/* .col-xs-6,.col-xs-12{margin-top:15px;} */
.modal-dialog{opacity:0.9;background:#fff; border-radius:9px;}
</style>
<body>

<div class="container">
	<div class="jumbotron">
		<!-- has-success  -->
		<h2 class="text-center text-success"><strong>后台管理中心</strong></h2>
		<form action="__URL__/dologin" method="post" class="form-horizontal has-success">
			<div class="form-group form-group-lg ">
		      <div class="input-group ">
		        <span class="input-group-addon">用户名：</span>
		        <input type="text" class="form-control " name="a_name" value="">
		      </div>
  			</div>
			<div class="form-group form-group-lg">
		      <div class="input-group">
		        <span class="input-group-addon">密码：</span>
		        <input type="password" class="form-control" name="a_password" value="">
		      </div>
  			</div>
			<div class="form-group form-group-lg">
		      <div class="input-group">
		        <span class="input-group-addon">验证码：</span>
		        <input type="text" class="form-control" name="fcode">
		        <span class="input-group-addon" style="padding:0px;border:0px;">
		        	<img src="__APP__/Login/verify" onclick="this.src=this.src+'?c='+Math.random()"/>
		        </span>
		      </div>
  			</div>
  			
			<div class="form-group form-group-lg">
				<button type="submit" class="btn btn-success form-control">提交</button>
		
			<!-- <div class="col-xs-6">
			<a  class="btn btn-danger form-control" data-toggle="modal" data-target="#mymodal">注册</a>
			</div> -->
			</div>
		</form>
	</div>
    
	<!-- <div class="modal fade" id="mymodal"  data-backdrop="static" role="dialog"  aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="content">
				<form action="__URL__/register" method="post" class="form-horizontal">
					<div class="modal-header">
						<button class="close" data-dismiss="modal" aria-label="Close">x</button>
						   <h3 class="modal-title text-center"  id="myModalLabel">用户注册</h3>
					</div>
					<div class="container">
					<div class="modal-body">
						<div class="form-group">
					      <div class="input-group ">
					        <span class="input-group-addon">用户名：</span>
					        <input type="text" class="form-control " name="name" value="">
					      </div>
			  			</div>
						<div class="form-group ">
					      <div class="input-group">
					        <span class="input-group-addon">密码：</span>
					        <input type="password" class="form-control" name="pwd" value="">
					      </div>
			  			</div>
			  			<div class="form-group">
					      <div class="input-group">
					        <span class="input-group-addon">确认密码：</span>
					        <input type="password" class="form-control" name="repwd" value="">
					      </div>
			  			</div>
			  			<div class="form-group">
					      <div class="input-group">
					        <span class="input-group-addon">email@：</span>
					        <input type="input" class="form-control" name="email" value="">
					      </div>
			  			</div>
						<div class="form-group">
					      <div class="input-group">
					        <span class="input-group-addon">验证码：</span>
					        <input type="text" class="form-control" name="fcode">
					        <span class="input-group-addon" style="padding:0px;border:0px;">
					        	<img src="__APP__/Common/verify" onclick="this.src=this.src+'?c='+Math.random()" height="34"/>
					        </span>
					      </div>
			  			</div>
			  			 <div class="form-group">
							<div class="col-sm-6">
								<button type="submit" class="btn btn-primary  form-control">提交</button>
							</div>
							<div class="col-sm-6">
								<button type="reset" class="btn btn-danger  form-control">重置</button>
							</div>
						</div> 	
					</div>
					</div>
				</form>	
			</div>
		</div> 
	</div>-->
</div>
<script>
	
</script>
</body>
</html>