<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<title><?php echo ($site_info["sitename"]); ?></title>
<meta charset="UTF-8">
<!-- <meta name="viewport" content="initial-scale=1.0"> -->
<!-- <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" /> -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="keywords" content="<?php echo ($site_info["keywords"]); ?>">
<meta name="description" content="<?php echo ($site_info["miaoshu"]); ?>">
<link href="/kefaxin/Public/css/index.css" rel='stylesheet' type='text/css' />
<link href="/kefaxin/Public/css/bootstrap.css" rel='stylesheet' type='text/css' />
<link href="/kefaxin/Public/css/head_foot.css" rel='stylesheet' type='text/css' />
<script type="text/javascript" src="/kefaxin/Public/js/jquery.js"></script>
<script type="text/javascript" src="/kefaxin/Public/js/bootstrap.js"></script>
<script type="text/javascript" src="/kefaxin/Public/js/slider.js"></script>
<script type="text/javascript" src="/kefaxin/Public/js/setHolder.js"></script>

<!-- <script type="text/javascript" src="/kefaxin/Public/js/zepto_min.js"></script> -->
<script type="text/javascript" src="/kefaxin/Public/js/jquery.lazyload.js"></script>
<script type="text/javascript" src="/kefaxin/Public/js/TouchSlide.1.1.js"></script>
<style type="text/css">
input{font-size:14px;}
</style>
</head>
<body>
<!-- <div id="pos" style="
width: 100px;height: 100px;
border:2px solid darkred;background: gray;
color:white;padding-left:5px;
position: fixed;left:0;top:300px;
">
</div> -->
<div class="head">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<span class="pull-right">
				<a href="http://wpa.qq.com/msgrd?v=3&uin=119533941&site=qq&menu=yes" target="_blank" >
				<img border="0" src="/kefaxin/Public/images/qq.png" width="15" alt="点击这里给我发消息" title="点击这里给我发消息" />
				<span class="mail">QQ交流</span>
				</a>
				<img class="weixin" src="/kefaxin/Public/images/weixin.png">
				<span class="tel guanzhu">
					关注科发鑫
					<img class="contact_weixin" src="/kefaxin/Public/images/contact_weixin.gif">
				</span>
				<span class="tel zongji"><img src="/kefaxin/Public/images/tel.png">
				0755-86130872</span>
				<select id="banben">
					<option value="ch">中文版</option>
					<option value="en">English</option>
			    </select>
			    <input type="hidden" id="version" value="ch">
				</span>
			</div>
		</div>
	</div>
</div>
<div class="helper"></div>
<div class="cate" id="cate">
<div class="container">
	<div class="con">
			<div class="first">
				<a title="科发鑫" href="/kefaxin/index.php/home/index/index"><img src="/kefaxin/Public/images/logo.gif" class="img-responsive"></a>
			</div>
			<div class="second">
				<ul class="menu">
			         <li><a title="网站首页" class="link" href="/kefaxin/index.php/home/index/index">网站首页</a></li>			         
			         <li><a title="产品" class="link" href="/kefaxin/index.php/home/index/service">产品</a></li> 
			         <li><a title="解决方案" class="link" href="/kefaxin/index.php/home/index/solution">解决方案</a></li>
			         <li><a title="技术资讯" class="link" href="/kefaxin/index.php/home/index/technology">技术资讯</a></li> 
			         <li><a title="关于我们" class="link" href="/kefaxin/index.php/home/index/aboutus">关于我们</a></li> 
			         <li><a title="联系我们" class="link" href="/kefaxin/index.php/home/index/contactus">联系我们</a></li> 
			    </ul>
			</div>
	</div>
	</div>
</div>
<script type="text/javascript">
$(function(){	
	var $nav = $('#cate');//导航对象
var navTop = $nav.offset().top;//导航顶部偏移量
var navH = $nav.outerHeight();
var winTop_1=0;
var winWidth=$(window).width();//浏览器窗口宽度
var  holder=jQuery('<div>');//????
$(window).on('scroll',function(){
 	var winTop_2 = $(window).scrollTop();
 	holder.css('height',navH);
 //开始浮动，不过不显示
	 if(winTop_2>navTop && winWidth>980){
		 holder.show().insertBefore($nav);
		 $nav.addClass('fixed-nav');
	 }else{
		 holder.hide();
		 $nav.removeClass('fixed-nav');
	 }
 //判断鼠标向上滚动，显示出来
 if(winTop_2>winTop_1 && winWidth>980){
 	$nav.removeClass('fixed-nav-appear');
 }else if(winTop_2<winTop_1){
 	$nav.addClass('fixed-nav-appear');
 }
 	winTop_1 = $(window).scrollTop();
})
	

	if ($('#version').val()=='ch') {
		$('#banben option').eq(0).prop('selected','selected');
	}
	$('.guanzhu').mouseover(function(){
		$('.contact_weixin').slideDown();
	})
	$('.guanzhu').mouseout(function(){
		$('.contact_weixin').fadeOut(100);
		$('.contact_weixin').stop(false,true);
	})
	$('.link').eq(0).addClass('active')
	var len = $('.link').length;
	var kk;
	var position = $('#position').text();
	for(var i=0;i<len;i++){
		var text = $('.link').eq(i).text();
		if (text==position) {
			kk = i;
		}
	}
	if (kk!=0) {
		$('.link').eq(0).removeClass('active');
		$('.link').eq(kk).addClass('active').siblings('.link').removeClass('active');
	}else{
		$('.link').removeClass('active');
		$('.link').eq(0).addClass('active');
	}
	$('#banben').change(function(){
		var bn = $(this).val();
		if (bn=='en') {
			location='/kefaxin/index.php/Home/English/index';
			// $('#banben').eq(1).prop('selected','selected');
		}else if(bn=='ch'){
			location='/kefaxin/index.php';
		}else{
			location='/kefaxin/index.php'
		}
	})
})
</script>
<!-- 导航结束 -->
<span id="position" style="display: none;">网站首页</span>
<div class="banner" id="banner">

<ul id="banimg" class="banimg">
<?php if(is_array($ban)): $i = 0; $__LIST__ = $ban;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vol): $mod = ($i % 2 );++$i;?><li><img src="/kefaxin/Uploads/banner_imgs/<?php echo ($vol["image"]); ?>"></li><?php endforeach; endif; else: echo "" ;endif; ?>
</ul>
	<div class="container">
		<?php if(is_array($title)): $i = 0; $__LIST__ = $title;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$tt): $mod = ($i % 2 );++$i;?><div class="slide" style="display: none;">
			<h1 class="hwhite"><?php echo ($tt["maintitle"]); ?></h1>
			<h3 class="hblue"><?php echo ($tt["subtitle"]); ?></h3>
			<p class="sp1">
			<?php echo ($tt["content"]); ?>
			</p>
			<p class="sp2 pull-left"><!--   -->
				<a title="了解更多" class="ak" href="/kefaxin/index.php/home/index/solution?id=<?php echo ($tt["id"]); ?>">了解更多</a>
			</p>
		</div><?php endforeach; endif; else: echo "" ;endif; ?>		
	</div>
	<ol class="point">
		<li><img class="cc" src="/kefaxin/Public/images/circle1.png"></li>
		<li><img class="cc" src="/kefaxin/Public/images/circle2.png"></li>
		<li><img class="cc" src="/kefaxin/Public/images/circle2.png"></li>
		<li><img class="cc" src="/kefaxin/Public/images/circle2.png"></li>
		<li><img class="cc" src="/kefaxin/Public/images/circle2.png"></li>
	</ol>
</div>

<div class="follow">
	<?php if(is_array($title)): $i = 0; $__LIST__ = $title;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$tt): $mod = ($i % 2 );++$i;?><a title="<?php echo ($tt["content"]); ?>" href="/kefaxin/index.php/home/index/solution?id=<?php echo ($tt["id"]); ?>">
	<div class="ban">
		<h3><?php echo ($tt["maintitle"]); ?></h3>
		<p><?php echo ($tt["content"]); ?>
		</p>
	</div>
	</a><?php endforeach; endif; else: echo "" ;endif; ?>
</div>

<div class="fuxing">
<img src="/kefaxin/Public/images/fuxing_32.jpg" class="img-responsive">
</div>

<div class="container inform">
	<div class="row">
		<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
			<h3>技术资讯</h3>
			<?php if(is_array($news_list)): $i = 0; $__LIST__ = $news_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vol): $mod = ($i % 2 );++$i;?><p class="black"><a title="<?php echo ($vol["title"]); ?>" href="/kefaxin/index.php/home/index/content/id/<?php echo ($vol["id"]); ?>"><?php echo ($vol["title"]); ?></a></p>
			<p class="gray">
			<?php echo msubstr(strip_tags($vol['content']),0,80);?>
			</p><?php endforeach; endif; else: echo "" ;endif; ?>
		</div>
		<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
			<h3>最新动态</h3>
			<?php if(is_array($zixun_list)): $i = 0; $__LIST__ = $zixun_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vol): $mod = ($i % 2 );++$i;?><p class="black"><a title="<?php echo ($vol["title"]); ?>" href="/kefaxin/index.php/home/index/content/id/<?php echo ($vol["id"]); ?>"><?php echo ($vol["title"]); ?></a></p>
			<p class="gray">
			<?php echo msubstr(strip_tags($vol['content']),0,40);?>
			</p><?php endforeach; endif; else: echo "" ;endif; ?>
		</div>
	</div>
</div>
<div class="partners">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h1>合作伙伴</h1>
				<h1>OUR PARTERS</h1>
			</div>
		</div>
		<div class="row">
			<?php if(is_array($flink)): $i = 0; $__LIST__ = $flink;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vol): $mod = ($i % 2 );++$i;?><div class="flink col-xs-2 col-sm-2 col-md-2 col-lg-2">
					<img src="/kefaxin/<?php echo ($vol["logo"]); ?>" title="<?php echo ($vol["website"]); ?>" class="img-responsive">
				</div><?php endforeach; endif; else: echo "" ;endif; ?>
		</div>
	</div>
</div>

<!-- 底部开始 -->
<!-- <script src="/kefaxin/Public/js/sweetalert.min.js"></script>
<link rel="stylesheet" type="text/css" href="/kefaxin/Public/css/sweetalert.css"> -->
<div class="foot">
</div>
<div class="footer">
		<div class="container">
		<!-- visible-xs小屏幕不可见__开始 -->
			<div class="row">
				<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 info1">
				<figure>
                    <h4>信息</h4>
                    <ul>
	                    <li><a title="产品中心" href="/kefaxin/index.php/home/index/service">产品中心</a></li>
	                    <li><a title="应用方案" href="/kefaxin/index.php/home/index/solution">应用方案</a></li>
	                    <li><a title="最新资讯" href="/kefaxin/index.php/home/index/technology">最新资讯</a></li>
	                    <li><a title="联系我们" href="/kefaxin/index.php/home/index/contactus">联系我们</a></li>
                    </ul>
                </figure>
				</div>
				<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 info2">
					<figure>
                    <h4>产品系列</h4>
                    <ul>
	                    <?php if(is_array($btm_list)): $i = 0; $__LIST__ = $btm_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vol): $mod = ($i % 2 );++$i;?><li>
	                    	<a title="<?php echo ($vol["name"]); ?>" href="/kefaxin/index.php/home/index/service?id=<?php echo ($vol["id"]); ?>">
	                    			<?php echo ($vol["name"]); ?>
	                    		</a>
	                    	</li><?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                </figure>
				</div>
				<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 info3">
					<figure>
                <h4>产品方案</h4>
                <ul>
                    <?php if(is_array($solution_list)): $i = 0; $__LIST__ = $solution_list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vol): $mod = ($i % 2 );++$i;?><li>
	                    		<a title="<?php echo ($vol["maintitle"]); ?>" href="/kefaxin/index.php/home/index/solution/id/<?php echo ($vol["id"]); ?>">
	                    			<?php echo ($vol["maintitle"]); ?>
	                    		</a>
	                    	</li><?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </figure>    
				</div>	
				<div class="col-xs-3 col-md-3 col-sm-3 col-lg-3 info4">
			<figure>
                <h4>联系我们</h4>
                <ul>
                    <li><a title="">
                    总机：<?php echo ($site_info["zongji"]); ?></a></li>
                    <li><a title="">
                    VIP专线：<?php echo ($site_info["phone"]); ?></a></li>
                    <li><a title="">
                    邮箱：<?php echo ($site_info["email"]); ?></a></li>
                    <li><a title="">
		            QQ：<?php echo ($site_info["qq"]); ?></a></li>
                    <!-- <li><a title="" class="show_code" class="show_code">
                    <img src="/kefaxin/Public/images/weixin.png">&nbsp;：科发鑫 </a></li>
                    <li class="btm_wx" style="display:none;">
                    	<img src="/kefaxin/Public/images/contact_weixin.gif">
                    </li> -->
                </ul>
            </figure>    
				</div>
				<div class="col-xs-3 col-md-3 col-sm-3 col-lg-3 info5">
			<figure>
                <h4>给我们留言</h4>
                <!-- <form action="/kefaxin/index.php/home/index/addLiuYan" method="post" onsubmit="return checkForm();"> -->
                <ul id="liuyan">
                    <li><input id="name" name="name" type="text" placeholder="称呼(必填)"></li>
                    <li><input id="phone" name="phone" type="tel" placeholder="电话(必填)"></li>
                    <li><textarea id="content" placeholder="您的留言" name="content"></textarea></li>
                    <li><input type="button" class="btn btn-primary" value="提交" id="submit"></li>
                </ul>
                <!-- </form> -->
            </figure>    
				</div>	
			<div class="clearfix"></div>
			</div>
		</div>
</div> 

<script type="text/javascript">
// $('.show_code').mouseover(function(){
// 	$('.btm_wx').slideDown();
// })
// $('.show_code').mouseout(function(){
// 	$('.btm_wx').fadeOut(100);
// 	$('.btm_wx').stop(false,true);
// })
$(function(){
	$('#submit').click(function(){
		var name = $('#name').val();
		var phone = $('#phone').val();
		var content = $('#content').val();
		var reg_tel = /^1[34578]\d{9}$/;
		var con_len = content.trim();
		var name_len = name.trim();
		if (name_len.length == 0) {
			alert('称呼不能为空');
			$('#name').focus();
			return false;
		}
		if (!reg_tel.test(phone)) {
			alert('手机号格式不正确');
			$('#phone').focus();
			return false;
		}
		if (con_len.length <= 0) {
			alert('留言内容不能为空');
			$('#content').focus();
			return false;
		}
		var info = [phone,name,content];
		var json = JSON.stringify(info);
		// alert(json);
		// return false;
		$.ajax({
			type:'get',
			dataType:'text',
			url:'/kefaxin/index.php/home/index/addLiuYan?json='+json,
			success:function(data){
				if (data==1) {
					swal('留言成功','感谢您的留言','success');//
				}else{
					swal('留言失败','未知错误，请联系客服','error');//
				}
			}
		})		
	})
})

</script>
<script type="text/javascript">
    $("input").placeholder();
$(function(){
	//alert($('.ban').length)
	//background:url(../images/ban_bg2.jpg) center center no-repeat;
	// $('.ban').eq(0).css('background','#ffbb00');
	// $('.ban').eq(2).css('background','#ffbb00');
	// $('.ban').eq(4).css('background','#ffbb00');
	// var str = <?php echo ($banner); ?>;//
	// var arr = eval(str);//
	// //alert(arr[1]['image']);
	// var img_str = "url(/kefaxin/Uploads/banner_imgs/"+arr[0]['image']+"),url(/kefaxin/Uploads/banner_imgs/"+arr[1]['image']+"),url(/kefaxin/Uploads/banner_imgs/"+arr[2]['image']+"),url(/kefaxin/Uploads/banner_imgs/"+arr[3]['image']+"),url(/kefaxin/Uploads/banner_imgs/"+arr[4]['image']+")";
 //  $(".banner").css('backgroundImage',img_str);
  // var img1 = 
})
</script>
</body>
</html>