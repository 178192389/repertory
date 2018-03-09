$(function(){

   //自选
   $('#cj-zx').click(function(){
   	    if(sum()){
	   	     var left = parseInt(Math.random()*(550-530+1)+530);
	         var top = parseInt(Math.random()*(310-280+1)+280);
             var width = 500;
             var height = 410;
             var zIndex = 1000;
	         zx(top,left,width,height,zIndex);
        }
    });
function zx(top,left,width,height,zIndex){
    var zx = "<div class='draggable' id='zx_1' style='z-index:1000;top:"+top+"px;left:"+left+"px;width:"+width+"px;height:"+height+"px;'>";
             zx += "<div class='resizable'>";
             zx += "<div class='head-title'>";                               
             zx += "<div class='d_input'><span class='bt-zt'>杭电证券</span></div>";
             zx += "<span class='move-sp' style='display:block;'><label class='label'>自选</label><a class='move-x' href='javascript:void(0)'>x</a></span>";
             zx += "</div>";            
             zx += "<div class='content'>";
             zx += "<div class='move-puy'>";
             zx += "<form active=''>";
             zx += "<input type='text' name='' id='zqname'>";
             zx += "<input name='price' id='spinner-price' placeholder='请输入价格'>";
             zx += "<input name='number' class='number' placeholder='请输入数量'><input type='button' class='number-qb'  value='全部'>";
             zx += "<input type='button' class='a1' value='买入'><input type='button' class='a1' value='卖出'>";
             zx += "</form>";
             zx += "</div>";                 
             zx += "<div class='puy-right'>";
             zx += "<ul>";
             zx += "<li style='color: #32CD32;'>";
             zx += "<span class='li-hq'>最新:&nbsp;&nbsp;<label>9.8</label></span>";
             zx += "<span class='li-hq'>涨幅:&nbsp;&nbsp;<label>9.8</label></span>";
             zx += "<span class='li-hq'>涨跌:&nbsp;&nbsp;<label>9.8</label></span>";
             zx += "</li>";
             zx += "<li style='color: #000080;''>";
             zx += "<span class='li-hq'>最高:&nbsp;&nbsp;<label>9.8</label></span>";
             zx += "<span class='li-hq'>昨所:&nbsp;&nbsp;<label>9.8</label></span>";
             zx += "<span class='li-hq'>涨停:&nbsp;&nbsp;<label>9.8</label></span>";
             zx += "</li>";
             zx += "<li style='color: #8B0000;''>";
             zx += "<span class='li-hq'>最低:&nbsp;&nbsp;<label>9.8</label></span>";
             zx += "<span class='li-hq'>开盘:&nbsp;&nbsp;<label>9.8</label></span>";
             zx += "<span class='li-hq'>跌停:&nbsp;&nbsp;<label>9.8</label></span>";
             zx += "</li>";
             zx += "</ul>";
             zx += "</div>";
             zx += "<div class='puy-bottom'>";
             zx += "<div class='daily-limit'>";
             zx += "<div class='daily-limit-list'>";
             zx += "<dl class='row'><dt class='col-xs-4'>卖一</dt><dd class='col-xs-4 rise'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>卖二</dt><dd class='col-xs-4 rise'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>卖三</dt><dd class='col-xs-4 rise'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>卖四</dt><dd class='col-xs-4 rise'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>卖五</dt><dd class='col-xs-4 rise'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>卖六</dt><dd class='col-xs-4 rise'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>卖七</dt><dd class='col-xs-4 rise'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>卖八</dt><dd class='col-xs-4 rise'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>卖九</dt><dd class='col-xs-4 rise'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>卖十</dt><dd class='col-xs-4 rise'>9.17</dd><dd class='col-xs-4'>1347</dd></dl>";
             zx += "</div>";
             zx += "<div class='daily-limit-list'>";
             zx += "<dl class='row'><dt class='col-xs-4'>买十</dt><dd class='col-xs-4 fall'>9.17</dd><dd class='col-xs-4'>1347</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>买九</dt><dd class='col-xs-4 fall'>9.16</dd><dd class='col-xs-4'>1702</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>买八</dt><dd class='col-xs-4 fall'>9.15</dd><dd class='col-xs-4'>2151</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>买七</dt><dd class='col-xs-4 fall'>9.12</dd><dd class='col-xs-4'>5581</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>买六</dt><dd class='col-xs-4 fall'>9.10</dd><dd class='col-xs-4'>6880</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>买五</dt><dd class='col-xs-4 fall'>9.08</dd><dd class='col-xs-4'>1586</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>买四</dt><dd class='col-xs-4 fall'>8.00</dd><dd class='col-xs-4'>1280</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>买三</dt><dd class='col-xs-4 fall'>8.05</dd><dd class='col-xs-4'>1360</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>买二</dt><dd class='col-xs-4 fall'>7.90</dd><dd class='col-xs-4'>1220</dd></dl>";
             zx += "<dl class='row'><dt class='col-xs-4'>买一</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "</div></div>";
             zx += "<div class='ten'>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx+="<dl><dt class='col-xs-4'>9:34:25</dt><dd class='col-xs-4 fall'>7.80</dd><dd class='col-xs-4'>1500</dd></dl>";
             zx += "</div>";
             zx += "</div>";
             zx += "</div>";            
             zx += "</div>";
             zx += "</div>";

            $('.drag-box').append(zx);
            jqui();
}



//行情
$('#cj-hq').click(function(){
	if(sum()){
        var left = parseInt(Math.random()*(550-530+1)+530);
	    var top = parseInt(Math.random()*(280-220+1)+220);
        var width = 500;
        var height = 550;
        var zIndex = 1000;
		var js = $('.drag-box #hq');
		if (js.length == 1 || js.length > 1) {
			alert('该插件只能添加一个');
		}else{
			hq(left,top,width,height,zIndex);
		}
	}
	
    
});
function hq(left,top,width,height,zIndex){
    
    var hq = "<div class='draggable' id='hq_1' style='z-index:"+zIndex+";top:"+top+"px;left:"+left+"px;width:"+width+"px;height:"+height+"px;'>";
        hq += "<div class='resizable'><div class='head-title'>";
        hq += "<div class='d_input'></div>";
        hq += "<span class='move-sp' style='display:block'><label class='label'>行情</label><a class='move-x' href='javascript:void(0)'>x</a></span>";
        hq += "</div><div class='content'>";
        hq += "<table id='mmg'></table>";
        hq += "</div></div></div>";
        
    $('.drag-box').append(hq);  
    jqui();
    mmg();
}
//委托记录
$('#cj-wtjl').click(function(){
	var re = sum();
	if (re) {
		var left = parseInt(Math.random()*(550-530+1)+530);
        var top = parseInt(Math.random()*(280-210+1)+210);
        var width = 500;
        var height = 550;
        var zIndex = 1000;
	    wtjl(left,top,width,height,zIndex);
	}
    

});
function wtjl(left,top,width,height,zIndex){
    var wtjl = "<div class='draggable' id='wtjl_1' style='position:absolute;z-index:"+zIndex+";top:"+top+"px;left:"+left+"px;width:"+width+"px;height:"+height+"px;'>";  
        wtjl +="<div class='resizable'>";
        wtjl +="<div class='head-title'>";                       
        wtjl +="<div class='d_input'><!-- <input type='text' name=''>杭电证券 --></div>"; 
        wtjl +="<span class='move-sp' style='display:block'><label class='label'>委托记录</label><a class='move-x' href='javascript:void(0)'>x</a></span>"; 
        wtjl +="</div>"; 
        wtjl +="<div class='content'>";      
        wtjl +="<table class='table table-bordered trading-info-table'>"; 
        wtjl +="<tr>"; 
        wtjl +="<th>编号</th>"; 
        wtjl +="<th>证券账户</th>"; 
        wtjl +="<th>证券代码</th>"; 
        wtjl +="<th>证券名称</th>"; 
        wtjl +="<th>数量</th>"; 
        wtjl +="<th>方向</th>"; 
        wtjl +="<th>价格</th>"; 
        wtjl +="<th>状态</th>"; 
        wtjl +="<th>成交数量</th>"; 
        wtjl +="<th>成交均价</th>"; 
        wtjl +="<th>时间</th>"; 
        wtjl +="</tr>"; 
        wtjl +="<tr>"; 
        wtjl +="<td>&nbsp;</td>"; 
        wtjl +="<td>&nbsp;</td>"; 
        wtjl +="<td>&nbsp;</td>"; 
        wtjl +="<td>&nbsp;</td>"; 
        wtjl +="<td>&nbsp;</td>"; 
        wtjl +="<td>&nbsp;</td>"; 
        wtjl +="<td>&nbsp;</td>"; 
        wtjl +="<td>&nbsp;</td>";
        wtjl +="<td>&nbsp;</td>"; 
        wtjl +="<td>&nbsp;</td>"; 
        wtjl +="<td>&nbsp;</td>"; 
        wtjl +="</tr>"; 
        wtjl +="</table>"; 
        wtjl +="<nav aria-label='Page navigation' class='text-center'>"; 
        wtjl +="<ul class='pagination'>"; 
        wtjl +="<li><a href='#'>首页</a></li>"; 
        wtjl +="<li><a href='#' aria-label='Previous'>上一页</a></li>"; 
        wtjl +="<li><a href='#'>1</a></li>"; 
        wtjl +="<li><a href='#'>2</a></li>"; 
        wtjl +="<li><a href='#'>3</a></li>"; 
        wtjl +="<li><a href='#'>.....</a></li>"; 
        wtjl +="<li><a href='#'>9</a></li>"; 
        wtjl +="<li><a href='#'>10</a></li>"; 
        wtjl +="<li><a href='#' aria-label='Next'>下一页</a></li>"; 
        wtjl +="<li><a href='#'>尾页</a></li>"; 
        wtjl +="</ul>"; 
        wtjl +="</nav>"; 
        wtjl +="</div>"; 
        wtjl +="</div>"; 
        wtjl +="</div>"; 

       $('.drag-box').append(wtjl);  
       jqui();
}
//当前持仓
$('#cj-dqcc').click(function(){
    if (sum()) {
        var left = parseInt(Math.random()*(680-630+1)+630);
        var top = parseInt(Math.random()*(300-250+1)+250);
        var width = 500;
        var height = 550;
        var zIndex = 1000;
        dqcc(left,top,width,height,zIndex);                       
    }
    

});
function dqcc(left,top,width,height,zIndex){

        var dqcc = "<div class='draggable' id='dqcc_1' style='position:absolute;z-index:"+zIndex+";top:"+top+"px;left:"+left+"px;width:"+width+"px;height:"+height+"px;'>";
        dqcc += "<div class='resizable'>";
        dqcc += "<div class='head-title'>";
        dqcc += "<div class='d_input'>";
        dqcc += "<!-- <input type='text' name=''>杭电证券 --></div>";
        dqcc += "<span class='move-sp' style='display:block'><label class='label'>当前持仓</label><a class='move-x' href='javascript:void(0)'>x</a></span>";
        dqcc += "</div>";
        dqcc += "<div class='content'>";
        dqcc += "<table class='table table-bordered trading-info-table'>";
        dqcc += "<tr>";
        dqcc += "<th>账户</th><th>代码</th>";
        dqcc += "<th>名称</th><th>持仓量</th>";
        dqcc += "<th>可买数</th><th>可卖数</th>";
        dqcc += "<th>成本</th><th>最新价</th>";
        dqcc += "<th>市值</th><th>今日结算</th>";
        dqcc += "<th>今日浮盈</th><th>浮盈比例</th>";
        dqcc += "</tr><tr>";
        dqcc += "<td>&nbsp;</td><td>&nbsp;</td>";
        dqcc += "<td>&nbsp;</td><td>&nbsp;</td>";
        dqcc += "<td>&nbsp;</td><td>&nbsp;</td>";
        dqcc += "<td>&nbsp;</td><td>&nbsp;</td>";
        dqcc += "<td>&nbsp;</td><td>&nbsp;</td>";
        dqcc += "<td>&nbsp;</td><td>&nbsp;</td>";
        dqcc += "</tr></table>";
        dqcc += "<nav aria-label='Page navigation' class='text-center'>";
        dqcc += "<ul class='pagination'>";
        dqcc += "<li><a href='#'>首页</a></li>";
        dqcc += "<li><a href='#' aria-label='Previous'>上一页</a></li>";
        dqcc += "<li><a href='#'>1</a></li>";
        dqcc += "<li><a href='#'>2</a></li>";
        dqcc += "<li><a href='#'>3</a></li>";
        dqcc += "<li><a href='#'>.....</a></li>";
        dqcc += "<li><a href='#'>9</a></li>";
        dqcc += "<li><a href='#'>10</a></li>";  
        dqcc += "<li><a href='#' aria-label='Next'>下一页</a></li>";
        dqcc += "<li><a href='#'>尾页</a></li>";
        dqcc += "</ul>";
        dqcc += "</nav></div></div></div>";
        $('.drag-box').append(dqcc);  
        jqui();
}
//股票池
$('#cj-gpc').click(function(){
  if (sum()) {
  	var left = parseInt(Math.random()*(850-730+1)+530);
    var top = parseInt(Math.random()*(310-280+1)+280);
    var width = 300;
    var height = 400;
    var zIndex = 1000;
    gpc(left,top,width,height,zIndex);
  }
});
function gpc(left,top,width,height,zIndex){
    var gpc = "<div class='draggable' id='gpc_1' style='position:absolute;z-index:"+zIndex+";top:"+top+"px;left:"+left+"px;width:"+width+"px;height:"+height+"px;'>";
    gpc += "<div class='resizable'>";
    gpc += "<div class='head-title'>";
    gpc += "<div class='d_input'><!-- <input type='text' name=''>杭电证券 --></div>";
    gpc += "<span class='move-sp' style='display:block'>";
    gpc += "<label class='label'>股票池</label><a class='move-x' href='javascript:void(0)'>x</a></span>";
    gpc += "</div>";
    gpc += "<div class='content'>";
    gpc += "<table class='table table-bordered trading-info-table'>";
    gpc += "<tr>";
    gpc += "<th>交易单元</th><th>代码</th>";
    gpc += "<th>名称</th><th>可用数量</th>";
    gpc += "</tr><tr>";
    gpc += "<td>&nbsp;</td><td>&nbsp;</td>";
    gpc += "<td>&nbsp;</td><td>&nbsp;</td>";
    gpc += "</table>";
    gpc += "</div>";
    gpc += "</div>";
    gpc += "</div>";
    $('.drag-box').append(gpc);  
    jqui();
}


//账户
$('#cj-zh').click(function(){
	if (sum()) {
		var left = parseInt(Math.random()*(750-650+1)+550);
        var top = parseInt(Math.random()*(310-280+1)+280);
        var width = 280;
        var height = 400;
        var zIndex = 1000;
        zh(left,top,width,height,zIndex);
        
                                                     
	}

});
function zh(left,top,width,height,zIndex){
    var zh = "<div class='draggable' id='zh_1' style='position:absolute;z-index:"+zIndex+";top:"+top+"px;left:"+left+"px;width:"+width+"px;height:"+height+"px;'>";
            zh += "<div class='resizable'>";
            zh += "<div class='head-title'>";
            zh += "<div class='d_input'><!-- <input type='text' name=''>杭电证券 --></div>";
            zh += "<span class='move-sp' style='display:block'><label class='label'>账户</label><a class='move-x' href='javascript:void(0)'>x</a></span>";
            zh += "</div>";
            zh += "<div class='content'>";
            zh += "<table style='width: 100%;margin:0 auto;text-align: center;border-top:2px solid #bb0000;'>";
            zh += "<tr style='height: 50px;'>";
            zh += "<td style='width: 40%;'>交易员：</td>";
            zh += "<td style='width: 60%;'>001</td>";
            zh += "</tr>";
            zh += "<tr style='height: 50px;'>";
            zh += "<td style='width: 40%;'>账户余额：</td>";
            zh += "<td style='width: 60%;'>￥50000.10</td>";
            zh += "</tr>";
            zh += "<tr style='height: 50px;'>";
            zh += "<td style='width: 40%;'>持仓市值：</td>";
            zh += "<td style='width: 60%;'>￥3000.10</td>";
            zh += "</tr>";
            zh += "<tr style='height: 50px;'>";
            zh += "<td style='width: 40%;'>当前浮盈：</td>";
            zh += "<td style='width: 60%;'>￥7.00</th>";
            zh += "</tr>";
            zh += "<tr style='height: 50px;'>";
            zh += "<td style='width: 40%;'>今日盈亏：</td>";
            zh += "<td style='width: 60%;'>￥0.00</th>";
            zh += "</tr>";
            zh += "<tr style='height: 50px;'>";
            zh += "<td style='width: 40%;'>停机位：</td>";
            zh += "<td style='width: 60%;'>￥1000.00</td>";
            zh += "</tr>";
            zh += "</table>";
            zh += "</div>";
            zh += "</div>";
            zh += "</div>";
            zh += "</div>";
            $('.drag-box').append(zh);  
            jqui();
}

//今日成交
$('#cj-jrcj').click(function(){
    if (sum()) {
        var left = parseInt(Math.random()*(880-730+1)+730);
        var top = parseInt(Math.random()*(250-180+1)+180);
        var width = 500;
        var height = 550;
        var zIndex = 1000;
        jrcj(left,top,width,height,zIndex);
         
                            
    }
    

});

function jrcj(left,top,width,height,zIndex){
    var jrcj = "<div class='draggable' id='jrcj_1' style='position:absolute;z-index:"+zIndex+";top:"+top+"px;left:"+left+"px;width:"+width+"px;height:"+height+"px;'>";
        jrcj += "<div class='resizable'>";
        jrcj += "<div class='head-title'>";
        jrcj += "<div class='d_input'>";
        jrcj += "<!-- <input type='text' name=''>杭电证券 --></div>";
        jrcj += "<span class='move-sp' style='display:block'><label class='label'>今日成交</label><a class='move-x' href='javascript:void(0)'>x</a></span>";
        jrcj += "</div>";
        jrcj += "<div class='content'>";
        jrcj += "<table class='table table-bordered trading-info-table'>";
        jrcj += "<tr>";
        jrcj += "<th>账户</th><th>代码</th>";
        jrcj += "<th>名称</th><th>持仓量</th>";
        jrcj += "<th>可买数</th><th>可卖数</th>";
        jrcj += "<th>成本</th><th>最新价</th>";
        jrcj += "<th>市值</th><th>今日结算</th>";
        jrcj += "<th>今日浮盈</th><th>浮盈比例</th>";
        jrcj += "</tr><tr>";
        jrcj += "<td>&nbsp;</td><td>&nbsp;</td>";
        jrcj += "<td>&nbsp;</td><td>&nbsp;</td>";
        jrcj += "<td>&nbsp;</td><td>&nbsp;</td>";
        jrcj += "<td>&nbsp;</td><td>&nbsp;</td>";
        jrcj += "<td>&nbsp;</td><td>&nbsp;</td>";
        jrcj += "<td>&nbsp;</td><td>&nbsp;</td>";
        jrcj += "</tr></table>";
        jrcj += "<nav aria-label='Page navigation' class='text-center'>";
        jrcj += "<ul class='pagination'>";
        jrcj += "<li><a href='#'>首页</a></li>";
        jrcj += "<li><a href='#' aria-label='Previous'>上一页</a></li>";
        jrcj += "<li><a href='#'>1</a></li>";
        jrcj += "<li><a href='#'>2</a></li>";
        jrcj += "<li><a href='#'>3</a></li>";
        jrcj += "<li><a href='#'>.....</a></li>";
        jrcj += "<li><a href='#'>9</a></li>";
        jrcj += "<li><a href='#'>10</a></li>";  
        jrcj += "<li><a href='#' aria-label='Next'>下一页</a></li>";
        jrcj += "<li><a href='#'>尾页</a></li>";
        jrcj += "</ul>";
        jrcj += "</nav></div></div></div>";
        $('.drag-box').append(jrcj);  
        jqui(); 
}









//计算插件个数
function sum(){
	var len = $('.drag-box .draggable');
	if (len.length >= 20) {
		alert('最多只能添加20个插件！');
		return false;
	}else{
		return true;
	}
}





});