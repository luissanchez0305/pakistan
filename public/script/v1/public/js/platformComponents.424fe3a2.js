(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        "+/qX": function (e, t, a) {},
        "+NPr": function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("qIEf"),
                h = a.n(m),
                f = (a("DIcX"), a("mXGw")),
                v = a.n(f),
                g = a("deTv"),
                E = a("BK8K"),
                _ = a("W+wE"),
                b = a("f6l3"),
                C = a("8VmE"),
                y = a.n(C),
                w = a("S6YD"),
                k = function (e) {
                    return v.a.createElement(
                        "svg",
                        y()({ xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 ".concat(w.a.WIDTH, " ").concat(w.a.HEIGHT), width: w.a.WIDTH, height: w.a.HEIGHT }, e),
                        v.a.createElement("path", {
                            d:
                                "M16 6h2.5A1.5 1.5 0 0 1 20 7.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H8V3.5a.5.5 0 0 1 1 0V6h6V3.5a.5.5 0 1 1 1 0V6zM5 11v7.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V11H5zm0-1h14V7.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5V10z",
                        })
                    );
                },
                T = a("4DBZ");
            a.d(t, "a", function () {
                return N;
            });
            var N = (function (e) {
                function t() {
                    var e, a;
                    r()(this, t);
                    for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                    return (
                        ((a = s()(this, (e = u()(t)).call.apply(e, [this].concat(i)))).showCalendar = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = h()(document.activeElement);
                            t.is(".hasDatepicker") && t.datepicker(e ? "show" : "hide");
                        }),
                        a
                    );
                }
                return (
                    p()(t, e),
                    c()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.bindCalendar(), _.a.on("windowResize", this.showCalendar, this), _.a.on("windowResizeStop", this.showCalendar, this);
                            },
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function (e) {
                                return this.props.date !== e.date || this.props.minDate !== e.minDate || this.props.maxDate !== e.maxDate;
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.unbindCalendar(), this.bindCalendar();
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                _.a.off(null, null, this), this.unbindCalendar();
                            },
                        },
                        {
                            key: "bindCalendar",
                            value: function () {
                                var e = this;
                                try {
                                    this.$input.datepicker({
                                        dateFormat: "dd.mm.yy",
                                        defaultDate: new Date(1e3 * this.props.date),
                                        prevText: this.props.prevText || g.g.formatMessage(T.a.datepicker_prev),
                                        nextText: this.props.nextText || g.g.formatMessage(T.a.datepicker_next),
                                        monthNames: (this.props.monthNames || g.g.formatMessage(T.a.datepicker_months)).split(","),
                                        monthNamesShort: (this.props.monthNamesShort || g.g.formatMessage(T.a.datepicker_months_short)).split(","),
                                        dayNames: (this.props.dayNames || g.g.formatMessage(T.a.datepicker_days)).split(","),
                                        dayNamesMin: (this.props.dayNamesMin || g.g.formatMessage(T.a.datepicker_days_short)).split(","),
                                        firstDay: 1,
                                        showOtherMonths: !0,
                                        selectOtherMonths: !0,
                                        changeYear: !0,
                                        yearRange: "-100:+0",
                                        minDate: new Date(1e3 * this.props.minDate),
                                        maxDate: new Date(1e3 * this.props.maxDate),
                                        beforeShow: function (e, t) {
                                            t.dpDiv.css({ marginTop: "".concat(5, "px"), marginLeft: "".concat(-1, "px") });
                                        },
                                        onSelect: function (t) {
                                            e.props.prepareDate ? e.props.onSelect(Object(b.i)(new Date(t.replace(/(\d+)\.(\d+)\.(\d+)/g, "$3-$2-$1")))) : e.props.onSelect(t);
                                        },
                                    });
                                } catch (e) {}
                            },
                        },
                        {
                            key: "unbindCalendar",
                            value: function () {
                                this.$input.off("click"), this.$input.datepicker("destroy");
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this;
                                return v.a.createElement(
                                    "div",
                                    { className: "datepicker-input" },
                                    v.a.createElement(k, { className: "svg" }),
                                    v.a.createElement("input", {
                                        ref: function (t) {
                                            e.$input = h()(t);
                                        },
                                        value: Object(E.l)(1e3 * this.props.date, "d.m.Y"),
                                        readOnly: this.props.readOnly,
                                        "data-test": this.props.dataTest || "filter-date-to",
                                    })
                                );
                            },
                        },
                    ]),
                    t
                );
            })(f.Component);
            N.defaultProps = {
                date: Math.floor(new Date().getTime() / 1e3),
                minDate: Math.floor((new Date().getTime() - 31536e6) / 1e3),
                maxDate: Math.floor(new Date().getTime() / 1e3),
                onSelect: function () {},
                readOnly: !0,
                prepareDate: !0,
            };
        },
        "+fHS": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-bdix.82778b32.svg";
        },
        "+fhu": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-eurnzd.7f5e7d23.svg";
        },
        "//a/": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return i;
            });
            var n = ["pay42"],
                r = ["bank_transfers"];
            function i(e) {
                var t = e.aggregator,
                    a = e.name;
                return n.includes(t) || r.includes(a);
            }
        },
        "/2aN": function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n);
            t.a = function (e) {
                return r.a.createElement("div", { className: "cb-filter" }, e.children);
            };
        },
        "/CO1": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw");
            t.a = function (e) {
                return i.createElement(
                    "svg",
                    r()({ viewBox: "0 0 24 24", width: 24, height: 24, fill: "currentColor" }, e),
                    i.createElement("path", { d: "M12 2a10 10 0 0 0-7 17 10 10 0 1 0 7-17zm0 1a9 9 0 0 1 6.4 15.4A9 9 0 1 1 12 3zm4.2 4.4h-.1l-10.2 4-.2.2c0 .2 0 .4.3.4l3.9 1.3c.4.1.6.4.8.8l1.2 3.9.2.2c.2 0 .4 0 .5-.2l4-10.1v-.3l-.4-.2z" })
                );
            };
        },
        "/OfW": function (e, t, a) {},
        "/P6O": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M12 7C11.0111 7 10.0444 7.29324 9.22215 7.84265C8.39991 8.39206 7.75904 9.17295 7.3806 10.0866C7.00217 11.0002 6.90315 12.0055 7.09608 12.9755C7.289 13.9454 7.76521 14.8363 8.46447 15.5355C9.16373 16.2348 10.0546 16.711 11.0245 16.9039C11.9945 17.0969 12.9998 16.9978 13.9134 16.6194C14.827 16.241 15.6079 15.6001 16.1573 14.7778C16.7068 13.9556 17 12.9889 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7V7ZM12 14.64L11.951 14.65H11.851C11.821 14.644 11.791 14.639 11.762 14.631C11.63 14.5964 11.5154 14.5144 11.4401 14.4005C11.3648 14.2867 11.3343 14.1491 11.3542 14.0141C11.3742 13.879 11.4433 13.7562 11.5482 13.6689C11.6532 13.5817 11.7867 13.5363 11.923 13.5414C12.0594 13.5466 12.1891 13.6018 12.2872 13.6967C12.3854 13.7915 12.4451 13.9192 12.4548 14.0553C12.4646 14.1914 12.4238 14.3264 12.3403 14.4343C12.2567 14.5422 12.1362 14.6154 12.002 14.64H12ZM13.6 11.009C13.5429 11.193 13.4436 11.3612 13.31 11.5C13.1572 11.653 12.9897 11.7907 12.81 11.911C12.71 11.98 12.621 12.052 12.527 12.124C12.442 12.1943 12.3779 12.2867 12.342 12.391C12.322 12.445 12.299 12.499 12.278 12.553C12.2522 12.6248 12.205 12.687 12.1428 12.7312C12.0806 12.7754 12.0063 12.7994 11.93 12.8C11.8436 12.8095 11.7563 12.7957 11.677 12.76C11.617 12.7307 11.565 12.6873 11.5255 12.6334C11.4859 12.5796 11.46 12.517 11.45 12.451C11.4342 12.3591 11.4367 12.265 11.4573 12.1741C11.4779 12.0831 11.5162 11.9971 11.57 11.921C11.6565 11.7945 11.7625 11.6824 11.884 11.589C12.015 11.482 12.15 11.38 12.284 11.273C12.3952 11.1879 12.4883 11.0815 12.558 10.96C12.6121 10.8569 12.6343 10.7401 12.6219 10.6244C12.6094 10.5086 12.5628 10.3992 12.488 10.31C12.4087 10.2235 12.3034 10.1653 12.188 10.144C12.0344 10.1081 11.8743 10.1109 11.722 10.152C11.6439 10.1733 11.5713 10.2111 11.509 10.2629C11.4467 10.3146 11.3963 10.3791 11.361 10.452C11.314 10.54 11.273 10.63 11.229 10.719C11.1967 10.7863 11.1531 10.8475 11.1 10.9C11.054 10.9404 11.0001 10.971 10.9418 10.9897C10.8835 11.0085 10.822 11.015 10.761 11.009C10.6861 11.007 10.6127 10.9872 10.547 10.951C10.4865 10.9197 10.4359 10.8724 10.4006 10.8141C10.3653 10.7559 10.3468 10.6891 10.347 10.621C10.3419 10.4002 10.4125 10.1842 10.547 10.009C10.7025 9.79874 10.909 9.63149 11.147 9.523C11.3265 9.43781 11.5187 9.38241 11.716 9.359L11.828 9.348H12.028L12.136 9.358C12.4034 9.37487 12.6651 9.44276 12.907 9.558C13.1231 9.65746 13.3072 9.81499 13.439 10.013C13.5394 10.169 13.6014 10.3465 13.62 10.531C13.647 10.69 13.6402 10.8528 13.6 11.009Z",
                    })
                );
            };
        },
        "/wg2": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-eurjpy.589d2c89.svg";
        },
        "/x99": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return E;
            });
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a("WvAc"),
                f = a("deTv"),
                v = a("joPw");
            a("s5+q");
            function g(e, t, a) {
                var n = e + t - (Math.floor(new Date().getTime() / 1e3) - a);
                return n > t ? t : n;
            }
            var E = (function (e) {
                function t(e) {
                    var a;
                    return r()(this, t), ((a = s()(this, u()(t).call(this, e))).clockTM = null), (a.state = { rest: g(a.props.startTime, a.props.period, a.props.timeDelta) }), a;
                }
                return (
                    p()(t, e),
                    c()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.countProcess(this.props.startTime, this.props.period, this.props.timeDelta);
                            },
                        },
                        {
                            key: "componentWillReceiveProps",
                            value: function (e) {
                                this.clockTM && clearTimeout(this.clockTM), this.setState({ rest: g(e.startTime, e.period, e.timeDelta) }), this.countProcess(e.startTime, e.period, e.timeDelta);
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this.clockTM && clearTimeout(this.clockTM);
                            },
                        },
                        {
                            key: "onTimeOver",
                            value: function () {
                                this.props.onTimeOver && this.props.onTimeOver();
                            },
                        },
                        {
                            key: "countProcess",
                            value: function (e, t, a) {
                                var n = this;
                                this.clockTM = setTimeout(function () {
                                    var r = g(e, t, a);
                                    r <= 0 ? n.onTimeOver() : (n.countProcess(e, t, a), n.setState({ rest: r }));
                                }, this.props.delay);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.state.rest;
                                if (e < 0) return null;
                                var t = Math.floor(e / 86400),
                                    a = Math.floor((e % 86400) / 3600),
                                    n = Math.floor((e % 3600) / 60),
                                    r = e % 60,
                                    i = this.props.templateComponent;
                                if (i) return m.createElement(i, { days: t, hours: a, mins: n, secs: r, className: this.props.className, classNameSeparator: this.props.classNameSeparator });
                                if (this.props.children && !Array.isArray(this.props.children))
                                    return m.cloneElement(this.props.children, { days: t, hours: a, mins: n, secs: r, className: this.props.className, classNameSeparator: this.props.classNameSeparator });
                                var c = f.g.formatMessage(this.props.dayNames),
                                    o = { H: Object(h.b)(a), i: Object(h.b)(n), s: Object(h.b)(r), d: t ? "".concat(t, " ").concat(Object(h.a)(t, c)) : "" },
                                    s = (Array.isArray(this.props.format) ? this.props.format : this.props.format.split("")).map(function (e, t) {
                                        return " " === e ? m.createElement("span", { key: t }, "Â ") : m.createElement("span", { key: t }, /[Hisd]/.test(e) ? o[e] : e);
                                    });
                                return m.createElement("div", { className: this.props.className, "data-trans": this.props.dayNames.id }, s);
                            },
                        },
                    ]),
                    t
                );
            })(m.PureComponent);
            E.defaultProps = { format: "i:s", className: "countdown-comp", classNameSeparator: "__", dayNames: v.a.days_num, delay: 1e3, startTime: 0, period: 0, timeDelta: 0, onTimeOver: function () {} };
        },
        "/zKO": function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("BK8K"),
                c = a("WnEs"),
                o = a("RiSW"),
                s = a.n(o),
                l = a("8Jek"),
                u = a.n(l),
                d = a("8VmE"),
                p = a.n(d),
                m = a("deTv"),
                h = Object(m.e)({
                    ts_comment_1: { id: "ts_comment_1", defaultMessage: "The Head and Shoulders reversal pattern has formed on the chart" },
                    ts_comment_2: { id: "ts_comment_2", defaultMessage: "The Twin Peaks reversal pattern has formed on the chart" },
                    ts_comment_3: { id: "ts_comment_3", defaultMessage: "The Double Bottom reversal pattern has formed on the chart" },
                    ts_comment_4: { id: "ts_comment_4", defaultMessage: "The chart breaks through a strong support level" },
                    ts_comment_5: { id: "ts_comment_5", defaultMessage: "The chart breaks through a strong resistance level" },
                    ts_comment_6: { id: "ts_comment_6", defaultMessage: "The chart is approaching a strong support level" },
                    ts_comment_7: { id: "ts_comment_7", defaultMessage: "The chart is approaching a strong resistance level" },
                    ts_comment_8: { id: "ts_comment_8", defaultMessage: "The chart is approaching a strong psychological level" },
                    ts_comment_9: { id: "ts_comment_9", defaultMessage: "A stable DOWN trend has formed" },
                    ts_comment_10: { id: "ts_comment_10", defaultMessage: "A stable UP trend has formed" },
                    direction_up: { id: "direction_up", defaultMessage: "The price is expected to go up from the current quote." },
                    direction_down: { id: "direction_down", defaultMessage: "The price is expected to go down from the current quote." },
                    direction_up_mod: { id: "direction_up_mod", defaultMessage: "The price is expected to go up from the current quote level {value}" },
                    direction_down_mod: { id: "direction_down_mod", defaultMessage: "The price is expected to go down from the current quote level {value}" },
                }),
                f = function (e) {
                    var t = e.comment,
                        a = e.direction,
                        i = e.condition,
                        c = e.condValue;
                    return r.a.createElement(
                        n.Fragment,
                        null,
                        t > 0 &&
                            r.a.createElement(
                                n.Fragment,
                                null,
                                r.a.createElement("div", { className: "trade-signal-card__comments_white" }, r.a.createElement(m.c, h["ts_comment_".concat(t)])),
                                "price" === i && r.a.createElement(m.c, p()({}, h["direction_".concat(a, "_mod")], { values: { value: c } })),
                                "current" === i && r.a.createElement(m.c, h["direction_".concat(a)])
                            )
                    );
                },
                v = function (e) {
                    var t = e.item,
                        a = t.name,
                        n = t.color;
                    return r.a.createElement(
                        "li",
                        { className: "trade-signal-card-indicator-item" },
                        r.a.createElement("em", { className: "trade-signal-card-indicator-item__circle", style: { background: n } }),
                        r.a.createElement(m.c, p()({}, a, { className: "trade-signal-card-indicator-item__title" }))
                    );
                },
                g = function (e) {
                    return r.a.createElement(
                        "div",
                        { className: "trade-signal-card__content" },
                        r.a.createElement(
                            "div",
                            { className: u()("trade-signal-card__comments", { "trade-signal-card__comments_with-icon": e.vip }) },
                            r.a.createElement(f, { comment: e.comment, direction: e.dir, condition: e.cond, condValue: e.condValue })
                        ),
                        e.indicators.length > 0 &&
                            r.a.createElement(
                                "ul",
                                { className: u()("trade-signal-card-indicators-list", { "trade-signal-card-indicators-list__with-icon": e.vip }) },
                                e.indicators.map(function (e) {
                                    var t = e.id,
                                        a = s()(e, ["id"]);
                                    return r.a.createElement(v, { key: t, item: a });
                                })
                            )
                    );
                },
                E = a("o7Vx"),
                _ = function (e) {
                    var t = e.selectPair,
                        a = e.pairRaw,
                        n = e.pair,
                        i = e.projects;
                    return r.a.createElement(
                        "div",
                        {
                            className: "pair-btn",
                            onClick: function () {
                                return t(a, i[0], n);
                            },
                        },
                        r.a.createElement("div", { className: "pair-btn__text" }, r.a.createElement(m.c, { id: "go-to-pair", defaultMessage: "Go to pair" }))
                    );
                },
                b = a("eRjb");
            a("mjkP"),
                a("MR+f"),
                (t.a = function (e) {
                    return r.a.createElement(
                        n.Fragment,
                        null,
                        r.a.createElement(
                            "div",
                            { className: "trade-signal-card", "data-test": "trade-signal-card-".concat(e.id) },
                            r.a.createElement(
                                "div",
                                { className: "trade-signal-card__time-holder" },
                                r.a.createElement("span", { className: "trade-signal-card__time-publication" }, Object(i.l)(Number(1e3 * e.startAt), "H:i")),
                                r.a.createElement(E.a, { duration: Number(e.period) })
                            ),
                            r.a.createElement(c.a, e),
                            r.a.createElement(b.a, { rank: e.rank, projects: e.projects, isMetaTrader: e.isMetaTrader }),
                            r.a.createElement(g, e),
                            e.isMetaTrader ? r.a.createElement("div", { className: "trade-signal-card__padding" }) : r.a.createElement(_, e)
                        )
                    );
                });
        },
        "0255": function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i),
                o = a("tyvn"),
                s = a("BWyT"),
                l = {
                    latam: {
                        check: function (e) {
                            return !(!e || !o.Db.includes(e.toUpperCase()));
                        },
                        override: o.Cb,
                    },
                    india: {
                        check: function (e) {
                            return !(!e || ![s.a.India].includes(e.toUpperCase()));
                        },
                        override: o.lb,
                    },
                };
            function u(e, t) {
                var a,
                    n = (function (e) {
                        var t = Object.values(l).find(function (t) {
                            return !0 === t.check(e);
                        });
                        return t ? t.override : void 0;
                    })(t);
                return n && (a = n[e]), { currencySign: a || o.t[e], isCustom: !!a };
            }
            t.a = function (e) {
                var t = e.className,
                    a = e.country,
                    n = u(e.currency, a),
                    i = n.currencySign,
                    o = n.isCustom;
                return r.a.createElement("span", { className: c()(t, { psign: !o }) }, i);
            };
        },
        "0H9W": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-tf.166c4d55.svg";
        },
        "0Hrr": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-eurchf.98a2890e.svg";
        },
        "0K0+": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-usdmxn.7c60c5f4.svg";
        },
        "0YwH": function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("azoE"),
                v = a("8Jek"),
                g = a.n(v),
                E =
                    (a("Y01A"),
                    (function (e) {
                        function t() {
                            var e, a;
                            r()(this, t);
                            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                            return (
                                ((a = s()(this, (e = u()(t)).call.apply(e, [this].concat(i)))).handlerChange = function (e) {
                                    a.props.onChange(e.target.value);
                                }),
                                a
                            );
                        }
                        return (
                            p()(t, e),
                            c()(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this;
                                        return h.a.createElement(
                                            "label",
                                            {
                                                className: "input-color ".concat(this.props.disabled ? "input-color_disabled" : "", " ").concat(this.props.className),
                                                htmlFor: this.id,
                                                style: { backgroundColor: this.props.disabled ? "" : this.props.color },
                                                disabled: this.props.disabled,
                                            },
                                            h.a.createElement("input", {
                                                name: this.props.name,
                                                type: "radio",
                                                id: this.id,
                                                className: "input-color__radio",
                                                ref: function (t) {
                                                    e.input = t;
                                                },
                                                value: this.props.color,
                                                checked: this.props.checked,
                                                onChange: this.handlerChange,
                                                disabled: this.props.disabled,
                                            }),
                                            h.a.createElement("span", { className: "input-color__indicator" })
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(m.Component));
            E.defaultProps = { color: "#000000", className: "", checked: !1, name: "inputColor", onChange: function () {}, disabled: !1 };
            var _ = E,
                b =
                    (a("gf+L"),
                    (function (e) {
                        function t() {
                            var e, a;
                            r()(this, t);
                            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                            return (
                                ((a = s()(this, (e = u()(t)).call.apply(e, [this].concat(i)))).setActiveColor = function (e) {
                                    a.props.onChange(e);
                                }),
                                a
                            );
                        }
                        return (
                            p()(t, e),
                            c()(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this;
                                        return h.a.createElement(
                                            "div",
                                            { className: "input-color-group" },
                                            this.props.colors.map(function (t, a) {
                                                return h.a.createElement(
                                                    "div",
                                                    { className: "input-color-group__item", key: a },
                                                    h.a.createElement(_, { color: t, key: t, name: "inputColor".concat(a), onChange: e.setActiveColor, checked: t === e.props.defaultColor, disabled: e.props.disabled })
                                                );
                                            })
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(m.Component));
            b.defaultProps = { colors: [], defaultColor: "", onChange: function () {}, disabled: !1 };
            var C = b,
                y =
                    (a("WdBJ"),
                    a("GQii"),
                    (function (e) {
                        function t(e) {
                            var a;
                            return (
                                r()(this, t),
                                ((a = s()(this, u()(t).call(this, e))).toggleShowColorGroup = function () {
                                    a.setState({ openColors: !a.state.openColors });
                                }),
                                (a.changeColorHandler = function (e) {
                                    a.setState({ activeColor: e }), a.setState({ openColors: !a.state.openColors }), (a.result.color = e), a.props.onChangeColor(e);
                                }),
                                (a.changeRangeHandler = function (e) {
                                    a.setState({ value: e }), (a.result.width.result = e), a.props.onChangeRange(e);
                                }),
                                (a.result = { color: a.props.activeColor, width: { max: a.props.max, min: a.props.min, result: a.props.value } }),
                                (a.state = { activeColor: a.props.activeColor, openColors: !1, value: a.props.value }),
                                a
                            );
                        }
                        return (
                            p()(t, e),
                            c()(t, [
                                {
                                    key: "componentWillReceiveProps",
                                    value: function (e) {
                                        (e.activeColor === this.props.activeColor && e.value === this.props.value) ||
                                            (this.setState({ activeColor: e.activeColor, value: e.value }), (this.result.color = e.activeColor), (this.result.width.result = e.value));
                                    },
                                },
                                { key: "onChange", value: function () {} },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this;
                                        return h.a.createElement(
                                            "div",
                                            {
                                                className: "input-range-color",
                                                ref: function (t) {
                                                    e.colorGroup = t;
                                                },
                                            },
                                            h.a.createElement(
                                                "div",
                                                { className: "input-range-color__inner" },
                                                h.a.createElement(
                                                    "div",
                                                    { className: "input-range-color__range" },
                                                    h.a.createElement(f.a, {
                                                        className: "input-range",
                                                        value: this.state.value,
                                                        max: this.props.max,
                                                        min: this.props.min,
                                                        step: this.props.step,
                                                        onChange: this.changeRangeHandler,
                                                        trackStyle: { backgroundColor: this.props.disabled ? "" : this.state.activeColor },
                                                        handleStyle: { backgroundColor: this.props.disabled ? "" : this.state.activeColor },
                                                        disabled: this.props.disabled,
                                                    })
                                                ),
                                                h.a.createElement(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        className: g()("input-range-color__color", this.state.openColors && "input-range-color__color_open"),
                                                        style: { backgroundColor: this.props.disabled ? "" : this.state.activeColor },
                                                        onClick: this.toggleShowColorGroup,
                                                        disabled: this.props.disabled,
                                                    },
                                                    h.a.createElement(
                                                        "svg",
                                                        { className: "input-range-color__color-svg", width: "10", height: "6" },
                                                        h.a.createElement("use", { width: "10", height: "6", xlinkHref: "#svg_assets_arrow_down", fill: "rgba(255, 255, 255, .5)" })
                                                    )
                                                )
                                            ),
                                            h.a.createElement(
                                                "div",
                                                null,
                                                this.state.openColors
                                                    ? h.a.createElement(C, {
                                                          className: "input-range-color__color-group",
                                                          colors: this.props.colors,
                                                          defaultColor: this.props.activeColor,
                                                          onChange: this.changeColorHandler,
                                                          disabled: this.props.disabled,
                                                      })
                                                    : null
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(m.Component));
            y.defaultProps = { max: 10, min: 1, step: 1, value: 1, activeColor: "#000000", onChangeColor: function () {}, onChangeRange: function () {}, disabled: !1 };
            t.a = y;
        },
        "0Z2k": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(e.width || o.a.WIDTH, " ").concat(e.height || o.a.HEIGHT), width: e.width || o.a.WIDTH, height: e.height || o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement(
                        "g",
                        { fill: "#FF9D14", clipPath: "url(#clip0)" },
                        c.a.createElement("path", {
                            d:
                                "M61.102 7.07a1.292 1.292 0 1 0-1.492-2.109l-3.227 2.283a1.292 1.292 0 1 0 1.492 2.109l3.227-2.283zM52.554 6.328a1.292 1.292 0 0 0 1.664-.755l1.39-3.7A1.292 1.292 0 1 0 53.19.964l-1.391 3.7c-.251.668.087 1.413.755 1.664zM62.709 11.975h-.027l-3.952.033c-.713.014-1.28.56-1.265 1.274.014.704.59 1.277 1.291 1.277h.027l3.951-.068A1.278 1.278 0 0 0 64 13.19c-.014-.705-.59-1.215-1.291-1.215zM54.736 31.686a5.384 5.384 0 0 0-2.273-1.048c.055-.099.106-.2.154-.302l.519-.518c1.997-1.997 2.206-5.141.487-7.313a5.434 5.434 0 0 0-3.19-1.96 5.65 5.65 0 0 0 .241-.504c1.36-1.97 1.338-4.618-.168-6.521a5.434 5.434 0 0 0-3.19-1.963c1.033-1.9.9-4.27-.48-6.013a5.441 5.441 0 0 0-4.29-2.076 5.426 5.426 0 0 0-3.616 1.363 5.442 5.442 0 0 0-5.37-4.48 5.428 5.428 0 0 0-3.864 1.597l-13.1 13.1-.05-1.748a5.443 5.443 0 0 0-5.437-5.394 5.443 5.443 0 0 0-5.432 5.233L3.062 32.153l-2.15 2.499a3.809 3.809 0 0 0 .197 5.16L4.304 43a3.81 3.81 0 0 0 .475 4.787L19.78 62.765a3.77 3.77 0 0 0 2.68 1.109c.83 0 1.651-.279 2.31-.785l3.132-2.405c3.013-.712 6.334-2.328 9.878-4.808 3.094-2.166 6.452-5.052 9.978-8.578l7.457-7.457a5.47 5.47 0 0 0-.479-8.155zM40.508 6.892c.56-.56 1.3-.84 2.038-.84.843 0 1.686.365 2.264 1.095.916 1.158.756 2.838-.288 3.882l-1.33 1.33a5.415 5.415 0 0 0-.592.448 5.362 5.362 0 0 0-1.08-2.405 5.441 5.441 0 0 0-2.686-1.836l1.674-1.674zm-8.985-3.117c.56-.56 1.3-.84 2.038-.84.843 0 1.686.365 2.264 1.095.916 1.158.756 2.838-.288 3.882L20.266 23.025l-.05-1.748a5.428 5.428 0 0 0-2.015-4.179L31.523 3.775zM2.933 37.982a1.21 1.21 0 0 1-.062-1.645l2.644-3.074a.011.011 0 0 0 .003-.006l2.739-19.914a2.86 2.86 0 0 1 2.852-2.853 2.861 2.861 0 0 1 2.853 2.853l.074 2.591a5.445 5.445 0 0 0-4.69 5.18L6.732 40.13l-.76.885-3.037-3.032zm50.454.032l-7.456 7.457c-6.37 6.369-13.026 11.48-18.875 12.755a1.232 1.232 0 0 0-.489.225l-3.37 2.588a1.205 1.205 0 0 1-1.591-.103L6.604 45.958a1.21 1.21 0 0 1-.063-1.645l2.644-3.074a.013.013 0 0 0 .003-.006l2.739-19.914a2.861 2.861 0 0 1 2.853-2.852 2.861 2.861 0 0 1 2.852 2.852l.135 4.7c.022.78.664 1.289 1.333 1.289a1.3 1.3 0 0 0 .928-.39l15.165-15.166c.56-.561 1.3-.84 2.038-.84.843 0 1.686.364 2.264 1.094.916 1.158.756 2.838-.288 3.882L28.758 26.335a1.389 1.389 0 0 0 0 1.964 1.402 1.402 0 0 0 1.988 0l13.431-13.43c.56-.56 1.299-.84 2.038-.84.843 0 1.686.365 2.264 1.095.916 1.157.756 2.838-.288 3.882L34.823 32.373c-.55.55-.55 1.441 0 1.991a1.383 1.383 0 0 0 1.962 0l10.51-10.51c.56-.56 1.299-.84 2.037-.84.843 0 1.687.365 2.264 1.095.917 1.158.756 2.838-.288 3.882L40.899 38.4a1.44 1.44 0 0 0 0 2.037l.016.017a1.326 1.326 0 0 0 1.882 0l6.454-6.454a3.032 3.032 0 0 1 2.136-.889c.618 0 1.233.195 1.746.6a2.888 2.888 0 0 1 .254 4.302z",
                        })
                    ),
                    c.a.createElement("defs", null, c.a.createElement("clipPath", { id: "clip0" }, c.a.createElement("path", { fill: "#fff", d: "M0 0h64v64H0z" })))
                );
            };
        },
        "0cTs": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-usdcad.2534e01b.svg";
        },
        "0fA5": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("RiSW"),
                c = a.n(i),
                o = a("mXGw"),
                s = a.n(o),
                l = a("mBK0"),
                u = a("8Jek"),
                d = a.n(u),
                p = a("deTv"),
                m =
                    (a("oNqk"),
                    function () {
                        return s.a.createElement(
                            o.Fragment,
                            null,
                            s.a.createElement(
                                "svg",
                                { width: "24", height: "24", viewBox: "0 0 24 24", className: "mute-switcher__icon" },
                                s.a.createElement("path", {
                                    d:
                                        "M6.887 14.405c-.49 0-.887-.356-.887-.796v-3.215c0-.44.398-.796.887-.796H8.85l3.697-3.414a.969.969 0 0 1 .946-.107c.313.133.511.417.507.724V17.21c0 .291-.178.559-.463.698-.284.138-.63.127-.967-.075l-4.04-3.428H6.888zm9.154-5.423a.5.5 0 1 1 .798-.604 6.05 6.05 0 0 1 0 7.304.5.5 0 1 1-.798-.604 5.05 5.05 0 0 0 0-6.096z",
                                })
                            ),
                            s.a.createElement(p.c, { id: "inApp_turn_on", defaultMessage: "Turn on notifications" })
                        );
                    }),
                h = function () {
                    return s.a.createElement(
                        o.Fragment,
                        null,
                        s.a.createElement(
                            "svg",
                            { width: "24", height: "24", viewBox: "0 0 24 24", className: "mute-switcher__icon" },
                            s.a.createElement("path", {
                                d:
                                    "M8.495 14.405H6.887c-.49 0-.887-.356-.887-.796v-3.215c0-.44.398-.796.887-.796H8.85l3.697-3.414a.969.969 0 0 1 .946-.107c.313.133.511.417.507.724V8.9l2.4-2.4.707.707-9.9 9.9-.707-.708 1.995-1.994zM14 11.728v5.482c0 .291-.178.559-.463.698-.284.138-.63.127-.967-.075l-2.529-2.146L14 11.728z",
                            })
                        ),
                        s.a.createElement(p.c, { id: "inApp_turn_off", defaultMessage: "Turn off notifications" })
                    );
                };
            t.a = Object(l.observer)(function (e) {
                var t = e.muted,
                    a = e.changeState,
                    n = c()(e, ["muted", "changeState"]);
                return s.a.createElement(
                    "button",
                    r()(
                        {
                            className: (function (e) {
                                return d()("mute-switcher", { "mute-switcher_muted": !e, "mute-switcher_unmuted": e });
                            })(t),
                            onClick: a,
                        },
                        n
                    ),
                    t ? s.a.createElement(m, null) : s.a.createElement(h, null)
                );
            });
        },
        "0jHg": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d: "M12.5 11.793L7.854 7.146a.5.5 0 1 0-.708.708l4.647 4.646-4.647 4.646a.5.5 0 0 0 .708.708l4.646-4.647 4.646 4.647a.5.5 0 0 0 .708-.708L13.207 12.5l4.647-4.646a.5.5 0 0 0-.708-.708L12.5 11.793z",
                    })
                );
            };
        },
        "0veG": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { d: "M12.5 21a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm0-1a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM12 8.5a.5.5 0 1 1 1 0v4a.5.5 0 1 1-1 0v-4zm.5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" })
                );
            };
        },
        "110d": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 56 24", width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        className: "inheriting",
                        d:
                            "M2.5 16.9c.2-.2.3-.5.1-.7-.2-.2-.5-.3-.7-.1-.2.2-.4.3-.6.4-.1 0-.1.1-.1.1h.2c-.3 0-.5.2-.5.5s.2.5.5.5c.2-.1.2-.1 1.1-.7zM4.9 15c.2-.2.2-.5.1-.7-.2-.2-.5-.2-.7-.1-.3.2-.5.4-.8.6-.2.2-.3.5-.1.7.2.2.5.3.7.1.2-.2.5-.4.8-.6zm2.3-1.9c.2-.2.2-.5.1-.7-.2-.2-.5-.2-.7-.1-.3.2-.5.4-.8.6-.2.2-.2.5-.1.7.2.2.5.2.7.1.3-.2.5-.4.8-.6zm2.3-1.9c.2-.2.2-.5.1-.7-.2-.2-.5-.2-.7-.1-.3.2-.5.4-.8.6-.2.2-.2.5-.1.7.2.3.5.3.7.1.3-.2.6-.4.8-.6zm2.3-1.9c.2-.2.2-.5.1-.7-.2-.2-.5-.2-.7-.1-.4.3-.5.4-.8.6-.2.2-.2.5-.1.7.2.2.5.2.7.1.3-.2.5-.3.8-.6zm1.6-.3c.2.2.5.2.7 0s.2-.5 0-.7l-.7-.7c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l.7.7zm2.2 2.1c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-.7-.7c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l.7.7zm2.2 2.1c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-.7-.7c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l.7.7zm2.2 2c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-.7-.7c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l.7.7zm2.9.6c.2-.2.3-.5.1-.7-.2-.2-.5-.3-.7-.1l-.8.6c-.2.2-.3.5-.1.7.2.2.5.3.7.1l.8-.6zm2.4-1.9c.2-.2.3-.5.1-.7-.2-.2-.5-.3-.7-.1l-.8.6c-.2.2-.3.5-.1.7.2.2.5.3.7.1l.8-.6zm2.3-1.8c.2-.2.3-.5.1-.7s-.5-.3-.7-.1l-.8.6c-.2.2-.3.5-.1.7s.5.3.7.1l.8-.6zm2.1-1.5c.2-.2.3-.5.1-.7s-.5-.3-.7-.1l-.4.3c-.2.2-.3.5-.1.7.2.2.5.3.7.1l.4-.3zm5.4-.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1zm3 0c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1zm3 0c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5h1zm2.4 0c.1 0 .2 0 .3-.1l.5-.4c.2-.2.3-.5.1-.7-.2-.2-.5-.3-.7-.1l-.5.4.3.4v-.5h-.4c-.3 0-.5.2-.5.5s.2.5.5.5h.4zm3.1-2.3c.2-.2.3-.5.1-.7s-.5-.2-.7-.1l-.8.6c-.2.2-.2.5-.1.7.2.2.5.3.7.1l.8-.6zM49 6c.2-.2.3-.5.1-.7-.2-.2-.5-.3-.7-.1l-.8.6c-.2.2-.3.5-.1.7.2.2.5.3.7.1L49 6zm2.4-1.8c.2-.2.3-.5.1-.7-.2-.2-.5-.3-.7-.1L50 4c-.2.2-.3.5-.1.7s.5.3.7.1l.8-.6zm2.4-1.9c.2-.1.2-.4.1-.7-.2-.2-.5-.3-.7-.1l-.8.6c-.2.2-.3.5-.1.7.2.2.5.3.7.1l.8-.6z",
                    }),
                    c.a.createElement("path", {
                        d:
                            "M37.5 15.1c2.6-2.9 2.7-7.4 0-10.4-2.9-3.3-7.9-3.6-11.2-.8-3.3 2.9-3.6 7.9-.8 11.1 2.6 3 7.1 3.5 10.3 1.4l5.8 7.2c.4.4 1 .5 1.5.1.4-.4.5-1 .1-1.5l-5.7-7.1zm-10.8-.9c-2.4-2.7-2.1-6.8.6-9.1s6.8-2.1 9.2.6c2.4 2.7 2.1 6.8-.6 9.1-2.8 2.3-6.9 2-9.2-.6z",
                    }),
                    c.a.createElement("path", { d: "M34.5 9.9c0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9 1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9zm-4.8 0c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9s-.8 1.9-1.9 1.9c-1 0-1.9-.9-1.9-1.9z" }),
                    c.a.createElement("ellipse", { cx: "1.8", cy: "16.2", rx: "1.8", ry: "1.8" }),
                    c.a.createElement("ellipse", { cx: "12.6", cy: "7.2", rx: "1.8", ry: "1.8" }),
                    c.a.createElement("ellipse", { cx: "21.7", cy: "16.2", rx: "1.8", ry: "1.8" }),
                    c.a.createElement("ellipse", { cx: "43.4", cy: "9", rx: "1.8", ry: "1.8" }),
                    c.a.createElement("ellipse", { cx: "54.2", cy: "1.8", rx: "1.8", ry: "1.8" })
                );
            };
        },
        "12hZ": function (e, t, a) {
            "use strict";
            var n = a("Ja3R"),
                r = a("Mgd4"),
                i = a("deTv"),
                c = a("tu/2"),
                o = a("mXGw"),
                s = a.n(o),
                l = a("CQ0v"),
                u = a("6eLe"),
                d = a("MgeN"),
                p = a("Wujw"),
                m = Object(p.a)().origin,
                h = Array.isArray(m) ? void 0 : m,
                f = "?origin=".concat(h || "sidebar"),
                v = Object(l.b)({
                    requestFunction: function (e) {
                        var t = e.url,
                            a = e.version,
                            n = e.data;
                        return Object(d.b)(t, a, u.b, n);
                    },
                    searchParameters: f,
                }),
                g = Object(i.e)({ wrong_pay_sum_min: { id: "wrong_pay_sum_min", defaultMessage: "Minimum payment amount: {min}" }, wrong_pay_sum_max: { id: "wrong_pay_sum_max", defaultMessage: "Maximum payment amount: {max}" } }),
                E = function (e) {
                    var t = e.maxAmountFormatted,
                        a = e.minAmountFormatted;
                    return { max: i.g.formatMessage(g.wrong_pay_sum_max, { max: t }), min: i.g.formatMessage(g.wrong_pay_sum_min, { min: a }) };
                },
                _ = {
                    amountInputLabel: s.a.createElement(i.c, { id: "amount", defaultMessage: "Amount" }),
                    localizeAmountErrors: E,
                    submitButtonText: s.a.createElement(i.c, { id: "confirm", defaultMessage: "Confirm" }),
                    title: s.a.createElement(i.c, { id: "recharge_cabinet_way_to_sum", defaultMessage: "Select a payment amount" }),
                },
                b = s.a.createElement(
                    o.Fragment,
                    null,
                    s.a.createElement(i.c, { id: "billing_if_paycard_info", defaultMessage: "When an account is replenished with a bank card, funds will be debited from the account at the client bank exchange rate." }),
                    s.a.createElement("br", null),
                    s.a.createElement(i.c, {
                        id: "cabinet_payout_bonus_warnning",
                        defaultMessage: "You cannot withdraw your bonuses, but you may use them for trading and to withdraw profit. Having a bonus on your account does not affect your ability to withdraw funds.",
                    }),
                    "Â ",
                    s.a.createElement("a", { href: "/terms/service-agreement", target: "_blank" }, s.a.createElement(i.c, { id: "cabinet_here", defaultMessage: "More here" }))
                ),
                C = {
                    european: s.a.createElement(i.b, { id: "billing_deposits_keep", defaultMessage: "Deposits are kept<br/>in a European bank" }),
                    finacom: s.a.createElement(i.b, { id: "main_page_licensed_partner_finacom", defaultMessage: "Regulated and certified by FinaCom PLC" }),
                    ssl: s.a.createElement(i.b, { id: "billing_connection_protected", defaultMessage: "The connection is encrypted with<br/>SSL certified <br/> 256 bit Secure Processing" }),
                },
                y = Object.freeze({ legalInformationCaptions: C, legalInformationText: b }),
                w = Object.freeze({
                    footer: y,
                    submitButtonText: s.a.createElement(i.c, { id: "billing_recharge", defaultMessage: "Deposit" }),
                    title: s.a.createElement(i.c, { id: "recharge_cabinet_way_to_extra_fields", defaultMessage: "Fill extra fields" }),
                }),
                k = Object.freeze({
                    hint: s.a.createElement(
                        o.Fragment,
                        null,
                        s.a.createElement(i.c, { id: "1click_save_card_desc_short", defaultMessage: "You can make a deposit with one click." }),
                        " ",
                        s.a.createElement("a", { href: "/terms/one-click", target: "_blank" }, s.a.createElement(i.c, { id: "1click_terms_and_conditions", defaultMessage: "Terms and conditions" }))
                    ),
                    label: s.a.createElement(i.c, { id: "save_card", defaultMessage: "Save card" }),
                }),
                T = Object.freeze({
                    amountButtonLabel: s.a.createElement(i.c, { id: "cabinet_recharge_deposit_amount", defaultMessage: "Deposit amount" }),
                    footer: y,
                    localizeAmountErrors: E,
                    mainButton: { depositButton: s.a.createElement(i.c, { id: "billing_recharge", defaultMessage: "Deposit" }), nextButton: s.a.createElement(i.c, { id: "next", defaultMessage: "Next" }) },
                    pspButtonLabel: s.a.createElement(i.c, { id: "payment_method", defaultMessage: "Payment method" }),
                    saveMethodCheckbox: k,
                }),
                N = Object.freeze({
                    fail: {
                        heading: s.a.createElement(i.c, { id: "error", defaultMessage: "error" }),
                        description: s.a.createElement(i.c, { id: "billing_fail_payment_error", defaultMessage: "Payment processing error. Please try again or contact our client support department." }),
                        supportButtonText: s.a.createElement(i.c, { id: "support_button_trigger_head", defaultMessage: "Support Department" }),
                        tryAgainButtonText: s.a.createElement(i.c, { id: "refill", defaultMessage: "Try again" }),
                    },
                    hangUp: {
                        heading: s.a.createElement(i.c, { id: "payment_in_process_screen_heading", defaultMessage: "Still being processed..." }),
                        description: s.a.createElement(i.c, { id: "payment_in_process_screen_description", defaultMessage: "Your payment is being processed. You can close this screen." }),
                        buttonText: s.a.createElement(i.c, { id: "back_to_trade", defaultMessage: "Back to trade" }),
                    },
                    processing: { description: s.a.createElement(i.c, { id: "billing_pending_payment_msg", defaultMessage: "The payment is being processed..." }) },
                    success: {
                        description: s.a.createElement(i.c, { id: "billing_success_payment_ok_msg", defaultMessage: "Your payment has been processed" }),
                        backToTradeButtonText: s.a.createElement(i.c, { id: "back_to_trade", defaultMessage: "Back to trade" }),
                    },
                }),
                M = Object.freeze({ title: s.a.createElement(i.c, { id: "recharge_cabinet_way_to_pay", defaultMessage: "Select a payment method" }) }),
                L = { store: r.a },
                H = { store: r.a },
                O = {
                    defaultHeader: function () {
                        return s.a.createElement(
                            c.b,
                            { className: "cor-w-panel-c-header__center-inner rsb-default-header" },
                            s.a.createElement(c.d, { size: "medium", isClipped: !0 }, s.a.createElement(i.c, { id: "cabinet_tab_recharge", defaultMessage: "Deposit" }))
                        );
                    },
                    formSubmitFunction: v,
                    extraFields: { translations: w },
                    mainScreen: { translations: T },
                    pspSelect: { translations: M },
                    selectAmount: { translations: _ },
                    statuses: { translations: N },
                },
                x = Object(n.d)({ transportParameters: L, screensConfigsParameters: O, screensSwitcherParameters: H }),
                D = a("ArCh"),
                I = a("g8Ai"),
                S = Object(I.a)({
                    analyticsSender: function (e) {
                        var t = e.id,
                            a = e.data,
                            n = e.isWebView,
                            r = e.entryPoint;
                        return Object(D.a)(t, a, n, r);
                    },
                    store: r.a,
                }).sidebarUIAnalyticsSenders,
                V = S.sendSidebarScreenForwardAnalytics,
                F = S.sendSidebarCloseAnalytics,
                B = S.sendSidebarScreenBackAnalytics,
                P = S.sendSidebarClosePopupDisagreeAnalytics,
                z = S.sendSidebarClosePopupShowAnalytics,
                j = S.sendSidebarClosePopupAgreeAnalytics,
                A = a("IT7A"),
                G = function (e) {
                    var t = e.store;
                    Object(A.v)({ store: t });
                },
                R = a("LUjc"),
                W = a("e7Tw"),
                X = a("lLva"),
                U = function () {
                    var e = r.a.getState(A.N);
                    return "account" in e && e.account.currency !== X.a.DEMO;
                };
            a.d(t, "d", function () {
                return Y;
            }),
                a.d(t, "i", function () {
                    return K;
                }),
                a.d(t, "c", function () {
                    return q;
                }),
                a.d(t, "b", function () {
                    return Q;
                }),
                a.d(t, "f", function () {
                    return $;
                }),
                a.d(t, "p", function () {
                    return ee;
                }),
                a.d(t, "q", function () {
                    return te;
                }),
                a.d(t, "g", function () {
                    return ae;
                }),
                a.d(t, "h", function () {
                    return ne;
                }),
                a.d(t, "a", function () {
                    return G;
                }),
                a.d(t, "o", function () {
                    return V;
                }),
                a.d(t, "j", function () {
                    return F;
                }),
                a.d(t, "n", function () {
                    return B;
                }),
                a.d(t, "l", function () {
                    return P;
                }),
                a.d(t, "m", function () {
                    return z;
                }),
                a.d(t, "k", function () {
                    return j;
                }),
                a.d(t, "e", function () {
                    return U;
                });
            var Z = x({ amountScreenSlots: { afterFieldsSlot: R.c, amountRightSlot: R.b }, mainScreenSlots: { afterAmountButton: R.d, afterMainButton: R.a }, useExtraSubmitData: W.i }),
                Y = Z.initScreensSwitcher,
                K = Z.screensConfigs,
                J = Z.transport,
                q = J.handleUnsuccessfulPayment,
                Q = J.handleSuccessfulPayment,
                $ = J.openSupportChatListener,
                ee = J.updateCurrentTheme,
                te = J.updateUserAccount,
                ae = J.payInFetchInitialDataDispatch,
                ne = J.payInFetchInitialDataListen;
        },
        "1A3c": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-xrpusd.a38324e3.svg";
        },
        "1T8i": function (e, t, a) {},
        "1XfU": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return _;
            });
            var n = a("OvAC"),
                r = a.n(n),
                i = a("SDJZ"),
                c = a.n(i),
                o = a("NToG"),
                s = a.n(o),
                l = a("K4DB"),
                u = a.n(l),
                d = a("+IV6"),
                p = a.n(d),
                m = a("eef+"),
                h = a.n(m),
                f = a("mXGw"),
                v = a.n(f),
                g = a("8Jek"),
                E = a.n(g),
                _ = (function (e) {
                    function t(e) {
                        var a;
                        c()(this, t);
                        var n = (a = u()(this, p()(t).call(this, e))).props,
                            r = n.position,
                            i = n.text,
                            o = n.color,
                            s = n.className,
                            l = n.size;
                        return (a.state = { position: r, text: i, color: o, className: s, size: l }), a;
                    }
                    return (
                        h()(t, e),
                        s()(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e,
                                        t = this.state,
                                        a = t.position,
                                        n = t.size,
                                        i = t.color,
                                        c = t.className,
                                        o = t.text;
                                    return v.a.createElement(
                                        "div",
                                        { style: this.props.style, className: E()("module-spinner", ((e = {}), r()(e, "module-spinner_".concat(a), a), r()(e, "module-spinner_".concat(n), n), e), c) },
                                        v.a.createElement(
                                            "div",
                                            { className: "module-spinner__spin" },
                                            v.a.createElement(
                                                "svg",
                                                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 64 64", className: "satir-spinner" },
                                                v.a.createElement("path", {
                                                    fill: i,
                                                    fillOpacity: ".131",
                                                    d: "M58 32c0 14.4-11.6 26-26 26S6 46.4 6 32 17.6 6 32 6s26 11.6 26 26zM0 32c0 17.7 14.3 32 32 32s32-14.3 32-32S49.7 0 32 0 0 14.3 0 32z",
                                                    className: "satir-spinner__path-1",
                                                }),
                                                v.a.createElement(
                                                    "linearGradient",
                                                    { id: "satir-gradient-1", x1: "-91.457", x2: "-91.981", y1: "101.232", y2: "102.114", gradientTransform: "matrix(35 0 0 -57.055 3259 5822.275)", gradientUnits: "userSpaceOnUse" },
                                                    v.a.createElement("stop", { offset: "0", stopColor: i }),
                                                    v.a.createElement("stop", { offset: ".839", stopColor: i, stopOpacity: "0" }),
                                                    v.a.createElement("stop", { offset: "1", stopColor: i, stopOpacity: "0" })
                                                ),
                                                v.a.createElement("path", {
                                                    fill: "url(#satir-gradient-1)",
                                                    d: "M58 32c0 7.7-3.4 14.9-9.1 19.8-1.3 1.1-1.4 3-.3 4.2 1.1 1.3 3 1.4 4.2.3 7-6 11.2-14.8 11.2-24.3C64 14.3 49.7 0 32 0c-1.7 0-3 1.3-3 3s1.3 3 3 3c14.4 0 26 11.6 26 26z",
                                                    className: "satir-spinner__path-2",
                                                }),
                                                v.a.createElement(
                                                    "linearGradient",
                                                    { id: "satir-gradient-2", x1: "-92.119", x2: "-91.583", y1: "101.863", y2: "100.97", gradientTransform: "matrix(35 0 0 -57.055 3230 5829.22)", gradientUnits: "userSpaceOnUse" },
                                                    v.a.createElement("stop", { offset: "0", stopColor: i }),
                                                    v.a.createElement("stop", { offset: ".839", stopColor: i, stopOpacity: "0" }),
                                                    v.a.createElement("stop", { offset: "1", stopColor: i, stopOpacity: "0" })
                                                ),
                                                v.a.createElement("path", {
                                                    fill: "url(#satir-gradient-2)",
                                                    d: "M6 32c0-7.7 3.4-14.9 9.1-19.8 1.3-1.1 1.4-3 .3-4.2s-3-1.4-4.2-.3C4.2 13.7 0 22.5 0 32c0 17.7 14.3 32 32 32 1.7 0 3-1.3 3-3s-1.3-3-3-3C17.6 58 6 46.4 6 32z",
                                                    className: "satir-spinner__path-3",
                                                })
                                            )
                                        ),
                                        o ? v.a.createElement("div", { className: "module-spinner__text" }, o) : null
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(f.Component);
            _.defaultProps = { color: "#999999", size: "normal", style: {} };
        },
        "1vDs": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-qid.a49df65c.svg";
        },
        "22L4": function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("cUhM");
            t.a = function (e) {
                return r.a.createElement(
                    i.t,
                    e,
                    r.a.createElement("path", {
                        d:
                            "M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-1a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm-4.471-3.158l1.998-6a.5.5 0 0 1 .316-.316l5.999-2a.5.5 0 0 1 .632.632l-2 6a.5.5 0 0 1-.316.316l-5.997 2a.5.5 0 0 1-.632-.632zm6.076-2.237l1.604-4.814-4.813 1.604-1.603 4.814 4.812-1.604z",
                    })
                );
            };
        },
        "25Kq": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return n;
            }),
                a.d(t, "b", function () {
                    return r;
                }),
                a.d(t, "c", function () {
                    return o;
                }),
                a.d(t, "d", function () {
                    return s;
                });
            var n = { TOP: "TOP", LEFT: "LEFT", RIGHT: "RIGHT", BOTTOM: "BOTTOM", CENTER: "CENTER", WINDOW: "WINDOW" },
                r = 768,
                i = {
                    TOP_LEFT: "TOP_LEFT",
                    TOP_CENTER: "TOP_CENTER",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_WINDOW: "TOP_WINDOW",
                    RIGHT_TOP: "RIGHT_TOP",
                    RIGHT_CENTER: "RIGHT_CENTER",
                    RIGHT_BOTTOM: "RIGHT_BOTTOM",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_CENTER: "BOTTOM_CENTER",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    BOTTOM_WINDOW: "BOTTOM_WINDOW",
                    LEFT_TOP: "LEFT_TOP",
                    LEFT_CENTER: "LEFT_CENTER",
                    LEFT_BOTTOM: "LEFT_BOTTOM",
                },
                c = {
                    TOP: { className: "cb-tooltip_arrow-position-top", offset: { top: 10 } },
                    BOTTOM: { className: "cb-tooltip_arrow-position-bottom", offset: { top: -10 } },
                    RIGHT: { className: "cb-tooltip_arrow-position-right", offset: { left: -10 } },
                    LEFT: { className: "cb-tooltip_arrow-position-left", offset: { left: 10 } },
                },
                o = function (e) {
                    var t, a, r;
                    switch (e) {
                        case n.TOP:
                            (t = c[n.BOTTOM].className), (a = c[n.BOTTOM].offset), (r = i["".concat(n.TOP, "_").concat(n.WINDOW)]);
                            break;
                        case n.BOTTOM:
                            (t = c[n.TOP].className), (a = c[n.TOP].offset), (r = i["".concat(n.BOTTOM, "_").concat(n.WINDOW)]);
                            break;
                        default:
                            (t = c[n.BOTTOM].className), (a = c[n.BOTTOM].offset), (r = i["".concat(n.TOP, "_").concat(n.WINDOW)]);
                    }
                    return { className: t, offset: a, position: r };
                },
                s = function (e) {
                    var t,
                        a,
                        r,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.CENTER;
                    switch (e) {
                        case n.LEFT:
                            (t = c[n.RIGHT].className), (a = c[n.RIGHT].offset), (r = i["".concat(n.LEFT, "_").concat(o)]);
                            break;
                        case n.RIGHT:
                            (t = c[n.LEFT].className), (a = c[n.LEFT].offset), (r = i["".concat(n.RIGHT, "_").concat(o)]);
                            break;
                        case n.TOP:
                            (t = c[n.BOTTOM].className), (a = c[n.BOTTOM].offset), (r = i["".concat(n.TOP, "_").concat(o)]);
                            break;
                        case n.BOTTOM:
                            (t = c[n.TOP].className), (a = c[n.TOP].offset), (r = i["".concat(n.BOTTOM, "_").concat(o)]);
                            break;
                        default:
                            (t = c[n.BOTTOM].className), (a = c[n.BOTTOM].offset), (r = i["".concat(n.TOP, "_").concat(o)]);
                    }
                    return { className: t, offset: a, position: r };
                };
        },
        "2GhV": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("RiSW"),
                c = a.n(i),
                o = a("mXGw"),
                s = a.n(o),
                l = a("8Jek"),
                u = a.n(l),
                d = a("VGkd");
            a("mCwc");
            t.a = function (e) {
                var t = e.dataTest,
                    a = void 0 === t ? "" : t,
                    n = e.className,
                    i = e.id,
                    o = e.title,
                    l = e.icon,
                    p = e.arrow,
                    m = e.expanded,
                    h = e.onClick,
                    f = c()(e, ["dataTest", "className", "id", "title", "icon", "arrow", "expanded", "onClick"]);
                return s.a.createElement(
                    "button",
                    r()({ id: i, "data-test": a, className: u()("settings-button", n), onClick: h }, f),
                    s.a.createElement(
                        "span",
                        { className: "settings-button__inner" },
                        s.a.createElement(
                            "span",
                            { className: "settings-button__part" },
                            l &&
                                s.a.createElement(
                                    "span",
                                    { className: "settings-button__icon" },
                                    s.a.createElement(
                                        d.Transition,
                                        {
                                            items: [l],
                                            keys: function (e) {
                                                return e.type;
                                            },
                                            initial: null,
                                            from: { opacity: 0 },
                                            enter: { opacity: 1 },
                                            leave: { opacity: 0 },
                                            config: { duration: 400 },
                                            native: !0,
                                        },
                                        function (e) {
                                            return function (t) {
                                                return s.a.createElement(d.animated.span, { className: "settings-button__icon-inner", style: t }, e);
                                            };
                                        }
                                    )
                                ),
                            o && s.a.createElement("span", { className: "settings-button__title" }, o)
                        ),
                        p &&
                            s.a.createElement(
                                "span",
                                { className: u()({ "settings-button__arrow": !0, "settings-button__arrow_expanded": m }) },
                                s.a.createElement(
                                    "svg",
                                    { viewBox: "0 0 16 16", width: "16", height: "16", className: "svg", transform: "rotate(0)" },
                                    s.a.createElement("path", { d: "M8.315 9.88l3.511-3a.5.5 0 0 0-.324-.88H4.498a.5.5 0 0 0-.325.88l3.492 2.999a.5.5 0 0 0 .65 0z" })
                                )
                            )
                    )
                );
            };
        },
        "2aZx": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(e.width || o.a.WIDTH, " ").concat(e.height || o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        fill: "#FFF",
                        d:
                            "M0 7.5V2l6.5-2L13 2v5.5c0 4.1421-6.5 7.5-6.5 7.5S0 11.6421 0 7.5zm6.987 6.0618c.7248-.4515 1.4496-.9644 2.122-1.526C10.9344 10.5112 12 8.942 12 7.5l-.0118-4.765-5.5017-1.6846L1 2.7754V7.5c0 1.442 1.0656 3.0112 2.891 4.5358.6724.5616 1.3972 1.0745 2.122 1.526.178.1108.4795.2898.4795.2898s.0616-.0203.4945-.2898zM6.3476 7.358l-.6601-.6913H4.875v.5555L6.0092 8.686c.0843.1053.22.203.4908-.0748C6.7708 8.3333 9.75 5 9.75 5L6.3476 7.358z",
                    })
                );
            };
        },
        "2ab/": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-xmrusd.221a02c9.svg";
        },
        "3AmY": function (e, t, a) {
            e.exports = a.p + "../images/app-installer-android@2x.63db9552.png";
        },
        "3FOu": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-usdsgd.fe6ce8ea.svg";
        },
        "40Bb": function (e, t, a) {
            "use strict";
            var n = a("8Jek"),
                r = a.n(n),
                i = a("mXGw");
            a("4naM");
            t.a = function (e) {
                return i.createElement(
                    "button",
                    {
                        className: "strike-price ".concat(e.className, " ").concat(e.selected ? "strike-price_selected" : ""),
                        type: "button",
                        onClick: function (t) {
                            return t.preventDefault(), t.stopPropagation(), e.selected || e.selectStrike(e.id), e.togglePopup(), !1;
                        },
                        "data-test": "strike-price_item_id_".concat(e.id),
                    },
                    i.createElement(
                        "div",
                        { className: "strike-price__inner" },
                        i.createElement(
                            "span",
                            { className: "strike-price__item strike-price__item_percent" },
                            i.createElement("span", { className: r()("strike-price__percent strike-price__percent_down", { "strike-price__percent_high": e.winpercDown > 50 }) }, "+", e.winpercDown, "%")
                        ),
                        i.createElement("span", { className: "strike-price__item strike-price__item_rate" }, "number" == typeof e.precision && e.lastHistoryRate && (e.lastHistoryRate + e.delta).toFixed(e.precision)),
                        i.createElement(
                            "span",
                            { className: "strike-price__item" },
                            i.createElement("span", { className: r()("strike-price__percent strike-price__percent_up", { "strike-price__percent_high": e.winpercUp > 50 }) }, "+", e.winpercUp, "%")
                        )
                    )
                );
            };
        },
        "4Aa3": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(e.width || o.a.WIDTH, " ").concat(e.height || o.a.HEIGHT), width: e.width || o.a.WIDTH, height: e.height || o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M67.7571 35.6445L67.6199 36.0025L67.7571 36.3605L70.9152 44.5976C70.9153 44.5977 70.9153 44.5978 70.9154 44.5979C71.1089 45.1061 70.958 45.6736 70.5362 46.0157C70.5361 46.0158 70.536 46.0159 70.536 46.0159L63.6877 51.5639L63.3898 51.8052L63.3296 52.1838L61.9437 60.8997L61.9436 60.8999C61.8586 61.4353 61.4379 61.856 60.9025 61.941L60.9024 61.9411L52.1864 63.327L51.8078 63.3872L51.5665 63.6851L46.0183 70.5336L46.0151 70.5376C45.7759 70.836 45.4151 71 45.045 71C44.8931 71 44.7437 70.9731 44.5954 70.917C44.595 70.9169 44.5946 70.9167 44.5942 70.9166L36.3586 67.759L36.0008 67.6219L35.6429 67.7589L27.4084 70.9132L27.4059 70.9142C26.8995 71.1097 26.3305 70.9594 25.989 70.5356L25.9871 70.5333L20.4345 63.6848L20.1932 63.3871L19.8148 63.327L11.0988 61.9411L11.0987 61.941C10.5661 61.8564 10.1476 61.4381 10.0621 60.8999L10.062 60.8997L8.67613 52.1838L8.61589 51.805L8.31776 51.5637L1.46473 46.0155L1.4647 46.0155C1.04385 45.6748 0.890818 45.103 1.08442 44.6016L1.08528 44.5994L4.24406 36.3605L4.38131 36.0025L4.24406 35.6445L1.08596 27.4074C1.08587 27.4071 1.08577 27.4068 1.08567 27.4066C0.892739 26.8995 1.04709 26.3275 1.4647 25.9895L1.46504 25.9892L8.31807 20.4366L8.61593 20.1952L8.67613 19.8166L10.0619 11.1013C10.0619 11.1013 10.062 11.1012 10.062 11.1012C10.1468 10.5698 10.5679 10.1487 11.0993 10.0638C11.0993 10.0638 11.0994 10.0638 11.0994 10.0638L19.8148 8.678L20.1934 8.61779L20.4347 8.31994L25.9853 1.46935C25.9856 1.46899 25.9859 1.46863 25.9862 1.46826C26.3332 1.04373 26.8984 0.893011 27.403 1.08688L27.4037 1.08714L35.6426 4.24593L36.0008 4.38324L36.3589 4.24582L44.6023 1.08255L44.6081 1.0803C45.0903 0.891827 45.6797 1.04149 46.0163 1.45981L46.0181 1.4621L51.5663 8.31513L51.8076 8.61326L52.1864 8.6735L60.9024 10.0594L60.9025 10.0594C61.4407 10.1449 61.859 10.5635 61.9436 11.0961L61.9437 11.0962L63.3296 19.8121L63.3897 20.1905L63.6874 20.4319L70.5359 25.9845L70.536 25.9845C70.957 26.3258 71.1092 26.8974 70.9156 27.4065C70.9155 27.4068 70.9153 27.4071 70.9152 27.4074L67.7571 35.6445Z",
                        stroke: "#0094FF",
                        strokeWidth: "2",
                        fill: "none",
                    }),
                    c.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                            "M23.4466 53.5828C23.8426 53.8663 24.297 54.0013 24.7515 54.0013C25.4535 54.0013 26.1419 53.6728 26.5874 53.0563L49.0858 21.5585C49.8058 20.5505 49.5763 19.1421 48.5639 18.4222C47.5514 17.6977 46.1475 17.9317 45.4231 18.9442L22.9246 50.442C22.2002 51.4544 22.4342 52.8583 23.4466 53.5828ZM29.2511 31.5027C25.5299 31.5027 22.5016 28.4744 22.5016 24.7532C22.5016 21.032 25.5299 18.0037 29.2511 18.0037C32.9724 18.0037 36.0007 21.032 36.0007 24.7532C36.0007 28.4744 32.9724 31.5027 29.2511 31.5027ZM29.2511 22.5034C28.0092 22.5034 27.0013 23.5113 27.0013 24.7532C27.0013 25.9951 28.0092 27.003 29.2511 27.003C30.493 27.003 31.501 25.9951 31.501 24.7532C31.501 23.5113 30.493 22.5034 29.2511 22.5034ZM42.7501 54.0012C39.0289 54.0012 36.0006 50.9729 36.0006 47.2517C36.0006 43.5304 39.0289 40.5021 42.7501 40.5021C46.4714 40.5021 49.4997 43.5304 49.4997 47.2517C49.4997 50.9729 46.4714 54.0012 42.7501 54.0012ZM42.7501 45.0018C41.5127 45.0018 40.5003 46.0143 40.5003 47.2517C40.5003 48.4891 41.5127 49.5015 42.7501 49.5015C43.9876 49.5015 45 48.4891 45 47.2517C45 46.0143 43.9876 45.0018 42.7501 45.0018Z",
                        fill: "#0094FF",
                    })
                );
            };
        },
        "4CK3": function (e, t, a) {},
        "4DBZ": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return g;
            }),
                a.d(t, "b", function () {
                    return E;
                });
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("+NPr"),
                v = a("deTv"),
                g = Object(v.e)({
                    datepicker_prev: { id: "datepicker_prev", defaultMessage: "Back" },
                    datepicker_next: { id: "datepicker_next", defaultMessage: "Next" },
                    datepicker_months: { id: "datepicker_months", defaultMessage: "January, February, March, April, May, June, July, August, September, October, November, December" },
                    datepicker_months_short: { id: "datepicker_months_short", defaultMessage: "Jan, Feb, Mar, Apr, May, June, July, Aug, Sept, Oct, Nov, Dec" },
                    datepicker_days: { id: "datepicker_days", defaultMessage: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday" },
                    datepicker_days_short: { id: "datepicker_days_short", defaultMessage: "Sun, Mon, Tue, Wed, Thur, Fri, Sat" },
                }),
                E = (function (e) {
                    function t() {
                        return r()(this, t), s()(this, u()(t).apply(this, arguments));
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "render",
                                value: function () {
                                    return h.a.createElement(f.a, {
                                        date: this.props.value,
                                        prepareDate: !0,
                                        minDate: this.props.minDate,
                                        maxDate: this.props.maxDate,
                                        onSelect: this.props.onChange,
                                        prevText: this.props.prevText,
                                        nextText: this.props.nextText,
                                        monthNames: this.props.monthNames,
                                        monthNamesShort: this.props.monthNamesShort,
                                        dayNames: this.props.dayNames,
                                        dayNamesMin: this.props.dayNamesMin,
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component);
            E.defaultProps = {
                onChange: null,
                value: 0,
                minDate: 0,
                maxDate: 0,
                prevText: v.g.formatMessage(g.datepicker_prev),
                nextText: v.g.formatMessage(g.datepicker_next),
                monthNames: v.g.formatMessage(g.datepicker_months),
                monthNamesShort: v.g.formatMessage(g.datepicker_months_short),
                dayNames: v.g.formatMessage(g.datepicker_days),
                dayNamesMin: v.g.formatMessage(g.datepicker_days_short),
            };
        },
        "4DuL": function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = (a("xCxX"), a("0jHg"));
            t.a = function (e) {
                var t = e.title,
                    a = e.hideDashboard,
                    n = e.toggleSections,
                    c = e.SwitcherIcon,
                    o = e.className;
                return r.a.createElement(
                    "div",
                    { className: "pairs-dashboard__header ".concat(o || "") },
                    c && n ? r.a.createElement("button", { className: "pairs-dashboard__iconed-button pairs-dashboard__section-switcher", onClick: n, "data-test": "pairs-dashboard__section-switcher" }, c) : null,
                    r.a.createElement("button", { className: "pairs-dashboard__iconed-button pairs-dashboard__toggler", onClick: a, "data-test": "pairs-dashboard-toggler" }, r.a.createElement(i.a, null)),
                    r.a.createElement("div", { className: "pairs-dashboard__title" }, t)
                );
            };
        },
        "4adQ": function (e, t, a) {
            "use strict";
            var n = a("RiSW"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("mBK0"),
                s = a("deTv"),
                l = a("NhUL"),
                u = a("YTIe"),
                d = function (e) {
                    var t,
                        a,
                        n = e.icon,
                        r = e.title,
                        i = e.desc,
                        o = e.msgCount,
                        d = e.disabled,
                        p = e.id,
                        m = e.onClick;
                    return c.a.createElement(
                        c.a.Fragment,
                        null,
                        c.a.createElement(
                            l.d,
                            null,
                            c.a.createElement(
                                l.b,
                                {
                                    startIcon:
                                        ((t = n),
                                        (a = {
                                            "stocksup-assets": c.a.createElement(u.l, null),
                                            "stocksup-education": c.a.createElement(u.F, null),
                                            "stocksup-faq": c.a.createElement(u.P, null),
                                            "stocksup-market-analysis": c.a.createElement(u.T, null),
                                            "stocksup-trends": c.a.createElement(u.I, null),
                                            "trading-signals": c.a.createElement(u.tb, null),
                                            "vip-signals": c.a.createElement(u.Ab, null),
                                            "vip-support": c.a.createElement(u.zb, null),
                                            assistant: c.a.createElement(u.m, null),
                                            blog: c.a.createElement(u.r, null),
                                            news: c.a.createElement(u.Y, null),
                                            support: c.a.createElement(u.qb, null),
                                        }),
                                        a[t] ? a[t] : null),
                                    description: d ? c.a.createElement(s.c, { id: "channel_is_available_on_the_platform", defaultMessage: "Available only on the platform" }) : c.a.createElement(s.c, i),
                                    disabled: d,
                                    count: o,
                                    onClick: function () {
                                        d || m(p);
                                    },
                                },
                                c.a.createElement(s.c, r)
                            )
                        )
                    );
                },
                p = Object(o.observer)(function (e) {
                    var t = e.isHidden,
                        a = r()(e, ["isHidden"]);
                    return t ? null : c.a.createElement(d, a);
                });
            t.a = p;
        },
        "4naM": function (e, t, a) {},
        "5+MG": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-aapl.e161ed89.svg";
        },
        "50IP": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-eurcad.7ae008d9.svg";
        },
        "548K": function (e, t, a) {},
        "558C": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-gbpaud.49abccde.svg";
        },
        "5MIG": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M13.348 10.051L15.628 14H17.5a.5.5 0 1 1 0 1h-1.295l1.068 1.848a.75.75 0 1 1-1.3.75L14.474 15h-4.8l-1.5 2.598a.75.75 0 1 1-1.299-.75L7.942 15H6.5a.5.5 0 1 1 0-1h2.02l2.236-3.875A2.25 2.25 0 1 1 14.25 8.25c0 .737-.354 1.391-.902 1.801zM13.896 14l-1.822-3.156L10.252 14h3.644zM12 7.312a.937.937 0 1 0 0 1.875.937.937 0 0 0 0-1.874z",
                    })
                );
            };
        },
        "5Y5z": function (e, t, a) {
            e.exports = a.p + "../images/vmt-green-large-400-x-89@2x.15b7f95b.png";
        },
        "5Ygf": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-msft.d9b0c6a2.svg";
        },
        "5hlQ": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return f;
            });
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = (function (e) {
                    function t() {
                        var e, a;
                        r()(this, t);
                        for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                        return (
                            ((a = s()(this, (e = u()(t)).call.apply(e, [this].concat(i)))).onPlayerReady = function (e) {
                                var t = a.props.onPlayerReady;
                                e.target && "function" == typeof t && t(e.target);
                            }),
                            a
                        );
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.initYtApi();
                                },
                            },
                            {
                                key: "onStateChange",
                                value: function (e, t, a) {
                                    var n,
                                        r = this.YT.PlayerState,
                                        i = r.PLAYING,
                                        c = r.PAUSED,
                                        o = r.ENDED;
                                    switch (e) {
                                        case i:
                                            n = "onPlay";
                                            break;
                                        case c:
                                            n = "onPause";
                                            break;
                                        case o:
                                            n = "onEnd";
                                            break;
                                        default:
                                            n = "";
                                    }
                                    this.props.onEvent && this.props.onEvent(e, this.props.videoId, t, a), this.props[n] && this.props[n](this.props.videoId, t, a);
                                },
                            },
                            {
                                key: "initYtApi",
                                value: function () {
                                    window.YT ? this.apiInited() : this.connectToYTApi();
                                },
                            },
                            {
                                key: "connectToYTApi",
                                value: function () {
                                    var e = this,
                                        t = document.createElement("script");
                                    t.src = "https://www.youtube.com/iframe_api";
                                    var a = document.querySelector("script");
                                    a &&
                                        a.parentNode &&
                                        (a.parentNode.insertBefore(t, a),
                                        (window.onYouTubeIframeAPIReady = function () {
                                            return e.apiInited();
                                        }));
                                },
                            },
                            {
                                key: "apiInited",
                                value: function () {
                                    (this.YT = window.YT), this.props.apiInited && this.props.apiInited(), this.initVideo();
                                },
                            },
                            {
                                key: "initVideo",
                                value: function () {
                                    var e = this;
                                    if (this.props.videoId)
                                        var t = this.props,
                                            a = t.videoId,
                                            n = t.playerVars,
                                            r = new this.YT.Player(this.node, {
                                                videoId: a,
                                                playerVars: n,
                                                events: {
                                                    onReady: this.onPlayerReady,
                                                    onStateChange: function (t) {
                                                        e.onStateChange(t.data, r.getVideoData().title, t);
                                                    },
                                                },
                                            });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return h.a.createElement("div", {
                                        className: this.props.className,
                                        ref: function (t) {
                                            e.node = t;
                                        },
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component);
            (f.displayName = "YoutubePlayer"),
                (f.defaultProps = {
                    videoId: "",
                    playerVars: { autoplay: 1, rel: 0 },
                    apiInited: function () {},
                    onPlayerReady: function () {},
                    onPlay: function () {},
                    onPause: function () {},
                    onEnd: function () {},
                    onEvent: function () {},
                    className: "",
                });
        },
        "5uIG": function (e, t, a) {},
        "5vLt": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("nxTg"),
                c = a.n(i),
                o = a("OvAC"),
                s = a.n(o),
                l = a("5WRv"),
                u = a.n(l),
                d = a("RiSW"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("U/Wl"),
                v = a("cneo"),
                g = a("8Jek"),
                E = a.n(g),
                _ = a("bdSW"),
                b = a("deTv"),
                C = a("d+iN"),
                y = a("oNVm"),
                w = a("tyvn"),
                k = (a("0NvL"), a("olOL")),
                T =
                    (a("SExc"),
                    function () {
                        return h.a.createElement(
                            h.a.Fragment,
                            null,
                            h.a.createElement(b.c, { id: "1click_save_card_desc_short", defaultMessage: "You can make a deposit with one click." }),
                            " ",
                            h.a.createElement("a", { href: "/terms/one-click", target: "_blank" }, h.a.createElement(b.c, { id: "1click_terms_and_conditions", defaultMessage: "Terms and conditions" }))
                        );
                    }),
                N = function (e) {
                    var t = e.field,
                        a = e.update,
                        n = t.id,
                        r = t.label,
                        i = t.value,
                        c = Object(y.z)(String(i)),
                        o = c.isChecked,
                        s = c.value,
                        l = c.onChange,
                        u = Object(m.useMemo)(
                            function () {
                                return Object(C.d)(n);
                            },
                            [n]
                        );
                    return (
                        Object(m.useEffect)(
                            function () {
                                a(n, null, o);
                            },
                            [n, o, a]
                        ),
                        h.a.createElement("div", { className: "subscribe-card-field" }, h.a.createElement(y.d, { dataTest: u, id: n, name: n, label: r, value: s, isChecked: o, onChange: l, hint: h.a.createElement(T, null) }))
                    );
                },
                M = a("i8up"),
                L = a("Xlh2");
            function H(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            var O = Object(b.e)({
                    invalid_bank_card_number: { id: "invalid_bank_card_number", defaultMessage: "Card number entered incorrectly" },
                    wrong_date_birth_format: { id: "wrong_date_birth_format", defaultMessage: 'Use the date format "dd-mm-yyyy"' },
                    empty_field: { id: "empty_field", defaultMessage: "The field should not be empty" },
                    invalid_bank_card_month: { id: "invalid_bank_card_month", defaultMessage: "Month entered incorrectly" },
                    invalid_bank_card_year: { id: "invalid_bank_card_year", defaultMessage: "Year entered incorrectly" },
                    wrong_pay_sum_min: { id: "wrong_pay_sum_min", defaultMessage: "Minimum payment amount: {min}" },
                    wrong_pay_sum_max: { id: "wrong_pay_sum_max", defaultMessage: "Maximum payment amount: {max}" },
                }),
                x = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? H(Object(a), !0).forEach(function (t) {
                                  s()(e, t, a[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                            : H(Object(a)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                              });
                    }
                    return e;
                })({}, L.a, {}, O),
                D = function (e) {
                    var t = e.country,
                        a = e.currentLang,
                        n = e.validationError,
                        i = e.currencyDefault,
                        c = n.value,
                        o = n.replacement,
                        s = h.a.createElement(b.c, x[c]);
                    switch (c) {
                        case "wrong_pay_sum_min":
                            s = h.a.createElement(b.c, r()({}, x[c], { values: { min: h.a.createElement(M.a, { amount: o.min, country: t, currency: i, lang: a, precision: 0 }) } }));
                            break;
                        case "wrong_pay_sum_max":
                            s = h.a.createElement(b.c, r()({}, x[c], { values: { max: h.a.createElement(M.a, { amount: o.max, country: t, currency: i, lang: a, precision: 0 }) } }));
                            break;
                        case "code_not_for_your_status":
                        case "code_not_for_your_high_status":
                            s = h.a.createElement(b.c, r()({}, x[c], { values: { value: o.level ? o.level.toUpperCase() : null } }));
                    }
                    return h.a.createElement("div", { className: "".concat("recharge-tooltip", "__info-container-item") }, s);
                },
                I = Object(f.Connector)(
                    function (e) {
                        var t = e.country,
                            a = e.currentLang,
                            n = e.validationErrors,
                            r = e.currencyDefault,
                            i = e.skelligErrors;
                        return Object.values(n).find(function (e) {
                            return e.shouldShow;
                        }) || i.length
                            ? h.a.createElement(
                                  "div",
                                  { className: E()("".concat("recharge-tooltip", "__info-container"), "".concat("recharge-tooltip", "__info-container_state-error")) },
                                  Object.keys(n).map(function (e) {
                                      return n[e].shouldShow ? h.a.createElement(D, { country: t, currentLang: a, validationError: n[e], currencyDefault: r, key: e }) : null;
                                  }),
                                  i.map(function (e) {
                                      var t = e.key,
                                          a = e.value;
                                      return h.a.createElement("div", { key: t, className: "".concat("recharge-tooltip", "__info-container-item") }, a);
                                  })
                              )
                            : null;
                    },
                    {
                        helper: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return { country: e.appService.country, currentLang: e.languageService.currentLang, validationErrors: e.validationErrors, currencyDefault: e.accountService.currencyDefault };
                        },
                    }
                ),
                S = Object(b.e)({
                    billing_pending_payment_msg: { id: "billing_pending_payment_msg", defaultMessage: "The payment is being processed..." },
                    billing_fail_payment_error: { id: "billing_fail_payment_error", defaultMessage: "Payment processing error. Please try again or contact our client support department." },
                    billing_success_payment_ok_msg: { id: "billing_success_payment_ok_msg", defaultMessage: "Your payment has been processed" },
                }),
                V = Object(f.Connector)(
                    function (e) {
                        var t = e.statusInfo,
                            a = t.text,
                            n = t.type;
                        if (!a) return null;
                        var r = S[a] || {};
                        return a && n
                            ? h.a.createElement(
                                  "div",
                                  { className: "".concat("recharge-tooltip", "__info-container ").concat("recharge-tooltip", "__info-container_state-").concat(n) },
                                  h.a.createElement("div", { className: "".concat("recharge-tooltip", "__info-container-item"), key: a }, h.a.createElement(b.c, r))
                              )
                            : null;
                    },
                    {
                        helper: function () {
                            return { statusInfo: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).statusInfo };
                        },
                    }
                ),
                F = a("9va6"),
                B = a("a0fm"),
                P = a("Krvq"),
                z =
                    (a("OlVp"),
                    function (e) {
                        var t = e.sum,
                            a = e.depositAmounts,
                            n = e.userServiceLevel,
                            r = e.className;
                        return h.a.createElement(P.a, {
                            className: r,
                            depositAmounts: a,
                            sum: t,
                            userServiceLevel: n,
                            withTitle: !0,
                            header: h.a.createElement("div", { className: r && "".concat(r, "__title") }, h.a.createElement(b.c, { id: "level_status_title", defaultMessage: "Level Status" }), ":"),
                        });
                    }),
                j = a("S6YD"),
                A = function (e) {
                    return h.a.createElement(
                        "svg",
                        r()({ viewBox: "0 0 ".concat(j.a.WIDTH, " ").concat(j.a.HEIGHT), width: j.a.WIDTH, height: j.a.HEIGHT, fill: j.a.FILL }, e),
                        h.a.createElement("path", {
                            d:
                                "M11.72 3.1c.17-.13.4-.13.57 0 2.73 2 5.08 2.7 7.08 2.11.31-.09.63.16.63.5v6.77c-.04 4.11-2.68 7.28-7.81 9.48a.48.48 0 0 1-.38 0c-5.2-2.2-7.85-5.37-7.81-9.49V5.74c0-.35.32-.6.64-.5 1.93.56 4.29-.13 7.08-2.15z",
                        })
                    );
                },
                G = a("TWw+"),
                R = "recharge-info-plate";
            function W(e) {
                var t = e.country,
                    a = e.currency,
                    n = e.currentLang,
                    r = e.riskFree;
                return h.a.createElement(
                    h.a.Fragment,
                    null,
                    Object(F.isEqual)(Object(v.toJS)(r), G.f)
                        ? h.a.createElement(
                              "span",
                              { className: R },
                              h.a.createElement("span", { className: "".concat(R, "__icon-wrap") }, h.a.createElement(A, { className: "".concat(R, "__icon ").concat(R, "__icon_shield ").concat(R, "__icon_animation-rotating") })),
                              h.a.createElement("span", { className: "".concat(R, "__text") }, "Â ")
                          )
                        : r &&
                              Object.keys(r).map(function (e, i) {
                                  return h.a.createElement(
                                      "span",
                                      { className: R, key: i },
                                      h.a.createElement(
                                          "span",
                                          { className: "".concat(R, "__icon-wrap") },
                                          h.a.createElement(A, { className: "".concat(R, "__icon ").concat(R, "__icon_shield") }),
                                          h.a.createElement("span", { className: "".concat(R, "__icon-text") }, r[Number(e)])
                                      ),
                                      h.a.createElement("span", { className: "".concat(R, "__text") }, r[Number(e)], " x", " ", h.a.createElement(M.a, { amount: e, country: t, currency: a, lang: n, precision: 0 }))
                                  );
                              })
                );
            }
            var X = a("FaLL"),
                U = a("6eLe"),
                Z = (a("qpmd"), "recharge-info");
            var Y = Object(f.Connector)(
                    function (e) {
                        var t = e.country,
                            a = e.currency,
                            n = e.currentLang,
                            r = e.selectedCell,
                            i = e.depositAmounts,
                            c = e.promoCode,
                            o = e.isRechargeWithoutBonus,
                            s = e.userServiceLevel;
                        return h.a.createElement(
                            "div",
                            { className: Z },
                            r &&
                                h.a.createElement(
                                    "div",
                                    { className: "".concat(Z, "__item ").concat(Z, "__item_flex") },
                                    h.a.createElement(
                                        "div",
                                        { className: "".concat(Z, "__info-wrap") },
                                        h.a.createElement(
                                            "div",
                                            { className: "".concat(Z, "__title") },
                                            o ? h.a.createElement(b.c, { id: "amount", defaultMessage: "Amount" }) : h.a.createElement(b.c, { id: "amount_with_bonus", defaultMessage: "Amount with bonus" }),
                                            ":"
                                        ),
                                        h.a.createElement(
                                            "div",
                                            { className: "".concat(Z, "__content") },
                                            h.a.createElement(M.a, { amount: Object(B.d)(r.value, r.bonus) + Object(B.f)(r.value, c && c.codeInformation), country: t, currency: a, lang: n, precision: 2 })
                                        )
                                    )
                                ),
                            s !== w.Fb.EXPERT &&
                                r &&
                                !Object(F.isEmpty)(r.riskFree) &&
                                h.a.createElement(
                                    "div",
                                    { className: "".concat(Z, "__item") },
                                    h.a.createElement("div", { className: "recharge-info-plates" }, U.f ? null : h.a.createElement(W, { country: t, currency: a, currentLang: n, riskFree: r.riskFree }))
                                ),
                            r && h.a.createElement("div", { className: "".concat(Z, "__item") }, h.a.createElement(z, { sum: r.value, depositAmounts: i, className: Z, userServiceLevel: s }))
                        );
                    },
                    {
                        helper: function (e) {
                            var t = e.rechargeBonusService,
                                a = t.selectedBonus,
                                n = t.serviceLevel,
                                r = !!a && a.id === X.c.DEFAULT_BONUS;
                            return {
                                country: e.appService.country,
                                currency: e.accountService.currencyDefault,
                                currentLang: e.languageService.currentLang,
                                selectedCell: e.selectedCell,
                                depositAmounts: e.depositAmounts,
                                isRechargeWithoutBonus: r,
                                promoCode: e.promoCode,
                                userServiceLevel: n,
                            };
                        },
                    }
                ),
                K = a("SDJZ"),
                J = a.n(K),
                q = a("NToG"),
                Q = a.n(q),
                $ = a("K4DB"),
                ee = a.n($),
                te = a("+IV6"),
                ae = a.n(te),
                ne = a("eef+"),
                re = a.n(ne),
                ie = a("wg1a"),
                ce = a("BK8K"),
                oe = (a("hkAf"), "sum-input-dropdown");
            function se(e) {
                return h.a.createElement(
                    "ul",
                    { className: oe },
                    e.selectedBonus.grid.map(function (t, a) {
                        var n = e.selectedBonus.id === X.c.DEFAULT_BONUS || !t.bonus || 0 === Object.keys(t.bonus).length || 0 === t.bonus.value;
                        return h.a.createElement(
                            "li",
                            {
                                className: E()("".concat(oe, "__item"), s()({}, "".concat(oe, "__item_selected"), e.selectedValue === t.value)),
                                key: a,
                                onClick: function () {
                                    e.onAmountClickHandler(t.value);
                                },
                            },
                            h.a.createElement("span", { className: "".concat(oe, "__amount") }, h.a.createElement(M.a, { amount: t.value, country: e.country, currency: e.currency, lang: e.currentLang, precision: 0 })),
                            n
                                ? null
                                : h.a.createElement(
                                      "span",
                                      { className: "".concat(oe, "__description") },
                                      h.a.createElement(b.c, { id: "cabinet_bonus", defaultMessage: "Bonus" }),
                                      "Â ",
                                      t.bonus.type === X.b.PERCENT
                                          ? "".concat(Object(ce.n)(t.bonus.value, 0, e.currentLang), "%")
                                          : h.a.createElement(M.a, { amount: t.bonus.value, country: e.country, currency: e.currency, lang: e.currentLang, precision: 0 })
                                  )
                        );
                    })
                );
            }
            var le = a("1XfU"),
                ue = function (e) {
                    var t;
                    return h.a.createElement(
                        "li",
                        { className: E()("".concat(fe, "__item"), ((t = {}), s()(t, "".concat(fe, "__item_selected"), e.isSelected), s()(t, "selected", e.isRedirecting), t)), "data-test": e["data-test"], onClick: e.clickHandler },
                        e.children,
                        e.isRedirecting ? h.a.createElement(le.a, { style: { padding: 0, right: "16px", left: "auto" }, color: "#2aa76d", size: "small" }) : null
                    );
                },
                de = a("CkPy"),
                pe = a.n(de),
                me = function (e) {
                    return h.a.createElement(pe.a, { autoHeight: !0, autoHeightMax: 300 }, h.a.createElement("ul", { className: "".concat(fe, "__items") }, e.children));
                },
                he = function (e) {
                    return h.a.createElement(
                        "div",
                        { className: "".concat(fe, "__input"), onClick: e.clickHandler, "data-test": e["data-test"] },
                        h.a.createElement("div", { className: "".concat(fe, "__input-content") }, e.children),
                        h.a.createElement(
                            "svg",
                            { xmlns: "http://www.w3.org/2000/svg", className: "".concat(fe, "__input-arrow") },
                            h.a.createElement("path", { d: "M7.35 9.65a.5.5 0 1 0-.7.7l5 5a.5.5 0 0 0 .7 0l5-5a.5.5 0 0 0-.7-.7L12 14.29 7.35 9.65z" })
                        )
                    );
                },
                fe = (a("OuHt"), "recharge-tooltip-dropdown"),
                ve = (function (e) {
                    function t() {
                        return J()(this, t), ee()(this, ae()(t).apply(this, arguments));
                    }
                    return (
                        re()(t, e),
                        Q()(t, [
                            {
                                key: "render",
                                value: function () {
                                    return h.a.createElement("div", { className: E()(fe, s()({}, "".concat(fe, "_is-opened"), this.props.isOpened)) }, this.props.children);
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component);
            (ve.Input = he), (ve.Items = me), (ve.Item = ue);
            var ge = ve;
            function Ee(e) {
                return h.a.createElement(
                    ge,
                    { isOpened: !0 },
                    h.a.createElement(
                        ge.Items,
                        null,
                        e.bonusList.map(function (t) {
                            return h.a.createElement(
                                ge.Item,
                                {
                                    clickHandler: function () {
                                        e.onBonusClick(t);
                                    },
                                    isSelected: t === e.selectedBonus.id,
                                    key: t,
                                },
                                h.a.createElement(b.c, G.c["".concat(t, "_title")])
                            );
                        })
                    )
                );
            }
            var _e = a("0jHg"),
                be = a("0255"),
                Ce =
                    (a("P0xr"),
                    (function (e) {
                        function t() {
                            var e, a;
                            J()(this, t);
                            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return (
                                ((a = ee()(this, (e = ae()(t)).call.apply(e, [this].concat(r)))).state = { isAmountsOpened: !1, isBonusesOpened: !1, hasError: !1 }),
                                (a.toggleAmountsDropdown = function () {
                                    a.setState({ isAmountsOpened: !a.state.isAmountsOpened, isBonusesOpened: !1 }), a.props.onToggleDropdown(!a.state.isAmountsOpened);
                                }),
                                (a.closeAmountsDropdown = function () {
                                    a.setState({ isAmountsOpened: !1, isBonusesOpened: !1 }), a.props.onToggleDropdown(!1);
                                }),
                                (a.onChange = function (e) {
                                    a.props.api.onChangeAmount(e), a.closeAmountsDropdown();
                                }),
                                (a.toggleBonusesDropdown = function () {
                                    a.props.api.sendBonusListStatistic(!a.state.isBonusesOpened), a.setState({ isAmountsOpened: !1, isBonusesOpened: !a.state.isBonusesOpened }), a.props.onToggleDropdown(!a.state.isBonusesOpened);
                                }),
                                (a.selectBonus = function (e) {
                                    a.props.api.bonusListElementClickHandler(e), a.toggleBonusesDropdown();
                                }),
                                (a.selectAmount = function (e) {
                                    a.props.api.gridCellClickHandler(e), a.closeAmountsDropdown();
                                }),
                                (a.declinePromoCode = function () {
                                    var e = a.props,
                                        t = e.api,
                                        n = e.bonusList,
                                        r = c()(n, 1)[0];
                                    t.bonusListElementClickHandler(r), t.removePromoCode();
                                }),
                                a
                            );
                        }
                        return (
                            re()(t, e),
                            Q()(t, [
                                {
                                    key: "componentWillUpdate",
                                    value: function (e) {
                                        this.props.selectedPaymentSystem.name !== e.selectedPaymentSystem.name && this.closeAmountsDropdown();
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e,
                                            t = this.props.selectedBonus.id === X.c.CODE;
                                        return h.a.createElement(
                                            "div",
                                            {
                                                className: E()(
                                                    "amount-bonus-input",
                                                    ((e = {}),
                                                    s()(e, "".concat("amount-bonus-input", "_amounts-dropdown-is-opened"), this.state.isAmountsOpened),
                                                    s()(e, "".concat("amount-bonus-input", "_bonuses-dropdown-is-opened"), this.state.isBonusesOpened),
                                                    e)
                                                ),
                                            },
                                            h.a.createElement(
                                                "div",
                                                { className: "".concat("amount-bonus-input", "__inputs") },
                                                h.a.createElement(
                                                    "label",
                                                    {
                                                        className: E()("".concat("amount-bonus-input", "__amount-input-label"), s()({}, "".concat("amount-bonus-input", "__amount-input-label_has-error"), this.state.hasError)),
                                                        onClick: this.toggleAmountsDropdown,
                                                    },
                                                    h.a.createElement(
                                                        k.b,
                                                        { code: "qQas144d" },
                                                        h.a.createElement(be.a, { country: this.props.country, currency: this.props.currency, className: "".concat("amount-bonus-input", "__currency") })
                                                    ),
                                                    h.a.createElement(ie.a, {
                                                        min: this.props.selectedPaymentSystem.min,
                                                        max: this.props.selectedPaymentSystem.max,
                                                        name: "tooltipRechargeAmount",
                                                        className: "".concat("amount-bonus-input", "__amount-input"),
                                                        onClick: this.toggleAmountsDropdown,
                                                        onChange: this.onChange,
                                                        onValidate: this.props.api.onValidateInput,
                                                        defaultAmount: this.props.selectedCell ? this.props.selectedCell.value : this.props.selectedBonus.defaultAmount,
                                                        selectedPaymentSystem: this.props.selectedPaymentSystem,
                                                    })
                                                ),
                                                h.a.createElement(
                                                    "div",
                                                    { className: "".concat("amount-bonus-input", "__bonus-input"), onClick: t ? this.declinePromoCode : this.toggleBonusesDropdown },
                                                    h.a.createElement("div", { className: "".concat("amount-bonus-input", "__bonus-input-content") }, h.a.createElement(b.c, G.c["".concat(this.props.selectedBonus.id, "_title")])),
                                                    t
                                                        ? h.a.createElement(_e.a, { className: "".concat("amount-bonus-input", "__bonus-input-cross") })
                                                        : h.a.createElement(
                                                              "svg",
                                                              { className: "".concat("amount-bonus-input", "__bonus-input-arrow") },
                                                              h.a.createElement("path", { d: "M7.35 9.65a.5.5 0 1 0-.7.7l5 5a.5.5 0 0 0 .7 0l5-5a.5.5 0 0 0-.7-.7L12 14.29 7.35 9.65z" })
                                                          )
                                                )
                                            ),
                                            h.a.createElement(
                                                "div",
                                                { className: "".concat("amount-bonus-input", "__amounts-dropdown") },
                                                h.a.createElement(se, {
                                                    country: this.props.country,
                                                    currency: this.props.currency,
                                                    currentLang: this.props.currentLang,
                                                    onAmountClickHandler: this.selectAmount,
                                                    selectedBonus: this.props.selectedBonus,
                                                    selectedValue: this.props.selectedCell ? this.props.selectedCell.value : this.props.selectedBonus.defaultAmount,
                                                })
                                            ),
                                            t
                                                ? null
                                                : h.a.createElement(
                                                      "div",
                                                      { className: "".concat("amount-bonus-input", "__bonuses-dropdown") },
                                                      h.a.createElement(Ee, { bonusList: this.props.bonusList, selectedBonus: this.props.selectedBonus, onBonusClick: this.selectBonus })
                                                  )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(m.Component)),
                ye = Object(f.Connector)(Ce, {
                    helper: function (e) {
                        var t = e.rechargeTooltipService.selectedPaymentSystem,
                            a = e.rechargeBonusService,
                            n = a.selectedBonus;
                        return {
                            bonusList: a.bonusList,
                            country: e.appService.country,
                            currency: e.accountService.currencyDefault,
                            currentLang: e.languageService.currentLang,
                            selectedBonus: n,
                            selectedCell: e.selectedCell,
                            selectedPaymentSystem: t,
                        };
                    },
                }),
                we = a("L5IH"),
                ke = a("vMea"),
                Te = a("cM5a"),
                Ne =
                    (a("nnMg"),
                    function (e) {
                        var t = e.autoComplete,
                            a = void 0 === t ? "off" : t,
                            n = e.dataType,
                            r = e.inputName,
                            i = e.name,
                            c = e.onBlur,
                            o = e.onChange,
                            s = e.onFocus,
                            l = e.placeholder,
                            u = e.required,
                            d = e.skin,
                            p = e.type,
                            m = void 0 === p ? "text" : p,
                            f = e.validation,
                            v = e.value,
                            g = f && f.type === Te.a.ERROR;
                        return h.a.createElement(
                            "div",
                            { className: E()("flat-field", { "flat-field_skin-grey": "grey" === d, "flat-field_has-error": g }) },
                            h.a.createElement("input", {
                                id: r,
                                className: E()("flat-field__input", { "flat-field__input_has-error": g, "flat-field__input_is-filled": null !== v && "" !== v, name: i }),
                                type: m,
                                name: r,
                                value: v,
                                onChange: o,
                                onBlur: c,
                                onFocus: s,
                                autoComplete: a,
                                required: u,
                                "data-test": "input-".concat(i),
                                "data-type": n,
                            }),
                            h.a.createElement("label", { htmlFor: r, className: "flat-field__label" }, l)
                        );
                    }),
                Me = h.a.createElement(b.c, { id: "error", defaultMessage: "Error" }),
                Le = a("vT2a"),
                He = Object(f.Connector)(
                    function (e) {
                        var t = e.country,
                            a = e.promoCodeInfo,
                            n = e.currency,
                            r = e.lang,
                            i = a.intervals[0],
                            c = i.value,
                            o = i.min,
                            s = i.type,
                            l = r || w.Ab.EN;
                        return h.a.createElement(
                            m.Fragment,
                            null,
                            "+",
                            s === Le.a.PERCENT ? h.a.createElement(m.Fragment, null, c, "%") : h.a.createElement(M.a, { country: t, lang: l, amount: c, currency: n, precision: 0 }),
                            "Â ",
                            o && 0 !== parseInt(o, 10)
                                ? h.a.createElement(b.c, {
                                      id: "dealSum_of_deposit",
                                      defaultMessage: "of the deposit when you add {pay}.",
                                      values: { pay: h.a.createElement(M.a, { country: t, lang: l, amount: o, currency: n, precision: 0 }) },
                                  })
                                : null,
                            h.a.createElement("br", null),
                            h.a.createElement(b.c, { id: "amount_will_be_credited", defaultMessage: "The amount will be credited as a bonus." })
                        );
                    },
                    {
                        helper: function (e) {
                            return { country: e.appService.country, lang: e.languageService.currentLang };
                        },
                    }
                ),
                Oe = Object(f.Connector)(
                    function (e) {
                        var t = e.country,
                            a = e.promoCodeInfo,
                            n = e.currency,
                            r = e.lang,
                            i = a.riskFree,
                            c = a.type,
                            o = Number(Object.keys(i)[0]),
                            s = i && i[o] && i[o][0],
                            l = s && s.count,
                            u = (s && s.amount) || 0,
                            d = (l && u && l * u) || 0,
                            p = c === Le.a.PERCENT,
                            f = r || w.Ab.EN;
                        return h.a.createElement(
                            m.Fragment,
                            null,
                            h.a.createElement(b.c, { id: "risk_free_trades", defaultMessage: "Risk-free trades of" }),
                            "Â ",
                            p ? "".concat(d, "%") : h.a.createElement(M.a, { amount: d, currency: n, precision: 0, country: t, lang: f }),
                            h.a.createElement("br", null),
                            h.a.createElement(b.c, {
                                id: "dealCount_trades_of_dealSum",
                                defaultMessage: "Number of trades: {dealCount} at {dealSum}.",
                                values: { dealCount: String(l), dealSum: p ? "".concat(u, "%") : h.a.createElement(M.a, { amount: u, currency: n, precision: 0, country: t, lang: f }) },
                            }),
                            o && 0 !== parseInt(o, 10)
                                ? h.a.createElement(
                                      m.Fragment,
                                      null,
                                      h.a.createElement("br", null),
                                      h.a.createElement(b.c, {
                                          id: "with_refill_starting_at",
                                          defaultMessage: "With a refill starting at {pay}.",
                                          values: { pay: h.a.createElement(M.a, { amount: o, currency: n, precision: 0, country: t, lang: f }) },
                                      })
                                  )
                                : null
                        );
                    },
                    {
                        helper: function (e) {
                            return { country: e.appService.country, lang: e.languageService.currentLang };
                        },
                    }
                ),
                xe = function (e) {
                    var t = e.country,
                        a = e.lang,
                        n = e.currency,
                        r = e.price;
                    return h.a.createElement(m.Fragment, null, h.a.createElement(b.c, { id: "old_price", defaultMessage: "Old price" }), ":Â ", h.a.createElement(M.a, { country: t, lang: a, amount: r, currency: n, precision: 0 }));
                },
                De = function (e) {
                    var t = e.country,
                        a = e.lang,
                        n = e.currency,
                        r = e.price;
                    return h.a.createElement(m.Fragment, null, h.a.createElement(b.c, { id: "new_price", defaultMessage: "New price" }), ":Â ", h.a.createElement(M.a, { country: t, lang: a, amount: r, currency: n, precision: 0 }));
                },
                Ie = function (e) {
                    var t = e.country,
                        a = e.lang,
                        n = e.currency,
                        r = e.amount;
                    return h.a.createElement(
                        m.Fragment,
                        null,
                        "+",
                        h.a.createElement(M.a, { country: t, lang: a, amount: r, currency: n, precision: 0 }),
                        h.a.createElement("br", null),
                        h.a.createElement(b.c, { id: "amount_will_be_credited", defaultMessage: "The amount will be credited as a bonus." })
                    );
                },
                Se = function (e) {
                    var t = e.country,
                        a = e.lang,
                        n = e.currency,
                        r = e.amount,
                        i = e.count;
                    return h.a.createElement(
                        m.Fragment,
                        null,
                        h.a.createElement(b.c, { id: "risk_free_trades", defaultMessage: "Risk-free trades of" }),
                        "Â ",
                        h.a.createElement(M.a, { amount: r * i, currency: n, precision: 0, country: t, lang: a }),
                        h.a.createElement("br", null),
                        h.a.createElement(b.c, {
                            id: "dealCount_trades_of_dealSum",
                            defaultMessage: "Number of trades: {dealCount} at {dealSum}.",
                            values: { dealCount: String(i), dealSum: h.a.createElement(M.a, { country: t, lang: a, amount: r, currency: n, precision: 0 }) },
                        })
                    );
                },
                Ve = Object(f.Connector)(
                    function (e) {
                        var t = e.country,
                            a = e.promoCodeInfo,
                            n = e.currency,
                            r = e.lang,
                            i = a.pay,
                            c = a.sum,
                            o = a.riskFree,
                            s = a.level,
                            l = r || w.Ab.EN,
                            u = 2 * i;
                        return h.a.createElement(
                            m.Fragment,
                            null,
                            h.a.createElement(b.c, { id: "discount_service_level_status", defaultMessage: "50% discount on {value} status", values: { value: s.toUpperCase() } }),
                            h.a.createElement("br", null),
                            h.a.createElement(De, { country: t, lang: l, price: i, currency: n }),
                            h.a.createElement("br", null),
                            h.a.createElement(xe, { country: t, lang: l, price: u, currency: n }),
                            (c || o) &&
                                h.a.createElement(
                                    m.Fragment,
                                    null,
                                    h.a.createElement("br", null),
                                    h.a.createElement(b.c, { defaultMessage: "With a refill starting at {pay}.", id: "with_refill_starting_at", values: { pay: h.a.createElement(M.a, { amount: i, currency: n, precision: 0 }) } })
                                ),
                            c && h.a.createElement(m.Fragment, null, h.a.createElement("br", null), h.a.createElement(Ie, { country: t, lang: l, price: i, currency: n, amount: c, minPay: i })),
                            o && h.a.createElement(m.Fragment, null, h.a.createElement("br", null), h.a.createElement(Se, { country: t, lang: l, price: i, currency: n, amount: o.amount, count: o.count }))
                        );
                    },
                    {
                        helper: function (e) {
                            return { country: e.appService.country, lang: e.languageService.currentLang };
                        },
                    }
                ),
                Fe = function (e) {
                    var t = e.bonusName,
                        a = e.currency,
                        n = e.promoCodeInfo,
                        r = null;
                    switch (n.codeType) {
                        case Le.f.SERVICE_LEVELS:
                            r = h.a.createElement(Ve, { currency: a, promoCodeInfo: n });
                            break;
                        case Le.f.RISK_FREE:
                            r = h.a.createElement(Oe, { currency: a, promoCodeInfo: n });
                            break;
                        case Le.f.ON_PAY:
                            r = h.a.createElement(He, { currency: a, promoCodeInfo: n });
                            break;
                        default:
                            r = Me;
                    }
                    return h.a.createElement(
                        "div",
                        { className: "promocode-plate" },
                        h.a.createElement("div", { className: "".concat("promocode-plate", "__heading") }, h.a.createElement(b.c, { id: "promo", defaultMessage: "Promo" }), ": ", t.toUpperCase()),
                        h.a.createElement("p", { className: "".concat("promocode-plate", "__description") }, r)
                    );
                },
                Be = (a("ziv0"), Object(b.e)({ enter_your_promo_code: { id: "enter_your_promo_code", defaultMessage: "Enter your promo code" } })),
                Pe = { code: null, msg: null, type: "error" },
                ze = (function (e) {
                    function t() {
                        var e, a;
                        J()(this, t);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (
                            ((a = ee()(this, (e = ae()(t)).call.apply(e, [this].concat(r)))).state = { isValid: !0, isAllowApplyPromoCode: !1, promoCodeInputValue: "", promoCodeInfo: null, isLoading: !1 }),
                            (a.onChangeHandler = function (e) {
                                var t = e.currentTarget.value.trimLeft();
                                a.setState({ promoCodeInputValue: t, isAllowApplyPromoCode: 0 !== t.length });
                            }),
                            (a.applyPromoCode = function () {
                                var e = a.state.promoCodeInputValue;
                                a.setState({ isLoading: !0 }),
                                    we.a
                                        .applyPromoCode(e.trim())
                                        .then(function (t) {
                                            a.props.promoCodeSuccessHandler(e, t), a.props.promoCodeFormOpenedHandler(!1), a.setState({ isValid: !0, promoCodeInfo: t });
                                        })
                                        .catch(function (e) {
                                            a.props.promoCodeErrorHandler(e.status_message, e.bonus.level), a.setState({ isValid: !1 });
                                        })
                                        .finally(function () {
                                            a.setState({ isLoading: !1 });
                                        });
                            }),
                            a
                        );
                    }
                    return (
                        re()(t, e),
                        Q()(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.props.promoCodeFormOpenedHandler(!0);
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.props.promoCodeFormOpenedHandler(!1);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state,
                                        t = e.isValid,
                                        a = e.isAllowApplyPromoCode,
                                        n = e.isLoading,
                                        r = e.promoCodeInfo,
                                        i = e.promoCodeInputValue,
                                        c = this.props.currency;
                                    return r
                                        ? h.a.createElement(Fe, { bonusName: i, promoCodeInfo: r, currency: c })
                                        : h.a.createElement(
                                              m.Fragment,
                                              null,
                                              h.a.createElement(
                                                  "div",
                                                  { className: "".concat(Ue, "__extra-fields") },
                                                  h.a.createElement(Ne, {
                                                      placeholder: b.g.formatMessage(Be.enter_your_promo_code),
                                                      dataType: "text",
                                                      id: "rechargeTooltipPromoCodeInput",
                                                      name: "rechargeTooltipPromoCodeInput",
                                                      inputName: "rechargeTooltipPromoCodeInput",
                                                      type: "text",
                                                      value: i,
                                                      onChange: this.onChangeHandler,
                                                      validation: t ? void 0 : Pe,
                                                  })
                                              ),
                                              h.a.createElement(
                                                  ke.a,
                                                  {
                                                      "data-test": "recharge-tooltip-submit-button",
                                                      disabled: !a || n,
                                                      block: !0,
                                                      onClick: this.applyPromoCode,
                                                      className: "".concat(Ue, "__promocode-button"),
                                                      skin: !a || n ? "disabled" : "accent",
                                                      isLoading: n,
                                                  },
                                                  h.a.createElement(b.c, { id: "apply", defaultMessage: "Apply" })
                                              )
                                          );
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component),
                je = function () {
                    return h.a.createElement("div", { className: "backdrop" });
                },
                Ae = a("2py0"),
                Ge = a("//a/"),
                Re = a("za9t");
            a("qftv");
            function We(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            function Xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? We(Object(a), !0).forEach(function (t) {
                              s()(e, t, a[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                        : We(Object(a)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                          });
                }
                return e;
            }
            a.d(t, "a", function () {
                return Ue;
            });
            var Ue = "recharge-tooltip";
            t.b = Object(f.Connector)(
                function (e) {
                    var t,
                        a = Object(m.useState)(!1),
                        n = c()(a, 2),
                        i = n[0],
                        o = n[1],
                        l = Object(m.useState)(!1),
                        d = c()(l, 2),
                        f = d[0],
                        v = d[1],
                        g = Object(m.useState)(!1),
                        _ = c()(g, 2),
                        T = _[0],
                        M = _[1],
                        L = e.selectedPaymentSystem,
                        H = e.extraFields,
                        O = e.paymentSystemsList,
                        x = Object(C.e)({
                            extraFields: H || [],
                            submitButton: {
                                dataTest: "recharge-tooltip-submit-button",
                                form: "recharge-form",
                                handler: function (t) {
                                    Object.entries(t).forEach(function (t) {
                                        var a = c()(t, 2),
                                            n = a[0],
                                            r = a[1];
                                        e.api.formUpdated(n, null, r);
                                    }),
                                        e.api.submitFormHandler({ preventDefault: function () {} });
                                },
                                text: h.a.createElement(b.c, { id: "deposit_btn_text", defaultMessage: "Deposit" }),
                            },
                            paymentSystemId: L.id,
                        }),
                        D = x.extraFields,
                        S = p()(x, ["extraFields"]),
                        F = Object(C.i)(S),
                        B = F.errorsList,
                        P = F.useFormFieldCreator,
                        z = F.formProps,
                        j = F.submitButtonProps,
                        A = Object(C.k)({ list: D, ui: { inputElement: y.i, selectElement: y.o }, useFormFieldCreator: P }),
                        G = Object(m.useCallback)(function () {
                            o(!0);
                        }, []),
                        R = Object(m.useCallback)(function () {
                            o(!1);
                        }, []),
                        W = Object(m.useCallback)(
                            function (t) {
                                !(function (e, t) {
                                    Object(Ge.a)(e)
                                        ? Object(Ae.a)(e.name)
                                            ? window.location.replace("/cabinet?origin=recharge_tooltip&paymentSystem=".concat(e.name, "#tab=bank_transfers"))
                                            : t.redirectToCabinet(e)
                                        : t.choosePaymentSystemClickHandler(e.id, e.aggregator);
                                })(t, e.api);
                            },
                            [e.api]
                        ),
                        U = Object(m.useCallback)(function (e) {
                            v(e);
                        }, []),
                        Z = Object(m.useCallback)(
                            function (t) {
                                e.api.removeValidateError(X.e), M(t);
                            },
                            [e.api]
                        ),
                        K = Object(m.useCallback)(
                            function (t, a) {
                                e.api.addValidationError(X.e, t, !0, { level: a });
                            },
                            [e.api]
                        ),
                        J = Object(m.useCallback)(
                            function (t, a) {
                                e.api.removeValidateError(X.e), e.api.imposePromoCode(t, a);
                            },
                            [e.api]
                        ),
                        q = e.paymentSystemsListGroupedBy,
                        Q = e.isRechargeTooltipVisible,
                        $ = e.subscribeField,
                        ee = e.api,
                        te = e.selectedBonus,
                        ae = e.currency,
                        ne = e.isPaymentInProcess,
                        re = e.isRedirectToCabinet,
                        ie = e.theme,
                        ce = e.isAmountInvalid;
                    if (!q || !L) return null;
                    var oe = ie === w.cd.DARK ? y.t.DARK : y.t.LIGHT,
                        se = O.options.filter(function (e) {
                            return e.id !== Re.c.OLYMPTRADE;
                        }),
                        le = se.reduce(function (e, t) {
                            var a = t.group,
                                n = p()(t, ["group"]),
                                r = e.get(a) || [];
                            return e.set(a, [].concat(u()(r), [Xe({}, n, { groupName: a, icons: { sm: { alt: n.label, src: n.icons.sm } } })]));
                        }, new Map());
                    return h.a.createElement(
                        y.u,
                        { themeName: oe },
                        h.a.createElement(
                            "form",
                            r()(
                                {
                                    className: E()(Ue, ((t = {}), s()(t, "".concat(Ue, "_visible"), Q), s()(t, "".concat(Ue, "_pay-systems-is-opened"), i), s()(t, "".concat(Ue, "_amounts-bonuses-is-opened"), f), t)),
                                    id: "recharge-tooltip-form",
                                    onClick: function () {
                                        ee.emptyStatusInfoData(!0);
                                    },
                                },
                                z
                            ),
                            re ? h.a.createElement(je, null) : null,
                            h.a.createElement(
                                "div",
                                { className: "".concat(Ue, "__container") },
                                h.a.createElement(y.n, { defaultOption: L, options: le, dataTest: "recharge-tooltip-dropdown", elementsToShow: 7.5, pspChangeHandler: W, onBeforeListOpen: G, onListClose: R, isAbsolutePositionedList: !1 }),
                                h.a.createElement(k.b, null, h.a.createElement("div", { className: "".concat(Ue, "__extra-fields ").concat(Ue, "__psp-fields") }, A)),
                                h.a.createElement("div", { className: "".concat(Ue, "__amount-bonus-input") }, h.a.createElement(ye, { onToggleDropdown: U })),
                                te && te.id === X.c.CODE ? h.a.createElement(ze, { promoCodeFormOpenedHandler: Z, promoCodeErrorHandler: K, promoCodeSuccessHandler: J, currency: ae }) : null,
                                T
                                    ? null
                                    : h.a.createElement(
                                          m.Fragment,
                                          null,
                                          h.a.createElement("div", { className: "".concat(Ue, "__recharge-info") }, h.a.createElement(Y, null)),
                                          h.a.createElement(y.p, r()({}, j, { isDisabled: ne || j.isDisabled || ce })),
                                          !!$ && h.a.createElement("div", { className: "".concat(Ue, "__subscribe-card-field") }, h.a.createElement(N, { field: $, update: ee.formUpdated }))
                                      ),
                                h.a.createElement(y.k, { isShown: ne })
                            ),
                            h.a.createElement(k.b, null, h.a.createElement(I, { skelligErrors: B })),
                            h.a.createElement(k.b, null, h.a.createElement(V, null))
                        )
                    );
                },
                {
                    helper: function (e) {
                        var t = e.rechargeTooltipService,
                            a = t.paymentSystemsList,
                            n = t.selectedPaymentSystem,
                            r = t.isRechargeTooltipVisible,
                            i = t.paymentSystemsListGroupedBy,
                            c = (n || {}).extraFields,
                            o = e.rechargeBonusService,
                            s = o.selectedBonus,
                            l = o.bonusList,
                            u = Object(v.toJS)(a.models).map(function (e) {
                                return Xe({}, e, { aggregatorName: e.aggregator });
                            });
                        return {
                            canSubmitForm: e.canSubmitForm,
                            isRechargeTooltipVisible: r,
                            paymentSystemsListGroupedBy: i,
                            selectedPaymentSystem: Xe({}, n, { aggregatorName: n.aggregator, groupName: n.group, icons: { sm: { src: n.icons.sm, alt: n.label } } }),
                            subscribeField: Object(_.b)(c, G.l),
                            extraFields: Object(_.a)(c, [G.l]),
                            selectedBonus: s,
                            currency: e.accountService.currencyDefault,
                            bonusList: l,
                            isPaymentInProcess: e.isPaymentInProcess,
                            isRedirectToCabinet: e.isRedirectToCabinet,
                            redirectingPaymentSystemId: e.redirectingPaymentSystemId,
                            theme: e.uiService.theme,
                            isAmountInvalid: Object.prototype.hasOwnProperty.call(e.validationErrors, "tooltipRechargeAmount"),
                            paymentSystemsList: { options: u },
                            userId: e.profileService.id,
                        };
                    },
                }
            );
        },
        "6+8U": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return w;
            });
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("xARA"),
                v = a.n(f),
                g = a("W+wE"),
                E = a("LUSz"),
                _ = a("7QWs"),
                b = a("6cnl"),
                C = a("8Jek"),
                y = a.n(C),
                w = (function (e) {
                    function t() {
                        var e, a;
                        r()(this, t);
                        for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                        return (
                            ((a = s()(this, (e = u()(t)).call.apply(e, [this].concat(i)))).state = { centerDialog: void 0 }),
                            (a.onCloseClick = function (e) {
                                (e && !e.nativeEvent.target.getAttribute("data-close")) || (!(a.props.onClose && !1 === a.props.onClose()) && a.close());
                            }),
                            (a.closeTM = null),
                            a
                        );
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    document.body.classList.toggle(this.props.bodyClassName, !0),
                                        this.props.autoClose &&
                                            (this.closeTM = setTimeout(function () {
                                                e.autoClose();
                                            }, this.props.autoClose)),
                                        this.onComponentDidMount && this.onComponentDidMount(),
                                        this.setState({ centerDialog: this.needCenterDialog() });
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e, t) {
                                    var a = this.needCenterDialog();
                                    void 0 !== t.centerDialog && t.centerDialog !== a && this.setState({ centerDialog: a });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    document.body.classList.toggle(this.props.bodyClassName, !1), clearTimeout(this.closeTM), g.a.off(null, null, this);
                                },
                            },
                            {
                                key: "autoClose",
                                value: function () {
                                    !(this.props.onAutoClose && !1 === this.props.onAutoClose()) && this.close();
                                },
                            },
                            {
                                key: "close",
                                value: function () {
                                    v.a.unmountComponentAtNode(document.querySelector(".dialogs-container.level-".concat(this.props.level)));
                                },
                            },
                            {
                                key: "needCenterDialog",
                                value: function () {
                                    var e = document.documentElement.clientHeight;
                                    return this.dialog.offsetHeight <= e - 100;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props.style || {},
                                        a = this.props.children || null;
                                    return (
                                        this.props.passPropsToChild &&
                                            this.props.children &&
                                            (a = h.a.Children.map(
                                                this.props.children,
                                                function (e) {
                                                    return h.a.cloneElement(e, { closeDialog: this.onCloseClick });
                                                },
                                                this
                                            )),
                                        h.a.createElement(
                                            _.a,
                                            { component: E.a },
                                            h.a.createElement(
                                                b.a,
                                                { classNames: this.props.transitionName || "", appear: !!this.props.transitionName, enter: !1, exit: !1, timeout: { appear: this.props.transitionTimeout || 400 } },
                                                h.a.createElement(
                                                    "div",
                                                    { className: "dialog-container overlay" },
                                                    h.a.createElement(
                                                        "div",
                                                        {
                                                            "data-close": "click-to-close",
                                                            className: y()("dialog-container__inner", this.state.centerDialog && "dialog-container__inner_centered"),
                                                            onClick: this.props.isClose && this.onCloseClick,
                                                        },
                                                        h.a.createElement(
                                                            "div",
                                                            {
                                                                id: this.props.id,
                                                                className: this.props.className ? "".concat(this.props.className, " dialog-box") : "dialog dialog-box",
                                                                style: t,
                                                                ref: function (t) {
                                                                    e.dialog = t;
                                                                },
                                                            },
                                                            this.props.isClose
                                                                ? h.a.createElement(
                                                                      "button",
                                                                      { type: "button", className: "close", "data-close": "click-to-close", onClick: this.onCloseClick },
                                                                      h.a.createElement("i", { className: "font-icon-close_big", "data-close": "click-to-close" }),
                                                                      this.props.closeBtnText
                                                                  )
                                                                : null,
                                                            a
                                                        )
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
                })(m.Component);
            w.defaultProps = {
                id: "",
                isClose: !0,
                isHeader: !0,
                className: void 0,
                title: "",
                modal: !0,
                passPropsToChild: !1,
                onClose: void 0,
                onAutoClose: void 0,
                autoClose: !1,
                level: 1,
                top: void 0,
                left: void 0,
                bodyClassName: "page-overflow-hidden",
                dialogOverlayId: "dialog-under-layer",
                closeBtnText: "Close",
            };
        },
        6280: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-brzu.decec01e.svg";
        },
        "65g3": function (e, t, a) {},
        "6ni3": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-dgaz.b9cea177.svg";
        },
        "6nmF": function (e, t, a) {
            "use strict";
            a.d(t, "l", function () {
                return n;
            }),
                a.d(t, "d", function () {
                    return r;
                }),
                a.d(t, "h", function () {
                    return i;
                }),
                a.d(t, "g", function () {
                    return c;
                }),
                a.d(t, "f", function () {
                    return o;
                }),
                a.d(t, "i", function () {
                    return s;
                }),
                a.d(t, "k", function () {
                    return l;
                }),
                a.d(t, "a", function () {
                    return u;
                }),
                a.d(t, "m", function () {
                    return d;
                }),
                a.d(t, "e", function () {
                    return p;
                }),
                a.d(t, "b", function () {
                    return m;
                }),
                a.d(t, "c", function () {
                    return h;
                }),
                a.d(t, "j", function () {
                    return f;
                });
            var n = "RT_RB",
                r = "LB_LT",
                i = "LT_RT",
                c = "LT_RB",
                o = "LT_LB",
                s = "RB_LT",
                l = "RB_RT",
                u = "BC_TC",
                d = "TC_BC",
                p = "LC_RT",
                m = "BC_TC_RAISEUP",
                h = "LB_LB_RAISEUP",
                f = "RB_RB_RAISEUP";
        },
        "7oIa": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { d: "M12.845 17.73a.387.387 0 0 0 .728.024l4.4-11.226a.387.387 0 0 0-.5-.501L6.245 10.422a.387.387 0 0 0 .024.73l4.36 1.376c.401.126.716.44.842.842l1.373 4.36z" })
                );
            };
        },
        "7tgW": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ma.f8a2f3ab.svg";
        },
        "7wds": function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m);
            t.a = function (e, t, a, n, i) {
                return (function (o) {
                    function l() {
                        var e, t;
                        r()(this, l);
                        for (var a = arguments.length, n = new Array(a), i = 0; i < a; i++) n[i] = arguments[i];
                        return ((t = s()(this, (e = u()(l)).call.apply(e, [this].concat(n)))).state = { started: !1, error: null }), t;
                    }
                    return (
                        p()(l, o),
                        c()(l, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var a = this;
                                    t.length &&
                                        Promise.all(
                                            t.map(function (t) {
                                                return t.start(e.displayName || e.name);
                                            })
                                        )
                                            .then(function () {
                                                "function" == typeof n && n(), a.setState({ started: !0 });
                                            })
                                            .catch(function (e) {
                                                a.setState({ error: e });
                                            });
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    try {
                                        a.length &&
                                            !this.state.error &&
                                            (a.map(function (t) {
                                                return t.stop(e.displayName || e.name);
                                            }),
                                            "function" == typeof i && i());
                                    } catch (e) {
                                        this.setState({ error: "stop_service_fail" });
                                    }
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    if (this.state.error) throw new Error(this.state.error);
                                    return this.state.started ? (this.props.children ? h.a.createElement(e, null, this.props.children) : h.a.createElement(e, null)) : null;
                                },
                            },
                        ]),
                        l
                    );
                })(h.a.Component);
            };
        },
        "8GO6": function (e, t, a) {
            "use strict";
            var n = a("xARA"),
                r = a.n(n);
            t.a = function (e) {
                var t = e.children,
                    a = e.node;
                return a ? r.a.createPortal(t, a) : null;
            };
        },
        "8QGG": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ms.7f1f5b4b.svg";
        },
        "8UmB": function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("us2/"),
                v = a("BK8K"),
                g = (function (e) {
                    function t() {
                        return r()(this, t), s()(this, u()(t).apply(this, arguments));
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "shouldComponentUpdate",
                                value: function (e) {
                                    return this.props.amount !== e.amount || this.props.currency !== e.currency;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.className,
                                        a = e.sign,
                                        n = e.currency,
                                        r = e.amount,
                                        i = e.separator,
                                        c = e.fract;
                                    return h.a.createElement(
                                        "span",
                                        { className: "".concat(t) },
                                        a || null,
                                        n ? h.a.createElement("span", null, h.a.createElement(f.a, { currency: n })) : null,
                                        h.a.createElement("span", { className: "amount" }, Object(v.j)(r, i, " ", c))
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(h.a.Component);
            (g.defaultProps = { separator: ".", amount: null, currency: "rub", sign: "", className: "" }), (t.a = g);
        },
        "8dg+": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ym.166c4d55.svg";
        },
        "8t/h": function (e, t, a) {
            "use strict";
            var n = a("OvAC"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("8Jek"),
                s = a.n(o),
                l = (a("YsSp"), "satir-input-status");
            t.a = function (e) {
                var t,
                    a = e.children,
                    n = e.className,
                    o = e.message,
                    u = e.status;
                return c.a.createElement(
                    i.Fragment,
                    null,
                    a,
                    o &&
                        c.a.createElement(
                            "div",
                            { className: s()(l, ((t = {}), r()(t, "".concat(l, "_has-error"), "error" === u), r()(t, "".concat(l, "_has-warning"), "warning" === u), r()(t, "".concat(l, "_is-success"), "success" === u), t), n) },
                            o
                        )
                );
            };
        },
        "9Q30": function (e, t, a) {},
        "9Z55": function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("T1e2"),
                p = a.n(d),
                m = a("eef+"),
                h = a.n(m),
                f = a("mXGw"),
                v = a.n(f),
                g =
                    (a("p6Tc"),
                    (function (e) {
                        function t(e) {
                            var a;
                            return (
                                r()(this, t),
                                ((a = s()(this, u()(t).call(this, e))).onBlurNum = function (e) {
                                    var t = e.target.value;
                                    return (
                                        +t >= a.props.max ? (t = a.props.max) : +t <= a.props.min ? (t = a.props.min) : "" === t || void 0 === t || "." === t ? (t = a.props.min) : t === a.props.prefixMask && (t = a.props.prefixMask),
                                        a.recordValue(+t),
                                        !0
                                    );
                                }),
                                (a.getAccuracy = function (e) {
                                    var t = e.toString(),
                                        a = t.indexOf(".") + 1;
                                    return t.substring(a).length;
                                }),
                                (a.handleChange = function (e) {
                                    var t = e.target.value,
                                        n = !/^-?\d*(?:\.|,)?\d{0,2}$/.test(t) || isNaN(t),
                                        r = !/^-?\d*$/.test(t) || isNaN(t),
                                        i = !new RegExp("^(".concat(a.props.prefixMask, ")")).test(t);
                                    return (!a.state.isFloat || !n) && !(!n && i) && !(!a.state.isFloat && r) && (a.recordValue(t.replace(",", ".")), !0);
                                }),
                                (a.handlePlusButton = function () {
                                    var e = a.props,
                                        t = e.max,
                                        n = e.step,
                                        r = p()(a).value;
                                    (r = +(Number(r) + n).toFixed(a.getAccuracy(n))) >= t
                                        ? (a.setState({ plusDisabled: !0 }), a.itm && (a.itm = clearInterval(a.itm)), a.recordValue(t))
                                        : (a.setState({ plusDisabled: !1 }), a.recordValue(r));
                                }),
                                (a.handleMinusButton = function () {
                                    var e = a.props,
                                        t = e.min,
                                        n = e.step,
                                        r = p()(a).value;
                                    (r = +(Number(r) - n).toFixed(a.getAccuracy(n))) <= t
                                        ? (a.setState({ minusDisabled: !0 }), a.itm && (a.itm = clearInterval(a.itm)), a.recordValue(t))
                                        : (a.setState({ minusDisabled: !1 }), a.recordValue(r));
                                }),
                                (a.onMouseDown = function (e) {
                                    !a.tm &&
                                        e &&
                                        (a.itm && (a.itm = clearInterval(a.itm)),
                                        (a.tm = setTimeout(function () {
                                            a.tm && (a.tm = clearTimeout(a.tm)),
                                                (a.itm = setInterval(function () {
                                                    e();
                                                }, 100));
                                        }, 1e3)));
                                }),
                                (a.onMouseUp = function () {
                                    a.tm && (a.tm = clearTimeout(a.tm)), a.itm && (a.itm = clearInterval(a.itm));
                                }),
                                (a.onMouseDownHandler = function (e) {
                                    0 === e.button && a.onMouseDown(a.handleMinusButton);
                                }),
                                (a.onMouseUpHandler = function (e) {
                                    0 === e.button && a.onMouseDown(a.handlePlusButton);
                                }),
                                (a.value = a.props.value.toString()),
                                (a.state = { value: a.props.value, isFloat: !parseInt(a.props.step, 10), plusDisabled: !1, minusDisabled: !1 }),
                                a
                            );
                        }
                        return (
                            h()(t, e),
                            c()(t, [
                                {
                                    key: "componentWillReceiveProps",
                                    value: function (e) {
                                        e.value !== this.value && this.recordValue(e.value);
                                    },
                                },
                                {
                                    key: "componentWillUpdate",
                                    value: function (e, t) {
                                        var a = +this.value;
                                        t.value !== this.state.value &&
                                            (0 === this.value.trim().length || void 0 === t.value || isNaN(t.value)
                                                ? this.setState({ plusDisabled: !0, minusDisabled: !0 })
                                                : a >= this.props.max
                                                ? (this.props.onChange(this.props.max), this.setState({ plusDisabled: !0, minusDisabled: !1 }))
                                                : a <= this.props.min
                                                ? (this.props.onChange(this.props.min), this.setState({ plusDisabled: !1, minusDisabled: !0 }))
                                                : (this.props.onChange(a), this.setState({ plusDisabled: !1, minusDisabled: !1 })));
                                    },
                                },
                                {
                                    key: "recordValue",
                                    value: function (e) {
                                        this.setState({ value: e }), (this.value = e.toString());
                                    },
                                },
                                {
                                    key: "buttonDisabler",
                                    value: function () {
                                        var e = this.props,
                                            t = e.min,
                                            a = e.max,
                                            n = this.value;
                                        (+n < a || +n > t) && this.setState({ plusDisabled: !1, minusDisabled: !1 });
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        return v.a.createElement(
                                            "div",
                                            { className: "input-plus-minus ".concat(this.props.disabled ? "input-plus-minus_disabled" : "") },
                                            v.a.createElement(
                                                "button",
                                                {
                                                    type: "button",
                                                    className: "input-plus-minus__button input-plus-minus__button_minus",
                                                    onClick: this.handleMinusButton,
                                                    onMouseDown: this.onMouseDownHandler,
                                                    onMouseUp: this.onMouseUp,
                                                    disabled: this.state.minusDisabled || this.props.disabled,
                                                },
                                                v.a.createElement(
                                                    "svg",
                                                    { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "2", viewBox: "0 0 10 2" },
                                                    v.a.createElement("rect", { width: "10", height: "2", x: "7", y: "11", fill: "#0C1729", fillRule: "evenodd", rx: "1", transform: "translate(-7 -11)" })
                                                )
                                            ),
                                            v.a.createElement("input", {
                                                type: "text",
                                                className: "input-plus-minus__input",
                                                value: this.state.value,
                                                onChange: this.handleChange,
                                                onBlur: this.onBlurNum,
                                                placeholder: this.state.isFloat ? "0.0" : "0",
                                                maxLength: this.props.maxLength,
                                                disabled: this.props.disabled,
                                            }),
                                            v.a.createElement(
                                                "button",
                                                {
                                                    type: "button",
                                                    className: "input-plus-minus__button input-plus-minus__button_plus",
                                                    onClick: this.handlePlusButton,
                                                    onMouseDown: this.onMouseUpHandler,
                                                    onMouseUp: this.onMouseUp,
                                                    disabled: this.state.plusDisabled || this.props.disabled,
                                                },
                                                v.a.createElement(
                                                    "svg",
                                                    { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "10", viewBox: "0 0 10 10" },
                                                    v.a.createElement("path", {
                                                        fill: "#0C1729",
                                                        fillRule: "evenodd",
                                                        d:
                                                            "M4 4H.995C.455 4 0 4.448 0 5c0 .556.446 1 .995 1H4v3.005c0 .54.448.995 1 .995.556 0 1-.446 1-.995V6h3.005c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1H6V.995C6 .455 5.552 0 5 0c-.556 0-1 .446-1 .995V4z",
                                                    })
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(f.Component));
            (g.defaultProps = { max: 10, min: 1, step: 1, value: 1, onChange: function () {}, disabled: !1, maxLength: 3, prefixMask: "" }), (t.a = g);
        },
        "9klq": function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = (function (e) {
                    function t() {
                        return r()(this, t), s()(this, u()(t).apply(this, arguments));
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "handleClick",
                                value: function (e) {
                                    this.state.showDropDown && this.DOM.numberInput && (this.DOM.numberInput.contains(e.target) || this.DOM.selectedFlag.contains(e.target) || this.setState({ showDropDown: !1 }));
                                },
                            },
                            {
                                key: "updateDefaultCountry",
                                value: function (e) {
                                    var t = this.state.onlyCountries.find(function (t) {
                                            return t.iso2 === e;
                                        }),
                                        a = this.state.formattedNumber.slice(this.state.selectedCountry.dialCode.length + 1);
                                    this.setState({ defaultCountry: e, selectedCountry: t, formattedNumber: "+".concat(t.dialCode).concat(a) });
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    document.addEventListener("keydown", this.handleKeydown), document.addEventListener("click", this.handleClick.bind(this), !1), this.handleInput({ target: { value: "".concat(this.props.value) } });
                                },
                            },
                            {
                                key: "shouldComponentUpdate",
                                value: function (e, t) {
                                    return "function" == typeof this.props.getCountry && this.props.getCountry(t.selectedCountry), !0;
                                },
                            },
                        ]),
                        t
                    );
                })(a("3ilP").a);
            t.a = m;
        },
        "9oHJ": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return c;
            });
            var n = a("mXGw"),
                r = a.n(n),
                i = a("deTv");
            function c(e) {
                var t = e.status;
                if (e.refunded) return r.a.createElement(i.c, { id: "refunded_deal_desc", defaultMessage: "upon request" });
                switch (t) {
                    case "cancel":
                        return r.a.createElement(i.c, { id: "do_deal_close_sell", defaultMessage: "early" });
                    case "standoff":
                        return r.a.createElement(i.c, { id: "do_deal_close_standoff", defaultMessage: "with a refund" });
                    case "win":
                        return r.a.createElement(i.c, { id: "do_deal_close_win", defaultMessage: "with a profit" });
                    case "loose":
                        return r.a.createElement(i.c, { id: "do_deal_close_loose", defaultMessage: "with a loss" });
                    default:
                        return r.a.createElement(i.c, { id: "deal_close_error", defaultMessage: "due to an error" });
                }
            }
        },
        "9prh": function (e, t, a) {
            e.exports = a.p + "../images/app-installer-android.63db9552.png";
        },
        "9w7p": function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("vMea"),
                c = a("deTv");
            a("ywfx");
            t.a = function (e) {
                var t = e.openChat,
                    a = e.exitCountryPage;
                return r.a.createElement(
                    "div",
                    { className: "country-exit-stub" },
                    r.a.createElement(
                        "p",
                        { className: "country-exit-stub__text-block" },
                        r.a.createElement(c.c, { id: "trade_operation_not_allowed_in_location", defaultMessage: "Trading on the platform and accepting deposits from your location are closed" })
                    ),
                    r.a.createElement(
                        "p",
                        { className: "country-exit-stub__text-block" },
                        r.a.createElement(
                            "a",
                            {
                                href: "javascript:;",
                                onClick: function () {
                                    a && (window.location = a);
                                },
                            },
                            r.a.createElement(c.c, { id: "education_more", defaultMessage: "More" })
                        )
                    ),
                    r.a.createElement(
                        i.a,
                        {
                            onClick: function () {
                                t();
                            },
                        },
                        r.a.createElement(c.c, { id: "support", defaultMessage: "Support" })
                    )
                );
            };
        },
        "9xZH": function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("8Jek"),
                v = a.n(f),
                g = (a("xCxX"), a("cUhM")),
                E = function (e) {
                    return h.a.createElement(
                        g.t,
                        e,
                        h.a.createElement("path", {
                            fillRule: "evenodd",
                            d:
                                "M13.1933 13L10.5851 19.3908C10.3882 19.8865 9.82525 20.1252 9.32785 19.924C9.08189 19.8245 8.88647 19.6291 8.78697 19.3831L6.21675 13H4V12H11.3271L13.7701 5.99724C13.965 5.5054 14.5235 5.26916 15.0175 5.46958C15.2618 5.56868 15.4561 5.76295 15.5552 6.00726L17.9751 12H20V13H13.1933ZM11.1172 13H8.22981L9.67344 16.4236L11.1172 13ZM15.9712 12H13.3939L14.6792 8.94407L15.9712 12Z",
                        })
                    );
                },
                _ = function (e) {
                    return h.a.createElement(
                        g.t,
                        e,
                        h.a.createElement("path", {
                            d:
                                "M16.5371 9.1663L12.6854 5.31461C12.2659 4.89513 11.5858 4.89513 11.1663 5.31461L7.31461 9.1663C7.11317 9.36775 7 9.64096 7 9.92585C7 10.5191 7.48092 11 8.07415 11H15.7775C16.0624 11 16.3356 10.8868 16.5371 10.6854C16.9566 10.2659 16.9566 9.58579 16.5371 9.1663ZM7.46292 14.8337L11.3146 18.6854C11.7341 19.1049 12.4142 19.1049 12.8337 18.6854L16.6854 14.8337C16.8868 14.6323 17 14.359 17 14.0742C17 13.4809 16.5191 13 15.9258 13H8.22246C7.93758 13 7.66437 13.1132 7.46292 13.3146C7.04344 13.7341 7.04344 14.4142 7.46292 14.8337Z",
                        })
                    );
                };
            a.d(t, "a", function () {
                return b;
            }),
                a.d(t, "b", function () {
                    return C;
                });
            var b = function (e) {
                    var t = e.onClick,
                        a = e.projectType,
                        n = e.currentProjectType,
                        r = e.link,
                        i = e.title,
                        c = e.description,
                        o = e.linkTitle,
                        s = e.icon;
                    return h.a.createElement(
                        "button",
                        { className: v()({ "pairs-dashboard__tab": !0, "pairs-dashboard__tab_active": a === n }), onClick: t, "data-test": "pairs-dashboard-tab-".concat(a) },
                        h.a.createElement(
                            "div",
                            { className: "pairs-dashboard__tab-title pairs-dashboard__tab-title_".concat(s) },
                            h.a.createElement("span", { className: "pairs-dashboard__label-icon" }, "opt" === s ? h.a.createElement(_, null) : h.a.createElement(E, null)),
                            i
                        ),
                        h.a.createElement("div", { className: "pairs-dashboard__tab-description" }, c),
                        r && o && h.a.createElement("a", { className: "pairs-dashboard__tab-link", href: r, target: "_blank", rel: "nofollow noopener noreferrer" }, o)
                    );
                },
                C = (function (e) {
                    function t() {
                        return r()(this, t), s()(this, u()(t).apply(this, arguments));
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.children;
                                    return h.a.createElement("div", { className: "pairs-dashboard__tabs" }, e);
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component);
        },
        AEX1: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a("Ja3R"),
                r = a("mBK0"),
                i = a("mXGw"),
                c = a.n(i),
                o = a("12hZ"),
                s = a("V9Cd"),
                l = a("IT7A"),
                u = a("Mgd4"),
                d = Object(l.i)({ store: u.a }),
                p = a("oNVm"),
                m = a("Ux6Q"),
                h = a("deTv"),
                f = c.a.createElement(h.c, { id: "stop_deposit_procedure_agree", defaultMessage: "Yes" }),
                v = c.a.createElement(h.c, { id: "stop_deposit_procedure_disagree", defaultMessage: "No" }),
                g = c.a.createElement(h.c, { id: "stop_deposit_procedure_description", defaultMessage: "Are you sure you want to quit the deposit procedure?" }),
                E = Object(i.memo)(function (e) {
                    var t = e.notice,
                        a = e.api,
                        n = e.themeName,
                        r = e.onAgree;
                    return c.a.createElement(
                        p.u,
                        { themeName: n },
                        c.a.createElement(m.b, {
                            noticeId: t.id,
                            api: a,
                            content: function (e) {
                                var t = e.onClose;
                                return c.a.createElement(p.e, {
                                    description: g,
                                    agreeButton: {
                                        text: f,
                                        clickHandler: function () {
                                            Object(o.k)(), t(), r();
                                        },
                                    },
                                    disagreeButton: {
                                        text: v,
                                        clickHandler: function () {
                                            t(), Object(o.l)();
                                        },
                                    },
                                });
                            },
                        })
                    );
                });
            a.d(t, "listenShowClosePopup", function () {
                return d;
            }),
                a.d(t, "CLOSE_RECHARGE_SIDEBAR_CONFIRMATION_POPUP", function () {
                    return "CLOSE_RECHARGE_SIDEBAR_CONFIRMATION_POPUP";
                }),
                a.d(t, "CloseRechargeSidebarConfirmationPopup", function () {
                    return E;
                });
            t.default = function (e) {
                var t = e.service;
                return c.a.createElement(r.Observer, null, function () {
                    return c.a.createElement(n.c, {
                        closeSidebar: function () {
                            t.close(), Object(s.a)();
                        },
                        currentScreenId: t.scope.activeItem.id,
                        isOpen: t.isOpen,
                        sidebarCloseAnalytics: o.j,
                        sidebarClosePopupShowAnalytics: o.m,
                    });
                });
            };
        },
        AHSW: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i);
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 41 40", width: 41, height: 40 }, e),
                    c.a.createElement("path", {
                        d:
                            "M18.5426 5.28662C17.8889 4.63574 16.8291 4.63574 16.1754 5.28662L8.78526 12.6449V6.6667C8.78526 5.74623 8.03584 5.00003 7.11138 5.00003C6.18692 5.00003 5.4375 5.74623 5.4375 6.6667V16.6667C5.4375 17.5872 6.18692 18.3334 7.11138 18.3334H17.1547C18.0791 18.3334 18.8286 17.5872 18.8286 16.6667C18.8286 15.7462 18.0791 15 17.1547 15H11.1544L18.5426 7.64364C19.1963 6.99277 19.1963 5.93749 18.5426 5.28662Z",
                        fill: "#6686A9",
                    }),
                    c.a.createElement("path", {
                        d:
                            "M22.667 34.506C22.0133 33.8552 22.0133 32.7999 22.667 32.149L30.0572 24.7907H24.0531C23.1286 24.7907 22.3792 24.0445 22.3792 23.1241C22.3792 22.2036 23.1286 21.4574 24.0531 21.4574H34.0964C35.0208 21.4574 35.7703 22.2036 35.7703 23.1241V33.1241C35.7703 34.0445 35.0208 34.7907 34.0964 34.7907C33.1719 34.7907 32.4225 34.0445 32.4225 33.1241V27.1496L25.0343 34.506C24.3806 35.1569 23.3207 35.1569 22.667 34.506Z",
                        fill: "#6686A9",
                    })
                );
            };
        },
        AIE5: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { id: "a", d: "M16.8 7H7.2C6.53 7 6 7.56 6 8.25v7.5c0 .7.53 1.25 1.2 1.25h9.6c.67 0 1.2-.56 1.2-1.25v-7.5c0-.7-.53-1.25-1.2-1.25zm0 8.75H7.2V12h9.6v3.75zm0-6.25H7.2V8.25h9.6V9.5z" })
                );
            };
        },
        AgQN: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-zecusd.fe0855d0.svg";
        },
        BJqX: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        id: "a",
                        d:
                            "M1 3.735V8l-1-.6V3.198l.004-.001L5.966 0 12 3.225 5.967 6.398 1 3.735zM6.138 7.14L10 5.11c-.149.681-.223 1.143-.223 1.386 0 .243.074.6.223 1.072L6 9.916 2 7.568l.274-1.072L2 5.11l3.786 2.03c.11.06.243.06.352.002z",
                    })
                );
            };
        },
        BgNx: function (e, t, a) {},
        BoVr: function (e, t, a) {},
        C43R: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-nvda.2caad33b.svg";
        },
        CBTQ: function (e, t, a) {
            e.exports = a.p + "../images/vmt-green-large-400-x-89@3x.30d69084.png";
        },
        CTaR: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-xauusd.42f3fe70.svg";
        },
        CoIu: function (e, t, a) {},
        "D+dT": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-jnj.a3827cb4.svg";
        },
        "D/oY": function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("8Jek"),
                v = a.n(f),
                g = a("deTv"),
                E = a("YTIe"),
                _ = a("XDdT"),
                b =
                    (a("BoVr"),
                    (function (e) {
                        function t() {
                            return r()(this, t), s()(this, u()(t).apply(this, arguments));
                        }
                        return (
                            p()(t, e),
                            c()(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.props,
                                            t = e.medium,
                                            a = e.children,
                                            n = e.onClose,
                                            r = e.isClose,
                                            i = e.className;
                                        return h.a.createElement(
                                            "div",
                                            { className: v()("app-installer", i) },
                                            h.a.createElement(
                                                "div",
                                                { className: "app-installer__header" },
                                                r && h.a.createElement("button", { onClick: n, className: "app-installer__close" }, h.a.createElement(E.x, null)),
                                                h.a.createElement("h2", { className: "app-installer__title" }, h.a.createElement(g.c, { id: "ios_home_screen_installer_title", defaultMessage: "Install Olymp Trade on your device" })),
                                                h.a.createElement(_.a, { className: "app-installer__image", src: t, alt: "add home screen" })
                                            ),
                                            h.a.createElement("div", { className: "app-installer__footer" }, a)
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(m.Component));
            t.a = b;
        },
        D9bk: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-cadchf.4b513017.svg";
        },
        DHQA: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return E;
            });
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("BK8K"),
                v = a("deTv"),
                g = a("joPw"),
                E = (function (e) {
                    function t() {
                        var e, a;
                        r()(this, t);
                        for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                        return ((a = s()(this, (e = u()(t)).call.apply(e, [this].concat(i)))).state = { restTime: a.props.startTime - a.props.serverTime }), a;
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    var t = e.serverTime,
                                        a = e.startTime - t;
                                    a !== this.state.restTime && this.setState({ restTime: a }), a <= 0 && this.handleTimeOver();
                                },
                            },
                            {
                                key: "handleTimeOver",
                                value: function () {
                                    var e = this.props.onTimeOver;
                                    e && e();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.restTime,
                                        t = this.props,
                                        a = t.dayNames,
                                        n = t.className;
                                    if (e < 0) return null;
                                    var r = Math.floor(e / 86400),
                                        i = Math.floor((e % 86400) / 3600),
                                        c = Math.floor((e % 3600) / 60),
                                        o = e % 60,
                                        s = v.g.formatMessage(a);
                                    return h.a.createElement(
                                        "div",
                                        { className: "servertime-count-down ".concat(n) },
                                        r ? h.a.createElement("span", { className: "servertime-count-down__days" }, r) : null,
                                        r ? h.a.createElement("span", { className: "servertime-count-down__days-text", "data-trans": a.id }, Object(f.h)(r, s)) : null,
                                        h.a.createElement("span", { className: "servertime-declOfNumcount-down__hours" }, Object(f.N)(i)),
                                        h.a.createElement("span", { className: "servertime-count-down__separator" }, ":"),
                                        h.a.createElement("span", { className: "servertime-count-down__minutes" }, Object(f.N)(c)),
                                        h.a.createElement("span", { className: "servertime-count-down__separator" }, ":"),
                                        h.a.createElement("span", { className: "servertime-count-down__seconds" }, Object(f.N)(o))
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.PureComponent);
            E.defaultProps = { dayNames: g.a.days_num, startTime: 0, className: "", onTimeOver: function () {}, serverTime: 0 };
        },
        Dodw: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-dashusd.06e54ac5.svg";
        },
        Dwr9: function (e, t, a) {
            e.exports = a.p + "../images/vmt-green-large-400-x-89.26241b63.png";
        },
        EDOb: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-etcusd.b06a5a24.svg";
        },
        EDsA: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-btcusd.8c5b259f.svg";
        },
        EHl3: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-nzdcad.05f49439.svg";
        },
        ELCO: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-bchusd.23213466.svg";
        },
        EaZs: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { fill: "url(#paint0_linear_expert)", d: "M5 17.1l7-2.1 7 2.1V22l-7-2.1L5 22v-4.9z" }),
                    c.a.createElement("path", {
                        fill: "url(#paint1_linear_expert)",
                        fillRule: "evenodd",
                        d: "M12 19.9l7 2.1v-4.9L12 15l-7 2.1V22l7-2.1zm-6.3 1.1592l6.3-1.89 6.3 1.89v-3.4384l-6.3-1.89-6.3 1.89v3.4384z",
                        clipRule: "evenodd",
                    }),
                    c.a.createElement("path", { fill: "url(#paint2_linear_expert)", d: "M5 10.1L12 8l7 2.1V15l-7-2.1L5 15v-4.9z", opacity: ".7" }),
                    c.a.createElement("path", {
                        fill: "url(#paint3_linear_expert)",
                        fillRule: "evenodd",
                        d: "M12 12.9l7 2.1v-4.9L12 8l-7 2.1V15l7-2.1zm-6.3 1.1592l6.3-1.89 6.3 1.89v-3.4384l-6.3-1.89-6.3 1.89v3.4384z",
                        clipRule: "evenodd",
                    }),
                    c.a.createElement("path", { fill: "url(#paint4_linear_expert)", d: "M5 3.1L12 1l7 2.1V8l-7-2.1L5 8V3.1z", opacity: ".5" }),
                    c.a.createElement("path", { fill: "url(#paint5_linear_expert)", fillRule: "evenodd", d: "M12 5.9L19 8V3.1L12 1 5 3.1V8l7-2.1zM5.7 7.0592l6.3-1.89 6.3 1.89V3.6208l-6.3-1.89-6.3 1.89v3.4384z", clipRule: "evenodd" }),
                    c.a.createElement(
                        "defs",
                        null,
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint0_linear_expert", x1: "12", x2: "4.3", y1: "10.45", y2: "25.15", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#F9B42E" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#EE9F07" })
                        ),
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint1_linear_expert", x1: "2.6667", x2: "7.3068", y1: "21.3", y2: "14.6136", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#fff" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#F9B42E", stopOpacity: "0" })
                        ),
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint2_linear_expert", x1: "12", x2: "4.3", y1: "3.45", y2: "18.15", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#F9B42E" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#EE9F07" })
                        ),
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint3_linear_expert", x1: "2.6667", x2: "7.3068", y1: "14.3", y2: "7.6136", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#fff" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#F9B42E", stopOpacity: "0" })
                        ),
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint4_linear_expert", x1: "12", x2: "4.3", y1: "-3.55", y2: "11.15", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#F9B42E" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#EE9F07" })
                        ),
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint5_linear_expert", x1: "2.6667", x2: "7.3068", y1: "7.3", y2: ".6136", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#fff" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#F9B42E", stopOpacity: "0" })
                        )
                    )
                );
            };
        },
        EcVM: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i);
            a("eMif");
            t.a = function (e) {
                var t = e.count,
                    a = e.className;
                return t ? r.a.createElement("span", { className: c()("message-count", a) }, t) : null;
            };
        },
        EjKj: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-googl.199bfa04.svg";
        },
        Eqe3: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-nq.166c4d55.svg";
        },
        EsPY: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-nzdusd.ca4f377e.svg";
        },
        EwSJ: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-baba.d134601d.svg";
        },
        FFyd: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-fdax.eb8979e7.svg";
        },
        Fdx0: function (e, t, a) {},
        Fzbu: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { id: "a", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-1-3c0 .554.446 1 1 1s1-.446 1-1-.446-1-1-1-1 .446-1 1zm1-7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z" })
                );
            };
        },
        GQii: function (e, t, a) {},
        GQwL: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-cvx.aaa2378f.svg";
        },
        "Grp/": function (e, t, a) {
            "use strict";
            var n,
                r = a("SDJZ"),
                i = a.n(r),
                c = a("NToG"),
                o = a.n(c),
                s = a("K4DB"),
                l = a.n(s),
                u = a("+IV6"),
                d = a.n(u),
                p = a("T1e2"),
                m = a.n(p),
                h = a("eef+"),
                f = a.n(h),
                v = a("mXGw"),
                g = a.n(v),
                E = a("mBK0"),
                _ = a("cUhM"),
                b = a("YTIe"),
                C = a("tyvn"),
                y = {
                    en: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.6 22H6.4C4 22 2 20 2 17.6V6.4C2 4 4 2 6.4 2h11.2C20 2 22 4 22 6.4v11.2c0 2.4-2 4.4-4.4 4.4z", fill: "#2841C1" }),
                            g.a.createElement("path", {
                                d:
                                    "M2 6.5v.8l3.1 2H2v1.1h8.4V2h-1v6.4L2.7 4c-.3.4-.5.9-.6 1.3L2 6.5zM2.7 20l-.4-.8-.3-1v-1.6l3.1-2H2v-1h8.4V22h-1v-6.4L2.7 20zM22 16.7v1l-.2 1c0 .5-.3 1-.5 1.3l-6.7-4.4V22h-1v-8.4H22v1h-3.1l3.1 2zM21.3 4l.4.8.3 1v1.6l-3.1 2H22v1h-8.4V2h1v6.4L21.3 4z",
                                fill: "#F6F6F6",
                            }),
                            g.a.createElement("path", {
                                d:
                                    "M13.6 2h-3.2v8.4H2v3.2h8.4V22h3.2v-8.4H22v-3.2h-8.4V2zM7.4 14.6L2 18.1c0 .4.2.8.3 1.1l7-4.6H7.4zm14.4 4.2l-6.3-4.2h1.9l4.6 3c0 .4 0 .8-.2 1.2zM8.3 9.4l-6.2-4-.1 1v.1l4.4 2.9h2zM22 5.9l-5.4 3.5h-2l7.1-4.6.3 1z",
                                fill: "#FB4B4E",
                            })
                        );
                    },
                    id: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.625 2H6.375C3.95875 2 2 3.95875 2 6.375V12H22V6.375C22 3.95875 20.0413 2 17.625 2Z", fill: "#FB4B4E" }),
                            g.a.createElement("path", { d: "M2 17.625C2 20.0413 3.95875 22 6.375 22H17.625C20.0413 22 22 20.0413 22 17.625V12H2V17.625Z", fill: "#F6F6F6" })
                        );
                    },
                    hi: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M18 2H6c-2.2.2-4 2-4 4.4v2.3h20V6.4C22 4 20.2 2.2 18 2z", fill: "#FAB446" }),
                            g.a.createElement("path", { d: "M2 17.6C2 20 3.8 21.8 6 22h12c2.2-.2 4-2 4-4.4v-2.3H2v2.3z", fill: "#73AF00" }),
                            g.a.createElement("path", { d: "M22 8.7H2v6.6h20V8.7z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M12 14.3a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6zm0-4.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12.3a.3.3 0 1 0 0-.6.3.3 0 0 0 0 .6z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12l-.7.1H10V12l1.4-.1h.7v.1z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12l.7.1H14V12l-1.4-.1H12v.1z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12l-.1-.7V10h.1l.1 1.4v.7H12z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12l-.1.7V14h.1l.1-1.4V12H12zM12 12l-.5-.4-1-1 1.1.9.4.5z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12l.4.5 1 1-.9-1.1-.5-.4zM12 12l.4-.5 1-1-.9 1.1-.5.4zM12 12l-.5.4-1 1 1.1-.9.4-.5z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12l-.6.3-1.3.5 1.3-.6.6-.2zM12 12l.6-.2 1.3-.6-1.3.5-.6.3zM12 12l-.3-.6-.5-1.3.6 1.3.2.6z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12l.2.6.6 1.3-.5-1.3-.3-.6z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12l-.6-.2-1.3-.6 1.3.5.6.3zM12 12l.6.3 1.3.5-1.3-.6-.6-.2z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12l.2-.6.6-1.3-.5 1.3-.3.6zM12 12l-.3.6-.5 1.3.6-1.3.2-.6z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M12 12.3a.3.3 0 1 0 0-.6.3.3 0 0 0 0 .6z", fill: "#F5F5F5" }),
                            g.a.createElement("path", { d: "M12 12.2a.2.2 0 1 0 0-.4.2.2 0 0 0 0 .4z", fill: "#2841C1" })
                        );
                    },
                    vi: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.6 2H6.4C4 2 2 4 2 6.4v11.2C2 20 4 22 6.4 22h11.2c2.4 0 4.4-2 4.4-4.4V6.4C22 4 20 2 17.6 2z", fill: "#FB4B4E" }),
                            g.a.createElement("path", { d: "M12.2 7.7l1 3 3.2.1c.2 0 .3.2.1.4L14 13l1 3c0 .2-.1.4-.3.3l-2.6-2-2.6 2c-.2 0-.4 0-.3-.2l1-3.1-2.6-2c-.2 0-.1-.3 0-.3h3.3l1-3c0-.2.3-.2.4 0z", fill: "#FFE15A" })
                        );
                    },
                    ru: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.9304 2H6.06961C3.79586 2.15701 2 4.05289 2 6.36896V8.66672H22V6.36896C22 4.05289 20.2041 2.15701 17.9304 2Z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M2 17.6311C2 19.9472 3.7959 21.8431 6.06965 22H17.9304C20.2041 21.8431 22 19.9472 22 17.6311V15.3333H2V17.6311Z", fill: "#FB4B4E" }),
                            g.a.createElement("path", { d: "M22 8.66663H2V15.3332H22V8.66663Z", fill: "#2841C1" })
                        );
                    },
                    ur: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.6 2H7.2v20h10.4c2.4 0 4.4-2 4.4-4.4V6.4C22 4 20 2 17.6 2z", fill: "#168B59" }),
                            g.a.createElement("path", {
                                d:
                                    "M6.4 2C4 2 2 4 2 6.4v11.2C2 20 4 22 6.4 22h.8V2h-.8zM18.4 14A4.2 4.2 0 1 1 13 7.7s0-.1 0 0a4.6 4.6 0 1 0 5.6 6.3zM16.2 8.5l.6.6.8-.3c.1 0 .3 0 .2.2l-.5.7.6.7c.1.1 0 .2 0 .2l-1-.2-.4.8h-.3v-1l-1-.2a.1.1 0 0 1 0-.2l.9-.4-.1-.9s.1-.1.2 0z",
                                fill: "#F6F6F6",
                            })
                        );
                    },
                    th: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement(
                                "g",
                                { clipPath: "url(#clip0123123)" },
                                g.a.createElement("path", { d: "M2.16797 5.16406C2.05859 5.54688 2 5.95312 2 6.375V8.32031H22V6.375C22 5.95703 21.9414 5.55078 21.832 5.16406H2.16797Z", fill: "#F6F6F6" }),
                                g.a.createElement("path", { d: "M2 17.6251C2 18.043 2.05859 18.4493 2.16797 18.836H21.8281C21.9375 18.4532 21.9961 18.0469 21.9961 17.6251V15.6797H2V17.6251Z", fill: "#F6F6F6" }),
                                g.a.createElement("path", { d: "M6.13698 22.0115H18.1989C20.0901 21.8825 21.6594 20.588 22.164 18.8516H2.16797C2.67651 20.5919 4.24186 21.8825 6.13698 22.0115Z", fill: "#FB4B4E" }),
                                g.a.createElement("path", { d: "M18.1989 2.01166H6.13691C4.24577 2.14072 2.67644 3.4352 2.17188 5.17161H22.1679C21.6593 3.43129 20.094 2.14072 18.1989 2.01166Z", fill: "#FB4B4E" }),
                                g.a.createElement("path", { d: "M22 8.32025H2V15.6796H22V8.32025Z", fill: "#2841C1" })
                            ),
                            g.a.createElement("defs", null, g.a.createElement("clipPath", { id: "clip0123123" }, g.a.createElement("rect", { width: "20", height: "20", fill: "white", transform: "translate(2 2)" })))
                        );
                    },
                    pt: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.625 2H6.375C3.95875 2 2 3.95875 2 6.375V17.625C2 20.0413 3.95875 22 6.375 22H17.625C20.0413 22 22 20.0413 22 17.625V6.375C22 3.95875 20.0413 2 17.625 2Z", fill: "#73AF00" }),
                            g.a.createElement("path", { d: "M20.1638 11.9998L11.9999 3.83588L3.83599 11.9998L11.9999 20.1637L20.1638 11.9998Z", fill: "#FFE15A" }),
                            g.a.createElement("path", {
                                d: "M12.0001 15.3836C13.8688 15.3836 15.3837 13.8687 15.3837 12C15.3837 10.1313 13.8688 8.61639 12.0001 8.61639C10.1313 8.61639 8.61646 10.1313 8.61646 12C8.61646 13.8687 10.1313 15.3836 12.0001 15.3836Z",
                                fill: "#2841C1",
                            }),
                            g.a.createElement("path", {
                                d:
                                    "M9.09664 10.2691C8.93699 10.5363 8.81375 10.8268 8.7323 11.1352C10.608 10.994 13.3828 11.5188 15.1489 13.2325C15.2641 12.9382 15.3402 12.6248 15.3688 12.2971C13.5452 10.7624 11.0241 10.2166 9.09664 10.2691Z",
                                fill: "#F5F5F5",
                            })
                        );
                    },
                    ms: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.6 2H6.4C5 2 3.9 2.6 3 3.4H21c-.8-.8-2-1.4-3.3-1.4z", fill: "#FF4B55" }),
                            g.a.createElement("path", { d: "M20.9 3.4H3L2.3 5h19.4c-.2-.6-.5-1-.8-1.5z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M21.7 4.9H2.3c-.2.4-.3.9-.3 1.4h20c0-.5-.1-1-.3-1.4z", fill: "#FF4B55" }),
                            g.a.createElement("path", { d: "M2 6.3v1.4h20V6.4v-.1H2z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M22 7.7H2v1.4h20V7.7z", fill: "#FF4B55" }),
                            g.a.createElement("path", { d: "M22 9.1H2v1.5h20V9z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M22 10.6H2V12h20v-1.4z", fill: "#FF4B55" }),
                            g.a.createElement("path", { d: "M2 12.5h.5v1H22V12H2v.5z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M2.5 12.5H2V15h20v-1.5H2.5v-.9z", fill: "#FF4B55" }),
                            g.a.createElement("path", { d: "M22 14.9H2v1.4h20v-1.4z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M2 17.6v.1h20v-1.4H2v1.3z", fill: "#FF4B55" }),
                            g.a.createElement("path", { d: "M2.3 19.1h19.4c.2-.4.3-.9.3-1.4H2c0 .5.1 1 .3 1.4z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M3.1 20.6H21l.8-1.5H2.3c.2.6.5 1 .8 1.5z", fill: "#FF4B55" }),
                            g.a.createElement("path", { d: "M6.4 22h11.2c1.3 0 2.5-.6 3.3-1.4H3c.8.8 2 1.4 3.3 1.4z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M13.4 2h-7C4 2 2 4 2 6.4v7h11.4V2z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M4.5 7.7A3 3 0 0 1 8.7 5s.1 0 0-.1a3.5 3.5 0 0 0-5.4 2.7 3.5 3.5 0 0 0 5.5 3.1 3 3 0 0 1-4.3-2.8z", fill: "#FFE15A" }),
                            g.a.createElement("path", {
                                d:
                                    "M11.5 7.7l1.3-.5v-.1l-1.4.1 1-1-.2-.1-1.2.7.5-1.3c0-.1-.1-.1-.1 0l-.8 1-.2-1.3h-.1L10 6v.5l-.8-1.2h-.1l.4 1.4L8.4 6h-.1l1 1.1-1.4-.1c-.1 0-.1 0 0 .1l1.2.5-1.3.5v.1h1.5l-1 1 1.3-.7-.4 1.4L10 9l.1.5.2.8c0 .1 0 .1 0 0l.3-1.3.8 1.1-.4-1.4 1.2.7h.1l-1-1h1.5l-1.3-.6z",
                                fill: "#FFE15A",
                            }),
                            g.a.createElement("defs", null, g.a.createElement("clipPath", { id: "clip0" }, g.a.createElement("path", { fill: "#fff", transform: "translate(2 2)", d: "M0 0h20v20H0z" })))
                        );
                    },
                    zh: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.6 2H6.4C4 2 2 4 2 6.4v11.2C2 20 4 22 6.4 22h11.2c2.4 0 4.4-2 4.4-4.4V6.4C22 4 20 2 17.6 2z", fill: "#FB4B4E" }),
                            g.a.createElement("path", {
                                d:
                                    "M6.5 5.4L7 7h1.5c.2 0 .3.3.1.4l-1.2 1 .5 1.4c0 .2-.2.4-.4.3L6.3 9 5 10c-.2 0-.4 0-.3-.3L5 8.2 4 7.2c-.2 0-.1-.3 0-.3h1.7L6 5.4c0-.2.3-.2.4 0zM12.2 5.8l.3.5.6-.2s.1 0 0 .1l-.3.5.4.5-.1.1-.6-.2-.3.5H12V7l-.6-.2v-.2l.6-.2v-.6h.2zM10 4.3h.6l.2-.5h.2l.1.7h.6s.1.1 0 .2l-.5.3.1.6s0 .1-.1 0l-.4-.4-.6.3s-.1 0 0 0l.2-.6-.5-.4v-.2zM11 10.2l-.4.5-.6-.2s-.1 0 0 .1l.3.5-.4.5.1.1.6-.2.3.5h.2v-.7l.6-.1V11l-.6-.2v-.6s-.1-.1-.2 0zM13.1 8.8h-.6l-.2-.5H12L12 9l-.6.1c-.1 0-.1.1 0 .2l.5.3-.1.5v.1l.5-.4.6.3s.1 0 0-.1l-.2-.5.5-.5-.1-.1z",
                                fill: "#FFE15A",
                            })
                        );
                    },
                    tr: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.6 2H6.4C4 2 2 4 2 6.4v11.2C2 20 4 22 6.4 22h11.2c2.4 0 4.4-2 4.4-4.4V6.4C22 4 20 2 17.6 2z", fill: "#FB4B4E" }),
                            g.a.createElement("path", {
                                d: "M6.4 10.3a3.1 3.1 0 0 0 4.8 2.6h.1c-.7.8-1.7 1.3-2.8 1.3a3.9 3.9 0 1 1 2.8-6.6s0 .1-.1 0a3.1 3.1 0 0 0-4.8 2.6zm7-.6L13 9h-.1v1l-1 .4v.1l1 .3v1s0 .1.1 0l.6-.8 1 .3-.6-.9.6-.8s0-.1 0 0l-1 .2z",
                                fill: "#F6F6F6",
                            })
                        );
                    },
                    ar: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement(
                                "g",
                                { clipPath: "url(#clip0000234)" },
                                g.a.createElement("path", { d: "M17.625 2H8.20691V8.67027H22V6.375C22 3.95875 20.0412 2 17.625 2Z", fill: "#73AF00" }),
                                g.a.createElement("path", { d: "M8.20691 22H17.625C20.0412 22 22 20.0413 22 17.625V15.3297H8.20691V22Z", fill: "#3A3B43" }),
                                g.a.createElement("path", { d: "M22 8.67029H8.20703V15.3297H22V8.67029Z", fill: "#F6F6F6" }),
                                g.a.createElement("path", { d: "M8.20691 8.67027V2H6.375C3.95875 2 2 3.95875 2 6.375V17.625C2 20.0413 3.95875 22 6.375 22H8.20691V15.3297V8.67027Z", fill: "#FB4B4E" })
                            ),
                            g.a.createElement("defs", null, g.a.createElement("clipPath", { id: "clip0000234" }, g.a.createElement("rect", { width: "20", height: "20", fill: "white", transform: "translate(2 2)" })))
                        );
                    },
                    es: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.6 2H6.4C4 2 2 4 2 6.4v11.2C2 20 4 22 6.4 22h11.2c2.4 0 4.4-2 4.4-4.4V6.4C22 4 20 2 17.6 2z", fill: "#FB4B4E" }),
                            g.a.createElement("path", { d: "M22 6.2H2v11.6h20V6.2z", fill: "#FFE15A" }),
                            g.a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d:
                                    "M7 9.5h-.3c-.3 0-.5.2-.5.4 0 .3.2.6.5.6s.5-.2.6-.4a.6.6 0 0 0 .6-.1.6.6 0 0 0 .6 0c0 .3.2.5.5.5s.6-.3.6-.6c0-.2-.3-.5-.6-.5h-.2c0-.2-.3-.3-.6-.3l-.3.1a.6.6 0 0 0-.4-.1c-.3 0-.5.1-.6.4zm.7.1l-.2.2-.2-.2s0-.2.2-.2l.2.2zm.4 0l.1.2.2-.2s0-.2-.2-.2l-.1.2zM6.3 11c-.2 0-.3.1-.3.3v2.3c0 .4.4 1.2 1.9 1.2 1.4 0 1.9-.8 1.9-1.2v-2.3c0-.2-.2-.3-.4-.3h-3zm4.8.3h-.8v3h.8v-3zm-6.5 0h.8v3h-.8v-3zM9 9.8l-.2.1.2.2c.1 0 .2 0 .2-.2L9 9.8zm-2.5.1l.2-.1.2.1c0 .1 0 .2-.2.2 0 0-.2 0-.2-.2z",
                                fill: "#F5F5F5",
                            }),
                            g.a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M7.7 9H8v1h-.4V9zM9 10.5H6.7v.4H9v-.4zm2.3.4H10v.3h1.2V11zM6 12.7h1.9v.8c0 .5-.4 1-1 1a1 1 0 0 1-1-1v-.8zm-1.6 1.4h1.2v.3H4.4v-.3zM5.6 11H4.4v.3h1.2V11zm4.6 3h1v.4h-1v-.3z",
                                fill: "#FAB446",
                            }),
                            g.a.createElement("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d:
                                    "M6.3 10.3l.4.3H9l.4-.3-.2-.2a2 2 0 0 0-1.3-.5 2 2 0 0 0-1.3.5l-.3.2zM4.4 12H5l-.3-1.3c0-.1 0-.2.2-.2h.2c.2 0 .3 0 .2.2L5 12h1v-.7c0-.2.1-.3.3-.3H8v1.7h1.9v.8c0 .5-.4 1-1 1a1 1 0 0 1-1-1v-.8H6v-.3H4.4V12zm5 0h1.3l-.3-1.3c0-.1 0-.2.2-.2h.2c.2 0 .3 0 .2.2l-.3 1.3h.6v.4h-2V12zm.7 1l1.2.4V13l-1.2-.4v.4zm-2.6-.3v1.6a1 1 0 0 1-.4.1v-1.7h.4zm-.8 1.7v-1.7h-.4v1.6l.4.1zm-1.1-1.3l-1.2.3V13l1.2-.4v.4z",
                                fill: "#C8414B",
                            }),
                            g.a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.5 11.3H6.3v.4h.2v.3h-.2v.4h1.2V12h-.2v-.3h.2v-.4z", fill: "#FAB446" }),
                            g.a.createElement("path", { d: "M8 9.6h-.3v1H8v-1z", fill: "#FFB441" }),
                            g.a.createElement("path", { d: "M9 13.4v.2l-.2.1-.2-.1v-.2H9zm.4-.3H8.2v.5c0 .3.3.5.6.5s.6-.2.6-.5V13z", fill: "#FAB446" }),
                            g.a.createElement("path", { d: "M8.8 12.4a.4.4 0 0 1-.4-.4v-.3c0-.2.2-.4.4-.4s.4.2.4.4v.3c0 .2-.2.4-.4.4z", fill: "#FFA0D2" }),
                            g.a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.4 12.7c0 .3-.2.5-.5.5-.4 0-.6-.2-.6-.5s.2-.5.6-.5c.3 0 .5.2.5.5zm-2.6 1.7H4.2v.4h1.6v-.4zm5.7 0H10v.4h1.5v-.4z", fill: "#5064AA" }),
                            g.a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.1 10.5l.2-.2c0-.1 0-.2-.2-.2l-.2.2.2.2zm.8 0l.2-.2-.2-.2-.2.2s0 .2.2.2zm1-.2l-.3.2-.2-.2.2-.2.2.2z", fill: "#FFD250" })
                        );
                    },
                    fr: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M6.375 2C3.95875 2 2 3.95875 2 6.375V17.625C2 20.0413 3.95875 22 6.375 22H8.66668V2H6.375Z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M8.66577 2V22H15.3324V2H8.66577Z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M17.6259 2H15.3342V22H17.6259C20.0422 22 22.0009 20.0413 22.0009 17.625V6.375C22.0009 3.95875 20.0422 2 17.6259 2Z", fill: "#FB4B4E" })
                        );
                    },
                    ko: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.6 2H6.4C4 2 2 4 2 6.4v11.2C2 20 4 22 6.4 22h11.2c2.4 0 4.4-2 4.4-4.4V6.4C22 4 20 2 17.6 2z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M14 9.1c-1.7-1-3.8-.6-4.9 1A1.7 1.7 0 1 0 12 12a1.7 1.7 0 0 1 2.9 2c1-1.7.6-3.8-1-4.9z", fill: "#FB4B4E" }),
                            g.a.createElement("path", { d: "M9.1 10a1.7 1.7 0 1 0 2.9 2 1.7 1.7 0 0 1 2.9 2A3.4 3.4 0 1 1 9 10z", fill: "#2841C1" }),
                            g.a.createElement("path", {
                                d:
                                    "M15.7 7.8l.6 1V9l-.2.1h-.3l-.6-1V8l.2-.1h.3zM16.6 9.3l.7 1v.2h-.5l-.6-1v-.2h.2c0-.1.2-.1.2 0zM16.3 7.4L18 9.8v.2l-.2.1h-.2l-1.6-2.4v-.3h.2c0-.1.2-.1.2 0zM17 7l.6.9V8l-.2.1h-.2l-.6-1V7l.2-.1h.2zM18 8.4l.6 1v.2h-.2c0 .1-.2.1-.2 0l-.7-1v-.2h.5zM7.2 13.5l1.6 2.4v.2l-.2.1h-.3l-1.6-2.4v-.3h.5zM6.5 14l.6.9v.2l-.2.1h-.2l-.6-1V14l.2-.1h.2zM7.5 15.4l.6 1v.2h-.2c0 .1-.2.1-.2 0l-.7-1v-.2h.5zM5.8 14.4l1.6 2.4v.2l-.2.1H7l-1.6-2.4v-.3h.2c0-.1.2-.1.2 0zM6.7 10.2l1.6-2.4h.4v.3l-1.5 2.4h-.4v-.3zM6 9.8l1.7-2.4c0-.1.1-.1.2 0h.2v.3L6.5 10h-.4v-.3zM5.4 9.3L7 7h.4v.3L5.8 9.6c0 .1-.1.1-.2 0h-.2v-.3zM15.2 15.9l.6-1h.4l.1.3-.6 1h-.4v-.3zM16.2 14.4l.6-1h.3l.1.1v.3l-.6 1h-.2l-.2-.1v-.3zM15.9 16.3l.6-1h.3l.1.1v.3l-.6 1h-.2l-.2-.1v-.3zM16.9 14.9l.6-1h.4v.3l-.6 1H17v-.3zM16.6 16.8l.6-1h.4v.3l-.6 1h-.4v-.3zM17.5 15.3l.7-1h.2l.2.1v.3l-.6 1h-.3l-.1-.1v-.3z",
                                fill: "#464655",
                            })
                        );
                    },
                    ja: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.625 2H6.375C3.95875 2 2 3.95875 2 6.375V17.625C2 20.0413 3.95875 22 6.375 22H17.625C20.0413 22 22 20.0413 22 17.625V6.375C22 3.95875 20.0413 2 17.625 2Z", fill: "#F6F6F6" }),
                            g.a.createElement("path", {
                                d: "M11.6667 16.6668C14.244 16.6668 16.3333 14.5774 16.3333 12.0001C16.3333 9.42277 14.244 7.33344 11.6667 7.33344C9.08934 7.33344 7 9.42277 7 12.0001C7 14.5774 9.08934 16.6668 11.6667 16.6668Z",
                                fill: "#FB4B4E",
                            })
                        );
                    },
                    fa: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M22 8.7H2v6.6h20V8.7z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M17.6 2H6.4C4 2 2 4 2 6.4v2.3h20V6.4C22 4 20 2 17.6 2z", fill: "#73AF00" }),
                            g.a.createElement("path", { d: "M2 17.6C2 20 4 22 6.4 22h11.2c2.4 0 4.4-2 4.4-4.4v-2.3H2v2.3z", fill: "#FB4B4E" }),
                            g.a.createElement("path", {
                                d:
                                    "M12 10h-.3a.4.4 0 0 1-.3-.4c.2.2.4.3.6.1.2.2.5.1.6 0a.4.4 0 0 1-.6.3zm1.4 2.7c-.2.5-.5 1-1 1.2l.9.1c-.4.2-.8.2-1.1 0l-.2.4-.2-.3h-1.1V14l.9-.1a2.2 2.2 0 0 1-.5-3.6c-.6 1-.3 2.5.7 3.2v-3c-.1 0 0-.1 0-.1l.1-.2h.2l.1.2h.1v3.1c1-.7 1.2-2.1.6-3.2.7.6.9 1.6.5 2.4zm.8-1.7c-.2-.4-.6-.7-1-.9a2.4 2.4 0 0 1 .2 3.5 2 2 0 0 0 .8-2.6zm-3.3-.8a2.4 2.4 0 0 0-.3 3.4 2 2 0 0 1 .2-3.5z",
                                fill: "#FF4B55",
                            })
                        );
                    },
                    bn: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M17.6 2H6.4C4 2 2 4 2 6.4v11.2C2 20 4 22 6.4 22h11.2c2.4 0 4.4-2 4.4-4.4V6.4C22 4 20 2 17.6 2z", fill: "#168B59" }),
                            g.a.createElement("path", { d: "M14.7 10c1.7 4-2 7.7-6 6a4 4 0 0 1-2.2-2c-1.6-4 2.1-7.7 6-6a4 4 0 0 1 2.2 2z", fill: "#FF4B55" })
                        );
                    },
                    fl: function () {
                        return g.a.createElement(
                            "svg",
                            { width: "24", height: "24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            g.a.createElement("path", { d: "M3.3 3.3C2.5 4 2 5.2 2 6.3v11.3c0 1.2.5 2.3 1.3 3.1L12 12 3.3 3.3z", fill: "#F6F6F6" }),
                            g.a.createElement("path", { d: "M3.3 20.7c.8.8 1.9 1.3 3 1.3h11.3c2.4 0 4.4-2 4.4-4.4V12H12l-8.7 8.7z", fill: "#FB4B4E" }),
                            g.a.createElement("path", { d: "M17.6 2H6.4C5.2 2 4 2.5 3.3 3.3L12 12h10V6.4C22 4 20 2 17.6 2z", fill: "#2841C1" }),
                            g.a.createElement("path", { d: "M5.6 13.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z", fill: "#FFE15A" }),
                            g.a.createElement("path", { d: "M5.6 12l-.4-1.7.4-.5.4.5-.4 1.7zM5.6 12l.4 1.7-.4.5-.4-.5.4-1.7zM5.6 12l-1.7.4-.6-.4.6-.4 1.7.4zM5.6 12l1.7-.4.5.4-.5.4-1.7-.4z", fill: "#FFE15A" }),
                            g.a.createElement("path", { d: "M5.6 12l.9-1.5h.7L7 11l-1.5.9zM5.6 12l-1 1.5H4V13l1.6-.9z", fill: "#FFE15A" }),
                            g.a.createElement("path", {
                                d:
                                    "M5.6 12L4 11.1l-.1-.7.7.1.9 1.5zM5.6 12l1.5.9v.7l-.6-.1-1-1.5zM3.1 5v.4l-.3.2.4.1v.5h.2l.2-.4H4c.1 0 .1 0 0 0l-.2-.3L4 5V5l-.5.2-.3-.3s-.1 0 0 0zM3.3 17.9l-.1.4-.5.1v.1l.4.2v.5l.4-.3.4.2-.2-.5.4-.3h-.5l-.2-.4h-.1zM10 11.4l-.3.3-.5-.1.2.4-.2.4s0 .1 0 0h.5l.2.3h.2v-.5l.4-.1V12l-.5-.2v-.4z",
                                fill: "#FFE15A",
                            }),
                            g.a.createElement("defs", null, g.a.createElement("clipPath", { id: "clip0" }, g.a.createElement("path", { fill: "#fff", transform: "translate(2 2)", d: "M0 0h20v20H0z" })))
                        );
                    },
                };
            a.d(t, "a", function () {
                return w;
            });
            var w =
                Object(E.observer)(
                    (n = (function (e) {
                        function t(e) {
                            var a;
                            return (
                                i()(this, t),
                                ((a = l()(this, d()(t).call(this, e))).sortedLangList = []),
                                (a.onSortLanguages = function () {
                                    var e = [];
                                    return (
                                        C.wb.forEach(function (t, a) {
                                            e[a] = { id: t, title: C.yb[t], icon: y[t]() };
                                        }),
                                        e
                                    );
                                }),
                                (a.handleClick = function (e) {
                                    return a.props.onChangeLang(e);
                                }),
                                (a.sortedLangList = a.onSortLanguages()),
                                (a.handleClick = a.handleClick.bind(m()(a))),
                                a
                            );
                        }
                        return (
                            f()(t, e),
                            o()(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.props,
                                            t = e.lang,
                                            a = e.className,
                                            n = e.classPickBtnName,
                                            r = e.direction,
                                            i = void 0 === r ? "ltr" : r,
                                            c = e.placement,
                                            o = void 0 === c ? "bottom" : c,
                                            s = e.dataTest,
                                            l = e.dataTestItem,
                                            u = this.sortedLangList.find(function (e) {
                                                return e.id === t;
                                            });
                                        return (
                                            !!this.sortedLangList.length &&
                                            g.a.createElement(_.q, {
                                                className: a,
                                                classPickBtnName: n,
                                                items: this.sortedLangList,
                                                iconSelect: g.a.createElement(b.f, null),
                                                defaultItem: u,
                                                onClick: this.handleClick,
                                                direction: i,
                                                placement: o,
                                                dataTest: s,
                                                dataTestItem: l,
                                            })
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(g.a.Component))
                ) || n;
        },
        H0Lm: function (e, t, a) {
            "use strict";
            var n = a("OvAC"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("8Jek"),
                s = a.n(o),
                l =
                    (a("eeON"),
                    function (e) {
                        var t,
                            a = e.className,
                            n = e.id,
                            i = e.isDisabled,
                            o = e.name,
                            l = e.onBlur,
                            u = e.onChange,
                            d = e.onClick,
                            p = e.onFocus,
                            m = e.onKeyDown,
                            h = e.onKeyUp,
                            f = e.placeholder,
                            v = e.status,
                            g = e.style,
                            E = e.type,
                            _ = e.value;
                        return c.a.createElement("input", {
                            className: s()(
                                "satir-input",
                                ((t = {}),
                                r()(t, "".concat("satir-input", "_is-disabled"), i),
                                r()(t, "".concat("satir-input", "_has-error"), "error" === v),
                                r()(t, "".concat("satir-input", "_has-warning"), "warning" === v),
                                r()(t, "".concat("satir-input", "_is-success"), "success" === v),
                                t),
                                a
                            ),
                            disabled: i,
                            id: n,
                            name: o,
                            onBlur: l,
                            onChange: u,
                            onClick: d,
                            onFocus: p,
                            onKeyDown: m,
                            onKeyUp: h,
                            placeholder: f,
                            style: g,
                            type: E,
                            value: _,
                        });
                    });
            (l.defaultProps = { type: "text" }), (t.a = l);
        },
        HEeD: function (e, t, a) {
            "use strict";
            var n = a("nxTg"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("8Jek"),
                s = a.n(o),
                l =
                    (a("65g3"),
                    function (e) {
                        var t = Object(i.useState)(!1),
                            a = r()(t, 2),
                            n = a[0],
                            o = a[1];
                        return c.a.createElement(
                            "div",
                            { className: s()("switcher", e.className, { switcher_disabled: e.disabled }) },
                            c.a.createElement("input", {
                                type: "checkbox",
                                onClick: function () {
                                    "function" == typeof e.onChange && (o(!n), e.onChange(!n));
                                },
                                defaultChecked: e.checked || n,
                                className: "switcher__input",
                                id: e.name,
                                disabled: e.disabled,
                                value: e.value,
                                "data-test": e["data-test"],
                            }),
                            c.a.createElement("label", { className: "switcher__toggle", htmlFor: e.name }),
                            c.a.createElement("label", { className: "switcher__label", htmlFor: e.name }, e.children)
                        );
                    });
            (l.defaultProps = { children: "Checkbox", onChange: function () {}, checked: !1, className: "", name: "", disabled: !1 }), (t.a = l);
        },
        HgLy: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return k;
            });
            var n = a("OvAC"),
                r = a.n(n),
                i = a("SDJZ"),
                c = a.n(i),
                o = a("NToG"),
                s = a.n(o),
                l = a("K4DB"),
                u = a.n(l),
                d = a("+IV6"),
                p = a.n(d),
                m = a("eef+"),
                h = a.n(m),
                f = a("c35s"),
                v = a.n(f),
                g = a("cneo"),
                E = a("M/sA"),
                _ = a("deTv"),
                b = a("DLGA"),
                C = (a("CJm6"), a("0h+z")),
                y = (a("xkj6"), a("GEqU")),
                w = Object(_.e)({ fx_phone_is_empty: { id: "fx_phone_is_empty", defaultMessage: "No telephone number indicated" }, fx_wrong_phone: { id: "fx_wrong_phone", defaultMessage: "Invalid phone number format" } });
            function k(e) {
                var t;
                return (
                    (t = (function (e) {
                        function t() {
                            var e, a;
                            c()(this, t);
                            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                            return (
                                ((a = u()(this, (e = p()(t)).call.apply(e, [this].concat(i)))).config = {
                                    bindAs: "VipCallbackStore",
                                    onBind: [[C.J, "onBind"]],
                                    importData: r()({}, C.W, {
                                        loading: "loading",
                                        buttonLoading: "buttonLoading",
                                        fetchError: "fetchError",
                                        requestError: "requestError",
                                        warning: "warning",
                                        success: "success",
                                        minutes: "minutes",
                                        hours: "hours",
                                        dayPicked: "dayPicked",
                                        availableTime: "availableTime",
                                        availableCallbacks: "availableCallbacks",
                                        minutesAvailable: "minutesAvailable",
                                        todayUnavailable: "todayUnavailable",
                                        hoursAvailable: "hoursAvailable",
                                        hoursTomorrowAvailable: "hoursTomorrowAvailable",
                                        hoursTodayAvailable: "hoursTodayAvailable",
                                        dayTomorrow: "dayTomorrow",
                                        timeToday: "timeToday",
                                        dayToday: "dayToday",
                                        timeTomorrow: "timeTomorrow",
                                        serviceLevel: "serviceLevel",
                                    }),
                                }),
                                (a.api = {
                                    setMinutes: a.setMinutes,
                                    setHours: a.setHours,
                                    setDay: a.setDay,
                                    setPhone: a.setPhone,
                                    submit: a.submit,
                                    onVipSupportClick: a.onVipSupportClick,
                                    cancel: a.cancel,
                                    openCard: a.openCard,
                                    goBack: a.goBack,
                                    getData: a.getData,
                                }),
                                a
                            );
                        }
                        return (
                            h()(t, e),
                            s()(t, [
                                {
                                    key: "onStart",
                                    value: function () {
                                        return (
                                            (this.messageCollection = new b.a()),
                                            (this.validation = new E.a({ phone: { presence: !0, phoneValid: !0 } }, this.messageCollection, {
                                                phoneValid: function (e) {
                                                    var t;
                                                    return (
                                                        "+" === e
                                                            ? (t = "^".concat(_.g.formatMessage(w.fx_phone_is_empty)))
                                                            : e.length && (e.length <= ("+" === e[0] ? 5 : 4) || e.length > 15) && (t = "^".concat(_.g.formatMessage(w.fx_wrong_phone))),
                                                        t
                                                    );
                                                },
                                            })),
                                            (this.phone = this.importVar(C.B, "phone", !1)),
                                            !0
                                        );
                                    },
                                },
                                {
                                    key: "onBind",
                                    value: function (e) {
                                        this.sideBarService = e;
                                    },
                                },
                                {
                                    key: "openCard",
                                    value: function () {
                                        this.sideBarService.goTo(y.a.VIP_CALLBACK_CARD);
                                    },
                                },
                                {
                                    key: "setMinutes",
                                    value: function (e) {
                                        this.callApi(C.W, "setMinutes", e);
                                    },
                                },
                                {
                                    key: "setHours",
                                    value: function (e) {
                                        this.callApi(C.W, "setHours", e);
                                    },
                                },
                                {
                                    key: "setDay",
                                    value: function (e) {
                                        this.callApi(C.W, "setDay", e);
                                    },
                                },
                                {
                                    key: "setPhone",
                                    value: function (e) {
                                        this.phone = e.replace(/[^\d+]/g, "");
                                    },
                                },
                                {
                                    key: "getData",
                                    value: function () {
                                        this.callApi(C.W, "getData");
                                    },
                                },
                                {
                                    key: "submit",
                                    value: function (e) {
                                        e.preventDefault(), this.validation.isValid(this, "phone") && this.callApi(C.W, "submit", { timestamp: this.getSelectedTime(), phone: this.phone });
                                    },
                                },
                                {
                                    key: "getSelectedTime",
                                    value: function () {
                                        var e = this,
                                            t = ("today" === this.dayPicked ? this.hoursTodayAvailable : this.hoursTomorrowAvailable).filter(function (t) {
                                                return t.hours === e.hours;
                                            }),
                                            a = t[0] && t[0].timeStamp,
                                            n = this.minutesAvailable.filter(function (t) {
                                                return t.minutes === e.minutes;
                                            });
                                        return a + (n[0] && n[0].timeStamp);
                                    },
                                },
                                {
                                    key: "onVipSupportClick",
                                    value: function () {
                                        this.callApi(C.L, "sendStat", "overlay_buttons_click", "vip-support/call-order");
                                    },
                                },
                                {
                                    key: "cancel",
                                    value: function () {
                                        this.callApi(C.W, "cancel");
                                    },
                                },
                                {
                                    key: "goBack",
                                    value: function () {
                                        this.sideBarService.goBack();
                                    },
                                },
                                {
                                    key: "messages",
                                    get: function () {
                                        return this.messageCollection.messages;
                                    },
                                },
                            ]),
                            t
                        );
                    })(e)),
                    v()(t.prototype, "messages", [g.computed], Object.getOwnPropertyDescriptor(t.prototype, "messages"), t.prototype),
                    t
                );
            }
        },
        Hnjq: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M18.41 13.196C18.41 9.606 15.52 6.696 11.955 6.696C8.39 6.696 5.5 9.606 5.5 13.196C5.5 16.786 8.39 19.696 11.955 19.696C15.52 19.696 18.41 16.786 18.41 13.196V13.196ZM7.114 13.196C7.114 10.504 9.281 8.321 11.955 8.321C14.629 8.321 16.796 10.504 16.796 13.196C16.796 15.888 14.629 18.071 11.955 18.071C9.281 18.071 7.114 15.888 7.114 13.196ZM18.204 8.851C18.3697 8.71383 18.4745 8.51679 18.4957 8.30275C18.5168 8.0887 18.4526 7.87496 18.317 7.708C18.2502 7.62558 18.1678 7.55721 18.0745 7.50682C17.9812 7.45644 17.8788 7.42504 17.7733 7.41444C17.6677 7.40384 17.5611 7.41425 17.4597 7.44507C17.3582 7.47589 17.2638 7.52651 17.182 7.594L15.916 8.637C15.75 8.7742 15.645 8.97143 15.6239 9.18572C15.6027 9.40001 15.6671 9.61398 15.803 9.781C15.8698 9.86342 15.9522 9.93179 16.0455 9.98218C16.1388 10.0326 16.2412 10.064 16.3467 10.0746C16.4523 10.0852 16.5589 10.0748 16.6603 10.0439C16.7618 10.0131 16.8562 9.96249 16.938 9.895L18.204 8.851V8.851Z",
                    }),
                    c.a.createElement("path", {
                        d:
                            "M12.813 7.418C12.813 7.917 12.449 8.321 12 8.321C11.551 8.321 11.187 7.917 11.187 7.418V6.064H10.375C9.926 6.064 9.562 5.66 9.562 5.161C9.562 4.663 9.926 4.258 10.375 4.258H13.625C14.074 4.258 14.438 4.663 14.438 5.161C14.438 5.66 14.074 6.064 13.625 6.064H12.812V7.418H12.813ZM13.488 13.917C13.912 13.394 13.801 12.602 13.24 12.148C12.68 11.694 9.7 10.85 9.7 10.85C9.7 10.85 11.145 13.59 11.706 14.043C12.266 14.498 13.064 14.442 13.488 13.918V13.917Z",
                    })
                );
            };
        },
        Hr5R: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-currency.4c0d5cdd.svg";
        },
        I30N: function (e, t, a) {
            "use strict";
            var n,
                r = a("OvAC"),
                i = a.n(r),
                c = a("mXGw"),
                o = a.n(c),
                s = a("U/Wl"),
                l = a("vMea"),
                u = a("i8up"),
                d = a("deTv"),
                p =
                    (a("oovk"),
                    Object(s.Connector)(function (e) {
                        var t = e.purse,
                            a = e.country,
                            n = e.currentLang,
                            r = e.value,
                            i = e.currency,
                            c = e.onSubmit,
                            s = e.hideDialog;
                        return o.a.createElement(
                            "form",
                            {
                                className: "cb-dialog-content",
                                id: "subscribed-confirm-dialog-form",
                                onSubmit: function (e) {
                                    e.preventDefault(), c();
                                },
                            },
                            o.a.createElement(
                                "div",
                                { className: "cb-dialog-content__row" },
                                o.a.createElement(d.c, { id: "card_number", defaultMessage: "Card number" }),
                                ":",
                                o.a.createElement("br", null),
                                o.a.createElement("strong", null, t)
                            ),
                            o.a.createElement(
                                "div",
                                { className: "cb-dialog-content__row" },
                                o.a.createElement(d.c, { id: "recharge_sum", defaultMessage: "Deposit amount" }),
                                ":",
                                o.a.createElement("br", null),
                                o.a.createElement("strong", null, o.a.createElement(u.a, { country: a, lang: n, amount: r, currency: i, precision: 0 }))
                            ),
                            o.a.createElement(
                                "div",
                                { className: "cb-dialog-content__buttons" },
                                o.a.createElement(
                                    l.a,
                                    { className: "cb-dialog-content__button", type: "submit", skin: "success", size: "large", fontSize: "extra-large" },
                                    o.a.createElement(d.c, { id: "confirm", defaultMessage: "Confirm" })
                                ),
                                o.a.createElement(l.a, { className: "cb-dialog-content__button", size: "large", fontSize: "extra-large", onClick: s }, o.a.createElement(d.c, { id: "cancel", defaultMessage: "Cancel" }))
                            )
                        );
                    })),
                m = a("xCxX"),
                h = a("1XfU"),
                f = function () {
                    return o.a.createElement(
                        "div",
                        { className: "cb-dialog-content cb-dialog-content_text-centered" },
                        o.a.createElement("div", { className: "cb-dialog-content__row" }, o.a.createElement(h.a, { position: "relative" })),
                        o.a.createElement("div", { className: "cb-dialog-content__row" }, o.a.createElement(m.a, { id: "subscription_in_process", defaultMessage: "Please wait. <br/>Payment processing may take up to one minute." }))
                    );
                },
                v = function (e) {
                    var t = e.errorMessage,
                        a = e.hideDialog;
                    return o.a.createElement(
                        "div",
                        { className: "cb-dialog-content cb-dialog-content_text-centered" },
                        o.a.createElement("div", { className: "cb-dialog-content__row" }, t),
                        o.a.createElement(
                            "div",
                            { className: "cb-dialog-content__buttons" },
                            o.a.createElement(l.a, { className: "cb-dialog-content__button", skin: "warning", size: "large", fontSize: "extra-large", onClick: a }, o.a.createElement(d.c, { id: "close", defaultMessage: "Close" }))
                        )
                    );
                },
                g = a("NWgQ"),
                E = a.n(g),
                _ = a("BK8K"),
                b = a("6eLe"),
                C = E.a.parse(window.location.search),
                y = C.webview && "ios" === C.webview,
                w = Object(_.F)() && y,
                k = function (e) {
                    var t = e.amount,
                        a = e.currency,
                        n = e.currentLang,
                        r = e.country,
                        i = e.hideDialog;
                    return o.a.createElement(
                        "div",
                        { className: "cb-dialog-content cb-dialog-content_text-centered" },
                        o.a.createElement(
                            "div",
                            { className: "cb-dialog-content__row" },
                            o.a.createElement(d.c, {
                                id: "you_payment_completed",
                                defaultMessage: "Your payment in the amount of {sum} has been accepted",
                                values: { sum: o.a.createElement("strong", null, o.a.createElement(u.a, { country: r, lang: n, amount: t, currency: a, precision: 0 })) },
                            })
                        ),
                        o.a.createElement(
                            "div",
                            { className: "cb-dialog-content__buttons" },
                            b.h || w
                                ? o.a.createElement(l.a, { className: "cb-dialog-content__button", skin: "accent", size: "large", fontSize: "extra-large", onClick: i }, o.a.createElement(d.c, { id: "close", defaultMessage: "Close" }))
                                : o.a.createElement(
                                      l.a,
                                      { className: "cb-dialog-content__button", skin: "accent", size: "large", fontSize: "extra-large", href: "/platform" },
                                      o.a.createElement(d.c, { id: "start_trade", defaultMessage: "Start trading" })
                                  )
                        )
                    );
                },
                T = a("gSfh"),
                N = a("L62V"),
                M = a("kgRQ");
            a.d(t, "a", function () {
                return H;
            });
            var L = Object(d.e)({
                    payment_confirm: { id: "payment_confirm", defaultMessage: "Payment confirmation" },
                    billing_pending_payment_msg: { id: "billing_pending_payment_msg", defaultMessage: "The payment is being processed..." },
                    payment_completed: { id: "payment_completed", defaultMessage: "The payment was fulfilled" },
                }),
                H =
                    ((n = {}),
                    i()(n, M.a.CONFIRM_RECHARGE, { layout: T.c, collectionName: N.a.CENTER, component: p, id: "SubscribedRechargeConfirm", layoutProps: { title: L.payment_confirm, noLegacyClassNames: !0 } }),
                    i()(n, M.a.PROCESSED_RECHARGE, { layout: T.c, collectionName: N.a.CENTER, component: f, id: "SubscribedRechargeProcessed", layoutProps: { title: L.billing_pending_payment_msg, noLegacyClassNames: !0 } }),
                    i()(n, M.a.ERROR_RECHARGE, { layout: T.c, collectionName: N.a.CENTER, component: v, id: "SubscribedRechargeError", props: { type: M.a.ERROR_RECHARGE }, layoutProps: { noLegacyClassNames: !0 } }),
                    i()(n, M.a.SUCCESS_RECHARGE, { layout: T.c, collectionName: N.a.CENTER, component: k, id: "SubscribedRechargeError", layoutProps: { title: L.payment_completed, noLegacyClassNames: !0 } }),
                    n);
        },
        IEf6: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-gbpusd.ed353435.svg";
        },
        "IO/V": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-brent.f3e15507.svg";
        },
        IOBp: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(e.width || o.a.WIDTH, " ").concat(e.height || o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        className: "inheriting",
                        d:
                            "M33.688 53H3.315C1.485 53 0 51.467 0 49.582v-26.16C0 21.532 1.488 20 3.315 20h30.373C35.516 20 37 21.535 37 23.421v26.16C37 51.466 35.514 53 33.688 53zM3.315 21.656c-.943 0-1.71.793-1.71 1.765v26.16c0 .971.768 1.761 1.71 1.761h30.373c.942 0 1.707-.791 1.707-1.762V23.421c0-.973-.767-1.765-1.707-1.765H3.315z",
                    }),
                    c.a.createElement("path", {
                        d:
                            "M18.493 45c-1.443 0-2.616-1.152-2.616-2.57v-4.284C14.112 37.208 13 35.402 13 33.398 13 30.421 15.467 28 18.497 28 21.532 28 24 30.422 24 33.398c0 2.003-1.114 3.81-2.88 4.747v4.286c0 1.415-1.18 2.569-2.627 2.569zm.004-15.335c-2.095 0-3.8 1.674-3.8 3.732 0 1.517.924 2.872 2.353 3.45.32.13.527.434.527.77v4.812c0 .497.412.902.918.902a.916.916 0 0 0 .928-.902v-4.811a.83.83 0 0 1 .527-.77c1.43-.58 2.356-1.934 2.356-3.45-.004-2.059-1.711-3.733-3.81-3.733zM6.798 22c-.44 0-.798-.374-.798-.836v-8.078C6 5.87 11.608 0 18.5 0S31 5.871 31 13.086c0 .46-.358.835-.798.835-.44 0-.798-.374-.798-.835 0-6.294-4.89-11.415-10.904-11.415S7.596 6.791 7.596 13.086v8.078c0 .462-.357.836-.798.836z",
                    })
                );
            };
        },
        IVnp: function (e, t, a) {
            "use strict";
            var n = a("5WRv"),
                r = a.n(n),
                i = a("tu/2"),
                c = a("Ja3R"),
                o = a("LUjc"),
                s = a("12hZ"),
                l = a("NthX"),
                u = a.n(l),
                d = a("fFdx"),
                p = a.n(d),
                m = a("iVZY"),
                h = a("i4m5"),
                f = a("6eLe"),
                v = new m.a(),
                g = (function () {
                    var e = p()(
                        u.a.mark(function e() {
                            return u.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.prev = 0), (e.next = 3), v.post("/user/set-money-group", { version: "v3", project: f.b, data: { group: h.a.REAL } });
                                            case 3:
                                                e.next = 8;
                                                break;
                                            case 5:
                                                (e.prev = 5), (e.t0 = e.catch(0));
                                            case 8:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[0, 5]]
                            );
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })();
            a.d(t, "c", function () {
                return _;
            }),
                a.d(t, "b", function () {
                    return b;
                }),
                a.d(t, "a", function () {
                    return C;
                });
            var E = { recharge: { rootId: c.b.MAIN, items: [].concat(r()(s.i), r()(o.g)) } },
                _ = new i.c(E),
                b = function (e) {
                    return function () {
                        var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).amount;
                        e({ amount: t }), _.openById(c.b.MAIN), Object(s.e)() || g();
                    };
                },
                C = function (e) {
                    var t = e.callback;
                    _.onStackChange(function (e, a) {
                        a === c.b.PAYMENT_PROCESSING && t();
                    });
                };
        },
        JIal: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return r;
            });
            var n = a("qjS0"),
                r = Object(n.c)(
                    function (e) {
                        return (0, e.children)(e.services);
                    },
                    {
                        helper: function (e, t) {
                            return { children: t.children, services: e };
                        },
                        services: function (e) {
                            return e.services;
                        },
                    }
                );
        },
        JR1d: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-chfjpy.e6ed90f7.svg";
        },
        JRuM: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-dis.ec4d4070.svg";
        },
        "Jh/J": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M6.707 16L9 18.293V16H6.707zM8 7V4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H16v2.5a.5.5 0 0 1-.5.5h-6a.498.498 0 0 1-.354-.146l-4-4A.498.498 0 0 1 5 15.5v-8a.5.5 0 0 1 .5-.5H8zm1 0h6.5a.5.5 0 0 1 .5.5V16h2V5H9v2zm-3 8h3.5a.5.5 0 0 1 .5.5V19h5V8H6v7z",
                    })
                );
            };
        },
        JhXw: function (e, t, a) {
            "use strict";
            var n = a("nxTg"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("8Jek"),
                s = a.n(o),
                l = a("deTv"),
                u = a("92VU"),
                d = a("Km8a"),
                p =
                    (a("z7ux"),
                    function (e) {
                        var t = e.title,
                            a = e.description,
                            n = e.className;
                        return c.a.createElement(
                            "div",
                            { className: s()("c-kyc-standalone-meta", n) },
                            t && c.a.createElement("span", { className: "c-kyc-standalone-meta__title" }, t),
                            a && c.a.createElement("span", { className: "c-kyc-standalone-meta__description" }, a)
                        );
                    }),
                m = a("U1Db"),
                h = a("uCN1");
            a("rswK"),
                (t.a = function () {
                    var e = Object(i.useState)(!1),
                        t = r()(e, 2),
                        a = t[0],
                        n = t[1],
                        o = Object(i.useState)({ title: "", description: "" }),
                        f = r()(o, 2),
                        v = f[0],
                        g = f[1];
                    return (
                        Object(i.useEffect)(function () {
                            var e = Object(m.b)(),
                                t = Object(m.a)(),
                                a = t.baseUrl,
                                r = t.userId,
                                i = t.token,
                                c = t.clientId,
                                o = t.title,
                                s = t.descr;
                            i || (window.location.href = "/"),
                                g({ title: o || "", description: s || "" }),
                                Object(m.c)({ baseUrl: a, userId: r, token: i, clientId: c, currentLang: e }, function (e, t) {
                                    e === h.b.ON_ERROR && t.code === h.c.INVALID_TOKEN && n(!0);
                                }),
                                Object(m.e)();
                        }, []),
                        c.a.createElement(
                            u.b,
                            { value: l.g.getInstance() },
                            c.a.createElement(
                                "div",
                                { className: "c-kyc-standalone" },
                                c.a.createElement(
                                    "div",
                                    { className: "c-kyc-standalone__inner" },
                                    (v.title || v.description) && c.a.createElement(p, { className: "c-kyc-standalone__meta", title: v.title, description: v.description }),
                                    c.a.createElement("div", { className: s()({ "c-kyc-standalone__container_error": a }), id: h.a }),
                                    a && c.a.createElement(d.a, { onClick: window.history.back, className: "c-kyc-standalone__error" })
                                )
                            )
                        )
                    );
                });
        },
        KT4t: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-nkd.18534761.svg";
        },
        Km8a: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i),
                o = a("deTv"),
                s = a("vMea");
            a("mMrK");
            t.a = function (e) {
                return r.a.createElement(
                    "div",
                    { className: c()("c-kyc-standalone-error", e.className) },
                    r.a.createElement(s.a, { onClick: e.onClick, skin: "accent" }, r.a.createElement(o.c, { id: "server_connection_lost_3", defaultMessage: "Reload now" }))
                );
            };
        },
        Krvq: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i),
                o = a("tyvn"),
                s = a("8VmE"),
                l = a.n(s),
                u = function (e) {
                    return r.a.createElement(
                        "svg",
                        l()({ viewBox: "0 0 24 24", width: "24", height: "24", fill: "none" }, e),
                        r.a.createElement("path", { d: "M5 17.1L12 15L19 17.1V22L12 19.9L5 22V17.1Z", fill: "#F9B42E" }),
                        r.a.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 19.9L19 22V17.1L12 15L5 17.1V22L12 19.9ZM5.7 21.0592L12 19.1692L18.3 21.0592V17.6208L12 15.7308L5.7 17.6208V21.0592Z",
                            fill: "url(#paint0_linear-913512)",
                        }),
                        r.a.createElement("path", { opacity: "0.7", d: "M5 10.1L12 8L19 10.1V15L12 12.9L5 15V10.1Z", fill: "#F9B42E" }),
                        r.a.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 12.9L19 15V10.1L12 8L5 10.1V15L12 12.9ZM5.7 14.0592L12 12.1692L18.3 14.0592V10.6208L12 8.73082L5.7 10.6208V14.0592Z",
                            fill: "url(#paint1_linear-163523)",
                        }),
                        r.a.createElement("path", { opacity: "0.5", d: "M5 3.1L12 1L19 3.1V8L12 5.9L5 8V3.1Z", fill: "#F9B42E" }),
                        r.a.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 5.9L19 8V3.1L12 1L5 3.1V8L12 5.9ZM5.7 7.05918L12 5.16918L18.3 7.05918V3.62082L12 1.73082L5.7 3.62082V7.05918Z",
                            fill: "url(#paint2_linear-457421)",
                        }),
                        r.a.createElement(
                            "defs",
                            null,
                            r.a.createElement(
                                "linearGradient",
                                { id: "paint0_linear-913512", x1: "2.66667", y1: "21.3", x2: "7.30684", y2: "14.6136", gradientUnits: "userSpaceOnUse" },
                                r.a.createElement("stop", { stopColor: "white" }),
                                r.a.createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
                            ),
                            r.a.createElement(
                                "linearGradient",
                                { id: "paint1_linear-163523", x1: "2.66667", y1: "14.3", x2: "7.30684", y2: "7.6136", gradientUnits: "userSpaceOnUse" },
                                r.a.createElement("stop", { stopColor: "white" }),
                                r.a.createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
                            ),
                            r.a.createElement(
                                "linearGradient",
                                { id: "paint2_linear-457421", x1: "2.66667", y1: "7.3", x2: "7.30684", y2: "0.613601", gradientUnits: "userSpaceOnUse" },
                                r.a.createElement("stop", { stopColor: "white" }),
                                r.a.createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
                            )
                        )
                    );
                },
                d = a("S6YD"),
                p = function (e) {
                    return r.a.createElement(
                        "svg",
                        l()({ viewBox: "0 0 24 24", width: "24", height: "24", fill: e.fill || d.a.FILL }, e),
                        r.a.createElement("path", { d: "M5 14.1L12 12L19 14.1V19L12 16.9L5 19V14.1Z", fill: "#1FBF75" }),
                        r.a.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 16.9L19 19V14.1L12 12L5 14.1V19L12 16.9ZM5.77778 18.0288L12 16.1621L18.2222 18.0288V14.6045L12 12.7379L5.77778 14.6045V18.0288Z",
                            fill: "url(#paint0_linear-360594)",
                        }),
                        r.a.createElement("path", { opacity: "0.7", d: "M5 7.1L12 5L19 7.1V12L12 9.9L5 12V7.1Z", fill: "#1FBF75" }),
                        r.a.createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 9.9L19 12V7.1L12 5L5 7.1V12L12 9.9ZM5.77778 11.0288L12 9.16214L18.2222 11.0288V7.60453L12 5.73786L5.77778 7.60453V11.0288Z",
                            fill: "url(#paint1_linear-290105)",
                        }),
                        r.a.createElement(
                            "defs",
                            null,
                            r.a.createElement(
                                "linearGradient",
                                { id: "paint0_linear-360594", x1: "2.66667", y1: "18.3", x2: "7.30684", y2: "11.6136", gradientUnits: "userSpaceOnUse" },
                                r.a.createElement("stop", { stopColor: "white" }),
                                r.a.createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
                            ),
                            r.a.createElement(
                                "linearGradient",
                                { id: "paint1_linear-290105", x1: "2.66667", y1: "11.3", x2: "7.30684", y2: "4.6136", gradientUnits: "userSpaceOnUse" },
                                r.a.createElement("stop", { stopColor: "white" }),
                                r.a.createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
                            )
                        )
                    );
                },
                m =
                    (a("X/bd"),
                    function (e) {
                        var t = e.serviceLevelName,
                            a = e.className,
                            n = (function (e) {
                                switch (e) {
                                    case o.Fb.EXPERT:
                                        return function () {
                                            return r.a.createElement(u, null);
                                        };
                                    case o.Fb.ADVANCED:
                                        return function () {
                                            return r.a.createElement(p, null);
                                        };
                                    case o.Fb.STARTER:
                                    default:
                                        return function () {
                                            return null;
                                        };
                                }
                            })(t);
                        return r.a.createElement("span", { className: c()("c-service-level-icon", a) }, r.a.createElement(n, null));
                    });
            a("qw4E");
            a.d(t, "a", function () {
                return h;
            });
            var h = function (e) {
                var t = e.sum,
                    a = e.depositAmounts,
                    n = e.userServiceLevel,
                    i = e.header,
                    s = e.withTitle,
                    l = e.className,
                    u = (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = o.Fb.STARTER,
                            n = 0;
                        return (
                            Object.keys(t).forEach(function (r) {
                                var i = t[r];
                                e >= i && i >= n && ((a = r), (n = i));
                            }),
                            a
                        );
                    })(t, a),
                    d = n === o.Fb.STARTER ? 0 : a[n],
                    p = u !== o.Fb.STARTER && u !== n && d < t;
                return !p || i || s
                    ? p
                        ? r.a.createElement(
                              "div",
                              { className: c()("c-service-level", l) },
                              i,
                              r.a.createElement("div", { className: "c-service-level__container" }, r.a.createElement(m, { serviceLevelName: u }), s ? r.a.createElement("div", { className: "c-service-level__text" }, u) : null)
                          )
                        : null
                    : r.a.createElement(m, { serviceLevelName: u, className: l });
            };
        },
        LUjc: function (e, t, a) {
            "use strict";
            var n = a("e7Tw"),
                r = a("Mgd4"),
                i = a("OvAC"),
                c = a.n(i),
                o = a("6eLe"),
                s = a("iVZY");
            function l(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            var u = new s.a(),
                d = { deals: {}, min_payment_amount: 0 },
                p = function (e) {
                    var t = e.amount,
                        a = e.code;
                    return o.f || o.h
                        ? Promise.resolve(d)
                        : u
                              .post("/cabinet/risk-free-payment-info", { data: { amount: t, bonus_code: "string" == typeof a ? a : "" }, version: "v1", project: o.b })
                              .then(function (e) {
                                  if (!e) return d;
                                  var t = e;
                                  return Array.isArray(t.deals)
                                      ? (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var a = null != arguments[t] ? arguments[t] : {};
                                                t % 2
                                                    ? l(Object(a), !0).forEach(function (t) {
                                                          c()(e, t, a[t]);
                                                      })
                                                    : Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                                                    : l(Object(a)).forEach(function (t) {
                                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                                                      });
                                            }
                                            return e;
                                        })({}, t, { deals: {} })
                                      : t;
                              })
                              .catch(function () {
                                  return d;
                              });
                },
                m = a("NthX"),
                h = a.n(m),
                f = a("fFdx"),
                v = a.n(f),
                g = a("tyvn"),
                E = a("8Xpx"),
                _ = a("UvPz"),
                b = new s.a(),
                C = (function () {
                    var e = v()(
                        h.a.mark(function e() {
                            return h.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return e.abrupt(
                                                "return",
                                                b
                                                    .post(E.a.USER_VALUES, { project: g.vc.BINARY, version: E.b, data: { list: [_.c.PROMO] } })
                                                    .then(function (e) {
                                                        return e;
                                                    })
                                                    .catch(function () {
                                                        return { promo: null };
                                                    })
                                            );
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })(),
                y = Object(n.f)({ fetchRiskFree: p }).requestRiskFree,
                w = (Object(n.c)({ store: r.a }).responsePromoCodeInfo, Object(n.e)({ fetchRiskFree: p, store: r.a })),
                k = Object(n.d)({ store: r.a }),
                T = k.initPromoCodes,
                N = k.setInitialPromoCodesData,
                M = Object(n.g)({ store: r.a, promoDataFetcher: C, riskFreeFetch: p }),
                L = (M.updatePromoData, M.updateServiceLevels),
                H = M.removePromoCodeFromSocket,
                O = M.addPromoCodeFromSocket,
                x = a("deTv"),
                D = a("mXGw"),
                I = a.n(D),
                S = { benefitsLabel: I.a.createElement(x.c, { id: "cabinet_bonus", defaultMessage: "Bonus" }) },
                V = Object(x.e)({
                    welcome_bonus_title: { id: "welcome_bonus_title", defaultMessage: "Welcome Bonus" },
                    on_pay_bonus_title: { id: "on_pay_bonus_title", defaultMessage: "OnPay Bonus" },
                    bonus_60_title: { id: "bonus_60_title", defaultMessage: "Bonus 60" },
                    welcome_bonus_short_description: { id: "welcome_bonus_short_description", defaultMessage: "Double the money in your account!" },
                    on_pay_bonus_short_description: { id: "on_pay_bonus_short_description", defaultMessage: "Up to 50% of your deposit amount" },
                    bonus_60_short_description: { id: "bonus_60_short_description", defaultMessage: "Double your deposit" },
                    welcome_bonus_full_description: { id: "welcome_bonus_full_description", defaultMessage: "Deposit {min_payment} to {max_paymenet} and as a bonus we'll double your deposit." },
                    on_pay_bonus_full_description: { id: "on_pay_bonus_full_description", defaultMessage: "Deposit at least {min_payment} and get a bonus of up to 50%. The bigger the deposit, the bigger the bonus." },
                    bonus_60_full_description: { id: "bonus_60_full_description", defaultMessage: "Deposit at least {min_payment} and as a bonus we'll double your deposit" },
                }),
                F = I.a.createElement(x.c, { id: "bonuses_and_promo_codes", defaultMessage: "Bonuses and promo codes" }),
                B = {
                    riskFreeBenefitDescription: function (e) {
                        var t = e.amount;
                        return I.a.createElement(x.c, { id: "risk_free_deals_in_amount", defaultMessage: "Risk-Free for {amount}", values: { amount: t } });
                    },
                    bonusBenefitDescription: I.a.createElement(x.c, { id: "bonuses_to_account", defaultMessage: "Bonuses as a gift" }),
                    levelsStatus: I.a.createElement(x.c, { id: "level_status_title", defaultMessage: "Level Status" }),
                    riskFreeBenefitsTooltip: I.a.createElement(x.c, {
                        id: "risk_free_trades_description",
                        defaultMessage: "Trades with no risk of losing money. If the prediction proves wrong, weâ€™ll return the full trade amount to your account.",
                    }),
                    levelsBenefitsTooltip: I.a.createElement(x.c, { id: "level_status_info", defaultMessage: "This is a set of instruments for comfortable and profitable trading. The larger the deposit, the higher the status." }),
                    bonusBenefitsTooltip: I.a.createElement(x.c, { id: "cabinet_payout_bonus_withdrawal", defaultMessage: "You cannot withdraw bonuses, but you can use them for trading and to withdraw profit." }),
                };
            function P(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            var z = I.a.createElement(x.c, { id: "bonuses_and_promo_codes", defaultMessage: "Bonuses and promo codes" }),
                j = function () {
                    return I.a.createElement(x.c, { id: "promo_code_showcase_description", defaultMessage: "Here you'll find new, attractive offers and available bonuses." });
                },
                A = function () {
                    return I.a.createElement(x.c, { id: "enter_promo_code", defaultMessage: "Enter promo code" });
                },
                G = function () {
                    return I.a.createElement(x.c, { id: "applied", defaultMessage: "Applied" });
                },
                R = function () {
                    return I.a.createElement(x.c, { id: "open", defaultMessage: "Open" });
                },
                W =
                    (I.a.createElement("span", null, I.a.createElement(x.b, { id: "promo_code_showcase_description", defaultMessage: "Here you'll find new, attractive offers and available bonuses." })),
                    I.a.createElement(x.c, { id: "enter_promo_code", defaultMessage: "Enter promo code" }),
                    I.a.createElement(x.c, { id: "applied", defaultMessage: "Applied" }),
                    I.a.createElement(x.c, { id: "open", defaultMessage: "Open" }),
                    a("8VmE")),
                X = a.n(W),
                U = a("nxTg"),
                Z = a.n(U),
                Y = a("DnJg"),
                K = a("IT7A");
            function J(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            var q = I.a.createElement(x.c, { id: "bonus_code_title", defaultMessage: "Promo code" }),
                Q = Object(x.e)({
                    something_wrong_title: { id: "something_wrong_title", defaultMessage: "Something went wrong." },
                    code_before_start: { id: "code_before_start", defaultMessage: "The promo code is not yet active." },
                    code_after_finish: { id: "code_after_finish", defaultMessage: "The promo code has expired" },
                    code_not_for_you: { id: "code_not_for_you", defaultMessage: "The code is not available to you" },
                    code_not_found: { id: "code_not_found", defaultMessage: "Code not found" },
                    code_not_for_your_status: { id: "code_not_for_your_status", defaultMessage: 'You cannot use the promo code "{value} at half price" because it is your current status' },
                    code_not_for_your_high_status: { id: "code_not_for_your_high_status", defaultMessage: 'You cannot use the promo code "{value} at half price" because your current status is higher' },
                    enter_your_promo_code: { id: "enter_your_promo_code", defaultMessage: "Enter your promo code" },
                }),
                $ = Object(D.memo)(function (e) {
                    var t = e.value,
                        a = e.status;
                    return I.a.createElement(x.c, X()({}, Q[a], { values: { value: t } }));
                }),
                ee = I.a.createElement(x.c, { id: "cabinet_promo-code", defaultMessage: "Enter the promo-code" }),
                te = I.a.createElement(x.c, { id: "enter_your_promo_code", defaultMessage: "Enter your promo code" }),
                ae = I.a.createElement(x.c, { id: "check_promo_code", defaultMessage: "Check promo code" }),
                ne = a("xUcW"),
                re = a("CBb8"),
                ie = a("czhI"),
                ce = a.n(ie),
                oe = a("4Nf0"),
                se = function (e) {
                    var t = e.store,
                        a = e.onOpenProcessingScreen;
                    Object(oe.e)({ store: t }),
                        a({
                            callback: function () {
                                return Object(oe.c)({ store: t });
                            },
                        });
                };
            a.d(t, "c", function () {
                return ue;
            }),
                a.d(t, "a", function () {
                    return de;
                }),
                a.d(t, "b", function () {
                    return pe;
                }),
                a.d(t, "d", function () {
                    return me;
                }),
                a.d(t, "g", function () {
                    return he;
                }),
                a.d(t, "h", function () {
                    return T;
                }),
                a.d(t, "j", function () {
                    return N;
                }),
                a.d(t, "i", function () {
                    return H;
                }),
                a.d(t, "e", function () {
                    return O;
                }),
                a.d(t, "l", function () {
                    return L;
                }),
                a.d(t, "k", function () {
                    return w;
                }),
                a.d(t, "f", function () {
                    return se;
                });
            var le = Object(n.b)({
                    activeButton: { title: F },
                    preset: { store: r.a, riskFreeGetter: y, translates: S },
                    selectedPromoCodeBenefit: {
                        translations: B,
                        store: r.a,
                        riskFreeGetter: y,
                        useAppliedCardTranslates: function (e) {
                            var t = e.promoCode,
                                a = t.isCustomPromoCode,
                                n = t.meta,
                                r = n.label,
                                i = n.description.short;
                            return Object(D.useMemo)(
                                function () {
                                    return { label: a ? r : I.a.createElement(x.c, V[r]), descriptionShort: a ? i : I.a.createElement(x.c, V[i]) };
                                },
                                [a, r, i]
                            );
                        },
                    },
                }),
                ue = le.PresetSlot,
                de = le.ActiveButtonSlot,
                pe = le.AmountRightSlot,
                me = le.SelectedPromoCodeBenefitsSlot,
                he = Object(n.a)({
                    showcasePanel: {
                        translations: { title: z },
                        useShowcasePanelTranslates: function (e) {
                            var t = e.list;
                            return Object(D.useMemo)(
                                function () {
                                    var e = t.reduce(function (e, t) {
                                        var a = t.id,
                                            n = t.isCustomPromoCode,
                                            r = t.meta,
                                            i = r.label,
                                            o = r.description.short;
                                        return (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var a = null != arguments[t] ? arguments[t] : {};
                                                t % 2
                                                    ? P(Object(a), !0).forEach(function (t) {
                                                          c()(e, t, a[t]);
                                                      })
                                                    : Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                                                    : P(Object(a)).forEach(function (t) {
                                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                                                      });
                                            }
                                            return e;
                                        })(
                                            {},
                                            e,
                                            c()({}, a, {
                                                label: n ? i : I.a.createElement(x.c, V[i]),
                                                descriptionShort: n ? o : I.a.createElement(x.c, V[o]),
                                                showCaseStateCardActive: I.a.createElement(G, null),
                                                showCaseStateCardInactive: I.a.createElement(R, null),
                                            })
                                        );
                                    }, {});
                                    return { headline: I.a.createElement(j, null), button: I.a.createElement(A, null), cardDescriptions: e };
                                },
                                [t]
                            );
                        },
                    },
                    confirmPanel: {
                        translations: { title: q },
                        store: r.a,
                        riskFreeGetter: y,
                        usePromoCodeCardTranslates: function (e) {
                            var t = e.code,
                                a = Object(K.L)(
                                    K.N,
                                    function (e) {
                                        return "account" in e ? e.account.currency : "usd";
                                    },
                                    []
                                ),
                                n = t.bonus,
                                r = void 0 === n ? [] : n,
                                i = t.isCustomPromoCode,
                                o = t.meta,
                                s = o.label,
                                l = o.description.full,
                                u =
                                    null === r
                                        ? { min: 0, max: 1 / 0 }
                                        : r.reduce(
                                              function (e, t) {
                                                  if (t.interval) {
                                                      var a = t.interval.slice(1, t.interval.length - 1).split(","),
                                                          n = Z()(a, 2),
                                                          r = n[0],
                                                          i = n[1],
                                                          o = Number(r),
                                                          s = Number(i);
                                                      return (function (e) {
                                                          for (var t = 1; t < arguments.length; t++) {
                                                              var a = null != arguments[t] ? arguments[t] : {};
                                                              t % 2
                                                                  ? J(Object(a), !0).forEach(function (t) {
                                                                        c()(e, t, a[t]);
                                                                    })
                                                                  : Object.getOwnPropertyDescriptors
                                                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                                                                  : J(Object(a)).forEach(function (t) {
                                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                                                                    });
                                                          }
                                                          return e;
                                                      })({}, e, {}, e.min && e.min < o ? null : { min: o }, {}, e.max && e.max > s ? null : { max: s });
                                                  }
                                                  return e;
                                              },
                                              { min: 0, max: 0 }
                                          ),
                                d = u.min,
                                p = u.max,
                                m = Object(Y.a)({ value: d, minimumFractionDigits: 0, currency: a }),
                                h = Object(Y.a)({ value: p, minimumFractionDigits: 0, currency: a });
                            return {
                                label: Object(D.useMemo)(
                                    function () {
                                        return i ? s : I.a.createElement(x.c, V[s]);
                                    },
                                    [i, s]
                                ),
                                descriptionFull: Object(D.useMemo)(
                                    function () {
                                        return i ? l : I.a.createElement(x.c, X()({}, V[l], { values: { min_payment: m, max_paymenet: h } }));
                                    },
                                    [h, m, l, i]
                                ),
                                selectorActiveButtonText: I.a.createElement(x.c, { id: "cancel", defaultMessage: "Cancel" }),
                                selectorInactiveButtonText: I.a.createElement(x.c, { id: "activate", defaultMessage: "Activate" }),
                                closePromoCodePopup: I.a.createElement(x.c, { id: "close", defaultMessage: "Close" }),
                                promocode: I.a.createElement(x.c, { id: "promo_code", defaultMessage: "Promo code" }),
                            };
                        },
                    },
                    enterCodePanel: {
                        translations: {
                            title: ee,
                            inputPlaceholderText: te,
                            submitButtonText: ae,
                            errorMessage: $,
                            getBonusFullDescription: function (e) {
                                var t = e.isPercent,
                                    a = e.amount,
                                    n = e.isAnyPay,
                                    r = e.minAmount,
                                    i = e.currency;
                                return I.a.createElement(
                                    "span",
                                    null,
                                    "+",
                                    t ? "".concat(a, "%") : I.a.createElement(ne.a, { amount: a, currency: i, precision: 0 }),
                                    " ",
                                    n ? "." : I.a.createElement(x.c, { id: "dealSum_of_deposit", defaultMessage: "of the deposit when you add {pay}.", values: { pay: I.a.createElement(ne.a, { amount: r, currency: i, precision: 0 }) } }),
                                    " ",
                                    I.a.createElement(x.c, { id: "amount_will_be_credited", defaultMessage: "The amount will be credited as a bonus." })
                                );
                            },
                            getBonusShortDescription: function (e) {
                                var t = e.isPercent,
                                    a = e.amount,
                                    n = e.currency;
                                return I.a.createElement("span", null, "+", t ? "".concat(a, "%") : I.a.createElement(ne.a, { amount: a, currency: n, precision: 0 }));
                            },
                            getLevelsFullDescription: function (e) {
                                var t = e.oldPrice,
                                    a = e.newPrice,
                                    n = e.status,
                                    r = e.currency;
                                return I.a.createElement(
                                    D.Fragment,
                                    null,
                                    I.a.createElement(x.c, { id: "discount_service_level_status", defaultMessage: "50% discount on {value} status", values: { value: n } }),
                                    I.a.createElement("br", null),
                                    I.a.createElement("span", { className: "line-through" }, I.a.createElement(x.c, { id: "old_price", defaultMessage: "Old price" }), " ", I.a.createElement(ne.a, { amount: t, currency: r, precision: 0 })),
                                    ". ",
                                    I.a.createElement(x.c, { id: "new_price", defaultMessage: "New price" }),
                                    " ",
                                    I.a.createElement(ne.a, { amount: a, currency: r, precision: 0 })
                                );
                            },
                            getLevelsShortDescription: function (e) {
                                var t = e.status;
                                return I.a.createElement(x.c, { id: "discount_service_level_status", defaultMessage: "50% discount on {value} status", values: { value: t } });
                            },
                            getRiskFreeFullDescription: function (e) {
                                var t = e.sum,
                                    a = e.count,
                                    n = e.amount,
                                    r = e.isAnyPay,
                                    i = e.minAmount,
                                    c = e.currency;
                                return I.a.createElement(
                                    "span",
                                    null,
                                    I.a.createElement(x.c, { id: "risk_free_trades", defaultMessage: "Risk-free trades of" }),
                                    " ",
                                    I.a.createElement(ne.a, { amount: t, currency: c, precision: 0 }),
                                    ". ",
                                    I.a.createElement(x.c, {
                                        id: "dealCount_trades_of_dealSum",
                                        defaultMessage: "Number of trades: {dealCount} at {dealSum}.",
                                        values: { dealCount: String(a), dealSum: I.a.createElement(ne.a, { amount: n, currency: c, precision: 0 }) },
                                    }),
                                    " ",
                                    r ? I.a.createElement(x.c, { id: "with_refill_starting_at", defaultMessage: "With a refill starting at {pay}.", values: { pay: I.a.createElement(ne.a, { amount: i, currency: c, precision: 0 }) } }) : null
                                );
                            },
                            getRiskFreeShortDescription: function (e) {
                                var t = e.sum,
                                    a = e.currency;
                                return I.a.createElement("span", null, I.a.createElement(x.c, { id: "risk_free_trades", defaultMessage: "Risk-free trades of" }), " ", I.a.createElement(ne.a, { amount: t, currency: a, precision: 0 }));
                            },
                        },
                        icon: "".concat(re.a, "/images/promo_code/ic_coupon_code.png"),
                        useRequestCodeInfo: function () {
                            return Object(D.useCallback)(function (e) {
                                return (function (e) {
                                    return ce()({ method: "GET", url: "/cabinet/code-info", params: { code: e } })
                                        .then(function (e) {
                                            return e.data;
                                        })
                                        .catch(function () {
                                            return { status: "invalid", status_message: "something_wrong_title", bonus: {} };
                                        });
                                })(e.code);
                            }, []);
                        },
                    },
                });
        },
        "Lk+W": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        id: "a",
                        d:
                            "M7 7v10h3V7H7zm8 1V6.5a.5.5 0 1 1 1 0V8h1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H16v2.5a.5.5 0 1 1-1 0V15h-1.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5H15zM6.5 6h4a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5z",
                    })
                );
            };
        },
        LqCx: function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("gxlX"),
                v = (function (e) {
                    function t() {
                        var e, a;
                        r()(this, t);
                        for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                        return (
                            ((a = s()(this, (e = u()(t)).call.apply(e, [this].concat(i)))).state = { searchData: "" }),
                            (a.onChangeSearch = function (e) {
                                a.setState({ searchData: e ? e.target.value : "" });
                            }),
                            a
                        );
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props,
                                        a = t.element,
                                        n = t.selectedElement,
                                        r = t.firstElement;
                                    return h.a.createElement(
                                        "div",
                                        null,
                                        h.a.createElement(
                                            f.a,
                                            { placeholder: this.props.placeholder, scroll: this.props.scroll, autoHeightMin: "160", onChangeSearch: this.props.search ? this.onChangeSearch : null },
                                            h.a.createElement("div", { className: "drop-down-plain__nowrap-value first-letter-uppercase" }, n(this.props.list, this.props.index)),
                                            h.a.createElement(
                                                "ul",
                                                null,
                                                r ? r(this.props.firstElementAction ? this.props.firstElementAction : this.props.onChange) : null,
                                                this.props.list
                                                    .filter(function (t) {
                                                        return (
                                                            !e.state.searchData ||
                                                            -1 !==
                                                                t[e.props.searchField].toLowerCase().search(
                                                                    e.state.searchData
                                                                        .replace(/\W/g, function (e) {
                                                                            return " " === e ? e : "\\".concat(e);
                                                                        })
                                                                        .toLowerCase()
                                                                )
                                                        );
                                                    })
                                                    .map(function (t, n) {
                                                        return h.a.createElement(
                                                            "li",
                                                            {
                                                                key: n,
                                                                onClick: function () {
                                                                    e.props.onChange(t);
                                                                },
                                                                className: "first-letter-uppercase",
                                                            },
                                                            a(t)
                                                        );
                                                    })
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(h.a.Component);
            (v.defaultProps = { onChange: null, index: 0, search: !1, list: [], scroll: !0, element: null, selectedElement: null, searchField: "value", placeholder: "ÐŸÐ¾Ð¸ÑÐº" }), (t.a = v);
        },
        Lwgv: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-indicies.891b1d5f.svg";
        },
        "M1/X": function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("qIEf"),
                v = a.n(f),
                g = a("QB4/"),
                E = a("6nmF"),
                _ = (function (e) {
                    function t() {
                        return r()(this, t), s()(this, u()(t).apply(this, arguments));
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "componentDidUpdate",
                                value: function () {
                                    this.updatePosition();
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.updatePosition();
                                },
                            },
                            {
                                key: "updatePosition",
                                value: function () {
                                    var e = v()(this.props.linkTo),
                                        t = v()(this.el),
                                        a = v()(e).offset(),
                                        n = a.top,
                                        r = a.left,
                                        i = e.outerWidth(!0),
                                        c = e.outerHeight(!0),
                                        o = t.outerWidth(!0),
                                        s = t.outerHeight(!0),
                                        l = this.props.correction,
                                        u = this.props.position;
                                    switch (u) {
                                        case E.i:
                                            (n += c), (r += i);
                                            break;
                                        case E.d:
                                            (n += c), (r += 0);
                                            break;
                                        case E.h:
                                            (n += 0), (r -= o);
                                            break;
                                        case E.g:
                                        case E.f:
                                            (n -= s), (r += 0);
                                            break;
                                        case E.a:
                                            (n += c), (r += i / 2 - o / 2);
                                            break;
                                        case E.m:
                                            (n -= s), (r += i / 2 - o / 2);
                                            break;
                                        case E.e:
                                            (n += c / 2 - s / 2), (r -= o);
                                            break;
                                        case E.b:
                                            (n += c - s), (r += i / 2 - o / 2);
                                            break;
                                        case E.c:
                                            (n += c - s), (r += 0);
                                            break;
                                        case E.j:
                                            (n += c - s), (r += i - o);
                                            break;
                                        case E.l:
                                            (n -= s), (r += i - o);
                                            break;
                                        case E.k:
                                            (n += c), (r += i - o);
                                            break;
                                        default:
                                            (n += 0), (r += 0);
                                    }
                                    (n += l && l.top ? l.top : 0), (r += l && l.left ? l.left : 0), l || u ? t.css({ top: n, left: r }) : t.removeAttr("style");
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props.component,
                                        a = h.a.createElement(
                                            "div",
                                            {
                                                className: "step-by-step ".concat(this.props.className),
                                                ref: function (t) {
                                                    e.el = t;
                                                },
                                            },
                                            h.a.createElement(t, this.props.componentProps)
                                        );
                                    return this.props.isParanga ? h.a.createElement("div", { className: "tooltip-paranga popup-dialog-overlay " }, a) : a;
                                },
                            },
                        ]),
                        t
                    );
                })(g.a);
            (_.displayName = "TutorialTooltip"), (t.a = _);
        },
        "MR+f": function (e, t, a) {},
        Met3: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return b;
            });
            var n,
                r,
                i,
                c = a("SDJZ"),
                o = a.n(c),
                s = a("NToG"),
                l = a.n(s),
                u = a("K4DB"),
                d = a.n(u),
                p = a("+IV6"),
                m = a.n(p),
                h = a("eef+"),
                f = a.n(h),
                v = a("mXGw"),
                g = a.n(v),
                E = a("mBK0"),
                _ = a("tyvn"),
                b =
                    Object(E.observer)(
                        ((i = r = (function (e) {
                            function t() {
                                return o()(this, t), d()(this, m()(t).apply(this, arguments));
                            }
                            return (
                                f()(t, e),
                                l()(t, [
                                    {
                                        key: "render",
                                        value: function () {
                                            return g.a.createElement(
                                                "div",
                                                null,
                                                this.props.theme === _.cd.DARK
                                                    ? g.a.createElement(
                                                          v.Fragment,
                                                          null,
                                                          g.a.createElement(
                                                              "svg",
                                                              { display: "block", width: "0", height: "0" },
                                                              g.a.createElement(
                                                                  "defs",
                                                                  null,
                                                                  g.a.createElement(
                                                                      "linearGradient",
                                                                      { id: "trend-area-green-gradient", x1: "0%", x2: "0%", y1: "0%", y2: "100%" },
                                                                      g.a.createElement("stop", { offset: "0%", stopColor: "rgb(42,167,109)", stopOpacity: "0.07" }),
                                                                      g.a.createElement("stop", { offset: "100%", stopColor: "rgb(46,62,82)", stopOpacity: "0.07" })
                                                                  )
                                                              )
                                                          ),
                                                          g.a.createElement(
                                                              "svg",
                                                              { display: "block", width: "0", height: "0" },
                                                              g.a.createElement(
                                                                  "defs",
                                                                  null,
                                                                  g.a.createElement(
                                                                      "linearGradient",
                                                                      { id: "trend-area-red-gradient", x1: "0%", x2: "0%", y1: "0%", y2: "100%" },
                                                                      g.a.createElement("stop", { offset: "0%", stopColor: "rgb(223,85,58)", stopOpacity: "0.07" }),
                                                                      g.a.createElement("stop", { offset: "100%", stopColor: "rgb(46,62,82)", stopOpacity: "0.07" })
                                                                  )
                                                              )
                                                          )
                                                      )
                                                    : g.a.createElement(
                                                          v.Fragment,
                                                          null,
                                                          g.a.createElement(
                                                              "svg",
                                                              { display: "block", width: "0", height: "0" },
                                                              g.a.createElement(
                                                                  "defs",
                                                                  null,
                                                                  g.a.createElement(
                                                                      "linearGradient",
                                                                      { id: "trend-area-green-gradient", x1: "0%", x2: "0%", y1: "0%", y2: "100%" },
                                                                      g.a.createElement("stop", { offset: "0%", stopColor: "rgb(42,167,109)", stopOpacity: "0.07" }),
                                                                      g.a.createElement("stop", { offset: "100%", stopColor: "rgb(255,255,255)", stopOpacity: "0.07" })
                                                                  )
                                                              )
                                                          ),
                                                          g.a.createElement(
                                                              "svg",
                                                              { display: "block", width: "0", height: "0" },
                                                              g.a.createElement(
                                                                  "defs",
                                                                  null,
                                                                  g.a.createElement(
                                                                      "linearGradient",
                                                                      { id: "trend-area-red-gradient", x1: "0%", x2: "0%", y1: "0%", y2: "100%" },
                                                                      g.a.createElement("stop", { offset: "0%", stopColor: "rgb(223,85,58)", stopOpacity: "0.07" }),
                                                                      g.a.createElement("stop", { offset: "100%", stopColor: "rgb(255,255,255)", stopOpacity: "0.07" })
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
                        })(g.a.Component)),
                        (r.defaultProps = { theme: _.cd.DARK }),
                        (n = i))
                    ) || n;
        },
        Mgd4: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return i;
            });
            var n = a("IT7A"),
                r = a("4Nf0"),
                i = Object(n.d)();
            i.subscribe(r.j, function () {
                return null;
            }),
                i.subscribe(r.h, function () {
                    return null;
                });
        },
        Mi16: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ethusd.4c99adf7.svg";
        },
        N9PT: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-eurrub.380a9668.svg";
        },
        Nmgt: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-gbpnzd.ca5fb57f.svg";
        },
        Nsgj: function (e, t, a) {
            e.exports = a.p + "../images/app-installer-ios.a415085f.png";
        },
        NycB: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-jpm.ed10a733.svg";
        },
        O1gb: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n);
            a("smIA");
            t.a = function (e) {
                return r.a.createElement(
                    n.Fragment,
                    null,
                    e.wrap
                        ? r.a.createElement("div", { className: "page-paranga page-paranga_wrap", onClick: e.onClick }, e.children)
                        : r.a.createElement(n.Fragment, null, r.a.createElement("div", { className: "page-paranga page-paranga_no-wrap", onClick: e.onClick }), e.children)
                );
            };
        },
        OAXl: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ltcbtc.cdfbc6a1.svg";
        },
        OCGF: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M17.093 12.885c-3.263 2.792-4.961 4.186-5.093 4.183-.124-.003-1.8-1.397-5.025-4.183-.792-.854-1.127-1.94-.91-3.109.229-1.398 1.223-2.47 2.52-2.717 1.428-.28 2.786.465 3.42 1.77.646-1.276 2.01-2.045 3.413-1.77 1.255.254 2.292 1.347 2.517 2.713.216 1.17-.117 2.331-.842 3.113z",
                    })
                );
            };
        },
        "Ofg+": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-cadjpy.fd5a5819.svg";
        },
        OlVp: function (e, t, a) {},
        OuHt: function (e, t, a) {},
        P0xr: function (e, t, a) {},
        P5jm: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-nzdjpy.8a0222f7.svg";
        },
        PNuR: function (e, t, a) {},
        Pn2U: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-usdtry.e3e54509.svg";
        },
        Prof: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ibm.92cd6c3c.svg";
        },
        Q2Gm: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-z.bad6313e.svg";
        },
        Q5F4: function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("8Jek"),
                v = a.n(f),
                g = a("9va6"),
                E = a("mBK0"),
                _ = a("0jHg"),
                b = a("8VmE"),
                C = a.n(b),
                y = a("S6YD"),
                w = function (e) {
                    return h.a.createElement(
                        "svg",
                        C()({ viewBox: "0 0 ".concat(y.a.WIDTH, " ").concat(y.a.HEIGHT), width: y.a.WIDTH, height: y.a.HEIGHT, fill: y.a.FILL }, e),
                        h.a.createElement("path", { d: "M8.261 13.989A2.5 2.5 0 0 1 8.5 9h4.59l4.15-2.535a.5.5 0 0 1 .76.427v9.216a.5.5 0 0 1-.76.427L13.09 14h-2.513l1.289 2.232a1 1 0 0 1-1.732 1L8.261 13.99z" })
                    );
                },
                k = function (e) {
                    return h.a.createElement(
                        "svg",
                        C()({ viewBox: "0 0 ".concat(y.a.WIDTH, " ").concat(y.a.HEIGHT), width: y.a.WIDTH, height: y.a.HEIGHT, fill: y.a.FILL }, e),
                        h.a.createElement("path", { d: "M16 14h2l-3 4-3-4h2V8h2v6zm-8-4H6l3-4 3 4h-2v6H8v-6z" })
                    );
                },
                T = function (e) {
                    return h.a.createElement(
                        "svg",
                        C()({ viewBox: "0 0 ".concat(y.a.WIDTH, " ").concat(y.a.HEIGHT), width: y.a.WIDTH, height: y.a.HEIGHT, fill: y.a.FILL }, e),
                        h.a.createElement("path", { d: "M11 10v3H6v-3h3a2 2 0 1 1 2-2v1a1 1 0 0 1 2 0V8a2 2 0 1 1 2 2h3v3h-5v-3h-2zm2 5h5v3h-5v-3zm-7 0h5v3H6v-3zm9-8a1 1 0 0 0-1 1v1h1a1 1 0 0 0 0-2zM9 7a1 1 0 1 0 0 2h1V8a1 1 0 0 0-1-1z" })
                    );
                },
                N = a("7oIa"),
                M = function (e) {
                    return h.a.createElement(
                        "svg",
                        C()({ xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 ".concat(y.a.WIDTH, " ").concat(y.a.HEIGHT), width: y.a.WIDTH, height: y.a.HEIGHT }, e),
                        h.a.createElement("path", {
                            d:
                                "M16.809 16H7.064A.338.338 0 0 1 7 15.803c0-.399 1.225-2.8 1.225-5.534a3.713 3.713 0 0 1 2.693-3.57c.057-.511.492-.699 1.02-.699.526 0 .96.187 1.018.7a3.714 3.714 0 0 1 2.694 3.569c0 2.733 1.224 5.135 1.224 5.534 0 .07-.022.135-.065.197zm-3.374 1c-.247.586-.822 1-1.5 1a1.628 1.628 0 0 1-1.5-1h3z",
                        })
                    );
                },
                L = function (e) {
                    return h.a.createElement(
                        "svg",
                        C()({ viewBox: "0 0 ".concat(y.a.WIDTH, " ").concat(y.a.HEIGHT), width: y.a.WIDTH, height: y.a.HEIGHT, fill: y.a.FILL }, e),
                        h.a.createElement("path", {
                            d:
                                "M10 18v-6.456c.415-.498.777-1.239 1.061-1.852.477-1.028.967-3.181 1.064-3.504.076-.09-.078-.149.346-.168.423-.02 1.273 1.014 1.273 1.716 0 .467-.097 1.396-.291 2.786 0 .227.187.41.415.403l2.53.078c1.253 0 1.602.338 1.602 1.613v3.954c0 .836-.705 1.43-1.602 1.43H10zm-1 0H6.491C6.145 18 6 17.668 6 17.515v-5.007c0-.261.142-.403.403-.403H9V18z",
                        })
                    );
                },
                H = a("RiSW"),
                O = a.n(H),
                x = function (e) {
                    return h.a.createElement(m.Fragment, null, h.a.createElement("span", { className: "inapp__text" }, e.title), h.a.createElement("span", { className: "inapp__description" }, e.description));
                },
                D = a("deTv"),
                I =
                    (a("i3nY"),
                    function (e) {
                        return h.a.createElement(m.Fragment, null, h.a.createElement("span", null, e.minutes), h.a.createElement("span", null, "Â "), h.a.createElement(D.c, { id: "min", defaultMessage: "min" }));
                    }),
                S = function (e) {
                    return h.a.createElement(
                        m.Fragment,
                        null,
                        h.a.createElement("span", null, e.hours),
                        h.a.createElement("span", null, "Â "),
                        h.a.createElement(D.c, { id: "h", defaultMessage: "h" }),
                        h.a.createElement("span", null, "Â ")
                    );
                },
                V = {
                    vipChat: x,
                    carousel: x,
                    assistant: x,
                    tradingSignal: function (e) {
                        var t = Math.floor(e.period / 3600),
                            a = Math.floor((e.period - 3600 * t) / 60);
                        return h.a.createElement(
                            m.Fragment,
                            null,
                            h.a.createElement("span", { className: "inapp__text" }, e.title),
                            h.a.createElement(
                                "span",
                                { className: "inapp__description" },
                                h.a.createElement("span", { className: "trade-signal-card__pair" }, e.pair),
                                "Â ",
                                h.a.createElement("span", { className: "trade-signal-card__direction trade-signal-card__direction_".concat(e.dir) }),
                                "Â ",
                                h.a.createElement(D.c, { id: "duration", defaultMessage: "Duration" }),
                                h.a.createElement("span", null, ":Â "),
                                t > 0 ? h.a.createElement(m.Fragment, null, h.a.createElement(S, { hours: t }), a > 0 && h.a.createElement(I, { minutes: a })) : h.a.createElement(I, { minutes: a })
                            )
                        );
                    },
                    longTitle: function (e) {
                        return h.a.createElement("span", { className: "inapp__title" }, e.title);
                    },
                },
                F =
                    (a("i+G9"),
                    function (e) {
                        var t = e.iconName,
                            a = O()(e, ["iconName"]),
                            n = Object(g.isNil)(t) ? j.default : j[t];
                        return h.a.createElement(n, a);
                    }),
                B = function (e) {
                    var t = e.backgroundId,
                        a = e.children,
                        n = O()(e, ["backgroundId", "children"]),
                        r = Object(g.isNil)(t) ? A.default : A[t];
                    return h.a.createElement("div", C()({ className: "inapp__holder-icon inapp__holder-icon_circle", style: { backgroundColor: r } }, n), a);
                },
                P = function (e) {
                    return h.a.createElement(
                        m.Fragment,
                        null,
                        h.a.createElement(B, { backgroundId: e.inApp.iconBackground }, h.a.createElement(F, { iconName: e.inApp.icon, className: "inapp__icon" })),
                        h.a.createElement("span", { className: "inapp__message inapp__message_circle" }, ((t = V[e.inApp.renderer]), h.a.createElement(t, e.inApp.rendererProps)))
                    );
                    var t;
                },
                z = function (e) {
                    return h.a.createElement(
                        m.Fragment,
                        null,
                        h.a.createElement("div", { className: "inapp__holder-icon inapp__holder-icon_square" }, h.a.createElement("img", { src: "https://picsum.photos/74?image=0", alt: "img" })),
                        h.a.createElement("span", { className: "inapp__message inapp__message_square" }, ((t = V[e.inApp.renderer]), h.a.createElement(t, e.inApp.rendererProps)))
                    );
                    var t;
                },
                j = { gift: T, vipChat: w, tradingSignal: k, assistant: N.a, notify: M, like: L, default: T },
                A = { red: "#df553a", green: "#2aa76d", orange: "#ff9d14", "graphic line": "#02a6f2", "blue dark": "#4f6d9c", default: "#02a6f2" },
                G = { circle: P, square: z, default: P },
                R = function (e) {
                    var t = e.inApp,
                        a = Object(g.isNil)(t.mediaType) ? G.default : G[t.mediaType];
                    return h.a.createElement(a, { inApp: t });
                },
                W = function (e) {
                    return h.a.createElement(
                        "div",
                        {
                            className: "inapp__holder-content",
                            onClick: function () {
                                e.sendStatisticInABTestDB("inapp_click", e.inApp.publisherId), e.inApp.onClick && (e.inApp.onClick(), e.onClick());
                            },
                        },
                        h.a.createElement(
                            "span",
                            { className: "inapp__close-button" },
                            h.a.createElement(_.a, {
                                onClick: function (t) {
                                    t.stopPropagation(), e.onClose(), e.sendStatisticInABTestDB("inapp_close", e.inApp.publisherId);
                                },
                            })
                        ),
                        h.a.createElement(R, { inApp: e.inApp })
                    );
                },
                X = (function (e) {
                    function t() {
                        var e;
                        return (
                            r()(this, t),
                            ((e = s()(this, u()(t).call(this))).onInAppClick = function () {
                                e.setState(
                                    function () {
                                        return { wasClicked: !0 };
                                    },
                                    function () {
                                        e.removeInApp();
                                    }
                                );
                            }),
                            (e.removeInApp = function () {
                                var t = e.props.api.onRenderEnd;
                                e.setState(
                                    function () {
                                        return { rendering: !1 };
                                    },
                                    function () {
                                        (e.timerId = null),
                                            setTimeout(function () {
                                                t(), e.setInitialState();
                                            }, e.props.fadeout);
                                    }
                                );
                            }),
                            (e.state = { rendering: !1, wasClicked: !1 }),
                            e
                        );
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    var t = this,
                                        a = e.inApp,
                                        n = !Object(g.isNil)(a);
                                    this.setState(
                                        function () {
                                            return { rendering: n };
                                        },
                                        function () {
                                            n && t.initLifecycle();
                                        }
                                    );
                                },
                            },
                            {
                                key: "getInAppClassName",
                                value: function () {
                                    var e = this.state,
                                        t = e.rendering,
                                        a = e.wasClicked,
                                        n = this.props,
                                        r = n.inApp,
                                        i = n.className,
                                        c = !Object(g.isNil)(r) && !Object(g.isNil)(r.onClick);
                                    return v()("inapp inapp__with-description", i, { inapp_visible: r, "inapp_click-enable": c, inapp_opening: !a && t, inapp_close: !a && !t, "inapp_open inapp_fade-out": a });
                                },
                            },
                            {
                                key: "initLifecycle",
                                value: function () {
                                    var e = this,
                                        t = this.props.inApp.lifeTime || this.props.lifeTime;
                                    this.timerId && clearTimeout(this.timerId),
                                        (this.timerId = setTimeout(function () {
                                            e.removeInApp();
                                        }, t));
                                },
                            },
                            {
                                key: "setInitialState",
                                value: function () {
                                    this.setState(function () {
                                        return { rendering: !1, wasClicked: !1 };
                                    });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.inApp,
                                        a = e.children,
                                        n = e.api,
                                        r = e.isPlatform;
                                    return h.a.createElement(
                                        "div",
                                        { className: this.getInAppClassName() },
                                        a,
                                        h.a.createElement(
                                            "div",
                                            { className: v()("inapp__holder", { inapp__holder_left: r, inapp__holder_right: !r }) },
                                            t ? h.a.createElement(W, { inApp: t, onClick: this.onInAppClick, onClose: this.removeInApp, sendStatisticInABTestDB: n.sendStatisticInABTestDB }) : null
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(h.a.Component);
            t.a = Object(E.observer)(X);
        },
        Q5vE: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-fesx.bd439356.svg";
        },
        QQMA: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("deTv"),
                c = a("8Jek"),
                o = a.n(c),
                s = function (e) {
                    var t = e.project,
                        a = e.onClick,
                        n = e.isActive;
                    return r.a.createElement(
                        "div",
                        {
                            key: t.id,
                            onClick: function () {
                                return a(t);
                            },
                            className: o()("cb-filter__tab", { "cb-filter__tab_active": n }),
                        },
                        t.title
                    );
                },
                l = function (e) {
                    var t = e.list,
                        a = e.onSelectItem,
                        n = e.activeId,
                        i = e.testMarker;
                    return r.a.createElement(
                        "div",
                        { className: "cb-filter__tab-wrapper", "data-test": i },
                        r.a.createElement(function () {
                            return t.map(function (e) {
                                return r.a.createElement(s, { key: e.id, project: e, onClick: a, isActive: e.id === n });
                            });
                        }, null)
                    );
                },
                u = a("LqCx");
            t.a = function (e) {
                var t = e.setProject,
                    a = e.project,
                    c = e.projectList;
                return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(l, { list: c, onSelectItem: t, activeId: a.id, testMarker: "filter-projects-tabs" }),
                    r.a.createElement(
                        "div",
                        { className: "cb-filter__item cb-filter__item_size-small-l cb-filter__item_size-large-m cb-filter__item_mobile-view", "data-test": "filter-projects" },
                        r.a.createElement("div", { className: "cb-filter__title" }, r.a.createElement(i.c, { id: "project", defaultMessage: "Project" })),
                        r.a.createElement(u.a, {
                            list: c,
                            index: a,
                            scroll: !1,
                            onChange: t,
                            element: function (e) {
                                return e.title;
                            },
                            selectedElement: function (e, t) {
                                return t.title;
                            },
                        })
                    )
                );
            };
        },
        Qytd: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-pg.e4721756.svg";
        },
        QzRm: function (e, t, a) {},
        R5VA: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return h;
            });
            var n = a("OvAC"),
                r = a.n(n),
                i = a("Ja3R"),
                c = a("IT7A"),
                o = a("4Nf0"),
                s = a("Mgd4"),
                l = a("IVnp");
            function u(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            var d = Object(c.l)({ store: s.a }),
                p = Object(c.o)({ store: s.a }),
                m = function (e) {
                    var t = e.customAmount,
                        a = s.a.getState(o.j).defaults.preset.default;
                    d(
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = null != arguments[t] ? arguments[t] : {};
                                t % 2
                                    ? u(Object(a), !0).forEach(function (t) {
                                          r()(e, t, a[t]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                                    : u(Object(a)).forEach(function (t) {
                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                                      });
                            }
                            return e;
                        })({ amount: t || a }, Object(i.e)())
                    );
                },
                h = Object(l.b)(function (e) {
                    var t = e.amount;
                    s.a.dispatch(Object(o.k)({ id: null })), s.a.dispatch(Object(o.m)({ amount: 0, promoCode: null })), m({ customAmount: t }), p();
                });
        },
        RSYS: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M6 9v10h9V9H6zm-.5-1h10a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5zM17 17.5V7H7.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .5.5v11a.5.5 0 1 1-1 0zm2-2V5H9.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .5.5v11a.5.5 0 1 1-1 0z",
                    })
                );
            };
        },
        RYuj: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { d: "M4.707 12H20.5a.5.5 0 1 1 0 1H4.707l7.647 7.646a.5.5 0 0 1-.708.708l-8.5-8.5a.5.5 0 0 1 0-.708l8.5-8.5a.5.5 0 0 1 .708.708L4.707 12z" })
                );
            };
        },
        RZQd: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-cat.2a87ff6b.svg";
        },
        ReaC: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-usdnok.16f4c4ee.svg";
        },
        Rvca: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i);
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 16 16", width: 16, height: 16 }, e),
                    c.a.createElement("path", {
                        d: "M8.955 3.887L9.842 3 13 6.158l-.887.887-3.158-3.158zm-.631 2.045L4.03 10.226l.116 1.628 1.628.116 4.294-4.294-1.744-1.744zm3.158 1.744L6.158 13l-2.947-.21L3 9.841l5.324-5.324 3.158 3.158z",
                    })
                );
            };
        },
        "S/R7": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-pl.e5b09365.svg";
        },
        S1d4: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M16.96 11.65V8.47a4.5 4.5 0 0 0-4.5-4.5h-1a4.5 4.5 0 0 0-4.5 4.5v4.31a.5.5 0 0 1-.02.14v2.37c0 .38-.326.544-.605.49H5.67a2.66 2.66 0 0 1-2.66-2.66v-.67a2.66 2.66 0 0 1 2.66-2.66h.29V8.47a5.5 5.5 0 0 1 5.5-5.5h1a5.5 5.5 0 0 1 5.5 5.5v1.31h.413c1.388.008 2.54 1.075 2.657 2.5l-.002 1.109a2.65 2.65 0 0 1-2.66 2.391h-.425A5.5 5.5 0 0 1 12.45 21a.5.5 0 1 1 0-1 4.5 4.5 0 0 0 4.5-4.5v-3.75c0-.034.003-.068.01-.1zm-11.02-.86h-.27a1.66 1.66 0 0 0-1.66 1.66v.67c0 .917.743 1.66 1.66 1.66h.27v-3.99zm12.43 3.99c.86.008 1.579-.638 1.66-1.44l.002-1.019a1.68 1.68 0 0 0-1.662-1.541h-.27v4h.27z",
                    })
                );
            };
        },
        S6YD: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return n;
            });
            var n = { WIDTH: 24, HEIGHT: 24, FILL: "currentColor" };
        },
        SExc: function (e, t, a) {},
        SODc: function (e, t, a) {
            "use strict";
            var n = a("OvAC"),
                r = a.n(n),
                i = a("SDJZ"),
                c = a.n(i),
                o = a("NToG"),
                s = a.n(o),
                l = a("K4DB"),
                u = a.n(l),
                d = a("+IV6"),
                p = a.n(d),
                m = a("eef+"),
                h = a.n(m),
                f = a("mXGw"),
                v = a.n(f),
                g = a("8Jek"),
                E = a.n(g),
                _ = function (e) {
                    return v.a.createElement(
                        "li",
                        {
                            className: E()("".concat(N, "__item"), r()({}, "".concat(N, "__item_selected"), e.isSelected)),
                            "data-test": e["data-test"],
                            "data-value": e.value,
                            onClick: function () {
                                e.clickHandler(e.value);
                            },
                        },
                        e.children
                    );
                },
                b = a("CkPy"),
                C = a.n(b),
                y = function (e) {
                    return v.a.createElement(
                        "div",
                        { className: E()("".concat(N, "__items-wrapper"), e.className) },
                        v.a.createElement(
                            C.a,
                            { autoHeight: !0, autoHeightMax: 300, className: E()("".concat(N, "__items-scrollbar"), r()({}, "".concat(N, "__items-scrollbar_wide"), e.wide)) },
                            v.a.createElement("ul", { className: "".concat(N, "__items") }, e.children)
                        )
                    );
                },
                w = a("1XfU"),
                k = function (e) {
                    var t = e.isLoading;
                    return e.isDisabled
                        ? null
                        : t
                        ? v.a.createElement(w.a, { className: "module-spinner_dropdown" })
                        : v.a.createElement(
                              "svg",
                              { xmlns: "http://www.w3.org/2000/svg", className: "".concat(N, "__input-arrow") },
                              v.a.createElement("path", { d: "M7.35 9.65a.5.5 0 1 0-.7.7l5 5a.5.5 0 0 0 .7 0l5-5a.5.5 0 0 0-.7-.7L12 14.29 7.35 9.65z" })
                          );
                },
                T = function (e) {
                    var t = e.isLoading,
                        a = e.isDisabled,
                        n = e.clickHandler,
                        i = e.children,
                        c = e.placeholder;
                    return v.a.createElement(
                        "div",
                        { className: "".concat(N, "__input"), onClick: t || a ? null : n, "data-test": e["data-test"] },
                        v.a.createElement("div", { className: E()("".concat(N, "__input-content"), r()({}, "".concat(N, "__input-content_placeholder"), !i)) }, i || c),
                        v.a.createElement(k, { isDisabled: a, isLoading: t })
                    );
                };
            a("BgNx");
            a.d(t, "a", function () {
                return N;
            });
            var N = "satir-dropdown",
                M = (function (e) {
                    function t() {
                        return c()(this, t), u()(this, p()(t).apply(this, arguments));
                    }
                    return (
                        h()(t, e),
                        s()(t, [
                            {
                                key: "render",
                                value: function () {
                                    return v.a.createElement("div", { className: E()(N, r()({}, "".concat(N, "_is-opened"), this.props.isOpened)) }, this.props.children);
                                },
                            },
                        ]),
                        t
                    );
                })(f.Component);
            (M.Input = T), (M.Items = y), (M.Item = _);
            t.b = M;
        },
        ST9c: function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f =
                    (a("548K"),
                    (function (e) {
                        function t() {
                            var e, a;
                            r()(this, t);
                            for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                            return (
                                ((a = s()(this, (e = u()(t)).call.apply(e, [this].concat(i)))).clickHandler = function () {
                                    a.props.onClick();
                                }),
                                a
                            );
                        }
                        return (
                            p()(t, e),
                            c()(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        return h.a.createElement(
                                            "button",
                                            { className: "up-button ".concat(this.props.onTop ? "up-button_show" : "up-button_hidden", " ").concat(this.props.className), onClick: this.clickHandler },
                                            h.a.createElement(
                                                "svg",
                                                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", className: "up-button__icon" },
                                                h.a.createElement("path", { fill: "#0C1729", d: "M16.646 14.354a.5.5 0 0 0 .708-.708l-5-5a.5.5 0 0 0-.708 0l-5 5a.5.5 0 0 0 .708.708L12 9.707l4.646 4.647z" })
                                            ),
                                            h.a.createElement("span", { className: "up-button__text" }, this.props.text)
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(m.Component));
            (f.defaultProps = { text: "up", className: " ", onTop: !0 }), (t.a = f);
        },
        STdx: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-gbpcad.579bec6f.svg";
        },
        SVuw: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i),
                o = a("8VmE"),
                s = a.n(o),
                l = a("S6YD"),
                u = function (e) {
                    return r.a.createElement(
                        "svg",
                        s()({ viewBox: "0 0 ".concat(l.a.WIDTH, " ").concat(l.a.HEIGHT), width: l.a.WIDTH, height: l.a.HEIGHT, fill: "#fff" }, e),
                        r.a.createElement("path", {
                            className: "inheriting",
                            d: "M13.4 3.42331L12.8573 5.14763L8.61893 3.76765C8.15077 3.61523 7.89275 3.10566 8.04261 2.6295C8.19248 2.15335 8.69349 1.89091 9.16164 2.04334L13.4 3.42331Z",
                            fill: "white",
                        }),
                        r.a.createElement("path", {
                            className: "inheriting",
                            d: "M12.0432 7.73409C11.8933 8.21025 11.3923 8.47268 10.9242 8.32025C10.456 8.16783 10.198 7.65826 10.3479 7.1821L11.7047 2.87132L13.4 3.42331L12.0432 7.73409Z",
                            fill: "white",
                        }),
                        r.a.createElement("path", {
                            className: "inheriting",
                            d:
                                "M12.5452 4.01624L11.3438 5.36621L12.0561 6.00022C12.0374 6.00007 12.0187 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13C19 11.2056 18.3248 9.56894 17.2147 8.33012C16.8388 7.91064 16.784 7.26711 17.1585 6.84635C17.5176 6.44285 18.1376 6.39542 18.5106 6.78612C20.0529 8.40159 21 10.5902 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C12.1831 4 12.3649 4.00547 12.5452 4.01624Z",
                            fill: "white",
                        })
                    );
                },
                d = a("deTv");
            a("f6sH"),
                (t.a = function (e) {
                    return r.a.createElement(
                        "button",
                        {
                            className: c()("button-refill", { "button-refill_disabled": !e.isDemoRefillable }, e.className),
                            disabled: !e.isDemoRefillable,
                            onClick: function (t) {
                                t.stopPropagation(), e.onClick();
                            },
                        },
                        r.a.createElement(u, { className: "button-refill__icon" }),
                        r.a.createElement(d.c, { id: "refill_text", defaultMessage: "Refill" })
                    );
                });
        },
        SbJE: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("XDdT"),
                c = a("Dwr9"),
                o = a.n(c),
                s = a("5Y5z"),
                l = a.n(s),
                u = a("CBTQ"),
                d = a.n(u),
                p =
                    (a("QzRm"),
                    function (e) {
                        var t = e.language,
                            a = "https://financialcommission.org/".concat({ ru: "ru", en: "en", es: "es", ar: "ar", id: "id", tr: "tr", th: "th", pt: "en", vi: "en", zh: "en", hi: "en", ms: "en" }[t], "/olymp-trade/");
                        return r.a.createElement(
                            "a",
                            { href: a, rel: "noopener noreferrer", target: "_blank", className: "deal-detail-verification-link" },
                            r.a.createElement(i.a, {
                                srcSet: "".concat(d.a, " 3x,\n                ").concat(l.a, " 2x,\n                ").concat(o.a, " 1x\n              "),
                                src: o.a,
                                alt: "Deal verify",
                                width: "80",
                                height: "18",
                                className: "deal-detail-verification-link__img",
                            })
                        );
                    });
            (p.defaultValue = { language: "en" }), (t.a = p);
        },
        SpHF: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-audnzd.62381f82.svg";
        },
        T0n6: function (e, t, a) {
            "use strict";
            var n,
                r,
                i = a("tu/2"),
                c = a("IT7A"),
                o = a("oNVm"),
                s = a("mXGw"),
                l = a.n(s),
                u = a("Mgd4"),
                d = a("IVnp"),
                p = a("V9Cd"),
                m = a("12hZ"),
                h = a("LUjc"),
                f = (a("bVaY"), a("Ja3R")),
                v = a("e7Tw");
            a.d(t, "a", function () {
                return _;
            }),
                (n = { store: u.a }),
                (r = n.store),
                Object(m.a)({ store: r }),
                Object(h.f)({ store: r, onOpenProcessingScreen: d.a }),
                Object(m.d)({
                    onOpenById: d.c.openById.bind(d.c),
                    getIsSidebarOpen: function () {
                        return d.c.isOpen;
                    },
                    getCurrentScreenId: function () {
                        return d.c.scope.activeItem.id;
                    },
                });
            var g = Object(s.memo)(function (e) {
                    var t = e.isWebView
                        ? function () {
                              return null;
                          }
                        : Object(s.lazy)(function () {
                              return Promise.all([a.e(0), a.e(13), a.e(189)]).then(a.bind(null, "AEX1"));
                          });
                    return l.a.createElement(s.Suspense, { fallback: null }, l.a.createElement(t, { service: d.c }));
                }),
                E = Object(s.memo)(function (e) {
                    var t = e.isWebView,
                        a = e.onAppReady;
                    !(function (e) {
                        var t = e.isWebView;
                        Object(f.f)({ isWebView: t }),
                            Object(v.h)(),
                            Object(s.useEffect)(function () {
                                Object(m.g)(), Object(h.h)();
                            }, []);
                    })({ isWebView: t }),
                        (function (e) {
                            var t = e.onAppReady;
                            Object(s.useEffect)(
                                function () {
                                    t();
                                },
                                [t]
                            );
                        })({ onAppReady: a });
                    var n = Object(c.M)();
                    return l.a.createElement(
                        "div",
                        { className: "recharge-sidebar" },
                        l.a.createElement(
                            o.u,
                            { themeName: n },
                            l.a.createElement(g, { isWebView: t }),
                            l.a.createElement(i.a, {
                                type: t ? "none" : "detached",
                                animation: "right",
                                panelService: d.c,
                                className: "recharge-sidebar ".concat(t ? "web-view" : ""),
                                onForward: m.o,
                                onBack: m.n,
                                onClose: p.a,
                                isStandalone: t,
                            })
                        )
                    );
                }),
                _ = function (e) {
                    var t = e.isWebView,
                        a = void 0 !== t && t,
                        n = e.onAppReady,
                        r = void 0 === n ? function () {} : n;
                    return l.a.createElement(c.c.Provider, { value: u.a }, l.a.createElement(E, { isWebView: a, onAppReady: r }));
                };
        },
        TVJV: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-gbpjpy.9debbb24.svg";
        },
        Tcjr: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-twtr.064b47fd.svg";
        },
        Ttd4: function (e, t, a) {
            "use strict";
            var n = a("0VMN"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("xARA"),
                s = a.n(o),
                l = a("qIEf"),
                u = a.n(l),
                d = a("W+wE"),
                p = {
                    closeTM: null,
                    getDefaultProps: function () {
                        return {
                            position: "cc",
                            id: "",
                            isClose: !0,
                            isHeader: !0,
                            className: void 0,
                            title: "",
                            modal: !0,
                            passPropsToChild: !1,
                            onClose: void 0,
                            onAutoClose: void 0,
                            autoClose: !1,
                            level: 1,
                            posCorrection: { x: 0, y: 0 },
                            top: void 0,
                            left: void 0,
                        };
                    },
                    getPosition: function () {
                        return this.getPositionNormal();
                    },
                    getPositionNormal: function () {
                        var e = this.props,
                            t = u()(s.a.findDOMNode(this)).find(".dialog-box"),
                            a = t.width(),
                            n = t.outerHeight(!0),
                            r = u()(window).height(),
                            i = u()(window).width(),
                            c = 0,
                            o = 0;
                        return "cc" === e.position && ((o = i / 2 - a / 2), (c = (r - n) / 2) < 0 && (c = 0)), void 0 !== this.props.top && (c = this.props.top), void 0 !== this.props.left && (o = this.props.left), { top: c, left: o };
                    },
                    setPosition: function () {
                        var e = this.getPosition();
                        u()(s.a.findDOMNode(this)).find(".dialog-box").css({ top: e.top, left: e.left });
                    },
                    autoClose: function () {
                        !(this.props.onAutoClose && !1 === this.props.onAutoClose()) && this.close();
                    },
                    onCloseClick: function () {
                        !(this.props.onClose && !1 === this.props.onClose()) && this.close();
                    },
                    close: function () {
                        s.a.unmountComponentAtNode(document.querySelector(".dialogs-container.level-".concat(this.props.level)));
                    },
                    componentWillUnmount: function () {
                        clearTimeout(this.closeTM), d.a.off(null, null, this);
                    },
                    componentDidMount: function () {
                        var e = this;
                        this.setPosition(),
                            d.a.on(
                                "windowResizeStop",
                                function () {
                                    this.setPosition();
                                },
                                this
                            ),
                            this.props.autoClose &&
                                (this.closeTM = setTimeout(function () {
                                    e.autoClose();
                                }, this.props.autoClose)),
                            this.onComponentDidMount && this.onComponentDidMount();
                    },
                    render: function () {
                        var e = this.props.className ? "".concat(this.props.className, " dialog-box") : "dialog dialog-box",
                            t = this.props.style || {},
                            a = this.props.children || null;
                        return (
                            this.props.passPropsToChild &&
                                this.props.children &&
                                (a = c.a.Children.map(
                                    this.props.children,
                                    function (e) {
                                        return c.a.cloneElement(e, { closeDialog: this.onCloseClick });
                                    },
                                    this
                                )),
                            c.a.createElement(
                                "div",
                                { className: "dialog-container" },
                                c.a.createElement("div", { className: "dialog-under-layer", onClick: this.props.isClose && this.onCloseClick }),
                                c.a.createElement(
                                    "div",
                                    { id: this.props.id, className: "".concat(e, " base"), style: t },
                                    c.a.createElement(
                                        "div",
                                        { className: "dlg-header" },
                                        this.props.isClose ? c.a.createElement("a", { className: "dlg-close", href: "javascript:;", onClick: this.onCloseClick }, c.a.createElement("span", null)) : null
                                    ),
                                    a
                                )
                            )
                        );
                    },
                };
            t.a = r()(p);
        },
        TvsX: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-nintendo.0f574f77.svg";
        },
        U1zZ: function (e, t, a) {},
        ULL8: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-cryptoindex.df065bf4.svg";
        },
        "UMC/": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-nflx.0aadd307.svg";
        },
        UXD2: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-novn.11889f0e.svg";
        },
        UfEZ: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                            "M6 8.78523V10H18V8.78523L12 5.04367L6 8.78523ZM4.43011 7.40719C4.19775 7.55209 4 7.89752 4 8.1715V10.997C4 11.5535 4.44811 12 5.00087 12H18.9991C19.5554 12 20 11.5509 20 10.997V8.1715C20 7.90792 19.8074 7.55533 19.5699 7.40719L12.8561 3.22055C12.3859 2.92728 11.6167 2.92569 11.1439 3.22055L4.43011 7.40719Z",
                    }),
                    c.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                            "M7 17.2148V16H17V17.2148L12 19.9563L7 17.2148ZM5.43011 18.5928C5.19775 18.4479 5 18.1025 5 17.8285V15.003C5 14.4465 5.44811 14 6.00087 14H17.9991C18.5554 14 19 14.4491 19 15.003V17.8285C19 18.0921 18.8074 18.4447 18.5699 18.5928L12.8561 21.7795C12.3859 22.0727 11.6167 22.0743 11.1439 21.7795L5.43011 18.5928Z",
                    })
                );
            };
        },
        UgUM: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-eurgbp.dca97cb6.svg";
        },
        V9Cd: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return o;
            });
            var n = a("IT7A"),
                r = a("12hZ"),
                i = a("Mgd4"),
                c = Object(n.p)({ store: i.a }),
                o = function () {
                    Object(r.j)(), c();
                };
        },
        VQWb: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement(
                        "g",
                        { strokeWidth: "1", fillRule: "evenodd", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" },
                        c.a.createElement(
                            "g",
                            { transform: "translate(4.000000, 4.000000)" },
                            c.a.createElement("path", {
                                d:
                                    "M10.9607143,10.8311258 L9.82142857,10.8311258 L9.82142857,8.74503311 C11.0642857,8.34768212 11.8928571,7.25496689 11.8928571,5.96357616 L11.8928571,4.17549669 C11.8928571,2.18874172 10.1321429,0.5 7.85357143,0.5 L7.85357143,0.5 C5.47142857,0.5 3.60714286,2.18874172 3.60714286,4.37417219 L3.60714286,5.96357616 C3.60714286,7.25496689 4.43571429,8.24834437 5.67857143,8.74503311 L5.67857143,10.8311258 L4.53928571,10.8311258 C2.36428571,10.8311258 0.5,12.4205298 0.5,14.4072848 C0.5,15.0033113 1.01785714,15.5 1.63928571,15.5 L13.0321429,15.5 C14.4821429,15.5 15,15.0033113 15,14.4072848 C15,12.4205298 13.2392857,10.8311258 10.9607143,10.8311258 Z",
                            })
                        )
                    )
                );
            };
        },
        VsWA: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-fce.2eef9657.svg";
        },
        Vw7a: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { d: "M12.006 12A3.004 3.004 0 0 1 9 9c0-1.656 1.347-3 3.006-3A2.994 2.994 0 0 1 15 9c0 1.656-1.335 3-2.994 3zM7 16.3c0-2.196 3.336-3.3 5-3.3 1.664 0 5 1.104 5 3.3V18H7v-1.7z" })
                );
            };
        },
        WYaC: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M12 5.9C10.1314 5.9 8.5 7.26759 8.5 9.2C8.5 9.75229 8.94772 10.2 9.5 10.2C10.0523 10.2 10.5 9.75229 10.5 9.2C10.5 8.53241 11.0686 7.9 12 7.9C12.9314 7.9 13.5 8.53241 13.5 9.2C13.5 9.61086 13.4037 9.84773 13.2838 10.0342C13.1551 10.2345 12.9946 10.3938 12.7364 10.6501C12.6916 10.6945 12.6439 10.7419 12.5929 10.7929C12.5344 10.8514 12.4684 10.9125 12.3821 10.9923L12.3807 10.9935C12.3 11.0682 12.2021 11.1587 12.1054 11.2554C11.9216 11.4392 11.6945 11.691 11.5253 12.0143C11.3705 12.2735 11.2009 12.5767 11.0808 12.9713C10.9565 13.3799 10.9 13.8337 10.9 14.4H12.9C12.9 13.9663 12.9435 13.7201 12.9942 13.5537C13.0439 13.3902 13.1149 13.2527 13.2518 13.0239C13.267 12.9992 13.2812 12.9736 13.2944 12.9472C13.3235 12.8891 13.3857 12.8035 13.5196 12.6696C13.5849 12.6043 13.6552 12.5391 13.7398 12.4608L13.7498 12.4515C13.8272 12.3801 13.9194 12.2948 14.0071 12.2071C14.0419 12.1723 14.0795 12.1354 14.1192 12.0963C14.3706 11.8491 14.708 11.5173 14.9662 11.1158C15.2963 10.6023 15.5 9.98914 15.5 9.2C15.5 7.26759 13.8686 5.9 12 5.9Z",
                    }),
                    c.a.createElement("path", { d: "M13 16.9C13 17.4523 12.5523 17.9 12 17.9C11.4477 17.9 11 17.4523 11 16.9C11 16.3477 11.4477 15.9 12 15.9C12.5523 15.9 13 16.3477 13 16.9Z" }),
                    c.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                            "M11.9 2C6.44771 2 2 6.44771 2 11.9C2 17.445 6.44045 21.9 11.9 21.9H21C21.5523 21.9 22 21.4523 22 20.9V11.9C22 6.44045 17.545 2 12 2H11.9ZM4 11.9C4 7.55228 7.55228 4 11.9 4H12C16.455 4 20 7.55955 20 11.9V19.9H11.9C7.55955 19.9 4 16.355 4 11.9Z",
                    })
                );
            };
        },
        WdBJ: function (e, t, a) {},
        WnEs: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n);
            t.a = function (e) {
                return r.a.createElement(
                    "div",
                    { className: "trade-signal-card__header" },
                    r.a.createElement(
                        "span",
                        {
                            title: e.pair,
                            className: "trade-signal-card__pair",
                            onClick: function () {
                                return e.selectPair(e.pairRaw, e.projects[0], e.pair);
                            },
                        },
                        e.pair
                    ),
                    "" !== e.condValue && r.a.createElement("span", { className: "trade-signal-card__quotation" }, e.condValue),
                    r.a.createElement("span", { className: "trade-signal-card__direction trade-signal-card__direction_".concat(e.dir) })
                );
            };
        },
        Woij: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("RiSW"),
                c = a.n(i),
                o = a("mXGw"),
                s = a.n(o),
                l = a("8Jek"),
                u = a.n(l),
                d =
                    (a("gtxT"),
                    function (e) {
                        var t = e.href,
                            a = e.hovered,
                            n = e.disabled,
                            i = e.align,
                            o = e.className,
                            l = e.onClick,
                            d = e.children,
                            p = c()(e, ["href", "hovered", "disabled", "align", "className", "onClick", "children"]),
                            m = t ? "a" : "div";
                        return s.a.createElement(m, r()({ className: u()("overlay-card", a && "overlay-card_hovered", n && "overlay-card_disabled", i && "overlay-card_".concat(i), o), role: "presentation", onClick: l, href: t }, p), d);
                    });
            (d.defaultProps = { hovered: !1, disabled: !1, onClick: function () {} }), (t.a = d);
        },
        Wsqu: function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("deTv"),
                v = a("D/oY"),
                g = a("PiwP"),
                E = a("Nsgj"),
                _ = a.n(E),
                b = a("cjBd"),
                C = a.n(b),
                y = a("tVTJ"),
                w = a.n(y),
                k = function () {
                    return h.a.createElement(
                        "svg",
                        { xmlnsXlink: "http://www.w3.org/1999/xlink", width: 106, height: 37 },
                        h.a.createElement(
                            "defs",
                            null,
                            h.a.createElement("path", { id: "a", d: "M3.138 8h10.529a.333.333 0 0 1 0 .667H3.138l5.098 5.097a.333.333 0 0 1-.472.472L2.098 8.569a.333.333 0 0 1 0-.471L7.764 2.43a.333.333 0 1 1 .472.471L3.138 8z" })
                        ),
                        h.a.createElement(
                            "g",
                            { fill: "none", fillRule: "evenodd" },
                            h.a.createElement("path", {
                                fill: "#007AFF",
                                d:
                                    "M11.125 2.514L7.408 6.367a.273.273 0 0 1-.403-.006l-.463-.505a.318.318 0 0 1-.007-.43l5.15-5.34a.273.273 0 0 1 .404.006l.463.506c.047.05.075.113.084.178l4.626 4.737a.313.313 0 0 1-.006.425l-.508.497a.271.271 0 0 1-.4.007l-3.994-4.091v19.035h-1.23V2.514zM1.3 10.696v21.38h20.877v-21.38H14.81V9.438h8.597v23.895H.072V9.438H8.67v1.258H1.3z",
                            }),
                            h.a.createElement(
                                "g",
                                { transform: "translate(72.072 3.333)" },
                                h.a.createElement("path", { fill: "#686872", d: "M7.619 0h18.095a7.619 7.619 0 0 1 7.62 7.619v18.095a7.619 7.619 0 0 1-7.62 7.62H7.62A7.619 7.619 0 0 1 0 25.713V7.62A7.619 7.619 0 0 1 7.619 0z" }),
                                h.a.createElement("rect", { width: 3.333, height: 13.333, x: 15, y: 10, fill: "#FFF", rx: 1.667 }),
                                h.a.createElement("rect", { width: 13.333, height: 3.333, x: 10, y: 15, fill: "#FFF", rx: 1.667 })
                            ),
                            h.a.createElement("use", { className: "app-installer__icon-arrow", fillRule: "nonzero", xlinkHref: "#a", transform: "matrix(-1 0 0 1 57.739 12)" })
                        )
                    );
                },
                T = (function (e) {
                    function t() {
                        return r()(this, t), s()(this, u()(t).apply(this, arguments));
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    Object(g.f)();
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    Object(g.c)();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return h.a.createElement(
                                        v.a,
                                        { small: _.a, medium: C.a, large: w.a, className: this.props.className, onClose: this.props.onClose, isClose: this.props.isClose },
                                        h.a.createElement(
                                            m.Fragment,
                                            null,
                                            h.a.createElement("p", { className: "app-installer__text" }, h.a.createElement(f.c, { id: "ios_home_screen_installer_text", defaultMessage: "Click to share and make Olymp Trade your homepage" })),
                                            h.a.createElement("div", null, h.a.createElement(k, null))
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component);
            t.a = T;
        },
        WvAc: function (e, t, a) {
            "use strict";
            function n(e) {
                return e < 10 ? "0".concat(e) : e;
            }
            a.d(t, "b", function () {
                return n;
            }),
                a.d(t, "a", function () {
                    return i;
                });
            var r = /[,\uFF0C]/;
            function i(e, t, a) {
                (a = a || r), (e = Math.floor(e));
                return "string" == typeof t && (t = t.split(a)), t[e % 100 > 4 && e % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5]];
            }
        },
        "WyV/": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-bitcoin.8434b01e.svg";
        },
        "X/bd": function (e, t, a) {},
        X0zi: function (e, t, a) {
            "use strict";
            var n = a("OvAC"),
                r = a.n(n),
                i = a("e+GP"),
                c = a.n(i),
                o = a("SDJZ"),
                s = a.n(o),
                l = a("NToG"),
                u = a.n(l),
                d = a("K4DB"),
                p = a.n(d),
                m = a("+IV6"),
                h = a.n(m),
                f = a("eef+"),
                v = a.n(f),
                g = a("mXGw");
            function E(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            var _ = (function (e) {
                function t() {
                    var e, a;
                    s()(this, t);
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return (
                        ((a = p()(this, (e = h()(t)).call.apply(e, [this].concat(r)))).state = { code: null, msg: null, replacement: null, type: null }),
                        (a.onChange = function (e) {
                            var t =
                                "object" !== c()(e) || null === e || a.props.fullObject
                                    ? e
                                    : (function (e) {
                                          var t,
                                              a = e.currentTarget;
                                          if (a) {
                                              var n = a.tagName.toLowerCase(),
                                                  r = a.type;
                                              if ("input" === n)
                                                  switch (r) {
                                                      case "text":
                                                      case "radio":
                                                      case "email":
                                                      case "number":
                                                      case "password":
                                                          t = a.value;
                                                          break;
                                                      case "checkbox":
                                                          t = a.checked;
                                                  }
                                              else "select" === n && (t = a.value);
                                          }
                                          return t;
                                      })(e);
                            a.validate(t), a.props.onChange(t);
                        }),
                        a
                    );
                }
                return (
                    v()(t, e),
                    u()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.validate(this.props.value);
                            },
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function (e, t) {
                                return this.props.value !== e.value || this.props.active !== e.active || this.props.options !== e.options || this.state.msg !== t.msg;
                            },
                        },
                        {
                            key: "validate",
                            value: function (e) {
                                var t = { code: null, msg: null, type: null, replacement: null },
                                    a = this.props.validator(e);
                                a && Object.assign(t, a),
                                    this.setState(
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var a = null != arguments[t] ? arguments[t] : {};
                                                t % 2
                                                    ? E(Object(a), !0).forEach(function (t) {
                                                          r()(e, t, a[t]);
                                                      })
                                                    : Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                                                    : E(Object(a)).forEach(function (t) {
                                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                                                      });
                                            }
                                            return e;
                                        })({}, t)
                                    ),
                                    this.props.name && this.props.onValidate && this.props.onValidate(this.props.name, t);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props.active;
                                return this.props.children(this.props.value, this.onChange, { code: e && this.state.code, msg: e && this.state.msg, replacement: e && this.state.replacement, type: e && this.state.type }, this.props.options);
                            },
                        },
                    ]),
                    t
                );
            })(a.n(g).a.Component);
            (_.displayName = "Validator"), (_.defaultProps = { validate: !0 });
            t.a = _;
        },
        X6hh: function (e, t, a) {
            "use strict";
            var n = a("e+GP"),
                r = a.n(n),
                i = a("SDJZ"),
                c = a.n(i),
                o = a("NToG"),
                s = a.n(o),
                l = a("K4DB"),
                u = a.n(l),
                d = a("+IV6"),
                p = a.n(d),
                m = a("T1e2"),
                h = a.n(m),
                f = a("eef+"),
                v = a.n(f),
                g = a("mXGw"),
                E = a.n(g),
                _ = a("xARA"),
                b = a.n(_),
                C = a("qIEf"),
                y = a.n(C),
                w = a("f6l3"),
                k = a("deTv"),
                T = a("OvAC"),
                N = a.n(T),
                M = a("nxTg"),
                L = a.n(M),
                H = a("8Vfb"),
                O = a("8Jek"),
                x = a.n(O),
                D = a("25Kq"),
                I = (function (e) {
                    function t() {
                        var e, a;
                        c()(this, t);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return ((a = u()(this, (e = p()(t)).call.apply(e, [this].concat(r)))).node = null), a;
                    }
                    return (
                        v()(t, e),
                        s()(t, [
                            {
                                key: "componentWillUpdate",
                                value: function () {
                                    document.querySelector("#tooltips-container").children && this.props.onForceClose && this.props.onForceClose();
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this.checkTooltipDirection(),
                                        t = e.top,
                                        a = e.left;
                                    y()(b.a.findDOMNode(this)).css({ top: t, left: a });
                                },
                            },
                            {
                                key: "checkTooltipDirection",
                                value: function () {
                                    var e = this.getPosition(this.props.linkedTo, this.props.posCorrection),
                                        t = e.left,
                                        a = e.top,
                                        n = y()(b.a.findDOMNode(this)),
                                        r = this.getHasWrongPosition({ left: t, top: a }, n);
                                    return r || this.isMobile() ? this.updatePosition(r, n) : { left: t, top: a };
                                },
                            },
                            {
                                key: "isMobile",
                                value: function () {
                                    return window.innerWidth < this.props.mobileWidth;
                                },
                            },
                            {
                                key: "updatePosition",
                                value: function (e, t) {
                                    var a = this.isMobile() ? Object(D.c)(e) : Object(D.d)(e);
                                    this.directionClass = a.className;
                                    var n = t.attr("class").split(" ");
                                    return t.removeClass(n[n.length - 1]), t.addClass(a.className.trim()), this.getPosition(Object.assign({}, this.props.linkedTo, { position: a.position }), a.offset);
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function (e) {
                                    if (e.reflow !== this.props.reflow) {
                                        var t = this.checkTooltipDirection(),
                                            a = t.top,
                                            n = t.left;
                                        y()(this.node).css({ top: a, left: n });
                                    }
                                },
                            },
                            {
                                key: "getHasWrongPosition",
                                value: function (e, t) {
                                    var a = window.innerWidth,
                                        n = y()(".page-container").outerHeight(),
                                        r = t.outerWidth(),
                                        i = t.outerHeight(),
                                        c = [
                                            function () {
                                                return e.left <= 0 && D.a.LEFT;
                                            },
                                            function () {
                                                return e.left + r <= 0 && D.a.TOP;
                                            },
                                            function () {
                                                return e.left + r <= 0 && D.a.BOTTOM;
                                            },
                                            function () {
                                                return e.left + r >= a && D.a.RIGHT;
                                            },
                                            function () {
                                                return e.left + r >= a && D.a.TOP;
                                            },
                                            function () {
                                                return e.left + r >= a && D.a.BOTTOM;
                                            },
                                            function () {
                                                return e.top <= 0 && D.a.TOP;
                                            },
                                            function () {
                                                return e.top + i <= 0 && D.a.LEFT;
                                            },
                                            function () {
                                                return e.top + i <= 0 && D.a.RIGHT;
                                            },
                                            function () {
                                                return e.top + i >= n && D.a.BOTTOM;
                                            },
                                            function () {
                                                return e.top + i >= n && D.a.RIGHT;
                                            },
                                            function () {
                                                return e.top + i >= n && D.a.LEFT;
                                            },
                                        ],
                                        o = [D.a.TOP, D.a.RIGHT, D.a.BOTTOM, D.a.LEFT]
                                            .map(function (e) {
                                                return (function (e) {
                                                    return c.some(function (t) {
                                                        return t() === e;
                                                    });
                                                })(e)
                                                    ? null
                                                    : e;
                                            })
                                            .filter(function (e) {
                                                return null !== e;
                                            }),
                                        s = this.props.linkedTo.position.split("_")[0];
                                    return (
                                        !o.some(function (e) {
                                            return e === s;
                                        }) && o[0]
                                    );
                                },
                            },
                            {
                                key: "getPosition",
                                value: function (e, t) {
                                    var a,
                                        n,
                                        r,
                                        i,
                                        c,
                                        o,
                                        s,
                                        l,
                                        u,
                                        d = y()(e.el || "<div>"),
                                        p = y()(b.a.findDOMNode(this)),
                                        m = p.find(".js-cb-tooltip-arrow"),
                                        h = d.offset(),
                                        f = { width: d.outerWidth(), height: d.outerHeight() },
                                        v = p.outerWidth(),
                                        g = p.outerHeight(),
                                        E = m.outerWidth(),
                                        _ = m.outerHeight(),
                                        C = ((r = e.position.split("_")), (i = L()(r, 2)), { tooltip: (c = i[0]), arrow: i[1], isVertical: c === D.a.TOP || c === D.a.BOTTOM || c === D.a.WINDOW }),
                                        w = C.isVertical ? _ / 2 : E / 2,
                                        k = function (e, a, n, r) {
                                            var i = h[n];
                                            if ((t && t[n] && (i += t[n]), void 0 === e[a])) throw Error(r);
                                            return N()({}, n, i + Math.floor(e[a]));
                                        };
                                    return (
                                        (o = {}),
                                        N()(o, D.a.TOP, { bottom: "".concat(-_, "px") }),
                                        N()(o, D.a.BOTTOM, { top: "".concat(-_, "px") }),
                                        N()(o, D.a.LEFT, { right: "".concat(-E, "px") }),
                                        N()(o, D.a.RIGHT, { left: "".concat(-E, "px") }),
                                        (l = o),
                                        (s = {}),
                                        N()(s, D.a.CENTER, C.isVertical ? { left: (v - E) / 2 } : { top: (g - _) / 2 }),
                                        N()(s, D.a.WINDOW, { display: "none" }),
                                        N()(s, D.a.TOP, { top: w }),
                                        N()(s, D.a.RIGHT, { right: w }),
                                        N()(s, D.a.BOTTOM, { bottom: w }),
                                        N()(s, D.a.LEFT, { left: w }),
                                        (u = s),
                                        m.removeAttr("style"),
                                        m.css(Object.assign({}, l[C.tooltip], u[C.arrow])),
                                        Object.assign(
                                            {},
                                            k(
                                                ((a = {}), N()(a, D.a.TOP, -g), N()(a, D.a.BOTTOM, f.height), N()(a, D.a.RIGHT, f.width), N()(a, D.a.LEFT, -v), a),
                                                C.tooltip,
                                                C.isVertical ? "top" : "left",
                                                'Selected incorrect position in "position" property'
                                            ),
                                            k(
                                                ((n = {}),
                                                N()(n, D.a.CENTER, C.isVertical ? -(v / 2 - f.width / 2) : -(g / 2 - f.height / 2)),
                                                N()(n, D.a.WINDOW, (window.innerWidth - v) / 2 - h.left),
                                                N()(n, D.a.TOP, -w),
                                                N()(n, D.a.RIGHT, -(v - f.width - w)),
                                                N()(n, D.a.BOTTOM, -(g - f.height - w)),
                                                N()(n, D.a.LEFT, -w),
                                                n),
                                                C.arrow,
                                                C.isVertical ? "left" : "top",
                                                'Selected incorrect position in "arrowDirection" property'
                                            )
                                        )
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return E.a.createElement(
                                        "div",
                                        {
                                            className: this.props.className,
                                            style: this.props.style,
                                            onClick: this.props.onClick,
                                            onMouseEnter: this.props.onMouseEnter,
                                            onMouseLeave: this.props.onMouseLeave,
                                            ref: function (t) {
                                                e.node = t;
                                            },
                                        },
                                        E.a.createElement("i", { className: x()("js-cb-tooltip-arrow", this.props.arrowClassName, this.isMobile() && "js-cb-tooltip-arrow-hidden") }),
                                        this.props.children
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(H.a);
            I.defaultProps = { mobileWidth: D.b };
            var S = a("92VU");
            a("hX+2"), a("wT1a");
            a.d(t, "a", function () {
                return F;
            });
            var V = null,
                F = (function (e) {
                    function t(e) {
                        var a;
                        return (
                            c()(this, t),
                            ((a = u()(this, p()(t).call(this, e))).isOpen = !1),
                            (a.showTooltip = function (e, t) {
                                if (((a.isOpen = !0), e)) {
                                    a.el || (a.el = e.currentTarget);
                                    var n = a.el,
                                        i = window.innerWidth,
                                        c = a.directionData,
                                        o = c.className,
                                        s = c.position,
                                        l = c.offset,
                                        u = a.props,
                                        d = u.defaultWidth,
                                        p = u.arrowDirection,
                                        m = u.messageKey,
                                        h = u.mobileWidth,
                                        f = t || a.props.message,
                                        v = i < h ? "".concat(i - 40, "px") : d,
                                        g = a.props.isClickable || a.props.onClickOpen,
                                        _ = g ? a.onMouseEnterTooltip : null,
                                        C = g ? a.closeTooltip : null;
                                    if (m)
                                        if ("string" == typeof m) {
                                            var w = { message: { id: m } };
                                            f = E.a.createElement(k.c, w.message);
                                        } else "object" === r()(m) && (f = Object.prototype.hasOwnProperty.call(m, "id") && Object.prototype.hasOwnProperty.call(m, "defaultMessage") ? E.a.createElement(k.c, m) : m);
                                    f &&
                                        b.a.render(
                                            E.a.createElement(
                                                S.b,
                                                { value: k.g.getInstance() },
                                                E.a.createElement(
                                                    I,
                                                    {
                                                        className: "cb-tooltip ".concat(o),
                                                        arrowClassName: "cb-tooltip__arrow",
                                                        linkedTo: { el: n, position: s },
                                                        style: { width: v },
                                                        posCorrection: l,
                                                        arrowDirection: p,
                                                        mobileWidth: h,
                                                        onMouseEnter: _,
                                                        onMouseLeave: C,
                                                        onForceClose: function () {
                                                            a.isOpen = !1;
                                                        },
                                                    },
                                                    "object" === r()(f) ? f : E.a.createElement("div", { dangerouslySetInnerHTML: { __html: f } })
                                                )
                                            ),
                                            document.querySelector("#tooltips-container")
                                        ),
                                        y()(window).on("orientationchange", a.closeOnOrientationChange);
                                }
                            }),
                            (a.onMouseEnterTooltip = function () {
                                a.props.isClickable && !a.isTouchDevice() && clearTimeout(V);
                            }),
                            (a.closeOnOrientationChange = function () {
                                var e = y()(window);
                                a.closeTooltip(), e.off("orientationchange", e, a.closeOnOrientationChange);
                            }),
                            (a.closeTooltip = function () {
                                if (a.props.onClickOpen) return !1;
                                a.props.isClickable && !a.isTouchDevice() ? (clearTimeout(V), (V = setTimeout(a.unmountElement, 300))) : a.unmountElement(), (a.el = null);
                            }),
                            (a.unmountElement = function () {
                                b.a.unmountComponentAtNode(document.querySelector("#tooltips-container")), y()(window).off("orientationchange"), (a.isOpen = !1);
                            }),
                            (a.handler = function (e) {
                                var t,
                                    n = e.type;
                                a.props.notPreventBubbling || e.stopPropagation(),
                                    "touchstart" === n && a.isTouchDevice() && (a.showTooltip(e), (t = e.nativeEvent), y()("body").on("touchstart", a.closeOnTouch.bind(h()(a), t))),
                                    a.props.onClickOpen ||
                                        ("mouseenter" !== n || a.isTouchDevice() || (clearTimeout(V), a.unmountElement(), a.showTooltip(e)), ("mouseout" !== n && "mouseleave" !== n) || a.isTouchDevice() || a.closeTooltip()),
                                    a.props.onClickOpen && ("click" !== n || a.isTouchDevice() || (a.isOpen ? a.unmountElement() : a.showTooltip(e)));
                            }),
                            (a.directionData = Object(D.d)(a.props.position, a.props.arrowDirection)),
                            a
                        );
                    }
                    return (
                        v()(t, e),
                        s()(t, [
                            {
                                key: "updateTooltip",
                                value: function (e) {
                                    this.showTooltip(this.el, e);
                                },
                            },
                            {
                                key: "closeOnTouch",
                                value: function (e, t) {
                                    var a = y()("body");
                                    t.target !== e.target && (this.closeTooltip(), a.off("touchstart", a, this.closeOnTouch));
                                },
                            },
                            {
                                key: "isTouchDevice",
                                value: function () {
                                    return Object(w.K)();
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    this.props.shouldUpdateTooltipMsg && this.updateTooltip(e.message);
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.isOpen && this.unmountElement();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return E.a.createElement(
                                        "span",
                                        {
                                            onTouchStart: this.handler,
                                            onMouseEnter: this.handler,
                                            onMouseLeave: this.handler,
                                            onClick: this.handler,
                                            className: "responsive-tooltip ".concat(this.props.block ? "responsive-tooltip_block" : "", " ").concat(this.props.className),
                                        },
                                        this.props.children
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(g.Component);
            F.defaultProps = { position: D.a.TOP, arrowDirection: D.a.CENTER, mobileWidth: D.b, defaultWidth: "242px", message: "", messageKey: "", isClickable: !1, onClickOpen: !1, block: !1, className: "" };
        },
        XDdT: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("RiSW"),
                c = a.n(i),
                o = a("mXGw"),
                s = a.n(o),
                l = a("CBb8");
            function u(e) {
                var t = /^https?:\/\/|^\/\/|^data:/.test(e);
                return t || !l.c ? e : "".concat(l.c).concat(e);
            }
            t.a = function (e) {
                var t = e.src,
                    a = e.srcSet,
                    n = c()(e, ["src", "srcSet"]);
                return s.a.createElement(
                    "img",
                    r()({}, n, {
                        src: u(t),
                        srcSet: (function (e) {
                            return l.c
                                ? e
                                    ? e
                                          .split(",")
                                          .map(function (e) {
                                              return u(e.trim());
                                          })
                                          .join(", ")
                                    : null
                                : e || null;
                        })(a),
                    })
                );
            };
        },
        XYAU: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-eurusd.a4942048.svg";
        },
        XcS1: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M19.9725 10.3407L20.7003 12.4431L12.7278 15.8499C12.2593 16.05 11.7407 16.05 11.2722 15.8499L3.29971 12.4431C1.6267 11.7282 1.5504 9.12996 3.1779 8.29542L4.02754 10.3407L12 13.7474L19.9725 10.3407ZM3.1779 8.29542L4.02754 10.3407L12 6.25258L19.9725 10.3407L20.7003 12.4431C22.3733 11.7282 22.4496 9.12996 20.8221 8.29542L12.8496 4.20733C12.3105 3.93089 11.6895 3.93089 11.1504 4.20733L3.1779 8.29542Z",
                    }),
                    c.a.createElement("path", { d: "M2 10C2 9.44772 2.44772 9 3 9C3.55228 9 4 9.44772 4 10V15C4 15.5523 3.55228 16 3 16C2.44772 16 2 15.5523 2 15V10Z" }),
                    c.a.createElement("path", {
                        d:
                            "M5 15L6.47018 18.6946C6.75976 19.4223 7.30495 20.0179 8.00236 20.3685L10.5763 21.6621C11.4726 22.1126 12.5275 22.1126 13.4238 21.6621L15.9978 20.3685C16.6952 20.0179 17.2404 19.4223 17.5299 18.6946L19 15.0003L16.1426 16.4365L15.5593 17.9023C15.4628 18.1448 15.2811 18.3434 15.0486 18.4602L12.4747 19.7539C12.1759 19.904 11.8242 19.904 11.5255 19.7539L8.95154 18.4602C8.71907 18.3434 8.53734 18.1448 8.44081 17.9023L7.85742 16.4362L5 15Z",
                    })
                );
            };
        },
        "Y/eh": function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M16.732 12.562c-.018-1.983 1.634-2.948 1.71-2.993-.936-1.356-2.386-1.541-2.896-1.556-1.217-.127-2.398.724-3.019.724-.632 0-1.588-.712-2.617-.69-1.325.02-2.564.782-3.244 1.966-1.403 2.414-.356 5.962.988 7.913.672.956 1.457 2.023 2.486 1.985 1.006-.04 1.381-.637 2.595-.637 1.203 0 1.556.637 2.605.613 1.08-.017 1.759-.96 2.408-1.924.777-1.095 1.089-2.174 1.101-2.23-.025-.008-2.097-.794-2.117-3.171zM14.366 6.516c.54-.672.911-1.587.808-2.516-.783.034-1.762.538-2.326 1.196-.5.58-.945 1.53-.83 2.424.88.065 1.783-.442 2.348-1.104z",
                        fillRule: "nonzero",
                    })
                );
            };
        },
        Y01A: function (e, t, a) {},
        YsSp: function (e, t, a) {},
        Yx2a: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return D;
            });
            var n,
                r,
                i,
                c = a("nxTg"),
                o = a.n(c),
                s = a("SDJZ"),
                l = a.n(s),
                u = a("NToG"),
                d = a.n(u),
                p = a("K4DB"),
                m = a.n(p),
                h = a("+IV6"),
                f = a.n(h),
                v = a("eef+"),
                g = a.n(v),
                E = a("mXGw"),
                _ = a.n(E),
                b = a("mBK0"),
                C = a("9va6"),
                y = a("deTv"),
                w = a("BK8K"),
                k = a("QB4/"),
                T = a("1XfU"),
                N = a("gYzd"),
                M = a("us2/"),
                L = a("SbJE"),
                H = a("9oHJ"),
                O = a("ay74"),
                x = a("tyvn"),
                D =
                    Object(b.observer)(
                        ((i = r = (function (e) {
                            function t() {
                                var e;
                                return (
                                    l()(this, t),
                                    ((e = m()(this, f()(t).call(this))).onLoadData = function () {
                                        (e.isLoaded = !0),
                                            e.props.loadData(e.props.deal, x.xc, !0).then(function (t) {
                                                var a = o()(t, 2),
                                                    n = a[0],
                                                    r = a[1];
                                                n && r && e.setState({ rateData: n, gaps: r });
                                            });
                                    }),
                                    (e.isLoaded = !1),
                                    (e.state = { rateData: null, gaps: null }),
                                    e
                                );
                            }
                            return (
                                g()(t, e),
                                d()(t, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            this.props.status === O.a.NORMAL && "function" == typeof this.props.onInited && this.props.onInited(),
                                                this.props.deal && !this.isLoaded && "function" == typeof this.props.loadData && this.onLoadData();
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            if (this.props.status === O.a.LOADING) return _.a.createElement(T.a, null);
                                            var e,
                                                t,
                                                a = this.props.deal,
                                                n = "error" === this.props.status,
                                                r = "",
                                                i = "",
                                                c = "";
                                            return (
                                                a &&
                                                    ((e = a.currency),
                                                    (t = Number(a.sum) + Number(a.balanceChange)),
                                                    (r = Object(w.G)(" deal-detail__value--".concat(a.dir))),
                                                    (i = a.status && "standoff" === a.status ? "" : Object(w.G)(" deal-detail__value--".concat(a.status))),
                                                    (c = a.type && "riskfree" === a.type ? Object(w.G)(" deal-detail__value--risk") : "")),
                                                _.a.createElement(
                                                    "div",
                                                    { className: "deal-detail deal-detail--load " },
                                                    Object(C.isEmpty)(a)
                                                        ? null
                                                        : _.a.createElement(
                                                              "ul",
                                                              { className: "deal-detail__list  deal-detail__list--main" },
                                                              _.a.createElement(
                                                                  "li",
                                                                  { className: "deal-detail__list-item" },
                                                                  _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "active", defaultMessage: "Asset" })),
                                                                  _.a.createElement(
                                                                      "div",
                                                                      { className: "deal-detail__value deal-detail__value" },
                                                                      _.a.createElement("span", { className: "deal-detail__value--asset" }, a.pair.title),
                                                                      _.a.createElement("span", { className: "deal-detail__value--label" }, " ", a.winperc, "%")
                                                                  )
                                                              ),
                                                              _.a.createElement(
                                                                  "li",
                                                                  { className: "deal-detail__list-item" },
                                                                  _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "sum", defaultMessage: "Amount" })),
                                                                  _.a.createElement("div", { className: "deal-detail__value".concat(r).concat(c) }, Object(w.j)(a.sum, void 0, " ", 2), _.a.createElement(M.a, { currency: e }))
                                                              ),
                                                              _.a.createElement(
                                                                  "li",
                                                                  { className: "deal-detail__list-item" },
                                                                  _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "profit", defaultMessage: "Income" })),
                                                                  _.a.createElement("div", { className: "deal-detail__value".concat(i) }, Object(w.j)(t, void 0, " ", 2), _.a.createElement(M.a, { currency: e }))
                                                              )
                                                          ),
                                                    n
                                                        ? _.a.createElement(
                                                              "div",
                                                              { className: "deal-detail__plug-chart" },
                                                              _.a.createElement(
                                                                  "div",
                                                                  { className: "deal-detail__plug-text" },
                                                                  _.a.createElement(y.c, { id: "text_detail_graph_error", defaultMessage: "Unfortunately, chart data could not be obtained" })
                                                              )
                                                          )
                                                        : _.a.createElement(
                                                              "div",
                                                              { className: "deal-detail__chart" },
                                                              _.a.createElement(N.a, {
                                                                  id: a.id,
                                                                  status: this.props.status,
                                                                  format: "line",
                                                                  step: this.props.request && this.props.request.size ? this.props.request.size : 1,
                                                                  data: this.state.rateData || this.props.rateData,
                                                                  gaps: this.state.gaps || this.props.gaps,
                                                                  uuid: this.props.uuid,
                                                                  deal: a,
                                                                  theme: this.props.theme,
                                                                  width: this.props.width,
                                                              })
                                                          ),
                                                    Object(C.isEmpty)(a)
                                                        ? null
                                                        : _.a.createElement(
                                                              E.Fragment,
                                                              null,
                                                              _.a.createElement(
                                                                  "ul",
                                                                  { className: "deal-detail__list" },
                                                                  _.a.createElement(
                                                                      "li",
                                                                      { className: "deal-detail__list-item" },
                                                                      _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "datetime", defaultMessage: "Date and time" })),
                                                                      _.a.createElement(
                                                                          "div",
                                                                          { className: "deal-detail__value" },
                                                                          Object(w.l)(new Date(1e3 * a.timeOpen), x.w),
                                                                          ".",
                                                                          _.a.createElement("strong", null, Object(w.l)(new Date(1e3 * a.timeOpen), "u"))
                                                                      ),
                                                                      _.a.createElement(
                                                                          "div",
                                                                          { className: "deal-detail__value" },
                                                                          Object(w.l)(new Date(1e3 * a.timeClose), x.w),
                                                                          ".",
                                                                          _.a.createElement("strong", null, Object(w.l)(new Date(1e3 * a.timeClose), "u"))
                                                                      )
                                                                  ),
                                                                  _.a.createElement(
                                                                      "li",
                                                                      { className: "deal-detail__list-item" },
                                                                      _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "rate", defaultMessage: "Quote" })),
                                                                      a.cursStrike
                                                                          ? _.a.createElement("div", { className: "deal-detail__value" }, a.cursStrike.toFixed(a.pair.precision))
                                                                          : _.a.createElement("div", { className: "deal-detail__value" }, a.cursOpen.toFixed(a.pair.precision)),
                                                                      _.a.createElement("div", { className: "deal-detail__value" }, a.cursClose.toFixed(a.pair.precision))
                                                                  ),
                                                                  _.a.createElement(
                                                                      "li",
                                                                      { className: "deal-detail__list-item" },
                                                                      _.a.createElement(
                                                                          "div",
                                                                          { className: "deal-detail__key" },
                                                                          a.refunded ? _.a.createElement(y.c, { id: "refunded_deal", defaultMessage: "Canceled" }) : _.a.createElement(y.c, { id: "closed_deal", defaultMessage: "Closed" })
                                                                      ),
                                                                      _.a.createElement("div", { className: "deal-detail__value" }, _.a.createElement(H.a, { status: a.status, refunded: a.refunded }))
                                                                  )
                                                              ),
                                                              _.a.createElement("div", { className: "deal-detail__verification-block" }, _.a.createElement(L.a, { language: this.props.currentLang }))
                                                          )
                                                )
                                            );
                                        },
                                    },
                                ]),
                                t
                            );
                        })(k.a)),
                        (r.displayName = "DealDetails"),
                        (r.defaultProps = { uuid: "", rateData: [], gaps: [], request: [], deal: null, status: O.a.LOADING }),
                        (n = i))
                    ) || n;
        },
        ZEPw: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-audusd.225822a1.svg";
        },
        Zrvr: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-usdrub.b2ad7da2.svg";
        },
        "a/1R": function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i);
            a("+/qX");
            t.a = function (e) {
                var t = e.horizontal,
                    a = e.className,
                    n = e.mixClass,
                    i = e.children,
                    o = c()("satir-list", t && "satir-list_horizontal", a, n),
                    s = c()("satir-list__item", n ? "".concat(n, "__item") : "");
                return r.a.createElement(
                    "ul",
                    { className: o },
                    r.a.Children.map(i, function (e) {
                        return r.a.createElement("li", { className: s }, e);
                    })
                );
            };
        },
        a4wB: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M10.9084163,19.7540534 C10.4509169,20.3036527 9.67591804,19.8692532 9.73591795,19.0684543 L11.0469175,14.1604609 C11.0844175,13.6636615 10.8199178,13.2492621 10.4564184,13.2340621 L7.62892238,13.1196623 C7.04242322,13.0956623 6.7734236,12.1132636 7.23092295,11.5636644 L12.9664162,4.24767413 C13.4239155,3.69807487 14.0069147,4.1244743 13.9464148,4.92527323 L12.6354152,10.6172656 C12.5979153,11.114065 12.8624149,11.5284644 13.2259144,11.5428644 L16.4374098,11.6740642 C17.024409,11.6980642 17.1969087,12.6764629 16.7394094,13.2260621 L10.9084163,19.7540534 Z",
                    })
                );
            };
        },
        aZva: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return w;
            });
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("xARA"),
                v = a.n(f),
                g = a("qIEf"),
                E = a.n(g),
                _ = a("7QWs"),
                b = a("6cnl"),
                C = a("8Vfb"),
                y = a("LUSz"),
                w = (function (e) {
                    function t() {
                        return r()(this, t), s()(this, u()(t).apply(this, arguments));
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "getPosition",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.linkedTo,
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.props.posCorrection;
                                    return e ? this.getPositionLinked(e, t) : this.getPositionNormal();
                                },
                            },
                            {
                                key: "getPositionNormal",
                                value: function () {
                                    var e = this.props.coord ? this.props.coord.y : 0,
                                        t = this.props.coord ? this.props.coord.x : 0;
                                    return this.props.coord && (this.props.tailShift && (t -= this.props.tailShift), (e += 30), (t -= 20)), { top: e, left: t };
                                },
                            },
                            {
                                key: "getOffsetRect",
                                value: function (e) {
                                    if (!e.getBoundingClientRect) return E()(e).offset();
                                    var t = e.getBoundingClientRect(),
                                        a = document.body,
                                        n = document.documentElement,
                                        r = window.pageYOffset || n.scrollTop || a.scrollTop,
                                        i = window.pageXOffset || n.scrollLeft || a.scrollLeft,
                                        c = n.clientTop || a.clientTop || 0,
                                        o = n.clientLeft || a.clientLeft || 0,
                                        s = t.top + r - c,
                                        l = t.left + i - o;
                                    return { top: Math.round(s), left: Math.round(l) };
                                },
                            },
                            {
                                key: "getPositionLinked",
                                value: function (e, t) {
                                    var a,
                                        n,
                                        r,
                                        i = E()(v.a.findDOMNode(this)),
                                        c = i.outerWidth(!0),
                                        o = i.outerHeight(!0),
                                        s = e.position || "rt-lt",
                                        l = e.el || "<div>",
                                        u = e.el ? this.getOffsetRect(l) : { top: 0, left: 0 },
                                        d = E()(l),
                                        p = e.el ? (e.el instanceof SVGElement ? e.el.getBoundingClientRect().height : d.outerHeight(!0)) : 0,
                                        m = e.el ? (e.el instanceof SVGElement ? e.el.getBoundingClientRect().width : d.outerWidth(!0)) : 0,
                                        h = window.innerWidth;
                                    switch (s) {
                                        case "rt-lt":
                                            (a = u.top - o / 2), (n = u.left - c);
                                            break;
                                        case "rÑ-lÑ":
                                            (r = (p - o) / 2), (a = u.top + r), (n = u.left - c);
                                            break;
                                        case "bc-tc":
                                            (a = u.top - o), (n = u.left + (m - c) / 2), e.el && n < 0 && (n = u.left);
                                            break;
                                        case "bl-tl":
                                            (a = u.top - o), (n = u.left);
                                            break;
                                        case "br-rb":
                                            (a = u.top - o), (n = u.left - c + m);
                                            break;
                                        case "tc-bc":
                                            (a = u.top + p + 9), (n = u.left + (m - c) / 2), e.el && n < 0 && (n = u.left);
                                            break;
                                        case "lÑ-rÑ":
                                            (a = u.top - o / 2 + p / 2), (n = u.left + m);
                                            break;
                                        case "tr-rb":
                                            (a = u.top + p + 9), (n = u.left - c + m);
                                            break;
                                        case "br-rt":
                                            (a = u.top - o), (n = u.left - c + m);
                                            break;
                                        case "wn-tc":
                                            (a = u.top - o), (n = (h - c) / 2);
                                            break;
                                        case "wn-bc":
                                            (a = u.top + p + 9), (n = (h - c) / 2);
                                    }
                                    return t && (t.top && (a += t.top), t.left && (n += t.left)), { top: a, left: n };
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function () {
                                    var e = this.getPosition();
                                    E()(v.a.findDOMNode(this)).css({ top: e.top, left: e.left });
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this.getPosition();
                                    E()(v.a.findDOMNode(this)).css({ top: e.top, left: e.left });
                                },
                            },
                            {
                                key: "extensionClasses",
                                value: function (e) {
                                    var t = this.props.className ? "".concat(e, " ").concat(this.props.className) : e;
                                    if (this.props.pointer) {
                                        switch (this.props.pointer.dir) {
                                            case "left":
                                                t += " tail-toleft";
                                                break;
                                            case "right":
                                                t += " tail-toright";
                                                break;
                                            case "bottom":
                                                t += " tail-tobottom";
                                        }
                                        switch (this.props.pointer.pos) {
                                            case "left":
                                                t += " tail-left";
                                                break;
                                            case "right":
                                                t += " tail-right";
                                                break;
                                            case "bottom":
                                                t += " tail-bottom";
                                                break;
                                            case "top":
                                                t += " tail-top";
                                        }
                                    }
                                    return t;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.tailShift ? " tail-".concat(this.props.tailShift) : "",
                                        t = this.props.noBaseClass ? "" : "tooltip-box".concat(e),
                                        a = this.extensionClasses(t),
                                        n = this.props.style ? this.props.style : {},
                                        r = null;
                                    return (
                                        (r = this.props.text ? h.a.createElement("div", { className: "wrap", dangerouslySetInnerHTML: { __html: this.props.text } }) : h.a.createElement("div", { className: "wrap" }, this.props.children)),
                                        h.a.createElement(
                                            _.a,
                                            { component: y.a },
                                            h.a.createElement(
                                                b.a,
                                                { classNames: this.props.transitionName || "", appear: !!this.props.transitionName, enter: !1, exit: !1, timeout: { appear: this.props.transitionTimeout || 400 } },
                                                h.a.createElement(
                                                    "div",
                                                    { className: a, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave, onClick: this.props.onClick, style: n },
                                                    h.a.createElement("span", { className: "arrow" }),
                                                    r
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(C.a);
        },
        amJR: function (e, t, a) {
            "use strict";
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("deTv"),
                v = a("D/oY"),
                g = a("PiwP"),
                E = a("9prh"),
                _ = a.n(E),
                b = a("3AmY"),
                C = a.n(b),
                y = a("cB7A"),
                w = a.n(y),
                k = (function (e) {
                    function t() {
                        return r()(this, t), s()(this, u()(t).apply(this, arguments));
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    Object(g.f)();
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    Object(g.c)();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return h.a.createElement(
                                        v.a,
                                        { className: "app-installer__android", small: _.a, medium: C.a, large: w.a, onClose: this.props.onClose, isClose: this.props.isClose },
                                        h.a.createElement(
                                            m.Fragment,
                                            null,
                                            h.a.createElement("p", { className: "app-installer__text" }, h.a.createElement(f.c, { id: "app_installer_android_title", defaultMessage: 'Select "Add to Home Screen" in the menu ' })),
                                            h.a.createElement("p", { className: "app-installer__text -last" }, h.a.createElement(f.c, { id: "app_installer_android_subtitle", defaultMessage: "or just click on the button" })),
                                            h.a.createElement("button", { className: "app-installer__button", onClick: this.props.onClick }, h.a.createElement(f.c, { id: "app_installer_android_button", defaultMessage: "Install" }))
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component);
            t.a = k;
        },
        bOpv: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("Woij"),
                c = a("deTv"),
                o =
                    (a("/OfW"),
                    Object(c.e)({
                        disclaimer_1: { id: "trade-signal-info-1", defaultMessage: "A trading signal is not a direct instruction to trade, but an analyst recommendation. It should not replace independent market analysis." },
                        disclaimer_2: {
                            id: "trade-signal-info-2",
                            defaultMessage: "You have an average of 10 minutes to take advantage of the trading signal. After this time, the quotes may change and have an unexpected effect on the trade result.",
                        },
                        details: { id: "details", defaultMessage: "More" },
                        continue: { id: "continue", defaultMessage: "Continue" },
                    })),
                s = function (e) {
                    var t = e.onClick,
                        a = e.onDisclaimerClick;
                    return r.a.createElement(
                        i.a,
                        { className: "trading-signals-disclaimer", align: "center", hovered: !1 },
                        r.a.createElement("div", { className: "trading-signals-disclaimer__text" }, r.a.createElement(c.b, o.disclaimer_1)),
                        r.a.createElement("div", { className: "trading-signals-disclaimer__text" }, r.a.createElement(c.b, o.disclaimer_2)),
                        r.a.createElement(
                            "div",
                            {
                                className: "trading-signals-disclaimer__button trading-signals-disclaimer__button_more",
                                onClick: function () {
                                    return window.open("/terms#legal_information_service_agreement_contents_2");
                                },
                            },
                            r.a.createElement("div", { className: "trading-signals-disclaimer__btn-text" }, r.a.createElement(c.c, o.details))
                        ),
                        r.a.createElement(
                            "div",
                            {
                                className: "trading-signals-disclaimer__button trading-signals-disclaimer__button_next",
                                onClick: function () {
                                    t(), a();
                                },
                            },
                            r.a.createElement("div", { className: "trading-signals-disclaimer__btn-text" }, r.a.createElement(c.c, o.continue))
                        )
                    );
                };
            t.a = function (e) {
                var t = e.onAccept,
                    a = e.onDisclaimerClick;
                return r.a.createElement("div", { className: "disclaimer-container" }, r.a.createElement(s, { onClick: t, onDisclaimerClick: a }));
            };
        },
        bVaY: function (e, t, a) {},
        bhnT: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ng.88ef5bca.svg";
        },
        bpxs: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M6.023 19.832c.013.03.045.046.076.04v-.001l6.831-4.102 2.525-1.504-2.009-2.056-7.408 7.535a.08.08 0 0 0-.015.088zm9.834-9.993l-1.864 2.074 1.864 2.074 2.79-1.55a.6.6 0 0 0 0-1.049l-2.79-1.55zm-.402-.278l-2.507-1.504L6.146 4h-.04a.091.091 0 0 0-.087.066c-.012.04 0 .084.03.114l7.415 7.437 1.99-2.056zm-2.955 2.35L6 18.728V5.098l6.5 6.813z",
                    })
                );
            };
        },
        cB7A: function (e, t, a) {
            e.exports = a.p + "../images/app-installer-android@3x.f915c6f1.png";
        },
        cEkG: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M21.9 9.8C22.1 9.3 22 8.8 21.7 8.3L20.5 6.2C20 5.2 18.9 4.9 18 5.4L16.9 6C16.4 5.6 15.9 5.3 15.3 5.1V3.9C15.3 2.8 14.4 2 13.4 2H10.7C9.59999 2 8.69999 2.9 8.69999 3.9V5C8.39999 5.1 7.99999 5.3 7.69999 5.5L6.69999 4.9C5.69999 4.4 4.59999 4.6 3.99999 5.5L2.59999 7.5C2.29999 7.9 2.19999 8.5 2.29999 9C2.39999 9.5 2.69999 10 3.19999 10.2L4.09999 10.8C4.09999 11.2 3.99999 11.5 3.99999 11.9C3.99999 12.1 3.99999 12.2 3.99999 12.4L2.99999 12.9C2.49999 13.1 2.19999 13.6 1.99999 14.1C1.79999 14.6 1.89999 15.1 2.19999 15.6L3.39999 17.7C3.99999 18.6 5.09999 18.9 5.99999 18.5L7.09999 17.9C7.59999 18.3 8.09999 18.6 8.69999 18.8V19.9C8.69999 21 9.59999 21.8 10.6 21.8H13.2C14.3 21.8 15.1 20.9 15.1 19.9V18.8C15.5 18.6 15.8 18.5 16.2 18.2L17.2 18.8C18.1 19.3 19.2 19.1 19.8 18.2L21.2 16.2C21.5 15.8 21.6 15.2 21.5 14.7C21.4 14.2 21.1 13.7 20.6 13.5L19.9 13C20 12.6 20 12.3 20 11.9C20 11.7 20 11.6 20 11.4L21 10.9C21.4 10.7 21.8 10.3 21.9 9.8ZM18.4 10C18 10.2 17.8 10.6 17.9 11C17.9 11.4 18 11.6 18 11.9C18 12.3 17.9 12.8 17.8 13.2C17.7 13.6 17.9 14.1 18.2 14.3L19.7 15.2L18.4 17.2L16.8 16.2C16.5 16 16 16 15.7 16.3C15.2 16.7 14.6 17 13.9 17.2C13.5 17.3 13.2 17.7 13.2 18.2L13.3 19.9L10.7 20V18.3C10.7 17.9 10.4 17.5 9.99999 17.3C9.19999 17 8.49999 16.6 7.89999 16.1C7.69999 15.9 7.49999 15.8 7.19999 15.8C6.99999 15.8 6.89999 15.8 6.69999 15.9L5.09999 16.8L3.99999 14.6L5.59999 13.8C5.99999 13.6 6.19999 13.2 6.09999 12.7C6.09999 12.5 5.99999 12.2 5.99999 11.9C5.99999 11.5 6.09999 11 6.19999 10.6C6.29999 10.2 6.09999 9.7 5.79999 9.5L4.29999 8.6L5.59999 6.6L7.19999 7.6C7.49999 7.8 7.99999 7.8 8.29999 7.5C8.79999 7.1 9.39999 6.8 10.1 6.6C10.5 6.5 10.8 6.1 10.8 5.6L10.7 4L13.3 3.9V5.6C13.3 6 13.6 6.4 14 6.6C14.8 6.9 15.5 7.3 16.1 7.8C16.4 8.1 16.8 8.1 17.2 7.9L18.8 7L20 9.2L18.4 10Z",
                    }),
                    c.a.createElement("path", {
                        d:
                            "M12 7.8C9.79999 7.8 7.99999 9.6 7.99999 11.8C7.99999 12.9 8.39999 13.9 9.19999 14.6C9.99999 15.4 11 15.8 12 15.8C14.2 15.8 16 14 16 11.8C16 9.6 14.2 7.8 12 7.8ZM12 13.8C11.5 13.8 11 13.6 10.6 13.2C10.2 12.8 9.99999 12.3 9.99999 11.8C9.99999 10.7 10.9 9.8 12 9.8C13.1 9.8 14 10.7 14 11.8C14 12.9 13.1 13.8 12 13.8Z",
                    })
                );
            };
        },
        cHiH: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("gzZR"),
                c = a("deTv"),
                o = a("8VmE"),
                s = a.n(o),
                l = a("S6YD"),
                u = function (e) {
                    return r.a.createElement(
                        "svg",
                        s()({ viewBox: "0 0 ".concat(l.a.WIDTH, " ").concat(l.a.HEIGHT), width: l.a.WIDTH, height: l.a.HEIGHT, fill: l.a.FILL }, e),
                        r.a.createElement("path", {
                            d:
                                "M20.293 13H11.5a.5.5 0 1 1 0-1h8.793l-1.647-1.646a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L20.293 13zM15 17.5a.5.5 0 1 1 1 0v1.9c0 .876-.724 1.6-1.6 1.6H4.6A1.61 1.61 0 0 1 3 19.4V5.6C3 4.724 3.724 4 4.6 4h9.8c.876 0 1.6.724 1.6 1.6v1.9a.5.5 0 1 1-1 0V5.6a.61.61 0 0 0-.6-.6H4.6a.61.61 0 0 0-.6.6v13.8c0 .324.276.6.6.6h9.8a.61.61 0 0 0 .6-.6v-1.9z",
                        })
                    );
                };
            t.a = function (e) {
                var t = e.onClick,
                    a = e.trans;
                return r.a.createElement(
                    "button",
                    { type: "button", onClick: t, className: "main-menu__btns main-menu__btns_logout logout-button" },
                    r.a.createElement(u, { className: "main-menu__icon main-menu__icon_logout" }),
                    r.a.createElement(i.a, null, a && r.a.createElement(c.c, a))
                );
            };
        },
        cM5a: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return n;
            });
            var n = Object.freeze({ ERROR: "error", SUCCESS: "success" });
        },
        cbqG: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-mcd.cc0fc79a.svg";
        },
        cjBd: function (e, t, a) {
            e.exports = a.p + "../images/app-installer-ios@2x.ad865a35.png";
        },
        deZz: function (e, t, a) {},
        dlJB: function (e, t, a) {},
        dqRU: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return o;
            });
            var n = a("mXGw"),
                r = a("8Jek"),
                i = a.n(r),
                c = a("YTIe"),
                o =
                    (a("vLEy"),
                    n.forwardRef(function (e, t) {
                        var a = e.className,
                            r = e.description,
                            o = e.action,
                            s = e.title;
                        return n.createElement(
                            "div",
                            { className: i()("troubles-informer", a), ref: t },
                            n.createElement(c.b, { className: "troubles-informer__icon" }),
                            s && n.createElement("h2", { className: "troubles-informer__title" }, s),
                            r && n.createElement("p", { className: "troubles-informer__description" }, r),
                            o && n.createElement("div", { className: "troubles-informer__action" }, o)
                        );
                    }));
            o.displayName = "TroublesInformer";
        },
        e1Lj: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-csco.ec8f14a1.svg";
        },
        eHwN: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-tsla.d35d931c.svg";
        },
        eM6l: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return g;
            });
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("BK8K"),
                v = Object.freeze({ ENTER: "onEnter", ESC: "onEsc" }),
                g = (function (e) {
                    function t() {
                        var e, a;
                        r()(this, t);
                        for (var n = arguments.length, i = new Array(n), c = 0; c < n; c++) i[c] = arguments[c];
                        return (
                            ((a = s()(this, (e = u()(t)).call.apply(e, [this].concat(i)))).state = { value: "", focus: !1 }),
                            (a.inputRef = Object(m.createRef)()),
                            (a.caret = 0),
                            (a.preventOnBlurCallback = !1),
                            (a.onFocus = function (e) {
                                a.setState({ focus: !0 }), "function" == typeof a.props.onFocus && a.props.onFocus(e);
                            }),
                            (a.onBlur = function (e) {
                                a.setState({ focus: !1 }), "function" != typeof a.props.onBlur || a.preventOnBlurCallback || a.props.onBlur(e);
                            }),
                            (a.onKeyDown = function (e) {
                                switch (e.keyCode) {
                                    case 13:
                                        a.keyboardHandler(e, v.ENTER);
                                        break;
                                    case 27:
                                        a.keyboardHandler(e, v.ESC);
                                }
                            }),
                            (a.onChange = function (e) {
                                var t = e.target.value,
                                    n = "",
                                    r = a.props,
                                    i = r.canBeNegative,
                                    c = r.acceptPlus;
                                if (
                                    (i && !c ? (n = "(-{0,1})") : c && !i ? (n = "([+]{0,1})") : c && i && (n = "(".concat("([+]{0,1})", "|").concat("(-{0,1})", ")")),
                                    new RegExp("^((".concat(n, ")[\\d\\s]*)[.,]?(\\d){0,").concat(a.props.precision, "}$")).test(t))
                                ) {
                                    var o = a.getEnterRegExp(a.props),
                                        s = new RegExp("^[^".concat(o, "]"));
                                    a.props.canBeEmpty && (t = t.replace(s, "").replace(/\s/g, "")),
                                        a.props.canBeNegative && (t = t.replace(/-\./, "-").replace(/-\s/, "-").replace(/-,/, "-")),
                                        a.props.acceptPlus &&
                                            (t = t
                                                .replace(/^[^\d]\+/, "")
                                                .replace(/\+0/, "+")
                                                .replace(/\+\./, "+")
                                                .replace(/\+\s/, "+")
                                                .replace(/\+,/, "+"));
                                    var l = a.props.canBeEmpty ? t.replace(",", ".") : a.formatValue(t),
                                        u = t.length === e.target.selectionEnd ? null : e.target.selectionEnd,
                                        d = null !== u && l.length - t.length;
                                    (a.caret = u + d),
                                        a.setState({ value: l }),
                                        "function" == typeof a.props.updateParentState && a.props.updateParentState(l),
                                        a.props.canBeEmpty ? a.props.onChange(l) : a.props.onChange(Number(l.replace(/\s/g, "")));
                                }
                            }),
                            a
                        );
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "componentDidUpdate",
                                value: function (e, t) {
                                    t.focus === this.state.focus && this.caret && Object(f.J)(this.inputRef.current, this.caret);
                                },
                            },
                            {
                                key: "componentWillMount",
                                value: function () {
                                    if (void 0 !== this.props.value) {
                                        var e = String(this.props.value);
                                        this.setState({ value: e.length ? this.formatValue(e) : e });
                                    }
                                },
                            },
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    if (e.value !== this.props.value) {
                                        var t = String(e.value);
                                        this.setState({ value: t.length && "-" !== t && "+" !== t ? this.formatValue(t) : t });
                                    }
                                },
                            },
                            {
                                key: "formatPositiveValue",
                                value: function (e) {
                                    var t = /^(.*)(?:\.|,)(\d*)$/.exec(e),
                                        a = t && Number(t[1].replace(/\D/g, "")),
                                        n = t ? Object(f.j)(a, void 0, this.props.divider, 0) : "",
                                        r = t ? t[2] : "";
                                    return t ? "".concat(n, ".").concat(r) : Object(f.j)(e, void 0, " ", 0);
                                },
                            },
                            {
                                key: "formatValue",
                                value: function (e) {
                                    var t,
                                        a,
                                        n = e.replace(/\s/g, "");
                                    if (this.props.canBeNegative || this.props.acceptPlus)
                                        if ((t = /^(-|\+)([\.,\d]*)/.exec(n))) {
                                            var r = t[1],
                                                i = this.formatPositiveValue(t[2]);
                                            a = "".concat(r).concat(i);
                                        } else a = this.formatPositiveValue(n);
                                    else a = this.formatPositiveValue(n);
                                    return a;
                                },
                            },
                            {
                                key: "getEnterRegExp",
                                value: function (e) {
                                    var t = "";
                                    return e.canBeEmpty && (t += "\\d"), e.canBeNegative && (t += "-"), e.acceptPlus && (t += "+"), t;
                                },
                            },
                            {
                                key: "keyboardHandler",
                                value: function (e, t) {
                                    var a = this.props[t],
                                        n = "function" == typeof a;
                                    n && (this.preventOnBlurCallback = !0), this.inputRef.current && this.inputRef.current.blur(), a && n && ((this.preventOnBlurCallback = !1), a(e), e.preventDefault());
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return h.a.createElement("input", {
                                        type: "tel",
                                        autoComplete: "off",
                                        onChange: this.onChange,
                                        onBlur: this.onBlur,
                                        value: this.state.value,
                                        ref: this.inputRef,
                                        className: this.props.className,
                                        id: this.props.id,
                                        "data-test": this.props["data-test"],
                                        placeholder: this.props.placeholder,
                                        maxLength: this.props.maxLength,
                                        onFocus: this.onFocus,
                                        onKeyDown: this.onKeyDown,
                                        autoFocus: this.props.autoFocus,
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component);
            g.defaultProps = { value: 0, className: "", id: null, "data-test": null, placeholder: null, maxLength: null, error: !1, precision: 2, divider: " ", canBeNegative: null, acceptPlus: !1, canBeEmpty: !1, autoFocus: !1 };
        },
        eMif: function (e, t, a) {},
        ePi6: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i),
                o = (a("qfpa"), a("5+MG")),
                s = a.n(o),
                l = a("nihW"),
                u = a.n(l),
                d = a("rmHU"),
                p = a.n(d),
                m = a("uJfi"),
                h = a.n(m),
                f = a("SpHF"),
                v = a.n(f),
                g = a("ZEPw"),
                E = a.n(g),
                _ = a("g7KI"),
                b = a.n(_),
                C = a("ELCO"),
                y = a.n(C),
                w = a("WyV/"),
                k = a.n(w),
                T = a("kPUf"),
                N = a.n(T),
                M = a("IO/V"),
                L = a.n(M),
                H = a("EDsA"),
                O = a.n(H),
                x = a("xqac"),
                D = a.n(x),
                I = a("D9bk"),
                S = a.n(I),
                V = a("Ofg+"),
                F = a.n(V),
                B = a("JR1d"),
                P = a.n(B),
                z = a("h2JL"),
                j = a.n(z),
                A = a("yr7W"),
                G = a.n(A),
                R = a("ULL8"),
                W = a.n(R),
                X = a("Hr5R"),
                U = a.n(X),
                Z = a("Dodw"),
                Y = a.n(Z),
                K = a("how2"),
                J = a.n(K),
                q = a("vQpF"),
                Q = a.n(q),
                $ = a("EDOb"),
                ee = a.n($),
                te = a("hTeP"),
                ae = a.n(te),
                ne = a("Mi16"),
                re = a.n(ne),
                ie = a("s698"),
                ce = a.n(ie),
                oe = a("50IP"),
                se = a.n(oe),
                le = a("0Hrr"),
                ue = a.n(le),
                de = a("UgUM"),
                pe = a.n(de),
                me = a("/wg2"),
                he = a.n(me),
                fe = a("+fhu"),
                ve = a.n(fe),
                ge = a("N9PT"),
                Ee = a.n(ge),
                _e = a("XYAU"),
                be = a.n(_e),
                Ce = a("sKPn"),
                ye = a.n(Ce),
                we = a("VsWA"),
                ke = a.n(we),
                Te = a("FFyd"),
                Ne = a.n(Te),
                Me = a("Q5vE"),
                Le = a.n(Me),
                He = a("558C"),
                Oe = a.n(He),
                xe = a("STdx"),
                De = a.n(xe),
                Ie = a("s7nT"),
                Se = a.n(Ie),
                Ve = a("TVJV"),
                Fe = a.n(Ve),
                Be = a("Nmgt"),
                Pe = a.n(Be),
                ze = a("IEf6"),
                je = a.n(ze),
                Ae = a("EjKj"),
                Ge = a.n(Ae),
                Re = a("fWh5"),
                We = a.n(Re),
                Xe = a("Prof"),
                Ue = a.n(Xe),
                Ze = a("Lwgv"),
                Ye = a.n(Ze),
                Ke = a("kkyk"),
                Je = a.n(Ke),
                qe = a("ga/Q"),
                Qe = a.n(qe),
                $e = a("OAXl"),
                et = a.n($e),
                tt = a("xgoX"),
                at = a.n(tt),
                nt = a("cbqG"),
                rt = a.n(nt),
                it = a("wE94"),
                ct = a.n(it),
                ot = a("5Ygf"),
                st = a.n(ot),
                lt = a("bhnT"),
                ut = a.n(lt),
                dt = a("TvsX"),
                pt = a.n(dt),
                mt = a("KT4t"),
                ht = a.n(mt),
                ft = a("Eqe3"),
                vt = a.n(ft),
                gt = a("EHl3"),
                Et = a.n(gt),
                _t = a("wLfr"),
                bt = a.n(_t),
                Ct = a("P5jm"),
                yt = a.n(Ct),
                wt = a("EsPY"),
                kt = a.n(wt),
                Tt = a("S/R7"),
                Nt = a.n(Tt),
                Mt = a("rABa"),
                Lt = a.n(Mt),
                Ht = a("gvz+"),
                Ot = a.n(Ht),
                xt = a("0H9W"),
                Dt = a.n(xt),
                It = a("eHwN"),
                St = a.n(It),
                Vt = a("0cTs"),
                Ft = a.n(Vt),
                Bt = a("g0Iq"),
                Pt = a.n(Bt),
                zt = a("jqsI"),
                jt = a.n(zt),
                At = a("yrpw"),
                Gt = a.n(At),
                Rt = a("0K0+"),
                Wt = a.n(Rt),
                Xt = a("ReaC"),
                Ut = a.n(Xt),
                Zt = a("Zrvr"),
                Yt = a.n(Zt),
                Kt = a("3FOu"),
                Jt = a.n(Kt),
                qt = a("Pn2U"),
                Qt = a.n(qt),
                $t = a("v0Qw"),
                ea = a.n($t),
                ta = a("h9Qz"),
                aa = a.n(ta),
                na = a("CTaR"),
                ra = a.n(na),
                ia = a("2ab/"),
                ca = a.n(ia),
                oa = a("1A3c"),
                sa = a.n(oa),
                la = a("8dg+"),
                ua = a.n(la),
                da = a("Q2Gm"),
                pa = a.n(da),
                ma = a("AgQN"),
                ha = a.n(ma),
                fa = a("omU1"),
                va = a.n(fa),
                ga = a("6280"),
                Ea = a.n(ga),
                _a = a("opwh"),
                ba = a.n(_a),
                Ca = a("1vDs"),
                ya = a.n(Ca),
                wa = a("6ni3"),
                ka = a.n(wa),
                Ta = a("mHLn"),
                Na = a.n(Ta),
                Ma = a("+fHS"),
                La = a.n(Ma),
                Ha = a("y9qr"),
                Oa = a.n(Ha),
                xa = a("lDuz"),
                Da = a.n(xa),
                Ia = a("EwSJ"),
                Sa = a.n(Ia),
                Va = a("eR0J"),
                Fa = a.n(Va),
                Ba = a("RZQd"),
                Pa = a.n(Ba),
                za = a("e1Lj"),
                ja = a.n(za),
                Aa = a("GQwL"),
                Ga = a.n(Aa),
                Ra = a("JRuM"),
                Wa = a.n(Ra),
                Xa = a("yzV2"),
                Ua = a.n(Xa),
                Za = a("x0zr"),
                Ya = a.n(Za),
                Ka = a("D+dT"),
                Ja = a.n(Ka),
                qa = a("NycB"),
                Qa = a.n(qa),
                $a = a("7tgW"),
                en = a.n($a),
                tn = a("fN45"),
                an = a.n(tn),
                nn = a("8QGG"),
                rn = a.n(nn),
                cn = a("UMC/"),
                on = a.n(cn),
                sn = a("frA0"),
                ln = a.n(sn),
                un = a("UXD2"),
                dn = a.n(un),
                pn = a("C43R"),
                mn = a.n(pn),
                hn = a("kPh4"),
                fn = a.n(hn),
                vn = a("Qytd"),
                gn = a.n(vn),
                En = a("Tcjr"),
                _n = a.n(En),
                bn = a("tzTz"),
                Cn = a.n(bn),
                yn = a("h/it"),
                wn = a.n(yn),
                kn = {
                    _brn: L.a,
                    aapl: s.a,
                    altcoin: Na.a,
                    audcad: u.a,
                    audchf: p.a,
                    audjpy: h.a,
                    audnzd: v.a,
                    audusd: E.a,
                    ba: b.a,
                    bchusd: y.a,
                    bdix: La.a,
                    bitcoin: k.a,
                    bmw: N.a,
                    brent: L.a,
                    brzu: Ea.a,
                    btcusd: O.a,
                    btgusd: D.a,
                    cadchf: S.a,
                    cadjpy: F.a,
                    chfjpy: P.a,
                    copper: j.a,
                    crypto: G.a,
                    cryptoindex: W.a,
                    currency: U.a,
                    dashusd: Y.a,
                    dax: J.a,
                    dgaz: ka.a,
                    es: Q.a,
                    etcusd: ee.a,
                    ethbtc: ae.a,
                    ethusd: re.a,
                    euraud: ce.a,
                    eurcad: se.a,
                    eurchf: ue.a,
                    eurgbp: pe.a,
                    eurjpy: he.a,
                    eurnzd: ve.a,
                    eurrub: Ee.a,
                    eurusd: be.a,
                    fb: ye.a,
                    fce: ke.a,
                    fdax: Ne.a,
                    fesx: Le.a,
                    gbpaud: Oe.a,
                    gbpcad: De.a,
                    gbpchf: Se.a,
                    gbpjpy: Fe.a,
                    gbpnzd: Pe.a,
                    gbpusd: je.a,
                    googl: Ge.a,
                    hg: j.a,
                    hsi: We.a,
                    ibm: Ue.a,
                    index: Ye.a,
                    iyr: va.a,
                    ko: Je.a,
                    limits: Qe.a,
                    ltcbtc: et.a,
                    ltcusd: at.a,
                    mcd: rt.a,
                    metal: ct.a,
                    msft: st.a,
                    ng: ut.a,
                    nintendo: pt.a,
                    nintendo_jp: pt.a,
                    nkd: ht.a,
                    nq: vt.a,
                    nzdcad: Et.a,
                    nzdchf: bt.a,
                    nzdjpy: yt.a,
                    nzdusd: kt.a,
                    pl: Nt.a,
                    platinum: Nt.a,
                    qid: ya.a,
                    raw: ct.a,
                    sbux: Lt.a,
                    stock: Ot.a,
                    tf: Dt.a,
                    tsla: St.a,
                    usdcad: Ft.a,
                    usdchf: Pt.a,
                    usdclp: jt.a,
                    usdjpy: Gt.a,
                    usdmxn: Wt.a,
                    usdnok: Ut.a,
                    usdrub: Yt.a,
                    usdsgd: Jt.a,
                    usdtry: Qt.a,
                    uvxy: ba.a,
                    v: ea.a,
                    xagusd: aa.a,
                    xauusd: ra.a,
                    xmrusd: ca.a,
                    xrpusd: sa.a,
                    ym: ua.a,
                    z: pa.a,
                    zecusd: ha.a,
                    amd: Oa.a,
                    amzn: Da.a,
                    baba: Sa.a,
                    bidu: Fa.a,
                    cat: Pa.a,
                    csco: ja.a,
                    cvx: Ga.a,
                    dis: Wa.a,
                    ebay: Ua.a,
                    gs: Ya.a,
                    jnj: Ja.a,
                    jpm: Qa.a,
                    ma: en.a,
                    mmm: an.a,
                    ms: rn.a,
                    nflx: on.a,
                    nke: ln.a,
                    novn: dn.a,
                    nvda: mn.a,
                    orcl: fn.a,
                    pg: gn.a,
                    twtr: _n.a,
                    work: Cn.a,
                    xom: wn.a,
                    audusd_otc: E.a,
                    usdcad_otc: Ft.a,
                    usdchf_otc: Pt.a,
                    nzdusd_otc: kt.a,
                    xauusd_otc: ra.a,
                    eurusd_otc: be.a,
                    usdjpy_otc: Gt.a,
                    usdnok_otc: Ut.a,
                    usdmxn_otc: Wt.a,
                };
            t.a = function (e) {
                var t = e.className,
                    a = e.pairName,
                    n = a ? a.toLocaleLowerCase() : "",
                    i = kn[n];
                return r.a.createElement("span", { className: c()("pair-icon-image", t), "data-test": "pair-name-".concat(n), style: i ? { backgroundImage: "url(".concat(i) } : {} });
            };
        },
        eR0J: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-bidu.4be89e12.svg";
        },
        eRjb: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("cUhM"),
                c = a("rohC"),
                o = a("EaZs"),
                s = { 0: null, 50: r.a.createElement(c.a, { className: "trade-signal-card__icon" }), 100: r.a.createElement(o.a, { className: "trade-signal-card__icon" }) },
                l = function (e) {
                    var t = e.rank,
                        a = void 0 === t ? 0 : t;
                    return a ? s[a] : null;
                };
            a.d(t, "a", function () {
                return u;
            });
            var u = function (e) {
                return r.a.createElement(
                    "div",
                    { className: "trade-signal-card__badges" },
                    r.a.createElement(l, { rank: e.rank }),
                    !e.isMetaTrader &&
                        e.projects
                            .slice()
                            .sort()
                            .reverse()
                            .map(function (e) {
                                return r.a.createElement(i.a, { key: e, type: "bo" === e ? "ft" : "fx", className: "trade-signal-card__icon" });
                            })
                );
            };
        },
        eeON: function (e, t, a) {},
        f1C2: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M8.93 8.97C8.254 8.97 7 7.923 7 7c0-.615-.333-.949-1-1v1.593c0 1.26.442 2.432 2.025 2.475-.024.302-.699.622-2.025.963.16.646.493.969 1 .969 1.089 0 1.253-.679 1.253-.679.039.87.4 1.7 1.02 2.333.298.322.461.751.451 1.194v1.336c0 .8.534 1.48 1.276 1.722A7.63 7.63 0 0 0 12 18c.217 0 .55-.031 1-.094.742-.241 1.276-.921 1.276-1.722v-1.336c-.01-.443.153-.872.45-1.194a3.556 3.556 0 0 0 1.02-2.333S15.912 12 17 12c.507 0 .84-.323 1-.969-1.326-.34-2.001-.661-2.025-.963C17.558 10.025 18 8.854 18 7.593V6c-.667.051-1 .385-1 1 0 .923-1.255 1.97-1.93 1.97H8.93z",
                    })
                );
            };
        },
        f6sH: function (e, t, a) {},
        fN45: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-mmm.d7cbb352.svg";
        },
        fPfO: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0 3c0-.6.4-1 1-1h2.7c1 0 1.7.6 2 1.6L6.2 6H22a2 2 0 012 2.6l-2.5 8a2 2 0 01-1.9 1.4H8.3a2 2 0 01-2-1.6L4.5 7.2 3.7 4H1a1 1 0 01-1-1zm6.7 5l1.6 8h11.3L22 8H6.7z",
                    }),
                    c.a.createElement("path", { d: "M11 21.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM18.5 23a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" })
                );
            };
        },
        fWh5: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-hsi.638a049e.svg";
        },
        finv: function (e, t, a) {
            "use strict";
            var n = a("OvAC"),
                r = a.n(n),
                i = a("SDJZ"),
                c = a.n(i),
                o = a("NToG"),
                s = a.n(o),
                l = a("K4DB"),
                u = a.n(l),
                d = a("+IV6"),
                p = a.n(d),
                m = a("eef+"),
                h = a.n(m),
                f = a("mXGw"),
                v = a.n(f),
                g = a("deTv"),
                E = a("cUhM"),
                _ = Object(g.e)({
                    managerWillCallYou: { id: "vip_callback_manager_will_call_you", defaultMessage: "A manager will call you back at the following number" },
                    today: { id: "vip_callback_day_today", defaultMessage: "Today" },
                    tomorrow: { id: "vip_callback_day_tomorrow", defaultMessage: "Tomorrow" },
                    receivedRequest: { id: "vip_callback_received_request", defaultMessage: "Request accepted." },
                    requestError: { id: "service_unavailable", defaultMessage: "The service is unavailable, please try again later" },
                    cancel: { id: "cancel", defaultMessage: "Cancel" },
                });
            var b = a("8Jek"),
                C = a.n(b),
                y = a("tyvn"),
                w = a("9klq"),
                k = a("gxlX");
            a("9Q30"), a("BniE");
            var T = Object(g.e)({
                today: { id: "vip_callback_day_today", defaultMessage: "Today" },
                tomorrow: { id: "vip_callback_day_tomorrow", defaultMessage: "Tomorrow" },
                day: { id: "vip_callback_day", defaultMessage: "Day of the call" },
                time: { id: "vip_callback_time", defaultMessage: "Time of the call" },
            });
            function N(e) {
                return v.a.createElement(
                    "div",
                    { className: "vip-callback-form__controls" },
                    v.a.createElement("h4", { className: "vip-callback-form__title" }, v.a.createElement(g.c, T.day)),
                    v.a.createElement(
                        "div",
                        { className: "vip-callback-field__control" },
                        ["today", "tomorrow"].map(function (t) {
                            var a = e.todayUnavailable && "today" === t;
                            return "today" === t || e.hoursTomorrowAvailable.length
                                ? v.a.createElement(
                                      "div",
                                      { className: "vip-callback-field__radio", key: t },
                                      v.a.createElement(E.m, {
                                          key: t,
                                          onClick: a
                                              ? null
                                              : function () {
                                                    return e.setDay(t);
                                                },
                                          value: t,
                                          text: v.a.createElement(g.c, T[t]),
                                          isChecked: e.dayPicked === t,
                                          isDisabled: a,
                                      })
                                  )
                                : null;
                        })
                    ),
                    v.a.createElement("h4", { className: "vip-callback-form__title" }, v.a.createElement(g.c, T.time)),
                    v.a.createElement(
                        "div",
                        { className: "vip-callback-field__control" },
                        (function (e) {
                            var t = e.availableTime && e.availableTime.length > 4;
                            return v.a.createElement(
                                "div",
                                { className: "rangepicker" },
                                v.a.createElement(
                                    k.a,
                                    {
                                        className: "rangepicker__option",
                                        scroll: t,
                                        autoHeightMin: t ? 40 : null,
                                        autoHeightMax: t ? 160 : null,
                                        ref: function (t) {
                                            return e.setRef(t);
                                        },
                                    },
                                    v.a.createElement("div", { className: "drop-down-plain-item" }, "".concat((e.hours < 10 ? "0" : "") + e.hours, ":").concat(0 === e.minutes ? "00" : e.minutes)),
                                    v.a.createElement(
                                        "ul",
                                        null,
                                        e.availableTime.map(function (t) {
                                            return v.a.createElement(
                                                "li",
                                                {
                                                    key: "".concat(t.hours, ":").concat(t.minutes),
                                                    onClick: function () {
                                                        e.setHours(t.hours), e.setMinutes(t.minutes);
                                                    },
                                                },
                                                "".concat((t.hours < 10 ? "0" : "") + t.hours, ":").concat(0 === t.minutes ? "00" : t.minutes)
                                            );
                                        })
                                    )
                                )
                            );
                        })(e)
                    )
                );
            }
            var M = a("sKz3"),
                L = Object(g.e)({
                    phone: { id: "vip_callback_phone_number", defaultMessage: "Phone number" },
                    request: { id: "vip_callback_order", defaultMessage: "Request" },
                    callback: { id: "vip_callback_callback", defaultMessage: "Call" },
                    callAvailable: { id: "vip_callback_call_available", defaultMessage: "The number of calls available:" },
                    requestError: { id: "service_unavailable", defaultMessage: "The service is unavailable, please try again later" },
                });
            var H = a("vMea"),
                O =
                    (a("yHRw"),
                    Object(g.e)({
                        serviceUnavailable: { id: "service_unavailable", defaultMessage: "The service is unavailable, please try again later." },
                        serviceWarning: { id: "vip_callback_service_unavailable", defaultMessage: "The service is temporally unavailable." },
                        tryAgain: { id: "try_again", defaultMessage: "Try again" },
                    })),
                x = function (e) {
                    var t = C()("vip-callback-error__sign", { "vip-callback-error__sign_warning": e.warning, "vip-callback-error__sign_error": !e.warning });
                    return v.a.createElement(
                        "div",
                        { className: "vip-callback-error" },
                        v.a.createElement(
                            "svg",
                            { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", className: t },
                            v.a.createElement("path", { d: "M24 10c-1.4 0-2.33.93-2.33 2.33v14h4.66v-14c0-1.4-.93-2.33-2.33-2.33zM24 35.67A2.33 2.33 0 1 0 24 31a2.33 2.33 0 0 0 0 4.67z" }),
                            v.a.createElement("path", {
                                d:
                                    "M24 .67A23.4 23.4 0 0 0 .67 24 23.4 23.4 0 0 0 24 47.33 23.4 23.4 0 0 0 47.33 24 23.4 23.4 0 0 0 24 .67zm0 42A18.72 18.72 0 0 1 5.33 24c0-10.27 8.4-18.67 18.67-18.67 10.27 0 18.67 8.4 18.67 18.67 0 10.27-8.4 18.67-18.67 18.67z",
                            })
                        ),
                        v.a.createElement("p", { className: "vip-callback-error__title" }, e.warning ? v.a.createElement(g.c, O.serviceWarning) : v.a.createElement(g.c, O.serviceUnavailable)),
                        !e.warning && v.a.createElement(H.a, { onClick: e.onClickRetry, isLoading: e.loading, block: !0 }, v.a.createElement(g.c, O.tryAgain))
                    );
                },
                D = a("1XfU");
            a("1T8i");
            function I(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            a.d(t, "a", function () {
                return S;
            });
            var S = (function (e) {
                function t() {
                    return c()(this, t), u()(this, p()(t).apply(this, arguments));
                }
                return (
                    h()(t, e),
                    s()(t, [
                        {
                            key: "componentWillUpdate",
                            value: function () {
                                this.tmpRef && this.tmpRef.toggle(!1);
                            },
                        },
                        {
                            key: "setRef",
                            value: function (e) {
                                this.tmpRef = e;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                if (this.props.error || this.props.warning) return v.a.createElement(x, { loading: this.props.loading, warning: this.props.warning, onClickRetry: this.props.api.getData });
                                if (this.props.loading) return v.a.createElement(D.a, null);
                                if (this.props.success)
                                    return (
                                        (e = this.props),
                                        v.a.createElement(
                                            "div",
                                            { className: "vip-callback" },
                                            v.a.createElement(
                                                "div",
                                                { className: "vip-callback__body vip-callback__body_stack-big" },
                                                v.a.createElement(
                                                    "div",
                                                    { className: "vip-callback__checkmark" },
                                                    v.a.createElement(
                                                        "svg",
                                                        { className: "vip-callback__checkmark-icon", xmlns: "http://www.w3.org/2000/svg", fill: "none", width: "64", height: "64", viewBox: "0 0 64 64" },
                                                        v.a.createElement("path", {
                                                            fill: "#1FBF75",
                                                            fillRule: "evenodd",
                                                            d: "M52.6 19.4c-1-1-2.7-1-3.8 0L26.4 39.6 15.2 29.5c-1-1-2.7-1-3.8 0-1 .9-1 2.4 0 3.3l13.1 11.8a2.7 2.7 0 002 .7c.7 0 1.3-.2 1.8-.7l24.3-21.9c1-.9 1-2.4 0-3.3z",
                                                            clipRule: "evenodd",
                                                        })
                                                    )
                                                ),
                                                v.a.createElement(
                                                    "div",
                                                    { className: "vip-callback__message" },
                                                    v.a.createElement(
                                                        "p",
                                                        null,
                                                        v.a.createElement("strong", null, v.a.createElement(g.c, _.receivedRequest)),
                                                        v.a.createElement("br", null),
                                                        v.a.createElement("strong", null, v.a.createElement(g.c, _.managerWillCallYou)),
                                                        "Â ",
                                                        v.a.createElement("span", null, e.phone)
                                                    ),
                                                    v.a.createElement(
                                                        "p",
                                                        null,
                                                        v.a.createElement(
                                                            "strong",
                                                            null,
                                                            v.a.createElement(g.c, _[e.dayPicked]),
                                                            ",Â ",
                                                            v.a.createElement("span", null, "".concat((e.hours < 10 ? "0" : "") + e.hours, ":").concat(0 === e.minutes ? "00" : e.minutes))
                                                        )
                                                    )
                                                )
                                            ),
                                            v.a.createElement(
                                                "div",
                                                { className: "vip-callback__footer" },
                                                v.a.createElement(
                                                    E.b,
                                                    { type: "cancel", color: "default", fullWidth: !0, className: "vip-callback__btn-cancel", isLoading: e.buttonLoading, onClick: e.api.cancel },
                                                    v.a.createElement(g.c, _.cancel)
                                                ),
                                                e.requestError && v.a.createElement("span", null, v.a.createElement(g.c, _.requestError))
                                            )
                                        )
                                    );
                                var e,
                                    t = this.props.api;
                                return (function (e) {
                                    var t = e.buttonLoading || e.error,
                                        a = y.Fb.EXPERT === e.serviceLevel,
                                        n = e.messages && e.messages.phone ? e.messages.phone : null;
                                    return v.a.createElement(
                                        "form",
                                        { className: "vip-callback", onSubmit: e.submit },
                                        v.a.createElement(
                                            "div",
                                            { className: "vip-callback__body" },
                                            v.a.createElement(M.a, { availableCallbacks: e.availableCallbacks, isButtonShowing: !a, isErrorShowing: a && !e.availableCallbacks, onButtonClick: e.openCard }),
                                            v.a.createElement(
                                                "div",
                                                { className: C()("vip-callback-form__container", { "vip-callback-form__container_disabled": !e.availableCallbacks }) },
                                                v.a.createElement("h4", { className: "vip-callback-form__title" }, v.a.createElement(g.c, L.phone)),
                                                v.a.createElement(
                                                    "div",
                                                    { className: "vip-callback-field" },
                                                    v.a.createElement(
                                                        "div",
                                                        { className: C()("vip-callback-field__control", { "vip-callback-field__control_error": n }) },
                                                        v.a.createElement(w.a, { defaultCountry: e.geo, preferredCountries: y.s, excludeCountries: y.r, value: e.phone || "", onChange: e.api.setPhone }),
                                                        v.a.createElement("div", { className: "vip-callback__msg-error" }, n && v.a.createElement("span", { className: "vip-callback__msg-error-text" }, n.msg))
                                                    )
                                                ),
                                                N(e)
                                            )
                                        ),
                                        v.a.createElement(
                                            "footer",
                                            { className: "vip-callback__footer" },
                                            v.a.createElement(
                                                E.b,
                                                { type: "submit", fullWidth: !0, color: "accent", className: "vip-callback__btn", disabled: !e.availableCallbacks || t || e.buttonLoading, onClick: e.api.onVipSupportClick },
                                                v.a.createElement("span", { className: "vip-callback__btn-text" }, v.a.createElement(g.c, L.request), " ", v.a.createElement(g.c, L.callback))
                                            ),
                                            e.requestError && v.a.createElement("span", { className: "vip-callback__btn-error" }, v.a.createElement(g.c, L.requestError))
                                        )
                                    );
                                })(
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var a = null != arguments[t] ? arguments[t] : {};
                                            t % 2
                                                ? I(Object(a), !0).forEach(function (t) {
                                                      r()(e, t, a[t]);
                                                  })
                                                : Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                                                : I(Object(a)).forEach(function (t) {
                                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                                                  });
                                        }
                                        return e;
                                    })({ setMinutes: t.setMinutes, setHours: t.setHours, setDay: t.setDay, setPhone: t.setPhone, submit: t.submit, openCard: t.openCard, onClickRetry: t.openCard, setRef: this.setRef.bind(this) }, this.props)
                                );
                            },
                        },
                    ]),
                    t
                );
            })(v.a.Component);
            S.displayName = "VipCallback";
        },
        frA0: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-nke.d3490074.svg";
        },
        fry3: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M16 9.9c0 1.382-.782 2.587-2 3.14v1.489a.5.5 0 1 1-1 0V12.7a.5.5 0 0 1 .342-.474C14.344 11.892 15 10.978 15 9.9V8.2C15 6.472 13.419 5 11.5 5 9.49 5 8 6.463 8 8.4V10c0 1.045.625 1.894 1.692 2.338A.5.5 0 0 1 10 12.8v1.729a.5.5 0 0 1-.5.5H8.3C6.547 15.029 5 16.7 5 18.5c0 .324.176.5.5.5h10.9a.5.5 0 1 1 0 1H5.5c-.876 0-1.5-.624-1.5-1.5 0-2.335 1.977-4.471 4.3-4.471H9v-.91C7.758 12.49 7 11.36 7 10V8.4C7 5.907 8.941 4 11.5 4 13.956 4 16 5.903 16 8.2v1.7zm2 6.1h-1.5a.5.5 0 1 1 0-1H18v-1.5a.5.5 0 1 1 1 0V15h1.5a.5.5 0 1 1 0 1H19v1.5a.5.5 0 1 1-1 0V16z",
                    })
                );
            };
        },
        g0Iq: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-usdchf.404ab0ef.svg";
        },
        g7KI: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ba.2f17809c.svg";
        },
        gBtk: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return b;
            });
            var n,
                r,
                i,
                c = a("SDJZ"),
                o = a.n(c),
                s = a("NToG"),
                l = a.n(s),
                u = a("K4DB"),
                d = a.n(u),
                p = a("+IV6"),
                m = a.n(p),
                h = a("eef+"),
                f = a.n(h),
                v = a("mXGw"),
                g = a.n(v),
                E = a("mBK0"),
                _ = a("Kl+u"),
                b =
                    (a("lpYk"),
                    Object(E.observer)(
                        ((i = r = (function (e) {
                            function t() {
                                return o()(this, t), d()(this, m()(t).apply(this, arguments));
                            }
                            return (
                                f()(t, e),
                                l()(t, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            this.miniChart || (this.miniChart = new _.a({ id: "mini-chart-".concat(this.props.id), height: this.props.height, width: this.props.width, isTrend: this.props.isTrend })),
                                                this.miniChart.init(this.props.data, this.props.color, this.props.height, this.props.width);
                                        },
                                    },
                                    {
                                        key: "componentWillReceiveProps",
                                        value: function (e) {
                                            this.miniChart.updateData(e.data, e.color, e.height, e.width);
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            return g.a.createElement(
                                                "div",
                                                { className: "mini-chart ".concat(this.props.className) },
                                                g.a.createElement("svg", {
                                                    id: "mini-chart-".concat(this.props.id),
                                                    height: this.props.height,
                                                    width: this.props.width,
                                                    viewBox: "0 0 ".concat(this.props.width, " ").concat(this.props.height),
                                                })
                                            );
                                        },
                                    },
                                ]),
                                t
                            );
                        })(v.Component)),
                        (r.defaultProps = { className: "", color: "", height: 30, width: 90, isTrend: !1 }),
                        (n = i))
                    ) || n);
        },
        gYzd: function (e, t, a) {
            "use strict";
            var n,
                r,
                i,
                c = a("SDJZ"),
                o = a.n(c),
                s = a("NToG"),
                l = a.n(s),
                u = a("K4DB"),
                d = a.n(u),
                p = a("+IV6"),
                m = a.n(p),
                h = a("eef+"),
                f = a.n(h),
                v = a("mXGw"),
                g = a.n(v),
                E = a("cneo"),
                _ = a("mBK0"),
                b = a("BK8K"),
                C = a("iD3J"),
                y = a("Kl+u"),
                w =
                    Object(_.observer)(
                        ((i = r = (function (e) {
                            function t() {
                                return o()(this, t), d()(this, m()(t).apply(this, arguments));
                            }
                            return (
                                f()(t, e),
                                l()(t, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            var e = this;
                                            this.chart = new y.f("deal-details-chart-".concat(this.props.id), y.e.dealDetails, function () {
                                                "loading" !== e.props.status && e.props.data && (e.initChart(e.props.data, e.props.gaps, e.props.step, e.props.deal), e.chart.api.setTheme(e.props.theme));
                                            });
                                        },
                                    },
                                    {
                                        key: "componentWillReceiveProps",
                                        value: function (e) {
                                            this.chart.api &&
                                                (e.uuid !== this.props.uuid ? (this.initChart(e.data, e.gaps, e.step, e.deal), this.chart.api.setTheme(this.props.theme)) : e.width !== this.props.width && this.chart.api.onResize());
                                        },
                                    },
                                    {
                                        key: "componentWillUnmount",
                                        value: function () {
                                            this.chart && this.chart.api && this.chart.api.destroy();
                                        },
                                    },
                                    {
                                        key: "getDeal",
                                        value: function (e) {
                                            return {
                                                id: e.id,
                                                selected: !0,
                                                dir: e.dir,
                                                currency: Object(b.g)(e.currency),
                                                cursOpen: e.category === C.a.DIGITAL ? e.cursStrike : e.cursOpen,
                                                amount: e.sum,
                                                timeOpen: 1e3 * e.timeOpen,
                                                timeClose: 1e3 * (e.timeCloseDefault ? e.timeCloseDefault : e.timeClose),
                                                timeCancel: 1e3 * e.timeClose,
                                            };
                                        },
                                    },
                                    {
                                        key: "initChart",
                                        value: function (e, t, a, n) {
                                            if (n && e && e.length) {
                                                var r = { id: 0, step: a };
                                                this.chart.api.init({ typeChart: this.props.format, precision: n.pair.precision, pairName: n.pair.title, timeFrames: [r] }).setPoints(Object(E.toJS)(e), Object(E.toJS)(t), r.id),
                                                    n && this.chart.api.setDeals(this.getDeal(n));
                                            }
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            return g.a.createElement("article", { id: "deal-details-chart-".concat(this.props.id) });
                                        },
                                    },
                                ]),
                                t
                            );
                        })(v.Component)),
                        (r.defaultProps = { deal: {}, format: "line", step: 1, data: [], gaps: [], theme: "light", status: null }),
                        (n = i))
                    ) || n;
            t.a = w;
        },
        "ga/Q": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-limits.c0a9828a.svg";
        },
        "gf+L": function (e, t, a) {},
        gtxT: function (e, t, a) {},
        "gvz+": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-stock.55a4649d.svg";
        },
        gxlX: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("SDJZ"),
                c = a.n(i),
                o = a("NToG"),
                s = a.n(o),
                l = a("K4DB"),
                u = a.n(l),
                d = a("+IV6"),
                p = a.n(d),
                m = a("eef+"),
                h = a.n(m),
                f = a("mXGw"),
                v = a.n(f),
                g = a("CkPy"),
                E = a.n(g),
                _ = a("8Jek"),
                b = a.n(_),
                C = a("S6YD"),
                y = function (e) {
                    return v.a.createElement(
                        "svg",
                        r()({ viewBox: "0 0 ".concat(C.a.WIDTH, " ").concat(C.a.HEIGHT), width: C.a.WIDTH, height: C.a.HEIGHT, fill: C.a.FILL }, e),
                        v.a.createElement("path", { d: "M7.354 9.646a.5.5 0 1 0-.708.708l5 5a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0-.708-.708L12 14.293 7.354 9.646z" })
                    );
                },
                w = function (e) {
                    return v.a.createElement(
                        "svg",
                        r()({ viewBox: "0 0 ".concat(C.a.WIDTH, " ").concat(C.a.HEIGHT), width: C.a.WIDTH, height: C.a.HEIGHT, fill: C.a.FILL }, e),
                        v.a.createElement("path", { d: "M16.646 14.354a.5.5 0 0 0 .708-.708l-5-5a.5.5 0 0 0-.708 0l-5 5a.5.5 0 0 0 .708.708L12 9.707l4.646 4.647z" })
                    );
                };
            a.d(t, "a", function () {
                return k;
            });
            var k = (function (e) {
                function t() {
                    var e, a;
                    c()(this, t);
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return (
                        ((a = u()(this, (e = p()(t)).call.apply(e, [this].concat(r)))).state = { searchValue: "", hidden: !0 }),
                        (a.hideTM = null),
                        (a.toggle = function (e) {
                            var t = "boolean" == typeof e;
                            (t || "input" !== e.target.tagName.toLowerCase()) && a.setState({ hidden: t ? !e : !a.state.hidden }), a.props.onToggle();
                        }),
                        (a.onMouseLeave = function () {
                            a.hideTM = setTimeout(function () {
                                a.setState({ hidden: !0 });
                            }, 500);
                        }),
                        (a.onMouseEnter = function () {
                            clearTimeout(a.hideTM);
                        }),
                        (a.onChangeSearch = function (e) {
                            return a.setState({ searchValue: e.target.value }), a.props.onChangeSearch(e);
                        }),
                        (a.clearSearch = function () {
                            return a.setState({ searchValue: "" }), a.props.onChangeSearch(null);
                        }),
                        (a.hide = function () {
                            a.setState({ hidden: !0 });
                        }),
                        a
                    );
                }
                return (
                    h()(t, e),
                    s()(t, [
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                clearTimeout(this.hideTM);
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.ScrollBar && this.ScrollBar.scrollTop(0);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this;
                                if (this.props.children.length < 2) return !0;
                                var t = b()("drop-down-plain", this.props.className || "", this.state.hidden ? "collapsed" : "", this.props.scroll ? "-with-scroll" : "", this.props.disabled ? "drop-down-plain_disabled" : "");
                                return v.a.createElement(
                                    "div",
                                    {
                                        className: t,
                                        onMouseLeave: this.onMouseLeave,
                                        onMouseEnter: this.onMouseEnter,
                                        "data-tracking": this.props["data-tracking"],
                                        "data-product": this.props["data-product"],
                                        "data-action": this.props["data-action"],
                                        "data-label": this.props["data-label"],
                                    },
                                    v.a.createElement("div", { className: "input-container drop-down-plain-value", onClick: this.toggle }, this.state.hidden ? this.props.iconCollapsed : this.props.iconExpanded, this.props.children[0]),
                                    v.a.createElement(
                                        "div",
                                        r()({ className: b()("drop-down-plain-content", this.props.contentClassName || "") }, this.props.contentProps),
                                        this.props.onChangeSearch
                                            ? v.a.createElement(
                                                  "label",
                                                  { className: "drop-down-plain__search".concat(this.state.searchValue ? " is-not-empty" : "") },
                                                  v.a.createElement("input", { type: "text", className: "drop-down-plain__search-input", placeholder: this.props.placeholder, value: this.state.searchValue, onChange: this.onChangeSearch }),
                                                  v.a.createElement(
                                                      "span",
                                                      { className: "drop-down-plain__search-controls" },
                                                      v.a.createElement("span", { className: "drop-down-plain__search-control drop-down-plain__search-control_clear", onClick: this.clearSearch }),
                                                      v.a.createElement("span", { className: "drop-down-plain__search-control drop-down-plain__search-control_submit" })
                                                  )
                                              )
                                            : null,
                                        this.props.scroll
                                            ? v.a.createElement(
                                                  E.a,
                                                  {
                                                      autoHeight: !!this.props.autoHeight,
                                                      autoHeightMin: this.props.autoHeightMin || this.props.autoHeight,
                                                      autoHeightMax: this.props.autoHeightMax || this.props.autoHeight,
                                                      renderThumbVertical: function (e) {
                                                          return v.a.createElement("div", r()({}, e, { className: "react-custom-scrollbars-thumb-vert" }));
                                                      },
                                                      renderTrackVertical: function (e) {
                                                          return v.a.createElement("div", r()({}, e, { className: "react-custom-scrollbars-track-vert" }));
                                                      },
                                                      renderView: function (e) {
                                                          return v.a.createElement("div", r()({}, e, { className: "react-custom-scrollbars" }));
                                                      },
                                                      ref: function (t) {
                                                          e.ScrollBar = t;
                                                      },
                                                  },
                                                  v.a.createElement("div", { onClick: this.hide }, this.props.children[1])
                                              )
                                            : v.a.createElement("div", { onClick: this.hide }, this.props.children[1])
                                    )
                                );
                            },
                        },
                    ]),
                    t
                );
            })(v.a.Component);
            k.defaultProps = {
                className: "",
                autoHeight: 200,
                autoHeightMin: 0,
                autoHeightMax: 0,
                scroll: !1,
                iconCollapsed: v.a.createElement("span", { className: "drop-down-plain-icon" }, v.a.createElement(y, { className: "svg" })),
                iconExpanded: v.a.createElement("div", { className: "drop-down-plain-icon" }, v.a.createElement(w, { className: "svg" })),
                children: [],
                hasSearch: !1,
                placeholder: "Search",
                disabled: !1,
                onToggle: function () {},
            };
        },
        gzZR: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = function (e) {
                    return r.a.createElement("span", { className: "visuallyhidden ".concat(e.className) }, e.children);
                };
            (i.defaultProps = { className: " " }), (t.a = i);
        },
        "h/it": function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-xom.a30c4193.svg";
        },
        h2JL: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-copper.f0e214bf.svg";
        },
        h9Qz: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-xagusd.c67eae76.svg";
        },
        hTeP: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ethbtc.2933ab22.svg";
        },
        "hX+2": function (e, t, a) {},
        hkAf: function (e, t, a) {},
        how2: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-dax.e084844d.svg";
        },
        "i+G9": function (e, t, a) {},
        i3nY: function (e, t, a) {},
        i8up: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("BK8K"),
                c = a("0255"),
                o = a("tyvn"),
                s = {
                    ru: function (e, t, a) {
                        return r.a.createElement(n.Fragment, null, e, a, t);
                    },
                    en: function (e, t) {
                        return r.a.createElement(n.Fragment, null, t, e);
                    },
                    th: function (e, t) {
                        return r.a.createElement(n.Fragment, null, t, e);
                    },
                    id: function (e, t) {
                        return r.a.createElement(n.Fragment, null, t, e);
                    },
                    pt: function (e, t) {
                        return r.a.createElement(n.Fragment, null, t, e);
                    },
                    es: function (e, t) {
                        return r.a.createElement(n.Fragment, null, t, e);
                    },
                    tr: function (e, t, a) {
                        return r.a.createElement(n.Fragment, null, e, a, t);
                    },
                    vi: function (e, t, a) {
                        return r.a.createElement(n.Fragment, null, e, a, t);
                    },
                    zh: function (e, t) {
                        return r.a.createElement(n.Fragment, null, t, e);
                    },
                    hi: function (e, t, a) {
                        return r.a.createElement(n.Fragment, null, t, a, e);
                    },
                    ar: function (e, t, a) {
                        return r.a.createElement(n.Fragment, null, e, a, t);
                    },
                    ms: function (e, t) {
                        return r.a.createElement(n.Fragment, null, t, e);
                    },
                },
                l = function (e) {
                    return s[Object.prototype.hasOwnProperty.call(s, e.lang) ? e.lang : o.Ab.EN](
                        Object(i.n)(e.amount, e.precision, e.lang),
                        r.a.createElement(c.a, { country: e.country, currency: e.currency, className: e.currencyClassName }),
                        e.separator
                    );
                };
            (l.defaultProps = { precision: 2, lang: "en", separator: " " }), (t.a = l);
        },
        iSRb: function (e, t, a) {
            "use strict";
            var n = a("OvAC"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i),
                o = a("mXGw"),
                s = a.n(o),
                l = a("deTv"),
                u = (a("4CK3"), "recharge-tooltip-restricted");
            t.a = function (e) {
                var t = e.isVisible;
                return s.a.createElement(
                    "div",
                    { className: c()(u, r()({}, "".concat(u, "_visible"), t)) },
                    s.a.createElement(
                        "div",
                        { className: "".concat(u, "__container") },
                        s.a.createElement(
                            "div",
                            { className: "".concat(u, "__plate") },
                            s.a.createElement(
                                "p",
                                { className: "".concat(u, "__text") },
                                s.a.createElement(l.c, { id: "trade_operation_not_allowed_in_location", defaultMessage: "Trading on the platform and accepting deposits from your location are closed" })
                            )
                        )
                    )
                );
            };
        },
        iobP: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { d: "M14.354 7.354a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .708-.708L9.707 12l4.647-4.646z" })
                );
            };
        },
        j0gb: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return c;
            });
            var n = a("mXGw"),
                r = a.n(n),
                i = a("deTv");
            function c(e) {
                var t = e.status,
                    a = e.refunded,
                    n = e.closeReasons;
                if (a) return r.a.createElement(i.c, { id: "refunded_deal_desc", defaultMessage: "upon request" });
                switch (t) {
                    case n.MANUAL:
                        return r.a.createElement(i.c, { id: "fx_deal_close_reason_user", defaultMessage: "by the trader" });
                    case n.SL_PRICE:
                    case n.SL_AMOUNT:
                        return r.a.createElement(i.c, { id: "fx_deal_close_reason_sl", defaultMessage: "by Stop Loss" });
                    case n.TP_PRICE:
                    case n.TP_AMOUNT:
                        return r.a.createElement(i.c, { id: "fx_deal_close_reason_tp", defaultMessage: "by Take Profit" });
                    case n.STOP_OUT:
                        return r.a.createElement(i.c, { id: "fx_deal_close_reason_so", defaultMessage: "by Stop Out" });
                    case n.AUTO:
                        return r.a.createElement(i.c, { id: "fx_deal_close_reason_auto", defaultMessage: "by time limit" });
                    case n.MARGIN_CALL:
                        return r.a.createElement(i.c, { id: "fx_deal_close_reason_margin_call", defaultMessage: "by the broker" });
                    default:
                        return r.a.createElement(i.c, { id: "deal_close_error", defaultMessage: "due to an error" });
                }
            }
        },
        joPw: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return r;
            });
            var n = a("deTv"),
                r = Object(n.e)({
                    days_num: { id: "days_num", defaultMessage: "day,days,days" },
                    hours_num: { id: "hours_num", defaultMessage: "hour,hours,hours" },
                    min: { id: "min", defaultMessage: "min" },
                    minutes_num: { id: "minutes_num", defaultMessage: "minute,minutes,minutes" },
                    months_num: { id: "months_num", defaultMessage: "month,months,months" },
                    sec: { id: "sec", defaultMessage: "sec." },
                    seconds_num: { id: "seconds_num", defaultMessage: "second,seconds,seconds" },
                });
        },
        jqsI: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-usdclp.78b3e8a0.svg";
        },
        "k+fb": function (e, t, a) {
            "use strict";
            var n,
                r = a("SDJZ"),
                i = a.n(r),
                c = a("NToG"),
                o = a.n(c),
                s = a("K4DB"),
                l = a.n(s),
                u = a("+IV6"),
                d = a.n(u),
                p = a("eef+"),
                m = a.n(p),
                h = a("mXGw"),
                f = a.n(h),
                v = a("mBK0"),
                g = a("deTv"),
                E = a("f6l3"),
                _ = a("NhUL"),
                b =
                    Object(v.observer)(
                        (n = (function (e) {
                            function t() {
                                return i()(this, t), l()(this, d()(t).apply(this, arguments));
                            }
                            return (
                                m()(t, e),
                                o()(t, [
                                    {
                                        key: "componentDidCatch",
                                        value: function (e, t) {
                                            this.props.selectMenuItem();
                                        },
                                    },
                                    {
                                        key: "renderMenu",
                                        value: function () {
                                            var e = this.props,
                                                t = e.menuItems,
                                                a = e.goTo,
                                                n = e.isItPlatformPage,
                                                r = e.selectMenuItem,
                                                i = e.categories,
                                                c = e.lang,
                                                o = e.menuItemComponent,
                                                s = function (e) {
                                                    a(e), r(e);
                                                };
                                            return f.a.createElement(
                                                "div",
                                                { dir: Object(E.G)(c) ? "rtl" : "ltr" },
                                                i.map(function (e) {
                                                    return f.a.createElement(
                                                        h.Fragment,
                                                        { key: e.id },
                                                        f.a.createElement(_.c, null, f.a.createElement(g.c, e)),
                                                        f.a.createElement(
                                                            _.a,
                                                            null,
                                                            t[e.id].map(function (e) {
                                                                return f.a.createElement(o, { key: e.id, id: e.id, onClick: s, isItPlatformPage: n, dir: Object(E.G)(c) ? "rtl" : "ltr" });
                                                            })
                                                        )
                                                    );
                                                }),
                                                Array.isArray(t.untitled) &&
                                                    f.a.createElement(
                                                        h.Fragment,
                                                        null,
                                                        f.a.createElement(_.c, null),
                                                        f.a.createElement(
                                                            _.a,
                                                            null,
                                                            t.untitled.map(function (e) {
                                                                return f.a.createElement(o, { key: e.id, id: e.id, onClick: s, isItPlatformPage: n, dir: Object(E.G)(c) ? "rtl" : "ltr" });
                                                            })
                                                        )
                                                    )
                                            );
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            return f.a.createElement(
                                                "div",
                                                { className: "sidebar-manager" },
                                                f.a.createElement("div", { className: "sidebar-manager__content" }, f.a.createElement("div", { className: "sidebar-manager__container" }, this.renderMenu()))
                                            );
                                        },
                                    },
                                ]),
                                t
                            );
                        })(f.a.Component))
                    ) || n;
            t.a = Object(v.observer)(b);
        },
        kPUf: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-bmw.0f2ed85a.svg";
        },
        kPh4: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-orcl.9f4bfd4c.svg";
        },
        kaqq: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { fill: "url(#paint0_linear_starter)", d: "M5 10.1L12 8l7 2.1V15l-7-2.1L5 15v-4.9z" }),
                    c.a.createElement("path", {
                        fill: "url(#paint1_linear_starter)",
                        fillRule: "evenodd",
                        d: "M12 12.9l7 2.1v-4.9L12 8l-7 2.1V15l7-2.1zm-6.3 1.1592l6.3-1.89 6.3 1.89v-3.4384l-6.3-1.89-6.3 1.89v3.4384z",
                        clipRule: "evenodd",
                    }),
                    c.a.createElement(
                        "defs",
                        null,
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint0_linear_starter", x1: "12", x2: "4.3", y1: "3.45", y2: "18.15", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#0094FF" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#0076CC" })
                        ),
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint1_linear_starter", x1: "2.6667", x2: "7.3068", y1: "14.3", y2: "7.6136", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#fff" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#0094FF", stopOpacity: "0" })
                        )
                    )
                );
            };
        },
        kgRQ: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return n;
            });
            var n = {
                PROMO_CODE: "promoCode",
                CONFIRM_RECHARGE: "confirmRecharge",
                CONFIRM_SUM_CHANGE: "confirmSumChange",
                REMOVE_CARD: "removeCard",
                PROCESSED_RECHARGE: "processedRecharge",
                ERROR_RECHARGE: "rechargeError",
                SUCCESS_RECHARGE: "rechargeSuccess",
                PSP_UNSTABLE: "pspUnstable",
            };
        },
        kkyk: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ko.78476ebb.svg";
        },
        lDh9: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { d: "M1 6C1 5.44772 1.44772 5 2 5H23C23.5523 5 24 5.44772 24 6C24 6.55228 23.5523 7 23 7H2C1.44772 7 1 6.55228 1 6Z" }),
                    c.a.createElement("path", { d: "M1 12C1 11.4477 1.44772 11 2 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H2C1.44772 13 1 12.5523 1 12Z" }),
                    c.a.createElement("path", { d: "M1 18C1 17.4477 1.44772 17 2 17H18C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19H2C1.44772 19 1 18.5523 1 18Z" })
                );
            };
        },
        lDuz: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-amzn.e835567f.svg";
        },
        lbqx: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M9.456 13.63l4.583-4.952a.75.75 0 0 1 1.116.017l2.384 2.74a.75.75 0 1 1-1.132.984l-1.835-2.109-4.588 4.958a.75.75 0 0 1-1.12-.022L6.44 12.414a.75.75 0 0 1 1.14-.975l1.876 2.191zM6.5 6h11a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 7v-.5a.5.5 0 0 1 .5-.5zm0 10.5h11a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V17a.5.5 0 0 1 .5-.5z",
                    })
                );
            };
        },
        lpYk: function (e, t, a) {},
        lpa0: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        className: "inheriting",
                        d:
                            "M14.9578 20.8847L10 21L10.1153 16.0422L16.1545 10.0029C17.4918 8.6657 19.6598 8.66569 20.9971 10.0029C22.3343 11.3401 22.3343 13.5082 20.9971 14.8455L14.9578 20.8847ZM12.0532 16.8714L17.5381 11.3865C18.1112 10.8134 19.0404 10.8134 19.6135 11.3865C20.1866 11.9596 20.1866 12.8888 19.6135 13.4619L14.1286 18.9468L12.0038 18.9962L12.0532 16.8714Z",
                    }),
                    c.a.createElement("path", { className: "inheriting", d: "M2 10C2 9.44772 2.44772 9 3 9H11C11.5523 9 12 9.44772 12 10C12 10.5523 11.5523 11 11 11H3C2.44772 11 2 10.5523 2 10Z" }),
                    c.a.createElement("path", { className: "inheriting", d: "M2 15C2 14.4477 2.44772 14 3 14H6C6.55228 14 7 14.4477 7 15C7 15.5523 6.55228 16 6 16H3C2.44772 16 2 15.5523 2 15Z" }),
                    c.a.createElement("path", { className: "inheriting", d: "M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H3C2.44771 6 2 5.55228 2 5Z" })
                );
            };
        },
        mCwc: function (e, t, a) {},
        mHLn: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-altcoin.5550508a.svg";
        },
        mMrK: function (e, t, a) {},
        mU8D: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                            "M8.73736 5.78891L14 7.67023V4.11634L8 1.97142L2 4.11634V7.67023L7.26262 5.78891C7.26263 5.78891 7.26262 5.78892 7.26262 5.78891C7.73805 5.61896 8.26197 5.61897 8.73736 5.78891ZM7.96489 7.57411L1.35112 9.93844C0.697372 10.1721 0 9.71144 0 9.04584V3.4557C0 3.05833 0.258573 2.70263 0.648877 2.5631L7.64888 0.0606972C7.87526 -0.0202324 8.12474 -0.0202324 8.35112 0.0606973L15.3511 2.5631C15.7414 2.70263 16 3.05833 16 3.4557V9.04584C16 9.71144 15.3026 10.1721 14.6489 9.93844L8.03511 7.57411C8.01247 7.56601 7.98753 7.56601 7.96489 7.57411Z",
                    }),
                    c.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                            "M8.73736 15.7889L14 17.6702V14.1163L8 11.9714L2 14.1163V17.6702L7.26262 15.7889C7.26263 15.7889 7.26262 15.7889 7.26262 15.7889C7.73805 15.619 8.26197 15.619 8.73736 15.7889ZM7.96489 17.5741L1.35112 19.9384C0.697372 20.1721 0 19.7114 0 19.0458V13.4557C0 13.0583 0.258573 12.7026 0.648877 12.5631L7.64888 10.0607C7.87526 9.97977 8.12474 9.97977 8.35112 10.0607L15.3511 12.5631C15.7414 12.7026 16 13.0583 16 13.4557V19.0458C16 19.7114 15.3026 20.1721 14.6489 19.9384L8.03511 17.5741C8.01247 17.566 7.98753 17.566 7.96489 17.5741Z",
                    })
                );
            };
        },
        mjkP: function (e, t, a) {},
        mkSZ: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M12.844 9.368l3.08 5.132h2.116a.5.5 0 010 1h-1.517l1.946 3.243a.5.5 0 11-.858.514L15.357 15.5H8.724L6.43 19.327a.5.5 0 01-.858-.514L7.558 15.5H6.04a.5.5 0 010-1h2.118l3.078-5.132a2.501 2.501 0 111.608 0zm1.913 5.132L12.04 9.972 9.324 14.5h5.433zm-2.717-6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
                    })
                );
            };
        },
        my4k: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M11.293 13H2.5a.5.5 0 1 1 0-1h8.793l-1.647-1.646a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L11.293 13zM8 17.5a.5.5 0 1 1 1 0v1.9c0 .324.276.6.6.6h9.8a.61.61 0 0 0 .6-.6V5.6a.61.61 0 0 0-.6-.6H9.6a.61.61 0 0 0-.6.6v1.9a.5.5 0 0 1-1 0V5.6C8 4.724 8.724 4 9.6 4h9.8c.876 0 1.6.724 1.6 1.6v13.8c0 .876-.724 1.6-1.6 1.6H9.6A1.61 1.61 0 0 1 8 19.4v-1.9z",
                    })
                );
            };
        },
        n0Y6: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n);
            t.a = function (e) {
                var t = e.className,
                    a = void 0 === t ? "" : t;
                return r.a.createElement("div", { className: "platform-spinner ".concat(a) }, r.a.createElement("div", { className: "platform-spinner__spin" }));
            };
        },
        nGAi: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { d: "M6 17.278V13h5v5l-5-.722zM6 12V7.713L11 7v5H6zm6 6.046V13h7v6l-7-.954zm0-11.101L19 6v6h-7V6.945z", fillRule: "nonzero" })
                );
            };
        },
        nihW: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-audcad.8635caa5.svg";
        },
        nnMg: function (e, t, a) {},
        o7Vx: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("deTv"),
                c = function (e) {
                    return r.a.createElement(n.Fragment, null, r.a.createElement("span", null, e.minutes), r.a.createElement("span", null, "Â "), r.a.createElement(i.c, { id: "min", defaultMessage: "min" }));
                },
                o = function (e) {
                    return r.a.createElement(
                        n.Fragment,
                        null,
                        r.a.createElement("span", null, e.hours),
                        r.a.createElement("span", null, "Â "),
                        r.a.createElement(i.c, { id: "h", defaultMessage: "h" }),
                        r.a.createElement("span", null, "Â ")
                    );
                };
            t.a = function (e) {
                var t = e.duration,
                    a = Math.floor(t / 3600),
                    s = Math.floor((t - 3600 * a) / 60);
                return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement("span", { className: "trade-signal-card__time-duration-title" }, r.a.createElement(i.c, { id: "transaction_duration", defaultMessage: "Trade duration" }), r.a.createElement("span", null, ":Â ")),
                    r.a.createElement(
                        "div",
                        { className: "trade-signal-card__time-duration" },
                        a > 0 ? r.a.createElement(n.Fragment, null, r.a.createElement(o, { hours: a }), s > 0 && r.a.createElement(c, { minutes: s })) : r.a.createElement(c, { minutes: s })
                    )
                );
            };
        },
        oNqk: function (e, t, a) {},
        omU1: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-iyr.f7089705.svg";
        },
        oovk: function (e, t, a) {},
        opwh: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-uvxy.0236d3fb.svg";
        },
        p6Tc: function (e, t, a) {},
        pApc: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M7.225 11.846a.75.75 0 1 1-.938-1.17l3.244-2.601a.75.75 0 0 1 .602-.153l3.664.66L16.8 6.174a.75.75 0 0 1 .938 1.17l-3.268 2.62a.75.75 0 0 1-.602.153l-3.664-.66-2.978 2.388zm-.065 5.997a.75.75 0 0 1-.908-1.194l3.283-2.496a.75.75 0 0 1 .549-.147l3.769.48 3.015-1.656a.75.75 0 0 1 .722 1.315l-3.23 1.773a.75.75 0 0 1-.455.086l-3.706-.471-3.04 2.31z",
                    })
                );
            };
        },
        pqob: function (e, t, a) {
            "use strict";
            a.d(t, "b", function () {
                return i;
            }),
                a.d(t, "a", function () {
                    return c;
                });
            var n = a("mXGw"),
                r = a.n(n),
                i = function (e) {
                    return r.a.createElement(n.Fragment, null, e.children);
                };
            i.displayName = "Variant";
            var c = function (e) {
                return r.a.createElement(n.Fragment, null, e.children);
            };
            c.displayName = "DefaultVariant";
            t.c = function (e) {
                var t, a, i;
                return r.a.createElement(
                    n.Fragment,
                    null,
                    ((t = e.testValue),
                    (a = e.children),
                    (i = r.a.Children.toArray(a)),
                    void 0 === t || null === t
                        ? i.find(function (e) {
                              return "DefaultVariant" === e.type.displayName;
                          }) || null
                        : i.find(function (e) {
                              return e.props.value === t;
                          }) || null)
                );
            };
        },
        q08y: function (e, t, a) {
            "use strict";
            var n,
                r,
                i,
                c = a("nxTg"),
                o = a.n(c),
                s = a("SDJZ"),
                l = a.n(s),
                u = a("NToG"),
                d = a.n(u),
                p = a("K4DB"),
                m = a.n(p),
                h = a("+IV6"),
                f = a.n(h),
                v = a("eef+"),
                g = a.n(v),
                E = a("mXGw"),
                _ = a.n(E),
                b = a("mBK0"),
                C = a("Kl+u"),
                y =
                    (a("dlJB"),
                    Object(b.observer)(
                        ((i = r = (function (e) {
                            function t() {
                                var e, a;
                                l()(this, t);
                                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                return (
                                    ((a = m()(this, (e = f()(t)).call.apply(e, [this].concat(r)))).onClick = function () {
                                        a.props.onClick();
                                    }),
                                    a
                                );
                            }
                            return (
                                g()(t, e),
                                d()(t, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            this.miniChart ||
                                                ((this.miniChart = new C.c({ id: "mini-chart-".concat(this.props.id), height: this.props.height, width: this.props.width, theme: this.props.theme })),
                                                this.miniChart.initHistoryChart(this.props.data, this.props.color, this.props.height, this.props.width, this.props.deal, this.props.gaps));
                                        },
                                    },
                                    {
                                        key: "componentDidUpdate",
                                        value: function (e) {
                                            this.props.theme !== e.theme && this.miniChart.updateTheme(this.props.theme),
                                                (this.props.data !== e.data || this.props.gaps !== e.gaps || this.props.width > e.width) &&
                                                    this.miniChart.updateHistoryData(this.props.data, this.props.color, this.props.height, this.props.width, this.props.deal, this.props.gaps);
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            return _.a.createElement(
                                                "div",
                                                { className: "mini-chart ".concat(this.props.className), onClick: this.onClick },
                                                _.a.createElement(
                                                    "svg",
                                                    { id: "mini-chart-".concat(this.props.id), height: this.props.height, width: this.props.width },
                                                    _.a.createElement("path", { fill: "none", stroke: this.props.color, strokeWidth: "1.5", strokeLinejoin: "round", strokeLinecap: "round", id: "line" }),
                                                    _.a.createElement("path", { id: "area" }),
                                                    _.a.createElement("line", { id: "dealLine" }),
                                                    _.a.createElement("rect", { id: "leftEdgeRect" }),
                                                    _.a.createElement("rect", { id: "rightEdgeRect" }),
                                                    _.a.createElement("line", { id: "leftEdgeTopLine" }),
                                                    _.a.createElement("line", { id: "leftEdgeBottomLine" }),
                                                    _.a.createElement("rect", { id: "rightEdgeTopLine" }),
                                                    _.a.createElement("rect", { id: "rightEdgeBottomLine" }),
                                                    _.a.createElement("polyline", { id: "leftDealRhombus" }),
                                                    _.a.createElement("polyline", { id: "rightDealRhombus" }),
                                                    _.a.createElement("path", { id: "dealLabelContainer" }),
                                                    _.a.createElement("path", { id: "dealLabelArrow" })
                                                )
                                            );
                                        },
                                    },
                                ]),
                                t
                            );
                        })(E.Component)),
                        (r.defaultProps = { className: "", color: "", height: 30, width: 90, onClick: function () {} }),
                        (n = i))
                    ) || n),
                w = a("1Up3");
            a.d(t, "a", function () {
                return k;
            });
            var k = (function (e) {
                function t() {
                    var e, a;
                    l()(this, t);
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return (
                        ((a = m()(this, (e = f()(t)).call.apply(e, [this].concat(r)))).state = { failed: !1, rateData: null, gaps: [] }),
                        (a.ref = _.a.createRef()),
                        (a.onLoadData = function () {
                            var e = a.props;
                            (0, e.loadData)(e.item, e.project, !1)
                                .then(function (e) {
                                    var t = o()(e, 2),
                                        n = t[0],
                                        r = t[1];
                                    n && r && a.setState({ rateData: n, gaps: r });
                                })
                                .catch(function () {
                                    a.setState({ failed: !0 });
                                });
                        }),
                        a
                    );
                }
                return (
                    g()(t, e),
                    d()(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.onLoadData();
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.ref.current ? this.ref.current.offsetWidth : 0;
                                return _.a.createElement(
                                    w.a,
                                    { failed: this.state.failed, onClick: this.props.onClickToChart, ref: this.ref },
                                    _.a.createElement(y, {
                                        id: "".concat(this.props.id),
                                        data: this.state.rateData,
                                        className: "mini-chart-container",
                                        height: 70,
                                        width: e,
                                        color: "#47a4eb",
                                        deal: this.props.item,
                                        theme: this.props.theme,
                                        gaps: this.state.gaps,
                                    })
                                );
                            },
                        },
                    ]),
                    t
                );
            })(_.a.Component);
        },
        qfpa: function (e, t, a) {},
        qftv: function (e, t, a) {},
        qpmd: function (e, t, a) {},
        qw4E: function (e, t, a) {},
        rABa: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-sbux.25ec88cb.svg";
        },
        rKGu: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { id: "a", d: "M16 18l-4-3.45L8 18V7.2C8 6.537 8.512 6 9.143 6h5.714C15.488 6 16 6.537 16 7.2V18z" })
                );
            };
        },
        rkwC: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("deTv"),
                s = a("5hlQ"),
                l = a("1XfU"),
                u = function (e) {
                    var t = e.videoId,
                        a = e.onVideoEnd;
                    return c.a.createElement(
                        "div",
                        { className: "video-gallery-item__video" },
                        c.a.createElement(l.a, null),
                        c.a.createElement(
                            "div",
                            { className: "video-gallery-item__player-container" },
                            c.a.createElement(s.a, { className: "video-gallery-item__player-container", videoId: t, playerVars: { autoplay: 1, rel: 0, controls: 1, showinfo: 0 }, onEnd: a })
                        )
                    );
                },
                d = function (e) {
                    var t = e.onClick,
                        a = e.messages,
                        n = e.id;
                    return c.a.createElement(
                        "button",
                        {
                            className: "video-gallery-item__link",
                            onClick: function () {
                                t(n, "overlay_buttons_click", "videogallery/".concat(a.posterTitle.id));
                            },
                            title: o.g.formatMessage(a.posterTitle),
                        },
                        c.a.createElement(o.c, r()({}, a.posterTitle, { className: "video-gallery-item__title" })),
                        c.a.createElement("span", { className: "video-gallery-item__icon" })
                    );
                },
                p = function (e) {
                    var t = e.selected,
                        a = e.videoId,
                        n = e.onVideoEnd,
                        r = e.onClick,
                        i = e.posterTitle,
                        o = e.id;
                    return c.a.createElement(
                        "div",
                        { className: "video-gallery-item ".concat(t ? "video-gallery-item_no-padding" : "") },
                        t ? c.a.createElement(u, { videoId: a, onVideoEnd: n }) : c.a.createElement(d, { id: o, onClick: r, messages: { posterTitle: i } })
                    );
                },
                m =
                    (a("PNuR"),
                    function () {
                        return c.a.createElement(
                            "svg",
                            { className: "video-course__side-arrow-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24" },
                            c.a.createElement("path", { d: "M13.793 12L9.146 7.354c-.195-.196-.195-.512 0-.708.196-.195.512-.195.708 0l5 5c.195.196.195.512 0 .708l-5 5c-.196.195-.512.195-.708 0-.195-.196-.195-.512 0-.708L13.793 12z" })
                        );
                    }),
                h = function (e) {
                    var t = e.course,
                        a = e.onClick;
                    return c.a.createElement(
                        "div",
                        {
                            key: t.title,
                            className: "video-course-item",
                            onClick: function () {
                                return a(t.id);
                            },
                        },
                        c.a.createElement("span", { className: "video-course__color", style: { backgroundColor: t.fillColor } }),
                        c.a.createElement("div", { className: "video-course__side-arrow" }, c.a.createElement(m, null)),
                        c.a.createElement(o.c, r()({}, t.title, { className: "video-course-item__title" })),
                        c.a.createElement(
                            "div",
                            { className: "video-course-item__footer" },
                            c.a.createElement(o.c, r()({}, t.description, { className: "video-course-item__description" })),
                            c.a.createElement(o.c, { className: "video-course-item__video-counter", defaultMessage: "{count}Â video", id: "videos_count", values: { count: t.items.count } })
                        )
                    );
                },
                f = function (e) {
                    return c.a.createElement(
                        "div",
                        { className: "video-category" },
                        c.a.createElement("h3", { className: "video-category__title" }, c.a.createElement(o.c, { id: "trader_school", defaultMessage: "Trader school" })),
                        c.a.createElement(o.c, { className: "video-category__description", id: "video_course", defaultMessage: "video course" }),
                        c.a.createElement(
                            "div",
                            { className: "video-courses-list" },
                            e.courses.map(function (t) {
                                return c.a.createElement(h, { key: t.id, course: t, onClick: e.openCourse });
                            })
                        )
                    );
                };
            t.a = function (e) {
                return c.a.createElement(
                    "div",
                    { className: "video-gallery" },
                    c.a.createElement(
                        "ul",
                        { className: "video-gallery__list" },
                        e.items.map(function (t) {
                            return c.a.createElement("li", { className: "video-gallery__item", key: t.id }, c.a.createElement(p, r()({}, t, { selected: e.selectedId === t.id, onClick: e.onClick, onVideoEnd: e.onVideoEnd })));
                        })
                    ),
                    e.courses.length > 0 && c.a.createElement(f, e)
                );
            };
        },
        rmHU: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-audchf.9a53e9a7.svg";
        },
        rohC: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { fill: "url(#paint0_linear_advanced)", d: "M5 14.1l7-2.1 7 2.1V19l-7-2.1L5 19v-4.9z" }),
                    c.a.createElement("path", { fill: "url(#paint1_linear_advanced)", fillRule: "evenodd", d: "M12 16.9l7 2.1v-4.9L12 12l-7 2.1V19l7-2.1zM5.8 18l6.2-1.8 6.2 1.8v-3.4L12 12.7l-6.2 1.9V18z", clipRule: "evenodd" }),
                    c.a.createElement("path", { fill: "url(#paint2_linear_advanced)", d: "M5 7.1L12 5l7 2.1V12l-7-2.1L5 12V7.1z", opacity: ".5" }),
                    c.a.createElement("path", { fill: "url(#paint3_linear_advanced)", fillRule: "evenodd", d: "M12 9.9l7 2.1V7.1L12 5 5 7.1V12l7-2.1zM5.8 11L12 9.2l6.2 1.8V7.6L12 5.7 5.8 7.6V11z", clipRule: "evenodd" }),
                    c.a.createElement(
                        "defs",
                        null,
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint0_linear_advanced", x1: "12", x2: "4.3", y1: "7.5", y2: "22.1", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#1FBF75" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#18955B" })
                        ),
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint1_linear_advanced", x1: "2.7", x2: "7.3", y1: "18.3", y2: "11.6", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#fff" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#1FBF75", stopOpacity: "0" })
                        ),
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint2_linear_advanced", x1: "12", x2: "4.3", y1: ".5", y2: "15.2", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#1FBF75" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#18955B" })
                        ),
                        c.a.createElement(
                            "linearGradient",
                            { id: "paint3_linear_advanced", x1: "2.7", x2: "7.3", y1: "11.3", y2: "4.6", gradientUnits: "userSpaceOnUse" },
                            c.a.createElement("stop", { stopColor: "#fff" }),
                            c.a.createElement("stop", { offset: "1", stopColor: "#1FBF75", stopOpacity: "0" })
                        )
                    )
                );
            };
        },
        rswK: function (e, t, a) {},
        "s+8i": function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a("8Jek"),
                i = a.n(r),
                c = a("VGkd"),
                o =
                    (a("CoIu"),
                    function (e) {
                        return n.createElement(
                            "label",
                            {
                                htmlFor: e.name,
                                onClick: function () {
                                    e.onCheck();
                                },
                                className: i()("satir-checkbox", e.className, { "satir-checkbox_checked": e.checked, "satir-checkbox_disabled": e.disabled }),
                                disabled: e.disabled,
                                role: "checkbox",
                            },
                            n.createElement("input", { type: "checkbox", id: e.name, name: e.name, checked: e.checked, className: "satir-checkbox__input", disabled: e.disabled, onChange: e.onChange, readOnly: !0 }),
                            n.createElement(
                                "div",
                                { className: i()("satir-checkbox__icon-container", "satir-checkbox__icon-container_type_".concat(e.type), "satir-checkbox__icon-container_size_".concat(e.size), e.containerClassName) },
                                n.createElement(
                                    c.Transition,
                                    {
                                        native: !0,
                                        items: e.checked,
                                        initial: { opacity: 1 },
                                        from: { opacity: 0, transform: "scale(0)" },
                                        enter: { opacity: 1, transform: "scale(1)" },
                                        leave: { opacity: 0, transform: "scale(0)" },
                                        config: { duration: 200 },
                                    },
                                    function (t) {
                                        return (
                                            t &&
                                            function (t) {
                                                return n.createElement(c.animated.div, { className: i()("satir-checkbox__icon", "satir-checkbox__icon_type_".concat(e.type), "satir-checkbox__icon_size_".concat(e.size)), style: t });
                                            }
                                        );
                                    }
                                )
                            ),
                            n.createElement("div", { className: "satir-checkbox__text" }, e.text)
                        );
                    });
            (o.defaultProps = { text: "Checkbox", onCheck: function () {}, checked: !1, className: "", name: "", type: "rectangle", size: "middle", disabled: !1 }), (t.a = o);
        },
        "s5+q": function (e, t, a) {},
        s698: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-euraud.0312fc70.svg";
        },
        s7nT: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-gbpchf.f873946f.svg";
        },
        sJX0: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n);
            t.a = function () {
                return r.a.createElement(
                    "svg",
                    { className: "inheriting", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    r.a.createElement("path", {
                        className: "inheriting",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                            "M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z",
                        fill: "#A5BDD9",
                    }),
                    r.a.createElement("path", {
                        className: "inheriting",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.5 10C2.5 9.72386 2.72386 9.5 3 9.5H7C7.27614 9.5 7.5 9.72386 7.5 10C7.5 10.2761 7.27614 10.5 7 10.5H3C2.72386 10.5 2.5 10.2761 2.5 10Z",
                        fill: "#A5BDD9",
                    }),
                    r.a.createElement("path", {
                        className: "inheriting",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.5 10C12.5 9.72386 12.7239 9.5 13 9.5H17C17.2761 9.5 17.5 9.72386 17.5 10C17.5 10.2761 17.2761 10.5 17 10.5H13C12.7239 10.5 12.5 10.2761 12.5 10Z",
                        fill: "#A5BDD9",
                    })
                );
            };
        },
        sKPn: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-fb.47c5a5da.svg";
        },
        sKz3: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i),
                o = a("deTv"),
                s =
                    (a("U1zZ"),
                    Object(o.e)({
                        callAvailable: { id: "vip_callback_call_available", defaultMessage: "The number of calls available:" },
                        add: { id: "add", defaultMessage: "Add" },
                        notEnoughCall: { id: "vip_callback_not_enough_call", defaultMessage: "You have exceeded the number of calls you are limited to for this period." },
                    }));
            t.a = function (e) {
                return r.a.createElement(
                    "div",
                    { className: c()("callback-count", e.className) },
                    r.a.createElement(
                        "div",
                        { className: "callback-count__main" },
                        r.a.createElement("div", { className: "callback-count__text" }, r.a.createElement(o.c, s.callAvailable), " ", r.a.createElement("strong", null, e.availableCallbacks)),
                        e.isButtonShowing && e.onButtonClick && r.a.createElement("button", { type: "button", className: "callback-count__btn", onClick: e.onButtonClick }, r.a.createElement(o.c, s.add))
                    ),
                    e.isErrorShowing && r.a.createElement("p", { className: "callback-count__warning" }, r.a.createElement(o.c, s.notEnoughCall))
                );
            };
        },
        sP1Z: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i);
            a("5uIG");
            t.a = function (e) {
                var t = e.children,
                    a = e.className,
                    n = e.fieldId,
                    i = e.fieldClassName,
                    o = e.label,
                    s = e.labelClassName,
                    l = e.style;
                return r.a.createElement(
                    "div",
                    { className: c()("satir-form-group", a), style: l },
                    o && r.a.createElement("label", { className: c()("".concat("satir-form-group", "__label"), s), htmlFor: n }, o),
                    r.a.createElement("div", { className: c()("".concat("satir-form-group", "__field"), i) }, t)
                );
            };
        },
        sUF0: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(e.width || o.a.WIDTH, " ").concat(e.height || o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        className: "inheriting",
                        fill: "#A8A8A8",
                        d: "M26.5 21a.5.5 0 0 0 .5-.5V11a.5.5 0 1 0-1 0v9H11.12l2.756-3.17a.5.5 0 0 0-.752-.66l-3.5 4a.5.5 0 0 0 0 .66l3.5 4a.5.5 0 1 0 .752-.66L11.12 21H26.5z",
                    })
                );
            };
        },
        smIA: function (e, t, a) {},
        /*suap: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("92VU"),
                c = a("deTv"),
                o = function (e) {
                    return r.a.createElement(
                        i.b,
                        { value: c.g.getInstance() },
                        r.a.createElement(
                            "div",
                            { className: "server-connection-error" },
                            r.a.createElement("div", { className: "text" }, r.a.createElement(c.c, e.trans.textTitle), r.a.createElement(c.c, e.trans.text)),
                            e.showButton &&
                                r.a.createElement(
                                    "button",
                                    {
                                        className: "btn -lg -t9",
                                        onClick: function () {
                                            return e.onClick();
                                        },
                                    },
                                    r.a.createElement(c.c, e.trans.textButton)
                                )
                        )
                    );
                };
            (o.defaultProps = {
                trans: Object(c.e)({
                    textTitle: { id: "server_connection_lost_1", defaultMessage: "Lost connection to server." },
                    text: { id: "server_connection_lost_5", defaultMessage: "Connection" },
                    textButton: { id: "server_connection_lost_3", defaultMessage: "Reload now" },
                }),
                showButton: !0,
                onClick: function () {},
            }),
                (t.a = o);
        },*/
        t1P0: function (e, t, a) {
            "use strict";
            var n,
                r,
                i,
                c = a("nxTg"),
                o = a.n(c),
                s = a("SDJZ"),
                l = a.n(s),
                u = a("NToG"),
                d = a.n(u),
                p = a("K4DB"),
                m = a.n(p),
                h = a("+IV6"),
                f = a.n(h),
                v = a("eef+"),
                g = a.n(v),
                E = a("mXGw"),
                _ = a.n(E),
                b = a("mBK0"),
                C = a("9va6"),
                y = a("deTv"),
                w = a("BK8K"),
                k = a("QB4/"),
                T = a("1XfU"),
                N = a("gYzd"),
                M = a("us2/"),
                L = a("j0gb"),
                H = a("ay74"),
                O = a("uWRz"),
                x = a("tyvn"),
                D =
                    Object(b.observer)(
                        ((i = r = (function (e) {
                            function t() {
                                var e;
                                return (
                                    l()(this, t),
                                    ((e = m()(this, f()(t).call(this))).onLoadData = function () {
                                        (e.isLoaded = !0),
                                            e.props.loadData(e.props.deal, x.yc, !0).then(function (t) {
                                                var a = o()(t, 2),
                                                    n = a[0],
                                                    r = a[1];
                                                n && r && e.setState({ rateData: n, gaps: r });
                                            });
                                    }),
                                    (e.isLoaded = !1),
                                    (e.state = { rateData: null, gaps: null }),
                                    e
                                );
                            }
                            return (
                                g()(t, e),
                                d()(t, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            "normal" === this.props.status && "function" == typeof this.props.onInited && this.props.onInited(),
                                                this.props.deal && !this.isLoaded && "function" == typeof this.props.loadData && this.onLoadData();
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            if (this.props.status === H.a.LOADING) return _.a.createElement(T.a, null);
                                            var e,
                                                t,
                                                a,
                                                n = this.props.deal,
                                                r = this.props.status === H.a.ERROR,
                                                i = "",
                                                c = "";
                                            return (
                                                n &&
                                                    ((e = "demo" === n.group ? "demo" : n.currency),
                                                    (t = n.realizedPnl),
                                                    (a = Object.assign({ open: 0, swap: 0 }, n.commissionDetail)),
                                                    (i = Object(w.G)(" deal-detail__value--".concat(n.dir))),
                                                    (c = n.result && "standoff" === n.result ? "" : Object(w.G)(" deal-detail__value--".concat(n.result)))),
                                                _.a.createElement(
                                                    "div",
                                                    { className: "deal-detail deal-detail--load " },
                                                    Object(C.isEmpty)(n)
                                                        ? null
                                                        : _.a.createElement(
                                                              "ul",
                                                              { className: "deal-detail__list  deal-detail__list--main" },
                                                              _.a.createElement(
                                                                  "li",
                                                                  { className: "deal-detail__list-item" },
                                                                  _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "fx_active", defaultMessage: "Asset" })),
                                                                  _.a.createElement("div", { className: "deal-detail__value deal-detail__value" }, _.a.createElement("span", { className: "deal-detail__value--asset" }, n.pair.title))
                                                              ),
                                                              _.a.createElement(
                                                                  "li",
                                                                  { className: "deal-detail__list-item" },
                                                                  _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "fx_invested", defaultMessage: "Invested" }), "Â Â x", n.multiplicator),
                                                                  _.a.createElement("div", { className: "deal-detail__value".concat(i) }, _.a.createElement(M.a, { currency: e }), "Â ", Object(w.j)(n.sum, void 0, " ", 2))
                                                              ),
                                                              _.a.createElement(
                                                                  "li",
                                                                  { className: "deal-detail__list-item" },
                                                                  _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "fx_income", defaultMessage: "Profit" })),
                                                                  _.a.createElement("div", { className: "deal-detail__value".concat(c) }, _.a.createElement(M.a, { currency: e }), "Â ", Object(w.j)(t, void 0, " ", 2))
                                                              )
                                                          ),
                                                    r
                                                        ? _.a.createElement(
                                                              "div",
                                                              { className: "deal-detail__plug-chart" },
                                                              _.a.createElement(
                                                                  "div",
                                                                  { className: "deal-detail__plug-text" },
                                                                  _.a.createElement(y.c, { id: "fx_text_detail_graph_error", defaultMessage: "Unfortunately, data for the chart could not be obtained" })
                                                              )
                                                          )
                                                        : _.a.createElement(
                                                              "div",
                                                              { className: "deal-detail__chart" },
                                                              _.a.createElement(N.a, {
                                                                  id: this.props.deal.id,
                                                                  format: "line",
                                                                  step: this.props.request && this.props.request.size ? this.props.request.size : null,
                                                                  data: this.state.rateData || this.props.rateData,
                                                                  gaps: this.state.gaps || this.props.gaps,
                                                                  uuid: this.props.uuid,
                                                                  deal: this.props.deal,
                                                                  theme: this.props.theme,
                                                                  width: this.props.width,
                                                              })
                                                          ),
                                                    Object(C.isEmpty)(n)
                                                        ? null
                                                        : _.a.createElement(
                                                              E.Fragment,
                                                              null,
                                                              _.a.createElement(
                                                                  "ul",
                                                                  { className: "deal-detail__list" },
                                                                  _.a.createElement(
                                                                      "li",
                                                                      { className: "deal-detail__list-item" },
                                                                      _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "fx_datetime", defaultMessage: "Date and time" })),
                                                                      _.a.createElement(
                                                                          "div",
                                                                          { className: "deal-detail__value deal-detail__value_nowrap" },
                                                                          Object(w.l)(new Date(1e3 * n.timeOpen), x.w),
                                                                          ".",
                                                                          _.a.createElement("strong", null, Object(w.l)(new Date(1e3 * n.timeOpen), "u"))
                                                                      ),
                                                                      _.a.createElement(
                                                                          "div",
                                                                          { className: "deal-detail__value deal-detail__value_nowrap" },
                                                                          Object(w.l)(new Date(1e3 * n.timeClose), x.w),
                                                                          ".",
                                                                          _.a.createElement("strong", null, Object(w.l)(new Date(1e3 * n.timeClose), "u"))
                                                                      )
                                                                  ),
                                                                  _.a.createElement(
                                                                      "li",
                                                                      { className: "deal-detail__list-item" },
                                                                      _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "fx_rate", defaultMessage: "Quote" })),
                                                                      _.a.createElement("div", { className: "deal-detail__value" }, n.cursOpen.toFixed(n.pair.precision)),
                                                                      _.a.createElement("div", { className: "deal-detail__value" }, n.cursClose.toFixed(n.pair.precision))
                                                                  ),
                                                                  _.a.createElement(
                                                                      "li",
                                                                      { className: "deal-detail__list-item deal-detail__list-item_commission" },
                                                                      _.a.createElement("div", { className: "deal-detail__key" }, _.a.createElement(y.c, { id: "fx_commissions", defaultMessage: "Commissions" })),
                                                                      _.a.createElement(
                                                                          "div",
                                                                          { className: "deal-detail__value deal-detail__value_commission" },
                                                                          _.a.createElement("span", { className: "deal-detail__value-item" }, _.a.createElement(y.c, { id: "fx_commission_for_transaction", defaultMessage: "Trading fee" })),
                                                                          _.a.createElement(
                                                                              "span",
                                                                              { className: "deal-detail__value-item deal-detail__value-item_amount" },
                                                                              _.a.createElement(M.a, { currency: e }),
                                                                              "Â ",
                                                                              Object(w.j)(a.open, void 0, " ", 2)
                                                                          )
                                                                      ),
                                                                      _.a.createElement(
                                                                          "div",
                                                                          { className: "deal-detail__value deal-detail__value_commission" },
                                                                          _.a.createElement(
                                                                              "span",
                                                                              { className: "deal-detail__value-item" },
                                                                              _.a.createElement(y.c, { id: "fx_commission_for_rollover", defaultMessage: "Overnight (total)" })
                                                                          ),
                                                                          _.a.createElement(
                                                                              "span",
                                                                              { className: "deal-detail__value-item deal-detail__value-item_amount" },
                                                                              _.a.createElement(M.a, { currency: e }),
                                                                              "Â ",
                                                                              Object(w.j)(a.swap, void 0, " ", 2)
                                                                          )
                                                                      )
                                                                  )
                                                              ),
                                                              _.a.createElement(
                                                                  "ul",
                                                                  { className: "deal-detail__list" },
                                                                  _.a.createElement(
                                                                      "li",
                                                                      { className: "deal-detail__list-item" },
                                                                      _.a.createElement(
                                                                          "div",
                                                                          { className: "deal-detail__key" },
                                                                          n.refunded ? _.a.createElement(y.c, { id: "refunded_deal", defaultMessage: "Canceled" }) : _.a.createElement(y.c, { id: "closed_deal", defaultMessage: "Closed" })
                                                                      ),
                                                                      _.a.createElement("div", { className: "deal-detail__value" }, _.a.createElement(L.a, { status: n.closeReason, refunded: n.refunded, closeReasons: O.CLOSE_REASON_FX }))
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
                        })(k.a)),
                        (r.displayName = "DealDetails"),
                        (r.defaultProps = { uuid: null, rateData: [], gaps: [], request: [], deal: null, status: "loading" }),
                        (n = i))
                    ) || n;
            t.a = D;
        },
        tVTJ: function (e, t, a) {
            e.exports = a.p + "../images/app-installer-ios@3x.e15a0bbb.png";
        },
        tz5f: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement(
                        "g",
                        { fill: "none", fillRule: "evenodd", stroke: "#999", transform: "translate(6 6)" },
                        c.a.createElement("rect", { width: "12", height: "7.471", y: "3.529", strokeWidth: "1.5", rx: "1" }),
                        c.a.createElement("circle", { cx: "8.75", cy: "7.279", r: "1" }),
                        c.a.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M.934 3.477L10.124 0v3.477" })
                    )
                );
            };
        },
        tzTz: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-work.7166fd2c.svg";
        },
        uCN1: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return n;
            }),
                a.d(t, "b", function () {
                    return r;
                }),
                a.d(t, "c", function () {
                    return i;
                });
            var n = "KYC-container",
                r = Object.freeze({ ON_ERROR: "idCheck.onError", ON_RESIZE: "idCheck.onResize" }),
                i = Object.freeze({ INVALID_TOKEN: "invalid-token" });
        },
        uJfi: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-audjpy.7928027b.svg";
        },
        "us2/": function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("BK8K");
            t.a = function (e) {
                var t = Object(i.g)(e.currency),
                    a = e.className || "psign";
                return r.a.createElement("span", { className: a }, t);
            };
        },
        v0Qw: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-v.1ee7ab3b.svg";
        },
        vLEy: function (e, t, a) {},
        vMea: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return M;
            });
            var n = a("8VmE"),
                r = a.n(n),
                i = a("RiSW"),
                c = a.n(i),
                o = a("OvAC"),
                s = a.n(o),
                l = a("SDJZ"),
                u = a.n(l),
                d = a("NToG"),
                p = a.n(d),
                m = a("K4DB"),
                h = a.n(m),
                f = a("+IV6"),
                v = a.n(f),
                g = a("eef+"),
                E = a.n(g),
                _ = a("mXGw"),
                b = a.n(_),
                C = a("8Jek"),
                y = a.n(C);
            a("Fdx0");
            function w(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        a.push.apply(a, n);
                }
                return a;
            }
            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? w(Object(a), !0).forEach(function (t) {
                              s()(e, t, a[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                        : w(Object(a)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                          });
                }
                return e;
            }
            var T = "satir-button",
                N = function () {
                    return b.a.createElement(
                        "span",
                        { className: "".concat(T, "__loader-wrapper") },
                        b.a.createElement(
                            "svg",
                            { width: "24px", height: "10px", viewBox: "0 0 38 10", className: "".concat(T, "__loader") },
                            b.a.createElement("circle", { cx: "4", cy: "5", r: "3" }),
                            b.a.createElement("circle", { cx: "19", cy: "5", r: "3" }),
                            b.a.createElement("circle", { cx: "34", cy: "5", r: "3" })
                        )
                    );
                },
                M = (function (e) {
                    function t() {
                        return u()(this, t), h()(this, v()(t).apply(this, arguments));
                    }
                    return (
                        E()(t, e),
                        p()(t, [
                            {
                                key: "renderIcon",
                                value: function (e, t) {
                                    var a = y()("".concat(T, "__icon"), s()({}, "".concat(T, "__icon_position-").concat(t), t), e.props.className);
                                    return Object(_.cloneElement)(e, { className: a });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e,
                                        t = this.props,
                                        a = t.block,
                                        n = t.children,
                                        i = t.className,
                                        o = t.container,
                                        l = t.disabled,
                                        u = t.fontSize,
                                        d = t.href,
                                        p = t.icon,
                                        m = t.iconPosition,
                                        h = t.isBlock,
                                        f = t.isDisabled,
                                        v = t.isLoading,
                                        g = t.rel,
                                        E = t.size,
                                        C = t.skin,
                                        w = t.style,
                                        M = t.target,
                                        L = t.type,
                                        H = t.width,
                                        O = c()(t, [
                                            "block",
                                            "children",
                                            "className",
                                            "container",
                                            "disabled",
                                            "fontSize",
                                            "href",
                                            "icon",
                                            "iconPosition",
                                            "isBlock",
                                            "isDisabled",
                                            "isLoading",
                                            "rel",
                                            "size",
                                            "skin",
                                            "style",
                                            "target",
                                            "type",
                                            "width",
                                        ]),
                                        x = "left" === m,
                                        D = p && m ? this.renderIcon(p, m) : null,
                                        I = y()(
                                            T,
                                            u && "".concat(T, "_font-size-").concat(u),
                                            E && "".concat(T, "_").concat(E),
                                            C && "".concat(T, "_").concat(C),
                                            ((e = {}), s()(e, "".concat(T, "_disabled"), l || f), s()(e, "".concat(T, "_block"), a || h), e),
                                            i
                                        ),
                                        S = H ? k({}, w, { width: H }) : w,
                                        V = b.a.createElement(_.Fragment, null, x && D, n, !x && D, v && b.a.createElement(N, null)),
                                        F = k({}, O, { className: I, disabled: l || f ? "disabled" : null, style: S });
                                    return o && b.a.isValidElement(o) ? Object(_.cloneElement)(o, F, V) : d ? b.a.createElement("a", r()({}, F, { href: d, target: M, rel: g }), V) : b.a.createElement("button", r()({}, F, { type: L }), V);
                                },
                            },
                        ]),
                        t
                    );
                })(_.Component);
            M.defaultProps = { iconPosition: "left", type: "button" };
        },
        vQpF: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-es.166c4d55.svg";
        },
        vTgu: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return c;
            });
            var n = a("mXGw"),
                r = a.n(n),
                i = a("deTv");
            function c(e) {
                var t = e.status,
                    a = e.dealId;
                switch (t) {
                    case "cancel":
                        return r.a.createElement(i.c, { id: "deal_order_history_cancel", defaultMessage: "Cancelled by the user" });
                    case "expire":
                        return r.a.createElement(i.c, { id: "deal_order_history_expire", defaultMessage: "Cancelled because the time ran out" });
                    case "success":
                        return r.a.createElement(n.Fragment, null, r.a.createElement(i.c, { id: "order_opened", defaultMessage: "Trade opened" }), a && " id ".concat(a));
                    default:
                        return r.a.createElement(i.c, { id: "deal_order_history_error", defaultMessage: "The trade failed to open" });
                }
            }
        },
        w4l1: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", { d: "M12 17c-5.982 0-6-1.686-6-5s.002-5 6-5 6 1.686 6 5-.018 5-6 5zm-2-7.5v5l5-2.5-5-2.5z" })
                );
            };
        },
        wE94: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-metal.c53cec5e.svg";
        },
        wLfr: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-nzdchf.89ad071f.svg";
        },
        wT1a: function (e, t, a) {},
        wg1a: function (e, t, a) {
            "use strict";
            var n = a("e+GP"),
                r = a.n(n),
                i = a("SDJZ"),
                c = a.n(i),
                o = a("NToG"),
                s = a.n(o),
                l = a("K4DB"),
                u = a.n(l),
                d = a("+IV6"),
                p = a.n(d),
                m = a("eef+"),
                h = a.n(m),
                f = a("mXGw"),
                v = a.n(f),
                g = a("U/Wl"),
                E = a("X0zi"),
                _ = a("+yxS"),
                b = a("BK8K"),
                C = a("GZrb"),
                y = (function (e) {
                    function t() {
                        return c()(this, t), u()(this, p()(t).apply(this, arguments));
                    }
                    return (
                        h()(t, e),
                        s()(t, [
                            {
                                key: "componentDidUpdate",
                                value: function () {
                                    this.validate(this.props.value);
                                },
                            },
                        ]),
                        t
                    );
                })(E.a),
                w = (function (e) {
                    function t() {
                        var e, a;
                        c()(this, t);
                        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        return (
                            ((a = u()(this, (e = p()(t)).call.apply(e, [this].concat(i)))).state = { amountInputValue: Object(b.j)(a.props.defaultAmount, void 0, " ", 0) }),
                            (a.amountInputChangeHandler = function (e) {
                                var t = "object" === r()(e) && null !== e ? e.target.value : e;
                                (t = (t = String(t)).replace(/\D+/g, "")),
                                    Object(b.D)() || (t = Object(b.j)(Number(t), void 0, " ", 0)),
                                    a.setState({ amountInputValue: t }, function () {
                                        a.props.onChange(t);
                                    });
                            }),
                            a
                        );
                    }
                    return (
                        h()(t, e),
                        s()(t, [
                            {
                                key: "componentWillReceiveProps",
                                value: function (e) {
                                    var t = e.defaultAmount;
                                    t !== this.state.amountInputValue && this.amountInputChangeHandler(t);
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.props.onChange(String(this.state.amountInputValue));
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.amountInputValue,
                                        t = this.props,
                                        a = t.min,
                                        n = t.max,
                                        i = t.onValidate,
                                        c = t.className,
                                        o = t.name,
                                        s = t.selectedPaymentSystem;
                                    return v.a.createElement(
                                        y,
                                        {
                                            name: o,
                                            value: e,
                                            onChange: this.amountInputChangeHandler,
                                            onValidate: i,
                                            validator: function (e) {
                                                return Object(C.a)(a, n, "object" === r()(e) ? e.target.value : e);
                                            },
                                            active: !0,
                                            options: s,
                                        },
                                        function (e, t) {
                                            return v.a.createElement(_.a, { name: o, className: c, value: e, onChange: t, maxLength: 10, type: Object(b.D)() ? "number" : "text" });
                                        }
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(f.Component);
            (w.defaultProps = { defaultAmount: 100 }), (t.a = Object(g.Connector)(w));
        },
        x0eb: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("8Jek"),
                c = a.n(i),
                o = a("mBK0");
            a("deZz");
            t.a = Object(o.observer)(function (e) {
                var t, a, n, i, o;
                return e.badge && e.badge.value
                    ? r.a.createElement(
                          "span",
                          { style: e.style || {}, className: c()(e.className, "badge-percent", { "badge-percent_large": e.badge.value > 50, "badge-percent_huge": e.badge.value > 79 }) },
                          ((t = e.badge), (a = t.value), (n = t.sign), (i = t.precision), (o = a.toFixed(i)), n && (o += n), o)
                      )
                    : "";
            });
        },
        x0zr: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-gs.1847a326.svg";
        },
        xCxX: function (e, t, a) {
            "use strict";
            var n = a("deTv");
            a.d(t, "a", function () {
                return n.b;
            }),
                (t.b = n.c);
        },
        xHKC: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return v;
            });
            var n = a("SDJZ"),
                r = a.n(n),
                i = a("NToG"),
                c = a.n(i),
                o = a("K4DB"),
                s = a.n(o),
                l = a("+IV6"),
                u = a.n(l),
                d = a("eef+"),
                p = a.n(d),
                m = a("mXGw"),
                h = a.n(m),
                f = a("s+8i"),
                v = (function (e) {
                    function t(e) {
                        var a;
                        return (
                            r()(this, t),
                            ((a = s()(this, u()(t).call(this, e))).onChange = function (e) {
                                var t = e.currentTarget.checked;
                                a.setState({ checked: t }, function () {
                                    a.props.update(a.props.field.id, null, t);
                                });
                            }),
                            (a.state = { checked: a.props.checked || !1 }),
                            a.props.update(a.props.field.id, null, a.state.checked),
                            a
                        );
                    }
                    return (
                        p()(t, e),
                        c()(t, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.field,
                                        a = e.className;
                                    return h.a.createElement(f.a, { name: t.id, text: t.label, checked: this.state.checked, onChange: this.onChange, className: a });
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component);
        },
        xIde: function (e, t, a) {
            "use strict";
            var n = a("0VMN"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("xARA"),
                s = a.n(o),
                l = a("W+wE"),
                u = a("qIEf"),
                d = {
                    closeTM: null,
                    getDefaultProps: function () {
                        return {
                            position: "cc",
                            id: "",
                            isClose: !0,
                            isHeader: !0,
                            className: "dialog",
                            title: "",
                            modal: !0,
                            passPropsToChild: !1,
                            onClose: void 0,
                            onAutoClose: void 0,
                            autoClose: !1,
                            level: 1,
                            posCorrection: { x: 0, y: 0 },
                            top: void 0,
                            left: void 0,
                            dlgHeaderClass: "dlg-header",
                            dlgContentClass: "dlg-content",
                        };
                    },
                    getPosition: function () {
                        return this.getPositionNormal();
                    },
                    getPositionNormal: function () {
                        var e = this.props,
                            t = u(s.a.findDOMNode(this)).find(".dialog-box"),
                            a = t.width(),
                            n = t.outerHeight(!0),
                            r = u(window).height(),
                            i = u(window).width(),
                            c = 0,
                            o = 0;
                        return "cc" === e.position && ((o = i / 2 - a / 2), (c = (r - n) / 2) < 0 && (c = 0)), void 0 !== this.props.top && (c = this.props.top), void 0 !== this.props.left && (o = this.props.left), { top: c, left: o };
                    },
                    setPosition: function () {
                        var e = this.getPosition();
                        u(s.a.findDOMNode(this)).find(".dialog-box").css({ top: e.top, left: e.left });
                    },
                    checkOverFlow: function () {
                        var e = u(s.a.findDOMNode(this)).find(".dialog-box"),
                            t = u(window).height(),
                            a = e.outerHeight(!0);
                        e.toggleClass("overflow", a > t);
                    },
                    autoClose: function () {
                        !(this.props.onAutoClose && !1 === this.props.onAutoClose()) && this.close();
                    },
                    onCloseClick: function () {
                        !(this.props.onClose && !1 === this.props.onClose()) && this.close();
                    },
                    close: function () {
                        s.a.unmountComponentAtNode(document.querySelector(".dialogs-container.level-".concat(this.props.level)));
                    },
                    componentWillUnmount: function () {
                        clearTimeout(this.closeTM), l.a.off(null, null, this);
                    },
                    componentDidMount: function () {
                        var e = this;
                        this.setPosition(),
                            this.checkOverFlow(),
                            l.a.on(
                                "windowResizeStop",
                                function () {
                                    this.setPosition(), this.checkOverFlow();
                                },
                                this
                            ),
                            this.props.autoClose &&
                                (this.closeTM = setTimeout(function () {
                                    e.autoClose();
                                }, this.props.autoClose)),
                            this.onComponentDidMount && this.onComponentDidMount();
                    },
                    render: function () {
                        var e = "".concat(this.props.className, " dialog-box"),
                            t = this.props.style || {},
                            a = this.props.children || null;
                        return (
                            this.props.passPropsToChild &&
                                this.props.children &&
                                (a = c.a.Children.map(
                                    this.props.children,
                                    function (e) {
                                        return c.a.cloneElement(e, { closeDialog: this.onCloseClick });
                                    },
                                    this
                                )),
                            c.a.createElement(
                                "div",
                                { className: "dialog-container" },
                                c.a.createElement("div", { className: "dialog-under-layer", onClick: this.props.isClose && this.onCloseClick }),
                                c.a.createElement(
                                    "div",
                                    { id: this.props.id, className: e, style: t },
                                    c.a.createElement(
                                        "div",
                                        { className: this.props.dlgHeaderClass },
                                        this.props.title ? c.a.createElement("h3", null, this.props.title) : null,
                                        this.props.isClose ? c.a.createElement("a", { className: "dlg-close", href: "javascript:;", onClick: this.onCloseClick }, c.a.createElement("span", null)) : null
                                    ),
                                    c.a.createElement("div", { className: this.props.dlgContentClass }, a)
                                )
                            )
                        );
                    },
                };
            t.a = r()(d);
        },
        xNv7: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        className: "inheriting",
                        d:
                            "M0 11.45C0 6.82 6.847 6.377 5.332.632c0 0 5.127 1.665 3.875 6.85 0 0 .678-.45 1.197-1.324 0 0 2.596 2.081 2.596 5.248 0 3.166-3.599 5.496-5.303 5.474 0 0 1.84-2.577.166-4.238C5.487 10.283 6.5 8.769 6.5 8.769s-5.788 2.938-1.263 8.114c0 0-5.237-.804-5.237-5.434z",
                        fillRule: "evenodd",
                    })
                );
            };
        },
        xYQy: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("deTv"),
                c = a("WvAc"),
                o = a("joPw");
            t.a = function (e) {
                var t = e.className,
                    a = void 0 === t ? "counter" : t,
                    n = e.days,
                    s = void 0 === n ? 0 : n,
                    l = e.hours,
                    u = void 0 === l ? 0 : l,
                    d = e.mins,
                    p = void 0 === d ? 0 : d,
                    m = e.secs,
                    h = void 0 === m ? 0 : m,
                    f = e.textTemplate,
                    v = void 0 === f ? "" : f,
                    g = e.leadingZeros,
                    E = void 0 !== g && g,
                    _ = e.daysNumText,
                    b = void 0 === _ ? o.a.days_num : _,
                    C = e.dangerously,
                    y = void 0 !== C && C,
                    w = i.g.formatMessage(b),
                    k = s ? "".concat(s, " ").concat(Object(c.a)(s, w), " ") : "";
                k += E
                    ? "".concat(Object(c.b)(u), ":").concat(Object(c.b)(p), ":").concat(Object(c.b)(h))
                    : (s ? Object(c.b)(u) : u || "") + (s || u ? ":".concat(Object(c.b)(p)) : p || "") + (s || u || p ? ":".concat(Object(c.b)(h)) : h || "");
                var T = v ? v.replace("{t}", k) : k;
                return y ? r.a.createElement("div", { className: a, "data-trans": b.id, dangerouslySetInnerHTML: { __html: T } }) : r.a.createElement("div", { className: a, "data-trans": b.id }, T);
            };
        },
        xgoX: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ltcusd.2c63ac6c.svg";
        },
        xkj6: function (e, t) {},
        xq1s: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("deTv"),
                c = a("Woij"),
                o = a("EaZs");
            t.a = function (e) {
                return r.a.createElement(
                    c.a,
                    { hovered: !0, className: "trading-signals__banner trading-signals-banner", align: "center", onClick: e.openExpertWindow },
                    r.a.createElement(o.a, { className: "trading-signals-banner__icon" }),
                    r.a.createElement("p", { className: "trading-signals-banner__text" }, r.a.createElement(i.c, { id: "trading_signals_vip_promo", defaultMessage: "Become an Expert and get access to private trading signals" }))
                );
            };
        },
        xqac: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-btgusd.0dac8711.svg";
        },
        y9qr: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-amd.d610b955.svg";
        },
        yHRw: function (e, t, a) {},
        yifm: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return r;
            }),
                a.d(t, "b", function () {
                    return i;
                }),
                a.d(t, "c", function () {
                    return c;
                }),
                a.d(t, "e", function () {
                    return o;
                }),
                a.d(t, "d", function () {
                    return s;
                });
            var n = a("cM5a"),
                r = { LESS_THEN_MIN: "LESS_THEN_MIN", MORE_THEN_MAX: "LESS_THEN_MIN", IS_EMPTY: "IS_EMPTY", NOT_CHECKED: "NOT_CHECKED", NOT_VALID_FORMAT: "NOT_VALID_FORMAT", NOT_EQUAL: "NOT_EQUAL", INVALID_PASSWORD: "INVALID_PASSWORD" };
            function i(e, t) {
                return { code: e, msg: t, type: n.a.ERROR };
            }
            function c(e, t, a) {
                return e === t ? null : i(r.NOT_EQUAL, a);
            }
            function o(e, t) {
                return e ? null : i(r.IS_EMPTY, t);
            }
            function s(e, t, a, n, c, o) {
                return "string" != typeof e && "number" != typeof e
                    ? i(r.NOT_VALID_FORMAT, o)
                    : (("string" == typeof e && e.length < t) || ("number" == typeof e && e < t)) && void 0 !== t
                    ? i(r.LESS_THEN_MIN, n)
                    : (("string" == typeof e && e.length > a) || ("number" == typeof e && e > a)) && void 0 !== a
                    ? i(r.MORE_THEN_MAX, c)
                    : null;
            }
        },
        yqZh: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M7 10.735V15l-1-.6v-4.202l.004-.001L11.966 7 18 10.225l-6.033 3.173L7 10.735zm5.138 3.798L16 12.5c-.149.682-.223 1.145-.223 1.388 0 .243.074.6.223 1.072l-4 2.35-4-2.35.274-1.072L8 12.5l3.786 2.032c.11.058.243.059.352.001z",
                    })
                );
            };
        },
        yr7W: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-crypto.633b82de.svg";
        },
        yrpw: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-usdjpy.a4735ee0.svg";
        },
        ywfx: function (e, t, a) {},
        yzV2: function (e, t, a) {
            e.exports = a.p + "../images/pair-icon-ebay.700dbc23.svg";
        },
        yzdk: function (e, t, a) {
            "use strict";
            var n = a("3bJw"),
                r = a.n(n),
                i = a("OvAC"),
                c = a.n(i),
                o = a("SDJZ"),
                s = a.n(o),
                l = a("NToG"),
                u = a.n(l),
                d = a("K4DB"),
                p = a.n(d),
                m = a("+IV6"),
                h = a.n(m),
                f = a("T1e2"),
                v = a.n(f),
                g = a("eef+"),
                E = a.n(g),
                _ = a("c35s"),
                b = a.n(_),
                C = (a("Bejv"), a("cneo")),
                y = a("f6l3"),
                w = (a("CJm6"), a("0h+z"));
            t.a = function (e, t) {
                var a, n;
                return (
                    (a = (function (e) {
                        function a() {
                            var e, t;
                            s()(this, a);
                            for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
                            return (
                                ((t = p()(this, (e = h()(a)).call.apply(e, [this].concat(o)))).config = { bindAs: w.V, importData: c()({}, w.b, { lang: "lang" }) }),
                                (t.api = { selectVideoItem: t.selectVideoItem, unSelectVideoItem: t.unSelectVideoItem, openCourse: t.openCourse, unselectCourse: t.unselectCourse }),
                                r()(t, "currentCourseId", n, v()(t)),
                                (t.localizeItem = function (e) {
                                    return function (t) {
                                        var a = t.videoIds,
                                            n = t.id,
                                            r = t.posterTitle;
                                        return { videoId: a[e] || a.en, id: n, posterTitle: r };
                                    };
                                }),
                                (t.localizeCourse = function (e) {
                                    return function (a) {
                                        var n = a.id,
                                            r = a.title,
                                            i = a.description,
                                            c = a.fillColor,
                                            o = a.items;
                                        return { id: n, title: r, description: i, fillColor: c, items: new y.b(o.map(t.localizeItem(e)), { remove: !1 }) };
                                    };
                                }),
                                t
                            );
                        }
                        return (
                            E()(a, e),
                            u()(a, [
                                {
                                    key: "onStart",
                                    value: function () {
                                        return (this.processedData = this.processSourceData(t, this.lang)), (this.videoCollection = this.processedData.root), this.addReactions(), !0;
                                    },
                                },
                                {
                                    key: "addReactions",
                                    value: function () {
                                        var e = this;
                                        this.addObserve(
                                            Object(C.reaction)(
                                                function () {
                                                    return e.currentCourseId;
                                                },
                                                function () {
                                                    return e.handleCourseChange();
                                                }
                                            )
                                        );
                                    },
                                },
                                {
                                    key: "processSourceData",
                                    value: function (e, t) {
                                        var a = e.root,
                                            n = e.courses;
                                        return { root: new y.b(a.map(this.localizeItem(t)), { remove: !1 }), courses: n.map(this.localizeCourse(t)) };
                                    },
                                },
                                {
                                    key: "onStop",
                                    value: function () {
                                        return this.unselectCourse(), !0;
                                    },
                                },
                                {
                                    key: "selectVideoItem",
                                    value: function (e, t, a) {
                                        this.videoCollection.select(e), this.callApi(w.L, "sendStat", t, a);
                                    },
                                },
                                {
                                    key: "unSelectVideoItem",
                                    value: function () {
                                        this.videoCollection.unSelect();
                                    },
                                },
                                {
                                    key: "openCourse",
                                    value: function (e) {
                                        this.selectCourse(e);
                                    },
                                },
                                {
                                    key: "selectCourse",
                                    value: function (e) {
                                        this.currentCourseId = e;
                                    },
                                },
                                {
                                    key: "unselectCourse",
                                    value: function () {
                                        this.currentCourseId = null;
                                    },
                                },
                                {
                                    key: "handleCourseChange",
                                    value: function () {
                                        var e = this,
                                            t = this.processedData.courses.find(function (t) {
                                                return t.id === e.currentCourseId;
                                            });
                                        this.videoCollection.unSelect(), (this.videoCollection = t ? t.items : this.processedData.root);
                                    },
                                },
                            ]),
                            a
                        );
                    })(e)),
                    (n = b()(a.prototype, "currentCourseId", [C.observable], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function () {
                            return null;
                        },
                    })),
                    b()(a.prototype, "selectCourse", [C.action], Object.getOwnPropertyDescriptor(a.prototype, "selectCourse"), a.prototype),
                    b()(a.prototype, "unselectCourse", [C.action], Object.getOwnPropertyDescriptor(a.prototype, "unselectCourse"), a.prototype),
                    a
                );
            };
        },
        z7ux: function (e, t, a) {},
        ziv0: function (e, t, a) {},
        zpaR: function (e, t, a) {
            "use strict";
            var n = a("8VmE"),
                r = a.n(n),
                i = a("mXGw"),
                c = a.n(i),
                o = a("S6YD");
            t.a = function (e) {
                return c.a.createElement(
                    "svg",
                    r()({ viewBox: "0 0 ".concat(o.a.WIDTH, " ").concat(o.a.HEIGHT), width: o.a.WIDTH, height: o.a.HEIGHT, fill: o.a.FILL }, e),
                    c.a.createElement("path", {
                        d:
                            "M16.3038 3.30377C16.7088 2.89874 17.3655 2.89875 17.7705 3.30377L20.6962 6.22953C21.1013 6.63455 21.1013 7.29121 20.6962 7.69623C20.2912 8.10125 19.6345 8.10125 19.2295 7.69623L16.3038 4.77047C15.8987 4.36545 15.8987 3.70879 16.3038 3.30377Z",
                        fill: "#5B728C",
                    }),
                    c.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                            "M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z",
                        fill: "#5B728C",
                    }),
                    c.a.createElement("path", { d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z", fill: "#5B728C" }),
                    c.a.createElement("path", { d: "M13 4H11C10.4477 4 10 4.44772 10 5V6H14V5C14 4.44772 13.5523 4 13 4Z", fill: "#5B728C" })
                );
            };
        },
        zvCy: function (e, t, a) {
            "use strict";
            var n = a("mXGw"),
                r = a.n(n),
                i = a("BK8K"),
                c = a("WnEs"),
                o = a("o7Vx"),
                s = a("eRjb");
            a("MR+f");
            t.a = function (e) {
                return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                        "div",
                        { className: "trade-signal-card trade-signal-card_past", "data-test": "trade-signal-card-".concat(e.id) },
                        r.a.createElement(
                            "div",
                            { className: "trade-signal-card__time-holder" },
                            r.a.createElement("span", { className: "trade-signal-card__time-publication" }, Object(i.l)(1e3 * e.endedAt, "d.m H:i")),
                            r.a.createElement(o.a, { duration: Number(e.period) })
                        ),
                        r.a.createElement(c.a, e),
                        r.a.createElement(s.a, { rank: e.rank, projects: e.projects, isMetaTrader: e.isMetaTrader })
                    )
                );
            };
        },
    },
]);
//# sourceMappingURL=platformComponents.424fe3a2.js.map
