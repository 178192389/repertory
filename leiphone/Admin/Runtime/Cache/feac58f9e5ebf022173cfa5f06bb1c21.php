<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Insert title here</title>
<script type="text/javascript" src="__PUBLIC__/Js/jquery-1.12.0.min.js"></script>
<script type="text/javascript" src="__PUBLIC__/Js/bootstrap.min.js"></script>
<link type="text/css" rel="stylesheet" href="__PUBLIC__/Css/bootstrap.min.css">
<script type="text/javascript" src="__PUBLIC__/Js/admin.js"></script>
</head>
<body>
		<div class="container">
			<h2 class="page-header">欢迎进入admin界面</h2>
			<a class="btn btn-primary btn-lg" href="__ROOT__/index.php/Index/index" target="_blank">前台首页</a>
		</div>
		<canvas></canvas>
	

  
    

    <script>
    var btn = document.querySelector('button');
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    var WIDTH = document.documentElement.clientWidth;
    var HEIGHT = document.documentElement.clientHeight;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    function random(number) {
      return Math.floor(Math.random()*number);
    }
 obj =setInterval (	function draw() {
      ctx.clearRect(0,0,WIDTH,HEIGHT);
      for(var i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
      }
    },3000);
    btn.addEventListener(obj,draw);
      
    </script>
</body>
</html>