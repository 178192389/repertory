<?php




		$group_auth_arr = array(
			'system_set' => '系统设置',
			'user_list' => '管理员列表',
			'group_list' => '用户组列表',

			'account_mgr' => '账户管理',
			'account_list' => '账户列表',
			'company_list' => '机构列表',
			'market_list' => '行情源列表',

			'capital_mgr' => '资产管理',
			'assets_details' => '资产详情',
			'stock_chart' => '股票分析',

			'trade_census' => '交易统计',
			'gain_list' => '业绩列表',
			'entrust_log' => '委托记录',
			'access_log' => '成交记录',
		);



		$menu_arr = array(//父级菜单, 子级菜单,  菜单id ,	导航链接 ,	图标
			array('系统设置',	'0',	'system_set', '#', 'gear'),
			array('系统设置',	'管理员列表',	'user_list', 'admin_user_mgr', 'user'),
			array('系统设置',	'用户组列表',	'group_list', 'admin_user_group', 'unlock-alt'),

			array('账户管理',	'0',		'account_mgr',  '#', 'vcard'),
			array('账户管理',	'账户列表',		'account_list',  '#', 'line-chart'),
			array('账户管理',	'机构列表',		'company_list',  '#', 'line-chart'),
			array('账户管理',	'行情源列表',	'market_list',  '#', 'line-chart'),

			array('资产管理',	'0',		'capital_mgr',  '#', 'money'),
			array('资产管理',	'资产详情',		'assets_details',  'admin_stock_capital', 'line-chart'),
			array('资产管理',	'股票分析',		'stock_chart',  'admin_stock_capital', 'line-chart'),

			array('交易统计',	'0',		'trade_census',	'#',	'money'),
			array('交易统计',	'业绩列表',	'gain_list',	'admin_trade_census',	'money'),
			array('交易统计',	'委托记录',	'entrust_log',	'admin_trade_census',	'money'),
			array('交易统计',	'成交记录',	'access_log',	'admin_trade_census',	'money'),

			);


 










/* function menu(){
	return	$menu_arr = array(
				array('系统设置','system_set','gear', //菜单名称 ，菜单id ,图标,子级菜单
					array('用户列表','user','admin_user_mgr','user-plus'), //子菜单名称 ，菜单id , 导航链接 ,图标
					array('角色列表','role','admin_user_group','unlock-alt'),
				),
				array('账户管理','account_mgr','vcard',
					array('账户列表','account','','line-chart'),
					array('机构列表','company','','line-chart'),
					array('行情源列表','market','','line-chart'),
				),
				array('资产管理','capital','money',
					array('资产详情','details','','line-chart'),
					array('股票分析','chart','','line-chart'),
				),
				array('交易统计','census','money',
					array('业绩列表','gain','','line-chart'),
					array('委托记录','entrust_log','','line-chart'),
					array('成交记录','access_log','','line-chart'),
				),
			);
	}*/
?>