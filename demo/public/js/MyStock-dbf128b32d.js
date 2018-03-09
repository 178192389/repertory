!
function(t) {
	function e(n) {
		if (i[n]) return i[n].exports;
		var o = i[n] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
	}
	var i = {};
	return e.m = t, e.c = i, e.p = "", e(0)
}([function(t, e, i) {
	t.exports = i(1)
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	var o = i(2),
		a = n(o),
		s = i(3),
		r = n(s),
		l = i(10),
		c = n(l),
		d = i(17),
		u = n(d),
		p = i(25),
		h = n(p);
	i(62), a.
default.register({
		id: r.
	default.PluginId,
		title:
		r.
	default.Lang("MyStock"),
		preview:
		"index",
		api: {
			isMyStock: c.
		default.isMyStock,
			getList:
			c.
		default.getList
		}
	}, u.
default), a.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.MyStockListPanelId,
		tags:
		["quote"],
		defaultSize: [483, 679],
		type: 1,
		title: r.
	default.Lang("My Stock List"),
		preview:
		"./plugins/" + r.
	default.PluginId + "/images/mystock_thumb_$skin.jpg",
		desc:
		"您可以将您关注的个股与指数加入自选股列表，根据自己的喜好配置列表字段。同时支持图形浏览模式、右键菜单以及拖动排序等功能。"
	}, p.MyStockListPanel), a.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.MyStockListId,
		type:
		1,
		title: r.
	default.Lang("My Stock List")
	}, h.
default)
}, function(t, e) {
	t.exports = require("hippo/PluginStore")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		if (t && t.__esModule) return t;
		var e = {};
		if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e.
	default = t, e
	}
	function o(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(4),
		s = o(a),
		r = i(5),
		l = n(r),
		c = i(6),
		d = l.lang(function(t) {
			return i(7)("./" + t)
		}),
		u = "MyStock";
	e.
default = {
		PluginId: u,
		MyStockListPanelId: "MyStockListPanel",
		MyStockListId: "MyStockList",
		Lang: d,
		EDITSTOCK_ITEM_SIZE: {
			width: 138,
			height: 110
		},
		MAX_HISTORY: 50,
		ActionTypes: (0, c.enums)({
			OPEN_STOCK_DETAIL: null,
			ADD_STOCK: null,
			REMOVE_STOCK: null,
			SORT_STOCK: null,
			MODIFY: null,
			PREV_STOCK: null,
			NEXT_STOCK: null,
			GET_STOCK_IDX_INFO: null,
			IS_MY_STOCK: null,
			VISIT_STOCK: null,
			ADD_WIDGET_PANEL: null,
			EDIT_WIDGET_PANEL_POS: null,
			DELETE_WIDGET_PANEL: null,
			SWITCH_WIDGET_PANEL: null,
			START_EDIT: null,
			CUSTOM_PANEL_STOCK_FOCUS: null,
			SET_WIDGET_GROUP: null,
			SET_PANEL_CODE: null,
			SET_STOCK_BELL: null,
			IS_SET_BELL: null
		}, u),
		defaultStocks: [{
			market: "sz",
			code: "000776",
			name: "广发证券"
		}, {
			market: "sh",
			code: "000001",
			name: "上证指数"
		}, {
			market: "sz",
			code: "399001",
			name: "深证成指"
		}],
		myStockFilters: s.
	default.map(["全部"], function(t) {
			return {
				label: t,
				hide: !1
			}
		}),
		stockItemMenu:


		function() {
			var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0],
				e = [d("Delete"), d("View")],
				i = ["__seperator__",
				{
					title: d("Buy"),
					style: {
						color: "#dc5e21"
					},
					children: [d("GeneBuy"), d("CollBuy"), d("FinaBuy")]
				}, {
					title: d("Sell"),
					style: {
						color: "#0777c1"
					},
					children: [d("GeneSell"), d("CollSell"), d("MargSell")]
				}],
				n = ["__seperator__",
				{
					title: d("Move"),
					children: [d("Prev"), d("Next"), d("Top"), d("Bottom")]
				}];
			return t ? e.concat(i, n) : e.concat(n)
		},
		recentItemMenu: function() {
			var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0],
				e = [d("View")],
				i = ["__seperator__",
				{
					title: d("Buy"),
					style: {
						color: "#dc5e21"
					},
					children: [d("GeneBuy"), d("CollBuy"), d("FinaBuy")]
				}, {
					title: d("Sell"),
					style: {
						color: "#0777c1"
					},
					children: [d("GeneSell"), d("CollSell"), d("MargSell")]
				}];
			return t ? e.concat(i) : e
		},
		MAX_PANEL_WIDGETS: 15,
		GROUPS: [d("Group0"), d("Group1"), d("Group2"), d("Group3"), d("Group4"), d("Group5")],
		CUSTOM_PANEL_TYPE: ["Integrate", "Individual", "Custom"],
		recentStockListSchema: {
			type: "array",
			items: [{
				type: "object",
				properties: {
					market: {
						type: "string"
					},
					code: {
						type: "string"
					},
					name: {
						type: "string"
					}
				},
				required: ["market", "code", "name"]
			}]
		},
		panelsSchema: {
			type: "array",
			items: [{
				type: "object",
				properties: {
					code: {
						type: "string"
					},
					hidden: {
						type: "boolean"
					},
					id: {
						type: "string"
					},
					label: {
						type: "string"
					},
					market: {
						type: "string"
					},
					type: {
						type: "string"
					}
				},
				required: ["code", "hidden", "id", "market", "type"]
			}]
		},
		defaultCustomPanel: {
			Integrate: {
				maxCol: 3,
				maxRow: 2,
				widgets: {
					"Integrate:row1:MyStock:MyStockListPanel": {
						unionId: "MyStock:MyStockListPanel",
						width: "33.33%",
						height: "50%",
						group: "1",
						grid: "row-1"
					},
					"Integrate:row1:StockQuote:StockTimeSeriesWrap": {
						unionId: "StockQuote:StockTimeSeriesWrap",
						width: "33.33%",
						height: "50%",
						group: "1",
						grid: "row-1"
					},
					"Integrate:row1:StockQuote:StockGraph": {
						unionId: "StockQuote:StockGraph",
						width: "33.33%",
						height: "50%",
						group: "1",
						grid: "row-1"
					},
					"Integrate:row2:StockQuote:QuoteList": {
						unionId: "StockQuote:QuoteList",
						width: "33.33%",
						height: "50%",
						group: "2",
						grid: "row-2"
					},
					"Integrate:row2:StockQuote:StockTimeSeriesWrap": {
						unionId: "StockQuote:StockTimeSeriesWrap",
						width: "33.33%",
						height: "50%",
						group: "2",
						grid: "row-2"
					},
					"Integrate:row2:StockQuote:StockGraph": {
						unionId: "StockQuote:StockGraph",
						width: "33.33%",
						height: "50%",
						group: "2",
						grid: "row-2"
					}
				}
			},
			Individual: {
				maxCol: 3,
				maxRow: 2,
				widgets: {
					"Individual:row1:StockQuote:QuoteList": {
						unionId: "StockQuote:QuoteList",
						width: "33.33%",
						height: "50%",
						group: "1",
						grid: "row-1",
						market: "sz",
						code: "000776"
					},
					"Individual:row1:StockQuote:StockTimeSeriesWrap": {
						unionId: "StockQuote:StockTimeSeriesWrap",
						width: "33.33%",
						height: "50%",
						group: "1",
						grid: "row-1",
						market: "sz",
						code: "000776"
					},
					"Individual:row1:StockQuote:StockBriefLinesPanel": {
						unionId: "StockQuote:StockBriefLinesPanel",
						width: "33.33%",
						height: "110",
						group: "1",
						grid: "row-1",
						market: "sz",
						code: "000776"
					},
					"Individual:row2:StockQuote:StockGraph": {
						unionId: "StockQuote:StockGraph",
						width: "33.33%",
						height: "50%",
						grid: "row-2",
						market: "sh",
						code: "000001"
					},
					"Individual:row2:col2:StockQuote:StockGraph": {
						unionId: "StockQuote:StockGraph",
						width: "33.33%",
						height: "50%",
						group: "1",
						grid: "row-2",
						market: "sz",
						code: "000776"
					},
					"Individual:row3:StockQuote:StockTickDuel": {
						unionId: "StockQuote:StockTickDuel",
						width: "33.33%",
						height: "50%",
						group: "1",
						grid: "row-2",
						market: "sz",
						code: "000776",
						growH: 110,
						offset: {
							x: 0,
							y: -50,
							dx: 0,
							dy: 110,
							dw: 0,
							dh: 0
						}
					},
					"Individual:row2:StockQuote:StockTickFive": {
						unionId: "StockQuote:StockTickFive",
						width: "33.33%",
						height: "50%",
						group: "1",
						grid: "row-3",
						market: "sz",
						code: "000776",
						growH: 110,
						offset: {
							x: 66.66,
							y: -50,
							dx: 6,
							dy: 55,
							dw: 0,
							dh: -3
						}
					}
				}
			}
		}
	}, t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/lib/underscore")
}, function(t, e) {
	t.exports = require("hippo/i18n")
}, function(t, e) {
	t.exports = require("hippo/utils")
}, function(t, e, i) {
	function n(t) {
		return i(o(t))
	}
	function o(t) {
		return a[t] ||
		function() {
			throw new Error("Cannot find module '" + t + "'.")
		}()
	}
	var a = {
		"./zh-cn": 8,
		"./zh-cn.js": 8,
		"./zh-hk": 9,
		"./zh-hk.js": 9
	};
	n.keys = function() {
		return Object.keys(a)
	}, n.resolve = o, t.exports = n, n.id = 7
}, function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.
default = {
		Abort: "取消",
		Add: "添加自选",
		"Add Widget": "添加组件",
		Bottom: "置底",
		Buy: "买入",
		CollBuy: "担保品买入",
		CollSell: "担保品卖出",
		Combination: "组合",
		Custom: "自定义",
		CustomPanelLabel: "自定义面板",
		Delete: "删除自选",
		DeletePanel: "删除面板",
		Down: "下移",
		EditLabel: "修改名称",
		EditMyStockList: "编辑自选",
		Exchange: "替换",
		FinaBuy: "融资买入",
		GeneBuy: "普通买入",
		GeneSell: "普通卖出",
		Group: "分组",
		Group0: "清除分组",
		Group1: "分组1",
		Group2: "分组2",
		Group3: "分组3",
		Group4: "分组4",
		Group5: "分组5",
		Individual: "个股追踪",
		Integrate: "综合盯盘",
		MargSell: "融券卖出",
		Move: "移动",
		"My Stock List": "自选",
		MyStock: "自选",
		Next: "后移",
		OK: "确定",
		"Panel Manager": "面板管理",
		PanelSelect: "面板选择",
		Prev: "前移",
		RecentStock: "最近浏览",
		Save: "保存",
		Sell: "卖出",
		Top: "置顶",
		Up: "上移",
		View: "查看详情",
		"Widget Data": "两行",
		"Widget Data More": "多行",
		"Widget Delete": "删除",
		"Widget Five": "五档",
		"Widget Graph": "图形",
		"Widget MyStock": "自选",
		"Widget News": "资讯",
		"Widget Quote": "行情",
		"Widget TickDuel": "成交",
		"Widget TimeSeries": "分时"
	}, t.exports = e.
default
}, function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.
default = {
		Abort: "取消",
		Add: "添加自選",
		"Add Widget": "添加組件",
		Bottom: "置底",
		Buy: "買入",
		CollBuy: "擔保品買入",
		CollSell: "擔保品賣出",
		Combination: "組合",
		Custom: "自定義",
		CustomPanelLabel: "自定義面板",
		Delete: "刪除自選",
		DeletePanel: "刪除面板",
		Down: "下移",
		EditLabel: "修改名稱",
		EditMyStockList: "編輯自選",
		Exchange: "替換",
		FinaBuy: "融資買入",
		GeneBuy: "普通買入",
		GeneSell: "普通賣出",
		Group: "分組",
		Group0: "清除分組",
		Group1: "分組1",
		Group2: "分組2",
		Group3: "分組3",
		Group4: "分組4",
		Group5: "分組5",
		Individual: "個股追蹤",
		Integrate: "綜合盯盤",
		MargSell: "融券賣出",
		Move: "移動",
		"My Stock List": "自選",
		MyStock: "自選",
		Next: "後移",
		OK: "確定",
		"Panel Manager": "面板管理",
		PanelSelect: "面板選擇",
		Prev: "前移",
		RecentStock: "最近瀏覽",
		Save: "保存",
		Sell: "賣出",
		Top: "置頂",
		Up: "上移",
		View: "查看詳情",
		"Widget Data": "兩行",
		"Widget Data More": "多行",
		"Widget Delete": "刪除",
		"Widget Five": "五檔",
		"Widget Graph": "圖形",
		"Widget MyStock": "自選",
		"Widget News": "資訊",
		"Widget Quote": "行情",
		"Widget TickDuel": "成交",
		"Widget TimeSeries": "分時"
	}, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(11),
		a = n(o),
		s = i(13),
		r = n(s),
		l = i(3),
		c = n(l),
		d = i(14),
		u = n(d),
		p = i(15),
		h = i(16),
		f = n(h),
		m = window.require("hippo/lib/underscore"),
		g = window.require("hippo/lib/events").EventEmitter,
		b = window.require("hippo/AppDispatcher"),
		k = window.require("hippo/ConfigStore"),
		v = window.require("hippo/SessionStore"),
		y = window.require("hippo/CodeList"),
		C = {
			read: function() {
				var t = this;
				this._list = [], this._hash = {};
				var e;
				try {
					e = JSON.parse(k.getItem(c.
				default.PluginId, "MyStockList", c.
				default.recentStockListSchema)) || c.
				default.defaultStocks
				} catch (t) {
					e = c.
				default.defaultStocks
				}
				e.forEach(function(e) {
					t._add(e.market, e.code, e.name, e.conds)
				})
			},
			write: function() {
				k.setItem(c.
			default.PluginId, "MyStockList", JSON.stringify(this._list), c.
			default.recentStockListSchema)
			},
			getRecentList: function() {
				return JSON.parse(Storage.getItem("RecentList"))
			},
			getList: function() {
				return this._list
			},
			add: function() {
				this._add.apply(this, arguments), this.write()
			},
			size: function() {
				return this._list.length
			},
			_add: function(t, e, i, n) {
				var o = t;
				"object" == typeof t ? (o = t, t = o.market, e = o.code) : o = {
					market: t,
					code: e,
					name: i
				}, n && (o.conds = n), this._list.push(o), this._hash[t + ":" + e] = o
			},
			remove: function(t, e) {
				this._remove(t, e), this.write()
			},
			_remove: function(t, e) {
				var i = this._hash[t + ":" + e];
				i && (this._list.splice(this._list.indexOf(i), 1), delete this._hash[t + ":" + e])
			},
			isMyStock: function(t, e) {
				return t + ":" + e in this._hash
			},
			isSetBell: function(t, e) {
				if (this.isMyStock(t, e)) {
					var i = this._hash[t + ":" + e].conds,
						n = i && (i.pGe || i.pLe || i.ppGe);
					return n ? i : n
				}
				return !1
			},
			sort: function(t, e, i, n) {
				var o = this._list[i];
				if (o.market != t || o.code != e) throw "Source index does not match";
				this._list.splice(i, 1), this._list.splice(n, 0, o), this.write()
			},
			modify: function(t) {
				this._list = [], this._hash = [];
				for (var e = 0; e < t.length; e++) this._add(t[e].market, t[e].code, t[e].name, t[e].conds);
				this.write()
			},
			prevStock: function(t, e) {
				var i = this._list.indexOf(this._hash[t + ":" + e]);
				if (0 == i || i == -1) return null;
				i -= 1;
				var n = this._list[i],
					o = !0,
					a = !0;
				return i > 0 && (o = !1), i < this._list.length - 1 && (a = !1), {
					stock: n,
					isFirst: o,
					isLast: a
				}
			},
			nextStock: function(t, e) {
				var i = this._list.indexOf(this._hash[t + ":" + e]);
				if (i == this._list.length - 1 || i == -1) return null;
				i += 1;
				var n = this._list[i],
					o = !0,
					a = !0;
				return i > 0 && (o = !1), i < this._list.length - 1 && (a = !1), {
					stock: n,
					isFirst: o,
					isLast: a
				}
			},
			getStockIdxInfo: function(t, e) {
				var i = this._list.indexOf(this._hash[t + ":" + e]),
					n = !0,
					o = !0;
				return i > 0 && (n = !1), i < this._list.length - 1 && (o = !1), {
					isFirst: n,
					isLast: o
				}
			},
			setVersion: function(t) {
				this.version = t
			},
			getVersion: function() {
				return this.version
			},
			modifyOneStock: function(t, e, i, n) {
				var o = this._hash[t + ":" + e];
				o ? o.conds = n : this._add(t, e, i, n), this.write()
			}
		};
	C.read();
	var S = m.extend(Object.create(g.prototype), {
		isMyStock: function(t, e) {
			return C.isMyStock(t, e)
		},
		isSetBell: function(t, e) {
			return C.isSetBell(t, e)
		},
		getList: function() {
			return C.getList()
		},
		sync: function() {
			var t, e, i = v.getLogin();
			i && u.
		default.getStocks(null, i).then(function(i) {
				t = [], C.setVersion(i.version), e = i.stocks ? i.stocks.length : 0, i.stocks.map(function(e, i) {
					var n = {};
					n.code = e.code, n.market = e.market;
					var o = y.get(e.market, e.code);
					e.conds && (n.conds = e.conds), o && (n.name = o.name, t.push(n))
				}), t.length || (t = c.
			default.defaultStocks, u.
			default.addAllStocks(C.getVersion(), t, v.getLogin()).then(function(t) {
					console.log("默认自选股添加成功"), t.msg || C.setVersion(t.version)
				}, function(t) {
					console.log("默认自选股添加失败")
				})), C.modify(t), S.emit("SYNC", !0), a.
			default.SYNCMyStock()
			}, function(t) {
				f.
			default.reportErr("gf_trader_MyStock_syncMyStocks", {
					err: t
				}, 500, "-1", "自选股拉取失败"), console.log("Cannot sync stock list!")
			})
		},
		dispatcherIndex: b.register(function(t) {
			var e = t.action;
			switch (e.type) {
			case c.
			default.ActionTypes.ADD_STOCK:
				var i = e.market,
					n = e.code,
					o = e.name;
				if (C.isMyStock(i, n)) return;
				C.add(i, n, o), v.isLogin() && u.
			default.addStock(C.getVersion(), [{
					market: i,
					code: n
				}], v.getLogin()).then(function(t) {
					console.log("添加自选股成功"), t.msg || C.setVersion(t.version || t.nowVersion)
				}, function(t) {
					f.
				default.reportErr("gf_trader_MyStock_addMyStocks", {
						ret: ret
					}, 500, "-1", "添加自选股失败")
				}), setTimeout(function() {
					S.emit("ADD_STOCK", {
						market: i,
						code: n,
						name: o
					})
				}, 0), S.emit("change");
				break;
			case c.
			default.ActionTypes.SET_STOCK_BELL:
				var a = e.adds,
					i = a.market,
					n = a.code,
					o = a.name,
					s = a.conds;
				s.pGe || s.pLe || s.ppGe;
				C.modifyOneStock(i, n, o, s), v.isLogin() && u.
			default.addStock(C.getVersion(), [e.adds], v.getLogin()).then(function(t) {
					console.log("自选股预警设置成功"), t.msg || C.setVersion(t.version)
				}, function(t) {}), setTimeout(function() {
					S.emit("ADD_STOCK", {
						market: i,
						code: n,
						name: o,
						conds: s
					})
				}, 0);
				break;
			case c.
			default.ActionTypes.REMOVE_STOCK:
				var i = e.market,
					n = e.code;
				C.remove(i, n), v.isLogin() && u.
			default.removeStock(C.getVersion(), [{
					market: i,
					code: n
				}], v.getLogin()).then(function(t) {
					t.msg || C.setVersion(t.version)
				}, function(t) {
					f.
				default.reportErr("gf_trader_MyStock_deleteMyStocks", {
						ret: t
					}, 500, "-1", "删除自选股失败"), 503 == t.status && !
					function() {
						var t = p.Popup.show({
							className: "MyStock_DeleteStockTooFast",
							content: r.
						default.createElement("div", null, "速度太快了，我都跟不上啦！"),
							title:
							"提示",
							modal: !0,
							buttons: none
						});
						setTimeout(function() {
							t.close(), t = null
						}, 2e4)
					}()
				}), setTimeout(function() {
					S.emit("REMOVE_STOCK", {
						market: i,
						code: n
					})
				}, 0), S.emit("change");
				break;
			case c.
			default.ActionTypes.SORT_STOCK:
				var l = e.dstIdx;
				if (l < 0 && (l += C.size()), e.srcIdx < 0 || l >= C.size()) return;
				C.sort(e.market, e.code, e.srcIdx, l), v.isLogin() && u.
			default.addAllStocks(C.getVersion(), C.getList(), v.getLogin()).then(function(t) {
					t.msg || C.setVersion(t.version)
				}), S.emit("change");
				break;
			case c.
			default.ActionTypes.MODIFY:
				C.modify(e.list), v.isLogin() && u.
			default.addAllStocks(C.getVersion(), e.list, v.getLogin()).then(function(t) {
					console.log("编辑自选股成功"), t.msg || C.setVersion(t.version)
				}, function(t) {
					f.
				default.reportErr("gf_trader_MyStock_editMyStocks", {
						ret: t
					}, 500, "-1", "编辑自选股失败"), console.log("编辑自选股失败")
				}), S.emit("change");
				break;
			case c.
			default.ActionTypes.PREV_STOCK:
				e.cbk(C.prevStock(e.market, e.code));
				break;
			case c.
			default.ActionTypes.NEXT_STOCK:
				e.cbk(C.nextStock(e.market, e.code));
				break;
			case c.
			default.ActionTypes.GET_STOCK_IDX_INFO:
				e.cbk(C.getStockIdxInfo(e.market, e.code));
				break;
			case c.
			default.ActionTypes.IS_MY_STOCK:
				e.cbk(C.isMyStock(e.market, e.code));
				break;
			case c.
			default.ActionTypes.IS_SET_BELL:
				e.cbk(C.isSetBell(e.market, e.code))
			}
		})
	});
	v.addChangeListener(function() {
		v.isLogin() && S.sync()
	}), v.isLogin() && S.sync(), e.
default = S, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(12),
		a = n(o),
		s = i(3),
		r = n(s);
	e.
default = {
		openDetail: function(t, e, i) {
			a.
		default.handlePluginAction({
				type: r.
			default.ActionTypes.OPEN_STOCK_DETAIL,
				market:
				t,
				code: e,
				gridType: i
			})
		},
		addStock: function(t, e, i) {
			a.
		default.handlePluginAction({
				type: r.
			default.ActionTypes.ADD_STOCK,
				code:
				e,
				market: t,
				name: i
			})
		},
		removeStock: function(t, e) {
			a.
		default.handlePluginAction({
				type: r.
			default.ActionTypes.REMOVE_STOCK,
				market:
				t,
				code: e
			})
		},
		sortStock: function(t, e, i, n) {
			a.
		default.handlePluginAction({
				type: r.
			default.ActionTypes.SORT_STOCK,
				market:
				t,
				code: e,
				srcIdx: i,
				dstIdx: n
			})
		},
		modifyStockList: function(t) {
			a.
		default.handlePluginAction({
				type: r.
			default.ActionTypes.MODIFY,
				list:
				t
			})
		},
		isMyStock: function(t, e, i) {
			a.
		default.handlePluginAction({
				type: r.
			default.ActionTypes.IS_MY_STOCK,
				market:
				t,
				code: e,
				cbk: i
			})
		},
		setStockBell: function(t, e, i, n) {
			a.
		default.handlePluginAction({
				type: "MyStock:SET_STOCK_BELL",
				market: t,
				code: e,
				name: i,
				conds: n
			})
		},
		isSetBell: function(t, e, i) {
			a.
		default.handlePluginAction({
				type: "MyStock:IS_SET_BELL",
				market: t,
				code: e,
				cbk: i
			})
		},
		SYNCMyStock: function() {
			a.
		default.handlePluginAction({
				type: "MyStock:SYNC_MY_STOCK"
			})
		}
	}, t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/AppDispatcher")
}, function(t, e) {
	t.exports = require("hippo/lib/react")
}, function(t, e, i) {
	"use strict";
	var n = window.require("hippo/lib/jquery"),
		o = window.require("hippo/lib/underscore"),
		a = window.require("hippo/URL"),
		s = a.WS_URL,
		r = o.extend({}, {
			getStocks: function(t, e) {
				return n.ajax({
					headers: {
						token: e.token
					},
					cache: !1,
					url: s + "/api/favstock/gft/" + e.id + "?version=-1",
					contentType: "application/json",
					method: "get"
				})
			},
			addStock: function(t, e, i) {
				var o = "/api/favstock/log/gft/" + i.id + "?version=" + t;
				return n.ajax({
					headers: {
						token: i.token
					},
					url: s + o,
					method: "post",
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						adds: e
					})
				})
			},
			setStockBell: function(t, e, i) {
				var o = "/api/favstock/log/gft/" + i.id + "?version=" + t;
				return n.ajax({
					headers: {
						token: i.token
					},
					url: s + o,
					method: "post",
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						adds: e
					})
				})
			},
			removeStock: function(t, e, i) {
				var o = "/api/favstock/log/gft/" + i.id + "?version=" + t;
				return n.ajax({
					headers: {
						token: i.token
					},
					url: s + o,
					method: "post",
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						dels: e
					})
				})
			},
			updateOrder: function() {},
			addAllStocks: function(t, e, i) {
				var o = "/api/favstock/replace/gft/" + i.id + "?version=" + t,
					a = [];
				return e.forEach(function(t, e) {
					var i = {};
					i.market = t.market, i.code = t.code, i.sort = e, a.push(i)
				}), n.ajax({
					method: "post",
					url: s + o,
					headers: {
						token: i.token
					},
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify({
						stocks: a
					})
				})
			}
		});
	t.exports = r
}, function(t, e) {
	t.exports = require("hippo/UI")
}, function(t, e) {
	t.exports = require("hippo/reporter")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(4),
		a = n(o),
		s = i(13),
		r = n(s),
		l = i(12),
		c = n(l),
		d = i(2),
		u = n(d),
		p = i(18),
		h = n(p),
		f = i(15),
		m = i(6),
		g = i(19),
		b = n(g),
		k = i(20),
		v = n(k),
		y = i(21),
		C = n(y),
		S = i(22),
		x = n(S),
		w = i(3),
		M = n(w),
		E = i(23),
		_ = n(E),
		P = i(42),
		L = n(P),
		T = i(52),
		N = n(T),
		I = i(53),
		D = n(I),
		O = i(56),
		A = n(O),
		z = i(40),
		W = n(z),
		R = i(38),
		B = {
			MyStock: _.
		default,
			Combination:
			L.
		default,
			AddPanel:
			D.
		default,
			RecentStock:
			N.
		default,
			StockDetail:
			null,
			StockTickDuelAll: null
		},
		j = {
			curTab: null,
			tabs: [],
			tabsStack: [],
			tempUuidObj: {}
		};
	c.
default.register(function(t) {
		var e = t.action;
		switch (e.type) {
		case M.
		default.ActionTypes.OPEN_STOCK_DETAIL:
			var i = e.id,
				n = e.market,
				o = e.code,
				a = e.name,
				s = e.star,
				r = e.gridType,
				l = e.subtype,
				d = e.url;
			j.jump = {
				id: i,
				market: n,
				code: o,
				name: a,
				star: s,
				gridType: r,
				subtype: l,
				url: d
			}, setTimeout(function() {
				c.
			default.handleViewAction({
					type: "WINDOW.SHOWTAB",
					id: M.
				default.PluginId
				})
			}, 0)
		}
	});
	var G = r.
default.createClass({
		displayName: "MyStock",
		mixins: [h.
	default],
		getInitialState: function() {
			var t = v.
		default.getPath();
			if (j.jump) {
				var e = j.jump,
					i = e.id,
					n = e.market,
					o = e.code,
					a = e.name,
					s = e.subtype,
					r = i || n + ":" + o,
					l = "IFRAME" == s ? "IframeOpener" : "StockDetail";
				this.hasTab(r) ? this.removeTabsStack(r) : j.tabs = j.tabs.concat([{
					id: r,
					cid: l,
					label: a || "详情",
					config: j.jump,
					closable: !0
				}]), j.curTab = r, j.tabsStack.push(r), v.
			default.push(M.
			default.PluginId, r, null, !0)
			} else if (t) if (j.urlPath = t, j.curTab = t, t.indexOf(":") !== -1) {
				var c = t.split(":"),
					l = void 0,
					r = void 0,
					s = void 0,
					n = void 0,
					o = void 0,
					d = void 0,
					u = void 0,
					p = void 0,
					h = !1;
				"f10" === c[0] ? (l = "IframeOpener", n = c[1], o = c[2], r = "f10:" + n + ":" + o, s = "IFRAME", d = x.
			default.get(n, o), !! d && (u = "F10:" + d.name), p = "http://f9.chinabigdata.com/" + n.toUpperCase() + o + ".html?v=1", h = 3 === c.length && !! d && (0, m.isStockHaveF10)(d)) : (l = "StockDetail", n = c[0], o = c[1], r = n + ":" + o, s = "ENTER_STOCK", d = x.
			default.get(n, o), u = !! d && d.name, h = 2 === c.length && !! d), h && !this.hasTab(r) && (j.tabs = j.tabs.concat([{
					id: r,
					cid: l,
					label: u || "详情",
					config: {
						id: r,
						market: n,
						code: o,
						name: u,
						cid: l,
						subtype: s,
						url: p
					},
					closable: !0
				}]), j.tabsStack.push(r))
			} else W.
		default.hasPanel(t, !0) && j.tabsStack.push(t);
			else j.curTab || (j.curTab = "MyStock", j.tabsStack.push("MyStock"));
			return j
		},
		setToolBtns: function(t) {
			this.refs.toolBtns.showBtns(t)
		},
		onUrlChange: function(t, e) {
			this.refs.tabs.setTab(e)
		},
		onTabChange: function(t) {
			!t && (t = "MyStock"), j.curTab = t;
			var e = j.tabsStack;
			0 !== e.length && e[e.length - 1] === t || (this.removeTabsStack(t), e.push(t)), t.indexOf(":") != -1 && this.setToolBtns([R.configBtn]), v.
		default.push(M.
		default.PluginId, t, null, !0)
		},
		componentDidMount: function() {
			var t = this;
			W.
		default.on("change", this._onChange), m.Event.watch(this.getDOMNode(), this.openStockDetail), v.
		default.watch(this.onUrlChange), this.dispatchId = c.
		default.register(function(e) {
				var i = e.action;
				switch (i.type) {
				case M.
				default.ActionTypes.OPEN_STOCK_DETAIL:
					var n = i.market,
						o = i.code,
						a = i.name,
						s = i.gridType,
						r = i.id,
						l = !0,
						c = n + ":" + o;
					t.addTab({
						id: c,
						cid: "StockDetail",
						label: a || "详情",
						gridType: s,
						config: i,
						closable: !0
					}, l, r);
					break;
				case "WINDOW.RESIZE":
					t.refs.tabs.resize()
				}
			}), this._shortcut_esc = C.
		default.reg("esc", function() {
				var e = j.curTab || "MyStock",
					i = void 0,
					n = void 0,
					o = void 0;
				t.getAllTabs().some(function(t, o) {
					if (t.id === e) return i = t, n = o, !0
				}), void 0 !== n && i.closable && (o = t.closeJumpTab(), j.jump = !0, t.closeTab(null, e), v.
			default.push(M.
			default.PluginId, o, null, !0))
			})
		},
		componentWillUnmount: function() {
			W.
		default.removeListener("change", this._onChange), m.Event.unwatch(this.getDOMNode(), this.openStockDetail), v.
		default.unwatch(this.onUrlChange), c.
		default.unregister(this.dispatchId), j.tabs = this.state.tabs, C.
		default.cancel("esc", this._shortcut_esc)
		},
		closeJumpTab: function(t) {
			var e = j.tabsStack,
				i = "MyStock";
			if (e.length > 0) if (void 0 !== t && e[e.length - 1] !== t) this.removeTabsStack(t), i = j.curTab;
			else {
				e.pop();
				for (var n = e.length - 1; n > -1 && (e[n].indexOf("-") != -1 && !W.
			default.hasPanel(e[n], !0) && !j.tempUuidObj.hasOwnProperty(e[n]) || e[n].indexOf(":") != -1 && !this.hasTab(e[n]));) e.pop(), --n;
				n > -1 && (i = e[n])
			}
			return i.indexOf(":") != -1 && this.setToolBtns([R.configBtn]), this.refs.tabs.setTab(i), j.curTab = i, i
		},
		closeAndJumpToTab: function(t, e) {
			e ? (j.curTab = e, this.removeTabsStack(t), j.tabsStack.push(e)) : this.closeJumpTab(), j.jump = !0, this.closeTab(null, t)
		},
		removeTabsStack: function(t) {
			var e = void 0;
			j.tabsStack.some(function(i, n) {
				if (t == i) return e = n, !0
			}), void 0 !== e && j.tabsStack.splice(e, 1)
		},
		_onChange: function(t) {
			var e = j.curTab;
			t && "add" === t.type ? (j.curTab = t.id, j.tabsStack.push(t.id), j.jump = !0, this.refs.tabs.setTab(t.id)) : e.indexOf("-") == -1 || W.
		default.hasPanel(e, !0) || (this.closeJumpTab(), j.jump = !0), this.forceUpdate()
		},
		openStockDetail: function(t) {
			var e = t.detail,
				i = e.id,
				n = e.type,
				o = e.subtype,
				a = e.market,
				s = e.code,
				r = e.name;
			if ("ADD_TAB" == n) {
				var l;
				"ENTER_DUELALL" == o ? i = l = "StockTickDuelAll" : "ENTER_STOCK" == o ? (i = i || a + ":" + s, l = "StockDetail") : "IFRAME" == o && (l = "IframeOpener"), this.addTab({
					id: i,
					cid: l,
					label: r || "详情",
					config: t.detail,
					closable: !0
				}, !0)
			}
		},
		createTab: function() {
			var t = b.
		default.v1();
			j.tempUuidObj[t] = 1, this.addTab({
				id: t,
				cid: "AddPanel",
				label: "添加面板",
				closable: !0
			}, !0)
		},
		hasTab: function(t) {
			var e = this.state ? this.state.tabs : j.tabs;
			return e.some(function(e, i) {
				return e.id == t
			})
		},
		addTab: function(t, e, i) {
			var n = this,
				o = t.id || t.cid || this.getAllTabs().length,
				a = {};
			if (a.tabs = this.state.tabs, i) {
				for (var s = -1, r = -1, l = 0; l < a.tabs.length; l++) a.tabs[l].id == i && (s = l), a.tabs[l].id == o && (r = l);
				s >= 0 && (r >= 0 ? a.tabs.splice(s, 1) : a.tabs[s] = t)
			} else if (this.hasTab(o)) {
				if ("StockTickDuelAll" == o) {
					var c = a.tabs.findIndex(function(t) {
						return t.id === o
					});
					void 0 !== c ? a.tabs.splice(c, 1, t) : a.tabs.push(t)
				}
			} else a.tabs.push(t);
			this.removeTabsStack(o), j.tabsStack.push(o), this.setState(a, function() {
				e && (n.refs.tabs.setTab(o), o.indexOf(":") != -1 && n.setToolBtns([R.configBtn]), v.
			default.push(M.
			default.PluginId, o, null, !0))
			})
		},
		closeTab: function(t, e) {
			var i = this.state.tabs,
				n = -1;
			i.some(function(t, i) {
				if (t.id == e) return n = i, !0
			}), n != -1 && (i.splice(n, 1), this.forceUpdate())
		},
		getAllTabs: function() {
			return W.
		default.getAllPanels().filter(function(t) {
				return !t.hidden
			}).concat(this.state.tabs)
		},
		render: function() {
			var t, e = this,
				i = this.getAllTabs().map(function(t, i) {
					var n, o = a.
				default.extend({}, t, t.config, {
						idx: i,
						setToolBtns: e.setToolBtns,
						closeAndJumpToTab: e.closeAndJumpToTab,
						_forceUpdateRandom: e._forceUpdateRandom
					});
					return o.id = t.id || t.cid || i, o.key = o.id, t.configuable ? n = A.
				default:
					(B.StockDetail = u.
				default.getImpl("StockQuote:StockDetail"), B.StockTickDuelAll = u.
				default.getImpl("StockQuote:StockTickDuelAll"), B.IframeOpener = F, n = B[t.cid]), r.
				default.createElement(n, o)
				});
			return (j.jump || j.urlPath || null !== j.curTab) && (t = j.curTab, delete j.jump, delete j.urlPath), r.
		default.createElement(f.Tabs, {
				ref: "tabs",
				id: "MyStock-Tab",
				noPersist: !0,
				className: "MyStock Dark",
				closeTab: this.closeTab,
				curTab: t,
				toolBtns: r.
			default.createElement(U, {
					ref: "toolBtns"
				}),
				tabChanged:
				this.onTabChange,
				closeJumpTab: this.closeJumpTab,
				createTab: this.createTab
			}, i)
		}
	}),
		U = r.
	default.createClass({
			displayName: "ToolBtns",
			getInitialState: function() {
				return {
					btns: []
				}
			},
			showBtns: function(t) {
				this.setState({
					btns: t
				})
			},
			render: function() {
				return r.
			default.createElement("div", null, this.state.btns)
			}
		}),
		F = r.
	default.createClass({
			displayName: "IframeOpener",
			render: function() {
				return r.
			default.createElement("iframe", {
					className: "IframeOpener",
					src: this.props.url
				})
			}
		});
	e.
default = G, t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/mixins/PluginUpgradeMixin")
}, function(t, e) {
	t.exports = require("hippo/lib/uuid")
}, function(t, e) {
	t.exports = require("hippo/History")
}, function(t, e) {
	t.exports = require("hippo/Shortcut")
}, function(t, e) {
	t.exports = require("hippo/CodeList")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = Object.assign ||
	function(t) {
		for (var e = 1; e < arguments.length; e++) {
			var i = arguments[e];
			for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
		}
		return t
	}, a = i(13), s = n(a), r = i(24), l = n(r), c = s.
default.createClass({
		displayName: "MyStockPanel",
		render: function() {
			return s.
		default.createElement(l.
		default, o({
				gridType: "MyStockList"
			}, this.props))
		}
	});
	e.
default = c, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		if (t && t.__esModule) return t;
		var e = {};
		if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e.
	default = t, e
	}
	function o(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(13),
		s = o(a),
		r = (i(6), i(3)),
		l = (o(r), i(25)),
		c = o(l),
		d = i(33),
		u = o(d),
		p = i(35),
		h = o(p),
		f = i(38),
		m = n(f),
		g = i(10),
		b = o(g),
		k = 0,
		v = 1,
		y = 2,
		C = s.
	default.createClass({
			displayName: "MyStockListWrap",
			getDefaultProps: function() {
				return {
					dfa: [
						[k, v, y],
						[k, k, y],
						[k, v, k]
					]
				}
			},
			getInitialState: function() {
				return {
					view: k
				}
			},
			onToolBtnClick: function(t) {
				this.setState({
					view: this.props.dfa[this.state.view][t]
				})
			},
			exitEdit: function() {
				this.onToolBtnClick(y)
			},
			setToolBtns: function() {
				var t = [];
				"MyStockList" == this.props.gridType && t.push(s.
			default.createElement("i", {
					className: "ico ico-edit",
					key: "edit",
					onClick: this.onToolBtnClick.bind(this, y)
				}));
				var e = "";
				e = this.state.view == v ? "list" : "view", t.push(s.
			default.createElement("i", {
					className: "ico ico-" + e,
					key: e,
					onClick: this.onToolBtnClick.bind(this, v)
				})), t.push(m.configBtn), this.props.setToolBtns(t)
			},
			componentDidMount: function() {
				this.setToolBtns()
			},
			componentDidUpdate: function(t, e) {
				e.view != this.state.view && this.state.view != y && this.setToolBtns()
			},
			render: function() {
				return this.state.view == v ? s.
			default.createElement(u.
			default, null):
				this.state.view == y ? s.
			default.createElement(h.
			default, {
					setToolBtns: this.props.setToolBtns,
					exitEdit: this.exitEdit,
					stocklist: b.
				default.getList()
				}):
				s.
			default.createElement(c.
			default, {
					showAside: !0
				})
			}
		});
	e.
default = C, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(13),
		a = n(o),
		s = i(2),
		r = n(s),
		l = i(26),
		c = i(6),
		d = i(10),
		u = n(d),
		p = i(3),
		h = n(p),
		f = i(27),
		m = a.
	default.createClass({
			displayName: "MyStockList",
			getDefaultProps: function() {
				return {
					showAside: !1,
					showMenu: !0,
					showFilter: !0,
					configFilter: !0,
					configColumns: !0,
					asideVisible: !0,
					gridType: "MyStockList"
				}
			},
			getMenu: function(t) {
				if (this.props.showMenu) {
					var e = t.market,
						i = t.code,
						n = (0, c.isTradable)(e, i);
					return {
						items: h.
					default.stockItemMenu(n)
					}
				}
				return null
			},
			resize: function() {
				"function" == typeof this.refs.list.resize && this.refs.list.resize()
			},
			componentDidMount: function() {
				this.refreshMyStock(), u.
			default.on("ADD_STOCK", this.reload), u.
			default.on("REMOVE_STOCK", this.removeStock), u.
			default.on("SYNC", this.reload)
			},
			componentWillUnmount: function() {
				u.
			default.removeListener("ADD_STOCK", this.reload), u.
			default.removeListener("REMOVE_STOCK", this.removeStock), u.
			default.removeListener("SYNC", this.reload)
			},
			reload: function() {
				"function" == typeof this.refs.list.reload ? this.refs.list.reload() : console.log("Not changed!")
			},
			addStock: function(t) {
				this.refs.list.addStock(t)
			},
			removeStock: function(t) {
				this.refs.list.removeStock(t)
			},
			refreshMyStock: function() {
				u.
			default.sync()
			},
			render: function() {
				var t = r.
			default.getImpl("StockQuote:StockList");
				return t ? a.
			default.createElement(t, {
					ref: "list",
					gridType: this.props.gridType,
					showAside: this.props.showAside,
					showFilter: this.props.showFilter,
					configFilter: this.props.configFilter,
					configColumns: this.props.configColumns,
					asideVisible: this.props.asideVisible,
					dataProvider: f.MyStockDataProvider,
					refreshMyStock: this.refreshMyStock,
					filters: h.
				default.myStockFilters,
					columns:
					(0, l.heads)(!1),
					remove: !0,
					reorder: !0,
					myStock: !0,
					sort: ["code", "risepercent", "now", "rise", "volume", "amount", "handover", "openprice", "high", "low", "closeprice"],
					multiselect: !0,
					getMenu: this.getMenu,
					widgetContainer: this.props.widgetContainer,
					group: this.props.group,
					active: this.props.active
				}):
				a.
			default.createElement("div", null)
			}
		}),
		g = a.
	default.createClass({
			displayName: "MyStockListPanel",
			getDefaultProps: function() {
				return {
					showMenu: !0,
					showFilter: !0,
					configFilter: !0,
					configColumns: !0
				}
			},
			render: function() {
				return a.
			default.createElement(m, {
					gridType: "MyStockListPanel",
					showMenu: this.props.showMenu,
					showFilter: this.props.showFilter,
					configFilter: this.props.configFilter,
					configColumns: this.props.configColumns,
					asideVisible: !1,
					active: this.props.active,
					widgetContainer: "widgetContainer",
					group: this.props.group
				})
			}
		});
	e.MyStockListPanel = g, e.
default = m
}, function(t, e) {
	t.exports = require("hippo/components/Grid")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	function a(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	function s(t) {
		return void 0 !== t._idx ? t._idx : t.market + ":" + t.code
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, i, n) {
				return i && t(e.prototype, i), n && t(e, n), e
			}
		}(),
		l = function(t, e, i) {
			for (var n = !0; n;) {
				var o = t,
					a = e,
					s = i;
				n = !1, null === o && (o = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(o, a);
				if (void 0 !== r) {
					if ("value" in r) return r.value;
					var l = r.get;
					if (void 0 === l) return;
					return l.call(s)
				}
				var c = Object.getPrototypeOf(o);
				if (null === c) return;
				t = c, e = a, i = s, n = !0, r = c = void 0
			}
		},
		c = i(4),
		d = n(c),
		u = i(28),
		p = i(29),
		h = (n(p), i(30)),
		f = (n(h), i(31)),
		m = (i(6), i(10)),
		g = n(m),
		b = i(32),
		k = n(b),
		v = i(11),
		y = n(v),
		C = function(t) {
			function e() {
				o(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.beginWatch = d.
			default.bind(this.beginWatch, this), this.endWatch = d.
			default.bind(this.endWatch, this), this.onData = d.
			default.bind(this.onData, this), this.offset = 0, this.limit = 0, this.watchList = {}, this.itemsInView = {}
			}
			return a(e, t), r(e, [{
				key: "watch",
				value: function(t, e, i) {
					var n = this,
						o = {};
					this.list.slice(t, t + e).forEach(function(t) {
						o[s(t)] = t
					});
					var a = d.
				default.keys(this.itemsInView),
						r = d.
					default.keys(o);
					d.
				default.difference(a, r).forEach(function(t) {
						i || (n.endWatch(n.watchList[t]), delete n.watchList[t]), delete n.itemsInView[t]
					}), d.
				default.difference(r, a).forEach(function(t) {
						i || (n.watchList[t] = n.beginWatch(o[t])), n.itemsInView[t] = null
					}), this.offset = t, this.limit = e
				}
			}, {
				key: "beginWatch",
				value: function(t) {
					var e = new f.StockRealtime;
					return e.on("update", this.onData), e.set(t.market, t.code), e
				}
			}, {
				key: "endWatch",
				value: function(t) {
					t.destroy()
				}
			}, {
				key: "onData",
				value: function(t) {
					this.emit("data", t)
				}
			}, {
				key: "destroy",
				value: function() {
					var t = this,
						e = d.
					default.keys(this.watchList);
					e.forEach(function(e) {
						t.endWatch(t.watchList[e]), delete t.watchList[e], delete t.itemsInView[e]
					})
				}
			}]), e
		}(u.EventEmitter);
	e.WatchListProvider = C;
	var S = function(t) {
			function e() {
				o(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.pool = {}, this.sortTimer = null
			}
			return a(e, t), r(e, [{
				key: "getList",
				value: function() {
					return g.
				default.getList().map(function(t) {
						return d.
					default.clone(t)
					})
				}
			}, {
				key: "getData",
				value: function(t) {
					var e = this,
						i = this.getList();
					if (this.sortConfig) {
						var n = {};
						this.list.forEach(function(t) {
							n[s(t)] = t
						});
						var o = d.
					default.keys(this.watchList),
							a = i.map(function(t) {
								return s(t)
							});
						d.
					default.difference(a, o).forEach(function(t) {
							e.watchList[t] = e.beginWatch(n[t])
						}), this.sortTimer && clearInterval(this.sortTimer), this.sortCbk = t, this.sort(), this.sortTimer = setInterval(function() {
							e.sort()
						}, 5e3)
					} else this.list = i, t({
						total: i.length,
						data: i
					})
				}
			}, {
				key: "sort",
				value: function() {
					var t = this,
						e = d.
					default.values(this.pool).sort(function(e, i) {
							var n = e[t.sortConfig.sortKey],
								o = i[t.sortConfig.sortKey];
							return "string" == typeof n && "string" == typeof o ? n == o ? 0 : t.sortConfig.asc ^ n > o ? -1 : 1 : "number" == typeof n && "number" == typeof o ? (e.stop && (n = -Number.MAX_VALUE), i.stop && (o = -Number.MAX_VALUE), t.sortConfig.asc ? n - o : o - n) : void 0
						});
					this.list = e, this.sortCbk({
						total: e.length,
						data: e
					})
				}
			}, {
				key: "watch",
				value: function(t, i) {
					this.sortConfig ? l(Object.getPrototypeOf(e.prototype), "watch", this).call(this, t, i, !0) : l(Object.getPrototypeOf(e.prototype), "watch", this).call(this, t, i)
				}
			}, {
				key: "onData",
				value: function(t) {
					var i = s(t);
					this.pool[i] = t, this.sortConfig ? i in this.itemsInView && l(Object.getPrototypeOf(e.prototype), "onData", this).call(this, t) : l(Object.getPrototypeOf(e.prototype), "onData", this).call(this, t)
				}
			}, {
				key: "config",
				value: function(t) {
					this.sortConfig = t
				}
			}, {
				key: "remove",
				value: function(t) {
					var e = this.list.splice(t, 1)[0],
						i = e.market + ":" + e.code;
					y.
				default.removeStock(e.market, e.code), delete this.pool[i]
				}
			}, {
				key: "reorder",
				value: function(t, e, i) {
					y.
				default.sortStock(t.market, t.code, e, i), this.list = this.getList()
				}
			}, {
				key: "destroy",
				value: function() {
					l(Object.getPrototypeOf(e.prototype), "destroy", this).call(this), clearInterval(this.sortTimer)
				}
			}]), e
		}(C);
	e.MyStockDataProvider = S;
	var x = function(t) {
			function e() {
				o(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).apply(this, arguments)
			}
			return a(e, t), r(e, [{
				key: "getData",
				value: function(t) {
					var e = k.
				default.getList().map(function(t) {
						return d.
					default.clone(t)
					});
					this.list = e, t({
						total: e.length,
						data: e
					})
				}
			}]), e
		}(C);
	e.RecentListDataProvider = x
}, function(t, e) {
	t.exports = require("hippo/lib/events")
}, function(t, e) {
	t.exports = require("hippo/domain/quote")
}, function(t, e) {
	t.exports = require("hippo/ConfigStore")
}, function(t, e) {
	t.exports = require("hippo/StockRealtime")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(4),
		a = n(o),
		s = i(28),
		r = i(12),
		l = n(r),
		c = i(30),
		d = n(c),
		u = i(3),
		p = n(u),
		h = {
			_list: [],
			_hash: {},
			read: function() {
				var t = this,
					e = JSON.parse(d.
				default.getItem(p.
				default.PluginId, "RecentStockList", p.
				default.recentStockListSchema)) || [];
				e.forEach(function(e) {
					t.add(e, !0)
				})
			},
			write: function() {
				d.
			default.setItem(p.
			default.PluginId, "RecentStockList", JSON.stringify(this._list), p.
			default.recentStockListSchema)
			},
			getList: function() {
				return this._list
			},
			add: function(t, e) {
				var i = t.market + ":" + t.code;
				if (e ? this._list.push(t) : this._list.unshift(t), this._hash[i] = t, this._list.length > p.
			default.MAX_HISTORY) {
					var n = e ? this._list.shift() : this._list.pop();
					delete this._hash[n.market + ":" + n.code]
				}
			},
			visit: function(t, e, i) {
				var n = t + ":" + e;
				if (n in this._hash) {
					var o = this._hash[n];
					this._list.splice(this._list.indexOf(o), 1), this._list.unshift(o)
				} else {
					var a = {
						market: t,
						code: e,
						name: i
					};
					this.add(a)
				}
				this.write()
			}
		};
	h.read();
	var f = a.
default.extend({}, s.EventEmitter.prototype, {
		getList: function() {
			return h.getList()
		},
		dispatcherIndex: l.
	default.register(function(t) {
			var e = t.action;
			switch (e.type) {
			case p.
			default.ActionTypes.VISIT_STOCK:
				h.visit(e.market, e.code, e.name), f.emit("change")
			}
		})
	});
	e.
default = f, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		if (t && t.__esModule) return t;
		var e = {};
		if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e.
	default = t, e
	}
	function o(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(13),
		s = o(a),
		r = i(6),
		l = n(r),
		c = i(22),
		d = o(c),
		u = i(12),
		p = o(u),
		h = i(15),
		f = i(2),
		m = o(f),
		g = i(21),
		b = o(g),
		k = i(3),
		v = o(k),
		y = i(10),
		C = o(y),
		S = i(34),
		x = o(S),
		w = i(11),
		M = o(w),
		E = s.
	default.createClass({
			displayName: "MyStockGraph",
			getInitialState: function() {
				return {
					curr: 0,
					selected: null
				}
			},
			getDefaultProps: function() {
				return {
					rows: 3,
					cols: 4
				}
			},
			componentDidMount: function() {
				var t = this;
				this.dispatchId = p.
			default.register(function(e) {
					var i = e.action;
					switch (i.type) {
					case "WINDOW.RESIZE":
						var n = t.refs.grid.getDOMNode();
						t.refs.grid.resize(n.clientWidth, n.clientHeight)
					}
				}), C.
			default.on("change", this.redraw), this._shortcut_del = b.
			default.reg("del", function() {
					t.removeStock()
				}), this._shortcut_left = b.
			default.reg("left", function() {
					t.selectPrev()
				}), this._shortcut_right = b.
			default.reg("right", function() {
					t.selectNext()
				})
			},
			componentWillUnmount: function() {
				p.
			default.unregister(this.dispatchId), C.
			default.removeListener("change", this.redraw), b.
			default.cancel("del", this._shortcut_del), b.
			default.cancel("left", this._shortcut_left), b.
			default.cancel("right", this._shortcut_right)
			},
			redraw: function() {
				this.forceUpdate()
			},
			firstPage: function() {
				this.setState({
					curr: 0
				})
			},
			prevPage: function() {
				this.setState({
					curr: Math.max(this.state.curr - 1, 0)
				})
			},
			nextPage: function() {
				this.setState({
					curr: Math.min(this.state.curr + 1, this.getTotalPages() - 1)
				})
			},
			lastPage: function() {
				this.setState({
					curr: this.getTotalPages() - 1
				})
			},
			getTotalPerPage: function() {
				var t = this.props.cols,
					e = this.props.rows,
					i = t * e;
				return i
			},
			getTotalPages: function() {
				var t = C.
			default.getList(),
					e = this.getTotalPerPage(),
					i = Math.ceil(t.length / e);
				return Math.max(i, 1)
			},
			setFilter: function(t) {},
			openSettings: function() {},
			setSelected: function(t, e) {
				this.setState({
					selected: t + ":" + e
				})
			},
			getIdx: function(t) {
				if (null === t) return 0;
				var e = 0,
					i = this.state.curr,
					n = i * this.getTotalPerPage(),
					o = C.
				default.getList().slice(n, n + 12);
				return o.some(function(i, n) {
					var o = i.market + ":" + i.code;
					return o == t && (e = n, !0)
				}), e
			},
			selectNext: function() {
				this.doSelect("next")
			},
			selectPrev: function() {
				this.doSelect("prev")
			},
			doSelect: function(t) {
				var e = this.getIdx(this.state.selected),
					i = void 0,
					n = this.state.curr,
					o = n * this.getTotalPerPage(),
					a = C.
				default.getList().slice(o, o + 12);
				switch (t) {
				default:
				case "next":
					i = Math.min(e + 1, a.length - 1);
					break;
				case "prev":
					i = Math.max(0, e - 1)
				}
				var s = a[i];
				this.setState({
					selected: s.market + ":" + s.code
				})
			},
			removeStock: function() {
				var t = this.state.selected,
					e = this.getIdx(this.state.selected),
					i = void 0,
					n = this.state.curr,
					o = n * this.getTotalPerPage(),
					a = C.
				default.getList().slice(o, o + 12),
					s = a.length;
				if (t) {
					var r = t.split(":");
					i = {
						market: r[0],
						code: r[1]
					}
				} else {
					var l = this.state.curr * this.getTotalPerPage(),
						c = C.
					default.getList().slice(l, l + 12);
					c.length > 0 && (i = c[0])
				}
				if (i) {
					if (s > 1) {
						var d = e + 1 < s ? "selectNext" : "selectPrev";
						this[d]()
					}
					M.
				default.removeStock(i.market, i.code)
				}
			},
			render: function() {
				var t = this,
					e = this.props.cols,
					i = this.props.rows,
					n = this.state.curr,
					o = this.getTotalPages(),
					a = n * this.getTotalPerPage(),
					r = C.
				default.getList().slice(a, a + 12),
					l = r.some(function(e) {
						var i = e.market + ":" + e.code;
						return i == t.state.selected
					}),
					c = r.map(function(i, n) {
						var o = a + n,
							r = i.market + ":" + i.code,
							c = !l && 0 == n || r == t.state.selected;
						return s.
					default.createElement(h.View, {
							key: r,
							row: parseInt(n / e),
							col: n % e
						}, s.
					default.createElement(_, {
							selected: c,
							idx: o,
							market: i.market,
							code: i.code,
							setSelected: t.setSelected
						}))
					}),
					d = m.
				default.getImpl("StockQuote:Filter");
				return s.
			default.createElement("div", {
					className: "MyStock-Graph"
				}, s.
			default.createElement(d, {
					setFilter: this.setFilter,
					openSettings: this.openSettings,
					gridType: "MyStockList",
					filters: v.
				default.myStockFilters
				}), s.
			default.createElement(h.Grid, {
					ref: "grid",
					className: "MyStock-Graph-Content",
					resizable: !1,
					rows: i,
					cols: e,
					gutterWidth: 6
				}, c), s.
			default.createElement(x.
			default, {
					curr: n,
					total: o,
					firstPage: this.firstPage,
					prevPage: this.prevPage,
					nextPage: this.nextPage,
					lastPage: this.lastPage
				}))
			}
		}),
		_ = s.
	default.createClass({
			displayName: "TimeSeries",
			getDefaultProps: function() {
				return {
					type: "little",
					market: "sh",
					code: "000001"
				}
			},
			componentDidUpdate: function(t, e) {
				t.market == this.props.market && t.code == this.props.code || (l.destroyChart(this), this.setupChart(this.props.market, this.props.code))
			},
			componentDidMount: function() {
				var t = this,
					e = this.props,
					i = e.market,
					n = e.code;
				this.setupChart(i, n), this.getDOMNode().addEventListener("click", this.onClick, !0), this.dispatchId = p.
			default.register(function(e) {
					var i = e.action;
					switch (i.type) {
					case "StockTrade:DO_ORDER_SUCC":
						t.quickOrderHint && t.quickOrderHint.close(), t.quickOrderHint = null;
						break;
					case "CONFIG.SETSKIN":
						t.setskin()
					}
				})
			},
			componentWillUnmount: function() {
				l.destroyChart(this), this.getDOMNode().removeEventListener("click", this.onClick, !0), this.dispatchId && p.
			default.unregister(this.dispatchId)
			},
			onClick: function() {
				var t = this.props,
					e = t.market,
					i = t.code;
				this.props.setSelected(e, i)
			},
			setskin: function() {
				l.destroyChart(this), l.setupChart(this, this.refs.graph.getDOMNode(), this.props.type, this.props.market, this.props.code)
			},
			setupChart: function(t, e) {
				l.setupChart(this, this.refs.graph.getDOMNode(), this.props.type, t, e), this.resize()
			},
			resize: function() {
				var t = this.refs.graph.getDOMNode();
				this.chart.resize(t.clientWidth, t.clientHeight)
			},
			onContextMenuClick: function(t, e, i) {
				var n = (e.join(":"), this.props),
					o = n.market,
					a = n.code,
					l = n.idx;
				switch (t) {
				case v.
				default.Lang("Delete"):
					M.
				default.removeStock(o, a);
					break;
				case v.
				default.Lang("View"):
					var c = this.hasStar(o, a),
						u = d.
					default.get(o, a);
					r.Event.bubble(this.getDOMNode(), {
						type: "ADD_TAB",
						subtype: "ENTER_STOCK",
						market: o,
						code: a,
						name: u && u.name,
						star: c
					});
					break;
				case v.
				default.Lang("Prev"):
					M.
				default.sortStock(o, a, l, Math.max(l - 1, 0));
					break;
				case v.
				default.Lang("Next"):
					M.
				default.sortStock(o, a, l, l + 1);
					break;
				case v.
				default.Lang("Top"):
					M.
				default.sortStock(o, a, l, 0);
					break;
				case v.
				default.Lang("Bottom"):
					M.
				default.sortStock(o, a, l, -1);
					break;
				case v.
				default.Lang("GeneBuy"):
				case v.
				default.Lang("GeneSell"):
					var p = m.
				default.getImpl("StockTrade:QuickTrade");
					this.quickOrderHint = h.Popup.show({
						className: "QuickOrder-Wrap",
						content: s.
					default.createElement(p, {
							market: o,
							code: a,
							opType: t == v.
						default.Lang("GeneBuy") ? 1:
							2
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					});
					break;
				case v.
				default.Lang("CollBuy"):
				case v.
				default.Lang("CollSell"):
				case v.
				default.Lang("FinaBuy"):
				case v.
				default.Lang("MargSell"):
					var f = m.
				default.getImpl("StockTrade:QuickCredit"),
						g = ["", v.
					default.Lang("CollBuy"), v.
					default.Lang("CollSell"), v.
					default.Lang("FinaBuy"), v.
					default.Lang("MargSell")].indexOf(t);
					this.quickOrderHint = h.Popup.show({
						className: "QuickOrder-Wrap",
						content: s.
					default.createElement(f, {
							market: o,
							code: a,
							opType: g
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					})
				}
			},
			onContextMenu: function(t) {
				var e = this.props,
					i = e.market,
					n = e.code,
					o = l.isTradable(i, n);
				h.Menu.show(t, {
					options: v.
				default.stockItemMenu(o)
				}, this.onContextMenuClick)
			},
			hasStar: function(t, e) {
				var i = !1;
				return t && e && M.
			default.isMyStock(t, e, function(t) {
					i = t
				}), i
			},
			openDetail: function() {
				var t = this.props,
					e = t.market,
					i = t.code,
					n = this.hasStar(e, i),
					o = d.
				default.get(e, i);
				r.Event.bubble(this.getDOMNode(), {
					type: "ADD_TAB",
					subtype: "ENTER_STOCK",
					market: e,
					code: i,
					name: o && o.name,
					star: n
				})
			},
			delOverlay: function(t) {},
			resetLine: function() {},
			addDrawline: function(t) {},
			delDrawline: function(t) {},
			refreshDrawline: function(t) {},
			overRange: function() {},
			getText: function(t) {},
			render: function() {
				var t = this.props,
					e = t.market,
					i = t.code,
					n = d.
				default.get(e, i),
					o = "MyStock-TimeSeries";
				return this.props.selected && (o += " selected"), s.
			default.createElement("div", {
					className: o,
					onContextMenu: this.onContextMenu,
					onDoubleClick: this.openDetail
				}, s.
			default.createElement("div", {
					ref: "info",
					className: "info"
				}, s.
			default.createElement("span", {
					className: "name"
				}, n && n.name), " ", s.
			default.createElement("span", {
					className: "code"
				}, i)), s.
			default.createElement("div", {
					ref: "graph",
					className: "graph"
				}))
			}
		});
	e.
default = E, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(13),
		a = n(o),
		s = a.
	default.createClass({
			displayName: "Pagination",
			getDefaultProps: function() {
				return {
					curr: 0,
					total: 0
				}
			},
			render: function() {
				var t = 0 == this.props.curr,
					e = this.props.curr + 1 == this.props.total;
				return a.
			default.createElement("footer", {
					className: "Pagination"
				}, a.
			default.createElement("a", {
					href: "javascript:;",
					className: t ? "disabled" : "",
					onClick: this.props.firstPage
				}, "首页"), a.
			default.createElement("i", {
					className: (t ? "disabled" : "") + " ico prev",
					onClick: this.props.prevPage
				}), a.
			default.createElement("span", {
					className: "curr"
				}, this.props.curr + 1), "/", a.
			default.createElement("span", {
					className: "total"
				}, this.props.total), a.
			default.createElement("i", {
					className: (e ? "disabled" : "") + " ico next",
					onClick: this.props.nextPage
				}), a.
			default.createElement("a", {
					href: "javascript:;",
					className: e ? "disabled" : "",
					onClick: this.props.lastPage
				}, "尾页"))
			}
		});
	e.
default = s, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(13),
		a = n(o),
		s = i(22),
		r = n(s),
		l = i(36),
		c = n(l),
		d = i(37),
		u = n(d),
		p = i(3),
		h = i(10),
		f = i(11),
		m = a.
	default.createClass({
			displayName: "DragLi",
			render: function() {
				var t = r.
			default.get(this.props.code),
					e = this.props.name || t && t.name;
				return a.
			default.createElement("li", {
					className: "moving"
				}, a.
			default.createElement("span", {
					className: "stockname"
				}, e), a.
			default.createElement("span", {
					className: "stockcode"
				}, this.props.code))
			}
		}),
		g = a.
	default.createClass({
			displayName: "EditMyStockList",
			mixins: [u.
		default],
			getInitialState: function() {
				return {
					dragging: !1,
					order: "",
					chooseIdx: -1,
					rownum: 1,
					dragStartX: 0,
					dragStartY: 0,
					dragItemX: 0,
					dragItemY: 0,
					dragStartI: 0,
					dragEndI: 0,
					name: "",
					code: ""
				}
			},
			componentDidMount: function() {
				this.props.setToolBtns([a.
			default.createElement("button", {
					key: "save",
					onClick: this.onSaveClick
				}, p.Lang("Save")), a.
			default.createElement("button", {
					key: "abort",
					onClick: this.onAbortClick
				}, p.Lang("Abort"))])
			},
			onSaveClick: function() {
				for (var t = [], e = 0; e < this.state.order.length; e++) {
					var i = this.state.order[e];
					t.push(this.props.stocklist[i])
				}
				f.modifyStockList(t), this.props.stocklist = h.getList(), this.props.exitEdit()
			},
			onAbortClick: function() {
				this.Reset(), this.props.exitEdit()
			},
			onMouseDown: function(t) {
				if (t.preventDefault(), 0 == t.button) {
					var e = (0, c.
				default)(t.currentTarget),
						i = e.attr("data-i") - 0,
						n = e.attr("data-key") - 0;
					this.isSelected(e);
					var o = e.position();
					this.delayedState = {
						dragStartX: t.clientX,
						dragStartY: t.clientY,
						dragItemX: o.left,
						dragItemY: o.top,
						chooseIdx: n,
						dragStartI: i,
						dragEndI: i,
						dragging: !0,
						name: e.find("span").eq(1).html(),
						code: e.find("span").eq(2).html()
					}, window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("mouseup", this.onMouseUp)
				}
			},
			onMouseMove: function(t) {
				t.preventDefault(), this.state.dragging || (this.setState(this.delayedState), this.$dummy = (0, c.
			default)(a.
			default.renderToStaticMarkup(a.
			default.createElement(m, this.delayedState))), (0, c.
			default)(this.refs.ul_list.getDOMNode()).append(this.$dummy));
				var e = t.clientX - this.state.dragStartX,
					i = t.clientY - this.state.dragStartY,
					n = this.state.dragItemX + e,
					o = this.state.dragItemY + i;
				this.$dummy.css({
					left: n,
					top: o
				});
				var s;
				s = Math.floor((n + p.EDITSTOCK_ITEM_SIZE.width / 2) / p.EDITSTOCK_ITEM_SIZE.width) + Math.floor((o + p.EDITSTOCK_ITEM_SIZE.height / 2) / p.EDITSTOCK_ITEM_SIZE.height) * this.state.rownum, n > p.EDITSTOCK_ITEM_SIZE.width * (this.state.rownum - 1) && (s = this.state.rownum - 1 + Math.floor((o + p.EDITSTOCK_ITEM_SIZE.height / 2) / p.EDITSTOCK_ITEM_SIZE.height) * this.state.rownum), n < 0 && (s = Math.floor((o + p.EDITSTOCK_ITEM_SIZE.height / 2) / p.EDITSTOCK_ITEM_SIZE.height) * this.state.rownum), o < 0 && (s = Math.floor((n + p.EDITSTOCK_ITEM_SIZE.width / 2) / p.EDITSTOCK_ITEM_SIZE.width)), s >= this.GetOrder().length && (s = this.GetOrder().length - 1);
				var r = this;
				setTimeout(function() {
					(0, c.
				default)(".EditMyStockList li").css("opacity", "1"), (0, c.
				default)(".EditMyStockList li[data-i=" + s + "]").css("opacity", "0.2"), r.isSelected((0, c.
				default)(".EditMyStockList li[data-i=" + s + "]"))
				}, 50), s != this.state.dragEndI && (this.state.dragEndI = s, this.SetOrder(s))
			},
			onMouseUp: function() {
				if (this.state.dragging) {
					var t = this.state.dragEndI,
						e = this;
					e.$dummy.css({
						left: t % this.state.rownum * p.EDITSTOCK_ITEM_SIZE.width,
						top: Math.floor(t / this.state.rownum) * p.EDITSTOCK_ITEM_SIZE.height,
						transition: "left 0.5s, top 0.5s"
					}).addClass("out"), setTimeout(function() {
						e.$dummy.remove(), e.setState({
							dragging: !1
						}), (0, c.
					default)(".EditMyStockList li").css("opacity", "1")
					}, 500)
				}
				window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp), (0, c.
			default)(".EditMyStockList li").css("opacity", "1")
			},
			isSelected: function(t) {
				t && (this.lastSelected && this.lastSelected.removeClass("selected"), this.lastSelected = (0, c.
			default)(t), (0, c.
			default)(t).addClass("selected"))
			},
			SetOrder: function(t) {
				var e = this.state.order || [];
				if (!this.state.order) for (var i = this.props.stocklist.length, n = 0; n < i; n++) e[n] = n;
				if (this.state.dragging) {
					var o = this.state.dragStartI < 0 ? 0 : this.state.dragStartI,
						a = t < 0 ? 0 : t;
					if (a - o > 0) for (var n = o; n < a; n++) {
						var s = e[n];
						e[n] = e[n + 1], e[n + 1] = s
					} else for (var n = o; n > (a > 0 ? a : 0); n--) {
						var s = e[n];
						e[n] = e[n - 1], e[n - 1] = s
					}
				}
				this.setState({
					order: e,
					dragStartI: t || 0
				})
			},
			GetOrder: function() {
				return this.state.order
			},
			ModifyData: function(t) {
				t.preventDefault(), t.stopPropagation(), "closeico" == (0, c.
			default)(t.currentTarget).attr("class") && this.DeleteLi((0, c.
			default)(t.currentTarget).closest("li").attr("data-key"))
			},
			Reset: function() {
				for (var t = [], e = this.props.stocklist.length, i = 0; i < e; i++) t[i] = i;
				this.setState({
					order: t,
					dragging: !1
				})
			},
			DeleteLi: function(t) {
				var e = this.GetOrder(),
					i = e.indexOf(t - 0);
				this.props.stocklist[t].code, this.props.stocklist[t].market;
				e.splice(i, 1), this.setState({
					order: e
				})
			},
			CreateList: function() {
				for (var t = [], e = 0; e < this.state.order.length; e++) {
					var i = {},
						n = this.state.order[e],
						o = this.props.stocklist[n].name;
					i.top = Math.floor(e / this.state.rownum) * p.EDITSTOCK_ITEM_SIZE.height, i.left = e % this.state.rownum * p.EDITSTOCK_ITEM_SIZE.width;
					var s = a.
				default.createElement("li", {
						style: i,
						onMouseDown: this.onMouseDown,
						"data-key": n,
						"data-i": e,
						key: n
					}, a.
				default.createElement("span", {
						className: "closeico",
						onClick: this.ModifyData
					}, "×"), a.
				default.createElement("span", {
						className: "stockname"
					}, o), a.
				default.createElement("span", {
						className: "stockcode"
					}, this.props.stocklist[n].code));
					t.push(s)
				}
				return t
			},
			componentWillMount: function() {
				for (var t = 0; t < this.props.stocklist.length; t++) if (!this.props.stocklist[t].name) {
					var e = r.
				default.find(this.props.stocklist[t].code);
					this.props.stocklist[t].name = e.length > 0 ? e[0].name:
					""
				}
				this.setState({
					order: []
				}), this.SetOrder();
				var i = Math.floor(((0, c.
			default)(window).width() - 60) / p.EDITSTOCK_ITEM_SIZE.width);
				this.setState({
					rownum: i
				})
			},
			render: function() {
				var t = this.CreateList(),
					e = Math.ceil(t.length / this.state.rownum),
					i = {
						height: p.EDITSTOCK_ITEM_SIZE.height * e
					};
				return a.
			default.createElement("div", {
					className: "EditMyStockList ScrollbarOuter"
				}, a.
			default.createElement("ul", {
					className: this.state.dragging ? "dragging" : "",
					ref: "ul_list",
					key: "ul_list",
					style: i
				}, t))
			}
		});
	e.
default = g, t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/lib/jquery")
}, function(t, e) {
	t.exports = require("hippo/mixins/ScrollbarMixin")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	function o() {
		r.Popup.show({
			className: "MyStock-PanelManager",
			content: s.
		default.createElement(u.
		default, null),
			title:
			c.
		default.Lang("Panel Manager"),
			modal:
			!0,
			buttons: [c.
		default.Lang("OK"), c.
		default.Lang("Abort")],
			onBtnClick: function(t, e) {
				return 0 == t ? e.save() : 1 == t && e.cancel(), !0
			}
		})
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(13),
		s = n(a),
		r = i(15),
		l = i(3),
		c = n(l),
		d = i(39),
		u = n(d),
		p = s.
	default.createElement("i", {
			className: "ico ico-config",
			key: "config",
			onClick: o
		});
	e.configBtn = p
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(4),
		a = n(o),
		s = i(13),
		r = n(s),
		l = i(40),
		c = n(l),
		d = i(41),
		u = n(d),
		p = r.
	default.createClass({
			displayName: "PanelManager",
			getInitialState: function() {
				return {
					defaultPanel: c.
				default.getAllPanels().filter(function(t) {
						return "CustomPanel" !== t.cid
					}),
					tempPanels:
					c.
				default.getPanels()
				}
			},
			removePanel: function(t) {
				var e = a.
			default.findIndex(this.state.tempPanels, {
					id: t
				}),
					i = this.state.tempPanels.concat();
				i.splice(e, 1), this.setState({
					tempPanels: i
				})
			},
			save: function() {
				c.
			default.sortPanel(this.state.tempPanels)
			},
			_handleVisible: function(t) {
				var e = this.state.tempPanels.concat();
				e[t].hidden = !e[t].hidden, this.setState({
					tempPanels: e
				})
			},
			getList: function() {
				return this.state.tempPanels.map(function(t) {
					return {
						id: t.id || t.cid,
						label: t.label,
						deletable: !0,
						hide: t.hidden
					}
				})
			},
			cancel: function() {
				return !1
			},
			reOrder: function(t) {
				var e = [];
				this.state.tempPanels.forEach(function(i) {
					var n = a.
				default.findIndex(t, {
						id: i.id
					});
					e[n] = i
				}), this.setState({
					tempPanels: e
				})
			},
			getDefault: function() {
				return this.state.defaultPanel.map(function(t, e) {
					return r.
				default.createElement("li", {
						key: e + t.cid
					}, t.label)
				})
			},
			render: function() {
				return r.
			default.createElement("div", {
					className: "PanelManager"
				}, r.
			default.createElement("div", {
					className: "content"
				}, r.
			default.createElement("ul", {
					className: "default-list"
				}, this.getDefault()), r.
			default.createElement(u.
			default, {
					list: this.getList(),
					handleDeleteClick: this.removePanel,
					reOrder: this.reOrder,
					toggleHide: this._handleVisible
				})))
			}
		});
	e.
default = p, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(4),
		a = n(o),
		s = i(28),
		r = i(19),
		l = n(r),
		c = i(30),
		d = n(c),
		u = i(3),
		p = n(u),
		h = {
			read: function() {
				try {
					this.panels = JSON.parse(d.
				default.getItem(p.
				default.PluginId, "Panels", p.
				default.panelsSchema)) || []
				} catch (t) {
					this.panels = []
				}
			},
			write: function() {
				var t = this.panels.filter(function(t) {
					return !t.edit
				});
				d.
			default.setItem(p.
			default.PluginId, "Panels", JSON.stringify(t), p.
			default.panelsSchema)
			},
			add: function(t, e, i) {
				var n = l.
			default.v1();
				return this.panels.push({
					id: n,
					label: t,
					type: e,
					hidden: !1,
					widgets: i,
					market: "sz",
					code: "000776"
				}), this.write(), n
			},
			_remove: function(t) {
				var e = -1;
				this.panels.some(function(i, n) {
					if (i.id == t) return e = n, !0
				}), e != -1 && this.panels.splice(e, 1)
			},
			remove: function(t) {
				var e = this;
				Array.isArray(t) ? t.forEach(function(t) {
					e._remove(t)
				}) : this._remove(t), this.write()
			},
			removeTMP: function(t) {
				var e = this;
				Array.isArray(t) ? t.forEach(function(t) {
					e._remove(t)
				}) : this._remove(t)
			},
			getPanel: function(t) {
				var e = null;
				return this.panels.some(function(i) {
					if (i.id == t) return e = i, !0
				}), e
			},
			installWidget: function(t, e) {
				var i = this.getPanel(t);
				if (i) {
					"widgets" in i || (i.widgets = {});
					var n = l.
				default.v1();
					return i.widgets.push({
						widgetId: n,
						unionId: e
					}), this.write(), !0
				}
				return !1
			},
			uninstallWidget: function(t, e) {
				var i = this.getPanel(t);
				return !!i && ("slots" in i && (delete i.slots[e], delete i.slots_config[e]), this.write(), !0)
			},
			config: function(t, e, i) {
				var n = this.getPanel(t);
				return !!n && (n.slots_config[e] = i, this.write(), !0)
			},
			setMasterMarketCode: function(t, e, i) {
				var n = this.getPanel(t);
				return !!n && (n.market = e, n.code = i, n.slots_config = {}, this.write(), !0)
			},
			getConfig: function(t, e) {
				var i = this.getPanel(t);
				return i && i.slots_config ? i.slots_config[e] : null
			},
			_toggleVisible: function(t) {
				var e = this.getPanel(t);
				e && (e.hidden = !e.hidden)
			},
			toggleVisible: function(t) {
				var e = this;
				Array.isArray(t) ? t.forEach(function(t) {
					e._toggleVisible(t)
				}) : this._toggleVisible(t), this.write()
			},
			saveConfig: function(t, e, i) {
				var n = this.getPanel(t);
				return !!n && (n[e] = i, this.write(), !0)
			},
			deleteConfig: function(t, e) {
				var i = this.getPanel(t);
				return !!i && (delete i[e], this.write(), !0)
			},
			sortPanel: function(t) {
				this.panels = t.concat(), this.write()
			}
		};
	h.read();
	var f = a.
default.extend(Object.create(s.EventEmitter.prototype), {
		createPanel: function(t, e, i) {
			var n = h.add(t, e, i);
			return this.emit("change", {
				type: "add",
				id: n
			}), n
		},
		removePanel: function(t) {
			var e = h.remove(t);
			return this.emit("change"), e
		},
		toggleVisible: function(t) {
			var e = h.toggleVisible(t);
			return this.emit("change"), e
		},
		getPanel: function(t) {
			return h.getPanel(t)
		},
		getPanels: function() {
			return h.panels
		},
		getAllPanels: function() {
			var t = this.getPanels().map(function(t) {
				return {
					id: t.id,
					cid: "CustomPanel",
					label: t.label,
					config: t,
					hidden: t.hidden,
					configuable: !0
				}
			});
			return [{
				cid: "MyStock",
				label: p.
			default.Lang("MyStock")
			}, {
				cid: "Combination",
				label: p.
			default.Lang("Combination")
			}, {
				cid: "RecentStock",
				label: p.
			default.Lang("RecentStock")
			}].concat(t)
		},
		hasPanel: function t(e, i) {
			var t = !1;
			return [{
				id: "MyStock"
			}, {
				id: "Combination"
			}, {
				id: "RecentStock"
			}].concat(this.getPanels()).some(function(n) {
				if (!(e !== n.id || i && n.hidden)) return t = !0, !0
			}), t
		},
		installWidget: function() {
			var t = h.installWidget.apply(h, arguments);
			return this.emit("change"), t
		},
		uninstallWidget: function(t, e) {
			var i = h.uninstallWidget.apply(h, arguments);
			return this.emit("change"), i
		},
		config: function(t, e, i) {
			var n = h.config.apply(h, arguments);
			return this.emit("change"), n
		},
		getConfig: function() {
			return h.getConfig.apply(h, arguments)
		},
		setMasterMarketCode: function() {
			var t = h.setMasterMarketCode.apply(h, arguments);
			return this.emit("change"), t
		},
		getPanelWidgets: function(t) {
			return this.getPanel(t).widgets || []
		},
		createTMPPanel: function(t, e) {
			var i = l.
		default.v1();
			return this.getPanels().push({
				id: i,
				label: t,
				type: e,
				hidden: !1,
				edit: !0,
				widgets: {},
				market: "sz",
				code: "000776"
			}), this.emit("change", {
				type: "add",
				id: i
			}), i
		},
		removeTMPPanel: function(t) {
			var e = h.removeTMP(t);
			return this.emit("change"), e
		},
		saveConfig: function() {
			var t = h.saveConfig.apply(h, arguments);
			return this.emit("change"), t
		},
		deleteConfig: function() {
			var t = h.deleteConfig.apply(h, arguments);
			return this.emit("change"), t
		},
		sortPanel: function() {
			var t = h.sortPanel.apply(h, arguments);
			return this.emit("change"), t
		}
	});
	e.
default = f, t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/components/EditList")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		if (t && t.__esModule) return t;
		var e = {};
		if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e.
	default = t, e
	}
	function o(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(36),
		s = (o(a), i(4)),
		r = o(s),
		l = i(13),
		c = o(l),
		d = i(43),
		u = o(d),
		p = i(44),
		h = o(p),
		f = i(15),
		m = i(37),
		g = o(m),
		b = i(45),
		k = o(b),
		v = i(47),
		y = o(v),
		C = i(50),
		S = o(C),
		x = i(38),
		w = n(x),
		M = i(16),
		E = o(M),
		_ = c.
	default.createClass({
			displayName: "CombinationList",
			mixins: [g.
		default],
			render: function() {
				return c.
			default.createElement("div", {
					className: "CombinationListContent"
				}, c.
			default.createElement("ul", {
					key: "CombinationList"
				}, this.props.list))
			}
		}),
		P = c.
	default.createClass({
			displayName: "Combination",
			getInitialState: function() {
				return {
					token: null,
					allcombinations: [],
					firstCombination: null,
					index: 0,
					type: "NEW",
					editStockList: [],
					editover: !1,
					showInstruction: !1
				}
			},
			componentWillMount: function() {
				var t = u.
			default.isLogin() ? u.
			default.getLogin().token:
				null;
				this.StoreInit(t)
			},
			componentDidMount: function() {
				this.props.setToolBtns([w.configBtn]), u.
			default.addChangeListener(this.loginChanged)
			},
			componentWillUnmount: function() {
				this.combinationStoreClean(), u.
			default.removeChangeListener(this.loginChanged)
			},
			loginPage: function() {
				h.
			default.login()
			},
			StoreInit: function(t) {
				var e = this;
				t && !
				function() {
					var i = e;
					k.
				default.init(t).then(function(e) {
						e.length ? i.setState({
							token: t,
							allcombinations: e,
							firstCombination: e[0]
						}) : i.setState({
							token: t
						})
					})
				}()
			},
			combinationStoreClean: function() {
				k.
			default.clearList(), this.setState({
					token: null,
					allcombinations: [],
					firstCombination: null,
					newCombination: !1,
					index: 0,
					type: "NEW",
					editStockList: []
				})
			},
			loginChanged: function() {
				u.
			default.isLogin() ? this.StoreInit(u.
			default.getLogin().token):
				this.combinationStoreClean(), this.forceUpdate()
			},
			emptyPage: function() {
				return c.
			default.createElement("div", {
					className: "addpageright"
				}, c.
			default.createElement("div", {
					className: "content"
				}, c.
			default.createElement("span", {
					className: "nocombination ico-combi-box",
					onClick: u.
				default.isLogin() ? this.newOneCombination:
					this.loginPage
				}), c.
			default.createElement("p", null, "你还没有组合")))
			},
			addCombinationPage: function() {
				return c.
			default.createElement("div", {
					className: "addpageleft"
				}, c.
			default.createElement("div", {
					className: "content"
				}, c.
			default.createElement("span", {
					className: "cross ico-combi-cross",
					onClick: u.
				default.isLogin() ? this.newOneCombination:
					this.loginPage
				}), c.
			default.createElement("p", null, "请添加一个组合")))
			},
			changeFirstCombination: function(t, e) {
				this.setState({
					firstCombination: t,
					index: e
				})
			},
			getCombinationInfo: function(t) {
				t.stopPropagation();
				var e = t.currentTarget.getAttribute("data-index");
				this.changeFirstCombination(this.state.allcombinations[e], e)
			},
			createHead: function() {
				return c.
			default.createElement("ul", null, c.
			default.createElement("li", {
					className: "title"
				}, c.
			default.createElement("span", {
					className: "name"
				}, "组合名称"), c.
			default.createElement("span", {
					className: "netvalue"
				}, "净值"), c.
			default.createElement("span", {
					className: "yield"
				}, "总收益率"), c.
			default.createElement("span", {
					className: "yield1m"
				}, "月收益率"), c.
			default.createElement("span", {
					className: "yield1d"
				}, "日收益率"), c.
			default.createElement("span", {
					className: "rank"
				}, "收益排名"), c.
			default.createElement("span", {
					className: "favcount"
				}, "关注人数")))
			},
			createList: function() {
				var t = this,
					e = [],
					i = [];
				return this.state.allcombinations.forEach(function(e, n) {
					var o = e.yield ? e.yield > 1e-5 ? "+" + (100 * e.yield).toFixed(2) + "%" : (100 * e.yield).toFixed(2) + "%" : "-",
						a = e.yield1m ? e.yield1m > 1e-5 ? "+" + (100 * e.yield1m).toFixed(2) + "%" : (100 * e.yield1m).toFixed(2) + "%" : "-",
						s = e.yield1d ? e.yield1d > 1e-5 ? "+" + (100 * e.yield1d).toFixed(2) + "%" : (100 * e.yield1d).toFixed(2) + "%" : "-",
						l = c.
					default.createElement("li", {
							onClick: t.getCombinationInfo,
							"data-index": n,
							"data-i": e.id,
							ref: n
						}, c.
					default.createElement("span", {
							className: "name yellow"
						}, r.
					default.unescape(e.name)), c.
					default.createElement("span", {
							className: "netvalue"
						}, e.netvalue ? e.netvalue.toFixed(3) : "1.000"), c.
					default.createElement("span", {
							className: 1 == o || "-" == o ? "yield" : (100 * e.yield).toFixed(2) > 1e-6 ? "yield red" : "yield green"
						}, o), c.
					default.createElement("span", {
							className: 1 == a || "-" == a ? "yield1m" : (100 * e.yield1m).toFixed(2) > 1e-6 ? "yield1m red" : "yield1m green"
						}, a), c.
					default.createElement("span", {
							className: 1 == s || "-" == s ? "yield1d" : (100 * e.yield1d).toFixed(2) > 1e-6 ? "yield1d red" : "yield1d green"
						}, s), c.
					default.createElement("span", {
							className: "rank"
						}, e.rank ? e.rank : "-"), c.
					default.createElement("span", {
							className: "favcount"
						}, e.favcount ? e.favcount : 0));
					i.push(l)
				}), e.push(i), c.
			default.createElement(_, {
					list: e
				})
			},
			createContent: function() {
				return 0 != this.state.allcombinations.length ? [this.createHead(), this.createList()] : this.addCombinationPage()
			},
			createContentDetail: function() {
				return 0 != this.state.allcombinations.length ? c.
			default.createElement(y.
			default, {
					combinationInfo: this.state.firstCombination,
					Store: k.
				default,
					token:
					this.state.token
				}):
				this.emptyPage()
			},
			newOneCombination: function(t) {
				return this.state.allcombinations.length >= 20 ? (f.Popup.show({
					className: "tooManyCombinations",
					content: c.
				default.createElement("p", null, "您已创建20只组合"),
					title:
					"",
					modal: !0,
					buttons: ["确定"],
					onBtnClick: function(t, e) {
						return !0
					}
				}), !0) : (this.showNewCombination("NEW"), void this.setState({
					editStockList: [],
					type: "NEW"
				}))
			},
			closePopup: function(t) {
				this.popup.close(), this.popup = null
			},
			showNewCombination: function(t, e) {
				this.popup = f.Popup.show({
					className: "Combination-Btn",
					content: c.
				default.createElement(S.
				default, {
						type: t,
						Store: k.
					default,
						combinationInfo:
						this.state.firstCombination,
						detail: e,
						closeNewCombination: this.closeNewCombination,
						idx: this.state.index
					}),
					title:
					"EDIT" == t ? "编辑组合" : "新建组合",
					modal: !0,
					buttons: null
				})
			},
			editCombination: function(t) {
				var e = this;
				if (this.isAllowed()) {
					var i = this;
					k.
				default.getCombinationDetail(this.state.firstCombination.id).then(function(t) {
						i.setState({
							editStockList: t,
							type: "EDIT"
						}), e.showNewCombination("EDIT", t)
					})
				}
			},
			closeNewCombination: function(t) {
				var e = k.
			default.getCombinations(),
					i = "NEW" == this.state.type ? e[e.length - 1]:
					this.state.firstCombination;
				this.setState({
					allcombinations: e,
					firstCombination: i,
					type: "NEW",
					index: 0 == e.length ? 0 : "NEW" == this.state.type ? e.length - 1 : this.state.index
				}), this.closePopup()
			},
			refresh: function() {
				this.setState({
					allcombinations: k.
				default.getCombinations(),
					firstCombination:
					k.
				default.getCombination(0),
					type:
					"NEW"
				})
			},
			deleteCombination: function() {
				return k.
			default.removeCombination(this.state.index)
			},
			deleteCombinationBtn: function(t) {
				if (this.isAllowed()) {
					var e = this;
					f.Popup.show({
						className: "combinationDeleteComfirm",
						content: c.
					default.createElement("p", null, "确认删除 " + r.
					default.unescape(this.state.firstCombination.name) + " 组合吗?"),
						title:
						"删除组合",
						modal: !0,
						buttons: ["确定", "取消"],
						onBtnClick: function(t, i) {
							var n = this;
							return 0 == t && e.deleteCombination().then(function(t) {
								e.setState({
									index: 0
								}), e.refresh()
							}, function(t) {
								t.responseText && t.responseText.indexOf(1106) ? e.deleteFailed() : E.
							default.reportErr("gf_trader_viewStocks", {
									market: n.props.market,
									code: n.props.code
								}, 1e3, "-1", "请求挂了一百遍")
							}), !0
						}
					})
				}
			},
			deleteFailed: function() {
				f.Popup.show({
					className: "combinationDeleteComfirm",
					content: c.
				default.createElement("p", null, "该组合已在网店中上架,请勿删除！"),
					title:
					"删除失败",
					modal: !0,
					buttons: ["确定"],
					onBtnClick: function(t, e) {
						return !0
					}
				})
			},
			isAllowed: function() {
				return !(null == this.state.token || !this.state.firstCombination);
			},
			showShareCombination: function(t) {
				if (this.isAllowed()) {
					var e = "https://sell.gf.com.cn/api/qrcode?url=",
						i = e + encodeURIComponent("https://gold.gf.com.cn/#/group/" + this.state.firstCombination.id + "/hippo");
					f.Popup.show({
						className: "shareCombination",
						content: c.
					default.createElement("div", {
							className: "imgarea"
						}, c.
					default.createElement("img", {
							src: i
						}), c.
					default.createElement("span", null, "扫一扫分享给好友")),
						title:
						"分享组合",
						modal: !0,
						buttons: null
					})
				}
			},
			showCombinationInstruction: function() {
				this.setState({
					showInstruction: !0
				})
			},
			closeCombinationInstruction: function() {
				this.setState({
					showInstruction: !1
				})
			},
			render: function() {
				var t = this.createContent(),
					e = this.createContentDetail(),
					i = void 0;
				return i = c.
			default.createElement("span", {
					className: "addicon"
				}, c.
			default.createElement("i", {
					className: "ico ico-combi-add",
					onClick: u.
				default.isLogin() ? this.newOneCombination:
					this.loginPage
				})), c.
			default.createElement("div", {
					className: "Combination"
				}, c.
			default.createElement("div", {
					className: "CombinationHead"
				}, c.
			default.createElement("div", {
					className: "headleft"
				}, c.
			default.createElement("span", {
					className: "name"
				}, "我的组合"), c.
			default.createElement("span", {
					className: "info"
				}, c.
			default.createElement("i", {
					className: "ico ico-combi-info",
					onClick: this.showCombinationInstruction
				})), i), c.
			default.createElement("div", {
					className: "headright"
				}, c.
			default.createElement("span", {
					className: "name"
				}, this.state.firstCombination ? r.
			default.unescape(this.state.firstCombination.name):
				"组合概览"), this.state.firstCombination ? c.
			default.createElement("span", {
					className: "op"
				}, c.
			default.createElement("span", {
					className: "combi-icon"
				}, c.
			default.createElement("i", {
					className: "ico ico-combi-delete",
					onClick: this.deleteCombinationBtn
				})), c.
			default.createElement("span", {
					className: "vertical"
				}, "|"), c.
			default.createElement("span", {
					className: "combi-icon"
				}, c.
			default.createElement("i", {
					className: "ico ico-combi-edit",
					onClick: this.editCombination
				})), c.
			default.createElement("span", {
					className: "vertical"
				}, "|"), c.
			default.createElement("span", {
					className: "combi-icon"
				}, c.
			default.createElement("i", {
					className: "ico ico-combi-share",
					onClick: this.showShareCombination
				}))):
				null)), c.
			default.createElement("div", {
					className: "wrapRight"
				}, c.
			default.createElement("div", {
					className: "CombinationContent"
				}, c.
			default.createElement("div", {
					className: "CombinationLeft ScrollbarOuter"
				}, t), c.
			default.createElement("div", {
					className: "CombinationRight"
				}, e))), this.state.showInstruction ? c.
			default.createElement(L, {
					close: this.closeCombinationInstruction
				}):
				"")
			}
		}),
		L = c.
	default.createClass({
			displayName: "InstructionPic",
			mixins: [g.
		default],
			componentDidMount: function() {},
			render: function() {
				return c.
			default.createElement("div", {
					className: "combinationInstruction"
				}, c.
			default.createElement("div", {
					className: "picContent"
				}, c.
			default.createElement("div", {
					className: "title"
				}, c.
			default.createElement("a", {
					className: "Close",
					onClick: this.props.close
				})), c.
			default.createElement("div", {
					className: "instructionPic"
				})))
			}
		});
	e.
default = P, t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/SessionStore")
}, function(t, e) {
	t.exports = require("hippo/AppActionCreators")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	function o(t, e) {
		var i = {},
			n = {},
			o = [],
			a = [];
		t.forEach(function(t) {
			var e = t.exchangecode + ":" + t.tradingcode;
			i[e] = t
		}), e.forEach(function(t) {
			var e = t.exchangecode + ":" + t.tradingcode;
			n[e] = t
		});
		for (var s = r.
	default.union(r.
	default.keys(i), r.
	default.keys(n)), l = 0; l < s.length; l++) {
			var c = s[l];
			c in n && c in i ? r.
		default.isEqual(n[c], i[c]) || (a.push(i[c]), o.push(n[c])):
			c in n ? o.push(n[c]) : a.push(i[c])
		}
		return [o, a]
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function t(t, e) {
				var i = [],
					n = !0,
					o = !1,
					a = void 0;
				try {
					for (var s, r = t[Symbol.iterator](); !(n = (s = r.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
				} catch (t) {
					o = !0, a = t
				} finally {
					try {
						!n && r.
						return &&r.
						return ()
					} finally {
						if (o) throw a
					}
				}
				return i
			}
			return function(e, i) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return t(e, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		s = i(4),
		r = n(s),
		l = i(36),
		c = n(l),
		d = i(28),
		u = i(46),
		p = n(u),
		h = p.
	default.COMBI_URL,
		f = [],
		m = {},
		g = void 0,
		b = {
			getCombinationList: function() {
				return c.
			default.ajax({
					url: h + "/portfolio/self/owner?order=DA&token=" + g,
					method: "GET"
				})
			},
			createCombination: function(t, e) {
				var i = t.name,
					n = t.investdesc;
				return c.
			default.ajax({
					url: h + "/portfolio/self/publish?token=" + g,
					method: "POST",
					contentType: "application/json",
					data: JSON.stringify({
						name: i,
						investdesc: n,
						seculist: JSON.stringify(e)
					})
				})
			},
			removeCombination: function(t) {
				return c.
			default.ajax({
					url: h + "/portfolio/self/publish/" + t + "?token=" + g,
					method: "DELETE"
				})
			},
			getCombinationDetail: function(t) {
				return c.
			default.ajax({
					url: h + "/portfolio/self/hold/" + t + "?token=" + g,
					method: "GET"
				})
			},
			editCombination: function(t, e, i, n, o) {
				return c.
			default.ajax({
					url: h + "/portfolio/self/owner/" + t + "?token=" + g,
					method: "POST",
					contentType: "application/json",
					data: JSON.stringify({
						name: e,
						investdesc: i,
						addlist: JSON.stringify(n),
						dellist: JSON.stringify(o)
					})
				})
			},
			getStockIndustry: function(t, e) {
				return c.
			default.ajax({
					url: h + "/portfolio/self/secuind/?tradingcode=" + t + "&exchangecode=" + e + "&token=" + g,
					method: "GET"
				})
			},
			getYield: function(t, e, i) {
				var n = h + "/portfolio/self/yield/" + t + "/";
				return e && i && (n += "?begindate=" + e + "&enddate=" + i), c.
			default.ajax({
					url: n,
					method: "GET"
				})
			},
			getSelfFavorite: function(t, e) {
				var i = h + "/portfolio/self/favorite/?token=" + g + "&page=" + t + "&limit=" + e + "/";
				return c.
			default.ajax({
					url: i,
					method: "GET"
				})
			}
		};
	e.
default = r.
default.extend({
		init: function(t) {
			return g = t, b.getCombinationList().then(function(t) {
				if (0 == t.code) return f = t.data, t.data
			}, function(t) {
				"4000" == t.code && consolo.log(t.msg)
			})
		},
		isLogin: function() {
			return !!g
		},
		getStockIndustry: function(t, e) {
			return b.getStockIndustry(t, e).then(function(t) {
				return t.data.industry
			}, function(t) {
				return ""
			})
		},
		addCombination: function(t, e) {
			var i = this;
			return b.createCombination(t, e).then(function(n) {
				var o = {
					name: t.name,
					investdesc: t.investdesc,
					id: n.data.portfolioid
				};
				f.push(o), m[n.data.portfolioid] = e, i.emit("change", "add", f.length - 1, t)
			}, function(t) {
				return t ? t.responseText && t.responseText.replace(/[\.,\:,\,]/g, "").split('"')[2] : null
			})
		},
		editCombination: function(t, e, i) {
			var n = this,
				s = f[t],
				l = s.id,
				c = m[l],
				d = o(c, i),
				u = a(d, 2),
				p = u[0],
				h = u[1];
			return b.editCombination(l, e.name, e.investdesc, p, h).then(function() {
				r.
			default.extend(f[t], e), m[l] = i, n.emit("change", "update", t, e)
			}, function(t) {
				return t.responseText && t.responseText.replace(/[\.,\:,\,]/g, "").split('"')[2]
			})
		},
		getIdx: function(t) {
			return f.indexOf(t)
		},
		removeCombination: function(t) {
			var e = this,
				i = f[t];
			return b.removeCombination(i.id).then(function(n) {
				if (f.splice(t, 1), 0 == n.code) return e.emit("change", "del", t, i), n
			}, function(t) {
				return t
			})
		},
		getCombination: function(t) {
			return this.getCombinations()[t]
		},
		getCombinationDetail: function(t) {
			if (t in m) {
				var e = c.
			default.Deferred();
				return e.resolve(m[t]), e.promise(m[t])
			}
			return b.getCombinationDetail(t).then(function(e) {
				return m[t] = e.data, e.data
			})
		},
		getCombinations: function() {
			return f
		},
		clearList: function() {
			f = [], m = {}, g = "", this.emit("change", "query")
		},
		getYield: function() {
			return b.getYield.apply(b, arguments)
		},
		getSelfFavorite: function(t, e) {
			return b.getSelfFavorite(t, e).then(function(t) {
				return date
			})
		}
	}, d.EventEmitter.prototype), t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/URL")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		if (t && t.__esModule) return t;
		var e = {};
		if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e.
	default = t, e
	}
	function o(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(36),
		s = o(a),
		r = i(4),
		l = o(r),
		c = i(13),
		d = o(c),
		u = i(6),
		p = n(u),
		h = i(31),
		f = i(37),
		m = o(f),
		g = i(48),
		b = o(g),
		k = i(11),
		v = o(k),
		y = d.
	default.createClass({
			displayName: "CombinationDetailListContent",
			mixins: [m.
		default],
			componentDidMount: function() {
				var t = this;
				this.hscrollbar.on("hori-scroll", function(e) {
					t.moveTableHeader(e)
				})
			},
			componentDidUpdate: function() {
				this.resetScroll()
			},
			moveTableHeader: function(t) {
				this.hscrollbar.scrollTo(t, this.scrollbar.scroll);
				var e = (t >= 0 ? t : 0) + "px";
				(0, s.
			default)(".CombinationDetailList .ScrollbarMoveHeader").css("right", e)
			},
			render: function() {
				return d.
			default.createElement("div", {
					className: "combinationDetailListContent"
				}, d.
			default.createElement("ul", null, this.props.list))
			}
		}),
		C = d.
	default.createClass({
			displayName: "CombinationDetailList",
			componentWillUnmount: function() {
				this.destroyAllStockRealtimers()
			},
			componentDidUpdate: function() {
				this.getNewPrice()
			},
			componentDidMount: function() {
				this.getNewPrice()
			},
			componentWillReceiveProps: function(t) {
				this.props != t && this.destroyAllStockRealtimers()
			},
			getNewPrice: function() {
				var t = this,
					e = this.props.data;
				this.socket = {}, e.forEach(function(e, i) {
					t.socket[e.exchangecode.toLowerCase() + "_" + e.tradingcode] = new h.StockRealtime, t.socket[e.exchangecode.toLowerCase() + "_" + e.tradingcode].on("update", function(i) {
						t.destroyStockRealtimer(e.exchangecode.toLowerCase(), e.tradingcode), t.updateNowPrice(e, i)
					}), t.socket[e.exchangecode.toLowerCase() + "_" + e.tradingcode].set(e.exchangecode.toLowerCase(), e.tradingcode)
				})
			},
			destroyAllStockRealtimers: function() {
				for (var t in this.socket) this.socket[t].destroy()
			},
			destroyStockRealtimer: function(t, e) {
				var i = t + "_" + e;
				this.socket[i] && (this.socket[i].destroy(), delete this.socket[i])
			},
			openDetail: function(t) {
				var e = this.hasStar(t.exchangecode, t.tradingcode);
				u.Event.bubble(this.getDOMNode(), {
					type: "ADD_TAB",
					subtype: "ENTER_STOCK",
					market: t.exchangecode.toLowerCase(),
					code: t.tradingcode,
					name: t && t.secuabbr,
					star: e
				})
			},
			hasStar: function(t, e) {
				var i = !1;
				return t && e && v.
			default.isMyStock(t, e, function(t) {
					i = t
				}), i
			},
			createList: function() {
				var t = this,
					e = this.props.data,
					i = e.map(function(e, i) {
						return d.
					default.createElement("li", {
							className: "content " + e.tradingcode,
							onDoubleClick: t.openDetail.bind(t, e)
						}, d.
					default.createElement("span", {
							className: "index"
						}, i + 1), d.
					default.createElement("span", {
							className: "name yellow"
						}, l.
					default.unescape(e.secuabbr)), d.
					default.createElement("span", {
							className: "code"
						}, e.tradingcode, d.
					default.createElement("i", {
							className: "ggt" == e.exchangecode || "szgt" == e.exchangecode ? "hk" : "hide"
						})), d.
					default.createElement("span", {
							className: "nowprice"
						}, "-"), d.
					default.createElement("span", {
							className: "tradingprice"
						}, e.tradingprice), d.
					default.createElement("span", {
							className: "targetprice"
						}, e.targetprice ? e.targetprice : "0"), d.
					default.createElement("span", {
							className: "price_rise"
						}, "-"), d.
					default.createElement("span", {
							className: "reason",
							title: e.secudesc ? l.
						default.unescape(e.secudesc):
							"暂无理由"
						}, e.secudesc ? l.
					default.unescape(e.secudesc):
						"-"))
					});
				return i
			},
			createHead: function() {
				return d.
			default.createElement("li", {
					className: "title ScrollbarMoveHeader"
				}, d.
			default.createElement("span", {
					className: "index"
				}, "序号"), d.
			default.createElement("span", {
					className: "name"
				}, "股票名称"), d.
			default.createElement("span", {
					className: "code"
				}, "代码"), d.
			default.createElement("span", {
					className: "nowprice"
				}, "最新价"), d.
			default.createElement("span", {
					className: "tradingprice"
				}, "关注价"), d.
			default.createElement("span", {
					className: "targetprice"
				}, "目标价"), d.
			default.createElement("span", {
					className: "price_rise"
				}, "关注后涨幅"), d.
			default.createElement("span", {
					className: "reason"
				}, "推荐理由"))
			},
			updateNowPrice: function(t, e) {
				var i = p.getStockAccuracy(t.exchangecode, t.tradingcode),
					n = ((e.now.toFixed(2) - t.tradingprice) / t.tradingprice * 100).toFixed(2);
				(0, s.
			default)(".CombinationDetailList ." + e.code + " .nowprice").html(e.stop ? "已停牌" : (e.now - 0).toFixed(i)), (0, s.
			default)(".CombinationDetailList ." + e.code + " .price_rise").html(n), n < 1e-5 && n > -1e-5 ? (0, s.
			default)(".CombinationDetailList ." + e.code + " .price_rise").removeClass("red").removeClass("green") : n > 1e-5 ? (0, s.
			default)(".CombinationDetailList ." + e.code + " .price_rise").removeClass("green").addClass("red") : (0, s.
			default)(".CombinationDetailList ." + e.code + " .price_rise").removeClass("red").addClass("green")
			},
			render: function() {
				var t = this.createHead(),
					e = this.createList();
				return d.
			default.createElement("div", {
					className: "CombinationDetailList"
				}, d.
			default.createElement("ul", null, t), d.
			default.createElement(y, {
					list: e
				}))
			}
		}),
		S = d.
	default.createClass({
			displayName: "CombinationDetail",
			getInitialState: function() {
				return this.loading = !0, {
					combinationDetail: {
						detailList: null
					},
					data: []
				}
			},
			componentWillMount: function() {
				this.createContent()
			},
			createContent: function(t) {
				var e = this,
					i = {};
				i.detailList = [];
				var n = t || this.props.combinationInfo;
				n && !
				function() {
					i.investdesc = n.investdesc;
					var t = e;
					e.props.Store.getCombinationDetail(n.id).then(function(e) {
						t.loading = !1, t.setState({
							data: e
						})
					})
				}()
			},
			componentWillReceiveProps: function(t) {
				t.combinationInfo && (this.loading = !0, this.createContent(t.combinationInfo))
			},
			render: function() {
				return d.
			default.createElement("div", {
					className: "CombinationDetail"
				}, d.
			default.createElement("div", {
					className: "secudesc"
				}, null != this.props.combinationInfo ? this.props.combinationInfo.investdesc : ""), d.
			default.createElement("div", {
					className: "CombinationDetailGraph"
				}, d.
			default.createElement(b.
			default, {
					Store: this.props.Store,
					svg_width: (0, s.
				default)(".CombinationRight").width() - 20,
					combinationInfo: this.props.combinationInfo
				})), this.loading ? d.
			default.createElement("div", {
					className: "loader"
				}, d.
			default.createElement("div", null), d.
			default.createElement("div", null), d.
			default.createElement("div", null)):
				d.
			default.createElement(C, {
					data: this.state.data
				}))
			}
		});
	e.
default = S, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(4),
		a = n(o),
		s = i(36),
		r = n(s),
		l = i(49),
		c = n(l),
		d = i(13),
		u = n(d),
		p = u.
	default.createClass({
			displayName: "RateCompare",
			getDefaultProps: function() {
				return {
					svg_outheight: 230,
					svg_height: 200,
					svg_padding: {
						top: 0,
						bottom: 20,
						left: 40,
						right: 0
					}
				}
			},
			getInitialState: function() {
				return this.limitSvgWidth(this.props.svg_width), {
					id: null,
					pfrate: "-",
					baserate: "-",
					type: "month",
					svgdata: this.changeSvgData(this.props.svg_width)
				}
			},
			limitSvgWidth: function(t) {
				var e = t || this.props.svg_width;
				e < 580 ? this.props.svg_width = 580 : this.props.svg_width = e
			},
			changeSvgData: function(t) {
				var e = {
					lineposition_left: [{
						x: this.props.svg_padding.left,
						y: 0
					}, {
						x: this.props.svg_padding.left,
						y: this.props.svg_height
					}],
					lineposition_top: [{
						x: this.props.svg_padding.left,
						y: 0
					}, {
						x: t,
						y: 0
					}],
					lineposition_right: [{
						x: t,
						y: 0
					}, {
						x: t,
						y: this.props.svg_height
					}],
					lineposition_bottom: [{
						x: this.props.svg_padding.left,
						y: this.props.svg_height
					}, {
						x: t,
						y: this.props.svg_height
					}],
					lineposition_down: [{
						x: this.props.svg_padding.left,
						y: Math.floor(this.props.svg_height / 4)
					}, {
						x: t,
						y: Math.floor(this.props.svg_height / 4)
					}],
					lineposition_mid: [{
						x: this.props.svg_padding.left,
						y: Math.floor(this.props.svg_height / 2)
					}, {
						x: t,
						y: Math.floor(this.props.svg_height / 2)
					}],
					lineposition_up: [{
						x: this.props.svg_padding.left,
						y: Math.floor(3 * this.props.svg_height / 4)
					}, {
						x: t,
						y: Math.floor(3 * this.props.svg_height / 4)
					}]
				};
				return e
			},
			dateFormat: function(t) {
				var e = new Date(t),
					i = e.getFullYear(),
					n = (e.getMonth() + 1).toString(),
					e = e.getDate().toString();
				return n = 1 == n.length ? "0" + n : n, e = 1 == e.length ? "0" + e : e, "" + i + n + e
			},
			MaxMin: function(t, e) {
				var i = [];
				return t.forEach(function(t, e) {
					i.push(Math.abs(t.value))
				}), e.forEach(function(t, e) {
					i.push(Math.abs(t.value))
				}), Math.max.apply(null, i)
			},
			removeOldChart: function() {
				(0, r.
			default)("#compoment").remove()
			},
			drawChart: function() {
				this.removeOldChart(), this.limitSvgWidth();
				var t = this.changeSvgData(this.props.svg_width),
					e = c.
				default.scale.linear().domain([0, this.props.svg_width]).range([0, this.props.svg_width]),
					i = c.
				default.scale.linear().range([0, this.props.svg_height]).domain([0, this.props.svg_height]),
					n = c.
				default.svg.line().x(function(t) {
						return e(t.x)
					}).y(function(t) {
						return i(t.y)
					});
				this.d3 = c.
			default.select(".rate-compare").append("svg").attr("id", "compoment").attr("width", this.props.svg_width).attr("height", this.props.svg_outheight).data(t).enter();
				var o = ["lineposition_down", "lineposition_mid", "lineposition_up", "lineposition_right", "lineposition_left", "lineposition_top", "lineposition_bottom"];
				o.forEach(function(e) {
					c.
				default.select("#compoment").append("path").attr("class", "line").attr("d", n(t[e]))
				})
			},
			refreshChart: function(t) {
				var e = this;
				this.svgdata = {}, this.howManyPoint = 0, this.svgdata.x_axis = ["0", "0", "0", "0", "0"], this.svgdata.y_axis = ["0.00", "0.00", "0.00", "0.00", "0.00"];
				var i, n, o = 864e5,
					n = (new Date).getTime();
				i = n - {
					all: n,
					week: 7 * o,
					month: 30 * o,
					year: 365 * o
				}[t];
				var a = this;
				this.props.Store.getYield(this.id, this.dateFormat(i), this.dateFormat(n)).then(function(t) {
					var i = e.parseData(t.data.base, t.data.portfolio),
						n = i.basearray,
						o = i.portfolioarray;
					a.refresh(n, o)
				})
			},
			refresh: function(t, e) {
				this.limitSvgWidth(), (0, r.
			default)("#compoment .baseline").remove(), (0, r.
			default)("#compoment .portfolioline").remove();
				var i = "-",
					n = "-";
				t.length >= 1 && (i = (t[t.length - 1].value - 0).toFixed(2) + "%", n = (e[e.length - 1].value - 0).toFixed(2) + "%"), this.setState({
					pfrate: n,
					baserate: i
				});
				var o = c.
			default.scale.linear().domain([0, t.length - 1]).range([this.props.svg_padding.left, this.props.svg_width]),
					a = c.
				default.scale.linear().domain([this.svgdata.y_axis[0], this.svgdata.y_axis[4]]).range([this.props.svg_height, 0]),
					s = c.
				default.svg.line().x(function(t) {
						return o(t.index)
					}).y(function(t) {
						return a(t.value)
					});
				switch (this.howManyPoint) {
				case 0:
					break;
				case 1:
					c.
				default.select("#compoment").selectAll(".basecircle").data(t).enter().append("circle").attr("class", "basecircle").attr("cx", Math.floor((this.props.svg_width + this.props.svg_padding.left) / 2)).attr("cy", function(t) {
						return a(t.value)
					}).attr("r", 2).attr("fill", "#E5BF8E"), c.
				default.select("#compoment").selectAll(".pocircle").data(e).enter().insert("circle").attr("class", "circle").attr("cx", Math.floor((this.props.svg_width + this.props.svg_padding.left) / 2)).attr("cy", function(t) {
						return a(t.value)
					}).attr("r", 2).attr("fill", "#ABD7E4");
					break;
				default:
					c.
				default.select("#compoment").append("path").attr("class", "baseline").attr("stroke", "#0c7fd7").attr("d", s(t)), c.
				default.select("#compoment").append("path").attr("stroke", "#f5910f").attr("class", "portfolioline").attr("d", s(e))
				}
				var l = c.
			default.scale.linear().domain([0, this.svgdata.x_axis.length - 1]).range([24, this.props.svg_width - 70]),
					d = c.
				default.scale.linear().domain([0, this.props.svg_height]).range([0, this.props.svg_height]),
					u = this;
				c.
			default.select("#compoment").selectAll(".xText").data(this.svgdata.x_axis).enter().append("text").attr("class", "xText").attr("x", function(t, e) {
					return 1 == u.howManyPoint ? Math.floor((u.props.svg_width + u.props.svg_padding.left) / 3) : l(e)
				}).attr("y", function(t) {
					return d(u.props.svg_height)
				}).attr("dx", function() {
					return 20
				}).attr("dy", function(t) {
					return 20
				}).text(function(t) {
					return t
				});
				var p = c.
			default.scale.linear().domain([0, this.props.svg_width]).range([-20, this.props.svg_width]),
					h = c.
				default.scale.linear().domain([0, this.svgdata.y_axis.length - 1]).range([this.props.svg_height - 25, -10]);
				c.
			default.select("#compoment").selectAll(".yText").data(this.svgdata.y_axis).enter().append("text").attr("class", "yText").attr("x", function(t, e) {
					return t >= 0 ? p(0) + 5 : p(0)
				}).attr("y", function(t, e) {
					return h(e)
				}).attr("dx", function() {
					return 20
				}).attr("dy", function() {
					return 20
				}).text(function(t, e) {
					return t
				});
				for (var f = 0; f < (0, r.
			default)(".yText").length; f++)(0, r.
			default)(".yText").eq(f).text() > 0 ? (0, r.
			default)(".yText").eq(f).attr("class", "yText redText"):
				(0, r.
			default)(".yText").eq(f).text() < 0 && (0, r.
			default)(".yText").eq(f).attr("class", "yText greenText")
			},
			parseData: function(t, e) {
				var i = [],
					n = [];
				if (0 == t.length) return {
					basearray: i,
					portfolioarray: n
				};
				for (var o = 0; o < t.length; o++) {
					var a = o,
						s = 100 * t[o].value;
					i.push({
						index: a,
						value: s
					})
				}
				for (var o = 0; o < e.length; o++) {
					var a = o,
						s = 100 * e[o].value;
					n.push({
						index: a,
						value: s
					})
				}
				switch (this.svgdata.x_axis = [], i.length) {
				case 0:
					break;
				case 1:
					this.howManyPoint = 1, this.svgdata.x_axis.push(t[0].date);
					break;
				case 2:
					this.howManyPoint = 2, this.svgdata.x_axis.push(t[0].date), this.svgdata.x_axis.push(t[1].date);
					break;
				default:
					this.howManyPoint = i.length, this.svgdata.x_axis.push(t[0].date), this.svgdata.x_axis.push(t[Math.ceil(t.length / 2)].date), this.svgdata.x_axis.push(t[t.length - 1].date)
				}
				this.svgdata.y_axis = [];
				for (var r = this.MaxMin(i, n), l = r / 2, o = 0; o < 5; o++) this.svgdata.y_axis.push(((o - 2) * l).toFixed(2));
				return {
					basearray: i,
					portfolioarray: n
				}
			},
			D3Draw: function() {
				this.drawChart(), this.refreshChart(this.type)
			},
			removeDom: function() {
				this.getDOMNode().childNodes[1].childNodes[0] && this.getDOMNode().childNodes[1].childNodes[0].remove()
			},
			switchType: function(t) {
				this.type = t.target.getAttribute("data-delta"), (0, r.
			default)(".tabs_li").removeClass("tabLiAction"), (0, r.
			default)(t.target).addClass("tabLiAction"), this.D3Draw()
			},
			componentDidMount: function() {
				this.id = this.props.combinationInfo && this.props.combinationInfo.id, this.type = "month", this.D3Draw()
			},
			componentWillReceiveProps: function(t) {
				return t.combinationInfo && t.combinationInfo.id && this.props.combinationInfo.id != t.combinationInfo.id ? (this.id = t.combinationInfo.id, this.props.svg_width = t.svg_width, this.D3Draw(), void 0) : 0
			},
			render: function() {
				return u.
			default.createElement("div", {
					className: "combination-rate"
				}, u.
			default.createElement("div", {
					className: "title"
				}, u.
			default.createElement("div", {
					className: "title_tabs"
				}, u.
			default.createElement("ul", {
					className: "tabs"
				}, u.
			default.createElement("li", {
					className: "tabs_li tabLiAction",
					"data-delta": "month",
					onClick: this.switchType
				}, "月"), u.
			default.createElement("li", {
					className: "tabs_li",
					"data-delta": "all",
					onClick: this.switchType
				}, "全部"))), u.
			default.createElement("div", {
					className: "shownamerate"
				}, u.
			default.createElement("span", {
					className: "ribbon_portfolio"
				}), u.
			default.createElement("span", {
					className: "name_portfolio"
				}, this.props.combinationInfo ? a.
			default.unescape(this.props.combinationInfo.name):
				"未知组合名"), u.
			default.createElement("span", {
					className: "portfolio_growth_rate"
				}, this.state.pfrate), u.
			default.createElement("span", {
					className: "ribbon_base"
				}), u.
			default.createElement("span", {
					className: "name_base"
				}, "沪深300"), u.
			default.createElement("span", {
					className: "base_growth_rate"
				}, this.state.baserate))), u.
			default.createElement("div", {
					className: "rate-compare"
				}))
			}
		});
	e.
default = p, t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/d3")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		if (t && t.__esModule) return t;
		var e = {};
		if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e.
	default = t, e
	}
	function o(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(36),
		s = o(a),
		r = i(4),
		l = o(r),
		c = i(13),
		d = o(c),
		u = i(37),
		p = o(u),
		h = i(31),
		f = i(51),
		m = o(f),
		g = i(6),
		b = n(g),
		k = i(10),
		v = o(k),
		y = ["sz_399300", "sz_399108", "sz_399107", "sz_399106", "sz_399006", "sz_399005", "sz_399001", "sh_000003", "sh_000002", "sh_000001"],
		C = d.
	default.createClass({
			displayName: "ImportMyStocks",
			getDefaultProps: function() {
				return {}
			},
			getInitialState: function() {
				var t = this.filterIndex(v.
			default.getList()),
					e = [];
				return this.props.alreadyChoosed.forEach(function(t, i) {
					e.push(t.exchangecode + "_" + t.tradingcode)
				}), {
					mystocks: t,
					show: [],
					count: this.props.count,
					alreadyChoosedNameHash: e
				}
			},
			filterIndex: function(t) {
				var e = [];
				return t.forEach(function(t, i) {
					b.isStockIndex(t.market, t.code) || e.push(t)
				}), e
			},
			destroyStockRealtimer: function(t, e) {
				this.socket[t + "_" + e] && this.socket[t + "_" + e].destroy()
			},
			tickoffStock: function() {
				for (var t = (0, s.
			default)("ul.combinationMyStocks li"), e = 1; e < t.length; e++) {
					var i = t[e].childNodes[2].childNodes[0].innerHTML,
						n = t[e].childNodes[2].getAttribute("data-market");
					n && -1 != this.state.alreadyChoosedNameHash.indexOf(n + "_" + i) && t[e].childNodes[0].childNodes[0].setAttribute("checked", !0)
				}
			},
			chooseStock: function(t) {
				var e = this.state.count,
					i = (0, s.
				default)(t.target).prop("checked");
				i ? e++ : e--, e > 20 ? (this.props.tips("已选20只股票"), (0, s.
			default)(t.target).attr("checked", !1)) : this.setState({
					count: e
				})
			},
			getCheckedStocksInfoCount: function() {
				this.checkedStocksInfo = [], this.deleteBuf = [];
				for (var t = (0, s.
			default)(".newImportMyStockPage .content .checkbox"), e = 0; e < t.length; e++) {
					var i = (0, s.
				default)(t[e]),
						n = t[e].parentNode.parentNode.childNodes;
					if (i.prop("checked")) {
						var o = {
							tradingcode: n[2].firstChild.innerHTML,
							secuabbr: n[1].innerHTML,
							exchangecode: t[e].getAttribute("data-market"),
							tradingprice: n[4].innerHTML,
							targetprice: null,
							secudesc: null
						};
						this.checkedStocksInfo.push(o)
					} else this.deleteBuf.push(t[e].getAttribute("data-market") + "_" + n[2].firstChild.innerHTML)
				}
			},
			updateMyStock: function(t) {
				var e = (t.risepercent - 0).toFixed(2);
				e = e > 0 ? "+" + e + "%" : e + "%";
				var i = b.getStockAccuracy(t.market, t.code),
					n = (t.rise - 0).toFixed(i);
				n = n > 0 ? "+" + n : n;
				var o = t.rise > 0 ? "red" : 0 == t.rise ? "" : "green",
					a = t.risepercent > 0 ? "red" : 0 == t.risepercent ? "" : "green";
				(0, s.
			default)(".combinationMyStocks ." + t.market + "_" + t.code + " .risepercent").addClass(a).html(t.stop ? "已停牌" : e), (0, s.
			default)(".combinationMyStocks ." + t.market + "_" + t.code + " .rise").html(n).addClass(o), (0, s.
			default)(".combinationMyStocks ." + t.market + "_" + t.code + " .now").html((t.now - 0).toFixed(i)), (0, s.
			default)(".combinationMyStocks ." + t.market + "_" + t.code + " .amount").html(b.fitNumber(t.volume)), (0, s.
			default)(".combinationMyStocks ." + t.market + "_" + t.code + " .volume").html(b.fitNumber(t.amount))
			},
			createLi: function(t) {
				var e = d.
			default.createElement("li", {
					className: "content " + t.market + "_" + t.code
				}, d.
			default.createElement("span", {
					className: "choosed"
				}, d.
			default.createElement("input", {
					className: "checkbox",
					type: "checkbox",
					"data-market": t.market,
					onChange: this.chooseStock
				})), d.
			default.createElement("span", {
					className: "secuabbr"
				}, t.name), d.
			default.createElement("span", {
					className: "tradingcode",
					"data-market": t.market
				}, t.code, d.
			default.createElement("i", {
					className: "ggt" == t.market || "szgt" == t.market ? "hk" : "hide"
				})), d.
			default.createElement("span", {
					className: "risepercent"
				}, "-"), d.
			default.createElement("span", {
					className: "now"
				}, "-"), d.
			default.createElement("span", {
					className: "rise"
				}, "-"), d.
			default.createElement("span", {
					className: "amount"
				}, "-"), d.
			default.createElement("span", {
					className: "volume"
				}, "-"));
				return e
			},
			createList: function() {
				var t = this;
				this.socket = {}, this.state.mystocks.forEach(function(e, i) {
					t.mystocksList.push(t.createLi(e)), t.socket[e.market + "_" + e.code] = new h.StockRealtime;
					var n = t;
					t.socket[e.market + "_" + e.code].on("update", function(t) {
						n.updateMyStock(t), n.destroyStockRealtimer(t.market, t.code)
					}), t.socket[e.market + "_" + e.code].set(e.market, e.code)
				}), this.setState({
					show: this.mystocksList
				})
			},
			goBack: function() {
				this.props.goBack([])
			},
			importChecked: function() {
				this.getCheckedStocksInfoCount(), this.props.goBack(this.checkedStocksInfo, this.deleteBuf)
			},
			initMystocksList: function() {
				this.mystocksList = [d.
			default.createElement("li", {
					className: "title"
				}, d.
			default.createElement("span", {
					className: "choosed"
				}, "选择"), d.
			default.createElement("span", {
					className: "secuabbr"
				}, "股票名称"), d.
			default.createElement("span", {
					className: "tradingcode"
				}, "代码"), d.
			default.createElement("span", {
					className: "risepercent"
				}, "涨跌幅"), d.
			default.createElement("span", {
					className: "now"
				}, "最新价"), d.
			default.createElement("span", {
					className: "rise"
				}, "涨跌"), d.
			default.createElement("span", {
					className: "amount"
				}, "成交额"), d.
			default.createElement("span", {
					className: "volume"
				}, "成交量"))]
			},
			componentDidMount: function() {
				this.title = (0, s.
			default)(".Combination-Btn .Title h1").html(), (0, s.
			default)(".Combination-Btn .Title h1").html("导入自选股"), this.initMystocksList(), this.createList()
			},
			componentDidUpdate: function(t, e) {
				this.tickoffStock()
			},
			componentWillUnmount: function() {
				(0, s.
			default)(".Combination-Btn .Title h1").html(this.title)
			},
			render: function() {
				return d.
			default.createElement("div", {
					className: "myStockList"
				}, d.
			default.createElement("div", {
					className: "contentPage"
				}, d.
			default.createElement(S, {
					mystocks: this.state.mystocks,
					show: this.state.show
				}), d.
			default.createElement("span", {
					className: "textprompt"
				}, d.
			default.createElement("span", {
					className: "prompt red hide"
				}), d.
			default.createElement("span", {
					className: "totelPage"
				}, d.
			default.createElement("span", {
					className: "red"
				}, this.state.count), "/20只股票"))), d.
			default.createElement("div", {
					className: "footer"
				}, d.
			default.createElement("button", {
					className: "import",
					onClick: this.importChecked
				}, "导入"), d.
			default.createElement("button", {
					className: "cancle",
					onClick: this.goBack
				}, "取消")))
			}
		}),
		S = d.
	default.createClass({
			displayName: "ShowStockList",
			mixins: [p.
		default],
			render: function() {
				return d.
			default.createElement("div", {
					className: "showStockList"
				}, this.props.mystocks.length ? this.props.show.length ? d.
			default.createElement("ul", {
					className: "combinationMyStocks"
				}, this.props.show):
				d.
			default.createElement("div", {
					className: "loader"
				}, d.
			default.createElement("div", null), d.
			default.createElement("div", null), d.
			default.createElement("div", null)):
				d.
			default.createElement("p", {
					className: "emptyMyList"
				}, "您的自选列表没有可添加的股票！"))
			}
		}),
		x = d.
	default.createClass({
			displayName: "StepOnePageStockList",
			mixins: [p.
		default],
			render: function() {
				return d.
			default.createElement("div", {
					className: "stepOnePageStockList"
				}, d.
			default.createElement("ul", {
					ref: "stocksInfo"
				}, this.props.stockList))
			}
		}),
		w = d.
	default.createClass({
			displayName: "StockInfoChangable",
			getDefaultProps: function() {
				return {}
			},
			getInitialState: function() {
				return {
					newstock: {
						tradingcode: null,
						secuabbr: null,
						exchangecode: null,
						tradingprice: null,
						targetprice: null,
						secudesc: null,
						industry: null
					},
					type: "StepOne",
					editingList: this.props.editingList || []
				}
			},
			componentWillUnmount: function() {
				this.closeKeyWizard()
			},
			addEditStockList: function() {
				if (null != this.state.newstock.secuabbr && null != this.state.newstock.tradingcode && null != this.state.newstock.tradingprice) {
					var t = {
						secuabbr: this.state.newstock.secuabbr,
						tradingcode: this.state.newstock.tradingcode,
						tradingprice: this.state.newstock.tradingprice,
						exchangecode: this.state.newstock.exchangecode
					};
					this.editStockList.push(t)
				}
			},
			addOneStoreInList: function(t, e) {
				t.industry = e, this.editStockList.push(t), this.setState({
					newstock: {
						secuabbr: null,
						secudesc: null,
						tradingcode: null,
						tradingprice: null,
						exchangecode: null,
						targetprice: null,
						industry: null
					}
				}), (0, s.
			default)(".mirrorInput").val("")
			},
			resetNow: function(t) {
				var e = this;
				t && !
				function() {
					var i = e,
						n = b.getStockAccuracy(t.market, t.code),
						o = {
							secuabbr: t.name,
							tradingcode: t.code,
							tradingprice: (t.now - 0 || t.closeprice - 0).toFixed(n),
							exchangecode: t.market,
							industry: ""
						};
					e.props.Store.getStockIndustry(t.code, t.market).then(function(t) {
						i.addOneStoreInList(o, t)
					}, function(t) {
						i.addOneStoreInList(o, "")
					})
				}()
			},
			destroyStockRealtimer: function() {
				this.socket && (this.socket.destroy(), this.socket = null)
			},
			getStockRealPrice: function(t) {
				this.socket = new h.StockRealtime;
				var e = this;
				this.socket.on("update", function(t) {
					e.resetNow(t), e.destroyStockRealtimer()
				}), this.socket.set(t.market, t.code)
			},
			repeatStock: function(t) {
				var e = 0;
				return this.editStockList.forEach(function(i, n) {
					i.exchangecode == t.market && i.tradingcode == t.code && (e = 1)
				}), e
			},
			tips: function(t) {
				(0, s.
			default)(".totelPage").hide(), (0, s.
			default)(".prompt").fadeIn().html(t).fadeOut(3e3, function() {
					(0, s.
				default)(".totelPage").show()
				})
			},
			stockInfo: function(t) {
				if (t) return this.closeKeyWizard(), -1 != y.indexOf(t.market + "_" + t.code) ? void this.tips("指数不可添加") : this.repeatStock(t) ? void this.tips("该股票已添加") : void this.getStockRealPrice(t)
			},
			closeWizard: function() {
				this.keyboard && (this.keyboard.close(), this.keyboard = null), window.removeEventListener("click", this.closeWizard)
			},
			closeKeyWizard: function(t) {
				this.closeWizard()
			},
			keyWizardShow: function(t) {
				if (t && t.stopPropagation(), t && t.preventDefault(), null == this.keyboard) {
					if (this.editStockList.length >= 20) return void this.tips("已选20只股票！");
					var e = (0, s.
				default)(this.refs.stockname.getDOMNode());
					window.addEventListener("click", this.closeWizard), this.keyboard = m.
				default.show({
						position: {
							top: e.offset().top + 25,
							left: e.offset().left + 50
						},
						getNum: this.stockInfo,
						price: 10,
						quantity: 100,
						type: "STOCK",
						direction: "DOWN",
						closeKeyWizard: this.closeKeyWizard,
						mirrorInput: this.mirrorInput,
						filtertype: [6]
					})
				}
			},
			resetEditStock: function(t) {
				t && t.stopPropagation, t.target.parentNode.childNodes[1].childNodes[0].value = "", t.target.parentNode.childNodes[4].childNodes[0].value = "", t.target.parentNode.childNodes[5].childNodes[0].value = "", this.resetNow()
			},
			clickDelete: function(t) {
				t && t.stopPropagation;
				var e = t.target.parentNode.childNodes[0].innerHTML - 1;
				this.editStockList.splice(e, 1), this.saveEditingList()
			},
			createHead: function() {
				return d.
			default.createElement("li", {
					className: "title"
				}, d.
			default.createElement("span", {
					className: "index"
				}, "序号"), d.
			default.createElement("span", {
					className: "stockname"
				}, "股票名称"), d.
			default.createElement("span", {
					className: "stockcode"
				}, "代码"), d.
			default.createElement("span", {
					className: "nowprice"
				}, "最新价"), d.
			default.createElement("span", {
					className: "targetprice"
				}, "目标价"), d.
			default.createElement("span", {
					className: "reason"
				}, "推荐理由"), d.
			default.createElement("span", {
					className: "deleteAlt"
				}, "删除"))
			},
			inputTargetPrice: function(t) {
				t.stopPropagation();
				var e = (0, s.
			default)(t.target).val().trim(),
					i = e.replace(/[^0-9.]/g, "").replace(/[.][0-9]*[.]/, ".");
				"." == i.substring(0, 1) && (i = "0" + i), (0, s.
			default)(t.target).val(i);
				var n = t.target.parentNode.parentNode.childNodes[0].innerHTML - 1;
				this.editStockList[n].targetprice = (i - 0).toFixed(3)
			},
			inputReason: function(t) {
				var e = t.target.parentNode.parentNode.childNodes[0].innerHTML - 1,
					i = t.target.value.trim();
				this.editStockList[e].secudesc = i.slice(0, 100)
			},
			mirrorInput: function(t) {
				(0, s.
			default)(".mirrorInput").val(t)
			},
			changeStockCode: function(t) {
				this.keywizard || this.keyWizardShow(), this.keyboard && this.keyboard.updateNum(t.target.value)
			},
			creatList: function() {
				var t = this,
					e = [];
				return this.editStockList.forEach(function(i, n) {
					var o = d.
				default.createElement("li", {
						className: "editStockListContent",
						key: "editStockListContent" + i.tradingcode + i.exchangecode
					}, d.
				default.createElement("span", {
						className: "index"
					}, n + 1), d.
				default.createElement("span", {
						className: "stockname"
					}, i.secuabbr), d.
				default.createElement("span", {
						className: "stockcode"
					}, i.tradingcode, d.
				default.createElement("i", {
						className: "ggt" == i.exchangecode || "szgt" == i.exchangecode ? "hk" : "hide"
					})), d.
				default.createElement("span", {
						className: "nowprice"
					}, i.tradingprice), d.
				default.createElement("span", {
						className: "targetprice",
						onClick: t.stopBobble
					}, d.
				default.createElement("input", {
						type: "text",
						placeholder: "必填",
						onKeyUp: t.inputTargetPrice,
						defaultValue: i.targetprice
					})), d.
				default.createElement("span", {
						className: "reason",
						onClick: t.stopBobble
					}, d.
				default.createElement("input", {
						type: "text",
						onKeyUp: t.inputReason,
						defaultValue: i.secudesc
					})), d.
				default.createElement("span", {
						className: "deletewhite",
						onClick: t.clickDelete
					}));
					e.push(o)
				}), e || null
			},
			creatEditStock: function() {
				var t = this.state.newstock.secuabbr ? this.state.newstock.secuabbr : d.
			default.createElement("input", {
					type: "text",
					className: "mirrorInput",
					placeholder: "股票名称/代码",
					onKeyUp: this.changeStockCode
				});
				return d.
			default.createElement("li", {
					className: "newStock",
					ref: "editNewStock"
				}, d.
			default.createElement("span", {
					className: "index"
				}, this.editStockList.length + 1), d.
			default.createElement("span", {
					className: "stockname",
					onClick: this.keyWizardShow,
					ref: "stockname"
				}, t), d.
			default.createElement("span", {
					className: "stockcode"
				}, this.state.newstock.tradingcode), d.
			default.createElement("span", {
					className: "nowprice"
				}, this.state.newstock.tradingprice), d.
			default.createElement("span", {
					className: "targetprice"
				}), d.
			default.createElement("span", {
					className: "reason"
				}), d.
			default.createElement("span", {
					className: "resetEditStock"
				}))
			},
			createEditPage: function() {
				var t = [];
				return t.push(d.
			default.createElement("span", {
					className: "explain"
				}, "注:港股与债券基金不参与净值计算。")), t.push(this.createHead()), t.push(this.creatList()), t.push(this.creatEditStock()), d.
			default.createElement("div", {
					key: "StepOne",
					className: "stepOnePage"
				}, d.
			default.createElement("div", {
					className: "pagecontent"
				}, d.
			default.createElement(x, {
					stockList: t
				}), d.
			default.createElement("div", {
					className: "bottom"
				}, d.
			default.createElement("span", {
					className: "textprompt"
				}, d.
			default.createElement("span", {
					className: "prompt red hide"
				}), d.
			default.createElement("span", {
					className: "totelPage"
				}, d.
			default.createElement("span", {
					className: "red"
				}, this.editStockList.length), "/20只股票")), d.
			default.createElement("span", {
					className: "importMyStockbtn",
					onClick: this.importMyStockPage
				}, "导入自选股"))), d.
			default.createElement("div", {
					className: "footer"
				}, d.
			default.createElement("button", {
					className: "steps",
					onClick: this.goToStepTwo
				}, "下一步"), d.
			default.createElement("button", {
					className: "cancle",
					onClick: this.props.cancle
				}, "取消")))
			},
			createContent: function() {
				switch (this.state.type) {
				case "StepOne":
					return this.createEditPage();
				case "MyStocks":
					return d.
				default.createElement("div", {
						key: "newImportMyStockPage",
						className: "newImportMyStockPage"
					}, d.
				default.createElement(C, {
						alreadyChoosed: this.state.editingList,
						goBack: this.goBack,
						tips: this.tips,
						count: this.editStockList.length
					}))
				}
			},
			stopBobble: function(t) {
				t.stopPropagation(), t.preventDefault()
			},
			saveEditingList: function() {
				this.setState({
					editingList: this.editStockList
				})
			},
			getEditingList: function() {
				return this.state.editingList
			},
			goToStepTwo: function(t) {
				if (0 == this.editStockList.length) return void this.tips("请添加股票");
				for (var e = 0; e < this.editStockList.length; e++) if (!this.editStockList[e].targetprice || this.editStockList[e].targetprice < 1e-6) return void this.tips("请填写" + this.editStockList[e].secuabbr + "目标价");
				this.addEditStockList(), this.saveEditingList(), this.props.nextStep(this.editStockList), this.resetNow()
			},
			importMyStockPage: function() {
				this.closeKeyWizard(), this.addEditStockList(), this.saveEditingList(), this.setState({
					type: "MyStocks"
				})
			},
			goBack: function(t, e) {
				var i = this;
				this.editStockList = this.getEditingList();
				var n = [];
				this.editStockList && this.editStockList.forEach(function(t, e) {
					n.push(t.exchangecode + "_" + t.tradingcode)
				});
				var o = this;
				t.forEach(function(t, e) {
					-1 == n.indexOf(t.exchangecode + "_" + t.tradingcode) && o.editStockList.push(t)
				}), e && e.length && !
				function() {
					var t = [];
					i.editStockList.forEach(function(i, n) {
						-1 == e.indexOf(i.exchangecode + "_" + i.tradingcode) && t.push(i)
					}), i.editStockList = t
				}(), this.setState({
					type: "StepOne"
				})
			},
			componentWillMount: function() {
				this.editStockList = this.getEditingList()
			},
			render: function() {
				var t = this.createContent();
				return d.
			default.createElement("div", {
					key: "StockInfoChangable"
				}, t)
			}
		}),
		M = d.
	default.createClass({
			displayName: "NewCombination",
			getDefaultProps: function() {
				return {
					detail: [],
					type: "NEW"
				}
			},
			getInitialState: function() {
				return {
					step: "stepOne",
					stocksCount: 0,
					editingList: []
				}
			},
			nextStep: function(t) {
				this.setState({
					editingList: t,
					step: "stepTwo"
				})
			},
			goBack: function() {
				this.setState({
					step: "stepOne",
					stocksCount: this.state.editingList.length
				})
			},
			disabledButton: function(t) {
				(0, s.
			default)(t).attr("disabled", "disabled").addClass("disabled")
			},
			cancleDisabledButton: function() {
				(0, s.
			default)(".done").attr("disabled") && this.inputCombinationName.length > 0 && this.inputCombinationName.length <= 8 && this.inputCombinationInvestdesc.length > 0 && this.inputCombinationInvestdesc.length <= 100 && (0, s.
			default)(".done").removeAttr("disabled").removeClass("disabled")
			},
			done: function() {
				var t = this.refs.combinationName.getDOMNode().value,
					e = this.refs.combinationDescript.getDOMNode().value;
				if (this.disabledButton(".done"), t.length <= 0) return void(0, s.
			default)(".nameTooLong").html("组合名称不能为空").show();
				if (e.length <= 0) return void(0, s.
			default)(".investdescTooLong").html("描述不能为空").show();
				if (e.length > 100) return void(0, s.
			default)(".investdescTooLong").html("描述不能超过100个字符").show();
				if (t.length > 8) return void(0, s.
			default)(".nameTooLong").html("组合名称不能超过8个字符").show();
				if (0 == this.state.editingList.length) return void(0, s.
			default)(".nameTooLong").html("请返回上一步并添加股票").show();
				var i = {
					name: t,
					investdesc: e
				},
					n = this;
				"NEW" == this.props.type ? this.props.Store.addCombination(i, this.state.editingList).then(function(t) {
					n.cancle()
				}, function(t) {
					(0, s.
				default)(".nameTooLong").html("本组合名称已存在，请更改名称！").show()
				}) : (this.props.type = "EDIT") && this.props.Store.editCombination(this.props.idx, i, this.state.editingList).then(function() {
					n.cancle()
				}, function(t) {
					(0, s.
				default)(".nameTooLong").html("本组合名称已存在，请更改名称！").show()
				})
			},
			cancle: function() {
				this.props.closeNewCombination()
			},
			goToImportMyStockPage: function() {
				this.setState({
					step: "importMyStock"
				})
			},
			changeCount: function(t) {
				this.setState({
					stocksCount: t
				})
			},
			changeDetail: function(t) {
				this.setState({
					editingList: t
				}), this.changeCount(this.state.editingList.length)
			},
			createStepOne: function() {
				return d.
			default.createElement(w, {
					key: "StockInfoChangable",
					editingList: this.state.editingList,
					nextStep: this.nextStep,
					cancle: this.cancle,
					changeDetail: this.changeDetail,
					Store: this.props.Store
				})
			},
			checkInput: function(t) {
				var e = t.target.value.trim();
				return this.inputCombinationName = e, e.length > 8 ? (this.disabledButton(".done"), (0, s.
			default)(".nameTooLong").html("组合名称不能超过8个字符").show(), !0) : ((0, s.
			default)(".nameTooLong").hide(), this.cancleDisabledButton(), !1)
			},
			checkInvestdesc: function(t) {
				var e = t.target.value.trim();
				return this.inputCombinationInvestdesc = e, e.length > 100 ? (this.disabledButton(".done"), (0, s.
			default)(".investdescTooLong").html("描述不能超过100个字符").show(), !0) : (this.cancleDisabledButton(), (0, s.
			default)(".investdescTooLong").hide(), !1)
			},
			createStepTwo: function() {
				return d.
			default.createElement("div", {
					key: "StepTwo",
					className: "stepTwoPage"
				}, d.
			default.createElement("div", {
					className: "pagecontent"
				}, d.
			default.createElement("div", {
					className: "newName"
				}, d.
			default.createElement("h2", null, "组合名称"), d.
			default.createElement("input", {
					placeholder: "给你的组合起一个响亮的名字吧！(不超过8个字符)",
					ref: "combinationName",
					defaultValue: "EDIT" == this.props.type ? this.props.combinationInfo.name : null,
					onKeyUp: this.checkInput
				}), d.
			default.createElement("span", {
					className: "nameNotice"
				}, d.
			default.createElement("span", {
					className: "nameTooLong hide red"
				}))), d.
			default.createElement("div", {
					className: "newDescript"
				}, d.
			default.createElement("h2", null, "组合描述"), d.
			default.createElement("textarea", {
					ref: "combinationDescript",
					placeholder: "描述同样重要(不超过100个字符)",
					onKeyUp: this.checkInvestdesc,
					defaultValue: "EDIT" == this.props.type ? this.props.combinationInfo.investdesc : null
				}), d.
			default.createElement("span", {
					className: "investdescNotice"
				}, d.
			default.createElement("span", {
					className: "investdescTooLong hide red"
				})))), d.
			default.createElement("div", {
					className: "footer"
				}, d.
			default.createElement("button", {
					className: "done",
					onClick: this.done
				}, "完成"), d.
			default.createElement("button", {
					className: "goback",
					onClick: this.goBack
				}, "上一步")))
			},
			createContent: function() {
				switch (this.state.step) {
				case "stepOne":
					return this.createStepOne();
				case "stepTwo":
					return this.createStepTwo()
				}
			},
			componentWillMount: function() {
				var t = [];
				this.props.detail.forEach(function(e, i) {
					t.push(l.
				default.extend({}, e))
				}), this.setState({
					editingList: t
				}), "EDIT" == this.props.type && (this.inputCombinationInvestdesc = this.props.combinationInfo && this.props.combinationInfo.name, this.inputCombinationName = this.props.combinationInfo && this.props.combinationInfo.investdesc)
			},
			render: function() {
				var t = this.createContent();
				return d.
			default.createElement("div", {
					id: "NewCombination"
				}, d.
			default.createElement("div", {
					className: "NewCombination_content"
				}, t))
			}
		});
	e.
default = M, t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/components/KeyWizard")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		if (t && t.__esModule) return t;
		var e = {};
		if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e.
	default = t, e
	}
	function o(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(13),
		s = o(a),
		r = i(2),
		l = o(r),
		c = i(26),
		d = i(6),
		u = i(3),
		p = o(u),
		h = i(27),
		f = i(38),
		m = n(f),
		g = s.
	default.createClass({
			displayName: "RecentStockPanel",
			getMenu: function(t) {
				var e = t.market,
					i = t.code,
					n = (0, d.isTradable)(e, i);
				return {
					items: p.
				default.recentItemMenu(n)
				}
			},
			componentDidMount: function() {
				this.props.setToolBtns([m.configBtn])
			},
			render: function() {
				var t = l.
			default.getImpl("StockQuote:StockList");
				return s.
			default.createElement(t, {
					gridType: "RecentStockList",
					showAside: !1,
					dataProvider: h.RecentListDataProvider,
					filters: p.
				default.myStockFilters,
					columns:
					(0, c.heads)(!1),
					getMenu: this.getMenu
				})
			}
		});
	e.
default = g, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		if (t && t.__esModule) return t;
		var e = {};
		if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e.
	default = t, e
	}
	function o(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	function a(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	function s(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, i, n) {
				return i && t(e.prototype, i), n && t(e, n), e
			}
		}(),
		l = function(t, e, i) {
			for (var n = !0; n;) {
				var o = t,
					a = e,
					s = i;
				n = !1, null === o && (o = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(o, a);
				if (void 0 !== r) {
					if ("value" in r) return r.value;
					var l = r.get;
					if (void 0 === l) return;
					return l.call(s)
				}
				var c = Object.getPrototypeOf(o);
				if (null === c) return;
				t = c, e = a, i = s, n = !0, r = c = void 0
			}
		},
		c = i(13),
		d = o(c),
		u = i(38),
		p = n(u),
		h = i(40),
		f = o(h),
		m = i(3),
		g = o(m),
		b = i(54),
		k = o(b),
		v = i(55),
		y = k.
	default.fromJS([{
			type: "Integrate",
			name: g.
		default.Lang("Integrate"),
			cls:
			"integrate"
		}, {
			type: "Individual",
			name: g.
		default.Lang("Individual"),
			cls:
			"individual"
		}, {
			type: "Custom",
			name: g.
		default.Lang("Custom"),
			cls:
			"custom"
		}]),
		C = function(t) {
			function e(t) {
				a(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.state = {
					data: k.
				default.fromJS({
						name: ""
					})
				}, this.shouldComponentUpdate = v.shouldComponentUpdate.bind(this)
			}
			return s(e, t), r(e, [{
				key: "componentDidMount",
				value: function() {
					this.props.setToolBtns([p.configBtn])
				}
			}, {
				key: "closeThisTab",
				value: function(t) {
					this.props.closeAndJumpToTab(this.props.id, t)
				}
			}, {
				key: "_handlePanelItemClick",
				value: function(t) {
					var e = t.currentTarget.getAttribute("data-type"),
						i = "";
					i = "Custom" === e ? f.
				default.createTMPPanel(g.
				default.Lang(e), e):
					f.
				default.createPanel(g.
				default.Lang(e), e, g.
				default.defaultCustomPanel[e].widgets), i && this.closeThisTab(i)
				}
			}, {
				key: "_getAddPanelContent",
				value: function() {
					var t = this;
					return y.map(function(e, i) {
						return d.
					default.createElement("div", {
							key: i,
							className: "addpanel-item " + e.get("cls")
						}, d.
					default.createElement("div", {
							className: "img",
							"data-type": e.get("type"),
							onClick: t._handlePanelItemClick.bind(t)
						}), d.
					default.createElement("p", null, e.get("name")))
					}).toJS()
				}
			}, {
				key: "render",
				value: function() {
					return d.
				default.createElement("div", {
						className: "AddPanel"
					}, d.
				default.createElement("h2", {
						className: "addpanel-title"
					}, g.
				default.Lang("PanelSelect")), d.
				default.createElement("div", {
						className: "addpanel-content"
					}, d.
				default.createElement("div", {
						className: "addpanel-content-inner"
					}, this._getAddPanelContent())))
				}
			}]), e
		}(c.Component);
	e.
default = C, C.propTypes = {
		id: c.PropTypes.string
	}, t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/lib/immutable")
}, function(t, e) {
	t.exports = require("hippo/purerender")
}, function(t, e, i) {
	"use strict";

	function n(t) {
		if (t && t.__esModule) return t;
		var e = {};
		if (null != t) for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e.
	default = t, e
	}
	function o(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	function a(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	function s(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = Object.assign ||
	function(t) {
		for (var e = 1; e < arguments.length; e++) {
			var i = arguments[e];
			for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
		}
		return t
	}, l = function() {
		function t(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}
		return function(e, i, n) {
			return i && t(e.prototype, i), n && t(e, n), e
		}
	}(), c = function(t, e, i) {
		for (var n = !0; n;) {
			var o = t,
				a = e,
				s = i;
			n = !1, null === o && (o = Function.prototype);
			var r = Object.getOwnPropertyDescriptor(o, a);
			if (void 0 !== r) {
				if ("value" in r) return r.value;
				var l = r.get;
				if (void 0 === l) return;
				return l.call(s)
			}
			var c = Object.getPrototypeOf(o);
			if (null === c) return;
			t = c, e = a, i = s, n = !0, r = c = void 0
		}
	}, d = i(4), u = o(d), p = i(13), h = o(p), f = i(2), m = o(f), g = i(15), b = i(12), k = o(b), v = i(6), y = i(3), C = o(y), S = i(40), x = o(S), w = i(38), M = n(w), E = i(57), _ = o(E), P = i(54), L = o(P), T = i(55), N = i(59), I = o(N), D = i(19), O = o(D), A = i(21), z = o(A), W = i(60), R = o(W), B = i(61), j = {
		left: ["top", "bottom"],
		right: ["top", "bottom"],
		top: ["left", "right"],
		bottom: ["left", "right"]
	}, G = {
		left: "right",
		right: "left",
		top: "bottom",
		bottom: "top"
	}, U = {
		left: "left",
		top: "top",
		right: "left",
		bottom: "top"
	}, F = function(t) {
		function e(t) {
			a(this, e), c(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t);
			var i = this.props.config,
				n = i.market,
				o = i.code,
				s = i.widgets;
			this.state = {
				data: L.
			default.fromJS({
					editMode: t.edit || !1,
					labelPopupErr: !1,
					editLabel: "",
					widgets: s,
					market: n,
					code: o,
					useProps: !1,
					menu: [],
					isLoaded: !1
				})
			}, this.zindexBase = t.edit ? 1 : void 0, this.shouldComponentUpdate = T.shouldComponentUpdate.bind(this), this._toggleEdit = this._toggleEdit.bind(this), this._saveEdit = this._saveEdit.bind(this), this._abortEdit = this._abortEdit.bind(this), this._addWidgetPanel = this._addWidgetPanel.bind(this), this._deleteWidgetPanel = this._deleteWidgetPanel.bind(this), this._handleLabelInputChange = this._handleLabelInputChange.bind(this), this._update = this._update.bind(this), this._resize = this._resize.bind(this), this._genZindex = this._genZindex.bind(this), this._calcMagnetic = this._calcMagnetic.bind(this), this._updateMagnetic = this._updateMagnetic.bind(this), this.processBubbles = this.processBubbles.bind(this), this.closeNews = this.closeNews.bind(this), this._updateWidgetActive = this._updateWidgetActive.bind(this), this._updateMenu = this._updateMenu.bind(this), this._handleKeyUp = this._handleKeyUp.bind(this), this._setWidgetGroup = this._setWidgetGroup.bind(this), this._convertOldPanelLayout = this._convertOldPanelLayout.bind(this), this._changeLabel = this._changeLabel.bind(this), this._setWidgetCode = this._setWidgetCode.bind(this), this._delete = this._delete.bind(this)
		}
		return s(e, t), l(e, [{
			key: "componentDidMount",
			value: function() {
				var t = this,
					e = this._percent2px();
				e ? this.setState({
					data: this.state.data.merge({
						isLoaded: !0,
						widgets: e
					})
				}) : this.setState({
					data: this.state.data.merge({
						isLoaded: !0
					})
				}), this.isLoaded = !0, "function" == typeof this.props.setToolBtns && (this.props.edit ? this.props.setToolBtns([h.
			default.createElement("button", {
					onClick: this._saveEdit,
					key: "save"
				}, "保存"), h.
			default.createElement("button", {
					onClick: this._abortEdit,
					key: "abort"
				}, "取消")]) : this.props.setToolBtns([h.
			default.createElement("i", {
					className: "ico ico-edit",
					key: "edit",
					onClick: this._toggleEdit
				}), M.configBtn])), this.state.data.get("editMode") ? this._shortcutDEL = z.
			default.reg("del", this._handleKeyUp):
				z.
			default.cancel("del", this._shortcutDEL), x.
			default.on("change", this._update), this._resize(), this.dispatchId = k.
			default.register(function(e) {
					var i = e.action;
					switch (i.type) {
					case "WINDOW.RESIZE":
						t._resize();
						break;
					case C.
					default.ActionTypes.ADD_WIDGET_PANEL:
						t._addWidgetPanel(i.unionId);
						break;
					case C.
					default.ActionTypes.EDIT_WIDGET_PANEL_POS:
						t._updateMagnetic(i.id, i.data), t._updateWidgetPanelPos(i.id, i.data);
						break;
					case C.
					default.ActionTypes.DELETE_WIDGET_PANEL:
						t._deleteWidgetPanel(i.id);
						break;
					case C.
					default.ActionTypes.SWITCH_WIDGET_PANEL:
						t._switchWidgetPanel(i.id, i.unionId);
						break;
					case C.
					default.ActionTypes.START_EDIT:
						t._updateWidgetActive(i.id);
						break;
					case C.
					default.ActionTypes.SET_WIDGET_GROUP:
						t._setWidgetGroup(i.id, i.group);
						break;
					case C.
					default.ActionTypes.SET_PANEL_CODE:
						t._setWidgetCode(i.id, i.code, i.market);
						break;
					case C.
					default.ActionTypes.CUSTOM_PANEL_STOCK_FOCUS:
						t._setWidgetCodeByGroup(i.data.group, i.data.code, i.data.market)
					}
				}), v.Event.watch(h.
			default.findDOMNode(this), this.processBubbles)
			}
		}, {
			key: "componentWillUpdate",
			value: function() {
				var t = this.props.slots,
					e = this.isLoaded;
				t && e && !this.fromOldPanel && this._convertOldPanelLayout(t)
			}
		}, {
			key: "_handleKeyUp",
			value: function() {
				var t = this.state.data;
				t.get("editMode") && t.get("activeWidgetId") && this._deleteWidgetPanel(t.get("activeWidgetId"))
			}
		}, {
			key: "_setWidgetGroup",
			value: function(t, e) {
				this.setState({
					data: this.state.data.updateIn(["widgets", t], function(t) {
						return "0" == "" + e ? t.delete("group") : t.merge({
							group: "" + e
						})
					})
				})
			}
		}, {
			key: "_setWidgetCodeByGroup",
			value: function(t, e, i) {
				var n = this.state.data;
				this.setState({
					data: n.merge({
						widgets: n.get("widgets").map(function(n) {
							return void 0 === t || "" + t === n.get("group") ? n.merge({
								code: e,
								market: i
							}) : n
						})
					})
				})
			}
		}, {
			key: "_setWidgetCode",
			value: function(t, e, i) {
				var n = this,
					o = this.state.data,
					a = o.getIn(["widgets", t, "group"]),
					s = o.get("widgets").map(function(t) {
						return a === t.get("group") ? t.merge({
							code: e,
							market: i
						}) : t
					});
				this.setState({
					data: o.merge({
						widgets: s
					})
				}, function() {
					x.
				default.saveConfig(n.props.id, "widgets", s.toJS())
				})
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				x.
			default.removeListener("change", this._update), k.
			default.unregister(this.dispatchId), v.Event.unwatch(h.
			default.findDOMNode(this), this.processBubbles)
			}
		}, {
			key: "componentDidUpdate",
			value: function(t, e) {
				if (e.data.get("editMode") !== this.state.data.get("editMode")) {
					var i;
					this.state.data.get("editMode") ? (this._shortcutDEL = z.
				default.reg("del", this._handleKeyUp), i = [h.
				default.createElement("button", {
						onClick: this._saveEdit,
						key: "save"
					}, "保存"), h.
				default.createElement("button", {
						onClick: this._abortEdit,
						key: "abort"
					}, "取消"), h.
				default.createElement("button", {
						onClick: this._changeLabel,
						key: "editlabel"
					}, "修改名称"), h.
				default.createElement("button", {
						onClick: this._delete,
						key: "delete"
					}, "删除面板")]) : (z.
				default.cancel("del", this._shortcutDEL), i = [h.
				default.createElement("i", {
						className: "ico ico-edit",
						key: "edit",
						onClick: this._toggleEdit
					}), M.configBtn]), "function" == typeof this.props.setToolBtns && this.props.setToolBtns(i)
				}
			}
		}, {
			key: "_convertOldPanelLayout",
			value: function(t) {
				var e = {},
					i = void 0,
					n = void 0,
					o = void 0;
				try {
					i = new R.
				default (this.props.id, this.props.type, this.wrapWidth, this.wrapHeight, this.props.widgetMargin), n = i.getSizeArr(), Object.keys(t).forEach(function(i) {
						o = O.
					default.v1(), e[o] = u.
					default.extend({
							unionId: t[i],
							zindex: 1
						}, n[i])
					}), i.deleteUIPersist()
				} catch (t) {
					e = {};
					var a = (0, B.getLogger)();
					a.log("[Custom Panel] convert old panel data fail."), a.error(t)
				}
				x.
			default.saveConfig(this.props.id, "widgets", e), x.
			default.saveConfig(this.props.id, "type", "Custom"), x.
			default.deleteConfig(this.props.id, "slots"), this.fromOldPanel = !0, this.setState({
					data: this.state.data.merge({
						widgets: e
					})
				})
			}
		}, {
			key: "_resize",
			value: function() {
				var t = h.
			default.findDOMNode(this);
				this.wrapWidth = t.offsetWidth, this.wrapHeight = t.offsetHeight, this._initOrUpdateWrapMagnetic()
			}
		}, {
			key: "processBubbles",
			value: function(t) {
				var e = t.detail.type;
				this.props.edit || ("FOCUS_STOCK" == e ? k.
			default.handlePluginAction({
					type: C.
				default.ActionTypes.CUSTOM_PANEL_STOCK_FOCUS,
					data:
					t.detail
				}):
				"OPEN_NEWS" == e && this.openNews(t))
			}
		}, {
			key: "setMasterMarketCode",
			value: function(t) {
				t.stopPropagation();
				var e = t.detail,
					i = e.market,
					n = e.code;
				x.
			default.setMasterMarketCode(this.props.config.id, i, n)
			}
		}, {
			key: "openNews",
			value: function(t) {
				var e = this;
				t.stopPropagation();
				var i = t.detail,
					n = i.catId,
					o = i.id,
					a = i.proxy;
				n && o ? this.setState({
					newsDetail: {
						catId: n,
						id: o,
						proxy: a
					}
				}, function() {
					e.refs.newsDetail.setState({
						id: o,
						catId: n
					})
				}) : this.closeNews()
			}
		}, {
			key: "closeNews",
			value: function() {
				this.setState({
					newsDetail: null
				})
			}
		}, {
			key: "_initLayoutInfo",
			value: function() {
				var t = 0,
					e = 0,
					i = 0,
					n = [],
					o = this.state.data.get("widgets"),
					a = void 0;
				o ? (o = o.toJS(), Object.keys(o).forEach(function(a) {
					var s = o[a],
						r = s.left + s.width,
						l = s.top + s.height;
					n.push([r, l]), r > e && (e = r), l > t && (t = l, i = r), l > t && (t = l)
				}), a = n.length >= 2 ? this._genHoldPositions(i, e, n) : [], a = [
					[e, 0],
					[0, t]
				].concat(a)) : a = [
					[0, 0]
				], this.holdPositions = a
			}
		}, {
			key: "_initEditInfo",
			value: function() {
				var t = this,
					e = this.state.data.get("widgets"),
					i = 1,
					n = void 0,
					o = this._initOrUpdateWrapMagnetic("init");
				return e && e.forEach(function(e, a) {
					var s = e.get("zindex") || 1;
					s > i && (i = s, n = a), Object.keys(j).forEach(function(i) {
						o[i] = t._addMagnetic(o[i], a, i, {
							left: e.get("left"),
							top: e.get("top"),
							right: e.get("left") + e.get("width"),
							bottom: e.get("top") + e.get("height")
						})
					})
				}), this.zindexBase = i, this.magneticRegion = o, n
			}
		}, {
			key: "_initOrUpdateWrapMagnetic",
			value: function(t) {
				var e = this.magneticRegion,
					i = this.props.widgetMargin,
					n = this.props.magneticForce,
					o = this.wrapWidth - i,
					a = this.wrapHeight - i;
				return e && "init" !== t || (e = {
					left: [],
					right: [],
					top: [],
					bottom: []
				}), Object.keys(e).forEach(function(t) {
					var s, r = e[t].filter(function(t) {
						return "wrap" !== t.from
					});
					switch (t) {
					case "left":
						s = {
							from: "wrap",
							target: i,
							region: {
								left: i - n,
								right: i + n,
								top: i - n,
								bottom: a + n
							}
						};
						break;
					case "right":
						s = {
							from: "wrap",
							target: o,
							region: {
								left: o - n,
								right: o + n,
								top: i - n,
								bottom: a + n
							}
						};
						break;
					case "top":
						s = {
							from: "wrap",
							target: i,
							region: {
								left: i - n,
								right: o + n,
								top: i - n,
								bottom: i + n
							}
						};
						break;
					case "bottom":
						s = {
							from: "wrap",
							target: a,
							region: {
								left: i - n,
								right: o + n,
								top: a - n,
								bottom: a + n
							}
						}
					}
					r.push(s), e[t] = r
				}), this.magneticRegion = e, e
			}
		}, {
			key: "_calcMagnetic",
			value: function(t, e, i) {
				var n = this,
					o = {},
					a = {},
					s = {};
				return e.forEach(function(e) {
					var r = n.magneticRegion[e],
						l = U[e];
					r.forEach(function(n) {
						var r = n.region,
							c = j[e][0],
							d = j[e][1];
						n.from !== t && i[e] >= r[l] && i[e] <= r[G[l]] && !(i[d] < r[c] || i[c] > r[d]) && (a[e] = Math.abs(i[e] - n.target), (void 0 === s[e] || a[e] < s[e]) && (s[e] = a[e], o[e] = {
							force: -a[e],
							value: n.target
						}))
					})
				}), o
			}
		}, {
			key: "_addMagnetic",
			value: function(t, e, i, n) {
				var o = j[i][0],
					a = j[i][1],
					s = G[i],
					r = U[i],
					l = G[r],
					c = this.props.widgetMargin,
					d = this.props.magneticForce,
					p = {},
					h = void 0;
				return p[r] = n[i] - d, p[l] = n[i] + d, p[o] = n[o] - d, p[a] = n[a] + d, t.push({
					from: e,
					target: n[i],
					region: u.
				default.clone(p)
				}), h = "left" === s || "top" === s ? n[s] - c : n[s] + c, p[r] = h - d, p[l] = h + d, t.push({
					from: e,
					target: h,
					region: u.
				default.clone(p)
				}), t
			}
		}, {
			key: "_updateMagnetic",
			value: function(t, e) {
				var i = this,
					n = this.magneticRegion;
				e.right = e.left + e.width, e.bottom = e.top + e.height, Object.keys(n).forEach(function(o) {
					n[o] = i._addMagnetic(n[o].filter(function(e) {
						return e.from !== t
					}), t, o, e)
				})
			}
		}, {
			key: "_delMagnetic",
			value: function(t) {
				var e = this.magneticRegion;
				Object.keys(e).forEach(function(i) {
					e[i] = e[i].filter(function(e) {
						return e.from !== t
					})
				})
			}
		}, {
			key: "_genHoldPositions",
			value: function(t, e, i) {
				var n = arguments.length <= 3 || void 0 === arguments[3] ? [] : arguments[3],
					o = 0,
					a = void 0;
				return i = i.filter(function(e) {
					return e[0] > t
				}), 0 === i.length ? n : (i.forEach(function(t) {
					t[1] > o && (o = t[1], a = t[0])
				}), n.push([t, o]), a === e ? n : this._genHoldPositions(a, e, i, n))
			}
		}, {
			key: "_genZindex",
			value: function() {
				return ++this.zindexBase
			}
		}, {
			key: "_updateWidgetPanelPos",
			value: function(t, e) {
				this.state.data.get("widgets").has(t) && this.setState({
					data: this.state.data.updateIn(["widgets", t], function(t) {
						return t.merge({
							left: e.left,
							top: e.top,
							width: e.width,
							height: e.height,
							zindex: e.zindex
						})
					})
				})
			}
		}, {
			key: "_updateWidgetActive",
			value: function(t) {
				this.setState({
					data: this.state.data.merge({
						activeWidgetId: t
					})
				})
			}
		}, {
			key: "_addWidgetPanel",
			value: function(t) {
				if (this.state.data.get("widgets").count() >= C.
			default.MAX_PANEL_WIDGETS) return void g.Popup.show({
					className: "custom-panel-popup",
					content: h.
				default.createElement("p", {
						className: "tips"
					}, "插件数量不能超过", C.
				default.MAX_PANEL_WIDGETS, "个"),
					title:
					"提示",
					modal: !0,
					buttons: [C.
				default.Lang("OK"), C.
				default.Lang("Abort")],
					onBtnClick: function() {
						return !0
					}
				});
				var e = O.
			default.v1(),
					i = this.state.data.get("widgets") || L.
				default.fromJS({}),
					n = void 0,
					o = m.
				default.getMeta(t),
					a = o.defaultSize || this.props.defaultSize,
					s = Math.max(Math.min(a[0], this.wrapWidth - 2 * this.props.widgetMargin), this.props.widgetMinSize[0]),
					r = Math.max(Math.min(a[1], this.wrapHeight - 2 * this.props.widgetMargin), this.props.widgetMinSize[1]);
				return n = {
					unionId: t,
					width: s,
					height: r
				}, this._initLayoutInfo(), n = this._addLayout(n, this.wrapWidth, this.wrapHeight, this.props.widgetMargin, this.holdPositions), this.setState({
					data: this.state.data.merge({
						widgets: i.set(e, L.
					default.fromJS(n)),
						activeWidgetId: e
					})
				}), this.totalWidgets++, n
			}
		}, {
			key: "_switchWidgetPanel",
			value: function(t, e) {
				var i = this.state.data;
				i.get("widgets").has(t) && this.setState({
					data: i.updateIn(["widgets", t, "unionId"], function() {
						return e
					})
				})
			}
		}, {
			key: "_deleteWidgetPanel",
			value: function(t) {
				this._delMagnetic(t), this.setState({
					data: this.state.data.merge({
						widgets: this.state.data.get("widgets").remove(t)
					})
				}, function() {})
			}
		}, {
			key: "_addLayout",
			value: function(t, e, i, n, o) {
				var a = void 0,
					s = void 0,
					r = void 0,
					l = void 0;
				if (o) {
					for (var c = 0, d = o.length; c < d; c++) if (l = o[c][0] + n, r = o[c][1] + n, l + t.width + n <= e && r + t.height + n <= i) {
						a = r, s = l;
						break
					}
					void 0 === a && (a = (i - t.height) / 2, s = (e - t.width) / 2)
				} else a = n, s = n;
				return u.
			default.extend(t, {
					left: s,
					top: a,
					zindex: this._genZindex()
				})
			}
		}, {
			key: "_toggleEdit",
			value: function(t) {
				var e = this.state.data.update("editMode", function(t) {
					return !t
				});
				if (this.state.data.get("editMode") || (e = e.merge({
					activeWidgetId: this._initEditInfo(),
					useProps: !1
				})), "abort" === t) {
					var i = L.
				default.fromJS(this.props.config.widgets),
						n = this._percent2px(i) || i;
					this.setState({
						data: e.merge({
							widgets: n,
							useProps: !0
						})
					})
				} else this.setState({
					data: e
				})
			}
		}, {
			key: "_delete",
			value: function() {
				var t = this;
				g.Popup.show({
					className: "remove-panel",
					content: h.
				default.createElement("p", null, "删除后将无法找回，确定要删除该面板吗？"),
					title:
					C.
				default.Lang("DeletePanel"),
					modal:
					!0,
					buttons: [C.
				default.Lang("OK"), C.
				default.Lang("Abort")],
					onBtnClick: function(e) {
						return 0 !== e && "enter" !== e || x.
					default.removePanel(t.props.id), !0
					}
				})
			}
		}, {
			key: "_changeLabel",
			value: function() {
				var t = this;
				this.labelPopup = g.Popup.show({
					className: "edit-panel-label",
					content: h.
				default.createElement(H, {
						handleLabelInputChange: this._handleLabelInputChange,
						label: this.props.label
					}),
					title:
					C.
				default.Lang("EditLabel"),
					modal:
					!0,
					buttons: [C.
				default.Lang("OK"), C.
				default.Lang("Abort")],
					onBtnClick: function(e) {
						return 0 !== e && "enter" !== e || !t.state.data.get("labelPopupErr") && "" !== t.state.data.get("editLabel") && (x.
					default.saveConfig(t.props.id, "label", t.state.data.get("editLabel")), t.setState({
							data: t.state.data.update("editLabel", function() {
								return ""
							})
						}), !0)
					}
				})
			}
		}, {
			key: "_handleLabelInputChange",
			value: function(t, e) {
				this.setState({
					data: this.state.data.merge({
						editLabel: e || "",
						labelPopupErr: t
					})
				})
			}
		}, {
			key: "_saveEdit",
			value: function() {
				var t = this;
				if (this.props.edit) this.labelPopup = g.Popup.show({
					className: "edit-panel-label",
					content: h.
				default.createElement(H, {
						handleLabelInputChange: this._handleLabelInputChange,
						label: ""
					}),
					title:
					C.
				default.Lang("EditLabel"),
					modal:
					!0,
					buttons: [C.
				default.Lang("OK"), C.
				default.Lang("Abort")],
					onBtnClick: function(e) {
						if (0 === e || "enter" === e) {
							if (t.state.data.get("labelPopupErr") || "" === t.state.data.get("editLabel")) return !1;
							x.
						default.removeTMPPanel(t.props.id);
							var i = t.state.data.get("widgets");
							return x.
						default.createPanel(t.state.data.get("editLabel"), "Custom", i && i.toJS()), !0
						}
						return !0
					}
				});
				else {
					var e = this.state.data.get("widgets");
					x.
				default.saveConfig(this.props.id, "widgets", e && e.toJS()), "Custom" !== this.props.config.type && x.
				default.saveConfig(this.props.id, "type", "Custom"), this._toggleEdit()
				}
			}
		}, {
			key: "_abortEdit",
			value: function() {
				this.props.edit ? x.
			default.removeTMPPanel(this.props.id):
				this._toggleEdit("abort")
			}
		}, {
			key: "_update",
			value: function() {
				var t = x.
			default.getPanel(this.props.config.id);
				t && this.setState({
					data: this.state.data.merge({
						market: t.market,
						code: t.code
					})
				})
			}
		}, {
			key: "_updateMenu",
			value: function(t) {
				this.setState({
					data: this.state.data.merge({
						menu: L.
					default.fromJS(t)
					})
				})
			}
		}, {
			key: "_percent2px",
			value: function(t) {
				var e = this,
					i = this.props.config.type;
				if ("Custom" !== i && isNaN(+i)) {
					t = t || this.state.data.get("widgets");
					var n = C.
				default.defaultCustomPanel[i].maxRow,
						o = C.
					default.defaultCustomPanel[i].maxCol,
						a = document.querySelector(".custom-panel-wrap"),
						s = a.clientWidth - this.props.widgetMargin * (o + 1),
						r = a.clientHeight - this.props.widgetMargin * (n + 1),
						l = {
							curTop: 0,
							curHeight: 0
						};
					return t.map(function(t) {
						var i = t.get("width"),
							n = t.get("height"),
							o = i.toString().match(/\%/g),
							a = n.toString().match(/\%/g);
						if (!o && !a) return t;
						var c = s,
							d = r;
						t.get("growH") && (d = r - t.get("growH")), t.get("growW") && (c = s - t.get("growW")), o && (i = c * parseFloat(t.get("width").replace(/\%/g, "")) * .01), a && (n = d * parseFloat(t.get("height").replace(/\%/g, "")) * .01);
						var u = t.get("grid");
						l[u] ? (l[u].width = l[u].width + i + e.props.widgetMargin, l[u].height = Math.max(l[u].height, n)) : (l[u] = {}, l.curTop = l.curHeight + e.props.widgetMargin, l[u].width = e.props.widgetMargin, l[u].height = n), l.curHeight = l.curTop + l[u].height;
						var p = l[u].width,
							h = l.curTop;
						return t.get("offset") && (h = l.curTop + r * t.getIn(["offset", "y"]) / 100 + t.getIn(["offset", "dy"]), p = l[u].width + s * t.getIn(["offset", "x"]) / 100 + t.getIn(["offset", "dx"]), i += t.getIn(["offset", "dw"]), n += t.getIn(["offset", "dh"])), t.merge({
							top: parseInt(h),
							left: parseInt(p),
							width: parseInt(i),
							height: parseInt(n)
						})
					})
				}
			}
		}, {
			key: "_renderWidgets",
			value: function() {
				var t = this,
					e = this.state.data,
					i = [],
					n = e.get("editMode"),
					o = e.get("widgets"),
					a = void 0;
				return o && (o = o.toJS(), Object.keys(o).forEach(function(s) {
					o[s] = u.
				default.extend({
						code: e.get("code"),
						market: e.get("market")
					}, o[s]), a = !! n && t.state.data.get("activeWidgetId") === s, i.push(h.
				default.createElement(I.
				default, r({}, o[s], {
						id: s,
						key: s,
						panelId: t.props.config.id,
						config: null,
						editable: n,
						resizable: n,
						wrap: ".custom-panel-wrap",
						genZindex: t._genZindex,
						calcMagnetic: t._calcMagnetic,
						isActive: a,
						useProps: e.get("useProps"),
						updateMenu: t._updateMenu,
						menu: e.get("menu").toJS()
					})))
				})), i
			}
		}, {
			key: "render",
			value: function() {
				var t, e = this.state.data.get("editMode"),
					i = this.state.newsDetail;
				return i && (t = h.
			default.createElement(m.
			default.getImpl("StockNews:NewsDetail"), {
					ref: "newsDetail",
					id: i.id,
					catId: i.catId,
					proxy: i.proxy,
					closeHandler: this.closeNews
				})), h.
			default.createElement("div", {
					className: "custom-panel-wrap"
				}, this.isLoaded && this._renderWidgets(), t, e ? h.
			default.createElement(_.
			default, {
					wrap: ".custom-panel-wrap"
				}):
				null)
			}
		}]), e
	}(p.Component);
	e.
default = F, F.propTypes = {
		config: p.PropTypes.object,
		setToolBtns: p.PropTypes.func
	}, F.defaultProps = {
		widgetMargin: 3,
		magneticForce: 11,
		defaultSize: [300, 300],
		widgetMinSize: [120, 45]
	};
	var H = function(t) {
			function e(t) {
				a(this, e), c(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.state = {
					data: L.
				default.fromJS({
						labelPopupErr: "",
						value: this.props.label
					})
				}, this._handleLabelInputChange = this._handleLabelInputChange.bind(this)
			}
			return s(e, t), l(e, [{
				key: "_handleLabelInputChange",
				value: function(t) {
					var e, i = t.target.value.trim(),
						n = this.state.data;
					e = 0 === i.trim().length ? "请输入面板名称" : i.length > 6 ? "名称不能超过6个字" : "", this.setState({
						data: n.merge({
							labelPopupErr: e,
							value: i
						})
					}), e ? this.props.handleLabelInputChange(!0) : this.props.handleLabelInputChange(!1, i)
				}
			}, {
				key: "render",
				value: function() {
					var t = this.state.data;
					return h.
				default.createElement("div", {
						className: "panel-label-input"
					}, h.
				default.createElement("span", {
						className: "err"
					}, t.get("labelPopupErr")), h.
				default.createElement("input", {
						type: "text",
						value: t.get("value"),
						autoFocus: !0,
						onFocus: this._handleLabelInputChange,
						onChange: this._handleLabelInputChange,
						placeholder: "(不超过六个汉字)"
					}))
				}
			}]), e
		}(p.Component);
	t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	function a(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var s = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, i, n) {
				return i && t(e.prototype, i), n && t(e, n), e
			}
		}(),
		r = function(t, e, i) {
			for (var n = !0; n;) {
				var o = t,
					a = e,
					s = i;
				n = !1, null === o && (o = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(o, a);
				if (void 0 !== r) {
					if ("value" in r) return r.value;
					var l = r.get;
					if (void 0 === l) return;
					return l.call(s)
				}
				var c = Object.getPrototypeOf(o);
				if (null === c) return;
				t = c, e = a, i = s, n = !0, r = c = void 0
			}
		},
		l = i(13),
		c = n(l),
		d = i(58),
		u = n(d),
		p = i(3),
		h = n(p),
		f = i(12),
		m = n(f),
		g = i(2),
		b = n(g),
		k = function(t) {
			function e(t) {
				o(this, e), r(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this._widgetItemClick = this._widgetItemClick.bind(this)
			}
			return a(e, t), s(e, [{
				key: "_getWidgetList",
				value: function() {
					var t = this,
						e = b.
					default.getMetaOfType(1);
					e = e.filter(function(t) {
						return t.hasOwnProperty("tags")
					});
					var i = [],
						n = [],
						o = [],
						a = [];
					return e.forEach(function(e, s) {
						var r = c.
					default.createElement("div", {
							className: "item i-" + e.subId,
							key: s,
							"data-unionid": e.unionId,
							onClick: t._widgetItemClick
						}, c.
					default.createElement("span", {
							className: "ico"
						}), c.
					default.createElement("p", null, e.title));
						Array.isArray(e.tags) && (e.tags.includes("quote") ? i.push(r) : e.tags.includes("graph") ? n.push(r) : e.tags.includes("index") ? o.push(r) : a.push(r))
					}), c.
				default.createElement("div", {
						className: "ico-wrap"
					}, c.
				default.createElement("div", {
						className: "title"
					}, c.
				default.createElement("span", null, "列表")), i, c.
				default.createElement("div", {
						className: "title"
					}, c.
				default.createElement("span", null, "图形")), n, c.
				default.createElement("div", {
						className: "title"
					}, c.
				default.createElement("span", null, "指标")), o, c.
				default.createElement("div", {
						className: "title"
					}, c.
				default.createElement("span", null, "其他")), a)
				}
			}, {
				key: "_widgetItemClick",
				value: function(t) {
					m.
				default.handlePluginAction({
						type: h.
					default.ActionTypes.ADD_WIDGET_PANEL,
						unionId:
						t.currentTarget.dataset.unionid
					})
				}
			}, {
				key: "render",
				value: function() {
					return c.
				default.createElement(u.
				default, {
						bar: ".widgetbox-wrap .head",
						wrap: this.props.wrap,
						editable: !0,
						zindex: this.props.zindex,
						pos: this.props.pos
					}, c.
				default.createElement("div", {
						className: "widgetbox-wrap"
					}, c.
				default.createElement("h2", {
						className: "head"
					}, "插件库"), c.
				default.createElement("div", {
						className: "body"
					}, this._getWidgetList())))
				}
			}]), e
		}(l.Component);
	e.
default = k, k.propsType = {
		zindex: l.PropTypes.number,
		pos: l.PropTypes.object
	}, k.defaultProps = {
		zindex: 9999,
		pos: {
			top: 20,
			right: 20
		}
	}, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	function a(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var s = function() {
			function t(t, e) {
				var i = [],
					n = !0,
					o = !1,
					a = void 0;
				try {
					for (var s, r = t[Symbol.iterator](); !(n = (s = r.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
				} catch (t) {
					o = !0, a = t
				} finally {
					try {
						!n && r.
						return &&r.
						return ()
					} finally {
						if (o) throw a
					}
				}
				return i
			}
			return function(e, i) {
				if (Array.isArray(e)) return e;
				if (Symbol.iterator in Object(e)) return t(e, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		r = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, i, n) {
				return i && t(e.prototype, i), n && t(e, n), e
			}
		}(),
		l = function(t, e, i) {
			for (var n = !0; n;) {
				var o = t,
					a = e,
					s = i;
				n = !1, null === o && (o = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(o, a);
				if (void 0 !== r) {
					if ("value" in r) return r.value;
					var l = r.get;
					if (void 0 === l) return;
					return l.call(s)
				}
				var c = Object.getPrototypeOf(o);
				if (null === c) return;
				t = c, e = a, i = s, n = !0, r = c = void 0
			}
		},
		c = i(13),
		d = n(c),
		u = i(54),
		p = n(u),
		h = i(19),
		f = n(h),
		m = i(12),
		g = n(m),
		b = function(t) {
			function e(t) {
				o(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.state = {
					data: p.
				default.fromJS({
						cid: this.props.cid,
						isDragging: !1,
						isResizing: !1,
						left: t.pos.left,
						top: t.pos.top,
						width: t.size.width || "auto",
						height: t.size.height || "auto",
						zindex: t.zindex
					})
				}, this.privateData = p.
			default.fromJS({
					startX: 0,
					startY: 0,
					startLeft: t.pos.left,
					startTop: t.pos.top,
					clientWidth: 0,
					clientHeight: 0,
					wrapClientWidth: 0,
					wrapClientHeight: 0,
					id: "d" + f.
				default.v1(),
					resizeType:
					"",
					startWidth: t.size.width,
					startHeight: t.size.height
				}), this.startDrag = this.startDrag.bind(this), this.dragging = this.dragging.bind(this), this.endDrag = this.endDrag.bind(this), this.startResize = this.startResize.bind(this), this.resizing = this.resizing.bind(this), this.endResize = this.endResize.bind(this)
			}
			return a(e, t), r(e, [{
				key: "componentDidMount",
				value: function() {
					var t = this;
					if (this.bar = document.querySelector(this.props.bar), this.bar.addEventListener("mousedown", this.startDrag), this._updateBoundary(), this.props.wrap) {
						var e = this.state.data.get("left"),
							i = this.state.data.get("top");
						this.props.pos && this.props.pos.right && (e = this.privateData.get("wrapClientWidth") - this.privateData.get("clientWidth") - this.props.pos.right), this.props.pos && this.props.pos.bottom && (i = this.privateData.get("wrapClientHeight") - this.privateData.get("clientHeight") - this.props.pos.bottom), this.setState({
							data: this.state.data.merge({
								left: e,
								top: i
							})
						}), this.privateData = this.privateData.merge({
							startLeft: e,
							startTop: i
						})
					}
					this.props.resizable && this._bindResizeEvent(), this.dispatchId = g.
				default.register(function(e) {
						var i = e.action;
						switch (i.type) {
						case "WINDOW.RESIZE":
							t._updateBoundary()
						}
					})
				}
			}, {
				key: "componentWillReceiveProps",
				value: function(t) {
					t.useProps && this.setState({
						data: this.state.data.merge({
							left: t.pos.left,
							top: t.pos.top,
							width: t.size.width,
							height: t.size.height,
							zindex: t.zindex
						})
					})
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					g.
				default.unregister(this.dispatchId), this.bar && this.bar.removeEventListener("mousedown", this.startDrag), this.props.resizable && this._unbindResizeEvent()
				}
			}, {
				key: "componentDidUpdate",
				value: function(t) {
					this.props.resizable !== t.resizable && (this.props.resizable ? this._bindResizeEvent() : this._unbindResizeEvent()), this.props.editable !== t.editable && this._updateBoundary()
				}
			}, {
				key: "_updateBoundary",
				value: function() {
					if (this.props.editable) {
						var t = d.
					default.findDOMNode(this);
						if (this.privateData = this.privateData.merge({
							clientWidth: t.clientWidth,
							clientHeight: t.clientHeight
						}), this.props.wrap) {
							var e = document.querySelector(this.props.wrap);
							this.privateData = this.privateData.merge({
								wrapClientWidth: e.clientWidth,
								wrapClientHeight: e.clientHeight
							})
						}
						var i = this.state.data,
							n = this.privateData,
							o = this.boundLimit(i.get("left"), [0, n.get("wrapClientWidth") - n.get("clientWidth")]),
							a = this.boundLimit(i.get("top"), [0, n.get("wrapClientHeight") - n.get("clientHeight")]);
						this.setState({
							data: i.merge({
								left: o,
								top: a
							})
						}), this.privateData = this.privateData.merge({
							startLeft: o,
							startTop: a
						}), this._emitUpdate()
					}
				}
			}, {
				key: "_bindResizeEvent",
				value: function() {
					for (var t = document.querySelectorAll("#" + this.privateData.get("id") + " .resizable div"), e = 0, i = t.length; e < i; e++) t[e].addEventListener("mousedown", this.startResize)
				}
			}, {
				key: "_unbindResizeEvent",
				value: function() {
					for (var t = document.querySelectorAll("#" + this.privateData.get("id") + " .resizable div"), e = 0, i = t.length; e < i; e++) t[e].removeEventListener("mousedown", this.startResize)
				}
			}, {
				key: "startDrag",
				value: function(t) {
					if (this.props.editable && 1 === t.which) {
						var e = {
							isDragging: !0
						};
						"function" == typeof this.props.genZindex && (e.zindex = this.props.genZindex()), "function" == typeof this.props.startEdit && this.props.startEdit("drag"), this.setState({
							data: this.state.data.merge(e)
						}), this.privateData = this.privateData.merge({
							startX: t.clientX,
							startY: t.clientY
						}), document.addEventListener("mousemove", this.dragging), document.addEventListener("mouseup", this.endDrag)
					}
				}
			}, {
				key: "dragging",
				value: function(t) {
					var e = this.state.data;
					if (e.get("isDragging")) {
						var i, n, o = t.clientX,
							a = t.clientY,
							s = o - this.privateData.get("startX"),
							r = a - this.privateData.get("startY"),
							l = [],
							c = [];
						if (this.privateData.get("wrapClientWidth") && (l = [0, this.privateData.get("wrapClientWidth") - this.privateData.get("clientWidth")]), this.privateData.get("wrapClientHeight") && (c = [0, this.privateData.get("wrapClientHeight") - this.privateData.get("clientHeight")]), i = this.boundLimit(parseInt(this.privateData.get("startLeft")) + s, l), n = this.boundLimit(parseInt(this.privateData.get("startTop")) + r, c), "function" == typeof this.props.calcMagnetic) {
							var d = this.props.calcMagnetic(this.props.cid, ["left", "top", "right", "bottom"], {
								left: i,
								top: n,
								right: i + e.get("width"),
								bottom: n + e.get("height"),
								width: e.get("width"),
								height: e.get("height")
							});
							void 0 !== d.left && (i = d.left.value), void 0 !== d.right && (void 0 === d.left || d.right.force > d.left.force) && (i = d.right.value - e.get("width")), void 0 !== d.top && (n = d.top.value), void 0 !== d.bottom && (void 0 === d.top || d.bottom.force > d.top.force) && (n = d.bottom.value - e.get("height"))
						}
						this.setState({
							data: e.merge({
								left: i,
								top: n
							})
						})
					}
				}
			}, {
				key: "endDrag",
				value: function() {
					var t = this.state.data;
					this.setState({
						data: t.update("isDragging", function() {
							return !1
						})
					}), this.privateData = this.privateData.merge({
						startLeft: t.get("left"),
						startTop: t.get("top")
					}), this._emitUpdate(), document.removeEventListener("mousemove", this.dragging), document.removeEventListener("mouseup", this.endDrag)
				}
			}, {
				key: "boundLimit",
				value: function(t, e) {
					var i = s(e, 2),
						n = i[0],
						o = void 0 === n ? t : n,
						a = i[1],
						r = void 0 === a ? t : a;
					return function() {
						return t < o ? o : t > r ? r : t
					}()
				}
			}, {
				key: "_renderResizable",
				value: function() {
					return this.props.resizable ? d.
				default.createElement("div", {
						className: "resizable"
					}, d.
				default.createElement("div", {
						className: "resize-top",
						"data-type": "resize-top"
					}), d.
				default.createElement("div", {
						className: "resize-right",
						"data-type": "resize-right"
					}), d.
				default.createElement("div", {
						className: "resize-bottom",
						"data-type": "resize-bottom"
					}), d.
				default.createElement("div", {
						className: "resize-left",
						"data-type": "resize-left"
					}), d.
				default.createElement("div", {
						className: "resize-tl",
						"data-type": "resize-tl"
					}), d.
				default.createElement("div", {
						className: "resize-tr",
						"data-type": "resize-tr"
					}), d.
				default.createElement("div", {
						className: "resize-br",
						"data-type": "resize-br"
					}), d.
				default.createElement("div", {
						className: "resize-bl",
						"data-type": "resize-bl"
					})):
					null
				}
			}, {
				key: "startResize",
				value: function(t) {
					if (this.props.resizable) {
						var e = t.target.getAttribute("data-type");
						if (e) {
							var i = {
								isResizing: !0
							};
							"function" == typeof this.props.genZindex && (i.zindex = this.props.genZindex(this.state.data.get("zindex"))), "function" == typeof this.props.startEdit && this.props.startEdit("resize"), this.setState({
								data: this.state.data.merge(i)
							}), this.privateData = this.privateData.merge({
								startX: t.clientX,
								startY: t.clientY,
								resizeType: e
							}), document.addEventListener("mousemove", this.resizing), document.addEventListener("mouseup", this.endResize)
						}
					}
				}
			}, {
				key: "resizing",
				value: function(t) {
					var e = this.state.data;
					if (e.get("isResizing")) {
						var i = t.clientX,
							n = t.clientY,
							o = i - this.privateData.get("startX"),
							a = n - this.privateData.get("startY"),
							s = this._calcResize({
								disX: o,
								disY: a
							});
						s && this.setState({
							data: e.merge(s)
						})
					}
				}
			}, {
				key: "endResize",
				value: function() {
					var t = this.state.data;
					this.setState({
						data: t.update("isResizing", function() {
							return !1
						})
					}), this.privateData = this.privateData.merge({
						startLeft: t.get("left"),
						startTop: t.get("top"),
						startWidth: t.get("width"),
						startHeight: t.get("height")
					}), this._updateBoundary(), this._emitUpdate(), document.removeEventListener("mousemove", this.resizing), document.removeEventListener("mouseup", this.endResize)
				}
			}, {
				key: "_emitUpdate",
				value: function() {
					var t = this;
					this.timer && clearTimeout(this.timer), this.timer = setTimeout(function() {
						var e = t.state.data;
						"function" == typeof t.props.handleChange && t.props.handleChange({
							left: e.get("left"),
							top: e.get("top"),
							width: e.get("width"),
							height: e.get("height"),
							zindex: e.get("zindex")
						})
					}, 200)
				}
			}, {
				key: "_calcResize",
				value: function(t) {
					var e, i, n, o, a, s, r = t.disX,
						l = t.disY;
					switch (this.privateData.get("resizeType")) {
					case "resize-tl":
						e = r, i = l, n = r * -1, o = l * -1, s = ["top", "left"];
						break;
					case "resize-top":
						e = 0, i = l, n = 0, o = l * -1, s = ["top"];
						break;
					case "resize-tr":
						e = 0, i = l, n = r, o = l * -1, s = ["top", "right"];
						break;
					case "resize-right":
						e = 0, i = 0, n = r, o = 0, s = ["right"];
						break;
					case "resize-br":
						e = 0, i = 0, n = r, o = l, s = ["bottom", "right"];
						break;
					case "resize-bottom":
						e = 0, i = 0, n = 0, o = l, s = ["bottom"];
						break;
					case "resize-bl":
						e = r, i = 0, n = r * -1, o = l, s = ["bottom", "left"];
						break;
					case "resize-left":
						e = r, i = 0, n = r * -1, o = 0, s = ["left"]
					}
					var c = this.privateData;
					if (a = {
						left: c.get("startLeft") + e,
						top: c.get("startTop") + i,
						width: c.get("startWidth") + n,
						height: c.get("startHeight") + o
					}, this.props.minSize && (a.width = a.width < this.props.minSize.width ? this.props.minSize.width : a.width, a.height = a.width < this.props.minSize.height ? this.props.minSize.height : a.height), this.props.wrap && (a.left < 0 ? (a.left = 0, r < 0 && (a.width = c.get("startWidth") + c.get("startLeft"))) : r > 0 && a.left + a.width > c.get("wrapClientWidth") && (a.width = c.get("wrapClientWidth") - c.get("startLeft")), a.top < 0 ? (a.top = 0, l < 0 && (a.height = c.get("startHeight") + c.get("startTop"))) : l > 0 && a.top + a.height > c.get("wrapClientHeight") && (a.height = c.get("wrapClientHeight") - c.get("startTop"))), "function" == typeof this.props.calcMagnetic) {
						var d = this.state.data;
						a.right = a.left + a.width, a.bottom = a.top + a.height;
						var u = this.props.calcMagnetic(this.props.cid, s, a);
						void 0 !== u.bottom && (a.height = u.bottom.value - d.get("top")), void 0 !== u.right && (a.width = u.right.value - d.get("left")), void 0 !== u.left && (a.left = u.left.value, a.width = d.get("left") + d.get("width") - u.left.value), void 0 !== u.top && (a.top = u.top.value, a.height = d.get("top") + d.get("height") - u.top.value), delete a.right, delete a.bottom
					}
					return a
				}
			}, {
				key: "render",
				value: function() {
					var t = this.state.data,
						e = {
							left: t.get("left"),
							top: t.get("top"),
							right: t.get("right"),
							bottom: t.get("bottom"),
							width: t.get("width"),
							height: t.get("height"),
							zIndex: t.get("zindex")
						};
					return d.
				default.createElement("div", {
						className: "draggable" + (this.props.editable ? " edit" : "") + (this.state.data.get("isDragging") ? " isDragging" : ""),
						id: this.privateData.get("id"),
						style: e
					}, this._renderResizable(), this.props.children)
				}
			}]), e
		}(c.Component);
	e.
default = b, b.propTypes = {
		bar: c.PropTypes.string,
		wrap: c.PropTypes.string,
		pos: c.PropTypes.object,
		size: c.PropTypes.object,
		editable: c.PropTypes.bool,
		resizable: c.PropTypes.bool,
		handleChange: c.PropTypes.func,
		maxSize: c.PropTypes.object,
		minSize: c.PropTypes.object,
		useProps: c.PropTypes.bool,
		zindex: c.PropTypes.number
	}, b.defaultProps = {
		size: {
			width: 0,
			height: 0
		},
		pos: {
			top: 0,
			left: 0
		},
		minSize: {
			width: 0,
			height: 0
		},
		useProps: !1,
		zindex: 1
	}, t.exports = e.
default
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
		default:
			t
		}
	}
	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	function a(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var s = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, i, n) {
				return i && t(e.prototype, i), n && t(e, n), e
			}
		}(),
		r = function(t, e, i) {
			for (var n = !0; n;) {
				var o = t,
					a = e,
					s = i;
				n = !1, null === o && (o = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(o, a);
				if (void 0 !== r) {
					if ("value" in r) return r.value;
					var l = r.get;
					if (void 0 === l) return;
					return l.call(s)
				}
				var c = Object.getPrototypeOf(o);
				if (null === c) return;
				t = c, e = a, i = s, n = !0, r = c = void 0
			}
		},
		l = i(13),
		c = n(l),
		d = i(58),
		u = n(d),
		p = i(19),
		h = n(p),
		f = i(12),
		m = n(f),
		g = i(3),
		b = n(g),
		k = i(2),
		v = n(k),
		y = i(15),
		C = i(54),
		S = n(C),
		x = i(22),
		w = n(x),
		M = i(51),
		E = n(M),
		_ = i(6),
		P = function(t) {
			function e(t) {
				o(this, e), r(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.barId = "widget-panel" + h.
			default.v1(), this._handleChangePos = this._handleChangePos.bind(this), this._handleMouseDown = this._handleMouseDown.bind(this), this._handleDeleteClick = this._handleDeleteClick.bind(this), this._startEdit = this._startEdit.bind(this), this._contextMenu = this._contextMenu.bind(this), this._showKeyWizard = this._showKeyWizard.bind(this), this._setCode = this._setCode.bind(this), this._closeKeyWizard = this._closeKeyWizard.bind(this), this.state = {
					data: S.
				default.fromJS({
						title: ""
					})
				}
			}
			return a(e, t), s(e, [{
				key: "_shouldSetCode",
				value: function() {
					var t = v.
				default.getMeta(this.props.unionId);
					return !!t && t.tags && t.tags.includes("stock")
				}
			}, {
				key: "_showKeyWizard",
				value: function(t) {
					t.stopPropagation(), this.codeInput || (this.codeInput = t.target), this.keyWizard = E.
				default.show({
						position: {
							top: t.target.getBoundingClientRect().top + 15,
							left: t.target.getBoundingClientRect().left + 20
						},
						direction: "DOWN",
						getNum: this._setCode,
						type: "STOCK"
					}), this._addCloseWizard()
				}
			}, {
				key: "_closeKeyWizard",
				value: function(t) {
					(0, _.Contains)(this.codeInput, t.target) || (0, _.Contains)(c.
				default.findDOMNode(this.keyWizard), t.target) || (this.keyWizard.destroy(), this._removeCloseWizard())
				}
			}, {
				key: "_addCloseWizard",
				value: function() {
					document.addEventListener("click", this._closeKeyWizard)
				}
			}, {
				key: "_removeCloseWizard",
				value: function() {
					document.removeEventListener("click", this._closeKeyWizard)
				}
			}, {
				key: "_setCode",
				value: function(t) {
					m.
				default.handlePluginAction({
						type: b.
					default.ActionTypes.SET_PANEL_CODE,
						id:
						this.props.id,
						code: t.code,
						market: t.market
					}), this.keyWizard && (this.keyWizard.destroy(), this._removeCloseWizard())
				}
			}, {
				key: "componentDidMount",
				value: function() {
					var t = this,
						e = v.
					default.getMeta(this.props.unionId);
					e && this.setState({
						data: this.state.data.update("title", function() {
							return e.title
						})
					}), this.deleteDom = document.querySelector("#" + this.barId + " .delete"), this.groupDom = document.querySelector("#" + this.barId + " .group"), this.deleteDom && this.deleteDom.addEventListener("mousedown", this._handleMouseDown), this.groupDom && this.groupDom.addEventListener("mousedown", this._handleMouseDown), this.dispatchId = m.
				default.register(function(e) {
						var i = e.action;
						switch (i.type) {
						case b.
						default.ActionTypes.CUSTOM_PANEL_STOCK_FOCUS:
							t.props.group === i.data.group && t.setState({
								data: t.state.data.merge({
									market: i.data.market,
									code: i.data.code
								})
							})
						}
					})
				}
			}, {
				key: "componentWillUpdate",
				value: function(t, e) {
					!t.editable || this.state.data.get("title") && t.unionId === this.props.unionId || (e.data = e.data.update("title", function() {
						return v.
					default.getMeta(t.unionId).title
					}))
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					m.
				default.unregister(this.dispatchId), this.groupDom && this.groupDom.removeEventListener("mousedown", this._handleMouseDown), this.groupDom && this.groupDom.removeEventListener("mousedown", this._handleMouseDown), document.removeEventListener("click", this._closeKeyWizard)
				}
			}, {
				key: "_handleChangePos",
				value: function(t) {
					m.
				default.handlePluginAction({
						type: b.
					default.ActionTypes.EDIT_WIDGET_PANEL_POS,
						data:
						t,
						id: this.props.id
					}), this.refs.widget && this.refs.widget.resize && this.refs.widget.resize()
				}
			}, {
				key: "_handleDeleteClick",
				value: function(t) {
					t.stopPropagation(), m.
				default.handlePluginAction({
						type: b.
					default.ActionTypes.DELETE_WIDGET_PANEL,
						id:
						this.props.id
					})
				}
			}, {
				key: "_handleMouseDown",
				value: function(t) {
					t.stopPropagation()
				}
			}, {
				key: "_startEdit",
				value: function() {
					m.
				default.handlePluginAction({
						type: b.
					default.ActionTypes.START_EDIT,
						id:
						this.props.id
					})
				}
			}, {
				key: "_getMenu",
				value: function() {
					var t = v.
				default.getMetaOfType(1).filter(function(t) {
						return t.hasOwnProperty("tags")
					}).map(function(t) {
						return t.title
					});
					return [b.
				default.Lang("Widget Delete"), {
						title: b.
					default.Lang("Group"),
						children:
						b.
					default.GROUPS
					}, {
						title: b.
					default.Lang("Exchange"),
						children:
						t
					}]
				}
			}, {
				key: "_getUnionId",
				value: function(t) {
					var e = v.
				default.getMetaOfType(1).filter(function(t) {
						return t.hasOwnProperty("tags")
					}).find(function(e) {
						return t === e.title
					});
					return !!e && e.unionId
				}
			}, {
				key: "_contextMenu",
				value: function(t) {
					var e = this;
					t.preventDefault();
					var i = this.props.menu;
					(!i || i.length <= 0) && (i = this._getMenu(), "function" == typeof this.props.updateMenu && this.props.updateMenu(i)), y.Menu.show(t, {
						options: i
					}, function(t, i) {
						t === b.
					default.Lang("Widget Delete") ? m.
					default.handlePluginAction({
							type: b.
						default.ActionTypes.DELETE_WIDGET_PANEL,
							id:
							e.props.id
						}):
						t.match(b.
					default.Lang("Group")) ? i.length > 1 && m.
					default.handlePluginAction({
							type: b.
						default.ActionTypes.SET_WIDGET_GROUP,
							id:
							e.props.id,
							group: i[1]
						}):
						m.
					default.handlePluginAction({
							type: b.
						default.ActionTypes.SWITCH_WIDGET_PANEL,
							id:
							e.props.id,
							unionId: e._getUnionId(t)
						})
					})
				}
			}, {
				key: "render",
				value: function() {
					var t = this.props,
						e = this.state.data,
						i = t.unionId,
						n = t.zindex,
						o = t.isActive,
						a = t.market,
						s = t.code,
						r = w.
					default.get(a, s),
						l = "",
						d = !1;
					r && (l = r.name, d = "ggt" == r.market || "szgt" == r.market);
					var p = c.
				default.createElement(v.
				default.getImpl(i), {
						ref: "widget",
						isWidget: !0,
						market: a,
						code: s,
						widgetContainer: !0,
						group: t.group
					}),
						h = {
							width: t.width,
							height: t.height
						},
						f = {
							top: t.top,
							left: t.left
						},
						m = "widget-panel";
					return this._shouldSetCode() && (m += " set-code"), !! o && (m += " active"), c.
				default.createElement(u.
				default, {
						bar: "#" + this.barId,
						cid: t.id,
						wrap: t.wrap,
						useProps: t.useProps,
						editable: t.editable,
						resizable: t.editable,
						handleChange: this._handleChangePos,
						size: h,
						pos: f,
						zindex: n,
						genZindex: t.genZindex,
						startEdit: this._startEdit,
						calcMagnetic: t.calcMagnetic
					}, c.
				default.createElement("div", {
						className: m
					}, c.
				default.createElement("div", {
						className: "widget-panel-head",
						onContextMenu: this._contextMenu,
						id: this.barId
					}, c.
				default.createElement("h2", null, e.get("title")), t.group ? c.
				default.createElement("div", {
						className: "group"
					}, t.group):
					null, c.
				default.createElement("span", {
						className: "delete",
						onClick: this._handleDeleteClick
					})), c.
				default.createElement("div", {
						className: "widget-panel-title"
					}, c.
				default.createElement("input", {
						value: t.code,
						onFocus: this._showKeyWizard
					}), c.
				default.createElement("span", {
						className: d ? "name board-hk" : "name",
						title: l
					}, l)), c.
				default.createElement("div", {
						className: "widget-panel-body"
					}, p)))
				}
			}]), e
		}(l.Component);
	e.
default = P, P.propsType = {
		group: l.PropTypes.any
	}, t.exports = e.
default
}, function(t, e) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, i, n) {
				return i && t(e.prototype, i), n && t(e, n), e
			}
		}(),
		o = function() {
			function t(e, n, o, a, s) {
				i(this, t), this.id = e, this.type = n, this.wrapWidth = o, this.wrapHeight = a, this.gutter = s
			}
			return n(t, [{
				key: "calcSize",
				value: function(t, e, i) {
					for (var n = [], o = t, a = 0, s = 0; s < e.length; s++) {
						var r = e[s];
						i[s] ? (o -= r, n[s] = r) : a += r
					}
					o -= (e.length - 1) * this.gutter;
					for (var s = 0; s < e.length; s++) void 0 === n[s] && (n[s] = e[s] / a * o);
					return n
				}
			}, {
				key: "appendSize",
				value: function(t, e, i, n) {
					return {
						left: t,
						top: e,
						width: i,
						height: n
					}
				}
			}, {
				key: "genSize",
				value: function(t, e, i, n, o, a, s) {
					var r, l, c = this.gutter;
					if (e.size) if (s) l = this.calcSize(n, e.size, [!1, !1]), t.push(this.appendSize(o, a, i, l[0])), t.push(this.appendSize(o, l[0] + a + c, i, l[1]));
					else {
						if (r = this.calcSize(i, e.size, [!1, !1]), t.push(this.appendSize(o, a, r[0], n)), e.children) return this.genSize(t, e.children["child-1"], r[1], n, r[0] + o + c, a, "3" === this.type);
						t.push(this.appendSize(o + r[0] + c, a, r[1], n))
					}
					if (e.colsize) {
						var d = void 0,
							u = void 0,
							p = void 0,
							h = void 0,
							f = void 0;
						for (r = this.calcSize(i, e.colsize, [!1, !1]), l = this.calcSize(n, e.rowsize, [!1, !1]), u = 0, p = l.length; u < p; u++) for (d = 0, h = u < 1 ? a : a + this.reduceSum(l, u - 1) + u * c; r[d];) f = d < 1 ? o : o + this.reduceSum(r, d - 1) + d * c, t.push(this.appendSize(f, h, r[d], l[u])), ++d
					}
					return t
				}
			}, {
				key: "reduceSum",
				value: function(t, e) {
					var i = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
					return e ? this.reduceSum(t, e - 1, i + t[e]) : i + t[e]
				}
			}, {
				key: "getPersist",
				value: function() {
					var t = this.readUIPersist();
					if (!t) switch (this.type) {
					case "2":
						t = {
							size: [1, 1]
						};
						break;
					case "3":
						t = {
							size: [1, 1],
							children: {
								"child-1": {
									size: [1, 1]
								}
							}
						};
						break;
					case "4":
						t = {
							colsize: [1, 1],
							rowsize: [1, 1]
						};
						break;
					case "5":
						t = {
							size: [1, 2],
							children: {
								"child-1": {
									colsize: [1, 1],
									rowsize: [1, 1]
								}
							}
						};
						break;
					case "6":
						t = {
							colsize: [1, 1, 1],
							rowsize: [1, 1]
						}
					}
					return t
				}
			}, {
				key: "readUIPersist",
				value: function() {
					var t = localStorage["ui-persist:" + this.id];
					return t && JSON.parse(t)
				}
			}, {
				key: "deleteUIPersist",
				value: function() {
					this.id && localStorage.removeItem("ui-persist:" + this.id)
				}
			}, {
				key: "getSizeArr",
				value: function() {
					return this.genSize([], this.getPersist(), this.wrapWidth - 2 * this.gutter, this.wrapHeight - 2 * this.gutter, this.gutter, this.gutter)
				}
			}]), t
		}();
	e.
default = o, t.exports = e.
default
}, function(t, e) {
	t.exports = require("hippo/Logger")
}, function(t, e, i) {
	var n = i(63);
	"string" == typeof n && (n = [
		[t.id, n, ""]
	]);
	i(70)(n, {});
	n.locals && (t.exports = n.locals)
}, function(t, e, i) {
	e = t.exports = i(64)(), e.push([t.id, ".Popup.AddPanel-del-confirm{left:40%;right:40%;-ms-flex:1;flex:1}.Popup.AddPanel-del-confirm .Content{padding:2em}.Popup.MyStock-PanelManager{width:40em;height:432px}.Popup.MyStock-WidgetLibrary{width:48em;height:30em}.Popup.MyStock-WidgetLibrary .Content{position:relative;-ms-flex:1;flex:1}.Popup.MyStock-WidgetLibrary .Content .WidgetLibrary{position:absolute;top:0;bottom:0;left:0;right:0}.Popup.MyStock-WidgetLibrary .Tabs{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden}.Popup.MyStock-WidgetLibrary .Tabs-Bar{height:auto;background-color:#eee;padding:0 10px}.Popup.MyStock-WidgetLibrary .Tabs-Bar .Tabs-Bar-Item{color:#666;height:28px;line-height:28px;margin:6px 2px;border-radius:14px;padding-left:10px;padding-right:10px}.Popup.MyStock-WidgetLibrary .Tabs-Bar .Tabs-Bar-Item.active,.Popup.MyStock-WidgetLibrary .Tabs-Bar .Tabs-Bar-Item:hover{color:#fff;background-color:#a4b4cb}.Popup.MyStock-WidgetLibrary .Tabs-Bar-Item.active:after{display:none}.Popup.MyStock-WidgetLibrary .Tabs-Content{position:relative;padding:0 10px;-ms-flex:1;flex:1}.Popup.MyStock-WidgetLibrary .Tabs-Content .PluginList{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden}.Popup.MyStock-WidgetLibrary .Tabs-Content .PluginList ul{padding:20px 40px;list-style:none}.Popup.MyStock-WidgetLibrary .Tabs-Content li{height:100px;border-bottom:1px solid #d3d3d3;margin-bottom:8px}.Popup.MyStock-WidgetLibrary .Tabs-Content li .preview{float:left;width:144px;height:90px;border:1px solid #d3d3d3;padding:1px;border-radius:3px}.Popup.MyStock-WidgetLibrary .Tabs-Content li .info{margin-left:170px}.Popup.MyStock-WidgetLibrary .Tabs-Content li .info .button,.Popup.MyStock-WidgetLibrary .Tabs-Content li .info .desc,.Popup.MyStock-WidgetLibrary .Tabs-Content li .info .title{display:block;margin:4px 0}.Popup.MyStock-WidgetLibrary .Tabs-Content li .info .title{font-size:1.1em}.Popup.MyStock-WidgetLibrary .Tabs-Content li .info .desc{line-height:18px;height:36px;overflow:hidden;color:gray}.Popup.MyStock-WidgetLibrary .Tabs-Content li .info .button{padding:6px 20px}.Popup.MyStock-WidgetLibrary .Tabs-Content li:last-child{border-bottom:none;margin-bottom:none}.Popup.MyStock-PanelManager .PanelManager{position:absolute;overflow:hidden;top:0;left:0;right:0;bottom:0}.Popup.MyStock-PanelManager .PanelManager .content{margin:2em;border:1px solid #eee}.Popup.MyStock-PanelManager .default-list li{list-style:none;height:36px;line-height:36px;padding:0 0 0 30px;border-bottom:1px solid #eee;position:relative}.Popup.MyStock-PanelManager .default-list .ico-visible{position:absolute;right:10px;top:10px}.Popup.MyStock-PanelManager .EditListWrap{height:147px;overflow:hidden}.Popup.MyStock-PanelManager .EditListWrap span.column:nth-child(1){width:75px}.Popup.MyStock-PanelManager .EditListWrap span.column:nth-child(2){width:300px}.Popup.MyStock-PanelManager .EditListWrap li:last-child{border-bottom:1px solid #eee}.MyStock_DeleteStockTooFast{width:200px;height:200px;-webkit-transform:translateX(220px);transform:translateX(220px)}.MyStock_DeleteStockTooFast .Title{height:35px;line-height:35px}.MyStock_DeleteStockTooFast .Content{text-align:center}.MyStock_DeleteStockTooFast .Content div{position:relative;top:40px}.MyStock_DeleteStockTooFast .Footer{height:40px!important;padding-top:5px!important}.tooManyCombinations{width:300px;height:250px;margin:0 auto}.tooManyCombinations .Content{text-align:center;line-height:135px}.tooManyCombinations .Footer button{position:relative;top:-13px}.Popup.shareCombination{margin:0 auto;width:300px;height:300px;text-align:center}.Popup.shareCombination img{margin:10px auto;display:block;border:6px solid #000;border-radius:4px}.Popup.shareCombination span{font-size:15px}.Popup.combinationDeleteComfirm{width:300px;height:250px;margin:0 auto;text-align:center}.Popup.combinationDeleteComfirm p{margin:20% auto}.Combination-Btn.Popup{width:700px;-ms-flex-direction:column;flex-direction:column}.Combination-Btn.Popup .Content{-ms-flex:none;flex:none}.Combination-Btn.Popup .hk{display:inline-block;vertical-align:top;height:18px;width:18px;margin-top:8px;margin-left:3px;background:transparent url(" + i(65) + ") 50% no-repeat;background-size:18px auto}.Combination-Btn.Popup .Title{min-height:40px;border-top-right-radius:5px;border-top-left-radius:5px}.Combination-Btn.Popup .newImportMyStockPage .myStockList{box-sizing:border-box;position:relative}.Combination-Btn.Popup .newImportMyStockPage .myStockList .contentPage{height:320px}.Combination-Btn.Popup .newImportMyStockPage .myStockList .showStockList{position:relative;padding:12px;box-sizing:border-box;height:280px;overflow:hidden}.Combination-Btn.Popup .newImportMyStockPage .myStockList .showStockList li{height:40px}.Combination-Btn.Popup .newImportMyStockPage .myStockList .showStockList li span{border-right:1px solid #2e2b3e;border-bottom:1px solid #2e2b3e}.Combination-Btn.Popup .newImportMyStockPage .myStockList .showStockList .loader{margin:20% auto}.Combination-Btn.Popup .newImportMyStockPage .myStockList .showStockList .loader div{background-color:#3a3c5c}.Combination-Btn.Popup .newImportMyStockPage .myStockList .showStockList .Scrollbar.vertical .handle{right:5px}.Combination-Btn.Popup .newImportMyStockPage .myStockList .showStockList span{cursor:pointer;height:40px;line-height:40px;text-align:center;display:inline-block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.Combination-Btn.Popup .newImportMyStockPage .myStockList .showStockList .emptyMyList{text-align:center;position:relative;top:50%}.Combination-Btn.Popup .newImportMyStockPage .myStockList .textprompt{position:absolute;left:23px;font-size:11px;bottom:90px}.Combination-Btn.Popup .newImportMyStockPage .myStockList .textprompt .totelPage,.Combination-Btn.Popup .newImportMyStockPage .myStockList .textprompt .totelPage span{border:none!important}.Combination-Btn.Popup .newImportMyStockPage .myStockList ul{margin:1px;list-style-type:none}.Combination-Btn.Popup .newImportMyStockPage .myStockList ul li.title span{border-top:1px solid #2e2b3e;color:#838383;background-color:#eee}.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .choosed{width:50px;border-left:1px solid #2e2b3e}.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .now,.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .secuabbr{width:90px}.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .tradingcode{width:80px}.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .tradingcode span{border:none}.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .tradingcode .hk{margin-top:10px}.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .amount,.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .now,.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .rise,.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .risepercent{width:80px}.Combination-Btn.Popup .newImportMyStockPage .myStockList ul .volume{width:110px}.NewCombination_content{border-bottom-left-radius:5px;border-bottom-right-radius:5px;-ms-flex:1;flex:1;background-color:#fff;color:#000}.NewCombination_content .stepOnePage .explain{height:20px;display:block;line-height:20px;margin:0 22px;color:#988e8e}.NewCombination_content .stepOnePage .stepOnePageStockList{overflow:hidden;position:relative;max-height:280px;min-height:280px;margin-bottom:10px}.NewCombination_content .stepOnePage .stepOnePageStockList ul{min-height:200px;list-style-type:none;padding:5px}.NewCombination_content .stepOnePage .stepOnePageStockList li{text-align:center}.NewCombination_content .stepOnePage .stepOnePageStockList li span{display:inline-block;border-bottom:1px solid #ddd;border-right:1px solid #ddd;height:34px;line-height:34px;overflow:hidden;vertical-align:top}.NewCombination_content .stepOnePage .stepOnePageStockList li input{border-radius:4px;border:1px solid #ccc;height:24px;margin-top:5px;vertical-align:top;width:80px}.NewCombination_content .stepOnePage .stepOnePageStockList li .index{width:40px;border-left:1px solid #ddd}.NewCombination_content .stepOnePage .stepOnePageStockList li.title{color:#848484}.NewCombination_content .stepOnePage .stepOnePageStockList li.title span{background-color:#eee;border-top:1px solid #ddd}.NewCombination_content .stepOnePage .stepOnePageStockList li .stockname{width:110px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.NewCombination_content .stepOnePage .stepOnePageStockList li .stockname input{padding-left:4px;padding-right:0;width:100px;box-sizing:border-box}.NewCombination_content .stepOnePage .stepOnePageStockList li .stockcode{width:90px}.NewCombination_content .stepOnePage .stepOnePageStockList li .stockcode span{border:none}.NewCombination_content .stepOnePage .stepOnePageStockList li .nowprice{width:70px}.NewCombination_content .stepOnePage .stepOnePageStockList li .targetprice{width:90px}.NewCombination_content .stepOnePage .stepOnePageStockList li .reason{width:190px}.NewCombination_content .stepOnePage .stepOnePageStockList li .reason input{width:180px}.NewCombination_content .stepOnePage .stepOnePageStockList .resetEditStock,.NewCombination_content .stepOnePage .stepOnePageStockList li .deleteAlt,.NewCombination_content .stepOnePage .stepOnePageStockList li .deletewhite{width:50px}.NewCombination_content .stepOnePage .stepOnePageStockList .deletewhite{background:url(" + i(66) + ") no-repeat 50%}.NewCombination_content .stepOnePage .pagecontent,.NewCombination_content .stepTwoPage .pagecontent{height:320px}.NewCombination_content .stepTwoPage .pagecontent{box-sizing:border-box;padding-top:20px}.NewCombination_content .stepTwoPage .newDescript,.NewCombination_content .stepTwoPage .newName{padding-left:50px}.NewCombination_content .stepTwoPage h2{margin-bottom:15px}.NewCombination_content .stepTwoPage input{border:2px solid #ccc;border-radius:4px;width:600px;height:37px}.NewCombination_content .stepTwoPage .newName{margin-bottom:5px}.NewCombination_content .stepTwoPage .investdescNotice,.NewCombination_content .stepTwoPage .nameNotice{display:block;height:17px}.NewCombination_content .stepTwoPage textarea{border-radius:4px;resize:none;width:600px;height:120px}.NewCombination_content .stepTwoPage .done.disabled{background-color:#ccc;border-color:#ccc}.NewCombination_content .bottom{font-size:12px;position:relative;height:30px;line-height:30px}.NewCombination_content .bottom .textprompt{position:absolute;left:27px}.NewCombination_content .bottom .textprompt .totelPage,.NewCombination_content .bottom .textprompt .totelPage span{border:none!important}.NewCombination_content .bottom .importMyStockbtn{position:absolute;right:26px;color:#489afe;cursor:pointer}.NewCombination_content .footer{border-top:1px solid #000;text-align:center}.NewCombination_content .footer button{cursor:pointer;border:1px solid #489afe;background-color:#489afe;color:#fff;margin:20px;width:120px;height:30px}.NewCombination_content .footer button:hover{background-color:#fff;color:#489afe}.MyStock .Tabs-Content>iframe.IframeOpener{width:100%;height:100%;border:none}.MyStock header.StockQuote-Filter .Filter-Toolbar i.ico.refreshMyStock{display:inline-block}.MyStock .MyStock-Graph{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.MyStock .MyStock-Graph .MyStock-Graph-Content{-ms-flex:1;flex:1;margin:8px;margin-bottom:0}.MyStock .MyStock-Graph .View .MyStock-TimeSeries{width:100%;height:100%;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.MyStock .MyStock-Graph .View .MyStock-TimeSeries .info{height:30px;line-height:30px;padding:0 10px}.MyStock .MyStock-Graph .View .MyStock-TimeSeries .info .code{font-size:.9em}.MyStock .MyStock-Graph .View .MyStock-TimeSeries .graph{-ms-flex:1;flex:1;overflow:hidden}.MyStock .EditMyStockList{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 50%;transform-origin:0 50%;transition-duration:.5s;height:100%;overflow:hidden}.MyStock .EditMyStockList ul{position:relative}.MyStock .EditMyStockList li{position:absolute;width:128px;height:100px;margin:10px;text-align:center;font-size:18px;transition:opacity .3s;display:inline-block}.MyStock .EditMyStockList li span{display:block}.MyStock .EditMyStockList li span.closeico{position:absolute;width:20px;height:20px;line-height:20px;top:0;right:0}.MyStock .EditMyStockList li span.stockname{top:27px;position:relative;height:22px;line-height:22px}.MyStock .EditMyStockList li span.stockcode{position:relative;top:30px}.MyStock .EditMyStockList .dragging li,.MyStock .EditMyStockList .moving{position:absolute}.MyStock .AddPanel{height:100%;position:relative}.MyStock .AddPanel .addpanel-title{line-height:40px;font-size:16px;padding:0 0 0 20px;font-weight:400;-ms-flex-negative:0;flex-shrink:0}.MyStock .AddPanel .addpanel-content{width:100%;height:calc(100% - 40px);margin:0 auto;max-width:1375px;text-align:center;display:table}.MyStock .AddPanel .addpanel-content .addpanel-content-inner{display:table-cell;vertical-align:middle}.MyStock .AddPanel .addpanel-item{display:inline-block;margin:15px 25px;font-size:16px;width:24%;max-width:330px}.MyStock .AddPanel .addpanel-item .img{width:100%;height:0;padding-bottom:61.8181%;overflow:hidden;cursor:pointer;background-size:100% 100%}.MyStock .AddPanel .addpanel-item p{padding:20px 0;margin:0}.MyStock .AddPanel .addpanel-item.custom .img{background-image:none;position:relative}.MyStock .AddPanel .addpanel-item.custom .img:after,.MyStock .AddPanel .addpanel-item.custom .img:before{position:absolute;content:'';top:50%;left:50%}.MyStock .AddPanel .addpanel-item.custom .img:before{width:64px;height:6px;margin-top:-3px;margin-left:-32px}.MyStock .AddPanel .addpanel-item.custom .img:after{width:6px;height:64px;margin-top:-32px;margin-left:-3px}.MyStock .CustomPanel{height:100%}.MyStock .custom-panel-wrap{position:relative;height:100%;overflow:hidden}.MyStock .draggable{position:absolute}.MyStock .widgetbox-wrap{width:140px;box-shadow:0 0 5px rgba(0,0,0,.2);border-radius:5px 5px 0 0}.MyStock .widgetbox-wrap .head{line-height:40px;background:#3a3c5c;text-align:center;color:#fff;font-size:16px;border-radius:5px 5px 0 0;cursor:move}.MyStock .widgetbox-wrap .body{background:#fff}.MyStock .widgetbox-wrap .title{position:relative;text-align:center;height:32px;margin-top:10px;color:#838383}.MyStock .widgetbox-wrap .title:first-child{margin-top:0}.MyStock .widgetbox-wrap .title span{position:relative;z-index:2;background:#fff;font-size:14px;line-height:16px;margin-top:8px;width:44px;display:inline-block;vertical-align:top}.MyStock .widgetbox-wrap .title:after{position:absolute;content:'';left:0;right:0;height:1px;overflow:hidden;background:#e6e6e6;top:50%}.MyStock .widgetbox-wrap .ico-wrap{padding:14px 17px 20px}.MyStock .widgetbox-wrap .item{display:inline-block;vertical-align:top;width:53px;text-align:center;margin-bottom:5px}.MyStock .widgetbox-wrap .item .ico{display:inline-block;vertical-align:top;width:32px;height:32px;border:1px solid #d2e4fa;cursor:pointer;background-color:#eef7ff}.MyStock .widgetbox-wrap .item .ico:hover{background-color:#d2e4fa}.MyStock .widgetbox-wrap .item p{overflow:hidden;height:20px;line-height:20px;margin:0;font-size:12px;color:#838383}.MyStock .i-NewsList .ico{background-image:url(" + i(67) + ");background-position:0 -105px;width:32px;height:32px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.MyStock .i-NewsList .ico{background-image:url(" + i(68) + ");background-size:230px 223px}}.MyStock .i-MyStockListPanel .ico{background-image:url(" + i(67) + ");background-position:-37px -142px;width:32px;height:32px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.MyStock .i-MyStockListPanel .ico{background-image:url(" + i(68) + ");background-size:230px 223px}}.MyStock .i-QuoteList .ico{background-image:url(" + i(67) + ");background-position:-148px -105px;width:32px;height:32px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.MyStock .i-QuoteList .ico{background-image:url(" + i(68) + ");background-size:230px 223px}}.MyStock .i-StockTimeSeriesWrap .ico{background-image:url(" + i(67) + ");background-position:0 -142px;width:32px;height:32px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.MyStock .i-StockTimeSeriesWrap .ico{background-image:url(" + i(68) + ");background-size:230px 223px}}.MyStock .i-StockTickFive .ico{background-image:url(" + i(67) + ");background-position:-37px -105px;width:32px;height:32px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.MyStock .i-StockTickFive .ico{background-image:url(" + i(68) + ");background-size:230px 223px}}.MyStock .i-StockTickDuel .ico{background-image:url(" + i(67) + ");background-position:-111px -142px;width:32px;height:32px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.MyStock .i-StockTickDuel .ico{background-image:url(" + i(68) + ");background-size:230px 223px}}.MyStock .i-StockGraph .ico{background-image:url(" + i(67) + ");background-position:-74px -105px;width:32px;height:32px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.MyStock .i-StockGraph .ico{background-image:url(" + i(68) + ");background-size:230px 223px}}.MyStock .i-StockBriefPanel .ico{background-image:url(" + i(67) + ");background-position:-111px -105px;width:32px;height:32px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.MyStock .i-StockBriefPanel .ico{background-image:url(" + i(68) + ");background-size:230px 223px}}.MyStock .i-StockBriefLinesPanel .ico{background-image:url(" + i(67) + ");background-position:-74px -142px;width:32px;height:32px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.MyStock .i-StockBriefLinesPanel .ico{background-image:url(" + i(68) + ");background-size:230px 223px}}.MyStock .custom-panel-wrap .btn-wrap{position:absolute;bottom:0;left:0;right:0;text-align:center;padding:20px 0}.MyStock .custom-panel-wrap .btn-wrap .ui-button{margin:0 10px;line-height:40px;font-size:20px;min-width:120px}.MyStock .custom-panel-wrap .StockNews-NewsDetail{position:absolute;top:0;right:0;width:500px;height:100%;z-index:9000}.MyStock .widget-panel{border-width:1px;border-style:solid;height:100%;box-sizing:border-box}.MyStock .widget-panel.set-code{padding-top:40px}.MyStock .widget-panel.set-code .widget-panel-title{display:block}.MyStock .widget-panel .group{position:absolute;width:16px;height:16px;overflow:hidden;box-sizing:border-box;top:2px;right:2px;border-radius:0 0 0 100%;background:rgba(0,0,0,.5);text-align:right;padding:0 3px 0 0;font-size:12px;z-index:30;color:#fff}.MyStock .widget-panel .widget-panel-title{position:absolute;top:2px;left:2px;right:2px;line-height:40px;display:none;height:40px}.MyStock .widget-panel .widget-panel-title input{position:absolute;top:10px;left:20px;width:70px;height:20px;border-radius:10px;border:none;box-sizing:border-box;padding:0 10px;font-size:12px;vertical-align:top}.MyStock .widget-panel .widget-panel-title .name{display:block;padding:0 10px 0 100px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.MyStock .widget-panel .widget-panel-title .board-hk:before{display:inline-block;vertical-align:top;margin:13px 5px 0 0;content:'';width:18px;height:13px;background-image:url(" + i(69) + ");background-size:100%}.MyStock .widget-panel .widget-panel-head{position:absolute;top:2px;left:2px;right:2px;bottom:2px;z-index:3;cursor:move}.MyStock .widget-panel .widget-panel-head:after{display:block;content:'';width:100%;height:40px;opacity:.9}.MyStock .widget-panel .widget-panel-head .delete{position:absolute;z-index:2;right:20px;top:12px;width:15px;height:15px;cursor:pointer;background:none}.MyStock .widget-panel .widget-panel-head .delete:after,.MyStock .widget-panel .widget-panel-head .delete:before{position:absolute;content:'';background:#2c87f9;width:2px;height:18px;top:50%;left:50%;margin-left:-1px;margin-top:-9px}.MyStock .widget-panel .widget-panel-head .delete:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.MyStock .widget-panel .widget-panel-head .delete:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.MyStock .widget-panel .widget-panel-head h2{position:absolute;line-height:40px;font-size:14px;top:0;left:10px;z-index:2}.MyStock .widget-panel .widget-panel-body{position:relative;z-index:1;height:100%;box-sizing:border-box;border-width:1px;border-style:solid;overflow:hidden}.draggable .widget-panel-head{display:none}.draggable.edit .widget-panel-head{display:block}.draggable.edit .widget-panel-head .group{border-radius:100%;text-align:center;padding:0;width:18px;height:18px;line-height:18px;right:43px;top:11px}.MyStock .widget-panel.active:after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;box-shadow:inset 0 0 0 2px #2c87f9;z-index:2}.Popup.edit-panel-label{width:410px;height:255px}.Popup.edit-panel-label .panel-label-input{margin:50px 55px;position:relative}.Popup.edit-panel-label .panel-label-input input{width:100%;height:40px;line-height:40px;border:1px solid #ddd}.Popup.edit-panel-label .panel-label-input .err{position:absolute;left:0;top:-20px;color:red}.Popup.edit-panel-label .tips{text-align:center;padding:20px 0}.remove-panel{width:410px}.remove-panel p{padding:20px;text-align:center}.resizable>div{position:absolute}.resizable .resize-bottom,.resizable .resize-top{left:-3px;right:-3px;height:6px;cursor:ns-resize;z-index:4}.resizable .resize-left,.resizable .resize-right{top:-3px;bottom:-3px;width:6px;cursor:ew-resize;z-index:4}.resizable .resize-top{top:-3px}.resizable .resize-right{right:-3px}.resizable .resize-bottom{bottom:-3px}.resizable .resize-left{left:-3px}.resizable .resize-bl,.resizable .resize-br,.resizable .resize-tl,.resizable .resize-tr{width:6px;height:6px;z-index:4}.resizable .resize-tl{top:-3px;left:-3px;cursor:nwse-resize}.resizable .resize-tr{top:-3px;right:-3px;cursor:nesw-resize}.resizable .resize-br{bottom:-3px;right:-3px;cursor:nwse-resize}.resizable .resize-bl{bottom:-3px;left:-3px;cursor:nesw-resize}.Tabs-Bar-ToolBtns .mod-panel-label{border-width:1px;border-style:solid;outline:none;margin-right:10px}.custom-panel-popup{width:400px}.custom-panel-popup .tips{padding:20px;text-align:center}.MyStock .WidgetContainer{height:100%;outline:none}.MyStock .WidgetContainer>.toolbar{height:30px;line-height:30px}.MyStock .WidgetContainer>.toolbar input{width:5.4em;height:20px;margin-left:4px;text-align:center}.MyStock .WidgetContainer>.toolbar span.name{margin-left:10px}.MyStock .WidgetContainer>.toolbar span.board_hk:after{content:'';display:inline-block;vertical-align:-2px;margin-left:3px;width:18px;height:14px;background:url(" + i(65) + ") no-repeat 50%;background-size:cover}.MyStock .WidgetContainer>.content{height:calc(100% - 30px)}.MyStock .WidgetContainer>.content>*{height:100%}.MyStock .Combination{position:relative;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.MyStock .Combination .hk{vertical-align:top;height:18px;width:18px;display:inline-block;background:transparent url(" + i(65) + ") 50% no-repeat;background-size:18px auto;margin:9px 0 0 3px}.MyStock .Combination .wrapRight{height:100%;-ms-flex:1;flex:1}.MyStock .Combination .CombinationHead{display:-ms-flexbox;display:flex;height:40px;line-height:40px}.MyStock .Combination .CombinationHead i.ico{width:24px;height:24px;line-height:24px;cursor:pointer;margin-top:7px;vertical-align:top}.MyStock .Combination .CombinationHead .headleft,.MyStock .Combination .CombinationHead .headright{position:relative;-ms-flex:1;flex:1;display:inline-block;box-sizing:border-box}.MyStock .Combination .CombinationHead .headleft .name,.MyStock .Combination .CombinationHead .headright .name{position:absolute;left:10px}.MyStock .Combination .CombinationHead .op{height:40px;position:relative;width:100px;display:inline-block;right:8px;float:right}.MyStock .Combination .CombinationHead .headleft{min-width:631px;max-width:631px;border-right-width:1px;border-right-style:solid}.MyStock .Combination .CombinationHead .addicon,.MyStock .Combination .CombinationHead .combi-icon,.MyStock .Combination .CombinationHead .info,.MyStock .Combination .CombinationHead .vertical{cursor:pointer;height:40px;width:20px;display:inline-block;float:right;text-align:center}.MyStock .Combination .CombinationHead .addicon{right:50px;margin-right:15px}.MyStock .Combination .CombinationHead .info{right:10px;margin-right:10px}.MyStock .Combination .CombinationContent{display:-ms-flexbox;display:flex;width:100%;position:absolute;top:40px;left:0;right:0;bottom:0;box-sizing:border-box}.MyStock .Combination .CombinationContent .CombinationLeft{height:100%;overflow:hidden;position:relative;min-width:630px;max-width:630px;-ms-flex:1;flex:1;border-right-width:1px;border-right-style:solid}.MyStock .Combination .CombinationContent .CombinationLeft .CombinationListContent{width:631px;height:calc(100% - 40px);position:relative;overflow:hidden}.MyStock .Combination .CombinationContent .CombinationLeft .title .name{text-align:center}.MyStock .Combination .CombinationContent .CombinationLeft ul{width:630px}.MyStock .Combination .CombinationContent .CombinationLeft ul span{box-sizing:border-box;height:40px;min-width:80px;line-height:40px;text-align:center}.MyStock .Combination .CombinationContent .CombinationLeft ul .name{width:155px;text-align:left;text-indent:5px}.MyStock .Combination .CombinationContent .CombinationLeft ul .netvalue{width:75px}.MyStock .Combination .CombinationContent .CombinationLeft ul .favcount,.MyStock .Combination .CombinationContent .CombinationLeft ul .rank,.MyStock .Combination .CombinationContent .CombinationLeft ul .yield,.MyStock .Combination .CombinationContent .CombinationLeft ul .yield1d,.MyStock .Combination .CombinationContent .CombinationLeft ul .yield1m{width:80px}.MyStock .Combination .CombinationContent .CombinationRight{overflow:hidden;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex:1;flex:1}.MyStock .Combination .CombinationContent .CombinationRight .loader{top:15%;position:relative;margin:0 auto}.MyStock .Combination .CombinationContent .CombinationRight .secudesc{overflow:hidden;padding:10px;min-height:70px;box-sizing:border-box;border-bottom-width:3px;border-bottom-style:solid}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph{height:270px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate #compoment{width:100%;height:230px;margin-left:10px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .rate-compare{width:100%}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .rate-compare svg{position:relative}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .rate-compare svg .path{display:block;fill:none;stroke-width:1px;opacity:1}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .rate-compare svg .line{display:block;fill:none;stroke-width:.5px;opacity:1}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .rate-compare svg .xText,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .rate-compare svg .yText{font-size:11px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .rate-compare svg .baseline,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .rate-compare svg .portfolioline{fill:none;stroke-width:1px;opacity:1}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .title{height:40px;position:relative;display:-ms-flexbox;display:flex}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .clearfix{position:relative;margin:0}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .shift{text-align:center;margin-bottom:10px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .title_tabs{min-width:120px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .tabs{list-style:none;margin:0 auto;width:120px;border-radius:5px;height:100%;display:inline-block;position:relative;left:20px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .tabs li{cursor:pointer;color:#828282;float:left;margin-right:5px;border-width:1px;border-style:solid;border-radius:2px;padding:1px 10px;margin-top:10px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .shownamerate{height:40px;line-height:40px;-ms-flex:2;flex:2;overflow:hidden;text-align:right;margin-right:80px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .name_base,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .name_portfolio,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .ribbon_base,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .ribbon_portfolio{margin-right:8px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .portfolio_growth_rate{margin-right:50px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .ribbon_base,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetailGraph .combination-rate .ribbon_portfolio{width:13px;height:3px;display:inline-block;position:relative;top:-4px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;box-sizing:border-box;height:100%}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent{-ms-flex:1;flex:1;overflow:hidden;position:relative;box-sizing:border-box}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .Scrollbar{opacity:0}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent:hover .Scrollbar{opacity:.6}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList{-ms-flex:1;flex:1;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList>ul{-ms-flex-negative:0;flex-shrink:0}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList ul{min-width:600px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .ScrollbarMoveHeader{position:relative}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .title span,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .title span{border-top-width:1px;border-top-style:solid}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .title .code,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .title .name,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .title .reason,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .title .code,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .title .name,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .title .reason{text-align:center}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent ul,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList ul{margin-top:1px;margin-left:1px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent ul li,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList ul li{height:40px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent span,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList span{cursor:pointer;height:40px;line-height:40px;text-align:center;display:inline-block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .index,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .index{width:40px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .code,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .name,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .code,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .name{width:80px;text-align:left;text-indent:5px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .code span,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .code span{border:none}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .nowprice,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .price_rise,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .targetprice,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .tradingprice,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .nowprice,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .price_rise,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .targetprice,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .tradingprice{width:80px}.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .CombinationDetailList .reason,.MyStock .Combination .CombinationContent .CombinationRight .CombinationDetail .combinationDetailListContent .reason{width:calc(100% - 530px);text-align:left;text-indent:5px}.MyStock .Combination .CombinationContent .favcount,.MyStock .Combination .CombinationContent .name,.MyStock .Combination .CombinationContent .netvalue,.MyStock .Combination .CombinationContent .rank,.MyStock .Combination .CombinationContent .yield,.MyStock .Combination .CombinationContent .yield1d,.MyStock .Combination .CombinationContent .yield1m{display:inline-block;width:5em}.MyStock .Combination .CombinationContent li span{cursor:pointer;border-right-width:1px;border-right-style:solid;border-bottom-width:1px;border-bottom-style:solid;margin-left:-1px;margin-top:-1px}.MyStock .Combination .CombinationContent .favcount{border-right:none}.MyStock .Combination .CombinationContent .addpageleft,.MyStock .Combination .CombinationContent .addpageright{width:100%;height:100%;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.MyStock .Combination .CombinationContent .addpageleft .cross,.MyStock .Combination .CombinationContent .addpageleft .nocombination,.MyStock .Combination .CombinationContent .addpageright .cross,.MyStock .Combination .CombinationContent .addpageright .nocombination{display:block;height:100px;width:100px;margin:0 auto}.MyStock .Combination .combinationInstruction{width:630px;height:100%;z-index:99;display:inline-block;position:absolute;overflow:hidden;top:0;-ms-flex-direction:column;flex-direction:column}.MyStock .Combination .combinationInstruction .title{width:100%;height:40px;min-height:40px}.MyStock .Combination .combinationInstruction .title a{position:absolute;top:10px;right:10px;cursor:pointer}.MyStock .Combination .combinationInstruction div.instructionPic{height:890px;width:100%;background-repeat:no-repeat;background-position:50%}.ico-combi-add,.ico-combi-box,.ico-combi-cross,.ico-combi-delete,.ico-combi-edit,.ico-combi-info,.ico-combi-share,.ico-config,.ico-edit,.ico-view,.MyStock .Tabs-Bar .ico-list{text-align:center;cursor:pointer}.ico-combi-add:after,.ico-combi-box:after,.ico-combi-cross:after,.ico-combi-delete:after,.ico-combi-edit:after,.ico-combi-info:after,.ico-combi-share:after,.ico-config:after,.ico-edit:after,.ico-view:after,.MyStock .Tabs-Bar .ico-list:after{content:'';display:inline-block;vertical-align:middle}", ""]);
}, function(t, e) {
	t.exports = function() {
		var t = [];
		return t.toString = function() {
			for (var t = [], e = 0; e < this.length; e++) {
				var i = this[e];
				i[2] ? t.push("@media " + i[2] + "{" + i[1] + "}") : t.push(i[1])
			}
			return t.join("")
		}, t.i = function(e, i) {
			"string" == typeof e && (e = [
				[null, e, ""]
			]);
			for (var n = {}, o = 0; o < this.length; o++) {
				var a = this[o][0];
				"number" == typeof a && (n[a] = !0)
			}
			for (o = 0; o < e.length; o++) {
				var s = e[o];
				"number" == typeof s[0] && n[s[0]] || (i && !s[2] ? s[2] = i : i && (s[2] = "(" + s[2] + ") and (" + i + ")"), t.push(s))
			}
		}, t
	}
}, function(t, e) {
	t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAYAAADfcP5FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdEMjc2NTY5OTcwNjExRTVCMUFCRDgxN0JEREQ0RDM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdEMjc2NTZBOTcwNjExRTVCMUFCRDgxN0JEREQ0RDM4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0QyNzY1Njc5NzA2MTFFNUIxQUJEODE3QkRERDREMzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0QyNzY1Njg5NzA2MTFFNUIxQUJEODE3QkRERDREMzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6fa12GAAABY0lEQVR42mI0iJ/lycDAMBeIJRkGFjwH4mSmQeIYBqgb5jINEsfAHcXEMMjAqIPIdpCPqRzD+QWpYIwLwORBaonRZ6MpDpebVeI+sCEkzs/BUBJrA2a/ef+FoXb2wYF1UHagEYO8lBCY3ThrH8PLjz8GzkGgaPR10Aazl287x3Dk+suBS9SgqKpMdgSzT195xNC16uzA5rLmVHsGLg42vOmGbg6KdlBlMNWRI5hukAELMQbjy/r4QIK/CZwtL86HN+3QJYREBHkYHj57B3ccKD1RJYQME2aTFXKgHLX12B2GJS1hYMfFu2sPbKIGWX71yUeww0Ag0suIQVuGf+DrsoU7rzJ8+/ELzK5KtBt4B4Fy15LNkKjSUpZAqfsGrOqYvvUKPIHnR1kPjubHnPWn4bmvLMx44B205fQjcPUBAv5OOlgTOCOw1/F/tMVIwEHPB5F7XoAclAJiDALHPAV1FAECDAC1SnpDjf31iAAAAABJRU5ErkJggg=="
}, function(t, e) {
	t.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQEBAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL/2wBDAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL/wAARCAAUABYDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAABwgGCQr/xAAsEAABBAIABAQFBQAAAAAAAAAEAgMFBgEHAAgREwkUMkESFRYhMTZIUXeR/8QAFwEBAQEBAAAAAAAAAAAAAAAABgcFCP/EAC0RAAICAgEDAgQFBQAAAAAAAAIDAQQFEgYABxETFBUiJDEhIzI1NlFWdXa1/9oADAMBAAIRAxEAPwDcLvu8XimUaYxr6oTM7bp2HloOpzokxq+IgaxfJjDMDr5NiVsqdiEu4OlzRWRmQmJJb7iVDqY7rwzJLzt3gMDneQp+JXUVqdd6X3a5oyzrFvHo3sZL23wrH3ZCa9JDWMY9lUVhPqQegNYodzXMZfE4dvsarX2XKamq0G45SUXW6Io+v8QuVoL1bTVisFA+TL5NNzWLFxm7DzDVIEe0ts80pYNbma7N2tnZZ3h8RNKcocXPjG7GzLSdaNjzBcpg0yCxH0HitsmYHUS+0Ml1xNPoY3trmXFTkuIgy0izXplil9ynX4yLqzQxcKVaRZQ2JyBVhcEoaTEerClk6ViQK5e5xjUxYiOREKGodZG+fBl05prcsr3qsruS1f0cPlRC5cC3SWMhcFMPFWZY+dhApWTrM7TTSsEYerVkfrRU1HdktY7WTX6hIysdnvISl9vy57/Rp1GHu0/h1luCZSlXx180qt17yw11tVRtAhuwCU6DdrU7MaTMrL1a6/JgUhuvUysOPtOu0wYyu6qZbeUPKuTQ8GQxsVV9hE7xEGOjj+UogtT2ARVzDfoOA/vDlj9uv7k6nn24W9tv5HY/1/ln9P7WzPRvnP7Kn/Mce/7+N6TfYdZssdrjaR8hXZyPAF0b4q3mTDIqQEFH+st8g2Ood8l9vCUfNY5l0+O+JWPOhtOFC9xhCl4t/GctibPJ8QtdlDDLP9n9FraszL2PHbNW7qAlMz7SyYV7URH07zFTtGTAzKc7j76MDkmGhyxHD9yfJmsxGPd5lFirtJeIj3KAJ1fzP5qQI1eQjzFnSfx/HXPX/eOU466H6jtrqsDdoE+s2YHMjDSSg8kDoKNAfbfjzG5OONBkY1xkkYkYllokYkd1ogYhpp9hxt1tK8aOJzGRwGRXbqM9N6t9SkFsGRYs1NWxTRNTVNUZqapgEtqzJbBICmJz8njqeXqFXsBuo9fMQRAUEBwwDA1yLAYtgCa2AQmBjBDMTET0KF8uetDErFlCdqzse91QbDWTmA33Zq/KD5+7gM1XrBZSQTRnPS6KWO8O8jOUOtrTnOOGA9zuU1z2SOHrsHxo+rxvjlWyovM+GJtVsUqwhofdbUtBiy+YSiYiYNzwPj7R1YWSaE/qU/N5qwk4n7g1L8gxTVl48EtoGBxMwQz56PKfTjiex0zH8I6//9k="
}, function(t, e, i) {
	t.exports = i.p + "plugins/MyStock/images/sprite-1f4f08e2b8.png"
}, function(t, e, i) {
	t.exports = i.p + "plugins/MyStock/images/sprite@2x-3b0a3fc943.png"
}, function(t, e) {
	t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAYAAADfcP5FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdEMjc2NTY5OTcwNjExRTVCMUFCRDgxN0JEREQ0RDM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdEMjc2NTZBOTcwNjExRTVCMUFCRDgxN0JEREQ0RDM4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0QyNzY1Njc5NzA2MTFFNUIxQUJEODE3QkRERDREMzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0QyNzY1Njg5NzA2MTFFNUIxQUJEODE3QkRERDREMzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6fa12GAAABY0lEQVR42mI0iJ/lycDAMBeIJRkGFjwH4mSmQeIYBqgb5jINEsfAHcXEMMjAqIPIdpCPqRzD+QWpYIwLwORBaonRZ6MpDpebVeI+sCEkzs/BUBJrA2a/ef+FoXb2wYF1UHagEYO8lBCY3ThrH8PLjz8GzkGgaPR10Aazl287x3Dk+suBS9SgqKpMdgSzT195xNC16uzA5rLmVHsGLg42vOmGbg6KdlBlMNWRI5hukAELMQbjy/r4QIK/CZwtL86HN+3QJYREBHkYHj57B3ccKD1RJYQME2aTFXKgHLX12B2GJS1hYMfFu2sPbKIGWX71yUeww0Ag0suIQVuGf+DrsoU7rzJ8+/ELzK5KtBt4B4Fy15LNkKjSUpZAqfsGrOqYvvUKPIHnR1kPjubHnPWn4bmvLMx44B205fQjcPUBAv5OOlgTOCOw1/F/tMVIwEHPB5F7XoAclAJiDALHPAV1FAECDAC1SnpDjf31iAAAAABJRU5ErkJggg=="
}, function(t, e, i) {
	function n(t, e) {
		for (var i = 0; i < t.length; i++) {
			var n = t[i],
				o = u[n.id];
			if (o) {
				o.refs++;
				for (var a = 0; a < o.parts.length; a++) o.parts[a](n.parts[a]);
				for (; a < n.parts.length; a++) o.parts.push(r(n.parts[a], e))
			} else {
				for (var s = [], a = 0; a < n.parts.length; a++) s.push(r(n.parts[a], e));
				u[n.id] = {
					id: n.id,
					refs: 1,
					parts: s
				}
			}
		}
	}
	function o(t) {
		for (var e = [], i = {}, n = 0; n < t.length; n++) {
			var o = t[n],
				a = o[0],
				s = o[1],
				r = o[2],
				l = o[3],
				c = {
					css: s,
					media: r,
					sourceMap: l
				};
			i[a] ? i[a].parts.push(c) : e.push(i[a] = {
				id: a,
				parts: [c]
			})
		}
		return e
	}
	function a() {
		var t = document.createElement("style"),
			e = f();
		return t.type = "text/css", e.appendChild(t), t
	}
	function s() {
		var t = document.createElement("link"),
			e = f();
		return t.rel = "stylesheet", e.appendChild(t), t
	}
	function r(t, e) {
		var i, n, o;
		if (e.singleton) {
			var r = g++;
			i = m || (m = a()), n = l.bind(null, i, r, !1), o = l.bind(null, i, r, !0)
		} else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = s(), n = d.bind(null, i), o = function() {
			i.parentNode.removeChild(i), i.href && URL.revokeObjectURL(i.href)
		}) : (i = a(), n = c.bind(null, i), o = function() {
			i.parentNode.removeChild(i)
		});
		return n(t), function(e) {
			if (e) {
				if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
				n(t = e)
			} else o()
		}
	}
	function l(t, e, i, n) {
		var o = i ? "" : n.css;
		if (t.styleSheet) t.styleSheet.cssText = b(e, o);
		else {
			var a = document.createTextNode(o),
				s = t.childNodes;
			s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(a, s[e]) : t.appendChild(a)
		}
	}
	function c(t, e) {
		var i = e.css,
			n = e.media;
		e.sourceMap;
		if (n && t.setAttribute("media", n), t.styleSheet) t.styleSheet.cssText = i;
		else {
			for (; t.firstChild;) t.removeChild(t.firstChild);
			t.appendChild(document.createTextNode(i))
		}
	}
	function d(t, e) {
		var i = e.css,
			n = (e.media, e.sourceMap);
		n && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
		var o = new Blob([i], {
			type: "text/css"
		}),
			a = t.href;
		t.href = URL.createObjectURL(o), a && URL.revokeObjectURL(a)
	}
	var u = {},
		p = function(t) {
			var e;
			return function() {
				return "undefined" == typeof e && (e = t.apply(this, arguments)), e
			}
		},
		h = p(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
		}),
		f = p(function() {
			return document.head || document.getElementsByTagName("head")[0]
		}),
		m = null,
		g = 0;
	t.exports = function(t, e) {
		e = e || {}, "undefined" == typeof e.singleton && (e.singleton = h());
		var i = o(t);
		return n(i, e), function(t) {
			for (var a = [], s = 0; s < i.length; s++) {
				var r = i[s],
					l = u[r.id];
				l.refs--, a.push(l)
			}
			if (t) {
				var c = o(t);
				n(c, e)
			}
			for (var s = 0; s < a.length; s++) {
				var l = a[s];
				if (0 === l.refs) {
					for (var d = 0; d < l.parts.length; d++) l.parts[d]();
					delete u[l.id]
				}
			}
		}
	};
	var b = function() {
			var t = [];
			return function(e, i) {
				return t[e] = i, t.filter(Boolean).join("\n")
			}
		}()
}]);