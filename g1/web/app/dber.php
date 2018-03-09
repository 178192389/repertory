<?php
//封装一个DB类，用来专门操作数据库，以后凡是对数据库的操作，都由DB类的对象来实现
class dber{
    private $set;
    private $con;
    private $sth;
    private $trans_num;

    //构造方法(作用：为了初始化对象的属性)，会被自动调用
    /*
     * @param1 array $arr，默认为空，里面是一个关联数组，里面有7个元素
     * array('host', 'db', 'user', 'pass', 'driver', 'charset');
     */
    public function __construct($arr = array()){
        if (!class_exists("PDO")){  
             App::log()->log_dbg('不支持PDO, 请先开启');
             return;
        }

        if(!isset($arr['port'])){
            $host_arr = explode(':', tools::arrayElement($arr, 'host'));
            if (isset($host_arr[1])) {
                $arr['host'] = $host_arr[0];
                $arr['port'] = $host_arr[1];
            }
            else{
                $arr['port'] = 3306;
            }
        }
        $this->set = $arr;

        //连接数据库（类是要操作数据库，因此要连接数据库）
        $dbms = tools::arrayElement($arr, 'driver', 'mysql');//数据库类型
        $host = $arr['host'];
        $dbname = $arr['db'];
        $dsn = $dbms.":host=".$host.";dbname=".$dbname;
        $configs = null;// PDO::ATTR_PERSISTENT => true表示需要长连接
        try {
            $this->con = new PDO($dsn, $arr['user'], $arr['pass'], $configs);
            if (isset($arr['charset'])) {
                $this->execAll("set names '".$arr['charset']."';");
                //$this->execAll("set character_set_client=".$arr['charset'].";");
                //$this->execAll("set character_set_results=".$arr['charset'].";");
            }
            $this->execAll("use ".$dbname.";");
        } catch (PDOException $e) {
            $this->con = null;
            App::log()->log_dbg('create db('.$dsn.')failed> '.$e->getCode().':' . $e->getMessage());
        }
    }

    function __destruct(){
        $this->clearResult();

        if(!empty($this->con)){
            //$this->con->close();
            $this->con = null;
        }
    }

    private function _checkEmpty(){
        if (empty($this->con)) {
            App::log()->log_dbg('DB is NULL, cannot do anything!');
            return true;
        }
        return false;
    }

    private function _logError($info, $func_name = ''){
        App::log()->log_dbg('Db '.$func_name.' failed> '. (is_array($info) ? $info[2] : $info));
    }

    /**
     * 开始传输
     */
    public function startTransaction(){
        if ($this->_checkEmpty()) {
            return;
        }
        if (empty($this->trans_num)) {
            $this->trans_num = 1;
            $this->con->beginTransaction();
        }
        else{
            ++$this->trans_num;
        }
    }

    /**
     * 传输结束
     */
    public function commit(){
        if ($this->_checkEmpty()) {
            return;
        }

        if (empty($this->trans_num) || $this->trans_num < 1) {
            App::log()->log_dbg("sql TRANSACTION is not match with COMMIT");
        }
        --$this->trans_num;
        if ($this->trans_num <= 0) {
            $this->con->commit();
        }
    }

    /**
     * 执行数据库操作
     */
    public function exec($str, $param_arr = null){
        if ($this->_checkEmpty()) {
            return null;
        }

        $this->clearResult();

        $this->sth = $this->con->prepare($str);
        if (!$this->sth) {
            $this->_logError($this->con->errorInfo(), 'exec');
            return null;
        }
        $ret = $this->sth->execute($param_arr);
        if (!$ret) {
            $this->_logError($this->sth->errorInfo(), 'exec');
        }
        return $ret;
    }

    /**
     * 执行数据库操作
     */
    public function &execAll($str, $param_arr = null, $isArrResult = false){
        $ret = array();
        if ($this->_checkEmpty()) {
            return $ret;
        }

        if($this->exec($str, $param_arr)){
            /*

            while($this->nextResult($arr, $isArrResult)){
                $ret[] = $arr;
            }*/

            $ret = $this->sth->fetchAll($isArrResult ? PDO::FETCH_NUM : PDO::FETCH_ASSOC);
        }

        return $ret;
    }

    /**
     * 取一个结果
     */
    public function &nextResult(&$outArray, $isArrResult = false){
        if ($this->_checkEmpty()) {
            return;
        }

        $outArray = $this->sth->fetch($isArrResult ? PDO::FETCH_NUM : PDO::FETCH_ASSOC);
        return empty($outArray) ? false : true;
    }

    /**
     * 清除结果
     */
    public function clearResult(){
        if (!empty($this->sth)) {
            $this->sth->fetchAll(PDO::FETCH_ASSOC);
            $this->sth = null;
        }
    }
}
?>