<?php
include_once('public/public.php');

echo sha1("111111");

function GetIpLookup($ip = ''){
if(empty($ip)){
$ip = GetIp();
}
$res = @file_get_contents('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=' . $ip);
if(empty($res)){ return false; }
$jsonMatches = array();
preg_match('#\{.+?\}#', $res, $jsonMatches);
if(!isset($jsonMatches[0])){ return false; }
$json = json_decode($jsonMatches[0], true);
if(isset($json['ret']) && $json['ret'] == 1){
$json['ip'] = $ip;
unset($json['ret']);
}else{
return false;
}
return $json;
echo $json;
}
$ipInfos = GetIpLookup('183.63.121.125'); //baidu.com IP地址
var_dump($ipInfos); 

include_once('public/templates/index.html');
//include_once('public/templates/login1.html');
?>
