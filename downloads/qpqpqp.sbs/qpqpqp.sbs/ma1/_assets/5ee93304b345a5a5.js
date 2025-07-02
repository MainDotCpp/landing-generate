(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [35024], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var xG = __c.xG;
                var Rc = __c.Rc;
                var O = __c.O;
                var st = __c.st;
                var N = __c.N;
                var gw = __c.gw;
                var Vs = __c.Vs;
                var D = __c.D;
                var E = __c.E;
                var C4 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.WR(b.reference.ii);
                                a = a.EV(b.reference.ui);
                                return c != null && a != null;
                            case 1:
                                return a.WR(b.reference.ii) != null;
                            case 2:
                                return a.EV(b.reference.ui) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    a6b = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.ba.length > 0) return !1;
                                a = a.uF(c.NY.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.JC(new __c.MC, a.BH).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return C4(b, d);
                                        case 1:
                                            return C4(b,
                                                d.start) && C4(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    b6b = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.na;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.Yb === c : g.span.Xc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.pa : c === null || c === void 0 ? void 0 : c.Ha) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: D(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.Hpa, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.PXa, h = h.na === k.na && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.rc === c.rc && g.rc === 0 ? g.Hpa = f : e.push({
                                            PXa: k,
                                            utb: l,
                                            Hpa: f,
                                            color: c.color,
                                            weight: c.weight,
                                            rc: c.rc
                                        })
                                    }
                            }
                        return e
                    },
                    c6b = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.na,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.Vb === h : d.span.Ic === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.ra : d === null || d === void 0 ? void 0 : d.La) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            na: g,
                                            boundary: "start"
                                        } : {
                                            na: D(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.EIa, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.Lpa, k = k.na === m.na && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.rc === d.rc && h.rc === 0 ? h.Lpa = g : f.push({
                                            EIa: l,
                                            Ftb: m,
                                            Lpa: g,
                                            color: d.color,
                                            weight: d.weight,
                                            rc: d.rc
                                        })
                                    }
                            }
                        return f
                    },
                    d6b = function(a, b, c, d, e) {
                        const f =
                            a.KZa.v$a(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                u = f.get(r) || 0;
                            return t <= u ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.Ub(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.Ub(d[0].na)) && e.push({
                            na: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].na)) && e.push({
                            na: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.Ub(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.na : void 0;
                                k = l ? b.layout.rows.Ub(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.La : m === null || m === void 0 ? void 0 : m.ra;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Ha : m === null || m === void 0 ?
                                    void 0 : m.pa;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.La : n === null || n === void 0 ? void 0 : n.ra;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ha : l === null || l === void 0 ? void 0 : l.pa;
                                p = __c.WFa({
                                    pa: n,
                                    Ha: k,
                                    ra: l,
                                    La: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: u,
                                    width: v
                                } = (t === null || t === void 0 ? void 0 : t.rc) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(D4(q, r), __c.kD(p, u / 2, v / 2))
                            }
                        }
                        return g
                    },
                    e6b = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = b6b(b, c, d, e);
                        f = c6b(b, c, d, e, f);
                        const h = d6b(a, b, c, d, e),
                            k = a.xfb(b),
                            l = a.Peb(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.utb,
                                t = n.Hpa,
                                u = n.PXa;
                            const v = n.color,
                                x = n.weight;
                            n = n.rc;
                            const y = m ? -1 : 1,
                                A = (p = h.get(D4(r, u))) === null || p === void 0 ?
                                void 0 : p.La;
                            p = (q = h.get(D4(t, u))) === null || q === void 0 ? void 0 : q.ra;
                            if (A != null && p != null) {
                                q = D(k.get(u.na));
                                var z = D(l.get(r.column));
                                r = D(l.get(t.column));
                                u = u.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: v,
                                    weight: x,
                                    rc: n,
                                    p1: new Vs(q + A * y, u),
                                    p2: new Vs(t + p * y, u),
                                    ...__c.pD((t - q) * y, n * x, A)
                                }
                            }
                        }).filter(__c.Hb);
                        return [...f.map(n => {
                            var p, q, r = n.EIa,
                                t = n.Ftb,
                                u = n.Lpa;
                            const v = n.color,
                                x = n.weight;
                            n = n.rc;
                            const y = (p = h.get(D4(r, t))) === null || p === void 0 ? void 0 : p.Ha;
                            p = (q = h.get(D4(r,
                                u))) === null || q === void 0 ? void 0 : q.pa;
                            if (y != null && p != null) {
                                q = D(l.get(r.column));
                                var A = D(k.get(t.na));
                                t = D(k.get(u.na));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = A.start;
                                u = u.boundary === "start" ? t.start : t.end;
                                return {
                                    color: v,
                                    weight: x,
                                    rc: n,
                                    p1: new Vs(r, q + y),
                                    p2: new Vs(r, u + p),
                                    ...__c.pD(u - q, n * x, y)
                                }
                            }
                        }).filter(__c.Hb), ...a]
                    },
                    f6b = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.ud(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.ud(d, e => `${e.tk}_${e.uk}`);
                            for (const [, e] of a) {
                                const {
                                    uk: f,
                                    tk: g
                                } = e[0];
                                a = __c.ud(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    tk: g,
                                    uk: f
                                })
                            }
                        }
                        return b
                    },
                    g6b = function(a, b, c, d) {
                        var e = __c.wzb;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                na: k,
                                boundary: "start"
                            }, {
                                na: k,
                                boundary: "end"
                            }] : [{
                                na: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                column: k,
                                boundary: "start"
                            }, {
                                column: k,
                                boundary: "end"
                            }] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h = new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ?
                                e.KZa.Tqb(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = e6b(e, a, h, f, g, d);
                        return f6b(c)
                    },
                    E4 = function() {
                        const [a] = (0, __c.wb)(() => gw());
                        return a
                    },
                    h6b = function(a) {
                        switch (a) {
                            case 2:
                                return N("ibdecg");
                            case 7:
                                return N("446quA");
                            case 5:
                                return N("j1fbqg");
                            case 1:
                                return N("O5i4AQ");
                            case 6:
                                return N("C0VHsg");
                            case 4:
                                return N("9ND0kg");
                            case -1:
                                return N("RWqnLA");
                            case 9:
                                return N("nQR/7w");
                            case -2:
                                return N("P23rtA");
                            case 3:
                                return N("+IXmVg");
                            default:
                                throw new E(a);
                        }
                    },
                    i6b = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    j6b = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.zzb)(a) / 2 : -(0, __c.xzb)(a) / 2,
                            c = -(0, __c.yzb)(a) / 2,
                            d = a.width + (0, __c.xzb)(a) / 2 + (0, __c.zzb)(a) / 2;
                        a = a.height + (0, __c.yzb)(a) / 2 + (0, __c.Azb)(a) / 2;
                        return st({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    k6b = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.M)(a, { ...b
                            })
                        })
                    },
                    m6b = function(a) {
                        var b;
                        const c = a.mz;
                        var d = a.content;
                        const e = a.context;
                        a = a.tp;
                        __c.B((d === null || d === void 0 ? void 0 : (b = d.gg) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.yk;
                        const f = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        switch (b.type) {
                            case 9:
                                d = f;
                                break;
                            case 6:
                                var g;
                                d = (g = c.zka) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.He(__c.Vbb, { ...__c.Cib,
                                        value: b.value
                                    }),
                                    context: e,
                                    tp: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = l6b(c, e, d.dA, d.yk.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: F4(__c.rR, {
                                        label: h6b(b.error),
                                        children: F4(__c.jx, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: F4(__c.DJb, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new E(b);
                        }
                        return d !== null && d !== void 0 ? d : f
                    },
                    l6b = function(a, b, c, d) {
                        var e;
                        return (e = a.Cka) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    p6b = function(a) {
                        const b = a.mz,
                            c = a.lf,
                            d = a.qub,
                            e = a.Ua;
                        b.Cka = f => __c.dNa({ ...f,
                            Ua: e
                        });
                        b.qFa = f => m6b({ ...f,
                            mz: b
                        });
                        b.zka = k6b(n6b({
                            lf: c,
                            MQ: void 0
                        }));
                        b.sFa = o6b(d, e);
                        b.tFa = k6b(f => F4(G4, { ...f,
                            Ua: e
                        }))
                    },
                    q6b = function({
                        label: a,
                        Ta: b,
                        width: c,
                        height: d,
                        scale: e,
                        NIa: f
                    }) {
                        return F4("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: H4(__c.gx, {
                                className: I4("ivlMMQ", J4(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && F4(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    J4 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    s6b = function({
                        zd: a,
                        bOa: b,
                        scale: c,
                        Yo: d,
                        Zo: e,
                        v3a: f
                    }) {
                        const g = K4(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.aD(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return F4(__c.hx, {
                            mq: "light",
                            light: "light",
                            qt: "light",
                            dark: "light",
                            children: m => F4("div", {
                                className: I4("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: F4("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: I4("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.hm,
                                    children: F4(__c.vR, {
                                        className: I4("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: N("ruWN9A"),
                                        children: F4(r6b, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    u6b = function() {
                        const a = new t6b,
                            b = new __c.WR,
                            c = L4(f => {
                                const {
                                    scale: g = 1,
                                    XNa: h,
                                    size: k =
                                        "small",
                                    v3a: l = !0
                                } = f, m = M4(n => a.Zo({
                                    scale: n,
                                    size: k,
                                    Zta: h
                                }), [k, h]);
                                return F4(s6b, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    zd: f.sheet.direction === "rtl",
                                    bOa: f.selection != null && a.Nib(f.sheet, f.selection),
                                    Zo: m,
                                    v3a: l
                                })
                            }),
                            d = L4(f => {
                                const {
                                    scale: g = 1,
                                    XNa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    zrb: n
                                } = f, p = M4(v => a.Zo({
                                    scale: v,
                                    size: k,
                                    Zta: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = M4(v => m != null && a.cya(m).has(v), [m]), t = M4(v => m != null && a.wgb(l, m).has(v), [l, m]), u = M4(v => {
                                    const x = n != null && l.layout.cols.je(v, n.Vb) >= 0 && l.layout.cols.je(v, n.Ic) <=
                                        0;
                                    return r(v) ? x ? "secondary-active" : "primary-active" : t(v) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return F4(N4, { ...f,
                                    nd: g,
                                    Dd: q,
                                    Zo: p,
                                    qE: u,
                                    fF: b
                                })
                            }),
                            e = L4(f => {
                                const {
                                    scale: g = 1,
                                    XNa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    zrb: n
                                } = f, p = M4(v => a.Zo({
                                    scale: v,
                                    size: k,
                                    Zta: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = M4(v => m != null && a.eya(m).has(v), [m]), t = M4(v => m != null && a.xgb(l, m).has(v), [l, m]), u = M4(v => {
                                    const x = n != null && l.layout.rows.je(v, n.Yb) >= 0 && l.layout.rows.je(v, n.Xc) <= 0;
                                    return r(v) ?
                                        x ? "secondary-active" : "primary-active" : t(v) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return F4(O4, { ...f,
                                    nd: q,
                                    Dd: g,
                                    Zo: p,
                                    qE: u,
                                    fF: b
                                })
                            });
                        return {
                            Z3a: c,
                            Y3a: d,
                            $3a: e
                        }
                    },
                    v6b = function(a) {
                        const b = a.Wp,
                            c = () => null;
                        return __c.qw(d => F4(P4, { ...d,
                            Wp: b,
                            Gh: c
                        }))
                    },
                    w6b = function({
                        sheet: a,
                        Y: b,
                        range: c,
                        Id: d
                    }) {
                        Q4(() => R4(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.ra(c.Vb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.pa(c.Yb) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    z6b = function({
                        onScroll: a
                    }) {
                        const b = new x6b(a);
                        return {
                            fC: b,
                            kka: L4(c => F4(y6b, {
                                sheet: c.sheet,
                                fC: b,
                                children: c.children
                            }))
                        }
                    },
                    C6b = function(a) {
                        const b = a.Wp,
                            c = a.qe,
                            d = a.MZa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                fC: f,
                                kka: g
                            } = z6b({
                                onScroll: a.onScroll
                            });
                        class h extends A6b {
                            get hL() {
                                const k = this.props.fa.Lx;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new E(k);
                                }
                            }
                            componentDidMount() {
                                d.tZa(this.props.item, {
                                    Rb: this.props.Rb,
                                    fa: this.props.fa
                                })
                            }
                            componentWillUnmount() {
                                d.j9a(this.props.item, {
                                    Rb: this.props.Rb,
                                    fa: this.props.fa
                                })
                            }
                            render() {
                                d.tZa(this.props.item, {
                                    Rb: this.props.Rb,
                                    fa: this.props.fa
                                });
                                return F4(B6b, { ...this.props,
                                    Y: this.Y,
                                    Wp: b,
                                    hL: this.hL,
                                    Gh: this.Gh,
                                    MZa: d,
                                    fC: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.Y = S4(() => {
                                    const l = this.props.item;
                                    var m = this.props.fa,
                                        n = m.Lx;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.Bfb(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.zD(l,
                                                n.Rb, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.Gh = L4(l => F4("div", {
                                    className: "wKvivQ",
                                    children: F4(__c.lNa, { ...this.props,
                                        ...l,
                                        qe: c
                                    })
                                }))
                            }
                        }
                        return {
                            V5a: h,
                            fC: f
                        }
                    },
                    D6b = function(a, b) {
                        if (b != null && b.Vb != null && b.Yb != null && b.Ic != null && b.Xc != null) {
                            var c = a.ra(b.Vb),
                                d = a.pa(b.Yb),
                                e = a.ra(b.Ic) + b.Ic.width - c;
                            a = a.pa(b.Xc) + b.Xc.height - d;
                            return st({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    F6b = function(a) {
                        const b = a.Wp,
                            c = () => null;
                        return d => F4(E6b, { ...d,
                            Wp: b,
                            Gh: c
                        })
                    },
                    J6b = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                bIa: b,
                                rv: b,
                                Ja: {},
                                xn: {}
                            },
                            d = T4(() => a.wz.style || c, h => {
                                var k;
                                Object.assign(a.o9.style, h.bIa);
                                Object.assign(a.DL.style, h.rv);
                                Object.assign(a.xD.style, h.Ja);
                                Object.assign(a.ED.style, h.xn);
                                h = h === null || h === void 0 ? void 0 : (k = h.Ja) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.xD.classList.toggle("OQx3PQ", h === "underline");
                                a.xD.classList.toggle("_99ezUA", h === "line-through");
                                a.xD.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: G6b
                            }),
                            e = T4(() => a.Ssa, h => {
                                a.xD.classList.toggle("_84KvRA", !h);
                                a.o9.classList.toggle("_84KvRA", !h);
                                a.DL.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = T4(() => a.renderer, h => {
                                a.Z9 && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.Z9 = void 0, a.b4.remove()) : a.ED.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.Z9 = H6b(h.node, a.b4);
                                        a.ED.appendChild(a.b4);
                                        break;
                                    case "dom":
                                        h.render(a.ED);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.Sua()
                            }, {
                                fireImmediately: !0
                            }),
                            g = I6b ? T4(() => a.tra, h => {
                                a.xD.classList.toggle("qxD1GA", h)
                            }, {
                                fireImmediately: !0
                            }) :
                            void 0;
                        return () => {
                            d();
                            e();
                            f();
                            g === null || g === void 0 || g()
                        }
                    },
                    G6b = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    L6b = function(a) {
                        const b = a.nz,
                            c = a.mC,
                            d = a.NC,
                            e = a.R2a,
                            f = a.hy,
                            g = new K6b(c),
                            h = (k, l) => f ? a6b(f, k, l) : !1;
                        return k => F4(U4, { ...k,
                            vN: h,
                            NC: d,
                            mC: c,
                            nz: b,
                            psa: g,
                            R2a: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    D4 = (a, b) => `${a.column.id}-${a.boundary}:${b.na.id}-${b.boundary}`,
                    n6b = ({
                        lf: a,
                        MQ: b
                    }) => c => (0, __c.M)(__c.Czb, { ...c,
                        lf: a,
                        MQ: b
                    }),
                    V4 = __webpack_require__(443763),
                    M6b = V4.Fragment,
                    F4 = V4.jsx,
                    H4 = V4.jsxs;
                var N6b = __webpack_require__,
                    O6b = N6b(993864),
                    I4 = N6b.n_x(O6b)();
                var L4 = __webpack_require__(446474).Pi;
                var W4 = __webpack_require__(875604),
                    X4 = W4.Component,
                    A6b = W4.PureComponent,
                    M4 = W4.useCallback,
                    Q4 = W4.useEffect,
                    P6b = W4.useLayoutEffect,
                    K4 = W4.useMemo,
                    Y4 = W4.useRef;
                var Z4 = __webpack_require__(519427),
                    $4 = Z4.action,
                    R4 = Z4.autorun,
                    a5 = Z4.comparer,
                    S4 = Z4.computed,
                    Q6b = Z4.createAtom,
                    b5 = Z4.observable,
                    T4 = Z4.reaction,
                    R6b = Z4.untracked;
                var c5 = __webpack_require__(635872),
                    d5 = c5.Om,
                    S6b = c5.kq,
                    T6b = c5.YN;
                var e5 = __webpack_require__(937763)._;
                var f5 = __webpack_require__(161563)._;
                var U6b = __webpack_require__(358579).Z;
                var H6b = __webpack_require__(36281).createPortal;
                var V6b = class {
                        static A(a) {
                            O(a, {
                                viewBox: b5.ref
                            })
                        }
                        constructor() {
                            this.viewBox = (V6b.A(this), st({
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            }));
                            this.Dsb = a => {
                                this.viewBox.equals(a) || (this.viewBox = a)
                            }
                        }
                    },
                    W6b = L4(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const e = Y4(new V6b),
                            f = $4(() => {
                                if (a.bja) {
                                    var h = a.bja.current;
                                    h && e.current.Dsb(st({
                                        top: h.scrollTop,
                                        left: h.scrollLeft,
                                        height: h.clientHeight,
                                        width: h.clientWidth
                                    }))
                                }
                            });
                        Q4(() => {
                            var h, k;
                            f();
                            (h = a.bja.current) === null || h === void 0 || h.addEventListener("scroll",
                                f);
                            (k = window) === null || k === void 0 || k.addEventListener("resize", f);
                            return () => {
                                var l, m;
                                (l = a.bja.current) === null || l === void 0 || l.removeEventListener("scroll", f);
                                (m = window) === null || m === void 0 || m.removeEventListener("resize", f)
                            }
                        }, [a.bja, f]);
                        const g = K4(() => ({
                            get: () => e.current.viewBox
                        }), []);
                        return H4("div", {
                            className: I4("nMvVqA", d),
                            children: [H4("div", {
                                ref: a.Id,
                                className: "_0YOFPg",
                                children: [F4(a.Wp, { ...a,
                                    viewport: g
                                }), F4("div", {
                                    className: I4("Gdl7fQ", d),
                                    children: (c = a.KEa) === null || c === void 0 ? void 0 : (b = c.get()) ===
                                        null || b === void 0 ? void 0 : b.map((h, k) => F4(h, {}, k))
                                })]
                            }), a.pHb === "visible" && H4(M6b, {
                                children: [F4("div", {
                                    className: I4("_32sKQw", d),
                                    children: F4(a.S5a, { ...a
                                    })
                                }), F4("div", {
                                    className: I4("xdIsTQ", d),
                                    children: F4(a.W5a, { ...a
                                    })
                                }), F4("div", {
                                    className: I4("rsTRSA", d),
                                    children: F4(a.U5a, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    X6b = L4(a => {
                        a = a.content;
                        __c.w(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.aa;
                            case "text3":
                                return __c.NA.ia(a.value).cells.aa();
                            default:
                                throw new E(a);
                        }
                    });
                var o6b = (a, b) => __c.QMa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            Tg: c
                        } = __c.ah(__c.Kh, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            qb: void 0,
                            writingMode: 1,
                            xd: "start",
                            rg: Y6b(e, c),
                            Ua: b
                        })
                    }),
                    Y6b = d5((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.aa.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: a5.structural
                    });
                var Z6b, $6b, a7b, G4;
                new(Z6b = class extends e5 {
                    constructor() {
                        super(G4);
                        $6b()
                    }
                }, (() => {
                    class a extends(a7b = X4) {
                        static A(b) {
                            O(b, {
                                Tg: S4
                            })
                        }
                        get Tg() {
                            return __c.ah(__c.Kh, this.props.context.attrs).Tg
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = F4(this.props.Gh, {
                                content: b,
                                na: c.container.na,
                                col: c.container.column,
                                Tg: this.Tg
                            });
                            return this.Tg === "wrap" ? F4("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [G4, $6b]
                    } = f5(a, [], [Rc], a7b))
                })(), Z6b);
                var t6b = class {
                    Zo({
                        size: a,
                        scale: b,
                        Zta: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? __c.sV * b : __c.tIb * b
                    }
                    constructor() {
                        this.Nib = d5((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.cya = S6b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.tq
                        });
                        this.eya = S6b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ?
                                void 0 : b.rows) || [])
                        }, {
                            equals: __c.tq
                        });
                        this.wgb = d5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.eya(b).size > 0) return new Set(a.layout.cols);
                            b = this.cya(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.na, e.column);
                                for (const f of i6b(c ? c.span.Vb : e.column, c ? c.span.Ic : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.tq
                        });
                        this.xgb = d5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.cya(b).size > 0) return new Set(a.layout.rows);
                            b = this.eya(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.na, e.column);
                                for (const f of i6b(c ? c.span.Yb : e.na, c ? c.span.Xc : e.na, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.tq
                        })
                    }
                };
                var b7b, c7b, d7b, e7b, f7b, g7b, h7b = parseInt("4px", 10) || 4,
                    i7b = parseInt("0.5px", 10) || .5,
                    j7b = parseInt("1px", 10) || 1,
                    k7b = parseInt("0.5px", 10) || .5,
                    l7b = parseInt("0.5px", 10) || .5,
                    m7b = parseInt("1px", 10) || 1,
                    n7b = parseInt("0.5px", 10) || .5,
                    N4;
                new(b7b = class extends e5 {
                    constructor() {
                        super(N4);
                        d7b()
                    }
                }, (() => {
                    class a extends(e7b = X4) {
                        static A(b) {
                            O(b, {
                                zd: S4,
                                yq: S4,
                                C5: S4
                            })
                        }
                        get zd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get yq() {
                            var b;
                            const c = (b = this.props.Yo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.aD(c)
                        }
                        get C5() {
                            var b, c, d;
                            return (c = (d = this.props).Sqa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return F4(__c.hx, {
                                mq: "light",
                                light: "light",
                                qt: "light",
                                dark: "light",
                                children: this.A9a
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (N4.A(this), $4(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    nd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = $4(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.gXa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    Zo: g,
                                    qE: h,
                                    zHb: k,
                                    nd: l = 1,
                                    Dd: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.zd,
                                    gtA7Dw: this.zd
                                }, p = (e === null || e === void 0 ? 0 : e.sticky) ? this.zd ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var q;
                                const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.C5) !== null && q !== void 0 ? q : p : void 0;
                                let t = -1;
                                return H4("div", {
                                    style: r,
                                    className: I4("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(u => {
                                        var v;
                                        t++;
                                        if (!(c && f.layout.cols.je(u, c) < 0 || d && f.layout.cols.je(u, d) > 0)) return F4(o7b, {
                                            col: u,
                                            label: __c.yz(t),
                                            Ta: k === null || k === void 0 ? void 0 : (v = k.get()) === null || v === void 0 ? void 0 : v.get(u),
                                            Zo: g,
                                            qE: h,
                                            nd: l,
                                            Dd: m
                                        }, u.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && F4("div", {
                                        style: {
                                            width: h7b * l
                                        },
                                        className: I4("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.A9a = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.oH ? e.layout.Rd.get(e.view.freeze.oH) : void 0,
                                    g = {
                                        jNbTIg: !this.zd,
                                        gtA7Dw: this.zd
                                    };
                                return H4("div", {
                                    ref: (d = this.yq) === null || d === void 0 ? void 0 : d.hm,
                                    className: I4("xhBZaw", g, c.className),
                                    children: [f && this.gXa(void 0, f, {
                                        sticky: !0
                                    }), this.gXa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [N4, d7b]
                    } = f5(a, [], [Rc], e7b))
                })(), b7b);
                var O4;
                new(c7b = class extends e5 {
                    constructor() {
                        super(O4);
                        f7b()
                    }
                }, (() => {
                    class a extends(g7b = X4) {
                        static A(b) {
                            O(b, {
                                zd: S4,
                                yq: S4,
                                C5: S4
                            })
                        }
                        get zd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get yq() {
                            var b;
                            const c = (b = this.props.Yo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.aD(c)
                        }
                        get C5() {
                            var b, c, d;
                            return (c = (d = this.props).Sqa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return F4(__c.hx, {
                                mq: "light",
                                light: "light",
                                qt: "light",
                                dark: "light",
                                children: this.jrb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (O4.A(this), $4(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Dd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = $4(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.mXa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    Zo: g,
                                    qE: h,
                                    nd: k = 1,
                                    Dd: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.zd,
                                    gtA7Dw: this.zd
                                };
                                var n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                        top: 0
                                    } : void 0,
                                    p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.C5) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1,
                                    t = 0;
                                n = f.rows.map(u => {
                                    r++;
                                    if (!(c && f.rows.je(u, c) < 0 || d && f.rows.je(u, d) > 0)) return t += u.height, F4(p7b, {
                                        na: u,
                                        label: `${r+1}`,
                                        qE: h,
                                        Zo: g,
                                        nd: k,
                                        Dd: l,
                                        start: f.pa(u)
                                    }, u.id)
                                });
                                return H4("div", {
                                    style: {
                                        height: t * l,
                                        width: g(k),
                                        ...q
                                    },
                                    className: I4("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [n, (e === null || e === void 0 ? void 0 : e.sticky) && F4("div", {
                                        style: {
                                            height: h7b * l
                                        },
                                        className: I4("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.jrb = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.FV ?
                                    e.layout.ee.get(e.view.freeze.FV) : void 0,
                                    g = {
                                        jNbTIg: !this.zd,
                                        gtA7Dw: this.zd
                                    };
                                return H4("div", {
                                    ref: (d = this.yq) === null || d === void 0 ? void 0 : d.hm,
                                    className: I4("An9VeA", g, c.className),
                                    children: [f && this.mXa(void 0, f, {
                                        sticky: !0
                                    }), this.mXa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [O4, f7b]
                    } = f5(a, [], [Rc], g7b))
                })(), c7b);
                var o7b = L4(a => {
                        const b = a.label,
                            c = a.Ta,
                            d = a.col,
                            e = a.qE,
                            f = a.Zo,
                            g = a.nd;
                        a = a.Dd;
                        const h = f(a),
                            k = T6b(() => e(d));
                        return F4("div", {
                            className: I4("_83Rssw", "d2uLIA", J4(k)),
                            style: {
                                width: d.width * g,
                                height: h,
                                borderInlineWidth: `${i7b*g}px`,
                                borderBlockStartWidth: `${j7b*g}px`,
                                borderBlockEndWidth: `${k7b*g}px`
                            },
                            children: F4(q6b, {
                                label: b,
                                Ta: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                NIa: k
                            })
                        })
                    }),
                    p7b = L4(a => {
                        const b = a.label,
                            c = a.na,
                            d = a.Zo,
                            e = a.qE,
                            f = a.nd,
                            g = a.Dd,
                            h = d(f),
                            k = T6b(() => e(c));
                        return F4("div", {
                            className: I4("_83Rssw", "JhBzyw",
                                J4(k)),
                            style: {
                                width: h,
                                height: c.height * g,
                                borderBlockWidth: `${l7b*g}px`,
                                borderInlineStartWidth: `${m7b*g}px`,
                                borderInlineEndWidth: `${n7b*g}px`,
                                transform: `translateY(${a.start*g}px)`
                            },
                            children: F4(q6b, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                NIa: k
                            })
                        })
                    });
                var q7b = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var r7b = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var r6b = __c.kR({
                    ro: q7b,
                    medium: r7b
                });
                var s7b, t7b, u7b, P4;
                new(s7b = class extends e5 {
                    constructor() {
                        super(P4);
                        t7b()
                    }
                }, (() => {
                    class a extends(u7b = X4) {
                        static A(b) {
                            O(b, {
                                re: S4.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return F4(this.props.Wp, {
                                sheet: b.ga.config,
                                container: b,
                                T8: "visible",
                                Yo: this.props.Yo,
                                Nt: this.props.Nt,
                                St: this.props.St,
                                Y: this.props.Y,
                                re: this.re,
                                Gh: this.props.Gh,
                                KG: void 0
                            })
                        }
                        get re() {
                            return __c.Gz(this.props.element.ga.Oa, this.props.Le)
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [P4, t7b]
                    } = f5(a, [], [Rc], u7b))
                })(), s7b);
                var v7b = class {
                    constructor() {
                        this.cha = new WeakMap;
                        this.Bfb = a => this.cha.get(a);
                        this.tZa = (a, b) => {
                            this.cha.set(a, b)
                        };
                        this.j9a = (a, b) => {
                            const c = this.cha.get(a);
                            c && c.fa === b.fa && c.Rb === b.Rb && this.cha.delete(a)
                        }
                    }
                };
                var g5 = parseInt("4px", 10) || 4,
                    w7b = L4(({
                        sheet: a,
                        Y: b,
                        range: c,
                        Gv: d,
                        Hv: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.pa(c.Xc) + c.Xc.height, a = a.ra(c.Ic) + c.Ic.width, F4("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: g5 * b
                                },
                                className: I4("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.ra(c.Ic) + c.Ic.width, F4("div", {
                                style: {
                                    width: g5 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: I4("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.pa(c.Xc) + c.Xc.height, F4("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: g5 * b
                                },
                                className: I4("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var h5 = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = E4();
                        w6b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Id: e
                        });
                        return F4("div", {
                            ref: e,
                            className: I4("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    x7b = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = E4();
                        w6b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Id: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return F4("div", {
                            className: I4("nstn2A", a, "_9sodyg"),
                            children: F4("div", {
                                ref: e,
                                className: I4("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var y6b = L4(({
                        sheet: a,
                        children: b,
                        fC: c
                    }) => {
                        const d = M4(f => {
                                c.Bya(a, f)
                            }, [c, a]),
                            e = M4(f => {
                                f != null ? c.gC.set(a, f) : c.gC.delete(a)
                            }, [c, a]);
                        return F4(__c.mDb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            yu: e,
                            children: b
                        })
                    }),
                    x6b = class {
                        Bya(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.L4.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.gC = new WeakMap;
                            this.L4 = b5.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = $4((b, c) => {
                                b = this.gC.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var B6b = L4(a => {
                    const b = a.item,
                        c = a.Yo,
                        d = a.Vf,
                        e = a.measureRef,
                        f = a.Y,
                        g = a.ZOa,
                        h = a.Rb,
                        k = a.Nt,
                        l = a.St,
                        m = a.Wp,
                        n = a.hL,
                        p = a.Gh,
                        q = a.Le,
                        r = a.fC;
                    a = K4(() => __c.Gz(b.Oa, q), [b, q]);
                    const t = K4(() => L4(({
                            sheet: y,
                            range: A,
                            Gv: z,
                            Hv: C
                        }) => F4(h5, {
                            sheet: y,
                            range: A,
                            Y: f,
                            children: F4(w7b, {
                                sheet: y,
                                Y: f,
                                range: A,
                                Gv: z,
                                Hv: C
                            })
                        })), [f]),
                        u = j6b(b.config),
                        v = f.get(),
                        x = Math.min(u.width * v, h.width);
                    Q4(() => R4(() => {
                        var y = b.config.view.freeze.oH ? b.config.layout.Rd.get(b.config.view.freeze.oH) : void 0;
                        if (y != null)
                            if (b.config.ra(y) + y.width > x) {
                                if (y = r.gC.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.gC.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, v, x]);
                    return F4("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: F4(n, {
                            sheet: b,
                            children: F4("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: u.width * v,
                                    height: u.height * v
                                },
                                children: F4("div", {
                                    className: "W1ir5A",
                                    children: F4(m, {
                                        container: d.Oj(b),
                                        sheet: b.config,
                                        T8: "visible",
                                        Yo: c,
                                        Y: f,
                                        Nt: k,
                                        St: l,
                                        re: a,
                                        Gh: p,
                                        KG: t
                                    })
                                })
                            })
                        })
                    })
                });
                var y7b = L4(({
                    page: a,
                    range: b,
                    ZB: c
                }) => {
                    const d = D6b(a.sheet, b);
                    return F4("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.qt(st(e)).cp(d) && c(e, f))
                    })
                });
                var z7b = new __c.WR,
                    i5 = a => __c.sV * a,
                    A7b = () => "primary-default",
                    E6b = L4(({
                        container: a,
                        Yo: b,
                        Nt: c,
                        St: d,
                        p0: e,
                        Y: f,
                        viewport: g,
                        Xsb: h,
                        Wp: k,
                        Gh: l,
                        ZB: m,
                        mga: n,
                        rzb: p,
                        cyb: q,
                        byb: r
                    }) => {
                        const t = a.page,
                            u = K4(() => L4(({
                                sheet: v,
                                range: x,
                                Gv: y,
                                Hv: A
                            }) => H4(M6b, {
                                children: [F4(h5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: F4(w7b, {
                                        sheet: v,
                                        Y: f,
                                        range: x,
                                        Gv: y,
                                        Hv: A
                                    })
                                }), H4(x7b, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: [p && F4(p, {}), m && F4(y7b, {
                                        page: t,
                                        ZB: m,
                                        range: x
                                    }), r && F4(r, {}), n && n()]
                                }), q && x && F4(h5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: F4(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? F4(B7b, {
                            container: a,
                            viewport: g,
                            Y: f,
                            Yo: b,
                            Nt: c,
                            St: d,
                            Wp: k,
                            Gh: l,
                            KG: u
                        }) : F4(k, {
                            sheet: t.sheet,
                            container: a,
                            T8: "hidden",
                            Yo: b,
                            Nt: c,
                            St: d,
                            p0: e,
                            Y: f,
                            viewport: g,
                            Gh: l,
                            KG: u
                        })
                    }),
                    B7b = L4(a => {
                        const b = a.container,
                            c = a.Y,
                            d = a.viewport,
                            e = a.Yo,
                            f = a.Nt,
                            g = a.St,
                            h = a.Wp,
                            k = a.Gh;
                        a = a.KG;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = Y4(null),
                            p = Y4(null),
                            q = Y4(null);
                        Q4(() => {
                            const y = j5({
                                sheet: l.sheet,
                                Fha: !0,
                                Gha: !0,
                                Y: c,
                                viewport: d
                            });
                            return T4(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = n.current;
                                if (A && z) {
                                    var C =
                                        l.sheet.direction === "rtl",
                                        G;
                                    z.style.position = (G = A.position) !== null && G !== void 0 ? G : "sticky";
                                    var J;
                                    z.style.top = (J = A.top) !== null && J !== void 0 ? J : "0px";
                                    var H, K;
                                    C ? z.style.right = (H = A.right) !== null && H !== void 0 ? H : "0px" : z.style.left = (K = A.left) !== null && K !== void 0 ? K : "0px";
                                    var P;
                                    z.style.transform = (P = A.transform) !== null && P !== void 0 ? P : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        Q4(() => {
                            const y = j5({
                                sheet: l.sheet,
                                Fha: !1,
                                Gha: !0,
                                Y: c,
                                viewport: d
                            });
                            return T4(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = q.current;
                                if (A && z) {
                                    var C;
                                    z.style.position =
                                        (C = A.position) !== null && C !== void 0 ? C : "sticky";
                                    var G;
                                    z.style.top = (G = A.top) !== null && G !== void 0 ? G : "0px";
                                    var J;
                                    z.style.transform = (J = A.transform) !== null && J !== void 0 ? J : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        Q4(() => {
                            const y = j5({
                                sheet: l.sheet,
                                Fha: !0,
                                Gha: !1,
                                Y: c,
                                viewport: d
                            });
                            return T4(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = p.current;
                                if (A && z) {
                                    var C = l.sheet.direction === "rtl",
                                        G;
                                    z.style.position = (G = A.position) !== null && G !== void 0 ? G : "sticky";
                                    var J, H;
                                    C ? z.style.right = (J = A.right) !== null && J !== void 0 ? J : "0px" : z.style.left =
                                        (H = A.left) !== null && H !== void 0 ? H : "0px";
                                    var K;
                                    z.style.transform = (K = A.transform) !== null && K !== void 0 ? K : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = M4((y, A, z) => j5({
                                sheet: y,
                                Fha: A,
                                Gha: z,
                                Y: c,
                                viewport: d
                            }), [c, d]),
                            t = K4(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            u = K4(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var v;
                        const x = (v = c === null || c === void 0 ? void 0 : c.get()) !== null && v !== void 0 ? v : 1;
                        return H4("div", {
                            className: I4("OsKKIQ", "cbOp6Q"),
                            children: [F4("div", {
                                className: "VDFv_A",
                                children: F4(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    T8: "hidden",
                                    Yo: e,
                                    Nt: f,
                                    St: g,
                                    p0: r,
                                    Y: c,
                                    viewport: d,
                                    Gh: k,
                                    KG: a
                                })
                            }), F4("div", {
                                ref: n,
                                className: "_688KWg",
                                children: F4(s6b, {
                                    zd: m,
                                    bOa: !1,
                                    Zo: i5,
                                    scale: x
                                })
                            }), F4("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: F4(N4, {
                                    sheet: l.sheet,
                                    nd: x,
                                    Dd: x,
                                    Zo: i5,
                                    qE: A7b,
                                    fF: z7b,
                                    Sqa: t
                                })
                            }), F4("div", {
                                ref: p,
                                className: "zm537g",
                                children: F4(O4, {
                                    sheet: l.sheet,
                                    nd: x,
                                    Dd: x,
                                    Zo: i5,
                                    qE: A7b,
                                    fF: z7b,
                                    Sqa: u
                                })
                            })]
                        })
                    }),
                    j5 = ({
                        sheet: a,
                        Fha: b,
                        Gha: c,
                        Y: d,
                        viewport: e
                    }) => S4(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.At(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                            g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new Vs(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var K6b = class {
                    constructor(a) {
                        this.mC = a;
                        this.V8a = __c.KT;
                        this.efb = d5((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.Zeb(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !xG(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !xG(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !xG(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !xG(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.V8a);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.ra(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.ra(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.ra(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || xG(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || xG(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.ra(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = xG(b, c, l)) m = h, n = k, p = b.ra(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.Zeb = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.Ba.ref) && g.span.Yb === g.span.Xc && g.span.Vb === g.span.Ic) {
                                var h = this.mC.Iv(b, c, d);
                                b = this.mC.Lqa(b, c, d, __c.Lh({
                                    Tg: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    Tg: k,
                                    textAlign: l
                                } = __c.ah(__c.Kh, b);
                                if (k === "overflow") return __c.RMa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.Ba.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.yk.type : void 0)
                            }
                        }
                    }
                };
                var C7b = L4(function(a) {
                    const b = a.sheet;
                    var c = a.eh;
                    const d = a.ywb,
                        e = a.Y,
                        f = a.psa,
                        g = a.Neb;
                    a = a.overflow;
                    const h = E4();
                    P6b(() => R4(() => {
                        const p = D(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = M4(p => f.efb(b, p, d, g), [f, b, d, g]);
                    var l = M4((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = g6b(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return F4("svg", {
                        ref: h,
                        role: "presentation",
                        className: I4("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n,
                            _3NnFzw: a === "visible",
                            JMH1ng: a === "hidden"
                        }),
                        viewBox: `0 0 ${l} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: p,
                            color: q,
                            weight: r,
                            tk: t,
                            uk: u
                        }) => F4("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: u,
                            strokeWidth: r,
                            d: p.map(({
                                p1: v,
                                p2: x
                            }) => `M ${v.x} ${v.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${u}`))
                    })
                });
                var D7b;
                D7b = Symbol.iterator;
                var E7b = class {
                    get size() {
                        return this.oha
                    }
                    get([a, b]) {
                        return (a = this.RE.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.RE.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.RE.get(a);
                        d == null && (d = new Map, this.RE.set(a, d));
                        d.set(b, c);
                        this.oha++;
                        return this
                    }
                    clear() {
                        this.RE.clear();
                        this.oha = 0
                    }
                    delete([a, b]) {
                        const c = this.RE.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.oha--;
                        c.size === 0 && this.RE.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.RE)
                            for (const [d, e] of c) a([b, d], e)
                    }*[D7b]() {
                        for (const [a, b] of this.RE)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.oha = 0;
                        this.RE = new Map
                    }
                };
                var F7b, G7b, H7b, I7b, J7b, K7b, L7b, I6b = __c.zv("285688d5", !1),
                    M7b, N7b = class extends X4 {
                        render() {
                            const {
                                bba: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return H4("div", {
                                ref: this.OZa,
                                className: I4("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.qHa) && F4(k5, { ...b,
                                    sheet: c,
                                    range: a.qHa.range,
                                    Gv: !0,
                                    Hv: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.a3a) && F4(k5, { ...b,
                                    sheet: c,
                                    range: a.a3a.range,
                                    Gv: !1,
                                    Hv: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.eOa) && F4(k5, { ...b,
                                    sheet: c,
                                    range: a.eOa.range,
                                    Gv: !0,
                                    Hv: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.M1a) && F4(k5, { ...b,
                                    sheet: c,
                                    range: a.M1a.range,
                                    Gv: !1,
                                    Hv: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = R4(() => {
                                var b = this.props,
                                    c = b.Y;
                                b = b.sheet;
                                const d = this.OZa.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.Bc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.OZa = gw()
                        }
                    };
                ({
                    c: [M7b, H7b]
                } = f5(N7b, [], [Rc], X4));
                H7b();
                var k5;
                new(F7b = class extends e5 {
                    constructor() {
                        super(k5);
                        I7b()
                    }
                }, (() => {
                    class a extends(J7b = X4) {
                        static A(b) {
                            O(b, {
                                Pya: S4,
                                bounds: S4
                            })
                        }
                        get Pya() {
                            const b = this.props.viewport,
                                c = this.props.Gv,
                                d = this.props.Hv;
                            return b == null || !c && !d ? b : S4(() => {
                                const e = __c.At(b.get());
                                return st({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.vN,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.KG,
                                g = this.props.Gv,
                                h = this.props.Hv;
                            return H4("div", {
                                ref: this.cwa,
                                className: I4("i0YQww",
                                    this.props.className),
                                children: [F4("div", {
                                    ref: this.nVa,
                                    className: "vUKoKg",
                                    children: F4("div", {
                                        ref: this.oVa,
                                        children: F4(l5, {
                                            vN: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            Yo: this.props.Yo,
                                            NC: this.props.NC,
                                            Gh: this.props.Gh,
                                            wZ: this.props.wZ,
                                            Y: this.props.Y,
                                            eh: this.eh,
                                            f7: this.f7,
                                            gS: this.gS
                                        })
                                    })
                                }), F4(this.mka, {}), f && F4(f, {
                                    sheet: c,
                                    range: e,
                                    Gv: g,
                                    Hv: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = R4(() => {
                                    var h = this.props,
                                        k = h.Y,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.cwa.current;
                                    const p = this.nVa.current;
                                    h = this.oVa.current;
                                    k = k ? k.get() : 1;
                                    const q =
                                        m ? l.ra(m.Ic) + m.Ic.width - l.ra(m.Vb) : l.width,
                                        r = m ? l.pa(m.Xc) + m.Xc.height - l.pa(m.Yb) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.ra(m.Vb) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.pa(m.Yb) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.p0;
                            const e = this.props.Gv,
                                f = this.props.Hv,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = R4(() => {
                                const h = this.cwa.current;
                                if (h != null) {
                                    var k =
                                        e || f ? "sticky" : "relative",
                                        l = f ? "0px" : "unset",
                                        m = e ? "0px" : "unset",
                                        n = e ? "0px" : "unset",
                                        p = c.direction === "rtl";
                                    if (g == null) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                    else {
                                        const x = g.get();
                                        var q;
                                        h.style.position = (q = x.position) !== null && q !== void 0 ? q : k;
                                        var r;
                                        h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                                        var t;
                                        h.style.left = p ? "unset" : (t = x.left) !== null && t !== void 0 ? t : m;
                                        var u;
                                        h.style.right = p ? (u = x.right) !== null && u !== void 0 ? u : n : "unset";
                                        var v;
                                        h.style.transform = (v = x.transform) !== null &&
                                            v !== void 0 ? v : "unset"
                                    }
                                }
                            });
                            __c.Bc(this, [b, d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.range;
                            if (b.layout.cols.empty || b.layout.rows.empty) return {
                                Vb: void 0,
                                Ic: void 0,
                                Yb: void 0,
                                Xc: void 0
                            };
                            var d, e, f, g;
                            return {
                                Vb: (d = c === null || c === void 0 ? void 0 : c.Vb) !== null && d !== void 0 ? d : b.layout.cols.first(),
                                Ic: (e = c === null || c === void 0 ? void 0 : c.Ic) !== null && e !== void 0 ? e : b.layout.cols.last(),
                                Yb: (f = c === null || c === void 0 ? void 0 : c.Yb) !== null && f !== void 0 ? f : b.layout.rows.first(),
                                Xc: (g = c === null || c === void 0 ? void 0 : c.Xc) !==
                                    null && g !== void 0 ? g : b.layout.rows.last()
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.cwa = (k5.A(this), gw());
                            this.nVa = gw();
                            this.oVa = gw();
                            this.gS = new O7b;
                            this.zwb = S4(() => [...this.eh.get().keys()].sort((c, d) => this.props.sheet.layout.rows.je(c, d)), {
                                equals: __c.uq()
                            });
                            this.xwb = S4(() => [...this.f7.get().keys()].sort((c, d) => this.props.sheet.layout.cols.je(c, d)), {
                                equals: __c.uq()
                            });
                            this.mka = L4(() => F4(this.props.R5a, {
                                eh: this.zwb,
                                ywb: this.xwb,
                                Neb: this.gS.Web,
                                range: this.props.range
                            }));
                            this.eh = S4(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.Pya) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.la.y - g : c.Yb ? d.pa(c.Yb) : 0;
                                f = f ? f.br.y + g : c.Xc ? d.pa(c.Xc) + c.Xc.height : 0;
                                g = new Map;
                                for (let k = c.Yb; k != null && c.Xc != null && d.layout.rows.je(k, c.Xc) <= 0; k = d.layout.rows.next(k)) {
                                    const l = d.pa(k);
                                    if (!(l + k.height < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: a5.shallow
                            });
                            this.f7 = S4(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.Pya) ===
                                    null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.la.x - g : c.Vb ? d.ra(c.Vb) : 0;
                                f = f ? f.br.x + g : c.Ic ? d.ra(c.Ic) + c.Ic.width : 0;
                                g = new Map;
                                for (let k = c.Vb; k != null && c.Ic != null && d.layout.cols.je(k, c.Ic) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.ra(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: a5.shallow
                            })
                        }
                    }({
                        c: [k5, I7b]
                    } = f5(a, [], [Rc], J7b))
                })(), F7b);
                var O7b = class {
                        constructor() {
                            this.cells = new E7b;
                            this.kxa = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = b5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.Web = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = b5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.oJa
                            }
                        }
                    },
                    l5;
                new(G7b = class extends e5 {
                    constructor() {
                        super(l5);
                        K7b()
                    }
                }, (() => {
                    class a extends(L7b = X4) {
                        static A(b) {
                            O(b, {
                                SK: b5.shallow,
                                yq: S4,
                                VGa: $4,
                                i$: $4.bound
                            })
                        }
                        get yq() {
                            var b;
                            const c = (b = this.props.Yo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.aD(c)
                        }
                        render() {
                            var b;
                            return H4("div", {
                                ref: U6b(this.Id, (b = this.yq) === null || b === void 0 ? void 0 : b.hm),
                                children: [F4("div", {
                                    ref: this.Zma,
                                    className: "_5YlOqQ"
                                }), F4("div", {
                                    ref: this.ana,
                                    className: "_XCmKw"
                                }), this.SK.map(c => c.rpb)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                T4(() => [this.props.sheet, this.props.f7.get(), this.props.eh.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.k9a();
                                    this.VGa(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = R4(() => {
                                    var e = this.props,
                                        f = e.Y;
                                    e = e.sheet;
                                    const g = this.Id.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.SK.map(e => J6b(e));
                            __c.Bc(this, [c, b, ...d])
                        }
                        k9a() {
                            const b = D(this.Zma.current),
                                c = D(this.ana.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.nDa.length = 0;
                            this.SK.length = 0
                        }
                        VGa(b, c) {
                            const d = D(this.Zma.current),
                                e = D(this.ana.current),
                                f = [],
                                g = new Map;
                            for (const h of this.nDa) c.has(h.na) ? g.set(h.na, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new P7b(this.i$, h), d.appendChild(c.p9), e.appendChild(c.r9), this.nDa.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        i$(b, c) {
                            const d = this.props.wZ,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.gS;
                            b = new Q7b(this.props.vN, this.props.NC, this.props.Gh, d(b, c), e, b, c, f, g.kxa, this.sba, this.rba);
                            __c.Bc(this, J6b(b));
                            this.SK.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.Id = (l5.A(this), gw());
                            this.Zma = gw();
                            this.ana = gw();
                            this.nDa = [];
                            this.SK = [];
                            this.sba = d5(c => {
                                const d = this.props.eh.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.rba = d5(c => {
                                const d = this.props.f7.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [l5, K7b]
                    } = f5(a, [], [Rc], L7b))
                })(), G7b);
                var P7b = class {
                        static A(a) {
                            O(a, {
                                update: $4
                            })
                        }
                        update(a, b, c) {
                            [this.p9, this.r9].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.na = b;
                            for (const [d] of c) c = this.SK.get(d), c || (c = this.i$(d, b), this.SK.set(d, c), this.p9.appendChild(c.o9), this.r9.appendChild(c.DL)), c.update(b)
                        }
                        hide() {
                            [this.p9, this.r9].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.i$ = a;
                            this.na = b;
                            this.p9 = (P7b.A(this), document.createElement("div"));
                            this.r9 = document.createElement("div");
                            this.SK = new Map
                        }
                    },
                    Q7b = class {
                        static A(a) {
                            O(a, {
                                Z9: b5.ref,
                                na: b5.ref,
                                tra: S4,
                                update: $4,
                                nt: S4,
                                attrs: S4.struct,
                                Ssa: S4,
                                rv: S4,
                                renderer: S4,
                                oJa: S4.struct
                            })
                        }
                        get tra() {
                            if (!I6b) return !1;
                            const a = this.nt;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.vN(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.na && (this.na = a, this.wz.na = a, this.Uoa && this.Uoa(), this.Uoa = this.kxa(this.na, this.col, this))
                        }
                        get rpb() {
                            return this.Z9
                        }
                        get nt() {
                            const a = this.sheet.layout.cells.get(this.na, this.col);
                            return a ?
                                a.ref : void 0
                        }
                        get attrs() {
                            const a = this.wz.attrs;
                            return {
                                Tg: a === null || a === void 0 ? void 0 : a.Tg,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get Ssa() {
                            var a = this.wz.span;
                            if (!a) return !1;
                            if (a.Yb === a.Xc && a.Vb === a.Ic) return !0;
                            var b = this.sba("first");
                            const c = this.sba("last"),
                                d = this.rba("first"),
                                e = this.rba("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.je(a.Yb, b) >= 0 && this.sheet.layout.rows.je(a.Yb, c) <=
                                0 ? a.Yb : b;
                            a = this.sheet.layout.cols.je(a.Vb, d) >= 0 && this.sheet.layout.cols.je(a.Vb, e) <= 0 ? a.Vb : d;
                            return b === this.na && a === this.col
                        }
                        get rv() {
                            const a = this.sheet,
                                b = this.na,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                na: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.Eob.cd(c, b);
                                case "sheet-item":
                                    return this.container.Oya.cd(c, b);
                                case "sheet-element":
                                    return this.container.Msb.cd(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.nt;
                            if (a && this.Ssa &&
                                (a.content.ref || a.Ba.ref)) return this.NC({
                                context: {
                                    container: this.rv,
                                    attrs: this.attrs
                                },
                                tp: this.Sua,
                                Gh: this.Gh
                            })
                        }
                        get oJa() {
                            this.pJa.reportObserved();
                            var a = R6b(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.b4 : this.ED, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, u;
                            this.vN = a;
                            this.NC = b;
                            this.wz = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.kxa = k;
                            this.sba = l;
                            this.rba = m;
                            this.o9 =
                                (Q7b.A(this), document.createElement("div"));
                            this.DL = document.createElement("div");
                            this.xD = document.createElement("div");
                            this.ED = document.createElement("div");
                            this.b4 = document.createElement("div");
                            this.pJa = Q6b("content size atom");
                            this.Sua = $4(() => this.pJa.reportChanged());
                            this.na = g;
                            this.o9.className = "_2JFriw";
                            this.DL.className = "imy9ug";
                            this.xD.className = I4("pDMp7w", {
                                _0yZ6Qg: ((p = this.nt) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.nt) === null ||
                                    r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((u = this.nt) === null || u === void 0 ? void 0 : (t = u.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.tra
                            });
                            this.ED.className = "_30B9pw";
                            this.xD.appendChild(this.ED);
                            this.DL.appendChild(this.xD);
                            this.b4.className = "G7zH2w";
                            this.Uoa = k(this.na, this.col, this);
                            this.Gh = v => F4(c, { ...v,
                                tp: this.Sua
                            })
                        }
                    };
                var R7b, S7b, T7b, U4;
                new(R7b = class extends e5 {
                    constructor() {
                        super(U4);
                        S7b()
                    }
                }, (() => {
                    class a extends(T7b = X4) {
                        static A(b) {
                            O(b, {
                                bba: S4
                            })
                        }
                        render() {
                            const {
                                vN: b,
                                sheet: c,
                                container: d,
                                Yo: e,
                                p0: f,
                                NC: g,
                                re: h,
                                Gh: k,
                                viewport: l,
                                KG: m,
                                R2a: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return F4("div", {
                                className: I4("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: F4(M7b, {
                                    vN: b,
                                    NC: g,
                                    Gh: k,
                                    R5a: this.mka,
                                    wZ: this.wZ,
                                    sheet: c,
                                    container: d,
                                    Yo: e,
                                    p0: f,
                                    Y: this.Y,
                                    viewport: l,
                                    KG: m,
                                    bba: this.bba
                                })
                            })
                        }
                        get bba() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.FV ? b.layout.ee.get(b.view.freeze.FV) : void 0,
                                e = b.view.freeze.oH ? b.layout.Rd.get(b.view.freeze.oH) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.qHa = {
                                    range: {
                                        Vb: h,
                                        Yb: f,
                                        Ic: e,
                                        Xc: d
                                    }
                                });
                                d && l && (c.a3a = {
                                    range: {
                                        Vb: l,
                                        Yb: f,
                                        Ic: k,
                                        Xc: d
                                    }
                                });
                                e && b && (c.eOa = {
                                    range: {
                                        Vb: h,
                                        Yb: b,
                                        Ic: e,
                                        Xc: g
                                    }
                                });
                                b && l && (c.M1a = {
                                    range: {
                                        Vb: l,
                                        Yb: b,
                                        Ic: k,
                                        Xc: g
                                    }
                                });
                                return c
                            }
                        }
                        get Y() {
                            return this.props.Y ?
                                this.props.Y : S4(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.mka = (U4.A(this), L4(c => {
                                const {
                                    sheet: d,
                                    psa: e,
                                    Y: f,
                                    T8: g = "hidden"
                                } = this.props;
                                return F4(h5, {
                                    sheet: d,
                                    range: c.range,
                                    Y: f,
                                    children: F4(C7b, { ...c,
                                        sheet: d,
                                        Y: this.Y,
                                        psa: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.wZ = (c, d) => new __c.jNa(this.props.mC, this.props.nz, this.props.sheet, c, d, this.Y, this.Nt, this.St);
                            this.Nt = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).Nt) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            };
                            this.St = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).St) === null ||
                                    e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            }
                        }
                    }({
                        c: [U4, S7b]
                    } = f5(a, [], [Rc], T7b))
                })(), R7b);
                __c.qNa = {
                    Ehb: function(a) {
                        const b = a.Gn,
                            c = a.Jd,
                            d = a.ld,
                            e = a.fm,
                            f = a.mC,
                            g = a.nz,
                            h = a.vX;
                        p6b({
                            mz: a.mz,
                            lf: a.lf,
                            qub: a.aP,
                            Ua: a.Ua
                        });
                        const k = L6b({
                            NC: h,
                            mC: f,
                            nz: g,
                            hy: void 0
                        });
                        b.Gka = F6b({
                            Wp: k
                        });
                        c.nka = v6b({
                            Wp: k
                        });
                        ({
                            V5a: a
                        } = C6b({
                            Wp: k,
                            qe: e(),
                            MZa: new v7b
                        }));
                        d.cq.Fka = a;
                        const {
                            Z3a: l,
                            $3a: m,
                            Y3a: n
                        } = u6b();
                        return {
                            dFa: L4(p => F4(W6b, { ...p,
                                container: void 0,
                                Wp: k,
                                U5a: l,
                                W5a: m,
                                S5a: n,
                                Gh: X6b
                            }))
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/5ee93304b345a5a5.js.map