<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<tema name="viewport" centent="width=device-width ; initial-scale=1 ">
<title> 账户登录注册</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/angular.min.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css"> 
</head>
<body>
 <div class="container" style="width:680px;">
	 <div class="jumbotron" style="background:#fff;" >
	 	<div class="panel ">
	 		<h3 class="panel-heading" style="border-bottom: 1px solid #eee;">
	 			<a href="__APP__/Index/index"> <img src="__PUBLIC__/Image/dl-logo.png"></a>
		 		<p class="pull-right text-muted" style="font-size:16px;">没有账户，
		 			<a href="#mymodal" data-toggle="modal">立即注册</a>
		 		</p>
	 		</h3>
	 		<ul class="nav nav-tabs" >
    			<li class="active"><a href="#member"  data-toggle="tab">普通用户登录</a></li>
   				<li ><a href="#author"  data-toggle="tab">专栏作者登录</a></li>
    		</ul>
	 		<div class="panel-body tab-content">
	 			<!-- 普通用户登录 -->
	 		 	<div  class="tab-pane active" id="member">
	 				 <form action="__APP__/Login/doLogin" method="post" class="form-horizontal" >
						<div class="form-group form-group-lg ">
					      <div class="input-group ">
					        <span class="input-group-addon">用户名：</span>
					        <input type="text" class="form-control " name="name" value=""  placeholder="邮箱 或 用户名 和 手机号">
					      </div>
					      
			  			</div>
						<div class="form-group form-group-lg">
					      <div class="input-group">
					        <span class="input-group-addon">密码：</span>
					        <input type="password" class="form-control" name="member_password" value="" required>
					      </div>
			  			</div>
					
						<div class="form-group form-group-lg">
							<button type="submit" class="btn btn-primary form-control">立即登录</button>
						</div>
					</form>
	  			</div>
	  			<!-- 专栏作者登录 -->
   				<div  class="tab-pane" id="author">  
		   			 <form action="__APP__/AuthorLogin/doLogin" method="post" class="form-horizontal" >
						<div class="form-group form-group-lg ">
					      <div class="input-group ">
					        <span class="input-group-addon">用户名：</span>
					        <input type="text" class="form-control " name="name" value=""  placeholder="邮箱 或 用户名 和 手机号">
					      </div>
					      
			  			</div>
						<div class="form-group form-group-lg">
					      <div class="input-group">
					        <span class="input-group-addon">密码：</span>
					        <input type="password" class="form-control" name="password" value="" ng-model="pwd" required>
					      </div>
			  			</div>
					
						<div class="form-group form-group-lg">
							<button type="submit" class="btn btn-primary form-control">立即登录</button>
						</div>
					</form>
				</div>		
	 		</div>
	 	</div>
	 </div>
<!--普通用户注册  模态框  -->
 	<div class="modal fade" id="mymodal"  data-backdrop="static" role="dialog"  aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document" >
			<div class="content panel">
				<form action="__URL__/memberCheck?doReg='注册'" method="post" class="form-horizontal">
					<div class="modal-header">
						<button class="close" data-dismiss="modal" aria-label="Close">x</button>
							
						   <H2 class="modal-title"  id="myModalLabel">
						 <a href="__APP__/Index/index"> <img src="__PUBLIC__/Image/dl-logo.png"></a>  
						 &nbsp; 用户注册</h2>
					</div>
					<div class="modal-body" style="padding:33px;">
						<div class="form-group form-group-lg">
						      <div class="input-group ">
						        <span class="input-group-addon">用户名：</span>
						        <input type="text" class="form-control " name="member_name" value="" required>
						      </div>
				  		</div>			  			
						<div class="form-group form-group-lg">
					      <div class="input-group">
					        <span class="input-group-addon">密码：</span>
					        <input type="password" class="form-control" name="member_password" value="" required>
					      </div>
			  			</div>
			  			<div class="form-group form-group-lg">
					      <div class="input-group">
					        <span class="input-group-addon">确认密码：</span>
					        <input type="password" class="form-control" name="repassword" value="" required>
					      </div>
			  			</div>
			  			<div class="form-group form-group-lg">
					      <div class="input-group">
					        <span class="input-group-addon">email@：</span>
					        <input type="input" class="form-control" name="email" value=""  placeholder="请务必填写，便于找回密码" required> 
					      </div>
			  			</div>
						<div class="form-group form-group-lg">
					      <div class="input-group">
					        <span class="input-group-addon">验证码：</span>
					        <input type="text" class="form-control" name="fcode">
					        <span class="input-group-addon" style="padding:0px;border:0px;">
					        	<img src="__APP__/Common/verify" onclick="this.src=this.src+'?c='+Math.random()" height="45"/>
					        </span>
					      </div>
			  			</div>
			  			 <div class="form-group form-group-lg">
							<div class="col-sm-6">
								<button type="submit" class="btn btn-primary  form-control">提交</button>
							</div>
							<div class="col-sm-6">
								<button type="reset" class="btn btn-danger  form-control">重置</button>
							</div>
						</div> 	
					</div>
				</form>	
			</div>
		</div> 
	 </div>
</div>

</body>
</html>