<?php
/**
* 
*/
/*class permission
{
	
	function menu(argument)
	{*/
		$menu_arr = array(
				array('系统设置','system_set','gear', //菜单名称 ，菜单id ,图标,子级菜单
					array('用户列表','user','user_mgr','user-plus'), //子菜单名称 ，菜单id , 导航链接 ,图标
					array('角色列表','role','user_group','unlock-alt'),
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
				array('交易统计','census','',
					array('业绩列表','gain','','line-chart'),
					array('委托记录','entrust_log','','line-chart'),
					array('成交记录','access_log','','line-chart'),
				),
			);
/*	}
}
	*/

 
?>