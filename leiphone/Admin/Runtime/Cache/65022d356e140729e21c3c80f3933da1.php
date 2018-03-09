<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/admin.css">
</head>
<style>

</style>
<body>
<!-- <header class="main_head">
<img src="__PUBLIC__/Image/headerlogo.png"/>

</header> -->
<nav class="navbar ">
	<div class="container-fulid">
		<ul class="nav navbar-nav">
		<li><a>欢迎<?php echo ($_SESSION['a_name']); ?>进入后台界面</a></li>
		<li><a href="__APP__/Login/logout" onClick="if(!confirm('是否确认退出？'))return false;" target="_top" >退出</a></li>
		</ul>
	
	</div>
</nav>
</body>
</html>