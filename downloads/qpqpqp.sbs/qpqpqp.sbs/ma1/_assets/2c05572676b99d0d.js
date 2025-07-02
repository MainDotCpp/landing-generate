(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4143], {

        /***/
        994944: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(564722);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var O = __c.O;
                var V4b = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : U4b(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    a5b = function(a, b) {
                        class c {
                            static A(d) {
                                O(d, {
                                    Je: o4,
                                    ola: o4
                                })
                            }
                            get Je() {
                                switch (this.ola) {
                                    case "date":
                                        return new W4b(this.xn, b.language || "en-AU");
                                    case "select":
                                        return new X4b(this.xn);
                                    case "mention":
                                        return new Y4b(this.xn);
                                    case "embed":
                                        return new Z4b(this.xn);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.ola);
                                }
                            }
                            get ola() {
                                var d;
                                return (d = this.xn.So) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.xn = (c.A(this), void 0);
                                this.xn = __c.D(a.Iv(d.sheet, d.na, d.column))
                            }
                        }
                        return $4b(d => (new c(d)).Je)
                    },
                    c5b = function() {
                        const a = p4(() => new Map, []);
                        return {
                            ufb: b => {
                                if (a.has(b)) return __c.D(a.get(b));
                                const c = b5b();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    d5b = function(a, b) {
                        return p4(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return __c.D(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    k5b = function({
                        children: a,
                        keyFrame: b,
                        q_a: c,
                        ariaLive: d,
                        YPa: e = !1,
                        i7a: f,
                        Lna: g,
                        Nbb: h,
                        MDb: k,
                        fJa: l,
                        iLa: m,
                        KDb: n,
                        gvb: p
                    }) {
                        const {
                            ufb: q
                        } = c5b(), {
                            teb: r,
                            tqb: t
                        } = e5b(b, a), u = d5b(v => () => {
                            (e === !1 || typeof e === "function" && !e(v)) && t(v)
                        }, [t, e]);
                        return q4("div", {
                            className: r4(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: q4("div", {
                                className: r4("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: v,
                                    element: x
                                }) => q4(f5b, { in: v === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(v),
                                    onExited: u(v),
                                    children: y => q4(g5b.Provider, {
                                        value: y,
                                        children: q4("div", {
                                            className: r4("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(v),
                                            "aria-hidden": y === h5b || y === i5b || y === j5b,
                                            children: v === b ? a : x
                                        })
                                    })
                                }, v)), r.every(v => v.key !== b) && q4(f5b, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : u(b),
                                    children: v => q4(g5b.Provider, {
                                        value: v,
                                        children: q4("div", {
                                            className: r4("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": v === h5b || v === i5b || v === j5b,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    e5b = function(a,
                        b) {
                        const [c, d] = l5b(() => [{
                            key: a,
                            element: b
                        }]);
                        m5b(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = s4(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            teb: c,
                            tqb: e
                        }
                    },
                    n5b = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new E(a);
                        }
                    },
                    r5b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return q4(o5b, {
                                    Qq: a.user ? b.f0(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.Jeb(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.mLa.k_.get(a.url);
                                return q4(p5b, {
                                    icon: a,
                                    Fib: c
                                });
                            case "date":
                                return a.text ? void 0 : q4(q5b, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    t5b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return q4(s5b, {
                                    selected: !!b.MXa
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    t4 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key === "Meta" || ["91",
                            "224"
                        ].includes(a.code) : !1
                    },
                    u5b = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    v5b = function(a, b, c) {
                        if (c) {
                            var d = V4b(c.images, "medium"),
                                e = V4b(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = u4(() => a.T6.set(b, e));
                                f.onerror = u4(() => a.T6.set(b, void 0));
                                !f.complete && c.complete ? a.T6.set(b, d) : c.src = ""
                            }
                        } else a.T6.set(b, void 0)
                    },
                    x5b = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Hg ? a.Hg.MGb(new w5b({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.nf.content.title;
                                        h ? (v4(() => a.E0a.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        v4(() => a.E0a.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    U4b = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.kx * __c.iQb[a],
                    w4 = __webpack_require__(519427),
                    u4 = w4.action,
                    y5b = w4.comparer,
                    o4 = w4.computed,
                    z5b = w4.observable,
                    x4 = w4.ObservableMap,
                    v4 = w4.runInAction;
                var $4b = __webpack_require__(635872).Om;
                var y4 = __webpack_require__(875604),
                    A5b = y4.createContext,
                    b5b = y4.createRef,
                    z4 = y4.memo,
                    s4 = y4.useCallback,
                    m5b = y4.useEffect,
                    B5b = y4.useLayoutEffect,
                    p4 = y4.useMemo,
                    l5b = y4.useState;
                var C5b = __webpack_require__(443763),
                    q4 = C5b.jsx,
                    D5b = C5b.jsxs;
                var E5b = __webpack_require__,
                    F5b = E5b(993864),
                    r4 = E5b.n_x(F5b)();
                var f5b = __webpack_require__(460876).Z;
                var A4 = __webpack_require__(223826),
                    j5b = A4.Wj,
                    h5b = A4.Ix,
                    i5b = A4.$r;
                var B4 = __webpack_require__(446474).Pi;
                var G5b = class {
                        static A(a) {
                            O(a, {
                                text: o4,
                                user: o4,
                                brand: o4
                            })
                        }
                        get text() {
                            return this.Je.text
                        }
                        get user() {
                            return this.Je.user
                        }
                        get brand() {
                            return this.Je.brand
                        }
                        constructor(a) {
                            this.Je = a;
                            this.type = (G5b.A(this), "mention")
                        }
                    },
                    H5b = class {
                        static A(a) {
                            O(a, {
                                text: o4,
                                url: o4
                            })
                        }
                        get text() {
                            return this.Je.text
                        }
                        get url() {
                            return this.Je.url
                        }
                        constructor(a) {
                            this.Je = a;
                            this.type = (H5b.A(this), "embed")
                        }
                    },
                    I5b = class {
                        static A(a) {
                            O(a, {
                                text: o4,
                                language: o4,
                                style: o4,
                                date: o4
                            })
                        }
                        get text() {
                            return this.Je.text
                        }
                        get language() {
                            return this.Je.language
                        }
                        get style() {
                            return this.Je.style
                        }
                        get date() {
                            return this.Je.date
                        }
                        constructor(a) {
                            this.Je =
                                a;
                            this.type = (I5b.A(this), "date")
                        }
                    },
                    J5b = class {
                        static A(a) {
                            O(a, {
                                text: o4,
                                options: o4,
                                jf: o4,
                                ZR: o4
                            })
                        }
                        get text() {
                            return this.Je.text
                        }
                        get options() {
                            return this.Je.options.map(a => a)
                        }
                        get jf() {
                            return this.Je.jf
                        }
                        get ZR() {
                            var a;
                            return (a = this.Je.options.first(b => b.id === this.Je.jf)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.Je = a;
                            this.type = (J5b.A(this), "select")
                        }
                    },
                    K5b = $4b(a => {
                        switch (a.type) {
                            case "mention":
                                return new G5b(a);
                            case "embed":
                                return new H5b(a);
                            case "date":
                                return new I5b(a);
                            case "select":
                                return new J5b(a);
                            default:
                                throw new E(a);
                        }
                    });
                var W4b = class {
                        static A(a) {
                            O(a, {
                                style: o4,
                                date: o4,
                                text: o4
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.xo.yk.type === 2 ? this.xo.yk.date : void 0) || (a = new Date, a = __c.By(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                Agb: a.getHours(),
                                xlb: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.xo.dA
                        }
                        constructor(a, b) {
                            this.xo = a;
                            this.language = b;
                            this.type = (W4b.A(this), "date")
                        }
                    },
                    L5b = class {
                        get label() {
                            return this.option.label
                        }
                        get fill() {
                            return this.option.fill
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.id =
                                b
                        }
                    },
                    X4b = class {
                        static A(a) {
                            O(a, {
                                options: o4,
                                jf: o4,
                                ZR: o4,
                                text: o4,
                                KMa: o4({
                                    equals: y5b.shallow
                                })
                            })
                        }
                        get options() {
                            return this.KMa.map((a, b) => new L5b(a, b))
                        }
                        get jf() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get ZR() {
                            var a;
                            return (a = this.options.find(b => b.id === this.jf)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.xo.dA
                        }
                        get KMa() {
                            var a, b;
                            __c.B(((a = this.xo.So) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.xo.So) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.xo = a;
                            this.type = (X4b.A(this), "select")
                        }
                    },
                    Y4b = class {
                        static A(a) {
                            O(a, {
                                FM: o4
                            })
                        }
                        get text() {
                            return this.FM ? this.FM.text : ""
                        }
                        get user() {
                            return this.FM ? this.FM.user : ""
                        }
                        get brand() {
                            return this.FM ? this.FM.brand : ""
                        }
                        get FM() {
                            if (this.xo.yk.type !== 9) return __c.B(this.xo.yk.type === 7), this.xo.yk ? this.xo.yk.value[0] : void 0
                        }
                        constructor(a) {
                            this.xo = a;
                            this.type = (Y4b.A(this), "mention")
                        }
                    },
                    Z4b = class {
                        static A(a) {
                            O(a, {
                                I_: o4
                            })
                        }
                        get text() {
                            return this.I_ ? this.I_.embed.text : ""
                        }
                        get url() {
                            return this.I_ ?
                                this.I_.embed.url : ""
                        }
                        get I_() {
                            if (this.xo.yk.type !== 9) return __c.B(this.xo.yk.type === 8), this.xo.yk ? this.xo.yk.value[0] : void 0
                        }
                        constructor(a) {
                            this.xo = a;
                            this.type = (Z4b.A(this), "embed")
                        }
                    };
                var M5b = class {
                    Zpa(a) {
                        this.cma.Zpa(a)
                    }
                    Z4(a, b) {
                        this.cma.Z4(a, b)
                    }
                    f0(a) {
                        return this.cma.f0(a)
                    }
                    Wpa(a) {
                        this.mLa.Wpa(a)
                    }
                    constructor(a, b, c, d) {
                        this.cma = a;
                        this.mLa = b;
                        this.Ua = c;
                        this.Jt = d;
                        this.XCa = new __c.TBb;
                        this.Jeb = e => __c.mMa(this.XCa, e)
                    }
                };
                var g5b = A5b(void 0);
                var N5b = Number.parseInt("300ms", 10),
                    O5b = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    P5b = z4(function({
                        Kr: a = !1,
                        children: b,
                        keyFrame: c,
                        q_a: d,
                        fJa: e = "hidden",
                        iLa: f = "hidden",
                        ariaLive: g,
                        YPa: h,
                        qHb: k = "none"
                    }) {
                        a = __c.Eb() && !a;
                        return k5b({
                            children: b,
                            keyFrame: c,
                            q_a: d,
                            ariaLive: g,
                            fJa: e,
                            iLa: f,
                            YPa: h,
                            i7a: a ? N5b : 0,
                            Nbb: r4({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            gvb: O5b
                        })
                    });
                var Q5b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var R5b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var S5b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var T5b = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var U5b = z4(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.ZR,
                            f = a.Vab,
                            g = a.B5a,
                            h = a.c6a,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = r4({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return D5b("span", {
                            className: r4(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [q4("span", {
                                className: r4("_2Lr6pQ", p),
                                children: q4("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), D5b("span", {
                                className: r4("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, q4("span", {
                                    className: r4("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? q4("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    o5b = z4(a => {
                        const b = a.backgroundColor,
                            c = a.Qq;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return q4(P5b, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? q4(__c.mQb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Qq: c,
                                borderColor: c ? void 0 : b
                            }) : q4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: T5b
                                }
                            })
                        })
                    }),
                    p5b = z4(a => {
                        const b = a.icon;
                        a = a.Fib;
                        return q4(P5b, {
                            keyFrame: b ? "favicon" : "placeholder",
                            children: b ? q4("span", {
                                className: "_tFJqA",
                                children: q4("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : q4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? S5b : R5b
                                }
                            })
                        })
                    }),
                    q5b = z4(() => q4("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: Q5b
                        }
                    })),
                    s5b = z4(({
                        selected: a
                    }) => q4("div", {
                        className: r4("whph4A", {
                            zgzjww: a
                        }),
                        children: q4(__c.pK, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    V5b = B4(a => {
                        const {
                            Je: b,
                            MXa: c,
                            pwa: d,
                            mode: e = "viewable",
                            measureRef: f,
                            tp: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.Ua(b.url) : void 0,
                            [l, m] = l5b(!1),
                            n = s4(t => m(t4(t)), [m]),
                            p = s4(t => m(!t4(t)), [m]),
                            q = s4(t => {
                                m(t4(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = s4(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        m5b(() => {
                            v4(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.Zpa(b.user);
                                        break;
                                    case "embed":
                                        d.Wpa(b.url)
                                }
                            })
                        }, [b, d]);
                        B5b(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return q4(U5b, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            Vab: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: n5b(b),
                            ZR: b.ZR,
                            B5a: r5b(b, d),
                            c6a: t5b(b, {
                                MXa: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var W5b = __c.L(() => ({
                    XHb: __c.AL(11),
                    mode: __c.F("A?", 1, "BY_USER_IDS"),
                    cwb: __c.zL(1)
                }));
                var X5b = class {
                        static A(a) {
                            O(a, {
                                hQ: z5b.shallow,
                                $La: u4
                            })
                        }
                        f0(a) {
                            return this.iHa.f0(a)
                        }
                        Zpa(a) {
                            this.WCa.has(a) || this.hQ.has(a) || (this.hQ.add(a), this.wab())
                        }
                        Z4(a, b) {
                            this.WCa.has(a) || (this.WCa.set(a, b), this.hQ.delete(a), v5b(this.iHa, a, b))
                        }
                        async $La() {
                            if (this.hQ.size !== 0) {
                                var a = [...this.hQ.values()];
                                this.hQ.clear();
                                if (this.jHa) {
                                    var b = await this.jHa;
                                    await Promise.all(u5b(a).map(async c => {
                                        const d = new W5b({
                                                cwb: c
                                            }),
                                            {
                                                JAb: e
                                            } = await b.lGb(d);
                                        v4(() => c.forEach(f => this.Z4(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.Z4(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.jHa = a;
                            this.WCa = (X5b.A(this), new x4);
                            this.hQ = new Set;
                            this.iHa = new Y5b;
                            this.wab = __c.Wc(() => this.$La(), 200);
                            v4(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.Z4(d, c))
                            })
                        }
                    },
                    Y5b = class {
                        f0(a) {
                            return this.T6.get(a)
                        }
                        constructor() {
                            this.T6 = new x4
                        }
                    };
                var w5b = __c.L(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Y("extension", 3),
                    EXa: __c.vL("revision", 5),
                    version: __c.vL("version", 2),
                    FHb: __c.vL("imagesetsLimit", 6)
                }));
                var Z5b = class {
                    static A(a) {
                        O(a, {
                            qdb: u4
                        })
                    }
                    async qdb(a) {
                        if (this.Hg) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await x5b(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.Hg = a;
                        this.E0a = (Z5b.A(this), new x4);
                        this.promises = new Map
                    }
                };
                var $5b = class {
                    static A(a) {
                        O(a, {
                            k_: z5b.shallow
                        })
                    }
                    async Wpa(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.Jt) === null || d === void 0 ? void 0 : d.o8(a));
                            c = e === null || e === void 0 ? void 0 : e.pdb
                        } catch (e) {}
                        c ? (b.src = c, b.onload = u4(() => this.k_.set(a, c)), b.onerror = u4(() => this.k_.set(a, void 0))) : v4(() => this.k_.set(a, void 0))
                    }
                    constructor(a) {
                        this.Jt = a;
                        this.k_ = ($5b.A(this), new Map)
                    }
                };
                __c.VIa = {
                    Ahb: function(a) {
                        const b = a.document,
                            c = a.Hg,
                            d = a.Ua,
                            e = a.Jt;
                        var f = a.H8;
                        const g = a.ld,
                            h = a.mz,
                            k = a.YW;
                        a = a.QHb;
                        f = new X5b(a === null || a === void 0 ? void 0 : a(), f);
                        a = new $5b(e);
                        new Z5b(c);
                        const l = new M5b(f, a, d, e),
                            m = a5b(k, b);
                        g.cq.Bka = B4(({
                            item: p,
                            measureRef: q
                        }) => {
                            const r = p4(() => K5b(p.Je), [p.Je]);
                            return q4(V5b, {
                                Je: r,
                                pwa: l,
                                measureRef: q
                            })
                        });
                        const n = B4(({
                            context: p,
                            tp: q
                        }) => {
                            const r = p4(() => __c.D(m(p.container)), [p]);
                            B5b(q, [q, p.container.column.width]);
                            return q4(V5b, {
                                Je: r,
                                pwa: l,
                                tp: q
                            })
                        });
                        h.rFa = ({
                                context: p,
                                tp: q
                            }) =>
                            ({
                                type: "react",
                                node: q4(n, {
                                    context: p,
                                    tp: q
                                })
                            });
                        return {
                            pwa: l
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/2c05572676b99d0d.js.map