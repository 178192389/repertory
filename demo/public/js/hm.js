(function() {
	var h = {},
		mt = {},
		c = {
			id: "ab9ff4c8baa81ebed233982d88c23a45",
			dm: ["hippo.gf.com.cn"],
			js: "tongji.baidu.com/hm-web/js/",
			etrk: [],
			icon: '',
			ctrk: false,
			align: -1,
			nv: -1,
			vdur: 1800000,
			age: 31536000000,
			rec: 0,
			rp: [],
			trust: 0,
			vcard: 0,
			qiao: 0,
			lxb: 0,
			conv: 0,
			med: 0,
			cvcc: '',
			cvcf: [],
			apps: ''
		};
	var r = void 0,
		s = !0,
		t = null,
		w = !1;
	mt.j = {};
	mt.j.T = /msie (\d+\.\d+)/i.test(navigator.userAgent);
	mt.j.ya = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : r;
	mt.j.cookieEnabled = navigator.cookieEnabled;
	mt.j.javaEnabled = navigator.javaEnabled();
	mt.j.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
	mt.j.Da = (window.screen.width || 0) + "x" + (window.screen.height || 0);
	mt.j.colorDepth = window.screen.colorDepth || 0;
	mt.cookie = {};
	mt.cookie.set = function(a, b, f) {
		var d;
		f.H && (d = new Date, d.setTime(d.getTime() + f.H));
		document.cookie = a + "=" + b + (f.domain ? "; domain=" + f.domain : "") + (f.path ? "; path=" + f.path : "") + (d ? "; expires=" + d.toGMTString() : "") + (f.Ya ? "; secure" : "")
	};
	mt.cookie.get = function(a) {
		return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : t
	};
	mt.r = {};
	mt.r.ka = function(a) {
		return document.getElementById(a)
	};
	mt.r.Ra = function(a, b) {
		for (b = b.toUpperCase();
		(a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == b) return a;
		return t
	};
	(mt.r.Y = function() {
		function a() {
			if (!a.A) {
				a.A = s;
				for (var b = 0, e = d.length; b < e; b++) d[b]()
			}
		}

		function b() {
			try {
				document.documentElement.doScroll("left")
			} catch (e) {
				setTimeout(b, 1);
				return
			}
			a()
		}
		var f = w,
			d = [],
			e;
		document.addEventListener ? e = function() {
			document.removeEventListener("DOMContentLoaded", e, w);
			a()
		} : document.attachEvent && (e = function() {
			"complete" === document.readyState && (document.detachEvent("onreadystatechange", e), a())
		});
		(function() {
			if (!f) if (f = s, "complete" === document.readyState) a.A = s;
			else if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, w), window.addEventListener("load", a, w);
			else if (document.attachEvent) {
				document.attachEvent("onreadystatechange", e);
				window.attachEvent("onload", a);
				var d = w;
				try {
					d = window.frameElement == t
				} catch (n) {}
				document.documentElement.doScroll && d && b()
			}
		})();
		return function(b) {
			a.A ? b() : d.push(b)
		}
	}()).A = w;
	mt.event = {};
	mt.event.c = function(a, b, f) {
		a.attachEvent ? a.attachEvent("on" + b, function(b) {
			f.call(a, b)
		}) : a.addEventListener && a.addEventListener(b, f, w)
	};
	mt.event.preventDefault = function(a) {
		a.preventDefault ? a.preventDefault() : a.returnValue = w
	};
	mt.l = {};
	mt.l.parse = function() {
		return (new Function('return (" + source + ")'))()
	};
	mt.l.stringify = function() {
		function a(a) {
			/["\\