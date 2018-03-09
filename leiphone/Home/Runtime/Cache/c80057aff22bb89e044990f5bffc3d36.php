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
			   	<li><a href="__APP__/Site/index"class="glyphicon glyphicon-user">  个人中心</a></li>
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
			<a class="list-group-item " href="#">我的文章</a>
			<a class="list-group-item" href="#">我的评论</a>
			<a class="list-group-item " href="#">我的收藏</a>
			</div> 
		</aside>
	
		<style>
		.table tbody tr td{border-top:0;}
		</style>	
	<div class="col-xs-8 col-md-10" >
		<div class="panel">	
			<div class="panel-heading ">
				<h3>请填写您的基础资料</h3>
			</div>	
			<div class="panel-body">
				<form action="__URL__/update" method="post" style="width:60%; ">
					<table class="table table-responsive text-right" >
					 <tr>
		                <td>用户名:</td>
		                <td>
		                	<input type="text" value="<?php echo ($info["member_name"]); ?>" class="form-control" name="member_name"/>
		                </td>
		             </tr>
		             <tr class="text-center">  
			           	  <td></td>
			              <?php if($info["member_gender"] == 1): ?><td  class="radio-inline ">
				                	<input type="radio" name="member_gender" value="1" checked/>男
				              </td>
				               <td  class="radio-inline ">
				                	<input type="radio"  name="member_gender" value="0"/>女
				                </td>
			              <?php else: ?>
				               <td  class="radio-inline ">
				                	<input type="radio" name="member_gender" value="1"/>男
				              </td>
				               <td  class="radio-inline ">
				                	<input type="radio"  name="member_gender" value="0" checked/>女
				                </td><?php endif; ?>
		              </tr>
	                <tr>
	               		<td>电话:</td>
	                	<td><input type="text" name="phone" value="<?php echo ($info["phone"]); ?>" class="form-control"  maxlength="11"/></td>
	                </tr>
	                <tr>
	              	  	<td>邮箱:</td>
	              		<td>
	              			<input type="text" name="email"  value="<?php echo ($_SESSION['email']); ?>" class="form-control" placeholder="必填，便于找回密码" readonly/>
	              		</td>
	                </tr>
	        	    <tr>
	                	<td>微信号:</td>
	               		<td>
	               			<input type="text" class="form-control" name="wechat" value="<?php echo ($info["wechat"]); ?>"/>
	               		</td>
	                </tr> 
	                <tr>
		                <td>简介:</td>
		                <td>
		                	<textarea class="form-control"   style="resize:none;"  name="depict" ><?php echo ($info["depict"]); ?></textarea>
		                </td>
	           		</tr>
	             	<tr class="text-center">
	             		<td></td>
	             		<td>
	             			<button type="submit" class="btn btn-primary" name="sub">保存修改</button>
	             			<button type="reset" class="btn btn-danger">重置</button>
	             		</td>
	             	</tr>
		    	</table>      
        	</form>
    	</div>
	</div>
</div>