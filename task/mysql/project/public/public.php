<?php
//12.跳转代码是重复代码：封装成独立的函数来实现：在公共文件夹中创建一个新的公共文件
//最应该做的是：设定字符集，不然每个脚本都要设定字符集
header('content-type:text/html; charset=utf-8');
/*跳转函数
 * @param1 string $url,跳转目标
 * @param2 string $msg,跳转信息
 * @param3 int $time=3,跳转时间
 * */
function redirect($url,$msg,$time=3) {
	header("Refresh:{$time};url={$url}");//跳转//跳转
	echo $msg;//提示
	exit;//终止脚本执行
}