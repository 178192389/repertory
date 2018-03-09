<?php
require "FileUpload.class.php";
$up = new fileUpload();

if($up->uploadFile('spic') ){ //$_FILES["formname"]
   echo $up->getNewFileName();
}else{
    echo $up->getErrorMsg();
}