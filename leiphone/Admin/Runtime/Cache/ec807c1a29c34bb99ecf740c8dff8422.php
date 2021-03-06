<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="windth=device-width,initial-scale=1" >
<title>添加资讯</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
<script type="text/javascript" src="__PUBLIC__/Js/admin.js"></script>
</head>
<body>

<div class="container">
	<p>
	 	<a href="javascript:history.back();">上一界面</a> &gt;添加资讯
	</p>
	<form action="__URL__/create" method="post" enctype="multipart/form-data" class="form-horizontal">
		<div class="form-group">
			<label class="col-sm-2 control-label"><span class="c-red">*</span>文章标题：</label>
			<div class="col-sm-10"><input class="form-control" type="text" name="headline" value=""/></div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">导语：</label>
			<div class="col-sm-10"><input class="form-control" type="text" name="subheading" value=""/></div>
		</div>
		<div class="form-group">
		 	<label class="col-sm-2 control-label"><span class="c-red">*</span>文章类型：</label>
			<div class="col-sm-10">
				<select class="form-control" name="category_id">
					<option>请选择</option>
					<?php if(is_array($id)): $i = 0; $__LIST__ = $id;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><option  value="<?php echo ($vo["category_id"]); ?>"><?php echo ($vo["category_name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
				</select>
			</div>
		</div>
		<div class="form-group ">
			<label class="control-label col-sm-2"><span class="c-red">*</span>文章内容：</label>
				 <!-- 加载编辑器的容器 -->
			<div class="col-sm-10  ">
				<script id="container" name="contents" type="text/plain" style="height:350px;"> </script>
			</div>	
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">缩略图：</label>
			<div class="col-sm-4">
				<input type="file" id="fileid" name="file_name">
				<br/><font color="red">建议上传尺寸480*390</font>
			</div>
			<div id="imgid" class="col-sm-6">
				<img src="" class="img-responsive">
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">作者名称：</label>
			<div class="col-sm-10">
				<select class="form-control" name="cid">
					<option>请选择</option>
					<?php if(is_array($cid)): $i = 0; $__LIST__ = $cid;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><option  value="<?php echo ($vo["cid"]); ?>"><?php echo ($vo["author_name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
				</select>
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-2 control-label">发表状态：</label>
			<div class="col-sm-10 ">
				<select class="form-control" name="news_status">									
					<option value="未审核">存入草稿</option>
					<option value="待审核">申请审核</option>
				</select>
			</div>
		</div>
		<!-- <div class="form-group">
			<label class="col-sm-2 control-label">关键字：</label>
			<div class="col-sm-10"><input class="form-control" type="text" name="keywords" value=""/></div>
		</div> -->
		<div  class="col-sm-2 col-md-offset-2">
			<button class="btn btn-success" type="submit" name="sub">确认发布</button>
		</div>
	 			 
	</form>
</div>
 	<!-- 配置文件 -->
    <script type="text/javascript" src="__PUBLIC__/Js/ueditor/ueditor.config.js"></script>
    <!-- 编辑器源码文件 -->
    <script type="text/javascript" src="__PUBLIC__/Js/ueditor/ueditor.all.js"></script>
    <!-- 实例化编辑器 -->
    <script type="text/javascript">
        var ue = UE.getEditor('container');
    </script>
    <script>
    document.getElementById('fileid').onchange = function() {
	    var imgFile = this.files[0];
	    var fr = new FileReader();
	    fr.onload = function() {
	        document.getElementById('imgid').getElementsByTagName('img')[0].src = fr.result;
	    };
	    fr.readAsDataURL(imgFile);
	}; 
    
    </script>
</body>
</html>