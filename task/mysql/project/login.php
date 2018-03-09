<?php
//7.存在乱码：中文问题：header解决。
//header('content-type:text/html; charset=utf-8');
//13.任何一个被用户请求的php文件都应该加载public.php文件
include_once 'public/public.php';

/*4.用户输入信息之后，就会选择提交：提交之后都是由服务器的login.php进行处理：
login.php应该选择性进行处理：做出不同的响应。*/
//用户登录：负责处理与登录相关的所有请求（加载表单和验证登录信息）
//判断用户到底是想干什么:提交数据一定是验证
   if( isset($_POST['submit']) ) {
   //验证用户信息 
   //5.获取用户提交的数据：接收表单数据
   $username=trim($_POST['username']);
   /*8.用户在输入的过程很有可能输入了空格且不是真实需求：所以应该获取用户信息的时候去掉空格*/
   $password=trim($_POST['password']);
       //6.合法性验证:验证数据是否满足验证的基本条件
       if(empty($username)||empty($password) ) {
           //用户名或者密码为空：跳转回登录页面,提示不能为空
          // header("Refresh:3;URL=login.php");//如果使用location:不会输出提示
          // echo '用户名和密码都不能为空！';
           //终止脚本执行
           //exit;
          //14.在任何需要跳转的地方，调用跳转函数 
          redirect('login.php','用户名和密码都不能为空！');
       }
       //11.从数据库查询当前用户和密码数据
       include_once 'public/mysql.php';//加载数据库公共文件
       //验证用户信息
       //15.sql注入问题：用户通过程序的漏铜(程序直接拼凑用户输入的信息到sql语句)，输入一些特殊字符（引号'）
       //来改变原来的sql语句执行的机制：如何防止？--->想办法阻止引号 addslashes()增加转义符号
       $username=addslashes($username);//防止sql注入
       $password=md5($password);//任何地方的md5都是一样的
       $sql="select * from pr_admin where username='{$username}' and password='{$password}'";
       
       //执行查询：SQL语句有可能出错
       $result=my_error($sql);//结果集：永远为true
       $user=mysql_fetch_assoc($result);//解析结果集
       //判断用户是否真的存在
       if(!$user) {
       	//14.在任何需要跳转的地方，调用跳转函数
       	redirect('login.php','用户名或者密码错误！');
       }
       //16.用户登录成功，进入后台首页
       redirect(index.php,'登录成功！',1);
   }else{
       //2.给用户增加一个可以访问的链接：是PHP文件，能够显示登录表单信息。
       //加载登录表单
       include_once 'public/templates/login.html';
   }
   

