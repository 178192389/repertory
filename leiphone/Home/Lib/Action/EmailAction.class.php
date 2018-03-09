<?php
header("content-type:text/html; charset=utf-8");
class EmailAction extends Action{

   function sendMail($address,$title="",$content=""){
        //引入PHPMailer的核心文件 使用require_once包含避免出现PHPMailer类重复定义的警告
        require_once("./phpmailer/class.phpmailer.php");
       
        //示例化PHPMailer核心类
        $mail = new PHPMailer();
        
        //是否启用smtp的debug进行调试 开发环境建议开启 生产环境注释掉即可 默认关闭debug调试模式
        $mail->SMTPDebug = 1;
        //邮件正文是否为html编码 注意此处是一个方法 不再是属性 true或false
        $mail->isHTML(true);
        //使用smtp鉴权方式发送邮件，当然你可以选择pop方式 sendmail方式等 本文不做详解
        //可以参考http://phpmailer.github.io/PHPMailer/当中的详细介绍
        $mail->isSMTP();
        //smtp需要鉴权 这个必须是true
        $mail->SMTPAuth=true;
        //链接qq域名邮箱的服务器地址
        $mail->Host = 'smtp.sina.com';
        //设置使用ssl加密方式登录鉴权
        $mail->SMTPSecure = 'ssl';
        //设置ssl连接smtp服务器的远程服务器端口号 可选465或587
        $mail->Port = 465;
        //设置smtp的helo消息头 这个可有可无 内容任意
        $mail->Helo = 'Hello smtp.sina.com Server';
        //设置发件人的主机域 可有可无 默认为localhost 内容任意，建议使用你的域名
        $mail->Hostname = '192.168.10.53';
        //设置发送的邮件的编码 可选GB2312 我喜欢utf-8 据说utf8在某些客户端收信下会乱码
        $mail->CharSet = 'UTF-8';
        //设置发件人姓名（昵称） 任意内容，显示在收件人邮件的发件人邮箱地址前的发件人姓名
        $mail->FromName = '江洪苇';
        //smtp登录的账号
        $mail->Username ='jianghongwei_php@sina.com';
        $mail->Password = 'hongweijiang1';
        //设置发件人邮箱地址 这里填入上述提到的“发件人邮箱”
        $mail->From = 'jianghongwei_php@sina.com';
 
        //设置收件人邮箱地址 该方法有两个参数 第一个参数为收件人邮箱地址 第二参数为给该地址设置的昵称           
            // 添加收件人地址，可以多次使用来添加多个收件人
            if (is_array($address)) {
                foreach ($address as $addressv) {
                    $mail->AddAddress($addressv);
                }
            } else {
                $mail->AddAddress($address);
            }
            
          if($_GET['doReg']){
              //添加该邮件的主题 '解绑邮箱验证'
              $mail->Subject = $title;
              //添加邮件正文 上方将isHTML设置成了true，则可以是完整的html字符串 如：使用file_get_contents函数读取本地的html文件
              $mail->Body =$content;
          }else{
              //var_dump($_POST);
              if($_POST['text']=='email'){
                  $title = '修改邮箱验证';
                  $mail->Subject = $title;
                   if($_SESSION['cid']){
                       $link = "http://192.168.10.53/leiphone/index.php/Personal/email?pwd={$_SESSION['cid']}";
                   }else{
                       $link = "http://192.168.10.53/leiphone/index.php/Site/email?pwd={$_SESSION['id']}";
                   }
                
                  $content = "{$_SESSION['author_name']} 您好！<p></p> 请您点击下面的链接更换邮箱:<p></p>  $link";
                  $mail->Body =$content ;
              }else{
                  $title = '修改密码验证';
                  $mail->Subject = $title;
                  if($_SESSION['cid']){
                      $link = "http://192.168.10.53/leiphone/index.php/Personal/pwd?pwd={$_SESSION['cid']}";
                  }else{
                       $link = "http://192.168.10.53/leiphone/index.php/Site/pwd?pwd={$_SESSION['id']}";  
                  }
                  $content = "{$_SESSION['author_name']} 您好！<p></p> 请您点击下面的链接修改密码:<p></p>  $link";
                  $mail->Body =$content ;
              }
           
          }
      
        // "这是一个<b style=\"color:red;\">PHPMailer</b>发送邮件的一个测试用例";
        
       // var_dump($mail);
    //发送命令 返回布尔值
        //PS：经过测试，要是收件人不存在，若不出现错误依然返回true 也就是说在发送之前 自己需要些方法实现检测该邮箱是否真实有效
     $status = $mail->send();
       
        //简单的判断与提示信息
       if($status) {
          echo '发送邮件成功';
          $this->success('发送邮件成功');
       }else{
         echo '错误信息未：'.$mail->ErrorInfo;
         $this->error('发送邮件失败');
       }
    }    
       

    
}