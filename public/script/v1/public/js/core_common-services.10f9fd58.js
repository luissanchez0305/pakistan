(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    lLva: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return b
        }),
        n.d(t, "b", function() {
            return T
        }),
        n.d(t, "c", function() {
            return j
        }),
        n.d(t, "d", function() {
            return I
        }),
        n.d(t, "e", function() {
            return E
        }),
        n.d(t, "f", function() {
            return O
        }),
        n.d(t, "g", function() {
            return A
        }),
        n.d(t, "h", function() {
            return C
        }),
        n.d(t, "i", function() {
            return L
        }),
        n.d(t, "j", function() {
            return R
        }),
        n.d(t, "k", function() {
            return M
        }),
        n.d(t, "l", function() {
            return _
        }),
        n.d(t, "m", function() {
            return B
        }),
        n.d(t, "n", function() {
            return H
        }),
        n.d(t, "o", function() {
            return S
        });
        var i = n("nxTg")
          , r = n.n(i)
          , o = n("NthX")
          , a = n.n(o)
          , s = n("fFdx")
          , u = n.n(s)
          , c = n("SDJZ")
          , l = n.n(c)
          , h = n("NToG")
          , d = n.n(h)
          , f = n("e+GP")
          , v = n.n(f)
          , p = n("cneo")
          , y = n("9va6")
          , g = n("76nb")
          , m = n("GQik")
          , k = n("f6l3")
          , b = {
            STUB: "stub",
            DEMO: "demo",
            REAL: "real",
            VIRTUAL: "virtual"
        };
        function w(e, t, n, i) {
            var r, o = arguments.length, a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, n, i);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (r = e[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, n, a) : r(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a),
            a
        }
        var T = function() {
            var e = function() {
                function e(t) {
                    l()(this, e),
                    this.accountsList = [],
                    this.setAccounts([t], t.id)
                }
                return d()(e, [{
                    key: "setAccounts",
                    value: function(e, t) {
                        0 !== e.length && (this.accountsList = e,
                        this.selectAccountById(t))
                    }
                }, {
                    key: "updateAccountById",
                    value: function(t, n) {
                        var i = this.getAccountById(t);
                        if (i) {
                            var r = {};
                            Object.keys(n).forEach(function(t) {
                                t in e.PROTECTED_ACCOUNT_FIELDS || (r[t] = n[t])
                            }),
                            Object(p.set)(i, r)
                        }
                    }
                }, {
                    key: "selectAccountById",
                    value: function(e) {
                        var t = this.accountsList.find(function(t) {
                            return t.id === e
                        })
                          , n = t && (!this.selectedAccount || this.selectedAccount.id !== t.id);
                        t && n && (this.accountsList.forEach(function(e) {
                            e.selected = !1
                        }),
                        t.selected = !0,
                        this.selectedAccount = t)
                    }
                }, {
                    key: "getAccountById",
                    value: function(e) {
                        return this.accountsList.find(function(t) {
                            return t.id === e
                        })
                    }
                }, {
                    key: "hasAccountType",
                    value: function(e) {
                        return this.accountsList.some(function(t) {
                            return t.type === e
                        })
                    }
                }]),
                e
            }();
            return e.PROTECTED_ACCOUNT_FIELDS = {
                id: !0,
                type: !0,
                selected: !1
            },
            w([p.observable], e.prototype, "accountsList", void 0),
            w([p.observable], e.prototype, "selectedAccount", void 0),
            w([p.action], e.prototype, "setAccounts", null),
            w([p.action], e.prototype, "updateAccountById", null),
            w([p.action], e.prototype, "selectAccountById", null),
            e
        }();
        function S() {
            return navigator.cookieEnabled && "serviceWorker"in navigator && "PushManager"in window && "Notification"in window && "fetch"in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
        }
        var D = {
            status: "idle",
            token: null
        }
          , E = function() {
            function e(t, n) {
                l()(this, e),
                this.transport = t,
                this.storage = n,
                this.isInitialized = !1,
                this.options = D,
                this.foregroundMessageHandlers = [],
                this.handleTokenRefresh = this.handleTokenRefresh.bind(this),
                this.handleForegroundMessage = this.handleForegroundMessage.bind(this)
            }
            return d()(e, [{
                key: "initialize",
                value: function() {
                    this.options = {
                        status: this.storage.get("status") || D.status,
                        token: this.storage.get("token") || D.token
                    },
                    this.isInitialized = !0
                }
            }, {
                key: "start",
                value: function() {
                    var e = u()(a.a.mark(function e() {
                        return a.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.isInitialized) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("Service is not initialized.");
                                case 2:
                                    if (this.isSystemNotificationGranted()) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Error("Service can't be started. System notification is doesn't 'granted'.");
                                case 4:
                                    if (this.isAllowed()) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Error("Service can't be started. Cloud messaging is doesn't 'allowed'.");
                                case 6:
                                    return e.next = 8,
                                    this.transport.onTokenRefresh(this.handleTokenRefresh);
                                case 8:
                                    return e.next = 10,
                                    this.transport.onMessage(this.handleForegroundMessage);
                                case 10:
                                    return e.next = 12,
                                    this.updateToken();
                                case 12:
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
                key: "allow",
                value: function() {
                    var e = u()(a.a.mark(function e() {
                        return a.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.options.status = "allowed",
                                    this.saveOptionsToStorage(),
                                    e.next = 4,
                                    Notification.requestPermission();
                                case 4:
                                    return e.abrupt("return", "granted" === Notification.permission);
                                case 5:
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
                key: "disable",
                value: function() {
                    var e = u()(a.a.mark(function e() {
                        var t;
                        return a.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = !0,
                                    !this.options.token) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4,
                                    this.transport.deleteToken(this.options.token);
                                case 4:
                                    t = e.sent;
                                case 5:
                                    return t && (this.options.status = "disabled",
                                    this.saveOptionsToStorage()),
                                    e.abrupt("return", t);
                                case 7:
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
                key: "resetStatus",
                value: function() {
                    this.options.status = "idle",
                    this.saveOptionsToStorage()
                }
            }, {
                key: "clearToken",
                value: function() {
                    this.options.token = null,
                    this.saveOptionsToStorage()
                }
            }, {
                key: "isAllowed",
                value: function() {
                    return "allowed" === this.options.status
                }
            }, {
                key: "isDisabled",
                value: function() {
                    return "disabled" === this.options.status
                }
            }, {
                key: "isSystemNotificationGranted",
                value: function() {
                    return "granted" === Notification.permission
                }
            }, {
                key: "isSystemNotificationDenied",
                value: function() {
                    return "denied" === Notification.permission
                }
            }, {
                key: "onForegroundMessage",
                value: function(e) {
                    var t = this;
                    return this.foregroundMessageHandlers.push(e),
                    function() {
                        t.foregroundMessageHandlers.filter(function(t) {
                            return t !== e
                        })
                    }
                }
            }, {
                key: "handleTokenRefresh",
                value: function() {
                    this.updateToken()
                }
            }, {
                key: "handleForegroundMessage",
                value: function(e) {
                    for (var t = 0; t < this.foregroundMessageHandlers.length; t += 1)
                        this.foregroundMessageHandlers[t](e)
                }
            }, {
                key: "isTokenSentToServer",
                value: function(e) {
                    return this.storage.get("token") === e
                }
            }, {
                key: "saveTokenToOptions",
                value: function(e) {
                    this.options.token = e,
                    this.saveOptionsToStorage()
                }
            }, {
                key: "updateToken",
                value: function() {
                    var e = u()(a.a.mark(function e() {
                        var t;
                        return a.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.transport.getToken();
                                case 3:
                                    if (!(t = e.sent)) {
                                        e.next = 12;
                                        break
                                    }
                                    if (this.isTokenSentToServer(t)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 8,
                                    this.transport.sendTokenToServer(t);
                                case 8:
                                    e.sent && this.saveTokenToOptions(t);
                                case 10:
                                    e.next = 13;
                                    break;
                                case 12:
                                    this.saveTokenToOptions(null);
                                case 13:
                                    return e.abrupt("return", !0);
                                case 16:
                                    return e.prev = 16,
                                    e.t0 = e.catch(0),
                                    this.resetStatus(),
                                    e.abrupt("return", !1);
                                case 20:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[0, 16]])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "saveOptionsToStorage",
                value: function() {
                    this.storage.set("status", this.options.status),
                    this.storage.set("token", this.options.token)
                }
            }]),
            e
        }()
          , O = function() {
            var e = function() {
                function e() {
                    l()(this, e),
                    this.featuresList = {}
                }
                return d()(e, [{
                    key: "fillInFeaturesList",
                    value: function(e) {
                        var t = this;
                        e && Object.keys(e).forEach(function(n) {
                            Object(p.set)(t.featuresList, n, e[n])
                        })
                    }
                }, {
                    key: "getFeatureValue",
                    value: function(e) {
                        return Object(p.get)(this.featuresList, e)
                    }
                }, {
                    key: "setFeatureValue",
                    value: function(e, t) {
                        Object(p.set)(this.featuresList, e, t)
                    }
                }]),
                e
            }();
            return w([p.observable], e.prototype, "featuresList", void 0),
            w([p.action], e.prototype, "setFeatureValue", null),
            e
        }()
          , x = 60
          , N = Object.freeze({
            ON: 15,
            OFF: 25,
            INTERVAL: 1e4
        })
          , A = function() {
            var e = function() {
                function e() {
                    var t = this;
                    l()(this, e),
                    this.liteMode = !1,
                    this.cursor = x,
                    this.measures = Object(y.range)(0, x + 1, 0),
                    this.timer = Object(g.c)(this.raf.bind(this)),
                    this.liteModeTimer = Object(m.a)(function() {
                        var e = t.fps;
                        e < N.ON ? t.liteMode = !0 : e > N.OFF && (t.liteMode = !1)
                    }, N.INTERVAL)
                }
                return d()(e, [{
                    key: "stop",
                    value: function() {
                        this.timer.stop(),
                        this.liteModeTimer.stop()
                    }
                }, {
                    key: "getCursorNext",
                    value: function() {
                        return (this.cursor + 1) % (x + 1)
                    }
                }, {
                    key: "raf",
                    value: function(e) {
                        this.cursor = this.getCursorNext(),
                        this.measures[this.cursor] = e
                    }
                }, {
                    key: "fps",
                    get: function() {
                        var e = this.measures[this.cursor] - this.measures[this.getCursorNext()];
                        return Math.floor(1e3 * x / e)
                    }
                }]),
                e
            }();
            return w([p.observable], e.prototype, "liteMode", void 0),
            e
        }()
          , I = {
            TIME_IS_OVER: "timeIsOver",
            USER_CLOSE: "userClose"
        }
          , C = function() {
            var e = function() {
                function e() {
                    l()(this, e),
                    this.counters = [],
                    this.collections = {},
                    this.noticeHash = {},
                    this.noticeWaiting = {}
                }
                return d()(e, [{
                    key: "setTimeService",
                    value: function(e) {
                        this.timeService = e
                    }
                }, {
                    key: "addWaiting",
                    value: function(e) {
                        return e instanceof Array ? this.addWaitingNotices(e) : this.addWaitingNotice(e)
                    }
                }, {
                    key: "addWaitingNotices",
                    value: function(e) {
                        for (var t = 0; t < e.length; t++)
                            this.addWaitingNotice(e[t])
                    }
                }, {
                    key: "addWaitingNotice",
                    value: function(e) {
                        var t = e.collectionName;
                        if (t) {
                            this.noticeWaiting[t] || (this.noticeWaiting[t] = []);
                            var n = this.noticeWaiting[t];
                            n && n.push(e)
                        }
                    }
                }, {
                    key: "removeWaitingNotices",
                    value: function(e) {
                        delete this.noticeWaiting[e]
                    }
                }, {
                    key: "getWaitingNotices",
                    value: function(e) {
                        return this.noticeWaiting[e]
                    }
                }, {
                    key: "addCollections",
                    value: function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t]
                              , i = n.name
                              , r = n.model;
                            this.collections[i] = r;
                            var o = this.getWaitingNotices(i);
                            o && (this.removeWaitingNotices(i),
                            this.add(o))
                        }
                    }
                }, {
                    key: "removeCollections",
                    value: function(e) {
                        for (var t = 0; t < e.length; t++)
                            delete this.collections[e[t]]
                    }
                }, {
                    key: "getCollection",
                    value: function(e) {
                        return this.collections[e]
                    }
                }, {
                    key: "getNotice",
                    value: function(e) {
                        var t, n = e.id, i = e.collectionName;
                        if (!i && n) {
                            var r = this.getNoticeHash(n);
                            i = r && r.collectionName
                        }
                        if (i && (t = this.getCollection(i)),
                        t)
                            return t.get(n)
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        return e instanceof Array ? this.addNotices(e) : this.addNotice(e)
                    }
                }, {
                    key: "addNotices",
                    value: function(e) {
                        for (var t = 0; t < e.length; t++)
                            this.addNotice(e[t])
                    }
                }, {
                    key: "addNotice",
                    value: function(e) {
                        var t = this;
                        if (e && !e.isExpired && !this.getNoticeHash(e)) {
                            var n = this.getCollection(e.collectionName);
                            if (n) {
                                if ((!n || "function" != typeof n.shouldAdd || n.shouldAdd(e)) && (n && "function" == typeof n.setNotice && (e = n.setNotice(e)),
                                n)) {
                                    var i = function() {
                                        var t = u()(a.a.mark(function t() {
                                            return a.a.wrap(function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        if ("function" != typeof n.onBeforeAdd) {
                                                            t.next = 3;
                                                            break
                                                        }
                                                        return t.next = 3,
                                                        n.onBeforeAdd(e);
                                                    case 3:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }, t)
                                        }));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }()
                                      , r = function() {
                                        var i = u()(a.a.mark(function i() {
                                            return a.a.wrap(function(i) {
                                                for (; ; )
                                                    switch (i.prev = i.next) {
                                                    case 0:
                                                        n.add(e),
                                                        t.setNoticeHash(e),
                                                        e.period && t.startCounter(e);
                                                    case 3:
                                                    case "end":
                                                        return i.stop()
                                                    }
                                            }, i)
                                        }));
                                        return function() {
                                            return i.apply(this, arguments)
                                        }
                                    }()
                                      , o = function() {
                                        var t = u()(a.a.mark(function t() {
                                            return a.a.wrap(function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        if ("function" != typeof n.onAfterAdd) {
                                                            t.next = 3;
                                                            break
                                                        }
                                                        return t.next = 3,
                                                        n.onAfterAdd(e);
                                                    case 3:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }, t)
                                        }));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }();
                                    i().then(r).then(o)
                                }
                            } else
                                this.addWaiting(e)
                        }
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I.USER_CLOSE;
                        return e instanceof Array ? this.removeNotices(e, t) : this.removeNotice(e, t)
                    }
                }, {
                    key: "removeNotices",
                    value: function(e, t) {
                        for (var n = 0; n < e.length; n++)
                            this.removeNotice(e[n], t)
                    }
                }, {
                    key: "removeNotice",
                    value: function(e, t) {
                        var n = this.getNoticeHash(e);
                        if (!n && e instanceof Object && e.collectionName) {
                            var i = this.getCollection(e.collectionName);
                            if (i && "function" == typeof i.setNotice) {
                                var r = i.setNotice && i.setNotice(e);
                                n = this.getNoticeHash(r)
                            }
                        }
                        if (n) {
                            var o, a = this.getCollection(n.collectionName);
                            if (a && (o = a.get(n.id)),
                            o) {
                                var s = this.counters.find(function(e) {
                                    return o && e.id === o.id
                                });
                                s && this.removeCounter(s)
                            }
                            o && a && a.remove(o.id),
                            this.removeNoticeHash(n),
                            t === I.USER_CLOSE && a && a.onClose && o && a.onClose(o),
                            t === I.TIME_IS_OVER && a && a.onTimeout && o && a.onTimeout(o)
                        }
                    }
                }, {
                    key: "setNoticeHash",
                    value: function(e) {
                        e && e.id && (this.noticeHash[e.id] = e)
                    }
                }, {
                    key: "getNoticeHash",
                    value: function(e) {
                        return e && "object" === v()(e) ? this.noticeHash[e.id] : "number" == typeof e || "string" == typeof e ? this.noticeHash[e] : void 0
                    }
                }, {
                    key: "removeNoticeHash",
                    value: function(e) {
                        e && "object" === v()(e) && delete this.noticeHash[e.id],
                        "number" != typeof e && "string" != typeof e || delete this.noticeHash[e]
                    }
                }, {
                    key: "startCounter",
                    value: function(e) {
                        var t = this
                          , n = {
                            id: e.id,
                            period: e.period || 0
                        };
                        n.disposer = Object(p.reaction)(function() {
                            return t.time
                        }, function() {
                            t.decrementCounter(n)
                        }),
                        this.counters.push(n)
                    }
                }, {
                    key: "decrementCounter",
                    value: function(e) {
                        var t = e.period;
                        if (e.period = t - 1,
                        e.period <= 0) {
                            var n = e.id;
                            this.remove(n, I.TIME_IS_OVER),
                            this.removeCounter(e)
                        }
                    }
                }, {
                    key: "removeCounter",
                    value: function(e) {
                        if (e && "object" === v()(e) && "function" == typeof e.disposer) {
                            e.disposer();
                            var t = this.counters.findIndex(function(t) {
                                return t.id === e.id
                            });
                            this.counters.splice(t, 1)
                        }
                    }
                }, {
                    key: "time",
                    get: function() {
                        return this.timeService ? this.timeService.serverTime : 0
                    }
                }]),
                e
            }();
            return w([p.computed], e.prototype, "time", null),
            e
        }()
          , L = function() {
            var e = function() {
                function e() {
                    l()(this, e),
                    this.isTurnedOn = !1,
                    this.players = {},
                    this.support = this.getSupport()
                }
                return d()(e, [{
                    key: "setItems",
                    value: function(e) {
                        var t = this;
                        this.clearItems(),
                        Object.keys(e).forEach(function(n) {
                            t.players[n] = t.createPlayer(),
                            t.players[n].src = e[n][t.support.format]
                        })
                    }
                }, {
                    key: "clearItems",
                    value: function() {
                        this.players = {}
                    }
                }, {
                    key: "play",
                    value: function(e) {
                        if (!this.isTurnedOn || !this.support.canPlay || !this.players[e])
                            return !1;
                        var t = this.players[e];
                        return t.currentTime = 0,
                        t.play().catch(function() {}),
                        !0
                    }
                }, {
                    key: "toggleSound",
                    value: function() {
                        return this.isTurnedOn = !this.isTurnedOn,
                        this.isTurnedOn
                    }
                }, {
                    key: "turnOffSound",
                    value: function() {
                        return this.isTurnedOn = !1,
                        this.isTurnedOn
                    }
                }, {
                    key: "turnOnSound",
                    value: function() {
                        return this.isTurnedOn = !0,
                        this.isTurnedOn
                    }
                }, {
                    key: "getSupport",
                    value: function() {
                        var e = this.createPlayer();
                        return "play"in e ? {
                            canPlay: !0,
                            format: e.canPlayType("audio/mpeg") ? "mp3" : "ogg"
                        } : {
                            canPlay: !1,
                            format: "mp3"
                        }
                    }
                }, {
                    key: "createPlayer",
                    value: function() {
                        return document.createElement("audio")
                    }
                }]),
                e
            }();
            return w([p.observable], e.prototype, "isTurnedOn", void 0),
            w([p.action], e.prototype, "toggleSound", null),
            w([p.action], e.prototype, "turnOffSound", null),
            w([p.action], e.prototype, "turnOnSound", null),
            e
        }()
          , M = (function() {
            var e = function() {
                function e() {
                    l()(this, e)
                }
                return d()(e, [{
                    key: "get",
                    value: function(e, t) {
                        try {
                            var n = this.getStorageData(e);
                            if (n[t])
                                return n[t]
                        } catch (e) {}
                    }
                }, {
                    key: "getAll",
                    value: function(e) {
                        try {
                            return Object.entries(this.getStorageData(e))
                        } catch (e) {}
                        return []
                    }
                }, {
                    key: "set",
                    value: function(e, t, n) {
                        try {
                            var i = this.getStorageData(e);
                            i[t] = n,
                            this.saveStorageData(e, i)
                        } catch (e) {
                            return {
                                type: "system",
                                message: e
                            }
                        }
                    }
                }, {
                    key: "delete",
                    value: function(e, t) {
                        try {
                            var n = this.getStorageData(e);
                            delete n[t],
                            this.saveStorageData(e, n)
                        } catch (e) {
                            return {
                                type: "system",
                                message: e
                            }
                        }
                    }
                }, {
                    key: "getStorageData",
                    value: function(e) {
                        var t = new RegExp("(?:^|; )".concat(e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1"), "=([^;]*)"))
                          , n = document.cookie.match(t) || [void 0, void 0]
                          , i = r()(n, 2)[1];
                        if (!i)
                            return {};
                        i = decodeURIComponent(i);
                        try {
                            return JSON.parse(i)
                        } catch (e) {}
                        return {}
                    }
                }, {
                    key: "saveStorageData",
                    value: function(t, n) {
                        var i = JSON.stringify(n);
                        if (i.length >= e.MAX_VALUE_SIZE)
                            return {
                                type: "memory_out",
                                message: "Size limit exceeded: ".concat(e.MAX_VALUE_SIZE, " bytes")
                            };
                        var r = new Date
                          , o = this.extractRootDomain();
                        r.setTime(r.getTime() + 66096e7);
                        var a = r.toUTCString();
                        document.cookie = "".concat(t, "=").concat(i, "; expires=").concat(a, "; path=/; domain=").concat(o)
                    }
                }, {
                    key: "extractRootDomain",
                    value: function() {
                        var e = window.location.hostname.split(".").reverse();
                        return 4 === e.length ? window.location.hostname : 0 === e.length ? "." : 1 === e.length ? ".".concat(e[0]) : ".".concat(e[1], ".").concat(e[0])
                    }
                }]),
                e
            }();
            e.MAX_VALUE_SIZE = 1256
        }(),
        function() {
            var e = function() {
                function e() {
                    l()(this, e)
                }
                return d()(e, [{
                    key: "get",
                    value: function(e, t) {
                        try {
                            var n = this.getStorageData(e);
                            if (n[t])
                                return n[t]
                        } catch (e) {}
                    }
                }, {
                    key: "getAll",
                    value: function(e) {
                        try {
                            return Object.entries(this.getStorageData(e))
                        } catch (e) {}
                        return []
                    }
                }, {
                    key: "set",
                    value: function(e, t, n) {
                        try {
                            var i = this.getStorageData(e);
                            return i[t] = n,
                            this.saveStorageData(e, i)
                        } catch (e) {
                            return {
                                type: "system",
                                message: e
                            }
                        }
                    }
                }, {
                    key: "delete",
                    value: function(e, t) {
                        try {
                            var n = this.getStorageData(e);
                            return delete n[t],
                            this.saveStorageData(e, n)
                        } catch (e) {
                            return {
                                type: "system",
                                message: e
                            }
                        }
                    }
                }, {
                    key: "getStorageData",
                    value: function(e) {
                        try {
                            var t = window.localStorage.getItem(e) || "{}";
                            return JSON.parse(t)
                        } catch (e) {}
                        return {}
                    }
                }, {
                    key: "saveStorageData",
                    value: function(t, n) {
                        var i = JSON.stringify(n);
                        if (i.length >= e.MAX_VALUE_SIZE)
                            return {
                                type: "memory_out",
                                message: "Size limit exceeded: ".concat(e.MAX_VALUE_SIZE, " bytes")
                            };
                        window.localStorage.setItem(t, i)
                    }
                }]),
                e
            }();
            return e.MAX_VALUE_SIZE = 524288,
            e
        }())
          , R = function() {
            var e = function() {
                function e() {
                    l()(this, e),
                    this.handleClose = this.handleClose.bind(this)
                }
                return d()(e, [{
                    key: "get",
                    value: function() {
                        var e = u()(a.a.mark(function e(t, n) {
                            var i;
                            return a.a.wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        this.getStorageData(t);
                                    case 3:
                                        if (!(i = e.sent)[n]) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", i[n]);
                                    case 6:
                                        e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8,
                                        e.t0 = e.catch(0);
                                    case 11:
                                        return e.abrupt("return", void 0);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e, this, [[0, 8]])
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getAll",
                    value: function() {
                        var e = u()(a.a.mark(function e(t) {
                            var n;
                            return a.a.wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        e.next = 3,
                                        this.getStorageData(t);
                                    case 3:
                                        return n = e.sent,
                                        e.abrupt("return", Object.entries(n));
                                    case 7:
                                        e.prev = 7,
                                        e.t0 = e.catch(0);
                                    case 10:
                                        return e.abrupt("return", []);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e, this, [[0, 7]])
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "set",
                    value: function() {
                        var t = u()(a.a.mark(function t(n, i, r) {
                            var o;
                            return a.a.wrap(function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                        t.next = 3,
                                        this.getDb(n);
                                    case 3:
                                        return o = t.sent,
                                        t.next = 6,
                                        new Promise(function(t, n) {
                                            var a = o.transaction([e.TABLE], "readwrite");
                                            a.onerror = function(t) {
                                                e.isIDBErrorEvent(t.target) && n(t.target.error),
                                                n(a.error)
                                            }
                                            ;
                                            var s = a.objectStore(e.TABLE)
                                              , u = s.get(e.ITEM_ID);
                                            u.onsuccess = function() {
                                                var t = u.result || {};
                                                t[i] = r,
                                                s.put(t, e.ITEM_ID)
                                            }
                                            ,
                                            a.oncomplete = function() {
                                                t()
                                            }
                                        }
                                        );
                                    case 6:
                                        t.next = 11;
                                        break;
                                    case 8:
                                        return t.prev = 8,
                                        t.t0 = t.catch(0),
                                        t.abrupt("return", {
                                            type: "system",
                                            message: t.t0
                                        });
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t, this, [[0, 8]])
                        }));
                        return function(e, n, i) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "delete",
                    value: function() {
                        var t = u()(a.a.mark(function t(n, i) {
                            var r;
                            return a.a.wrap(function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0,
                                        t.next = 3,
                                        this.getDb(n);
                                    case 3:
                                        return r = t.sent,
                                        t.next = 6,
                                        new Promise(function(t, n) {
                                            var o = r.transaction([e.TABLE], "readwrite");
                                            o.onerror = function(t) {
                                                e.isIDBErrorEvent(t.target) && n(t.target.error),
                                                n(o.error)
                                            }
                                            ;
                                            var a = o.objectStore(e.TABLE)
                                              , s = a.get(e.ITEM_ID);
                                            s.onsuccess = function() {
                                                var t = s.result || {};
                                                delete t[i],
                                                a.put(t, e.ITEM_ID)
                                            }
                                            ,
                                            o.oncomplete = function() {
                                                t()
                                            }
                                        }
                                        );
                                    case 6:
                                        t.next = 11;
                                        break;
                                    case 8:
                                        return t.prev = 8,
                                        t.t0 = t.catch(0),
                                        t.abrupt("return", {
                                            type: "system",
                                            message: t.t0
                                        });
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t, this, [[0, 8]])
                        }));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getStorageData",
                    value: function() {
                        var t = u()(a.a.mark(function t(n) {
                            var i;
                            return a.a.wrap(function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        this.getDb(n);
                                    case 2:
                                        return i = t.sent,
                                        t.abrupt("return", new Promise(function(t, n) {
                                            var r = i.transaction([e.TABLE], "readonly")
                                              , o = r.objectStore(e.TABLE).get(e.ITEM_ID);
                                            o.onsuccess = function() {
                                                var e = o.result;
                                                t(e || {})
                                            }
                                            ,
                                            o.onerror = function(t) {
                                                e.isIDBErrorEvent(t.target) && n(t.target.error),
                                                n(r.error)
                                            }
                                        }
                                        ));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                    }
                            }, t, this)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getDb",
                    value: function(t) {
                        var n = this;
                        return this.connection ? Promise.resolve(this.connection) : new Promise(function(i, r) {
                            var o = indexedDB.open(t, 1);
                            o.onupgradeneeded = function() {
                                o.result.createObjectStore(e.TABLE, {
                                    autoIncrement: !1
                                })
                            }
                            ,
                            o.onsuccess = function() {
                                n.connection = o.result,
                                n.connection.onclose = n.handleClose,
                                i(n.connection)
                            }
                            ,
                            o.onerror = function() {
                                r(o.error)
                            }
                        }
                        )
                    }
                }, {
                    key: "handleClose",
                    value: function(t) {
                        e.isIDBDatabaseCloseEvent(t) && this.connection === t.target && (this.connection.onclose = function() {}
                        ,
                        this.connection = void 0)
                    }
                }], [{
                    key: "isIDBErrorEvent",
                    value: function(e) {
                        return "object" === v()(e) && null !== e && "error"in e
                    }
                }, {
                    key: "isIDBDatabaseCloseEvent",
                    value: function(e) {
                        return "object" === v()(e) && null !== e && "target"in e
                    }
                }]),
                e
            }();
            return e.ITEM_ID = 1,
            e.TABLE = "core",
            e
        }()
          , j = function() {
            function e(t) {
                l()(this, e),
                this.namespace = t.namespace,
                this.defaultTtl = t.defaultTtl,
                this.backend = t.backend
            }
            return d()(e, [{
                key: "set",
                value: function(e, t, n) {
                    var i = {
                        v: t,
                        ea: (n = n || this.defaultTtl) ? Math.floor(Date.now() / 1e3) + n : null
                    };
                    return this.backend.set(this.namespace, e, i)
                }
            }, {
                key: "get",
                value: function() {
                    var e = u()(a.a.mark(function e(t) {
                        var n;
                        return a.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.backend.get(this.namespace, t);
                                case 2:
                                    if (void 0 !== (n = e.sent)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", void 0);
                                case 5:
                                    return e.next = 7,
                                    this.tryDeleteIfExpired(t, n);
                                case 7:
                                    if (!e.sent) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", void 0);
                                case 9:
                                    return e.abrupt("return", n.v);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAll",
                value: function() {
                    var e = u()(a.a.mark(function e() {
                        var t;
                        return a.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.backend.getAll(this.namespace);
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", t.map(function(e) {
                                        var t = r()(e, 2);
                                        return [t[0], t[1].v]
                                    }));
                                case 4:
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
                key: "delete",
                value: function(e) {
                    return this.backend.delete(this.namespace, e)
                }
            }, {
                key: "deleteExpired",
                value: function() {
                    var e = u()(a.a.mark(function e() {
                        var t, n;
                        return a.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.backend.getAll(this.namespace);
                                case 2:
                                    t = e.sent,
                                    n = 0;
                                case 4:
                                    if (!(n < t.length)) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 7,
                                    this.tryDeleteIfExpired(t[n][0], t[n][1]);
                                case 7:
                                    n += 1,
                                    e.next = 4;
                                    break;
                                case 10:
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
                key: "tryDeleteIfExpired",
                value: function() {
                    var e = u()(a.a.mark(function e(t, n) {
                        var i;
                        return a.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (i = Math.floor(Date.now() / 1e3),
                                    !(n.ea && i >= n.ea)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4,
                                    this.backend.delete(this.namespace, t);
                                case 4:
                                    return e.abrupt("return", !0);
                                case 5:
                                    return e.abrupt("return", !1);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }()
          , _ = function() {
            function e(t) {
                l()(this, e),
                this.namespace = t.namespace,
                this.defaultTtl = t.defaultTtl,
                this.backend = t.backend,
                this.deleteExpired()
            }
            return d()(e, [{
                key: "set",
                value: function(e, t, n) {
                    var i = {
                        v: t,
                        ea: (n = n || this.defaultTtl) ? Math.floor(Date.now() / 1e3) + n : null
                    };
                    return this.backend.set(this.namespace, e, i)
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = this.backend.get(this.namespace, e);
                    if (void 0 !== t && !this.tryDeleteIfExpired(e, t))
                        return t.v
                }
            }, {
                key: "getAll",
                value: function() {
                    return this.backend.getAll(this.namespace).map(function(e) {
                        var t = r()(e, 2);
                        return [t[0], t[1].v]
                    })
                }
            }, {
                key: "delete",
                value: function(e) {
                    return this.backend.delete(this.namespace, e)
                }
            }, {
                key: "deleteExpired",
                value: function() {
                    for (var e = this.backend.getAll(this.namespace), t = 0; t < e.length; t += 1)
                        this.tryDeleteIfExpired(e[t][0], e[t][1])
                }
            }, {
                key: "tryDeleteIfExpired",
                value: function(e, t) {
                    var n = Math.floor(Date.now() / 1e3);
                    return !!(t.ea && n >= t.ea) && (this.backend.delete(this.namespace, e),
                    !0)
                }
            }]),
            e
        }()
          , B = function() {
            var e = function() {
                function e() {
                    l()(this, e),
                    this.serverTime = Object(k.i)(Date.now()),
                    this.timeDelta = 0,
                    this.appClockTm = null,
                    this.serverTimeNotObservable = Object(k.i)(Date.now())
                }
                return d()(e, [{
                    key: "init",
                    value: function() {
                        var e = this;
                        this.appClock(),
                        this.dsService.onOpen(function() {
                            Object(k.Q)(1, e.dsService, e.calibrateTimeDelta.bind(e)),
                            e.initObservers()
                        })
                    }
                }, {
                    key: "initObservers",
                    value: function() {
                        var e = this
                          , t = Object(k.R)(1e3, 1e4);
                        Object(p.reaction)(function() {
                            return e.serverTimeMinutes
                        }, function() {
                            Object(k.Q)(1, e.dsService, e.calibrateTimeDelta.bind(e))
                        }, {
                            fireImmediately: !1,
                            delay: t
                        })
                    }
                }, {
                    key: "calibrateTimeDelta",
                    value: function(e) {
                        this.timeDelta = e,
                        this.appClock()
                    }
                }, {
                    key: "setServerTime",
                    value: function(e, t) {
                        (e && e > this.serverTime || t) && (this.serverTime = e,
                        this.serverTimeNotObservable = e,
                        this.timeDelta = Object(k.A)(e, new Date))
                    }
                }, {
                    key: "appClock",
                    value: function() {
                        var e = this;
                        this.appClockTm && window.clearInterval(this.appClockTm),
                        this.setServerTime(Object(k.i)(Date.now()) - this.timeDelta, !0),
                        this.appClockTm = window.setInterval(function() {
                            e.setServerTime(Object(k.i)(Date.now()) - e.timeDelta)
                        }, 500)
                    }
                }, {
                    key: "serverTimeMinutes",
                    get: function() {
                        return new Date(1e3 * this.serverTime).getMinutes()
                    }
                }, {
                    key: "todayDate",
                    get: function() {
                        return new Date(1e3 * this.serverTime).getDate()
                    }
                }]),
                e
            }();
            return w([p.observable], e.prototype, "serverTime", void 0),
            w([p.computed], e.prototype, "todayDate", null),
            e
        }()
          , H = function() {
            var e = function() {
                function e(t) {
                    var n = this;
                    l()(this, e),
                    this.orientationChangeTime = Date.now(),
                    this.wasFirstTouch = !1,
                    this.handleResize = Object(y.debounce)(function() {
                        Object(p.runInAction)(function() {
                            var e = window.innerHeight
                              , t = window.innerWidth;
                            n.windowHeight === e && n.windowWidth === t || (n.windowHeight = e,
                            n.windowWidth = t,
                            n.windowResizeStop = Date.now())
                        })
                    }, 300),
                    this.handleOrientationChange = function() {
                        n.orientationChangeTime = Date.now()
                    }
                    ,
                    this.handleVisibilityChange = function() {
                        n.documentVisible = !document.hidden,
                        document.hidden ? n.documentHidingTime = Math.floor(Date.now() / 1e3) : n.documentVisibilityTime = Math.floor(Date.now() / 1e3)
                    }
                    ,
                    this.handleFirstTouch = function() {
                        n.wasFirstTouch = !0,
                        window.removeEventListener("touchstart", n.handleFirstTouch, !0)
                    }
                    ,
                    this.windowWidth = window.innerWidth,
                    this.windowHeight = window.innerHeight,
                    this.documentVisible = !document.hidden,
                    this.documentVisibilityTime = Math.floor(+new Date / 1e3),
                    this.theme = t
                }
                return d()(e, [{
                    key: "addListeners",
                    value: function() {
                        window.addEventListener("resize", this.handleResize),
                        document.addEventListener("visibilitychange", this.handleVisibilityChange),
                        window.addEventListener("orientationchange", this.handleOrientationChange),
                        window.addEventListener("touchstart", this.handleFirstTouch, !0)
                    }
                }, {
                    key: "onStop",
                    value: function() {
                        window.removeEventListener("resize", this.handleResize),
                        document.removeEventListener("visibilitychange", this.handleVisibilityChange),
                        window.removeEventListener("orientationchange", this.handleOrientationChange),
                        window.removeEventListener("touchstart", this.handleFirstTouch, !0)
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.windowResize = Date.now()
                    }
                }, {
                    key: "onResizeStop",
                    value: function() {
                        this.windowResizeStop = Date.now()
                    }
                }, {
                    key: "setTheme",
                    value: function(e) {
                        this.theme = e
                    }
                }, {
                    key: "scrollTop",
                    value: function() {
                        document.body.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                }, {
                    key: "addBodyClass",
                    value: function(e) {
                        e && document.body.classList.add(e)
                    }
                }, {
                    key: "removeBodyClass",
                    value: function(e) {
                        e && document.body.classList.remove(e)
                    }
                }, {
                    key: "triggerLayoutResize",
                    value: function() {
                        this.layoutResize = Date.now()
                    }
                }]),
                e
            }();
            return w([p.observable], e.prototype, "windowWidth", void 0),
            w([p.observable], e.prototype, "windowHeight", void 0),
            w([p.observable], e.prototype, "windowResize", void 0),
            w([p.observable], e.prototype, "windowResizeStop", void 0),
            w([p.observable], e.prototype, "layoutResize", void 0),
            w([p.observable], e.prototype, "documentVisible", void 0),
            w([p.observable], e.prototype, "documentVisibilityTime", void 0),
            w([p.observable], e.prototype, "documentHidingTime", void 0),
            w([p.observable], e.prototype, "orientationChangeTime", void 0),
            w([p.observable], e.prototype, "wasFirstTouch", void 0),
            w([p.observable], e.prototype, "theme", void 0),
            w([p.action], e.prototype, "onResize", null),
            w([p.action], e.prototype, "onResizeStop", null),
            w([p.action], e.prototype, "setTheme", null),
            w([p.action], e.prototype, "scrollTop", null),
            w([p.action], e.prototype, "addBodyClass", null),
            w([p.action], e.prototype, "removeBodyClass", null),
            w([p.action], e.prototype, "triggerLayoutResize", null),
            e
        }()
    }
}]);
