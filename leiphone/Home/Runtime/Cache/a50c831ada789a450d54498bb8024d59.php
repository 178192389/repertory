<?php if (!defined('THINK_PATH')) exit();?>    <!DOCTYPE HTML>  
    <html>  
    <head>  
        <meta charset="UTF-8">  
        <title> 上传多张图片</title>  
        <style type="text/css">  
            .img-div{  
                border: 1px solid #ddd;  
                border-radius: 100%;  
                float: left;  
                line-height: 1;  
                margin-left: 5px;  
                overflow: hidden;  
            }  
      
        </style>  
    </head>  
    <body>  
      
    <script type="text/javascript">  
        //选择图片，马上预览  
        function xmTanUploadImg(obj) {  
      
            var fl=obj.files.length;  
            for(var i=0;i<fl;i++){  
                var file=obj.files[i];  
                var reader = new FileReader();  
      			alert(obj.files.length);
                //读取文件过程方法  
      
                reader.onloadstart = function (e) {  
                    console.log("开始读取....");  
                }  
                reader.onprogress = function (e) {  
                    console.log("正在读取中....");  
                }  
                reader.onabort = function (e) {  
                    console.log("中断读取....");  
                }  
                reader.onerror = function (e) {  
                    console.log("读取异常....");  
                }  
                reader.onload = function (e) {  
                    console.log("成功读取....");  
      
                    var imgstr='<img style="width:100px;height:100px;" src="'+e.target.result+'"/>';  
                    var oimgbox=document.getElementById("imgboxid");  
                    var ndiv=document.createElement("div");  
      
                    ndiv.innerHTML=imgstr;  
                    ndiv.className="img-div";  
                    oimgbox.appendChild(ndiv);  
                     
                }  
      
                reader.readAsDataURL(file);  
    //alert(1);  
            }  
      
        }  
    </script>  
    <form id="form"  enctype="multipart/form-data">  
            <input type="file" id="xdaTanFileImg"  multiple="multiple"  name="fileAttach" onchange="xmTanUploadImg(this)"/>  
        <div class="img-box" id="imgboxid">  
      
        </div>  
      
                          <div id="xmTanDiv"></div><br/>  
                    <div id="errordiv"   style="margin-top:15px;width:100%;text-align:center;">  
                    <input id="bt" type="button" onclick="test(this)" value="提交" />   
                </div>  
    </form>  
    </body>