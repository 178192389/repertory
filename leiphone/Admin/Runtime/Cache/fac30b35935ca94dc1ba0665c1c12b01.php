<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1" >
<title>读取类型</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/admin.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
</head>

<body>
	<div class="container">
		<!-- <form action="__URL__/add" method="post"> -->
			<table class="table table-hover table-striped table-responsvie">
			 	<caption>
					<a class="btn btn-primary" data-toggle="modal" data-target="#mymodal">添加类型</a>
 				</caption>
				<tr>
					<th><input type="checkbox" value="" onclick="checkedAll()"/></th>
					<th>序号</th>
					<th>文章类型</th>
					<th>文章总数</th>
					<th>是否显示</th>
					<th>操作</th>
				</tr>
				<?php if(is_array($data)): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
					<td><input type="checkbox" name="checked[]" value="<?php echo ($vo["id"]); ?>"/></td>
						<td><?php echo ($vo["category_id"]); ?></td>
						<td><?php echo ($vo["category_name"]); ?></td>
						<td><?php echo ($vo[""]); ?></td>
						<td>
							<?php echo ($vo["type_status"]); ?>							
						</td>
						<td>
 							<a  href="__URL__/del?id=<?php echo ($vo["category_id"]); ?>">删除</a>
 						</td>
					</tr><?php endforeach; endif; else: echo "" ;endif; ?>
			</table>
	<!-- 	</form> -->
	</div>
	
	<div id="mymodal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
			<form action="__URL__/create" method="post" class="form-horizontal">
				<div class="modal-header">
					<span class="close" data-dismiss="modal">X</span>
					<h3>新增文章类型</h3>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<label class="col-sm-3 control-label">文章类型：</label>
						<div class="col-sm-9">
							<input class="form-control" type="text" name="category_name" value=""/>	
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-3 control-label">文章类型是否显示：</label>
						<div class="col-sm-9">
							<select class="form-control" name="type_status">
								<option value="1">确认显示</option>
								<option value="0">暂时隐藏</option>
							</select>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-success" type="submit" name="sub">确认添加</button>
					<button class="btn btn-default" data-dismiss="modal">取消</button>
				</div>
			</form>
			</div>
		</div>
	</div> 
</body>
</html>