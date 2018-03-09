<?php  include_once 'def.php'; ?>



  <meta name="viewport" content="width=device-windth,initial-scale=1.0">

<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/admin.js"></script>
<script src="https://cdn.bootcss.com/analytics.js/2.9.1/analytics.js"></script>








<div id="wrapper">
     <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="adjust-nav">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
              
                 <a href="?/admin/admin_view/admin">
                  <img src="./images/logo.png" height="70" >
                 </a>
            </div>
              
             <span class="logout-spn">
            <!--   <a href="" style="color:#fff;" onClick="if(!confirm('是否确认退出？'))return false;"  class=""> 退出</a> -->
               <a href="?/logout/" style="color:#fff;" onClick="if(!confirm('是否确认退出？'))return false;">LOGOUT</a>
            </span>
        </div>

    </div>
    <!-- menu  -->
    <nav class="navbar-default navbar-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav " id="main-menu">
             
            <?php 
              /*  function &c(){
                  return LOAD(APP_C.'admin');
                }*/
                 function &m(){
                      return LOAD(APP_M.'user_m');
                  }
              
               // echo '<pre>'; print_r($menu_arr);
            $parent_node = null;
           // $parent_child_num = 0;
          // $group_auth= m()->is_auth(); 
            $group_auth= m()->is_auth(); 
              // print_r( $group_auth);
            foreach ($menu_arr as $key => $val) {
         
             foreach ($group_auth as $group_id =>$group_val) {
                  //print_r($group_auth);
                if($val[2]==$group_id || $group_auth==1){
              
                /*  if($parent_child_num){
                    echo "</ul></li>";
                  }*/
                    //echo $group_auth; 

              $parent = $val[0];
              if($parent != $parent_node){  

                  echo "<li class='active '>
                  <a href='#'><i class='fa fa-{$val[4]} fa-2x'></i> {$val[0]}<em class='fa  pull-right'></em></a>
                  <ul class='nav nav-offset' >";
                  $parent_child_num = 0;
                  $parent_node = $parent;

                  foreach ($menu_arr as $k => $v) {
                     
                        foreach ($group_auth as $group_id =>$group_val) {
                         if($v[2]==$group_id || $group_auth==1){

                              if( $v[0]==$parent_node ){

                                if($parent_child_num >0){

                                  if($v[3]==$page){
                                      echo "<li class='active-li'>
                                      <a href='?/admin/admin_view/$v[3]'><i class='fa fa-{$v[4]} fa-2x'></i> {$v[1]}</a>
                                    </li>";
                                  }else{
                                      echo "<li>
                                      <a href='?/admin/admin_view/$v[3]'><i class='fa fa-{$v[4]} fa-2x'></i> {$v[1]}</a>
                                    </li>";

                                  }
                                   
                                }

                                $parent_child_num++;
                              }

                          }
                         }

                  }
               echo "</ul>";
                }

                    
              }
             }

            }
          ?>
            </ul>
        </div>
    </nav>

    <!-- /. NAV SIDE  -->
    <div id="page-wrapper">
        <div id="page-inner">
            <div class="row">
                <div class="col-md-12">
                 <?php

                   // print_r($group_auth_arr);
                 // echo     $group_auth = json_encode($group_auth_arr);
                

              // $group_auth= json_encode($group_auth_arr);
                  //  print_r($group_auth) ;

                 ?>




              <?php ECHO_V($al_content) ;//echo '<pre>'; print_r($list_arr);  ?>





                </div>
            </div>              
             <!-- /. ROW  -->
              <hr>
          
             <!-- /. ROW  -->           
        </div>
         <!-- /. PAGE INNER  -->
        </div>
     <!-- /. PAGE WRAPPER  -->

         
</div>
</div>
</div>
</div>
<div class="footer">
            <div class="row">
               <div class="col-lg-12">
                <a href="" style="color:#fff;">极速交易系统</a>
                </div>
            </div>
   </div>

</body>


















































<!-- 
  <header class="navbar navbar-inverse navbar-fixed-top ">
      <div class="navbar-header ">
        <button class="navbar-toggle" data-toggle="collapse" data-target="#myheader">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
       <div class="navbar-header" >
             <a href="?/admin/admin_view/admin"><img src="./images/logo.png" height="46" ></a>
       </div>
      </div>

        <div class="collapse navbar-collapse " id="myheader" >
         <ul class="nav navbar-nav " >
            
           <li><a class="sub_a" href="">资产管理</a></li>
           <li><a class="sub_a" href="">用户管理</a></li>
           <li><a class="sub_a" href="">交易监控</a></li>
           <li><a class="sub_a" href="">其它...</a></li>
            <li> 
               <form class="navbar-form">
                   <input class="form-control" placeholder="Search" type="text">
               </form>
             </li> 
         </ul>
       
        <ul class="nav navbar-nav navbar-right" >
          <li><a href="" class="glyphicon glyphicon-user"></a></li>
           <li><a href="" onClick="if(!confirm('是否确认退出？'))return false;"  class="glyphicon glyphicon-off"> 退出</a></li>      
        </ul>
      </div>
    </header> -->
  
   <!-- <div class="row ">
      <aside class="col-sm-3 col-md-2 " id="aside">
        <div class="sidebar " >
         
             <?php 
               /* foreach ($menu_arr as $key => $val) {
                  echo  " <ul class='nav '><li class='active '><a href='#'><i class='fa fa-{$val[2]} fa-2x'></i> {$val[0]}<em class='fa fa-angle-right pull-right'></em></a><ul class='nav nav-offset'> ";
   
                   for($i=3;$i<count($val);$i++){
                       echo " <li><a href='?/admin/admin_view/{$val[$i][2]}'><i class='fa fa-{$val[$i][3]} fa-2x'></i> {$val[$i][0]}</a></li>";
                     }
               echo "</ul/></li> </ul>";
                }*/
              ?>
          
        </div>
     
       
      
   </aside>
       <div class="col-sm-9 col-md-10 " style="padding-top:60px; ">
        
   
        <?php// ECHO_V($al_content);//echo '<pre>'; print_r($list_arr); ?>
   
          
      </div>
             
        </div>
   
   
   
           
      </div>      
    </div>
   </section> -->
