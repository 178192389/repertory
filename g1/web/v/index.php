<!--顶部-->
<div class="container-fluid platform-top">
  <div class="pull-left"><a href="index.html"><img src="images/platform-logo.png"></a></div>
    <div class="pull-left platform-top-title">投资管理平台</div>
    <div class="pull-right">
      <ul>
          <li class="platform-user-icon">你好：admin</li>
            <li class="platform-out-icon"><a href="?/logout/">退出系统</a></li>
        </ul>
    </div>
</div>
<!-- 菜单 -->
<div class="main-sidebar">
  <div class="sidebar">
  <ul class="sidebar-menu">   
    <li class="treeview"><a class="menu-icon0" href="trading-platform.html">买入</a></li>
      <li class="treeview"><a class="menu-icon01" href="trading-platform.html">卖出</a></li>
      <li class="treeview"><a class="menu-icon02" href="trading-platform.html">撤单</a></li>
    <li class="treeview">
    <a class="menu-icon03" href="javascript:void(0)">查询</a>
    <ul class="treeview-menu" style="display:none;">
          <li><a href="inquire.html">资金持仓</a></li>
          <li><a href="inquire.html">当日委托</a></li>
          <li><a href="inquire.html">当日成交</a></li>
          <li><a href="inquire.html">历史委托</a></li>
          <li><a href="inquire.html">历史成交</a></li>
          <li><a href="inquire.html">交割单</a></li>
          <li><a href="inquire.html">资金流水</a></li> 
    </ul>
    </li>
      <li class="treeview"><a class="menu-icon04  treeview-menu_2" href="javascript:void(0)">系统设置</a>
        <ul class="treeview-menu" style="display:none;">
           <li><a href="kjj.html">快捷键</a></li>
        </ul>
      </li> 
      <li class="treeview"><a class="menu-icon05" href="?/logout/">退出系统</a></li> 
  </ul>
  </div>
  <div class="search">
     <input type="text" name="">
  </div>
</div>
<!--内容-->
<div class="container-fluid platformbg" >
  <div class="platform-info">
      <div class="platform-info-btn">
          
            <input type="button" class="bj"  id="ena" onclick="ena()">
            <!-- <img src="images/u=4158718780,1246227728&fm=27&gp=0.jpg" class="bj"> -->
            <input type="button" class="bc" value="取消" onclick="dra()" style='display: none;'>
            <input type="button" class="bc" value="保存" onclick="bc()" style='display: none;'>
        </div>
        <div class="drag-box" onselectstart="return false">
          
            
               <div class="draggable" id="zx" style='left: 1px;top: 0;'>
                    <div class="resizable">
                        <div class="head-title">                       
                            <div class="d_input"><span class="bt-zt">杭电证券</span></div>
                            <span class="move-sp"><label class="label">自选</label><a class="move-x" href="javascript:void(0)">x</a></span>
                        </div>
                        <div class="content">
                            <div class="move-puy">
                                <form>
                                    <input type="text" name="">
                                    <input name="price" id="price" placeholder='请输入价格'>
                                    <input name="number" class="number" placeholder='请输入数量'><input type="button" class="number-qb"  value="全部">
                                    <input type="button" class="a1" value="买入"><input type="button" class="a1" value='卖出'>
                                </form>
                            </div>
                            <div class="puy-right">
                                <ul>
                                    <li style="color: #32CD32;">
                                       <span class="li-hq">最新:&nbsp;&nbsp;<label>9.8</label></span>
                                       <span class="li-hq">涨幅:&nbsp;&nbsp;<label>9.8</label></span>
                                       <span class="li-hq">涨跌:&nbsp;&nbsp;<label>9.8</label></span>
                                    </li>
                                    <li style="color: #000080;">
                                       <span class="li-hq">最高:&nbsp;&nbsp;<label>9.8</label></span>
                                       <span class="li-hq">昨所:&nbsp;&nbsp;<label>9.8</label></span>
                                       <span class="li-hq">涨停:&nbsp;&nbsp;<label>9.8</label></span>
                                    </li>
                                    <li style="color: #8B0000;">
                                       <span class="li-hq">最低:&nbsp;&nbsp;<label>9.8</label></span>
                                       <span class="li-hq">开盘:&nbsp;&nbsp;<label>9.8</label></span>
                                       <span class="li-hq">跌停:&nbsp;&nbsp;<label>9.8</label></span>
                                    </li>
                                </ul>
                                
                            </div>  
                            <div class="puy-bottom">
                               <div class="daily-limit">
                                    <div class="daily-limit-list">
                                        <dl class="row">
                                            <dt class="col-xs-4">卖一</dt>
                                            <dd class="col-xs-4 rise">7.80</dd>
                                            <dd class="col-xs-4">1500</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">卖二</dt>
                                            <dd class="col-xs-4 rise">7.90</dd>
                                            <dd class="col-xs-4">1220</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">卖三</dt>
                                            <dd class="col-xs-4 rise">8.05</dd>
                                            <dd class="col-xs-4">1360</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">卖四</dt>
                                            <dd class="col-xs-4 rise">8.00</dd>
                                            <dd class="col-xs-4">1280</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">卖五</dt>
                                            <dd class="col-xs-4 rise">9.08</dd>
                                            <dd class="col-xs-4">1586</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">卖六</dt>
                                            <dd class="col-xs-4 rise">9.10</dd>
                                            <dd class="col-xs-4">6880</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">卖七</dt>
                                            <dd class="col-xs-4 rise">9.12</dd>
                                            <dd class="col-xs-4">5581</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">卖八</dt>
                                            <dd class="col-xs-4 rise">9.15</dd>
                                            <dd class="col-xs-4">2151</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">卖九</dt>
                                            <dd class="col-xs-4 rise">9.16</dd>
                                            <dd class="col-xs-4">1702</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">卖十</dt>
                                            <dd class="col-xs-4 rise">9.17</dd>
                                            <dd class="col-xs-4">1347</dd>
                                        </dl>
                                    </div> 
                               
                                   <div class="daily-limit-list">
                                        <dl class="row">
                                            <dt class="col-xs-4">买十</dt>
                                            <dd class="col-xs-4 fall">9.17</dd>
                                            <dd class="col-xs-4">1347</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">买九</dt>
                                            <dd class="col-xs-4 fall">9.16</dd>
                                            <dd class="col-xs-4">1702</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">买八</dt>
                                            <dd class="col-xs-4 fall">9.15</dd>
                                            <dd class="col-xs-4">2151</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">买七</dt>
                                            <dd class="col-xs-4 fall">9.12</dd>
                                            <dd class="col-xs-4">5581</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">买六</dt>
                                            <dd class="col-xs-4 fall">9.10</dd>
                                            <dd class="col-xs-4">6880</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">买五</dt>
                                            <dd class="col-xs-4 fall">9.08</dd>
                                            <dd class="col-xs-4">1586</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">买四</dt>
                                            <dd class="col-xs-4 fall">8.00</dd>
                                            <dd class="col-xs-4">1280</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">买三</dt>
                                            <dd class="col-xs-4 fall">8.05</dd>
                                            <dd class="col-xs-4">1360</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">买二</dt>
                                            <dd class="col-xs-4 fall">7.90</dd>
                                            <dd class="col-xs-4">1220</dd>
                                        </dl>
                                        <dl class="row">
                                            <dt class="col-xs-4">买一</dt>
                                            <dd class="col-xs-4 fall">7.80</dd>
                                            <dd class="col-xs-4">1500</dd>
                                        </dl>
                                    </div>
                                </div>
                               <div class="ten">
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    <dl>
                                        <dt class="col-xs-4">9:34:25</dt>
                                        <dd class="col-xs-4 fall">7.80</dd>
                                        <dd class="col-xs-4">1500</dd>
                                    </dl>
                                    
                               </div>
                            </div>
                        </div>
                    </div>
               </div>

                <div class="draggable" id="wtjl" style='left: 33.3%;top: 0px;'>
                    <div class="resizable" >
                        <div class="head-title">                       
                            <div class="d_input"><!-- <input type="text" name="">杭电证券 --></div>
                            <span class="move-sp"><label class="label">委托记录</label><a class="move-x" href="javascript:void(0)">x</a></span>
                        </div>
                        <div class="content">     
                        <table class="table table-bordered trading-info-table">
                            <tr>
                                <th>编号</th>
                                <th>证券账户</th>
                                <th>证券代码</th>
                                <th>证券名称</th>
                                <th>数量</th>
                                <th>方向</th>
                                <th>价格</th>
                                <th>状态</th>
                                <th>成交数量</th>
                                <th>成交均价</th>
                                <th>时间</th>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </table>
                            <nav aria-label="Page navigation" class="text-center">
                                <ul class="pagination">
                                    <li><a href="#">首页</a></li>
                                    <li><a href="#" aria-label="Previous">上一页</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">.....</a></li>
                                    <li><a href="#">9</a></li>
                                    <li><a href="#">10</a></li>
                                    <li><a href="#" aria-label="Next">下一页</a></li>
                                    <li><a href="#">尾页</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            <div class="draggable" id="dqcc" style='left: 66.6%;top: 0px;'>
                <div class="resizable">
                    <div class="head-title">                       
                        <div class="d_input"><!-- <input type="text" name="">杭电证券 --></div>
                        <span class="move-sp"><label class="label">当前持仓</label><a class="move-x" href="javascript:void(0)">x</a></span>
                    </div>
                    <div class="content">
                            <table class="table table-bordered trading-info-table">
                                <tr>
                                    <th>账户</th>
                                    <th>代码</th>
                                    <th>名称</th>
                                    <th>持仓量</th>
                                    <th>可买数</th>
                                    <th>可卖数</th>
                                    <th>成本</th>
                                    <th>最新价</th>
                                    <th>市值</th>
                                    <th>今日结算</th>
                                    <th>今日浮盈</th>
                                    <th>浮盈比例</th>
                                </tr>
                                <tr class="tr right_tr">
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                            <nav aria-label="Page navigation" class="text-center">
                                <ul class="pagination">
                                    <li><a href="#">首页</a></li>
                                    <li><a href="#" aria-label="Previous">上一页</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">.....</a></li>
                                    <li><a href="#">9</a></li>
                                    <li><a href="#">10</a></li>
                                    <li><a href="#" aria-label="Next">下一页</a></li>
                                    <li><a href="#">尾页</a></li>
                                </ul>
                            </nav>
                        </div>
                </div>
            </div>
            

            <div class="draggable" id="hq" style='left: 1px;top: 419px;'>
                <div class="resizable">
                    <div class="head-title">                       
                        <div class="d_input">

                        </div>
                        <span class="move-sp"><label class="label">行情</label><a class="move-x" href="javascript:void(0)">x</a></span>
                    </div>
                    <div class="content" style='overflow: hidden;'>
                            <table id="mmg"></table>
                              
                           
                        </div>
                </div>
            </div>


            <div class="draggable" id="jrcj" style='left: 33.3%;top: 419px;'>
                <div class="resizable">
                   <div class="head-title">                       
                        <div class="d_input"><!-- <input type="text" name="">杭电证券 --></div>
                        <span class="move-sp"><label class="label">今日成交</label><a class="move-x" href="javascript:void(0)">x</a></span>
                    </div>
                    <div class="content">
                            <table class="table table-bordered trading-info-table">
                                <tr>
                                    <th>账户</th>
                                    <th>代码</th>
                                    <th>名称</th>
                                    <th>持仓量</th>
                                    <th>可买数</th>
                                    <th>可卖数</th>
                                    <th>成本</th>
                                    <th>最新价</th>
                                    <th>市值</th>
                                    <th>今日结算</th>
                                    <th>今日浮盈</th>
                                    <th>浮盈比例</th>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                            <nav aria-label="Page navigation" class="text-center">
                                <ul class="pagination">
                                    <li><a href="#">首页</a></li>
                                    <li><a href="#" aria-label="Previous">上一页</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">.....</a></li>
                                    <li><a href="#">9</a></li>
                                    <li><a href="#">10</a></li>
                                    <li><a href="#" aria-label="Next">下一页</a></li>
                                    <li><a href="#">尾页</a></li>
                                </ul>
                            </nav>
                        </div>
                </div>
            </div>

                    <div class="draggable" id="gpc" style='width: 16.65%;left: 66.6%;top: 419px;'>
                        <div class="resizable">
                            <div class="head-title">                       
                                <div class="d_input"><!-- <input type="text" name="">杭电证券 --></div>
                                <span class="move-sp"><label class="label">股票池</label><a class="move-x" href="javascript:void(0)">x</a></span>
                            </div>
                            <div class="content">
                                <table class="table table-bordered trading-info-table">
                                    <thead>
                                        <tr>
                                           <th>交易单元</th>
                                           <th>代码</th>
                                           <th>名称</th>
                                           <th>可用数量</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                           <td>&nbsp;</td>
                                           <td>&nbsp;</td>
                                           <td>&nbsp;</td>
                                           <td>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                    <div class="draggable" id="zh" style='width:16.65%;left: 83.25%;top: 419px;'>
                        <div class="resizable">
                            <div class="head-title">                       
                                <div class="d_input"><!-- <input type="text" name="">杭电证券 --></div>
                                <span class="move-sp"><label class="label">账户</label><a class="move-x" href="javascript:void(0)">x</a></span>
                            </div>
                            <div class="content">
                                <table style='width: 100%;margin:0 auto;text-align: center;border-top:2px solid #bb0000;'>
                                    
                                        <tr style='height: 50px;'>
                                           <td style='width: 40%;'>交易员：</th>
                                           <td style='width: 60%;'>001</th>
                                        </tr>
                                        <tr style='height: 50px;'>
                                           <td style='width: 40%;'>账户余额：</th>
                                           <td style='width: 60%;'>￥50000.10</th>
                                        </tr>
                                        <tr style='height: 50px;'>
                                           <td style='width: 40%;'>持仓市值：</th>
                                           <td style='width: 60%;'>￥3000.10</th>
                                        </tr>
                                        <tr style='height: 50px;'>
                                           <td style='width: 40%;'>当前浮盈：</th>
                                           <td style='width: 60%;'>￥7.00</th>
                                        </tr>
                                        <tr style='height: 50px;'>
                                           <td style='width: 40%;'>今日盈亏：</th>
                                           <td style='width: 60%;'>￥0.00</th>
                                        </tr>
                                        <tr style='height: 50px;'>
                                           <td style='width: 40%;'>停机位：</th>
                                           <td style='width: 60%;'>￥1000.00</th>
                                        </tr>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>       
        </div>
        <div id="cjxs">
                <div id="cj-title">
                    <span>插件库</span>
                </div>
                <div id="cj-body">
                    <table>
                        <tr>
                            <th><a href="javascript:void(0)" id="cj-zx">自选</a></th>
                            <th><a href="javascript:void(0)" id="cj-hq">行情</a></th>
                        </tr>
                        <tr>
                            <th><a href="javascript:void(0)" id="cj-wtjl">委托记录</a></th>
                            <th><a href="javascript:void(0)" id="cj-dqcc">当前持仓</a></th>
                        </tr>
                        <tr>
                            <th><a href="javascript:void(0)" id="cj-jrcj">今日成交</a></th>
                            <th><a href="javascript:void(0)" id="cj-gpc">股票池</a></th>
                        </tr>
                        <tr>
                            <th><a href="javascript:void(0)" id="cj-zh">账户</a></th>
                            <th><a href="javascript:void(0)" id=""></a></th>
                        </tr>
                    </table>
                </div>
            </div>      
    </div>
</div>

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="dist/sidebar-menu.js"></script>
<script src="js/control.js"></script>

<script src="js/mmGrid.js"></script>
<script src="js/mmPaginator.js"></script>
<script src='js/shares.js'></script>
<!-- 右键弹出 -->
<script src="http://www.zhangxinxu.com/study/js/jquery-smartMenu.js"></script>

<!-- 拖动 缩放插件 -->
<script src="js/jquery.ui.js"></script>
<link rel="stylesheet" type="text/css" href="css/jquery-ui.css"> 
<script>
   $.sidebarMenu($('.sidebar-menu'));
</script>
<script type="text/javascript">
  // 删除 x
  $(".drag-box").on('click','.move-x',function() {

    this.parentNode.parentNode.parentNode.parentNode.remove();

  });
  
//   // 右键 弹出
  var bodyMenuData = [];
//   var data = [
//     [{
//         text: "删除",
//         func: function() {
//             $(this).css("border", "5px solid #34538b");
        
//         }
//     }, {
//         text: "详情",
//         func: function() {
//             $(this).css("padding", "10px");
//         }
//     }], [{
//         text: "买入",
//         func: function() {
//             $(this).css("background-color", "#beceeb");
//         }
//     },
//     {
//         text: "卖出",
//         func: function() {
//             var src = $(this).attr("src");
//             window.open(src.replace("/s512", ""));    
//         }
//     }]
// ];
// $(".right_tr").smartMenu(data,{
//     name:"tr",
//     beforeShow: function() {
//         $(this).css('background','#FDF5E6');
//         $(this).siblings('.right_tr').css('background','#ffffff');
//     }
// });
$("body").smartMenu(bodyMenuData, {
    name: "body"    
});
</script>


<script type="text/javascript">
    // 编辑
    function ena(){  
       $('#ena').css("display","none");
       $('.bc').css("display","block");
       $('.move-sp').css("display","block");
       $('#cjxs').css("display","block");
        
       $( "#cjxs" ).draggable({containment:'.drag-box'});
       jqui();
    }
    // 取消
    function dra(){
        $('#ena').css("display","block");
        $('.bc').css("display","none");
        $('#cjxs').css("display","none");
        $( ".resizable" ).resizable( "destroy" );
        $( ".draggable" ).draggable( "destroy" );
        window.location.reload();
    }
    // 保存
    function bc(){
    
       var list= $('.drag-box .draggable');
       var arr = new Array();
       var url ='?/home/checkSet/';
       for(var i=0;i<list.length;i++){
          // alert(aa[i].offsetHeight); //获取高度
          // alert(aa[i].offsetWidth);  //获取宽度
          // alert(aa[i].offsetTop);   //获取top值
          // alert(aa[i].offsetLeft);  //获取left值
            arr[i] = [list[i].id,list[i].offsetWidth,list[i].offsetHeight,list[i].offsetTop,list[i].offsetLeft,list[i].style['z-index']];
       }
        
        tjajax(arr,url,'get');
    }
    
 
    $(document).keydown(function(e){

        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e.ctrlKey && e.keyCode==65){ // 按 Esc 
            alert('你按了Ctrl+A键');
        }
        if(e && e.keyCode==113){
            alert('你按了F2键');
        } 
        if(e && e.keyCode==13){ 
            alert('你按了enter键');
        }
    });
</script>
<script type="text/javascript">
   function jqui(){
        var tmp; 
        var zIndex = '1';
        $('.resizable').each(function() { 
            tmp = this.parentNode.style['z-index']; 
            if (tmp > zIndex) zIndex = tmp; 
        });

        $(".draggable" ).draggable({
            snap: '.draggable',
            containment: ".drag-box",
            cursor: "move",
            stack: ".draggable",   
            snapMode: "outer",        
        });
        $(".resizable").resizable({
            containment: "document",
            handles:'all',
            autoHide: true,
            stop: function( event, ui ) {
                this.parentNode.style['width'] = ui.size['width']+'px';
                this.parentNode.style['height'] = ui.size['height']+'px';
            },
            start: function( event, ui ) {
                this.parentNode.style['width'] = ui.size['width']+'px';
                this.parentNode.style['height'] = ui.size['height']+'px';
                $(this).css('z-index',++zIndex);
            }
        });
   }
   function tjajax(data,url,methed){
      // document.write(data)
      $.ajax({
        type:'post',
        url: url,
        data:{'st':data},
        // dataType:'json',
        success: function(result){
           document.write(result)
        },
        error:function(a){
            alert(a);
        }
      });
   }
</script>