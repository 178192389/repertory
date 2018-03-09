<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1" >
<title>添加文章类型</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/admin.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<form action="__URL__/update" method="post" class="form-horizontal">
		<div class="form-group">
			<label class="col-sm-2 control-label">文章类型：</label>
			<div class="col-sm-10">
				<input class="form-control" type="text" name="category_name" value=""/>	
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">文章类型是否显示：</label>
			<div class="col-sm-10">
				<select class="form-control" name="type_status">
					<option value="1">确认显示</option>
					<option value="0">暂时隐藏</option>
				</select>
			</div>
		</div>
		<div  class="col-sm-2 col-md-offset-2">
			<button class="btn btn-success" type="submit" name="sub">确认添加</button>
		</div>	 
		</form>
	</div>
</body>
</html>