<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>查看资讯</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
<script type="text/javascript" src="__PUBLIC__/Js/admin.js"></script>
</head>
<script>
/* function dels(){
	alert('1');
	var checked=document.getElementsByName('checked[]');
	str="";
	for(i=0;i<checked.length;i++){
		if(checked[i].checked){
			str+=checked[i].value+',';
		}
	}
    str=str.substring(str.length-1,',');
    alert(str);die;
  window.location.href="__URL__/del?id="+str; 
}

}) */
$(function(){
	//获取获取值， GET传输 批量删除
	$('#dels').click(function(){
	 //var a="";
		var val = new Array;
		$(".check :checkbox").each(function(i){ 
			//alert($(this).is(':checked'));
			if($(this).is(':checked')){
				//  a+= $(this).val()+',';
				}
		val[i] =$(this).val();
		});
 		//str = a.substr(0,a.length-1);
		//str = a.substring(0,a.length-1);
		str = val.join(',');
		//alert(str); //die;
		return $(this).attr("href","__URL__/del?id="+str); 
	});	
	
})
</script>

<body>
 		<ol class="breadcrumb" id="crunb">
 		<!-- <a href="javascript:history.back();">上一界面</a> -->
 			<li><a  class="glyphicon  glyphicon-home" href="__APP__/Index/right"></a></li>
 			<li class="active">查看资讯</li>
 		</ol>
 	<div class="container-fluid">
 		<table class="table table-hover table-bordered" >
 			<Caption>
 				<div class="col-sm-9 col-xs-8">
 					<a class="btn btn-danger" id="dels" href="#"><em class="glyphicon glyphicon-trash"></em> 批量删除</a>
 					<!-- <a href="#" class="btn btn-danger " id="dels" onclick="dels()"><em class=" glyphicon glyphicon-trash"></em> 批量删除</a> -->
 					<button class="btn btn-info">文章 <span class="badge"><?php echo ($count); ?></span> 篇</button>
 					<a href="javascript:;" class="btn btn-warning">草稿<em class="badge"><?php echo ($a); ?></em></a>
					<a href="javascript:;" class="btn btn-primary">待审核<em class="badge"><?php echo ($b); ?></em></a>
					<a href="javascript:;" class="btn btn-success">已审核<em class="badge"><?php echo ($c); ?></em></a>
					<a href="javascript:;" class="btn btn-danger">未通过<em class="badge"><?php echo ($d); ?></em></a>
 				</div>
 				<form action="__URL__/select" method="post">
	 				<div class="input-group col-sm-3 col-xs-4 pull-right">
				<!-- 	 <input type="text" value="" id="check" name="val" class="form-control" placeholder="快速查找"> -->
			 		<select class="form-control" name="category_id">
			 			<option>请选择类型查找</option>
						<?php if(is_array($category)): $i = 0; $__LIST__ = $category;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><option  value="<?php echo ($vo["category_id"]); ?>"><?php echo ($vo["category_name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
					</select> 
					    <span class="input-group-btn">	
					 		<input type="submit" class="btn btn-info" value="GO">
					    </span>
					</div>
				</form>
 			</Caption>
 			<tr>
 				<th><input type="checkbox" value="" onclick="checkedAll()"/></th>
 				<th>id</th>
 				<th>标题</th>
 				<th>资讯类型</th>
 		<!-- 		<th>内容</th> -->
 				<th>发布时间</th>
 				<th>文章作者</th>
 				 <th>文章状态</th>
 				<th>操作</th>
 			</tr>
 			<?php if(is_array($name)): $i = 0; $__LIST__ = $name;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr class="check">
 				<td><input type="checkbox" name="checked[]" value="<?php echo ($vo["id"]); ?>"/></td>
 				<td><?php echo ($vo["id"]); ?></td>
 				<td><?php echo ($vo["headline"]); ?></td>
 				<?php if(($vo.category_id) == ($typeName.category_id)): ?><td><?php echo ($typeName["category_name"]); ?></td>
 				<?php else: ?>
 					<td><?php echo ($vo["category_name"]); ?></td><?php endif; ?>
 				<td><?php echo ($vo["time"]); ?></td>
 				
 				<td><?php echo ($vo["author_name"]); ?></td>

				<?php if($vo["news_status"] == '待审核'): ?><td class="text-info"><?php echo ($vo["news_status"]); ?></td>
				<?php elseif($vo["news_status"] == '已审核'): ?>
					<td class="text-success"><?php echo ($vo["news_status"]); ?></td>
				<?php elseif($vo["news_status"] == '未通过'): ?>
					<td class="text-danger"><?php echo ($vo["news_status"]); ?></td>
				<?php else: ?>
					<td><?php echo ($vo["news_status"]); ?></td><?php endif; ?>
 				<td>
 				<a href="__URL__/modify?id=<?php echo ($vo["id"]); ?>">修改</a>|
 				<a href="__URL__/del?id=<?php echo ($vo["id"]); ?>">删除</a></td>
 				</tr><?php endforeach; endif; else: echo "" ;endif; ?>
 		</table>
 		<ul class='pagination page'>
 			<?php echo ($page); ?>
 		</ul>
 	</div>
</body>
</html>