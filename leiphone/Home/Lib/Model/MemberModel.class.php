<?php
class MemberModel extends Model{
    protected $_auto = array(
        array('member_password','md5','3','function'),
        array('client_ip','ip','3','callback'),
        //array('update_time','time','3','function'),
    );
    
    function ip(){
        $ipnum = get_client_ip();
     /*     import('ORG.Net.IpLocation');
        $Ip = new IpLocation("UTFWry.dat"); // 实例化类 参数表示IP地址库文件
        $area = $Ip->getlocation($ipnum); // 获取某个IP地址所在的位
        echo "<pre>";
        print_r( $area);
        echo "</pre>";  */
        return  $ipnum;
    }
   
/*  protected $_map = array(  
        'name' =>'member_name', // 把表单中name映射到数据表的member_name字段
   
    );
     */
    protected $_validate = array(
        array('member_name','require','用户名不能为空'),
        array('member_name','require','出错啦！帐号名称已经存在！',0,'unique',3),
        array('member_password','require','密码不能为空'),
        array('repassword','member_password','两次密码不一致','2','confirm'),
        array('phone','11','手机格式错误','3','length'),
        array('phone','require','出错啦！此手机号已注册！','2','unique',2),
        array('email','email','邮箱地址有误'),
        array('email','require','出错啦！此邮箱已注册！',2,'unique',3),
        array('fcode','require','验证码不能为空'),
        array('fcode','checkCode','验证码错误','2','callback'),
    );
    protected $patchValidate = true;
   
    //判断验证码
    protected function checkCode($fcode){
        if(md5($fcode) != $_SESSION['verify'] ){
            return false;
        }
    } 

}