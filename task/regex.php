<?php
/* 3. 在正则表达式中可以直接使用一些代表范围的原子
		\d  : 表示任意一个十进制的数字       [0-9]
		\D  : 表示任意一个除数字这外的字符   [^0-9]
		\s  : 表示任意一个空白字符，空格、\n\r\t\f   [\n\r\t\f ]
		\S  : 表示任意一个非空白                     [^\n\r\t\f ]
		\w  : 表示任意一个字 a-zA-Z0-9_              [a-zA-Z_]
		\W  : 表示任意一个非字， 除了 [^a-zA-Z0-9_ ]以外的任意一个字符 
 * */

//原子和元字符 /模式修正符号 /定界符号
$pattern= "/abc+/";//正则表达式 模式
$string="cabcabc"; //需要和上面模式 字符串进行匹配的 变量字符串
if(preg_match($pattern, $string)) {
	echo "正则表达式<b>{$pattern}</b>和字符串<b>{$string}</b>匹配成功";
}else{
	echo "<font color='red'>正则表达式{$pattern}和字符串{$string}匹配失败</font>";
}
echo "<hr/>";
//子模式使用, 正则表达式不先对一个字符串匹配一次, 
//全部匹配作为一个大模式，放到数组的第一个元素中，每个()是一个子模式按顺序放到数组的其它元素中去。
$pattern= "/(\d{4}\W\d{2}\W\d{2})\s+(\d{2}\W\d{2}\W\d{2})\s+(?:end)/";//正则表达式 模式
$string=" today is 2017-05-12 18:02:10 end......";
if(preg_match($pattern, $string,$arr)) {
	echo "正则表达式<b>{$pattern}</b>和字符串<b>{$string}</b>匹配成功";
echo "<pre>";
print_r($arr);
echo "</pre>";
}else{
	echo "<font color='red'>正则表达式{$pattern}和字符串{$string}匹配失败</font>";
}
echo "<hr/>";


/*实例：
正则表达式
	1.定界符号
	2.原子
	3.元字符
	4.模式修正符
一个URL正则表达式
$url="/(https?|ftps?):\/\/(www|mail|news)\.([^\/\.]+)\.(com|org|net)/i";
	Http://www.baidu.com	ftp://mail.google.com    https://news.hello.org
       用到分割函数中，就使用这个正则去分割字符串
       用到替换函数中，就使用这个正则去替换字符串
      用到匹配函数中，就使用这个正则去匹配字符串
    有了正则，再在一个正则1处理函数中使用这个正则，  才能对字符串进行分割、匹配、查找、替换等工作。
*
*和字符串处理函数对比介绍：
*	能使用字符串处理函数完成的功能，就不要使用正则表达式处理函数。


$str="这是一个正则表https://www.baidu.com达式的匹配函数;
这是一个正则表https://www.baidu.com达式的匹配函数;
这是一个正则表https://www.baidu.com达式的匹配函数;
这是一个正则表https://www.baidu.com达式的匹配函数;
这是一个正则表https://www.baidu.com达式的匹配函数";
//$url="/(https?|ftps?):\/\/(www|mail|news)\.([^\/\.]+)\.(com|org|net)/i";
//反向引用,主机地址
//$url="/(https?|ftps?):\/\/((www|mail|news)\.([^\/\.]+)\.(com|org|net))/i";
//这个函数只能匹配一个
//preg_match_all这个函数可以匹配所有的函数
// if(preg_match_all($url, $str, $arr,PREG_PATTERN_ORDER)) {
// 	echo "字符串中有正确的URL信息<br/>";
// 	echo "<pre>";
// 	print_r($arr);
// 	echo "</pre>";
// 	//反向引用,只要主机地址
// 	//echo "主机:".$arr[2]."<br/>";
// }else{
// 	echo "字符串中不包括URL信息";
// }

echo $str;
//换成红色字体
// foreach ($arr[0] as $url) {
// 	$str=str_replace($url, '<font color="red">'.$url.'</font>', $str);
// }
// echo $str;


//换成链接 方式1
function seturl($str) {
	$url="/(https?|ftps?):\/\/((www|mail|news)\.([^\/\.]+)\.(com|org|net))/i";
	preg_match_all($url, $str, $arr,PREG_PATTERN_ORDER);
	foreach ($arr[0] as $url) {
		$str=str_replace($url, '<a href="">'.$url.'</a>', $str);
	}
	return $str;
}
echo  seturl($str)."<hr/>";
// 字符串替换方式2
function setur2($str) {
    $url="/(https?|ftps?):\/\/((www|mail|news)\.([^\/\.]+)\.(com|org|net))/i";
    preg_match_all($url, $str, $arr,PREG_PATTERN_ORDER);
    $str=str_replace($arr[0], '<font color="red">'."www.google.com".'</font>', $str);

    return $str;
}
echo  setur2($str)."<hr/>";
//map返回  方式3
function setur3($str) {
    $url="/(https?|ftps?):\/\/((www|mail|news)\.([^\/\.]+)\.(com|org|net))/i";
    preg_match_all($url, $str, $arr,PREG_PATTERN_ORDER);
    $str=str_replace($arr[0], array_map("addLink",$arr[0]), $str);

    return $str;
}
echo  setur3($str)."<hr/>";

function addLink($url) {
    return '<a href="$url">'."www.google.com".'</a>';
}
//正则替换 方式4
function setur4($str) {
    $url="/(https?|ftps?):\/\/((www|mail|news)\.([^\/\.]+)\.(com|org|net))/i";
    
    $str=preg_replace($url,'<a href="\1://\2\3\4">\1://\2\3\4</a>', $str);

    return $str;
}
echo  setur3($str)."<hr/>";


//字符串匹配与查找     strstr---stristr()  Strpos---stripos()  substr()
// echo getFile('http://www.baidu.com/index.php').'<br>';
// echo getFile('/url/www/index.jhp').'<br>';
// echo getFile('../../images/bgcolor.gif').'<br>';
// echo getFile('C:/ihello/demo.rar').'<br>';//地址不正确

// function getFile($url) {
// 	$loc=strrpos($url, "/")+1;
// 	$fileName=substr($url, $loc);
// 	return fileName;
// }
*/


/*替换函数
 * 系统提供的：str_replace()  str_ireplace()这个不区分大小写
 *  三种方式：
 *      1. str_replace(string,string,string)
 *      2. str_replace(array,string,string)
 *      3. str_replace(array,array,string)
 *
 * 第一种实例： str_replace(string,string,string)
$str="http://www.baidu.com";
$count=0;
//替换
$newstr=str_replace("baidu","google",$str);
echo "$str<br/>";
echo "$newstr";

$str="字符串中php的替换函数与系统提供的字符串中的替换函数
    字符串中php的替换函数与系统提供的字符串中的替换函数
    字符串中php的替换函数与系统提供的字符串中的替换函数
    字符串中php的替换函数与系统提供的字符串中的替换函数
    字符串中php的替换函数与系统提供的字符串中的替换函数";
$count=0;
$search="php";
//替换成红色
$replace='<font color="red">'.$search.'</font>';
$newstr=str_replace($search,$replace,$str,$count);
echo "$str<br/>";
echo "$newstr<br/>";
echo "一共被替换了 ：$count 次";

//第二种实例： str_replace(array,string,string)
 
$str="lamp字符串中php的替换函数Linux与系统Apache提供的字符串中的MySQL替换函数
   lamp 字符串中php的替换函数Linux与系统Apache提供的字符串中的MySQL替换函数
    lamp字符串中php的替换函数Linux与系统Apache提供的字符串中的MySQL替换函数
    lamp字符串中php的替换函数Linux与系统Apache提供的字符串中的MySQL替换函数
   lamp 字符串中php的替换函数Linux与系统Apache提供的字符串中的MySQL替换函数";
$count=0;
$search=array("lamp","Apache","Linux","MySQL","php");
//替换成红色
//$replace='<font color="red">'***'</font>';
//第三种实例： str_replace(array,array,string)
$replace=array("J2EE","Tomcat","Windows","Oracle","Jsp");;
$newstr=str_replace($search,$replace,$str,$count);
echo "$str<br/>";
echo "$newstr<br/>";
echo "一共被替换了 ：$count 次";


//正则中的替换函数：preg_replace();
4种方式：
*      1. 正常使用 preg_replace(string,string,string)
2.在正则中的子模式，可以用到二个参数中
3.在第二个参数中调用函数，需要再模式中使用e模式修正符号
4.就是在前两个参数都使用数组，可以一起将多个模式（正则）同时替换成多个值的形式 
*/
echo'$str'."<br/>";
echo preg_replace("/[a-zA-z]*/",$str,3);
?>