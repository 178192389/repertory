<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE html>
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
	
	
	<div class="col-xs-9 col-sm-10 col-md-10" >
	
		<ul class="list-group nav-justified ">
			<li class="col-md-3 list-group-item">
					<a href="__URL__/info">
						<img src="__PUBLIC__/Uploads/<?php echo ($data["portrait"]); ?>" class="img-circle"  data-src="holder.js/100x100" width="100" height="100"> 
						&nbsp;&nbsp; <?php echo ($data["author_name"]); ?>
					</a>
			</li>
				<li class="col-md-2 list-group-item">积分：11分 <a href="#" class="glyphicon glyphicon-question-sign"></a></li>
				
				
			<li class="col-md-4 list-group-item">
				<a href="#" data-toggle="modal" data-target="#depict">简介: <em class="glyphicon glyphicon-edit"></em></a><br/>
				 <?php echo ($data["depict"]); ?>
				</li>
			</li>
			<li class="col-md-3 list-group-item">	
					上次登录时间:<br/>	<?php echo ($_SESSION['update_time']); ?>
				 	<h5>上次登录ip:<br/> <?php echo ($_SESSION['client_ip']); ?></h5>
			</li>
		</ul>
	<div class="panel">
		<div class="panel-heading ">
			<ul class="list-inline">
			<li><a href="__URL__/article"><font size="5px">文章发表状态</font></a></li><br/><br/>
			<li><a href="javascript:;" class="btn btn-warning">草稿<em class="badge"><?php echo ($a); ?></em></a></li>
			<li><a href="javascript:;" class="btn btn-info">待审核<em class="badge"><?php echo ($b); ?></em></a></li>
			<li><a href="javascript:;" class="btn btn-success">已审核<em class="badge"><?php echo ($c); ?></em></a></li>
			<li><a href="javascript:;" class="btn btn-danger">未通过<em class="badge"><?php echo ($d); ?></em></a></li>
			</ul>		
			
			
					
		</div>
		<div class="panel-body">
			<ul class="list-group">
				<li class="list-group-item" ><a href="" >评论信息</a></li>
			</ul>
		</div>
		<div class="panel-footer">
		
		</div>
	</div>
</div>
	
<!--简介  -->
	<div class="modal fode" id="depict">
		<div class="modal-dialog modal-sm" role="document" style="margin-top:150px;">
		 	 <div class="modal-content">
			  	 <div class="modal-header">
			  		 <button type="button" class="close" data-dismiss="modal">x</button>
			  		<stong>个人简介</stong>
			  	</div>
			<form action="__URL__/depictSave" method="post">
				<div class="modal-body">
					<textarea class="form-control" name="depict" style="resize:none; height:100px;"></textarea>
					<input type="hidden" name="cid" value="<?php echo ($_SESSION['cid']); ?>"/>
				</div>
				<div class="modal-footer">
	        	  <button type="submit" class="btn btn-primary btn-xs">保存</button>
	        	  <button type="button" class="btn btn-default btn-xs" data-dismiss="modal">取消</button>
				</div>
			</form>
			</div>
		</div>
	</div>