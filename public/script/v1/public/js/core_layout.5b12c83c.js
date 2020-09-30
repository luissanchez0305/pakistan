(window.webpackJsonp = window.webpackJsonp || []).push([[12], {
    nKTo: function(e, t, n) {},
    "tu/2": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return H
        }),
        n.d(t, "b", function() {
            return D
        }),
        n.d(t, "c", function() {
            return B
        }),
        n.d(t, "d", function() {
            return F
        });
        var a = n("OvAC")
          , i = n.n(a)
          , o = n("T1e2")
          , r = n.n(o)
          , c = n("RiSW")
          , s = n.n(c)
          , l = n("K4DB")
          , p = n.n(l)
          , d = n("+IV6")
          , h = n.n(d)
          , u = n("eef+")
          , v = n.n(u)
          , m = n("SDJZ")
          , f = n.n(m)
          , b = n("NToG")
          , _ = n.n(b)
          , y = n("e+GP")
          , g = n.n(y)
          , k = n("cneo")
          , O = n("mXGw")
          , S = n("mBK0")
          , w = n("6cnl")
          , E = n("7QWs")
          , I = n("8Jek")
          , C = n.n(I)
          , j = n("YTIe")
          , N = n("cUhM");
        function T(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function M(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? T(Object(n), !0).forEach(function(t) {
                    i()(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function x(e, t, n, a) {
            var i, o = arguments.length, r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, n) : a;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, n, a);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    (i = e[c]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, n, r) : i(t, n)) || r);
            return o > 3 && r && Object.defineProperty(t, n, r),
            r
        }
        var B = function() {
            var e = function() {
                function e(t) {
                    var n, a;
                    f()(this, e),
                    this.isOpen = !1,
                    this.stackChangeState = {
                        itemsCount: 0,
                        lastScopeId: null,
                        lastItemId: null
                    },
                    this.changeStackListeners = [];
                    var i = {}
                      , o = {};
                    for (n in t) {
                        a || (a = n);
                        var r = void 0;
                        if (t[n].items.forEach(function(e) {
                            if (o[e.id])
                                throw new Error('Found duplicate item with id "'.concat(e.id, '" and scope "').concat(o[e.id].scopeId, '" in scope "').concat(n, '"'));
                            o[e.id] = {
                                scopeId: n,
                                value: e
                            },
                            e.id === t[n].rootId && (r = e)
                        }),
                        !r)
                            throw new Error('Not found root item with id "'.concat(t[n].rootId, '" in scope ').concat(n));
                        i[n] = {
                            id: n,
                            stack: [r],
                            get activeItem() {
                                return this.stack.length ? this.stack[this.stack.length - 1] : void 0
                            }
                        }
                    }
                    if (!a)
                        throw new Error("Not found scopes in params");
                    this.scopes = i,
                    this.items = o,
                    this.setActiveScope(a),
                    this.updateStackChangeState()
                }
                return _()(e, [{
                    key: "openById",
                    value: function(e) {
                        var t = this.items[e];
                        if (!t)
                            return !1;
                        this.scope.id !== t.scopeId && this.setActiveScope(t.scopeId);
                        var n = this.scope.stack.findIndex(function(t) {
                            return t.id === e
                        });
                        return this.scope.activeItem && this.scope.activeItem.id === e || (-1 !== n ? this.scope.stack.splice(n + 1) : this.scope.stack.push(t.value)),
                        this.onStackLengthChange(this.scope.stack.length),
                        this.isOpen = !0,
                        !0
                    }
                }, {
                    key: "openByItem",
                    value: function(e) {
                        this.scope.activeItem && this.scope.activeItem.id === e.id || (this.scope.stack.push(e),
                        this.onStackLengthChange(this.scope.stack.length)),
                        this.isOpen = !0
                    }
                }, {
                    key: "openByScopeId",
                    value: function(e) {
                        this.scope.id !== e && this.setActiveScope(e),
                        this.onStackLengthChange(this.scope.stack.length),
                        this.isOpen = !0
                    }
                }, {
                    key: "openLast",
                    value: function() {
                        this.isOpen = !0
                    }
                }, {
                    key: "toggle",
                    value: function(e) {
                        this.scope.activeItem && this.scope.activeItem.id === e ? this.isOpen = !this.isOpen : this.openById(e)
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen = !1
                    }
                }, {
                    key: "back",
                    value: function() {
                        this.scope.stack.length > 1 && (this.scope.stack.pop(),
                        this.onStackLengthChange(this.scope.stack.length))
                    }
                }, {
                    key: "onStackChange",
                    value: function(e) {
                        var t = this;
                        return this.changeStackListeners.push(e),
                        function() {
                            t.changeStackListeners = t.changeStackListeners.filter(function(t) {
                                return t !== e
                            })
                        }
                    }
                }, {
                    key: "setActiveScope",
                    value: function(e) {
                        this.scopes[e] && Object(k.set)(this, "scope", this.scopes[e])
                    }
                }, {
                    key: "onStackLengthChange",
                    value: function(e) {
                        var t, n = this;
                        t = this.stackChangeState.lastScopeId !== this.scope.id ? "forward" : e < this.stackChangeState.itemsCount ? "backward" : "forward";
                        var a = this.scope.activeItem ? this.scope.activeItem.id : null;
                        this.changeStackListeners.forEach(function(e) {
                            e(n.stackChangeState.lastItemId, a, t)
                        }),
                        this.updateStackChangeState()
                    }
                }, {
                    key: "updateStackChangeState",
                    value: function() {
                        this.stackChangeState.itemsCount = this.scope.stack.length,
                        this.stackChangeState.lastScopeId = this.scope.id,
                        this.stackChangeState.lastItemId = this.scope.activeItem ? this.scope.activeItem.id : null
                    }
                }]),
                e
            }();
            return x([k.observable], e.prototype, "isOpen", void 0),
            x([k.observable], e.prototype, "scope", void 0),
            x([k.observable], e.prototype, "scopes", void 0),
            x([k.action], e.prototype, "openById", null),
            x([k.action], e.prototype, "openByItem", null),
            x([k.action], e.prototype, "openByScopeId", null),
            x([k.action], e.prototype, "openLast", null),
            x([k.action], e.prototype, "toggle", null),
            x([k.action], e.prototype, "close", null),
            x([k.action], e.prototype, "back", null),
            x([k.action], e.prototype, "onStackLengthChange", null),
            e
        }()
          , L = function(e) {
            function t() {
                var e;
                return f()(this, t),
                (e = p()(this, h()(t).apply(this, arguments))).state = {
                    shouldRender: e.props.isMounted
                },
                e
            }
            return v()(t, e),
            _()(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    e.isMounted && !this.props.isMounted ? this.startDelayUnmount() : !e.isMounted && this.props.isMounted && (this.stopDelayUnmount(),
                    this.setState({
                        shouldRender: !0
                    }))
                }
            }, {
                key: "startDelayUnmount",
                value: function() {
                    var e = this;
                    this.stopDelayUnmount(),
                    this.timeoutId = window.setTimeout(function() {
                        return e.setState({
                            shouldRender: !1
                        })
                    }, this.props.delay)
                }
            }, {
                key: "stopDelayUnmount",
                value: function() {
                    void 0 !== this.timeoutId && (window.clearTimeout(this.timeoutId),
                    this.timeoutId = void 0)
                }
            }, {
                key: "render",
                value: function() {
                    return this.state.shouldRender ? this.props.children : null
                }
            }]),
            t
        }(O.Component)
          , A = {
            slideLeft: {
                appear: "cor-slide-left_state_appear",
                appearActive: "cor-slide-left_state_appear-active",
                enter: "cor-slide-left_state_enter",
                enterActive: "cor-slide-left_state_enter-active",
                exit: "cor-slide-left_state_exit-active",
                exitActive: "cor-slide-left_state_exit-active"
            },
            slideRight: {
                appear: "cor-slide-right_state_appear",
                appearActive: "cor-slide-right_state_appear-active",
                enter: "cor-slide-right_state_enter",
                enterActive: "cor-slide-right_state_enter-active",
                exit: "cor-slide-right_state_exit-active",
                exitActive: "cor-slide-right_state_exit-active"
            },
            navigationSlideLeft: {
                appear: "cor-panel-nav-slide-left_state_appear",
                appearActive: "cor-panel-nav-slide-left_state_appear-active",
                enter: "cor-panel-nav-slide-left_state_enter",
                enterActive: "cor-panel-nav-slide-left_state_enter-active",
                exit: "cor-panel-nav-slide-left_state_exit-active",
                exitActive: "cor-panel-nav-slide-left_state_exit-active"
            },
            navigationSlideRight: {
                appear: "cor-panel-nav-slide-right_state_appear",
                appearActive: "cor-panel-nav-slide-right_state_appear-active",
                enter: "cor-panel-nav-slide-right_state_enter",
                enterActive: "cor-panel-nav-slide-right_state_enter-active",
                exit: "cor-panel-nav-slide-right_state_exit-active",
                exitActive: "cor-panel-nav-slide-right_state_exit-active"
            },
            navigationSlideBottom: {
                appear: "cor-panel-nav-slide-top_state_appear",
                appearActive: "cor-panel-nav-slide-top_state_appear-active",
                enter: "cor-panel-nav-slide-top_state_enter",
                enterActive: "cor-panel-nav-slide-top_state_enter-active",
                exit: "cor-panel-nav-slide-top_state_exit-active",
                exitActive: "cor-panel-nav-slide-top_state_exit-active"
            },
            navigationSlideTop: {
                appear: "cor-panel-nav-slide-bottom_state_appear",
                appearActive: "cor-panel-nav-slide-bottom_state_appear-active",
                enter: "cor-panel-nav-slide-bottom_state_enter",
                enterActive: "cor-panel-nav-slide-bottom_state_enter-active",
                exit: "cor-panel-nav-slide-bottom_state_exit-active",
                exitActive: "cor-panel-nav-slide-bottom_state_exit-active"
            },
            duration: 250
        }
          , D = function(e) {
            return Object(O.createElement)("div", {
                className: C()("cor-w-panel-c-header", e.className),
                style: e.style
            }, e.children)
        };
        D.Left = Object(S.observer)(function(e) {
            var t = e.children
              , n = e.className
              , a = t({
                className: C()("cor-w-panel-c-header__left", n)
            });
            return Object(O.createElement)(w.a, {
                in: !!a,
                timeout: A.duration,
                classNames: A.slideLeft,
                appear: !0,
                unmountOnExit: !0
            }, Object(O.createElement)("div", null, a))
        }),
        D.Center = Object(S.observer)(function(e) {
            var t = e.children;
            return Object(O.createElement)("div", {
                className: "cor-w-panel-c-header__center"
            }, t({
                className: "cor-w-panel-c-header__center-inner"
            }))
        }),
        D.Right = Object(S.observer)(function(e) {
            var t = e.children
              , n = e.className;
            return Object(O.createElement)(O.Fragment, null, t({
                className: C()("cor-w-panel-c-header__right", n)
            }))
        });
        var R = function(e) {
            var t = e.className
              , n = e.children
              , a = s()(e, ["className", "children"]);
            return Object(O.createElement)(N.c, Object.assign({
                className: C()("cor-w-panel-c-header-action", t)
            }, a), n)
        }
          , F = function(e) {
            return Object(O.createElement)("h3", {
                className: C()("cor-w-panel-c-title", "cor-w-panel-c-title_size_".concat(e.size), e.isClipped && "cor-w-panel-c-title_clipped", e.className)
            }, e.children)
        };
        var U = function() {
            var e = function(e) {
                function t(e) {
                    var n;
                    return f()(this, t),
                    (n = p()(this, h()(t).call(this, e))).ref = Object(O.createRef)(),
                    n.handleScroll = n.handleScroll.bind(r()(n)),
                    n.handleScroll = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100
                          , n = arguments.length > 2 ? arguments[2] : void 0
                          , a = !1
                          , i = null;
                        return function o() {
                            a ? i = arguments : (e.apply(this, arguments),
                            a = !0,
                            window.setTimeout(function() {
                                a = !1,
                                i && (o.apply(n, i),
                                i = null)
                            }, t))
                        }
                    }(n.handleScroll, 150),
                    n.getScrollState = n.getScrollState.bind(r()(n)),
                    n.scrollToElement = n.scrollToElement.bind(r()(n)),
                    n.scroll = {
                        getState: n.getScrollState,
                        toElement: n.scrollToElement
                    },
                    n
                }
                return v()(t, e),
                _()(t, [{
                    key: "getScrollState",
                    value: function() {
                        var e = this.ref.current
                          , n = t.DEFAULT_SCROLL_STATE;
                        return e && (n.top = e.scrollTop,
                        n.height = e.scrollHeight,
                        n.rect = e.getBoundingClientRect()),
                        n
                    }
                }, {
                    key: "scrollToElement",
                    value: function(e, t, n, a) {
                        var i = this.getScrollState()
                          , o = i.height - i.rect.height
                          , r = e.top + i.top;
                        switch (n) {
                        case "center":
                            r -= i.rect.height / 2
                        }
                        switch (t) {
                        case "center":
                            r += e.height / 2
                        }
                        r < 0 && (r = 0),
                        r > o && (r = o),
                        this.scrollTo(Math.floor(r), a)
                    }
                }, {
                    key: "scrollTo",
                    value: function(e, t) {
                        this.stopRestoreScrollFromMemory();
                        var n = this.ref.current;
                        n && "function" == typeof n.scrollTo && n.scrollTo({
                            top: e,
                            behavior: t
                        })
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this.ref.current;
                        e && (this.startRestoreScrollFromMemory(this.props.scrollMemoryId),
                        e.addEventListener("scroll", this.handleScroll),
                        this.props.onMount && this.props.onMount(e))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.ref.current && this.ref.current.removeEventListener("scroll", this.handleScroll)
                    }
                }, {
                    key: "updateScrollInMemory",
                    value: function(e) {
                        this.ref.current && (t.scrollTopMemory.items[e] = this.ref.current.scrollTop)
                    }
                }, {
                    key: "startRestoreScrollFromMemory",
                    value: function(e) {
                        var n = this;
                        this.stopRestoreScrollFromMemory();
                        var a = t.scrollTopMemory.items[e];
                        a && (t.scrollTopMemory.timeoutId = window.setTimeout(function() {
                            n.scrollTo(a, "auto")
                        }, 0))
                    }
                }, {
                    key: "stopRestoreScrollFromMemory",
                    value: function() {
                        t.scrollTopMemory.timeoutId && (window.clearTimeout(t.scrollTopMemory.timeoutId),
                        t.scrollTopMemory.timeoutId = void 0)
                    }
                }, {
                    key: "handleScroll",
                    value: function() {
                        this.updateScrollInMemory(this.props.scrollMemoryId)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props
                          , n = e.children
                          , a = e.className;
                        return Object(O.createElement)("div", {
                            ref: this.ref,
                            className: C()("cor-w-panel-c-content", a)
                        }, Object(O.createElement)(t.Context.Provider, {
                            value: this.scroll
                        }, n))
                    }
                }]),
                t
            }(O.Component);
            return e.Context = Object(O.createContext)({
                getState: function() {
                    return M({}, e.DEFAULT_SCROLL_STATE)
                },
                toElement: function() {}
            }),
            e.DEFAULT_SCROLL_STATE = {
                top: 0,
                height: 0,
                rect: {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0
                }
            },
            e.scrollTopMemory = {
                items: {}
            },
            e
        }()
          , P = function() {
            var e = function() {
                function e() {
                    f()(this, e),
                    this.isVisible = !1,
                    this.titleElement = null,
                    this.isSupported = "IntersectionObserver"in window && "IntersectionObserverEntry"in window,
                    this.handleEntriesChange = this.handleEntriesChange.bind(this)
                }
                return _()(e, [{
                    key: "onUpdate",
                    value: function(e, t) {
                        if (this.clear(),
                        e && (this.titleElement = e.querySelector(t),
                        this.isSupported && this.titleElement)) {
                            var n = {
                                root: e,
                                rootMargin: "0px",
                                threshold: .05
                            };
                            this.titleIntersectionObserver = new IntersectionObserver(this.handleEntriesChange,n),
                            this.titleIntersectionObserver.observe(this.titleElement)
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.isVisible = !1,
                        this.titleIntersectionObserver && (this.titleIntersectionObserver.disconnect(),
                        this.titleIntersectionObserver = void 0),
                        this.titleElement && (this.titleElement = null)
                    }
                }, {
                    key: "handleEntriesChange",
                    value: function(e) {
                        var t = this;
                        this.titleElement && e.forEach(function(e) {
                            e.target === t.titleElement && (t.isVisible = !e.isIntersecting)
                        })
                    }
                }]),
                e
            }();
            return x([k.observable], e.prototype, "isVisible", void 0),
            x([k.action], e.prototype, "clear", null),
            x([k.action], e.prototype, "handleEntriesChange", null),
            e
        }()
          , H = function() {
            var e, t = e = function(t) {
                function n(e) {
                    var t;
                    return f()(this, n),
                    (t = p()(this, h()(n).call(this, e))).changeDirection = "forward",
                    t.isNested = Object(k.computed)(function() {
                        return t.props.panelService.scope.stack.length > 1
                    }),
                    t.headerState = new P,
                    t.disposers = [],
                    t.handleStackChange = t.handleStackChange.bind(r()(t)),
                    t.handleContentMount = t.handleContentMount.bind(r()(t)),
                    t.handleClose = t.handleClose.bind(r()(t)),
                    t.handleOpen = t.handleOpen.bind(r()(t)),
                    t.handleOpenById = t.handleOpenById.bind(r()(t)),
                    t.handleBack = t.handleBack.bind(r()(t)),
                    t.childFactory = t.childFactory.bind(r()(t)),
                    t
                }
                return v()(n, t),
                _()(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.panelService.onStackChange(this.handleStackChange)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.disposers.forEach(function(e) {
                            return e()
                        }),
                        this.disposers = []
                    }
                }, {
                    key: "handleContentMount",
                    value: function(t) {
                        this.headerState.onUpdate(t, "#".concat(e.CONTENT_TITLE_ID))
                    }
                }, {
                    key: "handleStackChange",
                    value: function(e, t, n) {
                        switch (this.changeDirection = n,
                        n) {
                        case "backward":
                            this.props.onBack && this.props.onBack(e, t);
                            break;
                        case "forward":
                            this.props.onForward && this.props.onForward(e, t)
                        }
                    }
                }, {
                    key: "handleClose",
                    value: function() {
                        var e = this.props.panelService;
                        e.close(),
                        this.props.onClose && this.props.onClose(e.scope.activeItem ? e.scope.activeItem.id : null)
                    }
                }, {
                    key: "handleOpen",
                    value: function(e) {
                        this.props.panelService.openByItem(e)
                    }
                }, {
                    key: "handleOpenById",
                    value: function(e) {
                        this.props.panelService.openById(e)
                    }
                }, {
                    key: "handleBack",
                    value: function() {
                        this.props.panelService.back()
                    }
                }, {
                    key: "childFactory",
                    value: function(e) {
                        var t;
                        switch (this.changeDirection) {
                        case "forward":
                            t = "bottom" === this.props.animation ? A.navigationSlideTop : A.navigationSlideRight;
                            break;
                        case "backward":
                            t = "bottom" === this.props.animation ? A.navigationSlideBottom : A.navigationSlideLeft
                        }
                        return Object(O.cloneElement)(e, {
                            classNames: t
                        })
                    }
                }, {
                    key: "renderHeader",
                    value: function(e, t, n) {
                        var a = this;
                        return Object(O.createElement)(S.Observer, null, function() {
                            return Object(O.createElement)(D, {
                                className: "cor-w-panel__header",
                                style: n
                            }, !e.isControlsDisabled && !e.isBackDisabled && Object(O.createElement)(D.Left, {
                                className: "cor-w-panel__header-back"
                            }, function(e) {
                                return a.isNested.get() && Object(O.createElement)(R, {
                                    className: e.className,
                                    onClick: a.handleBack,
                                    "data-test": "cor-w-panel-back"
                                }, Object(O.createElement)(j.n, null))
                            }), Object(O.createElement)(D.Center, null, function(t) {
                                return e.renderHeader ? e.renderHeader({
                                    className: t.className
                                }) : Object(O.createElement)("div", {
                                    className: C()("cor-w-panel__header-center", t.className)
                                }, Object(O.createElement)(F, {
                                    key: e.id,
                                    className: C()("cor-w-panel__header-title", {
                                        "cor-w-panel__header-title_nested": a.isNested.get(),
                                        "cor-w-panel__header-title_visible": !a.isNested.get() || a.headerState.isVisible
                                    }),
                                    size: a.isNested.get() ? "small" : "medium",
                                    isClipped: !0
                                }, Object(O.createElement)("span", null, e.title)), e.renderHeaderActions && Object(O.createElement)("div", {
                                    className: "cor-w-panel__header-actions"
                                }, e.renderHeaderActions({
                                    onOpen: a.handleOpen,
                                    onBack: a.handleBack,
                                    onClose: a.handleClose,
                                    onOpenById: a.handleOpenById
                                })))
                            }), !e.isControlsDisabled && !t && !e.isCloseDisabled && Object(O.createElement)(D.Right, {
                                className: "cor-w-panel__header-close"
                            }, function(e) {
                                return Object(O.createElement)(R, {
                                    className: e.className,
                                    onClick: a.handleClose,
                                    "data-test": "cor-w-panel-close"
                                }, Object(O.createElement)(j.x, null))
                            }))
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this
                          , n = this.props
                          , a = n.type
                          , i = n.animation
                          , o = n.panelService
                          , r = n.style
                          , c = n.className
                          , l = (n.onBack,
                        n.onForward,
                        n.onClose,
                        n.isStandalone)
                          , p = void 0 !== l && l
                          , d = s()(n, ["type", "animation", "panelService", "style", "className", "onBack", "onForward", "onClose", "isStandalone"])
                          , h = e.computeWidth(a, r)
                          , u = {};
                        return r && (u.backgroundColor = r.backgroundColor),
                        Object(O.createElement)("div", Object.assign({
                            className: C()("cor-w-panel", o.isOpen && "cor-w-panel_opened", "cor-w-panel_type_".concat(a), "cor-w-panel_animation_".concat(i), c),
                            style: M({}, u, {
                                maxWidth: "embedded" !== a || o.isOpen ? h : 0
                            })
                        }, d), Object(O.createElement)(L, {
                            isMounted: o.isOpen,
                            delay: A.duration
                        }, Object(O.createElement)(S.Observer, null, function() {
                            var n = o.scope.activeItem;
                            if (!n)
                                return null;
                            var i = n.renderHeaderImage && n.renderHeaderImage();
                            return Object(O.createElement)("div", {
                                className: "cor-w-panel__container",
                                "data-test": "cor-w-panel-".concat(n.id),
                                style: {
                                    width: "embedded" === a ? h : "100%"
                                }
                            }, t.renderHeader(n, p, u), Object(O.createElement)(E.a, {
                                childFactory: t.childFactory,
                                className: "cor-w-panel__transition-group"
                            }, Object(O.createElement)(w.a, {
                                key: n.id,
                                timeout: A.duration
                            }, Object(O.createElement)(U, {
                                scrollMemoryId: n.id,
                                className: "cor-w-panel__scroll-wrapper",
                                onMount: t.handleContentMount
                            }, i && Object(O.createElement)("div", {
                                className: "cor-w-panel__content-image"
                            }, i), Object(O.createElement)("div", {
                                className: C()("cor-w-panel__content-wrapper", i && "cor-w-panel__content-wrapper_has_image"),
                                style: u
                            }, n.title && t.isNested.get() && Object(O.createElement)("div", {
                                id: e.CONTENT_TITLE_ID,
                                className: "cor-w-panel__content-title"
                            }, Object(O.createElement)(F, {
                                size: "medium"
                            }, n.title)), Object(O.createElement)(U.Context.Consumer, null, function(e) {
                                return Object(O.createElement)(n.component, {
                                    scroll: e,
                                    className: "cor-w-panel__content-inner",
                                    onOpen: t.handleOpen,
                                    onBack: t.handleBack,
                                    onClose: t.handleClose,
                                    onOpenById: t.handleOpenById
                                })
                            }))))))
                        })))
                    }
                }], [{
                    key: "computeWidth",
                    value: function(e, t) {
                        var n;
                        return t && t.width && (n = t.width),
                        n || (n = "embedded" === e ? "320px" : "100%"),
                        n
                    }
                }]),
                n
            }(O.Component);
            return t.CONTENT_TITLE_ID = "cor-w-panel-content-title",
            x([k.observable], t.prototype, "changeDirection", void 0),
            x([k.action], t.prototype, "handleStackChange", null),
            t = e = x([S.observer], t)
        }();
        n("nKTo")
    }
}]);
