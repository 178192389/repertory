<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<style>

.he_border1{background:#fe7253;width:360px;height:240px;padding:0;margin:0;border:1px solid #000;position:relative;box-sizing:border-box;-webkit-transition:all .4s ease-in-out;-moz-transition:all .4s ease-in-out;-o-transition:all .4s ease-in-out;-ms-transition:all .4s ease-in-out;transition:all .4s ease-in-out;overflow:hidden} 
.he_border1 .he_border1_img{display:block;width:100%;padding:0;margin:0;position:relative;-webkit-transition:all .4s ease-in-out;-moz-transition:all .4s ease-in-out;-o-transition:all .4s ease-in-out;-ms-transition:all .4s ease-in-out;transition:all .4s ease-in-out;opacity:1;overflow:hidden} 
.he_border1:hover .he_border1_img{position:absolute;-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-o-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);opacity:.6} 
.he_border1 .he_border1_caption{color:#fff;padding:0;margin:0;-moz-backface-visibility:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:all .4s ease-in-out;-moz-transition:all .4s ease-in-out;-o-transition:all .4s ease-in-out;-ms-transition:all .4s ease-in-out;transition:all .4s ease-in-out;overflow:hidden} 
.he_border1 .he_border1_caption::before,.he_border1 .he_border1_caption::after{position:absolute;content:'';opacity:0;-webkit-transition:opacity 0.4s,-webkit-transform .4s;-moz-transition:opacity 0.4s,-moz-transform .4s;-o-transition:opacity 0.4s,-o-transform .4s;transition:opacity 0.4s,transform .4s} 
.he_border1 .he_border1_caption::before{top:8%;right:10%;bottom:8%;left:10%;border-top:1px solid #fff;border-bottom:1px solid #fff;-webkit-transform:scale(0,1);-moz-transform:scale(0,1);-o-transform:scale(0,1);transform:scale(0,1);-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0} 
.he_border1 .he_border1_caption::after{top:8%;right:10%;bottom:8%;left:10%;border-right:1px solid #fff;border-left:1px solid #fff;-webkit-transform:scale(1,0);-moz-transform:scale(1,0);-o-transform:scale(1,0);transform:scale(1,0);-webkit-transform-origin:100% 0;-moz-transform-origin:100% 0;-o-transform-origin:100% 0;transform-origin:100% 0} 
.he_border1:hover .he_border1_caption::before,.he_border1:hover .he_border1_caption::after{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)} 
.he_border1 .he_border1_caption,.he_border1 .he_border1_caption > a{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transition:all .4s ease-in-out;-moz-transition:all .4s ease-in-out;-o-transition:all .4s ease-in-out;-ms-transition:all .4s ease-in-out;transition:all .4s ease-in-out;overflow:hidden; z-index:1000} 
.he_border1 .he_border1_caption_h{font-size:1.3em;font-weight:700;text-align:center;width:80%;position:absolute;top:20%;left:10%;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;transition:all .5s ease-in-out;overflow:hidden;opacity:1} 
.he_border1 .he_border1_caption_p{font-size:1em;text-align:center;width:80%;position:absolute;top:60%;left:10%;-webkit-transition:all .4s ease-in-out;-moz-transition:all .4s ease-in-out;-o-transition:all .4s ease-in-out;-ms-transition:all .4s ease-in-out;transition:all .4s ease-in-out;overflow:hidden;opacity:0} 
.he_border1:hover .he_border1_caption_p{top:45%;opacity:1} 

</style>
   <div class="he_border1"> 
        <img class="he_border1_img" src="pro_1.jpg" alt="Image 01"> 
        <div class="he_border1_caption"> 
            <h3 class="he_border1_caption_h">Helloweba</h3> 
            <p class="he_border1_caption_p">WEB前端应用教程+演示+源码</p> 
            <a class="he_border1_caption_a" href="http://www.helloweba.com/" target="_blank"></a> 
        </div> 
    </div> 
</div>
</body>
</html>