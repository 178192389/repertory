<?php
/**
*登陆采集类
*/
class Gather
{
    /**
    *存放用于接收和发送的Cookie文件路径
    *系统生成，只读
    */
    private  $cookie_jar;
    public function get_cookie_jar(){
        return $this->cookie_jar;
    }

    public function login($url, $logininfo)
    {
        //根据当前上下文的Cookie里的内容，找到用于Curl接收和发送的Cookie文件路径
        if (isset($_COOKIE['cookie_jar']) && is_file($_COOKIE['cookie_jar']))
        {
            $this->cookie_jar=$_COOKIE['cookie_jar'];
            //如果Cookie存在，说明已经登陆,不再请求登陆接口。
            return;
        }
        else
        {
            //产生一个Cookie文件
            $cookie_jar = tempnam('./tmp/', 'cookie');
            $params[CURLOPT_COOKIEJAR] = $cookie_jar;
            //保存接收Cookie路径到当前上下文的Cookie中
            setcookie('cookie_jar', $cookie_jar);
            $this->cookie_jar=$cookie_jar;
        }
        $ch = curl_init();
        $params[CURLOPT_URL] = $url. strpos($url,'?')!==FALSE? "&":"?".rand(1000,9999);    //请求url地址,加随机数
        $params[CURLOPT_HEADER] = true; //是否返回响应头信息
        $params[CURLOPT_RETURNTRANSFER] = true; //是否将结果返回
        $params[CURLOPT_FOLLOWLOCATION] = true; //是否重定向
        $params[CURLOPT_USERAGENT] = 'Mozilla/5.0 (Windows NT 5.1; rv:9.0.1) Gecko/20100101 Firefox/9.0.1';

        //也可用http_build_query()函数
        $postfields = '';
        foreach ($logininfo as $key => $value){
            $postfields .= urlencode($key) . '=' . urlencode($value) . '&';
        }

        $params[CURLOPT_POST] = true;
        $params[CURLOPT_POSTFIELDS] = $postfields;


        curl_setopt_array($ch, $params); //传入curl参数
        $content = curl_exec($ch); //执行
        //file_put_contents("./tmp/login.tmp", $content);
        //echo iconv('gbk','utf-8',$content);
    }

    function getcontent($uri){

        if (!(isset($this->cookie_jar) && is_file($this->cookie_jar)))
        {
            throw new Exception("can't find any cookie file,call login() first!");//英语有点烂是不是？
            exit();
        }
        $ch = curl_init();

        $params[CURLOPT_COOKIEFILE] = $this->cookie_jar;
        $params[CURLOPT_URL] = $uri;
        $params[CURLOPT_POST] = FALSE;
        $params[CURLOPT_HEADER] = FALSE; //是否返回响应头信息
        $params[CURLOPT_RETURNTRANSFER] = true; //是否将结果返回
        $params[CURLOPT_FOLLOWLOCATION] = true; //是否重定向
        $params[CURLOPT_USERAGENT] = 'Mozilla/5.0 (Windows NT 5.1; rv:9.0.1) Gecko/20100101 Firefox/9.0.1';
        curl_setopt_array($ch, $params); //传入curl参数
        $content = curl_exec($ch); //执行
        //file_put_contents("./tmp/list.tmp", $content);
        return $content;
    }
}
    require_once './Classes/PHPExcel.php';


    /**
    *---------以下是类调用---------------
    */

    //first 登陆
    $demo=new Gather();
    $login_info=array('user'=>'twm','pwd'=>'111111');
    $demo->login('http://127.0.0.1:9090/user/doLogin', $login_info);

    //获取主列表
    $uri_list='http://127.0.0.1:9090/Bill_list?railReceiveDate=isc_RestDataSource_0&'.rand(1000,9999);
    $list_result=$demo->getcontent($uri_list);
    $list_obj=json_decode($list_result);

    //如果获取出错，说明cookie过期,删除文件后，重新刷新页面登陆
    //{"response":{"data":"hello","endRow":null,"errors":null,"startRow":null,"status":-9,"totalRows":null}}
    if(!is_array($list_obj->response->data)){
        unlink($demo->get_cookie_jar());
        sleep(2);
        header('Location: http://127.0.0.1/gather.php');
    }


    //将结果内容存成EXECL
    /*----------设置EXECL表头-------------*/
    $objPHPExcel = new PHPExcel();
    $objPHPExcel->getProperties()->setCreator("TWM")
                         ->setTitle($search_data)
                         ->setSubject($search_data)
                         ->setDescription("管理表格");
    $objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A1', '名称')
            ->setCellValue('B1', '规格')
            ->setCellValue('C1', '库存')
            ->setCellValue('D1', '单价')
            ->setCellValue('E1', '颜色')
            ->setCellValue('F1', '描述');


    /*----------设置EXECL表格内容-------------*/
    $i=2;
    //主从表循环
    foreach($list_obj->response->data as $value) {
        $uri_detail='http://127.0.0.1:9090/listDetail?bid='.$value->railReceiveBillNo.'dataFormat=json';
        $detail_result=$demo->getcontent($uri_detail);
        $detail_obj=json_decode($detail_result);

        foreach($detail_obj->response->data as $detailvalue)
        {
            $objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A'.$i, $value->title)
            ->setCellValue('B'.$i, $value->model)
            ->setCellValue('C'.$i, $value->store)
            ->setCellValue('D'.$i, $value->price)
            ->setCellValue('E'.$i, $value->color)
            ->setCellValue('F'.$i, $value->remark)
            $i++;
        }
    }

    /*----------输出下载-------------*/
    header('Content-Type: application/vnd.ms-excel');
    header('Content-Disposition: attachment;filename="管理表格'.$search_data.'.xls"');
    header('Cache-Control: max-age=0');
    // If you're serving to IE 9, then the following may be needed
    header('Cache-Control: max-age=1');

    // If you're serving to IE over SSL, then the following may be needed
    header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
    header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
    header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
    header ('Pragma: public'); // HTTP/1.0

    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
    $objWriter->save('php://output');
    exit;