(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [86783], {

        /***/
        910906: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var Sbc = function(a) {
                        return Rbc(function(b) {
                            return G6("div", {
                                className: "gcYy_A",
                                children: G6(__c.gH, {
                                    y_: "both",
                                    children: ({
                                        width: c,
                                        height: d
                                    }) => G6(a.fi, {
                                        fill: b.fill,
                                        Cb: c,
                                        Xb: d,
                                        Oe: void 0,
                                        animation: void 0,
                                        nC: !1,
                                        Y: void 0,
                                        fa: void 0
                                    })
                                })
                            })
                        })
                    },
                    Tbc = function(a) {
                        a.jL && (a.jL(), a.jL = null);
                        const b = a.props.sbb;
                        b.forEach(c => {
                            window.addEventListener(c, a.HFa)
                        });
                        a.jL = () => {
                            b.forEach(c => {
                                window.removeEventListener(c, a.HFa)
                            })
                        }
                    },
                    Zbc = function(a) {
                        return Ubc(function(b) {
                            const [{
                                store: c,
                                za: d
                            }] = Vbc(() => {
                                const e = new Wbc,
                                    f = new Xbc(e);
                                return {
                                    store: e,
                                    za: f
                                }
                            });
                            return G6(Ybc, {
                                o3: d.reset,
                                children: G6(__c.$ub, {
                                    Khb: d,
                                    Lhb: c,
                                    FPa: a.Dv.contains(b.url),
                                    children: ({
                                        Do: e
                                    }) => G6(__c.VA, {
                                        url: b.url,
                                        store: a.Dv,
                                        jo: a.Jt,
                                        Wx: a.Wx,
                                        $m: a.$m,
                                        Do: e,
                                        HB: b.HB,
                                        JU: b.JU
                                    })
                                })
                            })
                        })
                    },
                    $bc = function(a) {
                        return Rbc(function(b) {
                            return G6("div", {
                                className: "oUJNhQ",
                                children: G6(a.qe, {
                                    text: b.text,
                                    animation: void 0,
                                    xd: void 0,
                                    qb: void 0,
                                    Ua: void 0,
                                    rg: [],
                                    writingMode: 1
                                })
                            })
                        })
                    },
                    G6 = __webpack_require__(443763).jsx;
                var H6 = __webpack_require__(875604),
                    acc = H6.Component,
                    Rbc = H6.memo,
                    Vbc = H6.useState;
                var bcc = __webpack_require__(519427),
                    I6 = bcc.action,
                    ccc = bcc.observable;
                var Ubc = __webpack_require__(446474).Pi;
                var dcc = class extends acc {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            Zpb: c,
                            vea: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.x6a;
                            return f
                        }, {}));
                        return G6(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.vea && Tbc(this)
                    }
                    componentDidUpdate() {
                        this.props.vea && Tbc(this)
                    }
                    componentWillUnmount() {
                        this.jL && (this.jL(), this.jL = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.Vka = this.jL = null;
                        this.x6a = b => {
                            this.Vka = b.nativeEvent
                        };
                        this.HFa = b => {
                            const c = this.props.vea,
                                d = this.Vka === b;
                            c && !d &&
                                c(b);
                            this.Vka = null
                        }
                    }
                };
                var Ybc = a => G6(dcc, {
                    Zpb: ["onMouseDown", "onTouchStart"],
                    sbb: ["mousedown", "touchstart"],
                    vea: a.o3,
                    children: a.children
                });
                var Wbc = class {
                        static A(a) {
                            __c.O(a, {
                                Do: ccc.ref
                            })
                        }
                        constructor() {
                            this.Do = (Wbc.A(this), !0)
                        }
                    },
                    Xbc = class {
                        static A(a) {
                            __c.O(a, {
                                onDoubleClick: I6.bound,
                                onTouchEnd: I6.bound,
                                reset: I6.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.Do = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.KP ? (window.clearTimeout(this.KP), this.KP = void 0, this.store.Do = !1) : this.KP = window.setTimeout(() => this.KP = void 0, 300))
                        }
                        reset() {
                            this.store.Do = !0
                        }
                        QR() {
                            this.KP && window.clearTimeout(this.KP)
                        }
                        constructor(a) {
                            this.store = a;
                            this.KP = (Xbc.A(this), void 0)
                        }
                    };
                __c.ISa = {
                    Hhb: function(a) {
                        const b = Zbc({
                                Wx: (e, f) => a.F.error(e, {
                                    ue: "widget: ",
                                    extra: new Map(Object.entries(f))
                                }),
                                $m: a.$m,
                                Dv: a.Dv,
                                Jt: a.Jt
                            }),
                            c = $bc({
                                qe: a.qe
                            }),
                            d = Sbc({
                                fi: a.lf
                            });
                        return {
                            Z4a: b,
                            aFa: c,
                            fL: d
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/da4710e2b5975f8e.js.map