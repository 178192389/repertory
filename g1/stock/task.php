<?php

class taskBase{
    // 更新(保持登录状态)
    public function update($taskValue, $param){
        return msgStr(-1, 'TODO: taskBase::update');
    }

    // 登录
    public function login($taskValue, $param){
        return msgStr(-1, 'TODO: taskBase::login');
    }

    // 购买
    public function buy($taskValue, $param){
        return msgStr(-1, 'TODO: taskBase::buy');
    }

    // 出售
    public function sell($taskValue, $param){
        return msgStr(-1, 'TODO: taskBase::sell');
    }

    // 撤单
    public function cancel($taskValue, $param){
        return msgStr(-1, 'TODO: taskBase::sell');
    }

    /*
    * 持股信息
    * $param[list_type] 资金股票stock 当日成交today_transaction 今日委托today_entrust 历史成交history_transaction 历史委托history_entrust
    *                   资金流水capital_serial 交割单trade_serial
    */
    public function list($taskValue, $param){
        return msgStr(-1, 'TODO: taskBase::list');
    }
};


/*
* 任务值
*/
class taskValue{
    private $_v;
    private $_key;
    private $_changes;
    function __construct($key){
        if (empty($key)) {
            $this->_v = $this->_key = null;
        }
        else{
            $this->_key = 'TASK_KEY|'.$key;
            $this->_v = tools::globalValueGet($this->_key);
            if (empty($this->_v) || !is_array($this->_v)) {
                $this->_v = array();
            }
        }
        $this->_changes = array();
    }
    function __destruct(){
        if (is_array($this->_changes) && count($this->_changes)) {
            tools::globalValueSets($this->_changes);
        }
    }
    // 是否空zhi
    public function isNull(){
        return (empty($this->_v) || !count($this->_v)) ? true : false;
    }
    // 设定值
    public function set($key, $value){
        if ($this->_v !== null) {
            if (!isset($this->_v[$key]) || $this->_v[$key] != $value) {
                $this->_v[$key] = $value;
                $this->_changes[$this->_key.'|'.$key] = $value;
            }
        }
        else{
            App::log()->log_dbg('Cannot set an empty task value('.$key.' => '.$value.')');
        }
    }

    // 获取值
    public function get($key, $default = null){
        if ($this->_v !== null) {
            return isset($this->_v[$key]) ? $this->_v[$key] : $default;
        }
        else{
            App::log()->log_dbg('Cannot get an empty task value');
        }
    }
};

// 获取股票公司信息(回掉函数)
function _getStockCompanyCallback($s_company_id, $task_class){
    $sql_str = "SELECT * FROM stock_company_tb;";
    $rows = App::db()->execAll($sql_str);
    if (is_array($rows)) {
        $ret = array();
        foreach ($rows as $key => $value) {
            $ret[$value['id']] = $value;
        }
        return $ret;
    }
    return null;
}

// 获取股票公司信息
function getStockCompany($s_company_id, $task_class){
    $company_arr = tools::cacheFunc('stock_com', 3600*12, '_getStockCompanyCallback', array($s_company_id, $task_class));
    if (!empty($company_arr)) {
        if (!empty($s_company_id)) {
            return isset($company_arr[$s_company_id]) ? $company_arr[$s_company_id] : null;
        }
        else if (!empty($task_class)) {
            foreach ($company_arr as $key => $value) {
                if ($value['task_class'] == $task_class) {
                    return $value;
                }
            }
        }
    }

    return null;
}



function createTask($task_class){
    if (empty($task_class)) {
        App::log()->log_dbg('Can\'t create empty task:');
        return null;
    }

    // 是否支持此类任务
    $class = 'task_'.$task_class;
    $file_n = 'task/'.$class.'.php';
    if (file_exists($file_n)) {
        require_once($file_n);
        return new $class();
    }
    else{
        App::log()->log_dbg('Can\'t create task:'. $file_n);
        return null;
    }
}

// 处理任务
function taskDo(&$v_task){
    $account = tools::arrayElement($v_task, 'account');
    $task_class = tools::arrayElement($v_task, 'task_class');
    $s_company_id = intval(tools::arrayElement($v_task, 's_company_id'));
    if (empty($task_class) || empty($s_company_id)) {
        $company_set = getStockCompany($s_company_id, $task_class);
        if (empty($company_set)) {
            msgOutputStr(1001, 'cannot do task> invalid company');
            return;
        }

        $task_class = $company_set['task_class'];
        $s_company_id = $company_set['id'];
    }

    $act = tools::arrayElement($v_task, 'act');
    if (empty($account) || empty($act)) {
        msgOutputStr(1002, 'cannot do task> invalid param');
        return;
    }

    // 找到对应任务，执行
    $task = createTask($task_class);
    if (empty($task)) {
        msgOutputStr(1003, 'cannot create task> '.$account .'('.$task_class.')');
        return;
    }

    $taskValue = new taskValue($task_class .'_'. $account);

    if ($taskValue->isNull()) {
        // 初始化值
        $taskValue->set('account', $account);
        $taskValue->set('password', tools::arrayElement($v_task, 'password'));
    }

    if (method_exists($task, $act)) {
        // 是否需要记录性能
        $performance_arr = array('buy', 'sell', 'cancel');
        $start_performace = in_array($act, $performance_arr) ? microtime(true) : null;
        $ret = call_user_func(array($task, $act), $taskValue, $v_task);
        $is_success = 1;
        if (!empty($ret) && is_array($ret)) {
            // 是否有需要输出日志的部分
            if (isset($ret['err']) && !empty($ret['err'])) {
                $is_success = 0;
            }
            if ($start_performace !== null || !$is_success) {// 需要统计性能的，或者出错的处理
                //App::log()->log_test('account('.$account.') task('.$act.') param('.tools::serialize($v_task).') error('.$ret['err'].')> ' .
                //        tools::arrayElement($ret, 'err_msg'), '_task');
                $sql_str = "call log_task_add(?,?,?,?,?);";
                App::db()->execAll($sql_str, array($s_company_id, $act, $account, tools::arrayElement($ret, 'err'), tools::arrayElement($ret, 'err_msg')));
            }
            msgOutput($ret);
        }
        else{
            $is_success = 0;
            msgOutputStr(1010, 'task function('.$act.') ret error> '. tools::serialize($ret));
        }

        if ($start_performace !== null) {// 性能统计
            $cost_time = microtime(true) - $start_performace;
            $sql_str = "call log_performance_add(?,?,?);";
            App::db()->execAll($sql_str, array($s_company_id, $is_success, $cost_time));
        }
    }
}