<?php
/*10.操作数据库：进入到数据库admin表中，查询用户名和密码对应是否存在，操作数据库的位置很多，
 * 都需要进行初始化操作：将数据库的初始化封装到一个单独的文件中：mysql.php*/
//连接认证
$link=@mysql_connect('localhsot','root','');
//判断连接结果
if(!$link) {
	echo '数据连接失败';
	echo '错误编码是：'.mysql_errno().'<br/>';
	echo'错误信息是：'.iconv('GBK','UTF-8',mysql_error()).'<br/>';
	exit;
}
//操作数据库：设置字符集


//封装SQL错误处理函数
function my_error($sql) {
	$result=mysql_query($sql);
	//判断结果
	if(!$result) {
		echo 'SQL语句有语法错误！<br/>';
		echo 'echo 错误编码是：'.mysql_errno().'<br/>';
		echo'错误信息是:'.iconv('GBK','UTF-8',mysql_error()).'<br/>';
		exit;
	}
	return $result;
}
$sql="set names utf8";
$result=mysql_query($sql);
//选择数据库
$sql1="use project";
mysql_error($sql1);
