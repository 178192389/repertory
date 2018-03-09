<?php 
$a=18;
echo $a;





echo table(10, 10, 800, "aaaa", "red");

echo table(5, 5, 500, "bbbb", "green");

echo table(2, 2, 200, "cccc", "blue");

function table($row, $col, $width, $tableName, $color){
   $str='<table border=1 width="'.$width.'" align="center">';
   $str.='<caption><h1>'.$tableName.'</h1></caption>';
	
   for($i=0; $i<$row; $i++){
	   if($i%2==0)
		   $bg="#ffffff";
	   else
		   $bg=$color;
   	$str.='<tr bgColor="'.$bg.'">';
	for($j=0; $j<$col;$j++ ){
		$str.='<td>'.($i*$row+$j).'</td>';	
	}
	$str.='</tr>';
   }

   $str.='</table>';

   return $str;
}

echo sum(10, 5);
echo '<br>';
echo sum(10,5)+100;
echo '<br>';

$sum=sum(3, 4);
echo $sum;
function sum($x, $y){
  //  $sum=0;

    $sum=$x*$x+$y+$y;

   return $sum;
}


$a=1;


function demo($a){
    $a+=5;

}

function test($b){
    $b+=10;
}

demo($a);
test($a);
var_dump($a);


echo $a;


$arr=array(1, 9, 5, 8, 3, 4);

sort($arr);

print_r($arr);





// function demo(){
//     $args=func_get_args();
//     $sum=0;
//     for($i=0; $i<count($args); $i++){
//         $sum+=$args[$i];
//     }

//     return $sum;
// }


// echo  demo(1, 2, 3, 4, 5, 6, 7,8,9);


$v1 ="abc";    //这是一个字符串变量
$abc = 10;	//这是一个字符串变量
echo $abc.$v1;
echo $$v1;
?>