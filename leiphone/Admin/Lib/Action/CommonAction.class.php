<?php
header("Content-type: text/html; charset= utf-8");
class CommonAction extends Action{
    protected function _initialize(){
        if(empty($_SESSION['a_name']) || !$_SESSION['login']){
            
          $this->error('请登录后再访问',U('Login/login'));
           // $this->redirect(U('Login/login'), 2,' 请登录后再访问');
             $this->success('成功退出',U('Login/login'));
            exit;

        }
    }
    
    private  $info;
    private  $area;
    public function getInfo(){   
        return $this->info;
        return $this->area;
    }
    
    public function setInfo($info,$area){
        $this->info = $info;
        $this->area = $area;
    }
    //文件上传
    protected function upload(){
		import('ORG.Net.UploadFile');
		$upload = new UploadFile();
		$upload->savePath="./Public/Uploads/";		
		$upload->allowExts  = array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
/*  	$upload->thumb=true;
		$upload->thumbMaxWidth=240;
		$upload->thumbMaxHeight=145;
		$upload->thumbPrefix=false;*/
	
		//规定子目录
		$upload->autoSub=true;
		$upload->subType=date;
		$upload->dateFormat="Ymd";
		//如果 'Y'是大写的显示全部格式 如：2017年，否则 简写 17年。
		$upload->saveRule=date('ymdHis',time()).rand(); 
		if(!$upload->upload()){
		    $this->error($upload->getErrorMsg());
		}else{
			 $info=$upload->getUploadFileInfo();
			 $this->setInfo($info);
		}
	}
	

/* 	function ip(){
	    import('ORG.Net.IpLocation');
	    $Ip = new IpLocation("UTFWry.dat"); // 实例化类 参数表示IP地址库文件
	    $ipnum = get_client_ip();
	   $area = $Ip->getlocation($ipnum); // 获取某个IP地址所在的位
	   
	   echo "<pre>";
	  print_r( $area);
	   echo "</pre>";
	}
 */
protected function beautify_page($count,$listRows){
      
	import('ORG.Util.Page');
	//var_dump($count);
	$page = new Page($count,$listRows);
	//$str="<li>%totalRow% %header% %nowPage%/%totalPage% 页</li>";
	$str="<li class='previous'>%upPage%</a></li>";
	$str.="<li>%first% %prePage% %linkPage% %nextPage% %end%</li>";
	$str.="<li class='next'>%downPage%</li>";
	$page->setConfig('theme',$str);
	$show = $page->show();
	$this->assign('page',$show);
	// var_dump($show);
    }
}