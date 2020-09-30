(window.webpackJsonp = window.webpackJsonp || []).push([
    [107],
    {
        "+3YS": function (e, t) {
            e.exports = function (e) {
                if (Array.isArray(e)) return e;
            };
        },
        "+Am/": function (e, t, n) {
            "use strict";
            var r = n("nxTg"),
                o = n.n(r),
                i = n("mXGw"),
                a = n("u8vh"),
                c = n("NthX"),
                s = n.n(c),
                u = n("fFdx"),
                l = n.n(u),
                f = n("SDJZ"),
                d = n.n(f),
                p = n("NToG"),
                m = n.n(p),
                h = n("v32R"),
                v = n("tyvn"),
                g = n("8Xpx"),
                _ = (function () {
                    function e() {
                        d()(this, e);
                    }
                    return (
                        m()(e, [
                            {
                                key: "getApps",
                                value: (function () {
                                    var e = l()(
                                        s.a.mark(function e(t) {
                                            var n, r, o, i, a;
                                            return s.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.prev = 0), (e.next = 3), h.a.post(g.a.PLATFORM_VALUES, { project: v.vc.OTP, version: g.b, data: { list: g.c } });
                                                            case 3:
                                                                if (
                                                                    ((r = e.sent),
                                                                    (o = r.client_apps),
                                                                    !(i = (null === h.b || void 0 === h.b ? void 0 : null === (n = h.b.services) || void 0 === n ? void 0 : n.apps.url) || null) ||
                                                                        0 === (null === o || void 0 === o ? void 0 : o.apps.length))
                                                                ) {
                                                                    e.next = 10;
                                                                    break;
                                                                }
                                                                if (
                                                                    !(a =
                                                                        null === o || void 0 === o
                                                                            ? void 0
                                                                            : o.apps.find(function (e) {
                                                                                  return e.name === t;
                                                                              }))
                                                                ) {
                                                                    e.next = 10;
                                                                    break;
                                                                }
                                                                return e.abrupt("return", i + a.link);
                                                            case 10:
                                                                return e.abrupt("return", null);
                                                            case 13:
                                                                (e.prev = 13), (e.t0 = e.catch(0));
                                                            case 16:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null,
                                                [[0, 13]]
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                        ]),
                        e
                    );
                })();
            n.d(t, "c", function () {
                return y;
            }),
                n.d(t, "b", function () {
                    return E;
                }),
                n.d(t, "d", function () {
                    return b;
                });
            var y = function (e, t, n) {
                    var r = n
                        ? e.find(function (e) {
                              return e.type === n;
                          })
                        : null;
                    return (
                        r ||
                            (r = e.find(function (e) {
                                return e.type === t;
                            })),
                        r || e[0]
                    );
                },
                E = function (e, t) {
                    return (
                        e.find(function (e) {
                            return e.type === t;
                        }) || e[0]
                    );
                },
                b = function (e, t) {
                    return t.map(function (t) {
                        return e.find(function (e) {
                            return e.type === t;
                        });
                    });
                };
            t.a = function (e) {
                var t = Object(i.useState)(a.a.ANDROID.APK),
                    n = o()(t, 2),
                    r = n[0],
                    c = n[1];
                return (
                    Object(i.useEffect)(
                        function () {
                            new _().getApps(e).then(function (e) {
                                null !== e && c(e);
                            });
                        },
                        [e]
                    ),
                    r
                );
            };
        },
        "+I+c": function (e, t, n) {
            "use strict";
            function r(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        "+IV6": function (e, t) {
            function n(t) {
                return (
                    (e.exports = n = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    n(t)
                );
            }
            e.exports = n;
        },
        "+bRE": function (e, t) {
            e.exports = function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        },
        "+edc": function (e, t, n) {
            var r = n("sU/p");
            e.exports = function (e, t, n) {
                for (var o in t) r(e, o, t[o], n);
                return e;
            };
        },
        "+jjx": function (e, t, n) {
            n("z6KD")("asyncIterator");
        },
        "/69c": function (e, t) {
            e.exports =
                Math.sign ||
                function (e) {
                    return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
                };
        },
        "/6rt": function (e, t, n) {
            "use strict";
            var r = n("E7Vc");
            e.exports = function (e, t) {
                return (
                    !!e &&
                    r(function () {
                        t ? e.call(null, function () {}, 1) : e.call(null);
                    })
                );
            };
        },
        "/dwC": function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Reflect", {
                has: function (e, t) {
                    return t in e;
                },
            });
        },
        "/p/l": function (e, t, n) {
            "use strict";
            var r = n("6eLe");
            t.a = function (e) {
                if ("true" !== localStorage.getItem("DISABLE_LIVETEX_CHAT")) {
                    window.LiveTex = window.LiveTex || {};
                    var t = e.lang,
                        n = e.userId,
                        o = e.email,
                        i = e.name,
                        a = e.phone,
                        c = e.serviceLevel,
                        s = e.openChat,
                        u = void 0 === s || s;
                    if (window.LiveTex.inited && u) window.LiveTex.showWelcomeWindow();
                    else if (!window.LiveTex.loading) {
                        window.LiveTex.loading = !0;
                        var l = "ar" === t || "hi" === t || "ms" === t || "bn" === t || "ur" === t || "ja" === t || "fl" === t ? "en" : t,
                            f = "https://widgets-3-omni-iframe.livetex.me";
                        (window.liveTexID = r.l),
                            (window.liveTex = !0),
                            (window.liveTex_object = !0),
                            (window.ltLang = l),
                            (window.ltSkipBrowserCheck = !0),
                            (window.ltDebug = !0),
                            (window.LiveTex = {
                                onLiveTexReady: function () {
                                    window.LiveTex.setConversationAttributes(
                                        { email: "".concat(o) || "", name: "".concat(i) || "", phone: "".concat(a) || "", trader_id: "".concat(n) || "not identified", service_level: "".concat(c) || "" },
                                        { is_identify: n ? "1" : "0", user_id: "".concat(n || "0") }
                                    ),
                                        u && window.LiveTex.showWelcomeWindow(),
                                        (function () {
                                            var e = window.document.querySelector(".lt-welcome");
                                            if (e) {
                                                var t = e.querySelector(".lt-wrapper-close");
                                                t && (t.dataset.test = "livetex-close-button");
                                            }
                                        })();
                                },
                            });
                        var d = new XMLHttpRequest();
                        (d.onreadystatechange = function () {
                            if (4 === d.readyState && 200 === d.status) {
                                (window.LiveTex.envSettings = JSON.parse(d.responseText)), (window.LiveTex.envSettings.LTX_URL = "".concat(f, "/"));
                                var e = document.createElement("script");
                                (e.type = "text/javascript"),
                                    (e.async = !0),
                                    (e.src = p("/js/app3.js")),
                                    (e.onload = function () {
                                        document.body.removeChild(e), (window.LiveTex.inited = !0), (window.LiveTex.loading = !1);
                                    }),
                                    document.body.appendChild(e);
                            } else 200 !== d.status && (window.LiveTex.loading = !1);
                        }),
                            d.open("GET", p("/js/widgetsSettings.json")),
                            d.send();
                    }
                }
                function p(e) {
                    return f + e;
                }
            };
        },
        "/tvN": function (e, t, n) {
            var r = n("X6VK"),
                o = n("yM7o"),
                i = Math.exp;
            r(r.S, "Math", {
                tanh: function (e) {
                    var t = o((e = +e)),
                        n = o(-e);
                    return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (i(e) + i(-e));
                },
            });
        },
        "0a0o": function (e, t, n) {},
        "0oPD": function (e, t) {
            t.f = Object.getOwnPropertySymbols;
        },
        "10fs": function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return c;
            });
            var r = n("8VmE"),
                o = n.n(r),
                i = n("mXGw"),
                a = n.n(i),
                c = function (e) {
                    return a.a.createElement(
                        "svg",
                        o()({ fill: "none", height: 18, viewBox: "0 0 146 18", width: 146 }, e),
                        a.a.createElement(
                            "g",
                            { clipRule: "evenodd", fillRule: "evenodd" },
                            a.a.createElement("path", {
                                d:
                                    "M.083 9.492c0 9.49 14.268 9.49 14.268 0C14.35 0 .084 0 .084 9.492zm3.65 0c0-4.91 6.968-4.91 6.968 0-.075.86-.475 1.66-1.12 2.245s-1.488.907-2.364.907c-.875 0-1.719-.324-2.364-.907s-1.044-1.385-1.12-2.245zm17.42-6.873h-3.567v13.745h8.627v-3.192h-5.06zM32.934 7.2h-.166L30.28 2.62h-3.817v.49l4.646 7.446v5.81h3.484v-5.81l4.728-7.446v-.49h-3.899zM48.529 8.51l-5.475-5.972h-1.328v13.827h3.65v-6.137l2.986 3.029h.415l2.986-3.029v6.137h3.65V2.62H54.17l-5.64 5.89zm17.005-5.89h-6.139v13.745h3.567v-3.518h2.571c6.637 0 6.637-10.228 0-10.228zm0 7.036h-2.572V5.728h2.571c2.075.082 1.91 3.929 0 3.929zm12.774-3.928h3.403v10.637h3.483V5.727h3.401V2.62H78.308zM97.472 2.62h-6.138v13.745H94.9v-4.01h1.825l2.405 4.01h3.982v-.491l-2.737-4.418c3.567-2.29 2.571-8.836-2.904-8.836zm0 6.545H94.9V5.727h2.57c1.992.082 1.91 3.437 0 3.437zm13.439-6.71l-6.305 13.419v.491h3.483l.83-1.718h5.475l.83 1.718h3.483v-.491l-6.221-13.418h-1.576zm-.747 9.165l1.576-3.6 1.577 3.6zm16.176-9h-5.226v13.745h5.226c9.043 0 9.043-13.745 0-13.745zm0 10.554h-1.658V5.809h1.658c4.397 0 4.397 7.364 0 7.364zm13.522.082V10.8h4.728V7.692h-4.728V5.727h5.143V2.62h-8.71v13.745h8.876v-3.11z",
                                fill: "#fff",
                            }),
                            a.a.createElement("path", { d: "M7.051 10.8l-5.392 6.545h10.784z", fill: "#2aa76d" }),
                            a.a.createElement("path", { d: "M43.386 0l4.977 4.909L53.34 0z", fill: "#df553a" })
                        )
                    );
                };
        },
        "1Alt": function (e, t) {
            var n = 0,
                r = Math.random();
            e.exports = function (e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36));
            };
        },
        "1Tj+": function (e, t, n) {
            var r = n("IdFN"),
                o = n("WWmS"),
                i = n("ml72"),
                a = n("5MU4"),
                c = n("ezc+"),
                s = n("HWsP"),
                u = Object.getOwnPropertyDescriptor;
            t.f = n("GGqZ")
                ? u
                : function (e, t) {
                      if (((e = i(e)), (t = a(t, !0)), s))
                          try {
                              return u(e, t);
                          } catch (e) {}
                      if (c(e, t)) return o(!r.f.call(e, t), e[t]);
                  };
        },
        "1UZS": function (e, t, n) {},
        "1UqV": function (e, t, n) {
            n("b01t")("Int8", 1, function (e) {
                return function (t, n, r) {
                    return e(this, t, n, r);
                };
            });
        },
        "1ZPH": function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("cb3D"),
                i = n("ROCd"),
                a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
            r(r.P + r.F * a, "String", {
                padEnd: function (e) {
                    return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
                },
            });
        },
        "1hyt": function (e, t, n) {
            var r = n("X6VK"),
                o = n("PAFS"),
                i = Object.isExtensible;
            r(r.S, "Reflect", {
                isExtensible: function (e) {
                    return o(e), !i || i(e);
                },
            });
        },
        "1npj": function (e, t, n) {
            "use strict";
            var r = n("SDJZ"),
                o = n.n(r),
                i = n("NToG"),
                a = n.n(i),
                c = n("K4DB"),
                s = n.n(c),
                u = n("+IV6"),
                l = n.n(u),
                f = n("eef+"),
                d = n.n(f),
                p = n("mXGw"),
                m = n.n(p),
                h = n("v32R"),
                v = n("F1LU"),
                g = n("o7Pm"),
                _ = n("UCF5"),
                y = n("8Jek"),
                E = n.n(y),
                b = n("deTv"),
                w =
                    (n("m+cO"),
                    function (e) {
                        return m.a.createElement("a", { className: E()("guest-c-nav-c-nav-link", e.className), href: e.href }, m.a.createElement(b.c, e.trans.title));
                    }),
                S = [
                    { id: 1, trans: Object(b.e)({ title: { id: "site_about_company", defaultMessage: "About us" } }), href: "/about" },
                    {
                        id: 2,
                        trans: Object(b.e)({ title: { id: "user_tpl_training", defaultMessage: "Education" } }),
                        href: function (e) {
                            return "".concat(e.plusUrl, "/education?theme=").concat(e.theme);
                        },
                    },
                    {
                        id: 3,
                        trans: Object(b.e)({ title: { id: "stocksup_faq", defaultMessage: "FAQ" } }),
                        href: function (e) {
                            return "".concat(e.plusUrl, "/faq?theme=").concat(e.theme);
                        },
                    },
                    {
                        id: 4,
                        trans: Object(b.e)({ title: { id: "stocksup_assets", defaultMessage: "Assets" } }),
                        href: function (e) {
                            return "".concat(e.plusUrl, "/assets?theme=").concat(e.theme);
                        },
                    },
                ],
                O =
                    (n("eo2L"),
                    function (e) {
                        return m.a.createElement(
                            "nav",
                            { className: E()("guest-c-nav-c-nav-links", e.className) },
                            m.a.createElement(
                                "ul",
                                { className: "guest-c-nav-c-nav-links__list" },
                                S.map(function (t) {
                                    return m.a.createElement(
                                        "li",
                                        { key: "main-link-".concat(t.id), className: "guest-c-nav-c-nav-links__item" },
                                        m.a.createElement(w, { trans: t.trans, href: "function" == typeof t.href ? t.href(e) : t.href })
                                    );
                                })
                            )
                        );
                    }),
                A = n("tyvn");
            n("yOxJ");
            n.d(t, "a", function () {
                return T;
            });
            var T = (function (e) {
                function t() {
                    var e, n;
                    o()(this, t);
                    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return (
                        ((n = s()(this, (e = l()(t)).call.apply(e, [this].concat(i)))).state = { plusUrl: "" }),
                        (n.onNavClose = function () {
                            "function" == typeof n.props.onNavClose && n.props.onNavClose();
                        }),
                        n
                    );
                }
                return (
                    d()(t, e),
                    a()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this;
                                h.b.load().then(function () {
                                    var t = e.props.lang;
                                    e.setState({ plusUrl: Object(v.a)({ sourceUrl: h.b.services.plus.url, lang: t }) });
                                });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.lang,
                                    n = e.urlLang,
                                    r = void 0 === n ? "" : n,
                                    o = e.collapsed,
                                    i = this.state.plusUrl;
                                return m.a.createElement(
                                    g.a,
                                    { api: { navToggle: this.onNavClose }, collapsed: o, navigationLogo: m.a.createElement(_.a, { href: "".concat(r, "/platform"), className: "main-menu__logo_binary" }) },
                                    m.a.createElement(O, { plusUrl: i, lang: t, theme: A.cd.DARK })
                                );
                            },
                        },
                    ]),
                    t
                );
            })(m.a.Component);
        },
        "1qKx": function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Object", { setPrototypeOf: n("3ydu").set });
        },
        "1wfo": function (e, t, n) {
            var r = n("9liC"),
                o = n("Cmsx"),
                i = n("UnHL"),
                a = n("Sp5b"),
                c = n("C5nI");
            e.exports = function (e, t) {
                var n = 1 == e,
                    s = 2 == e,
                    u = 3 == e,
                    l = 4 == e,
                    f = 6 == e,
                    d = 5 == e || f,
                    p = t || c;
                return function (t, c, m) {
                    for (var h, v, g = i(t), _ = o(g), y = r(c, m, 3), E = a(_.length), b = 0, w = n ? p(t, E) : s ? p(t, 0) : void 0; E > b; b++)
                        if ((d || b in _) && ((v = y((h = _[b]), b, g)), e))
                            if (n) w[b] = v;
                            else if (v)
                                switch (e) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return h;
                                    case 6:
                                        return b;
                                    case 2:
                                        w.push(h);
                                }
                            else if (l) return !1;
                    return f ? -1 : u || l ? l : w;
                };
            };
        },
        "2KG9": function (e, t, n) {
            "use strict";
            var r = n("OmE2");
            e.exports = function (e, t, n, o, i) {
                var a = new Error(e);
                return r(a, t, n, o, i);
            };
        },
        "2LOZ": function (e, t, n) {
            var r = n("Ibj2"),
                o = n("9dxi")("iterator"),
                i = Array.prototype;
            e.exports = function (e) {
                return void 0 !== e && (r.Array === e || i[o] === e);
            };
        },
        "2Tod": function (e, t, n) {
            var r = n("X6VK"),
                o = n("j/vf"),
                i = n("ml72"),
                a = n("1Tj+"),
                c = n("CIiV");
            r(r.S, "Object", {
                getOwnPropertyDescriptors: function (e) {
                    for (var t, n, r = i(e), s = a.f, u = o(r), l = {}, f = 0; u.length > f; ) void 0 !== (n = s(r, (t = u[f++]))) && c(l, t, n);
                    return l;
                },
            });
        },
        "2UZ+": function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("1wfo")(6),
                i = "findIndex",
                a = !0;
            i in [] &&
                Array(1)[i](function () {
                    a = !1;
                }),
                r(r.P + r.F * a, "Array", {
                    findIndex: function (e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                }),
                n("OfmW")(i);
        },
        "3DBk": function (e, t, n) {
            var r = n("X6VK"),
                o = n("pGW6")(!1);
            r(r.S, "Object", {
                values: function (e) {
                    return o(e);
                },
            });
        },
        "3RxL": function (e, t, n) {
            n("gRlk")("getOwnPropertyNames", function () {
                return n("UYXy").f;
            });
        },
        "3Yeq": function (e, t, n) {
            var r = n("X6VK"),
                o = n("yM7o"),
                i = Math.exp;
            r(
                r.S +
                    r.F *
                        n("E7Vc")(function () {
                            return -2e-17 != !Math.sinh(-2e-17);
                        }),
                "Math",
                {
                    sinh: function (e) {
                        return Math.abs((e = +e)) < 1 ? (o(e) - o(-e)) / 2 : (i(e - 1) - i(-e - 1)) * (Math.E / 2);
                    },
                }
            );
        },
        "3bJw": function (e, t) {
            e.exports = function (e, t, n, r) {
                n && Object.defineProperty(e, t, { enumerable: n.enumerable, configurable: n.configurable, writable: n.writable, value: n.initializer ? n.initializer.call(r) : void 0 });
            };
        },
        "3ydu": function (e, t, n) {
            var r = n("Bsg+"),
                o = n("PAFS"),
                i = function (e, t) {
                    if ((o(e), !r(t) && null !== t)) throw TypeError(t + ": can't set as prototype!");
                };
            e.exports = {
                set:
                    Object.setPrototypeOf ||
                    ("__proto__" in {}
                        ? (function (e, t, r) {
                              try {
                                  (r = n("9liC")(Function.call, n("1Tj+").f(Object.prototype, "__proto__").set, 2))(e, []), (t = !(e instanceof Array));
                              } catch (e) {
                                  t = !0;
                              }
                              return function (e, n) {
                                  return i(e, n), t ? (e.__proto__ = n) : r(e, n), e;
                              };
                          })({}, !1)
                        : void 0),
                check: i,
            };
        },
        "42VA": function (e, t, n) {
            n("b01t")("Uint16", 2, function (e) {
                return function (t, n, r) {
                    return e(this, t, n, r);
                };
            });
        },
        "45ut": function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("UnHL"),
                i = n("5MU4"),
                a = n("A1KM"),
                c = n("1Tj+").f;
            n("GGqZ") &&
                r(r.P + n("j3QZ"), "Object", {
                    __lookupGetter__: function (e) {
                        var t,
                            n = o(this),
                            r = i(e, !0);
                        do {
                            if ((t = c(n, r))) return t.get;
                        } while ((n = a(n)));
                    },
                });
        },
        "495I": function (e, t, n) {
            var r = n("tJXC");
            e.exports = new r();
        },
        "4CMj": function (e, t, n) {},
        "4DfG": function (e, t, n) {
            "use strict";
            e.exports = n("UdKW");
        },
        "4OlW": function (e, t, n) {
            "use strict";
            var r = n("ovh1");
            e.exports = function (e, t, n) {
                return (
                    r.forEach(n, function (n) {
                        e = n(e, t);
                    }),
                    e
                );
            };
        },
        "4SRy": function (e, t, n) {
            var r = n("P56o"),
                o = n("X6VK"),
                i = n("ROCd"),
                a = [].slice,
                c = /MSIE .\./.test(i),
                s = function (e) {
                    return function (t, n) {
                        var r = arguments.length > 2,
                            o = !!r && a.call(arguments, 2);
                        return e(
                            r
                                ? function () {
                                      ("function" == typeof t ? t : Function(t)).apply(this, o);
                                  }
                                : t,
                            n
                        );
                    };
                };
            o(o.G + o.B + o.F * c, { setTimeout: s(r.setTimeout), setInterval: s(r.setInterval) });
        },
        "4SbK": function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return s;
            });
            var r = n("mXGw"),
                o = n.n(r),
                i = n("8Jek"),
                a = n.n(i),
                c = n("CpkR"),
                s =
                    (n("4CMj"),
                    function (e) {
                        var t = e.color,
                            n = void 0 === t ? "primary" : t,
                            r = e.sizeIcon,
                            i = void 0 === r ? "medium" : r,
                            s = e.item,
                            u = e.href,
                            l = e.isFullContent,
                            f = e.onClick,
                            d = e.className;
                        return o.a.createElement(
                            c.a,
                            {
                                className: a()("com-c-button-app", i && "com-c-button-app_size_".concat(i), l && "com-c-button-app_full_width", !s.content.text && "com-c-button-app_aligh_center", d),
                                color: n,
                                onClick: function () {
                                    return s.productType ? f(s.productType) : f();
                                },
                                href: u || s.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                            },
                            "string" == typeof s.icon ? o.a.createElement("img", { className: "com-c-button-app__icon", src: s.icon, alt: "icon of app" }) : o.a.createElement(s.icon, { className: "com-c-button-app__icon" }),
                            l && s.content
                                ? o.a.createElement(
                                      "span",
                                      { className: "com-c-button-app__content" },
                                      s.content.text && o.a.createElement("span", null, s.content.text),
                                      o.a.createElement(
                                          "span",
                                          { className: "com-c-button-app__info" },
                                          o.a.createElement("span", { className: "com-c-button-app__title" }, s.content.title),
                                          s.content.size ? o.a.createElement("span", { className: "com-c-button-app__size" }, s.content.size) : null
                                      )
                                  )
                                : null
                        );
                    });
        },
        "4aJ6": function (e, t, n) {
            "use strict";
            n("iur1");
            var r = n("PAFS"),
                o = n("MBcE"),
                i = n("GGqZ"),
                a = /./.toString,
                c = function (e) {
                    n("sU/p")(RegExp.prototype, "toString", e, !0);
                };
            n("E7Vc")(function () {
                return "/a/b" != a.call({ source: "a", flags: "b" });
            })
                ? c(function () {
                      var e = r(this);
                      return "/".concat(e.source, "/", "flags" in e ? e.flags : !i && e instanceof RegExp ? o.call(e) : void 0);
                  })
                : "toString" != a.name &&
                  c(function () {
                      return a.call(this);
                  });
        },
        "5+rW": function (e, t, n) {
            "use strict";
            var r = new RegExp("%[a-f0-9]{2}", "gi"),
                o = new RegExp("(%[a-f0-9]{2})+", "gi");
            function i(e, t) {
                try {
                    return decodeURIComponent(e.join(""));
                } catch (e) {}
                if (1 === e.length) return e;
                t = t || 1;
                var n = e.slice(0, t),
                    r = e.slice(t);
                return Array.prototype.concat.call([], i(n), i(r));
            }
            function a(e) {
                try {
                    return decodeURIComponent(e);
                } catch (o) {
                    for (var t = e.match(r), n = 1; n < t.length; n++) t = (e = i(t, n).join("")).match(r);
                    return e;
                }
            }
            e.exports = function (e) {
                if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
                } catch (t) {
                    return (function (e) {
                        for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = o.exec(e); n; ) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0]);
                            } catch (e) {
                                var r = a(n[0]);
                                r !== n[0] && (t[n[0]] = r);
                            }
                            n = o.exec(e);
                        }
                        t["%C2"] = "�";
                        for (var i = Object.keys(t), c = 0; c < i.length; c++) {
                            var s = i[c];
                            e = e.replace(new RegExp(s, "g"), t[s]);
                        }
                        return e;
                    })(e);
                }
            };
        },
        "5BMI": function (e, t, n) {
            var r,
                o,
                i,
                a = n("9liC"),
                c = n("KFSm"),
                s = n("CLuC"),
                u = n("mggL"),
                l = n("P56o"),
                f = l.process,
                d = l.setImmediate,
                p = l.clearImmediate,
                m = l.MessageChannel,
                h = l.Dispatch,
                v = 0,
                g = {},
                _ = function () {
                    var e = +this;
                    if (g.hasOwnProperty(e)) {
                        var t = g[e];
                        delete g[e], t();
                    }
                },
                y = function (e) {
                    _.call(e.data);
                };
            (d && p) ||
                ((d = function (e) {
                    for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
                    return (
                        (g[++v] = function () {
                            c("function" == typeof e ? e : Function(e), t);
                        }),
                        r(v),
                        v
                    );
                }),
                (p = function (e) {
                    delete g[e];
                }),
                "process" == n("n+VH")(f)
                    ? (r = function (e) {
                          f.nextTick(a(_, e, 1));
                      })
                    : h && h.now
                    ? (r = function (e) {
                          h.now(a(_, e, 1));
                      })
                    : m
                    ? ((i = (o = new m()).port2), (o.port1.onmessage = y), (r = a(i.postMessage, i, 1)))
                    : l.addEventListener && "function" == typeof postMessage && !l.importScripts
                    ? ((r = function (e) {
                          l.postMessage(e + "", "*");
                      }),
                      l.addEventListener("message", y, !1))
                    : (r =
                          "onreadystatechange" in u("script")
                              ? function (e) {
                                    s.appendChild(u("script")).onreadystatechange = function () {
                                        s.removeChild(this), _.call(e);
                                    };
                                }
                              : function (e) {
                                    setTimeout(a(_, e, 1), 0);
                                })),
                (e.exports = { set: d, clear: p });
        },
        "5Fu2": function (e, t, n) {
            var r = n("PAFS"),
                o = n("b8Rm"),
                i = n("9dxi")("species");
            e.exports = function (e, t) {
                var n,
                    a = r(e).constructor;
                return void 0 === a || void 0 == (n = r(a)[i]) ? t : o(n);
            };
        },
        "5JdW": function (e, t, n) {
            e.exports = n.p + "../images/awards_9.d936e64c.jpg";
        },
        "5MU4": function (e, t, n) {
            var r = n("Bsg+");
            e.exports = function (e, t) {
                if (!r(e)) return e;
                var n, o;
                if (t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
                if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o;
                if (!t && "function" == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        "5QbJ": function (e, t, n) {
            "use strict";
            e.exports = function (e, t) {
                return function () {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                    return e.apply(t, n);
                };
            };
        },
        "5WRv": function (e, t, n) {
            var r = n("iNmH"),
                o = n("Qatm"),
                i = n("kluZ");
            e.exports = function (e) {
                return r(e) || o(e) || i();
            };
        },
        "5ZJp": function (e, t, n) {
            e.exports = n.p + "../images/home_features_profitline.8b136704.png";
        },
        "5aLd": function (e, t, n) {
            "use strict";
            function r(e, t, n) {
                if ((void 0 === n && (n = Error), !e)) throw new n(t);
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        "5frS": function (e, t, n) {
            "use strict";
            n("hGr/")(
                "trimRight",
                function (e) {
                    return function () {
                        return e(this, 2);
                    };
                },
                "trimEnd"
            );
        },
        "5hJT": function (e, t, n) {
            var r = n("X6VK");
            r(r.S + r.F, "Object", { assign: n("NR3o") });
        },
        "61jV": function (e, t, n) {
            var r = n("/69c"),
                o = Math.pow,
                i = o(2, -52),
                a = o(2, -23),
                c = o(2, 127) * (2 - a),
                s = o(2, -126);
            e.exports =
                Math.fround ||
                function (e) {
                    var t,
                        n,
                        o = Math.abs(e),
                        u = r(e);
                    return o < s ? u * (o / s / a + 1 / i - 1 / i) * s * a : (n = (t = (1 + a / i) * o) - (t - o)) > c || n != n ? u * (1 / 0) : u * n;
                };
        },
        "695R": function (e, t, n) {},
        "6JNi": function (e, t, n) {},
        "6Vmy": function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("CIiV");
            r(
                r.S +
                    r.F *
                        n("E7Vc")(function () {
                            function e() {}
                            return !(Array.of.call(e) instanceof e);
                        }),
                "Array",
                {
                    of: function () {
                        for (var e = 0, t = arguments.length, n = new ("function" == typeof this ? this : Array)(t); t > e; ) o(n, e, arguments[e++]);
                        return (n.length = t), n;
                    },
                }
            );
        },
        "6d4m": function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("Alw5");
            r(r.P + r.F * n("Fl7L")("includes"), "String", {
                includes: function (e) {
                    return !!~o(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
                },
            });
        },
        "6eLe": function (e, t, n) {
            "use strict";
            n.d(t, "m", function () {
                return i;
            }),
                n.d(t, "j", function () {
                    return a;
                }),
                n.d(t, "k", function () {
                    return c;
                }),
                n.d(t, "n", function () {
                    return s;
                }),
                n.d(t, "a", function () {
                    return u;
                }),
                n.d(t, "c", function () {
                    return l;
                }),
                n.d(t, "b", function () {
                    return f;
                }),
                n.d(t, "d", function () {
                    return g;
                }),
                n.d(t, "g", function () {
                    return _;
                }),
                n.d(t, "h", function () {
                    return y;
                }),
                n.d(t, "f", function () {
                    return E;
                }),
                n.d(t, "o", function () {
                    return b;
                }),
                n.d(t, "e", function () {
                    return S;
                }),
                n.d(t, "i", function () {
                    return O;
                }),
                n.d(t, "l", function () {
                    return A;
                });
            var r = n("f6l3"),
                o = n("tyvn"),
                i = Object(r.k)(),
                a = "__translationsList",
                c = "/public/locale/",
                s = { ASC: "asc", DESC: "desc" },
                u = { URL: "https://blog.".concat(i) },
                l = { WHITE: "olymp_white", DARK: "olymp_dark" },
                f = window._globalsConfig ? window._globalsConfig.project : o.xc;
            function d() {
                return f === o.xc;
            }
            function p() {
                return f === o.yc;
            }
            function m() {
                return f === o.zc;
            }
            function h() {
                return !!window._globalsConfig && "1" === window._globalsConfig.singleAccount;
            }
            function v() {
                return p() && !h();
            }
            var g = d(),
                _ = p(),
                y = m(),
                E = (h(), v());
            function b(e) {
                (f = e), (g = d()), (_ = p()), (y = m()), h(), (E = v());
            }
            var w = window._globalsConfig ? window._globalsConfig.denied_operations : [],
                S = !w || !w.includes(o.oc.DEPOSIT),
                O = !w || !w.includes(o.oc.PAYOUT),
                A = window._globalsConfig ? window._globalsConfig.lt_chat_id : "";
        },
        "6s8r": function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                return function (t) {
                    return e.apply(null, t);
                };
            };
        },
        "71V/": function (e, t, n) {
            var r = n("X6VK"),
                o = n("1Tj+").f,
                i = n("PAFS");
            r(r.S, "Reflect", {
                deleteProperty: function (e, t) {
                    var n = o(i(e), t);
                    return !(n && !n.configurable) && delete e[t];
                },
            });
        },
        "71kK": function (e, t, n) {
            "use strict";
            var r = n("ovh1");
            e.exports = function (e, t) {
                r.forEach(e, function (n, r) {
                    r !== t && r.toUpperCase() === t.toUpperCase() && ((e[t] = n), delete e[r]);
                });
            };
        },
        "75LO": function (e, t, n) {
            var r = n("UnHL"),
                o = n("LuBU");
            n("gRlk")("keys", function () {
                return function (e) {
                    return o(r(e));
                };
            });
        },
        "7L9N": function (e, t, n) {
            "use strict";
            function r(e, t) {
                (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        "896O": function (e, t, n) {
            var r = n("9dxi")("toPrimitive"),
                o = Date.prototype;
            r in o || n("tjmq")(o, r, n("Xi2U"));
        },
        "8C1o": function (e, t, n) {
            "use strict";
            var r = n("Xfku"),
                o = n("Bsg+"),
                i = n("Sp5b"),
                a = n("9liC"),
                c = n("9dxi")("isConcatSpreadable");
            e.exports = function e(t, n, s, u, l, f, d, p) {
                for (var m, h, v = l, g = 0, _ = !!d && a(d, p, 3); g < u; ) {
                    if (g in s) {
                        if (((m = _ ? _(s[g], g, n) : s[g]), (h = !1), o(m) && (h = void 0 !== (h = m[c]) ? !!h : r(m)), h && f > 0)) v = e(t, n, m, i(m.length), v, f - 1) - 1;
                        else {
                            if (v >= 9007199254740991) throw TypeError();
                            t[v] = m;
                        }
                        v++;
                    }
                    g++;
                }
                return v;
            };
        },
        "8Jek": function (e, t, n) {
            var r;
            !(function () {
                "use strict";
                var n = {}.hasOwnProperty;
                function o() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var i = typeof r;
                            if ("string" === i || "number" === i) e.push(r);
                            else if (Array.isArray(r) && r.length) {
                                var a = o.apply(null, r);
                                a && e.push(a);
                            } else if ("object" === i) for (var c in r) n.call(r, c) && r[c] && e.push(c);
                        }
                    }
                    return e.join(" ");
                }
                e.exports
                    ? ((o.default = o), (e.exports = o))
                    : void 0 ===
                          (r = function () {
                              return o;
                          }.apply(t, [])) || (e.exports = r);
            })();
        },
        "8K/8": function (e, t, n) {},
        "8KFY": function (e, t, n) {
            e.exports = n.p + "../images/awards_1.9ac25e2b.jpg";
        },
        "8V3g": function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t._ = function (e) {
                    return e;
                }),
                (t.defineMessages = function (e) {
                    return e;
                });
        },
        "8VmE": function (e, t) {
            function n() {
                return (
                    (e.exports = n =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }),
                    n.apply(this, arguments)
                );
            }
            e.exports = n;
        },
        "8Xpx": function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return o;
            }),
                n.d(t, "b", function () {
                    return i;
                }),
                n.d(t, "c", function () {
                    return a;
                }),
                n.d(t, "e", function () {
                    return c;
                }),
                n.d(t, "d", function () {
                    return s;
                }),
                n.d(t, "f", function () {
                    return u;
                });
            var r = n("UvPz"),
                o = { DEL_OPTION: "/user/del-option", PLATFORM_VALUES: "/platform/values", SET_OPTION: "/user/set-option", USER_VALUES: "/user/values", PROJECT_COLLECTION: "/project/collection" },
                i = "v4",
                a = [r.a.CAPTCHA_REQUIREMENTS, r.a.CLIENT_APPS, r.a.COUNTRY_DATA, r.a.CURRENT_LOCALE, r.a.DENIED_OPERATIONS, r.a.LOCALES, r.a.MAGIC_HOUR, r.a.PROJECTS, r.a.REG_CURRENCIES, r.a.SUPPORT_CHAT, r.a.SUPPORT_PHONES],
                c = [
                    r.c.ACCOUNTS,
                    r.c.ANALYTICS,
                    r.c.AVATAR,
                    r.c.BALANCE,
                    r.c.BONUSES,
                    r.c.DATA,
                    r.c.DUO_AUTH_STATE,
                    r.c.JIVO_SETTINGS,
                    r.c.MONEY_GROUP,
                    r.c.PAYMENT_SYSTEMS,
                    r.c.POLITICS,
                    r.c.PROMO,
                    r.c.SERVICE_LEVELS,
                    r.c.SESSION,
                    r.c.STOCKSUP,
                    r.c.VIP_STATUS_AMOUNT,
                    r.c.SOUND_PACKS,
                    r.c.KYC,
                ],
                s = [r.b.DEALS, r.b.OPTIONS, r.b.PAIRS, r.b.PAIRS_AVAILABLE, r.b.RISK_FREE_DEALS],
                u = [r.d.DEALS, r.d.PAIRS, r.d.PAIRS_AVAILABLE];
        },
        "8kJd": function (e, t, n) {
            var r = n("ZVIm")("keys"),
                o = n("1Alt");
            e.exports = function (e) {
                return r[e] || (r[e] = o(e));
            };
        },
        "9ZkT": function (e, t, n) {
            var r = n("1Tj+"),
                o = n("A1KM"),
                i = n("ezc+"),
                a = n("X6VK"),
                c = n("Bsg+"),
                s = n("PAFS");
            a(a.S, "Reflect", {
                get: function e(t, n) {
                    var a,
                        u,
                        l = arguments.length < 3 ? t : arguments[2];
                    return s(t) === l ? t[n] : (a = r.f(t, n)) ? (i(a, "value") ? a.value : void 0 !== a.get ? a.get.call(l) : void 0) : c((u = o(t))) ? e(u, n, l) : void 0;
                },
            });
        },
        "9cl8": function (e, t, n) {
            e.exports = n.p + "../images/awards_8.1c313a7e.jpg";
        },
        "9dxi": function (e, t, n) {
            var r = n("ZVIm")("wks"),
                o = n("1Alt"),
                i = n("P56o").Symbol,
                a = "function" == typeof i;
            (e.exports = function (e) {
                return r[e] || (r[e] = (a && i[e]) || (a ? i : o)("Symbol." + e));
            }).store = r;
        },
        "9liC": function (e, t, n) {
            var r = n("b8Rm");
            e.exports = function (e, t, n) {
                if ((r(e), void 0 === t)) return e;
                switch (n) {
                    case 1:
                        return function (n) {
                            return e.call(t, n);
                        };
                    case 2:
                        return function (n, r) {
                            return e.call(t, n, r);
                        };
                    case 3:
                        return function (n, r, o) {
                            return e.call(t, n, r, o);
                        };
                }
                return function () {
                    return e.apply(t, arguments);
                };
            };
        },
        "9ovy": function (e, t, n) {
            "use strict";
            var r = n("PAFS"),
                o = n("Sp5b"),
                i = n("dVhv"),
                a = n("Fu0I");
            n("Wifh")("match", 1, function (e, t, n, c) {
                return [
                    function (n) {
                        var r = e(this),
                            o = void 0 == n ? void 0 : n[t];
                        return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r));
                    },
                    function (e) {
                        var t = c(n, e, this);
                        if (t.done) return t.value;
                        var s = r(e),
                            u = String(this);
                        if (!s.global) return a(s, u);
                        var l = s.unicode;
                        s.lastIndex = 0;
                        for (var f, d = [], p = 0; null !== (f = a(s, u)); ) {
                            var m = String(f[0]);
                            (d[p] = m), "" === m && (s.lastIndex = i(u, o(s.lastIndex), l)), p++;
                        }
                        return 0 === p ? null : d;
                    },
                ];
            });
        },
        "9qpH": function (e, t, n) {
            e.exports = n.p + "../images/pairDollar.0a5d4398.svg";
        },
        A1KM: function (e, t, n) {
            var r = n("ezc+"),
                o = n("UnHL"),
                i = n("8kJd")("IE_PROTO"),
                a = Object.prototype;
            e.exports =
                Object.getPrototypeOf ||
                function (e) {
                    return (e = o(e)), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null;
                };
        },
        ABKx: function (e, t, n) {
            "use strict";
            var r = n("P56o"),
                o = n("ezc+"),
                i = n("GGqZ"),
                a = n("X6VK"),
                c = n("sU/p"),
                s = n("zIP/").KEY,
                u = n("E7Vc"),
                l = n("ZVIm"),
                f = n("jPEw"),
                d = n("1Alt"),
                p = n("9dxi"),
                m = n("fxUj"),
                h = n("z6KD"),
                v = n("ltS6"),
                g = n("Xfku"),
                _ = n("PAFS"),
                y = n("Bsg+"),
                E = n("UnHL"),
                b = n("ml72"),
                w = n("5MU4"),
                S = n("WWmS"),
                O = n("Vx+c"),
                A = n("UYXy"),
                T = n("1Tj+"),
                R = n("0oPD"),
                N = n("U1KF"),
                I = n("LuBU"),
                C = T.f,
                x = N.f,
                k = A.f,
                P = r.Symbol,
                j = r.JSON,
                L = j && j.stringify,
                M = p("_hidden"),
                D = p("toPrimitive"),
                F = {}.propertyIsEnumerable,
                V = l("symbol-registry"),
                B = l("symbols"),
                U = l("op-symbols"),
                G = Object.prototype,
                K = "function" == typeof P && !!R.f,
                z = r.QObject,
                H = !z || !z.prototype || !z.prototype.findChild,
                W =
                    i &&
                    u(function () {
                        return (
                            7 !=
                            O(
                                x({}, "a", {
                                    get: function () {
                                        return x(this, "a", { value: 7 }).a;
                                    },
                                })
                            ).a
                        );
                    })
                        ? function (e, t, n) {
                              var r = C(G, t);
                              r && delete G[t], x(e, t, n), r && e !== G && x(G, t, r);
                          }
                        : x,
                X = function (e) {
                    var t = (B[e] = O(P.prototype));
                    return (t._k = e), t;
                },
                q =
                    K && "symbol" == typeof P.iterator
                        ? function (e) {
                              return "symbol" == typeof e;
                          }
                        : function (e) {
                              return e instanceof P;
                          },
                Y = function (e, t, n) {
                    return (
                        e === G && Y(U, t, n),
                        _(e),
                        (t = w(t, !0)),
                        _(n),
                        o(B, t) ? (n.enumerable ? (o(e, M) && e[M][t] && (e[M][t] = !1), (n = O(n, { enumerable: S(0, !1) }))) : (o(e, M) || x(e, M, S(1, {})), (e[M][t] = !0)), W(e, t, n)) : x(e, t, n)
                    );
                },
                J = function (e, t) {
                    _(e);
                    for (var n, r = v((t = b(t))), o = 0, i = r.length; i > o; ) Y(e, (n = r[o++]), t[n]);
                    return e;
                },
                Z = function (e) {
                    var t = F.call(this, (e = w(e, !0)));
                    return !(this === G && o(B, e) && !o(U, e)) && (!(t || !o(this, e) || !o(B, e) || (o(this, M) && this[M][e])) || t);
                },
                Q = function (e, t) {
                    if (((e = b(e)), (t = w(t, !0)), e !== G || !o(B, t) || o(U, t))) {
                        var n = C(e, t);
                        return !n || !o(B, t) || (o(e, M) && e[M][t]) || (n.enumerable = !0), n;
                    }
                },
                $ = function (e) {
                    for (var t, n = k(b(e)), r = [], i = 0; n.length > i; ) o(B, (t = n[i++])) || t == M || t == s || r.push(t);
                    return r;
                },
                ee = function (e) {
                    for (var t, n = e === G, r = k(n ? U : b(e)), i = [], a = 0; r.length > a; ) !o(B, (t = r[a++])) || (n && !o(G, t)) || i.push(B[t]);
                    return i;
                };
            K ||
                (c(
                    (P = function () {
                        if (this instanceof P) throw TypeError("Symbol is not a constructor!");
                        var e = d(arguments.length > 0 ? arguments[0] : void 0),
                            t = function (n) {
                                this === G && t.call(U, n), o(this, M) && o(this[M], e) && (this[M][e] = !1), W(this, e, S(1, n));
                            };
                        return i && H && W(G, e, { configurable: !0, set: t }), X(e);
                    }).prototype,
                    "toString",
                    function () {
                        return this._k;
                    }
                ),
                (T.f = Q),
                (N.f = Y),
                (n("zIds").f = A.f = $),
                (n("IdFN").f = Z),
                (R.f = ee),
                i && !n("wEu9") && c(G, "propertyIsEnumerable", Z, !0),
                (m.f = function (e) {
                    return X(p(e));
                })),
                a(a.G + a.W + a.F * !K, { Symbol: P });
            for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; ) p(te[ne++]);
            for (var re = I(p.store), oe = 0; re.length > oe; ) h(re[oe++]);
            a(a.S + a.F * !K, "Symbol", {
                for: function (e) {
                    return o(V, (e += "")) ? V[e] : (V[e] = P(e));
                },
                keyFor: function (e) {
                    if (!q(e)) throw TypeError(e + " is not a symbol!");
                    for (var t in V) if (V[t] === e) return t;
                },
                useSetter: function () {
                    H = !0;
                },
                useSimple: function () {
                    H = !1;
                },
            }),
                a(a.S + a.F * !K, "Object", {
                    create: function (e, t) {
                        return void 0 === t ? O(e) : J(O(e), t);
                    },
                    defineProperty: Y,
                    defineProperties: J,
                    getOwnPropertyDescriptor: Q,
                    getOwnPropertyNames: $,
                    getOwnPropertySymbols: ee,
                });
            var ie = u(function () {
                R.f(1);
            });
            a(a.S + a.F * ie, "Object", {
                getOwnPropertySymbols: function (e) {
                    return R.f(E(e));
                },
            }),
                j &&
                    a(
                        a.S +
                            a.F *
                                (!K ||
                                    u(function () {
                                        var e = P();
                                        return "[null]" != L([e]) || "{}" != L({ a: e }) || "{}" != L(Object(e));
                                    })),
                        "JSON",
                        {
                            stringify: function (e) {
                                for (var t, n, r = [e], o = 1; arguments.length > o; ) r.push(arguments[o++]);
                                if (((n = t = r[1]), (y(t) || void 0 !== e) && !q(e)))
                                    return (
                                        g(t) ||
                                            (t = function (e, t) {
                                                if (("function" == typeof n && (t = n.call(this, e, t)), !q(t))) return t;
                                            }),
                                        (r[1] = t),
                                        L.apply(j, r)
                                    );
                            },
                        }
                    ),
                P.prototype[D] || n("tjmq")(P.prototype, D, P.prototype.valueOf),
                f(P, "Symbol"),
                f(Math, "Math", !0),
                f(r.JSON, "JSON", !0);
        },
        AD5U: function (e, t, n) {
            "use strict";
            n.d(t, "e", function () {
                return c;
            }),
                n.d(t, "f", function () {
                    return s;
                }),
                n.d(t, "h", function () {
                    return u;
                }),
                n.d(t, "i", function () {
                    return l;
                }),
                n.d(t, "a", function () {
                    return f;
                }),
                n.d(t, "g", function () {
                    return d;
                }),
                n.d(t, "c", function () {
                    return p;
                }),
                n.d(t, "d", function () {
                    return m;
                }),
                n.d(t, "b", function () {
                    return h;
                }),
                n.d(t, "j", function () {
                    return v;
                });
            var r = n("OvAC"),
                o = n.n(r),
                i = n("YTIe");
            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            var c = Object.freeze({
                    SIGN_IN: "SignIn",
                    SIGN_IN_DUO: "SignInDuo",
                    SIGN_UP: "SignUp",
                    RESTORE_PASS: "RestorePass",
                    ENTER_NEW_PASS: "EnterNewPass",
                    SIGN_UP_NOT_AVAILABLE: "SignUpNotAvailable",
                    AUTH_IS_BLOCKED: "AuthIsBlocked",
                }),
                s =
                    (Object.freeze(
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2
                                    ? a(Object(n), !0).forEach(function (t) {
                                          o()(e, t, n[t]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                    : a(Object(n)).forEach(function (t) {
                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                      });
                            }
                            return e;
                        })({}, c)
                    ),
                    "6Lc5ACgTAAAAABL3s8j9VkkUn4Engv4QtdCLd9qI"),
                u = Object.freeze({ WRONG_CAPTCHA: "wrong_captcha", ACCOUNT_BLOCKED: "account_blocked", ALREADY_AUTHORIZED: "user_already_authorized" }),
                l = Object.freeze({ KYC_ERROR: "KYCBanError", ERROR: "Error" }),
                f = Object.freeze({
                    STATISTICS_LOCALE: "/stat/log/common?switch_locale=1",
                    USER_SET_SESSION: "/user/set-session",
                    SIGN_IN: "/user/login-by-password",
                    SIGN_UP: "/user/registration",
                    SIGN_UP_BY_PASSWORD: "/user/registration-by-password",
                    SIGN_UP_BY_OAUTH: "user/registration-by-oauth",
                    DUO_AUTH: "/user/login-duo-auth",
                    DUO_AUTH_REQUEST_SMS: "/user/login-duo-auth-sms",
                    REMIND_PASSWORD: "/user/remind-password",
                    CHANGE_PASSWORD: "/user/set-password-by-token",
                    OAUTH_LIST: "/platform/values",
                    PROJECT_COLLECTION: "/project/collection",
                }),
                d = Object.freeze({ AUTH: "auth", AUTH_PLATFORM: "auth_platform", OPEN_PLATFORM: "open_platform", REGISTER: "register", CHANGE_PASS: "change-pass", RESTORE_PASS: "restore-pass", OPEN_RECHARGE: "open_recharge" }),
                p = "recaptcha",
                m = Object.freeze({ GOOGLE: "google", SMS: "sms" }),
                h = Object.freeze({ DUO_AUTH_STATE: "duo-auth-state", SIGN_IN_FORM_VALUES: "sign-in-form-values" }),
                v = [
                    { type: "aa", title: "Apple", href: "/soc-redirect/aa", IconComponent: i.d },
                    { type: "fb", title: "Facebook", href: "/soc-redirect/fb", IconComponent: i.H },
                    { type: "gp", title: "Google", href: "/soc-redirect/gp", IconComponent: i.L },
                ];
        },
        AJKo: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Math", {
                log2: function (e) {
                    return Math.log(e) / Math.LN2;
                },
            });
        },
        APqL: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return i;
            });
            var r = n("f6l3"),
                o = n("tyvn"),
                i = function () {
                    return Object(r.u)("X-App-Name") === o.td.IOS;
                };
        },
        AkS8: function (e, t, n) {
            "use strict";
            var r = n("P56o"),
                o = n("X6VK"),
                i = n("sU/p"),
                a = n("+edc"),
                c = n("zIP/"),
                s = n("HqX2"),
                u = n("EusA"),
                l = n("Bsg+"),
                f = n("E7Vc"),
                d = n("zlqh"),
                p = n("jPEw"),
                m = n("jEou");
            e.exports = function (e, t, n, h, v, g) {
                var _ = r[e],
                    y = _,
                    E = v ? "set" : "add",
                    b = y && y.prototype,
                    w = {},
                    S = function (e) {
                        var t = b[e];
                        i(
                            b,
                            e,
                            "delete" == e
                                ? function (e) {
                                      return !(g && !l(e)) && t.call(this, 0 === e ? 0 : e);
                                  }
                                : "has" == e
                                ? function (e) {
                                      return !(g && !l(e)) && t.call(this, 0 === e ? 0 : e);
                                  }
                                : "get" == e
                                ? function (e) {
                                      return g && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                                  }
                                : "add" == e
                                ? function (e) {
                                      return t.call(this, 0 === e ? 0 : e), this;
                                  }
                                : function (e, n) {
                                      return t.call(this, 0 === e ? 0 : e, n), this;
                                  }
                        );
                    };
                if (
                    "function" == typeof y &&
                    (g ||
                        (b.forEach &&
                            !f(function () {
                                new y().entries().next();
                            })))
                ) {
                    var O = new y(),
                        A = O[E](g ? {} : -0, 1) != O,
                        T = f(function () {
                            O.has(1);
                        }),
                        R = d(function (e) {
                            new y(e);
                        }),
                        N =
                            !g &&
                            f(function () {
                                for (var e = new y(), t = 5; t--; ) e[E](t, t);
                                return !e.has(-0);
                            });
                    R ||
                        (((y = t(function (t, n) {
                            u(t, y, e);
                            var r = m(new _(), t, y);
                            return void 0 != n && s(n, v, r[E], r), r;
                        })).prototype = b),
                        (b.constructor = y)),
                        (T || N) && (S("delete"), S("has"), v && S("get")),
                        (N || A) && S(E),
                        g && b.clear && delete b.clear;
                } else (y = h.getConstructor(t, e, v, E)), a(y.prototype, n), (c.NEED = !0);
                return p(y, e), (w[e] = y), o(o.G + o.W + o.F * (y != _), w), g || h.setStrong(y, e, v), y;
            };
        },
        Alw5: function (e, t, n) {
            var r = n("NVL/"),
                o = n("GCOZ");
            e.exports = function (e, t, n) {
                if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
                return String(o(e));
            };
        },
        Anoy: function (e, t, n) {
            var r = n("X6VK"),
                o = n("b8Rm"),
                i = n("PAFS"),
                a = (n("P56o").Reflect || {}).apply,
                c = Function.apply;
            r(
                r.S +
                    r.F *
                        !n("E7Vc")(function () {
                            a(function () {});
                        }),
                "Reflect",
                {
                    apply: function (e, t, n) {
                        var r = o(e),
                            s = i(n);
                        return a ? a(r, t, s) : c.call(r, t, s);
                    },
                }
            );
        },
        Av18: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Math", {
                log10: function (e) {
                    return Math.log(e) * Math.LOG10E;
                },
            });
        },
        AxS0: function (e, t, n) {
            e.exports = n.p + "../images/home_index_bg.16953f10.png";
        },
        BDzi: function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("Sp5b"),
                i = n("Alw5"),
                a = "".endsWith;
            r(r.P + r.F * n("Fl7L")("endsWith"), "String", {
                endsWith: function (e) {
                    var t = i(this, e, "endsWith"),
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        r = o(t.length),
                        c = void 0 === n ? r : Math.min(o(n), r),
                        s = String(e);
                    return a ? a.call(t, s, c) : t.slice(c - s.length, c) === s;
                },
            });
        },
        BH3N: function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("8C1o"),
                i = n("UnHL"),
                a = n("Sp5b"),
                c = n("b8Rm"),
                s = n("C5nI");
            r(r.P, "Array", {
                flatMap: function (e) {
                    var t,
                        n,
                        r = i(this);
                    return c(e), (t = a(r.length)), (n = s(r, 0)), o(n, r, r, t, 0, 1, e, arguments[1]), n;
                },
            }),
                n("OfmW")("flatMap");
        },
        BUlT: function (e, t, n) {
            var r = n("mvii"),
                o = Math.max,
                i = Math.min;
            e.exports = function (e, t) {
                return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t);
            };
        },
        Baaw: function (e, t, n) {
            var r;
            !(function (o, i) {
                "use strict";
                var a = "model",
                    c = "name",
                    s = "type",
                    u = "vendor",
                    l = "version",
                    f = "mobile",
                    d = "tablet",
                    p = "smarttv",
                    m = {
                        extend: function (e, t) {
                            var n = {};
                            for (var r in e) t[r] && t[r].length % 2 == 0 ? (n[r] = t[r].concat(e[r])) : (n[r] = e[r]);
                            return n;
                        },
                        has: function (e, t) {
                            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase());
                        },
                        lowerize: function (e) {
                            return e.toLowerCase();
                        },
                        major: function (e) {
                            return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0;
                        },
                        trim: function (e) {
                            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                        },
                    },
                    h = {
                        rgx: function (e, t) {
                            for (var n, r, o, i, a, c, s = 0; s < t.length && !a; ) {
                                var u = t[s],
                                    l = t[s + 1];
                                for (n = r = 0; n < u.length && !a; )
                                    if ((a = u[n++].exec(e)))
                                        for (o = 0; o < l.length; o++)
                                            (c = a[++r]),
                                                "object" == typeof (i = l[o]) && i.length > 0
                                                    ? 2 == i.length
                                                        ? "function" == typeof i[1]
                                                            ? (this[i[0]] = i[1].call(this, c))
                                                            : (this[i[0]] = i[1])
                                                        : 3 == i.length
                                                        ? "function" != typeof i[1] || (i[1].exec && i[1].test)
                                                            ? (this[i[0]] = c ? c.replace(i[1], i[2]) : void 0)
                                                            : (this[i[0]] = c ? i[1].call(this, c, i[2]) : void 0)
                                                        : 4 == i.length && (this[i[0]] = c ? i[3].call(this, c.replace(i[1], i[2])) : void 0)
                                                    : (this[i] = c || void 0);
                                s += 2;
                            }
                        },
                        str: function (e, t) {
                            for (var n in t)
                                if ("object" == typeof t[n] && t[n].length > 0) {
                                    for (var r = 0; r < t[n].length; r++) if (m.has(t[n][r], e)) return "?" === n ? void 0 : n;
                                } else if (m.has(t[n], e)) return "?" === n ? void 0 : n;
                            return e;
                        },
                    },
                    v = {
                        browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } },
                        device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } },
                        os: {
                            windows: {
                                version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2000: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" },
                            },
                        },
                    },
                    g = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [c, l],
                            [/(opios)[\/\s]+([\w\.]+)/i],
                            [[c, "Opera Mini"], l],
                            [/\s(opr)\/([\w\.]+)/i],
                            [[c, "Opera"], l],
                            [
                                /(kindle)\/([\w\.]+)/i,
                                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                                /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
                                /(?:ms|\()(ie)\s([\w\.]+)/i,
                                /(rekonq)\/([\w\.]*)/i,
                                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
                            ],
                            [c, l],
                            [/(konqueror)\/([\w\.]+)/i],
                            [[c, "Konqueror"], l],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [[c, "IE"], l],
                            [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                            [[c, "Edge"], l],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [[c, "Yandex"], l],
                            [/(Avast)\/([\w\.]+)/i],
                            [[c, "Avast Secure Browser"], l],
                            [/(AVG)\/([\w\.]+)/i],
                            [[c, "AVG Secure Browser"], l],
                            [/(puffin)\/([\w\.]+)/i],
                            [[c, "Puffin"], l],
                            [/(focus)\/([\w\.]+)/i],
                            [[c, "Firefox Focus"], l],
                            [/(opt)\/([\w\.]+)/i],
                            [[c, "Opera Touch"], l],
                            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [[c, "UCBrowser"], l],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [[c, /_/g, " "], l],
                            [/(windowswechat qbcore)\/([\w\.]+)/i],
                            [[c, "WeChat(Win) Desktop"], l],
                            [/(micromessenger)\/([\w\.]+)/i],
                            [[c, "WeChat"], l],
                            [/(brave)\/([\w\.]+)/i],
                            [[c, "Brave"], l],
                            [/(qqbrowserlite)\/([\w\.]+)/i],
                            [c, l],
                            [/(QQ)\/([\d\.]+)/i],
                            [c, l],
                            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [c, l],
                            [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                            [c, l],
                            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                            [c, l],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i],
                            [c],
                            [/(LBBROWSER)/i],
                            [c],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [l, [c, "MIUI Browser"]],
                            [/;fbav\/([\w\.]+);/i],
                            [l, [c, "Facebook"]],
                            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                            [c, l],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [l, [c, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [[c, /(.+)/, "$1 WebView"], l],
                            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                            [[c, /(.+(?:g|us))(.+)/, "$1 $2"], l],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                            [l, [c, "Android Browser"]],
                            [/(sailfishbrowser)\/([\w\.]+)/i],
                            [[c, "Sailfish Browser"], l],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [c, l],
                            [/(dolfin)\/([\w\.]+)/i],
                            [[c, "Dolphin"], l],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [[c, "360 Browser"]],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [[c, "Chrome"], l],
                            [/(coast)\/([\w\.]+)/i],
                            [[c, "Opera Coast"], l],
                            [/fxios\/([\w\.-]+)/i],
                            [l, [c, "Firefox"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [l, [c, "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [l, c],
                            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [[c, "GSA"], l],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [c, [l, h.str, v.browser.oldsafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [c, l],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [[c, "Netscape"], l],
                            [
                                /(swiftfox)/i,
                                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                /(links)\s\(([\w\.]+)/i,
                                /(gobrowser)\/?([\w\.]*)/i,
                                /(ice\s?browser)\/v?([\w\._]+)/i,
                                /(mosaic)[\/\s]([\w\.]+)/i,
                            ],
                            [c, l],
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [["architecture", "amd64"]],
                            [/(ia32(?=;))/i],
                            [["architecture", m.lowerize]],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [["architecture", "ia32"]],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [["architecture", "arm"]],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [["architecture", /ower/, "", m.lowerize]],
                            [/(sun4\w)[;\)]/i],
                            [["architecture", "sparc"]],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [["architecture", m.lowerize]],
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                            [a, u, [s, d]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [a, [u, "Apple"], [s, d]],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [a, "Apple TV"],
                                [u, "Apple"],
                                [s, p],
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [u, a, [s, d]],
                            [/(kf[A-z]+)\sbuild\/.+silk\//i],
                            [a, [u, "Amazon"], [s, d]],
                            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                            [
                                [a, h.str, v.device.amazon.model],
                                [u, "Amazon"],
                                [s, f],
                            ],
                            [/android.+aft([bms])\sbuild/i],
                            [a, [u, "Amazon"], [s, p]],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [a, u, [s, f]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [a, [u, "Apple"], [s, f]],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [u, a, [s, f]],
                            [/\(bb10;\s(\w+)/i],
                            [a, [u, "BlackBerry"], [s, f]],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                            [a, [u, "Asus"], [s, d]],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [u, "Sony"],
                                [a, "Xperia Tablet"],
                                [s, d],
                            ],
                            [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [a, [u, "Sony"], [s, f]],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [u, a, [s, "console"]],
                            [/android.+;\s(shield)\sbuild/i],
                            [a, [u, "Nvidia"], [s, "console"]],
                            [/(playstation\s[34portablevi]+)/i],
                            [a, [u, "Sony"], [s, "console"]],
                            [/(sprint\s(\w+))/i],
                            [
                                [u, h.str, v.device.sprint.vendor],
                                [a, h.str, v.device.sprint.model],
                                [s, f],
                            ],
                            [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [u, [a, /_/g, " "], [s, f]],
                            [/(nexus\s9)/i],
                            [a, [u, "HTC"], [s, d]],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                            [a, [u, "Huawei"], [s, f]],
                            [/android.+(bah2?-a?[lw]\d{2})/i],
                            [a, [u, "Huawei"], [s, d]],
                            [/(microsoft);\s(lumia[\s\w]+)/i],
                            [u, a, [s, f]],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [a, [u, "Microsoft"], [s, "console"]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [a, /\./g, " "],
                                [u, "Microsoft"],
                                [s, f],
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                            [a, [u, "Motorola"], [s, f]],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [a, [u, "Motorola"], [s, d]],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [u, m.trim],
                                [a, m.trim],
                                [s, p],
                            ],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [a, /^/, "SmartTV"],
                                [u, "Samsung"],
                                [s, p],
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [a, [u, "Sharp"], [s, p]],
                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [[u, "Samsung"], a, [s, d]],
                            [/smart-tv.+(samsung)/i],
                            [u, [s, p], a],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                            [[u, "Samsung"], a, [s, f]],
                            [/sie-(\w*)/i],
                            [a, [u, "Siemens"], [s, f]],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                            [[u, "Nokia"], a, [s, f]],
                            [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [a, [u, "Acer"], [s, d]],
                            [/android.+([vl]k\-?\d{3})\s+build/i],
                            [a, [u, "LG"], [s, d]],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [[u, "LG"], a, [s, d]],
                            [/(lg) netcast\.tv/i],
                            [u, a, [s, p]],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                            [a, [u, "LG"], [s, f]],
                            [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                            [u, a, [s, d]],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [a, [u, "Lenovo"], [s, d]],
                            [/(lenovo)[_\s-]?([\w-]+)/i],
                            [u, a, [s, f]],
                            [/linux;.+((jolla));/i],
                            [u, a, [s, f]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [u, a, [s, "wearable"]],
                            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [u, a, [s, f]],
                            [/crkey/i],
                            [
                                [a, "Chromecast"],
                                [u, "Google"],
                                [s, p],
                            ],
                            [/android.+;\s(glass)\s\d/i],
                            [a, [u, "Google"], [s, "wearable"]],
                            [/android.+;\s(pixel c)[\s)]/i],
                            [a, [u, "Google"], [s, d]],
                            [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                            [a, [u, "Google"], [s, f]],
                            [
                                /android.+;\s(\w+)\s+build\/hm\1/i,
                                /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                                /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                                /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
                            ],
                            [
                                [a, /_/g, " "],
                                [u, "Xiaomi"],
                                [s, f],
                            ],
                            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                            [
                                [a, /_/g, " "],
                                [u, "Xiaomi"],
                                [s, d],
                            ],
                            [/android.+;\s(m[1-5]\snote)\sbuild/i],
                            [a, [u, "Meizu"], [s, f]],
                            [/(mz)-([\w-]{2,})/i],
                            [[u, "Meizu"], a, [s, f]],
                            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                            [a, [u, "OnePlus"], [s, f]],
                            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                            [a, [u, "RCA"], [s, d]],
                            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                            [a, [u, "Dell"], [s, d]],
                            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                            [a, [u, "Verizon"], [s, d]],
                            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                            [[u, "Barnes & Noble"], a, [s, d]],
                            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                            [a, [u, "NuVision"], [s, d]],
                            [/android.+;\s(k88)\sbuild/i],
                            [a, [u, "ZTE"], [s, d]],
                            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                            [a, [u, "Swiss"], [s, f]],
                            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                            [a, [u, "Swiss"], [s, d]],
                            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                            [a, [u, "Zeki"], [s, d]],
                            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                            [[u, "Dragon Touch"], a, [s, d]],
                            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                            [a, [u, "Insignia"], [s, d]],
                            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                            [a, [u, "NextBook"], [s, d]],
                            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                            [[u, "Voice"], a, [s, f]],
                            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                            [[u, "LvTel"], a, [s, f]],
                            [/android.+;\s(PH-1)\s/i],
                            [a, [u, "Essential"], [s, f]],
                            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                            [a, [u, "Envizen"], [s, d]],
                            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                            [u, a, [s, d]],
                            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                            [a, [u, "MachSpeed"], [s, d]],
                            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                            [u, a, [s, d]],
                            [/android.+[;\/]\s*TU_(1491)\s+build/i],
                            [a, [u, "Rotor"], [s, d]],
                            [/android.+(KS(.+))\s+build/i],
                            [a, [u, "Amazon"], [s, d]],
                            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                            [u, a, [s, d]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [[s, m.lowerize], u, a],
                            [/[\s\/\(](smart-?tv)[;\)]/i],
                            [[s, p]],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [a, [u, "Generic"]],
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [l, [c, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [l, [c, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [c, l],
                            [/rv\:([\w\.]{1,9}).+(gecko)/i],
                            [l, c],
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [c, l],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [c, [l, h.str, v.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [c, "Windows"],
                                [l, h.str, v.os.windows.version],
                            ],
                            [/\((bb)(10);/i],
                            [[c, "BlackBerry"], l],
                            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                            [c, l],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                            [[c, "Symbian"], l],
                            [/\((series40);/i],
                            [c],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [[c, "Firefox OS"], l],
                            [
                                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                                /(mint)[\/\s\(]?(\w*)/i,
                                /(mageia|vectorlinux)[;\s]/i,
                                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                                /(hurd|linux)\s?([\w\.]*)/i,
                                /(gnu)\s?([\w\.]*)/i,
                            ],
                            [c, l],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [[c, "Chromium OS"], l],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [[c, "Solaris"], l],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                            [c, l],
                            [/(haiku)\s(\w+)/i],
                            [c, l],
                            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                            [
                                [l, /_/g, "."],
                                [c, "iOS"],
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [c, "Mac OS"],
                                [l, /_/g, "."],
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [c, l],
                        ],
                    },
                    _ = function (e, t) {
                        if (("object" == typeof e && ((t = e), (e = void 0)), !(this instanceof _))) return new _(e, t).getResult();
                        var n = e || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                            r = t ? m.extend(g, t) : g;
                        return (
                            (this.getBrowser = function () {
                                var e = { name: void 0, version: void 0 };
                                return h.rgx.call(e, n, r.browser), (e.major = m.major(e.version)), e;
                            }),
                            (this.getCPU = function () {
                                var e = { architecture: void 0 };
                                return h.rgx.call(e, n, r.cpu), e;
                            }),
                            (this.getDevice = function () {
                                var e = { vendor: void 0, model: void 0, type: void 0 };
                                return h.rgx.call(e, n, r.device), e;
                            }),
                            (this.getEngine = function () {
                                var e = { name: void 0, version: void 0 };
                                return h.rgx.call(e, n, r.engine), e;
                            }),
                            (this.getOS = function () {
                                var e = { name: void 0, version: void 0 };
                                return h.rgx.call(e, n, r.os), e;
                            }),
                            (this.getResult = function () {
                                return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
                            }),
                            (this.getUA = function () {
                                return n;
                            }),
                            (this.setUA = function (e) {
                                return (n = e), this;
                            }),
                            this
                        );
                    };
                (_.VERSION = "0.7.21"),
                    (_.BROWSER = { NAME: c, MAJOR: "major", VERSION: l }),
                    (_.CPU = { ARCHITECTURE: "architecture" }),
                    (_.DEVICE = { MODEL: a, VENDOR: u, TYPE: s, CONSOLE: "console", MOBILE: f, SMARTTV: p, TABLET: d, WEARABLE: "wearable", EMBEDDED: "embedded" }),
                    (_.ENGINE = { NAME: c, VERSION: l }),
                    (_.OS = { NAME: c, VERSION: l }),
                    void 0 !== t
                        ? (void 0 !== e && e.exports && (t = e.exports = _), (t.UAParser = _))
                        : void 0 ===
                              (r = function () {
                                  return _;
                              }.call(t, n, t, e)) || (e.exports = r);
                var y = o && (o.jQuery || o.Zepto);
                if (y && !y.ua) {
                    var E = new _();
                    (y.ua = E.getResult()),
                        (y.ua.get = function () {
                            return E.getUA();
                        }),
                        (y.ua.set = function (e) {
                            E.setUA(e);
                            var t = E.getResult();
                            for (var n in t) y.ua[n] = t[n];
                        });
                }
            })("object" == typeof window ? window : this);
        },
        Bejv: function (e, t) {
            e.exports = function (e, t) {
                throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.");
            };
        },
        "Bsg+": function (e, t) {
            e.exports = function (e) {
                return "object" == typeof e ? null !== e : "function" == typeof e;
            };
        },
        "C+Xl": function (e, t, n) {},
        C5nI: function (e, t, n) {
            var r = n("Qno1");
            e.exports = function (e, t) {
                return new (r(e))(t);
            };
        },
        CBb8: function (e, t, n) {
            "use strict";
            n.d(t, "c", function () {
                return o;
            }),
                n.d(t, "a", function () {
                    return i;
                }),
                n.d(t, "b", function () {
                    return a;
                });
            var r = "",
                o = (r = (window._globalsConfig && window._globalsConfig.cdnPath) || ""),
                i = (window._globalsConfig && window._globalsConfig.assetsPath) || "",
                a = r ? r.replace(/^(.*)\/[^/]+/, "$1") : ".";
        },
        CIiV: function (e, t, n) {
            "use strict";
            var r = n("U1KF"),
                o = n("WWmS");
            e.exports = function (e, t, n) {
                t in e ? r.f(e, t, o(0, n)) : (e[t] = n);
            };
        },
        CLuC: function (e, t, n) {
            var r = n("P56o").document;
            e.exports = r && r.documentElement;
        },
        CbkB: function (e, t) {
            e.exports =
                Math.log1p ||
                function (e) {
                    return (e = +e) > -1e-8 && e < 1e-8 ? e - (e * e) / 2 : Math.log(1 + e);
                };
        },
        Cmsx: function (e, t, n) {
            var r = n("n+VH");
            e.exports = Object("z").propertyIsEnumerable(0)
                ? Object
                : function (e) {
                      return "String" == r(e) ? e.split("") : Object(e);
                  };
        },
        CpkR: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return h;
            });
            var r = n("8VmE"),
                o = n.n(r),
                i = n("OvAC"),
                a = n.n(i),
                c = n("RiSW"),
                s = n.n(c),
                u = n("mXGw"),
                l = n.n(u),
                f = n("8Jek"),
                d = n.n(f),
                p = n("cUhM");
            n("C+Xl");
            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            var h = function (e) {
                var t = e.color,
                    n = void 0 === t ? "default" : t,
                    r = e.className,
                    i = e.fullWidth,
                    c = e.disabled,
                    f = e.children,
                    h = e.hostRef,
                    v = e.dataTest,
                    g = e.href,
                    _ = e.target,
                    y = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                                ? m(Object(n), !0).forEach(function (t) {
                                      a()(e, t, n[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                : m(Object(n)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                  });
                        }
                        return e;
                    })({}, s()(e, ["color", "className", "fullWidth", "disabled", "children", "hostRef", "dataTest", "href", "target"]), {
                        className: d()("com-c-button", "com-c-button_color_".concat(n), c && "com-c-button_state_disabled", i && "com-c-button_option_full-width", r),
                        disabled: c,
                        ref: h,
                    }),
                    E = l.a.createElement(u.Fragment, null, f);
                return g ? l.a.createElement(p.c, o()({}, y, { component: "a", href: g, target: _, "data-test": v }), E) : l.a.createElement(p.c, o()({}, y, { type: "button", href: g, target: _, "data-test": v }), E);
            };
        },
        CuWn: function (e, t, n) {
            var r = n("X6VK"),
                o = n("yM7o");
            r(r.S + r.F * (o != Math.expm1), "Math", { expm1: o });
        },
        DQNz: function (e, t, n) {
            "use strict";
            function r(e, t) {
                e.classList
                    ? e.classList.add(t)
                    : (function (e, t) {
                          return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ");
                      })(e, t) || ("string" == typeof e.className ? (e.className = e.className + " " + t) : e.setAttribute("class", ((e.className && e.className.baseVal) || "") + " " + t));
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        DY28: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Math", { sign: n("/69c") });
        },
        DbwS: function (e, t, n) {
            "use strict";
            var r,
                o,
                i,
                a,
                c = n("wEu9"),
                s = n("P56o"),
                u = n("9liC"),
                l = n("OFVL"),
                f = n("X6VK"),
                d = n("Bsg+"),
                p = n("b8Rm"),
                m = n("EusA"),
                h = n("HqX2"),
                v = n("5Fu2"),
                g = n("5BMI").set,
                _ = n("XDzM")(),
                y = n("gtO+"),
                E = n("Yvte"),
                b = n("ROCd"),
                w = n("khIB"),
                S = s.TypeError,
                O = s.process,
                A = O && O.versions,
                T = (A && A.v8) || "",
                R = s.Promise,
                N = "process" == l(O),
                I = function () {},
                C = (o = y.f),
                x = !!(function () {
                    try {
                        var e = R.resolve(1),
                            t = ((e.constructor = {})[n("9dxi")("species")] = function (e) {
                                e(I, I);
                            });
                        return (N || "function" == typeof PromiseRejectionEvent) && e.then(I) instanceof t && 0 !== T.indexOf("6.6") && -1 === b.indexOf("Chrome/66");
                    } catch (e) {}
                })(),
                k = function (e) {
                    var t;
                    return !(!d(e) || "function" != typeof (t = e.then)) && t;
                },
                P = function (e, t) {
                    if (!e._n) {
                        e._n = !0;
                        var n = e._c;
                        _(function () {
                            for (
                                var r = e._v,
                                    o = 1 == e._s,
                                    i = 0,
                                    a = function (t) {
                                        var n,
                                            i,
                                            a,
                                            c = o ? t.ok : t.fail,
                                            s = t.resolve,
                                            u = t.reject,
                                            l = t.domain;
                                        try {
                                            c
                                                ? (o || (2 == e._h && M(e), (e._h = 1)),
                                                  !0 === c ? (n = r) : (l && l.enter(), (n = c(r)), l && (l.exit(), (a = !0))),
                                                  n === t.promise ? u(S("Promise-chain cycle")) : (i = k(n)) ? i.call(n, s, u) : s(n))
                                                : u(r);
                                        } catch (e) {
                                            l && !a && l.exit(), u(e);
                                        }
                                    };
                                n.length > i;

                            )
                                a(n[i++]);
                            (e._c = []), (e._n = !1), t && !e._h && j(e);
                        });
                    }
                },
                j = function (e) {
                    g.call(s, function () {
                        var t,
                            n,
                            r,
                            o = e._v,
                            i = L(e);
                        if (
                            (i &&
                                ((t = E(function () {
                                    N ? O.emit("unhandledRejection", o, e) : (n = s.onunhandledrejection) ? n({ promise: e, reason: o }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", o);
                                })),
                                (e._h = N || L(e) ? 2 : 1)),
                            (e._a = void 0),
                            i && t.e)
                        )
                            throw t.v;
                    });
                },
                L = function (e) {
                    return 1 !== e._h && 0 === (e._a || e._c).length;
                },
                M = function (e) {
                    g.call(s, function () {
                        var t;
                        N ? O.emit("rejectionHandled", e) : (t = s.onrejectionhandled) && t({ promise: e, reason: e._v });
                    });
                },
                D = function (e) {
                    var t = this;
                    t._d || ((t._d = !0), ((t = t._w || t)._v = e), (t._s = 2), t._a || (t._a = t._c.slice()), P(t, !0));
                },
                F = function (e) {
                    var t,
                        n = this;
                    if (!n._d) {
                        (n._d = !0), (n = n._w || n);
                        try {
                            if (n === e) throw S("Promise can't be resolved itself");
                            (t = k(e))
                                ? _(function () {
                                      var r = { _w: n, _d: !1 };
                                      try {
                                          t.call(e, u(F, r, 1), u(D, r, 1));
                                      } catch (e) {
                                          D.call(r, e);
                                      }
                                  })
                                : ((n._v = e), (n._s = 1), P(n, !1));
                        } catch (e) {
                            D.call({ _w: n, _d: !1 }, e);
                        }
                    }
                };
            x ||
                ((R = function (e) {
                    m(this, R, "Promise", "_h"), p(e), r.call(this);
                    try {
                        e(u(F, this, 1), u(D, this, 1));
                    } catch (e) {
                        D.call(this, e);
                    }
                }),
                ((r = function (e) {
                    (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
                }).prototype = n("+edc")(R.prototype, {
                    then: function (e, t) {
                        var n = C(v(this, R));
                        return (n.ok = "function" != typeof e || e), (n.fail = "function" == typeof t && t), (n.domain = N ? O.domain : void 0), this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise;
                    },
                    catch: function (e) {
                        return this.then(void 0, e);
                    },
                })),
                (i = function () {
                    var e = new r();
                    (this.promise = e), (this.resolve = u(F, e, 1)), (this.reject = u(D, e, 1));
                }),
                (y.f = C = function (e) {
                    return e === R || e === a ? new i(e) : o(e);
                })),
                f(f.G + f.W + f.F * !x, { Promise: R }),
                n("jPEw")(R, "Promise"),
                n("E8p1")("Promise"),
                (a = n("R5TD").Promise),
                f(f.S + f.F * !x, "Promise", {
                    reject: function (e) {
                        var t = C(this);
                        return (0, t.reject)(e), t.promise;
                    },
                }),
                f(f.S + f.F * (c || !x), "Promise", {
                    resolve: function (e) {
                        return w(c && this === a ? R : this, e);
                    },
                }),
                f(
                    f.S +
                        f.F *
                            !(
                                x &&
                                n("zlqh")(function (e) {
                                    R.all(e).catch(I);
                                })
                            ),
                    "Promise",
                    {
                        all: function (e) {
                            var t = this,
                                n = C(t),
                                r = n.resolve,
                                o = n.reject,
                                i = E(function () {
                                    var n = [],
                                        i = 0,
                                        a = 1;
                                    h(e, !1, function (e) {
                                        var c = i++,
                                            s = !1;
                                        n.push(void 0),
                                            a++,
                                            t.resolve(e).then(function (e) {
                                                s || ((s = !0), (n[c] = e), --a || r(n));
                                            }, o);
                                    }),
                                        --a || r(n);
                                });
                            return i.e && o(i.v), n.promise;
                        },
                        race: function (e) {
                            var t = this,
                                n = C(t),
                                r = n.reject,
                                o = E(function () {
                                    h(e, !1, function (e) {
                                        t.resolve(e).then(n.resolve, r);
                                    });
                                });
                            return o.e && r(o.v), n.promise;
                        },
                    }
                );
        },
        Dhml: function (e, t, n) {
            "use strict";
            var r = n("P56o"),
                o = n("GGqZ"),
                i = n("wEu9"),
                a = n("tW8y"),
                c = n("tjmq"),
                s = n("+edc"),
                u = n("E7Vc"),
                l = n("EusA"),
                f = n("mvii"),
                d = n("Sp5b"),
                p = n("GdbT"),
                m = n("zIds").f,
                h = n("U1KF").f,
                v = n("Pfmf"),
                g = n("jPEw"),
                _ = "prototype",
                y = "Wrong index!",
                E = r.ArrayBuffer,
                b = r.DataView,
                w = r.Math,
                S = r.RangeError,
                O = r.Infinity,
                A = E,
                T = w.abs,
                R = w.pow,
                N = w.floor,
                I = w.log,
                C = w.LN2,
                x = o ? "_b" : "buffer",
                k = o ? "_l" : "byteLength",
                P = o ? "_o" : "byteOffset";
            function j(e, t, n) {
                var r,
                    o,
                    i,
                    a = new Array(n),
                    c = 8 * n - t - 1,
                    s = (1 << c) - 1,
                    u = s >> 1,
                    l = 23 === t ? R(2, -24) - R(2, -77) : 0,
                    f = 0,
                    d = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                for (
                    (e = T(e)) != e || e === O
                        ? ((o = e != e ? 1 : 0), (r = s))
                        : ((r = N(I(e) / C)),
                          e * (i = R(2, -r)) < 1 && (r--, (i *= 2)),
                          (e += r + u >= 1 ? l / i : l * R(2, 1 - u)) * i >= 2 && (r++, (i /= 2)),
                          r + u >= s ? ((o = 0), (r = s)) : r + u >= 1 ? ((o = (e * i - 1) * R(2, t)), (r += u)) : ((o = e * R(2, u - 1) * R(2, t)), (r = 0)));
                    t >= 8;
                    a[f++] = 255 & o, o /= 256, t -= 8
                );
                for (r = (r << t) | o, c += t; c > 0; a[f++] = 255 & r, r /= 256, c -= 8);
                return (a[--f] |= 128 * d), a;
            }
            function L(e, t, n) {
                var r,
                    o = 8 * n - t - 1,
                    i = (1 << o) - 1,
                    a = i >> 1,
                    c = o - 7,
                    s = n - 1,
                    u = e[s--],
                    l = 127 & u;
                for (u >>= 7; c > 0; l = 256 * l + e[s], s--, c -= 8);
                for (r = l & ((1 << -c) - 1), l >>= -c, c += t; c > 0; r = 256 * r + e[s], s--, c -= 8);
                if (0 === l) l = 1 - a;
                else {
                    if (l === i) return r ? NaN : u ? -O : O;
                    (r += R(2, t)), (l -= a);
                }
                return (u ? -1 : 1) * r * R(2, l - t);
            }
            function M(e) {
                return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
            }
            function D(e) {
                return [255 & e];
            }
            function F(e) {
                return [255 & e, (e >> 8) & 255];
            }
            function V(e) {
                return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
            }
            function B(e) {
                return j(e, 52, 8);
            }
            function U(e) {
                return j(e, 23, 4);
            }
            function G(e, t, n) {
                h(e[_], t, {
                    get: function () {
                        return this[n];
                    },
                });
            }
            function K(e, t, n, r) {
                var o = p(+n);
                if (o + t > e[k]) throw S(y);
                var i = e[x]._b,
                    a = o + e[P],
                    c = i.slice(a, a + t);
                return r ? c : c.reverse();
            }
            function z(e, t, n, r, o, i) {
                var a = p(+n);
                if (a + t > e[k]) throw S(y);
                for (var c = e[x]._b, s = a + e[P], u = r(+o), l = 0; l < t; l++) c[s + l] = u[i ? l : t - l - 1];
            }
            if (a.ABV) {
                if (
                    !u(function () {
                        E(1);
                    }) ||
                    !u(function () {
                        new E(-1);
                    }) ||
                    u(function () {
                        return new E(), new E(1.5), new E(NaN), "ArrayBuffer" != E.name;
                    })
                ) {
                    for (
                        var H,
                            W = ((E = function (e) {
                                return l(this, E), new A(p(e));
                            })[_] = A[_]),
                            X = m(A),
                            q = 0;
                        X.length > q;

                    )
                        (H = X[q++]) in E || c(E, H, A[H]);
                    i || (W.constructor = E);
                }
                var Y = new b(new E(2)),
                    J = b[_].setInt8;
                Y.setInt8(0, 2147483648),
                    Y.setInt8(1, 2147483649),
                    (!Y.getInt8(0) && Y.getInt8(1)) ||
                        s(
                            b[_],
                            {
                                setInt8: function (e, t) {
                                    J.call(this, e, (t << 24) >> 24);
                                },
                                setUint8: function (e, t) {
                                    J.call(this, e, (t << 24) >> 24);
                                },
                            },
                            !0
                        );
            } else
                (E = function (e) {
                    l(this, E, "ArrayBuffer");
                    var t = p(e);
                    (this._b = v.call(new Array(t), 0)), (this[k] = t);
                }),
                    (b = function (e, t, n) {
                        l(this, b, "DataView"), l(e, E, "DataView");
                        var r = e[k],
                            o = f(t);
                        if (o < 0 || o > r) throw S("Wrong offset!");
                        if (o + (n = void 0 === n ? r - o : d(n)) > r) throw S("Wrong length!");
                        (this[x] = e), (this[P] = o), (this[k] = n);
                    }),
                    o && (G(E, "byteLength", "_l"), G(b, "buffer", "_b"), G(b, "byteLength", "_l"), G(b, "byteOffset", "_o")),
                    s(b[_], {
                        getInt8: function (e) {
                            return (K(this, 1, e)[0] << 24) >> 24;
                        },
                        getUint8: function (e) {
                            return K(this, 1, e)[0];
                        },
                        getInt16: function (e) {
                            var t = K(this, 2, e, arguments[1]);
                            return (((t[1] << 8) | t[0]) << 16) >> 16;
                        },
                        getUint16: function (e) {
                            var t = K(this, 2, e, arguments[1]);
                            return (t[1] << 8) | t[0];
                        },
                        getInt32: function (e) {
                            return M(K(this, 4, e, arguments[1]));
                        },
                        getUint32: function (e) {
                            return M(K(this, 4, e, arguments[1])) >>> 0;
                        },
                        getFloat32: function (e) {
                            return L(K(this, 4, e, arguments[1]), 23, 4);
                        },
                        getFloat64: function (e) {
                            return L(K(this, 8, e, arguments[1]), 52, 8);
                        },
                        setInt8: function (e, t) {
                            z(this, 1, e, D, t);
                        },
                        setUint8: function (e, t) {
                            z(this, 1, e, D, t);
                        },
                        setInt16: function (e, t) {
                            z(this, 2, e, F, t, arguments[2]);
                        },
                        setUint16: function (e, t) {
                            z(this, 2, e, F, t, arguments[2]);
                        },
                        setInt32: function (e, t) {
                            z(this, 4, e, V, t, arguments[2]);
                        },
                        setUint32: function (e, t) {
                            z(this, 4, e, V, t, arguments[2]);
                        },
                        setFloat32: function (e, t) {
                            z(this, 4, e, U, t, arguments[2]);
                        },
                        setFloat64: function (e, t) {
                            z(this, 8, e, B, t, arguments[2]);
                        },
                    });
            g(E, "ArrayBuffer"), g(b, "DataView"), c(b[_], a.VIEW, !0), (t.ArrayBuffer = E), (t.DataView = b);
        },
        Dk0S: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return r;
            });
            var r = function (e) {
                return -1 !== ["ru", "ua", "kg", "kz", "by", "uz", "tj", "tm", "az", "md", "am"].indexOf(e);
            };
        },
        E02R: function (e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        E7Vc: function (e, t) {
            e.exports = function (e) {
                try {
                    return !!e();
                } catch (e) {
                    return !0;
                }
            };
        },
        E8p1: function (e, t, n) {
            "use strict";
            var r = n("P56o"),
                o = n("U1KF"),
                i = n("GGqZ"),
                a = n("9dxi")("species");
            e.exports = function (e) {
                var t = r[e];
                i &&
                    t &&
                    !t[a] &&
                    o.f(t, a, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        EKI3: function (e, t, n) {
            "use strict";
            function r(e, t) {
                return e
                    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
                    .replace(/\s+/g, " ")
                    .replace(/^\s*|\s*$/g, "");
            }
            function o(e, t) {
                e.classList ? e.classList.remove(t) : "string" == typeof e.className ? (e.className = r(e.className, t)) : e.setAttribute("class", r((e.className && e.className.baseVal) || "", t));
            }
            n.d(t, "a", function () {
                return o;
            });
        },
        EZ0R: function (e, t, n) {
            var r = n("U1KF"),
                o = n("X6VK"),
                i = n("PAFS"),
                a = n("5MU4");
            o(
                o.S +
                    o.F *
                        n("E7Vc")(function () {
                            Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 });
                        }),
                "Reflect",
                {
                    defineProperty: function (e, t, n) {
                        i(e), (t = a(t, !0)), i(n);
                        try {
                            return r.f(e, t, n), !0;
                        } catch (e) {
                            return !1;
                        }
                    },
                }
            );
        },
        EmXy: function (e, t, n) {},
        EtPw: function (e, t, n) {
            var r = n("X6VK"),
                o = n("PAFS"),
                i = Object.preventExtensions;
            r(r.S, "Reflect", {
                preventExtensions: function (e) {
                    o(e);
                    try {
                        return i && i(e), !0;
                    } catch (e) {
                        return !1;
                    }
                },
            });
        },
        EusA: function (e, t) {
            e.exports = function (e, t, n, r) {
                if (!(e instanceof t) || (void 0 !== r && r in e)) throw TypeError(n + ": incorrect invocation!");
                return e;
            };
        },
        F1LU: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return u;
            }),
                n.d(t, "b", function () {
                    return l;
                });
            var r = n("nxTg"),
                o = n.n(r),
                i = n("mXGw"),
                a = n("v32R"),
                c = n("NWgQ"),
                s = n.n(c);
            function u(e) {
                var t = e.sourceUrl,
                    n = e.lang,
                    r = s.a.parseUrl(t).url,
                    o = n;
                "fl" === n && (o = "fil");
                var i = o ? "/".concat(o) : "";
                return "".concat(r.replace("/embedded/partner/olymp/", "").trim("/")).concat(i);
            }
            function l(e) {
                var t = e && e.lang,
                    n = Object(i.useState)(""),
                    r = o()(n, 2),
                    c = r[0],
                    s = r[1];
                return (
                    Object(i.useEffect)(
                        function () {
                            a.b.load().then(function () {
                                var e = u({ sourceUrl: a.b.services.plus.url, lang: t });
                                s(e);
                            });
                        },
                        [t, c]
                    ),
                    c
                );
            }
        },
        F9vW: function (e, t, n) {
            var r = n("X6VK"),
                o = n("5BMI");
            r(r.G + r.B, { setImmediate: o.set, clearImmediate: o.clear });
        },
        FEHE: function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("Sp5b"),
                i = n("Alw5"),
                a = "".startsWith;
            r(r.P + r.F * n("Fl7L")("startsWith"), "String", {
                startsWith: function (e) {
                    var t = i(this, e, "startsWith"),
                        n = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                        r = String(e);
                    return a ? a.call(t, r, n) : t.slice(n, n + r.length) === r;
                },
            });
        },
        FOcJ: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return m;
            });
            var r = n("OvAC"),
                o = n.n(r),
                i = n("mXGw"),
                a = n.n(i),
                c = n("8Jek"),
                s = n.n(c),
                u = n("VGkd"),
                l = n("cUhM"),
                f = n("YTIe"),
                d = n("rKJr");
            n("FS1u");
            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            var m = function (e) {
                return a.a.createElement(
                    u.Transition,
                    { native: !0, items: e.isActive, from: { transform: "translate(100%, 0)" }, enter: { transform: "translate(0, 0)", zIndex: 1e3 }, leave: { transform: "translate(100%, 0)", zIndex: -1 }, config: { duration: 200 } },
                    function (t) {
                        return (
                            t &&
                            function (t) {
                                return a.a.createElement(
                                    "div",
                                    { className: s()("com-auth", e.isActive && "com-auth_state_active", e.className) },
                                    a.a.createElement(l.c, { className: "com-auth__bg-close", onClick: e.onClick }),
                                    a.a.createElement(
                                        u.animated.div,
                                        {
                                            style: (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {};
                                                    t % 2
                                                        ? p(Object(n), !0).forEach(function (t) {
                                                              o()(e, t, n[t]);
                                                          })
                                                        : Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                        : p(Object(n)).forEach(function (t) {
                                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                                          });
                                                }
                                                return e;
                                            })({}, t),
                                            className: "com-auth__sidebar",
                                        },
                                        a.a.createElement("button", { className: "com-auth__button-close", onClick: e.onClick }, a.a.createElement(f.x, null)),
                                        a.a.createElement(d.a, null)
                                    )
                                );
                            }
                        );
                    }
                );
            };
        },
        FS1u: function (e, t, n) {},
        Fcif: function (e, t, n) {
            "use strict";
            function r() {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        FdQX: function (e, t, n) {
            var r = n("X6VK"),
                o = Math.asinh;
            r(r.S + r.F * !(o && 1 / o(0) > 0), "Math", {
                asinh: function e(t) {
                    return isFinite((t = +t)) && 0 != t ? (t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1))) : t;
                },
            });
        },
        Fl7L: function (e, t, n) {
            var r = n("9dxi")("match");
            e.exports = function (e) {
                var t = /./;
                try {
                    "/./"[e](t);
                } catch (n) {
                    try {
                        return (t[r] = !1), !"/./"[e](t);
                    } catch (e) {}
                }
                return !0;
            };
        },
        Fu0I: function (e, t, n) {
            "use strict";
            var r = n("OFVL"),
                o = RegExp.prototype.exec;
            e.exports = function (e, t) {
                var n = e.exec;
                if ("function" == typeof n) {
                    var i = n.call(e, t);
                    if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                    return i;
                }
                if ("RegExp" !== r(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
                return o.call(e, t);
            };
        },
        Fuyp: function (e, t, n) {
            e.exports = n.p + "../images/home_img_desktop@2x.006fd953.png";
        },
        G2C3: function (e, t, n) {
            var r = n("X6VK"),
                o = n("A1KM"),
                i = n("PAFS");
            r(r.S, "Reflect", {
                getPrototypeOf: function (e) {
                    return o(i(e));
                },
            });
        },
        GCOZ: function (e, t) {
            e.exports = function (e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e;
            };
        },
        GGqZ: function (e, t, n) {
            e.exports = !n("E7Vc")(function () {
                return (
                    7 !=
                    Object.defineProperty({}, "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
        },
        GKqq: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
        },
        GTEP: function (e, t, n) {
            "use strict";
            var r = n("s14n"),
                o = n("SsG5");
            n("AkS8")(
                "WeakSet",
                function (e) {
                    return function () {
                        return e(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                {
                    add: function (e) {
                        return r.def(o(this, "WeakSet"), e, !0);
                    },
                },
                r,
                !1,
                !0
            );
        },
        GdbT: function (e, t, n) {
            var r = n("mvii"),
                o = n("Sp5b");
            e.exports = function (e) {
                if (void 0 === e) return 0;
                var t = r(e),
                    n = o(t);
                if (t !== n) throw RangeError("Wrong length!");
                return n;
            };
        },
        GeWT: function (e, t, n) {
            "use strict";
            var r = n("xVO4"),
                o = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 },
                i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
                a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
                c = {};
            function s(e) {
                return r.isMemo(e) ? a : c[e.$$typeof] || o;
            }
            (c[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (c[r.Memo] = a);
            var u = Object.defineProperty,
                l = Object.getOwnPropertyNames,
                f = Object.getOwnPropertySymbols,
                d = Object.getOwnPropertyDescriptor,
                p = Object.getPrototypeOf,
                m = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" != typeof n) {
                    if (m) {
                        var o = p(n);
                        o && o !== m && e(t, o, r);
                    }
                    var a = l(n);
                    f && (a = a.concat(f(n)));
                    for (var c = s(t), h = s(n), v = 0; v < a.length; ++v) {
                        var g = a[v];
                        if (!(i[g] || (r && r[g]) || (h && h[g]) || (c && c[g]))) {
                            var _ = d(n, g);
                            try {
                                u(t, g, _);
                            } catch (e) {}
                        }
                    }
                }
                return t;
            };
        },
        Gv0X: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Number", { isInteger: n("xI3J") });
        },
        HLk9: function (e, t, n) {},
        HWsP: function (e, t, n) {
            e.exports =
                !n("GGqZ") &&
                !n("E7Vc")(function () {
                    return (
                        7 !=
                        Object.defineProperty(n("mggL")("div"), "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        HZro: function (e, t, n) {
            var r = n("Bsg+"),
                o = n("zIP/").onFreeze;
            n("gRlk")("seal", function (e) {
                return function (t) {
                    return e && r(t) ? e(o(t)) : t;
                };
            });
        },
        HqX2: function (e, t, n) {
            var r = n("9liC"),
                o = n("iJnn"),
                i = n("2LOZ"),
                a = n("PAFS"),
                c = n("Sp5b"),
                s = n("pB2m"),
                u = {},
                l = {};
            ((t = e.exports = function (e, t, n, f, d) {
                var p,
                    m,
                    h,
                    v,
                    g = d
                        ? function () {
                              return e;
                          }
                        : s(e),
                    _ = r(n, f, t ? 2 : 1),
                    y = 0;
                if ("function" != typeof g) throw TypeError(e + " is not iterable!");
                if (i(g)) {
                    for (p = c(e.length); p > y; y++) if ((v = t ? _(a((m = e[y]))[0], m[1]) : _(e[y])) === u || v === l) return v;
                } else for (h = g.call(e); !(m = h.next()).done; ) if ((v = o(h, _, m.value, t)) === u || v === l) return v;
            }).BREAK = u),
                (t.RETURN = l);
        },
        IKQL: function (e, t, n) {
            var r = n("X6VK");
            r(r.P, "Array", { fill: n("Pfmf") }), n("OfmW")("fill");
        },
        IL7q: function (e, t, n) {
            "use strict";
            var r = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable;
            e.exports = (function () {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if (
                        "0123456789" !==
                        Object.getOwnPropertyNames(t)
                            .map(function (e) {
                                return t[e];
                            })
                            .join("")
                    )
                        return !1;
                    var r = {};
                    return (
                        "abcdefghijklmnopqrst".split("").forEach(function (e) {
                            r[e] = e;
                        }),
                        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    );
                } catch (e) {
                    return !1;
                }
            })()
                ? Object.assign
                : function (e, t) {
                      for (
                          var n,
                              a,
                              c = (function (e) {
                                  if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                                  return Object(e);
                              })(e),
                              s = 1;
                          s < arguments.length;
                          s++
                      ) {
                          for (var u in (n = Object(arguments[s]))) o.call(n, u) && (c[u] = n[u]);
                          if (r) {
                              a = r(n);
                              for (var l = 0; l < a.length; l++) i.call(n, a[l]) && (c[a[l]] = n[a[l]]);
                          }
                      }
                      return c;
                  };
        },
        Ibj2: function (e, t) {
            e.exports = {};
        },
        IdFN: function (e, t) {
            t.f = {}.propertyIsEnumerable;
        },
        Ixt0: function (e, t, n) {
            "use strict";
            var r = n("v32R"),
                o = n("tyvn"),
                i = window._globalsConfig,
                a = i.user,
                c = void 0 === a ? {} : a;
            r.b.load(),
                (t.a = {
                    lang: i.lang || o.Ab.EN,
                    page: i.page,
                    country: i.country,
                    userId: c.id,
                    jivoHash: i.jivoHash,
                    email: c.email,
                    userName: c.name,
                    supportPhones: i.support_phones,
                    supportChat: i.support_chat.active_chat,
                    phone: c.phone,
                    serviceLevel: c.serviceLevel,
                });
        },
        "J/we": function (e, t, n) {
            e.exports = n.p + "../images/starPart.8196710a.svg";
        },
        J2KO: function (e, t, n) {
            "use strict";
            var r = n("SDJZ"),
                o = n.n(r),
                i = n("NToG"),
                a = n.n(i),
                c = n("K4DB"),
                s = n.n(c),
                u = n("+IV6"),
                l = n.n(u),
                f = n("eef+"),
                d = n.n(f),
                p = n("mXGw"),
                m = n.n(p),
                h = n("8Jek"),
                v = n.n(h),
                g = n("D9Fv"),
                _ = n.n(g),
                y = n("Ixt0"),
                E = n("v32R"),
                b = n("F1LU"),
                w = n("deTv"),
                S = n("cUhM"),
                O = n("/p/l"),
                A = n("zRYl"),
                T =
                    (n("YVBP"),
                    function (e) {
                        return m.a.createElement("a", { className: v()("com-header-c-nav-link", e.className), href: e.href }, m.a.createElement(w.c, e.trans.title));
                    }),
                R = [
                    { id: 1, trans: Object(w.e)({ title: { id: "site_about_company", defaultMessage: "About us" } }), href: "/about" },
                    {
                        id: 2,
                        trans: Object(w.e)({ title: { id: "user_tpl_training", defaultMessage: "Education" } }),
                        href: function (e) {
                            return "".concat(e.plusUrl, "/education?theme=").concat(e.theme);
                        },
                    },
                    {
                        id: 3,
                        trans: Object(w.e)({ title: { id: "stocksup_faq", defaultMessage: "FAQ" } }),
                        href: function (e) {
                            return "".concat(e.plusUrl, "/faq?theme=").concat(e.theme);
                        },
                    },
                    {
                        id: 4,
                        trans: Object(w.e)({ title: { id: "stocksup_assets", defaultMessage: "Assets" } }),
                        href: function (e) {
                            return "".concat(e.plusUrl, "/assets?theme=").concat(e.theme);
                        },
                    },
                ],
                N =
                    (n("0a0o"),
                    function (e) {
                        return m.a.createElement(
                            "nav",
                            { className: v()("com-header-links", e.className) },
                            m.a.createElement(
                                "ul",
                                { className: "com-header-links__list" },
                                R.map(function (t) {
                                    return m.a.createElement("li", { key: "main-link-".concat(t.id), className: "com-header-links__item" }, m.a.createElement(T, { trans: t.trans, href: "function" == typeof t.href ? t.href(e) : t.href }));
                                })
                            )
                        );
                    }),
                I = n("tyvn"),
                C = (n("hzx0"), n("10fs")),
                x = n("8VmE"),
                k = n.n(x),
                P = function (e) {
                    return m.a.createElement(
                        "svg",
                        k()({ width: "30", height: "32", viewBox: "0 0 30 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e),
                        m.a.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d:
                                "M15 30.2222C23.2843 30.2222 30 23.4567 30 15.1111C30 6.76547 23.2843 0 15 0C6.71573 0 0 6.76547 0 15.1111C0 23.4567 6.71573 30.2222 15 30.2222ZM15 23.1111C19.1421 23.1111 22.5 19.5294 22.5 15.1111C22.5 10.6928 19.1421 7.11111 15 7.11111C10.8579 7.11111 7.5 10.6928 7.5 15.1111C7.5 19.5294 10.8579 23.1111 15 23.1111Z",
                            fill: "white",
                        }),
                        m.a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.9999 17.7778L4.41162 32.0001H25.5881L14.9999 17.7778Z", fill: "#1FBF75" })
                    );
                };
            n.d(t, "a", function () {
                return j;
            });
            var j = (function (e) {
                function t() {
                    var e, n;
                    o()(this, t);
                    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return ((n = s()(this, (e = l()(t)).call.apply(e, [this].concat(i)))).state = { plusUrl: "" }), n;
                }
                return (
                    d()(t, e),
                    a()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this;
                                Object(O.a)({ openChat: !1, lang: this.props.lang }),
                                    E.b.load().then(function () {
                                        var t = e.props.lang;
                                        e.setState({ plusUrl: Object(b.a)({ sourceUrl: E.b.services.plus.url, lang: t }) });
                                    });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.userId,
                                    n = e.onNavigationClick,
                                    r = e.onRegistration,
                                    o = e.onLogin,
                                    i = e.className,
                                    a = e.classNameContainer,
                                    c = this.state.plusUrl,
                                    s = y.a && "home" !== y.a.page ? (t ? "/platform" : "/") : null;
                                return m.a.createElement(
                                    "header",
                                    { className: v()("com-header", i) },
                                    m.a.createElement(
                                        "div",
                                        { className: v()("com-header__container", a) },
                                        m.a.createElement(
                                            "div",
                                            { className: "com-header__box" },
                                            m.a.createElement(
                                                _.a,
                                                { maxWidth: 860 },
                                                m.a.createElement(A.a, { className: "com-header__nav", onClick: n }),
                                                m.a.createElement("a", { className: "com-header__logo", href: s, target: "_self", rel: "noopener noreferrer" }, m.a.createElement(P, null))
                                            ),
                                            m.a.createElement(_.a, { minWidth: 861 }, m.a.createElement("a", { className: "com-header__logo", href: s, target: "_self", rel: "noopener noreferrer" }, m.a.createElement(C.a, null)))
                                        ),
                                        m.a.createElement(_.a, { minWidth: 860 }, m.a.createElement(N, { plusUrl: c, theme: I.cd.DARK, userId: t })),
                                        m.a.createElement(
                                            "div",
                                            { className: "com-header__buttons" },
                                            t
                                                ? m.a.createElement(S.b, { component: "a", href: "/platform", color: "accent", size: "large" }, m.a.createElement(w.c, { id: "user_tpl_start_trade", defaultMessage: "Start trading" }))
                                                : m.a.createElement(
                                                      p.Fragment,
                                                      null,
                                                      m.a.createElement(S.b, { className: "com-header__button", onClick: o }, m.a.createElement(w.c, { id: "user_tpl_login", defaultMessage: "Log in" })),
                                                      m.a.createElement(S.b, { className: "com-header__button", color: "accent", onClick: r }, m.a.createElement(w.c, { id: "user_tpl_registration", defaultMessage: "Registration" }))
                                                  )
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(m.a.Component);
        },
        J8hF: function (e, t, n) {
            var r = n("P56o"),
                o = n("jEou"),
                i = n("U1KF").f,
                a = n("zIds").f,
                c = n("NVL/"),
                s = n("MBcE"),
                u = r.RegExp,
                l = u,
                f = u.prototype,
                d = /a/g,
                p = /a/g,
                m = new u(d) !== d;
            if (
                n("GGqZ") &&
                (!m ||
                    n("E7Vc")(function () {
                        return (p[n("9dxi")("match")] = !1), u(d) != d || u(p) == p || "/a/i" != u(d, "i");
                    }))
            ) {
                u = function (e, t) {
                    var n = this instanceof u,
                        r = c(e),
                        i = void 0 === t;
                    return !n && r && e.constructor === u && i ? e : o(m ? new l(r && !i ? e.source : e, t) : l((r = e instanceof u) ? e.source : e, r && i ? s.call(e) : t), n ? this : f, u);
                };
                for (
                    var h = function (e) {
                            (e in u) ||
                                i(u, e, {
                                    configurable: !0,
                                    get: function () {
                                        return l[e];
                                    },
                                    set: function (t) {
                                        l[e] = t;
                                    },
                                });
                        },
                        v = a(l),
                        g = 0;
                    v.length > g;

                )
                    h(v[g++]);
                (f.constructor = u), (u.prototype = f), n("sU/p")(r, "RegExp", u);
            }
            n("E8p1")("RegExp");
        },
        JDiE: function (e, t, n) {},
        JGfN: function (e, t, n) {
            e.exports = n("ZVIm")("native-function-to-string", Function.toString);
        },
        JKk3: function (e, t, n) {
            "use strict";
            var r = n("UnHL"),
                o = n("BUlT"),
                i = n("Sp5b");
            e.exports =
                [].copyWithin ||
                function (e, t) {
                    var n = r(this),
                        a = i(n.length),
                        c = o(e, a),
                        s = o(t, a),
                        u = arguments.length > 2 ? arguments[2] : void 0,
                        l = Math.min((void 0 === u ? a : o(u, a)) - s, a - c),
                        f = 1;
                    for (s < c && c < s + l && ((f = -1), (s += l - 1), (c += l - 1)); l-- > 0; ) s in n ? (n[c] = n[s]) : delete n[c], (c += f), (s += f);
                    return n;
                };
        },
        "Jww/": function (e, t, n) {
            "use strict";
            var r = n("wEu9"),
                o = n("X6VK"),
                i = n("sU/p"),
                a = n("tjmq"),
                c = n("Ibj2"),
                s = n("puZ4"),
                u = n("jPEw"),
                l = n("A1KM"),
                f = n("9dxi")("iterator"),
                d = !([].keys && "next" in [].keys()),
                p = function () {
                    return this;
                };
            e.exports = function (e, t, n, m, h, v, g) {
                s(n, t, m);
                var _,
                    y,
                    E,
                    b = function (e) {
                        if (!d && e in A) return A[e];
                        switch (e) {
                            case "keys":
                            case "values":
                                return function () {
                                    return new n(this, e);
                                };
                        }
                        return function () {
                            return new n(this, e);
                        };
                    },
                    w = t + " Iterator",
                    S = "values" == h,
                    O = !1,
                    A = e.prototype,
                    T = A[f] || A["@@iterator"] || (h && A[h]),
                    R = T || b(h),
                    N = h ? (S ? b("entries") : R) : void 0,
                    I = ("Array" == t && A.entries) || T;
                if (
                    (I && (E = l(I.call(new e()))) !== Object.prototype && E.next && (u(E, w, !0), r || "function" == typeof E[f] || a(E, f, p)),
                    S &&
                        T &&
                        "values" !== T.name &&
                        ((O = !0),
                        (R = function () {
                            return T.call(this);
                        })),
                    (r && !g) || (!d && !O && A[f]) || a(A, f, R),
                    (c[t] = R),
                    (c[w] = p),
                    h)
                )
                    if (((_ = { values: S ? R : b("values"), keys: v ? R : b("keys"), entries: N }), g)) for (y in _) y in A || i(A, y, _[y]);
                    else o(o.P + o.F * (d || O), t, _);
                return _;
            };
        },
        "K/PF": function (e, t, n) {
            "use strict";
            var r = n("OfmW"),
                o = n("VVFi"),
                i = n("Ibj2"),
                a = n("ml72");
            (e.exports = n("Jww/")(
                Array,
                "Array",
                function (e, t) {
                    (this._t = a(e)), (this._i = 0), (this._k = t);
                },
                function () {
                    var e = this._t,
                        t = this._k,
                        n = this._i++;
                    return !e || n >= e.length ? ((this._t = void 0), o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
                },
                "values"
            )),
                (i.Arguments = i.Array),
                r("keys"),
                r("values"),
                r("entries");
        },
        K08j: function (e, t, n) {
            "use strict";
            var r = n("tyvn"),
                o = n("6eLe"),
                i = n("eg5f"),
                a = n("AD5U"),
                c = n("APqL");
            var s = n("f6l3");
            n.d(t, "h", function () {
                return l;
            }),
                n.d(t, "b", function () {
                    return f;
                }),
                n.d(t, "g", function () {
                    return d;
                }),
                n.d(t, "a", function () {
                    return p;
                }),
                n.d(t, "c", function () {
                    return m;
                }),
                n.d(t, "d", function () {
                    return h;
                }),
                n.d(t, "e", function () {
                    return v;
                }),
                n.d(t, "f", function () {
                    return g;
                });
            var u = {};
            function l(e, t, n) {
                e && (u[e] || (u[e] = {}), (u[e][t] = n));
            }
            function f(e, t) {
                return (u[e] && t ? u[e][t] : u[e]) || {};
            }
            var d = function (e, t) {
                    return "unavailable" === e ? a.e.AUTH_IS_BLOCKED : t !== a.e.SIGN_UP || "available" === e ? t : "onlySignIn" === e ? a.e.SIGN_UP_NOT_AVAILABLE : a.e.SIGN_IN;
                },
                p = function () {
                    var e,
                        t = i.a.projectUser,
                        n =
                            (e = (function (e) {
                                var t = /#action=([A-z_-]+)/.exec(e);
                                return t && t[1];
                            })(window.location.hash)) && Object.values(a.g).includes(e)
                                ? (window.history.replaceState("", document.title, "".concat(window.location.pathname).concat(window.location.search)), e)
                                : null;
                    return n
                        ? (function (e) {
                              switch ((e === a.g.OPEN_RECHARGE && (window.location = "/cabinet#tab=recharge"), e)) {
                                  case a.g.AUTH:
                                  case a.g.AUTH_PLATFORM:
                                  case a.g.OPEN_PLATFORM:
                                      return a.e.SIGN_IN;
                                  case a.g.REGISTER:
                                      return a.e.SIGN_UP;
                                  case a.g.CHANGE_PASS:
                                      return a.e.ENTER_NEW_PASS;
                                  case a.g.RESTORE_PASS:
                                      return a.e.RESTORE_PASS;
                                  default:
                                      return a.e.SIGN_UP;
                              }
                          })(n)
                        : t
                        ? a.e.SIGN_IN
                        : a.e.SIGN_UP;
                },
                m = function () {
                    return Object(c.a)() || Object(s.u)("X-App-Name") === r.td.DESKTOP;
                },
                h = function (e, t, n) {
                    return Boolean(e) && !t && !n;
                },
                v = function (e) {
                    if (i.a.lang === r.Ab.ZH) return [];
                    var t = Object.keys(e.oauth_networks || {});
                    return (
                        t.sort(),
                        t.reduce(function (e, t) {
                            var n = a.j.find(function (e) {
                                return e.type === t;
                            });
                            return n && e.push({ type: n.type, href: n.href, title: n.title, IconComponent: n.IconComponent }), e;
                        }, [])
                    );
                };
            function g(e) {
                var t =
                    o.b === r.xc || o.b === r.yc
                        ? e.projects.find(function (e) {
                              return e.name === r.xc;
                          })
                        : e.projects.find(function (e) {
                              return e.name === r.zc;
                          });
                return t ? { loginAllow: t.login_allow, regAllow: t.reg_allow } : { loginAllow: !1, regAllow: !1 };
            }
        },
        K4DB: function (e, t, n) {
            var r = n("e+GP"),
                o = n("T1e2");
            e.exports = function (e, t) {
                return !t || ("object" !== r(t) && "function" != typeof t) ? o(e) : t;
            };
        },
        KBDK: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
        },
        KEff: function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("UnHL"),
                i = n("5MU4"),
                a = n("A1KM"),
                c = n("1Tj+").f;
            n("GGqZ") &&
                r(r.P + n("j3QZ"), "Object", {
                    __lookupSetter__: function (e) {
                        var t,
                            n = o(this),
                            r = i(e, !0);
                        do {
                            if ((t = c(n, r))) return t.set;
                        } while ((n = a(n)));
                    },
                });
        },
        KFSm: function (e, t) {
            e.exports = function (e, t, n) {
                var r = void 0 === n;
                switch (t.length) {
                    case 0:
                        return r ? e() : e.call(n);
                    case 1:
                        return r ? e(t[0]) : e.call(n, t[0]);
                    case 2:
                        return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                    case 3:
                        return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                    case 4:
                        return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
                }
                return e.apply(n, t);
            };
        },
        KIfq: function (e, t, n) {
            "use strict";
            var r = n("SDJZ"),
                o = n.n(r),
                i = n("NToG"),
                a = n.n(i),
                c = n("K4DB"),
                s = n.n(c),
                u = n("+IV6"),
                l = n.n(u),
                f = n("eef+"),
                d = n.n(f),
                p = n("mXGw"),
                m = n.n(p),
                h = n("92VU"),
                v = n("8Jek"),
                g = n.n(v),
                _ = n("D9Fv"),
                y = n.n(_),
                E = n("F1LU"),
                b = n("v32R"),
                w = n("f6l3"),
                S = n("tyvn"),
                O = n("deTv"),
                A = n("UOCr"),
                T =
                    (n("b36Z"),
                    function (e) {
                        return m.a.createElement("a", { className: g()("com-footer-c-nav-link", e.className), href: e.href }, m.a.createElement(O.c, e.trans.title));
                    }),
                R = [
                    { id: 1, trans: Object(O.e)({ title: { id: "site_about_company", defaultMessage: "About us" } }), href: S.Lc.ABOUT },
                    { id: 2, trans: Object(O.e)({ title: { id: "user_tpl_support", defaultMessage: "Support" } }), href: S.Lc.SUPPORT },
                    {
                        id: 3,
                        trans: Object(O.e)({ title: { id: "stocksup_faq", defaultMessage: "FAQ" } }),
                        href: function (e) {
                            var t = e.plusUrl,
                                n = e.theme;
                            return "".concat(t, "/faq?theme=").concat(n);
                        },
                    },
                    { id: 4, trans: Object(O.e)({ title: { id: "affiliate_program", defaultMessage: "Affiliate program" } }), href: S.Lc.AFFILIATE },
                ],
                N = [
                    {
                        id: 9,
                        trans: Object(O.e)({ title: { id: "user_tpl_training", defaultMessage: "Education" } }),
                        href: function (e) {
                            var t = e.plusUrl,
                                n = e.theme;
                            return "".concat(t, "/education?theme=").concat(n);
                        },
                    },
                    { id: 5, trans: Object(O.e)({ title: { id: "education_main_webinars", defaultMessage: "Webinars" } }), href: S.Lc.EDUCATION },
                    { id: 6, trans: Object(O.e)({ title: { id: "education_webinars_fx", defaultMessage: "Webinars Forex" } }), href: "".concat(S.Lc.EDUCATION, "/webinarfx") },
                ],
                I = [
                    {
                        id: 7,
                        trans: Object(O.e)({ title: { id: "stocksup_assets", defaultMessage: "Assets" } }),
                        href: function (e) {
                            var t = e.plusUrl,
                                n = e.theme;
                            return "".concat(t, "/assets?theme=").concat(n);
                        },
                    },
                    { id: 9, trans: Object(O.e)({ title: { id: "blog", defaultMessage: "Blog" } }), href: "".concat(S.Lc.BLOG, "analytics/") },
                ],
                C = [
                    { id: 1, trans: Object(O.e)({ title: { id: "site_about_company", defaultMessage: "About us" } }), href: S.Lc.ABOUT },
                    { id: 4, trans: Object(O.e)({ title: { id: "affiliate_program", defaultMessage: "Affiliate program" } }), href: S.Lc.AFFILIATE },
                ],
                x =
                    (n("fMmQ"),
                    function (e) {
                        return m.a.createElement(
                            "nav",
                            { className: g()("com-footer-m-nav-links", e.className) },
                            m.a.createElement(
                                "div",
                                { className: "com-footer-m-nav-links__part" },
                                m.a.createElement("h3", { className: "com-footer-m-nav-links__title" }, "Olymp Trade"),
                                m.a.createElement(
                                    "ul",
                                    { className: "com-footer-m-nav-links__list" },
                                    (e.isMT4 ? C : R).map(function (t) {
                                        return m.a.createElement(
                                            "li",
                                            { key: "main-link-".concat(t.id), className: "com-footer-m-nav-links__item" },
                                            m.a.createElement(T, { trans: t.trans, href: "function" == typeof t.href ? t.href(e) : t.href })
                                        );
                                    })
                                )
                            ),
                            e.isMT4
                                ? null
                                : m.a.createElement(
                                      "div",
                                      { className: "com-footer-m-nav-links__part" },
                                      m.a.createElement("h3", { className: "com-footer-m-nav-links__title" }, m.a.createElement(O.c, { id: "sidebar_menu_title_overlay", defaultMessage: "Help" })),
                                      m.a.createElement(
                                          "ul",
                                          { className: "com-footer-m-nav-links__list" },
                                          N.map(function (t) {
                                              return m.a.createElement(
                                                  "li",
                                                  { key: "main-link-".concat(t.id), className: "com-footer-m-nav-links__item" },
                                                  m.a.createElement(T, { trans: t.trans, href: "function" == typeof t.href ? t.href(e) : t.href })
                                              );
                                          })
                                      )
                                  ),
                            m.a.createElement(
                                "div",
                                { className: "com-footer-m-nav-links__part" },
                                m.a.createElement("h3", { className: "com-footer-m-nav-links__title" }, m.a.createElement(O.c, { id: "user_tpl_analytics", defaultMessage: "Analytics" })),
                                m.a.createElement(
                                    "ul",
                                    { className: "com-footer-m-nav-links__list" },
                                    I.map(function (t) {
                                        return m.a.createElement(
                                            "li",
                                            { key: "main-link-".concat(t.id), className: "com-footer-m-nav-links__item" },
                                            m.a.createElement(T, { trans: t.trans, href: "function" == typeof t.href ? t.href(e) : t.href })
                                        );
                                    })
                                )
                            )
                        );
                    });
            n("Prms");
            var k = function (e) {
                    return m.a.createElement(
                        "a",
                        {
                            className: g()("com-footer-c-social-link", "com-footer-c-social-link_type_".concat(e.type), e.className),
                            href: ((t = e.links), (n = e.lang), n && t[n] ? t[n] : t.en),
                            rel: "nofollow noopener noreferrer",
                            target: "_blank",
                        },
                        m.a.createElement("span", { className: "com-footer-c-social-link__icon" }, e.icon),
                        m.a.createElement("span", { className: "com-footer-c-social-link__info" }, m.a.createElement("span", { className: "com-footer-c-social-link__amount" }, e.amount), m.a.createElement("span", null, e.title))
                    );
                    var t, n;
                },
                P = n("8VmE"),
                j = n.n(P),
                L = [
                    {
                        id: 1,
                        type: "youtube",
                        title: "Youtube",
                        amount: "220K",
                        icon: m.a.createElement(function (e) {
                            return m.a.createElement(
                                "svg",
                                j()({ fill: "none", height: 40, viewBox: "0 0 40 40", width: 40 }, e),
                                m.a.createElement("path", {
                                    d:
                                        "M36.345 13.008a4.665 4.665 0 00-4.248-4.231 137.52 137.52 0 00-11.264-.444c-5.754 0-10.097.235-12.905.456a4.665 4.665 0 00-4.274 4.236 74.842 74.842 0 00-.32 7.045c0 2.778.147 5.124.318 6.91a4.664 4.664 0 004.273 4.231c2.808.22 7.152.456 12.908.456 4.779 0 8.651-.227 11.264-.444a4.666 4.666 0 004.248-4.231c.172-1.8.322-4.172.322-6.992 0-2.82-.15-5.192-.322-6.992zm-20.052 11.89v-9.796L25.957 20z",
                                    fill: "#fff",
                                })
                            );
                        }, null),
                        links: {
                            ru: "https://www.youtube.com/c/OlympTrade",
                            en: "https://www.youtube.com/olymptradeglobal",
                            es: "https://www.youtube.com/channel/UC96LlK1ysynlkWDcJQtBehw",
                            id: "https://www.youtube.com/c/OLYMPTRADEIndonesia",
                            pt: "https://www.youtube.com/c/OLYMPTRADEBRASIL",
                            th: "https://www.youtube.com/channel/UC0I2-erMwjLQ9jnhVQFb_Fg",
                            tr: "https://www.youtube.com/c/OLYMPTRADET%C3%9CRK%C4%B0YE",
                            vi: "https://www.youtube.com/c/OLYMPTRADEVi%E1%BB%87tNam",
                            zh: "https://www.youtube.com/c/OLYMPTRADEGlobal",
                        },
                    },
                    {
                        id: 2,
                        type: "fb",
                        title: "Facebook",
                        amount: "1M",
                        icon: m.a.createElement(function (e) {
                            return m.a.createElement(
                                "svg",
                                j()({ fill: "none", height: 40, viewBox: "0 0 40 40", width: 40 }, e),
                                m.a.createElement("path", {
                                    clipRule: "evenodd",
                                    d:
                                        "M31.313 33c.931 0 1.687-.756 1.687-1.688V7.688C33 6.756 32.244 6 31.312 6H7.688C6.756 6 6 6.756 6 7.688v23.625C6 32.243 6.756 33 7.688 33h12.656V22.875h-3.375v-4.219h3.375v-2.531c0-3.475 1.962-5.906 5.062-5.906h3.375v4.219h-1.687c-1.686 0-2.531.843-2.531 2.53v1.688h4.218l-.844 4.219h-3.375V33z",
                                    fill: "#fff",
                                    fillRule: "evenodd",
                                })
                            );
                        }, null),
                        links: { en: "https://www.facebook.com/olymptradecom/" },
                    },
                ],
                M =
                    (n("sV0p"),
                    function (e) {
                        return m.a.createElement(
                            "div",
                            { className: g()("com-footer-m-social-list", e.className) },
                            L.map(function (t) {
                                return m.a.createElement(k, { className: "com-footer-m-social-list__link", key: "social-link-".concat(t.id), icon: t.icon, amount: t.amount, links: t.links, title: t.title, type: t.type, lang: e.lang });
                            })
                        );
                    }),
                D = n("10fs"),
                F =
                    (n("6JNi"),
                    function (e) {
                        return m.a.createElement(
                            "div",
                            { className: g()("com-footer-m-main-info", e.className) },
                            m.a.createElement(
                                "div",
                                { className: "com-footer-m-main-info__content" },
                                m.a.createElement(
                                    "div",
                                    { className: "com-footer-m-main-info__data" },
                                    m.a.createElement("a", { className: "com-footer-m-main-info__logo", href: "/platform" }, m.a.createElement(D.a, null)),
                                    m.a.createElement("div", { className: "com-footer-m-main-info__copy" }, "© 2014 — ", new Date().getFullYear(), " OlympTrade")
                                ),
                                m.a.createElement(y.a, { maxWidth: 859 }, m.a.createElement(M, { className: "com-footer-m-main-info__social-links", lang: e.lang }))
                            ),
                            m.a.createElement(
                                "p",
                                { className: "com-footer-m-main-info__text" },
                                m.a.createElement(O.b, { id: "footer_text_part_1", defaultMessage: "The transactions offered by this website can be executed only by fully competent adults" }),
                                m.a.createElement(O.b, { id: "footer_text_part_2", defaultMessage: "The site hosted at the olymptrade.com domain belongs to and is managed by Inlustris Ltd." })
                            )
                        );
                    }),
                V = n("Grp/");
            n("U4kB");
            n.d(t, "a", function () {
                return B;
            });
            var B = (function (e) {
                function t() {
                    var e, n;
                    o()(this, t);
                    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return (
                        ((n = s()(this, (e = l()(t)).call.apply(e, [this].concat(i)))).state = { plusUrl: "" }),
                        (n.onChangeLang = function (e) {
                            S.zb[e] &&
                                Object(A.a)(S.zb[e]).then(function () {
                                    window.location = ""
                                        .concat(window.location)
                                        .replace(/\/[a-z]{2}-[A-z]{2}(\/|$)/, "/".concat(S.zb[e].replace("_", "-"), "$1"))
                                        .toLocaleLowerCase();
                                }),
                                Object(w.r)({ event: "uaGtmEvents_clicks", eventCategory: "menu_main_new", eventAction: "changeLang_new", eventLabel: e });
                        }),
                        n
                    );
                }
                return (
                    d()(t, e),
                    a()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var e = this;
                                b.b.load().then(function () {
                                    var t = e.props.lang;
                                    e.setState({ plusUrl: Object(E.a)({ sourceUrl: b.b.services.plus.url, lang: t }) });
                                });
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.classContainerName,
                                    n = e.className,
                                    r = e.isMT4,
                                    o = e.lang,
                                    i = e.theme,
                                    a = this.state.plusUrl,
                                    c = S.zb[o];
                                return m.a.createElement(
                                    h.b,
                                    { value: O.g.getInstance() },
                                    m.a.createElement(
                                        "footer",
                                        { "data-theme": "olymp_dark", className: g()("com-footer", n), dir: Object(w.G)(c) ? "rtl" : "ltr" },
                                        m.a.createElement(
                                            "div",
                                            { className: g()("com-footer-top", "com-footer__container", t) },
                                            m.a.createElement(
                                                y.a,
                                                { minWidth: 860 },
                                                m.a.createElement("div", { className: "com-footer-top__main" }, m.a.createElement(x, { className: "com-footer-top__nav", isMT4: r, plusUrl: a, theme: i }), m.a.createElement(M, { lang: o }))
                                            ),
                                            m.a.createElement(F, { className: "com-footer-top__info", lang: o })
                                        ),
                                        m.a.createElement(
                                            "div",
                                            { className: "com-footer-bottom" },
                                            m.a.createElement(
                                                "div",
                                                { className: g()("com-footer-bottom__content", "com-footer__container", t) },
                                                m.a.createElement(V.a, {
                                                    className: "com-footer-bottom__langs",
                                                    classPickBtnName: "com-footer-bottom__pick-btn",
                                                    onChangeLang: this.onChangeLang,
                                                    dataTest: "home_language_select",
                                                    dataTestItem: "home_language_select_item",
                                                    lang: o,
                                                    direction: Object(w.G)(c) ? "rtl" : "ltr",
                                                    placement: "top",
                                                }),
                                                m.a.createElement(
                                                    "nav",
                                                    { className: "com-footer-bottom__nav" },
                                                    m.a.createElement(T, { className: "com-footer-bottom__link", trans: Object(O.e)({ title: { id: "user_tpl_regulation", defaultMessage: "Regulation" } }), href: S.Lc.REGULATION }),
                                                    m.a.createElement(T, { className: "com-footer-bottom__link", trans: Object(O.e)({ title: { id: "site_law_info", defaultMessage: "Legal information" } }), href: S.Lc.TERMS })
                                                )
                                            )
                                        )
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(m.a.Component);
        },
        KK5y: function (e, t, n) {},
        KP5q: function (e, t, n) {},
        "Kz8+": function (e, t, n) {
            var r = n("Bsg+"),
                o = n("zIP/").onFreeze;
            n("gRlk")("freeze", function (e) {
                return function (t) {
                    return e && r(t) ? e(o(t)) : t;
                };
            });
        },
        L7zD: function (e, t) {
            function n(e) {
                (this.options = e), !e.deferSetup && this.setup();
            }
            (n.prototype = {
                constructor: n,
                setup: function () {
                    this.options.setup && this.options.setup(), (this.initialised = !0);
                },
                on: function () {
                    !this.initialised && this.setup(), this.options.match && this.options.match();
                },
                off: function () {
                    this.options.unmatch && this.options.unmatch();
                },
                destroy: function () {
                    this.options.destroy ? this.options.destroy() : this.off();
                },
                equals: function (e) {
                    return this.options === e || this.options.match === e;
                },
            }),
                (e.exports = n);
        },
        LXYL: function (e, t, n) {
            var r = n("X6VK"),
                o = n("Vx+c"),
                i = n("b8Rm"),
                a = n("PAFS"),
                c = n("Bsg+"),
                s = n("E7Vc"),
                u = n("oAuq"),
                l = (n("P56o").Reflect || {}).construct,
                f = s(function () {
                    function e() {}
                    return !(l(function () {}, [], e) instanceof e);
                }),
                d = !s(function () {
                    l(function () {});
                });
            r(r.S + r.F * (f || d), "Reflect", {
                construct: function (e, t) {
                    i(e), a(t);
                    var n = arguments.length < 3 ? e : i(arguments[2]);
                    if (d && !f) return l(e, t, n);
                    if (e == n) {
                        switch (t.length) {
                            case 0:
                                return new e();
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3]);
                        }
                        var r = [null];
                        return r.push.apply(r, t), new (u.apply(e, r))();
                    }
                    var s = n.prototype,
                        p = o(c(s) ? s : Object.prototype),
                        m = Function.apply.call(e, p, t);
                    return c(m) ? m : p;
                },
            });
        },
        LuBU: function (e, t, n) {
            var r = n("at5L"),
                o = n("fQty");
            e.exports =
                Object.keys ||
                function (e) {
                    return r(e, o);
                };
        },
        LuSm: function (e, t, n) {
            n("b01t")(
                "Uint8",
                1,
                function (e) {
                    return function (t, n, r) {
                        return e(this, t, n, r);
                    };
                },
                !0
            );
        },
        MBcE: function (e, t, n) {
            "use strict";
            var r = n("PAFS");
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
            };
        },
        "N6/Q": function (e, t, n) {
            "use strict";
            var r = n("lAKj");
            n("X6VK")({ target: "RegExp", proto: !0, forced: r !== /./.exec }, { exec: r });
        },
        NJiK: function (e, t, n) {},
        NR3o: function (e, t, n) {
            "use strict";
            var r = n("GGqZ"),
                o = n("LuBU"),
                i = n("0oPD"),
                a = n("IdFN"),
                c = n("UnHL"),
                s = n("Cmsx"),
                u = Object.assign;
            e.exports =
                !u ||
                n("E7Vc")(function () {
                    var e = {},
                        t = {},
                        n = Symbol(),
                        r = "abcdefghijklmnopqrst";
                    return (
                        (e[n] = 7),
                        r.split("").forEach(function (e) {
                            t[e] = e;
                        }),
                        7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
                    );
                })
                    ? function (e, t) {
                          for (var n = c(e), u = arguments.length, l = 1, f = i.f, d = a.f; u > l; )
                              for (var p, m = s(arguments[l++]), h = f ? o(m).concat(f(m)) : o(m), v = h.length, g = 0; v > g; ) (p = h[g++]), (r && !d.call(m, p)) || (n[p] = m[p]);
                          return n;
                      }
                    : u;
        },
        NS33: function (e, t, n) {
            "use strict";
            var r = n("E02R");
            function o() {}
            function i() {}
            (i.resetWarningCache = o),
                (e.exports = function () {
                    function e(e, t, n, o, i, a) {
                        if (a !== r) {
                            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw ((c.name = "Invariant Violation"), c);
                        }
                    }
                    function t() {
                        return e;
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: i,
                        resetWarningCache: o,
                    };
                    return (n.PropTypes = n), n;
                });
        },
        NToG: function (e, t) {
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            e.exports = function (e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e;
            };
        },
        "NVL/": function (e, t, n) {
            var r = n("Bsg+"),
                o = n("n+VH"),
                i = n("9dxi")("match");
            e.exports = function (e) {
                var t;
                return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e));
            };
        },
        NWgQ: function (e, t, n) {
            "use strict";
            const r = n("X7EK"),
                o = n("5+rW"),
                i = n("vetT");
            function a(e) {
                if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string");
            }
            function c(e, t) {
                return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
            }
            function s(e, t) {
                return t.decode ? o(e) : e;
            }
            function u(e) {
                const t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e;
            }
            function l(e) {
                const t = (e = u(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1);
            }
            function f(e, t) {
                return (
                    t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim()
                        ? (e = Number(e))
                        : !t.parseBooleans || null === e || ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) || (e = "true" === e.toLowerCase()),
                    e
                );
            }
            function d(e, t) {
                a((t = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, t)).arrayFormatSeparator);
                const n = (function (e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, n, r) => {
                                    (t = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, "")), t ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n)) : (r[e] = n);
                                };
                            case "bracket":
                                return (e, n, r) => {
                                    (t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, "")), t ? (void 0 !== r[e] ? (r[e] = [].concat(r[e], n)) : (r[e] = [n])) : (r[e] = n);
                                };
                            case "comma":
                            case "separator":
                                return (t, n, r) => {
                                    const o = "string" == typeof n && n.split("").indexOf(e.arrayFormatSeparator) > -1 ? n.split(e.arrayFormatSeparator).map((t) => s(t, e)) : null === n ? n : s(n, e);
                                    r[t] = o;
                                };
                            default:
                                return (e, t, n) => {
                                    void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                                };
                        }
                    })(t),
                    r = Object.create(null);
                if ("string" != typeof e) return r;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
                for (const o of e.split("&")) {
                    let [e, a] = i(t.decode ? o.replace(/\+/g, " ") : o, "=");
                    (a = void 0 === a ? null : ["comma", "separator"].includes(t.arrayFormat) ? a : s(a, t)), n(s(e, t), a, r);
                }
                for (const e of Object.keys(r)) {
                    const n = r[e];
                    if ("object" == typeof n && null !== n) for (const e of Object.keys(n)) n[e] = f(n[e], t);
                    else r[e] = f(n, t);
                }
                return !1 === t.sort
                    ? r
                    : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
                          const n = r[t];
                          return (
                              Boolean(n) && "object" == typeof n && !Array.isArray(n)
                                  ? (e[t] = (function e(t) {
                                        return Array.isArray(t)
                                            ? t.sort()
                                            : "object" == typeof t
                                            ? e(Object.keys(t))
                                                  .sort((e, t) => Number(e) - Number(t))
                                                  .map((e) => t[e])
                                            : t;
                                    })(n))
                                  : (e[t] = n),
                              e
                          );
                      }, Object.create(null));
            }
            (t.extract = l),
                (t.parse = d),
                (t.stringify = (e, t) => {
                    if (!e) return "";
                    a((t = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, t)).arrayFormatSeparator);
                    const n = (n) => (t.skipNull && ((e) => null === e || void 0 === e)(e[n])) || (t.skipEmptyString && "" === e[n]),
                        r = (function (e) {
                            switch (e.arrayFormat) {
                                case "index":
                                    return (t) => (n, r) => {
                                        const o = n.length;
                                        return void 0 === r || (e.skipNull && null === r) || (e.skipEmptyString && "" === r)
                                            ? n
                                            : null === r
                                            ? [...n, [c(t, e), "[", o, "]"].join("")]
                                            : [...n, [c(t, e), "[", c(o, e), "]=", c(r, e)].join("")];
                                    };
                                case "bracket":
                                    return (t) => (n, r) => (void 0 === r || (e.skipNull && null === r) || (e.skipEmptyString && "" === r) ? n : null === r ? [...n, [c(t, e), "[]"].join("")] : [...n, [c(t, e), "[]=", c(r, e)].join("")]);
                                case "comma":
                                case "separator":
                                    return (t) => (n, r) => (null === r || void 0 === r || 0 === r.length ? n : 0 === n.length ? [[c(t, e), "=", c(r, e)].join("")] : [[n, c(r, e)].join(e.arrayFormatSeparator)]);
                                default:
                                    return (t) => (n, r) => (void 0 === r || (e.skipNull && null === r) || (e.skipEmptyString && "" === r) ? n : null === r ? [...n, c(t, e)] : [...n, [c(t, e), "=", c(r, e)].join("")]);
                            }
                        })(t),
                        o = {};
                    for (const t of Object.keys(e)) n(t) || (o[t] = e[t]);
                    const i = Object.keys(o);
                    return (
                        !1 !== t.sort && i.sort(t.sort),
                        i
                            .map((n) => {
                                const o = e[n];
                                return void 0 === o ? "" : null === o ? c(n, t) : Array.isArray(o) ? o.reduce(r(n), []).join("&") : c(n, t) + "=" + c(o, t);
                            })
                            .filter((e) => e.length > 0)
                            .join("&")
                    );
                }),
                (t.parseUrl = (e, t) => ({ url: u(e).split("?")[0] || "", query: d(l(e), t) })),
                (t.stringifyUrl = (e, n) => {
                    const r = u(e.url).split("?")[0] || "",
                        o = t.extract(e.url),
                        i = t.parse(o),
                        a = (function (e) {
                            let t = "";
                            const n = e.indexOf("#");
                            return -1 !== n && (t = e.slice(n)), t;
                        })(e.url),
                        c = Object.assign(i, e.query);
                    let s = t.stringify(c, n);
                    return s && (s = `?${s}`), `${r}${s}${a}`;
                });
        },
        NhxO: function (e, t, n) {
            var r = n("X6VK");
            r(r.P, "String", { repeat: n("p1Jl") });
        },
        NthX: function (e, t, n) {
            e.exports = n("wcNg");
        },
        Nu7b: function (e, t) {
            e.exports =
                Object.is ||
                function (e, t) {
                    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
                };
        },
        OFVL: function (e, t, n) {
            var r = n("n+VH"),
                o = n("9dxi")("toStringTag"),
                i =
                    "Arguments" ==
                    r(
                        (function () {
                            return arguments;
                        })()
                    );
            e.exports = function (e) {
                var t, n, a;
                return void 0 === e
                    ? "Undefined"
                    : null === e
                    ? "Null"
                    : "string" ==
                      typeof (n = (function (e, t) {
                          try {
                              return e[t];
                          } catch (e) {}
                      })((t = Object(e)), o))
                    ? n
                    : i
                    ? r(t)
                    : "Object" == (a = r(t)) && "function" == typeof t.callee
                    ? "Arguments"
                    : a;
            };
        },
        OHXD: function (e, t, n) {
            "use strict";
            var r = n("tImM");
            function o(e) {
                if ("function" != typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise(function (e) {
                    t = e;
                });
                var n = this;
                e(function (e) {
                    n.reason || ((n.reason = new r(e)), t(n.reason));
                });
            }
            (o.prototype.throwIfRequested = function () {
                if (this.reason) throw this.reason;
            }),
                (o.source = function () {
                    var e;
                    return {
                        token: new o(function (t) {
                            e = t;
                        }),
                        cancel: e,
                    };
                }),
                (e.exports = o);
        },
        OfmW: function (e, t, n) {
            var r = n("9dxi")("unscopables"),
                o = Array.prototype;
            void 0 == o[r] && n("tjmq")(o, r, {}),
                (e.exports = function (e) {
                    o[r][e] = !0;
                });
        },
        OlDy: function (e, t, n) {
            var r = n("X6VK"),
                o = n("/69c");
            r(r.S, "Math", {
                cbrt: function (e) {
                    return o((e = +e)) * Math.pow(Math.abs(e), 1 / 3);
                },
            });
        },
        OmE2: function (e, t, n) {
            "use strict";
            e.exports = function (e, t, n, r, o) {
                return (
                    (e.config = t),
                    n && (e.code = n),
                    (e.request = r),
                    (e.response = o),
                    (e.isAxiosError = !0),
                    (e.toJSON = function () {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: this.config,
                            code: this.code,
                        };
                    }),
                    e
                );
            };
        },
        OvAC: function (e, t) {
            e.exports = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            };
        },
        P56o: function (e, t) {
            var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
            "number" == typeof __g && (__g = n);
        },
        PAFS: function (e, t, n) {
            var r = n("Bsg+");
            e.exports = function (e) {
                if (!r(e)) throw TypeError(e + " is not an object!");
                return e;
            };
        },
        PE9J: function (e, t) {
            e.exports = function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
            };
        },
        PJhk: function (e, t, n) {
            var r = n("Bsg+");
            n("gRlk")("isExtensible", function (e) {
                return function (t) {
                    return !!r(t) && (!e || e(t));
                };
            });
        },
        Pfmf: function (e, t, n) {
            "use strict";
            var r = n("UnHL"),
                o = n("BUlT"),
                i = n("Sp5b");
            e.exports = function (e) {
                for (var t = r(this), n = i(t.length), a = arguments.length, c = o(a > 1 ? arguments[1] : void 0, n), s = a > 2 ? arguments[2] : void 0, u = void 0 === s ? n : o(s, n); u > c; ) t[c++] = e;
                return t;
            };
        },
        Prms: function (e, t, n) {},
        PxHS: function (e, t, n) {
            n("b01t")("Float64", 8, function (e) {
                return function (t, n, r) {
                    return e(this, t, n, r);
                };
            });
        },
        "Q/xc": function (e, t, n) {
            n("b01t")("Int16", 2, function (e) {
                return function (t, n, r) {
                    return e(this, t, n, r);
                };
            });
        },
        Q8pe: function (e, t, n) {
            "use strict";
            var r = n("NthX"),
                o = n.n(r),
                i = n("fFdx"),
                a = n.n(i),
                c = n("SDJZ"),
                s = n.n(c),
                u = n("NToG"),
                l = n.n(u),
                f = n("czhI"),
                d = n.n(f),
                p = n("tyvn"),
                m = n("deTv"),
                h = n("6eLe"),
                v = n("CBb8"),
                g = n("olOL"),
                _ = (window._globalsConfig && window._globalsConfig.locale) || p.X,
                y = (function () {
                    function e() {
                        s()(this, e);
                    }
                    return (
                        l()(e, [
                            {
                                key: "load",
                                value: (function () {
                                    var e = a()(
                                        o.a.mark(function e() {
                                            var t,
                                                n,
                                                r = this,
                                                i = arguments;
                                            return o.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (((t = i.length > 0 && void 0 !== i[0] ? i[0] : { isForceLoad: !1 }), this.requestPromise && !t.isForceLoad)) {
                                                                    e.next = 10;
                                                                    break;
                                                                }
                                                                if (((this.locale = t.locale || _), window[h.j])) {
                                                                    e.next = 8;
                                                                    break;
                                                                }
                                                                return (
                                                                    (this.messages = {}),
                                                                    m.g.updateMessages(this.locale, this.messages),
                                                                    g.c.sendEvent(new Error("translations list file not loaded"), g.a.ERROR, "BT9to70e"),
                                                                    e.abrupt("return", Promise.resolve(this.messages))
                                                                );
                                                            case 8:
                                                                (n = window[h.j]()[this.locale]),
                                                                    (this.requestPromise = d.a
                                                                        .request({ url: "".concat(v.c).concat(h.k).concat(n) })
                                                                        .then(function (e) {
                                                                            var t = e.data;
                                                                            return (r.messages = t), m.g.updateMessages(r.locale, t), t;
                                                                        })
                                                                        .catch(function (e) {
                                                                            (r.messages = {}), m.g.updateMessages(r.locale, r.messages), g.c.sendEvent(e, g.a.ERROR, "W2JQyQ6U");
                                                                        }));
                                                            case 10:
                                                                return e.abrupt("return", this.requestPromise);
                                                            case 11:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getCurrentLocale",
                                value: function () {
                                    return this.locale;
                                },
                            },
                        ]),
                        e
                    );
                })();
            t.a = new y();
        },
        QKC2: function (e, t) {
            e.exports = function (e, t) {
                (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
            };
        },
        Qatm: function (e, t) {
            e.exports = function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
            };
        },
        "QiL/": function (e, t, n) {
            n("b01t")("Uint32", 4, function (e) {
                return function (t, n, r) {
                    return e(this, t, n, r);
                };
            });
        },
        Qno1: function (e, t, n) {
            var r = n("Bsg+"),
                o = n("Xfku"),
                i = n("9dxi")("species");
            e.exports = function (e) {
                var t;
                return o(e) && ("function" != typeof (t = e.constructor) || (t !== Array && !o(t.prototype)) || (t = void 0), r(t) && null === (t = t[i]) && (t = void 0)), void 0 === t ? Array : t;
            };
        },
        R5TD: function (e, t) {
            var n = (e.exports = { version: "2.6.11" });
            "number" == typeof __e && (__e = n);
        },
        RCps: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Math", { log1p: n("CbkB") });
        },
        ROCd: function (e, t, n) {
            var r = n("P56o").navigator;
            e.exports = (r && r.userAgent) || "";
        },
        RiSW: function (e, t, n) {
            var r = n("PE9J");
            e.exports = function (e, t) {
                if (null == e) return {};
                var n,
                    o,
                    i = r(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            };
        },
        Rzld: function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
            };
        },
        S411: function (e, t) {
            e.exports = function (e, t) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (o = !0), (i = e);
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                    return n;
                }
            };
        },
        SDJZ: function (e, t) {
            e.exports = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            };
        },
        SRyi: function (e, t, n) {},
        SeNM: function (e, t, n) {
            var r = n("P56o").parseInt,
                o = n("hGr/").trim,
                i = n("SvMv"),
                a = /^[-+]?0[xX]/;
            e.exports =
                8 !== r(i + "08") || 22 !== r(i + "0x16")
                    ? function (e, t) {
                          var n = o(String(e), 3);
                          return r(n, t >>> 0 || (a.test(n) ? 16 : 10));
                      }
                    : r;
        },
        Sp5b: function (e, t, n) {
            var r = n("mvii"),
                o = Math.min;
            e.exports = function (e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0;
            };
        },
        SsG5: function (e, t, n) {
            var r = n("Bsg+");
            e.exports = function (e, t) {
                if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
                return e;
            };
        },
        SvMv: function (e, t) {
            e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
        },
        T1e2: function (e, t) {
            e.exports = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            };
        },
        TDIH: function (e, t, n) {
            "use strict";
            var r = n("ovh1"),
                o = n("5QbJ"),
                i = n("uahg"),
                a = n("Zrjs");
            function c(e) {
                var t = new i(e),
                    n = o(i.prototype.request, t);
                return r.extend(n, i.prototype, t), r.extend(n, t), n;
            }
            var s = c(n("bRtl"));
            (s.Axios = i),
                (s.create = function (e) {
                    return c(a(s.defaults, e));
                }),
                (s.Cancel = n("tImM")),
                (s.CancelToken = n("OHXD")),
                (s.isCancel = n("e5jZ")),
                (s.all = function (e) {
                    return Promise.all(e);
                }),
                (s.spread = n("6s8r")),
                (e.exports = s),
                (e.exports.default = s);
        },
        U1KF: function (e, t, n) {
            var r = n("PAFS"),
                o = n("HWsP"),
                i = n("5MU4"),
                a = Object.defineProperty;
            t.f = n("GGqZ")
                ? Object.defineProperty
                : function (e, t, n) {
                      if ((r(e), (t = i(t, !0)), r(n), o))
                          try {
                              return a(e, t, n);
                          } catch (e) {}
                      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                      return "value" in n && (e[t] = n.value), e;
                  };
        },
        U4kB: function (e, t, n) {},
        U8p0: function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("b8Rm"),
                i = n("UnHL"),
                a = n("E7Vc"),
                c = [].sort,
                s = [1, 2, 3];
            r(
                r.P +
                    r.F *
                        (a(function () {
                            s.sort(void 0);
                        }) ||
                            !a(function () {
                                s.sort(null);
                            }) ||
                            !n("/6rt")(c)),
                "Array",
                {
                    sort: function (e) {
                        return void 0 === e ? c.call(i(this)) : c.call(i(this), o(e));
                    },
                }
            );
        },
        UCF5: function (e, t, n) {
            "use strict";
            var r = n("mXGw"),
                o = n.n(r);
            t.a = function (e) {
                return o.a.createElement("a", { href: e.href, className: "main-menu__logo ".concat(e.className) }, "Olymp Trade");
            };
        },
        UOCr: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return i;
            }),
                n.d(t, "b", function () {
                    return a;
                });
            var r = n("v32R"),
                o = n("6eLe");
            function i(e) {
                return Promise.all([r.a.post("/user/set-session", { data: { locale: e }, version: "v3", project: o.b })]);
            }
            var a = function () {
                return r.a.post("cabinet/payment-systems", { version: "v1", project: o.b });
            };
        },
        UYBO: function (e, t) {
            e.exports = function (e) {
                if (!e.webpackPolyfill) {
                    var t = Object.create(e);
                    t.children || (t.children = []),
                        Object.defineProperty(t, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return t.l;
                            },
                        }),
                        Object.defineProperty(t, "id", {
                            enumerable: !0,
                            get: function () {
                                return t.i;
                            },
                        }),
                        Object.defineProperty(t, "exports", { enumerable: !0 }),
                        (t.webpackPolyfill = 1);
                }
                return t;
            };
        },
        UYXy: function (e, t, n) {
            var r = n("ml72"),
                o = n("zIds").f,
                i = {}.toString,
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function (e) {
                return a && "[object Window]" == i.call(e)
                    ? (function (e) {
                          try {
                              return o(e);
                          } catch (e) {
                              return a.slice();
                          }
                      })(e)
                    : o(r(e));
            };
        },
        UdKW: function (e, t, n) {
            "use strict";
            var r, o, i, a, c;
            if ((Object.defineProperty(t, "__esModule", { value: !0 }), "undefined" == typeof window || "function" != typeof MessageChannel)) {
                var s = null,
                    u = null,
                    l = function () {
                        if (null !== s)
                            try {
                                var e = t.unstable_now();
                                s(!0, e), (s = null);
                            } catch (e) {
                                throw (setTimeout(l, 0), e);
                            }
                    },
                    f = Date.now();
                (t.unstable_now = function () {
                    return Date.now() - f;
                }),
                    (r = function (e) {
                        null !== s ? setTimeout(r, 0, e) : ((s = e), setTimeout(l, 0));
                    }),
                    (o = function (e, t) {
                        u = setTimeout(e, t);
                    }),
                    (i = function () {
                        clearTimeout(u);
                    }),
                    (a = function () {
                        return !1;
                    }),
                    (c = t.unstable_forceFrameRate = function () {});
            } else {
                var d = window.performance,
                    p = window.Date,
                    m = window.setTimeout,
                    h = window.clearTimeout;
                if ("undefined" != typeof console) {
                    window.cancelAnimationFrame;
                    window.requestAnimationFrame;
                }
                if ("object" == typeof d && "function" == typeof d.now)
                    t.unstable_now = function () {
                        return d.now();
                    };
                else {
                    var v = p.now();
                    t.unstable_now = function () {
                        return p.now() - v;
                    };
                }
                var g = !1,
                    _ = null,
                    y = -1,
                    E = 5,
                    b = 0;
                (a = function () {
                    return t.unstable_now() >= b;
                }),
                    (c = function () {}),
                    (t.unstable_forceFrameRate = function (e) {
                        0 > e || 125 < e || (E = 0 < e ? Math.floor(1e3 / e) : 5);
                    });
                var w = new MessageChannel(),
                    S = w.port2;
                (w.port1.onmessage = function () {
                    if (null !== _) {
                        var e = t.unstable_now();
                        b = e + E;
                        try {
                            _(!0, e) ? S.postMessage(null) : ((g = !1), (_ = null));
                        } catch (e) {
                            throw (S.postMessage(null), e);
                        }
                    } else g = !1;
                }),
                    (r = function (e) {
                        (_ = e), g || ((g = !0), S.postMessage(null));
                    }),
                    (o = function (e, n) {
                        y = m(function () {
                            e(t.unstable_now());
                        }, n);
                    }),
                    (i = function () {
                        h(y), (y = -1);
                    });
            }
            function O(e, t) {
                var n = e.length;
                e.push(t);
                e: for (;;) {
                    var r = Math.floor((n - 1) / 2),
                        o = e[r];
                    if (!(void 0 !== o && 0 < R(o, t))) break e;
                    (e[r] = t), (e[n] = o), (n = r);
                }
            }
            function A(e) {
                return void 0 === (e = e[0]) ? null : e;
            }
            function T(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, o = e.length; r < o; ) {
                            var i = 2 * (r + 1) - 1,
                                a = e[i],
                                c = i + 1,
                                s = e[c];
                            if (void 0 !== a && 0 > R(a, n)) void 0 !== s && 0 > R(s, a) ? ((e[r] = s), (e[c] = n), (r = c)) : ((e[r] = a), (e[i] = n), (r = i));
                            else {
                                if (!(void 0 !== s && 0 > R(s, n))) break e;
                                (e[r] = s), (e[c] = n), (r = c);
                            }
                        }
                    }
                    return t;
                }
                return null;
            }
            function R(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id;
            }
            var N = [],
                I = [],
                C = 1,
                x = null,
                k = 3,
                P = !1,
                j = !1,
                L = !1;
            function M(e) {
                for (var t = A(I); null !== t; ) {
                    if (null === t.callback) T(I);
                    else {
                        if (!(t.startTime <= e)) break;
                        T(I), (t.sortIndex = t.expirationTime), O(N, t);
                    }
                    t = A(I);
                }
            }
            function D(e) {
                if (((L = !1), M(e), !j))
                    if (null !== A(N)) (j = !0), r(F);
                    else {
                        var t = A(I);
                        null !== t && o(D, t.startTime - e);
                    }
            }
            function F(e, n) {
                (j = !1), L && ((L = !1), i()), (P = !0);
                var r = k;
                try {
                    for (M(n), x = A(N); null !== x && (!(x.expirationTime > n) || (e && !a())); ) {
                        var c = x.callback;
                        if (null !== c) {
                            (x.callback = null), (k = x.priorityLevel);
                            var s = c(x.expirationTime <= n);
                            (n = t.unstable_now()), "function" == typeof s ? (x.callback = s) : x === A(N) && T(N), M(n);
                        } else T(N);
                        x = A(N);
                    }
                    if (null !== x) var u = !0;
                    else {
                        var l = A(I);
                        null !== l && o(D, l.startTime - n), (u = !1);
                    }
                    return u;
                } finally {
                    (x = null), (k = r), (P = !1);
                }
            }
            function V(e) {
                switch (e) {
                    case 1:
                        return -1;
                    case 2:
                        return 250;
                    case 5:
                        return 1073741823;
                    case 4:
                        return 1e4;
                    default:
                        return 5e3;
                }
            }
            var B = c;
            (t.unstable_ImmediatePriority = 1),
                (t.unstable_UserBlockingPriority = 2),
                (t.unstable_NormalPriority = 3),
                (t.unstable_IdlePriority = 5),
                (t.unstable_LowPriority = 4),
                (t.unstable_runWithPriority = function (e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3;
                    }
                    var n = k;
                    k = e;
                    try {
                        return t();
                    } finally {
                        k = n;
                    }
                }),
                (t.unstable_next = function (e) {
                    switch (k) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = k;
                    }
                    var n = k;
                    k = t;
                    try {
                        return e();
                    } finally {
                        k = n;
                    }
                }),
                (t.unstable_scheduleCallback = function (e, n, a) {
                    var c = t.unstable_now();
                    if ("object" == typeof a && null !== a) {
                        var s = a.delay;
                        (s = "number" == typeof s && 0 < s ? c + s : c), (a = "number" == typeof a.timeout ? a.timeout : V(e));
                    } else (a = V(e)), (s = c);
                    return (
                        (e = { id: C++, callback: n, priorityLevel: e, startTime: s, expirationTime: (a = s + a), sortIndex: -1 }),
                        s > c ? ((e.sortIndex = s), O(I, e), null === A(N) && e === A(I) && (L ? i() : (L = !0), o(D, s - c))) : ((e.sortIndex = a), O(N, e), j || P || ((j = !0), r(F))),
                        e
                    );
                }),
                (t.unstable_cancelCallback = function (e) {
                    e.callback = null;
                }),
                (t.unstable_wrapCallback = function (e) {
                    var t = k;
                    return function () {
                        var n = k;
                        k = t;
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            k = n;
                        }
                    };
                }),
                (t.unstable_getCurrentPriorityLevel = function () {
                    return k;
                }),
                (t.unstable_shouldYield = function () {
                    var e = t.unstable_now();
                    M(e);
                    var n = A(N);
                    return (n !== x && null !== x && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < x.expirationTime) || a();
                }),
                (t.unstable_requestPaint = B),
                (t.unstable_continueExecution = function () {
                    j || P || ((j = !0), r(F));
                }),
                (t.unstable_pauseExecution = function () {}),
                (t.unstable_getFirstCallbackNode = function () {
                    return A(N);
                }),
                (t.unstable_Profiling = null);
        },
        UnHL: function (e, t, n) {
            var r = n("GCOZ");
            e.exports = function (e) {
                return Object(r(e));
            };
        },
        UvPz: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return c;
            }),
                n.d(t, "c", function () {
                    return s;
                }),
                n.d(t, "b", function () {
                    return u;
                }),
                n.d(t, "d", function () {
                    return l;
                });
            var r = n("OvAC"),
                o = n.n(r);
            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? i(Object(n), !0).forEach(function (t) {
                              o()(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : i(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var c = Object.freeze({
                    CAPTCHA_REQUIREMENTS: "captcha_requirements",
                    CLIENT_APPS: "client_apps",
                    COUNTRY_DATA: "country_data",
                    CURRENT_LOCALE: "current_locale",
                    DENIED_OPERATIONS: "denied_operations",
                    LOCALES: "locales",
                    MAGIC_HOUR: "magic_hour",
                    PROJECTS: "projects",
                    REG_ALLOW: "reg_allow",
                    REG_CURRENCIES: "reg_currencies",
                    SERVER_TIME: "server_time",
                    SUPPORT_CHAT: "support_chat",
                    SUPPORT_PHONES: "support_phones",
                    TMX: "tmx",
                }),
                s = Object.freeze({
                    ACCOUNTS: "accounts",
                    ANALYTICS: "analytics",
                    AVATAR: "avatar",
                    BALANCE: "balance",
                    BONUSES: "bonuses",
                    DATA: "data",
                    DUO_AUTH_STATE: "duo_auth_state",
                    HAS_KYC_APPLICANT: "has_kyc_applicant",
                    IS_KYC_AVAILABLE: "is_kyc_available",
                    JIVO_SETTINGS: "jivo_settings",
                    KYC: "kyc",
                    MONEY_GROUP: "money_group",
                    PAYMENT_SYSTEMS: "payment_systems",
                    POLITICS: "politics",
                    PROMO: "promo",
                    SERVICE_LEVELS: "service_levels",
                    SESSION: "session",
                    STOCKSUP: "stocksup",
                    SUCCESSFUL_PAYMENT_COUNT: "successful_payment_count",
                    VIP_STATUS_AMOUNT: "vip_status_amount",
                    VOTE: "vote",
                    SOUND_PACKS: "sound_packs",
                    STORIES: "stories",
                }),
                u = Object.freeze(a({}, s, { DEALS: "deals", OPTIONS: "options", PAIRS: "pairs", PAIRS_AVAILABLE: "pairs_available", RISK_FREE_DEALS: "risk_free_deals" })),
                l = Object.freeze(a({}, s, { DEALS: "deals", PAIRS: "pairs", PAIRS_AVAILABLE: "pairs_available" }));
        },
        VEBk: function (e, t, n) {
            e.exports = n.p + "../images/home_features_bike.0269e373.jpg";
        },
        VFsX: function (e, t, n) {
            e.exports = n.p + "../images/awards_5.a3c952ca.jpg";
        },
        VVFi: function (e, t) {
            e.exports = function (e, t) {
                return { value: t, done: !!e };
            };
        },
        VWwk: function (e, t, n) {
            var r = n("X6VK"),
                o = Math.exp;
            r(r.S, "Math", {
                cosh: function (e) {
                    return (o((e = +e)) + o(-e)) / 2;
                },
            });
        },
        "Vx+c": function (e, t, n) {
            var r = n("PAFS"),
                o = n("pU1/"),
                i = n("fQty"),
                a = n("8kJd")("IE_PROTO"),
                c = function () {},
                s = function () {
                    var e,
                        t = n("mggL")("iframe"),
                        r = i.length;
                    for (t.style.display = "none", n("CLuC").appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object</script>"), e.close(), s = e.F; r--; ) delete s.prototype[i[r]];
                    return s();
                };
            e.exports =
                Object.create ||
                function (e, t) {
                    var n;
                    return null !== e ? ((c.prototype = r(e)), (n = new c()), (c.prototype = null), (n[a] = e)) : (n = s()), void 0 === t ? n : o(n, t);
                };
        },
        W0B4: function (e, t, n) {
            e.exports = n("NS33")();
        },
        W0iW: function (e, t, n) {
            e.exports = n.p + "../images/home_img_mobile@2x.8fdb3aec.png";
        },
        W1QL: function (e, t, n) {
            for (
                var r = n("K/PF"),
                    o = n("LuBU"),
                    i = n("sU/p"),
                    a = n("P56o"),
                    c = n("tjmq"),
                    s = n("Ibj2"),
                    u = n("9dxi"),
                    l = u("iterator"),
                    f = u("toStringTag"),
                    d = s.Array,
                    p = {
                        CSSRuleList: !0,
                        CSSStyleDeclaration: !1,
                        CSSValueList: !1,
                        ClientRectList: !1,
                        DOMRectList: !1,
                        DOMStringList: !1,
                        DOMTokenList: !0,
                        DataTransferItemList: !1,
                        FileList: !1,
                        HTMLAllCollection: !1,
                        HTMLCollection: !1,
                        HTMLFormElement: !1,
                        HTMLSelectElement: !1,
                        MediaList: !0,
                        MimeTypeArray: !1,
                        NamedNodeMap: !1,
                        NodeList: !0,
                        PaintRequestList: !1,
                        Plugin: !1,
                        PluginArray: !1,
                        SVGLengthList: !1,
                        SVGNumberList: !1,
                        SVGPathSegList: !1,
                        SVGPointList: !1,
                        SVGStringList: !1,
                        SVGTransformList: !1,
                        SourceBufferList: !1,
                        StyleSheetList: !0,
                        TextTrackCueList: !1,
                        TextTrackList: !1,
                        TouchList: !1,
                    },
                    m = o(p),
                    h = 0;
                h < m.length;
                h++
            ) {
                var v,
                    g = m[h],
                    _ = p[g],
                    y = a[g],
                    E = y && y.prototype;
                if (E && (E[l] || c(E, l, d), E[f] || c(E, f, g), (s[g] = d), _)) for (v in r) E[v] || i(E, v, r[v], !0);
            }
        },
        WFSn: function (e, t, n) {
            "use strict";
            var r = n("NthX"),
                o = n.n(r),
                i = n("fFdx"),
                a = n.n(i),
                c = "/sw.js",
                s = n("olOL");
            function u() {
                return l.apply(this, arguments);
            }
            function l() {
                return (l = a()(
                    o.a.mark(function e() {
                        var t;
                        return o.a.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.prev = 0), (e.next = 3), window.navigator.serviceWorker.register(c);
                                        case 3:
                                            (t = e.sent), t.scope, (e.next = 11);
                                            break;
                                        case 8:
                                            (e.prev = 8), (e.t0 = e.catch(0)), s.c.sendEvent(e.t0, s.a.ERROR, "ServiceWorker registration failed");
                                        case 11:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[0, 8]]
                        );
                    })
                )).apply(this, arguments);
            }
            t.a = function () {
                "serviceWorker" in navigator && window.addEventListener("load", u);
            };
        },
        WI9V: function (e, t) {
            function n(t, r) {
                return (
                    (e.exports = n =
                        Object.setPrototypeOf ||
                        function (e, t) {
                            return (e.__proto__ = t), e;
                        }),
                    n(t, r)
                );
            }
            e.exports = n;
        },
        WWmS: function (e, t) {
            e.exports = function (e, t) {
                return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
            };
        },
        WaGN: function (e, t, n) {
            "use strict";
            var r = function () {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) r[o] = i[a];
                return r;
            };
            function o(e) {
                return JSON.stringify(
                    e.map(function (e) {
                        return e && "object" == typeof e
                            ? ((t = e),
                              Object.keys(t)
                                  .sort()
                                  .map(function (e) {
                                      var n;
                                      return ((n = {})[e] = t[e]), n;
                                  }))
                            : e;
                        var t;
                    })
                );
            }
            t.a = function (e, t) {
                return (
                    void 0 === t && (t = {}),
                    function () {
                        for (var n, i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
                        var c = o(i),
                            s = c && t[c];
                        return s || ((s = new ((n = e).bind.apply(n, r([void 0], i)))()), c && (t[c] = s)), s;
                    }
                );
            };
        },
        Wifh: function (e, t, n) {
            "use strict";
            n("N6/Q");
            var r = n("sU/p"),
                o = n("tjmq"),
                i = n("E7Vc"),
                a = n("GCOZ"),
                c = n("9dxi"),
                s = n("lAKj"),
                u = c("species"),
                l = !i(function () {
                    var e = /./;
                    return (
                        (e.exec = function () {
                            var e = [];
                            return (e.groups = { a: "7" }), e;
                        }),
                        "7" !== "".replace(e, "$<a>")
                    );
                }),
                f = (function () {
                    var e = /(?:)/,
                        t = e.exec;
                    e.exec = function () {
                        return t.apply(this, arguments);
                    };
                    var n = "ab".split(e);
                    return 2 === n.length && "a" === n[0] && "b" === n[1];
                })();
            e.exports = function (e, t, n) {
                var d = c(e),
                    p = !i(function () {
                        var t = {};
                        return (
                            (t[d] = function () {
                                return 7;
                            }),
                            7 != ""[e](t)
                        );
                    }),
                    m = p
                        ? !i(function () {
                              var t = !1,
                                  n = /a/;
                              return (
                                  (n.exec = function () {
                                      return (t = !0), null;
                                  }),
                                  "split" === e &&
                                      ((n.constructor = {}),
                                      (n.constructor[u] = function () {
                                          return n;
                                      })),
                                  n[d](""),
                                  !t
                              );
                          })
                        : void 0;
                if (!p || !m || ("replace" === e && !l) || ("split" === e && !f)) {
                    var h = /./[d],
                        v = n(a, d, ""[e], function (e, t, n, r, o) {
                            return t.exec === s ? (p && !o ? { done: !0, value: h.call(t, n, r) } : { done: !0, value: e.call(n, t, r) }) : { done: !1 };
                        }),
                        g = v[0],
                        _ = v[1];
                    r(String.prototype, e, g),
                        o(
                            RegExp.prototype,
                            d,
                            2 == t
                                ? function (e, t) {
                                      return _.call(e, this, t);
                                  }
                                : function (e) {
                                      return _.call(e, this);
                                  }
                        );
                }
            };
        },
        Ww91: function (e, t, n) {
            "use strict";
            function r(e, t) {
                if ("undefined" == typeof Intl) return !1;
                if (!e) throw new Error("locales must be supplied.");
                Array.isArray(e) || (e = [e]);
                var n = t || [Intl.DateTimeFormat, Intl.NumberFormat, Intl.PluralRules];
                return (
                    !(0 === (n = n.filter(Boolean)).length || (t && n.length !== t.length)) &&
                    n.every(function (t) {
                        return t.supportedLocalesOf(e).length === e.length;
                    })
                );
            }
            n.d(t, "a", function () {
                return r;
            });
        },
        X6VK: function (e, t, n) {
            var r = n("P56o"),
                o = n("R5TD"),
                i = n("tjmq"),
                a = n("sU/p"),
                c = n("9liC"),
                s = function (e, t, n) {
                    var u,
                        l,
                        f,
                        d,
                        p = e & s.F,
                        m = e & s.G,
                        h = e & s.S,
                        v = e & s.P,
                        g = e & s.B,
                        _ = m ? r : h ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
                        y = m ? o : o[t] || (o[t] = {}),
                        E = y.prototype || (y.prototype = {});
                    for (u in (m && (n = t), n))
                        (f = ((l = !p && _ && void 0 !== _[u]) ? _ : n)[u]), (d = g && l ? c(f, r) : v && "function" == typeof f ? c(Function.call, f) : f), _ && a(_, u, f, e & s.U), y[u] != f && i(y, u, d), v && E[u] != f && (E[u] = f);
                };
            (r.core = o), (s.F = 1), (s.G = 2), (s.S = 4), (s.P = 8), (s.B = 16), (s.W = 32), (s.U = 64), (s.R = 128), (e.exports = s);
        },
        X7EK: function (e, t, n) {
            "use strict";
            e.exports = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
        },
        X9m5: function (e, t, n) {
            var r = n("1Tj+"),
                o = n("X6VK"),
                i = n("PAFS");
            o(o.S, "Reflect", {
                getOwnPropertyDescriptor: function (e, t) {
                    return r.f(i(e), t);
                },
            });
        },
        XDzM: function (e, t, n) {
            var r = n("P56o"),
                o = n("5BMI").set,
                i = r.MutationObserver || r.WebKitMutationObserver,
                a = r.process,
                c = r.Promise,
                s = "process" == n("n+VH")(a);
            e.exports = function () {
                var e,
                    t,
                    n,
                    u = function () {
                        var r, o;
                        for (s && (r = a.domain) && r.exit(); e; ) {
                            (o = e.fn), (e = e.next);
                            try {
                                o();
                            } catch (r) {
                                throw (e ? n() : (t = void 0), r);
                            }
                        }
                        (t = void 0), r && r.enter();
                    };
                if (s)
                    n = function () {
                        a.nextTick(u);
                    };
                else if (!i || (r.navigator && r.navigator.standalone))
                    if (c && c.resolve) {
                        var l = c.resolve(void 0);
                        n = function () {
                            l.then(u);
                        };
                    } else
                        n = function () {
                            o.call(r, u);
                        };
                else {
                    var f = !0,
                        d = document.createTextNode("");
                    new i(u).observe(d, { characterData: !0 }),
                        (n = function () {
                            d.data = f = !f;
                        });
                }
                return function (r) {
                    var o = { fn: r, next: void 0 };
                    t && (t.next = o), e || ((e = o), n()), (t = o);
                };
            };
        },
        XQta: function (e, t, n) {
            "use strict";
            var r = n("U1KF").f,
                o = n("Vx+c"),
                i = n("+edc"),
                a = n("9liC"),
                c = n("EusA"),
                s = n("HqX2"),
                u = n("Jww/"),
                l = n("VVFi"),
                f = n("E8p1"),
                d = n("GGqZ"),
                p = n("zIP/").fastKey,
                m = n("SsG5"),
                h = d ? "_s" : "size",
                v = function (e, t) {
                    var n,
                        r = p(t);
                    if ("F" !== r) return e._i[r];
                    for (n = e._f; n; n = n.n) if (n.k == t) return n;
                };
            e.exports = {
                getConstructor: function (e, t, n, u) {
                    var l = e(function (e, r) {
                        c(e, l, t, "_i"), (e._t = t), (e._i = o(null)), (e._f = void 0), (e._l = void 0), (e[h] = 0), void 0 != r && s(r, n, e[u], e);
                    });
                    return (
                        i(l.prototype, {
                            clear: function () {
                                for (var e = m(this, t), n = e._i, r = e._f; r; r = r.n) (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
                                (e._f = e._l = void 0), (e[h] = 0);
                            },
                            delete: function (e) {
                                var n = m(this, t),
                                    r = v(n, e);
                                if (r) {
                                    var o = r.n,
                                        i = r.p;
                                    delete n._i[r.i], (r.r = !0), i && (i.n = o), o && (o.p = i), n._f == r && (n._f = o), n._l == r && (n._l = i), n[h]--;
                                }
                                return !!r;
                            },
                            forEach: function (e) {
                                m(this, t);
                                for (var n, r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); (n = n ? n.n : this._f); ) for (r(n.v, n.k, this); n && n.r; ) n = n.p;
                            },
                            has: function (e) {
                                return !!v(m(this, t), e);
                            },
                        }),
                        d &&
                            r(l.prototype, "size", {
                                get: function () {
                                    return m(this, t)[h];
                                },
                            }),
                        l
                    );
                },
                def: function (e, t, n) {
                    var r,
                        o,
                        i = v(e, t);
                    return i ? (i.v = n) : ((e._l = i = { i: (o = p(t, !0)), k: t, v: n, p: (r = e._l), n: void 0, r: !1 }), e._f || (e._f = i), r && (r.n = i), e[h]++, "F" !== o && (e._i[o] = i)), e;
                },
                getEntry: v,
                setStrong: function (e, t, n) {
                    u(
                        e,
                        t,
                        function (e, n) {
                            (this._t = m(e, t)), (this._k = n), (this._l = void 0);
                        },
                        function () {
                            for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
                            return this._t && (this._l = t = t ? t.n : this._t._f) ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : ((this._t = void 0), l(1));
                        },
                        n ? "entries" : "values",
                        !n,
                        !0
                    ),
                        f(t);
                },
            };
        },
        Xfku: function (e, t, n) {
            var r = n("n+VH");
            e.exports =
                Array.isArray ||
                function (e) {
                    return "Array" == r(e);
                };
        },
        Xi2U: function (e, t, n) {
            "use strict";
            var r = n("PAFS"),
                o = n("5MU4");
            e.exports = function (e) {
                if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint");
                return o(r(this), "number" != e);
            };
        },
        XtGn: function (e, t, n) {},
        YVBP: function (e, t, n) {},
        "Ye/d": function (e, t, n) {
            "use strict";
            n.r(t);
            n("NhOV"),
                n("mQT9"),
                n("jirp"),
                n("IKQL"),
                n("it7j"),
                n("2UZ+"),
                n("BH3N"),
                n("YhIr"),
                n("oMRA"),
                n("K/PF"),
                n("6Vmy"),
                n("U8p0"),
                n("q/UR"),
                n("896O"),
                n("r3gx"),
                n("zx98"),
                n("rDoJ"),
                n("FdQX"),
                n("bpc9"),
                n("OlDy"),
                n("rVjy"),
                n("VWwk"),
                n("CuWn"),
                n("z6jo"),
                n("aaOZ"),
                n("RCps"),
                n("Av18"),
                n("AJKo"),
                n("DY28"),
                n("3Yeq"),
                n("/tvN"),
                n("j2i0"),
                n("e2Kn"),
                n("uKE/"),
                n("Gv0X"),
                n("zsc7"),
                n("KBDK"),
                n("GKqq"),
                n("az+3"),
                n("fIq3"),
                n("5hJT"),
                n("cr8s"),
                n("l+bf"),
                n("uqQt"),
                n("Kz8+"),
                n("rVj0"),
                n("2Tod"),
                n("3RxL"),
                n("lUNa"),
                n("45ut"),
                n("KEff"),
                n("b3pB"),
                n("t91x"),
                n("cljR"),
                n("imLM"),
                n("PJhk"),
                n("75LO"),
                n("HZro"),
                n("1qKx"),
                n("3DBk"),
                n("DbwS"),
                n("jPba"),
                n("Anoy"),
                n("LXYL"),
                n("EZ0R"),
                n("71V/"),
                n("9ZkT"),
                n("X9m5"),
                n("G2C3"),
                n("/dwC"),
                n("1hyt"),
                n("vdga"),
                n("EtPw"),
                n("fg5Z"),
                n("onqJ"),
                n("J8hF"),
                n("iur1"),
                n("9ovy"),
                n("Z8gF"),
                n("asZ9"),
                n("nsbO"),
                n("4aJ6"),
                n("m1Dn"),
                n("ABKx"),
                n("+jjx"),
                n("ao5+"),
                n("BDzi"),
                n("zSai"),
                n("6d4m"),
                n("lQyR"),
                n("hYEA"),
                n("1ZPH"),
                n("uj7L"),
                n("NhxO"),
                n("FEHE"),
                n("gsnR"),
                n("5frS"),
                n("d8+F"),
                n("1UqV"),
                n("nd6X"),
                n("LuSm"),
                n("Q/xc"),
                n("42VA"),
                n("Yw8D"),
                n("QiL/"),
                n("hMok"),
                n("PxHS"),
                n("orKN"),
                n("GTEP"),
                n("4SRy"),
                n("F9vW"),
                n("W1QL"),
                n("wcNg"),
                n("p74W");
            var r = n("WFSn"),
                o = n("owxm"),
                i = n("3bJw"),
                a = n.n(i),
                c = n("SDJZ"),
                s = n.n(c),
                u = n("NToG"),
                l = n.n(u),
                f = n("K4DB"),
                d = n.n(f),
                p = n("+IV6"),
                m = n.n(p),
                h = n("T1e2"),
                v = n.n(h),
                g = n("eef+"),
                _ = n.n(g),
                y = n("c35s"),
                E = n.n(y),
                b = (n("Bejv"), n("mXGw")),
                w = n.n(b),
                S = n("cneo"),
                O = n("mBK0"),
                A = n("8Jek"),
                T = n.n(A),
                R = n("NWgQ"),
                N = n.n(R),
                I = n("f6l3"),
                C = n("tyvn"),
                x = { isAuthOpen: !1, navCollapsed: !0 },
                k = n("Ixt0"),
                P = n("Dk0S"),
                j = n("mvas"),
                L = n("KIfq"),
                M = n("J2KO"),
                D = n("FOcJ"),
                F = n("1npj"),
                V = n("D9Fv"),
                B = n.n(V),
                U = n("deTv"),
                G = n("l1H8"),
                K = n("4Ebc"),
                z = n("4SbK"),
                H = n("+Am/"),
                W = n("u8vh"),
                X = n("CpkR"),
                q =
                    (n("695R"),
                    function (e) {
                        return w.a.createElement(
                            X.a,
                            { className: T()("p-home-c-button-desktop", e.className), color: "accent", size: "large", href: e.href, onClick: e.onClick, dataTest: e.dataTest },
                            w.a.createElement(U.c, {
                                id: "home_start_trading",
                                defaultMessage: "Start trading — {value}",
                                values: { value: w.a.createElement(U.c, { className: "p-home-c-button-desktop__extra-text", id: "home_start_trading_free", defaultMessage: "it's free" }) },
                            })
                        );
                    }),
                Y = function (e) {
                    return w.a.createElement(
                        b.Fragment,
                        null,
                        K.isMobile
                            ? w.a.createElement(z.a, { className: e.className, item: Object(H.b)(W.b, "iOS" === K.osName ? "ios" : "android"), isFullContent: !0, color: "accent", onClick: e.onButtonAppClick })
                            : w.a.createElement(
                                  b.Fragment,
                                  null,
                                  e.userId
                                      ? w.a.createElement(q, { href: C.Lc.PLATFORM, className: e.className, dataTest: e.dataTest })
                                      : w.a.createElement(q, { onClick: e.onButtonDesktopClick, className: e.className, dataTest: e.dataTest })
                              )
                    );
                },
                J = n("sgHz"),
                Z = n.n(J),
                Q = n("Fuyp"),
                $ = n.n(Q),
                ee = n("oNRp"),
                te = n.n(ee),
                ne = n("W0iW"),
                re = n.n(ne),
                oe =
                    (n("zb5u"),
                    function (e) {
                        return w.a.createElement(
                            "section",
                            { className: T()("p-home-m-welcome", e.className) },
                            w.a.createElement(
                                "div",
                                { className: "p-home-m-welcome__content" },
                                w.a.createElement("h1", { className: "p-home-m-welcome__title" }, w.a.createElement(U.c, { id: "home_welcome_title", defaultMessage: "Profitability on the rise" })),
                                w.a.createElement(G.a, { className: "p-home-m-welcome__desc", content: w.a.createElement(U.c, { id: "home_welcome_desc", defaultMessage: "A Broker that supports your financial goals" }) }),
                                w.a.createElement(Y, {
                                    className: "p-home-m-devices__button",
                                    userId: e.userId,
                                    href: C.Lc.PLATFORM,
                                    onButtonAppClick: e.onButtonAppClick,
                                    onButtonDesktopClick: e.onButtonDesktopClick,
                                    dataTest: "home-page-welcome",
                                })
                            ),
                            w.a.createElement(
                                "div",
                                { className: "p-home-m-welcome__img" },
                                w.a.createElement(B.a, { maxWidth: 767 }, w.a.createElement("img", { className: "p-home-m-welcome__img-content", src: te.a, srcSet: "".concat(te.a, " 1x, ").concat(re.a, " 2x"), alt: "mobile" })),
                                w.a.createElement(B.a, { minWidth: 768 }, w.a.createElement("img", { className: "p-home-m-welcome__img-content", src: Z.a, srcSet: "".concat(Z.a, " 1x, ").concat($.a, " 2x"), alt: "desktop" }))
                            )
                        );
                    }),
                ie = n("yCHc"),
                ae = (n("EmXy"), n("AxS0")),
                ce = n.n(ae),
                se = n("VEBk"),
                ue = n.n(se),
                le = n("dXMz"),
                fe = n.n(le),
                de = n("e5ec"),
                pe = n.n(de),
                me = n("5ZJp"),
                he = n.n(me),
                ve = [
                    { id: "new-feature-1", type: "info", title: w.a.createElement(U.c, { id: "home_new_features_item_new_assets_title", defaultMessage: "30 new assets" }), className: "index", size: "small", imgBg: ce.a },
                    {
                        id: "new-feature-4",
                        type: "info",
                        title: w.a.createElement(U.c, { id: "home_new_features_item_7_title", defaultMessage: "The advisor" }),
                        description: w.a.createElement(U.c, { id: "home_new_features_item_7_desc", defaultMessage: "Analyzes several indicators according to the trading strategies" }),
                        imgBg: pe.a,
                        size: "small",
                    },
                    {
                        id: "new-feature-3",
                        type: "info",
                        title: w.a.createElement(U.c, { id: "home_new_features_item_experience_title", defaultMessage: "Experience points" }),
                        description: w.a.createElement(U.c, { id: "home_new_features_item_experience_desc", defaultMessage: "Our new rewards system offers active traders even more perks and privileges" }),
                        imgBg: fe.a,
                        className: "experience",
                        size: "big",
                        color: "positive",
                    },
                    {
                        id: "new-feature-6",
                        type: "info",
                        className: "profit-line",
                        title: w.a.createElement(U.c, { id: "home_new_features_profit_line_title", defaultMessage: "Profit line" }),
                        description: w.a.createElement(U.c, { id: "home_new_features_profit_line_desc", defaultMessage: "A tool to help you identify the break-even point of a trade" }),
                        imgBg: he.a,
                        size: "small",
                    },
                    {
                        id: "feature-7",
                        type: "link",
                        className: "tournament-bike",
                        title: w.a.createElement(U.c, { id: "home_new_features_item_tournament_title", defaultMessage: "New Tournament WORLD RACE 2.0" }),
                        description: w.a.createElement(U.c, { id: "home_new_features_item_tournament_desc", defaultMessage: "Join this month-long trading competition for a chance to win up to $2500" }),
                        imgBg: ue.a,
                        href: "LPL74-01-01",
                        size: "small",
                    },
                ],
                ge = n("cUhM"),
                _e = n("9qpH"),
                ye =
                    (n.n(_e).a,
                    {
                        title: "play",
                        path:
                            "m26 48c12.1503 0 22-9.8497 22-22s-9.8497-22-22-22-22 9.8497-22 22 9.8497 22 22 22zm-3.2282-17.0674 7.9708-4.4971c.0783-.0441.1433-.1076.1884-.1841.0452-.0764.069-.1631.069-.2514s-.0238-.175-.069-.2514c-.0451-.0765-.1101-.14-.1884-.1841l-7.9708-4.4971c-.0782-.0441-.1669-.0674-.2572-.0674-.0904 0-.1791.0232-.2574.0674-.0782.0441-.1431.1076-.1883.184-.0452.0765-.0689.1632-.0689.2515v8.9942c0 .0883.0237.175.0689.2515.0452.0764.1101.1399.1883.184.0783.0442.167.0674.2574.0674.0903 0 .179-.0233.2572-.0674z",
                        size: "large",
                        clipRule: "evenodd",
                        fill: "#fff",
                        fillRule: "evenodd",
                    }),
                Ee = {
                    title: "star",
                    path:
                        "m21.2116 9.61522c-1.4084-.39605-5.7859-.85686-5.7991-.85822 0 0-1.7384-4.04354-2.5919-5.22808-.7186-.99791-1.4032-.33895-1.6287-.00158-.8113 1.21433-2.59668 5.22966-2.59668 5.22966s-4.40977.31323-5.80612.75396c-1.17633.37123-.75806 1.22264-.5056 1.54024.90958 1.1436 4.20517 4.1563 4.20517 4.1563s-.99419 4.2844-1.00689 5.7417c-.01089 1.2277.93226 1.0966 1.31424.9564 1.37503-.505 5.20778-2.7116 5.20778-2.7116s3.7723 2.2519 5.1621 2.7132c1.17.3888 1.336-.5445 1.3197-.9489-.0588-1.4574-.9667-5.751-.9667-5.751s3.3175-2.8784 4.1895-4.0492c.7353-.9864-.1051-1.43253-.4968-1.54288z",
                    size: "small",
                    fill: "#f9b42e",
                },
                be = n("J/we"),
                we = { title: "starPart", image: n.n(be).a, size: "small", fill: "#2B435E" },
                Se = (n("b9mj"), n("8VmE")),
                Oe = n.n(Se),
                Ae = n("RiSW"),
                Te = n.n(Ae),
                Re = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor" },
                Ne = { width: 32, height: 32, viewBox: "0 0 32 32", fill: "currentColor" },
                Ie = { width: 52, height: 52, viewBox: "0 0 52 52", fill: "currentColor" };
            n("ty3S");
            var Ce = function (e) {
                    var t = e.source,
                        n = t.path,
                        r = t.image,
                        o = t.size,
                        i = void 0 === o ? "small" : o,
                        a = t.fill,
                        c = t.clipRule,
                        s = t.fillRule,
                        u = (e.width, e.height, e.className),
                        l = Te()(e, ["source", "width", "height", "className"]),
                        f = (function (e) {
                            switch (e) {
                                case "small":
                                    return Re;
                                case "medium":
                                    return Ne;
                                case "large":
                                    return Ie;
                                default:
                                    return Re;
                            }
                        })(i);
                    return w.a.createElement(
                        "svg",
                        Oe()({ xmlns: "http://www.w3.org/2000/svg", className: T()("p-home-c-icon", "p-home-c-icon_size_".concat(i), u), width: f.width, height: f.height, viewBox: f.viewBox, fill: a, clipRule: c, fillRule: s }, l),
                        n &&
                            ("string" == typeof n
                                ? w.a.createElement("path", { d: n, fill: a })
                                : n.map(function (e, t) {
                                      return w.a.createElement("path", { key: t, d: e, fill: a });
                                  })),
                        r && w.a.createElement("image", { fill: a, xlinkHref: r, x: "0", y: "0", width: f.width, height: f.height })
                    );
                },
                xe = (n("KK5y"), { ar: "ar", en: "en", hi: "hg", ru: "", th: "th", vi: "vi", es: "es", id: "id", ms: "ms", pt: "pt" }),
                ke = function (e, t) {
                    var n = window.location.hostname;
                    return "https://".concat(n, "/lands/").concat(t).concat(e, "/");
                };
            function Pe(e, t, n) {
                var r = null;
                switch (e.type) {
                    case "link":
                        r = (function (e, t) {
                            return w.a.createElement(
                                "a",
                                { className: "p-home-m-new-features-c-card__content", href: ke(xe.hasOwnProperty(t) ? xe[t] : xe.en, e.href), target: "_black", rel: "noopener noreferrer" },
                                w.a.createElement("h4", { className: "p-home-m-new-features-c-card__title" }, e.title),
                                e.description && w.a.createElement("p", { className: "p-home-m-new-features-c-card__desc" }, e.description)
                            );
                        })(e, t);
                        break;
                    case "video":
                        r = (function (e, t) {
                            return w.a.createElement(
                                ge.c,
                                { className: "p-home-m-new-features-c-card__content", onClick: t },
                                w.a.createElement("h4", { className: "p-home-m-new-features-c-card__title" }, e.title),
                                e.description && w.a.createElement("p", { className: "p-home-m-new-features-c-card__desc" }, e.description),
                                w.a.createElement(Ce, { className: "p-home-m-new-features-c-card__icon", source: ye })
                            );
                        })(e, n);
                        break;
                    default:
                        r = (function (e) {
                            return w.a.createElement(
                                ge.c,
                                { className: "p-home-m-new-features-c-card__content" },
                                w.a.createElement("h4", { className: "p-home-m-new-features-c-card__title" }, e.title),
                                e.description && w.a.createElement("p", { className: "p-home-m-new-features-c-card__desc" }, e.description),
                                w.a.createElement(
                                    "span",
                                    { className: "p-home-m-new-features-c-card__extra" },
                                    e.icon && w.a.createElement("span", { className: "p-home-m-new-features-c-card__extra-icon" }, e.icon),
                                    e.extraContent && w.a.createElement("span", { className: "p-home-m-new-features-c-card__extra-content" }, w.a.createElement("span", null, e.extraContent))
                                )
                            );
                        })(e);
                }
                return r;
            }
            var je = function (e) {
                    var t = e.feature,
                        n = e.className,
                        r = e.lang,
                        o = e.onClick;
                    return w.a.createElement(
                        "li",
                        {
                            className: T()(
                                "p-home-m-new-features-c-card",
                                ("link" === t.type || "video" === t.type) && "p-home-m-new-features-c-card_style_link",
                                t.color && "p-home-m-new-features-c-card_color_".concat(t.color),
                                t.className && "p-home-m-new-features-c-card_type_".concat(t.className),
                                n
                            ),
                        },
                        w.a.createElement("span", { className: "p-home-m-new-features-c-card__back", style: t.imgBg ? { backgroundImage: "url(".concat(t.imgBg, ")") } : null }),
                        Pe(t, r, o)
                    );
                },
                Le = n("YTIe"),
                Me =
                    (n("KP5q"),
                    (function (e) {
                        function t(e) {
                            var n;
                            return s()(this, t), ((n = d()(this, m()(t).call(this, e))).videoRef = w.a.createRef()), n;
                        }
                        return (
                            _()(t, e),
                            l()(t, [
                                {
                                    key: "componentDidUpdate",
                                    value: function (e) {
                                        var t = this.videoRef && this.videoRef.current;
                                        null !== t && e.stop !== this.props.stop && (this.props.stop ? (t.pause(), (t.currentTime = 0)) : t.play());
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.props,
                                            t = e.muted,
                                            n = e.loop,
                                            r = e.autoPlay,
                                            o = e.controls,
                                            i = e.preload,
                                            a = e.sources,
                                            c = e.lang,
                                            s = e.className,
                                            u = e.onCloseClick;
                                        return w.a.createElement(
                                            "div",
                                            { className: T()("p-home-c-video-player", s) },
                                            w.a.createElement(ge.c, { className: "p-home-c-video-player__bg-close", onClick: u }),
                                            w.a.createElement(ge.c, { color: "transparent", className: "p-home-c-video-player__close", onClick: u }, w.a.createElement(Le.x, null)),
                                            w.a.createElement(
                                                "video",
                                                { ref: this.videoRef, className: "p-home-c-video-player__native", poster: "", autoPlay: r, loop: n, muted: t, controls: o, preload: i },
                                                w.a.createElement("source", { src: a.mp4, type: "video/mp4" }),
                                                a.ogg && w.a.createElement("source", { src: a.ogg, type: "video/ogg" }),
                                                w.a.createElement("track", { src: a.mp4, kind: "captions", srcLang: c, label: c })
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(w.a.Component));
            Me.defaultProps = { muted: !1, loop: !1, autoPlay: !0, controls: !1, stop: !1, preload: "none", sources: { mp4: "" }, onCloseClick: function () {} };
            var De = function (e) {
                    var t = e.lang,
                        n = e.stop,
                        r = e.className,
                        o = e.sources,
                        i = e.onCloseClick;
                    return w.a.createElement(Me, {
                        sources: (function (e, t) {
                            var n = Object.assign({}, t[e] || t.en);
                            return (n.mp4 = "".concat(n.mp4)), n.ogg && (n.ogg = "".concat(n.ogg)), n;
                        })(t, o),
                        lang: t,
                        controls: !0,
                        stop: n,
                        preload: "auto",
                        className: r,
                        onCloseClick: i,
                    });
                },
                Fe = (function (e) {
                    function t() {
                        var e, n;
                        s()(this, t);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return (
                            ((n = d()(this, (e = m()(t)).call.apply(e, [this].concat(o)))).state = { isVideoOpen: !1, videoSource: null }),
                            (n.toggleVideoOpen = function () {
                                n.setState(function (e) {
                                    return { isVideoOpen: !e.isVideoOpen };
                                });
                            }),
                            n
                        );
                    }
                    return (
                        _()(t, e),
                        l()(t, [
                            {
                                key: "handleClick",
                                value: function (e) {
                                    e && this.setState((this.state.videoSource = e)), this.state.videoSource && this.toggleVideoOpen();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props,
                                        n = t.lang,
                                        r = t.className,
                                        o = this.state,
                                        i = o.isVideoOpen,
                                        a = o.videoSource;
                                    return w.a.createElement(
                                        "section",
                                        { className: T()("p-home-m-new-features", r) },
                                        a && i && w.a.createElement(De, { sources: a, lang: n, stop: !i, className: T()("p-home-m-achievements__video", !i && "p-home-m-achievements__video_state_hide"), onCloseClick: this.toggleVideoOpen }),
                                        w.a.createElement(ie.a, { className: "p-home-m-new-features__title", content: w.a.createElement(U.c, { id: "home_new_features_title", defaultMessage: "The latest from Olymp Trade" }) }),
                                        w.a.createElement(G.a, { className: "p-home-m-new-features__desc", content: w.a.createElement(U.c, { id: "home_new_features_desc", defaultMessage: "New features, latest webinars and more..." }) }),
                                        w.a.createElement(
                                            "ul",
                                            { className: "p-home-m-new-features__list" },
                                            ve.map(function (t) {
                                                return w.a.createElement(je, {
                                                    key: t.id,
                                                    className: "p-home-m-new-features__card p-home-m-new-features__card_size_".concat(t.size),
                                                    feature: t,
                                                    lang: n,
                                                    onClick: function () {
                                                        return e.handleClick(t.videos);
                                                    },
                                                });
                                            })
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(w.a.Component),
                Ve = n("2UUl"),
                Be = n.n(Ve),
                Ue =
                    (n("XtGn"),
                    function (e) {
                        var t = e.enter,
                            n = e.leave,
                            r = e.onClick,
                            o = e.direction;
                        return w.a.createElement("button", { onMouseEnter: t, onMouseLeave: n, onClick: r, className: "slick-arrow slick-".concat(o) }, o);
                    }),
                Ge = (function (e) {
                    function t() {
                        var e, n;
                        s()(this, t);
                        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                        return (
                            ((n = d()(this, (e = m()(t)).call.apply(e, [this].concat(o)))).state = { sliderClassName: "", currentSlideIndex: null }),
                            (n.settings = {
                                centerMode: !0,
                                centerPadding: "0",
                                autoplay: !0,
                                autoplaySpeed: 3e3,
                                infinite: !0,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                draggable: !1,
                                speed: 500,
                                pauseOnHover: !0,
                                useCSS: !0,
                                cssEase: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                                lazyLoad: "progressive",
                                onInit: function () {
                                    n.onShow(0);
                                },
                                nextArrow: w.a.createElement(Ue, {
                                    direction: "next",
                                    enter: function () {
                                        return n.mouseEnterNextHandler();
                                    },
                                    leave: function () {
                                        return n.mouseLeaveHandler();
                                    },
                                    onClick: function () {
                                        return n.onClickNext();
                                    },
                                }),
                                prevArrow: w.a.createElement(Ue, {
                                    direction: "prev",
                                    enter: function () {
                                        return n.mouseEnterPrevHandler();
                                    },
                                    leave: function () {
                                        return n.mouseLeaveHandler();
                                    },
                                    onClick: function () {
                                        return n.onClickPrev();
                                    },
                                }),
                            }),
                            (n.onClickNext = function () {
                                n.slider.slickNext();
                            }),
                            (n.onClickPrev = function () {
                                n.slider.slickPrev();
                            }),
                            (n.mouseEnterPrevHandler = function () {
                                n.setState(function () {
                                    return { sliderClassName: "slick-left" };
                                });
                            }),
                            (n.mouseEnterNextHandler = function () {
                                n.setState(function () {
                                    return { sliderClassName: "slick-right" };
                                });
                            }),
                            (n.mouseLeaveHandler = function () {
                                n.setState(function () {
                                    return { sliderClassName: "" };
                                });
                            }),
                            n
                        );
                    }
                    return (
                        _()(t, e),
                        l()(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this.props.indexRenderingImmediately;
                                    this.isNil(e) || this.slider.slickGoTo(e);
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    var t = e.indexRenderingImmediately,
                                        n = e.count;
                                    n > this.props.count && this.handleSlidesRemoving(n), this.isNil(t) || this.slider.slickGoTo(t);
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.slider && this.props.items.length && this.slider.slickPause();
                                },
                            },
                            {
                                key: "isNil",
                                value: function (e) {
                                    return null === e;
                                },
                            },
                            {
                                key: "handleSlidesRemoving",
                                value: function (e) {
                                    this.state.currentSlideIndex + 1 > e && this.slider.slickGoTo(e, !0);
                                },
                            },
                            {
                                key: "onShow",
                                value: function (e) {
                                    this.setState(function () {
                                        return { currentSlideIndex: e };
                                    });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return w.a.createElement(
                                        Be.a,
                                        Oe()({ className: T()("p-home-c-slider", this.state.sliderClassName, this.props.className) }, this.settings, {
                                            dots: this.props.items.length > 1,
                                            ref: function (t) {
                                                t && (e.slider = t);
                                            },
                                        }),
                                        this.props.slideTemplate
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(w.a.Component),
                Ke = [
                    { id: "review-1", review: w.a.createElement(U.c, { id: "home_devices_review_2", defaultMessage: "User-friendly interface with lots of useful tools." }) },
                    { id: "review-2", review: w.a.createElement(U.c, { id: "home_devices_review_1", defaultMessage: "One of the best trading apps." }) },
                    { id: "review-3", review: w.a.createElement(U.c, { id: "home_devices_review_3", defaultMessage: "Intuitive interface is easily understood even for novices." }) },
                ],
                ze = n("ZZSK"),
                He = n.n(ze),
                We =
                    (n("HLk9"),
                    function (e) {
                        var t = { type: "web", icon: He.a, content: { title: "MetaTrader4", text: w.a.createElement(U.c, { id: "home_available_on", defaultMessage: "Available on" }) }, href: W.a.WEB.MT4, productType: "meta_web" },
                            n = {
                                type: "windows-64",
                                icon: Le.Fb,
                                content: { title: "Windows", text: w.a.createElement(U.c, { id: "home_download_app_for", defaultMessage: "Download App for" }), size: "43,6 Mb" },
                                href: "/download",
                                productType: "windows",
                            };
                        return w.a.createElement(
                            "div",
                            { className: T()("p-home-m-devices-c-apps", e.className) },
                            w.a.createElement(
                                "div",
                                { className: "p-home-m-devices-c-apps__item" },
                                w.a.createElement("h5", { className: "p-home-m-devices-c-apps__title" }, w.a.createElement(U.c, { id: "home_devices_desktop", defaultMessage: "Desktop" })),
                                w.a.createElement(
                                    "div",
                                    { className: "p-home-m-devices-c-apps__buttons" },
                                    w.a.createElement(z.a, { className: "p-home-m-devices-c-apps__button", item: t, onClick: e.onButtonAppClick, sizeIcon: "large", isFullContent: !0 }),
                                    "Mac OS" === K.osName || "iOS" === K.osName
                                        ? w.a.createElement(z.a, { className: "p-home-m-devices-c-apps__button", item: Object(H.b)(W.b, "macos"), onClick: e.onButtonAppClick, isFullContent: !0 })
                                        : w.a.createElement(z.a, { className: "p-home-m-devices-c-apps__button", item: n, onClick: e.onButtonAppClick, isFullContent: !0 })
                                )
                            ),
                            w.a.createElement(
                                "div",
                                { className: "p-home-m-devices-c-apps__item" },
                                w.a.createElement("h5", { className: "p-home-m-devices-c-apps__title" }, w.a.createElement(U.c, { id: "home_devices_mobile", defaultMessage: "Mobile" })),
                                w.a.createElement(
                                    "div",
                                    { className: "p-home-m-devices-c-apps__buttons" },
                                    w.a.createElement(z.a, { className: "p-home-m-devices-c-apps__button", item: Object(H.b)(W.b, "ios"), onClick: e.onButtonAppClick, sizeIcon: "large" }),
                                    w.a.createElement(z.a, { className: "p-home-m-devices-c-apps__button", item: Object(H.b)(W.b, "android"), onClick: e.onButtonAppClick, sizeIcon: "large" })
                                )
                            ),
                            w.a.createElement(
                                "div",
                                { className: "p-home-m-devices-c-apps__item" },
                                w.a.createElement("h5", { className: "p-home-m-devices-c-apps__title" }, w.a.createElement(U.c, { id: "home_devices_all_downloads", defaultMessage: "App downloads" })),
                                w.a.createElement("span", { className: "p-home-m-devices-c-apps__extra-title" }, w.a.createElement(U.c, { id: "home_devices_apps_download_amount", defaultMessage: "{value}M+", values: { value: 44 } }))
                            )
                        );
                    });
            n("yQy7");
            var Xe,
                qe,
                Ye = function (e) {
                    var t = Ke;
                    return w.a.createElement(
                        "section",
                        { className: T()("p-home-m-devices", e.className) },
                        w.a.createElement(
                            "div",
                            { className: "p-home-m-devices__info" },
                            w.a.createElement(ie.a, { className: "p-home-m-devices__title", content: w.a.createElement(U.c, { id: "home_devices_title", defaultMessage: "Smooth experience on any device" }) }),
                            w.a.createElement(G.a, {
                                className: "p-home-m-devices__desc",
                                content: w.a.createElement(U.c, {
                                    id: "home_devices_desc",
                                    defaultMessage: "Whether you prefer {value} {last}",
                                    values: {
                                        value: w.a.createElement("span", { className: "p-home-m-devices__desc-bold" }, w.a.createElement(U.c, { id: "home_devices_desc_extra", defaultMessage: "trading at your desk or on the go" })),
                                        last: "— Olymp Trade has got you covered",
                                    },
                                }),
                            })
                        ),
                        w.a.createElement(
                            "div",
                            { className: "p-home-m-devices__content" },
                            w.a.createElement(
                                "div",
                                { className: "p-home-m-devices__img" },
                                w.a.createElement(B.a, { maxWidth: 767 }, w.a.createElement("img", { className: "p-home-m-devices__img-content", src: Z.a, srcSet: "".concat(Z.a, " 1x, ").concat($.a, " 2x"), alt: "desktop" })),
                                w.a.createElement(B.a, { minWidth: 768 }, w.a.createElement("img", { className: "p-home-m-devices__img-content", src: te.a, srcSet: "".concat(te.a, " 1x, ").concat(re.a, " 2x"), alt: "mobile" }))
                            ),
                            w.a.createElement(
                                "div",
                                { className: "p-home-m-devices__reviews" },
                                w.a.createElement(G.a, {
                                    className: "p-home-m-devices__reviews-desc",
                                    content: w.a.createElement(U.c, { id: "home_devices_reviews_desc", defaultMessage: "The custom-built platform has been adapted to any device you may choose and switching is 100% seamless." }),
                                }),
                                w.a.createElement(
                                    "div",
                                    { className: "p-home-m-devices__review-container" },
                                    w.a.createElement(
                                        "div",
                                        { className: "p-home-m-devices__review-card" },
                                        w.a.createElement(
                                            "div",
                                            { className: "p-home-m-devices__review-info" },
                                            w.a.createElement("span", { className: "p-home-m-devices__review-rating" }, 4.1),
                                            w.a.createElement(
                                                "span",
                                                null,
                                                w.a.createElement(
                                                    "span",
                                                    { className: "p-home-m-devices__review-stars" },
                                                    (function (e) {
                                                        for (var t = [], n = Math.floor(e), r = 0; r < n; r++) t[r] = w.a.createElement(Ce, { key: r, className: "p-home-m-devices__review-star", source: Ee });
                                                        return t;
                                                    })(4.1).map(function (e) {
                                                        return e;
                                                    }),
                                                    (function (e) {
                                                        var t = [],
                                                            n = 5 - Math.floor(e);
                                                        if (n) for (var r = 0; r < n; r++) t[r] = w.a.createElement(Ce, { key: r, className: "p-home-m-devices__review-star", source: we });
                                                        return t;
                                                    })(4.1).map(function (e) {
                                                        return e;
                                                    })
                                                ),
                                                w.a.createElement("span", null, w.a.createElement(U.c, { id: "home_devices_app_rating", defaultMessage: "app rating" }))
                                            )
                                        ),
                                        w.a.createElement(Ge, {
                                            className: "p-home-m-devices__review-list",
                                            items: t,
                                            slideTemplate: t.map(function (e) {
                                                return w.a.createElement("div", { key: e.id, className: "p-home-m-devices__review-text" }, e.review);
                                            }),
                                        })
                                    )
                                ),
                                w.a.createElement(
                                    B.a,
                                    { maxWidth: 959 },
                                    w.a.createElement(Y, { className: "p-home-m-devices__button", userId: e.userId, onButtonAppClick: e.onButtonAppClick, onButtonDesktopClick: e.onButtonDesktopClick, dataTest: "home-page-devices" })
                                )
                            )
                        ),
                        w.a.createElement(B.a, { minWidth: 960 }, w.a.createElement(We, { className: "p-home-m-devices__apps", onButtonAppClick: e.onButtonAppClick }))
                    );
                },
                Je = n("hWgQ"),
                Ze = [
                    {
                        id: "feature-1",
                        title: w.a.createElement(U.c, { id: "home_features_item_1_title", defaultMessage: "Risk Free Trades" }),
                        description: w.a.createElement(U.c, { id: "home_features_item_1_desc", defaultMessage: "Explore the platform and test strategies freely" }),
                        icon: Le.ib,
                    },
                    {
                        id: "feature-2",
                        title: w.a.createElement(U.c, { id: "home_features_item_2_title", defaultMessage: "Demo account" }),
                        description: w.a.createElement(U.c, {
                            id: "home_features_item_2_desc",
                            defaultMessage: "Replenishable {value} for practice and learning",
                            values: { value: w.a.createElement("span", { className: "p-home-m-features__card-text_bold" }, w.a.createElement(Je.b, { value: 1e4, currency: "usd" })) },
                        }),
                        icon: Le.y,
                    },
                    {
                        id: "feature-3",
                        title: w.a.createElement(U.c, { id: "home_features_item_3_title", defaultMessage: "Marketplace" }),
                        description: w.a.createElement(U.c, { id: "home_features_item_3_desc", defaultMessage: "Customize the platform with unique add-ons to elevate your trading" }),
                        icon: Le.U,
                    },
                    {
                        id: "feature-4",
                        title: w.a.createElement(U.c, { id: "home_features_item_4_title", defaultMessage: "Personal manager" }),
                        description: w.a.createElement(U.c, { id: "home_features_item_4_desc", defaultMessage: "Get exclusive one-on-one guidance with a trading expert" }),
                        icon: Le.ub,
                    },
                ],
                Qe =
                    (n("SRyi"),
                    function (e) {
                        return w.a.createElement(
                            "section",
                            { className: T()("p-home-m-features", e.className) },
                            w.a.createElement(
                                "div",
                                { className: "p-home-m-features__content" },
                                w.a.createElement(ie.a, { className: "p-home-m-features__title", content: w.a.createElement(U.c, { id: "home_features_title", defaultMessage: "A platform that works for you" }) }),
                                w.a.createElement(G.a, { className: "p-home-m-features__desc", content: w.a.createElement(U.c, { id: "home_features_desc", defaultMessage: "These features will help you reach your goals" }) }),
                                w.a.createElement(B.a, { minWidth: 768 }, w.a.createElement(Y, { onButtonAppClick: e.onButtonAppClick, onButtonDesktopClick: e.onButtonDesktopClick, userId: e.userId, dataTest: "home-page-new-features" }))
                            ),
                            w.a.createElement(
                                "ul",
                                { className: "p-home-m-features__list" },
                                Ze.map(function (e) {
                                    return w.a.createElement(
                                        "li",
                                        { key: e.id, className: "p-home-m-features__card" },
                                        w.a.createElement(e.icon, { className: "p-home-m-features__card-icon" }),
                                        w.a.createElement("h4", { className: "p-home-m-features__card-title" }, e.title),
                                        w.a.createElement("p", { className: "p-home-m-features__card-desc" }, e.description)
                                    );
                                })
                            )
                        );
                    }),
                $e = n("nxTg"),
                et = n.n($e),
                tt = n("czhI"),
                nt = n.n(tt),
                rt = n("UOCr"),
                ot = (n("8K/8"), /((0x)?|#?)([0-9A-F]{8}|[0-9A-F]{6})/g),
                it = function (e) {
                    return "string" == typeof e;
                },
                at = function (e) {
                    var t = e.fill,
                        n = e.icon;
                    return it(t) && it(n);
                },
                ct = function (e) {
                    var t = e.label,
                        n = e.icons["md-dark"];
                    return nt.a.get(n).then(function (e) {
                        var n = e.data,
                            r = n.match(ot);
                        return { fill: et()(r, 1)[0], icon: n, label: t };
                    });
                },
                st = function (e) {
                    var t = Object(b.useState)([]),
                        n = et()(t, 2),
                        r = n[0],
                        o = n[1],
                        i = Object(b.useState)(0),
                        a = et()(i, 2),
                        c = a[0],
                        s = a[1],
                        u = function () {
                            var t = e.userId,
                                n = e.onSignUp;
                            t ? window.location.replace("/cabinet") : n();
                        };
                    Object(b.useEffect)(
                        function () {
                            Object(rt.b)()
                                .then(function (e) {
                                    var t,
                                        n = e.map(ct);
                                    return (
                                        (t = n),
                                        Promise.all(
                                            t.map(function (e) {
                                                return e
                                                    .then(function (e) {
                                                        return { status: "fulfilled", value: e };
                                                    })
                                                    .catch(function (e) {
                                                        return { status: "rejected", reason: e };
                                                    });
                                            })
                                        )
                                    );
                                })
                                .then(function (e) {
                                    var t = e
                                        .filter(function (e) {
                                            return "fulfilled" === e.status;
                                        })
                                        .map(function (e) {
                                            return e.value;
                                        })
                                        .filter(at);
                                    o(t), s(t.length <= 6 ? t.length : 5);
                                })
                                .catch(function () {
                                    return o([]);
                                });
                        },
                        [o]
                    );
                    var l = r.slice(0, c),
                        f = Object(b.useMemo)(
                            function () {
                                return c >= r.length;
                            },
                            [c, r.length]
                        ),
                        d = Object(b.useMemo)(
                            function () {
                                return "".concat(c + 6 + 1 >= r.length ? r.length - c : 6, " +");
                            },
                            [r.length, c]
                        );
                    return w.a.createElement(
                        "section",
                        { className: T()("p-home-m-payments", e.className) },
                        w.a.createElement(ie.a, { className: "p-home-m-payments__title", dataTest: "payment_title", content: w.a.createElement(U.c, { id: "home_payments_title", defaultMessage: "No limits. No fees. No holdback." }) }),
                        w.a.createElement(G.a, { className: "p-home-m-payments__desc", content: w.a.createElement(U.c, { id: "home_payments_desc", defaultMessage: "Quick and easy deposits and withdrawals" }) }),
                        w.a.createElement(
                            "ul",
                            { "data-test": "psp_icons_list", className: "p-home-m-payments__list" },
                            l.map(function (e) {
                                var t = e.label,
                                    n = e.fill,
                                    r = e.icon;
                                return w.a.createElement(
                                    "li",
                                    { "data-test": "psp_icon_".concat(t), className: "p-home-m-payments__item", key: t, style: { background: String(n) } },
                                    w.a.createElement("button", { onClick: u, type: "button", dangerouslySetInnerHTML: { __html: r } })
                                );
                            }),
                            f
                                ? null
                                : w.a.createElement(
                                      "li",
                                      { className: "p-home-m-payments__item show-more" },
                                      w.a.createElement(
                                          "button",
                                          {
                                              type: "button",
                                              onClick: function () {
                                                  s(c + 6 + 1 === r.length ? r.length : c + 6);
                                              },
                                          },
                                          d
                                      )
                                  )
                        )
                    );
                },
                ut = n("8KFY"),
                lt = n.n(ut),
                ft = n("dmRF"),
                dt = n.n(ft),
                pt = n("wf9V"),
                mt = n.n(pt),
                ht = n("skVe"),
                vt = n.n(ht),
                gt = n("VFsX"),
                _t = n.n(gt),
                yt = n("gP2F"),
                Et = n.n(yt),
                bt = n("jI75"),
                wt = n.n(bt),
                St = n("9cl8"),
                Ot = n.n(St),
                At = n("5JdW"),
                Tt = n.n(At),
                Rt = n("rh2v"),
                Nt = n.n(Rt),
                It = n("h8op"),
                Ct = n.n(It),
                xt = [
                    {
                        id: "award-1",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_1_title", defaultMessage: "“Best Financial Broker“" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_1_desc", defaultMessage: "CPA Life Awards 2017" }),
                        img: lt.a,
                    },
                    {
                        id: "award-2",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_2_title", defaultMessage: "“Best Trading Platform 2018”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_2_desc", defaultMessage: "The Forex Awards" }),
                        img: dt.a,
                    },
                    {
                        id: "award-3",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_3_title", defaultMessage: "“Best Options Broker”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_3_desc", defaultMessage: "Forex Expo 2017" }),
                        img: mt.a,
                    },
                    {
                        id: "award-4",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_4_title", defaultMessage: "The “Fastest Growing Broker”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_4_desc", defaultMessage: "ShowFx World 2016" }),
                        img: vt.a,
                    },
                    {
                        id: "award-5",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_5_title", defaultMessage: "“Best traders FB community in Thailand”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_5_desc", defaultMessage: "Traders Fair 2018" }),
                        img: _t.a,
                    },
                    {
                        id: "award-6",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_6_title", defaultMessage: "“Best Options Trading Platform”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_6_desc", defaultMessage: "Le Fonti 2018" }),
                        img: Et.a,
                    },
                    {
                        id: "award-7",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_7_title", defaultMessage: "“Innovative broker”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_7_desc", defaultMessage: "IAFT Awards 2017" }),
                        img: wt.a,
                    },
                    {
                        id: "award-8",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_8_title", defaultMessage: "“Best Mobile Trading Experience”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_8_desc", defaultMessage: "Forex Brokers Award 2019" }),
                        img: Ot.a,
                    },
                    {
                        id: "award-9",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_9_title", defaultMessage: "“Best Customer Support Broker”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_9_desc", defaultMessage: "Forex Brokers Awards 2019" }),
                        img: Tt.a,
                    },
                    {
                        id: "award-10",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_10_title", defaultMessage: "“Best Mobile Trading Platform”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_10_desc", defaultMessage: "Global Brand Awards 2019" }),
                        img: Nt.a,
                    },
                    {
                        id: "award-11",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_11_title", defaultMessage: "“Best Customer Service Broker”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_11_desc", defaultMessage: "Global Brand Awards 2019" }),
                        img: Nt.a,
                    },
                    {
                        id: "award-12",
                        title: w.a.createElement(U.c, { id: "home_tournaments_award_9_title", defaultMessage: "“Best Customer Support Broker”" }),
                        desc: w.a.createElement(U.c, { id: "home_tournaments_award_12_desc", defaultMessage: "Forex Brokers Awards 2020" }),
                        img: Ct.a,
                    },
                ],
                kt = n("CBb8"),
                Pt = {
                    en: { mp4: "".concat(kt.b, "/videos/home/moto_gp/en.mp4") },
                    es: { mp4: "".concat(kt.b, "/videos/home/moto_gp/es.mp4") },
                    fr: { mp4: "".concat(kt.b, "/videos/home/moto_gp/fr.mp4") },
                    id: { mp4: "".concat(kt.b, "/videos/home/moto_gp/id.mp4") },
                    ms: { mp4: "".concat(kt.b, "/videos/home/moto_gp/ms.mp4") },
                    pt: { mp4: "".concat(kt.b, "/videos/home/moto_gp/pt.mp4") },
                    th: { mp4: "".concat(kt.b, "/videos/home/moto_gp/th.mp4") },
                    tr: { mp4: "".concat(kt.b, "/videos/home/moto_gp/tr.mp4") },
                    vi: { mp4: "".concat(kt.b, "/videos/home/moto_gp/vi.mp4") },
                },
                jt = { en: { mp4: "".concat(kt.b, "/videos/home/partnerships/en.mp4") } },
                Lt =
                    ("".concat(kt.b, "/videos/home/education/ar.mp4"),
                    "".concat(kt.b, "/videos/home/education/bn.mp4"),
                    "".concat(kt.b, "/videos/home/education/en.mp4"),
                    "".concat(kt.b, "/videos/home/education/es.mp4"),
                    "".concat(kt.b, "/videos/home/education/fa.mp4"),
                    "".concat(kt.b, "/videos/home/education/fr.mp4"),
                    "".concat(kt.b, "/videos/home/education/hi.mp4"),
                    "".concat(kt.b, "/videos/home/education/id.mp4"),
                    "".concat(kt.b, "/videos/home/education/ms.mp4"),
                    "".concat(kt.b, "/videos/home/education/pt.mp4"),
                    "".concat(kt.b, "/videos/home/education/ru.mp4"),
                    "".concat(kt.b, "/videos/home/education/th.mp4"),
                    "".concat(kt.b, "/videos/home/education/tr.mp4"),
                    "".concat(kt.b, "/videos/home/education/ur.mp4"),
                    "".concat(kt.b, "/videos/home/education/vi.mp4"),
                    n("v3sG")),
                Mt = n.n(Lt),
                Dt = n("nx7V"),
                Ft = n.n(Dt),
                Vt = n("gk7b"),
                Bt = n.n(Vt),
                Ut =
                    (n("vkXo"),
                    (function (e) {
                        function t() {
                            var e, n;
                            s()(this, t);
                            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                            return (
                                ((n = d()(this, (e = m()(t)).call.apply(e, [this].concat(o)))).state = { isVideoOpen: !1, videoSource: null }),
                                (n.toggleVideoOpen = function () {
                                    n.setState(function (e) {
                                        return { isVideoOpen: !e.isVideoOpen };
                                    });
                                }),
                                n
                            );
                        }
                        return (
                            _()(t, e),
                            l()(t, [
                                {
                                    key: "handleClick",
                                    value: function (e) {
                                        e && this.setState((this.state.videoSource = e)), this.state.videoSource && this.toggleVideoOpen();
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this,
                                            t = this.props,
                                            n = t.lang,
                                            r = t.onButtonAppClick,
                                            o = t.onButtonDesktopClick,
                                            i = t.className,
                                            a = t.userId,
                                            c = this.state,
                                            s = c.isVideoOpen,
                                            u = c.videoSource,
                                            l = xt;
                                        return w.a.createElement(
                                            "section",
                                            { className: T()("p-home-m-achievements", i) },
                                            u &&
                                                s &&
                                                w.a.createElement(De, { sources: u, lang: n, stop: !s, className: T()("p-home-m-achievements__video", !s && "p-home-m-achievements__video_state_hide"), onCloseClick: this.toggleVideoOpen }),
                                            w.a.createElement(
                                                "div",
                                                { className: "p-home-m-achievements__info" },
                                                w.a.createElement(ie.a, { className: "p-home-m-achievements__title", content: w.a.createElement(U.c, { id: "home_tournament_title", defaultMessage: "5 years of excellence" }) }),
                                                w.a.createElement(G.a, {
                                                    className: "p-home-m-achievements__desc",
                                                    content: w.a.createElement(U.c, { id: "home_tournament_desc", defaultMessage: "An industry trailblazer since 2014, Olymp Trade has many achievements to be proud of" }),
                                                })
                                            ),
                                            w.a.createElement(
                                                "div",
                                                { className: "p-home-m-achievements__content" },
                                                w.a.createElement(
                                                    "div",
                                                    { className: "p-home-m-achievements__items" },
                                                    w.a.createElement(
                                                        ge.c,
                                                        {
                                                            "data-type": "partnership",
                                                            className: "p-home-m-achievements__item",
                                                            style: { backgroundImage: "url(".concat(Ft.a, ")") },
                                                            onClick: function () {
                                                                return e.handleClick(jt);
                                                            },
                                                        },
                                                        w.a.createElement("h4", { className: "p-home-m-achievements__item-title" }, w.a.createElement(U.c, { id: "home_tournament_item_1_title", defaultMessage: "Partnerships" })),
                                                        w.a.createElement(
                                                            "p",
                                                            { className: "p-home-m-achievements__item-desc" },
                                                            w.a.createElement(U.c, { id: "home_tournament_item_1_desc", defaultMessage: "One of the worlds top rugby players, Ebene Etzbeth (South Africa), is now a partner to Olymp Trade" })
                                                        ),
                                                        w.a.createElement(Ce, { className: "p-home-m-achievements__item-icon", source: ye })
                                                    ),
                                                    w.a.createElement(
                                                        ge.c,
                                                        {
                                                            "data-type": "event",
                                                            className: "p-home-m-achievements__item",
                                                            style: { backgroundImage: "url(".concat(Bt.a, ")") },
                                                            onClick: function () {
                                                                return e.handleClick(Pt);
                                                            },
                                                        },
                                                        w.a.createElement("img", { src: Mt.a, alt: "LCP logo", className: "p-home-m-achievements__item-img" }),
                                                        w.a.createElement(
                                                            "p",
                                                            { className: "p-home-m-achievements__item-desc" },
                                                            w.a.createElement(U.c, { id: "home_tournament_item_2_desc", defaultMessage: "Olymp Trade is proud to support the LCR Honda team at MotoGP™ 2019" })
                                                        ),
                                                        w.a.createElement(Ce, { className: "p-home-m-achievements__item-icon", source: ye })
                                                    )
                                                ),
                                                w.a.createElement(Ge, {
                                                    className: "p-home-m-achievements__awards",
                                                    items: l,
                                                    slideTemplate: l.map(function (e) {
                                                        return w.a.createElement(
                                                            "div",
                                                            { key: e.id, className: "p-home-m-achievements__award" },
                                                            w.a.createElement("h4", { className: "p-home-m-achievements__award-title" }, w.a.createElement(U.c, { id: "home_tournaments_awards", defaultMessage: "Awards" })),
                                                            w.a.createElement("p", { className: "p-home-m-achievements__award-desc" }, e.title),
                                                            w.a.createElement("p", { className: "p-home-m-achievements__award-desc" }, e.desc),
                                                            w.a.createElement("img", { src: e.img, alt: e.title, className: "p-home-m-achievements__award-img" })
                                                        );
                                                    }),
                                                })
                                            ),
                                            w.a.createElement(Y, { className: "p-home-m-achievements__button", userId: a, onButtonAppClick: r, onButtonDesktopClick: o, dataTest: "home-page-achievements" })
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(w.a.Component)),
                Gt =
                    (n("JDiE"),
                    (Xe = (function (e) {
                        function t() {
                            var e, n;
                            s()(this, t);
                            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                            return (
                                (n = d()(this, (e = m()(t)).call.apply(e, [this].concat(o)))),
                                a()(n, "viewState", qe, v()(n)),
                                (n.body = document.body),
                                (n.onSignIn = function () {
                                    window.location.replace("#action=auth"), n.onToggleAuthClick();
                                }),
                                (n.onSignUp = function () {
                                    window.location.replace("#action=register"), n.onToggleAuthClick();
                                }),
                                (n.onNavOpen = function () {
                                    n.setViewState({ navCollapsed: !1 });
                                }),
                                (n.onNavClose = function () {
                                    n.setViewState({ navCollapsed: !0 });
                                }),
                                (n.onToggleAuthClick = function () {
                                    n.setViewState({ isAuthOpen: !n.viewState.isAuthOpen }), n.body && n.body.classList.toggle("main-page_non-scroll");
                                }),
                                n
                            );
                        }
                        return (
                            _()(t, e),
                            l()(t, [
                                {
                                    key: "componentDidMount",
                                    value: function () {
                                        var e = k.a.country.toLowerCase(),
                                            t = this.body;
                                        t &&
                                            ((t.className = T()(t.className, "country-".concat(e), "lang-".concat(k.a.lang), "not-logged", { "is-sng": Object(P.a)(e), "not-sng": !Object(P.a)(e), "is-webview": Object(I.L)() })),
                                            t.setAttribute("data-theme", "olymp_dark"));
                                        var n = N.a.parse(window.location.hash);
                                        "action" in n && "change-pass" === n.action && this.setViewState({ isAuthOpen: !0 });
                                    },
                                },
                                {
                                    key: "setViewState",
                                    value: function (e) {
                                        Object(S.set)(this.viewState, e);
                                    },
                                },
                                {
                                    key: "sendAppButtonStatistic",
                                    value: function () {
                                        Object(I.r)({ event: "uaGtmEvents_clicks", eventCategory: "main_page", eventAction: "download_app", eventLabel: "download_app" });
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this,
                                            t = k.a.page,
                                            n = k.a.userId,
                                            r = k.a.lang;
                                        return w.a.createElement(
                                            "div",
                                            { className: T()("p-home", "p-home_".concat(r)), "data-locale": this.props.locale },
                                            w.a.createElement(j.a, { classContainerName: "p-home__container" }),
                                            w.a.createElement(
                                                "div",
                                                { className: "p-home__content" },
                                                w.a.createElement(M.a, {
                                                    className: "p-home__header",
                                                    classNameContainer: "p-home__container",
                                                    lang: r,
                                                    onLogin: this.onSignIn,
                                                    onNavigationClick: this.onNavOpen,
                                                    onRegistration: this.onSignUp,
                                                    userId: n,
                                                }),
                                                w.a.createElement(O.Observer, null, function () {
                                                    return w.a.createElement(F.a, { collapsed: e.viewState.navCollapsed, lang: r, page: t, onNavClose: e.onNavClose, onSignIn: e.onSignIn, onSignUp: e.onSignUp, isPlatform: !1, urlLang: "" });
                                                }),
                                                w.a.createElement(
                                                    "div",
                                                    { className: "p-home__main-content p-home__container", dir: Object(I.G)(this.props.locale) ? "rtl" : "ltr" },
                                                    w.a.createElement(oe, { className: "p-home__section p-home__welcome", onButtonDesktopClick: this.onToggleAuthClick, onButtonAppClick: this.sendAppButtonStatistic, userId: n }),
                                                    w.a.createElement(Fe, { className: "p-home__section", lang: r }),
                                                    w.a.createElement(Ye, { className: "p-home__section", onButtonDesktopClick: this.onToggleAuthClick, onButtonAppClick: this.sendAppButtonStatistic, userId: n }),
                                                    w.a.createElement(Qe, { className: "p-home__section", onButtonDesktopClick: this.onToggleAuthClick, onButtonAppClick: this.sendAppButtonStatistic, userId: n }),
                                                    w.a.createElement(st, { className: "p-home__section", onSignUp: this.onSignUp, userId: n }),
                                                    w.a.createElement(Ut, { className: "p-home__section", lang: r, onButtonDesktopClick: this.onToggleAuthClick, onButtonAppClick: this.sendAppButtonStatistic, userId: n })
                                                ),
                                                w.a.createElement(L.a, { lang: r, theme: C.cd.DARK, userId: n }),
                                                w.a.createElement(O.Observer, null, function () {
                                                    return w.a.createElement(D.a, { className: "p-home__auth", onClick: e.onToggleAuthClick, isActive: e.viewState.isAuthOpen });
                                                })
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(w.a.Component)),
                    (qe = E()(Xe.prototype, "viewState", [S.observable], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return x;
                        },
                    })),
                    E()(Xe.prototype, "setViewState", [S.action], Object.getOwnPropertyDescriptor(Xe.prototype, "setViewState"), Xe.prototype),
                    Xe);
            Object(r.a)(), Object(o.a)(Gt, "pages/Home");
        },
        YhIr: function (e, t, n) {
            "use strict";
            var r = n("9liC"),
                o = n("X6VK"),
                i = n("UnHL"),
                a = n("iJnn"),
                c = n("2LOZ"),
                s = n("Sp5b"),
                u = n("CIiV"),
                l = n("pB2m");
            o(
                o.S +
                    o.F *
                        !n("zlqh")(function (e) {
                            Array.from(e);
                        }),
                "Array",
                {
                    from: function (e) {
                        var t,
                            n,
                            o,
                            f,
                            d = i(e),
                            p = "function" == typeof this ? this : Array,
                            m = arguments.length,
                            h = m > 1 ? arguments[1] : void 0,
                            v = void 0 !== h,
                            g = 0,
                            _ = l(d);
                        if ((v && (h = r(h, m > 2 ? arguments[2] : void 0, 2)), void 0 == _ || (p == Array && c(_)))) for (n = new p((t = s(d.length))); t > g; g++) u(n, g, v ? h(d[g], g) : d[g]);
                        else for (f = _.call(d), n = new p(); !(o = f.next()).done; g++) u(n, g, v ? a(f, h, [o.value, g], !0) : o.value);
                        return (n.length = g), n;
                    },
                }
            );
        },
        Yvte: function (e, t) {
            e.exports = function (e) {
                try {
                    return { e: !1, v: e() };
                } catch (e) {
                    return { e: !0, v: e };
                }
            };
        },
        Yw8D: function (e, t, n) {
            n("b01t")("Int32", 4, function (e) {
                return function (t, n, r) {
                    return e(this, t, n, r);
                };
            });
        },
        Z8gF: function (e, t, n) {
            "use strict";
            var r = n("PAFS"),
                o = n("UnHL"),
                i = n("Sp5b"),
                a = n("mvii"),
                c = n("dVhv"),
                s = n("Fu0I"),
                u = Math.max,
                l = Math.min,
                f = Math.floor,
                d = /\$([$&`']|\d\d?|<[^>]*>)/g,
                p = /\$([$&`']|\d\d?)/g;
            n("Wifh")("replace", 2, function (e, t, n, m) {
                return [
                    function (r, o) {
                        var i = e(this),
                            a = void 0 == r ? void 0 : r[t];
                        return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o);
                    },
                    function (e, t) {
                        var o = m(n, e, this, t);
                        if (o.done) return o.value;
                        var f = r(e),
                            d = String(this),
                            p = "function" == typeof t;
                        p || (t = String(t));
                        var v = f.global;
                        if (v) {
                            var g = f.unicode;
                            f.lastIndex = 0;
                        }
                        for (var _ = []; ; ) {
                            var y = s(f, d);
                            if (null === y) break;
                            if ((_.push(y), !v)) break;
                            "" === String(y[0]) && (f.lastIndex = c(d, i(f.lastIndex), g));
                        }
                        for (var E, b = "", w = 0, S = 0; S < _.length; S++) {
                            y = _[S];
                            for (var O = String(y[0]), A = u(l(a(y.index), d.length), 0), T = [], R = 1; R < y.length; R++) T.push(void 0 === (E = y[R]) ? E : String(E));
                            var N = y.groups;
                            if (p) {
                                var I = [O].concat(T, A, d);
                                void 0 !== N && I.push(N);
                                var C = String(t.apply(void 0, I));
                            } else C = h(O, d, A, T, N, t);
                            A >= w && ((b += d.slice(w, A) + C), (w = A + O.length));
                        }
                        return b + d.slice(w);
                    },
                ];
                function h(e, t, r, i, a, c) {
                    var s = r + e.length,
                        u = i.length,
                        l = p;
                    return (
                        void 0 !== a && ((a = o(a)), (l = d)),
                        n.call(c, l, function (n, o) {
                            var c;
                            switch (o.charAt(0)) {
                                case "$":
                                    return "$";
                                case "&":
                                    return e;
                                case "`":
                                    return t.slice(0, r);
                                case "'":
                                    return t.slice(s);
                                case "<":
                                    c = a[o.slice(1, -1)];
                                    break;
                                default:
                                    var l = +o;
                                    if (0 === l) return n;
                                    if (l > u) {
                                        var d = f(l / 10);
                                        return 0 === d ? n : d <= u ? (void 0 === i[d - 1] ? o.charAt(1) : i[d - 1] + o.charAt(1)) : n;
                                    }
                                    c = i[l - 1];
                            }
                            return void 0 === c ? "" : c;
                        })
                    );
                }
            });
        },
        ZVIm: function (e, t, n) {
            var r = n("R5TD"),
                o = n("P56o"),
                i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
            (e.exports = function (e, t) {
                return i[e] || (i[e] = void 0 !== t ? t : {});
            })("versions", []).push({ version: r.version, mode: n("wEu9") ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
        },
        ZYEx: function (e, t, n) {
            "use strict";
            e.exports = function (e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t),
                    o = n.length;
                if (r.length !== o) return !1;
                for (var i = 0; i < o; i++) {
                    var a = n[i];
                    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1;
                }
                return !0;
            };
        },
        ZZSK: function (e, t, n) {
            e.exports = n.p + "../images/metaTrader4.eb8cae04.png";
        },
        ZmEd: function (e, t) {
            e.exports = function (e) {
                return (
                    e.webpackPolyfill ||
                        ((e.deprecate = function () {}),
                        (e.paths = []),
                        e.children || (e.children = []),
                        Object.defineProperty(e, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return e.l;
                            },
                        }),
                        Object.defineProperty(e, "id", {
                            enumerable: !0,
                            get: function () {
                                return e.i;
                            },
                        }),
                        (e.webpackPolyfill = 1)),
                    e
                );
            };
        },
        Zrjs: function (e, t, n) {
            "use strict";
            var r = n("ovh1");
            e.exports = function (e, t) {
                t = t || {};
                var n = {},
                    o = ["url", "method", "params", "data"],
                    i = ["headers", "auth", "proxy"],
                    a = [
                        "baseURL",
                        "url",
                        "transformRequest",
                        "transformResponse",
                        "paramsSerializer",
                        "timeout",
                        "withCredentials",
                        "adapter",
                        "responseType",
                        "xsrfCookieName",
                        "xsrfHeaderName",
                        "onUploadProgress",
                        "onDownloadProgress",
                        "maxContentLength",
                        "validateStatus",
                        "maxRedirects",
                        "httpAgent",
                        "httpsAgent",
                        "cancelToken",
                        "socketPath",
                    ];
                r.forEach(o, function (e) {
                    void 0 !== t[e] && (n[e] = t[e]);
                }),
                    r.forEach(i, function (o) {
                        r.isObject(t[o]) ? (n[o] = r.deepMerge(e[o], t[o])) : void 0 !== t[o] ? (n[o] = t[o]) : r.isObject(e[o]) ? (n[o] = r.deepMerge(e[o])) : void 0 !== e[o] && (n[o] = e[o]);
                    }),
                    r.forEach(a, function (r) {
                        void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
                    });
                var c = o.concat(i).concat(a),
                    s = Object.keys(t).filter(function (e) {
                        return -1 === c.indexOf(e);
                    });
                return (
                    r.forEach(s, function (r) {
                        void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
                    }),
                    n
                );
            };
        },
        aECo: function (e, t, n) {
            "use strict";
            var r = n("2KG9");
            e.exports = function (e, t, n) {
                var o = n.config.validateStatus;
                !o || o(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n));
            };
        },
        aaOZ: function (e, t, n) {
            var r = n("X6VK"),
                o = Math.abs;
            r(r.S, "Math", {
                hypot: function (e, t) {
                    for (var n, r, i = 0, a = 0, c = arguments.length, s = 0; a < c; ) s < (n = o(arguments[a++])) ? ((i = i * (r = s / n) * r + 1), (s = n)) : (i += n > 0 ? (r = n / s) * r : n);
                    return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(i);
                },
            });
        },
        "ao5+": function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("uRBY")(!1);
            r(r.P, "String", {
                codePointAt: function (e) {
                    return o(this, e);
                },
            });
        },
        asZ9: function (e, t, n) {
            "use strict";
            var r = n("NVL/"),
                o = n("PAFS"),
                i = n("5Fu2"),
                a = n("dVhv"),
                c = n("Sp5b"),
                s = n("Fu0I"),
                u = n("lAKj"),
                l = n("E7Vc"),
                f = Math.min,
                d = [].push,
                p = !l(function () {
                    RegExp(4294967295, "y");
                });
            n("Wifh")("split", 2, function (e, t, n, l) {
                var m;
                return (
                    (m =
                        "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length
                            ? function (e, t) {
                                  var o = String(this);
                                  if (void 0 === e && 0 === t) return [];
                                  if (!r(e)) return n.call(o, e, t);
                                  for (
                                      var i,
                                          a,
                                          c,
                                          s = [],
                                          l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                                          f = 0,
                                          p = void 0 === t ? 4294967295 : t >>> 0,
                                          m = new RegExp(e.source, l + "g");
                                      (i = u.call(m, o)) && !((a = m.lastIndex) > f && (s.push(o.slice(f, i.index)), i.length > 1 && i.index < o.length && d.apply(s, i.slice(1)), (c = i[0].length), (f = a), s.length >= p));

                                  )
                                      m.lastIndex === i.index && m.lastIndex++;
                                  return f === o.length ? (!c && m.test("")) || s.push("") : s.push(o.slice(f)), s.length > p ? s.slice(0, p) : s;
                              }
                            : "0".split(void 0, 0).length
                            ? function (e, t) {
                                  return void 0 === e && 0 === t ? [] : n.call(this, e, t);
                              }
                            : n),
                    [
                        function (n, r) {
                            var o = e(this),
                                i = void 0 == n ? void 0 : n[t];
                            return void 0 !== i ? i.call(n, o, r) : m.call(String(o), n, r);
                        },
                        function (e, t) {
                            var r = l(m, e, this, t, m !== n);
                            if (r.done) return r.value;
                            var u = o(e),
                                d = String(this),
                                h = i(u, RegExp),
                                v = u.unicode,
                                g = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (p ? "y" : "g"),
                                _ = new h(p ? u : "^(?:" + u.source + ")", g),
                                y = void 0 === t ? 4294967295 : t >>> 0;
                            if (0 === y) return [];
                            if (0 === d.length) return null === s(_, d) ? [d] : [];
                            for (var E = 0, b = 0, w = []; b < d.length; ) {
                                _.lastIndex = p ? b : 0;
                                var S,
                                    O = s(_, p ? d : d.slice(b));
                                if (null === O || (S = f(c(_.lastIndex + (p ? 0 : b)), d.length)) === E) b = a(d, b, v);
                                else {
                                    if ((w.push(d.slice(E, b)), w.length === y)) return w;
                                    for (var A = 1; A <= O.length - 1; A++) if ((w.push(O[A]), w.length === y)) return w;
                                    b = E = S;
                                }
                            }
                            return w.push(d.slice(E)), w;
                        },
                    ]
                );
            });
        },
        at5L: function (e, t, n) {
            var r = n("ezc+"),
                o = n("ml72"),
                i = n("sdkr")(!1),
                a = n("8kJd")("IE_PROTO");
            e.exports = function (e, t) {
                var n,
                    c = o(e),
                    s = 0,
                    u = [];
                for (n in c) n != a && r(c, n) && u.push(n);
                for (; t.length > s; ) r(c, (n = t[s++])) && (~i(u, n) || u.push(n));
                return u;
            };
        },
        "az+3": function (e, t, n) {
            var r = n("X6VK"),
                o = n("wUFM");
            r(r.S + r.F * (Number.parseFloat != o), "Number", { parseFloat: o });
        },
        b01t: function (e, t, n) {
            "use strict";
            if (n("GGqZ")) {
                var r = n("wEu9"),
                    o = n("P56o"),
                    i = n("E7Vc"),
                    a = n("X6VK"),
                    c = n("tW8y"),
                    s = n("Dhml"),
                    u = n("9liC"),
                    l = n("EusA"),
                    f = n("WWmS"),
                    d = n("tjmq"),
                    p = n("+edc"),
                    m = n("mvii"),
                    h = n("Sp5b"),
                    v = n("GdbT"),
                    g = n("BUlT"),
                    _ = n("5MU4"),
                    y = n("ezc+"),
                    E = n("OFVL"),
                    b = n("Bsg+"),
                    w = n("UnHL"),
                    S = n("2LOZ"),
                    O = n("Vx+c"),
                    A = n("A1KM"),
                    T = n("zIds").f,
                    R = n("pB2m"),
                    N = n("1Alt"),
                    I = n("9dxi"),
                    C = n("1wfo"),
                    x = n("sdkr"),
                    k = n("5Fu2"),
                    P = n("K/PF"),
                    j = n("Ibj2"),
                    L = n("zlqh"),
                    M = n("E8p1"),
                    D = n("Pfmf"),
                    F = n("JKk3"),
                    V = n("U1KF"),
                    B = n("1Tj+"),
                    U = V.f,
                    G = B.f,
                    K = o.RangeError,
                    z = o.TypeError,
                    H = o.Uint8Array,
                    W = Array.prototype,
                    X = s.ArrayBuffer,
                    q = s.DataView,
                    Y = C(0),
                    J = C(2),
                    Z = C(3),
                    Q = C(4),
                    $ = C(5),
                    ee = C(6),
                    te = x(!0),
                    ne = x(!1),
                    re = P.values,
                    oe = P.keys,
                    ie = P.entries,
                    ae = W.lastIndexOf,
                    ce = W.reduce,
                    se = W.reduceRight,
                    ue = W.join,
                    le = W.sort,
                    fe = W.slice,
                    de = W.toString,
                    pe = W.toLocaleString,
                    me = I("iterator"),
                    he = I("toStringTag"),
                    ve = N("typed_constructor"),
                    ge = N("def_constructor"),
                    _e = c.CONSTR,
                    ye = c.TYPED,
                    Ee = c.VIEW,
                    be = C(1, function (e, t) {
                        return Te(k(e, e[ge]), t);
                    }),
                    we = i(function () {
                        return 1 === new H(new Uint16Array([1]).buffer)[0];
                    }),
                    Se =
                        !!H &&
                        !!H.prototype.set &&
                        i(function () {
                            new H(1).set({});
                        }),
                    Oe = function (e, t) {
                        var n = m(e);
                        if (n < 0 || n % t) throw K("Wrong offset!");
                        return n;
                    },
                    Ae = function (e) {
                        if (b(e) && ye in e) return e;
                        throw z(e + " is not a typed array!");
                    },
                    Te = function (e, t) {
                        if (!(b(e) && ve in e)) throw z("It is not a typed array constructor!");
                        return new e(t);
                    },
                    Re = function (e, t) {
                        return Ne(k(e, e[ge]), t);
                    },
                    Ne = function (e, t) {
                        for (var n = 0, r = t.length, o = Te(e, r); r > n; ) o[n] = t[n++];
                        return o;
                    },
                    Ie = function (e, t, n) {
                        U(e, t, {
                            get: function () {
                                return this._d[n];
                            },
                        });
                    },
                    Ce = function (e) {
                        var t,
                            n,
                            r,
                            o,
                            i,
                            a,
                            c = w(e),
                            s = arguments.length,
                            l = s > 1 ? arguments[1] : void 0,
                            f = void 0 !== l,
                            d = R(c);
                        if (void 0 != d && !S(d)) {
                            for (a = d.call(c), r = [], t = 0; !(i = a.next()).done; t++) r.push(i.value);
                            c = r;
                        }
                        for (f && s > 2 && (l = u(l, arguments[2], 2)), t = 0, n = h(c.length), o = Te(this, n); n > t; t++) o[t] = f ? l(c[t], t) : c[t];
                        return o;
                    },
                    xe = function () {
                        for (var e = 0, t = arguments.length, n = Te(this, t); t > e; ) n[e] = arguments[e++];
                        return n;
                    },
                    ke =
                        !!H &&
                        i(function () {
                            pe.call(new H(1));
                        }),
                    Pe = function () {
                        return pe.apply(ke ? fe.call(Ae(this)) : Ae(this), arguments);
                    },
                    je = {
                        copyWithin: function (e, t) {
                            return F.call(Ae(this), e, t, arguments.length > 2 ? arguments[2] : void 0);
                        },
                        every: function (e) {
                            return Q(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0);
                        },
                        fill: function (e) {
                            return D.apply(Ae(this), arguments);
                        },
                        filter: function (e) {
                            return Re(this, J(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0));
                        },
                        find: function (e) {
                            return $(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0);
                        },
                        findIndex: function (e) {
                            return ee(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0);
                        },
                        forEach: function (e) {
                            Y(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0);
                        },
                        indexOf: function (e) {
                            return ne(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0);
                        },
                        includes: function (e) {
                            return te(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0);
                        },
                        join: function (e) {
                            return ue.apply(Ae(this), arguments);
                        },
                        lastIndexOf: function (e) {
                            return ae.apply(Ae(this), arguments);
                        },
                        map: function (e) {
                            return be(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0);
                        },
                        reduce: function (e) {
                            return ce.apply(Ae(this), arguments);
                        },
                        reduceRight: function (e) {
                            return se.apply(Ae(this), arguments);
                        },
                        reverse: function () {
                            for (var e, t = Ae(this).length, n = Math.floor(t / 2), r = 0; r < n; ) (e = this[r]), (this[r++] = this[--t]), (this[t] = e);
                            return this;
                        },
                        some: function (e) {
                            return Z(Ae(this), e, arguments.length > 1 ? arguments[1] : void 0);
                        },
                        sort: function (e) {
                            return le.call(Ae(this), e);
                        },
                        subarray: function (e, t) {
                            var n = Ae(this),
                                r = n.length,
                                o = g(e, r);
                            return new (k(n, n[ge]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, h((void 0 === t ? r : g(t, r)) - o));
                        },
                    },
                    Le = function (e, t) {
                        return Re(this, fe.call(Ae(this), e, t));
                    },
                    Me = function (e) {
                        Ae(this);
                        var t = Oe(arguments[1], 1),
                            n = this.length,
                            r = w(e),
                            o = h(r.length),
                            i = 0;
                        if (o + t > n) throw K("Wrong length!");
                        for (; i < o; ) this[t + i] = r[i++];
                    },
                    De = {
                        entries: function () {
                            return ie.call(Ae(this));
                        },
                        keys: function () {
                            return oe.call(Ae(this));
                        },
                        values: function () {
                            return re.call(Ae(this));
                        },
                    },
                    Fe = function (e, t) {
                        return b(e) && e[ye] && "symbol" != typeof t && t in e && String(+t) == String(t);
                    },
                    Ve = function (e, t) {
                        return Fe(e, (t = _(t, !0))) ? f(2, e[t]) : G(e, t);
                    },
                    Be = function (e, t, n) {
                        return !(Fe(e, (t = _(t, !0))) && b(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || (y(n, "writable") && !n.writable) || (y(n, "enumerable") && !n.enumerable)
                            ? U(e, t, n)
                            : ((e[t] = n.value), e);
                    };
                _e || ((B.f = Ve), (V.f = Be)),
                    a(a.S + a.F * !_e, "Object", { getOwnPropertyDescriptor: Ve, defineProperty: Be }),
                    i(function () {
                        de.call({});
                    }) &&
                        (de = pe = function () {
                            return ue.call(this);
                        });
                var Ue = p({}, je);
                p(Ue, De),
                    d(Ue, me, De.values),
                    p(Ue, { slice: Le, set: Me, constructor: function () {}, toString: de, toLocaleString: Pe }),
                    Ie(Ue, "buffer", "b"),
                    Ie(Ue, "byteOffset", "o"),
                    Ie(Ue, "byteLength", "l"),
                    Ie(Ue, "length", "e"),
                    U(Ue, he, {
                        get: function () {
                            return this[ye];
                        },
                    }),
                    (e.exports = function (e, t, n, s) {
                        var u = e + ((s = !!s) ? "Clamped" : "") + "Array",
                            f = "get" + e,
                            p = "set" + e,
                            m = o[u],
                            g = m || {},
                            _ = m && A(m),
                            y = !m || !c.ABV,
                            w = {},
                            S = m && m.prototype,
                            R = function (e, n) {
                                U(e, n, {
                                    get: function () {
                                        return (function (e, n) {
                                            var r = e._d;
                                            return r.v[f](n * t + r.o, we);
                                        })(this, n);
                                    },
                                    set: function (e) {
                                        return (function (e, n, r) {
                                            var o = e._d;
                                            s && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), o.v[p](n * t + o.o, r, we);
                                        })(this, n, e);
                                    },
                                    enumerable: !0,
                                });
                            };
                        y
                            ? ((m = n(function (e, n, r, o) {
                                  l(e, m, u, "_d");
                                  var i,
                                      a,
                                      c,
                                      s,
                                      f = 0,
                                      p = 0;
                                  if (b(n)) {
                                      if (!(n instanceof X || "ArrayBuffer" == (s = E(n)) || "SharedArrayBuffer" == s)) return ye in n ? Ne(m, n) : Ce.call(m, n);
                                      (i = n), (p = Oe(r, t));
                                      var g = n.byteLength;
                                      if (void 0 === o) {
                                          if (g % t) throw K("Wrong length!");
                                          if ((a = g - p) < 0) throw K("Wrong length!");
                                      } else if ((a = h(o) * t) + p > g) throw K("Wrong length!");
                                      c = a / t;
                                  } else (c = v(n)), (i = new X((a = c * t)));
                                  for (d(e, "_d", { b: i, o: p, l: a, e: c, v: new q(i) }); f < c; ) R(e, f++);
                              })),
                              (S = m.prototype = O(Ue)),
                              d(S, "constructor", m))
                            : (i(function () {
                                  m(1);
                              }) &&
                                  i(function () {
                                      new m(-1);
                                  }) &&
                                  L(function (e) {
                                      new m(), new m(null), new m(1.5), new m(e);
                                  }, !0)) ||
                              ((m = n(function (e, n, r, o) {
                                  var i;
                                  return (
                                      l(e, m, u),
                                      b(n)
                                          ? n instanceof X || "ArrayBuffer" == (i = E(n)) || "SharedArrayBuffer" == i
                                              ? void 0 !== o
                                                  ? new g(n, Oe(r, t), o)
                                                  : void 0 !== r
                                                  ? new g(n, Oe(r, t))
                                                  : new g(n)
                                              : ye in n
                                              ? Ne(m, n)
                                              : Ce.call(m, n)
                                          : new g(v(n))
                                  );
                              })),
                              Y(_ !== Function.prototype ? T(g).concat(T(_)) : T(g), function (e) {
                                  e in m || d(m, e, g[e]);
                              }),
                              (m.prototype = S),
                              r || (S.constructor = m));
                        var N = S[me],
                            I = !!N && ("values" == N.name || void 0 == N.name),
                            C = De.values;
                        d(m, ve, !0),
                            d(S, ye, u),
                            d(S, Ee, !0),
                            d(S, ge, m),
                            (s ? new m(1)[he] == u : he in S) ||
                                U(S, he, {
                                    get: function () {
                                        return u;
                                    },
                                }),
                            (w[u] = m),
                            a(a.G + a.W + a.F * (m != g), w),
                            a(a.S, u, { BYTES_PER_ELEMENT: t }),
                            a(
                                a.S +
                                    a.F *
                                        i(function () {
                                            g.of.call(m, 1);
                                        }),
                                u,
                                { from: Ce, of: xe }
                            ),
                            "BYTES_PER_ELEMENT" in S || d(S, "BYTES_PER_ELEMENT", t),
                            a(a.P, u, je),
                            M(u),
                            a(a.P + a.F * Se, u, { set: Me }),
                            a(a.P + a.F * !I, u, De),
                            r || S.toString == de || (S.toString = de),
                            a(
                                a.P +
                                    a.F *
                                        i(function () {
                                            new m(1).slice();
                                        }),
                                u,
                                { slice: Le }
                            ),
                            a(
                                a.P +
                                    a.F *
                                        (i(function () {
                                            return [1, 2].toLocaleString() != new m([1, 2]).toLocaleString();
                                        }) ||
                                            !i(function () {
                                                S.toLocaleString.call([1, 2]);
                                            })),
                                u,
                                { toLocaleString: Pe }
                            ),
                            (j[u] = I ? N : C),
                            r || I || d(S, me, C);
                    });
            } else e.exports = function () {};
        },
        b36Z: function (e, t, n) {},
        b3pB: function (e, t, n) {
            var r = n("Bsg+"),
                o = n("zIP/").onFreeze;
            n("gRlk")("preventExtensions", function (e) {
                return function (t) {
                    return e && r(t) ? e(o(t)) : t;
                };
            });
        },
        b8Rm: function (e, t) {
            e.exports = function (e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e;
            };
        },
        b9mj: function (e, t) {},
        bRtl: function (e, t, n) {
            "use strict";
            var r = n("ovh1"),
                o = n("71kK"),
                i = { "Content-Type": "application/x-www-form-urlencoded" };
            function a(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
            }
            var c,
                s = {
                    adapter: ("undefined" != typeof XMLHttpRequest ? (c = n("zf4f")) : "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) && (c = n("zf4f")), c),
                    transformRequest: [
                        function (e, t) {
                            return (
                                o(t, "Accept"),
                                o(t, "Content-Type"),
                                r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e)
                                    ? e
                                    : r.isArrayBufferView(e)
                                    ? e.buffer
                                    : r.isURLSearchParams(e)
                                    ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
                                    : r.isObject(e)
                                    ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e))
                                    : e
                            );
                        },
                    ],
                    transformResponse: [
                        function (e) {
                            if ("string" == typeof e)
                                try {
                                    e = JSON.parse(e);
                                } catch (e) {}
                            return e;
                        },
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function (e) {
                        return e >= 200 && e < 300;
                    },
                };
            (s.headers = { common: { Accept: "application/json, text/plain, */*" } }),
                r.forEach(["delete", "get", "head"], function (e) {
                    s.headers[e] = {};
                }),
                r.forEach(["post", "put", "patch"], function (e) {
                    s.headers[e] = r.merge(i);
                }),
                (e.exports = s);
        },
        bb6g: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, "__extends", function () {
                    return o;
                }),
                n.d(t, "__assign", function () {
                    return i;
                }),
                n.d(t, "__rest", function () {
                    return a;
                }),
                n.d(t, "__decorate", function () {
                    return c;
                }),
                n.d(t, "__param", function () {
                    return s;
                }),
                n.d(t, "__metadata", function () {
                    return u;
                }),
                n.d(t, "__awaiter", function () {
                    return l;
                }),
                n.d(t, "__generator", function () {
                    return f;
                }),
                n.d(t, "__exportStar", function () {
                    return d;
                }),
                n.d(t, "__values", function () {
                    return p;
                }),
                n.d(t, "__read", function () {
                    return m;
                }),
                n.d(t, "__spread", function () {
                    return h;
                }),
                n.d(t, "__spreadArrays", function () {
                    return v;
                }),
                n.d(t, "__await", function () {
                    return g;
                }),
                n.d(t, "__asyncGenerator", function () {
                    return _;
                }),
                n.d(t, "__asyncDelegator", function () {
                    return y;
                }),
                n.d(t, "__asyncValues", function () {
                    return E;
                }),
                n.d(t, "__makeTemplateObject", function () {
                    return b;
                }),
                n.d(t, "__importStar", function () {
                    return w;
                }),
                n.d(t, "__importDefault", function () {
                    return S;
                });
            var r = function (e, t) {
                return (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    })(e, t);
            };
            function o(e, t) {
                function n() {
                    this.constructor = e;
                }
                r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }
            var i = function () {
                return (i =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                }
                return n;
            }
            function c(e, t, n, r) {
                var o,
                    i = arguments.length,
                    a = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
                return i > 3 && a && Object.defineProperty(t, n, a), a;
            }
            function s(e, t) {
                return function (n, r) {
                    t(n, r, e);
                };
            }
            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            }
            function l(e, t, n, r) {
                return new (n || (n = Promise))(function (o, i) {
                    function a(e) {
                        try {
                            s(r.next(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e));
                        } catch (e) {
                            i(e);
                        }
                    }
                    function s(e) {
                        e.done
                            ? o(e.value)
                            : new n(function (t) {
                                  t(e.value);
                              }).then(a, c);
                    }
                    s((r = r.apply(e, t || [])).next());
                });
            }
            function f(e, t) {
                var n,
                    r,
                    o,
                    i,
                    a = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (i = { next: c(0), throw: c(1), return: c(2) }),
                    "function" == typeof Symbol &&
                        (i[Symbol.iterator] = function () {
                            return this;
                        }),
                    i
                );
                function c(i) {
                    return function (c) {
                        return (function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)) return o;
                                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, { value: i[1], done: !1 };
                                        case 5:
                                            a.label++, (r = i[1]), (i = [0]);
                                            continue;
                                        case 7:
                                            (i = a.ops.pop()), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue;
                                            }
                                            if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                a.label = i[1];
                                                break;
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                (a.label = o[1]), (o = i);
                                                break;
                                            }
                                            if (o && a.label < o[2]) {
                                                (a.label = o[2]), a.ops.push(i);
                                                break;
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue;
                                    }
                                    i = t.call(e, a);
                                } catch (e) {
                                    (i = [6, e]), (r = 0);
                                } finally {
                                    n = o = 0;
                                }
                            if (5 & i[0]) throw i[1];
                            return { value: i[0] ? i[1] : void 0, done: !0 };
                        })([i, c]);
                    };
                }
            }
            function d(e, t) {
                for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
            }
            function p(e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator],
                    n = 0;
                return t
                    ? t.call(e)
                    : {
                          next: function () {
                              return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                          },
                      };
            }
            function m(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r,
                    o,
                    i = n.call(e),
                    a = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
                } catch (e) {
                    o = { error: e };
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                return a;
            }
            function h() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(m(arguments[t]));
                return e;
            }
            function v() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) r[o] = i[a];
                return r;
            }
            function g(e) {
                return this instanceof g ? ((this.v = e), this) : new g(e);
            }
            function _(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r,
                    o = n.apply(e, t || []),
                    i = [];
                return (
                    (r = {}),
                    a("next"),
                    a("throw"),
                    a("return"),
                    (r[Symbol.asyncIterator] = function () {
                        return this;
                    }),
                    r
                );
                function a(e) {
                    o[e] &&
                        (r[e] = function (t) {
                            return new Promise(function (n, r) {
                                i.push([e, t, n, r]) > 1 || c(e, t);
                            });
                        });
                }
                function c(e, t) {
                    try {
                        (n = o[e](t)).value instanceof g ? Promise.resolve(n.value.v).then(s, u) : l(i[0][2], n);
                    } catch (e) {
                        l(i[0][3], e);
                    }
                    var n;
                }
                function s(e) {
                    c("next", e);
                }
                function u(e) {
                    c("throw", e);
                }
                function l(e, t) {
                    e(t), i.shift(), i.length && c(i[0][0], i[0][1]);
                }
            }
            function y(e) {
                var t, n;
                return (
                    (t = {}),
                    r("next"),
                    r("throw", function (e) {
                        throw e;
                    }),
                    r("return"),
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                    t
                );
                function r(r, o) {
                    t[r] = e[r]
                        ? function (t) {
                              return (n = !n) ? { value: g(e[r](t)), done: "return" === r } : o ? o(t) : t;
                          }
                        : o;
                }
            }
            function E(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t,
                    n = e[Symbol.asyncIterator];
                return n
                    ? n.call(e)
                    : ((e = p(e)),
                      (t = {}),
                      r("next"),
                      r("throw"),
                      r("return"),
                      (t[Symbol.asyncIterator] = function () {
                          return this;
                      }),
                      t);
                function r(n) {
                    t[n] =
                        e[n] &&
                        function (t) {
                            return new Promise(function (r, o) {
                                (function (e, t, n, r) {
                                    Promise.resolve(r).then(function (t) {
                                        e({ value: t, done: n });
                                    }, t);
                                })(r, o, (t = e[n](t)).done, t.value);
                            });
                        };
                }
            }
            function b(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
            }
            function w(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return (t.default = e), t;
            }
            function S(e) {
                return e && e.__esModule ? e : { default: e };
            }
        },
        bpc9: function (e, t, n) {
            var r = n("X6VK"),
                o = Math.atanh;
            r(r.S + r.F * !(o && 1 / o(-0) < 0), "Math", {
                atanh: function (e) {
                    return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2;
                },
            });
        },
        c35s: function (e, t) {
            e.exports = function (e, t, n, r, o) {
                var i = {};
                return (
                    Object.keys(r).forEach(function (e) {
                        i[e] = r[e];
                    }),
                    (i.enumerable = !!i.enumerable),
                    (i.configurable = !!i.configurable),
                    ("value" in i || i.initializer) && (i.writable = !0),
                    (i = n
                        .slice()
                        .reverse()
                        .reduce(function (n, r) {
                            return r(e, t, n) || n;
                        }, i)),
                    o && void 0 !== i.initializer && ((i.value = i.initializer ? i.initializer.call(o) : void 0), (i.initializer = void 0)),
                    void 0 === i.initializer && (Object.defineProperty(e, t, i), (i = null)),
                    i
                );
            };
        },
        cON5: function (e, t, n) {
            "use strict";
            var r = n("ovh1");
            e.exports = r.isStandardBrowserEnv()
                ? (function () {
                      var e,
                          t = /(msie|trident)/i.test(navigator.userAgent),
                          n = document.createElement("a");
                      function o(e) {
                          var r = e;
                          return (
                              t && (n.setAttribute("href", r), (r = n.href)),
                              n.setAttribute("href", r),
                              {
                                  href: n.href,
                                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                                  host: n.host,
                                  search: n.search ? n.search.replace(/^\?/, "") : "",
                                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                                  hostname: n.hostname,
                                  port: n.port,
                                  pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
                              }
                          );
                      }
                      return (
                          (e = o(window.location.href)),
                          function (t) {
                              var n = r.isString(t) ? o(t) : t;
                              return n.protocol === e.protocol && n.host === e.host;
                          }
                      );
                  })()
                : function () {
                      return !0;
                  };
        },
        cb3D: function (e, t, n) {
            var r = n("Sp5b"),
                o = n("p1Jl"),
                i = n("GCOZ");
            e.exports = function (e, t, n, a) {
                var c = String(i(e)),
                    s = c.length,
                    u = void 0 === n ? " " : String(n),
                    l = r(t);
                if (l <= s || "" == u) return c;
                var f = l - s,
                    d = o.call(u, Math.ceil(f / u.length));
                return d.length > f && (d = d.slice(0, f)), a ? d + c : c + d;
            };
        },
        cljR: function (e, t, n) {
            var r = n("Bsg+");
            n("gRlk")("isFrozen", function (e) {
                return function (t) {
                    return !r(t) || (!!e && e(t));
                };
            });
        },
        cr8s: function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("UnHL"),
                i = n("b8Rm"),
                a = n("U1KF");
            n("GGqZ") &&
                r(r.P + n("j3QZ"), "Object", {
                    __defineGetter__: function (e, t) {
                        a.f(o(this), e, { get: i(t), enumerable: !0, configurable: !0 });
                    },
                });
        },
        czhI: function (e, t, n) {
            e.exports = n("TDIH");
        },
        "d8+F": function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("tW8y"),
                i = n("Dhml"),
                a = n("PAFS"),
                c = n("BUlT"),
                s = n("Sp5b"),
                u = n("Bsg+"),
                l = n("P56o").ArrayBuffer,
                f = n("5Fu2"),
                d = i.ArrayBuffer,
                p = i.DataView,
                m = o.ABV && l.isView,
                h = d.prototype.slice,
                v = o.VIEW;
            r(r.G + r.W + r.F * (l !== d), { ArrayBuffer: d }),
                r(r.S + r.F * !o.CONSTR, "ArrayBuffer", {
                    isView: function (e) {
                        return (m && m(e)) || (u(e) && v in e);
                    },
                }),
                r(
                    r.P +
                        r.U +
                        r.F *
                            n("E7Vc")(function () {
                                return !new d(2).slice(1, void 0).byteLength;
                            }),
                    "ArrayBuffer",
                    {
                        slice: function (e, t) {
                            if (void 0 !== h && void 0 === t) return h.call(a(this), e);
                            for (var n = a(this).byteLength, r = c(e, n), o = c(void 0 === t ? n : t, n), i = new (f(this, d))(s(o - r)), u = new p(this), l = new p(i), m = 0; r < o; ) l.setUint8(m++, u.getUint8(r++));
                            return i;
                        },
                    }
                ),
                n("E8p1")("ArrayBuffer");
        },
        d9xB: function (e, t, n) {
            "use strict";
            var r;
            function o(e) {
                return e.type === r.literal;
            }
            function i(e) {
                return e.type === r.argument;
            }
            function a(e) {
                return e.type === r.number;
            }
            function c(e) {
                return e.type === r.date;
            }
            function s(e) {
                return e.type === r.time;
            }
            function u(e) {
                return e.type === r.select;
            }
            function l(e) {
                return e.type === r.plural;
            }
            function f(e) {
                return e.type === r.pound;
            }
            function d(e) {
                return !(!e || "object" != typeof e || 0 !== e.type);
            }
            function p(e) {
                return !(!e || "object" != typeof e || 1 !== e.type);
            }
            !(function (e) {
                (e[(e.literal = 0)] = "literal"),
                    (e[(e.argument = 1)] = "argument"),
                    (e[(e.number = 2)] = "number"),
                    (e[(e.date = 3)] = "date"),
                    (e[(e.time = 4)] = "time"),
                    (e[(e.select = 5)] = "select"),
                    (e[(e.plural = 6)] = "plural"),
                    (e[(e.pound = 7)] = "pound");
            })(r || (r = {}));
            var m,
                h =
                    ((m = function (e, t) {
                        return (m =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                            })(e, t);
                    }),
                    function (e, t) {
                        function n() {
                            this.constructor = e;
                        }
                        m(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
                    }),
                v = function () {
                    return (v =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                g = (function (e) {
                    function t(n, r, o, i) {
                        var a = e.call(this) || this;
                        return (a.message = n), (a.expected = r), (a.found = o), (a.location = i), (a.name = "SyntaxError"), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, t), a;
                    }
                    return (
                        h(t, e),
                        (t.buildMessage = function (e, t) {
                            function n(e) {
                                return e.charCodeAt(0).toString(16).toUpperCase();
                            }
                            function r(e) {
                                return e
                                    .replace(/\\/g, "\\\\")
                                    .replace(/"/g, '\\"')
                                    .replace(/\0/g, "\\0")
                                    .replace(/\t/g, "\\t")
                                    .replace(/\n/g, "\\n")
                                    .replace(/\r/g, "\\r")
                                    .replace(/[\x00-\x0F]/g, function (e) {
                                        return "\\x0" + n(e);
                                    })
                                    .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                                        return "\\x" + n(e);
                                    });
                            }
                            function o(e) {
                                return e
                                    .replace(/\\/g, "\\\\")
                                    .replace(/\]/g, "\\]")
                                    .replace(/\^/g, "\\^")
                                    .replace(/-/g, "\\-")
                                    .replace(/\0/g, "\\0")
                                    .replace(/\t/g, "\\t")
                                    .replace(/\n/g, "\\n")
                                    .replace(/\r/g, "\\r")
                                    .replace(/[\x00-\x0F]/g, function (e) {
                                        return "\\x0" + n(e);
                                    })
                                    .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                                        return "\\x" + n(e);
                                    });
                            }
                            function i(e) {
                                switch (e.type) {
                                    case "literal":
                                        return '"' + r(e.text) + '"';
                                    case "class":
                                        var t = e.parts.map(function (e) {
                                            return Array.isArray(e) ? o(e[0]) + "-" + o(e[1]) : o(e);
                                        });
                                        return "[" + (e.inverted ? "^" : "") + t + "]";
                                    case "any":
                                        return "any character";
                                    case "end":
                                        return "end of input";
                                    case "other":
                                        return e.description;
                                }
                            }
                            return (
                                "Expected " +
                                (function (e) {
                                    var t,
                                        n,
                                        r = e.map(i);
                                    if ((r.sort(), r.length > 0)) {
                                        for (t = 1, n = 1; t < r.length; t++) r[t - 1] !== r[t] && ((r[n] = r[t]), n++);
                                        r.length = n;
                                    }
                                    switch (r.length) {
                                        case 1:
                                            return r[0];
                                        case 2:
                                            return r[0] + " or " + r[1];
                                        default:
                                            return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
                                    }
                                })(e) +
                                " but " +
                                ((a = t) ? '"' + r(a) + '"' : "end of input") +
                                " found."
                            );
                            var a;
                        }),
                        t
                    );
                })(Error);
            var _ = function (e, t) {
                    t = void 0 !== t ? t : {};
                    var n,
                        o = {},
                        i = { start: lt },
                        a = lt,
                        c = function (e) {
                            return e.join("");
                        },
                        s = function (e) {
                            return v({ type: r.literal, value: e }, Pt());
                        },
                        u = "#",
                        l = rt("#", !1),
                        f = function () {
                            return v({ type: r.pound }, Pt());
                        },
                        d = it("argumentElement"),
                        p = "{",
                        m = rt("{", !1),
                        h = "}",
                        _ = rt("}", !1),
                        y = function (e) {
                            return v({ type: r.argument, value: e }, Pt());
                        },
                        E = it("numberSkeletonId"),
                        b = /^['\/{}]/,
                        w = ot(["'", "/", "{", "}"], !1, !1),
                        S = { type: "any" },
                        O = it("numberSkeletonTokenOption"),
                        A = "/",
                        T = rt("/", !1),
                        R = function (e) {
                            return e;
                        },
                        N = it("numberSkeletonToken"),
                        I = function (e, t) {
                            return { stem: e, options: t };
                        },
                        C = function (e) {
                            return v({ type: 0, tokens: e }, Pt());
                        },
                        x = "::",
                        k = rt("::", !1),
                        P = function (e) {
                            return e;
                        },
                        j = function () {
                            return xt.push("numberArgStyle"), !0;
                        },
                        L = function (e) {
                            return xt.pop(), e.replace(/\s*$/, "");
                        },
                        M = ",",
                        D = rt(",", !1),
                        F = "number",
                        V = rt("number", !1),
                        B = function (e, t, n) {
                            return v({ type: "number" === t ? r.number : "date" === t ? r.date : r.time, style: n && n[2], value: e }, Pt());
                        },
                        U = "'",
                        G = rt("'", !1),
                        K = /^[^']/,
                        z = ot(["'"], !0, !1),
                        H = /^[^a-zA-Z'{}]/,
                        W = ot([["a", "z"], ["A", "Z"], "'", "{", "}"], !0, !1),
                        X = /^[a-zA-Z]/,
                        q = ot(
                            [
                                ["a", "z"],
                                ["A", "Z"],
                            ],
                            !1,
                            !1
                        ),
                        Y = function (e) {
                            return v({ type: 1, pattern: e }, Pt());
                        },
                        J = function () {
                            return xt.push("dateOrTimeArgStyle"), !0;
                        },
                        Z = "date",
                        Q = rt("date", !1),
                        $ = "time",
                        ee = rt("time", !1),
                        te = "plural",
                        ne = rt("plural", !1),
                        re = "selectordinal",
                        oe = rt("selectordinal", !1),
                        ie = "offset:",
                        ae = rt("offset:", !1),
                        ce = function (e, t, n, o) {
                            return v(
                                {
                                    type: r.plural,
                                    pluralType: "plural" === t ? "cardinal" : "ordinal",
                                    value: e,
                                    offset: n ? n[2] : 0,
                                    options: o.reduce(function (e, t) {
                                        var n = t.id,
                                            r = t.value,
                                            o = t.location;
                                        return n in e && nt('Duplicate option "' + n + '" in plural element: "' + et() + '"', tt()), (e[n] = { value: r, location: o }), e;
                                    }, {}),
                                },
                                Pt()
                            );
                        },
                        se = "select",
                        ue = rt("select", !1),
                        le = function (e, t) {
                            return v(
                                {
                                    type: r.select,
                                    value: e,
                                    options: t.reduce(function (e, t) {
                                        var n = t.id,
                                            r = t.value,
                                            o = t.location;
                                        return n in e && nt('Duplicate option "' + n + '" in select element: "' + et() + '"', tt()), (e[n] = { value: r, location: o }), e;
                                    }, {}),
                                },
                                Pt()
                            );
                        },
                        fe = "=",
                        de = rt("=", !1),
                        pe = function (e) {
                            return xt.push("select"), !0;
                        },
                        me = function (e, t) {
                            return xt.pop(), v({ id: e, value: t }, Pt());
                        },
                        he = function (e) {
                            return xt.push("plural"), !0;
                        },
                        ve = function (e, t) {
                            return xt.pop(), v({ id: e, value: t }, Pt());
                        },
                        ge = it("whitespace"),
                        _e = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
                        ye = ot([["\t", "\r"], " ", "", " ", " ", [" ", " "], "\u2028", "\u2029", " ", " ", "　"], !1, !1),
                        Ee = it("syntax pattern"),
                        be = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,
                        we = ot(
                            [
                                ["!", "/"],
                                [":", "@"],
                                ["[", "^"],
                                "`",
                                ["{", "~"],
                                ["¡", "§"],
                                "©",
                                "«",
                                "¬",
                                "®",
                                "°",
                                "±",
                                "¶",
                                "»",
                                "¿",
                                "×",
                                "÷",
                                ["‐", "‧"],
                                ["‰", "‾"],
                                ["⁁", "⁓"],
                                ["⁕", "⁞"],
                                ["←", "⑟"],
                                ["─", "❵"],
                                ["➔", "⯿"],
                                ["⸀", "⹿"],
                                ["、", "〃"],
                                ["〈", "〠"],
                                "〰",
                                "﴾",
                                "﴿",
                                "﹅",
                                "﹆",
                            ],
                            !1,
                            !1
                        ),
                        Se = it("optional whitespace"),
                        Oe = it("number"),
                        Ae = "-",
                        Te = rt("-", !1),
                        Re = function (e, t) {
                            return t ? (e ? -t : t) : 0;
                        },
                        Ne = (it("apostrophe"), it("double apostrophes")),
                        Ie = "''",
                        Ce = rt("''", !1),
                        xe = function () {
                            return "'";
                        },
                        ke = function (e, t) {
                            return e + t.replace("''", "'");
                        },
                        Pe = function (e) {
                            return !("{" === e || (kt() && "#" === e) || (xt.length > 1 && "}" === e));
                        },
                        je = "\n",
                        Le = rt("\n", !1),
                        Me = function (e) {
                            return "{" === e || "}" === e || (kt() && "#" === e);
                        },
                        De = it("argNameOrNumber"),
                        Fe = it("argNumber"),
                        Ve = "0",
                        Be = rt("0", !1),
                        Ue = function () {
                            return 0;
                        },
                        Ge = /^[1-9]/,
                        Ke = ot([["1", "9"]], !1, !1),
                        ze = /^[0-9]/,
                        He = ot([["0", "9"]], !1, !1),
                        We = function (e) {
                            return parseInt(e.join(""), 10);
                        },
                        Xe = it("argName"),
                        qe = 0,
                        Ye = 0,
                        Je = [{ line: 1, column: 1 }],
                        Ze = 0,
                        Qe = [],
                        $e = 0;
                    if (void 0 !== t.startRule) {
                        if (!(t.startRule in i)) throw new Error("Can't start parsing from rule \"" + t.startRule + '".');
                        a = i[t.startRule];
                    }
                    function et() {
                        return e.substring(Ye, qe);
                    }
                    function tt() {
                        return ct(Ye, qe);
                    }
                    function nt(e, t) {
                        throw (function (e, t) {
                            return new g(e, [], "", t);
                        })(e, (t = void 0 !== t ? t : ct(Ye, qe)));
                    }
                    function rt(e, t) {
                        return { type: "literal", text: e, ignoreCase: t };
                    }
                    function ot(e, t, n) {
                        return { type: "class", parts: e, inverted: t, ignoreCase: n };
                    }
                    function it(e) {
                        return { type: "other", description: e };
                    }
                    function at(t) {
                        var n,
                            r = Je[t];
                        if (r) return r;
                        for (n = t - 1; !Je[n]; ) n--;
                        for (r = { line: (r = Je[n]).line, column: r.column }; n < t; ) 10 === e.charCodeAt(n) ? (r.line++, (r.column = 1)) : r.column++, n++;
                        return (Je[t] = r), r;
                    }
                    function ct(e, t) {
                        var n = at(e),
                            r = at(t);
                        return { start: { offset: e, line: n.line, column: n.column }, end: { offset: t, line: r.line, column: r.column } };
                    }
                    function st(e) {
                        qe < Ze || (qe > Ze && ((Ze = qe), (Qe = [])), Qe.push(e));
                    }
                    function ut(e, t, n) {
                        return new g(g.buildMessage(e, t), e, t, n);
                    }
                    function lt() {
                        return ft();
                    }
                    function ft() {
                        var e, t;
                        for (e = [], t = dt(); t !== o; ) e.push(t), (t = dt());
                        return e;
                    }
                    function dt() {
                        var t;
                        return (
                            (t = (function () {
                                var e, t;
                                return (e = qe), (t = pt()) !== o && ((Ye = e), (t = s(t))), (e = t);
                            })()) === o &&
                                (t = (function () {
                                    var t, n, r, i;
                                    return (
                                        $e++,
                                        (t = qe),
                                        123 === e.charCodeAt(qe) ? ((n = p), qe++) : ((n = o), 0 === $e && st(m)),
                                        n !== o && St() !== o && (r = Nt()) !== o && St() !== o
                                            ? (125 === e.charCodeAt(qe) ? ((i = h), qe++) : ((i = o), 0 === $e && st(_)), i !== o ? ((Ye = t), (n = y(r)), (t = n)) : ((qe = t), (t = o)))
                                            : ((qe = t), (t = o)),
                                        $e--,
                                        t === o && ((n = o), 0 === $e && st(d)),
                                        t
                                    );
                                })()) === o &&
                                (t = (function () {
                                    var t;
                                    return (
                                        (t = (function () {
                                            var t, n, r, i, a, c, s, u, l;
                                            return (
                                                (t = qe),
                                                123 === e.charCodeAt(qe) ? ((n = p), qe++) : ((n = o), 0 === $e && st(m)),
                                                n !== o && St() !== o && (r = Nt()) !== o && St() !== o
                                                    ? (44 === e.charCodeAt(qe) ? ((i = M), qe++) : ((i = o), 0 === $e && st(D)),
                                                      i !== o && St() !== o
                                                          ? (e.substr(qe, 6) === F ? ((a = F), (qe += 6)) : ((a = o), 0 === $e && st(V)),
                                                            a !== o && St() !== o
                                                                ? ((c = qe),
                                                                  44 === e.charCodeAt(qe) ? ((s = M), qe++) : ((s = o), 0 === $e && st(D)),
                                                                  s !== o &&
                                                                  (u = St()) !== o &&
                                                                  (l = (function () {
                                                                      var t, n, r;
                                                                      return (
                                                                          (t = qe),
                                                                          e.substr(qe, 2) === x ? ((n = x), (qe += 2)) : ((n = o), 0 === $e && st(k)),
                                                                          n !== o &&
                                                                          (r = (function () {
                                                                              var e, t, n;
                                                                              if (((e = qe), (t = []), (n = vt()) !== o)) for (; n !== o; ) t.push(n), (n = vt());
                                                                              else t = o;
                                                                              return t !== o && ((Ye = e), (t = C(t))), (e = t);
                                                                          })()) !== o
                                                                              ? ((Ye = t), (n = P(r)), (t = n))
                                                                              : ((qe = t), (t = o)),
                                                                          t === o && ((t = qe), (Ye = qe), (n = (n = j()) ? void 0 : o) !== o && (r = pt()) !== o ? ((Ye = t), (n = L(r)), (t = n)) : ((qe = t), (t = o))),
                                                                          t
                                                                      );
                                                                  })()) !== o
                                                                      ? (c = s = [s, u, l])
                                                                      : ((qe = c), (c = o)),
                                                                  c === o && (c = null),
                                                                  c !== o && (s = St()) !== o
                                                                      ? (125 === e.charCodeAt(qe) ? ((u = h), qe++) : ((u = o), 0 === $e && st(_)), u !== o ? ((Ye = t), (n = B(r, a, c)), (t = n)) : ((qe = t), (t = o)))
                                                                      : ((qe = t), (t = o)))
                                                                : ((qe = t), (t = o)))
                                                          : ((qe = t), (t = o)))
                                                    : ((qe = t), (t = o)),
                                                t
                                            );
                                        })()) === o &&
                                            (t = (function () {
                                                var t, n, r, i, a, c, s, u, l;
                                                return (
                                                    (t = qe),
                                                    123 === e.charCodeAt(qe) ? ((n = p), qe++) : ((n = o), 0 === $e && st(m)),
                                                    n !== o && St() !== o && (r = Nt()) !== o && St() !== o
                                                        ? (44 === e.charCodeAt(qe) ? ((i = M), qe++) : ((i = o), 0 === $e && st(D)),
                                                          i !== o && St() !== o
                                                              ? (e.substr(qe, 4) === Z ? ((a = Z), (qe += 4)) : ((a = o), 0 === $e && st(Q)),
                                                                a === o && (e.substr(qe, 4) === $ ? ((a = $), (qe += 4)) : ((a = o), 0 === $e && st(ee))),
                                                                a !== o && St() !== o
                                                                    ? ((c = qe),
                                                                      44 === e.charCodeAt(qe) ? ((s = M), qe++) : ((s = o), 0 === $e && st(D)),
                                                                      s !== o &&
                                                                      (u = St()) !== o &&
                                                                      (l = (function () {
                                                                          var t, n, r;
                                                                          return (
                                                                              (t = qe),
                                                                              e.substr(qe, 2) === x ? ((n = x), (qe += 2)) : ((n = o), 0 === $e && st(k)),
                                                                              n !== o &&
                                                                              (r = (function () {
                                                                                  var t, n, r, i;
                                                                                  if (((t = qe), (n = qe), (r = []), (i = gt()) === o && (i = _t()), i !== o)) for (; i !== o; ) r.push(i), (i = gt()) === o && (i = _t());
                                                                                  else r = o;
                                                                                  return (n = r !== o ? e.substring(n, qe) : r) !== o && ((Ye = t), (n = Y(n))), (t = n);
                                                                              })()) !== o
                                                                                  ? ((Ye = t), (n = P(r)), (t = n))
                                                                                  : ((qe = t), (t = o)),
                                                                              t === o && ((t = qe), (Ye = qe), (n = (n = J()) ? void 0 : o) !== o && (r = pt()) !== o ? ((Ye = t), (n = L(r)), (t = n)) : ((qe = t), (t = o))),
                                                                              t
                                                                          );
                                                                      })()) !== o
                                                                          ? (c = s = [s, u, l])
                                                                          : ((qe = c), (c = o)),
                                                                      c === o && (c = null),
                                                                      c !== o && (s = St()) !== o
                                                                          ? (125 === e.charCodeAt(qe) ? ((u = h), qe++) : ((u = o), 0 === $e && st(_)), u !== o ? ((Ye = t), (n = B(r, a, c)), (t = n)) : ((qe = t), (t = o)))
                                                                          : ((qe = t), (t = o)))
                                                                    : ((qe = t), (t = o)))
                                                              : ((qe = t), (t = o)))
                                                        : ((qe = t), (t = o)),
                                                    t
                                                );
                                            })()),
                                        t
                                    );
                                })()) === o &&
                                (t = (function () {
                                    var t, n, r, i, a, c, s, u, l, f, d;
                                    if (((t = qe), 123 === e.charCodeAt(qe) ? ((n = p), qe++) : ((n = o), 0 === $e && st(m)), n !== o))
                                        if (St() !== o)
                                            if ((r = Nt()) !== o)
                                                if (St() !== o)
                                                    if ((44 === e.charCodeAt(qe) ? ((i = M), qe++) : ((i = o), 0 === $e && st(D)), i !== o))
                                                        if (St() !== o)
                                                            if (
                                                                (e.substr(qe, 6) === te ? ((a = te), (qe += 6)) : ((a = o), 0 === $e && st(ne)),
                                                                a === o && (e.substr(qe, 13) === re ? ((a = re), (qe += 13)) : ((a = o), 0 === $e && st(oe))),
                                                                a !== o)
                                                            )
                                                                if (St() !== o)
                                                                    if ((44 === e.charCodeAt(qe) ? ((c = M), qe++) : ((c = o), 0 === $e && st(D)), c !== o))
                                                                        if (St() !== o)
                                                                            if (
                                                                                ((s = qe),
                                                                                e.substr(qe, 7) === ie ? ((u = ie), (qe += 7)) : ((u = o), 0 === $e && st(ae)),
                                                                                u !== o && (l = St()) !== o && (f = Ot()) !== o ? (s = u = [u, l, f]) : ((qe = s), (s = o)),
                                                                                s === o && (s = null),
                                                                                s !== o)
                                                                            )
                                                                                if ((u = St()) !== o) {
                                                                                    if (((l = []), (f = Et()) !== o)) for (; f !== o; ) l.push(f), (f = Et());
                                                                                    else l = o;
                                                                                    l !== o && (f = St()) !== o
                                                                                        ? (125 === e.charCodeAt(qe) ? ((d = h), qe++) : ((d = o), 0 === $e && st(_)), d !== o ? ((Ye = t), (n = ce(r, a, s, l)), (t = n)) : ((qe = t), (t = o)))
                                                                                        : ((qe = t), (t = o));
                                                                                } else (qe = t), (t = o);
                                                                            else (qe = t), (t = o);
                                                                        else (qe = t), (t = o);
                                                                    else (qe = t), (t = o);
                                                                else (qe = t), (t = o);
                                                            else (qe = t), (t = o);
                                                        else (qe = t), (t = o);
                                                    else (qe = t), (t = o);
                                                else (qe = t), (t = o);
                                            else (qe = t), (t = o);
                                        else (qe = t), (t = o);
                                    else (qe = t), (t = o);
                                    return t;
                                })()) === o &&
                                (t = (function () {
                                    var t, n, r, i, a, c, s, u, l;
                                    if (((t = qe), 123 === e.charCodeAt(qe) ? ((n = p), qe++) : ((n = o), 0 === $e && st(m)), n !== o))
                                        if (St() !== o)
                                            if ((r = Nt()) !== o)
                                                if (St() !== o)
                                                    if ((44 === e.charCodeAt(qe) ? ((i = M), qe++) : ((i = o), 0 === $e && st(D)), i !== o))
                                                        if (St() !== o)
                                                            if ((e.substr(qe, 6) === se ? ((a = se), (qe += 6)) : ((a = o), 0 === $e && st(ue)), a !== o))
                                                                if (St() !== o)
                                                                    if ((44 === e.charCodeAt(qe) ? ((c = M), qe++) : ((c = o), 0 === $e && st(D)), c !== o))
                                                                        if (St() !== o) {
                                                                            if (((s = []), (u = yt()) !== o)) for (; u !== o; ) s.push(u), (u = yt());
                                                                            else s = o;
                                                                            s !== o && (u = St()) !== o
                                                                                ? (125 === e.charCodeAt(qe) ? ((l = h), qe++) : ((l = o), 0 === $e && st(_)), l !== o ? ((Ye = t), (n = le(r, s)), (t = n)) : ((qe = t), (t = o)))
                                                                                : ((qe = t), (t = o));
                                                                        } else (qe = t), (t = o);
                                                                    else (qe = t), (t = o);
                                                                else (qe = t), (t = o);
                                                            else (qe = t), (t = o);
                                                        else (qe = t), (t = o);
                                                    else (qe = t), (t = o);
                                                else (qe = t), (t = o);
                                            else (qe = t), (t = o);
                                        else (qe = t), (t = o);
                                    else (qe = t), (t = o);
                                    return t;
                                })()) === o &&
                                (t = (function () {
                                    var t, n;
                                    return (t = qe), 35 === e.charCodeAt(qe) ? ((n = u), qe++) : ((n = o), 0 === $e && st(l)), n !== o && ((Ye = t), (n = f())), (t = n);
                                })()),
                            t
                        );
                    }
                    function pt() {
                        var e, t, n;
                        if (((e = qe), (t = []), (n = At()) === o && (n = Tt()) === o && (n = Rt()), n !== o)) for (; n !== o; ) t.push(n), (n = At()) === o && (n = Tt()) === o && (n = Rt());
                        else t = o;
                        return t !== o && ((Ye = e), (t = c(t))), (e = t);
                    }
                    function mt() {
                        var t, n, r, i, a;
                        if (
                            ($e++,
                            (t = qe),
                            (n = []),
                            (r = qe),
                            (i = qe),
                            $e++,
                            (a = bt()) === o && (b.test(e.charAt(qe)) ? ((a = e.charAt(qe)), qe++) : ((a = o), 0 === $e && st(w))),
                            $e--,
                            a === o ? (i = void 0) : ((qe = i), (i = o)),
                            i !== o ? (e.length > qe ? ((a = e.charAt(qe)), qe++) : ((a = o), 0 === $e && st(S)), a !== o ? (r = i = [i, a]) : ((qe = r), (r = o))) : ((qe = r), (r = o)),
                            r !== o)
                        )
                            for (; r !== o; )
                                n.push(r),
                                    (r = qe),
                                    (i = qe),
                                    $e++,
                                    (a = bt()) === o && (b.test(e.charAt(qe)) ? ((a = e.charAt(qe)), qe++) : ((a = o), 0 === $e && st(w))),
                                    $e--,
                                    a === o ? (i = void 0) : ((qe = i), (i = o)),
                                    i !== o ? (e.length > qe ? ((a = e.charAt(qe)), qe++) : ((a = o), 0 === $e && st(S)), a !== o ? (r = i = [i, a]) : ((qe = r), (r = o))) : ((qe = r), (r = o));
                        else n = o;
                        return (t = n !== o ? e.substring(t, qe) : n), $e--, t === o && ((n = o), 0 === $e && st(E)), t;
                    }
                    function ht() {
                        var t, n, r;
                        return (
                            $e++,
                            (t = qe),
                            47 === e.charCodeAt(qe) ? ((n = A), qe++) : ((n = o), 0 === $e && st(T)),
                            n !== o && (r = mt()) !== o ? ((Ye = t), (t = n = R(r))) : ((qe = t), (t = o)),
                            $e--,
                            t === o && ((n = o), 0 === $e && st(O)),
                            t
                        );
                    }
                    function vt() {
                        var e, t, n, r;
                        if (($e++, (e = qe), St() !== o))
                            if ((t = mt()) !== o) {
                                for (n = [], r = ht(); r !== o; ) n.push(r), (r = ht());
                                n !== o ? ((Ye = e), (e = I(t, n))) : ((qe = e), (e = o));
                            } else (qe = e), (e = o);
                        else (qe = e), (e = o);
                        return $e--, e === o && 0 === $e && st(N), e;
                    }
                    function gt() {
                        var t, n, r, i;
                        if (((t = qe), 39 === e.charCodeAt(qe) ? ((n = U), qe++) : ((n = o), 0 === $e && st(G)), n !== o)) {
                            if (((r = []), (i = At()) === o && (K.test(e.charAt(qe)) ? ((i = e.charAt(qe)), qe++) : ((i = o), 0 === $e && st(z))), i !== o))
                                for (; i !== o; ) r.push(i), (i = At()) === o && (K.test(e.charAt(qe)) ? ((i = e.charAt(qe)), qe++) : ((i = o), 0 === $e && st(z)));
                            else r = o;
                            r !== o ? (39 === e.charCodeAt(qe) ? ((i = U), qe++) : ((i = o), 0 === $e && st(G)), i !== o ? (t = n = [n, r, i]) : ((qe = t), (t = o))) : ((qe = t), (t = o));
                        } else (qe = t), (t = o);
                        if (t === o)
                            if (((t = []), (n = At()) === o && (H.test(e.charAt(qe)) ? ((n = e.charAt(qe)), qe++) : ((n = o), 0 === $e && st(W))), n !== o))
                                for (; n !== o; ) t.push(n), (n = At()) === o && (H.test(e.charAt(qe)) ? ((n = e.charAt(qe)), qe++) : ((n = o), 0 === $e && st(W)));
                            else t = o;
                        return t;
                    }
                    function _t() {
                        var t, n;
                        if (((t = []), X.test(e.charAt(qe)) ? ((n = e.charAt(qe)), qe++) : ((n = o), 0 === $e && st(q)), n !== o))
                            for (; n !== o; ) t.push(n), X.test(e.charAt(qe)) ? ((n = e.charAt(qe)), qe++) : ((n = o), 0 === $e && st(q));
                        else t = o;
                        return t;
                    }
                    function yt() {
                        var t, n, r, i, a;
                        return (
                            (t = qe),
                            St() !== o && (n = Ct()) !== o && St() !== o
                                ? (123 === e.charCodeAt(qe) ? ((r = p), qe++) : ((r = o), 0 === $e && st(m)),
                                  r !== o
                                      ? ((Ye = qe),
                                        (pe(n) ? void 0 : o) !== o && (i = ft()) !== o
                                            ? (125 === e.charCodeAt(qe) ? ((a = h), qe++) : ((a = o), 0 === $e && st(_)), a !== o ? ((Ye = t), (t = me(n, i))) : ((qe = t), (t = o)))
                                            : ((qe = t), (t = o)))
                                      : ((qe = t), (t = o)))
                                : ((qe = t), (t = o)),
                            t
                        );
                    }
                    function Et() {
                        var t, n, r, i, a;
                        return (
                            (t = qe),
                            St() !== o &&
                            (n = (function () {
                                var t, n, r, i;
                                return (
                                    (t = qe),
                                    (n = qe),
                                    61 === e.charCodeAt(qe) ? ((r = fe), qe++) : ((r = o), 0 === $e && st(de)),
                                    r !== o && (i = Ot()) !== o ? (n = r = [r, i]) : ((qe = n), (n = o)),
                                    (t = n !== o ? e.substring(t, qe) : n) === o && (t = Ct()),
                                    t
                                );
                            })()) !== o &&
                            St() !== o
                                ? (123 === e.charCodeAt(qe) ? ((r = p), qe++) : ((r = o), 0 === $e && st(m)),
                                  r !== o
                                      ? ((Ye = qe),
                                        (he(n) ? void 0 : o) !== o && (i = ft()) !== o
                                            ? (125 === e.charCodeAt(qe) ? ((a = h), qe++) : ((a = o), 0 === $e && st(_)), a !== o ? ((Ye = t), (t = ve(n, i))) : ((qe = t), (t = o)))
                                            : ((qe = t), (t = o)))
                                      : ((qe = t), (t = o)))
                                : ((qe = t), (t = o)),
                            t
                        );
                    }
                    function bt() {
                        var t;
                        return $e++, _e.test(e.charAt(qe)) ? ((t = e.charAt(qe)), qe++) : ((t = o), 0 === $e && st(ye)), $e--, t === o && 0 === $e && st(ge), t;
                    }
                    function wt() {
                        var t;
                        return $e++, be.test(e.charAt(qe)) ? ((t = e.charAt(qe)), qe++) : ((t = o), 0 === $e && st(we)), $e--, t === o && 0 === $e && st(Ee), t;
                    }
                    function St() {
                        var t, n, r;
                        for ($e++, t = qe, n = [], r = bt(); r !== o; ) n.push(r), (r = bt());
                        return (t = n !== o ? e.substring(t, qe) : n), $e--, t === o && ((n = o), 0 === $e && st(Se)), t;
                    }
                    function Ot() {
                        var t, n, r;
                        return (
                            $e++,
                            (t = qe),
                            45 === e.charCodeAt(qe) ? ((n = Ae), qe++) : ((n = o), 0 === $e && st(Te)),
                            n === o && (n = null),
                            n !== o && (r = It()) !== o ? ((Ye = t), (t = n = Re(n, r))) : ((qe = t), (t = o)),
                            $e--,
                            t === o && ((n = o), 0 === $e && st(Oe)),
                            t
                        );
                    }
                    function At() {
                        var t, n;
                        return $e++, (t = qe), e.substr(qe, 2) === Ie ? ((n = Ie), (qe += 2)) : ((n = o), 0 === $e && st(Ce)), n !== o && ((Ye = t), (n = xe())), $e--, (t = n) === o && ((n = o), 0 === $e && st(Ne)), t;
                    }
                    function Tt() {
                        var t, n, r, i, a, c;
                        if (((t = qe), 39 === e.charCodeAt(qe) ? ((n = U), qe++) : ((n = o), 0 === $e && st(G)), n !== o))
                            if (
                                (r = (function () {
                                    var t, n, r, i;
                                    return (
                                        (t = qe),
                                        (n = qe),
                                        e.length > qe ? ((r = e.charAt(qe)), qe++) : ((r = o), 0 === $e && st(S)),
                                        r !== o ? ((Ye = qe), (i = (i = Me(r)) ? void 0 : o) !== o ? (n = r = [r, i]) : ((qe = n), (n = o))) : ((qe = n), (n = o)),
                                        (t = n !== o ? e.substring(t, qe) : n)
                                    );
                                })()) !== o
                            ) {
                                for (i = qe, a = [], e.substr(qe, 2) === Ie ? ((c = Ie), (qe += 2)) : ((c = o), 0 === $e && st(Ce)), c === o && (K.test(e.charAt(qe)) ? ((c = e.charAt(qe)), qe++) : ((c = o), 0 === $e && st(z))); c !== o; )
                                    a.push(c), e.substr(qe, 2) === Ie ? ((c = Ie), (qe += 2)) : ((c = o), 0 === $e && st(Ce)), c === o && (K.test(e.charAt(qe)) ? ((c = e.charAt(qe)), qe++) : ((c = o), 0 === $e && st(z)));
                                (i = a !== o ? e.substring(i, qe) : a) !== o
                                    ? (39 === e.charCodeAt(qe) ? ((a = U), qe++) : ((a = o), 0 === $e && st(G)), a === o && (a = null), a !== o ? ((Ye = t), (t = n = ke(r, i))) : ((qe = t), (t = o)))
                                    : ((qe = t), (t = o));
                            } else (qe = t), (t = o);
                        else (qe = t), (t = o);
                        return t;
                    }
                    function Rt() {
                        var t, n, r, i;
                        return (
                            (t = qe),
                            (n = qe),
                            e.length > qe ? ((r = e.charAt(qe)), qe++) : ((r = o), 0 === $e && st(S)),
                            r !== o ? ((Ye = qe), (i = (i = Pe(r)) ? void 0 : o) !== o ? (n = r = [r, i]) : ((qe = n), (n = o))) : ((qe = n), (n = o)),
                            n === o && (10 === e.charCodeAt(qe) ? ((n = je), qe++) : ((n = o), 0 === $e && st(Le))),
                            (t = n !== o ? e.substring(t, qe) : n)
                        );
                    }
                    function Nt() {
                        var t, n;
                        return $e++, (t = qe), (n = It()) === o && (n = Ct()), (t = n !== o ? e.substring(t, qe) : n), $e--, t === o && ((n = o), 0 === $e && st(De)), t;
                    }
                    function It() {
                        var t, n, r, i, a;
                        if (($e++, (t = qe), 48 === e.charCodeAt(qe) ? ((n = Ve), qe++) : ((n = o), 0 === $e && st(Be)), n !== o && ((Ye = t), (n = Ue())), (t = n) === o)) {
                            if (((t = qe), (n = qe), Ge.test(e.charAt(qe)) ? ((r = e.charAt(qe)), qe++) : ((r = o), 0 === $e && st(Ke)), r !== o)) {
                                for (i = [], ze.test(e.charAt(qe)) ? ((a = e.charAt(qe)), qe++) : ((a = o), 0 === $e && st(He)); a !== o; ) i.push(a), ze.test(e.charAt(qe)) ? ((a = e.charAt(qe)), qe++) : ((a = o), 0 === $e && st(He));
                                i !== o ? (n = r = [r, i]) : ((qe = n), (n = o));
                            } else (qe = n), (n = o);
                            n !== o && ((Ye = t), (n = We(n))), (t = n);
                        }
                        return $e--, t === o && ((n = o), 0 === $e && st(Fe)), t;
                    }
                    function Ct() {
                        var t, n, r, i, a;
                        if (
                            ($e++,
                            (t = qe),
                            (n = []),
                            (r = qe),
                            (i = qe),
                            $e++,
                            (a = bt()) === o && (a = wt()),
                            $e--,
                            a === o ? (i = void 0) : ((qe = i), (i = o)),
                            i !== o ? (e.length > qe ? ((a = e.charAt(qe)), qe++) : ((a = o), 0 === $e && st(S)), a !== o ? (r = i = [i, a]) : ((qe = r), (r = o))) : ((qe = r), (r = o)),
                            r !== o)
                        )
                            for (; r !== o; )
                                n.push(r),
                                    (r = qe),
                                    (i = qe),
                                    $e++,
                                    (a = bt()) === o && (a = wt()),
                                    $e--,
                                    a === o ? (i = void 0) : ((qe = i), (i = o)),
                                    i !== o ? (e.length > qe ? ((a = e.charAt(qe)), qe++) : ((a = o), 0 === $e && st(S)), a !== o ? (r = i = [i, a]) : ((qe = r), (r = o))) : ((qe = r), (r = o));
                        else n = o;
                        return (t = n !== o ? e.substring(t, qe) : n), $e--, t === o && ((n = o), 0 === $e && st(Xe)), t;
                    }
                    var xt = ["root"];
                    function kt() {
                        return "plural" === xt[xt.length - 1];
                    }
                    function Pt() {
                        return t && t.captureLocation ? { location: tt() } : {};
                    }
                    if ((n = a()) !== o && qe === e.length) return n;
                    throw (n !== o && qe < e.length && st({ type: "end" }), ut(Qe, Ze < e.length ? e.charAt(Ze) : null, Ze < e.length ? ct(Ze, Ze + 1) : ct(Ze, Ze)));
                },
                y = function () {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e),
                        o = 0;
                    for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) r[o] = i[a];
                    return r;
                },
                E = /(^|[^\\])#/g;
            function b(e, t) {
                var n = _(e, t);
                return (
                    (t && !1 === t.normalizeHashtagInPlural) ||
                        (function e(t) {
                            t.forEach(function (t) {
                                (l(t) || u(t)) &&
                                    Object.keys(t.options).forEach(function (n) {
                                        for (var r, i = t.options[n], a = -1, c = void 0, s = 0; s < i.value.length; s++) {
                                            var u = i.value[s];
                                            if (o(u) && E.test(u.value)) {
                                                (a = s), (c = u);
                                                break;
                                            }
                                        }
                                        if (c) {
                                            var l = c.value.replace(E, "$1{" + t.value + ", number}"),
                                                f = _(l);
                                            (r = i.value).splice.apply(r, y([a, 1], f));
                                        }
                                        e(i.value);
                                    });
                            });
                        })(n),
                    n
                );
            }
            var w = n("WaGN"),
                S = function () {
                    return (S =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e;
                        }).apply(this, arguments);
                },
                O = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
            function A(e) {
                var t = {};
                return (
                    e.replace(O, function (e) {
                        var n = e.length;
                        switch (e[0]) {
                            case "G":
                                t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                                break;
                            case "y":
                                t.year = 2 === n ? "2-digit" : "numeric";
                                break;
                            case "Y":
                            case "u":
                            case "U":
                            case "r":
                                throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                            case "q":
                            case "Q":
                                throw new RangeError("`q/Q` (quarter) patterns are not supported");
                            case "M":
                            case "L":
                                t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
                                break;
                            case "w":
                            case "W":
                                throw new RangeError("`w/W` (week) patterns are not supported");
                            case "d":
                                t.day = ["numeric", "2-digit"][n - 1];
                                break;
                            case "D":
                            case "F":
                            case "g":
                                throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                            case "E":
                                t.weekday = 4 === n ? "short" : 5 === n ? "narrow" : "short";
                                break;
                            case "e":
                                if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                                t.weekday = ["short", "long", "narrow", "short"][n - 4];
                                break;
                            case "c":
                                if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                                t.weekday = ["short", "long", "narrow", "short"][n - 4];
                                break;
                            case "a":
                                t.hour12 = !0;
                                break;
                            case "b":
                            case "B":
                                throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                            case "h":
                                (t.hourCycle = "h12"), (t.hour = ["numeric", "2-digit"][n - 1]);
                                break;
                            case "H":
                                (t.hourCycle = "h23"), (t.hour = ["numeric", "2-digit"][n - 1]);
                                break;
                            case "K":
                                (t.hourCycle = "h11"), (t.hour = ["numeric", "2-digit"][n - 1]);
                                break;
                            case "k":
                                (t.hourCycle = "h24"), (t.hour = ["numeric", "2-digit"][n - 1]);
                                break;
                            case "j":
                            case "J":
                            case "C":
                                throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                            case "m":
                                t.minute = ["numeric", "2-digit"][n - 1];
                                break;
                            case "s":
                                t.second = ["numeric", "2-digit"][n - 1];
                                break;
                            case "S":
                            case "A":
                                throw new RangeError("`S/A` (second) pattenrs are not supported, use `s` instead");
                            case "z":
                                t.timeZoneName = n < 4 ? "short" : "long";
                                break;
                            case "Z":
                            case "O":
                            case "v":
                            case "V":
                            case "X":
                            case "x":
                                throw new RangeError("`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead");
                        }
                        return "";
                    }),
                    t
                );
            }
            var T = /^\.(?:(0+)(\+|#+)?)?$/g,
                R = /^(@+)?(\+|#+)?$/g;
            function N(e) {
                var t = {};
                return (
                    e.replace(R, function (e, n, r) {
                        return (
                            "string" != typeof r
                                ? ((t.minimumSignificantDigits = n.length), (t.maximumSignificantDigits = n.length))
                                : "+" === r
                                ? (t.minimumSignificantDigits = n.length)
                                : "#" === n[0]
                                ? (t.maximumSignificantDigits = n.length)
                                : ((t.minimumSignificantDigits = n.length), (t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0))),
                            ""
                        );
                    }),
                    t
                );
            }
            function I(e) {
                switch (e) {
                    case "sign-auto":
                        return { signDisplay: "auto" };
                    case "sign-accounting":
                        return { currencySign: "accounting" };
                    case "sign-always":
                        return { signDisplay: "always" };
                    case "sign-accounting-always":
                        return { signDisplay: "always", currencySign: "accounting" };
                    case "sign-except-zero":
                        return { signDisplay: "exceptZero" };
                    case "sign-accounting-except-zero":
                        return { signDisplay: "exceptZero", currencySign: "accounting" };
                    case "sign-never":
                        return { signDisplay: "never" };
                }
            }
            function C(e) {
                var t = I(e);
                return t || {};
            }
            function x(e) {
                for (var t = {}, n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    switch (o.stem) {
                        case "percent":
                            t.style = "percent";
                            continue;
                        case "currency":
                            (t.style = "currency"), (t.currency = o.options[0]);
                            continue;
                        case "group-off":
                            t.useGrouping = !1;
                            continue;
                        case "precision-integer":
                            t.maximumFractionDigits = 0;
                            continue;
                        case "measure-unit":
                            (t.style = "unit"), (t.unit = o.options[0].replace(/^(.*?)-/, ""));
                            continue;
                        case "compact-short":
                            (t.notation = "compact"), (t.compactDisplay = "short");
                            continue;
                        case "compact-long":
                            (t.notation = "compact"), (t.compactDisplay = "long");
                            continue;
                        case "scientific":
                            t = S(
                                S(S({}, t), { notation: "scientific" }),
                                o.options.reduce(function (e, t) {
                                    return S(S({}, e), C(t));
                                }, {})
                            );
                            continue;
                        case "engineering":
                            t = S(
                                S(S({}, t), { notation: "engineering" }),
                                o.options.reduce(function (e, t) {
                                    return S(S({}, e), C(t));
                                }, {})
                            );
                            continue;
                        case "notation-simple":
                            t.notation = "standard";
                            continue;
                        case "unit-width-narrow":
                            (t.currencyDisplay = "narrowSymbol"), (t.unitDisplay = "narrow");
                            continue;
                        case "unit-width-short":
                            (t.currencyDisplay = "code"), (t.unitDisplay = "short");
                            continue;
                        case "unit-width-full-name":
                            (t.currencyDisplay = "name"), (t.unitDisplay = "long");
                            continue;
                        case "unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                    }
                    if (T.test(o.stem)) {
                        if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
                        o.stem.replace(T, function (e, n, r) {
                            return (
                                "." === e
                                    ? (t.maximumFractionDigits = 0)
                                    : "+" === r
                                    ? (t.minimumFractionDigits = r.length)
                                    : "#" === n[0]
                                    ? (t.maximumFractionDigits = n.length)
                                    : ((t.minimumFractionDigits = n.length), (t.maximumFractionDigits = n.length + ("string" == typeof r ? r.length : 0))),
                                ""
                            );
                        }),
                            o.options.length && (t = S(S({}, t), N(o.options[0])));
                    } else if (R.test(o.stem)) t = S(S({}, t), N(o.stem));
                    else {
                        var i = I(o.stem);
                        i && (t = S(S({}, t), i));
                    }
                }
                return t;
            }
            var k,
                P = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })(),
                j = function () {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e),
                        o = 0;
                    for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, c = i.length; a < c; a++, o++) r[o] = i[a];
                    return r;
                },
                L = (function (e) {
                    function t(t, n) {
                        var r = e.call(this, t) || this;
                        return (r.variableId = n), r;
                    }
                    return P(t, e), t;
                })(Error);
            function M(e, t, n, r, m, h, v) {
                if (1 === e.length && o(e[0])) return [{ type: 0, value: e[0].value }];
                for (var g, _ = [], y = 0, E = e; y < E.length; y++) {
                    var b = E[y];
                    if (o(b)) _.push({ type: 0, value: b.value });
                    else if (f(b)) "number" == typeof h && _.push({ type: 0, value: n.getNumberFormat(t).format(h) });
                    else {
                        var w = b.value;
                        if (!(m && w in m)) throw new L('The intl string context variable "' + w + '" was not provided to the string "' + v + '"');
                        var S = m[w];
                        if (i(b)) (S && "string" != typeof S && "number" != typeof S) || (S = "string" == typeof S || "number" == typeof S ? String(S) : ""), _.push({ type: 1, value: S });
                        else if (c(b)) {
                            var O = "string" == typeof b.style ? r.date[b.style] : void 0;
                            _.push({ type: 0, value: n.getDateTimeFormat(t, O).format(S) });
                        } else if (s(b)) {
                            O = "string" == typeof b.style ? r.time[b.style] : p(b.style) ? A(b.style.pattern) : void 0;
                            _.push({ type: 0, value: n.getDateTimeFormat(t, O).format(S) });
                        } else if (a(b)) {
                            O = "string" == typeof b.style ? r.number[b.style] : d(b.style) ? x(b.style.tokens) : void 0;
                            _.push({ type: 0, value: n.getNumberFormat(t, O).format(S) });
                        } else if (u(b)) {
                            if (!(T = b.options[S] || b.options.other)) throw new RangeError('Invalid values for "' + b.value + '": "' + S + '". Options are "' + Object.keys(b.options).join('", "') + '"');
                            _.push.apply(_, M(T.value, t, n, r, m));
                        } else if (l(b)) {
                            var T;
                            if (!(T = b.options["=" + S])) {
                                if (!Intl.PluralRules) throw new L('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n');
                                var R = n.getPluralRules(t, { type: b.pluralType }).select(S - (b.offset || 0));
                                T = b.options[R] || b.options.other;
                            }
                            if (!T) throw new RangeError('Invalid values for "' + b.value + '": "' + S + '". Options are "' + Object.keys(b.options).join('", "') + '"');
                            _.push.apply(_, M(T.value, t, n, r, m, S - (b.offset || 0)));
                        } else;
                    }
                }
                return (g = _).length < 2
                    ? g
                    : g.reduce(function (e, t) {
                          var n = e[e.length - 1];
                          return n && 0 === n.type && 0 === t.type ? (n.value += t.value) : e.push(t), e;
                      }, []);
            }
            var D = "@@",
                F = /@@(\d+_\d+)@@/g,
                V = 0;
            function B(e, t) {
                return e
                    .split(F)
                    .filter(Boolean)
                    .map(function (e) {
                        return null != t[e] ? t[e] : e;
                    })
                    .reduce(function (e, t) {
                        return e.length && "string" == typeof t && "string" == typeof e[e.length - 1] ? (e[e.length - 1] += t) : e.push(t), e;
                    }, []);
            }
            var U = /(<([0-9a-zA-Z-_]*?)>(.*?)<\/([0-9a-zA-Z-_]*?)>)|(<[0-9a-zA-Z-_]*?\/>)/,
                G = Date.now() + "@@",
                K = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
            function z(e, t, n, r, o, i) {
                var a = {},
                    c = M(e, t, n, r, o, void 0, i).reduce(function (e, t) {
                        if (0 === t.type) return e + t.value;
                        var n = Date.now() + "_" + ++V;
                        return (a[n] = t.value), e + "" + D + n + D;
                    }, "");
                if (!U.test(c)) return B(c, a);
                if (!o) throw new L("Message has placeholders but no values was given");
                if ("undefined" == typeof DOMParser) throw new L("Cannot format XML message without DOMParser");
                k || (k = new DOMParser());
                var s = k.parseFromString('<formatted-message id="' + G + '">' + c + "</formatted-message>", "text/html").getElementById(G);
                if (!s) throw new L("Malformed HTML message " + c);
                var u = Object.keys(o).filter(function (e) {
                    return !!s.getElementsByTagName(e).length;
                });
                if (!u.length) return B(c, a);
                var l = u.filter(function (e) {
                    return e !== e.toLowerCase();
                });
                if (l.length) throw new L("HTML tag must be lowercased but the following tags are not: " + l.join(", "));
                return Array.prototype.slice.call(s.childNodes).reduce(function (e, t) {
                    return e.concat(
                        (function e(t, n, r) {
                            var o = t.tagName,
                                i = t.outerHTML,
                                a = t.textContent,
                                c = t.childNodes;
                            if (!o) return B(a || "", n);
                            o = o.toLowerCase();
                            var s = ~K.indexOf(o),
                                u = r[o];
                            if (u && s) throw new L(o + " is a self-closing tag and can not be used, please use another tag name.");
                            if (!c.length) return [i];
                            var l = Array.prototype.slice.call(c).reduce(function (t, o) {
                                return t.concat(e(o, n, r));
                            }, []);
                            return u ? ("function" == typeof u ? [u.apply(void 0, l)] : [u]) : j(["<" + o + ">"], l, ["</" + o + ">"]);
                        })(t, a, o)
                    );
                }, []);
            }
            var H = function () {
                return (H =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function W(e, t) {
                return t
                    ? Object.keys(e).reduce(function (n, r) {
                          var o, i;
                          return (
                              (n[r] =
                                  ((o = e[r]),
                                  (i = t[r])
                                      ? H(
                                            H(H({}, o || {}), i || {}),
                                            Object.keys(o).reduce(function (e, t) {
                                                return (e[t] = H(H({}, o[t]), i[t] || {})), e;
                                            }, {})
                                        )
                                      : o)),
                              n
                          );
                      }, H({}, e))
                    : e;
            }
            var X = (function () {
                function e(t, n, r, o) {
                    var i,
                        a = this;
                    if (
                        (void 0 === n && (n = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            return (function (e, t, n, r, o, i) {
                                var a = M(e, t, n, r, o, void 0, i);
                                return 1 === a.length
                                    ? a[0].value
                                    : a.reduce(function (e, t) {
                                          return e + t.value;
                                      }, "");
                            })(a.ast, a.locales, a.formatters, a.formats, e, a.message);
                        }),
                        (this.formatToParts = function (e) {
                            return M(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
                        }),
                        (this.formatHTMLMessage = function (e) {
                            return z(a.ast, a.locales, a.formatters, a.formats, e, a.message);
                        }),
                        (this.resolvedOptions = function () {
                            return { locale: Intl.NumberFormat.supportedLocalesOf(a.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return a.ast;
                        }),
                        "string" == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                        this.ast = e.__parse(t, { normalizeHashtagInPlural: !1 });
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
                    (this.formats = W(e.formats, r)),
                        (this.locales = n),
                        (this.formatters =
                            (o && o.formatters) ||
                            (void 0 === (i = this.formatterCache) && (i = { number: {}, dateTime: {}, pluralRules: {} }),
                            { getNumberFormat: Object(w.a)(Intl.NumberFormat, i.number), getDateTimeFormat: Object(w.a)(Intl.DateTimeFormat, i.dateTime), getPluralRules: Object(w.a)(Intl.PluralRules, i.pluralRules) }));
                }
                return (
                    (e.defaultLocale = new Intl.NumberFormat().resolvedOptions().locale),
                    (e.__parse = b),
                    (e.formats = {
                        number: { currency: { style: "currency" }, percent: { style: "percent" } },
                        date: {
                            short: { month: "numeric", day: "numeric", year: "2-digit" },
                            medium: { month: "short", day: "numeric", year: "numeric" },
                            long: { month: "long", day: "numeric", year: "numeric" },
                            full: { weekday: "long", month: "long", day: "numeric", year: "numeric" },
                        },
                        time: {
                            short: { hour: "numeric", minute: "numeric" },
                            medium: { hour: "numeric", minute: "numeric", second: "numeric" },
                            long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" },
                            full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" },
                        },
                    }),
                    e
                );
            })();
            t.a = X;
        },
        dVhv: function (e, t, n) {
            "use strict";
            var r = n("uRBY")(!0);
            e.exports = function (e, t, n) {
                return t + (n ? r(e, t).length : 1);
            };
        },
        dXMz: function (e, t, n) {
            e.exports = n.p + "../images/home_features_experience_points.45272ed0.png";
        },
        deTv: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return D;
            }),
                n.d(t, "c", function () {
                    return M;
                }),
                n.d(t, "f", function () {
                    return P;
                }),
                n.d(t, "g", function () {
                    return j;
                }),
                n.d(t, "h", function () {
                    return L;
                }),
                n.d(t, "i", function () {
                    return V;
                }),
                n.d(t, "j", function () {
                    return F;
                });
            var r = n("NthX"),
                o = n.n(r),
                i = n("fFdx"),
                a = n.n(i),
                c = n("K4DB"),
                s = n.n(c),
                u = n("+IV6"),
                l = n.n(u),
                f = n("eef+"),
                d = n.n(f),
                p = n("OvAC"),
                m = n.n(p),
                h = n("RiSW"),
                v = n.n(h),
                g = n("SDJZ"),
                _ = n.n(g),
                y = n("NToG"),
                E = n.n(y),
                b = n("nxTg"),
                w = n.n(b),
                S = n("raPH"),
                O = n("ZdST"),
                A = n("vBtu"),
                T = n("SMSh"),
                R = n("hWgQ");
            n.d(t, "a", function () {
                return R.a;
            }),
                n.d(t, "d", function () {
                    return R.b;
                });
            var N = n("8V3g");
            n.d(t, "e", function () {
                return N.defineMessages;
            });
            var I = n("mXGw");
            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? C(Object(n), !0).forEach(function (t) {
                              m()(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : C(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var k = {
                    formatMessage: function (e) {
                        e.id;
                        return e.defaultMessage || "";
                    },
                },
                P = function (e) {
                    return (function (e) {
                        return e.includes("u-nu");
                    })(e)
                        ? e
                        : "".concat(e, "-u-nu-latn");
                };
            var j = new ((function () {
                    function e() {
                        var t = this;
                        _()(this, e),
                            (this.formatDate = function (e, n) {
                                return t.intl.formatDate(e, n);
                            }),
                            (this.formatTime = function (e, n) {
                                return t.intl.formatTime(e, n);
                            }),
                            (this.formatRelativeTime = function (e, n) {
                                return t.intl.formatRelativeTime(e, n);
                            }),
                            (this.formatNumber = function (e, n) {
                                return t.intl.formatNumber(e, n);
                            }),
                            (this.formatPlural = function (e, n) {
                                return t.intl.formatPlural(e, n);
                            }),
                            (this.formatHTMLMessage = function (e, n) {
                                return t.intl.formatHTMLMessage(e, n);
                            }),
                            (this.formatMessage = function (e, n) {
                                return (t.intl || k).formatMessage(e, n);
                            });
                    }
                    return (
                        E()(e, [
                            {
                                key: "updateMessages",
                                value: function (e, t) {
                                    (this.reactIntlCache = Object(S.d)()),
                                        (this.intl = Object(O.a)(
                                            {
                                                locale: P(
                                                    (function (e) {
                                                        if (2 === e.length) return e;
                                                        var t = e.split(/[-_]/),
                                                            n = w()(t, 2),
                                                            r = n[0],
                                                            o = n[1];
                                                        return "".concat(r.toLowerCase(), "-").concat(o.toUpperCase());
                                                    })(e)
                                                ),
                                                messages: t,
                                            },
                                            this.reactIntlCache
                                        )),
                                        (this.localeSrc = e);
                                },
                            },
                            {
                                key: "getInstance",
                                value: function () {
                                    return this.intl;
                                },
                            },
                        ]),
                        e
                    );
                })())(),
                L = function (e) {
                    return e ? P(e) : j && j.intl && j.intl.locale;
                },
                M = function (e) {
                    var t = e.className,
                        n = e.defaultMessage,
                        r = e.description,
                        o = e.id,
                        i = e.tagName,
                        a = void 0 === i ? "span" : i,
                        c = e.values,
                        s = v()(e, ["className", "defaultMessage", "description", "id", "tagName", "values"]);
                    return Object(I.createElement)(A.a, { id: o, description: r, defaultMessage: n, values: c }, function () {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return I.createElement.apply(void 0, [a, x({}, s, { className: t, "data-trans": o })].concat(n));
                    });
                },
                D = function (e) {
                    var t = e.className,
                        n = e.defaultMessage,
                        r = e.description,
                        o = e.id,
                        i = e.tagName,
                        a = void 0 === i ? "span" : i,
                        c = e.values,
                        s = v()(e, ["className", "defaultMessage", "description", "id", "tagName", "values"]);
                    return Object(I.createElement)(T.a, { id: o, description: r, defaultMessage: n, values: c }, function () {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return Object(I.createElement)(a, x({}, s, { className: t, "data-trans": o, dangerouslySetInnerHTML: { __html: n } }));
                    });
                };
            I.Component;
            var F = function () {
                    return Object(I.useMemo)(
                        function () {
                            return (e = j.localeSrc), ["ar_AE", "ur_PK"].includes(e);
                            var e;
                        },
                        [j.localeSrc]
                    );
                },
                V = function () {
                    return F() ? "rtl" : "ltr";
                };
        },
        dmRF: function (e, t, n) {
            e.exports = n.p + "../images/awards_2.5da83b70.jpg";
        },
        "drO/": function (e, t, n) {
            var r = n("jFWS"),
                o = function (e) {
                    var t = "",
                        n = Object.keys(e);
                    return (
                        n.forEach(function (o, i) {
                            var a = e[o];
                            (function (e) {
                                return /[height|width]$/.test(e);
                            })((o = r(o))) &&
                                "number" == typeof a &&
                                (a += "px"),
                                (t += !0 === a ? o : !1 === a ? "not " + o : "(" + o + ": " + a + ")"),
                                i < n.length - 1 && (t += " and ");
                        }),
                        t
                    );
                };
            e.exports = function (e) {
                var t = "";
                return "string" == typeof e
                    ? e
                    : e instanceof Array
                    ? (e.forEach(function (n, r) {
                          (t += o(n)), r < e.length - 1 && (t += ", ");
                      }),
                      t)
                    : o(e);
            };
        },
        "e+GP": function (e, t) {
            function n(t) {
                "@babel/helpers - typeof";
                return (
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? (e.exports = n = function (e) {
                              return typeof e;
                          })
                        : (e.exports = n = function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          }),
                    n(t)
                );
            }
            e.exports = n;
        },
        e2Kn: function (e, t, n) {
            "use strict";
            var r = n("P56o"),
                o = n("ezc+"),
                i = n("n+VH"),
                a = n("jEou"),
                c = n("5MU4"),
                s = n("E7Vc"),
                u = n("zIds").f,
                l = n("1Tj+").f,
                f = n("U1KF").f,
                d = n("hGr/").trim,
                p = r.Number,
                m = p,
                h = p.prototype,
                v = "Number" == i(n("Vx+c")(h)),
                g = "trim" in String.prototype,
                _ = function (e) {
                    var t = c(e, !1);
                    if ("string" == typeof t && t.length > 2) {
                        var n,
                            r,
                            o,
                            i = (t = g ? t.trim() : d(t, 3)).charCodeAt(0);
                        if (43 === i || 45 === i) {
                            if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
                        } else if (48 === i) {
                            switch (t.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    (r = 2), (o = 49);
                                    break;
                                case 79:
                                case 111:
                                    (r = 8), (o = 55);
                                    break;
                                default:
                                    return +t;
                            }
                            for (var a, s = t.slice(2), u = 0, l = s.length; u < l; u++) if ((a = s.charCodeAt(u)) < 48 || a > o) return NaN;
                            return parseInt(s, r);
                        }
                    }
                    return +t;
                };
            if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
                p = function (e) {
                    var t = arguments.length < 1 ? 0 : e,
                        n = this;
                    return n instanceof p &&
                        (v
                            ? s(function () {
                                  h.valueOf.call(n);
                              })
                            : "Number" != i(n))
                        ? a(new m(_(t)), n, p)
                        : _(t);
                };
                for (
                    var y,
                        E = n("GGqZ") ? u(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),
                        b = 0;
                    E.length > b;
                    b++
                )
                    o(m, (y = E[b])) && !o(p, y) && f(p, y, l(m, y));
                (p.prototype = h), (h.constructor = p), n("sU/p")(r, "Number", p);
            }
        },
        e5ec: function (e, t, n) {
            e.exports = n.p + "../images/home_advisor_bg.7d68fa79.jpg";
        },
        e5jZ: function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                return !(!e || !e.__CANCEL__);
            };
        },
        eJLk: function (e, t, n) {},
        "eef+": function (e, t, n) {
            var r = n("WI9V");
            e.exports = function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && r(e, t);
            };
        },
        eg5f: function (e, t, n) {
            "use strict";
            var r,
                o = n("tyvn"),
                i = n("f6l3"),
                a = window._globalsConfig || {};
            t.a = {
                captchaLogin: a.captcha_login,
                captchaRegistration: a.captcha_registration,
                captchaRemindPass: a.captcha_remind_pass,
                country: a.country,
                currencyList: a.currencyList,
                lang: a.lang || o.Ab.EN,
                projectUser: Object(i.I)(),
                regAllow: "1" === a.regAllow,
                supportChat: a.support_chat && a.support_chat.active_chat,
                token: ((r = /\?token=(.+)/.exec(window.location.search)), r && 2 === r.length ? r[1] : null),
            };
        },
        eo2L: function (e, t, n) {},
        "ezc+": function (e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function (e, t) {
                return n.call(e, t);
            };
        },
        f6l3: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return Y;
            }),
                n.d(t, "b", function () {
                    return J;
                }),
                n.d(t, "c", function () {
                    return T;
                }),
                n.d(t, "d", function () {
                    return Ne;
                }),
                n.d(t, "e", function () {
                    return k;
                }),
                n.d(t, "f", function () {
                    return R;
                }),
                n.d(t, "g", function () {
                    return ce;
                }),
                n.d(t, "h", function () {
                    return se;
                }),
                n.d(t, "i", function () {
                    return Z;
                }),
                n.d(t, "j", function () {
                    return Q;
                }),
                n.d(t, "k", function () {
                    return N;
                }),
                n.d(t, "l", function () {
                    return ie;
                }),
                n.d(t, "m", function () {
                    return Ie;
                }),
                n.d(t, "n", function () {
                    return le;
                }),
                n.d(t, "o", function () {
                    return fe;
                }),
                n.d(t, "p", function () {
                    return de;
                }),
                n.d(t, "q", function () {
                    return pe;
                }),
                n.d(t, "r", function () {
                    return ue;
                }),
                n.d(t, "s", function () {
                    return me;
                }),
                n.d(t, "t", function () {
                    return he;
                }),
                n.d(t, "u", function () {
                    return j;
                }),
                n.d(t, "v", function () {
                    return ee;
                }),
                n.d(t, "w", function () {
                    return ve;
                }),
                n.d(t, "x", function () {
                    return _e;
                }),
                n.d(t, "y", function () {
                    return D;
                }),
                n.d(t, "z", function () {
                    return V;
                }),
                n.d(t, "A", function () {
                    return te;
                }),
                n.d(t, "B", function () {
                    return $;
                }),
                n.d(t, "C", function () {
                    return H;
                }),
                n.d(t, "D", function () {
                    return ye;
                }),
                n.d(t, "E", function () {
                    return I;
                }),
                n.d(t, "F", function () {
                    return Ee;
                }),
                n.d(t, "G", function () {
                    return re;
                }),
                n.d(t, "H", function () {
                    return we;
                }),
                n.d(t, "I", function () {
                    return Se;
                }),
                n.d(t, "J", function () {
                    return C;
                }),
                n.d(t, "K", function () {
                    return P;
                }),
                n.d(t, "L", function () {
                    return z;
                }),
                n.d(t, "M", function () {
                    return U;
                }),
                n.d(t, "N", function () {
                    return oe;
                }),
                n.d(t, "O", function () {
                    return Oe;
                }),
                n.d(t, "P", function () {
                    return ne;
                }),
                n.d(t, "Q", function () {
                    return Re;
                }),
                n.d(t, "R", function () {
                    return ae;
                }),
                n.d(t, "S", function () {
                    return G;
                }),
                n.d(t, "T", function () {
                    return B;
                }),
                n.d(t, "U", function () {
                    return M;
                }),
                n.d(t, "V", function () {
                    return F;
                }),
                n.d(t, "W", function () {
                    return Ae;
                }),
                n.d(t, "X", function () {
                    return X;
                });
            var r = n("K4DB"),
                o = n.n(r),
                i = n("+IV6"),
                a = n.n(i),
                c = n("eef+"),
                s = n.n(c),
                u = n("5WRv"),
                l = n.n(u),
                f = n("OvAC"),
                d = n.n(f),
                p = n("SDJZ"),
                m = n.n(p),
                h = n("NToG"),
                v = n.n(h),
                g = n("e+GP"),
                _ = n.n(g),
                y = (n("nxTg"), n("NWgQ")),
                E = n.n(y),
                b = n("tyvn"),
                w = n("9va6"),
                S = n("cneo");
            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? O(Object(n), !0).forEach(function (t) {
                              d()(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : O(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            function T(e, t, n, r) {
                document.addEventListener("keydown", function (o) {
                    var i = "number" == typeof t ? o.keyCode === t : o.key === t,
                        a = (!n || o.ctrlKey) && (!r || o.shiftKey);
                    i && a && e();
                });
            }
            function R(e) {
                if (e && e.length > 0) {
                    for (var t = E.a.parse(window.location.search), n = 0; n < e.length; n++) delete t[e[n]];
                    var r = E.a.stringify(t);
                    window.history.replaceState(null, document.title, "".concat(window.location.pathname).concat(r.length > 0 ? "?".concat(r) : ""));
                }
            }
            function N() {
                var e = document.domain || "",
                    t = e.split("."),
                    n = t.length;
                return n > 2 && ((e = "".concat(t[n - 2], ".").concat(t[n - 1])), 2 === t[n - 2].length && 2 === t[n - 1].length && (e = "".concat(t[n - 3], ".").concat(e))), e;
            }
            function I() {
                try {
                    return window.self !== window.top;
                } catch (e) {
                    return !0;
                }
            }
            function C() {
                return window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches;
            }
            var x = !1;
            function k() {
                window.addEventListener(
                    "touchstart",
                    function e() {
                        (x = !0), window.removeEventListener("touchstart", e, !1);
                    },
                    !1
                );
            }
            function P() {
                return x;
            }
            function j(e) {
                var t = " ".concat(document.cookie),
                    n = " ".concat(e, "="),
                    r = null,
                    o = 0,
                    i = 0;
                if (t.length > 0 && -1 !== (o = t.indexOf(n))) {
                    (o += n.length), -1 === (i = t.indexOf(";", o)) && (i = t.length), (r = decodeURIComponent(t.substring(o, i)));
                    try {
                        r = JSON.parse(r);
                    } catch (e) {
                        return r;
                    }
                }
                return r;
            }
            var L = {};
            function M(e, t, n, r) {
                try {
                    var o = "".concat(e, "_").concat(t);
                    r && (L[o] = r);
                    var i = "string" != typeof n ? JSON.stringify(n) : n;
                    localStorage.setItem(o, i);
                } catch (e) {}
            }
            function D(e, t, n) {
                var r;
                try {
                    var o = "".concat(e, "_").concat(t),
                        i = localStorage.getItem(o),
                        a = n || L[o];
                    void 0 !== i && (r = "function" == typeof a ? a(i) : i);
                } catch (e) {}
                return r;
            }
            function F(e, t, n) {
                M("*", e, t, n);
            }
            function V(e, t) {
                return D("*", e, t);
            }
            function B(e) {
                return (function (e, t) {
                    try {
                        var n = "".concat(e, "_").concat(t);
                        localStorage.removeItem(n);
                    } catch (e) {}
                })("*", e);
            }
            function U(e) {
                if (e)
                    try {
                        return JSON.parse(e);
                    } catch (e) {}
                return null;
            }
            function G(e) {
                !(function (e, t, n, r) {
                    var o = n ? new Date(1e3 * n) : new Date(Date.now() + 26784e5);
                    document.cookie = ""
                        .concat(e, "=")
                        .concat("object" === _()(t) ? JSON.stringify(t) : t, "; expires=")
                        .concat(o.toUTCString(), "; path=/;")
                        .concat(r ? "domain=".concat(r, ";") : "");
                })(e, null, -1);
            }
            var K = Object.values(b.sd);
            function z() {
                return Boolean(j(b.rd));
            }
            function H() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && j(b.rd);
                if (e && K.includes(e)) return e;
                var t = E.a.parse(window.location.search).webview;
                return t && K.includes(t) ? t : null;
            }
            var W = ["complete", "interactive"];
            function X() {
                return W.includes(document.readyState)
                    ? Promise.resolve()
                    : new Promise(function (e) {
                          document.addEventListener("readystatechange", function t() {
                              W.includes(document.readyState) && (document.removeEventListener("readystatechange", t), e());
                          });
                      });
            }
            function q(e, t, n, r) {
                var o,
                    i = arguments.length,
                    a = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : _()(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
                return i > 3 && a && Object.defineProperty(t, n, a), a;
            }
            var Y = (function () {
                    var e = (function () {
                        function e(t, n) {
                            var r = this;
                            m()(this, e), (this.models = Object(S.observable)([])), (this.options = null), (this.model = null), (this.idsHash = {}), (this.sortBy = Object(S.observable)([]));
                            var o = [];
                            w.map.bind(this, this.models),
                                (this.options = n),
                                t &&
                                    t.length &&
                                    t.forEach(function (e) {
                                        r.models.push(Object.assign({}, e)), o.push(Object.assign({}, e));
                                    }),
                                o.length && this.onAdd(o),
                                this.sort();
                        }
                        return (
                            v()(e, [
                                {
                                    key: "sort",
                                    value: function () {
                                        var e = A({}, this.options);
                                        e && e.sort && this.models.replace(Object(w.orderBy)(this.models, e.sort, e.order)), this.updateHash();
                                    },
                                },
                                {
                                    key: "getById",
                                    value: function (e) {
                                        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                                            ? this.models.length > this.idsHash[e]
                                                ? this.models[this.idsHash[e]]
                                                : void 0
                                            : this.models.length > this.idsHash[e]
                                            ? Object(S.toJS)(this.models[this.idsHash[e]])
                                            : void 0;
                                    },
                                },
                                {
                                    key: "indexOf",
                                    value: function (e) {
                                        return this.idsHash[e];
                                    },
                                },
                                {
                                    key: "getFirst",
                                    value: function (e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                            n = this.get(e, t);
                                        return Array.isArray(n) ? (n.length ? n[0] : void 0) : n;
                                    },
                                },
                                {
                                    key: "get",
                                    value: function (e) {
                                        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                                            ? "number" == typeof e || "string" == typeof e
                                                ? this.getById(e, !0)
                                                : Object(w.filter)(this.models, e)
                                            : "number" == typeof e || "string" == typeof e
                                            ? this.getById(e)
                                            : Object(S.toJS)(Object(w.filter)(this.models, e));
                                    },
                                },
                                {
                                    key: "onRemove",
                                    value: function (e) {
                                        return e;
                                    },
                                },
                                {
                                    key: "onAdd",
                                    value: function (e) {
                                        return e;
                                    },
                                },
                                {
                                    key: "reset",
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                        this.models.replace(l()(e)), this.sort();
                                    },
                                },
                                {
                                    key: "update",
                                    value: function (e, t) {
                                        var n = this,
                                            r = [],
                                            o = [],
                                            i = {};
                                        if (e && Array.isArray(e))
                                            e.forEach(function (e) {
                                                var r = n.getById(e.id, !0);
                                                (i[e.id] = 1),
                                                    r
                                                        ? !t || (void 0 !== !t.merge && !0 !== t.merge) || Object.assign(r, e)
                                                        : (t && void 0 !== t.add && !t.add) || (n.models.push(n.model ? Object.assign({}, n.model, e) : e), o.push(Object.assign({}, e)), n.onAdd(), n.sort());
                                            }),
                                                o.length && this.onAdd(o),
                                                (t && void 0 !== t.remove && !t.remove) ||
                                                    this.models.forEach(function (e) {
                                                        i[e.id] || (n.models.remove(e) && r.push(e));
                                                    }),
                                                r && r.length && (this.updateHash(), this.onRemove(Object(S.toJS)(r)));
                                        else if (t && t.remove) {
                                            var a = Object(S.toJS)(this.models);
                                            this.reset(), this.onRemove(a);
                                        }
                                    },
                                },
                                {
                                    key: "removeAll",
                                    value: function () {
                                        this.models.length && (this.models.clear(), this.updateHash());
                                    },
                                },
                                {
                                    key: "removeModel",
                                    value: function (e) {
                                        var t,
                                            n = this.getById(e, !0);
                                        return n && (t = this.models.remove(n)), { removedModel: n, isRemoved: t };
                                    },
                                },
                                {
                                    key: "remove",
                                    value: function (e) {
                                        var t = this,
                                            n = [];
                                        if (Array.isArray(e))
                                            e.forEach(function (e) {
                                                var r = t.removeModel(e.id);
                                                r.isRemoved && (t.updateHash(), r.removedModel && n.push(r.removedModel));
                                            });
                                        else {
                                            var r = this.removeModel(e);
                                            r.isRemoved && (this.updateHash(), r.removedModel && n.push(r.removedModel));
                                        }
                                        n && n.length > 0 && this.onRemove(Object(S.toJS)(n));
                                    },
                                },
                                {
                                    key: "updateHash",
                                    value: function () {
                                        var e = this;
                                        (this.idsHash = {}),
                                            this.models.length && (this.sortBy.length || "function" == typeof this.sortBy) && this.models.replace(Object(w.sortBy)(this.models, this.sortBy)),
                                            this.models.length &&
                                                void 0 !== this.models[0].id &&
                                                this.models.forEach(function (t, n) {
                                                    e.idsHash[t.id] = n;
                                                });
                                    },
                                },
                                {
                                    key: "count",
                                    get: function () {
                                        return this.models.length;
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                    return (
                        q([S.observable], e.prototype, "models", void 0),
                        q([S.computed], e.prototype, "count", null),
                        q([S.action], e.prototype, "reset", null),
                        q([S.action], e.prototype, "update", null),
                        q([S.action], e.prototype, "removeAll", null),
                        q([S.action], e.prototype, "remove", null),
                        e
                    );
                })(),
                J = (function () {
                    var e = (function (e) {
                        function t(e, n) {
                            var r;
                            m()(this, t);
                            var i = (r = o()(this, a()(t).call(this, e, n))).models.find(function (e) {
                                return Boolean(e.selected);
                            });
                            return i && (r.selected = i), r;
                        }
                        return (
                            s()(t, e),
                            v()(t, [
                                {
                                    key: "onRemove",
                                    value: function (e) {
                                        var t = this;
                                        e.some(function (e) {
                                            if (t.selected && e.id === t.selected.id) {
                                                var n = t.models[t.models.length - 1];
                                                "object" === _()(n) ? ((n.selected = !0), (t.selected = n)) : (t.selected = void 0);
                                            }
                                            return !0;
                                        });
                                    },
                                },
                                {
                                    key: "update",
                                    value: function (e, t) {
                                        for (var n, r = this, o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++) i[a - 2] = arguments[a];
                                        var c = [],
                                            s = {};
                                        e && !Array.isArray(e) && (e = [e]),
                                            e.forEach(function (e) {
                                                var n;
                                                r.options && r.options.dataParseModel && (e = (n = r.options.dataParseModel).parse.apply(n, [e].concat(i)));
                                                var o = r.getById(e.id, !0);
                                                if (((s[e.id] = 1), o)) r.selected && r.selected.id === e.id && (e.selected = !0), Object.assign(o, e);
                                                else if (!t || void 0 === t.add || t.add) {
                                                    if ((!t || void 0 === t.select || t.select ? (e.selected = !0) : (e.selected = !1), r.models.push(r.model ? Object.assign({}, r.model, e) : e), e.selected)) {
                                                        r.selected = r.models.find(function (t) {
                                                            return t.id === e.id;
                                                        });
                                                        var a = r.models.find(function (e) {
                                                            return Boolean(e.selected);
                                                        });
                                                        a && r.selected && a.id !== r.selected.id && (a.selected = !1);
                                                    }
                                                    c.push(Object.assign({}, e));
                                                }
                                            }),
                                            c.length && (this.sort(), this.onAdd(c)),
                                            (t && void 0 !== t.remove && !t.remove) ||
                                                (n = Object(w.remove)(this.models, function (e) {
                                                    return !s[e.id];
                                                })),
                                            n && n.length && (this.updateHash(), this.onRemove(Object(S.toJS)(n)));
                                    },
                                },
                                {
                                    key: "select",
                                    value: function (e) {
                                        var t = "object" !== _()(e) ? e : e.id,
                                            n = this.models.find(function (e) {
                                                return e.id === t;
                                            }),
                                            r =
                                                this.selected ||
                                                this.models.find(function (e) {
                                                    return Boolean(e.selected);
                                                });
                                        return n && (r && (r.selected = !1), (n.selected = !0), (this.selected = n)), n;
                                    },
                                },
                                {
                                    key: "unSelect",
                                    value: function () {
                                        var e =
                                            this.selected ||
                                            this.models.find(function (e) {
                                                return Boolean(e.selected);
                                            });
                                        e && (e.selected = !1), (this.selected = void 0);
                                    },
                                },
                            ]),
                            t
                        );
                    })(Y);
                    return q([S.observable], e.prototype, "selected", void 0), q([S.action], e.prototype, "update", null), q([S.action], e.prototype, "select", null), q([S.action], e.prototype, "unSelect", null), e;
                })();
            function Z(e) {
                return Math.floor(e / 1e3);
            }
            function Q(e) {
                return { day: e.getDate(), month: e.getMonth(), year: e.getFullYear() };
            }
            function $(e, t, n) {
                var r = 60 * t;
                return !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3] ? e + n + r : e - n - r;
            }
            function ee(e, t, n) {
                return new Date(1e3 * $(e, t, n));
            }
            function te(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Date();
                return Math.floor(t.getTime() / 1e3) - e;
            }
            function ne(e) {
                var t = Math.floor(e / 86400),
                    n = 86400 * t,
                    r = Math.floor((e - n) / 3600),
                    o = n + 3600 * r,
                    i = Math.floor((e - o) / 60);
                return { d: t, h: r, m: i, s: Math.floor(e - o - 60 * i) };
            }
            function re(e) {
                return ["ar_AE", "ur_PK"].includes(e);
            }
            function oe(e) {
                return e.split("_")[0];
            }
            function ie(e, t) {
                var n,
                    r = !1,
                    o = void 0;
                return (
                    t.forEach(function (t, i) {
                        r && !o && (o = i), i === e && (r = !0), r || (n = i);
                    }),
                    o || n
                );
            }
            function ae(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
            }
            function ce(e) {
                switch (e) {
                    case "rub":
                        return "₽";
                    case "usd":
                        return "$";
                    case "eur":
                        return "€";
                    case "demo":
                        return "Đ";
                    case "brl":
                        return "R$";
                    case "cny":
                        return "¥";
                    case "thb":
                        return "฿";
                    default:
                        return "₽";
                }
            }
            function se(e) {
                switch (e) {
                    case "rub":
                        return "9";
                    case "usd":
                    case "eur":
                        return "7";
                    case "demo":
                        return "9";
                    case "brl":
                        return "7";
                    default:
                        return "9";
                }
            }
            function ue(e) {
                e && window.dataLayer && window.dataLayer.push(e);
            }
            function le(e, t, n) {
                var r = window.gaStats;
                r &&
                    r.gaFxDealStart &&
                    (ue({ event: "uaGtmEvents_clicks", eventCategory: "open_deal", eventAction: "".concat(e, "/").concat(t), eventLabel: n, deal_response_time: Math.round(performance.now() - r.gaFxDealStart).toString() }),
                    delete r.gaFxDealStart);
            }
            function fe() {
                window.gaStats || (window.gaStats = {}), (window.gaStats.gaFxDealStart = performance.now());
            }
            function de() {
                var e = window.gaStats;
                e &&
                    e.gaPlatformStart &&
                    (ue({
                        event: "uaGtmEvents_clicks",
                        eventCategory: "chart_data_recived",
                        eventAction: "chart_data_recived",
                        eventLabel: "chart_data_recived",
                        chart_response_time: Math.round(performance.now() - e.gaPlatformStart).toString(),
                    }),
                    delete e.gaPlatformStart);
            }
            function pe() {
                window.gaStats || (window.gaStats = {}), (window.gaStats.gaPlatformStart = performance.now());
            }
            function me(e, t) {
                var n = e > 99999999 ? e : "00000000".concat(e).slice(-8);
                return "".concat(n).concat(t ? t.toUpperCase() : "");
            }
            function he() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function (e, t) {
                    return (e[t.id] = A({}, t)), e;
                }, {});
            }
            function ve(e, t) {
                var n,
                    r,
                    o,
                    i,
                    a,
                    c = e.toLowerCase();
                return (
                    t.forEach(function (e) {
                        var t = e.id.toLowerCase();
                        t !== c || e.locked || e.disabled || (n = e.id), "bitcoin" !== t || e.locked || e.disabled || (o = e.id), e.disabled || i || (i = e.id), e.locked || e.disabled || a || (a = e.id), t !== c || e.disabled || (r = e.id);
                    }),
                    n || o || a || r || i || e
                );
            }
            var ge = { ar_AE: !0, es_LA: !0, id_ID: !0, ru_RU: !0, th_TH: !0, tr_TR: !0, zh_CN: !0 };
            function _e(e, t) {
                return "".concat(t, "/images/licences/finacom-plc-certificate").concat(ge[e] ? "-".concat(e) : "", ".pdf");
            }
            function ye(e) {
                return Object(w.groupBy)(e, function (e) {
                    var t = Q(e.groupDate),
                        n = t.day,
                        r = t.month,
                        o = t.year;
                    return "".concat(n, "_").concat(r, "_").concat(o);
                });
            }
            function Ee(e) {
                return Object(w.has)(e.response, "status") && 401 === e.response.status;
            }
            var be = "stage307";
            function we() {
                return !window.location.host.includes(be);
            }
            function Se() {
                return !!V("project_user");
            }
            function Oe(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return Object(w.isNull)(n) ? t : n;
            }
            function Ae(e, t) {
                if (e.models.length > t) {
                    for (var n = [], r = t; r < e.models.length; r++) {
                        var o = e.models[r];
                        n.push({ id: o.id });
                    }
                    n.length && e.remove(n);
                }
            }
            function Te(e, t) {
                var n = (t || new Date()).getTime();
                return new Promise(function (r) {
                    e.request({ type: "request", event_name: "servertime:up", data_type: "servertime" }).onResponse(function (e, o, i) {
                        var a = (t || new Date()).getTime();
                        r({ delta: Math.abs(n - a), timestamp: i.timestamp, timeDelta: te(i.timestamp, t || new Date()) });
                    });
                });
            }
            function Re(e, t, n, r) {
                for (var o = [], i = 0, a = e; i < a; i++) o.push(Te(t, r));
                Promise.all(o)
                    .then(function (e) {
                        var t = Object(w.reduce)(
                            e,
                            function (e, t) {
                                return (void 0 === t.delta || ("number" == typeof e.delta && "number" == typeof t.delta && e.delta < t.delta)) && (t = Object.assign({}, e)), t;
                            },
                            { delta: void 0, timestamp: void 0, timeDelta: void 0 }
                        );
                        t && "number" == typeof t.timeDelta && n(t.timeDelta);
                    })
                    .catch(function () {});
            }
            function Ne(e) {
                return "string" == typeof e ? "true" === e : Boolean(e);
            }
            function Ie(e, t, n, r) {
                var o = t || ".",
                    i = e;
                return (
                    "string" == typeof i && ((i = i.replace(/\D+/g, "")), (i = Number(i))),
                    (i = i.toFixed("number" != typeof r ? 2 : r)),
                    "." !== o && (i = i.replace(".", o)),
                    n
                        ? (function (e, t) {
                              return (
                                  t &&
                                      ((e = e
                                          .split("")
                                          .reverse()
                                          .join("")
                                          .replace(/(\d{3})/g, "$1 ")
                                          .replace(/\s$/, "")
                                          .split("")
                                          .reverse()
                                          .join("")),
                                      " " !== t && (e = e.replace(/ /g, t))),
                                  e
                              );
                          })(i, n)
                        : i
                );
            }
        },
        fFdx: function (e, t) {
            function n(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a),
                        s = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            e.exports = function (e) {
                return function () {
                    var t = this,
                        r = arguments;
                    return new Promise(function (o, i) {
                        var a = e.apply(t, r);
                        function c(e) {
                            n(a, o, i, c, s, "next", e);
                        }
                        function s(e) {
                            n(a, o, i, c, s, "throw", e);
                        }
                        c(void 0);
                    });
                };
            };
        },
        fIq3: function (e, t, n) {
            var r = n("X6VK"),
                o = n("SeNM");
            r(r.S + r.F * (Number.parseInt != o), "Number", { parseInt: o });
        },
        fMmQ: function (e, t, n) {},
        fOBY: function (e, t, n) {},
        fQty: function (e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        },
        fg5Z: function (e, t, n) {
            var r = n("U1KF"),
                o = n("1Tj+"),
                i = n("A1KM"),
                a = n("ezc+"),
                c = n("X6VK"),
                s = n("WWmS"),
                u = n("PAFS"),
                l = n("Bsg+");
            c(c.S, "Reflect", {
                set: function e(t, n, c) {
                    var f,
                        d,
                        p = arguments.length < 4 ? t : arguments[3],
                        m = o.f(u(t), n);
                    if (!m) {
                        if (l((d = i(t)))) return e(d, n, c, p);
                        m = s(0);
                    }
                    if (a(m, "value")) {
                        if (!1 === m.writable || !l(p)) return !1;
                        if ((f = o.f(p, n))) {
                            if (f.get || f.set || !1 === f.writable) return !1;
                            (f.value = c), r.f(p, n, f);
                        } else r.f(p, n, s(0, c));
                        return !0;
                    }
                    return void 0 !== m.set && (m.set.call(p, c), !0);
                },
            });
        },
        "fwl+": function (e, t, n) {
            "use strict";
            var r = n("ovh1");
            function o(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
            }
            e.exports = function (e, t, n) {
                if (!t) return e;
                var i;
                if (n) i = n(t);
                else if (r.isURLSearchParams(t)) i = t.toString();
                else {
                    var a = [];
                    r.forEach(t, function (e, t) {
                        null !== e &&
                            void 0 !== e &&
                            (r.isArray(e) ? (t += "[]") : (e = [e]),
                            r.forEach(e, function (e) {
                                r.isDate(e) ? (e = e.toISOString()) : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e));
                            }));
                    }),
                        (i = a.join("&"));
                }
                if (i) {
                    var c = e.indexOf("#");
                    -1 !== c && (e = e.slice(0, c)), (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
                }
                return e;
            };
        },
        fxUj: function (e, t, n) {
            t.f = n("9dxi");
        },
        gP2F: function (e, t, n) {
            e.exports = n.p + "../images/awards_6.15607804.jpg";
        },
        gRlk: function (e, t, n) {
            var r = n("X6VK"),
                o = n("R5TD"),
                i = n("E7Vc");
            e.exports = function (e, t) {
                var n = (o.Object || {})[e] || Object[e],
                    a = {};
                (a[e] = t(n)),
                    r(
                        r.S +
                            r.F *
                                i(function () {
                                    n(1);
                                }),
                        "Object",
                        a
                    );
            };
        },
        gk7b: function (e, t, n) {
            e.exports = n.p + "../images/LCP-bg.0a8d9024.jpg";
        },
        gsnR: function (e, t, n) {
            "use strict";
            n("hGr/")(
                "trimLeft",
                function (e) {
                    return function () {
                        return e(this, 1);
                    };
                },
                "trimStart"
            );
        },
        "gtO+": function (e, t, n) {
            "use strict";
            var r = n("b8Rm");
            e.exports.f = function (e) {
                return new (function (e) {
                    var t, n;
                    (this.promise = new e(function (e, r) {
                        if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                        (t = e), (n = r);
                    })),
                        (this.resolve = r(t)),
                        (this.reject = r(n));
                })(e);
            };
        },
        guUT: function (e, t, n) {
            "use strict";
            var r = n("ovh1"),
                o = n("4OlW"),
                i = n("e5jZ"),
                a = n("bRtl");
            function c(e) {
                e.cancelToken && e.cancelToken.throwIfRequested();
            }
            e.exports = function (e) {
                return (
                    c(e),
                    (e.headers = e.headers || {}),
                    (e.data = o(e.data, e.headers, e.transformRequest)),
                    (e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
                    r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                        delete e.headers[t];
                    }),
                    (e.adapter || a.adapter)(e).then(
                        function (t) {
                            return c(e), (t.data = o(t.data, t.headers, e.transformResponse)), t;
                        },
                        function (t) {
                            return i(t) || (c(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
                        }
                    )
                );
            };
        },
        h1Um: function (e, t, n) {
            "use strict";
            var r = n("Rzld"),
                o = n("hUM7");
            e.exports = function (e, t) {
                return e && !r(t) ? o(e, t) : t;
            };
        },
        h8op: function (e, t, n) {
            e.exports = n.p + "../images/awards_11.261b7d40.jpg";
        },
        "hGr/": function (e, t, n) {
            var r = n("X6VK"),
                o = n("GCOZ"),
                i = n("E7Vc"),
                a = n("SvMv"),
                c = "[" + a + "]",
                s = RegExp("^" + c + c + "*"),
                u = RegExp(c + c + "*$"),
                l = function (e, t, n) {
                    var o = {},
                        c = i(function () {
                            return !!a[e]() || "​" != "​"[e]();
                        }),
                        s = (o[e] = c ? t(f) : a[e]);
                    n && (o[n] = s), r(r.P + r.F * c, "String", o);
                },
                f = (l.trim = function (e, t) {
                    return (e = String(o(e))), 1 & t && (e = e.replace(s, "")), 2 & t && (e = e.replace(u, "")), e;
                });
            e.exports = l;
        },
        hMok: function (e, t, n) {
            n("b01t")("Float32", 4, function (e) {
                return function (t, n, r) {
                    return e(this, t, n, r);
                };
            });
        },
        hUM7: function (e, t, n) {
            "use strict";
            e.exports = function (e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
            };
        },
        hYEA: function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("cb3D"),
                i = n("ROCd"),
                a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
            r(r.P + r.F * a, "String", {
                padStart: function (e) {
                    return o(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
                },
            });
        },
        hmFC: function (e, t, n) {
            "use strict";
            var r = n("czhI"),
                o = n.n(r),
                i = n("9va6"),
                a = n("f6l3"),
                c = n("6eLe"),
                s = "GTM-M98VLD",
                u = "GTM-TTT3PGV",
                l = "GTM-M98VLD",
                f = "https://alpha.olymptrade.com/ga-collect?";
            function d() {
                if (navigator.userAgent.includes("YaBrowser")) {
                    var e = Object(i.get)(window, "_globalsConfig.user.id", "test"),
                        t = window.location,
                        n = t.href,
                        r = t.hash,
                        a = t.origin,
                        c = document,
                        s = c.charset,
                        u = c.title,
                        l = window.screen,
                        d = l.width,
                        p = l.height;
                    o()({
                        method: "GET",
                        url: f,
                        params: {
                            v: "1",
                            t: "event",
                            ec: "error_load_gtm",
                            ea: "error_load_gtm",
                            tid: "UA-54693962-11",
                            dl: n.replace(r, ""),
                            dp: n.replace(a, "") + r,
                            ul: navigator.language.toLowerCase(),
                            de: s,
                            dt: u,
                            sr: "".concat(d, "x").concat(p),
                            cid: "test",
                            cd6: e,
                            uid: e,
                        },
                    });
                }
            }
            t.a = function () {
                try {
                    !(function (e, t, n, r, o) {
                        (e[r] = e[r] || []), e[r].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                        var i = t.getElementsByTagName(n)[0],
                            a = t.createElement(n);
                        (a.async = !0), (a.src = "//www.googletagmanager.com/gtm.js?id=" + o), (a.onerror = d), i.parentNode.insertBefore(a, i);
                    })(window, document, "script", "dataLayer", c.h ? l : Object(a.L)() ? u : s);
                } catch (e) {}
            };
        },
        hzx0: function (e, t, n) {},
        i0F7: function (e, t, n) {
            "use strict";
            var r = n("ovh1");
            function o() {
                this.handlers = [];
            }
            (o.prototype.use = function (e, t) {
                return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
            }),
                (o.prototype.eject = function (e) {
                    this.handlers[e] && (this.handlers[e] = null);
                }),
                (o.prototype.forEach = function (e) {
                    r.forEach(this.handlers, function (t) {
                        null !== t && e(t);
                    });
                }),
                (e.exports = o);
        },
        iJnn: function (e, t, n) {
            var r = n("PAFS");
            e.exports = function (e, t, n, o) {
                try {
                    return o ? t(r(n)[0], n[1]) : t(n);
                } catch (t) {
                    var i = e.return;
                    throw (void 0 !== i && r(i.call(e)), t);
                }
            };
        },
        iNmH: function (e, t) {
            e.exports = function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                }
            };
        },
        iXzu: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = (function () {
                    if ("undefined" != typeof Map) return Map;
                    function e(e, t) {
                        var n = -1;
                        return (
                            e.some(function (e, r) {
                                return e[0] === t && ((n = r), !0);
                            }),
                            n
                        );
                    }
                    return (function () {
                        function t() {
                            this.__entries__ = [];
                        }
                        return (
                            Object.defineProperty(t.prototype, "size", {
                                get: function () {
                                    return this.__entries__.length;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (t.prototype.get = function (t) {
                                var n = e(this.__entries__, t),
                                    r = this.__entries__[n];
                                return r && r[1];
                            }),
                            (t.prototype.set = function (t, n) {
                                var r = e(this.__entries__, t);
                                ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([t, n]);
                            }),
                            (t.prototype.delete = function (t) {
                                var n = this.__entries__,
                                    r = e(n, t);
                                ~r && n.splice(r, 1);
                            }),
                            (t.prototype.has = function (t) {
                                return !!~e(this.__entries__, t);
                            }),
                            (t.prototype.clear = function () {
                                this.__entries__.splice(0);
                            }),
                            (t.prototype.forEach = function (e, t) {
                                void 0 === t && (t = null);
                                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                    var o = r[n];
                                    e.call(t, o[1], o[0]);
                                }
                            }),
                            t
                        );
                    })();
                })(),
                o = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                i = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                a =
                    "function" == typeof requestAnimationFrame
                        ? requestAnimationFrame.bind(i)
                        : function (e) {
                              return setTimeout(function () {
                                  return e(Date.now());
                              }, 1e3 / 60);
                          },
                c = 2;
            var s = 20,
                u = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                l = "undefined" != typeof MutationObserver,
                f = (function () {
                    function e() {
                        (this.connected_ = !1),
                            (this.mutationEventsAdded_ = !1),
                            (this.mutationsObserver_ = null),
                            (this.observers_ = []),
                            (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                            (this.refresh = (function (e, t) {
                                var n = !1,
                                    r = !1,
                                    o = 0;
                                function i() {
                                    n && ((n = !1), e()), r && u();
                                }
                                function s() {
                                    a(i);
                                }
                                function u() {
                                    var e = Date.now();
                                    if (n) {
                                        if (e - o < c) return;
                                        r = !0;
                                    } else (n = !0), (r = !1), setTimeout(s, t);
                                    o = e;
                                }
                                return u;
                            })(this.refresh.bind(this), s));
                    }
                    return (
                        (e.prototype.addObserver = function (e) {
                            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
                        }),
                        (e.prototype.removeObserver = function (e) {
                            var t = this.observers_,
                                n = t.indexOf(e);
                            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
                        }),
                        (e.prototype.refresh = function () {
                            this.updateObservers_() && this.refresh();
                        }),
                        (e.prototype.updateObservers_ = function () {
                            var e = this.observers_.filter(function (e) {
                                return e.gatherActive(), e.hasActive();
                            });
                            return (
                                e.forEach(function (e) {
                                    return e.broadcastActive();
                                }),
                                e.length > 0
                            );
                        }),
                        (e.prototype.connect_ = function () {
                            o &&
                                !this.connected_ &&
                                (document.addEventListener("transitionend", this.onTransitionEnd_),
                                window.addEventListener("resize", this.refresh),
                                l
                                    ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 }))
                                    : (document.addEventListener("DOMSubtreeModified", this.refresh), (this.mutationEventsAdded_ = !0)),
                                (this.connected_ = !0));
                        }),
                        (e.prototype.disconnect_ = function () {
                            o &&
                                this.connected_ &&
                                (document.removeEventListener("transitionend", this.onTransitionEnd_),
                                window.removeEventListener("resize", this.refresh),
                                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                                this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
                                (this.mutationsObserver_ = null),
                                (this.mutationEventsAdded_ = !1),
                                (this.connected_ = !1));
                        }),
                        (e.prototype.onTransitionEnd_ = function (e) {
                            var t = e.propertyName,
                                n = void 0 === t ? "" : t;
                            u.some(function (e) {
                                return !!~n.indexOf(e);
                            }) && this.refresh();
                        }),
                        (e.getInstance = function () {
                            return this.instance_ || (this.instance_ = new e()), this.instance_;
                        }),
                        (e.instance_ = null),
                        e
                    );
                })(),
                d = function (e, t) {
                    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                        var o = r[n];
                        Object.defineProperty(e, o, { value: t[o], enumerable: !1, writable: !1, configurable: !0 });
                    }
                    return e;
                },
                p = function (e) {
                    return (e && e.ownerDocument && e.ownerDocument.defaultView) || i;
                },
                m = E(0, 0, 0, 0);
            function h(e) {
                return parseFloat(e) || 0;
            }
            function v(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.reduce(function (t, n) {
                    return t + h(e["border-" + n + "-width"]);
                }, 0);
            }
            function g(e) {
                var t = e.clientWidth,
                    n = e.clientHeight;
                if (!t && !n) return m;
                var r = p(e).getComputedStyle(e),
                    o = (function (e) {
                        for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var o = r[n],
                                i = e["padding-" + o];
                            t[o] = h(i);
                        }
                        return t;
                    })(r),
                    i = o.left + o.right,
                    a = o.top + o.bottom,
                    c = h(r.width),
                    s = h(r.height);
                if (
                    ("border-box" === r.boxSizing && (Math.round(c + i) !== t && (c -= v(r, "left", "right") + i), Math.round(s + a) !== n && (s -= v(r, "top", "bottom") + a)),
                    !(function (e) {
                        return e === p(e).document.documentElement;
                    })(e))
                ) {
                    var u = Math.round(c + i) - t,
                        l = Math.round(s + a) - n;
                    1 !== Math.abs(u) && (c -= u), 1 !== Math.abs(l) && (s -= l);
                }
                return E(o.left, o.top, c, s);
            }
            var _ =
                "undefined" != typeof SVGGraphicsElement
                    ? function (e) {
                          return e instanceof p(e).SVGGraphicsElement;
                      }
                    : function (e) {
                          return e instanceof p(e).SVGElement && "function" == typeof e.getBBox;
                      };
            function y(e) {
                return o
                    ? _(e)
                        ? (function (e) {
                              var t = e.getBBox();
                              return E(0, 0, t.width, t.height);
                          })(e)
                        : g(e)
                    : m;
            }
            function E(e, t, n, r) {
                return { x: e, y: t, width: n, height: r };
            }
            var b = (function () {
                    function e(e) {
                        (this.broadcastWidth = 0), (this.broadcastHeight = 0), (this.contentRect_ = E(0, 0, 0, 0)), (this.target = e);
                    }
                    return (
                        (e.prototype.isActive = function () {
                            var e = y(this.target);
                            return (this.contentRect_ = e), e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
                        }),
                        (e.prototype.broadcastRect = function () {
                            var e = this.contentRect_;
                            return (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e;
                        }),
                        e
                    );
                })(),
                w = (function () {
                    return function (e, t) {
                        var n,
                            r,
                            o,
                            i,
                            a,
                            c,
                            s,
                            u =
                                ((r = (n = t).x),
                                (o = n.y),
                                (i = n.width),
                                (a = n.height),
                                (c = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                                (s = Object.create(c.prototype)),
                                d(s, { x: r, y: o, width: i, height: a, top: o, right: r + i, bottom: a + o, left: r }),
                                s);
                        d(this, { target: e, contentRect: u });
                    };
                })(),
                S = (function () {
                    function e(e, t, n) {
                        if (((this.activeObservations_ = []), (this.observations_ = new r()), "function" != typeof e)) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        (this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n);
                    }
                    return (
                        (e.prototype.observe = function (e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof p(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) || (t.set(e, new b(e)), this.controller_.addObserver(this), this.controller_.refresh());
                            }
                        }),
                        (e.prototype.unobserve = function (e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof p(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
                            }
                        }),
                        (e.prototype.disconnect = function () {
                            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
                        }),
                        (e.prototype.gatherActive = function () {
                            var e = this;
                            this.clearActive(),
                                this.observations_.forEach(function (t) {
                                    t.isActive() && e.activeObservations_.push(t);
                                });
                        }),
                        (e.prototype.broadcastActive = function () {
                            if (this.hasActive()) {
                                var e = this.callbackCtx_,
                                    t = this.activeObservations_.map(function (e) {
                                        return new w(e.target, e.broadcastRect());
                                    });
                                this.callback_.call(e, t, e), this.clearActive();
                            }
                        }),
                        (e.prototype.clearActive = function () {
                            this.activeObservations_.splice(0);
                        }),
                        (e.prototype.hasActive = function () {
                            return this.activeObservations_.length > 0;
                        }),
                        e
                    );
                })(),
                O = "undefined" != typeof WeakMap ? new WeakMap() : new r(),
                A = (function () {
                    return function e(t) {
                        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        var n = f.getInstance(),
                            r = new S(t, n, this);
                        O.set(this, r);
                    };
                })();
            ["observe", "unobserve", "disconnect"].forEach(function (e) {
                A.prototype[e] = function () {
                    var t;
                    return (t = O.get(this))[e].apply(t, arguments);
                };
            });
            var T = void 0 !== i.ResizeObserver ? i.ResizeObserver : A;
            t.default = T;
        },
        imLM: function (e, t, n) {
            var r = n("Bsg+");
            n("gRlk")("isSealed", function (e) {
                return function (t) {
                    return !r(t) || (!!e && e(t));
                };
            });
        },
        it7j: function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("1wfo")(5),
                i = !0;
            "find" in [] &&
                Array(1).find(function () {
                    i = !1;
                }),
                r(r.P + r.F * i, "Array", {
                    find: function (e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                }),
                n("OfmW")("find");
        },
        iur1: function (e, t, n) {
            n("GGqZ") && "g" != /./g.flags && n("U1KF").f(RegExp.prototype, "flags", { configurable: !0, get: n("MBcE") });
        },
        "j/vf": function (e, t, n) {
            var r = n("zIds"),
                o = n("0oPD"),
                i = n("PAFS"),
                a = n("P56o").Reflect;
            e.exports =
                (a && a.ownKeys) ||
                function (e) {
                    var t = r.f(i(e)),
                        n = o.f;
                    return n ? t.concat(n(e)) : t;
                };
        },
        j2i0: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Math", {
                trunc: function (e) {
                    return (e > 0 ? Math.floor : Math.ceil)(e);
                },
            });
        },
        j3QZ: function (e, t, n) {
            "use strict";
            e.exports =
                n("wEu9") ||
                !n("E7Vc")(function () {
                    var e = Math.random();
                    __defineSetter__.call(null, e, function () {}), delete n("P56o")[e];
                });
        },
        jEou: function (e, t, n) {
            var r = n("Bsg+"),
                o = n("3ydu").set;
            e.exports = function (e, t, n) {
                var i,
                    a = t.constructor;
                return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && r(i) && o && o(e, i), e;
            };
        },
        jFWS: function (e, t) {
            e.exports = function (e) {
                return e
                    .replace(/[A-Z]/g, function (e) {
                        return "-" + e.toLowerCase();
                    })
                    .toLowerCase();
            };
        },
        jI75: function (e, t, n) {
            e.exports = n.p + "../images/awards_7.bef775d6.jpg";
        },
        jPEw: function (e, t, n) {
            var r = n("U1KF").f,
                o = n("ezc+"),
                i = n("9dxi")("toStringTag");
            e.exports = function (e, t, n) {
                e && !o((e = n ? e : e.prototype), i) && r(e, i, { configurable: !0, value: t });
            };
        },
        jPba: function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("R5TD"),
                i = n("P56o"),
                a = n("5Fu2"),
                c = n("khIB");
            r(r.P + r.R, "Promise", {
                finally: function (e) {
                    var t = a(this, o.Promise || i.Promise),
                        n = "function" == typeof e;
                    return this.then(
                        n
                            ? function (n) {
                                  return c(t, e()).then(function () {
                                      return n;
                                  });
                              }
                            : e,
                        n
                            ? function (n) {
                                  return c(t, e()).then(function () {
                                      throw n;
                                  });
                              }
                            : e
                    );
                },
            });
        },
        jirp: function (e, t, n) {
            var r = n("X6VK");
            r(r.P, "Array", { copyWithin: n("JKk3") }), n("OfmW")("copyWithin");
        },
        kd9Q: function (e, t) {
            e.exports = {
                isFunction: function (e) {
                    return "function" == typeof e;
                },
                isArray: function (e) {
                    return "[object Array]" === Object.prototype.toString.apply(e);
                },
                each: function (e, t) {
                    for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++);
                },
            };
        },
        khIB: function (e, t, n) {
            var r = n("PAFS"),
                o = n("Bsg+"),
                i = n("gtO+");
            e.exports = function (e, t) {
                if ((r(e), o(t) && t.constructor === e)) return t;
                var n = i.f(e);
                return (0, n.resolve)(t), n.promise;
            };
        },
        kluZ: function (e, t) {
            e.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            };
        },
        "l+bf": function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("UnHL"),
                i = n("b8Rm"),
                a = n("U1KF");
            n("GGqZ") &&
                r(r.P + n("j3QZ"), "Object", {
                    __defineSetter__: function (e, t) {
                        a.f(o(this), e, { set: i(t), enumerable: !0, configurable: !0 });
                    },
                });
        },
        l1H8: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return c;
            });
            var r = n("mXGw"),
                o = n.n(r),
                i = n("8Jek"),
                a = n.n(i),
                c =
                    (n("eJLk"),
                    function (e) {
                        return o.a.createElement("p", { className: a()("com-c-description", e.className) }, e.content);
                    });
        },
        l6wl: function (e, t, n) {
            "use strict";
            var r = n("OvAC"),
                o = n.n(r),
                i = n("mXGw"),
                a = n.n(i),
                c = n("8Jek"),
                s = n.n(c),
                u = (n("u6G8"), "entry-form-spinner");
            t.a = function (e) {
                var t = e.isAbsolute;
                return a.a.createElement(
                    "div",
                    { className: s()(u, o()({}, "".concat(u, "__position-absolute"), t)) },
                    a.a.createElement(
                        "svg",
                        { className: "".concat(u, "__circular"), viewBox: "25 25 50 50" },
                        a.a.createElement("circle", { className: "".concat(u, "__path"), cx: "50", cy: "50", r: "20", fill: "none", strokeWidth: "4", strokeMiterlimit: "10" })
                    )
                );
            };
        },
        lAKj: function (e, t, n) {
            "use strict";
            var r,
                o,
                i = n("MBcE"),
                a = RegExp.prototype.exec,
                c = String.prototype.replace,
                s = a,
                u = ((r = /a/), (o = /b*/g), a.call(r, "a"), a.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
                l = void 0 !== /()??/.exec("")[1];
            (u || l) &&
                (s = function (e) {
                    var t,
                        n,
                        r,
                        o,
                        s = this;
                    return (
                        l && (n = new RegExp("^" + s.source + "$(?!\\s)", i.call(s))),
                        u && (t = s.lastIndex),
                        (r = a.call(s, e)),
                        u && r && (s.lastIndex = s.global ? r.index + r[0].length : t),
                        l &&
                            r &&
                            r.length > 1 &&
                            c.call(r[0], n, function () {
                                for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0);
                            }),
                        r
                    );
                }),
                (e.exports = s);
        },
        lQyR: function (e, t, n) {
            "use strict";
            var r = n("uRBY")(!0);
            n("Jww/")(
                String,
                "String",
                function (e) {
                    (this._t = String(e)), (this._i = 0);
                },
                function () {
                    var e,
                        t = this._t,
                        n = this._i;
                    return n >= t.length ? { value: void 0, done: !0 } : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
                }
            );
        },
        lUNa: function (e, t, n) {
            var r = n("UnHL"),
                o = n("A1KM");
            n("gRlk")("getPrototypeOf", function () {
                return function (e) {
                    return o(r(e));
                };
            });
        },
        ltS6: function (e, t, n) {
            var r = n("LuBU"),
                o = n("0oPD"),
                i = n("IdFN");
            e.exports = function (e) {
                var t = r(e),
                    n = o.f;
                if (n) for (var a, c = n(e), s = i.f, u = 0; c.length > u; ) s.call(e, (a = c[u++])) && t.push(a);
                return t;
            };
        },
        "m+cO": function (e, t, n) {},
        m1Dn: function (e, t, n) {
            "use strict";
            var r = n("XQta"),
                o = n("SsG5");
            e.exports = n("AkS8")(
                "Set",
                function (e) {
                    return function () {
                        return e(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                {
                    add: function (e) {
                        return r.def(o(this, "Set"), (e = 0 === e ? 0 : e), e);
                    },
                },
                r
            );
        },
        mggL: function (e, t, n) {
            var r = n("Bsg+"),
                o = n("P56o").document,
                i = r(o) && r(o.createElement);
            e.exports = function (e) {
                return i ? o.createElement(e) : {};
            };
        },
        ml72: function (e, t, n) {
            var r = n("Cmsx"),
                o = n("GCOZ");
            e.exports = function (e) {
                return r(o(e));
            };
        },
        mvas: function (e, t, n) {
            "use strict";
            var r = n("SDJZ"),
                o = n.n(r),
                i = n("NToG"),
                a = n.n(i),
                c = n("K4DB"),
                s = n.n(c),
                u = n("+IV6"),
                l = n.n(u),
                f = n("eef+"),
                d = n.n(f),
                p = n("mXGw"),
                m = n.n(p),
                h = n("4Ebc"),
                v = n("f6l3"),
                g = n("tyvn"),
                _ = n("6eLe"),
                y = n("Ixt0"),
                E = n("u8vh"),
                b = n("D9Fv"),
                w = n.n(b),
                S = Object(p.lazy)(function () {
                    return n.e(187).then(n.bind(null, "ArRP"));
                }),
                O = Object(p.lazy)(function () {
                    return n.e(186).then(n.bind(null, "ANc7"));
                }),
                A = function (e) {
                    return e.isMobile
                        ? m.a.createElement(p.Suspense, { fallback: null }, m.a.createElement(S, e))
                        : m.a.createElement(
                              p.Fragment,
                              null,
                              m.a.createElement(w.a, { maxWidth: 767 }, m.a.createElement(p.Suspense, { fallback: null }, m.a.createElement(S, e))),
                              m.a.createElement(w.a, { minWidth: 768 }, m.a.createElement(p.Suspense, { fallback: null }, m.a.createElement(O, e)))
                          );
                };
            function T(e) {
                Object(v.r)({ event: "uaGtmEvents_clicks", eventCategory: "download_app_banner", eventAction: e, eventLabel: e });
            }
            n.d(t, "a", function () {
                return R;
            });
            var R = (function (e) {
                function t() {
                    var e, n;
                    o()(this, t);
                    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return (
                        ((n = s()(this, (e = l()(t)).call.apply(e, [this].concat(i)))).state = { isOpened: !1 }),
                        (n.handleCloseBannerClick = function () {
                            n.setTimeShowBanner(), T("close_banner");
                        }),
                        n
                    );
                }
                return (
                    d()(t, e),
                    a()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.getTime(y.a.userId);
                            },
                        },
                        {
                            key: "setTimeShowBanner",
                            value: function () {
                                var e = Date.now();
                                return Object(v.V)("time_opened_banner", e), this.setState({ isOpened: !this.state.isOpened }), e;
                            },
                        },
                        {
                            key: "getTime",
                            value: function (e) {
                                var t = Number(Object(v.z)("time_opened_banner"));
                                if (e && t) {
                                    Date.now() >= t + 6048e5 && (Object(v.T)("time_opened_banner"), this.setTimeShowBanner());
                                } else this.setState({ isOpened: !this.state.isOpened });
                                return t;
                            },
                        },
                        {
                            key: "getHref",
                            value: function (e) {
                                var t = "";
                                switch (e) {
                                    case "Mac OS":
                                        t = E.a.MACOS.OTP;
                                        break;
                                    case "Windows":
                                        t = E.a.WINDOWS.OTP.X64;
                                        break;
                                    case "iOS":
                                        t = E.a.IOS.OPTIONS;
                                        break;
                                    case "Android":
                                        t = E.a.ANDROID.OPTIONS;
                                        break;
                                    default:
                                        t = "";
                                }
                                return t;
                            },
                        },
                        {
                            key: "handleDownloadClick",
                            value: function (e) {
                                var t = this;
                                return function () {
                                    window.open(t.getHref(e)), t.setTimeShowBanner(), T("click_download");
                                };
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.direction,
                                    n = e.className,
                                    r = e.classContainerName,
                                    o = e.canShow,
                                    i = "tr" === y.a.lang ? "7/24" : "24/7",
                                    a = g.i.some(function (e) {
                                        return e === y.a.country;
                                    }),
                                    c = ["Mac OS", "Windows", "iOS", "Android"].some(function (e) {
                                        return e === h.osName;
                                    }),
                                    s = -1 === h.getUA.indexOf("Electron"),
                                    u = Object(v.u)(g.tc),
                                    l = a && s && !Object(v.L)() && c && !u && !_.h && o && this.state.isOpened;
                                return (
                                    l && T("show_banner"),
                                    l &&
                                        m.a.createElement(A, {
                                            osName: h.osName,
                                            isMobile: h.isMobile,
                                            workingTime: i,
                                            onCloseClick: this.handleCloseBannerClick,
                                            onDownloadClick: this.handleDownloadClick(h.osName),
                                            direction: t,
                                            className: n,
                                            classContainerName: r,
                                        })
                                );
                            },
                        },
                    ]),
                    t
                );
            })(m.a.Component);
            R.defaultProps = { canShow: !0 };
        },
        mvii: function (e, t) {
            var n = Math.ceil,
                r = Math.floor;
            e.exports = function (e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
            };
        },
        "n+VH": function (e, t) {
            var n = {}.toString;
            e.exports = function (e) {
                return n.call(e).slice(8, -1);
            };
        },
        nd6X: function (e, t, n) {
            n("b01t")("Uint8", 1, function (e) {
                return function (t, n, r) {
                    return e(this, t, n, r);
                };
            });
        },
        nsbO: function (e, t, n) {
            "use strict";
            var r = n("PAFS"),
                o = n("Nu7b"),
                i = n("Fu0I");
            n("Wifh")("search", 1, function (e, t, n, a) {
                return [
                    function (n) {
                        var r = e(this),
                            o = void 0 == n ? void 0 : n[t];
                        return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r));
                    },
                    function (e) {
                        var t = a(n, e, this);
                        if (t.done) return t.value;
                        var c = r(e),
                            s = String(this),
                            u = c.lastIndex;
                        o(u, 0) || (c.lastIndex = 0);
                        var l = i(c, s);
                        return o(c.lastIndex, u) || (c.lastIndex = u), null === l ? -1 : l.index;
                    },
                ];
            });
        },
        nx7V: function (e, t, n) {
            e.exports = n.p + "../images/partnerships-bg.b79b8a74.png";
        },
        nxTg: function (e, t, n) {
            var r = n("+3YS"),
                o = n("S411"),
                i = n("+bRE");
            e.exports = function (e, t) {
                return r(e) || o(e, t) || i();
            };
        },
        o7Pm: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return w;
            });
            var r = n("OvAC"),
                o = n.n(r),
                i = n("SDJZ"),
                a = n.n(i),
                c = n("NToG"),
                s = n.n(c),
                u = n("K4DB"),
                l = n.n(u),
                f = n("+IV6"),
                d = n.n(f),
                p = n("eef+"),
                m = n.n(p),
                h = n("mXGw"),
                v = n.n(h),
                g = n("m3N6"),
                _ = n("YTIe"),
                y = n("8Jek"),
                E = n.n(y);
            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            var w = (function (e) {
                function t() {
                    var e, n;
                    a()(this, t);
                    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                    return (
                        ((n = l()(this, (e = d()(t)).call.apply(e, [this].concat(o)))).onClose = function () {
                            n.props.api.navToggle();
                        }),
                        n
                    );
                }
                return (
                    m()(t, e),
                    s()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.canClose = !!this.props.api && "function" == typeof this.props.api.navToggle;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props.navigationLogo,
                                    n = E()("main-menu-container", this.props.collapsed ? "" : "main-menu-container_active"),
                                    r = { transition: "opacity ".concat(200, "ms ease-in-out"), opacity: 0 },
                                    i = { entering: { opacity: 0 }, entered: { opacity: 1 } };
                                return v.a.createElement(
                                    "div",
                                    { className: n },
                                    v.a.createElement(
                                        "div",
                                        { id: "main-menu-adaptive", className: "main-menu main-menu_adaptive ".concat(this.props.login ? "-user" : "-guest") },
                                        v.a.createElement(
                                            "div",
                                            { className: "main-menu__panel main-menu__panel_logo" },
                                            this.canClose ? v.a.createElement("button", { type: "button", className: "main-menu__close-btn", onClick: this.onClose }, v.a.createElement(_.x, { className: "btn-menu__icon" })) : null,
                                            t
                                        ),
                                        this.props.children
                                    ),
                                    v.a.createElement(g.a, { timeout: 200, in: !this.props.collapsed, mountOnEnter: !0, unmountOnExit: !0 }, function (t) {
                                        return v.a.createElement("div", {
                                            className: "main-menu-container__paranga",
                                            onClick: e.onClose,
                                            style: (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {};
                                                    t % 2
                                                        ? b(Object(n), !0).forEach(function (t) {
                                                              o()(e, t, n[t]);
                                                          })
                                                        : Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                                        : b(Object(n)).forEach(function (t) {
                                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                                          });
                                                }
                                                return e;
                                            })({}, r, {}, i[t]),
                                        });
                                    })
                                );
                            },
                        },
                    ]),
                    t
                );
            })(h.PureComponent);
            w.defaultProps = { login: null, collapsed: !0 };
        },
        oAuq: function (e, t, n) {
            "use strict";
            var r = n("b8Rm"),
                o = n("Bsg+"),
                i = n("KFSm"),
                a = [].slice,
                c = {};
            e.exports =
                Function.bind ||
                function (e) {
                    var t = r(this),
                        n = a.call(arguments, 1),
                        s = function () {
                            var r = n.concat(a.call(arguments));
                            return this instanceof s
                                ? (function (e, t, n) {
                                      if (!(t in c)) {
                                          for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
                                          c[t] = Function("F,a", "return new F(" + r.join(",") + ")");
                                      }
                                      return c[t](e, n);
                                  })(t, r.length, r)
                                : i(t, r, e);
                        };
                    return o(t.prototype) && (s.prototype = t.prototype), s;
                };
        },
        oMRA: function (e, t, n) {
            "use strict";
            var r = n("X6VK"),
                o = n("sdkr")(!0);
            r(r.P, "Array", {
                includes: function (e) {
                    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
                },
            }),
                n("OfmW")("includes");
        },
        oNRp: function (e, t, n) {
            e.exports = n.p + "../images/home_img_mobile.b871cb6b.png";
        },
        olOL: function (e, t, n) {
            "use strict";
            var r = n("SDJZ"),
                o = n.n(r),
                i = n("NToG"),
                a = n.n(i),
                c = n("K4DB"),
                s = n.n(c),
                u = n("+IV6"),
                l = n.n(u),
                f = n("eef+"),
                d = n.n(f),
                p = n("mXGw"),
                m = n("e+GP"),
                h = n.n(m),
                v = n("OvAC"),
                g = n.n(v),
                _ = n("RWRC"),
                y = n("tjYc"),
                E = n("z8zl"),
                b = n("4p3F"),
                w = n("VOFU"),
                S = n("f6l3");
            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? O(Object(n), !0).forEach(function (t) {
                              g()(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : O(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          });
                }
                return e;
            }
            var T = { CRITICAL: "critical", DEBUG: "debug", ERROR: "error", FATAL: "fatal", INFO: "info", LOG: "log", WARNING: "warning" },
                R = (function () {
                    function e(t) {
                        o()(this, e);
                        var n = "".concat(15499);
                        Object(_.a)({ dsn: t, integrations: e.integrations, release: n, beforeSend: e.beforeSend });
                    }
                    return (
                        a()(e, null, [
                            {
                                key: "sendEvent",
                                value: function (t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.ERROR,
                                        r = arguments.length > 2 ? arguments[2] : void 0,
                                        o = arguments.length > 3 ? arguments[3] : void 0,
                                        i = arguments.length > 4 ? arguments[4] : void 0;
                                    if (e.isProduction) {
                                        var a = n;
                                        try {
                                            e.checkInstance(), e.isException(t) ? e.sendException(t, void 0, r, o, i) : Object(y.a)({ extra: { body: t, extraData: A({}, o, {}, e.baseProps) }, level: a, tags: i, message: r });
                                        } catch (e) {}
                                    }
                                },
                            },
                            {
                                key: "sendException",
                                value: function (t, n, r, o, i) {
                                    if (e.isProduction)
                                        try {
                                            e.checkInstance();
                                            var a = Object.assign({}, n, A({}, r ? { code: r } : null, {}, o && o, {}, e.baseProps));
                                            Object(y.c)(function (e) {
                                                e.setExtras(a), i && e.setTags(i), Object(y.b)(t);
                                            });
                                        } catch (e) {}
                                },
                            },
                            {
                                key: "getInstance",
                                value: function () {
                                    return e.instance || (e.instance = new e(e.dsnKey)), e.instance;
                                },
                            },
                            {
                                key: "isException",
                                value: function (e) {
                                    return e && "object" === h()(e) && "stack" in e && "message" in e;
                                },
                            },
                            {
                                key: "checkInstance",
                                value: function () {
                                    e.getInstance();
                                },
                            },
                            {
                                key: "beforeSend",
                                value: function (t) {
                                    if (!t.exception || !t.exception.values) return t;
                                    try {
                                        t.exception.values.forEach(function (t) {
                                            t.stacktrace &&
                                                t.stacktrace.frames &&
                                                t.stacktrace.frames.forEach(function (t) {
                                                    if (t.filename && t.filename.startsWith("http") && t.filename.includes(e.publicPathPrefix)) {
                                                        var n = new URL(t.filename);
                                                        t.filename = "".concat(n.origin, "/").concat(n.pathname.substring(n.pathname.lastIndexOf("/") + 1));
                                                    }
                                                });
                                        });
                                    } catch (e) {}
                                    return t;
                                },
                            },
                            {
                                key: "dsnKey",
                                get: function () {
                                    return "https://0d001cb11f0345939d67bcd65e5a940b@sentry.io/1357575";
                                },
                            },
                            {
                                key: "baseProps",
                                get: function () {
                                    return { userId: window._globalsConfig && window._globalsConfig.user ? window._globalsConfig.user.id : void 0 };
                                },
                            },
                            {
                                key: "isProduction",
                                get: function () {
                                    return Object(S.H)();
                                },
                            },
                            {
                                key: "integrations",
                                get: function () {
                                    return [new b.a(), new w.a(), new E.a.Breadcrumbs({ console: !1 }), new E.a.UserAgent(), new E.a.LinkedErrors(), new E.a.GlobalHandlers()];
                                },
                            },
                        ]),
                        e
                    );
                })();
            R.publicPathPrefix = "public/js";
            var N = (function (e) {
                function t() {
                    var e, n;
                    o()(this, t);
                    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return ((n = s()(this, (e = l()(t)).call.apply(e, [this].concat(i)))).state = { hasError: !1 }), n;
                }
                return (
                    d()(t, e),
                    a()(
                        t,
                        [
                            {
                                key: "componentDidCatch",
                                value: function (e, t) {
                                    var n = this.props,
                                        r = n.code,
                                        o = n.extraData;
                                    R.sendException(e, t, r, o);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.hasError,
                                        t = this.props,
                                        n = t.children,
                                        r = t.placeholder;
                                    return e ? r || null : n;
                                },
                            },
                        ],
                        [
                            {
                                key: "getDerivedStateFromError",
                                value: function () {
                                    return { hasError: !0 };
                                },
                            },
                        ]
                    ),
                    t
                );
            })(p.Component);
            n.d(t, "b", function () {
                return N;
            }),
                n.d(t, "a", function () {
                    return T;
                }),
                n.d(t, "c", function () {
                    return R;
                });
        },
        onqJ: function (e, t, n) {
            var r = n("X6VK"),
                o = n("3ydu");
            o &&
                r(r.S, "Reflect", {
                    setPrototypeOf: function (e, t) {
                        o.check(e, t);
                        try {
                            return o.set(e, t), !0;
                        } catch (e) {
                            return !1;
                        }
                    },
                });
        },
        orKN: function (e, t, n) {
            "use strict";
            var r,
                o = n("P56o"),
                i = n("1wfo")(0),
                a = n("sU/p"),
                c = n("zIP/"),
                s = n("NR3o"),
                u = n("s14n"),
                l = n("Bsg+"),
                f = n("SsG5"),
                d = n("SsG5"),
                p = !o.ActiveXObject && "ActiveXObject" in o,
                m = c.getWeak,
                h = Object.isExtensible,
                v = u.ufstore,
                g = function (e) {
                    return function () {
                        return e(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                _ = {
                    get: function (e) {
                        if (l(e)) {
                            var t = m(e);
                            return !0 === t ? v(f(this, "WeakMap")).get(e) : t ? t[this._i] : void 0;
                        }
                    },
                    set: function (e, t) {
                        return u.def(f(this, "WeakMap"), e, t);
                    },
                },
                y = (e.exports = n("AkS8")("WeakMap", g, _, u, !0, !0));
            d &&
                p &&
                (s((r = u.getConstructor(g, "WeakMap")).prototype, _),
                (c.NEED = !0),
                i(["delete", "has", "get", "set"], function (e) {
                    var t = y.prototype,
                        n = t[e];
                    a(t, e, function (t, o) {
                        if (l(t) && !h(t)) {
                            this._f || (this._f = new r());
                            var i = this._f[e](t, o);
                            return "set" == e ? this : i;
                        }
                        return n.call(this, t, o);
                    });
                }));
        },
        ovh1: function (e, t, n) {
            "use strict";
            var r = n("5QbJ"),
                o = Object.prototype.toString;
            function i(e) {
                return "[object Array]" === o.call(e);
            }
            function a(e) {
                return void 0 === e;
            }
            function c(e) {
                return null !== e && "object" == typeof e;
            }
            function s(e) {
                return "[object Function]" === o.call(e);
            }
            function u(e, t) {
                if (null !== e && void 0 !== e)
                    if (("object" != typeof e && (e = [e]), i(e))) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                    else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
            }
            e.exports = {
                isArray: i,
                isArrayBuffer: function (e) {
                    return "[object ArrayBuffer]" === o.call(e);
                },
                isBuffer: function (e) {
                    return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
                },
                isFormData: function (e) {
                    return "undefined" != typeof FormData && e instanceof FormData;
                },
                isArrayBufferView: function (e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
                },
                isString: function (e) {
                    return "string" == typeof e;
                },
                isNumber: function (e) {
                    return "number" == typeof e;
                },
                isObject: c,
                isUndefined: a,
                isDate: function (e) {
                    return "[object Date]" === o.call(e);
                },
                isFile: function (e) {
                    return "[object File]" === o.call(e);
                },
                isBlob: function (e) {
                    return "[object Blob]" === o.call(e);
                },
                isFunction: s,
                isStream: function (e) {
                    return c(e) && s(e.pipe);
                },
                isURLSearchParams: function (e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
                },
                isStandardBrowserEnv: function () {
                    return ("undefined" == typeof navigator || ("ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product)) && "undefined" != typeof window && "undefined" != typeof document;
                },
                forEach: u,
                merge: function e() {
                    var t = {};
                    function n(n, r) {
                        "object" == typeof t[r] && "object" == typeof n ? (t[r] = e(t[r], n)) : (t[r] = n);
                    }
                    for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
                    return t;
                },
                deepMerge: function e() {
                    var t = {};
                    function n(n, r) {
                        "object" == typeof t[r] && "object" == typeof n ? (t[r] = e(t[r], n)) : (t[r] = "object" == typeof n ? e({}, n) : n);
                    }
                    for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
                    return t;
                },
                extend: function (e, t, n) {
                    return (
                        u(t, function (t, o) {
                            e[o] = n && "function" == typeof t ? r(t, n) : t;
                        }),
                        e
                    );
                },
                trim: function (e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "");
                },
            };
        },
        owxm: function (e, t, n) {
            "use strict";
            var r = n("mXGw"),
                o = n.n(r),
                i = n("92VU"),
                a = n("deTv"),
                c = n("Q8pe"),
                s = n("xARA"),
                u = n.n(s),
                l = n("hmFC");
            n("1UZS"),
                (t.a = function (e, t, n, r) {
                    return c.a.load({ locale: n }).then(function () {
                        return (function (e, t) {
                            var n,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "root",
                                i = e;
                            (n = document.getElementById(r)) instanceof HTMLElement && u.a.render(o.a.createElement(i, null), n), Object(l.a)();
                        })(
                            function () {
                                return o.a.createElement(i.b, { value: a.g.getInstance() }, o.a.createElement(e, { locale: c.a.getCurrentLocale() }));
                            },
                            t,
                            r
                        );
                    });
                });
        },
        p1Jl: function (e, t, n) {
            "use strict";
            var r = n("mvii"),
                o = n("GCOZ");
            e.exports = function (e) {
                var t = String(o(this)),
                    n = "",
                    i = r(e);
                if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
                for (; i > 0; (i >>>= 1) && (t += t)) 1 & i && (n += t);
                return n;
            };
        },
        p74W: function (e, t, n) {
            "use strict";
            var r = n("CBb8");
            n.p = "".concat(r.c, "/public/js/");
        },
        pB2m: function (e, t, n) {
            var r = n("OFVL"),
                o = n("9dxi")("iterator"),
                i = n("Ibj2");
            e.exports = n("R5TD").getIteratorMethod = function (e) {
                if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)];
            };
        },
        pGW6: function (e, t, n) {
            var r = n("GGqZ"),
                o = n("LuBU"),
                i = n("ml72"),
                a = n("IdFN").f;
            e.exports = function (e) {
                return function (t) {
                    for (var n, c = i(t), s = o(c), u = s.length, l = 0, f = []; u > l; ) (n = s[l++]), (r && !a.call(c, n)) || f.push(e ? [n, c[n]] : c[n]);
                    return f;
                };
            };
        },
        "pU1/": function (e, t, n) {
            var r = n("U1KF"),
                o = n("PAFS"),
                i = n("LuBU");
            e.exports = n("GGqZ")
                ? Object.defineProperties
                : function (e, t) {
                      o(e);
                      for (var n, a = i(t), c = a.length, s = 0; c > s; ) r.f(e, (n = a[s++]), t[n]);
                      return e;
                  };
        },
        puZ4: function (e, t, n) {
            "use strict";
            var r = n("Vx+c"),
                o = n("WWmS"),
                i = n("jPEw"),
                a = {};
            n("tjmq")(a, n("9dxi")("iterator"), function () {
                return this;
            }),
                (e.exports = function (e, t, n) {
                    (e.prototype = r(a, { next: o(1, n) })), i(e, t + " Iterator");
                });
        },
        "q/UR": function (e, t, n) {
            n("E8p1")("Array");
        },
        r3gx: function (e, t, n) {
            "use strict";
            var r = n("Bsg+"),
                o = n("A1KM"),
                i = n("9dxi")("hasInstance"),
                a = Function.prototype;
            i in a ||
                n("U1KF").f(a, i, {
                    value: function (e) {
                        if ("function" != typeof this || !r(e)) return !1;
                        if (!r(this.prototype)) return e instanceof this;
                        for (; (e = o(e)); ) if (this.prototype === e) return !0;
                        return !1;
                    },
                });
        },
        rDoJ: function (e, t, n) {
            var r = n("X6VK"),
                o = n("CbkB"),
                i = Math.sqrt,
                a = Math.acosh;
            r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
                acosh: function (e) {
                    return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : o(e - 1 + i(e - 1) * i(e + 1));
                },
            });
        },
        rKJr: function (e, t, n) {
            "use strict";
            var r,
                o = n("nxTg"),
                i = n.n(o),
                a = n("mXGw"),
                c = n.n(a),
                s = n("92VU"),
                u = n("deTv"),
                l = n("OvAC"),
                f = n.n(l),
                d = n("AD5U"),
                p = n("iobP"),
                m = function (e) {
                    var t = e.children;
                    return c.a.createElement("div", { className: "dialog-rebrand__header" }, c.a.createElement("header", { className: "tabs-form" }, c.a.createElement("div", { className: "tabs-form__title" }, t)));
                },
                h = function (e) {
                    var t = e.children,
                        n = e.onBackClick;
                    return c.a.createElement(
                        "div",
                        { className: "dialog-rebrand__header" },
                        c.a.createElement(
                            "header",
                            { className: "tabs-form tabs-form_with-back-button" },
                            c.a.createElement("button", { className: "tabs-form__back-button", onClick: n }, c.a.createElement(p.a, null)),
                            c.a.createElement("div", { className: "tabs-form__title" }, t)
                        )
                    );
                },
                v = n("8Jek"),
                g = n.n(v),
                _ = function (e) {
                    var t = e.isActive,
                        n = e.onClick,
                        r = e.dataTest,
                        o = e.children;
                    return c.a.createElement("div", { className: g()("tabs-form__tab", { "tabs-form__tab--active": t }), onClick: n, "data-test": r }, o);
                },
                y = function (e) {
                    return c.a.createElement(
                        _,
                        {
                            isActive: e.isActive,
                            onClick: function () {
                                return e.onClick(d.e.SIGN_IN);
                            },
                            dataTest: "form-tab-signin",
                        },
                        c.a.createElement(u.c, { id: "user_tpl_login", defaultMessage: "Log in" })
                    );
                },
                E = function (e) {
                    return c.a.createElement(
                        _,
                        {
                            isActive: e.isActive,
                            onClick: function () {
                                return e.onClick(d.e.SIGN_UP);
                            },
                            dataTest: "form-tab-signup",
                        },
                        c.a.createElement(u.c, { id: "user_tpl_registration", defaultMessage: "Registration" })
                    );
                },
                b = Object.freeze(
                    ((r = {}),
                    f()(r, d.e.RESTORE_PASS, function (e) {
                        var t = e.onClick;
                        return c.a.createElement(
                            h,
                            {
                                onBackClick: function () {
                                    return t(d.e.SIGN_IN);
                                },
                            },
                            c.a.createElement(u.c, { id: "user_tpl_new_password", defaultMessage: "New password" })
                        );
                    }),
                    f()(r, d.e.SIGN_IN_DUO, function (e) {
                        var t = e.onClick;
                        return c.a.createElement(
                            h,
                            {
                                onBackClick: function () {
                                    return t(d.e.SIGN_IN);
                                },
                            },
                            c.a.createElement(u.c, { id: "twofactor_authentication", defaultMessage: "Two-factor authentication" })
                        );
                    }),
                    f()(r, d.e.ENTER_NEW_PASS, function (e) {
                        var t = e.onClick;
                        return c.a.createElement(
                            h,
                            {
                                onBackClick: function () {
                                    return t(d.e.SIGN_IN);
                                },
                            },
                            c.a.createElement(u.c, { id: "user_tpl_new_password", defaultMessage: "New password" })
                        );
                    }),
                    f()(r, d.e.SIGN_IN, function (e) {
                        var t = e.onClick;
                        return c.a.createElement(m, null, c.a.createElement(y, { isActive: !0, onClick: t }), c.a.createElement(E, { onClick: t }));
                    }),
                    f()(r, d.e.SIGN_UP, function (e) {
                        var t = e.onClick;
                        return c.a.createElement(m, null, c.a.createElement(y, { onClick: t }), c.a.createElement(E, { isActive: !0, onClick: t }));
                    }),
                    f()(r, d.e.SIGN_UP_NOT_AVAILABLE, function (e) {
                        var t = e.onClick;
                        return c.a.createElement(m, null, c.a.createElement(y, { onClick: t }), c.a.createElement(E, { isActive: !0, onClick: t }));
                    }),
                    f()(r, d.e.AUTH_IS_BLOCKED, function () {
                        return null;
                    }),
                    r)
                ),
                w = function (e) {
                    var t = e.componentId,
                        n = e.switchFormView,
                        r = b[t];
                    return c.a.createElement(r, { onClick: n });
                },
                S = n("l6wl"),
                O = n("K08j"),
                A = function () {
                    return (
                        Object(O.c)() &&
                        c.a.createElement(
                            "div",
                            { className: "logo-block" },
                            c.a.createElement(
                                "svg",
                                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 135.1 16.4", width: 159.7, height: 16.5 },
                                c.a.createElement(
                                    "g",
                                    { fill: "none", fillRule: "evenodd" },
                                    c.a.createElement("path", {
                                        d:
                                            "M0 9c0 9 13.3 9 13.3 0S0 0 0 9zm3.4 0c0-4.7 6.5-4.7 6.5 0a3.3 3.3 0 0 1-6.5 0zm16.2-6.5h-3.3v13h8v-3h-4.7zm11 4.3h-.2l-2.3-4.3h-3.5v.4l4.3 7v5.6h3.2V10l4.5-7v-.5h-3.7zM45.1 8l-5-5.6h-1.3v13h3.4V9.8l2.8 2.8h.4L48 9.7v5.8h3.4v-13h-1.1L45 8zM61 2.5h-5.7v13h3.3V12H61c6.2 0 6.2-9.6 0-9.6zM61 9h-2.4V5.4H61c1.9 0 1.7 3.7 0 3.7zm11.9-3.7H76v10h3.3v-10h3.2v-3h-9.6zm17.8-3H85v13h3.3v-3.7H90l2.3 3.8H96V15l-2.6-4.2c3.3-2.1 2.4-8.3-2.7-8.3zm0 6.3h-2.4V5.4h2.4c1.9 0 1.8 3.3 0 3.3zm12.5-6.4L97.4 15v.5h3.2l.8-1.7h5l.9 1.7h3.2V15l-5.8-12.7h-1.5zm-.7 8.7l1.5-3.4 1.5 3.4zm15.1-8.5h-4.9v13h5c8.3 0 8.3-13 0-13zm0 10h-1.5v-7h1.5c4.1 0 4.1 7 0 7zm12.6 0v-2.3h4.4v-3h-4.4V5.5h4.8v-3h-8.1v13h8.2v-2.9z",
                                        fill: "#FFF",
                                    }),
                                    c.a.createElement("path", { d: "M6.5 10.2l-5 6.2h10z", fill: "#2aa76d" }),
                                    c.a.createElement("path", { d: "M40.3 0L45 4.6 49.6 0z", fill: "#df553a" })
                                )
                            )
                        )
                    );
                },
                T = function (e) {
                    var t = e.componentId,
                        r = e.switchFormView,
                        o = e.troublesInformerClassName,
                        i = void 0 === o ? "" : o,
                        s = Object(a.lazy)(function () {
                            switch (t) {
                                case "SignIn":
                                    return Promise.all([n.e(0), n.e(1), n.e(7), n.e(10), n.e(37)]).then(n.bind(null, "OJ8M"));
                                case "SignInDuo":
                                    return Promise.all([n.e(0), n.e(1), n.e(7), n.e(10), n.e(38)]).then(n.bind(null, "vLS8"));
                                case "SignUp":
                                    return Promise.all([n.e(0), n.e(1), n.e(7), n.e(10), n.e(39)]).then(n.bind(null, "tVEk"));
                                case "RestorePass":
                                    return Promise.all([n.e(0), n.e(1), n.e(7), n.e(10), n.e(36)]).then(n.bind(null, "PCFo"));
                                case "EnterNewPass":
                                    return Promise.all([n.e(0), n.e(1), n.e(7), n.e(10), n.e(35)]).then(n.bind(null, "IIdt"));
                                case "SignUpNotAvailable":
                                    return Promise.all([n.e(0), n.e(40)]).then(n.bind(null, "tyzR"));
                                case "AuthIsBlocked":
                                    return Promise.all([n.e(0), n.e(34)]).then(n.bind(null, "mbaE"));
                                default:
                                    return t;
                            }
                        });
                    return c.a.createElement(
                        a.Suspense,
                        { fallback: c.a.createElement(S.a, null) },
                        c.a.createElement("div", { className: "loader-box" }, c.a.createElement(A, null), c.a.createElement(s, { className: g()(f()({}, i, "SignUpNotAvailable" === t || "AuthIsBlocked" === t)), switchFormView: r }))
                    );
                },
                R = n("vzva");
            t.a = Object(a.memo)(function (e) {
                var t,
                    n,
                    r,
                    o,
                    l = e.rootClassName,
                    f = e.troublesInformerClassName,
                    d =
                        ((t = a.useState(null)),
                        (n = i()(t, 2)),
                        (r = n[0]),
                        (o = n[1]),
                        a.useEffect(function () {
                            Object(R.b)()
                                .then(function (e) {
                                    var t = Object(O.f)(e);
                                    t.loginAllow && t.regAllow ? o("available") : t.loginAllow && !t.regAllow ? o("onlySignIn") : o("unavailable");
                                })
                                .catch(function (e) {});
                        }, []),
                        r),
                    p = Object(a.useState)(function () {
                        return d ? Object(O.g)(d, Object(O.a)()) : null;
                    }),
                    m = i()(p, 2),
                    h = m[0],
                    v = m[1];
                c.a.useEffect(
                    function () {
                        !h && d && v(Object(O.g)(d, Object(O.a)()));
                    },
                    [h, d]
                );
                var g = Object(a.useCallback)(
                    function (e) {
                        var t = Object(O.g)(d, e);
                        v(t);
                    },
                    [d]
                );
                return c.a.createElement(
                    s.b,
                    { value: u.g.getInstance() },
                    c.a.createElement(
                        "div",
                        { className: l },
                        h
                            ? c.a.createElement(c.a.Fragment, null, c.a.createElement(w, { componentId: h, switchFormView: g }), c.a.createElement(T, { componentId: h, switchFormView: g, troublesInformerClassName: f }))
                            : c.a.createElement(S.a, null)
                    )
                );
            });
        },
        rVj0: function (e, t, n) {
            var r = n("ml72"),
                o = n("1Tj+").f;
            n("gRlk")("getOwnPropertyDescriptor", function () {
                return function (e, t) {
                    return o(r(e), t);
                };
            });
        },
        rVjy: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Math", {
                clz32: function (e) {
                    return (e >>>= 0) ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E) : 32;
                },
            });
        },
        rh2v: function (e, t, n) {
            e.exports = n.p + "../images/awards_10.f74bf8de.jpg";
        },
        s14n: function (e, t, n) {
            "use strict";
            var r = n("+edc"),
                o = n("zIP/").getWeak,
                i = n("PAFS"),
                a = n("Bsg+"),
                c = n("EusA"),
                s = n("HqX2"),
                u = n("1wfo"),
                l = n("ezc+"),
                f = n("SsG5"),
                d = u(5),
                p = u(6),
                m = 0,
                h = function (e) {
                    return e._l || (e._l = new v());
                },
                v = function () {
                    this.a = [];
                },
                g = function (e, t) {
                    return d(e.a, function (e) {
                        return e[0] === t;
                    });
                };
            (v.prototype = {
                get: function (e) {
                    var t = g(this, e);
                    if (t) return t[1];
                },
                has: function (e) {
                    return !!g(this, e);
                },
                set: function (e, t) {
                    var n = g(this, e);
                    n ? (n[1] = t) : this.a.push([e, t]);
                },
                delete: function (e) {
                    var t = p(this.a, function (t) {
                        return t[0] === e;
                    });
                    return ~t && this.a.splice(t, 1), !!~t;
                },
            }),
                (e.exports = {
                    getConstructor: function (e, t, n, i) {
                        var u = e(function (e, r) {
                            c(e, u, t, "_i"), (e._t = t), (e._i = m++), (e._l = void 0), void 0 != r && s(r, n, e[i], e);
                        });
                        return (
                            r(u.prototype, {
                                delete: function (e) {
                                    if (!a(e)) return !1;
                                    var n = o(e);
                                    return !0 === n ? h(f(this, t)).delete(e) : n && l(n, this._i) && delete n[this._i];
                                },
                                has: function (e) {
                                    if (!a(e)) return !1;
                                    var n = o(e);
                                    return !0 === n ? h(f(this, t)).has(e) : n && l(n, this._i);
                                },
                            }),
                            u
                        );
                    },
                    def: function (e, t, n) {
                        var r = o(i(t), !0);
                        return !0 === r ? h(e).set(t, n) : (r[e._i] = n), e;
                    },
                    ufstore: h,
                });
        },
        "sU/p": function (e, t, n) {
            var r = n("P56o"),
                o = n("tjmq"),
                i = n("ezc+"),
                a = n("1Alt")("src"),
                c = n("JGfN"),
                s = ("" + c).split("toString");
            (n("R5TD").inspectSource = function (e) {
                return c.call(e);
            }),
                (e.exports = function (e, t, n, c) {
                    var u = "function" == typeof n;
                    u && (i(n, "name") || o(n, "name", t)), e[t] !== n && (u && (i(n, a) || o(n, a, e[t] ? "" + e[t] : s.join(String(t)))), e === r ? (e[t] = n) : c ? (e[t] ? (e[t] = n) : o(e, t, n)) : (delete e[t], o(e, t, n)));
                })(Function.prototype, "toString", function () {
                    return ("function" == typeof this && this[a]) || c.call(this);
                });
        },
        sV0p: function (e, t, n) {},
        sdkr: function (e, t, n) {
            var r = n("ml72"),
                o = n("Sp5b"),
                i = n("BUlT");
            e.exports = function (e) {
                return function (t, n, a) {
                    var c,
                        s = r(t),
                        u = o(s.length),
                        l = i(a, u);
                    if (e && n != n) {
                        for (; u > l; ) if ((c = s[l++]) != c) return !0;
                    } else for (; u > l; l++) if ((e || l in s) && s[l] === n) return e || l || 0;
                    return !e && -1;
                };
            };
        },
        sgHz: function (e, t, n) {
            e.exports = n.p + "../images/home_img_desktop.aec2d97a.png";
        },
        skVe: function (e, t, n) {
            e.exports = n.p + "../images/awards_4.4f21a06b.jpg";
        },
        t91x: function (e, t, n) {
            "use strict";
            var r = n("OFVL"),
                o = {};
            (o[n("9dxi")("toStringTag")] = "z"),
                o + "" != "[object z]" &&
                    n("sU/p")(
                        Object.prototype,
                        "toString",
                        function () {
                            return "[object " + r(this) + "]";
                        },
                        !0
                    );
        },
        tImM: function (e, t, n) {
            "use strict";
            function r(e) {
                this.message = e;
            }
            (r.prototype.toString = function () {
                return "Cancel" + (this.message ? ": " + this.message : "");
            }),
                (r.prototype.__CANCEL__ = !0),
                (e.exports = r);
        },
        tJXC: function (e, t, n) {
            var r = n("w24S"),
                o = n("kd9Q"),
                i = o.each,
                a = o.isFunction,
                c = o.isArray;
            function s() {
                if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                (this.queries = {}), (this.browserIsIncapable = !window.matchMedia("only all").matches);
            }
            (s.prototype = {
                constructor: s,
                register: function (e, t, n) {
                    var o = this.queries,
                        s = n && this.browserIsIncapable;
                    return (
                        o[e] || (o[e] = new r(e, s)),
                        a(t) && (t = { match: t }),
                        c(t) || (t = [t]),
                        i(t, function (t) {
                            a(t) && (t = { match: t }), o[e].addHandler(t);
                        }),
                        this
                    );
                },
                unregister: function (e, t) {
                    var n = this.queries[e];
                    return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this;
                },
            }),
                (e.exports = s);
        },
        tW8y: function (e, t, n) {
            for (
                var r,
                    o = n("P56o"),
                    i = n("tjmq"),
                    a = n("1Alt"),
                    c = a("typed_array"),
                    s = a("view"),
                    u = !(!o.ArrayBuffer || !o.DataView),
                    l = u,
                    f = 0,
                    d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
                f < 9;

            )
                (r = o[d[f++]]) ? (i(r.prototype, c, !0), i(r.prototype, s, !0)) : (l = !1);
            e.exports = { ABV: u, CONSTR: l, TYPED: c, VIEW: s };
        },
        tjmq: function (e, t, n) {
            var r = n("U1KF"),
                o = n("WWmS");
            e.exports = n("GGqZ")
                ? function (e, t, n) {
                      return r.f(e, t, o(1, n));
                  }
                : function (e, t, n) {
                      return (e[t] = n), e;
                  };
        },
        ty3S: function (e, t, n) {},
        tyvn: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return q;
            }),
                n.d(t, "b", function () {
                    return s;
                }),
                n.d(t, "c", function () {
                    return Xe;
                }),
                n.d(t, "d", function () {
                    return f;
                }),
                n.d(t, "e", function () {
                    return se;
                }),
                n.d(t, "f", function () {
                    return ct;
                }),
                n.d(t, "g", function () {
                    return Vt;
                }),
                n.d(t, "h", function () {
                    return u;
                }),
                n.d(t, "i", function () {
                    return rn;
                }),
                n.d(t, "j", function () {
                    return gn;
                }),
                n.d(t, "k", function () {
                    return h;
                }),
                n.d(t, "l", function () {
                    return v;
                }),
                n.d(t, "m", function () {
                    return ze;
                }),
                n.d(t, "n", function () {
                    return Ke;
                }),
                n.d(t, "o", function () {
                    return bt;
                }),
                n.d(t, "p", function () {
                    return de;
                }),
                n.d(t, "q", function () {
                    return Pt;
                }),
                n.d(t, "r", function () {
                    return en;
                }),
                n.d(t, "s", function () {
                    return tn;
                }),
                n.d(t, "t", function () {
                    return Lt;
                }),
                n.d(t, "u", function () {
                    return Ft;
                }),
                n.d(t, "v", function () {
                    return d;
                }),
                n.d(t, "w", function () {
                    return Bt;
                }),
                n.d(t, "x", function () {
                    return P;
                }),
                n.d(t, "y", function () {
                    return Gt;
                }),
                n.d(t, "z", function () {
                    return C;
                }),
                n.d(t, "A", function () {
                    return y;
                }),
                n.d(t, "B", function () {
                    return E;
                }),
                n.d(t, "C", function () {
                    return R;
                }),
                n.d(t, "D", function () {
                    return N;
                }),
                n.d(t, "E", function () {
                    return I;
                }),
                n.d(t, "F", function () {
                    return k;
                }),
                n.d(t, "G", function () {
                    return x;
                }),
                n.d(t, "H", function () {
                    return Je;
                }),
                n.d(t, "I", function () {
                    return Ye;
                }),
                n.d(t, "J", function () {
                    return c;
                }),
                n.d(t, "K", function () {
                    return b;
                }),
                n.d(t, "L", function () {
                    return w;
                }),
                n.d(t, "M", function () {
                    return S;
                }),
                n.d(t, "N", function () {
                    return O;
                }),
                n.d(t, "O", function () {
                    return A;
                }),
                n.d(t, "P", function () {
                    return T;
                }),
                n.d(t, "Q", function () {
                    return j;
                }),
                n.d(t, "R", function () {
                    return L;
                }),
                n.d(t, "S", function () {
                    return g;
                }),
                n.d(t, "T", function () {
                    return _;
                }),
                n.d(t, "U", function () {
                    return Se;
                }),
                n.d(t, "V", function () {
                    return Ut;
                }),
                n.d(t, "W", function () {
                    return Zt;
                }),
                n.d(t, "X", function () {
                    return nn;
                }),
                n.d(t, "Y", function () {
                    return an;
                }),
                n.d(t, "Z", function () {
                    return kt;
                }),
                n.d(t, "ab", function () {
                    return F;
                }),
                n.d(t, "bb", function () {
                    return V;
                }),
                n.d(t, "cb", function () {
                    return qe;
                }),
                n.d(t, "db", function () {
                    return At;
                }),
                n.d(t, "eb", function () {
                    return Ot;
                }),
                n.d(t, "fb", function () {
                    return Q;
                }),
                n.d(t, "gb", function () {
                    return le;
                }),
                n.d(t, "hb", function () {
                    return $;
                }),
                n.d(t, "ib", function () {
                    return Fe;
                }),
                n.d(t, "jb", function () {
                    return Et;
                }),
                n.d(t, "kb", function () {
                    return Z;
                }),
                n.d(t, "lb", function () {
                    return Dt;
                }),
                n.d(t, "mb", function () {
                    return He;
                }),
                n.d(t, "nb", function () {
                    return oe;
                }),
                n.d(t, "ob", function () {
                    return Ze;
                }),
                n.d(t, "pb", function () {
                    return me;
                }),
                n.d(t, "qb", function () {
                    return ot;
                }),
                n.d(t, "rb", function () {
                    return we;
                }),
                n.d(t, "sb", function () {
                    return nt;
                }),
                n.d(t, "tb", function () {
                    return Tt;
                }),
                n.d(t, "ub", function () {
                    return Rt;
                }),
                n.d(t, "vb", function () {
                    return at;
                }),
                n.d(t, "wb", function () {
                    return $t;
                }),
                n.d(t, "xb", function () {
                    return ee;
                }),
                n.d(t, "yb", function () {
                    return Wt;
                }),
                n.d(t, "zb", function () {
                    return qt;
                }),
                n.d(t, "Ab", function () {
                    return Xt;
                }),
                n.d(t, "Bb", function () {
                    return Yt;
                }),
                n.d(t, "Cb", function () {
                    return Mt;
                }),
                n.d(t, "Db", function () {
                    return Qt;
                }),
                n.d(t, "Eb", function () {
                    return p;
                }),
                n.d(t, "Fb", function () {
                    return Ht;
                }),
                n.d(t, "Gb", function () {
                    return Ge;
                }),
                n.d(t, "Hb", function () {
                    return zt;
                }),
                n.d(t, "Ib", function () {
                    return Kt;
                }),
                n.d(t, "Jb", function () {
                    return Le;
                }),
                n.d(t, "Kb", function () {
                    return De;
                }),
                n.d(t, "Lb", function () {
                    return _e;
                }),
                n.d(t, "Mb", function () {
                    return Ct;
                }),
                n.d(t, "Nb", function () {
                    return M;
                }),
                n.d(t, "Ob", function () {
                    return Ee;
                }),
                n.d(t, "Pb", function () {
                    return B;
                }),
                n.d(t, "Qb", function () {
                    return G;
                }),
                n.d(t, "Rb", function () {
                    return U;
                }),
                n.d(t, "Sb", function () {
                    return Ve;
                }),
                n.d(t, "Tb", function () {
                    return Nt;
                }),
                n.d(t, "Ub", function () {
                    return It;
                }),
                n.d(t, "Vb", function () {
                    return D;
                }),
                n.d(t, "Wb", function () {
                    return on;
                }),
                n.d(t, "Xb", function () {
                    return X;
                }),
                n.d(t, "Yb", function () {
                    return Be;
                }),
                n.d(t, "Zb", function () {
                    return mt;
                }),
                n.d(t, "ac", function () {
                    return ht;
                }),
                n.d(t, "bc", function () {
                    return lt;
                }),
                n.d(t, "cc", function () {
                    return ft;
                }),
                n.d(t, "dc", function () {
                    return Te;
                }),
                n.d(t, "ec", function () {
                    return K;
                }),
                n.d(t, "fc", function () {
                    return a;
                }),
                n.d(t, "gc", function () {
                    return Ie;
                }),
                n.d(t, "hc", function () {
                    return Ne;
                }),
                n.d(t, "ic", function () {
                    return Ae;
                }),
                n.d(t, "jc", function () {
                    return Re;
                }),
                n.d(t, "kc", function () {
                    return dt;
                }),
                n.d(t, "lc", function () {
                    return pt;
                }),
                n.d(t, "mc", function () {
                    return Ce;
                }),
                n.d(t, "nc", function () {
                    return _t;
                }),
                n.d(t, "oc", function () {
                    return xt;
                }),
                n.d(t, "pc", function () {
                    return J;
                }),
                n.d(t, "qc", function () {
                    return vt;
                }),
                n.d(t, "rc", function () {
                    return cn;
                }),
                n.d(t, "sc", function () {
                    return ke;
                }),
                n.d(t, "tc", function () {
                    return St;
                }),
                n.d(t, "uc", function () {
                    return Y;
                }),
                n.d(t, "vc", function () {
                    return sn;
                }),
                n.d(t, "wc", function () {
                    return mn;
                }),
                n.d(t, "xc", function () {
                    return ln;
                }),
                n.d(t, "yc", function () {
                    return un;
                }),
                n.d(t, "zc", function () {
                    return dn;
                }),
                n.d(t, "Ac", function () {
                    return fn;
                }),
                n.d(t, "Bc", function () {
                    return ge;
                }),
                n.d(t, "Cc", function () {
                    return m;
                }),
                n.d(t, "Dc", function () {
                    return ce;
                }),
                n.d(t, "Ec", function () {
                    return rt;
                }),
                n.d(t, "Fc", function () {
                    return re;
                }),
                n.d(t, "Gc", function () {
                    return ie;
                }),
                n.d(t, "Hc", function () {
                    return be;
                }),
                n.d(t, "Ic", function () {
                    return ae;
                }),
                n.d(t, "Jc", function () {
                    return ye;
                }),
                n.d(t, "Kc", function () {
                    return hn;
                }),
                n.d(t, "Lc", function () {
                    return pn;
                }),
                n.d(t, "Mc", function () {
                    return gt;
                }),
                n.d(t, "Nc", function () {
                    return bn;
                }),
                n.d(t, "Oc", function () {
                    return Me;
                }),
                n.d(t, "Pc", function () {
                    return je;
                }),
                n.d(t, "Qc", function () {
                    return $e;
                }),
                n.d(t, "Rc", function () {
                    return fe;
                }),
                n.d(t, "Sc", function () {
                    return Ue;
                }),
                n.d(t, "Tc", function () {
                    return te;
                }),
                n.d(t, "Uc", function () {
                    return ne;
                }),
                n.d(t, "Vc", function () {
                    return We;
                }),
                n.d(t, "Wc", function () {
                    return he;
                }),
                n.d(t, "Xc", function () {
                    return xe;
                }),
                n.d(t, "Yc", function () {
                    return z;
                }),
                n.d(t, "Zc", function () {
                    return H;
                }),
                n.d(t, "ad", function () {
                    return yt;
                }),
                n.d(t, "bd", function () {
                    return l;
                }),
                n.d(t, "cd", function () {
                    return vn;
                }),
                n.d(t, "dd", function () {
                    return Jt;
                }),
                n.d(t, "ed", function () {
                    return Qe;
                }),
                n.d(t, "fd", function () {
                    return ve;
                }),
                n.d(t, "gd", function () {
                    return ut;
                }),
                n.d(t, "hd", function () {
                    return st;
                }),
                n.d(t, "id", function () {
                    return Pe;
                }),
                n.d(t, "jd", function () {
                    return pe;
                }),
                n.d(t, "kd", function () {
                    return tt;
                }),
                n.d(t, "ld", function () {
                    return et;
                }),
                n.d(t, "md", function () {
                    return W;
                }),
                n.d(t, "nd", function () {
                    return _n;
                }),
                n.d(t, "od", function () {
                    return it;
                }),
                n.d(t, "pd", function () {
                    return ue;
                }),
                n.d(t, "qd", function () {
                    return Oe;
                }),
                n.d(t, "rd", function () {
                    return En;
                }),
                n.d(t, "sd", function () {
                    return yn;
                }),
                n.d(t, "td", function () {
                    return jt;
                });
            var r,
                o = n("OvAC"),
                i = n.n(o),
                a = "PairService",
                c = "DealHistoryService",
                s = "ActualBonusService",
                u = "BillingMessagesService",
                l = "2FAService",
                f = "AppService",
                d = "DataService",
                p = "LegacyService",
                m = "RateService",
                h = "CandleHistoryService",
                v = "CandleService",
                g = "DealServiceBo",
                _ = "DealServiceFx",
                y = "DealCurrentServiceBo",
                E = "DealCurrentServiceFx",
                b = "DealHistoryServiceBo",
                w = "DealHistoryServiceFx",
                S = "DealOrderCurrentServiceBo",
                O = "DealOrderCurrentServiceFx",
                A = "DealOrderHistoryServiceBo",
                T = "DealOrderHistoryServiceFx",
                R = "DealDetailsService",
                N = "DealDetailsServiceBo",
                I = "DealDetailsServiceFx",
                C = "DealCurrentListService",
                x = "dealDurationService",
                k = "dealDurationPresetService",
                P = "dealBlockReasonService",
                j = "dealRiskFreeService",
                L = "DealRiskFreeTransportService",
                M = "NavigationService",
                D = "OvlPostMessageService",
                F = "drawingService",
                V = "endTurboDealsService",
                B = "NoticeService",
                U = "NoticeStore",
                G = "NoticeSocketService",
                K = "PairProfitabilityNoticeService",
                z = "SurveyAboutForexService",
                H = "SurveyService",
                W = "uiService",
                X = "PageService",
                q = "AccountService",
                Y = "ProfileService",
                J = "PlatformNewsService",
                Z = "HotkeyService",
                Q = "FeatureToggleService",
                $ = "FpsService",
                ee = "LanguageService",
                te = "SoundService",
                ne = "StatisticsService",
                re = "RechargePopupService",
                oe = "IndicatorService",
                ie = "RechargeService",
                ae = "RechargeTooltipService",
                ce = "RechargeBonusService",
                se = "AssistantService",
                ue = "VipCallbackService",
                le = "FinHistoryService",
                fe = "SideBarManagerService",
                de = "ChatWrapperService",
                pe = "TradingSignalsService",
                me = "InternalTransactionsService",
                he = "StrikeService",
                ve = "TimeService",
                ge = "RatesService",
                _e = "MetaTraderService",
                ye = "RechargeTransportService",
                Ee = "NewsService",
                be = "RechargeSidebarProxyService",
                we = "InAppService",
                Se = "DealSoundService",
                Oe = "WebinarService",
                Ae = "PairTrendsServiceBo",
                Te = "PairDashboardService",
                Re = "PairTrendsServiceFx",
                Ne = "PairServiceFx",
                Ie = "PairServiceBo",
                Ce = "PhoneCollectorService",
                xe = "SupportChatService",
                ke = "PopupDealDetailsService",
                Pe = "TradingSidebarService",
                je = "SideBarService",
                Le = "MarketPlaceService",
                Me = "SettingsService",
                De = "MetaTraderRoutesService",
                Fe = "HashOpenOvlService",
                Ve = "OpenTutorialService",
                Be = "PairsRateUpdateService",
                Ue = "SocketReconnectService",
                Ge = "LimitsService",
                Ke = "ChartStore",
                ze = "ChartNewsService",
                He = "IndicatorListStore",
                We = "StrategyListStore",
                Xe = "AdvisorListStore",
                qe = "EndTurboDealsStore",
                Ye = "DealFormStore",
                Je = "DealFormSheetStore",
                Ze = "IndicatorSettingsStore",
                Qe = "TimePickerStore",
                $e = "SideBarStore",
                et = "TutorialStore",
                tt = "TransPanelStore",
                nt = "InAppStore",
                rt = "RechargeCabinetStore",
                ot = "InternalTransactionsStore",
                it = "VideoGalleryStore",
                at = "KYCStore",
                ct = "AssistantStore",
                st = "TradeManagerService",
                ut = "TradeFrameService",
                lt = "PairAssetsStoreBo",
                ft = "PairAssetsStoreFx",
                dt = "PairTrendsStoreBo",
                pt = "PairTrendsStoreFx",
                mt = "PairSelectStoreBo",
                ht = "PairSelectStoreFx",
                vt = "PlatformSidebarStore",
                gt = "SecurityNoteStore",
                _t = "PhoneCollectorStore",
                yt = "TechAnalysisStore",
                Et = "HeaderStore",
                bt = "ChartTypeSelectorStore",
                wt = Object.freeze({
                    __proto__: null,
                    PAIR_SERVICE: a,
                    DEAL_SERVICE: "DealService",
                    DEAL_HISTORY_SERVICE: c,
                    DEAL_CURRENT_SERVICE: "DealCurrentService",
                    DEAL_ORDER_HISTORY_SERVICE: "DealOrderHistoryService",
                    ACTUAL_BONUS_SERVICE: s,
                    BILLING_MESSAGES_SERVICE: u,
                    TFA_SERVICE: l,
                    KYC_SERVICE: "KYCService",
                    APP_SERVICE: f,
                    DATA_SERVICE: d,
                    LEGACY_SERVICE: p,
                    RATE_SERVICE: m,
                    CANDLE_HISTORY_SERVICE: h,
                    CANDLE_SERVICE: v,
                    CHART_DEAL_SERVICE: "ChartDealService",
                    DEAL_SERVICE_BO: g,
                    DEAL_SERVICE_FX: _,
                    DEAL_CURRENT_SERVICE_BO: y,
                    DEAL_CURRENT_SERVICE_FX: E,
                    DEAL_HISTORY_SERVICE_BO: b,
                    DEAL_HISTORY_SERVICE_FX: w,
                    DEAL_ORDER_CURRENT_SERVICE_BO: S,
                    DEAL_ORDER_CURRENT_SERVICE_FX: O,
                    DEAL_ORDER_HISTORY_SERVICE_BO: A,
                    DEAL_ORDER_HISTORY_SERVICE_FX: T,
                    DEAL_DETAILS_SERVICE: R,
                    DEAL_DETAILS_SERVICE_BO: N,
                    DEAL_DETAILS_SERVICE_FX: I,
                    DEAL_HISTORY_LIST_SERVICE: "DealHistoryListService",
                    DEAL_CURRENT_LIST_SERVICE: C,
                    DEAL_ORDER_CURRENT_LIST_SERVICE: "DealOrderCurrentListService",
                    DEAL_ORDER_HISTORY_LIST_SERVICE: "DealOrderHistoryListService",
                    DEAL_DURATION_SERVICE: x,
                    DEAL_DURATION_PRESET_SERVICE: k,
                    DEAL_BLOCK_REASON_SERVICE: P,
                    DEAL_RISK_FREE_SERVICE: j,
                    DEAL_HISTORY_UI_SERVICE: "DealHistoryUiService",
                    DEAL_RISK_FREE_TRANSPORT_SERVICE: L,
                    NAVIGATION_SERVICE: M,
                    OVL_POST_MESSAGE_SERVICE: D,
                    DRAWING_SERVICE: F,
                    END_TURBO_DEALS_SERVICE: V,
                    NOTICE_SERVICE: B,
                    NOTICE_STORE: U,
                    NOTICE_SOCKET_SERVICE: G,
                    PAIR_PROFITABILITY_NOTICE_SERVICE: K,
                    SURVEY_ABOUT_FOREX_SERVICE: z,
                    SURVEY_SERVICE: H,
                    UI_SERVICE: W,
                    PAGE_SERVICE: X,
                    ACCOUNT_SERVICE: q,
                    VIDEO_INSTRUCTION_SERVICE: "videoInstructionService",
                    PAGE_ROUTING_SERVICE: "PageRoutingService",
                    PROFILE_SERVICE: Y,
                    HISTORY_SERVICE: "HistoryService",
                    PLATFORM_NEWS_SERVICE: J,
                    HOTKEYS_SERVICE: Z,
                    FEATURE_TOGGLE_SERVICE: Q,
                    FPS_SERVICE: $,
                    LANGUAGE_SERVICE: ee,
                    SOUND_SERVICE: te,
                    STATISTICS_SERVICE: ne,
                    RECHARGE_POPUP_SERVICE: re,
                    VIP_PROGRESS_TOURNAMENT_SERVICE: "VipProgressTournamentService",
                    RISK_FREE_GAMIFICATION_DEMO_SERVICE: "RiskFreeGamificationDemoService",
                    INDICATOR_SERVICE: oe,
                    PAYOUT_SERVICE_LEGACY: "PayoutServiceLegacy",
                    RECHARGE_SERVICE: ie,
                    RECHARGE_TOOLTIP_SERVICE: ae,
                    RECHARGE_BONUS_SERVICE: ce,
                    ASSISTANT_SERVICE: se,
                    VIP_CALLBACK_SERVICE: ue,
                    FINHISTORY_SERVICE: le,
                    SIDE_BAR_MANAGER_SERVICE: fe,
                    CHAT_WRAPPER_SERVICE: de,
                    TRADING_SIGNALS_SERVICE: pe,
                    INTERNAL_TRANSACTIONS_SERVICE: me,
                    STRIKE_SERVICE: he,
                    TIME_SERVICE: ve,
                    DAILY_TASKS_STATE_SERVICE: "DailyTasksStateService",
                    DAILY_TASKS_NOTIFICATION_SERVICE: "DailyTasksNotificationService",
                    SIDEBAR_USER_PROFILE: "SidebarUserProfile",
                    RATES_SERVICE: ge,
                    PAYOUT_SERVICE: "PayoutService",
                    META_TRADER_SERVICE: _e,
                    NOTICE_TO_OVERLAY_ADAPTER_SERVICE: "NoticeToOverlayAdapterService",
                    SIDEBAR_WEEKLY_MARATHON: "SidebarWeeklyMarathon",
                    ON_BOARDING_SERVICE: "OnBoardingService",
                    ON_BOARDING_BANNER_SERVICE: "OnBoardingBannerService",
                    RECHARGE_TRANSPORT_SERVICE: ye,
                    NEWS_SERVICE: Ee,
                    RECHARGE_SIDEBAR_PROXY_SERVICE: be,
                    IN_APP_SERVICE: we,
                    DEAL_SOUND_SERVICE: Se,
                    EMARSYS_OFFER_SERVICE: "EmarsysOfferService",
                    OVERLAY_CAROUSEL_SERVICE: "OverlayCarouselService",
                    WEBINAR_SERVICE: Oe,
                    PAIR_TRENDS_SERVICE_BINARY: Ae,
                    PAIR_DASHBOARD_SERVICE: Te,
                    PAIR_TRENDS_SERVICE_FOREX: Re,
                    PAIR_SERVICE_FX: Ne,
                    PAIR_SERVICE_BO: Ie,
                    PHONE_COLLECTOR_SERVICE: Ce,
                    SUPPORT_CHAT_SERVICE: xe,
                    POPUP_DEAL_DETAILS_SERVICE: ke,
                    TRADING_SIDEBAR_SERVICE: Pe,
                    TRADE_CARD_SERVICE: "TradeCardService",
                    SIDEBAR_SERVICE: je,
                    MARKET_PLACE_SERVICE: Le,
                    SETTINGS_SERVICE: Me,
                    METATRADER_ROUTES_SERVICE: De,
                    TABS_SERVICE: "TabsService",
                    USER_CONFIRM_BANNER_SERVICE: "UserConfirmBannerService",
                    HASH_OPEN_OVL_SERVICE: Fe,
                    OPEN_TUTORIAL_SERVICE: Ve,
                    PAIRS_RATE_UPDATE_SERVICE: Be,
                    SOCKET_RECONNECT_SERVICE: Ue,
                    LIMITS_SERVICE: Ge,
                    NOTICE_OVERLAY_SERVICE: "NoticeOverlayService",
                    CHART_STORE: Ke,
                    CHART_NEWS_SERVICE: ze,
                    CHART_SENTIMENT_STORE: "ChartSentimentStore",
                    CHART_STATUS_STORE: "ChartStatusStore",
                    INDICATOR_LIST_STORE: He,
                    STRATEGY_LIST_STORE: We,
                    ADVISOR_LIST_STORE: Xe,
                    CHART_MESSAGES_STORE: "ChartMessagesStore",
                    END_TURBO_DEALS_STORE: qe,
                    END_TURBO_DEALS_TOOLTIP_STORE: "EndTurboDealsTooltipStore",
                    PLATFORM_TABS_STORE: "PlatformTabsStore",
                    PAIR_MANAGEMENT_STORE: "PairManagementStore",
                    DEAL_FORM_STORE: Ye,
                    DEAL_FORM_SHEET_STORE: Je,
                    INDICATOR_SETTINGS_STORE: Ze,
                    DRAWING_SETTINGS_STORE: "DrawingSettingsStore",
                    TIME_PICKER_STORE: Qe,
                    CHAT_BOT_STORE: "ChatBotStore",
                    SIDEBAR_STORE: $e,
                    SIDE_BAR_TRIGGER_STORE: "SideBarTriggerStore",
                    TUTORIAL_STORE: et,
                    TRANS_PANEL_STORE: tt,
                    PLAYLIST_STORE: "PlayListStore",
                    IN_APP_STORE: nt,
                    DAILY_TASKS_STORE: "DailyTasksStore",
                    RECHARGE_CABINET_STORE: rt,
                    INTERNAL_TRANSACTIONS_STORE: ot,
                    OVERLAY_CAROUSEL_STORE: "OverlayCarouselStore",
                    VIDEO_GALLERY_STORE: it,
                    DEAL_HISTORY_STORE: "DealHistoryStore",
                    PAYOUT_STORE: "PayoutStore",
                    KYC_STORE: at,
                    ASSISTANT_STORE: ct,
                    TRADE_MANAGER_SERVICE: st,
                    TRADE_FRAME_SERVICE: ut,
                    DEAL_ORDER_FORM_STORE: "DealOrderFormStore",
                    PAIR_ASSETS_STORE_BO: lt,
                    PAIR_ASSETS_STORE_FX: ft,
                    PAIR_TRENDS_STORE_BO: dt,
                    PAIR_TRENDS_STORE_FX: pt,
                    PAIR_ASSETS_SELECT_STORE_BO: mt,
                    PAIR_ASSETS_SELECT_STORE_FX: ht,
                    DEAL_ORDER_FORM_STORE_BO: "DealOrderFormStoreBo",
                    DEAL_ORDER_FORM_STORE_FX: "DealOrderFormStoreFx",
                    PLATFORM_SIDEBAR_STORE: vt,
                    SECURITY_NOTE_STORE: gt,
                    SIDEBAR_DAILY_TASKS_STORE: "SidebarDailyTasksStore",
                    PHONE_COLLECTOR_STORE: _t,
                    TECH_ANALYSIS_STORE: yt,
                    DAILY_TASKS_FLOAT_BTN_STORE: "DailyTasksFloatBtnStore",
                    HEADER_STORE: Et,
                    MARKET_PLACE_STORE: "MarketPlaceStore",
                    DEAL_HISTORY_POPUP_STORE: "DealHistoryPopupStore",
                    STOCKSUP_STORE: "StocksupStore",
                    SIDEBAR_PROFILE_STORE: "SideBarProfileStore",
                    USER_CONFIRM_BANNER_STORE: "UserConfirmBannerStore",
                    HOTKEYS_CONTAINER_STORE: "HotkeysContainerStore",
                    CHART_TYPE_SELECTOR_STORE: bt,
                }),
                St = "@prm/notifications",
                Ot = 27,
                At = "Escape",
                Tt = "ios_home_screen_reminder",
                Rt = "ios_install_pwa_tracker",
                Nt = "otp_switch_pair_name",
                It = "otp_switch_project_name",
                Ct = 1200,
                xt = { DEPOSIT: "deposit", TRADE: "trade", PAYOUT: "withdraw" },
                kt = { TRADE: "trade", DEPOSIT: "deposit" },
                Pt = { ADAPTIVE: "adaptive", DESKTOP: "desktop", WEB_VIEW: "webView" },
                jt = { DESKTOP: "app_desktop", IOS: "iOSWebApp" },
                Lt = { rub: "₽", usd: "$", eur: "€", demo: "Đ", brl: "R$", cny: "¥", thb: "฿" },
                Mt = { usd: "USD" },
                Dt = { usd: "USD", rub: "RUB" },
                Ft = { USD: "usd", EUR: "eur", RUB: "rub", BLR: "brl", CNY: "cny", THB: "thb" },
                Vt = [1, 3, 5, 6, 10, 12, 15, 20, 30, 60, 120, 180, 240, 300, 360, 600, 720, 900, 1200, 1800, 3600, 14400, 86400, 604800, 2419200],
                Bt = "d F  H:i:s",
                Ut = { WIN: "win", LOOSE: "loose", STANDOFF: "standoff", CANCEL: "cancel" },
                Gt = { DIGITAL: "digital", CLASSIC: "classic" },
                Kt = { AMOUNT: "amount", PRICE: "price", PERCENT: "percent" },
                zt = { STOP_LOSS: "stopLoss", TAKE_PROFIT: "takeProfit" },
                Ht = { STARTER: "starter", ADVANCED: "advanced", EXPERT: "expert" },
                Wt = {
                    ru: "Русский",
                    en: "English",
                    th: "ไทย",
                    id: "Bahasa Indonesia",
                    pt: "Português",
                    es: "Español",
                    tr: "Türkçe",
                    vi: "Tiếng Việt",
                    zh: "中文",
                    hi: "हिन्दी, हिंदी",
                    ar: "العربية",
                    ms: "Bahasa Melayu",
                    ur: "اردو",
                    bn: "বাংলা",
                    fl: "Filipino",
                    fr: "Français",
                    ja: "日本語",
                    ko: "한국어",
                },
                Xt = { AR: "ar", BN: "bn", EN: "en", ES: "es", FL: "fl", FR: "fr", HI: "hi", ID: "id", JP: "ja", KO: "ko", MS: "ms", PT: "pt", RU: "ru", TH: "th", TR: "tr", UR: "ur", VI: "vi", ZH: "zh" },
                qt = {
                    ar: "ar_AE",
                    bn: "bn_BD",
                    en: "en_US",
                    es: "es_LA",
                    fl: "fl_PH",
                    fr: "fr_FR",
                    hi: "hi_IN",
                    id: "id_ID",
                    ja: "ja_JP",
                    ko: "ko_KR",
                    ms: "ms_MY",
                    pt: "pt_BR",
                    ru: "ru_RU",
                    th: "th_TH",
                    tr: "tr_TR",
                    ur: "ur_PK",
                    vi: "vi_VN",
                    zh: "zh_CN",
                },
                Yt =
                    ((r = {}),
                    i()(r, Xt.AR, "ar"),
                    i()(r, Xt.BN, "bn"),
                    i()(r, Xt.EN, "en"),
                    i()(r, Xt.ES, "es"),
                    i()(r, Xt.FL, "fl"),
                    i()(r, Xt.FR, "fr"),
                    i()(r, Xt.HI, "hi"),
                    i()(r, Xt.ID, "id"),
                    i()(r, Xt.JP, "ja"),
                    i()(r, Xt.KO, "ko"),
                    i()(r, Xt.MS, "ms"),
                    i()(r, Xt.PT, "pt"),
                    i()(r, Xt.RU, "ru"),
                    i()(r, Xt.TH, "th"),
                    i()(r, Xt.TR, "tr"),
                    i()(r, Xt.UR, "ur"),
                    i()(r, Xt.VI, "vi"),
                    i()(r, Xt.ZH, "zh"),
                    r),
                Jt = { ru: " ", en: ",", th: ",", id: ".", pt: ".", es: ",", tr: ".", vi: ".", zh: ",", hi: ",", ar: ".", ms: ",", ur: ",", bn: ",", fl: ",", fr: ",", ja: ",", ko: "," },
                Zt = { ru: ",", en: ".", th: ".", id: ",", pt: ",", es: ".", tr: ",", vi: ",", zh: ".", hi: ".", ar: ",", ms: ".", ur: ".", bn: ".", fl: ".", fr: ".", ja: ".", ko: "." },
                Qt = ["AR", "BO", "BR", "CL", "CO", "CR", "CU", "DO", "EC", "GT", "HN", "HT", "MX", "NI", "PA", "PE", "PY", "SV", "UY", "VE"],
                $t = ["en", "id", "hi", "vi", "ru", "ur", "th", "pt", "ms", "zh", "tr", "ar", "es", "fr", "ko", "ja", "bn", "fl"],
                en = [
                    "as",
                    "ai",
                    "aw",
                    "au",
                    "at",
                    "be",
                    "bl",
                    "bq",
                    "bm",
                    "bg",
                    "ky",
                    "hr",
                    "ch",
                    "cf",
                    "cd",
                    "ci",
                    "cw",
                    "cy",
                    "cz",
                    "io",
                    "ca",
                    "ck",
                    "dk",
                    "ee",
                    "er",
                    "et",
                    "fo",
                    "fk",
                    "fi",
                    "fr",
                    "gf",
                    "pf",
                    "de",
                    "gi",
                    "gr",
                    "gl",
                    "gp",
                    "gb",
                    "gu",
                    "hu",
                    "es",
                    "ir",
                    "iq",
                    "il",
                    "is",
                    "ie",
                    "it",
                    "jp",
                    "lv",
                    "li",
                    "lt",
                    "lu",
                    "lb",
                    "lr",
                    "ly",
                    "ml",
                    "mm",
                    "mt",
                    "mq",
                    "ms",
                    "mu",
                    "nl",
                    "nc",
                    "no",
                    "nz",
                    "nu",
                    "nf",
                    "kp",
                    "mp",
                    "mf",
                    "pl",
                    "pt",
                    "pr",
                    "pm",
                    "re",
                    "ro",
                    "ru",
                    "vc",
                    "vi",
                    "sh",
                    "si",
                    "sx",
                    "sk",
                    "so",
                    "sd",
                    "sy",
                    "se",
                    "tk",
                    "tc",
                    "us",
                    "vg",
                    "vu",
                    "wf",
                    "ye",
                    "zw",
                ],
                tn = ["th", "br", "id"],
                nn = qt.en,
                rn = ["BR", "ID", "TH", "VN"],
                on = {
                    ABOUT: "about",
                    AFFILIATE: "affiliate",
                    ANALYTICS: "analytics",
                    AUTH: "auth",
                    BLOCKED_PAGE: "blocked",
                    BLOG: "blog",
                    CABINET: "cabinet",
                    EDUCATION: "education",
                    FOREX: "forex",
                    HOME: "home",
                    LOG_OUT: "user/logout",
                    METATRADER: "metatrader",
                    NEWS: "news",
                    PLATFORM: "platform",
                    REGULATION: "regulation",
                    ROOT: "",
                    SITE: "site",
                    SUPPORT: "support",
                    TERMS: "terms",
                    TRAINING: "training",
                    TUTORIAL: "tutorial",
                    VERIFICATION_PAGE: "verification",
                    WEBINARS: "education",
                },
                an = "EURUSD",
                cn = {
                    IS_BETA_VERSION: "is_platform_beta_version",
                    ONE_CLICK_ON: "1click_on",
                    ONE_SCREEN_DEALS_2: "one_screen_deals_2",
                    TEST_BO_FX: "test_bo_fx",
                    TEST_DEMO_REFILLABLE: "test_demo_refillable",
                    TUTORIAL_ACTIVE: "tutorial_active_duration",
                    TEST_DEALS_TO_LEFT: "test_deals_to_left",
                },
                sn = { FOREX: "fx", BINARY: "bo", OTP: "otp", MT: "mt" },
                un = (sn.FOREX, sn.BINARY, sn.FOREX),
                ln = sn.BINARY,
                fn = sn.OTP,
                dn = sn.MT,
                pn = {
                    PLATFORM: "/platform",
                    CABINET: "/cabinet",
                    EDUCATION: "/education",
                    BLOG: "https://blog.olymptrade.com/ru/",
                    ABOUT: "/about",
                    SUPPORT: "/support",
                    TRAINING: "/training",
                    REGULATION: "/regulation",
                    HOME: "/home",
                    TOURNAMENTS: "/tournaments",
                    STATUSES: "/statuses",
                    DOWNLOAD: "/download",
                    AFFILIATE: "/affiliate",
                    TERMS: "/terms",
                },
                mn = { OPTIONS: "Fixed Time", FOREX: "Forex" },
                hn = "RISK FREE",
                vn = { LIGHT: "light", DARK: "dark" },
                gn = { MOBILE: 480, TABLET: 768 },
                _n = {
                    BAT_TOURNAMENT_ANNOUNCED: "bat_tournament_announced",
                    BATTLEROOM_ANNOUNCED: "battleroom_announced",
                    CHART_TYPES_ENABLED: "chart_types_enabled",
                    DEAL_CATEGORY: "deal_category",
                    DEAL_FORM_SHOW_LIMITS: "deal_form_show_limits",
                    DEAL_FORM_SHOW_MULTIPLICATOR: "deal_form_show_multiplicator",
                    DEAL_MULTIPLICATOR: "deal_multiplicator",
                    DEAL_STOP_LOSS: "deal_stop_loss",
                    DEAL_TAKE_PROFIT: "deal_take_profit",
                    DEAL_SUM: "deal_sum",
                    DEAL_TYPE: "deal_type",
                    DIGITAL_STRIKES_VISIBLE: "digital_strikes_visible",
                    DRAW_ELS: "draw_els",
                    DURATION_HISTORY: "duration_history",
                    HOTKEYS: "hotkeys",
                    HOTKEYS_ACTIVATED: "hotkeys_activated",
                    IGNORE_HOLD_USE: "ignore_hold_use",
                    INDICATOR_SETTINGS: "indicator_settings",
                    INDICATORS: "indicators",
                    INDICATORS_ENABLED: "indicators_enabled",
                    IS_ONE_CLICK_POPUP: "is_one_click_popup",
                    IS_ONE_CLICK_TRADE_DEAL: "is_one_click_trade_deal",
                    IS_SENTIMENT: "is_sentiment",
                    IS_TECH_ANALYSIS_DISABLED: "is_tech_analysis_disabled",
                    IS_TIME_DEAL: "is_time_deal",
                    LANG: "lang",
                    MARKET_PLACE_ACCEPTED_POLICY: "market_place_accepted_policy",
                    ONBOARDING: "onboarding",
                    OPEN_CHANNEL_VIDEO_GALLERY: "open_channel_video_gallery",
                    OVERLAY_ACCEPTED_TRADING_SIGNALS: "overlay_accepted_trading_signals",
                    OVERLAY_LAST_OPEN_TIME: "overlay_last_open_time",
                    OVERLAY_MUTED_CHANNELS: "overlay_muted_channels",
                    OVERLAY_SELECTED_ITEMS: "overlay_selected_items",
                    PAIR_DEFAULT: "pair_default",
                    PAIRS: "pairs",
                    PAIRS_PROPERTIES: "pairsProperties",
                    PLATFORM_THEME: "platform_theme",
                    PROFITABILITY_SORT: "profitability_sort",
                    PROJECT: "project",
                    RATE: "rate",
                    SENTIMENT: "sentiment",
                    SHOW_ORDERS: "show_orders",
                    SHOW_VIP_CHAT: "show_vip_chat",
                    SIDEBAR_COLLAPSED: "sidebar_collapsed",
                    TP_DURATION: "tp_duration",
                    TRADE_FRAMES: "trade_frames",
                    VIP_CHAT_OPEN_TIME: "vip_chat_open_time",
                    DEAL_ORDER: "deal_order",
                },
                yn = { IOS: "ios", ANDROID: "android" },
                En = "webView",
                bn = wt;
        },
        u6G8: function (e, t, n) {},
        u8vh: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return s;
            }),
                n.d(t, "b", function () {
                    return u;
                }),
                n.d(t, "c", function () {
                    return l;
                }),
                n.d(t, "d", function () {
                    return f;
                });
            var r = n("mXGw"),
                o = n.n(r),
                i = n("deTv"),
                a = n("YTIe"),
                c = n("6eLe"),
                s = {
                    ANDROID: {
                        FOREX: "https://play.google.com/store/apps/details?id=com.olymptrade.forex",
                        OPTIONS: "https://app.appsflyer.com/com.ticno.olymptrade?pid=main_page",
                        MT4: "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4",
                        APK: "https://apps.".concat(c.m, "/apk/Otp-latest-app.apk"),
                        PLUS: "https://play.google.com/store/apps/details?id=com.olymptrade.plus",
                        OPERA: "http://android.oms.apps.bemobi.com/en_ua/olymptrade_online_trading_app.html",
                    },
                    IOS: {
                        OPTIONS: "https://app.appsflyer.com/id1053416106?pid=main_page",
                        MT4: "https://itunes.apple.com/app/id496212596",
                        PLUS: "https://apps.apple.com/IN/app/id1496363480",
                        OPERA: "http://ios.oms.apps.bemobi.com/en_ua/olymptrade_online_trading_app.html",
                    },
                    MACOS: { OTP: "https://apps.".concat(c.m, "/Olymp_Trade_Community_Version_mac_latest.dmg"), MT4: "https://apps.".concat(c.m, "/olymp_trade_mt4_mac_latest.dmg") },
                    WINDOWS: {
                        OTP: { X32: "https://apps.".concat(c.m, "/Olymp_Trade_Community_Version_win32_latest.exe"), X64: "https://apps.".concat(c.m, "/Olymp_Trade_Community_Version_win64_latest.exe") },
                        MT4: "https://download.mql5.com/cdn/web/14328/mt4/olymptradesetup.exe",
                    },
                    WEB: { OTP: "https://olymptrade.com", MT4: "https://metatrader.olymptrade.com" },
                    HUAWEI: { OTP: "https://appgallery7.huawei.com/#/app/C101680437" },
                    XIAOMI: { OTP: "mimarket://details?id=com.ticno.olymptrade" },
                    PLAYMARKET: { OTP: "https://playmarket.store/detail/com.ticno.olymptrade" },
                    APKPURE: { OTP: "https://apkpure.com/olymp-trade-%E2%80%93-online-trading-app/com.ticno.olymptrade" },
                },
                u = [
                    {
                        type: "android",
                        icon: a.M,
                        content: { title: "Google Play", text: o.a.createElement(i.c, { id: "home_get_it_on", defaultMessage: "Get it on" }) },
                        href: s.ANDROID.OPTIONS,
                        productName: "akma",
                        linkType: "link",
                        productType: "google_play",
                    },
                    {
                        type: "android-apk",
                        icon: a.K,
                        content: { title: "Android", text: o.a.createElement(i.c, { id: "download_mobile_apk_title", defaultMessage: "Download .APK for" }), size: "15,9 Mb" },
                        productName: "akma",
                        linkType: "app",
                        productType: "android_apk",
                    },
                    {
                        type: "ios",
                        icon: a.d,
                        content: { title: "App Store", text: o.a.createElement(i.c, { id: "home_download_on_the", defaultMessage: "Download on the" }) },
                        href: s.IOS.OPTIONS,
                        productName: "akma",
                        linkType: "link",
                        productType: "app_store",
                    },
                    {
                        type: "macos",
                        icon: a.e,
                        content: { title: "macOS", text: o.a.createElement(i.c, { id: "home_download_app_for", defaultMessage: "Download App for" }), size: "66 Mb" },
                        href: s.MACOS.OTP,
                        productName: "akma",
                        linkType: "app",
                        productType: "mac_os",
                    },
                    {
                        type: "windows-32",
                        icon: a.Fb,
                        content: { title: "Windows x32", text: o.a.createElement(i.c, { id: "home_download_app_for", defaultMessage: "Download App for" }), size: "43,6 Mb" },
                        href: s.WINDOWS.OTP.X32,
                        productName: "akma",
                        linkType: "app",
                        productType: "windows_x32",
                    },
                    {
                        type: "windows-64",
                        icon: a.Fb,
                        content: { title: "Windows x64", text: o.a.createElement(i.c, { id: "home_download_app_for", defaultMessage: "Download App for" }), size: "45,7 Mb" },
                        href: s.WINDOWS.OTP.X64,
                        productName: "akma",
                        linkType: "app",
                        productType: "windows_x64",
                    },
                    { type: "web", icon: a.R, content: { title: "Web" }, href: s.WEB.OTP, productName: "akma", linkType: "link", productType: "web" },
                    {
                        type: "huawei",
                        icon: a.O,
                        content: { title: "Huawei", text: o.a.createElement(i.c, { id: "home_download_on_the", defaultMessage: "Download on the" }) },
                        href: s.HUAWEI.OTP,
                        productName: "akma",
                        linkType: "link",
                        productType: "huawei",
                    },
                    {
                        type: "playmarket",
                        icon: a.bb,
                        content: { title: "PlayMarket", text: o.a.createElement(i.c, { id: "home_download_on_the", defaultMessage: "Download on the" }) },
                        href: s.PLAYMARKET.OTP,
                        productName: "akma",
                        linkType: "link",
                        productType: "playmarket",
                    },
                    {
                        type: "apkpure",
                        icon: a.c,
                        content: { title: "APKpure", text: o.a.createElement(i.c, { id: "home_download_on_the", defaultMessage: "Download on the" }) },
                        href: s.APKPURE.OTP,
                        productName: "akma",
                        linkType: "link",
                        productType: "apkpure",
                    },
                    {
                        type: "opera-ios",
                        icon: a.q,
                        content: { title: "Opera Mobile Store", text: o.a.createElement(i.c, { id: "home_download_on_the", defaultMessage: "Download on the" }) },
                        href: s.IOS.OPERA,
                        productName: "akma",
                        linkType: "link",
                        productType: "opera_mobile_ios",
                    },
                    {
                        type: "opera-android",
                        icon: a.q,
                        content: { title: "Opera Mobile Store", text: o.a.createElement(i.c, { id: "home_download_on_the", defaultMessage: "Download on the" }) },
                        href: s.ANDROID.OPERA,
                        productName: "akma",
                        linkType: "link",
                        productType: "opera_mobile_android",
                    },
                ],
                l = [
                    {
                        type: "ios",
                        icon: a.d,
                        content: { title: "App Store", text: o.a.createElement(i.c, { id: "home_download_on_the", defaultMessage: "Download on the" }) },
                        href: s.IOS.MT4,
                        productName: "meta",
                        linkType: "link",
                        productType: "meta_app_store",
                    },
                    {
                        type: "android",
                        icon: a.M,
                        content: { title: "Google Play", text: o.a.createElement(i.c, { id: "home_get_it_on", defaultMessage: "Get it on" }) },
                        href: s.ANDROID.MT4,
                        productName: "meta",
                        linkType: "link",
                        productType: "meta_google_play",
                    },
                    { type: "web", icon: a.R, content: { title: "Web" }, href: s.WEB.MT4, productName: "meta", linkType: "link", productType: "meta_web" },
                    {
                        type: "macos",
                        icon: a.e,
                        content: { title: "macOS", text: o.a.createElement(i.c, { id: "home_download_app_for", defaultMessage: "Download App for" }) },
                        href: s.MACOS.MT4,
                        productName: "meta",
                        linkType: "app",
                        productType: "meta_mac_os",
                    },
                    {
                        type: "windows",
                        icon: a.Fb,
                        content: { title: "Windows", text: o.a.createElement(i.c, { id: "home_download_app_for", defaultMessage: "Download App for" }) },
                        href: s.WINDOWS.MT4,
                        productName: "meta",
                        linkType: "app",
                        productType: "meta_windows",
                    },
                ],
                f = [
                    {
                        type: "ios",
                        icon: a.d,
                        content: { title: "App Store", text: o.a.createElement(i.c, { id: "home_download_on_the", defaultMessage: "Download on the" }) },
                        href: s.IOS.PLUS,
                        productName: "plus",
                        linkType: "link",
                        productType: "plus_app_store",
                    },
                    {
                        type: "android",
                        icon: a.M,
                        content: { title: "Google Play", text: o.a.createElement(i.c, { id: "home_get_it_on", defaultMessage: "Get it on" }) },
                        href: s.ANDROID.PLUS,
                        productName: "plus",
                        linkType: "link",
                        productType: "plus_google_play",
                    },
                ];
        },
        "uKE/": function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Number", { EPSILON: Math.pow(2, -52) });
        },
        uRBY: function (e, t, n) {
            var r = n("mvii"),
                o = n("GCOZ");
            e.exports = function (e) {
                return function (t, n) {
                    var i,
                        a,
                        c = String(o(t)),
                        s = r(n),
                        u = c.length;
                    return s < 0 || s >= u
                        ? e
                            ? ""
                            : void 0
                        : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === u || (a = c.charCodeAt(s + 1)) < 56320 || a > 57343
                        ? e
                            ? c.charAt(s)
                            : i
                        : e
                        ? c.slice(s, s + 2)
                        : a - 56320 + ((i - 55296) << 10) + 65536;
                };
            };
        },
        uahg: function (e, t, n) {
            "use strict";
            var r = n("ovh1"),
                o = n("fwl+"),
                i = n("i0F7"),
                a = n("guUT"),
                c = n("Zrjs");
            function s(e) {
                (this.defaults = e), (this.interceptors = { request: new i(), response: new i() });
            }
            (s.prototype.request = function (e) {
                "string" == typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}),
                    (e = c(this.defaults, e)).method ? (e.method = e.method.toLowerCase()) : this.defaults.method ? (e.method = this.defaults.method.toLowerCase()) : (e.method = "get");
                var t = [a, void 0],
                    n = Promise.resolve(e);
                for (
                    this.interceptors.request.forEach(function (e) {
                        t.unshift(e.fulfilled, e.rejected);
                    }),
                        this.interceptors.response.forEach(function (e) {
                            t.push(e.fulfilled, e.rejected);
                        });
                    t.length;

                )
                    n = n.then(t.shift(), t.shift());
                return n;
            }),
                (s.prototype.getUri = function (e) {
                    return (e = c(this.defaults, e)), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
                }),
                r.forEach(["delete", "get", "head", "options"], function (e) {
                    s.prototype[e] = function (t, n) {
                        return this.request(r.merge(n || {}, { method: e, url: t }));
                    };
                }),
                r.forEach(["post", "put", "patch"], function (e) {
                    s.prototype[e] = function (t, n, o) {
                        return this.request(r.merge(o || {}, { method: e, url: t, data: n }));
                    };
                }),
                (e.exports = s);
        },
        uj7L: function (e, t, n) {
            var r = n("X6VK"),
                o = n("ml72"),
                i = n("Sp5b");
            r(r.S, "String", {
                raw: function (e) {
                    for (var t = o(e.raw), n = i(t.length), r = arguments.length, a = [], c = 0; n > c; ) a.push(String(t[c++])), c < r && a.push(String(arguments[c]));
                    return a.join("");
                },
            });
        },
        uqQt: function (e, t, n) {
            var r = n("X6VK"),
                o = n("pGW6")(!0);
            r(r.S, "Object", {
                entries: function (e) {
                    return o(e);
                },
            });
        },
        v32R: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return s;
            });
            var r,
                o = n("iVZY"),
                i = n("olOL"),
                a = n("f6l3");
            r = { "X-App-Version": 15499 };
            var c = new o.a({
                    headers: r,
                    topology: new o.b({
                        onDomainError: function (e) {
                            i.c.sendEvent(e, i.a.ERROR, "psiq4JW3");
                        },
                        webViewType: Object(a.C)(),
                    }),
                }),
                s = c.topology;
            t.a = c;
        },
        v3sG: function (e, t, n) {
            e.exports = n.p + "../images/LCP.02e8d169.png";
        },
        vMO2: function (e, t, n) {
            "use strict";
            var r = n("ovh1");
            e.exports = r.isStandardBrowserEnv()
                ? {
                      write: function (e, t, n, o, i, a) {
                          var c = [];
                          c.push(e + "=" + encodeURIComponent(t)),
                              r.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()),
                              r.isString(o) && c.push("path=" + o),
                              r.isString(i) && c.push("domain=" + i),
                              !0 === a && c.push("secure"),
                              (document.cookie = c.join("; "));
                      },
                      read: function (e) {
                          var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                          return t ? decodeURIComponent(t[3]) : null;
                      },
                      remove: function (e) {
                          this.write(e, "", Date.now() - 864e5);
                      },
                  }
                : {
                      write: function () {},
                      read: function () {
                          return null;
                      },
                      remove: function () {},
                  };
        },
        vdga: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Reflect", { ownKeys: n("j/vf") });
        },
        vetT: function (e, t, n) {
            "use strict";
            e.exports = (e, t) => {
                if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
                if ("" === t) return [e];
                const n = e.indexOf(t);
                return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
            };
        },
        vkXo: function (e, t, n) {},
        vzva: function (e, t, n) {
            "use strict";
            var r = n("OvAC"),
                o = n.n(r),
                i = n("RiSW"),
                a = n.n(i),
                c = n("eg5f"),
                s = n("AD5U"),
                u = n("6eLe"),
                l = n("v32R").a;
            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t &&
                        (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            n.d(t, "e", function () {
                return d;
            }),
                n.d(t, "h", function () {
                    return p;
                }),
                n.d(t, "i", function () {
                    return m;
                }),
                n.d(t, "f", function () {
                    return h;
                }),
                n.d(t, "c", function () {
                    return v;
                }),
                n.d(t, "d", function () {
                    return g;
                }),
                n.d(t, "g", function () {
                    return _;
                }),
                n.d(t, "a", function () {
                    return y;
                }),
                n.d(t, "b", function () {
                    return E;
                });
            var d = function (e) {
                    var t = e.email,
                        n = e.password,
                        r = e.captcha,
                        o = e.doNotRemember,
                        i = e.threatMetrixSessionId;
                    return l.post(s.a.SIGN_IN, { data: { data: { email: t, password: n, dont_remember: o, tmx_session_id: i }, list: ["data"], captcha: { type: s.c, data: { token: r } } }, version: "v3", project: u.b });
                },
                p = function (e) {
                    var t = e.email,
                        n = e.password,
                        r = e.currency,
                        o = e.captcha,
                        i = e.threatMetrixSessionId,
                        a = e.fpId;
                    return l.post(s.a.SIGN_UP_BY_PASSWORD, { data: { data: { email: t, password: n, currency: r, lang: c.a.lang, tmx_session_id: i, fp_id: a }, captcha: { type: s.c, data: { token: o } } }, version: "v3", project: u.b });
                },
                m = function (e) {
                    var t = e.threatMetrixSessionId,
                        n = e.fpId,
                        r = a()(e, ["threatMetrixSessionId", "fpId"]);
                    return l.post(s.a.SIGN_UP_BY_OAUTH, {
                        data: {
                            data: (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? f(Object(n), !0).forEach(function (t) {
                                              o()(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                        : f(Object(n)).forEach(function (t) {
                                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                          });
                                }
                                return e;
                            })({}, r, { fp_id: n, language: c.a.lang, timezone: (new Date().getTimezoneOffset() / 60) * -1, tmx_session_id: t }),
                        },
                        version: "v3",
                        project: u.b,
                    });
                },
                h = function (e) {
                    var t = e.token,
                        n = e.code,
                        r = e.doNotRemember;
                    return l.post(s.a.DUO_AUTH, { data: { data: { dont_remember: r }, duo_auth: { token: t, code: n }, list: ["data"] }, version: "v3", project: u.b });
                },
                v = function (e) {
                    var t = e.email,
                        n = e.captcha;
                    return l.post(s.a.REMIND_PASSWORD, { data: { data: { email: t }, captcha: { type: s.c, data: { token: n } } }, version: "v3", project: u.b });
                },
                g = function (e) {
                    var t = e.password,
                        n = e.passwordRepeat,
                        r = e.token;
                    return l.post(s.a.CHANGE_PASSWORD, { data: { password: t, password_repeat: n, token: r }, version: "v3", project: u.b });
                },
                _ = function (e) {
                    return l.post(s.a.DUO_AUTH_REQUEST_SMS, { data: { token: e }, version: "v4", project: u.b });
                },
                y = function () {
                    return l.post(s.a.OAUTH_LIST, { data: { list: ["oauth_networks"] }, version: "v4", project: u.b });
                },
                E = function () {
                    return l.post(s.a.PROJECT_COLLECTION, { version: "v1", project: "otp" });
                };
        },
        w24S: function (e, t, n) {
            var r = n("L7zD"),
                o = n("kd9Q").each;
            function i(e, t) {
                (this.query = e), (this.isUnconditional = t), (this.handlers = []), (this.mql = window.matchMedia(e));
                var n = this;
                (this.listener = function (e) {
                    (n.mql = e.currentTarget || e), n.assess();
                }),
                    this.mql.addListener(this.listener);
            }
            (i.prototype = {
                constuctor: i,
                addHandler: function (e) {
                    var t = new r(e);
                    this.handlers.push(t), this.matches() && t.on();
                },
                removeHandler: function (e) {
                    var t = this.handlers;
                    o(t, function (n, r) {
                        if (n.equals(e)) return n.destroy(), !t.splice(r, 1);
                    });
                },
                matches: function () {
                    return this.mql.matches || this.isUnconditional;
                },
                clear: function () {
                    o(this.handlers, function (e) {
                        e.destroy();
                    }),
                        this.mql.removeListener(this.listener),
                        (this.handlers.length = 0);
                },
                assess: function () {
                    var e = this.matches() ? "on" : "off";
                    o(this.handlers, function (t) {
                        t[e]();
                    });
                },
            }),
                (e.exports = i);
        },
        wEu9: function (e, t) {
            e.exports = !1;
        },
        wUFM: function (e, t, n) {
            var r = n("P56o").parseFloat,
                o = n("hGr/").trim;
            e.exports =
                1 / r(n("SvMv") + "-0") != -1 / 0
                    ? function (e) {
                          var t = o(String(e), 3),
                              n = r(t);
                          return 0 === n && "-" == t.charAt(0) ? -0 : n;
                      }
                    : r;
        },
        wcNg: function (e, t, n) {
            var r = (function (e) {
                "use strict";
                var t,
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";
                function s(e, t, n, r) {
                    var o = t && t.prototype instanceof h ? t : h,
                        i = Object.create(o.prototype),
                        a = new R(r || []);
                    return (
                        (i._invoke = (function (e, t, n) {
                            var r = l;
                            return function (o, i) {
                                if (r === d) throw new Error("Generator is already running");
                                if (r === p) {
                                    if ("throw" === o) throw i;
                                    return I();
                                }
                                for (n.method = o, n.arg = i; ; ) {
                                    var a = n.delegate;
                                    if (a) {
                                        var c = O(a, n);
                                        if (c) {
                                            if (c === m) continue;
                                            return c;
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if (r === l) throw ((r = p), n.arg);
                                        n.dispatchException(n.arg);
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = d;
                                    var s = u(e, t, n);
                                    if ("normal" === s.type) {
                                        if (((r = n.done ? p : f), s.arg === m)) continue;
                                        return { value: s.arg, done: n.done };
                                    }
                                    "throw" === s.type && ((r = p), (n.method = "throw"), (n.arg = s.arg));
                                }
                            };
                        })(e, n, a)),
                        i
                    );
                }
                function u(e, t, n) {
                    try {
                        return { type: "normal", arg: e.call(t, n) };
                    } catch (e) {
                        return { type: "throw", arg: e };
                    }
                }
                e.wrap = s;
                var l = "suspendedStart",
                    f = "suspendedYield",
                    d = "executing",
                    p = "completed",
                    m = {};
                function h() {}
                function v() {}
                function g() {}
                var _ = {};
                _[i] = function () {
                    return this;
                };
                var y = Object.getPrototypeOf,
                    E = y && y(y(N([])));
                E && E !== n && r.call(E, i) && (_ = E);
                var b = (g.prototype = h.prototype = Object.create(_));
                function w(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                        e[t] = function (e) {
                            return this._invoke(t, e);
                        };
                    });
                }
                function S(e) {
                    var t;
                    this._invoke = function (n, o) {
                        function i() {
                            return new Promise(function (t, i) {
                                !(function t(n, o, i, a) {
                                    var c = u(e[n], e, o);
                                    if ("throw" !== c.type) {
                                        var s = c.arg,
                                            l = s.value;
                                        return l && "object" == typeof l && r.call(l, "__await")
                                            ? Promise.resolve(l.__await).then(
                                                  function (e) {
                                                      t("next", e, i, a);
                                                  },
                                                  function (e) {
                                                      t("throw", e, i, a);
                                                  }
                                              )
                                            : Promise.resolve(l).then(
                                                  function (e) {
                                                      (s.value = e), i(s);
                                                  },
                                                  function (e) {
                                                      return t("throw", e, i, a);
                                                  }
                                              );
                                    }
                                    a(c.arg);
                                })(n, o, t, i);
                            });
                        }
                        return (t = t ? t.then(i, i) : i());
                    };
                }
                function O(e, n) {
                    var r = e.iterator[n.method];
                    if (r === t) {
                        if (((n.delegate = null), "throw" === n.method)) {
                            if (e.iterator.return && ((n.method = "return"), (n.arg = t), O(e, n), "throw" === n.method)) return m;
                            (n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
                        }
                        return m;
                    }
                    var o = u(r, e.iterator, n.arg);
                    if ("throw" === o.type) return (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), m;
                    var i = o.arg;
                    return i
                        ? i.done
                            ? ((n[e.resultName] = i.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), m)
                            : i
                        : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), m);
                }
                function A(e) {
                    var t = { tryLoc: e[0] };
                    1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
                }
                function T(e) {
                    var t = e.completion || {};
                    (t.type = "normal"), delete t.arg, (e.completion = t);
                }
                function R(e) {
                    (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(A, this), this.reset(!0);
                }
                function N(e) {
                    if (e) {
                        var n = e[i];
                        if (n) return n.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                a = function n() {
                                    for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                                    return (n.value = t), (n.done = !0), n;
                                };
                            return (a.next = a);
                        }
                    }
                    return { next: I };
                }
                function I() {
                    return { value: t, done: !0 };
                }
                return (
                    (v.prototype = b.constructor = g),
                    (g.constructor = v),
                    (g[c] = v.displayName = "GeneratorFunction"),
                    (e.isGeneratorFunction = function (e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
                    }),
                    (e.mark = function (e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : ((e.__proto__ = g), c in e || (e[c] = "GeneratorFunction")), (e.prototype = Object.create(b)), e;
                    }),
                    (e.awrap = function (e) {
                        return { __await: e };
                    }),
                    w(S.prototype),
                    (S.prototype[a] = function () {
                        return this;
                    }),
                    (e.AsyncIterator = S),
                    (e.async = function (t, n, r, o) {
                        var i = new S(s(t, n, r, o));
                        return e.isGeneratorFunction(n)
                            ? i
                            : i.next().then(function (e) {
                                  return e.done ? e.value : i.next();
                              });
                    }),
                    w(b),
                    (b[c] = "Generator"),
                    (b[i] = function () {
                        return this;
                    }),
                    (b.toString = function () {
                        return "[object Generator]";
                    }),
                    (e.keys = function (e) {
                        var t = [];
                        for (var n in e) t.push(n);
                        return (
                            t.reverse(),
                            function n() {
                                for (; t.length; ) {
                                    var r = t.pop();
                                    if (r in e) return (n.value = r), (n.done = !1), n;
                                }
                                return (n.done = !0), n;
                            }
                        );
                    }),
                    (e.values = N),
                    (R.prototype = {
                        constructor: R,
                        reset: function (e) {
                            if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(T), !e))
                                for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval;
                        },
                        dispatchException: function (e) {
                            if (this.done) throw e;
                            var n = this;
                            function o(r, o) {
                                return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                            }
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var a = this.tryEntries[i],
                                    c = a.completion;
                                if ("root" === a.tryLoc) return o("end");
                                if (a.tryLoc <= this.prev) {
                                    var s = r.call(a, "catchLoc"),
                                        u = r.call(a, "finallyLoc");
                                    if (s && u) {
                                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                                    } else if (s) {
                                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    } else {
                                        if (!u) throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var o = this.tryEntries[n];
                                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                    var i = o;
                                    break;
                                }
                            }
                            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                            var a = i ? i.completion : {};
                            return (a.type = e), (a.arg = t), i ? ((this.method = "next"), (this.next = i.finallyLoc), m) : this.complete(a);
                        },
                        complete: function (e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return (
                                "break" === e.type || "continue" === e.type
                                    ? (this.next = e.arg)
                                    : "return" === e.type
                                    ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                    : "normal" === e.type && t && (this.next = t),
                                m
                            );
                        },
                        finish: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), m;
                            }
                        },
                        catch: function (e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var o = r.arg;
                                        T(n);
                                    }
                                    return o;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function (e, n, r) {
                            return (this.delegate = { iterator: N(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), m;
                        },
                    }),
                    e
                );
            })(e.exports);
            try {
                regeneratorRuntime = r;
            } catch (e) {
                Function("r", "regeneratorRuntime = r")(r);
            }
        },
        wf9V: function (e, t, n) {
            e.exports = n.p + "../images/awards_3.fccbcdd0.jpg";
        },
        xI3J: function (e, t, n) {
            var r = n("Bsg+"),
                o = Math.floor;
            e.exports = function (e) {
                return !r(e) && isFinite(e) && o(e) === e;
            };
        },
        xSFS: function (e, t, n) {
            "use strict";
            var r = n("ovh1"),
                o = [
                    "age",
                    "authorization",
                    "content-length",
                    "content-type",
                    "etag",
                    "expires",
                    "from",
                    "host",
                    "if-modified-since",
                    "if-unmodified-since",
                    "last-modified",
                    "location",
                    "max-forwards",
                    "proxy-authorization",
                    "referer",
                    "retry-after",
                    "user-agent",
                ];
            e.exports = function (e) {
                var t,
                    n,
                    i,
                    a = {};
                return e
                    ? (r.forEach(e.split("\n"), function (e) {
                          if (((i = e.indexOf(":")), (t = r.trim(e.substr(0, i)).toLowerCase()), (n = r.trim(e.substr(i + 1))), t)) {
                              if (a[t] && o.indexOf(t) >= 0) return;
                              a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n;
                          }
                      }),
                      a)
                    : a;
            };
        },
        yCHc: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return c;
            });
            var r = n("mXGw"),
                o = n.n(r),
                i = n("8Jek"),
                a = n.n(i),
                c =
                    (n("fOBY"),
                    function (e) {
                        return o.a.createElement("h2", { className: a()("com-c-title", e.className), "data-test": e.dataTest }, e.content);
                    });
        },
        yM7o: function (e, t) {
            var n = Math.expm1;
            e.exports =
                !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17)
                    ? function (e) {
                          return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + (e * e) / 2 : Math.exp(e) - 1;
                      }
                    : n;
        },
        yOxJ: function (e, t, n) {},
        yQy7: function (e, t, n) {},
        z6KD: function (e, t, n) {
            var r = n("P56o"),
                o = n("R5TD"),
                i = n("wEu9"),
                a = n("fxUj"),
                c = n("U1KF").f;
            e.exports = function (e) {
                var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                "_" == e.charAt(0) || e in t || c(t, e, { value: a.f(e) });
            };
        },
        z6jo: function (e, t, n) {
            var r = n("X6VK");
            r(r.S, "Math", { fround: n("61jV") });
        },
        "zIP/": function (e, t, n) {
            var r = n("1Alt")("meta"),
                o = n("Bsg+"),
                i = n("ezc+"),
                a = n("U1KF").f,
                c = 0,
                s =
                    Object.isExtensible ||
                    function () {
                        return !0;
                    },
                u = !n("E7Vc")(function () {
                    return s(Object.preventExtensions({}));
                }),
                l = function (e) {
                    a(e, r, { value: { i: "O" + ++c, w: {} } });
                },
                f = (e.exports = {
                    KEY: r,
                    NEED: !1,
                    fastKey: function (e, t) {
                        if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!i(e, r)) {
                            if (!s(e)) return "F";
                            if (!t) return "E";
                            l(e);
                        }
                        return e[r].i;
                    },
                    getWeak: function (e, t) {
                        if (!i(e, r)) {
                            if (!s(e)) return !0;
                            if (!t) return !1;
                            l(e);
                        }
                        return e[r].w;
                    },
                    onFreeze: function (e) {
                        return u && f.NEED && s(e) && !i(e, r) && l(e), e;
                    },
                });
        },
        zIds: function (e, t, n) {
            var r = n("at5L"),
                o = n("fQty").concat("length", "prototype");
            t.f =
                Object.getOwnPropertyNames ||
                function (e) {
                    return r(e, o);
                };
        },
        zRYl: function (e, t, n) {
            "use strict";
            var r = n("mXGw"),
                o = n.n(r),
                i = n("8Jek"),
                a = n.n(i),
                c = n("lDh9"),
                s =
                    (n("NJiK"),
                    function (e) {
                        return o.a.createElement(
                            "div",
                            { className: a()("header-row__box", "header-row__box_menu", e.className) },
                            o.a.createElement("button", { type: "button", className: "btn-menu header-row__burger-trigger", onClick: e.onClick }, "Menu", o.a.createElement(c.a, { className: "btn-menu__icon" }))
                        );
                    });
            (s.defaultProps = { onClick: function () {} }), (t.a = s);
        },
        zSai: function (e, t, n) {
            var r = n("X6VK"),
                o = n("BUlT"),
                i = String.fromCharCode,
                a = String.fromCodePoint;
            r(r.S + r.F * (!!a && 1 != a.length), "String", {
                fromCodePoint: function (e) {
                    for (var t, n = [], r = arguments.length, a = 0; r > a; ) {
                        if (((t = +arguments[a++]), o(t, 1114111) !== t)) throw RangeError(t + " is not a valid code point");
                        n.push(t < 65536 ? i(t) : i(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320));
                    }
                    return n.join("");
                },
            });
        },
        zb5u: function (e, t, n) {},
        zf4f: function (e, t, n) {
            "use strict";
            var r = n("ovh1"),
                o = n("aECo"),
                i = n("fwl+"),
                a = n("h1Um"),
                c = n("xSFS"),
                s = n("cON5"),
                u = n("2KG9");
            e.exports = function (e) {
                return new Promise(function (t, l) {
                    var f = e.data,
                        d = e.headers;
                    r.isFormData(f) && delete d["Content-Type"];
                    var p = new XMLHttpRequest();
                    if (e.auth) {
                        var m = e.auth.username || "",
                            h = e.auth.password || "";
                        d.Authorization = "Basic " + btoa(m + ":" + h);
                    }
                    var v = a(e.baseURL, e.url);
                    if (
                        (p.open(e.method.toUpperCase(), i(v, e.params, e.paramsSerializer), !0),
                        (p.timeout = e.timeout),
                        (p.onreadystatechange = function () {
                            if (p && 4 === p.readyState && (0 !== p.status || (p.responseURL && 0 === p.responseURL.indexOf("file:")))) {
                                var n = "getAllResponseHeaders" in p ? c(p.getAllResponseHeaders()) : null,
                                    r = { data: e.responseType && "text" !== e.responseType ? p.response : p.responseText, status: p.status, statusText: p.statusText, headers: n, config: e, request: p };
                                o(t, l, r), (p = null);
                            }
                        }),
                        (p.onabort = function () {
                            p && (l(u("Request aborted", e, "ECONNABORTED", p)), (p = null));
                        }),
                        (p.onerror = function () {
                            l(u("Network Error", e, null, p)), (p = null);
                        }),
                        (p.ontimeout = function () {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), l(u(t, e, "ECONNABORTED", p)), (p = null);
                        }),
                        r.isStandardBrowserEnv())
                    ) {
                        var g = n("vMO2"),
                            _ = (e.withCredentials || s(v)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
                        _ && (d[e.xsrfHeaderName] = _);
                    }
                    if (
                        ("setRequestHeader" in p &&
                            r.forEach(d, function (e, t) {
                                void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e);
                            }),
                        r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials),
                        e.responseType)
                    )
                        try {
                            p.responseType = e.responseType;
                        } catch (t) {
                            if ("json" !== e.responseType) throw t;
                        }
                    "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress),
                        "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress),
                        e.cancelToken &&
                            e.cancelToken.promise.then(function (e) {
                                p && (p.abort(), l(e), (p = null));
                            }),
                        void 0 === f && (f = null),
                        p.send(f);
                });
            };
        },
        zlqh: function (e, t, n) {
            var r = n("9dxi")("iterator"),
                o = !1;
            try {
                var i = [7][r]();
                (i.return = function () {
                    o = !0;
                }),
                    Array.from(i, function () {
                        throw 2;
                    });
            } catch (e) {}
            e.exports = function (e, t) {
                if (!t && !o) return !1;
                var n = !1;
                try {
                    var i = [7],
                        a = i[r]();
                    (a.next = function () {
                        return { done: (n = !0) };
                    }),
                        (i[r] = function () {
                            return a;
                        }),
                        e(i);
                } catch (e) {}
                return n;
            };
        },
        zsc7: function (e, t, n) {
            var r = n("X6VK"),
                o = n("xI3J"),
                i = Math.abs;
            r(r.S, "Number", {
                isSafeInteger: function (e) {
                    return o(e) && i(e) <= 9007199254740991;
                },
            });
        },
        zx98: function (e, t, n) {
            "use strict";
            var r = n("XQta"),
                o = n("SsG5");
            e.exports = n("AkS8")(
                "Map",
                function (e) {
                    return function () {
                        return e(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                {
                    get: function (e) {
                        var t = r.getEntry(o(this, "Map"), e);
                        return t && t.v;
                    },
                    set: function (e, t) {
                        return r.def(o(this, "Map"), 0 === e ? 0 : e, t);
                    },
                },
                r,
                !0
            );
        },
    },
    [["Ye/d", 147, 0, 1, 2, 3, 4]],
]);
//# sourceMappingURL=home.23df07cf.js.map
