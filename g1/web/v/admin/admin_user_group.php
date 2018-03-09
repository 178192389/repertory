      <ul class="breadcrumb ">
        <li><a  class="glyphicon  glyphicon-home" href="?/admin/admin_view/admin"></a></li>
        <li><a href="javascript:history.back();">上一界面</a></li>
        <li class="active">权限管理</li>
      </ul>


               <!-- Nav tabs -->
  <ul class="nav nav-tabs alert-info " role="tablist">
    <li role="presentation" class="active"><a href="#user_group" aria-controls="user_group" role="tab" data-toggle="tab">用户组列表</a></li>
    <li role="presentation"><a href="#add_group" aria-controls="add_group" role="tab" data-toggle="tab">添加用户组</a></li>
   
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
  <BR/>
    <div role="tabpanel" class="tab-pane active" id="user_group">

        <table class="table table-striped table-hover ">
          <tr style="cursor:pointer;">
            <th>
              <span  id="selectAll">全选</span>
              <span id="reverse">反选</span>
              <span id="unSelect">不选</span>
            </th>
            <th>组序号</th>
            <th>组名称</th>
            <th>操作</th>
          </tr>
         <?php

         function group_tb(){
            $sql_str = "select * from group_tb;";
            $rows = App::db()->execAll($sql_str,array());
            return $rows;
         }
         $group_data =  group_tb();


         //include_once 'def.php';
        // echo '<pre>';
          //print_r( $group_data);
          foreach ($group_data as $key => $val) {
            echo " <tr class=' tr-box'>
                   <td> <input type='checkbox'  name='list[]'' value=''/></td>
                   <td>{$val['group_id']}</td>
                   <td>{$val['group_name']}</td>
                   <td>
                    <a href='?admin/admin_view/admin_group_edit/{$val['group_id']}' class=' btn-sm btn-info'  onClick='edit(this)'>编辑</a> 
                    <a href='' class='btn-sm btn-danger'>移除</a>  
                    </td>";

                  
                      
                 echo "</tr>";
                 
          }
          
         ?> 
      </table>  
    </div>

    <?php 
      /*  function &c(){
          return LOAD(APP_C.'admin');
        }*/
        /* function &m(){
              return LOAD(APP_M.'user_m');
          }*/

    ?>

    <div role="tabpanel" class="tab-pane" id="add_group">
                    
      <div class="panel panel-success">
            <div class="panel-heading">
                <Strong>添加用户组</Strong>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                    <form action="?/admin/admin_view/admin_user_group" method="post" role='form'>

                        <div class="form-group has-success">
                            <label class="control-label" for="inputSuccess">角色名称:</label>
                            <input class="form-control" name="group_name" type="text"  value="" >
                        </div>
             
                     <ul class='nav'  >
                     <?php 
                  //  echo '<pre>' ;  print_r($menu_arr);
                        foreach ($group_auth_arr as $key => $val) {
                   echo"<li class='list-inline >
                                   <input type='checkbox' class='group_opt ' name='auth[$key]' value='{$val}'> <Strong class='text-info'>{$val}</strong>
                         </li> ";

                             
                           
                        }
                       
                      ?>
                      </ul>  
                       <br/> 
                       <button class="btn btn-success" type="submit" name="insert_sub" >确认添加</button>   
                  </form> 
                </div>
              </div>
            </div>
                                    
   
 

 <script>
  $(function(){
    $('.group_opt').click(function(){
   //  alert($(this).is(':checked'));
       if($(this).is(':checked')){
         $(this).siblings('ul').children('label').children(':checkbox').prop('checked',true); 
          // $(this).siblings('ul').children('label').children('li').removeClass('none');
       }else{
        $(this).siblings('ul').children('label').children(':checkbox').prop('checked',false);
       // $(this).siblings('ul').children('label').children('li').addClass('none');
       }


    });
     $('.input_one').click(function(){

      if($(this).is(':checked')){
         $(this).parent('label').parent('ul').siblings('.group_opt').prop('checked',true); 
         }else{
        $(this).parent('label').parent('ul').siblings('.group_opt').prop('checked',false); 
         }
     })

   
})
 </script>    


<!-- 编辑 权限-->
<!-- 
<div class="modal fade" id="edit">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button data-dismiss="modal"  class="close" aria-label="Close">&times;</button>
         <Strong><span class="label label-info">权限分配</span></Strong>
      </div>
     <form action="?/admin/admin_view/admin_user_group" method="post" class="form-horizontal">
         <div class="modal-body"> 
         
        <label class="control-label">菜单分配：</label>
            <?php 
             /*   foreach ($group_data['auth'] as $key => $val) {
              
                }*/
              ?>   
            </ul>
              
            </div>
            <div class="modal-footer">
              <button class="btn btn-sm btn-success" type="submit" name="edit_sub" >确认修改</button>
           </div> 
       </form>
    
    </div> 
  </div>
 </div>  -->



<?php
/*if ($page == 'admin_user_group') {
      $param['menu_arr'] = $this->menu();
      $param['group_data']=$this->user_group_select();
      if(tools::urlGet('insert_sub') && tools::urlGet('group_id') && tools::urlGet('group_name') && tools::urlGet('auth') ){
        //$auth =tools::urlGet('auth');
        //echo '<pre>';
      }
        //print_r($_POST);
    //  $auth=json_encode(tools::urlGet('auth'));  
      //  print_r($auth); //exit;
    }
    if ($page == 'admin_user_mgr') {
      $param['user_mgr_data']=$this->user_mgr_select();
    }*/




             /* if($val['auth']==1){
                           foreach ($menu_arr as $key => $val) {
                                 echo"<ul class='nav'  ><li class='list-inline class=''>
                                   <input type='checkbox' class='group_opt ' name='auth[$key][]' value='{$val[0]}'> <Strong class='text-info'>{$val[0]}</strong>
                                          <input type='hidden'  name='auth[$key][]' value='{$val[1]}'>
                                          <input type='hidden'  name='auth[$key][]' value='{$val[2]}'>
                                   <ul class=''> ";

                                foreach ($val as $k => $v) {
                                  for($i=3;$i<count($v);$i++){
                                    
                                 echo " <label class='checkbox-inline'>
                                    <input class='input_one' type='checkbox' name='auth[$key][$k][] ' value='{$v[0]}'> <span class='text-success'>{$v[0]}</span>
                                        <li class='none'>  <input type='checkbox' name='auth[$key][$k][] ' value='{$v[1]}'>
                                        <input type='checkbox' name='auth[$key][$k][] ' value='{$v[2]}'> 
                                         <input type='checkbox' name='auth[$key][$k][] ' value='{$v[3]}'></li>       
                                       </label>";

                                    }
                                   }
                                 echo "</ul/></li></ul> ";
                            }

                  }else{
                        $auth=json_decode($val['auth'],TRUE);
                      //  echo '<pre>'; print_r( $auth);
                        /*foreach($auth as $key => $val){
                        echo"<ul class='nav'><li class='list-inline'>
                                         <input type='checkbox' class='group_opt' name='auth[$key][]' value='{$val[0]}'> <Strong class='text-info'>{$val[0]}</strong>
                                  <ul class='nav nav-offset'>" ;
                                     print_r( $val);
                                 for($i=3;$i<count($val);$i++){
                                    echo " <label class='checkbox-inline'>
                                         <input type='checkbox' name='auth[$val[1]][$i]' value='{$val[$i][0]}'> <span class='text-success'>{$val[$i]}<span>
                                    </label>";
                                   }
                             echo "</ul/></li>";
                          }
                  }*/





?>