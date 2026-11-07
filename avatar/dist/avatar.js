function he(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function $(t) {
  return $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $(t);
}
function os(t) {
  var e = (function(n, r) {
    if ($(n) != "object" || !n) return n;
    var i = n[Symbol.toPrimitive];
    if (i !== void 0) {
      var s = i.call(n, r);
      if ($(s) != "object") return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(n);
  })(t, "string");
  return $(e) == "symbol" ? e : e + "";
}
function si(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, os(r.key), r);
  }
}
function fe(t, e, n) {
  return e && si(t.prototype, e), n && si(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Bn(t, e) {
  if (e && ($(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return (function(n) {
    if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
  })(t);
}
function Me(t) {
  return Me = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, Me(t);
}
function Jt(t, e) {
  return Jt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Jt(t, e);
}
function Rn(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Jt(t, e);
}
function Pe(t, e, n) {
  return (e = os(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ai(t, e, n, r, i, s, a) {
  try {
    var c = t[s](a), l = c.value;
  } catch (p) {
    return void n(p);
  }
  c.done ? e(l) : Promise.resolve(l).then(r, i);
}
function F(t) {
  return function() {
    var e = this, n = arguments;
    return new Promise(function(r, i) {
      var s = t.apply(e, n);
      function a(l) {
        ai(s, r, i, a, c, "next", l);
      }
      function c(l) {
        ai(s, r, i, a, c, "throw", l);
      }
      a(void 0);
    });
  };
}
function bn(t, e) {
  if (t == null) return {};
  var n, r, i = (function(a, c) {
    if (a == null) return {};
    var l = {};
    for (var p in a) if ({}.hasOwnProperty.call(a, p)) {
      if (c.indexOf(p) !== -1) continue;
      l[p] = a[p];
    }
    return l;
  })(t, e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++) n = s[r], e.indexOf(n) === -1 && {}.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
  }
  return i;
}
function vr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function ss(t, e) {
  if (t) {
    if (typeof t == "string") return vr(t, e);
    var n = {}.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vr(t, e) : void 0;
  }
}
function X(t, e) {
  return (function(n) {
    if (Array.isArray(n)) return n;
  })(t) || (function(n, r) {
    var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (i != null) {
      var s, a, c, l, p = [], g = !0, v = !1;
      try {
        if (c = (i = i.call(n)).next, r === 0) {
          if (Object(i) !== i) return;
          g = !1;
        } else for (; !(g = (s = c.call(i)).done) && (p.push(s.value), p.length !== r); g = !0) ;
      } catch (O) {
        v = !0, a = O;
      } finally {
        try {
          if (!g && i.return != null && (l = i.return(), Object(l) !== l)) return;
        } finally {
          if (v) throw a;
        }
      }
      return p;
    }
  })(t, e) || ss(t, e) || (function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function la(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ci, tn = { exports: {} }, yr = (function() {
  if (ci) return tn.exports;
  ci = 1;
  var t, e = typeof Reflect == "object" ? Reflect : null, n = e && typeof e.apply == "function" ? e.apply : function(m, b, _) {
    return Function.prototype.apply.call(m, b, _);
  };
  t = e && typeof e.ownKeys == "function" ? e.ownKeys : Object.getOwnPropertySymbols ? function(m) {
    return Object.getOwnPropertyNames(m).concat(Object.getOwnPropertySymbols(m));
  } : function(m) {
    return Object.getOwnPropertyNames(m);
  };
  var r = Number.isNaN || function(m) {
    return m != m;
  };
  function i() {
    i.init.call(this);
  }
  tn.exports = i, tn.exports.once = function(m, b) {
    return new Promise(function(_, S) {
      function C(x) {
        m.removeListener(b, A), S(x);
      }
      function A() {
        typeof m.removeListener == "function" && m.removeListener("error", C), _([].slice.call(arguments));
      }
      w(m, b, A, { once: !0 }), b !== "error" && (function(x, j, L) {
        typeof x.on == "function" && w(x, "error", j, L);
      })(m, C, { once: !0 });
    });
  }, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
  var s = 10;
  function a(m) {
    if (typeof m != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof m);
  }
  function c(m) {
    return m._maxListeners === void 0 ? i.defaultMaxListeners : m._maxListeners;
  }
  function l(m, b, _, S) {
    var C, A, x, j;
    if (a(_), (A = m._events) === void 0 ? (A = m._events = /* @__PURE__ */ Object.create(null), m._eventsCount = 0) : (A.newListener !== void 0 && (m.emit("newListener", b, _.listener ? _.listener : _), A = m._events), x = A[b]), x === void 0) x = A[b] = _, ++m._eventsCount;
    else if (typeof x == "function" ? x = A[b] = S ? [_, x] : [x, _] : S ? x.unshift(_) : x.push(_), (C = c(m)) > 0 && x.length > C && !x.warned) {
      x.warned = !0;
      var L = new Error("Possible EventEmitter memory leak detected. " + x.length + " " + String(b) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      L.name = "MaxListenersExceededWarning", L.emitter = m, L.type = b, L.count = x.length, j = L, console && console.warn && console.warn(j);
    }
    return m;
  }
  function p() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function g(m, b, _) {
    var S = { fired: !1, wrapFn: void 0, target: m, type: b, listener: _ }, C = p.bind(S);
    return C.listener = _, S.wrapFn = C, C;
  }
  function v(m, b, _) {
    var S = m._events;
    if (S === void 0) return [];
    var C = S[b];
    return C === void 0 ? [] : typeof C == "function" ? _ ? [C.listener || C] : [C] : _ ? (function(A) {
      for (var x = new Array(A.length), j = 0; j < x.length; ++j) x[j] = A[j].listener || A[j];
      return x;
    })(C) : E(C, C.length);
  }
  function O(m) {
    var b = this._events;
    if (b !== void 0) {
      var _ = b[m];
      if (typeof _ == "function") return 1;
      if (_ !== void 0) return _.length;
    }
    return 0;
  }
  function E(m, b) {
    for (var _ = new Array(b), S = 0; S < b; ++S) _[S] = m[S];
    return _;
  }
  function w(m, b, _, S) {
    if (typeof m.on == "function") S.once ? m.once(b, _) : m.on(b, _);
    else {
      if (typeof m.addEventListener != "function") throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof m);
      m.addEventListener(b, function C(A) {
        S.once && m.removeEventListener(b, C), _(A);
      });
    }
  }
  return Object.defineProperty(i, "defaultMaxListeners", { enumerable: !0, get: function() {
    return s;
  }, set: function(m) {
    if (typeof m != "number" || m < 0 || r(m)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + m + ".");
    s = m;
  } }), i.init = function() {
    this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, i.prototype.setMaxListeners = function(m) {
    if (typeof m != "number" || m < 0 || r(m)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + m + ".");
    return this._maxListeners = m, this;
  }, i.prototype.getMaxListeners = function() {
    return c(this);
  }, i.prototype.emit = function(m) {
    for (var b = [], _ = 1; _ < arguments.length; _++) b.push(arguments[_]);
    var S = m === "error", C = this._events;
    if (C !== void 0) S = S && C.error === void 0;
    else if (!S) return !1;
    if (S) {
      var A;
      if (b.length > 0 && (A = b[0]), A instanceof Error) throw A;
      var x = new Error("Unhandled error." + (A ? " (" + A.message + ")" : ""));
      throw x.context = A, x;
    }
    var j = C[m];
    if (j === void 0) return !1;
    if (typeof j == "function") n(j, this, b);
    else {
      var L = j.length, Y = E(j, L);
      for (_ = 0; _ < L; ++_) n(Y[_], this, b);
    }
    return !0;
  }, i.prototype.addListener = function(m, b) {
    return l(this, m, b, !1);
  }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(m, b) {
    return l(this, m, b, !0);
  }, i.prototype.once = function(m, b) {
    return a(b), this.on(m, g(this, m, b)), this;
  }, i.prototype.prependOnceListener = function(m, b) {
    return a(b), this.prependListener(m, g(this, m, b)), this;
  }, i.prototype.removeListener = function(m, b) {
    var _, S, C, A, x;
    if (a(b), (S = this._events) === void 0) return this;
    if ((_ = S[m]) === void 0) return this;
    if (_ === b || _.listener === b) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete S[m], S.removeListener && this.emit("removeListener", m, _.listener || b));
    else if (typeof _ != "function") {
      for (C = -1, A = _.length - 1; A >= 0; A--) if (_[A] === b || _[A].listener === b) {
        x = _[A].listener, C = A;
        break;
      }
      if (C < 0) return this;
      C === 0 ? _.shift() : (function(j, L) {
        for (; L + 1 < j.length; L++) j[L] = j[L + 1];
        j.pop();
      })(_, C), _.length === 1 && (S[m] = _[0]), S.removeListener !== void 0 && this.emit("removeListener", m, x || b);
    }
    return this;
  }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(m) {
    var b, _, S;
    if ((_ = this._events) === void 0) return this;
    if (_.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : _[m] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete _[m]), this;
    if (arguments.length === 0) {
      var C, A = Object.keys(_);
      for (S = 0; S < A.length; ++S) (C = A[S]) !== "removeListener" && this.removeAllListeners(C);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (typeof (b = _[m]) == "function") this.removeListener(m, b);
    else if (b !== void 0) for (S = b.length - 1; S >= 0; S--) this.removeListener(m, b[S]);
    return this;
  }, i.prototype.listeners = function(m) {
    return v(this, m, !0);
  }, i.prototype.rawListeners = function(m) {
    return v(this, m, !1);
  }, i.listenerCount = function(m, b) {
    return typeof m.listenerCount == "function" ? m.listenerCount(b) : O.call(m, b);
  }, i.prototype.listenerCount = O, i.prototype.eventNames = function() {
    return this._eventsCount > 0 ? t(this._events) : [];
  }, tn.exports;
})(), nn = la(yr), li = Object.prototype.hasOwnProperty;
function ui(t, e, n) {
  for (n of t.keys()) if (ae(n, e)) return n;
}
function ae(t, e) {
  var n, r, i;
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
        if ((i = r) && typeof i == "object" && !(i = ui(e, i)) || !e.has(i)) return !1;
      return !0;
    }
    if (n === Map) {
      if (t.size !== e.size) return !1;
      for (r of t)
        if ((i = r[0]) && typeof i == "object" && !(i = ui(e, i)) || !ae(r[1], e.get(i))) return !1;
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
        if (li.call(t, n) && ++r && !li.call(e, n) || !(n in e) || !ae(t[n], e[n])) return !1;
      return Object.keys(e).length === r;
    }
  }
  return t != t && e != e;
}
const ua = { AmazonBot: "amazonbot", "Amazon Silk": "amazon_silk", "Android Browser": "android", BaiduSpider: "baiduspider", Bada: "bada", BingCrawler: "bingcrawler", Brave: "brave", BlackBerry: "blackberry", "ChatGPT-User": "chatgpt_user", Chrome: "chrome", ClaudeBot: "claudebot", Chromium: "chromium", Diffbot: "diffbot", DuckDuckBot: "duckduckbot", DuckDuckGo: "duckduckgo", Electron: "electron", Epiphany: "epiphany", FacebookExternalHit: "facebookexternalhit", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", GPTBot: "gptbot", "Internet Explorer": "ie", InternetArchiveCrawler: "internetarchivecrawler", "K-Meleon": "k_meleon", LibreWolf: "librewolf", Linespider: "linespider", Maxthon: "maxthon", "Meta-ExternalAds": "meta_externalads", "Meta-ExternalAgent": "meta_externalagent", "Meta-ExternalFetcher": "meta_externalfetcher", "Meta-WebIndexer": "meta_webindexer", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", "OAI-SearchBot": "oai_searchbot", Omgilibot: "omgilibot", Opera: "opera", "Opera Coast": "opera_coast", "Pale Moon": "pale_moon", PerplexityBot: "perplexitybot", "Perplexity-User": "perplexity_user", PhantomJS: "phantomjs", PingdomBot: "pingdombot", Puffin: "puffin", QQ: "qq", QQLite: "qqlite", QupZilla: "qupzilla", Roku: "roku", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SlackBot: "slackbot", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", "Sogou Browser": "sogou", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", YahooSlurp: "yahooslurp", "Yandex Browser": "yandex", YandexBot: "yandexbot", YouBot: "youbot" }, as = { amazonbot: "AmazonBot", amazon_silk: "Amazon Silk", android: "Android Browser", baiduspider: "BaiduSpider", bada: "Bada", bingcrawler: "BingCrawler", blackberry: "BlackBerry", brave: "Brave", chatgpt_user: "ChatGPT-User", chrome: "Chrome", claudebot: "ClaudeBot", chromium: "Chromium", diffbot: "Diffbot", duckduckbot: "DuckDuckBot", duckduckgo: "DuckDuckGo", edge: "Microsoft Edge", electron: "Electron", epiphany: "Epiphany", facebookexternalhit: "FacebookExternalHit", firefox: "Firefox", focus: "Focus", generic: "Generic", google_search: "Google Search", googlebot: "Googlebot", gptbot: "GPTBot", ie: "Internet Explorer", internetarchivecrawler: "InternetArchiveCrawler", k_meleon: "K-Meleon", librewolf: "LibreWolf", linespider: "Linespider", maxthon: "Maxthon", meta_externalads: "Meta-ExternalAds", meta_externalagent: "Meta-ExternalAgent", meta_externalfetcher: "Meta-ExternalFetcher", meta_webindexer: "Meta-WebIndexer", mz: "MZ Browser", naver: "NAVER Whale Browser", oai_searchbot: "OAI-SearchBot", omgilibot: "Omgilibot", opera: "Opera", opera_coast: "Opera Coast", pale_moon: "Pale Moon", perplexitybot: "PerplexityBot", perplexity_user: "Perplexity-User", phantomjs: "PhantomJS", pingdombot: "PingdomBot", puffin: "Puffin", qq: "QQ Browser", qqlite: "QQ Browser Lite", qupzilla: "QupZilla", roku: "Roku", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", slackbot: "SlackBot", sleipnir: "Sleipnir", sogou: "Sogou Browser", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yahooslurp: "YahooSlurp", yandex: "Yandex Browser", yandexbot: "YandexBot", youbot: "YouBot" }, D = { bot: "bot", desktop: "desktop", mobile: "mobile", tablet: "tablet", tv: "tv" }, te = { Android: "Android", Bada: "Bada", BlackBerry: "BlackBerry", ChromeOS: "Chrome OS", HarmonyOS: "HarmonyOS", iOS: "iOS", Linux: "Linux", MacOS: "macOS", PlayStation4: "PlayStation 4", Roku: "Roku", Tizen: "Tizen", WebOS: "WebOS", Windows: "Windows", WindowsPhone: "Windows Phone" }, Ue = { Blink: "Blink", EdgeHTML: "EdgeHTML", Gecko: "Gecko", Presto: "Presto", Trident: "Trident", WebKit: "WebKit" };
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
    const r = n[0], i = n[1];
    if (r === 10) switch (i) {
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
    const i = y.getVersionPrecision(e), s = y.getVersionPrecision(n);
    let a = Math.max(i, s), c = 0;
    const l = y.map([e, n], (p) => {
      const g = a - y.getVersionPrecision(p), v = p + new Array(g + 1).join(".0");
      return y.map(v.split("."), (O) => new Array(20 - O.length).join("0") + O).reverse();
    });
    for (r && (c = a - Math.min(i, s)), a -= 1; a >= c; ) {
      if (l[0][a] > l[1][a]) return 1;
      if (l[0][a] === l[1][a]) {
        if (a === c) return 0;
        a -= 1;
      } else if (l[0][a] < l[1][a]) return -1;
    }
  }
  static map(e, n) {
    const r = [];
    let i;
    if (Array.prototype.map) return Array.prototype.map.call(e, n);
    for (i = 0; i < e.length; i += 1) r.push(n(e[i]));
    return r;
  }
  static find(e, n) {
    let r, i;
    if (Array.prototype.find) return Array.prototype.find.call(e, n);
    for (r = 0, i = e.length; r < i; r += 1) {
      const s = e[r];
      if (n(s, r)) return s;
    }
  }
  static assign(e, ...n) {
    const r = e;
    let i, s;
    if (Object.assign) return Object.assign(e, ...n);
    for (i = 0, s = n.length; i < s; i += 1) {
      const a = n[i];
      typeof a == "object" && a !== null && Object.keys(a).forEach((c) => {
        r[c] = a[c];
      });
    }
    return e;
  }
  static getBrowserAlias(e) {
    return ua[e];
  }
  static getBrowserTypeByAlias(e) {
    return as[e] || "";
  }
}
const N = /version\/(\d+(\.?_?\d+)+)/i, da = [{ test: [/gptbot/i], describe(t) {
  const e = { name: "GPTBot" }, n = y.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/chatgpt-user/i], describe(t) {
  const e = { name: "ChatGPT-User" }, n = y.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/oai-searchbot/i], describe(t) {
  const e = { name: "OAI-SearchBot" }, n = y.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe(t) {
  const e = { name: "ClaudeBot" }, n = y.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/omgilibot/i, /webzio-extended/i], describe(t) {
  const e = { name: "Omgilibot" }, n = y.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/diffbot/i], describe(t) {
  const e = { name: "Diffbot" }, n = y.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/perplexitybot/i], describe(t) {
  const e = { name: "PerplexityBot" }, n = y.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/perplexity-user/i], describe(t) {
  const e = { name: "Perplexity-User" }, n = y.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/youbot/i], describe(t) {
  const e = { name: "YouBot" }, n = y.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/meta-webindexer/i], describe(t) {
  const e = { name: "Meta-WebIndexer" }, n = y.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/meta-externalads/i], describe(t) {
  const e = { name: "Meta-ExternalAds" }, n = y.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/meta-externalagent/i], describe(t) {
  const e = { name: "Meta-ExternalAgent" }, n = y.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/meta-externalfetcher/i], describe(t) {
  const e = { name: "Meta-ExternalFetcher" }, n = y.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/googlebot/i], describe(t) {
  const e = { name: "Googlebot" }, n = y.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/linespider/i], describe(t) {
  const e = { name: "Linespider" }, n = y.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/amazonbot/i], describe(t) {
  const e = { name: "AmazonBot" }, n = y.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/bingbot/i], describe(t) {
  const e = { name: "BingCrawler" }, n = y.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/baiduspider/i], describe(t) {
  const e = { name: "BaiduSpider" }, n = y.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/duckduckbot/i], describe(t) {
  const e = { name: "DuckDuckBot" }, n = y.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/ia_archiver/i], describe(t) {
  const e = { name: "InternetArchiveCrawler" }, n = y.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: () => ({ name: "FacebookExternalHit" }) }, { test: [/slackbot/i, /slack-imgProxy/i], describe(t) {
  const e = { name: "SlackBot" }, n = y.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/yahoo!?[\s/]*slurp/i], describe: () => ({ name: "YahooSlurp" }) }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: () => ({ name: "YandexBot" }) }, { test: [/pingdom/i], describe: () => ({ name: "PingdomBot" }) }, { test: [/opera/i], describe(t) {
  const e = { name: "Opera" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/opr\/|opios/i], describe(t) {
  const e = { name: "Opera" }, n = y.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/SamsungBrowser/i], describe(t) {
  const e = { name: "Samsung Internet for Android" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/Whale/i], describe(t) {
  const e = { name: "NAVER Whale Browser" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/PaleMoon/i], describe(t) {
  const e = { name: "Pale Moon" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/MZBrowser/i], describe(t) {
  const e = { name: "MZ Browser" }, n = y.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/focus/i], describe(t) {
  const e = { name: "Focus" }, n = y.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/swing/i], describe(t) {
  const e = { name: "Swing" }, n = y.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/coast/i], describe(t) {
  const e = { name: "Opera Coast" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(t) {
  const e = { name: "Opera Touch" }, n = y.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/yabrowser/i], describe(t) {
  const e = { name: "Yandex Browser" }, n = y.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/ucbrowser/i], describe(t) {
  const e = { name: "UC Browser" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/Maxthon|mxios/i], describe(t) {
  const e = { name: "Maxthon" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/epiphany/i], describe(t) {
  const e = { name: "Epiphany" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/puffin/i], describe(t) {
  const e = { name: "Puffin" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/sleipnir/i], describe(t) {
  const e = { name: "Sleipnir" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/k-meleon/i], describe(t) {
  const e = { name: "K-Meleon" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/micromessenger/i], describe(t) {
  const e = { name: "WeChat" }, n = y.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/qqbrowser/i], describe(t) {
  const e = { name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser" }, n = y.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(N, t);
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
  const e = { name: "BlackBerry" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/(web|hpw)[o0]s/i], describe(t) {
  const e = { name: "WebOS Browser" }, n = y.getFirstMatch(N, t) || y.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/bada/i], describe(t) {
  const e = { name: "Bada" }, n = y.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/tizen/i], describe(t) {
  const e = { name: "Tizen" }, n = y.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/qupzilla/i], describe(t) {
  const e = { name: "QupZilla" }, n = y.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(N, t);
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
  const e = { name: "Sogou Browser" }, n = y.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i, t), r = y.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t), i = y.getFirstMatch(/se ([\d.]+)x/i, t), s = n || r || i;
  return s && (e.version = s), e;
} }, { test: [/MiuiBrowser/i], describe(t) {
  const e = { name: "Miui" }, n = y.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: (t) => !!t.hasBrand("DuckDuckGo") || t.test(/\sDdg\/[\d.]+$/i), describe(t, e) {
  const n = { name: "DuckDuckGo" };
  if (e) {
    const i = e.getBrandVersion("DuckDuckGo");
    if (i) return n.version = i, n;
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
  const e = { name: "Chromium" }, n = y.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(N, t);
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
  const e = { name: "Android Browser" }, n = y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/playstation 4/i], describe(t) {
  const e = { name: "PlayStation 4" }, n = y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/safari|applewebkit/i], describe(t) {
  const e = { name: "Safari" }, n = y.getFirstMatch(N, t);
  return n && (e.version = n), e;
} }, { test: [/.*/i], describe(t) {
  const e = t.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
  return { name: y.getFirstMatch(e, t), version: y.getSecondMatch(e, t) };
} }];
var pa = [{ test: [/Roku\/DVP/], describe(t) {
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
} }], ha = [{ test: [/googlebot/i], describe: () => ({ type: D.bot, vendor: "Google" }) }, { test: [/linespider/i], describe: () => ({ type: D.bot, vendor: "Line" }) }, { test: [/amazonbot/i], describe: () => ({ type: D.bot, vendor: "Amazon" }) }, { test: [/gptbot/i], describe: () => ({ type: D.bot, vendor: "OpenAI" }) }, { test: [/chatgpt-user/i], describe: () => ({ type: D.bot, vendor: "OpenAI" }) }, { test: [/oai-searchbot/i], describe: () => ({ type: D.bot, vendor: "OpenAI" }) }, { test: [/baiduspider/i], describe: () => ({ type: D.bot, vendor: "Baidu" }) }, { test: [/bingbot/i], describe: () => ({ type: D.bot, vendor: "Bing" }) }, { test: [/duckduckbot/i], describe: () => ({ type: D.bot, vendor: "DuckDuckGo" }) }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe: () => ({ type: D.bot, vendor: "Anthropic" }) }, { test: [/omgilibot/i, /webzio-extended/i], describe: () => ({ type: D.bot, vendor: "Webz.io" }) }, { test: [/diffbot/i], describe: () => ({ type: D.bot, vendor: "Diffbot" }) }, { test: [/perplexitybot/i], describe: () => ({ type: D.bot, vendor: "Perplexity AI" }) }, { test: [/perplexity-user/i], describe: () => ({ type: D.bot, vendor: "Perplexity AI" }) }, { test: [/youbot/i], describe: () => ({ type: D.bot, vendor: "You.com" }) }, { test: [/ia_archiver/i], describe: () => ({ type: D.bot, vendor: "Internet Archive" }) }, { test: [/meta-webindexer/i], describe: () => ({ type: D.bot, vendor: "Meta" }) }, { test: [/meta-externalads/i], describe: () => ({ type: D.bot, vendor: "Meta" }) }, { test: [/meta-externalagent/i], describe: () => ({ type: D.bot, vendor: "Meta" }) }, { test: [/meta-externalfetcher/i], describe: () => ({ type: D.bot, vendor: "Meta" }) }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: () => ({ type: D.bot, vendor: "Meta" }) }, { test: [/slackbot/i, /slack-imgProxy/i], describe: () => ({ type: D.bot, vendor: "Slack" }) }, { test: [/yahoo/i], describe: () => ({ type: D.bot, vendor: "Yahoo" }) }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: () => ({ type: D.bot, vendor: "Yandex" }) }, { test: [/pingdom/i], describe: () => ({ type: D.bot, vendor: "Pingdom" }) }, { test: [/huawei/i], describe(t) {
  const e = y.getFirstMatch(/(can-l01)/i, t) && "Nova", n = { type: D.mobile, vendor: "Huawei" };
  return e && (n.model = e), n;
} }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: D.tablet, vendor: "Nexus" }) }, { test: [/ipad/i], describe: () => ({ type: D.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: D.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/kftt build/i], describe: () => ({ type: D.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) }, { test: [/silk/i], describe: () => ({ type: D.tablet, vendor: "Amazon" }) }, { test: [/tablet(?! pc)/i], describe: () => ({ type: D.tablet }) }, { test(t) {
  const e = t.test(/ipod|iphone/i), n = t.test(/like (ipod|iphone)/i);
  return e && !n;
}, describe(t) {
  const e = y.getFirstMatch(/(ipod|iphone)/i, t);
  return { type: D.mobile, vendor: "Apple", model: e };
} }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: D.mobile, vendor: "Nexus" }) }, { test: [/Nokia/i], describe(t) {
  const e = y.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, t), n = { type: D.mobile, vendor: "Nokia" };
  return e && (n.model = e), n;
} }, { test: [/[^-]mobi/i], describe: () => ({ type: D.mobile }) }, { test: (t) => t.getBrowserName(!0) === "blackberry", describe: () => ({ type: D.mobile, vendor: "BlackBerry" }) }, { test: (t) => t.getBrowserName(!0) === "bada", describe: () => ({ type: D.mobile }) }, { test: (t) => t.getBrowserName() === "windows phone", describe: () => ({ type: D.mobile, vendor: "Microsoft" }) }, { test(t) {
  const e = Number(String(t.getOSVersion()).split(".")[0]);
  return t.getOSName(!0) === "android" && e >= 3;
}, describe: () => ({ type: D.tablet }) }, { test: (t) => t.getOSName(!0) === "android", describe: () => ({ type: D.mobile }) }, { test: [/smart-?tv|smarttv/i], describe: () => ({ type: D.tv }) }, { test: [/netcast/i], describe: () => ({ type: D.tv }) }, { test: (t) => t.getOSName(!0) === "macos", describe: () => ({ type: D.desktop, vendor: "Apple" }) }, { test: (t) => t.getOSName(!0) === "windows", describe: () => ({ type: D.desktop }) }, { test: (t) => t.getOSName(!0) === "linux", describe: () => ({ type: D.desktop }) }, { test: (t) => t.getOSName(!0) === "playstation 4", describe: () => ({ type: D.tv }) }, { test: (t) => t.getOSName(!0) === "roku", describe: () => ({ type: D.tv }) }], fa = [{ test: (t) => t.getBrowserName(!0) === "microsoft edge", describe(t) {
  if (/\sedg\//i.test(t)) return { name: Ue.Blink };
  const e = y.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
  return { name: Ue.EdgeHTML, version: e };
} }, { test: [/trident/i], describe(t) {
  const e = { name: Ue.Trident }, n = y.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: (t) => t.test(/presto/i), describe(t) {
  const e = { name: Ue.Presto }, n = y.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test(t) {
  const e = t.test(/gecko/i), n = t.test(/like gecko/i);
  return e && !n;
}, describe(t) {
  const e = { name: Ue.Gecko }, n = y.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }, { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: Ue.Blink }) }, { test: [/(apple)?webkit/i], describe(t) {
  const e = { name: Ue.WebKit }, n = y.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
  return n && (e.version = n), e;
} }];
class di {
  constructor(e, n = !1, r = null) {
    if (e == null || e === "") throw new Error("UserAgent parameter can't be empty");
    this._ua = e;
    let i = !1;
    typeof n == "boolean" ? (i = n, this._hints = r) : this._hints = n != null && typeof n == "object" ? n : null, this.parsedResult = {}, i !== !0 && this.parse();
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
    const n = e.toLowerCase(), r = this._hints.brands.find((i) => i.brand && i.brand.toLowerCase() === n);
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
    const e = y.find(da, (n) => {
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
    const e = y.find(pa, (n) => {
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
    const e = y.find(ha, (n) => {
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
    const e = y.find(fa, (n) => {
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
    const i = {};
    let s = 0;
    if (Object.keys(e).forEach((a) => {
      const c = e[a];
      typeof c == "string" ? (i[a] = c, s += 1) : typeof c == "object" && (n[a] = c, r += 1);
    }), r > 0) {
      const a = Object.keys(n), c = y.find(a, (p) => this.isOS(p));
      if (c) {
        const p = this.satisfies(n[c]);
        if (p !== void 0) return p;
      }
      const l = y.find(a, (p) => this.isPlatform(p));
      if (l) {
        const p = this.satisfies(n[l]);
        if (p !== void 0) return p;
      }
    }
    if (s > 0) {
      const a = Object.keys(i), c = y.find(a, (l) => this.isBrowser(l, !0));
      if (c !== void 0) return this.compareVersion(i[c]);
    }
  }
  isBrowser(e, n = !1) {
    const r = this.getBrowserName().toLowerCase();
    let i = e.toLowerCase();
    const s = y.getBrowserTypeByAlias(i);
    return n && s && (i = s.toLowerCase()), i === r;
  }
  compareVersion(e) {
    let n = [0], r = e, i = !1;
    const s = this.getBrowserVersion();
    if (typeof s == "string") return e[0] === ">" || e[0] === "<" ? (r = e.substr(1), e[1] === "=" ? (i = !0, r = e.substr(2)) : n = [], e[0] === ">" ? n.push(1) : n.push(-1)) : e[0] === "=" ? r = e.substr(1) : e[0] === "~" && (i = !0, r = e.substr(1)), n.indexOf(y.compareVersions(s, r, i)) > -1;
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
class ga {
  static getParser(e, n = !1, r = null) {
    if (typeof e != "string") throw new Error("UserAgent should be a string");
    return new di(e, n, r);
  }
  static parse(e, n = null) {
    return new di(e, n).getResult();
  }
  static get BROWSER_MAP() {
    return as;
  }
  static get ENGINE_MAP() {
    return Ue;
  }
  static get OS_MAP() {
    return te;
  }
  static get PLATFORMS_MAP() {
    return D;
  }
}
function cs(t) {
  return (function(e) {
    if (Array.isArray(e)) return vr(e);
  })(t) || (function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  })(t) || ss(t) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function $n() {
  return Date.now() + Math.random().toString();
}
function Dt() {
  throw new Error("Method must be implemented in subclass");
}
var re = ["daily.co", "dailywebrtc.com", "dailywebrtc.net"], ge = null;
function ma() {
  return ge;
}
function ls(t) {
  (t === null || re.includes(t)) && (ge = t);
}
function zr(t) {
  try {
    var e = new URL(t).hostname;
    return re.find(function(n) {
      return e === n || e.endsWith(".".concat(n));
    }) || null;
  } catch {
    return null;
  }
}
function us(t, e) {
  return e != null && e.proxyUrl ? e.proxyUrl + (e.proxyUrl.slice(-1) === "/" ? "" : "/") + t.substring(8) : t;
}
function Yn(t, e) {
  var n = re.find(function(r) {
    return t.includes(r);
  });
  return n ? t.replace(n, e) : t;
}
function Tn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ge ?? re[0];
  if (t != null && t.callObjectBundleUrlOverride) return console.warn("The callObjectBundleUrlOverride property is deprecated and will be removed. Please use bundlePathOverride instead. When providing a bundlePathOverride, the URL should point to the directory containing all Daily bundles (call-machine-object-bundle.js and audio-processor-bundle.js)."), Yn(t.callObjectBundleUrlOverride, e);
  var n = (function(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ge ?? re[0];
    if (i && i.trim() !== "" || (i = ge ?? re[0]), r != null && r.bundlePathOverride) {
      var s = Yn(r.bundlePathOverride, i);
      return s.endsWith("/") ? s.slice(0, -1) : s;
    }
    if (r != null && r.callObjectBundleUrlOverride) {
      var a = Yn(r.callObjectBundleUrlOverride, i), c = a.substring(0, a.lastIndexOf("/"));
      return c.endsWith("/") ? c.slice(0, -1) : c;
    }
    var l = us("https://c.".concat(i, "/call-machine/versioned/", "0.94.0", "/static"), r);
    return l.endsWith("/") ? l.slice(0, -1) : l;
  })(t, e) + "/call-machine-object-bundle.js";
  return n;
}
function ds(t) {
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
function ps(t) {
  try {
    var e, n = t ?? window.location.hostname;
    return (e = re.find(function(r) {
      return n === r || n.endsWith(".".concat(r));
    })) !== null && e !== void 0 ? e : null;
  } catch {
    return null;
  }
}
function va(t, e) {
  var n, r = zr(t);
  if (!r || ds(e)) return [t];
  var i = (n = ge ?? ps()) !== null && n !== void 0 ? n : re[0];
  return (i === re[0] ? re : [i].concat(cs(re.filter(function(s) {
    return s !== i;
  })))).map(function(s) {
    return s === r ? t : (function(a, c, l) {
      try {
        var p = new URL(a);
        return p.hostname.endsWith(".".concat(c)) ? p.hostname = p.hostname.slice(0, -c.length) + l : p.hostname === c && (p.hostname = l), p.toString();
      } catch {
        return a;
      }
    })(t, r, s);
  });
}
function On(t) {
  try {
    new URL(t);
  } catch {
    return !1;
  }
  return !0;
}
const W = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, tt = "8.55.2", q = globalThis;
function Pn(t, e, n) {
  const r = q, i = r.__SENTRY__ = r.__SENTRY__ || {}, s = i[tt] = i[tt] || {};
  return s[t] || (s[t] = e());
}
const lt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, br = ["debug", "info", "warn", "error", "log", "assert", "trace"], xn = {};
function zt(t) {
  if (!("console" in q)) return t();
  const e = q.console, n = {}, r = Object.keys(xn);
  r.forEach((i) => {
    const s = xn[i];
    n[i] = e[i], e[i] = s;
  });
  try {
    return t();
  } finally {
    r.forEach((i) => {
      e[i] = n[i];
    });
  }
}
const B = Pn("logger", function() {
  let t = !1;
  const e = { enable: () => {
    t = !0;
  }, disable: () => {
    t = !1;
  }, isEnabled: () => t };
  return lt ? br.forEach((n) => {
    e[n] = (...r) => {
      t && zt(() => {
        q.console[n](`Sentry Logger [${n}]:`, ...r);
      });
    };
  }) : br.forEach((n) => {
    e[n] = () => {
    };
  }), e;
}), et = "?", pi = /\(error: (.*)\)/, hi = /captureMessage|captureException/;
function rn(t) {
  return t[t.length - 1] || {};
}
const fi = "<anonymous>";
function qe(t) {
  try {
    return t && typeof t == "function" && t.name || fi;
  } catch {
    return fi;
  }
}
function gi(t) {
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
const _n = {}, mi = {};
function nt(t, e) {
  _n[t] = _n[t] || [], _n[t].push(e);
}
function rt(t, e) {
  if (!mi[t]) {
    mi[t] = !0;
    try {
      e();
    } catch (n) {
      lt && B.error(`Error while instrumenting ${t}`, n);
    }
  }
}
function Se(t, e) {
  const n = t && _n[t];
  if (n) for (const r of n) try {
    r(e);
  } catch (i) {
    lt && B.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${qe(r)}
Error:`, i);
  }
}
let Qn = null;
function ya() {
  Qn = q.onerror, q.onerror = function(t, e, n, r, i) {
    return Se("error", { column: r, error: i, line: n, msg: t, url: e }), !!Qn && Qn.apply(this, arguments);
  }, q.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let Kn = null;
function ba() {
  Kn = q.onunhandledrejection, q.onunhandledrejection = function(t) {
    return Se("unhandledrejection", t), !Kn || Kn.apply(this, arguments);
  }, q.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
function Un() {
  return Wr(q), q;
}
function Wr(t) {
  const e = t.__SENTRY__ = t.__SENTRY__ || {};
  return e.version = e.version || tt, e[tt] = e[tt] || {};
}
const hs = Object.prototype.toString;
function Hr(t) {
  switch (hs.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return ot(t, Error);
  }
}
function xt(t, e) {
  return hs.call(t) === `[object ${e}]`;
}
function fs(t) {
  return xt(t, "ErrorEvent");
}
function vi(t) {
  return xt(t, "DOMError");
}
function Le(t) {
  return xt(t, "String");
}
function Gr(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function _r(t) {
  return t === null || Gr(t) || typeof t != "object" && typeof t != "function";
}
function Mt(t) {
  return xt(t, "Object");
}
function Vn(t) {
  return typeof Event < "u" && ot(t, Event);
}
function Jn(t) {
  return !!(t && t.then && typeof t.then == "function");
}
function ot(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function gs(t) {
  return !(typeof t != "object" || t === null || !t.__isVue && !t._isVue);
}
const Yr = q;
function ms(t, e = {}) {
  if (!t) return "<unknown>";
  try {
    let n = t;
    const r = 5, i = [];
    let s = 0, a = 0;
    const c = " > ", l = c.length;
    let p;
    const g = Array.isArray(e) ? e : e.keyAttrs, v = !Array.isArray(e) && e.maxStringLength || 80;
    for (; n && s++ < r && (p = _a(n, g), !(p === "html" || s > 1 && a + i.length * l + p.length >= v)); ) i.push(p), a += p.length, n = n.parentNode;
    return i.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function _a(t, e) {
  const n = t, r = [];
  if (!n || !n.tagName) return "";
  if (Yr.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  r.push(n.tagName.toLowerCase());
  const i = e && e.length ? e.filter((a) => n.getAttribute(a)).map((a) => [a, n.getAttribute(a)]) : null;
  if (i && i.length) i.forEach((a) => {
    r.push(`[${a[0]}="${a[1]}"]`);
  });
  else {
    n.id && r.push(`#${n.id}`);
    const a = n.className;
    if (a && Le(a)) {
      const c = a.split(/\s+/);
      for (const l of c) r.push(`.${l}`);
    }
  }
  const s = ["aria-label", "type", "name", "title", "alt"];
  for (const a of s) {
    const c = n.getAttribute(a);
    c && r.push(`[${a}="${c}"]`);
  }
  return r.join("");
}
function _t(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`;
}
function yi(t, e) {
  if (!Array.isArray(t)) return "";
  const n = [];
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    try {
      gs(i) ? n.push("[VueViewModel]") : n.push(String(i));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(e);
}
function wa(t, e, n = !1) {
  return !!Le(t) && (xt(e, "RegExp") ? e.test(t) : !!Le(e) && (n ? t === e : t.includes(e)));
}
function on(t, e = [], n = !1) {
  return e.some((r) => wa(t, r, n));
}
function pe(t, e, n) {
  if (!(e in t)) return;
  const r = t[e], i = n(r);
  typeof i == "function" && vs(i, r);
  try {
    t[e] = i;
  } catch {
    lt && B.log(`Failed to replace method "${e}" in object`, t);
  }
}
function st(t, e, n) {
  try {
    Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
  } catch {
    lt && B.log(`Failed to add non-enumerable property "${e}" to object`, t);
  }
}
function vs(t, e) {
  try {
    const n = e.prototype || {};
    t.prototype = e.prototype = n, st(t, "__sentry_original__", e);
  } catch {
  }
}
function Qr(t) {
  return t.__sentry_original__;
}
function ys(t) {
  if (Hr(t)) return { message: t.message, name: t.name, stack: t.stack, ..._i(t) };
  if (Vn(t)) {
    const e = { type: t.type, target: bi(t.target), currentTarget: bi(t.currentTarget), ..._i(t) };
    return typeof CustomEvent < "u" && ot(t, CustomEvent) && (e.detail = t.detail), e;
  }
  return t;
}
function bi(t) {
  try {
    return e = t, typeof Element < "u" && ot(e, Element) ? ms(t) : Object.prototype.toString.call(t);
  } catch {
    return "<unknown>";
  }
  var e;
}
function _i(t) {
  if (typeof t == "object" && t !== null) {
    const e = {};
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  }
  return {};
}
function ve(t) {
  return wr(t, /* @__PURE__ */ new Map());
}
function wr(t, e) {
  if ((function(n) {
    if (!Mt(n)) return !1;
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
    for (const i of Object.getOwnPropertyNames(t)) t[i] !== void 0 && (r[i] = wr(t[i], e));
    return r;
  }
  if (Array.isArray(t)) {
    const n = e.get(t);
    if (n !== void 0) return n;
    const r = [];
    return e.set(t, r), t.forEach((i) => {
      r.push(wr(i, e));
    }), r;
  }
  return t;
}
function Wt() {
  return Date.now() / 1e3;
}
const Fe = (function() {
  const { performance: t } = q;
  if (!t || !t.now) return Wt;
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
function bs(t) {
  return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}
function Ve(t) {
  const { message: e, event_id: n } = t;
  if (e) return e;
  const r = bs(t);
  return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
}
function kr(t, e, n) {
  const r = t.exception = t.exception || {}, i = r.values = r.values || [], s = i[0] = i[0] || {};
  s.value || (s.value = e || ""), s.type || (s.type = "Error");
}
function Et(t, e) {
  const n = bs(t);
  if (!n) return;
  const r = n.mechanism;
  if (n.mechanism = { type: "generic", handled: !0, ...r, ...e }, e && "data" in e) {
    const i = { ...r && r.data, ...e.data };
    n.mechanism.data = i;
  }
}
function wi(t) {
  if ((function(e) {
    try {
      return e.__sentry_captured__;
    } catch {
    }
  })(t)) return !0;
  try {
    st(t, "__sentry_captured__", !0);
  } catch {
  }
  return !1;
}
var Ie;
function at(t) {
  return new me((e) => {
    e(t);
  });
}
function An(t) {
  return new me((e, n) => {
    n(t);
  });
}
(() => {
  const { performance: t } = q;
  !t || !t.now || (t.now(), t.timing && t.timing.navigationStart);
})(), (function(t) {
  t[t.PENDING = 0] = "PENDING", t[t.RESOLVED = 1] = "RESOLVED", t[t.REJECTED = 2] = "REJECTED";
})(Ie || (Ie = {}));
class me {
  constructor(e) {
    me.prototype.__init.call(this), me.prototype.__init2.call(this), me.prototype.__init3.call(this), me.prototype.__init4.call(this), this._state = Ie.PENDING, this._handlers = [];
    try {
      e(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(e, n) {
    return new me((r, i) => {
      this._handlers.push([!1, (s) => {
        if (e) try {
          r(e(s));
        } catch (a) {
          i(a);
        }
        else r(s);
      }, (s) => {
        if (n) try {
          r(n(s));
        } catch (a) {
          i(a);
        }
        else i(s);
      }]), this._executeHandlers();
    });
  }
  catch(e) {
    return this.then((n) => n, e);
  }
  finally(e) {
    return new me((n, r) => {
      let i, s;
      return this.then((a) => {
        s = !1, i = a, e && e();
      }, (a) => {
        s = !0, i = a, e && e();
      }).then(() => {
        s ? r(i) : n(i);
      });
    });
  }
  __init() {
    this._resolve = (e) => {
      this._setResult(Ie.RESOLVED, e);
    };
  }
  __init2() {
    this._reject = (e) => {
      this._setResult(Ie.REJECTED, e);
    };
  }
  __init3() {
    this._setResult = (e, n) => {
      this._state === Ie.PENDING && (Jn(n) ? n.then(this._resolve, this._reject) : (this._state = e, this._value = n, this._executeHandlers()));
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Ie.PENDING) return;
      const e = this._handlers.slice();
      this._handlers = [], e.forEach((n) => {
        n[0] || (this._state === Ie.RESOLVED && n[1](this._value), this._state === Ie.REJECTED && n[2](this._value), n[0] = !0);
      });
    };
  }
}
function ka(t) {
  const e = Fe(), n = { sid: ye(), init: !0, timestamp: e, started: e, duration: 0, status: "ok", errors: 0, ignoreDuration: !1, toJSON: () => (function(r) {
    return ve({ sid: `${r.sid}`, init: r.init, started: new Date(1e3 * r.started).toISOString(), timestamp: new Date(1e3 * r.timestamp).toISOString(), status: r.status, errors: r.errors, did: typeof r.did == "number" || typeof r.did == "string" ? `${r.did}` : void 0, duration: r.duration, abnormal_mechanism: r.abnormal_mechanism, attrs: { release: r.release, environment: r.environment, ip_address: r.ipAddress, user_agent: r.userAgent } });
  })(n) };
  return t && Ct(n, t), n;
}
function Ct(t, e = {}) {
  if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Fe(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : ye()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
  else if (typeof e.duration == "number") t.duration = e.duration;
  else {
    const n = t.timestamp - t.started;
    t.duration = n >= 0 ? n : 0;
  }
  e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status);
}
function ki() {
  return ye();
}
function Sr() {
  return ye().substring(16);
}
function qn(t, e, n = 2) {
  if (!e || typeof e != "object" || n <= 0) return e;
  if (t && e && Object.keys(e).length === 0) return t;
  const r = { ...t };
  for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = qn(r[i], e[i], n - 1));
  return r;
}
const Mr = "_sentrySpan";
function Si(t, e) {
  e ? st(t, Mr, e) : delete t[Mr];
}
function Mi(t) {
  return t[Mr];
}
class Kr {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = { traceId: ki(), spanId: Sr() };
  }
  clone() {
    const e = new Kr();
    return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags }, e._extra = { ...this._extra }, e._contexts = { ...this._contexts }, this._contexts.flags && (e._contexts.flags = { values: [...this._contexts.flags.values] }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, e._propagationContext = { ...this._propagationContext }, e._client = this._client, e._lastEventId = this._lastEventId, Si(e, Mi(this)), e;
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
    return this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && Ct(this._session, { user: e }), this._notifyScopeListeners(), this;
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
    const n = typeof e == "function" ? e(this) : e, [r, i] = n instanceof ze ? [n.getScopeData(), n.getRequestSession()] : Mt(n) ? [e, e.requestSession] : [], { tags: s, extra: a, user: c, contexts: l, level: p, fingerprint: g = [], propagationContext: v } = r || {};
    return this._tags = { ...this._tags, ...s }, this._extra = { ...this._extra, ...a }, this._contexts = { ...this._contexts, ...l }, c && Object.keys(c).length && (this._user = c), p && (this._level = p), g.length && (this._fingerprint = g), v && (this._propagationContext = v), i && (this._requestSession = i), this;
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, Si(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: ki() }), this._notifyScopeListeners(), this;
  }
  addBreadcrumb(e, n) {
    const r = typeof n == "number" ? n : 100;
    if (r <= 0) return this;
    const i = { timestamp: Wt(), ...e };
    return this._breadcrumbs.push(i), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
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
    return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: Mi(this) };
  }
  setSDKProcessingMetadata(e) {
    return this._sdkProcessingMetadata = qn(this._sdkProcessingMetadata, e, 2), this;
  }
  setPropagationContext(e) {
    return this._propagationContext = { spanId: Sr(), ...e }, this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, n) {
    const r = n && n.event_id ? n.event_id : ye();
    if (!this._client) return B.warn("No client configured on scope - will not capture exception!"), r;
    const i = new Error("Sentry syntheticException");
    return this._client.captureException(e, { originalException: e, syntheticException: i, ...n, event_id: r }, this), r;
  }
  captureMessage(e, n, r) {
    const i = r && r.event_id ? r.event_id : ye();
    if (!this._client) return B.warn("No client configured on scope - will not capture message!"), i;
    const s = new Error(e);
    return this._client.captureMessage(e, n, { originalException: e, syntheticException: s, ...r, event_id: i }, this), i;
  }
  captureEvent(e, n) {
    const r = n && n.event_id ? n.event_id : ye();
    return this._client ? (this._client.captureEvent(e, { ...n, event_id: r }, this), r) : (B.warn("No client configured on scope - will not capture event!"), r);
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e) => {
      e(this);
    }), this._notifyingListeners = !1);
  }
}
const ze = Kr;
class Sa {
  constructor(e, n) {
    let r, i;
    r = e || new ze(), i = n || new ze(), this._stack = [{ scope: r }], this._isolationScope = i;
  }
  withScope(e) {
    const n = this._pushScope();
    let r;
    try {
      r = e(n);
    } catch (i) {
      throw this._popScope(), i;
    }
    return Jn(r) ? r.then((i) => (this._popScope(), i), (i) => {
      throw this._popScope(), i;
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
function Tt() {
  const t = Wr(Un());
  return t.stack = t.stack || new Sa(Pn("defaultCurrentScope", () => new ze()), Pn("defaultIsolationScope", () => new ze()));
}
function Ma(t) {
  return Tt().withScope(t);
}
function Ea(t, e) {
  const n = Tt();
  return n.withScope(() => (n.getStackTop().scope = t, e(t)));
}
function Ei(t) {
  return Tt().withScope(() => t(Tt().getIsolationScope()));
}
function Xr(t) {
  const e = Wr(t);
  return e.acs ? e.acs : { withIsolationScope: Ei, withScope: Ma, withSetScope: Ea, withSetIsolationScope: (n, r) => Ei(r), getCurrentScope: () => Tt().getScope(), getIsolationScope: () => Tt().getIsolationScope() };
}
function ut() {
  return Xr(Un()).getCurrentScope();
}
function Ht() {
  return Xr(Un()).getIsolationScope();
}
function ne() {
  return ut().getClient();
}
function Ca(t) {
  const e = t.getPropagationContext(), { traceId: n, spanId: r, parentSpanId: i } = e;
  return ve({ trace_id: n, span_id: r, parent_span_id: i });
}
function Ta(t) {
  const e = t._sentryMetrics;
  if (!e) return;
  const n = {};
  for (const [, [r, i]] of e)
    (n[r] || (n[r] = [])).push(ve(i));
  return n;
}
const Oa = /^sentry-/;
function Pa(t) {
  const e = (function(r) {
    if (!(!r || !Le(r) && !Array.isArray(r)))
      return Array.isArray(r) ? r.reduce((i, s) => {
        const a = Ci(s);
        return Object.entries(a).forEach(([c, l]) => {
          i[c] = l;
        }), i;
      }, {}) : Ci(r);
  })(t);
  if (!e) return;
  const n = Object.entries(e).reduce((r, [i, s]) => (i.match(Oa) && (r[i.slice(7)] = s), r), {});
  return Object.keys(n).length > 0 ? n : void 0;
}
function Ci(t) {
  return t.split(",").map((e) => e.split("=").map((n) => decodeURIComponent(n.trim()))).reduce((e, [n, r]) => (n && r && (e[n] = r), e), {});
}
let Ti = !1;
function xa(t) {
  const { spanId: e, traceId: n, isRemote: r } = t.spanContext();
  return ve({ parent_span_id: r ? e : Zr(t).parent_span_id, span_id: r ? Sr() : e, trace_id: n });
}
function Oi(t) {
  return typeof t == "number" ? Pi(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? Pi(t.getTime()) : Fe();
}
function Pi(t) {
  return t > 9999999999 ? t / 1e3 : t;
}
function Zr(t) {
  if ((function(e) {
    return typeof e.getSpanJSON == "function";
  })(t)) return t.getSpanJSON();
  try {
    const { spanId: e, traceId: n } = t.spanContext();
    if ((function(r) {
      const i = r;
      return !!(i.attributes && i.startTime && i.name && i.endTime && i.status);
    })(t)) {
      const { attributes: r, startTime: i, name: s, endTime: a, parentSpanId: c, status: l } = t;
      return ve({ span_id: e, trace_id: n, data: r, description: s, parent_span_id: c, start_timestamp: Oi(i), timestamp: Oi(a) || void 0, status: Aa(l), op: r["sentry.op"], origin: r["sentry.origin"], _metrics_summary: Ta(t) });
    }
    return { span_id: e, trace_id: n };
  } catch {
    return {};
  }
}
function Aa(t) {
  if (t && t.code !== 0) return t.code === 1 ? "ok" : t.message || "unknown_error";
}
function _s(t) {
  return t._sentryRootSpan || t;
}
function Ia() {
  Ti || (zt(() => {
    console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
  }), Ti = !0);
}
const ei = "production";
function ws(t, e) {
  const n = e.getOptions(), { publicKey: r } = e.getDsn() || {}, i = ve({ environment: n.environment || ei, release: n.release, public_key: r, trace_id: t });
  return e.emit("createDsc", i), i;
}
function ja(t) {
  const e = ne();
  if (!e) return {};
  const n = _s(t), r = n._frozenDsc;
  if (r) return r;
  const i = n.spanContext().traceState, s = i && i.get("sentry.dsc"), a = s && Pa(s);
  if (a) return a;
  const c = ws(t.spanContext().traceId, e), l = Zr(n), p = l.data || {}, g = p["sentry.sample_rate"];
  g != null && (c.sample_rate = `${g}`);
  const v = p["sentry.source"], O = l.description;
  return v !== "url" && O && (c.transaction = O), (function(E) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const w = ne(), m = w && w.getOptions();
    return !!m && (m.enableTracing || "tracesSampleRate" in m || "tracesSampler" in m);
  })() && (c.sampled = String((function(E) {
    const { traceFlags: w } = E.spanContext();
    return w === 1;
  })(n))), e.emit("createDsc", c, n), c;
}
const La = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function In(t, e = !1) {
  const { host: n, path: r, pass: i, port: s, projectId: a, protocol: c, publicKey: l } = t;
  return `${c}://${l}${e && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${a}`;
}
function xi(t) {
  return { protocol: t.protocol, publicKey: t.publicKey || "", pass: t.pass || "", host: t.host, port: t.port || "", path: t.path || "", projectId: t.projectId };
}
function Da(t) {
  const e = typeof t == "string" ? (function(n) {
    const r = La.exec(n);
    if (!r) return void zt(() => {
      console.error(`Invalid Sentry Dsn: ${n}`);
    });
    const [i, s, a = "", c = "", l = "", p = ""] = r.slice(1);
    let g = "", v = p;
    const O = v.split("/");
    if (O.length > 1 && (g = O.slice(0, -1).join("/"), v = O.pop()), v) {
      const E = v.match(/^\d+/);
      E && (v = E[0]);
    }
    return xi({ host: c, pass: a, path: g, projectId: v, port: l, protocol: i, publicKey: s });
  })(t) : xi(t);
  if (e && (function(n) {
    if (!lt) return !0;
    const { port: r, projectId: i, protocol: s } = n;
    return !(["protocol", "publicKey", "host", "projectId"].find((a) => !n[a] && (B.error(`Invalid Sentry Dsn: ${a} missing`), !0)) || (i.match(/^\d+$/) ? /* @__PURE__ */ (function(a) {
      return a === "http" || a === "https";
    })(s) ? r && isNaN(parseInt(r, 10)) && (B.error(`Invalid Sentry Dsn: Invalid port ${r}`), 1) : (B.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), 1) : (B.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), 1)));
  })(e)) return e;
}
function je(t, e = 100, n = 1 / 0) {
  try {
    return Er("", t, e, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function ks(t, e = 3, n = 102400) {
  const r = je(t, e);
  return i = r, (function(s) {
    return ~-encodeURI(s).split(/%..|./).length;
  })(JSON.stringify(i)) > n ? ks(t, e - 1, n) : r;
  var i;
}
function Er(t, e, n = 1 / 0, r = 1 / 0, i = /* @__PURE__ */ (function() {
  const s = typeof WeakSet == "function", a = s ? /* @__PURE__ */ new WeakSet() : [];
  return [function(c) {
    if (s) return !!a.has(c) || (a.add(c), !1);
    for (let l = 0; l < a.length; l++) if (a[l] === c) return !0;
    return a.push(c), !1;
  }, function(c) {
    if (s) a.delete(c);
    else for (let l = 0; l < a.length; l++) if (a[l] === c) {
      a.splice(l, 1);
      break;
    }
  }];
})()) {
  const [s, a] = i;
  if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) return e;
  const c = (function(E, w) {
    try {
      if (E === "domain" && w && typeof w == "object" && w._events) return "[Domain]";
      if (E === "domainEmitter") return "[DomainEmitter]";
      if (typeof global < "u" && w === global) return "[Global]";
      if (typeof window < "u" && w === window) return "[Window]";
      if (typeof document < "u" && w === document) return "[Document]";
      if (gs(w)) return "[VueViewModel]";
      if (Mt(m = w) && "nativeEvent" in m && "preventDefault" in m && "stopPropagation" in m) return "[SyntheticEvent]";
      if (typeof w == "number" && !Number.isFinite(w)) return `[${w}]`;
      if (typeof w == "function") return `[Function: ${qe(w)}]`;
      if (typeof w == "symbol") return `[${String(w)}]`;
      if (typeof w == "bigint") return `[BigInt: ${String(w)}]`;
      const b = (function(_) {
        const S = Object.getPrototypeOf(_);
        return S ? S.constructor.name : "null prototype";
      })(w);
      return /^HTML(\w*)Element$/.test(b) ? `[HTMLElement: ${b}]` : `[object ${b}]`;
    } catch (b) {
      return `**non-serializable** (${b})`;
    }
    var m;
  })(t, e);
  if (!c.startsWith("[object ")) return c;
  if (e.__sentry_skip_normalization__) return e;
  const l = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
  if (l === 0) return c.replace("object ", "");
  if (s(e)) return "[Circular ~]";
  const p = e;
  if (p && typeof p.toJSON == "function") try {
    return Er("", p.toJSON(), l - 1, r, i);
  } catch {
  }
  const g = Array.isArray(e) ? [] : {};
  let v = 0;
  const O = ys(e);
  for (const E in O) {
    if (!Object.prototype.hasOwnProperty.call(O, E)) continue;
    if (v >= r) {
      g[E] = "[MaxProperties ~]";
      break;
    }
    const w = O[E];
    g[E] = Er(E, w, l - 1, r, i), v++;
  }
  return a(e), g;
}
function qt(t, e = []) {
  return [t, e];
}
function Na(t, e) {
  const [n, r] = t;
  return [n, [...r, e]];
}
function Ai(t, e) {
  const n = t[1];
  for (const r of n)
    if (e(r, r[0].type)) return !0;
  return !1;
}
function Cr(t) {
  return q.__SENTRY__ && q.__SENTRY__.encodePolyfill ? q.__SENTRY__.encodePolyfill(t) : new TextEncoder().encode(t);
}
function Fa(t) {
  const [e, n] = t;
  let r = JSON.stringify(e);
  function i(s) {
    typeof r == "string" ? r = typeof s == "string" ? r + s : [Cr(r), s] : r.push(typeof s == "string" ? Cr(s) : s);
  }
  for (const s of n) {
    const [a, c] = s;
    if (i(`
${JSON.stringify(a)}
`), typeof c == "string" || c instanceof Uint8Array) i(c);
    else {
      let l;
      try {
        l = JSON.stringify(c);
      } catch {
        l = JSON.stringify(je(c));
      }
      i(l);
    }
  }
  return typeof r == "string" ? r : (function(s) {
    const a = s.reduce((p, g) => p + g.length, 0), c = new Uint8Array(a);
    let l = 0;
    for (const p of s) c.set(p, l), l += p.length;
    return c;
  })(r);
}
function Ba(t) {
  const e = typeof t.data == "string" ? Cr(t.data) : t.data;
  return [ve({ type: "attachment", length: e.length, filename: t.filename, content_type: t.contentType, attachment_type: t.attachmentType }), e];
}
const Ra = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket", raw_security: "security" };
function Ii(t) {
  return Ra[t];
}
function Ss(t) {
  if (!t || !t.sdk) return;
  const { name: e, version: n } = t.sdk;
  return { name: e, version: n };
}
function $a(t, e, n, r) {
  const i = Ss(n), s = t.type && t.type !== "replay_event" ? t.type : "event";
  (function(c, l) {
    l && (c.sdk = c.sdk || {}, c.sdk.name = c.sdk.name || l.name, c.sdk.version = c.sdk.version || l.version, c.sdk.integrations = [...c.sdk.integrations || [], ...l.integrations || []], c.sdk.packages = [...c.sdk.packages || [], ...l.packages || []]);
  })(t, n && n.sdk);
  const a = (function(c, l, p, g) {
    const v = c.sdkProcessingMetadata && c.sdkProcessingMetadata.dynamicSamplingContext;
    return { event_id: c.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...l && { sdk: l }, ...!!p && g && { dsn: In(g) }, ...v && { trace: ve({ ...v }) } };
  })(t, i, r, e);
  return delete t.sdkProcessingMetadata, qt(a, [[{ type: s }, t]]);
}
function Tr(t, e, n, r = 0) {
  return new me((i, s) => {
    const a = t[r];
    if (e === null || typeof a != "function") i(e);
    else {
      const c = a({ ...e }, n);
      W && a.id && c === null && B.log(`Event processor "${a.id}" dropped event`), Jn(c) ? c.then((l) => Tr(t, l, n, r + 1).then(i)).then(null, s) : Tr(t, c, n, r + 1).then(i).then(null, s);
    }
  });
}
let sn, ji, Xn;
function Ua(t, e) {
  const { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: s } = e;
  (function(a, c) {
    const { extra: l, tags: p, user: g, contexts: v, level: O, transactionName: E } = c, w = ve(l);
    w && Object.keys(w).length && (a.extra = { ...w, ...a.extra });
    const m = ve(p);
    m && Object.keys(m).length && (a.tags = { ...m, ...a.tags });
    const b = ve(g);
    b && Object.keys(b).length && (a.user = { ...b, ...a.user });
    const _ = ve(v);
    _ && Object.keys(_).length && (a.contexts = { ..._, ...a.contexts }), O && (a.level = O), E && a.type !== "transaction" && (a.transaction = E);
  })(t, e), r && (function(a, c) {
    a.contexts = { trace: xa(c), ...a.contexts }, a.sdkProcessingMetadata = { dynamicSamplingContext: ja(c), ...a.sdkProcessingMetadata };
    const l = _s(c), p = Zr(l).description;
    p && !a.transaction && a.type === "transaction" && (a.transaction = p);
  })(t, r), (function(a, c) {
    a.fingerprint = a.fingerprint ? Array.isArray(a.fingerprint) ? a.fingerprint : [a.fingerprint] : [], c && (a.fingerprint = a.fingerprint.concat(c)), a.fingerprint && !a.fingerprint.length && delete a.fingerprint;
  })(t, n), (function(a, c) {
    const l = [...a.breadcrumbs || [], ...c];
    a.breadcrumbs = l.length ? l : void 0;
  })(t, i), (function(a, c) {
    a.sdkProcessingMetadata = { ...a.sdkProcessingMetadata, ...c };
  })(t, s);
}
function Li(t, e) {
  const { extra: n, tags: r, user: i, contexts: s, level: a, sdkProcessingMetadata: c, breadcrumbs: l, fingerprint: p, eventProcessors: g, attachments: v, propagationContext: O, transactionName: E, span: w } = e;
  an(t, "extra", n), an(t, "tags", r), an(t, "user", i), an(t, "contexts", s), t.sdkProcessingMetadata = qn(t.sdkProcessingMetadata, c, 2), a && (t.level = a), E && (t.transactionName = E), w && (t.span = w), l.length && (t.breadcrumbs = [...t.breadcrumbs, ...l]), p.length && (t.fingerprint = [...t.fingerprint, ...p]), g.length && (t.eventProcessors = [...t.eventProcessors, ...g]), v.length && (t.attachments = [...t.attachments, ...v]), t.propagationContext = { ...t.propagationContext, ...O };
}
function an(t, e, n) {
  t[e] = qn(t[e], n, 1);
}
function Va(t, e, n, r, i, s) {
  const { normalizeDepth: a = 3, normalizeMaxBreadth: c = 1e3 } = t, l = { ...e, event_id: e.event_id || n.event_id || ye(), timestamp: e.timestamp || Wt() }, p = n.integrations || t.integrations.map((w) => w.name);
  (function(w, m) {
    const { environment: b, release: _, dist: S, maxValueLength: C = 250 } = m;
    w.environment = w.environment || b || ei, !w.release && _ && (w.release = _), !w.dist && S && (w.dist = S), w.message && (w.message = _t(w.message, C));
    const A = w.exception && w.exception.values && w.exception.values[0];
    A && A.value && (A.value = _t(A.value, C));
    const x = w.request;
    x && x.url && (x.url = _t(x.url, C));
  })(l, t), (function(w, m) {
    m.length > 0 && (w.sdk = w.sdk || {}, w.sdk.integrations = [...w.sdk.integrations || [], ...m]);
  })(l, p), i && i.emit("applyFrameMetadata", e), e.type === void 0 && (function(w, m) {
    const b = (function(_) {
      const S = q._sentryDebugIds;
      if (!S) return {};
      const C = Object.keys(S);
      return Xn && C.length === ji || (ji = C.length, Xn = C.reduce((A, x) => {
        sn || (sn = {});
        const j = sn[x];
        if (j) A[j[0]] = j[1];
        else {
          const L = _(x);
          for (let Y = L.length - 1; Y >= 0; Y--) {
            const _e = L[Y], we = _e && _e.filename, Ee = S[x];
            if (we && Ee) {
              A[we] = Ee, sn[x] = [we, Ee];
              break;
            }
          }
        }
        return A;
      }, {})), Xn;
    })(m);
    try {
      w.exception.values.forEach((_) => {
        _.stacktrace.frames.forEach((S) => {
          b && S.filename && (S.debug_id = b[S.filename]);
        });
      });
    } catch {
    }
  })(l, t.stackParser);
  const g = (function(w, m) {
    if (!m) return w;
    const b = w ? w.clone() : new ze();
    return b.update(m), b;
  })(r, n.captureContext);
  n.mechanism && Et(l, n.mechanism);
  const v = i ? i.getEventProcessors() : [], O = Pn("globalScope", () => new ze()).getScopeData();
  s && Li(O, s.getScopeData()), g && Li(O, g.getScopeData());
  const E = [...n.attachments || [], ...O.attachments];
  return E.length && (n.attachments = E), Ua(l, O), Tr([...v, ...O.eventProcessors], l, n).then((w) => (w && (function(m) {
    const b = {};
    try {
      m.exception.values.forEach((S) => {
        S.stacktrace.frames.forEach((C) => {
          C.debug_id && (C.abs_path ? b[C.abs_path] = C.debug_id : C.filename && (b[C.filename] = C.debug_id), delete C.debug_id);
        });
      });
    } catch {
    }
    if (Object.keys(b).length === 0) return;
    m.debug_meta = m.debug_meta || {}, m.debug_meta.images = m.debug_meta.images || [];
    const _ = m.debug_meta.images;
    Object.entries(b).forEach(([S, C]) => {
      _.push({ type: "sourcemap", code_file: S, debug_id: C });
    });
  })(w), typeof a == "number" && a > 0 ? (function(m, b, _) {
    if (!m) return null;
    const S = { ...m, ...m.breadcrumbs && { breadcrumbs: m.breadcrumbs.map((C) => ({ ...C, ...C.data && { data: je(C.data, b, _) } })) }, ...m.user && { user: je(m.user, b, _) }, ...m.contexts && { contexts: je(m.contexts, b, _) }, ...m.extra && { extra: je(m.extra, b, _) } };
    return m.contexts && m.contexts.trace && S.contexts && (S.contexts.trace = m.contexts.trace, m.contexts.trace.data && (S.contexts.trace.data = je(m.contexts.trace.data, b, _))), m.spans && (S.spans = m.spans.map((C) => ({ ...C, ...C.data && { data: je(C.data, b, _) } }))), m.contexts && m.contexts.flags && S.contexts && (S.contexts.flags = je(m.contexts.flags, 3, _)), S;
  })(w, a, c) : w));
}
function Di(t, e) {
  return ut().captureEvent(t, e);
}
function Ni(t) {
  const e = ne(), n = Ht(), r = ut(), { release: i, environment: s = ei } = e && e.getOptions() || {}, { userAgent: a } = q.navigator || {}, c = ka({ release: i, environment: s, user: r.getUser() || n.getUser(), ...a && { userAgent: a }, ...t }), l = n.getSession();
  return l && l.status === "ok" && Ct(l, { status: "exited" }), Ms(), n.setSession(c), r.setSession(c), c;
}
function Ms() {
  const t = Ht(), e = ut(), n = e.getSession() || t.getSession();
  n && (function(r, i) {
    let s = {};
    r.status === "ok" && (s = { status: "exited" }), Ct(r, s);
  })(n), Es(), t.setSession(), e.setSession();
}
function Es() {
  const t = Ht(), e = ut(), n = ne(), r = e.getSession() || t.getSession();
  r && n && n.captureSession(r);
}
function Fi(t = !1) {
  t ? Ms() : Es();
}
function Ja(t, e, n) {
  return e || `${(function(r) {
    return `${(function(i) {
      const s = i.protocol ? `${i.protocol}:` : "", a = i.port ? `:${i.port}` : "";
      return `${s}//${i.host}${a}${i.path ? `/${i.path}` : ""}/api/`;
    })(r)}${r.projectId}/envelope/`;
  })(t)}?${(function(r, i) {
    const s = { sentry_version: "7" };
    return r.publicKey && (s.sentry_key = r.publicKey), i && (s.sentry_client = `${i.name}/${i.version}`), new URLSearchParams(s).toString();
  })(t, n)}`;
}
const Bi = [];
function Ri(t, e) {
  for (const n of e) n && n.afterAllSetup && n.afterAllSetup(t);
}
function $i(t, e, n) {
  if (n[e.name]) W && B.log(`Integration skipped because it was already installed: ${e.name}`);
  else {
    if (n[e.name] = e, Bi.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(), Bi.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), typeof e.preprocessEvent == "function") {
      const r = e.preprocessEvent.bind(e);
      t.on("preprocessEvent", (i, s) => r(i, s, t));
    }
    if (typeof e.processEvent == "function") {
      const r = e.processEvent.bind(e), i = Object.assign((s, a) => r(s, a, t), { id: e.name });
      t.addEventProcessor(i);
    }
    W && B.log(`Integration installed: ${e.name}`);
  }
}
class ke extends Error {
  constructor(e, n = "warn") {
    super(e), this.message = e, this.logLevel = n;
  }
}
const Ui = "Not capturing exception because it's already been captured.";
class qa {
  constructor(e) {
    if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = Da(e.dsn) : W && B.warn("No DSN provided, client will not send events."), this._dsn) {
      const r = Ja(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({ tunnel: this._options.tunnel, recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e.transportOptions, url: r });
    }
    const n = ["enableTracing", "tracesSampleRate", "tracesSampler"].find((r) => r in e && e[r] == null);
    n && zt(() => {
      console.warn(`[Sentry] Deprecation warning: \`${n}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`);
    });
  }
  captureException(e, n, r) {
    const i = ye();
    if (wi(e)) return W && B.log(Ui), i;
    const s = { event_id: i, ...n };
    return this._process(this.eventFromException(e, s).then((a) => this._captureEvent(a, s, r))), s.event_id;
  }
  captureMessage(e, n, r, i) {
    const s = { event_id: ye(), ...r }, a = Gr(e) ? e : String(e), c = _r(e) ? this.eventFromMessage(a, n, s) : this.eventFromException(e, s);
    return this._process(c.then((l) => this._captureEvent(l, s, i))), s.event_id;
  }
  captureEvent(e, n, r) {
    const i = ye();
    if (n && n.originalException && wi(n.originalException)) return W && B.log(Ui), i;
    const s = { event_id: i, ...n }, a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(this._captureEvent(e, s, a || r)), s.event_id;
  }
  captureSession(e) {
    typeof e.release != "string" ? W && B.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), Ct(e, { init: !1 }));
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
    return n ? (this.emit("flush"), this._isClientDoneProcessing(e).then((r) => n.flush(e).then((i) => r && i))) : at(!0);
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
    $i(this, e, this._integrations), n || Ri(this, [e]);
  }
  sendEvent(e, n = {}) {
    this.emit("beforeSendEvent", e, n);
    let r = $a(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) r = Na(r, Ba(s));
    const i = this.sendEnvelope(r);
    i && i.then((s) => this.emit("afterSendEvent", e, s), null);
  }
  sendSession(e) {
    const n = (function(r, i, s, a) {
      const c = Ss(s);
      return qt({ sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...c && { sdk: c }, ...!!a && i && { dsn: In(i) } }, ["aggregates" in r ? [{ type: "sessions" }, r] : [{ type: "session" }, r.toJSON()]]);
    })(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(n);
  }
  recordDroppedEvent(e, n, r) {
    if (this._options.sendClientReports) {
      const i = typeof r == "number" ? r : 1, s = `${e}:${n}`;
      W && B.log(`Recording outcome: "${s}"${i > 1 ? ` (${i} times)` : ""}`), this._outcomes[s] = (this._outcomes[s] || 0) + i;
    }
  }
  on(e, n) {
    const r = this._hooks[e] = this._hooks[e] || [];
    return r.push(n), () => {
      const i = r.indexOf(n);
      i > -1 && r.splice(i, 1);
    };
  }
  emit(e, ...n) {
    const r = this._hooks[e];
    r && r.forEach((i) => i(...n));
  }
  sendEnvelope(e) {
    return this.emit("beforeEnvelope", e), this._isEnabled() && this._transport ? this._transport.send(e).then(null, (n) => (W && B.error("Error while sending envelope:", n), n)) : (W && B.error("Transport disabled"), at({}));
  }
  _setupIntegrations() {
    const { integrations: e } = this._options;
    this._integrations = (function(n, r) {
      const i = {};
      return r.forEach((s) => {
        s && $i(n, s, i);
      }), i;
    })(this, e), Ri(this, e);
  }
  _updateSessionFromEvent(e, n) {
    let r = n.level === "fatal", i = !1;
    const s = n.exception && n.exception.values;
    if (s) {
      i = !0;
      for (const c of s) {
        const l = c.mechanism;
        if (l && l.handled === !1) {
          r = !0;
          break;
        }
      }
    }
    const a = e.status === "ok";
    (a && e.errors === 0 || a && r) && (Ct(e, { ...r && { status: "crashed" }, errors: e.errors || Number(i || r) }), this.captureSession(e));
  }
  _isClientDoneProcessing(e) {
    return new me((n) => {
      let r = 0;
      const i = setInterval(() => {
        this._numProcessing == 0 ? (clearInterval(i), n(!0)) : (r += 1, e && r >= e && (clearInterval(i), n(!1)));
      }, 1);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(e, n, r = ut(), i = Ht()) {
    const s = this.getOptions(), a = Object.keys(this._integrations);
    return !n.integrations && a.length > 0 && (n.integrations = a), this.emit("preprocessEvent", e, n), e.type || i.setLastEventId(e.event_id || n.event_id), Va(s, e, n, r, this, i).then((c) => {
      if (c === null) return c;
      c.contexts = { trace: Ca(r), ...c.contexts };
      const l = (function(p, g) {
        const v = g.getPropagationContext();
        return v.dsc || ws(v.traceId, p);
      })(this, r);
      return c.sdkProcessingMetadata = { dynamicSamplingContext: l, ...c.sdkProcessingMetadata }, c;
    });
  }
  _captureEvent(e, n = {}, r) {
    return this._processEvent(e, n, r).then((i) => i.event_id, (i) => {
      W && (i instanceof ke && i.logLevel === "log" ? B.log(i.message) : B.warn(i));
    });
  }
  _processEvent(e, n, r) {
    const i = this.getOptions(), { sampleRate: s } = i, a = Ji(e), c = Vi(e), l = e.type || "error", p = `before send for type \`${l}\``, g = s === void 0 ? void 0 : (function(E) {
      if (typeof E == "boolean") return Number(E);
      const w = typeof E == "string" ? parseFloat(E) : E;
      if (!(typeof w != "number" || isNaN(w) || w < 0 || w > 1)) return w;
      W && B.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(E)} of type ${JSON.stringify(typeof E)}.`);
    })(s);
    if (c && typeof g == "number" && Math.random() > g) return this.recordDroppedEvent("sample_rate", "error", e), An(new ke(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, "log"));
    const v = l === "replay_event" ? "replay" : l, O = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(e, n, r, O).then((E) => {
      if (E === null) throw this.recordDroppedEvent("event_processor", v, e), new ke("An event processor returned `null`, will not send event.", "log");
      if (n.data && n.data.__sentry__ === !0) return E;
      const w = (function(m, b, _, S) {
        const { beforeSend: C, beforeSendTransaction: A, beforeSendSpan: x } = b;
        if (Vi(_) && C) return C(_, S);
        if (Ji(_)) {
          if (_.spans && x) {
            const j = [];
            for (const L of _.spans) {
              const Y = x(L);
              Y ? j.push(Y) : (Ia(), m.recordDroppedEvent("before_send", "span"));
            }
            _.spans = j;
          }
          if (A) {
            if (_.spans) {
              const j = _.spans.length;
              _.sdkProcessingMetadata = { ..._.sdkProcessingMetadata, spanCountBeforeProcessing: j };
            }
            return A(_, S);
          }
        }
        return _;
      })(this, i, E, n);
      return (function(m, b) {
        const _ = `${b} must return \`null\` or a valid event.`;
        if (Jn(m)) return m.then((S) => {
          if (!Mt(S) && S !== null) throw new ke(_);
          return S;
        }, (S) => {
          throw new ke(`${b} rejected with ${S}`);
        });
        if (!Mt(m) && m !== null) throw new ke(_);
        return m;
      })(w, p);
    }).then((E) => {
      if (E === null) {
        if (this.recordDroppedEvent("before_send", v, e), a) {
          const b = 1 + (e.spans || []).length;
          this.recordDroppedEvent("before_send", "span", b);
        }
        throw new ke(`${p} returned \`null\`, will not send event.`, "log");
      }
      const w = r && r.getSession();
      if (!a && w && this._updateSessionFromEvent(w, E), a) {
        const b = (E.sdkProcessingMetadata && E.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (E.spans ? E.spans.length : 0);
        b > 0 && this.recordDroppedEvent("before_send", "span", b);
      }
      const m = E.transaction_info;
      if (a && m && E.transaction !== e.transaction) {
        const b = "custom";
        E.transaction_info = { ...m, source: b };
      }
      return this.sendEvent(E, n), E;
    }).then(null, (E) => {
      throw E instanceof ke ? E : (this.captureException(E, { data: { __sentry__: !0 }, originalException: E }), new ke(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${E}`));
    });
  }
  _process(e) {
    this._numProcessing++, e.then((n) => (this._numProcessing--, n), (n) => (this._numProcessing--, n));
  }
  _clearOutcomes() {
    const e = this._outcomes;
    return this._outcomes = {}, Object.entries(e).map(([n, r]) => {
      const [i, s] = n.split(":");
      return { reason: i, category: s, quantity: r };
    });
  }
  _flushOutcomes() {
    W && B.log("Flushing outcomes...");
    const e = this._clearOutcomes();
    if (e.length === 0) return void (W && B.log("No outcomes to send"));
    if (!this._dsn) return void (W && B.log("No dsn provided, will not send outcomes"));
    W && B.log("Sending outcomes:", e);
    const n = (r = e, qt((i = this._options.tunnel && In(this._dsn)) ? { dsn: i } : {}, [[{ type: "client_report" }, { timestamp: s || Wt(), discarded_events: r }]]));
    var r, i, s;
    this.sendEnvelope(n);
  }
}
function Vi(t) {
  return t.type === void 0;
}
function Ji(t) {
  return t.type === "transaction";
}
function za(t) {
  const e = [];
  function n(r) {
    return e.splice(e.indexOf(r), 1)[0] || Promise.resolve(void 0);
  }
  return { $: e, add: function(r) {
    if (!(t === void 0 || e.length < t)) return An(new ke("Not adding Promise because buffer limit was reached."));
    const i = r();
    return e.indexOf(i) === -1 && e.push(i), i.then(() => n(i)).then(null, () => n(i).then(null, () => {
    })), i;
  }, drain: function(r) {
    return new me((i, s) => {
      let a = e.length;
      if (!a) return i(!0);
      const c = setTimeout(() => {
        r && r > 0 && i(!1);
      }, r);
      e.forEach((l) => {
        at(l).then(() => {
          --a || (clearTimeout(c), i(!0));
        }, s);
      });
    });
  } };
}
function Wa(t, { statusCode: e, headers: n }, r = Date.now()) {
  const i = { ...t }, s = n && n["x-sentry-rate-limits"], a = n && n["retry-after"];
  if (s) for (const c of s.trim().split(",")) {
    const [l, p, , , g] = c.split(":", 5), v = parseInt(l, 10), O = 1e3 * (isNaN(v) ? 60 : v);
    if (p) for (const E of p.split(";")) E === "metric_bucket" && g && !g.split(";").includes("custom") || (i[E] = r + O);
    else i.all = r + O;
  }
  else a ? i.all = r + (function(c, l = Date.now()) {
    const p = parseInt(`${c}`, 10);
    if (!isNaN(p)) return 1e3 * p;
    const g = Date.parse(`${c}`);
    return isNaN(g) ? 6e4 : g - l;
  })(a, r) : e === 429 && (i.all = r + 6e4);
  return i;
}
function Ha(t, e, n = za(t.bufferSize || 64)) {
  let r = {};
  return { send: function(i) {
    const s = [];
    if (Ai(i, (l, p) => {
      const g = Ii(p);
      if ((function(v, O, E = Date.now()) {
        return (function(w, m) {
          return w[m] || w.all || 0;
        })(v, O) > E;
      })(r, g)) {
        const v = qi(l, p);
        t.recordDroppedEvent("ratelimit_backoff", g, v);
      } else s.push(l);
    }), s.length === 0) return at({});
    const a = qt(i[0], s), c = (l) => {
      Ai(a, (p, g) => {
        const v = qi(p, g);
        t.recordDroppedEvent(l, Ii(g), v);
      });
    };
    return n.add(() => e({ body: Fa(a) }).then((l) => (l.statusCode !== void 0 && (l.statusCode < 200 || l.statusCode >= 300) && W && B.warn(`Sentry responded with status code ${l.statusCode} to sent event.`), r = Wa(r, l), l), (l) => {
      throw c("network_error"), l;
    })).then((l) => l, (l) => {
      if (l instanceof ke) return W && B.error("Skipped sending event because buffer is full."), c("queue_overflow"), at({});
      throw l;
    });
  }, flush: (i) => n.drain(i) };
}
function qi(t, e) {
  if (e === "event" || e === "transaction") return Array.isArray(t) ? t[1] : void 0;
}
const Ga = 100;
function Ye(t, e) {
  const n = ne(), r = Ht();
  if (!n) return;
  const { beforeBreadcrumb: i = null, maxBreadcrumbs: s = Ga } = n.getOptions();
  if (s <= 0) return;
  const a = { timestamp: Wt(), ...t }, c = i ? zt(() => i(a, e)) : a;
  c !== null && (n.emit && n.emit("beforeAddBreadcrumb", c, e), r.addBreadcrumb(c, s));
}
let zi;
const Wi = /* @__PURE__ */ new WeakMap(), Ya = () => ({ name: "FunctionToString", setupOnce() {
  zi = Function.prototype.toString;
  try {
    Function.prototype.toString = function(...t) {
      const e = Qr(this), n = Wi.has(ne()) && e !== void 0 ? e : this;
      return zi.apply(n, t);
    };
  } catch {
  }
}, setup(t) {
  Wi.set(t, !0);
} }), Qa = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/], Ka = (t = {}) => ({ name: "InboundFilters", processEvent(e, n, r) {
  const i = r.getOptions(), s = (function(a = {}, c = {}) {
    return { allowUrls: [...a.allowUrls || [], ...c.allowUrls || []], denyUrls: [...a.denyUrls || [], ...c.denyUrls || []], ignoreErrors: [...a.ignoreErrors || [], ...c.ignoreErrors || [], ...a.disableErrorDefaults ? [] : Qa], ignoreTransactions: [...a.ignoreTransactions || [], ...c.ignoreTransactions || []], ignoreInternal: a.ignoreInternal === void 0 || a.ignoreInternal };
  })(t, i);
  return (function(a, c) {
    return c.ignoreInternal && (function(l) {
      try {
        return l.exception.values[0].type === "SentryError";
      } catch {
      }
      return !1;
    })(a) ? (W && B.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ve(a)}`), !0) : (function(l, p) {
      return l.type || !p || !p.length ? !1 : (function(g) {
        const v = [];
        g.message && v.push(g.message);
        let O;
        try {
          O = g.exception.values[g.exception.values.length - 1];
        } catch {
        }
        return O && O.value && (v.push(O.value), O.type && v.push(`${O.type}: ${O.value}`)), v;
      })(l).some((g) => on(g, p));
    })(a, c.ignoreErrors) ? (W && B.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ve(a)}`), !0) : (function(l) {
      return l.type || !l.exception || !l.exception.values || l.exception.values.length === 0 ? !1 : !l.message && !l.exception.values.some((p) => p.stacktrace || p.type && p.type !== "Error" || p.value);
    })(a) ? (W && B.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Ve(a)}`), !0) : (function(l, p) {
      if (l.type !== "transaction" || !p || !p.length) return !1;
      const g = l.transaction;
      return !!g && on(g, p);
    })(a, c.ignoreTransactions) ? (W && B.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Ve(a)}`), !0) : (function(l, p) {
      if (!p || !p.length) return !1;
      const g = cn(l);
      return !!g && on(g, p);
    })(a, c.denyUrls) ? (W && B.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ve(a)}.
Url: ${cn(a)}`), !0) : (function(l, p) {
      if (!p || !p.length) return !0;
      const g = cn(l);
      return !g || on(g, p);
    })(a, c.allowUrls) ? !1 : (W && B.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ve(a)}.
Url: ${cn(a)}`), !0);
  })(e, s) ? null : e;
} });
function cn(t) {
  try {
    let e;
    try {
      e = t.exception.values[0].stacktrace.frames;
    } catch {
    }
    return e ? (function(n = []) {
      for (let r = n.length - 1; r >= 0; r--) {
        const i = n[r];
        if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]") return i.filename || null;
      }
      return null;
    })(e) : null;
  } catch {
    return W && B.error(`Cannot extract url for event ${Ve(t)}`), null;
  }
}
function Xa(t, e, n = 250, r, i, s, a) {
  if (!(s.exception && s.exception.values && a && ot(a.originalException, Error))) return;
  const c = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
  var l, p;
  c && (s.exception.values = (l = Or(t, e, i, a.originalException, r, s.exception.values, c, 0), p = n, l.map((g) => (g.value && (g.value = _t(g.value, p)), g))));
}
function Or(t, e, n, r, i, s, a, c) {
  if (s.length >= n + 1) return s;
  let l = [...s];
  if (ot(r[i], Error)) {
    Hi(a, c);
    const p = t(e, r[i]), g = l.length;
    Gi(p, i, g, c), l = Or(t, e, n, r[i], i, [p, ...l], p, g);
  }
  return Array.isArray(r.errors) && r.errors.forEach((p, g) => {
    if (ot(p, Error)) {
      Hi(a, c);
      const v = t(e, p), O = l.length;
      Gi(v, `errors[${g}]`, O, c), l = Or(t, e, n, p, i, [v, ...l], v, O);
    }
  }), l;
}
function Hi(t, e) {
  t.mechanism = t.mechanism || { type: "generic", handled: !0 }, t.mechanism = { ...t.mechanism, ...t.type === "AggregateError" && { is_exception_group: !0 }, exception_id: e };
}
function Gi(t, e, n, r) {
  t.mechanism = t.mechanism || { type: "generic", handled: !0 }, t.mechanism = { ...t.mechanism, type: "chained", source: e, exception_id: n, parent_id: r };
}
function Zn(t) {
  if (!t) return {};
  const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!e) return {};
  const n = e[6] || "", r = e[8] || "";
  return { host: e[4], path: e[5], protocol: e[2], search: n, hash: r, relative: e[5] + n + r };
}
function Za() {
  "console" in q && br.forEach(function(t) {
    t in q.console && pe(q.console, t, function(e) {
      return xn[t] = e, function(...n) {
        Se("console", { args: n, level: t });
        const r = xn[t];
        r && r.apply(q.console, n);
      };
    });
  });
}
function ec(t) {
  return t === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(t) ? t : "log";
}
const tc = () => {
  let t;
  return { name: "Dedupe", processEvent(e) {
    if (e.type) return e;
    try {
      if ((function(n, r) {
        return r ? !!((function(i, s) {
          const a = i.message, c = s.message;
          return !(!a && !c || a && !c || !a && c || a !== c || !Qi(i, s) || !Yi(i, s));
        })(n, r) || (function(i, s) {
          const a = Ki(s), c = Ki(i);
          return !(!a || !c || a.type !== c.type || a.value !== c.value || !Qi(i, s) || !Yi(i, s));
        })(n, r)) : !1;
      })(e, t)) return W && B.warn("Event dropped due to being a duplicate of previously captured event."), null;
    } catch {
    }
    return t = e;
  } };
};
function Yi(t, e) {
  let n = gi(t), r = gi(e);
  if (!n && !r) return !0;
  if (n && !r || !n && r || r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++) {
    const s = r[i], a = n[i];
    if (s.filename !== a.filename || s.lineno !== a.lineno || s.colno !== a.colno || s.function !== a.function) return !1;
  }
  return !0;
}
function Qi(t, e) {
  let n = t.fingerprint, r = e.fingerprint;
  if (!n && !r) return !0;
  if (n && !r || !n && r) return !1;
  try {
    return n.join("") === r.join("");
  } catch {
    return !1;
  }
}
function Ki(t) {
  return t.exception && t.exception.values && t.exception.values[0];
}
function Xi(t) {
  return t === void 0 ? void 0 : t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0;
}
const er = q;
function Pr(t) {
  return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function nc() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!(function() {
    if (!("fetch" in er)) return !1;
    try {
      return new Headers(), new Request("http://www.example.com"), new Response(), !0;
    } catch {
      return !1;
    }
  })()) return !1;
  if (Pr(er.fetch)) return !0;
  let t = !1;
  const e = er.document;
  if (e && typeof e.createElement == "function") try {
    const n = e.createElement("iframe");
    n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = Pr(n.contentWindow.fetch)), e.head.removeChild(n);
  } catch (n) {
    lt && B.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
  }
  return t;
}
function rc(t, e) {
  const n = "fetch";
  nt(n, t), rt(n, () => (function(r, i = !1) {
    i && !nc() || pe(q, "fetch", function(s) {
      return function(...a) {
        const c = new Error(), { method: l, url: p } = (function(v) {
          if (v.length === 0) return { method: "GET", url: "" };
          if (v.length === 2) {
            const [E, w] = v;
            return { url: Zi(E), method: xr(w, "method") ? String(w.method).toUpperCase() : "GET" };
          }
          const O = v[0];
          return { url: Zi(O), method: xr(O, "method") ? String(O.method).toUpperCase() : "GET" };
        })(a), g = { args: a, fetchData: { method: l, url: p }, startTimestamp: 1e3 * Fe(), virtualError: c };
        return r || Se("fetch", { ...g }), s.apply(q, a).then(async (v) => (r ? r(v) : Se("fetch", { ...g, endTimestamp: 1e3 * Fe(), response: v }), v), (v) => {
          throw Se("fetch", { ...g, endTimestamp: 1e3 * Fe(), error: v }), Hr(v) && v.stack === void 0 && (v.stack = c.stack, st(v, "framesToPop", 1)), v;
        });
      };
    });
  })(void 0, e));
}
function xr(t, e) {
  return !!t && typeof t == "object" && !!t[e];
}
function Zi(t) {
  return typeof t == "string" ? t : t ? xr(t, "url") ? t.url : t.toString ? t.toString() : "" : "";
}
const ln = q, K = q;
let Ar = 0;
function eo() {
  return Ar > 0;
}
function Ot(t, e = {}) {
  if (!/* @__PURE__ */ (function(r) {
    return typeof r == "function";
  })(t)) return t;
  try {
    const r = t.__sentry_wrapped__;
    if (r) return typeof r == "function" ? r : t;
    if (Qr(t)) return t;
  } catch {
    return t;
  }
  const n = function(...r) {
    try {
      const i = r.map((s) => Ot(s, e));
      return t.apply(this, i);
    } catch (i) {
      throw Ar++, setTimeout(() => {
        Ar--;
      }), (function(...s) {
        const a = Xr(Un());
        if (s.length === 2) {
          const [c, l] = s;
          return c ? a.withSetScope(c, l) : a.withScope(l);
        }
        a.withScope(s[0]);
      })((s) => {
        var a;
        s.addEventProcessor((c) => (e.mechanism && (kr(c, void 0), Et(c, e.mechanism)), c.extra = { ...c.extra, arguments: r }, c)), a = i, ut().captureException(a, void 0);
      }), i;
    }
  };
  try {
    for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
  } catch {
  }
  vs(n, t), st(t, "__sentry_wrapped__", n);
  try {
    Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", { get: () => t.name });
  } catch {
  }
  return n;
}
const zn = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function ti(t, e) {
  const n = ni(t, e), r = { type: sc(e), value: ac(e) };
  return n.length && (r.stacktrace = { frames: n }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r;
}
function ic(t, e, n, r) {
  const i = ne(), s = i && i.getOptions().normalizeDepth, a = (function(p) {
    for (const g in p) if (Object.prototype.hasOwnProperty.call(p, g)) {
      const v = p[g];
      if (v instanceof Error) return v;
    }
  })(e), c = { __serialized__: ks(e, s) };
  if (a) return { exception: { values: [ti(t, a)] }, extra: c };
  const l = { exception: { values: [{ type: Vn(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error", value: cc(e, { isUnhandledRejection: r }) }] }, extra: c };
  if (n) {
    const p = ni(t, n);
    p.length && (l.exception.values[0].stacktrace = { frames: p });
  }
  return l;
}
function tr(t, e) {
  return { exception: { values: [ti(t, e)] } };
}
function ni(t, e) {
  const n = e.stacktrace || e.stack || "", r = (function(s) {
    return s && oc.test(s.message) ? 1 : 0;
  })(e), i = (function(s) {
    return typeof s.framesToPop == "number" ? s.framesToPop : 0;
  })(e);
  try {
    return t(n, r, i);
  } catch {
  }
  return [];
}
const oc = /Minified React error #\d+;/i;
function Cs(t) {
  return typeof WebAssembly < "u" && WebAssembly.Exception !== void 0 && t instanceof WebAssembly.Exception;
}
function sc(t) {
  const e = t && t.name;
  return !e && Cs(t) ? t.message && Array.isArray(t.message) && t.message.length == 2 ? t.message[0] : "WebAssembly.Exception" : e;
}
function ac(t) {
  const e = t && t.message;
  return e ? e.error && typeof e.error.message == "string" ? e.error.message : Cs(t) && Array.isArray(t.message) && t.message.length == 2 ? t.message[1] : e : "No error message";
}
function Ir(t, e, n, r, i) {
  let s;
  if (fs(e) && e.error)
    return tr(t, e.error);
  if (vi(e) || xt(e, "DOMException")) {
    const a = e;
    if ("stack" in e) s = tr(t, e);
    else {
      const c = a.name || (vi(a) ? "DOMError" : "DOMException"), l = a.message ? `${c}: ${a.message}` : c;
      s = jr(t, l, n, r), kr(s, l);
    }
    return "code" in a && (s.tags = { ...s.tags, "DOMException.code": `${a.code}` }), s;
  }
  return Hr(e) ? tr(t, e) : Mt(e) || Vn(e) ? (s = ic(t, e, n, i), Et(s, { synthetic: !0 }), s) : (s = jr(t, e, n, r), kr(s, `${e}`), Et(s, { synthetic: !0 }), s);
}
function jr(t, e, n, r) {
  const i = {};
  if (r && n) {
    const s = ni(t, n);
    s.length && (i.exception = { values: [{ value: e, stacktrace: { frames: s } }] }), Et(i, { synthetic: !0 });
  }
  if (Gr(e)) {
    const { __sentry_template_string__: s, __sentry_template_values__: a } = e;
    return i.logentry = { message: s, params: a }, i;
  }
  return i.message = e, i;
}
function cc(t, { isUnhandledRejection: e }) {
  const n = (function(i, s = 40) {
    const a = Object.keys(ys(i));
    a.sort();
    const c = a[0];
    if (!c) return "[object has no keys]";
    if (c.length >= s) return _t(c, s);
    for (let l = a.length; l > 0; l--) {
      const p = a.slice(0, l).join(", ");
      if (!(p.length > s)) return l === a.length ? p : _t(p, s);
    }
    return "";
  })(t), r = e ? "promise rejection" : "exception";
  return fs(t) ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\`` : Vn(t) ? `Event \`${(function(i) {
    try {
      const s = Object.getPrototypeOf(i);
      return s ? s.constructor.name : void 0;
    } catch {
    }
  })(t)}\` (type=${t.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`;
}
class lc extends qa {
  constructor(e) {
    const n = { parentSpanIsAlwaysRootSpan: !0, ...e };
    (function(r, i, s = [i], a = "npm") {
      const c = r._metadata || {};
      c.sdk || (c.sdk = { name: `sentry.javascript.${i}`, packages: s.map((l) => ({ name: `${a}:@sentry/${l}`, version: tt })), version: tt }), r._metadata = c;
    })(n, "browser", ["browser"], K.SENTRY_SDK_SOURCE || "npm"), super(n), n.sendClientReports && K.document && K.document.addEventListener("visibilitychange", () => {
      K.document.visibilityState === "hidden" && this._flushOutcomes();
    });
  }
  eventFromException(e, n) {
    return (function(r, i, s, a) {
      const c = Ir(r, i, s && s.syntheticException || void 0, a);
      return Et(c), c.level = "error", s && s.event_id && (c.event_id = s.event_id), at(c);
    })(this._options.stackParser, e, n, this._options.attachStacktrace);
  }
  eventFromMessage(e, n = "info", r) {
    return (function(i, s, a = "info", c, l) {
      const p = jr(i, s, c && c.syntheticException || void 0, l);
      return p.level = a, c && c.event_id && (p.event_id = c.event_id), at(p);
    })(this._options.stackParser, e, n, r, this._options.attachStacktrace);
  }
  captureUserFeedback(e) {
    if (!this._isEnabled()) return void (zn && B.warn("SDK not enabled, will not capture user feedback."));
    const n = (function(r, { metadata: i, tunnel: s, dsn: a }) {
      const c = { event_id: r.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...i && i.sdk && { sdk: { name: i.sdk.name, version: i.sdk.version } }, ...!!s && !!a && { dsn: In(a) } };
      return qt(c, [/* @__PURE__ */ (function(p) {
        return [{ type: "user_report" }, p];
      })(r)]);
    })(e, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
    this.sendEnvelope(n);
  }
  _prepareEvent(e, n, r) {
    return e.platform = e.platform || "javascript", super._prepareEvent(e, n, r);
  }
}
const uc = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, ce = q;
let to, nr, rr, un;
function dc() {
  if (!ce.document) return;
  const t = Se.bind(null, "dom"), e = no(t, !0);
  ce.document.addEventListener("click", e, !1), ce.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((n) => {
    const r = ce[n], i = r && r.prototype;
    i && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (pe(i, "addEventListener", function(s) {
      return function(a, c, l) {
        if (a === "click" || a == "keypress") try {
          const p = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, g = p[a] = p[a] || { refCount: 0 };
          if (!g.handler) {
            const v = no(t);
            g.handler = v, s.call(this, a, v, l);
          }
          g.refCount++;
        } catch {
        }
        return s.call(this, a, c, l);
      };
    }), pe(i, "removeEventListener", function(s) {
      return function(a, c, l) {
        if (a === "click" || a == "keypress") try {
          const p = this.__sentry_instrumentation_handlers__ || {}, g = p[a];
          g && (g.refCount--, g.refCount <= 0 && (s.call(this, a, g.handler, l), g.handler = void 0, delete p[a]), Object.keys(p).length === 0 && delete this.__sentry_instrumentation_handlers__);
        } catch {
        }
        return s.call(this, a, c, l);
      };
    }));
  });
}
function no(t, e = !1) {
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
    st(n, "_sentryCaptured", !0), r && !r._sentryId && st(r, "_sentryId", ye());
    const i = n.type === "keypress" ? "input" : n.type;
    (function(s) {
      if (s.type !== nr) return !1;
      try {
        if (!s.target || s.target._sentryId !== rr) return !1;
      } catch {
      }
      return !0;
    })(n) || (t({ event: n, name: i, global: e }), nr = n.type, rr = r ? r._sentryId : void 0), clearTimeout(to), to = ce.setTimeout(() => {
      rr = void 0, nr = void 0;
    }, 1e3);
  };
}
function Ts(t) {
  const e = "history";
  nt(e, t), rt(e, pc);
}
function pc() {
  if (!(function() {
    const n = ln.chrome, r = n && n.app && n.app.runtime, i = "history" in ln && !!ln.history.pushState && !!ln.history.replaceState;
    return !r && i;
  })()) return;
  const t = ce.onpopstate;
  function e(n) {
    return function(...r) {
      const i = r.length > 2 ? r[2] : void 0;
      if (i) {
        const s = un, a = String(i);
        un = a, Se("history", { from: s, to: a });
      }
      return n.apply(this, r);
    };
  }
  ce.onpopstate = function(...n) {
    const r = ce.location.href, i = un;
    if (un = r, Se("history", { from: i, to: r }), t) try {
      return t.apply(this, n);
    } catch {
    }
  }, pe(ce.history, "pushState", e), pe(ce.history, "replaceState", e);
}
const wn = {};
function ro(t) {
  wn[t] = void 0;
}
const Bt = "__sentry_xhr_v3__";
function hc() {
  if (!ce.XMLHttpRequest) return;
  const t = XMLHttpRequest.prototype;
  t.open = new Proxy(t.open, { apply(e, n, r) {
    const i = new Error(), s = 1e3 * Fe(), a = Le(r[0]) ? r[0].toUpperCase() : void 0, c = (function(p) {
      if (Le(p)) return p;
      try {
        return p.toString();
      } catch {
      }
    })(r[1]);
    if (!a || !c) return e.apply(n, r);
    n[Bt] = { method: a, url: c, request_headers: {} }, a === "POST" && c.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
    const l = () => {
      const p = n[Bt];
      if (p && n.readyState === 4) {
        try {
          p.status_code = n.status;
        } catch {
        }
        Se("xhr", { endTimestamp: 1e3 * Fe(), startTimestamp: s, xhr: n, virtualError: i });
      }
    };
    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, { apply: (p, g, v) => (l(), p.apply(g, v)) }) : n.addEventListener("readystatechange", l), n.setRequestHeader = new Proxy(n.setRequestHeader, { apply(p, g, v) {
      const [O, E] = v, w = g[Bt];
      return w && Le(O) && Le(E) && (w.request_headers[O.toLowerCase()] = E), p.apply(g, v);
    } }), e.apply(n, r);
  } }), t.send = new Proxy(t.send, { apply(e, n, r) {
    const i = n[Bt];
    return i ? (r[0] !== void 0 && (i.body = r[0]), Se("xhr", { startTimestamp: 1e3 * Fe(), xhr: n }), e.apply(n, r)) : e.apply(n, r);
  } });
}
function fc(t, e = (function(n) {
  const r = wn[n];
  if (r) return r;
  let i = ce[n];
  if (Pr(i)) return wn[n] = i.bind(ce);
  const s = ce.document;
  if (s && typeof s.createElement == "function") try {
    const a = s.createElement("iframe");
    a.hidden = !0, s.head.appendChild(a);
    const c = a.contentWindow;
    c && c[n] && (i = c[n]), s.head.removeChild(a);
  } catch (a) {
    uc && B.warn(`Could not create sandbox iframe for ${n} check, bailing to window.${n}: `, a);
  }
  return i && (wn[n] = i.bind(ce));
})("fetch")) {
  let n = 0, r = 0;
  return Ha(t, function(i) {
    const s = i.body.length;
    n += s, r++;
    const a = { body: i.body, method: "POST", referrerPolicy: "origin", headers: t.headers, keepalive: n <= 6e4 && r < 15, ...t.fetchOptions };
    if (!e) return ro("fetch"), An("No fetch implementation available");
    try {
      return e(t.url, a).then((c) => (n -= s, r--, { statusCode: c.status, headers: { "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"), "retry-after": c.headers.get("Retry-After") } }));
    } catch (c) {
      return ro("fetch"), n -= s, r--, An(c);
    }
  });
}
function ir(t, e, n, r) {
  const i = { filename: t, function: e === "<anonymous>" ? et : e, in_app: !0 };
  return n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i;
}
const gc = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, mc = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, vc = /\((\S*)(?::(\d+))(?::(\d+))\)/, yc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, bc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, _c = (function(...t) {
  const e = t.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0, i = 0) => {
    const s = [], a = n.split(`
`);
    for (let c = r; c < a.length; c++) {
      const l = a[c];
      if (l.length > 1024) continue;
      const p = pi.test(l) ? l.replace(pi, "$1") : l;
      if (!p.match(/\S*Error: /)) {
        for (const g of e) {
          const v = g(p);
          if (v) {
            s.push(v);
            break;
          }
        }
        if (s.length >= 50 + i) break;
      }
    }
    return (function(c) {
      if (!c.length) return [];
      const l = Array.from(c);
      return /sentryWrapped/.test(rn(l).function || "") && l.pop(), l.reverse(), hi.test(rn(l).function || "") && (l.pop(), hi.test(rn(l).function || "") && l.pop()), l.slice(0, 50).map((p) => ({ ...p, filename: p.filename || rn(l).filename, function: p.function || et }));
    })(s.slice(i));
  };
})([30, (t) => {
  const e = gc.exec(t);
  if (e) {
    const [, r, i, s] = e;
    return ir(r, et, +i, +s);
  }
  const n = mc.exec(t);
  if (n) {
    if (n[2] && n[2].indexOf("eval") === 0) {
      const s = vc.exec(n[2]);
      s && (n[2] = s[1], n[3] = s[2], n[4] = s[3]);
    }
    const [r, i] = io(n[1] || et, n[2]);
    return ir(i, r, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
  }
}], [50, (t) => {
  const e = yc.exec(t);
  if (e) {
    if (e[3] && e[3].indexOf(" > eval") > -1) {
      const i = bc.exec(e[3]);
      i && (e[1] = e[1] || "eval", e[3] = i[1], e[4] = i[2], e[5] = "");
    }
    let n = e[3], r = e[1] || et;
    return [r, n] = io(r, n), ir(n, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
  }
}]), io = (t, e) => {
  const n = t.indexOf("safari-extension") !== -1, r = t.indexOf("safari-web-extension") !== -1;
  return n || r ? [t.indexOf("@") !== -1 ? t.split("@")[0] : et, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e];
}, oo = 1024, wc = (t = {}) => {
  const e = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...t };
  return { name: "Breadcrumbs", setup(n) {
    var r;
    e.console && (function(i) {
      const s = "console";
      nt(s, i), rt(s, Za);
    })(/* @__PURE__ */ (function(i) {
      return function(s) {
        if (ne() !== i) return;
        const a = { category: "console", data: { arguments: s.args, logger: "console" }, level: ec(s.level), message: yi(s.args, " ") };
        if (s.level === "assert") {
          if (s.args[0] !== !1) return;
          a.message = `Assertion failed: ${yi(s.args.slice(1), " ") || "console.assert"}`, a.data.arguments = s.args.slice(1);
        }
        Ye(a, { input: s.args, level: s.level });
      };
    })(n)), e.dom && (r = /* @__PURE__ */ (function(i, s) {
      return function(a) {
        if (ne() !== i) return;
        let c, l, p = typeof s == "object" ? s.serializeAttribute : void 0, g = typeof s == "object" && typeof s.maxStringLength == "number" ? s.maxStringLength : void 0;
        g && g > oo && (zn && B.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${g} was configured. Sentry will use 1024 instead.`), g = oo), typeof p == "string" && (p = [p]);
        try {
          const O = a.event, E = (function(w) {
            return !!w && !!w.target;
          })(O) ? O.target : O;
          c = ms(E, { keyAttrs: p, maxStringLength: g }), l = (function(w) {
            if (!Yr.HTMLElement) return null;
            let m = w;
            for (let b = 0; b < 5; b++) {
              if (!m) return null;
              if (m instanceof HTMLElement) {
                if (m.dataset.sentryComponent) return m.dataset.sentryComponent;
                if (m.dataset.sentryElement) return m.dataset.sentryElement;
              }
              m = m.parentNode;
            }
            return null;
          })(E);
        } catch {
          c = "<unknown>";
        }
        if (c.length === 0) return;
        const v = { category: `ui.${a.name}`, message: c };
        l && (v.data = { "ui.component_name": l }), Ye(v, { event: a.event, name: a.name, global: a.global });
      };
    })(n, e.dom), nt("dom", r), rt("dom", dc)), e.xhr && (function(i) {
      nt("xhr", i), rt("xhr", hc);
    })(/* @__PURE__ */ (function(i) {
      return function(s) {
        if (ne() !== i) return;
        const { startTimestamp: a, endTimestamp: c } = s, l = s.xhr[Bt];
        if (!a || !c || !l) return;
        const { method: p, url: g, status_code: v, body: O } = l, E = { method: p, url: g, status_code: v }, w = { xhr: s.xhr, input: O, startTimestamp: a, endTimestamp: c };
        Ye({ category: "xhr", data: E, type: "http", level: Xi(v) }, w);
      };
    })(n)), e.fetch && rc(/* @__PURE__ */ (function(i) {
      return function(s) {
        if (ne() !== i) return;
        const { startTimestamp: a, endTimestamp: c } = s;
        if (c && (!s.fetchData.url.match(/sentry_key/) || s.fetchData.method !== "POST")) if (s.error)
          Ye({ category: "fetch", data: s.fetchData, level: "error", type: "http" }, { data: s.error, input: s.args, startTimestamp: a, endTimestamp: c });
        else {
          const l = s.response, p = { ...s.fetchData, status_code: l && l.status }, g = { input: s.args, response: l, startTimestamp: a, endTimestamp: c };
          Ye({ category: "fetch", data: p, type: "http", level: Xi(p.status_code) }, g);
        }
      };
    })(n)), e.history && Ts(/* @__PURE__ */ (function(i) {
      return function(s) {
        if (ne() !== i) return;
        let a = s.from, c = s.to;
        const l = Zn(K.location.href);
        let p = a ? Zn(a) : void 0;
        const g = Zn(c);
        p && p.path || (p = l), l.protocol === g.protocol && l.host === g.host && (c = g.relative), l.protocol === p.protocol && l.host === p.host && (a = p.relative), Ye({ category: "navigation", data: { from: a, to: c } });
      };
    })(n)), e.sentry && n.on("beforeSendEvent", /* @__PURE__ */ (function(i) {
      return function(s) {
        ne() === i && Ye({ category: "sentry." + (s.type === "transaction" ? "transaction" : "event"), event_id: s.event_id, level: s.level, message: Ve(s) }, { event: s });
      };
    })(n));
  } };
}, kc = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], Sc = (t = {}) => {
  const e = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...t };
  return { name: "BrowserApiErrors", setupOnce() {
    e.setTimeout && pe(K, "setTimeout", so), e.setInterval && pe(K, "setInterval", so), e.requestAnimationFrame && pe(K, "requestAnimationFrame", Mc), e.XMLHttpRequest && "XMLHttpRequest" in K && pe(XMLHttpRequest.prototype, "send", Ec);
    const n = e.eventTarget;
    n && (Array.isArray(n) ? n : kc).forEach(Cc);
  } };
};
function so(t) {
  return function(...e) {
    const n = e[0];
    return e[0] = Ot(n, { mechanism: { data: { function: qe(t) }, handled: !1, type: "instrument" } }), t.apply(this, e);
  };
}
function Mc(t) {
  return function(e) {
    return t.apply(this, [Ot(e, { mechanism: { data: { function: "requestAnimationFrame", handler: qe(t) }, handled: !1, type: "instrument" } })]);
  };
}
function Ec(t) {
  return function(...e) {
    const n = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
      r in n && typeof n[r] == "function" && pe(n, r, function(i) {
        const s = { mechanism: { data: { function: r, handler: qe(i) }, handled: !1, type: "instrument" } }, a = Qr(i);
        return a && (s.mechanism.data.handler = qe(a)), Ot(i, s);
      });
    }), t.apply(this, e);
  };
}
function Cc(t) {
  const e = K[t], n = e && e.prototype;
  n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (pe(n, "addEventListener", function(r) {
    return function(i, s, a) {
      try {
        typeof s.handleEvent == "function" && (s.handleEvent = Ot(s.handleEvent, { mechanism: { data: { function: "handleEvent", handler: qe(s), target: t }, handled: !1, type: "instrument" } }));
      } catch {
      }
      return r.apply(this, [i, Ot(s, { mechanism: { data: { function: "addEventListener", handler: qe(s), target: t }, handled: !1, type: "instrument" } }), a]);
    };
  }), pe(n, "removeEventListener", function(r) {
    return function(i, s, a) {
      try {
        const c = s.__sentry_wrapped__;
        c && r.call(this, i, c, a);
      } catch {
      }
      return r.call(this, i, s, a);
    };
  }));
}
const Tc = () => ({ name: "BrowserSession", setupOnce() {
  K.document !== void 0 ? (Ni({ ignoreDuration: !0 }), Fi(), Ts(({ from: t, to: e }) => {
    t !== void 0 && t !== e && (Ni({ ignoreDuration: !0 }), Fi());
  })) : zn && B.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
} }), Oc = (t = {}) => {
  const e = { onerror: !0, onunhandledrejection: !0, ...t };
  return { name: "GlobalHandlers", setupOnce() {
    Error.stackTraceLimit = 50;
  }, setup(n) {
    e.onerror && ((function(r) {
      (function(i) {
        const s = "error";
        nt(s, i), rt(s, ya);
      })((i) => {
        const { stackParser: s, attachStacktrace: a } = co();
        if (ne() !== r || eo()) return;
        const { msg: c, url: l, line: p, column: g, error: v } = i, O = (function(E, w, m, b) {
          const _ = E.exception = E.exception || {}, S = _.values = _.values || [], C = S[0] = S[0] || {}, A = C.stacktrace = C.stacktrace || {}, x = A.frames = A.frames || [], j = b, L = m, Y = Le(w) && w.length > 0 ? w : (function() {
            try {
              return Yr.document.location.href;
            } catch {
              return "";
            }
          })();
          return x.length === 0 && x.push({ colno: j, filename: Y, function: et, in_app: !0, lineno: L }), E;
        })(Ir(s, v || c, void 0, a, !1), l, p, g);
        O.level = "error", Di(O, { originalException: v, mechanism: { handled: !1, type: "onerror" } });
      });
    })(n), ao("onerror")), e.onunhandledrejection && ((function(r) {
      (function(i) {
        const s = "unhandledrejection";
        nt(s, i), rt(s, ba);
      })((i) => {
        const { stackParser: s, attachStacktrace: a } = co();
        if (ne() !== r || eo()) return;
        const c = (function(p) {
          if (_r(p)) return p;
          try {
            if ("reason" in p) return p.reason;
            if ("detail" in p && "reason" in p.detail) return p.detail.reason;
          } catch {
          }
          return p;
        })(i), l = _r(c) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(c)}` }] } } : Ir(s, c, void 0, a, !0);
        l.level = "error", Di(l, { originalException: c, mechanism: { handled: !1, type: "onunhandledrejection" } });
      });
    })(n), ao("onunhandledrejection"));
  } };
};
function ao(t) {
  zn && B.log(`Global Handler attached: ${t}`);
}
function co() {
  const t = ne();
  return t && t.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
}
const Pc = () => ({ name: "HttpContext", preprocessEvent(t) {
  if (!K.navigator && !K.location && !K.document) return;
  const e = t.request && t.request.url || K.location && K.location.href, { referrer: n } = K.document || {}, { userAgent: r } = K.navigator || {}, i = { ...t.request && t.request.headers, ...n && { Referer: n }, ...r && { "User-Agent": r } }, s = { ...t.request, ...e && { url: e }, headers: i };
  t.request = s;
} }), xc = (t = {}) => {
  const e = t.limit || 5, n = t.key || "cause";
  return { name: "LinkedErrors", preprocessEvent(r, i, s) {
    const a = s.getOptions();
    Xa(ti, a.stackParser, a.maxValueLength, n, e, r, i);
  } };
};
var lo = "new", uo = "loading", po = "loaded", Lr = "joining-meeting", Ze = "joined-meeting", Re = "left-meeting", Qe = "error", Ac = "playable", or = "unknown", Ic = "full", jc = "base", ho = "no-room", Lc = "end-of-life", Dc = "connection-error", Nc = "iframe-ready-for-launch-config", Fc = "iframe-launch-config", Bc = "theme-updated", Rc = "loading", $c = "load-attempt-failed", fo = "loaded", Uc = "started-camera", Vc = "camera-error", Jc = "joining-meeting", qc = "joined-meeting", zc = "left-meeting", Wc = "participant-joined", Hc = "participant-updated", Gc = "participant-left", Yc = "participant-counts-updated", Qc = "access-state-updated", Kc = "meeting-session-summary-updated", Xc = "meeting-session-state-updated", Zc = "waiting-participant-added", el = "waiting-participant-updated", tl = "waiting-participant-removed", nl = "track-started", rl = "track-stopped", il = "transcription-started", ol = "transcription-stopped", sl = "transcription-error", go = "recording-started", mo = "recording-stopped", al = "recording-stats", cl = "recording-error", ll = "recording-upload-completed", ul = "recording-data", dl = "app-message", pl = "transcription-message", hl = "remote-media-player-started", fl = "remote-media-player-updated", gl = "remote-media-player-stopped", ml = "local-screen-share-started", vl = "local-screen-share-stopped", yl = "local-screen-share-canceled", bl = "active-speaker-change", _l = "active-speaker-mode-change", wl = "network-quality-change", kl = "network-connection", Sl = "cpu-load-change", Ml = "face-counts-updated", dn = "fullscreen", pn = "exited-fullscreen", El = "live-streaming-started", Cl = "live-streaming-updated", Tl = "live-streaming-stopped", Ol = "live-streaming-error", Pl = "lang-updated", xl = "receive-settings-updated", vo = "input-settings-updated", yo = "nonfatal-error", sr = "error", ar = 4096, bo = 102400, cr = "iframe-call-message", _o = "local-screen-start", wo = "daily-method-update-live-streaming-endpoints", hn = "transmit-log", De = "daily-custom-track", kn = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image", FACE_DETECTION: "face-detection" }, Os = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" }, Dr = { PLAY: "play", PAUSE: "pause" }, gt = "daily", mt = "signalwire", lr = ["jpg", "png", "jpeg"], Al = "add-endpoints", Il = "remove-endpoints", ko = "sip-call-transfer";
function be() {
  return !J() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
}
function J() {
  return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative";
}
function Ps() {
  return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
}
function jl() {
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
  })(ct(), jn()) || J());
}
function So() {
  if (J() || !document) return !1;
  var t = document.createElement("iframe");
  return !!t.requestFullscreen || !!t.webkitRequestFullscreen;
}
var Nr = "none", Ll = "software", Dl = "hardware", Nl = (function() {
  try {
    var t, e = document.createElement("canvas"), n = !1;
    (t = e.getContext("webgl2", { failIfMajorPerformanceCaveat: !0 })) || (n = !0, t = e.getContext("webgl2"));
    var r = t != null;
    return e.remove(), r ? n ? Ll : Dl : Nr;
  } catch {
    return Nr;
  }
})();
function xs() {
  var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
  return !J() && Nl !== Nr && (t ? (function() {
    return Mo() ? !1 : ["Chrome", "Firefox"].includes(ct());
  })() : (function() {
    if (Mo()) return !1;
    var e = ct();
    if (e === "Safari") {
      var n = ii();
      if (n.major < 15 || n.major === 15 && n.minor < 4) return !1;
    }
    return e === "Chrome" ? ri().major >= 77 : e === "Firefox" ? oi().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(e);
  })());
}
function As() {
  if (J() || Is() || typeof AudioWorkletNode > "u") return !1;
  switch (ct()) {
    case "Chrome":
    case "Firefox":
      return !0;
    case "Safari":
      var t = jn();
      return t.major > 17 || t.major === 17 && t.minor >= 4;
  }
  return !1;
}
function ur() {
  return Ps() && typeof MediaStreamTrack < "u" && !(function() {
    var t, e = ct();
    if (!be()) return !0;
    switch (e) {
      case "Chrome":
        return (t = ri()).major && t.major > 0 && t.major < 75;
      case "Firefox":
        return (t = oi()).major < 91;
      case "Safari":
        return (t = ii()).major < 13 || t.major === 13 && t.minor < 1;
      default:
        return !0;
    }
  })();
}
function Is() {
  return be().match(/Linux; Android/);
}
function Mo() {
  var t, e = be(), n = e.match(/Mac/) && (!J() && typeof window < "u" && (t = window) !== null && t !== void 0 && (t = t.navigator) !== null && t !== void 0 && t.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
  return !!(e.match(/Mobi/) || e.match(/Android/) || n) || !!be().match(/DailyAnd\//) || void 0;
}
function ct() {
  if (typeof window < "u") {
    var t = be();
    return js() ? "Safari" : t.indexOf("Edge") > -1 ? "Edge" : t.match(/Chrome\//) ? "Chrome" : t.indexOf("Safari") > -1 || Ls() ? "Safari" : t.indexOf("Firefox") > -1 ? "Firefox" : t.indexOf("MSIE") > -1 || t.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
  }
}
function jn() {
  switch (ct()) {
    case "Chrome":
      return ri();
    case "Safari":
      return ii();
    case "Firefox":
      return oi();
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
function ri() {
  var t = 0, e = 0, n = 0, r = 0, i = !1;
  if (typeof window < "u") {
    var s = be(), a = s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
    if (a) try {
      t = parseInt(a[1]), e = parseInt(a[2]), n = parseInt(a[3]), r = parseInt(a[4]), i = s.indexOf("OPR/") > -1;
    } catch {
    }
  }
  return { major: t, minor: e, build: n, patch: r, opera: i };
}
function js() {
  return !!be().match(/\((iPad|iPhone|iPod)/i) && Ps();
}
function Ls() {
  return be().indexOf("AppleWebKit/605.1.15") > -1;
}
function ii() {
  var t = 0, e = 0, n = 0;
  if (typeof window < "u") {
    var r = be().match(/Version\/(\d+).(\d+)(.(\d+))?/);
    if (r) try {
      t = parseInt(r[1]), e = parseInt(r[2]), n = parseInt(r[4]);
    } catch {
    }
    else (js() || Ls()) && (t = 14, e = 0, n = 3);
  }
  return { major: t, minor: e, point: n };
}
function oi() {
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
var Ds = (function() {
  return fe(function t() {
    he(this, t);
  }, [{ key: "addListenerForMessagesFromCallMachine", value: function(t, e, n) {
    Dt();
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(t, e, n) {
    Dt();
  } }, { key: "sendMessageToCallMachine", value: function(t, e, n, r) {
    Dt();
  } }, { key: "sendMessageToDailyJs", value: function(t, e) {
    Dt();
  } }, { key: "removeListener", value: function(t) {
    Dt();
  } }]);
})();
function Eo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function dr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Eo(Object(n), !0).forEach(function(r) {
      Pe(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Eo(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Ns() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ns = function() {
    return !!t;
  })();
}
var Fl = (function() {
  function t() {
    var e, n, r, i;
    return he(this, t), n = this, r = Me(r = t), (e = Bn(n, Ns() ? Reflect.construct(r, [], Me(n).constructor) : r.apply(n, i)))._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return Rn(t, Ds), fe(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, n, r) {
    var i = this, s = function(a) {
      if (a.data && a.data.what === "iframe-call-message" && (!a.data.callClientId || a.data.callClientId === n) && (!a.data.from || a.data.from !== "module")) {
        var c = dr({}, a.data);
        if (delete c.from, c.callbackStamp && i._messageCallbacks[c.callbackStamp]) {
          var l = c.callbackStamp;
          i._messageCallbacks[l].call(r, c), delete i._messageCallbacks[l];
        }
        delete c.what, delete c.callbackStamp, e.call(r, c);
      }
    };
    this._wrappedListeners[e] = s, window.addEventListener("message", s);
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, n, r) {
    var i = function(s) {
      var a;
      if (!(!s.data || s.data.what !== cr || !s.data.action || s.data.from && s.data.from !== "module" || s.data.callClientId && n && s.data.callClientId !== n || s != null && (a = s.data) !== null && a !== void 0 && a.callFrameId)) {
        var c = s.data;
        e.call(r, c);
      }
    };
    this._wrappedListeners[e] = i, window.addEventListener("message", i);
  } }, { key: "sendMessageToCallMachine", value: function(e, n, r, i) {
    if (!r) throw new Error("undefined callClientId. Are you trying to use a DailyCall instance previously destroyed?");
    var s = dr({}, e);
    if (s.what = cr, s.from = "module", s.callClientId = r, n) {
      var a = $n();
      this._messageCallbacks[a] = n, s.callbackStamp = a;
    }
    var c = i ? i.contentWindow : window, l = this._callMachineTargetOrigin(i);
    l && c.postMessage(s, l);
  } }, { key: "sendMessageToDailyJs", value: function(e, n) {
    e.what = cr, e.callClientId = n, e.from = "embedded", window.postMessage(e, this._targetOriginFromWindowLocation());
  } }, { key: "removeListener", value: function(e) {
    var n = this._wrappedListeners[e];
    n && (window.removeEventListener("message", n), delete this._wrappedListeners[e]);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(e, n, r) {
    var i = dr({}, e);
    i.callClientId = r;
    var s = n ? n.contentWindow : window, a = this._callMachineTargetOrigin(n);
    a && s.postMessage(i, a);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(e, n) {
    var r = function(i) {
      if (i.data && i.data.what === "iframe-call-message" && (!i.data.callClientId || i.data.callClientId === n) && (!i.data.from || i.data.from !== "module")) {
        var s = i.data;
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
function Co(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Fs() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fs = function() {
    return !!t;
  })();
}
var Bl = (function() {
  function t() {
    var e, n, r, i;
    return he(this, t), n = this, r = Me(r = t), e = Bn(n, Fs() ? Reflect.construct(r, [], Me(n).constructor) : r.apply(n, i)), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new yr.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new yr.EventEmitter(), e._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return Rn(t, Ds), fe(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, n, r) {
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
  } }, { key: "_addListener", value: function(e, n, r, i, s) {
    var a = this, c = function(l) {
      if (l.callClientId === r) {
        if (l.callbackStamp && a._messageCallbacks[l.callbackStamp]) {
          var p = l.callbackStamp;
          a._messageCallbacks[p].call(i, l), delete a._messageCallbacks[p];
        }
        e.call(i, l);
      }
    };
    this._wrappedListeners[e] = c, n.addListener("message", c);
  } }, { key: "_sendMessage", value: function(e, n, r, i, s) {
    var a = (function(l) {
      for (var p = 1; p < arguments.length; p++) {
        var g = arguments[p] != null ? arguments[p] : {};
        p % 2 ? Co(Object(g), !0).forEach(function(v) {
          Pe(l, v, g[v]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(g)) : Co(Object(g)).forEach(function(v) {
          Object.defineProperty(l, v, Object.getOwnPropertyDescriptor(g, v));
        });
      }
      return l;
    })({}, e);
    if (a.callClientId = r, i) {
      var c = $n();
      this._messageCallbacks[c] = i, a.callbackStamp = c;
    }
    n.emit("message", a);
  } }]);
})(), Fr = "replace", Br = "shallow-merge", To = [Fr, Br], Rl = (function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.data, r = e.mergeStrategy, i = r === void 0 ? Fr : r;
    he(this, t), t._validateMergeStrategy(i), t._validateData(n, i), this.mergeStrategy = i, this.data = n;
  }
  return fe(t, [{ key: "isNoOp", value: function() {
    return t.isNoOpUpdate(this.data, this.mergeStrategy);
  } }], [{ key: "isNoOpUpdate", value: function(e, n) {
    return Object.keys(e).length === 0 && n === Br;
  } }, { key: "_validateMergeStrategy", value: function(e) {
    if (!To.includes(e)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(To, "]"));
  } }, { key: "_validateData", value: function(e, n) {
    if (!(function(c) {
      if (c == null || $(c) !== "object") return !1;
      var l = Object.getPrototypeOf(c);
      return l == null || l === Object.prototype;
    })(e)) throw Error("Meeting session data must be a plain (map-like) object");
    var r;
    try {
      if (r = JSON.stringify(e), n === Fr) {
        var i = JSON.parse(r);
        ae(i, e) || console.warn("The meeting session data provided will be modified when serialized.", i, e);
      } else if (n === Br) {
        for (var s in e) if (Object.hasOwnProperty.call(e, s) && e[s] !== void 0) {
          var a = JSON.parse(JSON.stringify(e[s]));
          ae(e[s], a) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", a, e[s]);
        }
      }
    } catch (c) {
      throw Error("Meeting session data must be serializable to JSON: ".concat(c));
    }
    if (r.length > bo) throw Error("Meeting session data is too large (".concat(r.length, " characters). Maximum size suppported is ").concat(bo, "."));
  } }]);
})();
function Bs() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Bs = function() {
    return !!t;
  })();
}
function Rr(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Rr = function(n) {
    if (n === null || !(function(i) {
      try {
        return Function.toString.call(i).indexOf("[native code]") !== -1;
      } catch {
        return typeof i == "function";
      }
    })(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (e !== void 0) {
      if (e.has(n)) return e.get(n);
      e.set(n, r);
    }
    function r() {
      return (function(i, s, a) {
        if (Bs()) return Reflect.construct.apply(null, arguments);
        var c = [null];
        c.push.apply(c, s);
        var l = new (i.bind.apply(i, c))();
        return a && Jt(l, a.prototype), l;
      })(n, arguments, Me(this).constructor);
    }
    return r.prototype = Object.create(n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), Jt(r, n);
  }, Rr(t);
}
function Rs() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Rs = function() {
    return !!t;
  })();
}
function Oo(t) {
  var e, n = (e = window._daily) === null || e === void 0 ? void 0 : e.pendings;
  if (n) {
    var r = n.indexOf(t);
    r !== -1 && n.splice(r, 1);
  }
}
var $l = (function() {
  return fe(function t(e) {
    he(this, t), this._currentLoad = null, this._callClientId = e, this._publicPath = null;
  }, [{ key: "load", value: function() {
    var t, e = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 ? arguments[2] : void 0;
    if (this.loaded) return window._daily.instances[this._callClientId].callMachine.reset(), window._daily.instances[this._callClientId].publicPath = this._publicPath, void r(!0);
    t = this._callClientId, window._daily.pendings.push(t), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new Ul(n, function(s) {
      var a = s.substring(0, s.lastIndexOf("/"));
      a.length && a.slice(-1) !== "/" && (a += "/"), e._publicPath = a, window._daily.instances[e._callClientId].publicPath = a, ls(zr(s)), r(!1);
    }, function(s, a) {
      a || Oo(e._callClientId), i(s, a);
    }), this._currentLoad.start();
  } }, { key: "cancel", value: function() {
    this._currentLoad && this._currentLoad.cancel(), Oo(this._callClientId);
  } }, { key: "loaded", get: function() {
    return this._currentLoad && this._currentLoad.succeeded;
  } }]);
})(), Ul = (function() {
  return fe(function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
    he(this, t), this._dailyConfig = e, this._successCallback = n, this._failureCallback = r, this._urls = (function(i) {
      var s;
      if (ds(i)) return [Tn(i)];
      var a = (s = ge ?? ps()) !== null && s !== void 0 ? s : re[0];
      return (a === re[0] ? re : [a].concat(cs(re.filter(function(c) {
        return c !== a;
      })))).map(function(c) {
        return Tn(i, c);
      });
    })(e), this._networkTimeoutMs = Vl, this._passesRemaining = 3, this._urlIndex = 0, this._currentAttempt = null;
  }, [{ key: "start", value: function() {
    this._currentAttempt || this._startAttempt();
  } }, { key: "_startAttempt", value: function() {
    this._currentAttempt = new Jl(this._dailyConfig, this._urls[this._urlIndex], this._networkTimeoutMs, this._successCallback, this._retryOrFailureCallback.bind(this)), this._currentAttempt.start();
  } }, { key: "_retryOrFailureCallback", value: function(t) {
    var e = this;
    if (!this._currentAttempt.cancelled) {
      this._urlIndex++;
      var n = this._urlIndex < this._urls.length, r = this._passesRemaining > 1, i = n || r;
      this._failureCallback(t, i), i && (n ? this._startAttempt() : (this._passesRemaining--, this._urlIndex = 0, setTimeout(function() {
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
})(), pr = (function() {
  function t() {
    return he(this, t), e = this, r = arguments, n = Me(n = t), Bn(e, Rs() ? Reflect.construct(n, r || [], Me(e).constructor) : n.apply(e, r));
    var e, n, r;
  }
  return Rn(t, Rr(Error)), fe(t);
})(), Vl = 2e4, Jl = (function() {
  return fe(function e(n, r, i, s, a) {
    he(this, e), this._loadAttemptImpl = J() || !n.avoidEval ? new ql(n, r, i, s, a) : new zl(n, r, i, s, a);
  }, [{ key: "start", value: (t = F(function* () {
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
})(), ql = (function() {
  return fe(function i(s, a, c, l, p) {
    he(this, i), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._networkTimeoutMs = c, this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache, this._refetchHeaders = null, this._dailyConfig = s, this._url = a, this._successCallback = l, this._failureCallback = p;
  }, [{ key: "start", value: (r = F(function* () {
    var i = this._url;
    !(yield this._tryLoadFromIOSCache(i)) && this._loadFromNetwork(i);
  }), function() {
    return r.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    clearTimeout(this._networkTimeout), this.cancelled = !0;
  } }, { key: "_tryLoadFromIOSCache", value: (n = F(function* (i) {
    if (!this._iosCache) return !1;
    try {
      var s = yield this._iosCache.get(i);
      return !!this.cancelled || !!s && (s.code ? (Function('"use strict";' + s.code)(), this.succeeded = !0, this._successCallback(i), !0) : (this._refetchHeaders = s.refetchHeaders, !1));
    } catch {
      return !1;
    }
  }), function(i) {
    return n.apply(this, arguments);
  }) }, { key: "_loadFromNetwork", value: (e = F(function* (i) {
    var s = this;
    this._networkTimeout = setTimeout(function() {
      s._networkTimedOut = !0, s._failureCallback({ msg: "Timed out (>".concat(s._networkTimeoutMs, " ms) when loading call object bundle ").concat(i), type: "timeout" });
    }, this._networkTimeoutMs);
    try {
      var a = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, c = yield fetch(i, a);
      if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new pr();
      var l = yield this._getBundleCodeFromResponse(i, c);
      if (this.cancelled) throw new pr();
      Function('"use strict";' + l)(), this._iosCache && this._iosCache.set(i, l, c.headers), this.succeeded = !0, this._successCallback(i);
    } catch (p) {
      if (clearTimeout(this._networkTimeout), p instanceof pr || this.cancelled || this._networkTimedOut) return;
      this._failureCallback({ msg: "Failed to load call object bundle ".concat(i, ": ").concat(p), type: p.message });
    }
  }), function(i) {
    return e.apply(this, arguments);
  }) }, { key: "_getBundleCodeFromResponse", value: (t = F(function* (i, s) {
    if (s.ok) return yield s.text();
    if (this._iosCache && s.status === 304) return (yield this._iosCache.renew(i, s.headers)).code;
    throw new Error("Received ".concat(s.status, " response"));
  }), function(i, s) {
    return t.apply(this, arguments);
  }) }]);
  var t, e, n, r;
})(), zl = (function() {
  return fe(function t(e, n, r, i, s) {
    he(this, t), this.cancelled = !1, this.succeeded = !1, this._dailyConfig = e, this._url = n, this._networkTimeoutMs = r, this._successCallback = i, this._failureCallback = s, this._attemptId = $n(), this._networkTimeout = null, this._scriptElement = null;
  }, [{ key: "start", value: function() {
    window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = /* @__PURE__ */ new Set());
    var t = this._url;
    (typeof document > "u" ? "undefined" : $(document)) === "object" ? this._startLoading(t) : this._failureCallback({ msg: "Call object bundle must be loaded in a DOM/web context", type: "missing context" });
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
    }, r.onerror = function(i) {
      e._stopLoading(), e._failureCallback({ msg: "Failed to load call object bundle ".concat(i.target.src), type: i.message });
    }, r.src = t, n.appendChild(r);
  } }, { key: "_stopLoading", value: function() {
    this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
  } }, { key: "_signUpForCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.add(this._attemptId);
  } }, { key: "_withdrawFromCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
  } }]);
})(), fn = function(t, e, n) {
  return Hl(t.local, e, n) === !0;
}, Wl = function(t, e, n) {
  return t.local.streams && t.local.streams[e] && t.local.streams[e].stream && t.local.streams[e].stream["get".concat(n === "video" ? "Video" : "Audio", "Tracks")]()[0];
}, bt = function(t, e, n, r) {
  var i = Gl(t, e, n, r);
  return i && i.pendingTrack;
}, Hl = function(t, e, n) {
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
  }, i = t.public.subscribedTracks;
  return i && i[e] ? ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(n) === -1 && i[e].custom ? [!0, "staged"].includes(i[e].custom) ? r(i[e].custom) : r(i[e].custom[n]) : r(i[e][n]) : !i || r(i.ALL);
}, Gl = function(t, e, n, r) {
  var i = Object.values(t.streams || {}).filter(function(s) {
    return s.participantId === e && s.type === n && s.pendingTrack && s.pendingTrack.kind === r;
  }).sort(function(s, a) {
    return new Date(a.starttime) - new Date(s.starttime);
  });
  return i && i[0];
}, Yl = function(t, e) {
  var n = t.local.public.customTracks;
  if (n && n[e]) return n[e].track;
};
function Po(t, e) {
  for (var n = e.getState(), r = 0, i = ["cam", "screen"]; r < i.length; r++) for (var s = i[r], a = 0, c = ["video", "audio"]; a < c.length; a++) {
    var l = c[a], p = s === "cam" ? l : "screen".concat(l.charAt(0).toUpperCase() + l.slice(1)), g = t.tracks[p];
    if (g) {
      var v = t.local ? Wl(n, s, l) : bt(n, t.session_id, s, l);
      g.state === "playable" && (g.track = v), g.persistentTrack = v;
    }
  }
}
function xo(t, e) {
  try {
    var n = e.getState();
    for (var r in t.tracks) if (!Ql(r)) {
      var i = t.tracks[r].kind;
      if (i) {
        var s = t.tracks[r];
        if (s) {
          var a = t.local ? Yl(n, r) : bt(n, t.session_id, r, i);
          s.state === "playable" && (t.tracks[r].track = a), s.persistentTrack = a;
        }
      } else console.error("unknown type for custom track");
    }
  } catch (c) {
    console.error(c);
  }
}
function Ql(t) {
  return ["video", "audio", "screenVideo", "screenAudio"].includes(t);
}
function Ao(t, e, n) {
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
    var i = !0;
    try {
      var s = r.participants[t.session_id];
      s && s.public && s.public.rtcType && s.public.rtcType.impl === "peer-to-peer" && s.private && !["connected", "completed"].includes(s.private.peeringState) && (i = !1);
    } catch (g) {
      console.error(g);
    }
    if (!i) return t.audio = !1, t.audioTrack = !1, t.video = !1, t.videoTrack = !1, t.screen = !1, void (t.screenTrack = !1);
    try {
      if (r.streams, t.audio && fn(r, t.session_id, "cam-audio")) {
        var a = bt(r, t.session_id, "cam", "audio");
        a && (e && e.audioTrack && e.audioTrack.id === a.id ? t.audioTrack = a : a.muted || (t.audioTrack = a)), t.audioTrack || (t.audio = !1);
      }
      if (t.video && fn(r, t.session_id, "cam-video")) {
        var c = bt(r, t.session_id, "cam", "video");
        c && (e && e.videoTrack && e.videoTrack.id === c.id ? t.videoTrack = c : c.muted || (t.videoTrack = c)), t.videoTrack || (t.video = !1);
      }
      if (t.screen && fn(r, t.session_id, "screen-audio")) {
        var l = bt(r, t.session_id, "screen", "audio");
        l && (e && e.screenAudioTrack && e.screenAudioTrack.id === l.id ? t.screenAudioTrack = l : l.muted || (t.screenAudioTrack = l));
      }
      if (t.screen && fn(r, t.session_id, "screen-video")) {
        var p = bt(r, t.session_id, "screen", "video");
        p && (e && e.screenVideoTrack && e.screenVideoTrack.id === p.id ? t.screenVideoTrack = p : p.muted || (t.screenVideoTrack = p));
      }
      t.screenVideoTrack || t.screenAudioTrack || (t.screen = !1);
    } catch (g) {
      console.error("unexpected error matching up tracks", g);
    }
  }
}
function Kl(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = (function(l, p) {
      if (l) {
        if (typeof l == "string") return Io(l, p);
        var g = {}.toString.call(l).slice(8, -1);
        return g === "Object" && l.constructor && (g = l.constructor.name), g === "Map" || g === "Set" ? Array.from(l) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? Io(l, p) : void 0;
      }
    })(t)) || e) {
      n && (t = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(l) {
        throw l;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, c = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var l = n.next();
    return a = l.done, l;
  }, e: function(l) {
    c = !0, s = l;
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
var Te = /* @__PURE__ */ new Map(), wt = null;
function Xl(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = (function(l, p) {
      if (l) {
        if (typeof l == "string") return jo(l, p);
        var g = {}.toString.call(l).slice(8, -1);
        return g === "Object" && l.constructor && (g = l.constructor.name), g === "Map" || g === "Set" ? Array.from(l) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? jo(l, p) : void 0;
      }
    })(t)) || e) {
      n && (t = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(l) {
        throw l;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, c = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var l = n.next();
    return a = l.done, l;
  }, e: function(l) {
    c = !0, s = l;
  }, f: function() {
    try {
      a || n.return == null || n.return();
    } finally {
      if (c) throw s;
    }
  } };
}
function jo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Oe = /* @__PURE__ */ new Map(), $t = null;
function Zl(t) {
  $s() ? (function(e) {
    Te.has(e) || (Te.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(n) {
      Te.has(e) && (Te.get(e).lastDevicesString = JSON.stringify(n), wt || (wt = (function() {
        var r = F(function* () {
          var i, s = yield navigator.mediaDevices.enumerateDevices(), a = Kl(Te.keys());
          try {
            for (a.s(); !(i = a.n()).done; ) {
              var c = i.value, l = JSON.stringify(s);
              l !== Te.get(c).lastDevicesString && (Te.get(c).lastDevicesString = l, c(s));
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
      })(), navigator.mediaDevices.addEventListener("devicechange", wt)));
    }).catch(function() {
    }));
  })(t) : (function(e) {
    Oe.has(e) || (Oe.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(n) {
      Oe.has(e) && (Oe.get(e).lastDevicesString = JSON.stringify(n), $t || ($t = setInterval(F(function* () {
        var r, i = yield navigator.mediaDevices.enumerateDevices(), s = Xl(Oe.keys());
        try {
          for (s.s(); !(r = s.n()).done; ) {
            var a = r.value, c = JSON.stringify(i);
            c !== Oe.get(a).lastDevicesString && (Oe.get(a).lastDevicesString = c, a(i));
          }
        } catch (l) {
          s.e(l);
        } finally {
          s.f();
        }
      }), 3e3)));
    }));
  })(t);
}
function eu(t) {
  $s() ? (function(e) {
    Te.has(e) && (Te.delete(e), Te.size === 0 && wt && (navigator.mediaDevices.removeEventListener("devicechange", wt), wt = null));
  })(t) : (function(e) {
    Oe.has(e) && (Oe.delete(e), Oe.size === 0 && $t && (clearInterval($t), $t = null));
  })(t);
}
function $s() {
  var t;
  return J() || ((t = navigator.mediaDevices) === null || t === void 0 ? void 0 : t.ondevicechange) !== void 0;
}
var tu = /* @__PURE__ */ new Set();
function nu(t, e) {
  return t && t.readyState === "live" && !(function(n, r) {
    return n.muted && !tu.has(n.id);
  })(t);
}
function Lo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $e(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Lo(Object(n), !0).forEach(function(r) {
      Pe(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lo(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Rt = Object.freeze({ VIDEO: "video", AUDIO: "audio", SCREEN_VIDEO: "screenVideo", SCREEN_AUDIO: "screenAudio", CUSTOM_VIDEO: "customVideo", CUSTOM_AUDIO: "customAudio" }), ru = Object.freeze({ PARTICIPANTS: "participants", STREAMING: "streaming", TRANSCRIPTION: "transcription" }), Ut = Object.values(Rt), Do = ["v", "a", "sv", "sa", "cv", "ca"];
Object.freeze(Ut.reduce(function(t, e, n) {
  return t[e] = Do[n], t;
}, {})), Object.freeze(Do.reduce(function(t, e, n) {
  return t[e] = Ut[n], t;
}, {}));
var iu = [Rt.VIDEO, Rt.AUDIO, Rt.SCREEN_VIDEO, Rt.SCREEN_AUDIO], No = Object.values(ru), Fo = ["p", "s", "t"];
Object.freeze(No.reduce(function(t, e, n) {
  return t[e] = Fo[n], t;
}, {})), Object.freeze(Fo.reduce(function(t, e, n) {
  return t[e] = No[n], t;
}, {}));
var Us = (function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.base, r = e.byUserId, i = e.byParticipantId;
    he(this, t), this.base = n, this.byUserId = r, this.byParticipantId = i;
  }
  return fe(t, [{ key: "clone", value: function() {
    var e = new t();
    if (this.base instanceof ee ? e.base = this.base.clone() : e.base = this.base, this.byUserId !== void 0) for (var n in e.byUserId = {}, this.byUserId) {
      var r = this.byUserId[n];
      e.byUserId[n] = r instanceof ee ? r.clone() : r;
    }
    if (this.byParticipantId !== void 0) for (var i in e.byParticipantId = {}, this.byParticipantId) {
      var s = this.byParticipantId[i];
      e.byParticipantId[i] = s instanceof ee ? s.clone() : s;
    }
    return e;
  } }, { key: "toJSONObject", value: function() {
    var e = {};
    if (typeof this.base == "boolean" ? e.base = this.base : this.base instanceof ee && (e.base = this.base.toJSONObject()), this.byUserId !== void 0) for (var n in e.byUserId = {}, this.byUserId) {
      var r = this.byUserId[n];
      e.byUserId[n] = r instanceof ee ? r.toJSONObject() : r;
    }
    if (this.byParticipantId !== void 0) for (var i in e.byParticipantId = {}, this.byParticipantId) {
      var s = this.byParticipantId[i];
      e.byParticipantId[i] = s instanceof ee ? s.toJSONObject() : s;
    }
    return e;
  } }, { key: "toMinifiedJSONObject", value: function() {
    var e = {};
    if (this.base !== void 0 && (typeof this.base == "boolean" ? e.b = this.base : e.b = this.base.toMinifiedJSONObject()), this.byUserId !== void 0) for (var n in e.u = {}, this.byUserId) {
      var r = this.byUserId[n];
      e.u[n] = typeof r == "boolean" ? r : r.toMinifiedJSONObject();
    }
    if (this.byParticipantId !== void 0) for (var i in e.p = {}, this.byParticipantId) {
      var s = this.byParticipantId[i];
      e.p[i] = typeof s == "boolean" ? s : s.toMinifiedJSONObject();
    }
    return e;
  } }, { key: "normalize", value: function() {
    return this.base instanceof ee && (this.base = this.base.normalize()), this.byUserId && (this.byUserId = Object.fromEntries(Object.entries(this.byUserId).map(function(e) {
      var n = X(e, 2), r = n[0], i = n[1];
      return [r, i instanceof ee ? i.normalize() : i];
    }))), this.byParticipantId && (this.byParticipantId = Object.fromEntries(Object.entries(this.byParticipantId).map(function(e) {
      var n = X(e, 2), r = n[0], i = n[1];
      return [r, i instanceof ee ? i.normalize() : i];
    }))), this;
  } }], [{ key: "fromJSONObject", value: function(e) {
    var n, r, i;
    if (e.base !== void 0 && (n = typeof e.base == "boolean" ? e.base : ee.fromJSONObject(e.base)), e.byUserId !== void 0) for (var s in r = {}, e.byUserId) {
      var a = e.byUserId[s];
      r[s] = typeof a == "boolean" ? a : ee.fromJSONObject(a);
    }
    if (e.byParticipantId !== void 0) for (var c in i = {}, e.byParticipantId) {
      var l = e.byParticipantId[c];
      i[c] = typeof l == "boolean" ? l : ee.fromJSONObject(l);
    }
    return new t({ base: n, byUserId: r, byParticipantId: i });
  } }, { key: "fromMinifiedJSONObject", value: function(e) {
    var n, r, i;
    if (e.b !== void 0 && (n = typeof e.b == "boolean" ? e.b : ee.fromMinifiedJSONObject(e.b)), e.u !== void 0) for (var s in r = {}, e.u) {
      var a = e.u[s];
      r[s] = typeof a == "boolean" ? a : ee.fromMinifiedJSONObject(a);
    }
    if (e.p !== void 0) for (var c in i = {}, e.p) {
      var l = e.p[c];
      i[c] = typeof l == "boolean" ? l : ee.fromMinifiedJSONObject(l);
    }
    return new t({ base: n, byUserId: r, byParticipantId: i });
  } }, { key: "validateJSONObject", value: function(e) {
    if ($(e) !== "object") return [!1, "canReceive must be an object"];
    for (var n = ["base", "byUserId", "byParticipantId"], r = 0, i = Object.keys(e); r < i.length; r++) {
      var s = i[r];
      if (!n.includes(s)) return [!1, "canReceive can only contain keys (".concat(n.join(", "), ")")];
      if (s === "base") {
        var a = X(ee.validateJSONObject(e.base, !0), 2), c = a[0], l = a[1];
        if (!c) return [!1, l];
      } else {
        if ($(e[s]) !== "object") return [!1, "invalid (non-object) value for field '".concat(s, "' in canReceive")];
        for (var p = 0, g = Object.values(e[s]); p < g.length; p++) {
          var v = g[p], O = X(ee.validateJSONObject(v), 2), E = O[0], w = O[1];
          if (!E) return [!1, w];
        }
      }
    }
    return [!0];
  } }]);
})(), ee = (function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.video, r = e.audio, i = e.screenVideo, s = e.screenAudio, a = e.customVideo, c = e.customAudio;
    he(this, t), this.video = n, this.audio = r, this.screenVideo = i, this.screenAudio = s, this.customVideo = a, this.customAudio = c;
  }
  return fe(t, [{ key: "clone", value: function() {
    var e = new t();
    return this.video !== void 0 && (e.video = this.video), this.audio !== void 0 && (e.audio = this.audio), this.screenVideo !== void 0 && (e.screenVideo = this.screenVideo), this.screenAudio !== void 0 && (e.screenAudio = this.screenAudio), this.customVideo !== void 0 && (e.customVideo = $e({}, this.customVideo)), this.customAudio !== void 0 && (e.customAudio = $e({}, this.customAudio)), e;
  } }, { key: "toJSONObject", value: function() {
    var e = {};
    return this.video !== void 0 && (e.video = this.video), this.audio !== void 0 && (e.audio = this.audio), this.screenVideo !== void 0 && (e.screenVideo = this.screenVideo), this.screenAudio !== void 0 && (e.screenAudio = this.screenAudio), this.customVideo !== void 0 && (e.customVideo = $e({}, this.customVideo)), this.customAudio !== void 0 && (e.customAudio = $e({}, this.customAudio)), e;
  } }, { key: "toMinifiedJSONObject", value: function() {
    var e = {};
    return this.video !== void 0 && (e.v = this.video), this.audio !== void 0 && (e.a = this.audio), this.screenVideo !== void 0 && (e.sv = this.screenVideo), this.screenAudio !== void 0 && (e.sa = this.screenAudio), this.customVideo !== void 0 && (e.cv = $e({}, this.customVideo)), this.customAudio !== void 0 && (e.ca = $e({}, this.customAudio)), e;
  } }, { key: "normalize", value: function() {
    function e(n, r) {
      return n && Object.keys(n).length === 1 && n["*"] === r;
    }
    return !(this.video !== !0 || this.audio !== !0 || this.screenVideo !== !0 || this.screenAudio !== !0 || !e(this.customVideo, !0) || !e(this.customAudio, !0)) || (this.video !== !1 || this.audio !== !1 || this.screenVideo !== !1 || this.screenAudio !== !1 || !e(this.customVideo, !1) || !e(this.customAudio, !1)) && this;
  } }], [{ key: "fromBoolean", value: function(e) {
    return new t({ video: e, audio: e, screenVideo: e, screenAudio: e, customVideo: { "*": e }, customAudio: { "*": e } });
  } }, { key: "fromJSONObject", value: function(e) {
    return new t({ video: e.video, audio: e.audio, screenVideo: e.screenVideo, screenAudio: e.screenAudio, customVideo: e.customVideo !== void 0 ? $e({}, e.customVideo) : void 0, customAudio: e.customAudio !== void 0 ? $e({}, e.customAudio) : void 0 });
  } }, { key: "fromMinifiedJSONObject", value: function(e) {
    return new t({ video: e.v, audio: e.a, screenVideo: e.sv, screenAudio: e.sa, customVideo: e.cv, customAudio: e.ca });
  } }, { key: "validateJSONObject", value: function(e, n) {
    if (typeof e == "boolean") return [!0];
    if ($(e) !== "object") return [!1, "invalid (non-object, non-boolean) value in canReceive"];
    for (var r = Object.keys(e), i = 0, s = r; i < s.length; i++) {
      var a = s[i];
      if (!Ut.includes(a)) return [!1, "invalid media type '".concat(a, "' in canReceive")];
      if (iu.includes(a)) {
        if (typeof e[a] != "boolean") return [!1, "invalid (non-boolean) value for media type '".concat(a, "' in canReceive")];
      } else {
        if ($(e[a]) !== "object") return [!1, "invalid (non-object) value for media type '".concat(a, "' in canReceive")];
        for (var c = 0, l = Object.values(e[a]); c < l.length; c++)
          if (typeof l[c] != "boolean") return [!1, "invalid (non-boolean) value for entry within '".concat(a, "' in canReceive")];
        if (n && e[a]["*"] === void 0) return [!1, `canReceive "base" permission must specify "*" as an entry within '`.concat(a, "'")];
      }
    }
    return n && r.length !== Ut.length ? [!1, 'canReceive "base" permission must specify all media types: '.concat(Ut.join(", "), " (or be set to a boolean shorthand)")] : [!0];
  } }]);
})(), ou = ["initialReceiveBitrate"], su = ["initialReceiveBitrate"], au = ["result"], cu = ["preserveIframe"];
function Bo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function I(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bo(Object(n), !0).forEach(function(r) {
      Pe(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bo(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Vs() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vs = function() {
    return !!t;
  })();
}
function $r(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = (function(l, p) {
      if (l) {
        if (typeof l == "string") return Ro(l, p);
        var g = {}.toString.call(l).slice(8, -1);
        return g === "Object" && l.constructor && (g = l.constructor.name), g === "Map" || g === "Set" ? Array.from(l) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? Ro(l, p) : void 0;
      }
    })(t)) || e) {
      n && (t = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(l) {
        throw l;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, c = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var l = n.next();
    return a = l.done, l;
  }, e: function(l) {
    c = !0, s = l;
  }, f: function() {
    try {
      a || n.return == null || n.return();
    } finally {
      if (c) throw s;
    }
  } };
}
function Ro(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var Ke = {}, $o = "video", lu = "voice", Uo = 3e4, Vo = 4294967295, Jo = J() ? { data: {} } : { data: {}, topology: "none" }, qo = { present: 0, hidden: 0 }, Js = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } }, hr = Object.keys(Js), zo = ["state", "volume", "simulcastEncodings"], Wo = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } }, Ln = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string", visualState: "'default' | 'sidebar-open' | 'active'" } }, Ur = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } }, qs = /^[a-zA-Z0-9_-]+$/;
function Ho(t) {
  if (t != null && $(t) === "object" && !Array.isArray(t)) {
    var e, n = {}, r = $r(Object.entries(t).slice(0, 10));
    try {
      for (r.s(); !(e = r.n()).done; ) {
        var i = X(e.value, 2), s = i[0], a = i[1];
        typeof s != "string" || s.length > 64 || qs.test(s) && typeof a == "string" && (n[s] = a.slice(0, 256));
      }
    } catch (c) {
      r.e(c);
    } finally {
      r.f();
    }
    return Object.keys(n).length ? n : void 0;
  }
}
var Xe = { customIntegrations: { validate: Xs, help: Qs() }, customTrayButtons: { validate: Ks, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(Ln)) }, url: { validate: function(t) {
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
  return Zs(t, Wo);
}, help: "reactNativeConfig should look like ".concat(JSON.stringify(Wo), ", all fields optional") }, lang: { validate: function(t) {
  return ["cs", "da", "de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sk", "sv", "tr", "user"].includes(t);
}, help: "language not supported. Options are: cs, da, de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sk, sv, tr, user" }, userName: !0, userData: { validate: function(t) {
  try {
    return zs(t), !0;
  } catch (e) {
    return console.error(e), !1;
  }
}, help: "invalid userData type provided" }, startVideoOff: !0, startAudioOff: !0, allowLocalVideo: !0, allowLocalAudio: !0, activeSpeakerMode: !0, showLeaveButton: !0, showLocalVideo: !0, showParticipantsBar: !0, showFullscreenButton: !0, showUserNameChangeUI: !0, iframeStyle: !0, customLayout: !0, cssFile: !0, cssText: !0, bodyClass: !0, videoSource: { validate: function(t, e) {
  if (typeof t == "boolean") return e._preloadCache.allowLocalVideo = t, !0;
  var n;
  if (t instanceof MediaStreamTrack) e._sharedTracks.videoTrack = t, n = { customTrack: De };
  else {
    if (delete e._sharedTracks.videoTrack, typeof t != "string") return console.error("videoSource must be a MediaStreamTrack, boolean, or a string"), !1;
    n = { deviceId: t };
  }
  return e._updatePreloadCacheInputSettings({ video: { settings: n } }, !1), !0;
} }, audioSource: { validate: function(t, e) {
  if (typeof t == "boolean") return e._preloadCache.allowLocalAudio = t, !0;
  var n;
  if (t instanceof MediaStreamTrack) e._sharedTracks.audioTrack = t, n = { customTrack: De };
  else {
    if (delete e._sharedTracks.audioTrack, typeof t != "string") return console.error("audioSource must be a MediaStreamTrack, boolean, or a string"), !1;
    n = { deviceId: t };
  }
  return e._updatePreloadCacheInputSettings({ audio: { settings: n } }, !1), !0;
} }, subscribeToTracksAutomatically: { validate: function(t, e) {
  return e._preloadCache.subscribeToTracksAutomatically = t, !0;
} }, theme: { validate: function(t) {
  var e = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], n = function(r) {
    for (var i = 0, s = Object.keys(r); i < s.length; i++) {
      var a = s[i];
      if (!e.includes(a)) return console.error('unsupported color "'.concat(a, '". Valid colors: ').concat(e.join(", "))), !1;
      if (!r[a].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(a, ' theme color should be provided in valid hex color format. Received: "').concat(r[a], '"')), !1;
    }
    return !0;
  };
  return $(t) === "object" && ("light" in t && "dark" in t || "colors" in t) ? "light" in t && "dark" in t ? "colors" in t.light ? "colors" in t.dark ? n(t.light.colors) && n(t.dark.colors) : (console.error('Dark theme is missing "colors" property.', t), !1) : (console.error('Light theme is missing "colors" property.', t), !1) : n(t.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', t), !1);
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
  var n = t.initialReceiveBitrate, r = bn(t, ou);
  if (n !== void 0 && !e._callObjectMode) throw new Error("initialReceiveBitrate is only available in call object mode");
  return (function(i) {
    if (i !== void 0 && (!Number.isInteger(i) || i < Uo || i > Vo)) throw new Error("initialReceiveBitrate must be a whole number of bits per second, between ".concat(Uo, " and ").concat(Vo));
  })(n), Ws(r, { allowAllParticipantsKey: !1 });
}, help: Ys({ allowAllParticipantsKey: !1 }) }, sendSettings: { validate: function(t, e) {
  return !!(function(n, r) {
    try {
      return r.validateUpdateSendSettings(n), !0;
    } catch (i) {
      return console.error("Failed to validate send settings", i), !1;
    }
  })(t, e) && (e._preloadCache.sendSettings = t, !0);
}, help: "Invalid sendSettings provided. Check error logs for detailed info." }, inputSettings: { validate: function(t, e) {
  var n;
  return !!Hs(t) && (e._inputSettings || (e._inputSettings = {}), Gs(t, (n = e.properties) === null || n === void 0 ? void 0 : n.dailyConfig, e._sharedTracks), e._updatePreloadCacheInputSettings(t, !0), !0);
}, help: Vr() }, layout: { validate: function(t) {
  return t === "custom-v1" || t === "browser" || t === "none";
}, help: 'layout may only be set to "custom-v1"', queryString: "layout" }, emb: { queryString: "emb" }, embHref: { queryString: "embHref" }, dailyJsVersion: { queryString: "dailyJsVersion" }, aboutClient: { validate: function(t) {
  if (t == null) return !0;
  if ($(t) !== "object" || Array.isArray(t)) return !1;
  var e = Object.entries(t);
  if (e.length > 10) return !1;
  for (var n = 0, r = e; n < r.length; n++) {
    var i = X(r[n], 2), s = i[0], a = i[1];
    if (typeof s != "string" || s.length > 64 || !qs.test(s) || typeof a != "string" || a.length > 256) return !1;
  }
  return !0;
}, help: "aboutClient must be an object with up to ".concat(10, " entries; keys must be strings made up of characters (a-z, 0-9, _, -) and a max length of ").concat(64, "; values must be strings with a max length of ").concat(256) }, proxy: { queryString: "proxy" }, strictMode: !0, allowMultipleCallInstances: !0 }, gn = { styles: { validate: function(t) {
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
  if (n.includes(t) || !J() && t === "avatar") return !0;
  var r = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"], i = function(s) {
    var a = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    for (var c in s) if (c === "custom") {
      if (!n.includes(s[c]) && !i(s[c], !0)) return !1;
    } else {
      var l = !a && !r.includes(c), p = !n.includes(s[c]);
      if (l || p) return !1;
    }
    return !0;
  };
  return i(t);
}, help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(J() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }") }, setAudio: !0, setVideo: !0, setScreenShare: { validate: function(t) {
  return t === !1;
}, help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares" }, eject: !0, updatePermissions: { validate: function(t) {
  for (var e = 0, n = Object.entries(t); e < n.length; e++) {
    var r = X(n[e], 2), i = r[0], s = r[1];
    switch (i) {
      case "hasPresence":
        if (typeof s != "boolean") return !1;
        break;
      case "canSend":
        if (s instanceof Set || s instanceof Array || Array.isArray(s)) {
          var a, c = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], l = $r(s);
          try {
            for (l.s(); !(a = l.n()).done; ) {
              var p = a.value;
              if (!c.includes(p)) return !1;
            }
          } catch (_) {
            l.e(_);
          } finally {
            l.f();
          }
        } else if (typeof s != "boolean") return !1;
        (s instanceof Array || Array.isArray(s)) && (t.canSend = new Set(s));
        break;
      case "canReceive":
        var g = X(Us.validateJSONObject(s), 2), v = g[0], O = g[1];
        if (!v) return console.error(O), !1;
        break;
      case "canAdmin":
        if (s instanceof Set || s instanceof Array || Array.isArray(s)) {
          var E, w = ["participants", "streaming", "transcription"], m = $r(s);
          try {
            for (m.s(); !(E = m.n()).done; ) {
              var b = E.value;
              if (!w.includes(b)) return !1;
            }
          } catch (_) {
            m.e(_);
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
  var t = F(function* (e) {
    return new Promise(function(n, r) {
      var i = [];
      e.forEach(function(s) {
        return Promise.resolve(s).then(function(a) {
          n(a);
        }).catch(function(a) {
          i.push(a), i.length === e.length && r(i);
        });
      });
    });
  });
  return function(e) {
    return t.apply(this, arguments);
  };
})());
var Go = (function() {
  function t(o) {
    var d, u, h, f, k, M, T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (he(this, t), h = this, f = Me(f = t), Pe(u = Bn(h, Vs() ? Reflect.construct(f, [], Me(h).constructor) : f.apply(h, k)), "startListeningForDeviceChanges", function() {
      Zl(u.handleDeviceChange);
    }), Pe(u, "stopListeningForDeviceChanges", function() {
      eu(u.handleDeviceChange);
    }), Pe(u, "handleDeviceChange", function(Q) {
      Q = Q.map(function(oe) {
        return JSON.parse(JSON.stringify(oe));
      }), u.emitDailyJSEvent({ action: "available-devices-updated", availableDevices: Q });
    }), Pe(u, "handleNativeAppStateChange", (function() {
      var Q = F(function* (oe) {
        if (oe === "destroyed") return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield u.destroy());
        var We = oe === "active";
        u.disableReactNativeAutoDeviceManagement("video") || (We ? u.camUnmutedBeforeLosingNativeActiveState && u.setLocalVideo(!0) : (u.camUnmutedBeforeLosingNativeActiveState = u.localVideo(), u.camUnmutedBeforeLosingNativeActiveState && u.setLocalVideo(!1)));
      });
      return function(oe) {
        return Q.apply(this, arguments);
      };
    })()), Pe(u, "handleNativeAudioFocusChange", function(Q) {
      u.disableReactNativeAutoDeviceManagement("audio") || (u._hasNativeAudioFocus = Q, u.toggleParticipantAudioBasedOnNativeAudioFocus(), u._hasNativeAudioFocus ? u.micUnmutedBeforeLosingNativeAudioFocus && u.setLocalAudio(!0) : (u.micUnmutedBeforeLosingNativeAudioFocus = u.localAudio(), u.setLocalAudio(!1)));
    }), Pe(u, "handleNativeSystemScreenCaptureStop", function() {
      u.stopScreenShare();
    }), !ur() && !J()) throw new Error("WebRTC not supported or suppressed");
    if (u.strictMode = T.strictMode === void 0 || T.strictMode, u.allowMultipleCallInstances = (d = T.allowMultipleCallInstances) !== null && d !== void 0 && d, Object.keys(Ke).length && (u._logDuplicateInstanceAttempt(), !u.allowMultipleCallInstances)) {
      if (u.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
      console.warn("Using strictMode: false to allow multiple call instances is now deprecated. Set `allowMultipleCallInstances: true`");
    }
    if (window._daily || (window._daily = { pendings: [], instances: {} }), u.callClientId = $n(), Ke[(M = u).callClientId] = M, window._daily.instances[u.callClientId] = {}, u._sharedTracks = {}, window._daily.instances[u.callClientId].tracks = u._sharedTracks, T.dailyJsVersion = t.version(), T.aboutClient !== void 0 && (T.aboutClient = Ho(T.aboutClient)), u._iframe = o, u._callObjectMode = T.layout === "none" && !u._iframe, u._preloadCache = { subscribeToTracksAutomatically: !0, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }, T.showLocalVideo !== void 0 ? u._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : u._showLocalVideo = !!T.showLocalVideo : u._showLocalVideo = !0, T.showParticipantsBar !== void 0 ? u._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : u._showParticipantsBar = !!T.showParticipantsBar : u._showParticipantsBar = !0, T.customIntegrations !== void 0 ? u._callObjectMode ? console.error("customIntegrations is not available in call object mode") : u._customIntegrations = T.customIntegrations : u._customIntegrations = {}, T.customTrayButtons !== void 0 ? u._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : u._customTrayButtons = T.customTrayButtons : u._customTrayButtons = {}, T.activeSpeakerMode !== void 0 ? u._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : u._activeSpeakerMode = !!T.activeSpeakerMode : u._activeSpeakerMode = !1, T.receiveSettings) if (u._callObjectMode) {
      var P = T.receiveSettings;
      P.initialReceiveBitrate;
      var R = bn(P, su);
      u._receiveSettings = R;
    } else console.error("receiveSettings is only available in call object mode");
    else u._receiveSettings = {};
    if (u.validateProperties(T), u.properties = I({}, T), u.properties.aboutClient !== void 0 && (u.properties.aboutClient = Ho(u.properties.aboutClient)), u._inputSettings || (u._inputSettings = {}), u._callObjectLoader = u._callObjectMode ? new $l(u.callClientId) : null, u._callState = lo, u._isPreparingToJoin = !1, u._accessState = { access: or }, u._meetingSessionSummary = {}, u._finalSummaryOfPrevSession = {}, u._meetingSessionState = mr(Jo, u._callObjectMode), u._nativeInCallAudioMode = $o, u._participants = {}, u._isScreenSharing = !1, u._participantCounts = qo, u._rmpPlayerState = {}, u._waitingParticipants = {}, u._network = { threshold: "good", quality: 100, networkState: "unknown", stats: {} }, u._activeSpeaker = {}, u._localAudioLevel = 0, u._isLocalAudioLevelObserverRunning = !1, u._remoteParticipantsAudioLevel = {}, u._isRemoteParticipantsAudioLevelObserverRunning = !1, u._maxAppMessageSize = ar, u._messageChannel = J() ? new Bl() : new Fl(), u._iframe && (u._iframe.requestFullscreen ? u._iframe.addEventListener("fullscreenchange", function() {
      document.fullscreenElement === u._iframe ? (u.emitDailyJSEvent({ action: dn }), u.sendMessageToCallMachine({ action: dn })) : (u.emitDailyJSEvent({ action: pn }), u.sendMessageToCallMachine({ action: pn }));
    }) : u._iframe.webkitRequestFullscreen && u._iframe.addEventListener("webkitfullscreenchange", function() {
      document.webkitFullscreenElement === u._iframe ? (u.emitDailyJSEvent({ action: dn }), u.sendMessageToCallMachine({ action: dn })) : (u.emitDailyJSEvent({ action: pn }), u.sendMessageToCallMachine({ action: pn }));
    })), J()) {
      var U = u.nativeUtils();
      U.addAudioFocusChangeListener && U.removeAudioFocusChangeListener && U.addAppStateChangeListener && U.removeAppStateChangeListener && U.addSystemScreenCaptureStopListener && U.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), u._hasNativeAudioFocus = !0, U.addAudioFocusChangeListener(u.handleNativeAudioFocusChange), U.addAppStateChangeListener(u.handleNativeAppStateChange), U.addSystemScreenCaptureStopListener(u.handleNativeSystemScreenCaptureStop);
    }
    return u._callObjectMode && u.startListeningForDeviceChanges(), u._messageChannel.addListenerForMessagesFromCallMachine(u.handleMessageFromCallMachine, u.callClientId, u), u;
  }
  return Rn(t, nn), fe(t, [{ key: "destroy", value: (Kt = F(function* () {
    var o;
    try {
      yield this.leave();
    } catch {
    }
    var d = this._iframe;
    if (d) {
      var u = d.parentElement;
      u && u.removeChild(d);
    }
    if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), J()) {
      var h = this.nativeUtils();
      h.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), h.removeAppStateChangeListener(this.handleNativeAppStateChange), h.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
    }
    this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0, this.emitDailyJSEvent({ action: "call-instance-destroyed" }), delete Ke[this.callClientId], !((o = window) === null || o === void 0 || (o = o._daily) === null || o === void 0) && o.instances && delete window._daily.instances[this.callClientId], this.strictMode && (this.callClientId = void 0);
  }), function() {
    return Kt.apply(this, arguments);
  }) }, { key: "isDestroyed", value: function() {
    return !!this._destroyed;
  } }, { key: "loadCss", value: function(o) {
    var d = o.bodyClass, u = o.cssFile, h = o.cssText;
    return V(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(u), bodyClass: d, cssText: h }), this;
  } }, { key: "iframe", value: function() {
    return V(), this._iframe;
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
  } }, { key: "validateParticipantProperties", value: function(o, d) {
    for (var u in d) {
      if (!gn[u]) throw new Error("unrecognized updateParticipant property ".concat(u));
      if (gn[u].validate && !gn[u].validate(d[u], this, this._participants[o])) throw new Error(gn[u].help);
    }
  } }, { key: "updateParticipant", value: function(o, d) {
    return this._participants.local && this._participants.local.session_id === o && (o = "local"), o && d && (this.validateParticipantProperties(o, d), this.sendMessageToCallMachine({ action: "update-participant", id: o, properties: d })), this;
  } }, { key: "updateParticipants", value: function(o) {
    var d = this._participants.local && this._participants.local.session_id;
    for (var u in o) u === d && (u = "local"), u && o[u] && this.validateParticipantProperties(u, o[u]);
    return this.sendMessageToCallMachine({ action: "update-participants", participants: o }), this;
  } }, { key: "updateWaitingParticipant", value: (Lt = F(function* () {
    var o = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (le(this._callObjectMode, "updateWaitingParticipant()"), z(this._callState, "updateWaitingParticipant()"), typeof d != "string" || $(u) !== "object") throw new Error("updateWaitingParticipant() must take an id string and a updates object");
    return new Promise(function(h, f) {
      o.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: d, updates: u }, function(k) {
        k.error && f(k.error), k.id || f(new Error("unknown error in updateWaitingParticipant()")), h({ id: k.id });
      });
    });
  }), function() {
    return Lt.apply(this, arguments);
  }) }, { key: "updateWaitingParticipants", value: (ie = F(function* () {
    var o = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "updateWaitingParticipants()"), z(this._callState, "updateWaitingParticipants()"), $(d) !== "object") throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
    return new Promise(function(u, h) {
      o.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: d }, function(f) {
        f.error && h(f.error), f.ids || h(new Error("unknown error in updateWaitingParticipants()")), u({ ids: f.ids });
      });
    });
  }), function() {
    return ie.apply(this, arguments);
  }) }, { key: "requestAccess", value: (H = F(function* () {
    var o = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = d.access, h = u === void 0 ? { level: Ic } : u, f = d.name, k = f === void 0 ? "" : f;
    return le(this._callObjectMode, "requestAccess()"), z(this._callState, "requestAccess()"), new Promise(function(M, T) {
      o.sendMessageToCallMachine({ action: "daily-method-request-access", access: h, name: k }, function(P) {
        P.error && T(P.error), P.access || T(new Error("unknown error in requestAccess()")), M({ access: P.access, granted: P.granted });
      });
    });
  }), function() {
    return H.apply(this, arguments);
  }) }, { key: "localAudio", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
  } }, { key: "localVideo", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
  } }, { key: "setLocalAudio", value: function(o) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return "forceDiscardTrack" in d && (J() ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), d = {}) : o && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), d = {})), this.sendMessageToCallMachine({ action: "local-audio", state: o, options: d }), this;
  } }, { key: "localScreenAudio", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenAudio.state) : null;
  } }, { key: "localScreenVideo", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenVideo.state) : null;
  } }, { key: "updateScreenShare", value: function(o) {
    if (this._isScreenSharing) return this.sendMessageToCallMachine({ action: "local-screen-update", options: o }), this;
    console.warn("There is no screen share in progress. Try calling startScreenShare first.");
  } }, { key: "setLocalVideo", value: function(o) {
    return this.sendMessageToCallMachine({ action: "local-video", state: o }), this;
  } }, { key: "_setAllowLocalAudio", value: function(o) {
    if (this._preloadCache.allowLocalAudio = o, this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-allow-local-audio", state: o }), this;
  } }, { key: "_setAllowLocalVideo", value: function(o) {
    if (this._preloadCache.allowLocalVideo = o, this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-allow-local-video", state: o }), this;
  } }, { key: "getReceiveSettings", value: (Qt = F(function* (o) {
    var d = this, u = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues, h = u !== void 0 && u;
    if (le(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized) return this._receiveSettings;
    switch ($(o)) {
      case "string":
        return new Promise(function(f) {
          d.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: o, showInheritedValues: h }, function(k) {
            f(k.receiveSettings);
          });
        });
      case "undefined":
        return this._receiveSettings;
      default:
        throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
    }
  }), function(o) {
    return Qt.apply(this, arguments);
  }) }, { key: "updateReceiveSettings", value: (jt = F(function* (o) {
    var d = this;
    if (le(this._callObjectMode, "updateReceiveSettings()"), o?.initialReceiveBitrate !== void 0) throw new Error("initialReceiveBitrate can only be set in the receiveSettings config property, when joining");
    if (!Ws(o, { allowAllParticipantsKey: !0 })) throw new Error(Ys({ allowAllParticipantsKey: !0 }));
    return z(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(u) {
      d.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: o }, function(h) {
        u({ receiveSettings: h.receiveSettings });
      });
    });
  }), function(o) {
    return jt.apply(this, arguments);
  }) }, { key: "_prepInputSettingsForSharing", value: function(o, d) {
    if (o) {
      var u = {};
      if (o.audio) {
        var h, f, k;
        o.audio.settings && (!Object.keys(o.audio.settings).length && d || (u.audio = { settings: I({}, o.audio.settings) })), d && (h = u.audio) !== null && h !== void 0 && (h = h.settings) !== null && h !== void 0 && h.customTrack && (u.audio.settings = { customTrack: this._sharedTracks.audioTrack });
        var M = ((f = o.audio.processor) === null || f === void 0 ? void 0 : f.type) === "none" && ((k = o.audio.processor) === null || k === void 0 ? void 0 : k._isDefaultWhenNone);
        if (o.audio.processor && !M) {
          var T = I({}, o.audio.processor);
          delete T._isDefaultWhenNone, u.audio = I(I({}, u.audio), {}, { processor: T });
        }
      }
      if (o.video) {
        var P, R, U;
        o.video.settings && (!Object.keys(o.video.settings).length && d || (u.video = { settings: I({}, o.video.settings) })), d && (P = u.video) !== null && P !== void 0 && (P = P.settings) !== null && P !== void 0 && P.customTrack && (u.video.settings = { customTrack: this._sharedTracks.videoTrack });
        var Q = ((R = o.video.processor) === null || R === void 0 ? void 0 : R.type) === "none" && ((U = o.video.processor) === null || U === void 0 ? void 0 : U._isDefaultWhenNone);
        if (o.video.processor && !Q) {
          var oe = I({}, o.video.processor);
          delete oe._isDefaultWhenNone, u.video = I(I({}, u.video), {}, { processor: oe });
        }
      }
      return u;
    }
  } }, { key: "getInputSettings", value: function() {
    var o = this;
    return V(), new Promise(function(d) {
      d(o._getInputSettings());
    });
  } }, { key: "_getInputSettings", value: function() {
    var o, d, u, h, f, k, M = { processor: { type: "none", _isDefaultWhenNone: !0 } };
    this._inputSettings ? (o = ((u = this._inputSettings) === null || u === void 0 ? void 0 : u.video) || M, d = ((h = this._inputSettings) === null || h === void 0 ? void 0 : h.audio) || M) : (o = ((f = this._preloadCache) === null || f === void 0 || (f = f.inputSettings) === null || f === void 0 ? void 0 : f.video) || M, d = ((k = this._preloadCache) === null || k === void 0 || (k = k.inputSettings) === null || k === void 0 ? void 0 : k.audio) || M);
    var T = { audio: d, video: o };
    return this._prepInputSettingsForSharing(T, !0);
  } }, { key: "_updatePreloadCacheInputSettings", value: function(o, d) {
    var u = this._inputSettings || {}, h = {};
    if (o.video) {
      var f, k, M;
      h.video = {}, o.video.settings ? (h.video.settings = {}, d || o.video.settings.customTrack || (M = u.video) === null || M === void 0 || !M.settings ? h.video.settings = o.video.settings : h.video.settings = I(I({}, u.video.settings), o.video.settings), Object.keys(h.video.settings).length || delete h.video.settings) : (f = u.video) !== null && f !== void 0 && f.settings && (h.video.settings = u.video.settings), o.video.processor ? h.video.processor = o.video.processor : (k = u.video) !== null && k !== void 0 && k.processor && (h.video.processor = u.video.processor);
    } else u.video && (h.video = u.video);
    if (o.audio) {
      var T, P, R;
      h.audio = {}, o.audio.settings ? (h.audio.settings = {}, d || o.audio.settings.customTrack || (R = u.audio) === null || R === void 0 || !R.settings ? h.audio.settings = o.audio.settings : h.audio.settings = I(I({}, u.audio.settings), o.audio.settings), Object.keys(h.audio.settings).length || delete h.audio.settings) : (T = u.audio) !== null && T !== void 0 && T.settings && (h.audio.settings = u.audio.settings), o.audio.processor ? h.audio.processor = o.audio.processor : (P = u.audio) !== null && P !== void 0 && P.processor && (h.audio.processor = u.audio.processor);
    } else u.audio && (h.audio = u.audio);
    this._maybeUpdateInputSettings(h);
  } }, { key: "_devicesFromInputSettings", value: function(o) {
    var d, u, h = (o == null || (d = o.video) === null || d === void 0 || (d = d.settings) === null || d === void 0 ? void 0 : d.deviceId) || null, f = (o == null || (u = o.audio) === null || u === void 0 || (u = u.settings) === null || u === void 0 ? void 0 : u.deviceId) || null, k = this._preloadCache.outputDeviceId || null;
    return { camera: h ? { deviceId: h } : {}, mic: f ? { deviceId: f } : {}, speaker: k ? { deviceId: k } : {} };
  } }, { key: "updateInputSettings", value: (It = F(function* (o) {
    var d = this;
    return V(), Hs(o) ? o.video || o.audio ? (Gs(o, this.properties.dailyConfig, this._sharedTracks), this._callObjectMode && !this._callMachineInitialized ? (this._updatePreloadCacheInputSettings(o, !0), this._getInputSettings()) : new Promise(function(u, h) {
      d.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: o }, function(f) {
        if (f.error) h(f.error);
        else {
          if (f.returnPreloadCache) return d._updatePreloadCacheInputSettings(o, !0), void u(d._getInputSettings());
          d._maybeUpdateInputSettings(f.inputSettings), u(d._prepInputSettingsForSharing(f.inputSettings, !0));
        }
      });
    })) : this._getInputSettings() : (console.error(Vr()), Promise.reject(Vr()));
  }), function(o) {
    return It.apply(this, arguments);
  }) }, { key: "setBandwidth", value: function(o) {
    var d = o.kbs, u = o.trackConstraints;
    if (V(), this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: d, trackConstraints: u }), this;
  } }, { key: "getDailyLang", value: function() {
    var o = this;
    if (V(), this._callMachineInitialized) return new Promise(function(d) {
      o.sendMessageToCallMachine({ action: "get-daily-lang" }, function(u) {
        delete u.action, delete u.callbackStamp, d(u);
      });
    });
  } }, { key: "setDailyLang", value: function(o) {
    return V(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: o }), this;
  } }, { key: "setProxyUrl", value: function(o) {
    return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: o }), this;
  } }, { key: "setIceConfig", value: function(o) {
    return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: o }), this;
  } }, { key: "meetingSessionSummary", value: function() {
    return [Re, Qe].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
  } }, { key: "getMeetingSession", value: (Yt = F(function* () {
    var o = this;
    return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), z(this._callState, "getMeetingSession()"), new Promise(function(d) {
      o.sendMessageToCallMachine({ action: "get-meeting-session" }, function(u) {
        delete u.action, delete u.callbackStamp, d(u);
      });
    });
  }), function() {
    return Yt.apply(this, arguments);
  }) }, { key: "meetingSessionState", value: function() {
    return z(this._callState, "meetingSessionState"), this._meetingSessionState;
  } }, { key: "setMeetingSessionData", value: function(o) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace";
    le(this._callObjectMode, "setMeetingSessionData()"), z(this._callState, "setMeetingSessionData");
    try {
      (function(u, h) {
        new Rl({ data: u, mergeStrategy: h });
      })(o, d);
    } catch (u) {
      throw console.error(u), u;
    }
    try {
      this.sendMessageToCallMachine({ action: "set-session-data", data: o, mergeStrategy: d });
    } catch (u) {
      throw new Error("Error setting meeting session data: ".concat(u));
    }
  } }, { key: "setUserName", value: function(o, d) {
    var u = this;
    return this.properties.userName = o, new Promise(function(h) {
      u.sendMessageToCallMachine({ action: "set-user-name", name: o ?? "", thisMeetingOnly: J() || !!d && !!d.thisMeetingOnly }, function(f) {
        delete f.action, delete f.callbackStamp, h(f);
      });
    });
  } }, { key: "setUserData", value: (At = F(function* (o) {
    var d = this;
    try {
      zs(o);
    } catch (u) {
      throw console.error(u), u;
    }
    if (this.properties.userData = o, this._callMachineInitialized) return new Promise(function(u) {
      try {
        d.sendMessageToCallMachine({ action: "set-user-data", userData: o }, function(h) {
          delete h.action, delete h.callbackStamp, u(h);
        });
      } catch (h) {
        throw new Error("Error setting user data: ".concat(h));
      }
    });
  }), function(o) {
    return At.apply(this, arguments);
  }) }, { key: "validateAudioLevelInterval", value: function(o) {
    if (o && (o < 100 || typeof o != "number")) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
  } }, { key: "startLocalAudioLevelObserver", value: function(o) {
    var d = this;
    if (typeof AudioWorkletNode > "u" && !J()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
    if (this.validateAudioLevelInterval(o), this._callMachineInitialized) return this._isLocalAudioLevelObserverRunning = !0, new Promise(function(u, h) {
      d.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: o }, function(f) {
        d._isLocalAudioLevelObserverRunning = !f.error, f.error ? h({ error: f.error }) : u();
      });
    });
    this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: o };
  } }, { key: "isLocalAudioLevelObserverRunning", value: function() {
    return this._isLocalAudioLevelObserverRunning;
  } }, { key: "stopLocalAudioLevelObserver", value: function() {
    this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
  } }, { key: "startRemoteParticipantsAudioLevelObserver", value: function(o) {
    var d = this;
    if (this.validateAudioLevelInterval(o), this._callMachineInitialized) return this._isRemoteParticipantsAudioLevelObserverRunning = !0, new Promise(function(u, h) {
      d.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: o }, function(f) {
        d._isRemoteParticipantsAudioLevelObserverRunning = !f.error, f.error ? h({ error: f.error }) : u();
      });
    });
    this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: o };
  } }, { key: "isRemoteParticipantsAudioLevelObserverRunning", value: function() {
    return this._isRemoteParticipantsAudioLevelObserverRunning;
  } }, { key: "stopRemoteParticipantsAudioLevelObserver", value: function() {
    this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
  } }, { key: "startCamera", value: (ht = F(function* () {
    var o = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "startCamera()"), fr(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), this.needsLoad()) try {
      yield this.load(d);
    } catch (u) {
      return Promise.reject(u);
    }
    else {
      if (this._didPreAuth) {
        if (d.url && d.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
        if (d.token && d.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
      }
      this.validateProperties(d), this.properties = I(I({}, this.properties), d);
    }
    return new Promise(function(u, h) {
      o._preloadCache.inputSettings = o._prepInputSettingsForSharing(o._inputSettings, !1), o.sendMessageToCallMachine({ action: "start-camera", properties: vt(o.properties, o.callClientId), preloadCache: vt(o._preloadCache, o.callClientId) }, function(f) {
        f.error ? h(f.error) : u({ camera: f.camera, mic: f.mic, speaker: f.speaker });
      });
    });
  }), function() {
    return ht.apply(this, arguments);
  }) }, { key: "validateCustomTrack", value: function(o, d, u) {
    if (u && u.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
    if (d && d !== "music" && d !== "speech" && !(d instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
    if (u && ["audio", "video", "cam-audio", "cam-video", "screenVideo", "screenAudio", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(u)) throw new Error("Custom track `trackName` must not match a track name already used by daily: audio, video, cam-audio, cam-video, screenVideo, screenAudio, screen-video, screen-audio, rmpAudio, rmpVideo, customVideoDefaults");
    if (!(o instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
  } }, { key: "startCustomTrack", value: function() {
    var o = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { track, mode, trackName, ignoreAudioLevel };
    return V(), le(this._callObjectMode, "startCustomTrack()"), z(this._callState, "startCustomTrack()"), this.validateCustomTrack(d.track, d.mode, d.trackName), new Promise(function(u, h) {
      o._sharedTracks.customTrack = d.track, d.track = De, o.sendMessageToCallMachine({ action: "start-custom-track", properties: d }, function(f) {
        f.error ? h({ error: f.error }) : u(f.mediaTag);
      });
    });
  } }, { key: "stopCustomTrack", value: function(o) {
    var d = this;
    return V(), z(this._callState, "stopCustomTrack()"), new Promise(function(u) {
      d.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: o }, function(h) {
        u(h.mediaTag);
      });
    });
  } }, { key: "setCamera", value: function(o) {
    var d = this;
    return Nt(), mn(this._callMachineInitialized, "setCamera()"), new Promise(function(u) {
      d.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: o }, function(h) {
        u({ device: h.device });
      });
    });
  } }, { key: "setAudioDevice", value: (pt = F(function* (o) {
    return Nt(), this.nativeUtils().setAudioDevice(o), { deviceId: yield this.nativeUtils().getAudioDevice() };
  }), function(o) {
    return pt.apply(this, arguments);
  }) }, { key: "cycleCamera", value: function() {
    var o = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new Promise(function(u) {
      o.sendMessageToCallMachine({ action: "cycle-camera", properties: d }, function(h) {
        u({ device: h.device });
      });
    });
  } }, { key: "cycleMic", value: function() {
    var o = this;
    return V(), new Promise(function(d) {
      o.sendMessageToCallMachine({ action: "cycle-mic" }, function(u) {
        d({ device: u.device });
      });
    });
  } }, { key: "getCameraFacingMode", value: function() {
    var o = this;
    return Nt(), new Promise(function(d) {
      o.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function(u) {
        d(u.facingMode);
      });
    });
  } }, { key: "setInputDevicesAsync", value: (dt = F(function* (o) {
    var d = this, u = o.audioDeviceId, h = o.videoDeviceId, f = o.audioSource, k = o.videoSource;
    if (V(), f !== void 0 && (u = f), k !== void 0 && (h = k), typeof u == "boolean" && (this._setAllowLocalAudio(u), u = void 0), typeof h == "boolean" && (this._setAllowLocalVideo(h), h = void 0), !u && !h) return yield this.getInputDevices();
    var M = {};
    return u && (u instanceof MediaStreamTrack ? (this._sharedTracks.audioTrack = u, u = De, M.audio = { settings: { customTrack: u } }) : (delete this._sharedTracks.audioTrack, M.audio = { settings: { deviceId: u } })), h && (h instanceof MediaStreamTrack ? (this._sharedTracks.videoTrack = h, h = De, M.video = { settings: { customTrack: h } }) : (delete this._sharedTracks.videoTrack, M.video = { settings: { deviceId: h } })), this._callObjectMode && this.needsLoad() ? (this._updatePreloadCacheInputSettings(M, !1), this._devicesFromInputSettings(this._inputSettings)) : new Promise(function(T) {
      d.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: u, videoDeviceId: h }, function(P) {
        if (delete P.action, delete P.callbackStamp, P.returnPreloadCache) return d._updatePreloadCacheInputSettings(M, !1), void T(d._devicesFromInputSettings(d._inputSettings));
        T(P);
      });
    });
  }), function(o) {
    return dt.apply(this, arguments);
  }) }, { key: "setOutputDeviceAsync", value: (Ee = F(function* (o) {
    var d = this, u = o.outputDeviceId;
    if (V(), !u || typeof u != "string") throw new Error("outputDeviceId must be provided and must be a valid device id");
    return this._preloadCache.outputDeviceId = u, this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(h, f) {
      d.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: u }, function(k) {
        if (delete k.action, delete k.callbackStamp, k.error) {
          var M = new Error(k.error.message);
          return M.type = k.error.type, void f(M);
        }
        k.returnPreloadCache ? h(d._devicesFromInputSettings(d._inputSettings)) : h(k);
      });
    });
  }), function(o) {
    return Ee.apply(this, arguments);
  }) }, { key: "getInputDevices", value: (we = F(function* () {
    var o = this;
    return this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(d) {
      o.sendMessageToCallMachine({ action: "get-input-devices" }, function(u) {
        u.returnPreloadCache ? d(o._devicesFromInputSettings(o._inputSettings)) : d({ camera: u.camera, mic: u.mic, speaker: u.speaker });
      });
    });
  }), function() {
    return we.apply(this, arguments);
  }) }, { key: "nativeInCallAudioMode", value: function() {
    return Nt(), this._nativeInCallAudioMode;
  } }, { key: "setNativeInCallAudioMode", value: function(o) {
    if (Nt(), [$o, lu].includes(o)) {
      if (o !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = o, !this.disableReactNativeAutoDeviceManagement("audio") && Sn(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
    } else console.error("invalid in-call audio mode specified: ", o);
  } }, { key: "preAuth", value: (_e = F(function* () {
    var o = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "preAuth()"), fr(this._callState, this._isPreparingToJoin, "preAuth()"), this.needsLoad() && (yield this.load(d)), !d.url) throw new Error("preAuth() requires at least a url to be provided");
    return this.validateProperties(d), this.properties = I(I({}, this.properties), d), new Promise(function(u, h) {
      o._preloadCache.inputSettings = o._prepInputSettingsForSharing(o._inputSettings, !1), o.sendMessageToCallMachine({ action: "daily-method-preauth", properties: vt(o.properties, o.callClientId), preloadCache: vt(o._preloadCache, o.callClientId) }, function(f) {
        return f.error ? h(f.error) : f.access ? (o._didPreAuth = !0, void u({ access: f.access })) : h(new Error("unknown error in preAuth()"));
      });
    });
  }), function() {
    return _e.apply(this, arguments);
  }) }, { key: "load", value: (Y = F(function* (o) {
    var d = this;
    if (this.needsLoad()) {
      if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
      if (o && (this.validateProperties(o), this.properties = I(I({}, this.properties), o)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
      if (this._updateCallState(uo), this.emitDailyJSEvent({ action: Rc }), this._callObjectMode) return new Promise(function(h, f) {
        d._callObjectLoader.cancel();
        var k = Date.now();
        d._callObjectLoader.load(d.properties.dailyConfig, function(M) {
          d._bundleLoadTime = M ? "no-op" : Date.now() - k, d._updateCallState(po), M && d.emitDailyJSEvent({ action: fo }), h();
        }, function(M, T) {
          d.emitDailyJSEvent({ action: $c }), T || (d._handleFatalError({ action: sr, errorMsg: M.msg, error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: M, bundleUrl: Tn(d.properties.dailyConfig) } } }), f(M.msg));
        });
      });
      var u = va(this.assembleMeetingUrl(), this.properties.dailyConfig);
      return new Promise(function(h, f) {
        var k = 0, M = function() {
          if (k >= u.length) {
            var T = "Timed out attempting to load the call. Please check your network connection and try again.";
            return d._iframe.srcdoc = (P = T, `<!DOCTYPE html>
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
<div class="card"><h1>`.concat("Failed to load", "</h1><p>").concat(P, `</p></div>
</body>
</html>`)), d._handleFatalError({ action: sr, errorMsg: T, error: { type: "connection-error", msg: T, details: { on: "load", sourceError: { msg: "Timed out (>".concat(25e3, " ms) when loading call frame"), type: "timeout" }, candidateCount: u.length } }, preserveIframe: !0 }), void f(T);
          }
          var P, R = u[k++];
          d._iframe.src = us(R, d.properties.dailyConfig);
          var U = setTimeout(function() {
            d._loadedCallback && (d._loadedCallback = null, M());
          }, 25e3);
          d._loadedCallback = function(Q) {
            clearTimeout(U), d._callState !== Qe ? (ls(zr(R)), d._updateCallState(po), (d.properties.cssFile || d.properties.cssText) && d.loadCss(d.properties), h()) : f(Q);
          };
        };
        M();
      });
    }
  }), function(o) {
    return Y.apply(this, arguments);
  }) }, { key: "join", value: (L = F(function* () {
    var o = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this._testCallInProgress && this.stopTestCallQuality(), !d.url && !this.properties.url) {
      var u = "No room URL has been provided";
      return console.error(u), Promise.reject(new Error(u));
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
    return d.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!d.showLocalVideo), d.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!d.showParticipantsBar), this._callState === Ze || this._callState === Lr ? (console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1)) : (this._updateCallState(Lr, !1), this.emitDailyJSEvent({ action: Jc }), this._preloadCache.inputSettings = this._prepInputSettingsForSharing(this._inputSettings || {}, !1), this.sendMessageToCallMachine({ action: "join-meeting", properties: vt(this.properties, this.callClientId), preloadCache: vt(this._preloadCache, this.callClientId) }, function(f) {
      f.error && o._joinedCallback && (o._joinedCallback(null, f.error), o._joinedCallback = null);
    }), new Promise(function(f, k) {
      o._joinedCallback = function(M, T) {
        if (o._callState !== Qe) {
          if (T) return o._updateCallState(Re), void k(T);
          if (o._updateCallState(Ze), M) for (var P in M) {
            if (o._callObjectMode) {
              var R = o._callMachine().store;
              Po(M[P], R), xo(M[P], R), Ao(M[P], o._participants[P], R);
            }
            o._participants[P] = I({}, M[P]), o.toggleParticipantAudioBasedOnNativeAudioFocus();
          }
          h && o.loadCss(o.properties), f(M);
        } else k(T);
      };
    }));
  }), function() {
    return L.apply(this, arguments);
  }) }, { key: "leave", value: (j = F(function* () {
    var o = this;
    return this._testCallInProgress && this.stopTestCallQuality(), new Promise(function(d) {
      o._callState === Re || o._callState === Qe ? d() : o._callObjectLoader && !o._callObjectLoader.loaded ? (o._callObjectLoader.cancel(), o._updateCallState(Re), o.resetMeetingDependentVars(), o.emitDailyJSEvent({ action: Re }), d()) : (o._resolveLeave = d, o.sendMessageToCallMachine({ action: "leave-meeting" }));
    });
  }), function() {
    return j.apply(this, arguments);
  }) }, { key: "startScreenShare", value: (x = F(function* () {
    var o = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (d.mediaStream && le(this._callObjectMode, "startScreenShare() with `mediaStream`"), mn(this._callMachineInitialized, "startScreenShare()"), d.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", d.screenVideoSendSettings), d.mediaStream && (this._sharedTracks.screenMediaStream = d.mediaStream, d.mediaStream = De), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS) {
      var u = this.nativeUtils();
      if (yield u.isScreenBeingCaptured()) return void this.emitDailyJSEvent({ action: yo, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
      u.setSystemScreenCaptureStartCallback(function() {
        u.setSystemScreenCaptureStartCallback(null), o.sendMessageToCallMachine({ action: _o, captureOptions: d });
      }), u.presentSystemScreenCapturePrompt();
    } else this.sendMessageToCallMachine({ action: _o, captureOptions: d });
  }), function() {
    return x.apply(this, arguments);
  }) }, { key: "stopScreenShare", value: function() {
    mn(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
  } }, { key: "startRecording", value: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = o.type;
    if (d && d !== "cloud" && d !== "cloud-audio-only" && d !== "raw-tracks" && d !== "local") throw new Error("invalid type: ".concat(d, ", allowed values 'cloud', 'cloud-audio-only', 'raw-tracks', or 'local'"));
    this.sendMessageToCallMachine(I({ action: "local-recording-start" }, o));
  } }, { key: "updateRecording", value: function(o) {
    var d = o.layout, u = d === void 0 ? { preset: "default" } : d, h = o.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: u, instanceId: h });
  } }, { key: "stopRecording", value: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(I({ action: "local-recording-stop" }, o));
  } }, { key: "startLiveStreaming", value: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(I({ action: "daily-method-start-live-streaming" }, o));
  } }, { key: "updateLiveStreaming", value: function(o) {
    var d = o.layout, u = d === void 0 ? { preset: "default" } : d, h = o.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: u, instanceId: h });
  } }, { key: "addLiveStreamingEndpoints", value: function(o) {
    var d = o.endpoints, u = o.instanceId;
    this.sendMessageToCallMachine({ action: wo, endpointsOp: Al, endpoints: d, instanceId: u });
  } }, { key: "removeLiveStreamingEndpoints", value: function(o) {
    var d = o.endpoints, u = o.instanceId;
    this.sendMessageToCallMachine({ action: wo, endpointsOp: Il, endpoints: d, instanceId: u });
  } }, { key: "stopLiveStreaming", value: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(I({ action: "daily-method-stop-live-streaming" }, o));
  } }, { key: "validateDailyConfig", value: function(o) {
    o.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(o.camSimulcastEncodings)), o.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."), Is() && o.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
  } }, { key: "validateSimulcastEncodings", value: function(o) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, u = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    if (o) {
      if (!(o instanceof Array || Array.isArray(o))) throw new Error("encodings must be an Array");
      if (!Zo(o.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
      for (var h = 0; h < o.length; h++) {
        var f = o[h];
        for (var k in this._validateEncodingLayerHasValidProperties(f), f) if (hr.includes(k)) {
          if (typeof f[k] != "number") throw new Error("".concat(k, " must be a number"));
          if (d) {
            var M = d[k], T = M.min, P = M.max;
            if (!Zo(f[k], T, P)) throw new Error("".concat(k, " value not in range. valid range: ").concat(T, " to ").concat(P));
          }
        } else if (!["active", "scalabilityMode"].includes(k)) throw new Error("Invalid key ".concat(k, ", valid keys are:") + Object.values(hr));
        if (u && !f.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
      }
    }
  } }, { key: "startRemoteMediaPlayer", value: (A = F(function* (o) {
    var d = this, u = o.url, h = o.settings, f = h === void 0 ? { state: Dr.PLAY } : h;
    try {
      (function(k) {
        if (typeof k != "string") throw new Error('url parameter must be "string" type');
      })(u), Xo(f), (function(k) {
        for (var M in k) if (!zo.includes(M)) throw new Error("Invalid key ".concat(M, ", valid keys are: ").concat(zo));
        k.simulcastEncodings && this.validateSimulcastEncodings(k.simulcastEncodings, Js, !0);
      })(f);
    } catch (k) {
      throw console.error("invalid argument Error: ".concat(k)), console.error(`startRemoteMediaPlayer arguments must be of the form:
  { url: "playback url",
  settings?:
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`), k;
    }
    return new Promise(function(k, M) {
      d.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: u, settings: f }, function(T) {
        T.error ? M({ error: T.error, errorMsg: T.errorMsg }) : k({ session_id: T.session_id, remoteMediaPlayerState: { state: T.state, settings: T.settings } });
      });
    });
  }), function(o) {
    return A.apply(this, arguments);
  }) }, { key: "stopRemoteMediaPlayer", value: (C = F(function* (o) {
    var d = this;
    if (typeof o != "string") throw new Error(" remotePlayerID must be of type string");
    return new Promise(function(u, h) {
      d.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: o }, function(f) {
        f.error ? h({ error: f.error, errorMsg: f.errorMsg }) : u();
      });
    });
  }), function(o) {
    return C.apply(this, arguments);
  }) }, { key: "updateRemoteMediaPlayer", value: (S = F(function* (o) {
    var d = this, u = o.session_id, h = o.settings;
    try {
      Xo(h);
    } catch (f) {
      throw console.error("invalid argument Error: ".concat(f)), console.error(`updateRemoteMediaPlayer arguments must be of the form:
  session_id: "participant session",
  { settings?: {state: "play"|"pause"} }`), f;
    }
    return new Promise(function(f, k) {
      d.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: u, settings: h }, function(M) {
        M.error ? k({ error: M.error, errorMsg: M.errorMsg }) : f({ session_id: M.session_id, remoteMediaPlayerState: { state: M.state, settings: M.settings } });
      });
    });
  }), function(o) {
    return S.apply(this, arguments);
  }) }, { key: "startTranscription", value: function(o) {
    z(this._callState, "startTranscription()"), this.sendMessageToCallMachine(I({ action: "daily-method-start-transcription" }, o));
  } }, { key: "updateTranscription", value: function(o) {
    if (z(this._callState, "updateTranscription()"), !o) throw new Error("updateTranscription Error: options is mandatory");
    if ($(o) !== "object") throw new Error("updateTranscription Error: options must be object type");
    if (o.participants && !Array.isArray(o.participants)) throw new Error("updateTranscription Error: participants must be an array");
    this.sendMessageToCallMachine(I({ action: "daily-method-update-transcription" }, o));
  } }, { key: "stopTranscription", value: function(o) {
    if (z(this._callState, "stopTranscription()"), o && $(o) !== "object") throw new Error("stopTranscription Error: options must be object type");
    if (o && !o.instanceId) throw new Error('"instanceId" not provided');
    this.sendMessageToCallMachine(I({ action: "daily-method-stop-transcription" }, o));
  } }, { key: "startDialOut", value: (_ = F(function* (o) {
    var d = this;
    z(this._callState, "startDialOut()");
    var u = function(T) {
      if (T) {
        if (!Array.isArray(T)) throw new Error("Error starting dial out: audio codec must be an array");
        if (T.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
        T.forEach(function(P) {
          if (typeof P != "string") throw new Error("Error starting dial out: audio codec must be a string");
          if (P !== "OPUS" && P !== "PCMU" && P !== "PCMA" && P !== "G722") throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
        });
      }
    };
    if (!o.sipUri && !o.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
    if (o.sipUri && o.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
    if (o.sipUri) {
      if (typeof o.sipUri != "string") throw new Error("Error starting dial out: sipUri must be a string");
      if (!o.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
      if (o.video && typeof o.video != "boolean") throw new Error("Error starting dial out: video must be a boolean value");
      if (o.videoSettings !== void 0) {
        if ($(o.videoSettings) !== "object" || o.videoSettings === null) throw new Error("Error starting dial out: videoSettings must be an object");
        if (!o.video) throw new Error("Error starting dial out: videoSettings provided but video is not enabled");
        var h = o.videoSettings;
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
      (function(T) {
        if (T && (u(T.audio), T.video)) {
          if (!Array.isArray(T.video)) throw new Error("Error starting dial out: video codec must be an array");
          if (T.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
          T.video.forEach(function(P) {
            if (typeof P != "string") throw new Error("Error starting dial out: video codec must be a string");
            if (P !== "H264" && P !== "VP8") throw new Error("Error starting dial out: video codec must be H264 or VP8");
          });
        }
      })(o.codecs);
    }
    if (o.phoneNumber) {
      if (typeof o.phoneNumber != "string") throw new Error("Error starting dial out: phoneNumber must be a string");
      if (!/^\+\d{1,}$/.test(o.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
      o.codecs && u(o.codecs.audio);
    }
    if (o.callerId) {
      if (typeof o.callerId != "string") throw new Error("Error starting dial out: callerId must be a string");
      if (o.sipUri) throw new Error("Error starting dial out: callerId not allowed with sipUri");
    }
    if (o.displayName) {
      if (typeof o.displayName != "string") throw new Error("Error starting dial out: displayName must be a string");
      if (o.displayName.length >= 200) throw new Error("Error starting dial out: displayName length must be less than 200");
    }
    if (o.userId) {
      if (typeof o.userId != "string") throw new Error("Error starting dial out: userId must be a string");
      if (o.userId.length > 36) throw new Error("Error starting dial out: userId length must be less than or equal to 36");
    }
    if (Yo(o), o.permissions && o.permissions.canReceive) {
      var f = X(Us.validateJSONObject(o.permissions.canReceive), 2), k = f[0], M = f[1];
      if (!k) throw new Error(M);
    }
    if (o.provider) {
      if (o.provider !== gt && o.provider !== mt) throw new Error("Error: provider can be set only to '".concat(gt, "' or '").concat(mt, "', got: ").concat(o.provider));
      if (o.phoneNumber) throw new Error("Error starting dial out: provider valid only for sipUri, not phoneNumber");
      o.provider === gt && console.warn("(pre-beta) provider=".concat(gt, " is currently in pre-beta, things might break!"));
    } else o.provider = mt;
    return new Promise(function(T, P) {
      d.sendMessageToCallMachine(I({ action: "dialout-start" }, o), function(R) {
        R.error ? P(R.error) : T(R);
      });
    });
  }), function(o) {
    return _.apply(this, arguments);
  }) }, { key: "startDialIn", value: (b = F(function* (o) {
    var d = this;
    if (z(this._callState, "startDialIn()"), !o || $(o) !== "object") throw new Error("Error starting dial in: args must be an object");
    if (typeof o.displayName != "string" || o.displayName.length === 0) throw new Error("Error starting dial in: displayName is required and must be a non-empty string");
    if (o.displayName.length >= 200) throw new Error("Error starting dial in: displayName length must be less than 200");
    if (o.userId !== void 0 && typeof o.userId != "string") throw new Error("Error starting dial in: userId must be a string");
    if (o.userId !== void 0 && o.userId.length > 36) throw new Error("Error starting dial in: userId length must be less than or equal to 36");
    if (o.video !== void 0 && typeof o.video != "boolean") throw new Error("Error starting dial in: video must be a boolean");
    if (o.sipEndpoint !== void 0 && typeof o.sipEndpoint != "string") throw new Error("Error starting dial in: sipEndpoint must be a string");
    if (o.codecs !== void 0 && ($(o.codecs) !== "object" || o.codecs === null)) throw new Error("Error starting dial in: codecs must be an object");
    if (o.permissions !== void 0 && ($(o.permissions) !== "object" || o.permissions === null)) throw new Error("Error starting dial in: permissions must be an object");
    if (o.provider) {
      if (o.provider !== gt && o.provider !== mt) throw new Error("Error starting dial in: provider must be '".concat(gt, "' or '").concat(mt, "'"));
    } else o = I(I({}, o), {}, { provider: mt });
    return new Promise(function(u, h) {
      d.sendMessageToCallMachine(I({ action: "dialin-start", sipMode: "dial-in" }, o), function(f) {
        f.error ? h(f.error) : u(f);
      });
    });
  }), function(o) {
    return b.apply(this, arguments);
  }) }, { key: "stopDialOut", value: function(o) {
    var d = this;
    return z(this._callState, "stopDialOut()"), new Promise(function(u, h) {
      d.sendMessageToCallMachine(I({ action: "dialout-stop" }, o), function(f) {
        f.error ? h(f.error) : u(f);
      });
    });
  } }, { key: "sipCallTransfer", value: (m = F(function* (o) {
    var d = this;
    if (z(this._callState, "sipCallTransfer()"), !o) throw new Error("sipCallTransfer() requires a sessionId and toEndPoint");
    return o.useSipRefer = !1, Ko(o, "sipCallTransfer"), Yo(o), new Promise(function(u, h) {
      d.sendMessageToCallMachine(I({ action: ko }, o), function(f) {
        f.error ? h(f.error) : u(f);
      });
    });
  }), function(o) {
    return m.apply(this, arguments);
  }) }, { key: "sipRefer", value: (w = F(function* (o) {
    var d = this;
    if (z(this._callState, "sipRefer()"), !o) throw new Error("sessionId and toEndPoint are mandatory parameter");
    return o.useSipRefer = !0, Ko(o, "sipRefer"), new Promise(function(u, h) {
      d.sendMessageToCallMachine(I({ action: ko }, o), function(f) {
        f.error ? h(f.error) : u(f);
      });
    });
  }), function(o) {
    return w.apply(this, arguments);
  }) }, { key: "sendDTMF", value: (E = F(function* (o) {
    var d = this;
    return z(this._callState, "sendDTMF()"), (function(u) {
      var h = u.sessionId, f = u.tones, k = u.method, M = u.digitDurationMs;
      if (!h || !f) throw new Error("sessionId and tones are mandatory parameter");
      if (typeof h != "string" || typeof f != "string") throw new Error("sessionId and tones should be of string type");
      if (f.length > 20) throw new Error("tones string must be upto 20 characters");
      var T = /[^0-9A-D*#]/g, P = f.match(T);
      if (P && P[0]) throw new Error("".concat(P[0], " is not valid DTMF tone"));
      if (k && !["sip-info", "telephone-event", "auto"].includes(k)) throw new Error("method must be one of 'sip-info', 'telephone-event', or 'auto'");
      if (M !== void 0) {
        if (typeof M != "number") throw new Error("digitDurationMs must be a number");
        if (!Number.isFinite(M) || !Number.isInteger(M)) throw new Error("digitDurationMs must be a finite integer number");
        if (M < 50 || M > 2e3) throw new Error("digitDurationMs must be between 50ms and 2000ms");
      }
    })(o), o.method = o.method || "auto", o.digitDurationMs = o.digitDurationMs || 500, new Promise(function(u, h) {
      d.sendMessageToCallMachine(I({ action: "send-dtmf" }, o), function(f) {
        f.error ? h(f.error) : u(f);
      });
    });
  }), function(o) {
    return E.apply(this, arguments);
  }) }, { key: "getNetworkStats", value: function() {
    var o = this;
    return this._callState !== Ze ? Promise.resolve(I({ stats: { latest: {} } }, this._network)) : new Promise(function(d) {
      o.sendMessageToCallMachine({ action: "get-calc-stats" }, function(u) {
        d(I(I({}, o._network), {}, { stats: u.stats }));
      });
    });
  } }, { key: "testWebsocketConnectivity", value: (O = F(function* () {
    var o = this;
    if (gr(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (d) {
      return Promise.reject(d);
    }
    return new Promise(function(d, u) {
      o.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function(h) {
        h.error ? u(h.error) : d(h.results);
      });
    });
  }), function() {
    return O.apply(this, arguments);
  }) }, { key: "abortTestWebsocketConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
  } }, { key: "_validateVideoTrackForNetworkTests", value: function(o) {
    return o ? o instanceof MediaStreamTrack ? !!nu(o) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
  } }, { key: "testCallQuality", value: (v = F(function* () {
    var o = this;
    V(), le(this._callObjectMode, "testCallQuality()"), mn(this._callMachineInitialized, "testCallQuality()", null, !0), fr(this._callState, this._isPreparingToJoin, "testCallQuality()");
    var d = this._testCallAlreadyInProgress, u = function(f) {
      d || (o._testCallInProgress = f);
    };
    if (u(!0), this.needsLoad()) try {
      var h = this._callState;
      yield this.load(), this._callState = h;
    } catch (f) {
      return u(!1), Promise.reject(f);
    }
    return new Promise(function(f) {
      o.sendMessageToCallMachine({ action: "test-call-quality", dailyJsVersion: o.properties.dailyJsVersion }, function(k) {
        var M = k.results, T = M.result, P = bn(M, au);
        if (T === "failed") {
          var R, U = I({}, P);
          (R = P.error) !== null && R !== void 0 && R.details ? (P.error.details = JSON.parse(P.error.details), U.error = I(I({}, U.error), {}, { details: I({}, U.error.details) }), U.error.details.duringTest = "testCallQuality") : (U.error = U.error ? I({}, U.error) : {}, U.error.details = { duringTest: "testCallQuality" }), o._maybeSendToSentry(U);
        }
        u(!1), f(I({ result: T }, P));
      });
    });
  }), function() {
    return v.apply(this, arguments);
  }) }, { key: "stopTestCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
  } }, { key: "testConnectionQuality", value: (g = F(function* (o) {
    var d;
    J() ? (console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead"), d = yield this.testPeerToPeerCallQuality(o)) : (console.warn("testConnectionQuality() is deprecated: use testCallQuality() instead"), d = yield this.testCallQuality());
    var u = { result: d.result, secondsElapsed: d.secondsElapsed };
    return d.data && (u.data = { maxRTT: d.data.maxRoundTripTime, packetLoss: d.data.avgRecvPacketLoss }), u;
  }), function(o) {
    return g.apply(this, arguments);
  }) }, { key: "testPeerToPeerCallQuality", value: (p = F(function* (o) {
    var d = this;
    if (gr(this._testCallInProgress, "testPeerToPeerCallQuality()"), this.needsLoad()) try {
      yield this.load();
    } catch (f) {
      return Promise.reject(f);
    }
    var u = o.videoTrack, h = o.duration;
    if (!this._validateVideoTrackForNetworkTests(u)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForConnectionQualityTest = u, new Promise(function(f, k) {
      d.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: h }, function(M) {
        M.error ? k(M.error) : f(M.results);
      });
    });
  }), function(o) {
    return p.apply(this, arguments);
  }) }, { key: "stopTestConnectionQuality", value: function() {
    J() ? (console.warn("stopTestConnectionQuality() is deprecated: use testPeerToPeerCallQuality() and stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality()) : (console.warn("stopTestConnectionQuality() is deprecated: use testCallQuality() and stopTestCallQuality() instead"), this.stopTestCallQuality());
  } }, { key: "stopTestPeerToPeerCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" });
  } }, { key: "testNetworkConnectivity", value: (l = F(function* (o) {
    var d = this;
    if (gr(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (u) {
      return Promise.reject(u);
    }
    if (!this._validateVideoTrackForNetworkTests(o)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForNetworkConnectivityTest = o, new Promise(function(u, h) {
      d.sendMessageToCallMachine({ action: "test-network-connectivity" }, function(f) {
        f.error ? h(f.error) : u(f.results);
      });
    });
  }), function(o) {
    return l.apply(this, arguments);
  }) }, { key: "abortTestNetworkConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
  } }, { key: "getCpuLoadStats", value: function() {
    var o = this;
    return new Promise(function(d) {
      o._callState === Ze ? o.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function(u) {
        d(u.cpuStats);
      }) : d({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
    });
  } }, { key: "_validateEncodingLayerHasValidProperties", value: function(o) {
    var d;
    if (!(((d = Object.keys(o)) === null || d === void 0 ? void 0 : d.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(hr));
  } }, { key: "_validateVideoSendSettings", value: function(o, d) {
    var u = o === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"], h = "Video send settings should be either an object or one of the supported presets: ".concat(u.join());
    if (typeof d == "string") {
      if (!u.includes(d)) throw new Error(h);
    } else {
      if ($(d) !== "object") throw new Error(h);
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
        var M = !1;
        switch (Object.keys(d.encodings).length) {
          case 1:
            M = !d.encodings.low;
            break;
          case 2:
            M = !d.encodings.low || !d.encodings.medium;
            break;
          case 3:
            M = !d.encodings.low || !d.encodings.medium || !d.encodings.high;
            break;
          default:
            M = !0;
        }
        if (M) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
        d.encodings.low && this._validateEncodingLayerHasValidProperties(d.encodings.low), d.encodings.medium && this._validateEncodingLayerHasValidProperties(d.encodings.medium), d.encodings.high && this._validateEncodingLayerHasValidProperties(d.encodings.high);
      }
    }
  } }, { key: "validateUpdateSendSettings", value: function(o) {
    var d = this;
    if (!o || Object.keys(o).length === 0) throw new Error("Send settings must contain at least information for one track!");
    Object.entries(o).forEach(function(u) {
      var h = X(u, 2), f = h[0], k = h[1];
      d._validateVideoSendSettings(f, k);
    });
  } }, { key: "updateSendSettings", value: function(o) {
    var d = this;
    return this.validateUpdateSendSettings(o), this.needsLoad() ? (this._preloadCache.sendSettings = o, { sendSettings: this._preloadCache.sendSettings }) : new Promise(function(u, h) {
      d.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: o }, function(f) {
        f.error ? h(f.error) : u(f.sendSettings);
      });
    });
  } }, { key: "getSendSettings", value: function() {
    return this._sendSettings || this._preloadCache.sendSettings;
  } }, { key: "getLocalAudioLevel", value: function() {
    return this._localAudioLevel;
  } }, { key: "getRemoteParticipantsAudioLevel", value: function() {
    return this._remoteParticipantsAudioLevel;
  } }, { key: "getActiveSpeaker", value: function() {
    return V(), this._activeSpeaker;
  } }, { key: "setActiveSpeakerMode", value: function(o) {
    return V(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: o }), this;
  } }, { key: "activeSpeakerMode", value: function() {
    return V(), this._activeSpeakerMode;
  } }, { key: "subscribeToTracksAutomatically", value: function() {
    return this._preloadCache.subscribeToTracksAutomatically;
  } }, { key: "setSubscribeToTracksAutomatically", value: function(o) {
    return z(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = o, this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: o }), this;
  } }, { key: "enumerateDevices", value: (c = F(function* () {
    var o = this;
    if (this._callObjectMode) {
      var d = yield navigator.mediaDevices.enumerateDevices();
      return ct() === "Firefox" && jn().major > 115 && jn().major < 123 && (d = d.filter(function(u) {
        return u.kind !== "audiooutput";
      })), { devices: d.map(function(u) {
        var h = JSON.parse(JSON.stringify(u));
        if (!J() && u.kind === "videoinput" && u.getCapabilities) {
          var f, k = u.getCapabilities();
          h.facing = (k == null || (f = k.facingMode) === null || f === void 0 ? void 0 : f.length) >= 1 ? k.facingMode[0] : void 0;
        }
        return h;
      }) };
    }
    return new Promise(function(u) {
      o.sendMessageToCallMachine({ action: "enumerate-devices" }, function(h) {
        u({ devices: h.devices });
      });
    });
  }), function() {
    return c.apply(this, arguments);
  }) }, { key: "sendAppMessage", value: function(o) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
    if (z(this._callState, "sendAppMessage()"), JSON.stringify(o).length > this._maxAppMessageSize) throw new Error("Message data too large. Max size is " + this._maxAppMessageSize);
    return this.sendMessageToCallMachine({ action: "app-msg", data: o, to: d }), this;
  } }, { key: "addFakeParticipant", value: function(o) {
    return V(), z(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(I({ action: "add-fake-participant" }, o)), this;
  } }, { key: "setShowNamesMode", value: function(o) {
    return ue(this._callObjectMode, "setShowNamesMode()"), V(), o && o !== "always" && o !== "never" ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: o }), this);
  } }, { key: "setShowLocalVideo", value: function() {
    var o = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return ue(this._callObjectMode, "setShowLocalVideo()"), V(), z(this._callState, "setShowLocalVideo()"), typeof o != "boolean" ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: o }), this._showLocalVideo = o, this);
  } }, { key: "showLocalVideo", value: function() {
    return ue(this._callObjectMode, "showLocalVideo()"), V(), this._showLocalVideo;
  } }, { key: "setShowParticipantsBar", value: function() {
    var o = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return ue(this._callObjectMode, "setShowParticipantsBar()"), V(), z(this._callState, "setShowParticipantsBar()"), typeof o != "boolean" ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: o }), this._showParticipantsBar = o, this);
  } }, { key: "showParticipantsBar", value: function() {
    return ue(this._callObjectMode, "showParticipantsBar()"), V(), this._showParticipantsBar;
  } }, { key: "customIntegrations", value: function() {
    return V(), ue(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
  } }, { key: "setCustomIntegrations", value: function(o) {
    return V(), ue(this._callObjectMode, "setCustomIntegrations()"), z(this._callState, "setCustomIntegrations()"), Xs(o) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: o }), this._customIntegrations = o, this) : this;
  } }, { key: "startCustomIntegrations", value: function(o) {
    var d = this;
    if (V(), ue(this._callObjectMode, "startCustomIntegrations()"), z(this._callState, "startCustomIntegrations()"), Array.isArray(o) && o.some(function(f) {
      return typeof f != "string";
    }) || !Array.isArray(o) && typeof o != "string") return console.error("startCustomIntegrations() only accepts string | string[]"), this;
    var u = typeof o == "string" ? [o] : o, h = u.filter(function(f) {
      return !(f in d._customIntegrations);
    });
    return h.length ? (console.error(`Can't find custom integration(s): "`.concat(h.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: u }), this);
  } }, { key: "stopCustomIntegrations", value: function(o) {
    var d = this;
    if (V(), ue(this._callObjectMode, "stopCustomIntegrations()"), z(this._callState, "stopCustomIntegrations()"), Array.isArray(o) && o.some(function(f) {
      return typeof f != "string";
    }) || !Array.isArray(o) && typeof o != "string") return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
    var u = typeof o == "string" ? [o] : o, h = u.filter(function(f) {
      return !(f in d._customIntegrations);
    });
    return h.length ? (console.error(`Can't find custom integration(s): "`.concat(h.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: u }), this);
  } }, { key: "customTrayButtons", value: function() {
    return ue(this._callObjectMode, "customTrayButtons()"), V(), this._customTrayButtons;
  } }, { key: "updateCustomTrayButtons", value: function(o) {
    return ue(this._callObjectMode, "updateCustomTrayButtons()"), V(), z(this._callState, "updateCustomTrayButtons()"), Ks(o) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: o }), this._customTrayButtons = o, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(Ln))), this);
  } }, { key: "theme", value: function() {
    return ue(this._callObjectMode, "theme()"), this.properties.theme;
  } }, { key: "setTheme", value: function(o) {
    var d = this;
    return ue(this._callObjectMode, "setTheme()"), new Promise(function(u, h) {
      try {
        d.validateProperties({ theme: o }), d.properties.theme = I({}, o), d.sendMessageToCallMachine({ action: "set-theme", theme: d.properties.theme });
        try {
          d.emitDailyJSEvent({ action: Bc, theme: d.properties.theme });
        } catch (f) {
          console.log("could not emit 'theme-updated'", f);
        }
        u(d.properties.theme);
      } catch (f) {
        h(f);
      }
    });
  } }, { key: "requestFullscreen", value: (a = F(function* () {
    if (V(), this._iframe && !document.fullscreenElement && So()) try {
      (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
    } catch (o) {
      console.log("could not make video call fullscreen", o);
    }
  }), function() {
    return a.apply(this, arguments);
  }) }, { key: "exitFullscreen", value: function() {
    V(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
  } }, { key: "getSidebarView", value: (s = F(function* () {
    var o = this;
    return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(d) {
      o.sendMessageToCallMachine({ action: "get-sidebar-view" }, function(u) {
        d(u.view);
      });
    });
  }), function() {
    return s.apply(this, arguments);
  }) }, { key: "setSidebarView", value: function(o) {
    return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: o }), this);
  } }, { key: "room", value: (i = F(function* () {
    var o = this, d = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults, u = d === void 0 || d;
    return this._accessState.access === or || this.needsLoad() ? this.properties.url ? { roomUrlPendingJoin: this.properties.url } : null : new Promise(function(h) {
      o.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: u }, function(f) {
        delete f.action, delete f.callbackStamp, h(f);
      });
    });
  }), function() {
    return i.apply(this, arguments);
  }) }, { key: "geo", value: (r = F(function* () {
    return console.error("The geo() function is no longer supported. Geographical decisions now depend upon domain and room settings."), { current: "" };
  }), function() {
    return r.apply(this, arguments);
  }) }, { key: "setNetworkTopology", value: (n = F(function* (o) {
    var d = this;
    return V(), z(this._callState, "setNetworkTopology()"), new Promise(function(u, h) {
      d.sendMessageToCallMachine({ action: "set-network-topology", opts: o }, function(f) {
        f.error ? h({ error: f.error }) : u({ workerId: f.workerId });
      });
    });
  }), function(o) {
    return n.apply(this, arguments);
  }) }, { key: "getNetworkTopology", value: (e = F(function* () {
    var o = this;
    return new Promise(function(d, u) {
      o.needsLoad() && d({ topology: "none" }), o.sendMessageToCallMachine({ action: "get-network-topology" }, function(h) {
        h.error ? u({ error: h.error }) : d({ topology: h.topology });
      });
    });
  }), function() {
    return e.apply(this, arguments);
  }) }, { key: "setPlayNewParticipantSound", value: function(o) {
    if (V(), typeof o != "number" && o !== !0 && o !== !1) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(o));
    this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: o });
  } }, { key: "on", value: function(o, d) {
    return nn.prototype.on.call(this, o, d);
  } }, { key: "once", value: function(o, d) {
    return nn.prototype.once.call(this, o, d);
  } }, { key: "off", value: function(o, d) {
    return nn.prototype.off.call(this, o, d);
  } }, { key: "validateProperties", value: function(o) {
    var d, u;
    if (o != null && (d = o.dailyConfig) !== null && d !== void 0 && d.userMediaAudioConstraints) {
      var h, f;
      J() || console.warn("userMediaAudioConstraints is deprecated. You can override constraints with inputSettings.audio.settings, found in DailyCallOptions.");
      var k = o.inputSettings || {};
      k.audio = ((h = o.inputSettings) === null || h === void 0 ? void 0 : h.audio) || {}, k.audio.settings = ((f = o.inputSettings) === null || f === void 0 || (f = f.audio) === null || f === void 0 ? void 0 : f.settings) || {}, k.audio.settings = I(I({}, k.audio.settings), o.dailyConfig.userMediaAudioConstraints), o.inputSettings = k, delete o.dailyConfig.userMediaAudioConstraints;
    }
    if (o != null && (u = o.dailyConfig) !== null && u !== void 0 && u.userMediaVideoConstraints) {
      var M, T;
      J() || console.warn("userMediaVideoConstraints is deprecated. You can override constraints with inputSettings.video.settings, found in DailyCallOptions.");
      var P = o.inputSettings || {};
      P.video = ((M = o.inputSettings) === null || M === void 0 ? void 0 : M.video) || {}, P.video.settings = ((T = o.inputSettings) === null || T === void 0 || (T = T.video) === null || T === void 0 ? void 0 : T.settings) || {}, P.video.settings = I(I({}, P.video.settings), o.dailyConfig.userMediaVideoConstraints), o.inputSettings = P, delete o.dailyConfig.userMediaVideoConstraints;
    }
    for (var R in o) if (Xe[R]) {
      if (Xe[R].validate && !Xe[R].validate(o[R], this)) throw new Error("property '".concat(R, "': ").concat(Xe[R].help));
    } else console.warn("Ignoring unrecognized property '".concat(R, "'")), delete o[R];
  } }, { key: "assembleMeetingUrl", value: function() {
    var o, d, u = I(I({}, this.properties), {}, { emb: this.callClientId, embHref: encodeURIComponent(window.location.href), proxy: (o = this.properties.dailyConfig) !== null && o !== void 0 && o.proxyUrl ? encodeURIComponent((d = this.properties.dailyConfig) === null || d === void 0 ? void 0 : d.proxyUrl) : void 0 }), h = u.url.match(/\?/) ? "&" : "?";
    return u.url + h + Object.keys(Xe).filter(function(f) {
      return Xe[f].queryString && u[f] !== void 0;
    }).map(function(f) {
      return "".concat(Xe[f].queryString, "=").concat(u[f]);
    }).join("&");
  } }, { key: "needsLoad", value: function() {
    return [lo, uo, Re, Qe].includes(this._callState);
  } }, { key: "sendMessageToCallMachine", value: function(o, d) {
    if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
    this._messageChannel.sendMessageToCallMachine(o, d, this.callClientId, this._iframe);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(o) {
    this._messageChannel.forwardPackagedMessageToCallMachine(o, this._iframe, this.callClientId);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(o) {
    return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(o, this.callClientId);
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(o) {
    this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(o);
  } }, { key: "handleMessageFromCallMachine", value: function(o) {
    switch (o.action) {
      case Nc:
        this.sendMessageToCallMachine(I({ action: Fc }, this.properties));
        break;
      case "call-machine-initialized":
        this._callMachineInitialized = !0;
        var d = ma(), u = { action: hn, level: "log", code: 1011, stats: { event: "bundle load", time: this._bundleLoadTime === "no-op" ? 0 : this._bundleLoadTime, preLoaded: this._bundleLoadTime === "no-op", url: Tn(this.properties.dailyConfig), resolvedBaseDomain: d, failedOver: d != null && d !== "daily.co" } };
        this.sendMessageToCallMachine(u), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
        break;
      case fo:
        this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null), this.emitDailyJSEvent(o);
        break;
      case qc:
        var h, f = I({}, o);
        delete f.internal, this._maxAppMessageSize = ((h = o.internal) === null || h === void 0 ? void 0 : h._maxAppMessageSize) || ar, this._joinedCallback && (this._joinedCallback(o.participants), this._joinedCallback = null), this.emitDailyJSEvent(f);
        break;
      case Wc:
      case Hc:
        if (this._callState === Re) return;
        if (o.participant && o.participant.session_id) {
          var k = o.participant.local ? "local" : o.participant.session_id;
          if (this._callObjectMode) {
            var M = this._callMachine().store;
            Po(o.participant, M), xo(o.participant, M), Ao(o.participant, this._participants[k], M);
          }
          try {
            this.maybeParticipantTracksStopped(this._participants[k], o.participant), this.maybeParticipantTracksStarted(this._participants[k], o.participant), this.maybeEventRecordingStopped(this._participants[k], o.participant), this.maybeEventRecordingStarted(this._participants[k], o.participant);
          } catch (ca) {
            console.error("track events error", ca);
          }
          this.compareEqualForParticipantUpdateEvent(o.participant, this._participants[k]) || (this._participants[k] = I({}, o.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus(), this.emitDailyJSEvent(o));
        }
        break;
      case Gc:
        if (o.participant && o.participant.session_id) {
          var T = this._participants[o.participant.session_id];
          T && this.maybeParticipantTracksStopped(T, null), delete this._participants[o.participant.session_id], this.emitDailyJSEvent(o);
        }
        break;
      case Yc:
        ae(this._participantCounts, o.participantCounts) || (this._participantCounts = o.participantCounts, this.emitDailyJSEvent(o));
        break;
      case Qc:
        var P = { access: o.access };
        o.awaitingAccess && (P.awaitingAccess = o.awaitingAccess), ae(this._accessState, P) || (this._accessState = P, this.emitDailyJSEvent(o));
        break;
      case Kc:
        if (o.meetingSession) {
          this._meetingSessionSummary = o.meetingSession, this.emitDailyJSEvent(o);
          var R = I(I({}, o), {}, { action: "meeting-session-updated" });
          this.emitDailyJSEvent(R);
        }
        break;
      case sr:
        this._handleFatalError(o);
        break;
      case zc:
        this._callState !== Qe && this._updateCallState(Re), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null), this.emitDailyJSEvent(o);
        break;
      case "selected-devices-updated":
        o.devices && this.emitDailyJSEvent(o);
        break;
      case wl:
        var U = o.state, Q = o.threshold, oe = o.quality, We = U.state, He = U.reasons;
        We === this._network.networkState && ae(He, this._network.networkStateReasons) && Q === this._network.threshold && oe === this._network.quality || (this._network.networkState = We, this._network.networkStateReasons = He, this._network.quality = oe, this._network.threshold = Q, o.networkState = We, He.length && (o.networkStateReasons = He), delete o.state, this.emitDailyJSEvent(o));
        break;
      case Sl:
        o && o.cpuLoadState && this.emitDailyJSEvent(o);
        break;
      case Ml:
        o && o.faceCounts !== void 0 && this.emitDailyJSEvent(o);
        break;
      case bl:
        var Z = o.activeSpeaker;
        this._activeSpeaker.peerId !== Z.peerId && (this._activeSpeaker.peerId = Z.peerId, this.emitDailyJSEvent({ action: o.action, activeSpeaker: this._activeSpeaker }));
        break;
      case "show-local-video-changed":
        if (this._callObjectMode) return;
        var Ce = o.show;
        this._showLocalVideo = Ce, this.emitDailyJSEvent({ action: o.action, show: Ce });
        break;
      case _l:
        var Ge = o.enabled;
        this._activeSpeakerMode !== Ge && (this._activeSpeakerMode = Ge, this.emitDailyJSEvent({ action: o.action, enabled: this._activeSpeakerMode }));
        break;
      case Zc:
      case el:
      case tl:
        this._waitingParticipants = o.allWaitingParticipants, this.emitDailyJSEvent({ action: o.action, participant: o.participant });
        break;
      case xl:
        ae(this._receiveSettings, o.receiveSettings) || (this._receiveSettings = o.receiveSettings, this.emitDailyJSEvent({ action: o.action, receiveSettings: o.receiveSettings }));
        break;
      case vo:
        this._maybeUpdateInputSettings(o.inputSettings);
        break;
      case "send-settings-updated":
        ae(this._sendSettings, o.sendSettings) || (this._sendSettings = o.sendSettings, this._preloadCache.sendSettings = null, this.emitDailyJSEvent({ action: o.action, sendSettings: o.sendSettings }));
        break;
      case "local-audio-level":
        this._localAudioLevel = o.audioLevel, this._preloadCache.localAudioLevelObserver = null, this.emitDailyJSEvent(o);
        break;
      case "remote-participants-audio-level":
        this._remoteParticipantsAudioLevel = o.participantsAudioLevel, this._preloadCache.remoteParticipantsAudioLevelObserver = null, this.emitDailyJSEvent(o);
        break;
      case hl:
        var Xt = o.session_id;
        this._rmpPlayerState[Xt] = o.playerState, this.emitDailyJSEvent(o);
        break;
      case gl:
        delete this._rmpPlayerState[o.session_id], this.emitDailyJSEvent(o);
        break;
      case fl:
        var Zt = o.session_id, ft = this._rmpPlayerState[Zt];
        ft && this.compareEqualForRMPUpdateEvent(ft, o.remoteMediaPlayerState) || (this._rmpPlayerState[Zt] = o.remoteMediaPlayerState, this.emitDailyJSEvent(o));
        break;
      case "custom-button-click":
      case "sidebar-view-changed":
      case "pip-started":
      case "pip-stopped":
        this.emitDailyJSEvent(o);
        break;
      case Xc:
        var en = this._meetingSessionState.topology !== (o.meetingSessionState && o.meetingSessionState.topology);
        this._meetingSessionState = mr(o.meetingSessionState, this._callObjectMode), (this._callObjectMode || en) && this.emitDailyJSEvent(o);
        break;
      case ml:
        this._isScreenSharing = !0, this.emitDailyJSEvent(o);
        break;
      case vl:
      case yl:
        this._isScreenSharing = !1, this.emitDailyJSEvent(o);
        break;
      case go:
      case mo:
      case al:
      case cl:
      case ll:
      case il:
      case ol:
      case sl:
      case Uc:
      case Vc:
      case dl:
      case pl:
      case "test-completed":
      case kl:
      case ul:
      case El:
      case Cl:
      case Tl:
      case Ol:
      case yo:
      case Pl:
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
        this.emitDailyJSEvent(o);
        break;
      case "request-fullscreen":
        this.requestFullscreen();
        break;
      case "request-exit-fullscreen":
        this.exitFullscreen();
    }
  } }, { key: "maybeEventRecordingStopped", value: function(o, d) {
    var u = "record";
    o && (d.local || d[u] !== !1 || o[u] === d[u] || this.emitDailyJSEvent({ action: mo }));
  } }, { key: "maybeEventRecordingStarted", value: function(o, d) {
    var u = "record";
    o && (d.local || d[u] !== !0 || o[u] === d[u] || this.emitDailyJSEvent({ action: go }));
  } }, { key: "_trackStatePlayable", value: function(o) {
    return !(!o || o.state !== Ac);
  } }, { key: "_trackChanged", value: function(o, d) {
    return o?.id !== d?.id;
  } }, { key: "maybeEventTrackStopped", value: function(o, d, u) {
    var h, f, k = (h = d?.tracks[o]) !== null && h !== void 0 ? h : null, M = (f = u?.tracks[o]) !== null && f !== void 0 ? f : null, T = k?.track;
    if (T) {
      var P = this._trackStatePlayable(k), R = this._trackStatePlayable(M), U = this._trackChanged(T, M?.track);
      P && (R && !U || this.emitDailyJSEvent({ action: rl, track: T, participant: u ?? d, type: o }));
    }
  } }, { key: "maybeEventTrackStarted", value: function(o, d, u) {
    var h, f, k = (h = d?.tracks[o]) !== null && h !== void 0 ? h : null, M = (f = u?.tracks[o]) !== null && f !== void 0 ? f : null, T = M?.track;
    if (T) {
      var P = this._trackStatePlayable(k), R = this._trackStatePlayable(M), U = this._trackChanged(k?.track, T);
      R && (P && !U || this.emitDailyJSEvent({ action: nl, track: T, participant: u, type: o }));
    }
  } }, { key: "maybeParticipantTracksStopped", value: function(o, d) {
    if (o) for (var u in o.tracks) this.maybeEventTrackStopped(u, o, d);
  } }, { key: "maybeParticipantTracksStarted", value: function(o, d) {
    if (d) for (var u in d.tracks) this.maybeEventTrackStarted(u, o, d);
  } }, { key: "compareEqualForRMPUpdateEvent", value: function(o, d) {
    var u, h;
    return o.state === d.state && ((u = o.settings) === null || u === void 0 ? void 0 : u.volume) === ((h = d.settings) === null || h === void 0 ? void 0 : h.volume);
  } }, { key: "emitDailyJSEvent", value: function(o) {
    try {
      o.callClientId = this.callClientId, this.emit(o.action, o);
    } catch (d) {
      console.log("could not emit", o, d);
    }
  } }, { key: "compareEqualForParticipantUpdateEvent", value: function(o, d) {
    return !!ae(o, d) && (!o.videoTrack || !d.videoTrack || o.videoTrack.id === d.videoTrack.id && o.videoTrack.muted === d.videoTrack.muted && o.videoTrack.enabled === d.videoTrack.enabled) && (!o.audioTrack || !d.audioTrack || o.audioTrack.id === d.audioTrack.id && o.audioTrack.muted === d.audioTrack.muted && o.audioTrack.enabled === d.audioTrack.enabled);
  } }, { key: "nativeUtils", value: function() {
    return J() ? typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
  } }, { key: "updateIsPreparingToJoin", value: function(o) {
    this._updateCallState(this._callState, o);
  } }, { key: "_updateCallState", value: function(o) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin;
    if (o !== this._callState || d !== this._isPreparingToJoin) {
      var u = this._callState, h = this._isPreparingToJoin;
      this._callState = o, this._isPreparingToJoin = d;
      var f = this._callState === Ze;
      this.updateShowAndroidOngoingMeetingNotification(f);
      var k = Sn(u, h), M = Sn(this._callState, this._isPreparingToJoin);
      k !== M && (this.updateKeepDeviceAwake(M), this.updateDeviceAudioMode(M), this.updateNoOpRecordingEnsuringBackgroundContinuity(M));
    }
  } }, { key: "_handleFatalError", value: function(o) {
    var d;
    this._iframe && !o.preserveIframe && (this._iframe.src = ""), this._updateCallState(Qe), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(o.errorMsg), this._loadedCallback = null), o.preserveIframe;
    var u = bn(o, cu);
    typeof (u == null || (d = u.error) === null || d === void 0 ? void 0 : d.details) == "string" && (u.error.details = JSON.parse(u.error.details)), this._maybeSendToSentry(o), this._joinedCallback && (this._joinedCallback(null, u), this._joinedCallback = null), this.emitDailyJSEvent(u);
  } }, { key: "resetMeetingDependentVars", value: function() {
    this._participants = {}, this._participantCounts = qo, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = { access: or }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = mr(Jo, this._callObjectMode), this._isScreenSharing = !1, this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this._maxAppMessageSize = ar, this._callMachineInitialized = !1, this._bundleLoadTime = void 0, this._preloadCache;
  } }, { key: "updateKeepDeviceAwake", value: function(o) {
    J() && this.nativeUtils().setKeepDeviceAwake(o, this.callClientId);
  } }, { key: "updateDeviceAudioMode", value: function(o) {
    if (J() && !this.disableReactNativeAutoDeviceManagement("audio")) {
      var d = o ? this._nativeInCallAudioMode : "idle";
      this.nativeUtils().setAudioMode(d);
    }
  } }, { key: "updateShowAndroidOngoingMeetingNotification", value: function(o) {
    if (J() && this.nativeUtils().setShowOngoingMeetingNotification) {
      var d, u, h, f;
      if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
        var k = this.properties.reactNativeConfig.androidInCallNotification;
        d = k.title, u = k.subtitle, h = k.iconName, f = k.disableForCustomOverride;
      }
      f && (o = !1), this.nativeUtils().setShowOngoingMeetingNotification(o, d, u, h, this.callClientId);
    }
  } }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(o) {
    J() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(o);
  } }, { key: "toggleParticipantAudioBasedOnNativeAudioFocus", value: function() {
    var o;
    if (J()) {
      var d = (o = this._callMachine()) === null || o === void 0 || (o = o.store) === null || o === void 0 ? void 0 : o.getState();
      for (var u in d?.streams) {
        var h = d.streams[u];
        h && h.pendingTrack && h.pendingTrack.kind === "audio" && (h.pendingTrack.enabled = this._hasNativeAudioFocus);
      }
    }
  } }, { key: "disableReactNativeAutoDeviceManagement", value: function(o) {
    return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[o];
  } }, { key: "absoluteUrl", value: function(o) {
    if (o !== void 0) {
      var d = document.createElement("a");
      return d.href = o, d.href;
    }
  } }, { key: "sayHello", value: function() {
    var o = "hello, world.";
    return console.log(o), o;
  } }, { key: "_logUseAfterDestroy", value: function() {
    var o = Object.values(Ke)[0];
    if (this.needsLoad())
      if (o && !o.needsLoad()) {
        var d = { action: hn, level: "error", code: this.strictMode ? 9995 : 9997 };
        o.sendMessageToCallMachine(d);
      } else this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
    else {
      var u = { action: hn, level: "error", code: this.strictMode ? 9995 : 9997 };
      this._messageChannel.sendMessageToCallMachine(u, null, this.callClientId, this._iframe);
    }
  } }, { key: "_logDuplicateInstanceAttempt", value: function() {
    for (var o = 0, d = Object.values(Ke); o < d.length; o++) {
      var u = d[o];
      u._callMachineInitialized ? (u.sendMessageToCallMachine({ action: hn, level: "warn", code: this.allowMultipleCallInstances ? 9993 : 9992 }), u._delayDuplicateInstanceLog = !1) : u._delayDuplicateInstanceLog = !0;
    }
  } }, { key: "_maybeSendToSentry", value: function(o) {
    var d, u, h, f, k;
    if (!((d = o.error) !== null && d !== void 0 && d.type && (![Dc, Lc, ho].includes(o.error.type) || o.error.type === ho && o.error.msg.includes("deleted")))) {
      var M = (u = this.properties) !== null && u !== void 0 && u.url ? new URL(this.properties.url) : void 0, T = "production";
      M && M.host.includes(".staging.daily") && (T = "staging");
      var P, R, U, Q, oe, We = (function(ft) {
        const en = [Ka(), Ya(), Sc(), wc(), Oc(), xc(), tc(), Pc()];
        return ft.autoSessionTracking !== !1 && en.push(Tc()), en;
      })({}).filter(function(ft) {
        return !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(ft.name);
      }), He = new lc({ dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844", transport: fc, stackParser: _c, integrations: We, environment: T }), Z = new ze();
      if (Z.setClient(He), He.init(), !((h = this._participants) === null || h === void 0 || (h = h.local) === null || h === void 0) && h.session_id && Z.setExtra("sessionId", this._participants.local.session_id), this.properties) {
        var Ce = I({}, this.properties);
        Ce.userName = Ce.userName ? "[Filtered]" : void 0, Ce.userData = Ce.userData ? "[Filtered]" : void 0, Ce.token = Ce.token ? "[Filtered]" : void 0, Z.setExtra("properties", Ce);
      }
      if (M) {
        var Ge = M.searchParams.get("domain");
        if (!Ge) {
          var Xt = M.host.match(/(.*?)\./);
          Ge = Xt && Xt[1] || "";
        }
        Ge && Z.setTag("domain", Ge);
      }
      o.error && (Z.setTag("fatalErrorType", o.error.type), Z.setExtra("errorDetails", o.error.details), !((P = o.error.details) === null || P === void 0) && P.uri && Z.setTag("serverAddress", o.error.details.uri), !((R = o.error.details) === null || R === void 0) && R.workerGroup && Z.setTag("workerGroup", o.error.details.workerGroup), !((U = o.error.details) === null || U === void 0) && U.geoGroup && Z.setTag("geoGroup", o.error.details.geoGroup), !((Q = o.error.details) === null || Q === void 0) && Q.on && Z.setTag("connectionAttempt", o.error.details.on), (oe = o.error.details) !== null && oe !== void 0 && oe.bundleUrl && (Z.setTag("bundleUrl", o.error.details.bundleUrl), Z.setTag("bundleError", o.error.details.sourceError.type))), Z.setTags({ callMode: this._callObjectMode ? J() ? "reactNative" : (f = this.properties) !== null && f !== void 0 && (f = f.dailyConfig) !== null && f !== void 0 && (f = f.callMode) !== null && f !== void 0 && f.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame", version: t.version() });
      var Zt = ((k = o.error) === null || k === void 0 ? void 0 : k.msg) || o.errorMsg;
      Z.captureException(new Error(Zt));
    }
  } }, { key: "_callMachine", value: function() {
    var o;
    return (o = window._daily) === null || o === void 0 || (o = o.instances) === null || o === void 0 || (o = o[this.callClientId]) === null || o === void 0 ? void 0 : o.callMachine;
  } }, { key: "_maybeUpdateInputSettings", value: function(o) {
    if (!ae(this._inputSettings, o)) {
      var d = this._getInputSettings();
      this._inputSettings = o;
      var u = this._getInputSettings();
      ae(d, u) || this.emitDailyJSEvent({ action: vo, inputSettings: u });
    }
  } }], [{ key: "supportedBrowser", value: function() {
    if (J()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
    var o = ga.getParser(be());
    return { supported: !!ur(), mobile: o.getPlatformType() === "mobile", name: o.getBrowserName(), version: o.getBrowserVersion(), supportsFullscreen: !!So(), supportsScreenShare: !!jl(), supportsSfu: !!ur(), supportsVideoProcessing: xs(), supportsAudioProcessing: As() };
  } }, { key: "version", value: function() {
    return "0.94.0";
  } }, { key: "createCallObject", value: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return o.layout = "none", new t(null, o);
  } }, { key: "wrap", value: function(o) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (V(), !o || !o.contentWindow || typeof o.src != "string") throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
    return d.layout || (d.customLayout ? d.layout = "custom-v1" : d.layout = "browser"), new t(o, d);
  } }, { key: "createFrame", value: function(o, d) {
    var u, h;
    V(), o && d ? (u = o, h = d) : o && o.append ? (u = o, h = {}) : (u = document.body, h = o || {});
    var f = h.iframeStyle;
    f || (f = u === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
    var k = document.createElement("iframe");
    window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? k.allow = "microphone, camera" : k.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock; compute-pressure;", k.style.visibility = "hidden", u.appendChild(k), k.style.visibility = null, Object.keys(f).forEach(function(M) {
      return k.style[M] = f[M];
    }), h.layout || (h.customLayout ? h.layout = "custom-v1" : h.layout = "browser");
    try {
      return new t(k, h);
    } catch (M) {
      throw u.removeChild(k), M;
    }
  } }, { key: "createTransparentFrame", value: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    V();
    var d = document.createElement("iframe");
    return d.allow = "microphone; camera; autoplay", d.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `, document.body.appendChild(d), o.layout || (o.layout = "custom-v1"), t.wrap(d, o);
  } }, { key: "getCallInstance", value: function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    return o ? Ke[o] : Object.values(Ke)[0];
  } }]);
  var e, n, r, i, s, a, c, l, p, g, v, O, E, w, m, b, _, S, C, A, x, j, L, Y, _e, we, Ee, dt, pt, ht, At, Yt, It, jt, Qt, H, ie, Lt, Kt;
})();
function Yo(t) {
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
function vt(t, e) {
  var n = {};
  for (var r in t) if (t[r] instanceof MediaStreamTrack) console.warn("MediaStreamTrack found in props or cache.", r), n[r] = De;
  else if (r === "dailyConfig") {
    if (t[r].modifyLocalSdpHook) {
      var i = window._daily.instances[e].customCallbacks || {};
      i.modifyLocalSdpHook = t[r].modifyLocalSdpHook, window._daily.instances[e].customCallbacks = i, delete t[r].modifyLocalSdpHook;
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
  if (t !== Ze) {
    var n = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.");
    throw e && (n += " ".concat(e)), console.error(n), new Error(n);
  }
}
function Sn(t, e) {
  return [Lr, Ze].includes(t) || e;
}
function fr(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "This daily-js method", r = arguments.length > 3 ? arguments[3] : void 0;
  if (Sn(t, e)) {
    var i = "".concat(n, " not supported after joining a meeting.");
    throw r && (i += " ".concat(r)), console.error(i), new Error(i);
  }
}
function mn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", n = arguments.length > 2 ? arguments[2] : void 0;
  if (!t) {
    var r = "".concat(e, arguments.length > 3 && arguments[3] !== void 0 && arguments[3] ? " requires preAuth() or startCamera() to initialize call state." : " requires preAuth(), startCamera(), or join() to initialize call state.");
    throw n && (r += " ".concat(n)), console.error(r), new Error(r);
  }
}
function gr(t) {
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
function V() {
  if (J()) throw new Error("This daily-js method is not currently supported in React Native");
}
function Nt() {
  if (!J()) throw new Error("This daily-js method is only supported in React Native");
}
function zs(t) {
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
function Ws(t, e) {
  for (var n = e.allowAllParticipantsKey, r = function(v) {
    var O = ["local"];
    return n || O.push("*"), v && !O.includes(v);
  }, i = function(v) {
    return !!(v.layer === void 0 || Number.isInteger(v.layer) && v.layer >= 0 || v.layer === "inherit");
  }, s = function(v) {
    return !!v && !(v.video && !i(v.video)) && !(v.screenVideo && !i(v.screenVideo));
  }, a = 0, c = Object.entries(t); a < c.length; a++) {
    var l = X(c[a], 2), p = l[0], g = l[1];
    if (!r(p) || !s(g)) return !1;
  }
  return !0;
}
function Hs(t) {
  if ($(t) !== "object") return !1;
  for (var e = 0, n = Object.entries(t); e < n.length; e++) {
    var r = X(n[e], 2), i = r[0], s = r[1];
    switch (i) {
      case "video":
        if ($(s) !== "object") return !1;
        for (var a = 0, c = Object.entries(s); a < c.length; a++) {
          var l = X(c[a], 2), p = l[0], g = l[1];
          switch (p) {
            case "processor":
              if (!du(g)) return !1;
              break;
            case "settings":
              if (!Qo(g)) return !1;
              break;
            default:
              return !1;
          }
        }
        break;
      case "audio":
        if ($(s) !== "object") return !1;
        for (var v = 0, O = Object.entries(s); v < O.length; v++) {
          var E = X(O[v], 2), w = E[0], m = E[1];
          switch (w) {
            case "processor":
              if (!uu(m)) return !1;
              break;
            case "settings":
              if (!Qo(m)) return !1;
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
function Gs(t, e, n) {
  var r, i = [];
  t.video && t.video.processor && (xs((r = e?.useLegacyVideoProcessor) !== null && r !== void 0 && r) || (t.video.settings ? delete t.video.processor : delete t.video, i.push("video"))), t.audio && t.audio.processor && (As() || (t.audio.settings ? delete t.audio.processor : delete t.audio, i.push("audio"))), i.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(i.join(", "))), t.audio && t.audio.settings && (t.audio.settings.customTrack ? (n.audioTrack = t.audio.settings.customTrack, t.audio.settings = { customTrack: De }) : delete n.audioTrack), t.video && t.video.settings && (t.video.settings.customTrack ? (n.videoTrack = t.video.settings.customTrack, t.video.settings = { customTrack: De }) : delete n.videoTrack);
}
function uu(t) {
  if (J()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var e = ["type"];
  return !!t && $(t) === "object" && (Object.keys(t).filter(function(n) {
    return !e.includes(n);
  }).forEach(function(n) {
    console.warn("invalid key inputSettings -> audio -> processor : ".concat(n)), delete t[n];
  }), !!(function(n) {
    return typeof n != "string" ? !1 : Object.values(Os).includes(n) ? !0 : (console.error("inputSettings audio processor type invalid"), !1);
  })(t.type));
}
function du(t) {
  if (J()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var e = ["type", "config"];
  return !t || $(t) !== "object" || !(function(n) {
    return typeof n != "string" ? !1 : Object.values(kn).includes(n) ? !0 : (console.error("inputSettings video processor type invalid"), !1);
  })(t.type) || t.config && ($(t.config) !== "object" || !(function(n, r) {
    var i = Object.keys(r);
    if (i.length === 0) return !0;
    var s = "invalid object in inputSettings -> video -> processor -> config";
    switch (n) {
      case kn.BGBLUR:
        return i.length > 1 || i[0] !== "strength" ? (console.error(s), !1) : !(typeof r.strength != "number" || r.strength <= 0 || r.strength > 1 || isNaN(r.strength)) || (console.error("".concat(s, "; expected: {0 < strength <= 1}, got: ").concat(r.strength)), !1);
      case kn.BGIMAGE:
        return !(r.source !== void 0 && !(function(a) {
          if (a.source === "default") return a.type = "default", !0;
          if (a.source instanceof ArrayBuffer) return !0;
          if (On(a.source)) return a.type = "url", !!(function(p) {
            var g = new URL(p), v = g.pathname;
            if (g.protocol === "data:") try {
              var O = v.substring(v.indexOf(":") + 1, v.indexOf(";")).split("/")[1];
              return lr.includes(O);
            } catch (w) {
              return console.error("failed to deduce blob content type", w), !1;
            }
            var E = v.split(".").at(-1).toLowerCase().trim();
            return lr.includes(E);
          })(a.source) || (console.error("invalid image type; supported types: [".concat(lr.join(", "), "]")), !1);
          return c = a.source, l = Number(c), isNaN(l) || !Number.isInteger(l) || l <= 0 || l > 10 ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(10)), !1) : (a.type = "daily-preselect", !0);
          var c, l;
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
function Qo(t) {
  return $(t) === "object" && (!t.customTrack || t.customTrack instanceof MediaStreamTrack);
}
function Vr() {
  var t = Object.values(kn).join(" | "), e = Object.values(Os).join(" | ");
  return "inputSettings must be of the form: { video?: { processor?: { type: [ ".concat(t, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(e, " ] } } }");
}
function Ys(t) {
  var e = t.allowAllParticipantsKey;
  return "receiveSettings must be of the form { [<remote participant id> | ".concat(jc).concat(e ? ' | "'.concat("*", '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
}
function Qs() {
  return "customIntegrations should be an object of type ".concat(JSON.stringify(Ur), ".");
}
function Ks(t) {
  if (t && $(t) !== "object" || Array.isArray(t)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(Ln), ".")), !1;
  if (t) for (var e = 0, n = Object.entries(t); e < n.length; e++) for (var r = X(n[e], 1)[0], i = 0, s = Object.entries(t[r]); i < s.length; i++) {
    var a = X(s[i], 2), c = a[0], l = a[1], p = Ln.id[c];
    if (!p) return console.error("customTrayButton does not support key ".concat(c)), !1;
    switch (c) {
      case "iconPath":
      case "iconPathDarkMode":
        if (!On(l)) return console.error("customTrayButton ".concat(c, " should be a url.")), !1;
        break;
      case "visualState":
        if (!["default", "sidebar-open", "active"].includes(l)) return console.error("customTrayButton ".concat(c, " should be ").concat(p, ". Got: ").concat(l)), !1;
        break;
      default:
        if ($(l) !== p) return console.error("customTrayButton ".concat(c, " should be a ").concat(p, ".")), !1;
    }
  }
  return !0;
}
function Xs(t) {
  if (!t || t && $(t) !== "object" || Array.isArray(t)) return console.error(Qs()), !1;
  for (var e = function(v) {
    return "".concat(v, " should be ").concat(Ur.id[v]);
  }, n = function(v, O) {
    return console.error("customIntegration ".concat(v, ": ").concat(O));
  }, r = 0, i = Object.entries(t); r < i.length; r++) {
    var s = X(i[r], 1)[0];
    if (!("label" in t[s])) return n(s, "label is required"), !1;
    if (!("location" in t[s])) return n(s, "location is required"), !1;
    if (!("src" in t[s]) && !("srcdoc" in t[s])) return n(s, "src or srcdoc is required"), !1;
    for (var a = 0, c = Object.entries(t[s]); a < c.length; a++) {
      var l = X(c[a], 2), p = l[0], g = l[1];
      switch (p) {
        case "allow":
        case "csp":
        case "name":
        case "referrerPolicy":
        case "sandbox":
          if (typeof g != "string") return n(s, e(p)), !1;
          break;
        case "iconURL":
          if (!On(g)) return n(s, "".concat(p, " should be a url")), !1;
          break;
        case "src":
          if ("srcdoc" in t[s]) return n(s, "cannot have both src and srcdoc"), !1;
          if (!On(g)) return n(s, 'src "'.concat(g, '" is not a valid URL')), !1;
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
          if (!Ur.id[p]) return console.error("customIntegration does not support key ".concat(p)), !1;
      }
    }
  }
  return !0;
}
function Zs(t, e) {
  if (e === void 0) return !1;
  switch ($(e)) {
    case "string":
      return $(t) === e;
    case "object":
      if ($(t) !== "object") return !1;
      for (var n in t) if (!Zs(t[n], e[n])) return !1;
      return !0;
    default:
      return !1;
  }
}
function Ko(t, e) {
  var n = t.sessionId, r = t.toEndPoint, i = t.callerId, s = t.useSipRefer;
  if (!n || !r) throw new Error("".concat(e, "() requires a sessionId and toEndPoint"));
  if (typeof n != "string" || typeof r != "string") throw new Error("Invalid paramater: sessionId and toEndPoint must be of type string");
  if (s && !r.startsWith("sip:")) throw new Error('"toEndPoint" must be a "sip" address');
  if (!r.startsWith("sip:") && !r.startsWith("+")) throw new Error("toEndPoint: ".concat(r, ' must starts with either "sip:" or "+"'));
  if (i && typeof i != "string") throw new Error("callerId must be of type string");
  if (i && !r.startsWith("+")) throw new Error("callerId is only valid when transferring to a PSTN number");
}
function Xo(t) {
  if ($(t) !== "object") throw new Error('RemoteMediaPlayerSettings: must be "object" type');
  if (t.state && !Object.values(Dr).includes(t.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Dr));
  if (t.volume) {
    if (typeof t.volume != "number") throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
    if (t.volume < 0 || t.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
  }
}
function Zo(t, e, n) {
  return !(typeof t != "number" || t < e || t > n);
}
function mr(t, e) {
  return t && !e && delete t.data, t;
}
const Ae = (t) => typeof t == "string" ? t : void 0;
function pu(t) {
  return /^\s*(STYLIST (UPDATE|RESULT)|\[Stylist)/i.test(t);
}
function hu(t) {
  const e = t, n = e?.event_type;
  if (n !== "conversation.utterance" && n !== "conversation.utterance.streaming") return null;
  const r = e?.properties ?? {}, i = (Ae(r.speech) ?? Ae(r.text) ?? Ae(r.content) ?? Ae(r.transcript) ?? Ae(r.utterance) ?? "").trim();
  if (!i || pu(i)) return null;
  const a = (Ae(r.role) ?? Ae(r.speaker) ?? "").toLowerCase() === "user" ? "You" : "Sasha", c = Ae(r.inference_id) ?? Ae(e?.inference_id) ?? (r.turn_idx != null ? String(r.turn_idx) : void 0), l = n === "conversation.utterance.streaming", p = !l || r.is_final === !0 || r.final === !0;
  return { key: `${a}:${c ?? (l ? "live" : Math.random().toString(36).slice(2))}`, speaker: a, text: i, final: p };
}
const es = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
function fu(t, e, n = 200) {
  const r = [...t];
  let i = -1;
  for (let s = r.length - 1; s >= 0; s--) if (r[s].speaker === e.speaker) {
    i = s;
    break;
  }
  if (i >= 0) {
    const s = r[i], a = es(s.text), c = es(e.text), l = a === c || a.startsWith(c) || c.startsWith(a), p = s.key === e.key;
    if (i >= r.length - 2 && (l || p || !s.final && i === r.length - 1)) {
      const v = s.final && !e.final;
      return r[i] = v ? s : { ...e, text: c.length >= a.length || e.final ? e.text : s.text, final: s.final || e.final }, r.slice(-n);
    }
  }
  return r.push({ ...e }), r.slice(-n);
}
function gu(t) {
  return t.map((e) => `${e.speaker}: ${e.text}`).join(`
`);
}
let mu = 0;
function de(t, e, n = "debug-conversation") {
  return {
    message_type: "conversation",
    event_type: "conversation.tool_call",
    conversation_id: n,
    properties: { name: t, arguments: JSON.stringify(e), tool_call_id: `debug_${Date.now()}_${++mu}` }
  };
}
const vu = [
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
function yu(t, e) {
  const n = document.createElement("div");
  n.style.cssText = "position:fixed;left:8px;bottom:8px;z-index:9999;width:380px;max-height:60vh;overflow:auto;background:#fff;color:#111;border:1px solid #999;border-radius:8px;padding:8px;font:12px system-ui,sans-serif;box-shadow:0 4px 16px #0003", n.innerHTML = '<b>Avatar debug</b> <button data-x>clear</button><div data-btns style="display:flex;flex-wrap:wrap;gap:4px;margin:6px 0"></div><div data-log></div>';
  const r = n.querySelector("[data-btns]"), i = n.querySelector("[data-log]");
  let s = 0;
  const a = () => {
    for (; s < e.length; s++) {
      const c = e[s], l = document.createElement("div");
      l.style.cssText = "border-top:1px solid #eee;padding:3px 0;white-space:pre-wrap;word-break:break-word", c.dir === "in" ? l.textContent = `→ ${c.tool} ${JSON.stringify(c.args)}` : c.dir === "out" ? (l.textContent = `← ${c.tool} ${c.status} ${c.bytes}B ${c.ms}ms${c.trimmed.length ? ` trimmed: ${c.trimmed.join(", ")}` : ""}
${JSON.stringify(c.output)}`, c.status === "error" && (l.style.background = "#fde8e8")) : l.textContent = `ℹ ${c.text}`, i.prepend(l);
    }
  };
  for (const [c, l] of vu) {
    const p = document.createElement("button");
    p.textContent = c, p.onclick = async () => {
      await t.handle(l(), (g) => console.log("[avatar] pushed later", g)), a();
    }, r.append(p);
  }
  n.querySelector("[data-x]").onclick = () => {
    i.replaceChildren(), s = e.length;
  }, setInterval(a, 500), document.body.append(n);
}
class ea extends Error {
  constructor(e) {
    super(`stylist: ${e}`), this.backendMessage = e, this.name = "StylistRunError";
  }
}
function bu(t) {
  return /\bwom[ae]n\W*s?\b/i.test(t) && /\bm[ae]n\W*s?\b/i.test(t) && /department|style from|shopping/i.test(t);
}
const _u = 12e4;
function wu(t) {
  const e = t.baseUrl.replace(/\/+$/, ""), n = t.fetchImpl ?? ((...i) => fetch(...i)), r = t.timeoutMs ?? _u;
  return async (i) => {
    const s = AbortSignal.timeout(r), a = await n(`${e}/api/stylist/run`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(i),
      signal: s
    });
    if (!a.ok) throw new Error(`stylist run ${a.status}: ${(await a.text()).slice(0, 300)}`);
    const { run_id: c } = await a.json();
    if (!c) throw new Error("stylist run returned no run_id");
    t.onStart?.();
    const l = await n(`${e}/api/stylist/events?run_id=${encodeURIComponent(c)}`, {
      headers: { accept: "text/event-stream" },
      signal: s
    });
    if (!l.ok || !l.body) throw new Error(`stylist events ${l.status}`);
    for await (const p of ku(l.body))
      if (p.type === "step") t.onStep?.({ id: p.id, label: p.label, status: p.status });
      else {
        if (p.type === "error") throw new ea(p.message);
        if (p.type === "result") {
          const { looks: g, spoken_summary: v, lookbook_artifact: O, warnings: E } = p;
          return { looks: g, spoken_summary: v, lookbook_artifact: O, ...E?.length ? { warnings: E } : {} };
        }
      }
    throw new Error("stylist stream ended without a result");
  };
}
async function* ku(t) {
  const e = t.getReader(), n = new TextDecoder();
  let r = "";
  try {
    for (; ; ) {
      const { value: i, done: s } = await e.read();
      i && (r += n.decode(i, { stream: !0 }));
      let a;
      for (; (a = r.search(/\r?\n\r?\n/)) !== -1; ) {
        const c = r.slice(0, a);
        r = r.slice(a).replace(/^\r?\n\r?\n/, "");
        const l = c.split(/\r?\n/).filter((p) => p.startsWith("data:")).map((p) => p.slice(5).replace(/^ /, "")).join(`
`);
        if (l)
          try {
            yield JSON.parse(l);
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
function Su(t) {
  const e = t.match(/\$\s?(\d[\d,]*(?:\.\d+)?)\s*(k)?|(\d[\d,]*(?:\.\d+)?)\s*(k|grand|bucks|dollars|usd)\b/i);
  if (!e) return;
  const n = Number((e[1] ?? e[3]).replace(/,/g, "")), r = /^(k|grand)$/i.test(e[2] ?? e[4] ?? "");
  return Number.isFinite(n) ? n * (r ? 1e3 : 1) : void 0;
}
const ta = 3500, Mu = 1e4, Dn = 40, ts = 90;
function Eu(t) {
  const e = t;
  return !!e && typeof e == "object" && e.event_type === "conversation.tool_call" && !!e.properties && typeof e.properties.name == "string";
}
function kt(t) {
  return new TextEncoder().encode(typeof t == "string" ? t : JSON.stringify(t)).length;
}
function vn(t, e) {
  const n = t && typeof t == "object" ? t : {}, r = {};
  for (const [i, { type: s, required: a }] of Object.entries(e)) {
    let c = n[i];
    (c === "" || c === null) && (c = void 0);
    const l = i.replace(/_/g, " ");
    if (c === void 0) {
      if (a) return { ok: !1, error: `I need the ${l} to do that. Ask the shopper for it.` };
      continue;
    }
    if (s === "number") {
      const p = typeof c == "string" ? Number(c.replace(/[$,\s]/g, "")) : c;
      if (typeof p != "number" || !Number.isFinite(p) || p < 0) return { ok: !1, error: `${l} should be a number.` };
      r[i] = p;
    } else if (s === "boolean")
      r[i] = c === !0 || c === "true" || c === 1 || c === "yes";
    else {
      if (typeof c != "string" && typeof c != "number") return { ok: !1, error: `${l} should be text.` };
      r[i] = String(c).trim();
    }
  }
  return { ok: !0, args: r };
}
function Cu(t) {
  return typeof t != "string" ? t ?? {} : t.trim() === "" ? {} : JSON.parse(t);
}
function Je(t, e) {
  return t.length <= e ? t : t.slice(0, e - 1).trimEnd() + "…";
}
const Ft = (t) => Math.round(t * 100) / 100, se = (t) => ({ status: "error", output: t });
function na(t, e = 1, n = 10) {
  return Array.from({ length: n }, () => ({
    label: `cut ${t}`,
    apply: (r) => r[t].length > e ? { ...r, [t]: r[t].slice(0, -1) } : r
  }));
}
function Tu(t, e) {
  const n = t.styleOutfitTimeoutMs ?? 15e4, r = t.styleOutfitMode ?? "await", i = t.spendLimitUsd ?? Mu, s = t.shopperId ?? "demo-shopper", a = t.logger ?? ((w) => console.log(w)), c = t.trimThresholdBytes ?? ta;
  let l = !1;
  const p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), v = (w, m) => {
    const b = Ou(typeof m == "string" ? m : void 0);
    return b && p.set(w.conversationId, b), b ?? p.get(w.conversationId);
  }, O = /* @__PURE__ */ new Map(), E = (w) => w.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  return {
    async search_products(w, m, b) {
      w && typeof w == "object" && w.query == null && w.q != null && (w = { ...w, query: w.q });
      const _ = vn(w, {
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
      const S = _.args, C = {};
      S.query && (C.q = S.query), S.department && (C.dept = S.department), S.style && (C.style = S.style), S.brand && (C.brand = S.brand), S.color && (C.color = S.color), S.max_price !== void 0 && (C.max_price = S.max_price), S.size && (C.size = S.size);
      const A = v(b, S.gender);
      A && (C.gender = A), S.on_sale && (C.sale = !0);
      let x = await m.search({ ...C }) ?? [];
      const j = [];
      for (const L of ["style", "color", "dept"]) {
        if (x.length > 0) break;
        C[L] !== void 0 && (j.push(`${L === "dept" ? "department" : L} ${C[L]}`), delete C[L], x = await m.search({ ...C }) ?? []);
      }
      for (const L of x) e.set(L.id, L.price);
      return {
        status: "success",
        output: {
          products: x.map((L) => ({ id: L.id, title: L.title, brand: L.brand, price: L.price })),
          ...j.length && x.length ? { note: `Nothing matched every filter, so I dropped ${j.join(" and ")}. Mention it briefly.` } : {},
          ...x.length === 0 ? { hint: "No matches. Try a simpler garment word." } : {}
        },
        trims: [
          {
            label: "short titles",
            apply: (L) => ({ ...L, products: L.products.map((Y) => ({ ...Y, title: Je(Y.title, Dn) })) })
          },
          { label: "drop brands", apply: (L) => ({ ...L, products: L.products.map(({ brand: Y, ..._e }) => _e) }) },
          ...na("products")
        ]
      };
    },
    async show_product(w, m) {
      const b = vn(w, { product_id: { type: "string", required: !0 } });
      if (!b.ok) return se(b.error);
      const _ = await m.openProduct(b.args.product_id);
      return _.ok ? (e.set(_.id, _.price), {
        status: "success",
        output: { shown: !0, id: _.id, title: _.title, brand: _.brand, price: _.price, sizes_in_stock: _.sizes, colors: _.colors },
        trims: [
          { label: "short title", apply: (S) => ({ ...S, title: Je(S.title, Dn) }) },
          {
            label: "cut colors/sizes",
            apply: (S) => ({ ...S, colors: S.colors.slice(0, 6), sizes_in_stock: S.sizes_in_stock.slice(0, 12) })
          }
        ]
      }) : se(`${_.error}. Use an id exactly as a tool returned it, or search again.`);
    },
    async add_to_bag(w, m) {
      const b = vn(w, {
        product_id: { type: "string", required: !0 },
        size: { type: "string" },
        color: { type: "string" }
      });
      if (!b.ok) return se(b.error);
      const _ = b.args.product_id;
      let S = m.getProduct?.(_)?.price ?? e.get(_);
      if (S === void 0) {
        const j = await m.openProduct(_);
        if (!j.ok) return se(`${j.error}. Use an id exactly as a tool returned it.`);
        S = j.price, e.set(_, S);
      }
      const C = await m.getBag();
      if (C.total + S > i)
        return se(
          `Not added: that would take the bag to ${Ft(C.total + S)} dollars, past the ${i} dollar limit for this conversation. The bag is at ${Ft(C.total)} dollars.`
        );
      const A = await m.addToBag(_, b.args.size, b.args.color);
      if (!A.ok) return se(Je(A.error || "That couldn't be added to the bag.", 200));
      const x = await m.getBag();
      return {
        status: "success",
        output: {
          added: { product_id: _, ...A.size ?? b.args.size ? { size: A.size ?? b.args.size } : {}, ...b.args.color ? { color: b.args.color } : {} },
          bag_count: x.count,
          bag_total_usd: Ft(x.total),
          left_under_limit_usd: Ft(i - x.total)
        }
      };
    },
    async style_outfit(w, m, b) {
      const _ = (H) => {
        if (r === "background" && b.send)
          try {
            b.send(ns(b.conversationId, `STYLIST RESULT, not said by the shopper. ${H}`, c));
          } catch (ie) {
            a(`[tool] style_outfit early send failed: ${ie.message}`);
          }
        return se(H);
      }, S = vn(w, {
        occasion: { type: "string", required: !0 },
        budget_usd: { type: "number", required: !0 },
        notes: { type: "string" },
        rework_slot: { type: "string" },
        rework_feedback: { type: "string" },
        gender: { type: "string" }
      });
      if (!S.ok) return _(S.error);
      if (l)
        return _("Looks are still being built. Don't call style_outfit again; tell the shopper it's still cooking.");
      const C = S.args, A = v(b, C.gender), x = C.budget_usd;
      if (!(x > 0)) return _("The budget has to be more than zero. Ask the shopper what they want to spend.");
      const j = E(C.occasion), L = [...O].filter(([H]) => H !== j).reduce((H, [, ie]) => H + ie, 0), Y = (await m.getBag())?.total ?? 0, _e = Ft(i - Math.max(Y, L));
      if (_e <= 0)
        return _(`The ${i} dollar limit for this conversation is used up by the earlier outfits and the bag. Tell the shopper no more looks this time.`);
      const we = Math.min(x, _e), Ee = b.conversationId || "no-conversation", dt = g.get(Ee), pt = !!(C.rework_slot && C.rework_feedback), ht = pt && dt?.presetLooks?.length ? dt.presetLooks : void 0, At = ht ? [Pu(ht, C.rework_slot, C.rework_feedback), C.notes].filter(Boolean).join(" ") : C.notes, Yt = {
        shopper_id: s,
        conversation_id: Ee,
        occasion: C.occasion,
        budget_usd: we,
        ...At ? { notes: At } : {},
        ...A ? { gender: A } : {},
        ...t.instant && !dt && !pt ? { instant: !0 } : {},
        ...pt && !ht ? { rework: { slot: C.rework_slot, feedback: C.rework_feedback } } : {}
      }, It = we < x ? { budget_note: `Budget capped at ${we} dollars: the limit is ${i} dollars per conversation across all outfits and the bag.` } : {}, jt = async () => {
        l = !0;
        let H;
        try {
          H = await Lu(t.styleOutfit(Yt), n);
        } catch (ie) {
          return t.onLog?.({ dir: "info", text: `style_outfit backend failed: ${ie.message}` }), ie instanceof ea && bu(ie.backendMessage) ? se(
            `The stylist needs the department before it can build looks. Ask the shopper this aloud, once: "${ie.backendMessage}" Then call style_outfit again with the same occasion and budget and gender set to men or women.`
          ) : se("The stylist couldn't finish those looks. Say so plainly and offer to try again.");
        } finally {
          l = !1;
        }
        if (!H || !Array.isArray(H.looks) || H.looks.length === 0)
          return se("The stylist came back with no looks. Say so plainly and offer to try again.");
        O.set(j, we), g.set(Ee, { presetLooks: H.warnings?.includes("preset looks") ? H.looks : void 0 });
        try {
          await m.showLooks(H);
        } catch (ie) {
          t.onLog?.({ dir: "info", text: `Barn.showLooks threw: ${ie.message}` });
        }
        return { status: "success", output: { ...Iu(H), ...It }, trims: ju };
      };
      if (r === "await" || !b.send)
        return r === "background" && a("[tool] style_outfit background mode needs a send function; awaiting instead"), jt();
      const Qt = b.send;
      return jt().then((H) => {
        const ie = H.status === "success" ? xu(H.output, b.conversationId, c) : `STYLIST RESULT, not said by the shopper. ${H.output}`, Lt = ns(b.conversationId, ie, c);
        t.onLog?.({ dir: "info", text: `style_outfit pushed ${H.status} via conversation.respond (${kt(Lt)}B)` });
        try {
          Qt(Lt);
        } catch (Kt) {
          a(`[tool] style_outfit background send failed: ${Kt.message}`);
        }
      }), {
        status: "success",
        output: {
          started: !0,
          ...It,
          note: "The stylist is working on this request and it takes about a minute. Keep telling short stories and jokes. The looks arrive in a new message starting with STYLIST RESULT. After that, call style_outfit again for any new request."
        }
      };
    }
  };
}
function Ou(t) {
  const e = (t ?? "").toLowerCase().replace(/[^a-z]/g, "");
  if (/^(women|woman|womens|female|ladies|lady|womenswear)$/.test(e)) return "women";
  if (/^(men|man|mens|male|gents|menswear)$/.test(e)) return "men";
}
function Pu(t, e, n) {
  return `These looks are on the shopper's board now. ${t.map((i, s) => {
    const a = (i.items ?? []).map((c) => c.product_id ? `${c.slot} ${c.product_id}${c.size ? ` size ${c.size}` : ""}` : `${c.slot} the shopper's own ${c.closet_item}`).join(", ");
    return `Look ${s + 1} "${i.outfit_name}": ${a}.`;
  }).join(" ")} Change only the ${e} piece in each look (feedback: ${n}). Keep every other piece exactly the same, stay within budget, and return all the looks.`;
}
function yn(t) {
  const e = t.looks.map((n, r) => {
    const i = (n.items ?? []).map(
      (s) => "product_id" in s ? `${s.slot} is product_id ${s.product_id}${"size" in s && s.size ? `, size ${s.size}` : ""}${"why" in s && s.why ? `, why: ${s.why}` : ""}` : `${s.slot} is the shopper's own ${s.closet_item}${"why" in s && s.why ? `, why: ${s.why}` : ""}`
    ).join("; ");
    return `Look ${r + 1}, ${n.outfit_name}, ${n.total_usd} dollars: ${i}.`;
  });
  return `STYLIST RESULT, not said by the shopper. The looks are on the outfit board now. Say spoken_summary in your own voice, then say in two or three sentences why the pieces in look 1 work together, using the why notes, and ask which look the shopper likes. When adding an item to the bag, use the size listed here. spoken_summary: ${t.spoken_summary} ${e.join(" ")}`;
}
function xu(t, e, n) {
  const r = (a) => kt(Au(e, a));
  let i = t, s = yn(i);
  if (r(s) <= n) return s;
  for (i = { ...i, looks: i.looks.map((a, c) => c === 0 ? a : { ...a, items: a.items.map(({ why: l, ...p }) => p) }) }, s = yn(i); r(s) > n && i.looks.length > 1; )
    i = { ...i, looks: i.looks.slice(0, -1) }, s = yn(i);
  return r(s) > n && (i = { ...i, looks: i.looks.map((a) => ({ ...a, items: a.items.map(({ why: c, ...l }) => l) })) }, s = yn(i)), s;
}
function Au(t, e) {
  return { message_type: "conversation", event_type: "conversation.respond", conversation_id: t, properties: { text: e } };
}
function Iu(t) {
  return {
    spoken_summary: t.spoken_summary,
    looks: t.looks.map((e) => ({
      outfit_name: e.outfit_name,
      total_usd: e.total_usd,
      items: (e.items ?? []).map(
        (n) => n.product_id ? { product_id: n.product_id, slot: n.slot, ...n.size ? { size: n.size } : {}, ...n.why ? { why: Je(n.why, ts) } : {} } : { closet_item: Je(n.closet_item ?? "", Dn), slot: n.slot, ...n.why ? { why: Je(n.why, ts) } : {} }
      )
    }))
  };
}
const ju = [
  { label: "short summary", apply: (t) => ({ ...t, spoken_summary: Je(t.spoken_summary ?? "", 300) }) },
  {
    label: "short names",
    apply: (t) => ({ ...t, looks: t.looks.map((e) => ({ ...e, outfit_name: Je(e.outfit_name, Dn) })) })
  },
  ...na("looks"),
  { label: "drop items", apply: (t) => ({ ...t, looks: t.looks.map(({ items: e, ...n }) => n) }) }
];
function ns(t, e, n) {
  const r = (s) => ({
    message_type: "conversation",
    event_type: "conversation.respond",
    conversation_id: t,
    properties: { text: s.replace(/\[/g, "(").replace(/\]/g, ")") }
  });
  let i = r(e);
  for (; kt(i) > n && e.length > 200; )
    e = e.slice(0, Math.floor(e.length * 0.8)), i = r(e + "…");
  return i;
}
function Lu(t, e) {
  let n;
  return Promise.race([
    t,
    new Promise((r, i) => {
      n = setTimeout(() => i(new Error(`timed out after ${e}ms`)), e);
    })
  ]).finally(() => clearTimeout(n));
}
function Du(t) {
  const n = Tu(t, /* @__PURE__ */ new Map()), r = t.logger ?? ((l) => console.log(l)), i = t.trimThresholdBytes ?? ta, s = typeof t.bridge == "function" ? t.bridge : () => t.bridge, a = /* @__PURE__ */ new Set();
  async function c(l, p) {
    if (!Eu(l)) return null;
    const g = Date.now(), { name: v } = l.properties, O = l.properties.tool_call_id ?? l.properties.inference_id ?? l.inference_id ?? "";
    if (l.properties.tool_call_id || r(`[tool] ${v} WARNING: no tool_call_id on incoming call`), O && a.has(O))
      return r(`[tool] ${v} duplicate ${O} ignored`), null;
    O && a.add(O);
    let E, w = l.properties.arguments;
    try {
      w = Cu(l.properties.arguments), t.onLog?.({ dir: "in", tool: v, tool_call_id: O, args: w });
      const x = Object.hasOwn(n, v) ? n[v] : void 0, j = s();
      x ? j ? E = await x(w, j, { conversationId: l.conversation_id, send: p }) : E = se("The store isn't loaded yet. Try again in a moment.") : E = se(`Unknown tool ${v}.`);
    } catch (x) {
      x instanceof SyntaxError && typeof l.properties.arguments == "string" ? (t.onLog?.({ dir: "in", tool: v, tool_call_id: O, args: w }), E = se("I couldn't read those tool arguments. Try again.")) : (r(`[tool] ${v} handler error: ${x?.message ?? x}`), E = se(`Something went wrong with ${v.replace(/_/g, " ")}. Try once more.`));
    }
    const m = (x) => ({
      message_type: "conversation",
      event_type: "conversation.tool_result",
      conversation_id: l.conversation_id,
      properties: { tool_call_id: O, output: x, status: E.status }
    });
    let b = m(E.output), _ = kt(b);
    const S = [], C = _;
    for (const x of E.trims ?? []) {
      if (_ <= i) break;
      const j = m(x.apply(b.properties.output)), L = kt(j);
      L < _ && (b = j, _ = L, S[S.length - 1] !== x.label && S.push(x.label));
    }
    _ > i && (b = m("Done. The details were too long to send; describe what is on screen instead."), _ = kt(b), S.push("replaced output"));
    const A = Date.now() - g;
    return S.length && r(`[tool] ${v} trimmed ${C}B -> ${_}B (${S.join(", ")})`), r(`[tool] ${v} ${_}B ${A}ms${E.status === "error" ? " error" : ""}`), t.onLog?.({
      dir: "out",
      tool: v,
      tool_call_id: O,
      status: E.status,
      bytes: _,
      ms: A,
      trimmed: S,
      output: b.properties.output
    }), b;
  }
  return { handle: c };
}
function Nu(t) {
  return `STYLIST UPDATE, not said by the shopper. ${t ? `The styling agent is on this step: "${t}".` : "The styling agent is still working."} Give it a quick nod, then keep your show going: carry on with your story, or start your next bit. Don't name products or prices.`;
}
function Fu(t) {
  const e = t.firstMs ?? 8e3, n = t.everyMs ?? 1e4, r = t.maxUpdates ?? 8, i = t.quietNeededMs ?? 2e3;
  let s = !1, a = 0, c = 0, l;
  return {
    start(p) {
      s = !0, a = p + e, c = 0, l = void 0;
    },
    step(p) {
      p && (l = p);
    },
    stop() {
      s = !1;
    },
    /** Call about once a second while a run is going. */
    tick(p) {
      !s || c >= r || p < a || t.quietMs(p) < i || (t.say(Nu(l)), c += 1, a = p + n);
    }
  };
}
function Bu() {
  const t = { user: !1, pal: !1 };
  let e = 0, n = !1;
  return {
    track(r, i) {
      const s = r, a = String(s?.event_type ?? "");
      let c, l;
      const p = /^conversation\.(started|stopped)_speaking$/.exec(a), g = /^conversation\.(user|replica|pal)\.(started|stopped)_speaking$/.exec(a);
      if (p)
        c = s?.properties?.role, l = p[1] === "started";
      else if (g)
        c = g[1], l = g[2] === "started";
      else return;
      const v = c === "user" ? "user" : c === "pal" || c === "replica" ? "pal" : void 0;
      v && (t[v] = l, e = i, n = !0);
    },
    /** Milliseconds since anyone last spoke; 0 while someone is speaking or before any speech event arrived. */
    quietMs(r) {
      return !n || t.user || t.pal ? 0 : r - e;
    }
  };
}
const Ru = "https://backend-production-6d9d.up.railway.app", Wn = new URLSearchParams(location.search), Hn = window.AVATAR_CONFIG ?? {}, $u = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname), Pt = (Wn.get("backend") ?? Hn.backend ?? ($u ? "http://localhost:8787" : Ru)).replace(/\/+$/, ""), ra = Wn.get("avatar_instant") !== "0" && Hn.instant !== !1, Jr = Wn.get("avatar_mode") ?? Hn.styleOutfitMode ?? "background", it = () => window.Barn, Vt = [], ia = Bu(), Mn = Fu({
  say: (t) => {
    xe && Fn({ message_type: "conversation", event_type: "conversation.respond", conversation_id: xe, properties: { text: t } });
  },
  quietMs: (t) => ia.quietMs(t)
}), Uu = wu({
  baseUrl: Pt,
  onStart: () => it()?.resetFeed(),
  onStep: (t) => {
    it()?.addFeedStep(t), t.status === "start" && Mn.step(t.label);
  }
}), Nn = Du({
  bridge: it,
  shopperId: Hn.shopperId,
  styleOutfitMode: Jr,
  instant: ra,
  styleOutfit: async (t) => {
    Mn.start(Date.now());
    const e = setInterval(() => Mn.tick(Date.now()), 1e3);
    try {
      return await Uu(t);
    } finally {
      clearInterval(e), Mn.stop();
    }
  },
  onLog: (t) => {
    Vt.push(t), Vt.length > 200 && Vt.shift();
  },
  logger: (t) => console.log(`[avatar] ${t}`)
});
let Be, xe, G = "idle";
const Gn = () => document.getElementById("avatar-slot");
let Ne = [], St = (() => {
  try {
    return localStorage.getItem("avatar.cc") !== "0";
  } catch {
    return !0;
  }
})(), rs = !1;
const En = [];
function Vu() {
  const t = Gn();
  if (!t) return null;
  let e = document.querySelector(".avatar-transcript");
  return e || (e = document.createElement("details"), e.className = "avatar-transcript", e.open = !0, e.style.cssText = "margin:8px 0 0;font:12.5px/1.45 system-ui,sans-serif;color:inherit", e.innerHTML = `
      <summary style="cursor:pointer;font-weight:600;display:flex;justify-content:space-between;align-items:center">Transcript
        <button type="button" class="avatar-transcript-copy" style="font:11px system-ui,sans-serif;padding:1px 6px;border-radius:4px;border:1px solid currentColor;background:none;color:inherit;cursor:pointer">Copy</button></summary>
      <div class="avatar-transcript-lines" style="max-height:180px;overflow:auto;margin-top:6px;display:grid;gap:4px"></div>`, e.querySelector(".avatar-transcript-copy").onclick = (n) => {
    n.preventDefault(), navigator.clipboard?.writeText(gu(Ne)).catch(() => {
    });
  }, t.after(e)), e;
}
function qr() {
  const t = Gn()?.querySelector(".avatar-ui"), e = t?.querySelector(".avatar-cc"), n = t?.querySelector(".avatar-cc-toggle");
  if (n && (n.hidden = G !== "live", n.setAttribute("aria-pressed", String(St)), n.style.opacity = St ? "1" : "0.5"), e) {
    const a = Ne.slice(-2);
    e.hidden = !St || G !== "live" || a.length === 0, e.replaceChildren(
      ...a.map((c) => {
        const l = document.createElement("div"), p = document.createElement("b");
        return p.textContent = `${c.speaker}: `, p.style.color = c.speaker === "Sasha" ? "#ffd479" : "#9fd3ff", l.append(p, document.createTextNode(c.text)), l;
      })
    );
  }
  const r = Ne.length ? Vu() : document.querySelector(".avatar-transcript");
  if (!r) return;
  r.hidden = Ne.length === 0;
  const i = r.querySelector(".avatar-transcript-lines"), s = i.scrollTop + i.clientHeight >= i.scrollHeight - 8;
  i.replaceChildren(
    ...Ne.map((a) => {
      const c = document.createElement("div"), l = document.createElement("b");
      return l.textContent = `${a.speaker}: `, c.append(l, document.createTextNode(a.text)), a.final || (c.style.opacity = "0.7"), c;
    })
  ), s && (i.scrollTop = i.scrollHeight);
}
function oa(t) {
  if (!String(t?.event_type ?? "").startsWith("conversation.utterance")) return;
  En.push(t), En.length > 50 && En.shift(), rs || (rs = !0, console.log("[avatar] first utterance payload (captions read this shape):", t));
  const n = hu(t);
  n && (Ne = fu(Ne, n), qr());
}
function Gt(t) {
  const e = Gn();
  if (!e) return;
  let n = e.querySelector(".avatar-ui");
  n || (e.replaceChildren(), n = document.createElement("div"), n.className = "avatar-ui", n.style.cssText = "position:relative;width:100%;height:100%;min-height:180px;background:#111;border-radius:inherit;overflow:hidden", n.innerHTML = `
      <video autoplay playsinline muted style="width:100%;height:100%;object-fit:cover;display:block"></video>
      <audio autoplay></audio>
      <div class="avatar-overlay" style="position:absolute;inset:0;display:grid;place-items:center;gap:8px;color:#eee;font:14px system-ui,sans-serif;text-align:center;padding:12px"></div>
      <div class="avatar-cc" aria-live="polite" style="position:absolute;left:8px;right:96px;bottom:8px;display:grid;gap:2px;padding:6px 8px;border-radius:6px;background:rgba(0,0,0,.62);color:#fff;font:13px/1.35 system-ui,sans-serif;text-align:left" hidden></div>
      <button class="avatar-cc-toggle" type="button" aria-pressed="true" title="Captions" style="position:absolute;right:8px;top:8px;padding:2px 7px;border-radius:4px;border:1px solid rgba(255,255,255,.6);background:rgba(0,0,0,.45);color:#fff;font:600 11px system-ui,sans-serif;cursor:pointer" hidden>CC</button>
      <button class="btn avatar-end" type="button" style="position:absolute;right:8px;bottom:8px" hidden>End call</button>`, n.querySelector(".avatar-end").onclick = () => {
    aa();
  }, n.querySelector(".avatar-cc-toggle").onclick = () => {
    St = !St;
    try {
      localStorage.setItem("avatar.cc", St ? "1" : "0");
    } catch {
    }
    qr();
  }, e.append(n)), qr();
  const r = n.querySelector(".avatar-overlay"), i = n.querySelector(".avatar-end");
  if (i.hidden = G !== "live", G === "live" && !t) {
    r.hidden = !0;
    return;
  }
  r.hidden = !1, r.classList.toggle("avatar-welcome", G !== "live"), r.replaceChildren();
  const s = document.createElement("p");
  if (s.style.margin = "0", s.textContent = t ?? { idle: "Talk to Sasha, your personal video stylist", starting: "Connecting to Sasha…", ending: "Ending call…", error: "Couldn't connect.", live: "" }[G], r.append(s), G === "idle" || G === "error") {
    const a = document.createElement("button");
    a.className = "btn", a.type = "button", a.textContent = G === "error" ? "Try again" : "Start video call", a.onclick = () => {
      sa();
    }, r.append(a);
  }
}
function yt() {
  const t = Gn()?.querySelector(".avatar-ui");
  if (!Be || !t) return;
  const e = Object.values(Be.participants()).find((p) => !p.local), n = (p) => {
    const g = e?.tracks?.[p];
    return g && g.state === "playable" ? g.persistentTrack : void 0;
  }, r = t.querySelector("video"), i = t.querySelector("audio"), s = n("video"), a = n("audio"), c = r.srcObject?.getVideoTracks()[0];
  s && c?.id !== s.id && (r.srcObject = new MediaStream([s])), !s && c && (r.srcObject = null);
  const l = i.srcObject?.getAudioTracks()[0];
  a && l?.id !== a.id && (i.srcObject = new MediaStream([a]), i.play().catch(() => {
  })), !a && l && (i.srcObject = null), G === "live" && Gt(e ? void 0 : "Waiting for Sasha to join…");
}
function Fn(t) {
  if (!(!Be || G !== "live"))
    try {
      Be.sendAppMessage(t, "*");
    } catch (e) {
      console.error("[avatar] sendAppMessage failed", e);
    }
}
async function Ju(t) {
  if (!t) return;
  ia.track(t.data, Date.now()), oa(t.data);
  const e = await Nn.handle(t.data, Fn);
  e && Fn(e);
}
async function sa() {
  if (!(G === "starting" || G === "live")) {
    G = "starting", Ne = [], Gt();
    try {
      await it()?.ready;
      const t = await fetch(`${Pt}/api/conversation`, { method: "POST", headers: { "content-type": "application/json" }, body: "{}" }), e = await t.json().catch(() => ({}));
      if (!t.ok) throw new Error(e.error ?? `HTTP ${t.status}`);
      xe = e.conversation_id, Go.getCallInstance()?.destroy(), Be = Go.createCallObject({ subscribeToTracksAutomatically: !0 }), Be.on("app-message", Ju).on("participant-joined", yt).on("participant-updated", yt).on("participant-left", yt).on("track-started", yt).on("track-stopped", yt).on("left-meeting", () => {
        Cn("Call ended.");
      }).on("error", (n) => {
        Cn(`Call error: ${n?.errorMsg ?? "unknown"}`, !0);
      }), await Be.join({ url: e.conversation_url }), G = "live", yt();
    } catch (t) {
      console.error("[avatar] start failed", t), await Cn(`Couldn't start the call: ${t.message}. You can still type to the stylist below.`, !0);
    }
  }
}
async function Cn(t, e = !1) {
  const n = Be;
  if (Be = void 0, n) {
    try {
      await n.leave();
    } catch {
    }
    try {
      await n.destroy();
    } catch {
    }
  }
  G = e ? "error" : "idle", Gt(t);
}
async function aa() {
  if (G !== "live") return;
  G = "ending", Gt();
  const t = xe;
  xe = void 0, t && fetch(`${Pt}/api/conversation/end`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ conversation_id: t })
  }).catch(() => {
  }), await Cn("Call ended.");
}
addEventListener("pagehide", () => {
  xe && navigator.sendBeacon?.(
    `${Pt}/api/conversation/end`,
    new Blob([JSON.stringify({ conversation_id: xe })], { type: "application/json" })
  );
});
let qu = 0;
addEventListener("barn:brief", async (t) => {
  const e = String(t.detail?.text ?? "").trim();
  if (!e) return;
  if (G === "live" && xe) {
    Fn({ message_type: "conversation", event_type: "conversation.respond", conversation_id: xe, properties: { text: e } });
    return;
  }
  const n = Su(e);
  if (!n) {
    it()?.resetFeed(), it()?.addFeedStep({ id: "budget", label: "Add a budget so I can build looks, e.g. “about $800”.", status: "blocked" });
    return;
  }
  const r = {
    message_type: "conversation",
    event_type: "conversation.tool_call",
    conversation_id: xe ?? `typed-${Date.now()}`,
    properties: {
      name: "style_outfit",
      arguments: { occasion: e, budget_usd: n, notes: "Typed brief, no video call." },
      tool_call_id: `typed_${++qu}`
    }
  }, i = await Nn.handle(r);
  i?.properties.status === "error" && it()?.addFeedStep({ id: "error", label: zu(String(i.properties.output)), status: "blocked" });
});
function zu(t) {
  const e = /"([^"]*(?:men|women)[^"]*\?)"/i.exec(t);
  return e ? `${e[1]} Add it to your brief and send again.` : /budget/i.test(t) ? "Add a budget so I can build looks, e.g. “about $800”." : /limit/i.test(t) ? "That's past the $10,000 limit for this visit." : /still being built/i.test(t) ? "Still building your looks. They'll appear here in a moment." : "I couldn't finish those looks just now. Please send your brief again.";
}
function is() {
  Gt(), window.Avatar = { router: Nn, start: sa, end: aa, log: Vt, backend: Pt, mode: Jr, caption: oa, rawUtterances: En, get captions() {
    return Ne;
  }, get state() {
    return G;
  } }, Wn.has("avatar_debug") && yu(Nn, Vt), console.log(`[avatar] ready: backend ${Pt}, style_outfit ${Jr}${ra ? ", instant presets ON" : ""}`);
}
document.readyState === "loading" ? addEventListener("DOMContentLoaded", is, { once: !0 }) : is();
export {
  zu as shopperError
};
