<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1" >
<title>Insert title here</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/admin.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
</head>
<style>
.list-group{}
</style>
<body>
<div class="container-fulid" id="left">

<!--  	<ul class="nav nav-pills nav-stacked nav-justified">
 		<li class="active"><a href="javascript:;">资讯管理</a></li>
 		<li><a href="__APP__/News/select" target="right">查看资讯</a></li>
		<li><a href="__APP__/News/add" target="right">添加资讯</a></li>
		<li><a href="__APP__/Category/read" target="right">类型操作</a></li>	
 	</ul>
 	<ul class="nav nav-pills nav-stacked nav-justified">
 		<li class="active"><a href="javascript:;">用户管理</a></li>
 		<li><a href="__APP__/News/select" target="right">用户信息</a></li>
		<li><a href="__APP__/News/add" target="right">用户操作</a></li>
		<li><a href="__APP__/Category/read" target="right">用户资料</a></li>	
 	</ul>
 	 -->
 	 <div class="list-group text-center">
 		<a class="list-group-item active">用户管理</a>
 		<a class="list-group-item" href="__APP__/User/admin" target="right">管理员</a>
		<a class="list-group-item" href="__APP__/User/member" target="right">用户信息</a>
		<a class="list-group-item" href="__APP__/User/author" target="right">作者信息</a>
 	</div>
 	<div class="list-group text-center">
 		<a class="list-group-item active">资讯管理</a>
 		<a class="list-group-item" href="__APP__/News/select" target="right">查看资讯</a>
		<a class="list-group-item" href="__APP__/News/add" target="right">添加资讯</a>
		<a class="list-group-item" href="__APP__/Category/read" target="right">类型操作</a>
 	</div>
 	<div class="list-group text-center">
 		<a class="list-group-item active">幻灯片展示</a>
 		<a class="list-group-item" href="__APP__/PicShow/indexShow" target="right">首页展示</a>
		<a class="list-group-item" href="__APP__/PicShow/categoryShow" target="right">类型展示</a>
		
 	</div>
 	<div class="list-group text-center">
 		<a class="list-group-item active">文章评论</a>
 		<a class="list-group-item" href="__APP__/News/select" target="right">用户信息</a>
		<a class="list-group-item" href="__APP__/News/add" target="right">用户操作</a>
		<a class="list-group-item" href="__APP__/Category/read" target="right">用户资料</a>
 	</div>
 	
</div>

</body>
</html>