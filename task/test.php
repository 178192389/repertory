<?php

class a{
	function a($x=5){
		$this->myvar =$x;
	}
}

class b extends a{
	var $myvar;
	function b($x=2){
		$this->myvar =$x;
		parent::a();
	}
}
$obj = new b;
$obj->b();

echo $obj->myvar;

echo '<pre>';
$a= 3 ;
echo "$a",'$a',"\\\$a","${a}","$a","$a"+"$a";




  ?>
