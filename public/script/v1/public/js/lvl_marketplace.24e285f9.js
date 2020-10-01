(window.webpackJsonp = window.webpackJsonp || []).push([[17], {
    "84wx": function(e, t, n) {},
    axAt: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return Qe
        }),
        n.d(t, "b", function() {
            return et
        }),
        n.d(t, "c", function() {
            return tt
        }),
        n.d(t, "d", function() {
            return rt
        });
        var r = n("NthX")
          , a = n.n(r)
          , i = n("fFdx")
          , o = n.n(i)
          , s = n("T1e2")
          , c = n.n(s)
          , l = n("nxTg")
          , u = n.n(l)
          , p = n("RiSW")
          , d = n.n(p)
          , m = n("SDJZ")
          , f = n.n(m)
          , h = n("NToG")
          , y = n.n(h)
          , v = n("K4DB")
          , g = n.n(v)
          , b = n("+IV6")
          , E = n.n(b)
          , _ = n("eef+")
          , k = n.n(_)
          , w = n("OvAC")
          , x = n.n(w)
          , C = n("e+GP")
          , N = n.n(C)
          , P = n("mXGw")
          , S = n.n(P)
          , T = n("8Jek")
          , F = n.n(T)
          , M = n("mBK0")
          , O = n("deTv")
          , I = n("cUhM")
          , B = n("FFiR")
          , A = n("2UUl")
          , j = n.n(A)
          , R = n("xARA")
          , V = n.n(R)
          , z = n("YTIe")
          , H = n("fWs0")
          , L = n("cneo")
          , U = n("iVZY")
          , D = n("f6l3");
        function W(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? W(Object(n), !0).forEach(function(t) {
                    x()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function G(e, t, n, r) {
            var a, i = arguments.length, o = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : N()(Reflect)) && "function" == typeof Reflect.decorate)
                o = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
            return i > 3 && o && Object.defineProperty(t, n, o),
            o
        }
        var K = "once"
          , J = {
            ru: "mghIGz",
            en: "uVXJdf"
        }
          , Y = function(e) {
            return Boolean(new Date(1e3 * e) > new Date)
        }
          , X = function(e) {
            var t = new Date(1e3 * e)
              , n = t.getDate()
              , r = t.getMonth() + 1
              , a = t.getFullYear();
            return "".concat(n < 10 ? "0" + n : n, ".").concat(r < 10 ? "0" + r : r, ".").concat(a)
        }
          , Z = function(e, t) {
            return e.filter(function(e) {
                return t ? e.purchaseInfo && (e.purchaseInfo.type === K || Y(e.purchaseInfo.activeTill)) : !e.purchaseInfo || !e.purchaseInfo.type || e.purchaseInfo.type !== K && !Y(e.purchaseInfo.activeTill)
            })
        }
          , $ = function(e) {
            return function t(n) {
                return (e ? Object.keys(n) : []).reduce(function(e, r) {
                    return q({}, e, x()({}, r.replace(/_+(.?)/g, function(e, t) {
                        return t.toUpperCase()
                    }), (a = n[r],
                    "[object Object]" === Object.prototype.toString.call(a) ? t(n[r]) : n[r])));
                    var a
                }, {})
            }(e)
        }
          , Q = function(e) {
            return $(e)
        }
          , ee = function(e) {
            var t = e.purchaseInfo ? e : Object.assign({}, e, {
                purchaseInfo: {
                    type: "",
                    activeTill: !1,
                    allowNextPayment: null
                }
            });
            return q({}, t.purchaseInfo, {}, {
                isBought: Boolean(t.purchaseInfo.type) && t.purchaseInfo.type === K || Boolean(t.purchaseInfo.type !== K) && Y(t.purchaseInfo.activeTill),
                isSubscription: t.selectedPaymentType.type !== K,
                isActive: Boolean(t.purchaseInfo.type) && t.purchaseInfo.type !== K && Y(t.purchaseInfo.activeTill)
            })
        }
          , te = function(e, t) {
            var n = e.paymentTypes.find(function(e) {
                return e.currency === t
            });
            return n ? Object.assign({}, e, {
                selectedPaymentType: n
            }) : e
        }
          , ne = function() {
            var e = function(e) {
                function t(e) {
                    var n;
                    f()(this, t);
                    var r = (n = g()(this, E()(t).call(this, e))).props
                      , a = r.position
                      , i = r.text
                      , o = r.color
                      , s = r.className
                      , c = r.size;
                    return n.state = {
                        position: a,
                        text: i,
                        color: o,
                        className: s,
                        size: c
                    },
                    n
                }
                return k()(t, e),
                y()(t, [{
                    key: "render",
                    value: function() {
                        var e, t = this.state, n = t.position, r = t.size, a = t.color, i = t.className, o = t.text;
                        return S.a.createElement("div", {
                            style: this.props.style,
                            className: F()("module-spinner", (e = {},
                            x()(e, "module-spinner_".concat(n), n),
                            x()(e, "module-spinner_".concat(r), r),
                            e), i)
                        }, S.a.createElement("div", {
                            className: "module-spinner__spin"
                        }, S.a.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 64 64",
                            className: "satir-spinner"
                        }, S.a.createElement("path", {
                            fill: a,
                            fillOpacity: ".131",
                            d: "M58 32c0 14.4-11.6 26-26 26S6 46.4 6 32 17.6 6 32 6s26 11.6 26 26zM0 32c0 17.7 14.3 32 32 32s32-14.3\n              32-32S49.7 0 32 0 0 14.3 0 32z",
                            className: "satir-spinner__path-1"
                        }), S.a.createElement("linearGradient", {
                            id: "satir-gradient-1",
                            x1: "-91.457",
                            x2: "-91.981",
                            y1: "101.232",
                            y2: "102.114",
                            gradientTransform: "matrix(35 0 0 -57.055 3259 5822.275)",
                            gradientUnits: "userSpaceOnUse"
                        }, S.a.createElement("stop", {
                            offset: "0",
                            stopColor: a
                        }), S.a.createElement("stop", {
                            offset: ".839",
                            stopColor: a,
                            stopOpacity: "0"
                        }), S.a.createElement("stop", {
                            offset: "1",
                            stopColor: a,
                            stopOpacity: "0"
                        })), S.a.createElement("path", {
                            fill: "url(#satir-gradient-1)",
                            d: "M58 32c0 7.7-3.4 14.9-9.1 19.8-1.3 1.1-1.4 3-.3 4.2 1.1 1.3 3 1.4 4.2.3 7-6 11.2-14.8 11.2-24.3C64\n              14.3 49.7 0 32 0c-1.7 0-3 1.3-3 3s1.3 3 3 3c14.4 0 26 11.6 26 26z",
                            className: "satir-spinner__path-2"
                        }), S.a.createElement("linearGradient", {
                            id: "satir-gradient-2",
                            x1: "-92.119",
                            x2: "-91.583",
                            y1: "101.863",
                            y2: "100.97",
                            gradientTransform: "matrix(35 0 0 -57.055 3230 5829.22)",
                            gradientUnits: "userSpaceOnUse"
                        }, S.a.createElement("stop", {
                            offset: "0",
                            stopColor: a
                        }), S.a.createElement("stop", {
                            offset: ".839",
                            stopColor: a,
                            stopOpacity: "0"
                        }), S.a.createElement("stop", {
                            offset: "1",
                            stopColor: a,
                            stopOpacity: "0"
                        })), S.a.createElement("path", {
                            fill: "url(#satir-gradient-2)",
                            d: "M6 32c0-7.7 3.4-14.9 9.1-19.8 1.3-1.1 1.4-3 .3-4.2s-3-1.4-4.2-.3C4.2 13.7 0 22.5 0 32c0 17.7 14.3 32\n              32 32 1.7 0 3-1.3 3-3s-1.3-3-3-3C17.6 58 6 46.4 6 32z",
                            className: "satir-spinner__path-3"
                        }))), o ? S.a.createElement("div", {
                            className: "module-spinner__text"
                        }, o) : null)
                    }
                }]),
                t
            }(P.Component);
            return e.defaultProps = {
                color: "#999999",
                size: "normal",
                style: {}
            },
            e
        }()
          , re = function(e) {
            var t = e.className;
            return S.a.createElement("svg", {
                className: t,
                viewBox: "0 0 80 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, S.a.createElement("rect", {
                width: "80",
                height: "80",
                fill: "#203146"
            }), S.a.createElement("path", {
                opacity: "0.2",
                d: "M51.5285 37.6281L57.6912 44.8784C58.4034 45.7163 57.8048 47 56.7018 47H23.2983C22.144 47 21.5659 45.6114 22.3821 44.7993L34.8671 32.3776C35.3731 31.8741 36.1935 31.8741 36.6995 32.3776L44.8439 40.4807C45.3499 40.9842 46.1703 40.9842 46.6763 40.4807L49.623 37.549C50.1591 37.0156 51.0389 37.0522 51.5285 37.6281Z",
                fill: "#A5BDD9"
            }))
        }
          , ae = function(e) {
            var t = e.src
              , n = d()(e, ["src"])
              , r = Object(P.useState)(!1)
              , a = u()(r, 2)
              , i = a[0]
              , o = a[1]
              , s = Object(P.useState)(!1)
              , c = u()(s, 2)
              , l = c[0]
              , p = c[1]
              , m = new Image;
            return m.src = t,
            m.onload = function() {
                o(!0)
            }
            ,
            m.onerror = function() {
                p(!0),
                o(!0)
            }
            ,
            l || !i ? S.a.createElement(re, {
                className: n.className
            }) : S.a.createElement("img", Object.assign({
                className: F()("lazy-image", x()({}, "lazy-image_loaded", i)),
                src: t
            }, n))
        }
          , ie = function(e) {
            var t = e.type
              , n = void 0 === t ? 0 : t
              , r = e.color
              , a = void 0 === r ? "#0094FF" : r
              , i = e.className
              , o = e.size
              , s = 1 !== n
              , c = .5 === n
              , l = S.a.createElement("path", {
                fill: a,
                d: "M21.2 8.6c-1.4-.4-5.8-.8-5.8-.8s-1.7-4-2.6-5.3c-.7-1-1.4-.3-1.6 0-.8 1.2-2.6 5.3-2.6 5.3s-4.4.3-5.8.7c-1.2.4-.8 1.2-.5 1.6l4.2 4.1s-1 4.3-1 5.7c0 1.3 1 1.1 1.3 1 1.4-.5 5.2-2.7 5.2-2.7s3.8 2.2 5.2 2.7c1.1.4 1.3-.5 1.3-1 0-1.4-1-5.7-1-5.7s3.3-2.9 4.2-4c.7-1-.1-1.5-.5-1.6z"
            });
            return S.a.createElement("svg", {
                className: i,
                width: o,
                height: o,
                fill: "none",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, s || c ? S.a.createElement(P.Fragment, null, S.a.createElement("path", {
                clipRule: "evenodd",
                fill: a,
                fillRule: "evenodd",
                opacity: s || c ? ".3" : void 0,
                d: "M17.5 14.2s3.3-2.9 4.2-4c.7-1-.1-1.5-.5-1.6-1.4-.4-5.8-.8-5.8-.8s-1.7-4-2.6-5.3c-.7-1-1.4-.3-1.6 0-.8 1.2-2.6 5.3-2.6 5.3s-4.4.3-5.8.7c-1.2.4-.8 1.2-.5 1.6l4.2 4.1s-1 4.3-1 5.7c0 1.3 1 1.1 1.3 1 1.4-.5 5.2-2.7 5.2-2.7s3.8 2.2 5.2 2.7c1.1.4 1.3-.5 1.3-1 0-1.4-1-5.7-1-5.7zM11 16.5l1-.6 1 .6h.2a85.1 85.1 0 003 1.8 69.5 69.5 0 00-.6-3.5v-.1l-.3-1.2 1-.8v-.1a82.4 82.4 0 002.6-2.4l-1.4-.2-2.3-.3H14l-.4-1.2-.1-.1A89.1 89.1 0 0012 5.2a68 68 0 00-1.5 3.2v.1l-.6 1.2H8.6a75.2 75.2 0 00-3.5.4 75.4 75.4 0 002.6 2.5l.1.1.9.8-.3 1.2v.1a79.4 79.4 0 00-.7 3.5 69 69 0 003.1-1.7l.2-.1z"
            }), c ? S.a.createElement(P.Fragment, null, S.a.createElement("mask", {
                id: "star-mask",
                width: "14",
                height: "24",
                "mask-type": "alpha",
                maskUnits: "userSpaceOnUse"
            }, l), S.a.createElement("g", {
                mask: "url(#star-mask)"
            }, S.a.createElement("rect", {
                width: "14",
                height: "24",
                fill: a
            }))) : null) : S.a.createElement(P.Fragment, null, l))
        }
          , oe = function(e) {
            var t = e.rating
              , n = void 0 === t ? 0 : t
              , r = e.color
              , a = void 0 === r ? "#02A6F2" : r
              , i = e.withCounter
              , o = void 0 !== i && i
              , s = e.size
              , c = void 0 === s ? 16 : s
              , l = e.maxStars
              , u = void 0 === l ? 5 : l
              , p = n <= 0 ? 0 : n < u ? n : u
              , d = Number.isInteger(p)
              , m = d ? "".concat(p, ".0") : p
              , f = n.toFixed(1).split(".")
              , h = !1
              , y = p;
            if (!d) {
                var v = [Number(f[0]), Boolean(Number(f[1]))];
                y = v[0],
                h = v[1]
            }
            for (var g = [], b = 1; b <= u; b++)
                b <= y ? g.push(S.a.createElement(ie, {
                    className: "star-rating__star",
                    size: c,
                    color: a,
                    type: 1
                })) : g.push(S.a.createElement(ie, {
                    className: "star-rating__star",
                    size: c,
                    color: a,
                    type: 0
                }));
            return !d && h && (g[y] = S.a.createElement(ie, {
                className: "star-rating__star",
                size: c,
                color: a,
                type: .5
            })),
            S.a.createElement("div", {
                className: "star-rating"
            }, o && S.a.createElement("div", {
                className: "star-rating__counter"
            }, m), S.a.createElement("ul", {
                className: "star-rating__list"
            }, g.map(function(e, t) {
                return S.a.createElement("li", {
                    key: t,
                    className: "star-rating__item"
                }, e)
            })))
        }
          , se = function(e) {
            var t = e.title
              , n = e.withTitle
              , r = e.iconUrl
              , a = e.category
              , i = e.rating
              , o = e.big
              , s = e.className
              , c = e.openSurvey
              , l = e.isBought;
            return S.a.createElement("div", {
                className: F()("mp-card-title", x()({}, "mp-card-title_untitled", !n), s)
            }, S.a.createElement("div", {
                className: F()("mp-card-title__img", x()({}, "mp-card-title__img_big", o))
            }, S.a.createElement(ae, {
                src: r,
                alt: t || ""
            })), S.a.createElement("div", {
                className: "mp-card-title__caption"
            }, n && S.a.createElement("h3", {
                className: "mp-card-title__title"
            }, t), S.a.createElement("p", {
                className: "mp-card-title__category"
            }, a), S.a.createElement("div", {
                className: F()("mp-card-title__rating", x()({}, "mp-card-title__rating_cursor", l)),
                onClick: function() {
                    l && c && c()
                }
            }, S.a.createElement(oe, {
                rating: i,
                withCounter: !0
            }))))
        }
          , ce = function(e) {
            var t, n = e.onButtonClick, r = e.price, a = e.isBought, i = e.currentCurrency;
            return S.a.createElement(I.b, {
                className: F()("mp-card-button", (t = {},
                x()(t, "mp-card-button_free", 0 === r && !a),
                x()(t, "mp-card-button_price", !a && r),
                t)),
                onClick: function(e) {
                    e.stopPropagation(),
                    n()
                },
                color: a ? "accent" : "default",
                size: "small"
            }, a ? S.a.createElement(O.c, {
                id: "pro_award_open",
                defaultMessage: "Open"
            }) : i && r ? S.a.createElement(B.a, {
                value: r,
                currency: i,
                maximumFractionDigits: 2
            }) : S.a.createElement(O.c, {
                id: "mp_free_short",
                defaultMessage: "Free"
            }))
        }
          , le = function(e) {
            var t = e.title
              , n = e.id
              , r = e.link
              , a = e.category
              , i = e.rating
              , o = e.iconUrl
              , s = e.purchaseInfo
              , c = e.withTitle
              , l = e.className
              , u = e.paymentType
              , p = e.currentCurrency
              , d = e.goToFeature
              , m = e.buyFeature
              , f = e.openSurvey
              , h = Boolean(u && m);
            return S.a.createElement("div", {
                className: "mp-card-header"
            }, S.a.createElement(se, {
                className: F()("mp-card-header__title", l),
                title: c ? t : void 0,
                iconUrl: o,
                category: a,
                rating: i,
                withTitle: c,
                big: !h,
                isBought: Boolean(null === s || void 0 === s ? void 0 : s.isBought),
                openSurvey: f
            }), u && m && S.a.createElement("div", {
                className: "mp-card-header__pay"
            }, (null === s || void 0 === s ? void 0 : s.isBought) && !r ? S.a.createElement("p", {
                className: "mp-card-header__no-open"
            }, S.a.createElement(O.c, {
                id: "mp_subscription_active",
                defaultMessage: "Active"
            })) : null, !(null === s || void 0 === s ? void 0 : s.isBought) || r ? S.a.createElement(ce, {
                isBought: null === s || void 0 === s ? void 0 : s.isBought,
                onButtonClick: function() {
                    s && s.isBought && d && r ? d(r) : m && m(n)
                },
                price: null === u || void 0 === u ? void 0 : u.price,
                currentCurrency: p
            }) : null, (null === s || void 0 === s ? void 0 : s.isSubscription) && S.a.createElement("p", {
                className: "mp-card-header__subscription",
                onClick: function(e) {
                    e.stopPropagation(),
                    m && m(n)
                }
            }, s.isActive ? S.a.createElement(O.c, {
                id: "mp_subscription_till",
                defaultMessage: "Subscription till <strong>{value}</strong>",
                values: {
                    value: X(s.activeTill),
                    strong: function(e) {
                        return S.a.createElement("strong", null, e)
                    }
                }
            }) : S.a.createElement(O.c, {
                id: "mp_x_days_subscription",
                defaultMessage: "<strong>{value} days</strong> subscription",
                values: {
                    value: "30",
                    strong: function(e) {
                        return S.a.createElement("strong", null, e)
                    }
                }
            }))))
        }
          , ue = function(e) {
            var t, n = e.title, r = e.amount, a = e.className;
            return S.a.createElement("div", {
                className: F()("mp-titled-row", a)
            }, S.a.createElement("div", {
                className: "mp-titled-row__text mp-titled-row__text_title"
            }, n), S.a.createElement("div", {
                className: "mp-titled-row__separator"
            }, ((t = new Array(300)).fill("."),
            t)), S.a.createElement("p", {
                className: "mp-titled-row__text mp-titled-row__text_amount"
            }, r))
        }
          , pe = function(e) {
            var t = e.price
              , n = e.currency
              , r = e.purchaseInfo
              , a = e.onOpen
              , i = e.onBuy
              , o = !r.isBought && t
              , s = !r.isBought && !t
              , c = r.isBought && !r.isSubscription || r.isActive;
            return S.a.createElement(I.b, {
                fullWidth: !0,
                size: "large",
                className: "mp-card__button",
                color: "accent",
                onClick: r.isBought ? a : i
            }, c ? S.a.createElement(O.c, {
                id: "pro_award_open",
                defaultMessage: "Open"
            }) : null, s ? S.a.createElement(O.c, {
                id: "marketplace_free",
                defaultMessage: "Free"
            }) : null, o ? S.a.createElement(B.a, {
                value: t,
                currency: n,
                maximumFractionDigits: 2
            }) : null)
        }
          , de = function(e) {
            var t, n = e.allowNextPayment, r = e.isLoading, a = e.onCancel, i = e.onRenew;
            return S.a.createElement(I.e, {
                isLoading: r,
                fullWidth: !0,
                size: "medium",
                onClick: n ? a : i,
                className: F()("mp-card__button", "mp-card__button_subscription", (t = {},
                x()(t, "mp-card__button_subscription-cancel", n),
                x()(t, "mp-card__button_subscription-renew", !n),
                t))
            }, n ? S.a.createElement(O.c, {
                id: "cancel_subscription",
                defaultMessage: "Cancel Subscription"
            }) : S.a.createElement(O.c, {
                id: "renew_subscription",
                defaultMessage: "Renew Subscription"
            }))
        }
          , me = function(e) {
            var t = e.price
              , n = e.currency
              , r = e.purchaseInfo
              , a = e.isError
              , i = e.isLoading
              , o = e.withoutLink
              , s = e.onButtonOpen
              , c = e.onButtonBuy
              , l = e.onButtonRenew
              , u = e.onButtonCancel
              , p = r.activeTill && X(r.activeTill);
            return S.a.createElement(S.a.Fragment, null, S.a.createElement("div", {
                className: "mp-card__ctabutton"
            }, o ? S.a.createElement("p", {
                className: "mp-card__no-open"
            }, S.a.createElement(O.c, {
                id: "mp_subscription_active",
                defaultMessage: "Active"
            })) : S.a.createElement(pe, {
                price: t,
                purchaseInfo: r,
                currency: n,
                onBuy: c,
                onOpen: s
            }), r.isSubscription && S.a.createElement(ue, {
                title: r.isActive ? S.a.createElement(O.c, {
                    id: "subscription",
                    defaultMessage: "Subscription"
                }) : S.a.createElement(O.c, {
                    id: "mp_x_days_subscription",
                    defaultMessage: "<strong>{value} days</strong> subscription",
                    values: {
                        value: "30",
                        strong: function(e) {
                            return e
                        }
                    }
                }),
                className: "mp-card__subscription-status",
                amount: r.isActive ? S.a.createElement(O.c, {
                    id: "marketplace_active_till_date",
                    defaultMessage: "Valid until {value}",
                    values: {
                        value: p || ""
                    }
                }) : S.a.createElement(B.a, {
                    value: t,
                    currency: n,
                    maximumFractionDigits: 2
                })
            }), r.isBought && r.isSubscription ? S.a.createElement(de, {
                allowNextPayment: r.allowNextPayment,
                onCancel: u,
                onRenew: l,
                isLoading: i
            }) : null), a ? S.a.createElement("p", {
                className: "mp-card__error"
            }, r.isSubscription && r.isActive ? S.a.createElement(O.c, {
                id: "mp_renew_error",
                defaultMessage: "Unable to renew subscription. Try again later."
            }) : S.a.createElement(O.c, {
                id: "marketplace_request_error",
                defaultMessage: "Request failed. Please try again later."
            })) : null)
        }
          , fe = function(e) {
            var t = e.openSurvey;
            return S.a.createElement("div", {
                className: "mp-card__bottom-poll",
                onClick: function() {
                    t()
                }
            }, S.a.createElement(O.c, {
                id: "marketplace_pass_the_survey",
                defaultMessage: "Take the Survey"
            }))
        }
          , he = function(e) {
            var t = e.type
              , n = e.fill
              , r = void 0 === n ? "currentColor" : n;
            return S.a.createElement("svg", {
                width: "16",
                height: "16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, "android" === t && S.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.22.57l-.87.87c1 .73 1.65 1.9 1.65 3.23H4c0-1.33.65-2.5 1.63-3.22L4.76.57a.33.33 0 010-.47.33.33 0 01.47 0l1 .99a3.95 3.95 0 013.53 0l.99-.99a.33.33 0 01.47 0c.13.13.13.34 0 .47zM1.33 6.33a1 1 0 112 0V11a1 1 0 11-2 0V6.33zm3.34 6.34A.67.67 0 014 12V5.33h8V12c0 .37-.3.67-.67.67h-.66V15a1 1 0 11-2 0v-2.33H7.33V15a1 1 0 11-2 0v-2.33h-.66zm9-7.34a1 1 0 00-1 1V11a1 1 0 102 0V6.33a1 1 0 00-1-1zm-7-2H6v-.66h.67v.66zm2.66 0H10v-.66h-.67v.66z",
                fill: r
            }), "ios" === t && S.a.createElement("path", {
                d: "M13.96 12.07c-.22.51-.49.98-.8 1.41-.41.59-.75 1-1.02 1.22a2 2 0 01-1.31.57c-.34 0-.74-.1-1.22-.28-.47-.2-.9-.29-1.3-.29-.42 0-.87.1-1.35.29-.48.19-.86.29-1.16.3-.45.02-.9-.18-1.35-.59a8.7 8.7 0 01-2.68-6.13c0-.97.22-1.81.65-2.52A3.74 3.74 0 015.59 4.2c.35 0 .82.11 1.4.32.58.22.95.33 1.12.33.12 0 .53-.13 1.24-.38a4.14 4.14 0 011.68-.3c1.24.1 2.17.58 2.8 1.45a3.06 3.06 0 00-1.65 2.8c0 .92.35 1.7 1.02 2.31.3.29.64.5 1.02.67l-.26.67zM11.11 1c0 .73-.27 1.41-.8 2.04-.66.75-1.44 1.18-2.3 1.12a3.17 3.17 0 01.84-2.34 3.3 3.3 0 011.05-.78c.42-.2.82-.31 1.2-.33l.01.3z",
                fill: r
            }), "web" === t && S.a.createElement(S.a.Fragment, null, S.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15 8A7 7 0 111 8a7 7 0 0114 0zm-1.3.64a5.73 5.73 0 01-11.4 0h11.4zm0-1.28H2.3a5.73 5.73 0 0111.4 0z",
                fill: r
            }), S.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.94 14.92a7.05 7.05 0 001.7.05 10.77 10.77 0 000-13.94 7.09 7.09 0 00-1.7.05 9.52 9.52 0 010 13.84z",
                fill: r
            }), S.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.06 1.08a9.52 9.52 0 000 13.84 7.05 7.05 0 01-1.7.05 10.77 10.77 0 010-13.94 7.09 7.09 0 011.7.05z",
                fill: r
            })), "windows" === t && S.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.79 2.06l-4.91.5a.61.61 0 00-.55.6V7.4H6.8V2.06zm0 6.55H1.33v4.22c0 .32.24.58.55.61l4.9.5V8.6zM8 14.06V8.6h6.67v5.44a.6.6 0 01-.67.61l-6-.6zm0-6.67V1.94l6-.6a.6.6 0 01.67.6V7.4H8z",
                fill: r
            }))
        }
          , ye = function(e) {
            var t = e.platforms
              , n = e.withIcons;
            return S.a.createElement("div", {
                className: "mp-platform-requirements",
                title: "Compatible with ".concat(t.join(", "))
            }, S.a.createElement("p", {
                className: "mp-platform-requirements__title"
            }, S.a.createElement(O.c, {
                id: "mp_compatible_with",
                defaultMessage: "Compatible with:"
            })), S.a.createElement("ul", {
                className: "mp-platform-requirements__list"
            }, n ? t.map(function(e) {
                return S.a.createElement("li", {
                    key: e,
                    className: "mp-platform-requirements__item"
                }, S.a.createElement(he, {
                    type: e
                }))
            }) : S.a.createElement("p", {
                className: "mp-platform-requirements__raw-list"
            }, t.map(function(e) {
                return {
                    web: "Web",
                    ios: "iOS",
                    android: "Android",
                    windows: "Windows"
                }[e] || e
            }).join(", "))))
        }
          , ve = function(e) {
            return S.a.createElement("div", {
                className: "mp-error"
            }, S.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                fill: "none"
            }, S.a.createElement("path", {
                fill: "#DF553A",
                d: "M24 10c-1.4 0-2.33.93-2.33 2.33v14h4.66v-14c0-1.4-.93-2.33-2.33-2.33zM24 35.67A2.33 2.33 0 1 0 24 31a2.33 2.33 0 0 0 0 4.67z"
            }), S.a.createElement("path", {
                fill: "#DF553A",
                d: "M24 .67A23.4 23.4 0 0 0 .67 24 23.4 23.4 0 0 0 24 47.33 23.4 23.4 0 0 0 47.33 24 23.4 23.4 0 0 0 24 .67zm0 42A18.72 18.72 0 0 1 5.33 24c0-10.27 8.4-18.67 18.67-18.67 10.27 0 18.67 8.4 18.67 18.67 0 10.27-8.4 18.67-18.67 18.67z"
            })), S.a.createElement("p", {
                className: "mp-error__title"
            }, S.a.createElement(O.c, {
                id: "error_loading_data",
                defaultMessage: "Error loading data"
            })), S.a.createElement(I.b, {
                onClick: e.onClickRetry
            }, S.a.createElement(O.c, {
                id: "try_again",
                defaultMessage: "Try again"
            })))
        }
          , ge = function(e) {
            var t = e.enter
              , n = e.leave
              , r = e.onClick
              , a = e.direction;
            return S.a.createElement("button", {
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: r,
                className: F()("mp-carousel__arrow", x()({}, "mp-carousel__arrow_".concat(a), a))
            }, a)
        }
          , be = function(e) {
            var t = e.item
              , n = e.onClick;
            return S.a.createElement("div", {
                key: t,
                className: "mp-carousel__item",
                onClick: function() {
                    n && n(t)
                }
            }, S.a.createElement(ae, {
                src: t,
                alt: "",
                className: "mp-carousel__image"
            }))
        }
          , Ee = function(e) {
            function t() {
                var e;
                return f()(this, t),
                (e = g()(this, E()(t).apply(this, arguments))).state = {
                    sliderClassName: "mp-carousel__slider",
                    currentSlideIndex: 0
                },
                e.slider = j.a,
                e.sliderProps = {
                    afterChange: function(t) {
                        e.onShow(t)
                    },
                    onInit: function() {
                        e.onShow(0)
                    },
                    centerPadding: "6px",
                    centerMode: !1,
                    autoplay: !1,
                    infinite: !1,
                    variableWidth: !0,
                    useCss: !1,
                    useTransform: !1,
                    draggable: !1,
                    cssEase: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                    slidesToScroll: 1,
                    slidesToShow: 1
                },
                e.mouseEnterPrevHandler = function() {
                    e.setState(function() {
                        return {
                            sliderClassName: "mp-carousel__slider_left"
                        }
                    })
                }
                ,
                e.mouseEnterNextHandler = function() {
                    e.setState(function() {
                        return {
                            sliderClassName: "mp-carousel__slider_right"
                        }
                    })
                }
                ,
                e.mouseLeaveHandler = function() {
                    e.setState(function() {
                        return {
                            sliderClassName: ""
                        }
                    })
                }
                ,
                e
            }
            return k()(t, e),
            y()(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props.indexRenderingImmediately;
                    e && this.slider.slickGoTo(e)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = e.indexRenderingImmediately
                      , n = e.count;
                    n && this.props.count && n > this.props.count && this.handleSlidesRemoving(n),
                    t && this.slider.slickGoTo(t)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.slider && this.props.items.length && this.slider.slickPause()
                }
            }, {
                key: "handleSlidesRemoving",
                value: function(e) {
                    Number(this.state.currentSlideIndex) + 1 > e && this.slider.slickGoTo(e, !0)
                }
            }, {
                key: "onShow",
                value: function(e) {
                    this.setState(function() {
                        return {
                            currentSlideIndex: e
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, n = this.props.items.length;
                    if (0 === n)
                        return null;
                    var r = this.state.currentSlideIndex + 1 === n
                      , a = 0 === this.state.currentSlideIndex
                      , i = F()("mp-carousel", (e = {},
                    x()(e, "mp-carousel_first-slide", a),
                    x()(e, "mp-carousel_last-slide", r),
                    e));
                    return S.a.createElement("div", {
                        className: i
                    }, S.a.createElement(j.a, Object.assign({}, this.sliderProps, {
                        ref: function(e) {
                            e && (t.slider = e)
                        },
                        nextArrow: S.a.createElement(ge, {
                            direction: "next",
                            enter: this.mouseEnterNextHandler,
                            leave: this.mouseLeaveHandler
                        }),
                        prevArrow: S.a.createElement(ge, {
                            direction: "prev",
                            enter: this.mouseEnterPrevHandler,
                            leave: this.mouseLeaveHandler
                        }),
                        className: this.state.sliderClassName
                    }), this.props.items.map(function(e) {
                        return S.a.createElement(be, {
                            key: e,
                            item: e,
                            onClick: t.props.onItemClick
                        })
                    })))
                }
            }]),
            t
        }(P.Component)
          , _e = Object(M.observer)(Ee)
          , ke = function(e) {
            var t = e.className
              , n = e.children
              , r = e.maxVisibleLength
              , a = void 0 === r ? 150 : r
              , i = Object(P.useState)(String(n).length < a)
              , o = u()(i, 2)
              , s = o[0]
              , c = o[1];
            return S.a.createElement("p", {
                className: F()("text-show-more", x()({}, "text-show-more_full", s), t),
                onClick: function() {
                    c(!0)
                }
            }, n, !s && S.a.createElement("span", {
                className: "text-show-more__label"
            }, S.a.createElement(O.c, {
                id: "details",
                defaultMessage: "Подробнее"
            })))
        };
        function we(e, t) {
            return e(t = {
                exports: {}
            }, t.exports),
            t.exports
        }
        var xe = function(e, t) {
            if (null == e)
                return {};
            var n, r, a = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        };
        var Ce = function(e, t) {
            e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            e.__proto__ = t
        };
        var Ne, Pe = function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }, Se = we(function(e) {
            function t() {
                return e.exports = t = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ,
                t.apply(this, arguments)
            }
            e.exports = t
        }), Te = we(function(e, t) {
            function n(e) {
                return e && "object" === N()(e) && "default"in e ? e.default : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(xe)
              , a = n(Ce)
              , i = n(Pe)
              , o = n(Se)
              , s = n(S.a)
              , c = n(V.a)
              , l = void 0
              , u = void 0
              , p = []
              , d = function(e) {
                return "undefined" != typeof window && window.requestAnimationFrame(e)
            }
              , m = function(e) {
                return "undefined" != typeof window && window.cancelAnimationFrame(e)
            }
              , f = void 0
              , h = function() {
                return Date.now()
            }
              , y = void 0
              , v = void 0
              , g = function(e, t) {
                return u = {
                    fn: e,
                    transform: t
                }
            }
              , b = function(e) {
                return p = e
            }
              , E = function(e) {
                return l = e
            }
              , _ = function(e) {
                return f = e
            }
              , k = function(e) {
                return y = e
            }
              , w = function(e) {
                return v = e
            }
              , x = Object.freeze({
                get bugfixes() {
                    return l
                },
                get applyAnimatedValues() {
                    return u
                },
                get colorNames() {
                    return p
                },
                get requestFrame() {
                    return d
                },
                get cancelFrame() {
                    return m
                },
                get interpolation() {
                    return f
                },
                get now() {
                    return h
                },
                get defaultElement() {
                    return y
                },
                get createAnimatedStyle() {
                    return v
                },
                injectApplyAnimatedValues: g,
                injectColorNames: b,
                injectBugfixes: E,
                injectInterpolation: _,
                injectFrame: function(e, t) {
                    var n;
                    return d = (n = [e, t])[0],
                    m = n[1],
                    n
                },
                injectNow: function(e) {
                    return h = e
                },
                injectDefaultElement: k,
                injectCreateAnimatedStyle: w
            })
              , C = function() {
                function e() {}
                var t = e.prototype;
                return t.attach = function() {}
                ,
                t.detach = function() {}
                ,
                t.getValue = function() {}
                ,
                t.getAnimatedValue = function() {
                    return this.getValue()
                }
                ,
                t.addChild = function(e) {}
                ,
                t.removeChild = function(e) {}
                ,
                t.getChildren = function() {
                    return []
                }
                ,
                e
            }()
              , P = function(e) {
                return Object.keys(e).map(function(t) {
                    return e[t]
                })
            }
              , T = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(r)) || this).children = [],
                    t.getChildren = function() {
                        return t.children
                    }
                    ,
                    t.getPayload = function(e) {
                        return void 0 === e && (e = void 0),
                        void 0 !== e && t.payload ? t.payload[e] : t.payload || i(t)
                    }
                    ,
                    t
                }
                a(t, e);
                var n = t.prototype;
                return n.addChild = function(e) {
                    0 === this.children.length && this.attach(),
                    this.children.push(e)
                }
                ,
                n.removeChild = function(e) {
                    var t = this.children.indexOf(e);
                    this.children.splice(t, 1),
                    0 === this.children.length && this.detach()
                }
                ,
                t
            }(C)
              , F = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(r)) || this).payload = [],
                    t.getAnimatedValue = function() {
                        return t.getValue()
                    }
                    ,
                    t.attach = function() {
                        return t.payload.forEach(function(e) {
                            return e instanceof C && e.addChild(i(t))
                        })
                    }
                    ,
                    t.detach = function() {
                        return t.payload.forEach(function(e) {
                            return e instanceof C && e.removeChild(i(t))
                        })
                    }
                    ,
                    t
                }
                return a(t, e),
                t
            }(T)
              , M = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(r)) || this).payload = {},
                    t.getAnimatedValue = function() {
                        return t.getValue(!0)
                    }
                    ,
                    t.attach = function() {
                        return P(t.payload).forEach(function(e) {
                            return e instanceof C && e.addChild(i(t))
                        })
                    }
                    ,
                    t.detach = function() {
                        return P(t.payload).forEach(function(e) {
                            return e instanceof C && e.removeChild(i(t))
                        })
                    }
                    ,
                    t
                }
                return a(t, e),
                t.prototype.getValue = function(e) {
                    void 0 === e && (e = !1);
                    var t = {};
                    for (var n in this.payload) {
                        var r = this.payload[n];
                        (!e || r instanceof C) && (t[n] = r instanceof C ? r[e ? "getAnimatedValue" : "getValue"]() : r)
                    }
                    return t
                }
                ,
                t
            }(T)
              , O = function(e) {
                function t(t) {
                    var n;
                    return n = e.call(this) || this,
                    !(t = t || {}).transform || t.transform instanceof C || (t = u.transform(t)),
                    n.payload = t,
                    n
                }
                return a(t, e),
                t
            }(M)
              , I = {
                transparent: 0,
                aliceblue: 4042850303,
                antiquewhite: 4209760255,
                aqua: 16777215,
                aquamarine: 2147472639,
                azure: 4043309055,
                beige: 4126530815,
                bisque: 4293182719,
                black: 255,
                blanchedalmond: 4293643775,
                blue: 65535,
                blueviolet: 2318131967,
                brown: 2771004159,
                burlywood: 3736635391,
                burntsienna: 3934150143,
                cadetblue: 1604231423,
                chartreuse: 2147418367,
                chocolate: 3530104575,
                coral: 4286533887,
                cornflowerblue: 1687547391,
                cornsilk: 4294499583,
                crimson: 3692313855,
                cyan: 16777215,
                darkblue: 35839,
                darkcyan: 9145343,
                darkgoldenrod: 3095792639,
                darkgray: 2846468607,
                darkgreen: 6553855,
                darkgrey: 2846468607,
                darkkhaki: 3182914559,
                darkmagenta: 2332068863,
                darkolivegreen: 1433087999,
                darkorange: 4287365375,
                darkorchid: 2570243327,
                darkred: 2332033279,
                darksalmon: 3918953215,
                darkseagreen: 2411499519,
                darkslateblue: 1211993087,
                darkslategray: 793726975,
                darkslategrey: 793726975,
                darkturquoise: 13554175,
                darkviolet: 2483082239,
                deeppink: 4279538687,
                deepskyblue: 12582911,
                dimgray: 1768516095,
                dimgrey: 1768516095,
                dodgerblue: 512819199,
                firebrick: 2988581631,
                floralwhite: 4294635775,
                forestgreen: 579543807,
                fuchsia: 4278255615,
                gainsboro: 3705462015,
                ghostwhite: 4177068031,
                gold: 4292280575,
                goldenrod: 3668254975,
                gray: 2155905279,
                green: 8388863,
                greenyellow: 2919182335,
                grey: 2155905279,
                honeydew: 4043305215,
                hotpink: 4285117695,
                indianred: 3445382399,
                indigo: 1258324735,
                ivory: 4294963455,
                khaki: 4041641215,
                lavender: 3873897215,
                lavenderblush: 4293981695,
                lawngreen: 2096890111,
                lemonchiffon: 4294626815,
                lightblue: 2916673279,
                lightcoral: 4034953471,
                lightcyan: 3774873599,
                lightgoldenrodyellow: 4210742015,
                lightgray: 3553874943,
                lightgreen: 2431553791,
                lightgrey: 3553874943,
                lightpink: 4290167295,
                lightsalmon: 4288707327,
                lightseagreen: 548580095,
                lightskyblue: 2278488831,
                lightslategray: 2005441023,
                lightslategrey: 2005441023,
                lightsteelblue: 2965692159,
                lightyellow: 4294959359,
                lime: 16711935,
                limegreen: 852308735,
                linen: 4210091775,
                magenta: 4278255615,
                maroon: 2147483903,
                mediumaquamarine: 1724754687,
                mediumblue: 52735,
                mediumorchid: 3126187007,
                mediumpurple: 2473647103,
                mediumseagreen: 1018393087,
                mediumslateblue: 2070474495,
                mediumspringgreen: 16423679,
                mediumturquoise: 1221709055,
                mediumvioletred: 3340076543,
                midnightblue: 421097727,
                mintcream: 4127193855,
                mistyrose: 4293190143,
                moccasin: 4293178879,
                navajowhite: 4292783615,
                navy: 33023,
                oldlace: 4260751103,
                olive: 2155872511,
                olivedrab: 1804477439,
                orange: 4289003775,
                orangered: 4282712319,
                orchid: 3664828159,
                palegoldenrod: 4008225535,
                palegreen: 2566625535,
                paleturquoise: 2951671551,
                palevioletred: 3681588223,
                papayawhip: 4293907967,
                peachpuff: 4292524543,
                peru: 3448061951,
                pink: 4290825215,
                plum: 3718307327,
                powderblue: 2967529215,
                purple: 2147516671,
                rebeccapurple: 1714657791,
                red: 4278190335,
                rosybrown: 3163525119,
                royalblue: 1097458175,
                saddlebrown: 2336560127,
                salmon: 4202722047,
                sandybrown: 4104413439,
                seagreen: 780883967,
                seashell: 4294307583,
                sienna: 2689740287,
                silver: 3233857791,
                skyblue: 2278484991,
                slateblue: 1784335871,
                slategray: 1887473919,
                slategrey: 1887473919,
                snow: 4294638335,
                springgreen: 16744447,
                steelblue: 1182971135,
                tan: 3535047935,
                teal: 8421631,
                thistle: 3636451583,
                tomato: 4284696575,
                turquoise: 1088475391,
                violet: 4001558271,
                wheat: 4125012991,
                white: 4294967295,
                whitesmoke: 4126537215,
                yellow: 4294902015,
                yellowgreen: 2597139199
            }
              , B = function() {
                function e() {}
                return e.create = function(t, n, r) {
                    if ("function" == typeof t)
                        return t;
                    if (f && t.output && "string" == typeof t.output[0])
                        return f(t);
                    if (Array.isArray(t))
                        return e.create({
                            range: t,
                            output: n,
                            extrapolate: r || "extend"
                        });
                    var a = t.output
                      , i = t.range || [0, 1]
                      , o = t.easing || function(e) {
                        return e
                    }
                      , s = "extend"
                      , c = t.map;
                    void 0 !== t.extrapolateLeft ? s = t.extrapolateLeft : void 0 !== t.extrapolate && (s = t.extrapolate);
                    var l = "extend";
                    return void 0 !== t.extrapolateRight ? l = t.extrapolateRight : void 0 !== t.extrapolate && (l = t.extrapolate),
                    function(e) {
                        var t = function(e, t) {
                            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
                                ;
                            return n - 1
                        }(e, i);
                        return function(e, t, n, r, a, i, o, s, c) {
                            var l = c ? c(e) : e;
                            if (l < t) {
                                if ("identity" === o)
                                    return l;
                                "clamp" === o && (l = t)
                            }
                            if (l > n) {
                                if ("identity" === s)
                                    return l;
                                "clamp" === s && (l = n)
                            }
                            if (r === a)
                                return r;
                            if (t === n)
                                return e <= t ? r : a;
                            t === -1 / 0 ? l = -l : n === 1 / 0 ? l -= t : l = (l - t) / (n - t);
                            l = i(l),
                            r === -1 / 0 ? l = -l : a === 1 / 0 ? l += r : l = l * (a - r) + r;
                            return l
                        }(e, i[t], i[t + 1], a[t], a[t + 1], o, s, l, c)
                    }
                }
                ,
                e
            }();
            var A = "[-+]?\\d*\\.?\\d+"
              , j = A + "%";
            function R() {
                return "\\(\\s*(" + Array.prototype.slice.call(arguments).join(")\\s*,\\s*(") + ")\\s*\\)"
            }
            var z = new RegExp("rgb" + R(A, A, A))
              , H = new RegExp("rgba" + R(A, A, A, A))
              , L = new RegExp("hsl" + R(A, j, j))
              , U = new RegExp("hsla" + R(A, j, j, A))
              , D = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/
              , W = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/
              , q = /^#([0-9a-fA-F]{6})$/
              , G = /^#([0-9a-fA-F]{8})$/;
            function K(e, t, n) {
                return n < 0 && (n += 1),
                n > 1 && (n -= 1),
                n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            function J(e, t, n) {
                var r = n < .5 ? n * (1 + t) : n + t - n * t
                  , a = 2 * n - r
                  , i = K(a, r, e + 1 / 3)
                  , o = K(a, r, e)
                  , s = K(a, r, e - 1 / 3);
                return Math.round(255 * i) << 24 | Math.round(255 * o) << 16 | Math.round(255 * s) << 8
            }
            function Y(e) {
                var t = parseInt(e, 10);
                return t < 0 ? 0 : t > 255 ? 255 : t
            }
            function X(e) {
                return (parseFloat(e) % 360 + 360) % 360 / 360
            }
            function Z(e) {
                var t = parseFloat(e);
                return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
            }
            function $(e) {
                var t = parseFloat(e);
                return t < 0 ? 0 : t > 100 ? 1 : t / 100
            }
            function Q(e) {
                var t, n, r = "number" == typeof (t = e) ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (n = q.exec(t)) ? parseInt(n[1] + "ff", 16) >>> 0 : I.hasOwnProperty(t) ? I[t] : (n = z.exec(t)) ? (Y(n[1]) << 24 | Y(n[2]) << 16 | Y(n[3]) << 8 | 255) >>> 0 : (n = H.exec(t)) ? (Y(n[1]) << 24 | Y(n[2]) << 16 | Y(n[3]) << 8 | Z(n[4])) >>> 0 : (n = D.exec(t)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + "ff", 16) >>> 0 : (n = G.exec(t)) ? parseInt(n[1], 16) >>> 0 : (n = W.exec(t)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4], 16) >>> 0 : (n = L.exec(t)) ? (255 | J(X(n[1]), $(n[2]), $(n[3]))) >>> 0 : (n = U.exec(t)) ? (J(X(n[1]), $(n[2]), $(n[3])) | Z(n[4])) >>> 0 : null;
                return null === r ? e : "rgba(" + ((4278190080 & (r = r || 0)) >>> 24) + ", " + ((16711680 & r) >>> 16) + ", " + ((65280 & r) >>> 8) + ", " + (255 & r) / 255 + ")"
            }
            var ee = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
              , te = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi
              , ne = new RegExp("(" + Object.keys(I).join("|") + ")","g");
            var re = function(e) {
                function t(n, r, a) {
                    var o;
                    return (o = e.call(this) || this).getValue = function() {
                        var e;
                        return (e = o).calc.apply(e, o.payload.map(function(e) {
                            return e.getValue()
                        }))
                    }
                    ,
                    o.updateConfig = function(e, t) {
                        return o.calc = B.create(e, t)
                    }
                    ,
                    o.interpolate = function(e, n) {
                        return new t(i(o),e,n)
                    }
                    ,
                    o.payload = n instanceof F && !n.updateConfig ? n.payload : Array.isArray(n) ? n : [n],
                    o.calc = B.create(r, a),
                    o
                }
                return a(t, e),
                t
            }(F);
            var ae = function(e) {
                function t(t) {
                    var n;
                    return (n = e.call(this) || this).setValue = function(e, t) {
                        void 0 === t && (t = !0),
                        n.value = e,
                        t && n.flush()
                    }
                    ,
                    n.getValue = function() {
                        return n.value
                    }
                    ,
                    n.updateStyles = function() {
                        return function e(t, n) {
                            "function" == typeof t.update ? n.add(t) : t.getChildren().forEach(function(t) {
                                return e(t, n)
                            })
                        }(i(n), n.animatedStyles)
                    }
                    ,
                    n.updateValue = function(e) {
                        return n.flush(n.value = e)
                    }
                    ,
                    n.interpolate = function(e, t) {
                        return new re(i(n),e,t)
                    }
                    ,
                    n.value = t,
                    n.animatedStyles = new Set,
                    n.done = !1,
                    n.startPosition = t,
                    n.lastPosition = t,
                    n.lastVelocity = void 0,
                    n.lastTime = void 0,
                    n.controller = void 0,
                    n
                }
                a(t, e);
                var n = t.prototype;
                return n.flush = function() {
                    0 === this.animatedStyles.size && this.updateStyles(),
                    this.animatedStyles.forEach(function(e) {
                        return e.update()
                    })
                }
                ,
                n.prepare = function(e) {
                    void 0 === this.controller && (this.controller = e),
                    this.controller === e && (this.startPosition = this.value,
                    this.lastPosition = this.value,
                    this.lastVelocity = e.isActive ? this.lastVelocity : void 0,
                    this.lastTime = e.isActive ? this.lastTime : void 0,
                    this.done = !1,
                    this.animatedStyles.clear())
                }
                ,
                t
            }(T)
              , ie = function(e) {
                function t(t) {
                    var n;
                    return (n = e.call(this) || this).setValue = function(e, t) {
                        void 0 === t && (t = !0),
                        Array.isArray(e) ? e.length === n.payload.length && e.forEach(function(e, r) {
                            return n.payload[r].setValue(e, t)
                        }) : n.payload.forEach(function(r, a) {
                            return n.payload[a].setValue(e, t)
                        })
                    }
                    ,
                    n.getValue = function() {
                        return n.payload.map(function(e) {
                            return e.getValue()
                        })
                    }
                    ,
                    n.interpolate = function(e, t) {
                        return new re(i(n),e,t)
                    }
                    ,
                    n.payload = t.map(function(e) {
                        return new ae(e)
                    }),
                    n
                }
                return a(t, e),
                t
            }(F);
            function oe(e, t) {
                return void 0 === e || null === e ? t : e
            }
            function se(e) {
                return void 0 !== e ? Array.isArray(e) ? e : [e] : []
            }
            function ce(e, t) {
                if (N()(e) !== N()(t))
                    return !1;
                if ("string" == typeof e || "number" == typeof e)
                    return e === t;
                var n;
                for (n in e)
                    if (!(n in t))
                        return !1;
                for (n in t)
                    if (e[n] !== t[n])
                        return !1;
                return void 0 !== n || e === t
            }
            function le(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                return "function" == typeof e ? e.apply(void 0, n) : e
            }
            function ue(e) {
                return Object.keys(e).map(function(t) {
                    return e[t]
                })
            }
            function pe(e) {
                var t = function(e) {
                    return e.to,
                    e.from,
                    e.config,
                    e.native,
                    e.onStart,
                    e.onRest,
                    e.onFrame,
                    e.children,
                    e.reset,
                    e.reverse,
                    e.force,
                    e.immediate,
                    e.impl,
                    e.inject,
                    e.delay,
                    e.attach,
                    e.destroyed,
                    e.interpolateTo,
                    e.autoStart,
                    e.ref,
                    r(e, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"])
                }(e)
                  , n = Object.keys(e).reduce(function(n, r) {
                    var a;
                    return void 0 !== t[r] ? n : o({}, n, ((a = {})[r] = e[r],
                    a))
                }, {});
                return o({
                    to: t
                }, n)
            }
            function de(e, t) {
                var n, r = t[0], a = t[1];
                return o({}, e, ((n = {})[r] = new (Array.isArray(a) ? ie : ae)(a),
                n))
            }
            function me(e) {
                var t = e.from
                  , n = e.to
                  , r = e.native
                  , a = Object.entries(o({}, t, n));
                return r ? a.reduce(de, {}) : o({}, t, n)
            }
            function fe(e, t) {
                return t && ("function" == typeof t ? t(e) : "object" === N()(t) && (t.current = e)),
                e
            }
            var he = function(e) {
                return "auto" === e
            }
              , ye = function(e, t) {
                return function(n, r) {
                    var a, i = r[0], s = r[1];
                    return o({}, n, ((a = {})[i] = "auto" === s ? ~i.indexOf("height") ? t : e : s,
                    a))
                }
            };
            var ve = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , ge = ["Webkit", "Ms", "Moz", "O"];
            function be(e, t, n) {
                return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || ve.hasOwnProperty(e) && ve[e] ? ("" + t).trim() : t + "px"
            }
            ve = Object.keys(ve).reduce(function(e, t) {
                return ge.forEach(function(n) {
                    return e[function(e, t) {
                        return e + t.charAt(0).toUpperCase() + t.substring(1)
                    }(n, t)] = e[t]
                }),
                e
            }, ve);
            var Ee = {};
            w(function(e) {
                return new O(e)
            }),
            k("div"),
            _(function(e) {
                var t = e.output.map(function(e) {
                    return e.replace(te, Q)
                }).map(function(e) {
                    return e.replace(ne, Q)
                })
                  , n = t[0].match(ee).map(function() {
                    return []
                });
                t.forEach(function(e) {
                    e.match(ee).forEach(function(e, t) {
                        return n[t].push(+e)
                    })
                });
                var r = t[0].match(ee).map(function(t, r) {
                    return B.create(o({}, e, {
                        output: n[r]
                    }))
                });
                return function(e) {
                    var n = 0;
                    return t[0].replace(ee, function() {
                        return r[n++](e)
                    }).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function(e, t, n, r, a) {
                        return "rgba(" + Math.round(t) + ", " + Math.round(n) + ", " + Math.round(r) + ", " + a + ")"
                    })
                }
            }),
            b(I),
            E(function(e, t) {
                var n = e.from
                  , r = e.to
                  , a = e.children;
                if (ue(r).some(he) || ue(n).some(he)) {
                    var i = a(me(e));
                    if (i) {
                        Array.isArray(i) && (i = {
                            type: "div",
                            props: {
                                children: i
                            }
                        });
                        var l = i.props.style;
                        return s.createElement(i.type, o({
                            key: i.key ? i.key : void 0
                        }, i.props, {
                            style: o({}, l, {
                                position: "absolute",
                                visibility: "hidden"
                            }),
                            ref: function(a) {
                                if (a) {
                                    var i, s, l = c.findDOMNode(a), u = getComputedStyle(l);
                                    if ("border-box" === u.boxSizing)
                                        i = l.offsetWidth,
                                        s = l.offsetHeight;
                                    else {
                                        var p = parseFloat(u.paddingLeft || 0) + parseFloat(u.paddingRight || 0)
                                          , d = parseFloat(u.paddingTop || 0) + parseFloat(u.paddingBottom || 0)
                                          , m = parseFloat(u.borderLeftWidth || 0) + parseFloat(u.borderRightWidth || 0)
                                          , f = parseFloat(u.borderTopWidth || 0) + parseFloat(u.borderBottomWidth || 0);
                                        i = l.offsetWidth - p - m,
                                        s = l.offsetHeight - d - f
                                    }
                                    var h = ye(i, s);
                                    t(o({}, e, {
                                        from: Object.entries(n).reduce(h, n),
                                        to: Object.entries(r).reduce(h, r)
                                    }))
                                }
                            }
                        }))
                    }
                }
            }),
            g(function(e, t) {
                if (!e.nodeType || void 0 === e.setAttribute)
                    return !1;
                var n = t.style
                  , a = t.children
                  , i = t.scrollTop
                  , o = t.scrollLeft
                  , s = r(t, ["style", "children", "scrollTop", "scrollLeft"]);
                for (var c in void 0 !== i && (e.scrollTop = i),
                void 0 !== o && (e.scrollLeft = o),
                void 0 !== a && (e.textContent = a),
                n)
                    if (n.hasOwnProperty(c)) {
                        var l = 0 === c.indexOf("--")
                          , u = be(c, n[c], l);
                        "float" === c && (c = "cssFloat"),
                        l ? e.style.setProperty(c, u) : e.style[c] = u
                    }
                for (var p in s) {
                    var d = Ee[p] || (Ee[p] = p.replace(/([A-Z])/g, function(e) {
                        return "-" + e.toLowerCase()
                    }));
                    void 0 !== e.getAttribute(d) && e.setAttribute(d, s[p])
                }
            }, function(e) {
                return e
            });
            var _e = !1
              , ke = new Set
              , we = function e() {
                var t = h()
                  , n = ke
                  , r = Array.isArray(n)
                  , a = 0;
                for (n = r ? n : n[Symbol.iterator](); ; ) {
                    var i;
                    if (r) {
                        if (a >= n.length)
                            break;
                        i = n[a++]
                    } else {
                        if ((a = n.next()).done)
                            break;
                        i = a.value
                    }
                    for (var o = i, s = !0, c = !0, l = 0; l < o.configs.length; l++) {
                        for (var u = o.configs[l], p = void 0, m = void 0, f = 0; f < u.animatedValues.length; f++) {
                            var y = u.animatedValues[f];
                            if (!y.done) {
                                var v = u.fromValues[f]
                                  , g = u.toValues[f]
                                  , b = y.lastPosition
                                  , E = g instanceof C
                                  , _ = Array.isArray(u.initialVelocity) ? u.initialVelocity[f] : u.initialVelocity;
                                if (E && (g = g.getValue()),
                                u.immediate || !E && !u.decay && v === g)
                                    y.updateValue(g),
                                    y.done = !0;
                                else if (u.delay && t - o.startTime < u.delay)
                                    s = !1;
                                else if (c = !1,
                                "string" != typeof v && "string" != typeof g) {
                                    if (void 0 !== u.duration)
                                        b = v + u.easing((t - o.startTime - u.delay) / u.duration) * (g - v),
                                        p = t >= o.startTime + u.delay + u.duration;
                                    else if (u.decay)
                                        b = v + _ / (1 - .998) * (1 - Math.exp(-(1 - .998) * (t - o.startTime))),
                                        (p = Math.abs(y.lastPosition - b) < .1) && (g = b);
                                    else {
                                        m = void 0 !== y.lastTime ? y.lastTime : t,
                                        _ = void 0 !== y.lastVelocity ? y.lastVelocity : u.initialVelocity,
                                        t > m + 64 && (m = t);
                                        for (var k = Math.floor(t - m), w = 0; w < k; ++w) {
                                            b += 1 * (_ += 1 * ((-u.tension * (b - g) + -u.friction * _) / u.mass) / 1e3) / 1e3
                                        }
                                        var x = !(!u.clamp || 0 === u.tension) && (v < g ? b > g : b < g)
                                          , N = Math.abs(_) <= u.precision
                                          , P = 0 === u.tension || Math.abs(g - b) <= u.precision;
                                        p = x || N && P,
                                        y.lastVelocity = _,
                                        y.lastTime = t
                                    }
                                    E && !u.toValues[f].done && (p = !1),
                                    p ? (y.value !== g && (b = g),
                                    y.done = !0) : s = !1,
                                    y.updateValue(b),
                                    y.lastPosition = b
                                } else
                                    y.updateValue(g),
                                    y.done = !0
                            }
                        }
                        !o.props.onFrame && o.props.native || (o.animatedProps[u.name] = u.interpolation.getValue())
                    }
                    !o.props.onFrame && o.props.native || (!o.props.native && o.onUpdate && o.onUpdate(),
                    o.props.onFrame && o.props.onFrame(o.animatedProps)),
                    s && (ke.delete(o),
                    o.debouncedOnEnd({
                        finished: !0,
                        noChange: c
                    }))
                }
                ke.size ? d(e) : _e = !1
            }
              , Ne = function(e) {
                ke.has(e) && ke.delete(e)
            }
              , Te = function() {
                function e(e, t) {
                    var n = this;
                    void 0 === t && (t = {
                        native: !0,
                        interpolateTo: !0,
                        autoStart: !0
                    }),
                    this.getValues = function() {
                        return n.props.native ? n.interpolations : n.animatedProps
                    }
                    ,
                    this.dependents = new Set,
                    this.isActive = !1,
                    this.hasChanged = !1,
                    this.props = {},
                    this.merged = {},
                    this.animations = {},
                    this.interpolations = {},
                    this.animatedProps = {},
                    this.configs = [],
                    this.frame = void 0,
                    this.startTime = void 0,
                    this.lastTime = void 0,
                    this.update(o({}, e, t))
                }
                var t = e.prototype;
                return t.update = function(e) {
                    var t = this;
                    this.props = o({}, this.props, e);
                    var n = this.props.interpolateTo ? pe(this.props) : this.props
                      , r = n.from
                      , a = void 0 === r ? {} : r
                      , i = n.to
                      , s = void 0 === i ? {} : i
                      , c = n.config
                      , l = void 0 === c ? {} : c
                      , u = n.delay
                      , d = void 0 === u ? 0 : u
                      , m = n.reverse
                      , f = n.attach
                      , h = n.reset
                      , y = n.immediate
                      , v = n.autoStart
                      , g = n.ref;
                    if (m) {
                        var b = [s, a];
                        a = b[0],
                        s = b[1]
                    }
                    this.hasChanged = !1;
                    var E = f && f(this)
                      , _ = h ? {} : this.merged;
                    if (this.merged = o({}, a, _, s),
                    this.animations = Object.entries(this.merged).reduce(function(e, n, r) {
                        var i, s, c, u = n[0], m = n[1], f = !h && e[u] || {}, v = "number" == typeof m, g = "string" == typeof m && !m.startsWith("#") && !/\d/.test(m) && !p[m], b = !v && !g && Array.isArray(m), _ = void 0 !== a[u] ? a[u] : m, k = v || b ? m : g ? m : 1, w = le(l, u);
                        if (E && (k = E.animations[u].parent),
                        void 0 === w.decay && ce(f.changes, m))
                            return e;
                        if (t.hasChanged = !0,
                        v || g)
                            s = c = f.parent || new ae(_);
                        else if (b)
                            s = c = f.parent || new ie(_);
                        else {
                            var x = f.interpolation && f.interpolation.calc(f.parent.value);
                            f.parent ? (s = f.parent).setValue(0, !1) : s = new ae(0);
                            var C = {
                                output: [void 0 !== x ? x : _, m]
                            };
                            f.interpolation ? (c = f.interpolation,
                            f.interpolation.updateConfig(C)) : c = s.interpolate(C)
                        }
                        le(y, u) && s.setValue(m, !1);
                        var N = se(s.getPayload());
                        return N.forEach(function(e) {
                            return e.prepare(t)
                        }),
                        o({}, e, ((i = {})[u] = o({}, f, {
                            name: u,
                            parent: s,
                            interpolation: c,
                            animatedValues: N,
                            changes: m,
                            fromValues: se(s.getValue()),
                            toValues: se(E ? k.getPayload() : k),
                            immediate: le(y, u),
                            delay: oe(w.delay, d || 0),
                            initialVelocity: oe(w.velocity, 0),
                            clamp: oe(w.clamp, !1),
                            precision: oe(w.precision, .01),
                            tension: oe(w.tension, 170),
                            friction: oe(w.friction, 26),
                            mass: oe(w.mass, 1),
                            duration: w.duration,
                            easing: oe(w.easing, function(e) {
                                return e
                            }),
                            decay: w.decay
                        }),
                        i))
                    }, this.animations),
                    this.hasChanged)
                        for (var k in this.configs = ue(this.animations),
                        this.animatedProps = {},
                        this.interpolations = {},
                        this.animations)
                            this.interpolations[k] = this.animations[k].interpolation,
                            this.animatedProps[k] = this.animations[k].interpolation.getValue();
                    for (var w = arguments.length, x = new Array(w > 1 ? w - 1 : 0), C = 1; C < w; C++)
                        x[C - 1] = arguments[C];
                    g || !v && !x.length || this.start.apply(this, x);
                    var N = x[0]
                      , P = x[1];
                    return this.onEnd = "function" == typeof N && N,
                    this.onUpdate = P,
                    this.getValues()
                }
                ,
                t.start = function(e, t) {
                    var n, r = this;
                    return this.startTime = h(),
                    this.isActive && this.stop(),
                    this.isActive = !0,
                    this.onEnd = "function" == typeof e && e,
                    this.onUpdate = t,
                    this.props.onStart && this.props.onStart(),
                    n = this,
                    ke.has(n) || (ke.add(n),
                    _e || d(we),
                    _e = !0),
                    new Promise(function(e) {
                        return r.resolve = e
                    }
                    )
                }
                ,
                t.stop = function(e) {
                    void 0 === e && (e = !1),
                    e && ue(this.animations).forEach(function(e) {
                        return e.changes = void 0
                    }),
                    this.debouncedOnEnd({
                        finished: e
                    })
                }
                ,
                t.destroy = function() {
                    Ne(this),
                    this.props = {},
                    this.merged = {},
                    this.animations = {},
                    this.interpolations = {},
                    this.animatedProps = {},
                    this.configs = []
                }
                ,
                t.debouncedOnEnd = function(e) {
                    Ne(this),
                    this.isActive = !1;
                    var t = this.onEnd;
                    this.onEnd = null,
                    t && t(e),
                    this.resolve && this.resolve(),
                    this.resolve = null
                }
                ,
                e
            }()
              , Fe = function(e) {
                function t(t, n) {
                    var r;
                    return r = e.call(this) || this,
                    t.style && (t = o({}, t, {
                        style: v(t.style)
                    })),
                    r.payload = t,
                    r.update = n,
                    r.attach(),
                    r
                }
                return a(t, e),
                t
            }(M);
            function Me(e) {
                var t = function(t) {
                    function n(e) {
                        var n;
                        return (n = t.call(this) || this).callback = function() {
                            n.node && (!1 === u.fn(n.node, n.propsAnimated.getAnimatedValue(), i(n)) && n.forceUpdate())
                        }
                        ,
                        n.attachProps(e),
                        n
                    }
                    a(n, t);
                    var c = n.prototype;
                    return c.componentWillUnmount = function() {
                        this.propsAnimated && this.propsAnimated.detach()
                    }
                    ,
                    c.setNativeProps = function(e) {
                        !1 === u.fn(this.node, e, this) && this.forceUpdate()
                    }
                    ,
                    c.attachProps = function(e) {
                        e.forwardRef;
                        var t = r(e, ["forwardRef"])
                          , n = this.propsAnimated;
                        this.propsAnimated = new Fe(t,this.callback),
                        n && n.detach()
                    }
                    ,
                    c.shouldComponentUpdate = function(e) {
                        var t = e.style
                          , n = r(e, ["style"])
                          , a = this.props
                          , i = a.style;
                        return (!ce(r(a, ["style"]), n) || !ce(i, t)) && (this.attachProps(e),
                        !0)
                    }
                    ,
                    c.render = function() {
                        var t = this
                          , n = this.propsAnimated.getValue()
                          , a = (n.scrollTop,
                        n.scrollLeft,
                        r(n, ["scrollTop", "scrollLeft"]));
                        return s.createElement(e, o({}, a, {
                            ref: function(e) {
                                return t.node = fe(e, t.props.forwardRef)
                            }
                        }))
                    }
                    ,
                    n
                }(s.Component);
                return s.forwardRef(function(e, n) {
                    return s.createElement(t, o({}, e, {
                        forwardRef: n
                    }))
                })
            }
            var Oe = {
                default: {
                    tension: 170,
                    friction: 26
                },
                gentle: {
                    tension: 120,
                    friction: 14
                },
                wobbly: {
                    tension: 180,
                    friction: 12
                },
                stiff: {
                    tension: 210,
                    friction: 20
                },
                slow: {
                    tension: 280,
                    friction: 60
                },
                molasses: {
                    tension: 280,
                    friction: 120
                }
            }
              , Ie = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                        lastProps: {
                            from: {},
                            to: {}
                        },
                        propsChanged: !1,
                        internal: !1
                    },
                    t.controller = new Te(null,null),
                    t.didUpdate = !1,
                    t.didInject = !1,
                    t.finished = !0,
                    t.start = function() {
                        t.finished = !1;
                        var e = t.mounted;
                        t.controller.start(function(n) {
                            return t.finish(o({}, n, {
                                wasMounted: e
                            }))
                        }, t.update)
                    }
                    ,
                    t.stop = function() {
                        return t.controller.stop(!0)
                    }
                    ,
                    t.update = function() {
                        return t.mounted && t.setState({
                            internal: !0
                        })
                    }
                    ,
                    t.finish = function(e) {
                        var n = e.finished
                          , r = e.noChange
                          , a = e.wasMounted;
                        t.finished = !0,
                        t.mounted && n && (!t.props.onRest || !a && r || t.props.onRest(t.controller.merged),
                        t.mounted && t.didInject && (t.afterInject = me(t.props),
                        t.setState({
                            internal: !0
                        })),
                        t.mounted && (t.didInject || t.props.after) && t.setState({
                            internal: !0
                        }),
                        t.didInject = !1)
                    }
                    ,
                    t
                }
                a(t, e);
                var n = t.prototype;
                return n.componentDidMount = function() {
                    this.componentDidUpdate(),
                    this.mounted = !0
                }
                ,
                n.componentWillUnmount = function() {
                    this.mounted = !1,
                    this.stop()
                }
                ,
                t.getDerivedStateFromProps = function(e, t) {
                    var n = t.internal
                      , r = t.lastProps
                      , a = e.from
                      , i = e.to
                      , o = e.reset
                      , s = e.force;
                    return {
                        propsChanged: !ce(i, r.to) || !ce(a, r.from) || o && !n || s && !n,
                        lastProps: e,
                        internal: !1
                    }
                }
                ,
                n.render = function() {
                    var e = this
                      , t = this.props.children
                      , n = this.state.propsChanged;
                    if (this.props.inject && n && !this.injectProps) {
                        var r = this.props.inject(this.props, function(t) {
                            e.injectProps = t,
                            e.setState({
                                internal: !0
                            })
                        });
                        if (r)
                            return r
                    }
                    (this.injectProps || n) && (this.didInject = !1,
                    this.injectProps ? (this.controller.update(this.injectProps),
                    this.didInject = !0) : n && this.controller.update(this.props),
                    this.didUpdate = !0,
                    this.afterInject = void 0,
                    this.injectProps = void 0);
                    var a = o({}, this.controller.getValues(), this.afterInject);
                    return this.finished && (a = o({}, a, this.props.after)),
                    Object.keys(a).length ? t(a) : null
                }
                ,
                n.componentDidUpdate = function() {
                    this.didUpdate && this.start(),
                    this.didUpdate = !1
                }
                ,
                t
            }(s.Component);
            Ie.defaultProps = {
                from: {},
                to: {},
                config: Oe.default,
                native: !1,
                immediate: !1,
                reset: !1,
                force: !1,
                inject: l
            };
            var Be = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(r)) || this).first = !0,
                    t.instances = new Set,
                    t.hook = function(e, n, r, a) {
                        return t.instances.add(e),
                        (a ? n === r - 1 : 0 === n) ? void 0 : Array.from(t.instances)[a ? n + 1 : n - 1]
                    }
                    ,
                    t
                }
                a(t, e);
                var n = t.prototype;
                return n.render = function() {
                    var e = this
                      , t = this.props
                      , n = t.items
                      , a = t.children
                      , i = t.from
                      , c = void 0 === i ? {} : i
                      , l = t.initial
                      , u = t.reverse
                      , p = t.keys
                      , d = t.delay
                      , m = t.onRest
                      , f = r(t, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"])
                      , h = se(n);
                    return se(h).map(function(t, n) {
                        return s.createElement(Ie, o({
                            onRest: 0 === n ? m : null,
                            key: "function" == typeof p ? p(t) : se(p)[n],
                            from: e.first && void 0 !== l ? l || {} : c
                        }, f, {
                            delay: 0 === n && d || void 0,
                            attach: function(t) {
                                return e.hook(t, n, h.length, u)
                            },
                            children: function(e) {
                                var r = a(t, n);
                                return r ? r(e) : null
                            }
                        }))
                    })
                }
                ,
                n.componentDidUpdate = function(e) {
                    this.first = !1,
                    e.items !== this.props.items && this.instances.clear()
                }
                ,
                t
            }(s.PureComponent);
            Be.defaultProps = {
                keys: function(e) {
                    return e
                }
            };
            var Ae = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(r)) || this).guid = 0,
                    t.state = {
                        props: {},
                        resolve: function() {
                            return null
                        },
                        last: !0,
                        index: 0
                    },
                    t.next = function(e, n, r) {
                        return void 0 === n && (n = !0),
                        void 0 === r && (r = 0),
                        t.running = !0,
                        new Promise(function(a) {
                            t.mounted && t.setState(function(t) {
                                return {
                                    props: e,
                                    resolve: a,
                                    last: n,
                                    index: r
                                }
                            }, function() {
                                return t.running = !1
                            })
                        }
                        )
                    }
                    ,
                    t
                }
                a(t, e);
                var n = t.prototype;
                return n.componentDidMount = function() {
                    this.mounted = !0,
                    this.componentDidUpdate({})
                }
                ,
                n.componentWillUnmount = function() {
                    this.mounted = !1
                }
                ,
                n.componentDidUpdate = function(e) {
                    var t = this
                      , n = this.props
                      , r = n.states
                      , a = n.filter
                      , i = n.state;
                    (e.state !== this.props.state || this.props.reset && !this.running || !ce(r[i], e.states[e.state])) && r && i && r[i] && function() {
                        var e = ++t.guid
                          , n = r[i];
                        if (n)
                            if (Array.isArray(n))
                                for (var o = Promise.resolve(), s = function(r) {
                                    var i = r
                                      , s = n[i]
                                      , c = i === n.length - 1;
                                    o = o.then(function() {
                                        return e === t.guid && t.next(a(s), c, i)
                                    })
                                }, c = 0; c < n.length; c++)
                                    s(c);
                            else if ("function" == typeof n) {
                                var l = 0;
                                n(function(n, r) {
                                    return void 0 === r && (r = !1),
                                    e === t.guid && t.next(a(n), r, l++)
                                }, function() {
                                    return d(function() {
                                        return t.instance && t.instance.stop()
                                    })
                                }, t.props)
                            } else
                                t.next(a(r[i]))
                    }()
                }
                ,
                n.render = function() {
                    var e = this
                      , t = this.state
                      , n = t.props
                      , a = t.resolve
                      , i = t.last
                      , c = t.index;
                    if (!n || 0 === Object.keys(n).length)
                        return null;
                    var l = this.props
                      , u = (l.state,
                    l.filter,
                    l.states,
                    l.config)
                      , p = l.primitive
                      , d = l.onRest
                      , m = l.forwardRef
                      , f = r(l, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]);
                    return Array.isArray(u) && (u = u[c]),
                    s.createElement(p, o({
                        ref: function(t) {
                            return e.instance = fe(t, m)
                        },
                        config: u
                    }, f, n, {
                        onRest: function(e) {
                            a(e),
                            d && i && d(e)
                        }
                    }))
                }
                ,
                t
            }(s.PureComponent);
            Ae.defaultProps = {
                state: "__default"
            };
            var je = s.forwardRef(function(e, t) {
                return s.createElement(Ae, o({}, e, {
                    forwardRef: t
                }))
            });
            je.create = function(e) {
                return function(t, n) {
                    var r;
                    return void 0 === n && (n = function(e) {
                        return e
                    }
                    ),
                    ("function" == typeof t || Array.isArray(t)) && ((r = {}).__default = t,
                    t = r),
                    function(r) {
                        return s.createElement(Ae, o({
                            primitive: e,
                            states: t,
                            filter: n
                        }, r))
                    }
                }
            }
            ,
            je.Spring = function(e) {
                return je.create(Ie)(e, pe)
            }
            ,
            je.Trail = function(e) {
                return je.create(Be)(e, pe)
            }
            ;
            var Re = 0
              , Ve = function(e) {
                var t = e.items
                  , n = e.keys
                  , a = r(e, ["items", "keys"]);
                return t = se(void 0 !== t ? t : null),
                n = "function" == typeof n ? t.map(n) : se(n),
                o({
                    items: t,
                    keys: n.map(function(e) {
                        return String(e)
                    })
                }, a)
            }
              , ze = function(e) {
                a(n, e);
                var t = n.prototype;
                function n(t) {
                    var n;
                    return (n = e.call(this, t) || this).destroyItem = function(e, t, r) {
                        return function(a) {
                            var i = n.props
                              , o = i.onRest
                              , s = i.onDestroyed;
                            n.mounted && (s && s(e),
                            n.setState(function(e) {
                                return {
                                    deleted: e.deleted.filter(function(e) {
                                        return e.key !== t
                                    })
                                }
                            }),
                            o && o(e, r, a))
                        }
                    }
                    ,
                    n.state = {
                        first: !0,
                        transitions: [],
                        current: {},
                        deleted: [],
                        prevProps: t
                    },
                    n
                }
                return t.componentDidMount = function() {
                    this.mounted = !0
                }
                ,
                t.componentWillUnmount = function() {
                    this.mounted = !1
                }
                ,
                n.getDerivedStateFromProps = function(e, t) {
                    var n = t.first
                      , a = t.prevProps
                      , i = r(t, ["first", "prevProps"])
                      , s = Ve(e)
                      , c = s.items
                      , l = s.keys
                      , u = s.initial
                      , p = s.from
                      , d = s.enter
                      , m = s.leave
                      , f = s.update
                      , h = s.trail
                      , y = void 0 === h ? 0 : h
                      , v = s.unique
                      , g = s.config
                      , b = Ve(a)
                      , E = b.keys
                      , _ = b.items
                      , k = o({}, i.current)
                      , w = [].concat(i.deleted)
                      , x = Object.keys(k)
                      , C = new Set(x)
                      , N = new Set(l)
                      , P = l.filter(function(e) {
                        return !C.has(e)
                    })
                      , S = i.transitions.filter(function(e) {
                        return !e.destroyed && !N.has(e.originalKey)
                    }).map(function(e) {
                        return e.originalKey
                    })
                      , T = l.filter(function(e) {
                        return C.has(e)
                    })
                      , F = 0;
                    P.forEach(function(e) {
                        v && w.find(function(t) {
                            return t.originalKey === e
                        }) && (w = w.filter(function(t) {
                            return t.originalKey !== e
                        }));
                        var t = l.indexOf(e)
                          , r = c[t];
                        k[e] = {
                            state: "enter",
                            originalKey: e,
                            key: v ? String(e) : Re++,
                            item: r,
                            trail: F += y,
                            config: le(g, r, "enter"),
                            from: le(n && void 0 !== u ? u || {} : p, r),
                            to: le(d, r)
                        }
                    }),
                    S.forEach(function(e) {
                        var t = E.indexOf(e)
                          , n = _[t];
                        w.push(o({}, k[e], {
                            state: "leave",
                            destroyed: !0,
                            left: E[Math.max(0, t - 1)],
                            right: E[Math.min(E.length, t + 1)],
                            trail: F += y,
                            config: le(g, n, "leave"),
                            to: le(m, n)
                        })),
                        delete k[e]
                    }),
                    T.forEach(function(e) {
                        var t = l.indexOf(e)
                          , n = c[t];
                        k[e] = o({}, k[e], {
                            item: n,
                            state: "update",
                            trail: F += y,
                            config: le(g, n, "update"),
                            to: le(f, n)
                        })
                    });
                    var M = l.map(function(e) {
                        return k[e]
                    });
                    return w.forEach(function(e) {
                        var t, n = e.left, a = e.right, i = r(e, ["left", "right"]);
                        -1 !== (t = M.findIndex(function(e) {
                            return e.originalKey === n
                        })) && (t += 1),
                        -1 === t && (t = M.findIndex(function(e) {
                            return e.originalKey === a
                        })),
                        -1 === t && (t = w.findIndex(function(e) {
                            return e.originalKey === n
                        })),
                        -1 === t && (t = w.findIndex(function(e) {
                            return e.originalKey === a
                        })),
                        t = Math.max(0, t),
                        M = [].concat(M.slice(0, t), [i], M.slice(t))
                    }),
                    {
                        first: n && 0 === P.length,
                        transitions: M,
                        current: k,
                        deleted: w,
                        prevProps: e
                    }
                }
                ,
                t.render = function() {
                    var e = this
                      , t = this.props
                      , n = (t.initial,
                    t.from,
                    t.enter,
                    t.leave,
                    t.update,
                    t.onDestroyed,
                    t.keys,
                    t.items,
                    t.onFrame)
                      , a = t.onRest
                      , i = t.onStart
                      , c = (t.trail,
                    t.config,
                    t.children)
                      , l = (t.unique,
                    t.reset)
                      , u = r(t, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);
                    return this.state.transitions.map(function(t, r) {
                        var p, d = t.state, m = t.key, f = t.item, h = t.from, y = t.to, v = t.trail, g = t.config, b = t.destroyed;
                        return s.createElement(je, o({
                            reset: l && "enter" === d,
                            primitive: Ie,
                            state: d,
                            filter: pe,
                            states: (p = {},
                            p[d] = y,
                            p),
                            key: m,
                            onRest: b ? e.destroyItem(f, m, d) : a && function(e) {
                                return a(f, d, e)
                            }
                            ,
                            onStart: i && function() {
                                return i(f, d)
                            }
                            ,
                            onFrame: n && function(e) {
                                return n(f, d, e)
                            }
                            ,
                            delay: v,
                            config: g
                        }, u, {
                            from: h,
                            children: function(e) {
                                var t = c(f, d, r);
                                return t ? t(e) : null
                            }
                        }))
                    })
                }
                ,
                n
            }(s.PureComponent);
            ze.defaultProps = {
                keys: function(e) {
                    return e
                },
                unique: !1,
                reset: !1
            };
            var He = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].reduce(function(e, t) {
                return e[t] = Me(t),
                e
            }, Me);
            t.Spring = Ie,
            t.Keyframes = je,
            t.Transition = ze,
            t.Trail = Be,
            t.Controller = Te,
            t.config = Oe,
            t.animated = He,
            t.interpolate = function(e, t, n) {
                return e && new re(e,t,n)
            }
            ,
            t.Globals = x
        });
        (Ne = Te) && Ne.__esModule && Object.prototype.hasOwnProperty.call(Ne, "default") && Ne.default;
        var Fe = Te.Spring
          , Me = (Te.Keyframes,
        Te.Transition,
        Te.Trail,
        Te.Controller,
        Te.config,
        Te.animated)
          , Oe = (Te.interpolate,
        Te.Globals,
        function(e) {
            function t() {
                return f()(this, t),
                g()(this, E()(t).apply(this, arguments))
            }
            return k()(t, e),
            y()(t, [{
                key: "closeModalHandler",
                value: function() {
                    this.props.showModal(null)
                }
            }, {
                key: "escFunction",
                value: function(e) {
                    27 === e.keyCode && this.closeModalHandler()
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    document.addEventListener("keydown", this.escFunction.bind(this), !1)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("keydown", this.escFunction.bind(this), !1)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.className
                      , n = e.modal;
                    return Object(R.createPortal)(S.a.createElement("div", {
                        className: F()("mp-modal", t),
                        onClick: this.closeModalHandler.bind(this)
                    }, S.a.createElement(z.x, {
                        className: "mp-modal__close",
                        onClick: this.closeModalHandler.bind(this)
                    }), S.a.createElement(Fe, {
                        native: !0,
                        from: {
                            opacity: 0,
                            transform: "scale(0.5)"
                        },
                        to: {
                            opacity: 1,
                            transform: "scale(1)"
                        }
                    }, function(e) {
                        return S.a.createElement(Me.div, {
                            style: e,
                            className: "mp-modal__content"
                        }, S.a.createElement(ae, {
                            src: n,
                            alt: "",
                            className: "mp-modal__image"
                        }))
                    })), document.getElementsByTagName("body")[0])
                }
            }]),
            t
        }(S.a.Component));
        function Ie(e) {
            return null === e ? null : e.scrollHeight > e.clientHeight ? e : Ie(e.parentNode)
        }
        var Be = function() {
            var e = function(e) {
                function t(e) {
                    var n;
                    return f()(this, t),
                    (n = g()(this, E()(t).call(this, e))).parentScrollElement = null,
                    n.cardRef = S.a.createRef(),
                    n.state = {
                        isBottomButton: !1,
                        scrollTop: 0
                    },
                    n.handleScroll = n.handleScroll.bind(c()(n)),
                    n.openSurvey = n.openSurvey.bind(c()(n)),
                    n.onClickRetryHandler = n.onClickRetryHandler.bind(c()(n)),
                    n.onButtonBuyHandler = n.onButtonBuyHandler.bind(c()(n)),
                    n.onButtonRenewHandler = n.onButtonRenewHandler.bind(c()(n)),
                    n.onButtonCancelHandler = n.onButtonCancelHandler.bind(c()(n)),
                    n.onButtonOpenHandler = n.onButtonOpenHandler.bind(c()(n)),
                    n
                }
                return k()(t, e),
                y()(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e, t = this.cardRef.current;
                        t && (this.parentScrollElement = Ie(t),
                        null === (e = this.parentScrollElement) || void 0 === e || e.addEventListener("scroll", this.handleScroll))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var e, t = this.cardRef.current;
                        !this.parentScrollElement && t && (this.parentScrollElement = Ie(t),
                        null === (e = this.parentScrollElement) || void 0 === e || e.addEventListener("scroll", this.handleScroll))
                    }
                }, {
                    key: "handleScroll",
                    value: function() {
                        this.parentScrollElement && this.setState({
                            isBottomButton: this.parentScrollElement.scrollTop > 230
                        })
                    }
                }, {
                    key: "openSurvey",
                    value: function() {
                        var e, t = this.props.lang || "en";
                        window.open("https://olymptrade.typeform.com/to/".concat(function(e) {
                            return J[e] ? J[e] : J.en
                        }(t), "#userid=").concat(this.props.userId, "&featureid=").concat(null === (e = this.props.selectedItem) || void 0 === e ? void 0 : e.id), "_blank")
                    }
                }, {
                    key: "onClickRetryHandler",
                    value: function() {
                        this.props.goBack()
                    }
                }, {
                    key: "onButtonBuyHandler",
                    value: function() {
                        this.props.openBuyScreen && this.props.openBuyScreen(this.props.selectedItem.id)
                    }
                }, {
                    key: "onButtonOpenHandler",
                    value: function() {
                        var e;
                        this.props.goToFeature && this.props.goToFeature(null === (e = this.props.selectedItem) || void 0 === e ? void 0 : e.link)
                    }
                }, {
                    key: "onButtonRenewHandler",
                    value: function() {
                        var e = o()(a.a.mark(function e() {
                            return a.a.wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.props.buyFeature) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3,
                                        this.props.buyFeature(this.props.selectedItem.id, !0);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e, this)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "onButtonCancelHandler",
                    value: function() {
                        var e = o()(a.a.mark(function e() {
                            return a.a.wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.props.cancelNextPurchase) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3,
                                        this.props.cancelNextPurchase(this.props.selectedItem.id);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e, this)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props
                          , t = e.currentCurrency
                          , n = e.selectedItem
                          , r = e.fetchItemError
                          , a = e.lang
                          , i = e.userId;
                        if (r)
                            return S.a.createElement(ve, {
                                onClickRetry: this.onClickRetryHandler
                            });
                        if (!n)
                            return S.a.createElement(ne, null);
                        var o = n.id
                          , s = n.name
                          , c = n.category
                          , l = n.rating
                          , u = n.description
                          , p = n.iconUrl
                          , d = n.platforms
                          , m = n.screenshotsUrl
                          , f = n.selectedPaymentType.price
                          , h = ee(n)
                          , y = S.a.createElement(me, {
                            price: f,
                            currency: t,
                            purchaseInfo: h,
                            withoutLink: h.isBought && !n.link,
                            isError: this.props.cancelError || this.props.buyError,
                            isLoading: this.props.toggleNextPaymentLoading,
                            onButtonBuy: this.onButtonBuyHandler,
                            onButtonOpen: this.onButtonOpenHandler,
                            onButtonRenew: this.onButtonRenewHandler,
                            onButtonCancel: this.onButtonCancelHandler
                        })
                          , v = u ? S.a.createElement(S.a.Fragment, null, S.a.createElement("h4", {
                            className: "mp-card__description-title"
                        }, S.a.createElement(O.c, {
                            id: "description",
                            defaultMessage: "Description"
                        })), S.a.createElement(ke, {
                            className: "mp-card__description"
                        }, u)) : null
                          , g = h.isBought ? S.a.createElement("div", {
                            className: "mp-card__footer"
                        }, S.a.createElement("div", {
                            className: "mp-card__bottom-rating"
                        }, a && i && S.a.createElement(fe, {
                            openSurvey: this.openSurvey
                        }))) : null;
                        return S.a.createElement("div", {
                            className: F()("mp-card", x()({}, "mp-card_float-button", this.state.isBottomButton)),
                            ref: this.cardRef
                        }, this.props.modal && this.props.showModal && S.a.createElement(Oe, {
                            modal: this.props.modal,
                            showModal: this.props.showModal
                        }), S.a.createElement(le, {
                            id: o,
                            title: s,
                            purchaseInfo: h,
                            iconUrl: p,
                            category: c,
                            rating: l,
                            openSurvey: this.openSurvey
                        }), y, m && m.length ? S.a.createElement("div", {
                            className: "mp-card__carousel"
                        }, S.a.createElement(_e, {
                            items: m,
                            onItemClick: this.props.showModal
                        })) : null, d && d.length && S.a.createElement(ye, {
                            platforms: d
                        }), v, g, S.a.createElement("div", {
                            className: F()("mp-card__fixed-button", x()({}, "mp-card__fixed-button_shown", this.state.isBottomButton))
                        }, y))
                    }
                }]),
                t
            }(P.Component);
            return e = G([M.observer], e)
        }()
          , Ae = function() {
            return S.a.createElement("svg", {
                width: "143",
                height: "116",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, S.a.createElement("path", {
                d: "M42.5 26h68.2a4 4 0 014 3.7l5.4 73.4c.5 7-5 12.9-12 12.9H48.9c-7 0-12.5-6-12-12.9L42.5 26z",
                fill: "#30455B"
            }), S.a.createElement("path", {
                d: "M27.3 28.8a3 3 0 013-2.8h72.4l2.8 77.6a12 12 0 01-12 12.4H34c-7 0-12.5-6-12-12.9l5.4-74.3z",
                fill: "#354A61"
            }), S.a.createElement("g", {
                filter: "url(#filter0_d)"
            }, S.a.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M62.5 80a8 8 0 007.8-8 8 8 0 00-7.8-8 8 8 0 00-7.8 8 8 8 0 007.8 8zm0 15A22.8 22.8 0 0085 72c0-12.7-10-23-22.5-23A22.8 22.8 0 0040 72c0 12.7 10 23 22.5 23z",
                fill: "#0094FF"
            })), S.a.createElement("path", {
                d: "M62.5 77L78 96H47l15.5-19z",
                fill: "#6ECCF8"
            }), S.a.createElement("circle", {
                cx: "44",
                cy: "37",
                r: "4",
                fill: "#243445"
            }), S.a.createElement("circle", {
                cx: "82",
                cy: "37",
                r: "4",
                fill: "#243445"
            }), S.a.createElement("path", {
                d: "M44 37s-2.4 26 18.8 26C83.9 63 82 37 82 37",
                stroke: "#486079",
                strokeWidth: "2",
                strokeLinecap: "round"
            }), S.a.createElement("circle", {
                cx: "26",
                cy: "43",
                r: "2",
                fill: "#527799"
            }), S.a.createElement("circle", {
                cx: "5.5",
                cy: "66.5",
                r: "5.5",
                fill: "#354B63"
            }), S.a.createElement("circle", {
                cx: "9",
                cy: "29",
                r: "2",
                fill: "#527799"
            }), S.a.createElement("circle", {
                cx: "71.5",
                cy: "19.5",
                r: "2.5",
                fill: "#354B63"
            }), S.a.createElement("circle", {
                cx: "115.5",
                cy: "43.5",
                r: "2.5",
                fill: "#527799"
            }), S.a.createElement("circle", {
                cx: "109.5",
                cy: "3.5",
                r: "3.5",
                fill: "#354B63"
            }), S.a.createElement("circle", {
                cx: "140.5",
                cy: "83.5",
                r: "2.5",
                fill: "#354B63"
            }), S.a.createElement("defs", null, S.a.createElement("filter", {
                id: "filter0_d",
                x: "20",
                y: "29",
                width: "85",
                height: "86",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, S.a.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), S.a.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            }), S.a.createElement("feOffset", null), S.a.createElement("feGaussianBlur", {
                stdDeviation: "10"
            }), S.a.createElement("feColorMatrix", {
                values: "0 0 0 0 0.00784314 0 0 0 0 0.65098 0 0 0 0 0.94902 0 0 0 0.5 0"
            }), S.a.createElement("feBlend", {
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow"
            }), S.a.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect1_dropShadow",
                result: "shape"
            }))))
        }
          , je = function(e) {
            var t = e.isInventory;
            return S.a.createElement("div", {
                className: "mp-empty"
            }, S.a.createElement(Ae, null), t && S.a.createElement("p", {
                className: "mp-empty__title"
            }, S.a.createElement(O.c, {
                id: "mp_inventory_empty",
                defaultMessage: "You haven’t acquired anything yet"
            })))
        }
          , Re = function(e) {
            var t = e.tabKey
              , n = e.onClickTab
              , r = e.title
              , a = e.className;
            return S.a.createElement(I.b, {
                className: a,
                textAlign: "left",
                onClick: function() {
                    n(t)
                }
            }, r)
        }
          , Ve = function(e) {
            var t = e.tabs
              , n = e.currentTab
              , r = e.clickTab
              , a = t[n]
              , i = 0;
            return S.a.createElement(S.a.Fragment, null, S.a.createElement("div", {
                className: "sidebar-tabs"
            }, S.a.createElement("div", {
                className: "sidebar-tabs__tabs"
            }, Object.keys(t).map(function(e, a) {
                var o = t[e];
                return n === e && (i = a),
                S.a.createElement(Re, {
                    key: e,
                    onClickTab: r,
                    tabKey: e,
                    title: o.title,
                    className: F()("sidebar-tabs__tab", x()({}, "sidebar-tabs__tab_active", n === e))
                })
            }), S.a.createElement("div", {
                className: "sidebar-tabs__line sidebar-tabs__line_index-".concat(i)
            }, " "), S.a.createElement("div", {
                className: "sidebar-tabs__line-bg"
            }, " "))), S.a.createElement("div", {
                className: "sidebar-tabs__content"
            }, a ? a.component : null))
        }
          , ze = function(e) {
            var t, n = (t = {},
            x()(t, "market", {
                component: e.market,
                title: S.a.createElement(O.c, {
                    id: "mp_shop",
                    defaultMessage: "Shop"
                })
            }),
            x()(t, "inventory", {
                component: e.inventory,
                title: S.a.createElement(O.c, {
                    id: "mp_my_items",
                    defaultMessage: "My items"
                })
            }),
            t);
            return S.a.createElement(Ve, {
                tabs: n,
                currentTab: e.currentTab,
                clickTab: e.setCurrentTab
            })
        }
          , He = Object(M.observer)(function(e) {
            var t = e.item
              , n = e.openCard
              , r = e.buyFeature
              , a = e.currentCurrency
              , i = e.goToFeature
              , o = Object.assign({}, t.selectedPaymentType, {
                isSubscription: t.selectedPaymentType.type !== K
            })
              , s = ee(t);
            return S.a.createElement("div", {
                className: "mp-list-item",
                onClick: function(e) {
                    e.stopPropagation(),
                    n(t.id)
                }
            }, S.a.createElement(le, {
                className: "mp-list-item__header",
                id: t.id,
                link: t.link,
                title: t.name,
                iconUrl: t.iconUrl,
                category: t.category,
                rating: t.rating,
                purchaseInfo: s,
                buyFeature: r,
                goToFeature: i,
                currentCurrency: a,
                paymentType: o,
                withTitle: !0
            }))
        })
          , Le = function(e) {
            var t = e.marketList
              , n = e.config
              , r = Object(H.g)(t.length, {
                config: H.b.stiff,
                opacity: 1,
                x: 0,
                from: {
                    opacity: 0,
                    x: 5
                }
            });
            return S.a.createElement(S.a.Fragment, null, r.map(function(e, r) {
                var a = e.x
                  , i = d()(e, ["x"])
                  , o = t[r];
                return S.a.createElement(H.a.div, {
                    key: o.id,
                    style: q({}, i, {
                        transform: a.interpolate(function(e) {
                            return "translate3d(0,".concat(e, "px,0)")
                        })
                    })
                }, S.a.createElement(He, {
                    item: o,
                    currentCurrency: n.currentCurrency,
                    openCard: n.openCard,
                    buyFeature: n.openBuyScreen,
                    goToFeature: n.goToFeature
                }))
            }))
        }
          , Ue = function(e) {
            if (S.a.useEffect(function() {
                e.fetchFeatures()
            }, []),
            e.fetchFeaturesError)
                return S.a.createElement(ve, {
                    onClickRetry: function() {
                        e.fetchFeatures()
                    }
                });
            if (e.hasNoItems)
                return S.a.createElement(je, null);
            var t = Z(e.marketPlaceItems)
              , n = Z(e.marketPlaceItems, !0);
            if (e.fetchFeaturesLoading)
                return S.a.createElement(ne, null);
            var r = S.a.createElement(S.a.Fragment, null, t.length ? S.a.createElement(Le, {
                marketList: t,
                config: e
            }) : S.a.createElement(je, null))
              , a = S.a.createElement(S.a.Fragment, null, n.length ? S.a.createElement(Le, {
                marketList: n,
                config: e
            }) : S.a.createElement(je, {
                isInventory: !0
            }));
            return S.a.createElement(ze, {
                market: r,
                inventory: a,
                setCurrentTab: e.setCurrentTab,
                currentTab: e.currentTab
            })
        }
          , De = function(e) {
            var t = e.isPurchased
              , n = e.text
              , r = Object(H.e)({
                from: {
                    x: -20,
                    opacity: .3
                },
                x: 0,
                opacity: 1,
                config: q({}, H.b.molasses)
            });
            return S.a.createElement(S.a.Fragment, null, t ? S.a.createElement(H.a.div, {
                style: q({}, r, {
                    transform: r.x.interpolate(function(e) {
                        return "translateX(".concat(e, "px)")
                    })
                }),
                className: "subscription-item__label subscription-item__label_purchased"
            }, "PURCHASED") : S.a.createElement("div", {
                className: "subscription-item__label"
            }, n))
        }
          , We = {
            monthly: {
                id: "monthly-subs",
                defaultMessage: "1 Month"
            },
            "3months": {
                id: "3months-subs",
                defaultMessage: "3 Months"
            },
            "6months": {
                id: "6months-subs",
                defaultMessage: "6 Months"
            },
            yearly: {
                id: "yearly-subs",
                defaultMessage: "12 Months"
            }
        }
          , qe = {
            monthly: 1,
            "3months": 3,
            "6months": 6,
            yearly: 12
        }
          , Ge = {
            monthly: "",
            "3months": "-5%",
            "6months": "-10%",
            yearly: "-15%"
        }
          , Ke = function(e) {
            function t() {
                var e;
                return f()(this, t),
                (e = g()(this, E()(t).apply(this, arguments))).onClick = function() {
                    e.props.selectPaymentType && e.props.selectPaymentType(e.props.paymentType)
                }
                ,
                e
            }
            return k()(t, e),
            y()(t, [{
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.paymentType, r = t.monthlyPrice, a = t.isSelected, i = t.isPurchased, o = n.type, s = n.price, c = n.currency;
                    return S.a.createElement("div", {
                        className: F()("subscription-item", (e = {},
                        x()(e, "subscription-item_selected", a && !i),
                        x()(e, "subscription-item_purchased", i),
                        e)),
                        onClick: this.onClick
                    }, S.a.createElement(De, {
                        isPurchased: i,
                        text: Ge[o]
                    }), S.a.createElement("div", {
                        className: "subscription-item__row"
                    }, S.a.createElement("span", {
                        className: "subscription-item__text"
                    }, S.a.createElement(O.c, {
                        id: We[o].id,
                        defaultMessage: We[o].defaultMessage
                    })), S.a.createElement("span", {
                        className: "subscription-item__text"
                    }, S.a.createElement(B.a, {
                        value: s,
                        currency: c,
                        maximumFractionDigits: 2
                    }))), S.a.createElement("div", {
                        className: "subscription-item__row"
                    }, S.a.createElement("span", {
                        className: "subscription-item__text subscription-item__text_regular"
                    }, S.a.createElement(O.c, {
                        id: "subscription",
                        defaultMessage: "Subscription"
                    })), S.a.createElement("span", {
                        className: "subscription-item__text subscription-item__text_regular"
                    }, "monthly" !== o && !i && S.a.createElement("s", null, S.a.createElement(B.a, {
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            return qe[e] * t
                        }(o, r),
                        currency: c,
                        maximumFractionDigits: 2
                    })))))
                }
            }]),
            t
        }(S.a.Component)
          , Je = function(e) {
            var t = e.paymentTypes
              , n = e.selectPaymentType
              , r = e.selectedPaymentType
              , a = t.find(function(e) {
                return "monthly" === e.type
            })
              , i = Object(H.g)(t.length, {
                config: {
                    delay: 300
                },
                opacity: 1,
                x: 0,
                from: {
                    opacity: 0,
                    x: 5
                }
            });
            return S.a.createElement(S.a.Fragment, null, i.map(function(e, i) {
                var o = e.x
                  , s = d()(e, ["x"])
                  , c = t[i]
                  , l = c.price
                  , u = c.currency
                  , p = c.type;
                return S.a.createElement(H.a.div, {
                    key: l + u,
                    style: q({}, s, {
                        transform: o.interpolate(function(e) {
                            return "translate3d(0,".concat(e, "px,0)")
                        })
                    })
                }, S.a.createElement(Ke, {
                    paymentType: t[i],
                    monthlyPrice: a ? a.price : 0,
                    isSelected: r.currency === u && r.price === l && r.type === p,
                    selectPaymentType: n
                }))
            }))
        }
          , Ye = function(e) {
            var t = e.isBought
              , n = e.paymentTypes
              , r = e.selectPaymentType
              , a = e.selectedPaymentType
              , i = Object(P.useRef)()
              , o = Object(P.useRef)()
              , s = Object(H.e)({
                from: {
                    opacity: 0
                },
                opacity: 1,
                config: q({}, H.b.molasses, {
                    delay: 300
                }),
                ref: i
            })
              , c = Object(H.h)(t, null, {
                from: {
                    opacity: 0,
                    maxHeight: "0px"
                },
                enter: {
                    opacity: 1,
                    maxHeight: "400px"
                },
                leave: {
                    opacity: 0,
                    maxHeight: "0px"
                },
                ref: o
            });
            return Object(H.d)([o, i]),
            S.a.createElement(S.a.Fragment, null, c.map(function(e) {
                var t = e.item
                  , i = e.key
                  , o = e.props;
                return t ? S.a.createElement(H.a.div, {
                    style: s,
                    key: i
                }, S.a.createElement(Ke, {
                    paymentType: a,
                    isPurchased: !0
                })) : S.a.createElement(H.a.div, {
                    style: q({}, o, {
                        overflow: "hidden"
                    }),
                    key: i
                }, S.a.createElement(Je, {
                    paymentTypes: n,
                    selectPaymentType: r,
                    selectedPaymentType: a
                }))
            }))
        }
          , Xe = function(e) {
            var t = e.isBought
              , n = e.notEnoughMoney
              , r = e.onClickGoBack
              , a = e.onClickRecharge
              , i = e.onClickBuy
              , o = e.isLoading;
            return S.a.createElement(S.a.Fragment, null, t ? S.a.createElement(I.b, {
                className: "mp-purchase__button",
                color: "default",
                fullWidth: !0,
                size: "large",
                onClick: r
            }, S.a.createElement(O.c, {
                id: "mp_details",
                defaultMessage: "Details"
            })) : S.a.createElement(I.e, {
                className: "mp-purchase__button",
                color: n ? "positive" : "accent",
                fullWidth: !0,
                size: "large",
                onClick: n ? a : i,
                isLoading: o
            }, n ? S.a.createElement(O.c, {
                id: "mp_make_deposit",
                defaultMessage: "Make a deposit"
            }) : S.a.createElement(O.c, {
                id: "mp_to_pay",
                defaultMessage: "Purchase"
            })))
        }
          , Ze = function(e) {
            var t = e.activeTill
              , n = e.amount
              , r = e.category
              , a = e.currency
              , i = e.iconUrl
              , o = e.id
              , s = e.isBought
              , c = e.isLoading
              , l = e.isSubscription
              , u = e.onClickBuy
              , p = e.onClickGoBack
              , d = e.onClickRecharge
              , m = e.paymentTypes
              , f = e.platforms
              , h = e.price
              , y = e.purchaseError
              , v = e.rating
              , g = e.selectedPaymentType
              , b = e.selectPaymentType
              , E = e.title
              , _ = n < h
              , k = Object(H.e)({
                from: {
                    x: 0
                },
                x: _ ? 1 : 0,
                config: H.b.molasses
            }).x
              , w = Object(H.e)({
                from: {
                    x: 0
                },
                x: _ ? 50 : 0,
                config: {
                    duration: 200
                }
            }).x;
            return S.a.createElement(S.a.Fragment, null, S.a.createElement("div", {
                className: "mp-purchase-item"
            }, S.a.createElement("div", {
                className: "mp-purchase-item__item"
            }, S.a.createElement(le, {
                id: o,
                title: E,
                withTitle: !0,
                iconUrl: i,
                rating: v,
                category: r
            })), l && S.a.createElement(Ye, {
                paymentTypes: m.filter(function(e) {
                    return e.currency === a
                }),
                selectPaymentType: b,
                selectedPaymentType: g,
                isBought: s
            }), s ? S.a.createElement("div", {
                className: "mp-purchase-item__prices"
            }, t ? S.a.createElement(ue, {
                title: S.a.createElement(O.c, {
                    id: "active-till",
                    defaultMessage: "Subscription active till"
                }),
                amount: X(t),
                className: "mp-purchase-item__titled mp-purchase-item__balance"
            }) : S.a.createElement(ue, {
                title: S.a.createElement(O.c, {
                    id: "purchase",
                    defaultMessage: "Purchase"
                }),
                amount: S.a.createElement(O.c, {
                    id: "pro_success_title",
                    defaultMessage: "Success"
                }),
                className: "mp-purchase-item__titled mp-purchase-item__balance mp-purchase-item__balance_success"
            })) : S.a.createElement("div", {
                className: "mp-purchase-item__prices"
            }, S.a.createElement(ue, {
                title: S.a.createElement(O.c, {
                    id: "your_balance",
                    defaultMessage: "Your Balance"
                }),
                amount: S.a.createElement(B.a, {
                    value: n,
                    currency: a,
                    maximumFractionDigits: 2
                }),
                className: F()("mp-purchase-item__titled", "mp-purchase-item__balance", x()({}, "mp-purchase-item__balance_not-enough", _))
            }))), S.a.createElement(H.a.div, {
                style: {
                    maxHeight: w.interpolate({
                        range: [0, 50],
                        output: [0, 50]
                    }).interpolate(function(e) {
                        return "".concat(e, "px")
                    }),
                    opacity: k.interpolate({
                        range: [0, 1],
                        output: [0, 1]
                    }),
                    transform: k.interpolate({
                        range: [0, .25, .35, .45, .55, .65, .75, 1],
                        output: [1, .97, .9, 1.1, .9, 1.1, 1.03, 1]
                    }).interpolate(function(e) {
                        return "scale(".concat(e, ")")
                    })
                }
            }, S.a.createElement("p", {
                className: "mp-purchase__error mp-purchase__error_not-enough"
            }, S.a.createElement(O.c, {
                id: "mp_not_enough_funds",
                defaultMessage: "Not enough funds"
            }))), y ? S.a.createElement("p", {
                className: "mp-purchase__error"
            }, S.a.createElement(O.c, {
                id: "mp_error_contact_support",
                defaultMessage: "An error occurred. Please contact Support team for assistance"
            })) : null, S.a.createElement(Xe, {
                isBought: s,
                notEnoughMoney: _,
                onClickGoBack: p,
                onClickRecharge: d,
                onClickBuy: u,
                isLoading: c
            }), S.a.createElement("div", {
                className: "mp-purchase__platforms"
            }, S.a.createElement(ye, {
                platforms: f
            })))
        }
          , $e = function() {
            var e = function(e) {
                function t(e) {
                    var n;
                    return f()(this, t),
                    (n = g()(this, E()(t).call(this, e))).selectPaymentType = function(e) {
                        n.props.selectedItem.selectedPaymentType = e
                    }
                    ,
                    n.onClickBuy = function() {
                        n.setState({
                            loading: !0
                        }),
                        n.props.buyFeature(n.props.selectedItem.id).finally(function() {
                            return n.setState({
                                loading: !1
                            })
                        })
                    }
                    ,
                    n.onClickRecharge = function() {
                        n.props.openRechargeTooltip()
                    }
                    ,
                    n.onClickGoBack = function() {
                        n.props.deselectFeature()
                    }
                    ,
                    n.state = {
                        loading: !1
                    },
                    n
                }
                return k()(t, e),
                y()(t, [{
                    key: "render",
                    value: function() {
                        var e, t = this;
                        if (!this.props.selectedItem)
                            return S.a.createElement(ne, null);
                        var n = this.props
                          , r = n.amount
                          , a = n.currentCurrency
                          , i = n.fetchError
                          , o = void 0 !== i && i
                          , s = n.purchaseError
                          , c = void 0 !== s && s
                          , l = this.props.selectedItem
                          , u = Object.assign({}, l.selectedPaymentType, {
                            isSubscription: l.selectedPaymentType.type !== K
                        });
                        if (o)
                            return S.a.createElement(ve, {
                                onClickRetry: function() {
                                    t.props.selectFeature()
                                }
                            });
                        var p = ee(l);
                        return S.a.createElement("div", {
                            className: "mp-purchase"
                        }, S.a.createElement(Ze, {
                            id: l.id,
                            iconUrl: l.iconUrl,
                            title: l.name,
                            category: l.category,
                            rating: l.rating,
                            amount: r,
                            isSubscription: p.isSubscription,
                            platforms: l.platforms,
                            price: u.price,
                            isLoading: this.state.loading,
                            onClickBuy: this.onClickBuy,
                            onClickRecharge: this.onClickRecharge,
                            purchaseError: c,
                            currency: a,
                            paymentTypes: l.paymentTypes,
                            selectPaymentType: this.selectPaymentType,
                            onClickGoBack: this.onClickGoBack,
                            selectedPaymentType: l.selectedPaymentType,
                            activeTill: null === (e = null === l || void 0 === l ? void 0 : l.purchaseInfo) || void 0 === e ? void 0 : e.activeTill,
                            isBought: this.props.selectedItem && p.isBought
                        }))
                    }
                }]),
                t
            }(P.Component);
            return e = G([M.observer], e)
        }()
          , Qe = function(e) {
            return S.a.createElement(Be, Object.assign({}, e))
        }
          , et = function(e) {
            return S.a.createElement(Ue, Object.assign({}, e))
        }
          , tt = function(e) {
            return S.a.createElement($e, Object.assign({}, e))
        }
          , nt = new (function() {
            function e() {
                f()(this, e),
                this.http = new U.a
            }
            return y()(e, [{
                key: "fetchFeatures",
                value: function() {
                    return this.http.post("/marketplace/features", {
                        version: "v1",
                        project: "bo"
                    }).then(function(e) {
                        return e.filter(function(e) {
                            return e.platforms.includes("web")
                        }).map(Q)
                    })
                }
            }, {
                key: "fetchFeature",
                value: function(e) {
                    return this.http.post("/marketplace/features/details", {
                        data: {
                            id: e
                        },
                        version: "v1",
                        project: "bo"
                    }).then(function(e) {
                        return n = (t = e).screenshots,
                        r = n && n.length ? n.map(function(e) {
                            return e.url
                        }) : [],
                        delete (a = $(q({}, {
                            screenshotsUrl: r
                        }, {}, t))).screenshots,
                        a;
                        var t, n, r, a
                    })
                }
            }, {
                key: "buyFeature",
                value: function(e, t, n) {
                    return this.http.post("/marketplace/features/buy", {
                        data: {
                            id: e,
                            payment_type: t,
                            account_id: n
                        },
                        version: "v1",
                        project: "bo"
                    }).then(function(e) {
                        return $(e)
                    })
                }
            }, {
                key: "cancelNextPurchase",
                value: function(e) {
                    return this.http.post("/marketplace/features/cancel-next-payment", {
                        data: {
                            id: e
                        },
                        version: "v1",
                        project: "bo"
                    }).then(function(e) {
                        return $(e)
                    })
                }
            }]),
            e
        }())
          , rt = function() {
            var e = function() {
                function e() {
                    var t = this;
                    f()(this, e),
                    this.marketPlaceItems = new D.b([],{
                        sort: "id",
                        order: "asc"
                    }),
                    this.hasNoItems = !1,
                    this.fetchFeaturesLoading = !0,
                    this.fetchFeaturesError = !1,
                    this.fetchItemError = !1,
                    this.buyError = !1,
                    this.cancelError = !1,
                    this.buyFeatureLoading = !1,
                    this.cancelNextPurchaseLoading = !1,
                    this.currentTab = "market",
                    this.currentCurrency = "usd",
                    this.currentAccountId = 0,
                    this.selectFeature = function(e) {
                        return t.fetchItemError = !1,
                        t.buyError = !1,
                        t.marketPlaceItems.unSelect(),
                        t.marketPlaceServiceHttp.fetchFeature(e).then(function(n) {
                            var r = te(n, t.currentCurrency);
                            t.marketPlaceItems.update(r, {
                                remove: !1
                            }),
                            t.marketPlaceItems.select(e)
                        }).catch(function() {
                            t.fetchItemError = !0
                        })
                    }
                    ,
                    this.marketPlaceServiceHttp = nt
                }
                return y()(e, [{
                    key: "updateModels",
                    value: function(e, t) {
                        var n = t || this.currentCurrency
                          , r = e.map(function(e) {
                            return te(e, n)
                        });
                        this.marketPlaceItems.update(r, {
                            select: !1
                        })
                    }
                }, {
                    key: "fetchFeatures",
                    value: function() {
                        var e = this;
                        return this.fetchFeaturesError = !1,
                        this.marketPlaceServiceHttp.fetchFeatures().then(function(t) {
                            e.updateModels(t),
                            e.hasNoItems = !t.length
                        }).catch(function() {
                            e.fetchFeaturesError = !0
                        }).finally(function() {
                            e.fetchFeaturesLoading = !1
                        })
                    }
                }, {
                    key: "buyFeature",
                    value: function(e, t) {
                        var n, r, a = this;
                        this.buyError = !1,
                        this.buyFeatureLoading = !0;
                        var i = this.marketPlaceItems.getById(e)
                          , o = t && (null === (n = i.purchaseInfo) || void 0 === n ? void 0 : n.type) ? i.purchaseInfo.type : null === (r = i.selectedPaymentType) || void 0 === r ? void 0 : r.type
                          , s = this.currentAccountId;
                        return this.marketPlaceServiceHttp.buyFeature(e, o, s).then(function(e) {
                            var t = Object.assign({}, i, e);
                            a.marketPlaceItems.update(t, {
                                remove: !1
                            })
                        }).catch(function() {
                            a.buyError = !0
                        }).finally(function() {
                            a.buyFeatureLoading = !1
                        })
                    }
                }, {
                    key: "cancelNextPurchase",
                    value: function(e) {
                        var t = this;
                        return this.cancelError = !1,
                        this.cancelNextPurchaseLoading = !0,
                        this.marketPlaceServiceHttp.cancelNextPurchase(e).then(function(n) {
                            var r = Object.assign({}, t.marketPlaceItems.getById(e), n);
                            t.marketPlaceItems.update(r, {
                                remove: !1
                            })
                        }).catch(function() {
                            t.cancelError = !0
                        }).finally(function() {
                            t.cancelNextPurchaseLoading = !1
                        })
                    }
                }, {
                    key: "setCurrentTab",
                    value: function(e) {
                        this.currentTab = e
                    }
                }, {
                    key: "deselectFeature",
                    value: function() {
                        this.marketPlaceItems.unSelect()
                    }
                }, {
                    key: "toggleNextPaymentLoading",
                    get: function() {
                        return this.buyFeatureLoading || this.cancelNextPurchaseLoading
                    }
                }]),
                e
            }();
            return G([L.observable], e.prototype, "marketPlaceItems", void 0),
            G([L.observable], e.prototype, "hasNoItems", void 0),
            G([L.observable], e.prototype, "fetchFeaturesLoading", void 0),
            G([L.observable], e.prototype, "fetchFeaturesError", void 0),
            G([L.observable], e.prototype, "fetchItemError", void 0),
            G([L.observable], e.prototype, "buyError", void 0),
            G([L.observable], e.prototype, "cancelError", void 0),
            G([L.observable], e.prototype, "buyFeatureLoading", void 0),
            G([L.observable], e.prototype, "cancelNextPurchaseLoading", void 0),
            G([L.observable], e.prototype, "currentTab", void 0),
            G([L.observable], e.prototype, "currentCurrency", void 0),
            G([L.observable], e.prototype, "currentAccountId", void 0),
            G([L.computed], e.prototype, "toggleNextPaymentLoading", null),
            e
        }();
        n("84wx")
    }
}]);
//# sourceMappingURL=lvl_marketplace.24e285f9.js.map
