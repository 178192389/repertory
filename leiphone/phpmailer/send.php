<?php

require_once('../../../../../phpmailer/class.phpmailer.php');
include_once("../../../../../phpmailer/class.smtp.php"); //可选,否则会在class.phpmailer.php中包含

$mail = new PHPMailer(true); //实例化PHPMailer类,true表示出现错误时抛出异常

$mail->IsSMTP(); // 使用SMTP

try {
  $mail->CharSet ="UTF-8";//设定邮件编码
  $mail->Host       = "smtp.163.com"; // SMTP server
  $mail->SMTPDebug  = 1;                     // 启用SMTP调试 1 = errors  2 =  messages
  $mail->SMTPAuth   = true;                  // 服务器需要验证
  $mail->Port       = 25;					//默认端口
  //$mail->Port       = 465;                    // ssl验证时默认端口
  //$mail->SMTPSecure = "ssl";     
/*
$mail->SMTPSecure = "ssl";                 
$mail->Host       = "smtp.gmail.com";     
$mail->Port       = 465;                  
*/

  $mail->Username   = "用户名"; //SMTP服务器的用户帐号
  $mail->Password   = "密码";        //SMTP服务器的用户密码
  $mail->AddReplyTo('****@163.com', '回复'); //收件人回复时回复到此邮箱,可以多次执行该方法
 $mail->AddAddress('****@****.com', '李明'); //收件人如果多人发送循环执行AddAddress()方法即可 还有一个方法时清除收件人邮箱ClearAddresses()
  $mail->SetFrom('****@163.com', '发件人');//发件人的邮箱
  //$mail->AddAttachment('./img/bloglogo.png');      // 添加附件,如果有多个附件则重复执行该方法
  $mail->Subject = '这里是邮件的标题' . date('Y-m-d H:i:s');

  //以下是邮件内容
  $mail->Body = '<h1>邮件内容</h1><font color=red>测试颜色</font>' . date('His');
  $mail->IsHTML(true);

  //$body = file_get_contents('tpl.html'); //获取html网页内容
  //$mail->MsgHTML(str_replace('\\','',$body));


  $mail->Send();
  echo "Message Sent OK";
} catch (phpmailerException $e) {
  echo $e->errorMessage(); //从PHPMailer捕获异常
} catch (Exception $e) {
  echo $e->getMessage();
}
?>
