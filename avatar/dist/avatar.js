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
function Ho(t) {
  var e = (function(r, n) {
    if (R(r) != "object" || !r) return r;
    var o = r[Symbol.toPrimitive];
    if (o !== void 0) {
      var s = o.call(r, n);
      if (R(s) != "object") return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(r);
  })(t, "string");
  return R(e) == "symbol" ? e : e + "";
}
function Xn(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Ho(n.key), n);
  }
}
function fe(t, e, r) {
  return e && Xn(t.prototype, e), r && Xn(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function _r(t, e) {
  if (e && (R(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return (function(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
  })(t);
}
function ke(t) {
  return ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, ke(t);
}
function jt(t, e) {
  return jt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, jt(t, e);
}
function wr(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && jt(t, e);
}
function Ce(t, e, r) {
  return (e = Ho(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Zn(t, e, r, n, o, s, a) {
  try {
    var l = t[s](a), u = l.value;
  } catch (p) {
    return void r(p);
  }
  l.done ? e(u) : Promise.resolve(u).then(n, o);
}
function D(t) {
  return function() {
    var e = this, r = arguments;
    return new Promise(function(n, o) {
      var s = t.apply(e, r);
      function a(u) {
        Zn(s, n, o, a, l, "next", u);
      }
      function l(u) {
        Zn(s, n, o, a, l, "throw", u);
      }
      a(void 0);
    });
  };
}
function ir(t, e) {
  if (t == null) return {};
  var r, n, o = (function(a, l) {
    if (a == null) return {};
    var u = {};
    for (var p in a) if ({}.hasOwnProperty.call(a, p)) {
      if (l.indexOf(p) !== -1) continue;
      u[p] = a[p];
    }
    return u;
  })(t, e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (n = 0; n < s.length; n++) r = s[n], e.indexOf(r) === -1 && {}.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
  }
  return o;
}
function Yr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
function Go(t, e) {
  if (t) {
    if (typeof t == "string") return Yr(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Yr(t, e) : void 0;
  }
}
function Y(t, e) {
  return (function(r) {
    if (Array.isArray(r)) return r;
  })(t) || (function(r, n) {
    var o = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (o != null) {
      var s, a, l, u, p = [], m = !0, v = !1;
      try {
        if (l = (o = o.call(r)).next, n === 0) {
          if (Object(o) !== o) return;
          m = !1;
        } else for (; !(m = (s = l.call(o)).done) && (p.push(s.value), p.length !== n); m = !0) ;
      } catch (E) {
        v = !0, a = E;
      } finally {
        try {
          if (!m && o.return != null && (u = o.return(), Object(u) !== u)) return;
        } finally {
          if (v) throw a;
        }
      }
      return p;
    }
  })(t, e) || Go(t, e) || (function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function Gs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ei, Vt = { exports: {} }, Kr = (function() {
  if (ei) return Vt.exports;
  ei = 1;
  var t, e = typeof Reflect == "object" ? Reflect : null, r = e && typeof e.apply == "function" ? e.apply : function(g, w, _) {
    return Function.prototype.apply.call(g, w, _);
  };
  t = e && typeof e.ownKeys == "function" ? e.ownKeys : Object.getOwnPropertySymbols ? function(g) {
    return Object.getOwnPropertyNames(g).concat(Object.getOwnPropertySymbols(g));
  } : function(g) {
    return Object.getOwnPropertyNames(g);
  };
  var n = Number.isNaN || function(g) {
    return g != g;
  };
  function o() {
    o.init.call(this);
  }
  Vt.exports = o, Vt.exports.once = function(g, w) {
    return new Promise(function(_, C) {
      function O(A) {
        g.removeListener(w, j), C(A);
      }
      function j() {
        typeof g.removeListener == "function" && g.removeListener("error", O), _([].slice.call(arguments));
      }
      b(g, w, j, { once: !0 }), w !== "error" && (function(A, F, J) {
        typeof A.on == "function" && b(A, "error", F, J);
      })(g, O, { once: !0 });
    });
  }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
  var s = 10;
  function a(g) {
    if (typeof g != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof g);
  }
  function l(g) {
    return g._maxListeners === void 0 ? o.defaultMaxListeners : g._maxListeners;
  }
  function u(g, w, _, C) {
    var O, j, A, F;
    if (a(_), (j = g._events) === void 0 ? (j = g._events = /* @__PURE__ */ Object.create(null), g._eventsCount = 0) : (j.newListener !== void 0 && (g.emit("newListener", w, _.listener ? _.listener : _), j = g._events), A = j[w]), A === void 0) A = j[w] = _, ++g._eventsCount;
    else if (typeof A == "function" ? A = j[w] = C ? [_, A] : [A, _] : C ? A.unshift(_) : A.push(_), (O = l(g)) > 0 && A.length > O && !A.warned) {
      A.warned = !0;
      var J = new Error("Possible EventEmitter memory leak detected. " + A.length + " " + String(w) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      J.name = "MaxListenersExceededWarning", J.emitter = g, J.type = w, J.count = A.length, F = J, console && console.warn && console.warn(F);
    }
    return g;
  }
  function p() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function m(g, w, _) {
    var C = { fired: !1, wrapFn: void 0, target: g, type: w, listener: _ }, O = p.bind(C);
    return O.listener = _, C.wrapFn = O, O;
  }
  function v(g, w, _) {
    var C = g._events;
    if (C === void 0) return [];
    var O = C[w];
    return O === void 0 ? [] : typeof O == "function" ? _ ? [O.listener || O] : [O] : _ ? (function(j) {
      for (var A = new Array(j.length), F = 0; F < A.length; ++F) A[F] = j[F].listener || j[F];
      return A;
    })(O) : S(O, O.length);
  }
  function E(g) {
    var w = this._events;
    if (w !== void 0) {
      var _ = w[g];
      if (typeof _ == "function") return 1;
      if (_ !== void 0) return _.length;
    }
    return 0;
  }
  function S(g, w) {
    for (var _ = new Array(w), C = 0; C < w; ++C) _[C] = g[C];
    return _;
  }
  function b(g, w, _, C) {
    if (typeof g.on == "function") C.once ? g.once(w, _) : g.on(w, _);
    else {
      if (typeof g.addEventListener != "function") throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof g);
      g.addEventListener(w, function O(j) {
        C.once && g.removeEventListener(w, O), _(j);
      });
    }
  }
  return Object.defineProperty(o, "defaultMaxListeners", { enumerable: !0, get: function() {
    return s;
  }, set: function(g) {
    if (typeof g != "number" || g < 0 || n(g)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + g + ".");
    s = g;
  } }), o.init = function() {
    this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, o.prototype.setMaxListeners = function(g) {
    if (typeof g != "number" || g < 0 || n(g)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + g + ".");
    return this._maxListeners = g, this;
  }, o.prototype.getMaxListeners = function() {
    return l(this);
  }, o.prototype.emit = function(g) {
    for (var w = [], _ = 1; _ < arguments.length; _++) w.push(arguments[_]);
    var C = g === "error", O = this._events;
    if (O !== void 0) C = C && O.error === void 0;
    else if (!C) return !1;
    if (C) {
      var j;
      if (w.length > 0 && (j = w[0]), j instanceof Error) throw j;
      var A = new Error("Unhandled error." + (j ? " (" + j.message + ")" : ""));
      throw A.context = j, A;
    }
    var F = O[g];
    if (F === void 0) return !1;
    if (typeof F == "function") r(F, this, w);
    else {
      var J = F.length, te = S(F, J);
      for (_ = 0; _ < J; ++_) r(te[_], this, w);
    }
    return !0;
  }, o.prototype.addListener = function(g, w) {
    return u(this, g, w, !1);
  }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(g, w) {
    return u(this, g, w, !0);
  }, o.prototype.once = function(g, w) {
    return a(w), this.on(g, m(this, g, w)), this;
  }, o.prototype.prependOnceListener = function(g, w) {
    return a(w), this.prependListener(g, m(this, g, w)), this;
  }, o.prototype.removeListener = function(g, w) {
    var _, C, O, j, A;
    if (a(w), (C = this._events) === void 0) return this;
    if ((_ = C[g]) === void 0) return this;
    if (_ === w || _.listener === w) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete C[g], C.removeListener && this.emit("removeListener", g, _.listener || w));
    else if (typeof _ != "function") {
      for (O = -1, j = _.length - 1; j >= 0; j--) if (_[j] === w || _[j].listener === w) {
        A = _[j].listener, O = j;
        break;
      }
      if (O < 0) return this;
      O === 0 ? _.shift() : (function(F, J) {
        for (; J + 1 < F.length; J++) F[J] = F[J + 1];
        F.pop();
      })(_, O), _.length === 1 && (C[g] = _[0]), C.removeListener !== void 0 && this.emit("removeListener", g, A || w);
    }
    return this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(g) {
    var w, _, C;
    if ((_ = this._events) === void 0) return this;
    if (_.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : _[g] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete _[g]), this;
    if (arguments.length === 0) {
      var O, j = Object.keys(_);
      for (C = 0; C < j.length; ++C) (O = j[C]) !== "removeListener" && this.removeAllListeners(O);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (typeof (w = _[g]) == "function") this.removeListener(g, w);
    else if (w !== void 0) for (C = w.length - 1; C >= 0; C--) this.removeListener(g, w[C]);
    return this;
  }, o.prototype.listeners = function(g) {
    return v(this, g, !0);
  }, o.prototype.rawListeners = function(g) {
    return v(this, g, !1);
  }, o.listenerCount = function(g, w) {
    return typeof g.listenerCount == "function" ? g.listenerCount(w) : E.call(g, w);
  }, o.prototype.listenerCount = E, o.prototype.eventNames = function() {
    return this._eventsCount > 0 ? t(this._events) : [];
  }, Vt.exports;
})(), Jt = Gs(Kr), ti = Object.prototype.hasOwnProperty;
function ri(t, e, r) {
  for (r of t.keys()) if (se(r, e)) return r;
}
function se(t, e) {
  var r, n, o;
  if (t === e) return !0;
  if (t && e && (r = t.constructor) === e.constructor) {
    if (r === Date) return t.getTime() === e.getTime();
    if (r === RegExp) return t.toString() === e.toString();
    if (r === Array) {
      if ((n = t.length) === e.length) for (; n-- && se(t[n], e[n]); ) ;
      return n === -1;
    }
    if (r === Set) {
      if (t.size !== e.size) return !1;
      for (n of t)
        if ((o = n) && typeof o == "object" && !(o = ri(e, o)) || !e.has(o)) return !1;
      return !0;
    }
    if (r === Map) {
      if (t.size !== e.size) return !1;
      for (n of t)
        if ((o = n[0]) && typeof o == "object" && !(o = ri(e, o)) || !se(n[1], e.get(o))) return !1;
      return !0;
    }
    if (r === ArrayBuffer) t = new Uint8Array(t), e = new Uint8Array(e);
    else if (r === DataView) {
      if ((n = t.byteLength) === e.byteLength) for (; n-- && t.getInt8(n) === e.getInt8(n); ) ;
      return n === -1;
    }
    if (ArrayBuffer.isView(t)) {
      if ((n = t.byteLength) === e.byteLength) for (; n-- && t[n] === e[n]; ) ;
      return n === -1;
    }
    if (!r || typeof t == "object") {
      for (r in n = 0, t)
        if (ti.call(t, r) && ++n && !ti.call(e, r) || !(r in e) || !se(t[r], e[r])) return !1;
      return Object.keys(e).length === n;
    }
  }
  return t != t && e != e;
}
const Qs = { AmazonBot: "amazonbot", "Amazon Silk": "amazon_silk", "Android Browser": "android", BaiduSpider: "baiduspider", Bada: "bada", BingCrawler: "bingcrawler", Brave: "brave", BlackBerry: "blackberry", "ChatGPT-User": "chatgpt_user", Chrome: "chrome", ClaudeBot: "claudebot", Chromium: "chromium", Diffbot: "diffbot", DuckDuckBot: "duckduckbot", DuckDuckGo: "duckduckgo", Electron: "electron", Epiphany: "epiphany", FacebookExternalHit: "facebookexternalhit", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", GPTBot: "gptbot", "Internet Explorer": "ie", InternetArchiveCrawler: "internetarchivecrawler", "K-Meleon": "k_meleon", LibreWolf: "librewolf", Linespider: "linespider", Maxthon: "maxthon", "Meta-ExternalAds": "meta_externalads", "Meta-ExternalAgent": "meta_externalagent", "Meta-ExternalFetcher": "meta_externalfetcher", "Meta-WebIndexer": "meta_webindexer", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", "OAI-SearchBot": "oai_searchbot", Omgilibot: "omgilibot", Opera: "opera", "Opera Coast": "opera_coast", "Pale Moon": "pale_moon", PerplexityBot: "perplexitybot", "Perplexity-User": "perplexity_user", PhantomJS: "phantomjs", PingdomBot: "pingdombot", Puffin: "puffin", QQ: "qq", QQLite: "qqlite", QupZilla: "qupzilla", Roku: "roku", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SlackBot: "slackbot", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", "Sogou Browser": "sogou", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", YahooSlurp: "yahooslurp", "Yandex Browser": "yandex", YandexBot: "yandexbot", YouBot: "youbot" }, Qo = { amazonbot: "AmazonBot", amazon_silk: "Amazon Silk", android: "Android Browser", baiduspider: "BaiduSpider", bada: "Bada", bingcrawler: "BingCrawler", blackberry: "BlackBerry", brave: "Brave", chatgpt_user: "ChatGPT-User", chrome: "Chrome", claudebot: "ClaudeBot", chromium: "Chromium", diffbot: "Diffbot", duckduckbot: "DuckDuckBot", duckduckgo: "DuckDuckGo", edge: "Microsoft Edge", electron: "Electron", epiphany: "Epiphany", facebookexternalhit: "FacebookExternalHit", firefox: "Firefox", focus: "Focus", generic: "Generic", google_search: "Google Search", googlebot: "Googlebot", gptbot: "GPTBot", ie: "Internet Explorer", internetarchivecrawler: "InternetArchiveCrawler", k_meleon: "K-Meleon", librewolf: "LibreWolf", linespider: "Linespider", maxthon: "Maxthon", meta_externalads: "Meta-ExternalAds", meta_externalagent: "Meta-ExternalAgent", meta_externalfetcher: "Meta-ExternalFetcher", meta_webindexer: "Meta-WebIndexer", mz: "MZ Browser", naver: "NAVER Whale Browser", oai_searchbot: "OAI-SearchBot", omgilibot: "Omgilibot", opera: "Opera", opera_coast: "Opera Coast", pale_moon: "Pale Moon", perplexitybot: "PerplexityBot", perplexity_user: "Perplexity-User", phantomjs: "PhantomJS", pingdombot: "PingdomBot", puffin: "Puffin", qq: "QQ Browser", qqlite: "QQ Browser Lite", qupzilla: "QupZilla", roku: "Roku", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", slackbot: "SlackBot", sleipnir: "Sleipnir", sogou: "Sogou Browser", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yahooslurp: "YahooSlurp", yandex: "Yandex Browser", yandexbot: "YandexBot", youbot: "YouBot" }, I = { bot: "bot", desktop: "desktop", mobile: "mobile", tablet: "tablet", tv: "tv" }, re = { Android: "Android", Bada: "Bada", BlackBerry: "BlackBerry", ChromeOS: "Chrome OS", HarmonyOS: "HarmonyOS", iOS: "iOS", Linux: "Linux", MacOS: "macOS", PlayStation4: "PlayStation 4", Roku: "Roku", Tizen: "Tizen", WebOS: "WebOS", Windows: "Windows", WindowsPhone: "Windows Phone" }, Ne = { Blink: "Blink", EdgeHTML: "EdgeHTML", Gecko: "Gecko", Presto: "Presto", Trident: "Trident", WebKit: "WebKit" };
class y {
  static getFirstMatch(e, r) {
    const n = r.match(e);
    return n && n.length > 0 && n[1] || "";
  }
  static getSecondMatch(e, r) {
    const n = r.match(e);
    return n && n.length > 1 && n[2] || "";
  }
  static matchAndReturnConst(e, r, n) {
    if (e.test(r)) return n;
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
    const r = e.split(".").splice(0, 2).map((s) => parseInt(s, 10) || 0);
    r.push(0);
    const n = r[0], o = r[1];
    if (n === 10) switch (o) {
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
    switch (n) {
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
    const r = e.split(".").splice(0, 2).map((n) => parseInt(n, 10) || 0);
    if (r.push(0), !(r[0] === 1 && r[1] < 5)) return r[0] === 1 && r[1] < 6 ? "Cupcake" : r[0] === 1 && r[1] >= 6 ? "Donut" : r[0] === 2 && r[1] < 2 ? "Eclair" : r[0] === 2 && r[1] === 2 ? "Froyo" : r[0] === 2 && r[1] > 2 ? "Gingerbread" : r[0] === 3 ? "Honeycomb" : r[0] === 4 && r[1] < 1 ? "Ice Cream Sandwich" : r[0] === 4 && r[1] < 4 ? "Jelly Bean" : r[0] === 4 && r[1] >= 4 ? "KitKat" : r[0] === 5 ? "Lollipop" : r[0] === 6 ? "Marshmallow" : r[0] === 7 ? "Nougat" : r[0] === 8 ? "Oreo" : r[0] === 9 ? "Pie" : void 0;
  }
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  static compareVersions(e, r, n = !1) {
    const o = y.getVersionPrecision(e), s = y.getVersionPrecision(r);
    let a = Math.max(o, s), l = 0;
    const u = y.map([e, r], (p) => {
      const m = a - y.getVersionPrecision(p), v = p + new Array(m + 1).join(".0");
      return y.map(v.split("."), (E) => new Array(20 - E.length).join("0") + E).reverse();
    });
    for (n && (l = a - Math.min(o, s)), a -= 1; a >= l; ) {
      if (u[0][a] > u[1][a]) return 1;
      if (u[0][a] === u[1][a]) {
        if (a === l) return 0;
        a -= 1;
      } else if (u[0][a] < u[1][a]) return -1;
    }
  }
  static map(e, r) {
    const n = [];
    let o;
    if (Array.prototype.map) return Array.prototype.map.call(e, r);
    for (o = 0; o < e.length; o += 1) n.push(r(e[o]));
    return n;
  }
  static find(e, r) {
    let n, o;
    if (Array.prototype.find) return Array.prototype.find.call(e, r);
    for (n = 0, o = e.length; n < o; n += 1) {
      const s = e[n];
      if (r(s, n)) return s;
    }
  }
  static assign(e, ...r) {
    const n = e;
    let o, s;
    if (Object.assign) return Object.assign(e, ...r);
    for (o = 0, s = r.length; o < s; o += 1) {
      const a = r[o];
      typeof a == "object" && a !== null && Object.keys(a).forEach((l) => {
        n[l] = a[l];
      });
    }
    return e;
  }
  static getBrowserAlias(e) {
    return Qs[e];
  }
  static getBrowserTypeByAlias(e) {
    return Qo[e] || "";
  }
}
const L = /version\/(\d+(\.?_?\d+)+)/i, Ys = [{ test: [/gptbot/i], describe(t) {
  const e = { name: "GPTBot" }, r = y.getFirstMatch(/gptbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/chatgpt-user/i], describe(t) {
  const e = { name: "ChatGPT-User" }, r = y.getFirstMatch(/chatgpt-user\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/oai-searchbot/i], describe(t) {
  const e = { name: "OAI-SearchBot" }, r = y.getFirstMatch(/oai-searchbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe(t) {
  const e = { name: "ClaudeBot" }, r = y.getFirstMatch(/(?:claudebot|claude-web|claude-user|claude-searchbot)\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/omgilibot/i, /webzio-extended/i], describe(t) {
  const e = { name: "Omgilibot" }, r = y.getFirstMatch(/(?:omgilibot|webzio-extended)\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/diffbot/i], describe(t) {
  const e = { name: "Diffbot" }, r = y.getFirstMatch(/diffbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/perplexitybot/i], describe(t) {
  const e = { name: "PerplexityBot" }, r = y.getFirstMatch(/perplexitybot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/perplexity-user/i], describe(t) {
  const e = { name: "Perplexity-User" }, r = y.getFirstMatch(/perplexity-user\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/youbot/i], describe(t) {
  const e = { name: "YouBot" }, r = y.getFirstMatch(/youbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/meta-webindexer/i], describe(t) {
  const e = { name: "Meta-WebIndexer" }, r = y.getFirstMatch(/meta-webindexer\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/meta-externalads/i], describe(t) {
  const e = { name: "Meta-ExternalAds" }, r = y.getFirstMatch(/meta-externalads\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/meta-externalagent/i], describe(t) {
  const e = { name: "Meta-ExternalAgent" }, r = y.getFirstMatch(/meta-externalagent\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/meta-externalfetcher/i], describe(t) {
  const e = { name: "Meta-ExternalFetcher" }, r = y.getFirstMatch(/meta-externalfetcher\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/googlebot/i], describe(t) {
  const e = { name: "Googlebot" }, r = y.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/linespider/i], describe(t) {
  const e = { name: "Linespider" }, r = y.getFirstMatch(/(?:linespider)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/amazonbot/i], describe(t) {
  const e = { name: "AmazonBot" }, r = y.getFirstMatch(/amazonbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/bingbot/i], describe(t) {
  const e = { name: "BingCrawler" }, r = y.getFirstMatch(/bingbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/baiduspider/i], describe(t) {
  const e = { name: "BaiduSpider" }, r = y.getFirstMatch(/baiduspider\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/duckduckbot/i], describe(t) {
  const e = { name: "DuckDuckBot" }, r = y.getFirstMatch(/duckduckbot\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/ia_archiver/i], describe(t) {
  const e = { name: "InternetArchiveCrawler" }, r = y.getFirstMatch(/ia_archiver\/(\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: () => ({ name: "FacebookExternalHit" }) }, { test: [/slackbot/i, /slack-imgProxy/i], describe(t) {
  const e = { name: "SlackBot" }, r = y.getFirstMatch(/(?:slackbot|slack-imgproxy)(?:-[-\w]+)?[\s/](\d+(\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/yahoo!?[\s/]*slurp/i], describe: () => ({ name: "YahooSlurp" }) }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: () => ({ name: "YandexBot" }) }, { test: [/pingdom/i], describe: () => ({ name: "PingdomBot" }) }, { test: [/opera/i], describe(t) {
  const e = { name: "Opera" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/opr\/|opios/i], describe(t) {
  const e = { name: "Opera" }, r = y.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/SamsungBrowser/i], describe(t) {
  const e = { name: "Samsung Internet for Android" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/Whale/i], describe(t) {
  const e = { name: "NAVER Whale Browser" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/PaleMoon/i], describe(t) {
  const e = { name: "Pale Moon" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:PaleMoon)[\s/](\d+(?:\.\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/MZBrowser/i], describe(t) {
  const e = { name: "MZ Browser" }, r = y.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/focus/i], describe(t) {
  const e = { name: "Focus" }, r = y.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/swing/i], describe(t) {
  const e = { name: "Swing" }, r = y.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/coast/i], describe(t) {
  const e = { name: "Opera Coast" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(t) {
  const e = { name: "Opera Touch" }, r = y.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/yabrowser/i], describe(t) {
  const e = { name: "Yandex Browser" }, r = y.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/ucbrowser/i], describe(t) {
  const e = { name: "UC Browser" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/Maxthon|mxios/i], describe(t) {
  const e = { name: "Maxthon" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/epiphany/i], describe(t) {
  const e = { name: "Epiphany" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/puffin/i], describe(t) {
  const e = { name: "Puffin" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/sleipnir/i], describe(t) {
  const e = { name: "Sleipnir" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/k-meleon/i], describe(t) {
  const e = { name: "K-Meleon" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/micromessenger/i], describe(t) {
  const e = { name: "WeChat" }, r = y.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/qqbrowser/i], describe(t) {
  const e = { name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser" }, r = y.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/msie|trident/i], describe(t) {
  const e = { name: "Internet Explorer" }, r = y.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/\sedg\//i], describe(t) {
  const e = { name: "Microsoft Edge" }, r = y.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/edg([ea]|ios)/i], describe(t) {
  const e = { name: "Microsoft Edge" }, r = y.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/vivaldi/i], describe(t) {
  const e = { name: "Vivaldi" }, r = y.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/seamonkey/i], describe(t) {
  const e = { name: "SeaMonkey" }, r = y.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/sailfish/i], describe(t) {
  const e = { name: "Sailfish" }, r = y.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
  return r && (e.version = r), e;
} }, { test: [/silk/i], describe(t) {
  const e = { name: "Amazon Silk" }, r = y.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/phantom/i], describe(t) {
  const e = { name: "PhantomJS" }, r = y.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/slimerjs/i], describe(t) {
  const e = { name: "SlimerJS" }, r = y.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(t) {
  const e = { name: "BlackBerry" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/(web|hpw)[o0]s/i], describe(t) {
  const e = { name: "WebOS Browser" }, r = y.getFirstMatch(L, t) || y.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/bada/i], describe(t) {
  const e = { name: "Bada" }, r = y.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/tizen/i], describe(t) {
  const e = { name: "Tizen" }, r = y.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/qupzilla/i], describe(t) {
  const e = { name: "QupZilla" }, r = y.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/librewolf/i], describe(t) {
  const e = { name: "LibreWolf" }, r = y.getFirstMatch(/(?:librewolf)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/firefox|iceweasel|fxios/i], describe(t) {
  const e = { name: "Firefox" }, r = y.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/electron/i], describe(t) {
  const e = { name: "Electron" }, r = y.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/sogoumobilebrowser/i, /metasr/i, /se 2\.[x]/i], describe(t) {
  const e = { name: "Sogou Browser" }, r = y.getFirstMatch(/(?:sogoumobilebrowser)[\s/](\d+(\.?_?\d+)+)/i, t), n = y.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t), o = y.getFirstMatch(/se ([\d.]+)x/i, t), s = r || n || o;
  return s && (e.version = s), e;
} }, { test: [/MiuiBrowser/i], describe(t) {
  const e = { name: "Miui" }, r = y.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: (t) => !!t.hasBrand("DuckDuckGo") || t.test(/\sDdg\/[\d.]+$/i), describe(t, e) {
  const r = { name: "DuckDuckGo" };
  if (e) {
    const o = e.getBrandVersion("DuckDuckGo");
    if (o) return r.version = o, r;
  }
  const n = y.getFirstMatch(/\sDdg\/([\d.]+)$/i, t);
  return n && (r.version = n), r;
} }, { test: (t) => t.hasBrand("Brave"), describe(t, e) {
  const r = { name: "Brave" };
  if (e) {
    const n = e.getBrandVersion("Brave");
    if (n) return r.version = n, r;
  }
  return r;
} }, { test: [/chromium/i], describe(t) {
  const e = { name: "Chromium" }, r = y.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/chrome|crios|crmo/i], describe(t) {
  const e = { name: "Chrome" }, r = y.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/GSA/i], describe(t) {
  const e = { name: "Google Search" }, r = y.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test(t) {
  const e = !t.test(/like android/i), r = t.test(/android/i);
  return e && r;
}, describe(t) {
  const e = { name: "Android Browser" }, r = y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/playstation 4/i], describe(t) {
  const e = { name: "PlayStation 4" }, r = y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/safari|applewebkit/i], describe(t) {
  const e = { name: "Safari" }, r = y.getFirstMatch(L, t);
  return r && (e.version = r), e;
} }, { test: [/.*/i], describe(t) {
  const e = t.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
  return { name: y.getFirstMatch(e, t), version: y.getSecondMatch(e, t) };
} }];
var Ks = [{ test: [/Roku\/DVP/], describe(t) {
  const e = y.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
  return { name: re.Roku, version: e };
} }, { test: [/windows phone/i], describe(t) {
  const e = y.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
  return { name: re.WindowsPhone, version: e };
} }, { test: [/windows /i], describe(t) {
  const e = y.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t), r = y.getWindowsVersionName(e);
  return { name: re.Windows, version: e, versionName: r };
} }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(t) {
  const e = { name: re.iOS }, r = y.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
  return r && (e.version = r), e;
} }, { test: [/macintosh/i], describe(t) {
  const e = y.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."), r = y.getMacOSVersionName(e), n = { name: re.MacOS, version: e };
  return r && (n.versionName = r), n;
} }, { test: [/(ipod|iphone|ipad)/i], describe(t) {
  const e = y.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
  return { name: re.iOS, version: e };
} }, { test: [/OpenHarmony/i], describe(t) {
  const e = y.getFirstMatch(/OpenHarmony\s+(\d+(\.\d+)*)/i, t);
  return { name: re.HarmonyOS, version: e };
} }, { test(t) {
  const e = !t.test(/like android/i), r = t.test(/android/i);
  return e && r;
}, describe(t) {
  const e = y.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t), r = y.getAndroidVersionName(e), n = { name: re.Android, version: e };
  return r && (n.versionName = r), n;
} }, { test: [/(web|hpw)[o0]s/i], describe(t) {
  const e = y.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t), r = { name: re.WebOS };
  return e && e.length && (r.version = e), r;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(t) {
  const e = y.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || y.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || y.getFirstMatch(/\bbb(\d+)/i, t);
  return { name: re.BlackBerry, version: e };
} }, { test: [/bada/i], describe(t) {
  const e = y.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
  return { name: re.Bada, version: e };
} }, { test: [/tizen/i], describe(t) {
  const e = y.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
  return { name: re.Tizen, version: e };
} }, { test: [/linux/i], describe: () => ({ name: re.Linux }) }, { test: [/CrOS/], describe: () => ({ name: re.ChromeOS }) }, { test: [/PlayStation 4/], describe(t) {
  const e = y.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
  return { name: re.PlayStation4, version: e };
} }], Xs = [{ test: [/googlebot/i], describe: () => ({ type: I.bot, vendor: "Google" }) }, { test: [/linespider/i], describe: () => ({ type: I.bot, vendor: "Line" }) }, { test: [/amazonbot/i], describe: () => ({ type: I.bot, vendor: "Amazon" }) }, { test: [/gptbot/i], describe: () => ({ type: I.bot, vendor: "OpenAI" }) }, { test: [/chatgpt-user/i], describe: () => ({ type: I.bot, vendor: "OpenAI" }) }, { test: [/oai-searchbot/i], describe: () => ({ type: I.bot, vendor: "OpenAI" }) }, { test: [/baiduspider/i], describe: () => ({ type: I.bot, vendor: "Baidu" }) }, { test: [/bingbot/i], describe: () => ({ type: I.bot, vendor: "Bing" }) }, { test: [/duckduckbot/i], describe: () => ({ type: I.bot, vendor: "DuckDuckGo" }) }, { test: [/claudebot/i, /claude-web/i, /claude-user/i, /claude-searchbot/i], describe: () => ({ type: I.bot, vendor: "Anthropic" }) }, { test: [/omgilibot/i, /webzio-extended/i], describe: () => ({ type: I.bot, vendor: "Webz.io" }) }, { test: [/diffbot/i], describe: () => ({ type: I.bot, vendor: "Diffbot" }) }, { test: [/perplexitybot/i], describe: () => ({ type: I.bot, vendor: "Perplexity AI" }) }, { test: [/perplexity-user/i], describe: () => ({ type: I.bot, vendor: "Perplexity AI" }) }, { test: [/youbot/i], describe: () => ({ type: I.bot, vendor: "You.com" }) }, { test: [/ia_archiver/i], describe: () => ({ type: I.bot, vendor: "Internet Archive" }) }, { test: [/meta-webindexer/i], describe: () => ({ type: I.bot, vendor: "Meta" }) }, { test: [/meta-externalads/i], describe: () => ({ type: I.bot, vendor: "Meta" }) }, { test: [/meta-externalagent/i], describe: () => ({ type: I.bot, vendor: "Meta" }) }, { test: [/meta-externalfetcher/i], describe: () => ({ type: I.bot, vendor: "Meta" }) }, { test: [/facebookexternalhit/i, /facebookcatalog/i], describe: () => ({ type: I.bot, vendor: "Meta" }) }, { test: [/slackbot/i, /slack-imgProxy/i], describe: () => ({ type: I.bot, vendor: "Slack" }) }, { test: [/yahoo/i], describe: () => ({ type: I.bot, vendor: "Yahoo" }) }, { test: [/yandexbot/i, /yandexmobilebot/i], describe: () => ({ type: I.bot, vendor: "Yandex" }) }, { test: [/pingdom/i], describe: () => ({ type: I.bot, vendor: "Pingdom" }) }, { test: [/huawei/i], describe(t) {
  const e = y.getFirstMatch(/(can-l01)/i, t) && "Nova", r = { type: I.mobile, vendor: "Huawei" };
  return e && (r.model = e), r;
} }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: I.tablet, vendor: "Nexus" }) }, { test: [/ipad/i], describe: () => ({ type: I.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: I.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/kftt build/i], describe: () => ({ type: I.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) }, { test: [/silk/i], describe: () => ({ type: I.tablet, vendor: "Amazon" }) }, { test: [/tablet(?! pc)/i], describe: () => ({ type: I.tablet }) }, { test(t) {
  const e = t.test(/ipod|iphone/i), r = t.test(/like (ipod|iphone)/i);
  return e && !r;
}, describe(t) {
  const e = y.getFirstMatch(/(ipod|iphone)/i, t);
  return { type: I.mobile, vendor: "Apple", model: e };
} }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: I.mobile, vendor: "Nexus" }) }, { test: [/Nokia/i], describe(t) {
  const e = y.getFirstMatch(/Nokia\s+([0-9]+(\.[0-9]+)?)/i, t), r = { type: I.mobile, vendor: "Nokia" };
  return e && (r.model = e), r;
} }, { test: [/[^-]mobi/i], describe: () => ({ type: I.mobile }) }, { test: (t) => t.getBrowserName(!0) === "blackberry", describe: () => ({ type: I.mobile, vendor: "BlackBerry" }) }, { test: (t) => t.getBrowserName(!0) === "bada", describe: () => ({ type: I.mobile }) }, { test: (t) => t.getBrowserName() === "windows phone", describe: () => ({ type: I.mobile, vendor: "Microsoft" }) }, { test(t) {
  const e = Number(String(t.getOSVersion()).split(".")[0]);
  return t.getOSName(!0) === "android" && e >= 3;
}, describe: () => ({ type: I.tablet }) }, { test: (t) => t.getOSName(!0) === "android", describe: () => ({ type: I.mobile }) }, { test: [/smart-?tv|smarttv/i], describe: () => ({ type: I.tv }) }, { test: [/netcast/i], describe: () => ({ type: I.tv }) }, { test: (t) => t.getOSName(!0) === "macos", describe: () => ({ type: I.desktop, vendor: "Apple" }) }, { test: (t) => t.getOSName(!0) === "windows", describe: () => ({ type: I.desktop }) }, { test: (t) => t.getOSName(!0) === "linux", describe: () => ({ type: I.desktop }) }, { test: (t) => t.getOSName(!0) === "playstation 4", describe: () => ({ type: I.tv }) }, { test: (t) => t.getOSName(!0) === "roku", describe: () => ({ type: I.tv }) }], Zs = [{ test: (t) => t.getBrowserName(!0) === "microsoft edge", describe(t) {
  if (/\sedg\//i.test(t)) return { name: Ne.Blink };
  const e = y.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
  return { name: Ne.EdgeHTML, version: e };
} }, { test: [/trident/i], describe(t) {
  const e = { name: Ne.Trident }, r = y.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: (t) => t.test(/presto/i), describe(t) {
  const e = { name: Ne.Presto }, r = y.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test(t) {
  const e = t.test(/gecko/i), r = t.test(/like gecko/i);
  return e && !r;
}, describe(t) {
  const e = { name: Ne.Gecko }, r = y.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }, { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: Ne.Blink }) }, { test: [/(apple)?webkit/i], describe(t) {
  const e = { name: Ne.WebKit }, r = y.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
  return r && (e.version = r), e;
} }];
class ni {
  constructor(e, r = !1, n = null) {
    if (e == null || e === "") throw new Error("UserAgent parameter can't be empty");
    this._ua = e;
    let o = !1;
    typeof r == "boolean" ? (o = r, this._hints = n) : this._hints = r != null && typeof r == "object" ? r : null, this.parsedResult = {}, o !== !0 && this.parse();
  }
  getHints() {
    return this._hints;
  }
  hasBrand(e) {
    if (!this._hints || !Array.isArray(this._hints.brands)) return !1;
    const r = e.toLowerCase();
    return this._hints.brands.some((n) => n.brand && n.brand.toLowerCase() === r);
  }
  getBrandVersion(e) {
    if (!this._hints || !Array.isArray(this._hints.brands)) return;
    const r = e.toLowerCase(), n = this._hints.brands.find((o) => o.brand && o.brand.toLowerCase() === r);
    return n ? n.version : void 0;
  }
  getUA() {
    return this._ua;
  }
  test(e) {
    return e.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = y.find(Ys, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (Array.isArray(r.test)) return r.test.some((n) => this.test(n));
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
    const e = y.find(Ks, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (Array.isArray(r.test)) return r.test.some((n) => this.test(n));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
  }
  getOSName(e) {
    const { name: r } = this.getOS();
    return e ? String(r).toLowerCase() || "" : r || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  getPlatformType(e = !1) {
    const { type: r } = this.getPlatform();
    return e ? String(r).toLowerCase() || "" : r || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = y.find(Xs, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (Array.isArray(r.test)) return r.test.some((n) => this.test(n));
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
    const e = y.find(Zs, (r) => {
      if (typeof r.test == "function") return r.test(this);
      if (Array.isArray(r.test)) return r.test.some((n) => this.test(n));
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
    const r = {};
    let n = 0;
    const o = {};
    let s = 0;
    if (Object.keys(e).forEach((a) => {
      const l = e[a];
      typeof l == "string" ? (o[a] = l, s += 1) : typeof l == "object" && (r[a] = l, n += 1);
    }), n > 0) {
      const a = Object.keys(r), l = y.find(a, (p) => this.isOS(p));
      if (l) {
        const p = this.satisfies(r[l]);
        if (p !== void 0) return p;
      }
      const u = y.find(a, (p) => this.isPlatform(p));
      if (u) {
        const p = this.satisfies(r[u]);
        if (p !== void 0) return p;
      }
    }
    if (s > 0) {
      const a = Object.keys(o), l = y.find(a, (u) => this.isBrowser(u, !0));
      if (l !== void 0) return this.compareVersion(o[l]);
    }
  }
  isBrowser(e, r = !1) {
    const n = this.getBrowserName().toLowerCase();
    let o = e.toLowerCase();
    const s = y.getBrowserTypeByAlias(o);
    return r && s && (o = s.toLowerCase()), o === n;
  }
  compareVersion(e) {
    let r = [0], n = e, o = !1;
    const s = this.getBrowserVersion();
    if (typeof s == "string") return e[0] === ">" || e[0] === "<" ? (n = e.substr(1), e[1] === "=" ? (o = !0, n = e.substr(2)) : r = [], e[0] === ">" ? r.push(1) : r.push(-1)) : e[0] === "=" ? n = e.substr(1) : e[0] === "~" && (o = !0, n = e.substr(1)), r.indexOf(y.compareVersions(s, n, o)) > -1;
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
  is(e, r = !1) {
    return this.isBrowser(e, r) || this.isOS(e) || this.isPlatform(e);
  }
  some(e = []) {
    return e.some((r) => this.is(r));
  }
}
class ea {
  static getParser(e, r = !1, n = null) {
    if (typeof e != "string") throw new Error("UserAgent should be a string");
    return new ni(e, r, n);
  }
  static parse(e, r = null) {
    return new ni(e, r).getResult();
  }
  static get BROWSER_MAP() {
    return Qo;
  }
  static get ENGINE_MAP() {
    return Ne;
  }
  static get OS_MAP() {
    return re;
  }
  static get PLATFORMS_MAP() {
    return I;
  }
}
function Yo(t) {
  return (function(e) {
    if (Array.isArray(e)) return Yr(e);
  })(t) || (function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  })(t) || Go(t) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function kr() {
  return Date.now() + Math.random().toString();
}
function St() {
  throw new Error("Method must be implemented in subclass");
}
var ie = ["daily.co", "dailywebrtc.com", "dailywebrtc.net"], ge = null;
function ta() {
  return ge;
}
function Ko(t) {
  (t === null || ie.includes(t)) && (ge = t);
}
function En(t) {
  try {
    var e = new URL(t).hostname;
    return ie.find(function(r) {
      return e === r || e.endsWith(".".concat(r));
    }) || null;
  } catch {
    return null;
  }
}
function Xo(t, e) {
  return e != null && e.proxyUrl ? e.proxyUrl + (e.proxyUrl.slice(-1) === "/" ? "" : "/") + t.substring(8) : t;
}
function Or(t, e) {
  var r = ie.find(function(n) {
    return t.includes(n);
  });
  return r ? t.replace(r, e) : t;
}
function ur(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ge ?? ie[0];
  if (t != null && t.callObjectBundleUrlOverride) return console.warn("The callObjectBundleUrlOverride property is deprecated and will be removed. Please use bundlePathOverride instead. When providing a bundlePathOverride, the URL should point to the directory containing all Daily bundles (call-machine-object-bundle.js and audio-processor-bundle.js)."), Or(t.callObjectBundleUrlOverride, e);
  var r = (function(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ge ?? ie[0];
    if (o && o.trim() !== "" || (o = ge ?? ie[0]), n != null && n.bundlePathOverride) {
      var s = Or(n.bundlePathOverride, o);
      return s.endsWith("/") ? s.slice(0, -1) : s;
    }
    if (n != null && n.callObjectBundleUrlOverride) {
      var a = Or(n.callObjectBundleUrlOverride, o), l = a.substring(0, a.lastIndexOf("/"));
      return l.endsWith("/") ? l.slice(0, -1) : l;
    }
    var u = Xo("https://c.".concat(o, "/call-machine/versioned/", "0.94.0", "/static"), n);
    return u.endsWith("/") ? u.slice(0, -1) : u;
  })(t, e) + "/call-machine-object-bundle.js";
  return r;
}
function Zo(t) {
  var e = t?.bundlePathOverride || t?.callObjectBundleUrlOverride;
  return !(!e || ie.some(function(r) {
    return e.includes(r);
  })) || !!(t?.proxyUrl || (function() {
    try {
      return typeof localStorage < "u" && localStorage.getItem("daily:disable-base-domain-fallback") === "1";
    } catch {
      return !1;
    }
  })());
}
function es(t) {
  try {
    var e, r = t ?? window.location.hostname;
    return (e = ie.find(function(n) {
      return r === n || r.endsWith(".".concat(n));
    })) !== null && e !== void 0 ? e : null;
  } catch {
    return null;
  }
}
function ra(t, e) {
  var r, n = En(t);
  if (!n || Zo(e)) return [t];
  var o = (r = ge ?? es()) !== null && r !== void 0 ? r : ie[0];
  return (o === ie[0] ? ie : [o].concat(Yo(ie.filter(function(s) {
    return s !== o;
  })))).map(function(s) {
    return s === n ? t : (function(a, l, u) {
      try {
        var p = new URL(a);
        return p.hostname.endsWith(".".concat(l)) ? p.hostname = p.hostname.slice(0, -l.length) + u : p.hostname === l && (p.hostname = u), p.toString();
      } catch {
        return a;
      }
    })(t, n, s);
  });
}
function dr(t) {
  try {
    new URL(t);
  } catch {
    return !1;
  }
  return !0;
}
const W = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Ye = "8.55.2", q = globalThis;
function pr(t, e, r) {
  const n = q, o = n.__SENTRY__ = n.__SENTRY__ || {}, s = o[Ye] = o[Ye] || {};
  return s[t] || (s[t] = e());
}
const it = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Xr = ["debug", "info", "warn", "error", "log", "assert", "trace"], hr = {};
function Lt(t) {
  if (!("console" in q)) return t();
  const e = q.console, r = {}, n = Object.keys(hr);
  n.forEach((o) => {
    const s = hr[o];
    r[o] = e[o], e[o] = s;
  });
  try {
    return t();
  } finally {
    n.forEach((o) => {
      e[o] = r[o];
    });
  }
}
const N = pr("logger", function() {
  let t = !1;
  const e = { enable: () => {
    t = !0;
  }, disable: () => {
    t = !1;
  }, isEnabled: () => t };
  return it ? Xr.forEach((r) => {
    e[r] = (...n) => {
      t && Lt(() => {
        q.console[r](`Sentry Logger [${r}]:`, ...n);
      });
    };
  }) : Xr.forEach((r) => {
    e[r] = () => {
    };
  }), e;
}), Qe = "?", ii = /\(error: (.*)\)/, oi = /captureMessage|captureException/;
function qt(t) {
  return t[t.length - 1] || {};
}
const si = "<anonymous>";
function Re(t) {
  try {
    return t && typeof t == "function" && t.name || si;
  } catch {
    return si;
  }
}
function ai(t) {
  const e = t.exception;
  if (e) {
    const r = [];
    try {
      return e.values.forEach((n) => {
        n.stacktrace.frames && r.push(...n.stacktrace.frames);
      }), r;
    } catch {
      return;
    }
  }
}
const or = {}, ci = {};
function Ke(t, e) {
  or[t] = or[t] || [], or[t].push(e);
}
function Xe(t, e) {
  if (!ci[t]) {
    ci[t] = !0;
    try {
      e();
    } catch (r) {
      it && N.error(`Error while instrumenting ${t}`, r);
    }
  }
}
function we(t, e) {
  const r = t && or[t];
  if (r) for (const n of r) try {
    n(e);
  } catch (o) {
    it && N.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Re(n)}
Error:`, o);
  }
}
let Pr = null;
function na() {
  Pr = q.onerror, q.onerror = function(t, e, r, n, o) {
    return we("error", { column: n, error: o, line: r, msg: t, url: e }), !!Pr && Pr.apply(this, arguments);
  }, q.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let Ar = null;
function ia() {
  Ar = q.onunhandledrejection, q.onunhandledrejection = function(t) {
    return we("unhandledrejection", t), !Ar || Ar.apply(this, arguments);
  }, q.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
function Sr() {
  return Cn(q), q;
}
function Cn(t) {
  const e = t.__SENTRY__ = t.__SENTRY__ || {};
  return e.version = e.version || Ye, e[Ye] = e[Ye] || {};
}
const ts = Object.prototype.toString;
function Tn(t) {
  switch (ts.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return et(t, Error);
  }
}
function wt(t, e) {
  return ts.call(t) === `[object ${e}]`;
}
function rs(t) {
  return wt(t, "ErrorEvent");
}
function li(t) {
  return wt(t, "DOMError");
}
function Pe(t) {
  return wt(t, "String");
}
function On(t) {
  return typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
}
function Zr(t) {
  return t === null || On(t) || typeof t != "object" && typeof t != "function";
}
function gt(t) {
  return wt(t, "Object");
}
function Mr(t) {
  return typeof Event < "u" && et(t, Event);
}
function Er(t) {
  return !!(t && t.then && typeof t.then == "function");
}
function et(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function ns(t) {
  return !(typeof t != "object" || t === null || !t.__isVue && !t._isVue);
}
const Pn = q;
function is(t, e = {}) {
  if (!t) return "<unknown>";
  try {
    let r = t;
    const n = 5, o = [];
    let s = 0, a = 0;
    const l = " > ", u = l.length;
    let p;
    const m = Array.isArray(e) ? e : e.keyAttrs, v = !Array.isArray(e) && e.maxStringLength || 80;
    for (; r && s++ < n && (p = oa(r, m), !(p === "html" || s > 1 && a + o.length * u + p.length >= v)); ) o.push(p), a += p.length, r = r.parentNode;
    return o.reverse().join(l);
  } catch {
    return "<unknown>";
  }
}
function oa(t, e) {
  const r = t, n = [];
  if (!r || !r.tagName) return "";
  if (Pn.HTMLElement && r instanceof HTMLElement && r.dataset) {
    if (r.dataset.sentryComponent) return r.dataset.sentryComponent;
    if (r.dataset.sentryElement) return r.dataset.sentryElement;
  }
  n.push(r.tagName.toLowerCase());
  const o = e && e.length ? e.filter((a) => r.getAttribute(a)).map((a) => [a, r.getAttribute(a)]) : null;
  if (o && o.length) o.forEach((a) => {
    n.push(`[${a[0]}="${a[1]}"]`);
  });
  else {
    r.id && n.push(`#${r.id}`);
    const a = r.className;
    if (a && Pe(a)) {
      const l = a.split(/\s+/);
      for (const u of l) n.push(`.${u}`);
    }
  }
  const s = ["aria-label", "type", "name", "title", "alt"];
  for (const a of s) {
    const l = r.getAttribute(a);
    l && n.push(`[${a}="${l}"]`);
  }
  return n.join("");
}
function pt(t, e = 0) {
  return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`;
}
function ui(t, e) {
  if (!Array.isArray(t)) return "";
  const r = [];
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    try {
      ns(o) ? r.push("[VueViewModel]") : r.push(String(o));
    } catch {
      r.push("[value cannot be serialized]");
    }
  }
  return r.join(e);
}
function sa(t, e, r = !1) {
  return !!Pe(t) && (wt(e, "RegExp") ? e.test(t) : !!Pe(e) && (r ? t === e : t.includes(e)));
}
function zt(t, e = [], r = !1) {
  return e.some((n) => sa(t, n, r));
}
function pe(t, e, r) {
  if (!(e in t)) return;
  const n = t[e], o = r(n);
  typeof o == "function" && os(o, n);
  try {
    t[e] = o;
  } catch {
    it && N.log(`Failed to replace method "${e}" in object`, t);
  }
}
function tt(t, e, r) {
  try {
    Object.defineProperty(t, e, { value: r, writable: !0, configurable: !0 });
  } catch {
    it && N.log(`Failed to add non-enumerable property "${e}" to object`, t);
  }
}
function os(t, e) {
  try {
    const r = e.prototype || {};
    t.prototype = e.prototype = r, tt(t, "__sentry_original__", e);
  } catch {
  }
}
function An(t) {
  return t.__sentry_original__;
}
function ss(t) {
  if (Tn(t)) return { message: t.message, name: t.name, stack: t.stack, ...pi(t) };
  if (Mr(t)) {
    const e = { type: t.type, target: di(t.target), currentTarget: di(t.currentTarget), ...pi(t) };
    return typeof CustomEvent < "u" && et(t, CustomEvent) && (e.detail = t.detail), e;
  }
  return t;
}
function di(t) {
  try {
    return e = t, typeof Element < "u" && et(e, Element) ? is(t) : Object.prototype.toString.call(t);
  } catch {
    return "<unknown>";
  }
  var e;
}
function pi(t) {
  if (typeof t == "object" && t !== null) {
    const e = {};
    for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e;
  }
  return {};
}
function ve(t) {
  return en(t, /* @__PURE__ */ new Map());
}
function en(t, e) {
  if ((function(r) {
    if (!gt(r)) return !1;
    try {
      const n = Object.getPrototypeOf(r).constructor.name;
      return !n || n === "Object";
    } catch {
      return !0;
    }
  })(t)) {
    const r = e.get(t);
    if (r !== void 0) return r;
    const n = {};
    e.set(t, n);
    for (const o of Object.getOwnPropertyNames(t)) t[o] !== void 0 && (n[o] = en(t[o], e));
    return n;
  }
  if (Array.isArray(t)) {
    const r = e.get(t);
    if (r !== void 0) return r;
    const n = [];
    return e.set(t, n), t.forEach((o) => {
      n.push(en(o, e));
    }), n;
  }
  return t;
}
function Dt() {
  return Date.now() / 1e3;
}
const xe = (function() {
  const { performance: t } = q;
  if (!t || !t.now) return Dt;
  const e = Date.now() - t.now(), r = t.timeOrigin == null ? e : t.timeOrigin;
  return () => (r + t.now()) / 1e3;
})();
function ye() {
  const t = q, e = t.crypto || t.msCrypto;
  let r = () => 16 * Math.random();
  try {
    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
    e && e.getRandomValues && (r = () => {
      const n = new Uint8Array(1);
      return e.getRandomValues(n), n[0];
    });
  } catch {
  }
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (n) => (n ^ (15 & r()) >> n / 4).toString(16));
}
function as(t) {
  return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}
function Fe(t) {
  const { message: e, event_id: r } = t;
  if (e) return e;
  const n = as(t);
  return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>";
}
function tn(t, e, r) {
  const n = t.exception = t.exception || {}, o = n.values = n.values || [], s = o[0] = o[0] || {};
  s.value || (s.value = e || ""), s.type || (s.type = "Error");
}
function mt(t, e) {
  const r = as(t);
  if (!r) return;
  const n = r.mechanism;
  if (r.mechanism = { type: "generic", handled: !0, ...n, ...e }, e && "data" in e) {
    const o = { ...n && n.data, ...e.data };
    r.mechanism.data = o;
  }
}
function hi(t) {
  if ((function(e) {
    try {
      return e.__sentry_captured__;
    } catch {
    }
  })(t)) return !0;
  try {
    tt(t, "__sentry_captured__", !0);
  } catch {
  }
  return !1;
}
var Te;
function rt(t) {
  return new me((e) => {
    e(t);
  });
}
function fr(t) {
  return new me((e, r) => {
    r(t);
  });
}
(() => {
  const { performance: t } = q;
  !t || !t.now || (t.now(), t.timing && t.timing.navigationStart);
})(), (function(t) {
  t[t.PENDING = 0] = "PENDING", t[t.RESOLVED = 1] = "RESOLVED", t[t.REJECTED = 2] = "REJECTED";
})(Te || (Te = {}));
class me {
  constructor(e) {
    me.prototype.__init.call(this), me.prototype.__init2.call(this), me.prototype.__init3.call(this), me.prototype.__init4.call(this), this._state = Te.PENDING, this._handlers = [];
    try {
      e(this._resolve, this._reject);
    } catch (r) {
      this._reject(r);
    }
  }
  then(e, r) {
    return new me((n, o) => {
      this._handlers.push([!1, (s) => {
        if (e) try {
          n(e(s));
        } catch (a) {
          o(a);
        }
        else n(s);
      }, (s) => {
        if (r) try {
          n(r(s));
        } catch (a) {
          o(a);
        }
        else o(s);
      }]), this._executeHandlers();
    });
  }
  catch(e) {
    return this.then((r) => r, e);
  }
  finally(e) {
    return new me((r, n) => {
      let o, s;
      return this.then((a) => {
        s = !1, o = a, e && e();
      }, (a) => {
        s = !0, o = a, e && e();
      }).then(() => {
        s ? n(o) : r(o);
      });
    });
  }
  __init() {
    this._resolve = (e) => {
      this._setResult(Te.RESOLVED, e);
    };
  }
  __init2() {
    this._reject = (e) => {
      this._setResult(Te.REJECTED, e);
    };
  }
  __init3() {
    this._setResult = (e, r) => {
      this._state === Te.PENDING && (Er(r) ? r.then(this._resolve, this._reject) : (this._state = e, this._value = r, this._executeHandlers()));
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Te.PENDING) return;
      const e = this._handlers.slice();
      this._handlers = [], e.forEach((r) => {
        r[0] || (this._state === Te.RESOLVED && r[1](this._value), this._state === Te.REJECTED && r[2](this._value), r[0] = !0);
      });
    };
  }
}
function aa(t) {
  const e = xe(), r = { sid: ye(), init: !0, timestamp: e, started: e, duration: 0, status: "ok", errors: 0, ignoreDuration: !1, toJSON: () => (function(n) {
    return ve({ sid: `${n.sid}`, init: n.init, started: new Date(1e3 * n.started).toISOString(), timestamp: new Date(1e3 * n.timestamp).toISOString(), status: n.status, errors: n.errors, did: typeof n.did == "number" || typeof n.did == "string" ? `${n.did}` : void 0, duration: n.duration, abnormal_mechanism: n.abnormal_mechanism, attrs: { release: n.release, environment: n.environment, ip_address: n.ipAddress, user_agent: n.userAgent } });
  })(r) };
  return t && vt(r, t), r;
}
function vt(t, e = {}) {
  if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || xe(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : ye()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
  else if (typeof e.duration == "number") t.duration = e.duration;
  else {
    const r = t.timestamp - t.started;
    t.duration = r >= 0 ? r : 0;
  }
  e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status);
}
function fi() {
  return ye();
}
function rn() {
  return ye().substring(16);
}
function Cr(t, e, r = 2) {
  if (!e || typeof e != "object" || r <= 0) return e;
  if (t && e && Object.keys(e).length === 0) return t;
  const n = { ...t };
  for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = Cr(n[o], e[o], r - 1));
  return n;
}
const nn = "_sentrySpan";
function gi(t, e) {
  e ? tt(t, nn, e) : delete t[nn];
}
function mi(t) {
  return t[nn];
}
class xn {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = { traceId: fi(), spanId: rn() };
  }
  clone() {
    const e = new xn();
    return e._breadcrumbs = [...this._breadcrumbs], e._tags = { ...this._tags }, e._extra = { ...this._extra }, e._contexts = { ...this._contexts }, this._contexts.flags && (e._contexts.flags = { values: [...this._contexts.flags.values] }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, e._propagationContext = { ...this._propagationContext }, e._client = this._client, e._lastEventId = this._lastEventId, gi(e, mi(this)), e;
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
    return this._user = e || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && vt(this._session, { user: e }), this._notifyScopeListeners(), this;
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
  setTag(e, r) {
    return this._tags = { ...this._tags, [e]: r }, this._notifyScopeListeners(), this;
  }
  setExtras(e) {
    return this._extra = { ...this._extra, ...e }, this._notifyScopeListeners(), this;
  }
  setExtra(e, r) {
    return this._extra = { ...this._extra, [e]: r }, this._notifyScopeListeners(), this;
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
  setContext(e, r) {
    return r === null ? delete this._contexts[e] : this._contexts[e] = r, this._notifyScopeListeners(), this;
  }
  setSession(e) {
    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) return this;
    const r = typeof e == "function" ? e(this) : e, [n, o] = r instanceof Ue ? [r.getScopeData(), r.getRequestSession()] : gt(r) ? [e, e.requestSession] : [], { tags: s, extra: a, user: l, contexts: u, level: p, fingerprint: m = [], propagationContext: v } = n || {};
    return this._tags = { ...this._tags, ...s }, this._extra = { ...this._extra, ...a }, this._contexts = { ...this._contexts, ...u }, l && Object.keys(l).length && (this._user = l), p && (this._level = p), m.length && (this._fingerprint = m), v && (this._propagationContext = v), o && (this._requestSession = o), this;
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, gi(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: fi() }), this._notifyScopeListeners(), this;
  }
  addBreadcrumb(e, r) {
    const n = typeof r == "number" ? r : 100;
    if (n <= 0) return this;
    const o = { timestamp: Dt(), ...e };
    return this._breadcrumbs.push(o), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
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
    return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: mi(this) };
  }
  setSDKProcessingMetadata(e) {
    return this._sdkProcessingMetadata = Cr(this._sdkProcessingMetadata, e, 2), this;
  }
  setPropagationContext(e) {
    return this._propagationContext = { spanId: rn(), ...e }, this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, r) {
    const n = r && r.event_id ? r.event_id : ye();
    if (!this._client) return N.warn("No client configured on scope - will not capture exception!"), n;
    const o = new Error("Sentry syntheticException");
    return this._client.captureException(e, { originalException: e, syntheticException: o, ...r, event_id: n }, this), n;
  }
  captureMessage(e, r, n) {
    const o = n && n.event_id ? n.event_id : ye();
    if (!this._client) return N.warn("No client configured on scope - will not capture message!"), o;
    const s = new Error(e);
    return this._client.captureMessage(e, r, { originalException: e, syntheticException: s, ...n, event_id: o }, this), o;
  }
  captureEvent(e, r) {
    const n = r && r.event_id ? r.event_id : ye();
    return this._client ? (this._client.captureEvent(e, { ...r, event_id: n }, this), n) : (N.warn("No client configured on scope - will not capture event!"), n);
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e) => {
      e(this);
    }), this._notifyingListeners = !1);
  }
}
const Ue = xn;
class ca {
  constructor(e, r) {
    let n, o;
    n = e || new Ue(), o = r || new Ue(), this._stack = [{ scope: n }], this._isolationScope = o;
  }
  withScope(e) {
    const r = this._pushScope();
    let n;
    try {
      n = e(r);
    } catch (o) {
      throw this._popScope(), o;
    }
    return Er(n) ? n.then((o) => (this._popScope(), o), (o) => {
      throw this._popScope(), o;
    }) : (this._popScope(), n);
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
function yt() {
  const t = Cn(Sr());
  return t.stack = t.stack || new ca(pr("defaultCurrentScope", () => new Ue()), pr("defaultIsolationScope", () => new Ue()));
}
function la(t) {
  return yt().withScope(t);
}
function ua(t, e) {
  const r = yt();
  return r.withScope(() => (r.getStackTop().scope = t, e(t)));
}
function vi(t) {
  return yt().withScope(() => t(yt().getIsolationScope()));
}
function jn(t) {
  const e = Cn(t);
  return e.acs ? e.acs : { withIsolationScope: vi, withScope: la, withSetScope: ua, withSetIsolationScope: (r, n) => vi(n), getCurrentScope: () => yt().getScope(), getIsolationScope: () => yt().getIsolationScope() };
}
function ot() {
  return jn(Sr()).getCurrentScope();
}
function Nt() {
  return jn(Sr()).getIsolationScope();
}
function ne() {
  return ot().getClient();
}
function da(t) {
  const e = t.getPropagationContext(), { traceId: r, spanId: n, parentSpanId: o } = e;
  return ve({ trace_id: r, span_id: n, parent_span_id: o });
}
function pa(t) {
  const e = t._sentryMetrics;
  if (!e) return;
  const r = {};
  for (const [, [n, o]] of e)
    (r[n] || (r[n] = [])).push(ve(o));
  return r;
}
const ha = /^sentry-/;
function fa(t) {
  const e = (function(n) {
    if (!(!n || !Pe(n) && !Array.isArray(n)))
      return Array.isArray(n) ? n.reduce((o, s) => {
        const a = yi(s);
        return Object.entries(a).forEach(([l, u]) => {
          o[l] = u;
        }), o;
      }, {}) : yi(n);
  })(t);
  if (!e) return;
  const r = Object.entries(e).reduce((n, [o, s]) => (o.match(ha) && (n[o.slice(7)] = s), n), {});
  return Object.keys(r).length > 0 ? r : void 0;
}
function yi(t) {
  return t.split(",").map((e) => e.split("=").map((r) => decodeURIComponent(r.trim()))).reduce((e, [r, n]) => (r && n && (e[r] = n), e), {});
}
let bi = !1;
function ga(t) {
  const { spanId: e, traceId: r, isRemote: n } = t.spanContext();
  return ve({ parent_span_id: n ? e : In(t).parent_span_id, span_id: n ? rn() : e, trace_id: r });
}
function _i(t) {
  return typeof t == "number" ? wi(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? wi(t.getTime()) : xe();
}
function wi(t) {
  return t > 9999999999 ? t / 1e3 : t;
}
function In(t) {
  if ((function(e) {
    return typeof e.getSpanJSON == "function";
  })(t)) return t.getSpanJSON();
  try {
    const { spanId: e, traceId: r } = t.spanContext();
    if ((function(n) {
      const o = n;
      return !!(o.attributes && o.startTime && o.name && o.endTime && o.status);
    })(t)) {
      const { attributes: n, startTime: o, name: s, endTime: a, parentSpanId: l, status: u } = t;
      return ve({ span_id: e, trace_id: r, data: n, description: s, parent_span_id: l, start_timestamp: _i(o), timestamp: _i(a) || void 0, status: ma(u), op: n["sentry.op"], origin: n["sentry.origin"], _metrics_summary: pa(t) });
    }
    return { span_id: e, trace_id: r };
  } catch {
    return {};
  }
}
function ma(t) {
  if (t && t.code !== 0) return t.code === 1 ? "ok" : t.message || "unknown_error";
}
function cs(t) {
  return t._sentryRootSpan || t;
}
function va() {
  bi || (Lt(() => {
    console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
  }), bi = !0);
}
const Ln = "production";
function ls(t, e) {
  const r = e.getOptions(), { publicKey: n } = e.getDsn() || {}, o = ve({ environment: r.environment || Ln, release: r.release, public_key: n, trace_id: t });
  return e.emit("createDsc", o), o;
}
function ya(t) {
  const e = ne();
  if (!e) return {};
  const r = cs(t), n = r._frozenDsc;
  if (n) return n;
  const o = r.spanContext().traceState, s = o && o.get("sentry.dsc"), a = s && fa(s);
  if (a) return a;
  const l = ls(t.spanContext().traceId, e), u = In(r), p = u.data || {}, m = p["sentry.sample_rate"];
  m != null && (l.sample_rate = `${m}`);
  const v = p["sentry.source"], E = u.description;
  return v !== "url" && E && (l.transaction = E), (function(S) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const b = ne(), g = b && b.getOptions();
    return !!g && (g.enableTracing || "tracesSampleRate" in g || "tracesSampler" in g);
  })() && (l.sampled = String((function(S) {
    const { traceFlags: b } = S.spanContext();
    return b === 1;
  })(r))), e.emit("createDsc", l, r), l;
}
const ba = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function gr(t, e = !1) {
  const { host: r, path: n, pass: o, port: s, projectId: a, protocol: l, publicKey: u } = t;
  return `${l}://${u}${e && o ? `:${o}` : ""}@${r}${s ? `:${s}` : ""}/${n && `${n}/`}${a}`;
}
function ki(t) {
  return { protocol: t.protocol, publicKey: t.publicKey || "", pass: t.pass || "", host: t.host, port: t.port || "", path: t.path || "", projectId: t.projectId };
}
function _a(t) {
  const e = typeof t == "string" ? (function(r) {
    const n = ba.exec(r);
    if (!n) return void Lt(() => {
      console.error(`Invalid Sentry Dsn: ${r}`);
    });
    const [o, s, a = "", l = "", u = "", p = ""] = n.slice(1);
    let m = "", v = p;
    const E = v.split("/");
    if (E.length > 1 && (m = E.slice(0, -1).join("/"), v = E.pop()), v) {
      const S = v.match(/^\d+/);
      S && (v = S[0]);
    }
    return ki({ host: l, pass: a, path: m, projectId: v, port: u, protocol: o, publicKey: s });
  })(t) : ki(t);
  if (e && (function(r) {
    if (!it) return !0;
    const { port: n, projectId: o, protocol: s } = r;
    return !(["protocol", "publicKey", "host", "projectId"].find((a) => !r[a] && (N.error(`Invalid Sentry Dsn: ${a} missing`), !0)) || (o.match(/^\d+$/) ? /* @__PURE__ */ (function(a) {
      return a === "http" || a === "https";
    })(s) ? n && isNaN(parseInt(n, 10)) && (N.error(`Invalid Sentry Dsn: Invalid port ${n}`), 1) : (N.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), 1) : (N.error(`Invalid Sentry Dsn: Invalid projectId ${o}`), 1)));
  })(e)) return e;
}
function Oe(t, e = 100, r = 1 / 0) {
  try {
    return on("", t, e, r);
  } catch (n) {
    return { ERROR: `**non-serializable** (${n})` };
  }
}
function us(t, e = 3, r = 102400) {
  const n = Oe(t, e);
  return o = n, (function(s) {
    return ~-encodeURI(s).split(/%..|./).length;
  })(JSON.stringify(o)) > r ? us(t, e - 1, r) : n;
  var o;
}
function on(t, e, r = 1 / 0, n = 1 / 0, o = /* @__PURE__ */ (function() {
  const s = typeof WeakSet == "function", a = s ? /* @__PURE__ */ new WeakSet() : [];
  return [function(l) {
    if (s) return !!a.has(l) || (a.add(l), !1);
    for (let u = 0; u < a.length; u++) if (a[u] === l) return !0;
    return a.push(l), !1;
  }, function(l) {
    if (s) a.delete(l);
    else for (let u = 0; u < a.length; u++) if (a[u] === l) {
      a.splice(u, 1);
      break;
    }
  }];
})()) {
  const [s, a] = o;
  if (e == null || ["boolean", "string"].includes(typeof e) || typeof e == "number" && Number.isFinite(e)) return e;
  const l = (function(S, b) {
    try {
      if (S === "domain" && b && typeof b == "object" && b._events) return "[Domain]";
      if (S === "domainEmitter") return "[DomainEmitter]";
      if (typeof global < "u" && b === global) return "[Global]";
      if (typeof window < "u" && b === window) return "[Window]";
      if (typeof document < "u" && b === document) return "[Document]";
      if (ns(b)) return "[VueViewModel]";
      if (gt(g = b) && "nativeEvent" in g && "preventDefault" in g && "stopPropagation" in g) return "[SyntheticEvent]";
      if (typeof b == "number" && !Number.isFinite(b)) return `[${b}]`;
      if (typeof b == "function") return `[Function: ${Re(b)}]`;
      if (typeof b == "symbol") return `[${String(b)}]`;
      if (typeof b == "bigint") return `[BigInt: ${String(b)}]`;
      const w = (function(_) {
        const C = Object.getPrototypeOf(_);
        return C ? C.constructor.name : "null prototype";
      })(b);
      return /^HTML(\w*)Element$/.test(w) ? `[HTMLElement: ${w}]` : `[object ${w}]`;
    } catch (w) {
      return `**non-serializable** (${w})`;
    }
    var g;
  })(t, e);
  if (!l.startsWith("[object ")) return l;
  if (e.__sentry_skip_normalization__) return e;
  const u = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : r;
  if (u === 0) return l.replace("object ", "");
  if (s(e)) return "[Circular ~]";
  const p = e;
  if (p && typeof p.toJSON == "function") try {
    return on("", p.toJSON(), u - 1, n, o);
  } catch {
  }
  const m = Array.isArray(e) ? [] : {};
  let v = 0;
  const E = ss(e);
  for (const S in E) {
    if (!Object.prototype.hasOwnProperty.call(E, S)) continue;
    if (v >= n) {
      m[S] = "[MaxProperties ~]";
      break;
    }
    const b = E[S];
    m[S] = on(S, b, u - 1, n, o), v++;
  }
  return a(e), m;
}
function It(t, e = []) {
  return [t, e];
}
function wa(t, e) {
  const [r, n] = t;
  return [r, [...n, e]];
}
function Si(t, e) {
  const r = t[1];
  for (const n of r)
    if (e(n, n[0].type)) return !0;
  return !1;
}
function sn(t) {
  return q.__SENTRY__ && q.__SENTRY__.encodePolyfill ? q.__SENTRY__.encodePolyfill(t) : new TextEncoder().encode(t);
}
function ka(t) {
  const [e, r] = t;
  let n = JSON.stringify(e);
  function o(s) {
    typeof n == "string" ? n = typeof s == "string" ? n + s : [sn(n), s] : n.push(typeof s == "string" ? sn(s) : s);
  }
  for (const s of r) {
    const [a, l] = s;
    if (o(`
${JSON.stringify(a)}
`), typeof l == "string" || l instanceof Uint8Array) o(l);
    else {
      let u;
      try {
        u = JSON.stringify(l);
      } catch {
        u = JSON.stringify(Oe(l));
      }
      o(u);
    }
  }
  return typeof n == "string" ? n : (function(s) {
    const a = s.reduce((p, m) => p + m.length, 0), l = new Uint8Array(a);
    let u = 0;
    for (const p of s) l.set(p, u), u += p.length;
    return l;
  })(n);
}
function Sa(t) {
  const e = typeof t.data == "string" ? sn(t.data) : t.data;
  return [ve({ type: "attachment", length: e.length, filename: t.filename, content_type: t.contentType, attachment_type: t.attachmentType }), e];
}
const Ma = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket", raw_security: "security" };
function Mi(t) {
  return Ma[t];
}
function ds(t) {
  if (!t || !t.sdk) return;
  const { name: e, version: r } = t.sdk;
  return { name: e, version: r };
}
function Ea(t, e, r, n) {
  const o = ds(r), s = t.type && t.type !== "replay_event" ? t.type : "event";
  (function(l, u) {
    u && (l.sdk = l.sdk || {}, l.sdk.name = l.sdk.name || u.name, l.sdk.version = l.sdk.version || u.version, l.sdk.integrations = [...l.sdk.integrations || [], ...u.integrations || []], l.sdk.packages = [...l.sdk.packages || [], ...u.packages || []]);
  })(t, r && r.sdk);
  const a = (function(l, u, p, m) {
    const v = l.sdkProcessingMetadata && l.sdkProcessingMetadata.dynamicSamplingContext;
    return { event_id: l.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...u && { sdk: u }, ...!!p && m && { dsn: gr(m) }, ...v && { trace: ve({ ...v }) } };
  })(t, o, n, e);
  return delete t.sdkProcessingMetadata, It(a, [[{ type: s }, t]]);
}
function an(t, e, r, n = 0) {
  return new me((o, s) => {
    const a = t[n];
    if (e === null || typeof a != "function") o(e);
    else {
      const l = a({ ...e }, r);
      W && a.id && l === null && N.log(`Event processor "${a.id}" dropped event`), Er(l) ? l.then((u) => an(t, u, r, n + 1).then(o)).then(null, s) : an(t, l, r, n + 1).then(o).then(null, s);
    }
  });
}
let Wt, Ei, xr;
function Ca(t, e) {
  const { fingerprint: r, span: n, breadcrumbs: o, sdkProcessingMetadata: s } = e;
  (function(a, l) {
    const { extra: u, tags: p, user: m, contexts: v, level: E, transactionName: S } = l, b = ve(u);
    b && Object.keys(b).length && (a.extra = { ...b, ...a.extra });
    const g = ve(p);
    g && Object.keys(g).length && (a.tags = { ...g, ...a.tags });
    const w = ve(m);
    w && Object.keys(w).length && (a.user = { ...w, ...a.user });
    const _ = ve(v);
    _ && Object.keys(_).length && (a.contexts = { ..._, ...a.contexts }), E && (a.level = E), S && a.type !== "transaction" && (a.transaction = S);
  })(t, e), n && (function(a, l) {
    a.contexts = { trace: ga(l), ...a.contexts }, a.sdkProcessingMetadata = { dynamicSamplingContext: ya(l), ...a.sdkProcessingMetadata };
    const u = cs(l), p = In(u).description;
    p && !a.transaction && a.type === "transaction" && (a.transaction = p);
  })(t, n), (function(a, l) {
    a.fingerprint = a.fingerprint ? Array.isArray(a.fingerprint) ? a.fingerprint : [a.fingerprint] : [], l && (a.fingerprint = a.fingerprint.concat(l)), a.fingerprint && !a.fingerprint.length && delete a.fingerprint;
  })(t, r), (function(a, l) {
    const u = [...a.breadcrumbs || [], ...l];
    a.breadcrumbs = u.length ? u : void 0;
  })(t, o), (function(a, l) {
    a.sdkProcessingMetadata = { ...a.sdkProcessingMetadata, ...l };
  })(t, s);
}
function Ci(t, e) {
  const { extra: r, tags: n, user: o, contexts: s, level: a, sdkProcessingMetadata: l, breadcrumbs: u, fingerprint: p, eventProcessors: m, attachments: v, propagationContext: E, transactionName: S, span: b } = e;
  Ht(t, "extra", r), Ht(t, "tags", n), Ht(t, "user", o), Ht(t, "contexts", s), t.sdkProcessingMetadata = Cr(t.sdkProcessingMetadata, l, 2), a && (t.level = a), S && (t.transactionName = S), b && (t.span = b), u.length && (t.breadcrumbs = [...t.breadcrumbs, ...u]), p.length && (t.fingerprint = [...t.fingerprint, ...p]), m.length && (t.eventProcessors = [...t.eventProcessors, ...m]), v.length && (t.attachments = [...t.attachments, ...v]), t.propagationContext = { ...t.propagationContext, ...E };
}
function Ht(t, e, r) {
  t[e] = Cr(t[e], r, 1);
}
function Ta(t, e, r, n, o, s) {
  const { normalizeDepth: a = 3, normalizeMaxBreadth: l = 1e3 } = t, u = { ...e, event_id: e.event_id || r.event_id || ye(), timestamp: e.timestamp || Dt() }, p = r.integrations || t.integrations.map((b) => b.name);
  (function(b, g) {
    const { environment: w, release: _, dist: C, maxValueLength: O = 250 } = g;
    b.environment = b.environment || w || Ln, !b.release && _ && (b.release = _), !b.dist && C && (b.dist = C), b.message && (b.message = pt(b.message, O));
    const j = b.exception && b.exception.values && b.exception.values[0];
    j && j.value && (j.value = pt(j.value, O));
    const A = b.request;
    A && A.url && (A.url = pt(A.url, O));
  })(u, t), (function(b, g) {
    g.length > 0 && (b.sdk = b.sdk || {}, b.sdk.integrations = [...b.sdk.integrations || [], ...g]);
  })(u, p), o && o.emit("applyFrameMetadata", e), e.type === void 0 && (function(b, g) {
    const w = (function(_) {
      const C = q._sentryDebugIds;
      if (!C) return {};
      const O = Object.keys(C);
      return xr && O.length === Ei || (Ei = O.length, xr = O.reduce((j, A) => {
        Wt || (Wt = {});
        const F = Wt[A];
        if (F) j[F[0]] = F[1];
        else {
          const J = _(A);
          for (let te = J.length - 1; te >= 0; te--) {
            const Ie = J[te], H = Ie && Ie.filename, ce = C[A];
            if (H && ce) {
              j[H] = ce, Wt[A] = [H, ce];
              break;
            }
          }
        }
        return j;
      }, {})), xr;
    })(g);
    try {
      b.exception.values.forEach((_) => {
        _.stacktrace.frames.forEach((C) => {
          w && C.filename && (C.debug_id = w[C.filename]);
        });
      });
    } catch {
    }
  })(u, t.stackParser);
  const m = (function(b, g) {
    if (!g) return b;
    const w = b ? b.clone() : new Ue();
    return w.update(g), w;
  })(n, r.captureContext);
  r.mechanism && mt(u, r.mechanism);
  const v = o ? o.getEventProcessors() : [], E = pr("globalScope", () => new Ue()).getScopeData();
  s && Ci(E, s.getScopeData()), m && Ci(E, m.getScopeData());
  const S = [...r.attachments || [], ...E.attachments];
  return S.length && (r.attachments = S), Ca(u, E), an([...v, ...E.eventProcessors], u, r).then((b) => (b && (function(g) {
    const w = {};
    try {
      g.exception.values.forEach((C) => {
        C.stacktrace.frames.forEach((O) => {
          O.debug_id && (O.abs_path ? w[O.abs_path] = O.debug_id : O.filename && (w[O.filename] = O.debug_id), delete O.debug_id);
        });
      });
    } catch {
    }
    if (Object.keys(w).length === 0) return;
    g.debug_meta = g.debug_meta || {}, g.debug_meta.images = g.debug_meta.images || [];
    const _ = g.debug_meta.images;
    Object.entries(w).forEach(([C, O]) => {
      _.push({ type: "sourcemap", code_file: C, debug_id: O });
    });
  })(b), typeof a == "number" && a > 0 ? (function(g, w, _) {
    if (!g) return null;
    const C = { ...g, ...g.breadcrumbs && { breadcrumbs: g.breadcrumbs.map((O) => ({ ...O, ...O.data && { data: Oe(O.data, w, _) } })) }, ...g.user && { user: Oe(g.user, w, _) }, ...g.contexts && { contexts: Oe(g.contexts, w, _) }, ...g.extra && { extra: Oe(g.extra, w, _) } };
    return g.contexts && g.contexts.trace && C.contexts && (C.contexts.trace = g.contexts.trace, g.contexts.trace.data && (C.contexts.trace.data = Oe(g.contexts.trace.data, w, _))), g.spans && (C.spans = g.spans.map((O) => ({ ...O, ...O.data && { data: Oe(O.data, w, _) } }))), g.contexts && g.contexts.flags && C.contexts && (C.contexts.flags = Oe(g.contexts.flags, 3, _)), C;
  })(b, a, l) : b));
}
function Ti(t, e) {
  return ot().captureEvent(t, e);
}
function Oi(t) {
  const e = ne(), r = Nt(), n = ot(), { release: o, environment: s = Ln } = e && e.getOptions() || {}, { userAgent: a } = q.navigator || {}, l = aa({ release: o, environment: s, user: n.getUser() || r.getUser(), ...a && { userAgent: a }, ...t }), u = r.getSession();
  return u && u.status === "ok" && vt(u, { status: "exited" }), ps(), r.setSession(l), n.setSession(l), l;
}
function ps() {
  const t = Nt(), e = ot(), r = e.getSession() || t.getSession();
  r && (function(n, o) {
    let s = {};
    n.status === "ok" && (s = { status: "exited" }), vt(n, s);
  })(r), hs(), t.setSession(), e.setSession();
}
function hs() {
  const t = Nt(), e = ot(), r = ne(), n = e.getSession() || t.getSession();
  n && r && r.captureSession(n);
}
function Pi(t = !1) {
  t ? ps() : hs();
}
function Oa(t, e, r) {
  return e || `${(function(n) {
    return `${(function(o) {
      const s = o.protocol ? `${o.protocol}:` : "", a = o.port ? `:${o.port}` : "";
      return `${s}//${o.host}${a}${o.path ? `/${o.path}` : ""}/api/`;
    })(n)}${n.projectId}/envelope/`;
  })(t)}?${(function(n, o) {
    const s = { sentry_version: "7" };
    return n.publicKey && (s.sentry_key = n.publicKey), o && (s.sentry_client = `${o.name}/${o.version}`), new URLSearchParams(s).toString();
  })(t, r)}`;
}
const Ai = [];
function xi(t, e) {
  for (const r of e) r && r.afterAllSetup && r.afterAllSetup(t);
}
function ji(t, e, r) {
  if (r[e.name]) W && N.log(`Integration skipped because it was already installed: ${e.name}`);
  else {
    if (r[e.name] = e, Ai.indexOf(e.name) === -1 && typeof e.setupOnce == "function" && (e.setupOnce(), Ai.push(e.name)), e.setup && typeof e.setup == "function" && e.setup(t), typeof e.preprocessEvent == "function") {
      const n = e.preprocessEvent.bind(e);
      t.on("preprocessEvent", (o, s) => n(o, s, t));
    }
    if (typeof e.processEvent == "function") {
      const n = e.processEvent.bind(e), o = Object.assign((s, a) => n(s, a, t), { id: e.name });
      t.addEventProcessor(o);
    }
    W && N.log(`Integration installed: ${e.name}`);
  }
}
class _e extends Error {
  constructor(e, r = "warn") {
    super(e), this.message = e, this.logLevel = r;
  }
}
const Ii = "Not capturing exception because it's already been captured.";
class Pa {
  constructor(e) {
    if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = _a(e.dsn) : W && N.warn("No DSN provided, client will not send events."), this._dsn) {
      const n = Oa(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
      this._transport = e.transport({ tunnel: this._options.tunnel, recordDroppedEvent: this.recordDroppedEvent.bind(this), ...e.transportOptions, url: n });
    }
    const r = ["enableTracing", "tracesSampleRate", "tracesSampler"].find((n) => n in e && e[n] == null);
    r && Lt(() => {
      console.warn(`[Sentry] Deprecation warning: \`${r}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`);
    });
  }
  captureException(e, r, n) {
    const o = ye();
    if (hi(e)) return W && N.log(Ii), o;
    const s = { event_id: o, ...r };
    return this._process(this.eventFromException(e, s).then((a) => this._captureEvent(a, s, n))), s.event_id;
  }
  captureMessage(e, r, n, o) {
    const s = { event_id: ye(), ...n }, a = On(e) ? e : String(e), l = Zr(e) ? this.eventFromMessage(a, r, s) : this.eventFromException(e, s);
    return this._process(l.then((u) => this._captureEvent(u, s, o))), s.event_id;
  }
  captureEvent(e, r, n) {
    const o = ye();
    if (r && r.originalException && hi(r.originalException)) return W && N.log(Ii), o;
    const s = { event_id: o, ...r }, a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(this._captureEvent(e, s, a || n)), s.event_id;
  }
  captureSession(e) {
    typeof e.release != "string" ? W && N.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), vt(e, { init: !1 }));
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
    const r = this._transport;
    return r ? (this.emit("flush"), this._isClientDoneProcessing(e).then((n) => r.flush(e).then((o) => n && o))) : rt(!0);
  }
  close(e) {
    return this.flush(e).then((r) => (this.getOptions().enabled = !1, this.emit("close"), r));
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
    const r = this._integrations[e.name];
    ji(this, e, this._integrations), r || xi(this, [e]);
  }
  sendEvent(e, r = {}) {
    this.emit("beforeSendEvent", e, r);
    let n = Ea(e, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of r.attachments || []) n = wa(n, Sa(s));
    const o = this.sendEnvelope(n);
    o && o.then((s) => this.emit("afterSendEvent", e, s), null);
  }
  sendSession(e) {
    const r = (function(n, o, s, a) {
      const l = ds(s);
      return It({ sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...l && { sdk: l }, ...!!a && o && { dsn: gr(o) } }, ["aggregates" in n ? [{ type: "sessions" }, n] : [{ type: "session" }, n.toJSON()]]);
    })(e, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(r);
  }
  recordDroppedEvent(e, r, n) {
    if (this._options.sendClientReports) {
      const o = typeof n == "number" ? n : 1, s = `${e}:${r}`;
      W && N.log(`Recording outcome: "${s}"${o > 1 ? ` (${o} times)` : ""}`), this._outcomes[s] = (this._outcomes[s] || 0) + o;
    }
  }
  on(e, r) {
    const n = this._hooks[e] = this._hooks[e] || [];
    return n.push(r), () => {
      const o = n.indexOf(r);
      o > -1 && n.splice(o, 1);
    };
  }
  emit(e, ...r) {
    const n = this._hooks[e];
    n && n.forEach((o) => o(...r));
  }
  sendEnvelope(e) {
    return this.emit("beforeEnvelope", e), this._isEnabled() && this._transport ? this._transport.send(e).then(null, (r) => (W && N.error("Error while sending envelope:", r), r)) : (W && N.error("Transport disabled"), rt({}));
  }
  _setupIntegrations() {
    const { integrations: e } = this._options;
    this._integrations = (function(r, n) {
      const o = {};
      return n.forEach((s) => {
        s && ji(r, s, o);
      }), o;
    })(this, e), xi(this, e);
  }
  _updateSessionFromEvent(e, r) {
    let n = r.level === "fatal", o = !1;
    const s = r.exception && r.exception.values;
    if (s) {
      o = !0;
      for (const l of s) {
        const u = l.mechanism;
        if (u && u.handled === !1) {
          n = !0;
          break;
        }
      }
    }
    const a = e.status === "ok";
    (a && e.errors === 0 || a && n) && (vt(e, { ...n && { status: "crashed" }, errors: e.errors || Number(o || n) }), this.captureSession(e));
  }
  _isClientDoneProcessing(e) {
    return new me((r) => {
      let n = 0;
      const o = setInterval(() => {
        this._numProcessing == 0 ? (clearInterval(o), r(!0)) : (n += 1, e && n >= e && (clearInterval(o), r(!1)));
      }, 1);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(e, r, n = ot(), o = Nt()) {
    const s = this.getOptions(), a = Object.keys(this._integrations);
    return !r.integrations && a.length > 0 && (r.integrations = a), this.emit("preprocessEvent", e, r), e.type || o.setLastEventId(e.event_id || r.event_id), Ta(s, e, r, n, this, o).then((l) => {
      if (l === null) return l;
      l.contexts = { trace: da(n), ...l.contexts };
      const u = (function(p, m) {
        const v = m.getPropagationContext();
        return v.dsc || ls(v.traceId, p);
      })(this, n);
      return l.sdkProcessingMetadata = { dynamicSamplingContext: u, ...l.sdkProcessingMetadata }, l;
    });
  }
  _captureEvent(e, r = {}, n) {
    return this._processEvent(e, r, n).then((o) => o.event_id, (o) => {
      W && (o instanceof _e && o.logLevel === "log" ? N.log(o.message) : N.warn(o));
    });
  }
  _processEvent(e, r, n) {
    const o = this.getOptions(), { sampleRate: s } = o, a = Di(e), l = Li(e), u = e.type || "error", p = `before send for type \`${u}\``, m = s === void 0 ? void 0 : (function(S) {
      if (typeof S == "boolean") return Number(S);
      const b = typeof S == "string" ? parseFloat(S) : S;
      if (!(typeof b != "number" || isNaN(b) || b < 0 || b > 1)) return b;
      W && N.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(S)} of type ${JSON.stringify(typeof S)}.`);
    })(s);
    if (l && typeof m == "number" && Math.random() > m) return this.recordDroppedEvent("sample_rate", "error", e), fr(new _e(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, "log"));
    const v = u === "replay_event" ? "replay" : u, E = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(e, r, n, E).then((S) => {
      if (S === null) throw this.recordDroppedEvent("event_processor", v, e), new _e("An event processor returned `null`, will not send event.", "log");
      if (r.data && r.data.__sentry__ === !0) return S;
      const b = (function(g, w, _, C) {
        const { beforeSend: O, beforeSendTransaction: j, beforeSendSpan: A } = w;
        if (Li(_) && O) return O(_, C);
        if (Di(_)) {
          if (_.spans && A) {
            const F = [];
            for (const J of _.spans) {
              const te = A(J);
              te ? F.push(te) : (va(), g.recordDroppedEvent("before_send", "span"));
            }
            _.spans = F;
          }
          if (j) {
            if (_.spans) {
              const F = _.spans.length;
              _.sdkProcessingMetadata = { ..._.sdkProcessingMetadata, spanCountBeforeProcessing: F };
            }
            return j(_, C);
          }
        }
        return _;
      })(this, o, S, r);
      return (function(g, w) {
        const _ = `${w} must return \`null\` or a valid event.`;
        if (Er(g)) return g.then((C) => {
          if (!gt(C) && C !== null) throw new _e(_);
          return C;
        }, (C) => {
          throw new _e(`${w} rejected with ${C}`);
        });
        if (!gt(g) && g !== null) throw new _e(_);
        return g;
      })(b, p);
    }).then((S) => {
      if (S === null) {
        if (this.recordDroppedEvent("before_send", v, e), a) {
          const w = 1 + (e.spans || []).length;
          this.recordDroppedEvent("before_send", "span", w);
        }
        throw new _e(`${p} returned \`null\`, will not send event.`, "log");
      }
      const b = n && n.getSession();
      if (!a && b && this._updateSessionFromEvent(b, S), a) {
        const w = (S.sdkProcessingMetadata && S.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (S.spans ? S.spans.length : 0);
        w > 0 && this.recordDroppedEvent("before_send", "span", w);
      }
      const g = S.transaction_info;
      if (a && g && S.transaction !== e.transaction) {
        const w = "custom";
        S.transaction_info = { ...g, source: w };
      }
      return this.sendEvent(S, r), S;
    }).then(null, (S) => {
      throw S instanceof _e ? S : (this.captureException(S, { data: { __sentry__: !0 }, originalException: S }), new _e(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${S}`));
    });
  }
  _process(e) {
    this._numProcessing++, e.then((r) => (this._numProcessing--, r), (r) => (this._numProcessing--, r));
  }
  _clearOutcomes() {
    const e = this._outcomes;
    return this._outcomes = {}, Object.entries(e).map(([r, n]) => {
      const [o, s] = r.split(":");
      return { reason: o, category: s, quantity: n };
    });
  }
  _flushOutcomes() {
    W && N.log("Flushing outcomes...");
    const e = this._clearOutcomes();
    if (e.length === 0) return void (W && N.log("No outcomes to send"));
    if (!this._dsn) return void (W && N.log("No dsn provided, will not send outcomes"));
    W && N.log("Sending outcomes:", e);
    const r = (n = e, It((o = this._options.tunnel && gr(this._dsn)) ? { dsn: o } : {}, [[{ type: "client_report" }, { timestamp: s || Dt(), discarded_events: n }]]));
    var n, o, s;
    this.sendEnvelope(r);
  }
}
function Li(t) {
  return t.type === void 0;
}
function Di(t) {
  return t.type === "transaction";
}
function Aa(t) {
  const e = [];
  function r(n) {
    return e.splice(e.indexOf(n), 1)[0] || Promise.resolve(void 0);
  }
  return { $: e, add: function(n) {
    if (!(t === void 0 || e.length < t)) return fr(new _e("Not adding Promise because buffer limit was reached."));
    const o = n();
    return e.indexOf(o) === -1 && e.push(o), o.then(() => r(o)).then(null, () => r(o).then(null, () => {
    })), o;
  }, drain: function(n) {
    return new me((o, s) => {
      let a = e.length;
      if (!a) return o(!0);
      const l = setTimeout(() => {
        n && n > 0 && o(!1);
      }, n);
      e.forEach((u) => {
        rt(u).then(() => {
          --a || (clearTimeout(l), o(!0));
        }, s);
      });
    });
  } };
}
function xa(t, { statusCode: e, headers: r }, n = Date.now()) {
  const o = { ...t }, s = r && r["x-sentry-rate-limits"], a = r && r["retry-after"];
  if (s) for (const l of s.trim().split(",")) {
    const [u, p, , , m] = l.split(":", 5), v = parseInt(u, 10), E = 1e3 * (isNaN(v) ? 60 : v);
    if (p) for (const S of p.split(";")) S === "metric_bucket" && m && !m.split(";").includes("custom") || (o[S] = n + E);
    else o.all = n + E;
  }
  else a ? o.all = n + (function(l, u = Date.now()) {
    const p = parseInt(`${l}`, 10);
    if (!isNaN(p)) return 1e3 * p;
    const m = Date.parse(`${l}`);
    return isNaN(m) ? 6e4 : m - u;
  })(a, n) : e === 429 && (o.all = n + 6e4);
  return o;
}
function ja(t, e, r = Aa(t.bufferSize || 64)) {
  let n = {};
  return { send: function(o) {
    const s = [];
    if (Si(o, (u, p) => {
      const m = Mi(p);
      if ((function(v, E, S = Date.now()) {
        return (function(b, g) {
          return b[g] || b.all || 0;
        })(v, E) > S;
      })(n, m)) {
        const v = Ni(u, p);
        t.recordDroppedEvent("ratelimit_backoff", m, v);
      } else s.push(u);
    }), s.length === 0) return rt({});
    const a = It(o[0], s), l = (u) => {
      Si(a, (p, m) => {
        const v = Ni(p, m);
        t.recordDroppedEvent(u, Mi(m), v);
      });
    };
    return r.add(() => e({ body: ka(a) }).then((u) => (u.statusCode !== void 0 && (u.statusCode < 200 || u.statusCode >= 300) && W && N.warn(`Sentry responded with status code ${u.statusCode} to sent event.`), n = xa(n, u), u), (u) => {
      throw l("network_error"), u;
    })).then((u) => u, (u) => {
      if (u instanceof _e) return W && N.error("Skipped sending event because buffer is full."), l("queue_overflow"), rt({});
      throw u;
    });
  }, flush: (o) => r.drain(o) };
}
function Ni(t, e) {
  if (e === "event" || e === "transaction") return Array.isArray(t) ? t[1] : void 0;
}
const Ia = 100;
function qe(t, e) {
  const r = ne(), n = Nt();
  if (!r) return;
  const { beforeBreadcrumb: o = null, maxBreadcrumbs: s = Ia } = r.getOptions();
  if (s <= 0) return;
  const a = { timestamp: Dt(), ...t }, l = o ? Lt(() => o(a, e)) : a;
  l !== null && (r.emit && r.emit("beforeAddBreadcrumb", l, e), n.addBreadcrumb(l, s));
}
let Fi;
const Bi = /* @__PURE__ */ new WeakMap(), La = () => ({ name: "FunctionToString", setupOnce() {
  Fi = Function.prototype.toString;
  try {
    Function.prototype.toString = function(...t) {
      const e = An(this), r = Bi.has(ne()) && e !== void 0 ? e : this;
      return Fi.apply(r, t);
    };
  } catch {
  }
}, setup(t) {
  Bi.set(t, !0);
} }), Da = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/], Na = (t = {}) => ({ name: "InboundFilters", processEvent(e, r, n) {
  const o = n.getOptions(), s = (function(a = {}, l = {}) {
    return { allowUrls: [...a.allowUrls || [], ...l.allowUrls || []], denyUrls: [...a.denyUrls || [], ...l.denyUrls || []], ignoreErrors: [...a.ignoreErrors || [], ...l.ignoreErrors || [], ...a.disableErrorDefaults ? [] : Da], ignoreTransactions: [...a.ignoreTransactions || [], ...l.ignoreTransactions || []], ignoreInternal: a.ignoreInternal === void 0 || a.ignoreInternal };
  })(t, o);
  return (function(a, l) {
    return l.ignoreInternal && (function(u) {
      try {
        return u.exception.values[0].type === "SentryError";
      } catch {
      }
      return !1;
    })(a) ? (W && N.warn(`Event dropped due to being internal Sentry Error.
Event: ${Fe(a)}`), !0) : (function(u, p) {
      return u.type || !p || !p.length ? !1 : (function(m) {
        const v = [];
        m.message && v.push(m.message);
        let E;
        try {
          E = m.exception.values[m.exception.values.length - 1];
        } catch {
        }
        return E && E.value && (v.push(E.value), E.type && v.push(`${E.type}: ${E.value}`)), v;
      })(u).some((m) => zt(m, p));
    })(a, l.ignoreErrors) ? (W && N.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Fe(a)}`), !0) : (function(u) {
      return u.type || !u.exception || !u.exception.values || u.exception.values.length === 0 ? !1 : !u.message && !u.exception.values.some((p) => p.stacktrace || p.type && p.type !== "Error" || p.value);
    })(a) ? (W && N.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Fe(a)}`), !0) : (function(u, p) {
      if (u.type !== "transaction" || !p || !p.length) return !1;
      const m = u.transaction;
      return !!m && zt(m, p);
    })(a, l.ignoreTransactions) ? (W && N.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Fe(a)}`), !0) : (function(u, p) {
      if (!p || !p.length) return !1;
      const m = Gt(u);
      return !!m && zt(m, p);
    })(a, l.denyUrls) ? (W && N.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Fe(a)}.
Url: ${Gt(a)}`), !0) : (function(u, p) {
      if (!p || !p.length) return !0;
      const m = Gt(u);
      return !m || zt(m, p);
    })(a, l.allowUrls) ? !1 : (W && N.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Fe(a)}.
Url: ${Gt(a)}`), !0);
  })(e, s) ? null : e;
} });
function Gt(t) {
  try {
    let e;
    try {
      e = t.exception.values[0].stacktrace.frames;
    } catch {
    }
    return e ? (function(r = []) {
      for (let n = r.length - 1; n >= 0; n--) {
        const o = r[n];
        if (o && o.filename !== "<anonymous>" && o.filename !== "[native code]") return o.filename || null;
      }
      return null;
    })(e) : null;
  } catch {
    return W && N.error(`Cannot extract url for event ${Fe(t)}`), null;
  }
}
function Fa(t, e, r = 250, n, o, s, a) {
  if (!(s.exception && s.exception.values && a && et(a.originalException, Error))) return;
  const l = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
  var u, p;
  l && (s.exception.values = (u = cn(t, e, o, a.originalException, n, s.exception.values, l, 0), p = r, u.map((m) => (m.value && (m.value = pt(m.value, p)), m))));
}
function cn(t, e, r, n, o, s, a, l) {
  if (s.length >= r + 1) return s;
  let u = [...s];
  if (et(n[o], Error)) {
    Ri(a, l);
    const p = t(e, n[o]), m = u.length;
    Ui(p, o, m, l), u = cn(t, e, r, n[o], o, [p, ...u], p, m);
  }
  return Array.isArray(n.errors) && n.errors.forEach((p, m) => {
    if (et(p, Error)) {
      Ri(a, l);
      const v = t(e, p), E = u.length;
      Ui(v, `errors[${m}]`, E, l), u = cn(t, e, r, p, o, [v, ...u], v, E);
    }
  }), u;
}
function Ri(t, e) {
  t.mechanism = t.mechanism || { type: "generic", handled: !0 }, t.mechanism = { ...t.mechanism, ...t.type === "AggregateError" && { is_exception_group: !0 }, exception_id: e };
}
function Ui(t, e, r, n) {
  t.mechanism = t.mechanism || { type: "generic", handled: !0 }, t.mechanism = { ...t.mechanism, type: "chained", source: e, exception_id: r, parent_id: n };
}
function jr(t) {
  if (!t) return {};
  const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!e) return {};
  const r = e[6] || "", n = e[8] || "";
  return { host: e[4], path: e[5], protocol: e[2], search: r, hash: n, relative: e[5] + r + n };
}
function Ba() {
  "console" in q && Xr.forEach(function(t) {
    t in q.console && pe(q.console, t, function(e) {
      return hr[t] = e, function(...r) {
        we("console", { args: r, level: t });
        const n = hr[t];
        n && n.apply(q.console, r);
      };
    });
  });
}
function Ra(t) {
  return t === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(t) ? t : "log";
}
const Ua = () => {
  let t;
  return { name: "Dedupe", processEvent(e) {
    if (e.type) return e;
    try {
      if ((function(r, n) {
        return n ? !!((function(o, s) {
          const a = o.message, l = s.message;
          return !(!a && !l || a && !l || !a && l || a !== l || !Vi(o, s) || !$i(o, s));
        })(r, n) || (function(o, s) {
          const a = Ji(s), l = Ji(o);
          return !(!a || !l || a.type !== l.type || a.value !== l.value || !Vi(o, s) || !$i(o, s));
        })(r, n)) : !1;
      })(e, t)) return W && N.warn("Event dropped due to being a duplicate of previously captured event."), null;
    } catch {
    }
    return t = e;
  } };
};
function $i(t, e) {
  let r = ai(t), n = ai(e);
  if (!r && !n) return !0;
  if (r && !n || !r && n || n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    const s = n[o], a = r[o];
    if (s.filename !== a.filename || s.lineno !== a.lineno || s.colno !== a.colno || s.function !== a.function) return !1;
  }
  return !0;
}
function Vi(t, e) {
  let r = t.fingerprint, n = e.fingerprint;
  if (!r && !n) return !0;
  if (r && !n || !r && n) return !1;
  try {
    return r.join("") === n.join("");
  } catch {
    return !1;
  }
}
function Ji(t) {
  return t.exception && t.exception.values && t.exception.values[0];
}
function qi(t) {
  return t === void 0 ? void 0 : t >= 400 && t < 500 ? "warning" : t >= 500 ? "error" : void 0;
}
const Ir = q;
function ln(t) {
  return t && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
}
function $a() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!(function() {
    if (!("fetch" in Ir)) return !1;
    try {
      return new Headers(), new Request("http://www.example.com"), new Response(), !0;
    } catch {
      return !1;
    }
  })()) return !1;
  if (ln(Ir.fetch)) return !0;
  let t = !1;
  const e = Ir.document;
  if (e && typeof e.createElement == "function") try {
    const r = e.createElement("iframe");
    r.hidden = !0, e.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = ln(r.contentWindow.fetch)), e.head.removeChild(r);
  } catch (r) {
    it && N.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", r);
  }
  return t;
}
function Va(t, e) {
  const r = "fetch";
  Ke(r, t), Xe(r, () => (function(n, o = !1) {
    o && !$a() || pe(q, "fetch", function(s) {
      return function(...a) {
        const l = new Error(), { method: u, url: p } = (function(v) {
          if (v.length === 0) return { method: "GET", url: "" };
          if (v.length === 2) {
            const [S, b] = v;
            return { url: zi(S), method: un(b, "method") ? String(b.method).toUpperCase() : "GET" };
          }
          const E = v[0];
          return { url: zi(E), method: un(E, "method") ? String(E.method).toUpperCase() : "GET" };
        })(a), m = { args: a, fetchData: { method: u, url: p }, startTimestamp: 1e3 * xe(), virtualError: l };
        return n || we("fetch", { ...m }), s.apply(q, a).then(async (v) => (n ? n(v) : we("fetch", { ...m, endTimestamp: 1e3 * xe(), response: v }), v), (v) => {
          throw we("fetch", { ...m, endTimestamp: 1e3 * xe(), error: v }), Tn(v) && v.stack === void 0 && (v.stack = l.stack, tt(v, "framesToPop", 1)), v;
        });
      };
    });
  })(void 0, e));
}
function un(t, e) {
  return !!t && typeof t == "object" && !!t[e];
}
function zi(t) {
  return typeof t == "string" ? t : t ? un(t, "url") ? t.url : t.toString ? t.toString() : "" : "";
}
const Qt = q, Q = q;
let dn = 0;
function Wi() {
  return dn > 0;
}
function bt(t, e = {}) {
  if (!/* @__PURE__ */ (function(n) {
    return typeof n == "function";
  })(t)) return t;
  try {
    const n = t.__sentry_wrapped__;
    if (n) return typeof n == "function" ? n : t;
    if (An(t)) return t;
  } catch {
    return t;
  }
  const r = function(...n) {
    try {
      const o = n.map((s) => bt(s, e));
      return t.apply(this, o);
    } catch (o) {
      throw dn++, setTimeout(() => {
        dn--;
      }), (function(...s) {
        const a = jn(Sr());
        if (s.length === 2) {
          const [l, u] = s;
          return l ? a.withSetScope(l, u) : a.withScope(u);
        }
        a.withScope(s[0]);
      })((s) => {
        var a;
        s.addEventProcessor((l) => (e.mechanism && (tn(l, void 0), mt(l, e.mechanism)), l.extra = { ...l.extra, arguments: n }, l)), a = o, ot().captureException(a, void 0);
      }), o;
    }
  };
  try {
    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
  } catch {
  }
  os(r, t), tt(t, "__sentry_wrapped__", r);
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", { get: () => t.name });
  } catch {
  }
  return r;
}
const Tr = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Dn(t, e) {
  const r = Nn(t, e), n = { type: za(e), value: Wa(e) };
  return r.length && (n.stacktrace = { frames: r }), n.type === void 0 && n.value === "" && (n.value = "Unrecoverable error caught"), n;
}
function Ja(t, e, r, n) {
  const o = ne(), s = o && o.getOptions().normalizeDepth, a = (function(p) {
    for (const m in p) if (Object.prototype.hasOwnProperty.call(p, m)) {
      const v = p[m];
      if (v instanceof Error) return v;
    }
  })(e), l = { __serialized__: us(e, s) };
  if (a) return { exception: { values: [Dn(t, a)] }, extra: l };
  const u = { exception: { values: [{ type: Mr(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error", value: Ha(e, { isUnhandledRejection: n }) }] }, extra: l };
  if (r) {
    const p = Nn(t, r);
    p.length && (u.exception.values[0].stacktrace = { frames: p });
  }
  return u;
}
function Lr(t, e) {
  return { exception: { values: [Dn(t, e)] } };
}
function Nn(t, e) {
  const r = e.stacktrace || e.stack || "", n = (function(s) {
    return s && qa.test(s.message) ? 1 : 0;
  })(e), o = (function(s) {
    return typeof s.framesToPop == "number" ? s.framesToPop : 0;
  })(e);
  try {
    return t(r, n, o);
  } catch {
  }
  return [];
}
const qa = /Minified React error #\d+;/i;
function fs(t) {
  return typeof WebAssembly < "u" && WebAssembly.Exception !== void 0 && t instanceof WebAssembly.Exception;
}
function za(t) {
  const e = t && t.name;
  return !e && fs(t) ? t.message && Array.isArray(t.message) && t.message.length == 2 ? t.message[0] : "WebAssembly.Exception" : e;
}
function Wa(t) {
  const e = t && t.message;
  return e ? e.error && typeof e.error.message == "string" ? e.error.message : fs(t) && Array.isArray(t.message) && t.message.length == 2 ? t.message[1] : e : "No error message";
}
function pn(t, e, r, n, o) {
  let s;
  if (rs(e) && e.error)
    return Lr(t, e.error);
  if (li(e) || wt(e, "DOMException")) {
    const a = e;
    if ("stack" in e) s = Lr(t, e);
    else {
      const l = a.name || (li(a) ? "DOMError" : "DOMException"), u = a.message ? `${l}: ${a.message}` : l;
      s = hn(t, u, r, n), tn(s, u);
    }
    return "code" in a && (s.tags = { ...s.tags, "DOMException.code": `${a.code}` }), s;
  }
  return Tn(e) ? Lr(t, e) : gt(e) || Mr(e) ? (s = Ja(t, e, r, o), mt(s, { synthetic: !0 }), s) : (s = hn(t, e, r, n), tn(s, `${e}`), mt(s, { synthetic: !0 }), s);
}
function hn(t, e, r, n) {
  const o = {};
  if (n && r) {
    const s = Nn(t, r);
    s.length && (o.exception = { values: [{ value: e, stacktrace: { frames: s } }] }), mt(o, { synthetic: !0 });
  }
  if (On(e)) {
    const { __sentry_template_string__: s, __sentry_template_values__: a } = e;
    return o.logentry = { message: s, params: a }, o;
  }
  return o.message = e, o;
}
function Ha(t, { isUnhandledRejection: e }) {
  const r = (function(o, s = 40) {
    const a = Object.keys(ss(o));
    a.sort();
    const l = a[0];
    if (!l) return "[object has no keys]";
    if (l.length >= s) return pt(l, s);
    for (let u = a.length; u > 0; u--) {
      const p = a.slice(0, u).join(", ");
      if (!(p.length > s)) return u === a.length ? p : pt(p, s);
    }
    return "";
  })(t), n = e ? "promise rejection" : "exception";
  return rs(t) ? `Event \`ErrorEvent\` captured as ${n} with message \`${t.message}\`` : Mr(t) ? `Event \`${(function(o) {
    try {
      const s = Object.getPrototypeOf(o);
      return s ? s.constructor.name : void 0;
    } catch {
    }
  })(t)}\` (type=${t.type}) captured as ${n}` : `Object captured as ${n} with keys: ${r}`;
}
class Ga extends Pa {
  constructor(e) {
    const r = { parentSpanIsAlwaysRootSpan: !0, ...e };
    (function(n, o, s = [o], a = "npm") {
      const l = n._metadata || {};
      l.sdk || (l.sdk = { name: `sentry.javascript.${o}`, packages: s.map((u) => ({ name: `${a}:@sentry/${u}`, version: Ye })), version: Ye }), n._metadata = l;
    })(r, "browser", ["browser"], Q.SENTRY_SDK_SOURCE || "npm"), super(r), r.sendClientReports && Q.document && Q.document.addEventListener("visibilitychange", () => {
      Q.document.visibilityState === "hidden" && this._flushOutcomes();
    });
  }
  eventFromException(e, r) {
    return (function(n, o, s, a) {
      const l = pn(n, o, s && s.syntheticException || void 0, a);
      return mt(l), l.level = "error", s && s.event_id && (l.event_id = s.event_id), rt(l);
    })(this._options.stackParser, e, r, this._options.attachStacktrace);
  }
  eventFromMessage(e, r = "info", n) {
    return (function(o, s, a = "info", l, u) {
      const p = hn(o, s, l && l.syntheticException || void 0, u);
      return p.level = a, l && l.event_id && (p.event_id = l.event_id), rt(p);
    })(this._options.stackParser, e, r, n, this._options.attachStacktrace);
  }
  captureUserFeedback(e) {
    if (!this._isEnabled()) return void (Tr && N.warn("SDK not enabled, will not capture user feedback."));
    const r = (function(n, { metadata: o, tunnel: s, dsn: a }) {
      const l = { event_id: n.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...o && o.sdk && { sdk: { name: o.sdk.name, version: o.sdk.version } }, ...!!s && !!a && { dsn: gr(a) } };
      return It(l, [/* @__PURE__ */ (function(p) {
        return [{ type: "user_report" }, p];
      })(n)]);
    })(e, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
    this.sendEnvelope(r);
  }
  _prepareEvent(e, r, n) {
    return e.platform = e.platform || "javascript", super._prepareEvent(e, r, n);
  }
}
const Qa = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, ae = q;
let Hi, Dr, Nr, Yt;
function Ya() {
  if (!ae.document) return;
  const t = we.bind(null, "dom"), e = Gi(t, !0);
  ae.document.addEventListener("click", e, !1), ae.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((r) => {
    const n = ae[r], o = n && n.prototype;
    o && o.hasOwnProperty && o.hasOwnProperty("addEventListener") && (pe(o, "addEventListener", function(s) {
      return function(a, l, u) {
        if (a === "click" || a == "keypress") try {
          const p = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, m = p[a] = p[a] || { refCount: 0 };
          if (!m.handler) {
            const v = Gi(t);
            m.handler = v, s.call(this, a, v, u);
          }
          m.refCount++;
        } catch {
        }
        return s.call(this, a, l, u);
      };
    }), pe(o, "removeEventListener", function(s) {
      return function(a, l, u) {
        if (a === "click" || a == "keypress") try {
          const p = this.__sentry_instrumentation_handlers__ || {}, m = p[a];
          m && (m.refCount--, m.refCount <= 0 && (s.call(this, a, m.handler, u), m.handler = void 0, delete p[a]), Object.keys(p).length === 0 && delete this.__sentry_instrumentation_handlers__);
        } catch {
        }
        return s.call(this, a, l, u);
      };
    }));
  });
}
function Gi(t, e = !1) {
  return (r) => {
    if (!r || r._sentryCaptured) return;
    const n = (function(s) {
      try {
        return s.target;
      } catch {
        return null;
      }
    })(r);
    if ((function(s, a) {
      return s === "keypress" && (!a || !a.tagName || a.tagName !== "INPUT" && a.tagName !== "TEXTAREA" && !a.isContentEditable);
    })(r.type, n)) return;
    tt(r, "_sentryCaptured", !0), n && !n._sentryId && tt(n, "_sentryId", ye());
    const o = r.type === "keypress" ? "input" : r.type;
    (function(s) {
      if (s.type !== Dr) return !1;
      try {
        if (!s.target || s.target._sentryId !== Nr) return !1;
      } catch {
      }
      return !0;
    })(r) || (t({ event: r, name: o, global: e }), Dr = r.type, Nr = n ? n._sentryId : void 0), clearTimeout(Hi), Hi = ae.setTimeout(() => {
      Nr = void 0, Dr = void 0;
    }, 1e3);
  };
}
function gs(t) {
  const e = "history";
  Ke(e, t), Xe(e, Ka);
}
function Ka() {
  if (!(function() {
    const r = Qt.chrome, n = r && r.app && r.app.runtime, o = "history" in Qt && !!Qt.history.pushState && !!Qt.history.replaceState;
    return !n && o;
  })()) return;
  const t = ae.onpopstate;
  function e(r) {
    return function(...n) {
      const o = n.length > 2 ? n[2] : void 0;
      if (o) {
        const s = Yt, a = String(o);
        Yt = a, we("history", { from: s, to: a });
      }
      return r.apply(this, n);
    };
  }
  ae.onpopstate = function(...r) {
    const n = ae.location.href, o = Yt;
    if (Yt = n, we("history", { from: o, to: n }), t) try {
      return t.apply(this, r);
    } catch {
    }
  }, pe(ae.history, "pushState", e), pe(ae.history, "replaceState", e);
}
const sr = {};
function Qi(t) {
  sr[t] = void 0;
}
const Ct = "__sentry_xhr_v3__";
function Xa() {
  if (!ae.XMLHttpRequest) return;
  const t = XMLHttpRequest.prototype;
  t.open = new Proxy(t.open, { apply(e, r, n) {
    const o = new Error(), s = 1e3 * xe(), a = Pe(n[0]) ? n[0].toUpperCase() : void 0, l = (function(p) {
      if (Pe(p)) return p;
      try {
        return p.toString();
      } catch {
      }
    })(n[1]);
    if (!a || !l) return e.apply(r, n);
    r[Ct] = { method: a, url: l, request_headers: {} }, a === "POST" && l.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
    const u = () => {
      const p = r[Ct];
      if (p && r.readyState === 4) {
        try {
          p.status_code = r.status;
        } catch {
        }
        we("xhr", { endTimestamp: 1e3 * xe(), startTimestamp: s, xhr: r, virtualError: o });
      }
    };
    return "onreadystatechange" in r && typeof r.onreadystatechange == "function" ? r.onreadystatechange = new Proxy(r.onreadystatechange, { apply: (p, m, v) => (u(), p.apply(m, v)) }) : r.addEventListener("readystatechange", u), r.setRequestHeader = new Proxy(r.setRequestHeader, { apply(p, m, v) {
      const [E, S] = v, b = m[Ct];
      return b && Pe(E) && Pe(S) && (b.request_headers[E.toLowerCase()] = S), p.apply(m, v);
    } }), e.apply(r, n);
  } }), t.send = new Proxy(t.send, { apply(e, r, n) {
    const o = r[Ct];
    return o ? (n[0] !== void 0 && (o.body = n[0]), we("xhr", { startTimestamp: 1e3 * xe(), xhr: r }), e.apply(r, n)) : e.apply(r, n);
  } });
}
function Za(t, e = (function(r) {
  const n = sr[r];
  if (n) return n;
  let o = ae[r];
  if (ln(o)) return sr[r] = o.bind(ae);
  const s = ae.document;
  if (s && typeof s.createElement == "function") try {
    const a = s.createElement("iframe");
    a.hidden = !0, s.head.appendChild(a);
    const l = a.contentWindow;
    l && l[r] && (o = l[r]), s.head.removeChild(a);
  } catch (a) {
    Qa && N.warn(`Could not create sandbox iframe for ${r} check, bailing to window.${r}: `, a);
  }
  return o && (sr[r] = o.bind(ae));
})("fetch")) {
  let r = 0, n = 0;
  return ja(t, function(o) {
    const s = o.body.length;
    r += s, n++;
    const a = { body: o.body, method: "POST", referrerPolicy: "origin", headers: t.headers, keepalive: r <= 6e4 && n < 15, ...t.fetchOptions };
    if (!e) return Qi("fetch"), fr("No fetch implementation available");
    try {
      return e(t.url, a).then((l) => (r -= s, n--, { statusCode: l.status, headers: { "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"), "retry-after": l.headers.get("Retry-After") } }));
    } catch (l) {
      return Qi("fetch"), r -= s, n--, fr(l);
    }
  });
}
function Fr(t, e, r, n) {
  const o = { filename: t, function: e === "<anonymous>" ? Qe : e, in_app: !0 };
  return r !== void 0 && (o.lineno = r), n !== void 0 && (o.colno = n), o;
}
const ec = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, tc = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, rc = /\((\S*)(?::(\d+))(?::(\d+))\)/, nc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, ic = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, oc = (function(...t) {
  const e = t.sort((r, n) => r[0] - n[0]).map((r) => r[1]);
  return (r, n = 0, o = 0) => {
    const s = [], a = r.split(`
`);
    for (let l = n; l < a.length; l++) {
      const u = a[l];
      if (u.length > 1024) continue;
      const p = ii.test(u) ? u.replace(ii, "$1") : u;
      if (!p.match(/\S*Error: /)) {
        for (const m of e) {
          const v = m(p);
          if (v) {
            s.push(v);
            break;
          }
        }
        if (s.length >= 50 + o) break;
      }
    }
    return (function(l) {
      if (!l.length) return [];
      const u = Array.from(l);
      return /sentryWrapped/.test(qt(u).function || "") && u.pop(), u.reverse(), oi.test(qt(u).function || "") && (u.pop(), oi.test(qt(u).function || "") && u.pop()), u.slice(0, 50).map((p) => ({ ...p, filename: p.filename || qt(u).filename, function: p.function || Qe }));
    })(s.slice(o));
  };
})([30, (t) => {
  const e = ec.exec(t);
  if (e) {
    const [, n, o, s] = e;
    return Fr(n, Qe, +o, +s);
  }
  const r = tc.exec(t);
  if (r) {
    if (r[2] && r[2].indexOf("eval") === 0) {
      const s = rc.exec(r[2]);
      s && (r[2] = s[1], r[3] = s[2], r[4] = s[3]);
    }
    const [n, o] = Yi(r[1] || Qe, r[2]);
    return Fr(o, n, r[3] ? +r[3] : void 0, r[4] ? +r[4] : void 0);
  }
}], [50, (t) => {
  const e = nc.exec(t);
  if (e) {
    if (e[3] && e[3].indexOf(" > eval") > -1) {
      const o = ic.exec(e[3]);
      o && (e[1] = e[1] || "eval", e[3] = o[1], e[4] = o[2], e[5] = "");
    }
    let r = e[3], n = e[1] || Qe;
    return [n, r] = Yi(n, r), Fr(r, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
  }
}]), Yi = (t, e) => {
  const r = t.indexOf("safari-extension") !== -1, n = t.indexOf("safari-web-extension") !== -1;
  return r || n ? [t.indexOf("@") !== -1 ? t.split("@")[0] : Qe, r ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e];
}, Ki = 1024, sc = (t = {}) => {
  const e = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...t };
  return { name: "Breadcrumbs", setup(r) {
    var n;
    e.console && (function(o) {
      const s = "console";
      Ke(s, o), Xe(s, Ba);
    })(/* @__PURE__ */ (function(o) {
      return function(s) {
        if (ne() !== o) return;
        const a = { category: "console", data: { arguments: s.args, logger: "console" }, level: Ra(s.level), message: ui(s.args, " ") };
        if (s.level === "assert") {
          if (s.args[0] !== !1) return;
          a.message = `Assertion failed: ${ui(s.args.slice(1), " ") || "console.assert"}`, a.data.arguments = s.args.slice(1);
        }
        qe(a, { input: s.args, level: s.level });
      };
    })(r)), e.dom && (n = /* @__PURE__ */ (function(o, s) {
      return function(a) {
        if (ne() !== o) return;
        let l, u, p = typeof s == "object" ? s.serializeAttribute : void 0, m = typeof s == "object" && typeof s.maxStringLength == "number" ? s.maxStringLength : void 0;
        m && m > Ki && (Tr && N.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${m} was configured. Sentry will use 1024 instead.`), m = Ki), typeof p == "string" && (p = [p]);
        try {
          const E = a.event, S = (function(b) {
            return !!b && !!b.target;
          })(E) ? E.target : E;
          l = is(S, { keyAttrs: p, maxStringLength: m }), u = (function(b) {
            if (!Pn.HTMLElement) return null;
            let g = b;
            for (let w = 0; w < 5; w++) {
              if (!g) return null;
              if (g instanceof HTMLElement) {
                if (g.dataset.sentryComponent) return g.dataset.sentryComponent;
                if (g.dataset.sentryElement) return g.dataset.sentryElement;
              }
              g = g.parentNode;
            }
            return null;
          })(S);
        } catch {
          l = "<unknown>";
        }
        if (l.length === 0) return;
        const v = { category: `ui.${a.name}`, message: l };
        u && (v.data = { "ui.component_name": u }), qe(v, { event: a.event, name: a.name, global: a.global });
      };
    })(r, e.dom), Ke("dom", n), Xe("dom", Ya)), e.xhr && (function(o) {
      Ke("xhr", o), Xe("xhr", Xa);
    })(/* @__PURE__ */ (function(o) {
      return function(s) {
        if (ne() !== o) return;
        const { startTimestamp: a, endTimestamp: l } = s, u = s.xhr[Ct];
        if (!a || !l || !u) return;
        const { method: p, url: m, status_code: v, body: E } = u, S = { method: p, url: m, status_code: v }, b = { xhr: s.xhr, input: E, startTimestamp: a, endTimestamp: l };
        qe({ category: "xhr", data: S, type: "http", level: qi(v) }, b);
      };
    })(r)), e.fetch && Va(/* @__PURE__ */ (function(o) {
      return function(s) {
        if (ne() !== o) return;
        const { startTimestamp: a, endTimestamp: l } = s;
        if (l && (!s.fetchData.url.match(/sentry_key/) || s.fetchData.method !== "POST")) if (s.error)
          qe({ category: "fetch", data: s.fetchData, level: "error", type: "http" }, { data: s.error, input: s.args, startTimestamp: a, endTimestamp: l });
        else {
          const u = s.response, p = { ...s.fetchData, status_code: u && u.status }, m = { input: s.args, response: u, startTimestamp: a, endTimestamp: l };
          qe({ category: "fetch", data: p, type: "http", level: qi(p.status_code) }, m);
        }
      };
    })(r)), e.history && gs(/* @__PURE__ */ (function(o) {
      return function(s) {
        if (ne() !== o) return;
        let a = s.from, l = s.to;
        const u = jr(Q.location.href);
        let p = a ? jr(a) : void 0;
        const m = jr(l);
        p && p.path || (p = u), u.protocol === m.protocol && u.host === m.host && (l = m.relative), u.protocol === p.protocol && u.host === p.host && (a = p.relative), qe({ category: "navigation", data: { from: a, to: l } });
      };
    })(r)), e.sentry && r.on("beforeSendEvent", /* @__PURE__ */ (function(o) {
      return function(s) {
        ne() === o && qe({ category: "sentry." + (s.type === "transaction" ? "transaction" : "event"), event_id: s.event_id, level: s.level, message: Fe(s) }, { event: s });
      };
    })(r));
  } };
}, ac = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], cc = (t = {}) => {
  const e = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...t };
  return { name: "BrowserApiErrors", setupOnce() {
    e.setTimeout && pe(Q, "setTimeout", Xi), e.setInterval && pe(Q, "setInterval", Xi), e.requestAnimationFrame && pe(Q, "requestAnimationFrame", lc), e.XMLHttpRequest && "XMLHttpRequest" in Q && pe(XMLHttpRequest.prototype, "send", uc);
    const r = e.eventTarget;
    r && (Array.isArray(r) ? r : ac).forEach(dc);
  } };
};
function Xi(t) {
  return function(...e) {
    const r = e[0];
    return e[0] = bt(r, { mechanism: { data: { function: Re(t) }, handled: !1, type: "instrument" } }), t.apply(this, e);
  };
}
function lc(t) {
  return function(e) {
    return t.apply(this, [bt(e, { mechanism: { data: { function: "requestAnimationFrame", handler: Re(t) }, handled: !1, type: "instrument" } })]);
  };
}
function uc(t) {
  return function(...e) {
    const r = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((n) => {
      n in r && typeof r[n] == "function" && pe(r, n, function(o) {
        const s = { mechanism: { data: { function: n, handler: Re(o) }, handled: !1, type: "instrument" } }, a = An(o);
        return a && (s.mechanism.data.handler = Re(a)), bt(o, s);
      });
    }), t.apply(this, e);
  };
}
function dc(t) {
  const e = Q[t], r = e && e.prototype;
  r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (pe(r, "addEventListener", function(n) {
    return function(o, s, a) {
      try {
        typeof s.handleEvent == "function" && (s.handleEvent = bt(s.handleEvent, { mechanism: { data: { function: "handleEvent", handler: Re(s), target: t }, handled: !1, type: "instrument" } }));
      } catch {
      }
      return n.apply(this, [o, bt(s, { mechanism: { data: { function: "addEventListener", handler: Re(s), target: t }, handled: !1, type: "instrument" } }), a]);
    };
  }), pe(r, "removeEventListener", function(n) {
    return function(o, s, a) {
      try {
        const l = s.__sentry_wrapped__;
        l && n.call(this, o, l, a);
      } catch {
      }
      return n.call(this, o, s, a);
    };
  }));
}
const pc = () => ({ name: "BrowserSession", setupOnce() {
  Q.document !== void 0 ? (Oi({ ignoreDuration: !0 }), Pi(), gs(({ from: t, to: e }) => {
    t !== void 0 && t !== e && (Oi({ ignoreDuration: !0 }), Pi());
  })) : Tr && N.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
} }), hc = (t = {}) => {
  const e = { onerror: !0, onunhandledrejection: !0, ...t };
  return { name: "GlobalHandlers", setupOnce() {
    Error.stackTraceLimit = 50;
  }, setup(r) {
    e.onerror && ((function(n) {
      (function(o) {
        const s = "error";
        Ke(s, o), Xe(s, na);
      })((o) => {
        const { stackParser: s, attachStacktrace: a } = eo();
        if (ne() !== n || Wi()) return;
        const { msg: l, url: u, line: p, column: m, error: v } = o, E = (function(S, b, g, w) {
          const _ = S.exception = S.exception || {}, C = _.values = _.values || [], O = C[0] = C[0] || {}, j = O.stacktrace = O.stacktrace || {}, A = j.frames = j.frames || [], F = w, J = g, te = Pe(b) && b.length > 0 ? b : (function() {
            try {
              return Pn.document.location.href;
            } catch {
              return "";
            }
          })();
          return A.length === 0 && A.push({ colno: F, filename: te, function: Qe, in_app: !0, lineno: J }), S;
        })(pn(s, v || l, void 0, a, !1), u, p, m);
        E.level = "error", Ti(E, { originalException: v, mechanism: { handled: !1, type: "onerror" } });
      });
    })(r), Zi("onerror")), e.onunhandledrejection && ((function(n) {
      (function(o) {
        const s = "unhandledrejection";
        Ke(s, o), Xe(s, ia);
      })((o) => {
        const { stackParser: s, attachStacktrace: a } = eo();
        if (ne() !== n || Wi()) return;
        const l = (function(p) {
          if (Zr(p)) return p;
          try {
            if ("reason" in p) return p.reason;
            if ("detail" in p && "reason" in p.detail) return p.detail.reason;
          } catch {
          }
          return p;
        })(o), u = Zr(l) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(l)}` }] } } : pn(s, l, void 0, a, !0);
        u.level = "error", Ti(u, { originalException: l, mechanism: { handled: !1, type: "onunhandledrejection" } });
      });
    })(r), Zi("onunhandledrejection"));
  } };
};
function Zi(t) {
  Tr && N.log(`Global Handler attached: ${t}`);
}
function eo() {
  const t = ne();
  return t && t.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
}
const fc = () => ({ name: "HttpContext", preprocessEvent(t) {
  if (!Q.navigator && !Q.location && !Q.document) return;
  const e = t.request && t.request.url || Q.location && Q.location.href, { referrer: r } = Q.document || {}, { userAgent: n } = Q.navigator || {}, o = { ...t.request && t.request.headers, ...r && { Referer: r }, ...n && { "User-Agent": n } }, s = { ...t.request, ...e && { url: e }, headers: o };
  t.request = s;
} }), gc = (t = {}) => {
  const e = t.limit || 5, r = t.key || "cause";
  return { name: "LinkedErrors", preprocessEvent(n, o, s) {
    const a = s.getOptions();
    Fa(Dn, a.stackParser, a.maxValueLength, r, e, n, o);
  } };
};
var to = "new", ro = "loading", no = "loaded", fn = "joining-meeting", Ge = "joined-meeting", Le = "left-meeting", ze = "error", mc = "playable", Br = "unknown", vc = "full", yc = "base", io = "no-room", bc = "end-of-life", _c = "connection-error", wc = "iframe-ready-for-launch-config", kc = "iframe-launch-config", Sc = "theme-updated", Mc = "loading", Ec = "load-attempt-failed", oo = "loaded", Cc = "started-camera", Tc = "camera-error", Oc = "joining-meeting", Pc = "joined-meeting", Ac = "left-meeting", xc = "participant-joined", jc = "participant-updated", Ic = "participant-left", Lc = "participant-counts-updated", Dc = "access-state-updated", Nc = "meeting-session-summary-updated", Fc = "meeting-session-state-updated", Bc = "waiting-participant-added", Rc = "waiting-participant-updated", Uc = "waiting-participant-removed", $c = "track-started", Vc = "track-stopped", Jc = "transcription-started", qc = "transcription-stopped", zc = "transcription-error", so = "recording-started", ao = "recording-stopped", Wc = "recording-stats", Hc = "recording-error", Gc = "recording-upload-completed", Qc = "recording-data", Yc = "app-message", Kc = "transcription-message", Xc = "remote-media-player-started", Zc = "remote-media-player-updated", el = "remote-media-player-stopped", tl = "local-screen-share-started", rl = "local-screen-share-stopped", nl = "local-screen-share-canceled", il = "active-speaker-change", ol = "active-speaker-mode-change", sl = "network-quality-change", al = "network-connection", cl = "cpu-load-change", ll = "face-counts-updated", Kt = "fullscreen", Xt = "exited-fullscreen", ul = "live-streaming-started", dl = "live-streaming-updated", pl = "live-streaming-stopped", hl = "live-streaming-error", fl = "lang-updated", gl = "receive-settings-updated", co = "input-settings-updated", lo = "nonfatal-error", Rr = "error", Ur = 4096, uo = 102400, $r = "iframe-call-message", po = "local-screen-start", ho = "daily-method-update-live-streaming-endpoints", Zt = "transmit-log", Ae = "daily-custom-track", ar = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image", FACE_DETECTION: "face-detection" }, ms = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" }, gn = { PLAY: "play", PAUSE: "pause" }, at = "daily", ct = "signalwire", Vr = ["jpg", "png", "jpeg"], ml = "add-endpoints", vl = "remove-endpoints", fo = "sip-call-transfer";
function be() {
  return !V() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
}
function V() {
  return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative";
}
function vs() {
  return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
}
function yl() {
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
  })(nt(), mr()) || V());
}
function go() {
  if (V() || !document) return !1;
  var t = document.createElement("iframe");
  return !!t.requestFullscreen || !!t.webkitRequestFullscreen;
}
var mn = "none", bl = "software", _l = "hardware", wl = (function() {
  try {
    var t, e = document.createElement("canvas"), r = !1;
    (t = e.getContext("webgl2", { failIfMajorPerformanceCaveat: !0 })) || (r = !0, t = e.getContext("webgl2"));
    var n = t != null;
    return e.remove(), n ? r ? bl : _l : mn;
  } catch {
    return mn;
  }
})();
function ys() {
  var t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
  return !V() && wl !== mn && (t ? (function() {
    return mo() ? !1 : ["Chrome", "Firefox"].includes(nt());
  })() : (function() {
    if (mo()) return !1;
    var e = nt();
    if (e === "Safari") {
      var r = Bn();
      if (r.major < 15 || r.major === 15 && r.minor < 4) return !1;
    }
    return e === "Chrome" ? Fn().major >= 77 : e === "Firefox" ? Rn().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(e);
  })());
}
function bs() {
  if (V() || _s() || typeof AudioWorkletNode > "u") return !1;
  switch (nt()) {
    case "Chrome":
    case "Firefox":
      return !0;
    case "Safari":
      var t = mr();
      return t.major > 17 || t.major === 17 && t.minor >= 4;
  }
  return !1;
}
function Jr() {
  return vs() && typeof MediaStreamTrack < "u" && !(function() {
    var t, e = nt();
    if (!be()) return !0;
    switch (e) {
      case "Chrome":
        return (t = Fn()).major && t.major > 0 && t.major < 75;
      case "Firefox":
        return (t = Rn()).major < 91;
      case "Safari":
        return (t = Bn()).major < 13 || t.major === 13 && t.minor < 1;
      default:
        return !0;
    }
  })();
}
function _s() {
  return be().match(/Linux; Android/);
}
function mo() {
  var t, e = be(), r = e.match(/Mac/) && (!V() && typeof window < "u" && (t = window) !== null && t !== void 0 && (t = t.navigator) !== null && t !== void 0 && t.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
  return !!(e.match(/Mobi/) || e.match(/Android/) || r) || !!be().match(/DailyAnd\//) || void 0;
}
function nt() {
  if (typeof window < "u") {
    var t = be();
    return ws() ? "Safari" : t.indexOf("Edge") > -1 ? "Edge" : t.match(/Chrome\//) ? "Chrome" : t.indexOf("Safari") > -1 || ks() ? "Safari" : t.indexOf("Firefox") > -1 ? "Firefox" : t.indexOf("MSIE") > -1 || t.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
  }
}
function mr() {
  switch (nt()) {
    case "Chrome":
      return Fn();
    case "Safari":
      return Bn();
    case "Firefox":
      return Rn();
    case "Edge":
      return (function() {
        var t = 0, e = 0;
        if (typeof window < "u") {
          var r = be().match(/Edge\/(\d+).(\d+)/);
          if (r) try {
            t = parseInt(r[1]), e = parseInt(r[2]);
          } catch {
          }
        }
        return { major: t, minor: e };
      })();
  }
}
function Fn() {
  var t = 0, e = 0, r = 0, n = 0, o = !1;
  if (typeof window < "u") {
    var s = be(), a = s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
    if (a) try {
      t = parseInt(a[1]), e = parseInt(a[2]), r = parseInt(a[3]), n = parseInt(a[4]), o = s.indexOf("OPR/") > -1;
    } catch {
    }
  }
  return { major: t, minor: e, build: r, patch: n, opera: o };
}
function ws() {
  return !!be().match(/\((iPad|iPhone|iPod)/i) && vs();
}
function ks() {
  return be().indexOf("AppleWebKit/605.1.15") > -1;
}
function Bn() {
  var t = 0, e = 0, r = 0;
  if (typeof window < "u") {
    var n = be().match(/Version\/(\d+).(\d+)(.(\d+))?/);
    if (n) try {
      t = parseInt(n[1]), e = parseInt(n[2]), r = parseInt(n[4]);
    } catch {
    }
    else (ws() || ks()) && (t = 14, e = 0, r = 3);
  }
  return { major: t, minor: e, point: r };
}
function Rn() {
  var t = 0, e = 0;
  if (typeof window < "u") {
    var r = be().match(/Firefox\/(\d+).(\d+)/);
    if (r) try {
      t = parseInt(r[1]), e = parseInt(r[2]);
    } catch {
    }
  }
  return { major: t, minor: e };
}
var Ss = (function() {
  return fe(function t() {
    he(this, t);
  }, [{ key: "addListenerForMessagesFromCallMachine", value: function(t, e, r) {
    St();
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(t, e, r) {
    St();
  } }, { key: "sendMessageToCallMachine", value: function(t, e, r, n) {
    St();
  } }, { key: "sendMessageToDailyJs", value: function(t, e) {
    St();
  } }, { key: "removeListener", value: function(t) {
    St();
  } }]);
})();
function vo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? vo(Object(r), !0).forEach(function(n) {
      Ce(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : vo(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Ms() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ms = function() {
    return !!t;
  })();
}
var kl = (function() {
  function t() {
    var e, r, n, o;
    return he(this, t), r = this, n = ke(n = t), (e = _r(r, Ms() ? Reflect.construct(n, [], ke(r).constructor) : n.apply(r, o)))._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return wr(t, Ss), fe(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, r, n) {
    var o = this, s = function(a) {
      if (a.data && a.data.what === "iframe-call-message" && (!a.data.callClientId || a.data.callClientId === r) && (!a.data.from || a.data.from !== "module")) {
        var l = qr({}, a.data);
        if (delete l.from, l.callbackStamp && o._messageCallbacks[l.callbackStamp]) {
          var u = l.callbackStamp;
          o._messageCallbacks[u].call(n, l), delete o._messageCallbacks[u];
        }
        delete l.what, delete l.callbackStamp, e.call(n, l);
      }
    };
    this._wrappedListeners[e] = s, window.addEventListener("message", s);
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, r, n) {
    var o = function(s) {
      var a;
      if (!(!s.data || s.data.what !== $r || !s.data.action || s.data.from && s.data.from !== "module" || s.data.callClientId && r && s.data.callClientId !== r || s != null && (a = s.data) !== null && a !== void 0 && a.callFrameId)) {
        var l = s.data;
        e.call(n, l);
      }
    };
    this._wrappedListeners[e] = o, window.addEventListener("message", o);
  } }, { key: "sendMessageToCallMachine", value: function(e, r, n, o) {
    if (!n) throw new Error("undefined callClientId. Are you trying to use a DailyCall instance previously destroyed?");
    var s = qr({}, e);
    if (s.what = $r, s.from = "module", s.callClientId = n, r) {
      var a = kr();
      this._messageCallbacks[a] = r, s.callbackStamp = a;
    }
    var l = o ? o.contentWindow : window, u = this._callMachineTargetOrigin(o);
    u && l.postMessage(s, u);
  } }, { key: "sendMessageToDailyJs", value: function(e, r) {
    e.what = $r, e.callClientId = r, e.from = "embedded", window.postMessage(e, this._targetOriginFromWindowLocation());
  } }, { key: "removeListener", value: function(e) {
    var r = this._wrappedListeners[e];
    r && (window.removeEventListener("message", r), delete this._wrappedListeners[e]);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(e, r, n) {
    var o = qr({}, e);
    o.callClientId = n;
    var s = r ? r.contentWindow : window, a = this._callMachineTargetOrigin(r);
    a && s.postMessage(o, a);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(e, r) {
    var n = function(o) {
      if (o.data && o.data.what === "iframe-call-message" && (!o.data.callClientId || o.data.callClientId === r) && (!o.data.from || o.data.from !== "module")) {
        var s = o.data;
        e(s);
      }
    };
    return this._wrappedListeners[e] = n, window.addEventListener("message", n), e;
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(e) {
    var r = this._wrappedListeners[e];
    r && (window.removeEventListener("message", r), delete this._wrappedListeners[e]);
  } }, { key: "_callMachineTargetOrigin", value: function(e) {
    return e ? e.src ? new URL(e.src).origin : void 0 : this._targetOriginFromWindowLocation();
  } }, { key: "_targetOriginFromWindowLocation", value: function() {
    return window.location.protocol === "file:" ? "*" : window.location.origin;
  } }]);
})();
function yo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Es() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Es = function() {
    return !!t;
  })();
}
var Sl = (function() {
  function t() {
    var e, r, n, o;
    return he(this, t), r = this, n = ke(n = t), e = _r(r, Es() ? Reflect.construct(n, [], ke(r).constructor) : n.apply(r, o)), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new Kr.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new Kr.EventEmitter(), e._wrappedListeners = {}, e._messageCallbacks = {}, e;
  }
  return wr(t, Ss), fe(t, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, r, n) {
    this._addListener(e, global.callMachineToDailyJsEmitter, r, n, "received call machine message");
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, r, n) {
    this._addListener(e, global.dailyJsToCallMachineEmitter, r, n, "received daily-js message");
  } }, { key: "sendMessageToCallMachine", value: function(e, r, n) {
    this._sendMessage(e, global.dailyJsToCallMachineEmitter, n, r, "sending message to call machine");
  } }, { key: "sendMessageToDailyJs", value: function(e, r) {
    this._sendMessage(e, global.callMachineToDailyJsEmitter, r, null, "sending message to daily-js");
  } }, { key: "removeListener", value: function(e) {
    var r = this._wrappedListeners[e];
    r && (global.callMachineToDailyJsEmitter.removeListener("message", r), global.dailyJsToCallMachineEmitter.removeListener("message", r), delete this._wrappedListeners[e]);
  } }, { key: "_addListener", value: function(e, r, n, o, s) {
    var a = this, l = function(u) {
      if (u.callClientId === n) {
        if (u.callbackStamp && a._messageCallbacks[u.callbackStamp]) {
          var p = u.callbackStamp;
          a._messageCallbacks[p].call(o, u), delete a._messageCallbacks[p];
        }
        e.call(o, u);
      }
    };
    this._wrappedListeners[e] = l, r.addListener("message", l);
  } }, { key: "_sendMessage", value: function(e, r, n, o, s) {
    var a = (function(u) {
      for (var p = 1; p < arguments.length; p++) {
        var m = arguments[p] != null ? arguments[p] : {};
        p % 2 ? yo(Object(m), !0).forEach(function(v) {
          Ce(u, v, m[v]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(m)) : yo(Object(m)).forEach(function(v) {
          Object.defineProperty(u, v, Object.getOwnPropertyDescriptor(m, v));
        });
      }
      return u;
    })({}, e);
    if (a.callClientId = n, o) {
      var l = kr();
      this._messageCallbacks[l] = o, a.callbackStamp = l;
    }
    r.emit("message", a);
  } }]);
})(), vn = "replace", yn = "shallow-merge", bo = [vn, yn], Ml = (function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.data, n = e.mergeStrategy, o = n === void 0 ? vn : n;
    he(this, t), t._validateMergeStrategy(o), t._validateData(r, o), this.mergeStrategy = o, this.data = r;
  }
  return fe(t, [{ key: "isNoOp", value: function() {
    return t.isNoOpUpdate(this.data, this.mergeStrategy);
  } }], [{ key: "isNoOpUpdate", value: function(e, r) {
    return Object.keys(e).length === 0 && r === yn;
  } }, { key: "_validateMergeStrategy", value: function(e) {
    if (!bo.includes(e)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(bo, "]"));
  } }, { key: "_validateData", value: function(e, r) {
    if (!(function(l) {
      if (l == null || R(l) !== "object") return !1;
      var u = Object.getPrototypeOf(l);
      return u == null || u === Object.prototype;
    })(e)) throw Error("Meeting session data must be a plain (map-like) object");
    var n;
    try {
      if (n = JSON.stringify(e), r === vn) {
        var o = JSON.parse(n);
        se(o, e) || console.warn("The meeting session data provided will be modified when serialized.", o, e);
      } else if (r === yn) {
        for (var s in e) if (Object.hasOwnProperty.call(e, s) && e[s] !== void 0) {
          var a = JSON.parse(JSON.stringify(e[s]));
          se(e[s], a) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", a, e[s]);
        }
      }
    } catch (l) {
      throw Error("Meeting session data must be serializable to JSON: ".concat(l));
    }
    if (n.length > uo) throw Error("Meeting session data is too large (".concat(n.length, " characters). Maximum size suppported is ").concat(uo, "."));
  } }]);
})();
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
function bn(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return bn = function(r) {
    if (r === null || !(function(o) {
      try {
        return Function.toString.call(o).indexOf("[native code]") !== -1;
      } catch {
        return typeof o == "function";
      }
    })(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (e !== void 0) {
      if (e.has(r)) return e.get(r);
      e.set(r, n);
    }
    function n() {
      return (function(o, s, a) {
        if (Cs()) return Reflect.construct.apply(null, arguments);
        var l = [null];
        l.push.apply(l, s);
        var u = new (o.bind.apply(o, l))();
        return a && jt(u, a.prototype), u;
      })(r, arguments, ke(this).constructor);
    }
    return n.prototype = Object.create(r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), jt(n, r);
  }, bn(t);
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
function _o(t) {
  var e, r = (e = window._daily) === null || e === void 0 ? void 0 : e.pendings;
  if (r) {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  }
}
var El = (function() {
  return fe(function t(e) {
    he(this, t), this._currentLoad = null, this._callClientId = e, this._publicPath = null;
  }, [{ key: "load", value: function() {
    var t, e = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0;
    if (this.loaded) return window._daily.instances[this._callClientId].callMachine.reset(), window._daily.instances[this._callClientId].publicPath = this._publicPath, void n(!0);
    t = this._callClientId, window._daily.pendings.push(t), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new Cl(r, function(s) {
      var a = s.substring(0, s.lastIndexOf("/"));
      a.length && a.slice(-1) !== "/" && (a += "/"), e._publicPath = a, window._daily.instances[e._callClientId].publicPath = a, Ko(En(s)), n(!1);
    }, function(s, a) {
      a || _o(e._callClientId), o(s, a);
    }), this._currentLoad.start();
  } }, { key: "cancel", value: function() {
    this._currentLoad && this._currentLoad.cancel(), _o(this._callClientId);
  } }, { key: "loaded", get: function() {
    return this._currentLoad && this._currentLoad.succeeded;
  } }]);
})(), Cl = (function() {
  return fe(function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0;
    he(this, t), this._dailyConfig = e, this._successCallback = r, this._failureCallback = n, this._urls = (function(o) {
      var s;
      if (Zo(o)) return [ur(o)];
      var a = (s = ge ?? es()) !== null && s !== void 0 ? s : ie[0];
      return (a === ie[0] ? ie : [a].concat(Yo(ie.filter(function(l) {
        return l !== a;
      })))).map(function(l) {
        return ur(o, l);
      });
    })(e), this._networkTimeoutMs = Tl, this._passesRemaining = 3, this._urlIndex = 0, this._currentAttempt = null;
  }, [{ key: "start", value: function() {
    this._currentAttempt || this._startAttempt();
  } }, { key: "_startAttempt", value: function() {
    this._currentAttempt = new Ol(this._dailyConfig, this._urls[this._urlIndex], this._networkTimeoutMs, this._successCallback, this._retryOrFailureCallback.bind(this)), this._currentAttempt.start();
  } }, { key: "_retryOrFailureCallback", value: function(t) {
    var e = this;
    if (!this._currentAttempt.cancelled) {
      this._urlIndex++;
      var r = this._urlIndex < this._urls.length, n = this._passesRemaining > 1, o = r || n;
      this._failureCallback(t, o), o && (r ? this._startAttempt() : (this._passesRemaining--, this._urlIndex = 0, setTimeout(function() {
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
})(), zr = (function() {
  function t() {
    return he(this, t), e = this, n = arguments, r = ke(r = t), _r(e, Ts() ? Reflect.construct(r, n || [], ke(e).constructor) : r.apply(e, n));
    var e, r, n;
  }
  return wr(t, bn(Error)), fe(t);
})(), Tl = 2e4, Ol = (function() {
  return fe(function e(r, n, o, s, a) {
    he(this, e), this._loadAttemptImpl = V() || !r.avoidEval ? new Pl(r, n, o, s, a) : new Al(r, n, o, s, a);
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
})(), Pl = (function() {
  return fe(function o(s, a, l, u, p) {
    he(this, o), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._networkTimeoutMs = l, this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache, this._refetchHeaders = null, this._dailyConfig = s, this._url = a, this._successCallback = u, this._failureCallback = p;
  }, [{ key: "start", value: (n = D(function* () {
    var o = this._url;
    !(yield this._tryLoadFromIOSCache(o)) && this._loadFromNetwork(o);
  }), function() {
    return n.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    clearTimeout(this._networkTimeout), this.cancelled = !0;
  } }, { key: "_tryLoadFromIOSCache", value: (r = D(function* (o) {
    if (!this._iosCache) return !1;
    try {
      var s = yield this._iosCache.get(o);
      return !!this.cancelled || !!s && (s.code ? (Function('"use strict";' + s.code)(), this.succeeded = !0, this._successCallback(o), !0) : (this._refetchHeaders = s.refetchHeaders, !1));
    } catch {
      return !1;
    }
  }), function(o) {
    return r.apply(this, arguments);
  }) }, { key: "_loadFromNetwork", value: (e = D(function* (o) {
    var s = this;
    this._networkTimeout = setTimeout(function() {
      s._networkTimedOut = !0, s._failureCallback({ msg: "Timed out (>".concat(s._networkTimeoutMs, " ms) when loading call object bundle ").concat(o), type: "timeout" });
    }, this._networkTimeoutMs);
    try {
      var a = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, l = yield fetch(o, a);
      if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new zr();
      var u = yield this._getBundleCodeFromResponse(o, l);
      if (this.cancelled) throw new zr();
      Function('"use strict";' + u)(), this._iosCache && this._iosCache.set(o, u, l.headers), this.succeeded = !0, this._successCallback(o);
    } catch (p) {
      if (clearTimeout(this._networkTimeout), p instanceof zr || this.cancelled || this._networkTimedOut) return;
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
  var t, e, r, n;
})(), Al = (function() {
  return fe(function t(e, r, n, o, s) {
    he(this, t), this.cancelled = !1, this.succeeded = !1, this._dailyConfig = e, this._url = r, this._networkTimeoutMs = n, this._successCallback = o, this._failureCallback = s, this._attemptId = kr(), this._networkTimeout = null, this._scriptElement = null;
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
    var r = document.getElementsByTagName("head")[0], n = document.createElement("script");
    this._scriptElement = n, n.onload = function() {
      e._stopLoading(), e.succeeded = !0, e._successCallback(t);
    }, n.onerror = function(o) {
      e._stopLoading(), e._failureCallback({ msg: "Failed to load call object bundle ".concat(o.target.src), type: o.message });
    }, n.src = t, r.appendChild(n);
  } }, { key: "_stopLoading", value: function() {
    this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
  } }, { key: "_signUpForCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.add(this._attemptId);
  } }, { key: "_withdrawFromCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
  } }]);
})(), er = function(t, e, r) {
  return jl(t.local, e, r) === !0;
}, xl = function(t, e, r) {
  return t.local.streams && t.local.streams[e] && t.local.streams[e].stream && t.local.streams[e].stream["get".concat(r === "video" ? "Video" : "Audio", "Tracks")]()[0];
}, dt = function(t, e, r, n) {
  var o = Il(t, e, r, n);
  return o && o.pendingTrack;
}, jl = function(t, e, r) {
  if (!t) return !1;
  var n = function(s) {
    switch (s) {
      case "avatar":
        return !0;
      case "staged":
        return s;
      default:
        return !!s;
    }
  }, o = t.public.subscribedTracks;
  return o && o[e] ? ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(r) === -1 && o[e].custom ? [!0, "staged"].includes(o[e].custom) ? n(o[e].custom) : n(o[e].custom[r]) : n(o[e][r]) : !o || n(o.ALL);
}, Il = function(t, e, r, n) {
  var o = Object.values(t.streams || {}).filter(function(s) {
    return s.participantId === e && s.type === r && s.pendingTrack && s.pendingTrack.kind === n;
  }).sort(function(s, a) {
    return new Date(a.starttime) - new Date(s.starttime);
  });
  return o && o[0];
}, Ll = function(t, e) {
  var r = t.local.public.customTracks;
  if (r && r[e]) return r[e].track;
};
function wo(t, e) {
  for (var r = e.getState(), n = 0, o = ["cam", "screen"]; n < o.length; n++) for (var s = o[n], a = 0, l = ["video", "audio"]; a < l.length; a++) {
    var u = l[a], p = s === "cam" ? u : "screen".concat(u.charAt(0).toUpperCase() + u.slice(1)), m = t.tracks[p];
    if (m) {
      var v = t.local ? xl(r, s, u) : dt(r, t.session_id, s, u);
      m.state === "playable" && (m.track = v), m.persistentTrack = v;
    }
  }
}
function ko(t, e) {
  try {
    var r = e.getState();
    for (var n in t.tracks) if (!Dl(n)) {
      var o = t.tracks[n].kind;
      if (o) {
        var s = t.tracks[n];
        if (s) {
          var a = t.local ? Ll(r, n) : dt(r, t.session_id, n, o);
          s.state === "playable" && (t.tracks[n].track = a), s.persistentTrack = a;
        }
      } else console.error("unknown type for custom track");
    }
  } catch (l) {
    console.error(l);
  }
}
function Dl(t) {
  return ["video", "audio", "screenVideo", "screenAudio"].includes(t);
}
function So(t, e, r) {
  var n = r.getState();
  if (t.local) {
    if (t.audio) try {
      t.audioTrack = n.local.streams.cam.stream.getAudioTracks()[0], t.audioTrack || (t.audio = !1);
    } catch {
    }
    if (t.video) try {
      t.videoTrack = n.local.streams.cam.stream.getVideoTracks()[0], t.videoTrack || (t.video = !1);
    } catch {
    }
    if (t.screen) try {
      t.screenVideoTrack = n.local.streams.screen.stream.getVideoTracks()[0], t.screenAudioTrack = n.local.streams.screen.stream.getAudioTracks()[0], t.screenVideoTrack || t.screenAudioTrack || (t.screen = !1);
    } catch {
    }
  } else {
    var o = !0;
    try {
      var s = n.participants[t.session_id];
      s && s.public && s.public.rtcType && s.public.rtcType.impl === "peer-to-peer" && s.private && !["connected", "completed"].includes(s.private.peeringState) && (o = !1);
    } catch (m) {
      console.error(m);
    }
    if (!o) return t.audio = !1, t.audioTrack = !1, t.video = !1, t.videoTrack = !1, t.screen = !1, void (t.screenTrack = !1);
    try {
      if (n.streams, t.audio && er(n, t.session_id, "cam-audio")) {
        var a = dt(n, t.session_id, "cam", "audio");
        a && (e && e.audioTrack && e.audioTrack.id === a.id ? t.audioTrack = a : a.muted || (t.audioTrack = a)), t.audioTrack || (t.audio = !1);
      }
      if (t.video && er(n, t.session_id, "cam-video")) {
        var l = dt(n, t.session_id, "cam", "video");
        l && (e && e.videoTrack && e.videoTrack.id === l.id ? t.videoTrack = l : l.muted || (t.videoTrack = l)), t.videoTrack || (t.video = !1);
      }
      if (t.screen && er(n, t.session_id, "screen-audio")) {
        var u = dt(n, t.session_id, "screen", "audio");
        u && (e && e.screenAudioTrack && e.screenAudioTrack.id === u.id ? t.screenAudioTrack = u : u.muted || (t.screenAudioTrack = u));
      }
      if (t.screen && er(n, t.session_id, "screen-video")) {
        var p = dt(n, t.session_id, "screen", "video");
        p && (e && e.screenVideoTrack && e.screenVideoTrack.id === p.id ? t.screenVideoTrack = p : p.muted || (t.screenVideoTrack = p));
      }
      t.screenVideoTrack || t.screenAudioTrack || (t.screen = !1);
    } catch (m) {
      console.error("unexpected error matching up tracks", m);
    }
  }
}
function Nl(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = (function(u, p) {
      if (u) {
        if (typeof u == "string") return Mo(u, p);
        var m = {}.toString.call(u).slice(8, -1);
        return m === "Object" && u.constructor && (m = u.constructor.name), m === "Map" || m === "Set" ? Array.from(u) : m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m) ? Mo(u, p) : void 0;
      }
    })(t)) || e) {
      r && (t = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, l = !1;
  return { s: function() {
    r = r.call(t);
  }, n: function() {
    var u = r.next();
    return a = u.done, u;
  }, e: function(u) {
    l = !0, s = u;
  }, f: function() {
    try {
      a || r.return == null || r.return();
    } finally {
      if (l) throw s;
    }
  } };
}
function Mo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var Me = /* @__PURE__ */ new Map(), ht = null;
function Fl(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = (function(u, p) {
      if (u) {
        if (typeof u == "string") return Eo(u, p);
        var m = {}.toString.call(u).slice(8, -1);
        return m === "Object" && u.constructor && (m = u.constructor.name), m === "Map" || m === "Set" ? Array.from(u) : m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m) ? Eo(u, p) : void 0;
      }
    })(t)) || e) {
      r && (t = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, l = !1;
  return { s: function() {
    r = r.call(t);
  }, n: function() {
    var u = r.next();
    return a = u.done, u;
  }, e: function(u) {
    l = !0, s = u;
  }, f: function() {
    try {
      a || r.return == null || r.return();
    } finally {
      if (l) throw s;
    }
  } };
}
function Eo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var Ee = /* @__PURE__ */ new Map(), Ot = null;
function Bl(t) {
  Os() ? (function(e) {
    Me.has(e) || (Me.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(r) {
      Me.has(e) && (Me.get(e).lastDevicesString = JSON.stringify(r), ht || (ht = (function() {
        var n = D(function* () {
          var o, s = yield navigator.mediaDevices.enumerateDevices(), a = Nl(Me.keys());
          try {
            for (a.s(); !(o = a.n()).done; ) {
              var l = o.value, u = JSON.stringify(s);
              u !== Me.get(l).lastDevicesString && (Me.get(l).lastDevicesString = u, l(s));
            }
          } catch (p) {
            a.e(p);
          } finally {
            a.f();
          }
        });
        return function() {
          return n.apply(this, arguments);
        };
      })(), navigator.mediaDevices.addEventListener("devicechange", ht)));
    }).catch(function() {
    }));
  })(t) : (function(e) {
    Ee.has(e) || (Ee.set(e, {}), navigator.mediaDevices.enumerateDevices().then(function(r) {
      Ee.has(e) && (Ee.get(e).lastDevicesString = JSON.stringify(r), Ot || (Ot = setInterval(D(function* () {
        var n, o = yield navigator.mediaDevices.enumerateDevices(), s = Fl(Ee.keys());
        try {
          for (s.s(); !(n = s.n()).done; ) {
            var a = n.value, l = JSON.stringify(o);
            l !== Ee.get(a).lastDevicesString && (Ee.get(a).lastDevicesString = l, a(o));
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
function Rl(t) {
  Os() ? (function(e) {
    Me.has(e) && (Me.delete(e), Me.size === 0 && ht && (navigator.mediaDevices.removeEventListener("devicechange", ht), ht = null));
  })(t) : (function(e) {
    Ee.has(e) && (Ee.delete(e), Ee.size === 0 && Ot && (clearInterval(Ot), Ot = null));
  })(t);
}
function Os() {
  var t;
  return V() || ((t = navigator.mediaDevices) === null || t === void 0 ? void 0 : t.ondevicechange) !== void 0;
}
var Ul = /* @__PURE__ */ new Set();
function $l(t, e) {
  return t && t.readyState === "live" && !(function(r, n) {
    return r.muted && !Ul.has(r.id);
  })(t);
}
function Co(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function De(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Co(Object(r), !0).forEach(function(n) {
      Ce(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Co(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Tt = Object.freeze({ VIDEO: "video", AUDIO: "audio", SCREEN_VIDEO: "screenVideo", SCREEN_AUDIO: "screenAudio", CUSTOM_VIDEO: "customVideo", CUSTOM_AUDIO: "customAudio" }), Vl = Object.freeze({ PARTICIPANTS: "participants", STREAMING: "streaming", TRANSCRIPTION: "transcription" }), Pt = Object.values(Tt), To = ["v", "a", "sv", "sa", "cv", "ca"];
Object.freeze(Pt.reduce(function(t, e, r) {
  return t[e] = To[r], t;
}, {})), Object.freeze(To.reduce(function(t, e, r) {
  return t[e] = Pt[r], t;
}, {}));
var Jl = [Tt.VIDEO, Tt.AUDIO, Tt.SCREEN_VIDEO, Tt.SCREEN_AUDIO], Oo = Object.values(Vl), Po = ["p", "s", "t"];
Object.freeze(Oo.reduce(function(t, e, r) {
  return t[e] = Po[r], t;
}, {})), Object.freeze(Po.reduce(function(t, e, r) {
  return t[e] = Oo[r], t;
}, {}));
var Ps = (function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.base, n = e.byUserId, o = e.byParticipantId;
    he(this, t), this.base = r, this.byUserId = n, this.byParticipantId = o;
  }
  return fe(t, [{ key: "clone", value: function() {
    var e = new t();
    if (this.base instanceof X ? e.base = this.base.clone() : e.base = this.base, this.byUserId !== void 0) for (var r in e.byUserId = {}, this.byUserId) {
      var n = this.byUserId[r];
      e.byUserId[r] = n instanceof X ? n.clone() : n;
    }
    if (this.byParticipantId !== void 0) for (var o in e.byParticipantId = {}, this.byParticipantId) {
      var s = this.byParticipantId[o];
      e.byParticipantId[o] = s instanceof X ? s.clone() : s;
    }
    return e;
  } }, { key: "toJSONObject", value: function() {
    var e = {};
    if (typeof this.base == "boolean" ? e.base = this.base : this.base instanceof X && (e.base = this.base.toJSONObject()), this.byUserId !== void 0) for (var r in e.byUserId = {}, this.byUserId) {
      var n = this.byUserId[r];
      e.byUserId[r] = n instanceof X ? n.toJSONObject() : n;
    }
    if (this.byParticipantId !== void 0) for (var o in e.byParticipantId = {}, this.byParticipantId) {
      var s = this.byParticipantId[o];
      e.byParticipantId[o] = s instanceof X ? s.toJSONObject() : s;
    }
    return e;
  } }, { key: "toMinifiedJSONObject", value: function() {
    var e = {};
    if (this.base !== void 0 && (typeof this.base == "boolean" ? e.b = this.base : e.b = this.base.toMinifiedJSONObject()), this.byUserId !== void 0) for (var r in e.u = {}, this.byUserId) {
      var n = this.byUserId[r];
      e.u[r] = typeof n == "boolean" ? n : n.toMinifiedJSONObject();
    }
    if (this.byParticipantId !== void 0) for (var o in e.p = {}, this.byParticipantId) {
      var s = this.byParticipantId[o];
      e.p[o] = typeof s == "boolean" ? s : s.toMinifiedJSONObject();
    }
    return e;
  } }, { key: "normalize", value: function() {
    return this.base instanceof X && (this.base = this.base.normalize()), this.byUserId && (this.byUserId = Object.fromEntries(Object.entries(this.byUserId).map(function(e) {
      var r = Y(e, 2), n = r[0], o = r[1];
      return [n, o instanceof X ? o.normalize() : o];
    }))), this.byParticipantId && (this.byParticipantId = Object.fromEntries(Object.entries(this.byParticipantId).map(function(e) {
      var r = Y(e, 2), n = r[0], o = r[1];
      return [n, o instanceof X ? o.normalize() : o];
    }))), this;
  } }], [{ key: "fromJSONObject", value: function(e) {
    var r, n, o;
    if (e.base !== void 0 && (r = typeof e.base == "boolean" ? e.base : X.fromJSONObject(e.base)), e.byUserId !== void 0) for (var s in n = {}, e.byUserId) {
      var a = e.byUserId[s];
      n[s] = typeof a == "boolean" ? a : X.fromJSONObject(a);
    }
    if (e.byParticipantId !== void 0) for (var l in o = {}, e.byParticipantId) {
      var u = e.byParticipantId[l];
      o[l] = typeof u == "boolean" ? u : X.fromJSONObject(u);
    }
    return new t({ base: r, byUserId: n, byParticipantId: o });
  } }, { key: "fromMinifiedJSONObject", value: function(e) {
    var r, n, o;
    if (e.b !== void 0 && (r = typeof e.b == "boolean" ? e.b : X.fromMinifiedJSONObject(e.b)), e.u !== void 0) for (var s in n = {}, e.u) {
      var a = e.u[s];
      n[s] = typeof a == "boolean" ? a : X.fromMinifiedJSONObject(a);
    }
    if (e.p !== void 0) for (var l in o = {}, e.p) {
      var u = e.p[l];
      o[l] = typeof u == "boolean" ? u : X.fromMinifiedJSONObject(u);
    }
    return new t({ base: r, byUserId: n, byParticipantId: o });
  } }, { key: "validateJSONObject", value: function(e) {
    if (R(e) !== "object") return [!1, "canReceive must be an object"];
    for (var r = ["base", "byUserId", "byParticipantId"], n = 0, o = Object.keys(e); n < o.length; n++) {
      var s = o[n];
      if (!r.includes(s)) return [!1, "canReceive can only contain keys (".concat(r.join(", "), ")")];
      if (s === "base") {
        var a = Y(X.validateJSONObject(e.base, !0), 2), l = a[0], u = a[1];
        if (!l) return [!1, u];
      } else {
        if (R(e[s]) !== "object") return [!1, "invalid (non-object) value for field '".concat(s, "' in canReceive")];
        for (var p = 0, m = Object.values(e[s]); p < m.length; p++) {
          var v = m[p], E = Y(X.validateJSONObject(v), 2), S = E[0], b = E[1];
          if (!S) return [!1, b];
        }
      }
    }
    return [!0];
  } }]);
})(), X = (function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.video, n = e.audio, o = e.screenVideo, s = e.screenAudio, a = e.customVideo, l = e.customAudio;
    he(this, t), this.video = r, this.audio = n, this.screenVideo = o, this.screenAudio = s, this.customVideo = a, this.customAudio = l;
  }
  return fe(t, [{ key: "clone", value: function() {
    var e = new t();
    return this.video !== void 0 && (e.video = this.video), this.audio !== void 0 && (e.audio = this.audio), this.screenVideo !== void 0 && (e.screenVideo = this.screenVideo), this.screenAudio !== void 0 && (e.screenAudio = this.screenAudio), this.customVideo !== void 0 && (e.customVideo = De({}, this.customVideo)), this.customAudio !== void 0 && (e.customAudio = De({}, this.customAudio)), e;
  } }, { key: "toJSONObject", value: function() {
    var e = {};
    return this.video !== void 0 && (e.video = this.video), this.audio !== void 0 && (e.audio = this.audio), this.screenVideo !== void 0 && (e.screenVideo = this.screenVideo), this.screenAudio !== void 0 && (e.screenAudio = this.screenAudio), this.customVideo !== void 0 && (e.customVideo = De({}, this.customVideo)), this.customAudio !== void 0 && (e.customAudio = De({}, this.customAudio)), e;
  } }, { key: "toMinifiedJSONObject", value: function() {
    var e = {};
    return this.video !== void 0 && (e.v = this.video), this.audio !== void 0 && (e.a = this.audio), this.screenVideo !== void 0 && (e.sv = this.screenVideo), this.screenAudio !== void 0 && (e.sa = this.screenAudio), this.customVideo !== void 0 && (e.cv = De({}, this.customVideo)), this.customAudio !== void 0 && (e.ca = De({}, this.customAudio)), e;
  } }, { key: "normalize", value: function() {
    function e(r, n) {
      return r && Object.keys(r).length === 1 && r["*"] === n;
    }
    return !(this.video !== !0 || this.audio !== !0 || this.screenVideo !== !0 || this.screenAudio !== !0 || !e(this.customVideo, !0) || !e(this.customAudio, !0)) || (this.video !== !1 || this.audio !== !1 || this.screenVideo !== !1 || this.screenAudio !== !1 || !e(this.customVideo, !1) || !e(this.customAudio, !1)) && this;
  } }], [{ key: "fromBoolean", value: function(e) {
    return new t({ video: e, audio: e, screenVideo: e, screenAudio: e, customVideo: { "*": e }, customAudio: { "*": e } });
  } }, { key: "fromJSONObject", value: function(e) {
    return new t({ video: e.video, audio: e.audio, screenVideo: e.screenVideo, screenAudio: e.screenAudio, customVideo: e.customVideo !== void 0 ? De({}, e.customVideo) : void 0, customAudio: e.customAudio !== void 0 ? De({}, e.customAudio) : void 0 });
  } }, { key: "fromMinifiedJSONObject", value: function(e) {
    return new t({ video: e.v, audio: e.a, screenVideo: e.sv, screenAudio: e.sa, customVideo: e.cv, customAudio: e.ca });
  } }, { key: "validateJSONObject", value: function(e, r) {
    if (typeof e == "boolean") return [!0];
    if (R(e) !== "object") return [!1, "invalid (non-object, non-boolean) value in canReceive"];
    for (var n = Object.keys(e), o = 0, s = n; o < s.length; o++) {
      var a = s[o];
      if (!Pt.includes(a)) return [!1, "invalid media type '".concat(a, "' in canReceive")];
      if (Jl.includes(a)) {
        if (typeof e[a] != "boolean") return [!1, "invalid (non-boolean) value for media type '".concat(a, "' in canReceive")];
      } else {
        if (R(e[a]) !== "object") return [!1, "invalid (non-object) value for media type '".concat(a, "' in canReceive")];
        for (var l = 0, u = Object.values(e[a]); l < u.length; l++)
          if (typeof u[l] != "boolean") return [!1, "invalid (non-boolean) value for entry within '".concat(a, "' in canReceive")];
        if (r && e[a]["*"] === void 0) return [!1, `canReceive "base" permission must specify "*" as an entry within '`.concat(a, "'")];
      }
    }
    return r && n.length !== Pt.length ? [!1, 'canReceive "base" permission must specify all media types: '.concat(Pt.join(", "), " (or be set to a boolean shorthand)")] : [!0];
  } }]);
})(), ql = ["initialReceiveBitrate"], zl = ["initialReceiveBitrate"], Wl = ["result"], Hl = ["preserveIframe"];
function Ao(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function x(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ao(Object(r), !0).forEach(function(n) {
      Ce(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ao(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function As() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (As = function() {
    return !!t;
  })();
}
function _n(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = (function(u, p) {
      if (u) {
        if (typeof u == "string") return xo(u, p);
        var m = {}.toString.call(u).slice(8, -1);
        return m === "Object" && u.constructor && (m = u.constructor.name), m === "Map" || m === "Set" ? Array.from(u) : m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m) ? xo(u, p) : void 0;
      }
    })(t)) || e) {
      r && (t = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
      }, e: function(u) {
        throw u;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, a = !0, l = !1;
  return { s: function() {
    r = r.call(t);
  }, n: function() {
    var u = r.next();
    return a = u.done, u;
  }, e: function(u) {
    l = !0, s = u;
  }, f: function() {
    try {
      a || r.return == null || r.return();
    } finally {
      if (l) throw s;
    }
  } };
}
function xo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var We = {}, jo = "video", Gl = "voice", Io = 3e4, Lo = 4294967295, Do = V() ? { data: {} } : { data: {}, topology: "none" }, No = { present: 0, hidden: 0 }, xs = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } }, Wr = Object.keys(xs), Fo = ["state", "volume", "simulcastEncodings"], Bo = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } }, vr = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string", visualState: "'default' | 'sidebar-open' | 'active'" } }, wn = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } }, js = /^[a-zA-Z0-9_-]+$/;
function Ro(t) {
  if (t != null && R(t) === "object" && !Array.isArray(t)) {
    var e, r = {}, n = _n(Object.entries(t).slice(0, 10));
    try {
      for (n.s(); !(e = n.n()).done; ) {
        var o = Y(e.value, 2), s = o[0], a = o[1];
        typeof s != "string" || s.length > 64 || js.test(s) && typeof a == "string" && (r[s] = a.slice(0, 256));
      }
    } catch (l) {
      n.e(l);
    } finally {
      n.f();
    }
    return Object.keys(r).length ? r : void 0;
  }
}
var He = { customIntegrations: { validate: Us, help: Bs() }, customTrayButtons: { validate: Rs, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(vr)) }, url: { validate: function(t) {
  return typeof t == "string";
}, help: "url should be a string" }, baseUrl: { validate: function(t) {
  return console.warn("baseUrl is deprecated and has no effect"), typeof t == "string";
}, help: "baseUrl should be a string" }, token: { validate: function(t) {
  return typeof t == "string";
}, help: "token should be a string", queryString: "t" }, dailyConfig: { validate: function(t, e) {
  try {
    return e.validateDailyConfig(t), !0;
  } catch (r) {
    console.error("Failed to validate dailyConfig", r);
  }
  return !1;
}, help: "Unsupported dailyConfig. Check error logs for detailed info." }, reactNativeConfig: { validate: function(t) {
  return $s(t, Bo);
}, help: "reactNativeConfig should look like ".concat(JSON.stringify(Bo), ", all fields optional") }, lang: { validate: function(t) {
  return ["cs", "da", "de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sk", "sv", "tr", "user"].includes(t);
}, help: "language not supported. Options are: cs, da, de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sk, sv, tr, user" }, userName: !0, userData: { validate: function(t) {
  try {
    return Is(t), !0;
  } catch (e) {
    return console.error(e), !1;
  }
}, help: "invalid userData type provided" }, startVideoOff: !0, startAudioOff: !0, allowLocalVideo: !0, allowLocalAudio: !0, activeSpeakerMode: !0, showLeaveButton: !0, showLocalVideo: !0, showParticipantsBar: !0, showFullscreenButton: !0, showUserNameChangeUI: !0, iframeStyle: !0, customLayout: !0, cssFile: !0, cssText: !0, bodyClass: !0, videoSource: { validate: function(t, e) {
  if (typeof t == "boolean") return e._preloadCache.allowLocalVideo = t, !0;
  var r;
  if (t instanceof MediaStreamTrack) e._sharedTracks.videoTrack = t, r = { customTrack: Ae };
  else {
    if (delete e._sharedTracks.videoTrack, typeof t != "string") return console.error("videoSource must be a MediaStreamTrack, boolean, or a string"), !1;
    r = { deviceId: t };
  }
  return e._updatePreloadCacheInputSettings({ video: { settings: r } }, !1), !0;
} }, audioSource: { validate: function(t, e) {
  if (typeof t == "boolean") return e._preloadCache.allowLocalAudio = t, !0;
  var r;
  if (t instanceof MediaStreamTrack) e._sharedTracks.audioTrack = t, r = { customTrack: Ae };
  else {
    if (delete e._sharedTracks.audioTrack, typeof t != "string") return console.error("audioSource must be a MediaStreamTrack, boolean, or a string"), !1;
    r = { deviceId: t };
  }
  return e._updatePreloadCacheInputSettings({ audio: { settings: r } }, !1), !0;
} }, subscribeToTracksAutomatically: { validate: function(t, e) {
  return e._preloadCache.subscribeToTracksAutomatically = t, !0;
} }, theme: { validate: function(t) {
  var e = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], r = function(n) {
    for (var o = 0, s = Object.keys(n); o < s.length; o++) {
      var a = s[o];
      if (!e.includes(a)) return console.error('unsupported color "'.concat(a, '". Valid colors: ').concat(e.join(", "))), !1;
      if (!n[a].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(a, ' theme color should be provided in valid hex color format. Received: "').concat(n[a], '"')), !1;
    }
    return !0;
  };
  return R(t) === "object" && ("light" in t && "dark" in t || "colors" in t) ? "light" in t && "dark" in t ? "colors" in t.light ? "colors" in t.dark ? r(t.light.colors) && r(t.dark.colors) : (console.error('Dark theme is missing "colors" property.', t), !1) : (console.error('Light theme is missing "colors" property.', t), !1) : r(t.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', t), !1);
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
  var r = t.initialReceiveBitrate, n = ir(t, ql);
  if (r !== void 0 && !e._callObjectMode) throw new Error("initialReceiveBitrate is only available in call object mode");
  return (function(o) {
    if (o !== void 0 && (!Number.isInteger(o) || o < Io || o > Lo)) throw new Error("initialReceiveBitrate must be a whole number of bits per second, between ".concat(Io, " and ").concat(Lo));
  })(r), Ls(n, { allowAllParticipantsKey: !1 });
}, help: Fs({ allowAllParticipantsKey: !1 }) }, sendSettings: { validate: function(t, e) {
  return !!(function(r, n) {
    try {
      return n.validateUpdateSendSettings(r), !0;
    } catch (o) {
      return console.error("Failed to validate send settings", o), !1;
    }
  })(t, e) && (e._preloadCache.sendSettings = t, !0);
}, help: "Invalid sendSettings provided. Check error logs for detailed info." }, inputSettings: { validate: function(t, e) {
  var r;
  return !!Ds(t) && (e._inputSettings || (e._inputSettings = {}), Ns(t, (r = e.properties) === null || r === void 0 ? void 0 : r.dailyConfig, e._sharedTracks), e._updatePreloadCacheInputSettings(t, !0), !0);
}, help: kn() }, layout: { validate: function(t) {
  return t === "custom-v1" || t === "browser" || t === "none";
}, help: 'layout may only be set to "custom-v1"', queryString: "layout" }, emb: { queryString: "emb" }, embHref: { queryString: "embHref" }, dailyJsVersion: { queryString: "dailyJsVersion" }, aboutClient: { validate: function(t) {
  if (t == null) return !0;
  if (R(t) !== "object" || Array.isArray(t)) return !1;
  var e = Object.entries(t);
  if (e.length > 10) return !1;
  for (var r = 0, n = e; r < n.length; r++) {
    var o = Y(n[r], 2), s = o[0], a = o[1];
    if (typeof s != "string" || s.length > 64 || !js.test(s) || typeof a != "string" || a.length > 256) return !1;
  }
  return !0;
}, help: "aboutClient must be an object with up to ".concat(10, " entries; keys must be strings made up of characters (a-z, 0-9, _, -) and a max length of ").concat(64, "; values must be strings with a max length of ").concat(256) }, proxy: { queryString: "proxy" }, strictMode: !0, allowMultipleCallInstances: !0 }, tr = { styles: { validate: function(t) {
  for (var e in t) if (e !== "cam" && e !== "screen") return !1;
  if (t.cam) {
    for (var r in t.cam) if (r !== "div" && r !== "video") return !1;
  }
  if (t.screen) {
    for (var n in t.screen) if (n !== "div" && n !== "video") return !1;
  }
  return !0;
}, help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }" }, setSubscribedTracks: { validate: function(t, e) {
  if (e._preloadCache.subscribeToTracksAutomatically) return !1;
  var r = [!0, !1, "staged"];
  if (r.includes(t) || !V() && t === "avatar") return !0;
  var n = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"], o = function(s) {
    var a = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    for (var l in s) if (l === "custom") {
      if (!r.includes(s[l]) && !o(s[l], !0)) return !1;
    } else {
      var u = !a && !n.includes(l), p = !r.includes(s[l]);
      if (u || p) return !1;
    }
    return !0;
  };
  return o(t);
}, help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(V() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }") }, setAudio: !0, setVideo: !0, setScreenShare: { validate: function(t) {
  return t === !1;
}, help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares" }, eject: !0, updatePermissions: { validate: function(t) {
  for (var e = 0, r = Object.entries(t); e < r.length; e++) {
    var n = Y(r[e], 2), o = n[0], s = n[1];
    switch (o) {
      case "hasPresence":
        if (typeof s != "boolean") return !1;
        break;
      case "canSend":
        if (s instanceof Set || s instanceof Array || Array.isArray(s)) {
          var a, l = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], u = _n(s);
          try {
            for (u.s(); !(a = u.n()).done; ) {
              var p = a.value;
              if (!l.includes(p)) return !1;
            }
          } catch (_) {
            u.e(_);
          } finally {
            u.f();
          }
        } else if (typeof s != "boolean") return !1;
        (s instanceof Array || Array.isArray(s)) && (t.canSend = new Set(s));
        break;
      case "canReceive":
        var m = Y(Ps.validateJSONObject(s), 2), v = m[0], E = m[1];
        if (!v) return console.error(E), !1;
        break;
      case "canAdmin":
        if (s instanceof Set || s instanceof Array || Array.isArray(s)) {
          var S, b = ["participants", "streaming", "transcription"], g = _n(s);
          try {
            for (g.s(); !(S = g.n()).done; ) {
              var w = S.value;
              if (!b.includes(w)) return !1;
            }
          } catch (_) {
            g.e(_);
          } finally {
            g.f();
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
    return new Promise(function(r, n) {
      var o = [];
      e.forEach(function(s) {
        return Promise.resolve(s).then(function(a) {
          r(a);
        }).catch(function(a) {
          o.push(a), o.length === e.length && n(o);
        });
      });
    });
  });
  return function(e) {
    return t.apply(this, arguments);
  };
})());
var Uo = (function() {
  function t(i) {
    var d, c, h, f, k, M, T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (he(this, t), h = this, f = ke(f = t), Ce(c = _r(h, As() ? Reflect.construct(f, [], ke(h).constructor) : f.apply(h, k)), "startListeningForDeviceChanges", function() {
      Bl(c.handleDeviceChange);
    }), Ce(c, "stopListeningForDeviceChanges", function() {
      Rl(c.handleDeviceChange);
    }), Ce(c, "handleDeviceChange", function(G) {
      G = G.map(function(oe) {
        return JSON.parse(JSON.stringify(oe));
      }), c.emitDailyJSEvent({ action: "available-devices-updated", availableDevices: G });
    }), Ce(c, "handleNativeAppStateChange", (function() {
      var G = D(function* (oe) {
        if (oe === "destroyed") return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield c.destroy());
        var $e = oe === "active";
        c.disableReactNativeAutoDeviceManagement("video") || ($e ? c.camUnmutedBeforeLosingNativeActiveState && c.setLocalVideo(!0) : (c.camUnmutedBeforeLosingNativeActiveState = c.localVideo(), c.camUnmutedBeforeLosingNativeActiveState && c.setLocalVideo(!1)));
      });
      return function(oe) {
        return G.apply(this, arguments);
      };
    })()), Ce(c, "handleNativeAudioFocusChange", function(G) {
      c.disableReactNativeAutoDeviceManagement("audio") || (c._hasNativeAudioFocus = G, c.toggleParticipantAudioBasedOnNativeAudioFocus(), c._hasNativeAudioFocus ? c.micUnmutedBeforeLosingNativeAudioFocus && c.setLocalAudio(!0) : (c.micUnmutedBeforeLosingNativeAudioFocus = c.localAudio(), c.setLocalAudio(!1)));
    }), Ce(c, "handleNativeSystemScreenCaptureStop", function() {
      c.stopScreenShare();
    }), !Jr() && !V()) throw new Error("WebRTC not supported or suppressed");
    if (c.strictMode = T.strictMode === void 0 || T.strictMode, c.allowMultipleCallInstances = (d = T.allowMultipleCallInstances) !== null && d !== void 0 && d, Object.keys(We).length && (c._logDuplicateInstanceAttempt(), !c.allowMultipleCallInstances)) {
      if (c.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
      console.warn("Using strictMode: false to allow multiple call instances is now deprecated. Set `allowMultipleCallInstances: true`");
    }
    if (window._daily || (window._daily = { pendings: [], instances: {} }), c.callClientId = kr(), We[(M = c).callClientId] = M, window._daily.instances[c.callClientId] = {}, c._sharedTracks = {}, window._daily.instances[c.callClientId].tracks = c._sharedTracks, T.dailyJsVersion = t.version(), T.aboutClient !== void 0 && (T.aboutClient = Ro(T.aboutClient)), c._iframe = i, c._callObjectMode = T.layout === "none" && !c._iframe, c._preloadCache = { subscribeToTracksAutomatically: !0, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }, T.showLocalVideo !== void 0 ? c._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : c._showLocalVideo = !!T.showLocalVideo : c._showLocalVideo = !0, T.showParticipantsBar !== void 0 ? c._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : c._showParticipantsBar = !!T.showParticipantsBar : c._showParticipantsBar = !0, T.customIntegrations !== void 0 ? c._callObjectMode ? console.error("customIntegrations is not available in call object mode") : c._customIntegrations = T.customIntegrations : c._customIntegrations = {}, T.customTrayButtons !== void 0 ? c._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : c._customTrayButtons = T.customTrayButtons : c._customTrayButtons = {}, T.activeSpeakerMode !== void 0 ? c._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : c._activeSpeakerMode = !!T.activeSpeakerMode : c._activeSpeakerMode = !1, T.receiveSettings) if (c._callObjectMode) {
      var P = T.receiveSettings;
      P.initialReceiveBitrate;
      var B = ir(P, zl);
      c._receiveSettings = B;
    } else console.error("receiveSettings is only available in call object mode");
    else c._receiveSettings = {};
    if (c.validateProperties(T), c.properties = x({}, T), c.properties.aboutClient !== void 0 && (c.properties.aboutClient = Ro(c.properties.aboutClient)), c._inputSettings || (c._inputSettings = {}), c._callObjectLoader = c._callObjectMode ? new El(c.callClientId) : null, c._callState = to, c._isPreparingToJoin = !1, c._accessState = { access: Br }, c._meetingSessionSummary = {}, c._finalSummaryOfPrevSession = {}, c._meetingSessionState = Qr(Do, c._callObjectMode), c._nativeInCallAudioMode = jo, c._participants = {}, c._isScreenSharing = !1, c._participantCounts = No, c._rmpPlayerState = {}, c._waitingParticipants = {}, c._network = { threshold: "good", quality: 100, networkState: "unknown", stats: {} }, c._activeSpeaker = {}, c._localAudioLevel = 0, c._isLocalAudioLevelObserverRunning = !1, c._remoteParticipantsAudioLevel = {}, c._isRemoteParticipantsAudioLevelObserverRunning = !1, c._maxAppMessageSize = Ur, c._messageChannel = V() ? new Sl() : new kl(), c._iframe && (c._iframe.requestFullscreen ? c._iframe.addEventListener("fullscreenchange", function() {
      document.fullscreenElement === c._iframe ? (c.emitDailyJSEvent({ action: Kt }), c.sendMessageToCallMachine({ action: Kt })) : (c.emitDailyJSEvent({ action: Xt }), c.sendMessageToCallMachine({ action: Xt }));
    }) : c._iframe.webkitRequestFullscreen && c._iframe.addEventListener("webkitfullscreenchange", function() {
      document.webkitFullscreenElement === c._iframe ? (c.emitDailyJSEvent({ action: Kt }), c.sendMessageToCallMachine({ action: Kt })) : (c.emitDailyJSEvent({ action: Xt }), c.sendMessageToCallMachine({ action: Xt }));
    })), V()) {
      var U = c.nativeUtils();
      U.addAudioFocusChangeListener && U.removeAudioFocusChangeListener && U.addAppStateChangeListener && U.removeAppStateChangeListener && U.addSystemScreenCaptureStopListener && U.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), c._hasNativeAudioFocus = !0, U.addAudioFocusChangeListener(c.handleNativeAudioFocusChange), U.addAppStateChangeListener(c.handleNativeAppStateChange), U.addSystemScreenCaptureStopListener(c.handleNativeSystemScreenCaptureStop);
    }
    return c._callObjectMode && c.startListeningForDeviceChanges(), c._messageChannel.addListenerForMessagesFromCallMachine(c.handleMessageFromCallMachine, c.callClientId, c), c;
  }
  return wr(t, Jt), fe(t, [{ key: "destroy", value: (Kn = D(function* () {
    var i;
    try {
      yield this.leave();
    } catch {
    }
    var d = this._iframe;
    if (d) {
      var c = d.parentElement;
      c && c.removeChild(d);
    }
    if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), V()) {
      var h = this.nativeUtils();
      h.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), h.removeAppStateChangeListener(this.handleNativeAppStateChange), h.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
    }
    this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0, this.emitDailyJSEvent({ action: "call-instance-destroyed" }), delete We[this.callClientId], !((i = window) === null || i === void 0 || (i = i._daily) === null || i === void 0) && i.instances && delete window._daily.instances[this.callClientId], this.strictMode && (this.callClientId = void 0);
  }), function() {
    return Kn.apply(this, arguments);
  }) }, { key: "isDestroyed", value: function() {
    return !!this._destroyed;
  } }, { key: "loadCss", value: function(i) {
    var d = i.bodyClass, c = i.cssFile, h = i.cssText;
    return $(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(c), bodyClass: d, cssText: h }), this;
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
    for (var c in d) {
      if (!tr[c]) throw new Error("unrecognized updateParticipant property ".concat(c));
      if (tr[c].validate && !tr[c].validate(d[c], this, this._participants[i])) throw new Error(tr[c].help);
    }
  } }, { key: "updateParticipant", value: function(i, d) {
    return this._participants.local && this._participants.local.session_id === i && (i = "local"), i && d && (this.validateParticipantProperties(i, d), this.sendMessageToCallMachine({ action: "update-participant", id: i, properties: d })), this;
  } }, { key: "updateParticipants", value: function(i) {
    var d = this._participants.local && this._participants.local.session_id;
    for (var c in i) c === d && (c = "local"), c && i[c] && this.validateParticipantProperties(c, i[c]);
    return this.sendMessageToCallMachine({ action: "update-participants", participants: i }), this;
  } }, { key: "updateWaitingParticipant", value: (Yn = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (le(this._callObjectMode, "updateWaitingParticipant()"), z(this._callState, "updateWaitingParticipant()"), typeof d != "string" || R(c) !== "object") throw new Error("updateWaitingParticipant() must take an id string and a updates object");
    return new Promise(function(h, f) {
      i.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: d, updates: c }, function(k) {
        k.error && f(k.error), k.id || f(new Error("unknown error in updateWaitingParticipant()")), h({ id: k.id });
      });
    });
  }), function() {
    return Yn.apply(this, arguments);
  }) }, { key: "updateWaitingParticipants", value: (Qn = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "updateWaitingParticipants()"), z(this._callState, "updateWaitingParticipants()"), R(d) !== "object") throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
    return new Promise(function(c, h) {
      i.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: d }, function(f) {
        f.error && h(f.error), f.ids || h(new Error("unknown error in updateWaitingParticipants()")), c({ ids: f.ids });
      });
    });
  }), function() {
    return Qn.apply(this, arguments);
  }) }, { key: "requestAccess", value: (Gn = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = d.access, h = c === void 0 ? { level: vc } : c, f = d.name, k = f === void 0 ? "" : f;
    return le(this._callObjectMode, "requestAccess()"), z(this._callState, "requestAccess()"), new Promise(function(M, T) {
      i.sendMessageToCallMachine({ action: "daily-method-request-access", access: h, name: k }, function(P) {
        P.error && T(P.error), P.access || T(new Error("unknown error in requestAccess()")), M({ access: P.access, granted: P.granted });
      });
    });
  }), function() {
    return Gn.apply(this, arguments);
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
  } }, { key: "getReceiveSettings", value: (Hn = D(function* (i) {
    var d = this, c = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues, h = c !== void 0 && c;
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
    return Hn.apply(this, arguments);
  }) }, { key: "updateReceiveSettings", value: (Wn = D(function* (i) {
    var d = this;
    if (le(this._callObjectMode, "updateReceiveSettings()"), i?.initialReceiveBitrate !== void 0) throw new Error("initialReceiveBitrate can only be set in the receiveSettings config property, when joining");
    if (!Ls(i, { allowAllParticipantsKey: !0 })) throw new Error(Fs({ allowAllParticipantsKey: !0 }));
    return z(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(c) {
      d.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: i }, function(h) {
        c({ receiveSettings: h.receiveSettings });
      });
    });
  }), function(i) {
    return Wn.apply(this, arguments);
  }) }, { key: "_prepInputSettingsForSharing", value: function(i, d) {
    if (i) {
      var c = {};
      if (i.audio) {
        var h, f, k;
        i.audio.settings && (!Object.keys(i.audio.settings).length && d || (c.audio = { settings: x({}, i.audio.settings) })), d && (h = c.audio) !== null && h !== void 0 && (h = h.settings) !== null && h !== void 0 && h.customTrack && (c.audio.settings = { customTrack: this._sharedTracks.audioTrack });
        var M = ((f = i.audio.processor) === null || f === void 0 ? void 0 : f.type) === "none" && ((k = i.audio.processor) === null || k === void 0 ? void 0 : k._isDefaultWhenNone);
        if (i.audio.processor && !M) {
          var T = x({}, i.audio.processor);
          delete T._isDefaultWhenNone, c.audio = x(x({}, c.audio), {}, { processor: T });
        }
      }
      if (i.video) {
        var P, B, U;
        i.video.settings && (!Object.keys(i.video.settings).length && d || (c.video = { settings: x({}, i.video.settings) })), d && (P = c.video) !== null && P !== void 0 && (P = P.settings) !== null && P !== void 0 && P.customTrack && (c.video.settings = { customTrack: this._sharedTracks.videoTrack });
        var G = ((B = i.video.processor) === null || B === void 0 ? void 0 : B.type) === "none" && ((U = i.video.processor) === null || U === void 0 ? void 0 : U._isDefaultWhenNone);
        if (i.video.processor && !G) {
          var oe = x({}, i.video.processor);
          delete oe._isDefaultWhenNone, c.video = x(x({}, c.video), {}, { processor: oe });
        }
      }
      return c;
    }
  } }, { key: "getInputSettings", value: function() {
    var i = this;
    return $(), new Promise(function(d) {
      d(i._getInputSettings());
    });
  } }, { key: "_getInputSettings", value: function() {
    var i, d, c, h, f, k, M = { processor: { type: "none", _isDefaultWhenNone: !0 } };
    this._inputSettings ? (i = ((c = this._inputSettings) === null || c === void 0 ? void 0 : c.video) || M, d = ((h = this._inputSettings) === null || h === void 0 ? void 0 : h.audio) || M) : (i = ((f = this._preloadCache) === null || f === void 0 || (f = f.inputSettings) === null || f === void 0 ? void 0 : f.video) || M, d = ((k = this._preloadCache) === null || k === void 0 || (k = k.inputSettings) === null || k === void 0 ? void 0 : k.audio) || M);
    var T = { audio: d, video: i };
    return this._prepInputSettingsForSharing(T, !0);
  } }, { key: "_updatePreloadCacheInputSettings", value: function(i, d) {
    var c = this._inputSettings || {}, h = {};
    if (i.video) {
      var f, k, M;
      h.video = {}, i.video.settings ? (h.video.settings = {}, d || i.video.settings.customTrack || (M = c.video) === null || M === void 0 || !M.settings ? h.video.settings = i.video.settings : h.video.settings = x(x({}, c.video.settings), i.video.settings), Object.keys(h.video.settings).length || delete h.video.settings) : (f = c.video) !== null && f !== void 0 && f.settings && (h.video.settings = c.video.settings), i.video.processor ? h.video.processor = i.video.processor : (k = c.video) !== null && k !== void 0 && k.processor && (h.video.processor = c.video.processor);
    } else c.video && (h.video = c.video);
    if (i.audio) {
      var T, P, B;
      h.audio = {}, i.audio.settings ? (h.audio.settings = {}, d || i.audio.settings.customTrack || (B = c.audio) === null || B === void 0 || !B.settings ? h.audio.settings = i.audio.settings : h.audio.settings = x(x({}, c.audio.settings), i.audio.settings), Object.keys(h.audio.settings).length || delete h.audio.settings) : (T = c.audio) !== null && T !== void 0 && T.settings && (h.audio.settings = c.audio.settings), i.audio.processor ? h.audio.processor = i.audio.processor : (P = c.audio) !== null && P !== void 0 && P.processor && (h.audio.processor = c.audio.processor);
    } else c.audio && (h.audio = c.audio);
    this._maybeUpdateInputSettings(h);
  } }, { key: "_devicesFromInputSettings", value: function(i) {
    var d, c, h = (i == null || (d = i.video) === null || d === void 0 || (d = d.settings) === null || d === void 0 ? void 0 : d.deviceId) || null, f = (i == null || (c = i.audio) === null || c === void 0 || (c = c.settings) === null || c === void 0 ? void 0 : c.deviceId) || null, k = this._preloadCache.outputDeviceId || null;
    return { camera: h ? { deviceId: h } : {}, mic: f ? { deviceId: f } : {}, speaker: k ? { deviceId: k } : {} };
  } }, { key: "updateInputSettings", value: (zn = D(function* (i) {
    var d = this;
    return $(), Ds(i) ? i.video || i.audio ? (Ns(i, this.properties.dailyConfig, this._sharedTracks), this._callObjectMode && !this._callMachineInitialized ? (this._updatePreloadCacheInputSettings(i, !0), this._getInputSettings()) : new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: i }, function(f) {
        if (f.error) h(f.error);
        else {
          if (f.returnPreloadCache) return d._updatePreloadCacheInputSettings(i, !0), void c(d._getInputSettings());
          d._maybeUpdateInputSettings(f.inputSettings), c(d._prepInputSettingsForSharing(f.inputSettings, !0));
        }
      });
    })) : this._getInputSettings() : (console.error(kn()), Promise.reject(kn()));
  }), function(i) {
    return zn.apply(this, arguments);
  }) }, { key: "setBandwidth", value: function(i) {
    var d = i.kbs, c = i.trackConstraints;
    if ($(), this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: d, trackConstraints: c }), this;
  } }, { key: "getDailyLang", value: function() {
    var i = this;
    if ($(), this._callMachineInitialized) return new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-daily-lang" }, function(c) {
        delete c.action, delete c.callbackStamp, d(c);
      });
    });
  } }, { key: "setDailyLang", value: function(i) {
    return $(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: i }), this;
  } }, { key: "setProxyUrl", value: function(i) {
    return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: i }), this;
  } }, { key: "setIceConfig", value: function(i) {
    return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: i }), this;
  } }, { key: "meetingSessionSummary", value: function() {
    return [Le, ze].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
  } }, { key: "getMeetingSession", value: (qn = D(function* () {
    var i = this;
    return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), z(this._callState, "getMeetingSession()"), new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-meeting-session" }, function(c) {
        delete c.action, delete c.callbackStamp, d(c);
      });
    });
  }), function() {
    return qn.apply(this, arguments);
  }) }, { key: "meetingSessionState", value: function() {
    return z(this._callState, "meetingSessionState"), this._meetingSessionState;
  } }, { key: "setMeetingSessionData", value: function(i) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace";
    le(this._callObjectMode, "setMeetingSessionData()"), z(this._callState, "setMeetingSessionData");
    try {
      (function(c, h) {
        new Ml({ data: c, mergeStrategy: h });
      })(i, d);
    } catch (c) {
      throw console.error(c), c;
    }
    try {
      this.sendMessageToCallMachine({ action: "set-session-data", data: i, mergeStrategy: d });
    } catch (c) {
      throw new Error("Error setting meeting session data: ".concat(c));
    }
  } }, { key: "setUserName", value: function(i, d) {
    var c = this;
    return this.properties.userName = i, new Promise(function(h) {
      c.sendMessageToCallMachine({ action: "set-user-name", name: i ?? "", thisMeetingOnly: V() || !!d && !!d.thisMeetingOnly }, function(f) {
        delete f.action, delete f.callbackStamp, h(f);
      });
    });
  } }, { key: "setUserData", value: (Jn = D(function* (i) {
    var d = this;
    try {
      Is(i);
    } catch (c) {
      throw console.error(c), c;
    }
    if (this.properties.userData = i, this._callMachineInitialized) return new Promise(function(c) {
      try {
        d.sendMessageToCallMachine({ action: "set-user-data", userData: i }, function(h) {
          delete h.action, delete h.callbackStamp, c(h);
        });
      } catch (h) {
        throw new Error("Error setting user data: ".concat(h));
      }
    });
  }), function(i) {
    return Jn.apply(this, arguments);
  }) }, { key: "validateAudioLevelInterval", value: function(i) {
    if (i && (i < 100 || typeof i != "number")) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
  } }, { key: "startLocalAudioLevelObserver", value: function(i) {
    var d = this;
    if (typeof AudioWorkletNode > "u" && !V()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
    if (this.validateAudioLevelInterval(i), this._callMachineInitialized) return this._isLocalAudioLevelObserverRunning = !0, new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: i }, function(f) {
        d._isLocalAudioLevelObserverRunning = !f.error, f.error ? h({ error: f.error }) : c();
      });
    });
    this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: i };
  } }, { key: "isLocalAudioLevelObserverRunning", value: function() {
    return this._isLocalAudioLevelObserverRunning;
  } }, { key: "stopLocalAudioLevelObserver", value: function() {
    this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
  } }, { key: "startRemoteParticipantsAudioLevelObserver", value: function(i) {
    var d = this;
    if (this.validateAudioLevelInterval(i), this._callMachineInitialized) return this._isRemoteParticipantsAudioLevelObserverRunning = !0, new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: i }, function(f) {
        d._isRemoteParticipantsAudioLevelObserverRunning = !f.error, f.error ? h({ error: f.error }) : c();
      });
    });
    this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: i };
  } }, { key: "isRemoteParticipantsAudioLevelObserverRunning", value: function() {
    return this._isRemoteParticipantsAudioLevelObserverRunning;
  } }, { key: "stopRemoteParticipantsAudioLevelObserver", value: function() {
    this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
  } }, { key: "startCamera", value: (Vn = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "startCamera()"), Hr(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), this.needsLoad()) try {
      yield this.load(d);
    } catch (c) {
      return Promise.reject(c);
    }
    else {
      if (this._didPreAuth) {
        if (d.url && d.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
        if (d.token && d.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
      }
      this.validateProperties(d), this.properties = x(x({}, this.properties), d);
    }
    return new Promise(function(c, h) {
      i._preloadCache.inputSettings = i._prepInputSettingsForSharing(i._inputSettings, !1), i.sendMessageToCallMachine({ action: "start-camera", properties: lt(i.properties, i.callClientId), preloadCache: lt(i._preloadCache, i.callClientId) }, function(f) {
        f.error ? h(f.error) : c({ camera: f.camera, mic: f.mic, speaker: f.speaker });
      });
    });
  }), function() {
    return Vn.apply(this, arguments);
  }) }, { key: "validateCustomTrack", value: function(i, d, c) {
    if (c && c.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
    if (d && d !== "music" && d !== "speech" && !(d instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
    if (c && ["audio", "video", "cam-audio", "cam-video", "screenVideo", "screenAudio", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(c)) throw new Error("Custom track `trackName` must not match a track name already used by daily: audio, video, cam-audio, cam-video, screenVideo, screenAudio, screen-video, screen-audio, rmpAudio, rmpVideo, customVideoDefaults");
    if (!(i instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
  } }, { key: "startCustomTrack", value: function() {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { track, mode, trackName, ignoreAudioLevel };
    return $(), le(this._callObjectMode, "startCustomTrack()"), z(this._callState, "startCustomTrack()"), this.validateCustomTrack(d.track, d.mode, d.trackName), new Promise(function(c, h) {
      i._sharedTracks.customTrack = d.track, d.track = Ae, i.sendMessageToCallMachine({ action: "start-custom-track", properties: d }, function(f) {
        f.error ? h({ error: f.error }) : c(f.mediaTag);
      });
    });
  } }, { key: "stopCustomTrack", value: function(i) {
    var d = this;
    return $(), z(this._callState, "stopCustomTrack()"), new Promise(function(c) {
      d.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: i }, function(h) {
        c(h.mediaTag);
      });
    });
  } }, { key: "setCamera", value: function(i) {
    var d = this;
    return Mt(), rr(this._callMachineInitialized, "setCamera()"), new Promise(function(c) {
      d.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: i }, function(h) {
        c({ device: h.device });
      });
    });
  } }, { key: "setAudioDevice", value: (Bt = D(function* (i) {
    return Mt(), this.nativeUtils().setAudioDevice(i), { deviceId: yield this.nativeUtils().getAudioDevice() };
  }), function(i) {
    return Bt.apply(this, arguments);
  }) }, { key: "cycleCamera", value: function() {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new Promise(function(c) {
      i.sendMessageToCallMachine({ action: "cycle-camera", properties: d }, function(h) {
        c({ device: h.device });
      });
    });
  } }, { key: "cycleMic", value: function() {
    var i = this;
    return $(), new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "cycle-mic" }, function(c) {
        d({ device: c.device });
      });
    });
  } }, { key: "getCameraFacingMode", value: function() {
    var i = this;
    return Mt(), new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function(c) {
        d(c.facingMode);
      });
    });
  } }, { key: "setInputDevicesAsync", value: (kt = D(function* (i) {
    var d = this, c = i.audioDeviceId, h = i.videoDeviceId, f = i.audioSource, k = i.videoSource;
    if ($(), f !== void 0 && (c = f), k !== void 0 && (h = k), typeof c == "boolean" && (this._setAllowLocalAudio(c), c = void 0), typeof h == "boolean" && (this._setAllowLocalVideo(h), h = void 0), !c && !h) return yield this.getInputDevices();
    var M = {};
    return c && (c instanceof MediaStreamTrack ? (this._sharedTracks.audioTrack = c, c = Ae, M.audio = { settings: { customTrack: c } }) : (delete this._sharedTracks.audioTrack, M.audio = { settings: { deviceId: c } })), h && (h instanceof MediaStreamTrack ? (this._sharedTracks.videoTrack = h, h = Ae, M.video = { settings: { customTrack: h } }) : (delete this._sharedTracks.videoTrack, M.video = { settings: { deviceId: h } })), this._callObjectMode && this.needsLoad() ? (this._updatePreloadCacheInputSettings(M, !1), this._devicesFromInputSettings(this._inputSettings)) : new Promise(function(T) {
      d.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: c, videoDeviceId: h }, function(P) {
        if (delete P.action, delete P.callbackStamp, P.returnPreloadCache) return d._updatePreloadCacheInputSettings(M, !1), void T(d._devicesFromInputSettings(d._inputSettings));
        T(P);
      });
    });
  }), function(i) {
    return kt.apply(this, arguments);
  }) }, { key: "setOutputDeviceAsync", value: (ce = D(function* (i) {
    var d = this, c = i.outputDeviceId;
    if ($(), !c || typeof c != "string") throw new Error("outputDeviceId must be provided and must be a valid device id");
    return this._preloadCache.outputDeviceId = c, this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(h, f) {
      d.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: c }, function(k) {
        if (delete k.action, delete k.callbackStamp, k.error) {
          var M = new Error(k.error.message);
          return M.type = k.error.type, void f(M);
        }
        k.returnPreloadCache ? h(d._devicesFromInputSettings(d._inputSettings)) : h(k);
      });
    });
  }), function(i) {
    return ce.apply(this, arguments);
  }) }, { key: "getInputDevices", value: (H = D(function* () {
    var i = this;
    return this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-input-devices" }, function(c) {
        c.returnPreloadCache ? d(i._devicesFromInputSettings(i._inputSettings)) : d({ camera: c.camera, mic: c.mic, speaker: c.speaker });
      });
    });
  }), function() {
    return H.apply(this, arguments);
  }) }, { key: "nativeInCallAudioMode", value: function() {
    return Mt(), this._nativeInCallAudioMode;
  } }, { key: "setNativeInCallAudioMode", value: function(i) {
    if (Mt(), [jo, Gl].includes(i)) {
      if (i !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = i, !this.disableReactNativeAutoDeviceManagement("audio") && cr(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
    } else console.error("invalid in-call audio mode specified: ", i);
  } }, { key: "preAuth", value: (Ie = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (le(this._callObjectMode, "preAuth()"), Hr(this._callState, this._isPreparingToJoin, "preAuth()"), this.needsLoad() && (yield this.load(d)), !d.url) throw new Error("preAuth() requires at least a url to be provided");
    return this.validateProperties(d), this.properties = x(x({}, this.properties), d), new Promise(function(c, h) {
      i._preloadCache.inputSettings = i._prepInputSettingsForSharing(i._inputSettings, !1), i.sendMessageToCallMachine({ action: "daily-method-preauth", properties: lt(i.properties, i.callClientId), preloadCache: lt(i._preloadCache, i.callClientId) }, function(f) {
        return f.error ? h(f.error) : f.access ? (i._didPreAuth = !0, void c({ access: f.access })) : h(new Error("unknown error in preAuth()"));
      });
    });
  }), function() {
    return Ie.apply(this, arguments);
  }) }, { key: "load", value: (te = D(function* (i) {
    var d = this;
    if (this.needsLoad()) {
      if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
      if (i && (this.validateProperties(i), this.properties = x(x({}, this.properties), i)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
      if (this._updateCallState(ro), this.emitDailyJSEvent({ action: Mc }), this._callObjectMode) return new Promise(function(h, f) {
        d._callObjectLoader.cancel();
        var k = Date.now();
        d._callObjectLoader.load(d.properties.dailyConfig, function(M) {
          d._bundleLoadTime = M ? "no-op" : Date.now() - k, d._updateCallState(no), M && d.emitDailyJSEvent({ action: oo }), h();
        }, function(M, T) {
          d.emitDailyJSEvent({ action: Ec }), T || (d._handleFatalError({ action: Rr, errorMsg: M.msg, error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: M, bundleUrl: ur(d.properties.dailyConfig) } } }), f(M.msg));
        });
      });
      var c = ra(this.assembleMeetingUrl(), this.properties.dailyConfig);
      return new Promise(function(h, f) {
        var k = 0, M = function() {
          if (k >= c.length) {
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
</html>`)), d._handleFatalError({ action: Rr, errorMsg: T, error: { type: "connection-error", msg: T, details: { on: "load", sourceError: { msg: "Timed out (>".concat(25e3, " ms) when loading call frame"), type: "timeout" }, candidateCount: c.length } }, preserveIframe: !0 }), void f(T);
          }
          var P, B = c[k++];
          d._iframe.src = Xo(B, d.properties.dailyConfig);
          var U = setTimeout(function() {
            d._loadedCallback && (d._loadedCallback = null, M());
          }, 25e3);
          d._loadedCallback = function(G) {
            clearTimeout(U), d._callState !== ze ? (Ko(En(B)), d._updateCallState(no), (d.properties.cssFile || d.properties.cssText) && d.loadCss(d.properties), h()) : f(G);
          };
        };
        M();
      });
    }
  }), function(i) {
    return te.apply(this, arguments);
  }) }, { key: "join", value: (J = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this._testCallInProgress && this.stopTestCallQuality(), !d.url && !this.properties.url) {
      var c = "No room URL has been provided";
      return console.error(c), Promise.reject(new Error(c));
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
      this.validateProperties(d), this.properties = x(x({}, this.properties), d);
    }
    return d.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!d.showLocalVideo), d.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!d.showParticipantsBar), this._callState === Ge || this._callState === fn ? (console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1)) : (this._updateCallState(fn, !1), this.emitDailyJSEvent({ action: Oc }), this._preloadCache.inputSettings = this._prepInputSettingsForSharing(this._inputSettings || {}, !1), this.sendMessageToCallMachine({ action: "join-meeting", properties: lt(this.properties, this.callClientId), preloadCache: lt(this._preloadCache, this.callClientId) }, function(f) {
      f.error && i._joinedCallback && (i._joinedCallback(null, f.error), i._joinedCallback = null);
    }), new Promise(function(f, k) {
      i._joinedCallback = function(M, T) {
        if (i._callState !== ze) {
          if (T) return i._updateCallState(Le), void k(T);
          if (i._updateCallState(Ge), M) for (var P in M) {
            if (i._callObjectMode) {
              var B = i._callMachine().store;
              wo(M[P], B), ko(M[P], B), So(M[P], i._participants[P], B);
            }
            i._participants[P] = x({}, M[P]), i.toggleParticipantAudioBasedOnNativeAudioFocus();
          }
          h && i.loadCss(i.properties), f(M);
        } else k(T);
      };
    }));
  }), function() {
    return J.apply(this, arguments);
  }) }, { key: "leave", value: (F = D(function* () {
    var i = this;
    return this._testCallInProgress && this.stopTestCallQuality(), new Promise(function(d) {
      i._callState === Le || i._callState === ze ? d() : i._callObjectLoader && !i._callObjectLoader.loaded ? (i._callObjectLoader.cancel(), i._updateCallState(Le), i.resetMeetingDependentVars(), i.emitDailyJSEvent({ action: Le }), d()) : (i._resolveLeave = d, i.sendMessageToCallMachine({ action: "leave-meeting" }));
    });
  }), function() {
    return F.apply(this, arguments);
  }) }, { key: "startScreenShare", value: (A = D(function* () {
    var i = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (d.mediaStream && le(this._callObjectMode, "startScreenShare() with `mediaStream`"), rr(this._callMachineInitialized, "startScreenShare()"), d.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", d.screenVideoSendSettings), d.mediaStream && (this._sharedTracks.screenMediaStream = d.mediaStream, d.mediaStream = Ae), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS) {
      var c = this.nativeUtils();
      if (yield c.isScreenBeingCaptured()) return void this.emitDailyJSEvent({ action: lo, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
      c.setSystemScreenCaptureStartCallback(function() {
        c.setSystemScreenCaptureStartCallback(null), i.sendMessageToCallMachine({ action: po, captureOptions: d });
      }), c.presentSystemScreenCapturePrompt();
    } else this.sendMessageToCallMachine({ action: po, captureOptions: d });
  }), function() {
    return A.apply(this, arguments);
  }) }, { key: "stopScreenShare", value: function() {
    rr(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
  } }, { key: "startRecording", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = i.type;
    if (d && d !== "cloud" && d !== "cloud-audio-only" && d !== "raw-tracks" && d !== "local") throw new Error("invalid type: ".concat(d, ", allowed values 'cloud', 'cloud-audio-only', 'raw-tracks', or 'local'"));
    this.sendMessageToCallMachine(x({ action: "local-recording-start" }, i));
  } }, { key: "updateRecording", value: function(i) {
    var d = i.layout, c = d === void 0 ? { preset: "default" } : d, h = i.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: c, instanceId: h });
  } }, { key: "stopRecording", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(x({ action: "local-recording-stop" }, i));
  } }, { key: "startLiveStreaming", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(x({ action: "daily-method-start-live-streaming" }, i));
  } }, { key: "updateLiveStreaming", value: function(i) {
    var d = i.layout, c = d === void 0 ? { preset: "default" } : d, h = i.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: c, instanceId: h });
  } }, { key: "addLiveStreamingEndpoints", value: function(i) {
    var d = i.endpoints, c = i.instanceId;
    this.sendMessageToCallMachine({ action: ho, endpointsOp: ml, endpoints: d, instanceId: c });
  } }, { key: "removeLiveStreamingEndpoints", value: function(i) {
    var d = i.endpoints, c = i.instanceId;
    this.sendMessageToCallMachine({ action: ho, endpointsOp: vl, endpoints: d, instanceId: c });
  } }, { key: "stopLiveStreaming", value: function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(x({ action: "daily-method-stop-live-streaming" }, i));
  } }, { key: "validateDailyConfig", value: function(i) {
    i.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(i.camSimulcastEncodings)), i.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."), _s() && i.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
  } }, { key: "validateSimulcastEncodings", value: function(i) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, c = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    if (i) {
      if (!(i instanceof Array || Array.isArray(i))) throw new Error("encodings must be an Array");
      if (!zo(i.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
      for (var h = 0; h < i.length; h++) {
        var f = i[h];
        for (var k in this._validateEncodingLayerHasValidProperties(f), f) if (Wr.includes(k)) {
          if (typeof f[k] != "number") throw new Error("".concat(k, " must be a number"));
          if (d) {
            var M = d[k], T = M.min, P = M.max;
            if (!zo(f[k], T, P)) throw new Error("".concat(k, " value not in range. valid range: ").concat(T, " to ").concat(P));
          }
        } else if (!["active", "scalabilityMode"].includes(k)) throw new Error("Invalid key ".concat(k, ", valid keys are:") + Object.values(Wr));
        if (c && !f.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
      }
    }
  } }, { key: "startRemoteMediaPlayer", value: (j = D(function* (i) {
    var d = this, c = i.url, h = i.settings, f = h === void 0 ? { state: gn.PLAY } : h;
    try {
      (function(k) {
        if (typeof k != "string") throw new Error('url parameter must be "string" type');
      })(c), qo(f), (function(k) {
        for (var M in k) if (!Fo.includes(M)) throw new Error("Invalid key ".concat(M, ", valid keys are: ").concat(Fo));
        k.simulcastEncodings && this.validateSimulcastEncodings(k.simulcastEncodings, xs, !0);
      })(f);
    } catch (k) {
      throw console.error("invalid argument Error: ".concat(k)), console.error(`startRemoteMediaPlayer arguments must be of the form:
  { url: "playback url",
  settings?:
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`), k;
    }
    return new Promise(function(k, M) {
      d.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: c, settings: f }, function(T) {
        T.error ? M({ error: T.error, errorMsg: T.errorMsg }) : k({ session_id: T.session_id, remoteMediaPlayerState: { state: T.state, settings: T.settings } });
      });
    });
  }), function(i) {
    return j.apply(this, arguments);
  }) }, { key: "stopRemoteMediaPlayer", value: (O = D(function* (i) {
    var d = this;
    if (typeof i != "string") throw new Error(" remotePlayerID must be of type string");
    return new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: i }, function(f) {
        f.error ? h({ error: f.error, errorMsg: f.errorMsg }) : c();
      });
    });
  }), function(i) {
    return O.apply(this, arguments);
  }) }, { key: "updateRemoteMediaPlayer", value: (C = D(function* (i) {
    var d = this, c = i.session_id, h = i.settings;
    try {
      qo(h);
    } catch (f) {
      throw console.error("invalid argument Error: ".concat(f)), console.error(`updateRemoteMediaPlayer arguments must be of the form:
  session_id: "participant session",
  { settings?: {state: "play"|"pause"} }`), f;
    }
    return new Promise(function(f, k) {
      d.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: c, settings: h }, function(M) {
        M.error ? k({ error: M.error, errorMsg: M.errorMsg }) : f({ session_id: M.session_id, remoteMediaPlayerState: { state: M.state, settings: M.settings } });
      });
    });
  }), function(i) {
    return C.apply(this, arguments);
  }) }, { key: "startTranscription", value: function(i) {
    z(this._callState, "startTranscription()"), this.sendMessageToCallMachine(x({ action: "daily-method-start-transcription" }, i));
  } }, { key: "updateTranscription", value: function(i) {
    if (z(this._callState, "updateTranscription()"), !i) throw new Error("updateTranscription Error: options is mandatory");
    if (R(i) !== "object") throw new Error("updateTranscription Error: options must be object type");
    if (i.participants && !Array.isArray(i.participants)) throw new Error("updateTranscription Error: participants must be an array");
    this.sendMessageToCallMachine(x({ action: "daily-method-update-transcription" }, i));
  } }, { key: "stopTranscription", value: function(i) {
    if (z(this._callState, "stopTranscription()"), i && R(i) !== "object") throw new Error("stopTranscription Error: options must be object type");
    if (i && !i.instanceId) throw new Error('"instanceId" not provided');
    this.sendMessageToCallMachine(x({ action: "daily-method-stop-transcription" }, i));
  } }, { key: "startDialOut", value: (_ = D(function* (i) {
    var d = this;
    z(this._callState, "startDialOut()");
    var c = function(T) {
      if (T) {
        if (!Array.isArray(T)) throw new Error("Error starting dial out: audio codec must be an array");
        if (T.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
        T.forEach(function(P) {
          if (typeof P != "string") throw new Error("Error starting dial out: audio codec must be a string");
          if (P !== "OPUS" && P !== "PCMU" && P !== "PCMA" && P !== "G722") throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
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
      (function(T) {
        if (T && (c(T.audio), T.video)) {
          if (!Array.isArray(T.video)) throw new Error("Error starting dial out: video codec must be an array");
          if (T.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
          T.video.forEach(function(P) {
            if (typeof P != "string") throw new Error("Error starting dial out: video codec must be a string");
            if (P !== "H264" && P !== "VP8") throw new Error("Error starting dial out: video codec must be H264 or VP8");
          });
        }
      })(i.codecs);
    }
    if (i.phoneNumber) {
      if (typeof i.phoneNumber != "string") throw new Error("Error starting dial out: phoneNumber must be a string");
      if (!/^\+\d{1,}$/.test(i.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
      i.codecs && c(i.codecs.audio);
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
    if ($o(i), i.permissions && i.permissions.canReceive) {
      var f = Y(Ps.validateJSONObject(i.permissions.canReceive), 2), k = f[0], M = f[1];
      if (!k) throw new Error(M);
    }
    if (i.provider) {
      if (i.provider !== at && i.provider !== ct) throw new Error("Error: provider can be set only to '".concat(at, "' or '").concat(ct, "', got: ").concat(i.provider));
      if (i.phoneNumber) throw new Error("Error starting dial out: provider valid only for sipUri, not phoneNumber");
      i.provider === at && console.warn("(pre-beta) provider=".concat(at, " is currently in pre-beta, things might break!"));
    } else i.provider = ct;
    return new Promise(function(T, P) {
      d.sendMessageToCallMachine(x({ action: "dialout-start" }, i), function(B) {
        B.error ? P(B.error) : T(B);
      });
    });
  }), function(i) {
    return _.apply(this, arguments);
  }) }, { key: "startDialIn", value: (w = D(function* (i) {
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
      if (i.provider !== at && i.provider !== ct) throw new Error("Error starting dial in: provider must be '".concat(at, "' or '").concat(ct, "'"));
    } else i = x(x({}, i), {}, { provider: ct });
    return new Promise(function(c, h) {
      d.sendMessageToCallMachine(x({ action: "dialin-start", sipMode: "dial-in" }, i), function(f) {
        f.error ? h(f.error) : c(f);
      });
    });
  }), function(i) {
    return w.apply(this, arguments);
  }) }, { key: "stopDialOut", value: function(i) {
    var d = this;
    return z(this._callState, "stopDialOut()"), new Promise(function(c, h) {
      d.sendMessageToCallMachine(x({ action: "dialout-stop" }, i), function(f) {
        f.error ? h(f.error) : c(f);
      });
    });
  } }, { key: "sipCallTransfer", value: (g = D(function* (i) {
    var d = this;
    if (z(this._callState, "sipCallTransfer()"), !i) throw new Error("sipCallTransfer() requires a sessionId and toEndPoint");
    return i.useSipRefer = !1, Jo(i, "sipCallTransfer"), $o(i), new Promise(function(c, h) {
      d.sendMessageToCallMachine(x({ action: fo }, i), function(f) {
        f.error ? h(f.error) : c(f);
      });
    });
  }), function(i) {
    return g.apply(this, arguments);
  }) }, { key: "sipRefer", value: (b = D(function* (i) {
    var d = this;
    if (z(this._callState, "sipRefer()"), !i) throw new Error("sessionId and toEndPoint are mandatory parameter");
    return i.useSipRefer = !0, Jo(i, "sipRefer"), new Promise(function(c, h) {
      d.sendMessageToCallMachine(x({ action: fo }, i), function(f) {
        f.error ? h(f.error) : c(f);
      });
    });
  }), function(i) {
    return b.apply(this, arguments);
  }) }, { key: "sendDTMF", value: (S = D(function* (i) {
    var d = this;
    return z(this._callState, "sendDTMF()"), (function(c) {
      var h = c.sessionId, f = c.tones, k = c.method, M = c.digitDurationMs;
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
    })(i), i.method = i.method || "auto", i.digitDurationMs = i.digitDurationMs || 500, new Promise(function(c, h) {
      d.sendMessageToCallMachine(x({ action: "send-dtmf" }, i), function(f) {
        f.error ? h(f.error) : c(f);
      });
    });
  }), function(i) {
    return S.apply(this, arguments);
  }) }, { key: "getNetworkStats", value: function() {
    var i = this;
    return this._callState !== Ge ? Promise.resolve(x({ stats: { latest: {} } }, this._network)) : new Promise(function(d) {
      i.sendMessageToCallMachine({ action: "get-calc-stats" }, function(c) {
        d(x(x({}, i._network), {}, { stats: c.stats }));
      });
    });
  } }, { key: "testWebsocketConnectivity", value: (E = D(function* () {
    var i = this;
    if (Gr(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (d) {
      return Promise.reject(d);
    }
    return new Promise(function(d, c) {
      i.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function(h) {
        h.error ? c(h.error) : d(h.results);
      });
    });
  }), function() {
    return E.apply(this, arguments);
  }) }, { key: "abortTestWebsocketConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
  } }, { key: "_validateVideoTrackForNetworkTests", value: function(i) {
    return i ? i instanceof MediaStreamTrack ? !!$l(i) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
  } }, { key: "testCallQuality", value: (v = D(function* () {
    var i = this;
    $(), le(this._callObjectMode, "testCallQuality()"), rr(this._callMachineInitialized, "testCallQuality()", null, !0), Hr(this._callState, this._isPreparingToJoin, "testCallQuality()");
    var d = this._testCallAlreadyInProgress, c = function(f) {
      d || (i._testCallInProgress = f);
    };
    if (c(!0), this.needsLoad()) try {
      var h = this._callState;
      yield this.load(), this._callState = h;
    } catch (f) {
      return c(!1), Promise.reject(f);
    }
    return new Promise(function(f) {
      i.sendMessageToCallMachine({ action: "test-call-quality", dailyJsVersion: i.properties.dailyJsVersion }, function(k) {
        var M = k.results, T = M.result, P = ir(M, Wl);
        if (T === "failed") {
          var B, U = x({}, P);
          (B = P.error) !== null && B !== void 0 && B.details ? (P.error.details = JSON.parse(P.error.details), U.error = x(x({}, U.error), {}, { details: x({}, U.error.details) }), U.error.details.duringTest = "testCallQuality") : (U.error = U.error ? x({}, U.error) : {}, U.error.details = { duringTest: "testCallQuality" }), i._maybeSendToSentry(U);
        }
        c(!1), f(x({ result: T }, P));
      });
    });
  }), function() {
    return v.apply(this, arguments);
  }) }, { key: "stopTestCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
  } }, { key: "testConnectionQuality", value: (m = D(function* (i) {
    var d;
    V() ? (console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead"), d = yield this.testPeerToPeerCallQuality(i)) : (console.warn("testConnectionQuality() is deprecated: use testCallQuality() instead"), d = yield this.testCallQuality());
    var c = { result: d.result, secondsElapsed: d.secondsElapsed };
    return d.data && (c.data = { maxRTT: d.data.maxRoundTripTime, packetLoss: d.data.avgRecvPacketLoss }), c;
  }), function(i) {
    return m.apply(this, arguments);
  }) }, { key: "testPeerToPeerCallQuality", value: (p = D(function* (i) {
    var d = this;
    if (Gr(this._testCallInProgress, "testPeerToPeerCallQuality()"), this.needsLoad()) try {
      yield this.load();
    } catch (f) {
      return Promise.reject(f);
    }
    var c = i.videoTrack, h = i.duration;
    if (!this._validateVideoTrackForNetworkTests(c)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForConnectionQualityTest = c, new Promise(function(f, k) {
      d.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: h }, function(M) {
        M.error ? k(M.error) : f(M.results);
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
    if (Gr(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (c) {
      return Promise.reject(c);
    }
    if (!this._validateVideoTrackForNetworkTests(i)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForNetworkConnectivityTest = i, new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "test-network-connectivity" }, function(f) {
        f.error ? h(f.error) : c(f.results);
      });
    });
  }), function(i) {
    return u.apply(this, arguments);
  }) }, { key: "abortTestNetworkConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
  } }, { key: "getCpuLoadStats", value: function() {
    var i = this;
    return new Promise(function(d) {
      i._callState === Ge ? i.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function(c) {
        d(c.cpuStats);
      }) : d({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
    });
  } }, { key: "_validateEncodingLayerHasValidProperties", value: function(i) {
    var d;
    if (!(((d = Object.keys(i)) === null || d === void 0 ? void 0 : d.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(Wr));
  } }, { key: "_validateVideoSendSettings", value: function(i, d) {
    var c = i === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"], h = "Video send settings should be either an object or one of the supported presets: ".concat(c.join());
    if (typeof d == "string") {
      if (!c.includes(d)) throw new Error(h);
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
  } }, { key: "validateUpdateSendSettings", value: function(i) {
    var d = this;
    if (!i || Object.keys(i).length === 0) throw new Error("Send settings must contain at least information for one track!");
    Object.entries(i).forEach(function(c) {
      var h = Y(c, 2), f = h[0], k = h[1];
      d._validateVideoSendSettings(f, k);
    });
  } }, { key: "updateSendSettings", value: function(i) {
    var d = this;
    return this.validateUpdateSendSettings(i), this.needsLoad() ? (this._preloadCache.sendSettings = i, { sendSettings: this._preloadCache.sendSettings }) : new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: i }, function(f) {
        f.error ? h(f.error) : c(f.sendSettings);
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
  } }, { key: "enumerateDevices", value: (l = D(function* () {
    var i = this;
    if (this._callObjectMode) {
      var d = yield navigator.mediaDevices.enumerateDevices();
      return nt() === "Firefox" && mr().major > 115 && mr().major < 123 && (d = d.filter(function(c) {
        return c.kind !== "audiooutput";
      })), { devices: d.map(function(c) {
        var h = JSON.parse(JSON.stringify(c));
        if (!V() && c.kind === "videoinput" && c.getCapabilities) {
          var f, k = c.getCapabilities();
          h.facing = (k == null || (f = k.facingMode) === null || f === void 0 ? void 0 : f.length) >= 1 ? k.facingMode[0] : void 0;
        }
        return h;
      }) };
    }
    return new Promise(function(c) {
      i.sendMessageToCallMachine({ action: "enumerate-devices" }, function(h) {
        c({ devices: h.devices });
      });
    });
  }), function() {
    return l.apply(this, arguments);
  }) }, { key: "sendAppMessage", value: function(i) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
    if (z(this._callState, "sendAppMessage()"), JSON.stringify(i).length > this._maxAppMessageSize) throw new Error("Message data too large. Max size is " + this._maxAppMessageSize);
    return this.sendMessageToCallMachine({ action: "app-msg", data: i, to: d }), this;
  } }, { key: "addFakeParticipant", value: function(i) {
    return $(), z(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(x({ action: "add-fake-participant" }, i)), this;
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
    return $(), ue(this._callObjectMode, "setCustomIntegrations()"), z(this._callState, "setCustomIntegrations()"), Us(i) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: i }), this._customIntegrations = i, this) : this;
  } }, { key: "startCustomIntegrations", value: function(i) {
    var d = this;
    if ($(), ue(this._callObjectMode, "startCustomIntegrations()"), z(this._callState, "startCustomIntegrations()"), Array.isArray(i) && i.some(function(f) {
      return typeof f != "string";
    }) || !Array.isArray(i) && typeof i != "string") return console.error("startCustomIntegrations() only accepts string | string[]"), this;
    var c = typeof i == "string" ? [i] : i, h = c.filter(function(f) {
      return !(f in d._customIntegrations);
    });
    return h.length ? (console.error(`Can't find custom integration(s): "`.concat(h.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: c }), this);
  } }, { key: "stopCustomIntegrations", value: function(i) {
    var d = this;
    if ($(), ue(this._callObjectMode, "stopCustomIntegrations()"), z(this._callState, "stopCustomIntegrations()"), Array.isArray(i) && i.some(function(f) {
      return typeof f != "string";
    }) || !Array.isArray(i) && typeof i != "string") return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
    var c = typeof i == "string" ? [i] : i, h = c.filter(function(f) {
      return !(f in d._customIntegrations);
    });
    return h.length ? (console.error(`Can't find custom integration(s): "`.concat(h.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: c }), this);
  } }, { key: "customTrayButtons", value: function() {
    return ue(this._callObjectMode, "customTrayButtons()"), $(), this._customTrayButtons;
  } }, { key: "updateCustomTrayButtons", value: function(i) {
    return ue(this._callObjectMode, "updateCustomTrayButtons()"), $(), z(this._callState, "updateCustomTrayButtons()"), Rs(i) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: i }), this._customTrayButtons = i, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(vr))), this);
  } }, { key: "theme", value: function() {
    return ue(this._callObjectMode, "theme()"), this.properties.theme;
  } }, { key: "setTheme", value: function(i) {
    var d = this;
    return ue(this._callObjectMode, "setTheme()"), new Promise(function(c, h) {
      try {
        d.validateProperties({ theme: i }), d.properties.theme = x({}, i), d.sendMessageToCallMachine({ action: "set-theme", theme: d.properties.theme });
        try {
          d.emitDailyJSEvent({ action: Sc, theme: d.properties.theme });
        } catch (f) {
          console.log("could not emit 'theme-updated'", f);
        }
        c(d.properties.theme);
      } catch (f) {
        h(f);
      }
    });
  } }, { key: "requestFullscreen", value: (a = D(function* () {
    if ($(), this._iframe && !document.fullscreenElement && go()) try {
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
      i.sendMessageToCallMachine({ action: "get-sidebar-view" }, function(c) {
        d(c.view);
      });
    });
  }), function() {
    return s.apply(this, arguments);
  }) }, { key: "setSidebarView", value: function(i) {
    return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: i }), this);
  } }, { key: "room", value: (o = D(function* () {
    var i = this, d = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults, c = d === void 0 || d;
    return this._accessState.access === Br || this.needsLoad() ? this.properties.url ? { roomUrlPendingJoin: this.properties.url } : null : new Promise(function(h) {
      i.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: c }, function(f) {
        delete f.action, delete f.callbackStamp, h(f);
      });
    });
  }), function() {
    return o.apply(this, arguments);
  }) }, { key: "geo", value: (n = D(function* () {
    return console.error("The geo() function is no longer supported. Geographical decisions now depend upon domain and room settings."), { current: "" };
  }), function() {
    return n.apply(this, arguments);
  }) }, { key: "setNetworkTopology", value: (r = D(function* (i) {
    var d = this;
    return $(), z(this._callState, "setNetworkTopology()"), new Promise(function(c, h) {
      d.sendMessageToCallMachine({ action: "set-network-topology", opts: i }, function(f) {
        f.error ? h({ error: f.error }) : c({ workerId: f.workerId });
      });
    });
  }), function(i) {
    return r.apply(this, arguments);
  }) }, { key: "getNetworkTopology", value: (e = D(function* () {
    var i = this;
    return new Promise(function(d, c) {
      i.needsLoad() && d({ topology: "none" }), i.sendMessageToCallMachine({ action: "get-network-topology" }, function(h) {
        h.error ? c({ error: h.error }) : d({ topology: h.topology });
      });
    });
  }), function() {
    return e.apply(this, arguments);
  }) }, { key: "setPlayNewParticipantSound", value: function(i) {
    if ($(), typeof i != "number" && i !== !0 && i !== !1) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(i));
    this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: i });
  } }, { key: "on", value: function(i, d) {
    return Jt.prototype.on.call(this, i, d);
  } }, { key: "once", value: function(i, d) {
    return Jt.prototype.once.call(this, i, d);
  } }, { key: "off", value: function(i, d) {
    return Jt.prototype.off.call(this, i, d);
  } }, { key: "validateProperties", value: function(i) {
    var d, c;
    if (i != null && (d = i.dailyConfig) !== null && d !== void 0 && d.userMediaAudioConstraints) {
      var h, f;
      V() || console.warn("userMediaAudioConstraints is deprecated. You can override constraints with inputSettings.audio.settings, found in DailyCallOptions.");
      var k = i.inputSettings || {};
      k.audio = ((h = i.inputSettings) === null || h === void 0 ? void 0 : h.audio) || {}, k.audio.settings = ((f = i.inputSettings) === null || f === void 0 || (f = f.audio) === null || f === void 0 ? void 0 : f.settings) || {}, k.audio.settings = x(x({}, k.audio.settings), i.dailyConfig.userMediaAudioConstraints), i.inputSettings = k, delete i.dailyConfig.userMediaAudioConstraints;
    }
    if (i != null && (c = i.dailyConfig) !== null && c !== void 0 && c.userMediaVideoConstraints) {
      var M, T;
      V() || console.warn("userMediaVideoConstraints is deprecated. You can override constraints with inputSettings.video.settings, found in DailyCallOptions.");
      var P = i.inputSettings || {};
      P.video = ((M = i.inputSettings) === null || M === void 0 ? void 0 : M.video) || {}, P.video.settings = ((T = i.inputSettings) === null || T === void 0 || (T = T.video) === null || T === void 0 ? void 0 : T.settings) || {}, P.video.settings = x(x({}, P.video.settings), i.dailyConfig.userMediaVideoConstraints), i.inputSettings = P, delete i.dailyConfig.userMediaVideoConstraints;
    }
    for (var B in i) if (He[B]) {
      if (He[B].validate && !He[B].validate(i[B], this)) throw new Error("property '".concat(B, "': ").concat(He[B].help));
    } else console.warn("Ignoring unrecognized property '".concat(B, "'")), delete i[B];
  } }, { key: "assembleMeetingUrl", value: function() {
    var i, d, c = x(x({}, this.properties), {}, { emb: this.callClientId, embHref: encodeURIComponent(window.location.href), proxy: (i = this.properties.dailyConfig) !== null && i !== void 0 && i.proxyUrl ? encodeURIComponent((d = this.properties.dailyConfig) === null || d === void 0 ? void 0 : d.proxyUrl) : void 0 }), h = c.url.match(/\?/) ? "&" : "?";
    return c.url + h + Object.keys(He).filter(function(f) {
      return He[f].queryString && c[f] !== void 0;
    }).map(function(f) {
      return "".concat(He[f].queryString, "=").concat(c[f]);
    }).join("&");
  } }, { key: "needsLoad", value: function() {
    return [to, ro, Le, ze].includes(this._callState);
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
      case wc:
        this.sendMessageToCallMachine(x({ action: kc }, this.properties));
        break;
      case "call-machine-initialized":
        this._callMachineInitialized = !0;
        var d = ta(), c = { action: Zt, level: "log", code: 1011, stats: { event: "bundle load", time: this._bundleLoadTime === "no-op" ? 0 : this._bundleLoadTime, preLoaded: this._bundleLoadTime === "no-op", url: ur(this.properties.dailyConfig), resolvedBaseDomain: d, failedOver: d != null && d !== "daily.co" } };
        this.sendMessageToCallMachine(c), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
        break;
      case oo:
        this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null), this.emitDailyJSEvent(i);
        break;
      case Pc:
        var h, f = x({}, i);
        delete f.internal, this._maxAppMessageSize = ((h = i.internal) === null || h === void 0 ? void 0 : h._maxAppMessageSize) || Ur, this._joinedCallback && (this._joinedCallback(i.participants), this._joinedCallback = null), this.emitDailyJSEvent(f);
        break;
      case xc:
      case jc:
        if (this._callState === Le) return;
        if (i.participant && i.participant.session_id) {
          var k = i.participant.local ? "local" : i.participant.session_id;
          if (this._callObjectMode) {
            var M = this._callMachine().store;
            wo(i.participant, M), ko(i.participant, M), So(i.participant, this._participants[k], M);
          }
          try {
            this.maybeParticipantTracksStopped(this._participants[k], i.participant), this.maybeParticipantTracksStarted(this._participants[k], i.participant), this.maybeEventRecordingStopped(this._participants[k], i.participant), this.maybeEventRecordingStarted(this._participants[k], i.participant);
          } catch (Hs) {
            console.error("track events error", Hs);
          }
          this.compareEqualForParticipantUpdateEvent(i.participant, this._participants[k]) || (this._participants[k] = x({}, i.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus(), this.emitDailyJSEvent(i));
        }
        break;
      case Ic:
        if (i.participant && i.participant.session_id) {
          var T = this._participants[i.participant.session_id];
          T && this.maybeParticipantTracksStopped(T, null), delete this._participants[i.participant.session_id], this.emitDailyJSEvent(i);
        }
        break;
      case Lc:
        se(this._participantCounts, i.participantCounts) || (this._participantCounts = i.participantCounts, this.emitDailyJSEvent(i));
        break;
      case Dc:
        var P = { access: i.access };
        i.awaitingAccess && (P.awaitingAccess = i.awaitingAccess), se(this._accessState, P) || (this._accessState = P, this.emitDailyJSEvent(i));
        break;
      case Nc:
        if (i.meetingSession) {
          this._meetingSessionSummary = i.meetingSession, this.emitDailyJSEvent(i);
          var B = x(x({}, i), {}, { action: "meeting-session-updated" });
          this.emitDailyJSEvent(B);
        }
        break;
      case Rr:
        this._handleFatalError(i);
        break;
      case Ac:
        this._callState !== ze && this._updateCallState(Le), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null), this.emitDailyJSEvent(i);
        break;
      case "selected-devices-updated":
        i.devices && this.emitDailyJSEvent(i);
        break;
      case sl:
        var U = i.state, G = i.threshold, oe = i.quality, $e = U.state, Ve = U.reasons;
        $e === this._network.networkState && se(Ve, this._network.networkStateReasons) && G === this._network.threshold && oe === this._network.quality || (this._network.networkState = $e, this._network.networkStateReasons = Ve, this._network.quality = oe, this._network.threshold = G, i.networkState = $e, Ve.length && (i.networkStateReasons = Ve), delete i.state, this.emitDailyJSEvent(i));
        break;
      case cl:
        i && i.cpuLoadState && this.emitDailyJSEvent(i);
        break;
      case ll:
        i && i.faceCounts !== void 0 && this.emitDailyJSEvent(i);
        break;
      case il:
        var K = i.activeSpeaker;
        this._activeSpeaker.peerId !== K.peerId && (this._activeSpeaker.peerId = K.peerId, this.emitDailyJSEvent({ action: i.action, activeSpeaker: this._activeSpeaker }));
        break;
      case "show-local-video-changed":
        if (this._callObjectMode) return;
        var Se = i.show;
        this._showLocalVideo = Se, this.emitDailyJSEvent({ action: i.action, show: Se });
        break;
      case ol:
        var Je = i.enabled;
        this._activeSpeakerMode !== Je && (this._activeSpeakerMode = Je, this.emitDailyJSEvent({ action: i.action, enabled: this._activeSpeakerMode }));
        break;
      case Bc:
      case Rc:
      case Uc:
        this._waitingParticipants = i.allWaitingParticipants, this.emitDailyJSEvent({ action: i.action, participant: i.participant });
        break;
      case gl:
        se(this._receiveSettings, i.receiveSettings) || (this._receiveSettings = i.receiveSettings, this.emitDailyJSEvent({ action: i.action, receiveSettings: i.receiveSettings }));
        break;
      case co:
        this._maybeUpdateInputSettings(i.inputSettings);
        break;
      case "send-settings-updated":
        se(this._sendSettings, i.sendSettings) || (this._sendSettings = i.sendSettings, this._preloadCache.sendSettings = null, this.emitDailyJSEvent({ action: i.action, sendSettings: i.sendSettings }));
        break;
      case "local-audio-level":
        this._localAudioLevel = i.audioLevel, this._preloadCache.localAudioLevelObserver = null, this.emitDailyJSEvent(i);
        break;
      case "remote-participants-audio-level":
        this._remoteParticipantsAudioLevel = i.participantsAudioLevel, this._preloadCache.remoteParticipantsAudioLevelObserver = null, this.emitDailyJSEvent(i);
        break;
      case Xc:
        var Rt = i.session_id;
        this._rmpPlayerState[Rt] = i.playerState, this.emitDailyJSEvent(i);
        break;
      case el:
        delete this._rmpPlayerState[i.session_id], this.emitDailyJSEvent(i);
        break;
      case Zc:
        var Ut = i.session_id, st = this._rmpPlayerState[Ut];
        st && this.compareEqualForRMPUpdateEvent(st, i.remoteMediaPlayerState) || (this._rmpPlayerState[Ut] = i.remoteMediaPlayerState, this.emitDailyJSEvent(i));
        break;
      case "custom-button-click":
      case "sidebar-view-changed":
      case "pip-started":
      case "pip-stopped":
        this.emitDailyJSEvent(i);
        break;
      case Fc:
        var $t = this._meetingSessionState.topology !== (i.meetingSessionState && i.meetingSessionState.topology);
        this._meetingSessionState = Qr(i.meetingSessionState, this._callObjectMode), (this._callObjectMode || $t) && this.emitDailyJSEvent(i);
        break;
      case tl:
        this._isScreenSharing = !0, this.emitDailyJSEvent(i);
        break;
      case rl:
      case nl:
        this._isScreenSharing = !1, this.emitDailyJSEvent(i);
        break;
      case so:
      case ao:
      case Wc:
      case Hc:
      case Gc:
      case Jc:
      case qc:
      case zc:
      case Cc:
      case Tc:
      case Yc:
      case Kc:
      case "test-completed":
      case al:
      case Qc:
      case ul:
      case dl:
      case pl:
      case hl:
      case lo:
      case fl:
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
    var c = "record";
    i && (d.local || d[c] !== !1 || i[c] === d[c] || this.emitDailyJSEvent({ action: ao }));
  } }, { key: "maybeEventRecordingStarted", value: function(i, d) {
    var c = "record";
    i && (d.local || d[c] !== !0 || i[c] === d[c] || this.emitDailyJSEvent({ action: so }));
  } }, { key: "_trackStatePlayable", value: function(i) {
    return !(!i || i.state !== mc);
  } }, { key: "_trackChanged", value: function(i, d) {
    return i?.id !== d?.id;
  } }, { key: "maybeEventTrackStopped", value: function(i, d, c) {
    var h, f, k = (h = d?.tracks[i]) !== null && h !== void 0 ? h : null, M = (f = c?.tracks[i]) !== null && f !== void 0 ? f : null, T = k?.track;
    if (T) {
      var P = this._trackStatePlayable(k), B = this._trackStatePlayable(M), U = this._trackChanged(T, M?.track);
      P && (B && !U || this.emitDailyJSEvent({ action: Vc, track: T, participant: c ?? d, type: i }));
    }
  } }, { key: "maybeEventTrackStarted", value: function(i, d, c) {
    var h, f, k = (h = d?.tracks[i]) !== null && h !== void 0 ? h : null, M = (f = c?.tracks[i]) !== null && f !== void 0 ? f : null, T = M?.track;
    if (T) {
      var P = this._trackStatePlayable(k), B = this._trackStatePlayable(M), U = this._trackChanged(k?.track, T);
      B && (P && !U || this.emitDailyJSEvent({ action: $c, track: T, participant: c, type: i }));
    }
  } }, { key: "maybeParticipantTracksStopped", value: function(i, d) {
    if (i) for (var c in i.tracks) this.maybeEventTrackStopped(c, i, d);
  } }, { key: "maybeParticipantTracksStarted", value: function(i, d) {
    if (d) for (var c in d.tracks) this.maybeEventTrackStarted(c, i, d);
  } }, { key: "compareEqualForRMPUpdateEvent", value: function(i, d) {
    var c, h;
    return i.state === d.state && ((c = i.settings) === null || c === void 0 ? void 0 : c.volume) === ((h = d.settings) === null || h === void 0 ? void 0 : h.volume);
  } }, { key: "emitDailyJSEvent", value: function(i) {
    try {
      i.callClientId = this.callClientId, this.emit(i.action, i);
    } catch (d) {
      console.log("could not emit", i, d);
    }
  } }, { key: "compareEqualForParticipantUpdateEvent", value: function(i, d) {
    return !!se(i, d) && (!i.videoTrack || !d.videoTrack || i.videoTrack.id === d.videoTrack.id && i.videoTrack.muted === d.videoTrack.muted && i.videoTrack.enabled === d.videoTrack.enabled) && (!i.audioTrack || !d.audioTrack || i.audioTrack.id === d.audioTrack.id && i.audioTrack.muted === d.audioTrack.muted && i.audioTrack.enabled === d.audioTrack.enabled);
  } }, { key: "nativeUtils", value: function() {
    return V() ? typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
  } }, { key: "updateIsPreparingToJoin", value: function(i) {
    this._updateCallState(this._callState, i);
  } }, { key: "_updateCallState", value: function(i) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin;
    if (i !== this._callState || d !== this._isPreparingToJoin) {
      var c = this._callState, h = this._isPreparingToJoin;
      this._callState = i, this._isPreparingToJoin = d;
      var f = this._callState === Ge;
      this.updateShowAndroidOngoingMeetingNotification(f);
      var k = cr(c, h), M = cr(this._callState, this._isPreparingToJoin);
      k !== M && (this.updateKeepDeviceAwake(M), this.updateDeviceAudioMode(M), this.updateNoOpRecordingEnsuringBackgroundContinuity(M));
    }
  } }, { key: "_handleFatalError", value: function(i) {
    var d;
    this._iframe && !i.preserveIframe && (this._iframe.src = ""), this._updateCallState(ze), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(i.errorMsg), this._loadedCallback = null), i.preserveIframe;
    var c = ir(i, Hl);
    typeof (c == null || (d = c.error) === null || d === void 0 ? void 0 : d.details) == "string" && (c.error.details = JSON.parse(c.error.details)), this._maybeSendToSentry(i), this._joinedCallback && (this._joinedCallback(null, c), this._joinedCallback = null), this.emitDailyJSEvent(c);
  } }, { key: "resetMeetingDependentVars", value: function() {
    this._participants = {}, this._participantCounts = No, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = { access: Br }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = Qr(Do, this._callObjectMode), this._isScreenSharing = !1, this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this._maxAppMessageSize = Ur, this._callMachineInitialized = !1, this._bundleLoadTime = void 0, this._preloadCache;
  } }, { key: "updateKeepDeviceAwake", value: function(i) {
    V() && this.nativeUtils().setKeepDeviceAwake(i, this.callClientId);
  } }, { key: "updateDeviceAudioMode", value: function(i) {
    if (V() && !this.disableReactNativeAutoDeviceManagement("audio")) {
      var d = i ? this._nativeInCallAudioMode : "idle";
      this.nativeUtils().setAudioMode(d);
    }
  } }, { key: "updateShowAndroidOngoingMeetingNotification", value: function(i) {
    if (V() && this.nativeUtils().setShowOngoingMeetingNotification) {
      var d, c, h, f;
      if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
        var k = this.properties.reactNativeConfig.androidInCallNotification;
        d = k.title, c = k.subtitle, h = k.iconName, f = k.disableForCustomOverride;
      }
      f && (i = !1), this.nativeUtils().setShowOngoingMeetingNotification(i, d, c, h, this.callClientId);
    }
  } }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(i) {
    V() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(i);
  } }, { key: "toggleParticipantAudioBasedOnNativeAudioFocus", value: function() {
    var i;
    if (V()) {
      var d = (i = this._callMachine()) === null || i === void 0 || (i = i.store) === null || i === void 0 ? void 0 : i.getState();
      for (var c in d?.streams) {
        var h = d.streams[c];
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
    var i = Object.values(We)[0];
    if (this.needsLoad())
      if (i && !i.needsLoad()) {
        var d = { action: Zt, level: "error", code: this.strictMode ? 9995 : 9997 };
        i.sendMessageToCallMachine(d);
      } else this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
    else {
      var c = { action: Zt, level: "error", code: this.strictMode ? 9995 : 9997 };
      this._messageChannel.sendMessageToCallMachine(c, null, this.callClientId, this._iframe);
    }
  } }, { key: "_logDuplicateInstanceAttempt", value: function() {
    for (var i = 0, d = Object.values(We); i < d.length; i++) {
      var c = d[i];
      c._callMachineInitialized ? (c.sendMessageToCallMachine({ action: Zt, level: "warn", code: this.allowMultipleCallInstances ? 9993 : 9992 }), c._delayDuplicateInstanceLog = !1) : c._delayDuplicateInstanceLog = !0;
    }
  } }, { key: "_maybeSendToSentry", value: function(i) {
    var d, c, h, f, k;
    if (!((d = i.error) !== null && d !== void 0 && d.type && (![_c, bc, io].includes(i.error.type) || i.error.type === io && i.error.msg.includes("deleted")))) {
      var M = (c = this.properties) !== null && c !== void 0 && c.url ? new URL(this.properties.url) : void 0, T = "production";
      M && M.host.includes(".staging.daily") && (T = "staging");
      var P, B, U, G, oe, $e = (function(st) {
        const $t = [Na(), La(), cc(), sc(), hc(), gc(), Ua(), fc()];
        return st.autoSessionTracking !== !1 && $t.push(pc()), $t;
      })({}).filter(function(st) {
        return !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(st.name);
      }), Ve = new Ga({ dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844", transport: Za, stackParser: oc, integrations: $e, environment: T }), K = new Ue();
      if (K.setClient(Ve), Ve.init(), !((h = this._participants) === null || h === void 0 || (h = h.local) === null || h === void 0) && h.session_id && K.setExtra("sessionId", this._participants.local.session_id), this.properties) {
        var Se = x({}, this.properties);
        Se.userName = Se.userName ? "[Filtered]" : void 0, Se.userData = Se.userData ? "[Filtered]" : void 0, Se.token = Se.token ? "[Filtered]" : void 0, K.setExtra("properties", Se);
      }
      if (M) {
        var Je = M.searchParams.get("domain");
        if (!Je) {
          var Rt = M.host.match(/(.*?)\./);
          Je = Rt && Rt[1] || "";
        }
        Je && K.setTag("domain", Je);
      }
      i.error && (K.setTag("fatalErrorType", i.error.type), K.setExtra("errorDetails", i.error.details), !((P = i.error.details) === null || P === void 0) && P.uri && K.setTag("serverAddress", i.error.details.uri), !((B = i.error.details) === null || B === void 0) && B.workerGroup && K.setTag("workerGroup", i.error.details.workerGroup), !((U = i.error.details) === null || U === void 0) && U.geoGroup && K.setTag("geoGroup", i.error.details.geoGroup), !((G = i.error.details) === null || G === void 0) && G.on && K.setTag("connectionAttempt", i.error.details.on), (oe = i.error.details) !== null && oe !== void 0 && oe.bundleUrl && (K.setTag("bundleUrl", i.error.details.bundleUrl), K.setTag("bundleError", i.error.details.sourceError.type))), K.setTags({ callMode: this._callObjectMode ? V() ? "reactNative" : (f = this.properties) !== null && f !== void 0 && (f = f.dailyConfig) !== null && f !== void 0 && (f = f.callMode) !== null && f !== void 0 && f.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame", version: t.version() });
      var Ut = ((k = i.error) === null || k === void 0 ? void 0 : k.msg) || i.errorMsg;
      K.captureException(new Error(Ut));
    }
  } }, { key: "_callMachine", value: function() {
    var i;
    return (i = window._daily) === null || i === void 0 || (i = i.instances) === null || i === void 0 || (i = i[this.callClientId]) === null || i === void 0 ? void 0 : i.callMachine;
  } }, { key: "_maybeUpdateInputSettings", value: function(i) {
    if (!se(this._inputSettings, i)) {
      var d = this._getInputSettings();
      this._inputSettings = i;
      var c = this._getInputSettings();
      se(d, c) || this.emitDailyJSEvent({ action: co, inputSettings: c });
    }
  } }], [{ key: "supportedBrowser", value: function() {
    if (V()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
    var i = ea.getParser(be());
    return { supported: !!Jr(), mobile: i.getPlatformType() === "mobile", name: i.getBrowserName(), version: i.getBrowserVersion(), supportsFullscreen: !!go(), supportsScreenShare: !!yl(), supportsSfu: !!Jr(), supportsVideoProcessing: ys(), supportsAudioProcessing: bs() };
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
    var c, h;
    $(), i && d ? (c = i, h = d) : i && i.append ? (c = i, h = {}) : (c = document.body, h = i || {});
    var f = h.iframeStyle;
    f || (f = c === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
    var k = document.createElement("iframe");
    window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? k.allow = "microphone, camera" : k.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock; compute-pressure;", k.style.visibility = "hidden", c.appendChild(k), k.style.visibility = null, Object.keys(f).forEach(function(M) {
      return k.style[M] = f[M];
    }), h.layout || (h.customLayout ? h.layout = "custom-v1" : h.layout = "browser");
    try {
      return new t(k, h);
    } catch (M) {
      throw c.removeChild(k), M;
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
    return i ? We[i] : Object.values(We)[0];
  } }]);
  var e, r, n, o, s, a, l, u, p, m, v, E, S, b, g, w, _, C, O, j, A, F, J, te, Ie, H, ce, kt, Bt, Vn, Jn, qn, zn, Wn, Hn, Gn, Qn, Yn, Kn;
})();
function $o(t) {
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
function lt(t, e) {
  var r = {};
  for (var n in t) if (t[n] instanceof MediaStreamTrack) console.warn("MediaStreamTrack found in props or cache.", n), r[n] = Ae;
  else if (n === "dailyConfig") {
    if (t[n].modifyLocalSdpHook) {
      var o = window._daily.instances[e].customCallbacks || {};
      o.modifyLocalSdpHook = t[n].modifyLocalSdpHook, window._daily.instances[e].customCallbacks = o, delete t[n].modifyLocalSdpHook;
    }
    if (t[n].modifyRemoteSdpHook) {
      var s = window._daily.instances[e].customCallbacks || {};
      s.modifyRemoteSdpHook = t[n].modifyRemoteSdpHook, window._daily.instances[e].customCallbacks = s, delete t[n].modifyRemoteSdpHook;
    }
    r[n] = t[n];
  } else r[n] = t[n];
  return r;
}
function z(t) {
  var e = arguments.length > 2 ? arguments[2] : void 0;
  if (t !== Ge) {
    var r = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.");
    throw e && (r += " ".concat(e)), console.error(r), new Error(r);
  }
}
function cr(t, e) {
  return [fn, Ge].includes(t) || e;
}
function Hr(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "This daily-js method", n = arguments.length > 3 ? arguments[3] : void 0;
  if (cr(t, e)) {
    var o = "".concat(r, " not supported after joining a meeting.");
    throw n && (o += " ".concat(n)), console.error(o), new Error(o);
  }
}
function rr(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", r = arguments.length > 2 ? arguments[2] : void 0;
  if (!t) {
    var n = "".concat(e, arguments.length > 3 && arguments[3] !== void 0 && arguments[3] ? " requires preAuth() or startCamera() to initialize call state." : " requires preAuth(), startCamera(), or join() to initialize call state.");
    throw r && (n += " ".concat(r)), console.error(n), new Error(n);
  }
}
function Gr(t) {
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
function Mt() {
  if (!V()) throw new Error("This daily-js method is only supported in React Native");
}
function Is(t) {
  if (t === void 0) return !0;
  var e;
  if (typeof t == "string") e = t;
  else try {
    e = JSON.stringify(t), se(JSON.parse(e), t) || console.warn("The userData provided will be modified when serialized.");
  } catch (r) {
    throw Error("userData must be serializable to JSON: ".concat(r));
  }
  if (e.length > 4096) throw Error("userData is too large (".concat(e.length, " characters). Maximum size suppported is ").concat(4096, "."));
  return !0;
}
function Ls(t, e) {
  for (var r = e.allowAllParticipantsKey, n = function(v) {
    var E = ["local"];
    return r || E.push("*"), v && !E.includes(v);
  }, o = function(v) {
    return !!(v.layer === void 0 || Number.isInteger(v.layer) && v.layer >= 0 || v.layer === "inherit");
  }, s = function(v) {
    return !!v && !(v.video && !o(v.video)) && !(v.screenVideo && !o(v.screenVideo));
  }, a = 0, l = Object.entries(t); a < l.length; a++) {
    var u = Y(l[a], 2), p = u[0], m = u[1];
    if (!n(p) || !s(m)) return !1;
  }
  return !0;
}
function Ds(t) {
  if (R(t) !== "object") return !1;
  for (var e = 0, r = Object.entries(t); e < r.length; e++) {
    var n = Y(r[e], 2), o = n[0], s = n[1];
    switch (o) {
      case "video":
        if (R(s) !== "object") return !1;
        for (var a = 0, l = Object.entries(s); a < l.length; a++) {
          var u = Y(l[a], 2), p = u[0], m = u[1];
          switch (p) {
            case "processor":
              if (!Yl(m)) return !1;
              break;
            case "settings":
              if (!Vo(m)) return !1;
              break;
            default:
              return !1;
          }
        }
        break;
      case "audio":
        if (R(s) !== "object") return !1;
        for (var v = 0, E = Object.entries(s); v < E.length; v++) {
          var S = Y(E[v], 2), b = S[0], g = S[1];
          switch (b) {
            case "processor":
              if (!Ql(g)) return !1;
              break;
            case "settings":
              if (!Vo(g)) return !1;
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
function Ns(t, e, r) {
  var n, o = [];
  t.video && t.video.processor && (ys((n = e?.useLegacyVideoProcessor) !== null && n !== void 0 && n) || (t.video.settings ? delete t.video.processor : delete t.video, o.push("video"))), t.audio && t.audio.processor && (bs() || (t.audio.settings ? delete t.audio.processor : delete t.audio, o.push("audio"))), o.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(o.join(", "))), t.audio && t.audio.settings && (t.audio.settings.customTrack ? (r.audioTrack = t.audio.settings.customTrack, t.audio.settings = { customTrack: Ae }) : delete r.audioTrack), t.video && t.video.settings && (t.video.settings.customTrack ? (r.videoTrack = t.video.settings.customTrack, t.video.settings = { customTrack: Ae }) : delete r.videoTrack);
}
function Ql(t) {
  if (V()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var e = ["type"];
  return !!t && R(t) === "object" && (Object.keys(t).filter(function(r) {
    return !e.includes(r);
  }).forEach(function(r) {
    console.warn("invalid key inputSettings -> audio -> processor : ".concat(r)), delete t[r];
  }), !!(function(r) {
    return typeof r != "string" ? !1 : Object.values(ms).includes(r) ? !0 : (console.error("inputSettings audio processor type invalid"), !1);
  })(t.type));
}
function Yl(t) {
  if (V()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var e = ["type", "config"];
  return !t || R(t) !== "object" || !(function(r) {
    return typeof r != "string" ? !1 : Object.values(ar).includes(r) ? !0 : (console.error("inputSettings video processor type invalid"), !1);
  })(t.type) || t.config && (R(t.config) !== "object" || !(function(r, n) {
    var o = Object.keys(n);
    if (o.length === 0) return !0;
    var s = "invalid object in inputSettings -> video -> processor -> config";
    switch (r) {
      case ar.BGBLUR:
        return o.length > 1 || o[0] !== "strength" ? (console.error(s), !1) : !(typeof n.strength != "number" || n.strength <= 0 || n.strength > 1 || isNaN(n.strength)) || (console.error("".concat(s, "; expected: {0 < strength <= 1}, got: ").concat(n.strength)), !1);
      case ar.BGIMAGE:
        return !(n.source !== void 0 && !(function(a) {
          if (a.source === "default") return a.type = "default", !0;
          if (a.source instanceof ArrayBuffer) return !0;
          if (dr(a.source)) return a.type = "url", !!(function(p) {
            var m = new URL(p), v = m.pathname;
            if (m.protocol === "data:") try {
              var E = v.substring(v.indexOf(":") + 1, v.indexOf(";")).split("/")[1];
              return Vr.includes(E);
            } catch (b) {
              return console.error("failed to deduce blob content type", b), !1;
            }
            var S = v.split(".").at(-1).toLowerCase().trim();
            return Vr.includes(S);
          })(a.source) || (console.error("invalid image type; supported types: [".concat(Vr.join(", "), "]")), !1);
          return l = a.source, u = Number(l), isNaN(u) || !Number.isInteger(u) || u <= 0 || u > 10 ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(10)), !1) : (a.type = "daily-preselect", !0);
          var l, u;
        })(n));
      default:
        return !0;
    }
  })(t.type, t.config)) ? !1 : (Object.keys(t).filter(function(r) {
    return !e.includes(r);
  }).forEach(function(r) {
    console.warn("invalid key inputSettings -> video -> processor : ".concat(r)), delete t[r];
  }), !0);
}
function Vo(t) {
  return R(t) === "object" && (!t.customTrack || t.customTrack instanceof MediaStreamTrack);
}
function kn() {
  var t = Object.values(ar).join(" | "), e = Object.values(ms).join(" | ");
  return "inputSettings must be of the form: { video?: { processor?: { type: [ ".concat(t, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(e, " ] } } }");
}
function Fs(t) {
  var e = t.allowAllParticipantsKey;
  return "receiveSettings must be of the form { [<remote participant id> | ".concat(yc).concat(e ? ' | "'.concat("*", '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
}
function Bs() {
  return "customIntegrations should be an object of type ".concat(JSON.stringify(wn), ".");
}
function Rs(t) {
  if (t && R(t) !== "object" || Array.isArray(t)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(vr), ".")), !1;
  if (t) for (var e = 0, r = Object.entries(t); e < r.length; e++) for (var n = Y(r[e], 1)[0], o = 0, s = Object.entries(t[n]); o < s.length; o++) {
    var a = Y(s[o], 2), l = a[0], u = a[1], p = vr.id[l];
    if (!p) return console.error("customTrayButton does not support key ".concat(l)), !1;
    switch (l) {
      case "iconPath":
      case "iconPathDarkMode":
        if (!dr(u)) return console.error("customTrayButton ".concat(l, " should be a url.")), !1;
        break;
      case "visualState":
        if (!["default", "sidebar-open", "active"].includes(u)) return console.error("customTrayButton ".concat(l, " should be ").concat(p, ". Got: ").concat(u)), !1;
        break;
      default:
        if (R(u) !== p) return console.error("customTrayButton ".concat(l, " should be a ").concat(p, ".")), !1;
    }
  }
  return !0;
}
function Us(t) {
  if (!t || t && R(t) !== "object" || Array.isArray(t)) return console.error(Bs()), !1;
  for (var e = function(v) {
    return "".concat(v, " should be ").concat(wn.id[v]);
  }, r = function(v, E) {
    return console.error("customIntegration ".concat(v, ": ").concat(E));
  }, n = 0, o = Object.entries(t); n < o.length; n++) {
    var s = Y(o[n], 1)[0];
    if (!("label" in t[s])) return r(s, "label is required"), !1;
    if (!("location" in t[s])) return r(s, "location is required"), !1;
    if (!("src" in t[s]) && !("srcdoc" in t[s])) return r(s, "src or srcdoc is required"), !1;
    for (var a = 0, l = Object.entries(t[s]); a < l.length; a++) {
      var u = Y(l[a], 2), p = u[0], m = u[1];
      switch (p) {
        case "allow":
        case "csp":
        case "name":
        case "referrerPolicy":
        case "sandbox":
          if (typeof m != "string") return r(s, e(p)), !1;
          break;
        case "iconURL":
          if (!dr(m)) return r(s, "".concat(p, " should be a url")), !1;
          break;
        case "src":
          if ("srcdoc" in t[s]) return r(s, "cannot have both src and srcdoc"), !1;
          if (!dr(m)) return r(s, 'src "'.concat(m, '" is not a valid URL')), !1;
          break;
        case "srcdoc":
          if ("src" in t[s]) return r(s, "cannot have both src and srcdoc"), !1;
          if (typeof m != "string") return r(s, e(p)), !1;
          break;
        case "location":
          if (!["main", "sidebar"].includes(m)) return r(s, e(p)), !1;
          break;
        case "controlledBy":
          if (m !== "*" && m !== "owners" && (!Array.isArray(m) || m.some(function(v) {
            return typeof v != "string";
          }))) return r(s, e(p)), !1;
          break;
        case "shared":
          if ((!Array.isArray(m) || m.some(function(v) {
            return typeof v != "string";
          })) && m !== "owners" && typeof m != "boolean") return r(s, e(p)), !1;
          break;
        default:
          if (!wn.id[p]) return console.error("customIntegration does not support key ".concat(p)), !1;
      }
    }
  }
  return !0;
}
function $s(t, e) {
  if (e === void 0) return !1;
  switch (R(e)) {
    case "string":
      return R(t) === e;
    case "object":
      if (R(t) !== "object") return !1;
      for (var r in t) if (!$s(t[r], e[r])) return !1;
      return !0;
    default:
      return !1;
  }
}
function Jo(t, e) {
  var r = t.sessionId, n = t.toEndPoint, o = t.callerId, s = t.useSipRefer;
  if (!r || !n) throw new Error("".concat(e, "() requires a sessionId and toEndPoint"));
  if (typeof r != "string" || typeof n != "string") throw new Error("Invalid paramater: sessionId and toEndPoint must be of type string");
  if (s && !n.startsWith("sip:")) throw new Error('"toEndPoint" must be a "sip" address');
  if (!n.startsWith("sip:") && !n.startsWith("+")) throw new Error("toEndPoint: ".concat(n, ' must starts with either "sip:" or "+"'));
  if (o && typeof o != "string") throw new Error("callerId must be of type string");
  if (o && !n.startsWith("+")) throw new Error("callerId is only valid when transferring to a PSTN number");
}
function qo(t) {
  if (R(t) !== "object") throw new Error('RemoteMediaPlayerSettings: must be "object" type');
  if (t.state && !Object.values(gn).includes(t.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(gn));
  if (t.volume) {
    if (typeof t.volume != "number") throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
    if (t.volume < 0 || t.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
  }
}
function zo(t, e, r) {
  return !(typeof t != "number" || t < e || t > r);
}
function Qr(t, e) {
  return t && !e && delete t.data, t;
}
let Kl = 0;
function de(t, e, r = "debug-conversation") {
  return {
    message_type: "conversation",
    event_type: "conversation.tool_call",
    conversation_id: r,
    properties: { name: t, arguments: JSON.stringify(e), tool_call_id: `debug_${Date.now()}_${++Kl}` }
  };
}
const Xl = [
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
function Zl(t, e) {
  const r = document.createElement("div");
  r.style.cssText = "position:fixed;left:8px;bottom:8px;z-index:9999;width:380px;max-height:60vh;overflow:auto;background:#fff;color:#111;border:1px solid #999;border-radius:8px;padding:8px;font:12px system-ui,sans-serif;box-shadow:0 4px 16px #0003", r.innerHTML = '<b>Avatar debug</b> <button data-x>clear</button><div data-btns style="display:flex;flex-wrap:wrap;gap:4px;margin:6px 0"></div><div data-log></div>';
  const n = r.querySelector("[data-btns]"), o = r.querySelector("[data-log]");
  let s = 0;
  const a = () => {
    for (; s < e.length; s++) {
      const l = e[s], u = document.createElement("div");
      u.style.cssText = "border-top:1px solid #eee;padding:3px 0;white-space:pre-wrap;word-break:break-word", l.dir === "in" ? u.textContent = `→ ${l.tool} ${JSON.stringify(l.args)}` : l.dir === "out" ? (u.textContent = `← ${l.tool} ${l.status} ${l.bytes}B ${l.ms}ms${l.trimmed.length ? ` trimmed: ${l.trimmed.join(", ")}` : ""}
${JSON.stringify(l.output)}`, l.status === "error" && (u.style.background = "#fde8e8")) : u.textContent = `ℹ ${l.text}`, o.prepend(u);
    }
  };
  for (const [l, u] of Xl) {
    const p = document.createElement("button");
    p.textContent = l, p.onclick = async () => {
      await t.handle(u(), (m) => console.log("[avatar] pushed later", m)), a();
    }, n.append(p);
  }
  r.querySelector("[data-x]").onclick = () => {
    o.replaceChildren(), s = e.length;
  }, setInterval(a, 500), document.body.append(r);
}
const Vs = 3500, eu = 1e4, yr = 40;
function tu(t) {
  const e = t;
  return !!e && typeof e == "object" && e.event_type === "conversation.tool_call" && !!e.properties && typeof e.properties.name == "string";
}
function At(t) {
  return new TextEncoder().encode(typeof t == "string" ? t : JSON.stringify(t)).length;
}
function nr(t, e) {
  const r = t && typeof t == "object" ? t : {}, n = {};
  for (const [o, { type: s, required: a }] of Object.entries(e)) {
    let l = r[o];
    (l === "" || l === null) && (l = void 0);
    const u = o.replace(/_/g, " ");
    if (l === void 0) {
      if (a) return { ok: !1, error: `I need the ${u} to do that. Ask the shopper for it.` };
      continue;
    }
    if (s === "number") {
      const p = typeof l == "string" ? Number(l.replace(/[$,\s]/g, "")) : l;
      if (typeof p != "number" || !Number.isFinite(p) || p < 0) return { ok: !1, error: `${u} should be a number.` };
      n[o] = p;
    } else if (s === "boolean")
      n[o] = l === !0 || l === "true" || l === 1 || l === "yes";
    else {
      if (typeof l != "string" && typeof l != "number") return { ok: !1, error: `${u} should be text.` };
      n[o] = String(l).trim();
    }
  }
  return { ok: !0, args: n };
}
function ru(t) {
  return typeof t != "string" ? t ?? {} : t.trim() === "" ? {} : JSON.parse(t);
}
function ft(t, e) {
  return t.length <= e ? t : t.slice(0, e - 1).trimEnd() + "…";
}
const Et = (t) => Math.round(t * 100) / 100, Z = (t) => ({ status: "error", output: t });
function Js(t, e = 1, r = 10) {
  return Array.from({ length: r }, () => ({
    label: `cut ${t}`,
    apply: (n) => n[t].length > e ? { ...n, [t]: n[t].slice(0, -1) } : n
  }));
}
function nu(t, e) {
  const r = t.styleOutfitTimeoutMs ?? 15e4, n = t.styleOutfitMode ?? "await", o = t.spendLimitUsd ?? eu, s = t.shopperId ?? "demo-shopper", a = t.logger ?? ((v) => console.log(v)), l = t.trimThresholdBytes ?? Vs;
  let u = !1;
  const p = /* @__PURE__ */ new Map(), m = (v) => v.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  return {
    async search_products(v, E) {
      v && typeof v == "object" && v.query == null && v.q != null && (v = { ...v, query: v.q });
      const S = nr(v, {
        query: { type: "string" },
        department: { type: "string" },
        style: { type: "string" },
        brand: { type: "string" },
        color: { type: "string" },
        max_price: { type: "number" },
        size: { type: "string" },
        on_sale: { type: "boolean" }
      });
      if (!S.ok) return Z(S.error);
      const b = S.args, g = {};
      b.query && (g.q = b.query), b.department && (g.dept = b.department), b.style && (g.style = b.style), b.brand && (g.brand = b.brand), b.color && (g.color = b.color), b.max_price !== void 0 && (g.max_price = b.max_price), b.size && (g.size = b.size), b.on_sale && (g.sale = !0);
      const w = await E.search(g) ?? [];
      for (const _ of w) e.set(_.id, _.price);
      return {
        status: "success",
        output: {
          products: w.map((_) => ({ id: _.id, title: _.title, brand: _.brand, price: _.price })),
          ...w.length === 0 ? { hint: "No matches. Suggest loosening one filter." } : {}
        },
        trims: [
          {
            label: "short titles",
            apply: (_) => ({ ..._, products: _.products.map((C) => ({ ...C, title: ft(C.title, yr) })) })
          },
          { label: "drop brands", apply: (_) => ({ ..._, products: _.products.map(({ brand: C, ...O }) => O) }) },
          ...Js("products")
        ]
      };
    },
    async show_product(v, E) {
      const S = nr(v, { product_id: { type: "string", required: !0 } });
      if (!S.ok) return Z(S.error);
      const b = await E.openProduct(S.args.product_id);
      return b.ok ? (e.set(b.id, b.price), {
        status: "success",
        output: { shown: !0, id: b.id, title: b.title, brand: b.brand, price: b.price, sizes_in_stock: b.sizes, colors: b.colors },
        trims: [
          { label: "short title", apply: (g) => ({ ...g, title: ft(g.title, yr) }) },
          {
            label: "cut colors/sizes",
            apply: (g) => ({ ...g, colors: g.colors.slice(0, 6), sizes_in_stock: g.sizes_in_stock.slice(0, 12) })
          }
        ]
      }) : Z(`${b.error}. Use an id exactly as a tool returned it, or search again.`);
    },
    async add_to_bag(v, E) {
      const S = nr(v, {
        product_id: { type: "string", required: !0 },
        size: { type: "string" },
        color: { type: "string" }
      });
      if (!S.ok) return Z(S.error);
      const b = S.args.product_id;
      let g = E.getProduct?.(b)?.price ?? e.get(b);
      if (g === void 0) {
        const O = await E.openProduct(b);
        if (!O.ok) return Z(`${O.error}. Use an id exactly as a tool returned it.`);
        g = O.price, e.set(b, g);
      }
      const w = await E.getBag();
      if (w.total + g > o)
        return Z(
          `Not added: that would take the bag to ${Et(w.total + g)} dollars, past the ${o} dollar limit for this conversation. The bag is at ${Et(w.total)} dollars.`
        );
      const _ = await E.addToBag(b, S.args.size, S.args.color);
      if (!_.ok) return Z(ft(_.error || "That couldn't be added to the bag.", 200));
      const C = await E.getBag();
      return {
        status: "success",
        output: {
          added: { product_id: b, ...S.args.size ? { size: S.args.size } : {}, ...S.args.color ? { color: S.args.color } : {} },
          bag_count: C.count,
          bag_total_usd: Et(C.total),
          left_under_limit_usd: Et(o - C.total)
        }
      };
    },
    async style_outfit(v, E, S) {
      const b = nr(v, {
        occasion: { type: "string", required: !0 },
        budget_usd: { type: "number", required: !0 },
        notes: { type: "string" },
        rework_slot: { type: "string" },
        rework_feedback: { type: "string" }
      });
      if (!b.ok) return Z(b.error);
      if (u)
        return Z("Looks are still being built. Don't call style_outfit again; tell the shopper it's still cooking.");
      const g = b.args, w = g.budget_usd;
      if (!(w > 0)) return Z("The budget has to be more than zero. Ask the shopper what they want to spend.");
      const _ = m(g.occasion), C = [...p].filter(([H]) => H !== _).reduce((H, [, ce]) => H + ce, 0), O = (await E.getBag())?.total ?? 0, j = Et(o - Math.max(O, C));
      if (j <= 0)
        return Z(`The ${o} dollar limit for this conversation is used up by the earlier outfits and the bag. Tell the shopper no more looks this time.`);
      const A = Math.min(w, j), F = {
        shopper_id: s,
        conversation_id: S.conversationId || "no-conversation",
        occasion: g.occasion,
        budget_usd: A,
        ...g.notes ? { notes: g.notes } : {},
        ...g.rework_slot && g.rework_feedback ? { rework: { slot: g.rework_slot, feedback: g.rework_feedback } } : {}
      }, J = A < w ? { budget_note: `Budget capped at ${A} dollars: the limit is ${o} dollars per conversation across all outfits and the bag.` } : {}, te = async () => {
        u = !0;
        let H;
        try {
          H = await au(t.styleOutfit(F), r);
        } catch (ce) {
          return t.onLog?.({ dir: "info", text: `style_outfit backend failed: ${ce.message}` }), Z("The stylist couldn't finish those looks. Say so plainly and offer to try again.");
        } finally {
          u = !1;
        }
        if (!H || !Array.isArray(H.looks) || H.looks.length === 0)
          return Z("The stylist came back with no looks. Say so plainly and offer to try again.");
        p.set(_, A);
        try {
          await E.showLooks(H);
        } catch (ce) {
          t.onLog?.({ dir: "info", text: `Barn.showLooks threw: ${ce.message}` });
        }
        return { status: "success", output: { ...iu(H), ...J }, trims: ou };
      };
      if (n === "await" || !S.send)
        return n === "background" && a("[tool] style_outfit background mode needs a send function; awaiting instead"), te();
      const Ie = S.send;
      return te().then((H) => {
        const ce = H.status === "success" ? `[Stylist result, not said by the shopper] The looks are on the outfit board now: ${JSON.stringify(H.output)}. Say spoken_summary in your own voice and ask which look the shopper likes.` : `[Stylist result, not said by the shopper] ${H.output}`, kt = su(S.conversationId, ce, l);
        t.onLog?.({ dir: "info", text: `style_outfit pushed ${H.status} via conversation.respond (${At(kt)}B)` });
        try {
          Ie(kt);
        } catch (Bt) {
          a(`[tool] style_outfit background send failed: ${Bt.message}`);
        }
      }), {
        status: "success",
        output: {
          started: !0,
          ...J,
          note: "The stylist is building three looks; it takes about a minute and the shopper can watch the steps on screen. Keep chatting. The looks arrive as a new message; don't call style_outfit again."
        }
      };
    }
  };
}
function iu(t) {
  return {
    spoken_summary: t.spoken_summary,
    looks: t.looks.map((e) => ({
      outfit_name: e.outfit_name,
      total_usd: e.total_usd,
      items: (e.items ?? []).map(
        (r) => r.product_id ? { product_id: r.product_id, slot: r.slot } : { closet_item: ft(r.closet_item ?? "", yr), slot: r.slot }
      )
    }))
  };
}
const ou = [
  { label: "short summary", apply: (t) => ({ ...t, spoken_summary: ft(t.spoken_summary ?? "", 300) }) },
  {
    label: "short names",
    apply: (t) => ({ ...t, looks: t.looks.map((e) => ({ ...e, outfit_name: ft(e.outfit_name, yr) })) })
  },
  ...Js("looks"),
  { label: "drop items", apply: (t) => ({ ...t, looks: t.looks.map(({ items: e, ...r }) => r) }) }
];
function su(t, e, r) {
  const n = (s) => ({
    message_type: "conversation",
    event_type: "conversation.respond",
    conversation_id: t,
    properties: { text: s }
  });
  let o = n(e);
  for (; At(o) > r && e.length > 200; )
    e = e.slice(0, Math.floor(e.length * 0.8)), o = n(e + "…");
  return o;
}
function au(t, e) {
  let r;
  return Promise.race([
    t,
    new Promise((n, o) => {
      r = setTimeout(() => o(new Error(`timed out after ${e}ms`)), e);
    })
  ]).finally(() => clearTimeout(r));
}
function cu(t) {
  const r = nu(t, /* @__PURE__ */ new Map()), n = t.logger ?? ((u) => console.log(u)), o = t.trimThresholdBytes ?? Vs, s = typeof t.bridge == "function" ? t.bridge : () => t.bridge, a = /* @__PURE__ */ new Set();
  async function l(u, p) {
    if (!tu(u)) return null;
    const m = Date.now(), { name: v } = u.properties, E = u.properties.tool_call_id ?? u.properties.inference_id ?? u.inference_id ?? "";
    if (u.properties.tool_call_id || n(`[tool] ${v} WARNING: no tool_call_id on incoming call`), E && a.has(E))
      return n(`[tool] ${v} duplicate ${E} ignored`), null;
    E && a.add(E);
    let S, b = u.properties.arguments;
    try {
      b = ru(u.properties.arguments), t.onLog?.({ dir: "in", tool: v, tool_call_id: E, args: b });
      const A = Object.hasOwn(r, v) ? r[v] : void 0, F = s();
      A ? F ? S = await A(b, F, { conversationId: u.conversation_id, send: p }) : S = Z("The store isn't loaded yet. Try again in a moment.") : S = Z(`Unknown tool ${v}.`);
    } catch (A) {
      A instanceof SyntaxError && typeof u.properties.arguments == "string" ? (t.onLog?.({ dir: "in", tool: v, tool_call_id: E, args: b }), S = Z("I couldn't read those tool arguments. Try again.")) : (n(`[tool] ${v} handler error: ${A?.message ?? A}`), S = Z(`Something went wrong with ${v.replace(/_/g, " ")}. Try once more.`));
    }
    const g = (A) => ({
      message_type: "conversation",
      event_type: "conversation.tool_result",
      conversation_id: u.conversation_id,
      properties: { tool_call_id: E, output: A, status: S.status }
    });
    let w = g(S.output), _ = At(w);
    const C = [], O = _;
    for (const A of S.trims ?? []) {
      if (_ <= o) break;
      const F = g(A.apply(w.properties.output)), J = At(F);
      J < _ && (w = F, _ = J, C[C.length - 1] !== A.label && C.push(A.label));
    }
    _ > o && (w = g("Done. The details were too long to send; describe what is on screen instead."), _ = At(w), C.push("replaced output"));
    const j = Date.now() - m;
    return C.length && n(`[tool] ${v} trimmed ${O}B -> ${_}B (${C.join(", ")})`), n(`[tool] ${v} ${_}B ${j}ms${S.status === "error" ? " error" : ""}`), t.onLog?.({
      dir: "out",
      tool: v,
      tool_call_id: E,
      status: S.status,
      bytes: _,
      ms: j,
      trimmed: C,
      output: w.properties.output
    }), w;
  }
  return { handle: l };
}
const lu = 12e4;
function uu(t) {
  const e = t.baseUrl.replace(/\/+$/, ""), r = t.fetchImpl ?? ((...o) => fetch(...o)), n = t.timeoutMs ?? lu;
  return async (o) => {
    const s = AbortSignal.timeout(n), a = await r(`${e}/api/stylist/run`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(o),
      signal: s
    });
    if (!a.ok) throw new Error(`stylist run ${a.status}: ${(await a.text()).slice(0, 300)}`);
    const { run_id: l } = await a.json();
    if (!l) throw new Error("stylist run returned no run_id");
    t.onStart?.();
    const u = await r(`${e}/api/stylist/events?run_id=${encodeURIComponent(l)}`, {
      headers: { accept: "text/event-stream" },
      signal: s
    });
    if (!u.ok || !u.body) throw new Error(`stylist events ${u.status}`);
    for await (const p of du(u.body))
      if (p.type === "step") t.onStep?.({ id: p.id, label: p.label, status: p.status });
      else {
        if (p.type === "error") throw new Error(`stylist: ${p.message}`);
        if (p.type === "result") {
          const { looks: m, spoken_summary: v, lookbook_artifact: E } = p;
          return { looks: m, spoken_summary: v, lookbook_artifact: E };
        }
      }
    throw new Error("stylist stream ended without a result");
  };
}
async function* du(t) {
  const e = t.getReader(), r = new TextDecoder();
  let n = "";
  try {
    for (; ; ) {
      const { value: o, done: s } = await e.read();
      o && (n += r.decode(o, { stream: !0 }));
      let a;
      for (; (a = n.search(/\r?\n\r?\n/)) !== -1; ) {
        const l = n.slice(0, a);
        n = n.slice(a).replace(/^\r?\n\r?\n/, "");
        const u = l.split(/\r?\n/).filter((p) => p.startsWith("data:")).map((p) => p.slice(5).replace(/^ /, "")).join(`
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
    e.releaseLock();
  }
}
function pu(t) {
  const e = t.match(/\$\s?(\d[\d,]*(?:\.\d+)?)\s*(k)?|(\d[\d,]*(?:\.\d+)?)\s*(k|grand|bucks|dollars|usd)\b/i);
  if (!e) return;
  const r = Number((e[1] ?? e[3]).replace(/,/g, "")), n = /^(k|grand)$/i.test(e[2] ?? e[4] ?? "");
  return Number.isFinite(r) ? r * (n ? 1e3 : 1) : void 0;
}
const hu = "https://backend-production-6d9d.up.railway.app", Un = new URLSearchParams(location.search), $n = window.AVATAR_CONFIG ?? {}, fu = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname), _t = (Un.get("backend") ?? $n.backend ?? (fu ? "http://localhost:8787" : hu)).replace(/\/+$/, ""), Sn = Un.get("avatar_mode") ?? $n.styleOutfitMode ?? "background", Ze = () => window.Barn, xt = [], br = cu({
  bridge: Ze,
  shopperId: $n.shopperId,
  styleOutfitMode: Sn,
  styleOutfit: uu({
    baseUrl: _t,
    onStart: () => Ze()?.resetFeed(),
    onStep: (t) => Ze()?.addFeedStep(t)
  }),
  onLog: (t) => {
    xt.push(t), xt.length > 200 && xt.shift();
  },
  logger: (t) => console.log(`[avatar] ${t}`)
});
let je, Be, ee = "idle";
const qs = () => document.getElementById("avatar-slot");
function Ft(t) {
  const e = qs();
  if (!e) return;
  let r = e.querySelector(".avatar-ui");
  r || (e.replaceChildren(), r = document.createElement("div"), r.className = "avatar-ui", r.style.cssText = "position:relative;width:100%;height:100%;min-height:180px;background:#111;border-radius:inherit;overflow:hidden", r.innerHTML = `
      <video autoplay playsinline muted style="width:100%;height:100%;object-fit:cover;display:block"></video>
      <audio autoplay></audio>
      <div class="avatar-overlay" style="position:absolute;inset:0;display:grid;place-items:center;gap:8px;color:#eee;font:14px system-ui,sans-serif;text-align:center;padding:12px"></div>
      <button class="btn avatar-end" type="button" style="position:absolute;right:8px;bottom:8px" hidden>End call</button>`, r.querySelector(".avatar-end").onclick = () => {
    Ws();
  }, e.append(r));
  const n = r.querySelector(".avatar-overlay"), o = r.querySelector(".avatar-end");
  if (o.hidden = ee !== "live", ee === "live" && !t) {
    n.hidden = !0;
    return;
  }
  n.hidden = !1, n.replaceChildren();
  const s = document.createElement("p");
  if (s.style.margin = "0", s.textContent = t ?? { idle: "Talk to Sasha, your video stylist.", starting: "Connecting to Sasha…", ending: "Ending call…", error: "Couldn't connect.", live: "" }[ee], n.append(s), ee === "idle" || ee === "error") {
    const a = document.createElement("button");
    a.className = "btn", a.type = "button", a.textContent = ee === "error" ? "Try again" : "Start video call", a.onclick = () => {
      zs();
    }, n.append(a);
  }
}
function ut() {
  const t = qs()?.querySelector(".avatar-ui");
  if (!je || !t) return;
  const e = Object.values(je.participants()).find((p) => !p.local), r = (p) => {
    const m = e?.tracks?.[p];
    return m && m.state === "playable" ? m.persistentTrack : void 0;
  }, n = t.querySelector("video"), o = t.querySelector("audio"), s = r("video"), a = r("audio"), l = n.srcObject?.getVideoTracks()[0];
  s && l?.id !== s.id && (n.srcObject = new MediaStream([s])), !s && l && (n.srcObject = null);
  const u = o.srcObject?.getAudioTracks()[0];
  a && u?.id !== a.id && (o.srcObject = new MediaStream([a]), o.play().catch(() => {
  })), !a && u && (o.srcObject = null), ee === "live" && Ft(e ? void 0 : "Waiting for Sasha to join…");
}
function Mn(t) {
  if (!(!je || ee !== "live"))
    try {
      je.sendAppMessage(t, "*");
    } catch (e) {
      console.error("[avatar] sendAppMessage failed", e);
    }
}
async function gu(t) {
  if (!t) return;
  const e = await br.handle(t.data, Mn);
  e && Mn(e);
}
async function zs() {
  if (!(ee === "starting" || ee === "live")) {
    ee = "starting", Ft();
    try {
      await Ze()?.ready;
      const t = await fetch(`${_t}/api/conversation`, { method: "POST", headers: { "content-type": "application/json" }, body: "{}" }), e = await t.json().catch(() => ({}));
      if (!t.ok) throw new Error(e.error ?? `HTTP ${t.status}`);
      Be = e.conversation_id, Uo.getCallInstance()?.destroy(), je = Uo.createCallObject({ subscribeToTracksAutomatically: !0 }), je.on("app-message", gu).on("participant-joined", ut).on("participant-updated", ut).on("participant-left", ut).on("track-started", ut).on("track-stopped", ut).on("left-meeting", () => {
        lr("Call ended.");
      }).on("error", (r) => {
        lr(`Call error: ${r?.errorMsg ?? "unknown"}`, !0);
      }), await je.join({ url: e.conversation_url }), ee = "live", ut();
    } catch (t) {
      console.error("[avatar] start failed", t), await lr(`Couldn't start the call: ${t.message}. You can still type to the stylist below.`, !0);
    }
  }
}
async function lr(t, e = !1) {
  const r = je;
  if (je = void 0, r) {
    try {
      await r.leave();
    } catch {
    }
    try {
      await r.destroy();
    } catch {
    }
  }
  ee = e ? "error" : "idle", Ft(t);
}
async function Ws() {
  if (ee !== "live") return;
  ee = "ending", Ft();
  const t = Be;
  Be = void 0, t && fetch(`${_t}/api/conversation/end`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ conversation_id: t })
  }).catch(() => {
  }), await lr("Call ended.");
}
addEventListener("pagehide", () => {
  Be && navigator.sendBeacon?.(
    `${_t}/api/conversation/end`,
    new Blob([JSON.stringify({ conversation_id: Be })], { type: "application/json" })
  );
});
let mu = 0;
addEventListener("barn:brief", async (t) => {
  const e = String(t.detail?.text ?? "").trim();
  if (!e) return;
  if (ee === "live" && Be) {
    Mn({ message_type: "conversation", event_type: "conversation.respond", conversation_id: Be, properties: { text: e } });
    return;
  }
  const r = pu(e);
  if (!r) {
    Ze()?.resetFeed(), Ze()?.addFeedStep({ id: "budget", label: "Add a budget so I can build looks, e.g. “about $800”.", status: "blocked" });
    return;
  }
  const n = {
    message_type: "conversation",
    event_type: "conversation.tool_call",
    conversation_id: Be ?? `typed-${Date.now()}`,
    properties: {
      name: "style_outfit",
      arguments: { occasion: e, budget_usd: r, notes: "Typed brief, no video call." },
      tool_call_id: `typed_${++mu}`
    }
  }, o = await br.handle(n);
  o?.properties.status === "error" && Ze()?.addFeedStep({ id: "error", label: String(o.properties.output), status: "blocked" });
});
function Wo() {
  Ft(), window.Avatar = { router: br, start: zs, end: Ws, log: xt, backend: _t, mode: Sn, get state() {
    return ee;
  } }, Un.has("avatar_debug") && Zl(br, xt), console.log(`[avatar] ready: backend ${_t}, style_outfit ${Sn}`);
}
document.readyState === "loading" ? addEventListener("DOMContentLoaded", Wo, { once: !0 }) : Wo();
