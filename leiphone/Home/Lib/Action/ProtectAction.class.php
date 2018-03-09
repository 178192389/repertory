<?php
class ProtectAction extends Action{
    protected function _initialize(){
        //&& I('get.pwd')==null
        if($_SESSION['cid']==null &&  $_SESSION['id']==null && I('get.pwd')==null ){
            $this->error('请登录后再访问',U('Login/login'));
            exit;
        }
    }
    
    private $info;
    function getInfo(){
        return  $this->info;
    }
    function setInfo($info){
        $this->info = $info;
    }

   protected function upload(){
        import('ORG.Net.UploadFile');
        $up = new UploadFile();  
        $up->maxSize = 1000000; 
        $up->savePath = './Public/Uploads/';
       
        //规定子目录
        $up->autoSub=true;
        $up->subType=date;
        $up->dateFormat="Ymd";
        
        //saveRule 上传规则     
        // 如果 'Y'是大写的显示全部格式 如：2017年，否则 简写 17年。
        $up->saveRule=date('ymdHis',time()).rand();
        
        if(!$up->upload()){
            $this->error($up->getErrorMsg());
        }else{
            $info = $up->getUploadFileInfo();
            var_dump($info);
               $this->setInfo($info);
        }
    }
    
    

}

?>