(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [49222], {

        /***/
        78999: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(841629);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var B = __c.B;
                var Z7b = function(a, b, c, d) {
                        c = new Y7b(c, d);
                        B(a.count() === 1, "Only single widget root element is supported");
                        a = a.first();
                        B(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.hja(a, b)
                    },
                    a8b = function(a) {
                        return { ...__c.FQ,
                            ...m5,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.aja.width,
                                height: a.aja.height
                            },
                            fb: a.fb.map($7b)
                        }
                    },
                    b8b = function(a) {
                        switch (a.xC) {
                            case 0:
                                var b = __c.pl.mc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? a.lineHeight *
                                        1E3 : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.Qf("color", a.color);
                                b = b.Bb(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.EJ,
                                    ...n5,
                                    ...m5,
                                    ya: (c = a.ya) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    Cg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.EJ,
                                    ...n5,
                                    ...m5,
                                    text: b,
                                    Cg: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    r5 = function({
                        content: a,
                        fill: b,
                        border: c,
                        X: d
                    }) {
                        b = { ...__c.Aib,
                            fill: o5(b),
                            border: p5(c),
                            X: q5(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: a8b(a)
                                };
                            case "text":
                                return { ...b,
                                    element: b8b(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: c8b(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    c8b = function({
                        cells: a,
                        border: b,
                        fill: c,
                        X: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.Bib,
                            ...n5,
                            ...m5,
                            J: n5.width,
                            W: n5.height,
                            fill: o5(c),
                            border: p5(b),
                            direction: 1,
                            X: q5(d),
                            cells: new Map(a.map(k => [k.id, r5(k)])),
                            behavior: {
                                rules: [{
                                    Qg: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        ih: d8b(a)
                                    }
                                }]
                            },
                            Qd: void 0
                        }
                    },
                    d8b = function(a) {
                        return new Map(a.map(b => [b.id, e8b(b)]))
                    },
                    e8b = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.OEa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.DQ,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    p5 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.TC,
                            all: a ? { ...__c.sQ,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                Ie: !0
                            } : void 0
                        }
                    },
                    q5 = function(a) {
                        return { ...__c.CQ,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    $7b = function(a) {
                        return { ...__c.Pib,
                            ...a,
                            fill: o5(a.fill),
                            stroke: f8b(a.stroke)
                        }
                    },
                    f8b = function(a) {
                        return a ? { ...__c.sQ,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    o5 = function(a) {
                        var b;
                        const c = { ...__c.tu,
                            ya: (b = a === null || a === void 0 ? void 0 : a.ya) !== null && b !== void 0 ? b : 0
                        };
                        switch (a === null || a === void 0 ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    $a: a.$a
                                };
                            case void 0:
                                return c;
                            default:
                                throw new E(a);
                        }
                    },
                    l8b = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        g8b(a.cells, c, (e, f) => {
                            let g = !1;
                            h8b(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, r5(f));
                                g = !0
                            });
                            g || (s5(e.fill, f.fill), i8b(e.border, f.border), j8b(e.X, f.X))
                        }, e => r5(e));
                        k8b(a.behavior, b, c);
                        s5(a.fill, b.fill);
                        j8b(a.X, b.X);
                        i8b(a.border, b.border);
                        var d;
                        a.ya = (d = b.ya) !== null && d !== void 0 ? d : 0
                    },
                    k8b = function(a, b, c) {
                        t5(a.rules, [b], d => {
                            m8b(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                                (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            m8b(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            g8b(d.grid.ih, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd =
                                    n;
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.pa = k === null || k === void 0 ? void 0 : k.pa, g.padding.Ha = k === null || k === void 0 ? void 0 : k.Ha, g.padding.ra = k === null || k === void 0 ? void 0 : k.ra, g.padding.La = k === null || k === void 0 ? void 0 : k.La);
                                g.alignSelf = p
                            }, g => e8b(g))
                        }, d => {
                            var e, f;
                            return {
                                Qg: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    ih: d8b(d.cells)
                                }
                            }
                        })
                    },
                    n8b = function(a, b) {
                        t5(a.fb, b.fb, (e, f) => {
                            e.d = f.d;
                            s5(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(f8b(f.stroke))
                        }, e => $7b(e));
                        const {
                            viewBox: c,
                            width: d
                        } = a8b(b);
                        a.width = d;
                        __c.st(a.viewBox).equals(__c.st(c)) || (a.viewBox = c)
                    },
                    h8b = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? n8b(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && __c.pl.domain.Pb(__c.pl.ia(a.text), b8b(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? l8b(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    g8b = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    t5 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    s5 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.$a.set(void 0);
                                var c;
                                a.ya = (c = b.ya) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.$a.ref && __c.t9a.domain.Pb(a.$a.ref, b.$a)) break;
                                a.color = void 0;
                                a.$a.set(b.$a);
                                var d;
                                a.ya = (d = b.ya) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.$a.set(void 0)
                        }
                    },
                    j8b = function(a, b) {
                        b = q5(b);
                        a.all = b.all;
                        a.qD = b.qD;
                        a.oD = b.oD;
                        a.pD = b.pD;
                        a.nD = b.nD
                    },
                    i8b = function(a, b) {
                        b = p5(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.UC.domain.Pb(__c.UC.ia(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    m8b = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    p8b = function(a, b, c, d) {
                        let e = a.iXa.get(b);
                        if (e) return e;
                        e = {
                            Hx: new o8b(c.ww, b, d, c.Yra),
                            NGa: void 0,
                            OQa: void 0,
                            QSa: __c.mV.mode
                        };
                        a.iXa.set(b, e);
                        return e
                    },
                    r8b = function(a, b, c, d, e) {
                        var f, g;
                        e = p8b(a, c, b, e);
                        const h = e.Hx,
                            k = e.OQa,
                            l = e.NGa,
                            m = e.QSa;
                        c = __c.xP.ia(c);
                        const n = ((f = (g = a.Pz).ira) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.mV;
                        h.Vj === k && q8b.structural(c, l) && n.mode === m || (e.NGa = c, e.OQa = h.Vj, e.QSa = n.mode, b = b.render(h, n), a.Blb.update(d, b), Z7b(d, b, (p, q) => a.lQ.msa.set(p, q), (p, q, r) => a.lQ.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    u8b = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.qmb());
                        c.push(s8b(() => {
                            a: {
                                var e = new t8b;
                                for (const f of b)
                                    if (e.oQ(f), e.gqa) {
                                        e = e.gqa;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.ac.isLoaded(e) || a.gta.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) B(f.type === "layout"), a.Jk.bga(f);
                                d()
                            }
                        }));
                        return d
                    },
                    v8b = function(a, b) {
                        return {
                            JD: ({
                                Pf: c
                            }) => {
                                var d;
                                const {
                                    Hx: e
                                } = p8b(a.renderer, c, b, a.B2), f = __c.ueb.create([]), g = [];
                                g.push(u8b(a.Wdb, f));
                                g.push(s8b(() => {
                                    var k, l;
                                    return [(k = (l = a.Pz).ira) === null || k === void 0 ? void 0 : k.call(l, f), __c.xP.ia(c),
                                        e.Vj
                                    ]
                                }, () => {
                                    r8b(a.renderer, b, c, f, a.B2)
                                }, {
                                    fireImmediately: !0,
                                    equals: q8b.structural
                                }));
                                const h = (d = b.Kua) === null || d === void 0 ? void 0 : d.call(b, {
                                    Hx: e
                                });
                                h && g.push(h);
                                return {
                                    Pa: f,
                                    hw: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    u5 = __webpack_require__(519427),
                    q8b = u5.comparer,
                    w8b = u5.computed,
                    v5 = u5.observable,
                    s8b = u5.reaction,
                    x8b = u5.runInAction;
                var y8b = class {
                    static A(a) {
                        __c.O(a, {
                            dob: v5.ref,
                            lfb: v5.ref
                        })
                    }
                    constructor() {
                        this.ira = (y8b.A(this), void 0)
                    }
                };
                var z8b = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    o8b = class {
                        static A(a) {
                            __c.O(a, {
                                Ne: w8b
                            })
                        }
                        get PQa() {
                            var a = this.B2,
                                b = this.Pf,
                                c = this.Yra;
                            let d = a.sources.get(b);
                            d || (d = v5.box(c), a.sources.set(b, d));
                            return d
                        }
                        get Vj() {
                            return this.PQa.get()
                        }
                        get Ne() {
                            return this.ww.Nu({
                                type: "dict",
                                value: this.Pf
                            })
                        }
                        gm(a) {
                            this.PQa.set(a instanceof Function ? { ...this.Vj,
                                ...a()
                            } : { ...this.Vj,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            this.ww = a;
                            this.Pf = b;
                            this.B2 = c;
                            this.Yra = d;
                            o8b.A(this)
                        }
                    };
                var Y7b = class {
                    h7(a, b) {
                        this.XWa(a, b);
                        b.ref && this.lxa(a, b.ref, b.key)
                    }
                    rQ(a, b) {
                        b.ref && this.lxa(a.text, b.ref, b.key)
                    }
                    zDa(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                B(a.element.type === "shape");
                                this.h7(a.element, b.content);
                                break;
                            case "text":
                                B(a.element.type === "text");
                                this.rQ(a.element, b.content);
                                break;
                            case "layout":
                                B(a.element.type === "layout");
                                this.hja(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    hja(a, b) {
                        this.XWa(a, b);
                        b.ref && this.lxa(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), B(!!d && !!a), this.zDa(d, a)
                    }
                    constructor(a, b) {
                        this.XWa = a;
                        this.lxa = b
                    }
                };
                var m5 = {
                        locked: !0,
                        gk: {
                            nZ: !1,
                            pW: !1
                        },
                        Uh: !0
                    },
                    n5 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var A8b = class {
                    constructor(a) {
                        this.Jk = a;
                        this.update = (b, c) => {
                            t5(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        l8b(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...c8b(d),
                                            ...m5,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            J: d.minWidth,
                                            W: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new E(d.type);
                                }
                                return d
                            });
                            for (const d of b) B(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.J = c.minWidth, d.W = c.minHeight, c.direction && (d.direction = c.direction), this.Jk.bga(d)
                        }
                    }
                };
                var B8b = class {
                    constructor(a, b, c) {
                        this.Blb = a;
                        this.lQ = b;
                        this.Pz = c;
                        this.iXa = new WeakMap
                    }
                };
                var C8b = class {
                        static A(a) {
                            __c.O(a, {
                                gta: v5.shallow
                            })
                        }
                        constructor(a, b) {
                            this.ac = a;
                            this.Jk = b;
                            this.gta = (C8b.A(this), new Set);
                            this.qqa = new Set;
                            this.qmb = () => {
                                this.Saa || (this.Saa = __c.hja(this.ac).subscribe(d => {
                                    x8b(() => {
                                        this.gta.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.qqa.add(c);
                                return () => {
                                    this.qqa.delete(c);
                                    this.qqa.size <= 0 && this.Saa && (this.Saa.unsubscribe(), this.Saa = void 0)
                                }
                            }
                        }
                    },
                    t8b = class extends __c.rB {
                        oQ(a, b) {
                            this.gqa || super.oQ(a, b)
                        }
                        rQ(a) {
                            this.gqa = (a = a.text.Ot("font-family")["font-family"].values().next().value) &&
                                __c.Oq(a).id
                        }
                    };
                var D8b = !1,
                    E8b = class {
                        register(a, b) {
                            this.DD.has(a) || (this.DD.set(a, b), D8b || (__c.yP.set(a, v8b(this, b)), D8b = !0))
                        }
                        get(a) {
                            return this.DD.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.B2 = b;
                            this.Pz = c;
                            this.ac = d;
                            this.Jk = e;
                            this.DD = new Map;
                            this.Wdb = new C8b(this.ac, this.Jk)
                        }
                    };
                var F8b = class {
                        constructor() {
                            this.msa = new __c.OE;
                            this.refs = new __c.OE
                        }
                    },
                    G8b = class {
                        getContext(a) {
                            return this.lQ.refs.get(a)
                        }
                        QM(a) {
                            return this.lQ.msa.get(a)
                        }
                        constructor(a, b, c) {
                            this.lQ = a;
                            this.B2 = b;
                            this.renderer = c
                        }
                    };
                __c.FSa = {
                    Jhb: function(a) {
                        const b = new y8b,
                            c = new F8b,
                            d = new B8b(new A8b(a.Jk), c, b),
                            e = new z8b;
                        a = new E8b(d, e, b, a.ac, a.Jk);
                        return {
                            Pz: b,
                            AQb: new G8b(c, e, d),
                            k7: a,
                            lQ: c
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/33078551d9275d5e.js.map