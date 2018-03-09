
<?php
header("content-type=text/html;cahrset=utf-8");
//求该数组的最大值：
$arr1=array(3,5,6,2,9,4);
$max=$arr1[0];//先取得该数组中胡第一项的值。
              //并意图用该变量存储最终的结果。
$len=count($arr1);
for($i=0;$i<$len;$i++) {
  if($arr1[$i]>$max){//如果发现某一项的值比$max大
    $max=$arr1[$i]; //赶紧赋值装起来
  }  
}
echo"最大值为：$max<hr/>";

//求该数组的最大值：
$arr2=array(
            array(3,5,6),
            array(2,9,4),
            array(5,2,11)
           );
$max=$arr2[0][0];//同样取出第一个数据
$len=count($arr2); 
for($i=0;$i < $len; ++$i) {//i++具有滞后性    ++i具有提前性
    $len2=count($arr2[$i]);//取得其中某个数组的长度
    for($j=0;$j<$len2;++$j) {//继续对该“内部的数组”遍历
        if($arr2[$i]>$max){
            $max=$arr2[$i][$i];
        }   
    }
}
echo"最大值为：$max<hr/>";


//求该数组的最小/大值，求和：
$arr2=array(
    array(3,5,6,45,88,99),
    array(2,9,4,88,1),
    array(5,2,11),
    array(
        3,4,5,
        array(
            1,12,3
            
        )
    )
);//提示：使用递归，判断数据类型：is_array(),is_numeric()
    



//求该数组的最大值：
$arr3=array(3, 8=>5,'dd'=>6, 2, 11=>16, 4);
//方法1：foreach语法
$max=reset($arr3);//用current也行
foreach($arr3 as $key => $value) {
    if($value > $max) {
        $max=$value;
    }
}
echo"最大值为：$max<hr/>";

//方法2：for+next语法
$max=reset($arr3);
$len=count($arr3);
for($i=0;$i<$len;$i++) {
    //$key=key($arr3); //对本题要求来说：可以不需要下标
    $value=current($arr3);
    if($value > $max) {
        $max=$value;
    }
    next($arr3);//移动指针到下一个
}
echo"最大值为：$max<hr/>";

/*求得以下数组胡最大值与最小值 以及 它们的下标
 *并，将它们的位置交换
 */
$arr4=array(3,3=>5, "name"=>23,8=>0,"age"=>"江", 2);
$max=$min=reset($arr4);//取得第一项的值
$maxPos=$minPos=key($arr4);//取得第一项的下标
foreach($arr4 as $key=> $value) {
    if($value > $max) {
        $max=$value;//则放入$max
        $maxPos=$key;//同时江此时的下标存起来
    }else if($value < $min){
        $min=$value;
        $minPos=$key;
    }
}
echo"最大值为：$max,位置为：$maxPos<br/>";
echo"最小值为：$min,位置为：$minPos<br/>";
echo "交换之前：";
print_r($arr4);//输出数组

//数组之间的2个元素的交换
$temp =$arr4[$maxPos];
$arr4[$maxPos]=$arr4[$minPos];
$arr4[$minPos]=$temp;
echo "<br/>交换之后：";
print_r($arr4);
echo "<hr/>";

//each() 函数解释：
$arr5=array(3,3=>5, "name"=>23,8=>0,"age"=>"江", 2);
$a1=each($arr5);//取得数组胡当前项的下标和值，并放入数组$a1，移动指针到下一个
echo "<pre>";
print_r($a1);
echo "</pre>";
$a2=each($arr5);
echo "<pre>";
print_r($a2);
echo "</pre>"."<hr/>";

//list() 函数解释：
$arr6=array(5,15,6,9);
list($v1,$v2,$v3,$v4)=$arr6;
echo "";

$flag=1;
$count=0;
$tmp=5;
$sumflags=0;
for(;$flag<100;$flag++){
    if($flag%$tmp==0){
      // echo $flag."<br/>";
        $count++;
       
        $sumflags = $sumflags+$flag;
       // echo  $sumflags."<br/>";
    }
}
echo $sumflags;



?>



