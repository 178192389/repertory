!
function(e) {
	function t(i) {
		if (n[i]) return n[i].exports;
		var s = n[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return e[i].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
	e.exports = n(1)
}, function(e, t, n) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	var s = n(2),
		a = i(s),
		o = n(6),
		r = i(o),
		l = n(10),
		c = i(l),
		d = n(11),
		u = i(d),
		p = window.require("hippo/PluginStore");
	n(12), p.register({
		id: a.
	default.PluginId,
		title:
		a.
	default.Lang("StockNews"),
		preview:
		"doc"
	}, r.
default), p.register({
		id: a.
	default.PluginId,
		subId:
		a.
	default.NewsListId,
		type:
		1,
		tags: ["other", "news", "stock"],
		defaultSize: [338, 338],
		title: a.
	default.Lang("StockNews"),
		preview:
		"./plugins/" + a.
	default.PluginId + "/images/news_thumb_$skin.jpg",
		desc:
		"个股、指数最新资讯列表，支持点击查看资讯详细信息。"
	}, c.
default), p.register({
		id: a.
	default.PluginId,
		subId:
		a.
	default.NewsDetailId,
		type:
		1,
		title: a.
	default.Lang("StockNews")
	}, u.
default)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = (window.require("hippo/lib/underscore"), window.require("hippo/i18n")),
		s = window.require("hippo/utils"),
		a = s.enums,
		o = i.lang(function(e) {
			return n(3)("./" + e)
		}),
		r = "StockNews",
		l = {
			PluginId: r,
			NewsListId: "NewsList",
			NewsDetailId: "NewsDetail",
			Lang: o,
			ActionTypes: a({
				SELECTED: null,
				UNSELECTED: null
			}, r),
			tabs: [{
				title: "分类信息",
				type: "NewsCenter",
				subType: "NewsCenter"
			}, {
				title: "自选股",
				type: "SelfNews",
				subType: "SelfNews"
			}]
		},
		c = [{
			name: "国内财经",
			title: "DomesticFinance",
			ID: "n10310"
		}, {
			name: "国际财经",
			title: " InternationalFinance",
			ID: "n10311"
		}, {
			name: "宏观新闻",
			title: "risepercent",
			ID: "n10313"
		}, {
			name: "市场新闻",
			title: "MarketNews",
			ID: "n10317"
		}, {
			name: "模块新闻",
			title: "NewsTemplate",
			ID: "n10322"
		}, {
			name: "交易提示",
			title: "TraderClock",
			ID: "n10301"
		}, {
			name: "最新公告",
			title: "Notice",
			ID: "n13000"
		}, {
			name: "广发资讯",
			title: "GFInformation",
			ID: "xGF",
			contents: {
				n11101: "投资速递"
			}
		}];
	l.list = c, l.list_order = function() {
		var e, t, n, i;
		for (n = [], e = 0, t = c.length; e < t; e++) i = c[e], n.push({
			name: i.name,
			title: i.title,
			ID: i.ID
		});
		return n
	}(), t.
default = l, e.exports = t.
default
}, function(e, t, n) {
	function i(e) {
		return n(s(e))
	}
	function s(e) {
		return a[e] ||
		function() {
			throw new Error("Cannot find module '" + e + "'.")
		}()
	}
	var a = {
		"./zh-cn": 4,
		"./zh-cn.js": 4,
		"./zh-hk": 5,
		"./zh-hk.js": 5
	};
	i.keys = function() {
		return Object.keys(a)
	}, i.resolve = s, e.exports = i, i.id = 3
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		StockNews: "资讯"
	}, e.exports = t.
default
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		StockNews: "資訊"
	}, e.exports = t.
default
}, function(e, t, n) {
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
	var s = n(7),
		a = (i(s), n(2)),
		o = (i(a), n(8)),
		r = i(o),
		l = n(9),
		c = i(l),
		d = window.require("hippo/lib/react"),
		u = (window.require("hippo/lib/underscore"), window.require("hippo/lib/jquery"), d.createClass({
			displayName: "StockNews",
			getInitialState: function() {
				return {
					selectedState: "classifynews",
					data: []
				}
			},
			changeIndex: function(e) {
				this.setState({
					selectedState: e
				})
			},
			changeData: function(e) {
				this.setState({
					data: e
				})
			},
			render: function() {
				return d.createElement("div", {
					className: "StockNews"
				}, d.createElement(r.
			default, {
					changeData: this.changeData
				}), d.createElement(c.
			default, {
					newsData: this.state.data
				}))
			}
		}));
	t.
default = u, e.exports = t.
default
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = window.require("hippo/lib/jquery"),
		s = window.require("hippo/lib/underscore"),
		a = window.require("hippo/lib/events").EventEmitter,
		o = window.require("hippo/URL"),
		r = o.MDS_URL,
		l = s.extend({}, a.prototype, {
			getAll: function() {
				return _store
			},
			get: function(e) {
				var t = _store.filter(function(t) {
					return t.id == e
				});
				if (t.length) return t[0]
			},
			getList: function(e, t, n, s) {
				return i.get(r + "/geninfo/v1.0/news/list/" + e + "?num=" + t + "&start=" + n)
			},
			getDetail: function(e, t) {
				return i.get(r + "/geninfo/v1.0/news/content/" + e + "/" + t)
			},
			getNewsFor: function(e, t) {
				var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2],
					s = arguments.length <= 3 || void 0 === arguments[3] ? 1 : arguments[3],
					a = arguments.length <= 4 || void 0 === arguments[4] ? "n10000" : arguments[4];
				return i.get(r + "/geninfo/v1.0/news/list/" + a + "/" + e + "/" + t + "?&num=" + n + "&start=" + s)
			}
		});
	t.
default = l, e.exports = t.
default
}, function(e, t, n) {
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
	var s = n(7),
		a = i(s),
		o = window.require("hippo/lib/react"),
		r = (window.require("hippo/AppDispatcher"), window.require("hippo/lib/jquery")),
		l = (window.require("hippo/lib/underscore"), window.require("hippo/Scrollbar")),
		c = window.require("hippo/PluginStore"),
		d = o.createClass({
			displayName: "StockNewsListHead",
			getDefaultProps: function() {
				return {
					head: [{
						name: "分类资讯",
						ID: "classifynews"
					}, {
						name: "自选股",
						ID: "selfnews"
					}],
					indexState: "classifynews"
				}
			},
			getInitialState: function() {
				return {
					selectedid: "classifynews"
				}
			},
			onClick: function(e) {
				this.setState({
					selectedid: e.ID
				}), this.props.changeId(e.ID)
			},
			render: function() {
				return o.createElement("div", {
					className: "master_head"
				}, o.createElement("div", {
					className: "classifynews_tab"
				}, o.createElement("div", {
					id: this.props.head[0].ID,
					onClick: this.onClick.bind(this, this.props.head[0]),
					className: "classifynews" == this.state.selectedid ? "tab_active" : "tab_div"
				}, o.createElement("p", null, this.props.head[0].name))), o.createElement("div", {
					className: "selfnews_tab"
				}, o.createElement("div", {
					id: this.props.head[1].ID,
					onClick: this.onClick.bind(this, this.props.head[1]),
					className: "selfnews" == this.state.selectedid ? "tab_active" : "tab_div"
				}, o.createElement("p", null, this.props.head[1].name))))
			}
		}),
		u = o.createClass({
			displayName: "StockNewsListBtn",
			getInitialState: function() {
				return {
					start: 1,
					selectedid: null,
					selectedname: null,
					newsdata: [],
					data: [],
					styleofyjbg: {
						display: "none"
					},
					styleofgfbg: {
						display: "none"
					},
					yjbg: 0,
					gfbg: 0,
					switchul: {
						display: "block"
					},
					loading: "loading...",
					news: [],
					mystocklist: []
				}
			},
			getDefaultProps: function() {
				return {
					newsbtnclassify: [{
						name: "国内财经",
						id: "n10310"
					}, {
						name: "国际财经",
						id: "n10311"
					}, {
						name: "宏观新闻",
						id: "n10313"
					}, {
						name: "市场新闻",
						id: "n10317"
					}, {
						name: "板块新闻",
						id: "n10322"
					}, {
						name: "交易提示",
						id: "n10301"
					}, {
						name: "最新公告",
						id: "n13000"
					}, {
						name: "广发资讯",
						id: "gfbg",
						children: [{
							id: "n11101",
							name: "投资速递"
						}]
					}]
				}
			},
			ShowNews: function(e) {
				for (var t = this, n = 0; n < this.state.newsdata.length; n++) if (this.state.newsdata[n].id == e) {
					a.
				default.getDetail(this.state.newsdata[n].category[0], e).then(function(e) {
						t.props.changeData(e)
					});
					break
				}
			},
			ShowMyStocksNews: function(e) {
				var t = this;
				a.
			default.getDetail(e.category[0], e.id).then(function(e) {
					t.props.changeData(e)
				})
			},
			LoadMore: function() {
				var e = this,
					t = this;
				this.state.selectedid && a.
			default.getList(this.state.selectedid, 1, ++this.state.start).then(function(n) {
					var i = t.state.news,
						s = t.state.newsdata,
						a = new Date(n.data[0].publishAt),
						r = o.createElement("li", {
							onClick: t.ShowNews.bind(e, n.data[0].id)
						}, o.createElement("p", null, n.data[0].title), o.createElement("time", null, a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate()));
					i.push(r), s.push(n.data[0]), t.setState({
						news: i,
						newsdata: s
					})
				})
			},
			LoadNews: function(e) {
				var t = this;
				a.
			default.getList(e, 12, this.state.start).then(function(e) {
					for (var n = (e.data[0].abst, []), i = 0; i < e.data.length; i++) {
						var s = new Date(e.data[i].publishAt),
							r = o.createElement("li", {
								onClick: t.ShowNews.bind(t, e.data[i].id)
							}, o.createElement("p", null, e.data[i].title), o.createElement("time", null, s.getFullYear() + "-" + (s.getMonth() + 1) + "-" + s.getDate()));
						n.push(r)
					}
					t.setState({
						loading: null,
						news: n,
						newsdata: e.data
					}), a.
				default.getDetail(e.data[0].category[0], e.data[0].id).then(function(e) {
						t.props.changeData(e)
					})
				})
			},
			ChangeList: function(e, t) {
				this.setState({
					selectedid: e,
					selectedname: t,
					styleoflist: {
						display: "none"
					}
				}), this.LoadNews(e)
			},
			onClick: function(e) {
				switch (e.currentTarget.id) {
				case "yjbg":
					this.setState({
						styleofgfbg: {
							display: "none"
						},
						gfbg: 0
					}), this.state.yjbg ? this.setState({
						styleofyjbg: {
							display: "none"
						},
						yjbg: 0
					}) : this.setState({
						styleofyjbg: {
							display: "block"
						},
						yjbg: 1
					});
					break;
				case "gfbg":
					this.setState({
						styleofyjbg: {
							display: "none"
						},
						yjbg: 0
					}), this.state.gfbg ? this.setState({
						styleofgfbg: {
							display: "none"
						},
						gfbg: 0
					}) : this.setState({
						styleofgfbg: {
							display: "block"
						},
						gfbg: 1
					});
					break;
				case null:
					break;
				default:
					this.ChangeList(e.target.id, e.target.innerText)
				}
			},
			Createli: function(e) {
				for (var t = void 0, n = 0; n < this.props.newsbtnclassify.length; n++)"yjbg" == this.props.newsbtnclassify[n].id ? (t = o.createElement("li", {
					id: this.props.newsbtnclassify[n].id,
					onClick: this.onClick
				}, o.createElement("span", {
					className: this.state.yjbg ? "toggle_up" : "toggle_down",
					onClick: this.onClick
				}), this.props.newsbtnclassify[n].name, o.createElement("div", null)), e.push(t), e.push(o.createElement(p, {
					obj: this.props.newsbtnclassify[n],
					stylecol: this.state.styleofyjbg,
					loadnews: this.ChangeList
				}))) : "gfbg" == this.props.newsbtnclassify[n].id ? (t = o.createElement("li", {
					id: this.props.newsbtnclassify[n].id,
					onClick: this.onClick
				}, o.createElement("span", {
					className: this.state.gfbg ? "toggle_up" : "toggle_down",
					onClick: this.onClick
				}), this.props.newsbtnclassify[n].name, o.createElement("div", null)), e.push(t), e.push(o.createElement(p, {
					obj: this.props.newsbtnclassify[n],
					stylecol: this.state.styleofgfbg,
					loadnews: this.ChangeList
				}))) : (t = o.createElement("li", {
					id: this.props.newsbtnclassify[n].id,
					onClick: this.onClick
				}, this.props.newsbtnclassify[n].name), e.push(t))
			},
			getSelfNews: function(e) {
				var t = this,
					n = this.state.mystocklist,
					i = 0,
					s = this,
					r = c.getAPI("MyStock:getList")();
				r.length || this.setState({
					mystocklist: o.createElement("li", null, o.createElement("p", null, "请添加自选股"))
				});
				for (var l = 0; l < e; l++) {
					var d = this.myStockNewsCounts % r.length,
						u = r[d].market,
						p = r[d].code,
						h = parseInt(this.myStockNewsCounts / r.length) + 1;
					this.myStockNewsCounts++, a.
				default.getNewsFor(u, p, 1, h).then(function(e) {
						var a = e.data[0],
							o = s.createNewsItem(a);
						i++, n.push(o), t.setState({
							mystocklist: n
						})
					}, function(e) {
						i++, t.setState({
							mystocklist: n
						})
					})
				}
			},
			createNewsItem: function(e) {
				if (e) {
					var t = new Date(e.publishAt),
						n = o.createElement("li", {
							onClick: this.ShowMyStocksNews.bind(this, e)
						}, o.createElement("p", null, e.title), o.createElement("time", null, t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()));
					return n
				}
			},
			CreateList: function() {
				var e = [];
				return this.Createli(e), e
			},
			goBack: function() {
				this.setState({
					switchul: {
						display: "block"
					},
					selectedname: null,
					selectedid: null,
					start: 1
				})
			},
			CreateListBtn: function() {
				return o.createElement("div", {
					key: "newsitems",
					className: "newsitems"
				}, o.createElement("div", {
					className: "goback"
				}, o.createElement("p", null, this.state.selectedname), o.createElement("span", {
					onClick: this.goBack
				}, "返回")), o.createElement("ul", null, this.state.news), o.createElement("div", {
					className: "loadmore",
					onClick: this.LoadMore
				}, "加载更多"))
			},
			componentWillReceiveProps: function(e, t) {
				e.indexState != this.props.indexState && (this.props.indexState = e.indexState, this.createContent())
			},
			createContent: function() {
				"selfnews" == this.props.indexState && (this.myStockNewsCounts = 0, this.getSelfNews(1 == this.frist ? 0 : 8), this.frist = 1)
			},
			render: function() {
				var e = [];
				return "selfnews" != this.props.indexState && (this.state.selectedid ? e = this.CreateListBtn() : (e = this.CreateList(), e = o.createElement("ul", {
					className: "mainlist",
					style: this.state.switchul
				}, e))), o.createElement("div", {
					key: "newsbtn",
					className: "newsbtn"
				}, "selfnews" != this.props.indexState ? e : o.createElement("div", {
					className: "newsitems"
				}, o.createElement("ul", {
					className: "mainlist",
					style: this.state.switchul
				}, this.state.mystocklist), o.createElement("div", {
					className: "loadmore",
					onClick: this.getSelfNews.bind(this, 8)
				}, "加载更多")))
			},
			showFristOneNews: function() {
				var e = this;
				a.
			default.getList("n11101", 12, 1).then(function(t) {
					var n = (t.data[0].abst, Math.random()),
						i = t.data.length,
						s = Math.round(n * i);
					a.
				default.getDetail(t.data[s].category[0], t.data[s].id).then(function(t) {
						e.props.changeData(t)
					})
				})
			},
			componentDidMount: function() {
				this.showFristOneNews(), this.myStockNewsCounts = 0, this.scrollbar = new l(r(".newsbtn")), this.resizeScrollbar()
			},
			resizeScrollbar: function() {
				var e = r(".newsbtn");
				this.scrollbar.setDimension(e.height(), e.find(".newsitems").height())
			},
			componentDidUpdate: function(e, t) {
				this.resizeScrollbar()
			},
			componentwillUnMount: function() {
				this.scrollbar.destroy()
			}
		}),
		p = o.createClass({
			displayName: "ChildrenList",
			getInitialState: function() {
				return {}
			},
			onClick: function(e) {
				this.props.loadnews(e.id, e.name)
			},
			render: function() {
				for (var e = [], t = 0; t < this.props.obj.children.length; t++) {
					var n = o.createElement("li", {
						key: this.props.obj.children[t].id,
						onClick: this.onClick.bind(this, this.props.obj.children[t])
					}, o.createElement("p", null, this.props.obj.children[t].name));
					e.push(n)
				}
				return o.createElement("ul", {
					className: this.props.obj.id,
					style: this.props.stylecol
				}, e)
			}
		}),
		h = o.createClass({
			displayName: "StockNewsList",
			getInitialState: function() {
				return {
					selectedid: "StockNewsList"
				}
			},
			getDefaultProps: function() {
				return {}
			},
			changeId: function(e) {
				this.setState({
					selectedid: e
				})
			},
			render: function() {
				return o.createElement("div", {
					className: "master"
				}, o.createElement(d, {
					changeId: this.changeId
				}), o.createElement(u, {
					changeData: this.props.changeData,
					indexState: this.state.selectedid
				}))
			}
		});
	t.
default = h, e.exports = t.
default
}, function(e, t, n) {
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
	var s = n(7),
		a = (i(s), window.require("hippo/lib/react")),
		o = window.require("hippo/lib/jquery"),
		r = window.require("hippo/Scrollbar"),
		l = a.createClass({
			displayName: "StockNewsDetailFont",
			getInitialState: function() {
				return {
					font: "fontlittle"
				}
			},
			onClick: function(e) {
				this.setState({
					font: e.target.id
				}), this.props.fontsize(e.target.id)
			},
			render: function() {
				return a.createElement("div", {
					className: "detailhead"
				}, a.createElement("div", null, a.createElement("p", null, "字体:"), a.createElement("span", {
					className: "fontlittle" == this.state.font ? "span_active" : "spanfont",
					id: "fontlittle",
					onClick: this.onClick
				}, "小"), a.createElement("span", {
					className: "fontmid" == this.state.font ? "span_active" : "spanfont",
					id: "fontmid",
					onClick: this.onClick
				}, "中"), a.createElement("span", {
					className: "fontbig" == this.state.font ? "span_active" : "spanfont",
					id: "fontbig",
					onClick: this.onClick
				}, "大")))
			}
		}),
		c = a.createClass({
			displayName: "StockNewsDetailConstants",
			getInitialState: function() {
				return {
					page: null
				}
			},
			getDefaultProps: function() {
				return {}
			},
			ShowForm: function() {
				var e = this.props.newsData.publishAt,
					t = e ? new Date(e) : new Date,
					n = t.getFullYear(),
					i = t.getMonth() + 1,
					s = t.getDate(),
					o = a.createElement("div", {
						className: "news_page"
					}, a.createElement("header", null, a.createElement("h2", null, this.props.newsData.title ? this.props.newsData.title : "-"), a.createElement("small", null, this.props.newsData.media ? a.createElement("span", null, "来源：", this.props.newsData.media) : null, " ", a.createElement("span", null, n, "-", i, "-", s))), a.createElement("article", {
						className: this.props.fontsize
					}, this.props.newsData.content), a.createElement("footer", {
						className: this.props.fontsize
					}, a.createElement("p", null, "【重要声明】：本公司所提供的公司公告、个股资料、投资咨询建议、研究报告、策略报告等信息仅供参考，并不构成所述证券买卖的出价或询价，投资者使用前请予以核实，风险自负。对于转载的外部资讯仅供参考，不代表广发证券股份有限公司对其内容的认可或推荐，不构成广发证券股份有限公司做出的投资建议或对任何证券投资价值观点的认可。本公司所提供的上述信息，力求但不保证数据的准确性和完整性，不保证已做最新变更，请以上市公司公告信息为准。投资者应当自主进行投资决策，对投资者因依赖上述信息进行投资决策而导致的财产损失，本公司不承担法律责任。未经本公司同意，任何机构或个人不得对本公司提供的上述信息进行任何形式的转载、发布、复制或进行有悖原意的删节和修改。")));
				return o
			},
			render: function() {
				return a.createElement("div", {
					className: "detailconstants"
				}, this.ShowForm())
			},
			componentDidMount: function() {
				this.scrollbar = new r(o(".detailconstants")), this.resizeScrollbar()
			},
			resizeScrollbar: function() {
				var e = o(".detailconstants");
				this.scrollbar.setDimension(e.height(), e.find(".news_page").height())
			},
			componentDidUpdate: function(e, t) {
				this.resizeScrollbar()
			},
			componentwillUnMount: function() {
				this.scrollbar.destroy()
			}
		}),
		d = a.createClass({
			displayName: "StockNewsDetail",
			getInitialState: function() {
				return {
					fontsize: "fontlittle"
				}
			},
			changeFontsize: function(e) {
				this.setState({
					fontsize: e
				})
			},
			render: function() {
				return a.createElement("div", {
					className: "StockNewsDetail"
				}, a.createElement(l, {
					fontsize: this.changeFontsize
				}), a.createElement(c, {
					newsData: this.props.newsData,
					fontsize: this.state.fontsize
				}))
			}
		});
	t.
default = d, e.exports = t.
default
}, function(e, t, n) {
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
	var s = function() {
			function e(e, t) {
				var n = [],
					i = !0,
					s = !1,
					a = void 0;
				try {
					for (var o, r = e[Symbol.iterator](); !(i = (o = r.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
				} catch (e) {
					s = !0, a = e
				} finally {
					try {
						!i && r.
						return &&r.
						return ()
					} finally {
						if (s) throw a
					}
				}
				return n
			}
			return function(t, n) {
				if (Array.isArray(t)) return t;
				if (Symbol.iterator in Object(t)) return e(t, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		a = n(7),
		o = i(a),
		r = window.require("hippo/lib/jquery"),
		l = (window.require("hippo/lib/underscore"), window.require("hippo/lib/react")),
		c = (window.require("hippo/AppDispatcher"), window.require("hippo/mixins/ScrollbarMixin")),
		d = window.require("hippo/utils"),
		u = d.Proxy,
		p = d.Event,
		h = window.require("hippo/when"),
		f = l.createClass({
			displayName: "NewsList",
			mixins: [c],
			getInitialState: function() {
				var e = this;
				return this.pagingProxy = new u, this.pagingProxy.implements({
					hasPrev: function(t, n) {
						return 0 != e.getIdx(n)
					},
					hasNext: function(t, n) {
						return e.getIdx(n) != e.state.data.length - 1
					},
					getPrev: function(t, n) {
						return e.state.data[e.getIdx(n) - 1]
					},
					getNext: function(t, n) {
						return e.state.data[e.getIdx(n) + 1]
					}
				}), {
					data: []
				}
			},
			getIdx: function(e) {
				var t = -1,
					n = this.state.data;
				return n.some(function(n, i) {
					if (n.id == e) return t = i, !0
				}), t
			},
			componentDidMount: function() {
				var e = this.props,
					t = e.market,
					n = e.code;
				t && n && this.loadNews(t, n)
			},
			loadNews: function(e, t) {
				var n = this;
				h.all([o.
			default.getNewsFor(e, t, 5, 0, "n10000"), o.
			default.getNewsFor(e, t, 5, 0, "n13000")]).then(function(e) {
					var t = s(e, 2),
						i = t[0],
						a = t[1],
						o = i.data.concat(a.data);
					o.sort(function(e, t) {
						return e.publishAt > t.publishAt ? -1 : 1
					}), n.setState({
						data: o
					})
				})
			},
			componentWillReceiveProps: function(e) {
				var t = this.props,
					n = t.market,
					i = t.code;
				e.market == n && e.code == i || (this.loadNews(e.market, e.code), this.openNews())
			},
			onOpenNews: function(e) {
				var t = r(e.target).closest("li");
				t.length && this.openNews("n10000", t.attr("data-id"))
			},
			openNews: function(e, t) {
				p.bubble(this.getDOMNode(), {
					type: "OPEN_NEWS",
					catId: e,
					id: t,
					proxy: this.pagingProxy
				})
			},
			render: function() {
				var e = this.state.data || [],
					t = e.map(function(e) {
						var t = new Date(e.publishAt),
							n = t.getMonth() + 1,
							i = t.getDate(),
							s = (n < 10 ? "0" + n : n) + "-" + (i < 10 ? "0" + i : i);
						return l.createElement("li", {
							"data-id": e.id,
							key: e.id
						}, l.createElement("span", {
							className: "title"
						}, e.title), l.createElement("span", {
							className: "time"
						}, s))
					});
				return l.createElement("div", {
					className: "StockNews-NewsList"
				}, l.createElement("ul", {
					onClick: this.onOpenNews
				}, t))
			}
		});
	t.
default = f, e.exports = t.
default
}, function(e, t, n) {
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
	var s = n(7),
		a = i(s),
		o = (window.require("hippo/lib/jquery"), window.require("hippo/lib/underscore"), window.require("hippo/lib/react")),
		r = (window.require("hippo/AppDispatcher"), window.require("hippo/mixins/ScrollbarMixin")),
		l = window.require("hippo/utils"),
		c = l.getIcon,
		d = o.createClass({
			displayName: "DetailContent",
			mixins: [r],
			componentWillReceiveProps: function() {
				this.resetScroll()
			},
			render: function() {
				var e = "content",
					t = this.props.data;
				if (!t) return o.createElement("div", {
					className: e
				});
				var n = new Date(t.publishAt),
					i = n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate();
				return o.createElement("div", {
					className: e
				}, o.createElement("hgroup", null, o.createElement("h1", null, t.title), o.createElement("h2", null, o.createElement("span", {
					className: "from"
				}, "来源：", t.media), " ", o.createElement("span", {
					className: "publish_time"
				}, i))), o.createElement("pre", {
					dangerouslySetInnerHTML: {
						__html: t.content
					}
				}))
			}
		}),
		u = o.createClass({
			displayName: "NewsDetail",
			getInitialState: function() {
				return {}
			},
			componentDidUpdate: function(e, t) {
				var n = this.state,
					i = n.catId,
					s = n.id;
				t.catId == i && t.id == s || this._loadNews(i, s)
			},
			componentDidMount: function() {
				this.loadNews(this.props.catId, this.props.id)
			},
			loadNews: function(e, t) {
				this.setState({
					id: t,
					catId: e
				})
			},
			_loadNews: function(e, t) {
				var n = this;
				a.
			default.getDetail(e, t).then(function(i) {
					e == n.state.catId && t == n.state.id && n.setState({
						data: i
					})
				})
			},
			hasPrev: function() {
				var e = this.state,
					t = e.catId,
					n = e.id;
				return this.props.proxy.call("hasPrev", t, n)
			},
			hasNext: function() {
				var e = this.state,
					t = e.catId,
					n = e.id;
				return this.props.proxy.call("hasNext", t, n)
			},
			prevPage: function() {
				var e = this.state,
					t = e.catId,
					n = e.id,
					i = this.props.proxy.call("getPrev", t, n);
				i && this.loadNews(t, i.id)
			},
			nextPage: function() {
				var e = this.state,
					t = e.catId,
					n = e.id,
					i = this.props.proxy.call("getNext", t, n);
				i && this.loadNews(t, i.id)
			},
			render: function() {
				var e;
				this.props.closeHandler && (e = o.createElement("i", {
					className: "ico close right",
					onClick: this.props.closeHandler
				}, c("cross")));
				var t = this.hasPrev(),
					n = this.hasNext();
				return o.createElement("div", {
					className: "StockNews-NewsDetail"
				}, o.createElement("div", {
					className: "toolbar"
				}, o.createElement("i", {
					className: "ico prev" + (t ? "" : " disabled"),
					onClick: this.prevPage
				}, c("arrow_l"), o.createElement("span", null, "上一篇")), o.createElement("i", {
					className: "ico sep"
				}), o.createElement("i", {
					className: "ico next" + (n ? "" : " disabled"),
					onClick: this.nextPage
				}, o.createElement("span", null, "下一篇"), c("arrow_r")), e), o.createElement(d, {
					data: this.state.data
				}))
			}
		});
	t.
default = u, e.exports = t.
default
}, function(e, t, n) {
	var i = n(13);
	"string" == typeof i && (i = [
		[e.id, i, ""]
	]);
	n(17)(i, {});
	i.locals && (e.exports = i.locals)
}, function(e, t, n) {
	t = e.exports = n(14)(), t.push([e.id, '.StockNews-NewsList{position:relative;overflow:hidden;width:100%;height:100%}.StockNews-NewsList ul li{height:28px;line-height:28px;font-size:14px;display:-ms-flexbox;display:flex;text-indent:0}.StockNews-NewsList ul li span{display:inline-block}.StockNews-NewsList ul li span.title{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;-ms-flex:1;flex:1}.StockNews-NewsList ul li span.time{color:#666;text-align:right;min-width:30px;margin:0 10px}.StockNews-NewsList ul li:hover .title{color:#5a9afc}.StockNews-NewsList ul li:before{content:"\\2022";color:#666;margin:0 8px 0 12px}.StockNews-NewsList .Scrollbar{opacity:0}.StockNews-NewsList:hover .Scrollbar{opacity:1}.StockNews-NewsDetail{position:relative;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;z-index:4}.StockNews-NewsDetail .toolbar{height:40px;min-height:40px;line-height:40px}.StockNews-NewsDetail .toolbar i.ico.next,.StockNews-NewsDetail .toolbar i.ico.prev{width:auto;height:auto;cursor:pointer}.StockNews-NewsDetail .toolbar i.ico.next svg,.StockNews-NewsDetail .toolbar i.ico.prev svg{width:18px;height:18px;padding:3px;vertical-align:middle}.StockNews-NewsDetail .toolbar i.ico.close{margin-right:10px;width:12px;height:12px;cursor:pointer;line-height:normal;margin-top:14px}.StockNews-NewsDetail .toolbar a.ico.disabled,.StockNews-NewsDetail .toolbar i.ico.disabled{cursor:default}.StockNews-NewsDetail .content{-ms-flex:1;flex:1;padding:0 2em;overflow:hidden;position:relative}.StockNews-NewsDetail .content hgroup{margin-top:4em;margin-bottom:1.5em;text-align:center}.StockNews-NewsDetail .content hgroup h1{font-size:1.5em;font-weight:400}.StockNews-NewsDetail .content hgroup h2{margin-top:.5em;font-size:.9em;font-weight:400}.StockNews-NewsDetail .content pre{line-height:2em;white-space:pre-wrap;word-break:break-all;word-wrap:break-word}.StockNews-NewsDetail .content .Scrollbar{opacity:0}.StockNews-NewsDetail .content:hover .Scrollbar{opacity:1}.StockNews{height:100%;width:100%;margin-right:5px;background-color:#131c29}.StockNews .master{float:left;height:100%;width:26%;background-color:#21223f}.StockNews .master p{margin:0}.StockNews .master .master_head{height:35px;width:100%;margin-top:1px;cursor:pointer;margin-bottom:1px}.StockNews .master .master_head p{margin:0}.StockNews .master .master_head .tab_active{border-bottom:2px solid #0099d5;color:#fff;cursor:default}.StockNews .master .master_head .classifynews_tab div,.StockNews .master .master_head .selfnews_tab div,.StockNews .master .master_head .tab_div{height:100%;text-align:center;color:#599afc;background-color:#292a48;line-height:35px}.StockNews .master .master_head .classifynews_tab div:hover,.StockNews .master .master_head .selfnews_tab div:hover,.StockNews .master .master_head .tab_div:hover{color:#fff;background-color:#08c}.StockNews .master .master_head .classifynews_tab{width:50%;float:left;color:#599afc;height:100%}.StockNews .master .master_head .selfnews_tab{width:49.7%;float:right;height:100%}.StockNews .master .newsbtn>ul>li{cursor:pointer;height:35px;border-bottom:1px solid #2e2b3e;color:#fff;line-height:35px;padding-left:10px}.StockNews .master .newsbtn>ul>li:hover{background-color:#2e2b3e}.StockNews .master .newsbtn{clear:both;width:100%;height:94%;position:relative;overflow:hidden;background-color:#3a3c5c}.StockNews .master .newsbtn .mainlist{clear:both}.StockNews .master .newsbtn .mainlist #gfbg,.StockNews .master .newsbtn .mainlist #yjbg{position:relative}.StockNews .master .newsbtn .mainlist #gfbg .toggle_down,.StockNews .master .newsbtn .mainlist #gfbg .toggle_down:hover,.StockNews .master .newsbtn .mainlist #gfbg .toggle_up,.StockNews .master .newsbtn .mainlist #gfbg .toggle_up:hover,.StockNews .master .newsbtn .mainlist #yjbg .toggle_down,.StockNews .master .newsbtn .mainlist #yjbg .toggle_down:hover,.StockNews .master .newsbtn .mainlist #yjbg .toggle_up,.StockNews .master .newsbtn .mainlist #yjbg .toggle_up:hover{height:20px;width:20px;position:absolute;top:14px;right:30px}.StockNews .master .newsbtn .mainlist #gfbg .toggle_down,.StockNews .master .newsbtn .mainlist #yjbg .toggle_down{background-image:url(' + n(15) + ");background-position:0 0;width:10px;height:6px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.StockNews .master .newsbtn .mainlist #gfbg .toggle_down,.StockNews .master .newsbtn .mainlist #yjbg .toggle_down{background-image:url(" + n(16) + ");background-size:25px 6px}}.StockNews .master .newsbtn .mainlist #gfbg .toggle_up,.StockNews .master .newsbtn .mainlist #yjbg .toggle_up{background-image:url(" + n(15) + ");background-position:-15px 0;width:10px;height:6px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.StockNews .master .newsbtn .mainlist #gfbg .toggle_up,.StockNews .master .newsbtn .mainlist #yjbg .toggle_up{background-image:url(" + n(16) + ");background-size:25px 6px}}.StockNews .master .newsbtn .mainlist .gfbg li,.StockNews .master .newsbtn .mainlist .yjbg li{cursor:pointer;color:#599afc;height:35px;border-bottom:1px solid #21344c;line-height:35px;padding-left:2em;background-color:#1e2b3c}.StockNews .master .newsbtn .mainlist .gfbg li p,.StockNews .master .newsbtn .mainlist .yjbg li p{margin:0}.StockNews .master .newsbtn .mainlist .gfbg li:hover,.StockNews .master .newsbtn .mainlist .yjbg li:hover{background-color:#131c29}.StockNews .master .newsbtn .mainlist div{float:right}.StockNews .master .newsbtn .goback{height:35px;line-height:35px;padding-left:10px;color:#fff;font-size:14px;border-bottom:1px solid #2e2b3e}.StockNews .master .newsbtn .goback p{display:inline-block}.StockNews .master .newsbtn .goback span{float:right;margin-right:2em;color:#599afc;cursor:pointer}.StockNews .master .newsbtn .newsitems ul li{min-height:40px;color:#fff;padding-right:10px;cursor:pointer;font-size:12px;line-height:20px;border-bottom:1px solid #2e2b3e;padding:1em}.StockNews .master .newsbtn .newsitems ul li time{color:#a2a2a2}.StockNews .master .newsbtn .newsitems .loadmore{text-align:center;height:35px;line-height:35px;color:#599afc;cursor:pointer;background-color:#21223f}.StockNews .StockNewsDetail{float:right;height:100%;width:74%;background-color:#2e2b3e}.StockNews .StockNewsDetail .detailhead{height:35px;margin-top:1px;margin-left:2px;background-color:#292a48;color:#599afc;line-height:35px}.StockNews .StockNewsDetail .detailhead p{display:inline;padding-left:1em;padding-right:.5em}.StockNews .StockNewsDetail .detailhead .fontbtn,.StockNews .StockNewsDetail .detailhead .span_active,.StockNews .StockNewsDetail .detailhead .spanfont{margin-right:7px;text-align:center;line-height:24px;cursor:pointer;display:inline-block;height:24px;width:24px}.StockNews .StockNewsDetail .detailhead .span_active,.StockNews .StockNewsDetail .detailhead .spanfont:hover{color:#fff;background-color:#599afc;border-radius:3px}.StockNews .StockNewsDetail .fontlittle{font-size:1em;overflow:hidden}.StockNews .StockNewsDetail .fontmid{font-size:1.3em}.StockNews .StockNewsDetail .fontbig{font-size:1.5em}.StockNews .StockNewsDetail .detailconstants{margin-top:2px;margin-left:2px;height:94%;position:relative;overflow:hidden}.StockNews .StockNewsDetail .detailconstants .news_page header{text-align:center;height:5.9em;background-color:#3a3c5c}.StockNews .StockNewsDetail .detailconstants .news_page header h2{color:#fff;line-height:2.5em}.StockNews .StockNewsDetail .detailconstants .news_page header small{color:#599afc}.StockNews .StockNewsDetail .detailconstants .news_page article{height:85%;text-indent:2em;margin:1em 2em;color:#c7ced8;line-height:2em}.StockNews .StockNewsDetail .detailconstants .news_page footer{font-size:13px;margin:28px;text-align:left;color:#eee;line-height:20px}", ""])
}, function(e, t) {
	e.exports = function() {
		var e = [];
		return e.toString = function() {
			for (var e = [], t = 0; t < this.length; t++) {
				var n = this[t];
				n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
			}
			return e.join("")
		}, e.i = function(t, n) {
			"string" == typeof t && (t = [
				[null, t, ""]
			]);
			for (var i = {}, s = 0; s < this.length; s++) {
				var a = this[s][0];
				"number" == typeof a && (i[a] = !0)
			}
			for (s = 0; s < t.length; s++) {
				var o = t[s];
				"number" == typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
			}
		}, e
	}
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAGCAYAAAA2aTUtAAAAAklEQVR4AewaftIAAAEiSURBVH3BMWoUUQAA0JcMWGxj9UH7gHywsgkIwkQWzKBsYbAJnzRR8BbDHMHKfmGCsKJsTPhYyTTxCIMHCFhMI4Q0yxIDu4VF3Pe2Yp1/4xve90219I9Y5wIfMemb6oENYp3v47uVF31T/bG2jQu8xTTWubAW61xgine4sEGs8wgZu9hFjnUeWStCmb7iCQ6wE8o0D2XaxhSHOMeboWuX7hDrPMIZnuEUvzDG01Cm2dC1iy23Yp1HOMMeTq1M8AOv+qa6dodY53v4gpc4wZGVKQ5xjteFW0PXLkKZZniOMR7hJ/b7prr2H6FMM0xwgqO+qZZD196EMs2xgwM8LqwNXbsIZfqMPVxiv2+qKxuEMn3AJxz3TbW0NnTtTSjTHA8x/gt3v19DrapJSgAAAABJRU5ErkJggg=="
}, function(e, t) {
	e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAMCAYAAAAgT+5sAAAAAklEQVR4AewaftIAAAKFSURBVK3BP2sfZQAA4CcJzfADI2LOwQSlWNRXaFEEKx3s1bbWkwT8U+1ydungIB38BC/3CVx0cBPlBk1iKwbeUlvS06VmcKlwHXTSCuKhGKRVY8HAr3ARk7YmfZ6RENPbeBMf4I22Kq77H0JMY3gPx/FuWxVvuQNCTHuxgBG83FbFV25iFCexAycwH2Iad5tCTOOYwwnswEl3QIhpD85iCvfjbIhpj5sYxTm9FzEfYhp3CyGmcczjJb1ztinEtBvnMaE3gfMhpt02MYpjWNabxUKIaWATIaYBFjCrt4xjtiHEtAsJk/5rEmdCTLtsYKxr6j+zvDyFF3CfoYexL8vLua6pV60TYhpgEUf0vsHhtip+tUUhpgfwJab0lnEFU4buwitZXi50Tf2bdcas6Zr6WpaX85jFpKGd2Jfl5VzX1KvWhJgGWMQBvcvI26robFGIaRpLeFDvIo7gQ+SYNjSB2SwvP+maesUNI9YJMU3jAh7Su4jnDZ3B03rfIW+r4gdbFGLK8AUe1VvCTFsVV60JMQ2wiAN6l/FMWxU/WzNmna6pV7K8PI3XMGFoGs/idezVu4L9bVV8b4tCTPdiCY/pLWGmrYqrbuiaejXLyznsw05DkyiyvPy4a+prIzYQYtqFC5iysR+xv62Kb21RiOlunMVTeos41lbFVRsIMQ3wEWb0lvHcmA10Tf1Llpef41UM/FuHw21VXLYNWV5+iv16n+FoWxV/2ETX1KtZXi7gcTxiaApPjNpEWxWXcBAreis42FbFJdt3SO80jrZV8ZdbaKviLxzFKb1DY26ia+qfsrxcQoHfMdNWxdfugCwv78GTeB/H26r4223qmvp6lpfzmMJuvPMP6dbWGi/PaFUAAAAASUVORK5CYII="
}, function(e, t, n) {
	function i(e, t) {
		for (var n = 0; n < e.length; n++) {
			var i = e[n],
				s = u[i.id];
			if (s) {
				s.refs++;
				for (var a = 0; a < s.parts.length; a++) s.parts[a](i.parts[a]);
				for (; a < i.parts.length; a++) s.parts.push(r(i.parts[a], t))
			} else {
				for (var o = [], a = 0; a < i.parts.length; a++) o.push(r(i.parts[a], t));
				u[i.id] = {
					id: i.id,
					refs: 1,
					parts: o
				}
			}
		}
	}
	function s(e) {
		for (var t = [], n = {}, i = 0; i < e.length; i++) {
			var s = e[i],
				a = s[0],
				o = s[1],
				r = s[2],
				l = s[3],
				c = {
					css: o,
					media: r,
					sourceMap: l
				};
			n[a] ? n[a].parts.push(c) : t.push(n[a] = {
				id: a,
				parts: [c]
			})
		}
		return t
	}
	function a() {
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
		var n, i, s;
		if (t.singleton) {
			var r = g++;
			n = w || (w = a()), i = l.bind(null, n, r, !1), s = l.bind(null, n, r, !0)
		} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = o(), i = d.bind(null, n), s = function() {
			n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href)
		}) : (n = a(), i = c.bind(null, n), s = function() {
			n.parentNode.removeChild(n)
		});
		return i(e), function(t) {
			if (t) {
				if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
				i(e = t)
			} else s()
		}
	}
	function l(e, t, n, i) {
		var s = n ? "" : i.css;
		if (e.styleSheet) e.styleSheet.cssText = m(t, s);
		else {
			var a = document.createTextNode(s),
				o = e.childNodes;
			o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a)
		}
	}
	function c(e, t) {
		var n = t.css,
			i = t.media;
		t.sourceMap;
		if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
		else {
			for (; e.firstChild;) e.removeChild(e.firstChild);
			e.appendChild(document.createTextNode(n))
		}
	}
	function d(e, t) {
		var n = t.css,
			i = (t.media, t.sourceMap);
		i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
		var s = new Blob([n], {
			type: "text/css"
		}),
			a = e.href;
		e.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
	}
	var u = {},
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
		w = null,
		g = 0;
	e.exports = function(e, t) {
		t = t || {}, "undefined" == typeof t.singleton && (t.singleton = h());
		var n = s(e);
		return i(n, t), function(e) {
			for (var a = [], o = 0; o < n.length; o++) {
				var r = n[o],
					l = u[r.id];
				l.refs--, a.push(l)
			}
			if (e) {
				var c = s(e);
				i(c, t)
			}
			for (var o = 0; o < a.length; o++) {
				var l = a[o];
				if (0 === l.refs) {
					for (var d = 0; d < l.parts.length; d++) l.parts[d]();
					delete u[l.id]
				}
			}
		}
	};
	var m = function() {
			var e = [];
			return function(t, n) {
				return e[t] = n, e.filter(Boolean).join("\n")
			}
		}()
}]);