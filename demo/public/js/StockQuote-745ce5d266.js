!
function(e) {
	function t(i) {
		if (a[i]) return a[i].exports;
		var l = a[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return e[i].call(l.exports, l, l.exports, t), l.loaded = !0, l.exports
	}
	var a = {};
	return t.m = e, t.c = a, t.p = "", t(0)
}([function(e, t, a) {
	e.exports = a(1)
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	var l = a(2),
		n = i(l),
		o = a(3),
		r = i(o),
		s = a(11),
		c = i(s),
		u = a(13),
		d = i(u),
		p = a(14),
		h = i(p),
		f = a(18),
		m = i(f),
		k = a(46),
		g = i(k),
		S = a(49),
		b = a(28),
		v = a(53),
		y = a(57),
		x = i(y),
		w = a(56),
		E = a(27),
		I = i(E),
		T = a(43),
		M = i(T),
		N = a(50),
		D = i(N),
		C = a(68),
		L = i(C),
		P = a(71),
		B = i(P);
	a(72), n.
default.register({
		id: r.
	default.PluginId,
		title:
		r.
	default.Lang("Quote"),
		preview:
		"index2"
	}, h.
default), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockListId,
		title:
		r.
	default.Lang("MyStock"),
		type:
		1
	}, m.
default), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		"Filter",
		title: r.
	default.Lang("MyStock"),
		type:
		1
	}, g.
default), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.QuoteListId,
		type:
		1,
		tags: ["quote"],
		defaultSize: [483, 679],
		title: r.
	default.Lang("Quote"),
		preview:
		"./plugins/" + r.
	default.PluginId + "/images/quote_thumb_$skin.jpg",
		desc:
		"指数、沪A、沪B、深A，沪A、债券、A股、B股、中小板、创业板、基金、港股。支持涨跌幅、涨跌、现价等列表字段排序。"
	}, S.QuoteListPanel), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockTimeSeriesWrapId,
		type:
		1,
		defaultSize: [370, 338],
		title: r.
	default.Lang("TimeSeries"),
		preview:
		"./plugins/" + r.
	default.PluginId + "/images/timeseries_thumb_$skin.jpg",
		tags:
		["graph", "stock"],
		desc: "数据动态更新、支持均价、成交量功能。适用于小空间区域。"
	}, b.StockTimeSeriesWrap), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockTickFiveId,
		type:
		1,
		defaultSize: [240, 378],
		title: r.
	default.Lang("StockTickFive"),
		preview:
		"./plugins/" + r.
	default.PluginId + "/images/five_thumb_$skin.jpg",
		tags:
		["other", "stock"],
		desc: "个股买、卖五档，涨跌停价，数据动态更新。支持右键快速买卖。"
	}, v.StockTickFive), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockTickDuelId,
		type:
		1,
		defaultSize: [240, 338],
		title: r.
	default.Lang("StockTickDuel"),
		preview:
		"./plugins/" + r.
	default.PluginId + "/images/duel_thumb_$skin.jpg",
		tags:
		["other", "stock"],
		desc: "个股、指数成交明细，数据动态更新。支持双击查看全部成交明细。"
	}, v.StockTickDuel), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockTickDuelAllId,
		type:
		1,
		title: r.
	default.Lang("StockTickDuel")
	}, v.StockTickDuelAll), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockGraphId,
		type:
		1,
		defaultSize: [483, 338],
		title: r.
	default.Lang("Graph"),
		preview:
		"./plugins/" + r.
	default.PluginId + "/images/graph_thumb_$skin.jpg",
		tags:
		["graph", "stock"],
		desc: "包含：分时、日K、多日、周K、月K、5分、15分、60分等图形以及全部功能。"
	}, x.
default), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockBriefPanelId,
		type:
		1,
		defaultSize: [630, 110],
		title: r.
	default.Lang("StockBriefPanel"),
		preview:
		"./plugins/" + r.
	default.PluginId + "/images/brief_thumb_$skin.jpg",
		tags:
		["index", "stock"]
	}, w.StockBriefPanel), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockBriefLinesPanelId,
		type:
		1,
		defaultSize: [840, 138],
		title: r.
	default.Lang("StockBriefLinesPanel"),
		preview:
		"./plugins/" + r.
	default.PluginId + "/images/brief2_thumb_$skin.jpg",
		tags:
		["index", "stock"]
	}, w.StockBriefLinesPanel), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.MiniDetailId,
		type:
		1,
		title: r.
	default.Lang("Mini Stock Detail")
	}, I.
default), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.PlateAsideId,
		type:
		1,
		title: r.
	default.Lang("Plate Aside")
	}, M.
default), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockDetailId,
		type:
		1,
		title: r.
	default.Lang("Stock Detail")
	}, D.
default), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockWatcherId,
		type:
		2,
		title: "大盘指数"
	}, L.
default), n.
default.register({
		id: r.
	default.PluginId,
		subId:
		r.
	default.StockSearchId,
		type:
		2,
		title: r.
	default.Lang("Stock Search")
	}, B.
default), d.
default.register("openDetail", c.
default.openDetail)
}, function(e, t) {
	e.exports = require("hippo/PluginStore")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
		return t.
	default = e, t
	}
	function l(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(4),
		o = l(n),
		r = a(5),
		s = i(r),
		c = a(6),
		u = a(7),
		d = s.lang(function(e) {
			return a(8)("./" + e)
		}),
		p = "StockQuote",
		h = {
			PluginId: p,
			StockListId: "StockList",
			StockDetailId: "StockDetail",
			StockGraphId: "StockGraph",
			StockTimeSeriesWrapId: "StockTimeSeriesWrap",
			InfluxId: "Influx",
			MiniDetailId: "MiniDetail",
			StockTickFiveId: "StockTickFive",
			StockTickDuelId: "StockTickDuel",
			StockTickDuelAllId: "StockTickDuelAll",
			QuoteListId: "QuoteList",
			PlateAsideId: "PlateAside",
			StockBriefPanelId: "StockBriefPanel",
			StockBriefLinesPanelId: "StockBriefLinesPanel",
			StockSearchId: "StockSearch",
			StockWatcherId: "StockWatcher",
			StockNotify: "StockNotify",
			Lang: d,
			ActionTypes: (0, c.enums)({
				OPEN_PLATE_DETAIL: null,
				OPEN_AVERANGE_CONF: null,
				OPEN_INTER_STATIS: null,
				OPEN_STOCK_WARN: null,
				OPEN_INDEX_MANAGER: null,
				OPEN_INDEX_SET: null,
				OPEN_OVERLAY_SEARCH: null
			}, p),
			fiveItemMenu: {
				buy: [d("GeneBuy"), d("CollBuy"), d("FinaBuy")],
				sell: [d("GeneSell"), d("CollSell"), d("MargSell")]
			},
			averangeConf: {
				line1: {
					hide: !1,
					period: 5,
					color: "499aff"
				},
				line2: {
					hide: !1,
					period: 10,
					color: "e74431"
				},
				line3: {
					hide: !1,
					period: 20,
					color: "8b3cd5"
				},
				line4: {
					hide: !1,
					period: 60,
					color: "facc16"
				},
				line5: {
					hide: !1,
					period: 120,
					color: "69ae2f"
				}
			},
			drawlineSchema: {
				type: "array",
				items: [{
					type: "object",
					properties: {
						id: {
							type: "number"
						},
						del: {
							type: "number"
						},
						market: {
							type: "string"
						},
						code: {
							type: "string"
						},
						type: {
							type: "string"
						},
						period: {
							type: "string"
						},
						area: {
							type: "string"
						},
						linetype: {
							type: "string"
						},
						pointarr: {
							type: "array",
							items: [{
								type: "object",
								properties: {
									time: {
										type: "string"
									}
								},
								required: ["time"]
							}]
						},
						text: {
							type: "string"
						},
						size: {
							type: "string"
						},
						color: {
							type: "string"
						}
					},
					required: ["id", "del", "market", "code", "type", "period", "area", "linetype", "pointarr", "text", "size", "color"]
				}]
			},
			indexConfSchema: {
				type: "array",
				items: [{
					type: "object",
					properties: {
						name: {
							type: "string"
						},
						line: {
							type: "array",
							items: [{
								type: "object",
								properties: {
									name: {
										type: "string"
									},
									color: {
										type: "string"
									},
									hide: {
										type: "boolean"
									}
								},
								required: ["name", "color", "hide"]
							}]
						},
						param: {
							type: "array",
							items: [{
								type: "object",
								properties: {
									name: {
										type: "string"
									},
									value: {
										type: "number"
									}
								},
								required: ["name", "value"]
							}]
						}
					},
					required: ["name", "line", "param"]
				}]
			},
			indexConf: [{
				name: "MA",
				line: [{
					name: "MA1",
					color: "499aff",
					hide: !1
				}, {
					name: "MA2",
					color: "e74431",
					hide: !1
				}, {
					name: "MA3",
					color: "8b3cd5",
					hide: !1
				}, {
					name: "MA4",
					color: "facc16",
					hide: !1
				}, {
					name: "MA5",
					color: "69ae2f",
					hide: !1
				}],
				param: [{
					name: "M1",
					value: 5
				}, {
					name: "M2",
					value: 10
				}, {
					name: "M3",
					value: 20
				}, {
					name: "M4",
					value: 60
				}, {
					name: "M5",
					value: 120
				}]
			}, {
				name: "BOLL",
				line: [{
					name: "MID",
					color: "499aff",
					hide: !1
				}, {
					name: "UPPER",
					color: "e74431",
					hide: !1
				}, {
					name: "LOWER",
					color: "8b3cd5",
					hide: !1
				}],
				param: [{
					name: "M",
					value: 20
				}]
			}, {
				name: "MACD",
				line: [{
					name: "DIF",
					color: "499aff",
					hide: !1
				}, {
					name: "DEA",
					color: "ffcb00",
					hide: !1
				}, {
					name: "MACD",
					color: "8b3cd5",
					hide: !1
				}],
				param: [{
					name: "SHORT",
					value: 12
				}, {
					name: "LONG",
					value: 26
				}, {
					name: "MID",
					value: 9
				}]
			}, {
				name: "KDJ",
				line: [{
					name: "K",
					color: "499aff",
					hide: !1
				}, {
					name: "D",
					color: "5dddf1",
					hide: !1
				}, {
					name: "J",
					color: "c364d6",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 9
				}, {
					name: "M1",
					value: 3
				}, {
					name: "M2",
					value: 3
				}]
			}, {
				name: "VOL",
				line: [{
					name: "VOL",
					color: "499aff",
					hide: !1
				}, {
					name: "VOLMA1",
					color: "e74431",
					hide: !1
				}, {
					name: "VOLMA2",
					color: "8b3cd5",
					hide: !1
				}, {
					name: "VOLMA3",
					color: "facc16",
					hide: !1
				}],
				param: [{
					name: "M1",
					value: 5
				}, {
					name: "M2",
					value: 10
				}, {
					name: "M3",
					value: 20
				}]
			}, {
				name: "ARBR",
				line: [{
					name: "AR",
					color: "499aff",
					hide: !1
				}, {
					name: "BR",
					color: "e74431",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 26
				}]
			}, {
				name: "DMA",
				line: [{
					name: "DDD",
					color: "499aff",
					hide: !1
				}, {
					name: "DDDMA",
					color: "e74431",
					hide: !1
				}],
				param: [{
					name: "N1",
					value: 10
				}, {
					name: "N2",
					value: 50
				}, {
					name: "M",
					value: 10
				}]
			}, {
				name: "DMI",
				line: [{
					name: "PDI",
					color: "499aff",
					hide: !1
				}, {
					name: "MDI",
					color: "e74431",
					hide: !1
				}, {
					name: "ADX",
					color: "8b3cd5",
					hide: !1
				}, {
					name: "ADXR",
					color: "69ae2f",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 14
				}, {
					name: "MM",
					value: 6
				}]
			}, {
				name: "RSI",
				line: [{
					name: "RSI1",
					color: "499aff",
					hide: !1
				}, {
					name: "RSI2",
					color: "e74431",
					hide: !1
				}, {
					name: "RSI3",
					color: "8b3cd5",
					hide: !1
				}],
				param: [{
					name: "N1",
					value: 6
				}, {
					name: "N2",
					value: 12
				}, {
					name: "N3",
					value: 24
				}]
			}, {
				name: "CR",
				line: [{
					name: "CR",
					color: "499aff",
					hide: !1
				}, {
					name: "MA1",
					color: "e74431",
					hide: !1
				}, {
					name: "MA2",
					color: "8b3cd5",
					hide: !1
				}, {
					name: "MA3",
					color: "69ae2f",
					hide: !1
				}, {
					name: "MA4",
					color: "fd00fd",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 26
				}, {
					name: "M1",
					value: 10
				}, {
					name: "M2",
					value: 20
				}, {
					name: "M3",
					value: 40
				}, {
					name: "M4",
					value: 62
				}]
			}, {
				name: "VR",
				line: [{
					name: "VR",
					color: "499aff",
					hide: !1
				}, {
					name: "MAVR",
					color: "e74431",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 26
				}, {
					name: "M",
					value: 6
				}]
			}, {
				name: "EMV",
				line: [{
					name: "EMV",
					color: "499aff",
					hide: !1
				}, {
					name: "MAEMV",
					color: "e74431",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 14
				}, {
					name: "M",
					value: 9
				}]
			}, {
				name: "MTM",
				line: [{
					name: "MTM",
					color: "499aff",
					hide: !1
				}, {
					name: "MTMMA",
					color: "e74431",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 12
				}, {
					name: "M",
					value: 6
				}]
			}, {
				name: "CCI",
				line: [{
					name: "CCI",
					color: "499aff",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 14
				}]
			}, {
				name: "SAR",
				line: [{
					name: "SAR",
					color: "499aff",
					hide: !1
				}],
				param: [{
					name: "NA",
					value: 4
				}, {
					name: "NB",
					value: 2
				}, {
					name: "NC",
					value: 20
				}]
			}, {
				name: "BIAS",
				line: [{
					name: "BIAS1",
					color: "499aff",
					hide: !1
				}, {
					name: "BIAS2",
					color: "e74431",
					hide: !1
				}, {
					name: "BIAS3",
					color: "8b3cd5",
					hide: !1
				}],
				param: [{
					name: "N1",
					value: 6
				}, {
					name: "N2",
					value: 12
				}, {
					name: "N3",
					value: 24
				}]
			}, {
				name: "PSY",
				line: [{
					name: "PSY",
					color: "499aff",
					hide: !1
				}, {
					name: "MAPSY",
					color: "e74431",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 12
				}, {
					name: "M",
					value: 6
				}]
			}, {
				name: "WR",
				line: [{
					name: "WR1",
					color: "499aff",
					hide: !1
				}, {
					name: "WR2",
					color: "e74431",
					hide: !1
				}],
				param: [{
					name: "N1",
					value: 10
				}, {
					name: "N2",
					value: 6
				}]
			}, {
				name: "OSC",
				line: [{
					name: "OSC",
					color: "499aff",
					hide: !1
				}, {
					name: "MAOSC",
					color: "e74431",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 20
				}, {
					name: "M",
					value: 6
				}]
			}, {
				name: "ROC",
				line: [{
					name: "ROC",
					color: "499aff",
					hide: !1
				}, {
					name: "MAROC",
					color: "e74431",
					hide: !1
				}],
				param: [{
					name: "N",
					value: 12
				}, {
					name: "M",
					value: 6
				}]
			}],
			defaultIndex: [{
				label: "MA",
				name: "移动平均线",
				hide: !1
			}, {
				label: "BOLL",
				name: "布林线",
				hide: !1
			}, {
				label: "MACD",
				name: "平滑异动平均",
				hide: !1
			}, {
				label: "KDJ",
				name: "随机指标",
				hide: !1
			}, {
				label: "VOL",
				name: "成交量",
				hide: !1
			}, {
				label: "ARBR",
				name: "情绪指标",
				hide: !1
			}, {
				label: "DMA",
				name: "平均差",
				hide: !1
			}, {
				label: "DMI",
				name: "趋向指标",
				hide: !1
			}, {
				label: "RSI",
				name: "相对强弱指标",
				hide: !1
			}, {
				label: "CR",
				name: "带状能量线",
				hide: !0
			}, {
				label: "VR",
				name: "成交量变异率",
				hide: !0
			}, {
				label: "EMV",
				name: "简易波动指标",
				hide: !0
			}, {
				label: "MTM",
				name: "动量线",
				hide: !0
			}, {
				label: "CCI",
				name: "商品路径指标",
				hide: !0
			}, {
				label: "SAR",
				name: "抛物线指标",
				hide: !0
			}, {
				label: "BIAS",
				name: "乖离率",
				hide: !0
			}, {
				label: "PSY",
				name: "心理线",
				hide: !0
			}, {
				label: "WR",
				name: "威廉指标",
				hide: !0
			}, {
				label: "OSC",
				name: "变动速率线",
				hide: !0
			}, {
				label: "ROC",
				name: "变动率指标",
				hide: !0
			}],
			stockBriefList: [{
				title: "open",
				label: "今开",
				hide: !1
			}, {
				title: "close",
				label: "昨收",
				hide: !1
			}, {
				title: "high",
				label: "最高",
				hide: !1
			}, {
				title: "low",
				label: "最低",
				hide: !1
			}, {
				title: "volume",
				label: "成交量",
				hide: !1
			}, {
				title: "amount",
				label: "成交额",
				hide: !1
			}, {
				title: "handover",
				label: "换手",
				hide: !1
			}, {
				title: "amplitude",
				label: "振幅",
				hide: !1
			}, {
				title: "total_capital",
				label: "总股本",
				hide: !1
			}, {
				title: "share_capital",
				label: "流通股",
				hide: !1
			}, {
				title: "total_value",
				label: "总市值",
				hide: !1
			}, {
				title: "share_value",
				label: "流通值",
				hide: !1
			}, {
				title: "pe",
				label: "市盈",
				hide: !1
			}, {
				title: "income",
				label: "收益",
				hide: !1
			}, {
				title: "in",
				label: "内盘",
				hide: !1
			}, {
				title: "out",
				label: "外盘",
				hide: !1
			}, {
				title: "cittthan",
				label: "委比",
				hide: !1
			}, {
				title: "cittdiff",
				label: "委差",
				hide: !1
			}],
			stockBriefList_index: [{
				title: "open",
				label: "今开",
				hide: !1
			}, {
				title: "close",
				label: "昨收",
				hide: !1
			}, {
				title: "high",
				label: "最高",
				hide: !1
			}, {
				title: "low",
				label: "最低",
				hide: !1
			}, {
				title: "volume",
				label: "成交量",
				hide: !1
			}, {
				title: "amount",
				label: "成交额",
				hide: !1
			}, {
				title: "handover",
				label: "换手",
				hide: !1
			}, {
				title: "amplitude",
				label: "振幅",
				hide: !1
			}, {
				title: "in",
				label: "内盘",
				hide: !1
			}, {
				title: "out",
				label: "外盘",
				hide: !1
			}, {
				title: "risenum",
				label: "上涨",
				hide: !1
			}, {
				title: "pe",
				label: "市盈",
				hide: !1
			}, {
				title: "fallnum",
				label: "下跌",
				hide: !1
			}, {
				title: "equal",
				label: "平盘",
				hide: !1
			}],
			stockBriefList_plate: [{
				title: "open",
				label: "今开",
				hide: !1
			}, {
				title: "close",
				label: "昨收",
				hide: !1
			}, {
				title: "high",
				label: "最高",
				hide: !1
			}, {
				title: "low",
				label: "最低",
				hide: !1
			}, {
				title: "volume",
				label: "成交量",
				hide: !1
			}, {
				title: "amount",
				label: "成交额",
				hide: !1
			}, {
				title: "handover",
				label: "换手",
				hide: !1
			}, {
				title: "amplitude",
				label: "振幅",
				hide: !1
			}, {
				title: "speed",
				label: "涨速",
				hide: !1
			}, {
				title: "volrate",
				label: "量比",
				hide: !1
			}, {
				title: "fiveday",
				label: "5日涨跌",
				hide: !1
			}, {
				title: "average",
				label: "平均价",
				hide: !1
			}, {
				title: "total_value",
				label: "总市值",
				hide: !1
			}, {
				title: "total_share",
				label: "总流通",
				hide: !1
			}, {
				title: "risenum",
				label: "上涨",
				hide: !1
			}, {
				title: "fallnum",
				label: "下跌",
				hide: !1
			}],
			WarnConf: {
				openPersent: {
					work: !0,
					num: "5.00"
				},
				riseTo: {
					work: !0,
					num: null
				},
				fallTo: {
					work: !0,
					num: null
				},
				min5Persent: {
					work: !0,
					num: "1.00"
				},
				handOver: {
					work: !0,
					num: "1.00"
				},
				singleVolume: {
					work: !0,
					num: "200"
				},
				freqType: "once"
			},
			settingsItemHeight: 37,
			defaultColumns: o.
		default.map((0, u.heads)(!1), function(e) {
				return {
					label: e.label,
					hide: !1
				}
			}),
			plateFilters:
			[{
				title: "行业",
				type: "Board",
				subType: "BK_SECTOR",
				label: "行业",
				hide: !1
			}, {
				title: "地区",
				type: "Board",
				subType: "BK_REGION",
				label: "地区",
				hide: !1
			}, {
				title: "概念",
				type: "Board",
				subType: "BK_CONCEPT",
				label: "概念",
				hide: !1
			}],
			quoteFilters: [{
				title: "指数",
				type: "Board",
				subType: "BK_INDEX",
				label: "指数",
				hide: !1
			}, {
				title: "沪A",
				type: "Board",
				subType: "BK_SH_A",
				label: "沪A",
				hide: !1
			}, {
				title: "沪B",
				type: "Board",
				subType: "BK_SH_B",
				label: "沪B",
				hide: !1
			}, {
				title: "深A",
				type: "Board",
				subType: "BK_SZ_A",
				label: "深A",
				hide: !1
			}, {
				title: "深B",
				type: "Board",
				subType: "BK_SZ_B",
				label: "深B",
				hide: !1
			}, {
				title: "债券",
				type: "Board",
				subType: "BK_BOND",
				label: "债券",
				hide: !1
			}, {
				title: "A股",
				type: "Board",
				subType: "BK_A",
				label: "A股",
				hide: !1
			}, {
				title: "B股",
				type: "Board",
				subType: "BK_B",
				label: "B股",
				hide: !1
			}, {
				title: "中小板",
				type: "Board",
				subType: "BK_SMALL",
				label: "中小板",
				hide: !1
			}, {
				title: "创业板",
				type: "Board",
				subType: "BK_GROWTH",
				label: "创业板",
				hide: !1
			}, {
				title: "基金",
				type: "Board",
				subType: "BK_FUND",
				label: "基金",
				hide: !1
			}, {
				title: "港股",
				type: "Board",
				subType: "BK_GGT",
				label: "港股",
				hide: !1
			}],
			stockItemMenu: function() {
				var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
					t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
					a = [d(t ? "Delete" : "Add"), d("View")],
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
				return e ? a.concat(i) : a
			},
			noneditableStockItemMenu: [d("View"), "__seperator__",
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
			plateItemMenu: function(e, t) {
				return [d(t ? "Delete" : "Add"), "设置预警"]
			},
			stockWatcherDefaultItems: [{
				market: "sh",
				code: "000001",
				name: "上证指数"
			}, {
				market: "sz",
				code: "399001",
				name: "深证成指"
			}, {
				market: "sz",
				code: "399006",
				name: "创业板"
			}],
			editorIndexes: [{
				market: "sz",
				code: "399108",
				name: "深证Ｂ指"
			}, {
				market: "sz",
				code: "399107",
				name: "深证Ａ指"
			}, {
				market: "sz",
				code: "399106",
				name: "深证综指"
			}, {
				market: "sz",
				code: "399008",
				name: "中小300"
			}, {
				market: "sz",
				code: "399007",
				name: "深证300"
			}, {
				market: "sz",
				code: "399006",
				name: "创业板指"
			}, {
				market: "sz",
				code: "399005",
				name: "中小板指"
			}, {
				market: "sz",
				code: "399004",
				name: "深证100R"
			}, {
				market: "sz",
				code: "399001",
				name: "深证成指"
			}, {
				market: "sh",
				code: "000906",
				name: "中证800"
			}, {
				market: "sh",
				code: "000905",
				name: "中证500"
			}, {
				market: "sh",
				code: "000903",
				name: "中证100"
			}, {
				market: "sh",
				code: "000300",
				name: "沪深300"
			}, {
				market: "sh",
				code: "000133",
				name: "上证150"
			}, {
				market: "sh",
				code: "000132",
				name: "上证100"
			}, {
				market: "sh",
				code: "000016",
				name: "上证50"
			}, {
				market: "sh",
				code: "000010",
				name: "上证180"
			}, {
				market: "sh",
				code: "000009",
				name: "上证380"
			}, {
				market: "sh",
				code: "000003",
				name: "Ｂ股指数"
			}, {
				market: "sh",
				code: "000002",
				name: "Ａ股指数"
			}, {
				market: "sh",
				code: "000001",
				name: "上证指数"
			}]
		};
	t.
default = h, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/lib/underscore")
}, function(e, t) {
	e.exports = require("hippo/i18n")
}, function(e, t) {
	e.exports = require("hippo/utils")
}, function(e, t) {
	e.exports = require("hippo/components/Grid")
}, function(e, t, a) {
	function i(e) {
		return a(l(e))
	}
	function l(e) {
		return n[e] ||
		function() {
			throw new Error("Cannot find module '" + e + "'.")
		}()
	}
	var n = {
		"./zh-cn": 9,
		"./zh-cn.js": 9,
		"./zh-hk": 10,
		"./zh-hk.js": 10
	};
	i.keys = function() {
		return Object.keys(n)
	}, i.resolve = l, e.exports = i, i.id = 8
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		Abort: "取消",
		Add: "添加自选",
		Bottom: "置底",
		Buy: "买入",
		CollBuy: "担保品买入",
		CollSell: "担保品卖出",
		Delete: "删除自选",
		Direct: "复权",
		"Direct-1": "不复权",
		"Direct-2": "前复权",
		"Direct-3": "后复权",
		Down: "下移",
		DrawLineTool: "画线工具",
		DrawText: "添加文字",
		FinaBuy: "融资买入",
		GeneBuy: "普通买入",
		GeneSell: "普通卖出",
		Graph: "图形",
		Hint: "提示",
		IndexWarn: "指数预警",
		Influx: "资金流向",
		KLine: "K线",
		KlineStyle: "主图设置",
		"KlineStyle-1": "空心阳线",
		"KlineStyle-2": "实心阳线",
		"KlineStyle-3": "美国线",
		"KlineStyle-4": "收盘价线",
		MargSell: "融券卖出",
		"Mini Stock Detail": "mini行情",
		Move: "移动",
		Next: "后移",
		Plate: "板块",
		"Plate Aside": "板块边栏",
		PlateDetail: "板块详情",
		Prev: "前移",
		Quote: "行情",
		Reset: "重置",
		Save: "确定",
		Sell: "卖出",
		Settings: "设置",
		"Stock Item": "个股",
		StockAverangeConf: "均线设置",
		StockBriefLinesPanel: "多行",
		StockBriefPanel: "两行",
		StockDetail: "个股详情",
		StockIndexMng: "指标管理",
		StockIndexSet: "指标设置",
		StockBriefSet: "个股指标设置",
		StockInterStatis: "K线区间统计",
		StockSectionStatis: "区间统计",
		StockSectionZoomout: "区间放大",
		StockKlineMove: "曲线平移",
		StockOverlay: "品种叠加",
		StockSearch: "股票搜索",
		StockTickDuel: "成交明细",
		StockTickFive: "五档",
		StockWarn: "个股预警",
		Stopped: "已停牌",
		TimeSeries: "分时",
		Top: "置顶",
		Up: "上移",
		View: "查看详情"
	}, e.exports = t.
default
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		Abort: "取消",
		Add: "添加自選",
		Bottom: "置底",
		Buy: "買入",
		CollBuy: "擔保品買入",
		CollSell: "擔保品賣出",
		Delete: "刪除自選",
		Direct: "復權",
		"Direct-1": "不復權",
		"Direct-2": "前復權",
		"Direct-3": "後復權",
		Down: "下移",
		DrawLineTool: "畫線工具",
		DrawText: "添加文字",
		FinaBuy: "融資買入",
		GeneBuy: "普通買入",
		GeneSell: "普通賣出",
		Graph: "圖形",
		Hint: "提示",
		IndexWarn: "指數預警",
		Influx: "資金流向",
		KLine: "K線",
		KlineStyle: "主圖設置",
		"KlineStyle-1": "空心陽線",
		"KlineStyle-2": "實心陽線",
		"KlineStyle-3": "美國線",
		"KlineStyle-4": "收盤價線",
		MargSell: "融券賣出",
		"Mini Stock Detail": "mini行情",
		Move: "移動",
		Next: "後移",
		Plate: "板塊",
		"Plate Aside": "板塊邊欄",
		PlateDetail: "板塊詳情",
		Prev: "前移",
		Quote: "行情",
		Reset: "重置",
		Save: "確定",
		Sell: "賣出",
		Settings: "設置",
		"Stock Item": "個股",
		StockAverangeConf: "均線設置",
		StockBriefLinesPanel: "多行",
		StockBriefPanel: "兩行",
		StockDetail: "個股詳情",
		StockIndexMng: "指標管理",
		StockIndexSet: "指標設置",
		StockInterStatis: "K線區間統計",
		StockOverlay: "品種疊加",
		StockSearch: "股票搜索",
		StockTickDuel: "成交明細",
		StockTickFive: "五檔",
		StockWarn: "個股預警",
		Stopped: "已停牌",
		TimeSeries: "分時",
		Top: "置頂",
		Up: "上移",
		View: "查看詳情"
	}, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(12),
		n = i(l),
		o = a(3),
		r = i(o);
	t.
default = {
		openDetail: function(e, t, a, i, l, o, r, s) {
			n.
		default.handlePluginAction({
				type: "MyStock:OPEN_STOCK_DETAIL",
				id: o,
				market: e,
				code: t,
				name: a,
				star: i,
				gridType: l,
				subtype: r,
				url: s
			})
		},
		openPlateDatail: function(e, t, a, i, l, o) {
			n.
		default.handlePluginAction({
				type: r.
			default.ActionTypes.OPEN_PLATE_DETAIL,
				market:
				e,
				code: t,
				name: a,
				star: i,
				gridType: l,
				subType: o
			})
		},
		addStock: function(e, t, a) {
			n.
		default.handlePluginAction({
				type: "MyStock:ADD_STOCK",
				code: t,
				market: e,
				name: a
			})
		},
		visitStock: function(e, t, a) {
			n.
		default.handlePluginAction({
				type: "MyStock:VISIT_STOCK",
				market: e,
				code: t,
				name: a
			})
		},
		removeStock: function(e, t) {
			n.
		default.handlePluginAction({
				type: "MyStock:REMOVE_STOCK",
				market: e,
				code: t
			})
		},
		prevStock: function(e, t, a) {
			n.
		default.handlePluginAction({
				type: "MyStock:PREV_STOCK",
				market: e,
				code: t,
				cbk: a
			})
		},
		nextStock: function(e, t, a) {
			n.
		default.handlePluginAction({
				type: "MyStock:NEXT_STOCK",
				market: e,
				code: t,
				cbk: a
			})
		},
		getStockIdxInfo: function(e, t, a) {
			n.
		default.handlePluginAction({
				type: "MyStock:GET_STOCK_IDX_INFO",
				market: e,
				code: t,
				cbk: a
			})
		},
		isMyStock: function(e, t, a) {
			n.
		default.handlePluginAction({
				type: "MyStock:IS_MY_STOCK",
				market: e,
				code: t,
				cbk: a
			})
		},
		setStockBell: function(e) {
			n.
		default.handlePluginAction({
				type: "MyStock:SET_STOCK_BELL",
				adds: e
			})
		},
		isSetBell: function(e, t, a) {
			n.
		default.handlePluginAction({
				type: "MyStock:IS_SET_BELL",
				market: e,
				code: t,
				cbk: a
			})
		}
	}, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/AppDispatcher")
}, function(e, t) {
	e.exports = require("hippo/apiStore")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(4),
		n = i(l),
		o = a(15),
		r = i(o),
		s = a(12),
		c = (i(s), a(16)),
		u = a(6),
		d = a(2),
		p = i(d),
		h = a(7),
		f = a(17),
		m = i(f),
		k = a(3),
		g = i(k),
		S = a(18),
		b = i(S),
		v = a(49),
		y = i(v),
		x = a(50),
		w = (i(x), a(11)),
		E = i(w),
		I = (a(53), a(44)),
		T = {
			curTab: null,
			tabs: [],
			tabsStack: []
		},
		M = r.
	default.createClass({
			displayName: "StockQuote",
			getInitialState: function() {
				return T.curTab || (T.curTab = "0", T.tabsStack.push("0")), T
			},
			componentDidMount: function() {
				var e = this;
				u.Event.watch(this.getDOMNode(), this.openNewTab), this._shortcut_esc = m.
			default.reg("esc", function() {
					var t = T.curTab || "0",
						a = void 0,
						i = void 0;
					e.getAllTabs().some(function(e, l) {
						if (e.id === t) return a = e, i = l, !0
					}), void 0 !== i && a.closable && (e.closeJumpTab(), e.closeTab(null, t))
				})
			},
			componentWillUnmount: function() {
				u.Event.unwatch(this.getDOMNode(), this.openNewTab), T.tabs = this.state.tabs, m.
			default.cancel("esc", this._shortcut_esc)
			},
			onTabChange: function(e) {
				!e && (e = "0"), T.curTab = e;
				var t = T.tabsStack;
				0 !== t.length && t[t.length - 1] === e || (this.removeTabsStack(e), t.push(e))
			},
			closeJumpTab: function(e) {
				var t = T.tabsStack,
					a = "0";
				if (t.length > 0) if (void 0 !== e && t[t.length - 1] !== e) this.removeTabsStack(e), a = T.curTab;
				else {
					t.pop();
					for (var i = t.length - 1; i > -1 && t[i].indexOf(":") != -1 && !this.hasTab(t[i]);) t.pop(), --i;
					i > -1 && (a = t[i])
				}
				return T.curTab = a, a
			},
			removeTabsStack: function(e) {
				var t = void 0;
				T.tabsStack.some(function(a, i) {
					if (e == a) return t = i, !0
				}), void 0 !== t && T.tabsStack.splice(t, 1)
			},
			getAllTabs: function() {
				return this.state.tabs
			},
			hasStar: function(e, t) {
				var a = !1;
				return e && t && E.
			default.isMyStock(e, t, function(e) {
					a = e
				}), a
			},
			openNewTab: function(e) {
				var t = e.detail,
					a = t.id,
					i = t.type,
					l = t.subtype,
					n = t.market,
					o = t.code,
					r = t.name;
				if ("ADD_TAB" == i) {
					var s;
					"ENTER_DUELALL" == l ? a = s = "StockTickDuelAll" : "ENTER_STOCK" == l ? (a = a || n + ":" + o, s = "StockDetail") : "IFRAME" == l && (s = "IframeOpener"), this.addTab({
						id: a,
						cid: s,
						label: r || "详情",
						config: e.detail,
						closable: !0
					}, !0)
				}
			},
			getMenu: function(e) {
				return {
					items: g.
				default.stockItemMenu(e)
				}
			},
			getPlateMenu: function(e) {
				return null
			},
			hasTab: function(e) {
				var t = this.state ? this.state.tabs : T.tabs;
				return t.some(function(t, a) {
					return t.id == e
				})
			},
			addTab: function(e, t) {
				var a = this,
					i = e.id || 2 + this.state.tabs.length,
					l = {};
				if (l.tabs = this.state.tabs, this.hasTab(i)) {
					if ("StockTickDuelAll" == i) {
						var n = l.tabs.findIndex(function(e) {
							return e.id === i
						});
						void 0 !== n ? l.tabs.splice(n, 1, e) : l.tabs.push(e)
					}
				} else l.tabs.push(e);
				this.removeTabsStack(i), T.tabsStack.push(i), this.setState(l, function() {
					t && a.refs.tabs.setTab(i)
				})
			},
			closeTab: function(e, t) {
				var a = this.state.tabs,
					i = -1;
				a.some(function(e, a) {
					if (e.id == t) return i = a, !0
				}), i != -1 && (a.splice(i, 1), this.forceUpdate())
			},
			render: function() {
				var e = r.
			default.createElement(b.
			default, {
					cls: "PlateListWrap",
					gridType: "PlateList",
					sort: !0,
					selectFirst: !0,
					showAside: !0,
					asideVisible: !0,
					sortKey: "PX_CHANGE_PCT",
					getMenu: this.getPlateMenu,
					filters: g.
				default.plateFilters,
					columns:
					(0, h.boardHeads)(),
					label: g.
				default.Lang("Plate"),
					dataProvider:
					I.BoardListDataProvider
				}),
					t = {
						StockDetail: p.
					default.getImpl("StockQuote:StockDetail"),
						StockTickDuelAll:
						p.
					default.getImpl("StockQuote:StockTickDuelAll"),
						IframeOpener:
						D
					},
					a = this.state.tabs.map(function(e) {
						var a, i = n.
					default.extend({}, e, e.config);
						return a = t[e.cid], r.
					default.createElement(a, i)
					}),
					i = [];
				i.push(r.
			default.createElement(y.
			default, {
					label: g.
				default.Lang("Quote"),
					showAside:
					!0,
					asideVisible: !0
				})), i.push(e), i = i.concat(a);
				var l = T.curTab;
				return r.
			default.createElement(c.Tabs, {
					ref: "tabs",
					className: "StockQuote Dark",
					overflowMode: "compress",
					toolBtns: r.
				default.createElement(N, {
						ref: "toolBtns"
					}),
					curTab:
					l,
					tabChanged: this.onTabChange,
					closeJumpTab: this.closeJumpTab,
					closeTab: this.closeTab
				}, i)
			}
		}),
		N = r.
	default.createClass({
			displayName: "ToolBtns",
			getInitialState: function() {
				return {
					btns: []
				}
			},
			showBtns: function(e) {
				this.setState({
					btns: e
				})
			},
			render: function() {
				return r.
			default.createElement("div", null, this.state.btns)
			}
		}),
		D = r.
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
	t.
default = M, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/lib/react")
}, function(e, t) {
	e.exports = require("hippo/UI")
}, function(e, t) {
	e.exports = require("hippo/Shortcut")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
		return t.
	default = e, t
	}
	function l(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(4),
		o = l(n),
		r = a(15),
		s = l(r),
		c = a(12),
		u = l(c),
		d = (a(7), a(2)),
		p = l(d),
		h = a(19),
		f = l(h),
		m = a(20),
		k = l(m),
		g = a(16),
		S = a(6),
		b = a(17),
		v = l(b),
		y = a(21),
		x = i(y),
		w = a(23),
		E = l(w),
		I = a(27),
		T = l(I),
		M = a(43),
		N = l(M),
		D = a(46),
		C = l(D),
		L = a(47),
		P = l(L),
		B = a(3),
		O = l(B),
		A = a(11),
		_ = l(A),
		W = {
			MyStockList: {
				asideVisible: null
			},
			QuoteList: {
				asideVisible: null
			},
			PlateList: {
				asideVisible: !0
			}
		},
		Q = s.
	default.createClass({
			displayName: "StockListWrap",
			getInitialState: function() {
				this.active = this.props.active;
				var e = W[this.props.gridType] && W[this.props.gridType].asideVisible;
				this.store = E.
			default.getInstance(this.props.gridType).setFilters(this.props.filters).setColumns(this.props.columns), this.quickOrderHint = null;
				var t = f.
			default.getItem(null, "stockquote") ? JSON.parse(f.
			default.getItem(null, "stockquote")):
				{};
				t = Object.assign(k.
			default.PreferenceSetting.stockquote, t);
				var a = "1" === t.news_expanded;
				return {
					asideVisible: "boolean" == typeof e ? e : a,
					filterName: "",
					active: this.props.active
				}
			},
			getDefaultProps: function() {
				return {
					showAside: !1,
					showMenu: !0,
					showFilter: !0,
					configFilter: !0,
					configColumns: !0,
					active: "left"
				}
			},
			resize: function() {
				this.refs.filter.resize(), this.grid && this.grid.resize()
			},
			componentDidUpdate: function(e, t) {
				var a = t.filterName,
					i = this.state.filterName;
				a != i && (x.destroyGrid(this), this.setupGrid(this.props.gridType)), t.asideVisible != this.state.asideVisible && this.grid.resize()
			},
			getSettingsStore: function() {
				return this.store
			},
			componentDidMount: function() {
				var e = this;
				this.setupGrid(this.props.gridType);
				this.dispatchId = u.
			default.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "WINDOW.RESIZE":
						e.refs.filter.resize(), e.grid && e.grid.resize();
						break;
					case "StockTrade:OPEN_MYSTOCK_SETTING":
						e.openSettings();
						break;
					case "StockTrade:DO_ORDER_SUCC":
						e.quickOrderHint && e.quickOrderHint.close(), e.quickOrderHint = null
					}
				}), this.props.widgetContainer || this.focusList(), this.getSettingsStore().addSettingsListener(this.onChange), S.Event.watch(this.getDOMNode(), this.openNews)
			},
			componentWillUnmount: function() {
				x.destroyGrid(this), this.getSettingsStore().removeSettingsListener(this.onChange), u.
			default.unregister(this.dispatchId), S.Event.unwatch(this.getDOMNode(), this.openNews), this.cancelShortcut()
			},
			focusList: function() {
				this.refs.list && this.refs.list.getDOMNode().focus()
			},
			isActive: function() {
				return !(this.quickOrderHint && !this.quickOrderHint.state.hide || this.refs.plateAside && this.refs.plateAside.quickOrderHint && !this.refs.plateAside.quickOrderHint.state.hide)
			},
			onChange: function() {
				this.grid && (this.grid.setColumns(this.getSettingsStore().getColumns()), this.grid.refresh(!0), this.grid.resize())
			},
			reload: function() {
				this.grid.reload()
			},
			removeStock: function(e) {
				this.grid.removeStock(e.market + ":" + e.code), this.setAsideData()
			},
			hasStar: function(e, t) {
				var a = !1;
				return e && t && _.
			default.isMyStock(e, t, function(e) {
					a = e
				}), a
			},
			hasSetBell: function(e, t) {
				var a = !1;
				return e && t && _.
			default.isSetBell(e, t, function(e) {
					a = e
				}), a
			},
			onContextMenuClick: function(e, t, a) {
				var i = this,
					l = (t.join(":"), a.stock);
				switch (e) {
				case O.
				default.Lang("Add"):
					_.
				default.addStock(l.market, l.code, l.name);
					break;
				case O.
				default.Lang("Delete"):
					_.
				default.removeStock(l.market, l.code);
					break;
				case O.
				default.Lang("View"):
					this.openDetail(l, this.props.gridType, this.subType);
					break;
				case O.
				default.Lang("Up"):
				case O.
				default.Lang("Prev"):
					this.grid.reorderStock(l, a.srcIdx, Math.max(a.srcIdx - 1, 0));
					break;
				case O.
				default.Lang("Down"):
				case O.
				default.Lang("Next"):
					this.grid.reorderStock(l, a.srcIdx, a.srcIdx + 1);
					break;
				case O.
				default.Lang("Top"):
					this.grid.reorderStock(l, a.srcIdx, 0);
					break;
				case O.
				default.Lang("Bottom"):
					this.grid.reorderStock(l, a.srcIdx, -1);
					break;
				case O.
				default.Lang("GeneBuy"):
				case O.
				default.Lang("GeneSell"):
					var n = l.market,
						o = l.code,
						r = p.
					default.getImpl("StockTrade:QuickTrade");
					this.quickOrderHint = g.Popup.show({
						className: "QuickOrder-Wrap",
						content: s.
					default.createElement(r, {
							market: n,
							code: o,
							opType: e == O.
						default.Lang("GeneBuy") ? 1:
							2
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null,
						popupWillClose: function() {
							i.focusList()
						}
					});
					break;
				case O.
				default.Lang("CollBuy"):
				case O.
				default.Lang("CollSell"):
				case O.
				default.Lang("FinaBuy"):
				case O.
				default.Lang("MargSell"):
					var n = l.market,
						o = l.code,
						c = p.
					default.getImpl("StockTrade:QuickCredit"),
						u = ["", O.
					default.Lang("CollBuy"), O.
					default.Lang("CollSell"), O.
					default.Lang("FinaBuy"), O.
					default.Lang("MargSell")].indexOf(e);
					this.quickOrderHint = g.Popup.show({
						className: "QuickOrder-Wrap",
						content: s.
					default.createElement(c, {
							market: n,
							code: o,
							opType: u
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null,
						popupWillClose: function() {
							i.focusList()
						}
					})
				}
			},
			setupGrid: function(e) {
				var t = this;
				if (this.state.filterName) {
					var a = this.props.filters.filter(function(e) {
						return e.label == t.state.filterName
					})[0],
						i = o.
					default.extend({
							settingsStore: this.getSettingsStore()
						}, a, this.props),
						l = a.subType,
						n = x.setupGrid(this, this.refs.grid.getDOMNode(), i);
					n.on("select", function(e) {
						var a = t.hasStar(e.market, e.code);
						t.setState({
							market: e.market,
							code: e.code,
							name: e.name,
							subType: l,
							star: a
						}), S.Event.bubble(t.getDOMNode(), {
							type: "FOCUS_STOCK",
							market: e.market,
							code: e.code,
							group: t.props.group
						})
					}), n.on("dblclick", function(a) {
						a.name && t.openDetail(a, e, l, "dblclick")
					}), n.on("contextmenu", function(e, a, i) {
						if (t.props.showMenu && "undefined" != typeof t.props.getMenu && a) {
							var l = t.hasStar(a.market, a.code),
								n = t.props.getMenu(a, l);
							n && g.Menu.show(e, {
								options: n.items,
								data: {
									stock: a,
									srcIdx: i
								}
							}, n.handler || t.onContextMenuClick)
						}
					}), this.grid = n, this.gridType = e, this.subType = l
				}
			},
			openDetail: function(e, t, a, i) {
				if ("PlateList" != t) {
					var l = this.hasStar(e.market, e.code),
						n = this.hasSetBell(e.market, e.code);
					S.Event.bubble(this.getDOMNode(), {
						type: "ADD_TAB",
						subtype: "ENTER_STOCK",
						market: e.market,
						code: e.code,
						name: e.name,
						star: l,
						bell: n,
						gridType: t,
						subType: a,
						triggerType: i
					})
				}
			},
			setFilter: function(e) {
				this.setState({
					filterName: e
				})
			},
			setAsideData: function() {
				var e = this.grid.getRawDataByIdx(0);
				this.intervalId && (clearInterval(this.intervalId), this.intervalId = null);
				var t = e && e.market || "",
					a = e && e.code || "",
					i = e && e.name || "未知名股票",
					l = !! a && this.hasStar(t, a),
					n = this.hasSetBell(t, a);
				this.setState({
					market: t,
					code: a,
					name: i,
					subType: this.subType,
					star: l,
					bell: n
				})
			},
			toggleAside: function(e) {
				this.state.asideVisible ? (W[this.props.gridType] && (W[this.props.gridType].asideVisible = !1), this.setState({
					asideVisible: !1
				}, e)) : (this.intervalId && (clearInterval(this.intervalId), this.intervalId = null), W[this.props.gridType] && (W[this.props.gridType].asideVisible = !0), this.setState({
					asideVisible: !0,
					subType: this.subType,
					star: this.hasStar(this.state.market, this.state.code)
				}, e))
			},
			openSettings: function() {
				var e = this;
				this.props.gridType;
				g.Popup.show({
					className: "MyStock-Settings",
					content: s.
				default.createElement(P.
				default, {
						configFilter: this.props.configFilter,
						configColumns: this.props.configColumns,
						settingsStore: this.getSettingsStore()
					}),
					title:
					O.
				default.Lang("Settings"),
					modal:
					!0,
					buttons: [O.
				default.Lang("Reset"), O.
				default.Lang("Save"), O.
				default.Lang("Abort")],
					onBtnClick: function(t, a) {
						return 0 != t ? (1 == t && (e.grid && e.grid.scrollHorizontal(0), a.saveSettings(), e.grid && e.grid.scrollHorizontal(0)), !0) : void a.reset()
					}
				})
			},
			refreshMyStock: function() {
				"function" == typeof this.props.refreshMyStock && this.props.refreshMyStock()
			},
			openNews: function(e) {
				var t = this;
				if ("OPEN_NEWS" == e.detail.type) {
					e.stopPropagation();
					var a = e.detail,
						i = a.catId,
						l = a.id,
						n = a.proxy;
					i && l ? this.setState({
						newsDetail: {
							catId: i,
							id: l,
							proxy: n
						}
					}, function() {
						t.refs.newsDetail.loadNews(i, l)
					}) : this.closeNews()
				}
			},
			closeNews: function() {
				this.setState({
					newsDetail: null
				})
			},
			regShortcut: function() {
				var e = this;
				this._shortcut_enabled || (this._shortcut_enabled = !0, this._shortcut_up = v.
			default.reg("up", function(t, a) {
					e.isActive() && e.grid.handleKey("up")
				}), this._shortcut_down = v.
			default.reg("down", function() {
					e.isActive() && e.grid.handleKey("down")
				}), this._shortcut_left = v.
			default.reg("left", function() {
					e.isActive() && e.grid.handleKey("left")
				}), this._shortcut_right = v.
			default.reg("right", function() {
					e.isActive() && e.grid.handleKey("right")
				}), this._shortcut_pageup = v.
			default.reg("pageup", function() {
					e.isActive() && e.grid.handleKey("pageup")
				}), this._shortcut_pagedown = v.
			default.reg("pagedown", function() {
					e.isActive() && e.grid.handleKey("pagedown")
				}), this._shortcut_enter = v.
			default.reg("enter", function() {
					if (e.isActive()) {
						var t = e.grid.getSelectedStock();
						if (t) {
							var a = e.gridType,
								i = e.subType;
							e.openDetail(t, a, i)
						}
					}
				}), this._shortcut_f10 = v.
			default.reg("f10", function() {
					if (e.isActive()) {
						var t = e.grid.getSelectedStock();
						if ((0, S.isStockHaveF10)(t.market, t.code)) {
							var a = t.market,
								i = t.code,
								l = t.name;
							S.Event.bubble(e.getDOMNode(), {
								type: "ADD_TAB",
								subtype: "IFRAME",
								name: "F10:" + l,
								id: "f10:" + a + ":" + i,
								url: "http://f9.chinabigdata.com/" + a.toUpperCase() + i + ".html?v=1"
							})
						}
					}
				}), this._shortcut_ins = v.
			default.reg("ins", function() {
					if (e.isActive()) {
						var t = e.grid.getSelectedStock();
						t && _.
					default.addStock(t.market, t.code, t.name)
					}
				}), this._shortcut_del = v.
			default.reg("del", function() {
					if (e.isActive()) {
						var t = e.grid.getSelectedStock();
						t && _.
					default.removeStock(t.market, t.code)
					}
				}))
			},
			cancelShortcut: function() {
				this._shortcut_enabled = !1, v.
			default.cancel("up", this._shortcut_up), v.
			default.cancel("down", this._shortcut_down), v.
			default.cancel("left", this._shortcut_left), v.
			default.cancel("right", this._shortcut_right), v.
			default.cancel("pageup", this._shortcut_pageup), v.
			default.cancel("pagedown", this._shortcut_pagedown), v.
			default.cancel("f10", this._shortcut_f10), v.
			default.cancel("ins", this._shortcut_ins), v.
			default.cancel("del", this._shortcut_del), v.
			default.cancel("enter", this._shortcut_enter)
			},
			render: function() {
				var e, t = this.state,
					a = t.market,
					i = t.code,
					l = t.name,
					n = t.star,
					o = t.subType,
					r = t.newsDetail;
				if (this.props.showAside && this.state.asideVisible) {
					var c, u = p.
				default.getImpl("StockNews:NewsDetail");
					f.
				default.isInstalled("StockNews") && u && r && (c = s.
				default.createElement(u, {
						ref: "newsDetail",
						id: r.id,
						catId: r.catId,
						proxy: r.proxy,
						closeHandler: this.closeNews
					})), e = "PlateList" == this.props.gridType ? s.
				default.createElement(N.
				default, {
						ref: "plateAside",
						market: a,
						code: i,
						name: l,
						star: n,
						subType: o,
						sub_board: i
					}):
					s.
				default.createElement("aside", null, c, s.
				default.createElement(T.
				default, {
						newsPagingProxy: this.proxy,
						market: a,
						code: i,
						star: n,
						name: l
					}))
				}
				return s.
			default.createElement("div", {
					className: "StockListWrap",
					key: "StockListWrap"
				}, s.
			default.createElement("div", {
					ref: "list",
					className: this.props.cls,
					tabIndex: "0",
					onFocus: this.regShortcut,
					onBlur: this.cancelShortcut
				}, s.
			default.createElement(C.
			default, {
					ref: "filter",
					setFilter: this.setFilter,
					openSettings: this.openSettings,
					refreshMyStock: this.refreshMyStock,
					showAside: this.props.showAside,
					myStock: this.props.myStock,
					showFilter: this.props.showFilter,
					settingsStore: this.getSettingsStore(),
					toggleAside: "PlateList" == this.props.gridType || "RecentStockList" == this.props.gridType ? void 0 : this.toggleAside,
					asideVisible: this.state.asideVisible,
					changeScrollOffset: this.props.changeScrollOffset
				}), s.
			default.createElement("div", {
					ref: "grid",
					className: "StockList"
				})), e)
			}
		});
	t.Settings = P.
default, t.Store = E.
default, t.
default = Q
}, function(e, t) {
	e.exports = require("hippo/ConfigStore")
}, function(e, t) {
	e.exports = require("hippo/AppConstants")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function l(e, t, a) {
		var i = r.
	default.extend({
			remove: !1,
			reorder: !1,
			multiselect: !1,
			selectFirst: !0,
			heads: (a.settingsStore ? a.settingsStore.getColumns() : null) || a.columns
		}, a),
			l = new s.Grid(t, i);
		e.grid = l;
		e.props.gridType;
		return l.on("render:initial", function() {
			this.scrollTo(this.options.scrollOffset ? this.options.scrollOffset : 0), this.resize();
			var e = this;
			setTimeout(function() {
				e.resize()
			}, 10)
		}), l
	}
	function n(e) {
		e.grid && e.grid.destroy()
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.setupGrid = l, t.destroyGrid = n;
	var o = a(4),
		r = i(o),
		s = a(7),
		c = (a(22), a(3)),
		u = (i(c), a(23));
	i(u)
}, function(e, t) {
	e.exports = require("hippo/components/GridModel")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function n(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = function() {
			function e(e, t) {
				for (var a = 0; a < t.length; a++) {
					var i = t[a];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, a, i) {
				return a && e(t.prototype, a), i && e(t, i), t
			}
		}(),
		r = function(e, t, a) {
			for (var i = !0; i;) {
				var l = e,
					n = t,
					o = a;
				i = !1, null === l && (l = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(l, n);
				if (void 0 !== r) {
					if ("value" in r) return r.value;
					var s = r.get;
					if (void 0 === s) return;
					return s.call(o)
				}
				var c = Object.getPrototypeOf(l);
				if (null === c) return;
				e = c, t = n, a = o, i = !0, r = c = void 0
			}
		},
		s = a(4),
		c = (i(s), a(24)),
		u = a(12),
		d = (i(u), a(19)),
		p = i(d),
		h = a(25),
		f = (i(h), a(26)),
		m = (i(f), a(7), a(3)),
		k = i(m),
		g = function(e) {
			function t(e) {
				l(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.gridType = e
			}
			return n(t, e), o(t, null, [{
				key: "getInstance",
				value: function(e) {
					return void 0 === t._inst && (t._inst = {}), e in this._inst || (this._inst[e] = new t(e)), this._inst[e]
				}
			}]), o(t, [{
				key: "setFilters",
				value: function(e) {
					return this.defaultFilters = e, this
				}
			}, {
				key: "setColumns",
				value: function(e) {
					return this.defaultColumns = e, this
				}
			}, {
				key: "addSettingsListener",
				value: function(e) {
					this.on("change:settings", e)
				}
			}, {
				key: "removeSettingsListener",
				value: function(e) {
					this.removeListener("change:settings", e)
				}
			}, {
				key: "getFilterSettings",
				value: function() {
					return this.mergeSettings(p.
				default.getItem(k.
				default.PluginId, "Filters:" + this.gridType), this.defaultFilters)
				}
			}, {
				key: "getColumnSettings",
				value: function() {
					return this.mergeSettings(p.
				default.getItem(k.
				default.PluginId, "Columns:" + this.gridType), this.defaultColumns)
				}
			}, {
				key: "getFilterDefaults",
				value: function() {
					return this.defaultFilters.concat()
				}
			}, {
				key: "getColumnDefaults",
				value: function() {
					return this.defaultColumns.concat()
				}
			}, {
				key: "mergeSettings",
				value: function(e, t) {
					e = e || [], t = t || [];
					for (var a = {}, i = {}, l = 0; l < e.length; l++) a[e[l].label] = !0;
					for (var l = 0; l < t.length; l++) i[t[l].label] = !0;
					for (var n = (e.filter(function(e) {
						return e.label in i
					}).map(function(e, t) {
						return {
							label: e.label,
							hide: e.hide
						}
					})), l = 0; l < t.length; l++) {
						var o = t[l];
						o.label in a || n.push({
							label: o.label,
							hide: !1
						})
					}
					return n
				}
			}, {
				key: "getColumns",
				value: function() {
					for (var e = this.defaultColumns, t = {}, a = 0; a < e.length; a++) {
						var i = e[a];
						t[i.label] = i
					}
					for (var l = this.getColumnSettings(), n = [], a = 0; a < l.length; a++) {
						var i = l[a];
						!i.hide && i.label in t && n.push(t[i.label])
					}
					return n
				}
			}, {
				key: "saveSettings",
				value: function(e, t) {
					p.
				default.setItem(k.
				default.PluginId, "Filters:" + this.gridType, e), p.
				default.setItem(k.
				default.PluginId, "Columns:" + this.gridType, t), this.emit("change:settings")
				}
			}]), t
		}(c.EventEmitter);
	t.
default = g, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/lib/events")
}, function(e, t) {
	e.exports = require("hippo/SessionStore")
}, function(e, t) {
	e.exports = require("hippo/CodeList")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(2),
		r = i(o),
		s = a(19),
		c = i(s),
		u = a(6),
		d = a(26),
		p = i(d),
		h = a(28),
		f = a(39),
		m = i(f),
		k = a(11),
		g = (i(k), n.
	default.createClass({
			displayName: "DetailRight",
			getInitialState: function() {
				return {
					market: "sz",
					code: "000776"
				}
			},
			resize: function() {
				this.refs.graph && this.refs.graph.resize()
			},
			render: function() {
				var e = this.props,
					t = e.stock || {},
					a = e.market || t.market,
					i = e.code || t.code,
					l = e.name || t.name,
					o = e.star || !1,
					s = (0, u.isStockIndex)(a, i);
				if (!l) {
					var t = p.
				default.get(a, i) || {};
					l = t.name || "未知名股票"
				}
				var d = void 0,
					f = r.
				default.getImpl("StockNews:NewsList");
				return c.
			default.isInstalled("StockNews") && f && (d = n.
			default.createElement(f, {
					market: a,
					code: i,
					openNews: this.props.openNews,
					pagingProxy: this.props.newsPagingProxy
				})), n.
			default.createElement("aside", {
					className: "StockQuote-DetailRight"
				}, e.stockDetail ? null : n.
			default.createElement(h.StockTimeSeriesWrap, {
					ref: "graph",
					market: a,
					code: i,
					name: l,
					star: o
				}), !i || s ? null:
				n.
			default.createElement(m.
			default, {
					stockDetail: e.stockDetail,
					market: a,
					code: i,
					name: l
				}), !i || s ? null:
				d)
			}
		}));
	t.
default = g, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
		return t.
	default = e, t
	}
	function l(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = function() {
			function e(e, t) {
				var a = [],
					i = !0,
					l = !1,
					n = void 0;
				try {
					for (var o, r = e[Symbol.iterator](); !(i = (o = r.next()).done) && (a.push(o.value), !t || a.length !== t); i = !0);
				} catch (e) {
					l = !0, n = e
				} finally {
					try {
						!i && r.
						return &&r.
						return ()
					} finally {
						if (l) throw n
					}
				}
				return a
			}
			return function(t, a) {
				if (Array.isArray(t)) return t;
				if (Symbol.iterator in Object(t)) return e(t, a);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		o = a(15),
		r = l(o),
		s = a(29),
		c = l(s),
		u = a(12),
		d = l(u),
		p = a(6),
		h = i(p),
		f = a(26),
		m = l(f),
		k = a(11),
		g = l(k),
		S = a(17),
		b = l(S),
		v = a(16),
		y = a(2),
		x = l(y),
		w = a(3),
		E = l(w),
		I = a(30),
		T = a(31),
		M = l(T),
		N = a(32),
		D = l(N),
		C = a(34),
		L = l(C),
		P = a(35),
		B = l(P),
		O = a(38),
		A = l(O),
		_ = a(5),
		W = i(_),
		Q = W.lang(function(e) {
			return a(8)("./" + e)
		}),
		z = (h.fitNumber, h.getStockAccuracy),
		F = r.
	default.createClass({
			displayName: "StockTimeSeries",
			showCrossModal: function(e) {
				var t = this;
				"little" === this.props.type || this.props.isSmall || (this.crossModal || (this.crossModal = A.
			default.show({
					market: this.props.market,
					code: this.props.code,
					type: this.props.type,
					chart: this.chart,
					topLimit: window.innerHeight - 40,
					leftLimit: 60 + this.getDOMNode().clientWidth,
					crossData: e,
					gType: "timeseries"
				})), this.crossModal.move({
					crossData: e
				})), this._shortcut_esc || (this._shortcut_esc = b.
			default.reg("esc", function() {
					t.chart.keyDownEsc()
				}))
			},
			closeCrossModal: function() {
				"little" === this.props.type || this.props.isSmall || this.crossModal && (this.crossModal = this.crossModal.hide()), b.
			default.cancel("esc", this._shortcut_esc), delete this._shortcut_esc
			},
			getInitialState: function() {
				var e = [],
					t = [];
				if (this.overlaymodel = new Map, "multi" != this.props.type) {
					e = M.
				default.getOverlayStock_time() || [];
					for (var a = 0; a < e.length; a++) {
						var i = e[a];
						if (this.props.market == i.market && this.props.code == i.code) {
							t = i.overlaystock, t.length > 3 && (t = t.slice(0, 3));
							break
						}
					}
				}
				return {
					overlayStockAll: e,
					overlayStock: t,
					drawlines: M.
				default.getDrawlines() || []
				}
			},
			componentDidMount: function() {
				var e = this;
				h.setupChart(this, this.refs.TimeSeriesGraph.getDOMNode(), this.props.type, this.props.market, this.props.code, this.props.isSmall, this.props.viewMode, this.state.overlayStock, this.state.drawlines), this.contextPrice = 0, this.registerEvent(), this.props.noBlurShortcut && this.regShortcut(), this.getcloseprice(), this.chart.on("contextmenu", function(t) {
					var a = e.getContextMenu();
					a && v.Menu.show(t, {
						options: a
					}, a.handler || e.onContextMenuClick)
				}), this.showDrawLine = !1
			},
			getcloseprice: function() {
				var e = this;
				this.socket = new I.StockRealtime, this.socket.on("update", function(t) {
					t.market == e.props.market && t.code == e.props.code && (e.chart.setpclose(t.closeprice.value), e.chart.setHighLowPrice(t.high.value, t.low.value))
				}), this.socket.set(this.props.market, this.props.code)
			},
			endWatch: function() {
				this.model && this.model.endWatch()
			},
			startWatch: function() {
				this.model && this.model.set(this.props.market, this.props.code)
			},
			registerEvent: function() {
				var e = this;
				this.dispatchId || (this.dispatchId = d.
			default.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "WINDOW.RESIZE":
						e.resize();
						break;
					case "CONFIG.SETSKIN":
						e.setskin();
						break;
					case "StockTrade:DO_ORDER_SUCC":
						e.quickOrderHint && e.quickOrderHint.close(), e.quickOrderHint = null
					}
				}))
			},
			unregisterEvent: function() {
				d.
			default.unregister(this.dispatchId), this.dispatchId = !1
			},
			resize: function() {
				this.chart.resize(this.refs.TimeSeriesGraph.getDOMNode().clientWidth, this.refs.TimeSeriesGraph.getDOMNode().clientHeight)
			},
			closeDrawline: function() {
				this.showDrawLine = !1
			},
			setskin: function() {
				h.destroyChart(this), h.setupChart(this, this.refs.TimeSeriesGraph.getDOMNode(), this.props.type, this.props.market, this.props.code, this.props.isSmall, this.props.viewMode, this.state.overlayStock, this.state.drawlines)
			},
			hasStar: function(e, t) {
				var a = !1;
				return e && t && g.
			default.isMyStock(e, t, function(e) {
					a = e
				}), a
			},
			getContextMenu: function() {
				var e, t, a = this.hasStar(this.props.market, this.props.code),
					i = (0, p.isTradable)(this.props.market, this.props.code),
					l = this.chart.getcurprice(),
					o = n(l, 2);
				e = o[0], t = o[1], this.contextPrice = e;
				var r = (z(this.props.market, this.props.code), [a ? {
					title: Q("Delete")
				} : {
					title: Q("Add")
				}, {
					title: Q("StockOverlay"),
					style: {
						color: "#dc5e21"
					}
				}, {
					title: Q("DrawLineTool"),
					style: {
						color: "#dc5e21"
					}
				}]),
					s = [a ? {
						title: Q("Delete")
					} : {
						title: Q("Add")
					}, {
						title: Q("DrawLineTool"),
						style: {
							color: "#dc5e21"
						}
					}],
					c = ["__seperator__",
					{
						title: t,
						style: {
							color: "#888888"
						}
					}, {
						title: Q("Buy"),
						style: {
							color: "#dc5e21"
						},
						children: [{
							title: Q("GeneBuy")
						}, {
							title: Q("CollBuy")
						}, {
							title: Q("FinaBuy")
						}]
					}, {
						title: Q("Sell"),
						style: {
							color: "#0777c1"
						},
						children: [{
							title: Q("GeneSell")
						}, {
							title: Q("CollSell")
						}, {
							title: Q("MargSell")
						}]
					}];
				return i && !this.props.isTrade ? "multi" == this.props.type ? s.concat(c) : r.concat(c) : "multi" == this.props.type ? s : r
			},
			onContextMenuClick: function(e) {
				switch (e.title) {
				case E.
				default.Lang("Add"):
					g.
				default.addStock(this.props.market, this.props.code, this.props.name);
					break;
				case E.
				default.Lang("Delete"):
					g.
				default.removeStock(this.props.market, this.props.code);
					break;
				case E.
				default.Lang("StockOverlay"):
					this.overlayPopup = v.Popup.show({
						className: "StockQuote-StockOverlay",
						content: r.
					default.createElement(D.
					default, {
							data: this.state.overlayStock,
							self: this
						}),
						title:
						E.
					default.Lang("StockOverlay"),
						modal:
						!0,
						buttons: null
					});
					break;
				case E.
				default.Lang("DrawLineTool"):
					(0, c.
				default)(this.getDOMNode()).offset().left + this.getDOMNode().clientWidth;
					this.drawlinePopup = v.Popup.show({
						maskClassName: "StockQuote-StockDrawLine-Mask",
						className: "StockQuote-StockDrawLine",
						content: r.
					default.createElement(L.
					default, {
							self: this
						}),
						title:
						E.
					default.Lang("DrawLineTool"),
						draggable:
						!0,
						modal: !1,
						buttons: null
					}), this.showDrawLine = !0;
					break;
				case E.
				default.Lang("GeneBuy"):
				case E.
				default.Lang("GeneSell"):
					var t = this.contextPrice,
						a = x.
					default.getImpl("StockTrade:QuickTrade");
					this.quickOrderHint = v.Popup.show({
						className: "QuickOrder-Wrap",
						content: r.
					default.createElement(a, {
							market: this.props.market,
							code: this.props.code,
							price: t,
							opType: e.title == E.
						default.Lang("GeneBuy") ? 1:
							2
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					});
					break;
				case E.
				default.Lang("CollBuy"):
				case E.
				default.Lang("CollSell"):
				case E.
				default.Lang("FinaBuy"):
				case E.
				default.Lang("MargSell"):
					t = this.contextPrice;
					var i = x.
				default.getImpl("StockTrade:QuickCredit"),
						l = ["", E.
					default.Lang("CollBuy"), E.
					default.Lang("CollSell"), E.
					default.Lang("FinaBuy"), E.
					default.Lang("MargSell")].indexOf(e.title);
					this.quickOrderHint = v.Popup.show({
						className: "QuickOrder-Wrap",
						content: r.
					default.createElement(i, {
							market: this.props.market,
							code: this.props.code,
							price: t,
							opType: l
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					})
				}
			},
			delOverlay: function(e) {
				this.refreshOverlay(e.stock, e.add, e.overlayStock)
			},
			refreshOverlay: function(e, t, a) {
				this.setState({
					overlayStock: a
				});
				for (var i = !1, l = 0; l < this.state.overlayStockAll.length; l++) {
					var n = this.state.overlayStockAll[l];
					if (this.props.market == n.market && this.props.code == n.code) {
						this.state.overlayStockAll[l].overlaystock = a, i = !0;
						break
					}
				}
				if (i && a.length <= 0 && this.state.overlayStockAll.splice(l, 1), !i && a.length > 0 && this.state.overlayStockAll.push({
					market: this.props.market,
					code: this.props.code,
					overlaystock: a
				}), M.
			default.setOverlayStock_time(this.state.overlayStockAll), 0 == t) {
					this.chart.delOverlayStock(e);
					var o = e.market + "_" + e.code,
						r = this.overlaymodel.get(o);
					r && (r.destroy(), this.overlaymodel.delete(o))
				} else 1 == t && (this.chart.addOverlayStock(e), h.overlayStock_chart(this, e.market, e.code))
			},
			getText: function(e) {
				this.drawtextPopup = v.Popup.show({
					className: "DrawText",
					content: r.
				default.createElement(B.
				default, {
						data: e
					}),
					title:
					E.
				default.Lang("DrawText"),
					modal:
					!0,
					buttons: [E.
				default.Lang("Save"), E.
				default.Lang("Abort")],
					onBtnClick: this.onBtnClickGetText
				})
			},
			onBtnClickGetText: function(e, t) {
				var a = "",
					i = 0,
					l = "";
				if (0 == e) {
					var n = (0, c.
				default)(t.refs.line1.getDOMNode());
					a = n.find('input[name="inputtext"]').val();
					var n = (0, c.
				default)(t.refs.line2.getDOMNode());
					i = n.find('input[name="size"]').val(), l = n.find('input[type="hidden"]').val()
				}
				return this.chart.DrawText(a, i, l), !0
			},
			choseDrawlineTool: function(e, t) {
				var a = this;
				if ("6-2" == e) {
					return void v.Popup.show({
						className: "Hint",
						content: r.
					default.createElement("p", null, "确定清空所有画线？"),
						title:
						E.
					default.Lang("Hint"),
						modal:
						!0,
						buttons: [E.
					default.Lang("Save"), E.
					default.Lang("Abort")],
						onBtnClick: function(e, t) {
							return 0 != e || (a.state.drawlines = [], M.
						default.setDrawlines(a.state.drawlines), a.chart.clearLines(), !0)
						}
					})
				}
				this.chart.choseDrawlineTool(e), this.drawlineTool = t
			},
			resetLine: function() {
				this.drawlineTool && this.drawlineTool.reset()
			},
			addDrawline: function(e) {
				this.state.drawlines.push(e), M.
			default.setDrawlines(this.state.drawlines)
			},
			delDrawline: function(e) {
				for (var t = 0; t < this.state.drawlines.length && this.state.drawlines[t].id != e; t++);
				t < this.state.drawlines.length && (this.state.drawlines.splice(t, 1), M.
			default.setDrawlines(this.state.drawlines))
			},
			refreshDrawline: function(e) {
				for (var t = 0; t < this.state.drawlines.length; t++) if (this.state.drawlines[t].id == e.id) {
					for (var a = 0; a < 9; a++) this.state.drawlines[t].pointarr[a].time = e.pointarr[a].time, this.state.drawlines[t].pointarr[a].price = e.pointarr[a].price;
					M.
				default.setDrawlines(this.state.drawlines);
					break
				}
			},
			overRange: function() {
				v.Popup.show({
					className: "Hint",
					content: r.
				default.createElement("p", null, "最多支持10000条画线，请删除其他画线后继续。"),
					title:
					E.
				default.Lang("Hint"),
					modal:
					!0,
					buttons: null
				})
			},
			onKeyDown: function(e) {
				var t = e.keyCode || e.charCode;
				if (!this.props.widgetContainer || this.props.active) switch (t) {
				case 37:
					this.chart.crossMoveLeft();
					break;
				case 39:
					this.chart.crossMoveRight();
					break;
				case 27:
					v.Menu.hide(), this.chart.keyDownEsc();
					break;
				case 9:
					this.chart.keyDownTab()
				}
			},
			componentDidUpdate: function(e, t) {
				e.type != this.props.type || e.market != this.props.market || e.code != this.props.code || e.isSmall != this.props.isSmall ? (h.destroyChart(this), this.socket.destroy(), this.socket = null, h.setupChart(this, this.refs.TimeSeriesGraph.getDOMNode(), this.props.type, this.props.market, this.props.code, this.props.isSmall, this.props.viewMode, this.state.overlayStock, this.state.drawlines), this.getcloseprice()) : this.props.width == e.width && this.props.height == e.height || this.resize()
			},
			componentWillUnmount: function() {
				this.unregisterEvent(), h.destroyChart(this), this.socket.destroy(), this.socket = null, this.drawlinePopup && !this.drawlinePopup.state.hide && this.drawlinePopup.close(), "little" === this.props.type || this.props.isSmall || this.crossModal && (this.crossModal = this.crossModal.hide()), this.cancelShortcut()
			},
			regShortcut: function() {
				var e = this;
				this._shortcut_enabled || (this._shortcut_enabled = !0, this._shortcut_left = b.
			default.reg("left", function() {
					e.chart.crossMoveLeft()
				}), this._shortcut_right = b.
			default.reg("right", function() {
					e.chart.crossMoveRight()
				}), this._shortcut_up = b.
			default.reg("up", function() {
					e.chart.onKeyDownUp()
				}), this._shortcut_down = b.
			default.reg("down", function() {
					e.chart.onKeyDownDown()
				}), this._shortcut_tab = b.
			default.reg("tab", function() {
					e.chart.keyDownTab()
				}), this._shortcut_del = b.
			default.reg("del", function() {
					if (e.chart.hasChooseLine()) e.chart.keyDownDel();
					else {
						var t = e.hasStar(e.props.market, e.props.code);
						t && g.
					default.removeStock(e.props.market, e.props.code)
					}
				}))
			},
			cancelShortcut: function() {
				this._shortcut_enabled = !1, b.
			default.cancel("left", this._shortcut_left), b.
			default.cancel("right", this._shortcut_right), b.
			default.cancel("up", this._shortcut_up), b.
			default.cancel("down", this._shortcut_down), b.
			default.cancel("esc", this._shortcut_esc), b.
			default.cancel("tab", this._shortcut_tab), b.
			default.cancel("del", this._shortcut_del), delete this._shortcut_esc
			},
			render: function() {
				return r.
			default.createElement("div", {
					className: "StockTimeSeries",
					tabIndex: "0",
					onFocus: this.props.noBlurShortcut ? null : this.regShortcut,
					onBlur: this.props.noBlurShortcut ? null : this.cancelShortcut
				}, r.
			default.createElement("div", {
					className: "TimeSeriesGraph",
					ref: "TimeSeriesGraph"
				}))
			}
		}),
		R = r.
	default.createClass({
			displayName: "StockTimeSeriesWrap",
			getDefaultProps: function() {
				return {
					showStar: !0
				}
			},
			getInitialState: function() {
				var e = this.props,
					t = e.market,
					a = e.code,
					i = e.star;
				return this.tempInfo = {
					market: t,
					code: a,
					star: i
				}, this.updateStockName(this.props), {}
			},
			updateStockName: function(e) {
				var t = e.market,
					a = e.code,
					i = e.name;
				if (t && !i) {
					var l = m.
				default.get(t, a) || {};
					i = l && l.name || "未知名股票"
				}
				this.stockName = i || ""
			},
			componentWillUpdate: function(e, t) {
				this.updateStockName(e)
			},
			componentDidMount: function() {
				var e = this;
				this.dispatcherId = d.
			default.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "MyStock:ADD_STOCK":
						var i = a.market,
							l = a.code;
						i == e.tempInfo.market && l == e.tempInfo.code && (e.tempInfo.star = !0, e.forceUpdate());
						break;
					case "MyStock:REMOVE_STOCK":
						var i = a.market,
							l = a.code;
						i == e.tempInfo.market && l == e.tempInfo.code && (e.tempInfo.star = !1, e.forceUpdate())
					}
				})
			},
			componentWillUnmount: function() {
				d.
			default.unregister(this.dispatcherId)
			},
			toggleStar: function() {
				var e = this.props,
					t = e.market,
					a = e.code,
					i = this.tempInfo.star || !1;
				i ? g.
			default.removeStock(t, a):
				g.
			default.addStock(t, a, this.stockName), this.tempInfo.star = !i, this.forceUpdate()
			},
			resize: function() {
				this.refs.graph.resize()
			},
			render: function() {
				var e = this.props,
					t = e.market,
					a = e.code,
					i = e.star,
					l = this.stockName,
					n = this.tempInfo;
				if (t == n.market && a == n.code || (this.tempInfo = {
					market: t,
					code: a,
					star: i
				}), !this.props.isWidget) var i = this.tempInfo.star,
					o = r.
				default.createElement("hgroup", null, r.
				default.createElement("span", null, l), this.props.showStar && r.
				default.createElement("i", {
						className: "ico stock-star " + (i ? "fill" : ""),
						onClick: this.toggleStar
					}, (0, p.getIcon)("star-filled")));
				return r.
			default.createElement("div", {
					className: "MyStock-TimeSeriesWrap"
				}, a ? o : null, a ? r.
			default.createElement(F, {
					ref: "graph",
					market: t,
					code: a,
					type: "little"
				}):
				null)
			}
		});
	t.StockTimeSeriesWrap = R, t.
default = F
}, function(e, t) {
	e.exports = require("hippo/lib/jquery")
}, function(e, t) {
	e.exports = require("hippo/StockRealtime")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(3),
		n = i(l),
		o = window.require("hippo/lib/underscore"),
		r = window.require("hippo/lib/events").EventEmitter,
		s = window.require("hippo/ConfigStore"),
		c = o.extend(r.prototype, {
			getAverangeConf: function() {
				return s.getItem(n.
			default.PluginId, "AverangeLine")
			},
			getMAArr: function() {
				return s.getItem(n.
			default.PluginId, "MAArr")
			},
			saveAverangeConf: function(e, t) {
				s.setItem(n.
			default.PluginId, "AverangeLine", e), s.setItem(n.
			default.PluginId, "MAArr", t)
			},
			getKLineTools: function() {
				return s.getItem(n.
			default.PluginId, "KlineToolBars")
			},
			setKLineTools: function(e) {
				s.setItem(n.
			default.PluginId, "KlineToolBars", e)
			},
			getOverlayStock: function() {
				return s.getItem(n.
			default.PluginId, "KlineOverlay")
			},
			setOverlayStock: function(e) {
				s.setItem(n.
			default.PluginId, "KlineOverlay", e)
			},
			getOverlayStock_time: function() {
				return s.getItem(n.
			default.PluginId, "TimeOverlay")
			},
			setOverlayStock_time: function(e) {
				s.setItem(n.
			default.PluginId, "TimeOverlay", e)
			},
			getWarnConf: function(e, t) {
				return s.getItem(n.
			default.PluginId, "WarnConf:" + e + "_" + t)
			},
			saveWarnConf: function(e, t, a) {
				s.setItem(n.
			default.PluginId, "WarnConf:" + e + "_" + t, a)
			},
			getIndex: function() {
				return s.getItem(n.
			default.PluginId, "Index")
			},
			setIndex: function(e) {
				s.setItem(n.
			default.PluginId, "Index", e)
			},
			getStockBriefList: function(e) {
				return s.getItem(n.
			default.PluginId, "BriefList_" + e)
			},
			setStockBriefList: function(e, t) {
				s.setItem(n.
			default.PluginId, "BriefList_" + e, t)
			},
			getIndexConf: function() {
				var e = s.getItem(n.
			default.PluginId, "IndexConf", n.
			default.indexConfSchema);
				return "string" == typeof e ? JSON.parse(e) : e
			},
			setIndexConf: function(e) {
				s.setItem(n.
			default.PluginId, "IndexConf", JSON.stringify(e), n.
			default.indexConfSchema)
			},
			getDrawlines: function() {
				var e = s.getItem(n.
			default.PluginId, "drawlines", n.
			default.drawlineSchema);
				return "string" == typeof e ? JSON.parse(e) : e
			},
			setDrawlines: function(e) {
				s.setItem(n.
			default.PluginId, "drawlines", JSON.stringify(e), n.
			default.drawlineSchema)
			}
		});
	t.
default = c, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(2),
		r = i(o),
		s = a(33),
		c = i(s),
		u = a(26),
		d = i(u),
		p = a(29),
		h = i(p),
		f = a(17),
		m = i(f),
		k = [{
			code: "000001",
			name: "上证指数",
			market: "sh"
		}, {
			code: "399001",
			name: "深证成指",
			market: "sz"
		}, {
			code: "399005",
			name: "中小板指",
			market: "sz"
		}, {
			code: "399006",
			name: "创业板指",
			market: "sz"
		}, {
			code: "399106",
			name: "深证综指",
			market: "sz"
		}, {
			code: "000002",
			name: "A股指数",
			market: "sh"
		}, {
			code: "399107",
			name: "深证A指",
			market: "sz"
		}, {
			code: "000003",
			name: "B股指数",
			market: "sh"
		}, {
			code: "399108",
			name: "深证B指",
			market: "sz"
		}, {
			code: "399300",
			name: "沪深300",
			market: "sz"
		}],
		g = n.
	default.createClass({
			displayName: "StockOverlay",
			getInitialState: function() {
				return {
					self: this.props.self,
					overlayStock: this.props.data || [],
					stocklist: k,
					error_tip: 0
				}
			},
			componentDidMount: function() {},
			afterchange: function(e, t) {
				if (1 === e) return void this.setState({
					error_tip: 1
				});
				this.setState({
					error_tip: 0
				});
				var a = this.state.overlayStock;
				if (1 == t) {
					for (var i = 0; i < a.length; i++) if (a[i].market === e.market && a[i].code === e.code) return;
					a.push(e)
				} else if (0 == t) {
					for (var i = 0; i < a.length && (a[i].market !== e.market || a[i].code !== e.code); i++);
					i < a.length && a.splice(i, 1)
				}
				this.setState({
					overlayStock: a
				}), this.state.self && this.state.self.refreshOverlay(e, t, a)
			},
			click: function(e) {
				this.refs.index.hasFocus("index" == e), this.refs.mystock.hasFocus("mystock" == e), this.refs.stocksearch.hasFocus("stocksearch" == e), "stocksearch" != e && this.refs.stocksearch.hidelist()
			},
			render: function() {
				var e = r.
			default.getAPI("MyStock:getList")();
				return n.
			default.createElement("div", {
					className: "StockOverlay",
					ref: "StockOverlay"
				}, this.state.error_tip ? n.
			default.createElement("span", {
					className: "error_tip"
				}, "最多支持叠加3只品种。"):
				null, n.
			default.createElement(S, {
					ref: "stocksearch",
					overlayStock: this.state.overlayStock,
					refresh: this.afterchange,
					click: this.click
				}), n.
			default.createElement(b, {
					ref: "index",
					type: "index",
					stocklist: k,
					overlayStock: this.state.overlayStock,
					refresh: this.afterchange,
					click: this.click
				}), n.
			default.createElement(b, {
					ref: "mystock",
					type: "mystock",
					stocklist: e,
					overlayStock: this.state.overlayStock,
					refresh: this.afterchange,
					click: this.click
				}))
			}
		}),
		S = n.
	default.createClass({
			displayName: "StockSearch",
			getInitialState: function() {
				return {
					overlayStock: this.props.overlayStock || [],
					showlist: !1
				}
			},
			componentDidMount: function() {
				this.refs.ipt && this.refs.ipt.getDOMNode().focus()
			},
			deleteOverlay: function(e) {
				if (e.preventDefault(), e.stopPropagation(), "closeico" == (0, h.
			default)(e.currentTarget).attr("class")) {
					var t = (0, h.
				default)(e.currentTarget).closest("li").attr("data-index"),
						a = this.state.overlayStock;
					t < a.length && this.props.refresh(a[t], 0)
				}
			},
			inputStockNum: function(e) {
				if (this.bKeyDownEnter) return void(this.bKeyDownEnter = !1);
				var t;
				"cancelicon" == e.target.getAttribute("class") ? ((0, h.
			default)(".StockNumInput").val(""), this.updateList("STOCK_EMPTY")) : (t = (0, h.
			default)(e.currentTarget).val().trim(), this.searchStock(t)), this.mirrorInput(t)
			},
			mirrorInput: function(e) {
				this.props.mirrorInput && this.props.mirrorInput(e)
			},
			searchStock: function() {
				var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
				if (e) {
					var t = d.
				default.find(e, this.props.stocktype, this.props.filtertype).slice(0, 100);
					return this.updateList(t)
				}
				this.updateList("STOCK_EMPTY")
			},
			updateList: function(e) {
				"STOCK_EMPTY" == e || 0 == e.length ? (e = k, this.setState({
					showlist: !1
				})) : this.setState({
					showlist: !0
				}), this.setState({
					stocklist: e
				}), this.refs.indexlist && this.refs.indexlist.setstocklist(e), this.props.click && this.props.click("stocksearch")
			},
			onKeyDown: function(e) {
				if (e && e.stopPropagation(), "StockNumInput" == e.target.getAttribute("class") || (0, h.
			default)(".StockNumInput").val()) {
					var t = e.keyCode || e.charCode;
					switch (t) {
					case 13:
						e.preventDefault(), this.bKeyDownEnter = !0
					}
				}
			},
			refresh: function(e, t) {
				this.setState({
					showlist: !1
				}), this.props.refresh(e, t)
			},
			hidelist: function() {
				this.setState({
					showlist: !1
				})
			},
			hasFocus: function(e) {
				this.state.showlist && this.refs.indexlist.hasFocus(e)
			},
			render: function() {
				for (var e = this.state.overlayStock, t = e.length, a = [], i = 0; i < t; i++) {
					var l = e[i],
						o = i,
						r = n.
					default.createElement("li", {
							className: "",
							"data-index": o
						}, n.
					default.createElement("span", {
							className: "spanStockCode"
						}, l.code), n.
					default.createElement("span", {
							className: "spanStockName"
						}, l.name), n.
					default.createElement("span", {
							className: "closeico",
							onClick: this.deleteOverlay
						}, "×"));
					a.push(r)
				}
				var s = "已添加叠加品种: " + t + "/3";
				return n.
			default.createElement("div", {
					className: "stocksearch"
				}, n.
			default.createElement("input", {
					ref: "ipt",
					maxLength: "10",
					type: "text",
					className: "StockNumInput",
					placeholder: "请输入股票代码/首字母",
					onKeyDown: this.onKeyDown,
					onKeyUp: this.inputStockNum
				}, n.
			default.createElement("span", {
					className: "searchicon"
				}), n.
			default.createElement("span", {
					className: "cancelicon",
					onClick: this.inputStockNum
				})), n.
			default.createElement("span", {
					className: "overtip"
				}, s), this.state.showlist ? n.
			default.createElement(b, {
					ref: "indexlist",
					type: "stocksearch",
					stocklist: this.state.stocklist,
					overlayStock: this.state.overlayStock,
					refresh: this.refresh
				}):
				null, n.
			default.createElement("div", {
					className: "overlist"
				}, n.
			default.createElement("ul", null, " ", a, " ")))
			}
		}),
		b = n.
	default.createClass({
			displayName: "IndexList",
			mixins: [c.
		default],
			getInitialState: function() {
				return {
					stocklist: this.props.stocklist || [],
					overlayStock: this.props.overlayStock || [],
					choosed: 0
				}
			},
			componentDidMount: function() {
				this.bFocus = !1, "stocksearch" == this.props.type ? (this.itemHeight = 25, this.viewHeight = 170) : (this.itemHeight = 33, this.viewHeight = 208), this.bRegShortcut = !1, this.regShortcut()
			},
			componentWillUnmount: function() {
				this.bRegShortcut && this.cancelShortcut()
			},
			regShortcut: function() {
				var e = this;
				this.bRegShortcut = !0, this.shortCutUp = m.
			default.reg("up", function() {
					e.addActive("UP")
				}), this.shortCutDown = m.
			default.reg("down", function() {
					e.addActive("DOWN")
				}), this.shortCutEnter = m.
			default.reg("enter", function() {
					e.keydownEnter()
				})
			},
			cancelShortcut: function() {
				this.bRegShortcut = !1, m.
			default.cancel("up", this.shortCutUp), m.
			default.cancel("down", this.shortCutDown), m.
			default.cancel("enter", this.shortCutEnter)
			},
			addActive: function(e) {
				if (0 != this.items.length) {
					var t = parseInt(this.state.choosed);
					if ("UP" == e) {
						if (t <= 0) return;
						t = t - 1 < 0 ? 0 : t - 1
					} else {
						if (t >= this.items.length - 1) return;
						t = t + 1 > this.items.length - 1 ? this.items.length - 1 : t + 1
					}
					this.setState({
						choosed: t
					});
					var a = void 0;
					if ("stocksearch" == this.props.type ? a = (0, h.
				default)((0, h.
				default)(".indexlist.stocksearch li")[t]) : "index" == this.props.type ? a = (0, h.
				default)((0, h.
				default)(".indexlist.index li")[t]) : "mystock" == this.props.type && (a = (0, h.
				default)((0, h.
				default)(".indexlist.mystock li")[t])), this.scrollbar) {
						var i = this.scrollbar.scroll;
						a.position() && a.position().top < 0 && this.scrollbar.scrollTo(i - this.itemHeight), a.position() && a.position().top + this.itemHeight > this.viewHeight && this.scrollbar.scrollTo(i + this.itemHeight)
					}
				}
			},
			click: function() {
				this.props.click && this.props.click(this.props.type)
			},
			hasFocus: function(e) {
				this.bFocus != e && (this.bFocus = e, e ? this.bRegShortcut || this.regShortcut() : this.bRegShortcut && this.cancelShortcut())
			},
			keydownEnter: function() {
				var e = this.state.overlayStock;
				if (e.length >= 3) return void this.props.refresh(1);
				var t = this.state.choosed;
				if (!(t == -1 || t >= this.items.length)) {
					var a = this.items[t];
					this.props.refresh({
						market: a.market,
						code: a.code,
						name: a.name
					}, 1)
				}
			},
			getNum: function(e) {
				var t = this.state.overlayStock;
				if (t.length >= 3) return void this.props.refresh(1);
				var a = e ? e.currentTarget.getAttribute("data-index") : -1;
				if (!(a == -1 || a >= this.items.length)) {
					var i = this.items[a];
					this.setState({
						choosed: a
					}), this.props.refresh({
						market: i.market,
						code: i.code,
						name: i.name
					}, 1)
				}
			},
			onChoose: function(e) {
				var t = e ? e.currentTarget.getAttribute("data-index") : -1;
				t == -1 || t >= this.items.length || this.setState({
					choosed: t
				})
			},
			setstocklist: function(e) {
				this.setState({
					stocklist: e
				})
			},
			render: function() {
				var e = this;
				this.items = this.state.stocklist;
				for (var t = 0; t < this.items.length; t++) if ("" == this.items[t].name || void 0 == this.items[t].name) {
					var a = d.
				default.get(this.items[t].market, this.items[t].code);
					a ? this.items[t].name = a.name:
					this.items[t].name = "未知名股票"
				}
				var i = this.items.map(function(t, a) {
					return n.
				default.createElement("li", {
						className: a == e.state.choosed ? "active" : "",
						"data-index": a,
						onClick: e.onChoose,
						onDoubleClick: e.getNum
					}, n.
				default.createElement("span", {
						className: "spanStockCode"
					}, t.code), n.
				default.createElement("span", {
						className: "spanStockName"
					}, t.name))
				});
				return n.
			default.createElement("div", {
					className: "indexlist " + this.props.type,
					onClick: this.click
				}, n.
			default.createElement("ul", null, " ", i, " "))
			}
		});
	t.
default = g, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/mixins/ScrollbarMixin")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(29),
		r = (i(o), ["压/撑", "趋势", "矩形", "回归带", "弧形", "文本", "射线", "线段", "箭头", "通道", "回归射线", "线性回归", "黄金分割", "波段", "周期线", "百分比", "斐波拉契", "速阻线", "江恩角度线", "对称角度线", "删除画线", "清空画线"]),
		s = n.
	default.createClass({
			displayName: "StockDrawLine",
			getInitialState: function() {
				return {
					self: this.props.self,
					data: this.props.data,
					icon_id: ""
				}
			},
			reset: function() {
				this.setState({
					icon_id: ""
				})
			},
			click: function(e) {
				var t = e.currentTarget.dataset.id;
				"6-1" != t && "6-2" != t && this.state.icon_id == t && (t = ""), this.setState({
					icon_id: t
				}), "" != t && this.state.self.choseDrawlineTool(t, this)
			},
			renderItem: function(e, t) {
				var a = "icon" + e + " " + (this.state.icon_id == t && "6-1" != t && "6-2" != t ? "chose" : ""),
					i = r[e - 1];
				return n.
			default.createElement("li", {
					className: a,
					"data-id": t,
					title: i,
					onClick: this.click
				})
			},
			render: function() {
				this.props.data, this.state;
				return n.
			default.createElement("div", {
					className: "StockDrawLine",
					ref: "StockDrawLine"
				}, n.
			default.createElement("div", {
					className: "title"
				}, n.
			default.createElement("span", null, "常用")), n.
			default.createElement("ul", {
					className: "group1"
				}, this.renderItem(1, "1-1"), this.renderItem(2, "1-2"), this.renderItem(3, "1-3")), n.
			default.createElement("ul", {
					className: "group2"
				}, this.renderItem(4, "1-4"), this.renderItem(5, "1-5"), this.renderItem(6, "1-6")), n.
			default.createElement("div", {
					className: "title"
				}, n.
			default.createElement("span", null, "线条")), n.
			default.createElement("ul", {
					className: "group1"
				}, this.renderItem(7, "2-1"), this.renderItem(8, "2-2"), this.renderItem(9, "2-3")), n.
			default.createElement("div", {
					className: "title"
				}, n.
			default.createElement("span", null, "通道")), n.
			default.createElement("ul", {
					className: "group1"
				}, this.renderItem(10, "3-1"), this.renderItem(11, "3-2"), this.renderItem(12, "3-3")), n.
			default.createElement("div", {
					className: "title"
				}, n.
			default.createElement("span", null, "时空")), n.
			default.createElement("ul", {
					className: "group1"
				}, this.renderItem(13, "4-1"), this.renderItem(14, "4-2"), this.renderItem(15, "4-3")), n.
			default.createElement("ul", {
					className: "group2"
				}, this.renderItem(16, "4-4"), this.renderItem(17, "4-5")), n.
			default.createElement("div", {
					className: "title"
				}, n.
			default.createElement("span", null, "形态")), n.
			default.createElement("ul", {
					className: "group1"
				}, this.renderItem(18, "5-1"), this.renderItem(19, "5-2"), this.renderItem(20, "5-3")), n.
			default.createElement("div", {
					className: "title"
				}, n.
			default.createElement("span", null, "清除")), n.
			default.createElement("ul", {
					className: "group1"
				}, this.renderItem(21, "6-1"), this.renderItem(22, "6-2")))
			}
		});
	t.
default = s, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(36),
		r = (i(o), a(37)),
		s = n.
	default.createClass({
			displayName: "DrawText",
			getInitialState: function() {
				return {
					line: this.props.line
				}
			},
			componentDidMount: function() {
				this.colorBtn = {}, this.colorBtn.line2 = new jscolor(this.refs.color.getDOMNode(), {
					valueElement: this.refs.colorValue.getDOMNode(),
					zIndex: 99999
				})
			},
			render: function() {
				var e = this.props;
				e.lineIndex, this.state.line;
				return n.
			default.createElement("table", null, n.
			default.createElement("tr", {
					ref: "line1"
				}, n.
			default.createElement("td", null, n.
			default.createElement("input", {
					name: "inputtext",
					maxLength: "50",
					type: "text",
					className: "TextInput"
				}))), n.
			default.createElement("tr", {
					ref: "line2"
				}, n.
			default.createElement("td", null, n.
			default.createElement("span", {
					className: "tip"
				}, "大小  "), n.
			default.createElement(r.IntegerInput, {
					name: "size",
					defaultValue: "12"
				})), n.
			default.createElement("td", null, n.
			default.createElement("span", {
					className: "tip"
				}, "颜色  "), n.
			default.createElement("button", {
					ref: "color"
				}), n.
			default.createElement("input", {
					ref: "colorValue",
					type: "hidden",
					defaultValue: "ee2200"
				}))))
			}
		});
	t.
default = s, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/jscolor")
}, function(e, t) {
	e.exports = require("hippo/components/NumberInput")
}, function(e, t) {
	e.exports = require("hippo/components/CrossModal")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(40),
		r = a(6),
		s = a(41),
		c = i(s),
		u = n.
	default.createClass({
			displayName: "Influx",
			getInitialState: function() {
				return {}
			},
			componentDidMount: function() {
				this.setupCapWatcher()
			},
			componentWillUnmount: function() {
				this.destroyCapWatcher()
			},
			componentDidUpdate: function(e, t) {
				e.market == this.props.market && e.code == this.props.code || (this.destroyCapWatcher(), this.setupCapWatcher())
			},
			setupCapWatcher: function() {
				var e = this;
				if (this.props.market && this.props.code) {
					if ((0, r.isStockIndex)(this.props.market, this.props.code)) return void this.setState({
						cashFlow: null
					});
					this.capWatcher && this.destroyCapWatcher(), this.capWatcher = new o.StockCapflow, this.capWatcher.onCreate(this.props.market, this.props.code), this.capWatcher.on("update", function() {
						var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
						e.setState({
							cashFlow: t
						})
					})
				}
			},
			destroyCapWatcher: function() {
				this.capWatcher && (this.capWatcher.onStop(), this.capWatcher = null)
			},
			_renderCashFlowTable: function() {
				var e = this.state.cashFlow || {};
				return n.
			default.createElement("table", {
					className: "detailed"
				}, n.
			default.createElement("tr", null, n.
			default.createElement("th", null), n.
			default.createElement("th", null, "流入"), n.
			default.createElement("th", null, "流出"), n.
			default.createElement("th", null, "净流入")), n.
			default.createElement("tr", null, n.
			default.createElement("td", null, "大单"), n.
			default.createElement("td", {
					className: "red"
				}, (0, r.fitNumber)(e.binflow)), n.
			default.createElement("td", {
					className: "green"
				}, (0, r.fitNumber)(e.boutflow)), n.
			default.createElement("td", {
					className: "white"
				}, (0, r.fitNumber)(e.netbinflow))), n.
			default.createElement("tr", null, n.
			default.createElement("td", null, "中单"), n.
			default.createElement("td", {
					className: "red"
				}, (0, r.fitNumber)(e.minflow)), n.
			default.createElement("td", {
					className: "green"
				}, (0, r.fitNumber)(e.moutflow)), n.
			default.createElement("td", {
					className: "white"
				}, (0, r.fitNumber)(e.netminflow))), n.
			default.createElement("tr", null, n.
			default.createElement("td", null, "小单"), n.
			default.createElement("td", {
					className: "red"
				}, (0, r.fitNumber)(e.sinflow)), n.
			default.createElement("td", {
					className: "green"
				}, (0, r.fitNumber)(e.soutflow)), n.
			default.createElement("td", {
					className: "white"
				}, (0, r.fitNumber)(e.netsinflow))), n.
			default.createElement("tr", null, n.
			default.createElement("td", null, "合计"), n.
			default.createElement("td", {
					className: "red"
				}, (0, r.fitNumber)(e.inflow)), n.
			default.createElement("td", {
					className: "green"
				}, (0, r.fitNumber)(e.outflow)), n.
			default.createElement("td", {
					className: "white"
				}, (0, r.fitNumber)(e.netinflow))))
			},
			_renderMiniCashFlowTable: function() {
				var e = this.state.cashFlow || {};
				return n.
			default.createElement("table", null, n.
			default.createElement("tr", null, n.
			default.createElement("td", null, "流入", n.
			default.createElement("br", null), n.
			default.createElement("span", {
					className: "red"
				}, (0, r.fitNumber)(e.inflow))), n.
			default.createElement("td", null, "流出", n.
			default.createElement("br", null), n.
			default.createElement("span", {
					className: "green"
				}, (0, r.fitNumber)(e.outflow))), n.
			default.createElement("td", null, "净流入", n.
			default.createElement("br", null), n.
			default.createElement("span", {
					className: "white"
				}, (0, r.fitNumber)(e.netinflow)))))
			},
			render: function() {
				return n.
			default.createElement("div", {
					className: "MyStock-Influx"
				}, this.props.stockDetail ? this._renderCashFlowTable() : this._renderMiniCashFlowTable(), n.
			default.createElement(c.
			default, {
					cashFlow: this.state.cashFlow || {}
				}))
			}
		});
	t.
default = u, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/StockCapflow")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(29),
		r = i(o),
		s = a(42),
		c = i(s),
		u = n.
	default.createClass({
			displayName: "StockPieD3",
			getDefaultProps: function() {
				return {
					borderArcSrcData: [-1],
					rectWidth: 200,
					rectHeight: 200,
					colors: ["#FF3D43", "#D6242A", "#B4131A", "#35781C", "#449727", "#6AB748"],
					outerRadius: 70,
					innerRadius: 0,
					borderOuterRadius: 60,
					borderInnerRadius: 0,
					triangleSrcData: {
						triLineOne: [{
							x: 0,
							y: 0
						}, {
							x: 5,
							y: 0
						}],
						triLineTwo: [{
							x: 5,
							y: 0
						}, {
							x: 10,
							y: 5
						}],
						triLineThree: [{
							x: 0,
							y: 0
						}, {
							x: 10,
							y: 5
						}]
					}
				}
			},
			getInitialState: function() {
				return this.colorIndex = [0, 1, 2, 3, 4, 5], {
					srcData: [-1],
					cashFlowInfo: []
				}
			},
			componentWillReceiveProps: function(e) {
				if (e.cashFlow != this.props.cashFlow) if (r.
			default.isEmptyObject(e.cashFlow)) this.setState({
					srcData: [],
					cashFlowInfo: []
				});
				else {
					var t = this.initSrcData(e);
					this.setState({
						srcData: t,
						cashFlowInfo: this.initCashFlowInfo(e.cashFlow)
					})
				}
			},
			componentDidUpdate: function() {
				this.drawPie()
			},
			initCashFlowInfo: function(e) {
				var t = [];
				return t.push({
					cashFlowClassName: "binflowrate",
					cashFlowName: "流入大单",
					cashFlowPercent: (100 * e.binflowrate).toFixed(0) - 0
				}), t.push({
					cashFlowClassName: "minflowrate",
					cashFlowName: "流入中单",
					cashFlowPercent: (100 * e.minflowrate).toFixed(0) - 0
				}), t.push({
					cashFlowClassName: "sinflowrate",
					cashFlowName: "流入小单",
					cashFlowPercent: (100 * e.sinflowrate).toFixed(0) - 0
				}), t.push({
					cashFlowClassName: "boutflowrate",
					cashFlowName: "流出大单",
					cashFlowPercent: (100 * e.boutflowrate).toFixed(0) - 0
				}), t.push({
					cashFlowClassName: "moutflowrate",
					cashFlowName: "流出中单",
					cashFlowPercent: (100 * e.moutflowrate).toFixed(0) - 0
				}), t.push({
					cashFlowClassName: "soutflowrate",
					cashFlowName: "流出小单",
					cashFlowPercent: (100 * e.soutflowrate).toFixed(0) - 0
				}), t
			},
			initSrcData: function(e) {
				for (var t = [(100 * e.cashFlow.binflowrate).toFixed(0) - 0, (100 * e.cashFlow.minflowrate).toFixed(0) - 0, (100 * e.cashFlow.sinflowrate).toFixed(0) - 0, (100 * e.cashFlow.soutflowrate).toFixed(0) - 0, (100 * e.cashFlow.moutflowrate).toFixed(0) - 0, (100 * e.cashFlow.boutflowrate).toFixed(0) - 0], a = 0, i = 0; i < t.length; i++) a += t[i];
				return 0 == a && (t = [-1]), t
			},
			drawPie: function() {
				this.removeD3();
				var e = (0, r.
			default)(this.getDOMNode()).find(".StockPieD3"),
					t = c.
				default.select(e[0]).append("svg").attr("width", this.props.rectWidth).attr("height", this.props.rectHeight),
					a = this.props.colors,
					i = c.
				default.layout.pie().sort(null),
					l = {};
				l.expand = function(e, t) {
					if (e.open) return e.open = !1, "translate(" + [0, 0] + ")";
					e.open = !0;
					var a = .15,
						i = o.centroid(e);
					return i[0] *= a, i[1] *= a, "translate(" + i + ")"
				};
				var n = i(this.state.srcData),
					o = c.
				default.svg.arc().innerRadius(0).outerRadius(this.props.outerRadius),
					s = t.selectAll(".arcs").data(n).enter().append("g").attr("transform", "translate(" + this.props.rectWidth / 2 + "," + this.props.rectHeight / 2 + ")"),
					u = this;
				s.append("path").attr("fill", function(e, t) {
					return e.data == -1 ? "#BCBCBC" : a[u.colorIndex[t]]
				}).attr("d", function(e) {
					return o(e)
				}), s.append("text").attr("text-anchor", "middle").attr("fill", "#CCC").text(function(e, t) {
					return e.data < 10 ? " " : e.data + "%"
				}).attr("transform", function(e) {
					var t = o.centroid(e),
						a = 1.2;
					return t[0] = t[0] * a, t[1] = t[1] * a, "translate(" + t + ")"
				})
			},
			componentDidMount: function() {},
			removeD3: function() {
				(0, r.
			default)(".StockPieD3 *").remove()
			},
			createLi: function(e, t, a) {
				var i = n.
			default.createElement("li", {
					className: e,
					key: e
				}, n.
			default.createElement("span", {
					className: "D3Spot"
				}), n.
			default.createElement("span", {
					className: "cashFlowName"
				}, t), n.
			default.createElement("span", {
					className: "cashFlowPercent"
				}, a + "%"));
				return i
			},
			createCashFlowList: function() {
				var e = [];
				if (this.state.cashFlowInfo) {
					var t = this;
					this.state.cashFlowInfo.forEach(function(a, i) {
						var l = t.createLi(a.cashFlowClassName, a.cashFlowName, a.cashFlowPercent);
						e.push(l)
					})
				}
				return n.
			default.createElement("ul", null, e)
			},
			render: function() {
				var e = this.createCashFlowList();
				return n.
			default.createElement("div", {
					className: "D3Pie"
				}, n.
			default.createElement("div", {
					className: "StockPieD3"
				}), n.
			default.createElement("div", {
					className: "D3Info"
				}, e))
			}
		});
	t.
default = u, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/d3")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
		return t.
	default = e, t
	}
	function l(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(4),
		o = l(n),
		r = a(15),
		s = l(r),
		c = a(12),
		u = l(c),
		d = a(2),
		p = l(d),
		h = a(6),
		f = a(7),
		m = a(16),
		k = a(17),
		g = l(k),
		S = a(21),
		b = i(S),
		v = a(3),
		y = l(v),
		x = a(11),
		w = l(x),
		E = a(44),
		I = s.
	default.createClass({
			displayName: "PlateAside",
			getInitialState: function() {
				var e = this.props,
					t = e.market,
					a = e.code,
					i = e.name,
					l = e.star,
					n = e.subType,
					o = e.sub_board;
				return this.tempInfo = {
					market: t,
					code: a,
					name: i,
					star: l,
					subType: n,
					sub_board: o
				}, {}
			},
			hasStar: function(e, t) {
				var a = !1;
				return e && t && w.
			default.isMyStock(e, t, function(e) {
					a = e
				}), a
			},
			getMenu: function(e, t) {
				var a = e.market,
					i = e.code,
					l = (0, h.isTradable)(a, i);
				return {
					items: y.
				default.stockItemMenu(l, t)
				}
			},
			componentWillReceiveProps: function(e) {},
			componentDidMount: function() {
				var e = this;
				this.setupGrid(), this.dispatchId = u.
			default.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "WINDOW.RESIZE":
						e.grid.resize();
						break;
					case "MyStock:ADD_STOCK":
						var i = a.market,
							l = a.code;
						i == e.tempInfo.market && l == e.tempInfo.code && (e.tempInfo.star = !0, e.forceUpdate());
						break;
					case "MyStock:REMOVE_STOCK":
						var i = a.market,
							l = a.code;
						i == e.tempInfo.market && l == e.tempInfo.code && (e.tempInfo.star = !1, e.forceUpdate());
						break;
					case "StockTrade:DO_ORDER_SUCC":
						e.quickOrderHint && e.quickOrderHint.close(), e.quickOrderHint = null
					}
				})
			},
			componentWillUnmount: function() {
				this.dispatchId && u.
			default.unregister(this.dispatchId), b.destroyGrid(this), this.cancelShortcut()
			},
			componentDidUpdate: function() {
				var e = this.props.market,
					t = this.props.code,
					a = this.tempInfo.market,
					i = this.tempInfo.code;
				e == a && t == i || (o.
			default.extend(this.tempInfo, this.props), b.destroyGrid(this), this.setupGrid())
			},
			setupGrid: function() {
				var e = this;
				if (this.tempInfo.market && this.tempInfo.code) {
					var t = o.
				default.extend({
						gridType: "QuoteList",
						sort: !0,
						sortKey: "PX_CHANGE_PCT",
						showIdx: !1,
						columns: (0, f.boardStockHeads)(),
						dataProvider: E.BoardListDataProvider
					}, this.tempInfo),
						a = b.setupGrid(this, this.refs.grid.getDOMNode(), t);
					a.on("render:initial", function() {}), a.on("dblclick", function(t) {
						e.enterStock(t)
					}), a.on("contextmenu", function(t, a, i) {
						if ("undefined" != typeof e.getMenu) {
							var l = e.hasStar(a.market, a.code),
								n = e.getMenu(a, l);
							n && m.Menu.show(t, {
								options: n.items,
								data: {
									stock: a,
									srcIdx: i
								}
							}, n.handler || e.onContextMenuClick)
						}
					}), this.grid = a
				}
			},
			onContextMenuClick: function(e, t, a) {
				var i = (t.join(":"), a.stock);
				switch (e) {
				case y.
				default.Lang("Add"):
					w.
				default.addStock(i.market, i.code, i.name);
					break;
				case y.
				default.Lang("Delete"):
					w.
				default.removeStock(i.market, i.code);
					break;
				case y.
				default.Lang("View"):
					this.enterStock(i);
					break;
				case y.
				default.Lang("Up"):
					this.grid.reorderStock(i, a.srcIdx, Math.max(a.srcIdx - 1, 0));
					break;
				case y.
				default.Lang("Down"):
					this.grid.reorderStock(i, a.srcIdx, a.srcIdx + 1);
					break;
				case y.
				default.Lang("Top"):
					this.grid.reorderStock(i, a.srcIdx, 0);
					break;
				case y.
				default.Lang("Bottom"):
					this.grid.reorderStock(i, a.srcIdx, -1);
					break;
				case y.
				default.Lang("GeneBuy"):
				case y.
				default.Lang("GeneSell"):
					var l = i.market,
						n = i.code,
						o = p.
					default.getImpl("StockTrade:QuickTrade");
					this.quickOrderHint = m.Popup.show({
						className: "QuickOrder-Wrap",
						content: s.
					default.createElement(o, {
							market: l,
							code: n,
							opType: e == y.
						default.Lang("GeneBuy") ? 1:
							2
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					});
					break;
				case y.
				default.Lang("CollBuy"):
				case y.
				default.Lang("CollSell"):
				case y.
				default.Lang("FinaBuy"):
				case y.
				default.Lang("MargSell"):
					var l = i.market,
						n = i.code,
						r = p.
					default.getImpl("StockTrade:QuickCredit"),
						c = ["", y.
					default.Lang("CollBuy"), y.
					default.Lang("CollSell"), y.
					default.Lang("FinaBuy"), y.
					default.Lang("MargSell")].indexOf(e);
					this.quickOrderHint = m.Popup.show({
						className: "QuickOrder-Wrap",
						content: s.
					default.createElement(r, {
							market: l,
							code: n,
							opType: c
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					})
				}
			},
			toggleStar: function() {
				var e = this.props,
					t = e.market,
					a = e.code,
					i = e.name,
					l = this.tempInfo.star || !1;
				l ? w.
			default.removeStock(t, a):
				w.
			default.addStock(t, a, i), this.tempInfo.star = !l
			},
			resize: function() {
				this.refs.grid.resize()
			},
			regShortcut: function() {
				var e = this;
				this._shortcut_up = g.
			default.reg("up", function(t, a) {
					e.grid.handleKey("up")
				}), this._shortcut_down = g.
			default.reg("down", function() {
					e.grid.handleKey("down")
				}), this._shortcut_left = g.
			default.reg("left", function() {
					e.grid.handleKey("left")
				}), this._shortcut_right = g.
			default.reg("right", function() {
					e.grid.handleKey("right")
				}), this._shortcut_pageup = g.
			default.reg("pageup", function() {
					e.grid.handleKey("pageup")
				}), this._shortcut_pagedown = g.
			default.reg("pagedown", function() {
					e.grid.handleKey("pagedown")
				}), this._shortcut_enter = g.
			default.reg("enter", function() {
					var t = e.grid.getSelectedStock();
					e.enterStock(t)
				}), this._shortcut_f10 = g.
			default.reg("f10", function() {
					var t = e.grid.getSelectedStock();
					if ((0, h.isStockHaveF10)(t.market, t.code)) {
						var a = t.market,
							i = t.code,
							l = t.name;
						h.Event.bubble(e.getDOMNode(), {
							type: "ADD_TAB",
							subtype: "IFRAME",
							name: "F10:" + l,
							id: "f10:" + a + ":" + i,
							url: "http://f9.chinabigdata.com/" + a.toUpperCase() + i + ".html?v=1"
						})
					}
				}), this._shortcut_ins = g.
			default.reg("ins", function() {
					var t = e.grid.getSelectedStock();
					t && w.
				default.addStock(t.market, t.code, t.name)
				}), this._shortcut_del = g.
			default.reg("del", function() {
					var t = e.grid.getSelectedStock();
					t && w.
				default.removeStock(t.market, t.code)
				})
			},
			cancelShortcut: function() {
				g.
			default.cancel("up", this._shortcut_up), g.
			default.cancel("down", this._shortcut_down), g.
			default.cancel("left", this._shortcut_left), g.
			default.cancel("right", this._shortcut_right), g.
			default.cancel("pageup", this._shortcut_pageup), g.
			default.cancel("pagedown", this._shortcut_pagedown), g.
			default.cancel("f10", this._shortcut_f10), g.
			default.cancel("ins", this._shortcut_ins), g.
			default.cancel("del", this._shortcut_del), g.
			default.cancel("enter", this._shortcut_enter)
			},
			enterStock: function(e) {
				h.Event.bubble(this.getDOMNode(), {
					type: "ADD_TAB",
					subtype: "ENTER_STOCK",
					market: e.market,
					code: e.code,
					name: e.name,
					gridType: "QuoteList"
				})
			},
			render: function() {
				var e = this.props.market,
					t = this.props.code,
					a = this.props.name,
					i = this.props.star,
					l = this.tempInfo.market,
					n = this.tempInfo.code;
				e == l && t == n || (this.tempInfo.star = i);
				var i = this.tempInfo.star;
				return s.
			default.createElement("aside", {
					className: "StockQuote-DetailRight StockQuote-PlateAside",
					key: "plateAside",
					tabIndex: "0",
					onFocus: this.regShortcut,
					onBlur: this.cancelShortcut
				}, s.
			default.createElement("div", {
					className: "MyStock-TimeSeriesWrap noTimeSeries"
				}, s.
			default.createElement("hgroup", null, s.
			default.createElement("span", null, a))), s.
			default.createElement("div", {
					ref: "grid",
					className: "plateAside-table"
				}))
			}
		});
	t.
default = I, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function n(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = function() {
			function e(e, t) {
				for (var a = 0; a < t.length; a++) {
					var i = t[a];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, a, i) {
				return a && e(t.prototype, a), i && e(t, i), t
			}
		}(),
		r = function(e, t, a) {
			for (var i = !0; i;) {
				var l = e,
					n = t,
					o = a;
				i = !1, null === l && (l = Function.prototype);
				var r = Object.getOwnPropertyDescriptor(l, n);
				if (void 0 !== r) {
					if ("value" in r) return r.value;
					var s = r.get;
					if (void 0 === s) return;
					return s.call(o)
				}
				var c = Object.getPrototypeOf(l);
				if (null === c) return;
				e = c, t = n, a = o, i = !0, r = c = void 0
			}
		},
		s = a(4),
		c = i(s),
		u = a(24),
		d = a(45),
		p = i(d),
		h = a(19),
		f = (i(h), a(30), a(6)),
		m = a(3),
		k = (i(m), function(e) {
			function t(e) {
				l(this, t), r(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.board_type = e.subType, this.sub_board = e.sub_board || "", this.sortKey = e.sortKey || "PX_NOW", this.asc = e.asc || !1, this.offset = 0, this.limit = 0, this.sendTotal = !1
			}
			return n(t, e), o(t, [{
				key: "config",
				value: function(e) {
					this.sendTotal = !1, c.
				default.extend(this, e), this.watch(0, this.limit, !0)
				}
			}, {
				key: "getData",
				value: function(e) {
					this.initialCbk = e
				}
			}, {
				key: "watch",
				value: function(e, t, a) {
					var i = this;
					if (a || this.offset != e || this.limit != t) {
						this.boardQuoteList && this.destroy();
						var l = hippo.quote.BoardTypes[this.board_type],
							n = hippo.quote.RankSortType[this.sortKey];
						this.sub_board ? this.boardQuoteList = p.
					default.boardManager.getBoardQuoteList(l, this.sub_board, this.asc ? 0 : 1, n):
						this.boardQuoteList = p.
					default.boardManager.getBoardQuoteList(l, this.asc ? 0 : 1, n), this.boardQuoteList.setCount(t || 20), this.boardQuoteList.setFrom(e || 0), this.handler = new hippo.common.EventObject, this.handler.setEventHandler(function(a) {
							var l = a.getObject(),
								n = l.getAllItems();
							n = n.map(function(t, a) {
								return (0, f.srtMap)(t, {
									_idx: e + a,
									market: t.getMarket(),
									code: t.getCode(),
									name: t.getName()
								})
							}), !i.sendTotal && i.initialCbk ? (i.initialCbk({
								total: l.getTotal(),
								data: n
							}), i.sendTotal = !0) : i.emit("data", n, e, t)
						}), p.
					default.boardManager.beginWatch(this.boardQuoteList, this.handler), this.offset = e, this.limit = t
					}
				}
			}, {
				key: "destroy",
				value: function() {
					this.boardQuoteList && (p.
				default.boardManager.endWatch(this.boardQuoteList, this.handler), this.boardQuoteList = null, this.handler = null)
				}
			}]), t
		}(u.EventEmitter));
	t.BoardListDataProvider = k
}, function(e, t) {
	e.exports = require("hippo/domain/quote")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = function() {
			function e(e, t) {
				var a = [],
					i = !0,
					l = !1,
					n = void 0;
				try {
					for (var o, r = e[Symbol.iterator](); !(i = (o = r.next()).done) && (a.push(o.value), !t || a.length !== t); i = !0);
				} catch (e) {
					l = !0, n = e
				} finally {
					try {
						!i && r.
						return &&r.
						return ()
					} finally {
						if (l) throw n
					}
				}
				return a
			}
			return function(t, a) {
				if (Array.isArray(t)) return t;
				if (Symbol.iterator in Object(t)) return e(t, a);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		n = a(29),
		o = i(n),
		r = a(15),
		s = i(r),
		c = a(16),
		u = (a(6), a(17)),
		d = i(u),
		p = a(23),
		h = i(p),
		f = "",
		m = 17,
		k = s.
	default.createClass({
			displayName: "Filter",
			getInitialState: function() {
				return {
					mounted: !1,
					scrollLeft: 0,
					showMenu: !1
				}
			},
			getFirstUsableFilter: function(e) {
				for (var t = 0, a = this.getSettingsStore().getFilterSettings(); t < a.length && a[t].hide;) t++;
				return a[t]
			},
			getCurrentFilterItem: function() {
				var e, t = this,
					a = this.getSettingsStore().getFilterSettings();
				a.some(function(a) {
					if (t.state.active == a.label) return e = a, !0
				});
				return e
			},
			defaultFilterIsUsable: function() {
				var e = this.getSettingsStore().getFilterSettings(),
					t = !1;
				if (f) for (var a = 0; a < e.length; a++) e[a].label != f || e[a].hide ? "" : t = !0;
				return t
			},
			componentWillMount: function() {
				var e = this.getFirstUsableFilter(f);
				this.defaultFilterIsUsable() && (e.label = f), this.setActive(e ? e.label : "", !1)
			},
			componentDidMount: function() {
				var e = this;
				this.getSettingsStore().addSettingsListener(this.onChange);
				var t = this.refs.list.getDOMNode();
				this.setState({
					$list: t,
					width: t.clientWidth,
					mounted: !0
				}), this.props.showAside && "function" == typeof this.props.toggleAside && (this._shortcut_f7 = d.
			default.reg("f7", function() {
					e.toggleAside()
				}))
			},
			onChange: function() {
				var e = this.getCurrentFilterItem();
				e && !e.hide || (e = this.getFirstUsableFilter(), this.setActive(e ? e.label : "")), this.forceUpdate()
			},
			componentWillUnmount: function() {
				this.getSettingsStore().removeSettingsListener(this.onChange), this._shortcut_f7 && d.
			default.cancel("f7", this._shortcut_f7)
			},
			onClick: function(e) {
				var t = e.currentTarget.dataset,
					a = t.label;
				this.setActive(a), f = a, "function" == typeof this.props.changeScrollOffset && this.props.changeScrollOffset(0)
			},
			getPos: function(e) {
				for (var t, a, i = this.getAllItems(), l = 0, n = 0; n < i.length; n++) {
					var o = i[n];
					o.label == e && (t = l);
					var r = this.getItemSize(i[n].label);
					if (l += r, o.label == e) {
						a = l;
						break
					}
				}
				return [t, a]
			},
			setActive: function(e) {
				var t = this,
					a = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
					i = {
						active: e
					};
				if (a) {
					var n = this.getPos(e),
						o = l(n, 2),
						r = (o[0], o[1]),
						s = Math.max(r - this.state.width, 0);
					i.scrollLeft = s
				}
				this.props.setFilter(e), this.setState(i, function() {
					a && (t.state.showMenu && (s += m), t.refs.list.getDOMNode().scrollLeft = s)
				})
			},
			getSettingsStore: function() {
				var e = this.props,
					t = e.gridType,
					a = e.filters;
				return this.props.settingsStore || h.
			default.getInstance(t).setFilters(a)
			},
			resize: function() {
				this.setState({
					width: this.refs.list.getDOMNode().clientWidth
				})
			},
			getMenuItems: function() {
				for (var e = this.getAllItems(), t = this.state.scrollLeft, a = t + this.state.width, i = 0, l = [], n = 0; n < e.length; n++) {
					var o = e[n],
						r = this.getItemSize(o.label);
					(i < t || i + r > a) && l.push({
						id: n,
						title: o.label
					}), i += r
				}
				return l
			},
			showMoreMenu: function(e) {
				var t = this;
				e.nativeEvent.stopImmediatePropagation(), c.Menu.show(e.nativeEvent, {
					options: this.getMenuItems()
				}, function(e, a, i) {
					t.setActive(e.title)
				})
			},
			getItemSize: function(e) {
				var t = (0, o.
			default)('<li class="Filter-Item">' + e + "</li>");
				t.appendTo(this.state.$list);
				var a = t.outerWidth();
				return t.remove(), a
			},
			getVisibleItems: function(e) {
				for (var t = 0, a = this.state.width + this.state.scrollLeft, i = [], l = 0; l < e.length; l++) {
					var n = e[l],
						o = this.getItemSize(e[l].label);
					if (t + o > a) break;
					i.push(n), t += o
				}
				return i
			},
			getAllItems: function() {
				var e = this.getSettingsStore().getFilterSettings();
				return e.filter(function(e) {
					return !e.hide
				})
			},
			renderItems: function() {
				var e = this,
					t = this.getAllItems(),
					a = this.getVisibleItems(t),
					i = a.map(function(t, a) {
						var i = "Filter-Item " + (e.state.active == t.label ? "active" : "");
						return s.
					default.createElement("li", {
							className: i,
							key: a,
							"data-idx": a,
							"data-label": t.label,
							onClick: e.onClick
						}, t.label)
					});
				return [i, a.length < t.length]
			},
			toggleAside: function() {
				var e = this;
				this.props.toggleAside(function() {
					e.resize()
				})
			},
			renderToolBtns: function(e) {
				var t = [];
				return e && t.push(s.
			default.createElement("i", {
					key: "showMenu",
					className: "ico showMenu",
					onClick: this.showMoreMenu
				}, "⋮")), "function" == typeof this.props.toggleAside && (this.props.myStock && t.push(s.
			default.createElement("i", {
					key: "refreshMyStock",
					className: "ico refreshMyStock",
					onClick: this.props.refreshMyStock
				})), t.push(s.
			default.createElement("i", {
					key: "openSettings",
					className: "ico openSettings",
					onClick: this.props.openSettings
				})), this.props.showAside && (t.push(s.
			default.createElement("i", {
					key: "sep",
					className: "ico sep"
				})), this.props.asideVisible ? t.push(s.
			default.createElement("i", {
					key: "hideAside",
					className: "ico arrow arrow-right",
					onClick: this.toggleAside
				})) : t.push(s.
			default.createElement("i", {
					key: "hideAside",
					className: "ico arrow arrow-left",
					onClick: this.toggleAside
				})))), t
			},
			render: function() {
				var e, t;
				if (this.state.mounted) {
					var a = this.renderItems(),
						i = l(a, 2);
					e = i[0], t = i[1]
				}
				this.state.showMenu = t;
				var n = "StockQuote-Filter";
				return s.
			default.createElement("header", {
					hidden: !this.props.showFilter,
					className: n
				}, s.
			default.createElement("ul", {
					ref: "list"
				}, e), s.
			default.createElement("div", {
					className: "Filter-Toolbar"
				}, this.renderToolBtns(t)))
			}
		});
	t.
default = k, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
		return t.
	default = e, t
	}
	function l(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(4),
		o = (l(n), a(29)),
		r = (l(o), a(15)),
		s = l(r),
		c = a(6),
		u = (i(c), a(16)),
		d = a(19),
		p = (l(d), a(48)),
		h = l(p),
		f = a(3),
		m = (l(f), s.
	default.createClass({
			displayName: "Settings",
			getInitialState: function() {
				return {
					filters: this.props.settingsStore.getFilterSettings(),
					columns: this.props.settingsStore.getColumnSettings()
				}
			},
			getDefaultProps: function() {
				return {
					configFilter: !0,
					configColumns: !0
				}
			},
			reset: function() {
				this.setState({
					filters: this.props.settingsStore.getFilterDefaults(),
					columns: this.props.settingsStore.getColumnDefaults()
				})
			},
			saveSettings: function() {
				this.props.settingsStore.saveSettings(this.state.filters, this.state.columns)
			},
			render: function() {
				var e = this.state,
					t = [],
					a = this.props,
					i = a.configFilter,
					l = a.configColumns,
					n = ["拖动", "标签名称", "操作"],
					o = ["拖动", "栏目名称", "操作"];
				return i && t.push(s.
			default.createElement("div", {
					className: "Filter",
					label: "标签栏",
					key: "filter"
				}, s.
			default.createElement(h.
			default, {
					list: e.filters,
					head: n
				}))), l && t.push(s.
			default.createElement("div", {
					className: "Column",
					label: "列表",
					key: "column"
				}, s.
			default.createElement(h.
			default, {
					list: e.columns,
					head: o
				}))), s.
			default.createElement(u.Tabs, {
					className: "Light"
				}, t)
			}
		}));
	t.
default = m, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/components/EditList")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(7),
		r = a(6),
		s = a(3),
		c = i(s),
		u = a(18),
		d = i(u),
		p = a(44),
		h = 0,
		f = n.
	default.createClass({
			displayName: "QuoteList",
			getDefaultProps: function() {
				return {
					showAside: !1,
					showMenu: !0,
					gridType: "QuoteList"
				}
			},
			componentWillUnmount: function() {
				this.changeScrollOffset(this.refs.list.grid.scroll)
			},
			changeScrollOffset: function(e) {
				h = e, this.forceUpdate()
			},
			getMenu: function(e, t) {
				var a = e.market,
					i = e.code,
					l = (0, r.isTradable)(a, i);
				return {
					items: c.
				default.stockItemMenu(l, t)
				}
			},
			resize: function() {
				this.refs.list.resize()
			},
			render: function() {
				return n.
			default.createElement(d.
			default, {
					cls: "QuoteListWrap",
					ref: "list",
					gridType: this.props.gridType,
					sort: !0,
					showAside: this.props.showAside,
					showMenu: this.props.showMenu,
					asideVisible: this.props.asideVisible,
					sortKey: "PX_CODE",
					asc: !0,
					getMenu: this.getMenu,
					filters: c.
				default.quoteFilters,
					columns:
					(0, o.heads)(!0),
					dataProvider: p.BoardListDataProvider,
					active: this.props.active,
					group: this.props.group,
					widgetContainer: this.props.widgetContainer,
					scrollOffset: h,
					changeScrollOffset: this.changeScrollOffset
				})
			}
		}),
		m = n.
	default.createClass({
			displayName: "QuoteListPanel",
			getDefaultProps: function() {
				return {
					showMenu: !0
				}
			},
			resize: function() {
				this.refs.list.resize()
			},
			render: function() {
				return n.
			default.createElement(f, {
					ref: "list",
					gridType: "QuoteListPanel",
					asideVisible: !1,
					showMenu: this.props.showMenu,
					group: this.props.group,
					active: this.props.active,
					widgetContainer: this.props.widgetContainer
				})
			}
		});
	t.QuoteListPanel = m, t.
default = f
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = Object.assign ||
	function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var a = arguments[t];
			for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
		}
		return e
	}, n = a(15), o = i(n), r = a(29), s = (i(r), a(12)), c = i(s), u = (a(16), a(6)), d = a(2), p = i(d), h = a(19), f = i(h), m = a(20), k = i(m), g = a(26), S = i(g), b = a(51), v = i(b), y = a(52), x = i(y), w = a(3), E = (i(w), a(11)), I = i(E), T = a(53), M = a(56), N = a(57), D = i(N), C = a(64), L = i(C), P = a(27), B = i(P), O = a(43), A = i(O), _ = a(61), W = (i(_), null), Q = o.
default.createClass({
		displayName: "StockDetail",
		mixins: [v.
	default],
		getInitialState: function() {
			var e, t;
			"PlateList" == this.props.gridType ? (e = "bk", t = "107842") : (e = "sz", t = "000776");
			var a = f.
		default.getItem(null, "stockquote") ? JSON.parse(f.
		default.getItem(null, "stockquote")):
			{};
			a = Object.assign(k.
		default.PreferenceSetting.stockquote, a);
			var i = "1" === a.news_expanded,
				l = this.props.market || e,
				n = this.props.code || t,
				o = this.props.bell || !1,
				r = {
					market: l,
					code: n,
					bell: o,
					asideVisible: "boolean" == typeof W ? W : i
				};
			return r
		},
		toggleDetailRight: function() {
			var e = (this.state.market + "_" + this.state.code, !this.state.asideVisible);
			this.state.asideVisible = e, this.forceUpdate(), W = e, this.refs.header.setState({
				asideVisible: !e
			}), setTimeout(function() {
				c.
			default.handlePluginAction({
					type: "WINDOW.RESIZE"
				})
			}, 0)
		},
		stockSwitch: function(e, t) {
			var a = e.stock,
				i = e.isFirst,
				l = e.isLast;
			this.setState({
				market: a.market,
				code: a.code,
				name: a.name,
				isFirst: i,
				isLast: l
			})
		},
		briefChange: function() {
			this.refs.brief._briefChange()
		},
		_renderAside: function(e) {
			var t = this.props,
				a = t.market,
				i = t.code,
				l = t.name,
				n = t.star,
				r = t.subType;
			return "PlateList" == e ? o.
		default.createElement(A.
		default, {
				market: a,
				code: i,
				name: l,
				star: n,
				subType: r,
				sub_board: i
			}):
			o.
		default.createElement(B.
		default, {
				stock: this.state.stock,
				stockDetail: "true"
			})
		},
		onWatchStock: function(e, t) {
			setTimeout(function() {
				var a = S.
			default.get(e, t) || {};
				I.
			default.visitStock(e, t, a.name)
			}, 0)
		},
		render: function() {
			var e = this.state,
				t = this.props,
				a = e.market || t.market,
				i = e.code || t.code,
				n = e.name || t.name,
				r = {
					market: a,
					code: i,
					star: e.star || t.star,
					bell: e.bell,
					gridType: e.gridType || t.gridType,
					asideVisible: this.state.asideVisible,
					isFirst: e.isFirst,
					isLast: e.isLast,
					toggleDetailRight: this.toggleDetailRight,
					stockSwitch: this.stockSwitch,
					briefChange: this.briefChange,
					name: n
				},
				s = (0, u.isStockIndex)(a, i),
				c = "StockDetail " + (this.state.asideVisible && !s ? "" : "StockDetail-hide-right"),
				d = s ? "handicap1" : "handicap";
			return o.
		default.createElement("div", {
				className: c,
				ref: "StockDetail"
			}, o.
		default.createElement("div", {
				className: "left"
			}, o.
		default.createElement("div", {
				className: "top"
			}, o.
		default.createElement(L.
		default, l({
				ref: "header",
				stock: e.stock
			}, r)), o.
		default.createElement(M.StockBrief, l({
				ref: "brief"
			}, e.stock, {
				gridType: r.gridType
			}))), o.
		default.createElement("div", {
				className: "bottom"
			}, o.
		default.createElement(D.
		default, {
				market: a,
				code: i,
				name: n,
				stock: e.stock,
				className: (0, u.isStockIndex)(a, i) ? "index" : null,
				lastClose: e.stock && e.stock.raw.closeprice,
				isStop: e.stock && e.stock.raw.stop,
				toggleDetailRight: this.toggleDetailRight,
				noBlurShortcut: !0
			}), "PlateList" == r.gridType ? "":
			o.
		default.createElement("div", {
				className: d
			}, (0, u.isStockIndex)(a, i) ? null : o.
		default.createElement(T.StockTickFive, {
				passive: !0,
				market: a,
				code: i,
				stock: e.stock
			}), o.
		default.createElement(T.StockTickDuel, {
				market: a,
				code: i,
				name: n,
				lastClose: e.stock && e.stock.raw.closeprice
			})))), o.
		default.createElement("div", {
				className: "right",
				ref: "DetailRight"
			}, this._renderAside(r.gridType)))
		}
	}), z = o.
default.createClass({
		displayName: "StockDetailOuter",
		getInitialState: function() {
			return x.
		default.report("gf_trader_StockQuote_viewStocks", {
				market: this.props.market,
				code: this.props.code
			}), {}
		},
		componentDidMount: function() {
			u.Event.watch(this.getDOMNode(), this.processBubbles)
		},
		componentWillUnmount: function() {
			u.Event.unwatch(this.getDOMNode(), this.processBubbles)
		},
		processBubbles: function(e) {
			var t = e.detail.type;
			"OPEN_NEWS" == t && this.openNews(e)
		},
		openNews: function(e) {
			var t = this;
			e.stopPropagation();
			var a = e.detail,
				i = a.catId,
				l = a.id,
				n = a.proxy;
			i && l ? this.setState({
				newsDetail: {
					catId: i,
					id: l,
					proxy: n
				}
			}, function() {
				t.refs.newsDetail && t.refs.newsDetail.setState({
					id: l,
					catId: i
				})
			}) : this.closeNews()
		},
		closeNews: function() {
			this.setState({
				newsDetail: null
			})
		},
		render: function() {
			var e, t = this.state.newsDetail,
				a = p.
			default.getImpl("StockNews:NewsDetail");
			return f.
		default.isInstalled("StockNews") && a && t && (e = o.
		default.createElement(a, {
				ref: "newsDetail",
				id: t.id,
				catId: t.catId,
				proxy: t.proxy,
				closeHandler: this.closeNews
			})), o.
		default.createElement("div", {
				className: "StockDetailOuter"
			}, o.
		default.createElement(Q, this.props), e)
		}
	});
	t.
default = z, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/mixins/StockWatcherMixin")
}, function(e, t) {
	e.exports = require("hippo/reporter")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
		return t.
	default = e, t
	}
	function l(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(15),
		o = l(n),
		r = a(12),
		s = l(r),
		c = a(2),
		u = l(c),
		d = a(54),
		p = a(30),
		h = a(55),
		f = l(h),
		m = a(33),
		k = l(m),
		g = a(6),
		S = a(16),
		b = i(g),
		v = a(26),
		y = l(v),
		x = a(51),
		w = l(x),
		E = a(17),
		I = l(E),
		T = a(29),
		M = l(T),
		N = a(3),
		D = l(N),
		C = b.getColor,
		L = b.fitNumber,
		P = o.
	default.createClass({
			displayName: "StockTickBuys",
			getDefaultProps: function() {
				return {
					showMenu: !0
				}
			},
			componentDidMount: function() {
				var e = this;
				this.dispatchId = s.
			default.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "StockTrade:DO_ORDER_SUCC":
						e.quickOrderHint && e.quickOrderHint.close(), e.quickOrderHint = null
					}
				})
			},
			componentWillUnmount: function() {
				this.dispatchId && s.
			default.unregister(this.dispatchId)
			},
			onContextMenuClick: function(e, t, a) {
				var i = a.market,
					l = a.code,
					n = a.price;
				switch (e) {
				case D.
				default.Lang("GeneBuy"):
				case D.
				default.Lang("GeneSell"):
					var r = u.
				default.getImpl("StockTrade:QuickTrade");
					this.quickOrderHint = S.Popup.show({
						className: "QuickOrder-Wrap",
						content: o.
					default.createElement(r, {
							market: i,
							code: l,
							price: n,
							opType: e == D.
						default.Lang("GeneBuy") ? 1:
							2
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					});
					break;
				case D.
				default.Lang("CollBuy"):
				case D.
				default.Lang("CollSell"):
				case D.
				default.Lang("FinaBuy"):
				case D.
				default.Lang("MargSell"):
					var s = u.
				default.getImpl("StockTrade:QuickCredit"),
						c = ["", D.
					default.Lang("CollBuy"), D.
					default.Lang("CollSell"), D.
					default.Lang("FinaBuy"), D.
					default.Lang("MargSell")].indexOf(e);
					this.quickOrderHint = S.Popup.show({
						className: "QuickOrder-Wrap",
						content: o.
					default.createElement(s, {
							market: i,
							code: l,
							price: n,
							opType: c
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					})
				}
			},
			onContextMenu: function(e) {
				var t = this.props,
					a = t.market,
					i = t.code,
					l = t.showMenu,
					n = (0, g.isTradable)(a, i);
				l && S.Menu.show(e, {
					options: n && l ? D.
				default.fiveItemMenu.sell:
					null,
					data : {
						market: a,
						code: i,
						price: parseFloat(e.currentTarget.dataset.price)
					}
				}, this.onContextMenuClick)
			},
			render: function() {
				var e = this,
					t = this.props.digits || b.getStockAccuracy(this.props.market, this.props.code),
					a = ["①", "②", "③", "④", "⑤"],
					i = +this.props.closeprice,
					l = this.props.buys.slice(0, 5).map(function(l, n) {
						var r = 0 == n ? "buysell1" : "",
							s = 0 == +l.bid ? o.
						default.createElement("td", {
								className: "white"
							}, "--"):
							o.
						default.createElement("td", {
								className: +l.bid > i ? "positive" : +l.bid < i ? "negative" : "white"
							}, o.
						default.createElement("span", {
								className: r
							}, l.bid.toFixed(t)));
						return o.
					default.createElement("tr", {
							className: r,
							key: n,
							onContextMenu: e.onContextMenu,
							"data-price": l.bid.toFixed(t),
							onClick: e.props.syncPrice
						}, o.
					default.createElement("td", null, "买", a[n]), s, o.
					default.createElement("td", {
							className: "white"
						}, L(Math.floor(+l.size))))
					});
				return o.
			default.createElement("table", {
					className: "three-way tick-buy"
				}, o.
			default.createElement("tbody", null, l))
			}
		}),
		B = o.
	default.createClass({
			displayName: "StockTickSales",
			getDefaultProps: function() {
				return {
					showMenu: !0
				}
			},
			componentDidMount: function() {
				var e = this;
				this.dispatchId = s.
			default.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "StockTrade:DO_ORDER_SUCC":
						e.quickOrderHint && e.quickOrderHint.close(), e.quickOrderHint = null
					}
				})
			},
			componentWillUnmount: function() {
				this.dispatchId && s.
			default.unregister(this.dispatchId)
			},
			onContextMenuClick: function(e, t, a) {
				var i = a.market,
					l = a.code,
					n = a.price;
				switch (e) {
				case D.
				default.Lang("GeneBuy"):
				case D.
				default.Lang("GeneSell"):
					var r = u.
				default.getImpl("StockTrade:QuickTrade");
					this.quickOrderHint = S.Popup.show({
						className: "QuickOrder-Wrap",
						content: o.
					default.createElement(r, {
							market: i,
							code: l,
							price: n,
							opType: e == D.
						default.Lang("GeneBuy") ? 1:
							2
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					});
					break;
				case D.
				default.Lang("CollBuy"):
				case D.
				default.Lang("CollSell"):
				case D.
				default.Lang("FinaBuy"):
				case D.
				default.Lang("MargSell"):
					var s = u.
				default.getImpl("StockTrade:QuickCredit"),
						c = ["", D.
					default.Lang("CollBuy"), D.
					default.Lang("CollSell"), D.
					default.Lang("FinaBuy"), D.
					default.Lang("MargSell")].indexOf(e);
					this.quickOrderHint = S.Popup.show({
						className: "QuickOrder-Wrap",
						content: o.
					default.createElement(s, {
							market: i,
							code: l,
							price: n,
							opType: c
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					})
				}
			},
			onContextMenu: function(e) {
				var t = this.props,
					a = t.market,
					i = t.code,
					l = t.showMenu,
					n = (0, g.isTradable)(a, i);
				l && S.Menu.show(e, {
					options: n && l ? D.
				default.fiveItemMenu.buy:
					null,
					data : {
						market: a,
						code: i,
						price: parseFloat(e.currentTarget.dataset.price)
					}
				}, this.onContextMenuClick)
			},
			render: function() {
				var e = this,
					t = this.props.digits || b.getStockAccuracy(this.props.market, this.props.code),
					a = ["①", "②", "③", "④", "⑤"],
					i = +this.props.closeprice,
					l = this.props.sales.slice(0, 5).map(function(l, n) {
						var r = 4 == n ? "buysell1" : "",
							s = 0 == +l.ask ? o.
						default.createElement("td", {
								className: "white"
							}, "--"):
							o.
						default.createElement("td", {
								className: +l.ask > i ? "positive" : +l.ask < i ? "negative" : "white"
							}, o.
						default.createElement("span", {
								className: r
							}, l.ask.toFixed(t)));
						return o.
					default.createElement("tr", {
							className: r,
							key: n,
							onContextMenu: e.onContextMenu,
							"data-price": l.ask.toFixed(t),
							onClick: e.props.syncPrice
						}, o.
					default.createElement("td", null, "卖", a[4 - n]), s, o.
					default.createElement("td", {
							className: "white"
						}, L(Math.floor(+l.size))))
					});
				return o.
			default.createElement("table", {
					className: "three-way tick-sell"
				}, o.
			default.createElement("tbody", null, l))
			}
		}),
		O = o.
	default.createClass({
			displayName: "StockTickData",
			mixins: [k.
		default],
			getInitialState: function() {
				return {
					lastClose: this.props.lastClose,
					list: []
				}
			},
			componentWillReceiveProps: function(e) {
				this.props.market == e.market && this.props.code == e.code || (this.destroyWatcher(), this.setState({
					list: []
				}), this.setupWatcher(e.market, e.code))
			},
			componentDidMount: function() {
				this.setupWatcher(this.props.market, this.props.code)
			},
			setupWatcher: function(e, t) {
				var a = this;
				this.model = new d.StockTick, this.model.on("update", function(i, l) {
					void 0 === i && (i = []), l && a.setState({
						list: []
					});
					var n = [].concat(a.state.list);
					n = i.concat(n), n.splice(50), a.setState({
						list: n,
						market: e,
						code: t
					})
				}), this.model.set(e, t), this.socket = new p.StockRealtime, this.socket.on("update", function(e) {
					a.setState({
						lastClose: e.closeprice
					}), a.socket.destroy(), a.socket = null
				}), this.socket.set(e, t)
			},
			shouldComponentUpdate: function(e, t) {
				return this.state.lastClose != t.lastClose || this.state.list != t.list
			},
			destroyWatcher: function() {
				this.model.destroy()
			},
			componentWillUnmount: function() {
				this.destroyWatcher()
			},
			openDuelAll: function() {
				g.Event.bubble(this.getDOMNode(), {
					type: "ADD_TAB",
					subtype: "ENTER_DUELALL",
					market: this.state.market,
					code: this.state.code,
					name: D.
				default.Lang("StockTickDuel"),
					lastClose:
					this.state.lastClose,
					stockname: this.props.name
				})
			},
			render: function() {
				var e = this,
					t = this.props,
					a = t.market,
					i = t.code,
					l = this.state.lastClose,
					n = b.isStockIndex(a, i),
					r = b.getStockAccuracy(a, i),
					s = this.state.list.map(function(t, a) {
						if (!n) var i = t.way ? o.
					default.createElement("span", {
							className: "mark positive"
						}, "B"):
						o.
					default.createElement("span", {
							className: "mark negative"
						}, "S");
						return o.
					default.createElement("tr", {
							key: a,
							onDoubleClick: e.openDuelAll,
							onClick: e.props.syncPrice,
							"data-price": t.price.toFixed(r)
						}, o.
					default.createElement("td", {
							className: "white duel-time"
						}, t.time), o.
					default.createElement("td", {
							className: "duel-price " + (+t.price > +l ? "red" : +t.price < +l ? "green" : "white")
						}, t.price.toFixed(r)), o.
					default.createElement("td", {
							className: "white duel-amount"
						}, L(Math.floor(+t.volume)), i))
					});
				return o.
			default.createElement("div", {
					className: "StockTickData"
				}, o.
			default.createElement("table", {
					className: "three-way"
				}, o.
			default.createElement("tbody", null, s)))
			}
		}),
		A = o.
	default.createClass({
			displayName: "StockTickDuel",
			render: function() {
				return o.
			default.createElement("div", {
					className: "StockTick StockTickDuel ScrollbarOuter"
				}, this.props.displayTitle ? o.
			default.createElement("table", {
					className: "three-way"
				}, o.
			default.createElement("thead", null, o.
			default.createElement("tr", null, o.
			default.createElement("th", {
					className: "duel-time"
				}, "时间"), o.
			default.createElement("th", {
					className: "duel-price"
				}, "价格"), o.
			default.createElement("th", {
					className: "duel-amount"
				}, "成交")))):
				null, o.
			default.createElement(O, {
					market: this.props.market,
					code: this.props.code,
					name: this.props.name,
					lastClose: this.props.lastClose,
					syncPrice: this.props.syncPrice
				}))
			}
		}),
		_ = o.
	default.createClass({
			displayName: "StockTickDataAll",
			getInitialState: function() {
				return {
					list: []
				}
			},
			componentWillReceiveProps: function(e) {
				this.props.market == e.market && this.props.code == e.code || (this.destroyWatcher(), this.setupWatcher(e.market, e.code))
			},
			componentDidMount: function() {
				var e = this;
				this.bodySize = this.getSize(), this.setupWatcher(this.props.market, this.props.code), this.scrollbar = new f.
			default ((0, M.
			default)(this.getDOMNode()), !1, !0), this.regShortcut(), this.dispatchId = s.
			default.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "WINDOW.RESIZE":
						e.isMounted() && e.resize(), e.resizeScrollbar()
					}
				})
			},
			componentDidUpdate: function() {
				this.resizeScrollbar()
			},
			pageup: function() {
				this.scrollbar.scrollBy(-260)
			},
			pagedown: function() {
				this.scrollbar.scrollBy(260)
			},
			regShortcut: function() {
				var e = this;
				this._shortcut_pageup = I.
			default.reg("pageup", function() {
					e.pageup()
				}), this._shortcut_pagedown = I.
			default.reg("pagedown", function() {
					e.pagedown()
				}), this._shortcut_pageup = I.
			default.reg("up", function() {
					e.pageup()
				}), this._shortcut_pagedown = I.
			default.reg("down", function() {
					e.pagedown()
				}), this._shortcut_pageup = I.
			default.reg("right", function() {
					e.pagedown()
				}), this._shortcut_pageup = I.
			default.reg("left", function() {
					e.pageup()
				})
			},
			cancelShortcut: function() {
				I.
			default.cancel("up", this._shortcut_up), I.
			default.cancel("down", this._shortcut_down), I.
			default.cancel("left", this._shortcut_up), I.
			default.cancel("right", this._shortcut_down), I.
			default.cancel("pageup", this._shortcut_pageup), I.
			default.cancel("pagedown", this._shortcut_pagedown)
			},
			setupWatcher: function(e, t) {
				var a = this;
				this.model = new d.StockTick, this.model.on("update", function() {
					var i = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
						l = [].concat(a.state.list);
					l = i.concat(l), a.setState({
						list: l,
						market: e,
						code: t
					})
				}), this.model.set(e, t)
			},
			getSize: function() {
				var e = this.getDOMNode().clientHeight - 36 - 40;
				return Math.floor(e / 30)
			},
			resize: function() {
				var e = this.getDOMNode().clientHeight - 36 - 40,
					t = Math.floor(e / 30);
				this.setState({
					bodySize: t
				})
			},
			resizeScrollbar: function() {
				var e = this.getDOMNode();
				this.scrollbar.setDimension(e.clientWidth, e.scrollWidth)
			},
			shouldComponentUpdate: function(e, t) {
				return this.state.list != t.list || this.state.bodySize != t.size
			},
			destroyWatcher: function() {
				this.model.destroy()
			},
			componentWillUnmount: function() {
				this.destroyWatcher(), this.scrollbar.destroy(), this.cancelShortcut(), s.
			default.unregister(this.dispatchId)
			},
			render: function() {
				for (var e = this.props, t = e.market, a = e.code, i = e.lastClose, l = b.isStockIndex(t, a), n = b.getStockAccuracy(t, a), r = (this.state.size, []), s = this.state.list.map(function(e, a) {
					if (!l) var r = e.way ? o.
				default.createElement("span", {
						className: "mark positive"
					}, "B"):
					o.
				default.createElement("span", {
						className: "mark negative"
					}, "S");
					return o.
				default.createElement("tr", {
						key: a
					}, o.
				default.createElement("td", {
						className: "white"
					}, e.time), o.
				default.createElement("td", {
						className: +e.price > +i ? "red" : +e.price < +i ? "green" : "white"
					}, e.price.toFixed(n)), o.
				default.createElement("td", {
						className: "white"
					}, L(Math.floor(+e.volume)), r), l || "sh" == t || "ggt" == t || "szgt" == t ? null:
					o.
				default.createElement("td", {
						className: "white"
					}, e.tick))
				}), c = 0, u = s.length; c < u; c += this.state.bodySize || this.bodySize) r.push(o.
			default.createElement("div", {
					className: "StockTickDuelColomn"
				}, o.
			default.createElement("table", {
					className: "four-way bodyWrap"
				}, o.
			default.createElement("thead", null, o.
			default.createElement("tr", null, o.
			default.createElement("th", {
					className: "duel-time"
				}, "时间"), o.
			default.createElement("th", {
					className: "duel-price"
				}, "价格"), o.
			default.createElement("th", {
					className: "duel-amount"
				}, "成交"), l || "sh" == t || "ggt" == t || "szgt" == t ? null:
				o.
			default.createElement("th", {
					className: "duel-tick"
				}, "笔数"))), o.
			default.createElement("tbody", null, s.splice(0, this.state.bodySize || this.bodySize)))));
				return o.
			default.createElement("div", {
					className: "StockTick StockTickDataAll ScrollbarOuter"
				}, r)
			}
		}),
		W = o.
	default.createClass({
			displayName: "StockTickDuelAll",
			render: function() {
				var e = this.props,
					t = e.market,
					a = e.code,
					i = e.lastClose,
					l = e.stockname,
					n = y.
				default.get(t, a) || {},
					r = l || n.name || "未知名股票";
				return o.
			default.createElement("div", {
					className: "StockTickDuelAll"
				}, o.
			default.createElement("div", {
					className: "header"
				}, o.
			default.createElement("div", {
					className: "label"
				}, o.
			default.createElement("span", null, r), o.
			default.createElement("span", {
					className: "ggt" == n.market || "szgt" == n.market ? "hk" : ""
				}, a), o.
			default.createElement("span", null, "   Up/PageUp/Left:上翻   Down/PageDown/Right:下翻"))), o.
			default.createElement(_, {
					market: t,
					code: a,
					lastClose: i
				}))
			}
		}),
		Q = o.
	default.createClass({
			displayName: "StockTickFive",
			mixins: [w.
		default],
			getDefaultProps: function() {
				return {
					passive: !1,
					displayCurrent: !0,
					displayTitle: !0,
					showMenu: !0
				}
			},
			render: function() {
				var e, t = this.props,
					a = (t.passive, t.market),
					i = t.code,
					l = this.props.stock || this.state.stock,
					n = b.isStockIndex(a, i);
				if (l && !n) {
					var r, s, c, u = l.cittthan,
						d = l.now,
						p = l.raw,
						h = p.sales,
						f = p.buys;
					h && f && (r = o.
				default.createElement(B, {
						market: a,
						code: i,
						showMenu: t.showMenu,
						closeprice: l.closeprice.num,
						sales: h,
						syncPrice: this.props.syncPrice
					}), s = t.displayCurrent ? o.
				default.createElement("table", {
						className: "two-way white"
					}, o.
				default.createElement("thead", null, o.
				default.createElement("tr", null, o.
				default.createElement("th", null, "当前价：", o.
				default.createElement("span", {
						className: C("now", t)
					}, d && d.display)), o.
				default.createElement("th", null, "委比：", u && u.display)))):
					o.
				default.createElement("hr", null), c = o.
				default.createElement(P, {
						market: a,
						code: i,
						showMenu: t.showMenu,
						closeprice: l.closeprice.num,
						buys: f,
						syncPrice: this.props.syncPrice
					})), e = o.
				default.createElement("div", {
						className: "top-panel"
					}, t.displayTitle ? o.
				default.createElement("table", {
						className: "two-way"
					}, o.
				default.createElement("thead", null, o.
				default.createElement("tr", null, o.
				default.createElement("th", null, o.
				default.createElement("span", {
						className: "green"
					}, "跌停:", p && p.down_limit_price)), o.
				default.createElement("th", null, o.
				default.createElement("span", {
						className: "red"
					}, "涨停:", p && p.raising_limit_price))))):
					null, r, c)
				}
				return o.
			default.createElement("div", {
					className: "StockTick StockTickFive"
				}, e)
			}
		});
	t.StockTickDuel = A, t.StockTickDuelAll = W, t.StockTickFive = Q
}, function(e, t) {
	e.exports = require("hippo/StockTick")
}, function(e, t) {
	e.exports = require("hippo/Scrollbar")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
		return t.
	default = e, t
	}
	function l(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = a(15),
		o = l(n),
		r = a(6),
		s = i(r),
		c = a(51),
		u = l(c),
		d = a(31),
		p = l(d),
		h = a(3),
		f = l(h),
		m = s.getColor,
		k = o.
	default.createClass({
			displayName: "StockBrief",
			getInitialState: function() {
				return {
					change: !1
				}
			},
			getDefaultBriefList: function(e) {
				return "plate" == e ? f.
			default.stockBriefList_plate:
				"index" == e ? f.
			default.stockBriefList_index:
				f.
			default.stockBriefList
			},
			_renderItems: function(e, t) {
				var a = s.isStockIndex(t.market, t.code),
					i = "stock";
				"PlateList" == t.gridType ? i = "plate" : a && (i = "index");
				for (var l = p.
			default.getStockBriefList(i) || this.getDefaultBriefList(i), n = [], r = 0, c = 0; c < l.length; c++) {
					var u = l[c];
					u.hide || r % 2 != e || ("open" == u.title ? n.push(o.
				default.createElement("td", null, "今开：", o.
				default.createElement("span", {
						className: m("openprice", t)
					}, t.openprice && t.openprice.display))) : "close" == u.title ? n.push(o.
				default.createElement("td", null, "昨收：", o.
				default.createElement("span", null, t.closeprice && t.closeprice.display))) : "high" == u.title ? n.push(o.
				default.createElement("td", null, "最高：", o.
				default.createElement("span", {
						className: m("high", t)
					}, t.high && t.high.display))) : "low" == u.title ? n.push(o.
				default.createElement("td", null, "最低：", o.
				default.createElement("span", {
						className: m("low", t)
					}, t.low && t.low.display))) : "volume" == u.title ? n.push(o.
				default.createElement("td", null, "成交量：", o.
				default.createElement("span", null, t.volume && t.volume.display))) : "amount" == u.title ? n.push(o.
				default.createElement("td", null, "成交额：", o.
				default.createElement("span", null, t.amount && t.amount.display))) : "handover" == u.title ? n.push(o.
				default.createElement("td", null, "换手：", o.
				default.createElement("span", null, t.handover && t.handover.display))) : "amplitude" == u.title ? n.push(o.
				default.createElement("td", null, "振幅：", o.
				default.createElement("span", null, t.amplitude && t.amplitude.display))) : "total_capital" == u.title ? n.push(o.
				default.createElement("td", null, "总股本：", o.
				default.createElement("span", null, t.total))) : "share_capital" == u.title ? n.push(o.
				default.createElement("td", null, "流通股：", o.
				default.createElement("span", null, t.share))) : "total_value" == u.title ? n.push(o.
				default.createElement("td", null, "总市值：", o.
				default.createElement("span", null, t.totalvalue && t.totalvalue.display))) : "share_value" == u.title ? n.push(o.
				default.createElement("td", null, "流通值：", o.
				default.createElement("span", null, t.sharevalue && t.sharevalue.display))) : "pe" == u.title ? n.push(o.
				default.createElement("td", null, "市盈：", o.
				default.createElement("span", null, t.pe))) : "income" == u.title ? n.push(o.
				default.createElement("td", null, "收益：", o.
				default.createElement("span", null, t.eps))) : "in" == u.title ? n.push(o.
				default.createElement("td", null, "内盘：", o.
				default.createElement("span", null, t. in && t. in .display))) : "out" == u.title ? n.push(o.
				default.createElement("td", null, "外盘：", o.
				default.createElement("span", null, t.out && t.out.display))) : "cittthan" == u.title ? n.push(o.
				default.createElement("td", null, "委比：", o.
				default.createElement("span", null, t.cittthan && t.cittthan.display))) : "cittdiff" == u.title ? n.push(o.
				default.createElement("td", null, "委差：", o.
				default.createElement("span", null, t.cittdiff && t.cittdiff.display))) : "risenum" == u.title ? n.push(o.
				default.createElement("td", null, "上涨：", o.
				default.createElement("span", null, t.rfstat && t.rfstat.risenum))) : "fallnum" == u.title ? n.push(o.
				default.createElement("td", null, "下跌：", o.
				default.createElement("span", null, t.rfstat && t.rfstat.fallnum))) : "equal" == u.title && n.push(o.
				default.createElement("td", null, "平盘：", o.
				default.createElement("span", null, t.rfstat && t.rfstat.drawnum)))), u.hide || r++
				}
				return n
			},
			_renderTable: function(e, t) {
				var a;
				return a = "PlateList" == e ? o.
			default.createElement("table", {
					className: "table-plate"
				}, o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "今开：", o.
			default.createElement("span", {
					className: m("openprice", t)
				}, t.openprice && t.openprice.display)), o.
			default.createElement("td", null, "最高：", o.
			default.createElement("span", {
					className: m("high", t)
				}, t.high && t.high.display)), o.
			default.createElement("td", null, "成交量：", o.
			default.createElement("span", null, t.volume && t.volume.display)), o.
			default.createElement("td", null, "换手：", o.
			default.createElement("span", null, t.handover)), o.
			default.createElement("td", null, "涨速：", o.
			default.createElement("span", null, "236")), o.
			default.createElement("td", null, o.
			default.createElement("span", {
					className: "wider"
				}, "5日涨跌："), o.
			default.createElement("span", {
					className: "red"
				}, "+123.78")), o.
			default.createElement("td", null, "总市值：", o.
			default.createElement("span", null, "78.82亿")), o.
			default.createElement("td", null, "上涨：", o.
			default.createElement("span", null, "56"))), o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "昨收：", o.
			default.createElement("span", null, t.closeprice && t.closeprice.display)), o.
			default.createElement("td", null, "最低：", o.
			default.createElement("span", {
					className: m("low", t)
				}, t.low && t.low.display)), o.
			default.createElement("td", null, "成交额：", o.
			default.createElement("span", null, t.amount && t.amount.display)), o.
			default.createElement("td", null, "振幅：", o.
			default.createElement("span", null, "3.77%")), o.
			default.createElement("td", null, "量比：", o.
			default.createElement("span", null, "216")), o.
			default.createElement("td", null, o.
			default.createElement("span", {
					className: "wider"
				}, "平均价："), o.
			default.createElement("span", null, "123.78")), o.
			default.createElement("td", null, "总流通：", o.
			default.createElement("span", null, "59.19亿")), o.
			default.createElement("td", null, "下跌：", o.
			default.createElement("span", null, "17")))):
				s.isStockIndex(t.market, t.code) ? o.
			default.createElement("table", {
					className: "table-index"
				}, o.
			default.createElement("tr", null, this._renderItems(0, t)), o.
			default.createElement("tr", null, this._renderItems(1, t))):
				o.
			default.createElement("table", {
					className: "table-stock"
				}, o.
			default.createElement("tr", null, this._renderItems(0, t)), o.
			default.createElement("tr", null, this._renderItems(1, t)))
			},
			_briefChange: function() {
				this.setState({
					change: !this.state.change
				})
			},
			_getDisplay: function(e) {
				var t = parseFloat(e);
				return t > 0 ? "+" + e : e
			},
			render: function() {
				var e = this.props;
				return o.
			default.createElement("div", {
					className: "StockQuote-StockBrief"
				}, e.raw && e.raw.stop ? o.
			default.createElement("div", {
					className: "stock_info stop"
				}, o.
			default.createElement("h3", null, "已停牌")):
				o.
			default.createElement("div", {
					className: "stock_info"
				}, o.
			default.createElement("div", {
					className: "s_top " + m("now", e)
				}, e.now && e.now.display), o.
			default.createElement("div", {
					className: "s_left " + m("risepercent", e)
				}, e.risepercent && this._getDisplay(e.risepercent.display)), o.
			default.createElement("div", {
					className: "s_right " + m("rise", e)
				}, e.rise && this._getDisplay(e.rise.display))), o.
			default.createElement("div", {
					className: "stock_detail"
				}, this._renderTable(e.gridType, e)))
			}
		}),
		g = o.
	default.createClass({
			displayName: "StockBriefPanel",
			mixins: [u.
		default],
			_renderTable: function(e) {
				var t;
				return t = s.isStockIndex(e.market, e.code) ? o.
			default.createElement("table", {
					className: "table-index"
				}, o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "今开：", o.
			default.createElement("span", {
					className: m("openprice", e)
				}, e.openprice && e.openprice.display)), o.
			default.createElement("td", null, "成交量：", o.
			default.createElement("span", null, e.volume && e.volume.display)), o.
			default.createElement("td", null, "上涨：", o.
			default.createElement("span", null, e.rfstat && e.rfstat.risenum)), o.
			default.createElement("td", null, "下跌：", o.
			default.createElement("span", null, e.rfstat && e.rfstat.fallnum))), o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "昨收：", o.
			default.createElement("span", null, e.closeprice && e.closeprice.display)), o.
			default.createElement("td", null, "成交额：", o.
			default.createElement("span", null, e.amount && e.amount.display)), o.
			default.createElement("td", null, "振幅：", o.
			default.createElement("span", null, e.amplitude && e.amplitude.display)), o.
			default.createElement("td", null, "平盘：", o.
			default.createElement("span", null, e.rfstat && e.rfstat.drawnum)))):
				o.
			default.createElement("table", {
					className: "table-stock"
				}, o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "今开：", o.
			default.createElement("span", {
					className: m("openprice", e)
				}, e.openprice && e.openprice.display)), o.
			default.createElement("td", null, "最高：", o.
			default.createElement("span", {
					className: m("high", e)
				}, e.high && e.high.display)), o.
			default.createElement("td", null, "成交量：", o.
			default.createElement("span", null, e.volume && e.volume.display)), o.
			default.createElement("td", null, "换手：", o.
			default.createElement("span", null, e.handover && e.handover.display))), o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "昨收：", o.
			default.createElement("span", null, e.closeprice && e.closeprice.display)), o.
			default.createElement("td", null, "最低：", o.
			default.createElement("span", {
					className: m("low", e)
				}, e.low && e.low.display)), o.
			default.createElement("td", null, "成交额：", o.
			default.createElement("span", null, e.amount && e.amount.display)), o.
			default.createElement("td", null, "振幅：", o.
			default.createElement("span", null, e.amplitude && e.amplitude.display))))
			},
			_getDisplay: function(e) {
				var t = parseFloat(e);
				return t > 0 ? "+" + e : e
			},
			render: function() {
				var e = this.state.stock || {};
				return o.
			default.createElement("div", {
					className: "StockQuote-StockBrief",
					style: {
						height: "72px"
					}
				}, e.raw && e.raw.stop ? o.
			default.createElement("div", {
					className: "stock_info stop"
				}, o.
			default.createElement("h3", null, "已停牌")):
				o.
			default.createElement("div", {
					className: "stock_info"
				}, o.
			default.createElement("div", {
					className: "s_top " + m("now", e)
				}, e.now && e.now.display), o.
			default.createElement("div", {
					className: "s_left " + m("risepercent", e)
				}, e.risepercent && this._getDisplay(e.risepercent.display)), o.
			default.createElement("div", {
					className: "s_right " + m("rise", e)
				}, e.rise && this._getDisplay(e.rise.display))), o.
			default.createElement("div", {
					className: "stock_detail"
				}, this._renderTable(e)))
			}
		}),
		S = o.
	default.createClass({
			displayName: "StockBriefLinesPanel",
			mixins: [u.
		default],
			_renderTable: function(e) {
				var t;
				return t = s.isStockIndex(e.market, e.code) ? o.
			default.createElement("table", {
					className: "table-index"
				}, o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "今开：", o.
			default.createElement("span", {
					className: m("openprice", e)
				}, e.openprice && e.openprice.display)), o.
			default.createElement("td", null, "最高：", o.
			default.createElement("span", {
					className: m("high", e)
				}, e.high && e.high.display)), o.
			default.createElement("td", null, "成交量：", o.
			default.createElement("span", null, e.volume && e.volume.display)), o.
			default.createElement("td", null, "上涨：", o.
			default.createElement("span", null, e.rfstat && e.rfstat.risenum)), o.
			default.createElement("td", null, "内盘：", o.
			default.createElement("span", null, e. in && e. in .display))), o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "昨收：", o.
			default.createElement("span", null, e.closeprice && e.closeprice.display)), o.
			default.createElement("td", null, "最低：", o.
			default.createElement("span", {
					className: m("low", e)
				}, e.low && e.low.display)), o.
			default.createElement("td", null, "成交额：", o.
			default.createElement("span", null, e.amount && e.amount.display)), o.
			default.createElement("td", null, "下跌：", o.
			default.createElement("span", null, e.rfstat && e.rfstat.fallnum)), o.
			default.createElement("td", null, "外盘：", o.
			default.createElement("span", null, e.out && e.out.display))), o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "市盈：", o.
			default.createElement("span", null, e.pe)), o.
			default.createElement("td", null, "振幅：", o.
			default.createElement("span", null, e.amplitude && e.amplitude.display)), o.
			default.createElement("td", null, "换手：", o.
			default.createElement("span", null, e.handover && e.handover.display)), o.
			default.createElement("td", null, "平盘：", o.
			default.createElement("span", null, e.rfstat && e.rfstat.drawnum)))):
				o.
			default.createElement("table", {
					className: "table-stock"
				}, o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "今开：", o.
			default.createElement("span", {
					className: m("openprice", e)
				}, e.openprice && e.openprice.display)), o.
			default.createElement("td", null, "最高：", o.
			default.createElement("span", {
					className: m("high", e)
				}, e.high && e.high.display)), o.
			default.createElement("td", null, "成交量：", o.
			default.createElement("span", null, e.volume && e.volume.display)), o.
			default.createElement("td", null, "总股本：", o.
			default.createElement("span", null, e.total)), o.
			default.createElement("td", null, "总市值：", o.
			default.createElement("span", null, e.totalvalue && e.totalvalue.display)), o.
			default.createElement("td", null, "内盘：", o.
			default.createElement("span", null, e. in && e. in .display))), o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "昨收：", o.
			default.createElement("span", null, e.closeprice && e.closeprice.display)), o.
			default.createElement("td", null, "最低：", o.
			default.createElement("span", {
					className: m("low", e)
				}, e.low && e.low.display)), o.
			default.createElement("td", null, "成交额：", o.
			default.createElement("span", null, e.amount && e.amount.display)), o.
			default.createElement("td", null, "流通股：", o.
			default.createElement("span", null, e.share)), o.
			default.createElement("td", null, "流通值：", o.
			default.createElement("span", null, e.sharevalue && e.sharevalue.display)), o.
			default.createElement("td", null, "外盘：", o.
			default.createElement("span", null, e.out && e.out.display))), o.
			default.createElement("tr", null, o.
			default.createElement("td", null, "市盈：", o.
			default.createElement("span", null, e.pe)), o.
			default.createElement("td", null, "收益：", o.
			default.createElement("span", null, e.eps)), o.
			default.createElement("td", null, "换手：", o.
			default.createElement("span", null, e.handover && e.handover.display)), o.
			default.createElement("td", null, "振幅：", o.
			default.createElement("span", null, e.amplitude && e.amplitude.display)), o.
			default.createElement("td", null, "委比：", o.
			default.createElement("span", null, e.cittthan && e.cittthan.display)), o.
			default.createElement("td", null, "委差：", o.
			default.createElement("span", null, e.cittdiff && e.cittdiff.display))))
			},
			_getDisplay: function(e) {
				var t = parseFloat(e);
				return t > 0 ? "+" + e : e
			},
			render: function() {
				var e = this.state.stock || {};
				return o.
			default.createElement("div", {
					className: "StockQuote-StockBrief",
					style: {
						height: "100px"
					}
				}, e.raw && e.raw.stop ? o.
			default.createElement("div", {
					className: "stock_info stop"
				}, o.
			default.createElement("h3", null, "已停牌")):
				o.
			default.createElement("div", {
					className: "stock_info"
				}, o.
			default.createElement("div", {
					className: "s_top " + m("now", e)
				}, e.now && e.now.display), o.
			default.createElement("div", {
					className: "s_left " + m("risepercent", e)
				}, e.risepercent && this._getDisplay(e.risepercent.display)), o.
			default.createElement("div", {
					className: "s_right " + m("rise", e)
				}, e.rise && this._getDisplay(e.rise.display))), o.
			default.createElement("div", {
					className: "stock_detail"
				}, this._renderTable(e)))
			}
		});
	t.StockBrief = k, t.StockBriefPanel = g, t.StockBriefLinesPanel = S
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(4),
		n = i(l),
		o = a(15),
		r = i(o),
		s = a(16),
		c = a(12),
		u = i(c),
		d = a(20),
		p = i(d),
		h = a(19),
		f = i(h),
		m = a(17),
		k = i(m),
		g = a(11),
		S = i(g),
		b = a(6),
		v = a(26),
		y = i(v),
		x = a(28),
		w = i(x),
		E = a(58),
		I = i(E),
		T = [{
			label: "分时",
			com: w.
		default,
			type:
			"single"
		}, {
			label: "日K",
			com: I.
		default,
			type:
			"day"
		}, {
			label: "多日",
			com: w.
		default,
			type:
			"multi"
		}, {
			label: "周K",
			com: I.
		default,
			type:
			"week"
		}, {
			label: "月K",
			com: I.
		default,
			type:
			"month"
		}, {
			label: "5分",
			com: I.
		default,
			type:
			"5min"
		}, {
			label: "15分",
			com: I.
		default,
			type:
			"15min"
		}, {
			label: "60分",
			com: I.
		default,
			type:
			"60min"
		}],
		M = r.
	default.createClass({
			displayName: "StockGraph",
			componentDidMount: function() {
				var e = this;
				this.dispatchId = u.
			default.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "WINDOW.RESIZE":
						e.refs.tabs.resize()
					}
				});
				var t = f.
			default.getItem(null, "stockquote") ? JSON.parse(f.
			default.getItem(null, "stockquote")):
				{};
				t = Object.assign(p.
			default.PreferenceSetting.stockquote, t);
				var a = new Date,
					i = a.getDay(),
					l = a.getHours(),
					n = a.getMinutes(),
					o = 100 * l + n,
					r = ["time_series", "day_kline", "mulday_kline", "week_kline", "month_kline"],
					s = !1;
				i >= 1 && i <= 5 && ("ggt" == this.props.market || "szgt" == this.props.market ? (o >= 930 && o <= 1130 || o >= 1300 && o <= 1600) && (s = !0) : (o >= 930 && o <= 1130 || o >= 1300 && o <= 1500) && (s = !0)), s ? this.refs.tabs.setTab(r.indexOf(t.trade_time_index)) : this.refs.tabs.setTab(r.indexOf(t.closed_time_index)), this.props.noBlurShortcut && this.regShortcut()
			},
			hasStar: function(e, t) {
				var a = !1;
				return e && t && S.
			default.isMyStock(e, t, function(e) {
					a = e
				}), a
			},
			componentWillUnmount: function() {
				u.
			default.unregister(this.dispatchId), this.cancelShortcut()
			},
			regShortcut: function() {
				var e = this,
					t = arguments;
				this._shortcut_enabled || (this._shortcut_enabled = !0, this.f5Id = k.
			default.reg("f5", function() {
					if (e.refs.tabs) {
						var t = e.refs.tabs.getTab();
						0 == t || 2 == t ? e.refs.tabs.setTab(1) : e.refs.tabs.setTab(0)
					}
				}), this.f7Id = k.
			default.reg("f7", function() {
					e.props.toggleDetailRight.apply(null, t)
				}), this.f8Id = k.
			default.reg("f8", function() {
					if (e.refs.tabs) {
						var t = e.refs.tabs.getTab();
						7 == t ? e.refs.tabs.setTab(0) : (t++, e.refs.tabs.setTab(t))
					}
				}), this.f10Id = k.
			default.reg("f10", function() {
					var t = y.
				default.get(e.props.market, e.props.code);
					(0, b.isStockIndex)(e.props.market, e.props.code) || t && 3 != t.type && 4 != t.type && 12 != t.type && b.Event.bubble(e.getDOMNode(), {
						type: "ADD_TAB",
						subtype: "IFRAME",
						name: "F10:" + e.props.name,
						id: "f10:" + e.props.market + ":" + e.props.code,
						url: "http://f9.chinabigdata.com/" + e.props.market.toUpperCase() + e.props.code + ".html?v=1"
					})
				}), this.enterId = k.
			default.reg("enter", function() {
					if (e.refs.tabs) {
						var t = e.refs.tabs.getTab();
						0 == t || 2 == t ? e.refs.tabs.setTab(1) : e.refs.tabs.setTab(0)
					}
				}), this.insertId = k.
			default.reg("ins", function() {
					var t = e.hasStar(e.props.market, e.props.code);
					t || S.
				default.addStock(e.props.market, e.props.code, e.props.name)
				}))
			},
			cancelShortcut: function() {
				this._shortcut_enabled = !1, k.
			default.cancel("f5", this.f5Id), k.
			default.cancel("f7", this.f7Id), k.
			default.cancel("f8", this.f8Id), k.
			default.cancel("f10", this.f10Id), k.
			default.cancel("enter", this.enterId), k.
			default.cancel("ins", this.insertId)
			},
			endWatch: function() {
				this.refs.tabs.refs.activeContent.endWatch()
			},
			startWatch: function() {
				this.refs.tabs.refs.activeContent.startWatch()
			},
			registerEvent: function() {
				this.refs.tabs.refs.activeContent.registerEvent()
			},
			unregisterEvent: function() {
				this.refs.tabs.refs.activeContent.unregisterEvent()
			},
			render: function() {
				var e = this,
					t = T.map(function(t, a) {
						return r.
					default.createElement(t.com, n.
					default.extend({}, e.props, {
							label: t.label,
							type: t.type,
							key: a
						}))
					}),
					a = this.props.className ? "StockGraph " + this.props.className : "StockGraph";
				return this.props.viewMode && "light" == this.props.viewMode && (a += " Light-Rect"), r.
			default.createElement("div", {
					className: "flex-wrap",
					tabIndex: "0",
					onFocus: this.props.noBlurShortcut ? null : this.regShortcut,
					onBlur: this.props.noBlurShortcut ? null : this.cancelShortcut
				}, r.
			default.createElement(s.Tabs, {
					ref: "tabs",
					className: a
				}, t))
			},
			resize: function() {
				this.refs.tabs && this.refs.tabs.resize()
			}
		});
	t.
default = M, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
		return t.
	default = e, t
	}
	function l(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var n = function() {
			function e(e, t) {
				var a = [],
					i = !0,
					l = !1,
					n = void 0;
				try {
					for (var o, r = e[Symbol.iterator](); !(i = (o = r.next()).done) && (a.push(o.value), !t || a.length !== t); i = !0);
				} catch (e) {
					l = !0, n = e
				} finally {
					try {
						!i && r.
						return &&r.
						return ()
					} finally {
						if (l) throw n
					}
				}
				return a
			}
			return function(t, a) {
				if (Array.isArray(t)) return t;
				if (Symbol.iterator in Object(t)) return e(t, a);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		o = a(15),
		r = l(o),
		s = a(29),
		c = l(s),
		u = a(12),
		d = l(u),
		p = a(59),
		h = (l(p), a(16)),
		f = a(6),
		m = i(f),
		k = a(26),
		g = l(k),
		S = a(2),
		b = l(S),
		v = a(17),
		y = l(v),
		x = a(31),
		w = l(x),
		E = a(3),
		I = l(E),
		T = a(60),
		M = l(T),
		N = a(61),
		D = l(N),
		C = a(62),
		L = l(C),
		P = a(63),
		B = l(P),
		O = a(32),
		A = l(O),
		_ = a(34),
		W = l(_),
		Q = a(35),
		z = l(Q),
		F = a(11),
		R = l(F),
		j = a(38),
		G = l(j),
		V = a(5),
		q = i(V),
		H = (window.require("hippo/ConfigStore"), q.lang(function(e) {
			return a(8)("./" + e)
		})),
		U = 3,
		K = r.
	default.createClass({
			displayName: "StockKline",
			getInitialState: function() {
				var e = this,
					t = w.
				default.getKLineTools() || {
						indexType: "MA",
						rightType: [],
						klinestyle: 1,
						direct: 0
					};
				w.
			default.setKLineTools(t);
				var a = ["day", "week", "month"].some(function(t, a) {
					return t == e.props.type
				}),
					i = (parseInt(this.props.code), !1),
					l = g.
				default.get(this.props.market, this.props.code);
				l ? [1, 2, 7, 8].indexOf(l.type) > -1 && (i = !0):
				i = this.hasDirect(this.props.market, this.props.code), this.menuitems = [], this.overlaymodel = new Map;
				var n = this.props.isSmall ? 1 : U;
				t.rightType && t.rightType.length > n && t.rightType.splice(n);
				var o = w.
			default.getIndexConf() || I.
			default.indexConf;
				w.
			default.setIndexConf(o);
				for (var r = w.
			default.getOverlayStock() || [], s = [], c = 0; c < r.length; c++) {
					var u = r[c];
					if (this.props.market == u.market && this.props.code == u.code) {
						s = u.overlaystock, s.length > 3 && (s = s.slice(0, 3));
						break
					}
				}
				return {
					indexType: t.indexType || "",
					rightType: t.rightType || [],
					indexAll: w.
				default.getIndex() || I.
				default.defaultIndex,
					indexConf:
					o,
					showDirect: a && i,
					direct: a && i ? t.direct || 0 : 0,
					klinestyle: t.klinestyle,
					overlayStockAll: r,
					overlayStock: s,
					drawlines: w.
				default.getDrawlines() || []
				}
			},
			hasDirect: function(e, t) {
				var a = !1;
				return "sz" == e ? "3" == t.substring(0, 1) && "39" != t.substring(0, 2) ? a = !0 : "002" == t.substring(0, 3) || "003" == t.substring(0, 3) || "004" == t.substring(0, 3) ? a = !0 : "00" == t.substring(0, 2) ? a = !0 : "2" == t.substring(0, 1) && (a = !0) : "sh" == e && (parseInt(t) >= 99e4 || parseInt(t) <= 999 ? a = !1 : "6" == t.substring(0, 1) ? a = !0 : "9" == t.substring(0, 1) && (a = !0)), a
			},
			componentWillUnmount: function() {
				this.unregisterEvent(), m.destroyKline(this), this.drawlinePopup && !this.drawlinePopup.state.hide && this.drawlinePopup.close(), !this.props.isSmall && this.crossModal && (this.crossModal = this.crossModal.hide()), this.cancelShortcut()
			},
			componentDidMount: function() {
				var e = this;
				this.initShowIndexTypeArray(), m.setupKline(this, this.refs.klineGraph.getDOMNode(), this.props.type, this.props.market, this.props.code, this.props.lastClose, this.props.isStop, this.showIndexTypeArray, this.state.indexConf, this.state.direct, this.props.isSmall, this.props.viewMode, this.state.klinestyle, this.state.overlayStock, this.state.drawlines), this.setState({
					width: this.getDOMNode().clientWidth
				}), this.registerEvent();
				(0, c.
			default)(this.getDOMNode()).offset().left;
				this.chart.on("contextmenu", function(t) {
					var a = e.getContextMenu();
					a && h.Menu.show(t, {
						options: a
					}, a.handler || e.onContextMenuClick)
				}), this.props.noBlurShortcut && this.regShortcut(), this.showDrawLine = !1
			},
			regShortcut: function() {
				var e = this;
				this._shortcut_enabled || (this._shortcut_enabled = !0, this.leftId = y.
			default.reg("left", function() {
					e.chart.crossMoveLeft((0, c.
				default)(e.getDOMNode()).offset().left)
				}), this.upId = y.
			default.reg("up", function() {
					e.chart.zoomOut()
				}), this.rightId = y.
			default.reg("right", function() {
					e.chart.crossMoveRight((0, c.
				default)(e.getDOMNode()).offset().left)
				}), this.downId = y.
			default.reg("down", function() {
					e.chart.zoomIn()
				}), this.delId = y.
			default.reg("del", function() {
					if (e.chart.hasChooseLine()) e.chart.keyDownDel();
					else {
						var t = e.hasStar(e.props.market, e.props.code);
						t && R.
					default.removeStock(e.props.market, e.props.code)
					}
				}))
			},
			cancelShortcut: function() {
				this._shortcut_enabled = !1, y.
			default.cancel("left", this.leftId), y.
			default.cancel("up", this.upId), y.
			default.cancel("right", this.rightId), y.
			default.cancel("down", this.downId), y.
			default.cancel("del", this.delId), y.
			default.cancel("esc", this._shortcut_esc), delete this._shortcut_esc
			},
			configSetItem: function(e) {
				console.log("config", e)
			},
			endWatch: function() {
				this.model && this.model.endWatch()
			},
			startWatch: function() {
				this.model && this.model.set(this.props.market, this.props.code)
			},
			registerEvent: function() {
				var e = this;
				this.dispatchId || (this.dispatchId = d.
			default.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "WINDOW.RESIZE":
						e.resize();
						break;
					case "CONFIG.SETSKIN":
						e.setskin();
						break;
					case I.
					default.ActionTypes.OPEN_AVERANGE_CONF:
						e.avgPopup = h.Popup.show({
							className: "StockQuote-StockAverangeConf",
							content: r.
						default.createElement(M.
						default, null),
							title:
							I.
						default.Lang("StockAverangeConf"),
							modal:
							!0,
							buttons: [I.
						default.Lang("Save"), I.
						default.Lang("Abort")],
							onBtnClick: e.onBtnClick
						});
						break;
					case I.
					default.ActionTypes.OPEN_INDEX_SET:
						break;
					case I.
					default.ActionTypes.OPEN_INTER_STATIS:
						var i = e;
						e.statisPopup = h.Popup.show({
							className: "StockQuote-StockInterStatis",
							content: r.
						default.createElement(D.
						default, {
								data: a.data
							}),
							title:
							I.
						default.Lang("StockInterStatis"),
							modal:
							!0,
							buttons: null,
							popupWillClose: function() {
								i.chart.hideSectionRect()
							}
						});
						break;
					case I.
					default.ActionTypes.OPEN_INDEX_MANAGER:
						break;
					case I.
					default.ActionTypes.OPEN_OVERLAY_SEARCH:
						break;
					case "StockTrade:DO_ORDER_SUCC":
						e.quickOrderHint && e.quickOrderHint.close(), e.quickOrderHint = null
					}
				}))
			},
			unregisterEvent: function() {
				d.
			default.unregister(this.dispatchId), this.dispatchId = !1
			},
			componentDidUpdate: function(e, t) {
				var a = this;
				if (e.type != this.props.type || e.market != this.props.market || e.code != this.props.code || e.isSmall != this.props.isSmall) {
					m.destroyKline(this);
					var i = ["day", "week", "month"].some(function(e, t) {
						return e == a.props.type
					}),
						l = !1,
						n = g.
					default.get(this.props.market, this.props.code);
					n && [1, 2, 7, 8].indexOf(n.type) > -1 && (l = !0), this.setState({
						showDirect: i && l
					}), this.initShowIndexTypeArray(), m.setupKline(this, this.refs.klineGraph.getDOMNode(), this.props.type, this.props.market, this.props.code, this.props.lastClose, this.props.isStop, this.showIndexTypeArray, this.state.indexConf, this.state.direct, this.props.isSmall, this.props.viewMode, this.state.klinestyle, this.state.overlayStock, this.state.drawlines)
				} else this.props.width == e.width && this.props.height == e.height || this.resize()
			},
			resize: function() {
				this.setState({
					width: this.getDOMNode().clientWidth
				}), this.chart.resize(this.refs.klineGraph.getDOMNode().clientWidth, this.refs.klineGraph.getDOMNode().clientHeight)
			},
			closeDrawline: function() {
				this.showDrawLine = !1
			},
			setskin: function() {
				m.destroyKline(this), this.initShowIndexTypeArray(), m.setupKline(this, this.refs.klineGraph.getDOMNode(), this.props.type, this.props.market, this.props.code, this.props.lastClose, this.props.isStop, this.showIndexTypeArray, this.state.indexConf, this.state.direct, this.props.isSmall, this.props.viewMode, this.state.klinestyle, this.state.overlayStock, this.state.drawlines)
			},
			hasStar: function(e, t) {
				var a = !1;
				return e && t && R.
			default.isMyStock(e, t, function(e) {
					a = e
				}), a
			},
			getSectionMenu: function() {
				var e = [{
					title: H("StockSectionZoomout")
				}, {
					title: H("StockSectionStatis")
				}];
				return e
			},
			getContextMenu: function() {
				var e = this.hasStar(this.props.market, this.props.code),
					t = (0, f.isTradable)(this.props.market, this.props.code),
					a = this.chart.getKlineStyle(),
					i = this.chart.getKlineMove(),
					l = [e ? {
						title: H("Delete")
					} : {
						title: H("Add")
					}, {
						title: H("StockOverlay")
					}, {
						title: H("DrawLineTool")
					}, {
						title: H("StockSectionStatis"),
						style: {
							color: "#dc5e21"
						}
					}, {
						title: H("StockKlineMove"),
						checked: 1 == i,
						style: {
							color: "#dc5e21"
						}
					}],
					n = ["__seperator__",
					{
						title: H("Buy"),
						style: {
							color: "#dc5e21"
						},
						children: [{
							title: H("GeneBuy")
						}, {
							title: H("CollBuy")
						}, {
							title: H("FinaBuy")
						}]
					}, {
						title: H("Sell"),
						style: {
							color: "#0777c1"
						},
						children: [{
							title: H("GeneSell")
						}, {
							title: H("CollSell")
						}, {
							title: H("MargSell")
						}]
					}],
					o = ["__seperator__",
					{
						title: H("KlineStyle"),
						children: [{
							checked: 1 == a,
							title: H("KlineStyle-1")
						}, {
							checked: 2 == a,
							title: H("KlineStyle-2")
						}, {
							checked: 3 == a,
							title: H("KlineStyle-3")
						}, {
							checked: 4 == a,
							title: H("KlineStyle-4")
						}]
					}],
					r = [{
						title: H("Direct"),
						children: [{
							checked: 0 == this.state.direct,
							title: H("Direct-1")
						}, {
							checked: 1 == this.state.direct,
							title: H("Direct-2")
						}, {
							checked: 2 == this.state.direct,
							title: H("Direct-3")
						}]
					}];
				return t && !this.props.isTrade ? this.state.showDirect ? l.concat(n, o, r) : l.concat(n, o) : this.state.showDirect ? l.concat(o, r) : l.concat(o)
			},
			onContextMenuClick: function(e) {
				switch (e.title) {
				case I.
				default.Lang("Add"):
					R.
				default.addStock(this.props.market, this.props.code, this.props.name);
					break;
				case I.
				default.Lang("Delete"):
					R.
				default.removeStock(this.props.market, this.props.code);
					break;
				case I.
				default.Lang("KlineStyle-1"):
					this.changeKlineStyle(1);
					break;
				case I.
				default.Lang("KlineStyle-2"):
					this.changeKlineStyle(2);
					break;
				case I.
				default.Lang("KlineStyle-3"):
					this.changeKlineStyle(3);
					break;
				case I.
				default.Lang("KlineStyle-4"):
					this.changeKlineStyle(4);
					break;
				case I.
				default.Lang("StockSectionStatis"):
					this.chart.sectionStatis();
					break;
				case I.
				default.Lang("StockSectionZoomout"):
					break;
				case I.
				default.Lang("StockOverlay"):
					this.overlayPopup = h.Popup.show({
						maskClassName: "StockQuote-StockOverlay-Mask",
						className: "StockQuote-StockOverlay",
						content: r.
					default.createElement(A.
					default, {
							data: this.state.overlayStock,
							self: this
						}),
						title:
						I.
					default.Lang("StockOverlay"),
						modal:
						!0,
						buttons: null
					});
					break;
				case I.
				default.Lang("StockKlineMove"):
					this.chart.setKlineMove();
					break;
				case I.
				default.Lang("DrawLineTool"):
					(0, c.
				default)(this.getDOMNode()).offset().left + this.getDOMNode().clientWidth;
					this.drawlinePopup = h.Popup.show({
						maskClassName: "StockQuote-StockDrawLine-Mask",
						className: "StockQuote-StockDrawLine",
						content: r.
					default.createElement(W.
					default, {
							self: this
						}),
						title:
						I.
					default.Lang("DrawLineTool"),
						draggable:
						!0,
						modal: !1,
						buttons: null
					}), this.showDrawLine = !0;
					break;
				case I.
				default.Lang("Direct-1"):
				case I.
				default.Lang("Direct-2"):
				case I.
				default.Lang("Direct-3"):
					this.onSetDirect(e);
					break;
				case I.
				default.Lang("GeneBuy"):
				case I.
				default.Lang("GeneSell"):
					var t = b.
				default.getImpl("StockTrade:QuickTrade");
					this.quickOrderHint = h.Popup.show({
						className: "QuickOrder-Wrap",
						content: r.
					default.createElement(t, {
							market: this.props.market,
							code: this.props.code,
							opType: e.title == I.
						default.Lang("GeneBuy") ? 1:
							2
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					});
					break;
				case I.
				default.Lang("CollBuy"):
				case I.
				default.Lang("CollSell"):
				case I.
				default.Lang("FinaBuy"):
				case I.
				default.Lang("MargSell"):
					var a = b.
				default.getImpl("StockTrade:QuickCredit"),
						i = ["", I.
					default.Lang("CollBuy"), I.
					default.Lang("CollSell"), I.
					default.Lang("FinaBuy"), I.
					default.Lang("MargSell")].indexOf(e.title);
					this.quickOrderHint = h.Popup.show({
						className: "QuickOrder-Wrap",
						content: r.
					default.createElement(a, {
							market: this.props.market,
							code: this.props.code,
							opType: i
						}),
						title:
						"快速交易",
						modal: !0,
						buttons: null
					})
				}
			},
			changeKlineStyle: function(e) {
				w.
			default.setKLineTools({
					indexType: this.state.indexType,
					rightType: this.state.rightType,
					klinestyle: e,
					direct: this.state.direct
				}), this.setState({
					klinestyle: e
				}), this.chart.changeKlineStyle(e)
			},
			delOverlay: function(e) {
				this.refreshOverlay(e.stock, e.add, e.overlayStock)
			},
			refreshOverlay: function(e, t, a) {
				this.setState({
					overlayStock: a
				});
				for (var i = !1, l = 0; l < this.state.overlayStockAll.length; l++) {
					var n = this.state.overlayStockAll[l];
					if (this.props.market == n.market && this.props.code == n.code) {
						this.state.overlayStockAll[l].overlaystock = a, i = !0;
						break
					}
				}
				if (i && a.length <= 0 && this.state.overlayStockAll.splice(l, 1), !i && a.length > 0 && this.state.overlayStockAll.push({
					market: this.props.market,
					code: this.props.code,
					overlaystock: a
				}), w.
			default.setOverlayStock(this.state.overlayStockAll), 0 == t) {
					this.chart.delOverlayStock(e);
					var o = e.market + "_" + e.code,
						r = this.overlaymodel.get(o);
					r && (r.destroy(), this.overlaymodel.delete(o))
				} else 1 == t && (this.chart.addOverlayStock(e), m.overlayStock(this, e.market, e.code, this.props.type, this.state.direct))
			},
			getText: function(e) {
				this.drawtextPopup = h.Popup.show({
					className: "DrawText",
					content: r.
				default.createElement(z.
				default, {
						data: e
					}),
					title:
					I.
				default.Lang("DrawText"),
					modal:
					!0,
					buttons: [I.
				default.Lang("Save"), I.
				default.Lang("Abort")],
					onBtnClick: this.onBtnClickGetText
				})
			},
			onBtnClickGetText: function(e, t) {
				var a = "",
					i = 0,
					l = "";
				if (0 == e) {
					var n = (0, c.
				default)(t.refs.line1.getDOMNode());
					a = n.find('input[name="inputtext"]').val();
					var n = (0, c.
				default)(t.refs.line2.getDOMNode());
					i = n.find('input[name="size"]').val(), l = n.find('input[type="hidden"]').val()
				}
				return this.chart.DrawText(a, i, l), !0
			},
			choseDrawlineTool: function(e, t) {
				var a = this;
				if ("6-2" == e) {
					return void h.Popup.show({
						className: "Hint",
						content: r.
					default.createElement("p", null, "确定清空所有画线？"),
						title:
						I.
					default.Lang("Hint"),
						modal:
						!0,
						buttons: [I.
					default.Lang("Save"), I.
					default.Lang("Abort")],
						onBtnClick: function(e, t) {
							return 0 != e || (a.state.drawlines = [], w.
						default.setDrawlines(a.state.drawlines), a.chart.clearLines(), !0)
						}
					})
				}
				this.chart.choseDrawlineTool(e), this.drawlineTool = t
			},
			resetLine: function() {
				this.drawlineTool && this.drawlineTool.reset()
			},
			addDrawline: function(e) {
				this.state.drawlines.push(e), w.
			default.setDrawlines(this.state.drawlines)
			},
			delDrawline: function(e) {
				for (var t = 0; t < this.state.drawlines.length && this.state.drawlines[t].id != e; t++);
				t < this.state.drawlines.length && (this.state.drawlines.splice(t, 1), w.
			default.setDrawlines(this.state.drawlines))
			},
			refreshDrawline: function(e) {
				for (var t = 0; t < this.state.drawlines.length; t++) if (this.state.drawlines[t].id == e.id) {
					for (var a = 0; a < 9; a++) this.state.drawlines[t].pointarr[a].time = e.pointarr[a].time, this.state.drawlines[t].pointarr[a].price = e.pointarr[a].price;
					w.
				default.setDrawlines(this.state.drawlines);
					break
				}
			},
			overRange: function() {
				h.Popup.show({
					className: "Hint",
					content: r.
				default.createElement("p", null, "最多支持10000条画线，请删除其他画线后继续。"),
					title:
					I.
				default.Lang("Hint"),
					modal:
					!0,
					buttons: null
				})
			},
			killReq: function(e) {
				if (0 == e) this.model && this.model.endWatch();
				else if (e - 1 < this.state.overlayStock.length) {
					var t = this.state.overlayStock[e - 1],
						a = t.market + "_" + t.code,
						i = this.overlaymodel.get(a);
					i && i.endWatch()
				}
			},
			reqData: function(e) {
				var t = e.id,
					a = e.count,
					i = e.time;
				if (0 == t) this.model && this.model.set(this.props.market, this.props.code, this.state.direct, a, i);
				else if (t - 1 < this.state.overlayStock.length) {
					var l = this.state.overlayStock[t - 1],
						n = l.market + "_" + l.code,
						o = this.overlaymodel.get(n);
					o && o.set(l.market, l.code, this.state.direct, a, i)
				}
			},
			onKeyDown: function(e) {
				var t = e.keyCode || e.charCode;
				if (!this.props.widgetContainer || this.props.active) switch (t) {
				case 37:
					this.chart.crossMoveLeft((0, c.
				default)(this.getDOMNode()).offset().left);
					break;
				case 38:
					this.chart.zoomOut();
					break;
				case 39:
					this.chart.crossMoveRight((0, c.
				default)(this.getDOMNode()).offset().left);
					break;
				case 40:
					this.chart.zoomIn();
					break;
				case 27:
					h.Menu.hide(), this.chart.keyDownEsc()
				}
			},
			initShowIndexTypeArray: function() {
				this.showIndexTypeArray = this.state.rightType.concat(), "" != this.state.indexType && this.showIndexTypeArray.push(this.state.indexType)
			},
			showCrossModal: function(e) {
				var t = this;
				this.props.isSmall || (this.crossModal || (this.crossModal = G.
			default.show({
					market: this.props.market,
					code: this.props.code,
					type: this.props.type,
					chart: this.chart,
					topLimit: window.innerHeight - 40,
					leftLimit: 60 + this.getDOMNode().clientWidth,
					crossData: e,
					gType: "kline"
				})), this.crossModal.move({
					crossData: e
				})), this._shortcut_esc || (this._shortcut_esc = y.
			default.reg("esc", function() {
					h.Menu.hide(), t.chart.keyDownEsc()
				}))
			},
			closeCrossModal: function() {
				this.props.isSmall || this.crossModal && (this.crossModal = this.crossModal.hide()), y.
			default.cancel("esc", this._shortcut_esc), delete this._shortcut_esc
			},
			openConfigMA: function() {
				d.
			default.handlePluginAction({
					type: I.
				default.ActionTypes.OPEN_AVERANGE_CONF
				})
			},
			popSectionMenu: function(e) {
				var t = this.getSectionMenu();
				t && (console.log("popSectionMenu:", t), h.Menu.show(window.event, {
					options: t
				}, t.handler || this.onContextMenuClick))
			},
			funcSection: function(e) {
				e && (2 == e.which || 3 == e.which ? this.openStatis(e.section_data) : 1 == e.which && this.chart.zoomOutSection(e))
			},
			openStatis: function(e) {
				var t = e.length;
				if (!(0 >= t)) {
					for (var a = e[0], i = e[t - 1], l = (0, f.getStockAccuracy)(this.props.market, this.props.code), n = {
						timeStart: Y(a.time, this.props.type),
						timeEnd: Y(i.time, this.props.type),
						period: t,
						priceStart: (+a.open).toFixed(l),
						priceEnd: (+i.close).toFixed(l),
						high: 0,
						low: a.low,
						rise: (i.close - a.pclose).toFixed(l),
						risepersent: ((i.close - a.pclose) / a.pclose * 100).toFixed(2),
						frontPrice: (+a.pclose).toFixed(l),
						avgAmount: 0,
						avgPrice: 0,
						amount: 0,
						volume: 0
					}, o = 0; o < t; ++o) {
						var s = e[o];
						n.high < s.high && (n.high = s.high), n.low > s.low && (n.low = s.low), n.avgAmount += s.avg * s.volume, n.amount += s.amount, n.volume += s.volume
					}
					n.high = (+n.high).toFixed(l), n.low = (+n.low).toFixed(l), n.avgPrice = n.amount / n.volume;
					var c = n.amount.toFixed(0).length - n.avgAmount.toFixed(0).length;
					c && (n.avgPrice /= Math.pow(10, c)), n.avgPrice = n.avgPrice.toFixed(l), n.amount = (0, f.fitNumber)(n.amount), n.volume = (0, f.fitNumber)(n.volume);
					var u = this;
					this.statisPopup = h.Popup.show({
						className: "StockQuote-StockInterStatis",
						content: r.
					default.createElement(D.
					default, {
							data: n
						}),
						title:
						I.
					default.Lang("StockInterStatis"),
						modal:
						!0,
						buttons: null,
						popupWillClose: function() {
							u.chart.hideSectionRect()
						}
					})
				}
			},
			indexSet: function(e) {
				this.indexsetPopup = h.Popup.show({
					className: "StockQuote-StockIndexSet",
					content: r.
				default.createElement(B.
				default, {
						data: e
					}),
					title:
					I.
				default.Lang("StockIndexSet"),
					modal:
					!0,
					buttons: [I.
				default.Lang("Save"), I.
				default.Lang("Abort")],
					onBtnClick: this.onBtnClickIndexSet
				})
			},
			onChangeIndex: function() {
				for (var e = w.
			default.getIndex(), t = this.state.rightType, a = !1, i = !1, l = 0; l < e.length; l++) {
					var n = e[l];
					n.label == this.state.indexType && 1 == n.hide && (a = !0, this.chart.setInsideIndex(this.state.indexType, !0));
					for (var o = 0; o < t.length;) t[o] != n.label || 1 != n.hide ? o++ : (i = !0, this.chart.setOutsideIndex(n.label), t.splice(o, 1))
				}
				this.setState({
					indexAll: e
				}), a && (this.changeStoreState(""), this.setState({
					indexType: ""
				})), i && (w.
			default.setKLineTools({
					indexType: this.state.indexType,
					rightType: t,
					klinestyle: this.state.klinestyle,
					direct: this.state.direct
				}), this.setState({
					rightType: t
				}))
			},
			onBtnClickIndexMng: function(e) {
				var t = e.state.index;
				w.
			default.setIndex(t), this.onChangeIndex()
			},
			onBtnClickIndexSet: function(e, t) {
				if (0 == e) {
					for (var a, i = w.
				default.getIndexConf(), l = 0; l < i.length; l++) t.props.data == i[l].name && (a = i[l]);
					for (var l = 0, n = 5; l < n && !(a.line.length <= l && a.param.length <= l); l++) {
						var o = l + 1,
							r = "line" + o,
							s = (0, c.
						default)(t.refs[r].getDOMNode());
						a.param.length > l && (a.param[l].value = +s.find('input[name="cnt"]').val()), a.line.length > l && (a.line[l].hide = !s.find('input[type="checkbox"]')[0].checked, a.line[l].color = s.find('input[type="hidden"]').val())
					}
					this.setState({
						indexConf: i
					}), w.
				default.setIndexConf(i), m.setKlineIndexConf(this, t.props.data, a)
				}
				return !0
			},
			popDirectMenu: function(e) {
				var t = [{
					title: "不复权",
					checked: 0 == this.state.direct
				}, {
					title: "前复权",
					checked: 1 == this.state.direct
				}, {
					title: "后复权",
					checked: 2 == this.state.direct
				}];
				h.Menu.show(e, {
					options: t
				}, this.onSetDirect)
			},
			onSetDirect: function(e) {
				var t = 0;
				if ("不复权" == e.title ? t = 0 : "前复权" == e.title ? t = 1 : "后复权" == e.title && (t = 2), t != this.state.direct) {
					w.
				default.setKLineTools({
						indexType: this.state.indexType,
						rightType: this.state.rightType,
						klinestyle: this.state.klinestyle,
						direct: t
					}), this.model && this.model.set(this.props.market, this.props.code, t), this.chart.initIndexSection(), this.setState({
						direct: t
					});
					var a = !0,
						i = !1,
						l = void 0;
					try {
						for (var n, o = this.overlaymodel[Symbol.iterator](); !(a = (n = o.next()).done); a = !0) {
							var r = n.value,
								s = r[0];
							if (this.overlaymodel.get(s)) {
								var c = s.indexOf("_");
								if (c > 0) {
									var u = s.substr(0, c),
										d = s.substr(c + 1);
									this.overlaymodel.get(s).set(u, d, t)
								}
							}
						}
					} catch (e) {
						i = !0, l = e
					} finally {
						try {
							!a && o.
							return &&o.
							return ()
						} finally {
							if (i) throw l
						}
					}
				}
			},
			indexMng: function() {
				var e = this;
				this.indexmngPopup = h.Popup.show({
					className: "StockQuote-StockIndexMng",
					content: r.
				default.createElement(L.
				default, null),
					title:
					I.
				default.Lang("StockIndexMng"),
					modal:
					!0,
					buttons: [I.
				default.Lang("Reset"), I.
				default.Lang("Save"), I.
				default.Lang("Abort")],
					onBtnClick: function(t, a) {
						return 0 != t ? (1 == t && e.onBtnClickIndexMng(a), !0) : void a.reset()
					}
				})
			},
			setMenuIndex: function(e) {
				"MA" == e || "BOLL" == e ? this.setInsideIndex(e) : this.setOutsideIndex(e)
			},
			setInside: function(e) {
				var t = e.currentTarget.innerHTML;
				this.setInsideIndex(t)
			},
			setInsideIndex: function(e) {
				var t = e;
				this.state.indexType == t ? (this.chart.setInsideIndex(this.state.indexType, !0), this.changeStoreState(""), this.setState({
					indexType: ""
				})) : (this.state.indexType && this.chart.setInsideIndex(this.state.indexType, !0), this.chart.setInsideIndex(t), this.changeStoreState(t), this.setState({
					indexType: t
				}))
			},
			changeStoreState: function(e) {
				w.
			default.setKLineTools({
					indexType: e,
					rightType: this.state.rightType,
					klinestyle: this.state.klinestyle,
					direct: this.state.direct
				})
			},
			setOutside: function(e) {
				var t = e.currentTarget.innerHTML;
				this.setOutsideIndex(t)
			},
			setOutsideIndex: function(e) {
				var t = e,
					a = this.state.rightType,
					i = a.indexOf(t),
					l = this.props.isSmall ? 1 : U; - 1 == i ? (a.length >= l && a.splice(0, a.length - l + 1), a.push(t)) : a.splice(i, 1), w.
			default.setKLineTools({
					indexType: this.state.indexType,
					rightType: a,
					klinestyle: this.state.klinestyle,
					direct: this.state.direct
				}), this.chart.setOutsideIndex(t), this.setState({
					rightType: a
				})
			},
			getItemSize: function(e) {
				var t = 8 * e.length + 20;
				return t
			},
			showMoreMenu: function(e) {
				var t = this;
				e.nativeEvent.stopImmediatePropagation(), h.Menu.show(e.nativeEvent, {
					options: this.menuitems
				}, function(e, a, i) {
					t.setMenuIndex(e.title)
				})
			},
			renderToolBtns: function(e) {
				var t = [];
				return e && t.push(r.
			default.createElement("span", {
					className: "showMenu",
					onClick: this.showMoreMenu
				}, "⋮")), t
			},
			getVisibleItems: function(e) {
				var t = 0,
					a = this.state.width;
				a -= this.state.showDirect ? 120 : 60;
				for (var i = [], l = [], n = 0; n < e.length; n++) {
					var o = e[n],
						r = this.getItemSize(e[n]);
					if (t + r > a) break;
					l.push(o), t += r
				}
				var s = 30;
				l.length < e.length && t + s > a && l.pop();
				for (var n = l.length; n < e.length; n++) {
					var c = !1;
					"MA" == e[n] || "BOLL" == e[n] ? this.state.indexType == e[n] && (c = !0) : this.state.rightType.indexOf(e[n]) != -1 && (c = !0);
					var o = {
						checked: c,
						title: e[n]
					};
					i.push(o)
				}
				return this.menuitems = i, l
			},
			renderItems: function() {
				for (var e = this, t = [], a = 0; a < this.state.indexAll.length; a++) 0 == this.state.indexAll[a].hide && t.push(this.state.indexAll[a].label);
				var i = this.getVisibleItems(t),
					l = i.map(function(t, a) {
						var i = "";
						return -1 !== ["MA", "BOLL"].indexOf(t) ? (i = t == e.state.indexType ? "active" : "", r.
					default.createElement("span", {
							className: i,
							onClick: e.setInside,
							key: a
						}, t)) : (i = -1 !== e.state.rightType.indexOf(t) ? "active" : "", r.
					default.createElement("span", {
							className: i,
							"data-type": a,
							onClick: e.setOutside,
							key: a
						}, t))
					});
				return [l, i.length < t.length]
			},
			render: function() {
				var e, t, a = ((0, f.getIcon)("gear3"), this.state),
					i = 0 == a.direct ? "不复权" : 1 == a.direct ? "前复权" : "后复权",
					l = this.props.noBlurShortcut,
					o = this.renderItems(),
					s = n(o, 2);
				return e = s[0], t = s[1], r.
			default.createElement("div", {
					className: "StockKline",
					tabIndex: "0",
					onFocus: l ? null : this.regShortcut,
					onBlur: l ? null : this.cancelShortcut
				}, r.
			default.createElement("div", {
					className: "klineGraph",
					ref: "klineGraph"
				}), r.
			default.createElement("div", {
					className: "toolBars " + (this.props.isSmall ? "toolBars-widget" : ""),
					ref: "toolBars"
				}, r.
			default.createElement("div", {
					className: "indexBtns"
				}, e, t ? r.
			default.createElement("span", {
					className: "showMenu",
					onClick: this.showMoreMenu
				}, "⋮"):
				null), r.
			default.createElement("div", {
					className: "rightBtns"
				}, r.
			default.createElement("span", {
					className: "indexMng",
					onClick: this.indexMng
				}, "管理"), this.state.showDirect ? r.
			default.createElement("span", {
					className: "active",
					onClick: this.popDirectMenu
				}, i):
				null)))
			}
		});
	t.
default = K;
	var Y = function(e, t) {
			var a, i, l, n, o;
			switch (t) {
			case "day":
			case "week":
				a = e.slice(0, 4) + "-" + e.slice(4, 6) + "-" + e.slice(6, 8), i = new Date(a), l = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][i.getDay()], o = r.
			default.createElement("div", null, a, l);
				break;
			case "month":
				a = e.slice(0, 4) + "-" + e.slice(4, 6), o = r.
			default.createElement("span", null, a);
				break;
			case "60min":
			case "15min":
			case "5min":
				a = e.slice(0, 4) + "-" + e.slice(4, 6) + "-" + e.slice(6, 8), n = e.slice(8, 10) + ":" + e.slice(10, 12), o = r.
			default.createElement("div", null, a, n);
				break;
			default:
				a = e, o = r.
			default.createElement("span", null, a)
			}
			return o
		};
	e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/components/KeyWizard")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(36),
		r = (i(o), a(37)),
		s = a(29),
		c = i(s),
		u = a(31),
		d = i(u),
		p = a(3),
		h = i(p),
		f = n.
	default.createClass({
			displayName: "StockAverangeConf",
			getInitialState: function() {
				return {
					conf: d.
				default.getAverangeConf() || h.
				default.averangeConf
				}
			},
			componentDidMount: function() {
				this.colorBtn = {}, this.colorBtn.line1 = new jscolor(this.refs.M1color.getDOMNode(), {
					valueElement: this.refs.M1colorValue.getDOMNode()
				}), this.colorBtn.line2 = new jscolor(this.refs.M2color.getDOMNode(), {
					valueElement: this.refs.M2colorValue.getDOMNode()
				}), this.colorBtn.line3 = new jscolor(this.refs.M3color.getDOMNode(), {
					valueElement: this.refs.M3colorValue.getDOMNode()
				}), this.colorBtn.line4 = new jscolor(this.refs.M4color.getDOMNode(), {
					valueElement: this.refs.M4colorValue.getDOMNode()
				}), this.colorBtn.line5 = new jscolor(this.refs.M5color.getDOMNode(), {
					valueElement: this.refs.M5colorValue.getDOMNode()
				})
			},
			_reset: function() {
				for (var e = h.
			default.averangeConf, t = ["line1", "line2", "line3", "line4", "line5"], a = 0, i = t.length; a < i; a++) {
					var l = t[a],
						n = (0, c.
					default)(this.refs[l].getDOMNode()),
						o = e[l];
					n.find('input[type="checkbox"]')[0].checked = !o.hide, n.find('input[name="cnt"]').val(o.period), n.find('input[type="hidden"]').val(o.color), this.colorBtn[l].importColor()
				}
			},
			render: function() {
				var e = this.state.conf,
					t = e.line1,
					a = e.line2,
					i = e.line3,
					l = e.line4,
					o = e.line5;
				return n.
			default.createElement("div", {
					className: "StockAverangeConf",
					ref: "StockAverangeConf"
				}, n.
			default.createElement("table", {
					className: "conf-context"
				}, n.
			default.createElement("tr", null, n.
			default.createElement("th", null, "显示"), n.
			default.createElement("th", null, "指标值"), n.
			default.createElement("th", null, "颜色")), n.
			default.createElement("tr", {
					key: "line1",
					ref: "line1"
				}, n.
			default.createElement("td", null, t.hide ? n.
			default.createElement("input", {
					type: "checkbox"
				}):
				n.
			default.createElement("input", {
					type: "checkbox",
					defaultChecked: "true"
				})), n.
			default.createElement("td", null, "M ", n.
			default.createElement(r.IntegerInput, {
					name: "cnt",
					defaultValue: t.period
				})), n.
			default.createElement("td", null, n.
			default.createElement("button", {
					ref: "M1color"
				}), n.
			default.createElement("input", {
					ref: "M1colorValue",
					type: "hidden",
					defaultValue: t.color
				}))), n.
			default.createElement("tr", {
					key: "line2",
					ref: "line2"
				}, n.
			default.createElement("td", null, a.hide ? n.
			default.createElement("input", {
					type: "checkbox"
				}):
				n.
			default.createElement("input", {
					type: "checkbox",
					defaultChecked: "true"
				})), n.
			default.createElement("td", null, "M ", n.
			default.createElement(r.IntegerInput, {
					name: "cnt",
					defaultValue: a.period
				})), n.
			default.createElement("td", null, n.
			default.createElement("button", {
					ref: "M2color"
				}), n.
			default.createElement("input", {
					ref: "M2colorValue",
					type: "hidden",
					defaultValue: a.color
				}))), n.
			default.createElement("tr", {
					key: "line3",
					ref: "line3"
				}, n.
			default.createElement("td", null, i.hide ? n.
			default.createElement("input", {
					type: "checkbox"
				}):
				n.
			default.createElement("input", {
					type: "checkbox",
					defaultChecked: "true"
				})), n.
			default.createElement("td", null, "M ", n.
			default.createElement(r.IntegerInput, {
					name: "cnt",
					defaultValue: i.period
				})), n.
			default.createElement("td", null, n.
			default.createElement("button", {
					ref: "M3color"
				}), n.
			default.createElement("input", {
					ref: "M3colorValue",
					type: "hidden",
					defaultValue: i.color
				}))), n.
			default.createElement("tr", {
					key: "line4",
					ref: "line4"
				}, n.
			default.createElement("td", null, l.hide ? n.
			default.createElement("input", {
					type: "checkbox"
				}):
				n.
			default.createElement("input", {
					type: "checkbox",
					defaultChecked: "true"
				})), n.
			default.createElement("td", null, "M ", n.
			default.createElement(r.IntegerInput, {
					name: "cnt",
					defaultValue: l.period
				})), n.
			default.createElement("td", null, n.
			default.createElement("button", {
					ref: "M4color"
				}), n.
			default.createElement("input", {
					ref: "M4colorValue",
					type: "hidden",
					defaultValue: l.color
				}))), n.
			default.createElement("tr", {
					key: "line5",
					ref: "line5"
				}, n.
			default.createElement("td", null, o.hide ? n.
			default.createElement("input", {
					type: "checkbox"
				}):
				n.
			default.createElement("input", {
					type: "checkbox",
					defaultChecked: "true"
				})), n.
			default.createElement("td", null, "M ", n.
			default.createElement(r.IntegerInput, {
					name: "cnt",
					defaultValue: o.period
				})), n.
			default.createElement("td", null, n.
			default.createElement("button", {
					ref: "M5color"
				}), n.
			default.createElement("input", {
					ref: "M5colorValue",
					type: "hidden",
					defaultValue: o.color
				})))), n.
			default.createElement("div", {
					className: "reset",
					onClick: this._reset
				}, "重置"))
			}
		});
	n.
default.createClass({
		displayName: "AverangeLine",
		getInitialState: function() {
			return {
				line: this.props.line
			}
		},
		render: function() {
			var e = this.props,
				t = e.lineIndex,
				a = this.state.line;
			return n.
		default.createElement("tr", {
				key: "line " + t,
				ref: "line " + t
			}, n.
		default.createElement("td", null, a.hide ? n.
		default.createElement("input", {
				type: "checkbox"
			}):
			n.
		default.createElement("input", {
				type: "checkbox",
				defaultChecked: "true"
			})), n.
		default.createElement("td", null, "M", n.
		default.createElement(r.IntegerInput, {
				name: "cnt",
				defaultValue: a.cnt
			})), n.
		default.createElement("td", null, n.
		default.createElement(r.IntegerInput, {
				name: "size",
				defaultValue: a.size
			})), n.
		default.createElement("td", null, n.
		default.createElement("button", {
				ref: "M " + t + " color"
			}), n.
		default.createElement("input", {
				ref: "M " + t + " colorValue",
				type: "hidden",
				defaultValue: a.color
			})))
		}
	});
	t.
default = f, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = n.
	default.createClass({
			displayName: "StockInterStatis",
			getInitialState: function() {
				return {
					data: this.props.data
				}
			},
			_reset: function() {},
			render: function() {
				var e = this.props.data;
				return n.
			default.createElement("div", {
					className: "StockInterStatis",
					ref: "StockInterStatis"
				}, n.
			default.createElement("ul", {
					className: "inter-brief"
				}, n.
			default.createElement("li", {
					className: "header"
				}, n.
			default.createElement("span", {
					className: "title"
				}, "起始时间"), n.
			default.createElement("span", {
					className: "data"
				}, e.timeStart), n.
			default.createElement("span", {
					className: "title"
				}, "终止时间"), n.
			default.createElement("span", {
					className: "data"
				}, e.timeEnd)), n.
			default.createElement("li", null, n.
			default.createElement("span", {
					className: "title"
				}, "周期个数"), n.
			default.createElement("span", {
					className: "data"
				}, e.period), n.
			default.createElement("span", {
					className: "title"
				}), n.
			default.createElement("span", {
					className: "data"
				}))), n.
			default.createElement("ul", {
					className: "inter-info"
				}, n.
			default.createElement("li", null, n.
			default.createElement("span", {
					className: "title"
				}, "起始价"), n.
			default.createElement("span", {
					className: "data"
				}, e.priceStart), n.
			default.createElement("span", {
					className: "title"
				}, "终止价"), n.
			default.createElement("span", {
					className: "data"
				}, e.priceEnd)), n.
			default.createElement("li", null, n.
			default.createElement("span", {
					className: "title"
				}, "最 高"), n.
			default.createElement("span", {
					className: "data"
				}, e.high), n.
			default.createElement("span", {
					className: "title"
				}, "最 低"), n.
			default.createElement("span", {
					className: "data"
				}, e.low)), n.
			default.createElement("li", null, n.
			default.createElement("span", {
					className: "title"
				}, "前收价"), n.
			default.createElement("span", {
					className: "data"
				}, e.frontPrice), n.
			default.createElement("span", {
					className: "title"
				}, "均 价"), n.
			default.createElement("span", {
					className: "data"
				}, e.avgPrice)), n.
			default.createElement("li", null, n.
			default.createElement("span", {
					className: "title"
				}, "涨跌值"), n.
			default.createElement("span", {
					className: "data " + (e.rise > 0 ? "red" : e.rise < 0 ? "green" : "")
				}, e.rise), n.
			default.createElement("span", {
					className: "title"
				}, "涨跌幅"), n.
			default.createElement("span", {
					className: "data " + (e.rise > 0 ? "red" : e.rise < 0 ? "green" : "")
				}, e.risepersent + "%")), n.
			default.createElement("li", null, n.
			default.createElement("span", {
					className: "title"
				}, "成交量"), n.
			default.createElement("span", {
					className: "data"
				}, e.volume), n.
			default.createElement("span", {
					className: "title"
				}, "成交额"), n.
			default.createElement("span", {
					className: "data"
				}, e.amount))))
			}
		});
	t.
default = o, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = (a(16), a(48)),
		r = i(o),
		s = a(33),
		c = i(s),
		u = a(31),
		d = i(u),
		p = a(3),
		h = i(p),
		f = n.
	default.createClass({
			displayName: "StockIndexMng",
			getInitialState: function() {
				var e = d.
			default.getIndex() || h.
			default.defaultIndex;
				return {
					index: e,
					indexType: e[0].label
				}
			},
			componentDidMount: function() {
				this.setState({
					indexType: this.state.index[0].label
				})
			},
			reset: function() {
				this.setState({
					index: [{
						label: "MA",
						name: "移动平均线",
						hide: !1
					}, {
						label: "BOLL",
						name: "布林线",
						hide: !1
					}, {
						label: "MACD",
						name: "平滑异动平均",
						hide: !1
					}, {
						label: "KDJ",
						name: "随机指标",
						hide: !1
					}, {
						label: "VOL",
						name: "成交量",
						hide: !1
					}, {
						label: "ARBR",
						name: "情绪指标",
						hide: !1
					}, {
						label: "DMA",
						name: "平均差",
						hide: !1
					}, {
						label: "DMI",
						name: "趋向指标",
						hide: !1
					}, {
						label: "RSI",
						name: "相对强弱指标",
						hide: !1
					}, {
						label: "CR",
						name: "带状能量线",
						hide: !0
					}, {
						label: "VR",
						name: "成交量变异率",
						hide: !0
					}, {
						label: "EMV",
						name: "简易波动指标",
						hide: !0
					}, {
						label: "MTM",
						name: "动量线",
						hide: !0
					}, {
						label: "CCI",
						name: "商品路径指标",
						hide: !0
					}, {
						label: "SAR",
						name: "抛物线指标",
						hide: !0
					}, {
						label: "BIAS",
						name: "乖离率",
						hide: !0
					}, {
						label: "PSY",
						name: "心理线",
						hide: !0
					}, {
						label: "WR",
						name: "威廉指标",
						hide: !0
					}, {
						label: "OSC",
						name: "变动速率线",
						hide: !0
					}, {
						label: "ROC",
						name: "变动率指标",
						hide: !0
					}]
				})
			},
			saveSettings: function() {
				d.
			default.setIndex(this.state.index)
			},
			clickIndex: function(e) {
				this.setState({
					indexType: e
				})
			},
			render: function() {
				var e = this.state;
				return n.
			default.createElement("div", {
					className: "StockIndexMng",
					ref: "StockIndexMng"
				}, n.
			default.createElement(r.
			default, {
					list: e.index,
					itemlabel: e.indexType,
					clickIndex: this.clickIndex
				}), n.
			default.createElement(m, {
					type: e.indexType
				}))
			}
		}),
		m = n.
	default.createClass({
			displayName: "DescScroll",
			mixins: [c.
		default],
			componentDidUpdate: function() {
				this.resizeScrollbar(), this.resetScroll()
			},
			getNode: function() {
				var e = "";
				switch (this.props.type) {
				case "MA":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "1.股价高于平均线，视为强势；股价低于平均线，视为弱势；"), n.
				default.createElement("p", null, "2.平均线向上涨升，具有助涨力道；平均线向下跌降，具有助跌力道；"), n.
				default.createElement("p", null, "3.二条以上平均线向上交叉时，买进；"), n.
				default.createElement("p", null, "4.二条以上平均线向下交叉时，卖出；"), n.
				default.createElement("p", null, "5.移动平均线的信号经常落后股价，若以EXPMA 、VMA 辅助，可以改善。"));
					break;
				case "BOLL":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "BOLL利用统计学原理标准差求取其信赖区间。"), n.
				default.createElement("p", null, "买卖原则"), n.
				default.createElement("p", null, "1.BOLL利用波带 可以显示其安全的高低价位。"), n.
				default.createElement("p", null, "2.当易变性变小，而波带变窄时，激烈的价格波动有可能随即产生。"), n.
				default.createElement("p", null, "3.高低点穿越波带边线时，立即回到波带内，会有回档产生。"), n.
				default.createElement("p", null, "4.波带开始移动后，以此方式进入另一波带，这对于找出目标值有相当的帮助。"));
					break;
				case "MACD":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "MACD指数平滑异同移动平均线为两条长、短的平滑平均线。"), n.
				default.createElement("p", null, "其买卖原则为："), n.
				default.createElement("p", null, "1.DIFF、DEA均为正，DIFF向上突破DEA，买入信号参考。"), n.
				default.createElement("p", null, "2.DIFF、DEA均为负，DIFF向下跌破DEA，卖出信号参考。"), n.
				default.createElement("p", null, "3.DEA线与K线发生背离，行情可能出现反转信号。"), n.
				default.createElement("p", null, "4.分析MACD柱状线，由红变绿(正变负)，卖出信号参考；由绿变红，买入信号参考。"));
					break;
				case "KDJ":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "KDJ，其综合动量观念、强弱指标及移动平均线的优点，"), n.
				default.createElement("p", null, "早年应用在期货投资方面，功能颇为显著，目前为股市中最常被使用的指标之一。"), n.
				default.createElement("p", null, "买卖原则"), n.
				default.createElement("p", null, "1.K线由右边向下交叉D值做卖，K线由右边向上交叉D值做买。"), n.
				default.createElement("p", null, "2.高档连续二次向下交叉确认跌势，低挡连续二次向上交叉确认涨势。"), n.
				default.createElement("p", null, "3.D值小于20%超卖，D值大于80%超买，J大于100%超买，J小于10%超卖。"), n.
				default.createElement("p", null, "4.KD值于50%左右徘徊或交叉时，无意义。"), n.
				default.createElement("p", null, "5.投机性太强的个股不适用。"), n.
				default.createElement("p", null, "6.可观察KD值同股价的背离，以确认高低点。"));
					break;
				case "VOL":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "红绿柱：若收盘价高过开盘价，成交量画红色空心实体；否则画绿色实心。"), n.
				default.createElement("p", null, "均线一般取五日、十日、二十日成交量均线。"));
					break;
				case "ARBR":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "AR是一种“潜在动能”。由于开盘价乃是是股民经一夜冷静思考后，共同默契的一个合理价格，那么，从开盘价向上推升至 当日最高价之间，每超越一个价位都会损耗一分能量。当AR值升高至一定限度时，代表能量已经消耗殆尽，缺乏推升力道的 股价，很快的就会面临反转危机。相反地股价从开盘之后并未向上冲高，自然就减少能量的损耗，相对的也就屯积保存了许 多累积能量，这一股无形的潜能，随时都有可能在适当成熟的时机暴发出来。BR是一种“情绪指标”就是以“反市场心理”的立 场为基础。"), n.
				default.createElement("p", null, "AR是一种“潜在动能”。由于开盘价乃是是股民经一夜冷静思考后，共同默契的一个合理价格，那么，从开盘价向上推升至zR人气指标，介于80至100，可能盘整；过高，可能回落；过低可能反弹。"), n.
				default.createElement("p", null, "BR意愿指标，介于70至150，可能盘整；高于300，可能回档；低于50，可能反弹。"));
					break;
				case "DMA":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "算法："), n.
				default.createElement("p", null, "收盘价的短期平均与长期平均的差除以短期天数，得DMA；DMA的M日平均为AMA。"), n.
				default.createElement("p", null, "参数：SHORT 短期天数 LONG 长期天数　M 计算移动平均的天数一般为10、50、10。"));
					break;
				case "DMI":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "指示投资人避免在盘整的市场中交易，一旦市场变得有利润时，DMI立刻引导投资人进场，并且在适当时机退场。"), n.
				default.createElement("p", null, "买卖原则："), n.
				default.createElement("p", null, "1.+DI上交叉-DI时，可参考做买。"), n.
				default.createElement("p", null, "2.DI下交叉-DI时，可参考做卖。"), n.
				default.createElement("p", null, "3.ADX于50以上向下转折时，对表市场趋势终了。"), n.
				default.createElement("p", null, "4.当ADX滑落至+DI之下时，不宜进场交易。"), n.
				default.createElement("p", null, "5.当ADXR介于20-25时，宜采用TBP及CDP中之反应秘诀为交易参考。"));
					break;
				case "RSI":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "RSIS为1978年美国作者Wells WidlerJR。所提出的交易方法之一。所谓RSI英文全名为Relative Strenth Index，中文名称 为相对强弱指标．RSI的基本原理是在一个正常的股市中，多空买卖双方的力道必须得到均衡，股价才能稳定;而RSI是对于 固定期间内，股价上涨总幅度平均值占总幅度平均值的比例。"), n.
				default.createElement("p", null, "1.RSI值于0-100之间呈常态分配，当6日RSI值为80‰以上时，股市呈超买现象，若出现M头，市场风险较大；当6日RSI值在 20‰以下时，股市呈超卖现象，若出现W头，市场机会增大。"), n.
				default.createElement("p", null, "2.RSI一般选用6日、12日、24日作为参考基期，基期越长越有趋势性(慢速RSI)，基期越短越有敏感性，(快速RSI)。当快速 RSI由下往上突破慢速RSI时，机会增大；当快速RSI由上而下 跌破慢速RSI时，风险增大。"));
					break;
				case "SAR":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "1.任何时候都可以使用SAR 为参考停损点；"), n.
				default.createElement("p", null, "2.价格涨跌的速度必须比SAR 升降的速度快，否则可能会产生停损信号；"), n.
				default.createElement("p", null, "3.SAR 由红色变成绿色时，卖出参考；"), n.
				default.createElement("p", null, "4.SAR 由绿色变成红色时，买进参考；"), n.
				default.createElement("p", null, "5.本指标周期参数一般设定为4天；"), n.
				default.createElement("p", null, "6.本设定主要为寻找出现多头停损或空头停损的个股。"));
					break;
				case "CR":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "算法："), n.
				default.createElement("p", null, "在N日内，若某日最高价高于前一日中价(最高、最低价的均值)，将二者的差累加到强势和中；若某日最低价低于前中价，将前中价与最低价的差累加到弱势和中。强势和除以弱势和，再乘100，即得CR。 同时绘制CR的M1日、M2日、M3日均线。"), n.
				default.createElement("p", null, "参数：N 统计天数"), n.
				default.createElement("p", null, "M1、M2、M3　计算移动平均的天数，一般为5、10、20"), n.
				default.createElement("p", null, "一．用途："), n.
				default.createElement("p", null, "该指标用于判断买卖时机。能够测量人气的热度和价格动量的潜能；显示压力带和支撑带，以辅助BRAR的不足。"), n.
				default.createElement("p", null, "二．使用方法："), n.
				default.createElement("p", null, "1.a、b两线所夹的区域称为（副地震带），当CR由下往上欲穿越副地震带时，股价相对将遭次级压力干扰；当CR欲由上往下贯穿副地震带时，股价相对将遭遇次级支撑干扰。"), n.
				default.createElement("p", null, "2.c、d两线所夹成的区域称为（主地震带），当CR由下往上欲穿越主地震带时，股价相对将遭遇强大压力干扰；当CR由上往下欲贯穿主地震带时，股价相对将遭遇强大支撑干扰。"), n.
				default.createElement("p", null, "3.CR相对股价也会产生背离现象。特别是在股价的高价区。"), n.
				default.createElement("p", null, "4.CR跌至a、b、c、d四条线的下方，再度由低点向上爬升160%时，为短线获利卖出时机。例如从CR100上升到160。"), n.
				default.createElement("p", null, "5.CR下跌至40以下时，股价形成底部的机会相当高。"), n.
				default.createElement("p", null, "6.CR高于300~400之间时，股价很容易向下反转。"));
					break;
				case "VR":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "VR实质为成交量的强弱指标，运用在过热之市场及低迷的盘局中，进一步辨认头部及底部的形成，有相当的作用，VR和PSY配合使用。"), n.
				default.createElement("p", null, "买卖原则"), n.
				default.createElement("p", null, "1.VR下跌致40%以下时，市场极易形成底部。"), n.
				default.createElement("p", null, "2.VR值一般分布在150%左右最多，一旦越过250%市场极易产生一段多头行情。"), n.
				default.createElement("p", null, "3.VR超过350%以上，应有高档危机意识，随时注意反转之可能，可配合CR及PSY使用。"), n.
				default.createElement("p", null, "4.VR运用在寻找底部时比较可靠，确认头部时，宜多配合其他指标使用。"));
					break;
				case "EMV":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "1.EMV 由下往上穿越0 轴时，视为中期买进参考信号；"), n.
				default.createElement("p", null, "2.EMV 由上往下穿越0 轴时，视为中期卖出参考信号；"), n.
				default.createElement("p", null, "3.EMV 的平均线穿越0 轴，产生假信号的机会可能较少；"), n.
				default.createElement("p", null, "4.当ADX 低于±DI时，本指标失去效用；"), n.
				default.createElement("p", null, "5.须长期使用EMV指标才可能获得较佳利润。"));
					break;
				case "MTM":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "动量线:收盘价-N日前的收盘价"), n.
				default.createElement("p", null, "MAMTM:MTM的M日简单移动平均"), n.
				default.createElement("p", null, "MTM线　:当日收盘价与N日前的收盘价的差；"), n.
				default.createElement("p", null, "MTMMA线:对上面的差值求N日移动平均；"), n.
				default.createElement("p", null, "参数：N 间隔天数，也是求移动平均的天数，一般取6"), n.
				default.createElement("p", null, "用法："), n.
				default.createElement("p", null, "1.MTM从下向上突破MTMMA，买入参考信号；"), n.
				default.createElement("p", null, "2.MTM从上向下跌破MTMMA，卖出参考信号；"), n.
				default.createElement("p", null, "3.股价续创新高，而MTM未配合上升，意味上涨动力减弱；"), n.
				default.createElement("p", null, "4.股价续创新低，而MTM未配合下降，意味下跌动力减弱；"), n.
				default.createElement("p", null, "5.股价与MTM在低位同步上升，将有反弹行情；反之，从高位同步下降，将有回落走势。"));
					break;
				case "CCI":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "1.CCI 为正值时，视为多头市场；为负值时，视为空头市场；"), n.
				default.createElement("p", null, "2.常态行情时，CCI 波动于±100 的间；强势行情，CCI 会超出±100 ；"), n.
				default.createElement("p", null, "3.CCI大于100 时，买进参考，直到CCI小于100 时，卖出参考；"), n.
				default.createElement("p", null, "4.CCI小于-100 时，减仓参考，直到CCI大于-100 时，回补参考。"));
					break;
				case "BIAS":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "1.本指标的乖离极限值随个股不同而不同，使用者可利用参考线设定，固定其乖离范围；"), n.
				default.createElement("p", null, "2.当股价的正乖离扩大到一定极限时，股价会产生向下拉回的作用力；"), n.
				default.createElement("p", null, "3.当股价的负乖离扩大到一定极限时，股价会产生向上拉升的作用力；"));
					break;
				case "PSY":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "1.PSY大于75，形成Ｍ头时，股价容易遭遇压力；"), n.
				default.createElement("p", null, "2.PSY小于25，形成Ｗ底时，股价容易获得支撑；"), n.
				default.createElement("p", null, "3.PSY 与VR 指标属一组指标群，须互相搭配使用。"));
					break;
				case "WR":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "1.WR波动于0 - 100，100置于顶部，0置于底部。"), n.
				default.createElement("p", null, "2.本指标以50为中轴线，高于50视为股价转强；低于50视为股价转弱。"), n.
				default.createElement("p", null, "3.本指标高于20后再度向下跌破20，卖出；低于80后再度向上突破80，买进。"), n.
				default.createElement("p", null, "4.WR连续触底3 - 4次，股价向下反转机率大；连续触顶3 - 4次，股价向上反转机率大。"));
					break;
				case "OSC":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "1.OSC 以100 为中轴线，OSC大于100 为多头市场；OSC小于100 为空头市场；"), n.
				default.createElement("p", null, "2.OSC 向上交叉其平均线时，买进；OSC 向下交叉其平均线时卖出；"), n.
				default.createElement("p", null, "3.OSC 在高水平或低水平与股价产生背离时，应注意股价随时有反转的可能；"), n.
				default.createElement("p", null, "4.OSC 的超买超卖界限值随个股不同而不同。"));
					break;
				case "ROC":
					e = n.
				default.createElement("div", {
						className: "scroll-inner"
					}, n.
				default.createElement("p", null, "当ROC向下跌破零，卖出信号；ROC向上突破零，买入参考信号。股价 创新高，ROC未配合上升，显示上涨动力减弱。股价创新低，ROC 未配合下降，显示下跌动力减弱。股价与ROC从低位同时上升， 短期反弹有望。股价与ROC从高位同时下降，警惕回落。"))
				}
				return e
			},
			render: function() {
				return n.
			default.createElement("div", {
					className: "testscroll right"
				}, n.
			default.createElement("div", {
					className: "scroll-inner"
				}, this.getNode()))
			}
		});
	t.
default = f, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(36),
		r = (i(o), a(37)),
		s = a(29),
		c = i(s),
		u = a(31),
		d = i(u),
		p = a(3),
		h = i(p),
		f = 5,
		m = n.
	default.createClass({
			displayName: "StockIndexSet",
			getInitialState: function() {
				var e = d.
			default.getIndexConf() || h.
			default.indexConf;
				return {
					conf: this.getCurIndexConf(e)
				}
			},
			getCurIndexConf: function(e) {
				for (var t = 0; t < e.length; t++) if (this.props.data == e[t].name) return e[t]
			},
			componentDidMount: function() {
				this.colorBtn = {};
				for (var e = this.state.conf, t = e.line, a = 0; a < t.length; a++) {
					var i = a + 1;
					this.colorBtn["line" + i] = new jscolor(this.refs["M" + i + "color"].getDOMNode(), {
						valueElement: this.refs["M" + i + "colorValue"].getDOMNode(),
						zIndex: 99999
					})
				}
			},
			_reset: function() {
				for (var e = h.
			default.indexConf, t = this.getCurIndexConf(e), a = 0; a < f; a++) {
					var i = a + 1;
					if (t.line.length <= a && t.param.length <= a) break;
					var l = "line" + i,
						n = (0, c.
					default)(this.refs[l].getDOMNode());
					t.param.length > a && n.find('input[name="cnt"]').val(t.param[a].value), t.line.length > a && (n.find('input[type="checkbox"]')[0].checked = !t.line[a].hide, n.find('input[type="hidden"]').val(t.line[a].color), this.colorBtn[l].importColor())
				}
			},
			renderItem: function() {
				for (var e = [], t = this.state.conf, a = 0; a < f; a++) {
					var i = a + 1;
					if (t.line.length <= a && t.param.length <= a) break;
					var l = t.param.length > a ? t.param[a].name : "",
						o = t.line.length > a;
					e.push(n.
				default.createElement("tr", {
						key: "line" + i,
						ref: "line" + i
					}, n.
				default.createElement("td", null, l), t.param.length > a ? n.
				default.createElement("td", null, n.
				default.createElement(r.IntegerInput, {
						name: "cnt",
						defaultValue: t.param[a].value
					})):
					n.
				default.createElement("td", null), o ? n.
				default.createElement("td", null, t.line[a].hide ? n.
				default.createElement("input", {
						type: "checkbox"
					}):
					n.
				default.createElement("input", {
						type: "checkbox",
						defaultChecked: "true"
					}), " ", n.
				default.createElement("span", {
						className: "linename"
					}, t.line[a].name)):
					n.
				default.createElement("td", null), o ? n.
				default.createElement("td", null, n.
				default.createElement("button", {
						ref: "M" + i + "color"
					}), n.
				default.createElement("input", {
						ref: "M" + i + "colorValue",
						type: "hidden",
						defaultValue: t.line[a].color
					})):
					n.
				default.createElement("td", null)))
				}
				return e
			},
			render: function() {
				var e = this.state.conf;
				e.line1, e.line2, e.line3, e.line4, e.line5;
				return n.
			default.createElement("div", {
					className: "StockIndexSet",
					ref: "StockIndexSet"
				}, n.
			default.createElement("table", {
					className: "conf-context"
				}, n.
			default.createElement("tr", null, n.
			default.createElement("th", null, "参数名"), n.
			default.createElement("th", null, "参数值"), n.
			default.createElement("th", null, "指标线"), n.
			default.createElement("th", null, "颜色")), this.renderItem()), n.
			default.createElement("div", {
					className: "reset",
					onClick: this._reset
				}, "重置"))
			}
		});
	n.
default.createClass({
		displayName: "AverangeLine",
		getInitialState: function() {
			return {
				line: this.props.line
			}
		},
		render: function() {
			var e = this.props,
				t = e.lineIndex,
				a = this.state.line;
			return n.
		default.createElement("tr", {
				key: "line " + t,
				ref: "line " + t
			}, n.
		default.createElement("td", null, a.hide ? n.
		default.createElement("input", {
				type: "checkbox"
			}):
			n.
		default.createElement("input", {
				type: "checkbox",
				defaultChecked: "true"
			})), n.
		default.createElement("td", null, "M", n.
		default.createElement(r.IntegerInput, {
				name: "cnt",
				defaultValue: a.cnt
			})), n.
		default.createElement("td", null, n.
		default.createElement(r.IntegerInput, {
				name: "size",
				defaultValue: a.size
			})), n.
		default.createElement("td", null, n.
		default.createElement("button", {
				ref: "M " + t + " color"
			}), n.
		default.createElement("input", {
				ref: "M " + t + " colorValue",
				type: "hidden",
				defaultValue: a.color
			})))
		}
	});
	t.
default = m, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(29),
		r = i(o),
		s = a(12),
		c = i(s),
		u = a(65),
		d = i(u),
		p = a(2),
		h = i(p),
		f = a(25),
		m = i(f),
		k = a(16),
		g = a(6),
		S = a(26),
		b = i(S),
		v = a(3),
		y = i(v),
		x = a(66),
		w = i(x),
		E = a(11),
		I = i(E),
		T = a(67),
		M = i(T),
		N = a(31),
		D = i(N),
		C = n.
	default.createClass({
			displayName: "StockBriefHeader",
			getInitialState: function() {
				var e = this.props;
				return this.disableArrow = !1, {
					isFirst: e.isFirst,
					isLast: e.isLast,
					gridType: e.gridType,
					bell: e.bell || !1,
					star: e.star,
					asideVisible: e.asideVisible
				}
			},
			prevStock: function() {
				if (!this.props.isFirst && "MyStockList" == this.props.gridType && !this.disableArrow) {
					var e = this,
						t = this.props.stock,
						a = t.market,
						i = t.code,
						l = null;
					if (I.
				default.prevStock(a, i, function(t) {
						e.props.stockSwitch(t, !0)
					}), l) {
						var n = a + ":" + i;
						I.
					default.openDetail(l.market, l.code, l.name, !0, "MyStockList", n)
					}
				}
			},
			nextStock: function() {
				if (!this.props.isLast && "MyStockList" == this.props.gridType && !this.disableArrow) {
					var e = this,
						t = this.props.stock,
						a = t.market,
						i = t.code,
						l = null;
					if (I.
				default.nextStock(a, i, function(t) {
						e.props.stockSwitch(t, !0)
					}), l) {
						var n = a + ":" + i;
						I.
					default.openDetail(l.market, l.code, l.name, !0, "MyStockList", n)
					}
				}
			},
			buy: function() {
				var e = this.props,
					t = e.market,
					a = e.code,
					i = h.
				default.getImpl("StockTrade:QuickTrade");
				this.quickOrderHint = k.Popup.show({
					className: "QuickOrder-Wrap",
					content: n.
				default.createElement(i, {
						market: t,
						code: a,
						opType: 1
					}),
					title:
					"快速交易",
					modal: !0,
					buttons: null
				})
			},
			sell: function() {
				var e = this.props,
					t = e.market,
					a = e.code,
					i = h.
				default.getImpl("StockTrade:QuickTrade");
				this.quickOrderHint = k.Popup.show({
					className: "QuickOrder-Wrap",
					content: n.
				default.createElement(i, {
						market: t,
						code: a,
						opType: 2
					}),
					title:
					"快速交易",
					modal: !0,
					buttons: null
				})
			},
			bell: function() {
				if (!m.
			default.isLogin()) return void d.
			default.login();
				var e;
				I.
			default.isSetBell(this.props.market, this.props.code, function(t) {
					e = t
				});
				var t = this.props.stock;
				t.isIndex = (0, g.isStockIndex)(t.market, t.code), k.Popup.show({
					className: "StockQuote-StockWarn" + (t.isIndex ? " isIndex" : ""),
					content: n.
				default.createElement(w.
				default, {
						stock: t,
						toggleBell: this.toggleBell,
						conds: e
					}),
					title:
					t.isIndex ? y.
				default.Lang("IndexWarn"):
					y.
				default.Lang("StockWarn"),
					modal:
					!0,
					buttons : null,
					popupClosing: w.
				default.setBell.bind(this, t, this.toggleBell)
				})
			},
			toggleBell: function(e) {
				var t = e.conds;
				t && (t.pGe || t.pLe || t.ppGe) ? this.setState({
					bell: !0,
					star: !0
				}) : this.setState({
					bell: !1
				})
			},
			toggleStar: function() {
				var e = this.props.stock;
				if (!e) {
					var t = this.props,
						a = t.code,
						i = t.market,
						l = t.name;
					e = {
						code: a,
						market: i,
						name: l
					}
				}
				this.state.star ? I.
			default.removeStock(e.market, e.code):
				I.
			default.addStock(e.market, e.code, e.name), this.state.star ? this.preAndNextDisable():
				""
			},
			onBtnClickBriefSet: function(e) {
				var t = e.state.index;
				D.
			default.setStockBriefList(e.state.stockType, t), this.props.briefChange && this.props.briefChange()
			},
			quoteSet: function() {
				var e = this,
					t = this.props,
					a = this.state,
					i = (0, g.isStockIndex)(t.market, t.code),
					l = "stock";
				"PlateList" == a.gridType ? l = "plate" : i && (l = "index"), this.briefsetPopup = k.Popup.show({
					className: "StockQuote-StockBriefSet",
					content: n.
				default.createElement(M.
				default, {
						stockType: l
					}),
					title:
					y.
				default.Lang("StockBriefSet"),
					modal:
					!0,
					buttons: [y.
				default.Lang("Reset"), y.
				default.Lang("Save"), y.
				default.Lang("Abort")],
					onBtnClick: function(t, a) {
						return 0 != t ? (1 == t && e.onBtnClickBriefSet(a), !0) : void a.reset()
					}
				})
			},
			preAndNextDisable: function() {
				var e = (0, r.
			default)(n.
			default.findDOMNode(this.refs.StockQuoteStockBriefHeaderLeft));
				e.find(".arrow.prev").addClass("disable"), e.find(".arrow.next").addClass("disable"), this.disableArrow = !0
			},
			toggleAside: function() {
				this.props.toggleDetailRight.apply(null, arguments), this.setState({
					asideVisible: !this.state.asideVisible
				})
			},
			f10: function(e) {
				e.preventDefault();
				var t = this.props,
					a = t.market,
					i = t.code,
					l = t.stock,
					n = l ? l.name : b.
				default.get(a, i);
				g.Event.bubble(this.getDOMNode(), {
					type: "ADD_TAB",
					subtype: "IFRAME",
					name: "F10:" + n,
					id: "f10:" + a + ":" + i,
					url: e.currentTarget.getAttribute("href")
				})
			},
			componentDidMount: function() {
				var e = this;
				this.dispatchId = c.
			default.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "StockTrade:DO_ORDER_SUCC":
						e.quickOrderHint && e.quickOrderHint.close(), e.quickOrderHint = null;
						break;
					case "MyStock:SYNC_MY_STOCK":
						e.toggleBellAndStar();
						break;
					case "MyStock:ADD_STOCK":
					case "MyStock:REMOVE_STOCK":
						e.setState({
							star: !e.state.star
						})
					}
				}), this.toggleBellAndStar(), m.
			default.on("loginChange", this.loginStateUpdate)
			},
			loginStateUpdate: function() {
				m.
			default.isLogin() || this.setState({
					bell: !1
				})
			},
			toggleBellAndStar: function() {
				var e = this,
					t = this.props,
					a = t.market,
					i = t.code;
				a && i && (setTimeout(function() {
					I.
				default.isMyStock(a, i, function(t) {
						e.setState({
							star: t
						})
					})
				}, 10), setTimeout(function() {
					I.
				default.isSetBell(a, i, function(t) {
						e.setState({
							bell: !! t
						})
					})
				}, 20))
			},
			componentWillUnmount: function() {
				this.dispatchId && c.
			default.unregister(this.dispatchId)
			},
			_renderToolBar: function(e) {
				var t = this.props,
					a = this.state,
					i = !! m.
				default.isLogin() && a.bell,
					l = a.star,
					o = (0, g.isStockIndex)(t.market, t.code),
					r = n.
				default.createElement("i", {
						className: "ico ico-arrow " + (this.state.asideVisible ? "arrow-right" : "arrow-left"),
						onClick: this.toggleAside
					});
				if ("PlateList" == e || o) return n.
			default.createElement("div", {
					className: "head-toolbar"
				}, n.
			default.createElement("span", {
					className: "ico-list"
				}, n.
			default.createElement("i", {
					className: "ico stock-star " + (l ? "fill" : ""),
					onClick: this.toggleStar
				}, (0, g.getIcon)("star-filled")), n.
			default.createElement("i", {
					className: "ico sep"
				}), n.
			default.createElement("i", {
					key: "openSettings",
					className: "ico openSettings",
					onClick: this.quoteSet
				}), n.
			default.createElement("i", {
					className: "ico sep"
				}), n.
			default.createElement("i", {
					className: "ico bell " + (i ? "fill" : ""),
					onClick: this.bell
				}, (0, g.getIcon)("bell")), o ? null:
				n.
			default.createElement("i", {
					className: "ico sep"
				}), o ? null:
				r));
				var s = "http://f9.chinabigdata.com/" + this.props.market.toUpperCase() + this.props.code + ".html?v=1",
					c = (0, g.isTradable)(this.props.market, this.props.code),
					u = b.
				default.get(t.market, t.code);
				return n.
			default.createElement("div", {
					className: "head-toolbar"
				}, n.
			default.createElement("span", {
					className: "text-list"
				}, u && 3 != u.type && 4 != u.type && 12 != u.type ? n.
			default.createElement("a", {
					href: s,
					onClick: this.f10,
					className: "f10-wrap"
				}, n.
			default.createElement("i", {
					className: "f10"
				}, "F10")):
				null, c ? n.
			default.createElement("i", {
					className: "ggt" == this.props.market || "szgt" == this.props.market ? "hide" : "buy",
					onClick: this.buy
				}, "买入"):
				null, c ? n.
			default.createElement("i", {
					className: "ggt" == this.props.market || "szgt" == this.props.market ? "hide" : "sell",
					onClick: this.sell
				}, "卖出"):
				null), n.
			default.createElement("span", {
					className: "ico-list"
				}, n.
			default.createElement("i", {
					className: "ico stock-star " + (l ? "fill" : ""),
					onClick: this.toggleStar
				}, (0, g.getIcon)("star-filled")), n.
			default.createElement("i", {
					className: "ico sep"
				}), n.
			default.createElement("i", {
					key: "openSettings",
					className: "ico openSettings",
					onClick: this.quoteSet
				}), n.
			default.createElement("i", {
					className: "ico sep"
				}), n.
			default.createElement("i", {
					className: "ico bell " + (i ? "fill" : ""),
					onClick: this.bell
				}, (0, g.getIcon)("bell")), n.
			default.createElement("i", {
					className: "ico sep"
				}), r))
			},
			render: function() {
				var e = this.props,
					t = this.state;
				return n.
			default.createElement("div", {
					className: "StockQuote-StockBriefHeader"
				}, n.
			default.createElement(L, {
					ref: "StockQuoteStockBriefHeaderLeft",
					stock: e.stock,
					market: e.market,
					code: e.code,
					name: e.name,
					gridType: t.gridType,
					prevStock: this.prevStock,
					nextStock: this.nextStock,
					isFirst: e.isFirst,
					isLast: e.isLast
				}), this._renderToolBar(t.gridType))
			}
		}),
		L = n.
	default.createClass({
			displayName: "HeaderLeft",
			getInitialState: function() {
				return {
					isFirst: !0,
					isLast: !0
				}
			},
			componentDidMount: function() {
				if ("MyStockList" == this.props.gridType) {
					var e = this,
						t = this.props,
						a = t.market,
						i = t.code;
					setTimeout(function() {
						I.
					default.getStockIdxInfo(a, i, function(t) {
							e.setState(t)
						})
					}, 10)
				}
			},
			_renderPlateInfo: function(e) {
				return ""
			},
			render: function() {
				var e = this.props,
					t = this.state,
					a = "MyStockList" == e.gridType,
					i = "boolean" == typeof e.isFirst ? e.isFirst : t.isFirst,
					l = b.
				default.get(e.market, e.code) && b.
				default.get(e.market, e.code).credit,
					o = "boolean" == typeof e.isLast ? e.isLast:
					t.isLast,
					r = "0" == l && "ggt" != e.market && "szgt" != e.market ? n.
				default.createElement("span", {
						className: "credit_risk_label"
					}, "R"):
					null;
				return n.
			default.createElement("div", {
					className: "head-info"
				}, n.
			default.createElement("div", {
					className: "arrow prev " + (a && !i ? "" : "disable"),
					onClick: e.prevStock
				}), n.
			default.createElement("hgroup", {
					className: "stock"
				}, r, n.
			default.createElement("span", {
					className: "name"
				}, e.stock && e.stock.name || e.name || ""), n.
			default.createElement("span", {
					className: "ggt" == (e.stock && e.stock.market || e.market) || "szgt" == (e.stock && e.stock.market || e.market) ? "hk" : ""
				}, e.stock && e.stock.code || e.code || "")), n.
			default.createElement("div", {
					className: "arrow next " + (a && !o ? "" : "disable"),
					onClick: e.nextStock
				}), this._renderPlateInfo(e.gridType, e.stock))
			}
		});
	t.
default = C, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/AppActionCreators")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(6),
		r = a(37),
		s = a(11),
		c = i(s),
		u = a(29),
		d = i(u),
		p = a(31),
		h = i(p),
		f = a(3),
		m = i(f),
		k = n.
	default.createClass({
			displayName: "StockWarn",
			statics: {
				onBtnClick: function(e, t) {
					if (0 == e) {
						var a, i, l = {},
							n = ["openPersent", "riseTo", "fallTo", "min5Persent", "handOver", "singleVolume"];
						i = (0, d.
					default)(t.refs.frequency.getDOMNode()), i.find("#warn-freq-daily")[0].checked ? l.freqType = "daily" : l.freqType = "once";
						for (var o = 0, r = n.length; o < r; ++o) a = n[o], i = t.refs[a], i && (l[a] = {}, i = (0, d.
					default)(i.getDOMNode()), l[a].work = i.find("#" + a)[0].checked, "daily" != l.freqType || "riseTo" != a && "fallTo" != a ? l[a].num = i.find('input[type="text"]').val() : l[a].num = null);
						l.saveTime = (new Date).getTime();
						var s = t.state.stock,
							c = s.market,
							u = s.code;
						h.
					default.saveWarnConf(c, u, l)
					}
					return !0
				},
				setBell: function(e, t) {
					var a = (0, d.
				default)("input#openPersent"),
						i = (0, d.
					default)("input#riseTo"),
						l = (0, d.
					default)("input#fallTo");
					if (a.prop("checked") || i.prop("checked") || l.prop("checked")) {
						var n = {};
						n.ppGe = a.prop("checked") ? +(0, d.
					default)(".inputOpenPersent").find("input")[0].value : 0, n.pGe = i.prop("checked") ? +(0, d.
					default)(".inputRiseTo").find("input")[0].value : 0, n.pLe = l.prop("checked") ? +(0, d.
					default)(".inputFallTo").find("input")[0].value : 0;
						var o = {
							market: e.market,
							code: e.code,
							name: e.name,
							conds: n
						};
						return c.
					default.setStockBell(o), t(o), !1
					}
				}
			},
			getInitialState: function() {
				var e = this.props.stock,
					t = e.market,
					a = e.code,
					i = this.props.conds;
				return {
					stock: e,
					conf: h.
				default.getWarnConf(t, a) || m.
				default.WarnConf,
					riseTo:
					i && i.pGe || 0,
					fallTo: i && i.pLe || 0,
					openPersent: i && i.ppGe || 0
				}
			},
			componentDidMount: function() {
				var e = this.props.conds;
				e && e.ppGe && (0, d.
			default)("input#openPersent").prop("checked", !0), e && e.pGe && (0, d.
			default)("input#riseTo").prop("checked", !0), e && e.pLe && (0, d.
			default)("input#fallTo").prop("checked", !0)
			},
			_getDefaultVal: function(e, t) {
				var a = this.state,
					i = a.stock,
					l = a.conf;
				switch (e) {
				case "riseTo":
					return (i.closeprice.num * (1 + l.openPersent.num / 100)).toFixed(2);
				case "fallTo":
					return (i.closeprice.num * (1 - l.openPersent.num / 100)).toFixed(2);
				default:
					return t
				}
			},
			_reset: function() {
				for (var e, t, a = m.
			default.WarnConf, i = ["openPersent", "riseTo", "fallTo", "min5Persent", "handOver", "singleVolume"], l = 0, n = i.length; l < n; ++l) e = i[l], t = this.refs[e], t && (t = (0, d.
			default)(t.getDOMNode()), t.find("#" + e)[0].checked = a[e].work, t.find('input[type="text"]').val(this._getDefaultVal(e, a[e].num)));
				t = (0, d.
			default)(this.refs.frequency.getDOMNode()), "daily" == a.freqType ? (t.find("#warn-freq-once")[0].checked = !1, t.find("#warn-freq-daily")[0].checked = !0) : (t.find("#warn-freq-once")[0].checked = !0, t.find("#warn-freq-daily")[0].checked = !1)
			},
			_renderCheckbox: function(e, t, a) {
				return n.
			default.createElement("div", null, a ? n.
			default.createElement("input", {
					type: "checkbox",
					id: e
				}):
				n.
			default.createElement("input", {
					type: "checkbox",
					id: e
				}), n.
			default.createElement("label", {
					htmlFor: e
				}, t))
			},
			_renderWarnFreq: function(e) {
				return "daily" == e ? n.
			default.createElement("li", {
					key: "frequency",
					ref: "frequency"
				}, n.
			default.createElement("div", null, n.
			default.createElement("input", {
					type: "radio",
					name: "warn-freq",
					id: "warn-freq-once"
				}), n.
			default.createElement("label", {
					htmlFor: "warn-freq-once"
				}, "只提醒一次")), n.
			default.createElement("div", null, n.
			default.createElement("input", {
					type: "radio",
					name: "warn-freq",
					id: "warn-freq-daily",
					defaultChecked: "true"
				}), n.
			default.createElement("label", {
					htmlFor: "warn-freq-daily"
				}, "每天提醒一次"))):
				n.
			default.createElement("li", {
					key: "frequency",
					ref: "frequency"
				}, n.
			default.createElement("div", null, n.
			default.createElement("input", {
					type: "radio",
					name: "warn-freq",
					id: "warn-freq-once",
					defaultChecked: "true"
				}), n.
			default.createElement("label", {
					htmlFor: "warn-freq-once"
				}, "只提醒一次")), n.
			default.createElement("div", null, n.
			default.createElement("input", {
					type: "radio",
					name: "warn-freq",
					id: "warn-freq-daily"
				}), n.
			default.createElement("label", {
					htmlFor: "warn-freq-daily"
				}, "每天提醒一次")))
			},
			clean: function() {
				(0, d.
			default)(".StockWarn input.inputText").map(function(e, t) {
					t.value = 0
				}), (0, d.
			default)("input#openPersent").prop("checked", !0), (0, d.
			default)("input#riseTo").prop("checked", !0), (0, d.
			default)("input#fallTo").prop("checked", !0), this.setState({
					riseTo: 0,
					fallTo: 0,
					openPersent: 0
				})
			},
			render: function() {
				var e = this.state,
					t = e.stock,
					a = e.conf,
					i = t.now.display && ("" + t.now.display).split("."),
					l = 2;
				return i.length > 1 && (l = i[1].length), n.
			default.createElement("div", {
					className: "StockWarn",
					ref: "StockWarn"
				}, n.
			default.createElement("div", {
					className: "header"
				}, n.
			default.createElement("span", {
					className: "name"
				}, t.name), n.
			default.createElement("span", {
					className: "code"
				}, t.code), n.
			default.createElement("span", {
					className: "now"
				}, t.now.display), n.
			default.createElement("span", {
					className: "risepercent " + (0, o.getColor)("risepercent", t)
				}, t.risepercent.display), n.
			default.createElement("span", {
					className: "clean"
				}, n.
			default.createElement("span", {
					className: "content",
					onClick: this.clean
				}, "清空"))), n.
			default.createElement("ul", {
					className: "warn-info"
				}, n.
			default.createElement("li", {
					key: "openPersent",
					ref: "openPersent"
				}, this._renderCheckbox("openPersent", "开盘后涨跌幅超过", a.openPersent.work), n.
			default.createElement("div", {
					className: "inputOpenPersent"
				}, n.
			default.createElement(r.FloatInput, {
					defaultValue: this.state.openPersent,
					prec: "2"
				}), " %", " ")), n.
			default.createElement("li", {
					key: "riseTo",
					ref: "riseTo"
				}, this._renderCheckbox("riseTo", t.isIndex ? "股指上涨到" : "股价上涨到", a.riseTo.work), n.
			default.createElement("div", {
					className: "inputRiseTo"
				}, n.
			default.createElement(r.FloatInput, {
					defaultValue: this.state.riseTo,
					prec: "" + l
				}), t.isIndex ? " 点":
				" 元")), n.
			default.createElement("li", {
					key: "fallTo",
					ref: "fallTo"
				}, this._renderCheckbox("fallTo", t.isIndex ? "股指下跌到" : "股价下跌到", a.fallTo.work), n.
			default.createElement("div", {
					className: "inputFallTo"
				}, n.
			default.createElement(r.FloatInput, {
					defaultValue: this.state.fallTo,
					prec: "" + l
				}), t.isIndex ? " 点":
				" 元"))))
			}
		});
	t.
default = k, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(48),
		r = i(o),
		s = a(33),
		c = (i(s), a(31)),
		u = i(c),
		d = n.
	default.createClass({
			displayName: "StockBriefSet",
			getInitialState: function() {
				var e = this.props.stockType,
					t = u.
				default.getStockBriefList(e) || this.getDefaultBriefList(e);
				return {
					stockType: e,
					index: t
				}
			},
			componentDidMount: function() {},
			getDefaultBriefList: function(e) {
				var t = [{
					title: "open",
					label: "今开",
					hide: !1
				}, {
					title: "close",
					label: "昨收",
					hide: !1
				}, {
					title: "high",
					label: "最高",
					hide: !1
				}, {
					title: "low",
					label: "最低",
					hide: !1
				}, {
					title: "volume",
					label: "成交量",
					hide: !1
				}, {
					title: "amount",
					label: "成交额",
					hide: !1
				}, {
					title: "handover",
					label: "换手",
					hide: !1
				}, {
					title: "amplitude",
					label: "振幅",
					hide: !1
				}, {
					title: "total_capital",
					label: "总股本",
					hide: !1
				}, {
					title: "share_capital",
					label: "流通股",
					hide: !1
				}, {
					title: "total_value",
					label: "总市值",
					hide: !1
				}, {
					title: "share_value",
					label: "流通值",
					hide: !1
				}, {
					title: "pe",
					label: "市盈",
					hide: !1
				}, {
					title: "income",
					label: "收益",
					hide: !1
				}, {
					title: "in",
					label: "内盘",
					hide: !1
				}, {
					title: "out",
					label: "外盘",
					hide: !1
				}, {
					title: "cittthan",
					label: "委比",
					hide: !1
				}, {
					title: "cittdiff",
					label: "委差",
					hide: !1
				}];
				return "plate" == e ? t = [{
					title: "open",
					label: "今开",
					hide: !1
				}, {
					title: "close",
					label: "昨收",
					hide: !1
				}, {
					title: "high",
					label: "最高",
					hide: !1
				}, {
					title: "low",
					label: "最低",
					hide: !1
				}, {
					title: "volume",
					label: "成交量",
					hide: !1
				}, {
					title: "amount",
					label: "成交额",
					hide: !1
				}, {
					title: "handover",
					label: "换手",
					hide: !1
				}, {
					title: "amplitude",
					label: "振幅",
					hide: !1
				}, {
					title: "speed",
					label: "涨速",
					hide: !1
				}, {
					title: "volrate",
					label: "量比",
					hide: !1
				}, {
					title: "fiveday",
					label: "5日涨跌",
					hide: !1
				}, {
					title: "average",
					label: "平均价",
					hide: !1
				}, {
					title: "total_value",
					label: "总市值",
					hide: !1
				}, {
					title: "total_share",
					label: "总流通",
					hide: !1
				}, {
					title: "risenum",
					label: "上涨",
					hide: !1
				}, {
					title: "fallnum",
					label: "下跌",
					hide: !1
				}] : "index" == e && (t = [{
					title: "open",
					label: "今开",
					hide: !1
				}, {
					title: "close",
					label: "昨收",
					hide: !1
				}, {
					title: "high",
					label: "最高",
					hide: !1
				}, {
					title: "low",
					label: "最低",
					hide: !1
				}, {
					title: "volume",
					label: "成交量",
					hide: !1
				}, {
					title: "amount",
					label: "成交额",
					hide: !1
				}, {
					title: "handover",
					label: "换手",
					hide: !1
				}, {
					title: "amplitude",
					label: "振幅",
					hide: !1
				}, {
					title: "in",
					label: "内盘",
					hide: !1
				}, {
					title: "out",
					label: "外盘",
					hide: !1
				}, {
					title: "risenum",
					label: "上涨",
					hide: !1
				}, {
					title: "pe",
					label: "市盈",
					hide: !1
				}, {
					title: "fallnum",
					label: "下跌",
					hide: !1
				}, {
					title: "equal",
					label: "平盘",
					hide: !1
				}]), t
			},
			reset: function() {
				var e = this.props.stockType;
				this.setState({
					index: this.getDefaultBriefList(e)
				})
			},
			render: function() {
				var e = this.state;
				return n.
			default.createElement("div", {
					className: "StockBriefSet",
					ref: "StockBriefSet"
				}, n.
			default.createElement(r.
			default, {
					list: e.index
				}))
			}
		});
	t.
default = d, e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(29),
		n = (i(l), a(6)),
		o = a(15),
		r = i(o),
		s = a(69),
		c = i(s),
		u = a(16),
		d = a(26),
		p = (i(d), a(30), a(51)),
		h = i(p),
		f = a(17),
		m = i(f),
		k = a(19),
		g = i(k),
		S = a(2),
		b = (i(S), a(11)),
		v = i(b),
		y = a(3),
		x = i(y),
		w = a(70),
		E = i(w),
		I = x.
	default.stockWatcherDefaultItems,
		T = r.
	default.createClass({
			displayName: "StockWatcher",
			getInitialState: function() {
				var e;
				try {
					var t = g.
				default.getItem(x.
				default.PluginId, "StockWatchers");
					e = t ? JSON.parse(t):
					I
				} catch (t) {
					e = I
				}
				return {
					stocks: c.
				default.fromJS(e)
				}
			},
			componentDidMount: function() {
				var e = this;
				this._shortcut_f3 = m.
			default.reg("f3", function() {
					e.openStock(I[0])
				}), this._shortcut_f4 = m.
			default.reg("f4", function() {
					e.openStock(I[1])
				})
			},
			componentWillUnmount: function() {
				m.
			default.cancel("f3", this._shortcut_f3), m.
			default.cancel("f4", this._shortcut_f4)
			},
			openStock: function(e) {
				var t, a = e.market,
					i = e.code,
					l = e.name;
				v.
			default.isMyStock(a, i, function(e) {
					t = e
				}), v.
			default.openDetail(a, i, l, t, "QuoteList")
			},
			openEditor: function(e, t) {
				var a = this;
				this.editor && this.closeEditor();
				var i = u.Utils.getTMPDOMRoot(!0, "StockQuote-StockWatchEditor-Mask");
				i.addEventListener("click", this.closeEditor), i.addEventListener("contextmenu", this.closeEditor), this.$mask = i, this.editor = u.Popup.show({
					className: "StockQuote-StockWatchEditor-Popup",
					maskClassName: "StockQuote-StockWatchEditor-Root",
					content: r.
				default.createElement(E.
				default, {
						slotId: e,
						currentStock: this.state.stocks.get(e),
						changeStock: this.changeStock
					}),
					title:
					"指数切换",
					modal: !1,
					style: {
						left: t.left
					},
					animated: !1,
					buttons: null,
					popupClosing: function() {
						return setTimeout(function() {
							a.closeEditor()
						}, 0), !0
					}
				})
			},
			changeStock: function(e, t) {
				this.closeEditor();
				var a = this.state.stocks.set(e, c.
			default.Map(t));
				this.setState({
					stocks: a
				}), g.
			default.setItem(x.
			default.PluginId, "StockWatchers", JSON.stringify(a.toJS()))
			},
			closeEditor: function() {
				if (!this.editor) return !1;
				var e = this.$mask;
				return e.removeEventListener("click", this.closeEditor), e.removeEventListener("contextmenu", this.closeEditor), e.parentNode.removeChild(e), this.editor.destroy(), this.$mask = null, this.editor = null, !0
			},
			render: function() {
				var e = this;
				return r.
			default.createElement("div", {
					className: "StockQuote-StockWatcher"
				}, r.
			default.createElement("div", {
					className: "outer"
				}, this.state.stocks.toJSON().map(function(t, a) {
					var i = t.market,
						l = t.code,
						n = t.name;
					return r.
				default.createElement(M, {
						key: a,
						show: !0,
						slotId: a,
						openEditor: e.openEditor,
						market: i,
						code: l,
						name: n
					})
				})))
			}
		}),
		M = r.
	default.createClass({
			displayName: "StockWatcherItem",
			mixins: [h.
		default],
			onClick: function() {
				var e, t = this.props,
					a = t.market,
					i = t.code,
					l = t.name;
				v.
			default.isMyStock(a, i, function(t) {
					e = t
				}), v.
			default.openDetail(a, i, l, e, "QuoteList")
			},
			onContextMenu: function() {
				this.props.openEditor(this.props.slotId, this.getDOMNode().getBoundingClientRect())
			},
			render: function() {
				var e, t = "even";
				if (this.state.stock) {
					var a = this.state.stock.rise.num;
					t = a > 0 ? "rise" : 0 == a ? "even" : "fall", "rise" == t ? e = "up_arrow" : "fall" == t && (e = "down_arrow")
				}
				var i = [];
				return this.state.stock ? (i.push(r.
			default.createElement("span", {
					key: "now",
					className: "now"
				}, this.state.stock.now.display)), e && i.push((0, n.getIcon)(e)), i.push(r.
			default.createElement("span", {
					key: "rise",
					className: "rise"
				}, this.state.stock.rise.display)), i.push(r.
			default.createElement("span", {
					key: "risepercent",
					className: "risepercent"
				}, this.state.stock.risepercent.display)), i.push(r.
			default.createElement("span", {
					key: "volume",
					className: "volume"
				}, this.state.stock.amount.display))) : i.push(r.
			default.createElement("span", {
					key: "null",
					className: "null"
				}, "-")), r.
			default.createElement("div", {
					hidden: this.props.show ? "" : "hidden",
					onClick: this.onClick,
					onContextMenu: this.onContextMenu,
					className: "StockQuote-StockWatcherItem " + t
				}, r.
			default.createElement("span", {
					className: "name"
				}, this.props.name), i)
			}
		});
	t.
default = T, e.exports = t.
default
}, function(e, t) {
	e.exports = require("hippo/lib/immutable")
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(15),
		n = i(l),
		o = a(4),
		r = (i(o), a(3));
	t.
default = n.
default.createClass({
		displayName: "StockWatchEditor",
		componentDidMount: function() {},
		setStock: function(e) {
			this.props.changeStock(this.props.slotId, e)
		},
		render: function() {
			var e = this,
				t = this.props.currentStock,
				a = t.get("market"),
				i = t.get("code"),
				l = r.editorIndexes.filter(function(e) {
					return !(e.market == a && e.code == i) && "399300" != e.code
				}),
				o = l.map(function(t) {
					return n.
				default.createElement("li", {
						onClick: function() {
							return e.setStock(t)
						}
					}, t.name)
				});
			return n.
		default.createElement("div", {
				className: "StockQuote-StockWatchEditor"
			}, n.
		default.createElement("ul", null, o))
		}
	}), e.exports = t.
default
}, function(e, t, a) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = a(11),
		n = i(l),
		o = window.require("hippo/lib/jquery"),
		r = window.require("hippo/lib/react"),
		s = window.require("hippo/CodeList"),
		c = window.require("hippo/components/Mask"),
		u = (window.require("hippo/utils"), window.require("hippo/components/KeyWizard")),
		d = window.require("hippo/AppDispatcher"),
		p = r.createClass({
			displayName: "StockSearch",
			getInitialState: function() {
				return {
					list: [],
					value: ""
				}
			},
			onSearch: function(e) {
				var t, a = e.target.value.trim();
				if (a) {
					var i = s.find(a);
					t = i.length ? {
						show: !0,
						list: i.slice(0, 8)
					} : {
						show: !1
					}
				} else t = {
					show: !1
				};
				t.value = a, this.setState(t)
			},
			componentDidMount: function() {
				var e = this;
				window.addEventListener("keydown", this.onKeyDown), this.dispatchId = d.register(function(t) {
					var a = t.action;
					switch (a.type) {
					case "CLOSE_KEYWIZARD":
						e.closeKeyWizard()
					}
				})
			},
			componentWillUnmount: function() {
				window.removeEventListener("keydown", this.onKeyDown), d.unregister(this.dispatchId)
			},
			onKeyDown: function(e) {
				if ((!("input" == document.activeElement.nodeName.toLowerCase() || "textarea" == document.activeElement.nodeName.toLowerCase() || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) || "WidgetContainer" == e.target.getAttribute("class") || "KeyWizardStockNumInput" == e.target.getAttribute("class")) && 0 == o(".purchase-popup.OpenFundPopup").length) {
					var t = e.keyCode || e.charCode;
					(t >= 65 && t <= 90 || t >= 48 && t <= 57 || t >= 96 && t <= 105) && this.showKeyWizard(), 27 == t && this.closeKeyWizard()
				}
			},
			componentDidUpdate: function(e, t) {
				var a = this;
				!t.show && this.state.show ? c.show(function() {
					a.hideSearchList()
				}) : t.show && !this.state.show && c.hide()
			},
			hideSearchList: function() {
				this.setState({
					show: !1,
					value: ""
				})
			},
			openDetail: function(e) {
				e.stopPropagation();
				var t = o(e.currentTarget);
				n.
			default.openDetail(t.data("market"), String(t.data("code"))), this.setState({
					show: !1,
					value: ""
				})
			},
			openStockDetail: function(e) {
				if (e) {
					var t;
					n.
				default.isMyStock(e.market, e.code, function(e) {
						t = e
					}), n.
				default.openDetail(e.market, e.code, e.name, t, "QuoteList"), this.closeKeyWizard()
				}
			},
			showKeyWizard: function() {
				if (!this.keydemo) {
					var e = o("#main").clientWidth || parseInt(o("#main").css("width"));
					this.keydemo = u.show({
						position: {
							right: e - o(".StockQuote-StockSearch .ico-search").offset().left - 7,
							bottom: 33
						},
						getNum: this.openStockDetail,
						type: "STOCKSEARCH",
						closeKeyWizard: this.closeKeyWizard,
						direction: "UP"
					}), window.addEventListener("click", this.closeKeyWizard), d.handleViewAction({
						type: "CLOSE_CONNECTION_PANEL"
					}), d.handleViewAction({
						type: "CLOSE_USER_LAYER"
					})
				}
			},
			closeKeyWizard: function(e) {
				!this.keydemo || e && e.target == this.refs.keyWizardBtn.getDOMNode() || (this.keydemo.close(), this.keydemo = null, window.removeEventListener("click", this.closeKeyWizard))
			},
			render: function() {
				return r.createElement("div", {
					className: "StockQuote-StockSearch"
				}, r.createElement("i", {
					className: "ico-search",
					ref: "keyWizardBtn",
					onClick: this.showKeyWizard
				}))
			}
		});
	r.createClass({
		displayName: "StockSearchList",
		onMouseDown: function(e) {
			e.preventDefault()
		},
		render: function() {
			var e = this;
			return r.createElement("div", {
				className: "StockQuote-StockSearchList StatusBar-Panel",
				onMouseDown: this.onMouseDown
			}, r.createElement("ul", null, this.props.list.map(function(t) {
				return r.createElement("li", {
					key: t.market + ":" + t.code,
					onClick: e.props.openDetail,
					"data-market": t.market,
					"data-code": t.code
				}, r.createElement("span", {
					className: "code",
					title: t.code
				}, t.code), r.createElement("span", {
					className: "name",
					title: t.name
				}, t.name), r.createElement("span", {
					className: "board",
					title: t.name
				}, t.board))
			})))
		}
	});
	t.
default = p, e.exports = t.
default
}, function(e, t, a) {
	var i = a(73);
	"string" == typeof i && (i = [
		[e.id, i, ""]
	]);
	a(82)(i, {});
	i.locals && (e.exports = i.locals)
}, function(e, t, a) {
	t = e.exports = a(74)(), t.push([e.id, ".StockQuote .StockIndex{height:100%}.StockQuote .Tabs-Content>iframe.IframeOpener{width:100%;height:100%;border:none}.D3Pie{overflow:hidden;width:300px;margin:0 auto}.D3Pie .StockPieD3{text-align:center;font-size:11px;float:left}.D3Pie .D3Info{width:100px;height:200px;float:left;font-size:11px;box-sizing:border-box;padding-top:30px}.D3Pie .D3Info ul{list-style:none}.D3Pie .D3Info ul li{margin-bottom:10px}.D3Pie .D3Info .binflowrate .D3Spot{background-color:#ff3d43}.D3Pie .D3Info .minflowrate .D3Spot{background-color:#d6242a}.D3Pie .D3Info .sinflowrate .D3Spot{background-color:#b4131a}.D3Pie .D3Info .boutflowrate .D3Spot{background-color:#6ab748}.D3Pie .D3Info .moutflowrate .D3Spot{background-color:#449727}.D3Pie .D3Info .soutflowrate .D3Spot{background-color:#35781c}.D3Pie .D3Info .binflowrate .cashFlowPercent,.D3Pie .D3Info .minflowrate .cashFlowPercent,.D3Pie .D3Info .sinflowrate .cashFlowPercent{color:#ff3c23}.D3Pie .D3Info .boutflowrate .cashFlowPercent,.D3Pie .D3Info .moutflowrate .cashFlowPercent,.D3Pie .D3Info .soutflowrate .cashFlowPercent{color:#3ebd3b}.D3Pie .D3Info .D3Spot{margin-right:5px;height:10px;width:10px;border-radius:50%;display:inline-block}.D3Pie .D3Info .cashFlowName{margin-right:5px}.StockDetailOuter{position:relative;height:100%}.StockDetailOuter .StockNews-NewsDetail{position:absolute;top:0;right:0;width:500px;height:100%}.StockDetail,.StockDetailPanel{height:100%}.StockDetail h1,.StockDetailPanel h1{font-size:1.4em;height:50%}.StockDetail h2,.StockDetailPanel h2{font-size:1.2em;margin-top:6px;height:50%}.StockDetail .left,.StockDetailPanel .left{margin-right:300px;height:100%;float:none}.StockDetail .left .top,.StockDetailPanel .left .top{height:110px}.StockDetail .left .bottom,.StockDetailPanel .left .bottom{position:relative;height:calc(100% - 110px)}.StockDetail .left .StockGraph,.StockDetailPanel .left .StockGraph{margin-right:240px}.StockDetail .left .StockGraph.index,.StockDetailPanel .left .StockGraph.index{margin-right:0}.StockDetail .right,.StockDetailPanel .right{position:absolute;top:0;right:0;height:100%;overflow:hidden;-webkit-transform-origin:100%;transform-origin:100%}.StockDetail .handicap,.StockDetailPanel .handicap{width:239px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:absolute;top:0;right:0}.StockDetail-hide-right .left{margin-right:0}.StockDetail-hide-right .right{display:none}.StockDetailPanel .top{height:10em}.StockDetailPanel .bottom{height:calc(100% - 10em)}.StockQuote-StockBrief{font-size:14px;box-sizing:border-box;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;height:calc(100% - 40px)}.StockQuote-StockBrief .stock_info{min-width:11em;padding-top:8px}.StockQuote-StockBrief .stock_info .s_top{font-size:22px}.StockQuote-StockBrief .stock_info .s_left{float:left;width:50%}.StockQuote-StockBrief .stock_info .s_right{float:right;width:50%}.StockQuote-StockBrief .stock_info .s_left,.StockQuote-StockBrief .stock_info .s_right,.StockQuote-StockBrief .stock_info .s_top{height:1.5em;line-height:1.5em}.StockQuote-StockBrief .stock_info.stop h3{margin-top:1.2em}.StockQuote-StockBrief .stock_detail{overflow:hidden;padding-top:8px}.StockQuote-StockBrief .stock_detail table{table-layout:fixed}.StockQuote-StockBrief .stock_detail table tr{height:2em;white-space:nowrap}.StockQuote-StockBrief .stock_detail table td{padding:0 .2em;min-width:7.8em;text-align:left}.StockQuote-StockBrief .stock_detail table td>span:first-child{display:inline-block;text-align:right;width:4em}.StockQuote-StockBrief .stock_detail table td>span.wider{width:5em}.StockBriefShort{height:100%;box-sizing:border-box;text-align:center}.StockBriefShort .stock_toolbar{color:silver;height:3em;line-height:3em;overflow:hidden;border-bottom:1px solid #383953}.StockBriefShort .stock_toolbar>hgroup{min-width:10em}.StockBriefShort .stock_toolbar>hgroup h1,.StockBriefShort .stock_toolbar>hgroup h2{float:left;margin:0 10px}.StockBriefShort .stock_toolbar .btn_group{float:right;padding:0 10px;border-right:1px solid #383953}.StockBriefShort .stock_toolbar .btn_group a{margin:0 10px;color:#599afc}.StockBriefShort .stock_toolbar .btn_group i.ico{cursor:pointer;width:20px;height:20px;margin:0 10px}.StockBriefShort .stock_toolbar .btn_group i.star{background-image:url(" + a(75) + ")}.StockBriefShort .stock_toolbar .btn_group i.share{background-image:url(" + a(76) + ")}.StockBriefShort .stock_status{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;overflow:hidden}.StockBriefShort .stock_info{box-sizing:border-box;min-width:8em}.StockBriefShort .stock_info .s_top{margin-top:1em}.StockBriefShort .stock_info .s_left{float:left;width:50%}.StockBriefShort .stock_info .s_right{float:right;width:50%}.StockBriefShort .stock_info .s_left,.StockBriefShort .stock_info .s_right,.StockBriefShort .stock_info .s_top{height:1.5em;line-height:1.5em}.StockBriefShort .stock_info.stop h3{margin-top:2.4em}.StockBriefShort .stock_detail{min-width:46em;max-width:46em;margin-left:1em}.StockBriefShort .stock_detail>div{float:left;display:inline-block;min-width:10em;height:1.5em;line-height:1.5em}.StockBriefShort .stock_detail li{float:left;list-style:none;height:1.5em;line-height:1.5em;padding:0 .3em;width:8.5em;text-align:left}.StockBriefShort .stock_detail li span{color:#fff}.StockBriefShort .stock_detail li .label{color:silver;display:inline-block;width:4em;text-align:right}.StockTick table{table-layout:fixed;border-collapse:collapse;border-spacing:0;width:100%;text-align:center}.StockTick table tr{height:30px}.StockTick h3,.StockTick thead th{height:36px;padding-left:6px;font-size:13px}.StockTick td,.StockTick th{box-sizing:border-box}.StockTick td:first-child,.StockTick th:first-child{padding-left:20px;text-align:left}.StockTick td:last-child,.StockTick th:last-child{padding-right:20px;text-align:right}.StockTick table.two-way td{width:50%}.StockTick table.three-way{font-size:13px}.StockTick table.three-way td{width:25%;white-space:nowrap}.StockTick table.three-way .duel-price{width:15%}.StockTickFive .top-panel hr{height:1px;border:none}.StockTickFive .tick-buy{border:none}.StockTickFive table.three-way{font-size:13px;font-weight:700}.StockTickFive table.three-way td{width:25%;white-space:nowrap}.StockTickFive table.three-way td span.buysell1{font-size:16px}.StockDetail .StockTickFive{min-height:338px}.StockTickDuel{position:relative;-ms-flex:1;flex:1;overflow:hidden;height:100%}.StockTickDuel .StockTickData{position:absolute;top:0;left:0;width:100%;overflow:hidden;height:100%}.StockTickDuel .mark{margin:0 4px}.StockTickDuelAll{height:100%;width:100%}.StockTickDuelAll .header{height:40px;line-height:40px;position:relative;z-index:1}.StockTickDuelAll .header .label{padding-left:20px}.StockTickDuelAll .header span{display:inline-block;text-indent:15px}.StockTickDuelAll .header span:first-child{font-size:16px}.StockTickDuelAll .hk:after{content:'';display:inline-block;vertical-align:middle;margin-left:2px;width:18px;height:13px;background:url(" + a(77) + ") no-repeat 50%;background-size:cover;vertical-align:-2px}.StockTickDuelAll .StockTickDataAll{height:100%;box-sizing:border-box;padding-top:41px;top:-41px;position:relative;white-space:nowrap;overflow:hidden}.StockTickDuelColomn{display:inline-block;overflow:hidden;width:258px;height:100%}.StockTickDuelColomn tr{text-align:right}.StockTickDuelColomn td:first-child{width:32%}.StockTickDuelColomn .duel-price{width:25%}.StockGraph{-ms-flex:1;flex:1;height:100%}.StockGraph>.tabs .TabBarItem.active{height:34px;line-height:36px}.StockGraph .StockKline,.StockGraph .StockTimeSeries{height:100%;width:100%;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.StockGraph .StockKline .klineGraph,.StockGraph .StockTimeSeries .klineGraph{width:100%;-ms-flex:1;flex:1}.StockGraph .StockKline .TimeSeriesGraph,.StockGraph .StockTimeSeries .TimeSeriesGraph{width:100%;height:100%}.StockGraph .StockKline .toolBars,.StockGraph .StockTimeSeries .toolBars{height:30px;line-height:30px;font-size:12px}.StockGraph .StockKline .indexBtns,.StockGraph .StockTimeSeries .indexBtns{float:left}.StockGraph .StockKline .indexBtns span,.StockGraph .StockTimeSeries .indexBtns span{padding:5px 10px}.StockGraph .StockKline .indexBtns span:hover,.StockGraph .StockTimeSeries .indexBtns span:hover{cursor:pointer}.StockGraph .StockKline .indexBtns span.showMenu,.StockGraph .StockTimeSeries .indexBtns span.showMenu{margin-left:5px;margin-right:5px;text-align:center}.StockGraph .StockKline .rightBtns,.StockGraph .StockTimeSeries .rightBtns{float:right}.StockGraph .StockKline .rightBtns span,.StockGraph .StockTimeSeries .rightBtns span{border-radius:2px;padding:1px;margin-right:10px}.StockGraph .StockKline .rightBtns span:hover,.StockGraph .StockTimeSeries .rightBtns span:hover{cursor:pointer}.StockGraph .StockKline .MAConfig,.StockGraph .StockTimeSeries .MAConfig{position:absolute;left:20px;top:7px;width:15px;height:15px}.StockGraph .StockKline .MAConfig svg,.StockGraph .StockTimeSeries .MAConfig svg{width:100%;height:100%}.StockGraph .StockKline .statisModal,.StockGraph .StockTimeSeries .statisModal{position:absolute;right:50px;top:20px}.StockGraph.Light-Rect .MAConfig svg{fill:#34659b}div.StockQuote-StockSearch{position:relative;float:right;height:100%}div.StockQuote-StockSearch input{border:none;height:20px;box-sizing:border-box;background-color:#000;border-radius:10px;outline:none;color:#fff;padding:4px 10px;width:180px;border:1px solid transparent}div.StockQuote-StockSearch input:focus{border:1px solid #599afc;box-shadow:0 0 3px #fff}div.StockQuote-StockSearch input::-webkit-input-placeholder{color:#599afc;font-size:12px}div.StockQuote-StockSearch .ico-search{display:inline-block;vertical-align:top;width:18px;height:18px;cursor:pointer}div.StockQuote-StockSearchInput:after{content:'';display:block;position:absolute;right:4px;top:11px;width:20px;height:20px;opacity:.6;background-image:url(" + a(78) + ");transition:opacity .3s}div.StockQuote-StockSearchInput:hover:after{opacity:1}.StockQuote-StockSearchList{width:100%}.StockQuote-StockSearchList ul{list-style:none}.StockQuote-StockSearchList ul li{padding:4px;display:-ms-flexbox;display:flex}.StockQuote-StockSearchList ul li span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.StockQuote-StockSearchList ul li.on,.StockQuote-StockSearchList ul li:hover{color:#fff;background-color:#434b5d}.StockQuote-StockSearchList ul span{display:inline-block}.StockQuote-StockSearchList .code{width:4em}.StockQuote-StockSearchList .name{-ms-flex:1;flex:1}.StockQuote-StockSearchList .board{width:4em;text-align:right}.StockQuote-StockWatcher{position:relative;height:40px;-ms-flex:1;flex:1;overflow:hidden}.StockQuote-StockWatcher .outer{clear:both;height:40px;position:absolute;left:0;top:0;overflow:hidden;white-space:nowrap}.StockQuote-StockWatcher .StockQuote-StockWatcherItem{cursor:pointer;display:inline-block;padding:0 6px;min-width:18em;height:24px;line-height:24px;margin:8px 0 8px 1px;font-size:13px;position:relative}.StockQuote-StockWatcher .StockQuote-StockWatcherItem:after{position:absolute;width:1px;height:16px;left:-1px;top:4px;content:''}.StockQuote-StockWatcher .StockQuote-StockWatcherItem span{margin:0 4px}.StockQuote-StockWatcher .StockQuote-StockWatcherItem span.name{text-align:center}.StockQuote-StockWatcher .StockQuote-StockWatcherItem:first-child{padding-left:6px}.StockQuote-StockWatcher .StockQuote-StockWatcherItem:first-child:after{display:none}.StockQuote-StockWatcher svg.icon{display:inline-block;width:14px;height:14px;margin-left:6px;background-repeat:no-repeat;background-position:50%;vertical-align:-2px}.TMPDOMRoot.StockQuote-StockWatchEditor-Root{top:auto;bottom:0}.TMPDOMRoot.StockQuote-StockWatchEditor-Root .StockQuote-StockWatchEditor-Popup{width:300px;height:356px;position:absolute;bottom:40px}.TMPDOMRoot.StockQuote-StockWatchEditor-Root .StockQuote-StockWatchEditor-Popup .Content{background-color:#ece9fa}.TMPDOMRoot.StockQuote-StockWatchEditor-Root .StockQuote-StockWatchEditor{padding:10px}.TMPDOMRoot.StockQuote-StockWatchEditor-Root .StockQuote-StockWatchEditor ul li{cursor:default;display:inline-block;box-sizing:border-box;padding:5px;margin:7px 1%;width:31%;text-align:center}.TMPDOMRoot.StockQuote-StockWatchEditor-Root .StockQuote-StockWatchEditor ul li:hover{color:#fff;background-color:#599afc}.TMPDOMRoot.StockQuote-StockWatchEditor-Mask{background-color:transparent}.StockQuote-StockBriefHeader{width:100%;height:40px;line-height:40px;display:table;font-size:14px}.StockQuote-StockBriefHeader .head-info{display:-ms-flexbox;display:flex;float:left}.StockQuote-StockBriefHeader .arrow{cursor:pointer;height:0;margin:13px 20px;border-style:solid}.StockQuote-StockBriefHeader .arrow.prev{border-width:6px 6px 6px 0}.StockQuote-StockBriefHeader .arrow.next{border-width:6px 0 6px 6px}.StockQuote-StockBriefHeader .arrow.disable{border-color:transparent #7a7a7a;cursor:auto}.StockQuote-StockBriefHeader hgroup{height:40px}.StockQuote-StockBriefHeader hgroup .name{padding-right:14px}.StockQuote-StockBriefHeader hgroup .credit_risk_label{color:#d7a530;padding-right:14px}.StockQuote-StockBriefHeader hgroup.stock .name{font-size:16px}.StockQuote-StockBriefHeader hgroup.stock .hk:after{content:'';display:inline-block;vertical-align:middle;margin-left:2px;width:18px;height:13px;background:url(" + a(77) + ") no-repeat 50%;background-size:cover;vertical-align:-2px}.StockQuote-StockBriefHeader hgroup .indicator{display:inline-block;height:12px;width:12px;margin:0 10px}.StockQuote-StockBriefHeader .head-toolbar{height:40px;display:-ms-flexbox;display:flex;float:right}.StockQuote-StockBriefHeader .head-toolbar .text-list .buy,.StockQuote-StockBriefHeader .head-toolbar .text-list .f10,.StockQuote-StockBriefHeader .head-toolbar .text-list .sell{font-size:13px;font-style:normal;padding:3px 8px;margin-right:20px;border-radius:2px;cursor:pointer}.StockQuote-StockBriefHeader .head-toolbar .f10-wrap{margin-right:20px}.StockQuote-StockBriefHeader .head-toolbar .f10-wrap .f10{margin-right:0}.StockQuote-StockBriefHeader .head-toolbar i.bell,.StockQuote-StockBriefHeader .head-toolbar i.stock-star{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer}.StockQuote-StockBriefHeader .head-toolbar i.bell svg,.StockQuote-StockBriefHeader .head-toolbar i.stock-star svg{margin:auto;stroke-width:2px}.StockQuote-StockBriefHeader .head-toolbar i.bell svg{width:79%!important;height:79%!important}.StockQuote-StockBriefHeader .head-toolbar i.stock-star svg{width:87%;height:87%;cursor:pointer}.StockQuote-StockBriefHeader .head-toolbar .ico{width:24px;height:24px}.StockQuote-StockBriefHeader .head-toolbar .ico.sep{width:1px;margin:0 10px;height:20px}.StockQuote-StockBriefHeader .head-toolbar .ico-arrow,.StockQuote-StockBriefHeader .head-toolbar .ico.openSettings{text-align:center;cursor:pointer}.StockQuote-StockBriefHeader .head-toolbar .ico-arrow:after,.StockQuote-StockBriefHeader .head-toolbar .ico.openSettings:after{display:inline-block;content:'';vertical-align:top;margin:4px 0 0}.StockQuote-DetailRight{height:100%;width:300px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.StockQuote-DetailRight .StockNews-NewsList{-ms-flex:1;flex:1;padding-top:4px}.StockQuote-DetailRight .StockNews-NewsList .Scrollbar{opacity:0}.StockQuote-DetailRight .StockNews-NewsList:hover .Scrollbar{opacity:1}.StockQuote-DetailRight .MyStock-TimeSeriesWrap{height:220px}.StockQuote-DetailRight .MyStock-TimeSeriesWrap.noTimeSeries{height:auto}.StockQuote-DetailRight .StockPie{margin:0 auto;border-bottom:1px solid #000}.StockQuote-DetailRight .plateAside-table{height:100%;position:relative}.StockQuote-PlateAside{-ms-flex:1;flex:1;outline:none}.StockQuote-PlateAside .MyStock-TimeSeriesWrap{-ms-flex-negative:0;flex-shrink:0}.MyStock-TimeSeriesWrap{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.MyStock-TimeSeriesWrap hgroup{height:40px;line-height:40px;padding-left:10px;position:relative;text-align:left}.MyStock-TimeSeriesWrap i{width:24px;height:24px;float:right;margin:8px 6px}.MyStock-TimeSeriesWrap i.stock-star{display:-ms-inline-flexbox;display:inline-flex;margin:9px;cursor:pointer}.MyStock-TimeSeriesWrap i.stock-star svg{width:87%;height:87%;margin:auto;stroke-width:2px}.MyStock-TimeSeriesWrap .StockTimeSeries{position:relative;box-sizing:border-box;height:100%;-ms-flex:1;flex:1}.MyStock-TimeSeriesWrap .StockTimeSeries .TimeSeriesGraph{position:absolute;top:0;left:0;right:0;bottom:0;height:100%}.MyStock-TimeSeriesWrap table{margin-top:15px}.MyStock-TimeSeriesWrap td{line-height:20px;padding:5px 0;color:#828282}.MyStock-Influx table{width:90%;margin:0 auto;font-size:13px}.MyStock-Influx .plateAside-table{margin-top:20px}.MyStock-Influx td,.MyStock-Influx th{width:25%;height:35px;line-height:25px;text-align:center}.MyStock-Influx .detailed td:first-child,.MyStock-Influx .detailed th:first-child{width:15%}.Popup.StockQuote-StockAverangeConf,.Popup.StockQuote-StockIndexSet{width:540px;height:410px}.Popup.StockQuote-StockAverangeConf table,.Popup.StockQuote-StockIndexSet table{table-layout:fixed;color:#828282;width:100%}.Popup.StockQuote-StockAverangeConf table th,.Popup.StockQuote-StockIndexSet table th{height:36px;background-color:#eee;width:25%;line-height:36px;text-align:center}.Popup.StockQuote-StockAverangeConf table td,.Popup.StockQuote-StockIndexSet table td{height:52px;line-height:52px;width:25%;text-align:center}.Popup.StockQuote-StockAverangeConf table td .linename,.Popup.StockQuote-StockIndexSet table td .linename{display:inline-block;width:40px}.Popup.StockQuote-StockAverangeConf table .IntegerInput,.Popup.StockQuote-StockIndexSet table .IntegerInput{margin-left:6px}.Popup.StockQuote-StockAverangeConf table button,.Popup.StockQuote-StockIndexSet table button{width:30px;height:30px;border-radius:4px;border:1px solid #ccc;vertical-align:middle;padding:0}.Popup.StockQuote-StockAverangeConf table button:focus,.Popup.StockQuote-StockIndexSet table button:focus{outline:none}.Popup.StockQuote-StockAverangeConf .reset,.Popup.StockQuote-StockIndexSet .reset{position:absolute;color:#599afc;bottom:-45px;left:56px;cursor:pointer}.Popup.StockQuote-StockInterStatis{width:540px;height:378px}.Popup.StockQuote-StockInterStatis ul{width:444px;border:1px solid #ddd;border-width:0 1px 1px 0}.Popup.StockQuote-StockInterStatis li{height:36px;line-height:36px;list-style:none}.Popup.StockQuote-StockInterStatis li.header{background-color:#eee}.Popup.StockQuote-StockInterStatis li>span{display:inline-block;border:1px solid #ddd;border-width:1px 0 0 1px;text-indent:12px;vertical-align:top}.Popup.StockQuote-StockInterStatis li .title{width:80px;color:#888;word-spacing:10px}.Popup.StockQuote-StockInterStatis li .data{width:140px;color:#000}.Popup.StockQuote-StockInterStatis li .data span:last-child{margin-left:10px}.Popup.StockQuote-StockInterStatis .inter-brief{margin:30px auto 0}.Popup.StockQuote-StockInterStatis .inter-info{margin:20px auto 0}.Popup.StockQuote-StockInterStatis .Footer{display:none}.Popup.StockQuote-StockIndexMng{width:650px;height:500px}.Popup.StockQuote-StockIndexMng .Content{position:relative;-ms-flex:1;flex:1;padding:0;margin-top:.5em}.Popup.StockQuote-StockIndexMng .Content .EditList{position:absolute;top:20px;bottom:0;left:20px;overflow:hidden;width:306px;border:1px solid #ccc}.Popup.StockQuote-StockIndexMng .right{overflow:hidden;position:absolute;right:20px;top:20px;bottom:0;border:1px solid #ccc;width:301px}.Popup.StockQuote-StockIndexMng .right p{border:0 solid #828282;border-radius:2px;padding-left:10px;padding-right:10px}.Popup.StockQuote-StockIndexMng .right .Scrollbar{opacity:0}.Popup.StockQuote-StockIndexMng .right:hover .Scrollbar{opacity:.6}.Popup.StockQuote-StockIndexMng .Footer{border-top:none;position:relative;margin:0 2em}.Popup.StockQuote-StockIndexMng .Footer button:first-child{left:0;top:50%;margin:0;width:auto;margin-top:-15px;background:none;border:none;color:#599afc;position:absolute}.Popup.StockQuote-StockBriefSet{width:350px;height:505px}.Popup.StockQuote-StockBriefSet .Content{position:relative;-ms-flex:1;flex:1;padding:0;margin-top:.5em}.Popup.StockQuote-StockBriefSet .Content .EditList{position:absolute;top:10px;bottom:0;left:20px;overflow:hidden;right:20px;border:1px solid #ccc}.Popup.StockQuote-StockBriefSet .Footer{border-top:none;position:relative;margin:0 2em}.Popup.StockQuote-StockBriefSet .Footer button:first-child{left:0;top:50%;margin:0;width:auto;margin-top:-15px;background:none;border:none;color:#599afc;position:absolute}.Popup.StockQuote-StockOverlay{width:550px;height:300px}.Popup.StockQuote-StockOverlay .Content{position:relative;-ms-flex:1;flex:1;padding:0;margin-top:.5em;font-weight:400}.Popup.StockQuote-StockOverlay .Content .error_tip{font-size:12px;color:red;padding-left:20px}.Popup.StockQuote-StockOverlay .Content ul{list-style:none;margin:0 0 10px;font-size:12px}.Popup.StockQuote-StockOverlay .Content ul span{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:75px}.Popup.StockQuote-StockOverlay .Content ul li{cursor:default;height:33px;line-height:33px;text-indent:5px}.Popup.StockQuote-StockOverlay .Content ul li .closeico,.Popup.StockQuote-StockOverlay .Content ul li .spanStockCode,.Popup.StockQuote-StockOverlay .Content ul li .spanStockName{display:inline-block}.Popup.StockQuote-StockOverlay .Content ul li .spanStockCode{width:40%}.Popup.StockQuote-StockOverlay .Content ul li span.closeico{width:10%;font-size:15px}.Popup.StockQuote-StockOverlay .Content ul li span.closeico:hover{cursor:pointer}.Popup.StockQuote-StockOverlay .Content ul li.active{background-color:#5a9afc;color:#fff}.Popup.StockQuote-StockOverlay .Content .stocksearch{position:absolute;top:20px;bottom:20px;left:20px;width:210px;border:1px solid #eee}.Popup.StockQuote-StockOverlay .Content .stocksearch input{font-size:12px;text-indent:2em;width:185px;height:24px;line-height:24px;margin:11px 13px 10px;border-radius:5px;border:1px solid #eee}.Popup.StockQuote-StockOverlay .Content .stocksearch .overtip{padding:11px;font-size:12px}.Popup.StockQuote-StockOverlay .Content .stocksearch .overlist{margin:11px 13px 10px;width:185px;height:100px;border:1px solid #eee}.Popup.StockQuote-StockOverlay .Content .stocksearch .overlist li{height:25px;line-height:25px}.Popup.StockQuote-StockOverlay .Content .stocksearch .cancelicon,.Popup.StockQuote-StockOverlay .Content .stocksearch .searchicon{display:inline-block;height:20px;width:20px;position:absolute}.Popup.StockQuote-StockOverlay .Content .stocksearch .searchicon{top:14px;left:15px;background-image:url(" + a(78) + ")}.Popup.StockQuote-StockOverlay .Content .stocksearch .cancelicon{top:15px;left:175px;background:url(" + a(79) + ") no-repeat}.Popup.StockQuote-StockOverlay .Content .stocksearch span.cancelicon:hover{cursor:pointer}.Popup.StockQuote-StockOverlay .Content .stocksearch .indexlist{overflow:hidden;position:absolute;left:12px;top:35px;bottom:0;width:186px}.Popup.StockQuote-StockOverlay .Content .stocksearch .indexlist li{height:25px;line-height:25px}.Popup.StockQuote-StockOverlay .Content .indexlist{overflow:hidden;position:absolute;top:20px;bottom:20px;width:150px;background-color:#fff;border:1px solid #eee}.Popup.StockQuote-StockOverlay .Content .indexlist .Scrollbar{opacity:0}.Popup.StockQuote-StockOverlay .Content .indexlist:hover .Scrollbar{opacity:.6}.Popup.StockQuote-StockOverlay .Content .indexlist.index{left:230px}.Popup.StockQuote-StockOverlay .Content .indexlist.mystock{left:380px}.TMPDOMRoot.StockQuote-StockOverlay-Mask:after{height:100%}.Popup.StockQuote-StockDrawLine{position:fixed;width:190px;height:580px;left:50%;top:50%;margin-top:-290px;margin-left:-95px}.Popup.StockQuote-StockDrawLine .title{position:relative;font-size:14px;color:#838383;text-align:center}.Popup.StockQuote-StockDrawLine .title span{position:relative;z-index:2;background:#fff;font-size:14px;line-height:16px;margin-top:5px;width:30px;display:inline-block;vertical-align:top;padding-left:8px;padding-right:8px}.Popup.StockQuote-StockDrawLine .title:after{position:absolute;content:'';left:22px;right:22px;height:1px;overflow:hidden;background:#e6e6e6;top:50%}.Popup.StockQuote-StockDrawLine ul{margin-left:13px}.Popup.StockQuote-StockDrawLine ul li{display:inline-block;margin:5px 10px;border:1px solid #d3e5fb;background-color:#eff8ff;width:33px;height:33px}.Popup.StockQuote-StockDrawLine ul li:hover{background-color:#dbedfb}.Popup.StockQuote-StockDrawLine ul li.chose{border:1px solid #b595fc;background-color:#b6ddfb}.Popup.StockQuote-StockDrawLine .icon1{background-image:url(" + a(80) + ");background-position:-38px -38px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon1{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon2{background-image:url(" + a(80) + ");background-position:-76px 0;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon2{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon3{background-image:url(" + a(80) + ");background-position:-76px -38px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon3{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon4{background-image:url(" + a(80) + ");background-position:0 -76px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon4{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon5{background-image:url(" + a(80) + ");background-position:-38px -76px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon5{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon6{background-image:url(" + a(80) + ");background-position:-76px -76px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon6{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon7{background-image:url(" + a(80) + ");background-position:-114px 0;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon7{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon8{background-image:url(" + a(80) + ");background-position:-114px -38px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon8{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon9{background-image:url(" + a(80) + ");background-position:-114px -76px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon9{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon10{background-image:url(" + a(80) + ");background-position:0 0;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon10{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon11{background-image:url(" + a(80) + ");background-position:-38px -114px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon11{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon12{background-image:url(" + a(80) + ");background-position:-76px -114px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon12{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon13{background-image:url(" + a(80) + ");background-position:-38px 0;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon13{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon14{background-image:url(" + a(80) + ");background-position:-152px 0;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon14{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon15{background-image:url(" + a(80) + ");background-position:-152px -38px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon15{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon16{background-image:url(" + a(80) + ");background-position:-152px -76px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon16{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon17{background-image:url(" + a(80) + ");background-position:-152px -114px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon17{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon18{background-image:url(" + a(80) + ");background-position:0 -152px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon18{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon19{background-image:url(" + a(80) + ");background-position:-114px -114px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon19{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon20{background-image:url(" + a(80) + ");background-position:0 -114px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon20{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon21{background-image:url(" + a(80) + ");background-position:0 -38px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon21{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .icon22{background-image:url(" + a(80) + ");background-position:-38px -152px;width:33px;height:33px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.Popup.StockQuote-StockDrawLine .icon22{background-image:url(" + a(81) + ");background-size:217px 185px}}.Popup.StockQuote-StockDrawLine .inter-brief{margin:30px auto 0}.Popup.StockQuote-StockDrawLine .inter-info{margin:20px auto 0}.Popup.StockQuote-StockDrawLine .Footer{display:none}.TMPDOMRoot.StockQuote-StockDrawLine-Mask:after{height:100%}.Popup.DrawText{width:320px;height:220px}.Popup.DrawText table{table-layout:fixed;color:#828282;width:100%}.Popup.DrawText table td{height:52px;line-height:52px;width:50%}.Popup.DrawText table td .linename{display:inline-block;width:40px}.Popup.DrawText table .tip{color:#111;padding-left:13px}.Popup.DrawText table .TextInput{font-size:13px;text-indent:3px;width:285px;margin:11px 13px 10px;border-radius:5px;border:1px solid #ccc}.Popup.DrawText table .IntegerInput{margin:11px 13px 10px}.Popup.DrawText table button{width:30px;height:30px;border-radius:4px;border:1px solid #ccc;vertical-align:middle;padding:0}.Popup.DrawText table button:focus{outline:none}.Popup.StockQuote-StockWarn{width:440px;height:260px}.Popup.StockQuote-StockWarn .warn-info{padding:10px 0}.Popup.StockQuote-StockWarn li{height:50px;line-height:50px;list-style:none}.Popup.StockQuote-StockWarn li>div{display:inline-block}.Popup.StockQuote-StockWarn li>div:first-child{margin-left:46px;width:55%}.Popup.StockQuote-StockWarn li .IntegerInput{margin-right:10px}.Popup.StockQuote-StockWarn .header{height:30px;line-height:30px;margin:0 40px;position:relative;padding-right:20px}.Popup.StockQuote-StockWarn .header span{display:inline-block;vertical-align:top;margin-right:15px}.Popup.StockQuote-StockWarn .header .name{max-width:120px;line-height:16px;padding-top:7px}.Popup.StockQuote-StockWarn .header .clean{color:#599afc;position:absolute;right:-22px;top:0}.Popup.StockQuote-StockWarn .header .clean .content{cursor:pointer}.Popup.StockQuote-StockWarn .header .code{color:#828282}.Popup.StockQuote-StockWarn .header .clean{text-align:right}.Popup.StockQuote-StockWarn .header li{background-color:#eee;height:36px;line-height:36px}.Popup.StockQuote-StockWarn .header li span{padding-right:10px}.Popup.StockQuote-StockWarn .header li .code{color:#888}.Popup.StockQuote-StockWarn input[type=checkbox],.Popup.StockQuote-StockWarn input[type=radio]{margin-right:20px;vertical-align:top;margin-top:20px}.Popup.StockQuote-StockWarn .warn-freq div:first-child{width:37%}.Popup.StockQuote-StockWarn .reset{position:absolute;color:#599afc;bottom:-40px;left:56px;cursor:pointer}.Popup.StockQuote-StockWarn.isIndex{height:372px}.MyStock-Settings.Popup{width:450px;height:500px}.MyStock-Settings.Popup .Content{position:relative;-ms-flex:1;flex:1;padding:0;margin-top:.5em}.MyStock-Settings.Popup .Content .Tabs{position:absolute;top:0;bottom:0;left:0;right:0}.MyStock-Settings.Popup .Content .Tabs .Tabs-Bar{margin-left:2em;margin-right:2em}.MyStock-Settings.Popup .Content .Tabs .Tabs-Content{margin-left:2em;margin-right:2em;border:1px solid #ccc}.MyStock-Settings.Popup .Content .Tabs .Tabs-Content>div{height:100%}.MyStock-Settings.Popup .Footer{border-top:none;position:relative;margin:0 2em}.MyStock-Settings.Popup .Footer button:first-child{left:0;top:50%;margin:0;width:auto;margin-top:-15px;background:none;border:none;color:#599afc;position:absolute}.ListWrap.Tabs .Tabs-Bar{height:40px;margin-left:-8px;background-color:#201834;overflow:hidden;border-bottom:1px solid #181527}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item{color:#fff;background-color:#292a4c;height:30px;line-height:30px;padding:0 10px;margin:10px 17px 0}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(1){z-index:30}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(2){z-index:29}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(3){z-index:28}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(4){z-index:27}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(5){z-index:26}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(6){z-index:25}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(7){z-index:24}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(8){z-index:23}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(9){z-index:22}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(10){z-index:21}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(11){z-index:20}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(12){z-index:19}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(13){z-index:18}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(14){z-index:17}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(15){z-index:16}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(16){z-index:15}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(17){z-index:14}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(18){z-index:13}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(19){z-index:12}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(20){z-index:11}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(21){z-index:10}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(22){z-index:9}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(23){z-index:8}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(24){z-index:7}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(25){z-index:6}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(26){z-index:5}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(27){z-index:4}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(28){z-index:3}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(29){z-index:2}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:nth-child(30){z-index:1}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:after,.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:before{content:'';display:block;position:absolute;width:30px;border-radius:5px 5px 0 0;background-color:#292a4c;top:0;width:40px;height:30px;border:1px solid #181527;transition:background-color .3s}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:before{left:-20px;right:auto;-webkit-transform:skewX(-30deg);transform:skewX(-30deg)}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:after{right:-20px;left:auto;-webkit-transform:skewX(30deg);transform:skewX(30deg)}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item span{display:block;height:100%;z-index:1;width:100%;top:0;position:relative}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item span:before{transition:background-color .3s;content:'';display:block;left:-10px;right:-10px;border-top:1px solid #181527;position:absolute;height:100%;z-index:-1;background-color:#292a4c}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item.active{z-index:100}.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item.active,.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item.active:after,.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item.active:before,.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item.active span:before,.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:hover,.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:hover:after,.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:hover:before,.ListWrap.Tabs .Tabs-Bar .Tabs-Bar-Item:hover span:before{background-color:#3a3c5c}.ListWrap.Tabs .Tabs-Bar-ToolBtns{color:#fff;height:40px;line-height:40px;margin:0 5px}.ListWrap.Tabs .Tabs-Bar-ToolBtns i{width:40px;height:40px;line-height:40px;box-sizing:border-box}.ListWrap.Tabs .Tabs-Bar-ToolBtns i svg{padding:4px;width:32px;height:32px}.ListWrap.Tabs .Tabs-Bar-ToolBtns button{margin-right:20px;padding:0 10px;box-sizing:border-box;font-size:10px;height:22px;line-height:20px;vertical-align:middle;border:none;border-radius:3px;border:1px solid #599afc;color:#599afc;background-color:#1d192d}.ListWrap.Tabs .Tabs-Bar-ToolBtns button:hover{color:#fff;background-color:#599afc}.ListWrap.Tabs .Tabs-Bar-ToolBtns i:hover{background-color:#34315b}.ListWrap.Tabs .Tabs-Content{height:calc(100% - 41px)}.StockListWrap{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;height:100%}.StockListWrap>div{overflow:hidden;-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.StockListWrap>div .StockList{-ms-flex:1;flex:1}.StockListWrap>.QuoteListWrap{outline:none}.StockListWrap>.PlateListWrap{-ms-flex:inherit;flex:inherit;width:312px;margin-right:4px;outline:none}.StockListWrap>aside{height:100%;overflow:hidden;display:-ms-flexbox;display:flex;outline:none}.StockListWrap>aside .StockNews-NewsDetail{width:500px}.StockListWrap>aside .DetailRight{width:290px}header.StockQuote-Filter{height:40px;min-height:40px;line-height:40px;overflow:hidden;display:-ms-flexbox;display:flex}header.StockQuote-Filter ul{-ms-flex:1;flex:1;list-style:none;white-space:nowrap;overflow:hidden;height:100%}header.StockQuote-Filter ul .Filter-Item{padding:0 20px;display:inline-block;position:relative;text-align:center}header.StockQuote-Filter ul .Filter-Item:hover{cursor:pointer}header.StockQuote-Filter ul .Filter-Item.active:before{content:'';display:block;position:absolute;left:0;bottom:0;width:100%;height:2px}header.StockQuote-Filter .Filter-Toolbar{margin-right:10px}header.StockQuote-Filter .Filter-Toolbar .refreshMyStock,header.StockQuote-Filter .Filter-Toolbar i.ico.arrow,header.StockQuote-Filter .Filter-Toolbar i.ico.openSettings{cursor:pointer;width:24px;height:24px;text-align:center}header.StockQuote-Filter .Filter-Toolbar .refreshMyStock:after,header.StockQuote-Filter .Filter-Toolbar i.ico.arrow:after,header.StockQuote-Filter .Filter-Toolbar i.ico.openSettings:after{display:inline-block;content:'';vertical-align:top;margin:4px 0 0}header.StockQuote-Filter .Filter-Toolbar .openSettings:after,header.StockQuote-Filter .Filter-Toolbar .refreshMyStock:after{margin-top:5px}header.StockQuote-Filter .Filter-Toolbar i.ico.refreshMyStock{margin-right:5px;display:none}header.StockQuote-Filter .Filter-Toolbar i.ico.showMenu{width:12px;margin-right:7px;line-height:32px;text-align:center}", ""]);
}, function(e, t) {
	e.exports = function() {
		var e = [];
		return e.toString = function() {
			for (var e = [], t = 0; t < this.length; t++) {
				var a = this[t];
				a[2] ? e.push("@media " + a[2] + "{" + a[1] + "}") : e.push(a[1])
			}
			return e.join("")
		}, e.i = function(t, a) {
			"string" == typeof t && (t = [
				[null, t, ""]
			]);
			for (var i = {}, l = 0; l < this.length; l++) {
				var n = this[l][0];
				"number" == typeof n && (i[n] = !0)
			}
			for (l = 0; l < t.length; l++) {
				var o = t[l];
				"number" == typeof o[0] && i[o[0]] || (a && !o[2] ? o[2] = a : a && (o[2] = "(" + o[2] + ") and (" + a + ")"), e.push(o))
			}
		}, e
	}
}, function(e, t) {
	e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9IiMxOUEyRkYiIHBvaW50cz0iMTUuNzY1LDMuMTUxIDE5Ljk0LDExLjYxIDI5LjI3NiwxMi45NjcgMjIuNTIxLDE5LjU1MSAyNC4xMTUsMjguODQ5IDE1Ljc2NSwyNC40NTkgNy40MTYsMjguODQ5IA0KCTkuMDEsMTkuNTUxIDIuMjU1LDEyLjk2NyAxMS41OTEsMTEuNjEgIi8+DQo8L3N2Zz4NCg=="
}, function(e, t) {
	e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgZmlsbD0iIzE5QTJGRiIgY3g9IjIzLjY4NSIgY3k9IjYuNDc5IiByPSI0LjI3NyIvPg0KPGNpcmNsZSBmaWxsPSIjMTlBMkZGIiBjeD0iMjIuNTM0IiBjeT0iMjQuOTAxIiByPSIzLjc3NyIvPg0KPGNpcmNsZSBmaWxsPSIjMTlBMkZGIiBjeD0iOC40MTUiIGN5PSIxNi44NDEiIHI9IjUuMDI3Ii8+DQo8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMxOUEyRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMjMuNjg1IiB5MT0iNi4yNzMiIHgyPSI4LjQxNSIgeTI9IjE2Ljg0MSIvPg0KPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTlBMkZGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjIyLjUzNCIgeTE9IjI0LjkwMSIgeDI9IjguNDE1IiB5Mj0iMTYuODQxIi8+DQo8L3N2Zz4NCg=="
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAYAAADfcP5FAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdEMjc2NTY5OTcwNjExRTVCMUFCRDgxN0JEREQ0RDM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdEMjc2NTZBOTcwNjExRTVCMUFCRDgxN0JEREQ0RDM4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0QyNzY1Njc5NzA2MTFFNUIxQUJEODE3QkRERDREMzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0QyNzY1Njg5NzA2MTFFNUIxQUJEODE3QkRERDREMzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6fa12GAAABY0lEQVR42mI0iJ/lycDAMBeIJRkGFjwH4mSmQeIYBqgb5jINEsfAHcXEMMjAqIPIdpCPqRzD+QWpYIwLwORBaonRZ6MpDpebVeI+sCEkzs/BUBJrA2a/ef+FoXb2wYF1UHagEYO8lBCY3ThrH8PLjz8GzkGgaPR10Aazl287x3Dk+suBS9SgqKpMdgSzT195xNC16uzA5rLmVHsGLg42vOmGbg6KdlBlMNWRI5hukAELMQbjy/r4QIK/CZwtL86HN+3QJYREBHkYHj57B3ccKD1RJYQME2aTFXKgHLX12B2GJS1hYMfFu2sPbKIGWX71yUeww0Ag0suIQVuGf+DrsoU7rzJ8+/ELzK5KtBt4B4Fy15LNkKjSUpZAqfsGrOqYvvUKPIHnR1kPjubHnPWn4bmvLMx44B205fQjcPUBAv5OOlgTOCOw1/F/tMVIwEHPB5F7XoAclAJiDALHPAV1FAECDAC1SnpDjf31iAAAAABJRU5ErkJggg=="
}, function(e, t) {
	e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzeW1ib2wgIGlkPSJTZWFyY2giIHZpZXdCb3g9Ii0xOC4xMTMgLTE3LjU3NSAzNS44NjkgMzQuNzkzIj4NCgk8Zz4NCgkJPGc+DQoJCQk8Zz4NCgkJCQk8cGF0aCBmaWxsPSIjMjlBQkUyIiBkPSJNLTE3LjgyLTEzLjQxN2MtMC40MTksMC40NjMtMC4zODQsMS4xODYsMC4wNzksMS42MDVsOS41OTgsOC43MTljMC40NjIsMC40MTksMS4xODMsMC4zODQsMS42MDItMC4wNzkNCgkJCQkJbDMuNDI4LTMuNzg4YzAuNDE5LTAuNDYzLDAuMzg0LTEuMTg1LTAuMDc5LTEuNjA1bC05LjU5OC04LjcxOGMtMC40NjItMC40Mi0xLjE4My0wLjM4NS0xLjYwMiwwLjA3OEwtMTcuODItMTMuNDE3eiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjMjlBQkUyIiBkPSJNNS4xODgsMTcuMjE4YzEuMzYyLDAsMi43NDgtMC4yMjMsNC4xMDgtMC42OTRjNi41NTgtMi4yNjksMTAuMDM0LTkuNDI1LDcuNzY2LTE1Ljk4Mg0KCQkJYy0xLjc5OC01LjE5Ny02LjY2Ni04LjQ1OS0xMS44NzMtOC40NTljLTEuMzYyLDAtMi43NDksMC4yMjQtNC4xMDksMC42OTVDLTUuNDc4LTQuOTU0LTguOTU1LDIuMjAyLTYuNjg1LDguNzU5DQoJCQlDLTQuODg3LDEzLjk1Ny0wLjAxOSwxNy4yMTgsNS4xODgsMTcuMjE4IE01LjE4OCwxMy44MTJjLTMuOSwwLTcuMzc5LTIuNDc4LTguNjU1LTYuMTY3Yy0wLjgtMi4zMTItMC42NTItNC43OTcsMC40MTctNi45OTcNCgkJCWMxLjA2OS0yLjIwMSwyLjkzMS0zLjg1Myw1LjI0NC00LjY1M0MzLjE2Ni00LjM0LDQuMTczLTQuNTExLDUuMTg5LTQuNTExYzMuOSwwLDcuMzc4LDIuNDc5LDguNjU0LDYuMTY4DQoJCQljMC44LDIuMzExLDAuNjUxLDQuNzk2LTAuNDE3LDYuOTk2Yy0xLjA3LDIuMjAxLTIuOTMyLDMuODUzLTUuMjQzLDQuNjUzbC0wLjAwMSwwQzcuMjExLDEzLjY0Myw2LjIwNCwxMy44MTIsNS4xODgsMTMuODEyDQoJCQlMNS4xODgsMTMuODEyeiIvPg0KCTwvZz4NCjwvc3ltYm9sPg0KPHVzZSB4bGluazpocmVmPSIjU2VhcmNoIiAgd2lkdGg9IjM1Ljg2OSIgaGVpZ2h0PSIzNC43OTMiIHg9Ii0xOC4xMTMiIHk9Ii0xNy41NzUiIHRyYW5zZm9ybT0ibWF0cml4KDAuNDY1MSAwIDAgLTAuNDY1MSAxMC40MjQzIDkuNzIyNSkiIG92ZXJmbG93PSJ2aXNpYmxlIi8+DQo8L3N2Zz4NCg=="
}, function(e, t) {
	e.exports = "data:image/png;base64,R0lGODlhEgAQAKIAAMzMzP///9nZ2d7e3vn5+fHx8f///wAAACH5BAEHAAYALAAAAAASABAAAANGGLrcvmUAMMpbZGpNXt5g10yCsJVTU5CBCQjtZC0SW8bTwIAwru0nhetH08BuQx3ExgTMFqThy+X4gDie60R0ieSelzAjAQA7"
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAC5CAYAAAClSposAAAAAklEQVR4AewaftIAACVESURBVO3BD5zndUEg/PdndphJjDMNhSy1o8jrGv+kU14fP1ruQQmkkKgzKx/TpN+ogIvmYc4a7mynjF6JRCGwP4s4v7oD5j8IREMq+PTN8+bh9Tzd2PknyeQJFiXtcQWe+e0u39tu6BbXXZid/c0yu/N9v4NWq/W/jUzPfwbPw1fxjLnJ4fss0cj0/BD+CE8f0Gq1jEzPvxBrcQSOxxmWaGR6/vvwUZyBrwSt1io0Mj2/BufjW/gpnIkBu92Py/FJPBYfnJsc3ulhjEzPH4mP40R8HGOD+iSm/Gr8dV2qL2q1Vr43YKPdGtyIL+N4/Ee8Hq+34N/gDzyEken578ef4udxNfLc5PD2QX0QU57ABqzVah0azrDbvTh1bnL4Rg8YmZ4/AZ/AkRasxx/Yh5Hp+cfgOjwXFV49Nzm80y4DDlBMeQIbsLYu1W1arUPDW3C/BRfMTQ7f6EHmJodvxAV2u8g+jEzPPw5/hufi/Xj13OTwTg8YdABiyhPYgLV1qW6zjGLKjWVUlypoLbuYcmMZ1aUKFmFucvjPR6bn78IP4Rp79wm8A/80Nzn8PnsxMj3/eHwaz8QleMPc5HDjQQYtUUx5Ahuwti7VbZZZXargMBdTHsJj61LdZYWJKQ/hsXWp7nIA6lIFK8cRFjQeWs++fQrPxHtw3tzkcGMPA5YgpjyBDVhbl+o2rQMWUx7CDH7LChNTHsIMfsthYmR6/iwcbcGp9u5UC44ZmZ5/gb37lgWPw4C9GLSfYsoT2IC1dalucxDFlBt7UZcqOITFlIcwg4A3W0FiykOYQcCb9UFMubEPdamCg+Ncu20YmZ7/b3OTwzd6wMj0/AnYYMEA3o2f9b1Ow3X4NawZmZ5/zdzk8E4PEuyHmPIENmBtXarbHEQx5aYuVbAXMeWmLlVwCIopD2EGAWN1qXpWiJjyEGYQMFaXqqfPYspNXargIBuZnj8Hv2+3Bjfi7/DjOAHBbm+amxy+yF6MTM8/Gtfj+fggXjU3ObzTAwYtUkx5Ahuwti7VbVaQulTBA2LKjSWoSxUcZDHlIcwgYKwuVc8KEVMewgwCxupS9RxEMeXGEtSlChbnUmzDN3EKOjgRJ1pwP96Pz+Nx+H37MDc5fM/I9PxJuBZnYHBkev6MucnhnXYJFiGmPIENWFuX6jZLFFM+DkfUpfqi/RRTbupSBYeJmPIQZhAwVpeqZ4WIKQ9hBgFjdal6lklMualLFTzCRqbnO9hst5PmJodvsB9GpuePxMdxIv4Er5ibHN4+4GHElCewAWvrUt1miWLKx+Em/Ad9EFNuYspNTLlxiIkpD2EGAWN1qXpWiJjyEGYQMFaXqmd1qPBl7MRfzE0O32A/zU0O34tT8Sm8FDMj0/NDgx5CTHkCG7C2LtVtliimfBxuwrvqUl2pD+pSBQ+IKTd1qYJDQEx5CDMIGKtL1bNCxJSHMIOAsbpUPavE3OTwffgJB2hucvi+ken5U/ExvAQfGLAPMeUJbMDaulS3WaKY8nG4CdN1qS6zisWUhzCDgLG6VD0rREx5CDMIGKtL1dNakrnJ4Xmcho/i+EF7EVOewAasrUt1myWKKR+HmzBdl+pyB0FMubEEdamCZRRTHsIMAsbqUvWsEDHlIcwgYKwuVc8jLKbcWIK6VMEKMDc53MPpdgn2EFOewAasrUt1myWKKR+HmzBdl+pyfRBTbuxFXapgBYspD2EGAWN1qXpWiJjyEGYQMFaXqqfVV8GDxJR/Fb+NF9Sl+ntLFFM+Djdhui7V5VaxmPIQZhAwVpeqZ4WIKQ9hBgFjdal6Wn036Lt9Di+oS/X3liimfBxuwnRdqsutYjHlIcxYMFaXqmeFiCkPYcaCsbpUPavUus07norz8Ev4YdyNz+JyXL9lYrBZt3nH8VsmBr9sCYI+iikfh5swXZfqcqtYTHkIMxaM16XqWSFiykOYsWC8LlXPKrVu845z8F4M4n7cg6PsdhM+jN/ZMjF4lCUY1Ccx5eNwE6brUl2uz2LKjWVUlyrok5jyEGYsGK9L1bNCxJSHMGPBeF2qnoMoptxYRnWpgkVat3nHm3Ah7sSbcM2WicH71m3e8QSMYyPWYq0DEPRBTPk43ITpulSXW8ViykOYsWC8LlXPChFTHsKMBeN1qXpWqXWbdxyP/4Fv4ee2TAx+1R7Wbd5xJt7vAVsmBoMlGHSAYsrH4SZM16W63CoWUx7CjAXjdal6VoCY8juxHrfjCxivS9Wzuq3HMN68ZWLwq/awbvOOY/EufTDoAMSUj8NNuKAu1Wat37VgvC5Vz8rxnzCE4/DMulQ9rRfiPnzE3t2D5+iDQUsUUz4ON+GCulSbtf7FO/GtulQ9K8vv4lz8Xl2qnta/mME3t0wMztuLLROD27DNLus273gjfhDnW4JgCWLKx+EmXFCXarODIKbcWEZ1qYLWsospN5ZRXapgEdZt3nGc7/aNLROD2+xh3eYdw/gW/nHLxODxlmDQfoopH4ebcEFdqs0OkrpUQeuQV5cqWBm+Yre78TRs871Ox6NwgyUatP+GMFWX6o+1WoeHt26ZGNxqD+s273gK3oN5XGyJBu2nulRfwBe0WoePd6/bvONIbNkyMXj3us07HoUX40Ici7O2TAx+2RIFrdYqtG7zjm04Dy/DWrt9G4/GGuzAW7ZMDL7XAVij1VqFnvait39ky8Tgp572ordXuBX/Bo/FY3EnPoJf3TIxeK1Wq9VqtVqtVqvVarVardbeBa3WKjfa6T4V5+GX8MO4G5/F5bh+tttpRjvd42e7nS9bgqDVWsVGO91z8F4M4n7cg6PsdhM+jN+Z7XaOsgSDWq1VarTTfRMuxJ14E66Z7XbuG+10n4BxbMRarHUABrVaq9Bop3s8prEVcbbb+aoHzHY7X8fFo53uPXi/AzSg1Vqd1mMYb57tdr5qD6Od7rF4lz4Y1GqtTi/EffiIvbsHz9EHA1qtgyym3NiHmHJjH2LKjX2IKTf2zwzeNtvtzNuL2W5n22y3c9tst3MbXoxfs0SDWq3V6Qq7jHa6x1nwjdluZ5s9jHa6w7gA/4jzLcGgPogpb7RLXapNWoedmPI7sR4X16V6m8PDV+x2N56Gbb7X6XgUbrBEAw5QTHkjAkJMeaPWYSWmPITfxPdjvcPTW2e7na32MNrpPgXvwTwutkSDDkBMeSNCXaopu8SUfzumvLEu1SarTEy50Ud1qYJHWEx5CDP4Mp6Eix2e3j3a6R6JLbPdzt2jne6j8GJciGNx1my382VLNGiJYsobEepSTXlAXaq3x5R/O6a8sS7VJqtMXaqgD2LKjUdYTHkIMwh4Rl2qnsPLd3AeXoa1uBgXj3a638ajsQY78Buz3c6lDsCAJYgpb0SoSzVlD3Wp3o4jYsobtQ5JMeUhzCBgrC5Vz+Hn2bPdzmU4EafiOnwDR2ErrsAzZrud9zpAg/ZTTHkjQl2qKftQl+q3YsoXxJQ31qXapHXIiCkPYQYBY3Wpeg5Ds93Ol+wy2+3cj2twjWUyYD/ElDci1KWa8jDqUm3AcEx5o9YhIaY8hBkEjNWl6mkdsAGLFFPeiFCXasoi1aXagKNiyhu1VrSY8hBmEDBWl6qn1RcDFiGmvBEB99sPMeUj8QwErRUrpjyEGQSM1aXqafXNoIcRU96IUJdqKqb82zHlDXWpLvAwYspH4hqUulRTDlBMubGM6lIFq1BMeQgzCBirS9XT6qtBDyGmvBGhLtWUXepSvT2m/F9iyr9Zl+rd9iGmfCSuQalLNaUP6lIFrb6KKQ9hBgFjdal6VqGmaZ6K8/BL+GHcjc/iclwfQmh2OT6E8GVLMGAfYsobEepSTXmQulRvwbEx5Tfbi5jykbgWpS7VlNaKFFMewgwCxupS9axCTdOcgzmciSfiO3g8XoQ/xY1N07wOt1qiAfsW0Ni738BxMeU3epCY8pG4FrfUpZrSWpFiykOYsWCsLlXPKtQ0zZvw+/gGxvH9IYR/g2NwLr6JtbgU32+JBuxDXaophJjyRnuoS9XgHPxUTHm9XWLKR+JPcUtdqimtFSmmPIQZC8brUvWsQk3THI9pbEUMIVwVQrjPLiGEr4cQLsZb9MGAh1CXagohprzRHupSNXgtfjqm/GZch5vrUk1prUgx5SHMWDBel6pn9VqPYbw5hPBVe2ia5li8Sx8Mehh1qaZiylMx5Y11qTZ5kLpU98eUz8JXcWldqimrWEy5sULFlIcwY8F4Xaqe1e2FuA8fsXf34Dn6YNAi1KWaiilPxZQ31qXa5Lu9F5fWpZqyitWlClagmPI7sR634wsYr0vV05rBN0MI8/YihLAN2+zSNM0b8YM43xIMWqS6VFMx5amYcuO7bapLNaW1Uv0nDOE4PLMuVU/rX1xhl6ZpjrPgGyGEbfbQNM0wLsA/4nxLMGg/1KWawpTWoeR3cS5+ry5VT+tffcVud+Np2OZ7nY5H4QZLNKh1WKtL9Ta8TeuhvDWEsNUemqZ5Ct6DeVxsiYJWaxVqdrHbP2ETtoQQ7m6a5lF4MS7EE3FWCOFSSxS0WqtQ0zTbcB5ehrV2+zYejTXYgbeEEN7rAAxotVanZ4cQLsOJOBXX4Rs4CltxBZ4RQnivVqvVarVarVar1Wq1Wq3W3gWtVuv/GO10h3AlRma7nafpgwGtVut/G+10vw8fwzj+Tp8MarVaRjvdI/FxnIiPY0yfBK3WKjfa6R6Fa/HzuBp5ttvZrk+CVmsVG+10H4NP4udQ4dWz3c5OfRS0WqvUaKf7OHwaz8b78brZbmenPgtarVVotNN9PD6NZ+ISvGG222ksg0Gt1ur0KTwT78F5s91OY5kMWISYcmM/xZQbrdbK9S0LHocBy2hQq/UwYspDeCl+pi7VmxyAmHJjGdWlChbnNFyHX8Oa0U73NbPdzk7LYNAyiCkPax3yYsrHYgKvx7F4lQNUlypYAWa7nW2jne5JuB6/ijWjne6rZrudnfpsQB/FlI+JKW/E39slpnyE1iEnpvyzMeUP4B+wCcfiTsw4jMx2O/fgJNyEM/DB0U53jT4b1Acx5WfhXPwyZvACfKEu1Xat/yOm/NP4b3h+XarPWkFiykN4KdbjOb5Xty5VTx/ElBu71KUKHhBT/mn8cl2q/+wgmu127h3tdF+Ej2MMa0Y73VfMdjvb9cmgJYopr8FpWI+n4BKcW5fqn+0SU9b6HudiAq/HZ60AMeVjMYHX41h718Nl+iCm3NSlCnaJKTd1qUJM+fuxBRs9Ama7nXtHO91T8TG8FAOjne662W6npw8G7aeY8g/gTJyD23ExPlaXaqfWPsWUj8aT61L9cUx5XUz5h+pS3ekRElP+WazHyzDkoX24LtWdls9l+Iu6VFd5QEy5sQR1qYIlmO127hvtdE/Fx/ASfABj+mDQIsWUn4o3YBzX4fS6VLfai5jysD6LKX8Mv1OXqtZHMeWI8+pS/Yrl9TpcYcGlmMAmj5yTcYbF+QN9UpcqxJQbu9SlCjHlV+PpeI4HqUsVHGSz3c78aKd7GrbgeH0SPIyY8hHoYSsux2V1qbbai5jyMXgdXosfwlBdqu36IKb8FHwUz69LdY8+iCk/GjfjJXWp/sEyiSkP4rOIdal6MeVBFDy/LlXPIySmPIWNHtpn61L9nGUQU/53uBk/X5fqfzpMDXgYdam2W/Cjdamm6lJttYeY8rNiylfib/EEvMAudam265O6VP+A30EVUw4OUEw5oMJ/qUv1D5bXS/DJulQ9u9Sl2oGP4uUeQXWpprDJQ3ufZRBTfhSuxm/WpfqfMeUmptw4DA1YpLpU8x4kprwmpnx6TPkv8VHM4cfqUp1dl+qLlkFdqhnM4YqY8hpLFFNegyswV5fqKsvvDXif7/ZHeI1HWF2qKfxne3cnrrI8LsTf1KW6Iqbc1KUKdalCTLlxmBm0n2LKP4AzcQ5ux8X4WF2qnQ6CulTnx5TfgU/ElF9Vl+qf7IeY8g/iSvzfdanOt8xiys/CHXWp7vQgdanujin/fUz5P9Sl+qxHSEx5CCP4Ip7qu22uS9XTZzHll+E/4tn2IabcWIK6VMEKM2iRYspPxRswjutwel2qW+1FTHnYMqpL9Vsx5XHcElP+z7iqLtX9HkJMeQBjeDs21aWacXCci2tiysf5XtfjbHzWIyCmPIQZBDwdG7DRgh4utzx+EmN1qbbZpS5ViCk3dqlLFexSlyo4TAQPI6Z8BHrYistxWV2qrfYipnwMXofX4ocwVJdqu2USU/4hvBM/iw/iBszVpdpul5jyERjBC3EG/js21KW600EQUz4Wt+Am+5ZwQl2qOx1EMeUhzCBgrC5Vzy4x5SlsRFWX6pUOU03TzOJrWBdCmLeMgkWIKTf4vrpU8/YipvwsnItfxgwuxhfqUgUHQUz5WLwCv4Bn4UjMo4f/B3+BD9Wl2uogiin/Fu6qS9W1DzHljB+vSzXlIIkpD2HGgvG6VD0PElOewg11qT7rMNU0zVV4OT6Fl4QQ7rVMBi1SXap5DxJTXoPTsB5PwSU4ty7VP9slpuxgqUu1FRfiQitETHkIr8CzPbSr8bmY8gV1qXqWWUx5CDMWjNel6tlDXaoph79XYgAvxZ82TfOiEMI9lsGg/RRT/gGciXNwOy7Gx+pS7dR6sJfhurpU93kIdal6MeVrMYYPWEYx5SHMWDBel6rnIIspN5ZRXapgEUIIvaZpxvFf8Qrc0DTNKSGEb+uzQYsUU34q3oBxXIfT61LdqrUvZ+GVFmczPoQPWCYx5SHMWDBel6rnEVCXKlghQgg7m6b5VfTwany6aZoXhhD+WR8FDyOmfAR62IrLcVldqq0eRky5qUsVtB5xMeUhzFgwXpeqp/V/NE0TcClei1txYgjhm/pkwMOoS7Xdgh+tSzVVl2qr1qHmdy0Yr0vV0/ouIYQGr8fv41n4TNM0j9cnAxapLtW81qHqnRivS9XT2qsQQhNCWI/fxTPxaX0yqHXYq0t1lxUiptxYRnWpgiVqmmYAj7PgW/okaLVamqZZgy5+DQUnhxC26YOg1VrlmqZZgyvwStyCk0MI39EnQau1ijVNswZX4gz8JU4JIdyjj4JWa5VqmmYNPoB1uAkvCiHcq8+CVmsVappmEB/Cy3AjTg0h3GsZDGq1Vqc/wsvwafxKCOFey2RQq7U6/RiuwXgI4T6tVqvVarVarVar1Wq1Wq39F7Raq9BopzuDe/Da2W5nh2U0oNVanQJeg5nRTnfIMlqj1VqFnvjsF1+DZ+I0PP2Jz37xR++49dqdlsEardYqdMet1+584rNf/BGM4DQ864nPfvFH7rj12p36bMAhLKbc2E8x5cYyiyk39lNMubEKxJQbD4gpN/YQU27sQ0y58RBiyo39MNvt9DCGD+MUfGK0032UPhtwgGLKjdaKFVNuPCCmfGRM+Tv2EFP+DzHl/+4hxJTfHlN+p8PMbLezHeuwBb+Ea0Y73SP10YBVJKZ8hF1iyn8dU95o9TkGd/peb8Wl9iGmfD4eV5fqbQ5Ds93OTrwSH8AJuG600320PhmwCsSUj44pb8DfW/C3uN7q83jc5UFiyj+O52GLvYgpvw1Pxpscxma7nZ34NVyBX8CH9cmgw1hM+elYjzPwNbwHF9alOtPq9ARs9d3egivrUt1nDzHlDfhJvKouVePwdz96FtyvTwYdZmLKA3gx1iPhGrwIn6lL1cSUL7R6PQF3ekBM+Qk4Az9tDzHlSTwbL69LtdNhbrTTDbgME7gF4/pk0GEipvwYnImzMYwucl2qO7T+1RNwl93egLou1Zc8SEz5N/E8nFaXaqfD3GinG3A5OrgFJ892O9/RJ4MOcTHln8B6vBKfw3m4pi7VDnuIKR9hl5jyX+OGulSbrAAx5WEHxxPwebvElB+N1+G1HiSm/Bb8Il5Ul6rnMDfa6QZsxq/jFpw02+3co48GHaJiykdY8Fe4Ej9Tl+pL9iKmfDQmcJYFf4vrPcJiysfgdXitXWLKR9Sl2m75PB53WfAa/P+4xgNiyufhNJxYl+peh7nRTjdgM34dN+Pk2W7nHn026BBVl2p7TNkuT65LdZ+9iCk/HetxBr6G9+DCulRnegTFlJ+Fc/HLmMEL8IW6VNstr2OwNaY8iDeiW5dqh11iym/GONbWpbrHHmLKz8emulQvcBgY7XQD3o/X4GacPNvt3GMZDDrE1aW6z4PElAfwYqxHwjV4ET5Tl6qJKV/oERBTXoPTsB5PwSU4ty7VP9slpuwgeDzuxEvwZHTtElN+E16F/1iX6v/zIDHlhE0YwtsdPi7Ca/CXOHm227nXMhl0mIgpPwZn4mwMo4tcl+oOj6CY8g/gTJyD23ExPlaXaqeD7wn4Ot6Cj9WlujOm/CachefVpfqGB8SUn4spPApTdaludHg5Htfh5bPdzr2W0aB9iCn/KN6Gs+tS9SxRTPlEvK4u1emWQUz5J7Aer8TncB6uqUu1wx5iykfYJab817ihLtUmyySm/FS8AeO4DqfXpbrVI++5eDbOiym/EevxvLpUW+0SU/45TOEx2FiX6lMOQ7PdzskOkkH7dgeOxkxMebwuVc9+iimfiA/hFfospnyEBX+FK/Ezdam+ZC9iykdjAmdZ8Le43jKIKR9hwV/gcozUpdrqERZT/mE8CtO4Hs/Ab2BtXar/N6b8HEzhBzFVl+p6rb4YtA91qXox5TFchZmY8nhdqp5FiimfiA/hFXWp/kyf1aXaHlO2y5PrUt1nL2LKT8d6nIGv4T24sC7VmZZJXartMWW7/GhdqnkrQEx5Y12qTTHll+DDuAqT+AX8YEz5YhyDqbpU12r11aCHUJeqF1Mew1WYiSmP16XqeRgx5RPxIbyiLtWfWUZ1qe7zIDHlAbwY65FwDV6Ez9SlamLKFzoI6lLNWzmmYsrqUm2KKb8M1+Fy/C6eiClcU5eqsUtMeQBPxr/Dv8dT8ZP4d3WpnqC1XwY9jLpUvZjyGK7CTEx5vC5Vzz7ElE/Eh/CKulR/5iCJKT8GZ+JsDKOLXJfqDq1/MRVTVpdqU0z5FFyHP8QG/ATOjyn/JJ6Kf4t/xBfxJXwWf4wva+23QYtQl6oXUx7DVbgqpjxWl6pnDzHlE/EhrKtLdaODIKb8E1iPV+JzOA/X1KXaobWnqZiyulSbYson43qM4Av4Iq7El/APdal2OoyNTM/P4B68dm5yeIdlNGiR6lL1YspjuApXxZTH6lL1PCCmfAI+hHV1qW60zGLKR1jwV7gSP1OX6ktaD2cqpqwu1aaY8vF1qe6wOgW8Bo8ZmZ5/xdzkcM8yGbAf6lL1MIYGV8WUh+wSUz4BW7CuLtWNDoK6VNsteHJdqv9Ul+pLWos1FVPeWJfqDqvXK3EtTsfVI9PzQ5bJoP1Ul6oXUx7HDK6yYAvW1aW60UFWl+o+raWYiilP2U91qYLDwNzkcG9kev6lmMGv4KMj0/Onz00Oz+uzQUtQl6oXUx7HJRasq0t1o9aKU5cqaO3V3ORwb2R6fgwfxMvwiZHp+V+Zmxy+Tx8FrdYqNzI9vwYfwDrciFPnJofv1SdrtFqr3Nc/847mCSec/3H8W/wKnvuEE87/k69/5h3b9cGAVqtlbnJ4J34NV+AX8GF9MqDVav2r+9Gz4H59MqjVahmZng+4DBO4BeP6JGi1VrmR6fmAy9HBLTh5bnL4O/okaLVWsZHp+YDN+HXcgpPmJofv0UdBq7VKjUzPB2zGr+NmnDw3OXyPPgtarVVoZHo+4P14DW7GyXOTw/dYBoNardXpIrwGf4mT5yaH77VMBrVaq9PxuA4vn5scvtcyCloHZGR6PuFsPA+PxzdwCy6ZmxwuDkDTNAln43l4PL6BW3BJCKE4AKOdbsLZeB4ej2/gFlwy2+0UB6hpms/gefgqnhFCuM8SjHa6n8Hz8FU8Y7bbuc8hJmgtycj0/CB+D6fgXbgeW3EsTsZbcR3eODc5vN1+aJpmEL+HU/AuXI+tOBYn4624Dm8MIWy3H0Y73UH8Hk7Bu3A9tuJYnIy34jq8cbbb2W4JmqZ5IT5pt04I4f3202in+0J80m6d2W7n/Q4xg1pLdSl+BE+bmxzeZrev4bKR6fkP4mq8Dx3751L8CJ4WQthmt6/hsqZpPoir8T507J9L8SN42my3s81uX8Nlo53uB3E13oeORWiaZg3Ox7fwUzjTd7u8aZpn4ZN4LD4YQthpD6Od7hqcj2/hp3Cm73b5aKf7LHwSj8UHZ7udnVa4Aa39NjI9/1ycgLG5yeFt9mJucngbXo4TRqbnn2uRmqZ5Lk7AWAhhm70IIWzDy3FC0zTPtUijne5zcQLGZrudbfZittvZhpfjhNFO97kW5w3YiIvQQcCNuBQ3IuD1uAZX4vX27g3YiIvQQcCNuBQ3IuD1uAZX4vUOAQNaS3E2pucmh7/tIcxNDm/Du3GOxTsb0yGEb3sIIYRteDfOsXhnY3q22/m2hzDb7WzDu3GOxTnDbvfiF0MIJ4YQzgohnIhfxL12W2/vzrDbvfjF2W7nxNlu56zZbudE/CLutdt6h4ABraVYi09anOvxfIu3Fp+0ONfj+RZvLT5pca7H8y3OW3C/BReEEG70ICGEG3GB3S6yd2/B/RZcMNvt3OhBZrudG3GB3S7SZ03TDDVNs6Vpmv+hTwa0luIY3GVxtuJoi3cM7rI4W3G0xTsGd1mcrTjaIoQQ/hx3WXCNvfuEBf8UQnifvZjtdv4cd1lwjb37hAX/NNvtvE8fNU3zffgYxvF3+mTQYSSm3NiHulRB/9yFY3C7h3cs7rZ4d+EY3O7hHYu7Ld5dOAa3e3jH4m6Ld4QFjYfW89COsKDx0Hr6qGmaI/FxnIiPY0yfDFhGMeVXx5Sf6iCqSxXqUoW6VKEuVahLFfTfn+Mki/NC3Gzx/hwnWZwX4maL9+c4yeK8EDdbhKZpzsLRFpxq70614JimaV5gL0Y73bNwtAWn2rtTLThmtNN9gT5omuYoXI8TcTVeHkLo6ZMByySmPIEpbHf4uQSTI9PzR3kII9PzR2ESl1i8SzDZNM1RHkLTNEdhEpdYvEswOdrpHuUhjHa6R2ESl1icc+22oWmaEzxI0zQnYIMFA3i3vTvXbhtGO90TPMhop3sCNlgwgHc7QE3TPAafws+jwitCCNv1UbAMYsoT2IC1daluswxiyo0DVJcqWKKR6fk/wI/h5XOTw9vsYWR6/ihcja/MTQ6fYz80TfMH+DG8PISwzR6apjkKV+MrIYRz7IfRTvcP8GN4+Wy3s80eRjvdo3A1vjLb7ZxjEZqmOQe/b7cGN+Lv8OM4AcFubwohXGQPo53uOfh9uzW4EX+HH8cJCHZ702y3c5Elaprmcfg0no3343UhhJ36LOizmPIENmBtXarbHKZGpuePwEU4BdO4HnfhGJyMSczj8xifmxzuWaSmaY7ARTgF07ged+EYnIxJzOPzGA8h9CzSaKd7BC7CKZjG9bgLx+BkTGIen8f4bLfT8zCaplmDjG/iFHQwYLf78Yf4PB6H3w4h7LSH0U53DTK+iVPQwYDd7scf4vN4HH57ttvZaQmapnk8Po1n4hK8IYTQWAZBH8WUJ7ABa+tS3eYgiCk3damCRYopN3Wpgj4ZmZ5POBvPx9G4GzfjEnwOMxaMz00O9+yHpmkSzsbzcTTuxs24BJ/DjAXjIYSe/TDa6SacjefjaNyNm3EJPocZC8Znu52e/dA0TQeb7XZSCOEG+2m00+1gs91Omu12btAHTdPcip/Ge3BeCKGxTAb1SUx5Ahuwti7VbR4hMeWmLlXwgJhyU5cqWCZzk8MFxT6MTM+PYwYzI9Pz43OTwz2LFEIoKPahaZpxzGCmaZrxEELPIs12OwXFPox2uuOYwcxopzs+2+30LF6F83Acbgkh3GBpKpyH43DLbLdzg/75lgWPwwB2WiZBH8SUJ7ABa+tS3WaXmPKjMIkP1qX6omUSU27qUgUPiCk3damCB8SUm7pUwQNiyk1dquAgGpmeH8KMBeNzk8M9fdI0zRBmLBgPIfT0yWinO4QZC8Znu52ew0TTNEfhOjwP/xWvCSHstAwGHKCY8gQ2YG1dqtvsElP+ZczhR/BPVrm5yeEexi24Qh+FEHoYt+AKfTTb7fQwbsEVDiMhhG04CTfjV3Fl0zRrLIMBByCmPIENWFuX6raY8pNiyh/FNF5Vl+o1danu1jI3OdzDON6rz0IIPYzjvfpsttvpYRzvdZgJIdyDk3ATzsAHm6ZZo8/WWKKY8gQ2YC2+9qQnP/03cAX+BK+uS/VVB8GTnvz0qdu/9jebPOBJT3761O1f+5tNHvCkJz996vav/c0mD3jSk58+dfvX/maTR8DXP/OOnV//zDvusAw2bdq0c9OmTXdYBnfceu3OO2699g6HoU2bNm2fmpr6E/wsXox/PzU19fFNmzbdr08GLEFMeQIbsBY/hP8LCc+pS/Vf6lLtiCn/bEx5KqZ8hFZrBQsh3ItT8Sm8FDNN0wzpkwH7KaY8gQ14GSbxAfxWXarT8JiY8jtjyn+HP8IOPFqrtcKFEO7DqfgkXoIP6JMB+yGmPIG34QP4OO7GS/DMmPLn8VE0OK0u1UhdqnfUpfpnrdYhIIQwj9PwURyvTwYtUkx5ApfhDrwSn8Yv4gxcjVfVpZrVah3CQgg9nK6PBi1CTHkClyHgh3EXvoNz8Vd1qRorRF2q4EHqUgWt1iNo0MOIKf8qLsO38DFswV/Updqp1Wo9rEEP73M4FTfUpdpuBYopN1qtVqvVarVarVar1Wq1Wq1Wq9VqtVqtVqu1YvwvECS1mj+liHwAAAAASUVORK5CYII="
}, function(e, t, a) {
	e.exports = a.p + "plugins/StockQuote/images/sprite@2x-039d1e0f8c.png"
}, function(e, t, a) {
	function i(e, t) {
		for (var a = 0; a < e.length; a++) {
			var i = e[a],
				l = d[i.id];
			if (l) {
				l.refs++;
				for (var n = 0; n < l.parts.length; n++) l.parts[n](i.parts[n]);
				for (; n < i.parts.length; n++) l.parts.push(r(i.parts[n], t))
			} else {
				for (var o = [], n = 0; n < i.parts.length; n++) o.push(r(i.parts[n], t));
				d[i.id] = {
					id: i.id,
					refs: 1,
					parts: o
				}
			}
		}
	}
	function l(e) {
		for (var t = [], a = {}, i = 0; i < e.length; i++) {
			var l = e[i],
				n = l[0],
				o = l[1],
				r = l[2],
				s = l[3],
				c = {
					css: o,
					media: r,
					sourceMap: s
				};
			a[n] ? a[n].parts.push(c) : t.push(a[n] = {
				id: n,
				parts: [c]
			})
		}
		return t
	}
	function n() {
		var e = document.createElement("style"),
			t = f();
		return e.type = "text/css", t.appendChild(e), e
	}
	function o() {
		var e = document.createElement("link"),
			t = f();
		return e.rel = "stylesheet", t.appendChild(e), e
	}
	function r(e, t) {
		var a, i, l;
		if (t.singleton) {
			var r = k++;
			a = m || (m = n()), i = s.bind(null, a, r, !1), l = s.bind(null, a, r, !0)
		} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = o(), i = u.bind(null, a), l = function() {
			a.parentNode.removeChild(a), a.href && URL.revokeObjectURL(a.href)
		}) : (a = n(), i = c.bind(null, a), l = function() {
			a.parentNode.removeChild(a)
		});
		return i(e), function(t) {
			if (t) {
				if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
				i(e = t)
			} else l()
		}
	}
	function s(e, t, a, i) {
		var l = a ? "" : i.css;
		if (e.styleSheet) e.styleSheet.cssText = g(t, l);
		else {
			var n = document.createTextNode(l),
				o = e.childNodes;
			o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(n, o[t]) : e.appendChild(n)
		}
	}
	function c(e, t) {
		var a = t.css,
			i = t.media;
		t.sourceMap;
		if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = a;
		else {
			for (; e.firstChild;) e.removeChild(e.firstChild);
			e.appendChild(document.createTextNode(a))
		}
	}
	function u(e, t) {
		var a = t.css,
			i = (t.media, t.sourceMap);
		i && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
		var l = new Blob([a], {
			type: "text/css"
		}),
			n = e.href;
		e.href = URL.createObjectURL(l), n && URL.revokeObjectURL(n)
	}
	var d = {},
		p = function(e) {
			var t;
			return function() {
				return "undefined" == typeof t && (t = e.apply(this, arguments)), t
			}
		},
		h = p(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
		}),
		f = p(function() {
			return document.head || document.getElementsByTagName("head")[0]
		}),
		m = null,
		k = 0;
	e.exports = function(e, t) {
		t = t || {}, "undefined" == typeof t.singleton && (t.singleton = h());
		var a = l(e);
		return i(a, t), function(e) {
			for (var n = [], o = 0; o < a.length; o++) {
				var r = a[o],
					s = d[r.id];
				s.refs--, n.push(s)
			}
			if (e) {
				var c = l(e);
				i(c, t)
			}
			for (var o = 0; o < n.length; o++) {
				var s = n[o];
				if (0 === s.refs) {
					for (var u = 0; u < s.parts.length; u++) s.parts[u]();
					delete d[s.id]
				}
			}
		}
	};
	var g = function() {
			var e = [];
			return function(t, a) {
				return e[t] = a, e.filter(Boolean).join("\n")
			}
		}()
}]);