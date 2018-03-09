 <?php
// 站点统计：
header('content-type:text/html; charset=utf-8');

// 1.将用户的访问信息记录到文件中：独占一行，记录ip地址
$ip=$_SERVER['REMOTE_ADDR'];//获取用户信息
file_put_contents('record.text', $ip."\r\n",FILE_APPEND);//写入文件(追加)

// 2.所有的信息都是通过文件中记录的内容来计算出来：读取整个文件，一行代表访问一次，使用file函数读取
$info=file('record.text');//读取数据：以行为单位

// 3.总的访问次数出来：就是总行数，就是读取的数组的总记录数
$visits=count($info);//求出网站的总访问量
// 4.求出当前用户的次数：当前用户的ip在数组中出现的次数
$ip_visits=0;
$unique_ips=array();
foreach($info as $each_ip) {//求出当前用户(IP)出现的次数
    /*5.总共有多少个用户访问过：遍历当前所有的访问用户信息，另外使用一个数组保存：
     * 如果当前ip在数组中存在，那么不加入，否则加入：最后统计新数组即可。*/
    if(!in_array($each_ip,$unique_ips)) {//统计当前数组中的独立ip数
        //将当前新的用户加入到独立ip数组中
        $unique_ips[]=$each_ip;

        // 6.求出当前用户是第几位访问者：只要判断当前ip在独立用户数 数组中出现的位置即可
        //判断当前新家的ip($each_ip)是否是当前用户的IP
        if($ip==trim($each_ip)) {
            $user_visit=count($unique_ips);
            var_dump($unique_ips); //exit;
        } 
    }
    //比较:从文件中读取出来的是一行：需要取出换行符来能比较
    if(trim($each_ip)==$ip) {
        $ip_visits++; 
    }
}
//5.统计$unique_ips中的元素个数：就是独立IP数
$users=count($unique_ips);

//需求：输出
echo "欢迎访问某某网站，你是第 {$user_visit} 个用户，当前网站一共有 {$users} 个用户，
    当前网页一共被访问了 {$visits}次，您当前是第{$ip_visits}次访问！";