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
	
		
		<div class="col-xs-8 col-sm-10 panel" > 
			
			<div class="panel-body">
			<form action="" method="post">
				<table class="table table-hover">
				<caption>
					<font size="5px">我的文章</font>					
					<div class="pull-right">
						<a data-toggle="modal" data-target="#addNews" data-backdrop="static" class="btn btn-primary"><em class="glyphicon glyphicon-plus"></em> 添加类型</a>
						<a href="javascript:;" class="btn btn-warning">草稿<em class="badge"><?php echo ($a); ?></em></a>
						<a href="javascript:;" class="btn btn-info">待审核<em class="badge"><?php echo ($b); ?></em></a>
						<a href="javascript:;" class="btn btn-success">已审核<em class="badge"><?php echo ($c); ?></em></a>
						<a href="javascript:;" class="btn btn-danger">未通过<em class="badge"><?php echo ($d); ?></em></a>
					</div>	
				</caption>
					<tr>
						<th>文章标题</th>
						<th>发表日期</th>
						<th>状态</th>
						<th>操作</th>
					</tr>
					<?php if(is_array($personalNews)): $i = 0; $__LIST__ = $personalNews;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
						<td><?php echo ($vo["headline"]); ?></td>
						<td><?php echo ($vo["time"]); ?></td>
					<?php if($vo["news_status"] == '待审核'): ?><td class="text-info"><?php echo ($vo["news_status"]); ?></td>
					<?php elseif($vo["news_status"] == '已审核'): ?>
						<td class="text-success"><?php echo ($vo["news_status"]); ?></td>
					<?php elseif($vo["news_status"] == '未通过'): ?>
						<td class="text-danger"><?php echo ($vo["news_status"]); ?></td>
					<?php else: ?>
						<td><?php echo ($vo["news_status"]); ?></td><?php endif; ?>
						<td>
							<a href="__URL__/del?id=<?php echo ($vo["id"]); ?>" class="btn btn-danger btn-xs">移除</a>
						</td>
					</tr><?php endforeach; endif; else: echo "" ;endif; ?>
				</table>
			</form>
			<ul class="pagination">
				<?php echo ($page); ?>
			</ul>
			</div>
		</div>
</div>

<!-- 添加文章 -->
<div class=" container">
	<div class="modal fade" id="addNews">
		<div class="modal-dialog" style="width:950px;">
			<div class="modal-content">
				<div class="modal-header">
					<button class="close" data-dismiss="modal">X</button>	
	 				添加资讯
				</div>
				<form action="__URL__/createNews" method="post" enctype="multipart/form-data" class="form-horizontal">
					<div class="modal-body">
						<div class="form-group">
							<label class="col-sm-2 control-label"><span class="c-red">*</span>文章标题：</label>
							<div class="col-sm-9"><input class="form-control" type="text" name="headline" value=""/></div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">副标题：</label>
							<div class="col-sm-9"><input class="form-control" type="text" name="subheading" value=""/></div>
						</div>
						<div class="form-group">
						 	<label class="col-sm-2 control-label"><span class="c-red">*</span>文章类型：</label>
							<div class="col-sm-9">
								<select class="form-control" name="category_id">
									<option>请选择</option>
									<?php if(is_array($type)): $i = 0; $__LIST__ = $type;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><option  value="<?php echo ($vo["category_id"]); ?>"><?php echo ($vo["category_name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
								</select>
							</div>
						</div>
						<div class="form-group ">
							<label class="control-label col-sm-2"><span class="c-red">*</span>文章内容：</label>
								 <!-- 加载编辑器的容器 -->
							<div class="col-sm-9  ">
								<script id="container" name="contents" type="text/plain" > </script>
							</div>	
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">缩略图：</label>
							<div class="col-sm-4" >				
								<input type="file"  name="file_name[0]"  value="" id="fileid">
								<br/><font color="red">建议上传尺寸480*290</font>
								<!-- <input type="file"  name="file_name[1]"   id="fileid1">
								<br/><font color="red">建议上传尺寸390*390</font> -->
							</div>
							<div class="col-sm-6" id="imgid">
								<img src="" class="img-responsive">
								<img src="" class="img-responsive">
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">发表状态：</label>
							<div class="col-sm-9 ">
								<select class="form-control" name="news_status">									
									<option value="未审核">存入草稿</option>
									<option value="待审核">申请审核</option>
								</select>
							</div>
						</div>
						<input type="hidden" name="cid" value="<?php echo ($_SESSION['cid']); ?>"/>
				</div>
				<div class="modal-footer">
					<button class="btn btn-success" type="submit">确认发布</button>
					<button class="btn btn-danger" data-dismiss="modal">取消</button>
				</div>	
				</form> 
			</div>
		</div>
	</div>
</div>
<!-- 配置文件 -->
   <script type="text/javascript" src="__PUBLIC__/Js/ueditor/ueditor.config.js"></script>
   <!-- 编辑器源码文件 -->
   <script type="text/javascript" src="__PUBLIC__/Js/ueditor/ueditor.all.js"></script>
   <!-- 实例化编辑器 -->
   <script type="text/javascript">
       var ue = UE.getEditor('container');
   </script>
   <!-- 上传图片预览 -->
   <script> 
   document.getElementById('fileid').onchange = function() {
	    var imgFile = this.files[0];
	    var fr = new FileReader();
	    fr.onload = function() {
	        document.getElementById('imgid').getElementsByTagName('img')[0].src = fr.result;
	    };
	    fr.readAsDataURL(imgFile);
	}; 
	 document.getElementById('fileid1').onchange = function() {
		    var imgFile = this.files[0];
		    var fr = new FileReader();
		    fr.onload = function() {
		        document.getElementById('imgid').getElementsByTagName('img')[1].src = fr.result;
		    };
		    fr.readAsDataURL(imgFile);
		};
   </script>