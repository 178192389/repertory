webpackJsonp([2], {
	648: function(t, e, i) {
		"use strict";

		function s(t) {
			return t && t.__esModule ? t : {
			default:
				t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = i(649),
			r = s(n),
			o = i(631),
			a = s(o),
			h = i(530),
			c = s(h),
			u = i(543),
			l = s(u),
			_ = "gftrader",
			p = "messages",
			d = ["119.29.28.42", "119.29.28.252"],
			E = function() {
				function t() {}
				function e(t) {
					var e = t.userId,
						i = u[e];
					if (i) {
						var n = t.messageId;
						if (E.indexOf(n) !== -1) return;
						s(n);
						var r = null;
						try {
							r = JSON.parse(t.payload)
						} catch (e) {
							r = t.payload
						}
						i(e, {
							topic: e,
							messageId: n,
							payload: r,
							timestamp: t.timestamp
						}), o.event.emit("message/ack", {
							appId: _,
							userId: e,
							messageId: n
						})
					}
				}
				function i(t, e) {
					return "user:" + t + ":" + e
				}
				function s(t) {
					t && (E.push(t), E.length > c.
				default.MaxNotificationLength && E.shift(), l.
				default.setItem(p, p, JSON.stringify(E)))
				}
				function n() {
					var t = Math.floor(2 * Math.random());
					return d[t]
				}
				var o = (0, r.
			default)(a.
			default.IO_URL || n(), {
					maxReconnectAttempts: Number.MAX_SAFE_INTEGER
				}).login();
				o.on("error", function(t, e, i) {
					console.error(t, e, i)
				});
				var h = [],
					u = {},
					E = [],
					T = l.
				default.getItem(p, p);
				T && (E = JSON.parse(T)), t.prototype.watch = function(t, s) {
					if ("function" != typeof s) throw "argument [fn] should be function";
					s && "function" == typeof s && (u[t] = s), h.indexOf(t) === -1 && (o.event.subscribe(i(_, t), e), o.event.emit("history/query", {
						appId: _,
						userId: t
					}), h.push(t))
				}, t.prototype.unwatch = function(t) {
					if (t) {
						var s = h.indexOf(t);
						s !== -1 && h.splice(s, 1), delete u[t], o.event.unsubscribe(i(_, t), e)
					}
				};
				var f = new t;
				return f
			}();
		e.
	default = E, t.exports = e.
	default
	},
	649: function(t, e, s) {
		var n, n;
		(function(e) {
			"use strict";
			!
			function(e) {
				t.exports = e()
			}(function() {
				var t;
				return function t(e, i, s) {
					function r(a, h) {
						if (!i[a]) {
							if (!e[a]) {
								var c = "function" == typeof n && n;
								if (!h && c) return n(a, !0);
								if (o) return o(a, !0);
								var u = new Error("Cannot find module '" + a + "'");
								throw u.code = "MODULE_NOT_FOUND", u
							}
							var l = i[a] = {
								exports: {}
							};
							e[a][0].call(l.exports, function(t) {
								var i = e[a][1][t];
								return r(i ? i : t)
							}, l, l.exports, t, e, i, s)
						}
						return i[a].exports
					}
					for (var o = "function" == typeof n && n, a = 0; a < s.length; a++) r(s[a]);
					return r
				}({
					1: [function(t, e, i) {
						function s(t) {
							if (t) return n(t)
						}
						function n(t) {
							for (var e in s.prototype) t[e] = s.prototype[e];
							return t
						}
						"undefined" != typeof e && (e.exports = s), s.prototype.on = s.prototype.addEventListener = function(t, e) {
							return this._callbacks = this._callbacks || Object.create(null), (this._callbacks[t] = this._callbacks[t] || []).push(e), this
						}, s.prototype.once = function(t, e) {
							function i() {
								this.off(t, i), e.apply(this, arguments)
							}
							return i.fn = e, this.on(t, i), this
						}, s.prototype.off = s.prototype.removeListener = s.prototype.removeAllListeners = s.prototype.removeEventListener = function(t, e) {
							if (this._callbacks = this._callbacks || Object.create(null), 0 == arguments.length) return this._callbacks = Object.create(null), this;
							var i = this._callbacks[t];
							if (!i) return this;
							if (1 == arguments.length) return delete this._callbacks[t], this;
							for (var s, n = 0; n < i.length; n++) if (s = i[n], s === e || s.fn === e) {
								i.splice(n, 1);
								break
							}
							return 0 === i.length && delete this._callbacks[t], this
						}, s.prototype.emit = function(t) {
							this._callbacks = this._callbacks || Object.create(null);
							for (var e = new Array(arguments.length - 1), i = this._callbacks[t], s = 1; s < arguments.length; s++) e[s - 1] = arguments[s];
							if (i) {
								i = i.slice(0);
								for (var s = 0, n = i.length; s < n; ++s) i[s].apply(this, e)
							}
							return this
						}, s.prototype.listeners = function(t) {
							return this._callbacks = this._callbacks || Object.create(null), this._callbacks[t] || []
						}, s.prototype.hasListeners = function(t) {
							return !!this.listeners(t).length
						}, s.prototype.eventNames = function() {
							return this._callbacks ? Object.keys(this._callbacks) : []
						}
					}, {}],
					2: [function(t, e, i) {}, {}],
					3: [function(t, e, i) {
						function s() {
							throw new Error("setTimeout has not been defined")
						}
						function n() {
							throw new Error("clearTimeout has not been defined")
						}
						function r(t) {
							if (l === setTimeout) return setTimeout(t, 0);
							if ((l === s || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
							try {
								return l(t, 0)
							} catch (e) {
								try {
									return l.call(null, t, 0)
								} catch (e) {
									return l.call(this, t, 0)
								}
							}
						}
						function o(t) {
							if (_ === clearTimeout) return clearTimeout(t);
							if ((_ === n || !_) && clearTimeout) return _ = clearTimeout, clearTimeout(t);
							try {
								return _(t)
							} catch (e) {
								try {
									return _.call(null, t)
								} catch (e) {
									return _.call(this, t)
								}
							}
						}
						function a() {
							T && d && (T = !1, d.length ? E = d.concat(E) : f = -1, E.length && h())
						}
						function h() {
							if (!T) {
								var t = r(a);
								T = !0;
								for (var e = E.length; e;) {
									for (d = E, E = []; ++f < e;) d && d[f].run();
									f = -1, e = E.length
								}
								d = null, T = !1, o(t)
							}
						}
						function c(t, e) {
							this.fun = t, this.array = e
						}
						function u() {}
						var l, _, p = e.exports = {};
						!
						function() {
							try {
								l = "function" == typeof setTimeout ? setTimeout : s
							} catch (t) {
								l = s
							}
							try {
								_ = "function" == typeof clearTimeout ? clearTimeout : n
							} catch (t) {
								_ = n
							}
						}();
						var d, E = [],
							T = !1,
							f = -1;
						p.nextTick = function(t) {
							var e = new Array(arguments.length - 1);
							if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
							E.push(new c(t, e)), 1 !== E.length || T || r(h)
						}, c.prototype.run = function() {
							this.fun.apply(null, this.array)
						}, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.binding = function(t) {
							throw new Error("process.binding is not supported")
						}, p.cwd = function() {
							return "/"
						}, p.chdir = function(t) {
							throw new Error("process.chdir is not supported")
						}, p.umask = function() {
							return 0
						}
					}, {}],
					4: [function(i, s, n) {
						(function(e) {
							!
							function(i) {
								function r(t) {
									throw new RangeError(M[t])
								}
								function o(t, e) {
									for (var i = t.length, s = []; i--;) s[i] = e(t[i]);
									return s
								}
								function a(t, e) {
									var i = t.split("@"),
										s = "";
									i.length > 1 && (s = i[0] + "@", t = i[1]), t = t.replace(U, ".");
									var n = t.split("."),
										r = o(n, e).join(".");
									return s + r
								}
								function h(t) {
									for (var e, i, s = [], n = 0, r = t.length; n < r;) e = t.charCodeAt(n++), e >= 55296 && e <= 56319 && n < r ? (i = t.charCodeAt(n++), 56320 == (64512 & i) ? s.push(((1023 & e) << 10) + (1023 & i) + 65536) : (s.push(e), n--)) : s.push(e);
									return s
								}
								function c(t) {
									return o(t, function(t) {
										var e = "";
										return t > 65535 && (t -= 65536, e += V(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += V(t)
									}).join("")
								}
								function u(t) {
									return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : g
								}
								function l(t, e) {
									return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
								}
								function _(t, e, i) {
									var s = 0;
									for (t = i ? L(t / A) : t >> 1, t += L(t / e); t > D * R >> 1; s += g) t = L(t / D);
									return L(s + (D + 1) * t / (t + y))
								}
								function p(t) {
									var e, i, s, n, o, a, h, l, p, d, E = [],
										T = t.length,
										f = 0,
										N = b,
										C = v;
									for (i = t.lastIndexOf(P), i < 0 && (i = 0), s = 0; s < i; ++s) t.charCodeAt(s) >= 128 && r("not-basic"), E.push(t.charCodeAt(s));
									for (n = i > 0 ? i + 1 : 0; n < T;) {
										for (o = f, a = 1, h = g; n >= T && r("invalid-input"), l = u(t.charCodeAt(n++)), (l >= g || l > L((S - f) / a)) && r("overflow"), f += l * a, p = h <= C ? I : h >= C + R ? R : h - C, !(l < p); h += g) d = g - p, a > L(S / d) && r("overflow"), a *= d;
										e = E.length + 1, C = _(f - o, e, 0 == o), L(f / e) > S - N && r("overflow"), N += L(f / e), f %= e, E.splice(f++, 0, N)
									}
									return c(E)
								}
								function d(t) {
									var e, i, s, n, o, a, c, u, p, d, E, T, f, N, C, m = [];
									for (t = h(t), T = t.length, e = b, i = 0, o = v, a = 0; a < T; ++a) E = t[a], E < 128 && m.push(V(E));
									for (s = n = m.length, n && m.push(P); s < T;) {
										for (c = S, a = 0; a < T; ++a) E = t[a], E >= e && E < c && (c = E);
										for (f = s + 1, c - e > L((S - i) / f) && r("overflow"), i += (c - e) * f, e = c, a = 0; a < T; ++a) if (E = t[a], E < e && ++i > S && r("overflow"), E == e) {
											for (u = i, p = g; d = p <= o ? I : p >= o + R ? R : p - o, !(u < d); p += g) C = u - d, N = g - d, m.push(V(l(d + C % N, 0))), u = L(C / N);
											m.push(V(l(u, 0))), o = _(i, f, s == n), i = 0, ++s
										}++i, ++e
									}
									return m.join("")
								}
								function E(t) {
									return a(t, function(t) {
										return k.test(t) ? p(t.slice(4).toLowerCase()) : t
									})
								}
								function T(t) {
									return a(t, function(t) {
										return w.test(t) ? "xn--" + d(t) : t
									})
								}
								var f = "object" == typeof n && n && !n.nodeType && n,
									N = "object" == typeof s && s && !s.nodeType && s,
									C = "object" == typeof e && e;
								C.global !== C && C.window !== C && C.self !== C || (i = C);
								var m, O, S = 2147483647,
									g = 36,
									I = 1,
									R = 26,
									y = 38,
									A = 700,
									v = 72,
									b = 128,
									P = "-",
									k = /^xn--/,
									w = /[^ -~]/,
									U = /[.。．｡]/g,
									M = {
										overflow: "Overflow: input needs wider integers to process",
										"not-basic": "Illegal input >= 0x80 (not a basic code point)",
										"invalid-input": "Invalid input"
									},
									D = g - I,
									L = Math.floor,
									V = String.fromCharCode;
								if (m = {
									version: "1.4.1",
									ucs2: {
										decode: h,
										encode: c
									},
									decode: p,
									encode: d,
									toASCII: T,
									toUnicode: E
								}, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function() {
									return m
								});
								else if (f && N) if (s.exports == f) N.exports = m;
								else for (O in m) m.hasOwnProperty(O) && (f[O] = m[O]);
								else i.punycode = m
							}(this)
						}).call(this, "undefined" != typeof e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {}],
					5: [function(t, e, i) {
						function s(t, e) {
							return Object.prototype.hasOwnProperty.call(t, e)
						}
						e.exports = function(t, e, i, r) {
							e = e || "&", i = i || "=";
							var o = {};
							if ("string" != typeof t || 0 === t.length) return o;
							var a = /\+/g;
							t = t.split(e);
							var h = 1e3;
							r && "number" == typeof r.maxKeys && (h = r.maxKeys);
							var c = t.length;
							h > 0 && c > h && (c = h);
							for (var u = 0; u < c; ++u) {
								var l, _, p, d, E = t[u].replace(a, "%20"),
									T = E.indexOf(i);
								T >= 0 ? (l = E.substr(0, T), _ = E.substr(T + 1)) : (l = E, _ = ""), p = decodeURIComponent(l), d = decodeURIComponent(_), s(o, p) ? n(o[p]) ? o[p].push(d) : o[p] = [o[p], d] : o[p] = d
							}
							return o
						};
						var n = Array.isArray ||
						function(t) {
							return "[object Array]" === Object.prototype.toString.call(t)
						}
					}, {}],
					6: [function(t, e, i) {
						function s(t, e) {
							if (t.map) return t.map(e);
							for (var i = [], s = 0; s < t.length; s++) i.push(e(t[s], s));
							return i
						}
						var n = function(t) {
								switch (typeof t) {
								case "string":
									return t;
								case "boolean":
									return t ? "true" : "false";
								case "number":
									return isFinite(t) ? t : "";
								default:
									return ""
								}
							};
						e.exports = function(t, e, i, a) {
							return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? s(o(t), function(o) {
								var a = encodeURIComponent(n(o)) + i;
								return r(t[o]) ? s(t[o], function(t) {
									return a + encodeURIComponent(n(t))
								}).join(e) : a + encodeURIComponent(n(t[o]))
							}).join(e) : a ? encodeURIComponent(n(a)) + i + encodeURIComponent(n(t)) : ""
						};
						var r = Array.isArray ||
						function(t) {
							return "[object Array]" === Object.prototype.toString.call(t)
						}, o = Object.keys ||
						function(t) {
							var e = [];
							for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
							return e
						}
					}, {}],
					7: [function(t, e, i) {
						i.decode = i.parse = t("./decode"), i.encode = i.stringify = t("./encode")
					}, {
						"./decode": 5,
						"./encode": 6
					}],
					8: [function(t, e, i) {
						function s() {
							this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
						}
						function n(t, e, i) {
							if (t && c.isObject(t) && t instanceof s) return t;
							var n = new s;
							return n.parse(t, e, i), n
						}
						function r(t) {
							return c.isString(t) && (t = n(t)), t instanceof s ? t.format() : s.prototype.format.call(t)
						}
						function o(t, e) {
							return n(t, !1, !0).resolve(e)
						}
						function a(t, e) {
							return t ? n(t, !1, !0).resolveObject(e) : e
						}
						var h = t("punycode"),
							c = t("./util");
						i.parse = n, i.resolve = o, i.resolveObject = a, i.format = r, i.Url = s;
						var u = /^([a-z0-9.+-]+:)/i,
							l = /:[0-9]*$/,
							_ = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
							p = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
							d = ["{", "}", "|", "\\", "^", "`"].concat(p),
							E = ["'"].concat(d),
							T = ["%", "/", "?", ";", "#"].concat(E),
							f = ["/", "?", "#"],
							N = 255,
							C = /^[+a-z0-9A-Z_-]{0,63}$/,
							m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
							O = {
								javascript: !0,
								"javascript:": !0
							},
							S = {
								javascript: !0,
								"javascript:": !0
							},
							g = {
								http: !0,
								https: !0,
								ftp: !0,
								gopher: !0,
								file: !0,
								"http:": !0,
								"https:": !0,
								"ftp:": !0,
								"gopher:": !0,
								"file:": !0
							},
							I = t("querystring");
						s.prototype.parse = function(t, e, i) {
							if (!c.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
							var s = t.indexOf("?"),
								n = s !== -1 && s < t.indexOf("#") ? "?" : "#",
								r = t.split(n),
								o = /\\/g;
							r[0] = r[0].replace(o, "/"), t = r.join(n);
							var a = t;
							if (a = a.trim(), !i && 1 === t.split("#").length) {
								var l = _.exec(a);
								if (l) return this.path = a, this.href = a, this.pathname = l[1], l[2] ? (this.search = l[2], e ? this.query = I.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "", this.query = {}), this
							}
							var p = u.exec(a);
							if (p) {
								p = p[0];
								var d = p.toLowerCase();
								this.protocol = d, a = a.substr(p.length)
							}
							if (i || p || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
								var R = "//" === a.substr(0, 2);
								!R || p && S[p] || (a = a.substr(2), this.slashes = !0)
							}
							if (!S[p] && (R || p && !g[p])) {
								for (var y = -1, A = 0; A < f.length; A++) {
									var v = a.indexOf(f[A]);
									v !== -1 && (y === -1 || v < y) && (y = v)
								}
								var b, P;
								P = y === -1 ? a.lastIndexOf("@") : a.lastIndexOf("@", y), P !== -1 && (b = a.slice(0, P), a = a.slice(P + 1), this.auth = decodeURIComponent(b)), y = -1;
								for (var A = 0; A < T.length; A++) {
									var v = a.indexOf(T[A]);
									v !== -1 && (y === -1 || v < y) && (y = v)
								}
								y === -1 && (y = a.length), this.host = a.slice(0, y), a = a.slice(y), this.parseHost(), this.hostname = this.hostname || "";
								var k = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
								if (!k) for (var w = this.hostname.split(/\./), A = 0, U = w.length; A < U; A++) {
									var M = w[A];
									if (M && !M.match(C)) {
										for (var D = "", L = 0, V = M.length; L < V; L++) D += M.charCodeAt(L) > 127 ? "x" : M[L];
										if (!D.match(C)) {
											var x = w.slice(0, A),
												B = w.slice(A + 1),
												G = M.match(m);
											G && (x.push(G[1]), B.unshift(G[2])), B.length && (a = "/" + B.join(".") + a), this.hostname = x.join(".");
											break
										}
									}
								}
								this.hostname.length > N ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), k || (this.hostname = h.toASCII(this.hostname));
								var H = this.port ? ":" + this.port : "",
									j = this.hostname || "";
								this.host = j + H, this.href += this.host, k && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a))
							}
							if (!O[d]) for (var A = 0, U = E.length; A < U; A++) {
								var $ = E[A];
								if (a.indexOf($) !== -1) {
									var q = encodeURIComponent($);
									q === $ && (q = escape($)), a = a.split($).join(q)
								}
							}
							var Y = a.indexOf("#");
							Y !== -1 && (this.hash = a.substr(Y), a = a.slice(0, Y));
							var F = a.indexOf("?");
							if (F !== -1 ? (this.search = a.substr(F), this.query = a.substr(F + 1), e && (this.query = I.parse(this.query)), a = a.slice(0, F)) : e && (this.search = "", this.query = {}), a && (this.pathname = a), g[d] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
								var H = this.pathname || "",
									J = this.search || "";
								this.path = H + J
							}
							return this.href = this.format(), this
						}, s.prototype.format = function() {
							var t = this.auth || "";
							t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
							var e = this.protocol || "",
								i = this.pathname || "",
								s = this.hash || "",
								n = !1,
								r = "";
							this.host ? n = t + this.host : this.hostname && (n = t + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && c.isObject(this.query) && Object.keys(this.query).length && (r = I.stringify(this.query));
							var o = this.search || r && "?" + r || "";
							return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || g[e]) && n !== !1 ? (n = "//" + (n || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : n || (n = ""), s && "#" !== s.charAt(0) && (s = "#" + s), o && "?" !== o.charAt(0) && (o = "?" + o), i = i.replace(/[?#]/g, function(t) {
								return encodeURIComponent(t)
							}), o = o.replace("#", "%23"), e + n + i + o + s
						}, s.prototype.resolve = function(t) {
							return this.resolveObject(n(t, !1, !0)).format()
						}, s.prototype.resolveObject = function(t) {
							if (c.isString(t)) {
								var e = new s;
								e.parse(t, !1, !0), t = e
							}
							for (var i = new s, n = Object.keys(this), r = 0; r < n.length; r++) {
								var o = n[r];
								i[o] = this[o]
							}
							if (i.hash = t.hash, "" === t.href) return i.href = i.format(), i;
							if (t.slashes && !t.protocol) {
								for (var a = Object.keys(t), h = 0; h < a.length; h++) {
									var u = a[h];
									"protocol" !== u && (i[u] = t[u])
								}
								return g[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i
							}
							if (t.protocol && t.protocol !== i.protocol) {
								if (!g[t.protocol]) {
									for (var l = Object.keys(t), _ = 0; _ < l.length; _++) {
										var p = l[_];
										i[p] = t[p]
									}
									return i.href = i.format(), i
								}
								if (i.protocol = t.protocol, t.host || S[t.protocol]) i.pathname = t.pathname;
								else {
									for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift()););
									t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), i.pathname = d.join("/")
								}
								if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
									var E = i.pathname || "",
										T = i.search || "";
									i.path = E + T
								}
								return i.slashes = i.slashes || t.slashes, i.href = i.format(), i
							}
							var f = i.pathname && "/" === i.pathname.charAt(0),
								N = t.host || t.pathname && "/" === t.pathname.charAt(0),
								C = N || f || i.host && t.pathname,
								m = C,
								O = i.pathname && i.pathname.split("/") || [],
								d = t.pathname && t.pathname.split("/") || [],
								I = i.protocol && !g[i.protocol];
							if (I && (i.hostname = "", i.port = null, i.host && ("" === O[0] ? O[0] = i.host : O.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === d[0] ? d[0] = t.host : d.unshift(t.host)), t.host = null), C = C && ("" === d[0] || "" === O[0])), N) i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, O = d;
							else if (d.length) O || (O = []), O.pop(), O = O.concat(d), i.search = t.search, i.query = t.query;
							else if (!c.isNullOrUndefined(t.search)) {
								if (I) {
									i.hostname = i.host = O.shift();
									var R = !! (i.host && i.host.indexOf("@") > 0) && i.host.split("@");
									R && (i.auth = R.shift(), i.host = i.hostname = R.shift())
								}
								return i.search = t.search, i.query = t.query, c.isNull(i.pathname) && c.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
							}
							if (!O.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
							for (var y = O.slice(-1)[0], A = (i.host || t.host || O.length > 1) && ("." === y || ".." === y) || "" === y, v = 0, b = O.length; b >= 0; b--) y = O[b], "." === y ? O.splice(b, 1) : ".." === y ? (O.splice(b, 1), v++) : v && (O.splice(b, 1), v--);
							if (!C && !m) for (; v--; v) O.unshift("..");
							!C || "" === O[0] || O[0] && "/" === O[0].charAt(0) || O.unshift(""), A && "/" !== O.join("/").substr(-1) && O.push("");
							var P = "" === O[0] || O[0] && "/" === O[0].charAt(0);
							if (I) {
								i.hostname = i.host = P ? "" : O.length ? O.shift() : "";
								var R = !! (i.host && i.host.indexOf("@") > 0) && i.host.split("@");
								R && (i.auth = R.shift(), i.host = i.hostname = R.shift())
							}
							return C = C || i.host && O.length, C && !P && O.unshift(""), O.length ? i.pathname = O.join("/") : (i.pathname = null, i.path = null), c.isNull(i.pathname) && c.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i
						}, s.prototype.parseHost = function() {
							var t = this.host,
								e = l.exec(t);
							e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
						}
					}, {
						"./util": 9,
						punycode: 4,
						querystring: 7
					}],
					9: [function(t, e, i) {
						e.exports = {
							isString: function(t) {
								return "string" == typeof t
							},
							isObject: function(t) {
								return "object" == typeof t && null !== t
							},
							isNull: function(t) {
								return null === t
							},
							isNullOrUndefined: function(t) {
								return null == t
							}
						}
					}, {}],
					10: [function(t, e, i) {
						function s(t, e) {
							return new d(t, e)
						}
						var n = t("./constants/constants"),
							r = t("./constants/merge-strategies"),
							o = t("component-emitter2"),
							a = t("./message/connection"),
							h = t("./event/event-handler"),
							c = t("./rpc/rpc-handler"),
							u = t("./record/record-handler"),
							l = t("./presence/presence-handler"),
							_ = t("./default-options"),
							p = (t("./message/message-builder"), t("./utils/ack-timeout-registry")),
							d = function(t, e) {
								this._url = t, this._options = this._getOptions(e || {}), this._connection = new a(this, this._url, this._options), this._ackTimeoutRegistry = new p(this, this._options), this.event = new h(this._options, this._connection, this), this.rpc = new c(this._options, this._connection, this), this.record = new u(this._options, this._connection, this), this.presence = new l(this._options, this._connection, this), this._messageCallbacks = {}, this._messageCallbacks[n.TOPIC.EVENT] = this.event._$handle.bind(this.event), this._messageCallbacks[n.TOPIC.RPC] = this.rpc._$handle.bind(this.rpc), this._messageCallbacks[n.TOPIC.RECORD] = this.record._$handle.bind(this.record), this._messageCallbacks[n.TOPIC.PRESENCE] = this.presence._$handle.bind(this.presence), this._messageCallbacks[n.TOPIC.ERROR] = this._onErrorMessage.bind(this)
							};
						o(d.prototype), d.prototype.login = function(t, e) {
							return this._connection.authenticate(t || {}, e), this
						}, d.prototype.close = function() {
							this._connection.close()
						}, d.prototype.getConnectionState = function() {
							return this._connection.getState()
						}, d.prototype.getUid = function() {
							var t = (new Date).getTime().toString(36),
								e = (1e16 * Math.random()).toString(36).replace(".", "");
							return t + "-" + e
						}, d.prototype._$getAckTimeoutRegistry = function() {
							return this._ackTimeoutRegistry
						}, d.prototype._$onMessage = function(t) {
							this._messageCallbacks[t.topic] ? this._messageCallbacks[t.topic](t) : (t.processedError = !0, this._$onError(t.topic, n.EVENT.MESSAGE_PARSE_ERROR, "Received message for unknown topic " + t.topic)), t.action !== n.ACTIONS.ERROR || t.processedError || this._$onError(t.topic, t.data[0], t.data.slice(0))
						}, d.prototype._$onError = function(t, e, i) {
							var s;
							if (e !== n.EVENT.ACK_TIMEOUT && e !== n.EVENT.RESPONSE_TIMEOUT || this.getConnectionState() === n.CONNECTION_STATE.AWAITING_AUTHENTICATION && (s = "Your message timed out because you're not authenticated. Have you called login()?", setTimeout(this._$onError.bind(this, n.EVENT.NOT_AUTHENTICATED, n.TOPIC.ERROR, s), 1)), !this.hasListeners("error")) throw console.log("--- You can catch all deepstream errors by subscribing to the error event ---"), s = e + ": " + i, t && (s += " (" + t + ")"), new Error(s);
							this.emit("error", i, e, t), this.emit(e, t, i)
						}, d.prototype._onErrorMessage = function(t) {
							this._$onError(t.topic, t.data[0], t.data[1])
						}, d.prototype._getOptions = function(t) {
							var e, i = {};
							for (e in _)"undefined" == typeof t[e] ? i[e] = _[e] : i[e] = t[e];
							return i
						}, d.prototype.CONSTANTS = n, s.CONSTANTS = n, d.prototype.MERGE_STRATEGIES = r, s.MERGE_STRATEGIES = r, e.exports = s
					}, {
						"./constants/constants": 11,
						"./constants/merge-strategies": 12,
						"./default-options": 13,
						"./event/event-handler": 14,
						"./message/connection": 15,
						"./message/message-builder": 16,
						"./presence/presence-handler": 18,
						"./record/record-handler": 22,
						"./rpc/rpc-handler": 24,
						"./utils/ack-timeout-registry": 27,
						"component-emitter2": 1
					}],
					11: [function(t, e, i) {
						i.CONNECTION_STATE = {}, i.CONNECTION_STATE.CLOSED = "CLOSED", i.CONNECTION_STATE.AWAITING_CONNECTION = "AWAITING_CONNECTION", i.CONNECTION_STATE.CHALLENGING = "CHALLENGING", i.CONNECTION_STATE.AWAITING_AUTHENTICATION = "AWAITING_AUTHENTICATION", i.CONNECTION_STATE.AUTHENTICATING = "AUTHENTICATING", i.CONNECTION_STATE.OPEN = "OPEN", i.CONNECTION_STATE.ERROR = "ERROR", i.CONNECTION_STATE.RECONNECTING = "RECONNECTING", i.MESSAGE_SEPERATOR = String.fromCharCode(30), i.MESSAGE_PART_SEPERATOR = String.fromCharCode(31), i.TYPES = {}, i.TYPES.STRING = "S", i.TYPES.OBJECT = "O", i.TYPES.NUMBER = "N", i.TYPES.NULL = "L", i.TYPES.TRUE = "T", i.TYPES.FALSE = "F", i.TYPES.UNDEFINED = "U", i.TOPIC = {}, i.TOPIC.CONNECTION = "C", i.TOPIC.AUTH = "A", i.TOPIC.ERROR = "X", i.TOPIC.EVENT = "E", i.TOPIC.RECORD = "R", i.TOPIC.RPC = "P", i.TOPIC.PRESENCE = "U", i.TOPIC.PRIVATE = "PRIVATE/", i.EVENT = {}, i.EVENT.CONNECTION_ERROR = "connectionError", i.EVENT.CONNECTION_STATE_CHANGED = "connectionStateChanged", i.EVENT.MAX_RECONNECTION_ATTEMPTS_REACHED = "MAX_RECONNECTION_ATTEMPTS_REACHED", i.EVENT.CONNECTION_AUTHENTICATION_TIMEOUT = "CONNECTION_AUTHENTICATION_TIMEOUT", i.EVENT.ACK_TIMEOUT = "ACK_TIMEOUT", i.EVENT.NO_RPC_PROVIDER = "NO_RPC_PROVIDER", i.EVENT.RESPONSE_TIMEOUT = "RESPONSE_TIMEOUT", i.EVENT.DELETE_TIMEOUT = "DELETE_TIMEOUT", i.EVENT.UNSOLICITED_MESSAGE = "UNSOLICITED_MESSAGE", i.EVENT.MESSAGE_DENIED = "MESSAGE_DENIED", i.EVENT.MESSAGE_PARSE_ERROR = "MESSAGE_PARSE_ERROR", i.EVENT.VERSION_EXISTS = "VERSION_EXISTS", i.EVENT.NOT_AUTHENTICATED = "NOT_AUTHENTICATED", i.EVENT.MESSAGE_PERMISSION_ERROR = "MESSAGE_PERMISSION_ERROR", i.EVENT.LISTENER_EXISTS = "LISTENER_EXISTS", i.EVENT.NOT_LISTENING = "NOT_LISTENING", i.EVENT.TOO_MANY_AUTH_ATTEMPTS = "TOO_MANY_AUTH_ATTEMPTS", i.EVENT.IS_CLOSED = "IS_CLOSED", i.EVENT.RECORD_NOT_FOUND = "RECORD_NOT_FOUND", i.EVENT.NOT_SUBSCRIBED = "NOT_SUBSCRIBED", i.ACTIONS = {}, i.ACTIONS.PING = "PI", i.ACTIONS.PONG = "PO", i.ACTIONS.ACK = "A", i.ACTIONS.REDIRECT = "RED", i.ACTIONS.CHALLENGE = "CH", i.ACTIONS.CHALLENGE_RESPONSE = "CHR", i.ACTIONS.READ = "R", i.ACTIONS.CREATE = "C", i.ACTIONS.UPDATE = "U", i.ACTIONS.PATCH = "P", i.ACTIONS.DELETE = "D", i.ACTIONS.SUBSCRIBE = "S", i.ACTIONS.UNSUBSCRIBE = "US", i.ACTIONS.HAS = "H", i.ACTIONS.SNAPSHOT = "SN", i.ACTIONS.INVOKE = "I", i.ACTIONS.SUBSCRIPTION_FOR_PATTERN_FOUND = "SP", i.ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED = "SR", i.ACTIONS.SUBSCRIPTION_HAS_PROVIDER = "SH", i.ACTIONS.LISTEN = "L", i.ACTIONS.UNLISTEN = "UL", i.ACTIONS.LISTEN_ACCEPT = "LA", i.ACTIONS.LISTEN_REJECT = "LR", i.ACTIONS.PROVIDER_UPDATE = "PU", i.ACTIONS.QUERY = "Q", i.ACTIONS.CREATEORREAD = "CR", i.ACTIONS.EVENT = "EVT", i.ACTIONS.ERROR = "E", i.ACTIONS.REQUEST = "REQ", i.ACTIONS.RESPONSE = "RES", i.ACTIONS.REJECTION = "REJ", i.ACTIONS.PRESENCE_JOIN = "PNJ", i.ACTIONS.PRESENCE_LEAVE = "PNL", i.ACTIONS.QUERY = "Q", i.ACTIONS.WRITE_ACKNOWLEDGEMENT = "WA", i.CALL_STATE = {}, i.CALL_STATE.INITIAL = "INITIAL", i.CALL_STATE.CONNECTING = "CONNECTING", i.CALL_STATE.ESTABLISHED = "ESTABLISHED", i.CALL_STATE.ACCEPTED = "ACCEPTED", i.CALL_STATE.DECLINED = "DECLINED", i.CALL_STATE.ENDED = "ENDED", i.CALL_STATE.ERROR = "ERROR"
					}, {}],
					12: [function(t, e, i) {
						e.exports = {
							REMOTE_WINS: function(t, e, i, s) {
								s(null, e)
							},
							LOCAL_WINS: function(t, e, i, s) {
								s(null, t.get())
							}
						}
					}, {}],
					13: [function(t, e, i) {
						var s = t("./constants/merge-strategies");
						e.exports = {
							heartbeatInterval: 3e4,
							recordPersistDefault: !0,
							reconnectIntervalIncrement: 4e3,
							maxReconnectInterval: 18e4,
							maxReconnectAttempts: 5,
							rpcAckTimeout: 15e3,
							rpcResponseTimeout: 15e3,
							subscriptionTimeout: 15e3,
							maxMessagesPerPacket: 100,
							timeBetweenSendingQueuedPackages: 16,
							recordReadAckTimeout: 15e3,
							recordReadTimeout: 15e3,
							recordDeleteTimeout: 15e3,
							path: "/deepstream",
							mergeStrategy: s.REMOTE_WINS,
							recordDeepCopy: !0,
							nodeSocketOptions: null
						}
					}, {
						"./constants/merge-strategies": 12
					}],
					14: [function(t, e, i) {
						var s = t("../message/message-builder"),
							n = t("../message/message-parser"),
							r = t("../utils/resubscribe-notifier"),
							o = t("../constants/constants"),
							a = t("../utils/listener"),
							h = t("component-emitter2"),
							c = function(t, e, i) {
								this._options = t, this._connection = e, this._client = i, this._emitter = new h, this._listener = {}, this._ackTimeoutRegistry = i._$getAckTimeoutRegistry(), this._resubscribeNotifier = new r(this._client, this._resubscribe.bind(this))
							};
						c.prototype.subscribe = function(t, e) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument name");
							if ("function" != typeof e) throw new Error("invalid argument callback");
							this._emitter.hasListeners(t) || (this._ackTimeoutRegistry.add({
								topic: o.TOPIC.EVENT,
								action: o.ACTIONS.SUBSCRIBE,
								name: t
							}), this._connection.sendMsg(o.TOPIC.EVENT, o.ACTIONS.SUBSCRIBE, [t])), this._emitter.on(t, e)
						}, c.prototype.unsubscribe = function(t, e) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument name");
							if (void 0 !== e && "function" != typeof e) throw new Error("invalid argument callback");
							this._emitter.off(t, e), this._emitter.hasListeners(t) || (this._ackTimeoutRegistry.add({
								topic: o.TOPIC.EVENT,
								action: o.ACTIONS.UNSUBSCRIBE,
								name: t
							}), this._connection.sendMsg(o.TOPIC.EVENT, o.ACTIONS.UNSUBSCRIBE, [t]))
						}, c.prototype.emit = function(t, e) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument name");
							this._connection.sendMsg(o.TOPIC.EVENT, o.ACTIONS.EVENT, [t, s.typed(e)]), this._emitter.emit(t, e)
						}, c.prototype.listen = function(t, e) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument pattern");
							if ("function" != typeof e) throw new Error("invalid argument callback");
							return this._listener[t] && !this._listener[t].destroyPending ? this._client._$onError(o.TOPIC.EVENT, o.EVENT.LISTENER_EXISTS, t) : (this._listener[t] && this._listener[t].destroy(), void(this._listener[t] = new a(o.TOPIC.EVENT, t, e, this._options, this._client, this._connection)))
						}, c.prototype.unlisten = function(t) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument pattern");
							var e = this._listener[t];
							e && !e.destroyPending ? e.sendDestroy() : this._listener[t] ? (this._ackTimeoutRegistry.add({
								topic: o.TOPIC.EVENT,
								action: o.EVENT.UNLISTEN,
								name: t
							}), this._listener[t].destroy(), delete this._listener[t]) : this._client._$onError(o.TOPIC.RECORD, o.EVENT.NOT_LISTENING, t)
						}, c.prototype._$handle = function(t) {
							var e = t.data[t.action === o.ACTIONS.ACK ? 1 : 0],
								i = !1;
							return t.action === o.ACTIONS.EVENT ? (i = !0, void(t.data && 2 === t.data.length ? this._emitter.emit(e, n.convertTyped(t.data[1], this._client)) : this._emitter.emit(e))) : t.action === o.ACTIONS.ACK && t.data[0] === o.ACTIONS.UNLISTEN && this._listener[e] && this._listener[e].destroyPending ? (this._listener[e].destroy(), void delete this._listener[e]) : this._listener[e] ? (i = !0, void this._listener[e]._$onMessage(t)) : t.action !== o.ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED && t.action !== o.ACTIONS.SUBSCRIPTION_HAS_PROVIDER ? t.action === o.ACTIONS.ACK ? void this._ackTimeoutRegistry.clear(t) : t.action === o.ACTIONS.ERROR ? (t.data[0] === o.EVENT.MESSAGE_DENIED ? this._ackTimeoutRegistry.remove({
								topic: o.TOPIC.EVENT,
								name: t.data[1],
								action: t.data[2]
							}) : t.data[0] === o.EVENT.NOT_SUBSCRIBED && this._ackTimeoutRegistry.remove({
								topic: o.TOPIC.EVENT,
								name: t.data[1],
								action: o.ACTIONS.UNSUBSCRIBE
							}), t.processedError = !0, void this._client._$onError(o.TOPIC.EVENT, t.data[0], t.data[1])) : void this._client._$onError(o.TOPIC.EVENT, o.EVENT.UNSOLICITED_MESSAGE, e) : void 0
						}, c.prototype._resubscribe = function() {
							var t = this._emitter._callbacks;
							for (var e in t) this._connection.sendMsg(o.TOPIC.EVENT, o.ACTIONS.SUBSCRIBE, [e])
						}, e.exports = c
					}, {
						"../constants/constants": 11,
						"../message/message-builder": 16,
						"../message/message-parser": 17,
						"../utils/listener": 28,
						"../utils/resubscribe-notifier": 29,
						"component-emitter2": 1
					}],
					15: [function(t, i, s) {
						(function(e) {
							var s = e.WebSocket || e.MozWebSocket,
								n = t("ws"),
								r = t("./message-parser"),
								o = t("./message-builder"),
								a = t("../utils/utils"),
								h = t("../constants/constants"),
								c = function(t, e, i) {
									this._client = t, this._options = i, this._authParams = null, this._authCallback = null, this._deliberateClose = !1, this._redirecting = !1, this._tooManyAuthAttempts = !1, this._connectionAuthenticationTimeout = !1, this._challengeDenied = !1, this._queuedMessages = [], this._reconnectTimeout = null, this._reconnectionAttempt = 0, this._currentPacketMessageCount = 0, this._sendNextPacketTimeout = null, this._currentMessageResetTimeout = null, this._endpoint = null, this._lastHeartBeat = null, this._heartbeatInterval = null, this._originalUrl = a.parseUrl(e, this._options.path), this._url = this._originalUrl, this._state = h.CONNECTION_STATE.CLOSED, this._createEndpoint()
								};
							c.prototype.getState = function() {
								return this._state
							}, c.prototype.authenticate = function(t, e) {
								return this._authParams = t, this._authCallback = e, this._tooManyAuthAttempts || this._challengeDenied || this._connectionAuthenticationTimeout ? void this._client._$onError(h.TOPIC.ERROR, h.EVENT.IS_CLOSED, "this client's connection was closed") : this._deliberateClose === !0 && this._state === h.CONNECTION_STATE.CLOSED ? (this._createEndpoint(), void(this._deliberateClose = !1)) : void(this._state === h.CONNECTION_STATE.AWAITING_AUTHENTICATION && this._sendAuthParams())
							}, c.prototype.sendMsg = function(t, e, i) {
								this.send(o.getMsg(t, e, i))
							}, c.prototype.send = function(t) {
								this._queuedMessages.push(t), this._currentPacketMessageCount++, null === this._currentMessageResetTimeout && (this._currentMessageResetTimeout = a.nextTick(this._resetCurrentMessageCount.bind(this))), this._state === h.CONNECTION_STATE.OPEN && this._queuedMessages.length < this._options.maxMessagesPerPacket && this._currentPacketMessageCount < this._options.maxMessagesPerPacket ? this._sendQueuedMessages() : null === this._sendNextPacketTimeout && this._queueNextPacket()
							}, c.prototype.close = function() {
								clearInterval(this._heartbeatInterval), this._deliberateClose = !0, this._endpoint.close()
							}, c.prototype._createEndpoint = function() {
								this._endpoint = s ? new s(this._url) : new n(this._url, this._options.nodeSocketOptions), this._endpoint.onopen = this._onOpen.bind(this), this._endpoint.onerror = this._onError.bind(this), this._endpoint.onclose = this._onClose.bind(this), this._endpoint.onmessage = this._onMessage.bind(this)
							}, c.prototype._resetCurrentMessageCount = function() {
								this._currentPacketMessageCount = 0, this._currentMessageResetTimeout = null
							}, c.prototype._sendQueuedMessages = function() {
								if (this._state === h.CONNECTION_STATE.OPEN && this._endpoint.readyState === this._endpoint.OPEN) {
									if (0 === this._queuedMessages.length) return void(this._sendNextPacketTimeout = null);
									var t = this._queuedMessages.splice(0, this._options.maxMessagesPerPacket).join("");
									0 !== this._queuedMessages.length ? this._queueNextPacket() : this._sendNextPacketTimeout = null, this._submit(t)
								}
							}, c.prototype._submit = function(t) {
								this._endpoint.readyState === this._endpoint.OPEN ? this._endpoint.send(t) : this._onError("Tried to send message on a closed websocket connection")
							}, c.prototype._queueNextPacket = function() {
								var t = this._sendQueuedMessages.bind(this),
									e = this._options.timeBetweenSendingQueuedPackages;
								this._sendNextPacketTimeout = setTimeout(t, e)
							}, c.prototype._sendAuthParams = function() {
								this._setState(h.CONNECTION_STATE.AUTHENTICATING);
								var t = o.getMsg(h.TOPIC.AUTH, h.ACTIONS.REQUEST, [this._authParams]);
								this._submit(t)
							}, c.prototype._checkHeartBeat = function() {
								var t = 2 * this._options.heartbeatInterval;
								Date.now() - this._lastHeartBeat > t && (clearInterval(this._heartbeatInterval), this._client._$onError(h.TOPIC.CONNECTION, h.EVENT.CONNECTION_ERROR, "Two connections heartbeats missed successively"), this._endpoint.close())
							}, c.prototype._onOpen = function() {
								this._clearReconnect(), this._lastHeartBeat = Date.now(), this._heartbeatInterval = a.setInterval(this._checkHeartBeat.bind(this), this._options.heartbeatInterval), this._setState(h.CONNECTION_STATE.AWAITING_CONNECTION)
							}, c.prototype._onError = function(t) {
								clearInterval(this._heartbeatInterval), this._setState(h.CONNECTION_STATE.ERROR), setTimeout(function() {
									var e;
									e = "ECONNRESET" === t.code || "ECONNREFUSED" === t.code ? "Can't connect! Deepstream server unreachable on " + this._originalUrl : t.toString(), this._client._$onError(h.TOPIC.CONNECTION, h.EVENT.CONNECTION_ERROR, e)
								}.bind(this), 1)
							}, c.prototype._onClose = function() {
								clearInterval(this._heartbeatInterval), this._redirecting === !0 ? (this._redirecting = !1, this._createEndpoint()) : this._deliberateClose === !0 ? this._setState(h.CONNECTION_STATE.CLOSED) : this._tryReconnect()
							}, c.prototype._onMessage = function(t) {
								var e, i = r.parse(t.data, this._client);
								for (e = 0; e < i.length; e++) null !== i[e] && (i[e].topic === h.TOPIC.CONNECTION ? this._handleConnectionResponse(i[e]) : i[e].topic === h.TOPIC.AUTH ? this._handleAuthResponse(i[e]) : this._client._$onMessage(i[e]))
							}, c.prototype._handleConnectionResponse = function(t) {
								t.action === h.ACTIONS.PING ? (this._lastHeartBeat = Date.now(), this._submit(o.getMsg(h.TOPIC.CONNECTION, h.ACTIONS.PONG))) : t.action === h.ACTIONS.ACK ? (this._setState(h.CONNECTION_STATE.AWAITING_AUTHENTICATION), this._authParams && this._sendAuthParams()) : t.action === h.ACTIONS.CHALLENGE ? (this._setState(h.CONNECTION_STATE.CHALLENGING), this._submit(o.getMsg(h.TOPIC.CONNECTION, h.ACTIONS.CHALLENGE_RESPONSE, [this._originalUrl]))) : t.action === h.ACTIONS.REJECTION ? (this._challengeDenied = !0, this.close()) : t.action === h.ACTIONS.REDIRECT ? (this._url = t.data[0], this._redirecting = !0, this._endpoint.close()) : t.action === h.ACTIONS.ERROR && t.data[0] === h.EVENT.CONNECTION_AUTHENTICATION_TIMEOUT && (this._deliberateClose = !0, this._connectionAuthenticationTimeout = !0, this._client._$onError(h.TOPIC.CONNECTION, t.data[0], t.data[1]))
							}, c.prototype._handleAuthResponse = function(t) {
								t.action === h.ACTIONS.ERROR ? (t.data[0] === h.EVENT.TOO_MANY_AUTH_ATTEMPTS ? (this._deliberateClose = !0, this._tooManyAuthAttempts = !0) : this._setState(h.CONNECTION_STATE.AWAITING_AUTHENTICATION), this._authCallback && this._authCallback(!1, this._getAuthData(t.data[1]))) : t.action === h.ACTIONS.ACK && (this._setState(h.CONNECTION_STATE.OPEN), this._authCallback && this._authCallback(!0, this._getAuthData(t.data[0])), this._sendQueuedMessages())
							}, c.prototype._getAuthData = function(t) {
								return void 0 === t ? null : r.convertTyped(t, this._client)
							}, c.prototype._setState = function(t) {
								this._state = t, this._client.emit(h.EVENT.CONNECTION_STATE_CHANGED, t)
							}, c.prototype._tryReconnect = function() {
								null === this._reconnectTimeout && (this._reconnectionAttempt < this._options.maxReconnectAttempts ? (this._setState(h.CONNECTION_STATE.RECONNECTING), this._reconnectTimeout = setTimeout(this._tryOpen.bind(this), Math.min(this._options.maxReconnectInterval, this._options.reconnectIntervalIncrement * this._reconnectionAttempt)), this._reconnectionAttempt++) : (this._clearReconnect(), this.close(), this._client.emit(h.MAX_RECONNECTION_ATTEMPTS_REACHED, this._reconnectionAttempt)))
							}, c.prototype._tryOpen = function() {
								this._originalUrl !== this._url && (this._url = this._originalUrl), this._createEndpoint(), this._reconnectTimeout = null
							}, c.prototype._clearReconnect = function() {
								clearTimeout(this._reconnectTimeout), this._reconnectTimeout = null, this._reconnectionAttempt = 0
							}, i.exports = c
						}).call(this, "undefined" != typeof e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"../constants/constants": 11,
						"../utils/utils": 31,
						"./message-builder": 16,
						"./message-parser": 17,
						ws: 2
					}],
					16: [function(t, e, i) {
						var s = t("../constants/constants"),
							n = s.MESSAGE_PART_SEPERATOR;
						i.getMsg = function(t, e, i) {
							if (i && !(i instanceof Array)) throw new Error("data must be an array");
							var r, o = [t, e];
							if (i) for (r = 0; r < i.length; r++)"object" == typeof i[r] ? o.push(JSON.stringify(i[r])) : o.push(i[r]);
							return o.join(n) + s.MESSAGE_SEPERATOR
						}, i.typed = function(t) {
							var e = typeof t;
							if ("string" === e) return s.TYPES.STRING + t;
							if (null === t) return s.TYPES.NULL;
							if ("object" === e) return s.TYPES.OBJECT + JSON.stringify(t);
							if ("number" === e) return s.TYPES.NUMBER + t.toString();
							if (t === !0) return s.TYPES.TRUE;
							if (t === !1) return s.TYPES.FALSE;
							if (void 0 === t) return s.TYPES.UNDEFINED;
							throw new Error("Can't serialize type " + t)
						}
					}, {
						"../constants/constants": 11
					}],
					17: [function(t, e, i) {
						var s = t("../constants/constants"),
							n = function() {
								this._actions = this._getActions()
							};
						n.prototype.parse = function(t, e) {
							var i, n = [],
								r = t.split(s.MESSAGE_SEPERATOR);
							for (i = 0; i < r.length; i++) r[i].length > 2 && n.push(this._parseMessage(r[i], e));
							return n
						}, n.prototype.convertTyped = function(t, e) {
							var i = t.charAt(0);
							if (i === s.TYPES.STRING) return t.substr(1);
							if (i === s.TYPES.OBJECT) try {
								return JSON.parse(t.substr(1))
							} catch (i) {
								return void e._$onError(s.TOPIC.ERROR, s.EVENT.MESSAGE_PARSE_ERROR, i.toString() + "(" + t + ")")
							}
							return i === s.TYPES.NUMBER ? parseFloat(t.substr(1)) : i === s.TYPES.NULL ? null : i === s.TYPES.TRUE || i !== s.TYPES.FALSE && void(i !== s.TYPES.UNDEFINED && e._$onError(s.TOPIC.ERROR, s.EVENT.MESSAGE_PARSE_ERROR, "UNKNOWN_TYPE (" + t + ")"))
						}, n.prototype._getActions = function() {
							var t, e = {};
							for (t in s.ACTIONS) e[s.ACTIONS[t]] = t;
							return e
						}, n.prototype._parseMessage = function(t, e) {
							var i = t.split(s.MESSAGE_PART_SEPERATOR),
								n = {};
							return i.length < 2 ? (t.processedError = !0, e._$onError(s.TOPIC.ERROR, s.EVENT.MESSAGE_PARSE_ERROR, "Insufficiant message parts"), null) : void 0 === this._actions[i[1]] ? (t.processedError = !0, e._$onError(s.TOPIC.ERROR, s.EVENT.MESSAGE_PARSE_ERROR, "Unknown action " + i[1]), null) : (n.raw = t, n.topic = i[0], n.action = i[1], n.data = i.splice(2), n)
						}, e.exports = new n
					}, {
						"../constants/constants": 11
					}],
					18: [function(t, e, i) {
						var s = t("component-emitter2"),
							n = t("../constants/constants"),
							r = (t("../message/message-parser"), t("../message/message-builder"), t("../utils/resubscribe-notifier")),
							o = function(t, e, i) {
								this._options = t, this._connection = e, this._client = i, this._emitter = new s, this._ackTimeoutRegistry = i._$getAckTimeoutRegistry(), this._resubscribeNotifier = new r(this._client, this._resubscribe.bind(this))
							};
						o.prototype.getAll = function(t) {
							this._emitter.hasListeners(n.ACTIONS.QUERY) || this._connection.sendMsg(n.TOPIC.PRESENCE, n.ACTIONS.QUERY, [n.ACTIONS.QUERY]), this._emitter.once(n.ACTIONS.QUERY, t)
						}, o.prototype.subscribe = function(t) {
							if (void 0 !== t && "function" != typeof t) throw new Error("invalid argument callback");
							this._emitter.hasListeners(n.TOPIC.PRESENCE) || (this._ackTimeoutRegistry.add({
								topic: n.TOPIC.PRESENCE,
								action: n.ACTIONS.SUBSCRIBE,
								name: n.TOPIC.PRESENCE
							}), this._connection.sendMsg(n.TOPIC.PRESENCE, n.ACTIONS.SUBSCRIBE, [n.ACTIONS.SUBSCRIBE])), this._emitter.on(n.TOPIC.PRESENCE, t)
						}, o.prototype.unsubscribe = function(t) {
							if (void 0 !== t && "function" != typeof t) throw new Error("invalid argument callback");
							this._emitter.off(n.TOPIC.PRESENCE, t), this._emitter.hasListeners(n.TOPIC.PRESENCE) || (this._ackTimeoutRegistry.add({
								topic: n.TOPIC.PRESENCE,
								action: n.ACTIONS.UNSUBSCRIBE,
								name: n.TOPIC.PRESENCE
							}), this._connection.sendMsg(n.TOPIC.PRESENCE, n.ACTIONS.UNSUBSCRIBE, [n.ACTIONS.UNSUBSCRIBE]))
						}, o.prototype._$handle = function(t) {
							t.action === n.ACTIONS.ERROR && t.data[0] === n.EVENT.MESSAGE_DENIED ? (this._ackTimeoutRegistry.remove(n.TOPIC.PRESENCE, t.data[1]), t.processedError = !0, this._client._$onError(n.TOPIC.PRESENCE, n.EVENT.MESSAGE_DENIED, t.data[1])) : t.action === n.ACTIONS.ACK ? this._ackTimeoutRegistry.clear(t) : t.action === n.ACTIONS.PRESENCE_JOIN ? this._emitter.emit(n.TOPIC.PRESENCE, t.data[0], !0) : t.action === n.ACTIONS.PRESENCE_LEAVE ? this._emitter.emit(n.TOPIC.PRESENCE, t.data[0], !1) : t.action === n.ACTIONS.QUERY ? this._emitter.emit(n.ACTIONS.QUERY, t.data) : this._client._$onError(n.TOPIC.PRESENCE, n.EVENT.UNSOLICITED_MESSAGE, t.action)
						}, o.prototype._resubscribe = function() {
							var t = this._emitter._callbacks;
							t && t[n.TOPIC.PRESENCE] && this._connection.sendMsg(n.TOPIC.PRESENCE, n.ACTIONS.SUBSCRIBE, [n.ACTIONS.SUBSCRIBE])
						}, e.exports = o
					}, {
						"../constants/constants": 11,
						"../message/message-builder": 16,
						"../message/message-parser": 17,
						"../utils/resubscribe-notifier": 29,
						"component-emitter2": 1
					}],
					19: [function(t, e, i) {
						var s = t("./record"),
							n = t("component-emitter2"),
							r = function(t) {
								this.name = null, this._recordHandler = t, this._record = null, this._subscriptions = [], this._proxyMethod("delete"), this._proxyMethod("set"), this._proxyMethod("discard")
							};
						n(r.prototype), r.prototype.get = function(t) {
							if (null !== this._record) return this._record.get(t)
						}, r.prototype.subscribe = function() {
							var t = s.prototype._normalizeArguments(arguments);
							t.triggerNow = !0, this._subscriptions.push(t), null !== this._record && this._record.subscribe(t)
						}, r.prototype.unsubscribe = function() {
							var t, e = s.prototype._normalizeArguments(arguments),
								i = [];
							for (t = 0; t < this._subscriptions.length; t++) this._subscriptions[t].path === e.path && this._subscriptions[t].callback === e.callback || i.push(this._subscriptions[t]);
							this._subscriptions = i, null !== this._record && this._record.unsubscribe(e)
						}, r.prototype.setName = function(t) {
							this.name = t;
							var e;
							if (null !== this._record && !this._record.isDestroyed) {
								for (e = 0; e < this._subscriptions.length; e++) this._record.unsubscribe(this._subscriptions[e]);
								this._record.discard()
							}
							for (this._record = this._recordHandler.getRecord(t), e = 0; e < this._subscriptions.length; e++) this._record.subscribe(this._subscriptions[e]);
							this._record.whenReady(this.emit.bind(this, "ready")), this.emit("nameChanged", t)
						}, r.prototype._proxyMethod = function(t) {
							this[t] = this._callMethodOnRecord.bind(this, t)
						}, r.prototype._callMethodOnRecord = function(t) {
							if (null === this._record) throw new Error("Can`t invoke " + t + ". AnonymousRecord not initialised. Call setName first");
							if ("function" != typeof this._record[t]) throw new Error(t + " is not a method on the record");
							var e = Array.prototype.slice.call(arguments, 1);
							return this._record[t].apply(this._record, e)
						}, e.exports = r
					}, {
						"./record": 23,
						"component-emitter2": 1
					}],
					20: [function(t, e, i) {
						function s(t, e, i) {
							var n, o;
							if (null === t || null === e) return e;
							if (Array.isArray(t) && Array.isArray(e)) {
								var a;
								for (n = 0; n < e.length; n++) {
									var h = s(t[n], e[n], !1);
									if (!a) {
										if (h === t[n]) continue;
										for (a = [], o = 0; o < n; ++o) a[o] = t[o]
									}
									a[n] = h
								}
								return a = a && i !== !1 ? r.deepCopy(a) : a, a = a || (t.length === e.length ? t : e)
							}
							if (Array.isArray(e) || "object" != typeof t || "object" != typeof e) return e !== t ? i !== !1 ? r.deepCopy(e) : e : t;
							var c, u = Object.keys(e);
							for (n = 0; n < u.length; n++) {
								var h = s(t[u[n]], e[u[n]], !1);
								if (!c) {
									if (h === t[u[n]]) continue;
									for (c = Object.create(null), o = 0; o < n; ++o) c[u[o]] = t[u[o]]
								}
								c[u[n]] = e[u[n]]
							}
							return c = c && i !== !1 ? r.deepCopy(c) : c, c = c || (Object.keys(t).length === u.length ? t : e)
						}
						function n(t) {
							if (a[t]) return a[t];
							var e = "undefined" !== String(t) ? String(t).match(o) : [];
							if (!e) throw new Error("invalid path " + t);
							return a[t] = e
						}
						var r = t("../utils/utils"),
							o = /([^\.\[\]\s]+)/g,
							a = Object.create(null);
						e.exports.get = function(t, e, i) {
							for (var s = n(e), o = 0; o < s.length; o++) {
								if (void 0 === t) return;
								if ("object" != typeof t) throw new Error("invalid data or path");
								t = t[s[o]]
							}
							return i !== !1 ? r.deepCopy(t) : t
						}, e.exports.set = function(t, i, o, a) {
							var h = n(i);
							if (0 === h.length) return s(t, o, a);
							var c = e.exports.get(t, i, !1),
								u = s(c, o, a);
							if (u === c) return t;
							for (var l = r.shallowCopy(t), _ = l, p = 0; p < h.length; p++) p === h.length - 1 ? _[h[p]] = u : _ = void 0 !== _[h[p]] ? _[h[p]] = r.shallowCopy(_[h[p]]) : h[p + 1] && !isNaN(h[p + 1]) ? _[h[p]] = [] : _[h[p]] = Object.create(null);
							return l
						}
					}, {
						"../utils/utils": 31
					}],
					21: [function(t, e, i) {
						var s = t("component-emitter2"),
							n = t("./record"),
							r = t("../constants/constants"),
							o = "entry-added",
							a = "entry-removed",
							h = "entry-moved",
							c = function(t, e, i) {
								if ("string" != typeof e || 0 === e.length) throw new Error("invalid argument name");
								this._recordHandler = t, this._record = this._recordHandler.getRecord(e, i), this._record._applyUpdate = this._applyUpdate.bind(this), this._record.on("delete", this.emit.bind(this, "delete")), this._record.on("discard", this._onDiscard.bind(this)), this._record.on("ready", this._onReady.bind(this)), this.isDestroyed = this._record.isDestroyed, this.isReady = this._record.isReady, this.name = e, this._queuedMethods = [], this._beforeStructure = null, this._hasAddListener = null, this._hasRemoveListener = null, this._hasMoveListener = null, this.delete = this._record.delete.bind(this._record), this.discard = this._record.discard.bind(this._record), this.whenReady = this._record.whenReady.bind(this)
							};
						s(c.prototype), c.prototype.getEntries = function() {
							var t = this._record.get();
							return t instanceof Array ? t : []
						}, c.prototype.isEmpty = function() {
							return 0 === this.getEntries().length
						}, c.prototype.setEntries = function(t) {
							var e, i = "entries must be an array of record names";
							if (!(t instanceof Array)) throw new Error(i);
							for (e = 0; e < t.length; e++) if ("string" != typeof t[e]) throw new Error(i);
							this._record.isReady === !1 ? this._queuedMethods.push(this.setEntries.bind(this, t)) : (this._beforeChange(), this._record.set(t), this._afterChange())
						}, c.prototype.removeEntry = function(t, e) {
							if (this._record.isReady === !1) return void this._queuedMethods.push(this.removeEntry.bind(this, t, e));
							var i, s = this._record.get(),
								n = this._hasIndex(e),
								r = [];
							for (i = 0; i < s.length; i++)(s[i] !== t || n && e !== i) && r.push(s[i]);
							this._beforeChange(), this._record.set(r), this._afterChange()
						}, c.prototype.addEntry = function(t, e) {
							if ("string" != typeof t) throw new Error("Entry must be a recordName");
							if (this._record.isReady === !1) return void this._queuedMethods.push(this.addEntry.bind(this, t, e));
							var i = this._hasIndex(e),
								s = this.getEntries();
							i ? s.splice(e, 0, t) : s.push(t), this._beforeChange(), this._record.set(s), this._afterChange()
						}, c.prototype.subscribe = function() {
							var t = n.prototype._normalizeArguments(arguments);
							if (t.path) throw new Error("path is not supported for List.subscribe");
							var e = function(t) {
									t(this.getEntries())
								}.bind(this, t.callback);
							t.callback.wrappedCallback = e, t.callback = e, this._record.subscribe(t)
						}, c.prototype.unsubscribe = function() {
							var t = n.prototype._normalizeArguments(arguments);
							if (t.path) throw new Error("path is not supported for List.unsubscribe");
							t.callback = t.callback.wrappedCallback, this._record.unsubscribe(t)
						}, c.prototype._onReady = function() {
							this.isReady = !0;
							for (var t = 0; t < this._queuedMethods.length; t++) this._queuedMethods[t]();
							this._queuedMethods = [], this.emit("ready")
						}, c.prototype._onDiscard = function() {
							this.isDestroyed = !0, this.emit("discard")
						}, c.prototype._applyUpdate = function(t) {
							if (t.action === r.ACTIONS.PATCH) throw new Error("PATCH is not supported for Lists");
							"[" !== t.data[2].charAt(0) && (t.data[2] = "[]"), this._beforeChange(), n.prototype._applyUpdate.call(this._record, t), this._afterChange()
						}, c.prototype._hasIndex = function(t) {
							var e = !1,
								i = this.getEntries();
							if (void 0 !== t) {
								if (isNaN(t)) throw new Error("Index must be a number");
								if (t !== i.length && (t >= i.length || t < 0)) throw new Error("Index must be within current entries");
								e = !0
							}
							return e
						}, c.prototype._beforeChange = function() {
							this._hasAddListener = this.listeners(o).length > 0, this._hasRemoveListener = this.listeners(a).length > 0, this._hasMoveListener = this.listeners(h).length > 0, this._hasAddListener || this._hasRemoveListener || this._hasMoveListener ? this._beforeStructure = this._getStructure() : this._beforeStructure = null
						}, c.prototype._afterChange = function() {
							if (null !== this._beforeStructure) {
								var t, e, i = this._getStructure(),
									s = this._beforeStructure;
								if (this._hasRemoveListener) for (t in s) for (e = 0; e < s[t].length; e++) void 0 !== i[t] && void 0 !== i[t][e] || this.emit(a, t, s[t][e]);
								if (this._hasAddListener || this._hasMoveListener) for (t in i) if (void 0 === s[t]) for (e = 0; e < i[t].length; e++) this.emit(o, t, i[t][e]);
								else for (e = 0; e < i[t].length; e++) s[t][e] !== i[t][e] && (void 0 === s[t][e] ? this.emit(o, t, i[t][e]) : this.emit(h, t, i[t][e]))
							}
						}, c.prototype._getStructure = function() {
							var t, e = {},
								i = this._record.get();
							for (t = 0; t < i.length; t++) void 0 === e[i[t]] ? e[i[t]] = [t] : e[i[t]].push(t);
							return e
						}, e.exports = c
					}, {
						"../constants/constants": 11,
						"./record": 23,
						"component-emitter2": 1
					}],
					22: [function(t, e, i) {
						var s = t("./record"),
							n = t("./anonymous-record"),
							r = t("./list"),
							o = t("../utils/listener"),
							a = t("../utils/single-notifier"),
							h = t("../constants/constants"),
							c = t("../message/message-parser"),
							u = t("component-emitter2"),
							l = function(t, e, i) {
								this._options = t, this._connection = e, this._client = i, this._records = {}, this._lists = {}, this._listener = {}, this._destroyEventEmitter = new u, this._hasRegistry = new a(i, e, h.TOPIC.RECORD, h.ACTIONS.HAS, this._options.recordReadTimeout), this._snapshotRegistry = new a(i, e, h.TOPIC.RECORD, h.ACTIONS.SNAPSHOT, this._options.recordReadTimeout)
							};
						l.prototype.getRecord = function(t, e) {
							return this._records[t] || (this._records[t] = new s(t, e || {}, this._connection, this._options, this._client), this._records[t].on("error", this._onRecordError.bind(this, t)), this._records[t].on("destroyPending", this._onDestroyPending.bind(this, t)), this._records[t].on("delete", this._removeRecord.bind(this, t)), this._records[t].on("discard", this._removeRecord.bind(this, t))), this._records[t].usages++, this._records[t]
						}, l.prototype.getList = function(t, e) {
							return this._lists[t] ? this._records[t].usages++ : this._lists[t] = new r(this, t, e), this._lists[t]
						}, l.prototype.getAnonymousRecord = function() {
							return new n(this)
						}, l.prototype.listen = function(t, e) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument pattern");
							if ("function" != typeof e) throw new Error("invalid argument callback");
							return this._listener[t] && !this._listener[t].destroyPending ? this._client._$onError(h.TOPIC.RECORD, h.EVENT.LISTENER_EXISTS, t) : (this._listener[t] && this._listener[t].destroy(), void(this._listener[t] = new o(h.TOPIC.RECORD, t, e, this._options, this._client, this._connection)))
						}, l.prototype.unlisten = function(t) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument pattern");
							var e = this._listener[t];
							e && !e.destroyPending ? e.sendDestroy() : this._listener[t] ? (this._listener[t].destroy(), delete this._listener[t]) : this._client._$onError(h.TOPIC.RECORD, h.EVENT.NOT_LISTENING, t)
						}, l.prototype.snapshot = function(t, e) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument name");
							this._records[t] && this._records[t].isReady ? e(null, this._records[t].get()) : this._snapshotRegistry.request(t, e)
						}, l.prototype.has = function(t, e) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument name");
							this._records[t] ? e(null, !0) : this._hasRegistry.request(t, e)
						}, l.prototype._$handle = function(t) {
							var e;
							if (t.action === h.ACTIONS.ERROR && t.data[0] !== h.EVENT.VERSION_EXISTS && t.data[0] !== h.ACTIONS.SNAPSHOT && t.data[0] !== h.ACTIONS.HAS && t.data[0] !== h.EVENT.MESSAGE_DENIED) return t.processedError = !0, void this._client._$onError(h.TOPIC.RECORD, t.data[0], t.data[1]);
							if (t.action === h.ACTIONS.ACK || t.action === h.ACTIONS.ERROR) {
								if (e = t.data[1], t.data[0] === h.ACTIONS.DELETE || t.data[0] === h.ACTIONS.UNSUBSCRIBE || t.data[0] === h.EVENT.MESSAGE_DENIED && t.data[2] === h.ACTIONS.DELETE) return this._destroyEventEmitter.emit("destroy_ack_" + e, t), void(t.data[0] === h.ACTIONS.DELETE && this._records[e] && this._records[e]._$onMessage(t));
								if (t.data[0] === h.ACTIONS.SNAPSHOT) return t.processedError = !0, void this._snapshotRegistry.recieve(e, t.data[2]);
								if (t.data[0] === h.ACTIONS.HAS) return t.processedError = !0, void this._snapshotRegistry.recieve(e, t.data[2])
							} else e = t.data[0];
							var i = !1;
							this._records[e] && (i = !0, this._records[e]._$onMessage(t)), t.action === h.ACTIONS.READ && this._snapshotRegistry.hasRequest(e) && (i = !0, this._snapshotRegistry.recieve(e, null, JSON.parse(t.data[2]))), t.action === h.ACTIONS.HAS && this._hasRegistry.hasRequest(e) && (i = !0, this._hasRegistry.recieve(e, null, c.convertTyped(t.data[1]))), t.action === h.ACTIONS.ACK && t.data[0] === h.ACTIONS.UNLISTEN && this._listener[e] && this._listener[e].destroyPending ? (i = !0, this._listener[e].destroy(), delete this._listener[e]) : this._listener[e] ? (i = !0, this._listener[e]._$onMessage(t)) : t.action === h.ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED ? i = !0 : t.action === h.ACTIONS.SUBSCRIPTION_HAS_PROVIDER && (i = !0), i || (t.processedError = !0, this._client._$onError(h.TOPIC.RECORD, h.EVENT.UNSOLICITED_MESSAGE, e))
						}, l.prototype._onRecordError = function(t, e) {
							this._client._$onError(h.TOPIC.RECORD, e, t)
						}, l.prototype._onDestroyPending = function(t) {
							if (!this._records[t]) return void this.emit("error", "Record '" + t + "' does not exists");
							var e = this._records[t]._$onMessage.bind(this._records[t]);
							this._destroyEventEmitter.once("destroy_ack_" + t, e), this._removeRecord(t)
						}, l.prototype._removeRecord = function(t) {
							delete this._records[t], delete this._lists[t]
						}, e.exports = l
					}, {
						"../constants/constants": 11,
						"../message/message-parser": 17,
						"../utils/listener": 28,
						"../utils/single-notifier": 30,
						"./anonymous-record": 19,
						"./list": 21,
						"./record": 23,
						"component-emitter2": 1
					}],
					23: [function(t, e, i) {
						var s = t("./json-path"),
							n = (t("../utils/utils"), t("../utils/resubscribe-notifier")),
							r = t("component-emitter2"),
							o = t("../constants/constants"),
							a = t("../message/message-builder"),
							h = t("../message/message-parser"),
							c = function(t, e, i, s, a) {
								if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument name");
								this.name = t, this.usages = 0, this._recordOptions = e, this._connection = i, this._client = a, this._options = s, this.isReady = !1, this.isDestroyed = !1, this.hasProvider = !1, this._$data = Object.create(null), this.version = null, this._eventEmitter = new r, this._queuedMethodCalls = [], this._writeCallbacks = {}, this._mergeStrategy = null, s.mergeStrategy && this.setMergeStrategy(s.mergeStrategy), this._ackTimeoutRegistry = a._$getAckTimeoutRegistry(), this._resubscribeNotifier = new n(this._client, this._sendRead.bind(this)), this._readAckTimeout = this._ackTimeoutRegistry.add({
									topic: o.TOPIC.RECORD,
									name: t,
									action: o.ACTIONS.SUBSCRIBE,
									timeout: this._options.recordReadAckTimeout
								}), this._responseTimeout = this._ackTimeoutRegistry.add({
									topic: o.TOPIC.RECORD,
									name: t,
									action: o.ACTIONS.READ,
									event: o.EVENT.RESPONSE_TIMEOUT,
									timeout: this._options.recordReadTimeout
								}), this._sendRead()
							};
						r(c.prototype), c.prototype.setMergeStrategy = function(t) {
							if ("function" != typeof t) throw new Error("Invalid merge strategy: Must be a Function");
							this._mergeStrategy = t
						}, c.prototype.get = function(t) {
							return s.get(this._$data, t, this._options.recordDeepCopy)
						}, c.prototype.set = function(t, e, i) {
							var n, r;
							if (1 === arguments.length) {
								if ("object" != typeof t) throw new Error("invalid argument data");
								r = t
							} else if (2 === arguments.length) if ("string" == typeof t && 0 !== t.length && "function" != typeof e) n = t, r = e;
							else {
								if ("object" != typeof t || "function" != typeof e) throw new Error("invalid argument path");
								r = t, i = e
							} else if (3 === arguments.length) {
								if ("string" != typeof t || 0 === t.length || "function" != typeof i) throw new Error("invalid arguments, must pass in a string, a value and a function");
								n = t, r = e
							}
							if (this._checkDestroyed("set")) return this;
							if (!this.isReady) return this._queuedMethodCalls.push({
								method: "set",
								args: arguments
							}), this;
							var a = this._$data,
								h = s.set(a, n, r, this._options.recordDeepCopy);
							if (a === h) return this;
							var c;
							if (void 0 !== i) {
								c = {}, c.writeSuccess = !0, this._setUpCallback(this.version, i);
								var u = this._client.getConnectionState();
								u !== o.CONNECTION_STATE.CLOSED && u !== o.CONNECTION_STATE.RECONNECTING || i("Connection error: error updating record as connection was closed")
							}
							return this._sendUpdate(n, r, c), this._applyChange(h), this
						}, c.prototype.subscribe = function(t, e, i) {
							var s = this._normalizeArguments(arguments);
							if (void 0 !== s.path && ("string" != typeof s.path || 0 === s.path.length)) throw new Error("invalid argument path");
							if ("function" != typeof s.callback) throw new Error("invalid argument callback");
							this._checkDestroyed("subscribe") || (s.triggerNow ? this.whenReady(function() {
								this._eventEmitter.on(s.path, s.callback), s.callback(this.get(s.path))
							}.bind(this)) : this._eventEmitter.on(s.path, s.callback))
						}, c.prototype.unsubscribe = function(t, e) {
							var i = this._normalizeArguments(arguments);
							if (void 0 !== i.path && ("string" != typeof i.path || 0 === i.path.length)) throw new Error("invalid argument path");
							if (void 0 !== i.callback && "function" != typeof i.callback) throw new Error("invalid argument callback");
							this._checkDestroyed("unsubscribe") || this._eventEmitter.off(i.path, i.callback)
						}, c.prototype.discard = function() {
							this._checkDestroyed("discard") || this.whenReady(function() {
								this.usages--, this.usages <= 0 && (this.emit("destroyPending"), this._discardTimeout = this._ackTimeoutRegistry.add({
									topic: o.TOPIC.RECORD,
									name: this.name,
									action: o.ACTIONS.UNSUBSCRIBE
								}), this._connection.sendMsg(o.TOPIC.RECORD, o.ACTIONS.UNSUBSCRIBE, [this.name]))
							}.bind(this))
						}, c.prototype.delete = function() {
							this._checkDestroyed("delete") || this.whenReady(function() {
								this.emit("destroyPending"), this._deleteAckTimeout = this._ackTimeoutRegistry.add({
									topic: o.TOPIC.RECORD,
									name: this.name,
									action: o.ACTIONS.DELETE,
									event: o.EVENT.DELETE_TIMEOUT,
									timeout: this._options.recordDeleteTimeout
								}), this._connection.sendMsg(o.TOPIC.RECORD, o.ACTIONS.DELETE, [this.name])
							}.bind(this))
						}, c.prototype.whenReady = function(t) {
							this.isReady === !0 ? t(this) : this.once("ready", t.bind(this, this))
						}, c.prototype._$onMessage = function(t) {
							if (t.action === o.ACTIONS.READ) null === this.version ? (this._ackTimeoutRegistry.clear(t), this._onRead(t)) : this._applyUpdate(t, this._client);
							else if (t.action === o.ACTIONS.ACK) this._processAckMessage(t);
							else if (t.action === o.ACTIONS.UPDATE || t.action === o.ACTIONS.PATCH) this._applyUpdate(t, this._client);
							else if (t.action === o.ACTIONS.WRITE_ACKNOWLEDGEMENT) for (var e = JSON.parse(t.data[1]), i = 0; i < e.length; i++) {
								var s = this._writeCallbacks[e[i]];
								void 0 !== s && (s(h.convertTyped(t.data[2], this._client)), delete this._writeCallbacks[e[i]])
							} else if (t.data[0] === o.EVENT.VERSION_EXISTS) this._recoverRecord(t.data[2], JSON.parse(t.data[3]), t);
							else if (t.data[0] === o.EVENT.MESSAGE_DENIED) this._clearTimeouts();
							else if (t.action === o.ACTIONS.SUBSCRIPTION_HAS_PROVIDER) {
								var n = h.convertTyped(t.data[1], this._client);
								this.hasProvider = n, this.emit("hasProviderChanged", n)
							}
						}, c.prototype._recoverRecord = function(t, e, i) {
							i.processedError = !0, this._mergeStrategy ? this._mergeStrategy(this, e, t, this._onRecordRecovered.bind(this, t, e, i)) : this.emit("error", o.EVENT.VERSION_EXISTS, "received update for " + t + " but version is " + this.version)
						}, c.prototype._sendUpdate = function(t, e, i) {
							this.version++;
							var s;
							t ? (s = void 0 === i ? [this.name, this.version, t, a.typed(e)] : [this.name, this.version, t, a.typed(e), i], this._connection.sendMsg(o.TOPIC.RECORD, o.ACTIONS.PATCH, s)) : (s = void 0 === i ? [this.name, this.version, e] : [this.name, this.version, e, i], this._connection.sendMsg(o.TOPIC.RECORD, o.ACTIONS.UPDATE, s))
						}, c.prototype._onRecordRecovered = function(t, e, i, n, r) {
							if (n) this.emit("error", o.EVENT.VERSION_EXISTS, "received update for " + t + " but version is " + this.version);
							else {
								var a = this.version;
								this.version = t;
								var h = this._$data,
									c = s.set(h, void 0, r, !1);
								if (h === c) return;
								var u = i.data[4];
								if (u && JSON.parse(u).writeSuccess) {
									var l = this._writeCallbacks[a];
									delete this._writeCallbacks[a], this._setUpCallback(this.version, l)
								}
								this._sendUpdate(void 0, r, u), this._applyChange(c)
							}
						}, c.prototype._processAckMessage = function(t) {
							var e = t.data[0];
							e === o.ACTIONS.SUBSCRIBE ? this._ackTimeoutRegistry.clear(t) : e === o.ACTIONS.DELETE ? (this.emit("delete"), this._destroy()) : e === o.ACTIONS.UNSUBSCRIBE && (this.emit("discard"), this._destroy())
						}, c.prototype._applyUpdate = function(t) {
							var e, i = parseInt(t.data[1], 10);
							if (e = t.action === o.ACTIONS.PATCH ? h.convertTyped(t.data[3], this._client) : JSON.parse(t.data[2]), null === this.version) this.version = i;
							else if (this.version + 1 !== i) return void(t.action === o.ACTIONS.PATCH ? this._connection.sendMsg(o.TOPIC.RECORD, o.ACTIONS.SNAPSHOT, [this.name]) : this._recoverRecord(i, e, t));
							this.version = i, this._applyChange(s.set(this._$data, t.action === o.ACTIONS.PATCH ? t.data[2] : void 0, e))
						}, c.prototype._onRead = function(t) {
							this.version = parseInt(t.data[1], 10), this._applyChange(s.set(this._$data, void 0, JSON.parse(t.data[2]))), this._setReady()
						}, c.prototype._setReady = function() {
							this.isReady = !0;
							for (var t = 0; t < this._queuedMethodCalls.length; t++) this[this._queuedMethodCalls[t].method].apply(this, this._queuedMethodCalls[t].args);
							this._queuedMethodCalls = [], this.emit("ready")
						}, c.prototype._setUpCallback = function(t, e) {
							var i = Number(this.version) + 1;
							this._writeCallbacks[i] = e
						}, c.prototype._sendRead = function() {
							this._connection.sendMsg(o.TOPIC.RECORD, o.ACTIONS.CREATEORREAD, [this.name])
						}, c.prototype._applyChange = function(t) {
							if (!this.isDestroyed) {
								var e = this._$data;
								this._$data = t;
								for (var i = this._eventEmitter.eventNames(), n = 0; n < i.length; n++) {
									var r = s.get(t, i[n], !1),
										o = s.get(e, i[n], !1);
									r !== o && this._eventEmitter.emit(i[n], this.get(i[n]))
								}
							}
						}, c.prototype._normalizeArguments = function(t) {
							if (1 === t.length && "object" == typeof t[0]) return t[0];
							for (var e = Object.create(null), i = 0; i < t.length; i++)"string" == typeof t[i] ? e.path = t[i] : "function" == typeof t[i] ? e.callback = t[i] : "boolean" == typeof t[i] && (e.triggerNow = t[i]);
							return e
						}, c.prototype._clearTimeouts = function() {
							this._ackTimeoutRegistry.remove({
								ackId: this._readAckTimeout,
								silent: !0
							}), this._ackTimeoutRegistry.remove({
								ackId: this._responseTimeout,
								silent: !0
							}), this._ackTimeoutRegistry.remove({
								ackId: this._deleteAckTimeout,
								silent: !0
							}), this._ackTimeoutRegistry.remove({
								ackId: this._discardTimeout,
								silent: !0
							})
						}, c.prototype._checkDestroyed = function(t) {
							return !!this.isDestroyed && (this.emit("error", "Can't invoke '" + t + "'. Record '" + this.name + "' is already destroyed"), !0)
						}, c.prototype._destroy = function() {
							this._clearTimeouts(), this._eventEmitter.off(), this._resubscribeNotifier.destroy(), this.isDestroyed = !0, this.isReady = !1, this._client = null, this._eventEmitter = null, this._connection = null
						}, e.exports = c
					}, {
						"../constants/constants": 11,
						"../message/message-builder": 16,
						"../message/message-parser": 17,
						"../utils/resubscribe-notifier": 29,
						"../utils/utils": 31,
						"./json-path": 20,
						"component-emitter2": 1
					}],
					24: [function(t, e, i) {
						var s = t("../constants/constants"),
							n = t("../utils/resubscribe-notifier"),
							r = t("./rpc-response"),
							o = t("./rpc"),
							a = t("../message/message-parser"),
							h = t("../message/message-builder"),
							c = function(t, e, i) {
								this._options = t, this._connection = e, this._client = i, this._rpcs = {}, this._providers = {}, this._ackTimeoutRegistry = i._$getAckTimeoutRegistry(), this._resubscribeNotifier = new n(this._client, this._reprovide.bind(this))
							};
						c.prototype.provide = function(t, e) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument name");
							if (this._providers[t]) throw new Error("RPC " + t + " already registered");
							if ("function" != typeof e) throw new Error("invalid argument callback");
							this._ackTimeoutRegistry.add({
								topic: s.TOPIC.RPC,
								name: t,
								action: s.ACTIONS.SUBSCRIBE
							}), this._providers[t] = e, this._connection.sendMsg(s.TOPIC.RPC, s.ACTIONS.SUBSCRIBE, [t])
						}, c.prototype.unprovide = function(t) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument name");
							this._providers[t] && (delete this._providers[t], this._ackTimeoutRegistry.add({
								topic: s.TOPIC.RPC,
								name: t,
								action: s.ACTIONS.UNSUBSCRIBE
							}), this._connection.sendMsg(s.TOPIC.RPC, s.ACTIONS.UNSUBSCRIBE, [t]))
						}, c.prototype.make = function(t, e, i) {
							if ("string" != typeof t || 0 === t.length) throw new Error("invalid argument name");
							if ("function" != typeof i) throw new Error("invalid argument callback");
							var n = this._client.getUid(),
								r = h.typed(e);
							this._rpcs[n] = new o(t, i, this._options, this._client), this._connection.sendMsg(s.TOPIC.RPC, s.ACTIONS.REQUEST, [t, n, r])
						}, c.prototype._getRpc = function(t, e, i) {
							var n = this._rpcs[t];
							return n ? n : (this._client._$onError(s.TOPIC.RPC, s.EVENT.UNSOLICITED_MESSAGE, i), null)
						}, c.prototype._respondToRpc = function(t) {
							var e, i = t.data[0],
								n = t.data[1],
								o = null;
							t.data[2] && (o = a.convertTyped(t.data[2], this._client)), this._providers[i] ? (e = new r(this._connection, i, n), this._providers[i](o, e)) : this._connection.sendMsg(s.TOPIC.RPC, s.ACTIONS.REJECTION, [i, n])
						}, c.prototype._$handle = function(t) {
							var e, i, n;
							if (t.action === s.ACTIONS.REQUEST) return void this._respondToRpc(t);
							if (t.action === s.ACTIONS.ACK && (t.data[0] === s.ACTIONS.SUBSCRIBE || t.data[0] === s.ACTIONS.UNSUBSCRIBE)) return void this._ackTimeoutRegistry.clear(t);
							if (t.action === s.ACTIONS.ERROR) {
								if (t.data[0] === s.EVENT.MESSAGE_PERMISSION_ERROR) return;
								if (t.data[0] === s.EVENT.MESSAGE_DENIED && t.data[2] === s.ACTIONS.SUBSCRIBE) return void this._ackTimeoutRegistry.remove({
									topic: s.TOPIC.RPC,
									action: s.ACTIONS.SUBSCRIBE,
									name: t.data[1]
								})
							}
							t.action === s.ACTIONS.ERROR || t.action === s.ACTIONS.ACK ? (i = t.data[0] === s.EVENT.MESSAGE_DENIED && t.data[2] === s.ACTIONS.REQUEST ? t.data[3] : t.data[2], e = t.data[1]) : (e = t.data[0], i = t.data[1]), n = this._getRpc(i, e, t.raw), null !== n && (t.action === s.ACTIONS.ACK ? n.ack() : t.action === s.ACTIONS.RESPONSE ? (n.respond(t.data[2]), delete this._rpcs[i]) : t.action === s.ACTIONS.ERROR && (t.processedError = !0, n.error(t.data[0]), delete this._rpcs[i]))
						}, c.prototype._reprovide = function() {
							for (var t in this._providers) this._connection.sendMsg(s.TOPIC.RPC, s.ACTIONS.SUBSCRIBE, [t])
						}, e.exports = c
					}, {
						"../constants/constants": 11,
						"../message/message-builder": 16,
						"../message/message-parser": 17,
						"../utils/resubscribe-notifier": 29,
						"./rpc": 26,
						"./rpc-response": 25
					}],
					25: [function(t, e, i) {
						var s = t("../constants/constants"),
							n = t("../utils/utils"),
							r = t("../message/message-builder"),
							o = function(t, e, i) {
								this._connection = t, this._name = e, this._correlationId = i, this._isAcknowledged = !1, this._isComplete = !1, this.autoAck = !0, n.nextTick(this._performAutoAck.bind(this))
							};
						o.prototype.ack = function() {
							this._isAcknowledged === !1 && (this._connection.sendMsg(s.TOPIC.RPC, s.ACTIONS.ACK, [s.ACTIONS.REQUEST, this._name, this._correlationId]), this._isAcknowledged = !0)
						}, o.prototype.reject = function() {
							this.autoAck = !1, this._isComplete = !0, this._isAcknowledged = !0, this._connection.sendMsg(s.TOPIC.RPC, s.ACTIONS.REJECTION, [this._name, this._correlationId])
						}, o.prototype.error = function(t) {
							this.autoAck = !1, this._isComplete = !0, this._isAcknowledged = !0, this._connection.sendMsg(s.TOPIC.RPC, s.ACTIONS.ERROR, [t, this._name, this._correlationId]);
						}, o.prototype.send = function(t) {
							if (this._isComplete === !0) throw new Error("Rpc " + this._name + " already completed");
							this.ack();
							var e = r.typed(t);
							this._connection.sendMsg(s.TOPIC.RPC, s.ACTIONS.RESPONSE, [this._name, this._correlationId, e]), this._isComplete = !0
						}, o.prototype._performAutoAck = function() {
							this.autoAck === !0 && this.ack()
						}, e.exports = o
					}, {
						"../constants/constants": 11,
						"../message/message-builder": 16,
						"../utils/utils": 31
					}],
					26: [function(t, e, i) {
						var s = t("../constants/constants"),
							n = t("../message/message-parser"),
							r = function(t, e, i, n) {
								this._options = i, this._callback = e, this._client = n, this._ackTimeoutRegistry = n._$getAckTimeoutRegistry(), this._ackTimeout = this._ackTimeoutRegistry.add({
									topic: s.TOPIC.RPC,
									action: s.ACTIONS.ACK,
									name: t,
									timeout: this._options.rpcAckTimeout,
									callback: this.error.bind(this)
								}), this._responseTimeout = this._ackTimeoutRegistry.add({
									topic: s.TOPIC.RPC,
									action: s.ACTIONS.REQUEST,
									name: t,
									event: s.EVENT.RESPONSE_TIMEOUT,
									timeout: this._options.rpcResponseTimeout,
									callback: this.error.bind(this)
								})
							};
						r.prototype.ack = function() {
							this._ackTimeoutRegistry.remove({
								ackId: this._ackTimeout
							})
						}, r.prototype.respond = function(t) {
							var e = n.convertTyped(t, this._client);
							this._callback(null, e), this._complete()
						}, r.prototype.error = function(t) {
							this._callback(t.event || t), this._complete()
						}, r.prototype._complete = function() {
							this._ackTimeoutRegistry.remove({
								ackId: this._ackTimeout
							}), this._ackTimeoutRegistry.remove({
								ackId: this._responseTimeout
							})
						}, e.exports = r
					}, {
						"../constants/constants": 11,
						"../message/message-parser": 17
					}],
					27: [function(t, e, i) {
						var s = t("../constants/constants"),
							n = t("component-emitter2"),
							r = function(t, e) {
								this._options = e, this._client = t, this._register = {}, this._counter = 1, t.on("connectionStateChanged", this._onConnectionStateChanged.bind(this))
							};
						n(r.prototype), r.prototype.add = function(t) {
							var e = t.timeout || this._options.subscriptionTimeout;
							return this._client.getConnectionState() !== s.CONNECTION_STATE.OPEN || e < 1 ? -1 : (this.remove(t), t.ackId = this._counter++, t.event = t.event || s.EVENT.ACK_TIMEOUT, t.__timeout = setTimeout(this._onTimeout.bind(this, t), e), this._register[this._getUniqueName(t)] = t, t.ackId)
						}, r.prototype.remove = function(t) {
							if (t.ackId) for (var e in this._register) t.ackId === this._register[e].ackId && this.clear({
								topic: this._register[e].topic,
								action: this._register[e].action,
								data: [this._register[e].name]
							});
							this._register[this._getUniqueName(t)] && this.clear({
								topic: t.topic,
								action: t.action,
								data: [t.name]
							})
						}, r.prototype.clear = function(t) {
							var e;
							e = t.action === s.ACTIONS.ACK && t.data.length > 1 ? t.topic + t.data[0] + (t.data[1] ? t.data[1] : "") : t.topic + t.action + t.data[0], this._register[e] && clearTimeout(this._register[e].__timeout), delete this._register[e]
						}, r.prototype._onTimeout = function(t) {
							if (delete this._register[this._getUniqueName(t)], t.callback) delete t.__timeout, delete t.timeout, t.callback(t);
							else {
								var e = "No ACK message received in time" + (t.name ? " for " + t.name : "");
								this._client._$onError(t.topic, t.event, e)
							}
						}, r.prototype._getUniqueName = function(t) {
							return t.topic + t.action + (t.name ? t.name : "")
						}, r.prototype._onConnectionStateChanged = function(t) {
							if (t !== s.CONNECTION_STATE.OPEN) for (var e in this._register) clearTimeout(this._register[e].__timeout)
						}, e.exports = r
					}, {
						"../constants/constants": 11,
						"component-emitter2": 1
					}],
					28: [function(t, e, i) {
						var s = t("../constants/constants"),
							n = t("./resubscribe-notifier"),
							r = function(t, e, i, r, o, a) {
								this._topic = t, this._callback = i, this._pattern = e, this._options = r, this._client = o, this._connection = a, this._ackTimeoutRegistry = o._$getAckTimeoutRegistry(), this._ackTimeoutRegistry.add({
									topic: this._topic,
									name: e,
									action: s.ACTIONS.LISTEN
								}), this._resubscribeNotifier = new n(o, this._sendListen.bind(this)), this._sendListen(), this.destroyPending = !1
							};
						r.prototype.sendDestroy = function() {
							this.destroyPending = !0, this._connection.sendMsg(this._topic, s.ACTIONS.UNLISTEN, [this._pattern]), this._resubscribeNotifier.destroy()
						}, r.prototype.destroy = function() {
							this._callback = null, this._pattern = null, this._client = null, this._connection = null
						}, r.prototype.accept = function(t) {
							this._connection.sendMsg(this._topic, s.ACTIONS.LISTEN_ACCEPT, [this._pattern, t])
						}, r.prototype.reject = function(t) {
							this._connection.sendMsg(this._topic, s.ACTIONS.LISTEN_REJECT, [this._pattern, t])
						}, r.prototype._createCallbackResponse = function(t) {
							return {
								accept: this.accept.bind(this, t.data[1]),
								reject: this.reject.bind(this, t.data[1])
							}
						}, r.prototype._$onMessage = function(t) {
							t.action === s.ACTIONS.ACK ? this._ackTimeoutRegistry.clear(t) : t.action === s.ACTIONS.SUBSCRIPTION_FOR_PATTERN_FOUND ? this._callback(t.data[1], !0, this._createCallbackResponse(t)) : t.action === s.ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED ? this._callback(t.data[1], !1) : this._client._$onError(this._topic, s.EVENT.UNSOLICITED_MESSAGE, t.data[0] + "|" + t.data[1])
						}, r.prototype._sendListen = function() {
							this._connection.sendMsg(this._topic, s.ACTIONS.LISTEN, [this._pattern])
						}, e.exports = r
					}, {
						"../constants/constants": 11,
						"./resubscribe-notifier": 29
					}],
					29: [function(t, e, i) {
						var s = t("../constants/constants"),
							n = function(t, e) {
								this._client = t, this._resubscribe = e, this._isReconnecting = !1, this._connectionStateChangeHandler = this._handleConnectionStateChanges.bind(this), this._client.on("connectionStateChanged", this._connectionStateChangeHandler)
							};
						n.prototype.destroy = function() {
							this._client.removeListener("connectionStateChanged", this._connectionStateChangeHandler), this._connectionStateChangeHandler = null, this._client = null
						}, n.prototype._handleConnectionStateChanges = function() {
							var t = this._client.getConnectionState();
							t === s.CONNECTION_STATE.RECONNECTING && this._isReconnecting === !1 && (this._isReconnecting = !0), t === s.CONNECTION_STATE.OPEN && this._isReconnecting === !0 && (this._isReconnecting = !1, this._resubscribe())
						}, e.exports = n
					}, {
						"../constants/constants": 11
					}],
					30: [function(t, e, s) {
						var n = t("../constants/constants"),
							r = t("./resubscribe-notifier"),
							o = function(t, e, i, s, n) {
								this._client = t, this._connection = e, this._topic = i, this._action = s, this._timeoutDuration = n, this._requests = {}, this._ackTimeoutRegistry = t._$getAckTimeoutRegistry(), this._resubscribeNotifier = new r(this._client, this._resendRequests.bind(this)), this._onResponseTimeout = this._onResponseTimeout.bind(this)
							};
						o.prototype.hasRequest = function(t) {
							return !!this._requests[t]
						}, o.prototype.request = function(t, e) {
							this._requests[t] || (this._requests[t] = [], this._connection.sendMsg(this._topic, this._action, [t]));
							var i = this._ackTimeoutRegistry.add({
								topic: this._topic,
								event: n.EVENT.RESPONSE_TIMEOUT,
								name: t,
								action: this._action,
								timeout: this._timeoutDuration,
								callback: this._onResponseTimeout
							});
							this._requests[t].push({
								callback: e,
								ackId: i
							})
						}, o.prototype.recieve = function(t, e, s) {
							var r = this._requests[t];
							if (!r) return void this._client._$onError(this._topic, n.EVENT.UNSOLICITED_MESSAGE, "no entry for " + t);
							for (i = 0; i < r.length; i++) entry = r[i], this._ackTimeoutRegistry.remove({
								ackId: entry.ackId
							}), entry.callback(e, s);
							delete this._requests[t]
						}, o.prototype._onResponseTimeout = function(t) {
							var e = "No response received in time for " + this._topic + "|" + this._action + "|" + t.name;
							this._client._$onError(this._topic, n.EVENT.RESPONSE_TIMEOUT, e)
						}, o.prototype._resendRequests = function() {
							for (var t in this._requests) this._connection.sendMsg(this._topic, this._action, [t])
						}, e.exports = o
					}, {
						"../constants/constants": 11,
						"./resubscribe-notifier": 29
					}],
					31: [function(t, e, i) {
						(function(e) {
							var s = /^[\s﻿ ]+|[\s﻿ ]+$/g,
								n = "object";
							i.isNode = "undefined" != typeof e && "[object process]" === e.toString(), i.nextTick = function(t) {
								i.isNode ? e.nextTick(t) : setTimeout(t, 0)
							}, i.trim = function(t) {
								return t.trim ? t.trim() : t.replace(s, "")
							}, i.deepEquals = function(t, e) {
								return t === e || typeof t === n && typeof e === n && JSON.stringify(t) === JSON.stringify(e)
							}, i.deepCopy = function(t) {
								return typeof t === n ? JSON.parse(JSON.stringify(t)) : t
							}, i.shallowCopy = function(t) {
								if (Array.isArray(t)) return t.slice(0);
								if (typeof t === n) {
									for (var e = Object.create(null), i = Object.keys(t), s = 0; s < i.length; s++) e[i[s]] = t[i[s]];
									return e
								}
								return t
							}, i.setTimeout = function(t, e) {
								return null !== e ? setTimeout(t, e) : -1
							}, i.setInterval = function(t, e) {
								return null !== e ? setInterval(t, e) : -1
							};
							var r = /^wss:|^ws:|^\/\//,
								o = /^http:|^https:/,
								a = t("url");
							i.parseUrl = function(t, e) {
								if (o.test(t)) throw new Error("Only ws and wss are supported");
								r.test(t) ? 0 === t.indexOf("//") && (t = "ws:" + t) : t = "ws://" + t;
								var i = a.parse(t);
								if (!i.host) throw new Error("invalid url, missing host");
								return i.protocol = i.protocol ? i.protocol : "ws:", i.pathname = i.pathname ? i.pathname : e, a.format(i)
							}
						}).call(this, t("_process"))
					}, {
						_process: 3,
						url: 8
					}]
				}, {}, [10])(10)
			})
		}).call(e, function() {
			return this
		}())
	}
});