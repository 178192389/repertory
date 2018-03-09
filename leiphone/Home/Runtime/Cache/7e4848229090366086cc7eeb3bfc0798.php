<?php if (!defined('THINK_PATH')) exit();?><!-- <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1"> -->
<title>读懂智能&未来</title>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/index.css">

<!-- <script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/index.css">
<script type="text/javascript" src="__PUBLIC__/Js/common.js"></script>
</head>
<body> -->

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

	
	<div class="main">
		<div class="wrapper">
			<div class="main_left">
				<!--照片展示 开始-->
				<div class="picShow">
					 <div class="slides">
					
						<div id="mycarousel" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
								<li data-target="#mycarousel" data-slide-to="0" class="active"></li>
								<li data-target="#mycarousel" data-slide-to="1" ></li>
							 	<li data-target="#mycarousel" data-slide-to="2"></li> 
							 	<li data-target="#mycarousel" data-slide-to="3"></li> 
							</ol>
							<div class="carousel-inner">
								<?php if(is_array($pic)): $i = 0; $__LIST__ = array_slice($pic,0,4,true);if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if($key == 0): ?><div class="item active">
											<a href="__APP__/News/index?type=<?php echo ($vo["category_name"]); ?>&nid=<?php echo ($vo["id"]); ?>">
												<img src="__PUBLIC__/Uploads/<?php echo ($vo["file_name"]); ?>" style="width:389px;height:390px;">
												<div class="carousel-caption"><?php echo ($vo["headline"]); ?></div>
											</a>
										</div>
									<?php else: ?>
										<div class="item">
											<a href="__APP__/News/index?type=<?php echo ($vo["category_name"]); ?>&nid=<?php echo ($vo["id"]); ?>">
												<img src="__PUBLIC__/Uploads/<?php echo ($vo["file_name"]); ?>"  style="width:389px;height:390px;">
												<div class="carousel-caption"><?php echo ($vo["headline"]); ?></div>
											</a>
										</div><?php endif; endforeach; endif; else: echo "" ;endif; ?>
								<a class="left carousel-control" href="#mycarousel" data-slide="prev">
									<span class="glyphicon glyphicon-chevron-left"></span>
								</a>
								<a class="right carousel-control" href="#mycarousel" data-slide="next">
									<span class="glyphicon glyphicon-chevron-right"></span>
								</a>
							</div>
						
						</div>
					</div> 
					<!-- 轮播图结束 -->
					<div class="picture">
						<table cellspacing="0" style="border-left:1px solid #fff;">
							<tr class="rows rowOne">
								<td class="column line">
									<a class="txt" href="">热议 | BAT 华人 AI 人才抢夺大战续：前亚马逊科学家任小枫加盟阿里 </a>
								</td>
								<td class="column">
									<a class="position" href="">
										<img src="__PUBLIC__/Image/column01.png" width="195" />
										<div class="picTxt">揭秘 | Google 精英黑客团队 Project Zero：守护全世界的安全</div>
										<div class="shadow"></div>
									</a>
									
								</td>
							</tr>
							<tr class="rows">
								<td class="column position">
									<a class="position" href="">
										<img src="__PUBLIC__/Image/column02.jpg" width="195" />
										<div class="picTxt"> CCF-GAIR 2017全球人工智能与机器人峰会</div> 
										<div class="shadow"></div>
									</a>
								</td>
								<td class="column col">
									<a class="txt" href="">深度 | 微软 AI 王者归来</a>
								</td>
							</tr>
						</table>
					</div>
				</div>
				<!--照片展示 结束-->
				<!--精选导读 开始-->
				<div class="sel_read">
					<h4>精选导读</h4>
					<div class="container1">
						<ul>
							<div class="box">
								<li>
									<div class="box1">
										<a class="img" href=""><img src="__PUBLIC__/Image/selRead01.jpg"/></a>
										<a class="txt" href="">Drive.ai宣布融资5000万美元，妇唱夫随吴恩达进入董事会</a>
									</div>
								</li>
							</div>
							<div class="box">
								<li>
									<div class="box1">
										<a class="img" href=""><img src="__PUBLIC__/Image/selRead02.jpg"/></a>
										<a class="txt" href="">运筹学教授叶荫宇：作为 AI 基石，优化算法如何在实际中应用？</a>
									</div>
								</li>
							</div>
							<div class="box">
								<li>
									<div class="box1">
										<a class="img" href=""><img src="__PUBLIC__/Image/selRead03.jpg"/></a>
										<a class="txt" href="">细思 | 携程梁建章“怼”李开复谁对谁错？这份AI报告告诉你</a>
									</div>
								</li>
							</div>
							<div class="box">
								<li>
									<div class="box1">
										<a class="img" href=""><img src="__PUBLIC__/Image/selRead04.jpg"/></a>
										<a class="txt" href="">深度学习下的医学图像分析（一）</a>
									</div>
								</li>
							</div>
							<div class="box">
								<li>
									<div class="box1">
										<a class="img" href=""><img src="__PUBLIC__/Image/selRead05.jpg"/></a>
										<a class="txt" href="">Geoffrey Hinton，让加拿大成为AI创新之地的助推者</a>
									</div>
								</li>
							</div>
							<div class="box">
								<li>
									<div class="box1">
										<a class="img" href=""><img src="__PUBLIC__/Image/selRead06.jpg"/></a>
										<a class="txt" href="">盘点麦克风技术及市场，远场语音交互如何选型麦克风</a>
									</div>
								</li>
							</div>
						</ul>
					</div>
				</div>
				<!--精选导读 结束-->
				<!--最新文章 开始-->
				<div class="new_article">
					<div class="title">
						最新文章
						<div class="num">
						<em></em>
						今日更新<span>10</span>篇
						</div>
					</div>
					<div class="container1">
						<ul>
							<?php if(is_array($data)): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li>
								<div class="box">
									<a class="img" href="__APP__/News/index?type=<?php echo ($vo["category_name"]); ?>&nid=<?php echo ($vo["id"]); ?>">
									<span><?php echo ($vo["category_name"]); ?></span>
									<img src="__PUBLIC__/Uploads/<?php echo ($vo["file_name"]); ?>"/>
									</a>
									<div class="word">
										<a class="txt" href="__APP__/News/index?type=<?php echo ($vo["category_name"]); ?>&nid=<?php echo ($vo["id"]); ?>">
											<stong><font size="4"><?php echo ($vo["headline"]); ?></font></stong>
										</a>
										<div class="subhead"><?php echo ($vo["subheading"]); ?> </div>
										<div class="message">
											<a class="aut" href=""><img src="__PUBLIC__/Uploads/<?php echo ($vo["portrait"]); ?>">
											&nbsp;作者:<?php echo ($vo["author_name"]); ?></a>&nbsp;
											<div class="time">发布时间:<?php echo ($vo["time"]); ?></div>
											<div class="tags">
												<em></em>
												<a href="">关联标签</a>
												<a href="">关联标签</a>
											</div>
										</div>
									</div>
								</div>
							</li><?php endforeach; endif; else: echo "" ;endif; ?>
						</ul>
					</div>
				</div>
				<!--最新文章 结束-->		
				<!-- 分页开始 -->
				<!-- 	<div class="pager">
					<li class="previous"><a href="" aria-hidden="true">&laquo;上一页&larr;</a></li>
					<li class="next"><a href="" aria-hidden="true">下一页&raquo;&rarr;</a></li>
				</div> -->
					<ul class="pagination page">
						<?php echo ($page); ?>
					</ul>
				<!-- 分页结束-->
			</div>
		<!--左侧结束-->
			
			<!--右侧开始-->
			<div class="main_right">
				<div class="new_info">
					<div class="box box1">
						<div class="box box2">
							<div class="box box3">
								<div class="refurbish">
									<div class="line">
										<div class="circle"><em></em></div>
									</div>
								</div>
								<div class="info_title"><span>业界资讯</span></div>
								<div class="contents">
									<ul>	
										<li class="just_txt">
											<em class="left_move"></em>
											<p class="time">发布资讯时间</p>
											<a href="">因违约行为 乐视体育被体奥动力切断比赛信号提供 </a>
										</li>
										<li class="just_txt">
											<em class="left_move"></em>
											<p class="time">发布资讯时间</p>
											<a href="">因违约行为 乐视体育被体奥动力切断比赛信号提供 </a>
										</li>
										<li class="just_txt">
											<em class="left_move"></em>
											<p class="time">发布资讯时间</p>
											<a href="">因违约行为 乐视体育被体奥动力切断比赛信号提供因违约行为 乐视体育被体奥动力切断比赛信号提供 </a>
										</li>
										<li class="just_txt">
											<em class="left_move"></em>
											<p class="time">发布资讯时间</p>
											<a href="">因违约行为 乐视体育被体奥动力切断比赛信号提供 </a>
										</li>
										<li class="just_txt">
											<em class="left_move"></em>
											<p class="time">发布资讯时间</p>
											<a href="">因违约行为 乐视体育被体奥动力切断比赛信号提供 </a>
										</li>
									</ul>
									<div class="scroll" style="height: 100%"></div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!--最新资讯结束-->
				<div class="yc_lessons">
					<div class="title">硬创公开课 </div>
					<div class="lessons_link">
						<a href="">
							<img class="tag" src="__PUBLIC__/Image/news-tag.png"/>
							<img src="__PUBLIC__/Image/yc_lessons.jpg" width="312" height="204" />
							<p>用技术洞见未来</p>
							<div class="shadow"></div>
						</a>
					</div>	
				</div>
				<!--硬创公开课结束-->
				<div class="hot_author">
					<div class="title">热门作者</div>
					<ul  class="list">
						<li>
							<a class="img" href=""><img src="__PUBLIC__/Image/hot_author_01.png"/></a>
							<div class="txt">
								<a href="">AI研习社<i></i></a>
								<div class="intro">聚焦数据科学，连接AI开发者聚焦数据科学，连接AI开发者。聚焦数据科学，连接AI开发者。聚焦数据科学，连接AI开发者。聚焦数据科学，连接AI开发者。聚焦数据科学，连接AI开发者。聚焦数据科学，连接AI开发者。。</div>
							</div>
						</li>
						<li>
							<a class="img" href=""><img src="__PUBLIC__/Image/hot_author_01.png"/></a>
							<div class="txt">
								<a href="">AI研习社<i></i></a>
								<div class="intro">聚焦数据科学，连接AI开发者。</div>
							</div>
						</li>
						<li>
							<a class="img" href=""><img src="__PUBLIC__/Image/hot_author_01.png"/></a>
							<div class="txt">
								<a href="">AI研习社<i></i></a>
								<div class="intro">聚焦数据科学，连接AI开发者。</div>
							</div>
						</li>
						<li>
							<a class="img" href=""><img src="__PUBLIC__/Image/hot_author_01.png"/></a>
							<div class="txt">
								<a href="">AI研习社<i></i></a>
								<div class="intro">聚焦数据科学，连接AI开发者。</div>
							</div>
						</li>
						<li>
							<a class="img" href=""><img src="__PUBLIC__/Image/hot_author_01.png"/></a>
							<div class="txt">
								<a href="">AI研习社<i></i></a>
								<div class="intro">聚焦数据科学，连接AI开发者。</div>
							</div>
						</li>
					</ul>
				</div>
				<!--热门作者结束-->
				<div class=" weekly_choice">
					<div class="title">每周精选</div>
					<div class="list">
						<ul>
							<li class="list_li">
								<a href="">
									<img src="__PUBLIC__/Image/weekly_choice_01.png" width="260px" height="154">
									<div class="picTxt">
									   从环视ADAS到自动驾驶，纵目科技是如何布局的？从环视ADAS到自动驾驶，纵目科技是如何布局的？
									</div>
								</a>
							</li>
							<li class="list_li">
								<a href="">
									<img src="__PUBLIC__/Image/weekly_choice_01.png" width="260px" height="154">
									<div class="picTxt">
									   从环视ADAS到自动驾驶，纵目科技是如何布局的？
									</div>
								</a>
							</li>
						</ul>
						<div class="just_txt">
							<a href=""><em></em>龙芯推出新一代处理器，离 Intel 还有多大差距？</a>
							<a href=""><em></em>龙芯推出新一代处理器，离 Intel 还有多大差距？</a>
							<a href=""><em></em>龙芯推出新一代处理器，离 Intel 还有多大差距？</a>
							<a href=""><em></em>龙芯推出新一代处理器，离 Intel 还有多大差距？</a>
							<a href=""><em></em>龙芯推出新一代处理器，离 Intel 还有多大差距？</a>
							<a href=""><em></em>龙芯推出新一代处理器，离 Intel 还有多大差距？</a>
							<a href=""><em></em>龙芯推出新一代处理器，离 Intel 还有多大差距？</a>
						</div>
					</div>
				</div>
				<!--每周精选结束-->
				<div class="good_comments">
					<div class="title">优质评论</div>
					<div class="list">
						<ul>
							<li>
								<div class="comment">雷锋网开发AI的真正价值存在于辅助决策中，当前AI系统得出的结论通常是那些患者已经知道的事情 </div>
								<div class="comment_user">
									<a href="">
										<img src="__PUBLIC__/Image/
										good_comments_01.jpg" />
									</a>
									<div class="depict">
										<div class="user_name">
												<a href="">
												<i>评论用户fsddsasdsadas</i>
													评论文章：
												</a>
												<p class="time">5月22日3秒</p>
										</div>
										<div class="news_title"><a href="">
											文章标题价值存在于辅助决策中，当前AI系统得出的结论通常是那些患者已经知道的事情
										</a>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="comment">雷锋网开发AI的真正价值存在于辅助决策中，当前AI系统得出的结论通常是那些患者已经知道的事情 </div>
								<div class="comment_user">
									<a href="">
										<img src="__PUBLIC__/Image/
										good_comments_01.jpg" />
									</a>
									<div class="depict">
										<div class="user_name">
												<a href="">
												<i>评论用户fsddsasdsadas</i>
													评论文章：
												</a>
												<p class="time">5月22日:H:M</p>
										</div>
										<div class="news_title"><a href="">
											文章标题价值存在于辅助决策中，当前AI系统得出的结论通常是那些患者已经知道的事情
										</a>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!--优质评论结束-->
			</div>
		</div>	
	</div>
<!-- </body>
</html> -->