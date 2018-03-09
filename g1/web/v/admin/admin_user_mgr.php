      <ul class="breadcrumb">
        <li><a  class="glyphicon  glyphicon-home" href="?/admin/admin_view/admin"></a></li>
        <li><a href="javascript:history.back();">上一界面</a></li>
        <li class="active">用户管理</li>
      </ul>

       <ul class="nav nav-tabs alert-info " role="tablist">
    <li role="presentation" class="active"><a href="#user_group" aria-controls="user_group" role="tab" data-toggle="tab"><i class='fa fa-user'></i>管理员列表</a></li>
    <li role="presentation"><a href="#add_group" aria-controls="add_group" role="tab" data-toggle="tab"><i class='fa fa-user-plus'></i>新增管理员</a></li>
   
  </ul>
  <br/>
  <table class="table table-bordered table-hover ">
   <!--    <caption>
     <ul class="list-inline ">
          <li><a data-toggle="modal" data-target="#addUser" data-backdrop="static" class="btn btn-info"><em class="glyphicon glyphicon-plus"></em> 添加用户</a></li>
         
     </ul>
   </caption> -->
      <tr>
        <th>
          <span><a href="#"  id="selectAll">全选</a></span>
          <span><a href="#" id="reverse">反选</a></span>
          <span><a href="#" id="unSelect">不选</a></span>
        </th>
        <th>序号</th>
        <th>用户名称</th>
        <th>账户名称</th>
        <th>用户密码</th>
        <th>用户角色</th>
        <th>状态</th>
        <th>操作</th>
        
      </tr>
         <?php
       /* function &m(){
           return  LOAD(APP_M.'user_m');
         }*/
          function account_tb(){
            $sql_str = "select * from account_tb;";
            $rows = App::db()->execAll($sql_str,array());
         
            return $rows;
        }

      $account_tb_data=account_tb();
      
        // print_r($account_tb_data);   
      foreach ( $account_tb_data as $key => $val) {
      //  $group_name = m()->group_get_name($val['account_id']);
        echo " <tr class=' tr-box'>
               <td> <input type='checkbox'  name='list[]'' value=''/></td>
               <td>{$val['account_id']}</td>
               <td>{$val['account_name']}</td>
               <td>{$val['account_nick']}</td>
               <td>{$val['account_password']}</td>";
              
                if ( $group_name){
              echo " <td> $group_name</td>";
               }else{
               echo " <td>无权限</td>";
               }
              echo "   <td>{$val['is_delete']}</td>
               <td>
                <a href='' class='btn-sm btn-info' data-toggle='modal' data-target='#edit' data-backdrop='static'>编辑</a> 
                 <a href='' class='btn-sm btn-danger'>移除</a> 
              </td>
               </tr>";

      }
       
     ?> 
        
      
    </table>

<!-- 添加用户-->

<div class="modal fade" id="addUser">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button data-dismiss="modal"  class="close" aria-label="Close">&times;</button>
         <Strong><span class="btn btn-info">新增用户</span></Strong>
      </div>
     <form action="?/admin/admin_view/admin_user_mgr" method="post" class="form-horizontal">
         <div class="modal-body"> 
         
            <?php 
                foreach ($user_mgr_data as $key => $val) {
                  
                }
              ?>   
            </ul>
              
            </div>
            <div class="modal-footer">
              <button class="btn btn-sm btn-success" type="submit" name="adduser_sub" >确认新增</button>
           </div> 
       </form>
    
    </div> 
  </div>
 </div> 

<!-- 编辑 权限-->

<div class="modal fade" id="edit">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button data-dismiss="modal"  class="close" aria-label="Close">&times;</button>
         <Strong><span class="btn btn-info">编辑用户</span></Strong>
      </div>
     <form action="?/admin/admin_view/admin_user_group" method="post" class="form-horizontal">
         <div class="modal-body"> 
         
   
      
              
            </ul>
              
            </div>
            <div class="modal-footer">
              <button class="btn btn-sm btn-success" type="submit" name="edit_sub" >确认修改</button>
           </div> 
       </form>
    
    </div> 
  </div>
 </div> 











    