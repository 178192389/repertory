<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>作者信息</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/admin.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
</head>
<script>
$(function(){
	//获取获取值， GET传输 批量删除
	$('#dels').click(function(){
		var a="";
		//var val = new Array;
		$(".danger :checkbox").each(function(i){ 
			//alert($(this).is(':checked'));
			if($(this).is(':checked')){
				  a+= $(this).val()+',';
				}
		//val[i] =$(this).val();
		});
		str = a.substr(0,a.length-1);
		//str = a.substring(0,a.length-1);
		//str = val.join(',');
		alert(str); //die;
		return $(this).attr("href","__URL__/authorDel?id="+str); 
	});	
	
})
</script>
<body>
	<ol class="breadcrumb" id="crunb">
 			<li><a  class="glyphicon  glyphicon-home" href="__APP__/Index/right"></a></li>
 			<li><a href="javascript:history.back();">上一界面</a></li>
 			<li class="active">作者信息</li>
 	</ol>
 	<div class="container-fluid  table-responsive">
 		<table class="table-bordered  table-hover">
 			<caption>
 				<ul class="list-inline col-sm-7">
 				<li><a data-toggle="modal" data-target="#addUser" data-backdrop="static" class="btn btn-primary"><em class="glyphicon glyphicon-plus"></em> 添加类型</a></li>
 				<li><a class="btn btn-danger" id="dels" href="#"><em class="glyphicon glyphicon-trash"></em> 批量删除</a></li>
 				</ul>
 				
 			<form action="__URL__/author" method="post">
 				<div class="input-group pull-right col-sm-5">
				    <input type="text" value="" id="check" name="val" class="form-control" placeholder="快速查找">
				    <span class="input-group-btn">
				 		<input type="submit" class="btn btn-info" value="GO">
				    </span>
				</div>
			</form>
 			</caption>
 			<tr>
 				<th>
 					<span><a href="#"  id="selectAll">全选</a></span>
 					<span><a href="#" id="reverse">反选</a></span>
 					<span><a href="#" id="unSelect">不选</a></span>
 				</th>
 				<th>作者名称</th>
 				<th>邮箱</th>
 				<th>手机</th>
 				<th>微信号</th>
 				<th>文章总数</th>
 				<th>评论总数</th>
 				<th>创建时间</th>
 				<th>用户状态</th>
 				<th>最近上线时间</th>
 				<th>用户操作</th>
 			</tr>
 			<?php if(is_array($member)): $i = 0; $__LIST__ = $member;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr class="danger">
 					<td> 
 						<input type="checkbox"  name="list[]" value="<?php echo ($vo["cid"]); ?>"/>
 					</td>
 					<td><?php echo ($vo["author_name"]); ?></td>
 					<td><?php echo ($vo["email"]); ?></td>
 					<td><?php echo ($vo["phone"]); ?></td>
 					<td><?php echo ($vo["wechat"]); ?></td>		
 					<td><?php echo ($vo[""]); ?></td>
 					<td><?php echo ($vo[""]); ?></td>
 					<td><?php echo ($vo["create_time"]); ?></td>
 				<?php if($vo["enabled"] == '已激活'): ?><td class="text-success">已激活</td>
 				<?php else: ?>
 					<td class="text-danger">未激活</td><?php endif; ?>
 					<td><?php echo ($vo["update_time"]); ?></td>
 					<td>
 						<a href="__URL__/authorDel?id=<?php echo ($vo["cid"]); ?>">移除</a></td>
 					</td>
 				</tr><?php endforeach; endif; else: echo "" ;endif; ?>
 		</table>
 	</div>
</body>
</html>


<!-- addUser -->
	<div class="modal fade" id="addUser"  role="dialog" >
		<div class="modal-dialog" role="document">
			<form action="__URL__/addUser" method="post" class="form-horizontal">
			<div class="modal-content">
				<div class="modal-header">
					<button class="close" data-dismiss="modal">x</button>
					<h4 class="modal-title"><stong>添加栏目作者</stong></h4>
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
					        <label class="col-md-2 control-label">用户状态:</label>
					        <div class="col-md-8">
					      	 	<select name="enabled" class="form-control">
					      	 		<option value="已激活">已激活</option>
					      	 		<option value="未激活">未激活</option>
					      	 	</select>
					    	</div>
			  			</div>
						<div class="form-group">
					       <label class="col-md-2 control-label">头像设置:</label>
					       <div class="col-md-4">
						        <input type="file"  name="portrait" value=""  id="fileid"> 
					      </div>
					      <div class="col-md-6" id="imgid">
					      	<img src="" class="img-responsive">
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