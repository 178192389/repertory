<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>index</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/angular.min.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/homeCommon.css">
</head>
<body>
	<!-- 头部导航 -->
	<nav class="navbar navbar-default">
		<Div class="container">
			<div class="navbar-header header_top">
				<button class="navbar-toggle" data-toggle="collapse" data-target="#myheader">
					<span class=" glyphicon glyphicon-list"></span>
				</button>
					<a href="__APP__/Index/index">
						<img src="__PUBLIC__/Image/headerlogo.png"/>
						<span class="">读懂智能&未来</span>
					</a>
			</div>
			 <div class="collapse navbar-collapse" id="myheader">
				<ul class="nav navbar-nav" >
					<li><a class="sub_a" href="__APP__/Index//index">首页</a></li>
					<li><a class="sub_a" href="javascript:;">专栏</a></li>
					<li><a class="sub_a" href="">专题</a></li>
					<li><a class="sub_a" href="">公开课</a></li>
					<li><a href="#" ><em class="glyphicon glyphicon-pencil"></em>申请专栏作者</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right" >
					<li><a class="glyphicon glyphicon-envelope" href=""></a></li>
					<li style="margin-right:10px;"><a class="glyphicon glyphicon-user" href=""></a></li>
					<li style="margin-top:8px;">
						<div class="input-group" >
							<input type="text" class="form-control search" placeholder="搜索" value=""/>
							<span class="input-group-btn">
								<a class="btn btn-primary  search" type="button" href="">GO</a>
							</span>
						</div>
					</li>
				</ul>
			</div>
		</Div>
	</nav>
		<!-- 文章类型 -->
	<nav class="navbar navbar-default">
		<div class="container">
			<div class="navbar-header">
				<button class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">
					<span class=" glyphicon glyphicon-list"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" id="mynavbar">
				<ul class="nav navbar-nav">	
					 <?php if(is_array($type)): $i = 0; $__LIST__ = $type;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li><a href="__APP__/Category/index?id=<?php echo ($vo["category_id"]); ?>" id="<?php echo ($vo["category_id"]); ?>"><?php echo ($vo["category_name"]); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?> 
				</ul>
				
			</div>
		</div>
	</nav>
	<!--头部 与 类型 结束-->
</body>
</html>