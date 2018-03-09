<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>用户管理</title>
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
		//alert(str); //die;
		return $(this).attr("href","__URL__/memberDel?id="+str); 
	});	
	
})
</script>
<body>
	<ol class="breadcrumb" id="crunb">
 			<li><a  class="glyphicon  glyphicon-home" href="__APP__/Index/right"></a></li>
 			<li><a href="javascript:history.back();">上一界面</a></li>
 			<li class="active">用户信息</li>
 	</ol>
 	<div class="container-fluid  table-responsive">
 		<table class="table-bordered  table-hover">
 			<caption>
 				<a class="btn btn-danger col-md-2" id="dels" href="#"><em class="glyphicon glyphicon-trash"></em> 批量删除</a>
 			<form action="__URL__/member" method="post">
 				<div class="input-group col-md-4 col-md-push-1">
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
 				<th>用户名</th>
 				<th>邮箱</th>
 				<th>手机</th>
 				<th>微信号</th>
 				<th>性别</th>
 				<th>文章总数</th>
 				<th>评论总数</th>
 				<th>创建时间</th>
 				<th>用户状态</th>
 				<th>最近上线时间</th>
 				<th>用户操作</th>
 			</tr>
 			<?php if(is_array($member)): $i = 0; $__LIST__ = $member;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr class="danger">
 					<td> 
 						<input type="checkbox"  name="list[]" value="<?php echo ($vo["uid"]); ?>"/>
 					</td>
 					<td><?php echo ($vo["member_name"]); ?></td>
 					<td><?php echo ($vo["email"]); ?></td>
 					<td><?php echo ($vo["phone"]); ?></td>
 					<td><?php echo ($vo["wechat"]); ?></td>
 				<?php if($vo["member_gender"] == 1): ?><td class="text-primary">男</td>
 				<?php else: ?>
 					<td class="text-warning">女</td><?php endif; ?>
 				
 					<td><?php echo ($vo[""]); ?></td>
 					<td><?php echo ($vo[""]); ?></td>
 					<td><?php echo ($vo["create_time"]); ?></td>
 				<?php if($vo["enabled"] == 1): ?><td class="text-success">已激活</td>
 				<?php else: ?>
 					<td class="text-danger">未激活</td><?php endif; ?>
 					<td><?php echo ($vo["update_time"]); ?></td>
 					<td>
 						<a href="__URL__/memberDel?id=<?php echo ($vo["uid"]); ?>">移除</a></td>
 					</td>
 				</tr><?php endforeach; endif; else: echo "" ;endif; ?>
 		</table>
 	</div>
</body>
</html>