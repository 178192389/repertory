<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="windth=device-width,initial-scale=1" >
<title>修改资讯</title>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/.css">

<script type="text/javascript" src="__PUBLIC__/Js/admin.js"></script>
</head>
<body>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<div class="container">
	<p>
	 	<a href="javascript:history.back();">上一界面</a> &gt;修改资讯
	</p>
	<form action="__URL__/update" method="post" enctype="multipart/form-data" class="form-horizontal">
		<div class="form-group">
			<label class="col-sm-2 control-label"><span class="c-red">*</span>文章标题：</label>
			<div class="col-sm-10"><input class="form-control" type="text" name="headline" value="<?php echo ($data["headline"]); ?>"/></div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">导语：</label>
			<div class="col-sm-10"><input class="form-control" type="text" name="subheading" value="<?php echo ($data["subheading"]); ?>"/></div>
		</div>
		<div class="form-group">
		 	<label class="col-sm-2 control-label"><span class="c-red">*</span>文章类型：</label>
			<div class="col-sm-10"><select class="form-control" name="category_id">
					
					<?php if( $data["category_id"] == 1): ?><option  value="1" selected>业界</option>
					<?php elseif( $data["category_id"] == 2): ?>
						<option  value="2">人工智能</option>
					<?php elseif( $data["category_id"] == 3): ?>
						<option  value="3">AI+</option>
					<?php elseif( $data["category_id"] == 4): ?>
						<option  value="4">智能驾驶</option>
					<?php elseif( $data["category_id"] == 5): ?>
						<option  value="5">网络安全</option>
					<?php elseif( $data["category_id"] == 6): ?>
						<option  value="6">AR/VR</option>
					<?php elseif( $data["category_id"] == 7): ?>
						<option  value="7">机器人</option>
					<?php elseif( $data["category_id"] == 8): ?>
						<option  value="8">物联网</option>
					<?php elseif( $data["category_id"] == 9): ?>
						<option  value="9">未来医疗</option>
					<?php elseif( $data["category_id"] == 10): ?>
						<option  value="10">fintench</option>
					<?php elseif( $data["category_id"] == 11): ?>
						<option  value="11">智能硬件</option>
					<?php elseif( $data["category_id"] == 12): ?>
						<option  value="12">开发者</option>
					<?php else: ?>
						<option>请选择</option><?php endif; ?>
					<option  value="1">业界</option>
					<option  value="2">人工智能</option>
					<option  value="3">AI+</option>
					<option  value="4">智能驾驶</option>
					<option  value="5">网络安全</option>
					<option  value="6">AR/VR</option>
					<option  value="7">机器人</option>
					<option  value="8">物联网</option>
					<option  value="9">未来医疗</option>
					<option  value="10">fintench</option>
					<option  value="11">智能硬件</option>
					<option  value="12">AI开发</option>
				</select></div>
		</div>
		<div class="form-group ">
			<label class="control-label col-sm-2"><span class="c-red">*</span>文章内容：</label>
				 <!-- 加载编辑器的容器 -->
			<div class="col-sm-10  ">
				<script id="container" name="contents" type="text/plain" style="height:350px;"><?php echo ($data["contents"]); ?> </script>
			</div>	
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">缩略图：</label>
			<div class="col-sm-4">
				<input type="file" id="fileid" name="file_name">
				<br/><font color="red">建议上传尺寸480*390</font>
			</div>
			<div id="imgid" class="col-sm-6">
				<img src="__PUBLIC__/Uploads/<?php echo ($data["file_name"]); ?>" class="img-responsive">
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label">作者名称：</label>
			<div class="col-sm-10">
				<select class="form-control" name="cid">
					<?php if(is_array($cid)): $i = 0; $__LIST__ = $cid;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if($data["cid"] == $vo.cid): ?><option  value="<?php echo ($vo["cid"]); ?>"><?php echo ($vo["author_name"]); ?></option>
						<?php else: ?>
							<option  value="<?php echo ($vo["cid"]); ?>"><?php echo ($vo["author_name"]); ?></option><?php endif; endforeach; endif; else: echo "" ;endif; ?>
				</select>
			</div>
		</div>
		
		<div class="form-group">
			<label class="col-sm-2 control-label">发表状态：</label>
			<div class="col-sm-10 ">
				<select class="form-control" name="news_status">
					<?php if($data["news_status"] == '待审核'): ?><option value="待审核">申请审核</option>
					<?php elseif($data["news_status"] == '已审核'): ?>
						<option value="已经审核">申请审核</option>
					<?php elseif($data["news_status"] == '未通过'): ?>
						<option value="未通过">未通过</option>
					<?php else: ?>
						<option value="未审核">存入草稿</option><?php endif; ?>
					<option value="未审核">存入草稿</option>
					<option value="待审核">待审核</option>
					<option value="已审核">已审核</option>
					<option value="未通过">未通过</option>
				</select>
			</div>
		</div>
		<idv  class="col-sm-2 col-md-offset-2">
			<input type="hidden" name="id" value="<?php echo ($data["id"]); ?>">
			<button class="btn btn-danger" type="submit" name="sub">确认修改</button>
		</idv>
	 			 
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