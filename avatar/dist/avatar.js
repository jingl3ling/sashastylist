function he(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function R(t) {
  return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, R(t);
}
function Yo(t) {
  var e = (function(n, r) {
    if (R(n) != "object" || !n) return n;
    var o = n[Symbol.toPrimitive];
    if (o !== void 0) {
      var s = o.call(n, r);
      if (R(s) != "object") return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(n);
  })(t, "string");
  return R(e) == "symbol" ? e : e + "";
}
function Zr(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Yo(r.key), r);
  }
}
function fe(t, e, n) {
  return e && Zr(t.prototype, e), n && Zr(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Tn(t, e) {
  if (e && (R(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return (function(n) {
    if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
  })(t);
}
function Se(t) {
  return Se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, Se(t);
}
function Dt(t, e) {
  return Dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Dt(t, e);
}
function On(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Dt(t, e);
}
function Te(t, e, n) {
  return (e = Yo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ei(t, e, n, r, o, s, a) {
  try {
    var c = t[s](a), u = c.value;
  } catch (p) {
    return void n(p);
  }
  c.done ? e(u) : Promise.resolve(u).then(r, o);
}
function D(t) {
  return function() {
    var e = this, n = arguments;
    return new Promise(function(r, o) {
      var s = t.apply(e, n);
      function a(u) {
        ei(s, r, o, a, c, "next", u);
      }
      function c(u) {
        ei(s, r, o, a, c, "throw", u);
      }
      a(void 0);
    });
  };
}
function ln(t, e) {
  if (t == null) return {};
  var n, r, o = (function(a, c) {
    if (a == null) return {};
    var u = {};
    for (var p in a) if ({}.hasOwnProperty.call(a, p)) {
      if (c.indexOf(p) !== -1) continue;
      u[p] = a[p];
    }
    return u;
  })(t, e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) === -1 && {}.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
  }
  return o;
}
function rr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Qo(t, e) {
  if (t) {
    if (typeof t == "string") return rr(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rr(t, e) : void 0;
  }
}
function Q(t, e) {
  return (function(n) {
    if (Array.isArray(n)) return n;
  })(t) || (function(n, r) {
    var o = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (o != null) {
      var s, a, c, u, p = [], g = !0, v = !1;
      try {
        if (c = (o = o.call(n)).next, r === 0) {
          if (Object(o) !== o) return;
          g = !1;
        } else for (; !(g = (s = c.call(o)).done) && (p.push(s.value), p.length !== r); g = !0) ;
      } catch (T) {
        v = !0, a = T;
      } finally {
        try {
          if (!g && o.return != null && (u = o.return(), Object(u) !== u)) return;
        } finally {
          if (v) throw a;
        }
      }
      return p;
    }
  })(t, e) || Qo(t, e) || (function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function Xs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ti, Wt = { exports: {} }, ir = (function() {
  if (ti) return Wt.exports;
  ti = 1;
  var t, e = typeof Reflect == "object" ? Reflect : null, n = e && typeof e.apply == "function" ? e.apply : function(m, _, b) {
    return Function.prototype.apply.call(m, _, b);
  };
  t = e && typeof e.ownKeys == "function" ? e.ownKeys : Object.getOwnPropertySymbols ? function(m) {
    return Object.getOwnPropertyNames(m).concat(Object.getOwnPropertySymbols(m));
  } : function(m) {
    return Object.getOwnPropertyNames(m);
  };
  var r = Number.isNaN || function(m) {
    return m != m;
  };
  function o() {
    o.init.call(this);
  }
  Wt.exports = o, Wt.exports.once = function(m, _) {
    return new Promise(function(b, M) {
      function P(O) {
        m.removeListener(_, x), M(O);
      }
      function x() {
        typeof m.removeListener == "function" && m.removeListener("error", P), b([].slice.call(arguments));
      }
      w(m, _, x, { once: !0 }), _ !== "error" && (function(O, N, J) {
        typeof O.on == "function" && w(O, "error", N, J);
      })(m, P, { once: !0 });
    });
  }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
  var s = 10;
  function a(m) {
    if (typeof m != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof m);
  }
  function c(m) {
    return m._maxListeners === void 0 ? o.defaultMaxListeners : m._maxListeners;
  }
  function u(m, _, b, M) {
    var P, x, O, N;
    if (a(b), (x = m._events) === void 0 ? (x = m._events = /* @__PURE__ */ Object.create(null), m._eventsCount = 0) : (x.newListener !== void 0 && (m.emit("newListener", _, b.listener ? b.listener : b), x = m._events), O = x[_]), O === void 0) O = x[_] = b, ++m._eventsCount;
    else if (typeof O == "function" ? O = x[_] = M ? [b, O] : [O, b] : M ? O.unshift(b) : O.push(b), (P = c(m)) > 0 && O.length > P && !O.warned) {
      O.warned = !0;
      var J = new Error("Possible EventEmitter memory leak detected. " + O.length + " " + String(_) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      J.name = "MaxListenersExceededWarning", J.emitter = m, J.type = _, J.count = O.length, N = J, console && console.warn && console.warn(N);
    }
    return m;
  }
  function p() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function g(m, _, b) {
    var M = { fired: !1, wrapFn: void 0, target: m, type: _, listener: b }, P = p.bind(M);
    return P.listener = b, M.wrapFn = P, P;
  }
  function v(m, _, b) {
    var M = m._events;
    if (M === void 0) return [];
    var P = M[_];
    return P === void 0 ? [] : typeof P == "function" ? b ? [P.listener || P] : [P] : b ? (function(x) {
      for (var O = new Array(x.length), N = 0; N < O.length; ++N) O[N] = x[N].listener || x[N];
      return O;
    })(P) : S(P, P.length);
  }
  function T(m) {
    var _ = this._events;
    if (_ !== void 0) {
      var b = _[m];
      if (typeof b == "function") return 1;
      if (b !== void 0) return b.length;
    }
    return 0;
  }
  function S(m, _) {
    for (var b = new Array(_), M = 0; M < _; ++M) b[M] = m[M];
    return b;
  }
  function w(m, _, b, M) {
    if (typeof m.on == "function") M.once ? m.once(_, b) : m.on(_, b);
    else {
      if (typeof m.addEventListener != "function") throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof m);
      m.addEventListener(_, function P(x) {
        M.once && m.removeEventListener(_, P), b(x);
      });
    }
  }
  return Object.defineProperty(o, "defaultMaxListeners", { enumerable: !0, get: function() {
    return s;
  }, set: function(m) {
    if (typeof m != "number" || m < 0 || r(m)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + m + ".");
    s = m;
  } }), o.init = function() {
    this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, o.prototype.setMaxListeners = function(m) {
    if (typeof m != "number" || m < 0 || r(m)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + m + ".");
    return this._maxListeners = m, this;
  }, o.prototype.getMaxListeners = function() {
    return c(this);
  }, o.prototype.emit = function(m) {
    for (var _ = [], b = 1; b < arguments.length; b++) _.push(arguments[b]);
    var M = m === "error", P = this._events;
    if (P !== void 0) M = M && P.error === void 0;
    else if (!M) return !1;
    if (M) {
      var x;
      if (_.length > 0 && (x = _[0]), x instanceof Error) throw x;
      var O = new Error("Unhandled error." + (x ? " (" + x.message + ")" : ""));
      throw O.context = x, O;
    }
    var N = P[m];
    if (N === void 0) return !1;
    if (typeof N == "function") n(N, this, _);
    else {
      var J = N.length, ee = S(N, J);
      for (b = 0; b < J; ++b) n(ee[b], this, _);
    }
    return !0;
  }, o.prototype.addListener = function(m, _) {
    return u(this, m, _, !1);
  }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(m, _) {
    return u(this, m, _, !0);
  }, o.prototype.once = function(m, _) {
    return a(_), this.on(m, g(this, m, _)), this;
  }, o.prototype.prependOnceListener = function(m, _) {
    return a(_), this.prependListener(m, g(this, m, _)), this;
  }, o.prototype.removeListener = function(m, _) {
    var b, M, P, x, O;
    if (a(_), (M = this._events) === void 0) return this;
    if ((b = M[m]) === void 0) return this;
    if (b === _ || b.listener === _) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete M[m], M.removeListener && this.emit("removeListener", m, b.listener || _));
    else if (typeof b != "function") {
      for (P = -1, x = b.length - 1; x >= 0; x--) if (b[x] === _ || b[x].listener === _) {
        O = b[x].listener, P = x;
        break;
      }
      if (P < 0) return this;
      P === 0 ? b.shift() : (function(N, J) {
        for (; J + 1 < N.length; J++) N[J] = N[J + 1];
        N.pop();
      })(b, P), b.length === 1 && (M[m] = b[0]), M.removeListener !== void 0 && this.emit("removeListener", m, O || _);
    }
    return this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(m) {
    var _, b, M;
    if ((b = this._events) === void 0) return this;
    if (b.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : b[m] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete b[m]), this;
    if (arguments.length === 0) {
      var P, x = Object.keys(b);
      for (M = 0; M < x.length; ++M) (P = x[M]) !== "removeListener" && this.removeAllListeners(P);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (typeof (_ = b[m]) == "function") this.removeListener(m, _);
    else if (_ !== void 0) for (M = _.length - 1; M >= 0; M--) this.removeListener(m, _[M]);
    return this;
  }, o.prototype.listeners = function(m) {
    return v(this, m, !0);
  }, o.prototype.rawListeners = function(m) {
    return v(this, m, !1);
  }, o.listenerCount = function(m, _) {
    return typeof m.listenerCount == "function" ? m.listenerCount(_) : T.call(m, _);
  }, o.prototype.listenerCount = T, o.prototype.eventNames = function() {
    return this._eventsCount > 0 ? t(this._events) : [];
  }, Wt.exports;
})(), Ht = Xs(ir), ni = Object.prototype.hasOwnProperty;
function ri(t, e, n) {
  for (n of t.keys()) if (ae(n, e)) return n;
}
function ae(t, e) {
  var n, r, o;
  if (t === e) return !0;
  if (t && e && (n = t.constructor) === e.constructor) {
    if (n === Date) return t.getTime() === e.getTime();
    if (n === RegExp) return t.toString() === e.toString();
    if (n === Array) {
      if ((r = t.length) === e.length) for (; r-- && ae(t[r], e[r]); ) ;
      return r === -1;
    }
    if (n === Set) {
      if (t.size !== e.size) return !1;
      for (r of t)
        if ((o = r) && typeof o == "object" && !(o = ri(e, o)) || !e.has(o)) return !1;
      return !0;
    }
    if (n === Map) {
      if (t.size !== e.size) return !1;
      for (r of t)
        if ((o = r[0]) && typeof o == "object" && !(o = ri(e, o)) || !ae(r[1], e.get(o))) return !1;
      return !0;
    }
    if (n === ArrayBuffer) t = new Uint8Array(t), e = new Uint8Array(e);
    else if (n === DataView) {
      if ((r = t.byteLength) === e.byteLength) for (; r-- && t.getInt8(r) === e.getInt8(r); ) ;
      return r === -1;
    }
    if (ArrayBuffer.isView(t)) {
      if ((r = t.byteLength) === e.byteLength) for (; r-- && t[r] === e[r]; ) ;
      return r === -1;
    }
    if (!n || typeof t == "object") {
      for (n in r = 0, t)
        if (ni.call(t, n) && ++r && !ni.call(e, n) || !(n in e) || !ae(t[n], e[n])) return !1;
      return Object.keys(e).length === r;
    }
  }
  return t != t && e != e;
}
const Zs = { AmazonBot: "amazonbot", "Amazon Silk": "amazon_silk", "Android Browser": "android", BaiduSpider: "baiduspider", Bada: "bada", BingCrawler: "bingcrawler", Brave: "brave", BlackBerry: "blackberry", "ChatGPT-User": "chatgpt_user", Chrome: "chrome", ClaudeBot: "claudebot", Chromium: "chromium", Diffbot: "diffbot", DuckDuckBot: "duckduckbot", DuckDuckGo: "duckduckgo", Electron: "electron", Epiphany: "epiphany", FacebookExternalHit: "facebookexternalhit", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", GPTBot: "gptbot", "Internet Explorer": "ie", InternetArchiveCrawler: "internetarchivecrawler", "K-Meleon": "k_meleon", LibreWolf: "librewolf", Linespider: "linespider", Maxthon: "maxthon", "Meta-ExternalAds": "meta_externalads", "Meta-ExternalAgent": "meta_externalagent", "Meta-ExternalFetcher": "meta_externalfetcher", "Meta-WebIndexer": "meta_webindexer", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", "OAI-SearchBot": "oai_searchbot", Omgilibot: "omgilibot", Opera: "opera", "Opera Coast": "opera_coast", "Pale Moon": "pale_moon", PerplexityBot: "perplexitybot", "Perplexity-User": "perplexity_user", PhantomJS: "phantomjs", PingdomBot: "pingdombot", Puffin: "puffin", QQ: "qq", QQLite: "qqlite", QupZilla: "qupzilla", Roku: "roku", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SlackBot: "slackbot", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", "Sogou Browser": "sogou", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", YahooSlurp: "yahooslurp", "Yandex Browser": "yandex", YandexBot: "yandexbot", YouBot: "youbot" }, Ko = { amazonbot: "AmazonBot", amazon_silk: "Amazon Silk", android: "Android Browser", baiduspider: "BaiduSpider", bada: "Bada", bingcrawler: "BingCrawler", blackberry: "BlackBerry", brave: "Brave", chatgpt_user: "ChatGPT-User", chrome: "Chrome", claudebot: "ClaudeBot", chromium: "Chromium", diffbot: "Diffbot", duckduckbot: "DuckDuckBot", duckduckgo: "DuckDuckGo", edge: "Microsoft Edge", electron: "Electron", epiphany: "Epiphany", facebookexternalhit: "FacebookExternalHit", firefox: "Firefox", focus: "Focus", generic: "Generic", google_search: "Google Search", googlebot: "Googlebot", gptbot: "GPTBot", ie: "Internet Explorer", internetarchivecrawler: "InternetArchiveCrawler", k_meleon: "K-Meleon", librewolf: "LibreWolf", linespider: "Linespider", maxthon: "Maxthon", meta_externalads: "Meta-ExternalAds", meta_externalagent: "Meta-ExternalAgent", meta_externalfetcher: "Meta-ExternalFetcher", meta_webindexer: "Meta-WebIndexer", mz: "MZ Browser", naver: "NAVER Whale Browser", oai_searchbot: "OAI-SearchBot", omgilibot: "Omgilibot", opera: "Opera", opera_coast: "Opera Coast", pale_moon: "Pale Moon", perplexitybot: "PerplexityBot", perplexity_user: "Perplexity-User", phantomjs: "PhantomJS", pingdombot: "PingdomBot", puffin: "Puffin", qq: "QQ Browser", qqlite: "QQ Browser Lite", qupzilla: "QupZilla", roku: "Roku", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", slackbot: "SlackBot", sleipnir: "Sleipnir", sogou: "Sogou Browser", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yahooslurp: "YahooSlurp", yandex: "Yandex Browser", yandexbot: "YandexBot", youbot: "YouBot" }, j = { bot: "bot", desktop: "desktop", mobile: "mobile", tablet: "tablet", tv: "tv" }, te = { Android: "Android", Bada: "Bada", BlackBerry: "BlackBerry", ChromeOS: "Chrome OS", HarmonyOS: "HarmonyOS", iOS: "iOS", Linux: "Linux", MacOS: "macOS", PlayStation4: "PlayStation 4", Roku: "Roku", Tizen: "Tizen", WebOS: "WebOS", Windows: "Windows", WindowsPhone: "Windows Phone" }, Re = { Blink: "Blink", EdgeHTML: "EdgeHTML", Gecko: "Gecko", Presto: "Presto", Trident: "Trident", WebKit: "WebKit" };
class y {
  static getFirstMatch(e, n) {
    const r = n.match(e);
    return r && r.length > 0 && r[1] || "";
  }
  static getSecondMatch(e, n) {
    const r = n.match(e);
    return r && r.length > 1 && r[2] || "";
  }
  static matchAndReturnConst(e, n, r) {
    if (e.test(n)) return r;
  }
  static getWindowsVersionName(e) {
    switch (e) {
      case "NT":
        return "NT";
      case "XP":
      case "NT 5.1":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  static getMacOSVersionName(e) {
    const n = e.split(".").splice(0, 2).map((s) => parseInt(s, 10) || 0);
    n.push(0);
    const r = n[0], o = n[1];
    if (r === 10) switch (o) {
      case 5:
        return "Leopard";
      case 6:
        return "Snow Leopard";
      case 7:
        return "Lion";
      case 8:
        return "Mountain Lion";
      case 9:
        return "Mavericks";
      case 10:
        return "Yosemite";
      case 11:
        return "El Capitan";
      case 12:
        return "Sierra";
      case 13:
        return "High Sierra";
      case 14:
        return "Mojave";
      case 15:
        return "Catalina";
      default:
        return;
    }
    switch (r) {
      case 11:
        return "Big Sur";
      case 12:
        return "Monterey";
      case 13:
        return "Ventura";
      case 14:
        return "Sonoma";
      case 15:
        return "Sequoia";
      default:
        return;
    }
  }
  static getAndroidVersionName(e) {
    const n = e.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
    if (n.push(0), !(n[0] === 1 && n[1] < 5)) return n[0] === 1 && n[1] < 6 ? "Cupcake" : n[0] === 1 && n[1] >= 6 ? "Donut" : n[0] === 2 && n[1] < 2 ? "Eclair" : n[0] === 2 && n[1] === 2 ? "Froyo" : n[0] === 2 && n[1] > 2 ? "Gingerbread" : n[0] === 3 ? "Honeycomb" : n[0] === 4 && n[1] < 1 ? "Ice Cream Sandwich" : n[0] === 4 && n[1] < 4 ? "Jelly Bean" : n[0] === 4 && n[1] >= 4 ? "KitKat" : n[0] === 5 ? "Lollipop" : n[0] === 6 ? "Marshmallow" : n[0] === 7 ? "Nougat" : n[0] === 8 ? "Oreo" : n[0] === 9 ? "Pie" : void 0;
  }
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  static compareVersions(e, n, r = !1) {
    const o = y.getVersionPrecision(e), s = y.getVersionPrecision(n);
    let a = Math.max(o, s), c = 0;
    const u = y.map([e, n], (p) => {
      const g = a - y.getVersionPrecision(p), v = p + new Array(g + 1).join(".0");
      return y.map(v.split("."), (T) => new Array(20 - T.length).join("0") + T).reverse();
    });
    for (r && (c = a - Math.min(o, s)), a -= 1; a >= c; ) {
      if (u[0][a] > u[1][a]) return 1;
      if (u[0][a] === u[1][a]) {
        if (a === c) return 0;
        a -= 1;
      } else if (u[0][a] < u[1][a]) return -1;
    }
  }
  static map(e, n) {
    const r = [];
    let o;
    if (Array.prototype.map) return Array.prototype.map.call(e, n);
    for (o = 0; o < e.length; o += 1) r.push(n(e[o]));
    return r;
  }
  static find(e, n) {
    let r, o;
    if (Array.prototype.find) return Array.prototype.find.call(e, n);
    for (r = 0, o = e.length; r < o; r += 1) {
      const s = e[r];
      if (n(s, r)) return s;
    }
  }
  static assign(e, ...n) {
    const r = e;
    let o, s;
    if (Object.assign) return Object.assign(e, ...n);
    for (o = 0, s = n.length; o < s; o += 1) {
      const a = n[o];
      typeof a == "object" && a !== null && Object.keys(a).forEach((c) => {
        r[c] = a[c];
      });
    }
    return e;
  }
  static getBrowserAlias(e) {
    return Zs[e];
  }
  static getBrowserTypeByAlias(e) {
    return Ko[e] || "";
  }
}
const L = /version\/(\d+(\.?_?\d+)+)/i, ea = [{ test: [/gptbot/i], describe(t) {
  const e = { name: "GPTBot" }, n = y.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/chatgpt-user/i], describe(t) {
  const e = { name: "ChatGPT-User" }, n = y.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/oai-searchbot/i], describe(t) {
  const e = { name: "OAI-SearchBot" }, n = y.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe(t) {
  const e = { name: "ClaudeBot" }, n = y.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/omgilibot/i, /webzio-extended/i], describe(t) {
  const e = { name: "Omgilibot" }, n = y.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/diffbot/i], describe(t) {
  const e = { name: "Diffbot" }, n = y.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/perplexitybot/i], describe(t) {
  const e = { name: "PerplexityBot" }, n = y.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/perplexity-user/i], describe(t) {
  const e = { name: "Perplexity-User" }, n = y.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/youbot/i], describe(t) {
  const e = { name: "YouBot" }, n = y.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/meta-webindexer/i], describe(t) {
  const e = { name: "Meta-WebIndexer" }, n = y.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/meta-externalads/i], describe(t) {
  const e = { name: "Meta-ExternalAds" }, n = y.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/meta-externalagent/i], describe(t) {
  const e = { name: "Meta-ExternalAgent" }, n = y.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/meta-externalfetcher/i], describe(t) {
  const e = { name: "Meta-ExternalFetcher" }, n = y.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/googlebot/i], describe(t) {
  const e = { name: "Googlebot" }, n = y.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/linespider/i], describe(t) {
  const e = { name: "Linespider" }, n = y.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/amazonbot/i], describe(t) {
  const e = { name: "AmazonBot" }, n = y.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/bingbot/i], describe(t) {
  const e = { name: "BingCrawler" }, n = y.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/baiduspider/i], describe(t) {
  const e = { name: "BaiduSpider" }, n = y.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/duckduckbot/i], describe(t) {
  const e = { name: "DuckDuckBot" }, n = y.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/ia_archiver/i], describe(t) {
  const e = { name: "InternetArchiveCrawler" }, n = y.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: () => ({ name: "FacebookExternalHit" }) }, { test: [/slackbot/i, /slack-imgProxy/i], describe(t) {
  const e = { name: "SlackBot" }, n = y.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/yahoo!?[\s/]*slurp/i], describe: () => ({ name: "YahooSlurp" }) }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: () => ({ name: "YandexBot" }) }, { test: [/pingdom/i], describe: () => ({ name: "PingdomBot" }) }, { test: [/opera/i], describe(t) {
  const e = { name: "Opera" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/opr\/|opios/i], describe(t) {
  const e = { name: "Opera" }, n = y.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/SamsungBrowser/i], describe(t) {
  const e = { name: "Samsung Internet for Android" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/Whale/i], describe(t) {
  const e = { name: "NAVER Whale Browser" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/PaleMoon/i], describe(t) {
  const e = { name: "Pale Moon" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/MZBrowser/i], describe(t) {
  const e = { name: "MZ Browser" }, n = y.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/focus/i], describe(t) {
  const e = { name: "Focus" }, n = y.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/swing/i], describe(t) {
  const e = { name: "Swing" }, n = y.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/coast/i], describe(t) {
  const e = { name: "Opera Coast" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(t) {
  const e = { name: "Opera Touch" }, n = y.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/yabrowser/i], describe(t) {
  const e = { name: "Yandex Browser" }, n = y.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/ucbrowser/i], describe(t) {
  const e = { name: "UC Browser" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/Maxthon|mxios/i], describe(t) {
  const e = { name: "Maxthon" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/epiphany/i], describe(t) {
  const e = { name: "Epiphany" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/puffin/i], describe(t) {
  const e = { name: "Puffin" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/sleipnir/i], describe(t) {
  const e = { name: "Sleipnir" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/k-meleon/i], describe(t) {
  const e = { name: "K-Meleon" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/micromessenger/i], describe(t) {
  const e = { name: "WeChat" }, n = y.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/qqbrowser/i], describe(t) {
  const e = { name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser" }, n = y.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/msie|trident/i], describe(t) {
  const e = { name: "Internet Explorer" }, n = y.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/\sedg\//i], describe(t) {
  const e = { name: "Microsoft Edge" }, n = y.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/edg([ea]|ios)/i], describe(t) {
  const e = { name: "Microsoft Edge" }, n = y.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/vivaldi/i], describe(t) {
  const e = { name: "Vivaldi" }, n = y.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/seamonkey/i], describe(t) {
  const e = { name: "SeaMonkey" }, n = y.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/sailfish/i], describe(t) {
  const e = { name: "Sailfish" }, n = y.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
  return n && (e.version = n), e;
} }, { test: [/silk/i], describe(t) {
  const e = { name: "Amazon Silk" }, n = y.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/phantom/i], describe(t) {
  const e = { name: "PhantomJS" }, n = y.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/slimerjs/i], describe(t) {
  const e = { name: "SlimerJS" }, n = y.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(t) {
  const e = { name: "BlackBerry" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/(web|hpw)[o0]s/i], describe(t) {
  const e = { name: "WebOS Browser" }, n = y.getFirstMatch(L, t) || y.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/bada/i], describe(t) {
  const e = { name: "Bada" }, n = y.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/tizen/i], describe(t) {
  const e = { name: "Tizen" }, n = y.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/qupzilla/i], describe(t) {
  const e = { name: "QupZilla" }, n = y.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/librewolf/i], describe(t) {
  const e = { name: "LibreWolf" }, n = y.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/firefox|iceweasel|fxios/i], describe(t) {
  const e = { name: "Firefox" }, n = y.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/electron/i], describe(t) {
  const e = { name: "Electron" }, n = y.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/sogoumobilebrowser/i, /metasr/i, /se 2\.[x]/i], describe(t) {
  const e = { name: "Sogou Browser" }, n = y.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i, t), r = y.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t), o = y.getFirstMatch(/se ([\d.]+)x/i, t), s = n || r || o;
  return s && (e.version = s), e;
} }, { test: [/MiuiBrowser/i], describe(t) {
  const e = { name: "Miui" }, n = y.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: (t) => !!t.hasBrand("DuckDuckGo") || t.test(/\sDdg\/[\d.]+$/i), describe(t, e) {
  const n = { name: "DuckDuckGo" };
  if (e) {
    const o = e.getBrandVersion("DuckDuckGo");
    if (o) return n.version = o, n;
  }
  const r = y.getFirstMatch(/\sDdg\/([\d.]+)$/i, t);
  return r && (n.version = r), n;
} }, { test: (t) => t.hasBrand("Brave"), describe(t, e) {
  const n = { name: "Brave" };
  if (e) {
    const r = e.getBrandVersion("Brave");
    if (r) return n.version = r, n;
  }
  return n;
} }, { test: [/chromium/i], describe(t) {
  const e = { name: "Chromium" }, n = y.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/chrome|crios|crmo/i], describe(t) {
  const e = { name: "Chrome" }, n = y.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/GSA/i], describe(t) {
  const e = { name: "Google Search" }, n = y.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test(t) {
  const e = !t.test(/like android/i), n = t.test(/android/i);
  return e && n;
}, describe(t) {
  const e = { name: "Android Browser" }, n = y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/playstation 4/i], describe(t) {
  const e = { name: "PlayStation 4" }, n = y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/safari|applewebkit/i], describe(t) {
  const e = { name: "Safari" }, n = y.getFirstMatch(L, t);
  return n && (e.version = n), e;
} }, { test: [/.*/i], describe(t) {
  const e = t.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
  return { name: y.getFirstMatch(e, t), version: y.getSecondMatch(e, t) };
} }];
var ta = [{ test: [/Roku\/DVP/], describe(t) {
  const e = y.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
  return { name: te.Roku, version: e };
} }, { test: [/windows phone/i], describe(t) {
  const e = y.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
  return { name: te.WindowsPhone, version: e };
} }, { test: [/windows /i], describe(t) {
  const e = y.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t), n = y.getWindowsVersionName(e);
  return { name: te.Windows, version: e, versionName: n };
} }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(t) {
  const e = { name: te.iOS }, n = y.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
  return n && (e.version = n), e;
} }, { test: [/macintosh/i], describe(t) {
  const e = y.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."), n = y.getMacOSVersionName(e), r = { name: te.MacOS, version: e };
  return n && (r.versionName = n), r;
} }, { test: [/(ipod|iphone|ipad)/i], describe(t) {
  const e = y.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
  return { name: te.iOS, version: e };
} }, { test: [/OpenHarmony/i], describe(t) {
  const e = y.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i, t);
  return { name: te.HarmonyOS, version: e };
} }, { test(t) {
  const e = !t.test(/like android/i), n = t.test(/android/i);
  return e && n;
}, describe(t) {
  const e = y.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t), n = y.getAndroidVersionName(e), r = { name: te.Android, version: e };
  return n && (r.versionName = n), r;
} }, { test: [/(web|hpw)[o0]s/i], describe(t) {
  const e = y.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t), n = { name: te.WebOS };
  return e && e.length && (n.version = e), n;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(t) {
  const e = y.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || y.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || y.getFirstMatch(/\bbb(\d+)/i, t);
  return { name: te.BlackBerry, version: e };
} }, { test: [/bada/i], describe(t) {
  const e = y.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
  return { name: te.Bada, version: e };
} }, { test: [/tizen/i], describe(t) {
  const e = y.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
  return { name: te.Tizen, version: e };
} }, { test: [/linux/i], describe: () => ({ name: te.Linux }) }, { test: [/CrOS/], describe: () => ({ name: te.ChromeOS }) }, { test: [/PlayStation 4/], describe(t) {
  const e = y.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
  return { name: te.PlayStation4, version: e };
} }], na = [{ test: [/googlebot/i], describe: () => ({ type: j.bot, vendor: "Google" }) }, { test: [/linespider/i], describe: () => ({ type: j.bot, vendor: "Line" }) }, { test: [/amazonbot/i], describe: () => ({ type: j.bot, vendor: "Amazon" }) }, { test: [/gptbot/i], describe: () => ({ type: j.bot, vendor: "OpenAI" }) }, { test: [/chatgpt-user/i], describe: () => ({ type: j.bot, vendor: "OpenAI" }) }, { test: [/oai-searchbot/i], describe: () => ({ type: j.bot, vendor: "OpenAI" }) }, { test: [/baiduspider/i], describe: () => ({ type: j.bot, vendor: "Baidu" }) }, { test: [/bingbot/i], describe: () => ({ type: j.bot, vendor: "Bing" }) }, { test: [/duckduckbot/i], describe: () => ({ type: j.bot, vendor: "DuckDuckGo" }) }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe: () => ({ type: j.bot, vendor: "Anthropic" }) }, { test: [/omgilibot/i, /webzio-extended/i], describe: () => ({ type: j.bot, vendor: "Webz.io" }) }, { test: [/diffbot/i], describe: () => ({ type: j.bot, vendor: "Diffbot" }) }, { test: [/perplexitybot/i], describe: () => ({ type: j.bot, vendor: "Perplexity AI" }) }, { test: [/perplexity-user/i], describe: () => ({ type: j.bot, vendor: "Perplexity AI" }) }, { test: [/youbot/i], describe: () => ({ type: j.bot, vendor: "You.com" }) }, { test: [/ia_archiver/i], describe: () => ({ type: j.bot, vendor: "Internet Archive" }) }, { test: [/meta-webindexer/i], describe: () => ({ type: j.bot, vendor: "Meta" }) }, { test: [/meta-externalads/i], describe: () => ({ type: j.bot, vendor: "Meta" }) }, { test: [/meta-externalagent/i], describe: () => ({ type: j.bot, vendor: "Meta" }) }, { test: [/meta-externalfetcher/i], describe: () => ({ type: j.bot, vendor: "Meta" }) }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: () => ({ type: j.bot, vendor: "Meta" }) }, { test: [/slackbot/i, /slack-imgProxy/i], describe: () => ({ type: j.bot, vendor: "Slack" }) }, { test: [/yahoo/i], describe: () => ({ type: j.bot, vendor: "Yahoo" }) }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: () => ({ type: j.bot, vendor: "Yandex" }) }, { test: [/pingdom/i], describe: () => ({ type: j.bot, vendor: "Pingdom" }) }, { test: [/huawei/i], describe(t) {
  const e = y.getFirstMatch(/(can-l01)/i, t) && "Nova", n = { type: j.mobile, vendor: "Huawei" };
  return e && (n.model = e), n;
} }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: j.tablet, vendor: "Nexus" }) }, { test: [/ipad/i], describe: () => ({ type: j.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: j.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/kftt build/i], describe: () => ({ type: j.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) }, { test: [/silk/i], describe: () => ({ type: j.tablet, vendor: "Amazon" }) }, { test: [/tablet(?! pc)/i], describe: () => ({ type: j.tablet }) }, { test(t) {
  const e = t.test(/ipod|iphone/i), n = t.test(/like (ipod|iphone)/i);
  return e && !n;
}, describe(t) {
  const e = y.getFirstMatch(/(ipod|iphone)/i, t);
  return { type: j.mobile, vendor: "Apple", model: e };
} }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: j.mobile, vendor: "Nexus" }) }, { test: [/Nokia/i], describe(t) {
  const e = y.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, t), n = { type: j.mobile, vendor: "Nokia" };
  return e && (n.model = e), n;
} }, { test: [/[^-]mobi/i], describe: () => ({ type: j.mobile }) }, { test: (t) => t.getBrowserName(!0) === "blackberry", describe: () => ({ type: j.mobile, vendor: "BlackBerry" }) }, { test: (t) => t.getBrowserName(!0) === "bada", describe: () => ({ type: j.mobile }) }, { test: (t) => t.getBrowserName() === "windows phone", describe: () => ({ type: j.mobile, vendor: "Microsoft" }) }, { test(t) {
  const e = Number(String(t.getOSVersion()).split(".")[0]);
  return t.getOSName(!0) === "android" && e >= 3;
}, describe: () => ({ type: j.tablet }) }, { test: (t) => t.getOSName(!0) === "android", describe: () => ({ type: j.mobile }) }, { test: [/smart-?tv|smarttv/i], describe: () => ({ type: j.tv }) }, { test: [/netcast/i], describe: () => ({ type: j.tv }) }, { test: (t) => t.getOSName(!0) === "macos", describe: () => ({ type: j.desktop, vendor: "Apple" }) }, { test: (t) => t.getOSName(!0) === "windows", describe: () => ({ type: j.desktop }) }, { test: (t) => t.getOSName(!0) === "linux", describe: () => ({ type: j.desktop }) }, { test: (t) => t.getOSName(!0) === "playstation 4", describe: () => ({ type: j.tv }) }, { test: (t) => t.getOSName(!0) === "roku", describe: () => ({ type: j.tv }) }], ra = [{ test: (t) => t.getBrowserName(!0) === "microsoft edge", describe(t) {
  if (/\sedg\//i.test(t)) return { name: Re.Blink };
  const e = y.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
  return { name: Re.EdgeHTML, version: e };
} }, { test: [/trident/i], describe(t) {
  const e = { name: Re.Trident }, n = y.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: (t) => t.test(/presto/i), describe(t) {
  const e = { name: Re.Presto }, n = y.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test(t) {
  const e = t.test(/gecko/i), n = t.test(/like gecko/i);
  return e && !n;
}, describe(t) {
  const e = { name: Re.Gecko }, n = y.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: Re.Blink }) }, { test: [/(apple)?webkit/i], describe(t) {
  const e = { name: Re.WebKit }, n = y.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }];
class ii {
  constructor(e, n = !1, r = null) {
    if (e == null || e === "") throw new Error("UserAgent parameter can't be empty");
    this._ua = e;
    let o = !1;
    typeof n == "boolean" ? (o = n, this._hints = r) : this._hints = n != null && typeof n == "object" ? n : null, this.parsedResult = {}, o !== !0 && this.parse();
  }
  getHints() {
    return this._hints;
  }
  hasBrand(e) {
    if (!this._hints || !Array.isArray(this._hints.brands)) return !1;
    const n = e.toLowerCase();
    return this._hints.brands.some((r) => r.brand && r.brand.toLowerCase() === n);
  }
  getBrandVersion(e) {
    if (!this._hints || !Array.isArray(this._hints.brands)) return;
    const n = e.toLowerCase(), r = this._hints.brands.find((o) => o.brand && o.brand.toLowerCase() === n);
    return r ? r.version : void 0;
  }
  getUA() {
    return this._ua;
  }
  test(e) {
    return e.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = y.find(ea, (n) => {
      if (typeof n.test == "function") return n.test(this);
      if (Array.isArray(n.test)) return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.browser = e.describe(this.getUA(), this)), this.parsedResult.browser;
  }
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  getBrowserName(e) {
    return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    this.parsedResult.os = {};
    const e = y.find(ta, (n) => {
      if (typeof n.test == "function") return n.test(this);
      if (Array.isArray(n.test)) return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
  }
  getOSName(e) {
    const { name: n } = this.getOS();
    return e ? String(n).toLowerCase() || "" : n || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  getPlatformType(e = !1) {
    const { type: n } = this.getPlatform();
    return e ? String(n).toLowerCase() || "" : n || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = y.find(na, (n) => {
      if (typeof n.test == "function") return n.test(this);
      if (Array.isArray(n.test)) return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
  }
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  getEngineName(e) {
    return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  parseEngine() {
    this.parsedResult.engine = {};
    const e = y.find(ra, (n) => {
      if (typeof n.test == "function") return n.test(this);
      if (Array.isArray(n.test)) return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
  }
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  getResult() {
    return y.assign({}, this.parsedResult);
  }
  satisfies(e) {
    const n = {};
    let r = 0;
    const o = {};
    let s = 0;
    if (Object.keys(e).forEach((a) => {
      const c = e[a];
      typeof c == "string" ? (o[a] = c, s += 1) : typeof c == "object" && (n[a] = c, r += 1);
    }), r > 0) {
      const a = Object.keys(n), c = y.find(a, (p) => this.isOS(p));
      if (c) {
        const p = this.satisfies(n[c]);
        if (p !== void 0) return p;
      }
      const u = y.find(a, (p) => this.isPlatform(p));
      if (u) {
        const p = this.satisfies(n[u]);
        if (p !== void 0) return p;
      }
    }
    if (s > 0) {
      const a = Object.keys(o), c = y.find(a, (u) => this.isBrowser(u, !0));
      if (c !== void 0) return this.compareVersion(o[c]);
    }
  }
  isBrowser(e, n = !1) {
    const r = this.getBrowserName().toLowerCase();
    let o = e.toLowerCase();
    const s = y.getBrowserTypeByAlias(o);
    return n && s && (o = s.toLowerCase()), o === r;
  }
  compareVersion(e) {
    let n = [0], r = e, o = !1;
    const s = this.getBrowserVersion();
    if (typeof s == "string") return e[0] === ">" || e[0] === "<" ? (r = e.substr(1), e[1] === "=" ? (o = !0, r = e.substr(2)) : n = [], e[0] === ">" ? n.push(1) : n.push(-1)) : e[0] === "=" ? r = e.substr(1) : e[0] === "~" && (o = !0, r = e.substr(1)), n.indexOf(y.compareVersions(s, r, o)) > -1;
  }
  isOS(e) {
    return this.getOSName(!0) === String(e).toLowerCase();
  }
  isPlatform(e) {
    return this.getPlatformType(!0) === String(e).toLowerCase();
  }
  isEngine(e) {
    return this.getEngineName(!0) === String(e).toLowerCase();
  }
  is(e, n = !1) {
    return this.isBrowser(e, n) || this.isOS(e) || this.isPlatform(e);
  }
  some(e = []) {
    return e.some((n) => this.is(n));
  }
}
class ia {
  static getParser(e, n = !1, r = null) {
    if (typeof e != "string") throw new Error("UserAgent should be a string");
    return new ii(e, n, r);
  }
  static parse(e, n = null) {
    return new ii(e, n).getResult();
  }
  static get BROWSER_MAP() {
    return Ko;
  }
  static get ENGINE_MAP() {
    return Re;
  }
  static get OS_MAP() {
    return te;
  }
  static get PLATFORMS_MAP() {
    return j;
  }
}
function Xo(t) {
  return (function(e) {
    if (Array.isArray(e)) return rr(e);
  })(t) || (function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  })(t) || Qo(t) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function Pn() {
  return Date.now() + Math.random().toString();
}
function Ct() {
  throw new Error("Method must be implemented in subclass");
}
var re = ["daily.co", "dailywebrtc.com", "dailywebrtc.net"], ge = null;
function oa() {
  return ge;
}
function Zo(t) {
  (t === null || re.includes(t)) && (ge = t);
}
function Ar(t) {
  try {
    var e = new URL(t).hostname;
    return re.find(function(n) {
      return e === n || e.endsWith(".".concat(n));
    }) || null;
  } catch {
    return null;
  }
}
function es(t, e) {
  return e != null && e.proxyUrl ? e.proxyUrl + (e.proxyUrl.slice(-1) === "/" ? "" : "/") + t.substring(8) : t;
}
function Dn(t, e) {
  var n = re.find(function(r) {
    return t.includes(r);
  });
  return n ? t.replace(n, e) : t;
}
function mn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ge ?? re[0];
  if (t != null && t.callObjectBundleUrlOverride) return console.warn("The callObjectBundleUrlOverride property is deprecated and will be removed. Please use bundlePathOverride instead. When providing a bundlePathOverride, the URL should point to the directory containing all Daily bundles (call-machine-object-bundle.js and audio-processor-bundle.js)."), Dn(t.callObjectBundleUrlOverride, e);
  var n = (function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ge ?? re[0];
    if (o && o.trim() !== "" || (o = ge ?? re[0]), r != null && r.bundlePathOverride) {
      var s = Dn(r.bundlePathOverride, o);
      return s.endsWith("/") ? s.slice(0, -1) : s;
    }
    if (r != null && r.callObjectBundleUrlOverride) {
      var a = Dn(r.callObjectBundleUrlOverride, o), c = a.substring(0, a.lastIndexOf("/"));
      return c.endsWith("/") ? c.slice(0, -1) : c;
    }
    var u = es("https://c.".concat(o, "/call-machine/versioned/", "0.94.0", "/static"), r);
    return u.endsWith("/") ? u.slice(0, -1) : u;
  })(t, e) + "/call-machine-object-bundle.js";
  return n;
}
function ts(t) {
  var e = t?.bundlePathOverride || t?.callObjectBundleUrlOverride;
  return !(!e || re.some(function(n) {
    return e.includes(n);
  })) || !!(t?.proxyUrl || (function() {
    try {
      return typeof localStorage < "u" && localStorage.getItem("daily:disable-base-domain-fallback") === "1";
    } catch {
      return !1;
    }
  })());
}
function ns(t) {
  try {
    var e, n = t ?? window.location.hostname;
    return (e = re.find(function(r) {
      return n === r || n.endsWith(".".concat(r));
    })) !== null && e !== void 0 ? e : null;
  } catch {
    return null;
  }
}
function sa(t, e) {
  var n, r = Ar(t);
  if (!r || ts(e)) return [t];
  var o = (n = ge ?? ns()) !== null && n !== void 0 ? n : re[0];
  return (o === re[0] ? re : [o].concat(Xo(re.filter(function(s) {
    return s !== o;
  })))).map(function(s) {
    return s === r ? t : (function(a, c, u) {
      try {
        var p = new URL(a);
        return p.hostname.endsWith(".".concat(c)) ? p.hostname = p.hostname.slice(0, -c.length) + u : p.hostname === c && (p.hostname = u), p.toString();
      } catch {
        return a;
      }
    })(t, r, s);
  });
}
function vn(t) {
  try {
    new URL(t);
  } catch {
    return !1;
  }
  return !0;
}
const W = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Xe = "8.55.2", q = globalThis;
function yn(t, e, n) {
  const r = q, o = r.__SENTRY__ = r.__SENTRY__ || {}, s = o[Xe] = o[Xe] || {};
  return s[t] || (s[t] = e());
}
const st = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, or = ["debug", "info", "warn", "error", "log", "assert", "trace"], bn = {};
function Ft(t) {
  if (!("console" in q)) return t();
  const e = q.console, n = {}, r = Object.keys(bn);
  r.forEach((o) => {
    const s = bn[o];
    n[o] = e[o], e[o] = s;
  });
  try {
    return t();
  } finally {
    r.forEach((o) => {
      e[o] = n[o];
    });
  }
}
const F = yn("logger", function() {
  let t = !1;
  const e = { enable: () => {
    t = !0;
  }, disable: () => {
    t = !1;
  }, isEnabled: () => t };
  return st ? or.forEach((n) => {
    e[n] = (...r) => {
      t && Ft(() => {
        q.console[n](`Sentry Logger [${n}]:`, ...r);
      });
    };
  }) : or.forEach((n) => {
    e[n] = () => {
    };
  }), e;
}), Ke = "?", oi = /\(error: (.*)\)/, si = /captureMessage|captureException/;
function Gt(t) {
  return t[t.length - 1] || {};
}
const ai = "<anonymous>";
function $e(t) {
  try {
    return t && typeof t == "function" && t.name || ai;
  } catch {
    return ai;
  }
}
function ci(t) {
  const e = t.exception;
  if (e) {
    const n = [];
    try {
      return e.values.forEach((r) => {
        r.stacktrace.frames && n.push(...r.stacktrace.frames);
      }), n;
    } catch {
      return;
    }
  }
}
const un = {}, li = {};
function Ze(t, e) {
  un[t] = un[t] || [], un[t].push(e);
}
function et(t, e) {
  if (!li[t]) {
    li[t] = !0;
    try {
      e();
    } catch (n) {
      st && F.error(`Error while instrumenting ${t}`, n);
    }
  }
}
function ke(t, e) {
  const n = t && un[t];
  if (n) for (const r of n) try {
    r(e);
  } catch (o) {
    st && F.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${$e(r)}
Error:`, o);
  }
}
let Nn = null;
function aa() {
  Nn = q.onerror, q.onerror = function(t, e, n, r, o) {
    return ke("error", { column: r, error: o, line: n, msg: t, url: e }), !!Nn && Nn.apply(this, arguments);
  }, q.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let Fn = null;
function ca() {
  Fn = q.onunhandledrejection, q.onunhandledrejection = function(t) {
    return ke("unhandledrejection", t), !Fn || Fn.apply(this, arguments);
  }, q.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
function An() {
  return xr(q), q;
}
function xr(t) {
  const e = t.__SENTRY__ = t.__SENTRY__ || {};
  return e.version = e.version || Xe, e[Xe] = e[Xe] || {};
}
const rs = Object.prototype.toString;
function Ir(t) {
  switch (rs.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return nt(t, Error);
  }
}
function St(t, e) {
  return rs.call(t) === `[object ${e}]`;
}
function is(t) {
  return St(t, "ErrorEvent");
}
function ui(t) {
  return St(t, "DOMError");
}
function Ie(t) {
  return St(t, "String");
}
function jr(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function sr(t) {
  return t === null || jr(t) || typeof t != "object" && typeof t != "function";
}
function vt(t) {
  return St(t, "Object");
}
function xn(t) {
  return typeof Event < "u" && nt(t, Event);
}
function In(t) {
  return !!(t && t.then && typeof t.then == "function");
}
function nt(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function os(t) {
  return !(typeof t != "object" || t === null || !t.__isVue && !t._isVue);
}
const Lr = q;
function ss(t, e = {}) {
  if (!t) return "<unknown>";
  try {
    let n = t;
    const r = 5, o = [];
    let s = 0, a = 0;
    const c = " > ", u = c.length;
    let p;
    const g = Array.isArray(e) ? e : e.keyAttrs, v = !Array.isArray(e) && e.maxStringLength || 80;
    for (; n && s++ < r && (p = la(n, g), !(p === "html" || s > 1 && a + o.length * u + p.length >= v)); ) o.push(p), a += p.length, n = n.parentNode;
    return o.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function la(t, e) {
  const n = t, r = [];
  if (!n || !n.tagName) return "";
  if (Lr.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  r.push(n.tagName.toLowerCase());
  const o = e && e.length ? e.filter((a) => n.getAttribute(a)).map((a) => [a, n.getAttribute(a)]) : null;
  if (o && o.length) o.forEach((a) => {
    r.push(`[${a[0]}="${a[1]}"]`);
  });
  else {
    n.id && r.push(`#${n.id}`);
    const a = n.className;
    if (a && Ie(a)) {
      const c = a.split(/\s+/);
      for (const u of c) r.push(`.${u}`);
    }
  }
  const s = ["aria-label", "type", "name", "title", "alt"];
  for (const a of s) {
    const c = n.getAttribute(a);
    c && r.push(`[${a}="${c}"]`);
  }
  return r.join("");
}
function ft(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`;
}
function di(t, e) {
  if (!Array.isArray(t)) return "";
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    try {
      os(o) ? n.push("[VueViewModel]") : n.push(String(o));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(e);
}
function ua(t, e, n = !1) {
  return !!Ie(t) && (St(e, "RegExp") ? e.test(t) : !!Ie(e) && (n ? t === e : t.includes(e)));
}
function Yt(t, e = [], n = !1) {
  return e.some((r) => ua(t, r, n));
}
function pe(t, e, n) {
  if (!(e in t)) return;
  const r = t[e], o = n(r);
  typeof o == "function" && as(o, r);
  try {
    t[e] = o;
  } catch {
    st && F.log(`Failed to replace method "${e}" in object`, t);
  }
}
function rt(t, e, n) {
  try {
    Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
  } catch {
    st && F.log(`Failed to add non-enumerable property "${e}" to object`, t);
  }
}
function as(t, e) {
  try {
    const n = e.prototype || {};
    t.prototype = e.prototype = n, rt(t, "__sentry_original__", e);
  } catch {
  }
}
function Dr(t) {
  return t.__sentry_original__;
}
function cs(t) {
  if (Ir(t)) return { message: t.message, name: t.name, stack: t.stack, ...hi(t) };
  if (xn(t)) {
    const e = { type: t.type, target: pi(t.target), currentTarget: pi(t.currentTarget), ...hi(t) };
    return typeof CustomEvent < "u" && nt(t, CustomEvent) && (e.detail = t.detail), e;
  }
  return t;
}
function pi(t) {
  try {
    return e = t, typeof Element < "u" && nt(e, Element) ? ss(t) : Object.prototype.toString.call(t);
  } catch {
    return "<unknown>";
  }
  var e;
}
function hi(t) {
  if (typeof t == "object" && t !== null) {
    const e = {};
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  }
  return {};
}
function ve(t) {
  return ar(t, /* @__PURE__ */ new Map());
}
function ar(t, e) {
  if ((function(n) {
    if (!vt(n)) return !1;
    try {
      const r = Object.getPrototypeOf(n).constructor.name;
      return !r || r === "Object";
    } catch {
      return !0;
    }
  })(t)) {
    const n = e.get(t);
    if (n !== void 0) return n;
    const r = {};
    e.set(t, r);
    for (const o of Object.getOwnPropertyNames(t)) t[o] !== void 0 && (r[o] = ar(t[o], e));
    return r;
  }
  if (Array.isArray(t)) {
    const n = e.get(t);
    if (n !== void 0) return n;
    const r = [];
    return e.set(t, r), t.forEach((o) => {
      r.push(ar(o, e));
    }), r;
  }
  return t;
}
function Bt() {
  return Date.now() / 1e3;
}
const Le = (function() {
  const { performance: t } = q;
  if (!t || !t.now) return Bt;
  const e = Date.now() - t.now(), n = t.timeOrigin == null ? e : t.timeOrigin;
  return () => (n + t.now()) / 1e3;
})();
function ye() {
  const t = q, e = t.crypto || t.msCrypto;
  let n = () => 16 * Math.random();
  try {
    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
    e && e.getRandomValues && (n = () => {
      const r = new Uint8Array(1);
      return e.getRandomValues(r), r[0];
    });
  } catch {
  }
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (r) => (r ^ (15 & n()) >> r / 4).toString(16));
}
function ls(t) {
  return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}
function Ue(t) {
  const { message: e, event_id: n } = t;
  if (e) return e;
  const r = ls(t);
  return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
}
function cr(t, e, n) {
  const r = t.exception = t.exception || {}, o = r.values = r.values || [], s = o[0] = o[0] || {};
  s.value || (s.value = e || ""), s.type || (s.type = "Error");
}
function yt(t, e) {
  const n = ls(t);
  if (!n) return;
  const r = n.mechanism;
  if (n.mechanism = { type: "generic", handled: !0, ...r, ...e }, e && "data" in e) {
    const o = { ...r && r.data, ...e.data };
    n.mechanism.data = o;
  }
}
function fi(t) {
  if ((function(e) {
    try {
      return e.__sentry_captured__;
    } catch {
    }
  })(t)) return !0;
  try {
    rt(t, "__sentry_captured__", !0);
  } catch {
  }
  return !1;
}
var Ae;
function it(t) {
  return new me((e) => {
    e(t);
  });
}
function _n(t) {
  return new me((e, n) => {
    n(t);
  });
}
(() => {
  const { performance: t } = q;
  !t || !t.now || (t.now(), t.timing && t.timing.navigationStart);
})(), (function(t) {
  t[t.PENDING = 0] = "PENDING", t[t.RESOLVED = 1] = "RESOLVED", t[t.REJECTED = 2] = "REJECTED";
})(Ae || (Ae = {}));
class me {
  constructor(e) {
    me.prototype.__init.call(this), me.prototype.__init2.call(this), me.prototype.__init3.call(this), me.prototype.__init4.call(this), this._state = Ae.PENDING, this._handlers = [];
    try {
      e(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(e, n) {
    return new me((r, o) => {
      this._handlers.push([!1, (s) => {
        if (e) try {
          r(e(s));
        } catch (a) {
          o(a);
        }
        else r(s);
      }, (s) => {
        if (n) try {
          r(n(s));
        } catch (a) {
          o(a);
        }
        else o(s);
      }]), this._executeHandlers();
    });
  }
  catch(e) {
    return this.then((n) => n, e);
  }
  finally(e) {
    return new me((n, r) => {
      let o, s;
      return this.then((a) => {
        s = !1, o = a, e && e();
      }, (a) => {
        s = !0, o = a, e && e();
      }).then(() => {
        s ? r(o) : n(o);
      });
    });
  }
  __init() {
    this._resolve = (e) => {
      this._setResult(Ae.RESOLVED, e);
    };
  }
  __init2() {
    this._reject = (e) => {
      this._setResult(Ae.REJECTED, e);
    };
  }
  __init3() {
    this._setResult = (e, n) => {
      this._state === Ae.PENDING && (In(n) ? n.then(this._resolve, this._reject) : (this._state = e, this._value = n, this._executeHandlers()));
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Ae.PENDING) return;
      const e = this._handlers.slice();
      this._handlers = [], e.forEach((n) => {
        n[0] || (this._state === Ae.RESOLVED && n[1](this._value), this._state === Ae.REJECTED && n[2](this._value), n[0] = !0);
      });
    };
  }
}
function da(t) {
  const e = Le(), n = { sid: ye(), init: !0, timestamp: e, started: e, duration: 0, status: "ok", errors: 0, ignoreDuration: !1, toJSON: () => (function(r) {
    return ve({ sid: `${r.sid}`, init: r.init, started: new Date(1e3 * r.started).toISOString(), timestamp: new Date(1e3 * r.timestamp).toISOString(), status: r.status, errors: r.errors, did: typeof r.did == "number" || typeof r.did == "string" ? `${r.did}` : void 0, duration: r.duration, abnormal_mechanism: r.abnormal_mechanism, attrs: { release: r.release, environment: r.environment, ip_address: r.ipAddress, user_agent: r.userAgent } });
  })(n) };
  return t && bt(n, t), n;
}
function bt(t, e = {}) {
  if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Le(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : ye()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
  else if (typeof e.duration == "number") t.duration = e.duration;
  else {
    const n = t.timestamp - t.started;
    t.duration = n >= 0 ? n : 0;
  }
  e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status);
}
function gi() {
  return ye();
}
function lr() {
  return ye().substring(16);
}
function jn(t, e, n = 2) {
  if (!e || typeof e != "object" || n <= 0) return e;
  if (t && e && Object.keys(e).length === 0) return t;
  const r = { ...t };
  for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = jn(r[o], e[o], n - 1));
  return r;
}
const ur = "_sentrySpan";
function mi(t, e) {
  e ? rt(t, ur, e) : delete t[ur];
}
function vi(t) {
  return t[ur];
}
class Nr {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = { traceId: gi(), spanId: lr() };
  }
  clone() {
    const e = new Nr();
    return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags }, e._extra = { ...this._extra }, e._contexts = { ...this._contexts }, this._contexts.flags && (e._contexts.flags = { values: [...this._contexts.flags.values] }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, e._propagationContext = { ...this._propagationContext }, e._client = this._client, e._lastEventId = this._lastEventId, mi(e, vi(this)), e;
  }
  setClient(e) {
    this._client = e;
  }
  setLastEventId(e) {
    this._lastEventId = e;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    return this._eventProcessors.push(e), this;
  }
  setUser(e) {
    return this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && bt(this._session, { user: e }), this._notifyScopeListeners(), this;
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(e) {
    return this._requestSession = e, this;
  }
  setTags(e) {
    return this._tags = { ...this._tags, ...e }, this._notifyScopeListeners(), this;
  }
  setTag(e, n) {
    return this._tags = { ...this._tags, [e]: n }, this._notifyScopeListeners(), this;
  }
  setExtras(e) {
    return this._extra = { ...this._extra, ...e }, this._notifyScopeListeners(), this;
  }
  setExtra(e, n) {
    return this._extra = { ...this._extra, [e]: n }, this._notifyScopeListeners(), this;
  }
  setFingerprint(e) {
    return this._fingerprint = e, this._notifyScopeListeners(), this;
  }
  setLevel(e) {
    return this._level = e, this._notifyScopeListeners(), this;
  }
  setTransactionName(e) {
    return this._transactionName = e, this._notifyScopeListeners(), this;
  }
  setContext(e, n) {
    return n === null ? delete this._contexts[e] : this._contexts[e] = n, this._notifyScopeListeners(), this;
  }
  setSession(e) {
    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) return this;
    const n = typeof e == "function" ? e(this) : e, [r, o] = n instanceof Ve ? [n.getScopeData(), n.getRequestSession()] : vt(n) ? [e, e.requestSession] : [], { tags: s, extra: a, user: c, contexts: u, level: p, fingerprint: g = [], propagationContext: v } = r || {};
    return this._tags = { ...this._tags, ...s }, this._extra = { ...this._extra, ...a }, this._contexts = { ...this._contexts, ...u }, c && Object.keys(c).length && (this._user = c), p && (this._level = p), g.length && (this._fingerprint = g), v && (this._propagationContext = v), o && (this._requestSession = o), this;
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, mi(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: gi() }), this._notifyScopeListeners(), this;
  }
  addBreadcrumb(e, n) {
    const r = typeof n == "number" ? n : 100;
    if (r <= 0) return this;
    const o = { timestamp: Bt(), ...e };
    return this._breadcrumbs.push(o), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  addAttachment(e) {
    return this._attachments.push(e), this;
  }
  clearAttachments() {
    return this._attachments = [], this;
  }
  getScopeData() {
    return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: vi(this) };
  }
  setSDKProcessingMetadata(e) {
    return this._sdkProcessingMetadata = jn(this._sdkProcessingMetadata, e, 2), this;
  }
  setPropagationContext(e) {
    return this._propagationContext = { spanId: lr(), ...e }, this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, n) {
    const r = n && n.event_id ? n.event_id : ye();
    if (!this._client) return F.warn("No client configured on scope - will not capture exception!"), r;
    const o = new Error("Sentry syntheticException");
    return this._client.captureException(e, { originalException: e, syntheticException: o, ...n, event_id: r }, this), r;
  }
  captureMessage(e, n, r) {
    const o = r && r.event_id ? r.event_id : ye();
    if (!this._client) return F.warn("No client configured on scope - will not capture message!"), o;
    const s = new Error(e);
    return this._client.captureMessage(e, n, { originalException: e, syntheticException: s, ...r, event_id: o }, this), o;
  }
  captureEvent(e, n) {
    const r = n && n.event_id ? n.event_id : ye();
    return this._client ? (this._client.captureEvent(e, { ...n, event_id: r }, this), r) : (F.warn("No client configured on scope - will not capture event!"), r);
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e) => {
      e(this);
    }), this._notifyingListeners = !1);
  }
}
const Ve = Nr;
class pa {
  constructor(e, n) {
    let r, o;
    r = e || new Ve(), o = n || new Ve(), this._stack = [{ scope: r }], this._isolationScope = o;
  }
  withScope(e) {
    const n = this._pushScope();
    let r;
    try {
      r = e(n);
    } catch (o) {
      throw this._popScope(), o;
    }
    return In(r) ? r.then((o) => (this._popScope(), o), (o) => {
      throw this._popScope(), o;
    }) : (this._popScope(), r);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const e = this.getScope().clone();
    return this._stack.push({ client: this.getClient(), scope: e }), e;
  }
  _popScope() {
    return !(this._stack.length <= 1) && !!this._stack.pop();
  }
}
function _t() {
  const t = xr(An());
  return t.stack = t.stack || new pa(yn("defaultCurrentScope", () => new Ve()), yn("defaultIsolationScope", () => new Ve()));
}
function ha(t) {
  return _t().withScope(t);
}
function fa(t, e) {
  const n = _t();
  return n.withScope(() => (n.getStackTop().scope = t, e(t)));
}
function yi(t) {
  return _t().withScope(() => t(_t().getIsolationScope()));
}
function Fr(t) {
  const e = xr(t);
  return e.acs ? e.acs : { withIsolationScope: yi, withScope: ha, withSetScope: fa, withSetIsolationScope: (n, r) => yi(r), getCurrentScope: () => _t().getScope(), getIsolationScope: () => _t().getIsolationScope() };
}
function at() {
  return Fr(An()).getCurrentScope();
}
function Rt() {
  return Fr(An()).getIsolationScope();
}
function ne() {
  return at().getClient();
}
function ga(t) {
  const e = t.getPropagationContext(), { traceId: n, spanId: r, parentSpanId: o } = e;
  return ve({ trace_id: n, span_id: r, parent_span_id: o });
}
function ma(t) {
  const e = t._sentryMetrics;
  if (!e) return;
  const n = {};
  for (const [, [r, o]] of e)
    (n[r] || (n[r] = [])).push(ve(o));
  return n;
}
const va = /^sentry-/;
function ya(t) {
  const e = (function(r) {
    if (!(!r || !Ie(r) && !Array.isArray(r)))
      return Array.isArray(r) ? r.reduce((o, s) => {
        const a = bi(s);
        return Object.entries(a).forEach(([c, u]) => {
          o[c] = u;
        }), o;
      }, {}) : bi(r);
  })(t);
  if (!e) return;
  const n = Object.entries(e).reduce((r, [o, s]) => (o.match(va) && (r[o.slice(7)] = s), r), {});
  return Object.keys(n).length > 0 ? n : void 0;
}
function bi(t) {
  return t.split(",").map((e) => e.split("=").map((n) => decodeURIComponent(n.trim()))).reduce((e, [n, r]) => (n && r && (e[n] = r), e), {});
}
let _i = !1;
function ba(t) {
  const { spanId: e, traceId: n, isRemote: r } = t.spanContext();
  return ve({ parent_span_id: r ? e : Br(t).parent_span_id, span_id: r ? lr() : e, trace_id: n });
}
function wi(t) {
  return typeof t == "number" ? ki(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? ki(t.getTime()) : Le();
}
function ki(t) {
  return t > 9999999999 ? t / 1e3 : t;
}
function Br(t) {
  if ((function(e) {
    return typeof e.getSpanJSON == "function";
  })(t)) return t.getSpanJSON();
  try {
    const { spanId: e, traceId: n } = t.spanContext();
    if ((function(r) {
      const o = r;
      return !!(o.attributes && o.startTime && o.name && o.endTime && o.status);
    })(t)) {
      const { attributes: r, startTime: o, name: s, endTime: a, parentSpanId: c, status: u } = t;
      return ve({ span_id: e, trace_id: n, data: r, description: s, parent_span_id: c, start_timestamp: wi(o), timestamp: wi(a) || void 0, status: _a(u), op: r["sentry.op"], origin: r["sentry.origin"], _metrics_summary: ma(t) });
    }
    return { span_id: e, trace_id: n };
  } catch {
    return {};
  }
}
function _a(t) {
  if (t && t.code !== 0) return t.code === 1 ? "ok" : t.message || "unknown_error";
}
function us(t) {
  return t._sentryRootSpan || t;
}
function wa() {
  _i || (Ft(() => {
    console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
  }), _i = !0);
}
const Rr = "production";
function ds(t, e) {
  const n = e.getOptions(), { publicKey: r } = e.getDsn() || {}, o = ve({ environment: n.environment || Rr, release: n.release, public_key: r, trace_id: t });
  return e.emit("createDsc", o), o;
}
function ka(t) {
  const e = ne();
  if (!e) return {};
  const n = us(t), r = n._frozenDsc;
  if (r) return r;
  const o = n.spanContext().traceState, s = o && o.get("sentry.dsc"), a = s && ya(s);
  if (a) return a;
  const c = ds(t.spanContext().traceId, e), u = Br(n), p = u.data || {}, g = p["sentry.sample_rate"];
  g != null && (c.sample_rate = `${g}`);
  const v = p["sentry.source"], T = u.description;
  return v !== "url" && T && (c.transaction = T), (function(S) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const w = ne(), m = w && w.getOptions();
    return !!m && (m.enableTracing || "tracesSampleRate" in m || "tracesSampler" in m);
  })() && (c.sampled = String((function(S) {
    const { traceFlags: w } = S.spanContext();
    return w === 1;
  })(n))), e.emit("createDsc", c, n), c;
}
const Sa = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function wn(t, e = !1) {
  const { host: n, path: r, pass: o, port: s, projectId: a, protocol: c, publicKey: u } = t;
  return `${c}://${u}${e && o ? `:${o}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${a}`;
}
function Si(t) {
  return { protocol: t.protocol, publicKey: t.publicKey || "", pass: t.pass || "", host: t.host, port: t.port || "", path: t.path || "", projectId: t.projectId };
}
function Ma(t) {
  const e = typeof t == "string" ? (function(n) {
    const r = Sa.exec(n);
    if (!r) return void Ft(() => {
      console.error(`Invalid Sentry Dsn: ${n}`);
    });
    const [o, s, a = "", c = "", u = "", p = ""] = r.slice(1);
    let g = "", v = p;
    const T = v.split("/");
    if (T.length > 1 && (g = T.slice(0, -1).join("/"), v = T.pop()), v) {
      const S = v.match(/^\d+/);
      S && (v = S[0]);
    }
    return Si({ host: c, pass: a, path: g, projectId: v, port: u, protocol: o, publicKey: s });
  })(t) : Si(t);
  if (e && (function(n) {
    if (!st) return !0;
    const { port: r, projectId: o, protocol: s } = n;
    return !(["protocol", "publicKey", "host", "projectId"].find((a) => !n[a] && (F.error(`Invalid Sentry Dsn: ${a} missing`), !0)) || (o.match(/^\d+$/) ? /* @__PURE__ */ (function(a) {
      return a === "http" || a === "https";
    })(s) ? r && isNaN(parseInt(r, 10)) && (F.error(`Invalid Sentry Dsn: Invalid port ${r}`), 1) : (F.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), 1) : (F.error(`Invalid Sentry Dsn: Invalid projectId ${o}`), 1)));
  })(e)) return e;
}
function xe(t, e = 100, n = 1 / 0) {
  try {
    return dr("", t, e, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function ps(t, e = 3, n = 102400) {
  const r = xe(t, e);
  return o = r, (function(s) {
    return ~-encodeURI(s).split(/%..|./).length;
  })(JSON.stringify(o)) > n ? ps(t, e - 1, n) : r;
  var o;
}
function dr(t, e, n = 1 / 0, r = 1 / 0, o = /* @__PURE__ */ (function() {
  const s = typeof WeakSet == "function", a = s ? /* @__PURE__ */ new WeakSet() : [];
  return [function(c) {
    if (s) return !!a.has(c) || (a.add(c), !1);
    for (let u = 0; u < a.length; u++) if (a[u] === c) return !0;
    return a.push(c), !1;
  }, function(c) {
    if (s) a.delete(c);
    else for (let u = 0; u < a.length; u++) if (a[u] === c) {
      a.splice(u, 1);
      break;
    }
  }];
})()) {
  const [s, a] = o;
  if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) return e;
  const c = (function(S, w) {
    try {
      if (S === "domain" && w && typeof w == "object" && w._events) return "[Domain]";
      if (S === "domainEmitter") return "[DomainEmitter]";
      if (typeof global < "u" && w === global) return "[Global]";
      if (typeof window < "u" && w === window) return "[Window]";
      if (typeof document < "u" && w === document) return "[Document]";
      if (os(w)) return "[VueViewModel]";
      if (vt(m = w) && "nativeEvent" in m && "preventDefault" in m && "stopPropagation" in m) return "[SyntheticEvent]";
      if (typeof w == "number" && !Number.isFinite(w)) return `[${w}]`;
      if (typeof w == "function") return `[Function: ${$e(w)}]`;
      if (typeof w == "symbol") return `[${String(w)}]`;
      if (typeof w == "bigint") return `[BigInt: ${String(w)}]`;
      const _ = (function(b) {
        const M = Object.getPrototypeOf(b);
        return M ? M.constructor.name : "null prototype";
      })(w);
      return /^HTML(\w*)Element$/.test(_) ? `[HTMLElement: ${_}]` : `[object ${_}]`;
    } catch (_) {
      return `**non-serializable** (${_})`;
    }
    var m;
  })(t, e);
  if (!c.startsWith("[object ")) return c;
  if (e.__sentry_skip_normalization__) return e;
  const u = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
  if (u === 0) return c.replace("object ", "");
  if (s(e)) return "[Circular ~]";
  const p = e;
  if (p && typeof p.toJSON == "function") try {
    return dr("", p.toJSON(), u - 1, r, o);
  } catch {
  }
  const g = Array.isArray(e) ? [] : {};
  let v = 0;
  const T = cs(e);
  for (const S in T) {
    if (!Object.prototype.hasOwnProperty.call(T, S)) continue;
    if (v >= r) {
      g[S] = "[MaxProperties ~]";
      break;
    }
    const w = T[S];
    g[S] = dr(S, w, u - 1, r, o), v++;
  }
  return a(e), g;
}
function Nt(t, e = []) {
  return [t, e];
}
function Ea(t, e) {
  const [n, r] = t;
  return [n, [...r, e]];
}
function Mi(t, e) {
  const n = t[1];
  for (const r of n)
    if (e(r, r[0].type)) return !0;
  return !1;
}
function pr(t) {
  return q.__SENTRY__ && q.__SENTRY__.encodePolyfill ? q.__SENTRY__.encodePolyfill(t) : new TextEncoder().encode(t);
}
function Ca(t) {
  const [e, n] = t;
  let r = JSON.stringify(e);
  function o(s) {
    typeof r == "string" ? r = typeof s == "string" ? r + s : [pr(r), s] : r.push(typeof s == "string" ? pr(s) : s);
  }
  for (const s of n) {
    const [a, c] = s;
    if (o(`
${JSON.stringify(a)}
`), typeof c == "string" || c instanceof Uint8Array) o(c);
    else {
      let u;
      try {
        u = JSON.stringify(c);
      } catch {
        u = JSON.stringify(xe(c));
      }
      o(u);
    }
  }
  return typeof r == "string" ? r : (function(s) {
    const a = s.reduce((p, g) => p + g.length, 0), c = new Uint8Array(a);
    let u = 0;
    for (const p of s) c.set(p, u), u += p.length;
    return c;
  })(r);
}
function Ta(t) {
  const e = typeof t.data == "string" ? pr(t.data) : t.data;
  return [ve({ type: "attachment", length: e.length, filename: t.filename, content_type: t.contentType, attachment_type: t.attachmentType }), e];
}
const Oa = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket", raw_security: "security" };
function Ei(t) {
  return Oa[t];
}
function hs(t) {
  if (!t || !t.sdk) return;
  const { name: e, version: n } = t.sdk;
  return { name: e, version: n };
}
function Pa(t, e, n, r) {
  const o = hs(n), s = t.type && t.type !== "replay_event" ? t.type : "event";
  (function(c, u) {
    u && (c.sdk = c.sdk || {}, c.sdk.name = c.sdk.name || u.name, c.sdk.version = c.sdk.version || u.version, c.sdk.integrations = [...c.sdk.integrations || [], ...u.integrations || []], c.sdk.packages = [...c.sdk.packages || [], ...u.packages || []]);
  })(t, n && n.sdk);
  const a = (function(c, u, p, g) {
    const v = c.sdkProcessingMetadata && c.sdkProcessingMetadata.dynamicSamplingContext;
    return { event_id: c.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...u && { sdk: u }, ...!!p && g && { dsn: wn(g) }, ...v && { trace: ve({ ...v }) } };
  })(t, o, r, e);
  return delete t.sdkProcessingMetadata, Nt(a, [[{ type: s }, t]]);
}
function hr(t, e, n, r = 0) {
  return new me((o, s) => {
    const a = t[r];
    if (e === null || typeof a != "function") o(e);
    else {
      const c = a({ ...e }, n);
      W && a.id && c === null && F.log(`Event processor "${a.id}" dropped event`), In(c) ? c.then((u) => hr(t, u, n, r + 1).then(o)).then(null, s) : hr(t, c, n, r + 1).then(o).then(null, s);
    }
  });
}
let Qt, Ci, Bn;
function Aa(t, e) {
  const { fingerprint: n, span: r, breadcrumbs: o, sdkProcessingMetadata: s } = e;
  (function(a, c) {
    const { extra: u, tags: p, user: g, contexts: v, level: T, transactionName: S } = c, w = ve(u);
    w && Object.keys(w).length && (a.extra = { ...w, ...a.extra });
    const m = ve(p);
    m && Object.keys(m).length && (a.tags = { ...m, ...a.tags });
    const _ = ve(g);
    _ && Object.keys(_).length && (a.user = { ..._, ...a.user });
    const b = ve(v);
    b && Object.keys(b).length && (a.contexts = { ...b, ...a.contexts }), T && (a.level = T), S && a.type !== "transaction" && (a.transaction = S);
  })(t, e), r && (function(a, c) {
    a.contexts = { trace: ba(c), ...a.contexts }, a.sdkProcessingMetadata = { dynamicSamplingContext: ka(c), ...a.sdkProcessingMetadata };
    const u = us(c), p = Br(u).description;
    p && !a.transaction && a.type === "transaction" && (a.transaction = p);
  })(t, r), (function(a, c) {
    a.fingerprint = a.fingerprint ? Array.isArray(a.fingerprint) ? a.fingerprint : [a.fingerprint] : [], c && (a.fingerprint = a.fingerprint.concat(c)), a.fingerprint && !a.fingerprint.length && delete a.fingerprint;
  })(t, n), (function(a, c) {
    const u = [...a.breadcrumbs || [], ...c];
    a.breadcrumbs = u.length ? u : void 0;
  })(t, o), (function(a, c) {
    a.sdkProcessingMetadata = { ...a.sdkProcessingMetadata, ...c };
  })(t, s);
}
function Ti(t, e) {
  const { extra: n, tags: r, user: o, contexts: s, level: a, sdkProcessingMetadata: c, breadcrumbs: u, fingerprint: p, eventProcessors: g, attachments: v, propagationContext: T, transactionName: S, span: w } = e;
  Kt(t, "extra", n), Kt(t, "tags", r), Kt(t, "user", o), Kt(t, "contexts", s), t.sdkProcessingMetadata = jn(t.sdkProcessingMetadata, c, 2), a && (t.level = a), S && (t.transactionName = S), w && (t.span = w), u.length && (t.breadcrumbs = [...t.breadcrumbs, ...u]), p.length && (t.fingerprint = [...t.fingerprint, ...p]), g.length && (t.eventProcessors = [...t.eventProcessors, ...g]), v.length && (t.attachments = [...t.attachments, ...v]), t.propagationContext = { ...t.propagationContext, ...T };
}
function Kt(t, e, n) {
  t[e] = jn(t[e], n, 1);
}
function xa(t, e, n, r, o, s) {
  const { normalizeDepth: a = 3, normalizeMaxBreadth: c = 1e3 } = t, u = { ...e, event_id: e.event_id || n.event_id || ye(), timestamp: e.timestamp || Bt() }, p = n.integrations || t.integrations.map((w) => w.name);
  (function(w, m) {
    const { environment: _, release: b, dist: M, maxValueLength: P = 250 } = m;
    w.environment = w.environment || _ || Rr, !w.release && b && (w.release = b), !w.dist && M && (w.dist = M), w.message && (w.message = ft(w.message, P));
    const x = w.exception && w.exception.values && w.exception.values[0];
    x && x.value && (x.value = ft(x.value, P));
    const O = w.request;
    O && O.url && (O.url = ft(O.url, P));
  })(u, t), (function(w, m) {
    m.length > 0 && (w.sdk = w.sdk || {}, w.sdk.integrations = [...w.sdk.integrations || [], ...m]);
  })(u, p), o && o.emit("applyFrameMetadata", e), e.type === void 0 && (function(w, m) {
    const _ = (function(b) {
      const M = q._sentryDebugIds;
      if (!M) return {};
      const P = Object.keys(M);
      return Bn && P.length === Ci || (Ci = P.length, Bn = P.reduce((x, O) => {
        Qt || (Qt = {});
        const N = Qt[O];
        if (N) x[N[0]] = N[1];
        else {
          const J = b(O);
          for (let ee = J.length - 1; ee >= 0; ee--) {
            const _e = J[ee], Ne = _e && _e.filename, Pe = M[O];
            if (Ne && Pe) {
              x[Ne] = Pe, Qt[O] = [Ne, Pe];
              break;
            }
          }
        }
        return x;
      }, {})), Bn;
    })(m);
    try {
      w.exception.values.forEach((b) => {
        b.stacktrace.frames.forEach((M) => {
          _ && M.filename && (M.debug_id = _[M.filename]);
        });
      });
    } catch {
    }
  })(u, t.stackParser);
  const g = (function(w, m) {
    if (!m) return w;
    const _ = w ? w.clone() : new Ve();
    return _.update(m), _;
  })(r, n.captureContext);
  n.mechanism && yt(u, n.mechanism);
  const v = o ? o.getEventProcessors() : [], T = yn("globalScope", () => new Ve()).getScopeData();
  s && Ti(T, s.getScopeData()), g && Ti(T, g.getScopeData());
  const S = [...n.attachments || [], ...T.attachments];
  return S.length && (n.attachments = S), Aa(u, T), hr([...v, ...T.eventProcessors], u, n).then((w) => (w && (function(m) {
    const _ = {};
    try {
      m.exception.values.forEach((M) => {
        M.stacktrace.frames.forEach((P) => {
          P.debug_id && (P.abs_path ? _[P.abs_path] = P.debug_id : P.filename && (_[P.filename] = P.debug_id), delete P.debug_id);
        });
      });
    } catch {
    }
    if (Object.keys(_).length === 0) return;
    m.debug_meta = m.debug_meta || {}, m.debug_meta.images = m.debug_meta.images || [];
    const b = m.debug_meta.images;
    Object.entries(_).forEach(([M, P]) => {
      b.push({ type: "sourcemap", code_file: M, debug_id: P });
    });
  })(w), typeof a == "number" && a > 0 ? (function(m, _, b) {
    if (!m) return null;
    const M = { ...m, ...m.breadcrumbs && { breadcrumbs: m.breadcrumbs.map((P) => ({ ...P, ...P.data && { data: xe(P.data, _, b) } })) }, ...m.user && { user: xe(m.user, _, b) }, ...m.contexts && { contexts: xe(m.contexts, _, b) }, ...m.extra && { extra: xe(m.extra, _, b) } };
    return m.contexts && m.contexts.trace && M.contexts && (M.contexts.trace = m.contexts.trace, m.contexts.trace.data && (M.contexts.trace.data = xe(m.contexts.trace.data, _, b))), m.spans && (M.spans = m.spans.map((P) => ({ ...P, ...P.data && { data: xe(P.data, _, b) } }))), m.contexts && m.contexts.flags && M.contexts && (M.contexts.flags = xe(m.contexts.flags, 3, b)), M;
  })(w, a, c) : w));
}
function Oi(t, e) {
  return at().captureEvent(t, e);
}
function Pi(t) {
  const e = ne(), n = Rt(), r = at(), { release: o, environment: s = Rr } = e && e.getOptions() || {}, { userAgent: a } = q.navigator || {}, c = da({ release: o, environment: s, user: r.getUser() || n.getUser(), ...a && { userAgent: a }, ...t }), u = n.getSession();
  return u && u.status === "ok" && bt(u, { status: "exited" }), fs(), n.setSession(c), r.setSession(c), c;
}
function fs() {
  const t = Rt(), e = at(), n = e.getSession() || t.getSession();
  n && (function(r, o) {
    let s = {};
    r.status === "ok" && (s = { status: "exited" }), bt(r, s);
  })(n), gs(), t.setSession(), e.setSession();
}
function gs() {
  const t = Rt(), e = at(), n = ne(), r = e.getSession() || t.getSession();
  r && n && n.captureSession(r);
}
function Ai(t = !1) {
  t ? fs() : gs();
}
function Ia(t, e, n) {
  return e || `${(function(r) {
    return `${(function(o) {
      const s = o.protocol ? `${o.protocol}:` : "", a = o.port ? `:${o.port}` : "";
      return `${s}//${o.host}${a}${o.path ? `/${o.path}` : ""}/api/`;
    })(r)}${r.projectId}/envelope/`;
  })(t)}?${(function(r, o) {
    const s = { sentry_version: "7" };
    return r.publicKey && (s.sentry_key = r.publicKey), o && (s.sentry_client = `${o.name}/${o.version}`), new URLSearchParams(s).toString();
  })(t, n)}`;
}
const xi = [];
function Ii(t, e) {
  for (const n of e) n && n.afterAllSetup && n.afterAllSetup(t);
}
function ji(t, e, n) {
  if (n[e.name]) W && F.log(`Integration skipped because it was already installed: ${e.name}`);
  else {
    if (n[e.name] = e, xi.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(), xi.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), typeof e.preprocessEvent == "function") {
      const r = e.preprocessEvent.bind(e);
      t.on("preprocessEvent", (o, s) => r(o, s, t));
    }
    if (typeof e.processEvent == "function") {
      const r = e.processEvent.bind(e), o = Object.assign((s, a) => r(s, a, t), { id: e.name });
      t.addEventProcessor(o);
    }
    W && F.log(`Integration installed: ${e.name}`);
  }
}
class we extends Error {
  constructor(e, n = "warn") {
    super(e), this.message = e, this.logLevel = n;
  }
}
const Li = "Not capturing exception because it's already been captured.";
class ja {
  constructor(e) {
    if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = Ma(e.dsn) : W && F.warn("No DSN provided, client will not send events."), this._dsn) {
      const r = Ia(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({ tunnel: this._options.tunnel, recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e.transportOptions, url: r });
    }
    const n = ["enableTracing", "tracesSampleRate", "tracesSampler"].find((r) => r in e && e[r] == null);
    n && Ft(() => {
      console.warn(`[Sentry] Deprecation warning: \`${n}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`);
    });
  }
  captureException(e, n, r) {
    const o = ye();
    if (fi(e)) return W && F.log(Li), o;
    const s = { event_id: o, ...n };
    return this._process(this.eventFromException(e, s).then((a) => this._captureEvent(a, s, r))), s.event_id;
  }
  captureMessage(e, n, r, o) {
    const s = { event_id: ye(), ...r }, a = jr(e) ? e : String(e), c = sr(e) ? this.eventFromMessage(a, n, s) : this.eventFromException(e, s);
    return this._process(c.then((u) => this._captureEvent(u, s, o))), s.event_id;
  }
  captureEvent(e, n, r) {
    const o = ye();
    if (n && n.originalException && fi(n.originalException)) return W && F.log(Li), o;
    const s = { event_id: o, ...n }, a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(this._captureEvent(e, s, a || r)), s.event_id;
  }
  captureSession(e) {
    typeof e.release != "string" ? W && F.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), bt(e, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(e) {
    const n = this._transport;
    return n ? (this.emit("flush"), this._isClientDoneProcessing(e).then((r) => n.flush(e).then((o) => r && o))) : it(!0);
  }
  close(e) {
    return this.flush(e).then((n) => (this.getOptions().enabled = !1, this.emit("close"), n));
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
  }
  init() {
    (this._isEnabled() || this._options.integrations.some(({ name: e }) => e.startsWith("Spotlight"))) && this._setupIntegrations();
  }
  getIntegrationByName(e) {
    return this._integrations[e];
  }
  addIntegration(e) {
    const n = this._integrations[e.name];
    ji(this, e, this._integrations), n || Ii(this, [e]);
  }
  sendEvent(e, n = {}) {
    this.emit("beforeSendEvent", e, n);
    let r = Pa(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) r = Ea(r, Ta(s));
    const o = this.sendEnvelope(r);
    o && o.then((s) => this.emit("afterSendEvent", e, s), null);
  }
  sendSession(e) {
    const n = (function(r, o, s, a) {
      const c = hs(s);
      return Nt({ sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...c && { sdk: c }, ...!!a && o && { dsn: wn(o) } }, ["aggregates" in r ? [{ type: "sessions" }, r] : [{ type: "session" }, r.toJSON()]]);
    })(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(n);
  }
  recordDroppedEvent(e, n, r) {
    if (this._options.sendClientReports) {
      const o = typeof r == "number" ? r : 1, s = `${e}:${n}`;
      W && F.log(`Recording outcome: "${s}"${o > 1 ? ` (${o} times)` : ""}`), this._outcomes[s] = (this._outcomes[s] || 0) + o;
    }
  }
  on(e, n) {
    const r = this._hooks[e] = this._hooks[e] || [];
    return r.push(n), () => {
      const o = r.indexOf(n);
      o > -1 && r.splice(o, 1);
    };
  }
  emit(e, ...n) {
    const r = this._hooks[e];
    r && r.forEach((o) => o(...n));
  }
  sendEnvelope(e) {
    return this.emit("beforeEnvelope", e), this._isEnabled() && this._transport ? this._transport.send(e).then(null, (n) => (W && F.error("Error while sending envelope:", n), n)) : (W && F.error("Transport disabled"), it({}));
  }
  _setupIntegrations() {
    const { integrations: e } = this._options;
    this._integrations = (function(n, r) {
      const o = {};
      return r.forEach((s) => {
        s && ji(n, s, o);
      }), o;
    })(this, e), Ii(this, e);
  }
  _updateSessionFromEvent(e, n) {
    let r = n.level === "fatal", o = !1;
    const s = n.exception && n.exception.values;
    if (s) {
      o = !0;
      for (const c of s) {
        const u = c.mechanism;
        if (u && u.handled === !1) {
          r = !0;
          break;
        }
      }
    }
    const a = e.status === "ok";
    (a && e.errors === 0 || a && r) && (bt(e, { ...r && { status: "crashed" }, errors: e.errors || Number(o || r) }), this.captureSession(e));
  }
  _isClientDoneProcessing(e) {
    return new me((n) => {
      let r = 0;
      const o = setInterval(() => {
        this._numProcessing == 0 ? (clearInterval(o), n(!0)) : (r += 1, e && r >= e && (clearInterval(o), n(!1)));
      }, 1);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(e, n, r = at(), o = Rt()) {
    const s = this.getOptions(), a = Object.keys(this._integrations);
    return !n.integrations && a.length > 0 && (n.integrations = a), this.emit("preprocessEvent", e, n), e.type || o.setLastEventId(e.event_id || n.event_id), xa(s, e, n, r, this, o).then((c) => {
      if (c === null) return c;
      c.contexts = { trace: ga(r), ...c.contexts };
      const u = (function(p, g) {
        const v = g.getPropagationContext();
        return v.dsc || ds(v.traceId, p);
      })(this, r);
      return c.sdkProcessingMetadata = { dynamicSamplingContext: u, ...c.sdkProcessingMetadata }, c;
    });
  }
  _captureEvent(e, n = {}, r) {
    return this._processEvent(e, n, r).then((o) => o.event_id, (o) => {
      W && (o instanceof we && o.logLevel === "log" ? F.log(o.message) : F.warn(o));
    });
  }
  _processEvent(e, n, r) {
    const o = this.getOptions(), { sampleRate: s } = o, a = Ni(e), c = Di(e), u = e.type || "error", p = `before send for type \`${u}\``, g = s === void 0 ? void 0 : (function(S) {
      if (typeof S == "boolean") return Number(S);
      const w = typeof S == "string" ? parseFloat(S) : S;
      if (!(typeof w != "number" || isNaN(w) || w < 0 || w > 1)) return w;
      W && F.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(S)} of type ${JSON.stringify(typeof S)}.`);
    })(s);
    if (c && typeof g == "number" && Math.random() > g) return this.recordDroppedEvent("sample_rate", "error", e), _n(new we(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, "log"));
    const v = u === "replay_event" ? "replay" : u, T = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(e, n, r, T).then((S) => {
      if (S === null) throw this.recordDroppedEvent("event_processor", v, e), new we("An event processor returned `null`, will not send event.", "log");
      if (n.data && n.data.__sentry__ === !0) return S;
      const w = (function(m, _, b, M) {
        const { beforeSend: P, beforeSendTransaction: x, beforeSendSpan: O } = _;
        if (Di(b) && P) return P(b, M);
        if (Ni(b)) {
          if (b.spans && O) {
            const N = [];
            for (const J of b.spans) {
              const ee = O(J);
              ee ? N.push(ee) : (wa(), m.recordDroppedEvent("before_send", "span"));
            }
            b.spans = N;
          }
          if (x) {
            if (b.spans) {
              const N = b.spans.length;
              b.sdkProcessingMetadata = { ...b.sdkProcessingMetadata, spanCountBeforeProcessing: N };
            }
            return x(b, M);
          }
        }
        return b;
      })(this, o, S, n);
      return (function(m, _) {
        const b = `${_} must return \`null\` or a valid event.`;
        if (In(m)) return m.then((M) => {
          if (!vt(M) && M !== null) throw new we(b);
          return M;
        }, (M) => {
          throw new we(`${_} rejected with ${M}`);
        });
        if (!vt(m) && m !== null) throw new we(b);
        return m;
      })(w, p);
    }).then((S) => {
      if (S === null) {
        if (this.recordDroppedEvent("before_send", v, e), a) {
          const _ = 1 + (e.spans || []).length;
          this.recordDroppedEvent("before_send", "span", _);
        }
        throw new we(`${p} returned \`null\`, will not send event.`, "log");
      }
      const w = r && r.getSession();
      if (!a && w && this._updateSessionFromEvent(w, S), a) {
        const _ = (S.sdkProcessingMetadata && S.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (S.spans ? S.spans.length : 0);
        _ > 0 && this.recordDroppedEvent("before_send", "span", _);
      }
      const m = S.transaction_info;
      if (a && m && S.transaction !== e.transaction) {
        const _ = "custom";
        S.transaction_info = { ...m, source: _ };
      }
      return this.sendEvent(S, n), S;
    }).then(null, (S) => {
      throw S instanceof we ? S : (this.captureException(S, { data: { __sentry__: !0 }, originalException: S }), new we(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${S}`));
    });
  }
  _process(e) {
    this._numProcessing++, e.then((n) => (this._numProcessing--, n), (n) => (this._numProcessing--, n));
  }
  _clearOutcomes() {
    const e = this._outcomes;
    return this._outcomes = {}, Object.entries(e).map(([n, r]) => {
      const [o, s] = n.split(":");
      return { reason: o, category: s, quantity: r };
    });
  }
  _flushOutcomes() {
    W && F.log("Flushing outcomes...");
    const e = this._clearOutcomes();
    if (e.length === 0) return void (W && F.log("No outcomes to send"));
    if (!this._dsn) return void (W && F.log("No dsn provided, will not send outcomes"));
    W && F.log("Sending outcomes:", e);
    const n = (r = e, Nt((o = this._options.tunnel && wn(this._dsn)) ? { dsn: o } : {}, [[{ type: "client_report" }, { timestamp: s || Bt(), discarded_events: r }]]));
    var r, o, s;
    this.sendEnvelope(n);
  }
}
function Di(t) {
  return t.type === void 0;
}
function Ni(t) {
  return t.type === "transaction";
}
function La(t) {
  const e = [];
  function n(r) {
    return e.splice(e.indexOf(r), 1)[0] || Promise.resolve(void 0);
  }
  return { $: e, add: function(r) {
    if (!(t === void 0 || e.length < t)) return _n(new we("Not adding Promise because buffer limit was reached."));
    const o = r();
    return e.indexOf(o) === -1 && e.push(o), o.then(() => n(o)).then(null, () => n(o).then(null, () => {
    })), o;
  }, drain: function(r) {
    return new me((o, s) => {
      let a = e.length;
      if (!a) return o(!0);
      const c = setTimeout(() => {
        r && r > 0 && o(!1);
      }, r);
      e.forEach((u) => {
        it(u).then(() => {
          --a || (clearTimeout(c), o(!0));
        }, s);
      });
    });
  } };
}
function Da(t, { statusCode: e, headers: n }, r = Date.now()) {
  const o = { ...t }, s = n && n["x-sentry-rate-limits"], a = n && n["retry-after"];
  if (s) for (const c of s.trim().split(",")) {
    const [u, p, , , g] = c.split(":", 5), v = parseInt(u, 10), T = 1e3 * (isNaN(v) ? 60 : v);
    if (p) for (const S of p.split(";")) S === "metric_bucket" && g && !g.split(";").includes("custom") || (o[S] = r + T);
    else o.all = r + T;
  }
  else a ? o.all = r + (function(c, u = Date.now()) {
    const p = parseInt(`${c}`, 10);
    if (!isNaN(p)) return 1e3 * p;
    const g = Date.parse(`${c}`);
    return isNaN(g) ? 6e4 : g - u;
  })(a, r) : e === 429 && (o.all = r + 6e4);
  return o;
}
function Na(t, e, n = La(t.bufferSize || 64)) {
  let r = {};
  return { send: function(o) {
    const s = [];
    if (Mi(o, (u, p) => {
      const g = Ei(p);
      if ((function(v, T, S = Date.now()) {
        return (function(w, m) {
          return w[m] || w.all || 0;
        })(v, T) > S;
      })(r, g)) {
        const v = Fi(u, p);
        t.recordDroppedEvent("ratelimit_backoff", g, v);
      } else s.push(u);
    }), s.length === 0) return it({});
    const a = Nt(o[0], s), c = (u) => {
      Mi(a, (p, g) => {
        const v = Fi(p, g);
        t.recordDroppedEvent(u, Ei(g), v);
      });
    };
    return n.add(() => e({ body: Ca(a) }).then((u) => (u.statusCode !== void 0 && (u.statusCode < 200 || u.statusCode >= 300) && W && F.warn(`Sentry responded with status code ${u.statusCode} to sent event.`), r = Da(r, u), u), (u) => {
      throw c("network_error"), u;
    })).then((u) => u, (u) => {
      if (u instanceof we) return W && F.error("Skipped sending event because buffer is full."), c("queue_overflow"), it({});
      throw u;
    });
  }, flush: (o) => n.drain(o) };
}
function Fi(t, e) {
  if (e === "event" || e === "transaction") return Array.isArray(t) ? t[1] : void 0;
}
const Fa = 100;
function We(t, e) {
  const n = ne(), r = Rt();
  if (!n) return;
  const { beforeBreadcrumb: o = null, maxBreadcrumbs: s = Fa } = n.getOptions();
  if (s <= 0) return;
  const a = { timestamp: Bt(), ...t }, c = o ? Ft(() => o(a, e)) : a;
  c !== null && (n.emit && n.emit("beforeAddBreadcrumb", c, e), r.addBreadcrumb(c, s));
}
let Bi;
const Ri = /* @__PURE__ */ new WeakMap(), Ba = () => ({ name: "FunctionToString", setupOnce() {
  Bi = Function.prototype.toString;
  try {
    Function.prototype.toString = function(...t) {
      const e = Dr(this), n = Ri.has(ne()) && e !== void 0 ? e : this;
      return Bi.apply(n, t);
    };
  } catch {
  }
}, setup(t) {
  Ri.set(t, !0);
} }), Ra = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/], Ua = (t = {}) => ({ name: "InboundFilters", processEvent(e, n, r) {
  const o = r.getOptions(), s = (function(a = {}, c = {}) {
    return { allowUrls: [...a.allowUrls || [], ...c.allowUrls || []], denyUrls: [...a.denyUrls || [], ...c.denyUrls || []], ignoreErrors: [...a.ignoreErrors || [], ...c.ignoreErrors || [], ...a.disableErrorDefaults ? [] : Ra], ignoreTransactions: [...a.ignoreTransactions || [], ...c.ignoreTransactions || []], ignoreInternal: a.ignoreInternal === void 0 || a.ignoreInternal };
  })(t, o);
  return (function(a, c) {
    return c.ignoreInternal && (function(u) {
      try {
        return u.exception.values[0].type === "SentryError";
      } catch {
      }
      return !1;
    })(a) ? (W && F.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ue(a)}`), !0) : (function(u, p) {
      return u.type || !p || !p.length ? !1 : (function(g) {
        const v = [];
        g.message && v.push(g.message);
        let T;
        try {
          T = g.exception.values[g.exception.values.length - 1];
        } catch {
        }
        return T && T.value && (v.push(T.value), T.type && v.push(`${T.type}: ${T.value}`)), v;
      })(u).some((g) => Yt(g, p));
    })(a, c.ignoreErrors) ? (W && F.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ue(a)}`), !0) : (function(u) {
      return u.type || !u.exception || !u.exception.values || u.exception.values.length === 0 ? !1 : !u.message && !u.exception.values.some((p) => p.stacktrace || p.type && p.type !== "Error" || p.value);
    })(a) ? (W && F.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Ue(a)}`), !0) : (function(u, p) {
      if (u.type !== "transaction" || !p || !p.length) return !1;
      const g = u.transaction;
      return !!g && Yt(g, p);
    })(a, c.ignoreTransactions) ? (W && F.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Ue(a)}`), !0) : (function(u, p) {
      if (!p || !p.length) return !1;
      const g = Xt(u);
      return !!g && Yt(g, p);
    })(a, c.denyUrls) ? (W && F.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ue(a)}.
Url: ${Xt(a)}`), !0) : (function(u, p) {
      if (!p || !p.length) return !0;
      const g = Xt(u);
      return !g || Yt(g, p);
    })(a, c.allowUrls) ? !1 : (W && F.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ue(a)}.
Url: ${Xt(a)}`), !0);
  })(e, s) ? null : e;
} });
function Xt(t) {
  try {
    let e;
    try {
      e = t.exception.values[0].stacktrace.frames;
    } catch {
    }
    return e ? (function(n = []) {
      for (let r = n.length - 1; r >= 0; r--) {
        const o = n[r];
        if (o && o.filename !== "<anonymous>" && o.filename !== "[native code]") return o.filename || null;
      }
      return null;
    })(e) : null;
  } catch {
    return W && F.error(`Cannot extract url for event ${Ue(t)}`), null;
  }
}
function $a(t, e, n = 250, r, o, s, a) {
  if (!(s.exception && s.exception.values && a && nt(a.originalException, Error))) return;
  const c = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
  var u, p;
  c && (s.exception.values = (u = fr(t, e, o, a.originalException, r, s.exception.values, c, 0), p = n, u.map((g) => (g.value && (g.value = ft(g.value, p)), g))));
}
function fr(t, e, n, r, o, s, a, c) {
  if (s.length >= n + 1) return s;
  let u = [...s];
  if (nt(r[o], Error)) {
    Ui(a, c);
    const p = t(e, r[o]), g = u.length;
    $i(p, o, g, c), u = fr(t, e, n, r[o], o, [p, ...u], p, g);
  }
  return Array.isArray(r.errors) && r.errors.forEach((p, g) => {
    if (nt(p, Error)) {
      Ui(a, c);
      const v = t(e, p), T = u.length;
      $i(v, `errors[${g}]`, T, c), u = fr(t, e, n, p, o, [v, ...u], v, T);
    }
  }), u;
}
function Ui(t, e) {
  t.mechanism = t.mechanism || { type: "generic", handled: !0 }, t.mechanism = { ...t.mechanism, ...t.type === "AggregateError" && { is_exception_group: !0 }, exception_id: e };
}
function $i(t, e, n, r) {
  t.mechanism = t.mechanism || { type: "generic", handled: !0 }, t.mechanism = { ...t.mechanism, type: "chained", source: e, exception_id: n, parent_id: r };
}
function Rn(t) {
  if (!t) return {};
  const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!e) return {};
  const n = e[6] || "", r = e[8] || "";
  return { host: e[4], path: e[5], protocol: e[2], search: n, hash: r, relative: e[5] + n + r };
}
function Va() {
  "console" in q && or.forEach(function(t) {
    t in q.console && pe(q.console, t, function(e) {
      return bn[t] = e, function(...n) {
        ke("console", { args: n, level: t });
        const r = bn[t];
        r && r.apply(q.console, n);
      };
    });
  });
}
function Ja(t) {
  return t === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(t) ? t : "log";
}
const qa = () => {
  let t;
  return { name: "Dedupe", processEvent(e) {
    if (e.type) return e;
    try {
      if ((function(n, r) {
        return r ? !!((function(o, s) {
          const a = o.message, c = s.message;
          return !(!a && !c || a && !c || !a && c || a !== c || !Ji(o, s) || !Vi(o, s));
        })(n, r) || (function(o, s) {
          const a = qi(s), c = qi(o);
          return !(!a || !c || a.type !== c.type || a.value !== c.value || !Ji(o, s) || !Vi(o, s));
        })(n, r)) : !1;
      })(e, t)) return W && F.warn("Event dropped due to being a duplicate of previously captured event."), null;
    } catch {
    }
    return t = e;
  } };
};
function Vi(t, e) {
  let n = ci(t), r = ci(e);
  if (!n && !r) return !0;
  if (n && !r || !n && r || r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++) {
    const s = r[o], a = n[o];
    if (s.filename !== a.filename || s.lineno !== a.lineno || s.colno !== a.colno || s.function !== a.function) return !1;
  }
  return !0;
}
function Ji(t, e) {
  let n = t.fingerprint, r = e.fingerprint;
  if (!n && !r) return !0;
  if (n && !r || !n && r) return !1;
  try {
    return n.join("") === r.join("");
  } catch {
    return !1;
  }
}
function qi(t) {
  return t.exception && t.exception.values && t.exception.values[0];
}
function zi(t) {
  return t === void 0 ? void 0 : t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0;
}
const Un = q;
function gr(t) {
  return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function za() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!(function() {
    if (!("fetch" in Un)) return !1;
    try {
      return new Headers(), new Request("http://www.example.com"), new Response(), !0;
    } catch {
      return !1;
    }
  })()) return !1;
  if (gr(Un.fetch)) return !0;
  let t = !1;
  const e = Un.document;
  if (e && typeof e.createElement == "function") try {
    const n = e.createElement("iframe");
    n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = gr(n.contentWindow.fetch)), e.head.removeChild(n);
  } catch (n) {
    st && F.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
  }
  return t;
}
function Wa(t, e) {
  const n = "fetch";
  Ze(n, t), et(n, () => (function(r, o = !1) {
    o && !za() || pe(q, "fetch", function(s) {
      return function(...a) {
        const c = new Error(), { method: u, url: p } = (function(v) {
          if (v.length === 0) return { method: "GET", url: "" };
          if (v.length === 2) {
            const [S, w] = v;
            return { url: Wi(S), method: mr(w, "method") ? String(w.method).toUpperCase() : "GET" };
          }
          const T = v[0];
          return { url: Wi(T), method: mr(T, "method") ? String(T.method).toUpperCase() : "GET" };
        })(a), g = { args: a, fetchData: { method: u, url: p }, startTimestamp: 1e3 * Le(), virtualError: c };
        return r || ke("fetch", { ...g }), s.apply(q, a).then(async (v) => (r ? r(v) : ke("fetch", { ...g, endTimestamp: 1e3 * Le(), response: v }), v), (v) => {
          throw ke("fetch", { ...g, endTimestamp: 1e3 * Le(), error: v }), Ir(v) && v.stack === void 0 && (v.stack = c.stack, rt(v, "framesToPop", 1)), v;
        });
      };
    });
  })(void 0, e));
}
function mr(t, e) {
  return !!t && typeof t == "object" && !!t[e];
}
function Wi(t) {
  return typeof t == "string" ? t : t ? mr(t, "url") ? t.url : t.toString ? t.toString() : "" : "";
}
const Zt = q, Y = q;
let vr = 0;
function Hi() {
  return vr > 0;
}
function wt(t, e = {}) {
  if (!/* @__PURE__ */ (function(r) {
    return typeof r == "function";
  })(t)) return t;
  try {
    const r = t.__sentry_wrapped__;
    if (r) return typeof r == "function" ? r : t;
    if (Dr(t)) return t;
  } catch {
    return t;
  }
  const n = function(...r) {
    try {
      const o = r.map((s) => wt(s, e));
      return t.apply(this, o);
    } catch (o) {
      throw vr++, setTimeout(() => {
        vr--;
      }), (function(...s) {
        const a = Fr(An());
        if (s.length === 2) {
          const [c, u] = s;
          return c ? a.withSetScope(c, u) : a.withScope(u);
        }
        a.withScope(s[0]);
      })((s) => {
        var a;
        s.addEventProcessor((c) => (e.mechanism && (cr(c, void 0), yt(c, e.mechanism)), c.extra = { ...c.extra, arguments: r }, c)), a = o, at().captureException(a, void 0);
      }), o;
    }
  };
  try {
    for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
  } catch {
  }
  as(n, t), rt(t, "__sentry_wrapped__", n);
  try {
    Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", { get: () => t.name });
  } catch {
  }
  return n;
}
const Ln = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Ur(t, e) {
  const n = $r(t, e), r = { type: Ya(e), value: Qa(e) };
  return n.length && (r.stacktrace = { frames: n }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r;
}
function Ha(t, e, n, r) {
  const o = ne(), s = o && o.getOptions().normalizeDepth, a = (function(p) {
    for (const g in p) if (Object.prototype.hasOwnProperty.call(p, g)) {
      const v = p[g];
      if (v instanceof Error) return v;
    }
  })(e), c = { __serialized__: ps(e, s) };
  if (a) return { exception: { values: [Ur(t, a)] }, extra: c };
  const u = { exception: { values: [{ type: xn(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error", value: Ka(e, { isUnhandledRejection: r }) }] }, extra: c };
  if (n) {
    const p = $r(t, n);
    p.length && (u.exception.values[0].stacktrace = { frames: p });
  }
  return u;
}
function $n(t, e) {
  return { exception: { values: [Ur(t, e)] } };
}
function $r(t, e) {
  const n = e.stacktrace || e.stack || "", r = (function(s) {
    return s && Ga.test(s.message) ? 1 : 0;
  })(e), o = (function(s) {
    return typeof s.framesToPop == "number" ? s.framesToPop : 0;
  })(e);
  try {
    return t(n, r, o);
  } catch {
  }
  return [];
}
const Ga = /Minified React error #\d+;/i;
function ms(t) {
  return typeof WebAssembly < "u" && WebAssembly.Exception !== void 0 && t instanceof WebAssembly.Exception;
}
function Ya(t) {
  const e = t && t.name;
  return !e && ms(t) ? t.message && Array.isArray(t.message) && t.message.length == 2 ? t.message[0] : "WebAssembly.Exception" : e;
}
function Qa(t) {
  const e = t && t.message;
  return e ? e.error && typeof e.error.message == "string" ? e.error.message : ms(t) && Array.isArray(t.message) && t.message.length == 2 ? t.message[1] : e : "No error message";
}
function yr(t, e, n, r, o) {
  let s;
  if (is(e) && e.error)
    return $n(t, e.error);
  if (ui(e) || St(e, "DOMException")) {
    const a = e;
    if ("stack" in e) s = $n(t, e);
    else {
      const c = a.name || (ui(a) ? "DOMError" : "DOMException"), u = a.message ? `${c}: ${a.message}` : c;
      s = br(t, u, n, r), cr(s, u);
    }
    return "code" in a && (s.tags = { ...s.tags, "DOMException.code": `${a.code}` }), s;
  }
  return Ir(e) ? $n(t, e) : vt(e) || xn(e) ? (s = Ha(t, e, n, o), yt(s, { synthetic: !0 }), s) : (s = br(t, e, n, r), cr(s, `${e}`), yt(s, { synthetic: !0 }), s);
}
function br(t, e, n, r) {
  const o = {};
  if (r && n) {
    const s = $r(t, n);
    s.length && (o.exception = { values: [{ value: e, stacktrace: { frames: s } }] }), yt(o, { synthetic: !0 });
  }
  if (jr(e)) {
    const { __sentry_template_string__: s, __sentry_template_values__: a } = e;
    return o.logentry = { message: s, params: a }, o;
  }
  return o.message = e, o;
}
function Ka(t, { isUnhandledRejection: e }) {
  const n = (function(o, s = 40) {
    const a = Object.keys(cs(o));
    a.sort();
    const c = a[0];
    if (!c) return "[object has no keys]";
    if (c.length >= s) return ft(c, s);
    for (let u = a.length; u > 0; u--) {
      const p = a.slice(0, u).join(", ");
      if (!(p.length > s)) return u === a.length ? p : ft(p, s);
    }
    return "";
  })(t), r = e ? "promise rejection" : "exception";
  return is(t) ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\`` : xn(t) ? `Event \`${(function(o) {
    try {
      const s = Object.getPrototypeOf(o);
      return s ? s.constructor.name : void 0;
    } catch {
    }
  })(t)}\` (type=${t.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`;
}
class Xa extends ja {
  constructor(e) {
    const n = { parentSpanIsAlwaysRootSpan: !0, ...e };
    (function(r, o, s = [o], a = "npm") {
      const c = r._metadata || {};
      c.sdk || (c.sdk = { name: `sentry.javascript.${o}`, packages: s.map((u) => ({ name: `${a}:@sentry/${u}`, version: Xe })), version: Xe }), r._metadata = c;
    })(n, "browser", ["browser"], Y.SENTRY_SDK_SOURCE || "npm"), super(n), n.sendClientReports && Y.document && Y.document.addEventListener("visibilitychange", () => {
      Y.document.visibilityState === "hidden" && this._flushOutcomes();
    });
  }
  eventFromException(e, n) {
    return (function(r, o, s, a) {
      const c = yr(r, o, s && s.syntheticException || void 0, a);
      return yt(c), c.level = "error", s && s.event_id && (c.event_id = s.event_id), it(c);
    })(this._options.stackParser, e, n, this._options.attachStacktrace);
  }
  eventFromMessage(e, n = "info", r) {
    return (function(o, s, a = "info", c, u) {
      const p = br(o, s, c && c.syntheticException || void 0, u);
      return p.level = a, c && c.event_id && (p.event_id = c.event_id), it(p);
    })(this._options.stackParser, e, n, r, this._options.attachStacktrace);
  }
  captureUserFeedback(e) {
    if (!this._isEnabled()) return void (Ln && F.warn("SDK not enabled, will not capture user feedback."));
    const n = (function(r, { metadata: o, tunnel: s, dsn: a }) {
      const c = { event_id: r.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...o && o.sdk && { sdk: { name: o.sdk.name, version: o.sdk.version } }, ...!!s && !!a && { dsn: wn(a) } };
      return Nt(c, [/* @__PURE__ */ (function(p) {
        return [{ type: "user_report" }, p];
      })(r)]);
    })(e, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
    this.sendEnvelope(n);
  }
  _prepareEvent(e, n, r) {
    return e.platform = e.platform || "javascript", super._prepareEvent(e, n, r);
  }
}
const Za = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, ce = q;
let Gi, Vn, Jn, en;
function ec() {
  if (!ce.document) return;
  const t = ke.bind(null, "dom"), e = Yi(t, !0);
  ce.document.addEventListener("click", e, !1), ce.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((n) => {
    const r = ce[n], o = r && r.prototype;
    o && o.hasOwnProperty && o.hasOwnProperty("addEventListener") && (pe(o, "addEventListener", function(s) {
      return function(a, c, u) {
        if (a === "click" || a == "keypress") try {
          const p = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, g = p[a] = p[a] || { refCount: 0 };
          if (!g.handler) {
            const v = Yi(t);
            g.handler = v, s.call(this, a, v, u);
          }
          g.refCount++;
        } catch {
        }
        return s.call(this, a, c, u);
      };
    }), pe(o, "removeEventListener", function(s) {
      return function(a, c, u) {
        if (a === "click" || a == "keypress") try {
          const p = this.__sentry_instrumentation_handlers__ || {}, g = p[a];
          g && (g.refCount--, g.refCount <= 0 && (s.call(this, a, g.handler, u), g.handler = void 0, delete p[a]), Object.keys(p).length === 0 && delete this.__sentry_instrumentation_handlers__);
        } catch {
        }
        return s.call(this, a, c, u);
      };
    }));
  });
}
function Yi(t, e = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const r = (function(s) {
      try {
        return s.target;
      } catch {
        return null;
      }
    })(n);
    if ((function(s, a) {
      return s === "keypress" && (!a || !a.tagName || a.tagName !== "INPUT" && a.tagName !== "TEXTAREA" && !a.isContentEditable);
    })(n.type, r)) return;
    rt(n, "_sentryCaptured", !0), r && !r._sentryId && rt(r, "_sentryId", ye());
    const o = n.type === "keypress" ? "input" : n.type;
    (function(s) {
      if (s.type !== Vn) return !1;
      try {
        if (!s.target || s.target._sentryId !== Jn) return !1;
      } catch {
      }
      return !0;
    })(n) || (t({ event: n, name: o, global: e }), Vn = n.type, Jn = r ? r._sentryId : void 0), clearTimeout(Gi), Gi = ce.setTimeout(() => {
      Jn = void 0, Vn = void 0;
    }, 1e3);
  };
}
function vs(t) {
  const e = "history";
  Ze(e, t), et(e, tc);
}
function tc() {
  if (!(function() {
    const n = Zt.chrome, r = n && n.app && n.app.runtime, o = "history" in Zt && !!Zt.history.pushState && !!Zt.history.replaceState;
    return !r && o;
  })()) return;
  const t = ce.onpopstate;
  function e(n) {
    return function(...r) {
      const o = r.length > 2 ? r[2] : void 0;
      if (o) {
        const s = en, a = String(o);
        en = a, ke("history", { from: s, to: a });
      }
      return n.apply(this, r);
    };
  }
  ce.onpopstate = function(...n) {
    const r = ce.location.href, o = en;
    if (en = r, ke("history", { from: o, to: r }), t) try {
      return t.apply(this, n);
    } catch {
    }
  }, pe(ce.history, "pushState", e), pe(ce.history, "replaceState", e);
}
const dn = {};
function Qi(t) {
  dn[t] = void 0;
}
const Pt = "__sentry_xhr_v3__";
function nc() {
  if (!ce.XMLHttpRequest) return;
  const t = XMLHttpRequest.prototype;
  t.open = new Proxy(t.open, { apply(e, n, r) {
    const o = new Error(), s = 1e3 * Le(), a = Ie(r[0]) ? r[0].toUpperCase() : void 0, c = (function(p) {
      if (Ie(p)) return p;
      try {
        return p.toString();
      } catch {
      }
    })(r[1]);
    if (!a || !c) return e.apply(n, r);
    n[Pt] = { method: a, url: c, request_headers: {} }, a === "POST" && c.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
    const u = () => {
      const p = n[Pt];
      if (p && n.readyState === 4) {
        try {
          p.status_code = n.status;
        } catch {
        }
        ke("xhr", { endTimestamp: 1e3 * Le(), startTimestamp: s, xhr: n, virtualError: o });
      }
    };
    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, { apply: (p, g, v) => (u(), p.apply(g, v)) }) : n.addEventListener("readystatechange", u), n.setRequestHeader = new Proxy(n.setRequestHeader, { apply(p, g, v) {
      const [T, S] = v, w = g[Pt];
      return w && Ie(T) && Ie(S) && (w.request_headers[T.toLowerCase()] = S), p.apply(g, v);
    } }), e.apply(n, r);
  } }), t.send = new Proxy(t.send, { apply(e, n, r) {
    const o = n[Pt];
    return o ? (r[0] !== void 0 && (o.body = r[0]), ke("xhr", { startTimestamp: 1e3 * Le(), xhr: n }), e.apply(n, r)) : e.apply(n, r);
  } });
}
function rc(t, e = (function(n) {
  const r = dn[n];
  if (r) return r;
  let o = ce[n];
  if (gr(o)) return dn[n] = o.bind(ce);
  const s = ce.document;
  if (s && typeof s.createElement == "function") try {
    const a = s.createElement("iframe");
    a.hidden = !0, s.head.appendChild(a);
    const c = a.contentWindow;
    c && c[n] && (o = c[n]), s.head.removeChild(a);
  } catch (a) {
    Za && F.warn(`Could not create sandbox iframe for ${n} check, bailing to window.${n}: `, a);
  }
  return o && (dn[n] = o.bind(ce));
})("fetch")) {
  let n = 0, r = 0;
  return Na(t, function(o) {
    const s = o.body.length;
    n += s, r++;
    const a = { body: o.body, method: "POST", referrerPolicy: "origin", headers: t.headers, keepalive: n <= 6e4 && r < 15, ...t.fetchOptions };
    if (!e) return Qi("fetch"), _n("No fetch implementation available");
    try {
      return e(t.url, a).then((c) => (n -= s, r--, { statusCode: c.status, headers: { "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"), "retry-after": c.headers.get("Retry-After") } }));
    } catch (c) {
      return Qi("fetch"), n -= s, r--, _n(c);
    }
  });
}
function qn(t, e, n, r) {
  const o = { filename: t, function: e === "<anonymous>" ? Ke : e, in_app: !0 };
  return n !== void 0 && (o.lineno = n), r !== void 0 && (o.colno = r), o;
}
const ic = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, oc = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, sc = /\((\S*)(?::(\d+))(?::(\d+))\)/, ac = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, cc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, lc = (function(...t) {
  const e = t.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0, o = 0) => {
    const s = [], a = n.split(`
`);
    for (let c = r; c < a.length; c++) {
      const u = a[c];
      if (u.length > 1024) continue;
      const p = oi.test(u) ? u.replace(oi, "$1") : u;
      if (!p.match(/\S*Error: /)) {
        for (const g of e) {
          const v = g(p);
          if (v) {
            s.push(v);
            break;
          }
        }
        if (s.length >= 50 + o) break;
      }
    }
    return (function(c) {
      if (!c.length) return [];
      const u = Array.from(c);
      return /sentryWrapped/.test(Gt(u).function || "") && u.pop(), u.reverse(), si.test(Gt(u).function || "") && (u.pop(), si.test(Gt(u).function || "") && u.pop()), u.slice(0, 50).map((p) => ({ ...p, filename: p.filename || Gt(u).filename, function: p.function || Ke }));
    })(s.slice(o));
  };
})([30, (t) => {
  const e = ic.exec(t);
  if (e) {
    const [, r, o, s] = e;
    return qn(r, Ke, +o, +s);
  }
  const n = oc.exec(t);
  if (n) {
    if (n[2] && n[2].indexOf("eval") === 0) {
      const s = sc.exec(n[2]);
      s && (n[2] = s[1], n[3] = s[2], n[4] = s[3]);
    }
    const [r, o] = Ki(n[1] || Ke, n[2]);
    return qn(o, r, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
  }
}], [50, (t) => {
  const e = ac.exec(t);
  if (e) {
    if (e[3] && e[3].indexOf(" > eval") > -1) {
      const o = cc.exec(e[3]);
      o && (e[1] = e[1] || "eval", e[3] = o[1], e[4] = o[2], e[5] = "");
    }
    let n = e[3], r = e[1] || Ke;
    return [r, n] = Ki(r, n), qn(n, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
  }
}]), Ki = (t, e) => {
  const n = t.indexOf("safari-extension") !== -1, r = t.indexOf("safari-web-extension") !== -1;
  return n || r ? [t.indexOf("@") !== -1 ? t.split("@")[0] : Ke, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e];
}, Xi = 1024, uc = (t = {}) => {
  const e = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...t };
  return { name: "Breadcrumbs", setup(n) {
    var r;
    e.console && (function(o) {
      const s = "console";
      Ze(s, o), et(s, Va);
    })(/* @__PURE__ */ (function(o) {
      return function(s) {
        if (ne() !== o) return;
        const a = { category: "console", data: { arguments: s.args, logger: "console" }, level: Ja(s.level), message: di(s.args, " ") };
        if (s.level === "assert") {
          if (s.args[0] !== !1) return;
          a.message = `Assertion failed: ${di(s.args.slice(1), " ") || "console.assert"}`, a.data.arguments = s.args.slice(1);
        }
        We(a, { input: s.args, level: s.level });
      };
    })(n)), e.dom && (r = /* @__PURE__ */ (function(o, s) {
      return function(a) {
        if (ne() !== o) return;
        let c, u, p = typeof s == "object" ? s.serializeAttribute : void 0, g = typeof s == "object" && typeof s.maxStringLength == "number" ? s.maxStringLength : void 0;
        g && g > Xi && (Ln && F.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${g} was configured. Sentry will use 1024 instead.`), g = Xi), typeof p == "string" && (p = [p]);
        try {
          const T = a.event, S = (function(w) {
            return !!w && !!w.target;
          })(T) ? T.target : T;
          c = ss(S, { keyAttrs: p, maxStringLength: g }), u = (function(w) {
            if (!Lr.HTMLElement) return null;
            let m = w;
            for (let _ = 0; _ < 5; _++) {
              if (!m) return null;
              if (m instanceof HTMLElement) {
                if (m.dataset.sentryComponent) return m.dataset.sentryComponent;
                if (m.dataset.sentryElement) return m.dataset.sentryElement;
              }
              m = m.parentNode;
            }
            return null;
          })(S);
        } catch {
          c = "<unknown>";
        }
        if (c.length === 0) return;
        const v = { category: `ui.${a.name}`, message: c };
        u && (v.data = { "ui.component_name": u }), We(v, { event: a.event, name: a.name, global: a.global });
      };
    })(n, e.dom), Ze("dom", r), et("dom", ec)), e.xhr && (function(o) {
      Ze("xhr", o), et("xhr", nc);
    })(/* @__PURE__ */ (function(o) {
      return function(s) {
        if (ne() !== o) return;
        const { startTimestamp: a, endTimestamp: c } = s, u = s.xhr[Pt];
        if (!a || !c || !u) return;
        const { method: p, url: g, status_code: v, body: T } = u, S = { method: p, url: g, status_code: v }, w = { xhr: s.xhr, input: T, startTimestamp: a, endTimestamp: c };
        We({ category: "xhr", data: S, type: "http", level: zi(v) }, w);
      };
    })(n)), e.fetch && Wa(/* @__PURE__ */ (function(o) {
      return function(s) {
        if (ne() !== o) return;
        const { startTimestamp: a, endTimestamp: c } = s;
        if (c && (!s.fetchData.url.match(/sentry_key/) || s.fetchData.method !== "POST")) if (s.error)
          We({ category: "fetch", data: s.fetchData, level: "error", type: "http" }, { data: s.error, input: s.args, startTimestamp: a, endTimestamp: c });
        else {
          const u = s.response, p = { ...s.fetchData, status_code: u && u.status }, g = { input: s.args, response: u, startTimestamp: a, endTimestamp: c };
          We({ category: "fetch", data: p, type: "http", level: zi(p.status_code) }, g);
        }
      };
    })(n)), e.history && vs(/* @__PURE__ */ (function(o) {
      return function(s) {
        if (ne() !== o) return;
        let a = s.from, c = s.to;
        const u = Rn(Y.location.href);
        let p = a ? Rn(a) : void 0;
        const g = Rn(c);
        p && p.path || (p = u), u.protocol === g.protocol && u.host === g.host && (c = g.relative), u.protocol === p.protocol && u.host === p.host && (a = p.relative), We({ category: "navigation", data: { from: a, to: c } });
      };
    })(n)), e.sentry && n.on("beforeSendEvent", /* @__PURE__ */ (function(o) {
      return function(s) {
        ne() === o && We({ category: "sentry." + (s.type === "transaction" ? "transaction" : "event"), event_id: s.event_id, level: s.level, message: Ue(s) }, { event: s });
      };
    })(n));
  } };
}, dc = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], pc = (t = {}) => {
  const e = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...t };
  return { name: "BrowserApiErrors", setupOnce() {
    e.setTimeout && pe(Y, "setTimeout", Zi), e.setInterval && pe(Y, "setInterval", Zi), e.requestAnimationFrame && pe(Y, "requestAnimationFrame", hc), e.XMLHttpRequest && "XMLHttpRequest" in Y && pe(XMLHttpRequest.prototype, "send", fc);
    const n = e.eventTarget;
    n && (Array.isArray(n) ? n : dc).forEach(gc);
  } };
};
function Zi(t) {
  return function(...e) {
    const n = e[0];
    return e[0] = wt(n, { mechanism: { data: { function: $e(t) }, handled: !1, type: "instrument" } }), t.apply(this, e);
  };
}
function hc(t) {
  return function(e) {
    return t.apply(this, [wt(e, { mechanism: { data: { function: "requestAnimationFrame", handler: $e(t) }, handled: !1, type: "instrument" } })]);
  };
}
function fc(t) {
  return function(...e) {
    const n = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
      r in n && typeof n[r] == "function" && pe(n, r, function(o) {
        const s = { mechanism: { data: { function: r, handler: $e(o) }, handled: !1, type: "instrument" } }, a = Dr(o);
        return a && (s.mechanism.data.handler = $e(a)), wt(o, s);
      });
    }), t.apply(this, e);
  };
}
function gc(t) {
  const e = Y[t], n = e && e.prototype;
  n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (pe(n, "addEventListener", function(r) {
    return function(o, s, a) {
      try {
        typeof s.handleEvent == "function" && (s.handleEvent = wt(s.handleEvent, { mechanism: { data: { function: "handleEvent", handler: $e(s), target: t }, handled: !1, type: "instrument" } }));
      } catch {
      }
      return r.apply(this, [o, wt(s, { mechanism: { data: { function: "addEventListener", handler: $e(s), target: t }, handled: !1, type: "instrument" } }), a]);
    };
  }), pe(n, "removeEventListener", function(r) {
    return function(o, s, a) {
      try {
        const c = s.__sentry_wrapped__;
        c && r.call(this, o, c, a);
      } catch {
      }
      return r.call(this, o, s, a);
    };
  }));
}
const mc = () => ({ name: "BrowserSession", setupOnce() {
  Y.document !== void 0 ? (Pi({ ignoreDuration: !0 }), Ai(), vs(({ from: t, to: e }) => {
    t !== void 0 && t !== e && (Pi({ ignoreDuration: !0 }), Ai());
  })) : Ln && F.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
} }), vc = (t = {}) => {
  const e = { onerror: !0, onunhandledrejection: !0, ...t };
  return { name: "GlobalHandlers", setupOnce() {
    Error.stackTraceLimit = 50;
  }, setup(n) {
    e.onerror && ((function(r) {
      (function(o) {
        const s = "error";
        Ze(s, o), et(s, aa);
      })((o) => {
        const { stackParser: s, attachStacktrace: a } = to();
        if (ne() !== r || Hi()) return;
        const { msg: c, url: u, line: p, column: g, error: v } = o, T = (function(S, w, m, _) {
          const b = S.exception = S.exception || {}, M = b.values = b.values || [], P = M[0] = M[0] || {}, x = P.stacktrace = P.stacktrace || {}, O = x.frames = x.frames || [], N = _, J = m, ee = Ie(w) && w.length > 0 ? w : (function() {
            try {
              return Lr.document.location.href;
            } catch {
              return "";
            }
          })();
          return O.length === 0 && O.push({ colno: N, filename: ee, function: Ke, in_app: !0, lineno: J }), S;
        })(yr(s, v || c, void 0, a, !1), u, p, g);
        T.level = "error", Oi(T, { originalException: v, mechanism: { handled: !1, type: "onerror" } });
      });
    })(n), eo("onerror")), e.onunhandledrejection && ((function(r) {
      (function(o) {
        const s = "unhandledrejection";
        Ze(s, o), et(s, ca);
      })((o) => {
        const { stackParser: s, attachStacktrace: a } = to();
        if (ne() !== r || Hi()) return;
        const c = (function(p) {
          if (sr(p)) return p;
          try {
            if ("reason" in p) return p.reason;
            if ("detail" in p && "reason" in p.detail) return p.detail.reason;
          } catch {
          }
          return p;
        })(o), u = sr(c) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(c)}` }] } } : yr(s, c, void 0, a, !0);
        u.level = "error", Oi(u, { originalException: c, mechanism: { handled: !1, type: "onunhandledrejection" } });
      });
    })(n), eo("onunhandledrejection"));
  } };
};
function eo(t) {
  Ln && F.log(`Global Handler attached: ${t}`);
}
function to() {
  const t = ne();
  return t && t.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
}
const yc = () => ({ name: "HttpContext", preprocessEvent(t) {
  if (!Y.navigator && !Y.location && !Y.document) return;
  const e = t.request && t.request.url || Y.location && Y.location.href, { referrer: n } = Y.document || {}, { userAgent: r } = Y.navigator || {}, o = { ...t.request && t.request.headers, ...n && { Referer: n }, ...r && { "User-Agent": r } }, s = { ...t.request, ...e && { url: e }, headers: o };
  t.request = s;
} }), bc = (t = {}) => {
  const e = t.limit || 5, n = t.key || "cause";
  return { name: "LinkedErrors", preprocessEvent(r, o, s) {
    const a = s.getOptions();
    $a(Ur, a.stackParser, a.maxValueLength, n, e, r, o);
  } };
};
var no = "new", ro = "loading", io = "loaded", _r = "joining-meeting", Qe = "joined-meeting", Fe = "left-meeting", He = "error", _c = "playable", zn = "unknown", wc = "full", kc = "base", oo = "no-room", Sc = "end-of-life", Mc = "connection-error", Ec = "iframe-ready-for-launch-config", Cc = "iframe-launch-config", Tc = "theme-updated", Oc = "loading", Pc = "load-attempt-failed", so = "loaded", Ac = "started-camera", xc = "camera-error", Ic = "joining-meeting", jc = "joined-meeting", Lc = "left-meeting", Dc = "participant-joined", Nc = "participant-updated", Fc = "participant-left", Bc = "participant-counts-updated", Rc = "access-state-updated", Uc = "meeting-session-summary-updated", $c = "meeting-session-state-updated", Vc = "waiting-participant-added", Jc = "waiting-participant-updated", qc = "waiting-participant-removed", zc = "track-started", Wc = "track-stopped", Hc = "transcription-started", Gc = "transcription-stopped", Yc = "transcription-error", ao = "recording-started", co = "recording-stopped", Qc = "recording-stats", Kc = "recording-error", Xc = "recording-upload-completed", Zc = "recording-data", el = "app-message", tl = "transcription-message", nl = "remote-media-player-started", rl = "remote-media-player-updated", il = "remote-media-player-stopped", ol = "local-screen-share-started", sl = "local-screen-share-stopped", al = "local-screen-share-canceled", cl = "active-speaker-change", ll = "active-speaker-mode-change", ul = "network-quality-change", dl = "network-connection", pl = "cpu-load-change", hl = "face-counts-updated", tn = "fullscreen", nn = "exited-fullscreen", fl = "live-streaming-started", gl = "live-streaming-updated", ml = "live-streaming-stopped", vl = "live-streaming-error", yl = "lang-updated", bl = "receive-settings-updated", lo = "input-settings-updated", uo = "nonfatal-error", Wn = "error", Hn = 4096, po = 102400, Gn = "iframe-call-message", ho = "local-screen-start", fo = "daily-method-update-live-streaming-endpoints", rn = "transmit-log", je = "daily-custom-track", pn = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image", FACE_DETECTION: "face-detection" }, ys = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" }, wr = { PLAY: "play", PAUSE: "pause" }, lt = "daily", ut = "signalwire", Yn = ["jpg", "png", "jpeg"], _l = "add-endpoints", wl = "remove-endpoints", go = "sip-call-transfer";
function be() {
  return !V() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
}
function V() {
  return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative";
}
function bs() {
  return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
}
function kl() {
  return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && ((function(t, e) {
    if (!t || !e) return !0;
    switch (t) {
      case "Chrome":
        return e.major >= 75;
      case "Safari":
        return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(e.major === 13 && e.minor === 0 && e.point === 0);
      case "Firefox":
        return e.major >= 67;
    }
    return !0;
  })(ot(), kn()) || V());
}
function mo() {
  if (V() || !document) return !1;
  var t = document.createElement("iframe");
  return !!t.requestFullscreen || !!t.webkitRequestFullscreen;
}
var kr = "none", Sl = "software", Ml = "hardware", El = (function() {
  try {
    var t, e = document.createElement("canvas"), n = !1;
    (t = e.getContext("webgl2", { failIfMajorPerformanceCaveat: !0 })) || (n = !0, t = e.getContext("webgl2"));
    var r = t != null;
    return e.remove(), r ? n ? Sl : Ml : kr;
  } catch {
    return kr;
  }
})();
function _s() {
  var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
  return !V() && El !== kr && (t ? (function() {
    return vo() ? !1 : ["Chrome", "Firefox"].includes(ot());
  })() : (function() {
    if (vo()) return !1;
    var e = ot();
    if (e === "Safari") {
      var n = Jr();
      if (n.major < 15 || n.major === 15 && n.minor < 4) return !1;
    }
    return e === "Chrome" ? Vr().major >= 77 : e === "Firefox" ? qr().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(e);
  })());
}
function ws() {
  if (V() || ks() || typeof AudioWorkletNode > "u") return !1;
  switch (ot()) {
    case "Chrome":
    case "Firefox":
      return !0;
    case "Safari":
      var t = kn();
      return t.major > 17 || t.major === 17 && t.minor >= 4;
  }
  return !1;
}
function Qn() {
  return bs() && typeof MediaStreamTrack < "u" && !(function() {
    var t, e = ot();
    if (!be()) return !0;
    switch (e) {
      case "Chrome":
        return (t = Vr()).major && t.major > 0 && t.major < 75;
      case "Firefox":
        return (t = qr()).major < 91;
      case "Safari":
        return (t = Jr()).major < 13 || t.major === 13 && t.minor < 1;
      default:
        return !0;
    }
  })();
}
function ks() {
  return be().match(/Linux; Android/);
}
function vo() {
  var t, e = be(), n = e.match(/Mac/) && (!V() && typeof window < "u" && (t = window) !== null && t !== void 0 && (t = t.navigator) !== null && t !== void 0 && t.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
  return !!(e.match(/Mobi/) || e.match(/Android/) || n) || !!be().match(/DailyAnd\//) || void 0;
}
function ot() {
  if (typeof window < "u") {
    var t = be();
    return Ss() ? "Safari" : t.indexOf("Edge") > -1 ? "Edge" : t.match(/Chrome\//) ? "Chrome" : t.indexOf("Safari") > -1 || Ms() ? "Safari" : t.indexOf("Firefox") > -1 ? "Firefox" : t.indexOf("MSIE") > -1 || t.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
  }
}
function kn() {
  switch (ot()) {
    case "Chrome":
      return Vr();
    case "Safari":
      return Jr();
    case "Firefox":
      return qr();
    case "Edge":
      return (function() {
        var t = 0, e = 0;
        if (typeof window < "u") {
          var n = be().match(/Edge\/(\d+).(\d+)/);
          if (n) try {
            t = parseInt(n[1]), e = parseInt(n[2]);
          } catch {
          }
        }
        return { major: t, minor: e };
      })();
  }
}
function Vr() {
  var t = 0, e = 0, n = 0, r = 0, o = !1;
  if (typeof window < "u") {
    var s = be(), a = s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
    if (a) try {
      t = parseInt(a[1]), e = parseInt(a[2]), n = parseInt(a[3]), r = parseInt(a[4]), o = s.indexOf("OPR/") > -1;
    } catch {
    }
  }
  return { major: t, minor: e, build: n, patch: r, opera: o };
}
function Ss() {
  return !!be().match(/\((iPad|iPhone|iPod)/i) && bs();
}
function Ms() {
  return be().indexOf("AppleWebKit/605.1.15") > -1;
}
function Jr() {
  var t = 0, e = 0, n = 0;
  if (typeof window < "u") {
    var r = be().match(/Version\/(\d+).(\d+)(.(\d+))?/);
    if (r) try {
      t = parseInt(r[1]), e = parseInt(r[2]), n = parseInt(r[4]);
    } catch {
    }
    else (Ss() || Ms()) && (t = 14, e = 0, n = 3);
  }
  return { major: t, minor: e, point: n };
}
function qr() {
  var t = 0, e = 0;
  if (typeof window < "u") {
    var n = be().match(/Firefox\/(\d+).(\d+)/);
    if (n) try {
      t = parseInt(n[1]), e = parseInt(n[2]);
    } catch {
    }
  }
  return { major: t, minor: e };
}
var Es = (function() {
  return fe(function t() {
    he(this, t);
  }, [{ key: "addListenerForMessagesFromCallMachine", value: function(t, e, n) {
    Ct();
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(t, e, n) {
    Ct();
  } }, { key: "sendMessageToCallMachine", value: function(t, e, n, r) {
    Ct();
  } }, { key: "sendMessageToDailyJs", value: function(t, e) {
    Ct();
  } }, { key: "removeListener", value: function(t) {
    Ct();
  } }]);
})();
function yo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Kn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yo(Object(n), !0).forEach(function(r) {
      Te(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yo(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Cs() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cs = function() {
    return !!t;
  })();
}
var Cl = (function() {
  function t() {
    var e, n, r, o;
    return he(this, t), n = this, r = Se(r = t), (e = Tn(n, Cs() ? Reflect.construct(r, [], Se(n).constructor) : r.apply(n, o)))._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return On(t, Es), fe(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, n, r) {
    var o = this, s = function(a) {
      if (a.data && a.data.what === "iframe-call-message" && (!a.data.callClientId || a.data.callClientId === n) && (!a.data.from || a.data.from !== "module")) {
        var c = Kn({}, a.data);
        if (delete c.from, c.callbackStamp && o._messageCallbacks[c.callbackStamp]) {
          var u = c.callbackStamp;
          o._messageCallbacks[u].call(r, c), delete o._messageCallbacks[u];
        }
        delete c.what, delete c.callbackStamp, e.call(r, c);
      }
    };
    this._wrappedListeners[e] = s, window.addEventListener("message", s);
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, n, r) {
    var o = function(s) {
      var a;
      if (!(!s.data || s.data.what !== Gn || !s.data.action || s.data.from && s.data.from !== "module" || s.data.callClientId && n && s.data.callClientId !== n || s != null && (a = s.data) !== null && a !== void 0 && a.callFrameId)) {
        var c = s.data;
        e.call(r, c);
      }
    };
    this._wrappedListeners[e] = o, window.addEventListener("message", o);
  } }, { key: "sendMessageToCallMachine", value: function(e, n, r, o) {
    if (!r) throw new Error("undefined callClientId. Are you trying to use a DailyCall instance previously destroyed?");
    var s = Kn({}, e);
    if (s.what = Gn, s.from = "module", s.callClientId = r, n) {
      var a = Pn();
      this._messageCallbacks[a] = n, s.callbackStamp = a;
    }
    var c = o ? o.contentWindow : window, u = this._callMachineTargetOrigin(o);
    u && c.postMessage(s, u);
  } }, { key: "sendMessageToDailyJs", value: function(e, n) {
    e.what = Gn, e.callClientId = n, e.from = "embedded", window.postMessage(e, this._targetOriginFromWindowLocation());
  } }, { key: "removeListener", value: function(e) {
    var n = this._wrappedListeners[e];
    n && (window.removeEventListener("message", n), delete this._wrappedListeners[e]);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(e, n, r) {
    var o = Kn({}, e);
    o.callClientId = r;
    var s = n ? n.contentWindow : window, a = this._callMachineTargetOrigin(n);
    a && s.postMessage(o, a);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(e, n) {
    var r = function(o) {
      if (o.data && o.data.what === "iframe-call-message" && (!o.data.callClientId || o.data.callClientId === n) && (!o.data.from || o.data.from !== "module")) {
        var s = o.data;
        e(s);
      }
    };
    return this._wrappedListeners[e] = r, window.addEventListener("message", r), e;
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(e) {
    var n = this._wrappedListeners[e];
    n && (window.removeEventListener("message", n), delete this._wrappedListeners[e]);
  } }, { key: "_callMachineTargetOrigin", value: function(e) {
    return e ? e.src ? new URL(e.src).origin : void 0 : this._targetOriginFromWindowLocation();
  } }, { key: "_targetOriginFromWindowLocation", value: function() {
    return window.location.protocol === "file:" ? "*" : window.location.origin;
  } }]);
})();
function bo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ts() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ts = function() {
    return !!t;
  })();
}
var Tl = (function() {
  function t() {
    var e, n, r, o;
    return he(this, t), n = this, r = Se(r = t), e = Tn(n, Ts() ? Reflect.construct(r, [], Se(n).constructor) : r.apply(n, o)), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new ir.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new ir.EventEmitter(), e._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return On(t, Es), fe(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, n, r) {
    this._addListener(e, global.callMachineToDailyJsEmitter, n, r, "received call machine message");
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, n, r) {
    this._addListener(e, global.dailyJsToCallMachineEmitter, n, r, "received daily-js message");
  } }, { key: "sendMessageToCallMachine", value: function(e, n, r) {
    this._sendMessage(e, global.dailyJsToCallMachineEmitter, r, n, "sending message to call machine");
  } }, { key: "sendMessageToDailyJs", value: function(e, n) {
    this._sendMessage(e, global.callMachineToDailyJsEmitter, n, null, "sending message to daily-js");
  } }, { key: "removeListener", value: function(e) {
    var n = this._wrappedListeners[e];
    n && (global.callMachineToDailyJsEmitter.removeListener("message", n), global.dailyJsToCallMachineEmitter.removeListener("message", n), delete this._wrappedListeners[e]);
  } }, { key: "_addListener", value: function(e, n, r, o, s) {
    var a = this, c = function(u) {
      if (u.callClientId === r) {
        if (u.callbackStamp && a._messageCallbacks[u.callbackStamp]) {
          var p = u.callbackStamp;
          a._messageCallbacks[p].call(o, u), delete a._messageCallbacks[p];
        }
        e.call(o, u);
      }
    };
    this._wrappedListeners[e] = c, n.addListener("message", c);
  } }, { key: "_sendMessage", value: function(e, n, r, o, s) {
    var a = (function(u) {
      for (var p = 1; p < arguments.length; p++) {
        var g = arguments[p] != null ? arguments[p] : {};
        p % 2 ? bo(Object(g), !0).forEach(function(v) {
          Te(u, v, g[v]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(g)) : bo(Object(g)).forEach(function(v) {
          Object.defineProperty(u, v, Object.getOwnPropertyDescriptor(g, v));
        });
      }
      return u;
    })({}, e);
    if (a.callClientId = r, o) {
      var c = Pn();
      this._messageCallbacks[c] = o, a.callbackStamp = c;
    }
    n.emit("message", a);
  } }]);
})(), Sr = "replace", Mr = "shallow-merge", _o = [Sr, Mr], Ol = (function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.data, r = e.mergeStrategy, o = r === void 0 ? Sr : r;
    he(this, t), t._validateMergeStrategy(o), t._validateData(n, o), this.mergeStrategy = o, this.data = n;
  }
  return fe(t, [{ key: "isNoOp", value: function() {
    return t.isNoOpUpdate(this.data, this.mergeStrategy);
  } }], [{ key: "isNoOpUpdate", value: function(e, n) {
    return Object.keys(e).length === 0 && n === Mr;
  } }, { key: "_validateMergeStrategy", value: function(e) {
    if (!_o.includes(e)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(_o, "]"));
  } }, { key: "_validateData", value: function(e, n) {
    if (!(function(c) {
      if (c == null || R(c) !== "object") return !1;
      var u = Object.getPrototypeOf(c);
      return u == null || u === Object.prototype;
    })(e)) throw Error("Meeting session data must be a plain (map-like) object");
    var r;
    try {
      if (r = JSON.stringify(e), n === Sr) {
        var o = JSON.parse(r);
        ae(o, e) || console.warn("The meeting session data provided will be modified when serialized.", o, e);
      } else if (n === Mr) {
        for (var s in e) if (Object.hasOwnProperty.call(e, s) && e[s] !== void 0) {
          var a = JSON.parse(JSON.stringify(e[s]));
          ae(e[s], a) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", a, e[s]);
        }
      }
    } catch (c) {
      throw Error("Meeting session data must be serializable to JSON: ".concat(c));
    }
    if (r.length > po) throw Error("Meeting session data is too large (".concat(r.length, " characters). Maximum size suppported is ").concat(po, "."));
  } }]);
})();
function Os() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Os = function() {
    return !!t;
  })();
}
function Er(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Er = function(n) {
    if (n === null || !(function(o) {
      try {
        return Function.toString.call(o).indexOf("[native code]") !== -1;
      } catch {
        return typeof o == "function";
      }
    })(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (e !== void 0) {
      if (e.has(n)) return e.get(n);
      e.set(n, r);
    }
    function r() {
      return (function(o, s, a) {
        if (Os()) return Reflect.construct.apply(null, arguments);
        var c = [null];
        c.push.apply(c, s);
        var u = new (o.bind.apply(o, c))();
        return a && Dt(u, a.prototype), u;
      })(n, arguments, Se(this).constructor);
    }
    return r.prototype = Object.create(n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), Dt(r, n);
  }, Er(t);
}
function Ps() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ps = function() {
    return !!t;
  })();
}
function wo(t) {
  var e, n = (e = window._daily) === null || e === void 0 ? void 0 : e.pendings;
  if (n) {
    var r = n.indexOf(t);
    r !== -1 && n.splice(r, 1);
  }
}
var Pl = (function() {
  return fe(function t(e) {
    he(this, t), this._currentLoad = null, this._callClientId = e, this._publicPath = null;
  }, [{ key: "load", value: function() {
    var t, e = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0;
    if (this.loaded) return window._daily.instances[this._callClientId].callMachine.reset(), window._daily.instances[this._callClientId].publicPath = this._publicPath, void r(!0);
    t = this._callClientId, window._daily.pendings.push(t), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new Al(n, function(s) {
      var a = s.substring(0, s.lastIndexOf("/"));
      a.length && a.slice(-1) !== "/" && (a += "/"), e._publicPath = a, window._daily.instances[e._callClientId].publicPath = a, Zo(Ar(s)), r(!1);
    }, function(s, a) {
      a || wo(e._callClientId), o(s, a);
    }), this._currentLoad.start();
  } }, { key: "cancel", value: function() {
    this._currentLoad && this._currentLoad.cancel(), wo(this._callClientId);
  } }, { key: "loaded", get: function() {
    return this._currentLoad && this._currentLoad.succeeded;
  } }]);
})(), Al = (function() {
  return fe(function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
    he(this, t), this._dailyConfig = e, this._successCallback = n, this._failureCallback = r, this._urls = (function(o) {
      var s;
      if (ts(o)) return [mn(o)];
      var a = (s = ge ?? ns()) !== null && s !== void 0 ? s : re[0];
      return (a === re[0] ? re : [a].concat(Xo(re.filter(function(c) {
        return c !== a;
      })))).map(function(c) {
        return mn(o, c);
      });
    })(e), this._networkTimeoutMs = xl, this._passesRemaining = 3, this._urlIndex = 0, this._currentAttempt = null;
  }, [{ key: "start", value: function() {
    this._currentAttempt || this._startAttempt();
  } }, { key: "_startAttempt", value: function() {
    this._currentAttempt = new Il(this._dailyConfig, this._urls[this._urlIndex], this._networkTimeoutMs, this._successCallback, this._retryOrFailureCallback.bind(this)), this._currentAttempt.start();
  } }, { key: "_retryOrFailureCallback", value: function(t) {
    var e = this;
    if (!this._currentAttempt.cancelled) {
      this._urlIndex++;
      var n = this._urlIndex < this._urls.length, r = this._passesRemaining > 1, o = n || r;
      this._failureCallback(t, o), o && (n ? this._startAttempt() : (this._passesRemaining--, this._urlIndex = 0, setTimeout(function() {
        e._currentAttempt.cancelled || e._startAttempt();
      }, 3e3)));
    }
  } }, { key: "cancel", value: function() {
    this._currentAttempt && this._currentAttempt.cancel();
  } }, { key: "cancelled", get: function() {
    return this._currentAttempt && this._currentAttempt.cancelled;
  } }, { key: "succeeded", get: function() {
    return this._currentAttempt && this._currentAttempt.succeeded;
  } }]);
})(), Xn = (function() {
  function t() {
    return he(this, t), e = this, r = arguments, n = Se(n = t), Tn(e, Ps() ? Reflect.construct(n, r || [], Se(e).constructor) : n.apply(e, r));
    var e, n, r;
  }
  return On(t, Er(Error)), fe(t);
})(), xl = 2e4, Il = (function() {
  return fe(function e(n, r, o, s, a) {
    he(this, e), this._loadAttemptImpl = V() || !n.avoidEval ? new jl(n, r, o, s, a) : new Ll(n, r, o, s, a);
  }, [{ key: "start", value: (t = D(function* () {
    return this._loadAttemptImpl.start();
  }), function() {
    return t.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    this._loadAttemptImpl.cancel();
  } }, { key: "cancelled", get: function() {
    return this._loadAttemptImpl.cancelled;
  } }, { key: "succeeded", get: function() {
    return this._loadAttemptImpl.succeeded;
  } }]);
  var t;
})(), jl = (function() {
  return fe(function o(s, a, c, u, p) {
    he(this, o), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._networkTimeoutMs = c, this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache, this._refetchHeaders = null, this._dailyConfig = s, this._url = a, this._successCallback = u, this._failureCallback = p;
  }, [{ key: "start", value: (r = D(function* () {
    var o = this._url;
    !(yield this._tryLoadFromIOSCache(o)) && this._loadFromNetwork(o);
  }), function() {
    return r.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    clearTimeout(this._networkTimeout), this.cancelled = !0;
  } }, { key: "_tryLoadFromIOSCache", value: (n = D(function* (o) {
    if (!this._iosCache) return !1;
    try {
      var s = yield this._iosCache.get(o);
      return !!this.cancelled || !!s && (s.code ? (Function('"use strict";' + s.code)(), this.succeeded = !0, this._successCallback(o), !0) : (this._refetchHeaders = s.refetchHeaders, !1));
    } catch {
      return !1;
    }
  }), function(o) {
    return n.apply(this, arguments);
  }) }, { key: "_loadFromNetwork", value: (e = D(function* (o) {
    var s = this;
    this._networkTimeout = setTimeout(function() {
      s._networkTimedOut = !0, s._failureCallback({ msg: "Timed out (>".concat(s._networkTimeoutMs, " ms) when loading call object bundle ").concat(o), type: "timeout" });
    }, this._networkTimeoutMs);
    try {
      var a = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, c = yield fetch(o, a);
      if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new Xn();
      var u = yield this._getBundleCodeFromResponse(o, c);
      if (this.cancelled) throw new Xn();
      Function('"use strict";' + u)(), this._iosCache && this._iosCache.set(o, u, c.headers), this.succeeded = !0, this._successCallback(o);
    } catch (p) {
      if (clearTimeout(this._networkTimeout), p instanceof Xn || this.cancelled || this._networkTimedOut) return;
      this._failureCallback({ msg: "Failed to load call object bundle ".concat(o, ": ").concat(p), type: p.message });
    }
  }), function(o) {
    return e.apply(this, arguments);
  }) }, { key: "_getBundleCodeFromResponse", value: (t = D(function* (o, s) {
    if (s.ok) return yield s.text();
    if (this._iosCache && s.status === 304) return (yield this._iosCache.renew(o, s.headers)).code;
    throw new Error("Received ".concat(s.status, " response"));
  }), function(o, s) {
    return t.apply(this, arguments);
  }) }]);
  var t, e, n, r;
})(), Ll = (function() {
  return fe(function t(e, n, r, o, s) {
    he(this, t), this.cancelled = !1, this.succeeded = !1, this._dailyConfig = e, this._url = n, this._networkTimeoutMs = r, this._successCallback = o, this._failureCallback = s, this._attemptId = Pn(), this._networkTimeout = null, this._scriptElement = null;
  }, [{ key: "start", value: function() {
    window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = /* @__PURE__ */ new Set());
    var t = this._url;
    (typeof document > "u" ? "undefined" : R(document)) === "object" ? this._startLoading(t) : this._failureCallback({ msg: "Call object bundle must be loaded in a DOM/web context", type: "missing context" });
  } }, { key: "cancel", value: function() {
    this._stopLoading(), this.cancelled = !0;
  } }, { key: "_startLoading", value: function(t) {
    var e = this;
    this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function() {
      e._stopLoading(), e._failureCallback({ msg: "Timed out (>".concat(e._networkTimeoutMs, " ms) when loading call object bundle ").concat(t), type: "timeout" });
    }, this._networkTimeoutMs);
    var n = document.getElementsByTagName("head")[0], r = document.createElement("script");
    this._scriptElement = r, r.onload = function() {
      e._stopLoading(), e.succeeded = !0, e._successCallback(t);
    }, r.onerror = function(o) {
      e._stopLoading(), e._failureCallback({ msg: "Failed to load call object bundle ".concat(o.target.src), type: o.message });
    }, r.src = t, n.appendChild(r);
  } }, { key: "_stopLoading", value: function() {
    this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
  } }, { key: "_signUpForCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.add(this._attemptId);
  } }, { key: "_withdrawFromCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
  } }]);
})(), on = function(t, e, n) {
  return Nl(t.local, e, n) === !0;
}, Dl = function(t, e, n) {
  return t.local.streams && t.local.streams[e] && t.local.streams[e].stream && t.local.streams[e].stream["get".concat(n === "video" ? "Video" : "Audio", "Tracks")]()[0];
}, ht = function(t, e, n, r) {
  var o = Fl(t, e, n, r);
  return o && o.pendingTrack;
}, Nl = function(t, e, n) {
  if (!t) return !1;
  var r = function(s) {
    switch (s) {
      case "avatar":
        return !0;
      case "staged":
        return s;
      default:
        return !!s;
    }
  }, o = t.public.subscribedTracks;
  return o && o[e] ? ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(n) === -1 && o[e].custom ? [!0, "staged"].includes(o[e].custom) ? r(o[e].custom) : r(o[e].custom[n]) : r(o[e][n]) : !o || r(o.ALL);
}, Fl = function(t, e, n, r) {
  var o = Object.values(t.streams || {}).filter(function(s) {
    return s.participantId === e && s.type === n && s.pendingTrack && s.pendingTrack.kind === r;
  }).sort(function(s, a) {
    return new Date(a.starttime) - new Date(s.starttime);
  });
  return o && o[0];
}, Bl = function(t, e) {
  var n = t.local.public.customTracks;
  if (n && n[e]) return n[e].track;
};
function ko(t, e) {
  for (var n = e.getState(), r = 0, o = ["cam", "screen"]; r < o.length; r++) for (var s = o[r], a = 0, c = ["video", "audio"]; a < c.length; a++) {
    var u = c[a], p = s === "cam" ? u : "screen".concat(u.charAt(0).toUpperCase() + u.slice(1)), g = t.tracks[p];
    if (g) {
      var v = t.local ? Dl(n, s, u) : ht(n, t.session_id, s, u);
      g.state === "playable" && (g.track = v), g.persistentTrack = v;
    }
  }
}
function So(t, e) {
  try {
    var n = e.getState();
    for (var r in t.tracks) if (!Rl(r)) {
      var o = t.tracks[r].kind;
      if (o) {
        var s = t.tracks[r];
        if (s) {
          var a = t.local ? Bl(n, r) : ht(n, t.session_id, r, o);
          s.state === "playable" && (t.tracks[r].track = a), s.persistentTrack = a;
        }
      } else console.error("unknown type for custom track");
    }
  } catch (c) {
    console.error(c);
  }
}
function Rl(t) {
  return ["video", "audio", "screenVideo", "screenAudio"].includes(t);
}
function Mo(t, e, n) {
  var r = n.getState();
  if (t.local) {
    if (t.audio) try {
      t.audioTrack = r.local.streams.cam.stream.getAudioTracks()[0], t.audioTrack || (t.audio = !1);
    } catch {
    }
    if (t.video) try {
      t.videoTrack = r.local.streams.cam.stream.getVideoTracks()[0], t.videoTrack || (t.video = !1);
    } catch {
    }
    if (t.screen) try {
      t.screenVideoTrack = r.local.streams.screen.stream.getVideoTracks()[0], t.screenAudioTrack = r.local.streams.screen.stream.getAudioTracks()[0], t.screenVideoTrack || t.screenAudioTrack || (t.screen = !1);
    } catch {
    }
  } else {
    var o = !0;
    try {
      var s = r.participants[t.session_id];
      s && s.public && s.public.rtcType && s.public.rtcType.impl === "peer-to-peer" && s.private && !["connected", "completed"].includes(s.private.peeringState) && (o = !1);
    } catch (g) {
      console.error(g);
    }
    if (!o) return t.audio = !1, t.audioTrack = !1, t.video = !1, t.videoTrack = !1, t.screen = !1, void (t.screenTrack = !1);
    try {
      if (r.streams, t.audio && on(r, t.session_id, "cam-audio")) {
        var a = ht(r, t.session_id, "cam", "audio");
        a && (e && e.audioTrack && e.audioTrack.id === a.id ? t.audioTrack = a : a.muted || (t.audioTrack = a)), t.audioTrack || (t.audio = !1);
      }
      if (t.video && on(r, t.session_id, "cam-video")) {
        var c = ht(r, t.session_id, "cam", "video");
        c && (e && e.videoTrack && e.videoTrack.id === c.id ? t.videoTrack = c : c.muted || (t.videoTrack = c)), t.videoTrack || (t.video = !1);
      }
      if (t.screen && on(r, t.session_id, "screen-audio")) {
        var u = ht(r, t.session_id, "screen", "audio");
        u && (e && e.screenAudioTrack && e.screenAudioTrack.id === u.id ? t.screenAudioTrack = u : u.muted || (t.screenAudioTrack = u));
      }
      if (t.screen && on(r, t.session_id, "screen-video")) {
        var p = ht(r, t.session_id, "screen", "video");
        p && (e && e.screenVideoTrack && e.screenVideoTrack.id === p.id ? t.screenVideoTrack = p : p.muted || (t.screenVideoTrack = p));
      }
      t.screenVideoTrack || t.screenAudioTrack || (t.screen = !1);
    } catch (g) {
      console.error("unexpected error matching up tracks", g);
    }
  }
}
function Ul(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = (function(u, p) {
      if (u) {
        if (typeof u == "string") return Eo(u, p);
        var g = {}.toString.call(u).slice(8, -1);
        return g === "Object" && u.constructor && (g = u.constructor.name), g === "Map" || g === "Set" ? Array.from(u) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? Eo(u, p) : void 0;
      }
    })(t)) || e) {
      n && (t = n);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, c = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var u = n.next();
    return a = u.done, u;
  }, e: function(u) {
    c = !0, s = u;
  }, f: function() {
    try {
      a || n.return == null || n.return();
    } finally {
      if (c) throw s;
    }
  } };
}
function Eo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Ee = /* @__PURE__ */ new Map(), gt = null;
function $l(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = (function(u, p) {
      if (u) {
        if (typeof u == "string") return Co(u, p);
        var g = {}.toString.call(u).slice(8, -1);
        return g === "Object" && u.constructor && (g = u.constructor.name), g === "Map" || g === "Set" ? Array.from(u) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? Co(u, p) : void 0;
      }
    })(t)) || e) {
      n && (t = n);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, c = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var u = n.next();
    return a = u.done, u;
  }, e: function(u) {
    c = !0, s = u;
  }, f: function() {
    try {
      a || n.return == null || n.return();
    } finally {
      if (c) throw s;
    }
  } };
}
function Co(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Ce = /* @__PURE__ */ new Map(), xt = null;
function Vl(t) {
  As() ? (function(e) {
    Ee.has(e) || (Ee.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(n) {
      Ee.has(e) && (Ee.get(e).lastDevicesString = JSON.stringify(n), gt || (gt = (function() {
        var r = D(function* () {
          var o, s = yield navigator.mediaDevices.enumerateDevices(), a = Ul(Ee.keys());
          try {
            for (a.s(); !(o = a.n()).done; ) {
              var c = o.value, u = JSON.stringify(s);
              u !== Ee.get(c).lastDevicesString && (Ee.get(c).lastDevicesString = u, c(s));
            }
          } catch (p) {
            a.e(p);
          } finally {
            a.f();
          }
        });
        return function() {
          return r.apply(this, arguments);
        };
      })(), navigator.mediaDevices.addEventListener("devicechange", gt)));
    }).catch(function() {
    }));
  })(t) : (function(e) {
    Ce.has(e) || (Ce.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(n) {
      Ce.has(e) && (Ce.get(e).lastDevicesString = JSON.stringify(n), xt || (xt = setInterval(D(function* () {
        var r, o = yield navigator.mediaDevices.enumerateDevices(), s = $l(Ce.keys());
        try {
          for (s.s(); !(r = s.n()).done; ) {
            var a = r.value, c = JSON.stringify(o);
            c !== Ce.get(a).lastDevicesString && (Ce.get(a).lastDevicesString = c, a(o));
          }
        } catch (u) {
          s.e(u);
        } finally {
          s.f();
        }
      }), 3e3)));
    }));
  })(t);
}
function Jl(t) {
  As() ? (function(e) {
    Ee.has(e) && (Ee.delete(e), Ee.size === 0 && gt && (navigator.mediaDevices.removeEventListener("devicechange", gt), gt = null));
  })(t) : (function(e) {
    Ce.has(e) && (Ce.delete(e), Ce.size === 0 && xt && (clearInterval(xt), xt = null));
  })(t);
}
function As() {
  var t;
  return V() || ((t = navigator.mediaDevices) === null || t === void 0 ? void 0 : t.ondevicechange) !== void 0;
}
var ql = /* @__PURE__ */ new Set();
function zl(t, e) {
  return t && t.readyState === "live" && !(function(n, r) {
    return n.muted && !ql.has(n.id);
  })(t);
}
function To(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Be(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? To(Object(n), !0).forEach(function(r) {
      Te(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : To(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var At = Object.freeze({ VIDEO: "video", AUDIO: "audio", SCREEN_VIDEO: "screenVideo", SCREEN_AUDIO: "screenAudio", CUSTOM_VIDEO: "customVideo", CUSTOM_AUDIO: "customAudio" }), Wl = Object.freeze({ PARTICIPANTS: "participants", STREAMING: "streaming", TRANSCRIPTION: "transcription" }), It = Object.values(At), Oo = ["v", "a", "sv", "sa", "cv", "ca"];
Object.freeze(It.reduce(function(t, e, n) {
  return t[e] = Oo[n], t;
}, {})), Object.freeze(Oo.reduce(function(t, e, n) {
  return t[e] = It[n], t;
}, {}));
var Hl = [At.VIDEO, At.AUDIO, At.SCREEN_VIDEO, At.SCREEN_AUDIO], Po = Object.values(Wl), Ao = ["p", "s", "t"];
Object.freeze(Po.reduce(function(t, e, n) {
  return t[e] = Ao[n], t;
}, {})), Object.freeze(Ao.reduce(function(t, e, n) {
  return t[e] = Po[n], t;
}, {}));
var xs = (function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.base, r = e.byUserId, o = e.byParticipantId;
    he(this, t), this.base = n, this.byUserId = r, this.byParticipantId = o;
  }
  return fe(t, [{ key: "clone", value: function() {
    var e = new t();
    if (this.base instanceof X ? e.base = this.base.clone() : e.base = this.base, this.byUserId !== void 0) for (var n in e.byUserId = {}, this.byUserId) {
      var r = this.byUserId[n];
      e.byUserId[n] = r instanceof X ? r.clone() : r;
    }
    if (this.byParticipantId !== void 0) for (var o in e.byParticipantId = {}, this.byParticipantId) {
      var s = this.byParticipantId[o];
      e.byParticipantId[o] = s instanceof X ? s.clone() : s;
    }
    return e;
  } }, { key: "toJSONObject", value: function() {
    var e = {};
    if (typeof this.base == "boolean" ? e.base = this.base : this.base instanceof X && (e.base = this.base.toJSONObject()), this.byUserId !== void 0) for (var n in e.byUserId = {}, this.byUserId) {
      var r = this.byUserId[n];
      e.byUserId[n] = r instanceof X ? r.toJSONObject() : r;
    }
    if (this.byParticipantId !== void 0) for (var o in e.byParticipantId = {}, this.byParticipantId) {
      var s = this.byParticipantId[o];
      e.byParticipantId[o] = s instanceof X ? s.toJSONObject() : s;
    }
    return e;
  } }, { key: "toMinifiedJSONObject", value: function() {
    var e = {};
    if (this.base !== void 0 && (typeof this.base == "boolean" ? e.b = this.base : e.b = this.base.toMinifiedJSONObject()), this.byUserId !== void 0) for (var n in e.u = {}, this.byUserId) {
      var r = this.byUserId[n];
      e.u[n] = typeof r == "boolean" ? r : r.toMinifiedJSONObject();
    }
    if (this.byParticipantId !== void 0) for (var o in e.p = {}, this.byParticipantId) {
      var s = this.byParticipantId[o];
      e.p[o] = typeof s == "boolean" ? s : s.toMinifiedJSONObject();
    }
    return e;
  } }, { key: "normalize", value: function() {
    return this.base instanceof X && (this.base = this.base.normalize()), this.byUserId && (this.byUserId = Object.fromEntries(Object.entries(this.byUserId).map(function(e) {
      var n = Q(e, 2), r = n[0], o = n[1];
      return [r, o instanceof X ? o.normalize() : o];
    }))), this.byParticipantId && (this.byParticipantId = Object.fromEntries(Object.entries(this.byParticipantId).map(function(e) {
      var n = Q(e, 2), r = n[0], o = n[1];
      return [r, o instanceof X ? o.normalize() : o];
    }))), this;
  } }], [{ key: "fromJSONObject", value: function(e) {
    var n, r, o;
    if (e.base !== void 0 && (n = typeof e.base == "boolean" ? e.base : X.fromJSONObject(e.base)), e.byUserId !== void 0) for (var s in r = {}, e.byUserId) {
      var a = e.byUserId[s];
      r[s] = typeof a == "boolean" ? a : X.fromJSONObject(a);
    }
    if (e.byParticipantId !== void 0) for (var c in o = {}, e.byParticipantId) {
      var u = e.byParticipantId[c];
      o[c] = typeof u == "boolean" ? u : X.fromJSONObject(u);
    }
    return new t({ base: n, byUserId: r, byParticipantId: o });
  } }, { key: "fromMinifiedJSONObject", value: function(e) {
    var n, r, o;
    if (e.b !== void 0 && (n = typeof e.b == "boolean" ? e.b : X.fromMinifiedJSONObject(e.b)), e.u !== void 0) for (var s in r = {}, e.u) {
      var a = e.u[s];
      r[s] = typeof a == "boolean" ? a : X.fromMinifiedJSONObject(a);
    }
    if (e.p !== void 0) for (var c in o = {}, e.p) {
      var u = e.p[c];
      o[c] = typeof u == "boolean" ? u : X.fromMinifiedJSONObject(u);
    }
    return new t({ base: n, byUserId: r, byParticipantId: o });
  } }, { key: "validateJSONObject", value: function(e) {
    if (R(e) !== "object") return [!1, "canReceive must be an object"];
    for (var n = ["base", "byUserId", "byParticipantId"], r = 0, o = Object.keys(e); r < o.length; r++) {
      var s = o[r];
      if (!n.includes(s)) return [!1, "canReceive can only contain keys (".concat(n.join(", "), ")")];
      if (s === "base") {
        var a = Q(X.validateJSONObject(e.base, !0), 2), c = a[0], u = a[1];
        if (!c) return [!1, u];
      } else {
        if (R(e[s]) !== "object") return [!1, "invalid (non-object) value for field '".concat(s, "' in canReceive")];
        for (var p = 0, g = Object.values(e[s]); p < g.length; p++) {
          var v = g[p], T = Q(X.validateJSONObject(v), 2), S = T[0], w = T[1];
          if (!S) return [!1, w];
        }
      }
    }
    return [!0];
  } }]);
})(), X = (function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.video, r = e.audio, o = e.screenVideo, s = e.screenAudio, a = e.customVideo, c = e.customAudio;
    he(this, t), this.video = n, this.audio = r, this.screenVideo = o, this.screenAudio = s, this.customVideo = a, this.customAudio = c;
  }
  return fe(t, [{ key: "clone", value: function() {
    var e = new t();
    return this.video !== void 0 && (e.video = this.video), this.audio !== void 0 && (e.audio = this.audio), this.screenVideo !== void 0 && (e.screenVideo = this.screenVideo), this.screenAudio !== void 0 && (e.screenAudio = this.screenAudio), this.customVideo !== void 0 && (e.customVideo = Be({}, this.customVideo)), this.customAudio !== void 0 && (e.customAudio = Be({}, this.customAudio)), e;
  } }, { key: "toJSONObject", value: function() {
    var e = {};
    return this.video !== void 0 && (e.video = this.video), this.audio !== void 0 && (e.audio = this.audio), this.screenVideo !== void 0 && (e.screenVideo = this.screenVideo), this.screenAudio !== void 0 && (e.screenAudio = this.screenAudio), this.customVideo !== void 0 && (e.customVideo = Be({}, this.customVideo)), this.customAudio !== void 0 && (e.customAudio = Be({}, this.customAudio)), e;
  } }, { key: "toMinifiedJSONObject", value: function() {
    var e = {};
    return this.video !== void 0 && (e.v = this.video), this.audio !== void 0 && (e.a = this.audio), this.screenVideo !== void 0 && (e.sv = this.screenVideo), this.screenAudio !== void 0 && (e.sa = this.screenAudio), this.customVideo !== void 0 && (e.cv = Be({}, this.customVideo)), this.customAudio !== void 0 && (e.ca = Be({}, this.customAudio)), e;
  } }, { key: "normalize", value: function() {
    function e(n, r) {
      return n && Object.keys(n).length === 1 && n["*"] === r;
    }
    return !(this.video !== !0 || this.audio !== !0 || this.screenVideo !== !0 || this.screenAudio !== !0 || !e(this.customVideo, !0) || !e(this.customAudio, !0)) || (this.video !== !1 || this.audio !== !1 || this.screenVideo !== !1 || this.screenAudio !== !1 || !e(this.customVideo, !1) || !e(this.customAudio, !1)) && this;
  } }], [{ key: "fromBoolean", value: function(e) {
    return new t({ video: e, audio: e, screenVideo: e, screenAudio: e, customVideo: { "*": e }, customAudio: { "*": e } });
  } }, { key: "fromJSONObject", value: function(e) {
    return new t({ video: e.video, audio: e.audio, screenVideo: e.screenVideo, screenAudio: e.screenAudio, customVideo: e.customVideo !== void 0 ? Be({}, e.customVideo) : void 0, customAudio: e.customAudio !== void 0 ? Be({}, e.customAudio) : void 0 });
  } }, { key: "fromMinifiedJSONObject", value: function(e) {
    return new t({ video: e.v, audio: e.a, screenVideo: e.sv, screenAudio: e.sa, customVideo: e.cv, customAudio: e.ca });
  } }, { key: "validateJSONObject", value: function(e, n) {
    if (typeof e == "boolean") return [!0];
    if (R(e) !== "object") return [!1, "invalid (non-object, non-boolean) value in canReceive"];
    for (var r = Object.keys(e), o = 0, s = r; o < s.length; o++) {
      var a = s[o];
      if (!It.includes(a)) return [!1, "invalid media type '".concat(a, "' in canReceive")];
      if (Hl.includes(a)) {
        if (typeof e[a] != "boolean") return [!1, "invalid (non-boolean) value for media type '".concat(a, "' in canReceive")];
      } else {
        if (R(e[a]) !== "object") return [!1, "invalid (non-object) value for media type '".concat(a, "' in canReceive")];
        for (var c = 0, u = Object.values(e[a]); c < u.length; c++)
          if (typeof u[c] != "boolean") return [!1, "invalid (non-boolean) value for entry within '".concat(a, "' in canReceive")];
        if (n && e[a]["*"] === void 0) return [!1, `canReceive "base" permission must specify "*" as an entry within '`.concat(a, "'")];
      }
    }
    return n && r.length !== It.length ? [!1, 'canReceive "base" permission must specify all media types: '.concat(It.join(", "), " (or be set to a boolean shorthand)")] : [!0];
  } }]);
})(), Gl = ["initialReceiveBitrate"], Yl = ["initialReceiveBitrate"], Ql = ["result"], Kl = ["preserveIframe"];
function xo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function I(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xo(Object(n), !0).forEach(function(r) {
      Te(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xo(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Is() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Is = function() {
    return !!t;
  })();
}
function Cr(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = (function(u, p) {
      if (u) {
        if (typeof u == "string") return Io(u, p);
        var g = {}.toString.call(u).slice(8, -1);
        return g === "Object" && u.constructor && (g = u.constructor.name), g === "Map" || g === "Set" ? Array.from(u) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? Io(u, p) : void 0;
      }
    })(t)) || e) {
      n && (t = n);
      var r = 0, o = function() {
      };
      return { s: o, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, c = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var u = n.next();
    return a = u.done, u;
  }, e: function(u) {
    c = !0, s = u;
  }, f: function() {
    try {
      a || n.return == null || n.return();
    } finally {
      if (c) throw s;
    }
  } };
}
function Io(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Ge = {}, jo = "video", Xl = "voice", Lo = 3e4, Do = 4294967295, No = V() ? { data: {} } : { data: {}, topology: "none" }, Fo = { present: 0, hidden: 0 }, js = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } }, Zn = Object.keys(js), Bo = ["state", "volume", "simulcastEncodings"], Ro = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } }, Sn = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string", visualState: "'default' | 'sidebar-open' | 'active'" } }, Tr = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } }, Ls = /^[a-zA-Z0-9_-]+$/;
function Uo(t) {
  if (t != null && R(t) === "object" && !Array.isArray(t)) {
    var e, n = {}, r = Cr(Object.entries(t).slice(0, 10));
    try {
      for (r.s(); !(e = r.n()).done; ) {
        var o = Q(e.value, 2), s = o[0], a = o[1];
        typeof s != "string" || s.length > 64 || Ls.test(s) && typeof a == "string" && (n[s] = a.slice(0, 256));
      }
    } catch (c) {
      r.e(c);
    } finally {
      r.f();
    }
    return Object.keys(n).length ? n : void 0;
  }
}
var Ye = { customIntegrations: { validate: Vs, help: Us() }, customTrayButtons: { validate: $s, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(Sn)) }, url: { validate: function(t) {
  return typeof t == "string";
}, help: "url should be a string" }, baseUrl: { validate: function(t) {
  return console.warn("baseUrl is deprecated and has no effect"), typeof t == "string";
}, help: "baseUrl should be a string" }, token: { validate: function(t) {
  return typeof t == "string";
}, help: "token should be a string", queryString: "t" }, dailyConfig: { validate: function(t, e) {
  try {
    return e.validateDailyConfig(t), !0;
  } catch (n) {
    console.error("Failed to validate dailyConfig", n);
  }
  return !1;
}, help: "Unsupported dailyConfig. Check error logs for detailed info." }, reactNativeConfig: { validate: function(t) {
  return Js(t, Ro);
}, help: "reactNativeConfig should look like ".concat(JSON.stringify(Ro), ", all fields optional") }, lang: { validate: function(t) {
  return ["cs", "da", "de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sk", "sv", "tr", "user"].includes(t);
}, help: "language not supported. Options are: cs, da, de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sk, sv, tr, user" }, userName: !0, userData: { validate: function(t) {
  try {
    return Ds(t), !0;
  } catch (e) {
    return console.error(e), !1;
  }
}, help: "invalid userData type provided" }, startVideoOff: !0, startAudioOff: !0, allowLocalVideo: !0, allowLocalAudio: !0, activeSpeakerMode: !0, showLeaveButton: !0, showLocalVideo: !0, showParticipantsBar: !0, showFullscreenButton: !0, showUserNameChangeUI: !0, iframeStyle: !0, customLayout: !0, cssFile: !0, cssText: !0, bodyClass: !0, videoSource: { validate: function(t, e) {
  if (typeof t == "boolean") return e._preloadCache.allowLocalVideo = t, !0;
  var n;
  if (t instanceof MediaStreamTrack) e._sharedTracks.videoTrack = t, n = { customTrack: je };
  else {
    if (delete e._sharedTracks.videoTrack, typeof t != "string") return console.error("videoSource must be a MediaStreamTrack, boolean, or a string"), !1;
    n = { deviceId: t };
  }
  return e._updatePreloadCacheInputSettings({ video: { settings: n } }, !1), !0;
} }, audioSource: { validate: function(t, e) {
  if (typeof t == "boolean") return e._preloadCache.allowLocalAudio = t, !0;
  var n;
  if (t instanceof MediaStreamTrack) e._sharedTracks.audioTrack = t, n = { customTrack: je };
  else {
    if (delete e._sharedTracks.audioTrack, typeof t != "string") return console.error("audioSource must be a MediaStreamTrack, boolean, or a string"), !1;
    n = { deviceId: t };
  }
  return e._updatePreloadCacheInputSettings({ audio: { settings: n } }, !1), !0;
} }, subscribeToTracksAutomatically: { validate: function(t, e) {
  return e._preloadCache.subscribeToTracksAutomatically = t, !0;
} }, theme: { validate: function(t) {
  var e = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], n = function(r) {
    for (var o = 0, s = Object.keys(r); o < s.length; o++) {
      var a = s[o];
      if (!e.includes(a)) return console.error('unsupported color "'.concat(a, '". Valid colors: ').concat(e.join(", "))), !1;
      if (!r[a].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(a, ' theme color should be provided in valid hex color format. Received: "').concat(r[a], '"')), !1;
    }
    return !0;
  };
  return R(t) === "object" && ("light" in t && "dark" in t || "colors" in t) ? "light" in t && "dark" in t ? "colors" in t.light ? "colors" in t.dark ? n(t.light.colors) && n(t.dark.colors) : (console.error('Dark theme is missing "colors" property.', t), !1) : (console.error('Light theme is missing "colors" property.', t), !1) : n(t.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', t), !1);
}, help: "unsupported theme configuration. Check error logs for detailed info." }, layoutConfig: { validate: function(t) {
  if ("grid" in t) {
    var e = t.grid;
    if ("maxTilesPerPage" in e) {
      if (!Number.isInteger(e.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(e.maxTilesPerPage, ".")), !1;
      if (e.maxTilesPerPage > 49) return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1;
    }
    if ("minTilesPerPage" in e) {
      if (!Number.isInteger(e.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(e.minTilesPerPage, ".")), !1;
      if (e.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
      if ("maxTilesPerPage" in e && e.minTilesPerPage > e.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1;
    }
  }
  return !0;
}, help: "unsupported layoutConfig. Check error logs for detailed info." }, receiveSettings: { validate: function(t, e) {
  var n = t.initialReceiveBitrate, r = ln(t, Gl);
  if (n !== void 0 && !e._callObjectMode) throw new Error("initialReceiveBitrate is only available in call object mode");
  return (function(o) {
    if (o !== void 0 && (!Number.isInteger(o) || o < Lo || o > Do)) throw new Error("initialReceiveBitrate must be a whole number of bits per second, between ".concat(Lo, " and ").concat(Do));
  })(n), Ns(r, { allowAllParticipantsKey: !1 });
}, help: Rs({ allowAllParticipantsKey: !1 }) }, sendSettings: { validate: function(t, e) {
  return !!(function(n, r) {
    try {
      return r.validateUpdateSendSettings(n), !0;
    } catch (o) {
      return console.error("Failed to validate send settings", o), !1;
    }
  })(t, e) && (e._preloadCache.sendSettings = t, !0);
}, help: "Invalid sendSettings provided. Check error logs for detailed info." }, inputSettings: { validate: function(t, e) {
  var n;
  return !!Fs(t) && (e._inputSettings || (e._inputSettings = {}), Bs(t, (n = e.properties) === null || n === void 0 ? void 0 : n.dailyConfig, e._sharedTracks), e._updatePreloadCacheInputSettings(t, !0), !0);
}, help: Or() }, layout: { validate: function(t) {
  return t === "custom-v1" || t === "browser" || t === "none";
}, help: 'layout may only be set to "custom-v1"', queryString: "layout" }, emb: { queryString: "emb" }, embHref: { queryString: "embHref" }, dailyJsVersion: { queryString: "dailyJsVersion" }, aboutClient: { validate: function(t) {
  if (t == null) return !0;
  if (R(t) !== "object" || Array.isArray(t)) return !1;
  var e = Object.entries(t);
  if (e.length > 10) return !1;
  for (var n = 0, r = e; n < r.length; n++) {
    var o = Q(r[n], 2), s = o[0], a = o[1];
    if (typeof s != "string" || s.length > 64 || !Ls.test(s) || typeof a != "string" || a.length > 256) return !1;
  }
  return !0;
}, help: "aboutClient must be an object with up to ".concat(10, " entries; keys must be strings made up of characters (a-z, 0-9, _, -) and a max length of ").concat(64, "; values must be strings with a max length of ").concat(256) }, proxy: { queryString: "proxy" }, strictMode: !0, allowMultipleCallInstances: !0 }, sn = { styles: { validate: function(t) {
  for (var e in t) if (e !== "cam" && e !== "screen") return !1;
  if (t.cam) {
    for (var n in t.cam) if (n !== "div" && n !== "video") return !1;
  }
  if (t.screen) {
    for (var r in t.screen) if (r !== "div" && r !== "video") return !1;
  }
  return !0;
}, help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }" }, setSubscribedTracks: { validate: function(t, e) {
  if (e._preloadCache.subscribeToTracksAutomatically) return !1;
  var n = [!0, !1, "staged"];
  if (n.includes(t) || !V() && t === "avatar") return !0;
  var r = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"], o = function(s) {
    var a = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    for (var c in s) if (c === "custom") {
      if (!n.includes(s[c]) && !o(s[c], !0)) return !1;
    } else {
      var u = !a && !r.includes(c), p = !n.includes(s[c]);
      if (u || p) return !1;
    }
    return !0;
  };
  return o(t);
}, help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(V() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }") }, setAudio: !0, setVideo: !0, setScreenShare: { validate: function(t) {
  return t === !1;
}, help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares" }, eject: !0, updatePermissions: { validate: function(t) {
  for (var e = 0, n = Object.entries(t); e < n.length; e++) {
    var r = Q(n[e], 2), o = r[0], s = r[1];
    switch (o) {
      case "hasPresence":
        if (typeof s != "boolean") return !1;
        break;
      case "canSend":
        if (s instanceof Set || s instanceof Array || Array.isArray(s)) {
          var a, c = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], u = Cr(s);
          try {
            for (u.s(); !(a = u.n()).done; ) {
              var p = a.value;
              if (!c.includes(p)) return !1;
            }
          } catch (b) {
            u.e(b);
          } finally {
            u.f();
          }
        } else if (typeof s != "boolean") return !1;
        (s instanceof Array || Array.isArray(s)) && (t.canSend = new Set(s));
        break;
      case "canReceive":
        var g = Q(xs.validateJSONObject(s), 2), v = g[0], T = g[1];
        if (!v) return console.error(T), !1;
        break;
      case "canAdmin":
        if (s instanceof Set || s instanceof Array || Array.isArray(s)) {
          var S, w = ["participants", "streaming", "transcription"], m = Cr(s);
          try {
            for (m.s(); !(S = m.n()).done; ) {
              var _ = S.value;
              if (!w.includes(_)) return !1;
            }
          } catch (b) {
            m.e(b);
          } finally {
            m.f();
          }
        } else if (typeof s != "boolean") return !1;
        (s instanceof Array || Array.isArray(s)) && (t.canAdmin = new Set(s));
        break;
      default:
        return !1;
    }
  }
  return !0;
}, help: "updatePermissions can take hasPresence, canSend, canReceive, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canReceive must be an object specifying base, byUserId, and/or byParticipantId fields (see documentation for more details). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)." } };
Promise.any || (Promise.any = (function() {
  var t = D(function* (e) {
    return new Promise(function(n, r) {
      var o = [];
      e.forEach(function(s) {
        return Promise.resolve(s).then(function(a) {
          n(a);
        }).catch(function(a) {
          o.push(a), o.length === e.length && r(o);
        });
      });
    });
  });
  return function(e) {
    return t.apply(this, arguments);
  };
})());
var $o = (function() {
  function t(i) {
    var d, l, h, f, k, E, C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (he(this, t), h = this, f = Se(f = t), Te(l = Tn(h, Is() ? Reflect.construct(f, [], Se(h).constructor) : f.apply(h, k)), "startListeningForDeviceChanges", function() {
      Vl(l.handleDeviceChange);
    }), Te(l, "stopListeningForDeviceChanges", function() {
      Jl(l.handleDeviceChange);
    }), Te(l, "handleDeviceChange", function(G) {
      G = G.map(function(oe) {
        return JSON.parse(JSON.stringify(oe));
      }), l.emitDailyJSEvent({ action: "available-devices-updated", availableDevices: G });
    }), Te(l, "handleNativeAppStateChange", (function() {
      var G = D(function* (oe) {
        if (oe === "destroyed") return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield l.destroy());
        var Je = oe === "active";
        l.disableReactNativeAutoDeviceManagement("video") || (Je ? l.camUnmutedBeforeLosingNativeActiveState && l.setLocalVideo(!0) : (l.camUnmutedBeforeLosingNativeActiveState = l.localVideo(), l.camUnmutedBeforeLosingNativeActiveState && l.setLocalVideo(!1)));
      });
      return function(oe) {
        return G.apply(this, arguments);
      };
    })()), Te(l, "handleNativeAudioFocusChange", function(G) {
      l.disableReactNativeAutoDeviceManagement("audio") || (l._hasNativeAudioFocus = G, l.toggleParticipantAudioBasedOnNativeAudioFocus(), l._hasNativeAudioFocus ? l.micUnmutedBeforeLosingNativeAudioFocus && l.setLocalAudio(!0) : (l.micUnmutedBeforeLosingNativeAudioFocus = l.localAudio(), l.setLocalAudio(!1)));
    }), Te(l, "handleNativeSystemScreenCaptureStop", function() {
      l.stopScreenShare();
    }), !Qn() && !V()) throw new Error("WebRTC not supported or suppressed");
    if (l.strictMode = C.strictMode === void 0 || C.strictMode, l.allowMultipleCallInstances = (d = C.allowMultipleCallInstances) !== null && d !== void 0 && d, Object.keys(Ge).length && (l._logDuplicateInstanceAttempt(), !l.allowMultipleCallInstances)) {
      if (l.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
      console.warn("Using strictMode: false to allow multiple call instances is now deprecated. Set `allowMultipleCallInstances: true`");
    }
    if (window._daily || (window._daily = { pendings: [], instances: {} }), l.callClientId = Pn(), Ge[(E = l).callClientId] = E, window._daily.instances[l.callClientId] = {}, l._sharedTracks = {}, window._daily.instances[l.callClientId].tracks = l._sharedTracks, C.dailyJsVersion = t.version(), C.aboutClient !== void 0 && (C.aboutClient = Uo(C.aboutClient)), l._iframe = i, l._callObjectMode = C.layout === "none" && !l._iframe, l._preloadCache = { subscribeToTracksAutomatically: !0, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }, C.showLocalVideo !== void 0 ? l._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : l._showLocalVideo = !!C.showLocalVideo : l._showLocalVideo = !0, C.showParticipantsBar !== void 0 ? l._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : l._showParticipantsBar = !!C.showParticipantsBar : l._showParticipantsBar = !0, C.customIntegrations !== void 0 ? l._callObjectMode ? console.error("customIntegrations is not available in call object mode") : l._customIntegrations = C.customIntegrations : l._customIntegrations = {}, C.customTrayButtons !== void 0 ? l._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : l._customTrayButtons = C.customTrayButtons : l._customTrayButtons = {}, C.activeSpeakerMode !== void 0 ? l._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : l._activeSpeakerMode = !!C.activeSpeakerMode : l._activeSpeakerMode = !1, C.receiveSettings) if (l._callObjectMode) {
      var A = C.receiveSettings;
      A.initialReceiveBitrate;
      var B = ln(A, Yl);
      l._receiveSettings = B;
    } else console.error("receiveSettings is only available in call object mode");
    else l._receiveSettings = {};
    if (l.validateProperties(C), l.properties = I({}, C), l.properties.aboutClient !== void 0 && (l.properties.aboutClient = Uo(l.properties.aboutClient)), l._inputSettings || (l._inputSettings = {}), l._callObjectLoader = l._callObjectMode ? new Pl(l.callClientId) : null, l._callState = no, l._isPreparingToJoin = !1, l._accessState = { access: zn }, l._meetingSessionSummary = {}, l._finalSummaryOfPrevSession = {}, l._meetingSessionState = nr(No, l._callObjectMode), l._nativeInCallAudioMode = jo, l._participants = {}, l._isScreenSharing = !1, l._participantCounts = Fo, l._rmpPlayerState = {}, l._waitingParticipants = {}, l._network = { threshold: "good", quality: 100, networkState: "unknown", stats: {} }, l._activeSpeaker = {}, l._localAudioLevel = 0, l._isLocalAudioLevelObserverRunning = !1, l._remoteParticipantsAudioLevel = {}, l._isRemoteParticipantsAudioLevelObserverRunning = !1, l._maxAppMessageSize = Hn, l._messageChannel = V() ? new Tl() : new Cl(), l._iframe && (l._iframe.requestFullscreen ? l._iframe.addEventListener("fullscreenchange", function() {
      document.fullscreenElement === l._iframe ? (l.emitDailyJSEvent({ action: tn }), l.sendMessageToCallMachine({ action: tn })) : (l.emitDailyJSEvent({ action: nn }), l.sendMessageToCallMachine({ action: nn }));
    }) : l._iframe.webkitRequestFullscreen && l._iframe.addEventListener("webkitfullscreenchange", function() {
      document.webkitFullscreenElement === l._iframe ? (l.emitDailyJSEvent({ action: tn }), l.sendMessageToCallMachine({ action: tn })) : (l.emitDailyJSEvent({ action: nn }), l.sendMessageToCallMachine({ action: nn }));
    })), V()) {
      var U = l.nativeUtils();
      U.addAudioFocusChangeListener && U.removeAudioFocusChangeListener && U.addAppStateChangeListener && U.removeAppStateChangeListener && U.addSystemScreenCaptureStopListener && U.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), l._hasNativeAudioFocus = !0, U.addAudioFocusChangeListener(l.handleNativeAudioFocusChange), U.addAppStateChangeListener(l.handleNativeAppStateChange), U.addSystemScreenCaptureStopListener(l.handleNativeSystemScreenCaptureStop);
    }
    return l._callObjectMode && l.startListeningForDeviceChanges(), l._messageChannel.addListenerForMessagesFromCallMachine(l.handleMessageFromCallMachine, l.callClientId, l), l;
  }
  return On(t, Ht), fe(t, [{ key: "destroy", value: (Xr = D(function* () {
    var i;
    try {
      yield this.leave();
    } catch {
    }
    var d = this._iframe;
    if (d) {
      var l = d.parentElement;
      l && l.removeChild(d);
    }
    if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), V()) {
      var h = this.nativeUtils();
      h.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), h.removeAppStateChangeListener(this.handleNativeAppStateChange), h.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
    }
    this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0, this.emitDailyJSEvent({ action: "call-instance-destroyed" }), delete Ge[this.callClientId], !((i = window) === null || i === void 0 || (i = i._daily) === null || i === void 0) && i.instances && delete window._daily.instances[this.callClientId], this.strictMode && (this.callClientId = void 0);
  }), function() {
    return Xr.apply(this, arguments);
  }) }, { key: "isDestroyed", value: function() {
    return !!this._destroyed;
  } }, { key: "loadCss", value: function(i) {
    var d = i.bodyClass, l = i.cssFile, h = i.cssText;
    return $(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(l), bodyClass: d, cssText: h }), this;
  } }, { key: "iframe", value: function() {
    return $(), this._iframe;
  } }, { key: "meetingState", value: function() {
    return this._callState;
  } }, { key: "accessState", value: function() {
    return le(this._callObjectMode, "accessState()"), this._accessState;
  } }, { key: "participants", value: function() {
    return this._participants;
  } }, { key: "participantCounts", value: function() {
    return this._participantCounts;
  } }, { key: "waitingParticipants", value: function() {
    return le(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
  } }, { key: "validateParticipantProperties", value: function(i, d) {
    for (var l in d) {
      if (!sn[l]) throw new Error("unrecognized updateParticipant property ".concat(l));
      if (sn[l].validate && !sn[l].validate(d[l], this, this._participants[i])) throw new Error(sn[l].help);
    }
  } }, { key: "updateParticipant", value: function(i, d) {
    return this._participants.local && this._participants.local.session_id === i && (i = "local"), i && d && (this.validateParticipantProperties(i, d), this.sendMessageToCallMachine({ action: "update-participant", id: i, properties: d })), this;
  } }, { key: "updateParticipants", value: function(i) {
    var d = this._participants.local && this._participants.local.session_id;
    for (var l in i) l === d && (l = "local"), l && i[l] && this.validateParticipantProperties(l, i[l]);
    return this.sendMessageToCallMachine({ action: "update-participants", participants: i }), this;
  } }, { key: "updateWaitingParticipant", value: (Kr = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (le(this._callObjectMode, "updateWaitingParticipant()"), z(this._callState, "updateWaitingParticipant()"), typeof d != "string" || R(l) !== "object") throw new Error("updateWaitingParticipant() must take an id string and a updates object");
    return new Promise(function(h, f) {
      i.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: d, updates: l }, function(k) {
        k.error && f(k.error), k.id || f(new Error("unknown error in updateWaitingParticipant()")), h({ id: k.id });
      });
    });
  }), function() {
    return Kr.apply(this, arguments);
  }) }, { key: "updateWaitingParticipants", value: (Qr = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "updateWaitingParticipants()"), z(this._callState, "updateWaitingParticipants()"), R(d) !== "object") throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
    return new Promise(function(l, h) {
      i.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: d }, function(f) {
        f.error && h(f.error), f.ids || h(new Error("unknown error in updateWaitingParticipants()")), l({ ids: f.ids });
      });
    });
  }), function() {
    return Qr.apply(this, arguments);
  }) }, { key: "requestAccess", value: (Yr = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = d.access, h = l === void 0 ? { level: wc } : l, f = d.name, k = f === void 0 ? "" : f;
    return le(this._callObjectMode, "requestAccess()"), z(this._callState, "requestAccess()"), new Promise(function(E, C) {
      i.sendMessageToCallMachine({ action: "daily-method-request-access", access: h, name: k }, function(A) {
        A.error && C(A.error), A.access || C(new Error("unknown error in requestAccess()")), E({ access: A.access, granted: A.granted });
      });
    });
  }), function() {
    return Yr.apply(this, arguments);
  }) }, { key: "localAudio", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
  } }, { key: "localVideo", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
  } }, { key: "setLocalAudio", value: function(i) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return "forceDiscardTrack" in d && (V() ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), d = {}) : i && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), d = {})), this.sendMessageToCallMachine({ action: "local-audio", state: i, options: d }), this;
  } }, { key: "localScreenAudio", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenAudio.state) : null;
  } }, { key: "localScreenVideo", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenVideo.state) : null;
  } }, { key: "updateScreenShare", value: function(i) {
    if (this._isScreenSharing) return this.sendMessageToCallMachine({ action: "local-screen-update", options: i }), this;
    console.warn("There is no screen share in progress. Try calling startScreenShare first.");
  } }, { key: "setLocalVideo", value: function(i) {
    return this.sendMessageToCallMachine({ action: "local-video", state: i }), this;
  } }, { key: "_setAllowLocalAudio", value: function(i) {
    if (this._preloadCache.allowLocalAudio = i, this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-allow-local-audio", state: i }), this;
  } }, { key: "_setAllowLocalVideo", value: function(i) {
    if (this._preloadCache.allowLocalVideo = i, this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-allow-local-video", state: i }), this;
  } }, { key: "getReceiveSettings", value: (Gr = D(function* (i) {
    var d = this, l = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues, h = l !== void 0 && l;
    if (le(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized) return this._receiveSettings;
    switch (R(i)) {
      case "string":
        return new Promise(function(f) {
          d.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: i, showInheritedValues: h }, function(k) {
            f(k.receiveSettings);
          });
        });
      case "undefined":
        return this._receiveSettings;
      default:
        throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
    }
  }), function(i) {
    return Gr.apply(this, arguments);
  }) }, { key: "updateReceiveSettings", value: (Hr = D(function* (i) {
    var d = this;
    if (le(this._callObjectMode, "updateReceiveSettings()"), i?.initialReceiveBitrate !== void 0) throw new Error("initialReceiveBitrate can only be set in the receiveSettings config property, when joining");
    if (!Ns(i, { allowAllParticipantsKey: !0 })) throw new Error(Rs({ allowAllParticipantsKey: !0 }));
    return z(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(l) {
      d.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: i }, function(h) {
        l({ receiveSettings: h.receiveSettings });
      });
    });
  }), function(i) {
    return Hr.apply(this, arguments);
  }) }, { key: "_prepInputSettingsForSharing", value: function(i, d) {
    if (i) {
      var l = {};
      if (i.audio) {
        var h, f, k;
        i.audio.settings && (!Object.keys(i.audio.settings).length && d || (l.audio = { settings: I({}, i.audio.settings) })), d && (h = l.audio) !== null && h !== void 0 && (h = h.settings) !== null && h !== void 0 && h.customTrack && (l.audio.settings = { customTrack: this._sharedTracks.audioTrack });
        var E = ((f = i.audio.processor) === null || f === void 0 ? void 0 : f.type) === "none" && ((k = i.audio.processor) === null || k === void 0 ? void 0 : k._isDefaultWhenNone);
        if (i.audio.processor && !E) {
          var C = I({}, i.audio.processor);
          delete C._isDefaultWhenNone, l.audio = I(I({}, l.audio), {}, { processor: C });
        }
      }
      if (i.video) {
        var A, B, U;
        i.video.settings && (!Object.keys(i.video.settings).length && d || (l.video = { settings: I({}, i.video.settings) })), d && (A = l.video) !== null && A !== void 0 && (A = A.settings) !== null && A !== void 0 && A.customTrack && (l.video.settings = { customTrack: this._sharedTracks.videoTrack });
        var G = ((B = i.video.processor) === null || B === void 0 ? void 0 : B.type) === "none" && ((U = i.video.processor) === null || U === void 0 ? void 0 : U._isDefaultWhenNone);
        if (i.video.processor && !G) {
          var oe = I({}, i.video.processor);
          delete oe._isDefaultWhenNone, l.video = I(I({}, l.video), {}, { processor: oe });
        }
      }
      return l;
    }
  } }, { key: "getInputSettings", value: function() {
    var i = this;
    return $(), new Promise(function(d) {
      d(i._getInputSettings());
    });
  } }, { key: "_getInputSettings", value: function() {
    var i, d, l, h, f, k, E = { processor: { type: "none", _isDefaultWhenNone: !0 } };
    this._inputSettings ? (i = ((l = this._inputSettings) === null || l === void 0 ? void 0 : l.video) || E, d = ((h = this._inputSettings) === null || h === void 0 ? void 0 : h.audio) || E) : (i = ((f = this._preloadCache) === null || f === void 0 || (f = f.inputSettings) === null || f === void 0 ? void 0 : f.video) || E, d = ((k = this._preloadCache) === null || k === void 0 || (k = k.inputSettings) === null || k === void 0 ? void 0 : k.audio) || E);
    var C = { audio: d, video: i };
    return this._prepInputSettingsForSharing(C, !0);
  } }, { key: "_updatePreloadCacheInputSettings", value: function(i, d) {
    var l = this._inputSettings || {}, h = {};
    if (i.video) {
      var f, k, E;
      h.video = {}, i.video.settings ? (h.video.settings = {}, d || i.video.settings.customTrack || (E = l.video) === null || E === void 0 || !E.settings ? h.video.settings = i.video.settings : h.video.settings = I(I({}, l.video.settings), i.video.settings), Object.keys(h.video.settings).length || delete h.video.settings) : (f = l.video) !== null && f !== void 0 && f.settings && (h.video.settings = l.video.settings), i.video.processor ? h.video.processor = i.video.processor : (k = l.video) !== null && k !== void 0 && k.processor && (h.video.processor = l.video.processor);
    } else l.video && (h.video = l.video);
    if (i.audio) {
      var C, A, B;
      h.audio = {}, i.audio.settings ? (h.audio.settings = {}, d || i.audio.settings.customTrack || (B = l.audio) === null || B === void 0 || !B.settings ? h.audio.settings = i.audio.settings : h.audio.settings = I(I({}, l.audio.settings), i.audio.settings), Object.keys(h.audio.settings).length || delete h.audio.settings) : (C = l.audio) !== null && C !== void 0 && C.settings && (h.audio.settings = l.audio.settings), i.audio.processor ? h.audio.processor = i.audio.processor : (A = l.audio) !== null && A !== void 0 && A.processor && (h.audio.processor = l.audio.processor);
    } else l.audio && (h.audio = l.audio);
    this._maybeUpdateInputSettings(h);
  } }, { key: "_devicesFromInputSettings", value: function(i) {
    var d, l, h = (i == null || (d = i.video) === null || d === void 0 || (d = d.settings) === null || d === void 0 ? void 0 : d.deviceId) || null, f = (i == null || (l = i.audio) === null || l === void 0 || (l = l.settings) === null || l === void 0 ? void 0 : l.deviceId) || null, k = this._preloadCache.outputDeviceId || null;
    return { camera: h ? { deviceId: h } : {}, mic: f ? { deviceId: f } : {}, speaker: k ? { deviceId: k } : {} };
  } }, { key: "updateInputSettings", value: (Vt = D(function* (i) {
    var d = this;
    return $(), Fs(i) ? i.video || i.audio ? (Bs(i, this.properties.dailyConfig, this._sharedTracks), this._callObjectMode && !this._callMachineInitialized ? (this._updatePreloadCacheInputSettings(i, !0), this._getInputSettings()) : new Promise(function(l, h) {
      d.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: i }, function(f) {
        if (f.error) h(f.error);
        else {
          if (f.returnPreloadCache) return d._updatePreloadCacheInputSettings(i, !0), void l(d._getInputSettings());
          d._maybeUpdateInputSettings(f.inputSettings), l(d._prepInputSettingsForSharing(f.inputSettings, !0));
        }
      });
    })) : this._getInputSettings() : (console.error(Or()), Promise.reject(Or()));
  }), function(i) {
    return Vt.apply(this, arguments);
  }) }, { key: "setBandwidth", value: function(i) {
    var d = i.kbs, l = i.trackConstraints;
    if ($(), this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: d, trackConstraints: l }), this;
  } }, { key: "getDailyLang", value: function() {
    var i = this;
    if ($(), this._callMachineInitialized) return new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-daily-lang" }, function(l) {
        delete l.action, delete l.callbackStamp, d(l);
      });
    });
  } }, { key: "setDailyLang", value: function(i) {
    return $(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: i }), this;
  } }, { key: "setProxyUrl", value: function(i) {
    return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: i }), this;
  } }, { key: "setIceConfig", value: function(i) {
    return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: i }), this;
  } }, { key: "meetingSessionSummary", value: function() {
    return [Fe, He].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
  } }, { key: "getMeetingSession", value: (Et = D(function* () {
    var i = this;
    return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), z(this._callState, "getMeetingSession()"), new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-meeting-session" }, function(l) {
        delete l.action, delete l.callbackStamp, d(l);
      });
    });
  }), function() {
    return Et.apply(this, arguments);
  }) }, { key: "meetingSessionState", value: function() {
    return z(this._callState, "meetingSessionState"), this._meetingSessionState;
  } }, { key: "setMeetingSessionData", value: function(i) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace";
    le(this._callObjectMode, "setMeetingSessionData()"), z(this._callState, "setMeetingSessionData");
    try {
      (function(l, h) {
        new Ol({ data: l, mergeStrategy: h });
      })(i, d);
    } catch (l) {
      throw console.error(l), l;
    }
    try {
      this.sendMessageToCallMachine({ action: "set-session-data", data: i, mergeStrategy: d });
    } catch (l) {
      throw new Error("Error setting meeting session data: ".concat(l));
    }
  } }, { key: "setUserName", value: function(i, d) {
    var l = this;
    return this.properties.userName = i, new Promise(function(h) {
      l.sendMessageToCallMachine({ action: "set-user-name", name: i ?? "", thisMeetingOnly: V() || !!d && !!d.thisMeetingOnly }, function(f) {
        delete f.action, delete f.callbackStamp, h(f);
      });
    });
  } }, { key: "setUserData", value: (ie = D(function* (i) {
    var d = this;
    try {
      Ds(i);
    } catch (l) {
      throw console.error(l), l;
    }
    if (this.properties.userData = i, this._callMachineInitialized) return new Promise(function(l) {
      try {
        d.sendMessageToCallMachine({ action: "set-user-data", userData: i }, function(h) {
          delete h.action, delete h.callbackStamp, l(h);
        });
      } catch (h) {
        throw new Error("Error setting user data: ".concat(h));
      }
    });
  }), function(i) {
    return ie.apply(this, arguments);
  }) }, { key: "validateAudioLevelInterval", value: function(i) {
    if (i && (i < 100 || typeof i != "number")) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
  } }, { key: "startLocalAudioLevelObserver", value: function(i) {
    var d = this;
    if (typeof AudioWorkletNode > "u" && !V()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
    if (this.validateAudioLevelInterval(i), this._callMachineInitialized) return this._isLocalAudioLevelObserverRunning = !0, new Promise(function(l, h) {
      d.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: i }, function(f) {
        d._isLocalAudioLevelObserverRunning = !f.error, f.error ? h({ error: f.error }) : l();
      });
    });
    this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: i };
  } }, { key: "isLocalAudioLevelObserverRunning", value: function() {
    return this._isLocalAudioLevelObserverRunning;
  } }, { key: "stopLocalAudioLevelObserver", value: function() {
    this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
  } }, { key: "startRemoteParticipantsAudioLevelObserver", value: function(i) {
    var d = this;
    if (this.validateAudioLevelInterval(i), this._callMachineInitialized) return this._isRemoteParticipantsAudioLevelObserverRunning = !0, new Promise(function(l, h) {
      d.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: i }, function(f) {
        d._isRemoteParticipantsAudioLevelObserverRunning = !f.error, f.error ? h({ error: f.error }) : l();
      });
    });
    this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: i };
  } }, { key: "isRemoteParticipantsAudioLevelObserverRunning", value: function() {
    return this._isRemoteParticipantsAudioLevelObserverRunning;
  } }, { key: "stopRemoteParticipantsAudioLevelObserver", value: function() {
    this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
  } }, { key: "startCamera", value: (H = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "startCamera()"), er(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), this.needsLoad()) try {
      yield this.load(d);
    } catch (l) {
      return Promise.reject(l);
    }
    else {
      if (this._didPreAuth) {
        if (d.url && d.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
        if (d.token && d.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
      }
      this.validateProperties(d), this.properties = I(I({}, this.properties), d);
    }
    return new Promise(function(l, h) {
      i._preloadCache.inputSettings = i._prepInputSettingsForSharing(i._inputSettings, !1), i.sendMessageToCallMachine({ action: "start-camera", properties: dt(i.properties, i.callClientId), preloadCache: dt(i._preloadCache, i.callClientId) }, function(f) {
        f.error ? h(f.error) : l({ camera: f.camera, mic: f.mic, speaker: f.speaker });
      });
    });
  }), function() {
    return H.apply(this, arguments);
  }) }, { key: "validateCustomTrack", value: function(i, d, l) {
    if (l && l.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
    if (d && d !== "music" && d !== "speech" && !(d instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
    if (l && ["audio", "video", "cam-audio", "cam-video", "screenVideo", "screenAudio", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(l)) throw new Error("Custom track `trackName` must not match a track name already used by daily: audio, video, cam-audio, cam-video, screenVideo, screenAudio, screen-video, screen-audio, rmpAudio, rmpVideo, customVideoDefaults");
    if (!(i instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
  } }, { key: "startCustomTrack", value: function() {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { track, mode, trackName, ignoreAudioLevel };
    return $(), le(this._callObjectMode, "startCustomTrack()"), z(this._callState, "startCustomTrack()"), this.validateCustomTrack(d.track, d.mode, d.trackName), new Promise(function(l, h) {
      i._sharedTracks.customTrack = d.track, d.track = je, i.sendMessageToCallMachine({ action: "start-custom-track", properties: d }, function(f) {
        f.error ? h({ error: f.error }) : l(f.mediaTag);
      });
    });
  } }, { key: "stopCustomTrack", value: function(i) {
    var d = this;
    return $(), z(this._callState, "stopCustomTrack()"), new Promise(function(l) {
      d.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: i }, function(h) {
        l(h.mediaTag);
      });
    });
  } }, { key: "setCamera", value: function(i) {
    var d = this;
    return Tt(), an(this._callMachineInitialized, "setCamera()"), new Promise(function(l) {
      d.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: i }, function(h) {
        l({ device: h.device });
      });
    });
  } }, { key: "setAudioDevice", value: ($t = D(function* (i) {
    return Tt(), this.nativeUtils().setAudioDevice(i), { deviceId: yield this.nativeUtils().getAudioDevice() };
  }), function(i) {
    return $t.apply(this, arguments);
  }) }, { key: "cycleCamera", value: function() {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new Promise(function(l) {
      i.sendMessageToCallMachine({ action: "cycle-camera", properties: d }, function(h) {
        l({ device: h.device });
      });
    });
  } }, { key: "cycleMic", value: function() {
    var i = this;
    return $(), new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "cycle-mic" }, function(l) {
        d({ device: l.device });
      });
    });
  } }, { key: "getCameraFacingMode", value: function() {
    var i = this;
    return Tt(), new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function(l) {
        d(l.facingMode);
      });
    });
  } }, { key: "setInputDevicesAsync", value: (Mt = D(function* (i) {
    var d = this, l = i.audioDeviceId, h = i.videoDeviceId, f = i.audioSource, k = i.videoSource;
    if ($(), f !== void 0 && (l = f), k !== void 0 && (h = k), typeof l == "boolean" && (this._setAllowLocalAudio(l), l = void 0), typeof h == "boolean" && (this._setAllowLocalVideo(h), h = void 0), !l && !h) return yield this.getInputDevices();
    var E = {};
    return l && (l instanceof MediaStreamTrack ? (this._sharedTracks.audioTrack = l, l = je, E.audio = { settings: { customTrack: l } }) : (delete this._sharedTracks.audioTrack, E.audio = { settings: { deviceId: l } })), h && (h instanceof MediaStreamTrack ? (this._sharedTracks.videoTrack = h, h = je, E.video = { settings: { customTrack: h } }) : (delete this._sharedTracks.videoTrack, E.video = { settings: { deviceId: h } })), this._callObjectMode && this.needsLoad() ? (this._updatePreloadCacheInputSettings(E, !1), this._devicesFromInputSettings(this._inputSettings)) : new Promise(function(C) {
      d.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: l, videoDeviceId: h }, function(A) {
        if (delete A.action, delete A.callbackStamp, A.returnPreloadCache) return d._updatePreloadCacheInputSettings(E, !1), void C(d._devicesFromInputSettings(d._inputSettings));
        C(A);
      });
    });
  }), function(i) {
    return Mt.apply(this, arguments);
  }) }, { key: "setOutputDeviceAsync", value: (Pe = D(function* (i) {
    var d = this, l = i.outputDeviceId;
    if ($(), !l || typeof l != "string") throw new Error("outputDeviceId must be provided and must be a valid device id");
    return this._preloadCache.outputDeviceId = l, this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(h, f) {
      d.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: l }, function(k) {
        if (delete k.action, delete k.callbackStamp, k.error) {
          var E = new Error(k.error.message);
          return E.type = k.error.type, void f(E);
        }
        k.returnPreloadCache ? h(d._devicesFromInputSettings(d._inputSettings)) : h(k);
      });
    });
  }), function(i) {
    return Pe.apply(this, arguments);
  }) }, { key: "getInputDevices", value: (Ne = D(function* () {
    var i = this;
    return this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-input-devices" }, function(l) {
        l.returnPreloadCache ? d(i._devicesFromInputSettings(i._inputSettings)) : d({ camera: l.camera, mic: l.mic, speaker: l.speaker });
      });
    });
  }), function() {
    return Ne.apply(this, arguments);
  }) }, { key: "nativeInCallAudioMode", value: function() {
    return Tt(), this._nativeInCallAudioMode;
  } }, { key: "setNativeInCallAudioMode", value: function(i) {
    if (Tt(), [jo, Xl].includes(i)) {
      if (i !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = i, !this.disableReactNativeAutoDeviceManagement("audio") && hn(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
    } else console.error("invalid in-call audio mode specified: ", i);
  } }, { key: "preAuth", value: (_e = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "preAuth()"), er(this._callState, this._isPreparingToJoin, "preAuth()"), this.needsLoad() && (yield this.load(d)), !d.url) throw new Error("preAuth() requires at least a url to be provided");
    return this.validateProperties(d), this.properties = I(I({}, this.properties), d), new Promise(function(l, h) {
      i._preloadCache.inputSettings = i._prepInputSettingsForSharing(i._inputSettings, !1), i.sendMessageToCallMachine({ action: "daily-method-preauth", properties: dt(i.properties, i.callClientId), preloadCache: dt(i._preloadCache, i.callClientId) }, function(f) {
        return f.error ? h(f.error) : f.access ? (i._didPreAuth = !0, void l({ access: f.access })) : h(new Error("unknown error in preAuth()"));
      });
    });
  }), function() {
    return _e.apply(this, arguments);
  }) }, { key: "load", value: (ee = D(function* (i) {
    var d = this;
    if (this.needsLoad()) {
      if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
      if (i && (this.validateProperties(i), this.properties = I(I({}, this.properties), i)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
      if (this._updateCallState(ro), this.emitDailyJSEvent({ action: Oc }), this._callObjectMode) return new Promise(function(h, f) {
        d._callObjectLoader.cancel();
        var k = Date.now();
        d._callObjectLoader.load(d.properties.dailyConfig, function(E) {
          d._bundleLoadTime = E ? "no-op" : Date.now() - k, d._updateCallState(io), E && d.emitDailyJSEvent({ action: so }), h();
        }, function(E, C) {
          d.emitDailyJSEvent({ action: Pc }), C || (d._handleFatalError({ action: Wn, errorMsg: E.msg, error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: E, bundleUrl: mn(d.properties.dailyConfig) } } }), f(E.msg));
        });
      });
      var l = sa(this.assembleMeetingUrl(), this.properties.dailyConfig);
      return new Promise(function(h, f) {
        var k = 0, E = function() {
          if (k >= l.length) {
            var C = "Timed out attempting to load the call. Please check your network connection and try again.";
            return d._iframe.srcdoc = (A = C, `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  html { font-size: 12px; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #1f2d3d;
    color: #fff;
    font-family: GraphikRegular, "Helvetica Neue", Helvetica, Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .card {
    background: #121a24;
    border: 1px solid #2b3f56;
    border-radius: 4px;
    padding: 32px 40px;
    width: 100%;
    max-width: 65ch;
    text-align: center;
  }
  h1 { color: #f63135; font-size: 1.333rem; font-weight: 600; margin-bottom: 12px; }
  p { font-size: 1rem; line-height: 1.5; color: rgba(255,255,255,0.9); }
</style>
</head>
<body>
<div class="card"><h1>`.concat("Failed to load", "</h1><p>").concat(A, `</p></div>
</body>
</html>`)), d._handleFatalError({ action: Wn, errorMsg: C, error: { type: "connection-error", msg: C, details: { on: "load", sourceError: { msg: "Timed out (>".concat(25e3, " ms) when loading call frame"), type: "timeout" }, candidateCount: l.length } }, preserveIframe: !0 }), void f(C);
          }
          var A, B = l[k++];
          d._iframe.src = es(B, d.properties.dailyConfig);
          var U = setTimeout(function() {
            d._loadedCallback && (d._loadedCallback = null, E());
          }, 25e3);
          d._loadedCallback = function(G) {
            clearTimeout(U), d._callState !== He ? (Zo(Ar(B)), d._updateCallState(io), (d.properties.cssFile || d.properties.cssText) && d.loadCss(d.properties), h()) : f(G);
          };
        };
        E();
      });
    }
  }), function(i) {
    return ee.apply(this, arguments);
  }) }, { key: "join", value: (J = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this._testCallInProgress && this.stopTestCallQuality(), !d.url && !this.properties.url) {
      var l = "No room URL has been provided";
      return console.error(l), Promise.reject(new Error(l));
    }
    var h = !1;
    if (this.needsLoad()) {
      this.updateIsPreparingToJoin(!0);
      try {
        yield this.load(d);
      } catch (f) {
        return this.updateIsPreparingToJoin(!1), Promise.reject(f);
      }
    } else {
      if (h = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
        if (d.url && d.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
        if (d.token && d.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
      }
      if (d.url && !this._callObjectMode && d.url && d.url !== this.properties.url) return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(d.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
      this.validateProperties(d), this.properties = I(I({}, this.properties), d);
    }
    return d.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!d.showLocalVideo), d.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!d.showParticipantsBar), this._callState === Qe || this._callState === _r ? (console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1)) : (this._updateCallState(_r, !1), this.emitDailyJSEvent({ action: Ic }), this._preloadCache.inputSettings = this._prepInputSettingsForSharing(this._inputSettings || {}, !1), this.sendMessageToCallMachine({ action: "join-meeting", properties: dt(this.properties, this.callClientId), preloadCache: dt(this._preloadCache, this.callClientId) }, function(f) {
      f.error && i._joinedCallback && (i._joinedCallback(null, f.error), i._joinedCallback = null);
    }), new Promise(function(f, k) {
      i._joinedCallback = function(E, C) {
        if (i._callState !== He) {
          if (C) return i._updateCallState(Fe), void k(C);
          if (i._updateCallState(Qe), E) for (var A in E) {
            if (i._callObjectMode) {
              var B = i._callMachine().store;
              ko(E[A], B), So(E[A], B), Mo(E[A], i._participants[A], B);
            }
            i._participants[A] = I({}, E[A]), i.toggleParticipantAudioBasedOnNativeAudioFocus();
          }
          h && i.loadCss(i.properties), f(E);
        } else k(C);
      };
    }));
  }), function() {
    return J.apply(this, arguments);
  }) }, { key: "leave", value: (N = D(function* () {
    var i = this;
    return this._testCallInProgress && this.stopTestCallQuality(), new Promise(function(d) {
      i._callState === Fe || i._callState === He ? d() : i._callObjectLoader && !i._callObjectLoader.loaded ? (i._callObjectLoader.cancel(), i._updateCallState(Fe), i.resetMeetingDependentVars(), i.emitDailyJSEvent({ action: Fe }), d()) : (i._resolveLeave = d, i.sendMessageToCallMachine({ action: "leave-meeting" }));
    });
  }), function() {
    return N.apply(this, arguments);
  }) }, { key: "startScreenShare", value: (O = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (d.mediaStream && le(this._callObjectMode, "startScreenShare() with `mediaStream`"), an(this._callMachineInitialized, "startScreenShare()"), d.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", d.screenVideoSendSettings), d.mediaStream && (this._sharedTracks.screenMediaStream = d.mediaStream, d.mediaStream = je), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS) {
      var l = this.nativeUtils();
      if (yield l.isScreenBeingCaptured()) return void this.emitDailyJSEvent({ action: uo, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
      l.setSystemScreenCaptureStartCallback(function() {
        l.setSystemScreenCaptureStartCallback(null), i.sendMessageToCallMachine({ action: ho, captureOptions: d });
      }), l.presentSystemScreenCapturePrompt();
    } else this.sendMessageToCallMachine({ action: ho, captureOptions: d });
  }), function() {
    return O.apply(this, arguments);
  }) }, { key: "stopScreenShare", value: function() {
    an(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
  } }, { key: "startRecording", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = i.type;
    if (d && d !== "cloud" && d !== "cloud-audio-only" && d !== "raw-tracks" && d !== "local") throw new Error("invalid type: ".concat(d, ", allowed values 'cloud', 'cloud-audio-only', 'raw-tracks', or 'local'"));
    this.sendMessageToCallMachine(I({ action: "local-recording-start" }, i));
  } }, { key: "updateRecording", value: function(i) {
    var d = i.layout, l = d === void 0 ? { preset: "default" } : d, h = i.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: l, instanceId: h });
  } }, { key: "stopRecording", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(I({ action: "local-recording-stop" }, i));
  } }, { key: "startLiveStreaming", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(I({ action: "daily-method-start-live-streaming" }, i));
  } }, { key: "updateLiveStreaming", value: function(i) {
    var d = i.layout, l = d === void 0 ? { preset: "default" } : d, h = i.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: l, instanceId: h });
  } }, { key: "addLiveStreamingEndpoints", value: function(i) {
    var d = i.endpoints, l = i.instanceId;
    this.sendMessageToCallMachine({ action: fo, endpointsOp: _l, endpoints: d, instanceId: l });
  } }, { key: "removeLiveStreamingEndpoints", value: function(i) {
    var d = i.endpoints, l = i.instanceId;
    this.sendMessageToCallMachine({ action: fo, endpointsOp: wl, endpoints: d, instanceId: l });
  } }, { key: "stopLiveStreaming", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(I({ action: "daily-method-stop-live-streaming" }, i));
  } }, { key: "validateDailyConfig", value: function(i) {
    i.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(i.camSimulcastEncodings)), i.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."), ks() && i.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
  } }, { key: "validateSimulcastEncodings", value: function(i) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, l = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    if (i) {
      if (!(i instanceof Array || Array.isArray(i))) throw new Error("encodings must be an Array");
      if (!Wo(i.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
      for (var h = 0; h < i.length; h++) {
        var f = i[h];
        for (var k in this._validateEncodingLayerHasValidProperties(f), f) if (Zn.includes(k)) {
          if (typeof f[k] != "number") throw new Error("".concat(k, " must be a number"));
          if (d) {
            var E = d[k], C = E.min, A = E.max;
            if (!Wo(f[k], C, A)) throw new Error("".concat(k, " value not in range. valid range: ").concat(C, " to ").concat(A));
          }
        } else if (!["active", "scalabilityMode"].includes(k)) throw new Error("Invalid key ".concat(k, ", valid keys are:") + Object.values(Zn));
        if (l && !f.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
      }
    }
  } }, { key: "startRemoteMediaPlayer", value: (x = D(function* (i) {
    var d = this, l = i.url, h = i.settings, f = h === void 0 ? { state: wr.PLAY } : h;
    try {
      (function(k) {
        if (typeof k != "string") throw new Error('url parameter must be "string" type');
      })(l), zo(f), (function(k) {
        for (var E in k) if (!Bo.includes(E)) throw new Error("Invalid key ".concat(E, ", valid keys are: ").concat(Bo));
        k.simulcastEncodings && this.validateSimulcastEncodings(k.simulcastEncodings, js, !0);
      })(f);
    } catch (k) {
      throw console.error("invalid argument Error: ".concat(k)), console.error(`startRemoteMediaPlayer arguments must be of the form:
  { url: "playback url",
  settings?:
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`), k;
    }
    return new Promise(function(k, E) {
      d.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: l, settings: f }, function(C) {
        C.error ? E({ error: C.error, errorMsg: C.errorMsg }) : k({ session_id: C.session_id, remoteMediaPlayerState: { state: C.state, settings: C.settings } });
      });
    });
  }), function(i) {
    return x.apply(this, arguments);
  }) }, { key: "stopRemoteMediaPlayer", value: (P = D(function* (i) {
    var d = this;
    if (typeof i != "string") throw new Error(" remotePlayerID must be of type string");
    return new Promise(function(l, h) {
      d.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: i }, function(f) {
        f.error ? h({ error: f.error, errorMsg: f.errorMsg }) : l();
      });
    });
  }), function(i) {
    return P.apply(this, arguments);
  }) }, { key: "updateRemoteMediaPlayer", value: (M = D(function* (i) {
    var d = this, l = i.session_id, h = i.settings;
    try {
      zo(h);
    } catch (f) {
      throw console.error("invalid argument Error: ".concat(f)), console.error(`updateRemoteMediaPlayer arguments must be of the form:
  session_id: "participant session",
  { settings?: {state: "play"|"pause"} }`), f;
    }
    return new Promise(function(f, k) {
      d.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: l, settings: h }, function(E) {
        E.error ? k({ error: E.error, errorMsg: E.errorMsg }) : f({ session_id: E.session_id, remoteMediaPlayerState: { state: E.state, settings: E.settings } });
      });
    });
  }), function(i) {
    return M.apply(this, arguments);
  }) }, { key: "startTranscription", value: function(i) {
    z(this._callState, "startTranscription()"), this.sendMessageToCallMachine(I({ action: "daily-method-start-transcription" }, i));
  } }, { key: "updateTranscription", value: function(i) {
    if (z(this._callState, "updateTranscription()"), !i) throw new Error("updateTranscription Error: options is mandatory");
    if (R(i) !== "object") throw new Error("updateTranscription Error: options must be object type");
    if (i.participants && !Array.isArray(i.participants)) throw new Error("updateTranscription Error: participants must be an array");
    this.sendMessageToCallMachine(I({ action: "daily-method-update-transcription" }, i));
  } }, { key: "stopTranscription", value: function(i) {
    if (z(this._callState, "stopTranscription()"), i && R(i) !== "object") throw new Error("stopTranscription Error: options must be object type");
    if (i && !i.instanceId) throw new Error('"instanceId" not provided');
    this.sendMessageToCallMachine(I({ action: "daily-method-stop-transcription" }, i));
  } }, { key: "startDialOut", value: (b = D(function* (i) {
    var d = this;
    z(this._callState, "startDialOut()");
    var l = function(C) {
      if (C) {
        if (!Array.isArray(C)) throw new Error("Error starting dial out: audio codec must be an array");
        if (C.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
        C.forEach(function(A) {
          if (typeof A != "string") throw new Error("Error starting dial out: audio codec must be a string");
          if (A !== "OPUS" && A !== "PCMU" && A !== "PCMA" && A !== "G722") throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
        });
      }
    };
    if (!i.sipUri && !i.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
    if (i.sipUri && i.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
    if (i.sipUri) {
      if (typeof i.sipUri != "string") throw new Error("Error starting dial out: sipUri must be a string");
      if (!i.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
      if (i.video && typeof i.video != "boolean") throw new Error("Error starting dial out: video must be a boolean value");
      if (i.videoSettings !== void 0) {
        if (R(i.videoSettings) !== "object" || i.videoSettings === null) throw new Error("Error starting dial out: videoSettings must be an object");
        if (!i.video) throw new Error("Error starting dial out: videoSettings provided but video is not enabled");
        var h = i.videoSettings;
        if (h.width !== void 0) {
          if (!Number.isInteger(h.width) || h.width <= 0) throw new Error("Error starting dial out: videoSettings.width must be a positive integer");
          if (h.width > 1280) throw new Error("Error starting dial out: videoSettings.width must be less than or equal to 1280");
        }
        if (h.height !== void 0) {
          if (!Number.isInteger(h.height) || h.height <= 0) throw new Error("Error starting dial out: videoSettings.height must be a positive integer");
          if (h.height > 720) throw new Error("Error starting dial out: videoSettings.height must be less than or equal to 720");
        }
        if (h.fps !== void 0) {
          if (!Number.isInteger(h.fps) || h.fps <= 0) throw new Error("Error starting dial out: videoSettings.fps must be a positive integer");
          if (h.fps > 30) throw new Error("Error starting dial out: videoSettings.fps must be less than or equal to 30");
        }
        if (h.videoBitrate !== void 0) {
          if (!Number.isInteger(h.videoBitrate) || h.videoBitrate <= 0) throw new Error("Error starting dial out: videoSettings.videoBitrate must be a positive integer");
          if (h.videoBitrate > 1e3) throw new Error("Error starting dial out: videoSettings.videoBitrate must be less than or equal to 1000 kbps");
        }
      }
      (function(C) {
        if (C && (l(C.audio), C.video)) {
          if (!Array.isArray(C.video)) throw new Error("Error starting dial out: video codec must be an array");
          if (C.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
          C.video.forEach(function(A) {
            if (typeof A != "string") throw new Error("Error starting dial out: video codec must be a string");
            if (A !== "H264" && A !== "VP8") throw new Error("Error starting dial out: video codec must be H264 or VP8");
          });
        }
      })(i.codecs);
    }
    if (i.phoneNumber) {
      if (typeof i.phoneNumber != "string") throw new Error("Error starting dial out: phoneNumber must be a string");
      if (!/^\+\d{1,}$/.test(i.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
      i.codecs && l(i.codecs.audio);
    }
    if (i.callerId) {
      if (typeof i.callerId != "string") throw new Error("Error starting dial out: callerId must be a string");
      if (i.sipUri) throw new Error("Error starting dial out: callerId not allowed with sipUri");
    }
    if (i.displayName) {
      if (typeof i.displayName != "string") throw new Error("Error starting dial out: displayName must be a string");
      if (i.displayName.length >= 200) throw new Error("Error starting dial out: displayName length must be less than 200");
    }
    if (i.userId) {
      if (typeof i.userId != "string") throw new Error("Error starting dial out: userId must be a string");
      if (i.userId.length > 36) throw new Error("Error starting dial out: userId length must be less than or equal to 36");
    }
    if (Vo(i), i.permissions && i.permissions.canReceive) {
      var f = Q(xs.validateJSONObject(i.permissions.canReceive), 2), k = f[0], E = f[1];
      if (!k) throw new Error(E);
    }
    if (i.provider) {
      if (i.provider !== lt && i.provider !== ut) throw new Error("Error: provider can be set only to '".concat(lt, "' or '").concat(ut, "', got: ").concat(i.provider));
      if (i.phoneNumber) throw new Error("Error starting dial out: provider valid only for sipUri, not phoneNumber");
      i.provider === lt && console.warn("(pre-beta) provider=".concat(lt, " is currently in pre-beta, things might break!"));
    } else i.provider = ut;
    return new Promise(function(C, A) {
      d.sendMessageToCallMachine(I({ action: "dialout-start" }, i), function(B) {
        B.error ? A(B.error) : C(B);
      });
    });
  }), function(i) {
    return b.apply(this, arguments);
  }) }, { key: "startDialIn", value: (_ = D(function* (i) {
    var d = this;
    if (z(this._callState, "startDialIn()"), !i || R(i) !== "object") throw new Error("Error starting dial in: args must be an object");
    if (typeof i.displayName != "string" || i.displayName.length === 0) throw new Error("Error starting dial in: displayName is required and must be a non-empty string");
    if (i.displayName.length >= 200) throw new Error("Error starting dial in: displayName length must be less than 200");
    if (i.userId !== void 0 && typeof i.userId != "string") throw new Error("Error starting dial in: userId must be a string");
    if (i.userId !== void 0 && i.userId.length > 36) throw new Error("Error starting dial in: userId length must be less than or equal to 36");
    if (i.video !== void 0 && typeof i.video != "boolean") throw new Error("Error starting dial in: video must be a boolean");
    if (i.sipEndpoint !== void 0 && typeof i.sipEndpoint != "string") throw new Error("Error starting dial in: sipEndpoint must be a string");
    if (i.codecs !== void 0 && (R(i.codecs) !== "object" || i.codecs === null)) throw new Error("Error starting dial in: codecs must be an object");
    if (i.permissions !== void 0 && (R(i.permissions) !== "object" || i.permissions === null)) throw new Error("Error starting dial in: permissions must be an object");
    if (i.provider) {
      if (i.provider !== lt && i.provider !== ut) throw new Error("Error starting dial in: provider must be '".concat(lt, "' or '").concat(ut, "'"));
    } else i = I(I({}, i), {}, { provider: ut });
    return new Promise(function(l, h) {
      d.sendMessageToCallMachine(I({ action: "dialin-start", sipMode: "dial-in" }, i), function(f) {
        f.error ? h(f.error) : l(f);
      });
    });
  }), function(i) {
    return _.apply(this, arguments);
  }) }, { key: "stopDialOut", value: function(i) {
    var d = this;
    return z(this._callState, "stopDialOut()"), new Promise(function(l, h) {
      d.sendMessageToCallMachine(I({ action: "dialout-stop" }, i), function(f) {
        f.error ? h(f.error) : l(f);
      });
    });
  } }, { key: "sipCallTransfer", value: (m = D(function* (i) {
    var d = this;
    if (z(this._callState, "sipCallTransfer()"), !i) throw new Error("sipCallTransfer() requires a sessionId and toEndPoint");
    return i.useSipRefer = !1, qo(i, "sipCallTransfer"), Vo(i), new Promise(function(l, h) {
      d.sendMessageToCallMachine(I({ action: go }, i), function(f) {
        f.error ? h(f.error) : l(f);
      });
    });
  }), function(i) {
    return m.apply(this, arguments);
  }) }, { key: "sipRefer", value: (w = D(function* (i) {
    var d = this;
    if (z(this._callState, "sipRefer()"), !i) throw new Error("sessionId and toEndPoint are mandatory parameter");
    return i.useSipRefer = !0, qo(i, "sipRefer"), new Promise(function(l, h) {
      d.sendMessageToCallMachine(I({ action: go }, i), function(f) {
        f.error ? h(f.error) : l(f);
      });
    });
  }), function(i) {
    return w.apply(this, arguments);
  }) }, { key: "sendDTMF", value: (S = D(function* (i) {
    var d = this;
    return z(this._callState, "sendDTMF()"), (function(l) {
      var h = l.sessionId, f = l.tones, k = l.method, E = l.digitDurationMs;
      if (!h || !f) throw new Error("sessionId and tones are mandatory parameter");
      if (typeof h != "string" || typeof f != "string") throw new Error("sessionId and tones should be of string type");
      if (f.length > 20) throw new Error("tones string must be upto 20 characters");
      var C = /[^0-9A-D*#]/g, A = f.match(C);
      if (A && A[0]) throw new Error("".concat(A[0], " is not valid DTMF tone"));
      if (k && !["sip-info", "telephone-event", "auto"].includes(k)) throw new Error("method must be one of 'sip-info', 'telephone-event', or 'auto'");
      if (E !== void 0) {
        if (typeof E != "number") throw new Error("digitDurationMs must be a number");
        if (!Number.isFinite(E) || !Number.isInteger(E)) throw new Error("digitDurationMs must be a finite integer number");
        if (E < 50 || E > 2e3) throw new Error("digitDurationMs must be between 50ms and 2000ms");
      }
    })(i), i.method = i.method || "auto", i.digitDurationMs = i.digitDurationMs || 500, new Promise(function(l, h) {
      d.sendMessageToCallMachine(I({ action: "send-dtmf" }, i), function(f) {
        f.error ? h(f.error) : l(f);
      });
    });
  }), function(i) {
    return S.apply(this, arguments);
  }) }, { key: "getNetworkStats", value: function() {
    var i = this;
    return this._callState !== Qe ? Promise.resolve(I({ stats: { latest: {} } }, this._network)) : new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-calc-stats" }, function(l) {
        d(I(I({}, i._network), {}, { stats: l.stats }));
      });
    });
  } }, { key: "testWebsocketConnectivity", value: (T = D(function* () {
    var i = this;
    if (tr(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (d) {
      return Promise.reject(d);
    }
    return new Promise(function(d, l) {
      i.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function(h) {
        h.error ? l(h.error) : d(h.results);
      });
    });
  }), function() {
    return T.apply(this, arguments);
  }) }, { key: "abortTestWebsocketConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
  } }, { key: "_validateVideoTrackForNetworkTests", value: function(i) {
    return i ? i instanceof MediaStreamTrack ? !!zl(i) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
  } }, { key: "testCallQuality", value: (v = D(function* () {
    var i = this;
    $(), le(this._callObjectMode, "testCallQuality()"), an(this._callMachineInitialized, "testCallQuality()", null, !0), er(this._callState, this._isPreparingToJoin, "testCallQuality()");
    var d = this._testCallAlreadyInProgress, l = function(f) {
      d || (i._testCallInProgress = f);
    };
    if (l(!0), this.needsLoad()) try {
      var h = this._callState;
      yield this.load(), this._callState = h;
    } catch (f) {
      return l(!1), Promise.reject(f);
    }
    return new Promise(function(f) {
      i.sendMessageToCallMachine({ action: "test-call-quality", dailyJsVersion: i.properties.dailyJsVersion }, function(k) {
        var E = k.results, C = E.result, A = ln(E, Ql);
        if (C === "failed") {
          var B, U = I({}, A);
          (B = A.error) !== null && B !== void 0 && B.details ? (A.error.details = JSON.parse(A.error.details), U.error = I(I({}, U.error), {}, { details: I({}, U.error.details) }), U.error.details.duringTest = "testCallQuality") : (U.error = U.error ? I({}, U.error) : {}, U.error.details = { duringTest: "testCallQuality" }), i._maybeSendToSentry(U);
        }
        l(!1), f(I({ result: C }, A));
      });
    });
  }), function() {
    return v.apply(this, arguments);
  }) }, { key: "stopTestCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
  } }, { key: "testConnectionQuality", value: (g = D(function* (i) {
    var d;
    V() ? (console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead"), d = yield this.testPeerToPeerCallQuality(i)) : (console.warn("testConnectionQuality() is deprecated: use testCallQuality() instead"), d = yield this.testCallQuality());
    var l = { result: d.result, secondsElapsed: d.secondsElapsed };
    return d.data && (l.data = { maxRTT: d.data.maxRoundTripTime, packetLoss: d.data.avgRecvPacketLoss }), l;
  }), function(i) {
    return g.apply(this, arguments);
  }) }, { key: "testPeerToPeerCallQuality", value: (p = D(function* (i) {
    var d = this;
    if (tr(this._testCallInProgress, "testPeerToPeerCallQuality()"), this.needsLoad()) try {
      yield this.load();
    } catch (f) {
      return Promise.reject(f);
    }
    var l = i.videoTrack, h = i.duration;
    if (!this._validateVideoTrackForNetworkTests(l)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForConnectionQualityTest = l, new Promise(function(f, k) {
      d.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: h }, function(E) {
        E.error ? k(E.error) : f(E.results);
      });
    });
  }), function(i) {
    return p.apply(this, arguments);
  }) }, { key: "stopTestConnectionQuality", value: function() {
    V() ? (console.warn("stopTestConnectionQuality() is deprecated: use testPeerToPeerCallQuality() and stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality()) : (console.warn("stopTestConnectionQuality() is deprecated: use testCallQuality() and stopTestCallQuality() instead"), this.stopTestCallQuality());
  } }, { key: "stopTestPeerToPeerCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" });
  } }, { key: "testNetworkConnectivity", value: (u = D(function* (i) {
    var d = this;
    if (tr(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (l) {
      return Promise.reject(l);
    }
    if (!this._validateVideoTrackForNetworkTests(i)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForNetworkConnectivityTest = i, new Promise(function(l, h) {
      d.sendMessageToCallMachine({ action: "test-network-connectivity" }, function(f) {
        f.error ? h(f.error) : l(f.results);
      });
    });
  }), function(i) {
    return u.apply(this, arguments);
  }) }, { key: "abortTestNetworkConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
  } }, { key: "getCpuLoadStats", value: function() {
    var i = this;
    return new Promise(function(d) {
      i._callState === Qe ? i.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function(l) {
        d(l.cpuStats);
      }) : d({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
    });
  } }, { key: "_validateEncodingLayerHasValidProperties", value: function(i) {
    var d;
    if (!(((d = Object.keys(i)) === null || d === void 0 ? void 0 : d.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(Zn));
  } }, { key: "_validateVideoSendSettings", value: function(i, d) {
    var l = i === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"], h = "Video send settings should be either an object or one of the supported presets: ".concat(l.join());
    if (typeof d == "string") {
      if (!l.includes(d)) throw new Error(h);
    } else {
      if (R(d) !== "object") throw new Error(h);
      if (!d.maxQuality && !d.encodings && d.allowAdaptiveLayers === void 0 && d.adaptiveLayerMaxBitrate === void 0 && d.startBitrate === void 0) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers, adaptiveLayerMaxBitrate, startBitrate or encodings attribute");
      if (d.startBitrate !== void 0) {
        var f = d.startBitrate;
        if (!Number.isInteger(f) || f < 1e3 || f > 4294967295) throw new Error("startBitrate must be a whole number of bits per second, between 1000 and 4294967295");
      }
      if (d.adaptiveLayerMaxBitrate !== void 0 && d.adaptiveLayerMaxBitrate !== null) {
        var k = d.adaptiveLayerMaxBitrate;
        if (typeof k != "number" || !Number.isFinite(k) || k <= 0) throw new Error("adaptiveLayerMaxBitrate must be a positive number, or null to remove the cap");
      }
      if (d.maxQuality && ["low", "medium", "high"].indexOf(d.maxQuality) === -1) throw new Error("maxQuality must be either low, medium or high");
      if (d.encodings) {
        var E = !1;
        switch (Object.keys(d.encodings).length) {
          case 1:
            E = !d.encodings.low;
            break;
          case 2:
            E = !d.encodings.low || !d.encodings.medium;
            break;
          case 3:
            E = !d.encodings.low || !d.encodings.medium || !d.encodings.high;
            break;
          default:
            E = !0;
        }
        if (E) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
        d.encodings.low && this._validateEncodingLayerHasValidProperties(d.encodings.low), d.encodings.medium && this._validateEncodingLayerHasValidProperties(d.encodings.medium), d.encodings.high && this._validateEncodingLayerHasValidProperties(d.encodings.high);
      }
    }
  } }, { key: "validateUpdateSendSettings", value: function(i) {
    var d = this;
    if (!i || Object.keys(i).length === 0) throw new Error("Send settings must contain at least information for one track!");
    Object.entries(i).forEach(function(l) {
      var h = Q(l, 2), f = h[0], k = h[1];
      d._validateVideoSendSettings(f, k);
    });
  } }, { key: "updateSendSettings", value: function(i) {
    var d = this;
    return this.validateUpdateSendSettings(i), this.needsLoad() ? (this._preloadCache.sendSettings = i, { sendSettings: this._preloadCache.sendSettings }) : new Promise(function(l, h) {
      d.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: i }, function(f) {
        f.error ? h(f.error) : l(f.sendSettings);
      });
    });
  } }, { key: "getSendSettings", value: function() {
    return this._sendSettings || this._preloadCache.sendSettings;
  } }, { key: "getLocalAudioLevel", value: function() {
    return this._localAudioLevel;
  } }, { key: "getRemoteParticipantsAudioLevel", value: function() {
    return this._remoteParticipantsAudioLevel;
  } }, { key: "getActiveSpeaker", value: function() {
    return $(), this._activeSpeaker;
  } }, { key: "setActiveSpeakerMode", value: function(i) {
    return $(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: i }), this;
  } }, { key: "activeSpeakerMode", value: function() {
    return $(), this._activeSpeakerMode;
  } }, { key: "subscribeToTracksAutomatically", value: function() {
    return this._preloadCache.subscribeToTracksAutomatically;
  } }, { key: "setSubscribeToTracksAutomatically", value: function(i) {
    return z(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = i, this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: i }), this;
  } }, { key: "enumerateDevices", value: (c = D(function* () {
    var i = this;
    if (this._callObjectMode) {
      var d = yield navigator.mediaDevices.enumerateDevices();
      return ot() === "Firefox" && kn().major > 115 && kn().major < 123 && (d = d.filter(function(l) {
        return l.kind !== "audiooutput";
      })), { devices: d.map(function(l) {
        var h = JSON.parse(JSON.stringify(l));
        if (!V() && l.kind === "videoinput" && l.getCapabilities) {
          var f, k = l.getCapabilities();
          h.facing = (k == null || (f = k.facingMode) === null || f === void 0 ? void 0 : f.length) >= 1 ? k.facingMode[0] : void 0;
        }
        return h;
      }) };
    }
    return new Promise(function(l) {
      i.sendMessageToCallMachine({ action: "enumerate-devices" }, function(h) {
        l({ devices: h.devices });
      });
    });
  }), function() {
    return c.apply(this, arguments);
  }) }, { key: "sendAppMessage", value: function(i) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
    if (z(this._callState, "sendAppMessage()"), JSON.stringify(i).length > this._maxAppMessageSize) throw new Error("Message data too large. Max size is " + this._maxAppMessageSize);
    return this.sendMessageToCallMachine({ action: "app-msg", data: i, to: d }), this;
  } }, { key: "addFakeParticipant", value: function(i) {
    return $(), z(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(I({ action: "add-fake-participant" }, i)), this;
  } }, { key: "setShowNamesMode", value: function(i) {
    return ue(this._callObjectMode, "setShowNamesMode()"), $(), i && i !== "always" && i !== "never" ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: i }), this);
  } }, { key: "setShowLocalVideo", value: function() {
    var i = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return ue(this._callObjectMode, "setShowLocalVideo()"), $(), z(this._callState, "setShowLocalVideo()"), typeof i != "boolean" ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: i }), this._showLocalVideo = i, this);
  } }, { key: "showLocalVideo", value: function() {
    return ue(this._callObjectMode, "showLocalVideo()"), $(), this._showLocalVideo;
  } }, { key: "setShowParticipantsBar", value: function() {
    var i = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return ue(this._callObjectMode, "setShowParticipantsBar()"), $(), z(this._callState, "setShowParticipantsBar()"), typeof i != "boolean" ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: i }), this._showParticipantsBar = i, this);
  } }, { key: "showParticipantsBar", value: function() {
    return ue(this._callObjectMode, "showParticipantsBar()"), $(), this._showParticipantsBar;
  } }, { key: "customIntegrations", value: function() {
    return $(), ue(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
  } }, { key: "setCustomIntegrations", value: function(i) {
    return $(), ue(this._callObjectMode, "setCustomIntegrations()"), z(this._callState, "setCustomIntegrations()"), Vs(i) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: i }), this._customIntegrations = i, this) : this;
  } }, { key: "startCustomIntegrations", value: function(i) {
    var d = this;
    if ($(), ue(this._callObjectMode, "startCustomIntegrations()"), z(this._callState, "startCustomIntegrations()"), Array.isArray(i) && i.some(function(f) {
      return typeof f != "string";
    }) || !Array.isArray(i) && typeof i != "string") return console.error("startCustomIntegrations() only accepts string | string[]"), this;
    var l = typeof i == "string" ? [i] : i, h = l.filter(function(f) {
      return !(f in d._customIntegrations);
    });
    return h.length ? (console.error(`Can't find custom integration(s): "`.concat(h.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: l }), this);
  } }, { key: "stopCustomIntegrations", value: function(i) {
    var d = this;
    if ($(), ue(this._callObjectMode, "stopCustomIntegrations()"), z(this._callState, "stopCustomIntegrations()"), Array.isArray(i) && i.some(function(f) {
      return typeof f != "string";
    }) || !Array.isArray(i) && typeof i != "string") return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
    var l = typeof i == "string" ? [i] : i, h = l.filter(function(f) {
      return !(f in d._customIntegrations);
    });
    return h.length ? (console.error(`Can't find custom integration(s): "`.concat(h.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: l }), this);
  } }, { key: "customTrayButtons", value: function() {
    return ue(this._callObjectMode, "customTrayButtons()"), $(), this._customTrayButtons;
  } }, { key: "updateCustomTrayButtons", value: function(i) {
    return ue(this._callObjectMode, "updateCustomTrayButtons()"), $(), z(this._callState, "updateCustomTrayButtons()"), $s(i) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: i }), this._customTrayButtons = i, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(Sn))), this);
  } }, { key: "theme", value: function() {
    return ue(this._callObjectMode, "theme()"), this.properties.theme;
  } }, { key: "setTheme", value: function(i) {
    var d = this;
    return ue(this._callObjectMode, "setTheme()"), new Promise(function(l, h) {
      try {
        d.validateProperties({ theme: i }), d.properties.theme = I({}, i), d.sendMessageToCallMachine({ action: "set-theme", theme: d.properties.theme });
        try {
          d.emitDailyJSEvent({ action: Tc, theme: d.properties.theme });
        } catch (f) {
          console.log("could not emit 'theme-updated'", f);
        }
        l(d.properties.theme);
      } catch (f) {
        h(f);
      }
    });
  } }, { key: "requestFullscreen", value: (a = D(function* () {
    if ($(), this._iframe && !document.fullscreenElement && mo()) try {
      (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
    } catch (i) {
      console.log("could not make video call fullscreen", i);
    }
  }), function() {
    return a.apply(this, arguments);
  }) }, { key: "exitFullscreen", value: function() {
    $(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
  } }, { key: "getSidebarView", value: (s = D(function* () {
    var i = this;
    return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-sidebar-view" }, function(l) {
        d(l.view);
      });
    });
  }), function() {
    return s.apply(this, arguments);
  }) }, { key: "setSidebarView", value: function(i) {
    return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: i }), this);
  } }, { key: "room", value: (o = D(function* () {
    var i = this, d = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults, l = d === void 0 || d;
    return this._accessState.access === zn || this.needsLoad() ? this.properties.url ? { roomUrlPendingJoin: this.properties.url } : null : new Promise(function(h) {
      i.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: l }, function(f) {
        delete f.action, delete f.callbackStamp, h(f);
      });
    });
  }), function() {
    return o.apply(this, arguments);
  }) }, { key: "geo", value: (r = D(function* () {
    return console.error("The geo() function is no longer supported. Geographical decisions now depend upon domain and room settings."), { current: "" };
  }), function() {
    return r.apply(this, arguments);
  }) }, { key: "setNetworkTopology", value: (n = D(function* (i) {
    var d = this;
    return $(), z(this._callState, "setNetworkTopology()"), new Promise(function(l, h) {
      d.sendMessageToCallMachine({ action: "set-network-topology", opts: i }, function(f) {
        f.error ? h({ error: f.error }) : l({ workerId: f.workerId });
      });
    });
  }), function(i) {
    return n.apply(this, arguments);
  }) }, { key: "getNetworkTopology", value: (e = D(function* () {
    var i = this;
    return new Promise(function(d, l) {
      i.needsLoad() && d({ topology: "none" }), i.sendMessageToCallMachine({ action: "get-network-topology" }, function(h) {
        h.error ? l({ error: h.error }) : d({ topology: h.topology });
      });
    });
  }), function() {
    return e.apply(this, arguments);
  }) }, { key: "setPlayNewParticipantSound", value: function(i) {
    if ($(), typeof i != "number" && i !== !0 && i !== !1) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(i));
    this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: i });
  } }, { key: "on", value: function(i, d) {
    return Ht.prototype.on.call(this, i, d);
  } }, { key: "once", value: function(i, d) {
    return Ht.prototype.once.call(this, i, d);
  } }, { key: "off", value: function(i, d) {
    return Ht.prototype.off.call(this, i, d);
  } }, { key: "validateProperties", value: function(i) {
    var d, l;
    if (i != null && (d = i.dailyConfig) !== null && d !== void 0 && d.userMediaAudioConstraints) {
      var h, f;
      V() || console.warn("userMediaAudioConstraints is deprecated. You can override constraints with inputSettings.audio.settings, found in DailyCallOptions.");
      var k = i.inputSettings || {};
      k.audio = ((h = i.inputSettings) === null || h === void 0 ? void 0 : h.audio) || {}, k.audio.settings = ((f = i.inputSettings) === null || f === void 0 || (f = f.audio) === null || f === void 0 ? void 0 : f.settings) || {}, k.audio.settings = I(I({}, k.audio.settings), i.dailyConfig.userMediaAudioConstraints), i.inputSettings = k, delete i.dailyConfig.userMediaAudioConstraints;
    }
    if (i != null && (l = i.dailyConfig) !== null && l !== void 0 && l.userMediaVideoConstraints) {
      var E, C;
      V() || console.warn("userMediaVideoConstraints is deprecated. You can override constraints with inputSettings.video.settings, found in DailyCallOptions.");
      var A = i.inputSettings || {};
      A.video = ((E = i.inputSettings) === null || E === void 0 ? void 0 : E.video) || {}, A.video.settings = ((C = i.inputSettings) === null || C === void 0 || (C = C.video) === null || C === void 0 ? void 0 : C.settings) || {}, A.video.settings = I(I({}, A.video.settings), i.dailyConfig.userMediaVideoConstraints), i.inputSettings = A, delete i.dailyConfig.userMediaVideoConstraints;
    }
    for (var B in i) if (Ye[B]) {
      if (Ye[B].validate && !Ye[B].validate(i[B], this)) throw new Error("property '".concat(B, "': ").concat(Ye[B].help));
    } else console.warn("Ignoring unrecognized property '".concat(B, "'")), delete i[B];
  } }, { key: "assembleMeetingUrl", value: function() {
    var i, d, l = I(I({}, this.properties), {}, { emb: this.callClientId, embHref: encodeURIComponent(window.location.href), proxy: (i = this.properties.dailyConfig) !== null && i !== void 0 && i.proxyUrl ? encodeURIComponent((d = this.properties.dailyConfig) === null || d === void 0 ? void 0 : d.proxyUrl) : void 0 }), h = l.url.match(/\?/) ? "&" : "?";
    return l.url + h + Object.keys(Ye).filter(function(f) {
      return Ye[f].queryString && l[f] !== void 0;
    }).map(function(f) {
      return "".concat(Ye[f].queryString, "=").concat(l[f]);
    }).join("&");
  } }, { key: "needsLoad", value: function() {
    return [no, ro, Fe, He].includes(this._callState);
  } }, { key: "sendMessageToCallMachine", value: function(i, d) {
    if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
    this._messageChannel.sendMessageToCallMachine(i, d, this.callClientId, this._iframe);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(i) {
    this._messageChannel.forwardPackagedMessageToCallMachine(i, this._iframe, this.callClientId);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(i) {
    return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(i, this.callClientId);
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(i) {
    this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(i);
  } }, { key: "handleMessageFromCallMachine", value: function(i) {
    switch (i.action) {
      case Ec:
        this.sendMessageToCallMachine(I({ action: Cc }, this.properties));
        break;
      case "call-machine-initialized":
        this._callMachineInitialized = !0;
        var d = oa(), l = { action: rn, level: "log", code: 1011, stats: { event: "bundle load", time: this._bundleLoadTime === "no-op" ? 0 : this._bundleLoadTime, preLoaded: this._bundleLoadTime === "no-op", url: mn(this.properties.dailyConfig), resolvedBaseDomain: d, failedOver: d != null && d !== "daily.co" } };
        this.sendMessageToCallMachine(l), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
        break;
      case so:
        this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null), this.emitDailyJSEvent(i);
        break;
      case jc:
        var h, f = I({}, i);
        delete f.internal, this._maxAppMessageSize = ((h = i.internal) === null || h === void 0 ? void 0 : h._maxAppMessageSize) || Hn, this._joinedCallback && (this._joinedCallback(i.participants), this._joinedCallback = null), this.emitDailyJSEvent(f);
        break;
      case Dc:
      case Nc:
        if (this._callState === Fe) return;
        if (i.participant && i.participant.session_id) {
          var k = i.participant.local ? "local" : i.participant.session_id;
          if (this._callObjectMode) {
            var E = this._callMachine().store;
            ko(i.participant, E), So(i.participant, E), Mo(i.participant, this._participants[k], E);
          }
          try {
            this.maybeParticipantTracksStopped(this._participants[k], i.participant), this.maybeParticipantTracksStarted(this._participants[k], i.participant), this.maybeEventRecordingStopped(this._participants[k], i.participant), this.maybeEventRecordingStarted(this._participants[k], i.participant);
          } catch (Ks) {
            console.error("track events error", Ks);
          }
          this.compareEqualForParticipantUpdateEvent(i.participant, this._participants[k]) || (this._participants[k] = I({}, i.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus(), this.emitDailyJSEvent(i));
        }
        break;
      case Fc:
        if (i.participant && i.participant.session_id) {
          var C = this._participants[i.participant.session_id];
          C && this.maybeParticipantTracksStopped(C, null), delete this._participants[i.participant.session_id], this.emitDailyJSEvent(i);
        }
        break;
      case Bc:
        ae(this._participantCounts, i.participantCounts) || (this._participantCounts = i.participantCounts, this.emitDailyJSEvent(i));
        break;
      case Rc:
        var A = { access: i.access };
        i.awaitingAccess && (A.awaitingAccess = i.awaitingAccess), ae(this._accessState, A) || (this._accessState = A, this.emitDailyJSEvent(i));
        break;
      case Uc:
        if (i.meetingSession) {
          this._meetingSessionSummary = i.meetingSession, this.emitDailyJSEvent(i);
          var B = I(I({}, i), {}, { action: "meeting-session-updated" });
          this.emitDailyJSEvent(B);
        }
        break;
      case Wn:
        this._handleFatalError(i);
        break;
      case Lc:
        this._callState !== He && this._updateCallState(Fe), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null), this.emitDailyJSEvent(i);
        break;
      case "selected-devices-updated":
        i.devices && this.emitDailyJSEvent(i);
        break;
      case ul:
        var U = i.state, G = i.threshold, oe = i.quality, Je = U.state, qe = U.reasons;
        Je === this._network.networkState && ae(qe, this._network.networkStateReasons) && G === this._network.threshold && oe === this._network.quality || (this._network.networkState = Je, this._network.networkStateReasons = qe, this._network.quality = oe, this._network.threshold = G, i.networkState = Je, qe.length && (i.networkStateReasons = qe), delete i.state, this.emitDailyJSEvent(i));
        break;
      case pl:
        i && i.cpuLoadState && this.emitDailyJSEvent(i);
        break;
      case hl:
        i && i.faceCounts !== void 0 && this.emitDailyJSEvent(i);
        break;
      case cl:
        var K = i.activeSpeaker;
        this._activeSpeaker.peerId !== K.peerId && (this._activeSpeaker.peerId = K.peerId, this.emitDailyJSEvent({ action: i.action, activeSpeaker: this._activeSpeaker }));
        break;
      case "show-local-video-changed":
        if (this._callObjectMode) return;
        var Me = i.show;
        this._showLocalVideo = Me, this.emitDailyJSEvent({ action: i.action, show: Me });
        break;
      case ll:
        var ze = i.enabled;
        this._activeSpeakerMode !== ze && (this._activeSpeakerMode = ze, this.emitDailyJSEvent({ action: i.action, enabled: this._activeSpeakerMode }));
        break;
      case Vc:
      case Jc:
      case qc:
        this._waitingParticipants = i.allWaitingParticipants, this.emitDailyJSEvent({ action: i.action, participant: i.participant });
        break;
      case bl:
        ae(this._receiveSettings, i.receiveSettings) || (this._receiveSettings = i.receiveSettings, this.emitDailyJSEvent({ action: i.action, receiveSettings: i.receiveSettings }));
        break;
      case lo:
        this._maybeUpdateInputSettings(i.inputSettings);
        break;
      case "send-settings-updated":
        ae(this._sendSettings, i.sendSettings) || (this._sendSettings = i.sendSettings, this._preloadCache.sendSettings = null, this.emitDailyJSEvent({ action: i.action, sendSettings: i.sendSettings }));
        break;
      case "local-audio-level":
        this._localAudioLevel = i.audioLevel, this._preloadCache.localAudioLevelObserver = null, this.emitDailyJSEvent(i);
        break;
      case "remote-participants-audio-level":
        this._remoteParticipantsAudioLevel = i.participantsAudioLevel, this._preloadCache.remoteParticipantsAudioLevelObserver = null, this.emitDailyJSEvent(i);
        break;
      case nl:
        var Jt = i.session_id;
        this._rmpPlayerState[Jt] = i.playerState, this.emitDailyJSEvent(i);
        break;
      case il:
        delete this._rmpPlayerState[i.session_id], this.emitDailyJSEvent(i);
        break;
      case rl:
        var qt = i.session_id, ct = this._rmpPlayerState[qt];
        ct && this.compareEqualForRMPUpdateEvent(ct, i.remoteMediaPlayerState) || (this._rmpPlayerState[qt] = i.remoteMediaPlayerState, this.emitDailyJSEvent(i));
        break;
      case "custom-button-click":
      case "sidebar-view-changed":
      case "pip-started":
      case "pip-stopped":
        this.emitDailyJSEvent(i);
        break;
      case $c:
        var zt = this._meetingSessionState.topology !== (i.meetingSessionState && i.meetingSessionState.topology);
        this._meetingSessionState = nr(i.meetingSessionState, this._callObjectMode), (this._callObjectMode || zt) && this.emitDailyJSEvent(i);
        break;
      case ol:
        this._isScreenSharing = !0, this.emitDailyJSEvent(i);
        break;
      case sl:
      case al:
        this._isScreenSharing = !1, this.emitDailyJSEvent(i);
        break;
      case ao:
      case co:
      case Qc:
      case Kc:
      case Xc:
      case Hc:
      case Gc:
      case Yc:
      case Ac:
      case xc:
      case el:
      case tl:
      case "test-completed":
      case dl:
      case Zc:
      case fl:
      case gl:
      case ml:
      case vl:
      case uo:
      case yl:
      case "dialin-ready":
      case "dialin-connected":
      case "dialin-error":
      case "dialin-stopped":
      case "dialin-warning":
      case "dialout-connected":
      case "dtmf-event":
      case "dialout-answered":
      case "dialout-error":
      case "dialout-stopped":
      case "dialout-warning":
        this.emitDailyJSEvent(i);
        break;
      case "request-fullscreen":
        this.requestFullscreen();
        break;
      case "request-exit-fullscreen":
        this.exitFullscreen();
    }
  } }, { key: "maybeEventRecordingStopped", value: function(i, d) {
    var l = "record";
    i && (d.local || d[l] !== !1 || i[l] === d[l] || this.emitDailyJSEvent({ action: co }));
  } }, { key: "maybeEventRecordingStarted", value: function(i, d) {
    var l = "record";
    i && (d.local || d[l] !== !0 || i[l] === d[l] || this.emitDailyJSEvent({ action: ao }));
  } }, { key: "_trackStatePlayable", value: function(i) {
    return !(!i || i.state !== _c);
  } }, { key: "_trackChanged", value: function(i, d) {
    return i?.id !== d?.id;
  } }, { key: "maybeEventTrackStopped", value: function(i, d, l) {
    var h, f, k = (h = d?.tracks[i]) !== null && h !== void 0 ? h : null, E = (f = l?.tracks[i]) !== null && f !== void 0 ? f : null, C = k?.track;
    if (C) {
      var A = this._trackStatePlayable(k), B = this._trackStatePlayable(E), U = this._trackChanged(C, E?.track);
      A && (B && !U || this.emitDailyJSEvent({ action: Wc, track: C, participant: l ?? d, type: i }));
    }
  } }, { key: "maybeEventTrackStarted", value: function(i, d, l) {
    var h, f, k = (h = d?.tracks[i]) !== null && h !== void 0 ? h : null, E = (f = l?.tracks[i]) !== null && f !== void 0 ? f : null, C = E?.track;
    if (C) {
      var A = this._trackStatePlayable(k), B = this._trackStatePlayable(E), U = this._trackChanged(k?.track, C);
      B && (A && !U || this.emitDailyJSEvent({ action: zc, track: C, participant: l, type: i }));
    }
  } }, { key: "maybeParticipantTracksStopped", value: function(i, d) {
    if (i) for (var l in i.tracks) this.maybeEventTrackStopped(l, i, d);
  } }, { key: "maybeParticipantTracksStarted", value: function(i, d) {
    if (d) for (var l in d.tracks) this.maybeEventTrackStarted(l, i, d);
  } }, { key: "compareEqualForRMPUpdateEvent", value: function(i, d) {
    var l, h;
    return i.state === d.state && ((l = i.settings) === null || l === void 0 ? void 0 : l.volume) === ((h = d.settings) === null || h === void 0 ? void 0 : h.volume);
  } }, { key: "emitDailyJSEvent", value: function(i) {
    try {
      i.callClientId = this.callClientId, this.emit(i.action, i);
    } catch (d) {
      console.log("could not emit", i, d);
    }
  } }, { key: "compareEqualForParticipantUpdateEvent", value: function(i, d) {
    return !!ae(i, d) && (!i.videoTrack || !d.videoTrack || i.videoTrack.id === d.videoTrack.id && i.videoTrack.muted === d.videoTrack.muted && i.videoTrack.enabled === d.videoTrack.enabled) && (!i.audioTrack || !d.audioTrack || i.audioTrack.id === d.audioTrack.id && i.audioTrack.muted === d.audioTrack.muted && i.audioTrack.enabled === d.audioTrack.enabled);
  } }, { key: "nativeUtils", value: function() {
    return V() ? typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
  } }, { key: "updateIsPreparingToJoin", value: function(i) {
    this._updateCallState(this._callState, i);
  } }, { key: "_updateCallState", value: function(i) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin;
    if (i !== this._callState || d !== this._isPreparingToJoin) {
      var l = this._callState, h = this._isPreparingToJoin;
      this._callState = i, this._isPreparingToJoin = d;
      var f = this._callState === Qe;
      this.updateShowAndroidOngoingMeetingNotification(f);
      var k = hn(l, h), E = hn(this._callState, this._isPreparingToJoin);
      k !== E && (this.updateKeepDeviceAwake(E), this.updateDeviceAudioMode(E), this.updateNoOpRecordingEnsuringBackgroundContinuity(E));
    }
  } }, { key: "_handleFatalError", value: function(i) {
    var d;
    this._iframe && !i.preserveIframe && (this._iframe.src = ""), this._updateCallState(He), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(i.errorMsg), this._loadedCallback = null), i.preserveIframe;
    var l = ln(i, Kl);
    typeof (l == null || (d = l.error) === null || d === void 0 ? void 0 : d.details) == "string" && (l.error.details = JSON.parse(l.error.details)), this._maybeSendToSentry(i), this._joinedCallback && (this._joinedCallback(null, l), this._joinedCallback = null), this.emitDailyJSEvent(l);
  } }, { key: "resetMeetingDependentVars", value: function() {
    this._participants = {}, this._participantCounts = Fo, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = { access: zn }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = nr(No, this._callObjectMode), this._isScreenSharing = !1, this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this._maxAppMessageSize = Hn, this._callMachineInitialized = !1, this._bundleLoadTime = void 0, this._preloadCache;
  } }, { key: "updateKeepDeviceAwake", value: function(i) {
    V() && this.nativeUtils().setKeepDeviceAwake(i, this.callClientId);
  } }, { key: "updateDeviceAudioMode", value: function(i) {
    if (V() && !this.disableReactNativeAutoDeviceManagement("audio")) {
      var d = i ? this._nativeInCallAudioMode : "idle";
      this.nativeUtils().setAudioMode(d);
    }
  } }, { key: "updateShowAndroidOngoingMeetingNotification", value: function(i) {
    if (V() && this.nativeUtils().setShowOngoingMeetingNotification) {
      var d, l, h, f;
      if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
        var k = this.properties.reactNativeConfig.androidInCallNotification;
        d = k.title, l = k.subtitle, h = k.iconName, f = k.disableForCustomOverride;
      }
      f && (i = !1), this.nativeUtils().setShowOngoingMeetingNotification(i, d, l, h, this.callClientId);
    }
  } }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(i) {
    V() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(i);
  } }, { key: "toggleParticipantAudioBasedOnNativeAudioFocus", value: function() {
    var i;
    if (V()) {
      var d = (i = this._callMachine()) === null || i === void 0 || (i = i.store) === null || i === void 0 ? void 0 : i.getState();
      for (var l in d?.streams) {
        var h = d.streams[l];
        h && h.pendingTrack && h.pendingTrack.kind === "audio" && (h.pendingTrack.enabled = this._hasNativeAudioFocus);
      }
    }
  } }, { key: "disableReactNativeAutoDeviceManagement", value: function(i) {
    return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[i];
  } }, { key: "absoluteUrl", value: function(i) {
    if (i !== void 0) {
      var d = document.createElement("a");
      return d.href = i, d.href;
    }
  } }, { key: "sayHello", value: function() {
    var i = "hello, world.";
    return console.log(i), i;
  } }, { key: "_logUseAfterDestroy", value: function() {
    var i = Object.values(Ge)[0];
    if (this.needsLoad())
      if (i && !i.needsLoad()) {
        var d = { action: rn, level: "error", code: this.strictMode ? 9995 : 9997 };
        i.sendMessageToCallMachine(d);
      } else this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
    else {
      var l = { action: rn, level: "error", code: this.strictMode ? 9995 : 9997 };
      this._messageChannel.sendMessageToCallMachine(l, null, this.callClientId, this._iframe);
    }
  } }, { key: "_logDuplicateInstanceAttempt", value: function() {
    for (var i = 0, d = Object.values(Ge); i < d.length; i++) {
      var l = d[i];
      l._callMachineInitialized ? (l.sendMessageToCallMachine({ action: rn, level: "warn", code: this.allowMultipleCallInstances ? 9993 : 9992 }), l._delayDuplicateInstanceLog = !1) : l._delayDuplicateInstanceLog = !0;
    }
  } }, { key: "_maybeSendToSentry", value: function(i) {
    var d, l, h, f, k;
    if (!((d = i.error) !== null && d !== void 0 && d.type && (![Mc, Sc, oo].includes(i.error.type) || i.error.type === oo && i.error.msg.includes("deleted")))) {
      var E = (l = this.properties) !== null && l !== void 0 && l.url ? new URL(this.properties.url) : void 0, C = "production";
      E && E.host.includes(".staging.daily") && (C = "staging");
      var A, B, U, G, oe, Je = (function(ct) {
        const zt = [Ua(), Ba(), pc(), uc(), vc(), bc(), qa(), yc()];
        return ct.autoSessionTracking !== !1 && zt.push(mc()), zt;
      })({}).filter(function(ct) {
        return !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(ct.name);
      }), qe = new Xa({ dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844", transport: rc, stackParser: lc, integrations: Je, environment: C }), K = new Ve();
      if (K.setClient(qe), qe.init(), !((h = this._participants) === null || h === void 0 || (h = h.local) === null || h === void 0) && h.session_id && K.setExtra("sessionId", this._participants.local.session_id), this.properties) {
        var Me = I({}, this.properties);
        Me.userName = Me.userName ? "[Filtered]" : void 0, Me.userData = Me.userData ? "[Filtered]" : void 0, Me.token = Me.token ? "[Filtered]" : void 0, K.setExtra("properties", Me);
      }
      if (E) {
        var ze = E.searchParams.get("domain");
        if (!ze) {
          var Jt = E.host.match(/(.*?)\./);
          ze = Jt && Jt[1] || "";
        }
        ze && K.setTag("domain", ze);
      }
      i.error && (K.setTag("fatalErrorType", i.error.type), K.setExtra("errorDetails", i.error.details), !((A = i.error.details) === null || A === void 0) && A.uri && K.setTag("serverAddress", i.error.details.uri), !((B = i.error.details) === null || B === void 0) && B.workerGroup && K.setTag("workerGroup", i.error.details.workerGroup), !((U = i.error.details) === null || U === void 0) && U.geoGroup && K.setTag("geoGroup", i.error.details.geoGroup), !((G = i.error.details) === null || G === void 0) && G.on && K.setTag("connectionAttempt", i.error.details.on), (oe = i.error.details) !== null && oe !== void 0 && oe.bundleUrl && (K.setTag("bundleUrl", i.error.details.bundleUrl), K.setTag("bundleError", i.error.details.sourceError.type))), K.setTags({ callMode: this._callObjectMode ? V() ? "reactNative" : (f = this.properties) !== null && f !== void 0 && (f = f.dailyConfig) !== null && f !== void 0 && (f = f.callMode) !== null && f !== void 0 && f.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame", version: t.version() });
      var qt = ((k = i.error) === null || k === void 0 ? void 0 : k.msg) || i.errorMsg;
      K.captureException(new Error(qt));
    }
  } }, { key: "_callMachine", value: function() {
    var i;
    return (i = window._daily) === null || i === void 0 || (i = i.instances) === null || i === void 0 || (i = i[this.callClientId]) === null || i === void 0 ? void 0 : i.callMachine;
  } }, { key: "_maybeUpdateInputSettings", value: function(i) {
    if (!ae(this._inputSettings, i)) {
      var d = this._getInputSettings();
      this._inputSettings = i;
      var l = this._getInputSettings();
      ae(d, l) || this.emitDailyJSEvent({ action: lo, inputSettings: l });
    }
  } }], [{ key: "supportedBrowser", value: function() {
    if (V()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
    var i = ia.getParser(be());
    return { supported: !!Qn(), mobile: i.getPlatformType() === "mobile", name: i.getBrowserName(), version: i.getBrowserVersion(), supportsFullscreen: !!mo(), supportsScreenShare: !!kl(), supportsSfu: !!Qn(), supportsVideoProcessing: _s(), supportsAudioProcessing: ws() };
  } }, { key: "version", value: function() {
    return "0.94.0";
  } }, { key: "createCallObject", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return i.layout = "none", new t(null, i);
  } }, { key: "wrap", value: function(i) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if ($(), !i || !i.contentWindow || typeof i.src != "string") throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
    return d.layout || (d.customLayout ? d.layout = "custom-v1" : d.layout = "browser"), new t(i, d);
  } }, { key: "createFrame", value: function(i, d) {
    var l, h;
    $(), i && d ? (l = i, h = d) : i && i.append ? (l = i, h = {}) : (l = document.body, h = i || {});
    var f = h.iframeStyle;
    f || (f = l === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
    var k = document.createElement("iframe");
    window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? k.allow = "microphone, camera" : k.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock; compute-pressure;", k.style.visibility = "hidden", l.appendChild(k), k.style.visibility = null, Object.keys(f).forEach(function(E) {
      return k.style[E] = f[E];
    }), h.layout || (h.customLayout ? h.layout = "custom-v1" : h.layout = "browser");
    try {
      return new t(k, h);
    } catch (E) {
      throw l.removeChild(k), E;
    }
  } }, { key: "createTransparentFrame", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    $();
    var d = document.createElement("iframe");
    return d.allow = "microphone; camera; autoplay", d.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `, document.body.appendChild(d), i.layout || (i.layout = "custom-v1"), t.wrap(d, i);
  } }, { key: "getCallInstance", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    return i ? Ge[i] : Object.values(Ge)[0];
  } }]);
  var e, n, r, o, s, a, c, u, p, g, v, T, S, w, m, _, b, M, P, x, O, N, J, ee, _e, Ne, Pe, Mt, $t, H, ie, Et, Vt, Hr, Gr, Yr, Qr, Kr, Xr;
})();
function Vo(t) {
  if (t.extension) {
    if (typeof t.extension != "string") throw new Error("Error starting dial out: extension must be a string");
    if (t.extension.length > 20) throw new Error("Error starting dial out: extension length must be less than or equal to 20");
  }
  if (t.waitBeforeExtensionDialSec) {
    if (typeof t.waitBeforeExtensionDialSec != "number") throw new Error("Error starting dial out: waitBeforeExtensionDialSec must be a number");
    if (t.waitBeforeExtensionDialSec > 60) throw new Error("Error starting dial out: waitBeforeExtensionDialSec must be less than or equal to 60");
    if (!t.extension) throw new Error("Error starting dial out: waitBeforeExtensionDialSec requires a phoneNumber and extension");
  }
}
function dt(t, e) {
  var n = {};
  for (var r in t) if (t[r] instanceof MediaStreamTrack) console.warn("MediaStreamTrack found in props or cache.", r), n[r] = je;
  else if (r === "dailyConfig") {
    if (t[r].modifyLocalSdpHook) {
      var o = window._daily.instances[e].customCallbacks || {};
      o.modifyLocalSdpHook = t[r].modifyLocalSdpHook, window._daily.instances[e].customCallbacks = o, delete t[r].modifyLocalSdpHook;
    }
    if (t[r].modifyRemoteSdpHook) {
      var s = window._daily.instances[e].customCallbacks || {};
      s.modifyRemoteSdpHook = t[r].modifyRemoteSdpHook, window._daily.instances[e].customCallbacks = s, delete t[r].modifyRemoteSdpHook;
    }
    n[r] = t[r];
  } else n[r] = t[r];
  return n;
}
function z(t) {
  var e = arguments.length > 2 ? arguments[2] : void 0;
  if (t !== Qe) {
    var n = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.");
    throw e && (n += " ".concat(e)), console.error(n), new Error(n);
  }
}
function hn(t, e) {
  return [_r, Qe].includes(t) || e;
}
function er(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "This daily-js method", r = arguments.length > 3 ? arguments[3] : void 0;
  if (hn(t, e)) {
    var o = "".concat(n, " not supported after joining a meeting.");
    throw r && (o += " ".concat(r)), console.error(o), new Error(o);
  }
}
function an(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", n = arguments.length > 2 ? arguments[2] : void 0;
  if (!t) {
    var r = "".concat(e, arguments.length > 3 && arguments[3] !== void 0 && arguments[3] ? " requires preAuth() or startCamera() to initialize call state." : " requires preAuth(), startCamera(), or join() to initialize call state.");
    throw n && (r += " ".concat(n)), console.error(r), new Error(r);
  }
}
function tr(t) {
  if (t) {
    var e = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
    throw console.error(e), new Error(e);
  }
}
function le(t) {
  if (!t) {
    var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
    throw console.error(e), new Error(e);
  }
}
function ue(t) {
  if (t) {
    var e = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
    throw console.error(e), new Error(e);
  }
}
function $() {
  if (V()) throw new Error("This daily-js method is not currently supported in React Native");
}
function Tt() {
  if (!V()) throw new Error("This daily-js method is only supported in React Native");
}
function Ds(t) {
  if (t === void 0) return !0;
  var e;
  if (typeof t == "string") e = t;
  else try {
    e = JSON.stringify(t), ae(JSON.parse(e), t) || console.warn("The userData provided will be modified when serialized.");
  } catch (n) {
    throw Error("userData must be serializable to JSON: ".concat(n));
  }
  if (e.length > 4096) throw Error("userData is too large (".concat(e.length, " characters). Maximum size suppported is ").concat(4096, "."));
  return !0;
}
function Ns(t, e) {
  for (var n = e.allowAllParticipantsKey, r = function(v) {
    var T = ["local"];
    return n || T.push("*"), v && !T.includes(v);
  }, o = function(v) {
    return !!(v.layer === void 0 || Number.isInteger(v.layer) && v.layer >= 0 || v.layer === "inherit");
  }, s = function(v) {
    return !!v && !(v.video && !o(v.video)) && !(v.screenVideo && !o(v.screenVideo));
  }, a = 0, c = Object.entries(t); a < c.length; a++) {
    var u = Q(c[a], 2), p = u[0], g = u[1];
    if (!r(p) || !s(g)) return !1;
  }
  return !0;
}
function Fs(t) {
  if (R(t) !== "object") return !1;
  for (var e = 0, n = Object.entries(t); e < n.length; e++) {
    var r = Q(n[e], 2), o = r[0], s = r[1];
    switch (o) {
      case "video":
        if (R(s) !== "object") return !1;
        for (var a = 0, c = Object.entries(s); a < c.length; a++) {
          var u = Q(c[a], 2), p = u[0], g = u[1];
          switch (p) {
            case "processor":
              if (!eu(g)) return !1;
              break;
            case "settings":
              if (!Jo(g)) return !1;
              break;
            default:
              return !1;
          }
        }
        break;
      case "audio":
        if (R(s) !== "object") return !1;
        for (var v = 0, T = Object.entries(s); v < T.length; v++) {
          var S = Q(T[v], 2), w = S[0], m = S[1];
          switch (w) {
            case "processor":
              if (!Zl(m)) return !1;
              break;
            case "settings":
              if (!Jo(m)) return !1;
              break;
            default:
              return !1;
          }
        }
        break;
      default:
        return !1;
    }
  }
  return !0;
}
function Bs(t, e, n) {
  var r, o = [];
  t.video && t.video.processor && (_s((r = e?.useLegacyVideoProcessor) !== null && r !== void 0 && r) || (t.video.settings ? delete t.video.processor : delete t.video, o.push("video"))), t.audio && t.audio.processor && (ws() || (t.audio.settings ? delete t.audio.processor : delete t.audio, o.push("audio"))), o.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(o.join(", "))), t.audio && t.audio.settings && (t.audio.settings.customTrack ? (n.audioTrack = t.audio.settings.customTrack, t.audio.settings = { customTrack: je }) : delete n.audioTrack), t.video && t.video.settings && (t.video.settings.customTrack ? (n.videoTrack = t.video.settings.customTrack, t.video.settings = { customTrack: je }) : delete n.videoTrack);
}
function Zl(t) {
  if (V()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var e = ["type"];
  return !!t && R(t) === "object" && (Object.keys(t).filter(function(n) {
    return !e.includes(n);
  }).forEach(function(n) {
    console.warn("invalid key inputSettings -> audio -> processor : ".concat(n)), delete t[n];
  }), !!(function(n) {
    return typeof n != "string" ? !1 : Object.values(ys).includes(n) ? !0 : (console.error("inputSettings audio processor type invalid"), !1);
  })(t.type));
}
function eu(t) {
  if (V()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var e = ["type", "config"];
  return !t || R(t) !== "object" || !(function(n) {
    return typeof n != "string" ? !1 : Object.values(pn).includes(n) ? !0 : (console.error("inputSettings video processor type invalid"), !1);
  })(t.type) || t.config && (R(t.config) !== "object" || !(function(n, r) {
    var o = Object.keys(r);
    if (o.length === 0) return !0;
    var s = "invalid object in inputSettings -> video -> processor -> config";
    switch (n) {
      case pn.BGBLUR:
        return o.length > 1 || o[0] !== "strength" ? (console.error(s), !1) : !(typeof r.strength != "number" || r.strength <= 0 || r.strength > 1 || isNaN(r.strength)) || (console.error("".concat(s, "; expected: {0 < strength <= 1}, got: ").concat(r.strength)), !1);
      case pn.BGIMAGE:
        return !(r.source !== void 0 && !(function(a) {
          if (a.source === "default") return a.type = "default", !0;
          if (a.source instanceof ArrayBuffer) return !0;
          if (vn(a.source)) return a.type = "url", !!(function(p) {
            var g = new URL(p), v = g.pathname;
            if (g.protocol === "data:") try {
              var T = v.substring(v.indexOf(":") + 1, v.indexOf(";")).split("/")[1];
              return Yn.includes(T);
            } catch (w) {
              return console.error("failed to deduce blob content type", w), !1;
            }
            var S = v.split(".").at(-1).toLowerCase().trim();
            return Yn.includes(S);
          })(a.source) || (console.error("invalid image type; supported types: [".concat(Yn.join(", "), "]")), !1);
          return c = a.source, u = Number(c), isNaN(u) || !Number.isInteger(u) || u <= 0 || u > 10 ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(10)), !1) : (a.type = "daily-preselect", !0);
          var c, u;
        })(r));
      default:
        return !0;
    }
  })(t.type, t.config)) ? !1 : (Object.keys(t).filter(function(n) {
    return !e.includes(n);
  }).forEach(function(n) {
    console.warn("invalid key inputSettings -> video -> processor : ".concat(n)), delete t[n];
  }), !0);
}
function Jo(t) {
  return R(t) === "object" && (!t.customTrack || t.customTrack instanceof MediaStreamTrack);
}
function Or() {
  var t = Object.values(pn).join(" | "), e = Object.values(ys).join(" | ");
  return "inputSettings must be of the form: { video?: { processor?: { type: [ ".concat(t, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(e, " ] } } }");
}
function Rs(t) {
  var e = t.allowAllParticipantsKey;
  return "receiveSettings must be of the form { [<remote participant id> | ".concat(kc).concat(e ? ' | "'.concat("*", '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
}
function Us() {
  return "customIntegrations should be an object of type ".concat(JSON.stringify(Tr), ".");
}
function $s(t) {
  if (t && R(t) !== "object" || Array.isArray(t)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(Sn), ".")), !1;
  if (t) for (var e = 0, n = Object.entries(t); e < n.length; e++) for (var r = Q(n[e], 1)[0], o = 0, s = Object.entries(t[r]); o < s.length; o++) {
    var a = Q(s[o], 2), c = a[0], u = a[1], p = Sn.id[c];
    if (!p) return console.error("customTrayButton does not support key ".concat(c)), !1;
    switch (c) {
      case "iconPath":
      case "iconPathDarkMode":
        if (!vn(u)) return console.error("customTrayButton ".concat(c, " should be a url.")), !1;
        break;
      case "visualState":
        if (!["default", "sidebar-open", "active"].includes(u)) return console.error("customTrayButton ".concat(c, " should be ").concat(p, ". Got: ").concat(u)), !1;
        break;
      default:
        if (R(u) !== p) return console.error("customTrayButton ".concat(c, " should be a ").concat(p, ".")), !1;
    }
  }
  return !0;
}
function Vs(t) {
  if (!t || t && R(t) !== "object" || Array.isArray(t)) return console.error(Us()), !1;
  for (var e = function(v) {
    return "".concat(v, " should be ").concat(Tr.id[v]);
  }, n = function(v, T) {
    return console.error("customIntegration ".concat(v, ": ").concat(T));
  }, r = 0, o = Object.entries(t); r < o.length; r++) {
    var s = Q(o[r], 1)[0];
    if (!("label" in t[s])) return n(s, "label is required"), !1;
    if (!("location" in t[s])) return n(s, "location is required"), !1;
    if (!("src" in t[s]) && !("srcdoc" in t[s])) return n(s, "src or srcdoc is required"), !1;
    for (var a = 0, c = Object.entries(t[s]); a < c.length; a++) {
      var u = Q(c[a], 2), p = u[0], g = u[1];
      switch (p) {
        case "allow":
        case "csp":
        case "name":
        case "referrerPolicy":
        case "sandbox":
          if (typeof g != "string") return n(s, e(p)), !1;
          break;
        case "iconURL":
          if (!vn(g)) return n(s, "".concat(p, " should be a url")), !1;
          break;
        case "src":
          if ("srcdoc" in t[s]) return n(s, "cannot have both src and srcdoc"), !1;
          if (!vn(g)) return n(s, 'src "'.concat(g, '" is not a valid URL')), !1;
          break;
        case "srcdoc":
          if ("src" in t[s]) return n(s, "cannot have both src and srcdoc"), !1;
          if (typeof g != "string") return n(s, e(p)), !1;
          break;
        case "location":
          if (!["main", "sidebar"].includes(g)) return n(s, e(p)), !1;
          break;
        case "controlledBy":
          if (g !== "*" && g !== "owners" && (!Array.isArray(g) || g.some(function(v) {
            return typeof v != "string";
          }))) return n(s, e(p)), !1;
          break;
        case "shared":
          if ((!Array.isArray(g) || g.some(function(v) {
            return typeof v != "string";
          })) && g !== "owners" && typeof g != "boolean") return n(s, e(p)), !1;
          break;
        default:
          if (!Tr.id[p]) return console.error("customIntegration does not support key ".concat(p)), !1;
      }
    }
  }
  return !0;
}
function Js(t, e) {
  if (e === void 0) return !1;
  switch (R(e)) {
    case "string":
      return R(t) === e;
    case "object":
      if (R(t) !== "object") return !1;
      for (var n in t) if (!Js(t[n], e[n])) return !1;
      return !0;
    default:
      return !1;
  }
}
function qo(t, e) {
  var n = t.sessionId, r = t.toEndPoint, o = t.callerId, s = t.useSipRefer;
  if (!n || !r) throw new Error("".concat(e, "() requires a sessionId and toEndPoint"));
  if (typeof n != "string" || typeof r != "string") throw new Error("Invalid paramater: sessionId and toEndPoint must be of type string");
  if (s && !r.startsWith("sip:")) throw new Error('"toEndPoint" must be a "sip" address');
  if (!r.startsWith("sip:") && !r.startsWith("+")) throw new Error("toEndPoint: ".concat(r, ' must starts with either "sip:" or "+"'));
  if (o && typeof o != "string") throw new Error("callerId must be of type string");
  if (o && !r.startsWith("+")) throw new Error("callerId is only valid when transferring to a PSTN number");
}
function zo(t) {
  if (R(t) !== "object") throw new Error('RemoteMediaPlayerSettings: must be "object" type');
  if (t.state && !Object.values(wr).includes(t.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(wr));
  if (t.volume) {
    if (typeof t.volume != "number") throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
    if (t.volume < 0 || t.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
  }
}
function Wo(t, e, n) {
  return !(typeof t != "number" || t < e || t > n);
}
function nr(t, e) {
  return t && !e && delete t.data, t;
}
let tu = 0;
function de(t, e, n = "debug-conversation") {
  return {
    message_type: "conversation",
    event_type: "conversation.tool_call",
    conversation_id: n,
    properties: { name: t, arguments: JSON.stringify(e), tool_call_id: `debug_${Date.now()}_${++tu}` }
  };
}
const nu = [
  ["search: linen", () => de("search_products", { query: "linen" })],
  ["search: suits ≤ $600", () => de("search_products", { department: "suits", max_price: 600 })],
  ["search: navy formal", () => de("search_products", { color: "navy", style: "formal" })],
  ["show MW-0332", () => de("show_product", { product_id: "MW-0332" })],
  ["add MW-0332 M navy", () => de("add_to_bag", { product_id: "MW-0332", size: "M", color: "navy" })],
  ["add MW-0332 XL (sold out)", () => de("add_to_bag", { product_id: "MW-0332", size: "XL" })],
  ["add MW-0333 38S ×1 (limit test)", () => de("add_to_bag", { product_id: "MW-0333", size: "38S" })],
  ["style: Italy wedding $800", () => de("style_outfit", { occasion: "summer wedding in Italy", budget_usd: 800, response_to_user: "On it." })],
  [
    "style rework: shoes too formal",
    () => de("style_outfit", { occasion: "summer wedding in Italy", budget_usd: 800, rework_slot: "Shoes", rework_feedback: "too formal" })
  ],
  ["style: $50k (capped)", () => de("style_outfit", { occasion: "gala", budget_usd: 5e4 })],
  ["style: no budget", () => de("style_outfit", { occasion: "gala" })],
  ["bad id", () => de("show_product", { product_id: "nope" })],
  ["unknown tool", () => de("checkout", {})]
];
function ru(t, e) {
  const n = document.createElement("div");
  n.style.cssText = "position:fixed;left:8px;bottom:8px;z-index:9999;width:380px;max-height:60vh;overflow:auto;background:#fff;color:#111;border:1px solid #999;border-radius:8px;padding:8px;font:12px system-ui,sans-serif;box-shadow:0 4px 16px #0003", n.innerHTML = '<b>Avatar debug</b> <button data-x>clear</button><div data-btns style="display:flex;flex-wrap:wrap;gap:4px;margin:6px 0"></div><div data-log></div>';
  const r = n.querySelector("[data-btns]"), o = n.querySelector("[data-log]");
  let s = 0;
  const a = () => {
    for (; s < e.length; s++) {
      const c = e[s], u = document.createElement("div");
      u.style.cssText = "border-top:1px solid #eee;padding:3px 0;white-space:pre-wrap;word-break:break-word", c.dir === "in" ? u.textContent = `→ ${c.tool} ${JSON.stringify(c.args)}` : c.dir === "out" ? (u.textContent = `← ${c.tool} ${c.status} ${c.bytes}B ${c.ms}ms${c.trimmed.length ? ` trimmed: ${c.trimmed.join(", ")}` : ""}
${JSON.stringify(c.output)}`, c.status === "error" && (u.style.background = "#fde8e8")) : u.textContent = `ℹ ${c.text}`, o.prepend(u);
    }
  };
  for (const [c, u] of nu) {
    const p = document.createElement("button");
    p.textContent = c, p.onclick = async () => {
      await t.handle(u(), (g) => console.log("[avatar] pushed later", g)), a();
    }, r.append(p);
  }
  n.querySelector("[data-x]").onclick = () => {
    o.replaceChildren(), s = e.length;
  }, setInterval(a, 500), document.body.append(n);
}
class qs extends Error {
  constructor(e) {
    super(`stylist: ${e}`), this.backendMessage = e, this.name = "StylistRunError";
  }
}
function iu(t) {
  return /\bwom[ae]n\W*s?\b/i.test(t) && /\bm[ae]n\W*s?\b/i.test(t) && /department|style from|shopping/i.test(t);
}
const ou = 12e4;
function su(t) {
  const e = t.baseUrl.replace(/\/+$/, ""), n = t.fetchImpl ?? ((...o) => fetch(...o)), r = t.timeoutMs ?? ou;
  return async (o) => {
    const s = AbortSignal.timeout(r), a = await n(`${e}/api/stylist/run`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(o),
      signal: s
    });
    if (!a.ok) throw new Error(`stylist run ${a.status}: ${(await a.text()).slice(0, 300)}`);
    const { run_id: c } = await a.json();
    if (!c) throw new Error("stylist run returned no run_id");
    t.onStart?.();
    const u = await n(`${e}/api/stylist/events?run_id=${encodeURIComponent(c)}`, {
      headers: { accept: "text/event-stream" },
      signal: s
    });
    if (!u.ok || !u.body) throw new Error(`stylist events ${u.status}`);
    for await (const p of au(u.body))
      if (p.type === "step") t.onStep?.({ id: p.id, label: p.label, status: p.status });
      else {
        if (p.type === "error") throw new qs(p.message);
        if (p.type === "result") {
          const { looks: g, spoken_summary: v, lookbook_artifact: T } = p;
          return { looks: g, spoken_summary: v, lookbook_artifact: T };
        }
      }
    throw new Error("stylist stream ended without a result");
  };
}
async function* au(t) {
  const e = t.getReader(), n = new TextDecoder();
  let r = "";
  try {
    for (; ; ) {
      const { value: o, done: s } = await e.read();
      o && (r += n.decode(o, { stream: !0 }));
      let a;
      for (; (a = r.search(/\r?\n\r?\n/)) !== -1; ) {
        const c = r.slice(0, a);
        r = r.slice(a).replace(/^\r?\n\r?\n/, "");
        const u = c.split(/\r?\n/).filter((p) => p.startsWith("data:")).map((p) => p.slice(5).replace(/^ /, "")).join(`
`);
        if (u)
          try {
            yield JSON.parse(u);
          } catch {
          }
      }
      if (s) return;
    }
  } finally {
    await e.cancel().catch(() => {
    });
  }
}
function cu(t) {
  const e = t.match(/\$\s?(\d[\d,]*(?:\.\d+)?)\s*(k)?|(\d[\d,]*(?:\.\d+)?)\s*(k|grand|bucks|dollars|usd)\b/i);
  if (!e) return;
  const n = Number((e[1] ?? e[3]).replace(/,/g, "")), r = /^(k|grand)$/i.test(e[2] ?? e[4] ?? "");
  return Number.isFinite(n) ? n * (r ? 1e3 : 1) : void 0;
}
const zs = 3500, lu = 1e4, Mn = 40;
function uu(t) {
  const e = t;
  return !!e && typeof e == "object" && e.event_type === "conversation.tool_call" && !!e.properties && typeof e.properties.name == "string";
}
function jt(t) {
  return new TextEncoder().encode(typeof t == "string" ? t : JSON.stringify(t)).length;
}
function cn(t, e) {
  const n = t && typeof t == "object" ? t : {}, r = {};
  for (const [o, { type: s, required: a }] of Object.entries(e)) {
    let c = n[o];
    (c === "" || c === null) && (c = void 0);
    const u = o.replace(/_/g, " ");
    if (c === void 0) {
      if (a) return { ok: !1, error: `I need the ${u} to do that. Ask the shopper for it.` };
      continue;
    }
    if (s === "number") {
      const p = typeof c == "string" ? Number(c.replace(/[$,\s]/g, "")) : c;
      if (typeof p != "number" || !Number.isFinite(p) || p < 0) return { ok: !1, error: `${u} should be a number.` };
      r[o] = p;
    } else if (s === "boolean")
      r[o] = c === !0 || c === "true" || c === 1 || c === "yes";
    else {
      if (typeof c != "string" && typeof c != "number") return { ok: !1, error: `${u} should be text.` };
      r[o] = String(c).trim();
    }
  }
  return { ok: !0, args: r };
}
function du(t) {
  return typeof t != "string" ? t ?? {} : t.trim() === "" ? {} : JSON.parse(t);
}
function mt(t, e) {
  return t.length <= e ? t : t.slice(0, e - 1).trimEnd() + "…";
}
const Ot = (t) => Math.round(t * 100) / 100, se = (t) => ({ status: "error", output: t });
function Ws(t, e = 1, n = 10) {
  return Array.from({ length: n }, () => ({
    label: `cut ${t}`,
    apply: (r) => r[t].length > e ? { ...r, [t]: r[t].slice(0, -1) } : r
  }));
}
function pu(t, e) {
  const n = t.styleOutfitTimeoutMs ?? 15e4, r = t.styleOutfitMode ?? "await", o = t.spendLimitUsd ?? lu, s = t.shopperId ?? "demo-shopper", a = t.logger ?? ((S) => console.log(S)), c = t.trimThresholdBytes ?? zs;
  let u = !1;
  const p = /* @__PURE__ */ new Map(), g = (S, w) => {
    const m = hu(typeof w == "string" ? w : void 0);
    return m && p.set(S.conversationId, m), m ?? p.get(S.conversationId);
  }, v = /* @__PURE__ */ new Map(), T = (S) => S.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  return {
    async search_products(S, w, m) {
      S && typeof S == "object" && S.query == null && S.q != null && (S = { ...S, query: S.q });
      const _ = cn(S, {
        query: { type: "string" },
        department: { type: "string" },
        style: { type: "string" },
        brand: { type: "string" },
        color: { type: "string" },
        max_price: { type: "number" },
        size: { type: "string" },
        on_sale: { type: "boolean" },
        gender: { type: "string" }
      });
      if (!_.ok) return se(_.error);
      const b = _.args, M = {};
      b.query && (M.q = b.query), b.department && (M.dept = b.department), b.style && (M.style = b.style), b.brand && (M.brand = b.brand), b.color && (M.color = b.color), b.max_price !== void 0 && (M.max_price = b.max_price), b.size && (M.size = b.size);
      const P = g(m, b.gender);
      P && (M.gender = P), b.on_sale && (M.sale = !0);
      const x = await w.search(M) ?? [];
      for (const O of x) e.set(O.id, O.price);
      return {
        status: "success",
        output: {
          products: x.map((O) => ({ id: O.id, title: O.title, brand: O.brand, price: O.price })),
          ...x.length === 0 ? { hint: "No matches. Suggest loosening one filter." } : {}
        },
        trims: [
          {
            label: "short titles",
            apply: (O) => ({ ...O, products: O.products.map((N) => ({ ...N, title: mt(N.title, Mn) })) })
          },
          { label: "drop brands", apply: (O) => ({ ...O, products: O.products.map(({ brand: N, ...J }) => J) }) },
          ...Ws("products")
        ]
      };
    },
    async show_product(S, w) {
      const m = cn(S, { product_id: { type: "string", required: !0 } });
      if (!m.ok) return se(m.error);
      const _ = await w.openProduct(m.args.product_id);
      return _.ok ? (e.set(_.id, _.price), {
        status: "success",
        output: { shown: !0, id: _.id, title: _.title, brand: _.brand, price: _.price, sizes_in_stock: _.sizes, colors: _.colors },
        trims: [
          { label: "short title", apply: (b) => ({ ...b, title: mt(b.title, Mn) }) },
          {
            label: "cut colors/sizes",
            apply: (b) => ({ ...b, colors: b.colors.slice(0, 6), sizes_in_stock: b.sizes_in_stock.slice(0, 12) })
          }
        ]
      }) : se(`${_.error}. Use an id exactly as a tool returned it, or search again.`);
    },
    async add_to_bag(S, w) {
      const m = cn(S, {
        product_id: { type: "string", required: !0 },
        size: { type: "string" },
        color: { type: "string" }
      });
      if (!m.ok) return se(m.error);
      const _ = m.args.product_id;
      let b = w.getProduct?.(_)?.price ?? e.get(_);
      if (b === void 0) {
        const O = await w.openProduct(_);
        if (!O.ok) return se(`${O.error}. Use an id exactly as a tool returned it.`);
        b = O.price, e.set(_, b);
      }
      const M = await w.getBag();
      if (M.total + b > o)
        return se(
          `Not added: that would take the bag to ${Ot(M.total + b)} dollars, past the ${o} dollar limit for this conversation. The bag is at ${Ot(M.total)} dollars.`
        );
      const P = await w.addToBag(_, m.args.size, m.args.color);
      if (!P.ok) return se(mt(P.error || "That couldn't be added to the bag.", 200));
      const x = await w.getBag();
      return {
        status: "success",
        output: {
          added: { product_id: _, ...m.args.size ? { size: m.args.size } : {}, ...m.args.color ? { color: m.args.color } : {} },
          bag_count: x.count,
          bag_total_usd: Ot(x.total),
          left_under_limit_usd: Ot(o - x.total)
        }
      };
    },
    async style_outfit(S, w, m) {
      const _ = (H) => {
        if (r === "background" && m.send)
          try {
            m.send(Ho(m.conversationId, `STYLIST RESULT, not said by the shopper. ${H}`, c));
          } catch (ie) {
            a(`[tool] style_outfit early send failed: ${ie.message}`);
          }
        return se(H);
      }, b = cn(S, {
        occasion: { type: "string", required: !0 },
        budget_usd: { type: "number", required: !0 },
        notes: { type: "string" },
        rework_slot: { type: "string" },
        rework_feedback: { type: "string" },
        gender: { type: "string" }
      });
      if (!b.ok) return _(b.error);
      if (u)
        return _("Looks are still being built. Don't call style_outfit again; tell the shopper it's still cooking.");
      const M = b.args, P = g(m, M.gender), x = M.budget_usd;
      if (!(x > 0)) return _("The budget has to be more than zero. Ask the shopper what they want to spend.");
      const O = T(M.occasion), N = [...v].filter(([H]) => H !== O).reduce((H, [, ie]) => H + ie, 0), J = (await w.getBag())?.total ?? 0, ee = Ot(o - Math.max(J, N));
      if (ee <= 0)
        return _(`The ${o} dollar limit for this conversation is used up by the earlier outfits and the bag. Tell the shopper no more looks this time.`);
      const _e = Math.min(x, ee), Ne = {
        shopper_id: s,
        conversation_id: m.conversationId || "no-conversation",
        occasion: M.occasion,
        budget_usd: _e,
        ...M.notes ? { notes: M.notes } : {},
        ...P ? { gender: P } : {},
        ...M.rework_slot && M.rework_feedback ? { rework: { slot: M.rework_slot, feedback: M.rework_feedback } } : {}
      }, Pe = _e < x ? { budget_note: `Budget capped at ${_e} dollars: the limit is ${o} dollars per conversation across all outfits and the bag.` } : {}, Mt = async () => {
        u = !0;
        let H;
        try {
          H = await vu(t.styleOutfit(Ne), n);
        } catch (ie) {
          return t.onLog?.({ dir: "info", text: `style_outfit backend failed: ${ie.message}` }), ie instanceof qs && iu(ie.backendMessage) ? se(
            `The stylist needs the department before it can build looks. Ask the shopper this aloud, once: "${ie.backendMessage}" Then call style_outfit again with the same occasion and budget and gender set to men or women.`
          ) : se("The stylist couldn't finish those looks. Say so plainly and offer to try again.");
        } finally {
          u = !1;
        }
        if (!H || !Array.isArray(H.looks) || H.looks.length === 0)
          return se("The stylist came back with no looks. Say so plainly and offer to try again.");
        v.set(O, _e);
        try {
          await w.showLooks(H);
        } catch (ie) {
          t.onLog?.({ dir: "info", text: `Barn.showLooks threw: ${ie.message}` });
        }
        return { status: "success", output: { ...gu(H), ...Pe }, trims: mu };
      };
      if (r === "await" || !m.send)
        return r === "background" && a("[tool] style_outfit background mode needs a send function; awaiting instead"), Mt();
      const $t = m.send;
      return Mt().then((H) => {
        const ie = H.status === "success" ? fu(H.output) : `STYLIST RESULT, not said by the shopper. ${H.output}`, Et = Ho(m.conversationId, ie, c);
        t.onLog?.({ dir: "info", text: `style_outfit pushed ${H.status} via conversation.respond (${jt(Et)}B)` });
        try {
          $t(Et);
        } catch (Vt) {
          a(`[tool] style_outfit background send failed: ${Vt.message}`);
        }
      }), {
        status: "success",
        output: {
          started: !0,
          ...Pe,
          note: "The stylist is working on this request and it takes about a minute. Keep telling short stories and jokes. The looks arrive in a new message starting with STYLIST RESULT. After that, call style_outfit again for any new request."
        }
      };
    }
  };
}
function hu(t) {
  const e = (t ?? "").toLowerCase().replace(/[^a-z]/g, "");
  if (/^(women|woman|womens|female|ladies|lady|womenswear)$/.test(e)) return "women";
  if (/^(men|man|mens|male|gents|menswear)$/.test(e)) return "men";
}
function fu(t) {
  const e = t.looks.map((n, r) => {
    const o = (n.items ?? []).map((s) => "product_id" in s ? `${s.slot} is product_id ${s.product_id}` : `${s.slot} is the shopper's own ${s.closet_item}`).join("; ");
    return `Look ${r + 1}, ${n.outfit_name}, ${n.total_usd} dollars: ${o}.`;
  });
  return `STYLIST RESULT, not said by the shopper. The looks are on the outfit board now. spoken_summary: ${t.spoken_summary} ${e.join(" ")} Say spoken_summary in your own voice and ask which look the shopper likes.`;
}
function gu(t) {
  return {
    spoken_summary: t.spoken_summary,
    looks: t.looks.map((e) => ({
      outfit_name: e.outfit_name,
      total_usd: e.total_usd,
      items: (e.items ?? []).map(
        (n) => n.product_id ? { product_id: n.product_id, slot: n.slot } : { closet_item: mt(n.closet_item ?? "", Mn), slot: n.slot }
      )
    }))
  };
}
const mu = [
  { label: "short summary", apply: (t) => ({ ...t, spoken_summary: mt(t.spoken_summary ?? "", 300) }) },
  {
    label: "short names",
    apply: (t) => ({ ...t, looks: t.looks.map((e) => ({ ...e, outfit_name: mt(e.outfit_name, Mn) })) })
  },
  ...Ws("looks"),
  { label: "drop items", apply: (t) => ({ ...t, looks: t.looks.map(({ items: e, ...n }) => n) }) }
];
function Ho(t, e, n) {
  const r = (s) => ({
    message_type: "conversation",
    event_type: "conversation.respond",
    conversation_id: t,
    properties: { text: s.replace(/\[/g, "(").replace(/\]/g, ")") }
  });
  let o = r(e);
  for (; jt(o) > n && e.length > 200; )
    e = e.slice(0, Math.floor(e.length * 0.8)), o = r(e + "…");
  return o;
}
function vu(t, e) {
  let n;
  return Promise.race([
    t,
    new Promise((r, o) => {
      n = setTimeout(() => o(new Error(`timed out after ${e}ms`)), e);
    })
  ]).finally(() => clearTimeout(n));
}
function yu(t) {
  const n = pu(t, /* @__PURE__ */ new Map()), r = t.logger ?? ((u) => console.log(u)), o = t.trimThresholdBytes ?? zs, s = typeof t.bridge == "function" ? t.bridge : () => t.bridge, a = /* @__PURE__ */ new Set();
  async function c(u, p) {
    if (!uu(u)) return null;
    const g = Date.now(), { name: v } = u.properties, T = u.properties.tool_call_id ?? u.properties.inference_id ?? u.inference_id ?? "";
    if (u.properties.tool_call_id || r(`[tool] ${v} WARNING: no tool_call_id on incoming call`), T && a.has(T))
      return r(`[tool] ${v} duplicate ${T} ignored`), null;
    T && a.add(T);
    let S, w = u.properties.arguments;
    try {
      w = du(u.properties.arguments), t.onLog?.({ dir: "in", tool: v, tool_call_id: T, args: w });
      const O = Object.hasOwn(n, v) ? n[v] : void 0, N = s();
      O ? N ? S = await O(w, N, { conversationId: u.conversation_id, send: p }) : S = se("The store isn't loaded yet. Try again in a moment.") : S = se(`Unknown tool ${v}.`);
    } catch (O) {
      O instanceof SyntaxError && typeof u.properties.arguments == "string" ? (t.onLog?.({ dir: "in", tool: v, tool_call_id: T, args: w }), S = se("I couldn't read those tool arguments. Try again.")) : (r(`[tool] ${v} handler error: ${O?.message ?? O}`), S = se(`Something went wrong with ${v.replace(/_/g, " ")}. Try once more.`));
    }
    const m = (O) => ({
      message_type: "conversation",
      event_type: "conversation.tool_result",
      conversation_id: u.conversation_id,
      properties: { tool_call_id: T, output: O, status: S.status }
    });
    let _ = m(S.output), b = jt(_);
    const M = [], P = b;
    for (const O of S.trims ?? []) {
      if (b <= o) break;
      const N = m(O.apply(_.properties.output)), J = jt(N);
      J < b && (_ = N, b = J, M[M.length - 1] !== O.label && M.push(O.label));
    }
    b > o && (_ = m("Done. The details were too long to send; describe what is on screen instead."), b = jt(_), M.push("replaced output"));
    const x = Date.now() - g;
    return M.length && r(`[tool] ${v} trimmed ${P}B -> ${b}B (${M.join(", ")})`), r(`[tool] ${v} ${b}B ${x}ms${S.status === "error" ? " error" : ""}`), t.onLog?.({
      dir: "out",
      tool: v,
      tool_call_id: T,
      status: S.status,
      bytes: b,
      ms: x,
      trimmed: M,
      output: _.properties.output
    }), _;
  }
  return { handle: c };
}
function bu(t) {
  return `STYLIST UPDATE, not said by the shopper. ${t ? `The styling agent is on this step: "${t}".` : "The styling agent is still working."} Give it a quick nod, then keep your show going: carry on with your story, or start your next bit. Don't name products or prices.`;
}
function _u(t) {
  const e = t.firstMs ?? 8e3, n = t.everyMs ?? 1e4, r = t.maxUpdates ?? 8, o = t.quietNeededMs ?? 2e3;
  let s = !1, a = 0, c = 0, u;
  return {
    start(p) {
      s = !0, a = p + e, c = 0, u = void 0;
    },
    step(p) {
      p && (u = p);
    },
    stop() {
      s = !1;
    },
    /** Call about once a second while a run is going. */
    tick(p) {
      !s || c >= r || p < a || t.quietMs(p) < o || (t.say(bu(u)), c += 1, a = p + n);
    }
  };
}
function wu() {
  const t = { user: !1, pal: !1 };
  let e = 0, n = !1;
  return {
    track(r, o) {
      const s = r, a = String(s?.event_type ?? "");
      let c, u;
      const p = /^conversation\.(started|stopped)_speaking$/.exec(a), g = /^conversation\.(user|replica|pal)\.(started|stopped)_speaking$/.exec(a);
      if (p)
        c = s?.properties?.role, u = p[1] === "started";
      else if (g)
        c = g[1], u = g[2] === "started";
      else return;
      const v = c === "user" ? "user" : c === "pal" || c === "replica" ? "pal" : void 0;
      v && (t[v] = u, e = o, n = !0);
    },
    /** Milliseconds since anyone last spoke; 0 while someone is speaking or before any speech event arrived. */
    quietMs(r) {
      return !n || t.user || t.pal ? 0 : r - e;
    }
  };
}
const ku = "https://backend-production-6d9d.up.railway.app", zr = new URLSearchParams(location.search), Wr = window.AVATAR_CONFIG ?? {}, Su = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname), kt = (zr.get("backend") ?? Wr.backend ?? (Su ? "http://localhost:8787" : ku)).replace(/\/+$/, ""), Pr = zr.get("avatar_mode") ?? Wr.styleOutfitMode ?? "background", tt = () => window.Barn, Lt = [], Hs = wu(), fn = _u({
  say: (t) => {
    Oe && Cn({ message_type: "conversation", event_type: "conversation.respond", conversation_id: Oe, properties: { text: t } });
  },
  quietMs: (t) => Hs.quietMs(t)
}), Mu = su({
  baseUrl: kt,
  onStart: () => tt()?.resetFeed(),
  onStep: (t) => {
    tt()?.addFeedStep(t), t.status === "start" && fn.step(t.label);
  }
}), En = yu({
  bridge: tt,
  shopperId: Wr.shopperId,
  styleOutfitMode: Pr,
  styleOutfit: async (t) => {
    fn.start(Date.now());
    const e = setInterval(() => fn.tick(Date.now()), 1e3);
    try {
      return await Mu(t);
    } finally {
      clearInterval(e), fn.stop();
    }
  },
  onLog: (t) => {
    Lt.push(t), Lt.length > 200 && Lt.shift();
  },
  logger: (t) => console.log(`[avatar] ${t}`)
});
let De, Oe, Z = "idle";
const Gs = () => document.getElementById("avatar-slot");
function Ut(t) {
  const e = Gs();
  if (!e) return;
  let n = e.querySelector(".avatar-ui");
  n || (e.replaceChildren(), n = document.createElement("div"), n.className = "avatar-ui", n.style.cssText = "position:relative;width:100%;height:100%;min-height:180px;background:#111;border-radius:inherit;overflow:hidden", n.innerHTML = `
      <video autoplay playsinline muted style="width:100%;height:100%;object-fit:cover;display:block"></video>
      <audio autoplay></audio>
      <div class="avatar-overlay" style="position:absolute;inset:0;display:grid;place-items:center;gap:8px;color:#eee;font:14px system-ui,sans-serif;text-align:center;padding:12px"></div>
      <button class="btn avatar-end" type="button" style="position:absolute;right:8px;bottom:8px" hidden>End call</button>`, n.querySelector(".avatar-end").onclick = () => {
    Qs();
  }, e.append(n));
  const r = n.querySelector(".avatar-overlay"), o = n.querySelector(".avatar-end");
  if (o.hidden = Z !== "live", Z === "live" && !t) {
    r.hidden = !0;
    return;
  }
  r.hidden = !1, r.replaceChildren();
  const s = document.createElement("p");
  if (s.style.margin = "0", s.textContent = t ?? { idle: "Talk to Sasha, your video stylist.", starting: "Connecting to Sasha…", ending: "Ending call…", error: "Couldn't connect.", live: "" }[Z], r.append(s), Z === "idle" || Z === "error") {
    const a = document.createElement("button");
    a.className = "btn", a.type = "button", a.textContent = Z === "error" ? "Try again" : "Start video call", a.onclick = () => {
      Ys();
    }, r.append(a);
  }
}
function pt() {
  const t = Gs()?.querySelector(".avatar-ui");
  if (!De || !t) return;
  const e = Object.values(De.participants()).find((p) => !p.local), n = (p) => {
    const g = e?.tracks?.[p];
    return g && g.state === "playable" ? g.persistentTrack : void 0;
  }, r = t.querySelector("video"), o = t.querySelector("audio"), s = n("video"), a = n("audio"), c = r.srcObject?.getVideoTracks()[0];
  s && c?.id !== s.id && (r.srcObject = new MediaStream([s])), !s && c && (r.srcObject = null);
  const u = o.srcObject?.getAudioTracks()[0];
  a && u?.id !== a.id && (o.srcObject = new MediaStream([a]), o.play().catch(() => {
  })), !a && u && (o.srcObject = null), Z === "live" && Ut(e ? void 0 : "Waiting for Sasha to join…");
}
function Cn(t) {
  if (!(!De || Z !== "live"))
    try {
      De.sendAppMessage(t, "*");
    } catch (e) {
      console.error("[avatar] sendAppMessage failed", e);
    }
}
async function Eu(t) {
  if (!t) return;
  Hs.track(t.data, Date.now());
  const e = await En.handle(t.data, Cn);
  e && Cn(e);
}
async function Ys() {
  if (!(Z === "starting" || Z === "live")) {
    Z = "starting", Ut();
    try {
      await tt()?.ready;
      const t = await fetch(`${kt}/api/conversation`, { method: "POST", headers: { "content-type": "application/json" }, body: "{}" }), e = await t.json().catch(() => ({}));
      if (!t.ok) throw new Error(e.error ?? `HTTP ${t.status}`);
      Oe = e.conversation_id, $o.getCallInstance()?.destroy(), De = $o.createCallObject({ subscribeToTracksAutomatically: !0 }), De.on("app-message", Eu).on("participant-joined", pt).on("participant-updated", pt).on("participant-left", pt).on("track-started", pt).on("track-stopped", pt).on("left-meeting", () => {
        gn("Call ended.");
      }).on("error", (n) => {
        gn(`Call error: ${n?.errorMsg ?? "unknown"}`, !0);
      }), await De.join({ url: e.conversation_url }), Z = "live", pt();
    } catch (t) {
      console.error("[avatar] start failed", t), await gn(`Couldn't start the call: ${t.message}. You can still type to the stylist below.`, !0);
    }
  }
}
async function gn(t, e = !1) {
  const n = De;
  if (De = void 0, n) {
    try {
      await n.leave();
    } catch {
    }
    try {
      await n.destroy();
    } catch {
    }
  }
  Z = e ? "error" : "idle", Ut(t);
}
async function Qs() {
  if (Z !== "live") return;
  Z = "ending", Ut();
  const t = Oe;
  Oe = void 0, t && fetch(`${kt}/api/conversation/end`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ conversation_id: t })
  }).catch(() => {
  }), await gn("Call ended.");
}
addEventListener("pagehide", () => {
  Oe && navigator.sendBeacon?.(
    `${kt}/api/conversation/end`,
    new Blob([JSON.stringify({ conversation_id: Oe })], { type: "application/json" })
  );
});
let Cu = 0;
addEventListener("barn:brief", async (t) => {
  const e = String(t.detail?.text ?? "").trim();
  if (!e) return;
  if (Z === "live" && Oe) {
    Cn({ message_type: "conversation", event_type: "conversation.respond", conversation_id: Oe, properties: { text: e } });
    return;
  }
  const n = cu(e);
  if (!n) {
    tt()?.resetFeed(), tt()?.addFeedStep({ id: "budget", label: "Add a budget so I can build looks, e.g. “about $800”.", status: "blocked" });
    return;
  }
  const r = {
    message_type: "conversation",
    event_type: "conversation.tool_call",
    conversation_id: Oe ?? `typed-${Date.now()}`,
    properties: {
      name: "style_outfit",
      arguments: { occasion: e, budget_usd: n, notes: "Typed brief, no video call." },
      tool_call_id: `typed_${++Cu}`
    }
  }, o = await En.handle(r);
  o?.properties.status === "error" && tt()?.addFeedStep({ id: "error", label: String(o.properties.output), status: "blocked" });
});
function Go() {
  Ut(), window.Avatar = { router: En, start: Ys, end: Qs, log: Lt, backend: kt, mode: Pr, get state() {
    return Z;
  } }, zr.has("avatar_debug") && ru(En, Lt), console.log(`[avatar] ready: backend ${kt}, style_outfit ${Pr}`);
}
document.readyState === "loading" ? addEventListener("DOMContentLoaded", Go, { once: !0 }) : Go();
