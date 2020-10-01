(window.webpackJsonp = window.webpackJsonp || []).push([[15], {
    "0Z5s": function(e, t, c) {},
    MMiV: function(e, t, c) {
        "use strict";
        c.d(t, "a", function() {
            return q
        }),
        c.d(t, "b", function() {
            return I
        }),
        c.d(t, "c", function() {
            return D
        }),
        c.d(t, "d", function() {
            return K
        }),
        c.d(t, "e", function() {
            return T
        }),
        c.d(t, "f", function() {
            return M
        }),
        c.d(t, "g", function() {
            return P
        });
        var n = c("OvAC")
          , a = c.n(n)
          , r = c("SDJZ")
          , s = c.n(r)
          , i = c("NToG")
          , o = c.n(i)
          , l = c("K4DB")
          , u = c.n(l)
          , f = c("+IV6")
          , m = c.n(f)
          , p = c("eef+")
          , d = c.n(p)
          , b = c("e+GP")
          , y = c.n(b)
          , k = c("mXGw")
          , _ = c("deTv")
          , O = c("mBK0")
          , j = c("8Jek")
          , h = c.n(j)
          , v = c("cUhM")
          , E = c("YTIe")
          , g = c("cneo");
        function w(e, t) {
            var c = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                c.push.apply(c, n)
            }
            return c
        }
        function N(e) {
            for (var t = 1; t < arguments.length; t++) {
                var c = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(c), !0).forEach(function(t) {
                    a()(e, t, c[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c)) : w(Object(c)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(c, t))
                })
            }
            return e
        }
        function C(e, t, c, n) {
            var a, r = arguments.length, s = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, c) : n;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, c, n);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (a = e[i]) && (s = (r < 3 ? a(s) : r > 3 ? a(t, c, s) : a(t, c)) || s);
            return r > 3 && s && Object.defineProperty(t, c, s),
            s
        }
        var S = Object(_.e)({
            support: {
                id: "kyc_contact_support",
                defaultMessage: "Contact Support"
            },
            documents: {
                id: "kyc_upload_documents",
                defaultMessage: "Upload Documents"
            },
            form: {
                id: "kyc_fill_form",
                defaultMessage: "Fill out the Form"
            }
        })
          , M = function() {
            var e = function(e) {
                function t() {
                    return s()(this, t),
                    u()(this, m()(t).apply(this, arguments))
                }
                return d()(t, e),
                o()(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props
                          , t = e.className
                          , c = e.onSupportClick;
                        return Object(k.createElement)("div", {
                            className: h()("kyc-p-verification-request", t)
                        }, Object(k.createElement)("span", {
                            className: "kyc-p-verification-request__description"
                        }, Object(k.createElement)(_.c, {
                            id: "kyc_verification_request_descr_1",
                            defaultMessage: "We care about the security of your trading account and are doing everything to protect it. One of the ways to protect it is a verification: a user verifies their account and identity."
                        })), Object(k.createElement)("span", {
                            className: "kyc-p-verification-request__description"
                        }, Object(k.createElement)(_.c, {
                            id: "kyc_verification_request_descr_2",
                            defaultMessage: "To verify your account, please contact our support team."
                        })), Object(k.createElement)(v.b, {
                            color: "accent",
                            size: "large",
                            onClick: c
                        }, Object(k.createElement)(_.c, Object.assign({}, S.support))))
                    }
                }]),
                t
            }(k.Component);
            return e = C([O.observer], e)
        }()
          , P = function() {
            return Object(k.createElement)(_.c, {
                id: "kyc_verification_title",
                defaultMessage: "Account Verification"
            })
        }
          , A = function(e) {
            var t;
            switch (e.status) {
            case "success":
                t = E.w;
                break;
            case "process":
                t = E.pb;
                break;
            case "requested":
            case "failed":
                t = E.b
            }
            return Object(k.createElement)(t, {
                className: h()("kyc-c-status-icon", "kyc-c-status-icon_".concat(e.status), e.className)
            })
        }
          , D = function(e) {
            var t = e.type
              , c = e.status
              , n = e.className
              , a = e.onClick
              , r = null
              , s = null;
            switch (t) {
            case "identification":
                r = Object(k.createElement)(_.c, {
                    id: "kyc_identification_title",
                    defaultMessage: "Account Identification"
                }),
                s = Object(k.createElement)(_.c, {
                    id: "kyc_identification_descr",
                    defaultMessage: "Filling out the form is a basic step in user identity confirmation"
                });
                break;
            case "verification":
                r = Object(k.createElement)(_.c, {
                    id: "kyc_verification_title",
                    defaultMessage: "Account Verification"
                }),
                s = Object(k.createElement)(_.c, {
                    id: "kyc_verification_descr",
                    defaultMessage: "Full check and identity confirmation"
                })
            }
            return Object(k.createElement)(v.b, {
                startIcon: Object(k.createElement)(E.vb, {
                    className: "kyc-w-kyc-button__icon"
                }),
                endIcon: c ? Object(k.createElement)(A, {
                    status: c
                }) : Object(k.createElement)("span", null),
                textAlign: "left",
                className: h()(n),
                classNameText: "kyc-w-kyc-button__content",
                "data-test": "kyc-w-kyc-button",
                onClick: a
            }, Object(k.createElement)("span", {
                className: "kyc-w-kyc-button__info"
            }, Object(k.createElement)("span", {
                className: "kyc-w-kyc-button__title"
            }, r), Object(k.createElement)("span", {
                className: "kyc-w-kyc-button__description"
            }, s)))
        }
          , T = function(e) {
            var t = e.meta
              , c = e.action
              , n = e.className
              , a = e.onClick;
            return Object(k.createElement)("div", {
                className: h()("kyc-w-lock-screen", n)
            }, Object(k.createElement)("div", {
                className: "kyc-w-lock-screen__content"
            }, Object(k.createElement)("span", {
                className: "kyc-w-lock-screen__title"
            }, t.title), t.reason && Object(k.createElement)("span", {
                className: "kyc-w-lock-screen__reason"
            }, t.reason), Object(k.createElement)("span", {
                className: "kyc-w-lock-screen__description"
            }, t.description)), Object(k.createElement)(v.b, {
                color: "support" === c ? "default" : "warning",
                onClick: function() {
                    a(c)
                },
                className: h()("kyc-w-lock-screen__action"),
                size: "large"
            }, Object(k.createElement)(_.c, Object.assign({}, S[c]))))
        }
          , q = function(e) {
            var t = e.action
              , c = e.status
              , n = e.meta
              , a = e.className
              , r = e.onClick;
            var s = "support" === t;
            return Object(k.createElement)("div", {
                className: h()("kyc-b-callout", a)
            }, Object(k.createElement)("div", {
                className: "kyc-b-callout__content"
            }, Object(k.createElement)(A, {
                status: c,
                className: "kyc-b-callout__icon"
            }), Object(k.createElement)("span", {
                className: "kyc-b-callout__title"
            }, n.title), Object(k.createElement)("span", {
                className: "kyc-b-callout__description"
            }, n.description)), Object(k.createElement)(v.b, {
                color: s ? "default" : "warning",
                onClick: function() {
                    r(t)
                },
                className: h()("kyc-b-callout__action", s && "kyc-b-callout__action_color_default"),
                size: "large"
            }, Object(k.createElement)(_.c, Object.assign({}, S[t]))))
        }
          , I = function(e) {
            function t() {
                return s()(this, t),
                u()(this, m()(t).apply(this, arguments))
            }
            return d()(t, e),
            o()(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.kycState
                      , c = e.className
                      , n = e.renderContent;
                    return Object(k.createElement)("div", {
                        className: h()("kyc-m-form", c)
                    }, t.meta && Object(k.createElement)("div", {
                        className: "kyc-m-form__header"
                    }, Object(k.createElement)("h2", {
                        className: "kyc-m-form__title"
                    }, t.meta.title), t.meta.description && Object(k.createElement)("span", {
                        className: "kyc-m-form__description"
                    }, t.meta.description)), n({
                        className: "kyc-m-form__content",
                        kyc: t
                    }))
                }
            }]),
            t
        }(k.Component)
          , F = function() {
            var e = function() {
                function e() {
                    s()(this, e)
                }
                return o()(e, null, [{
                    key: "parse",
                    value: function(t) {
                        var c = {
                            userId: t.user_id,
                            clientId: t.client_id,
                            token: t.token,
                            baseUrl: t.base_url,
                            type: t.type,
                            status: t.status,
                            meta: t.meta,
                            calloutMeta: t.callout_meta,
                            action: e.parseAction(t),
                            isVoluntary: t.is_voluntary
                        }
                          , n = N({}, c, {
                            blockStatus: null
                        });
                        return t.block_status && (n = N({}, c, {
                            blockStatus: t.block_status,
                            blockMeta: t.block_meta || e.DEFAULT_BLOCK_META
                        })),
                        n
                    }
                }, {
                    key: "parseAction",
                    value: function(e) {
                        return "permanent" === e.block_status ? "support" : "requested" === e.status && "verification" === e.type ? "documents" : "requested" === e.status && "identification" === e.type ? "form" : "support"
                    }
                }]),
                e
            }();
            return e.DEFAULT_BLOCK_META = {
                title: "",
                reason: "",
                description: ""
            },
            e
        }()
          , K = function() {
            var e = function() {
                function e(t, c) {
                    s()(this, e),
                    this.http = t,
                    this.webSocket = c,
                    this.state = null,
                    this.handleChangeState = this.handleChangeState.bind(this)
                }
                return o()(e, [{
                    key: "load",
                    value: function(e) {
                        return this.updateState(e),
                        this.webSocket.onKycStateChange(this.handleChangeState),
                        Promise.resolve(!0)
                    }
                }, {
                    key: "updateState",
                    value: function(e) {
                        if (e) {
                            var t = F.parse(e);
                            this.state ? Object(g.set)(this.state, t) : Object(g.set)(this, "state", t)
                        } else
                            Object(g.set)(this, "state", null)
                    }
                }, {
                    key: "handleChangeState",
                    value: function() {
                        var e = this;
                        this.http.getKycState().then(Object(g.action)(function(t) {
                            e.updateState(t)
                        })).catch(function(e) {})
                    }
                }]),
                e
            }();
            return C([g.observable], e.prototype, "state", void 0),
            C([g.action], e.prototype, "load", null),
            C([g.action], e.prototype, "handleChangeState", null),
            e
        }();
        c("0Z5s")
    }
}]);
