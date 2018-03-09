<?php if (!defined('THINK_PATH')) exit();?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>index</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://cdn.bootcss.com/holder/2.9.4/holder.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/homeCommon.css">
</head>
<style>
.radius{border-radius:18px;}
</style>
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
					<li><a class="sub_a" href="__APP__/Index/index">首页</a></li>
					<li><a class="sub_a" href="javascript:;">专栏</a></li>
					<li><a class="sub_a" href="">专题</a></li>
					<li><a class="sub_a" href="">公开课</a></li>
				</ul>
				<button class="btn btn-info radius" data-toggle="modal" data-backdrop="static" data-target="#columnist" style="margin:7px 0 0 8px; ">
					<em class="glyphicon glyphicon-pencil"></em>
					申请专栏作者
				</button>
				<ul class="nav navbar-nav navbar-right" >
					<li><a class="glyphicon glyphicon-envelope" href=""></a></li>
						<?php if($_SESSION['id'] or $_SESSION[cid]): ?><li class="dropdown">
							  <a data-toggle="dropdown" style="margin:4px 15px 0 0; padding:0;"
						 data-toggle="tooltip"  title="请点击">
							   <img class="img-circle" src="__PUBLIC__/Uploads/<?php echo ($_SESSION['pic']); ?>" data-src="holder.js/40x40" width="40" height="40">
							  </a>
							  <ul class="dropdown-menu" >
								  <?php if($_SESSION[cid]): ?><li><a href="__APP__/Personal/index"class="glyphicon glyphicon-user">  个人中心</a></li>
								  <?php elseif($_SESSION[id]): ?>
								  	<li><a href="__APP__/Site/index"class="glyphicon glyphicon-user">  个人中心</a></li><?php endif; ?>
								<li><a href="__APP__/Login/logout" onClick="if(!confirm('是否确认退出？'))return false;"  class="glyphicon glyphicon-off"> 退出</a></li>
							  </ul>
							</li>
						<?php else: ?>
							<li style="margin-right:10px;">
								<a class="glyphicon glyphicon-user" href="__APP__/Login/login"
								data-toggle="tooltip" data-placement="top" title="请点击登录">
								</a>
							</li><?php endif; ?>	
					
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
					 <?php if(is_array($type)): $i = 0; $__LIST__ = $type;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if($nameId == $vo.category_id): ?><li class="border-bottom">
								<a href="__APP__/Category/index?id=<?php echo ($vo["category_id"]); ?>" id="<?php echo ($vo["category_id"]); ?>"><?php echo ($vo["category_name"]); ?></a>
							</li>
					 	<?php else: ?>
						 	<li>
								<a href="__APP__/Category/index?id=<?php echo ($vo["category_id"]); ?>" id="<?php echo ($vo["category_id"]); ?>"><?php echo ($vo["category_name"]); ?></a>
							</li><?php endif; endforeach; endif; else: echo "" ;endif; ?> 
				</ul>
				
			</div>
		</div>
	</nav>
	<!--头部 与 类型 结束-->
 
<!--申请专栏作者 模态框 -->
	<div class="modal fade" id="columnist"  role="dialog" >
		<div class="modal-dialog" role="document">
			<form action="__APP__/AuthorLogin/doReg?doReg='注册'" method="post" class="form-horizontal">
			<div class="modal-content">
				<div class="modal-header">
					<button class="close" data-dismiss="modal">x</button>
					<h4 class="modal-title"><stong>请填写申请人资料</stong></h4>
				</div>
				<div class="modal-body">
						<div class="form-group">
					        <label class="col-md-2 control-label">姓名:</label>
					        <div class="col-md-8">
					      	 <input type="text" class="form-control" name="author_name" value="" required>
					    	</div>
			  			</div>
						<div class="form-group">
					        <label class="col-md-2 control-label">密码:</label>
					        <div class="col-md-8">
					      	 <input type="password" class="form-control" name="password" value="" required>
					    	</div>
			  			</div>
			  			<div class="form-group">
					        <label class="col-md-2 control-label">确认密码:</label>
					        <div class="col-md-8">
					      	 <input type="password" class="form-control" name="repassword" value="" required>
					    	</div>
			  			</div>
			  			<div class="form-group">
					       <label class="col-md-2 control-label">email@:</label>
					       <div class="col-md-8">
					       	 <input type="text" class="form-control" name="email" value="" placeholder="请务必填写，便于找回密码" required>
					      </div>
			  			</div>
			  			<div class="form-group">
					       <label class="col-md-2 control-label">手机号:</label>
					       <div class="col-md-8">
					       	 <input type="text" class="form-control" name="phone" value="" maxlength=11>
					      </div>
			  			</div>
			  			<div class="form-group">
					       <label class="col-md-2 control-label">微信号:</label>
					       <div class="col-md-8">
					       	 <input type="text" class="form-control" name="wechat" value="">
					      </div>
			  			</div>
			  			<div class="form-group">
					       <label class="col-md-2 control-label">个人简介:</label>
					       <div class="col-md-8">
					       	 <textarea class="form-control" name="depict"   style="resize:none;">
					       	 
					       	 </textarea>
					      </div>
			  			</div>
						<div class="form-group">
					       <label class="col-md-2 control-label">验证码:</label>
					       <div class="input-group col-md-8" style="padding:0 9px;">
						        <input type="text" class="form-control" name="fcode">
						        <span class="input-group-addon" style="padding:0px;border:0px;">
						        	<img src="__APP__/Common/verify" onclick="this.src=this.src+'?c='+Math.random()" height="34"/>
						        </span>
					      </div>
			  			</div>
				</div>
				<div class="modal-footer">
					<em class="col-md-2"></em>
					<button type="submit" class="btn btn-success col-md-4 radius">提交</button>
					<button type="reset" class="btn btn-danger col-md-4  radius">重置</button>
				</div>
			</div>
			</form>
		</div>
	</div> 
</body>
</html>	


	
	<div class="container  left-main">
		<div class="row">
			<div class="col-xs-8 col-md-8">
				<div class="row car">
					<div id="mycarousel" class="carousel slide col-xs-8 col-md-8" data-ride="carousel">
						<ol class="carousel-indicators">
							<li data-target="#mycarousel" data-slide-to="0" class="active"></li>
							<li data-target="#mycarousel" data-slide-to="1"></li>
							<li data-target="#mycarousel" data-slide-to="2"></li>
						</ol>
						<div class="carousel-inner">
							<?php if(is_array($pic)): $i = 0; $__LIST__ = array_slice($pic,0,3,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if($key == 0): ?><div class="item active"><a href="__APP__/News/index?type=<?php echo ($vo["category_name"]); ?>&nid=<?php echo ($vo["id"]); ?>" target="_blank">
										<img src="__PUBLIC__/Uploads/<?php echo ($vo["file_name"]); ?>" style="width:510px; height:322px;">
										<div class="carousel-caption"><?php echo ($vo["headline"]); ?></div>
									</a></div>
								<?php else: ?>
									<div class="item "><a href="__APP__/News/index?type=<?php echo ($vo["category_name"]); ?>&nid=<?php echo ($vo["id"]); ?>" target="_blank">
										<img src="__PUBLIC__/Uploads/<?php echo ($vo["file_name"]); ?>" style="width:510px; height:322px;" >
										<div class="carousel-caption"><?php echo ($vo["headline"]); ?></div>
									</a></div><?php endif; endforeach; endif; else: echo "" ;endif; ?>
						<!-- 	<div class="item active">
								<a href="#" target="_blank"><img src="__PUBLIC__/Uploads/20170712/583c0257dd26d.jpg" >
								<div class="carousel-caption">33应急指南|petya 勒索病毒来袭，小白用户看这里</div>
								</a>
							</div>
							<div class="item">
								<a href="#" target="_blank"><img src="__PUBLIC__/Uploads/20170712/583c0257dd26d.jpg" >
								<div class="carousel-caption">22应急指南|petya 勒索病毒来袭，小白用户看这里</div>
								</a>
							</div> -->
							
							<a class="left carousel-control" href="#mycarousel" data-slide="prev">
								<span class="glyphicon glyphicon-chevron-left"></span>
							</a>
							<a class="right carousel-control" href="#mycarousel" data-slide="next">
								<span class="glyphicon glyphicon-chevron-right"></span>
							</a>
						</div>
					</div>
					<div class="col-xs-4 col-md-4">
						<?php if(is_array($pic)): $i = 0; $__LIST__ = array_slice($pic,3,null,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><a href="__APP__/News/index?type=<?php echo ($vo["category_name"]); ?>&nid=<?php echo ($vo["id"]); ?>" class="thumbnail">
						      	<img src="__PUBLIC__/Uploads/<?php echo ($vo["file_name"]); ?>" class="img-responsive"  />
						      <div class="shadow">   	
						     	 <span class="center-block"><?php echo ($vo["headline"]); ?></span>
						      </div>
						    </a>
						    <div class="spacing"></div><?php endforeach; endif; else: echo "" ;endif; ?>
					 <!--     <a href="#" class="thumbnail">
					      	<img src="__PUBLIC__/Image/yc_lessons.jpg" class="img-responsive" />
					      	<div class="shadow">
					      	<span class="center-block">探秘 | 比朝鲜核武器更炸裂更神秘的，是朝鲜黑客部队</span>
					      	</div>
					    </a> -->
				   </div>
				</div>

				<!-- 图片展示结束 -->
				<!-- 本类 文章加载 -->
				<div class="wrapper row">
					<h3><strong><?php echo ($dis[0]["category_name"]); ?></strong></h3>
					<ul class="list-group">
					<?php if(is_array($dis)): $i = 0; $__LIST__ = $dis;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li class="list-group-item">
							<a class="img" href="__APP__/News/index?type=<?php echo ($vo["category_name"]); ?>&nid=<?php echo ($vo["id"]); ?>">
								<img src="__PUBLIC__/Uploads/<?php echo ($vo["file_name"]); ?>" width="240" style="height:145px;" class="img-responsive"/>
								<span ><?php echo ($vo["category_name"]); ?></span>
							</a>
							<div class="media-body media-right">
								<a href="__APP__/News/index?type=<?php echo ($vo["category_name"]); ?>&nid=<?php echo ($vo["id"]); ?>">
									<stong><font size="4px"><?php echo ($vo["headline"]); ?></font></stong>
								</a>
									<p><?php echo ($vo["subheading"]); ?></p>
								<div>
									<a href="">
									<img class="img-circle"  src="__PUBLIC__/Uploads/<?php echo ($vo["portrait"]); ?>" width="25" height="25">
									&nbsp; 作者：<?php echo ($vo["author_name"]); ?>
									</a>
									 &nbsp;<span class="">发布时间：<?php echo ($vo["time"]); ?></span>
									<span class="pull-right glyphicon glyphicon-tag">
										<a href="">关联标签</a>
									</span>
								</div>
							</div>
						</li><?php endforeach; endif; else: echo "" ;endif; ?>	
					</ul>
					<ul class="pagination page">
						<?php echo ($page); ?>
					</ul>
				</div>
			</div>
			
			<div class="col-xs-3 col-md-4 pull-right" style="width:28%;">
				<div>
				
						
				</div>
				
			</div>
		</div>
	</div>