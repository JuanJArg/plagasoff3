window.Modernizr = function (i, u, a) {
		function n(t) {
			v.cssText = t
		}

		function r(t, e) {
			return typeof t === e
		}

		function o(t, e) {
			return !!~("" + t).indexOf(e)
		}

		function s(t, e) {
			for (var n in t) {
				var i = t[n];
				if (!o(i, "-") && v[i] !== a) return "pfx" != e || i
			}
			return !1
		}

		function l(t, e, n) {
			var i = t.charAt(0).toUpperCase() + t.slice(1),
				o = (t + " " + x.join(i + " ") + i).split(" ");
			return r(e, "string") || r(e, "undefined") ? s(o, e) : function (t, e, n) {
				for (var i in t) {
					var o = e[t[i]];
					if (o !== a) return !1 === n ? t[i] : r(o, "function") ? o.bind(n || e) : o
				}
				return !1
			}(o = (t + " " + k.join(i + " ") + i).split(" "), e, n)
		}
		var t, c, d, p = {},
			f = u.documentElement,
			h = "modernizr",
			e = u.createElement(h),
			v = e.style,
			g = u.createElement("input"),
			m = ":)",
			y = {}.toString,
			b = " -webkit- -moz- -o- -ms- ".split(" "),
			w = "Webkit Moz O ms",
			x = w.split(" "),
			k = w.toLowerCase().split(" "),
			_ = "http://www.w3.org/2000/svg",
			T = {},
			S = {},
			$ = {},
			C = [],
			O = C.slice,
			E = function (t, e, n, i) {
				var o, r, a, s = u.createElement("div"),
					l = u.body,
					c = l || u.createElement("body");
				if (parseInt(n, 10))
					for (; n--;)(a = u.createElement("div")).id = i ? i[n] : h + (n + 1), s.appendChild(a);
				return o = ["&#173;", '<style id="s', h, '">', t, "</style>"].join(""), s.id = h, (l ? s : c).innerHTML += o, c.appendChild(s), l || (c.style.background = "", f.appendChild(c)), r = e(s, t), l ? s.parentNode.removeChild(s) : c.parentNode.removeChild(c), !!r
			},
			A = (d = {
				select: "input",
				change: "input",
				submit: "form",
				reset: "form",
				error: "img",
				load: "img",
				abort: "img"
			}, function (t, e) {
				e = e || u.createElement(d[t] || "div");
				var n = (t = "on" + t) in e;
				return n || (e.setAttribute || (e = u.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(t, ""), n = r(e[t], "function"), r(e[t], "undefined") || (e[t] = a), e.removeAttribute(t))), e = null, n
			}),
			P = {}.hasOwnProperty;
		for (var j in c = r(P, "undefined") || r(P.call, "undefined") ? function (t, e) {
				return e in t && r(t.constructor.prototype[e], "undefined")
			} : function (t, e) {
				return P.call(t, e)
			}, Function.prototype.bind || (Function.prototype.bind = function (i) {
				var o = this;
				if ("function" != typeof o) throw new TypeError;
				var r = O.call(arguments, 1),
					a = function () {
						if (this instanceof a) {
							var t = function () {};
							t.prototype = o.prototype;
							var e = new t,
								n = o.apply(e, r.concat(O.call(arguments)));
							return Object(n) === n ? n : e
						}
						return o.apply(i, r.concat(O.call(arguments)))
					};
				return a
			}), T.flexbox = function () {
				return l("flexWrap")
			}, T.canvas = function () {
				var t = u.createElement("canvas");
				return !!t.getContext && !!t.getContext("2d")
			}, T.canvastext = function () {
				return !!p.canvas && !!r(u.createElement("canvas").getContext("2d").fillText, "function")
			}, T.webgl = function () {
				return !!i.WebGLRenderingContext
			}, T.touch = function () {
				var e;
				return "ontouchstart" in i || i.DocumentTouch && u instanceof DocumentTouch ? e = !0 : E(["@media (", b.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
					e = 9 === t.offsetTop
				}), e
			}, T.geolocation = function () {
				return "geolocation" in navigator
			}, T.postmessage = function () {
				return !!i.postMessage
			}, T.websqldatabase = function () {
				return !!i.openDatabase
			}, T.indexedDB = function () {
				return !!l("indexedDB", i)
			}, T.hashchange = function () {
				return A("hashchange", i) && (u.documentMode === a || 7 < u.documentMode)
			}, T.history = function () {
				return !!i.history && !!history.pushState
			}, T.draganddrop = function () {
				var t = u.createElement("div");
				return "draggable" in t || "ondragstart" in t && "ondrop" in t
			}, T.websockets = function () {
				return "WebSocket" in i || "MozWebSocket" in i
			}, T.rgba = function () {
				return n("background-color:rgba(150,255,150,.5)"), o(v.backgroundColor, "rgba")
			}, T.hsla = function () {
				return n("background-color:hsla(120,40%,100%,.5)"), o(v.backgroundColor, "rgba") || o(v.backgroundColor, "hsla")
			}, T.multiplebgs = function () {
				return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(v.background)
			}, T.backgroundsize = function () {
				return l("backgroundSize")
			}, T.borderimage = function () {
				return l("borderImage")
			}, T.borderradius = function () {
				return l("borderRadius")
			}, T.boxshadow = function () {
				return l("boxShadow")
			}, T.textshadow = function () {
				return "" === u.createElement("div").style.textShadow
			}, T.opacity = function () {
				return t = "opacity:.55", n(b.join(t + ";") + (e || "")), /^0.55$/.test(v.opacity);
				var t, e
			}, T.cssanimations = function () {
				return l("animationName")
			}, T.csscolumns = function () {
				return l("columnCount")
			}, T.cssgradients = function () {
				var t = "background-image:";
				return n((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + b.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), o(v.backgroundImage, "gradient")
			}, T.cssreflections = function () {
				return l("boxReflect")
			}, T.csstransforms = function () {
				return !!l("transform")
			}, T.csstransforms3d = function () {
				var n = !!l("perspective");
				return n && "webkitPerspective" in f.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, e) {
					n = 9 === t.offsetLeft && 3 === t.offsetHeight
				}), n
			}, T.csstransitions = function () {
				return l("transition")
			}, T.fontface = function () {
				var r;
				return E('@font-face {font-family:"font";src:url("https://")}', function (t, e) {
					var n = u.getElementById("smodernizr"),
						i = n.sheet || n.styleSheet,
						o = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
					r = /src/i.test(o) && 0 === o.indexOf(e.split(" ")[0])
				}), r
			}, T.generatedcontent = function () {
				var e;
				return E(['#modernizr:after{content:"', m, '";visibility:hidden}'].join(""), function (t) {
					e = 1 <= t.offsetHeight
				}), e
			}, T.video = function () {
				var t = u.createElement("video"),
					e = !1;
				try {
					(e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
				} catch (t) {}
				return e
			}, T.audio = function () {
				var t = u.createElement("audio"),
					e = !1;
				try {
					(e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
				} catch (t) {}
				return e
			}, T.localstorage = function () {
				try {
					return localStorage.setItem(h, h), localStorage.removeItem(h), !0
				} catch (t) {
					return !1
				}
			}, T.sessionstorage = function () {
				try {
					return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
				} catch (t) {
					return !1
				}
			}, T.webworkers = function () {
				return !!i.Worker
			}, T.applicationcache = function () {
				return !!i.applicationCache
			}, T.svg = function () {
				return !!u.createElementNS && !!u.createElementNS(_, "svg").createSVGRect
			}, T.inlinesvg = function () {
				var t = u.createElement("div");
				return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == _
			}, T.smil = function () {
				return !!u.createElementNS && /SVGAnimate/.test(y.call(u.createElementNS(_, "animate")))
			}, T.svgclippaths = function () {
				return !!u.createElementNS && /SVGClipPath/.test(y.call(u.createElementNS(_, "clipPath")))
			}, T) c(T, j) && (t = j.toLowerCase(), p[t] = T[j](), C.push((p[t] ? "" : "no-") + t));
		return p.input || (p.input = function (t) {
				for (var e = 0, n = t.length; e < n; e++) $[t[e]] = t[e] in g;
				return $.list && ($.list = !!u.createElement("datalist") && !!i.HTMLDataListElement), $
			}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function (t) {
				for (var e, n, i, o = 0, r = t.length; o < r; o++) g.setAttribute("type", n = t[o]), (e = "text" !== g.type) && (g.value = m, g.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && g.style.WebkitAppearance !== a ? (f.appendChild(g), e = (i = u.defaultView).getComputedStyle && "textfield" !== i.getComputedStyle(g, null).WebkitAppearance && 0 !== g.offsetHeight, f.removeChild(g)) : /^(search|tel)$/.test(n) || (e = /^(url|email)$/.test(n) ? g.checkValidity && !1 === g.checkValidity() : g.value != m)), S[t[o]] = !!e;
				return S
			}("search tel url email datetime date month week time datetime-local number range color".split(" "))), p.addTest = function (t, e) {
				if ("object" == typeof t)
					for (var n in t) c(t, n) && p.addTest(n, t[n]);
				else {
					if (t = t.toLowerCase(), p[t] !== a) return p;
					e = "function" == typeof e ? e() : e, f.className += " " + (e ? "" : "no-") + t, p[t] = e
				}
				return p
			}, n(""), e = g = null,
			function (t, l) {
				function c() {
					var t = h.elements;
					return "string" == typeof t ? t.split(" ") : t
				}

				function u(t) {
					var e = s[t[i]];
					return e || (e = {}, a++, t[i] = a, s[a] = e), e
				}

				function d(t, e, n) {
					return e || (e = l), f ? e.createElement(t) : (n || (n = u(e)), (i = n.cache[t] ? n.cache[t].cloneNode() : r.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t)).canHaveChildren && !o.test(t) ? n.frag.appendChild(i) : i);
					var i
				}

				function e(t) {
					t || (t = l);
					var e, n, i, o, r, a, s = u(t);
					return h.shivCSS && !p && !s.hasCSS && (s.hasCSS = (o = "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}", r = (i = t).createElement("p"), a = i.getElementsByTagName("head")[0] || i.documentElement, r.innerHTML = "x<style>" + o + "</style>", !!a.insertBefore(r.lastChild, a.firstChild))), f || (e = t, (n = s).cache || (n.cache = {}, n.createElem = e.createElement, n.createFrag = e.createDocumentFragment, n.frag = n.createFrag()), e.createElement = function (t) {
						return h.shivMethods ? d(t, e, n) : n.createElem(t)
					}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/\w+/g, function (t) {
						return n.createElem(t), n.frag.createElement(t), 'c("' + t + '")'
					}) + ");return n}")(h, n.frag)), t
				}
				var p, f, n = t.html5 || {},
					o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					r = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
					i = "_html5shiv",
					a = 0,
					s = {};
				! function () {
					try {
						var t = l.createElement("a");
						t.innerHTML = "<xyz></xyz>", p = "hidden" in t, f = 1 == t.childNodes.length || function () {
							l.createElement("a");
							var t = l.createDocumentFragment();
							return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
						}()
					} catch (t) {
						f = p = !0
					}
				}();
				var h = {
					elements: n.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: !1 !== n.shivCSS,
					supportsUnknownElements: f,
					shivMethods: !1 !== n.shivMethods,
					type: "default",
					shivDocument: e,
					createElement: d,
					createDocumentFragment: function (t, e) {
						if (t || (t = l), f) return t.createDocumentFragment();
						for (var n = (e = e || u(t)).frag.cloneNode(), i = 0, o = c(), r = o.length; i < r; i++) n.createElement(o[i]);
						return n
					}
				};
				t.html5 = h, e(l)
			}(this, u), p._version = "2.6.1", p._prefixes = b, p._domPrefixes = k, p._cssomPrefixes = x, p.mq = function (t) {
				var e, n = i.matchMedia || i.msMatchMedia;
				return n ? n(t).matches : (E("@media " + t + " { #" + h + " { position: absolute; } }", function (t) {
					e = "absolute" == (i.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
				}), e)
			}, p.hasEvent = A, p.testProp = function (t) {
				return s([t])
			}, p.testAllProps = l, p.testStyles = E, p.prefixed = function (t, e, n) {
				return e ? l(t, e, n) : l(t, "pfx")
			}, f.className = f.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + C.join(" "), p
	}(this, this.document),
	function (t, p, e) {
		function d(t) {
			return "[object Function]" == r.call(t)
		}

		function f(t) {
			return "string" == typeof t
		}

		function h() {}

		function v(t) {
			return !t || "loaded" == t || "complete" == t || "uninitialized" == t
		}

		function g() {
			var t = w.shift();
			x = 1, t ? t.t ? y(function () {
				("c" == t.t ? m.injectCss : m.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
			}, 0) : (t(), g()) : x = 0
		}

		function n(t, e, n, i, o) {
			return x = 0, e = e || "j", f(t) ? function (n, i, t, e, o, r, a) {
				function s(t) {
					if (!c && v(l.readyState) && (d.r = c = 1, !x && g(), l.onload = l.onreadystatechange = null, t))
						for (var e in "img" != n && y(function () {
								_.removeChild(l)
							}, 50), $[i]) $[i].hasOwnProperty(e) && $[i][e].onload()
				}
				a = a || m.errorTimeout;
				var l = {},
					c = 0,
					u = 0,
					d = {
						t: t,
						s: i,
						e: o,
						a: r,
						x: a
					};
				1 === $[i] && (u = 1, $[i] = [], l = p.createElement(n)), "object" == n ? l.data = i : (l.src = i, l.type = n), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
					s.call(this, u)
				}, w.splice(e, 0, d), "img" != n && (u || 2 === $[i] ? (_.insertBefore(l, k ? null : b), y(s, a)) : $[i].push(l))
			}("c" == e ? c : l, t, e, this.i++, n, i, o) : (w.splice(this.i++, 0, t), 1 == w.length && g()), this
		}

		function s() {
			var t = m;
			return t.loader = {
				load: n,
				i: 0
			}, t
		}
		var i, m, o = p.documentElement,
			y = t.setTimeout,
			b = p.getElementsByTagName("script")[0],
			r = {}.toString,
			w = [],
			x = 0,
			a = "MozAppearance" in o.style,
			k = a && !!p.createRange().compareNode,
			_ = k ? o : b.parentNode,
			l = (o = t.opera && "[object Opera]" == r.call(t.opera), o = !!p.attachEvent && !o, a ? "object" : o ? "script" : "img"),
			c = o ? "script" : l,
			T = Array.isArray || function (t) {
				return "[object Array]" == r.call(t)
			},
			S = [],
			$ = {},
			C = {
				timeout: function (t, e) {
					return e.length && (t.timeout = e[0]), t
				}
			};
		(m = function (t) {
			function u(t, e, n, i, o) {
				var r = function (t) {
						t = t.split("!");
						var e, n, i, o = S.length,
							r = t.pop(),
							a = t.length;
						for (r = {
								url: r,
								origUrl: r,
								prefixes: t
							}, n = 0; n < a; n++) i = t[n].split("="), (e = C[i.shift()]) && (r = e(r, i));
						for (n = 0; n < o; n++) r = S[n](r);
						return r
					}(t),
					a = r.autoCallback;
				r.url.split(".").pop().split("?").shift(), r.bypass || (e && (e = d(e) ? e : e[t] || e[i] || e[t.split("/").pop().split("?")[0]] || g), r.instead ? r.instead(t, e, n, i, o) : ($[r.url] ? r.noexec = !0 : $[r.url] = 1, n.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : void 0, r.noexec, r.attrs, r.timeout), (d(e) || d(a)) && n.load(function () {
					s(), e && e(r.origUrl, o, i), a && a(r.origUrl, o, i), $[r.url] = 2
				})))
			}

			function e(t, e) {
				function n(n, t) {
					if (n) {
						if (f(n)) t || (s = function () {
							var t = [].slice.call(arguments);
							l.apply(this, t), c()
						}), u(n, s, e, 0, r);
						else if (Object(n) === n)
							for (o in i = function () {
									var t, e = 0;
									for (t in n) n.hasOwnProperty(t) && e++;
									return e
								}(), n) n.hasOwnProperty(o) && (!t && !--i && (d(s) ? s = function () {
								var t = [].slice.call(arguments);
								l.apply(this, t), c()
							} : s[o] = function (e) {
								return function () {
									var t = [].slice.call(arguments);
									e && e.apply(this, t), c()
								}
							}(l[o])), u(n[o], s, e, o, r))
					} else !t && c()
				}
				var i, o, r = !!t.test,
					a = t.load || t.both,
					s = t.callback || h,
					l = s,
					c = t.complete || h;
				n(r ? t.yep : t.nope, !!a), a && n(a)
			}
			var n, i, o = this.yepnope.loader;
			if (f(t)) u(t, 0, o, 0);
			else if (T(t))
				for (n = 0; n < t.length; n++) f(i = t[n]) ? u(i, 0, o, 0) : T(i) ? m(i) : Object(i) === i && e(i, o);
			else Object(t) === t && e(t, o)
		}).addPrefix = function (t, e) {
			C[t] = e
		}, m.addFilter = function (t) {
			S.push(t)
		}, m.errorTimeout = 1e4, null == p.readyState && p.addEventListener && (p.readyState = "loading", p.addEventListener("DOMContentLoaded", i = function () {
			p.removeEventListener("DOMContentLoaded", i, 0), p.readyState = "complete"
		}, 0)), t.yepnope = s(), t.yepnope.executeStack = g, t.yepnope.injectJs = function (t, e, n, i, o, r) {
			var a, s, l = p.createElement("script");
			i = i || m.errorTimeout;
			for (s in l.src = t, n) l.setAttribute(s, n[s]);
			e = r ? g : e || h, l.onreadystatechange = l.onload = function () {
				!a && v(l.readyState) && (a = 1, e(), l.onload = l.onreadystatechange = null)
			}, y(function () {
				a || e(a = 1)
			}, i), o ? l.onload() : b.parentNode.insertBefore(l, b)
		}, t.yepnope.injectCss = function (t, e, n, i, o, r) {
			var a;
			i = p.createElement("link"), e = r ? g : e || h;
			for (a in i.href = t, i.rel = "stylesheet", i.type = "text/css", n) i.setAttribute(a, n[a]);
			o || (b.parentNode.insertBefore(i, b), y(e, 0))
		}
	}(this, document), Modernizr.load = function () {
		yepnope.apply(window, [].slice.call(arguments, 0))
	}, window.matchMedia = window.matchMedia || function (t, e) {
		var n, i = t.documentElement,
			o = i.firstElementChild || i.firstChild,
			r = t.createElement("body"),
			a = t.createElement("div");
		return a.id = "mq-test-1", a.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(a),
			function (t) {
				return a.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(r, o), n = 42 == a.offsetWidth, i.removeChild(r), {
					matches: n,
					media: t
				}
			}
	}(document),
	function (s) {
		if (s.respond = {}, respond.update = function () {}, respond.mediaQueriesSupported = s.matchMedia && s.matchMedia("only all").matches, !respond.mediaQueriesSupported) {
			var v, g, m, y = s.document,
				b = y.documentElement,
				w = [],
				x = [],
				k = [],
				l = {},
				_ = y.getElementsByTagName("head")[0] || b,
				c = y.getElementsByTagName("base")[0],
				T = _.getElementsByTagName("link"),
				u = [],
				t = function () {
					for (var t, e, n, i, o = T, r = o.length, a = 0; a < r; a++) e = (t = o[a]).href, n = t.media, i = t.rel && "stylesheet" === t.rel.toLowerCase(), e && i && !l[e] && (t.styleSheet && t.styleSheet.rawCssText ? (p(t.styleSheet.rawCssText, e, n), l[e] = !0) : (/^([a-zA-Z:]*\/\/)/.test(e) || c) && e.replace(RegExp.$1, "").split("/")[0] !== s.location.host || u.push({
						href: e,
						media: n
					}));
					d()
				},
				d = function () {
					if (u.length) {
						var e = u.shift();
						n(e.href, function (t) {
							p(t, e.href, e.media), l[e.href] = !0, d()
						})
					}
				},
				p = function (t, e, n) {
					var i, o, r, a, s, l = t.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),
						c = l && l.length || 0,
						u = function (t) {
							return t.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + e + "$2$3")
						},
						d = !c && n,
						p = 0;
					for ((e = e.substring(0, e.lastIndexOf("/"))).length && (e += "/"), d && (c = 1); p < c; p++)
						for (i = 0, d ? (o = n, x.push(u(t))) : (o = l[p].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, x.push(RegExp.$2 && u(RegExp.$2))), s = (a = o.split(",")).length; i < s; i++) r = a[i], w.push({
							media: r.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
							rules: x.length - 1,
							hasquery: -1 < r.indexOf("("),
							minw: r.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
							maxw: r.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
						});
					$()
				},
				S = function () {
					var t, e = y.createElement("div"),
						n = y.body,
						i = !1;
					return e.style.cssText = "position:absolute;font-size:1em;width:1em", n || ((n = i = y.createElement("body")).style.background = "none"), n.appendChild(e), b.insertBefore(n, b.firstChild), t = e.offsetWidth, i ? b.removeChild(n) : n.removeChild(e), t = m = parseFloat(t)
				},
				$ = function (t) {
					var e = "clientWidth",
						n = b[e],
						i = "CSS1Compat" === y.compatMode && n || y.body[e] || n,
						o = {},
						r = T[T.length - 1],
						a = (new Date).getTime();
					if (t && v && a - v < 30) return clearTimeout(g), void(g = setTimeout($, 30));
					for (var s in v = a, w) {
						var l = w[s],
							c = l.minw,
							u = l.maxw,
							d = null === c,
							p = null === u;
						c && (c = parseFloat(c) * (-1 < c.indexOf("em") ? m || S() : 1)), u && (u = parseFloat(u) * (-1 < u.indexOf("em") ? m || S() : 1)), l.hasquery && (d && p || !(d || c <= i) || !(p || i <= u)) || (o[l.media] || (o[l.media] = []), o[l.media].push(x[l.rules]))
					}
					for (var s in k) k[s] && k[s].parentNode === _ && _.removeChild(k[s]);
					for (var s in o) {
						var f = y.createElement("style"),
							h = o[s].join("\n");
						f.type = "text/css", f.media = s, _.insertBefore(f, r.nextSibling), f.styleSheet ? f.styleSheet.cssText = h : f.appendChild(y.createTextNode(h)), k.push(f)
					}
				},
				n = function (t, e) {
					var n = i();
					n && (n.open("GET", t, !0), n.onreadystatechange = function () {
						4 != n.readyState || 200 != n.status && 304 != n.status || e(n.responseText)
					}, 4 != n.readyState && n.send(null))
				},
				i = function () {
					var e = !1;
					try {
						e = new XMLHttpRequest
					} catch (t) {
						e = new ActiveXObject("Microsoft.XMLHTTP")
					}
					return function () {
						return e
					}
				}();
			t(), respond.update = t, s.addEventListener ? s.addEventListener("resize", e, !1) : s.attachEvent && s.attachEvent("onresize", e)
		}

		function e() {
			$(!0)
		}
	}(this), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
		def: "easeOutQuad",
		swing: function (t, e, n, i, o) {
			return jQuery.easing[jQuery.easing.def](t, e, n, i, o)
		},
		easeInQuad: function (t, e, n, i, o) {
			return i * (e /= o) * e + n
		},
		easeOutQuad: function (t, e, n, i, o) {
			return -i * (e /= o) * (e - 2) + n
		},
		easeInOutQuad: function (t, e, n, i, o) {
			return (e /= o / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
		},
		easeInCubic: function (t, e, n, i, o) {
			return i * (e /= o) * e * e + n
		},
		easeOutCubic: function (t, e, n, i, o) {
			return i * ((e = e / o - 1) * e * e + 1) + n
		},
		easeInOutCubic: function (t, e, n, i, o) {
			return (e /= o / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
		},
		easeInQuart: function (t, e, n, i, o) {
			return i * (e /= o) * e * e * e + n
		},
		easeOutQuart: function (t, e, n, i, o) {
			return -i * ((e = e / o - 1) * e * e * e - 1) + n
		},
		easeInOutQuart: function (t, e, n, i, o) {
			return (e /= o / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
		},
		easeInQuint: function (t, e, n, i, o) {
			return i * (e /= o) * e * e * e * e + n
		},
		easeOutQuint: function (t, e, n, i, o) {
			return i * ((e = e / o - 1) * e * e * e * e + 1) + n
		},
		easeInOutQuint: function (t, e, n, i, o) {
			return (e /= o / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
		},
		easeInSine: function (t, e, n, i, o) {
			return -i * Math.cos(e / o * (Math.PI / 2)) + i + n
		},
		easeOutSine: function (t, e, n, i, o) {
			return i * Math.sin(e / o * (Math.PI / 2)) + n
		},
		easeInOutSine: function (t, e, n, i, o) {
			return -i / 2 * (Math.cos(Math.PI * e / o) - 1) + n
		},
		easeInExpo: function (t, e, n, i, o) {
			return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n
		},
		easeOutExpo: function (t, e, n, i, o) {
			return e == o ? n + i : i * (1 - Math.pow(2, -10 * e / o)) + n
		},
		easeInOutExpo: function (t, e, n, i, o) {
			return 0 == e ? n : e == o ? n + i : (e /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --e)) + n
		},
		easeInCirc: function (t, e, n, i, o) {
			return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n
		},
		easeOutCirc: function (t, e, n, i, o) {
			return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
		},
		easeInOutCirc: function (t, e, n, i, o) {
			return (e /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
		},
		easeInElastic: function (t, e, n, i, o) {
			var r = 1.70158,
				a = 0,
				s = i;
			if (0 == e) return n;
			if (1 == (e /= o)) return n + i;
			if (a || (a = .3 * o), s < Math.abs(i)) {
				s = i;
				r = a / 4
			} else r = a / (2 * Math.PI) * Math.asin(i / s);
			return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / a) + n
		},
		easeOutElastic: function (t, e, n, i, o) {
			var r = 1.70158,
				a = 0,
				s = i;
			if (0 == e) return n;
			if (1 == (e /= o)) return n + i;
			if (a || (a = .3 * o), s < Math.abs(i)) {
				s = i;
				r = a / 4
			} else r = a / (2 * Math.PI) * Math.asin(i / s);
			return s * Math.pow(2, -10 * e) * Math.sin((e * o - r) * (2 * Math.PI) / a) + i + n
		},
		easeInOutElastic: function (t, e, n, i, o) {
			var r = 1.70158,
				a = 0,
				s = i;
			if (0 == e) return n;
			if (2 == (e /= o / 2)) return n + i;
			if (a || (a = o * (.3 * 1.5)), s < Math.abs(i)) {
				s = i;
				r = a / 4
			} else r = a / (2 * Math.PI) * Math.asin(i / s);
			return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / a) * .5 + i + n
		},
		easeInBack: function (t, e, n, i, o, r) {
			return null == r && (r = 1.70158), i * (e /= o) * e * ((r + 1) * e - r) + n
		},
		easeOutBack: function (t, e, n, i, o, r) {
			return null == r && (r = 1.70158), i * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + n
		},
		easeInOutBack: function (t, e, n, i, o, r) {
			return null == r && (r = 1.70158), (e /= o / 2) < 1 ? i / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + n : i / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + n
		},
		easeInBounce: function (t, e, n, i, o) {
			return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n
		},
		easeOutBounce: function (t, e, n, i, o) {
			return (e /= o) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
		},
		easeInOutBounce: function (t, e, n, i, o) {
			return e < o / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, i, o) + .5 * i + n
		}
	}),
	function (t) {
		var r, a, s = t.event;
		r = s.special.debouncedresize = {
			setup: function () {
				t(this).on("resize", r.handler)
			},
			teardown: function () {
				t(this).off("resize", r.handler)
			},
			handler: function (t, e) {
				var n = this,
					i = arguments,
					o = function () {
						t.type = "debouncedresize", s.dispatch.apply(n, i)
					};
				a && clearTimeout(a), e ? o() : a = setTimeout(o, r.threshold)
			},
			threshold: 150
		}
	}(jQuery);
var imgLiquid = imgLiquid || {
	VER: "0.9.944"
};
if (imgLiquid.bgs_Available = !1, imgLiquid.bgs_CheckRunned = !1, imgLiquid.injectCss = ".imgLiquid img {visibility:hidden}", function (a) {
		a.fn.extend({
			imgLiquid: function (t) {
				this.defaults = {
						fill: !0,
						verticalAlign: "center",
						horizontalAlign: "center",
						useBackgroundSize: !0,
						useDataHtmlAttr: !0,
						responsive: !0,
						delay: 0,
						fadeInTime: 0,
						removeBoxBackground: !0,
						hardPixels: !0,
						responsiveCheckTime: 500,
						timecheckvisibility: 500,
						onStart: null,
						onFinish: null,
						onItemStart: null,
						onItemFinish: null,
						onItemError: null
					},
					function () {
						if (!imgLiquid.bgs_CheckRunned) {
							imgLiquid.bgs_CheckRunned = !0;
							var n = a('<span style="background-size:cover" />');
							a("body").append(n),
								function () {
									var t = n[0];
									if (t && window.getComputedStyle) {
										var e = window.getComputedStyle(t, null);
										e && e.backgroundSize && (imgLiquid.bgs_Available = "cover" === e.backgroundSize)
									}
								}(), n.remove()
						}
					}();
				var r = this;
				return this.options = t, this.settings = a.extend({}, this.defaults, this.options), this.settings.onStart && this.settings.onStart(), this.each(function (p) {
					var f = r.settings,
						h = a(this),
						v = a("img:first", h);

					function n() {
						(f.responsive || v.data("imgLiquid_oldProcessed")) && v.data("imgLiquid_settings") && (f = v.data("imgLiquid_settings"), h.actualSize = h.get(0).offsetWidth + h.get(0).offsetHeight / 1e4, h.sizeOld && h.actualSize !== h.sizeOld && o(), h.sizeOld = h.actualSize, setTimeout(n, f.responsiveCheckTime))
					}

					function i() {
						v.data("imgLiquid_error", !0), h.addClass("imgLiquid_error"), f.onItemError && f.onItemError(p, h, v), g()
					}

					function o() {
						var t, e, n, i, o, r, a, s, l = 0,
							c = 0,
							u = h.width(),
							d = h.height();
						void 0 === v.data("owidth") && v.data("owidth", v[0].width), void 0 === v.data("oheight") && v.data("oheight", v[0].height), f.fill === u / d >= v.data("owidth") / v.data("oheight") ? (t = "100%", e = "auto", n = Math.floor(u), i = Math.floor(u * (v.data("oheight") / v.data("owidth")))) : (t = "auto", e = "100%", n = Math.floor(d * (v.data("owidth") / v.data("oheight"))), i = Math.floor(d)), a = u - n, "left" === (o = f.horizontalAlign.toLowerCase()) && (c = 0), "center" === o && (c = .5 * a), "right" === o && (c = a), -1 !== o.indexOf("%") && 0 < (o = parseInt(o.replace("%", ""), 10)) && (c = a * o * .01), s = d - i, "left" === (r = f.verticalAlign.toLowerCase()) && (l = 0), "center" === r && (l = .5 * s), "bottom" === r && (l = s), -1 !== r.indexOf("%") && 0 < (r = parseInt(r.replace("%", ""), 10)) && (l = s * r * .01), f.hardPixels && (t = n, e = i), v.css({
							width: t,
							height: e,
							"margin-left": Math.floor(c),
							"margin-top": Math.floor(l)
						}), v.data("imgLiquid_oldProcessed") || (v.fadeTo(f.fadeInTime, 1), v.data("imgLiquid_oldProcessed", !0), f.removeBoxBackground && h.css("background-image", "none"), h.addClass("imgLiquid_nobgSize"), h.addClass("imgLiquid_ready")), f.onItemFinish && f.onItemFinish(p, h, v), g()
					}

					function g() {
						p === r.length - 1 && r.settings.onFinish && r.settings.onFinish()
					}
					v.length ? (v.data("imgLiquid_settings") ? (h.removeClass("imgLiquid_error").removeClass("imgLiquid_ready"), f = a.extend({}, v.data("imgLiquid_settings"), r.options)) : f = a.extend({}, r.settings, function () {
						var t = {};
						if (r.settings.useDataHtmlAttr) {
							var e = h.attr("data-imgLiquid-fill"),
								n = h.attr("data-imgLiquid-horizontalAlign"),
								i = h.attr("data-imgLiquid-verticalAlign");
							"true" !== e && "false" !== e || (t.fill = Boolean("true" === e)), void 0 === n || "left" !== n && "center" !== n && "right" !== n && -1 === n.indexOf("%") || (t.horizontalAlign = n), void 0 === i || "top" !== i && "bottom" !== i && "center" !== i && -1 === i.indexOf("%") || (t.verticalAlign = i)
						}
						imgLiquid.isIE && r.settings.ieFadeInDisabled && (t.fadeInTime = 0);
						return t
					}()), v.data("imgLiquid_settings", f), f.onItemStart && f.onItemStart(p, h, v), imgLiquid.bgs_Available && f.useBackgroundSize ? function () {
						-1 === h.css("background-image").indexOf(encodeURI(v.attr("src"))) && h.css({
							"background-image": 'url("' + encodeURI(v.attr("src")) + '")'
						});
						h.css({
							"background-size": f.fill ? "cover" : "contain",
							"background-position": (f.horizontalAlign + " " + f.verticalAlign).toLowerCase(),
							"background-repeat": "no-repeat"
						}), a("a:first", h).css({
							display: "block",
							width: "100%",
							height: "100%"
						}), a("img", h).css({
							display: "none"
						}), f.onItemFinish && f.onItemFinish(p, h, v);
						h.addClass("imgLiquid_bgSize"), h.addClass("imgLiquid_ready"), g()
					}() : function t() {
						if (v.data("oldSrc") && v.data("oldSrc") !== v.attr("src")) {
							var e = v.clone().removeAttr("style");
							return e.data("imgLiquid_settings", v.data("imgLiquid_settings")), v.parent().prepend(e), v.remove(), (v = e)[0].width = 0, void setTimeout(t, 10)
						}
						if (v.data("imgLiquid_oldProcessed")) return void o();
						v.data("imgLiquid_oldProcessed", !1);
						v.data("oldSrc", v.attr("src"));
						a("img:not(:first)", h).css("display", "none");
						h.css({
							overflow: "hidden"
						});
						v.fadeTo(0, 0).removeAttr("width").removeAttr("height").css({
							visibility: "visible",
							"max-width": "none",
							"max-height": "none",
							width: "auto",
							height: "auto",
							display: "block"
						});
						v.on("error", i);
						v[0].onerror = i;
						! function t() {
							if (v.data("imgLiquid_error") || v.data("imgLiquid_loaded") || v.data("imgLiquid_oldProcessed")) return;
							h.is(":visible") && v[0].complete && 0 < v[0].width && 0 < v[0].height ? (v.data("imgLiquid_loaded", !0), setTimeout(o, p * f.delay)) : setTimeout(t, f.timecheckvisibility)
						}();
						n()
					}()) : i()
				})
			}
		})
	}(jQuery), function () {
		var t = imgLiquid.injectCss,
			e = document.getElementsByTagName("head")[0],
			n = document.createElement("style");
		n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), e.appendChild(n)
	}(), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function JSModales() {
	$(".fancyboxFoto").fancybox({
		padding: 0,
		fitToView: !0,
		width: "90%",
		height: "90%",
		helpers: {
			overlay: {
				locked: !1
			}
		}
	}), $(".fancyboxFrame").fancybox({
		padding: 0,
		maxWidth: 800,
		maxHeight: 600,
		fitToView: !1,
		width: "90%",
		height: "60%"
	})
}

function JSmainNav() {
	$(".level0").on("mouseover", function () {
		$(this).addClass("open")
	}), $(".level0").on("mouseleave", function () {
		$(this).removeClass("open")
	})
}

function homeSlider() {
	$(".homeSlider").slick({
		infinite: !0,
		arrows: !0,
		dots: !1,
		autoplay: !0,
		autoplaySpeed: 7e3,
		pauseOnHover: !1,
		easy: "easeOutBack",
		cssEase: "cubic-bezier(0,0,0.2,1)",
		speed: 600
	}), $(".multiple-items").slick({
		infinite: !0,
		slidesToShow: 7,
		slidesToScroll: 7,
		arrows: !1,
		autoplay: !0,
		autoplaySpeed: 7e3,
		pauseOnHover: !0,
		dots: !0,
		speed: 700,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
				infinite: !0,
				dots: !0
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}]
	})
}

function prodSlider() {
	$(".prodSlider").slick({
		infinite: !0,
		arrows: !0,
		dots: !0
	})
}

function menuMobileBehavior() {
	var t = !1;
	window.prendemenuMobileBehavior = function () {
		return $(".menuBurger").addClass("open"), !(t = !0)
	}, window.apagamenuMobileBehavior = function () {
		return $(".menuBurger").removeClass("open"), t = !1
	}, window.toggleMobileBehavior = function () {
		t ? window.apagamenuMobileBehavior() : window.prendemenuMobileBehavior()
	}
}

function menuMobileBehaviorUL() {
	$(".ulBurgerDiv .bold").on("click", function (t) {
		var e = $(this).parent().find(".ulBurger");
		return !e.length || (e.hasClass("open") ? $(".ulBurger").removeClass("open") : ($(".ulBurger").removeClass("open"), e.addClass("open")), !1)
	})
}

function menuGenBehaviorUL() {
	$(".ulGenDiv .bold").on("click", function (t) {
		var e = $(this).parent().find(".ulGen");
		return !e.length || (e.hasClass("open") ? e.removeClass("open") : ($(".ulGen").removeClass("open"), e.addClass("open")), !1)
	})
}

function accordions() {
	$(".panel-default h4 a").addClass("collapsed")
}

function animateTo(t) {
	var e = jQuery("#" + t).offset().top,
		n = (jQuery("body").height(), e);
	jQuery("html, body").animate({
		scrollTop: n
	}, 600)
}

function sticker() {
	960 < $("body").width() && 700 < $("body").height() && ($(".stickerFiltros").sticky({
		topSpacing: 118,
		bottomSpacing: 760
	}), $(".stickerCart").sticky({
		topSpacing: 140,
		bottomSpacing: 330
	}))
}

function BoostrapTTip() {
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
}

function dropdowntogglewOver() {
	768 < $("body").width() && ($(".dropdown-toggle.wOver").on("mouseover", function () {
		$(".btn-group").removeClass("open"), $(this).parent().addClass("open")
	}), $(".dropdown-toggle.wOver").on("mouseout", function () {
		$(this).parent().removeClass("open")
	})), dropdowntogglewOver2()
}

function dropdowntogglewOver2() {
	768 < $("body").width() && ($(".overTop").on("mouseover", function () {
		$(".tiraTopPrdHeader").addClass("open")
	}), $(".tiraTopPrdHeader").on("mouseleave", function () {
		$(".tiraTopPrdHeader").removeClass("open")
	}))
}

function dropdownTop() {
	$(document).on("click", ".JSdropdownTopGroup", function (t) {
		t.stopPropagation()
	})
}

function addScrollClass() {
	var e = !1;
	$(window).on("scroll", function () {
		var t = $(window).scrollTop();
		100 < t ? $("body").addClass("scrolled") : $("body").removeClass("scrolled"), 2e3 < t && !e && (addHomeVideo(), e = !0)
	})
}

function addHomeVideo() {
	$(".touch").length || $("body").width() < 960 ? $(".JSremoveVideo").remove() : $("#videoJS").append('<iframe id="JSvimeoSource" id="vimeo_player" src="https://player.vimeo.com/video/138956442?background=1&autoplay=1&loop=1&color=000000&title=0&byline=0&portrait=0" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
}

function scrollScreen() {
	if ($(".JSflechas").length) {
		var t = _.throttle(function () {
				$("#prevSlideBtn").click()
			}, 200, {
				trailing: !1
			}),
			e = _.throttle(function () {
				$("#nextSlideBtn").click()
			}, 200, {
				trailing: !1
			});
		_.debounce(function () {
			t()
		}, 30), _.debounce(function () {
			e()
		}, 30)
	}

	function n(t) {
		var e, n = $(document).scrollTop(),
			i = 1e5,
			o = 1e5,
			r = 0,
			a = 0,
			s = 0;
		$(".section").each(function (t) {
			var e = $(this).position().top;
			Math.abs(n - e) < i && (i = Math.abs(n - e), a = $(this).prev().prev().length ? $(this).prev().prev().position().top : 0), Math.abs(n - e) <= o && (o = Math.abs(n - e), r = $(this).next().next().length ? $(this).next().next().position().top : n)
		}), "next" == t && (t = r), "prev" == t && (t = a), e = t - 80, s = Math.abs(n - e) - 80, (s *= .99) < 500 && (s = 500), $("body").stop().animate({
			scrollTop: e
		}, 1.4 * s, "easeOutCubic")
	}
	$(".JSscrollScreen").length && ($("body").width() < 960 || ($(".controlsSc").show(100), $(".scrollDown").click(function (t) {
		return t.preventDefault(), n("next"), !1
	}), $(".scrollUp").click(function (t) {
		return t.preventDefault(), n("prev"), !1
	})))
}

function slideKeyboard() {
	$("#prevSlideBtn").length && $(window).keydown(function (t) {
		37 === t.keyCode && $("#prevSlideBtn").click(), 39 === t.keyCode && $("#nextSlideBtn").click()
	})
}

function imgLiquids() {
	$(".imgLiquidFill").imgLiquid({
		fill: !0
	}), $(".imgLiquidBg").imgLiquid({
		fill: !0,
		verticalAlign: "bottom"
	})
}

function openSearch() {
	var e = !1;
	window.prendeSearch = function () {
		return $(".txtSearchTop").removeClass("closed"), !(e = !0)
	}, window.apagaSearch = function () {
		return $(".txtSearchTop").addClass("closed"), e = !1
	}, window.togleSearch = function (t) {
		return e ? window.apagaSearch() : window.prendeSearch(), t && t.stopPropagation(), !1
	}
}

function subMenuOpener() {
	function t() {
		$("subheader").removeClass("open"), $("subheader .rootData.open").removeClass("open")
	}
	768 < $("body").width() && ($(".subMenuOpener").on("mouseover", function () {
		var t, e, n = $(this).attr("data-sec");
		t = n, e = $(this).offset().left, $("subheader").addClass("open"), $("subheader .rootData.open").removeClass("open"), $("subheader #" + t).addClass("open"), $("subheader").css("padding-left", e + "px")
	}), $(".subMenuCloser").on("mouseover", function () {
		t()
	}), $("subheader").on("mouseleave", function () {
		t()
	}))
}! function (t) {
	var e = jQuery.fn.jquery.split(" ")[0].split(".");
	if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(),
function (i) {
	"use strict";
	i.fn.emulateTransitionEnd = function (t) {
		var e = !1,
			n = this;
		i(this).one("bsTransitionEnd", function () {
			e = !0
		});
		return setTimeout(function () {
			e || i(n).trigger(i.support.transition.end)
		}, t), this
	}, i(function () {
		i.support.transition = function () {
			var t = document.createElement("bootstrap"),
				e = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd otransitionend",
					transition: "transitionend"
				};
			for (var n in e)
				if (void 0 !== t.style[n]) return {
					end: e[n]
				};
			return !1
		}(), i.support.transition && (i.event.special.bsTransitionEnd = {
			bindType: i.support.transition.end,
			delegateType: i.support.transition.end,
			handle: function (t) {
				return i(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery),
function (r) {
	"use strict";
	var e = '[data-dismiss="alert"]',
		a = function (t) {
			r(t).on("click", e, this.close)
		};
	a.VERSION = "3.3.1", a.TRANSITION_DURATION = 150, a.prototype.close = function (t) {
		function e() {
			o.detach().trigger("closed.bs.alert").remove()
		}
		var n = r(this),
			i = n.attr("data-target");
		i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
		var o = r(i);
		t && t.preventDefault(), o.length || (o = n.closest(".alert")), o.trigger(t = r.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), r.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(a.TRANSITION_DURATION) : e())
	};
	var t = r.fn.alert;
	r.fn.alert = function (n) {
		return this.each(function () {
			var t = r(this),
				e = t.data("bs.alert");
			e || t.data("bs.alert", e = new a(this)), "string" == typeof n && e[n].call(t)
		})
	}, r.fn.alert.Constructor = a, r.fn.alert.noConflict = function () {
		return r.fn.alert = t, this
	}, r(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function (r) {
	"use strict";

	function n(i) {
		return this.each(function () {
			var t = r(this),
				e = t.data("bs.button"),
				n = "object" == typeof i && i;
			e || t.data("bs.button", e = new o(this, n)), "toggle" == i ? e.toggle() : i && e.setState(i)
		})
	}
	var o = function (t, e) {
		this.$element = r(t), this.options = r.extend({}, o.DEFAULTS, e), this.isLoading = !1
	};
	o.VERSION = "3.3.1", o.DEFAULTS = {
		loadingText: "loading..."
	}, o.prototype.setState = function (t) {
		var e = "disabled",
			n = this.$element,
			i = n.is("input") ? "val" : "html",
			o = n.data();
		t += "Text", null == o.resetText && n.data("resetText", n[i]()), setTimeout(r.proxy(function () {
			n[i](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, n.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading = !1, n.removeClass(e).removeAttr(e))
		}, this), 0)
	}, o.prototype.toggle = function () {
		var t = !0,
			e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var n = this.$element.find("input");
			"radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
		t && this.$element.toggleClass("active")
	};
	var t = r.fn.button;
	r.fn.button = n, r.fn.button.Constructor = o, r.fn.button.noConflict = function () {
		return r.fn.button = t, this
	}, r(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
		var e = r(t.target);
		e.hasClass("btn") || (e = e.closest(".btn")), n.call(e, "toggle"), t.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
		r(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
	})
}(jQuery),
function (p) {
	"use strict";

	function a(o) {
		return this.each(function () {
			var t = p(this),
				e = t.data("bs.carousel"),
				n = p.extend({}, f.DEFAULTS, t.data(), "object" == typeof o && o),
				i = "string" == typeof o ? o : n.slide;
			e || t.data("bs.carousel", e = new f(this, n)), "number" == typeof o ? e.to(o) : i ? e[i]() : n.interval && e.pause().cycle()
		})
	}
	var f = function (t, e) {
		this.$element = p(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", p.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", p.proxy(this.pause, this)).on("mouseleave.bs.carousel", p.proxy(this.cycle, this))
	};
	f.VERSION = "3.3.1", f.TRANSITION_DURATION = 600, f.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, f.prototype.keydown = function (t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			t.preventDefault()
		}
	}, f.prototype.cycle = function (t) {
		return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(p.proxy(this.next, this), this.options.interval)), this
	}, f.prototype.getItemIndex = function (t) {
		return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
	}, f.prototype.getItemForDirection = function (t, e) {
		var n = "prev" == t ? -1 : 1,
			i = (this.getItemIndex(e) + n) % this.$items.length;
		return this.$items.eq(i)
	}, f.prototype.to = function (t) {
		var e = this,
			n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return t > this.$items.length - 1 || t < 0 ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			e.to(t)
		}) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
	}, f.prototype.pause = function (t) {
		return t || (this.paused = !0), this.$element.find(".next, .prev").length && p.support.transition && (this.$element.trigger(p.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, f.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next")
	}, f.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev")
	}, f.prototype.slide = function (t, e) {
		var n = this.$element.find(".item.active"),
			i = e || this.getItemForDirection(t, n),
			o = this.interval,
			r = "next" == t ? "left" : "right",
			a = "next" == t ? "first" : "last",
			s = this;
		if (!i.length) {
			if (!this.options.wrap) return;
			i = this.$element.find(".item")[a]()
		}
		if (i.hasClass("active")) return this.sliding = !1;
		var l = i[0],
			c = p.Event("slide.bs.carousel", {
				relatedTarget: l,
				direction: r
			});
		if (this.$element.trigger(c), !c.isDefaultPrevented()) {
			if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var u = p(this.$indicators.children()[this.getItemIndex(i)]);
				u && u.addClass("active")
			}
			var d = p.Event("slid.bs.carousel", {
				relatedTarget: l,
				direction: r
			});
			return p.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), i[0].offsetWidth, n.addClass(r), i.addClass(r), n.one("bsTransitionEnd", function () {
				i.removeClass([t, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), s.sliding = !1, setTimeout(function () {
					s.$element.trigger(d)
				}, 0)
			}).emulateTransitionEnd(f.TRANSITION_DURATION)) : (n.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(d)), o && this.cycle(), this
		}
	};
	var t = p.fn.carousel;
	p.fn.carousel = a, p.fn.carousel.Constructor = f, p.fn.carousel.noConflict = function () {
		return p.fn.carousel = t, this
	};
	var e = function (t) {
		var e, n = p(this),
			i = p(n.attr("data-target") || (e = n.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
		if (i.hasClass("carousel")) {
			var o = p.extend({}, i.data(), n.data()),
				r = n.attr("data-slide-to");
			r && (o.interval = !1), a.call(i, o), r && i.data("bs.carousel").to(r), t.preventDefault()
		}
	};
	p(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), p(window).on("load", function () {
		p('[data-ride="carousel"]').each(function () {
			var t = p(this);
			a.call(t, t.data())
		})
	})
}(jQuery),
function (a) {
	"use strict";

	function o(t) {
		var e, n = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
		return a(n)
	}

	function s(i) {
		return this.each(function () {
			var t = a(this),
				e = t.data("bs.collapse"),
				n = a.extend({}, l.DEFAULTS, t.data(), "object" == typeof i && i);
			!e && n.toggle && "show" == i && (n.toggle = !1), e || t.data("bs.collapse", e = new l(this, n)), "string" == typeof i && e[i]()
		})
	}
	var l = function (t, e) {
		this.$element = a(t), this.options = a.extend({}, l.DEFAULTS, e), this.$trigger = a(this.options.trigger).filter('[href="#' + t.id + '"], [data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	l.VERSION = "3.3.1", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
		toggle: !0,
		trigger: '[data-toggle="collapse"]'
	}, l.prototype.dimension = function () {
		return this.$element.hasClass("width") ? "width" : "height"
	}, l.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var t, e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
			if (!(e && e.length && ((t = e.data("bs.collapse")) && t.transitioning))) {
				var n = a.Event("show.bs.collapse");
				if (this.$element.trigger(n), !n.isDefaultPrevented()) {
					e && e.length && (s.call(e, "hide"), t || e.data("bs.collapse", null));
					var i = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var o = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!a.support.transition) return o.call(this);
					var r = a.camelCase(["scroll", i].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(o, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][r])
				}
			}
		}
	}, l.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var t = a.Event("hide.bs.collapse");
			if (this.$element.trigger(t), !t.isDefaultPrevented()) {
				var e = this.dimension();
				this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var n = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return a.support.transition ? void this.$element[e](0).one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : n.call(this)
			}
		}
	}, l.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, l.prototype.getParent = function () {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (t, e) {
			var n = a(e);
			this.addAriaAndCollapsedClass(o(n), n)
		}, this)).end()
	}, l.prototype.addAriaAndCollapsedClass = function (t, e) {
		var n = t.hasClass("in");
		t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
	};
	var t = a.fn.collapse;
	a.fn.collapse = s, a.fn.collapse.Constructor = l, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = t, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
		var e = a(this);
		e.attr("data-target") || t.preventDefault();
		var n = o(e),
			i = n.data("bs.collapse") ? "toggle" : a.extend({}, e.data(), {
				trigger: this
			});
		s.call(n, i)
	})
}(jQuery),
function (s) {
	"use strict";

	function r(i) {
		i && 3 === i.which || (s(".dropdown-backdrop").remove(), s(c).each(function () {
			var t = s(this),
				e = l(t),
				n = {
					relatedTarget: this
				};
			e.hasClass("open") && (e.trigger(i = s.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", n)))
		}))
	}

	function l(t) {
		var e = t.attr("data-target");
		e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
		var n = e && s(e);
		return n && n.length ? n : t.parent()
	}
	var c = '[data-toggle="dropdown"]',
		i = function (t) {
			s(t).on("click.bs.dropdown", this.toggle)
		};
	i.VERSION = "3.3.1", i.prototype.toggle = function (t) {
		var e = s(this);
		if (!e.is(".disabled, :disabled")) {
			var n = l(e),
				i = n.hasClass("open");
			if (r(), !i) {
				"ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && s('<div class="dropdown-backdrop"/>').insertAfter(s(this)).on("click", r);
				var o = {
					relatedTarget: this
				};
				if (n.trigger(t = s.Event("show.bs.dropdown", o)), t.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger("shown.bs.dropdown", o)
			}
			return !1
		}
	}, i.prototype.keydown = function (t) {
		if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
			var e = s(this);
			if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
				var n = l(e),
					i = n.hasClass("open");
				if (!i && 27 != t.which || i && 27 == t.which) return 27 == t.which && n.find(c).trigger("focus"), e.trigger("click");
				var o = " li:not(.divider):visible a",
					r = n.find('[role="menu"]' + o + ', [role="listbox"]' + o);
				if (r.length) {
					var a = r.index(t.target);
					38 == t.which && 0 < a && a--, 40 == t.which && a < r.length - 1 && a++, ~a || (a = 0), r.eq(a).trigger("focus")
				}
			}
		}
	};
	var t = s.fn.dropdown;
	s.fn.dropdown = function (n) {
		return this.each(function () {
			var t = s(this),
				e = t.data("bs.dropdown");
			e || t.data("bs.dropdown", e = new i(this)), "string" == typeof n && e[n].call(t)
		})
	}, s.fn.dropdown.Constructor = i, s.fn.dropdown.noConflict = function () {
		return s.fn.dropdown = t, this
	}, s(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", c, i.prototype.toggle).on("keydown.bs.dropdown.data-api", c, i.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', i.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', i.prototype.keydown)
}(jQuery),
function (r) {
	"use strict";

	function a(i, o) {
		return this.each(function () {
			var t = r(this),
				e = t.data("bs.modal"),
				n = r.extend({}, s.DEFAULTS, t.data(), "object" == typeof i && i);
			e || t.data("bs.modal", e = new s(this, n)), "string" == typeof i ? e[i](o) : n.show && e.show(o)
		})
	}
	var s = function (t, e) {
		this.options = e, this.$body = r(document.body), this.$element = r(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, r.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	s.VERSION = "3.3.1", s.TRANSITION_DURATION = 300, s.BACKDROP_TRANSITION_DURATION = 150, s.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, s.prototype.toggle = function (t) {
		return this.isShown ? this.hide() : this.show(t)
	}, s.prototype.show = function (n) {
		var i = this,
			t = r.Event("show.bs.modal", {
				relatedTarget: n
			});
		this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', r.proxy(this.hide, this)), this.backdrop(function () {
			var t = r.support.transition && i.$element.hasClass("fade");
			i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.options.backdrop && i.adjustBackdrop(), i.adjustDialog(), t && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
			var e = r.Event("shown.bs.modal", {
				relatedTarget: n
			});
			t ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
				i.$element.trigger("focus").trigger(e)
			}).emulateTransitionEnd(s.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(e)
		}))
	}, s.prototype.hide = function (t) {
		t && t.preventDefault(), t = r.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), r(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), r.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", r.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal())
	}, s.prototype.enforceFocus = function () {
		r(document).off("focusin.bs.modal").on("focusin.bs.modal", r.proxy(function (t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		}, this))
	}, s.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", r.proxy(function (t) {
			27 == t.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, s.prototype.resize = function () {
		this.isShown ? r(window).on("resize.bs.modal", r.proxy(this.handleUpdate, this)) : r(window).off("resize.bs.modal")
	}, s.prototype.hideModal = function () {
		var t = this;
		this.$element.hide(), this.backdrop(function () {
			t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
		})
	}, s.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, s.prototype.backdrop = function (t) {
		var e = this,
			n = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var i = r.support.transition && n;
			if (this.$backdrop = r('<div class="modal-backdrop ' + n + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", r.proxy(function (t) {
					t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
				}, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
			i ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : t()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var o = function () {
				e.removeBackdrop(), t && t()
			};
			r.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : o()
		} else t && t()
	}, s.prototype.handleUpdate = function () {
		this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
	}, s.prototype.adjustBackdrop = function () {
		this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
	}, s.prototype.adjustDialog = function () {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
		})
	}, s.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, s.prototype.checkScrollbar = function () {
		this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
	}, s.prototype.setScrollbar = function () {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	}, s.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", "")
	}, s.prototype.measureScrollbar = function () {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure", this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t), e
	};
	var t = r.fn.modal;
	r.fn.modal = a, r.fn.modal.Constructor = s, r.fn.modal.noConflict = function () {
		return r.fn.modal = t, this
	}, r(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
		var e = r(this),
			n = e.attr("href"),
			i = r(e.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
			o = i.data("bs.modal") ? "toggle" : r.extend({
				remote: !/#/.test(n) && n
			}, i.data(), e.data());
		e.is("a") && t.preventDefault(), i.one("show.bs.modal", function (t) {
			t.isDefaultPrevented() || i.one("hidden.bs.modal", function () {
				e.is(":visible") && e.trigger("focus")
			})
		}), a.call(i, o, this)
	})
}(jQuery),
function (g) {
	"use strict";
	var m = function (t, e) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
	};
	m.VERSION = "3.3.1", m.TRANSITION_DURATION = 150, m.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, m.prototype.init = function (t, e, n) {
		this.enabled = !0, this.type = t, this.$element = g(e), this.options = this.getOptions(n), this.$viewport = this.options.viewport && g(this.options.viewport.selector || this.options.viewport);
		for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
			var r = i[o];
			if ("click" == r) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this));
			else if ("manual" != r) {
				var a = "hover" == r ? "mouseenter" : "focusin",
					s = "hover" == r ? "mouseleave" : "focusout";
				this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, g.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = g.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, m.prototype.getDefaults = function () {
		return m.DEFAULTS
	}, m.prototype.getOptions = function (t) {
		return (t = g.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
			show: t.delay,
			hide: t.delay
		}), t
	}, m.prototype.getDelegateOptions = function () {
		var n = {},
			i = this.getDefaults();
		return this._options && g.each(this._options, function (t, e) {
			i[t] != e && (n[t] = e)
		}), n
	}, m.prototype.enter = function (t) {
		var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
		return e && e.$tip && e.$tip.is(":visible") ? void(e.hoverState = "in") : (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function () {
			"in" == e.hoverState && e.show()
		}, e.options.delay.show)) : e.show())
	}, m.prototype.leave = function (t) {
		var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
		return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function () {
			"out" == e.hoverState && e.hide()
		}, e.options.delay.hide)) : e.hide()
	}, m.prototype.show = function () {
		var t = g.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(t);
			var e = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (t.isDefaultPrevented() || !e) return;
			var n = this,
				i = this.tip(),
				o = this.getUID(this.type);
			this.setContent(), i.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && i.addClass("fade");
			var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
				a = /\s?auto?\s?/i,
				s = a.test(r);
			s && (r = r.replace(a, "") || "top"), i.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(r).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
			var l = this.getPosition(),
				c = i[0].offsetWidth,
				u = i[0].offsetHeight;
			if (s) {
				var d = r,
					p = this.options.container ? g(this.options.container) : this.$element.parent(),
					f = this.getPosition(p);
				r = "bottom" == r && l.bottom + u > f.bottom ? "top" : "top" == r && l.top - u < f.top ? "bottom" : "right" == r && l.right + c > f.width ? "left" : "left" == r && l.left - c < f.left ? "right" : r, i.removeClass(d).addClass(r)
			}
			var h = this.getCalculatedOffset(r, l, c, u);
			this.applyPlacement(h, r);
			var v = function () {
				var t = n.hoverState;
				n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
			};
			g.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", v).emulateTransitionEnd(m.TRANSITION_DURATION) : v()
		}
	}, m.prototype.applyPlacement = function (t, e) {
		var n = this.tip(),
			i = n[0].offsetWidth,
			o = n[0].offsetHeight,
			r = parseInt(n.css("margin-top"), 10),
			a = parseInt(n.css("margin-left"), 10);
		isNaN(r) && (r = 0), isNaN(a) && (a = 0), t.top = t.top + r, t.left = t.left + a, g.offset.setOffset(n[0], g.extend({
			using: function (t) {
				n.css({
					top: Math.round(t.top),
					left: Math.round(t.left)
				})
			}
		}, t), 0), n.addClass("in");
		var s = n[0].offsetWidth,
			l = n[0].offsetHeight;
		"top" == e && l != o && (t.top = t.top + o - l);
		var c = this.getViewportAdjustedDelta(e, t, s, l);
		c.left ? t.left += c.left : t.top += c.top;
		var u = /top|bottom/.test(e),
			d = u ? 2 * c.left - i + s : 2 * c.top - o + l,
			p = u ? "offsetWidth" : "offsetHeight";
		n.offset(t), this.replaceArrow(d, n[0][p], u)
	}, m.prototype.replaceArrow = function (t, e, n) {
		this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
	}, m.prototype.setContent = function () {
		var t = this.tip(),
			e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
	}, m.prototype.hide = function (t) {
		function e() {
			"in" != n.hoverState && i.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), t && t()
		}
		var n = this,
			i = this.tip(),
			o = g.Event("hide.bs." + this.type);
		return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), g.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(m.TRANSITION_DURATION) : e(), this.hoverState = null, this)
	}, m.prototype.fixTitle = function () {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, m.prototype.hasContent = function () {
		return this.getTitle()
	}, m.prototype.getPosition = function (t) {
		var e = (t = t || this.$element)[0],
			n = "BODY" == e.tagName,
			i = e.getBoundingClientRect();
		null == i.width && (i = g.extend({}, i, {
			width: i.right - i.left,
			height: i.bottom - i.top
		}));
		var o = n ? {
				top: 0,
				left: 0
			} : t.offset(),
			r = {
				scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
			},
			a = n ? {
				width: g(window).width(),
				height: g(window).height()
			} : null;
		return g.extend({}, i, r, a, o)
	}, m.prototype.getCalculatedOffset = function (t, e, n, i) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - n / 2
		} : "top" == t ? {
			top: e.top - i,
			left: e.left + e.width / 2 - n / 2
		} : "left" == t ? {
			top: e.top + e.height / 2 - i / 2,
			left: e.left - n
		} : {
			top: e.top + e.height / 2 - i / 2,
			left: e.left + e.width
		}
	}, m.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
		var o = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return o;
		var r = this.options.viewport && this.options.viewport.padding || 0,
			a = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var s = e.top - r - a.scroll,
				l = e.top + r - a.scroll + i;
			s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
		} else {
			var c = e.left - r,
				u = e.left + r + n;
			c < a.left ? o.left = a.left - c : u > a.width && (o.left = a.left + a.width - u)
		}
		return o
	}, m.prototype.getTitle = function () {
		var t = this.$element,
			e = this.options;
		return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
	}, m.prototype.getUID = function (t) {
		for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
		return t
	}, m.prototype.tip = function () {
		return this.$tip = this.$tip || g(this.options.template)
	}, m.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, m.prototype.enable = function () {
		this.enabled = !0
	}, m.prototype.disable = function () {
		this.enabled = !1
	}, m.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, m.prototype.toggle = function (t) {
		var e = this;
		t && ((e = g(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e))), e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
	}, m.prototype.destroy = function () {
		var t = this;
		clearTimeout(this.timeout), this.hide(function () {
			t.$element.off("." + t.type).removeData("bs." + t.type)
		})
	};
	var t = g.fn.tooltip;
	g.fn.tooltip = function (o) {
		return this.each(function () {
			var t = g(this),
				e = t.data("bs.tooltip"),
				n = "object" == typeof o && o,
				i = n && n.selector;
			(e || "destroy" != o) && (i ? (e || t.data("bs.tooltip", e = {}), e[i] || (e[i] = new m(this, n))) : e || t.data("bs.tooltip", e = new m(this, n)), "string" == typeof o && e[o]())
		})
	}, g.fn.tooltip.Constructor = m, g.fn.tooltip.noConflict = function () {
		return g.fn.tooltip = t, this
	}
}(jQuery),
function (r) {
	"use strict";
	var a = function (t, e) {
		this.init("popover", t, e)
	};
	if (!r.fn.tooltip) throw new Error("Popover requires tooltip.js");
	a.VERSION = "3.3.1", a.DEFAULTS = r.extend({}, r.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), ((a.prototype = r.extend({}, r.fn.tooltip.Constructor.prototype)).constructor = a).prototype.getDefaults = function () {
		return a.DEFAULTS
	}, a.prototype.setContent = function () {
		var t = this.tip(),
			e = this.getTitle(),
			n = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
	}, a.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, a.prototype.getContent = function () {
		var t = this.$element,
			e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	}, a.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, a.prototype.tip = function () {
		return this.$tip || (this.$tip = r(this.options.template)), this.$tip
	};
	var t = r.fn.popover;
	r.fn.popover = function (o) {
		return this.each(function () {
			var t = r(this),
				e = t.data("bs.popover"),
				n = "object" == typeof o && o,
				i = n && n.selector;
			(e || "destroy" != o) && (i ? (e || t.data("bs.popover", e = {}), e[i] || (e[i] = new a(this, n))) : e || t.data("bs.popover", e = new a(this, n)), "string" == typeof o && e[o]())
		})
	}, r.fn.popover.Constructor = a, r.fn.popover.noConflict = function () {
		return r.fn.popover = t, this
	}
}(jQuery),
function (r) {
	"use strict";

	function o(t, e) {
		var n = r.proxy(this.process, this);
		this.$body = r("body"), this.$scrollElement = r(r(t).is("body") ? window : t), this.options = r.extend({}, o.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", n), this.refresh(), this.process()
	}

	function e(i) {
		return this.each(function () {
			var t = r(this),
				e = t.data("bs.scrollspy"),
				n = "object" == typeof i && i;
			e || t.data("bs.scrollspy", e = new o(this, n)), "string" == typeof i && e[i]()
		})
	}
	o.VERSION = "3.3.1", o.DEFAULTS = {
		offset: 10
	}, o.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, o.prototype.refresh = function () {
		var i = "offset",
			o = 0;
		r.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
		var t = this;
		this.$body.find(this.selector).map(function () {
			var t = r(this),
				e = t.data("target") || t.attr("href"),
				n = /^#./.test(e) && r(e);
			return n && n.length && n.is(":visible") && [
				[n[i]().top + o, e]
			] || null
		}).sort(function (t, e) {
			return t[0] - e[0]
		}).each(function () {
			t.offsets.push(this[0]), t.targets.push(this[1])
		})
	}, o.prototype.process = function () {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset,
			n = this.getScrollHeight(),
			i = this.options.offset + n - this.$scrollElement.height(),
			o = this.offsets,
			r = this.targets,
			a = this.activeTarget;
		if (this.scrollHeight != n && this.refresh(), i <= e) return a != (t = r[r.length - 1]) && this.activate(t);
		if (a && e < o[0]) return this.activeTarget = null, this.clear();
		for (t = o.length; t--;) a != r[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(r[t])
	}, o.prototype.activate = function (t) {
		this.activeTarget = t, this.clear();
		var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
			n = r(e).parents("li").addClass("active");
		n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
	}, o.prototype.clear = function () {
		r(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var t = r.fn.scrollspy;
	r.fn.scrollspy = e, r.fn.scrollspy.Constructor = o, r.fn.scrollspy.noConflict = function () {
		return r.fn.scrollspy = t, this
	}, r(window).on("load.bs.scrollspy.data-api", function () {
		r('[data-spy="scroll"]').each(function () {
			var t = r(this);
			e.call(t, t.data())
		})
	})
}(jQuery),
function (s) {
	"use strict";

	function e(n) {
		return this.each(function () {
			var t = s(this),
				e = t.data("bs.tab");
			e || t.data("bs.tab", e = new a(this)), "string" == typeof n && e[n]()
		})
	}
	var a = function (t) {
		this.element = s(t)
	};
	a.VERSION = "3.3.1", a.TRANSITION_DURATION = 150, a.prototype.show = function () {
		var t = this.element,
			e = t.closest("ul:not(.dropdown-menu)"),
			n = t.data("target");
		if (n || (n = (n = t.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
			var i = e.find(".active:last a"),
				o = s.Event("hide.bs.tab", {
					relatedTarget: t[0]
				}),
				r = s.Event("show.bs.tab", {
					relatedTarget: i[0]
				});
			if (i.trigger(o), t.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
				var a = s(n);
				this.activate(t.closest("li"), e), this.activate(a, a.parent(), function () {
					i.trigger({
						type: "hidden.bs.tab",
						relatedTarget: t[0]
					}), t.trigger({
						type: "shown.bs.tab",
						relatedTarget: i[0]
					})
				})
			}
		}
	}, a.prototype.activate = function (t, e, n) {
		function i() {
			o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
		}
		var o = e.find("> .active"),
			r = n && s.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);
		o.length && r ? o.one("bsTransitionEnd", i).emulateTransitionEnd(a.TRANSITION_DURATION) : i(), o.removeClass("in")
	};
	var t = s.fn.tab;
	s.fn.tab = e, s.fn.tab.Constructor = a, s.fn.tab.noConflict = function () {
		return s.fn.tab = t, this
	};
	var n = function (t) {
		t.preventDefault(), e.call(s(this), "show")
	};
	s(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function (l) {
	"use strict";

	function n(i) {
		return this.each(function () {
			var t = l(this),
				e = t.data("bs.affix"),
				n = "object" == typeof i && i;
			e || t.data("bs.affix", e = new c(this, n)), "string" == typeof i && e[i]()
		})
	}
	var c = function (t, e) {
		this.options = l.extend({}, c.DEFAULTS, e), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
	};
	c.VERSION = "3.3.1", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
		offset: 0,
		target: window
	}, c.prototype.getState = function (t, e, n, i) {
		var o = this.$target.scrollTop(),
			r = this.$element.offset(),
			a = this.$target.height();
		if (null != n && "top" == this.affixed) return o < n && "top";
		if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= t - i) && "bottom";
		var s = null == this.affixed,
			l = s ? o : r.top;
		return null != n && l <= n ? "top" : null != i && t - i <= l + (s ? a : e) && "bottom"
	}, c.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var t = this.$target.scrollTop(),
			e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	}, c.prototype.checkPositionWithEventLoop = function () {
		setTimeout(l.proxy(this.checkPosition, this), 1)
	}, c.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var t = this.$element.height(),
				e = this.options.offset,
				n = e.top,
				i = e.bottom,
				o = l("body").height();
			"object" != typeof e && (i = n = e), "function" == typeof n && (n = e.top(this.$element)), "function" == typeof i && (i = e.bottom(this.$element));
			var r = this.getState(o, t, n, i);
			if (this.affixed != r) {
				null != this.unpin && this.$element.css("top", "");
				var a = "affix" + (r ? "-" + r : ""),
					s = l.Event(a + ".bs.affix");
				if (this.$element.trigger(s), s.isDefaultPrevented()) return;
				this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == r && this.$element.offset({
				top: o - t - i
			})
		}
	};
	var t = l.fn.affix;
	l.fn.affix = n, l.fn.affix.Constructor = c, l.fn.affix.noConflict = function () {
		return l.fn.affix = t, this
	}, l(window).on("load", function () {
		l('[data-spy="affix"]').each(function () {
			var t = l(this),
				e = t.data();
			e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), n.call(t, e)
		})
	})
}(jQuery),
function (o, n, L, p) {
	"use strict";
	var r = L("html"),
		i = L(o),
		c = L(n),
		D = L.fancybox = function () {
			D.open.apply(this, arguments)
		},
		a = navigator.userAgent.match(/msie/i),
		s = null,
		u = n.createTouch !== p,
		f = function (t) {
			return t && t.hasOwnProperty && t instanceof L
		},
		h = function (t) {
			return t && "string" === L.type(t)
		},
		M = function (t) {
			return h(t) && 0 < t.indexOf("%")
		},
		N = function (t, e) {
			var n = parseInt(t, 10) || 0;
			return e && M(t) && (n = D.getViewport()[e] / 100 * n), Math.ceil(n)
		},
		B = function (t, e) {
			return N(t, e) + "px"
		};
	L.extend(D, {
		version: "2.1.5",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1,
			autoSize: !0,
			autoHeight: !1,
			autoWidth: !1,
			autoResize: !0,
			autoCenter: !u,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: .5,
			leftRatio: .5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3e3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: {
				dataType: "html",
				headers: {
					"X-fancyBox": !0
				}
			},
			iframe: {
				scrolling: "auto",
				preload: !0
			},
			swf: {
				wmode: "transparent",
				allowfullscreen: "true",
				allowscriptaccess: "always"
			},
			keys: {
				next: {
					13: "left",
					34: "up",
					39: "left",
					40: "up"
				},
				prev: {
					8: "right",
					33: "down",
					37: "right",
					38: "down"
				},
				close: [27],
				play: [32],
				toggle: [70]
			},
			direction: {
				next: "left",
				prev: "right"
			},
			scrollOutside: !0,
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (a ? ' allowtransparency="true"' : "") + "></iframe>",
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
				loading: '<div id="fancybox-loading"><div></div></div>'
			},
			openEffect: "fade",
			openSpeed: 250,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 250,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 250,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 250,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: {
				overlay: !0,
				title: !0
			},
			onCancel: L.noop,
			beforeLoad: L.noop,
			afterLoad: L.noop,
			beforeShow: L.noop,
			afterShow: L.noop,
			beforeChange: L.noop,
			beforeClose: L.noop,
			afterClose: L.noop
		},
		group: {},
		opts: {},
		previous: null,
		coming: null,
		current: null,
		isActive: !1,
		isOpen: !1,
		isOpened: !1,
		wrap: null,
		skin: null,
		outer: null,
		inner: null,
		player: {
			timer: null,
			isActive: !1
		},
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function (u, d) {
			if (u && (L.isPlainObject(d) || (d = {}), !1 !== D.close(!0))) return L.isArray(u) || (u = f(u) ? L(u).get() : [u]), L.each(u, function (t, e) {
				var n, i, o, r, a, s, l, c = {};
				"object" === L.type(e) && (e.nodeType && (e = L(e)), f(e) ? (c = {
					href: e.data("fancybox-href") || e.attr("href"),
					title: L("<div/>").text(e.data("fancybox-title") || e.attr("title") || "").html(),
					isDom: !0,
					element: e
				}, L.metadata && L.extend(!0, c, e.metadata())) : c = e), n = d.href || c.href || (h(e) ? e : null), i = d.title !== p ? d.title : c.title || "", !(r = (o = d.content || c.content) ? "html" : d.type || c.type) && c.isDom && ((r = e.data("fancybox-type")) || (r = (a = e.prop("class").match(/fancybox\.(\w+)/)) ? a[1] : null)), h(n) && (r || (D.isImage(n) ? r = "image" : D.isSWF(n) ? r = "swf" : "#" === n.charAt(0) ? r = "inline" : h(e) && (r = "html", o = e)), "ajax" === r && (n = (s = n.split(/\s+/, 2)).shift(), l = s.shift())), o || ("inline" === r ? n ? o = L(h(n) ? n.replace(/.*(?=#[^\s]+$)/, "") : n) : c.isDom && (o = e) : "html" === r ? o = n : r || n || !c.isDom || (r = "inline", o = e)), L.extend(c, {
					href: n,
					type: r,
					content: o,
					title: i,
					selector: l
				}), u[t] = c
			}), D.opts = L.extend(!0, {}, D.defaults, d), d.keys !== p && (D.opts.keys = !!d.keys && L.extend({}, D.defaults.keys, d.keys)), D.group = u, D._start(D.opts.index)
		},
		cancel: function () {
			var t = D.coming;
			t && !1 === D.trigger("onCancel") || (D.hideLoading(), t && (D.ajaxLoad && D.ajaxLoad.abort(), D.ajaxLoad = null, D.imgPreload && (D.imgPreload.onload = D.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), D.coming = null, D.current || D._afterZoomOut(t)))
		},
		close: function (t) {
			D.cancel(), !1 !== D.trigger("beforeClose") && (D.unbindEvents(), D.isActive && (D.isOpen && !0 !== t ? (D.isOpen = D.isOpened = !1, D.isClosing = !0, L(".fancybox-item, .fancybox-nav").remove(), D.wrap.stop(!0, !0).removeClass("fancybox-opened"), D.transitions[D.current.closeMethod]()) : (L(".fancybox-wrap").stop(!0).trigger("onReset").remove(), D._afterZoomOut())))
		},
		play: function (t) {
			var e = function () {
					clearTimeout(D.player.timer)
				},
				n = function () {
					e(), D.current && D.player.isActive && (D.player.timer = setTimeout(D.next, D.current.playSpeed))
				},
				i = function () {
					e(), c.unbind(".player"), D.player.isActive = !1, D.trigger("onPlayEnd")
				};
			!0 === t || !D.player.isActive && !1 !== t ? D.current && (D.current.loop || D.current.index < D.group.length - 1) && (D.player.isActive = !0, c.bind({
				"onCancel.player beforeClose.player": i,
				"onUpdate.player": n,
				"beforeLoad.player": e
			}), n(), D.trigger("onPlayStart")) : i()
		},
		next: function (t) {
			var e = D.current;
			e && (h(t) || (t = e.direction.next), D.jumpto(e.index + 1, t, "next"))
		},
		prev: function (t) {
			var e = D.current;
			e && (h(t) || (t = e.direction.prev), D.jumpto(e.index - 1, t, "prev"))
		},
		jumpto: function (t, e, n) {
			var i = D.current;
			i && (t = N(t), D.direction = e || i.direction[t >= i.index ? "next" : "prev"], D.router = n || "jumpto", i.loop && (t < 0 && (t = i.group.length + t % i.group.length), t %= i.group.length), i.group[t] !== p && (D.cancel(), D._start(t)))
		},
		reposition: function (t, e) {
			var n, i = D.current,
				o = i ? i.wrap : null;
			o && (n = D._getPosition(e), t && "scroll" === t.type ? (delete n.position, o.stop(!0, !0).animate(n, 200)) : (o.css(n), i.pos = L.extend({}, i.dim, n)))
		},
		update: function (e) {
			var n = e && e.originalEvent && e.originalEvent.type,
				i = !n || "orientationchange" === n;
			i && (clearTimeout(s), s = null), D.isOpen && !s && (s = setTimeout(function () {
				var t = D.current;
				t && !D.isClosing && (D.wrap.removeClass("fancybox-tmp"), (i || "load" === n || "resize" === n && t.autoResize) && D._setDimension(), "scroll" === n && t.canShrink || D.reposition(e), D.trigger("onUpdate"), s = null)
			}, i && !u ? 0 : 300))
		},
		toggle: function (t) {
			D.isOpen && (D.current.fitToView = "boolean" === L.type(t) ? t : !D.current.fitToView, u && (D.wrap.removeAttr("style").addClass("fancybox-tmp"), D.trigger("onUpdate")), D.update())
		},
		hideLoading: function () {
			c.unbind(".loading"), L("#fancybox-loading").remove()
		},
		showLoading: function () {
			var t, e;
			D.hideLoading(), t = L(D.opts.tpl.loading).click(D.cancel).appendTo("body"), c.bind("keydown.loading", function (t) {
				27 === (t.which || t.keyCode) && (t.preventDefault(), D.cancel())
			}), D.defaults.fixed || (e = D.getViewport(), t.css({
				position: "absolute",
				top: .5 * e.h + e.y,
				left: .5 * e.w + e.x
			})), D.trigger("onLoading")
		},
		getViewport: function () {
			var t = D.current && D.current.locked || !1,
				e = {
					x: i.scrollLeft(),
					y: i.scrollTop()
				};
			return t && t.length ? (e.w = t[0].clientWidth, e.h = t[0].clientHeight) : (e.w = u && o.innerWidth ? o.innerWidth : i.width(), e.h = u && o.innerHeight ? o.innerHeight : i.height()), e
		},
		unbindEvents: function () {
			D.wrap && f(D.wrap) && D.wrap.unbind(".fb"), c.unbind(".fb"), i.unbind(".fb")
		},
		bindEvents: function () {
			var e, l = D.current;
			l && (i.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (l.autoCenter && !l.locked ? " scroll.fb" : ""), D.update), (e = l.keys) && c.bind("keydown.fb", function (n) {
				var i = n.which || n.keyCode,
					t = n.target || n.srcElement;
				if (27 === i && D.coming) return !1;
				n.ctrlKey || n.altKey || n.shiftKey || n.metaKey || t && (t.type || L(t).is("[contenteditable]")) || L.each(e, function (t, e) {
					return 1 < l.group.length && e[i] !== p ? (D[t](e[i]), n.preventDefault(), !1) : -1 < L.inArray(i, e) ? (D[t](), n.preventDefault(), !1) : void 0
				})
			}), L.fn.mousewheel && l.mouseWheel && D.wrap.bind("mousewheel.fb", function (t, e, n, i) {
				for (var o, r = t.target || null, a = L(r), s = !1; a.length && !(s || a.is(".fancybox-skin") || a.is(".fancybox-wrap"));) s = (o = a[0]) && !(o.style.overflow && "hidden" === o.style.overflow) && (o.clientWidth && o.scrollWidth > o.clientWidth || o.clientHeight && o.scrollHeight > o.clientHeight), a = L(a).parent();
				0 === e || s || 1 < D.group.length && !l.canShrink && (0 < i || 0 < n ? D.prev(0 < i ? "down" : "left") : (i < 0 || n < 0) && D.next(i < 0 ? "up" : "right"), t.preventDefault())
			}))
		},
		trigger: function (n, t) {
			var e, i = t || D.coming || D.current;
			if (i) {
				if (L.isFunction(i[n]) && (e = i[n].apply(i, Array.prototype.slice.call(arguments, 1))), !1 === e) return !1;
				i.helpers && L.each(i.helpers, function (t, e) {
					e && D.helpers[t] && L.isFunction(D.helpers[t][n]) && D.helpers[t][n](L.extend(!0, {}, D.helpers[t].defaults, e), i)
				})
			}
			c.trigger(n)
		},
		isImage: function (t) {
			return h(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
		},
		isSWF: function (t) {
			return h(t) && t.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function (t) {
			var e, n, i, o, r, a = {};
			if (t = N(t), !(e = D.group[t] || null)) return !1;
			if (o = (a = L.extend(!0, {}, D.opts, e)).margin, r = a.padding, "number" === L.type(o) && (a.margin = [o, o, o, o]), "number" === L.type(r) && (a.padding = [r, r, r, r]), a.modal && L.extend(!0, a, {
					closeBtn: !1,
					closeClick: !1,
					nextClick: !1,
					arrows: !1,
					mouseWheel: !1,
					keys: null,
					helpers: {
						overlay: {
							closeClick: !1
						}
					}
				}), a.autoSize && (a.autoWidth = a.autoHeight = !0), "auto" === a.width && (a.autoWidth = !0), "auto" === a.height && (a.autoHeight = !0), a.group = D.group, a.index = t, D.coming = a, !1 !== D.trigger("beforeLoad")) {
				if (i = a.type, n = a.href, !i) return D.coming = null, !(!D.current || !D.router || "jumpto" === D.router) && (D.current.index = t, D[D.router](D.direction));
				if (D.isActive = !0, "image" !== i && "swf" !== i || (a.autoHeight = a.autoWidth = !1, a.scrolling = "visible"), "image" === i && (a.aspectRatio = !0), "iframe" === i && u && (a.scrolling = "scroll"), a.wrap = L(a.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + i + " fancybox-tmp " + a.wrapCSS).appendTo(a.parent || "body"), L.extend(a, {
						skin: L(".fancybox-skin", a.wrap),
						outer: L(".fancybox-outer", a.wrap),
						inner: L(".fancybox-inner", a.wrap)
					}), L.each(["Top", "Right", "Bottom", "Left"], function (t, e) {
						a.skin.css("padding" + e, B(a.padding[t]))
					}), D.trigger("onReady"), "inline" === i || "html" === i) {
					if (!a.content || !a.content.length) return D._error("content")
				} else if (!n) return D._error("href");
				"image" === i ? D._loadImage() : "ajax" === i ? D._loadAjax() : "iframe" === i ? D._loadIframe() : D._afterLoad()
			} else D.coming = null
		},
		_error: function (t) {
			L.extend(D.coming, {
				type: "html",
				autoWidth: !0,
				autoHeight: !0,
				minWidth: 0,
				minHeight: 0,
				scrolling: "no",
				hasError: t,
				content: D.coming.tpl.error
			}), D._afterLoad()
		},
		_loadImage: function () {
			var t = D.imgPreload = new Image;
			t.onload = function () {
				this.onload = this.onerror = null, D.coming.width = this.width / D.opts.pixelRatio, D.coming.height = this.height / D.opts.pixelRatio, D._afterLoad()
			}, t.onerror = function () {
				this.onload = this.onerror = null, D._error("image")
			}, t.src = D.coming.href, !0 !== t.complete && D.showLoading()
		},
		_loadAjax: function () {
			var n = D.coming;
			D.showLoading(), D.ajaxLoad = L.ajax(L.extend({}, n.ajax, {
				url: n.href,
				error: function (t, e) {
					D.coming && "abort" !== e ? D._error("ajax", t) : D.hideLoading()
				},
				success: function (t, e) {
					"success" === e && (n.content = t, D._afterLoad())
				}
			}))
		},
		_loadIframe: function () {
			var t = D.coming,
				e = L(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : t.iframe.scrolling).attr("src", t.href);
			L(t.wrap).bind("onReset", function () {
				try {
					L(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
				} catch (t) {}
			}), t.iframe.preload && (D.showLoading(), e.one("load", function () {
				L(this).data("ready", 1), u || L(this).bind("load.fb", D.update), L(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), D._afterLoad()
			})), t.content = e.appendTo(t.inner), t.iframe.preload || D._afterLoad()
		},
		_preloadImages: function () {
			var t, e, n = D.group,
				i = D.current,
				o = n.length,
				r = i.preload ? Math.min(i.preload, o - 1) : 0;
			for (e = 1; e <= r; e += 1) "image" === (t = n[(i.index + e) % o]).type && t.href && ((new Image).src = t.href)
		},
		_afterLoad: function () {
			var t, n, e, i, o, r, a = D.coming,
				s = D.current,
				l = "fancybox-placeholder";
			if (D.hideLoading(), a && !1 !== D.isActive) {
				if (!1 === D.trigger("afterLoad", a, s)) return a.wrap.stop(!0).trigger("onReset").remove(), void(D.coming = null);
				switch (s && (D.trigger("beforeChange", s), s.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), D.unbindEvents(), n = (t = a).content, e = a.type, i = a.scrolling, L.extend(D, {
					wrap: t.wrap,
					skin: t.skin,
					outer: t.outer,
					inner: t.inner,
					current: t,
					previous: s
				}), o = t.href, e) {
					case "inline":
					case "ajax":
					case "html":
						t.selector ? n = L("<div>").html(n).find(t.selector) : f(n) && (n.data(l) || n.data(l, L('<div class="' + l + '"></div>').insertAfter(n).hide()), n = n.show().detach(), t.wrap.bind("onReset", function () {
							L(this).find(n).length && n.hide().replaceAll(n.data(l)).data(l, !1)
						}));
						break;
					case "image":
						n = t.tpl.image.replace(/\{href\}/g, o);
						break;
					case "swf":
						n = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', r = "", L.each(t.swf, function (t, e) {
							n += '<param name="' + t + '" value="' + e + '"></param>', r += " " + t + '="' + e + '"'
						}), n += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
				}
				f(n) && n.parent().is(t.inner) || t.inner.append(n), D.trigger("beforeShow"), t.inner.css("overflow", "yes" === i ? "scroll" : "no" === i ? "hidden" : i), D._setDimension(), D.reposition(), D.isOpen = !1, D.coming = null, D.bindEvents(), D.isOpened ? s.prevMethod && D.transitions[s.prevMethod]() : L(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), D.transitions[D.isOpened ? t.nextMethod : t.openMethod](), D._preloadImages()
			}
		},
		_setDimension: function () {
			var t, e, n, i, o, r, a, s, l, c, u, d, p, f, h, v, g, m = D.getViewport(),
				y = 0,
				b = D.wrap,
				w = D.skin,
				x = D.inner,
				k = D.current,
				_ = k.width,
				T = k.height,
				S = k.minWidth,
				$ = k.minHeight,
				C = k.maxWidth,
				O = k.maxHeight,
				E = k.scrolling,
				A = k.scrollOutside ? k.scrollbarWidth : 0,
				P = k.margin,
				j = N(P[1] + P[3]),
				I = N(P[0] + P[2]);
			if (b.add(w).add(x).width("auto").height("auto").removeClass("fancybox-tmp"), o = j + (n = N(w.outerWidth(!0) - w.width())), r = I + (i = N(w.outerHeight(!0) - w.height())), a = M(_) ? (m.w - o) * N(_) / 100 : _, s = M(T) ? (m.h - r) * N(T) / 100 : T, "iframe" === k.type) {
				if (v = k.content, k.autoHeight && v && 1 === v.data("ready")) try {
					v[0].contentWindow.document.location && (x.width(a).height(9999), g = v.contents().find("body"), A && g.css("overflow-x", "hidden"), s = g.outerHeight(!0))
				} catch (t) {}
			} else(k.autoWidth || k.autoHeight) && (x.addClass("fancybox-tmp"), k.autoWidth || x.width(a), k.autoHeight || x.height(s), k.autoWidth && (a = x.width()), k.autoHeight && (s = x.height()), x.removeClass("fancybox-tmp"));
			if (_ = N(a), T = N(s), u = a / s, S = N(M(S) ? N(S, "w") - o : S), C = N(M(C) ? N(C, "w") - o : C), $ = N(M($) ? N($, "h") - r : $), l = C, c = O = N(M(O) ? N(O, "h") - r : O), k.fitToView && (C = Math.min(m.w - o, C), O = Math.min(m.h - r, O)), f = m.w - j, h = m.h - I, k.aspectRatio ? (C < _ && (T = N((_ = C) / u)), O < T && (_ = N((T = O) * u)), _ < S && (T = N((_ = S) / u)), T < $ && (_ = N((T = $) * u))) : (_ = Math.max(S, Math.min(_, C)), k.autoHeight && "iframe" !== k.type && (x.width(_), T = x.height()), T = Math.max($, Math.min(T, O))), k.fitToView)
				if (x.width(_).height(T), b.width(_ + n), d = b.width(), p = b.height(), k.aspectRatio)
					for (;
						(f < d || h < p) && S < _ && $ < T && !(19 < y++);) T = Math.max($, Math.min(O, T - 10)), (_ = N(T * u)) < S && (T = N((_ = S) / u)), C < _ && (T = N((_ = C) / u)), x.width(_).height(T), b.width(_ + n), d = b.width(), p = b.height();
				else _ = Math.max(S, Math.min(_, _ - (d - f))), T = Math.max($, Math.min(T, T - (p - h)));
			A && "auto" === E && T < s && _ + n + A < f && (_ += A), x.width(_).height(T), b.width(_ + n), d = b.width(), p = b.height(), t = (f < d || h < p) && S < _ && $ < T, e = k.aspectRatio ? _ < l && T < c && _ < a && T < s : (_ < l || T < c) && (_ < a || T < s), L.extend(k, {
				dim: {
					width: B(d),
					height: B(p)
				},
				origWidth: a,
				origHeight: s,
				canShrink: t,
				canExpand: e,
				wPadding: n,
				hPadding: i,
				wrapSpace: p - w.outerHeight(!0),
				skinSpace: w.height() - T
			}), !v && k.autoHeight && $ < T && T < O && !e && x.height("auto")
		},
		_getPosition: function (t) {
			var e = D.current,
				n = D.getViewport(),
				i = e.margin,
				o = D.wrap.width() + i[1] + i[3],
				r = D.wrap.height() + i[0] + i[2],
				a = {
					position: "absolute",
					top: i[0],
					left: i[3]
				};
			return e.autoCenter && e.fixed && !t && r <= n.h && o <= n.w ? a.position = "fixed" : e.locked || (a.top += n.y, a.left += n.x), a.top = B(Math.max(a.top, a.top + (n.h - r) * e.topRatio)), a.left = B(Math.max(a.left, a.left + (n.w - o) * e.leftRatio)), a
		},
		_afterZoomIn: function () {
			var e = D.current;
			e && (D.isOpen = D.isOpened = !0, D.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0), D.update(), (e.closeClick || e.nextClick && 1 < D.group.length) && D.inner.css("cursor", "pointer").bind("click.fb", function (t) {
				L(t.target).is("a") || L(t.target).parent().is("a") || (t.preventDefault(), D[e.closeClick ? "close" : "next"]())
			}), e.closeBtn && L(e.tpl.closeBtn).appendTo(D.skin).bind("click.fb", function (t) {
				t.preventDefault(), D.close()
			}), e.arrows && 1 < D.group.length && ((e.loop || 0 < e.index) && L(e.tpl.prev).appendTo(D.outer).bind("click.fb", D.prev), (e.loop || e.index < D.group.length - 1) && L(e.tpl.next).appendTo(D.outer).bind("click.fb", D.next)), D.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? D.opts.autoPlay && !D.player.isActive && (D.opts.autoPlay = !1, D.play(!0)) : D.play(!1))
		},
		_afterZoomOut: function (t) {
			t = t || D.current, L(".fancybox-wrap").trigger("onReset").remove(), L.extend(D, {
				group: {},
				opts: {},
				router: !1,
				current: null,
				isActive: !1,
				isOpened: !1,
				isOpen: !1,
				isClosing: !1,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			}), D.trigger("afterClose", t)
		}
	}), D.transitions = {
		getOrigPosition: function () {
			var t = D.current,
				e = t.element,
				n = t.orig,
				i = {},
				o = 50,
				r = 50,
				a = t.hPadding,
				s = t.wPadding,
				l = D.getViewport();
			return !n && t.isDom && e.is(":visible") && ((n = e.find("img:first")).length || (n = e)), f(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), r = n.outerHeight())) : (i.top = l.y + (l.h - r) * t.topRatio, i.left = l.x + (l.w - o) * t.leftRatio), ("fixed" === D.wrap.css("position") || t.locked) && (i.top -= l.y, i.left -= l.x), i = {
				top: B(i.top - a * t.topRatio),
				left: B(i.left - s * t.leftRatio),
				width: B(o + s),
				height: B(r + a)
			}
		},
		step: function (t, e) {
			var n, i, o = e.prop,
				r = D.current,
				a = r.wrapSpace,
				s = r.skinSpace;
			"width" !== o && "height" !== o || (n = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), D.isClosing && (n = 1 - n), i = t - ("width" === o ? r.wPadding : r.hPadding), D.skin[o](N("width" === o ? i : i - a * n)), D.inner[o](N("width" === o ? i : i - a * n - s * n)))
		},
		zoomIn: function () {
			var t = D.current,
				e = t.pos,
				n = t.openEffect,
				i = "elastic" === n,
				o = L.extend({
					opacity: 1
				}, e);
			delete o.position, i ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === n && (e.opacity = .1), D.wrap.css(e).animate(o, {
				duration: "none" === n ? 0 : t.openSpeed,
				easing: t.openEasing,
				step: i ? this.step : null,
				complete: D._afterZoomIn
			})
		},
		zoomOut: function () {
			var t = D.current,
				e = t.closeEffect,
				n = "elastic" === e,
				i = {
					opacity: .1
				};
			n && (i = this.getOrigPosition(), t.closeOpacity && (i.opacity = .1)), D.wrap.animate(i, {
				duration: "none" === e ? 0 : t.closeSpeed,
				easing: t.closeEasing,
				step: n ? this.step : null,
				complete: D._afterZoomOut
			})
		},
		changeIn: function () {
			var t, e = D.current,
				n = e.nextEffect,
				i = e.pos,
				o = {
					opacity: 1
				},
				r = D.direction;
			i.opacity = .1, "elastic" === n && (t = "down" === r || "up" === r ? "top" : "left", "down" === r || "right" === r ? (i[t] = B(N(i[t]) - 200), o[t] = "+=200px") : (i[t] = B(N(i[t]) + 200), o[t] = "-=200px")), "none" === n ? D._afterZoomIn() : D.wrap.css(i).animate(o, {
				duration: e.nextSpeed,
				easing: e.nextEasing,
				complete: D._afterZoomIn
			})
		},
		changeOut: function () {
			var t = D.previous,
				e = t.prevEffect,
				n = {
					opacity: .1
				},
				i = D.direction;
			"elastic" === e && (n["down" === i || "up" === i ? "top" : "left"] = ("up" === i || "left" === i ? "-" : "+") + "=200px"), t.wrap.animate(n, {
				duration: "none" === e ? 0 : t.prevSpeed,
				easing: t.prevEasing,
				complete: function () {
					L(this).trigger("onReset").remove()
				}
			})
		}
	}, D.helpers.overlay = {
		defaults: {
			closeClick: !0,
			speedOut: 200,
			showEarly: !0,
			css: {},
			locked: !u,
			fixed: !0
		},
		overlay: null,
		fixed: !1,
		el: L("html"),
		create: function (t) {
			var e;
			t = L.extend({}, this.defaults, t), this.overlay && this.close(), e = D.coming ? D.coming.parent : t.parent, this.overlay = L('<div class="fancybox-overlay"></div>').appendTo(e && e.length ? e : "body"), this.fixed = !1, t.fixed && D.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
		},
		open: function (t) {
			var e = this;
			t = L.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (i.bind("resize.overlay", L.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function (t) {
				if (L(t.target).hasClass("fancybox-overlay")) return D.isActive ? D.close() : e.close(), !1
			}), this.overlay.css(t.css).show()
		},
		close: function () {
			i.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (L(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), i.scrollTop(this.scrollV).scrollLeft(this.scrollH)), L(".fancybox-overlay").remove().hide(), L.extend(this, {
				overlay: null,
				fixed: !1
			})
		},
		update: function () {
			var t, e = "100%";
			this.overlay.width(e).height("100%"), a ? (t = Math.max(n.documentElement.offsetWidth, n.body.offsetWidth), c.width() > t && (e = c.width())) : c.width() > i.width() && (e = c.width()), this.overlay.width(e).height(c.height())
		},
		onReady: function (t, e) {
			var n = this.overlay;
			L(".fancybox-overlay").stop(!0, !0), n || this.create(t), t.locked && this.fixed && e.fixed && (e.locked = this.overlay.append(e.wrap), e.fixed = !1), !0 === t.showEarly && this.beforeShow.apply(this, arguments)
		},
		beforeShow: function (t, e) {
			e.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && L("*:not(object)").filter(function () {
				return "fixed" === L(this).css("position") && !L(this).hasClass("fancybox-overlay") && !L(this).hasClass("fancybox-wrap")
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = i.scrollTop(), this.scrollH = i.scrollLeft(), this.el.addClass("fancybox-lock"), i.scrollTop(this.scrollV).scrollLeft(this.scrollH)), this.open(t)
		},
		onUpdate: function () {
			this.fixed || this.update()
		},
		afterClose: function (t) {
			this.overlay && !D.coming && this.overlay.fadeOut(t.speedOut, L.proxy(this.close, this))
		}
	}, D.helpers.title = {
		defaults: {
			type: "float",
			position: "bottom"
		},
		beforeShow: function (t) {
			var e, n, i = D.current,
				o = i.title,
				r = t.type;
			if (L.isFunction(o) && (o = o.call(i.element, i)), h(o) && "" !== L.trim(o)) {
				switch (e = L('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + o + "</div>"), r) {
					case "inside":
						n = D.skin;
						break;
					case "outside":
						n = D.wrap;
						break;
					case "over":
						n = D.inner;
						break;
					default:
						n = D.skin, e.appendTo("body"), a && e.width(e.width()), e.wrapInner('<span class="child"></span>'), D.current.margin[2] += Math.abs(N(e.css("margin-bottom")))
				}
				e["top" === t.position ? "prependTo" : "appendTo"](n)
			}
		}
	}, L.fn.fancybox = function (r) {
		var a, s = L(this),
			l = this.selector || "",
			t = function (t) {
				var e, n, i = L(this).blur(),
					o = a;
				t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || i.is(".fancybox-wrap") || (e = r.groupAttr || "data-fancybox-group", (n = i.attr(e)) || (e = "rel", n = i.get(0)[e]), n && "" !== n && "nofollow" !== n && (o = (i = (i = l.length ? L(l) : s).filter("[" + e + '="' + n + '"]')).index(this)), r.index = o, !1 !== D.open(i, r) && t.preventDefault())
			};
		return a = (r = r || {}).index || 0, l && !1 !== r.live ? c.undelegate(l, "click.fb-start").delegate(l + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", t) : s.unbind("click.fb-start").bind("click.fb-start", t), this.filter("[data-fancybox-start=1]").trigger("click"), this
	}, c.ready(function () {
		var t, e, n, i;
		L.scrollbarWidth === p && (L.scrollbarWidth = function () {
			var t = L('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
				e = t.children(),
				n = e.innerWidth() - e.height(99).innerWidth();
			return t.remove(), n
		}), L.support.fixedPosition === p && (L.support.fixedPosition = (n = L('<div style="position:fixed;top:20px;"></div>').appendTo("body"), i = 20 === n[0].offsetTop || 15 === n[0].offsetTop, n.remove(), i)), L.extend(D.defaults, {
			scrollbarWidth: L.scrollbarWidth(),
			fixed: L.support.fixedPosition,
			parent: L("body")
		}), t = L(o).width(), r.addClass("fancybox-lock-test"), e = L(o).width(), r.removeClass("fancybox-lock-test"), L("<style type='text/css'>.fancybox-margin{margin-right:" + (e - t) + "px;}</style>").appendTo("head")
	})
}(window, document, jQuery),
function (i) {
	var o = i.fancybox;
	o.helpers.buttons = {
		defaults: {
			skipSingle: !1,
			position: "top",
			tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
		},
		list: null,
		buttons: null,
		beforeLoad: function (t, e) {
			if (t.skipSingle && e.group.length < 2) return e.helpers.buttons = !1, void(e.closeBtn = !0);
			e.margin["bottom" === t.position ? 2 : 0] += 30
		},
		onPlayStart: function () {
			this.buttons && this.buttons.play.attr("title", "Pause slideshow").addClass("btnPlayOn")
		},
		onPlayEnd: function () {
			this.buttons && this.buttons.play.attr("title", "Start slideshow").removeClass("btnPlayOn")
		},
		afterShow: function (t, e) {
			var n = this.buttons;
			n || (this.list = i(t.tpl).addClass(t.position).appendTo("body"), n = {
				prev: this.list.find(".btnPrev").click(o.prev),
				next: this.list.find(".btnNext").click(o.next),
				play: this.list.find(".btnPlay").click(o.play),
				toggle: this.list.find(".btnToggle").click(o.toggle),
				close: this.list.find(".btnClose").click(o.close)
			}), 0 < e.index || e.loop ? n.prev.removeClass("btnDisabled") : n.prev.addClass("btnDisabled"), e.loop || e.index < e.group.length - 1 ? (n.next.removeClass("btnDisabled"), n.play.removeClass("btnDisabled")) : (n.next.addClass("btnDisabled"), n.play.addClass("btnDisabled")), this.buttons = n, this.onUpdate(t, e)
		},
		onUpdate: function (t, e) {
			var n;
			this.buttons && (n = this.buttons.toggle.removeClass("btnDisabled btnToggleOn"), e.canShrink ? n.addClass("btnToggleOn") : e.canExpand || n.addClass("btnDisabled"))
		},
		beforeClose: function () {
			this.list && this.list.remove(), this.list = null, this.buttons = null
		}
	}
}(jQuery),
function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (d) {
	var e = Array.prototype.slice,
		i = Array.prototype.splice,
		s = {
			topSpacing: 0,
			bottomSpacing: 0,
			className: "is-sticky",
			wrapperClassName: "sticky-wrapper",
			center: !1,
			getWidthFrom: "",
			widthFromWrapper: !0,
			responsiveWidth: !1
		},
		p = d(window),
		f = d(document),
		h = [],
		v = p.height(),
		t = function () {
			for (var t = p.scrollTop(), e = f.height(), n = e - v, i = n < t ? n - t : 0, o = 0, r = h.length; o < r; o++) {
				var a = h[o],
					s = a.stickyWrapper.offset().top - a.topSpacing - i;
				if (a.stickyWrapper.css("height", a.stickyElement.outerHeight()), t <= s) null !== a.currentTop && (a.stickyElement.css({
					width: "",
					position: "",
					top: ""
				}), a.stickyElement.parent().removeClass(a.className), a.stickyElement.trigger("sticky-end", [a]), a.currentTop = null);
				else {
					var l, c = e - a.stickyElement.outerHeight() - a.topSpacing - a.bottomSpacing - t - i;
					if (c < 0 ? c += a.topSpacing : c = a.topSpacing, a.currentTop !== c) a.getWidthFrom ? l = d(a.getWidthFrom).width() || null : a.widthFromWrapper && (l = a.stickyWrapper.width()), null == l && (l = a.stickyElement.width()), a.stickyElement.css("width", l).css("position", "fixed").css("top", c), a.stickyElement.parent().addClass(a.className), null === a.currentTop ? a.stickyElement.trigger("sticky-start", [a]) : a.stickyElement.trigger("sticky-update", [a]), a.currentTop === a.topSpacing && a.currentTop > c || null === a.currentTop && c < a.topSpacing ? a.stickyElement.trigger("sticky-bottom-reached", [a]) : null !== a.currentTop && c === a.topSpacing && a.currentTop < c && a.stickyElement.trigger("sticky-bottom-unreached", [a]), a.currentTop = c;
					var u = a.stickyWrapper.parent();
					a.stickyElement.offset().top + a.stickyElement.outerHeight() >= u.offset().top + u.outerHeight() && a.stickyElement.offset().top <= a.topSpacing ? a.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0) : a.stickyElement.css("position", "fixed").css("top", c).css("bottom", "")
				}
			}
		},
		n = function () {
			v = p.height();
			for (var t = 0, e = h.length; t < e; t++) {
				var n = h[t],
					i = null;
				n.getWidthFrom ? n.responsiveWidth && (i = d(n.getWidthFrom).width()) : n.widthFromWrapper && (i = n.stickyWrapper.width()), null != i && n.stickyElement.css("width", i)
			}
		},
		o = {
			init: function (t) {
				var a = d.extend({}, s, t);
				return this.each(function () {
					var t = d(this),
						e = t.attr("id"),
						n = t.outerHeight(),
						i = e ? e + "-" + s.wrapperClassName : s.wrapperClassName,
						o = d("<div></div>").attr("id", i).addClass(a.wrapperClassName);
					t.wrapAll(o);
					var r = t.parent();
					a.center && r.css({
						width: t.outerWidth(),
						marginLeft: "auto",
						marginRight: "auto"
					}), "right" === t.css("float") && t.css({
						float: "none"
					}).parent().css({
						float: "right"
					}), r.css("height", n), a.stickyElement = t, a.stickyWrapper = r, a.currentTop = null, h.push(a)
				})
			},
			update: t,
			unstick: function (t) {
				return this.each(function () {
					for (var t = d(this), e = -1, n = h.length; 0 < n--;) h[n].stickyElement.get(0) === this && (i.call(h, n, 1), e = n); - 1 !== e && (t.unwrap(), t.css({
						width: "",
						position: "",
						top: "",
						float: ""
					}))
				})
			}
		};
	window.addEventListener ? (window.addEventListener("scroll", t, !1), window.addEventListener("resize", n, !1)) : window.attachEvent && (window.attachEvent("onscroll", t), window.attachEvent("onresize", n)), d.fn.sticky = function (t) {
		return o[t] ? o[t].apply(this, e.call(arguments, 1)) : "object" != typeof t && t ? void d.error("Method " + t + " does not exist on jQuery.sticky") : o.init.apply(this, arguments)
	}, d.fn.unstick = function (t) {
		return o[t] ? o[t].apply(this, e.call(arguments, 1)) : "object" != typeof t && t ? void d.error("Method " + t + " does not exist on jQuery.sticky") : o.unstick.apply(this, arguments)
	}, d(function () {
		setTimeout(t, 0)
	})
}),
function () {
	var ea, na = "Expected a function",
		ia = "__lodash_hash_undefined__",
		oa = "__lodash_placeholder__",
		ra = 128,
		aa = 9007199254740991,
		sa = NaN,
		la = 4294967295,
		ca = [
			["ary", ra],
			["bind", 1],
			["bindKey", 2],
			["curry", 8],
			["curryRight", 16],
			["flip", 512],
			["partial", 32],
			["partialRight", 64],
			["rearg", 256]
		],
		ua = "[object Arguments]",
		da = "[object Array]",
		pa = "[object Boolean]",
		fa = "[object Date]",
		ha = "[object Error]",
		va = "[object Function]",
		ga = "[object GeneratorFunction]",
		ma = "[object Map]",
		ya = "[object Number]",
		ba = "[object Object]",
		wa = "[object Promise]",
		xa = "[object RegExp]",
		ka = "[object Set]",
		_a = "[object String]",
		Ta = "[object Symbol]",
		Sa = "[object WeakMap]",
		$a = "[object ArrayBuffer]",
		Ca = "[object DataView]",
		Oa = "[object Float32Array]",
		Ea = "[object Float64Array]",
		Aa = "[object Int8Array]",
		Pa = "[object Int16Array]",
		ja = "[object Int32Array]",
		Ia = "[object Uint8Array]",
		La = "[object Uint8ClampedArray]",
		Da = "[object Uint16Array]",
		Ma = "[object Uint32Array]",
		Na = /\b__p \+= '';/g,
		Ba = /\b(__p \+=) '' \+/g,
		Ra = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
		za = /&(?:amp|lt|gt|quot|#39);/g,
		Ha = /[&<>"']/g,
		Wa = RegExp(za.source),
		qa = RegExp(Ha.source),
		Ua = /<%-([\s\S]+?)%>/g,
		Fa = /<%([\s\S]+?)%>/g,
		Va = /<%=([\s\S]+?)%>/g,
		Qa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		Ja = /^\w*$/,
		Ka = /^\./,
		Xa = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
		Za = /[\\^$.*+?()[\]{}|]/g,
		Ya = RegExp(Za.source),
		Ga = /^\s+|\s+$/g,
		ts = /^\s+/,
		es = /\s+$/,
		ns = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
		is = /\{\n\/\* \[wrapped with (.+)\] \*/,
		os = /,? & /,
		rs = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
		as = /\\(\\)?/g,
		ss = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
		ls = /\w*$/,
		cs = /^[-+]0x[0-9a-f]+$/i,
		us = /^0b[01]+$/i,
		ds = /^\[object .+?Constructor\]$/,
		ps = /^0o[0-7]+$/i,
		fs = /^(?:0|[1-9]\d*)$/,
		hs = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
		vs = /($^)/,
		gs = /['\n\r\u2028\u2029\\]/g,
		t = "\\ud800-\\udfff",
		e = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
		n = "\\u2700-\\u27bf",
		i = "a-z\\xdf-\\xf6\\xf8-\\xff",
		o = "A-Z\\xc0-\\xd6\\xd8-\\xde",
		r = "\\ufe0e\\ufe0f",
		a = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
		s = "['’]",
		l = "[" + t + "]",
		c = "[" + a + "]",
		u = "[" + e + "]",
		d = "\\d+",
		p = "[" + n + "]",
		f = "[" + i + "]",
		h = "[^" + t + a + d + n + i + o + "]",
		v = "\\ud83c[\\udffb-\\udfff]",
		g = "[^" + t + "]",
		m = "(?:\\ud83c[\\udde6-\\uddff]){2}",
		y = "[\\ud800-\\udbff][\\udc00-\\udfff]",
		b = "[" + o + "]",
		w = "\\u200d",
		x = "(?:" + f + "|" + h + ")",
		k = "(?:" + b + "|" + h + ")",
		_ = "(?:['’](?:d|ll|m|re|s|t|ve))?",
		T = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
		S = "(?:" + u + "|" + v + ")" + "?",
		$ = "[" + r + "]?",
		C = $ + S + ("(?:" + w + "(?:" + [g, m, y].join("|") + ")" + $ + S + ")*"),
		O = "(?:" + [p, m, y].join("|") + ")" + C,
		E = "(?:" + [g + u + "?", u, m, y, l].join("|") + ")",
		ms = RegExp(s, "g"),
		ys = RegExp(u, "g"),
		A = RegExp(v + "(?=" + v + ")|" + E + C, "g"),
		bs = RegExp([b + "?" + f + "+" + _ + "(?=" + [c, b, "$"].join("|") + ")", k + "+" + T + "(?=" + [c, b + x, "$"].join("|") + ")", b + "?" + x + "+" + _, b + "+" + T, "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", d, O].join("|"), "g"),
		P = RegExp("[" + w + t + e + r + "]"),
		ws = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
		xs = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
		ks = -1,
		_s = {};
	_s[Oa] = _s[Ea] = _s[Aa] = _s[Pa] = _s[ja] = _s[Ia] = _s[La] = _s[Da] = _s[Ma] = !0, _s[ua] = _s[da] = _s[$a] = _s[pa] = _s[Ca] = _s[fa] = _s[ha] = _s[va] = _s[ma] = _s[ya] = _s[ba] = _s[xa] = _s[ka] = _s[_a] = _s[Sa] = !1;
	var Ts = {};
	Ts[ua] = Ts[da] = Ts[$a] = Ts[Ca] = Ts[pa] = Ts[fa] = Ts[Oa] = Ts[Ea] = Ts[Aa] = Ts[Pa] = Ts[ja] = Ts[ma] = Ts[ya] = Ts[ba] = Ts[xa] = Ts[ka] = Ts[_a] = Ts[Ta] = Ts[Ia] = Ts[La] = Ts[Da] = Ts[Ma] = !0, Ts[ha] = Ts[va] = Ts[Sa] = !1;
	var j = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		Ss = parseFloat,
		$s = parseInt,
		I = "object" == typeof global && global && global.Object === Object && global,
		L = "object" == typeof self && self && self.Object === Object && self,
		Cs = I || L || Function("return this")(),
		D = "object" == typeof exports && exports && !exports.nodeType && exports,
		M = D && "object" == typeof module && module && !module.nodeType && module,
		Os = M && M.exports === D,
		N = Os && I.process,
		B = function () {
			try {
				return N && N.binding && N.binding("util")
			} catch (t) {}
		}(),
		Es = B && B.isArrayBuffer,
		As = B && B.isDate,
		Ps = B && B.isMap,
		js = B && B.isRegExp,
		Is = B && B.isSet,
		Ls = B && B.isTypedArray;

	function Ds(t, e) {
		return t.set(e[0], e[1]), t
	}

	function Ms(t, e) {
		return t.add(e), t
	}

	function Ns(t, e, n) {
		switch (n.length) {
			case 0:
				return t.call(e);
			case 1:
				return t.call(e, n[0]);
			case 2:
				return t.call(e, n[0], n[1]);
			case 3:
				return t.call(e, n[0], n[1], n[2])
		}
		return t.apply(e, n)
	}

	function Bs(t, e, n, i) {
		for (var o = -1, r = null == t ? 0 : t.length; ++o < r;) {
			var a = t[o];
			e(i, a, n(a), t)
		}
		return i
	}

	function Rs(t, e) {
		for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t););
		return t
	}

	function zs(t, e) {
		for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t););
		return t
	}

	function Hs(t, e) {
		for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
			if (!e(t[n], n, t)) return !1;
		return !0
	}

	function Ws(t, e) {
		for (var n = -1, i = null == t ? 0 : t.length, o = 0, r = []; ++n < i;) {
			var a = t[n];
			e(a, n, t) && (r[o++] = a)
		}
		return r
	}

	function qs(t, e) {
		return !!(null == t ? 0 : t.length) && -1 < Ys(t, e, 0)
	}

	function Us(t, e, n) {
		for (var i = -1, o = null == t ? 0 : t.length; ++i < o;)
			if (n(e, t[i])) return !0;
		return !1
	}

	function Fs(t, e) {
		for (var n = -1, i = null == t ? 0 : t.length, o = Array(i); ++n < i;) o[n] = e(t[n], n, t);
		return o
	}

	function Vs(t, e) {
		for (var n = -1, i = e.length, o = t.length; ++n < i;) t[o + n] = e[n];
		return t
	}

	function Qs(t, e, n, i) {
		var o = -1,
			r = null == t ? 0 : t.length;
		for (i && r && (n = t[++o]); ++o < r;) n = e(n, t[o], o, t);
		return n
	}

	function Js(t, e, n, i) {
		var o = null == t ? 0 : t.length;
		for (i && o && (n = t[--o]); o--;) n = e(n, t[o], o, t);
		return n
	}

	function Ks(t, e) {
		for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
			if (e(t[n], n, t)) return !0;
		return !1
	}
	var R = nl("length");

	function Xs(t, i, e) {
		var o;
		return e(t, function (t, e, n) {
			if (i(t, e, n)) return o = e, !1
		}), o
	}

	function Zs(t, e, n, i) {
		for (var o = t.length, r = n + (i ? 1 : -1); i ? r-- : ++r < o;)
			if (e(t[r], r, t)) return r;
		return -1
	}

	function Ys(t, e, n) {
		return e == e ? function (t, e, n) {
			var i = n - 1,
				o = t.length;
			for (; ++i < o;)
				if (t[i] === e) return i;
			return -1
		}(t, e, n) : Zs(t, tl, n)
	}

	function Gs(t, e, n, i) {
		for (var o = n - 1, r = t.length; ++o < r;)
			if (i(t[o], e)) return o;
		return -1
	}

	function tl(t) {
		return t != t
	}

	function el(t, e) {
		var n = null == t ? 0 : t.length;
		return n ? ol(t, e) / n : sa
	}

	function nl(e) {
		return function (t) {
			return null == t ? ea : t[e]
		}
	}

	function z(e) {
		return function (t) {
			return null == e ? ea : e[t]
		}
	}

	function il(t, i, o, r, e) {
		return e(t, function (t, e, n) {
			o = r ? (r = !1, t) : i(o, t, e, n)
		}), o
	}

	function ol(t, e) {
		for (var n, i = -1, o = t.length; ++i < o;) {
			var r = e(t[i]);
			r !== ea && (n = n === ea ? r : n + r)
		}
		return n
	}

	function rl(t, e) {
		for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
		return i
	}

	function al(e) {
		return function (t) {
			return e(t)
		}
	}

	function sl(e, t) {
		return Fs(t, function (t) {
			return e[t]
		})
	}

	function ll(t, e) {
		return t.has(e)
	}

	function cl(t, e) {
		for (var n = -1, i = t.length; ++n < i && -1 < Ys(e, t[n], 0););
		return n
	}

	function ul(t, e) {
		for (var n = t.length; n-- && -1 < Ys(e, t[n], 0););
		return n
	}
	var dl = z({
			"À": "A",
			"Á": "A",
			"Â": "A",
			"Ã": "A",
			"Ä": "A",
			"Å": "A",
			"à": "a",
			"á": "a",
			"â": "a",
			"ã": "a",
			"ä": "a",
			"å": "a",
			"Ç": "C",
			"ç": "c",
			"Ð": "D",
			"ð": "d",
			"È": "E",
			"É": "E",
			"Ê": "E",
			"Ë": "E",
			"è": "e",
			"é": "e",
			"ê": "e",
			"ë": "e",
			"Ì": "I",
			"Í": "I",
			"Î": "I",
			"Ï": "I",
			"ì": "i",
			"í": "i",
			"î": "i",
			"ï": "i",
			"Ñ": "N",
			"ñ": "n",
			"Ò": "O",
			"Ó": "O",
			"Ô": "O",
			"Õ": "O",
			"Ö": "O",
			"Ø": "O",
			"ò": "o",
			"ó": "o",
			"ô": "o",
			"õ": "o",
			"ö": "o",
			"ø": "o",
			"Ù": "U",
			"Ú": "U",
			"Û": "U",
			"Ü": "U",
			"ù": "u",
			"ú": "u",
			"û": "u",
			"ü": "u",
			"Ý": "Y",
			"ý": "y",
			"ÿ": "y",
			"Æ": "Ae",
			"æ": "ae",
			"Þ": "Th",
			"þ": "th",
			"ß": "ss",
			"Ā": "A",
			"Ă": "A",
			"Ą": "A",
			"ā": "a",
			"ă": "a",
			"ą": "a",
			"Ć": "C",
			"Ĉ": "C",
			"Ċ": "C",
			"Č": "C",
			"ć": "c",
			"ĉ": "c",
			"ċ": "c",
			"č": "c",
			"Ď": "D",
			"Đ": "D",
			"ď": "d",
			"đ": "d",
			"Ē": "E",
			"Ĕ": "E",
			"Ė": "E",
			"Ę": "E",
			"Ě": "E",
			"ē": "e",
			"ĕ": "e",
			"ė": "e",
			"ę": "e",
			"ě": "e",
			"Ĝ": "G",
			"Ğ": "G",
			"Ġ": "G",
			"Ģ": "G",
			"ĝ": "g",
			"ğ": "g",
			"ġ": "g",
			"ģ": "g",
			"Ĥ": "H",
			"Ħ": "H",
			"ĥ": "h",
			"ħ": "h",
			"Ĩ": "I",
			"Ī": "I",
			"Ĭ": "I",
			"Į": "I",
			"İ": "I",
			"ĩ": "i",
			"ī": "i",
			"ĭ": "i",
			"į": "i",
			"ı": "i",
			"Ĵ": "J",
			"ĵ": "j",
			"Ķ": "K",
			"ķ": "k",
			"ĸ": "k",
			"Ĺ": "L",
			"Ļ": "L",
			"Ľ": "L",
			"Ŀ": "L",
			"Ł": "L",
			"ĺ": "l",
			"ļ": "l",
			"ľ": "l",
			"ŀ": "l",
			"ł": "l",
			"Ń": "N",
			"Ņ": "N",
			"Ň": "N",
			"Ŋ": "N",
			"ń": "n",
			"ņ": "n",
			"ň": "n",
			"ŋ": "n",
			"Ō": "O",
			"Ŏ": "O",
			"Ő": "O",
			"ō": "o",
			"ŏ": "o",
			"ő": "o",
			"Ŕ": "R",
			"Ŗ": "R",
			"Ř": "R",
			"ŕ": "r",
			"ŗ": "r",
			"ř": "r",
			"Ś": "S",
			"Ŝ": "S",
			"Ş": "S",
			"Š": "S",
			"ś": "s",
			"ŝ": "s",
			"ş": "s",
			"š": "s",
			"Ţ": "T",
			"Ť": "T",
			"Ŧ": "T",
			"ţ": "t",
			"ť": "t",
			"ŧ": "t",
			"Ũ": "U",
			"Ū": "U",
			"Ŭ": "U",
			"Ů": "U",
			"Ű": "U",
			"Ų": "U",
			"ũ": "u",
			"ū": "u",
			"ŭ": "u",
			"ů": "u",
			"ű": "u",
			"ų": "u",
			"Ŵ": "W",
			"ŵ": "w",
			"Ŷ": "Y",
			"ŷ": "y",
			"Ÿ": "Y",
			"Ź": "Z",
			"Ż": "Z",
			"Ž": "Z",
			"ź": "z",
			"ż": "z",
			"ž": "z",
			"Ĳ": "IJ",
			"ĳ": "ij",
			"Œ": "Oe",
			"œ": "oe",
			"ŉ": "'n",
			"ſ": "s"
		}),
		pl = z({
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;"
		});

	function fl(t) {
		return "\\" + j[t]
	}

	function hl(t) {
		return P.test(t)
	}

	function vl(t) {
		var n = -1,
			i = Array(t.size);
		return t.forEach(function (t, e) {
			i[++n] = [e, t]
		}), i
	}

	function gl(e, n) {
		return function (t) {
			return e(n(t))
		}
	}

	function ml(t, e) {
		for (var n = -1, i = t.length, o = 0, r = []; ++n < i;) {
			var a = t[n];
			a !== e && a !== oa || (t[n] = oa, r[o++] = n)
		}
		return r
	}

	function yl(t) {
		var e = -1,
			n = Array(t.size);
		return t.forEach(function (t) {
			n[++e] = t
		}), n
	}

	function bl(t) {
		return hl(t) ? function (t) {
			var e = A.lastIndex = 0;
			for (; A.test(t);) ++e;
			return e
		}(t) : R(t)
	}

	function wl(t) {
		return hl(t) ? t.match(A) || [] : t.split("")
	}
	var xl = z({
		"&amp;": "&",
		"&lt;": "<",
		"&gt;": ">",
		"&quot;": '"',
		"&#39;": "'"
	});
	var kl = function t(e) {
		var n, O = (e = null == e ? Cs : kl.defaults(Cs.Object(), e, kl.pick(Cs, xs))).Array,
			i = e.Date,
			o = e.Error,
			g = e.Function,
			r = e.Math,
			T = e.Object,
			m = e.RegExp,
			u = e.String,
			E = e.TypeError,
			a = O.prototype,
			s = g.prototype,
			l = T.prototype,
			c = e["__core-js_shared__"],
			d = s.toString,
			S = l.hasOwnProperty,
			p = 0,
			f = (n = /[^.]+$/.exec(c && c.keys && c.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
			h = l.toString,
			v = d.call(T),
			y = Cs._,
			b = m("^" + d.call(S).replace(Za, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
			w = Os ? e.Buffer : ea,
			x = e.Symbol,
			k = e.Uint8Array,
			_ = w ? w.allocUnsafe : ea,
			$ = gl(T.getPrototypeOf, T),
			C = T.create,
			A = l.propertyIsEnumerable,
			P = a.splice,
			j = x ? x.isConcatSpreadable : ea,
			I = x ? x.iterator : ea,
			L = x ? x.toStringTag : ea,
			D = function () {
				try {
					var t = zn(T, "defineProperty");
					return t({}, "", {}), t
				} catch (t) {}
			}(),
			M = e.clearTimeout !== Cs.clearTimeout && e.clearTimeout,
			N = i && i.now !== Cs.Date.now && i.now,
			B = e.setTimeout !== Cs.setTimeout && e.setTimeout,
			R = r.ceil,
			z = r.floor,
			H = T.getOwnPropertySymbols,
			W = w ? w.isBuffer : ea,
			q = e.isFinite,
			U = a.join,
			F = gl(T.keys, T),
			V = r.max,
			Q = r.min,
			J = i.now,
			K = e.parseInt,
			X = r.random,
			Z = a.reverse,
			Y = zn(e, "DataView"),
			G = zn(e, "Map"),
			tt = zn(e, "Promise"),
			et = zn(e, "Set"),
			nt = zn(e, "WeakMap"),
			it = zn(T, "create"),
			ot = nt && new nt,
			rt = {},
			at = fi(Y),
			st = fi(G),
			lt = fi(tt),
			ct = fi(et),
			ut = fi(nt),
			dt = x ? x.prototype : ea,
			pt = dt ? dt.valueOf : ea,
			ft = dt ? dt.toString : ea;

		function ht(t) {
			if (Po(t) && !wo(t) && !(t instanceof yt)) {
				if (t instanceof mt) return t;
				if (S.call(t, "__wrapped__")) return hi(t)
			}
			return new mt(t)
		}
		var vt = function () {
			function n() {}
			return function (t) {
				if (!Ao(t)) return {};
				if (C) return C(t);
				n.prototype = t;
				var e = new n;
				return n.prototype = ea, e
			}
		}();

		function gt() {}

		function mt(t, e) {
			this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = ea
		}

		function yt(t) {
			this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = la, this.__views__ = []
		}

		function bt(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.clear(); ++e < n;) {
				var i = t[e];
				this.set(i[0], i[1])
			}
		}

		function wt(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.clear(); ++e < n;) {
				var i = t[e];
				this.set(i[0], i[1])
			}
		}

		function xt(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.clear(); ++e < n;) {
				var i = t[e];
				this.set(i[0], i[1])
			}
		}

		function kt(t) {
			var e = -1,
				n = null == t ? 0 : t.length;
			for (this.__data__ = new xt; ++e < n;) this.add(t[e])
		}

		function _t(t) {
			var e = this.__data__ = new wt(t);
			this.size = e.size
		}

		function Tt(t, e) {
			var n = wo(t),
				i = !n && bo(t),
				o = !n && !i && To(t),
				r = !n && !i && !o && Ro(t),
				a = n || i || o || r,
				s = a ? rl(t.length, u) : [],
				l = s.length;
			for (var c in t) !e && !S.call(t, c) || a && ("length" == c || o && ("offset" == c || "parent" == c) || r && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Qn(c, l)) || s.push(c);
			return s
		}

		function St(t) {
			var e = t.length;
			return e ? t[ke(0, e - 1)] : ea
		}

		function $t(t, e) {
			return li(on(t), Dt(e, 0, t.length))
		}

		function Ct(t) {
			return li(on(t))
		}

		function Ot(t, e, n) {
			(n === ea || go(t[e], n)) && (n !== ea || e in t) || It(t, e, n)
		}

		function Et(t, e, n) {
			var i = t[e];
			S.call(t, e) && go(i, n) && (n !== ea || e in t) || It(t, e, n)
		}

		function At(t, e) {
			for (var n = t.length; n--;)
				if (go(t[n][0], e)) return n;
			return -1
		}

		function Pt(t, i, o, r) {
			return zt(t, function (t, e, n) {
				i(r, t, o(t), n)
			}), r
		}

		function jt(t, e) {
			return t && rn(e, sr(e), t)
		}

		function It(t, e, n) {
			"__proto__" == e && D ? D(t, e, {
				configurable: !0,
				enumerable: !0,
				value: n,
				writable: !0
			}) : t[e] = n
		}

		function Lt(t, e) {
			for (var n = -1, i = e.length, o = O(i), r = null == t; ++n < i;) o[n] = r ? ea : nr(t, e[n]);
			return o
		}

		function Dt(t, e, n) {
			return t == t && (n !== ea && (t = t <= n ? t : n), e !== ea && (t = e <= t ? t : e)), t
		}

		function Mt(n, i, o, t, e, r) {
			var a, s = 1 & i,
				l = 2 & i,
				c = 4 & i;
			if (o && (a = e ? o(n, t, e, r) : o(n)), a !== ea) return a;
			if (!Ao(n)) return n;
			var u, d, p, f, h, v, g, m, y, b = wo(n);
			if (b) {
				if (m = (g = n).length, y = g.constructor(m), m && "string" == typeof g[0] && S.call(g, "index") && (y.index = g.index, y.input = g.input), a = y, !s) return on(n, a)
			} else {
				var w = qn(n),
					x = w == va || w == ga;
				if (To(n)) return Ze(n, s);
				if (w == ba || w == ua || x && !e) {
					if (a = l || x ? {} : Fn(n), !s) return l ? (v = p = n, f = (h = a) && rn(v, lr(v), h), rn(p, Wn(p), f)) : (d = jt(a, u = n), rn(u, Hn(u), d))
				} else {
					if (!Ts[w]) return e ? n : {};
					a = function (t, e, n, i) {
						var o, r, a, s, l, c, u, d, p, f = t.constructor;
						switch (e) {
							case $a:
								return Ye(t);
							case pa:
							case fa:
								return new f(+t);
							case Ca:
								return d = t, p = i ? Ye(d.buffer) : d.buffer, new d.constructor(p, d.byteOffset, d.byteLength);
							case Oa:
							case Ea:
							case Aa:
							case Pa:
							case ja:
							case Ia:
							case La:
							case Da:
							case Ma:
								return Ge(t, i);
							case ma:
								return c = t, u = n, Qs(i ? u(vl(c), 1) : vl(c), Ds, new c.constructor);
							case ya:
							case _a:
								return new f(t);
							case xa:
								return (l = new(s = t).constructor(s.source, ls.exec(s))).lastIndex = s.lastIndex, l;
							case ka:
								return r = t, a = n, Qs(i ? a(yl(r), 1) : yl(r), Ms, new r.constructor);
							case Ta:
								return o = t, pt ? T(pt.call(o)) : {}
						}
					}(n, w, Mt, s)
				}
			}
			r || (r = new _t);
			var k = r.get(n);
			if (k) return k;
			r.set(n, a);
			var _ = b ? ea : (c ? l ? In : jn : l ? lr : sr)(n);
			return Rs(_ || n, function (t, e) {
				_ && (t = n[e = t]), Et(a, e, Mt(t, i, o, e, n, r))
			}), a
		}

		function Nt(t, e, n) {
			var i = n.length;
			if (null == t) return !i;
			for (t = T(t); i--;) {
				var o = n[i],
					r = e[o],
					a = t[o];
				if (a === ea && !(o in t) || !r(a)) return !1
			}
			return !0
		}

		function Bt(t, e, n) {
			if ("function" != typeof t) throw new E(na);
			return oi(function () {
				t.apply(ea, n)
			}, e)
		}

		function Rt(t, e, n, i) {
			var o = -1,
				r = qs,
				a = !0,
				s = t.length,
				l = [],
				c = e.length;
			if (!s) return l;
			n && (e = Fs(e, al(n))), i ? (r = Us, a = !1) : 200 <= e.length && (r = ll, a = !1, e = new kt(e));
			t: for (; ++o < s;) {
				var u = t[o],
					d = null == n ? u : n(u);
				if (u = i || 0 !== u ? u : 0, a && d == d) {
					for (var p = c; p--;)
						if (e[p] === d) continue t;
					l.push(u)
				} else r(e, d, i) || l.push(u)
			}
			return l
		}
		ht.templateSettings = {
			escape: Ua,
			evaluate: Fa,
			interpolate: Va,
			variable: "",
			imports: {
				_: ht
			}
		}, (ht.prototype = gt.prototype).constructor = ht, (mt.prototype = vt(gt.prototype)).constructor = mt, (yt.prototype = vt(gt.prototype)).constructor = yt, bt.prototype.clear = function () {
			this.__data__ = it ? it(null) : {}, this.size = 0
		}, bt.prototype.delete = function (t) {
			var e = this.has(t) && delete this.__data__[t];
			return this.size -= e ? 1 : 0, e
		}, bt.prototype.get = function (t) {
			var e = this.__data__;
			if (it) {
				var n = e[t];
				return n === ia ? ea : n
			}
			return S.call(e, t) ? e[t] : ea
		}, bt.prototype.has = function (t) {
			var e = this.__data__;
			return it ? e[t] !== ea : S.call(e, t)
		}, bt.prototype.set = function (t, e) {
			var n = this.__data__;
			return this.size += this.has(t) ? 0 : 1, n[t] = it && e === ea ? ia : e, this
		}, wt.prototype.clear = function () {
			this.__data__ = [], this.size = 0
		}, wt.prototype.delete = function (t) {
			var e = this.__data__,
				n = At(e, t);
			return !(n < 0 || (n == e.length - 1 ? e.pop() : P.call(e, n, 1), --this.size, 0))
		}, wt.prototype.get = function (t) {
			var e = this.__data__,
				n = At(e, t);
			return n < 0 ? ea : e[n][1]
		}, wt.prototype.has = function (t) {
			return -1 < At(this.__data__, t)
		}, wt.prototype.set = function (t, e) {
			var n = this.__data__,
				i = At(n, t);
			return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
		}, xt.prototype.clear = function () {
			this.size = 0, this.__data__ = {
				hash: new bt,
				map: new(G || wt),
				string: new bt
			}
		}, xt.prototype.delete = function (t) {
			var e = Bn(this, t).delete(t);
			return this.size -= e ? 1 : 0, e
		}, xt.prototype.get = function (t) {
			return Bn(this, t).get(t)
		}, xt.prototype.has = function (t) {
			return Bn(this, t).has(t)
		}, xt.prototype.set = function (t, e) {
			var n = Bn(this, t),
				i = n.size;
			return n.set(t, e), this.size += n.size == i ? 0 : 1, this
		}, kt.prototype.add = kt.prototype.push = function (t) {
			return this.__data__.set(t, ia), this
		}, kt.prototype.has = function (t) {
			return this.__data__.has(t)
		}, _t.prototype.clear = function () {
			this.__data__ = new wt, this.size = 0
		}, _t.prototype.delete = function (t) {
			var e = this.__data__,
				n = e.delete(t);
			return this.size = e.size, n
		}, _t.prototype.get = function (t) {
			return this.__data__.get(t)
		}, _t.prototype.has = function (t) {
			return this.__data__.has(t)
		}, _t.prototype.set = function (t, e) {
			var n = this.__data__;
			if (n instanceof wt) {
				var i = n.__data__;
				if (!G || i.length < 199) return i.push([t, e]), this.size = ++n.size, this;
				n = this.__data__ = new xt(i)
			}
			return n.set(t, e), this.size = n.size, this
		};
		var zt = ln(Jt),
			Ht = ln(Kt, !0);

		function Wt(t, i) {
			var o = !0;
			return zt(t, function (t, e, n) {
				return o = !!i(t, e, n)
			}), o
		}

		function qt(t, e, n) {
			for (var i = -1, o = t.length; ++i < o;) {
				var r = t[i],
					a = e(r);
				if (null != a && (s === ea ? a == a && !Bo(a) : n(a, s))) var s = a,
					l = r
			}
			return l
		}

		function Ut(t, i) {
			var o = [];
			return zt(t, function (t, e, n) {
				i(t, e, n) && o.push(t)
			}), o
		}

		function Ft(t, e, n, i, o) {
			var r = -1,
				a = t.length;
			for (n || (n = Vn), o || (o = []); ++r < a;) {
				var s = t[r];
				0 < e && n(s) ? 1 < e ? Ft(s, e - 1, n, i, o) : Vs(o, s) : i || (o[o.length] = s)
			}
			return o
		}
		var Vt = cn(),
			Qt = cn(!0);

		function Jt(t, e) {
			return t && Vt(t, e, sr)
		}

		function Kt(t, e) {
			return t && Qt(t, e, sr)
		}

		function Xt(e, t) {
			return Ws(t, function (t) {
				return Co(e[t])
			})
		}

		function Zt(t, e) {
			for (var n = 0, i = (e = Qe(e, t)).length; null != t && n < i;) t = t[pi(e[n++])];
			return n && n == i ? t : ea
		}

		function Yt(t, e, n) {
			var i = e(t);
			return wo(t) ? i : Vs(i, n(t))
		}

		function Gt(t) {
			return null == t ? t === ea ? "[object Undefined]" : "[object Null]" : L && L in T(t) ? function (t) {
				var e = S.call(t, L),
					n = t[L];
				try {
					t[L] = ea;
					var i = !0
				} catch (t) {}
				var o = h.call(t);
				return i && (e ? t[L] = n : delete t[L]), o
			}(t) : (e = t, h.call(e));
			var e
		}

		function te(t, e) {
			return e < t
		}

		function ee(t, e) {
			return null != t && S.call(t, e)
		}

		function ne(t, e) {
			return null != t && e in T(t)
		}

		function ie(t, e, n) {
			for (var i = n ? Us : qs, o = t[0].length, r = t.length, a = r, s = O(r), l = 1 / 0, c = []; a--;) {
				var u = t[a];
				a && e && (u = Fs(u, al(e))), l = Q(u.length, l), s[a] = !n && (e || 120 <= o && 120 <= u.length) ? new kt(a && u) : ea
			}
			u = t[0];
			var d = -1,
				p = s[0];
			t: for (; ++d < o && c.length < l;) {
				var f = u[d],
					h = e ? e(f) : f;
				if (f = n || 0 !== f ? f : 0, !(p ? ll(p, h) : i(c, h, n))) {
					for (a = r; --a;) {
						var v = s[a];
						if (!(v ? ll(v, h) : i(t[a], h, n))) continue t
					}
					p && p.push(h), c.push(f)
				}
			}
			return c
		}

		function oe(t, e, n) {
			var i = null == (t = ni(t, e = Qe(e, t))) ? t : t[pi(Si(e))];
			return null == i ? ea : Ns(i, t, n)
		}

		function re(t) {
			return Po(t) && Gt(t) == ua
		}

		function ae(t, e, n, i, o) {
			return t === e || (null == t || null == e || !Po(t) && !Po(e) ? t != t && e != e : function (t, e, n, i, o, r) {
				var a = wo(t),
					s = wo(e),
					l = a ? da : qn(t),
					c = s ? da : qn(e),
					u = (l = l == ua ? ba : l) == ba,
					d = (c = c == ua ? ba : c) == ba,
					p = l == c;
				if (p && To(t)) {
					if (!To(e)) return !1;
					u = !(a = !0)
				}
				if (p && !u) return r || (r = new _t), a || Ro(t) ? An(t, e, n, i, o, r) : function (t, e, n, i, o, r, a) {
					switch (n) {
						case Ca:
							if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
							t = t.buffer, e = e.buffer;
						case $a:
							return !(t.byteLength != e.byteLength || !r(new k(t), new k(e)));
						case pa:
						case fa:
						case ya:
							return go(+t, +e);
						case ha:
							return t.name == e.name && t.message == e.message;
						case xa:
						case _a:
							return t == e + "";
						case ma:
							var s = vl;
						case ka:
							var l = 1 & i;
							if (s || (s = yl), t.size != e.size && !l) return !1;
							var c = a.get(t);
							if (c) return c == e;
							i |= 2, a.set(t, e);
							var u = An(s(t), s(e), i, o, r, a);
							return a.delete(t), u;
						case Ta:
							if (pt) return pt.call(t) == pt.call(e)
					}
					return !1
				}(t, e, l, n, i, o, r);
				if (!(1 & n)) {
					var f = u && S.call(t, "__wrapped__"),
						h = d && S.call(e, "__wrapped__");
					if (f || h) {
						var v = f ? t.value() : t,
							g = h ? e.value() : e;
						return r || (r = new _t), o(v, g, n, i, r)
					}
				}
				return !!p && (r || (r = new _t), function (t, e, n, i, o, r) {
					var a = 1 & n,
						s = jn(t),
						l = s.length,
						c = jn(e).length;
					if (l != c && !a) return !1;
					for (var u = l; u--;) {
						var d = s[u];
						if (!(a ? d in e : S.call(e, d))) return !1
					}
					var p = r.get(t);
					if (p && r.get(e)) return p == e;
					var f = !0;
					r.set(t, e), r.set(e, t);
					for (var h = a; ++u < l;) {
						d = s[u];
						var v = t[d],
							g = e[d];
						if (i) var m = a ? i(g, v, d, e, t, r) : i(v, g, d, t, e, r);
						if (!(m === ea ? v === g || o(v, g, n, i, r) : m)) {
							f = !1;
							break
						}
						h || (h = "constructor" == d)
					}
					if (f && !h) {
						var y = t.constructor,
							b = e.constructor;
						y != b && "constructor" in t && "constructor" in e && !("function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b) && (f = !1)
					}
					return r.delete(t), r.delete(e), f
				}(t, e, n, i, o, r))
			}(t, e, n, i, ae, o))
		}

		function se(t, e, n, i) {
			var o = n.length,
				r = o,
				a = !i;
			if (null == t) return !r;
			for (t = T(t); o--;) {
				var s = n[o];
				if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
			}
			for (; ++o < r;) {
				var l = (s = n[o])[0],
					c = t[l],
					u = s[1];
				if (a && s[2]) {
					if (c === ea && !(l in t)) return !1
				} else {
					var d = new _t;
					if (i) var p = i(c, u, l, t, e, d);
					if (!(p === ea ? ae(u, c, 3, i, d) : p)) return !1
				}
			}
			return !0
		}

		function le(t) {
			return !(!Ao(t) || (e = t, f && f in e)) && (Co(t) ? b : ds).test(fi(t));
			var e
		}

		function ce(t) {
			return "function" == typeof t ? t : null == t ? Ir : "object" == typeof t ? wo(t) ? ve(t[0], t[1]) : he(t) : Wr(t)
		}

		function ue(t) {
			if (!Yn(t)) return F(t);
			var e = [];
			for (var n in T(t)) S.call(t, n) && "constructor" != n && e.push(n);
			return e
		}

		function de(t) {
			if (!Ao(t)) return function (t) {
				var e = [];
				if (null != t)
					for (var n in T(t)) e.push(n);
				return e
			}(t);
			var e = Yn(t),
				n = [];
			for (var i in t)("constructor" != i || !e && S.call(t, i)) && n.push(i);
			return n
		}

		function pe(t, e) {
			return t < e
		}

		function fe(t, i) {
			var o = -1,
				r = ko(t) ? O(t.length) : [];
			return zt(t, function (t, e, n) {
				r[++o] = i(t, e, n)
			}), r
		}

		function he(e) {
			var n = Rn(e);
			return 1 == n.length && n[0][2] ? ti(n[0][0], n[0][1]) : function (t) {
				return t === e || se(t, e, n)
			}
		}

		function ve(n, i) {
			return Kn(n) && Gn(i) ? ti(pi(n), i) : function (t) {
				var e = nr(t, n);
				return e === ea && e === i ? ir(t, n) : ae(i, e, 3)
			}
		}

		function ge(i, o, r, a, s) {
			i !== o && Vt(o, function (t, e) {
				if (Ao(t)) s || (s = new _t),
					function (t, e, n, i, o, r, a) {
						var s = t[n],
							l = e[n],
							c = a.get(l);
						if (c) return Ot(t, n, c);
						var u = r ? r(s, l, n + "", t, e, a) : ea,
							d = u === ea;
						if (d) {
							var p = wo(l),
								f = !p && To(l),
								h = !p && !f && Ro(l);
							u = l, p || f || h ? u = wo(s) ? s : _o(s) ? on(s) : f ? Ze(l, !(d = !1)) : h ? Ge(l, !(d = !1)) : [] : Lo(l) || bo(l) ? bo(u = s) ? u = Qo(s) : (!Ao(s) || i && Co(s)) && (u = Fn(l)) : d = !1
						}
						d && (a.set(l, u), o(u, l, i, r, a), a.delete(l)), Ot(t, n, u)
					}(i, o, e, r, ge, a, s);
				else {
					var n = a ? a(i[e], t, e + "", i, o, s) : ea;
					n === ea && (n = t), Ot(i, e, n)
				}
			}, lr)
		}

		function me(t, e) {
			var n = t.length;
			if (n) return Qn(e += e < 0 ? n : 0, n) ? t[e] : ea
		}

		function ye(t, i, n) {
			var o = -1;
			return i = Fs(i.length ? i : [Ir], al(Nn())),
				function (t, e) {
					var n = t.length;
					for (t.sort(e); n--;) t[n] = t[n].value;
					return t
				}(fe(t, function (e, t, n) {
					return {
						criteria: Fs(i, function (t) {
							return t(e)
						}),
						index: ++o,
						value: e
					}
				}), function (t, e) {
					return function (t, e, n) {
						for (var i = -1, o = t.criteria, r = e.criteria, a = o.length, s = n.length; ++i < a;) {
							var l = tn(o[i], r[i]);
							if (l) {
								if (s <= i) return l;
								var c = n[i];
								return l * ("desc" == c ? -1 : 1)
							}
						}
						return t.index - e.index
					}(t, e, n)
				})
		}

		function be(t, e, n) {
			for (var i = -1, o = e.length, r = {}; ++i < o;) {
				var a = e[i],
					s = Zt(t, a);
				n(s, a) && Ce(r, Qe(a, t), s)
			}
			return r
		}

		function we(t, e, n, i) {
			var o = i ? Gs : Ys,
				r = -1,
				a = e.length,
				s = t;
			for (t === e && (e = on(e)), n && (s = Fs(t, al(n))); ++r < a;)
				for (var l = 0, c = e[r], u = n ? n(c) : c; - 1 < (l = o(s, u, l, i));) s !== t && P.call(s, l, 1), P.call(t, l, 1);
			return t
		}

		function xe(t, e) {
			for (var n = t ? e.length : 0, i = n - 1; n--;) {
				var o = e[n];
				if (n == i || o !== r) {
					var r = o;
					Qn(o) ? P.call(t, o, 1) : Re(t, o)
				}
			}
			return t
		}

		function ke(t, e) {
			return t + z(X() * (e - t + 1))
		}

		function _e(t, e) {
			var n = "";
			if (!t || e < 1 || aa < e) return n;
			for (; e % 2 && (n += t), (e = z(e / 2)) && (t += t), e;);
			return n
		}

		function Te(t, e) {
			return ri(ei(t, e, Ir), t + "")
		}

		function Se(t) {
			return St(gr(t))
		}

		function $e(t, e) {
			var n = gr(t);
			return li(n, Dt(e, 0, n.length))
		}

		function Ce(t, e, n, i) {
			if (!Ao(t)) return t;
			for (var o = -1, r = (e = Qe(e, t)).length, a = r - 1, s = t; null != s && ++o < r;) {
				var l = pi(e[o]),
					c = n;
				if (o != a) {
					var u = s[l];
					(c = i ? i(u, l, s) : ea) === ea && (c = Ao(u) ? u : Qn(e[o + 1]) ? [] : {})
				}
				Et(s, l, c), s = s[l]
			}
			return t
		}
		var Oe = ot ? function (t, e) {
				return ot.set(t, e), t
			} : Ir,
			Ee = D ? function (t, e) {
				return D(t, "toString", {
					configurable: !0,
					enumerable: !1,
					value: Ar(e),
					writable: !0
				})
			} : Ir;

		function Ae(t) {
			return li(gr(t))
		}

		function Pe(t, e, n) {
			var i = -1,
				o = t.length;
			e < 0 && (e = o < -e ? 0 : o + e), (n = o < n ? o : n) < 0 && (n += o), o = n < e ? 0 : n - e >>> 0, e >>>= 0;
			for (var r = O(o); ++i < o;) r[i] = t[i + e];
			return r
		}

		function je(t, i) {
			var o;
			return zt(t, function (t, e, n) {
				return !(o = i(t, e, n))
			}), !!o
		}

		function Ie(t, e, n) {
			var i = 0,
				o = null == t ? i : t.length;
			if ("number" == typeof e && e == e && o <= 2147483647) {
				for (; i < o;) {
					var r = i + o >>> 1,
						a = t[r];
					null !== a && !Bo(a) && (n ? a <= e : a < e) ? i = r + 1 : o = r
				}
				return o
			}
			return Le(t, e, Ir, n)
		}

		function Le(t, e, n, i) {
			e = n(e);
			for (var o = 0, r = null == t ? 0 : t.length, a = e != e, s = null === e, l = Bo(e), c = e === ea; o < r;) {
				var u = z((o + r) / 2),
					d = n(t[u]),
					p = d !== ea,
					f = null === d,
					h = d == d,
					v = Bo(d);
				if (a) var g = i || h;
				else g = c ? h && (i || p) : s ? h && p && (i || !f) : l ? h && p && !f && (i || !v) : !f && !v && (i ? d <= e : d < e);
				g ? o = u + 1 : r = u
			}
			return Q(r, 4294967294)
		}

		function De(t, e) {
			for (var n = -1, i = t.length, o = 0, r = []; ++n < i;) {
				var a = t[n],
					s = e ? e(a) : a;
				if (!n || !go(s, l)) {
					var l = s;
					r[o++] = 0 === a ? 0 : a
				}
			}
			return r
		}

		function Me(t) {
			return "number" == typeof t ? t : Bo(t) ? sa : +t
		}

		function Ne(t) {
			if ("string" == typeof t) return t;
			if (wo(t)) return Fs(t, Ne) + "";
			if (Bo(t)) return ft ? ft.call(t) : "";
			var e = t + "";
			return "0" == e && 1 / t == -1 / 0 ? "-0" : e
		}

		function Be(t, e, n) {
			var i = -1,
				o = qs,
				r = t.length,
				a = !0,
				s = [],
				l = s;
			if (n) a = !1, o = Us;
			else if (200 <= r) {
				var c = e ? null : Tn(t);
				if (c) return yl(c);
				a = !1, o = ll, l = new kt
			} else l = e ? [] : s;
			t: for (; ++i < r;) {
				var u = t[i],
					d = e ? e(u) : u;
				if (u = n || 0 !== u ? u : 0, a && d == d) {
					for (var p = l.length; p--;)
						if (l[p] === d) continue t;
					e && l.push(d), s.push(u)
				} else o(l, d, n) || (l !== s && l.push(d), s.push(u))
			}
			return s
		}

		function Re(t, e) {
			return null == (t = ni(t, e = Qe(e, t))) || delete t[pi(Si(e))]
		}

		function ze(t, e, n, i) {
			return Ce(t, e, n(Zt(t, e)), i)
		}

		function He(t, e, n, i) {
			for (var o = t.length, r = i ? o : -1;
				(i ? r-- : ++r < o) && e(t[r], r, t););
			return n ? Pe(t, i ? 0 : r, i ? r + 1 : o) : Pe(t, i ? r + 1 : 0, i ? o : r)
		}

		function We(t, e) {
			var n = t;
			return n instanceof yt && (n = n.value()), Qs(e, function (t, e) {
				return e.func.apply(e.thisArg, Vs([t], e.args))
			}, n)
		}

		function qe(t, e, n) {
			var i = t.length;
			if (i < 2) return i ? Be(t[0]) : [];
			for (var o = -1, r = O(i); ++o < i;)
				for (var a = t[o], s = -1; ++s < i;) s != o && (r[o] = Rt(r[o] || a, t[s], e, n));
			return Be(Ft(r, 1), e, n)
		}

		function Ue(t, e, n) {
			for (var i = -1, o = t.length, r = e.length, a = {}; ++i < o;) {
				var s = i < r ? e[i] : ea;
				n(a, t[i], s)
			}
			return a
		}

		function Fe(t) {
			return _o(t) ? t : []
		}

		function Ve(t) {
			return "function" == typeof t ? t : Ir
		}

		function Qe(t, e) {
			return wo(t) ? t : Kn(t, e) ? [t] : di(Jo(t))
		}
		var Je = Te;

		function Ke(t, e, n) {
			var i = t.length;
			return n = n === ea ? i : n, !e && i <= n ? t : Pe(t, e, n)
		}
		var Xe = M || function (t) {
			return Cs.clearTimeout(t)
		};

		function Ze(t, e) {
			if (e) return t.slice();
			var n = t.length,
				i = _ ? _(n) : new t.constructor(n);
			return t.copy(i), i
		}

		function Ye(t) {
			var e = new t.constructor(t.byteLength);
			return new k(e).set(new k(t)), e
		}

		function Ge(t, e) {
			var n = e ? Ye(t.buffer) : t.buffer;
			return new t.constructor(n, t.byteOffset, t.length)
		}

		function tn(t, e) {
			if (t !== e) {
				var n = t !== ea,
					i = null === t,
					o = t == t,
					r = Bo(t),
					a = e !== ea,
					s = null === e,
					l = e == e,
					c = Bo(e);
				if (!s && !c && !r && e < t || r && a && l && !s && !c || i && a && l || !n && l || !o) return 1;
				if (!i && !r && !c && t < e || c && n && o && !i && !r || s && n && o || !a && o || !l) return -1
			}
			return 0
		}

		function en(t, e, n, i) {
			for (var o = -1, r = t.length, a = n.length, s = -1, l = e.length, c = V(r - a, 0), u = O(l + c), d = !i; ++s < l;) u[s] = e[s];
			for (; ++o < a;)(d || o < r) && (u[n[o]] = t[o]);
			for (; c--;) u[s++] = t[o++];
			return u
		}

		function nn(t, e, n, i) {
			for (var o = -1, r = t.length, a = -1, s = n.length, l = -1, c = e.length, u = V(r - s, 0), d = O(u + c), p = !i; ++o < u;) d[o] = t[o];
			for (var f = o; ++l < c;) d[f + l] = e[l];
			for (; ++a < s;)(p || o < r) && (d[f + n[a]] = t[o++]);
			return d
		}

		function on(t, e) {
			var n = -1,
				i = t.length;
			for (e || (e = O(i)); ++n < i;) e[n] = t[n];
			return e
		}

		function rn(t, e, n, i) {
			var o = !n;
			n || (n = {});
			for (var r = -1, a = e.length; ++r < a;) {
				var s = e[r],
					l = i ? i(n[s], t[s], s, n, t) : ea;
				l === ea && (l = t[s]), o ? It(n, s, l) : Et(n, s, l)
			}
			return n
		}

		function an(o, r) {
			return function (t, e) {
				var n = wo(t) ? Bs : Pt,
					i = r ? r() : {};
				return n(t, o, Nn(e, 2), i)
			}
		}

		function sn(s) {
			return Te(function (t, e) {
				var n = -1,
					i = e.length,
					o = 1 < i ? e[i - 1] : ea,
					r = 2 < i ? e[2] : ea;
				for (o = 3 < s.length && "function" == typeof o ? (i--, o) : ea, r && Jn(e[0], e[1], r) && (o = i < 3 ? ea : o, i = 1), t = T(t); ++n < i;) {
					var a = e[n];
					a && s(t, a, n, o)
				}
				return t
			})
		}

		function ln(r, a) {
			return function (t, e) {
				if (null == t) return t;
				if (!ko(t)) return r(t, e);
				for (var n = t.length, i = a ? n : -1, o = T(t);
					(a ? i-- : ++i < n) && !1 !== e(o[i], i, o););
				return t
			}
		}

		function cn(l) {
			return function (t, e, n) {
				for (var i = -1, o = T(t), r = n(t), a = r.length; a--;) {
					var s = r[l ? a : ++i];
					if (!1 === e(o[s], s, o)) break
				}
				return t
			}
		}

		function un(o) {
			return function (t) {
				var e = hl(t = Jo(t)) ? wl(t) : ea,
					n = e ? e[0] : t.charAt(0),
					i = e ? Ke(e, 1).join("") : t.slice(1);
				return n[o]() + i
			}
		}

		function dn(e) {
			return function (t) {
				return Qs(Cr(br(t).replace(ms, "")), e, "")
			}
		}

		function pn(i) {
			return function () {
				var t = arguments;
				switch (t.length) {
					case 0:
						return new i;
					case 1:
						return new i(t[0]);
					case 2:
						return new i(t[0], t[1]);
					case 3:
						return new i(t[0], t[1], t[2]);
					case 4:
						return new i(t[0], t[1], t[2], t[3]);
					case 5:
						return new i(t[0], t[1], t[2], t[3], t[4]);
					case 6:
						return new i(t[0], t[1], t[2], t[3], t[4], t[5]);
					case 7:
						return new i(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
				}
				var e = vt(i.prototype),
					n = i.apply(e, t);
				return Ao(n) ? n : e
			}
		}

		function fn(a) {
			return function (t, e, n) {
				var i = T(t);
				if (!ko(t)) {
					var o = Nn(e, 3);
					t = sr(t), e = function (t) {
						return o(i[t], t, i)
					}
				}
				var r = a(t, e, n);
				return -1 < r ? i[o ? t[r] : r] : ea
			}
		}

		function hn(l) {
			return Pn(function (o) {
				var r = o.length,
					t = r,
					e = mt.prototype.thru;
				for (l && o.reverse(); t--;) {
					var n = o[t];
					if ("function" != typeof n) throw new E(na);
					if (e && !a && "wrapper" == Dn(n)) var a = new mt([], !0)
				}
				for (t = a ? t : r; ++t < r;) {
					var i = Dn(n = o[t]),
						s = "wrapper" == i ? Ln(n) : ea;
					a = s && Xn(s[0]) && 424 == s[1] && !s[4].length && 1 == s[9] ? a[Dn(s[0])].apply(a, s[3]) : 1 == n.length && Xn(n) ? a[i]() : a.thru(n)
				}
				return function () {
					var t = arguments,
						e = t[0];
					if (a && 1 == t.length && wo(e)) return a.plant(e).value();
					for (var n = 0, i = r ? o[n].apply(this, t) : e; ++n < r;) i = o[n].call(this, i);
					return i
				}
			})
		}

		function vn(c, u, d, p, f, h, v, g, m, y) {
			var b = u & ra,
				w = 1 & u,
				x = 2 & u,
				k = 24 & u,
				_ = 512 & u,
				T = x ? ea : pn(c);
			return function t() {
				for (var e = arguments.length, n = O(e), i = e; i--;) n[i] = arguments[i];
				if (k) var o = Mn(t),
					r = function (t, e) {
						for (var n = t.length, i = 0; n--;) t[n] === e && ++i;
						return i
					}(n, o);
				if (p && (n = en(n, p, f, k)), h && (n = nn(n, h, v, k)), e -= r, k && e < y) {
					var a = ml(n, o);
					return kn(c, u, vn, t.placeholder, d, n, a, g, m, y - e)
				}
				var s = w ? d : this,
					l = x ? s[c] : c;
				return e = n.length, g ? n = function (t, e) {
					for (var n = t.length, i = Q(e.length, n), o = on(t); i--;) {
						var r = e[i];
						t[i] = Qn(r, n) ? o[r] : ea
					}
					return t
				}(n, g) : _ && 1 < e && n.reverse(), b && m < e && (n.length = m), this && this !== Cs && this instanceof t && (l = T || pn(l)), l.apply(s, n)
			}
		}

		function gn(a, s) {
			return function (t, e) {
				return n = t, i = a, o = s(e), r = {}, Jt(n, function (t, e, n) {
					i(r, o(t), e, n)
				}), r;
				var n, i, o, r
			}
		}

		function mn(i, o) {
			return function (t, e) {
				var n;
				if (t === ea && e === ea) return o;
				if (t !== ea && (n = t), e !== ea) {
					if (n === ea) return e;
					"string" == typeof t || "string" == typeof e ? (t = Ne(t), e = Ne(e)) : (t = Me(t), e = Me(e)), n = i(t, e)
				}
				return n
			}
		}

		function yn(i) {
			return Pn(function (t) {
				return t = Fs(t, al(Nn())), Te(function (e) {
					var n = this;
					return i(t, function (t) {
						return Ns(t, n, e)
					})
				})
			})
		}

		function bn(t, e) {
			var n = (e = e === ea ? " " : Ne(e)).length;
			if (n < 2) return n ? _e(e, t) : e;
			var i = _e(e, R(t / bl(e)));
			return hl(e) ? Ke(wl(i), 0, t).join("") : i.slice(0, t)
		}

		function wn(i) {
			return function (t, e, n) {
				return n && "number" != typeof n && Jn(t, e, n) && (e = n = ea), t = qo(t), e === ea ? (e = t, t = 0) : e = qo(e),
					function (t, e, n, i) {
						for (var o = -1, r = V(R((e - t) / (n || 1)), 0), a = O(r); r--;) a[i ? r : ++o] = t, t += n;
						return a
					}(t, e, n = n === ea ? t < e ? 1 : -1 : qo(n), i)
			}
		}

		function xn(n) {
			return function (t, e) {
				return "string" == typeof t && "string" == typeof e || (t = Vo(t), e = Vo(e)), n(t, e)
			}
		}

		function kn(t, e, n, i, o, r, a, s, l, c) {
			var u = 8 & e;
			e |= u ? 32 : 64, 4 & (e &= ~(u ? 64 : 32)) || (e &= -4);
			var d = [t, e, o, u ? r : ea, u ? a : ea, u ? ea : r, u ? ea : a, s, l, c],
				p = n.apply(ea, d);
			return Xn(t) && ii(p, d), p.placeholder = i, ai(p, t, e)
		}

		function _n(t) {
			var i = r[t];
			return function (t, e) {
				if (t = Vo(t), e = null == e ? 0 : Q(Uo(e), 292)) {
					var n = (Jo(t) + "e").split("e");
					return +((n = (Jo(i(n[0] + "e" + (+n[1] + e))) + "e").split("e"))[0] + "e" + (+n[1] - e))
				}
				return i(t)
			}
		}
		var Tn = et && 1 / yl(new et([, -0]))[1] == 1 / 0 ? function (t) {
			return new et(t)
		} : Br;

		function Sn(a) {
			return function (t) {
				var e, n, i, o, r = qn(t);
				return r == ma ? vl(t) : r == ka ? (e = t, n = -1, i = Array(e.size), e.forEach(function (t) {
					i[++n] = [t, t]
				}), i) : Fs(a(o = t), function (t) {
					return [t, o[t]]
				})
			}
		}

		function $n(t, e, n, i, o, r, a, s) {
			var l = 2 & e;
			if (!l && "function" != typeof t) throw new E(na);
			var c = i ? i.length : 0;
			if (c || (e &= -97, i = o = ea), a = a === ea ? a : V(Uo(a), 0), s = s === ea ? s : Uo(s), c -= o ? o.length : 0, 64 & e) {
				var u = i,
					d = o;
				i = o = ea
			}
			var p, f, h, v, g, m, y, b, w, x, k, _, T, S = l ? ea : Ln(t),
				$ = [t, e, n, i, o, u, d, r, a, s];
			if (S && function (t, e) {
					var n = t[1],
						i = e[1],
						o = n | i,
						r = o < 131,
						a = i == ra && 8 == n || i == ra && 256 == n && t[7].length <= e[8] || 384 == i && e[7].length <= e[8] && 8 == n;
					if (r || a) {
						1 & i && (t[2] = e[2], o |= 1 & n ? 0 : 4);
						var s = e[3];
						if (s) {
							var l = t[3];
							t[3] = l ? en(l, s, e[4]) : s, t[4] = l ? ml(t[3], oa) : e[4]
						}(s = e[5]) && (l = t[5], t[5] = l ? nn(l, s, e[6]) : s, t[6] = l ? ml(t[5], oa) : e[6]), (s = e[7]) && (t[7] = s), i & ra && (t[8] = null == t[8] ? e[8] : Q(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = o
					}
				}($, S), t = $[0], e = $[1], n = $[2], i = $[3], o = $[4], !(s = $[9] = $[9] === ea ? l ? 0 : t.length : V($[9] - c, 0)) && 24 & e && (e &= -25), e && 1 != e) 8 == e || 16 == e ? (y = e, b = s, w = pn(m = t), C = function t() {
				for (var e = arguments.length, n = O(e), i = e, o = Mn(t); i--;) n[i] = arguments[i];
				var r = e < 3 && n[0] !== o && n[e - 1] !== o ? [] : ml(n, o);
				return (e -= r.length) < b ? kn(m, y, vn, t.placeholder, ea, n, r, ea, ea, b - e) : Ns(this && this !== Cs && this instanceof t ? w : m, this, n)
			}) : 32 != e && 33 != e || o.length ? C = vn.apply(ea, $) : (f = n, h = i, v = 1 & e, g = pn(p = t), C = function t() {
				for (var e = -1, n = arguments.length, i = -1, o = h.length, r = O(o + n), a = this && this !== Cs && this instanceof t ? g : p; ++i < o;) r[i] = h[i];
				for (; n--;) r[i++] = arguments[++e];
				return Ns(a, v ? f : this, r)
			});
			else var C = (k = n, _ = 1 & e, T = pn(x = t), function t() {
				return (this && this !== Cs && this instanceof t ? T : x).apply(_ ? k : this, arguments)
			});
			return ai((S ? Oe : ii)(C, $), t, e)
		}

		function Cn(t, e, n, i) {
			return t === ea || go(t, l[n]) && !S.call(i, n) ? e : t
		}

		function On(t, e, n, i, o, r) {
			return Ao(t) && Ao(e) && (r.set(e, t), ge(t, e, ea, On, r), r.delete(e)), t
		}

		function En(t) {
			return Lo(t) ? ea : t
		}

		function An(t, e, n, i, o, r) {
			var a = 1 & n,
				s = t.length,
				l = e.length;
			if (s != l && !(a && s < l)) return !1;
			var c = r.get(t);
			if (c && r.get(e)) return c == e;
			var u = -1,
				d = !0,
				p = 2 & n ? new kt : ea;
			for (r.set(t, e), r.set(e, t); ++u < s;) {
				var f = t[u],
					h = e[u];
				if (i) var v = a ? i(h, f, u, e, t, r) : i(f, h, u, t, e, r);
				if (v !== ea) {
					if (v) continue;
					d = !1;
					break
				}
				if (p) {
					if (!Ks(e, function (t, e) {
							if (!ll(p, e) && (f === t || o(f, t, n, i, r))) return p.push(e)
						})) {
						d = !1;
						break
					}
				} else if (f !== h && !o(f, h, n, i, r)) {
					d = !1;
					break
				}
			}
			return r.delete(t), r.delete(e), d
		}

		function Pn(t) {
			return ri(ei(t, ea, wi), t + "")
		}

		function jn(t) {
			return Yt(t, sr, Hn)
		}

		function In(t) {
			return Yt(t, lr, Wn)
		}
		var Ln = ot ? function (t) {
			return ot.get(t)
		} : Br;

		function Dn(t) {
			for (var e = t.name + "", n = rt[e], i = S.call(rt, e) ? n.length : 0; i--;) {
				var o = n[i],
					r = o.func;
				if (null == r || r == t) return o.name
			}
			return e
		}

		function Mn(t) {
			return (S.call(ht, "placeholder") ? ht : t).placeholder
		}

		function Nn() {
			var t = ht.iteratee || Lr;
			return t = t === Lr ? ce : t, arguments.length ? t(arguments[0], arguments[1]) : t
		}

		function Bn(t, e) {
			var n, i, o = t.__data__;
			return ("string" == (i = typeof (n = e)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? o["string" == typeof e ? "string" : "hash"] : o.map
		}

		function Rn(t) {
			for (var e = sr(t), n = e.length; n--;) {
				var i = e[n],
					o = t[i];
				e[n] = [i, o, Gn(o)]
			}
			return e
		}

		function zn(t, e) {
			var n, i, o = (i = e, null == (n = t) ? ea : n[i]);
			return le(o) ? o : ea
		}
		var Hn = H ? function (e) {
				return null == e ? [] : (e = T(e), Ws(H(e), function (t) {
					return A.call(e, t)
				}))
			} : Fr,
			Wn = H ? function (t) {
				for (var e = []; t;) Vs(e, Hn(t)), t = $(t);
				return e
			} : Fr,
			qn = Gt;

		function Un(t, e, n) {
			for (var i = -1, o = (e = Qe(e, t)).length, r = !1; ++i < o;) {
				var a = pi(e[i]);
				if (!(r = null != t && n(t, a))) break;
				t = t[a]
			}
			return r || ++i != o ? r : !!(o = null == t ? 0 : t.length) && Eo(o) && Qn(a, o) && (wo(t) || bo(t))
		}

		function Fn(t) {
			return "function" != typeof t.constructor || Yn(t) ? {} : vt($(t))
		}

		function Vn(t) {
			return wo(t) || bo(t) || !!(j && t && t[j])
		}

		function Qn(t, e) {
			return !!(e = null == e ? aa : e) && ("number" == typeof t || fs.test(t)) && -1 < t && t % 1 == 0 && t < e
		}

		function Jn(t, e, n) {
			if (!Ao(n)) return !1;
			var i = typeof e;
			return !!("number" == i ? ko(n) && Qn(e, n.length) : "string" == i && e in n) && go(n[e], t)
		}

		function Kn(t, e) {
			if (wo(t)) return !1;
			var n = typeof t;
			return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Bo(t)) || Ja.test(t) || !Qa.test(t) || null != e && t in T(e)
		}

		function Xn(t) {
			var e = Dn(t),
				n = ht[e];
			if ("function" != typeof n || !(e in yt.prototype)) return !1;
			if (t === n) return !0;
			var i = Ln(n);
			return !!i && t === i[0]
		}(Y && qn(new Y(new ArrayBuffer(1))) != Ca || G && qn(new G) != ma || tt && qn(tt.resolve()) != wa || et && qn(new et) != ka || nt && qn(new nt) != Sa) && (qn = function (t) {
			var e = Gt(t),
				n = e == ba ? t.constructor : ea,
				i = n ? fi(n) : "";
			if (i) switch (i) {
				case at:
					return Ca;
				case st:
					return ma;
				case lt:
					return wa;
				case ct:
					return ka;
				case ut:
					return Sa
			}
			return e
		});
		var Zn = c ? Co : Vr;

		function Yn(t) {
			var e = t && t.constructor;
			return t === ("function" == typeof e && e.prototype || l)
		}

		function Gn(t) {
			return t == t && !Ao(t)
		}

		function ti(e, n) {
			return function (t) {
				return null != t && t[e] === n && (n !== ea || e in T(t))
			}
		}

		function ei(r, a, s) {
			return a = V(a === ea ? r.length - 1 : a, 0),
				function () {
					for (var t = arguments, e = -1, n = V(t.length - a, 0), i = O(n); ++e < n;) i[e] = t[a + e];
					e = -1;
					for (var o = O(a + 1); ++e < a;) o[e] = t[e];
					return o[a] = s(i), Ns(r, this, o)
				}
		}

		function ni(t, e) {
			return e.length < 2 ? t : Zt(t, Pe(e, 0, -1))
		}
		var ii = si(Oe),
			oi = B || function (t, e) {
				return Cs.setTimeout(t, e)
			},
			ri = si(Ee);

		function ai(t, e, n) {
			var i, o, r, a = e + "";
			return ri(t, function (t, e) {
				var n = e.length;
				if (!n) return t;
				var i = n - 1;
				return e[i] = (1 < n ? "& " : "") + e[i], e = e.join(2 < n ? ", " : " "), t.replace(ns, "{\n/* [wrapped with " + e + "] */\n")
			}(a, (r = a.match(is), i = r ? r[1].split(os) : [], o = n, Rs(ca, function (t) {
				var e = "_." + t[0];
				o & t[1] && !qs(i, e) && i.push(e)
			}), i.sort())))
		}

		function si(n) {
			var i = 0,
				o = 0;
			return function () {
				var t = J(),
					e = 16 - (t - o);
				if (o = t, 0 < e) {
					if (800 <= ++i) return arguments[0]
				} else i = 0;
				return n.apply(ea, arguments)
			}
		}

		function li(t, e) {
			var n = -1,
				i = t.length,
				o = i - 1;
			for (e = e === ea ? i : e; ++n < e;) {
				var r = ke(n, o),
					a = t[r];
				t[r] = t[n], t[n] = a
			}
			return t.length = e, t
		}
		var ci, ui, di = (ui = (ci = co(function (t) {
			var o = [];
			return Ka.test(t) && o.push(""), t.replace(Xa, function (t, e, n, i) {
				o.push(n ? i.replace(as, "$1") : e || t)
			}), o
		}, function (t) {
			return 500 === ui.size && ui.clear(), t
		})).cache, ci);

		function pi(t) {
			if ("string" == typeof t || Bo(t)) return t;
			var e = t + "";
			return "0" == e && 1 / t == -1 / 0 ? "-0" : e
		}

		function fi(t) {
			if (null != t) {
				try {
					return d.call(t)
				} catch (t) {}
				try {
					return t + ""
				} catch (t) {}
			}
			return ""
		}

		function hi(t) {
			if (t instanceof yt) return t.clone();
			var e = new mt(t.__wrapped__, t.__chain__);
			return e.__actions__ = on(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
		}
		var vi = Te(function (t, e) {
				return _o(t) ? Rt(t, Ft(e, 1, _o, !0)) : []
			}),
			gi = Te(function (t, e) {
				var n = Si(e);
				return _o(n) && (n = ea), _o(t) ? Rt(t, Ft(e, 1, _o, !0), Nn(n, 2)) : []
			}),
			mi = Te(function (t, e) {
				var n = Si(e);
				return _o(n) && (n = ea), _o(t) ? Rt(t, Ft(e, 1, _o, !0), ea, n) : []
			});

		function yi(t, e, n) {
			var i = null == t ? 0 : t.length;
			if (!i) return -1;
			var o = null == n ? 0 : Uo(n);
			return o < 0 && (o = V(i + o, 0)), Zs(t, Nn(e, 3), o)
		}

		function bi(t, e, n) {
			var i = null == t ? 0 : t.length;
			if (!i) return -1;
			var o = i - 1;
			return n !== ea && (o = Uo(n), o = n < 0 ? V(i + o, 0) : Q(o, i - 1)), Zs(t, Nn(e, 3), o, !0)
		}

		function wi(t) {
			return null != t && t.length ? Ft(t, 1) : []
		}

		function xi(t) {
			return t && t.length ? t[0] : ea
		}
		var ki = Te(function (t) {
				var e = Fs(t, Fe);
				return e.length && e[0] === t[0] ? ie(e) : []
			}),
			_i = Te(function (t) {
				var e = Si(t),
					n = Fs(t, Fe);
				return e === Si(n) ? e = ea : n.pop(), n.length && n[0] === t[0] ? ie(n, Nn(e, 2)) : []
			}),
			Ti = Te(function (t) {
				var e = Si(t),
					n = Fs(t, Fe);
				return (e = "function" == typeof e ? e : ea) && n.pop(), n.length && n[0] === t[0] ? ie(n, ea, e) : []
			});

		function Si(t) {
			var e = null == t ? 0 : t.length;
			return e ? t[e - 1] : ea
		}
		var $i = Te(Ci);

		function Ci(t, e) {
			return t && t.length && e && e.length ? we(t, e) : t
		}
		var Oi = Pn(function (t, e) {
			var n = null == t ? 0 : t.length,
				i = Lt(t, e);
			return xe(t, Fs(e, function (t) {
				return Qn(t, n) ? +t : t
			}).sort(tn)), i
		});

		function Ei(t) {
			return null == t ? t : Z.call(t)
		}
		var Ai = Te(function (t) {
				return Be(Ft(t, 1, _o, !0))
			}),
			Pi = Te(function (t) {
				var e = Si(t);
				return _o(e) && (e = ea), Be(Ft(t, 1, _o, !0), Nn(e, 2))
			}),
			ji = Te(function (t) {
				var e = Si(t);
				return e = "function" == typeof e ? e : ea, Be(Ft(t, 1, _o, !0), ea, e)
			});

		function Ii(e) {
			if (!e || !e.length) return [];
			var n = 0;
			return e = Ws(e, function (t) {
				if (_o(t)) return n = V(t.length, n), !0
			}), rl(n, function (t) {
				return Fs(e, nl(t))
			})
		}

		function Li(t, e) {
			if (!t || !t.length) return [];
			var n = Ii(t);
			return null == e ? n : Fs(n, function (t) {
				return Ns(e, ea, t)
			})
		}
		var Di = Te(function (t, e) {
				return _o(t) ? Rt(t, e) : []
			}),
			Mi = Te(function (t) {
				return qe(Ws(t, _o))
			}),
			Ni = Te(function (t) {
				var e = Si(t);
				return _o(e) && (e = ea), qe(Ws(t, _o), Nn(e, 2))
			}),
			Bi = Te(function (t) {
				var e = Si(t);
				return e = "function" == typeof e ? e : ea, qe(Ws(t, _o), ea, e)
			}),
			Ri = Te(Ii);
		var zi = Te(function (t) {
			var e = t.length,
				n = 1 < e ? t[e - 1] : ea;
			return Li(t, n = "function" == typeof n ? (t.pop(), n) : ea)
		});

		function Hi(t) {
			var e = ht(t);
			return e.__chain__ = !0, e
		}

		function Wi(t, e) {
			return e(t)
		}
		var qi = Pn(function (e) {
			var n = e.length,
				t = n ? e[0] : 0,
				i = this.__wrapped__,
				o = function (t) {
					return Lt(t, e)
				};
			return !(1 < n || this.__actions__.length) && i instanceof yt && Qn(t) ? ((i = i.slice(t, +t + (n ? 1 : 0))).__actions__.push({
				func: Wi,
				args: [o],
				thisArg: ea
			}), new mt(i, this.__chain__).thru(function (t) {
				return n && !t.length && t.push(ea), t
			})) : this.thru(o)
		});
		var Ui = an(function (t, e, n) {
			S.call(t, n) ? ++t[n] : It(t, n, 1)
		});
		var Fi = fn(yi),
			Vi = fn(bi);

		function Qi(t, e) {
			return (wo(t) ? Rs : zt)(t, Nn(e, 3))
		}

		function Ji(t, e) {
			return (wo(t) ? zs : Ht)(t, Nn(e, 3))
		}
		var Ki = an(function (t, e, n) {
			S.call(t, n) ? t[n].push(e) : It(t, n, [e])
		});
		var Xi = Te(function (t, e, n) {
				var i = -1,
					o = "function" == typeof e,
					r = ko(t) ? O(t.length) : [];
				return zt(t, function (t) {
					r[++i] = o ? Ns(e, t, n) : oe(t, e, n)
				}), r
			}),
			Zi = an(function (t, e, n) {
				It(t, n, e)
			});

		function Yi(t, e) {
			return (wo(t) ? Fs : fe)(t, Nn(e, 3))
		}
		var Gi = an(function (t, e, n) {
			t[n ? 0 : 1].push(e)
		}, function () {
			return [
				[],
				[]
			]
		});
		var to = Te(function (t, e) {
				if (null == t) return [];
				var n = e.length;
				return 1 < n && Jn(t, e[0], e[1]) ? e = [] : 2 < n && Jn(e[0], e[1], e[2]) && (e = [e[0]]), ye(t, Ft(e, 1), [])
			}),
			eo = N || function () {
				return Cs.Date.now()
			};

		function no(t, e, n) {
			return e = n ? ea : e, e = t && null == e ? t.length : e, $n(t, ra, ea, ea, ea, ea, e)
		}

		function io(t, e) {
			var n;
			if ("function" != typeof e) throw new E(na);
			return t = Uo(t),
				function () {
					return 0 < --t && (n = e.apply(this, arguments)), t <= 1 && (e = ea), n
				}
		}
		var oo = Te(function (t, e, n) {
				var i = 1;
				if (n.length) {
					var o = ml(n, Mn(oo));
					i |= 32
				}
				return $n(t, i, e, n, o)
			}),
			ro = Te(function (t, e, n) {
				var i = 3;
				if (n.length) {
					var o = ml(n, Mn(ro));
					i |= 32
				}
				return $n(e, i, t, n, o)
			});

		function ao(i, o, t) {
			var r, a, s, l, c, u, d = 0,
				p = !1,
				f = !1,
				e = !0;
			if ("function" != typeof i) throw new E(na);

			function h(t) {
				var e = r,
					n = a;
				return r = a = ea, d = t, l = i.apply(n, e)
			}

			function v(t) {
				var e = t - u;
				return u === ea || o <= e || e < 0 || f && s <= t - d
			}

			function g() {
				var t, e, n = eo();
				if (v(n)) return m(n);
				c = oi(g, (e = o - ((t = n) - u), f ? Q(e, s - (t - d)) : e))
			}

			function m(t) {
				return c = ea, e && r ? h(t) : (r = a = ea, l)
			}

			function n() {
				var t, e = eo(),
					n = v(e);
				if (r = arguments, a = this, u = e, n) {
					if (c === ea) return d = t = u, c = oi(g, o), p ? h(t) : l;
					if (f) return c = oi(g, o), h(u)
				}
				return c === ea && (c = oi(g, o)), l
			}
			return o = Vo(o) || 0, Ao(t) && (p = !!t.leading, s = (f = "maxWait" in t) ? V(Vo(t.maxWait) || 0, o) : s, e = "trailing" in t ? !!t.trailing : e), n.cancel = function () {
				c !== ea && Xe(c), d = 0, r = u = a = c = ea
			}, n.flush = function () {
				return c === ea ? l : m(eo())
			}, n
		}
		var so = Te(function (t, e) {
				return Bt(t, 1, e)
			}),
			lo = Te(function (t, e, n) {
				return Bt(t, Vo(e) || 0, n)
			});

		function co(o, r) {
			if ("function" != typeof o || null != r && "function" != typeof r) throw new E(na);
			var a = function () {
				var t = arguments,
					e = r ? r.apply(this, t) : t[0],
					n = a.cache;
				if (n.has(e)) return n.get(e);
				var i = o.apply(this, t);
				return a.cache = n.set(e, i) || n, i
			};
			return a.cache = new(co.Cache || xt), a
		}

		function uo(e) {
			if ("function" != typeof e) throw new E(na);
			return function () {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		co.Cache = xt;
		var po = Je(function (i, o) {
				var r = (o = 1 == o.length && wo(o[0]) ? Fs(o[0], al(Nn())) : Fs(Ft(o, 1), al(Nn()))).length;
				return Te(function (t) {
					for (var e = -1, n = Q(t.length, r); ++e < n;) t[e] = o[e].call(this, t[e]);
					return Ns(i, this, t)
				})
			}),
			fo = Te(function (t, e) {
				var n = ml(e, Mn(fo));
				return $n(t, 32, ea, e, n)
			}),
			ho = Te(function (t, e) {
				var n = ml(e, Mn(ho));
				return $n(t, 64, ea, e, n)
			}),
			vo = Pn(function (t, e) {
				return $n(t, 256, ea, ea, ea, e)
			});

		function go(t, e) {
			return t === e || t != t && e != e
		}
		var mo = xn(te),
			yo = xn(function (t, e) {
				return e <= t
			}),
			bo = re(function () {
				return arguments
			}()) ? re : function (t) {
				return Po(t) && S.call(t, "callee") && !A.call(t, "callee")
			},
			wo = O.isArray,
			xo = Es ? al(Es) : function (t) {
				return Po(t) && Gt(t) == $a
			};

		function ko(t) {
			return null != t && Eo(t.length) && !Co(t)
		}

		function _o(t) {
			return Po(t) && ko(t)
		}
		var To = W || Vr,
			So = As ? al(As) : function (t) {
				return Po(t) && Gt(t) == fa
			};

		function $o(t) {
			if (!Po(t)) return !1;
			var e = Gt(t);
			return e == ha || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !Lo(t)
		}

		function Co(t) {
			if (!Ao(t)) return !1;
			var e = Gt(t);
			return e == va || e == ga || "[object AsyncFunction]" == e || "[object Proxy]" == e
		}

		function Oo(t) {
			return "number" == typeof t && t == Uo(t)
		}

		function Eo(t) {
			return "number" == typeof t && -1 < t && t % 1 == 0 && t <= aa
		}

		function Ao(t) {
			var e = typeof t;
			return null != t && ("object" == e || "function" == e)
		}

		function Po(t) {
			return null != t && "object" == typeof t
		}
		var jo = Ps ? al(Ps) : function (t) {
			return Po(t) && qn(t) == ma
		};

		function Io(t) {
			return "number" == typeof t || Po(t) && Gt(t) == ya
		}

		function Lo(t) {
			if (!Po(t) || Gt(t) != ba) return !1;
			var e = $(t);
			if (null === e) return !0;
			var n = S.call(e, "constructor") && e.constructor;
			return "function" == typeof n && n instanceof n && d.call(n) == v
		}
		var Do = js ? al(js) : function (t) {
			return Po(t) && Gt(t) == xa
		};
		var Mo = Is ? al(Is) : function (t) {
			return Po(t) && qn(t) == ka
		};

		function No(t) {
			return "string" == typeof t || !wo(t) && Po(t) && Gt(t) == _a
		}

		function Bo(t) {
			return "symbol" == typeof t || Po(t) && Gt(t) == Ta
		}
		var Ro = Ls ? al(Ls) : function (t) {
			return Po(t) && Eo(t.length) && !!_s[Gt(t)]
		};
		var zo = xn(pe),
			Ho = xn(function (t, e) {
				return t <= e
			});

		function Wo(t) {
			if (!t) return [];
			if (ko(t)) return No(t) ? wl(t) : on(t);
			if (I && t[I]) return function (t) {
				for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
				return n
			}(t[I]());
			var e = qn(t);
			return (e == ma ? vl : e == ka ? yl : gr)(t)
		}

		function qo(t) {
			return t ? (t = Vo(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
		}

		function Uo(t) {
			var e = qo(t),
				n = e % 1;
			return e == e ? n ? e - n : e : 0
		}

		function Fo(t) {
			return t ? Dt(Uo(t), 0, la) : 0
		}

		function Vo(t) {
			if ("number" == typeof t) return t;
			if (Bo(t)) return sa;
			if (Ao(t)) {
				var e = "function" == typeof t.valueOf ? t.valueOf() : t;
				t = Ao(e) ? e + "" : e
			}
			if ("string" != typeof t) return 0 === t ? t : +t;
			t = t.replace(Ga, "");
			var n = us.test(t);
			return n || ps.test(t) ? $s(t.slice(2), n ? 2 : 8) : cs.test(t) ? sa : +t
		}

		function Qo(t) {
			return rn(t, lr(t))
		}

		function Jo(t) {
			return null == t ? "" : Ne(t)
		}
		var Ko = sn(function (t, e) {
				if (Yn(e) || ko(e)) rn(e, sr(e), t);
				else
					for (var n in e) S.call(e, n) && Et(t, n, e[n])
			}),
			Xo = sn(function (t, e) {
				rn(e, lr(e), t)
			}),
			Zo = sn(function (t, e, n, i) {
				rn(e, lr(e), t, i)
			}),
			Yo = sn(function (t, e, n, i) {
				rn(e, sr(e), t, i)
			}),
			Go = Pn(Lt);
		var tr = Te(function (t) {
				return t.push(ea, Cn), Ns(Zo, ea, t)
			}),
			er = Te(function (t) {
				return t.push(ea, On), Ns(ur, ea, t)
			});

		function nr(t, e, n) {
			var i = null == t ? ea : Zt(t, e);
			return i === ea ? n : i
		}

		function ir(t, e) {
			return null != t && Un(t, e, ne)
		}
		var or = gn(function (t, e, n) {
				t[e] = n
			}, Ar(Ir)),
			rr = gn(function (t, e, n) {
				S.call(t, e) ? t[e].push(n) : t[e] = [n]
			}, Nn),
			ar = Te(oe);

		function sr(t) {
			return ko(t) ? Tt(t) : ue(t)
		}

		function lr(t) {
			return ko(t) ? Tt(t, !0) : de(t)
		}
		var cr = sn(function (t, e, n) {
				ge(t, e, n)
			}),
			ur = sn(function (t, e, n, i) {
				ge(t, e, n, i)
			}),
			dr = Pn(function (e, t) {
				var n = {};
				if (null == e) return n;
				var i = !1;
				t = Fs(t, function (t) {
					return t = Qe(t, e), i || (i = 1 < t.length), t
				}), rn(e, In(e), n), i && (n = Mt(n, 7, En));
				for (var o = t.length; o--;) Re(n, t[o]);
				return n
			});
		var pr = Pn(function (t, e) {
			return null == t ? {} : be(n = t, e, function (t, e) {
				return ir(n, e)
			});
			var n
		});

		function fr(t, n) {
			if (null == t) return {};
			var e = Fs(In(t), function (t) {
				return [t]
			});
			return n = Nn(n), be(t, e, function (t, e) {
				return n(t, e[0])
			})
		}
		var hr = Sn(sr),
			vr = Sn(lr);

		function gr(t) {
			return null == t ? [] : sl(t, sr(t))
		}
		var mr = dn(function (t, e, n) {
			return e = e.toLowerCase(), t + (n ? yr(e) : e)
		});

		function yr(t) {
			return $r(Jo(t).toLowerCase())
		}

		function br(t) {
			return (t = Jo(t)) && t.replace(hs, dl).replace(ys, "")
		}
		var wr = dn(function (t, e, n) {
				return t + (n ? "-" : "") + e.toLowerCase()
			}),
			xr = dn(function (t, e, n) {
				return t + (n ? " " : "") + e.toLowerCase()
			}),
			kr = un("toLowerCase");
		var _r = dn(function (t, e, n) {
			return t + (n ? "_" : "") + e.toLowerCase()
		});
		var Tr = dn(function (t, e, n) {
			return t + (n ? " " : "") + $r(e)
		});
		var Sr = dn(function (t, e, n) {
				return t + (n ? " " : "") + e.toUpperCase()
			}),
			$r = un("toUpperCase");

		function Cr(t, e, n) {
			return t = Jo(t), (e = n ? ea : e) === ea ? (i = t, ws.test(i) ? t.match(bs) || [] : t.match(rs) || []) : t.match(e) || [];
			var i
		}
		var Or = Te(function (t, e) {
				try {
					return Ns(t, ea, e)
				} catch (t) {
					return $o(t) ? t : new o(t)
				}
			}),
			Er = Pn(function (e, t) {
				return Rs(t, function (t) {
					t = pi(t), It(e, t, oo(e[t], e))
				}), e
			});

		function Ar(t) {
			return function () {
				return t
			}
		}
		var Pr = hn(),
			jr = hn(!0);

		function Ir(t) {
			return t
		}

		function Lr(t) {
			return ce("function" == typeof t ? t : Mt(t, 1))
		}
		var Dr = Te(function (e, n) {
				return function (t) {
					return oe(t, e, n)
				}
			}),
			Mr = Te(function (e, n) {
				return function (t) {
					return oe(e, t, n)
				}
			});

		function Nr(i, e, t) {
			var n = sr(e),
				o = Xt(e, n);
			null != t || Ao(e) && (o.length || !n.length) || (t = e, e = i, i = this, o = Xt(e, sr(e)));
			var r = !(Ao(t) && "chain" in t && !t.chain),
				a = Co(i);
			return Rs(o, function (t) {
				var n = e[t];
				i[t] = n, a && (i.prototype[t] = function () {
					var t = this.__chain__;
					if (r || t) {
						var e = i(this.__wrapped__);
						return (e.__actions__ = on(this.__actions__)).push({
							func: n,
							args: arguments,
							thisArg: i
						}), e.__chain__ = t, e
					}
					return n.apply(i, Vs([this.value()], arguments))
				})
			}), i
		}

		function Br() {}
		var Rr = yn(Fs),
			zr = yn(Hs),
			Hr = yn(Ks);

		function Wr(t) {
			return Kn(t) ? nl(pi(t)) : (e = t, function (t) {
				return Zt(t, e)
			});
			var e
		}
		var qr = wn(),
			Ur = wn(!0);

		function Fr() {
			return []
		}

		function Vr() {
			return !1
		}
		var Qr = mn(function (t, e) {
				return t + e
			}, 0),
			Jr = _n("ceil"),
			Kr = mn(function (t, e) {
				return t / e
			}, 1),
			Xr = _n("floor");
		var Zr, Yr = mn(function (t, e) {
				return t * e
			}, 1),
			Gr = _n("round"),
			ta = mn(function (t, e) {
				return t - e
			}, 0);
		return ht.after = function (t, e) {
			if ("function" != typeof e) throw new E(na);
			return t = Uo(t),
				function () {
					if (--t < 1) return e.apply(this, arguments)
				}
		}, ht.ary = no, ht.assign = Ko, ht.assignIn = Xo, ht.assignInWith = Zo, ht.assignWith = Yo, ht.at = Go, ht.before = io, ht.bind = oo, ht.bindAll = Er, ht.bindKey = ro, ht.castArray = function () {
			if (!arguments.length) return [];
			var t = arguments[0];
			return wo(t) ? t : [t]
		}, ht.chain = Hi, ht.chunk = function (t, e, n) {
			e = (n ? Jn(t, e, n) : e === ea) ? 1 : V(Uo(e), 0);
			var i = null == t ? 0 : t.length;
			if (!i || e < 1) return [];
			for (var o = 0, r = 0, a = O(R(i / e)); o < i;) a[r++] = Pe(t, o, o += e);
			return a
		}, ht.compact = function (t) {
			for (var e = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++e < n;) {
				var r = t[e];
				r && (o[i++] = r)
			}
			return o
		}, ht.concat = function () {
			var t = arguments.length;
			if (!t) return [];
			for (var e = O(t - 1), n = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
			return Vs(wo(n) ? on(n) : [n], Ft(e, 1))
		}, ht.cond = function (i) {
			var o = null == i ? 0 : i.length,
				e = Nn();
			return i = o ? Fs(i, function (t) {
				if ("function" != typeof t[1]) throw new E(na);
				return [e(t[0]), t[1]]
			}) : [], Te(function (t) {
				for (var e = -1; ++e < o;) {
					var n = i[e];
					if (Ns(n[0], this, t)) return Ns(n[1], this, t)
				}
			})
		}, ht.conforms = function (t) {
			return e = Mt(t, 1), n = sr(e),
				function (t) {
					return Nt(t, e, n)
				};
			var e, n
		}, ht.constant = Ar, ht.countBy = Ui, ht.create = function (t, e) {
			var n = vt(t);
			return null == e ? n : jt(n, e)
		}, ht.curry = function t(e, n, i) {
			var o = $n(e, 8, ea, ea, ea, ea, ea, n = i ? ea : n);
			return o.placeholder = t.placeholder, o
		}, ht.curryRight = function t(e, n, i) {
			var o = $n(e, 16, ea, ea, ea, ea, ea, n = i ? ea : n);
			return o.placeholder = t.placeholder, o
		}, ht.debounce = ao, ht.defaults = tr, ht.defaultsDeep = er, ht.defer = so, ht.delay = lo, ht.difference = vi, ht.differenceBy = gi, ht.differenceWith = mi, ht.drop = function (t, e, n) {
			var i = null == t ? 0 : t.length;
			return i ? Pe(t, (e = n || e === ea ? 1 : Uo(e)) < 0 ? 0 : e, i) : []
		}, ht.dropRight = function (t, e, n) {
			var i = null == t ? 0 : t.length;
			return i ? Pe(t, 0, (e = i - (e = n || e === ea ? 1 : Uo(e))) < 0 ? 0 : e) : []
		}, ht.dropRightWhile = function (t, e) {
			return t && t.length ? He(t, Nn(e, 3), !0, !0) : []
		}, ht.dropWhile = function (t, e) {
			return t && t.length ? He(t, Nn(e, 3), !0) : []
		}, ht.fill = function (t, e, n, i) {
			var o = null == t ? 0 : t.length;
			return o ? (n && "number" != typeof n && Jn(t, e, n) && (n = 0, i = o), function (t, e, n, i) {
				var o = t.length;
				for ((n = Uo(n)) < 0 && (n = o < -n ? 0 : o + n), (i = i === ea || o < i ? o : Uo(i)) < 0 && (i += o), i = i < n ? 0 : Fo(i); n < i;) t[n++] = e;
				return t
			}(t, e, n, i)) : []
		}, ht.filter = function (t, e) {
			return (wo(t) ? Ws : Ut)(t, Nn(e, 3))
		}, ht.flatMap = function (t, e) {
			return Ft(Yi(t, e), 1)
		}, ht.flatMapDeep = function (t, e) {
			return Ft(Yi(t, e), 1 / 0)
		}, ht.flatMapDepth = function (t, e, n) {
			return n = n === ea ? 1 : Uo(n), Ft(Yi(t, e), n)
		}, ht.flatten = wi, ht.flattenDeep = function (t) {
			return null != t && t.length ? Ft(t, 1 / 0) : []
		}, ht.flattenDepth = function (t, e) {
			return null != t && t.length ? Ft(t, e = e === ea ? 1 : Uo(e)) : []
		}, ht.flip = function (t) {
			return $n(t, 512)
		}, ht.flow = Pr, ht.flowRight = jr, ht.fromPairs = function (t) {
			for (var e = -1, n = null == t ? 0 : t.length, i = {}; ++e < n;) {
				var o = t[e];
				i[o[0]] = o[1]
			}
			return i
		}, ht.functions = function (t) {
			return null == t ? [] : Xt(t, sr(t))
		}, ht.functionsIn = function (t) {
			return null == t ? [] : Xt(t, lr(t))
		}, ht.groupBy = Ki, ht.initial = function (t) {
			return null != t && t.length ? Pe(t, 0, -1) : []
		}, ht.intersection = ki, ht.intersectionBy = _i, ht.intersectionWith = Ti, ht.invert = or, ht.invertBy = rr, ht.invokeMap = Xi, ht.iteratee = Lr, ht.keyBy = Zi, ht.keys = sr, ht.keysIn = lr, ht.map = Yi, ht.mapKeys = function (t, i) {
			var o = {};
			return i = Nn(i, 3), Jt(t, function (t, e, n) {
				It(o, i(t, e, n), t)
			}), o
		}, ht.mapValues = function (t, i) {
			var o = {};
			return i = Nn(i, 3), Jt(t, function (t, e, n) {
				It(o, e, i(t, e, n))
			}), o
		}, ht.matches = function (t) {
			return he(Mt(t, 1))
		}, ht.matchesProperty = function (t, e) {
			return ve(t, Mt(e, 1))
		}, ht.memoize = co, ht.merge = cr, ht.mergeWith = ur, ht.method = Dr, ht.methodOf = Mr, ht.mixin = Nr, ht.negate = uo, ht.nthArg = function (e) {
			return e = Uo(e), Te(function (t) {
				return me(t, e)
			})
		}, ht.omit = dr, ht.omitBy = function (t, e) {
			return fr(t, uo(Nn(e)))
		}, ht.once = function (t) {
			return io(2, t)
		}, ht.orderBy = function (t, e, n, i) {
			return null == t ? [] : (wo(e) || (e = null == e ? [] : [e]), wo(n = i ? ea : n) || (n = null == n ? [] : [n]), ye(t, e, n))
		}, ht.over = Rr, ht.overArgs = po, ht.overEvery = zr, ht.overSome = Hr, ht.partial = fo, ht.partialRight = ho, ht.partition = Gi, ht.pick = pr, ht.pickBy = fr, ht.property = Wr, ht.propertyOf = function (e) {
			return function (t) {
				return null == e ? ea : Zt(e, t)
			}
		}, ht.pull = $i, ht.pullAll = Ci, ht.pullAllBy = function (t, e, n) {
			return t && t.length && e && e.length ? we(t, e, Nn(n, 2)) : t
		}, ht.pullAllWith = function (t, e, n) {
			return t && t.length && e && e.length ? we(t, e, ea, n) : t
		}, ht.pullAt = Oi, ht.range = qr, ht.rangeRight = Ur, ht.rearg = vo, ht.reject = function (t, e) {
			return (wo(t) ? Ws : Ut)(t, uo(Nn(e, 3)))
		}, ht.remove = function (t, e) {
			var n = [];
			if (!t || !t.length) return n;
			var i = -1,
				o = [],
				r = t.length;
			for (e = Nn(e, 3); ++i < r;) {
				var a = t[i];
				e(a, i, t) && (n.push(a), o.push(i))
			}
			return xe(t, o), n
		}, ht.rest = function (t, e) {
			if ("function" != typeof t) throw new E(na);
			return Te(t, e = e === ea ? e : Uo(e))
		}, ht.reverse = Ei, ht.sampleSize = function (t, e, n) {
			return e = (n ? Jn(t, e, n) : e === ea) ? 1 : Uo(e), (wo(t) ? $t : $e)(t, e)
		}, ht.set = function (t, e, n) {
			return null == t ? t : Ce(t, e, n)
		}, ht.setWith = function (t, e, n, i) {
			return i = "function" == typeof i ? i : ea, null == t ? t : Ce(t, e, n, i)
		}, ht.shuffle = function (t) {
			return (wo(t) ? Ct : Ae)(t)
		}, ht.slice = function (t, e, n) {
			var i = null == t ? 0 : t.length;
			return i ? (n && "number" != typeof n && Jn(t, e, n) ? (e = 0, n = i) : (e = null == e ? 0 : Uo(e), n = n === ea ? i : Uo(n)), Pe(t, e, n)) : []
		}, ht.sortBy = to, ht.sortedUniq = function (t) {
			return t && t.length ? De(t) : []
		}, ht.sortedUniqBy = function (t, e) {
			return t && t.length ? De(t, Nn(e, 2)) : []
		}, ht.split = function (t, e, n) {
			return n && "number" != typeof n && Jn(t, e, n) && (e = n = ea), (n = n === ea ? la : n >>> 0) ? (t = Jo(t)) && ("string" == typeof e || null != e && !Do(e)) && !(e = Ne(e)) && hl(t) ? Ke(wl(t), 0, n) : t.split(e, n) : []
		}, ht.spread = function (i, o) {
			if ("function" != typeof i) throw new E(na);
			return o = null == o ? 0 : V(Uo(o), 0), Te(function (t) {
				var e = t[o],
					n = Ke(t, 0, o);
				return e && Vs(n, e), Ns(i, this, n)
			})
		}, ht.tail = function (t) {
			var e = null == t ? 0 : t.length;
			return e ? Pe(t, 1, e) : []
		}, ht.take = function (t, e, n) {
			return t && t.length ? Pe(t, 0, (e = n || e === ea ? 1 : Uo(e)) < 0 ? 0 : e) : []
		}, ht.takeRight = function (t, e, n) {
			var i = null == t ? 0 : t.length;
			return i ? Pe(t, (e = i - (e = n || e === ea ? 1 : Uo(e))) < 0 ? 0 : e, i) : []
		}, ht.takeRightWhile = function (t, e) {
			return t && t.length ? He(t, Nn(e, 3), !1, !0) : []
		}, ht.takeWhile = function (t, e) {
			return t && t.length ? He(t, Nn(e, 3)) : []
		}, ht.tap = function (t, e) {
			return e(t), t
		}, ht.throttle = function (t, e, n) {
			var i = !0,
				o = !0;
			if ("function" != typeof t) throw new E(na);
			return Ao(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), ao(t, e, {
				leading: i,
				maxWait: e,
				trailing: o
			})
		}, ht.thru = Wi, ht.toArray = Wo, ht.toPairs = hr, ht.toPairsIn = vr, ht.toPath = function (t) {
			return wo(t) ? Fs(t, pi) : Bo(t) ? [t] : on(di(Jo(t)))
		}, ht.toPlainObject = Qo, ht.transform = function (t, i, o) {
			var e = wo(t),
				n = e || To(t) || Ro(t);
			if (i = Nn(i, 4), null == o) {
				var r = t && t.constructor;
				o = n ? e ? new r : [] : Ao(t) && Co(r) ? vt($(t)) : {}
			}
			return (n ? Rs : Jt)(t, function (t, e, n) {
				return i(o, t, e, n)
			}), o
		}, ht.unary = function (t) {
			return no(t, 1)
		}, ht.union = Ai, ht.unionBy = Pi, ht.unionWith = ji, ht.uniq = function (t) {
			return t && t.length ? Be(t) : []
		}, ht.uniqBy = function (t, e) {
			return t && t.length ? Be(t, Nn(e, 2)) : []
		}, ht.uniqWith = function (t, e) {
			return e = "function" == typeof e ? e : ea, t && t.length ? Be(t, ea, e) : []
		}, ht.unset = function (t, e) {
			return null == t || Re(t, e)
		}, ht.unzip = Ii, ht.unzipWith = Li, ht.update = function (t, e, n) {
			return null == t ? t : ze(t, e, Ve(n))
		}, ht.updateWith = function (t, e, n, i) {
			return i = "function" == typeof i ? i : ea, null == t ? t : ze(t, e, Ve(n), i)
		}, ht.values = gr, ht.valuesIn = function (t) {
			return null == t ? [] : sl(t, lr(t))
		}, ht.without = Di, ht.words = Cr, ht.wrap = function (t, e) {
			return fo(Ve(e), t)
		}, ht.xor = Mi, ht.xorBy = Ni, ht.xorWith = Bi, ht.zip = Ri, ht.zipObject = function (t, e) {
			return Ue(t || [], e || [], Et)
		}, ht.zipObjectDeep = function (t, e) {
			return Ue(t || [], e || [], Ce)
		}, ht.zipWith = zi, ht.entries = hr, ht.entriesIn = vr, ht.extend = Xo, ht.extendWith = Zo, Nr(ht, ht), ht.add = Qr, ht.attempt = Or, ht.camelCase = mr, ht.capitalize = yr, ht.ceil = Jr, ht.clamp = function (t, e, n) {
			return n === ea && (n = e, e = ea), n !== ea && (n = (n = Vo(n)) == n ? n : 0), e !== ea && (e = (e = Vo(e)) == e ? e : 0), Dt(Vo(t), e, n)
		}, ht.clone = function (t) {
			return Mt(t, 4)
		}, ht.cloneDeep = function (t) {
			return Mt(t, 5)
		}, ht.cloneDeepWith = function (t, e) {
			return Mt(t, 5, e = "function" == typeof e ? e : ea)
		}, ht.cloneWith = function (t, e) {
			return Mt(t, 4, e = "function" == typeof e ? e : ea)
		}, ht.conformsTo = function (t, e) {
			return null == e || Nt(t, e, sr(e))
		}, ht.deburr = br, ht.defaultTo = function (t, e) {
			return null == t || t != t ? e : t
		}, ht.divide = Kr, ht.endsWith = function (t, e, n) {
			t = Jo(t), e = Ne(e);
			var i = t.length,
				o = n = n === ea ? i : Dt(Uo(n), 0, i);
			return 0 <= (n -= e.length) && t.slice(n, o) == e
		}, ht.eq = go, ht.escape = function (t) {
			return (t = Jo(t)) && qa.test(t) ? t.replace(Ha, pl) : t
		}, ht.escapeRegExp = function (t) {
			return (t = Jo(t)) && Ya.test(t) ? t.replace(Za, "\\$&") : t
		}, ht.every = function (t, e, n) {
			var i = wo(t) ? Hs : Wt;
			return n && Jn(t, e, n) && (e = ea), i(t, Nn(e, 3))
		}, ht.find = Fi, ht.findIndex = yi, ht.findKey = function (t, e) {
			return Xs(t, Nn(e, 3), Jt)
		}, ht.findLast = Vi, ht.findLastIndex = bi, ht.findLastKey = function (t, e) {
			return Xs(t, Nn(e, 3), Kt)
		}, ht.floor = Xr, ht.forEach = Qi, ht.forEachRight = Ji, ht.forIn = function (t, e) {
			return null == t ? t : Vt(t, Nn(e, 3), lr)
		}, ht.forInRight = function (t, e) {
			return null == t ? t : Qt(t, Nn(e, 3), lr)
		}, ht.forOwn = function (t, e) {
			return t && Jt(t, Nn(e, 3))
		}, ht.forOwnRight = function (t, e) {
			return t && Kt(t, Nn(e, 3))
		}, ht.get = nr, ht.gt = mo, ht.gte = yo, ht.has = function (t, e) {
			return null != t && Un(t, e, ee)
		}, ht.hasIn = ir, ht.head = xi, ht.identity = Ir, ht.includes = function (t, e, n, i) {
			t = ko(t) ? t : gr(t), n = n && !i ? Uo(n) : 0;
			var o = t.length;
			return n < 0 && (n = V(o + n, 0)), No(t) ? n <= o && -1 < t.indexOf(e, n) : !!o && -1 < Ys(t, e, n)
		}, ht.indexOf = function (t, e, n) {
			var i = null == t ? 0 : t.length;
			if (!i) return -1;
			var o = null == n ? 0 : Uo(n);
			return o < 0 && (o = V(i + o, 0)), Ys(t, e, o)
		}, ht.inRange = function (t, e, n) {
			return e = qo(e), n === ea ? (n = e, e = 0) : n = qo(n), t = Vo(t), (i = t) >= Q(o = e, r = n) && i < V(o, r);
			var i, o, r
		}, ht.invoke = ar, ht.isArguments = bo, ht.isArray = wo, ht.isArrayBuffer = xo, ht.isArrayLike = ko, ht.isArrayLikeObject = _o, ht.isBoolean = function (t) {
			return !0 === t || !1 === t || Po(t) && Gt(t) == pa
		}, ht.isBuffer = To, ht.isDate = So, ht.isElement = function (t) {
			return Po(t) && 1 === t.nodeType && !Lo(t)
		}, ht.isEmpty = function (t) {
			if (null == t) return !0;
			if (ko(t) && (wo(t) || "string" == typeof t || "function" == typeof t.splice || To(t) || Ro(t) || bo(t))) return !t.length;
			var e = qn(t);
			if (e == ma || e == ka) return !t.size;
			if (Yn(t)) return !ue(t).length;
			for (var n in t)
				if (S.call(t, n)) return !1;
			return !0
		}, ht.isEqual = function (t, e) {
			return ae(t, e)
		}, ht.isEqualWith = function (t, e, n) {
			var i = (n = "function" == typeof n ? n : ea) ? n(t, e) : ea;
			return i === ea ? ae(t, e, ea, n) : !!i
		}, ht.isError = $o, ht.isFinite = function (t) {
			return "number" == typeof t && q(t)
		}, ht.isFunction = Co, ht.isInteger = Oo, ht.isLength = Eo, ht.isMap = jo, ht.isMatch = function (t, e) {
			return t === e || se(t, e, Rn(e))
		}, ht.isMatchWith = function (t, e, n) {
			return n = "function" == typeof n ? n : ea, se(t, e, Rn(e), n)
		}, ht.isNaN = function (t) {
			return Io(t) && t != +t
		}, ht.isNative = function (t) {
			if (Zn(t)) throw new o("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
			return le(t)
		}, ht.isNil = function (t) {
			return null == t
		}, ht.isNull = function (t) {
			return null === t
		}, ht.isNumber = Io, ht.isObject = Ao, ht.isObjectLike = Po, ht.isPlainObject = Lo, ht.isRegExp = Do, ht.isSafeInteger = function (t) {
			return Oo(t) && -aa <= t && t <= aa
		}, ht.isSet = Mo, ht.isString = No, ht.isSymbol = Bo, ht.isTypedArray = Ro, ht.isUndefined = function (t) {
			return t === ea
		}, ht.isWeakMap = function (t) {
			return Po(t) && qn(t) == Sa
		}, ht.isWeakSet = function (t) {
			return Po(t) && "[object WeakSet]" == Gt(t)
		}, ht.join = function (t, e) {
			return null == t ? "" : U.call(t, e)
		}, ht.kebabCase = wr, ht.last = Si, ht.lastIndexOf = function (t, e, n) {
			var i = null == t ? 0 : t.length;
			if (!i) return -1;
			var o = i;
			return n !== ea && (o = (o = Uo(n)) < 0 ? V(i + o, 0) : Q(o, i - 1)), e == e ? function (t, e, n) {
				for (var i = n + 1; i--;)
					if (t[i] === e) return i;
				return i
			}(t, e, o) : Zs(t, tl, o, !0)
		}, ht.lowerCase = xr, ht.lowerFirst = kr, ht.lt = zo, ht.lte = Ho, ht.max = function (t) {
			return t && t.length ? qt(t, Ir, te) : ea
		}, ht.maxBy = function (t, e) {
			return t && t.length ? qt(t, Nn(e, 2), te) : ea
		}, ht.mean = function (t) {
			return el(t, Ir)
		}, ht.meanBy = function (t, e) {
			return el(t, Nn(e, 2))
		}, ht.min = function (t) {
			return t && t.length ? qt(t, Ir, pe) : ea
		}, ht.minBy = function (t, e) {
			return t && t.length ? qt(t, Nn(e, 2), pe) : ea
		}, ht.stubArray = Fr, ht.stubFalse = Vr, ht.stubObject = function () {
			return {}
		}, ht.stubString = function () {
			return ""
		}, ht.stubTrue = function () {
			return !0
		}, ht.multiply = Yr, ht.nth = function (t, e) {
			return t && t.length ? me(t, Uo(e)) : ea
		}, ht.noConflict = function () {
			return Cs._ === this && (Cs._ = y), this
		}, ht.noop = Br, ht.now = eo, ht.pad = function (t, e, n) {
			t = Jo(t);
			var i = (e = Uo(e)) ? bl(t) : 0;
			if (!e || e <= i) return t;
			var o = (e - i) / 2;
			return bn(z(o), n) + t + bn(R(o), n)
		}, ht.padEnd = function (t, e, n) {
			t = Jo(t);
			var i = (e = Uo(e)) ? bl(t) : 0;
			return e && i < e ? t + bn(e - i, n) : t
		}, ht.padStart = function (t, e, n) {
			t = Jo(t);
			var i = (e = Uo(e)) ? bl(t) : 0;
			return e && i < e ? bn(e - i, n) + t : t
		}, ht.parseInt = function (t, e, n) {
			return n || null == e ? e = 0 : e && (e = +e), K(Jo(t).replace(ts, ""), e || 0)
		}, ht.random = function (t, e, n) {
			if (n && "boolean" != typeof n && Jn(t, e, n) && (e = n = ea), n === ea && ("boolean" == typeof e ? (n = e, e = ea) : "boolean" == typeof t && (n = t, t = ea)), t === ea && e === ea ? (t = 0, e = 1) : (t = qo(t), e === ea ? (e = t, t = 0) : e = qo(e)), e < t) {
				var i = t;
				t = e, e = i
			}
			if (n || t % 1 || e % 1) {
				var o = X();
				return Q(t + o * (e - t + Ss("1e-" + ((o + "").length - 1))), e)
			}
			return ke(t, e)
		}, ht.reduce = function (t, e, n) {
			var i = wo(t) ? Qs : il,
				o = arguments.length < 3;
			return i(t, Nn(e, 4), n, o, zt)
		}, ht.reduceRight = function (t, e, n) {
			var i = wo(t) ? Js : il,
				o = arguments.length < 3;
			return i(t, Nn(e, 4), n, o, Ht)
		}, ht.repeat = function (t, e, n) {
			return e = (n ? Jn(t, e, n) : e === ea) ? 1 : Uo(e), _e(Jo(t), e)
		}, ht.replace = function () {
			var t = arguments,
				e = Jo(t[0]);
			return t.length < 3 ? e : e.replace(t[1], t[2])
		}, ht.result = function (t, e, n) {
			var i = -1,
				o = (e = Qe(e, t)).length;
			for (o || (o = 1, t = ea); ++i < o;) {
				var r = null == t ? ea : t[pi(e[i])];
				r === ea && (i = o, r = n), t = Co(r) ? r.call(t) : r
			}
			return t
		}, ht.round = Gr, ht.runInContext = t, ht.sample = function (t) {
			return (wo(t) ? St : Se)(t)
		}, ht.size = function (t) {
			if (null == t) return 0;
			if (ko(t)) return No(t) ? bl(t) : t.length;
			var e = qn(t);
			return e == ma || e == ka ? t.size : ue(t).length
		}, ht.snakeCase = _r, ht.some = function (t, e, n) {
			var i = wo(t) ? Ks : je;
			return n && Jn(t, e, n) && (e = ea), i(t, Nn(e, 3))
		}, ht.sortedIndex = function (t, e) {
			return Ie(t, e)
		}, ht.sortedIndexBy = function (t, e, n) {
			return Le(t, e, Nn(n, 2))
		}, ht.sortedIndexOf = function (t, e) {
			var n = null == t ? 0 : t.length;
			if (n) {
				var i = Ie(t, e);
				if (i < n && go(t[i], e)) return i
			}
			return -1
		}, ht.sortedLastIndex = function (t, e) {
			return Ie(t, e, !0)
		}, ht.sortedLastIndexBy = function (t, e, n) {
			return Le(t, e, Nn(n, 2), !0)
		}, ht.sortedLastIndexOf = function (t, e) {
			if (null != t && t.length) {
				var n = Ie(t, e, !0) - 1;
				if (go(t[n], e)) return n
			}
			return -1
		}, ht.startCase = Tr, ht.startsWith = function (t, e, n) {
			return t = Jo(t), n = null == n ? 0 : Dt(Uo(n), 0, t.length), e = Ne(e), t.slice(n, n + e.length) == e
		}, ht.subtract = ta, ht.sum = function (t) {
			return t && t.length ? ol(t, Ir) : 0
		}, ht.sumBy = function (t, e) {
			return t && t.length ? ol(t, Nn(e, 2)) : 0
		}, ht.template = function (a, t, e) {
			var n = ht.templateSettings;
			e && Jn(a, t, e) && (t = ea), a = Jo(a), t = Zo({}, t, n, Cn);
			var s, l, i = Zo({}, t.imports, n.imports, Cn),
				o = sr(i),
				r = sl(i, o),
				c = 0,
				u = t.interpolate || vs,
				d = "__p += '",
				p = m((t.escape || vs).source + "|" + u.source + "|" + (u === Va ? ss : vs).source + "|" + (t.evaluate || vs).source + "|$", "g"),
				f = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++ks + "]") + "\n";
			a.replace(p, function (t, e, n, i, o, r) {
				return n || (n = i), d += a.slice(c, r).replace(gs, fl), e && (s = !0, d += "' +\n__e(" + e + ") +\n'"), o && (l = !0, d += "';\n" + o + ";\n__p += '"), n && (d += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), c = r + t.length, t
			}), d += "';\n";
			var h = t.variable;
			h || (d = "with (obj) {\n" + d + "\n}\n"), d = (l ? d.replace(Na, "") : d).replace(Ba, "$1").replace(Ra, "$1;"), d = "function(" + (h || "obj") + ") {\n" + (h ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (l ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
			var v = Or(function () {
				return g(o, f + "return " + d).apply(ea, r)
			});
			if (v.source = d, $o(v)) throw v;
			return v
		}, ht.times = function (t, e) {
			if ((t = Uo(t)) < 1 || aa < t) return [];
			var n = la,
				i = Q(t, la);
			e = Nn(e), t -= la;
			for (var o = rl(i, e); ++n < t;) e(n);
			return o
		}, ht.toFinite = qo, ht.toInteger = Uo, ht.toLength = Fo, ht.toLower = function (t) {
			return Jo(t).toLowerCase()
		}, ht.toNumber = Vo, ht.toSafeInteger = function (t) {
			return t ? Dt(Uo(t), -aa, aa) : 0 === t ? t : 0
		}, ht.toString = Jo, ht.toUpper = function (t) {
			return Jo(t).toUpperCase()
		}, ht.trim = function (t, e, n) {
			if ((t = Jo(t)) && (n || e === ea)) return t.replace(Ga, "");
			if (!t || !(e = Ne(e))) return t;
			var i = wl(t),
				o = wl(e);
			return Ke(i, cl(i, o), ul(i, o) + 1).join("")
		}, ht.trimEnd = function (t, e, n) {
			if ((t = Jo(t)) && (n || e === ea)) return t.replace(es, "");
			if (!t || !(e = Ne(e))) return t;
			var i = wl(t);
			return Ke(i, 0, ul(i, wl(e)) + 1).join("")
		}, ht.trimStart = function (t, e, n) {
			if ((t = Jo(t)) && (n || e === ea)) return t.replace(ts, "");
			if (!t || !(e = Ne(e))) return t;
			var i = wl(t);
			return Ke(i, cl(i, wl(e))).join("")
		}, ht.truncate = function (t, e) {
			var n = 30,
				i = "...";
			if (Ao(e)) {
				var o = "separator" in e ? e.separator : o;
				n = "length" in e ? Uo(e.length) : n, i = "omission" in e ? Ne(e.omission) : i
			}
			var r = (t = Jo(t)).length;
			if (hl(t)) {
				var a = wl(t);
				r = a.length
			}
			if (r <= n) return t;
			var s = n - bl(i);
			if (s < 1) return i;
			var l = a ? Ke(a, 0, s).join("") : t.slice(0, s);
			if (o === ea) return l + i;
			if (a && (s += l.length - s), Do(o)) {
				if (t.slice(s).search(o)) {
					var c, u = l;
					for (o.global || (o = m(o.source, Jo(ls.exec(o)) + "g")), o.lastIndex = 0; c = o.exec(u);) var d = c.index;
					l = l.slice(0, d === ea ? s : d)
				}
			} else if (t.indexOf(Ne(o), s) != s) {
				var p = l.lastIndexOf(o); - 1 < p && (l = l.slice(0, p))
			}
			return l + i
		}, ht.unescape = function (t) {
			return (t = Jo(t)) && Wa.test(t) ? t.replace(za, xl) : t
		}, ht.uniqueId = function (t) {
			var e = ++p;
			return Jo(t) + e
		}, ht.upperCase = Sr, ht.upperFirst = $r, ht.each = Qi, ht.eachRight = Ji, ht.first = xi, Nr(ht, (Zr = {}, Jt(ht, function (t, e) {
			S.call(ht.prototype, e) || (Zr[e] = t)
		}), Zr), {
			chain: !1
		}), ht.VERSION = "4.17.4", Rs(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
			ht[t].placeholder = ht
		}), Rs(["drop", "take"], function (n, i) {
			yt.prototype[n] = function (t) {
				t = t === ea ? 1 : V(Uo(t), 0);
				var e = this.__filtered__ && !i ? new yt(this) : this.clone();
				return e.__filtered__ ? e.__takeCount__ = Q(t, e.__takeCount__) : e.__views__.push({
					size: Q(t, la),
					type: n + (e.__dir__ < 0 ? "Right" : "")
				}), e
			}, yt.prototype[n + "Right"] = function (t) {
				return this.reverse()[n](t).reverse()
			}
		}), Rs(["filter", "map", "takeWhile"], function (t, e) {
			var n = e + 1,
				i = 1 == n || 3 == n;
			yt.prototype[t] = function (t) {
				var e = this.clone();
				return e.__iteratees__.push({
					iteratee: Nn(t, 3),
					type: n
				}), e.__filtered__ = e.__filtered__ || i, e
			}
		}), Rs(["head", "last"], function (t, e) {
			var n = "take" + (e ? "Right" : "");
			yt.prototype[t] = function () {
				return this[n](1).value()[0]
			}
		}), Rs(["initial", "tail"], function (t, e) {
			var n = "drop" + (e ? "" : "Right");
			yt.prototype[t] = function () {
				return this.__filtered__ ? new yt(this) : this[n](1)
			}
		}), yt.prototype.compact = function () {
			return this.filter(Ir)
		}, yt.prototype.find = function (t) {
			return this.filter(t).head()
		}, yt.prototype.findLast = function (t) {
			return this.reverse().find(t)
		}, yt.prototype.invokeMap = Te(function (e, n) {
			return "function" == typeof e ? new yt(this) : this.map(function (t) {
				return oe(t, e, n)
			})
		}), yt.prototype.reject = function (t) {
			return this.filter(uo(Nn(t)))
		}, yt.prototype.slice = function (t, e) {
			t = Uo(t);
			var n = this;
			return n.__filtered__ && (0 < t || e < 0) ? new yt(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== ea && (n = (e = Uo(e)) < 0 ? n.dropRight(-e) : n.take(e - t)), n)
		}, yt.prototype.takeRightWhile = function (t) {
			return this.reverse().takeWhile(t).reverse()
		}, yt.prototype.toArray = function () {
			return this.take(la)
		}, Jt(yt.prototype, function (d, t) {
			var p = /^(?:filter|find|map|reject)|While$/.test(t),
				f = /^(?:head|last)$/.test(t),
				h = ht[f ? "take" + ("last" == t ? "Right" : "") : t],
				v = f || /^find/.test(t);
			h && (ht.prototype[t] = function () {
				var t = this.__wrapped__,
					n = f ? [1] : arguments,
					e = t instanceof yt,
					i = n[0],
					o = e || wo(t),
					r = function (t) {
						var e = h.apply(ht, Vs([t], n));
						return f && a ? e[0] : e
					};
				o && p && "function" == typeof i && 1 != i.length && (e = o = !1);
				var a = this.__chain__,
					s = !!this.__actions__.length,
					l = v && !a,
					c = e && !s;
				if (!v && o) {
					t = c ? t : new yt(this);
					var u = d.apply(t, n);
					return u.__actions__.push({
						func: Wi,
						args: [r],
						thisArg: ea
					}), new mt(u, a)
				}
				return l && c ? d.apply(this, n) : (u = this.thru(r), l ? f ? u.value()[0] : u.value() : u)
			})
		}), Rs(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
			var n = a[t],
				i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
				o = /^(?:pop|shift)$/.test(t);
			ht.prototype[t] = function () {
				var e = arguments;
				if (o && !this.__chain__) {
					var t = this.value();
					return n.apply(wo(t) ? t : [], e)
				}
				return this[i](function (t) {
					return n.apply(wo(t) ? t : [], e)
				})
			}
		}), Jt(yt.prototype, function (t, e) {
			var n = ht[e];
			if (n) {
				var i = n.name + "";
				(rt[i] || (rt[i] = [])).push({
					name: e,
					func: n
				})
			}
		}), rt[vn(ea, 2).name] = [{
			name: "wrapper",
			func: ea
		}], yt.prototype.clone = function () {
			var t = new yt(this.__wrapped__);
			return t.__actions__ = on(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = on(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = on(this.__views__), t
		}, yt.prototype.reverse = function () {
			if (this.__filtered__) {
				var t = new yt(this);
				t.__dir__ = -1, t.__filtered__ = !0
			} else(t = this.clone()).__dir__ *= -1;
			return t
		}, yt.prototype.value = function () {
			var t = this.__wrapped__.value(),
				e = this.__dir__,
				n = wo(t),
				i = e < 0,
				o = n ? t.length : 0,
				r = function (t, e, n) {
					for (var i = -1, o = n.length; ++i < o;) {
						var r = n[i],
							a = r.size;
						switch (r.type) {
							case "drop":
								t += a;
								break;
							case "dropRight":
								e -= a;
								break;
							case "take":
								e = Q(e, t + a);
								break;
							case "takeRight":
								t = V(t, e - a)
						}
					}
					return {
						start: t,
						end: e
					}
				}(0, o, this.__views__),
				a = r.start,
				s = r.end,
				l = s - a,
				c = i ? s : a - 1,
				u = this.__iteratees__,
				d = u.length,
				p = 0,
				f = Q(l, this.__takeCount__);
			if (!n || !i && o == l && f == l) return We(t, this.__actions__);
			var h = [];
			t: for (; l-- && p < f;) {
				for (var v = -1, g = t[c += e]; ++v < d;) {
					var m = u[v],
						y = m.iteratee,
						b = m.type,
						w = y(g);
					if (2 == b) g = w;
					else if (!w) {
						if (1 == b) continue t;
						break t
					}
				}
				h[p++] = g
			}
			return h
		}, ht.prototype.at = qi, ht.prototype.chain = function () {
			return Hi(this)
		}, ht.prototype.commit = function () {
			return new mt(this.value(), this.__chain__)
		}, ht.prototype.next = function () {
			this.__values__ === ea && (this.__values__ = Wo(this.value()));
			var t = this.__index__ >= this.__values__.length;
			return {
				done: t,
				value: t ? ea : this.__values__[this.__index__++]
			}
		}, ht.prototype.plant = function (t) {
			for (var e, n = this; n instanceof gt;) {
				var i = hi(n);
				i.__index__ = 0, i.__values__ = ea, e ? o.__wrapped__ = i : e = i;
				var o = i;
				n = n.__wrapped__
			}
			return o.__wrapped__ = t, e
		}, ht.prototype.reverse = function () {
			var t = this.__wrapped__;
			if (t instanceof yt) {
				var e = t;
				return this.__actions__.length && (e = new yt(this)), (e = e.reverse()).__actions__.push({
					func: Wi,
					args: [Ei],
					thisArg: ea
				}), new mt(e, this.__chain__)
			}
			return this.thru(Ei)
		}, ht.prototype.toJSON = ht.prototype.valueOf = ht.prototype.value = function () {
			return We(this.__wrapped__, this.__actions__)
		}, ht.prototype.first = ht.prototype.head, I && (ht.prototype[I] = function () {
			return this
		}), ht
	}();
	"function" == typeof define && "object" == typeof define.amd && define.amd ? (Cs._ = kl, define(function () {
		return kl
	})) : M ? ((M.exports = kl)._ = kl, D._ = kl) : Cs._ = kl
}.call(this),
	function () {
		for (var t, e = function () {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = n.length, o = window.console = window.console || {}; i--;) o[t = n[i]] || (o[t] = e)
	}(),
	function (t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function (c) {
		"use strict";
		var o, r = window.Slick || {};
		o = 0, (r = function (t, e) {
			var n, i = this;
			i.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: c(t),
				appendDots: c(t),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (t, e) {
					return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !1,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, i.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, c.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.hidden = "hidden", i.paused = !1, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = c(t), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = c(t).data("slick") || {}, i.options = c.extend({}, i.defaults, n, e), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = c.proxy(i.autoPlay, i), i.autoPlayClear = c.proxy(i.autoPlayClear, i), i.changeSlide = c.proxy(i.changeSlide, i), i.clickHandler = c.proxy(i.clickHandler, i), i.selectHandler = c.proxy(i.selectHandler, i), i.setPosition = c.proxy(i.setPosition, i), i.swipeHandler = c.proxy(i.swipeHandler, i), i.dragHandler = c.proxy(i.dragHandler, i), i.keyHandler = c.proxy(i.keyHandler, i), i.autoPlayIterator = c.proxy(i.autoPlayIterator, i), i.instanceUid = o++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0), i.checkResponsive(!0)
		}).prototype.addSlide = r.prototype.slickAdd = function (t, e, n) {
			var i = this;
			if ("boolean" == typeof e) n = e, e = null;
			else if (e < 0 || e >= i.slideCount) return !1;
			i.unload(), "number" == typeof e ? 0 === e && 0 === i.$slides.length ? c(t).appendTo(i.$slideTrack) : n ? c(t).insertBefore(i.$slides.eq(e)) : c(t).insertAfter(i.$slides.eq(e)) : !0 === n ? c(t).prependTo(i.$slideTrack) : c(t).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function (t, e) {
				c(e).attr("data-slick-index", t)
			}), i.$slidesCache = i.$slides, i.reinit()
		}, r.prototype.animateHeight = function () {
			if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
				var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
				this.$list.animate({
					height: t
				}, this.options.speed)
			}
		}, r.prototype.animateSlide = function (t, e) {
			var n = {},
				i = this;
			i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (t = -t), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
				left: t
			}, i.options.speed, i.options.easing, e) : i.$slideTrack.animate({
				top: t
			}, i.options.speed, i.options.easing, e) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), c({
				animStart: i.currentLeft
			}).animate({
				animStart: t
			}, {
				duration: i.options.speed,
				easing: i.options.easing,
				step: function (t) {
					t = Math.ceil(t), !1 === i.options.vertical ? n[i.animType] = "translate(" + t + "px, 0px)" : n[i.animType] = "translate(0px," + t + "px)", i.$slideTrack.css(n)
				},
				complete: function () {
					e && e.call()
				}
			})) : (i.applyTransition(), t = Math.ceil(t), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + t + "px, 0px)", i.$slideTrack.css(n), e && setTimeout(function () {
				i.disableTransition(), e.call()
			}, i.options.speed))
		}, r.prototype.asNavFor = function (e) {
			var t = this.options.asNavFor;
			t && null !== t && (t = c(t).not(this.$slider)), null !== t && "object" == typeof t && t.each(function () {
				var t = c(this).slick("getSlick");
				t.unslicked || t.slideHandler(e, !0)
			})
		}, r.prototype.applyTransition = function (t) {
			var e = this,
				n = {};
			!1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
		}, r.prototype.autoPlay = function () {
			this.autoPlayTimer && clearInterval(this.autoPlayTimer), this.slideCount > this.options.slidesToShow && !0 !== this.paused && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed))
		}, r.prototype.autoPlayClear = function () {
			this.autoPlayTimer && clearInterval(this.autoPlayTimer)
		}, r.prototype.autoPlayIterator = function () {
			var t = this;
			!1 === t.options.infinite ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 == 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
		}, r.prototype.buildArrows = function () {
			var t = this;
			!0 === t.options.arrows && (t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, r.prototype.buildDots = function () {
			var t, e, n = this;
			if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
				for (e = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1) e += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
				e += "</ul>", n.$dots = c(e).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
			}
		}, r.prototype.buildOut = function () {
			var t = this;
			t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, e) {
				c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "")
			}), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
		}, r.prototype.buildRows = function () {
			var t, e, n, i, o, r, a, s = this;
			if (i = document.createDocumentFragment(), r = s.$slider.children(), 1 < s.options.rows) {
				for (a = s.options.slidesPerRow * s.options.rows, o = Math.ceil(r.length / a), t = 0; t < o; t++) {
					var l = document.createElement("div");
					for (e = 0; e < s.options.rows; e++) {
						var c = document.createElement("div");
						for (n = 0; n < s.options.slidesPerRow; n++) {
							var u = t * a + (e * s.options.slidesPerRow + n);
							r.get(u) && c.appendChild(r.get(u))
						}
						l.appendChild(c)
					}
					i.appendChild(l)
				}
				s.$slider.html(i), s.$slider.children().children().children().css({
					width: 100 / s.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, r.prototype.checkResponsive = function (t, e) {
			var n, i, o, r = this,
				a = !1,
				s = r.$slider.width(),
				l = window.innerWidth || c(window).width();
			if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = s : "min" === r.respondTo && (o = Math.min(l, s)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
				for (n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
				null !== i ? null !== r.activeBreakpoint ? (i !== r.activeBreakpoint || e) && (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = i) : (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = i), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
			}
		}, r.prototype.changeSlide = function (t, e) {
			var n, i, o = this,
				r = c(t.target);
			switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
				case "previous":
					i = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, e);
					break;
				case "next":
					i = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, e);
					break;
				case "index":
					var a = 0 === t.data.index ? 0 : t.data.index || r.index() * o.options.slidesToScroll;
					o.slideHandler(o.checkNavigable(a), !1, e), r.children().trigger("focus");
					break;
				default:
					return
			}
		}, r.prototype.checkNavigable = function (t) {
			var e, n;
			if (n = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
			else
				for (var i in e) {
					if (t < e[i]) {
						t = n;
						break
					}
					n = e[i]
				}
			return t
		}, r.prototype.cleanUpEvents = function () {
			var t = this;
			t.options.dots && null !== t.$dots && (c("li", t.$dots).off("click.slick", t.changeSlide), !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && c("li", t.$dots).off("mouseenter.slick", c.proxy(t.setPaused, t, !0)).off("mouseleave.slick", c.proxy(t.setPaused, t, !1))), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), c(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", c.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", c.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler), c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), c(window).off("resize.slick.slick-" + t.instanceUid, t.resize), c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
		}, r.prototype.cleanUpRows = function () {
			var t;
			1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.html(t))
		}, r.prototype.clickHandler = function (t) {
			!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
		}, r.prototype.destroy = function (t) {
			var e = this;
			e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), c(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
				c(this).attr("style", c(this).data("originalStyling"))
			}), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
		}, r.prototype.disableTransition = function (t) {
			var e = {};
			e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
		}, r.prototype.fadeSlide = function (t, e) {
			var n = this;
			!1 === n.cssTransitions ? (n.$slides.eq(t).css({
				zIndex: n.options.zIndex
			}), n.$slides.eq(t).animate({
				opacity: 1
			}, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
				opacity: 1,
				zIndex: n.options.zIndex
			}), e && setTimeout(function () {
				n.disableTransition(t), e.call()
			}, n.options.speed))
		}, r.prototype.fadeSlideOut = function (t) {
			!1 === this.cssTransitions ? this.$slides.eq(t).animate({
				opacity: 0,
				zIndex: this.options.zIndex - 2
			}, this.options.speed, this.options.easing) : (this.applyTransition(t), this.$slides.eq(t).css({
				opacity: 0,
				zIndex: this.options.zIndex - 2
			}))
		}, r.prototype.filterSlides = r.prototype.slickFilter = function (t) {
			null !== t && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(t).appendTo(this.$slideTrack), this.reinit())
		}, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
			return this.currentSlide
		}, r.prototype.getDotCount = function () {
			var t = this,
				e = 0,
				n = 0,
				i = 0;
			if (!0 === t.options.infinite)
				for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			else if (!0 === t.options.centerMode) i = t.slideCount;
			else
				for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			return i - 1
		}, r.prototype.getLeft = function (t) {
			var e, n, i, o = this,
				r = 0;
			return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (r = o.slideOffset = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * n * -1 + r, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (o.$list.width() - i.outerWidth()) / 2)), e
		}, r.prototype.getOption = r.prototype.slickGetOption = function (t) {
			return this.options[t]
		}, r.prototype.getNavigableIndexes = function () {
			var t, e = this,
				n = 0,
				i = 0,
				o = [];
			for (!1 === e.options.infinite ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); n < t;) o.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			return o
		}, r.prototype.getSlick = function () {
			return this
		}, r.prototype.getSlideCount = function () {
			var n, i, o = this;
			return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (t, e) {
				return e.offsetLeft - i + c(e).outerWidth() / 2 > -1 * o.swipeLeft ? (n = e, !1) : void 0
			}), Math.abs(c(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
		}, r.prototype.goTo = r.prototype.slickGoTo = function (t, e) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(t)
				}
			}, e)
		}, r.prototype.init = function (t) {
			var e = this;
			c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA()
		}, r.prototype.initArrowEvents = function () {
			!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.on("click.slick", {
				message: "previous"
			}, this.changeSlide), this.$nextArrow.on("click.slick", {
				message: "next"
			}, this.changeSlide))
		}, r.prototype.initDotEvents = function () {
			var t = this;
			!0 === t.options.dots && t.slideCount > t.options.slidesToShow && c("li", t.$dots).on("click.slick", {
				message: "index"
			}, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && !0 === t.options.autoplay && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.setPaused, t, !0)).on("mouseleave.slick", c.proxy(t.setPaused, t, !1))
		}, r.prototype.initializeEvents = function () {
			var t = this;
			t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), c(document).on(t.visibilityChange, c.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", c.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", c.proxy(t.setPaused, t, !1)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)), c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)), c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
		}, r.prototype.initUI = function () {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show(), !0 === t.options.autoplay && t.autoPlay()
		}, r.prototype.keyHandler = function (t) {
			t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({
				data: {
					message: "previous"
				}
			}) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({
				data: {
					message: "next"
				}
			}))
		}, r.prototype.lazyLoad = function () {
			function t(t) {
				c("img[data-lazy]", t).each(function () {
					var t = c(this),
						e = c(this).attr("data-lazy"),
						n = document.createElement("img");
					n.onload = function () {
						t.animate({
							opacity: 0
						}, 100, function () {
							t.attr("src", e).animate({
								opacity: 1
							}, 200, function () {
								t.removeAttr("data-lazy").removeClass("slick-loading")
							})
						})
					}, n.src = e
				})
			}
			var e, n, i = this;
			!0 === i.options.centerMode ? !0 === i.options.infinite ? n = (e = i.currentSlide + (i.options.slidesToShow / 2 + 1)) + i.options.slidesToShow + 2 : (e = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1)), n = i.options.slidesToShow / 2 + 1 + 2 + i.currentSlide) : (n = (e = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide) + i.options.slidesToShow, !0 === i.options.fade && (0 < e && e--, n <= i.slideCount && n++)), t(i.$slider.find(".slick-slide").slice(e, n)), i.slideCount <= i.options.slidesToShow ? t(i.$slider.find(".slick-slide")) : i.currentSlide >= i.slideCount - i.options.slidesToShow ? t(i.$slider.find(".slick-cloned").slice(0, i.options.slidesToShow)) : 0 === i.currentSlide && t(i.$slider.find(".slick-cloned").slice(-1 * i.options.slidesToShow))
		}, r.prototype.loadSlider = function () {
			this.setPosition(), this.$slideTrack.css({
				opacity: 1
			}), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad()
		}, r.prototype.next = r.prototype.slickNext = function () {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, r.prototype.orientationChange = function () {
			this.checkResponsive(), this.setPosition()
		}, r.prototype.pause = r.prototype.slickPause = function () {
			this.autoPlayClear(), this.paused = !0
		}, r.prototype.play = r.prototype.slickPlay = function () {
			this.paused = !1, this.autoPlay()
		}, r.prototype.postSlide = function (t) {
			var e = this;
			e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), !(e.swipeLeft = null) === e.options.autoplay && !1 === e.paused && e.autoPlay(), !0 === e.options.accessibility && e.initADA()
		}, r.prototype.prev = r.prototype.slickPrev = function () {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, r.prototype.preventDefault = function (t) {
			t.preventDefault()
		}, r.prototype.progressiveLazyLoad = function () {
			var t, e = this;
			0 < c("img[data-lazy]", e.$slider).length && ((t = c("img[data-lazy]", e.$slider).first()).attr("src", null), t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function () {
				t.removeAttr("data-lazy"), e.progressiveLazyLoad(), !0 === e.options.adaptiveHeight && e.setPosition()
			}).error(function () {
				t.removeAttr("data-lazy"), e.progressiveLazyLoad()
			}))
		}, r.prototype.refresh = function (t) {
			var e, n, i = this;
			n = i.slideCount - i.options.slidesToShow, i.options.infinite || (i.slideCount <= i.options.slidesToShow ? i.currentSlide = 0 : i.currentSlide > n && (i.currentSlide = n)), e = i.currentSlide, i.destroy(!0), c.extend(i, i.initials, {
				currentSlide: e
			}), i.init(), t || i.changeSlide({
				data: {
					message: "index",
					index: e
				}
			}, !1)
		}, r.prototype.registerBreakpoints = function () {
			var t, e, n, i = this,
				o = i.options.responsive || null;
			if ("array" === c.type(o) && o.length) {
				for (t in i.respondTo = i.options.respondTo || "window", o)
					if (n = i.breakpoints.length - 1, e = o[t].breakpoint, o.hasOwnProperty(t)) {
						for (; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === e && i.breakpoints.splice(n, 1), n--;
						i.breakpoints.push(e), i.breakpointSettings[e] = o[t].settings
					}
				i.breakpoints.sort(function (t, e) {
					return i.options.mobileFirst ? t - e : e - t
				})
			}
		}, r.prototype.reinit = function () {
			var t = this;
			t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), !0 === t.options.autoplay && t.focusHandler()
		}, r.prototype.resize = function () {
			var t = this;
			c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
				t.windowWidth = c(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
			}, 50))
		}, r.prototype.removeSlide = r.prototype.slickRemove = function (t, e, n) {
			var i = this;
			return "boolean" == typeof t ? t = !0 === (e = t) ? 0 : i.slideCount - 1 : t = !0 === e ? --t : t, !(i.slideCount < 1 || t < 0 || t > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
		}, r.prototype.setCSS = function (t) {
			var e, n, i = this,
				o = {};
			!0 === i.options.rtl && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", o[i.positionProp] = t, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + e + ", " + n + ")" : o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)"), i.$slideTrack.css(o)
		}, r.prototype.setDimensions = function () {
			var t = this;
			!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
				padding: "0px " + t.options.centerPadding
			}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
				padding: t.options.centerPadding + " 0px"
			})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
			var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
			!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
		}, r.prototype.setFade = function () {
			var n, i = this;
			i.$slides.each(function (t, e) {
				n = i.slideWidth * t * -1, !0 === i.options.rtl ? c(e).css({
					position: "relative",
					right: n,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				}) : c(e).css({
					position: "relative",
					left: n,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				})
			}), i.$slides.eq(i.currentSlide).css({
				zIndex: i.options.zIndex - 1,
				opacity: 1
			})
		}, r.prototype.setHeight = function () {
			if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
				var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
				this.$list.css("height", t)
			}
		}, r.prototype.setOption = r.prototype.slickSetOption = function (t, e, n) {
			var i, o;
			if ("responsive" === t && "array" === c.type(e))
				for (o in e)
					if ("array" !== c.type(this.options.responsive)) this.options.responsive = [e[o]];
					else {
						for (i = this.options.responsive.length - 1; 0 <= i;) this.options.responsive[i].breakpoint === e[o].breakpoint && this.options.responsive.splice(i, 1), i--;
						this.options.responsive.push(e[o])
					}
			else this.options[t] = e;
			!0 === n && (this.unload(), this.reinit())
		}, r.prototype.setPosition = function () {
			this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this])
		}, r.prototype.setProps = function () {
			var t = this,
				e = document.body.style;
			t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
		}, r.prototype.setSlideClasses = function (t) {
			var e, n, i, o, r = this;
			n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), !0 === r.options.centerMode ? (e = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e <= t && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + t, n.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
		}, r.prototype.setupInfinite = function () {
			var t, e, n, i = this;
			if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (e = null, i.slideCount > i.options.slidesToShow)) {
				for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, t = i.slideCount; t > i.slideCount - n; t -= 1) e = t - 1, c(i.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
				for (t = 0; t < n; t += 1) e = t, c(i.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
				i.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
					c(this).attr("id", "")
				})
			}
		}, r.prototype.setPaused = function (t) {
			!0 === this.options.autoplay && !0 === this.options.pauseOnHover && ((this.paused = t) ? this.autoPlayClear() : this.autoPlay())
		}, r.prototype.selectHandler = function (t) {
			var e = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"),
				n = parseInt(e.attr("data-slick-index"));
			return n || (n = 0), this.slideCount <= this.options.slidesToShow ? (this.setSlideClasses(n), void this.asNavFor(n)) : void this.slideHandler(n)
		}, r.prototype.slideHandler = function (t, e, n) {
			var i, o, r, a, s = null,
				l = this;
			return e = e || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === e && l.asNavFor(t), i = t, s = l.getLeft(i), a = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? a : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (t < 0 || t > l.getDotCount() * l.options.slidesToScroll) ? void(!1 === l.options.fade && (i = l.currentSlide, !0 !== n ? l.animateSlide(a, function () {
				l.postSlide(i)
			}) : l.postSlide(i))) : !1 === l.options.infinite && !0 === l.options.centerMode && (t < 0 || t > l.slideCount - l.options.slidesToScroll) ? void(!1 === l.options.fade && (i = l.currentSlide, !0 !== n ? l.animateSlide(a, function () {
				l.postSlide(i)
			}) : l.postSlide(i))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), o = i < 0 ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), r = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== n ? (l.fadeSlideOut(r), l.fadeSlide(o, function () {
				l.postSlide(o)
			})) : l.postSlide(o), void l.animateHeight()) : void(!0 !== n ? l.animateSlide(s, function () {
				l.postSlide(o)
			}) : l.postSlide(o))))
		}, r.prototype.startLoad = function () {
			var t = this;
			!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
		}, r.prototype.swipeDirection = function () {
			var t, e, n, i;
			return t = this.touchObject.startX - this.touchObject.curX, e = this.touchObject.startY - this.touchObject.curY, n = Math.atan2(e, t), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i ? !1 === this.options.rtl ? "left" : "right" : i <= 360 && 315 <= i ? !1 === this.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= i && i <= 135 ? "left" : "right" : "vertical"
		}, r.prototype.swipeEnd = function (t) {
			var e, n = this;
			if (n.dragging = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
			if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
				case "left":
					e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.slideHandler(e), n.currentDirection = 0, n.touchObject = {}, n.$slider.trigger("swipe", [n, "left"]);
					break;
				case "right":
					e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.slideHandler(e), n.currentDirection = 1, n.touchObject = {}, n.$slider.trigger("swipe", [n, "right"])
			} else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
		}, r.prototype.swipeHandler = function (t) {
			var e = this;
			if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
				case "start":
					e.swipeStart(t);
					break;
				case "move":
					e.swipeMove(t);
					break;
				case "end":
					e.swipeEnd(t)
			}
		}, r.prototype.swipeMove = function (t) {
			var e, n, i, o, r, a = this;
			return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || r && 1 !== r.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (n = a.swipeDirection()) ? (void 0 !== t.originalEvent && 4 < a.touchObject.swipeLength && t.preventDefault(), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + i * o : a.swipeLeft = e + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
		}, r.prototype.swipeStart = function (t) {
			var e;
			return 1 !== this.touchObject.fingerCount || this.slideCount <= this.options.slidesToShow ? !(this.touchObject = {}) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), this.touchObject.startX = this.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, this.touchObject.startY = this.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(this.dragging = !0))
		}, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
			null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit())
		}, r.prototype.unload = function () {
			var t = this;
			c(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, r.prototype.unslick = function (t) {
			this.$slider.trigger("unslick", [this, t]), this.destroy()
		}, r.prototype.updateArrows = function () {
			var t = this;
			Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, r.prototype.updateDots = function () {
			null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
		}, r.prototype.visibility = function () {
			document[this.hidden] ? (this.paused = !0, this.autoPlayClear()) : !0 === this.options.autoplay && (this.paused = !1, this.autoPlay())
		}, r.prototype.initADA = function () {
			var e = this;
			e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
				c(this).attr({
					role: "option",
					"aria-describedby": "slick-slide" + e.instanceUid + t
				})
			}), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (t) {
				c(this).attr({
					role: "presentation",
					"aria-selected": "false",
					"aria-controls": "navigation" + e.instanceUid + t,
					id: "slick-slide" + e.instanceUid + t
				})
			}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
		}, r.prototype.activateADA = function () {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, r.prototype.focusHandler = function () {
			var n = this;
			n.$slider.on("focus.slick blur.slick", "*", function (t) {
				t.stopImmediatePropagation();
				var e = c(this);
				setTimeout(function () {
					n.isPlay && (e.is(":focus") ? (n.autoPlayClear(), n.paused = !0) : (n.paused = !1, n.autoPlay()))
				}, 0)
			})
		}, c.fn.slick = function () {
			var t, e, n = arguments[0],
				i = Array.prototype.slice.call(arguments, 1),
				o = this.length;
			for (t = 0; t < o; t++)
				if ("object" == typeof n || void 0 === n ? this[t].slick = new r(this[t], n) : e = this[t].slick[n].apply(this[t].slick, i), void 0 !== e) return e;
			return this
		}
	}),
	function (t, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Sweetalert2 = e()
	}(this, function () {
		"use strict";
		var k = {
				title: "",
				titleText: "",
				text: "",
				html: "",
				type: null,
				customClass: "",
				target: "body",
				animation: !0,
				allowOutsideClick: !0,
				allowEscapeKey: !0,
				allowEnterKey: !0,
				showConfirmButton: !0,
				showCancelButton: !1,
				preConfirm: null,
				confirmButtonText: "OK",
				confirmButtonColor: "#3085d6",
				confirmButtonClass: null,
				cancelButtonText: "Cancel",
				cancelButtonColor: "#aaa",
				cancelButtonClass: null,
				buttonsStyling: !0,
				reverseButtons: !1,
				focusCancel: !1,
				showCloseButton: !1,
				showLoaderOnConfirm: !1,
				imageUrl: null,
				imageWidth: null,
				imageHeight: null,
				imageClass: null,
				timer: null,
				width: 500,
				padding: 20,
				background: "#fff",
				input: null,
				inputPlaceholder: "",
				inputValue: "",
				inputOptions: {},
				inputAutoTrim: !0,
				inputClass: null,
				inputAttributes: {},
				inputValidator: null,
				progressSteps: [],
				currentProgressStep: null,
				progressStepsDistance: "40px",
				onOpen: null,
				onClose: null
			},
			t = function (t) {
				var e = {};
				for (var n in t) e[t[n]] = "swal2-" + t[n];
				return e
			},
			H = t(["container", "shown", "iosfix", "modal", "overlay", "fade", "show", "hide", "noanimation", "close", "title", "content", "buttonswrapper", "confirm", "cancel", "icon", "image", "input", "file", "range", "select", "radio", "checkbox", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled"]),
			_ = t(["success", "warning", "info", "question", "error"]),
			W = function (t, e) {
				(t = String(t).replace(/[^0-9a-f]/gi, "")).length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
				for (var n = "#", i = 0; i < 3; i++) {
					var o = parseInt(t.substr(2 * i, 2), 16);
					n += ("00" + (o = Math.round(Math.min(Math.max(0, o + o * e), 255)).toString(16))).substr(o.length)
				}
				return n
			},
			q = {
				previousWindowKeyDown: null,
				previousActiveElement: null,
				previousBodyPadding: null
			},
			T = ('\n <div role="dialog" aria-labelledby="' + H.title + '" aria-describedby="' + H.content + '" class="' + H.modal + '" tabindex="-1">\n   <ul class="' + H.progresssteps + '"></ul>\n   <div class="' + H.icon + " " + _.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + H.icon + " " + _.question + '">?</div>\n   <div class="' + H.icon + " " + _.warning + '">!</div>\n   <div class="' + H.icon + " " + _.info + '">i</div>\n   <div class="' + H.icon + " " + _.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + H.image + '">\n   <h2 class="' + H.title + '" id="' + H.title + '"></h2>\n   <div id="' + H.content + '" class="' + H.content + '"></div>\n   <input class="' + H.input + '">\n   <input type="file" class="' + H.file + '">\n   <div class="' + H.range + '">\n     <output></output>\n     <input type="range">\n   </div>\n   <select class="' + H.select + '"></select>\n   <div class="' + H.radio + '"></div>\n   <label for="' + H.checkbox + '" class="' + H.checkbox + '">\n     <input type="checkbox">\n   </label>\n   <textarea class="' + H.textarea + '"></textarea>\n   <div class="' + H.validationerror + '"></div>\n   <div class="' + H.buttonswrapper + '">\n     <button type="button" class="' + H.confirm + '">OK</button>\n     <button type="button" class="' + H.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + H.close + '" aria-label="Close this dialog">&times;</button>\n </div>\n').replace(/(^|\n)\s*/g, ""),
			U = function () {
				return document.body.querySelector("." + H.container)
			},
			F = function () {
				return U() ? U().querySelector("." + H.modal) : null
			},
			e = function (t) {
				return U() ? U().querySelector("." + t) : null
			},
			V = function () {
				return e(H.title)
			},
			Q = function () {
				return e(H.content)
			},
			J = function () {
				return e(H.image)
			},
			K = function () {
				return e(H.buttonswrapper)
			},
			X = function () {
				return e(H.progresssteps)
			},
			Z = function () {
				return e(H.validationerror)
			},
			Y = function () {
				return e(H.confirm)
			},
			G = function () {
				return e(H.cancel)
			},
			tt = function () {
				return e(H.close)
			},
			et = function (t) {
				var e = [Y(), G()];
				return t && e.reverse(),
					function (t) {
						var e = [];
						for (var n in t) - 1 === e.indexOf(t[n]) && e.push(t[n]);
						return e
					}(e.concat(Array.prototype.slice.call(F().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, *[tabindex]:not([tabindex="-1"])'))))
			},
			nt = function (t, e) {
				return !!t.classList && t.classList.contains(e)
			},
			it = function (t) {
				if (t.focus(), "file" !== t.type) {
					var e = t.value;
					t.value = "", t.value = e
				}
			},
			ot = function (e, t) {
				e && t && t.split(/\s+/).filter(Boolean).forEach(function (t) {
					e.classList.add(t)
				})
			},
			rt = function (e, t) {
				e && t && t.split(/\s+/).filter(Boolean).forEach(function (t) {
					e.classList.remove(t)
				})
			},
			at = function (t, e) {
				for (var n = 0; n < t.childNodes.length; n++)
					if (nt(t.childNodes[n], e)) return t.childNodes[n]
			},
			st = function (t, e) {
				e || (e = "block"), t.style.opacity = "", t.style.display = e
			},
			lt = function (t) {
				t.style.opacity = "", t.style.display = "none"
			},
			ct = function (t) {
				return t.offsetWidth || t.offsetHeight || t.getClientRects().length
			},
			ut = function () {
				var t = document.createElement("div"),
					e = {
						WebkitAnimation: "webkitAnimationEnd",
						OAnimation: "oAnimationEnd oanimationend",
						msAnimation: "MSAnimationEnd",
						animation: "animationend"
					};
				for (var n in e)
					if (e.hasOwnProperty(n) && void 0 !== t.style[n]) return e[n];
				return !1
			}(),
			dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
				return typeof t
			} : function (t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			},
			i = Object.assign || function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
				}
				return t
			},
			o = i({}, k),
			s = [],
			pt = void 0,
			ft = function (o) {
				var t = F() || function (e) {
					if ("undefined" != typeof document) {
						var t = document.createElement("div");
						t.className = H.container, t.innerHTML = T;
						var n = document.querySelector(e.target);
						n || (console.warn("SweetAlert2: Can't find the target \"" + e.target + '"'), n = document.body), n.appendChild(t);
						var i = F(),
							o = at(i, H.input),
							r = at(i, H.file),
							a = i.querySelector("." + H.range + " input"),
							s = i.querySelector("." + H.range + " output"),
							l = at(i, H.select),
							c = i.querySelector("." + H.checkbox + " input"),
							u = at(i, H.textarea);
						return o.oninput = function () {
							S.resetValidationError()
						}, o.onkeydown = function (t) {
							setTimeout(function () {
								13 === t.keyCode && e.allowEnterKey && (t.stopPropagation(), S.clickConfirm())
							}, 0)
						}, r.onchange = function () {
							S.resetValidationError()
						}, a.oninput = function () {
							S.resetValidationError(), s.value = a.value
						}, a.onchange = function () {
							S.resetValidationError(), a.previousSibling.value = a.value
						}, l.onchange = function () {
							S.resetValidationError()
						}, c.onchange = function () {
							S.resetValidationError()
						}, u.oninput = function () {
							S.resetValidationError()
						}, i
					}
					console.error("SweetAlert2 requires document to initialize")
				}(o);
				for (var e in o) k.hasOwnProperty(e) || "extraParams" === e || console.warn('SweetAlert2: Unknown parameter "' + e + '"');
				t.style.width = "number" == typeof o.width ? o.width + "px" : o.width, t.style.padding = o.padding + "px", t.style.background = o.background;
				for (var n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), i = 0; i < n.length; i++) n[i].style.background = o.background;
				var r = V(),
					a = Q(),
					s = K(),
					l = Y(),
					c = G(),
					u = tt();
				if (o.titleText ? r.innerText = o.titleText : r.innerHTML = o.title.split("\n").join("<br>"), o.text || o.html) {
					if ("object" === dt(o.html))
						if (a.innerHTML = "", 0 in o.html)
							for (var d = 0; d in o.html; d++) a.appendChild(o.html[d].cloneNode(!0));
						else a.appendChild(o.html.cloneNode(!0));
					else o.html ? a.innerHTML = o.html : o.text && (a.textContent = o.text);
					st(a)
				} else lt(a);
				o.showCloseButton ? st(u) : lt(u), t.className = H.modal, o.customClass && ot(t, o.customClass);
				var p = X(),
					f = parseInt(null === o.currentProgressStep ? S.getQueueStep() : o.currentProgressStep, 10);
				o.progressSteps.length ? (st(p), function (t) {
					for (; t.firstChild;) t.removeChild(t.firstChild)
				}(p), f >= o.progressSteps.length && console.warn("SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.progressSteps.forEach(function (t, e) {
					var n = document.createElement("li");
					if (ot(n, H.progresscircle), n.innerHTML = t, e === f && ot(n, H.activeprogressstep), p.appendChild(n), e !== o.progressSteps.length - 1) {
						var i = document.createElement("li");
						ot(i, H.progressline), i.style.width = o.progressStepsDistance, p.appendChild(i)
					}
				})) : lt(p);
				for (var h = F().querySelectorAll("." + H.icon), v = 0; v < h.length; v++) lt(h[v]);
				if (o.type) {
					var g = !1;
					for (var m in _)
						if (o.type === m) {
							g = !0;
							break
						}
					if (!g) return console.error("SweetAlert2: Unknown alert type: " + o.type), !1;
					var y = t.querySelector("." + H.icon + "." + _[o.type]);
					if (st(y), o.animation) switch (o.type) {
						case "success":
							ot(y, "swal2-animate-success-icon"), ot(y.querySelector(".swal2-success-line-tip"), "swal2-animate-success-line-tip"), ot(y.querySelector(".swal2-success-line-long"), "swal2-animate-success-line-long");
							break;
						case "error":
							ot(y, "swal2-animate-error-icon"), ot(y.querySelector(".swal2-x-mark"), "swal2-animate-x-mark")
					}
				}
				var b, w, x = J();
				o.imageUrl ? (x.setAttribute("src", o.imageUrl), st(x), o.imageWidth ? x.setAttribute("width", o.imageWidth) : x.removeAttribute("width"), o.imageHeight ? x.setAttribute("height", o.imageHeight) : x.removeAttribute("height"), x.className = H.image, o.imageClass && ot(x, o.imageClass)) : lt(x), o.showCancelButton ? c.style.display = "inline-block" : lt(c), o.showConfirmButton ? (w = "display", (b = l).style.removeProperty ? b.style.removeProperty(w) : b.style.removeAttribute(w)) : lt(l), o.showConfirmButton || o.showCancelButton ? st(s) : lt(s), l.innerHTML = o.confirmButtonText, c.innerHTML = o.cancelButtonText, o.buttonsStyling && (l.style.backgroundColor = o.confirmButtonColor, c.style.backgroundColor = o.cancelButtonColor), l.className = H.confirm, ot(l, o.confirmButtonClass), c.className = H.cancel, ot(c, o.cancelButtonClass), o.buttonsStyling ? (ot(l, H.styled), ot(c, H.styled)) : (rt(l, H.styled), rt(c, H.styled), l.style.backgroundColor = l.style.borderLeftColor = l.style.borderRightColor = "", c.style.backgroundColor = c.style.borderLeftColor = c.style.borderRightColor = ""), !0 === o.animation ? rt(t, H.noanimation) : ot(t, H.noanimation)
			},
			ht = function () {
				null === q.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (q.previousBodyPadding = document.body.style.paddingRight, document.body.style.paddingRight = function () {
					if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
					var t = document.createElement("div");
					t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t);
					var e = t.offsetWidth - t.clientWidth;
					return document.body.removeChild(t), e
				}() + "px")
			},
			vt = function () {
				if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !nt(document.body, H.iosfix)) {
					var t = document.body.scrollTop;
					document.body.style.top = -1 * t + "px", ot(document.body, H.iosfix)
				}
			},
			S = function N() {
				for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				if (void 0 === e[0]) return console.error("SweetAlert2 expects at least 1 attribute!"), !1;
				var B = i({}, o);
				switch (dt(e[0])) {
					case "string":
						B.title = e[0], B.html = e[1], B.type = e[2];
						break;
					case "object":
						i(B, e[0]), B.extraParams = e[0].extraParams, "email" === B.input && null === B.inputValidator && (B.inputValidator = function (n) {
							return new Promise(function (t, e) {
								/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(n) ? t() : e("Invalid email address")
							})
						}), "url" === B.input && null === B.inputValidator && (B.inputValidator = function (n) {
							return new Promise(function (t, e) {
								/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(n) ? t() : e("Invalid URL")
							})
						});
						break;
					default:
						return console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got ' + dt(e[0])), !1
				}
				ft(B);
				var R = U(),
					z = F();
				return new Promise(function (n, l) {
					B.timer && (z.timeout = setTimeout(function () {
						N.closeModal(B.onClose), l("timer")
					}, B.timer));
					var c = function (t) {
						if (!(t = t || B.input)) return null;
						switch (t) {
							case "select":
							case "textarea":
							case "file":
								return at(z, H[t]);
							case "checkbox":
								return z.querySelector("." + H.checkbox + " input");
							case "radio":
								return z.querySelector("." + H.radio + " input:checked") || z.querySelector("." + H.radio + " input:first-child");
							case "range":
								return z.querySelector("." + H.range + " input");
							default:
								return at(z, H.input)
						}
					};
					B.input && setTimeout(function () {
						var t = c();
						t && it(t)
					}, 0);
					for (var u = function (e) {
							B.showLoaderOnConfirm && N.showLoading(), B.preConfirm ? B.preConfirm(e, B.extraParams).then(function (t) {
								N.closeModal(B.onClose), n(t || e)
							}, function (t) {
								N.hideLoading(), t && N.showValidationError(t)
							}) : (N.closeModal(B.onClose), n(e))
						}, t = function (t) {
							var e = t || window.event,
								n = e.target || e.srcElement,
								i = Y(),
								o = G(),
								r = i && (i === n || i.contains(n)),
								a = o && (o === n || o.contains(n));
							switch (e.type) {
								case "mouseover":
								case "mouseup":
									B.buttonsStyling && (r ? i.style.backgroundColor = W(B.confirmButtonColor, -.1) : a && (o.style.backgroundColor = W(B.cancelButtonColor, -.1)));
									break;
								case "mouseout":
									B.buttonsStyling && (r ? i.style.backgroundColor = B.confirmButtonColor : a && (o.style.backgroundColor = B.cancelButtonColor));
									break;
								case "mousedown":
									B.buttonsStyling && (r ? i.style.backgroundColor = W(B.confirmButtonColor, -.2) : a && (o.style.backgroundColor = W(B.cancelButtonColor, -.2)));
									break;
								case "click":
									if (r && N.isVisible())
										if (N.disableButtons(), B.input) {
											var s = function () {
												var t = c();
												if (!t) return null;
												switch (B.input) {
													case "checkbox":
														return t.checked ? 1 : 0;
													case "radio":
														return t.checked ? t.value : null;
													case "file":
														return t.files.length ? t.files[0] : null;
													default:
														return B.inputAutoTrim ? t.value.trim() : t.value
												}
											}();
											B.inputValidator ? (N.disableInput(), B.inputValidator(s, B.extraParams).then(function () {
												N.enableButtons(), N.enableInput(), u(s)
											}, function (t) {
												N.enableButtons(), N.enableInput(), t && N.showValidationError(t)
											})) : u(s)
										} else u(!0);
									else a && N.isVisible() && (N.disableButtons(), N.closeModal(B.onClose), l("cancel"))
							}
						}, e = z.querySelectorAll("button"), i = 0; i < e.length; i++) e[i].onclick = t, e[i].onmouseover = t, e[i].onmouseout = t, e[i].onmousedown = t;
					tt().onclick = function () {
						N.closeModal(B.onClose), l("close")
					}, R.onclick = function (t) {
						t.target === R && B.allowOutsideClick && (N.closeModal(B.onClose), l("overlay"))
					};
					var o = K(),
						s = Y(),
						d = G();
					B.reverseButtons ? s.parentNode.insertBefore(d, s) : s.parentNode.insertBefore(s, d);
					var r, a, p, f = function (t, e) {
						for (var n = et(B.focusCancel), i = 0; i < n.length; i++) {
							(t += e) === n.length ? t = 0 : -1 === t && (t = n.length - 1);
							var o = n[t];
							if (ct(o)) return o.focus()
						}
					};
					q.previousWindowKeyDown = window.onkeydown, window.onkeydown = function (t) {
						var e = t || window.event,
							n = e.keyCode || e.which;
						if (-1 !== [9, 13, 32, 27, 37, 38, 39, 40].indexOf(n)) {
							for (var i = e.target || e.srcElement, o = et(B.focusCancel), r = -1, a = 0; a < o.length; a++)
								if (i === o[a]) {
									r = a;
									break
								}
							9 === n ? (e.shiftKey ? f(r, -1) : f(r, 1), e.stopPropagation(), e.preventDefault()) : 37 === n || 38 === n || 39 === n || 40 === n ? document.activeElement === s && ct(d) ? d.focus() : document.activeElement === d && ct(s) && s.focus() : 13 === n || 32 === n ? -1 === r && B.allowEnterKey && (function (t) {
								if (ct(t))
									if ("function" == typeof MouseEvent) {
										var e = new MouseEvent("click", {
											view: window,
											bubbles: !1,
											cancelable: !0
										});
										t.dispatchEvent(e)
									} else if (document.createEvent) {
									var n = document.createEvent("MouseEvents");
									n.initEvent("click", !1, !1), t.dispatchEvent(n)
								} else document.createEventObject ? t.fireEvent("onclick") : "function" == typeof t.onclick && t.onclick()
							}(B.focusCancel ? d : s), e.stopPropagation(), e.preventDefault()) : 27 === n && !0 === B.allowEscapeKey && (N.closeModal(B.onClose), l("esc"))
						}
					}, B.buttonsStyling && (s.style.borderLeftColor = B.confirmButtonColor, s.style.borderRightColor = B.confirmButtonColor), N.showLoading = N.enableLoading = function () {
						st(o), st(s, "inline-block"), ot(o, H.loading), ot(z, H.loading), s.disabled = !0, d.disabled = !0
					}, N.hideLoading = N.disableLoading = function () {
						B.showConfirmButton || (lt(s), B.showCancelButton || lt(K())), rt(o, H.loading), rt(z, H.loading), s.disabled = !1, d.disabled = !1
					}, N.getTitle = function () {
						return V()
					}, N.getContent = function () {
						return Q()
					}, N.getInput = function () {
						return c()
					}, N.getImage = function () {
						return J()
					}, N.getButtonsWrapper = function () {
						return K()
					}, N.getConfirmButton = function () {
						return Y()
					}, N.getCancelButton = function () {
						return G()
					}, N.enableButtons = function () {
						s.disabled = !1, d.disabled = !1
					}, N.disableButtons = function () {
						s.disabled = !0, d.disabled = !0
					}, N.enableConfirmButton = function () {
						s.disabled = !1
					}, N.disableConfirmButton = function () {
						s.disabled = !0
					}, N.enableInput = function () {
						var t = c();
						if (!t) return !1;
						if ("radio" === t.type)
							for (var e = t.parentNode.parentNode.querySelectorAll("input"), n = 0; n < e.length; n++) e[n].disabled = !1;
						else t.disabled = !1
					}, N.disableInput = function () {
						var t = c();
						if (!t) return !1;
						if (t && "radio" === t.type)
							for (var e = t.parentNode.parentNode.querySelectorAll("input"), n = 0; n < e.length; n++) e[n].disabled = !0;
						else t.disabled = !0
					}, N.recalculateHeight = (r = function () {
						var t = F();
						if (t) {
							var e = t.style.display;
							t.style.minHeight = "", st(t), t.style.minHeight = t.scrollHeight + 1 + "px", t.style.display = e
						}
					}, a = 50, p = void 0, function () {
						clearTimeout(p), p = setTimeout(function () {
							p = null, r()
						}, a)
					}), N.showValidationError = function (t) {
						var e = Z();
						e.innerHTML = t, st(e);
						var n = c();
						n && (it(n), ot(n, H.inputerror))
					}, N.resetValidationError = function () {
						var t = Z();
						lt(t), N.recalculateHeight();
						var e = c();
						e && rt(e, H.inputerror)
					}, N.getProgressSteps = function () {
						return B.progressSteps
					}, N.setProgressSteps = function (t) {
						B.progressSteps = t, ft(B)
					}, N.showProgressSteps = function () {
						st(X())
					}, N.hideProgressSteps = function () {
						lt(X())
					}, N.enableButtons(), N.hideLoading(), N.resetValidationError();
					for (var h = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], v = void 0, g = 0; g < h.length; g++) {
						var m = H[h[g]],
							y = at(z, m);
						if (v = c(h[g])) {
							for (var b in v.attributes)
								if (v.attributes.hasOwnProperty(b)) {
									var w = v.attributes[b].name;
									"type" !== w && "value" !== w && v.removeAttribute(w)
								}
							for (var x in B.inputAttributes) v.setAttribute(x, B.inputAttributes[x])
						}
						y.className = m, B.inputClass && ot(y, B.inputClass), lt(y)
					}
					var k, _, T, S, $ = void 0;
					switch (B.input) {
						case "text":
						case "email":
						case "password":
						case "number":
						case "tel":
						case "url":
							(v = at(z, H.input)).value = B.inputValue, v.placeholder = B.inputPlaceholder, v.type = B.input, st(v);
							break;
						case "file":
							(v = at(z, H.file)).placeholder = B.inputPlaceholder, v.type = B.input, st(v);
							break;
						case "range":
							var C = at(z, H.range),
								O = C.querySelector("input"),
								E = C.querySelector("output");
							O.value = B.inputValue, O.type = B.input, E.value = B.inputValue, st(C);
							break;
						case "select":
							var A = at(z, H.select);
							if (A.innerHTML = "", B.inputPlaceholder) {
								var P = document.createElement("option");
								P.innerHTML = B.inputPlaceholder, P.value = "", P.disabled = !0, P.selected = !0, A.appendChild(P)
							}
							$ = function (t) {
								for (var e in t) {
									var n = document.createElement("option");
									n.value = e, n.innerHTML = t[e], B.inputValue === e && (n.selected = !0), A.appendChild(n)
								}
								st(A), A.focus()
							};
							break;
						case "radio":
							var j = at(z, H.radio);
							j.innerHTML = "", $ = function (t) {
								for (var e in t) {
									var n = document.createElement("input"),
										i = document.createElement("label"),
										o = document.createElement("span");
									n.type = "radio", n.name = H.radio, n.value = e, B.inputValue === e && (n.checked = !0), o.innerHTML = t[e], i.appendChild(n), i.appendChild(o), i.for = n.id, j.appendChild(i)
								}
								st(j);
								var r = j.querySelectorAll("input");
								r.length && r[0].focus()
							};
							break;
						case "checkbox":
							var I = at(z, H.checkbox),
								L = c("checkbox");
							L.type = "checkbox", L.value = 1, L.id = H.checkbox, L.checked = Boolean(B.inputValue);
							var D = I.getElementsByTagName("span");
							D.length && I.removeChild(D[0]), (D = document.createElement("span")).innerHTML = B.inputPlaceholder, I.appendChild(D), st(I);
							break;
						case "textarea":
							var M = at(z, H.textarea);
							M.value = B.inputValue, M.placeholder = B.inputPlaceholder, st(M);
							break;
						case null:
							break;
						default:
							console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + B.input + '"')
					}
					"select" !== B.input && "radio" !== B.input || (B.inputOptions instanceof Promise ? (N.showLoading(), B.inputOptions.then(function (t) {
						N.hideLoading(), $(t)
					})) : "object" === dt(B.inputOptions) ? $(B.inputOptions) : console.error("SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got " + dt(B.inputOptions))), k = B.animation, _ = B.onOpen, T = U(), S = F(), k ? (ot(S, H.show), ot(T, H.fade), rt(S, H.hide)) : rt(S, H.fade), st(S), T.style.overflowY = "hidden", ut && !nt(S, H.noanimation) ? S.addEventListener(ut, function t() {
						S.removeEventListener(ut, t), T.style.overflowY = "auto"
					}) : T.style.overflowY = "auto", ot(document.documentElement, H.shown), ot(document.body, H.shown), ot(T, H.shown), ht(), vt(), q.previousActiveElement = document.activeElement, null !== _ && "function" == typeof _ && setTimeout(function () {
						_(S)
					}), B.allowEnterKey ? f(-1, 1) : document.activeElement && document.activeElement.blur(), U().scrollTop = 0, "undefined" == typeof MutationObserver || pt || (pt = new MutationObserver(N.recalculateHeight)).observe(z, {
						childList: !0,
						characterData: !0,
						subtree: !0
					})
				})
			};
		return S.isVisible = function () {
			return !!F()
		}, S.queue = function (t) {
			s = t;
			var r = function () {
					s = [], document.body.removeAttribute("data-swal2-queue-step")
				},
				a = [];
			return new Promise(function (t, o) {
				! function e(n, i) {
					n < s.length ? (document.body.setAttribute("data-swal2-queue-step", n), S(s[n]).then(function (t) {
						a.push(t), e(n + 1, i)
					}, function (t) {
						r(), o(t)
					})) : (r(), t(a))
				}(0)
			})
		}, S.getQueueStep = function () {
			return document.body.getAttribute("data-swal2-queue-step")
		}, S.insertQueueStep = function (t, e) {
			return e && e < s.length ? s.splice(e, 0, t) : s.push(t)
		}, S.deleteQueueStep = function (t) {
			void 0 !== s[t] && s.splice(t, 1)
		}, S.close = S.closeModal = function (t) {
			var e = U(),
				n = F();
			if (n) {
				rt(n, H.show), ot(n, H.hide), clearTimeout(n.timeout),
					function () {
						if (window.onkeydown = q.previousWindowKeyDown, q.previousActiveElement && q.previousActiveElement.focus) {
							var t = window.scrollX,
								e = window.scrollY;
							q.previousActiveElement.focus(), t && e && window.scrollTo(t, e)
						}
					}();
				var i = function () {
					e.parentNode && e.parentNode.removeChild(e), rt(document.documentElement, H.shown), rt(document.body, H.shown), null !== q.previousBodyPadding && (document.body.style.paddingRight = q.previousBodyPadding, q.previousBodyPadding = null),
						function () {
							if (nt(document.body, H.iosfix)) {
								var t = parseInt(document.body.style.top, 10);
								rt(document.body, H.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t
							}
						}()
				};
				ut && !nt(n, H.noanimation) ? n.addEventListener(ut, function t() {
					n.removeEventListener(ut, t), nt(n, H.hide) && i()
				}) : i(), null !== t && "function" == typeof t && setTimeout(function () {
					t(n)
				})
			}
		}, S.clickConfirm = function () {
			return Y().click()
		}, S.clickCancel = function () {
			return G().click()
		}, S.setDefaults = function (t) {
			if (!t || "object" !== (void 0 === t ? "undefined" : dt(t))) return console.error("SweetAlert2: the argument for setDefaults() is required and has to be a object");
			for (var e in t) k.hasOwnProperty(e) || "extraParams" === e || (console.warn('SweetAlert2: Unknown parameter "' + e + '"'), delete t[e]);
			i(o, t)
		}, S.resetDefaults = function () {
			o = i({}, k)
		}, S.noop = function () {}, S.version = "6.6.2", S.default = S
	}), window.Sweetalert2 && (window.sweetAlert = window.swal = window.Sweetalert2), $(function () {
		prod || $(".JSremoveVideo").remove(), openSearch(), JSModales(), JSmainNav(), homeSlider(), prodSlider(), menuMobileBehavior(), menuMobileBehaviorUL(), menuGenBehaviorUL(), imgLiquids(), accordions(), sticker(), BoostrapTTip(), dropdowntogglewOver(), dropdownTop(), slideKeyboard(), scrollScreen(), subMenuOpener()
	}), $(window).load(function () {
		addScrollClass()
	});
var h12 = [{
		3: "2843,75",
		4: "2212,53",
		5: "1835,29",
		6: "1585,02",
		7: "1407,31",
		8: "1274,93",
		9: "1172,78",
		10: "1091,77",
		11: "1026,13",
		12: "972,01",
		v1: 6e3,
		v2: "7330,48"
	}, {
		3: "2891,15",
		4: "2249,41",
		5: "1865,88",
		6: "1611,44",
		7: "1430,76",
		8: "1296,18",
		9: "1192,33",
		10: "1109,96",
		11: "1043,23",
		12: "988,21",
		v1: 6100,
		v2: "7452,66"
	}, {
		3: "2938,55",
		4: "2286,29",
		5: "1896,47",
		6: "1637,86",
		7: "1454,22",
		8: "1317,43",
		9: "1211,87",
		10: "1128,16",
		11: "1060,33",
		12: "1004,41",
		v1: 6200,
		v2: "7574,83"
	}, {
		3: "2985,94",
		4: "2323,16",
		5: "1927,05",
		6: "1664,27",
		7: "1477,68",
		8: "1338,68",
		9: "1231,42",
		10: "1146,36",
		11: "1077,44",
		12: "1020,61",
		v1: 6300,
		v2: "7697,01"
	}, {
		3: "3033,34",
		4: "2360,04",
		5: "1957,64",
		6: "1690,69",
		7: "1501,13",
		8: "1359,93",
		9: "1250,96",
		10: "1164,55",
		11: "1094,54",
		12: "1036,81",
		v1: 6400,
		v2: "7819,18"
	}, {
		3: "3080,74",
		4: "2396,91",
		5: "1988,23",
		6: "1717,11",
		7: "1524,59",
		8: "1381,18",
		9: "1270,51",
		10: "1182,75",
		11: "1111,64",
		12: "1053,01",
		v1: 6500,
		v2: "7941,36"
	}, {
		3: "3128,13",
		4: "2433,79",
		5: "2018,82",
		6: "1743,52",
		7: "1548,04",
		8: "1402,43",
		9: "1290,06",
		10: "1200,95",
		11: "1128,74",
		12: "1069,21",
		v1: 6600,
		v2: "8063,53"
	}, {
		3: "3175,53",
		4: "2470,67",
		5: "2049,41",
		6: "1769,94",
		7: "1571,5",
		8: "1423,68",
		9: "1309,6",
		10: "1219,14",
		11: "1145,85",
		12: "1085,42",
		v1: 6700,
		v2: "8185,71"
	}, {
		3: "3222,92",
		4: "2507,54",
		5: "2079,99",
		6: "1796,36",
		7: "1594,95",
		8: "1444,93",
		9: "1329,15",
		10: "1237,34",
		11: "1162,95",
		12: "1101,61",
		v1: 6800,
		v2: "8307,88"
	}, {
		3: "3270,32",
		4: "2544,41",
		5: "2110,58",
		6: "1822,78",
		7: "1618,4",
		8: "1466,17",
		9: "1348,69",
		10: "1255,53",
		11: "1180,05",
		12: "1117,81",
		v1: 6900,
		v2: "8430,05"
	}, {
		3: "3317,71",
		4: "2581,29",
		5: "2141,17",
		6: "1849,19",
		7: "1641,86",
		8: "1487,42",
		9: "1368,24",
		10: "1273,73",
		11: "1197,15",
		12: "1134,02",
		v1: 7e3,
		v2: "8552,23"
	}, {
		3: "3365,11",
		4: "2618,17",
		5: "2171,76",
		6: "1875,61",
		7: "1665,32",
		8: "1508,67",
		9: "1387,79",
		10: "1291,93",
		11: "1214,25",
		12: "1150,21",
		v1: 7100,
		v2: "8674,4"
	}, {
		3: "3412,51",
		4: "2655,04",
		5: "2202,35",
		6: "1902,03",
		7: "1688,77",
		8: "1529,92",
		9: "1407,33",
		10: "1310,12",
		11: "1231,36",
		12: "1166,42",
		v1: 7200,
		v2: "8796,58"
	}, {
		3: "3459,9",
		4: "2691,92",
		5: "2232,93",
		6: "1928,44",
		7: "1712,23",
		8: "1551,17",
		9: "1426,88",
		10: "1328,32",
		11: "1248,46",
		12: "1182,62",
		v1: 7300,
		v2: "8918,75"
	}, {
		3: "3507,3",
		4: "2728,79",
		5: "2263,52",
		6: "1954,86",
		7: "1735,68",
		8: "1572,42",
		9: "1446,43",
		10: "1346,51",
		11: "1265,56",
		12: "1198,82",
		v1: 7400,
		v2: "9040,93"
	}, {
		3: "3554,69",
		4: "2765,67",
		5: "2294,11",
		6: "1981,28",
		7: "1759,14",
		8: "1593,67",
		9: "1465,97",
		10: "1364,71",
		11: "1282,66",
		12: "1215,02",
		v1: 7500,
		v2: "9163,1"
	}, {
		3: "3602,09",
		4: "2802,55",
		5: "2324,7",
		6: "2007,7",
		7: "1782,59",
		8: "1614,92",
		9: "1485,52",
		10: "1382,91",
		11: "1299,76",
		12: "1231,22",
		v1: 7600,
		v2: "9285,28"
	}, {
		3: "3649,48",
		4: "2839,42",
		5: "2355,29",
		6: "2034,11",
		7: "1806,05",
		8: "1636,17",
		9: "1505,07",
		10: "1401,1",
		11: "1316,87",
		12: "1247,42",
		v1: 7700,
		v2: "9407,45"
	}, {
		3: "3696,88",
		4: "2876,3",
		5: "2385,88",
		6: "2060,53",
		7: "1829,5",
		8: "1657,42",
		9: "1524,61",
		10: "1419,3",
		11: "1333,97",
		12: "1263,62",
		v1: 7800,
		v2: "9529,63"
	}, {
		3: "3744,28",
		4: "2913,17",
		5: "2416,46",
		6: "2086,95",
		7: "1852,96",
		8: "1678,66",
		9: "1544,16",
		10: "1437,49",
		11: "1351,07",
		12: "1279,82",
		v1: 7900,
		v2: "9651,8"
	}, {
		3: "3791,67",
		4: "2950,05",
		5: "2447,05",
		6: "2113,36",
		7: "1876,41",
		8: "1699,91",
		9: "1563,71",
		10: "1455,69",
		11: "1368,17",
		12: "1296,02",
		v1: 8e3,
		v2: "9773,98"
	}, {
		3: "3839,07",
		4: "2986,92",
		5: "2477,64",
		6: "2139,78",
		7: "1899,87",
		8: "1721,16",
		9: "1583,25",
		10: "1473,89",
		11: "1385,28",
		12: "1312,22",
		v1: 8100,
		v2: "9896,15"
	}, {
		3: "3886,47",
		4: "3023,8",
		5: "2508,23",
		6: "2166,2",
		7: "1923,32",
		8: "1742,41",
		9: "1602,8",
		10: "1492,08",
		11: "1402,38",
		12: "1328,42",
		v1: 8200,
		v2: "10018,33"
	}, {
		3: "3933,86",
		4: "3060,67",
		5: "2538,82",
		6: "2192,61",
		7: "1946,78",
		8: "1763,66",
		9: "1622,34",
		10: "1510,28",
		11: "1419,48",
		12: "1344,62",
		v1: 8300,
		v2: "10140,5"
	}, {
		3: "3981,26",
		4: "3097,55",
		5: "2569,41",
		6: "2219,03",
		7: "1970,23",
		8: "1784,91",
		9: "1641,89",
		10: "1528,48",
		11: "1436,58",
		12: "1360,82",
		v1: 8400,
		v2: "10262,68"
	}, {
		3: "4028,65",
		4: "3134,43",
		5: "2599,99",
		6: "2245,45",
		7: "1993,69",
		8: "1806,16",
		9: "1661,44",
		10: "1546,67",
		11: "1453,68",
		12: "1377,02",
		v1: 8500,
		v2: "10384,85"
	}, {
		3: "4076,05",
		4: "3171,3",
		5: "2630,58",
		6: "2271,87",
		7: "2017,14",
		8: "1827,41",
		9: "1680,98",
		10: "1564,87",
		11: "1470,79",
		12: "1393,22",
		v1: 8600,
		v2: "10507,03"
	}, {
		3: "4123,44",
		4: "3208,18",
		5: "2661,17",
		6: "2298,28",
		7: "2040,6",
		8: "1848,66",
		9: "1700,53",
		10: "1583,06",
		11: "1487,89",
		12: "1409,42",
		v1: 8700,
		v2: "10629,2"
	}, {
		3: "4170,84",
		4: "3245,05",
		5: "2691,76",
		6: "2324,7",
		7: "2064,05",
		8: "1869,9",
		9: "1720,07",
		10: "1601,26",
		11: "1504,99",
		12: "1425,62",
		v1: 8800,
		v2: "10751,37"
	}, {
		3: "4218,24",
		4: "3281,93",
		5: "2722,35",
		6: "2351,12",
		7: "2087,51",
		8: "1891,15",
		9: "1739,62",
		10: "1619,46",
		11: "1522,09",
		12: "1441,82",
		v1: 8900,
		v2: "10873,55"
	}, {
		3: "4265,63",
		4: "3318,8",
		5: "2752,93",
		6: "2377,53",
		7: "2110,96",
		8: "1912,4",
		9: "1759,17",
		10: "1637,65",
		11: "1539,19",
		12: "1458,02",
		v1: 9e3,
		v2: "10995,72"
	}, {
		3: "4313,03",
		4: "3355,68",
		5: "2783,52",
		6: "2403,95",
		7: "2134,42",
		8: "1933,65",
		9: "1778,71",
		10: "1655,85",
		11: "1556,3",
		12: "1474,22",
		v1: 9100,
		v2: "11117,9"
	}, {
		3: "4360,42",
		4: "3392,55",
		5: "2814,11",
		6: "2430,37",
		7: "2157,87",
		8: "1954,9",
		9: "1798,26",
		10: "1674,04",
		11: "1573,4",
		12: "1490,42",
		v1: 9200,
		v2: "11240,07"
	}, {
		3: "4407,82",
		4: "3429,43",
		5: "2844,7",
		6: "2456,79",
		7: "2181,33",
		8: "1976,15",
		9: "1817,81",
		10: "1692,24",
		11: "1590,5",
		12: "1506,62",
		v1: 9300,
		v2: "11362,25"
	}, {
		3: "4455,21",
		4: "3466,3",
		5: "2875,29",
		6: "2483,2",
		7: "2204,78",
		8: "1997,4",
		9: "1837,35",
		10: "1710,44",
		11: "1607,6",
		12: "1522,82",
		v1: 9400,
		v2: "11484,42"
	}, {
		3: "4502,61",
		4: "3503,18",
		5: "2905,88",
		6: "2509,62",
		7: "2228,24",
		8: "2018,65",
		9: "1856,9",
		10: "1728,63",
		11: "1624,71",
		12: "1539,02",
		v1: 9500,
		v2: "11606,6"
	}, {
		3: "4550,01",
		4: "3540,06",
		5: "2936,46",
		6: "2536,04",
		7: "2251,69",
		8: "2039,89",
		9: "1876,45",
		10: "1746,83",
		11: "1641,81",
		12: "1555,22",
		v1: 9600,
		v2: "11728,77"
	}, {
		3: "4597,4",
		4: "3576,93",
		5: "2967,05",
		6: "2562,45",
		7: "2275,15",
		8: "2061,14",
		9: "1895,99",
		10: "1765,03",
		11: "1658,91",
		12: "1571,42",
		v1: 9700,
		v2: "11850,95"
	}, {
		3: "4644,8",
		4: "3613,81",
		5: "2997,64",
		6: "2588,87",
		7: "2298,6",
		8: "2082,39",
		9: "1915,54",
		10: "1783,22",
		11: "1676,01",
		12: "1587,62",
		v1: 9800,
		v2: "11973,12"
	}, {
		3: "4692,2",
		4: "3650,68",
		5: "3028,23",
		6: "2615,29",
		7: "2322,06",
		8: "2103,64",
		9: "1935,09",
		10: "1801,42",
		11: "1693,11",
		12: "1603,82",
		v1: 9900,
		v2: "12095,3"
	}, {
		3: "4739,59",
		4: "3687,56",
		5: "3058,82",
		6: "2641,7",
		7: "2345,52",
		8: "2124,89",
		9: "1954,63",
		10: "1819,61",
		11: "1710,22",
		12: "1620,02",
		v1: 1e4,
		v2: "12217,47"
	}, {
		3: "4786,99",
		4: "3724,44",
		5: "3089,4",
		6: "2668,12",
		7: "2368,97",
		8: "2146,14",
		9: "1974,18",
		10: "1837,81",
		11: "1727,32",
		12: "1636,22",
		v1: 10100,
		v2: "12339,65"
	}, {
		3: "4834,38",
		4: "3761,31",
		5: "3119,99",
		6: "2694,54",
		7: "2392,43",
		8: "2167,39",
		9: "1993,72",
		10: "1856,01",
		11: "1744,42",
		12: "1652,42",
		v1: 10200,
		v2: "12461,82"
	}, {
		3: "4881,78",
		4: "3798,19",
		5: "3150,58",
		6: "2720,96",
		7: "2415,88",
		8: "2188,64",
		9: "2013,27",
		10: "1874,2",
		11: "1761,52",
		12: "1668,62",
		v1: 10300,
		v2: 12584
	}, {
		3: "4929,17",
		4: "3835,06",
		5: "3181,17",
		6: "2747,37",
		7: "2439,34",
		8: "2209,89",
		9: "2032,82",
		10: "1892,4",
		11: "1778,63",
		12: "1684,82",
		v1: 10400,
		v2: "12706,17"
	}, {
		3: "4976,57",
		4: "3871,94",
		5: "3211,76",
		6: "2773,79",
		7: "2462,79",
		8: "2231,13",
		9: "2052,36",
		10: "1910,59",
		11: "1795,73",
		12: "1701,02",
		v1: 10500,
		v2: "12828,34"
	}, {
		3: "5023,97",
		4: "3908,81",
		5: "3242,34",
		6: "2800,21",
		7: "2486,25",
		8: "2252,38",
		9: "2071,91",
		10: "1928,79",
		11: "1812,83",
		12: "1717,22",
		v1: 10600,
		v2: "12950,52"
	}, {
		3: "5071,36",
		4: "3945,69",
		5: "3272,93",
		6: "2826,62",
		7: "2509,7",
		8: "2273,63",
		9: "2091,45",
		10: "1946,99",
		11: "1829,93",
		12: "1733,42",
		v1: 10700,
		v2: "13072,69"
	}, {
		3: "5118,76",
		4: "3982,56",
		5: "3303,52",
		6: "2853,04",
		7: "2533,16",
		8: "2294,88",
		9: 2111,
		10: "1965,18",
		11: "1847,03",
		12: "1749,62",
		v1: 10800,
		v2: "13194,87"
	}, {
		3: "5166,15",
		4: "4019,44",
		5: "3334,11",
		6: "2879,46",
		7: "2556,61",
		8: "2316,13",
		9: "2130,55",
		10: "1983,38",
		11: "1864,14",
		12: "1765,82",
		v1: 10900,
		v2: "13317,04"
	}, {
		3: "5213,55",
		4: "4056,32",
		5: "3364,7",
		6: "2905,88",
		7: "2580,07",
		8: "2337,38",
		9: "2150,09",
		10: "2001,58",
		11: "1881,24",
		12: "1782,02",
		v1: 11e3,
		v2: "13439,22"
	}, {
		3: "5260,94",
		4: "4093,19",
		5: "3395,28",
		6: "2932,29",
		7: "2603,52",
		8: "2358,63",
		9: "2169,64",
		10: "2019,77",
		11: "1898,34",
		12: "1798,22",
		v1: 11100,
		v2: "13561,39"
	}, {
		3: "5308,34",
		4: "4130,07",
		5: "3425,87",
		6: "2958,71",
		7: "2626,98",
		8: "2379,88",
		9: "2189,19",
		10: "2037,97",
		11: "1915,44",
		12: "1814,42",
		v1: 11200,
		v2: "13683,57"
	}, {
		3: "5355,74",
		4: "4166,94",
		5: "3456,46",
		6: "2985,13",
		7: "2650,43",
		8: "2401,13",
		9: "2208,73",
		10: "2056,16",
		11: "1932,54",
		12: "1830,62",
		v1: 11300,
		v2: "13805,74"
	}, {
		3: "5403,13",
		4: "4203,82",
		5: "3487,05",
		6: "3011,54",
		7: "2673,89",
		8: "2422,38",
		9: "2228,28",
		10: "2074,36",
		11: "1949,65",
		12: "1846,83",
		v1: 11400,
		v2: "13927,92"
	}, {
		3: "5450,53",
		4: "4240,69",
		5: "3517,64",
		6: "3037,96",
		7: "2697,34",
		8: "2443,62",
		9: "2247,83",
		10: "2092,56",
		11: "1966,75",
		12: "1863,02",
		v1: 11500,
		v2: "14050,09"
	}, {
		3: "5497,93",
		4: "4277,57",
		5: "3548,23",
		6: "3064,38",
		7: "2720,8",
		8: "2464,87",
		9: "2267,37",
		10: "2110,75",
		11: "1983,85",
		12: "1879,23",
		v1: 11600,
		v2: "14172,27"
	}, {
		3: "5545,32",
		4: "4314,44",
		5: "3578,81",
		6: "3090,79",
		7: "2744,25",
		8: "2486,12",
		9: "2286,92",
		10: "2128,95",
		11: "2000,95",
		12: "1895,43",
		v1: 11700,
		v2: "14294,44"
	}, {
		3: "5592,72",
		4: "4351,32",
		5: "3609,4",
		6: "3117,21",
		7: "2767,71",
		8: "2507,37",
		9: "2306,46",
		10: "2147,14",
		11: "2018,06",
		12: "1911,63",
		v1: 11800,
		v2: "14416,62"
	}, {
		3: "5640,11",
		4: "4388,2",
		5: "3639,99",
		6: "3143,63",
		7: "2791,16",
		8: "2528,62",
		9: "2326,01",
		10: "2165,34",
		11: "2035,16",
		12: "1927,83",
		v1: 11900,
		v2: "14538,79"
	}, {
		3: "5687,51",
		4: "4425,07",
		5: "3670,58",
		6: "3170,05",
		7: "2814,62",
		8: "2549,87",
		9: "2345,56",
		10: "2183,54",
		11: "2052,26",
		12: "1944,03",
		v1: 12e3,
		v2: "14660,97"
	}, {
		3: "5734,9",
		4: "4461,95",
		5: "3701,17",
		6: "3196,46",
		7: "2838,07",
		8: "2571,12",
		9: "2365,1",
		10: "2201,73",
		11: "2069,36",
		12: "1960,23",
		v1: 12100,
		v2: "14783,14"
	}, {
		3: "5782,3",
		4: "4498,82",
		5: "3731,75",
		6: "3222,88",
		7: "2861,53",
		8: "2592,37",
		9: "2384,65",
		10: "2219,93",
		11: "2086,46",
		12: "1976,43",
		v1: 12200,
		v2: "14905,31"
	}, {
		3: "5829,7",
		4: "4535,7",
		5: "3762,34",
		6: "3249,3",
		7: "2884,98",
		8: "2613,62",
		9: "2404,2",
		10: "2238,13",
		11: "2103,57",
		12: "1992,63",
		v1: 12300,
		v2: "15027,49"
	}, {
		3: "5877,09",
		4: "4572,57",
		5: "3792,93",
		6: "3275,71",
		7: "2908,44",
		8: "2634,86",
		9: "2423,74",
		10: "2256,32",
		11: "2120,67",
		12: "2008,83",
		v1: 12400,
		v2: "15149,66"
	}, {
		3: "5924,49",
		4: "4609,45",
		5: "3823,52",
		6: "3302,13",
		7: "2931,89",
		8: "2656,11",
		9: "2443,29",
		10: "2274,52",
		11: "2137,77",
		12: "2025,03",
		v1: 12500,
		v2: "15271,84"
	}, {
		3: "5971,88",
		4: "4646,32",
		5: "3854,11",
		6: "3328,55",
		7: "2955,35",
		8: "2677,36",
		9: "2462,83",
		10: "2292,71",
		11: "2154,87",
		12: "2041,23",
		v1: 12600,
		v2: "15394,01"
	}, {
		3: "6019,28",
		4: "4683,2",
		5: "3884,7",
		6: "3354,97",
		7: "2978,81",
		8: "2698,61",
		9: "2482,38",
		10: "2310,91",
		11: "2171,98",
		12: "2057,43",
		v1: 12700,
		v2: "15516,19"
	}, {
		3: "6066,67",
		4: "4720,07",
		5: "3915,28",
		6: "3381,38",
		7: "3002,26",
		8: "2719,86",
		9: "2501,93",
		10: "2329,11",
		11: "2189,08",
		12: "2073,63",
		v1: 12800,
		v2: "15638,36"
	}, {
		3: "6114,07",
		4: "4756,95",
		5: "3945,87",
		6: "3407,8",
		7: "3025,72",
		8: "2741,11",
		9: "2521,47",
		10: "2347,3",
		11: "2206,18",
		12: "2089,83",
		v1: 12900,
		v2: "15760,54"
	}, {
		3: "6161,47",
		4: "4793,83",
		5: "3976,46",
		6: "3434,22",
		7: "3049,17",
		8: "2762,36",
		9: "2541,02",
		10: "2365,5",
		11: "2223,28",
		12: "2106,03",
		v1: 13e3,
		v2: "15882,71"
	}, {
		3: "6208,86",
		4: "4830,7",
		5: "4007,05",
		6: "3460,63",
		7: "3072,63",
		8: "2783,61",
		9: "2560,57",
		10: "2383,69",
		11: "2240,38",
		12: "2122,23",
		v1: 13100,
		v2: "16004,89"
	}, {
		3: "6256,26",
		4: "4867,58",
		5: "4037,64",
		6: "3487,05",
		7: "3096,08",
		8: "2804,86",
		9: "2580,11",
		10: "2401,89",
		11: "2257,49",
		12: "2138,43",
		v1: 13200,
		v2: "16127,06"
	}, {
		3: "6303,66",
		4: "4904,45",
		5: "4068,23",
		6: "3513,47",
		7: "3119,54",
		8: "2826,11",
		9: "2599,66",
		10: "2420,09",
		11: "2274,59",
		12: "2154,63",
		v1: 13300,
		v2: "16249,24"
	}, {
		3: "6351,05",
		4: "4941,33",
		5: "4098,81",
		6: "3539,88",
		7: "3142,99",
		8: "2847,35",
		9: "2619,21",
		10: "2438,28",
		11: "2291,69",
		12: "2170,83",
		v1: 13400,
		v2: "16371,41"
	}, {
		3: "6398,45",
		4: "4978,21",
		5: "4129,4",
		6: "3566,3",
		7: "3166,45",
		8: "2868,6",
		9: "2638,75",
		10: "2456,48",
		11: "2308,79",
		12: "2187,03",
		v1: 13500,
		v2: "16493,59"
	}, {
		3: "6445,84",
		4: "5015,08",
		5: "4159,99",
		6: "3592,72",
		7: "3189,9",
		8: "2889,85",
		9: "2658,3",
		10: "2474,67",
		11: "2325,89",
		12: "2203,23",
		v1: 13600,
		v2: "16615,76"
	}, {
		3: "6493,24",
		4: "5051,96",
		5: "4190,58",
		6: "3619,14",
		7: "3213,36",
		8: "2911,1",
		9: "2677,84",
		10: "2492,87",
		11: 2343,
		12: "2219,43",
		v1: 13700,
		v2: "16737,94"
	}, {
		3: "6540,64",
		4: "5088,83",
		5: "4221,17",
		6: "3645,55",
		7: "3236,81",
		8: "2932,35",
		9: "2697,39",
		10: "2511,07",
		11: "2360,1",
		12: "2235,63",
		v1: 13800,
		v2: "16860,11"
	}, {
		3: "6588,03",
		4: "5125,71",
		5: "4251,75",
		6: "3671,97",
		7: "3260,27",
		8: "2953,6",
		9: "2716,94",
		10: "2529,26",
		11: "2377,2",
		12: "2251,83",
		v1: 13900,
		v2: "16982,28"
	}, {
		3: "6635,43",
		4: "5162,58",
		5: "4282,34",
		6: "3698,39",
		7: "3283,72",
		8: "2974,85",
		9: "2736,48",
		10: "2547,46",
		11: "2394,3",
		12: "2268,03",
		v1: 14e3,
		v2: "17104,46"
	}, {
		3: "6682,82",
		4: "5199,46",
		5: "4312,93",
		6: "3724,8",
		7: "3307,18",
		8: "2996,1",
		9: "2756,03",
		10: "2565,65",
		11: "2411,4",
		12: "2284,23",
		v1: 14100,
		v2: "17226,63"
	}, {
		3: "6730,22",
		4: "5236,33",
		5: "4343,52",
		6: "3751,22",
		7: "3330,63",
		8: "3017,35",
		9: "2775,58",
		10: "2583,85",
		11: "2428,51",
		12: "2300,43",
		v1: 14200,
		v2: "17348,81"
	}, {
		3: "6777,61",
		4: "5273,21",
		5: "4374,11",
		6: "3777,64",
		7: "3354,09",
		8: "3038,59",
		9: "2795,12",
		10: "2602,05",
		11: "2445,61",
		12: "2316,63",
		v1: 14300,
		v2: "17470,98"
	}, {
		3: "6825,01",
		4: "5310,09",
		5: "4404,69",
		6: "3804,06",
		7: "3377,54",
		8: "3059,84",
		9: "2814,67",
		10: "2620,24",
		11: "2462,71",
		12: "2332,83",
		v1: 14400,
		v2: "17593,16"
	}, {
		3: "6872,41",
		4: "5346,96",
		5: "4435,28",
		6: "3830,47",
		7: 3401,
		8: "3081,09",
		9: "2834,21",
		10: "2638,44",
		11: "2479,81",
		12: "2349,03",
		v1: 14500,
		v2: "17715,33"
	}, {
		3: "6919,8",
		4: "5383,84",
		5: "4465,87",
		6: "3856,89",
		7: "3424,45",
		8: "3102,34",
		9: "2853,76",
		10: "2656,64",
		11: "2496,92",
		12: "2365,23",
		v1: 14600,
		v2: "17837,51"
	}, {
		3: "6967,2",
		4: "5420,71",
		5: "4496,46",
		6: "3883,31",
		7: "3447,91",
		8: "3123,59",
		9: "2873,31",
		10: "2674,83",
		11: "2514,02",
		12: "2381,43",
		v1: 14700,
		v2: "17959,68"
	}, {
		3: "7014,6",
		4: "5457,59",
		5: "4527,05",
		6: "3909,72",
		7: "3471,36",
		8: "3144,84",
		9: "2892,85",
		10: "2693,03",
		11: "2531,12",
		12: "2397,63",
		v1: 14800,
		v2: "18081,86"
	}, {
		3: "7061,99",
		4: "5494,46",
		5: "4557,63",
		6: "3936,14",
		7: "3494,82",
		8: "3166,09",
		9: "2912,4",
		10: "2711,22",
		11: "2548,22",
		12: "2413,83",
		v1: 14900,
		v2: "18204,03"
	}, {
		3: "7109,39",
		4: "5531,34",
		5: "4588,22",
		6: "3962,56",
		7: "3518,27",
		8: "3187,34",
		9: "2931,95",
		10: "2729,42",
		11: "2565,33",
		12: "2430,03",
		v1: 15e3,
		v2: "18326,21"
	}, {
		3: "7156,78",
		4: "5568,21",
		5: "4618,81",
		6: "3988,97",
		7: "3541,73",
		8: "3208,59",
		9: "2951,49",
		10: "2747,62",
		11: "2582,43",
		12: "2446,23",
		v1: 15100,
		v2: "18448,38"
	}, {
		3: "7204,18",
		4: "5605,09",
		5: "4649,4",
		6: "4015,39",
		7: "3565,18",
		8: "3229,83",
		9: "2971,04",
		10: "2765,81",
		11: "2599,53",
		12: "2462,43",
		v1: 15200,
		v2: "18570,56"
	}, {
		3: "7251,57",
		4: "5641,97",
		5: "4679,99",
		6: "4041,81",
		7: "3588,64",
		8: "3251,08",
		9: "2990,58",
		10: "2784,01",
		11: "2616,63",
		12: "2478,63",
		v1: 15300,
		v2: "18692,73"
	}, {
		3: "7298,97",
		4: "5678,84",
		5: "4710,58",
		6: "4068,23",
		7: "3612,09",
		8: "3272,33",
		9: "3010,13",
		10: "2802,21",
		11: "2633,73",
		12: "2494,83",
		v1: 15400,
		v2: "18814,91"
	}, {
		3: "7346,37",
		4: "5715,72",
		5: "4741,16",
		6: "4094,64",
		7: "3635,55",
		8: "3293,58",
		9: "3029,68",
		10: "2820,4",
		11: "2650,84",
		12: "2511,03",
		v1: 15500,
		v2: "18937,08"
	}, {
		3: "7393,76",
		4: "5752,59",
		5: "4771,75",
		6: "4121,06",
		7: 3659,
		8: "3314,83",
		9: "3049,22",
		10: "2838,6",
		11: "2667,94",
		12: "2527,23",
		v1: 15600,
		v2: "19059,25"
	}, {
		3: "7441,16",
		4: "5789,47",
		5: "4802,34",
		6: "4147,48",
		7: "3682,46",
		8: "3336,08",
		9: "3068,77",
		10: "2856,79",
		11: "2685,04",
		12: "2543,43",
		v1: 15700,
		v2: "19181,43"
	}, {
		3: "7488,55",
		4: "5826,34",
		5: "4832,93",
		6: "4173,89",
		7: "3705,91",
		8: "3357,33",
		9: "3088,32",
		10: "2874,99",
		11: "2702,14",
		12: "2559,63",
		v1: 15800,
		v2: "19303,6"
	}, {
		3: "7535,95",
		4: "5863,22",
		5: "4863,52",
		6: "4200,31",
		7: "3729,37",
		8: "3378,58",
		9: "3107,86",
		10: "2893,19",
		11: "2719,24",
		12: "2575,83",
		v1: 15900,
		v2: "19425,78"
	}, {
		3: "7583,34",
		4: "5900,09",
		5: "4894,1",
		6: "4226,73",
		7: "3752,82",
		8: "3399,82",
		9: "3127,41",
		10: "2911,38",
		11: "2736,35",
		12: "2592,03",
		v1: 16e3,
		v2: "19547,95"
	}, {
		3: "7630,74",
		4: "5936,97",
		5: "4924,69",
		6: "4253,14",
		7: "3776,28",
		8: "3421,07",
		9: "3146,96",
		10: "2929,58",
		11: "2753,45",
		12: "2608,24",
		v1: 16100,
		v2: "19670,13"
	}, {
		3: "7678,14",
		4: "5973,85",
		5: "4955,28",
		6: "4279,56",
		7: "3799,73",
		8: "3442,32",
		9: "3166,5",
		10: "2947,77",
		11: "2770,55",
		12: "2624,43",
		v1: 16200,
		v2: "19792,3"
	}, {
		3: "7725,53",
		4: "6010,72",
		5: "4985,87",
		6: "4305,98",
		7: "3823,19",
		8: "3463,57",
		9: "3186,05",
		10: "2965,97",
		11: "2787,65",
		12: "2640,64",
		v1: 16300,
		v2: "19914,48"
	}, {
		3: "7772,93",
		4: "6047,6",
		5: "5016,46",
		6: "4332,4",
		7: "3846,64",
		8: "3484,82",
		9: "3205,59",
		10: "2984,17",
		11: "2804,75",
		12: "2656,84",
		v1: 16400,
		v2: "20036,65"
	}, {
		3: "7820,33",
		4: "6084,47",
		5: "5047,05",
		6: "4358,81",
		7: "3870,1",
		8: "3506,07",
		9: "3225,14",
		10: "3002,36",
		11: "2821,86",
		12: "2673,04",
		v1: 16500,
		v2: "20158,83"
	}, {
		3: "7867,72",
		4: "6121,35",
		5: "5077,63",
		6: "4385,23",
		7: "3893,56",
		8: "3527,32",
		9: "3244,69",
		10: "3020,56",
		11: "2838,96",
		12: "2689,24",
		v1: 16600,
		v2: 20281
	}, {
		3: "7915,12",
		4: "6158,22",
		5: "5108,22",
		6: "4411,65",
		7: "3917,01",
		8: "3548,57",
		9: "3264,23",
		10: "3038,76",
		11: "2856,06",
		12: "2705,44",
		v1: 16700,
		v2: "20403,18"
	}, {
		3: "7962,51",
		4: "6195,1",
		5: "5138,81",
		6: "4438,06",
		7: "3940,47",
		8: "3569,82",
		9: "3283,78",
		10: "3056,95",
		11: "2873,16",
		12: "2721,64",
		v1: 16800,
		v2: "20525,35"
	}, {
		3: "8009,91",
		4: "6231,98",
		5: "5169,4",
		6: "4464,48",
		7: "3963,92",
		8: "3591,07",
		9: "3303,33",
		10: "3075,15",
		11: "2890,27",
		12: "2737,84",
		v1: 16900,
		v2: "20647,53"
	}, {
		3: "8057,3",
		4: "6268,85",
		5: "5199,99",
		6: "4490,9",
		7: "3987,38",
		8: "3612,31",
		9: "3322,87",
		10: "3093,34",
		11: "2907,37",
		12: "2754,04",
		v1: 17e3,
		v2: "20769,7"
	}, {
		3: "8104,7",
		4: "6305,73",
		5: "5230,58",
		6: "4517,32",
		7: "4010,83",
		8: "3633,56",
		9: "3342,42",
		10: "3111,54",
		11: "2924,47",
		12: "2770,24",
		v1: 17100,
		v2: "20891,88"
	}, {
		3: "8152,1",
		4: "6342,6",
		5: "5261,16",
		6: "4543,73",
		7: "4034,29",
		8: "3654,81",
		9: "3361,96",
		10: "3129,74",
		11: "2941,57",
		12: "2786,44",
		v1: 17200,
		v2: "21014,05"
	}, {
		3: "8199,49",
		4: "6379,48",
		5: "5291,75",
		6: "4570,15",
		7: "4057,74",
		8: "3676,06",
		9: "3381,51",
		10: "3147,93",
		11: "2958,67",
		12: "2802,64",
		v1: 17300,
		v2: "21136,22"
	}, {
		3: "8246,89",
		4: "6416,35",
		5: "5322,34",
		6: "4596,57",
		7: "4081,2",
		8: "3697,31",
		9: "3401,06",
		10: "3166,13",
		11: "2975,78",
		12: "2818,84",
		v1: 17400,
		v2: "21258,4"
	}, {
		3: "8294,28",
		4: "6453,23",
		5: "5352,93",
		6: "4622,98",
		7: "4104,65",
		8: "3718,56",
		9: "3420,6",
		10: "3184,32",
		11: "2992,88",
		12: "2835,04",
		v1: 17500,
		v2: "21380,57"
	}, {
		3: "8341,68",
		4: "6490,1",
		5: "5383,52",
		6: "4649,4",
		7: "4128,11",
		8: "3739,81",
		9: "3440,15",
		10: "3202,52",
		11: "3009,98",
		12: "2851,24",
		v1: 17600,
		v2: "21502,75"
	}, {
		3: "8389,07",
		4: "6526,98",
		5: "5414,1",
		6: "4675,82",
		7: "4151,56",
		8: "3761,06",
		9: "3459,7",
		10: "3220,72",
		11: "3027,08",
		12: "2867,44",
		v1: 17700,
		v2: "21624,92"
	}, {
		3: "8436,47",
		4: "6563,86",
		5: "5444,69",
		6: "4702,23",
		7: "4175,02",
		8: "3782,31",
		9: "3479,24",
		10: "3238,91",
		11: "3044,19",
		12: "2883,64",
		v1: 17800,
		v2: "21747,1"
	}, {
		3: "8483,87",
		4: "6600,73",
		5: "5475,28",
		6: "4728,65",
		7: "4198,47",
		8: "3803,55",
		9: "3498,79",
		10: "3257,11",
		11: "3061,29",
		12: "2899,84",
		v1: 17900,
		v2: "21869,27"
	}, {
		3: "8531,26",
		4: "6637,61",
		5: "5505,87",
		6: "4755,07",
		7: "4221,93",
		8: "3824,8",
		9: "3518,34",
		10: "3275,31",
		11: "3078,39",
		12: "2916,04",
		v1: 18e3,
		v2: "21991,45"
	}, {
		3: "8578,66",
		4: "6674,48",
		5: "5536,46",
		6: "4781,48",
		7: "4245,38",
		8: "3846,05",
		9: "3537,88",
		10: "3293,5",
		11: "3095,49",
		12: "2932,24",
		v1: 18100,
		v2: "22113,62"
	}, {
		3: "8626,06",
		4: "6711,36",
		5: "5567,04",
		6: "4807,9",
		7: "4268,84",
		8: "3867,3",
		9: "3557,43",
		10: "3311,7",
		11: "3112,59",
		12: "2948,44",
		v1: 18200,
		v2: "22235,8"
	}, {
		3: "8673,45",
		4: "6748,23",
		5: "5597,63",
		6: "4834,32",
		7: "4292,29",
		8: "3888,55",
		9: "3576,97",
		10: "3329,89",
		11: "3129,7",
		12: "2964,64",
		v1: 18300,
		v2: "22357,97"
	}, {
		3: "8720,85",
		4: "6785,11",
		5: "5628,22",
		6: "4860,74",
		7: "4315,75",
		8: "3909,8",
		9: "3596,52",
		10: "3348,09",
		11: "3146,8",
		12: "2980,84",
		v1: 18400,
		v2: "22480,15"
	}, {
		3: "8768,24",
		4: "6821,98",
		5: "5658,81",
		6: "4887,15",
		7: "4339,2",
		8: "3931,05",
		9: "3616,07",
		10: "3366,29",
		11: "3163,9",
		12: "2997,04",
		v1: 18500,
		v2: "22602,32"
	}, {
		3: "8815,64",
		4: "6858,86",
		5: "5689,4",
		6: "4913,57",
		7: "4362,66",
		8: "3952,3",
		9: "3635,61",
		10: "3384,48",
		11: 3181,
		12: "3013,24",
		v1: 18600,
		v2: "22724,5"
	}, {
		3: "8863,03",
		4: "6895,74",
		5: "5719,98",
		6: "4939,99",
		7: "4386,11",
		8: "3973,55",
		9: "3655,16",
		10: "3402,68",
		11: "3198,1",
		12: "3029,44",
		v1: 18700,
		v2: "22846,67"
	}, {
		3: "8910,43",
		4: "6932,61",
		5: "5750,57",
		6: "4966,41",
		7: "4409,57",
		8: "3994,8",
		9: "3674,71",
		10: "3420,87",
		11: "3215,21",
		12: "3045,64",
		v1: 18800,
		v2: "22968,85"
	}, {
		3: "8957,83",
		4: "6969,49",
		5: "5781,16",
		6: "4992,82",
		7: "4433,02",
		8: "4016,04",
		9: "3694,25",
		10: "3439,07",
		11: "3232,31",
		12: "3061,84",
		v1: 18900,
		v2: "23091,02"
	}, {
		3: "9005,22",
		4: "7006,36",
		5: "5811,75",
		6: "5019,24",
		7: "4456,48",
		8: "4037,29",
		9: "3713,8",
		10: "3457,27",
		11: "3249,41",
		12: "3078,04",
		v1: 19e3,
		v2: "23213,19"
	}, {
		3: "9052,62",
		4: "7043,24",
		5: "5842,34",
		6: "5045,66",
		7: "4479,93",
		8: "4058,54",
		9: "3733,34",
		10: "3475,46",
		11: "3266,51",
		12: "3094,24",
		v1: 19100,
		v2: "23335,37"
	}, {
		3: "9100,01",
		4: "7080,11",
		5: "5872,92",
		6: "5072,07",
		7: "4503,39",
		8: "4079,79",
		9: "3752,89",
		10: "3493,66",
		11: "3283,62",
		12: "3110,44",
		v1: 19200,
		v2: "23457,54"
	}, {
		3: "9147,41",
		4: "7116,99",
		5: "5903,51",
		6: "5098,49",
		7: "4526,85",
		8: "4101,04",
		9: "3772,44",
		10: "3511,85",
		11: "3300,72",
		12: "3126,64",
		v1: 19300,
		v2: "23579,72"
	}, {
		3: "9194,8",
		4: "7153,86",
		5: "5934,1",
		6: "5124,91",
		7: "4550,3",
		8: "4122,29",
		9: "3791,98",
		10: "3530,05",
		11: "3317,82",
		12: "3142,84",
		v1: 19400,
		v2: "23701,89"
	}, {
		3: "9242,2",
		4: "7190,74",
		5: "5964,69",
		6: "5151,32",
		7: "4573,76",
		8: "4143,54",
		9: "3811,53",
		10: "3548,25",
		11: "3334,92",
		12: "3159,04",
		v1: 19500,
		v2: "23824,07"
	}, {
		3: "9289,6",
		4: "7227,62",
		5: "5995,28",
		6: "5177,74",
		7: "4597,21",
		8: "4164,79",
		9: "3831,08",
		10: "3566,44",
		11: "3352,02",
		12: "3175,24",
		v1: 19600,
		v2: "23946,24"
	}, {
		3: "9336,99",
		4: "7264,49",
		5: "6025,87",
		6: "5204,16",
		7: "4620,67",
		8: "4186,04",
		9: "3850,62",
		10: "3584,64",
		11: "3369,13",
		12: "3191,44",
		v1: 19700,
		v2: "24068,42"
	}, {
		3: "9384,39",
		4: "7301,37",
		5: "6056,45",
		6: "5230,57",
		7: "4644,12",
		8: "4207,28",
		9: "3870,17",
		10: "3602,84",
		11: "3386,23",
		12: "3207,64",
		v1: 19800,
		v2: "24190,59"
	}, {
		3: "9431,79",
		4: "7338,24",
		5: "6087,04",
		6: "5256,99",
		7: "4667,58",
		8: "4228,53",
		9: "3889,72",
		10: "3621,03",
		11: "3403,33",
		12: "3223,84",
		v1: 19900,
		v2: "24312,77"
	}, {
		3: "9479,18",
		4: "7375,12",
		5: "6117,63",
		6: "5283,41",
		7: "4691,03",
		8: "4249,78",
		9: "3909,26",
		10: "3639,23",
		11: "3420,43",
		12: "3240,04",
		v1: 2e4,
		v2: "24434,94"
	}, {
		3: "9526,58",
		4: 7412,
		5: "6148,22",
		6: "5309,83",
		7: "4714,49",
		8: "4271,03",
		9: "3928,81",
		10: "3657,42",
		11: "3437,54",
		12: "3256,24",
		v1: 20100,
		v2: "24557,12"
	}, {
		3: "9573,97",
		4: "7448,87",
		5: "6178,81",
		6: "5336,24",
		7: "4737,94",
		8: "4292,28",
		9: "3948,35",
		10: "3675,62",
		11: "3454,64",
		12: "3272,44",
		v1: 20200,
		v2: "24679,29"
	}, {
		3: "9621,37",
		4: "7485,75",
		5: "6209,4",
		6: "5362,66",
		7: "4761,4",
		8: "4313,53",
		9: "3967,9",
		10: "3693,82",
		11: "3471,74",
		12: "3288,64",
		v1: 20300,
		v2: "24801,47"
	}, {
		3: "9668,76",
		4: "7522,62",
		5: "6239,98",
		6: "5389,08",
		7: "4784,85",
		8: "4334,78",
		9: "3987,45",
		10: "3712,01",
		11: "3488,84",
		12: "3304,84",
		v1: 20400,
		v2: "24923,64"
	}, {
		3: "9716,16",
		4: "7559,5",
		5: "6270,57",
		6: "5415,5",
		7: "4808,31",
		8: "4356,03",
		9: "4006,99",
		10: "3730,21",
		11: "3505,94",
		12: "3321,05",
		v1: 20500,
		v2: "25045,82"
	}, {
		3: "9763,56",
		4: "7596,37",
		5: "6301,16",
		6: "5441,91",
		7: "4831,76",
		8: "4377,28",
		9: "4026,54",
		10: "3748,4",
		11: "3523,05",
		12: "3337,24",
		v1: 20600,
		v2: "25167,99"
	}, {
		3: "9810,95",
		4: "7633,25",
		5: "6331,75",
		6: "5468,33",
		7: "4855,22",
		8: "4398,52",
		9: "4046,08",
		10: "3766,6",
		11: "3540,15",
		12: "3353,44",
		v1: 20700,
		v2: "25290,16"
	}, {
		3: "9858,35",
		4: "7670,12",
		5: "6362,34",
		6: "5494,75",
		7: "4878,67",
		8: "4419,77",
		9: "4065,63",
		10: "3784,8",
		11: "3557,25",
		12: "3369,65",
		v1: 20800,
		v2: "25412,34"
	}, {
		3: "9905,74",
		4: 7707,
		5: "6392,92",
		6: "5521,16",
		7: "4902,13",
		8: "4441,02",
		9: "4085,18",
		10: "3802,99",
		11: "3574,35",
		12: "3385,84",
		v1: 20900,
		v2: "25534,51"
	}, {
		3: "9953,14",
		4: "7743,87",
		5: "6423,51",
		6: "5547,58",
		7: "4925,58",
		8: "4462,27",
		9: "4104,72",
		10: "3821,19",
		11: "3591,45",
		12: "3402,05",
		v1: 21e3,
		v2: "25656,69"
	}, {
		3: "10000,53",
		4: "7780,75",
		5: "6454,1",
		6: 5574,
		7: "4949,04",
		8: "4483,52",
		9: "4124,27",
		10: "3839,38",
		11: "3608,56",
		12: "3418,25",
		v1: 21100,
		v2: "25778,86"
	}, {
		3: "10047,93",
		4: "7817,63",
		5: "6484,69",
		6: "5600,41",
		7: "4972,49",
		8: "4504,77",
		9: "4143,82",
		10: "3857,58",
		11: "3625,66",
		12: "3434,45",
		v1: 21200,
		v2: "25901,04"
	}, {
		3: "10095,33",
		4: "7854,5",
		5: "6515,28",
		6: "5626,83",
		7: "4995,95",
		8: "4526,02",
		9: "4163,36",
		10: "3875,78",
		11: "3642,76",
		12: "3450,65",
		v1: 21300,
		v2: "26023,21"
	}, {
		3: "10142,72",
		4: "7891,38",
		5: "6545,87",
		6: "5653,25",
		7: "5019,4",
		8: "4547,27",
		9: "4182,91",
		10: "3893,97",
		11: "3659,86",
		12: "3466,85",
		v1: 21400,
		v2: "26145,39"
	}, {
		3: "10190,12",
		4: "7928,25",
		5: "6576,45",
		6: "5679,66",
		7: "5042,86",
		8: "4568,51",
		9: "4202,46",
		10: "3912,17",
		11: "3676,97",
		12: "3483,05",
		v1: 21500,
		v2: "26267,56"
	}, {
		3: "10237,52",
		4: "7965,13",
		5: "6607,04",
		6: "5706,08",
		7: "5066,31",
		8: "4589,76",
		9: 4222,
		10: "3930,37",
		11: "3694,07",
		12: "3499,25",
		v1: 21600,
		v2: "26389,74"
	}, {
		3: "10284,91",
		4: 8002,
		5: "6637,63",
		6: "5732,5",
		7: "5089,77",
		8: "4611,01",
		9: "4241,55",
		10: "3948,56",
		11: "3711,17",
		12: "3515,45",
		v1: 21700,
		v2: "26511,91"
	}, {
		3: "10332,31",
		4: "8038,88",
		5: "6668,22",
		6: "5758,92",
		7: "5113,22",
		8: "4632,26",
		9: "4261,1",
		10: "3966,76",
		11: "3728,27",
		12: "3531,65",
		v1: 21800,
		v2: "26634,09"
	}, {
		3: "10379,7",
		4: "8075,75",
		5: "6698,81",
		6: "5785,33",
		7: "5136,68",
		8: "4653,51",
		9: "4280,64",
		10: "3984,95",
		11: "3745,37",
		12: "3547,85",
		v1: 21900,
		v2: "26756,26"
	}, {
		3: "10427,1",
		4: "8112,63",
		5: "6729,39",
		6: "5811,75",
		7: "5160,13",
		8: "4674,76",
		9: "4300,19",
		10: "4003,15",
		11: "3762,48",
		12: "3564,05",
		v1: 22e3,
		v2: "26878,44"
	}, {
		3: "10474,5",
		4: "8149,51",
		5: "6759,98",
		6: "5838,17",
		7: "5183,59",
		8: "4696,01",
		9: "4319,73",
		10: "4021,35",
		11: "3779,58",
		12: "3580,25",
		v1: 22100,
		v2: "27000,61"
	}, {
		3: "10521,89",
		4: "8186,38",
		5: "6790,57",
		6: "5864,59",
		7: "5207,05",
		8: "4717,26",
		9: "4339,28",
		10: "4039,54",
		11: "3796,68",
		12: "3596,45",
		v1: 22200,
		v2: "27122,79"
	}, {
		3: "10569,29",
		4: "8223,26",
		5: "6821,16",
		6: 5891,
		7: "5230,5",
		8: "4738,51",
		9: "4358,83",
		10: "4057,74",
		11: "3813,78",
		12: "3612,65",
		v1: 22300,
		v2: "27244,96"
	}, {
		3: "10616,68",
		4: "8260,13",
		5: "6851,75",
		6: "5917,42",
		7: "5253,96",
		8: "4759,76",
		9: "4378,37",
		10: "4075,94",
		11: "3830,89",
		12: "3628,85",
		v1: 22400,
		v2: "27367,14"
	}, {
		3: "10664,08",
		4: "8297,01",
		5: "6882,33",
		6: "5943,84",
		7: "5277,41",
		8: 4781,
		9: "4397,92",
		10: "4094,13",
		11: "3847,99",
		12: "3645,05",
		v1: 22500,
		v2: "27489,31"
	}, {
		3: "10711,47",
		4: "8333,88",
		5: "6912,92",
		6: "5970,25",
		7: "5300,86",
		8: "4802,25",
		9: "4417,46",
		10: "4112,33",
		11: "3865,09",
		12: "3661,25",
		v1: 22600,
		v2: "27611,48"
	}, {
		3: "10758,87",
		4: "8370,76",
		5: "6943,51",
		6: "5996,67",
		7: "5324,32",
		8: "4823,5",
		9: "4437,01",
		10: "4130,52",
		11: "3882,19",
		12: "3677,45",
		v1: 22700,
		v2: "27733,66"
	}, {
		3: "10806,27",
		4: "8407,63",
		5: "6974,1",
		6: "6023,09",
		7: "5347,77",
		8: "4844,75",
		9: "4456,56",
		10: "4148,72",
		11: "3899,29",
		12: "3693,65",
		v1: 22800,
		v2: "27855,83"
	}, {
		3: "10853,66",
		4: "8444,51",
		5: "7004,69",
		6: "6049,5",
		7: "5371,23",
		8: 4866,
		9: "4476,1",
		10: "4166,92",
		11: "3916,4",
		12: "3709,85",
		v1: 22900,
		v2: "27978,01"
	}, {
		3: "10901,06",
		4: "8481,39",
		5: "7035,27",
		6: "6075,92",
		7: "5394,69",
		8: "4887,25",
		9: "4495,65",
		10: "4185,11",
		11: "3933,5",
		12: "3726,05",
		v1: 23e3,
		v2: "28100,18"
	}, {
		3: "10948,46",
		4: "8518,26",
		5: "7065,86",
		6: "6102,34",
		7: "5418,14",
		8: "4908,5",
		9: "4515,2",
		10: "4203,31",
		11: "3950,6",
		12: "3742,25",
		v1: 23100,
		v2: "28222,36"
	}, {
		3: "10995,85",
		4: "8555,14",
		5: "7096,45",
		6: "6128,75",
		7: "5441,6",
		8: "4929,75",
		9: "4534,74",
		10: "4221,5",
		11: "3967,7",
		12: "3758,45",
		v1: 23200,
		v2: "28344,53"
	}, {
		3: "11043,25",
		4: "8592,01",
		5: "7127,04",
		6: "6155,17",
		7: "5465,05",
		8: 4951,
		9: "4554,29",
		10: "4239,7",
		11: "3984,8",
		12: "3774,65",
		v1: 23300,
		v2: "28466,71"
	}, {
		3: "11090,64",
		4: "8628,89",
		5: "7157,63",
		6: "6181,59",
		7: "5488,51",
		8: "4972,24",
		9: "4573,84",
		10: "4257,9",
		11: "4001,91",
		12: "3790,85",
		v1: 23400,
		v2: "28588,88"
	}, {
		3: "11138,04",
		4: "8665,77",
		5: "7188,22",
		6: "6208,01",
		7: "5511,96",
		8: "4993,49",
		9: "4593,38",
		10: "4276,09",
		11: "4019,01",
		12: "3807,05",
		v1: 23500,
		v2: "28711,06"
	}, {
		3: "11185,43",
		4: "8702,64",
		5: "7218,8",
		6: "6234,42",
		7: "5535,42",
		8: "5014,74",
		9: "4612,93",
		10: "4294,29",
		11: "4036,11",
		12: "3823,25",
		v1: 23600,
		v2: "28833,23"
	}, {
		3: "11232,83",
		4: "8739,52",
		5: "7249,39",
		6: "6260,84",
		7: "5558,87",
		8: "5035,99",
		9: "4632,48",
		10: "4312,49",
		11: "4053,21",
		12: "3839,45",
		v1: 23700,
		v2: "28955,41"
	}, {
		3: "11280,23",
		4: "8776,39",
		5: "7279,98",
		6: "6287,26",
		7: "5582,33",
		8: "5057,24",
		9: "4652,02",
		10: "4330,68",
		11: "4070,32",
		12: "3855,65",
		v1: 23800,
		v2: "29077,58"
	}, {
		3: "11327,62",
		4: "8813,27",
		5: "7310,57",
		6: "6313,67",
		7: "5605,78",
		8: "5078,49",
		9: "4671,57",
		10: "4348,88",
		11: "4087,42",
		12: "3871,85",
		v1: 23900,
		v2: "29199,76"
	}, {
		3: "11375,02",
		4: "8850,14",
		5: "7341,16",
		6: "6340,09",
		7: "5629,24",
		8: "5099,74",
		9: "4691,11",
		10: "4367,07",
		11: "4104,52",
		12: "3888,05",
		v1: 24e3,
		v2: "29321,93"
	}, {
		3: "11422,42",
		4: "8887,02",
		5: "7371,75",
		6: "6366,51",
		7: "5652,69",
		8: "5120,99",
		9: "4710,66",
		10: "4385,27",
		11: "4121,62",
		12: "3904,25",
		v1: 24100,
		v2: "29444,11"
	}, {
		3: "11469,81",
		4: "8923,89",
		5: "7402,33",
		6: "6392,93",
		7: "5676,15",
		8: "5142,24",
		9: "4730,21",
		10: "4403,47",
		11: "4138,72",
		12: "3920,45",
		v1: 24200,
		v2: "29566,28"
	}, {
		3: "11517,2",
		4: "8960,77",
		5: "7432,92",
		6: "6419,34",
		7: "5699,6",
		8: "5163,48",
		9: "4749,75",
		10: "4421,66",
		11: "4155,83",
		12: "3936,65",
		v1: 24300,
		v2: "29688,45"
	}, {
		3: "11564,6",
		4: "8997,64",
		5: "7463,51",
		6: "6445,76",
		7: "5723,06",
		8: "5184,73",
		9: "4769,3",
		10: "4439,86",
		11: "4172,93",
		12: "3952,85",
		v1: 24400,
		v2: "29810,63"
	}, {
		3: 11612,
		4: "9034,52",
		5: "7494,1",
		6: "6472,18",
		7: "5746,51",
		8: "5205,98",
		9: "4788,84",
		10: "4458,05",
		11: "4190,03",
		12: "3969,05",
		v1: 24500,
		v2: "29932,8"
	}, {
		3: "11659,39",
		4: "9071,4",
		5: "7524,69",
		6: "6498,59",
		7: "5769,97",
		8: "5227,23",
		9: "4808,39",
		10: "4476,25",
		11: "4207,13",
		12: "3985,25",
		v1: 24600,
		v2: "30054,98"
	}, {
		3: "11706,79",
		4: "9108,27",
		5: "7555,27",
		6: "6525,01",
		7: "5793,42",
		8: "5248,48",
		9: "4827,94",
		10: "4494,45",
		11: "4224,23",
		12: "4001,45",
		v1: 24700,
		v2: "30177,15"
	}, {
		3: "11754,19",
		4: "9145,15",
		5: "7585,86",
		6: "6551,43",
		7: "5816,88",
		8: "5269,73",
		9: "4847,48",
		10: "4512,64",
		11: "4241,34",
		12: "4017,65",
		v1: 24800,
		v2: "30299,33"
	}, {
		3: "11801,58",
		4: "9182,02",
		5: "7616,45",
		6: "6577,84",
		7: "5840,33",
		8: "5290,98",
		9: "4867,03",
		10: "4530,84",
		11: "4258,44",
		12: "4033,85",
		v1: 24900,
		v2: "30421,5"
	}, {
		3: "11848,98",
		4: "9218,9",
		5: "7647,04",
		6: "6604,26",
		7: "5863,79",
		8: "5312,23",
		9: "4886,58",
		10: "4549,04",
		11: "4275,54",
		12: "4050,05",
		v1: 25e3,
		v2: "30543,68"
	}, {
		3: "11896,37",
		4: "9255,77",
		5: "7677,63",
		6: "6630,68",
		7: "5887,24",
		8: "5333,48",
		9: "4906,12",
		10: "4567,23",
		11: "4292,64",
		12: "4066,25",
		v1: 25100,
		v2: "30665,85"
	}, {
		3: "11943,77",
		4: "9292,65",
		5: "7708,22",
		6: "6657,1",
		7: "5910,7",
		8: "5354,73",
		9: "4925,67",
		10: "4585,43",
		11: "4309,75",
		12: "4082,46",
		v1: 25200,
		v2: "30788,03"
	}, {
		3: "11991,16",
		4: "9329,52",
		5: "7738,8",
		6: "6683,51",
		7: "5934,15",
		8: "5375,97",
		9: "4945,22",
		10: "4603,62",
		11: "4326,85",
		12: "4098,65",
		v1: 25300,
		v2: "30910,2"
	}, {
		3: "12038,56",
		4: "9366,4",
		5: "7769,39",
		6: "6709,93",
		7: "5957,61",
		8: "5397,22",
		9: "4964,76",
		10: "4621,82",
		11: "4343,95",
		12: "4114,86",
		v1: 25400,
		v2: "31032,38"
	}, {
		3: "12085,96",
		4: "9403,28",
		5: "7799,98",
		6: "6736,35",
		7: "5981,06",
		8: "5418,47",
		9: "4984,31",
		10: "4640,02",
		11: "4361,05",
		12: "4131,06",
		v1: 25500,
		v2: "31154,55"
	}, {
		3: "12133,35",
		4: "9440,15",
		5: "7830,57",
		6: "6762,76",
		7: "6004,52",
		8: "5439,72",
		9: "5003,86",
		10: "4658,21",
		11: "4378,15",
		12: "4147,26",
		v1: 25600,
		v2: "31276,73"
	}, {
		3: "12180,75",
		4: "9477,03",
		5: "7861,16",
		6: "6789,18",
		7: "6027,97",
		8: "5460,97",
		9: "5023,4",
		10: "4676,41",
		11: "4395,26",
		12: "4163,46",
		v1: 25700,
		v2: "31398,9"
	}, {
		3: "12228,15",
		4: "9513,9",
		5: "7891,75",
		6: "6815,6",
		7: "6051,43",
		8: "5482,22",
		9: "5042,95",
		10: "4694,6",
		11: "4412,36",
		12: "4179,66",
		v1: 25800,
		v2: "31521,08"
	}, {
		3: "12275,54",
		4: "9550,78",
		5: "7922,33",
		6: "6842,01",
		7: "6074,89",
		8: "5503,47",
		9: "5062,49",
		10: "4712,8",
		11: "4429,46",
		12: "4195,86",
		v1: 25900,
		v2: "31643,25"
	}, {
		3: "12322,93",
		4: "9587,65",
		5: "7952,92",
		6: "6868,43",
		7: "6098,34",
		8: "5524,72",
		9: "5082,04",
		10: 4731,
		11: "4446,56",
		12: "4212,06",
		v1: 26e3,
		v2: "31765,42"
	}, {
		3: "12370,33",
		4: "9624,53",
		5: "7983,51",
		6: "6894,85",
		7: "6121,8",
		8: "5545,97",
		9: "5101,59",
		10: "4749,19",
		11: "4463,67",
		12: "4228,26",
		v1: 26100,
		v2: "31887,6"
	}, {
		3: "12417,73",
		4: "9661,4",
		5: "8014,1",
		6: "6921,27",
		7: "6145,25",
		8: "5567,21",
		9: "5121,13",
		10: "4767,39",
		11: "4480,77",
		12: "4244,46",
		v1: 26200,
		v2: "32009,77"
	}, {
		3: "12465,12",
		4: "9698,28",
		5: "8044,69",
		6: "6947,68",
		7: "6168,71",
		8: "5588,46",
		9: "5140,68",
		10: "4785,58",
		11: "4497,87",
		12: "4260,66",
		v1: 26300,
		v2: "32131,95"
	}, {
		3: "12512,52",
		4: "9735,16",
		5: "8075,27",
		6: "6974,1",
		7: "6192,16",
		8: "5609,71",
		9: "5160,22",
		10: "4803,78",
		11: "4514,97",
		12: "4276,86",
		v1: 26400,
		v2: "32254,12"
	}, {
		3: "12559,92",
		4: "9772,03",
		5: "8105,86",
		6: "7000,52",
		7: "6215,62",
		8: "5630,96",
		9: "5179,77",
		10: "4821,98",
		11: "4532,07",
		12: "4293,06",
		v1: 26500,
		v2: "32376,3"
	}, {
		3: "12607,31",
		4: "9808,91",
		5: "8136,45",
		6: "7026,93",
		7: "6239,07",
		8: "5652,21",
		9: "5199,32",
		10: "4840,17",
		11: "4549,18",
		12: "4309,26",
		v1: 26600,
		v2: "32498,47"
	}, {
		3: "12654,71",
		4: "9845,78",
		5: "8167,04",
		6: "7053,35",
		7: "6262,53",
		8: "5673,46",
		9: "5218,86",
		10: "4858,37",
		11: "4566,28",
		12: "4325,46",
		v1: 26700,
		v2: "32620,65"
	}, {
		3: "12702,1",
		4: "9882,66",
		5: "8197,62",
		6: "7079,77",
		7: "6285,98",
		8: "5694,71",
		9: "5238,41",
		10: "4876,56",
		11: "4583,38",
		12: "4341,66",
		v1: 26800,
		v2: "32742,82"
	}, {
		3: "12749,5",
		4: "9919,54",
		5: "8228,21",
		6: "7106,19",
		7: "6309,44",
		8: "5715,96",
		9: "5257,96",
		10: "4894,76",
		11: "4600,48",
		12: "4357,86",
		v1: 26900,
		v2: 32865
	}, {
		3: "12796,89",
		4: "9956,41",
		5: "8258,8",
		6: "7132,6",
		7: "6332,89",
		8: "5737,21",
		9: "5277,5",
		10: "4912,96",
		11: "4617,58",
		12: "4374,06",
		v1: 27e3,
		v2: "32987,17"
	}, {
		3: "12844,29",
		4: "9993,29",
		5: "8289,39",
		6: "7159,02",
		7: "6356,35",
		8: "5758,45",
		9: "5297,05",
		10: "4931,15",
		11: "4634,69",
		12: "4390,26",
		v1: 27100,
		v2: "33109,35"
	}, {
		3: "12891,69",
		4: "10030,16",
		5: "8319,98",
		6: "7185,44",
		7: "6379,8",
		8: "5779,7",
		9: "5316,6",
		10: "4949,35",
		11: "4651,79",
		12: "4406,46",
		v1: 27200,
		v2: "33231,52"
	}, {
		3: "12939,08",
		4: "10067,04",
		5: "8350,57",
		6: "7211,85",
		7: "6403,26",
		8: "5800,95",
		9: "5336,14",
		10: "4967,55",
		11: "4668,89",
		12: "4422,66",
		v1: 27300,
		v2: "33353,7"
	}, {
		3: "12986,48",
		4: "10103,91",
		5: "8381,15",
		6: "7238,27",
		7: "6426,71",
		8: "5822,2",
		9: "5355,69",
		10: "4985,74",
		11: "4685,99",
		12: "4438,86",
		v1: 27400,
		v2: "33475,87"
	}, {
		3: "13033,88",
		4: "10140,79",
		5: "8411,74",
		6: "7264,69",
		7: "6450,17",
		8: "5843,45",
		9: "5375,24",
		10: "5003,94",
		11: "4703,1",
		12: "4455,06",
		v1: 27500,
		v2: "33598,05"
	}, {
		3: "13081,27",
		4: "10177,66",
		5: "8442,33",
		6: "7291,1",
		7: "6473,62",
		8: "5864,7",
		9: "5394,78",
		10: "5022,13",
		11: "4720,2",
		12: "4471,26",
		v1: 27600,
		v2: "33720,22"
	}, {
		3: "13128,66",
		4: "10214,54",
		5: "8472,92",
		6: "7317,52",
		7: "6497,08",
		8: "5885,95",
		9: "5414,33",
		10: "5040,33",
		11: "4737,3",
		12: "4487,46",
		v1: 27700,
		v2: "33842,39"
	}, {
		3: "13176,06",
		4: "10251,41",
		5: "8503,51",
		6: "7343,94",
		7: "6520,53",
		8: "5907,2",
		9: "5433,87",
		10: "5058,53",
		11: "4754,4",
		12: "4503,66",
		v1: 27800,
		v2: "33964,57"
	}, {
		3: "13223,46",
		4: "10288,29",
		5: "8534,09",
		6: "7370,36",
		7: "6543,99",
		8: "5928,44",
		9: "5453,42",
		10: "5076,72",
		11: "4771,5",
		12: "4519,86",
		v1: 27900,
		v2: "34086,74"
	}, {
		3: "13270,85",
		4: "10325,17",
		5: "8564,68",
		6: "7396,77",
		7: "6567,44",
		8: "5949,69",
		9: "5472,97",
		10: "5094,92",
		11: "4788,61",
		12: "4536,06",
		v1: 28e3,
		v2: "34208,92"
	}, {
		3: "13318,25",
		4: "10362,04",
		5: "8595,27",
		6: "7423,19",
		7: "6590,9",
		8: "5970,94",
		9: "5492,51",
		10: "5113,11",
		11: "4805,71",
		12: "4552,26",
		v1: 28100,
		v2: "34331,09"
	}, {
		3: "13365,65",
		4: "10398,92",
		5: "8625,86",
		6: "7449,61",
		7: "6614,35",
		8: "5992,19",
		9: "5512,06",
		10: "5131,31",
		11: "4822,81",
		12: "4568,46",
		v1: 28200,
		v2: "34453,27"
	}, {
		3: "13413,04",
		4: "10435,79",
		5: "8656,45",
		6: "7476,02",
		7: "6637,81",
		8: "6013,44",
		9: "5531,6",
		10: "5149,51",
		11: "4839,91",
		12: "4584,66",
		v1: 28300,
		v2: "34575,44"
	}, {
		3: "13460,44",
		4: "10472,67",
		5: "8687,04",
		6: "7502,44",
		7: "6661,26",
		8: "6034,69",
		9: "5551,15",
		10: "5167,7",
		11: "4857,02",
		12: "4600,86",
		v1: 28400,
		v2: "34697,62"
	}, {
		3: "13507,83",
		4: "10509,54",
		5: "8717,62",
		6: "7528,86",
		7: "6684,72",
		8: "6055,94",
		9: "5570,7",
		10: "5185,9",
		11: "4874,12",
		12: "4617,06",
		v1: 28500,
		v2: "34819,79"
	}, {
		3: "13555,23",
		4: "10546,42",
		5: "8748,21",
		6: "7555,28",
		7: "6708,17",
		8: "6077,19",
		9: "5590,24",
		10: "5204,1",
		11: "4891,22",
		12: "4633,26",
		v1: 28600,
		v2: "34941,97"
	}, {
		3: "13602,62",
		4: "10583,29",
		5: "8778,8",
		6: "7581,69",
		7: "6731,63",
		8: "6098,44",
		9: "5609,79",
		10: "5222,29",
		11: "4908,32",
		12: "4649,46",
		v1: 28700,
		v2: "35064,14"
	}, {
		3: "13650,02",
		4: "10620,17",
		5: "8809,39",
		6: "7608,11",
		7: "6755,09",
		8: "6119,69",
		9: "5629,34",
		10: "5240,49",
		11: "4925,42",
		12: "4665,66",
		v1: 28800,
		v2: "35186,32"
	}, {
		3: "13697,42",
		4: "10657,05",
		5: "8839,98",
		6: "7634,53",
		7: "6778,54",
		8: "6140,93",
		9: "5648,88",
		10: "5258,68",
		11: "4942,53",
		12: "4681,86",
		v1: 28900,
		v2: "35308,49"
	}, {
		3: "13744,81",
		4: "10693,92",
		5: "8870,57",
		6: "7660,94",
		7: 6802,
		8: "6162,18",
		9: "5668,43",
		10: "5276,88",
		11: "4959,63",
		12: "4698,06",
		v1: 29e3,
		v2: "35430,67"
	}, {
		3: "13792,21",
		4: "10730,8",
		5: "8901,15",
		6: "7687,36",
		7: "6825,45",
		8: "6183,43",
		9: "5687,98",
		10: "5295,08",
		11: "4976,73",
		12: "4714,26",
		v1: 29100,
		v2: "35552,84"
	}, {
		3: "13839,61",
		4: "10767,67",
		5: "8931,74",
		6: "7713,78",
		7: "6848,91",
		8: "6204,68",
		9: "5707,52",
		10: "5313,27",
		11: "4993,83",
		12: "4730,46",
		v1: 29200,
		v2: "35675,02"
	}, {
		3: 13887,
		4: "10804,55",
		5: "8962,33",
		6: "7740,19",
		7: "6872,36",
		8: "6225,93",
		9: "5727,07",
		10: "5331,47",
		11: "5010,93",
		12: "4746,66",
		v1: 29300,
		v2: "35797,19"
	}, {
		3: "13934,39",
		4: "10841,42",
		5: "8992,92",
		6: "7766,61",
		7: "6895,81",
		8: "6247,18",
		9: "5746,61",
		10: "5349,66",
		11: "5028,04",
		12: "4762,86",
		v1: 29400,
		v2: "35919,36"
	}, {
		3: "13981,79",
		4: "10878,3",
		5: "9023,51",
		6: "7793,03",
		7: "6919,27",
		8: "6268,43",
		9: "5766,16",
		10: "5367,86",
		11: "5045,14",
		12: "4779,06",
		v1: 29500,
		v2: "36041,54"
	}, {
		3: "14029,19",
		4: "10915,17",
		5: "9054,09",
		6: "7819,44",
		7: "6942,73",
		8: "6289,68",
		9: "5785,71",
		10: "5386,06",
		11: "5062,24",
		12: "4795,26",
		v1: 29600,
		v2: "36163,71"
	}, {
		3: "14076,58",
		4: "10952,05",
		5: "9084,68",
		6: "7845,86",
		7: "6966,18",
		8: "6310,93",
		9: "5805,25",
		10: "5404,25",
		11: "5079,34",
		12: "4811,46",
		v1: 29700,
		v2: "36285,89"
	}, {
		3: "14123,98",
		4: "10988,93",
		5: "9115,27",
		6: "7872,28",
		7: "6989,64",
		8: "6332,17",
		9: "5824,8",
		10: "5422,45",
		11: "5096,44",
		12: "4827,66",
		v1: 29800,
		v2: "36408,06"
	}, {
		3: "14171,38",
		4: "11025,8",
		5: "9145,86",
		6: "7898,7",
		7: "7013,09",
		8: "6353,42",
		9: "5844,35",
		10: "5440,65",
		11: "5113,55",
		12: "4843,87",
		v1: 29900,
		v2: "36530,24"
	}, {
		3: "14218,77",
		4: "11062,68",
		5: "9176,45",
		6: "7925,11",
		7: "7036,55",
		8: "6374,67",
		9: "5863,89",
		10: "5458,84",
		11: "5130,65",
		12: "4860,06",
		v1: 3e4,
		v2: "36652,41"
	}, {
		3: "14266,17",
		4: "11099,55",
		5: "9207,04",
		6: "7951,53",
		7: 7060,
		8: "6395,92",
		9: "5883,44",
		10: "5477,04",
		11: "5147,75",
		12: "4876,27",
		v1: 30100,
		v2: "36774,59"
	}, {
		3: "14313,56",
		4: "11136,43",
		5: "9237,62",
		6: "7977,95",
		7: "7083,46",
		8: "6417,17",
		9: "5902,98",
		10: "5495,23",
		11: "5164,85",
		12: "4892,47",
		v1: 30200,
		v2: "36896,76"
	}, {
		3: "14360,96",
		4: "11173,31",
		5: "9268,21",
		6: "8004,37",
		7: "7106,91",
		8: "6438,42",
		9: "5922,53",
		10: "5513,43",
		11: "5181,96",
		12: "4908,67",
		v1: 30300,
		v2: "37018,94"
	}, {
		3: "14408,35",
		4: "11210,18",
		5: "9298,8",
		6: "8030,78",
		7: "7130,37",
		8: "6459,67",
		9: "5942,08",
		10: "5531,63",
		11: "5199,06",
		12: "4924,87",
		v1: 30400,
		v2: "37141,11"
	}, {
		3: "14455,75",
		4: "11247,06",
		5: "9329,39",
		6: "8057,2",
		7: "7153,82",
		8: "6480,92",
		9: "5961,62",
		10: "5549,82",
		11: "5216,16",
		12: "4941,07",
		v1: 30500,
		v2: "37263,29"
	}, {
		3: "14503,15",
		4: "11283,93",
		5: "9359,98",
		6: "8083,62",
		7: "7177,28",
		8: "6502,17",
		9: "5981,17",
		10: "5568,02",
		11: "5233,26",
		12: "4957,27",
		v1: 30600,
		v2: "37385,46"
	}, {
		3: "14550,54",
		4: "11320,81",
		5: "9390,56",
		6: "8110,03",
		7: "7200,73",
		8: "6523,42",
		9: "6000,72",
		10: "5586,22",
		11: "5250,37",
		12: "4973,47",
		v1: 30700,
		v2: "37507,64"
	}, {
		3: "14597,94",
		4: "11357,68",
		5: "9421,15",
		6: "8136,45",
		7: "7224,19",
		8: "6544,66",
		9: "6020,26",
		10: "5604,41",
		11: "5267,47",
		12: "4989,67",
		v1: 30800,
		v2: "37629,81"
	}, {
		3: "14645,34",
		4: "11394,56",
		5: "9451,74",
		6: "8162,87",
		7: "7247,64",
		8: "6565,91",
		9: "6039,81",
		10: "5622,61",
		11: "5284,57",
		12: "5005,87",
		v1: 30900,
		v2: "37751,99"
	}, {
		3: "14692,73",
		4: "11431,43",
		5: "9482,33",
		6: "8189,28",
		7: "7271,1",
		8: "6587,16",
		9: "6059,36",
		10: "5640,8",
		11: "5301,67",
		12: "5022,07",
		v1: 31e3,
		v2: "37874,16"
	}, {
		3: "14740,13",
		4: "11468,31",
		5: "9512,91",
		6: "8215,7",
		7: "7294,55",
		8: "6608,41",
		9: "6078,9",
		10: 5659,
		11: "5318,77",
		12: "5038,27",
		v1: 31100,
		v2: "37996,33"
	}, {
		3: "14787,52",
		4: "11505,18",
		5: "9543,5",
		6: "8242,12",
		7: "7318,01",
		8: "6629,66",
		9: "6098,45",
		10: "5677,2",
		11: "5335,88",
		12: "5054,47",
		v1: 31200,
		v2: "38118,51"
	}, {
		3: "14834,92",
		4: "11542,06",
		5: "9574,09",
		6: "8268,53",
		7: "7341,46",
		8: "6650,91",
		9: "6117,99",
		10: "5695,39",
		11: "5352,98",
		12: "5070,67",
		v1: 31300,
		v2: "38240,68"
	}, {
		3: "14882,32",
		4: "11578,94",
		5: "9604,68",
		6: "8294,95",
		7: "7364,92",
		8: "6672,16",
		9: "6137,54",
		10: "5713,59",
		11: "5370,08",
		12: "5086,87",
		v1: 31400,
		v2: "38362,86"
	}, {
		3: "14929,71",
		4: "11615,81",
		5: "9635,27",
		6: "8321,37",
		7: "7388,37",
		8: "6693,41",
		9: "6157,09",
		10: "5731,78",
		11: "5387,18",
		12: "5103,07",
		v1: 31500,
		v2: "38485,03"
	}, {
		3: "14977,11",
		4: "11652,69",
		5: "9665,86",
		6: "8347,79",
		7: "7411,83",
		8: "6714,66",
		9: "6176,63",
		10: "5749,98",
		11: "5404,28",
		12: "5119,27",
		v1: 31600,
		v2: "38607,21"
	}, {
		3: "15024,5",
		4: "11689,56",
		5: "9696,44",
		6: "8374,2",
		7: "7435,28",
		8: "6735,9",
		9: "6196,18",
		10: "5768,18",
		11: "5421,39",
		12: "5135,47",
		v1: 31700,
		v2: "38729,38"
	}, {
		3: "15071,9",
		4: "11726,44",
		5: "9727,03",
		6: "8400,62",
		7: "7458,74",
		8: "6757,15",
		9: "6215,73",
		10: "5786,37",
		11: "5438,49",
		12: "5151,67",
		v1: 31800,
		v2: "38851,56"
	}, {
		3: "15119,29",
		4: "11763,31",
		5: "9757,62",
		6: "8427,04",
		7: "7482,19",
		8: "6778,4",
		9: "6235,27",
		10: "5804,57",
		11: "5455,59",
		12: "5167,87",
		v1: 31900,
		v2: "38973,73"
	}, {
		3: "15166,69",
		4: "11800,19",
		5: "9788,21",
		6: "8453,46",
		7: "7505,65",
		8: "6799,65",
		9: "6254,82",
		10: "5822,76",
		11: "5472,69",
		12: "5184,07",
		v1: 32e3,
		v2: "39095,91"
	}, {
		3: "15214,09",
		4: "11837,06",
		5: "9818,8",
		6: "8479,87",
		7: "7529,1",
		8: "6820,9",
		9: "6274,36",
		10: "5840,96",
		11: "5489,79",
		12: "5200,27",
		v1: 32100,
		v2: "39218,08"
	}, {
		3: "15261,48",
		4: "11873,94",
		5: "9849,39",
		6: "8506,29",
		7: "7552,56",
		8: "6842,15",
		9: "6293,91",
		10: "5859,16",
		11: "5506,9",
		12: "5216,47",
		v1: 32200,
		v2: "39340,26"
	}, {
		3: "15308,88",
		4: "11910,82",
		5: "9879,97",
		6: "8532,71",
		7: "7576,01",
		8: "6863,4",
		9: "6313,46",
		10: "5877,35",
		11: 5524,
		12: "5232,67",
		v1: 32300,
		v2: "39462,43"
	}, {
		3: "15356,28",
		4: "11947,69",
		5: "9910,56",
		6: "8559,12",
		7: "7599,47",
		8: "6884,65",
		9: 6333,
		10: "5895,55",
		11: "5541,1",
		12: "5248,87",
		v1: 32400,
		v2: "39584,61"
	}, {
		3: "15403,67",
		4: "11984,57",
		5: "9941,15",
		6: "8585,54",
		7: "7622,93",
		8: "6905,9",
		9: "6352,55",
		10: "5913,74",
		11: "5558,2",
		12: "5265,07",
		v1: 32500,
		v2: "39706,78"
	}, {
		3: "15451,07",
		4: "12021,44",
		5: "9971,74",
		6: "8611,96",
		7: "7646,38",
		8: "6927,15",
		9: "6372,1",
		10: "5931,94",
		11: "5575,31",
		12: "5281,27",
		v1: 32600,
		v2: "39828,96"
	}, {
		3: "15498,46",
		4: "12058,32",
		5: "10002,33",
		6: "8638,37",
		7: "7669,84",
		8: "6948,39",
		9: "6391,64",
		10: "5950,14",
		11: "5592,41",
		12: "5297,47",
		v1: 32700,
		v2: "39951,13"
	}, {
		3: "15545,86",
		4: "12095,19",
		5: "10032,91",
		6: "8664,79",
		7: "7693,29",
		8: "6969,64",
		9: "6411,19",
		10: "5968,33",
		11: "5609,51",
		12: "5313,67",
		v1: 32800,
		v2: "40073,3"
	}, {
		3: "15593,25",
		4: "12132,07",
		5: "10063,5",
		6: "8691,21",
		7: "7716,75",
		8: "6990,89",
		9: "6430,74",
		10: "5986,53",
		11: "5626,61",
		12: "5329,87",
		v1: 32900,
		v2: "40195,48"
	}, {
		3: "15640,65",
		4: "12168,94",
		5: "10094,09",
		6: "8717,62",
		7: "7740,2",
		8: "7012,14",
		9: "6450,28",
		10: "6004,73",
		11: "5643,71",
		12: "5346,07",
		v1: 33e3,
		v2: "40317,65"
	}, {
		3: "15688,05",
		4: "12205,82",
		5: "10124,68",
		6: "8744,04",
		7: "7763,66",
		8: "7033,39",
		9: "6469,83",
		10: "6022,92",
		11: "5660,82",
		12: "5362,27",
		v1: 33100,
		v2: "40439,83"
	}, {
		3: "15735,44",
		4: "12242,7",
		5: "10155,27",
		6: "8770,46",
		7: "7787,11",
		8: "7054,64",
		9: "6489,37",
		10: "6041,12",
		11: "5677,92",
		12: "5378,47",
		v1: 33200,
		v2: 40562
	}, {
		3: "15782,84",
		4: "12279,57",
		5: "10185,86",
		6: "8796,88",
		7: "7810,57",
		8: "7075,89",
		9: "6508,92",
		10: "6059,31",
		11: "5695,02",
		12: "5394,67",
		v1: 33300,
		v2: "40684,18"
	}, {
		3: "15830,23",
		4: "12316,45",
		5: "10216,44",
		6: "8823,29",
		7: "7834,02",
		8: "7097,14",
		9: "6528,47",
		10: "6077,51",
		11: "5712,12",
		12: "5410,87",
		v1: 33400,
		v2: "40806,35"
	}, {
		3: "15877,63",
		4: "12353,32",
		5: "10247,03",
		6: "8849,71",
		7: "7857,48",
		8: "7118,38",
		9: "6548,01",
		10: "6095,71",
		11: "5729,23",
		12: "5427,07",
		v1: 33500,
		v2: "40928,53"
	}, {
		3: "15925,02",
		4: "12390,2",
		5: "10277,62",
		6: "8876,13",
		7: "7880,93",
		8: "7139,63",
		9: "6567,56",
		10: "6113,9",
		11: "5746,33",
		12: "5443,27",
		v1: 33600,
		v2: "41050,7"
	}, {
		3: "15972,42",
		4: "12427,08",
		5: "10308,21",
		6: "8902,55",
		7: "7904,39",
		8: "7160,88",
		9: "6587,11",
		10: "6132,1",
		11: "5763,43",
		12: "5459,47",
		v1: 33700,
		v2: "41172,88"
	}, {
		3: "16019,82",
		4: "12463,95",
		5: "10338,8",
		6: "8928,96",
		7: "7927,84",
		8: "7182,13",
		9: "6606,65",
		10: "6150,29",
		11: "5780,53",
		12: "5475,67",
		v1: 33800,
		v2: "41295,05"
	}, {
		3: "16067,21",
		4: "12500,83",
		5: "10369,39",
		6: "8955,38",
		7: "7951,3",
		8: "7203,38",
		9: "6626,2",
		10: "6168,49",
		11: "5797,63",
		12: "5491,87",
		v1: 33900,
		v2: "41417,23"
	}, {
		3: "16114,61",
		4: "12537,7",
		5: "10399,97",
		6: "8981,8",
		7: "7974,75",
		8: "7224,63",
		9: "6645,74",
		10: "6186,69",
		11: "5814,74",
		12: "5508,07",
		v1: 34e3,
		v2: "41539,4"
	}, {
		3: "16162,01",
		4: "12574,58",
		5: "10430,56",
		6: "9008,21",
		7: "7998,21",
		8: "7245,88",
		9: "6665,29",
		10: "6204,88",
		11: "5831,84",
		12: "5524,27",
		v1: 34100,
		v2: "41661,58"
	}, {
		3: "16209,4",
		4: "12611,45",
		5: "10461,15",
		6: "9034,63",
		7: "8021,66",
		8: "7267,13",
		9: "6684,84",
		10: "6223,08",
		11: "5848,94",
		12: "5540,47",
		v1: 34200,
		v2: "41783,75"
	}, {
		3: "16256,8",
		4: "12648,33",
		5: "10491,74",
		6: "9061,05",
		7: "8045,12",
		8: "7288,38",
		9: "6704,38",
		10: "6241,28",
		11: "5866,04",
		12: "5556,68",
		v1: 34300,
		v2: "41905,93"
	}, {
		3: "16304,19",
		4: "12685,2",
		5: "10522,33",
		6: "9087,46",
		7: "8068,57",
		8: "7309,62",
		9: "6723,93",
		10: "6259,47",
		11: "5883,14",
		12: "5572,87",
		v1: 34400,
		v2: "42028,1"
	}, {
		3: "16351,59",
		4: "12722,08",
		5: "10552,91",
		6: "9113,88",
		7: "8092,03",
		8: "7330,87",
		9: "6743,48",
		10: "6277,67",
		11: "5900,25",
		12: "5589,07",
		v1: 34500,
		v2: "42150,27"
	}, {
		3: "16398,98",
		4: "12758,96",
		5: "10583,5",
		6: "9140,3",
		7: "8115,48",
		8: "7352,12",
		9: "6763,02",
		10: "6295,86",
		11: "5917,35",
		12: "5605,28",
		v1: 34600,
		v2: "42272,45"
	}, {
		3: "16446,38",
		4: "12795,83",
		5: "10614,09",
		6: "9166,71",
		7: "8138,94",
		8: "7373,37",
		9: "6782,57",
		10: "6314,06",
		11: "5934,45",
		12: "5621,47",
		v1: 34700,
		v2: "42394,62"
	}, {
		3: "16493,78",
		4: "12832,71",
		5: "10644,68",
		6: "9193,13",
		7: "8162,39",
		8: "7394,62",
		9: "6802,12",
		10: "6332,26",
		11: "5951,55",
		12: "5637,68",
		v1: 34800,
		v2: "42516,8"
	}, {
		3: "16541,17",
		4: "12869,58",
		5: "10675,27",
		6: "9219,55",
		7: "8185,85",
		8: "7415,87",
		9: "6821,66",
		10: "6350,45",
		11: "5968,65",
		12: "5653,88",
		v1: 34900,
		v2: "42638,97"
	}, {
		3: "16588,57",
		4: "12906,46",
		5: "10705,85",
		6: "9245,97",
		7: "8209,3",
		8: "7437,12",
		9: "6841,21",
		10: "6368,65",
		11: "5985,76",
		12: "5670,08",
		v1: 35e3,
		v2: "42761,15"
	}, {
		3: "16635,96",
		4: "12943,33",
		5: "10736,44",
		6: "9272,38",
		7: "8232,76",
		8: "7458,37",
		9: "6860,75",
		10: "6386,84",
		11: "6002,86",
		12: "5686,28",
		v1: 35100,
		v2: "42883,32"
	}, {
		3: "16683,36",
		4: "12980,21",
		5: "10767,03",
		6: "9298,8",
		7: "8256,22",
		8: "7479,62",
		9: "6880,3",
		10: "6405,04",
		11: "6019,96",
		12: "5702,48",
		v1: 35200,
		v2: "43005,5"
	}, {
		3: "16730,75",
		4: "13017,08",
		5: "10797,62",
		6: "9325,22",
		7: "8279,67",
		8: "7500,86",
		9: "6899,85",
		10: "6423,24",
		11: "6037,06",
		12: "5718,68",
		v1: 35300,
		v2: "43127,67"
	}, {
		3: "16778,15",
		4: "13053,96",
		5: "10828,21",
		6: "9351,63",
		7: "8303,13",
		8: "7522,11",
		9: "6919,39",
		10: "6441,43",
		11: "6054,17",
		12: "5734,88",
		v1: 35400,
		v2: "43249,85"
	}, {
		3: "16825,55",
		4: "13090,83",
		5: "10858,79",
		6: "9378,05",
		7: "8326,58",
		8: "7543,36",
		9: "6938,94",
		10: "6459,63",
		11: "6071,27",
		12: "5751,08",
		v1: 35500,
		v2: "43372,02"
	}, {
		3: "16872,94",
		4: "13127,71",
		5: "10889,38",
		6: "9404,47",
		7: "8350,04",
		8: "7564,61",
		9: "6958,49",
		10: "6477,83",
		11: "6088,37",
		12: "5767,28",
		v1: 35600,
		v2: "43494,2"
	}, {
		3: "16920,34",
		4: "13164,59",
		5: "10919,97",
		6: "9430,89",
		7: "8373,49",
		8: "7585,86",
		9: "6978,03",
		10: "6496,02",
		11: "6105,47",
		12: "5783,48",
		v1: 35700,
		v2: "43616,37"
	}, {
		3: "16967,74",
		4: "13201,46",
		5: "10950,56",
		6: "9457,3",
		7: "8396,95",
		8: "7607,11",
		9: "6997,58",
		10: "6514,22",
		11: "6122,58",
		12: "5799,68",
		v1: 35800,
		v2: "43738,55"
	}, {
		3: "17015,13",
		4: "13238,34",
		5: "10981,15",
		6: "9483,72",
		7: "8420,4",
		8: "7628,36",
		9: "7017,12",
		10: "6532,41",
		11: "6139,68",
		12: "5815,88",
		v1: 35900,
		v2: "43860,72"
	}, {
		3: "17062,53",
		4: "13275,21",
		5: "11011,74",
		6: "9510,14",
		7: "8443,86",
		8: "7649,61",
		9: "7036,67",
		10: "6550,61",
		11: "6156,78",
		12: "5832,08",
		v1: 36e3,
		v2: "43982,9"
	}, {
		3: "17109,92",
		4: "13312,09",
		5: "11042,32",
		6: "9536,55",
		7: "8467,31",
		8: "7670,86",
		9: "7056,22",
		10: "6568,81",
		11: "6173,88",
		12: "5848,28",
		v1: 36100,
		v2: "44105,07"
	}, {
		3: "17157,32",
		4: "13348,96",
		5: "11072,91",
		6: "9562,97",
		7: "8490,77",
		8: "7692,1",
		9: "7075,76",
		10: 6587,
		11: "6190,98",
		12: "5864,48",
		v1: 36200,
		v2: "44227,24"
	}, {
		3: "17204,71",
		4: "13385,84",
		5: "11103,5",
		6: "9589,39",
		7: "8514,22",
		8: "7713,35",
		9: "7095,31",
		10: "6605,2",
		11: "6208,09",
		12: "5880,68",
		v1: 36300,
		v2: "44349,42"
	}, {
		3: "17252,11",
		4: "13422,71",
		5: "11134,09",
		6: "9615,8",
		7: "8537,68",
		8: "7734,6",
		9: "7114,86",
		10: "6623,39",
		11: "6225,19",
		12: "5896,88",
		v1: 36400,
		v2: "44471,59"
	}, {
		3: "17299,51",
		4: "13459,59",
		5: "11164,68",
		6: "9642,22",
		7: "8561,13",
		8: "7755,85",
		9: "7134,4",
		10: "6641,59",
		11: "6242,29",
		12: "5913,08",
		v1: 36500,
		v2: "44593,77"
	}, {
		3: "17346,9",
		4: "13496,47",
		5: "11195,26",
		6: "9668,64",
		7: "8584,59",
		8: "7777,1",
		9: "7153,95",
		10: "6659,79",
		11: "6259,39",
		12: "5929,28",
		v1: 36600,
		v2: "44715,94"
	}, {
		3: "17394,3",
		4: "13533,34",
		5: "11225,85",
		6: "9695,06",
		7: "8608,04",
		8: "7798,35",
		9: "7173,5",
		10: "6677,98",
		11: "6276,49",
		12: "5945,48",
		v1: 36700,
		v2: "44838,12"
	}, {
		3: "17441,69",
		4: "13570,22",
		5: "11256,44",
		6: "9721,47",
		7: "8631,5",
		8: "7819,6",
		9: "7193,04",
		10: "6696,18",
		11: "6293,6",
		12: "5961,68",
		v1: 36800,
		v2: "44960,29"
	}, {
		3: "17489,09",
		4: "13607,09",
		5: "11287,03",
		6: "9747,89",
		7: "8654,95",
		8: "7840,85",
		9: "7212,59",
		10: "6714,38",
		11: "6310,7",
		12: "5977,88",
		v1: 36900,
		v2: "45082,47"
	}, {
		3: "17536,48",
		4: "13643,97",
		5: "11317,62",
		6: "9774,31",
		7: "8678,41",
		8: "7862,1",
		9: "7232,13",
		10: "6732,57",
		11: "6327,8",
		12: "5994,08",
		v1: 37e3,
		v2: "45204,64"
	}, {
		3: "17583,88",
		4: "13680,85",
		5: "11348,21",
		6: "9800,72",
		7: "8701,86",
		8: "7883,35",
		9: "7251,68",
		10: "6750,77",
		11: "6344,9",
		12: "6010,28",
		v1: 37100,
		v2: "45326,82"
	}, {
		3: "17631,28",
		4: "13717,72",
		5: "11378,79",
		6: "9827,14",
		7: "8725,32",
		8: "7904,59",
		9: "7271,23",
		10: "6768,96",
		11: 6362,
		12: "6026,48",
		v1: 37200,
		v2: "45448,99"
	}, {
		3: "17678,67",
		4: "13754,6",
		5: "11409,38",
		6: "9853,56",
		7: "8748,77",
		8: "7925,84",
		9: "7290,77",
		10: "6787,16",
		11: "6379,11",
		12: "6042,68",
		v1: 37300,
		v2: "45571,17"
	}, {
		3: "17726,07",
		4: "13791,47",
		5: "11439,97",
		6: "9879,97",
		7: "8772,23",
		8: "7947,09",
		9: "7310,32",
		10: "6805,36",
		11: "6396,21",
		12: "6058,88",
		v1: 37400,
		v2: "45693,34"
	}, {
		3: "17773,47",
		4: "13828,35",
		5: "11470,56",
		6: "9906,39",
		7: "8795,68",
		8: "7968,34",
		9: "7329,87",
		10: "6823,55",
		11: "6413,31",
		12: "6075,08",
		v1: 37500,
		v2: "45815,52"
	}, {
		3: "17820,86",
		4: "13865,22",
		5: "11501,15",
		6: "9932,81",
		7: "8819,14",
		8: "7989,59",
		9: "7349,41",
		10: "6841,75",
		11: "6430,41",
		12: "6091,28",
		v1: 37600,
		v2: "45937,69"
	}, {
		3: "17868,26",
		4: "13902,1",
		5: "11531,74",
		6: "9959,23",
		7: "8842,59",
		8: "8010,84",
		9: "7368,96",
		10: "6859,94",
		11: "6447,52",
		12: "6107,48",
		v1: 37700,
		v2: "46059,87"
	}, {
		3: "17915,65",
		4: "13938,97",
		5: "11562,32",
		6: "9985,64",
		7: "8866,05",
		8: "8032,09",
		9: "7388,5",
		10: "6878,14",
		11: "6464,62",
		12: "6123,68",
		v1: 37800,
		v2: "46182,04"
	}, {
		3: "17963,05",
		4: "13975,85",
		5: "11592,91",
		6: "10012,06",
		7: "8889,5",
		8: "8053,34",
		9: "7408,05",
		10: "6896,34",
		11: "6481,72",
		12: "6139,88",
		v1: 37900,
		v2: "46304,22"
	}, {
		3: "18010,44",
		4: "14012,73",
		5: "11623,5",
		6: "10038,48",
		7: "8912,96",
		8: "8074,59",
		9: "7427,6",
		10: "6914,53",
		11: "6498,82",
		12: "6156,08",
		v1: 38e3,
		v2: "46426,39"
	}, {
		3: "18057,84",
		4: "14049,6",
		5: "11654,09",
		6: "10064,89",
		7: "8936,41",
		8: "8095,83",
		9: "7447,14",
		10: "6932,73",
		11: "6515,92",
		12: "6172,28",
		v1: 38100,
		v2: "46548,56"
	}, {
		3: "18105,24",
		4: "14086,48",
		5: "11684,68",
		6: "10091,31",
		7: "8959,87",
		8: "8117,08",
		9: "7466,69",
		10: "6950,93",
		11: "6533,03",
		12: "6188,48",
		v1: 38200,
		v2: "46670,74"
	}, {
		3: "18152,63",
		4: "14123,35",
		5: "11715,26",
		6: "10117,73",
		7: "8983,32",
		8: "8138,33",
		9: "7486,24",
		10: "6969,12",
		11: "6550,13",
		12: "6204,68",
		v1: 38300,
		v2: "46792,91"
	}, {
		3: "18200,03",
		4: "14160,23",
		5: "11745,85",
		6: "10144,15",
		7: "9006,78",
		8: "8159,58",
		9: "7505,78",
		10: "6987,32",
		11: "6567,23",
		12: "6220,88",
		v1: 38400,
		v2: "46915,09"
	}, {
		3: "18247,42",
		4: "14197,1",
		5: "11776,44",
		6: "10170,56",
		7: "9030,23",
		8: "8180,83",
		9: "7525,33",
		10: "7005,51",
		11: "6584,33",
		12: "6237,08",
		v1: 38500,
		v2: "47037,26"
	}, {
		3: "18294,82",
		4: "14233,98",
		5: "11807,03",
		6: "10196,98",
		7: "9053,69",
		8: "8202,08",
		9: "7544,88",
		10: "7023,71",
		11: "6601,44",
		12: "6253,28",
		v1: 38600,
		v2: "47159,44"
	}, {
		3: "18342,21",
		4: "14270,85",
		5: "11837,62",
		6: "10223,4",
		7: "9077,14",
		8: "8223,33",
		9: "7564,42",
		10: "7041,91",
		11: "6618,54",
		12: "6269,48",
		v1: 38700,
		v2: "47281,61"
	}, {
		3: "18389,61",
		4: "14307,73",
		5: "11868,2",
		6: "10249,81",
		7: "9100,6",
		8: "8244,58",
		9: "7583,97",
		10: "7060,1",
		11: "6635,64",
		12: "6285,68",
		v1: 38800,
		v2: "47403,79"
	}, {
		3: "18437,01",
		4: "14344,6",
		5: "11898,79",
		6: "10276,23",
		7: "9124,05",
		8: "8265,83",
		9: "7603,51",
		10: "7078,3",
		11: "6652,74",
		12: "6301,88",
		v1: 38900,
		v2: "47525,96"
	}, {
		3: "18484,4",
		4: "14381,48",
		5: "11929,38",
		6: "10302,65",
		7: "9147,51",
		8: "8287,08",
		9: "7623,06",
		10: "7096,49",
		11: "6669,84",
		12: "6318,09",
		v1: 39e3,
		v2: "47648,14"
	}, {
		3: "18531,8",
		4: "14418,36",
		5: "11959,97",
		6: "10329,06",
		7: "9170,97",
		8: "8308,32",
		9: "7642,61",
		10: "7114,69",
		11: "6686,95",
		12: "6334,28",
		v1: 39100,
		v2: "47770,31"
	}, {
		3: "18579,2",
		4: "14455,23",
		5: "11990,56",
		6: "10355,48",
		7: "9194,42",
		8: "8329,57",
		9: "7662,15",
		10: "7132,89",
		11: "6704,05",
		12: "6350,49",
		v1: 39200,
		v2: "47892,49"
	}, {
		3: "18626,59",
		4: "14492,11",
		5: "12021,14",
		6: "10381,9",
		7: "9217,88",
		8: "8350,82",
		9: "7681,7",
		10: "7151,08",
		11: "6721,15",
		12: "6366,69",
		v1: 39300,
		v2: "48014,66"
	}, {
		3: "18673,99",
		4: "14528,98",
		5: "12051,73",
		6: "10408,32",
		7: "9241,33",
		8: "8372,07",
		9: "7701,25",
		10: "7169,28",
		11: "6738,25",
		12: "6382,89",
		v1: 39400,
		v2: "48136,84"
	}, {
		3: "18721,38",
		4: "14565,86",
		5: "12082,32",
		6: "10434,73",
		7: "9264,79",
		8: "8393,32",
		9: "7720,79",
		10: "7187,47",
		11: "6755,35",
		12: "6399,09",
		v1: 39500,
		v2: "48259,01"
	}, {
		3: "18768,78",
		4: "14602,74",
		5: "12112,91",
		6: "10461,15",
		7: "9288,24",
		8: "8414,57",
		9: "7740,34",
		10: "7205,67",
		11: "6772,46",
		12: "6415,29",
		v1: 39600,
		v2: "48381,19"
	}, {
		3: "18816,17",
		4: "14639,61",
		5: "12143,5",
		6: "10487,57",
		7: "9311,7",
		8: "8435,82",
		9: "7759,88",
		10: "7223,87",
		11: "6789,56",
		12: "6431,49",
		v1: 39700,
		v2: "48503,36"
	}, {
		3: "18863,57",
		4: "14676,48",
		5: "12174,08",
		6: "10513,98",
		7: "9335,15",
		8: "8457,06",
		9: "7779,43",
		10: "7242,06",
		11: "6806,66",
		12: "6447,69",
		v1: 39800,
		v2: "48625,53"
	}, {
		3: "18910,97",
		4: "14713,36",
		5: "12204,67",
		6: "10540,4",
		7: "9358,61",
		8: "8478,31",
		9: "7798,98",
		10: "7260,26",
		11: "6823,76",
		12: "6463,89",
		v1: 39900,
		v2: "48747,71"
	}, {
		3: "18958,36",
		4: "14750,24",
		5: "12235,26",
		6: "10566,82",
		7: "9382,06",
		8: "8499,56",
		9: "7818,52",
		10: "7278,45",
		11: "6840,87",
		12: "6480,09",
		v1: 4e4,
		v2: "48869,88"
	}, {
		3: "19005,76",
		4: "14787,11",
		5: "12265,85",
		6: "10593,24",
		7: "9405,52",
		8: "8520,81",
		9: "7838,07",
		10: "7296,65",
		11: "6857,97",
		12: "6496,29",
		v1: 40100,
		v2: "48992,06"
	}, {
		3: "19053,15",
		4: "14823,99",
		5: "12296,44",
		6: "10619,65",
		7: "9428,97",
		8: "8542,06",
		9: "7857,62",
		10: "7314,85",
		11: "6875,07",
		12: "6512,49",
		v1: 40200,
		v2: "49114,23"
	}, {
		3: "19100,55",
		4: "14860,86",
		5: "12327,03",
		6: "10646,07",
		7: "9452,43",
		8: "8563,31",
		9: "7877,16",
		10: "7333,04",
		11: "6892,17",
		12: "6528,69",
		v1: 40300,
		v2: "49236,41"
	}, {
		3: "19147,95",
		4: "14897,74",
		5: "12357,61",
		6: "10672,49",
		7: "9475,88",
		8: "8584,56",
		9: "7896,71",
		10: "7351,24",
		11: "6909,27",
		12: "6544,89",
		v1: 40400,
		v2: "49358,58"
	}, {
		3: "19195,34",
		4: "14934,62",
		5: "12388,2",
		6: "10698,9",
		7: "9499,34",
		8: "8605,81",
		9: "7916,25",
		10: "7369,44",
		11: "6926,38",
		12: "6561,09",
		v1: 40500,
		v2: "49480,76"
	}, {
		3: "19242,74",
		4: "14971,49",
		5: "12418,79",
		6: "10725,32",
		7: "9522,79",
		8: "8627,06",
		9: "7935,8",
		10: "7387,63",
		11: "6943,48",
		12: "6577,29",
		v1: 40600,
		v2: "49602,93"
	}, {
		3: "19290,14",
		4: "15008,37",
		5: "12449,38",
		6: "10751,74",
		7: "9546,25",
		8: "8648,31",
		9: "7955,35",
		10: "7405,83",
		11: "6960,58",
		12: "6593,49",
		v1: 40700,
		v2: "49725,11"
	}, {
		3: "19337,53",
		4: "15045,24",
		5: "12479,97",
		6: "10778,15",
		7: "9569,7",
		8: "8669,55",
		9: "7974,89",
		10: "7424,02",
		11: "6977,68",
		12: "6609,69",
		v1: 40800,
		v2: "49847,28"
	}, {
		3: "19384,93",
		4: "15082,12",
		5: "12510,56",
		6: "10804,57",
		7: "9593,16",
		8: "8690,8",
		9: "7994,44",
		10: "7442,22",
		11: "6994,79",
		12: "6625,89",
		v1: 40900,
		v2: "49969,46"
	}, {
		3: "19432,32",
		4: "15118,99",
		5: "12541,14",
		6: "10830,99",
		7: "9616,61",
		8: "8712,05",
		9: "8013,99",
		10: "7460,42",
		11: "7011,89",
		12: "6642,09",
		v1: 41e3,
		v2: "50091,63"
	}, {
		3: "19479,72",
		4: "15155,87",
		5: "12571,73",
		6: "10857,41",
		7: "9640,07",
		8: "8733,3",
		9: "8033,53",
		10: "7478,61",
		11: "7028,99",
		12: "6658,29",
		v1: 41100,
		v2: "50213,81"
	}, {
		3: "19527,11",
		4: "15192,74",
		5: "12602,32",
		6: "10883,82",
		7: "9663,52",
		8: "8754,55",
		9: "8053,08",
		10: "7496,81",
		11: "7046,09",
		12: "6674,49",
		v1: 41200,
		v2: "50335,98"
	}, {
		3: "19574,51",
		4: "15229,62",
		5: "12632,91",
		6: "10910,24",
		7: "9686,98",
		8: "8775,8",
		9: "8072,63",
		10: "7515,01",
		11: "7063,19",
		12: "6690,69",
		v1: 41300,
		v2: "50458,16"
	}, {
		3: "19621,91",
		4: "15266,5",
		5: "12663,5",
		6: "10936,66",
		7: "9710,43",
		8: "8797,05",
		9: "8092,17",
		10: "7533,2",
		11: "7080,3",
		12: "6706,89",
		v1: 41400,
		v2: "50580,33"
	}, {
		3: "19669,3",
		4: "15303,37",
		5: "12694,08",
		6: "10963,07",
		7: "9733,89",
		8: "8818,3",
		9: "8111,72",
		10: "7551,4",
		11: "7097,4",
		12: "6723,09",
		v1: 41500,
		v2: "50702,5"
	}, {
		3: "19716,7",
		4: "15340,25",
		5: "12724,67",
		6: "10989,49",
		7: "9757,34",
		8: "8839,55",
		9: "8131,26",
		10: "7569,59",
		11: "7114,5",
		12: "6739,29",
		v1: 41600,
		v2: "50824,68"
	}, {
		3: "19764,09",
		4: "15377,12",
		5: "12755,26",
		6: "11015,91",
		7: "9780,8",
		8: "8860,79",
		9: "8150,81",
		10: "7587,79",
		11: "7131,6",
		12: "6755,49",
		v1: 41700,
		v2: "50946,85"
	}, {
		3: "19811,49",
		4: 15414,
		5: "12785,85",
		6: "11042,33",
		7: "9804,26",
		8: "8882,04",
		9: "8170,36",
		10: "7605,99",
		11: "7148,71",
		12: "6771,69",
		v1: 41800,
		v2: "51069,03"
	}, {
		3: "19858,88",
		4: "15450,87",
		5: "12816,44",
		6: "11068,74",
		7: "9827,71",
		8: "8903,29",
		9: "8189,9",
		10: "7624,18",
		11: "7165,81",
		12: "6787,89",
		v1: 41900,
		v2: "51191,2"
	}, {
		3: "19906,28",
		4: "15487,75",
		5: "12847,03",
		6: "11095,16",
		7: "9851,17",
		8: "8924,54",
		9: "8209,45",
		10: "7642,38",
		11: "7182,91",
		12: "6804,09",
		v1: 42e3,
		v2: "51313,38"
	}, {
		3: "19953,68",
		4: "15524,62",
		5: "12877,61",
		6: "11121,58",
		7: "9874,62",
		8: "8945,79",
		9: 8229,
		10: "7660,57",
		11: "7200,01",
		12: "6820,29",
		v1: 42100,
		v2: "51435,55"
	}, {
		3: "20001,07",
		4: "15561,5",
		5: "12908,2",
		6: "11147,99",
		7: "9898,08",
		8: "8967,04",
		9: "8248,54",
		10: "7678,77",
		11: "7217,11",
		12: "6836,49",
		v1: 42200,
		v2: "51557,73"
	}, {
		3: "20048,47",
		4: "15598,37",
		5: "12938,79",
		6: "11174,41",
		7: "9921,53",
		8: "8988,29",
		9: "8268,09",
		10: "7696,97",
		11: "7234,22",
		12: "6852,69",
		v1: 42300,
		v2: "51679,9"
	}, {
		3: "20095,87",
		4: "15635,25",
		5: "12969,38",
		6: "11200,83",
		7: "9944,99",
		8: "9009,54",
		9: "8287,63",
		10: "7715,16",
		11: "7251,32",
		12: "6868,89",
		v1: 42400,
		v2: "51802,08"
	}, {
		3: "20143,26",
		4: "15672,13",
		5: "12999,97",
		6: "11227,24",
		7: "9968,44",
		8: "9030,79",
		9: "8307,18",
		10: "7733,36",
		11: "7268,42",
		12: "6885,09",
		v1: 42500,
		v2: "51924,25"
	}, {
		3: "20190,66",
		4: 15709,
		5: "13030,55",
		6: "11253,66",
		7: "9991,9",
		8: "9052,04",
		9: "8326,73",
		10: "7751,56",
		11: "7285,52",
		12: "6901,29",
		v1: 42600,
		v2: "52046,43"
	}, {
		3: "20238,05",
		4: "15745,88",
		5: "13061,14",
		6: "11280,08",
		7: "10015,35",
		8: "9073,28",
		9: "8346,27",
		10: "7769,75",
		11: "7302,62",
		12: "6917,49",
		v1: 42700,
		v2: "52168,6"
	}, {
		3: "20285,45",
		4: "15782,75",
		5: "13091,73",
		6: "11306,5",
		7: "10038,81",
		8: "9094,53",
		9: "8365,82",
		10: "7787,95",
		11: "7319,73",
		12: "6933,69",
		v1: 42800,
		v2: "52290,78"
	}, {
		3: "20332,84",
		4: "15819,63",
		5: "13122,32",
		6: "11332,91",
		7: "10062,26",
		8: "9115,78",
		9: "8385,37",
		10: "7806,14",
		11: "7336,83",
		12: "6949,89",
		v1: 42900,
		v2: "52412,95"
	}, {
		3: "20380,24",
		4: "15856,51",
		5: "13152,91",
		6: "11359,33",
		7: "10085,72",
		8: "9137,03",
		9: "8404,91",
		10: "7824,34",
		11: "7353,93",
		12: "6966,09",
		v1: 43e3,
		v2: "52535,13"
	}, {
		3: "20427,64",
		4: "15893,38",
		5: "13183,49",
		6: "11385,75",
		7: "10109,17",
		8: "9158,28",
		9: "8424,46",
		10: "7842,54",
		11: "7371,03",
		12: "6982,29",
		v1: 43100,
		v2: "52657,3"
	}, {
		3: "20475,03",
		4: "15930,25",
		5: "13214,08",
		6: "11412,16",
		7: "10132,63",
		8: "9179,53",
		9: 8444,
		10: "7860,73",
		11: "7388,13",
		12: "6998,49",
		v1: 43200,
		v2: "52779,47"
	}, {
		3: "20522,43",
		4: "15967,13",
		5: "13244,67",
		6: "11438,58",
		7: "10156,08",
		8: "9200,78",
		9: "8463,55",
		10: "7878,93",
		11: "7405,24",
		12: "7014,69",
		v1: 43300,
		v2: "52901,65"
	}, {
		3: "20569,82",
		4: "16004,01",
		5: "13275,26",
		6: 11465,
		7: "10179,54",
		8: "9222,03",
		9: "8483,1",
		10: "7897,12",
		11: "7422,34",
		12: "7030,89",
		v1: 43400,
		v2: "53023,82"
	}, {
		3: "20617,22",
		4: "16040,88",
		5: "13305,85",
		6: "11491,42",
		7: "10202,99",
		8: "9243,28",
		9: "8502,64",
		10: "7915,32",
		11: "7439,44",
		12: "7047,09",
		v1: 43500,
		v2: 53146
	}, {
		3: "20664,61",
		4: "16077,76",
		5: "13336,43",
		6: "11517,83",
		7: "10226,45",
		8: "9264,52",
		9: "8522,19",
		10: "7933,52",
		11: "7456,54",
		12: "7063,29",
		v1: 43600,
		v2: "53268,17"
	}, {
		3: "20712,01",
		4: "16114,63",
		5: "13367,02",
		6: "11544,25",
		7: "10249,9",
		8: "9285,77",
		9: "8541,74",
		10: "7951,71",
		11: "7473,65",
		12: "7079,5",
		v1: 43700,
		v2: "53390,35"
	}, {
		3: "20759,41",
		4: "16151,51",
		5: "13397,61",
		6: "11570,67",
		7: "10273,36",
		8: "9307,02",
		9: "8561,28",
		10: "7969,91",
		11: "7490,75",
		12: "7095,69",
		v1: 43800,
		v2: "53512,52"
	}, {
		3: "20806,8",
		4: "16188,39",
		5: "13428,2",
		6: "11597,08",
		7: "10296,81",
		8: "9328,27",
		9: "8580,83",
		10: "7988,11",
		11: "7507,85",
		12: "7111,9",
		v1: 43900,
		v2: "53634,7"
	}, {
		3: "20854,2",
		4: "16225,26",
		5: "13458,79",
		6: "11623,5",
		7: "10320,27",
		8: "9349,52",
		9: "8600,37",
		10: "8006,3",
		11: "7524,95",
		12: "7128,1",
		v1: 44e3,
		v2: "53756,87"
	}, {
		3: "20901,6",
		4: "16262,14",
		5: "13489,38",
		6: "11649,92",
		7: "10343,72",
		8: "9370,77",
		9: "8619,92",
		10: "8024,5",
		11: "7542,06",
		12: "7144,3",
		v1: 44100,
		v2: "53879,05"
	}, {
		3: "20948,99",
		4: "16299,01",
		5: "13519,96",
		6: "11676,33",
		7: "10367,18",
		8: "9392,02",
		9: "8639,47",
		10: "8042,69",
		11: "7559,16",
		12: "7160,5",
		v1: 44200,
		v2: "54001,22"
	}, {
		3: "20996,39",
		4: "16335,89",
		5: "13550,55",
		6: "11702,75",
		7: "10390,63",
		8: "9413,27",
		9: "8659,01",
		10: "8060,89",
		11: "7576,26",
		12: "7176,7",
		v1: 44300,
		v2: "54123,4"
	}, {
		3: "21043,78",
		4: "16372,76",
		5: "13581,14",
		6: "11729,17",
		7: "10414,09",
		8: "9434,52",
		9: "8678,56",
		10: "8079,09",
		11: "7593,36",
		12: "7192,9",
		v1: 44400,
		v2: "54245,57"
	}, {
		3: "21091,18",
		4: "16409,64",
		5: "13611,73",
		6: "11755,59",
		7: "10437,54",
		8: "9455,77",
		9: "8698,11",
		10: "8097,28",
		11: "7610,46",
		12: "7209,1",
		v1: 44500,
		v2: "54367,75"
	}, {
		3: "21138,57",
		4: "16446,51",
		5: "13642,32",
		6: 11782,
		7: 10461,
		8: "9477,01",
		9: "8717,65",
		10: "8115,48",
		11: "7627,57",
		12: "7225,3",
		v1: 44600,
		v2: "54489,92"
	}, {
		3: "21185,97",
		4: "16483,39",
		5: "13672,91",
		6: "11808,42",
		7: "10484,46",
		8: "9498,26",
		9: "8737,2",
		10: "8133,67",
		11: "7644,67",
		12: "7241,5",
		v1: 44700,
		v2: "54612,1"
	}, {
		3: "21233,37",
		4: "16520,27",
		5: "13703,49",
		6: "11834,84",
		7: "10507,91",
		8: "9519,51",
		9: "8756,75",
		10: "8151,87",
		11: "7661,77",
		12: "7257,7",
		v1: 44800,
		v2: "54734,27"
	}, {
		3: "21280,76",
		4: "16557,14",
		5: "13734,08",
		6: "11861,25",
		7: "10531,36",
		8: "9540,76",
		9: "8776,29",
		10: "8170,07",
		11: "7678,87",
		12: "7273,9",
		v1: 44900,
		v2: "54856,44"
	}, {
		3: "21328,16",
		4: "16594,02",
		5: "13764,67",
		6: "11887,67",
		7: "10554,82",
		8: "9562,01",
		9: "8795,84",
		10: "8188,26",
		11: "7695,97",
		12: "7290,1",
		v1: 45e3,
		v2: "54978,62"
	}, {
		3: "21375,55",
		4: "16630,89",
		5: "13795,26",
		6: "11914,09",
		7: "10578,27",
		8: "9583,26",
		9: "8815,38",
		10: "8206,46",
		11: "7713,08",
		12: "7306,3",
		v1: 45100,
		v2: "55100,79"
	}, {
		3: "21422,95",
		4: "16667,77",
		5: "13825,85",
		6: "11940,51",
		7: "10601,73",
		8: "9604,51",
		9: "8834,93",
		10: "8224,65",
		11: "7730,18",
		12: "7322,5",
		v1: 45200,
		v2: "55222,97"
	}, {
		3: "21470,34",
		4: "16704,64",
		5: "13856,43",
		6: "11966,92",
		7: "10625,18",
		8: "9625,76",
		9: "8854,48",
		10: "8242,85",
		11: "7747,28",
		12: "7338,7",
		v1: 45300,
		v2: "55345,14"
	}, {
		3: "21517,74",
		4: "16741,52",
		5: "13887,02",
		6: "11993,34",
		7: "10648,64",
		8: 9647,
		9: "8874,02",
		10: "8261,05",
		11: "7764,38",
		12: "7354,9",
		v1: 45400,
		v2: "55467,32"
	}, {
		3: "21565,14",
		4: "16778,39",
		5: "13917,61",
		6: "12019,76",
		7: "10672,1",
		8: "9668,25",
		9: "8893,57",
		10: "8279,24",
		11: "7781,48",
		12: "7371,1",
		v1: 45500,
		v2: "55589,49"
	}, {
		3: "21612,53",
		4: "16815,27",
		5: "13948,2",
		6: "12046,17",
		7: "10695,55",
		8: "9689,5",
		9: "8913,12",
		10: "8297,44",
		11: "7798,59",
		12: "7387,3",
		v1: 45600,
		v2: "55711,67"
	}, {
		3: "21659,93",
		4: "16852,15",
		5: "13978,79",
		6: "12072,59",
		7: "10719,01",
		8: "9710,75",
		9: "8932,66",
		10: "8315,64",
		11: "7815,69",
		12: "7403,5",
		v1: 45700,
		v2: "55833,84"
	}, {
		3: "21707,33",
		4: "16889,02",
		5: "14009,38",
		6: "12099,01",
		7: "10742,46",
		8: 9732,
		9: "8952,21",
		10: "8333,83",
		11: "7832,79",
		12: "7419,7",
		v1: 45800,
		v2: "55956,02"
	}, {
		3: "21754,72",
		4: "16925,9",
		5: "14039,96",
		6: "12125,42",
		7: "10765,92",
		8: "9753,25",
		9: "8971,75",
		10: "8352,03",
		11: "7849,89",
		12: "7435,9",
		v1: 45900,
		v2: "56078,19"
	}, {
		3: "21802,12",
		4: "16962,77",
		5: "14070,55",
		6: "12151,84",
		7: "10789,37",
		8: "9774,5",
		9: "8991,3",
		10: "8370,22",
		11: 7867,
		12: "7452,1",
		v1: 46e3,
		v2: "56200,37"
	}, {
		3: "21849,51",
		4: "16999,65",
		5: "14101,14",
		6: "12178,26",
		7: "10812,83",
		8: "9795,75",
		9: "9010,85",
		10: "8388,42",
		11: "7884,1",
		12: "7468,3",
		v1: 46100,
		v2: "56322,54"
	}, {
		3: "21896,91",
		4: "17036,52",
		5: "14131,73",
		6: "12204,68",
		7: "10836,28",
		8: 9817,
		9: "9030,39",
		10: "8406,62",
		11: "7901,2",
		12: "7484,5",
		v1: 46200,
		v2: "56444,72"
	}, {
		3: "21944,3",
		4: "17073,4",
		5: "14162,32",
		6: "12231,09",
		7: "10859,74",
		8: "9838,24",
		9: "9049,94",
		10: "8424,81",
		11: "7918,3",
		12: "7500,7",
		v1: 46300,
		v2: "56566,89"
	}, {
		3: "21991,7",
		4: "17110,28",
		5: "14192,9",
		6: "12257,51",
		7: "10883,19",
		8: "9859,49",
		9: "9069,49",
		10: "8443,01",
		11: "7935,41",
		12: "7516,9",
		v1: 46400,
		v2: "56689,07"
	}, {
		3: "22039,1",
		4: "17147,15",
		5: "14223,49",
		6: "12283,93",
		7: "10906,65",
		8: "9880,74",
		9: "9089,03",
		10: "8461,2",
		11: "7952,51",
		12: "7533,1",
		v1: 46500,
		v2: "56811,24"
	}, {
		3: "22086,49",
		4: "17184,02",
		5: "14254,08",
		6: "12310,34",
		7: "10930,1",
		8: "9901,99",
		9: "9108,58",
		10: "8479,4",
		11: "7969,61",
		12: "7549,3",
		v1: 46600,
		v2: "56933,41"
	}, {
		3: "22133,89",
		4: "17220,9",
		5: "14284,67",
		6: "12336,76",
		7: "10953,56",
		8: "9923,24",
		9: "9128,13",
		10: "8497,6",
		11: "7986,71",
		12: "7565,5",
		v1: 46700,
		v2: "57055,59"
	}, {
		3: "22181,28",
		4: "17257,78",
		5: "14315,26",
		6: "12363,18",
		7: "10977,01",
		8: "9944,49",
		9: "9147,67",
		10: "8515,79",
		11: "8003,81",
		12: "7581,7",
		v1: 46800,
		v2: "57177,76"
	}, {
		3: "22228,68",
		4: "17294,65",
		5: "14345,84",
		6: "12389,59",
		7: "11000,47",
		8: "9965,74",
		9: "9167,22",
		10: "8533,99",
		11: "8020,92",
		12: "7597,9",
		v1: 46900,
		v2: "57299,94"
	}, {
		3: "22276,07",
		4: "17331,53",
		5: "14376,43",
		6: "12416,01",
		7: "11023,92",
		8: "9986,99",
		9: "9186,76",
		10: "8552,18",
		11: "8038,02",
		12: "7614,1",
		v1: 47e3,
		v2: "57422,11"
	}, {
		3: "22323,47",
		4: "17368,4",
		5: "14407,02",
		6: "12442,43",
		7: "11047,38",
		8: "10008,24",
		9: "9206,31",
		10: "8570,38",
		11: "8055,12",
		12: "7630,3",
		v1: 47100,
		v2: "57544,29"
	}, {
		3: "22370,87",
		4: "17405,28",
		5: "14437,61",
		6: "12468,85",
		7: "11070,83",
		8: "10029,48",
		9: "9225,86",
		10: "8588,58",
		11: "8072,22",
		12: "7646,5",
		v1: 47200,
		v2: "57666,46"
	}, {
		3: "22418,26",
		4: "17442,16",
		5: "14468,2",
		6: "12495,26",
		7: "11094,29",
		8: "10050,73",
		9: "9245,4",
		10: "8606,77",
		11: "8089,32",
		12: "7662,7",
		v1: 47300,
		v2: "57788,64"
	}, {
		3: "22465,66",
		4: "17479,03",
		5: "14498,78",
		6: "12521,68",
		7: "11117,74",
		8: "10071,98",
		9: "9264,95",
		10: "8624,97",
		11: "8106,43",
		12: "7678,9",
		v1: 47400,
		v2: "57910,81"
	}, {
		3: "22513,06",
		4: "17515,91",
		5: "14529,37",
		6: "12548,1",
		7: "11141,2",
		8: "10093,23",
		9: "9284,5",
		10: "8643,17",
		11: "8123,53",
		12: "7695,1",
		v1: 47500,
		v2: "58032,99"
	}, {
		3: "22560,45",
		4: "17552,78",
		5: "14559,96",
		6: "12574,51",
		7: "11164,65",
		8: "10114,48",
		9: "9304,04",
		10: "8661,36",
		11: "8140,63",
		12: "7711,3",
		v1: 47600,
		v2: "58155,16"
	}, {
		3: "22607,85",
		4: "17589,66",
		5: "14590,55",
		6: "12600,93",
		7: "11188,11",
		8: "10135,73",
		9: "9323,59",
		10: "8679,56",
		11: "8157,73",
		12: "7727,5",
		v1: 47700,
		v2: "58277,34"
	}, {
		3: "22655,24",
		4: "17626,53",
		5: "14621,14",
		6: "12627,35",
		7: "11211,56",
		8: "10156,98",
		9: "9343,13",
		10: "8697,75",
		11: "8174,83",
		12: "7743,7",
		v1: 47800,
		v2: "58399,51"
	}, {
		3: "22702,64",
		4: "17663,41",
		5: "14651,73",
		6: "12653,77",
		7: "11235,02",
		8: "10178,23",
		9: "9362,68",
		10: "8715,95",
		11: "8191,94",
		12: "7759,9",
		v1: 47900,
		v2: "58521,69"
	}, {
		3: "22750,03",
		4: "17700,28",
		5: "14682,31",
		6: "12680,18",
		7: "11258,47",
		8: "10199,48",
		9: "9382,23",
		10: "8734,15",
		11: "8209,04",
		12: "7776,1",
		v1: 48e3,
		v2: "58643,86"
	}, {
		3: "22797,43",
		4: "17737,16",
		5: "14712,9",
		6: "12706,6",
		7: "11281,93",
		8: "10220,73",
		9: "9401,77",
		10: "8752,34",
		11: "8226,14",
		12: "7792,31",
		v1: 48100,
		v2: "58766,04"
	}, {
		3: "22844,83",
		4: "17774,04",
		5: "14743,49",
		6: "12733,02",
		7: "11305,38",
		8: "10241,97",
		9: "9421,32",
		10: "8770,54",
		11: "8243,24",
		12: "7808,5",
		v1: 48200,
		v2: "58888,21"
	}, {
		3: "22892,22",
		4: "17810,91",
		5: "14774,08",
		6: "12759,43",
		7: "11328,84",
		8: "10263,22",
		9: "9440,87",
		10: "8788,73",
		11: "8260,34",
		12: "7824,7",
		v1: 48300,
		v2: "59010,38"
	}, {
		3: "22939,62",
		4: "17847,79",
		5: "14804,67",
		6: "12785,85",
		7: "11352,3",
		8: "10284,47",
		9: "9460,41",
		10: "8806,93",
		11: "8277,45",
		12: "7840,91",
		v1: 48400,
		v2: "59132,56"
	}, {
		3: "22987,01",
		4: "17884,66",
		5: "14835,25",
		6: "12812,27",
		7: "11375,75",
		8: "10305,72",
		9: "9479,96",
		10: "8825,13",
		11: "8294,55",
		12: "7857,1",
		v1: 48500,
		v2: "59254,73"
	}, {
		3: "23034,41",
		4: "17921,54",
		5: "14865,84",
		6: "12838,68",
		7: "11399,21",
		8: "10326,97",
		9: "9499,51",
		10: "8843,32",
		11: "8311,65",
		12: "7873,31",
		v1: 48600,
		v2: "59376,91"
	}, {
		3: "23081,81",
		4: "17958,41",
		5: "14896,43",
		6: "12865,1",
		7: "11422,66",
		8: "10348,22",
		9: "9519,05",
		10: "8861,52",
		11: "8328,75",
		12: "7889,51",
		v1: 48700,
		v2: "59499,08"
	}, {
		3: "23129,2",
		4: "17995,29",
		5: "14927,02",
		6: "12891,52",
		7: "11446,12",
		8: "10369,47",
		9: "9538,6",
		10: "8879,72",
		11: "8345,86",
		12: "7905,71",
		v1: 48800,
		v2: "59621,26"
	}, {
		3: "23176,6",
		4: "18032,16",
		5: "14957,61",
		6: "12917,93",
		7: "11469,57",
		8: "10390,72",
		9: "9558,14",
		10: "8897,91",
		11: "8362,96",
		12: "7921,91",
		v1: 48900,
		v2: "59743,43"
	}, {
		3: 23224,
		4: "18069,04",
		5: "14988,2",
		6: "12944,35",
		7: "11493,03",
		8: "10411,97",
		9: "9577,69",
		10: "8916,11",
		11: "8380,06",
		12: "7938,11",
		v1: 49e3,
		v2: "59865,61"
	}, {
		3: "23271,39",
		4: "18105,92",
		5: "15018,78",
		6: "12970,77",
		7: "11516,48",
		8: "10433,21",
		9: "9597,24",
		10: "8934,3",
		11: "8397,16",
		12: "7954,31",
		v1: 49100,
		v2: "59987,78"
	}, {
		3: "23318,79",
		4: "18142,79",
		5: "15049,37",
		6: "12997,19",
		7: "11539,94",
		8: "10454,46",
		9: "9616,78",
		10: "8952,5",
		11: "8414,27",
		12: "7970,51",
		v1: 49200,
		v2: "60109,96"
	}, {
		3: "23366,18",
		4: "18179,67",
		5: "15079,96",
		6: "13023,6",
		7: "11563,39",
		8: "10475,71",
		9: "9636,33",
		10: "8970,7",
		11: "8431,37",
		12: "7986,71",
		v1: 49300,
		v2: "60232,13"
	}, {
		3: "23413,58",
		4: "18216,54",
		5: "15110,55",
		6: "13050,02",
		7: "11586,85",
		8: "10496,96",
		9: "9655,88",
		10: "8988,89",
		11: "8448,47",
		12: "8002,91",
		v1: 49400,
		v2: "60354,31"
	}, {
		3: "23460,97",
		4: "18253,42",
		5: "15141,14",
		6: "13076,44",
		7: "11610,3",
		8: "10518,21",
		9: "9675,42",
		10: "9007,09",
		11: "8465,57",
		12: "8019,11",
		v1: 49500,
		v2: "60476,48"
	}, {
		3: "23508,37",
		4: "18290,3",
		5: "15171,73",
		6: "13102,86",
		7: "11633,76",
		8: "10539,46",
		9: "9694,97",
		10: "9025,29",
		11: "8482,67",
		12: "8035,31",
		v1: 49600,
		v2: "60598,66"
	}, {
		3: "23555,77",
		4: "18327,17",
		5: "15202,31",
		6: "13129,27",
		7: "11657,21",
		8: "10560,71",
		9: "9714,51",
		10: "9043,48",
		11: "8499,78",
		12: "8051,51",
		v1: 49700,
		v2: "60720,83"
	}, {
		3: "23603,16",
		4: "18364,05",
		5: "15232,9",
		6: "13155,69",
		7: "11680,67",
		8: "10581,96",
		9: "9734,06",
		10: "9061,68",
		11: "8516,88",
		12: "8067,71",
		v1: 49800,
		v2: "60843,01"
	}, {
		3: "23650,56",
		4: "18400,92",
		5: "15263,49",
		6: "13182,11",
		7: "11704,12",
		8: "10603,21",
		9: "9753,61",
		10: "9079,87",
		11: "8533,98",
		12: "8083,91",
		v1: 49900,
		v2: "60965,18"
	}, {
		3: "23697,95",
		4: "18437,79",
		5: "15294,08",
		6: "13208,52",
		7: "11727,58",
		8: "10624,45",
		9: "9773,15",
		10: "9098,07",
		11: "8551,08",
		12: "8100,11",
		v1: 5e4,
		v2: "61087,35"
	}],
	d12 = [{
		13: "1053,78",
		14: "1017,21",
		15: "986,21",
		16: "959,72",
		17: "936,92",
		18: "917,19",
		19: "900,02",
		20: "885,02",
		21: "871,85",
		22: "860,26",
		23: "850,03",
		24: "840,96",
		v1: 6e3,
		v2: "7330,48"
	}, {
		13: "1229,41",
		14: "1186,74",
		15: "1150,58",
		16: "1119,67",
		17: "1093,08",
		18: "1070,06",
		19: "1050,03",
		20: "1032,52",
		21: "1017,16",
		22: "1003,64",
		23: "991,7",
		24: "981,13",
		v1: 7e3,
		v2: "8552,23"
	}, {
		13: "1405,04",
		14: "1356,28",
		15: "1314,94",
		16: "1279,62",
		17: "1249,23",
		18: "1222,92",
		19: "1200,03",
		20: "1180,02",
		21: "1162,47",
		22: "1147,02",
		23: "1133,37",
		24: "1121,29",
		v1: 8e3,
		v2: "9773,98"
	}, {
		13: "1580,67",
		14: "1525,81",
		15: "1479,31",
		16: "1439,57",
		17: "1405,38",
		18: "1375,78",
		19: "1350,03",
		20: "1327,53",
		21: "1307,78",
		22: "1290,39",
		23: "1275,04",
		24: "1261,45",
		v1: 9e3,
		v2: "10995,72"
	}, {
		13: "1756,3",
		14: "1695,34",
		15: "1643,68",
		16: "1599,53",
		17: "1561,54",
		18: "1528,65",
		19: "1500,04",
		20: "1475,03",
		21: "1453,09",
		22: "1433,77",
		23: "1416,71",
		24: "1401,61",
		v1: 1e4,
		v2: "12217,47"
	}, {
		13: "1931,93",
		14: "1864,88",
		15: "1808,05",
		16: "1759,48",
		17: "1717,69",
		18: "1681,52",
		19: "1650,04",
		20: "1622,53",
		21: "1598,4",
		22: "1577,15",
		23: "1558,38",
		24: "1541,77",
		v1: 11e3,
		v2: "13439,22"
	}, {
		13: "2107,56",
		14: "2034,41",
		15: "1972,42",
		16: "1919,43",
		17: "1873,84",
		18: "1834,38",
		19: "1800,04",
		20: "1770,04",
		21: "1743,71",
		22: "1720,53",
		23: "1700,05",
		24: "1681,93",
		v1: 12e3,
		v2: "14660,97"
	}, {
		13: "2283,18",
		14: "2203,95",
		15: "2136,78",
		16: "2079,39",
		17: 2030,
		18: "1987,24",
		19: "1950,05",
		20: "1917,54",
		21: "1889,01",
		22: "1863,9",
		23: "1841,72",
		24: "1822,09",
		v1: 13e3,
		v2: "15882,71"
	}, {
		13: "2458,81",
		14: "2373,48",
		15: "2301,15",
		16: "2239,34",
		17: "2186,15",
		18: "2140,11",
		19: "2100,05",
		20: "2065,04",
		21: "2034,32",
		22: "2007,28",
		23: "1983,4",
		24: "1962,25",
		v1: 14e3,
		v2: "17104,46"
	}, {
		13: "2634,44",
		14: "2543,02",
		15: "2465,52",
		16: "2399,29",
		17: "2342,3",
		18: "2292,98",
		19: "2250,06",
		20: "2212,54",
		21: "2179,63",
		22: "2150,66",
		23: "2125,07",
		24: "2102,41",
		v1: 15e3,
		v2: "18326,21"
	}, {
		13: "2810,07",
		14: "2712,55",
		15: "2629,89",
		16: "2559,24",
		17: "2498,46",
		18: "2445,84",
		19: "2400,06",
		20: "2360,05",
		21: "2324,94",
		22: "2294,03",
		23: "2266,74",
		24: "2242,57",
		v1: 16e3,
		v2: "19547,95"
	}, {
		13: "2985,7",
		14: "2882,09",
		15: "2794,25",
		16: "2719,2",
		17: "2654,61",
		18: "2598,71",
		19: "2550,06",
		20: "2507,55",
		21: "2470,25",
		22: "2437,41",
		23: "2408,41",
		24: "2382,73",
		v1: 17e3,
		v2: "20769,7"
	}, {
		13: "3161,33",
		14: "3051,62",
		15: "2958,62",
		16: "2879,15",
		17: "2810,77",
		18: "2751,57",
		19: "2700,07",
		20: "2655,05",
		21: "2615,56",
		22: "2580,79",
		23: "2550,08",
		24: "2522,89",
		v1: 18e3,
		v2: "21991,45"
	}, {
		13: "3336,96",
		14: "3221,15",
		15: "3122,99",
		16: "3039,1",
		17: "2966,92",
		18: "2904,43",
		19: "2850,07",
		20: "2802,56",
		21: "2760,87",
		22: "2724,16",
		23: "2691,75",
		24: "2663,05",
		v1: 19e3,
		v2: "23213,19"
	}, {
		13: "3512,59",
		14: "3390,69",
		15: "3287,36",
		16: "3199,06",
		17: "3123,07",
		18: "3057,3",
		19: "3000,07",
		20: "2950,06",
		21: "2906,18",
		22: "2867,54",
		23: "2833,42",
		24: "2803,21",
		v1: 2e4,
		v2: "24434,94"
	}, {
		13: "3688,22",
		14: "3560,22",
		15: "3451,73",
		16: "3359,01",
		17: "3279,23",
		18: "3210,17",
		19: "3150,08",
		20: "3097,56",
		21: "3051,48",
		22: "3010,92",
		23: "2975,09",
		24: "2943,38",
		v1: 21e3,
		v2: "25656,69"
	}, {
		13: "3863,85",
		14: "3729,76",
		15: "3616,09",
		16: "3518,96",
		17: "3435,38",
		18: "3363,03",
		19: "3300,08",
		20: "3245,07",
		21: "3196,79",
		22: "3154,3",
		23: "3116,77",
		24: "3083,54",
		v1: 22e3,
		v2: "26878,44"
	}, {
		13: "4039,48",
		14: "3899,29",
		15: "3780,46",
		16: "3678,91",
		17: "3591,53",
		18: "3515,89",
		19: "3450,08",
		20: "3392,57",
		21: "3342,1",
		22: "3297,67",
		23: "3258,44",
		24: "3223,7",
		v1: 23e3,
		v2: "28100,18"
	}, {
		13: "4215,11",
		14: "4068,83",
		15: "3944,83",
		16: "3838,87",
		17: "3747,69",
		18: "3668,76",
		19: "3600,09",
		20: "3540,07",
		21: "3487,41",
		22: "3441,05",
		23: "3400,11",
		24: "3363,86",
		v1: 24e3,
		v2: "29321,93"
	}, {
		13: "4390,74",
		14: "4238,36",
		15: "4109,2",
		16: "3998,82",
		17: "3903,84",
		18: "3821,63",
		19: "3750,09",
		20: "3687,57",
		21: "3632,72",
		22: "3584,43",
		23: "3541,78",
		24: "3504,02",
		v1: 25e3,
		v2: "30543,68"
	}, {
		13: "4566,37",
		14: "4407,9",
		15: "4273,56",
		16: "4158,77",
		17: "4059,99",
		18: "3974,49",
		19: "3900,1",
		20: "3835,08",
		21: "3778,03",
		22: "3727,8",
		23: "3683,45",
		24: "3644,18",
		v1: 26e3,
		v2: "31765,42"
	}, {
		13: 4742,
		14: "4577,43",
		15: "4437,93",
		16: "4318,72",
		17: "4216,15",
		18: "4127,36",
		19: "4050,1",
		20: "3982,58",
		21: "3923,34",
		22: "3871,18",
		23: "3825,12",
		24: "3784,34",
		v1: 27e3,
		v2: "32987,17"
	}, {
		13: "4917,63",
		14: "4746,97",
		15: "4602,3",
		16: "4478,68",
		17: "4372,3",
		18: "4280,22",
		19: "4200,1",
		20: "4130,08",
		21: "4068,65",
		22: "4014,56",
		23: "3966,79",
		24: "3924,5",
		v1: 28e3,
		v2: "34208,92"
	}, {
		13: "5093,26",
		14: "4916,5",
		15: "4766,67",
		16: "4638,63",
		17: "4528,46",
		18: "4433,09",
		19: "4350,11",
		20: "4277,59",
		21: "4213,96",
		22: "4157,93",
		23: "4108,46",
		24: "4064,66",
		v1: 29e3,
		v2: "35430,67"
	}, {
		13: "5268,89",
		14: "5086,03",
		15: "4931,04",
		16: "4798,58",
		17: "4684,61",
		18: "4585,95",
		19: "4500,11",
		20: "4425,09",
		21: "4359,26",
		22: "4301,31",
		23: "4250,13",
		24: "4204,82",
		v1: 3e4,
		v2: "36652,41"
	}, {
		13: "5444,52",
		14: "5255,57",
		15: "5095,41",
		16: "4958,54",
		17: "4840,76",
		18: "4738,82",
		19: "4650,11",
		20: "4572,59",
		21: "4504,57",
		22: "4444,69",
		23: "4391,81",
		24: "4344,98",
		v1: 31e3,
		v2: "37874,16"
	}, {
		13: "5620,15",
		14: "5425,1",
		15: "5259,77",
		16: "5118,49",
		17: "4996,92",
		18: "4891,68",
		19: "4800,12",
		20: "4720,09",
		21: "4649,88",
		22: "4588,07",
		23: "4533,48",
		24: "4485,14",
		v1: 32e3,
		v2: "39095,91"
	}, {
		13: "5795,77",
		14: "5594,64",
		15: "5424,14",
		16: "5278,44",
		17: "5153,07",
		18: "5044,54",
		19: "4950,12",
		20: "4867,6",
		21: "4795,19",
		22: "4731,44",
		23: "4675,15",
		24: "4625,3",
		v1: 33e3,
		v2: "40317,65"
	}, {
		13: "5971,4",
		14: "5764,17",
		15: "5588,51",
		16: "5438,39",
		17: "5309,22",
		18: "5197,41",
		19: "5100,13",
		20: "5015,1",
		21: "4940,5",
		22: "4874,82",
		23: "4816,82",
		24: "4765,46",
		v1: 34e3,
		v2: "41539,4"
	}, {
		13: "6147,03",
		14: "5933,71",
		15: "5752,88",
		16: "5598,35",
		17: "5465,38",
		18: "5350,28",
		19: "5250,13",
		20: "5162,6",
		21: "5085,81",
		22: "5018,2",
		23: "4958,49",
		24: "4905,63",
		v1: 35e3,
		v2: "42761,15"
	}, {
		13: "6322,66",
		14: "6103,24",
		15: "5917,25",
		16: "5758,3",
		17: "5621,53",
		18: "5503,14",
		19: "5400,13",
		20: "5310,11",
		21: "5231,12",
		22: "5161,57",
		23: "5100,16",
		24: "5045,79",
		v1: 36e3,
		v2: "43982,9"
	}, {
		13: "6498,29",
		14: "6272,78",
		15: "6081,61",
		16: "5918,25",
		17: "5777,68",
		18: "5656,01",
		19: "5550,14",
		20: "5457,61",
		21: "5376,43",
		22: "5304,95",
		23: "5241,83",
		24: "5185,95",
		v1: 37e3,
		v2: "45204,64"
	}, {
		13: "6673,92",
		14: "6442,31",
		15: "6245,98",
		16: "6078,21",
		17: "5933,84",
		18: "5808,87",
		19: "5700,14",
		20: "5605,11",
		21: "5521,73",
		22: "5448,33",
		23: "5383,5",
		24: "5326,11",
		v1: 38e3,
		v2: "46426,39"
	}, {
		13: "6849,55",
		14: "6611,85",
		15: "6410,35",
		16: "6238,16",
		17: "6089,99",
		18: "5961,74",
		19: "5850,14",
		20: "5752,62",
		21: "5667,04",
		22: "5591,71",
		23: "5525,18",
		24: "5466,27",
		v1: 39e3,
		v2: "47648,14"
	}, {
		13: "7025,18",
		14: "6781,38",
		15: "6574,72",
		16: "6398,11",
		17: "6246,14",
		18: "6114,6",
		19: "6000,15",
		20: "5900,12",
		21: "5812,35",
		22: "5735,08",
		23: "5666,85",
		24: "5606,43",
		v1: 4e4,
		v2: "48869,88"
	}, {
		13: "7200,81",
		14: "6950,91",
		15: "6739,08",
		16: "6558,06",
		17: "6402,3",
		18: "6267,47",
		19: "6150,15",
		20: "6047,62",
		21: "5957,66",
		22: "5878,46",
		23: "5808,52",
		24: "5746,59",
		v1: 41e3,
		v2: "50091,63"
	}, {
		13: "7376,44",
		14: "7120,45",
		15: "6903,45",
		16: "6718,02",
		17: "6558,45",
		18: "6420,33",
		19: "6300,15",
		20: "6195,12",
		21: "6102,97",
		22: "6021,84",
		23: "5950,19",
		24: "5886,75",
		v1: 42e3,
		v2: "51313,38"
	}, {
		13: "7552,07",
		14: "7289,98",
		15: "7067,82",
		16: "6877,97",
		17: "6714,61",
		18: "6573,2",
		19: "6450,16",
		20: "6342,63",
		21: "6248,28",
		22: "6165,21",
		23: "6091,86",
		24: "6026,91",
		v1: 43e3,
		v2: "52535,13"
	}, {
		13: "7727,7",
		14: "7459,52",
		15: "7232,19",
		16: "7037,92",
		17: "6870,76",
		18: "6726,06",
		19: "6600,16",
		20: "6490,13",
		21: "6393,59",
		22: "6308,59",
		23: "6233,53",
		24: "6167,07",
		v1: 44e3,
		v2: "53756,87"
	}, {
		13: "7903,33",
		14: "7629,05",
		15: "7396,56",
		16: "7197,87",
		17: "7026,91",
		18: "6878,93",
		19: "6750,17",
		20: "6637,63",
		21: "6538,9",
		22: "6451,97",
		23: "6375,2",
		24: "6307,23",
		v1: 45e3,
		v2: "54978,62"
	}, {
		13: "8078,96",
		14: "7798,59",
		15: "7560,92",
		16: "7357,83",
		17: "7183,07",
		18: "7031,79",
		19: "6900,17",
		20: "6785,14",
		21: "6684,21",
		22: "6595,34",
		23: "6516,87",
		24: "6447,39",
		v1: 46e3,
		v2: "56200,37"
	}, {
		13: "8254,59",
		14: "7968,12",
		15: "7725,29",
		16: "7517,78",
		17: "7339,22",
		18: "7184,66",
		19: "7050,17",
		20: "6932,64",
		21: "6829,51",
		22: "6738,72",
		23: "6658,54",
		24: "6587,55",
		v1: 47e3,
		v2: "57422,11"
	}, {
		13: "8430,22",
		14: "8137,66",
		15: "7889,66",
		16: "7677,73",
		17: "7495,37",
		18: "7337,52",
		19: "7200,18",
		20: "7080,14",
		21: "6974,82",
		22: "6882,1",
		23: "6800,22",
		24: "6727,72",
		v1: 48e3,
		v2: "58643,86"
	}, {
		13: "8605,85",
		14: "8307,19",
		15: "8054,03",
		16: "7837,69",
		17: "7651,53",
		18: "7490,39",
		19: "7350,18",
		20: "7227,64",
		21: "7120,13",
		22: "7025,48",
		23: "6941,89",
		24: "6867,88",
		v1: 49e3,
		v2: "59865,61"
	}, {
		13: "8781,48",
		14: "8476,72",
		15: "8218,39",
		16: "7997,64",
		17: "7807,68",
		18: "7643,25",
		19: "7500,18",
		20: "7375,15",
		21: "7265,44",
		22: "7168,85",
		23: "7083,56",
		24: "7008,04",
		v1: 5e4,
		v2: "61087,35"
	}];

function _isNumber(t) {
	return !isNaN(parseFloat(t)) && isFinite(t)
}

function _sim_str2num(t) {
	return 0 === t || t ? Number(String(t).replace(",", ".")) : 0
}

function _print_number(t) {
	return v = _sim_str2num(t), v = String(Math.round(v)._format(0)).replace(",", "coma").replace(".", "punto").replace("punto", ",").replace("coma", "."), v
}

function _sim_getval(e, t) {
	var n = null,
		i = null,
		o = null;
	return _.forEach(t, function (t) {
		t && t.v1 && ((i = Math.abs(t.v1 - e)) < n || null == n) && (n = i, o = t)
	}), o
}

function getSimmons(t, e) {
	var n = Math.round(_sim_str2num(t)),
		i = Math.round(_sim_str2num(e));
	if (i < 3 || 24 < i) console.error("Cuotas incorrectas", i, e);
	else if (n < 3e3 || 5e4 < n) console.error("monto incorrecto", n, t);
	else if (h12 && d12) {
		var o = _sim_getval(n, i <= 12 ? _.clone(h12) : _.clone(d12));
		if (o) {
			var r = _.get(o, String(i)),
				a = _sim_str2num(_.get(o, "v1")),
				s = _sim_str2num(_.get(o, "v2")),
				l = String(i);
			if (r) {
				if (s) return {
					valor_cuota: r,
					valor_cuotaPrint: _print_number(r),
					capital: a,
					capitalPrint: _print_number(a),
					capitalOtorgado: s,
					capitalOtorgadoPrint: _print_number(s),
					cuotas: l,
					_registro: o,
					_montoUsr: n,
					_cuotasUsr: i
				};
				console.error("error en registro", o, s)
			} else console.error("error en registro", o, r)
		} else console.error("error en registro", o)
	} else console.error("no hay valores")
}
var wsProd = !(Number.prototype._format = function (t, e) {
		var n = "\\d(?=(\\d{" + (e || 3) + "})+" + (0 < t ? "\\." : "$") + ")";
		return this.toFixed(Math.max(0, ~~t)).replace(new RegExp(n, "g"), "$&,")
	}),
	_print_number = _print_number || null;
var wsProd = true;
if (wsProd) var config = {
	timeAjaxDebounce: 1e3,
	dniLenght: 6,
	ep_paso1: "http://digicred.com.ar/ws/API/public/api/v1/Pantallauno",
	ep_paso2: "http://digicred.com.ar/ws/API/public/api/v1/Pantallados",
	ep_paso3: "http://digicred.com.ar/ws/API/public/api/v1/Pantallatres",
	ep_paso4: "http://digicred.com.ar/ws/API/public/api/v1/Pantallacuatro"
};
else config = {
	timeAjaxDebounce: 1e3,
	dniLenght: 6,
	ep_paso1: "http://10.10.10.35/digicred/ws/API/public/api/v1/Pantallauno",
	ep_paso2: "http://10.10.10.35/digicred/ws/API/public/api/v1/Pantallados",
	ep_paso3: "http://10.10.10.35/digicred/ws/API/public/api/v1/Pantallatres",
	ep_paso4: "http://10.10.10.35/digicred/ws/API/public/api/v1/Pantallacuatro"
};

function removeSim() {
	$("#simulador").addClass("hidden")
}

function addSim() {
	$("#simulador").removeClass("hidden")
}

function calcCuotas() {
	if (getSimmons) {
		var t = getSimmons(parseInt(("" + $("#rangeMontoVal")[0].innerText).replace("$", "").replace(".", ""), 10), parseInt(("" + $("#rangeCutasVal")[0].innerText).replace("$", "").replace(".", ""), 10));
		t ? (addSim(), $("#cuotaSim span").html(t.valor_cuotaPrint), $("#cuotaSimCantCuot").html(t.cuotas)) : removeSim()
	} else removeSim()
}

function setPaso1Ranges() {
	$("#rangeMonto").on("input", function (t) {
		_print_number ? $("#rangeMontoVal").html("$" + _print_number(t.currentTarget.value)) : $("#rangeMontoVal").html("$" + t.currentTarget.value), calcCuotas()
	}), $("#rangeCutas").on("input", function (t) {
		$("#rangeCutasVal").html(t.currentTarget.value), calcCuotas()
	}), setTimeout(function () {
		calcCuotas()
	}, 1)
}

function _aux_hideAllPasos() {
	$("body, html").scrollTop(0), $("#PASO1").hide(), $("#PASO2").hide(), $("#PASO3").hide(), $("#PASO4").hide()
}

function _aux_goToTop() {
	$("body, html").scrollTop(0), setTimeout(function () {
		$("body, html").scrollTop(0)
	}, 1200)
}

function goToPaso1() {
	_aux_hideAllPasos(), $("#PASO1").removeClass("hidden").show(), _aux_goToTop(), setTimeout(function () {
		gtag && gtag("event", "pageview", {
			event_category: "pasos",
			event_label: "index.php?paso_1"
		})
	}, 10)
}

function goToPaso2() {
	_aux_hideAllPasos(), $("#PASO2").removeClass("hidden").show(), _aux_goToTop(), gtag && gtag("event", "pageview", {
		event_category: "pasos",
		event_label: "index.php?paso_2"
	})
}

function goToPaso3() {
	_aux_hideAllPasos(), $("#PASO3").removeClass("hidden").show(), _aux_goToTop(), gtag && gtag("event", "pageview", {
		event_category: "pasos",
		event_label: "index.php?paso_3"
	})
}

function goToPaso4() {
	_aux_hideAllPasos(), $("#PASO4").removeClass("hidden").show(), _aux_goToTop(), gtag && gtag("event", "pageview", {
		event_category: "pasos",
		event_label: "index.php?paso_4"
	})
}

function putLoader() {
	swal.close(), swal({
		confirmButtonText: !1,
		confirmButtonClass: !1,
		allowEscapeKey: !1,
		allowOutsideClick: !1
	}), swal.showLoading()
}

function removeLoader(t) {
	swal.close(), Boolean(t) && _aux_goToTop()
}

function makeListeners() {
	$(".__listener").on("blur", function () {
		__submitPaso1Hidden()
	})
}
$(document).ready(function () {
	console.log("v0.01.10"), setPaso1Ranges(), goToPaso1(), makeListeners()
});
var tmpLastAjaxPaso1 = null,
	paso1Obj = {};

function pre_submitPaso1() {
	$("#submitBTN1").click()
}

function __minValidPaso1() {
	var t = 0 < $("#PASO1").length,
		e = ("" + $("input[name=dni]").val()).length > config.dniLenght;
	return t && e
}

function __validPaso1() {
	return __minValidPaso1 && !0
}

function __submitPaso1Hidden(t, e) {
	__minValidPaso1() ? (paso1Obj.monto = parseInt(("" + $("#rangeMontoVal")[0].innerText).replace("$", "").replace(".", ""), 10), paso1Obj.cuotas = parseInt(("" + $("#rangeCutasVal")[0].innerText).replace("$", ""), 10), paso1Obj.valor_cuota = parseInt(("" + $("#cuotaSim")[0].innerText).replace("$", "").replace(".", ""), 10), paso1Obj.nombre = $("input[name=nombre]").val(), paso1Obj.apellido = $("input[name=apellido]").val(), paso1Obj.email = $("input[name=email]").val(), paso1Obj.dni = $("input[name=dni]").val(), paso1Obj.situacion_actual = $("select[name=situacion_actual]").val(), JSON.stringify(tmpLastAjaxPaso1) != JSON.stringify(paso1Obj) || !0 === e ? (tmpLastAjaxPaso1 = paso1Obj, console.log("\n", "[Paso1Obj]", paso1Obj, "callBack", !!t, "\n"), _ajaxPaso1Deb && _ajaxPaso1Deb(t)) : console.log("tmpLastAjaxPaso1 is same")) : console.log("valid")
}
var _ajaxPaso1Deb = _.debounce(_ajaxPaso1, config.timeAjaxDebounce);

function _ajaxPaso1(e) {
	validarEmail(paso1Obj.email) ? $.ajax({
		url: config.ep_paso1,
		type: "POST",
		data: JSON.stringify({
			avanzarPaso: "ok",
			nombre: paso1Obj.nombre,
			apellido: paso1Obj.apellido,
			dni: paso1Obj.dni,
			email: paso1Obj.email,
			monto: paso1Obj.monto,
			cuotas: paso1Obj.cuotas,
			valor_cuota: paso1Obj.valor_cuota,
			situacion_actual: paso1Obj.situacion_actual,
			time: (new Date).getTime()
		}),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (t) {
			("string" == typeof t || t instanceof String) && (t = JSON.parse(t)), console.log("AJAX PASO 1", "callBack:", !!e, "data:", t), t && t.token ? (localStorage.setItem("token", t.token), e && e()) : console.error("no token", t)
		}
	}) : swal({
		title: "Complete el email correctamente",
		text: "Por favor intentelo nuevamente",
		icon: "error"
	}).then(function () {
		setTimeout(function () {}, 50)
	})
}

function __submitPaso1() {
	if (console.log("__submitPaso1"), !__validPaso1()) return console.log("NO VALIDA PASO 1"), !0;
	putLoader();
	return __submitPaso1Hidden(function () {
		removeLoader(!0), goToPaso2()
	}, !0), !1
}
var tmpLastAjaxPaso2 = null,
	paso2Obj = {};

function pre_submitPaso2() {
	$("#submitBTN2").click()
}

function __minValidPaso2() {
	return 0 < $("#PASO2").length && !0
}

function __validPaso2() {
	return __minValidPaso2 && !0
}

function __submitPaso2Hidden(t, e) {
	__minValidPaso2() && (paso2Obj.nombre = $("input[name=nombre]").val(), paso2Obj.apellido = $("input[name=apellido]").val(), paso2Obj.email = $("input[name=email]").val(), paso2Obj.dni = $("input[name=dni]").val(), JSON.stringify(tmpLastAjaxPaso2) != JSON.stringify(paso2Obj) || !0 === e ? (tmpLastAjaxPaso2 = paso2Obj, console.log("\n", "[Paso2Obj]", paso2Obj, "callBack", !!t, "\n"), _ajaxPaso2Deb && _ajaxPaso2Deb(t)) : console.log("tmpLastAjaxPaso2 is same"))
}
var _ajaxPaso2Deb = _.debounce(_ajaxPaso2, config.timeAjaxDebounce);

function _ajaxPaso2(e) {
	var t = localStorage.getItem("token");
	t ? $("input[name=celular]").val().length < 6 ? swal({
		title: "Complete el celular correctamente",
		text: "Por favor intentelo nuevamente",
		icon: "error"
	}).then(function () {
		setTimeout(function () {}, 50)
	}) : $.ajax({
		url: config.ep_paso2,
		type: "POST",
		data: JSON.stringify({
			token: t,
			avanzarPaso: "ok",
			prefijo: $("input[name=prefijo]").val(),
			celular: $("input[name=celular]").val(),
			codigopostal: $("input[name=codigopostal]").val(),
			fechanacimiento: $("select[name=anionac]").val() + "-" + $("select[name=mesnac]").val() + "-" + $("select[name=dianac]").val(),
			ingresofecha: $("select[name=ingresofecha]").val(),
			sexo: $("select[name=sexo]").val(),
			ingresoneto: $("input[name=ingresoneto]").val(),
			time: (new Date).getTime()
		}),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (t) {
			if ("string" == typeof t || t instanceof String) try {
				t = JSON.parse(t)
			} catch (t) {
				swal.close(), swal({
					title: "Lamentamos informarte que hubo un error temporal en el servidor.",
					text: "Por favor intentalo más tarde",
					icon: "error"
				}, _aux_goToTop).then(function () {
					putLoader(), setTimeout(function () {
						window.location.href = "index.php"
					}, 50), console.log("Se hizo clic en el botón Aceptar")
				})
			}
			console.log(t), 1 == t.status ? "18" == t.idError && null != t.idError ? (swal({
				title: t.msg,
				text: "Total : " + t.montoPosible + ", " + t.mensajeCuotas,
				confirmButtonText: "OK",
				type: "success",
				confirmButtonClass: "okCreditoOpcion",
				allowEscapeKey: !1,
				allowOutsideClick: !1
			}, _aux_goToTop), $(".okCreditoOpcion").click(function () {
				_aux_goToTop(), goToPaso3()
			})) : (swal({
				title: t.msg,
				confirmButtonText: "OK",
				type: "success",
				confirmButtonClass: "okCredito",
				allowEscapeKey: !1,
				allowOutsideClick: !1
			}, _aux_goToTop), $(".okCredito").click(function () {
				_aux_goToTop(), goToPaso3()
			})) : (swal({
				text: "Solicitud Denegada",
				confirmButtonText: "OK",
				confirmButtonClass: "okCreditoIncorrecto",
				allowEscapeKey: !1,
				allowOutsideClick: !1
			}, _aux_goToTop), $(".okCreditoIncorrecto").click(function () {
				_aux_goToTop(), location.reload()
			})), console.log("AJAX PASO 2", "callBack", !!e)
		}
	}) : console.error("NO TOKEN")
}

function _envioPaso2() {
	var t = localStorage.getItem("token");
	t ? $.ajax({
		url: config.ep_paso2,
		type: "POST",
		data: JSON.stringify({
			token: t,
			prefijo: $("input[name=prefijo]").val(),
			celular: $("input[name=celular]").val(),
			codigopostal: $("input[name=codigopostal]").val(),
			fechanacimiento: $("select[name=anionac]").val() + "-" + $("select[name=mesnac]").val() + "-" + $("select[name=dianac]").val(),
			ingresofecha: $("select[name=ingresofecha]").val(),
			sexo: $("select[name=sexo]").val(),
			ingresoneto: $("input[name=ingresoneto]").val(),
			time: (new Date).getTime()
		}),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (t) {
			("string" == typeof t || t instanceof String) && (t = JSON.parse(t)), console.log(t)
		}
	}) : console.error("NO TOKEN")
}

function __submitPaso2() {
	if (console.log("__submitPaso2"), !__validPaso2()) return console.log("NO VALIDA PASO 2"), !0;
	putLoader();
	return __submitPaso2Hidden(function () {
		removeLoader(!0), goToPaso3()
	}, !0), !1
}
var tmpLastAjaxPaso3 = null,
	paso3Obj = {};

function pre_submitPaso3() {
	$("#submitBTN3").click()
}

function __minValidPaso3() {
	return 0 < $("#PASO3").length
}

function __validPaso3() {
	return __minValidPaso3 && !0
}

function __submitPaso3Hidden(t, e) {
	console.log(e), console.log(t), __minValidPaso3() && (paso3Obj.calle = $("input[name=calle]").val(), paso3Obj.numero = $("input[name=numero]").val(), paso3Obj.piso = $("input[name=piso]").val(), paso3Obj.depto = $("input[name=depto]").val(), paso3Obj.barrio = $("input[name=barrio]").val(), paso3Obj.localidad = $("input[name=localidad]").val(), paso3Obj.ciudad = $("input[name=ciudad]").val(), paso3Obj.provincia = $("input[name=provincia]").val(), paso3Obj.motivo = $("select[name=motivo]").val(), JSON.stringify(tmpLastAjaxPaso3) != JSON.stringify(paso3Obj) || !0 === e ? (tmpLastAjaxPaso3 = paso3Obj, console.log("\n", "[Paso3Obj]", paso3Obj, "callBack", !!t, "\n"), _ajaxPaso3Deb && _ajaxPaso3Deb(t)) : console.log("tmpLastAjaxPaso3 is same"))
}
var _ajaxPaso3Deb = _.debounce(_ajaxPaso3, config.timeAjaxDebounce);

function _ajaxPaso3(e) {
	var t = localStorage.getItem("token");
	t ? $.ajax({
		url: config.ep_paso3,
		type: "POST",
		data: JSON.stringify({
			token: t,
			avanzarPaso: "ok",
			calle: $("input[name=calle]").val(),
			barrio: $("input[name=barrio]").val(),
			ciudad: $("input[name=ciudad]").val(),
			numero: $("input[name=numero]").val(),
			piso: $("input[name=piso]").val(),
			depto: $("input[name=depto]").val(),
			localidad: $("input[name=localidad]").val(),
			provincia: $("input[name=provincia]").val(),
			motivo: $("select[name=motivo]").val(),
			time: (new Date).getTime()
		}),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (t) {
			("string" == typeof t || t instanceof String) && (t = JSON.parse(t)), console.log("AJAX PASO 3", "callBack", !!e), e && e()
		}
	}) : console.error("NO TOKEN")
}

function _envioPaso3() {
	var t = localStorage.getItem("token");
	t ? $.ajax({
		url: config.ep_paso3,
		type: "POST",
		data: JSON.stringify({
			token: t,
			avanzarPaso: "ok",
			calle: $("input[name=calle]").val(),
			barrio: $("input[name=barrio]").val(),
			ciudad: $("input[name=ciudad]").val(),
			numero: $("input[name=numero]").val(),
			piso: $("input[name=piso]").val(),
			depto: $("input[name=depto]").val(),
			localidad: $("input[name=localidad]").val(),
			provincia: $("input[name=provincia]").val(),
			motivo: $("select[name=motivo]").val(),
			time: (new Date).getTime()
		}),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (t) {
			("string" == typeof t || t instanceof String) && (t = JSON.parse(t))
		}
	}) : console.error("NO TOKEN")
}

function __submitPaso3() {
	if (console.log("__submitPaso3"), !__validPaso3()) return console.log("NO VALIDA PASO 3"), !0;
	putLoader();
	return __submitPaso3Hidden(function () {
		removeLoader(!0), goToPaso4()
	}, !0), !1
}

function __validPaso4() {
	return __minValidPaso3 && !0
}

function __submitPaso4Hidden(t, e) {
	console.log(e), console.log(t)
}

function _ajaxPaso4(e) {
	var t = localStorage.getItem("token");
	t ? $.ajax({
		url: config.ep_paso4,
		type: "POST",
		data: JSON.stringify({
			token: t,
			time: (new Date).getTime()
		}),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (t) {
			("string" == typeof t || t instanceof String) && (t = JSON.parse(t)), console.log("AJAX PASO 4", "callBack", !!e), e && e()
		}
	}) : console.error("NO TOKEN")
}

function ajaxFoto(e) {
	if (console.log("sin resize"), putLoader(), console.log(e), $(".divImagenes").find("input").prop("disabled", !0), localStorage.getItem("token")) {
		for (;
			"" == $("input[name=token]").val();) {
			console.log("token"), console.log("token: " + $("input[name=token]").val());
			var t = localStorage.getItem("token");
			$("input[name=token]").val(t)
		}
		for (console.log("token: " + $("input[name=token]").val()), $("input[name=token]").prop("disabled", !1); $(e).prop("disabled") || $("input[name=token]").prop("disabled");) $(e).prop("disabled", !1), $("input[name=token]").prop("disabled", !1);
		var n = $("#imgSolicitud")[0],
			i = new FormData(n);
		$.ajax({
			url: config.ep_paso4,
			type: "POST",
			data: i,
			contentType: !1,
			processData: !1
		}).done(function (t) {
			console.log(t), $(e).siblings(".btnCamera").addClass("fotoOk"), removeLoader(), swal({
				title: "Imagen cargada correctamente",
				text: "",
				icon: "success"
			}, _aux_goToTop), $(".divImagenes").find("input").prop("disabled", !1)
		}).fail(function () {
			$(".divImagenes").find("input").prop("disabled", !1), $(e).siblings(".btnCamera").removeClass("fotoOk"), swal({
				title: "Error al subir la imagen",
				text: "Intente nuevamente",
				icon: "error"
			}, _aux_goToTop), console.log("error")
		}).always(function () {
			console.log("complete")
		})
	} else swal({
		title: "Error al subir la imagen",
		text: "Intente nuevamente",
		icon: "error"
	}, _aux_goToTop), $(".divImagenes").find("input").prop("disabled", !1)
}

function _submitPaso4(t, e) {
	gtag && gtag("event", "pageview", {
		event_category: "pasos",
		event_label: "index.php?proceso_ok"
	}), swal({
		title: "Tu proceso se guardo correctamente,",
		text: "un asistente se pondra en contacto con vos a la brevedad.",
		icon: "success"
	}, _aux_goToTop).then(function () {
		putLoader(), setTimeout(function () {
			window.location.href = "index.php"
		}, 50), console.log("Se hizo clic en el botón Aceptar")
	})
}

function testEndPoint() {
	console.log("TEST ENDPOINT");
	var t = {
		nombre: "test",
		apellido: "test",
		dni: "test" + Math.random(),
		email: "test@test.com"
	};
	$.ajax({
		url: config.ep_paso1,
		type: "POST",
		data: JSON.stringify(t),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (t) {
			("string" == typeof t || t instanceof String) && (t = JSON.parse(t)), console.log("AJAX PASO 1 TEST", "data:", t), t && t.token ? localStorage.setItem("token", t.token) : console.log("no token", t)
		}
	})
}

function testEndPoint2() {
	console.log("TEST ENDPOINT 2");
	var t = localStorage.getItem("token");
	t ? $.ajax({
		url: config.ep_paso2,
		type: "POST",
		data: {
			token: t,
			celular: "55555555",
			prefijo: "011",
			codigopostal: "1114",
			fechanacimiento: "1994-03-09",
			ingresofecha: "1994-03-09",
			sexo: "m"
		},
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (t) {
			("string" == typeof t || t instanceof String) && (t = JSON.parse(t)), console.log("AJAX PASO 2 TEST", "data:", t)
		}
	}) : console.error("NO TOKEN")
}

function testEndPoint3() {
	console.log("TEST ENDPOINT 3");
	var t = localStorage.getItem("token");
	t ? $.ajax({
		url: config.ep_paso3,
		type: "POST",
		data: {
			token: t,
			calle: "Av Belgrano",
			numero: "453",
			provincia: "Buenos Aires",
			ciudad: "Quilmes",
			piso: "ninguno",
			depto: "A",
			barrio: "La Florida",
			localidad: "Solano"
		},
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (t) {
			("string" == typeof t || t instanceof String) && (t = JSON.parse(t)), console.log("AJAX PASO 2 TEST", "data:", t)
		}
	}) : console.error("NO TOKEN")
}

function ajaxFotoConResize(e) {
	if (console.log("con resize"), putLoader(), console.log(e), $(".divImagenes").find("input").prop("disabled", !0), localStorage.getItem("token")) {
		for (;
			"" == $("input[name=token]").val();) {
			console.log("token"), console.log("token: " + $("input[name=token]").val());
			var t = localStorage.getItem("token");
			$("input[name=token]").val(t)
		}
		for (console.log("token: " + $("input[name=token]").val()), $("input[name=token]").prop("disabled", !1); $(e).prop("disabled") || $("input[name=token]").prop("disabled");) $(e).prop("disabled", !1), $("input[name=token]").prop("disabled", !1);
		var n = $("#imgSolicitud")[0],
			i = (new FormData(n), $(e).get(0).files[0]),
			o = $(e).prop("name"),
			r = $("input[name=token]").val();
		resizeImage(i, 2e3, function (t) {
			$.ajax({
				url: config.ep_paso4,
				type: "POST",
				data: {
					tipo: o,
					token: r,
					imagen: t
				}
			}).done(function (t) {
				$(e).siblings(".btnCamera").addClass("fotoOk"), removeLoader(), swal({
					title: "Imagen cargada correctamente",
					text: "",
					icon: "success"
				}, _aux_goToTop), $(".divImagenes").find("input").prop("disabled", !1)
			}).fail(function () {
				$(".divImagenes").find("input").prop("disabled", !1), $(e).siblings(".btnCamera").removeClass("fotoOk"), swal({
					title: "Error al subir la imagen",
					text: "Intente nuevamente",
					icon: "error"
				}, _aux_goToTop), console.log("error")
			}).always(function () {
				console.log("complete")
			})
		})
	} else swal({
		title: "Error al subir la imagen",
		text: "Intente nuevamente",
		icon: "error"
	}, _aux_goToTop), $(".divImagenes").find("input").prop("disabled", !1)
}

function resizeImage(t, i, o) {
	var e = new FileReader;
	e.onload = function () {
		var n = new Image;
		n.onload = function () {
			var t = document.createElement("canvas");
			n.width > i && (n.height *= i / n.width, n.width = i);
			var e = t.getContext("2d");
			e.clearRect(0, 0, t.width, t.height), t.width = n.width, t.height = n.height, e.drawImage(n, 0, 0, n.width, n.height), o(t.toDataURL("image/jpeg", .7))
		}, n.src = this.result
	}, e.readAsDataURL(t), e.onabort = function () {
		console.log("The upload was aborted.")
	}, e.onerror = function () {
		console.log("An error occured while reading the file.")
	}
}

function validarEmail(t) {
	return !!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(t)
}
