
DROP DATABASE IF EXISTS `jrd_db`;
CREATE DATABASE IF NOT EXISTS `jrd_db` DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
USE `jrd_db`;



CREATE TABLE IF NOT EXISTS `ip_blacklist_tb`(
	`id`						BIGINT(20)			NOT NULL								COMMENT 'id',
	`ip`						CHAR(32)			NOT NULL DEFAULT ''						COMMENT 'ip',
	`err_count`					INT(11)    			NOT NULL DEFAULT 0						COMMENT '错误次数',	
	`lasttime`					DATETIME			NOT NULL DEFAULT '0000-00-00 00:00:00'	COMMENT '上次时间',
	`createtime`				DATETIME			NOT NULL DEFAULT '0000-00-00 00:00:00'	COMMENT '建立时间',
	`is_black`					INT(11)    			NOT NULL DEFAULT 0						COMMENT '是否一直黑名单',
	`account_name` 				CHAR(64)			NOT NULL DEFAULT ''						COMMENT '帐号',
	PRIMARY KEY	( `id` ), KEY( `account_name`)
)ENGINE=MyISAM COMMENT 'ip黑名单';



CREATE TABLE IF NOT EXISTS `account_tb`(
	`account_id`				INT(11) UNSIGNED	AUTO_INCREMENT							COMMENT '帐号id',
	`account_name`				CHAR(64)			NOT NULL DEFAULT ''						COMMENT '名字',
	`account_nick`				CHAR(64)			NOT NULL DEFAULT ''						COMMENT '昵称',
	`account_password`			CHAR(64)			NOT NULL DEFAULT ''						COMMENT '密码',
	`group_id`					INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '组id',
	`risk_id`					INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '风控id',

	`user_set`					TEXT														COMMENT '用户设置',
	`ui_set`					TEXT														COMMENT 'UI设置',

	`order_num`					INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '交易次数',

	`is_multi_login`			INT(11) UNSIGNED    NOT NULL DEFAULT 0						COMMENT '是否允许多人登录',
	`trade_uint_id`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '交易单元id',
	`cash`						DOUBLE				NOT NULL DEFAULT 0						COMMENT '可用资金',

	`is_delete`					INT(11) UNSIGNED    NOT NULL DEFAULT 0						COMMENT '是否删除',
	`createtime`				DATETIME			NOT NULL DEFAULT '0000-00-00 00:00:00'	COMMENT '建立时间',
	`create_ip`					CHAR(32)			NOT NULL DEFAULT ''						COMMENT '建立IP',
	PRIMARY KEY	( `account_id` ), unique( `account_name`)
)ENGINE=MyISAM AUTO_INCREMENT=10000 COMMENT '帐号表';

CREATE TABLE IF NOT EXISTS `group_tb`(
	`group_id`					INT(11) UNSIGNED	AUTO_INCREMENT							COMMENT '组id',
	`group_name`				CHAR(64)			NOT NULL DEFAULT ''						COMMENT '名字',
	`auth`						TEXT				NOT NULL								COMMENT '授权',
	PRIMARY KEY	( `group_id` ), unique( `group_name`)
)ENGINE=MyISAM COMMENT '用户组表';


CREATE TABLE IF NOT EXISTS `stock_capital_tb`(
	`account_id`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '帐号id',
	`stock_code`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '证券代码',
	`stock_name`				CHAR(32)			NOT NULL DEFAULT ''						COMMENT '证券名称',
	`stock_num`					DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券数量',
	`stock_cash`				DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券购买花费',
	unique( `account_id`, `stock_code`), key( `account_id`)
)ENGINE=MyISAM COMMENT '股票资产表';


CREATE TABLE IF NOT EXISTS `stock_allow_tb`(
	`account_id`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '帐号id',
	`stock_code`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '证券代码',
	`stock_name`				CHAR(32)			NOT NULL DEFAULT ''						COMMENT '证券名称',
	unique( `account_id`, `stock_code`), key( `account_id`)
)ENGINE=MyISAM COMMENT '额外允许交易股票表';


CREATE TABLE IF NOT EXISTS `risk_mgr_tb`(
	`risk_id`					INT(11) UNSIGNED	AUTO_INCREMENT							COMMENT 'id',
	`risk_name`					CHAR(64)			NOT NULL DEFAULT ''						COMMENT '名字',
	`risk_value_type`			INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '风险值类型(0亏损)',
	`risk_value_func`			INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '不允许函数(0大于 1小于)',
	`risk_value`				DOUBLE				NOT NULL DEFAULT 0						COMMENT '风险值',
	`ban_buy`					INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '不允许买',
	`ban_sell`					INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '不允许卖',
	`force_sell`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '是否强制平仓',
	`notice`					INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '操作提醒',
	PRIMARY KEY	( `risk_id` ), unique( `risk_name`)
)ENGINE=MyISAM COMMENT '风控表';


CREATE TABLE IF NOT EXISTS `stock_company_tb`(
	`company_id`				INT(11) UNSIGNED	AUTO_INCREMENT							COMMENT 'id',
	`company_name`				CHAR(64)			NOT NULL DEFAULT ''						COMMENT '名字',
	`task_class`				CHAR(64)			NOT NULL DEFAULT ''						COMMENT '类名',
	`is_valid`					INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '是否有效',
	`interface_type`			INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '接口类型',
	`interface_addr`			CHAR(64)			NOT NULL DEFAULT ''						COMMENT '接口地址',
	`interface_version`			INT(11) UNSIGNED	NOT NULL DEFAULT 1						COMMENT '接口版本号',
	`subscriber_addr`			CHAR(64)			NOT NULL DEFAULT ''						COMMENT '订阅服务器地址',
	PRIMARY KEY	( `company_id` ), unique(`company_name`), unique(`task_class`)
)ENGINE=MyISAM COMMENT '证券公司列表';


CREATE TABLE IF NOT EXISTS `stock_company_addr_tb`(
	`id`						INT(11) UNSIGNED	AUTO_INCREMENT							COMMENT 'id',
	`company_id`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '公司id',
	`name`						CHAR(64)			NOT NULL DEFAULT ''						COMMENT '名字',
	`ip`						CHAR(64)			NOT NULL DEFAULT ''						COMMENT 'ip',
	`port`						INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT 'port',
	PRIMARY KEY	( `id` ), key(`company_id`)
)ENGINE=MyISAM COMMENT '证券公司IP列表';


CREATE TABLE IF NOT EXISTS `trade_unit_tb`(
	`trade_uint_id`				INT(11) UNSIGNED	AUTO_INCREMENT							COMMENT 'id',
	`trade_uint_name`			CHAR(64)			NOT NULL DEFAULT ''						COMMENT '名字',
	`mgr_account_id`			INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '部门管理id',
	`cash`						DOUBLE				NOT NULL DEFAULT 0						COMMENT '配额资金',
	PRIMARY KEY	( `trade_uint_id` ), unique(`trade_uint_name`)
)ENGINE=MyISAM COMMENT '股票交易单元';


CREATE TABLE IF NOT EXISTS `stock_account_tb`(
	`stock_account_id`			INT(11) UNSIGNED	AUTO_INCREMENT							COMMENT 'id',
	`nick`						CHAR(32)			NOT NULL DEFAULT ''						COMMENT '别名',
	`company_id`				INT(11) UNSIGNED	NOT NULL								COMMENT '证券公司id',
	`c_account_name`			CHAR(64)			NOT NULL DEFAULT ''						COMMENT '帐号名字',
	`c_account_password`		CHAR(255)			NOT NULL DEFAULT ''						COMMENT '帐号密码',
	`sort_id`					INT(11)				NOT NULL DEFAULT 0						COMMENT '账号优先级',
	`is_delete`					INT(11) UNSIGNED    NOT NULL DEFAULT 0						COMMENT '是否删除(停用)',
	`cash`						DOUBLE				NOT NULL DEFAULT 0						COMMENT '可用资金',
	PRIMARY KEY	( `stock_account_id` ), unique(`company_id`, `c_account_name`)
)ENGINE=MyISAM COMMENT '股票账号表';


CREATE TABLE IF NOT EXISTS `stock_act_tb`(
	`act_id`					BIGINT(20) UNSIGNED	AUTO_INCREMENT							COMMENT 'id',
	`act_name`					CHAR(64)			NOT NULL DEFAULT ''						COMMENT '行为名称',
	`act_param`					TEXT 														COMMENT '行为参数',
	`account_id`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '帐号id',
	`ret`						INT(11)				NOT NULL DEFAULT 0						COMMENT '返回信息(0等待处理 1已处理)',
	`ret_msg`					TEXT 														COMMENT '返回信息',
	PRIMARY KEY	( `act_id` )
)ENGINE=MyISAM COMMENT '证券行为表';


CREATE TABLE IF NOT EXISTS `order_tb`(
	`order_id`					BIGINT(20) UNSIGNED	AUTO_INCREMENT							COMMENT '订单id',
	`order_time`				DATETIME			NOT NULL DEFAULT '0000-00-00 00:00:00'	COMMENT '订单建立时间',
	`order_type`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '交易类型0买 1卖 2撤单',
	`account_id`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '帐号id',
	`stock_code`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '证券代码',
	`stock_name`				CHAR(32)			NOT NULL DEFAULT ''						COMMENT '证券名称',
	`stock_price`				DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券价格',
	`stock_num`					DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券数量',
	`trade_num`					DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券成交数量',
	`trade_stat`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '证券交易状态(0等待处理 1已提交)',
	`trade_msg`					TEXT 														COMMENT '证券交易返回信息',
	PRIMARY KEY	( `order_id` ), KEY(`account_id`)
)ENGINE=MyISAM AUTO_INCREMENT=100000 COMMENT '订单表';

CREATE TABLE IF NOT EXISTS `history_order_tb`(
	`order_id`					BIGINT(20) UNSIGNED	AUTO_INCREMENT							COMMENT '订单id',
	`order_time`				DATETIME			NOT NULL DEFAULT '0000-00-00 00:00:00'	COMMENT '订单建立时间',
	`order_type`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '交易类型0买 1卖 2撤单',
	`account_id`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '帐号id',
	`stock_code`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '证券代码',
	`stock_name`				CHAR(32)			NOT NULL DEFAULT ''						COMMENT '证券名称',
	`stock_price`				DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券价格',
	`stock_num`					DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券数量',
	`trade_num`					DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券成交数量',
	`trade_stat`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '证券交易状态(0等待处理 1已提交)',
	`trade_msg`					TEXT 														COMMENT '证券交易返回信息',
	PRIMARY KEY	( `order_id` ), KEY(`account_id`)
)ENGINE=MyISAM COMMENT '历史订单表';



CREATE TABLE IF NOT EXISTS `trade_tb`(
	`trade_id`					BIGINT(20) UNSIGNED	AUTO_INCREMENT							COMMENT '交易id',
	`trade_time`				DATETIME			NOT NULL DEFAULT '0000-00-00 00:00:00'	COMMENT '交易建立时间',
	`trade_type`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '交易类型0买 1卖',
	`order_id`					BIGINT(20) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '订单id',
	`account_id`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '帐号id',
	`stock_account_id`			INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '证券帐号id',
	`stock_code`				INT(11) UNSIGNED	NOT NULL DEFAULT 0						COMMENT '证券代码',
	`stock_name`				CHAR(32)			NOT NULL DEFAULT ''						COMMENT '证券名称',
	`stock_price`				DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券价格',
	`stock_num`					DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券数量',
	`trade_num`					DOUBLE				NOT NULL DEFAULT 0						COMMENT '证券成交数量',
	`trade_serial`				CHAR(128)			NOT NULL DEFAULT ''						COMMENT '证券交易流水号',
	`trade_stat`				CHAR(32)			NOT NULL DEFAULT ''						COMMENT '证券交易状态',
	PRIMARY KEY	( `trade_id` ), KEY(`order_id`), KEY(`account_id`), KEY(`stock_account_id`)
)ENGINE=MyISAM AUTO_INCREMENT=100000 COMMENT '交易表';


CREATE TABLE IF NOT EXISTS `sys_set_tb`(
	`set_name`					CHAR(64)			NOT NULL DEFAULT ''						COMMENT '设定名',
	`set_value`					TEXT 														COMMENT '设定值',
	PRIMARY KEY	( `set_name` )
)ENGINE=MyISAM COMMENT '系统设定表';



CREATE TABLE IF NOT EXISTS `log_op_tb`(
	`id`						BIGINT(20) UNSIGNED	AUTO_INCREMENT							COMMENT 'id',
	`createtime`				DATETIME			NOT NULL DEFAULT '0000-00-00 00:00:00'	COMMENT '时间',
	`log_type`					INT(11) UNSIGNED	NOT NULL								COMMENT '日志类型',
	`log_type_minor`			INT(11) UNSIGNED	NOT NULL								COMMENT '日志子类型',
	`log_content`				TEXT														COMMENT '日志内容',
	`op_account_id`				INT(11) UNSIGNED	NOT NULL								COMMENT '操作者帐号id',
	`op_ip`						CHAR(32)			NOT NULL DEFAULT ''						COMMENT '操作者IP',
	PRIMARY KEY	( `id` ), KEY(`createtime`), KEY(`log_type`), KEY(`log_type_minor`), KEY(`op_account_id`)
)ENGINE=MyISAM COMMENT '日志表';



CREATE TABLE IF NOT EXISTS `log_task_tb`(
	`id`						BIGINT(20) UNSIGNED	AUTO_INCREMENT							COMMENT 'id',
	`createtime`				DATETIME			NOT NULL DEFAULT '0000-00-00 00:00:00'	COMMENT '时间',
	`s_company_id`				INT(11) UNSIGNED	NOT NULL								COMMENT '证券公司id',
	`task_type`					CHAR(16)			NOT NULL DEFAULT ''						COMMENT '类型',
	`account_name`				CHAR(64)			NOT NULL DEFAULT ''						COMMENT '账号名字',
	`err`						INT(11)				NOT NULL DEFAULT 0						COMMENT '错误代码',
	`err_msg`					TEXT				NOT NULL								COMMENT '错误信息',
	PRIMARY KEY	( `id` ), KEY(`createtime`), KEY(`s_company_id`), KEY(`task_type`), KEY(`err`)
)ENGINE=MyISAM COMMENT '任务日志表';


DELIMITER $$

DROP FUNCTION IF EXISTS blacklist_check $$
CREATE FUNCTION blacklist_check(
	in_ip CHAR(32)
)
RETURNS INT(11)
COMMENT '检查是否地址为黑名单'
BEGIN
	DECLARE v_id BIGINT(20);
	DECLARE v_err_count INT(11) DEFAULT 0;
	DECLARE v_lasttime DATETIME;
	DECLARE v_is_black INT(11) DEFAULT 0;
	DECLARE v_t DATE;
	SET v_t = NOW();
	SET v_id = INET_ATON(in_ip);
	SELECT err_count, lasttime, is_black INTO v_err_count, v_lasttime, v_is_black FROM ip_blacklist_tb WHERE `id` = v_id;
	IF v_is_black > 0 THEN
		RETURN 1;
	ELSEIF (v_err_count > 0) AND (DATEDIFF(v_t, v_lasttime) > 0) THEN
		SET v_err_count = 0;
		UPDATE ip_blacklist_tb SET err_count = v_err_count WHERE `id` = v_id;
	END IF;
	IF v_err_count > 60 THEN
		RETURN 1;
	END IF;
	RETURN 0;
END $$

DROP PROCEDURE IF EXISTS blacklist_add $$
CREATE PROCEDURE blacklist_add(
	IN in_ip CHAR(32),
	IN in_account_name CHAR(64)
)
BEGIN
	INSERT INTO ip_blacklist_tb(id, ip, err_count, lasttime, createtime, account_name)
		VALUES(INET_ATON(in_ip), in_ip, 1, NOW(), NOW(), in_account_name)
		ON DUPLICATE KEY UPDATE err_count = IF(DATEDIFF(lasttime, NOW()), 1, err_count + 1),
		lasttime = NOW(), account_name = in_account_name;
END $$



DROP PROCEDURE IF EXISTS account_login $$
CREATE PROCEDURE account_login(
	IN in_account_name CHAR(64),
	IN in_account_pass CHAR(64),
	IN in_account_auth CHAR(64),
	IN in_ip CHAR(32)
)
COMMENT '管理员帐号登录检查'
BEGIN
	DECLARE v_ret INT(11) DEFAULT 1;
	DECLARE v_ret_msg CHAR(255) DEFAULT '失败';
	DECLARE v_account_id INT(11) UNSIGNED DEFAULT 0;
	DECLARE v_account_nick CHAR(64);
	DECLARE v_account_password CHAR(64);
	DECLARE v_is_multi_login INT(11) UNSIGNED DEFAULT 0;
	label_pro:BEGIN
		IF blacklist_check(in_ip) THEN
			SET v_ret = 2;
			SET v_ret_msg = '账号已经被锁定';
			LEAVE label_pro;
		END IF;
		SELECT account_id,account_nick,account_password,is_multi_login INTO
			v_account_id,v_account_nick,v_account_password,v_is_multi_login FROM account_tb
			WHERE account_name = in_account_name AND is_delete = 0;

		IF (v_account_id IS NULL) OR (v_account_id = 0) THEN
			CALL blacklist_add(in_ip, in_account_name);
			SET v_ret = 3;
			SET v_ret_msg = '账号不存在';
			LEAVE label_pro;
		ELSEIF MD5(CONCAT(in_account_auth, v_account_password)) != in_account_pass THEN
			CALL blacklist_add(in_ip, in_account_name);
			SET v_ret = 4;
			SET v_ret_msg = '密码错误';
			LEAVE label_pro;
		END IF;

		SET v_ret = 0;
		SET v_ret_msg = '';
		INSERT DELAYED IGNORE INTO log_op_tb(createtime,log_type,log_content,op_account_id,op_ip) VALUES(NOW(),1,'登录',v_account_id,in_ip);
	END;
	
	SELECT v_ret as ret, v_ret_msg  as ret_msg, v_account_id as account_id, v_account_nick as account_nick, v_is_multi_login as is_multi_login;
END $$


DROP PROCEDURE IF EXISTS log_task_add $$
CREATE PROCEDURE log_task_add(
	IN in_s_company_id INT(11) UNSIGNED,
	IN in_task_type CHAR(16),
	IN in_account_name CHAR(64),
	IN in_err INT(11),
	IN in_err_msg TEXT
)
BEGIN
	INSERT DELAYED IGNORE INTO log_task_tb(createtime, s_company_id, task_type, account_name, `err`, `err_msg`)
		VALUES(NOW(), in_s_company_id, in_task_type, in_account_name, in_err, in_err_msg);
END $$


DROP PROCEDURE IF EXISTS stock_act_finish $$
CREATE PROCEDURE stock_act_finish(
	IN in_act_id BIGINT(20) UNSIGNED,
	IN in_ret_msg TEXT
)
BEGIN
	UPDATE stock_act_tb SET ret = 1, ret_msg = in_ret_msg WHERE act_id = in_act_id;
END $$



DROP PROCEDURE IF EXISTS stock_act_get_ret $$
CREATE PROCEDURE stock_act_get_ret(
	IN in_act_id BIGINT(20) UNSIGNED,
	IN in_ret_msg TEXT
)
BEGIN
	DECLARE v_ret_msg TEXT;
	SELECT ret_msg INTO v_ret_msg FROM stock_act_tb WHERE act_id = in_act_id AND ret > 0;
	IF v_ret_msg IS NOT NULL THEN
		DELETE FROM stock_act_tb WHERE act_id = in_act_id;
	END IF;
	SELECT v_ret_msg;
END $$


DROP PROCEDURE IF EXISTS stock_order_finish $$
CREATE PROCEDURE stock_order_finish(
	IN in_order_id BIGINT(20) UNSIGNED,
	IN in_ret_msg TEXT
)
BEGIN
	UPDATE order_tb SET trade_stat = 1, trade_msg = in_ret_msg WHERE order_id = in_order_id;
END $$

DROP PROCEDURE IF EXISTS trade_add $$
CREATE PROCEDURE trade_add(
	IN in_trade_type INT(11) UNSIGNED,
	IN in_order_id BIGINT(20) UNSIGNED,
	IN in_account_id INT(11) UNSIGNED,
	IN in_stock_account_id INT(11) UNSIGNED,
	IN in_stock_code INT(11) UNSIGNED,
	IN in_stock_name CHAR(32),
	IN in_stock_price DOUBLE,
	IN in_stock_num DOUBLE,
	IN in_trade_num DOUBLE,
	IN in_trade_serial CHAR(128),
	IN in_trade_stat CHAR(32)
)
BEGIN
	INSERT INTO trade_tb(trade_time,trade_type,order_id,account_id,stock_account_id,stock_code,
		stock_name,stock_price,stock_num,trade_num,trade_serial,trade_stat)
		VALUES(NOW(),in_trade_type,in_order_id,in_account_id,in_stock_account_id,in_stock_code,
		in_stock_name,in_stock_price,in_stock_num,in_trade_num,in_trade_serial,in_trade_stat);
END $$



DROP PROCEDURE IF EXISTS stock_capital_modify $$
CREATE PROCEDURE stock_capital_modify(
	IN in_account_id INT(11) UNSIGNED,
	IN in_stock_code INT(11) UNSIGNED,
	IN in_stock_name CHAR(32),
	IN in_stock_num DOUBLE,
	IN in_stock_cash DOUBLE
)
BEGIN
	INSERT INTO stock_capital_tb(account_id,stock_code,stock_name,stock_num,stock_cash)
		VALUES(in_account_id,in_stock_code,in_stock_name,in_stock_num,in_stock_cash)
		ON DUPLICATE KEY UPDATE stock_num=stock_num+in_stock_num, stock_cash=stock_cash+in_stock_cash;
END $$


DELIMITER ;
