<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>后台管理中心</title>
    <link rel="stylesheet" type="text/css" href="/kefaxin/Public/css/mycss.css">
    <link rel="stylesheet" href="/kefaxin/Public/css/pintuer.css">
    <link rel="stylesheet" href="/kefaxin/Public/css/admin.css">
    <script src="/kefaxin/Public/js/jquery.js"></script>   
    <style type="text/css">
    /*.red{color:navy;}*/
    </style>
</head>
<body style="background-color:#f2f9fd;">
<div class="header bg-main">
  <div class="logo margin-big-left fadein-top">
    <h1 style="color: #666;">
    <img src="/kefaxin/Public/images/kfx.png" class="radius-circle rotate-hover" height="50" alt="" />后台管理中心</h1>
  </div>
    <div class="head-l">
      <a class="button button-little bg-green" href="/kefaxin/index.php" target="_blank">
        <span class="icon-home"></span> 前台首页
      </a> &nbsp;&nbsp;
      <a class="button button-little bg-red" href="/kefaxin/admin.php/Home/Index/login">
        <span class="icon-power-off"></span> 退出登录
      </a> 
      <a class="button button-little bg-red" href="/kefaxin/admin.php/Home/System/removeCache" target="right">
        <span class="icon-trash"></span>清除缓存 
      </a>
  </div>
</div>
<div class="leftnav" style="overflow: scroll;">
  <div class="leftnav-title">
    <span class="icon-list" style="color:#0099CC;font-size: 18px;font-weight: bold;">
    菜单列表</span>
  </div>
  <h2 class="fixh2"><span class="icon-pencil-square-o"></span>
    <span class="mainmenu">系统设置</span>
  </h2>


  <ul class="fix"> <!-- style="display: block;" -->
    <li>
      <a href="/kefaxin/admin.php/Home/System/dumpDatabase" target="right">
      <span class="icon-caret-right"></span>备份数据库</a>
    </li>
    <li class="btm">
    <a href="/kefaxin/admin.php/Home/System/index" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">管理员管理</span>
    </a>
    </li>
    <li>
      <a href="/kefaxin/admin.php/Home/System/setBanner" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu">Banner设置</span>
      </a>
    </li>
    
    <li class="btm">
      <a href="/kefaxin/admin.php/Home/System/contactManage" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu">基本信息设置</span>
      </a>
    </li>
    
    <li>
      <a href="/kefaxin/admin.php/Home/System/solutionManage" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu">解决方案管理</span>
      </a>
    </li>
    <li class="btm">
      <a href="/kefaxin/admin.php/Home/System/addSolution" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu">添加解决方案</span>
      </a>
    </li>
    
    <li>
      <a href="/kefaxin/admin.php/Home/System/aboutUs" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu">关于我们内容</span>
      </a>
    </li>
    
    <li>
      <a href="/kefaxin/admin.php/Home/Systemen/setBanner" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu"><span class="red">en_</span>Banner设置</span>
      </a>
    </li>
    <li class="btm">
      <a href="/kefaxin/admin.php/Home/Systemen/contactManage" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu"><span class="red">en_</span>基本信息设置</span>
      </a>
    </li>
    <li>
      <a href="/kefaxin/admin.php/Home/Systemen/solutionManage" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu"><span class="red">en_</span>解决方案管理</span>
      </a>
    </li>
    <li class="btm">
      <a href="/kefaxin/admin.php/Home/Systemen/addSolution" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu"><span class="red">en_</span>添加解决方案</span>
      </a>
    </li>
    <li>
      <a href="/kefaxin/admin.php/Home/Systemen/aboutUs" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu"><span class="red">en_</span>关于我们内容</span>
      </a>
    </li>
  </ul>



  <h2 class="fixh2"><span class="icon-user"></span>
    <span class="mainmenu">产品管理</span>
  </h2>
  <ul class="fix">
    <li>
      <a href="/kefaxin/admin.php/Home/Index/addProductSeries" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">添加产品系列</span></a>
    </li>
    <li class="btm">
      <a href="/kefaxin/admin.php/Home/Index/seriesManage" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">产品系列管理</span></a>
    </li>
    <li>
      <a href="/kefaxin/admin.php/Home/Indexen/addProductSeries" target="right">
        <span class="icon-caret-right"></span>
        <span class="submenu"><span class="red">en_</span>添加产品系列</span>
      </a>
    </li>
    <li class="btm">
      <a href="/kefaxin/admin.php/Home/Indexen/seriesManage" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu"><span class="red">en_</span>产品系列管理</span></a>
    </li>
    <!-- <li>
      <a href="/kefaxin/admin.php/Home/Index/addProduct" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">添加产品</span></a>
    </li> -->
    <!-- <li class="btm">
      <a href="/kefaxin/admin.php/Home/Index/productManage" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">产品管理</span></a>
    </li> -->
    <li>
      <a href="/kefaxin/admin.php/Home/Indexen/addProduct" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu"><span class="red">en_</span>添加产品</span></a>
    </li>
    <li class="btm">
      <a href="/kefaxin/admin.php/Home/Indexen/productManage" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu"><span class="red">en_</span>产品管理</span></a>
    </li>
  </ul>
  <h2 class="fixh2"><span class="icon-pencil-square-o"></span>
    <span class="mainmenu">其它模块</span>
  </h2>
  <ul class="fix">
    <li>
      <a href="/kefaxin/admin.php/Home/Index/addZixun" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">添加技术资讯</span></a>
    </li>
    <li class="btm">
      <a href="/kefaxin/admin.php/Home/Index/zixunManage" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">技术资讯管理</span></a>
    </li>
    <li>
      <a href="/kefaxin/admin.php/Home/Index/addActive" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">添加最新动态</span></a>
    </li>
    <li class="btm">
      <a href="/kefaxin/admin.php/Home/Index/activeManage" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">最新动态管理</span></a>
    </li>
    <li>
      <a href="/kefaxin/admin.php/Home/Indexen/addZixun" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu"><span class="red">en_</span>添加技术资讯</span></a>
    </li>
    <li class="btm">
      <a href="/kefaxin/admin.php/Home/Indexen/zixunManage" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu"><span class="red">en_</span>技术资讯管理</span></a>
    </li>
    <li>
      <a href="/kefaxin/admin.php/Home/Index/liuyanManage" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">留言管理</span></a>
    </li>
    <li>
      <a href="/kefaxin/admin.php/Home/Index/addFlink" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">添加友情链接</span></a>
    </li>
    <li>
      <a href="/kefaxin/admin.php/Home/Index/flinkManage" target="right">
      <span class="icon-caret-right"></span>
      <span class="submenu">友情链接管理</span></a>
    </li>
  </ul>
</div>
<script type="text/javascript">
$(function(){
  
  $(".leftnav .fixh2").click(function(){
    $(this).next('.fix').slideDown(200).siblings('.fix').slideUp(200);
        //$(this).toggleClass("on"); 
  })
  $(".leftnav ul li a").click(function(){
      $("#a_leader_txt").text($(this).text());
      $(".leftnav ul li a").removeClass("on");
    $(this).addClass("on");
  })
  $('.mainmenu').click(function(){
    var text = $(this).text();
    $('#mainmenu').text(text);
  })
  $('.submenu').click(function(){
    var text = $(this).text();
    $('#submenu').text(text);
  })
});
</script>
<ul class="bread">
  <li>当前位置：
    <span id="mainmenu">系统管理</span>/
    <span id="submenu">管理员设置</span>
  </li>
</ul>
<div class="admin">
  <iframe frameborder='1' scrolling="auto" frameborder="0" src="/kefaxin/admin.php/Home/System/show" name="right" width="100%" height="100%"><!--  -->
  </iframe>
</div>
</body>
</html>