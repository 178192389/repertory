<?php
header("Content-type: text/html; charset= utf-8");
//Relation
class UserModel extends Model{
/* 	protected $_link = array(
			"news" => array(
				"mapping_type" =>"HAS_MANY",
				"class_name"=>"news",
				"foreign_key" => "category_id",		
			),
			'category' =>Array(
				"mapping_type" => "HAS_ONE",
				"class_name" => "category",	
			),
	
	); */
	protected $_map = array(
	    'user_name' => 'name',
	    'user_password' => 'pwd',
		);
    
    
    protected $_validate = array(
        array('name','require','用户名不能为空'),
       // array('name','checkLen','用户名不能小于6位','2','callback'),
        array('name','','出错啦！帐号名称已经存在！',0,'unique',1),
        array('pwd','require','密码不能为空'),
        array('repwd','pwd','两次密码不一致','2','confirm'),
        array('email','email','邮箱地址有误'),
        array('fcode','require','验证码不能为空'),
        array('fcode','checkCode','验证码不能为空','2','callback'),
    );
    protected $patchValidate = true;
    
    //判断用户名长度
//     function checkLen($name){
//         if(strlen($name < 6)){
//             return false;
//         }
//     }
    //判断验证码
    function checkCode($fcode){
        if(md5($fcode) != $_SESSION['verify'] ){
            echo '222';
            return false;
        }
    }
};