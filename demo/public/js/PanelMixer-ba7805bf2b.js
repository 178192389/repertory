!
function(e) {
	function t(i) {
		if (n[i]) return n[i].exports;
		var r = n[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
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
	var r = n(2),
		a = i(r),
		o = n(6),
		s = i(o),
		l = n(7),
		d = i(l),
		c = n(8),
		p = i(c),
		u = n(9),
		h = i(u),
		f = window.require("hippo/lib/react"),
		g = window.require("hippo/lib/underscore"),
		m = window.require("hippo/lib/jquery"),
		v = window.require("hippo/PluginStore"),
		w = window.require("hippo/ConfigStore"),
		x = window.require("hippo/mixins/PluginUpgradeMixin");
	n(10);
	var P = f.createClass({
		displayName: "TabBarItem",
		removePanel: function(e) {
			e.stopPropagation();
			var t = m(e.currentTarget).parent().index();
			d.
		default.removePanel(t)
		},
		render: function() {
			return f.createElement("div", {
				className: this.props.isActive ? "TabBarItem active" : "TabBarItem",
				onClick: this.props.onClick
			}, f.createElement("span", null, this.props.name), f.createElement("a", {
				className: "closeBtn",
				href: "javascript:;",
				onClick: this.removePanel
			}, "×"))
		}
	}),
		b = f.createClass({
			displayName: "PanelEditor",
			addWidget: function(e) {
				var t = m(e.currentTarget).data("id");
				this.props.addWidget(t)
			},
			exitEdit: function(e) {
				m.contains(e.currentTarget, e.relatedTarget) || this.props.exitEdit()
			},
			render: function() {
				var e = this,
					t = [];
				return v.getMetaOfType(1).forEach(function(n) {
					var i = n.unionId;
					t.push(f.createElement("li", {
						key: i,
						"data-id": i,
						onClick: e.addWidget
					}, f.createElement("a", {
						href: "javascript:;"
					}, n.title)))
				}), f.createElement("div", {
					className: "PanelEditor",
					onMouseLeave: this.exitEdit
				}, f.createElement("ul", null, t))
			}
		}),
		y = f.createClass({
			displayName: "PanelMixer",
			mixins: [x],
			getInitialState: function() {
				return g.extend({
					editMode: !1
				}, s.
			default.getConfig())
			},
			_onChange: function() {
				var e = g.extend({}, s.
			default.getConfig());
				this.state.curTab > e.tabs.length - 1 && setTimeout(function() {
					d.
				default.showPanel(0)
				}), this.setState(e)
			},
			_onPluginChange: function() {
				this.forceUpdate()
			},
			componentDidMount: function() {
				s.
			default.on("change", this._onChange), w.addChangeListener(this._onPluginChange), v.addChangeListener(this._onPluginChange)
			},
			componentWillUnmount: function() {
				s.
			default.removeListener("change", this._onChange), w.removeChangeListener(this._onPluginChange), v.removeChangeListener(this._onPluginChange)
			},
			showPreview: function(e, t, n) {
				if (!this.$preview) {
					var i = m(this.refs.root.getDOMNode());
					this.$preview = m('<div class="preview">'), i.append(this.$preview);
					var r = this.refs.contentsRoot.getDOMNode();
					this.previewDelta = {
						offsetX: i.offset().left,
						x: r.offsetLeft,
						y: r.offsetTop
					}
				}
				var a = this.getSuggestion(e.panelId, e.widgetId, t - this.previewDelta.offsetX, n - this.previewDelta.y);
				a ? this.$preview.show().css({
					left: a.x + this.previewDelta.x,
					top: a.y + this.previewDelta.y,
					width: a.width,
					height: a.height
				}) : this.$preview.hide(), this.pos = a
			},
			endPreview: function() {
				this.$preview && (this.$preview.remove(), this.$preview = null, this.pos = null)
			},
			getPreview: function() {
				return this.pos
			},
			getSuggestion: function(e, t, n, i) {
				var r = this.state.tabs[e].widgets,
					a = this.refs.contentsRoot.getDOMNode();
				if (!r.length) return {
					x: 0,
					y: 0,
					width: a.clientWidth,
					height: a.clientHeight
				};
				for (var o = 0, s = 0, l = a.clientWidth, d = a.clientHeight, c = 0; c < r.length; c++) if (c != t) {
					var p = r[c].state,
						u = n - p.left,
						h = p.left + p.width - n,
						f = i - p.top,
						g = p.top + p.height - i;
					if (h < 0 ? o = Math.max(o, p.left + p.width) : u < 0 ? l = Math.min(l, p.left) : g < 0 ? s = Math.max(s, p.top + p.height) : f < 0 && (d = Math.min(d, p.top)), u > 0 && h > 0 && f > 0 && g > 0) {
						u /= p.width, h /= p.width, f /= p.height, g /= p.height;
						var m, v;
						if (Math.min(u, h) < Math.min(f, g)) {
							var w = {
								x: p.left,
								y: p.top,
								width: p.width / 2,
								height: p.height
							},
								x = {
									x: p.left + p.width / 2,
									y: p.top,
									width: p.width / 2,
									height: p.height
								};
							u < h ? (m = w, v = x) : (m = x, v = w)
						} else {
							var P = {
								x: p.left,
								y: p.top,
								width: p.width,
								height: p.height / 2
							},
								b = {
									x: p.left,
									y: p.top + p.height / 2,
									width: p.width,
									height: p.height / 2
								};
							f < g ? (m = P, v = b) : (m = b, v = P)
						}
						if (m.width < 100 || m.height < 100) return;
						return v.panelId = e, v.widgetId = c, m.related = v, m
					}
				}
				return l - o < 100 || d - s < 100 ? void 0 : {
					x: o,
					y: s,
					width: l - o,
					height: d - s
				}
			},
			addTab: function() {
				d.
			default.addPanel(a.
			default.Lang("New Panel")), d.
			default.showPanel(this.state.tabs.length - 1)
			},
			editTab: function() {
				this.setState({
					editMode: !this.state.editMode
				})
			},
			showTab: function(e) {
				var t;
				t = "number" == typeof e ? e : m(e.currentTarget).index(), d.
			default.showPanel(t)
			},
			addWidget: function(e) {
				d.
			default.addWidget(this.state.curTab, e)
			},
			render: function() {
				var e, t = this,
					n = this.state.tabs,
					i = [];
				return e = n.map(function(e, n) {
					var r, a = e.widgets || [],
						o = n == t.state.curTab;
					if (r = a.map(function(e, i) {
						return f.createElement(p.
					default, {
							key: e.widgetId,
							isActive: o,
							showPreview: t.showPreview,
							endPreview: t.endPreview,
							getPreview: t.getPreview,
							panelId: n,
							widgetId: i,
							unionId: e.unionId,
							state: e.state
						})
					}), 0 == r.length) var s = f.createElement(h.
				default, null);
					return i.push(f.createElement("div", {
						key: n,
						className: o ? "TabContentItem active" : "TabContentItem"
					}, r, s)), f.createElement(P, {
						key: n,
						isActive: o,
						onClick: t.showTab,
						name: e.name
					})
				}), e.push(f.createElement("div", {
					key: "add",
					className: "TabBarItem add",
					onClick: this.addTab
				}, f.createElement("a", {
					href: "javascript:;"
				}, "+"))), e.push(f.createElement("div", {
					key: "edit",
					className: "TabBarItem edit",
					onClick: this.editTab
				}, f.createElement("a", {
					href: "javascript:;"
				}, a.
			default.Lang("Edit")))), f.createElement("div", {
					ref: "root",
					className: "PanelMixer Tabs",
					"data-editmode": this.state.editMode
				}, f.createElement("div", {
					className: "tabs"
				}, e), f.createElement("div", {
					ref: "contentsRoot",
					className: "contents"
				}, i), f.createElement(b, {
					addWidget: this.addWidget,
					exitEdit: this.editTab
				}))
			}
		});
	v.register({
		id: "PanelMixer",
		title: a.
	default.Lang("Panels"),
		preview:
		"./images/PanelMixer.svg"
	}, y)
}, function(e, t, n) {
	"use strict";
	var i = window.require("hippo/lib/underscore"),
		r = window.require("hippo/i18n"),
		a = r.lang(function(e) {
			return n(3)("./" + e)
		}),
		o = "PanelMixer";
	e.exports = {
		PluginId: o,
		ActionTypes: i.mapObject({
			ADD_PANEL_TASK: null,
			SHOW_PANEL_TASK: null,
			ADD_WIDGET_TASK: null,
			REMOVE_WIDGET_TASK: null,
			MOVE_WIDGET_TASK: null,
			ELEVATE_WIDGET_TASK: null,
			REMOVE_PANEL_TASK: null,
			CONFIG_WIDGET_TASK: null,
			PLUGIN_EVENT: null
		}, function(e, t) {
			return o + ":" + t
		}),
		Lang: a
	}
}, function(e, t, n) {
	function i(e) {
		return n(r(e))
	}
	function r(e) {
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
	}, i.resolve = r, e.exports = i, i.id = 3
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		"New Panel": "新面板",
		Edit: "编辑",
		Panels: "看板",
		Templates: "面板模版",
		"Stock Watch": "行情观察",
		"This requires the StockQuote plugin, install?": "这个面板需要安装行情插件，安装？"
	}, e.exports = t.
default
}, function(e, t) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
default = {
		"New Panel": "新面板",
		Edit: "編輯",
		Panels: "看板",
		Templates: "面板模版",
		"Stock Watch": "行情觀察",
		"This requires the StockQuote plugin, install?": "这个面板需要安装行情插件，安装？"
	}, e.exports = t.
default
}, function(e, t, n) {
	"use strict";
	var i = window.require("hippo/lib/underscore"),
		r = window.require("hippo/lib/events").EventEmitter,
		a = window.require("hippo/AppDispatcher"),
		o = window.require("hippo/PluginStore"),
		s = window.require("hippo/ConfigStore"),
		l = n(2),
		d = void 0,
		c = function(e) {
			return d[e]
		},
		p = function(e, t) {
			return c(e).widgets[t]
		},
		u = function(e, t) {
			var n = c(e);
			n.widgets.splice(t, 1), b()
		},
		h = function(e) {
			d.splice(e, 1), b()
		},
		f = function(e, t, n) {
			i.extend(p(e, t).state || {}, n), b()
		},
		g = function(e, t) {
			var n = c(e),
				r = p(e, t).state || {};
			if (r.zIndex != n.maxZIndex) {
				if (n.maxZIndex++, i.extend(r, {
					zIndex: n.maxZIndex
				}), n.maxZIndex > n.widgets.length + 1e4) {
					var a = n.widgets;
					a.map(function(e, t) {
						return [t, e.config.zIndex]
					}).sort(function(e, t) {
						return e[1] - t[1]
					}).forEach(function(e, t) {
						a[e[0]].state.zIndex = t
					}), n.maxZIndex = a.length
				}
				b()
			}
		},
		m = function(e) {
			d.push({
				name: e,
				maxZIndex: 0,
				widgets: []
			}), b()
		},
		v = function(e, t) {
			function n(t) {
				var n;
				"object" == typeof t && (n = t.state, t = t.unionId);
				var r = i.extend({}, o.getDefaultConfig(t), n);
				r.left || (r.left = 0), r.top || (r.top = 0);
				var a = c(e);
				a.maxZIndex++, r.zIndex || (r.zIndex = a.maxZIndex), a.widgets.push({
					unionId: t,
					widgetId: t + ":" + parseInt(100 * Math.random()),
					state: r
				})
			}
			e || (e = y), Array.isArray(t) ? t.forEach(n) : n(t), b()
		},
		w = function(e, t, n) {
			var i = p(e, t).state || {};
			i.config = n, b()
		},
		x = {
			name: l.Lang("New Panel"),
			maxZIndex: 0,
			widgets: []
		},
		P = function() {
			d = JSON.parse(s.getItem("PanelMixerConfig")) || [x]
		},
		b = function() {
			s.setItem("PanelMixerConfig", JSON.stringify(d))
		};
	P();
	var y = 0,
		E = i.extend({}, r.prototype, {
			getConfig: function() {
				return {
					tabs: d,
					curTab: y
				}
			},
			dispatcherIndex: a.register(function(e) {
				var t = e.action;
				switch (t.type) {
				case l.ActionTypes.ADD_PANEL_TASK:
					m(t.name), E.emit("change");
					break;
				case l.ActionTypes.SHOW_PANEL_TASK:
					y = t.panelId, E.emit("change");
					break;
				case l.ActionTypes.ADD_WIDGET_TASK:
					v(t.panelId, t.widgets), E.emit("change");
					break;
				case l.ActionTypes.MOVE_WIDGET_TASK:
					var n = t.args;
					f(t.panelId, t.widgetId, n), E.emit("change");
					break;
				case l.ActionTypes.REMOVE_WIDGET_TASK:
					u(t.panelId, t.widgetId), E.emit("change");
					break;
				case l.ActionTypes.REMOVE_PANEL_TASK:
					h(t.panelId), E.emit("change");
					break;
				case l.ActionTypes.ELEVATE_WIDGET_TASK:
					g(t.panelId, t.widgetId), E.emit("change");
					break;
				case l.ActionTypes.CONFIG_WIDGET_TASK:
					w(t.panelId, t.widgetId, t.config), E.emit("change")
				}
			})
		});
	e.exports = E
}, function(e, t, n) {
	"use strict";
	var i = window.require("hippo/AppDispatcher"),
		r = n(2);
	e.exports = {
		showPanel: function(e) {
			i.handlePluginAction({
				type: r.ActionTypes.SHOW_PANEL_TASK,
				panelId: e
			})
		},
		configWidget: function(e, t, n) {
			i.handlePluginAction({
				type: r.ActionTypes.CONFIG_WIDGET_TASK,
				panelId: e,
				widgetId: t,
				config: n
			})
		},
		removeWidget: function(e, t) {
			i.handlePluginAction({
				type: r.ActionTypes.REMOVE_WIDGET_TASK,
				panelId: e,
				widgetId: t
			})
		},
		removePanel: function(e) {
			i.handlePluginAction({
				type: r.ActionTypes.REMOVE_PANEL_TASK,
				panelId: e
			})
		},
		savePanelConfig: function(e, t, n) {
			i.handlePluginAction({
				type: r.ActionTypes.MOVE_WIDGET_TASK,
				panelId: e,
				widgetId: t,
				args: n
			})
		},
		addPanel: function(e) {
			i.handlePluginAction({
				type: r.ActionTypes.ADD_PANEL_TASK,
				name: e
			})
		},
		addWidget: function(e, t) {
			i.handlePluginAction({
				type: r.ActionTypes.ADD_WIDGET_TASK,
				panelId: e,
				widgets: t
			})
		},
		elevate: function(e, t) {
			i.handlePluginAction({
				type: r.ActionTypes.ELEVATE_WIDGET_TASK,
				panelId: e,
				widgetId: t
			})
		}
	}
}, function(e, t, n) {
	"use strict";
	var i = window.require("hippo/lib/react"),
		r = window.require("hippo/lib/underscore"),
		a = window.require("hippo/PluginStore"),
		o = window.require("hippo/ConfigStore"),
		s = window.require("hippo/UI"),
		l = s.Menu,
		d = n(7),
		c = i.createClass({
			displayName: "Panel",
			onMouseDown: function(e) {
				e.preventDefault(), this._start = {
					startX: this.props.state.left,
					startY: this.props.state.top,
					x: e.clientX,
					y: e.clientY
				}, d.elevate(this.props.panelId, this.props.widgetId), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("mouseup", this.onMouseUp)
			},
			onMouseMove: function(e) {
				e.preventDefault();
				var t = e.clientX - this._start.x,
					n = e.clientY - this._start.y,
					i = this.props.state.left + t,
					r = Math.max(0, this.props.state.top + n);
				this.move(i, r), e.altKey ? this.props.showPreview(this.props, e.clientX, e.clientY) : this.props.endPreview()
			},
			move: function(e, t) {
				var n = this.refs.root.getDOMNode();
				n.style.left = e + "px", n.style.top = t + "px"
			},
			onMouseUp: function(e) {
				window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp), this.move(this._start.startX, this._start.startY);
				var t = this.props.panelId,
					n = this.props.widgetId,
					i = this.props.getPreview();
				if (this.props.endPreview(), i) {
					if (d.savePanelConfig(t, n, {
						left: i.x,
						top: i.y,
						width: i.width,
						height: i.height
					}), i.related) {
						var r = i.related;
						d.savePanelConfig(r.panelId, r.widgetId, {
							left: r.x,
							top: r.y,
							width: r.width,
							height: r.height
						})
					}
				} else {
					var a = e.clientX - this._start.x,
						o = e.clientY - this._start.y,
						s = this.props.state.left + a,
						l = Math.max(0, this.props.state.top + o);
					d.savePanelConfig(t, n, {
						left: s,
						top: l
					})
				}
			},
			resizePanel: function(e) {
				e.preventDefault(), this._start = {
					corner: e.target.className,
					startX: this.props.state.left,
					startY: this.props.state.top,
					startWidth: this.props.state.width,
					startHeight: this.props.state.height,
					x: e.clientX,
					y: e.clientY
				}, d.elevate(this.props.panelId, this.props.widgetId), window.addEventListener("mousemove", this.onResizePanelStart), window.addEventListener("mouseup", this.onResizePanelEnd)
			},
			onResizePanelStart: function(e) {
				e.preventDefault();
				var t = e.clientX - this._start.x,
					n = e.clientY - this._start.y,
					i = this._start.startX,
					r = this._start.startY,
					a = this._start.startWidth,
					o = this._start.startHeight;
				switch (this._start.corner) {
				case "w":
					a -= t, i += t;
					break;
				case "sw":
					a -= t, i += t, o += n;
					break;
				case "n":
					r += n, o -= n;
					break;
				case "nw":
					r += n, o -= n, i += t, a -= t;
					break;
				case "ne":
					r += n, o -= n, a += t;
					break;
				case "s":
					o += n;
					break;
				case "se":
					a += t, o += n;
					break;
				case "e":
					a += t;
					break;
				default:
					return void console.error("Unknown region")
				}
				d.savePanelConfig(this.props.panelId, this.props.widgetId, {
					left: i,
					top: r,
					width: Math.max(a, 100),
					height: Math.max(o, 100)
				})
			},
			onResizePanelEnd: function() {
				window.removeEventListener("mousemove", this.onResizePanelStart), window.removeEventListener("mouseup", this.onResizePanelEnd)
			},
			configWidget: function(e) {
				var t = this.props.unionId,
					n = a.getMeta(t);
				l.show(e, {
					options: n.options,
					current: this.props.state.config
				}, r.bind(this.onConfig, this))
			},
			onConfig: function(e, t) {
				d.configWidget(this.props.panelId, this.props.widgetId, t)
			},
			removeWidget: function() {
				d.removeWidget(this.props.panelId, this.props.widgetId)
			},
			render: function() {
				var e, t, n, r = this.props.unionId,
					s = r.split(":")[0],
					l = this.props.state,
					d = o.isInstalled(s),
					c = a.getMeta(r) || {},
					p = a.getImpl(r),
					u = [];
				if (d) {
					e = i.createElement("h3", null, c.title);
					var h = {
						isActive: this.props.isActive,
						plugin: c,
						width: l.width,
						height: l.height
					};
					"undefined" != typeof l.config && (h.config = l.config), t = i.createElement(p, h), c.options && u.push(i.createElement("a", {
						className: "configBtn",
						key: "config",
						onClick: this.configWidget,
						href: "javascript:;"
					}, "⊞"))
				} else e = i.createElement("h3", null, "未知应用 - ", r), t = i.createElement("div", {
					className: "tip_noplugin"
				}, i.createElement("h1", null, "插件未安装"), i.createElement("p", null, "请先到插件市场安装"));
				return n = {
					width: l.width,
					height: l.height,
					top: l.top,
					left: l.left,
					zIndex: l.zIndex
				}, i.createElement("div", {
					ref: "root",
					className: "Panel " + r,
					style: n
				}, i.createElement("div", {
					className: "titlebar",
					onMouseDown: this.onMouseDown
				}, u, i.createElement("a", {
					className: "closeBtn",
					key: "close",
					onClick: this.removeWidget,
					href: "javascript:;"
				}, "×")), i.createElement("div", {
					className: "contentArea"
				}, t), i.createElement("div", {
					className: "resizeHandle",
					onMouseDown: this.resizePanel
				}, i.createElement("i", {
					className: "n"
				}), i.createElement("i", {
					className: "nw"
				}), i.createElement("i", {
					className: "ne"
				}), i.createElement("i", {
					className: "w"
				}), i.createElement("i", {
					className: "e"
				}), i.createElement("i", {
					className: "s"
				}), i.createElement("i", {
					className: "sw"
				}), i.createElement("i", {
					className: "se"
				})))
			}
		});
	e.exports = c
}, function(e, t, n) {
	"use strict";

	function i(e) {
		return e && e.__esModule ? e : {
		default:
			e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function a(e, t) {
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
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}(),
		s = function(e, t, n) {
			for (var i = !0; i;) {
				var r = e,
					a = t,
					o = n;
				i = !1, null === r && (r = Function.prototype);
				var s = Object.getOwnPropertyDescriptor(r, a);
				if (void 0 !== s) {
					if ("value" in s) return s.value;
					var l = s.get;
					if (void 0 === l) return;
					return l.call(o)
				}
				var d = Object.getPrototypeOf(r);
				if (null === d) return;
				e = d, t = a, n = o, i = !0, s = d = void 0
			}
		},
		l = n(7),
		d = i(l),
		c = n(2),
		p = i(c),
		u = window.require("hippo/lib/react"),
		h = (window.require("hippo/lib/underscore"), window.require("hippo/lib/jquery"), window.require("hippo/AppActionCreators")),
		f = window.require("hippo/ConfigStore"),
		g = function(e) {
			function t() {
				r(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments)
			}
			return a(t, e), o(t, [{
				key: "createPanels",
				value: function() {
					var e = "StockQuote",
						t = f.isInstalled(e);
					(t || confirm(p.
				default.Lang("This requires the StockQuote plugin, install?"))) && (t || h.addPlugin({
						id: e
					}), d.
				default.addWidget(null, [{
						unionId: e + ":StockQuotePanel",
						state: {
							top: 0,
							left: 0,
							width: 620,
							height: 700
						}
					}, {
						unionId: e + ":StockDetailPanel",
						state: {
							top: 0,
							left: 620,
							width: 700,
							height: 700
						}
					}]))
				}
			}, {
				key: "render",
				value: function() {
					return u.createElement("div", {
						className: "PanelTemplate"
					}, u.createElement("h1", null, p.
				default.Lang("Templates")), u.createElement("ul", null, u.createElement("li", {
						onClick: this.createPanels
					}, u.createElement("div", {
						className: "pic"
					}), u.createElement("h2", null, p.
				default.Lang("Stock Watch")))))
				}
			}]), t
		}(u.Component);
	t.
default = g, e.exports = t.
default
}, function(e, t, n) {
	var i = n(11);
	"string" == typeof i && (i = [
		[e.id, i, ""]
	]);
	n(14)(i, {});
	i.locals && (e.exports = i.locals)
}, function(e, t, n) {
	t = e.exports = n(12)(), t.push([e.id, ".PanelMixer{position:relative;box-sizing:border-box}.PanelMixer .contents{overflow:hidden}.PanelMixer .Panel{position:absolute;border:1px solid silver;background-color:#fff;box-sizing:border-box;padding:1px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;box-shadow:0 0 3px rgba(0,0,0,.3)}.PanelMixer .Panel .titlebar{-webkit-user-select:none;cursor:default;height:16px;background-color:#eee}.PanelMixer .Panel .titlebar a{color:silver;position:absolute;top:0}.PanelMixer .Panel .titlebar a:hover{color:#333}.PanelMixer .Panel .titlebar .configBtn{right:25px}.PanelMixer .Panel .titlebar .closeBtn{right:8px}.PanelMixer .Panel .contentArea{-ms-flex:1;flex:1;overflow:auto;z-index:1}.PanelMixer .Panel .contentArea .tip_noplugin{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;text-align:center}.PanelMixer .Panel .contentArea .tip_noplugin h1{color:gray}.PanelMixer .Panel .resizeHandle{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.PanelMixer .Panel .resizeHandle>i{position:absolute}.PanelMixer .Panel .resizeHandle .w{width:3px;height:100%;left:-2px;cursor:col-resize}.PanelMixer .Panel .resizeHandle .e{width:3px;height:100%;right:-2px;cursor:col-resize}.PanelMixer .Panel .resizeHandle .n{width:100%;height:3px;top:-2px;cursor:row-resize}.PanelMixer .Panel .resizeHandle .s{width:100%;height:3px;bottom:-2px;cursor:row-resize}.PanelMixer .Panel .resizeHandle .nw{width:10px;height:10px;left:-2px;top:-2px;cursor:nwse-resize}.PanelMixer .Panel .resizeHandle .ne{width:10px;height:10px;right:-2px;top:-2px;cursor:nesw-resize}.PanelMixer .Panel .resizeHandle .sw{width:10px;height:10px;left:-2px;bottom:-2px;cursor:nesw-resize}.PanelMixer .Panel .resizeHandle .se{width:10px;height:10px;right:-2px;bottom:-2px;cursor:nwse-resize}.PanelMixer .Panel .contentArea{position:relative}.PanelMixer .Panel .contentArea>div{position:absolute;top:0;left:0;bottom:0;right:0}.PanelMixer .Panel .contentArea>div.external{overflow:hidden}.PanelMixer .Panel .contentArea>div.external iframe,.PanelMixer .Panel .contentArea>div.external webview{width:100%;height:100%;border:none}.PanelMixer .PanelEditor{position:absolute;right:0;top:0;bottom:0;width:60px;background-color:#34315b;z-index:1000;opacity:0;visibility:hidden;transition:opacity .3s,visibility 0s linear .3s}.PanelMixer .PanelEditor ul{padding:10px 2px;list-style:none}.PanelMixer .PanelEditor ul li{text-align:center;margin:10px 0}.PanelMixer .PanelEditor ul a{color:#fff}.PanelMixer .preview{z-index:1001;opacity:.5;pointer-events:none;position:absolute;outline:1px solid #fff;background-color:#fff}.PanelMixer[data-editmode=true] .PanelEditor{opacity:1;visibility:visible;transition:opacity .3s,visibility 0s linear 0s}.PanelTemplate{position:relative;top:50%;margin:-200px auto 0;height:320px;width:60em;padding:1em;border:1px solid #599afc;box-shadow:0 0 10px silver}.PanelTemplate h1{color:#599afc}.PanelTemplate ul{margin-top:.2em}.PanelTemplate ul li{display:inline-block;width:20em;padding:1em}.PanelTemplate ul li .pic{width:16em;height:16em;background:url(" + n(13) + ");margin:0 auto}.PanelTemplate ul li h2{text-align:center;margin-top:.2em}.PanelTemplate ul li:hover{background-color:#fff}", ""])
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
			for (var i = {}, r = 0; r < this.length; r++) {
				var a = this[r][0];
				"number" == typeof a && (i[a] = !0)
			}
			for (r = 0; r < t.length; r++) {
				var o = t[r];
				"number" == typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
			}
		}, e
	}
}, function(e, t, n) {
	e.exports = n.p + "plugins/PanelMixer/images/PanelTemplate.jpg"
}, function(e, t, n) {
	function i(e, t) {
		for (var n = 0; n < e.length; n++) {
			var i = e[n],
				r = p[i.id];
			if (r) {
				r.refs++;
				for (var a = 0; a < r.parts.length; a++) r.parts[a](i.parts[a]);
				for (; a < i.parts.length; a++) r.parts.push(s(i.parts[a], t))
			} else {
				for (var o = [], a = 0; a < i.parts.length; a++) o.push(s(i.parts[a], t));
				p[i.id] = {
					id: i.id,
					refs: 1,
					parts: o
				}
			}
		}
	}
	function r(e) {
		for (var t = [], n = {}, i = 0; i < e.length; i++) {
			var r = e[i],
				a = r[0],
				o = r[1],
				s = r[2],
				l = r[3],
				d = {
					css: o,
					media: s,
					sourceMap: l
				};
			n[a] ? n[a].parts.push(d) : t.push(n[a] = {
				id: a,
				parts: [d]
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
	function s(e, t) {
		var n, i, r;
		if (t.singleton) {
			var s = m++;
			n = g || (g = a()), i = l.bind(null, n, s, !1), r = l.bind(null, n, s, !0)
		} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = o(), i = c.bind(null, n), r = function() {
			n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href)
		}) : (n = a(), i = d.bind(null, n), r = function() {
			n.parentNode.removeChild(n)
		});
		return i(e), function(t) {
			if (t) {
				if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
				i(e = t)
			} else r()
		}
	}
	function l(e, t, n, i) {
		var r = n ? "" : i.css;
		if (e.styleSheet) e.styleSheet.cssText = v(t, r);
		else {
			var a = document.createTextNode(r),
				o = e.childNodes;
			o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a)
		}
	}
	function d(e, t) {
		var n = t.css,
			i = t.media;
		t.sourceMap;
		if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
		else {
			for (; e.firstChild;) e.removeChild(e.firstChild);
			e.appendChild(document.createTextNode(n))
		}
	}
	function c(e, t) {
		var n = t.css,
			i = (t.media, t.sourceMap);
		i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
		var r = new Blob([n], {
			type: "text/css"
		}),
			a = e.href;
		e.href = URL.createObjectURL(r), a && URL.revokeObjectURL(a)
	}
	var p = {},
		u = function(e) {
			var t;
			return function() {
				return "undefined" == typeof t && (t = e.apply(this, arguments)), t
			}
		},
		h = u(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
		}),
		f = u(function() {
			return document.head || document.getElementsByTagName("head")[0]
		}),
		g = null,
		m = 0;
	e.exports = function(e, t) {
		t = t || {}, "undefined" == typeof t.singleton && (t.singleton = h());
		var n = r(e);
		return i(n, t), function(e) {
			for (var a = [], o = 0; o < n.length; o++) {
				var s = n[o],
					l = p[s.id];
				l.refs--, a.push(l)
			}
			if (e) {
				var d = r(e);
				i(d, t)
			}
			for (var o = 0; o < a.length; o++) {
				var l = a[o];
				if (0 === l.refs) {
					for (var c = 0; c < l.parts.length; c++) l.parts[c]();
					delete p[l.id]
				}
			}
		}
	};
	var v = function() {
			var e = [];
			return function(t, n) {
				return e[t] = n, e.filter(Boolean).join("\n")
			}
		}()
}]);