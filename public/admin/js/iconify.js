/**
 * (c) Iconify
 *
 * For the full copyright and license information, please view the license.txt or license.gpl.txt
 * files at https://github.com/iconify/iconify
 *
 * Licensed under Apache 2.0 or GPL 2.0 at your option.
 * If derivative product is not compatible with one of licenses, you can pick one of licenses.
 *
 * @license Apache 2.0
 * @license GPL 2.0
 */
var Iconify = (function () {
    "use strict";
    function e(e, n, t) {
        return (
            e(
                (t = {
                    path: n,
                    exports: {},
                    require: function (e, n) {
                        return (function () {
                            throw new Error(
                                "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                            );
                        })(null == n && t.path);
                    },
                }),
                t.exports
            ),
            t.exports
        );
    }
    var n = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.fullIcon =
                    n.iconDefaults =
                    n.minifyProps =
                    n.matchName =
                        void 0),
                (n.matchName = /^[a-z0-9]+(-[a-z0-9]+)*$/),
                (n.minifyProps = ["width", "height", "top", "left"]),
                (n.iconDefaults = Object.freeze({
                    left: 0,
                    top: 0,
                    width: 16,
                    height: 16,
                    rotate: 0,
                    vFlip: !1,
                    hFlip: !1,
                })),
                (n.fullIcon = function (e) {
                    return Object.assign({}, n.iconDefaults, e);
                });
        }),
        t = e(function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.mergeIconData = void 0),
                (t.mergeIconData = function (e, t) {
                    var r = Object.assign({}, e);
                    for (var o in n.iconDefaults) {
                        var i = o;
                        if (void 0 !== t[i]) {
                            var a = t[i];
                            if (void 0 === r[i]) {
                                r[i] = a;
                                continue;
                            }
                            switch (i) {
                                case "rotate":
                                    r[i] = (r[i] + a) % 4;
                                    break;
                                case "hFlip":
                                case "vFlip":
                                    r[i] = a !== r[i];
                                    break;
                                default:
                                    r[i] = a;
                            }
                        }
                    }
                    return r;
                });
        }),
        r = e(function (e, r) {
            Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.parseIconSet = void 0);
            var o = Object.keys(n.iconDefaults);
            function i(e, n, r, o) {
                void 0 === o && (o = 0);
                var a = e.parent;
                if (void 0 !== n[a]) return t.mergeIconData(n[a], e);
                if (void 0 !== r[a]) {
                    if (o > 2) return null;
                    var c = i(r[a], n, r, o + 1);
                    if (c) return t.mergeIconData(c, e);
                }
                return null;
            }
            r.parseIconSet = function (e, t, r) {
                void 0 === r && (r = "none");
                var a = [];
                if ("object" != typeof e) return "none" !== r && a;
                if (
                    (e.not_found instanceof Array &&
                        e.not_found.forEach(function (e) {
                            t(e, null), "all" === r && a.push(e);
                        }),
                    "object" != typeof e.icons)
                )
                    return "none" !== r && a;
                var c = Object.create(null);
                o.forEach(function (n) {
                    void 0 !== e[n] && "object" != typeof e[n] && (c[n] = e[n]);
                });
                var u = e.icons;
                if (
                    (Object.keys(u).forEach(function (e) {
                        var r = u[e];
                        "string" == typeof r.body &&
                            (t(
                                e,
                                Object.freeze(
                                    Object.assign({}, n.iconDefaults, c, r)
                                )
                            ),
                            a.push(e));
                    }),
                    "object" == typeof e.aliases)
                ) {
                    var f = e.aliases;
                    Object.keys(f).forEach(function (e) {
                        var r = i(f[e], u, f, 1);
                        r &&
                            (t(
                                e,
                                Object.freeze(
                                    Object.assign({}, n.iconDefaults, c, r)
                                )
                            ),
                            a.push(e));
                    });
                }
                return "none" === r ? a.length > 0 : a;
            };
        }),
        o = e(function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.validateIcon = t.stringToIcon = void 0);
            t.stringToIcon = function (e, n, r, o) {
                void 0 === o && (o = "");
                var i = e.split(":");
                if ("@" === e.slice(0, 1)) {
                    if (i.length < 2 || i.length > 3) return null;
                    o = i.shift().slice(1);
                }
                if (i.length > 3 || !i.length) return null;
                if (i.length > 1) {
                    var a = i.pop(),
                        c = i.pop(),
                        u = {
                            provider: i.length > 0 ? i[0] : o,
                            prefix: c,
                            name: a,
                        };
                    return n && !t.validateIcon(u) ? null : u;
                }
                var f = i[0],
                    l = f.split("-");
                if (l.length > 1) {
                    var s = {
                        provider: o,
                        prefix: l.shift(),
                        name: l.join("-"),
                    };
                    return n && !t.validateIcon(s) ? null : s;
                }
                if (r && "" === o) {
                    var d = { provider: o, prefix: "", name: f };
                    return n && !t.validateIcon(d, r) ? null : d;
                }
                return null;
            };
            t.validateIcon = function (e, t) {
                return (
                    !!e &&
                    !(
                        ("" !== e.provider && !e.provider.match(n.matchName)) ||
                        !(
                            (t && "" === e.prefix) ||
                            e.prefix.match(n.matchName)
                        ) ||
                        !e.name.match(n.matchName)
                    )
                );
            };
        }),
        i = e(function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.listIcons =
                    t.getIcon =
                    t.iconExists =
                    t.addIcon =
                    t.addIconSet =
                    t.getStorage =
                    t.newStorage =
                        void 0);
            var o = Object.create(null);
            function i(e, n) {
                return {
                    provider: e,
                    prefix: n,
                    icons: Object.create(null),
                    missing: Object.create(null),
                };
            }
            function a(e, n) {
                void 0 === o[e] && (o[e] = Object.create(null));
                var t = o[e];
                return void 0 === t[n] && (t[n] = i(e, n)), t[n];
            }
            (t.newStorage = i),
                (t.getStorage = a),
                (t.addIconSet = function (e, n, t) {
                    void 0 === t && (t = "none");
                    var o = Date.now();
                    return r.parseIconSet(
                        n,
                        function (n, t) {
                            null === t ? (e.missing[n] = o) : (e.icons[n] = t);
                        },
                        t
                    );
                }),
                (t.addIcon = function (e, t, r) {
                    try {
                        if ("string" == typeof r.body)
                            return (
                                (e.icons[t] = Object.freeze(n.fullIcon(r))), !0
                            );
                    } catch (e) {}
                    return !1;
                }),
                (t.iconExists = function (e, n) {
                    return void 0 !== e.icons[n];
                }),
                (t.getIcon = function (e, n) {
                    var t = e.icons[n];
                    return void 0 === t ? null : t;
                }),
                (t.listIcons = function (e, n) {
                    var t = [];
                    return (
                        ("string" == typeof e ? [e] : Object.keys(o)).forEach(
                            function (e) {
                                ("string" == typeof e && "string" == typeof n
                                    ? [n]
                                    : void 0 === o[e]
                                    ? []
                                    : Object.keys(o[e])
                                ).forEach(function (n) {
                                    var r = a(e, n),
                                        o = Object.keys(r.icons).map(function (
                                            t
                                        ) {
                                            return (
                                                ("" !== e
                                                    ? "@" + e + ":"
                                                    : "") +
                                                n +
                                                ":" +
                                                t
                                            );
                                        });
                                    t = t.concat(o);
                                });
                            }
                        ),
                        t
                    );
                });
        }),
        a = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.storageFunctions =
                    n.addCollection =
                    n.addIcon =
                    n.getIconData =
                    n.allowSimpleNames =
                        void 0);
            var t = !1;
            function a(e) {
                var n = "string" == typeof e ? o.stringToIcon(e, !0, t) : e;
                return n
                    ? i.getIcon(i.getStorage(n.provider, n.prefix), n.name)
                    : null;
            }
            function c(e, n) {
                var r = o.stringToIcon(e, !0, t);
                if (!r) return !1;
                var a = i.getStorage(r.provider, r.prefix);
                return i.addIcon(a, r.name, n);
            }
            function u(e, n) {
                if ("object" != typeof e) return !1;
                if (
                    ("string" != typeof n &&
                        (n = "string" == typeof e.provider ? e.provider : ""),
                    t &&
                        "" === n &&
                        ("string" != typeof e.prefix || "" === e.prefix))
                ) {
                    var a = !1;
                    return (
                        r.parseIconSet(e, function (e, n) {
                            null !== n && c(e, n) && (a = !0);
                        }),
                        a
                    );
                }
                if (
                    "string" != typeof e.prefix ||
                    !o.validateIcon({
                        provider: n,
                        prefix: e.prefix,
                        name: "a",
                    })
                )
                    return !1;
                var u = i.getStorage(n, e.prefix);
                return !!i.addIconSet(u, e);
            }
            (n.allowSimpleNames = function (e) {
                return "boolean" == typeof e && (t = e), t;
            }),
                (n.getIconData = a),
                (n.addIcon = c),
                (n.addCollection = u),
                (n.storageFunctions = {
                    iconExists: function (e) {
                        return null !== a(e);
                    },
                    getIcon: function (e) {
                        var n = a(e);
                        return n ? Object.assign({}, n) : null;
                    },
                    listIcons: i.listIcons,
                    addIcon: c,
                    addCollection: u,
                });
        }),
        c = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.replaceIDs = void 0);
            var t = /\sid="(\S+)"/g,
                r = "([^A-Za-z0-9_-])";
            var o =
                    "IconifyId-" +
                    Date.now().toString(16) +
                    "-" +
                    ((16777216 * Math.random()) | 0).toString(16) +
                    "-",
                i = 0;
            n.replaceIDs = function (e, n) {
                void 0 === n && (n = o);
                for (var a, c = []; (a = t.exec(e)); ) c.push(a[1]);
                return c.length
                    ? (c.forEach(function (t) {
                          var o = "function" == typeof n ? n() : n + i++;
                          e = e.replace(
                              new RegExp(
                                  r +
                                      "(" +
                                      (t.replace(
                                          /[.*+?^${}()|[\]\\]/g,
                                          "\\$&"
                                      ) +
                                          ")") +
                                      r,
                                  "g"
                              ),
                              "$1" + o + "$3"
                          );
                      }),
                      e)
                    : e;
            };
        }),
        u = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.calculateSize = void 0);
            var t = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
                r = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
            n.calculateSize = function (e, n, o) {
                if (1 === n) return e;
                if (((o = void 0 === o ? 100 : o), "number" == typeof e))
                    return Math.ceil(e * n * o) / o;
                if ("string" != typeof e) return e;
                var i = e.split(t);
                if (null === i || !i.length) return e;
                for (var a = [], c = i.shift(), u = r.test(c); ; ) {
                    if (u) {
                        var f = parseFloat(c);
                        isNaN(f) ? a.push(c) : a.push(Math.ceil(f * n * o) / o);
                    } else a.push(c);
                    if (void 0 === (c = i.shift())) return a.join("");
                    u = !u;
                }
            };
        }),
        f = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.mergeCustomisations = n.defaults = void 0),
                (n.defaults = Object.freeze({
                    inline: !1,
                    width: null,
                    height: null,
                    hAlign: "center",
                    vAlign: "middle",
                    slice: !1,
                    hFlip: !1,
                    vFlip: !1,
                    rotate: 0,
                })),
                (n.mergeCustomisations = function (e, n) {
                    var t = {};
                    for (var r in e) {
                        var o = r;
                        if (((t[o] = e[o]), void 0 !== n[o])) {
                            var i = n[o];
                            switch (o) {
                                case "inline":
                                case "slice":
                                    "boolean" == typeof i && (t[o] = i);
                                    break;
                                case "hFlip":
                                case "vFlip":
                                    !0 === i && (t[o] = !t[o]);
                                    break;
                                case "hAlign":
                                case "vAlign":
                                    "string" == typeof i &&
                                        "" !== i &&
                                        (t[o] = i);
                                    break;
                                case "width":
                                case "height":
                                    (("string" == typeof i && "" !== i) ||
                                        ("number" == typeof i && i) ||
                                        null === i) &&
                                        (t[o] = i);
                                    break;
                                case "rotate":
                                    "number" == typeof i && (t[o] += i);
                            }
                        }
                    }
                    return t;
                });
        }),
        l = e(function (e, n) {
            function t(e) {
                var n = "";
                switch (e.hAlign) {
                    case "left":
                        n += "xMin";
                        break;
                    case "right":
                        n += "xMax";
                        break;
                    default:
                        n += "xMid";
                }
                switch (e.vAlign) {
                    case "top":
                        n += "YMin";
                        break;
                    case "bottom":
                        n += "YMax";
                        break;
                    default:
                        n += "YMid";
                }
                return (n += e.slice ? " slice" : " meet");
            }
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.iconToSVG = void 0),
                (n.iconToSVG = function (e, n) {
                    var r,
                        o,
                        i = {
                            left: e.left,
                            top: e.top,
                            width: e.width,
                            height: e.height,
                        },
                        a = e.body;
                    [e, n].forEach(function (e) {
                        var n,
                            t = [],
                            r = e.hFlip,
                            o = e.vFlip,
                            c = e.rotate;
                        switch (
                            (r
                                ? o
                                    ? (c += 2)
                                    : (t.push(
                                          "translate(" +
                                              (i.width + i.left) +
                                              " " +
                                              (0 - i.top) +
                                              ")"
                                      ),
                                      t.push("scale(-1 1)"),
                                      (i.top = i.left = 0))
                                : o &&
                                  (t.push(
                                      "translate(" +
                                          (0 - i.left) +
                                          " " +
                                          (i.height + i.top) +
                                          ")"
                                  ),
                                  t.push("scale(1 -1)"),
                                  (i.top = i.left = 0)),
                            c < 0 && (c -= 4 * Math.floor(c / 4)),
                            (c %= 4))
                        ) {
                            case 1:
                                (n = i.height / 2 + i.top),
                                    t.unshift("rotate(90 " + n + " " + n + ")");
                                break;
                            case 2:
                                t.unshift(
                                    "rotate(180 " +
                                        (i.width / 2 + i.left) +
                                        " " +
                                        (i.height / 2 + i.top) +
                                        ")"
                                );
                                break;
                            case 3:
                                (n = i.width / 2 + i.left),
                                    t.unshift(
                                        "rotate(-90 " + n + " " + n + ")"
                                    );
                        }
                        c % 2 == 1 &&
                            ((0 === i.left && 0 === i.top) ||
                                ((n = i.left), (i.left = i.top), (i.top = n)),
                            i.width !== i.height &&
                                ((n = i.width),
                                (i.width = i.height),
                                (i.height = n))),
                            t.length &&
                                (a =
                                    '<g transform="' +
                                    t.join(" ") +
                                    '">' +
                                    a +
                                    "</g>");
                    }),
                        null === n.width && null === n.height
                            ? ((o = "1em"),
                              (r = u.calculateSize(o, i.width / i.height)))
                            : null !== n.width && null !== n.height
                            ? ((r = n.width), (o = n.height))
                            : null !== n.height
                            ? ((o = n.height),
                              (r = u.calculateSize(o, i.width / i.height)))
                            : ((r = n.width),
                              (o = u.calculateSize(r, i.height / i.width))),
                        "auto" === r && (r = i.width),
                        "auto" === o && (o = i.height);
                    var c = {
                        attributes: {
                            width: (r = "string" == typeof r ? r : r + ""),
                            height: (o = "string" == typeof o ? o : o + ""),
                            preserveAspectRatio: t(n),
                            viewBox:
                                i.left +
                                " " +
                                i.top +
                                " " +
                                i.width +
                                " " +
                                i.height,
                        },
                        body: a,
                    };
                    return n.inline && (c.inline = !0), c;
                });
        }),
        s = e(function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.builderFunctions = void 0),
                (t.builderFunctions = {
                    replaceIDs: c.replaceIDs,
                    calculateSize: u.calculateSize,
                    buildIcon: function (e, t) {
                        return l.iconToSVG(
                            n.fullIcon(e),
                            f.mergeCustomisations(f.defaults, t)
                        );
                    },
                });
        }),
        d = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.coreModules = void 0),
                (n.coreModules = {});
        }),
        v = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.storeCache =
                    n.loadCache =
                    n.mock =
                    n.emptyList =
                    n.count =
                    n.config =
                        void 0);
            var t = "iconify2",
                r = "iconify",
                o = "iconify-count",
                a = "iconify-version",
                c = 36e5;
            n.config = { local: !0, session: !0 };
            var u = !1;
            (n.count = { local: 0, session: 0 }),
                (n.emptyList = { local: [], session: [] });
            var f = "undefined" == typeof window ? {} : window;
            function l(e) {
                var t = e + "Storage";
                try {
                    if (f && f[t] && "number" == typeof f[t].length)
                        return f[t];
                } catch (e) {}
                return (n.config[e] = !1), null;
            }
            function s(e, t, r) {
                try {
                    return e.setItem(o, r + ""), (n.count[t] = r), !0;
                } catch (e) {
                    return !1;
                }
            }
            function d(e) {
                var n = e.getItem(o);
                if (n) {
                    var t = parseInt(n);
                    return t || 0;
                }
                return 0;
            }
            n.mock = function (e) {
                (u = !1), (f = e);
            };
            n.loadCache = function () {
                if (!u) {
                    u = !0;
                    var e = Math.floor(Date.now() / c) - 168;
                    for (var o in n.config) f(o);
                }
                function f(o) {
                    var c = l(o);
                    if (c) {
                        var u = function (n) {
                            var t = r + n,
                                o = c.getItem(t);
                            if ("string" != typeof o) return !1;
                            var a = !0;
                            try {
                                var u = JSON.parse(o);
                                if (
                                    "object" != typeof u ||
                                    "number" != typeof u.cached ||
                                    u.cached < e ||
                                    "string" != typeof u.provider ||
                                    "object" != typeof u.data ||
                                    "string" != typeof u.data.prefix
                                )
                                    a = !1;
                                else {
                                    var f = u.provider,
                                        l = u.data.prefix,
                                        s = i.getStorage(f, l);
                                    a = i.addIconSet(s, u.data);
                                }
                            } catch (e) {
                                a = !1;
                            }
                            return a || c.removeItem(t), a;
                        };
                        try {
                            var f = c.getItem(a);
                            if (f !== t)
                                return (
                                    f &&
                                        (function (e) {
                                            try {
                                                for (
                                                    var n = d(e), t = 0;
                                                    t < n;
                                                    t++
                                                )
                                                    e.removeItem(r + t);
                                            } catch (e) {}
                                        })(c),
                                    void (function (e, n) {
                                        try {
                                            e.setItem(a, t);
                                        } catch (e) {}
                                        s(e, n, 0);
                                    })(c, o)
                                );
                            for (var v = d(c), p = v - 1; p >= 0; p--)
                                u(p) ||
                                    (p === v - 1
                                        ? v--
                                        : n.emptyList[o].push(p));
                            s(c, o, v);
                        } catch (e) {}
                    }
                }
            };
            n.storeCache = function (e, t) {
                function o(o) {
                    if (!n.config[o]) return !1;
                    var i = l(o);
                    if (!i) return !1;
                    var a = n.emptyList[o].shift();
                    if (void 0 === a && !s(i, o, (a = n.count[o]) + 1))
                        return !1;
                    try {
                        var u = {
                            cached: Math.floor(Date.now() / c),
                            provider: e,
                            data: t,
                        };
                        i.setItem(r + a, JSON.stringify(u));
                    } catch (e) {
                        return !1;
                    }
                    return !0;
                }
                u || n.loadCache(), o("local") || o("session");
            };
        }),
        p = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.toggleBrowserCache = void 0),
                (n.toggleBrowserCache = function (e, n) {
                    switch (e) {
                        case "local":
                        case "session":
                            v.config[e] = n;
                            break;
                        case "all":
                            for (var t in v.config) v.config[t] = n;
                    }
                });
        }),
        h = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.defaultConfig = void 0),
                (n.defaultConfig = {
                    resources: [],
                    index: 0,
                    timeout: 2e3,
                    rotate: 750,
                    random: !1,
                    dataAfterTimeout: !1,
                });
        }),
        g = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.sendQuery = void 0),
                (n.sendQuery = function (e, n, t, r, o) {
                    var i,
                        a = e.resources.length,
                        c = e.random ? Math.floor(Math.random() * a) : e.index;
                    if (e.random) {
                        var u = e.resources.slice(0);
                        for (i = []; u.length > 1; ) {
                            var f = Math.floor(Math.random() * u.length);
                            i.push(u[f]),
                                (u = u.slice(0, f).concat(u.slice(f + 1)));
                        }
                        i = i.concat(u);
                    } else
                        i = e.resources
                            .slice(c)
                            .concat(e.resources.slice(0, c));
                    var l = Date.now(),
                        s = "pending",
                        d = 0,
                        v = void 0,
                        p = null,
                        h = [],
                        g = [];
                    function m() {
                        p && (clearTimeout(p), (p = null));
                    }
                    function b() {
                        "pending" === s && (s = "aborted"),
                            m(),
                            h.forEach(function (e) {
                                e.abort && e.abort(),
                                    "pending" === e.status &&
                                        (e.status = "aborted");
                            }),
                            (h = []);
                    }
                    function y(e, n) {
                        n && (g = []), "function" == typeof e && g.push(e);
                    }
                    function I() {
                        return {
                            startTime: l,
                            payload: n,
                            status: s,
                            queriesSent: d,
                            queriesPending: h.length,
                            subscribe: y,
                            abort: b,
                        };
                    }
                    function j() {
                        (s = "failed"),
                            g.forEach(function (e) {
                                e(void 0, v);
                            });
                    }
                    function x() {
                        h = h.filter(function (e) {
                            return (
                                "pending" === e.status &&
                                    (e.status = "aborted"),
                                e.abort && e.abort(),
                                !1
                            );
                        });
                    }
                    function O() {
                        if ("pending" === s) {
                            m();
                            var r = i.shift();
                            if (void 0 !== r) {
                                var a = {
                                    getQueryStatus: I,
                                    status: "pending",
                                    resource: r,
                                    done: function (n, t) {
                                        !(function (n, t, r) {
                                            var a = void 0 === t;
                                            switch (
                                                ((h = h.filter(function (e) {
                                                    return e !== n;
                                                })),
                                                s)
                                            ) {
                                                case "pending":
                                                    break;
                                                case "failed":
                                                    if (
                                                        a ||
                                                        !e.dataAfterTimeout
                                                    )
                                                        return;
                                                    break;
                                                default:
                                                    return;
                                            }
                                            if (a)
                                                return (
                                                    void 0 !== r && (v = r),
                                                    void (
                                                        h.length ||
                                                        (i.length ? O() : j())
                                                    )
                                                );
                                            if ((m(), x(), o && !e.random)) {
                                                var c = e.resources.indexOf(
                                                    n.resource
                                                );
                                                -1 !== c &&
                                                    c !== e.index &&
                                                    o(c);
                                            }
                                            (s = "completed"),
                                                g.forEach(function (e) {
                                                    e(t);
                                                });
                                        })(a, n, t);
                                    },
                                };
                                h.push(a), d++;
                                var c =
                                    "function" == typeof e.rotate
                                        ? e.rotate(d, l)
                                        : e.rotate;
                                (p = setTimeout(O, c)), t(r, n, a);
                            } else {
                                if (h.length) {
                                    var u =
                                        "function" == typeof e.timeout
                                            ? e.timeout(l)
                                            : e.timeout;
                                    if (u)
                                        return void (p = setTimeout(
                                            function () {
                                                m(),
                                                    "pending" === s &&
                                                        (x(), j());
                                            },
                                            u
                                        ));
                                }
                                j();
                            }
                        }
                    }
                    return (
                        "function" == typeof r && g.push(r), setTimeout(O), I
                    );
                });
        }),
        m = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.initRedundancy = void 0),
                (n.initRedundancy = function (e) {
                    var n = (function (e) {
                            if (
                                !(
                                    "object" == typeof e &&
                                    "object" == typeof e.resources &&
                                    e.resources instanceof Array &&
                                    e.resources.length
                                )
                            )
                                throw new Error(
                                    "Invalid Reduncancy configuration"
                                );
                            var n,
                                t = Object.create(null);
                            for (n in h.defaultConfig)
                                void 0 !== e[n]
                                    ? (t[n] = e[n])
                                    : (t[n] = h.defaultConfig[n]);
                            return t;
                        })(e),
                        t = [];
                    function r() {
                        t = t.filter(function (e) {
                            return "pending" === e().status;
                        });
                    }
                    return {
                        query: function (e, o, i) {
                            var a = g.sendQuery(
                                n,
                                e,
                                o,
                                function (e, n) {
                                    r(), i && i(e, n);
                                },
                                function (e) {
                                    n.index = e;
                                }
                            );
                            return t.push(a), a;
                        },
                        find: function (e) {
                            var n = t.find(function (n) {
                                return e(n);
                            });
                            return void 0 !== n ? n : null;
                        },
                        setIndex: function (e) {
                            n.index = e;
                        },
                        getIndex: function () {
                            return n.index;
                        },
                        cleanup: r,
                    };
                });
        }),
        b = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.sortIcons = void 0),
                (n.sortIcons = function (e) {
                    var n = { loaded: [], missing: [], pending: [] },
                        t = Object.create(null);
                    e.sort(function (e, n) {
                        return e.provider !== n.provider
                            ? e.provider.localeCompare(n.provider)
                            : e.prefix !== n.prefix
                            ? e.prefix.localeCompare(n.prefix)
                            : e.name.localeCompare(n.name);
                    });
                    var r = { provider: "", prefix: "", name: "" };
                    return (
                        e.forEach(function (e) {
                            if (
                                r.name !== e.name ||
                                r.prefix !== e.prefix ||
                                r.provider !== e.provider
                            ) {
                                r = e;
                                var o = e.provider,
                                    a = e.prefix,
                                    c = e.name;
                                void 0 === t[o] && (t[o] = Object.create(null));
                                var u = t[o];
                                void 0 === u[a] && (u[a] = i.getStorage(o, a));
                                var f = u[a],
                                    l = { provider: o, prefix: a, name: c };
                                (void 0 !== f.icons[c]
                                    ? n.loaded
                                    : "" === a || void 0 !== f.missing[c]
                                    ? n.missing
                                    : n.pending
                                ).push(l);
                            }
                        }),
                        n
                    );
                });
        }),
        y = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.storeCallback = n.updateCallbacks = n.callbacks = void 0),
                (n.callbacks = Object.create(null));
            var t = Object.create(null);
            function r(e, t) {
                e.forEach(function (e) {
                    var r = e.provider;
                    if (void 0 !== n.callbacks[r]) {
                        var o = n.callbacks[r],
                            i = e.prefix,
                            a = o[i];
                        a &&
                            (o[i] = a.filter(function (e) {
                                return e.id !== t;
                            }));
                    }
                });
            }
            n.updateCallbacks = function (e, o) {
                void 0 === t[e] && (t[e] = Object.create(null));
                var a = t[e];
                a[o] ||
                    ((a[o] = !0),
                    setTimeout(function () {
                        if (
                            ((a[o] = !1),
                            void 0 !== n.callbacks[e] &&
                                void 0 !== n.callbacks[e][o])
                        ) {
                            var t = n.callbacks[e][o].slice(0);
                            if (t.length) {
                                var c = i.getStorage(e, o),
                                    u = !1;
                                t.forEach(function (n) {
                                    var t = n.icons,
                                        i = t.pending.length;
                                    (t.pending = t.pending.filter(function (n) {
                                        if (n.prefix !== o) return !0;
                                        var r = n.name;
                                        if (void 0 !== c.icons[r])
                                            t.loaded.push({
                                                provider: e,
                                                prefix: o,
                                                name: r,
                                            });
                                        else {
                                            if (void 0 === c.missing[r])
                                                return (u = !0), !0;
                                            t.missing.push({
                                                provider: e,
                                                prefix: o,
                                                name: r,
                                            });
                                        }
                                        return !1;
                                    })),
                                        t.pending.length !== i &&
                                            (u ||
                                                r(
                                                    [
                                                        {
                                                            provider: e,
                                                            prefix: o,
                                                        },
                                                    ],
                                                    n.id
                                                ),
                                            n.callback(
                                                t.loaded.slice(0),
                                                t.missing.slice(0),
                                                t.pending.slice(0),
                                                n.abort
                                            ));
                                });
                            }
                        }
                    }));
            };
            var o = 0;
            n.storeCallback = function (e, t, i) {
                var a = o++,
                    c = r.bind(null, i, a);
                if (!t.pending.length) return c;
                var u = { id: a, icons: t, callback: e, abort: c };
                return (
                    i.forEach(function (e) {
                        var t = e.provider,
                            r = e.prefix;
                        void 0 === n.callbacks[t] &&
                            (n.callbacks[t] = Object.create(null));
                        var o = n.callbacks[t];
                        void 0 === o[r] && (o[r] = []), o[r].push(u);
                    }),
                    c
                );
            };
        }),
        I = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.getAPIModule = n.setAPIModule = void 0);
            var t = Object.create(null);
            (n.setAPIModule = function (e, n) {
                t[e] = n;
            }),
                (n.getAPIModule = function (e) {
                    return void 0 === t[e] ? t[""] : t[e];
                });
        }),
        j = e(function (e, n) {
            function t(e) {
                var n;
                if ("string" == typeof e.resources) n = [e.resources];
                else if (!((n = e.resources) instanceof Array && n.length))
                    return null;
                return {
                    resources: n,
                    path: void 0 === e.path ? "/" : e.path,
                    maxURL: e.maxURL ? e.maxURL : 500,
                    rotate: e.rotate ? e.rotate : 750,
                    timeout: e.timeout ? e.timeout : 5e3,
                    random: !0 === e.random,
                    index: e.index ? e.index : 0,
                    dataAfterTimeout: !1 !== e.dataAfterTimeout,
                };
            }
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.getAPIConfig = n.setAPIConfig = void 0);
            for (
                var r = Object.create(null),
                    o = ["https://api.simplesvg.com", "https://api.unisvg.com"],
                    i = [];
                o.length > 0;

            )
                1 === o.length || Math.random() > 0.5
                    ? i.push(o.shift())
                    : i.push(o.pop());
            (r[""] = t({
                resources: ["https://api.iconify.design"].concat(i),
            })),
                (n.setAPIConfig = function (e, n) {
                    var o = t(n);
                    return null !== o && ((r[e] = o), !0);
                });
            n.getAPIConfig = function (e) {
                return r[e];
            };
        }),
        x = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.getProviders = n.listToIcons = void 0),
                (n.listToIcons = function (e, n, t) {
                    void 0 === n && (n = !0), void 0 === t && (t = !1);
                    var r = [];
                    return (
                        e.forEach(function (e) {
                            var i =
                                "string" == typeof e
                                    ? o.stringToIcon(e, !1, t)
                                    : e;
                            (n && !o.validateIcon(i, t)) ||
                                r.push({
                                    provider: i.provider,
                                    prefix: i.prefix,
                                    name: i.name,
                                });
                        }),
                        r
                    );
                }),
                (n.getProviders = function (e) {
                    var n = Object.create(null);
                    return (
                        e.forEach(function (e) {
                            n[e.provider] = !0;
                        }),
                        Object.keys(n)
                    );
                });
        }),
        O = e(function (e, n) {
            function t() {}
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.API = n.getRedundancyCache = void 0);
            var r = Object.create(null),
                o = Object.create(null),
                c = Object.create(null),
                u = Object.create(null),
                f = Object.create(null);
            function l(e) {
                if (void 0 === f[e]) {
                    var n = j.getAPIConfig(e);
                    if (!n) return;
                    var t = { config: n, redundancy: m.initRedundancy(n) };
                    f[e] = t;
                }
                return f[e];
            }
            n.getRedundancyCache = l;
            var s = Object.create(null);
            function v(e, n, t) {
                function a() {
                    var t = ("" === e ? "" : "@" + e + ":") + n,
                        r = Math.floor(Date.now() / 6e4);
                    s[t] < r &&
                        ((s[t] = r),
                        console.error(
                            'Unable to retrieve icons for "' +
                                t +
                                '" because API is not configured properly.'
                        ));
                }
                void 0 === o[e] && (o[e] = Object.create(null));
                var f = o[e];
                void 0 === u[e] && (u[e] = Object.create(null));
                var v = u[e];
                void 0 === r[e] && (r[e] = Object.create(null));
                var p,
                    h = r[e];
                void 0 === f[n] ? (f[n] = t) : (f[n] = f[n].concat(t).sort()),
                    v[n] ||
                        ((v[n] = !0),
                        setTimeout(function () {
                            v[n] = !1;
                            var t = f[n];
                            delete f[n];
                            var r = I.getAPIModule(e);
                            if (r) {
                                if (void 0 === p) {
                                    var o = l(e);
                                    if (void 0 === o) return void a();
                                    p = o;
                                }
                                r.prepare(e, n, t).forEach(function (t) {
                                    p.redundancy.query(
                                        t,
                                        r.send,
                                        function (r, o) {
                                            var a = i.getStorage(e, n);
                                            if ("object" != typeof r) {
                                                if (404 !== o) return;
                                                var u = Date.now();
                                                t.icons.forEach(function (e) {
                                                    a.missing[e] = u;
                                                });
                                            } else
                                                try {
                                                    var f = i.addIconSet(
                                                        a,
                                                        r,
                                                        "all"
                                                    );
                                                    if ("boolean" == typeof f)
                                                        return;
                                                    var l = h[n];
                                                    f.forEach(function (e) {
                                                        delete l[e];
                                                    }),
                                                        d.coreModules.cache &&
                                                            d.coreModules.cache(
                                                                e,
                                                                r
                                                            );
                                                } catch (e) {
                                                    console.error(e);
                                                }
                                            !(function (e, n) {
                                                void 0 === c[e] &&
                                                    (c[e] =
                                                        Object.create(null));
                                                var t = c[e];
                                                t[n] ||
                                                    ((t[n] = !0),
                                                    setTimeout(function () {
                                                        (t[n] = !1),
                                                            y.updateCallbacks(
                                                                e,
                                                                n
                                                            );
                                                    }));
                                            })(e, n);
                                        }
                                    );
                                });
                            } else a();
                        }));
            }
            n.API = {
                isPending: function (e) {
                    return (
                        void 0 !== r[e.provider] &&
                        void 0 !== r[e.provider][e.prefix] &&
                        void 0 !== r[e.provider][e.prefix][e.name]
                    );
                },
                loadIcons: function (e, n) {
                    var o = x.listToIcons(e, !0, a.allowSimpleNames()),
                        i = b.sortIcons(o);
                    if (!i.pending.length) {
                        var c = !0;
                        return (
                            n &&
                                setTimeout(function () {
                                    c && n(i.loaded, i.missing, i.pending, t);
                                }),
                            function () {
                                c = !1;
                            }
                        );
                    }
                    var u,
                        f,
                        l = Object.create(null),
                        s = [];
                    i.pending.forEach(function (e) {
                        var n = e.provider,
                            t = e.prefix;
                        if (t !== f || n !== u) {
                            (u = n),
                                (f = t),
                                s.push({ provider: n, prefix: t }),
                                void 0 === r[n] && (r[n] = Object.create(null));
                            var o = r[n];
                            void 0 === o[t] && (o[t] = Object.create(null)),
                                void 0 === l[n] && (l[n] = Object.create(null));
                            var i = l[n];
                            void 0 === i[t] && (i[t] = []);
                        }
                    });
                    var d = Date.now();
                    return (
                        i.pending.forEach(function (e) {
                            var n = e.provider,
                                t = e.prefix,
                                o = e.name,
                                i = r[n][t];
                            void 0 === i[o] && ((i[o] = d), l[n][t].push(o));
                        }),
                        s.forEach(function (e) {
                            var n = e.provider,
                                t = e.prefix;
                            l[n][t].length && v(n, t, l[n][t]);
                        }),
                        n ? y.storeCallback(n, i, s) : t
                    );
                },
            };
        }),
        P = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.APIInternalFunctions = n.APIFunctions = void 0),
                (n.APIFunctions = {
                    loadIcons: O.API.loadIcons,
                    addAPIProvider: j.setAPIConfig,
                }),
                (n.APIInternalFunctions = {
                    getAPI: O.getRedundancyCache,
                    getAPIConfig: j.getAPIConfig,
                    setAPIModule: I.setAPIModule,
                });
        }),
        w = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.getAPIModule = void 0);
            var t = null,
                r = "{prefix}.js?icons={icons}&callback={callback}",
                o = Object.create(null),
                i = Object.create(null);
            function a() {
                if (null === t) {
                    var e = self,
                        n = "Iconify",
                        o = ".cb";
                    if (void 0 === e[n])
                        (o = ""),
                            void 0 === e[(n = "IconifyJSONP")] &&
                                (e[n] = Object.create(null)),
                            (t = e[n]);
                    else {
                        var i = e[n];
                        void 0 === i.cb && (i.cb = Object.create(null)),
                            (t = i.cb);
                    }
                    r = r.replace("{callback}", n + o + ".{cb}");
                }
                return t;
            }
            n.getAPIModule = function (e) {
                return {
                    prepare: function (n, t, c) {
                        var u = [],
                            f = o[n + ":" + t];
                        void 0 === f &&
                            (f = (function (n, t) {
                                var c,
                                    u = e(n);
                                if (!u) return 0;
                                if (u.maxURL) {
                                    var f = 0;
                                    u.resources.forEach(function (e) {
                                        var n = e;
                                        f = Math.max(f, n.length);
                                    }),
                                        a(),
                                        (c =
                                            u.maxURL -
                                            f -
                                            u.path.length -
                                            r
                                                .replace("{provider}", n)
                                                .replace("{prefix}", t)
                                                .replace("{icons}", "").length -
                                            3);
                                } else c = 0;
                                var l = n + ":" + t;
                                return (i[l] = u.path), (o[l] = c), c;
                            })(n, t));
                        var l = { provider: n, prefix: t, icons: [] },
                            s = 0;
                        return (
                            c.forEach(function (e, r) {
                                (s += e.length + 1) >= f &&
                                    r > 0 &&
                                    (u.push(l),
                                    (l = { provider: n, prefix: t, icons: [] }),
                                    (s = e.length)),
                                    l.icons.push(e);
                            }),
                            u.push(l),
                            u
                        );
                    },
                    send: function (e, n, t) {
                        for (
                            var o = n.provider,
                                c = n.prefix,
                                u = n.icons.join(","),
                                f = o + ":" + c,
                                l = c.split("-").shift().slice(0, 3),
                                s = a(),
                                d = (function (e) {
                                    var n,
                                        t = 0;
                                    for (n = e.length - 1; n >= 0; n--)
                                        t += e.charCodeAt(n);
                                    return t % 999;
                                })(o + ":" + e + ":" + c + ":" + u);
                            void 0 !== s[l + d];

                        )
                            d++;
                        var v = l + d,
                            p =
                                i[f] +
                                r
                                    .replace("{provider}", o)
                                    .replace("{prefix}", c)
                                    .replace("{icons}", u)
                                    .replace("{cb}", v);
                        s[v] = function (e) {
                            delete s[v], t.done(e);
                        };
                        var h = e + p,
                            g = document.createElement("script");
                        (g.type = "text/javascript"),
                            (g.async = !0),
                            (g.src = h),
                            document.head.appendChild(g);
                    },
                };
            };
        }),
        M = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.getAPIModule = n.setFetch = void 0);
            var t = "{prefix}.json?icons={icons}",
                r = Object.create(null),
                o = Object.create(null),
                i = null;
            try {
                i = fetch;
            } catch (e) {}
            n.setFetch = function (e) {
                i = e;
            };
            n.getAPIModule = function (e) {
                return {
                    prepare: function (n, i, a) {
                        var c = [],
                            u = r[i];
                        void 0 === u &&
                            (u = (function (n, i) {
                                var a,
                                    c = e(n);
                                if (!c) return 0;
                                if (c.maxURL) {
                                    var u = 0;
                                    c.resources.forEach(function (e) {
                                        var n = e;
                                        u = Math.max(u, n.length);
                                    }),
                                        (a =
                                            c.maxURL -
                                            u -
                                            c.path.length -
                                            t
                                                .replace("{provider}", n)
                                                .replace("{prefix}", i)
                                                .replace("{icons}", "").length);
                                } else a = 0;
                                var f = n + ":" + i;
                                return (o[f] = c.path), (r[f] = a), a;
                            })(n, i));
                        var f = { provider: n, prefix: i, icons: [] },
                            l = 0;
                        return (
                            a.forEach(function (e, t) {
                                (l += e.length + 1) >= u &&
                                    t > 0 &&
                                    (c.push(f),
                                    (f = { provider: n, prefix: i, icons: [] }),
                                    (l = e.length)),
                                    f.icons.push(e);
                            }),
                            c.push(f),
                            c
                        );
                    },
                    send: function (e, n, r) {
                        var a = n.provider,
                            c = n.prefix,
                            u = n.icons.join(","),
                            f =
                                o[a + ":" + c] +
                                t
                                    .replace("{provider}", a)
                                    .replace("{prefix}", c)
                                    .replace("{icons}", u);
                        i
                            ? i(e + f)
                                  .then(function (e) {
                                      if (200 === e.status) return e.json();
                                      r.done(void 0, e.status);
                                  })
                                  .then(function (e) {
                                      "object" == typeof e &&
                                          null !== e &&
                                          r.done(e);
                                  })
                                  .catch(function (e) {
                                      r.done(void 0, e.errno);
                                  })
                            : r.done(void 0, 424);
                    },
                };
            };
        }),
        A = "iconifyFinder" + Date.now(),
        S = "iconifyData" + Date.now();
    function _(e, n, t, r) {
        var o;
        try {
            o = document.createElement("span");
        } catch (e) {
            return r ? "" : null;
        }
        var i = l.iconToSVG(t, f.mergeCustomisations(f.defaults, n)),
            a = e.element,
            u = e.finder,
            s = e.name,
            d = a ? a.getAttribute("class") : "",
            v = u ? u.classFilter(d ? d.split(/\s+/) : []) : [],
            p =
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="' +
                ("iconify iconify--" +
                    s.prefix +
                    ("" === s.provider ? "" : " iconify--" + s.provider) +
                    (v.length ? " " + v.join(" ") : "")) +
                '">' +
                c.replaceIDs(i.body) +
                "</svg>";
        o.innerHTML = p;
        var h = o.childNodes[0],
            g = h.style,
            m = i.attributes;
        if (
            (Object.keys(m).forEach(function (e) {
                h.setAttribute(e, m[e]);
            }),
            i.inline && (g.verticalAlign = "-0.125em"),
            a)
        ) {
            for (var b = a.attributes, y = 0; y < b.length; y++) {
                var I = b.item(y);
                if (I) {
                    var j = I.name;
                    if ("class" !== j && "style" !== j && void 0 === m[j])
                        try {
                            h.setAttribute(j, I.value);
                        } catch (e) {}
                }
            }
            for (var x = a.style, O = 0; O < x.length; O++) {
                var P = x[O];
                g[P] = x[P];
            }
        }
        if (u) {
            var w = { name: s, status: "loaded", customisations: n };
            (h[S] = w), (h[A] = u);
        }
        var M = r ? o.innerHTML : h;
        return (
            a && a.parentNode
                ? a.parentNode.replaceChild(h, a)
                : o.removeChild(h),
            M
        );
    }
    var E = [];
    function k(e) {
        for (var n = 0; n < E.length; n++) {
            var t = E[n];
            if (("function" == typeof t.node ? t.node() : t.node) === e)
                return t;
        }
    }
    function C(e, n) {
        void 0 === n && (n = !1);
        var t = k(e);
        return t
            ? (t.temporary && (t.temporary = n), t)
            : ((t = { node: e, temporary: n }), E.push(t), t);
    }
    function F() {
        return E;
    }
    var T = null,
        D = { childList: !0, subtree: !0, attributes: !0 };
    function N(e) {
        if (e.observer) {
            var n = e.observer;
            n.pendingScan ||
                (n.pendingScan = setTimeout(function () {
                    delete n.pendingScan, T && T(e);
                }));
        }
    }
    function L(e, n) {
        if (e.observer) {
            var t = e.observer;
            if (!t.pendingScan)
                for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (
                        (o.addedNodes && o.addedNodes.length > 0) ||
                        ("attributes" === o.type && void 0 !== o.target[A])
                    )
                        return void (t.paused || N(e));
                }
        }
    }
    function z(e, n) {
        e.observer.instance.observe(n, D);
    }
    function R(e) {
        var n = e.observer;
        if (!n || !n.instance) {
            var t = "function" == typeof e.node ? e.node() : e.node;
            t &&
                (n || ((n = { paused: 0 }), (e.observer = n)),
                (n.instance = new MutationObserver(L.bind(null, e))),
                z(e, t),
                n.paused || N(e));
        }
    }
    function q() {
        F().forEach(R);
    }
    function U(e) {
        if (e.observer) {
            var n = e.observer;
            n.pendingScan &&
                (clearTimeout(n.pendingScan), delete n.pendingScan),
                n.instance && (n.instance.disconnect(), delete n.instance);
        }
    }
    function V(e) {
        var n = null !== T;
        T !== e && ((T = e), n && F().forEach(U)),
            n
                ? q()
                : (function (e) {
                      var n = document;
                      "complete" === n.readyState ||
                      ("loading" !== n.readyState &&
                          !n.documentElement.doScroll)
                          ? e()
                          : (n.addEventListener("DOMContentLoaded", e),
                            window.addEventListener("load", e));
                  })(q);
    }
    function G(e) {
        (e ? [e] : F()).forEach(function (e) {
            if (e.observer) {
                var n = e.observer;
                if ((n.paused++, !(n.paused > 1) && n.instance))
                    n.instance.disconnect();
            } else e.observer = { paused: 1 };
        });
    }
    function $(e) {
        (e ? [e] : F()).forEach(function (e) {
            if (e.observer) {
                var n = e.observer;
                if (n.paused && (n.paused--, !n.paused)) {
                    var t = "function" == typeof e.node ? e.node() : e.node;
                    if (!t) return;
                    n.instance ? z(e, t) : R(e);
                }
            } else R(e);
        });
    }
    function B(e, n) {
        void 0 === n && (n = !1);
        var t = C(e, n);
        return R(t), t;
    }
    function Q(e) {
        var n = k(e);
        n &&
            (U(n),
            (function (e) {
                E = E.filter(function (n) {
                    var t = "function" == typeof n.node ? n.node() : n.node;
                    return e !== t;
                });
            })(e));
    }
    var H = [];
    function J(e) {
        return (
            "string" == typeof e && (e = o.stringToIcon(e)),
            null !== e && o.validateIcon(e) ? e : null
        );
    }
    function Y(e) {
        var n = [];
        H.forEach(function (t) {
            var r = t.find(e);
            Array.prototype.forEach.call(r, function (e) {
                var r = e;
                if (void 0 === r[A] || r[A] === t) {
                    var o = J(t.name(r));
                    if (null !== o) {
                        r[A] = t;
                        var i = { element: r, finder: t, name: o };
                        n.push(i);
                    }
                }
            });
        });
        var t = e.querySelectorAll("svg.iconify");
        return (
            Array.prototype.forEach.call(t, function (e) {
                var t = e,
                    r = t[A],
                    o = t[S];
                if (r && o) {
                    var i = J(r.name(t));
                    if (null !== i) {
                        var a,
                            c = !1;
                        if (
                            (i.prefix !== o.name.prefix ||
                            i.name !== o.name.name
                                ? (c = !0)
                                : ((a = r.customisations(t)),
                                  (function (e, n) {
                                      var t = Object.keys(e),
                                          r = Object.keys(n);
                                      if (t.length !== r.length) return !1;
                                      for (var o = 0; o < t.length; o++) {
                                          var i = t[o];
                                          if (n[i] !== e[i]) return !1;
                                      }
                                      return !0;
                                  })(o.customisations, a) || (c = !0)),
                            c)
                        ) {
                            var u = {
                                element: t,
                                finder: r,
                                name: i,
                                customisations: a,
                            };
                            n.push(u);
                        }
                    }
                }
            }),
            n
        );
    }
    var Z = !1;
    function K() {
        Z ||
            ((Z = !0),
            setTimeout(function () {
                Z && ((Z = !1), W());
            }));
    }
    function W(e, n) {
        void 0 === n && (n = !1), (Z = !1);
        var t = Object.create(null);
        if (
            ((e ? [e] : F()).forEach(function (e) {
                var r = "function" == typeof e.node ? e.node() : e.node;
                if (r && r.querySelectorAll) {
                    var o = !1,
                        a = !1;
                    Y(r).forEach(function (n) {
                        var r,
                            c,
                            u = n.element,
                            f = n.name,
                            l = f.provider,
                            s = f.prefix,
                            v = f.name,
                            p = u[S];
                        if (
                            void 0 !== p &&
                            ((r = p.name),
                            (c = f),
                            null !== r &&
                                null !== c &&
                                r.name === c.name &&
                                r.prefix === c.prefix)
                        )
                            switch (p.status) {
                                case "missing":
                                    return;
                                case "loading":
                                    if (
                                        d.coreModules.api &&
                                        d.coreModules.api.isPending({
                                            provider: l,
                                            prefix: s,
                                            name: v,
                                        })
                                    )
                                        return void (o = !0);
                            }
                        var h = i.getStorage(l, s);
                        if (void 0 === h.icons[v]) {
                            if (h.missing[v])
                                return (
                                    (p = {
                                        name: f,
                                        status: "missing",
                                        customisations: {},
                                    }),
                                    void (u[S] = p)
                                );
                            if (
                                d.coreModules.api &&
                                !d.coreModules.api.isPending({
                                    provider: l,
                                    prefix: s,
                                    name: v,
                                })
                            ) {
                                void 0 === t[l] && (t[l] = Object.create(null));
                                var g = t[l];
                                void 0 === g[s] && (g[s] = Object.create(null)),
                                    (g[s][v] = !0);
                            }
                            (p = {
                                name: f,
                                status: "loading",
                                customisations: {},
                            }),
                                (u[S] = p),
                                (o = !0);
                        } else {
                            !a && e.observer && (G(e), (a = !0));
                            var m =
                                void 0 !== n.customisations
                                    ? n.customisations
                                    : n.finder.customisations(u);
                            _(n, m, i.getIcon(h, v));
                        }
                    }),
                        e.temporary && !o
                            ? Q(r)
                            : n && o
                            ? B(r, !0)
                            : a && e.observer && $(e);
                }
            }),
            d.coreModules.api)
        ) {
            var r = d.coreModules.api;
            Object.keys(t).forEach(function (e) {
                var n = t[e];
                Object.keys(n).forEach(function (t) {
                    r.loadIcons(
                        Object.keys(n[t]).map(function (n) {
                            return { provider: e, prefix: t, name: n };
                        }),
                        K
                    );
                });
            });
        }
    }
    var X = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.rotateFromString = void 0),
                (n.rotateFromString = function (e) {
                    var n = e.replace(/^-?[0-9.]*/, "");
                    function t(e) {
                        for (; e < 0; ) e += 4;
                        return e % 4;
                    }
                    if ("" === n) {
                        var r = parseInt(e);
                        return isNaN(r) ? 0 : t(r);
                    }
                    if (n !== e) {
                        var o = 0;
                        switch (n) {
                            case "%":
                                o = 25;
                                break;
                            case "deg":
                                o = 90;
                        }
                        if (o) {
                            var i = parseFloat(e.slice(0, e.length - n.length));
                            return isNaN(i) ? 0 : (i /= o) % 1 == 0 ? t(i) : 0;
                        }
                    }
                    return 0;
                });
        }),
        ee = e(function (e, n) {
            Object.defineProperty(n, "__esModule", { value: !0 }),
                (n.alignmentFromString = n.flipFromString = void 0);
            var t = /[\s,]+/;
            (n.flipFromString = function (e, n) {
                n.split(t).forEach(function (n) {
                    switch (n.trim()) {
                        case "horizontal":
                            e.hFlip = !0;
                            break;
                        case "vertical":
                            e.vFlip = !0;
                    }
                });
            }),
                (n.alignmentFromString = function (e, n) {
                    n.split(t).forEach(function (n) {
                        var t = n.trim();
                        switch (t) {
                            case "left":
                            case "center":
                            case "right":
                                e.hAlign = t;
                                break;
                            case "top":
                            case "middle":
                            case "bottom":
                                e.vAlign = t;
                                break;
                            case "slice":
                            case "crop":
                                e.slice = !0;
                                break;
                            case "meet":
                                e.slice = !1;
                        }
                    });
                });
        });
    function ne(e, n) {
        return e.hasAttribute(n);
    }
    function te(e, n) {
        return e.getAttribute(n);
    }
    var re = ["inline", "hFlip", "vFlip"],
        oe = ["width", "height"],
        ie = "iconify-inline",
        ae = {
            find: function (e) {
                return e.querySelectorAll(
                    "i.iconify, span.iconify, i.iconify-inline, span.iconify-inline"
                );
            },
            name: function (e) {
                return ne(e, "data-icon") ? te(e, "data-icon") : null;
            },
            customisations: function (e, n) {
                void 0 === n && (n = { inline: !1 });
                var t = n,
                    r = e.getAttribute("class");
                if (
                    (-1 !== (r ? r.split(/\s+/) : []).indexOf(ie) &&
                        (t.inline = !0),
                    ne(e, "data-rotate"))
                ) {
                    var o = X.rotateFromString(te(e, "data-rotate"));
                    o && (t.rotate = o);
                }
                return (
                    ne(e, "data-flip") &&
                        ee.flipFromString(t, te(e, "data-flip")),
                    ne(e, "data-align") &&
                        ee.alignmentFromString(t, te(e, "data-align")),
                    re.forEach(function (n) {
                        if (ne(e, "data-" + n)) {
                            var r = (function (e, n) {
                                var t = e.getAttribute(n);
                                return (
                                    t === n ||
                                    "true" === t ||
                                    ("" !== t && "false" !== t && null)
                                );
                            })(e, "data-" + n);
                            "boolean" == typeof r && (t[n] = r);
                        }
                    }),
                    oe.forEach(function (n) {
                        if (ne(e, "data-" + n)) {
                            var r = te(e, "data-" + n);
                            "" !== r && (t[n] = r);
                        }
                    }),
                    t
                );
            },
            classFilter: function (e) {
                var n = [];
                return (
                    e.forEach(function (e) {
                        "iconify" !== e &&
                            "" !== e &&
                            "iconify--" !== e.slice(0, 9) &&
                            n.push(e);
                    }),
                    n
                );
            },
        };
    function ce(e, n, t) {
        var r = a.getIconData(e);
        return r
            ? _(
                  { name: o.stringToIcon(e) },
                  f.mergeCustomisations(f.defaults, n),
                  r,
                  t
              )
            : null;
    }
    var ue = {
        getVersion: function () {
            return "2.0.3";
        },
        renderSVG: function (e, n) {
            return ce(e, n, !1);
        },
        renderHTML: function (e, n) {
            return ce(e, n, !0);
        },
        renderIcon: function (e, n) {
            var t = a.getIconData(e);
            if (!t) return null;
            var r = f.mergeCustomisations(f.defaults, n);
            return l.iconToSVG(t, r);
        },
        scan: function (e) {
            e
                ? (function (e) {
                      var n = k(e);
                      n ? W(n) : W({ node: e, temporary: !0 }, !0);
                  })(e)
                : W();
        },
        observe: function (e) {
            B(e);
        },
        stopObserving: function (e) {
            Q(e);
        },
        pauseObserver: function (e) {
            if (e) {
                var n = k(e);
                n && G(n);
            } else G();
        },
        resumeObserver: function (e) {
            if (e) {
                var n = k(e);
                n && $(n);
            } else $();
        },
    };
    if ("undefined" != typeof document && "undefined" != typeof window) {
        !(function () {
            if (document.documentElement) return C(document.documentElement);
            E.push({
                node: function () {
                    return document.documentElement;
                },
            });
        })(),
            (function (e) {
                -1 === H.indexOf(e) && H.push(e);
            })(ae);
        var fe = window;
        if (void 0 !== fe.IconifyPreload) {
            var le = fe.IconifyPreload,
                se = "Invalid IconifyPreload syntax.";
            "object" == typeof le &&
                null !== le &&
                (le instanceof Array ? le : [le]).forEach(function (e) {
                    try {
                        ("object" != typeof e ||
                            null === e ||
                            e instanceof Array ||
                            "object" != typeof e.icons ||
                            "string" != typeof e.prefix ||
                            !a.storageFunctions.addCollection(e)) &&
                            console.error(se);
                    } catch (e) {
                        console.error(se);
                    }
                });
        }
        setTimeout(function () {
            V(W), W();
        });
    }
    var de = {
            enableCache: function (e, n) {
                return p.toggleBrowserCache(e, !1 !== n);
            },
            disableCache: function (e) {
                return p.toggleBrowserCache(e, !0);
            },
        },
        ve = { _api: P.APIInternalFunctions };
    [a.storageFunctions, s.builderFunctions, ue, de, P.APIFunctions].forEach(
        function (e) {
            for (var n in e) ve[n] = e[n];
        }
    ),
        (d.coreModules.api = O.API);
    var pe = M.getAPIModule;
    try {
        "undefined" != typeof document &&
            "undefined" != typeof window &&
            (pe =
                "function" == typeof fetch && "function" == typeof Promise
                    ? M.getAPIModule
                    : w.getAPIModule);
    } catch (se) {}
    if (
        (I.setAPIModule("", pe(j.getAPIConfig)),
        (ve._api.setFetch = function (e) {
            M.setFetch(e),
                pe !== M.getAPIModule &&
                    ((pe = M.getAPIModule),
                    I.setAPIModule("", pe(j.getAPIConfig)));
        }),
        "undefined" != typeof document && "undefined" != typeof window)
    ) {
        (d.coreModules.cache = v.storeCache), v.loadCache();
        var he = window;
        if (void 0 !== he.IconifyProviders) {
            var ge = he.IconifyProviders;
            if ("object" == typeof ge && null !== ge)
                for (var me in ge) {
                    var be = "IconifyProviders[" + me + "] is invalid.";
                    try {
                        var ye = ge[me];
                        if (
                            "object" != typeof ye ||
                            !ye ||
                            void 0 === ye.resources
                        )
                            continue;
                        j.setAPIConfig(me, ye) || console.error(be);
                    } catch (e) {
                        console.error(be);
                    }
                }
        }
    }
    return ve;
})();
try {
    void 0 === self.Iconify && (self.Iconify = Iconify);
} catch (e) {}
if ("object" == typeof exports)
    try {
        (exports.__esModule = !0), (exports.default = Iconify);
    } catch (e) {}
