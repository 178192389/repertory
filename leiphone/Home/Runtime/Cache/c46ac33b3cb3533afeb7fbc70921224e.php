<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=divice-width,initial-scale=1">
<title>fintech</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/common.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/common.css">
</head>
<body>
	<header class="header">
		<div class="header_top">
			<a  class="header_login" href="__APP__/Index/index">
				<img src="__PUBLIC__/Image/headerlogo.png"/>
				<span>读懂智能&未来</span>
			</a>
			<div class="header_menu">
				<ul>
				<li><a class="sub_a" href="__APP__/Index/index">首页</a></li>
				<li><a class="sub_a" href="javascript:;">专栏</a></li>
				<li><a class="sub_a" href="">专题</a></li>
				<li><a class="sub_a" href="">公开课</a></li>
				</ul>
				<a class="contribute" href="#" ><i></i>申请专栏作者</a>
			</div>	
				<div class="header_user">
				<a href=""><img src="__PUBLIC__/Image/noLogin.png"></a>
			</div>
			<div class="header_message">
				<a href=""><i class="ico"></i></a>
			</div>
			<div class="input-group col-lg-2">
				<input type="text" class="form-control search" placeholder="搜索" value=""/>
				<span class="input-group-btn">
					<a class="btn btn-primary  search" type="button" href="">GO</a>
				</span>
			</div>
		</div>	
	</header>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-header">
				<button class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">
					<span class=" glyphicon glyphicon-align-left"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" id="mynavbar">
				<!-- nav-piils nav-justified -->
				<ul class="nav navbar-nav">
					<li><a href="__APP__/Category/sponsor">业界</a></li>
					<li><a href="__APP__/Category/ai">人工智能</a></li>
					<li><a href="__APP__/Category/aiadd">AI+</a></li>
					<li><a href="__APP__/Category/transportation">智能驾驶</a></li>
					<li><a href="__APP__/Category/netsecurity">网络安全</a></li>
					<li><a href="__APP__/Category/arvr">AR/VR</a></li>
					<li><a href="__APP__/Category/robot">机器人</a></li>
					<li><a href="__APP__/Category/iot">物联网</a></li>
					<li><a href="__APP__/Category/aihealth">未来医疗</a></li>
					<li><a href="__APP__/Category/fintech">fintech</a></li>
					<li><a href="__APP__/Category/intelhard">智能硬件</a></li>
					<li><a href="__APP__/Category/zhongqi">开发者</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<!--头部 与 类型 结束-->
	<div class="container  jumbotron ">
		<div class="row">
			<div class="col-xs-9 col-md-8">
				<div class=" container ">
				<div class="row">
					<div id="mycarousel" class="carousel slide col-xs-8 col-md-8" data-ride="carousel">
						<ol class="carousel-indicators">
							<li data-target="#mycarousel" data-slide-to="0" class="active"></li>
							<li data-target="#mycarousel" data-slide-to="1"></li>
							<!-- <li data-target="#mycarousel" data-slide-to="2"></li> -->
						</ol>
						<div class="carousel-inner">
							<div class="item active">
								<a href="#" target="_blank"><img src="__PUBLIC__/Uploads/20170712/583c0257dd26d.jpg" >
								<div class="carousel-caption">33应急指南|petya 勒索病毒来袭，小白用户看这里</div>
								</a>
							</div>
							<div class="item">
								<a href="#" target="_blank"><img src="__PUBLIC__/Uploads/20170712/583c0257dd26d.jpg" >
								<div class="carousel-caption">22应急指南|petya 勒索病毒来袭，小白用户看这里</div>
								</a>
							</div>
							<a class="left carousel-control" href="#mycarousel" data-slide="prev">
								<span class="glyphicon glyphicon-chevron-left"></span>
							</a>
							<a class="right carousel-control" href="#mycarousel" data-slide="next">
								<span class="glyphicon glyphicon-chevron-right"></span>
							</a>
						</div>
					</div>
					<div class="col-xs-4 col-md-4">
					    <a href="#" class="thumbnail">
					      	<img src="__PUBLIC__/Image/yc_lessons.jpg" />
					      <div class="shadow">   	
					     	 <span>探秘 | 比朝鲜核武器更炸裂更神秘的，是朝鲜黑客部队</span>
					      </div>
					    </a>
					    <div class="spacing"></div>
					     <a href="#" class="thumbnail">
					      	<img src="__PUBLIC__/Image/yc_lessons.jpg" />
					      	<div class="shadow">
					      	<span>探秘 | 比朝鲜核武器更炸裂更神秘的，是朝鲜黑客部队</span>
					      	</div>
					    </a>
				   </div>
				</div>
				</div>
				<!-- 图片展示结束 -->
				<!-- 本类 文章加载 -->
				<div class="wrapper">
					 <h3><?php echo ($data[0]["category_name"]); ?></h3>
					<ul class="list-group">
					<?php if(is_array($data)): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li class="list-group-item">
							<a class="img" href="">
								<img src="__PUBLIC__/Uploads/<?php echo ($vo["file_name"]); ?>" width="245" height="145"/>
								<span ><?php echo ($vo["category_name"]); ?></span>
								</a>
							<div class="media-body media-right">
								<h3><?php echo ($vo["headline"]); ?></h3>
								<h4><?php echo ($vo["subheading"]); ?></h4>
								<div>
									<a href="">
									<img class="img-circle"  src="__PUBLIC__/Image/ico_01.jpg" width="25" height="25">
									<?php echo ($vo["author_id"]); ?>
									</a>
									<span class=""><?php echo ($vo["time"]); ?></span>
									<span class="pull-right glyphicon glyphicon-tag">
										<a href="">关联标签</a>
									</span>
								</div>
							</div>
						</li><?php endforeach; endif; else: echo "" ;endif; ?>	
					</ul>
				</div>
			</div>
			
			<div class="col-xs-3 col-md-4 pull-right">
				<a><img src="__PUBLIC__/Uploads/20170712/58bf805adfec2.jpg"></a>
			</div>
		</div>
	</div>
</body>
</html>