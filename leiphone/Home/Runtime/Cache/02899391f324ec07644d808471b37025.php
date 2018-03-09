<?php if (!defined('THINK_PATH')) exit();?>	<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width; initial-scale=1">
<title>个人中心</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://cdn.bootcss.com/holder/2.9.4/holder.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css"> 
</head>
<style>
.container-top{padding-top:60px;}
.padding-top{padding:20px 0; min-height:360px;}
a:hover{text-decoration:none;}
</style>
<body style="background:#f8f8f8;">
<nav class="navbar btn-primary">
	<div class="container">
		<ul class="nav nav-pills ">
			<li><a href="__APP__/Index/index"><img src="__PUBLIC__/Image/headerlogo.png""></a></li>
			<li class="dropdown navbar-right">
			  <a data-toggle="dropdown"
				 data-toggle="tooltip"  title="请点击">
			   	<img class="img-circle" src="__PUBLIC__/Uploads/<?php echo ($_SESSION['pic']); ?>"  data-src="holder.js/40x40" width="40" height="40">
			  </a>
			  <ul class="dropdown-menu" >
			   	<li><a href="__APP__/Personal/index"class="glyphicon glyphicon-user">  个人中心</a></li>
				<li><a href="__APP__/Login/logout" onClick="if(!confirm('是否确认退出？'))return false;" class="glyphicon glyphicon-off"> 退出</a></li>
			  </ul>
			</li>	
		</ul>
	</div>
</nav>

</body>
</html>

	<div class="container container-top">
		
		<aside class="col-sm-2 col-xs-3 col-md-2 ">
			 <div class="list-group text-center">
				<a class="list-group-item active" href="javascript:">账户设置</a>
				<a class="list-group-item" href="__URL__/info" >基本资料</a>
				<a class="list-group-item" href="__URL__/portrait">修改头像</a>
				<a class="list-group-item" href="__URL__/security">安全中心</a>
				<a class="list-group-item" href="#">收货地址</a>
			</div>
			
			<div class="list-group text-center">
			<a class="list-group-item active" href="#">我的动态</a>
			<a class="list-group-item " href="__URL__/article">我的文章</a>
			<a class="list-group-item" href="__URL__/security">我的评论</a>
			<a class="list-group-item " href="#">我的收藏</a>
			</div> 
		</aside>
	
		
		<div class="col-xs-8 col-sm-10 panel padding-top" >
			<div class="panel-body">
			<form action="__URL__/modifyPwd" method="post" class="form-horizontal center-block" style="width:60%;">
					<h4>密码修改成功后，您将需要重新登录 </h4>
				<div class="form-group form-group-lg">
					<label class="">原始密码：</label>
					<input class="form-control" type="password" name="pwd" value=""/>
				</div>
				<div class="form-group form-group-lg">
					<label class="">修改密码：</label>
					<input class="form-control" type="password" name="password" value=""/>
				</div>
				<div class="form-group form-group-lg">
					<label class="">确认密码：</label>
					<input class="form-control" type="password" name="repassword" value=""/>
				</div>
				
					<button type="submit" class="btn btn-primary btn-lg col-sm-5">保存修改</button>
	           
			</form>
			</div>	
		</div> 
	</div>