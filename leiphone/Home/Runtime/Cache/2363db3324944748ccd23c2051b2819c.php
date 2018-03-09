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
	
		
		<div class="col-xs-8 col-sm-10 panel padding-top" >
			<div class="panel-body">
				<table class="nav-justified">
					<tr>
						<td><em class="glyphicon glyphicon-lock"></em></td>
						<td><strong>密码</strong><br/>
							为了保护您账户和资产的安全，请定期修改您的密码
						</td>
						<td>&nbsp;</td>
						<td><a href="__URL__/pwd" target="_self"  class="btn btn-primary">修改密码</a></td>
					</tr>
					<tr>
						<td><em class="glyphicon glyphicon-envelope"></em></td>
						<td><strong>邮箱</strong><br/>
							为了保护您账户和资产的安全，更换邮箱需进行验证
						</td>
					<td><?php echo ($_SESSION['email']); ?></td>
					<td><a data-toggle="modal" data-target="#sendEmail" data-whatever="更改邮箱验证 " 
					data-email="<input type='hidden' name='text' value='email'/>"  class="btn btn-danger">更换邮箱</a></td>
						
					</tr>
					<tr>
						<td><em class="glyphicon glyphicon-phone"></em></td>
						<td><strong>手机</strong><br/>
							为了保护您账户和资产的安全，请绑定您的手机号码
						</td>
						<td>此功能未实现</td>
						<td><a href="" target="_self"  class="btn btn-primary">绑定手机</a></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
	
	
	<!--模态框  PHPMail邮件发送 -->
		
	<div class="modal fade" id="sendEmail" data-backdrop="static" >
  		<div class="modal-dialog modal-sm" role="document" >
 		   <div class="modal-content">
  			 <form action="__APP__/Email/sendMail" method="post" class="form-horizontal">  
  			    <div class="modal-header">	
					<button class="close" data-dismiss="modal">x</button>
					<h4 class="modal-title"></h4>
				 </div>
			     <div class="modal-body" >
			    	<div class="form-group">
           				 <label for="email-name" class="control-label">请输入邮箱地址:</label>
         				 <input type="text" class="form-control" id="email-name" name="address" value="" >
          			</div>
         		</div>
			     <div class="modal-footer">
     				 <button type="submit" class="btn btn-primary">发送验证</button>
    			 </div>
			  </form>
			</div>
		 </div>
	</div>
	<script>
	$('#sendEmail').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) ;
		  var recipient = button.data('whatever'); 
		  var email = button.data('email'); 
		  var modal = $(this);
		  modal.find('.modal-title').text( recipient);
		  modal.find('.modal-footer').append(email);
		})
	</script>