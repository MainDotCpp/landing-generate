(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [70911], {

        /***/
        88780: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(878415);
            __web_req__(914242);
            __web_req__(931757);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var O = __c.O;
                var D = __c.D;
                var td = __c.td;
                var pg = __c.pg;
                var E = __c.E;
                var w = __c.w;
                var D$b = function(a) {
                        var b = {
                            element: void 0
                        };
                        const c = new Map;
                        for (const d in b) a[d].bZ.forEach((e, f) => c.set(f, e));
                        return {
                            bZ: c,
                            apply: d => {
                                const e = new Map,
                                    f = {};
                                for (const g in d) {
                                    const h = a[g].apply(d[g]);
                                    h.Pxa.forEach((k, l) => e.set(l, k));
                                    f[g] = h.data
                                }
                                return {
                                    Pxa: e,
                                    data: f
                                }
                            }
                        }
                    },
                    E$b = function(a) {
                        return () => a
                    },
                    F$b = function(a) {
                        return a()
                    },
                    X5 = function(a, b, c) {
                        return new W5([a], b, c)
                    },
                    Y5 = function(a, b, c, d) {
                        return new W5([a, b], c, d)
                    },
                    Z5 = function(a, b, c, d) {
                        return new G$b(a, b, c, d)
                    },
                    H$b = function(a, b) {
                        return b(a)
                    },
                    $5 = function(a,
                        b) {
                        return a === b || b.map(c => a.ssa(I$b(c)))
                    },
                    K$b = function(a, b) {
                        return a.lua(b).map(c => new J$b(c, d => d.props[b]))
                    },
                    I$b = function(a) {
                        w(a instanceof a6);
                        return a
                    },
                    b6 = function(a) {
                        const b = new WeakMap;
                        return function(c) {
                            let d = b.get(c);
                            d == null && (d = a.call(this, c), b.set(c, d));
                            return d
                        }
                    },
                    d6 = function(a, b) {
                        if (a === b) return !0;
                        switch (typeof a) {
                            case "string":
                            case "number":
                            case "boolean":
                            case "undefined":
                                return !1;
                            case "object":
                                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                                switch (a.kind) {
                                    case "array":
                                        return b.kind ===
                                            "array" && c6(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : c6([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : c6([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && L$b(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    c6 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!d6(a[c], b[c])) return !1;
                        return !0
                    },
                    L$b = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !== e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!d6(a[f], b[f])) return !1;
                        return !0
                    },
                    e6 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    N$b = function(a, b) {
                        return a.map(c => b.map(d => M$b[0](c, d)))
                    },
                    P$b = function(a, b, c) {
                        return b.map(d => O$b[a](d, c))
                    },
                    Q$b = function(a, b) {
                        return new f6(new g6(new Map(b),
                            a.vars), a.a0)
                    },
                    S$b = function(a, b, c) {
                        for (const [e, f] of c.a0) {
                            var d = f.ob.map(([g, h]) => [g, a.types.evaluate(h)]);
                            d = R$b(b, d, g => h6(a, g, f.body));
                            b = new f6(b.vars, b.a0.define(e, d))
                        }
                        return h6(a, b, c.body)
                    },
                    h6 = function(a, b, c) {
                        switch (c.kind) {
                            case 1:
                                return T$b(c.value);
                            case 2:
                                const f = c.args.map(q => h6(a, b, q));
                                c = c.name;
                                return typeof c === "string" ? b.a0.resolve(c).map(q => U$b(q, f)) : V$b[c].map(q => i6(q, f));
                            case 3:
                                const g = c.args.map(q => q.kind !== 13 ? new W$b(h6(a, b, q)) : new X$b(h6(a, b, q.iIb)));
                                c = c.name;
                                switch (c) {
                                    case 0:
                                    case 1:
                                        var d =
                                            g.map(q => q.jqa(r => r.type, r => r.type.DN()));
                                        return j6.union(...d).map(Y$b[c]).map(q => Z$b(q, g));
                                    default:
                                        return $$b[c].map(q => Z$b(q, g))
                                }
                            case 4:
                                d = c.name;
                                var e = c.param;
                                const h = c.body,
                                    k = h6(a, b, c.YR);
                                c = k.type.DN();
                                const l = R$b(b, [
                                    [e, c]
                                ], q => h6(a, q, h));
                                return P$b(d, c, l.resultType).map(q => aac(q, k, l));
                            case 5:
                                const m = c.entries.map(([q, r]) => [h6(a, b, q), h6(a, b, r)]);
                                c = j6.union(...m.map(([q]) => q.type));
                                d = j6.union(...m.map(([, q]) => q.type));
                                if (!$5(c, j6.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                return N$b(c,
                                    d).map(q => bac(q, m));
                            case 6:
                                const n = pg(c.fields, q => h6(a, b, q));
                                c = pg(n, q => q.type);
                                return (0, cac[0])(c).map(q => dac(q, n));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const p = h6(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.Slb.map(q => i6(q, [p], {
                                    Lq: !0
                                }));
                            case 8:
                                return d = h6(a, b, c.base), eac(d, c.sMb);
                            case 9:
                                return fac(b, c.name);
                            case 10:
                                return d = td(c.defs, q => h6(a, b, q)), gac(a, b, d, c.body);
                            case 11:
                                return d = h6(a, b, c.test).as(j6.hh), e = h6(a, b, c.LBb), c = h6(a, b, c.alternate),
                                    hac(d, e, c);
                            case 12:
                                return h6(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    T$b = function(a) {
                        switch (typeof a) {
                            case "string":
                                return k6(j6.string, a);
                            case "number":
                                return k6(j6.number, a);
                            case "boolean":
                                return k6(j6.hh, a);
                            case "undefined":
                                return k6(j6.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    eac = function(a, b) {
                        return a.map(c => K$b(c, b).map(({
                            type: d,
                            get: e
                        }) => i6(new W5([c], d, e), [a])))
                    },
                    fac = function(a, b) {
                        return a.vars.resolve(b).map(c => l6.of(c, d => d.resolve(b)))
                    },
                    gac = function(a, b, c, d) {
                        const e = td(c, g => g.type),
                            f = td(c, g => g.evaluate);
                        return iac(h6(a, Q$b(b, e), d), g => {
                            const h = td(f, k => k(g));
                            return new g6(new Map(h), g)
                        })
                    },
                    hac = function(a, b, c) {
                        return b.map((d, e) => c.map((f, g) => {
                            f = j6.union(d, f);
                            return l6.of(f, h => {
                                const k = a(h),
                                    l = e(h),
                                    m = g(h);
                                return () => k() ? l() : m()
                            })
                        }))
                    },
                    m6 = function(a) {
                        return b => b(a)
                    },
                    U$b = function({
                        kfa: a,
                        resultType: b,
                        evaluate: c
                    }, d) {
                        if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                        const e = jac(a, (f, g) => d[g].as(f));
                        return l6.of(b, f => {
                            const g = e.map(m6(f));
                            return c(f)(...g)
                        })
                    },
                    i6 = function({
                        kfa: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        if (d.length !== a.length) throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                        const f = jac(a, (g, h) => d[h].as(g));
                        return l6.of(b, g => {
                            g = f.map(m6(g));
                            return kac((e === null || e === void 0 ? 0 : e.Lq) ? lac(c) : c, g)
                        })
                    },
                    Z$b = function({
                        Xob: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.lma(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = j6.YR(a))));
                        return new l6(b, g => {
                            const h = m6(g),
                                k = f.map(l => l.lma(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.jqa(n => l.push(n()),
                                        n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    aac = function({
                        itemType: a,
                        L7a: b,
                        resultType: c,
                        reduce: d
                    }, e, f) {
                        const g = f.as([a], b),
                            h = e.as(j6.YR(a));
                        return new l6(c, k => {
                            const l = h(k),
                                m = g(k),
                                n = lac(p => {
                                    p = p.map(E$b);
                                    return [p, p.map(m)]
                                });
                            return () => {
                                const [p, q] = n(l());
                                return d(p, q)
                            }
                        })
                    },
                    bac = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new l6(c, g => {
                            const h = f.map(([k, l]) => [k(g), l(g)]);
                            return () => d(h.map(([k, l]) => [k(), l()]))
                        })
                    },
                    dac = function({
                            r7a: a,
                            resultType: b,
                            apply: c
                        },
                        d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = mac(a, (g, h) => d[h].as(g));
                        return new l6(b, g => {
                            const h = pg(f, m6(g));
                            return () => {
                                var k = pg(h, F$b);
                                return c(k)
                            }
                        })
                    },
                    k6 = function(a, b) {
                        const c = E$b(b);
                        return new l6(a, () => c)
                    },
                    iac = function(a, b) {
                        const c = a.evaluate;
                        return new l6(a.type, d => c(b(d)))
                    },
                    R$b = function(a, b, c) {
                        const d = b.map(f => f[0]),
                            e = b.map(f => f[1]);
                        return H$b(e, f => c(Q$b(a, new Map(b))).map((g, h) => new nac(f, g, k => (...l) => {
                            const m =
                                new Map(d.map((n, p) => [n, l[p]]));
                            return h(new g6(new Map(m), k))
                        })))
                    },
                    kac = function(a, b) {
                        switch (b.length) {
                            case 0:
                                return a;
                            case 1:
                                const [c] = b;
                                return () => a(c());
                            case 2:
                                const [d, e] = b;
                                return () => a(d(), e());
                            default:
                                return () => {
                                    var f = b.map(F$b);
                                    return a(...f)
                                }
                        }
                    },
                    lac = function(a) {
                        let b;
                        return (...c) => {
                            if (b && b.H2a.length === c.length && b.H2a.every((e, f) => n6.gh(e, c[f]))) return b.v;
                            const d = a(...c);
                            b = {
                                H2a: c,
                                v: d
                            };
                            return d
                        }
                    },
                    mac = function(a, b) {
                        return pg(a, b)
                    },
                    jac = function(a, b) {
                        return a.map(b)
                    },
                    pac = function(a, b, c) {
                        return new oac(a,
                            b, c)
                    },
                    rac = function(a, b, c) {
                        return new qac(a, b, c)
                    },
                    sac = function(a, b) {
                        return [...a].map(b)[Symbol.iterator]()
                    },
                    o6 = function(a, b, c, d) {
                        if (c !== d) throw a.error(b, `type error: expected ${c}, was ${d}`);
                    },
                    zac = function(a) {
                        function b(p) {
                            return m[p.kind](p)
                        }
                        const c = a.types,
                            d = a.values;
                        class e {
                            static of (p, q, r, t, u, v) {
                                return new e(p, r, t, tac(q, u), uac(q, v))
                            }
                            map(p) {
                                return p(this)
                            }
                            validate(p) {
                                return p ? new e(this.dataType, this.J6, this.mia, p6(this.decode, p), vac(this.encode, p)) : this
                            }
                            gAa(p, q) {
                                switch (q) {
                                    case 0:
                                        return [p, this.J6];
                                    case 1:
                                        return [p, c.optional(this.J6)];
                                    default:
                                        throw new E(q);
                                }
                            }
                            lAa(p, q, r, t, u) {
                                t = t === 1;
                                const v = this.mia,
                                    x = this.decode,
                                    y = this.encode;
                                switch (u) {
                                    case 0:
                                        const A = () => {
                                            var C = q.get(r);
                                            if (C == null) throw p.error(r, "not found");
                                            return x(C, p, r)
                                        };
                                        return {
                                            scope: [r, () => v(A())],
                                            get: A,
                                            set: t ? C => q.set(r, y(C, p, r)) : void 0
                                        };
                                    case 1:
                                        const z = () => {
                                            const C = q.get(r);
                                            return C != null ? x(C, p, r) : void 0
                                        };
                                        return {
                                            scope: [r, () => {
                                                const C = z();
                                                return C != null ? v(C) : void 0
                                            }],
                                            get: z,
                                            set: t ? C => C != null ? q.set(r, y(C, p, r)) : q.delete(r) : void 0
                                        };
                                    default:
                                        throw new E(u);
                                }
                            }
                            constructor(p, q, r, t, u) {
                                this.dataType = p;
                                this.J6 = q;
                                this.mia = r;
                                this.decode = t;
                                this.encode = u
                            }
                        }
                        const f = e.of({
                                kind: 0
                            }, "string", c.string, p => p, p => p.value, p => ({
                                type: "string",
                                value: p
                            })),
                            g = e.of({
                                kind: 1
                            }, "boolean", c.hh, p => p, p => p.value, p => ({
                                type: "boolean",
                                value: p
                            })),
                            h = e.of({
                                kind: 2
                            }, "double", c.number, p => p, p => p.value, p => ({
                                type: "double",
                                value: p
                            })).validate(p => Number.isFinite(p)),
                            k = e.of({
                                kind: 3
                            }, "int32", c.number, p => p, p => p.value, p => ({
                                type: "int32",
                                value: p
                            })).validate(p => Number.isFinite(p)),
                            l = {
                                Fill: e.of({
                                        kind: 6,
                                        name: "Fill"
                                    },
                                    "fill", c.instance("Fill"), p => d.instance("Fill", p), p => p.value, p => ({
                                        type: "fill",
                                        value: p
                                    })),
                                Stroke: e.of({
                                    kind: 6,
                                    name: "Stroke"
                                }, "stroke", c.instance("Stroke"), p => d.instance("Stroke", p), p => p.value, p => ({
                                    type: "stroke",
                                    value: p
                                })),
                                Richtext2: e.of({
                                    kind: 6,
                                    name: "Richtext2"
                                }, "text2", c.instance("Richtext2"), p => d.instance("Richtext2", p), p => p.value, p => ({
                                    type: "text2",
                                    value: p
                                }))
                            },
                            m = {
                                [0]: p => f.validate(wac(p.RJ)),
                                [1]: () => g,
                                [2]: p => h.validate(xac(p.range)),
                                [3]: p => k.validate(xac(p.range)),
                                [4]: p => b(p.itemType).map(q => {
                                    const r =
                                        q.mia,
                                        t = q.decode,
                                        u = q.encode;
                                    return e.of({
                                        kind: 4,
                                        itemType: q.dataType
                                    }, "list", c.array(q.J6), v => d.array(v.map(r)), (v, x, y) => v.value.map((A, z) => t(A, x, `${y}[${z}]`)), (v, x, y) => ({
                                        type: "list",
                                        value: v.map((A, z) => u(A, x, `${y}[${z}]`))
                                    }))
                                }),
                                [5]: p => b(p.valueType).map(q => {
                                    const r = q.mia,
                                        t = q.decode,
                                        u = q.encode;
                                    return e.of({
                                        kind: 5,
                                        valueType: q.dataType
                                    }, "dict", c.map(c.string, q.J6), v => d.map(td(v, r)), (v, x, y) => td(v.value.Pk(), (A, z) => t(A, x, `${y}["${z}"]`)), (v, x, y) => ({
                                        type: "dict",
                                        value: td(v, (A, z) => u(A, x, `${y}[${z}]`))
                                    }))
                                }),
                                [6]: p => l[p.name],
                                [7]: p => b(p.itemType).map(q => {
                                    const r = q.decode,
                                        t = q.encode;
                                    return e.of({
                                        kind: 7,
                                        itemType: q.dataType
                                    }, "list", c.undefined, () => {}, (u, v, x) => pac(u.value, y => t(y, v, `${x}[.]`), y => r(y, v, `${x}[.]`)), (u, v, x) => ({
                                        type: "list",
                                        value: u.map((y, A) => t(y, v, `${x}[${A}]`))
                                    }))
                                }),
                                [8]: p => b(p.itemType).map(q => {
                                    const r = q.decode,
                                        t = q.encode;
                                    return e.of({
                                        kind: 8,
                                        itemType: q.dataType
                                    }, "dict", c.undefined, () => {}, (u, v, x) => rac(u.value, y => t(y, v, `${x}[.]`), y => r(y, v, `${x}[.]`)), (u, v, x) => ({
                                        type: "dict",
                                        value: td(u, (y, A) => t(y,
                                            v, `${x}[${A}]`))
                                    }))
                                })
                            };
                        class n {
                            gAa() {
                                return this.F1a.gAa(this.pb.key, this.pb.ZVa)
                            }
                            lAa(p, q) {
                                return this.F1a.lAa(p, q, this.pb.key, this.pb.GZa, this.pb.ZVa)
                            }
                            constructor(p) {
                                this.pb = p;
                                this.F1a = b(this.pb.type)
                            }
                        }
                        return (p, q) => {
                            const r = new yac(p),
                                t = pg(q, u => new n(u));
                            return {
                                bZ: new Map(Object.values(t).map(u => u.gAa())),
                                apply: u => {
                                    const v = pg(t, x => x.lAa(r, u));
                                    return {
                                        Pxa: new Map(Object.values(v).map(x => x.scope)),
                                        data: Object.create(null, v)
                                    }
                                }
                            }
                        }
                    },
                    vac = function(a, b) {
                        return (c, d, e) => {
                            b(c, d, e);
                            return a(c, d, e)
                        }
                    },
                    p6 = function(a,
                        b) {
                        return (c, d, e) => {
                            c = a(c, d, e);
                            b(c, d, e);
                            return c
                        }
                    },
                    tac = function(a, b) {
                        return vac(b, (c, d, e) => {
                            o6(d, e, a, c.type)
                        })
                    },
                    uac = function(a, b) {
                        switch (a) {
                            case "string":
                                return p6(b, (c, d, e) => o6(d, e, "string", typeof c.value));
                            case "boolean":
                                return p6(b, (c, d, e) => o6(d, e, "boolean", typeof c.value));
                            case "double":
                            case "int32":
                                return p6(b, (c, d, e) => o6(d, e, "number", typeof c.value));
                            case "list":
                            case "dict":
                            case "text2":
                            case "fill":
                            case "stroke":
                                return b;
                            default:
                                throw new E(a);
                        }
                    },
                    xac = function(a) {
                        if (a) {
                            var b = a.min,
                                c = a.max;
                            w(b ==
                                null || c == null || b <= c);
                            return (d, e, f) => {
                                if (b != null && d < b) throw e.error(f, `value below min ${b}: ${d}`);
                                if (c != null && d > c) throw e.error(f, `value above max ${b}: ${d}`);
                            }
                        }
                    },
                    wac = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(b)) throw c.error(d, `value does not match regex ${a}: '${b}'`);
                        }
                    },
                    Cac = function() {
                        return (new Aac({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.wO.create({ ...__c.tu,
                                color: c.color
                            }))
                        })).add((a, b) => ({
                            Stroke: new a("Stroke", {
                                    color: b.string,
                                    weight: b.number,
                                    rd: b.array(b.number),
                                    Ie: b.hh
                                },
                                c => __c.UC.create({ ...__c.sQ,
                                    color: c.color,
                                    weight: c.weight,
                                    rd: c.rd.items,
                                    Ie: c.Ie
                                }))
                        })).add((a, b) => ({
                            Richtext2: new a("Richtext2", {
                                peb: b.array(b.Fc({
                                    Bb: b.string,
                                    attrs: b.map(b.string, b.string)
                                }))
                            }, c => {
                                const d = __c.pl.mc();
                                c.peb.items.forEach(e => {
                                    const f = e.fields.Bb;
                                    d.attrs(__c.Ih(e.fields.attrs.items));
                                    d.Bb(f)
                                });
                                return __c.pl.create(d.build())
                            })
                        })).add((a, b) => ({
                            Path: new a("Path", {
                                d: b.string,
                                fill: b.instance("Fill"),
                                stroke: b.union(b.instance("Stroke"), b.undefined)
                            }, c => {
                                const d = c.stroke,
                                    e = c.fill;
                                c = __c.Lab.create({ ...__c.Pib,
                                    d: c.d,
                                    fill: __c.tu
                                });
                                Object.defineProperties(c, {
                                    fill: {
                                        value: e.instance
                                    },
                                    stroke: {
                                        value: Bac(d)
                                    }
                                });
                                return c
                            })
                        })).add((a, b) => ({
                            RectElement: new a("RectElement", {
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number,
                                rotation: b.union(b.number, b.undefined),
                                fill: b.instance("Fill"),
                                X: b.union(b.array(b.number), b.undefined),
                                stroke: b.union(b.instance("Stroke"), b.undefined)
                            }, c => {
                                var d;
                                const e = c.stroke;
                                var f, g;
                                const h = __c.ru.create({ ...__c.su,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (f = c.rotation) !==
                                        null && f !== void 0 ? f : __c.su.rotation,
                                    fill: __c.tu,
                                    X: (g = (d = c.X) === null || d === void 0 ? void 0 : d.items) !== null && g !== void 0 ? g : __c.su.X
                                });
                                Object.defineProperties(h, {
                                    fill: {
                                        value: c.fill.instance
                                    },
                                    stroke: {
                                        value: Bac(e)
                                    }
                                });
                                return h
                            })
                        })).add((a, b) => ({
                            ShapeElement: new a("ShapeElement", {
                                    top: b.number,
                                    left: b.number,
                                    width: b.number,
                                    height: b.number,
                                    rotation: b.union(b.number, b.undefined),
                                    ya: b.union(b.number, b.undefined),
                                    viewBox: b.Fc({
                                        top: b.number,
                                        left: b.number,
                                        width: b.number,
                                        height: b.number
                                    }),
                                    fb: b.array(b.instance("Path"))
                                },
                                c => {
                                    var d, e;
                                    const f = __c.ZE.create({ ...__c.FQ,
                                        top: c.top,
                                        left: c.left,
                                        width: c.width,
                                        height: c.height,
                                        rotation: (d = c.rotation) !== null && d !== void 0 ? d : __c.FQ.rotation,
                                        ya: (e = c.ya) !== null && e !== void 0 ? e : __c.FQ.ya,
                                        fb: [],
                                        viewBox: c.viewBox.fields
                                    });
                                    Object.defineProperties(f, {
                                        fb: {
                                            value: new __c.o_(c.fb.items.map(g => q6(() => g.instance)))
                                        }
                                    });
                                    return f
                                })
                        }))
                    },
                    Bac = function(a) {
                        return a && {
                            ref: a.instance,
                            set() {
                                throw Error("Replacing of stroke on a model unit is not yet supported");
                            }
                        }
                    },
                    r6 = function() {
                        throw Error("ref not found");
                    },
                    Eac = function(a, b) {
                        return class extends Dac {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ? s6(__c.jx, {
                                    background: "criticalLow",
                                    width: "full",
                                    height: "full",
                                    padding: "0.25u",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    role: "alert",
                                    children: s6(__c.gx, {
                                        size: "xsmall",
                                        alignment: "center",
                                        children: __c.N("Q6XSow")
                                    })
                                }) : s6(b, { ...this.props
                                })
                            }
                            constructor(...c) {
                                super(...c);
                                this.state = {
                                    hasError: !1
                                }
                            }
                        }
                    },
                    Jac = function(a, b, c) {
                        const d = f => ({
                            element: f.ga.Pf
                        });
                        var e = f => {
                            a: {
                                var g = a.Mwb;
                                switch (f.container.type) {
                                    case "fixed-page":
                                        var h = f.container;
                                        h = g.kb.V.has(h.page) ? h.page : void 0;
                                        f = D(h, "Element container is not part of the document content.", f);
                                        g = {
                                            page: g.Ol.bNa(f)
                                        };
                                        break a;
                                    case "group-element":
                                        throw Error("Nested group elements are not supported in widget rendering.");
                                    case "controlled-element":
                                        throw Error("Nested controlled elements are not supported in widget rendering.");
                                    default:
                                        throw new E(f.container);
                                }
                            }
                            return g
                        };
                        b = D$b(b);
                        switch (c.type) {
                            case 0:
                                return c =
                                    c.JD, typeof c === "object" ? (e = a.B1a.types, e = e.YR(e.union(e.instance("RectElement"), e.instance("ShapeElement"))), Fac(a, d, b, e, c, f => new Gac(() => f().map(g => g.instance)))) : Hac(d, e, b, c);
                            case 1:
                                return Iac(a, d, e, b, c.Component);
                            default:
                                throw new E(c);
                        }
                    },
                    Fac = function(a, b, c, d, e, f) {
                        const g = a.Xna(a.B1a, c, d).compile(e);
                        return {
                            type: 0,
                            JD: h => ({
                                Pa: f(g.apply(b(h)))
                            })
                        }
                    },
                    Hac = function(a, b, c, d) {
                        return {
                            type: 0,
                            JD: e => d(c.apply(a(e)).data, b(e))
                        }
                    },
                    Iac = function(a, b, c, d, e) {
                        return {
                            type: 1,
                            Component: Eac(a.F, Kac(({
                                model: f
                            }) => {
                                const [g] =
                                Lac(() => d.apply(b(f)).data);
                                return s6(e, {
                                    data: g,
                                    Ww: a.Ww,
                                    Ji: c(f)
                                })
                            }))
                        }
                    },
                    Nac = function(a) {
                        return {
                            bZ: a.bZ,
                            apply: Mac(a.apply)
                        }
                    },
                    Mac = function(a) {
                        const b = new WeakMap;
                        return c => {
                            let d = b.get(c);
                            d || (d = a(c), b.set(c, d));
                            return d
                        }
                    },
                    t6 = __webpack_require__(519427),
                    Oac = t6.comparer,
                    q6 = t6.computed,
                    Pac = t6.observable;
                var u6 = __webpack_require__(635872).Om;
                var s6 = __webpack_require__(443763).jsx;
                var v6 = __webpack_require__(875604),
                    Kac = v6.memo,
                    Dac = v6.PureComponent,
                    Lac = v6.useState;
                var W5 = class {
                        static of (a, b, c) {
                            return new W5(a, b, c)
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.kfa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    Rac = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = Qac;
                            this.r7a = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    w6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.Xob = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    Tac = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = Sac;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    G$b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a,
                            b, c, d) {
                            this.itemType = a;
                            this.L7a = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var J$b = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var Uac = class {},
                    W$b = class extends Uac {
                        lma(a) {
                            return new W$b(a(this.value))
                        }
                        jqa(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    X$b = class extends Uac {
                        lma(a, b) {
                            return new X$b(b(this.value))
                        }
                        jqa(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var a6 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    x6 = class extends a6 {
                        ssa(a) {
                            return this === a || a.bza(b => this.A1(b))
                        }
                        DN() {
                            throw Error(`${this} is not iterable`);
                        }
                        lua(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.oda();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        oda() {
                            throw Error(`${this} is not navigable`);
                        }
                        rqa(a) {
                            a(this)
                        }
                        bza(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes =
                                void 0
                        }
                    },
                    y6 = class extends x6 {
                        A1(a) {
                            return a instanceof y6 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    z6 = class extends x6 {
                        A1(a) {
                            return a instanceof z6 && this.LD === a.LD
                        }
                        toString() {
                            return this.LD.name
                        }
                        constructor(a) {
                            super();
                            this.LD = a
                        }
                    },
                    A6 = class extends x6 {
                        A1(a) {
                            return a instanceof A6 && this.LD === a.LD && $5(this.qx, a.qx)
                        }
                        toString() {
                            return `${this.LD}<${this.qx}>`
                        }
                        constructor(a, b) {
                            super();
                            this.LD = a;
                            this.qx = b
                        }
                    },
                    Vac = class extends A6 {
                        DN() {
                            return this.qx
                        }
                        oda() {
                            const a =
                                this.qx;
                            return {
                                size: j6.number,
                                empty: j6.hh,
                                get first() {
                                    return j6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    Wac = class extends A6 {
                        DN() {
                            return this.qx
                        }
                        oda() {
                            const a = this.qx;
                            return {
                                size: j6.number,
                                empty: j6.hh,
                                get first() {
                                    return j6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    Xac = class extends x6 {
                        A1(a) {
                            return a instanceof Xac && $5(this.key, a.key) && $5(this.value, a.value)
                        }
                        toString() {
                            return `map<${this.key}, ${this.value}>`
                        }
                        constructor(a, b) {
                            super();
                            this.key = a;
                            this.value = b
                        }
                    },
                    Yac = class extends x6 {
                        A1(a) {
                            return a instanceof
                            Yac ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && $5(this.fields[b], c)) : !1
                        }
                        oda() {
                            return this.fields
                        }
                        toString() {
                            const a = Object.entries(this.fields);
                            return a.length ? `{ ${a.map(([b,c])=>`${b}: ${c}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a
                        }
                    },
                    B6 = class extends a6 {
                        ssa(a) {
                            return this === a || this.Rg.every(b => b.ssa(a))
                        }
                        DN() {
                            return j6.union(...this.Rg.map(a => a.DN()))
                        }
                        lua(a) {
                            return j6.union(...this.Rg.map(b => b.lua(a)))
                        }
                        rqa(a) {
                            this.Rg.forEach(b => b.rqa(a))
                        }
                        bza(a) {
                            return this.Rg.some(b =>
                                b.bza(a))
                        }
                        toString() {
                            return this.Rg.length ? this.Rg.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.Rg = a;
                            this.kind = "disjunction";
                            w(a.length !== 1)
                        }
                    },
                    C6 = new B6([]),
                    Zac = new y6("string"),
                    $ac = new y6("number"),
                    abc = new y6("boolean"),
                    bbc = new y6("undefined"),
                    cbc = new B6([Zac, $ac, abc]),
                    dbc = class {
                        get never() {
                            return C6
                        }
                        get string() {
                            return Zac
                        }
                        get number() {
                            return $ac
                        }
                        get hh() {
                            return abc
                        }
                        get undefined() {
                            return bbc
                        }
                        get primitive() {
                            return cbc
                        }
                        optional(a) {
                            return j6.union(a, j6.undefined)
                        }
                        array(a) {
                            return new Vac(a)
                        }
                        set(a) {
                            return new Wac(a)
                        }
                        YR(a) {
                            return new B6([new Vac(a),
                                new Wac(a)
                            ])
                        }
                        map(a, b) {
                            return new Xac(a, b)
                        }
                        Fc(a) {
                            return new Yac({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return C6;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) I$b(d).rqa(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return C6;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return $5(d, e) ? e : $5(e, d) ? d : new B6(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => $5(d, e)) || (c.forEach(e => $5(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new B6([...c])
                        }
                        constructor() {
                            this.optional = b6(this.optional);
                            this.array = b6(this.array);
                            this.set = b6(this.set);
                            this.YR = b6(this.YR)
                        }
                    },
                    ebc = class extends dbc {
                        instance(a) {
                            return new z6(a)
                        }
                    },
                    j6 = new ebc,
                    fbc = class extends dbc {
                        instance(a) {
                            return new z6(D(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var gbc, hbc, D6 = Symbol("value"),
                    E6 = class {
                        get props() {
                            var a;
                            return (a = this.G6a) !== null && a !== void 0 ? a : this.G6a = this.Nla()
                        }
                    },
                    ibc = class {
                        get size() {
                            return this[D6].length
                        }
                        get empty() {
                            return this[D6].length === 0
                        }
                        get first() {
                            return this[D6][0]
                        }
                        constructor(a) {
                            this[D6] = a
                        }
                    };
                gbc = Symbol.iterator;
                var jbc = class extends E6 {
                        Nla() {
                            return new ibc(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[gbc]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,e6).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    kbc = class {
                        get size() {
                            return this[D6].size
                        }
                        get empty() {
                            return this[D6].size === 0
                        }
                        get first() {
                            return this[D6][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[D6] = a
                        }
                    };
                hbc = Symbol.iterator;
                var lbc = class extends E6 {
                        Nla() {
                            return new kbc(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[hbc]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,e6).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    mbc = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${e6(a)}]: ${e6(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    nbc = class extends E6 {
                        Nla() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${e6(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    obc = class {
                        toString() {
                            return `[instance ${this.LD.name}]`
                        }
                        constructor(a, b) {
                            this.LD = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    pbc = class {
                        array(a) {
                            return new jbc(a)
                        }
                        arrayOf(...a) {
                            return new jbc(a)
                        }
                        set(a) {
                            return new lbc(a)
                        }
                        map(a) {
                            return new mbc(new Map(a))
                        }
                        Fc(a) {
                            return new nbc({ ...a
                            })
                        }
                    },
                    qbc = class extends pbc {
                        instance(a, b) {
                            return new obc(a, b)
                        }
                        stringify(a) {
                            return e6(a)
                        }
                        constructor() {
                            super();
                            this.gh = d6
                        }
                    },
                    n6 = new qbc,
                    rbc = class extends pbc {
                        instance(a, b) {
                            a = D(this.classes[a]);
                            return new obc(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var V$b = {
                        [0]: X5(j6.number, j6.number, a => -a),
                        [1]: X5(j6.string, j6.number, a => a.length),
                        [2]: X5(j6.hh, j6.hh, a => !a),
                        [3]: Y5(j6.number, j6.number, j6.number, (a, b) => a + b),
                        [4]: Y5(j6.number, j6.number, j6.number, (a, b) => a - b),
                        [5]: Y5(j6.number, j6.number, j6.number, (a, b) => a * b),
                        [6]: Y5(j6.number, j6.number, j6.number, (a, b) => a / b),
                        [7]: Y5(j6.number, j6.number, j6.number, (a, b) => a % b),
                        [8]: Y5(j6.string, j6.string, j6.string, (a, b) => a + b),
                        [9]: Y5(j6.number, j6.number, j6.hh, (a, b) => a === b),
                        [10]: Y5(j6.number, j6.number, j6.hh, (a, b) => a !== b),
                        [11]: Y5(j6.number,
                            j6.number, j6.hh, (a, b) => a < b),
                        [12]: Y5(j6.number, j6.number, j6.hh, (a, b) => a <= b),
                        [13]: Y5(j6.number, j6.number, j6.hh, (a, b) => a > b),
                        [14]: Y5(j6.number, j6.number, j6.hh, (a, b) => a >= b),
                        [15]: Y5(j6.hh, j6.hh, j6.hh, (a, b) => a && b),
                        [16]: Y5(j6.hh, j6.hh, j6.hh, (a, b) => a || b)
                    },
                    $$b = {
                        [2]: new w6(j6.number, j6.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new w6(j6.number, j6.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new w6(j6.number, j6.number, a => Math.max(...a)),
                        [5]: new w6(j6.number, j6.number, a => Math.min(...a)),
                        [6]: new w6(j6.string, j6.string, a =>
                            a.join(""))
                    },
                    sbc = a => n6.array(a),
                    tbc = a => n6.set(a),
                    Y$b = {
                        [0]: a => new w6(a, j6.array(a), sbc),
                        [1]: a => new w6(a, j6.set(a), tbc)
                    },
                    Sac = a => n6.map(a),
                    M$b = {
                        [0]: (a, b) => new Tac(a, b, j6.map(a, b))
                    },
                    Qac = a => n6.Fc(a),
                    cac = {
                        [0]: a => new Rac(a, j6.Fc(a))
                    },
                    ubc = (a, b) => n6.array(b.map(c => c())),
                    vbc = (a, b) => n6.array(b.flatMap(c => c().items)),
                    wbc = (a, b) => n6.array(a.filter((c, d) => b[d]()).map(c => c())),
                    xbc = (a, b) => b.some(c => c()),
                    ybc = (a, b) => b.every(c => c()),
                    zbc = (a, b) => {
                        var c;
                        return (c = a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    O$b = {
                        [0]: (a, b) => b.map(c => Z5(a, c, j6.array(c), ubc)),
                        [1]: (a, b) => b.DN().map(c => Z5(a, j6.array(c), j6.array(c), vbc)),
                        [2]: a => Z5(a, j6.hh, j6.array(a), wbc),
                        [3]: a => Z5(a, j6.hh, j6.hh, xbc),
                        [4]: a => Z5(a, j6.hh, j6.hh, ybc),
                        [5]: a => Z5(a, j6.hh, j6.optional(a), zbc)
                    };
                var g6 = class {
                    define(a, b) {
                        return new g6(new Map([
                            [a, b]
                        ]), this)
                    }
                    resolve(a) {
                        const b = this.defs.get(a);
                        if (b) return b;
                        if (this.parent) return this.parent.resolve(a);
                        throw Error(`undefined symbol: "${a}"`);
                    }
                    constructor(a, b) {
                        this.defs = a;
                        this.parent = b
                    }
                };
                var Bbc = (a, b, c) => {
                        const d = f6.create(b.bZ),
                            e = new Abc(a);
                        return {
                            compile: f => {
                                const g = S$b(e, d, f).as(c);
                                return {
                                    apply: h => {
                                        h = new g6(new Map(b.apply(h).Pxa));
                                        return g(h)
                                    }
                                }
                            }
                        }
                    },
                    f6 = class {
                        static create(a) {
                            return new f6(new g6(new Map(a)), new g6(new Map))
                        }
                        constructor(a = new g6(new Map), b = new g6(new Map)) {
                            this.vars = a;
                            this.a0 = b
                        }
                    },
                    Abc = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    l6 = class {
                        static of (a, b) {
                            return new l6(a, b)
                        }
                        as(a) {
                            if (!$5(this.type, a)) throw Error(`type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a =
                                this.evaluate;
                            return new l6(this.type, b => {
                                const c = q6(a(b), {
                                    equals: n6.gh
                                });
                                return () => c.get()
                            })
                        }
                        map(a) {
                            return a(this.type, this.evaluate)
                        }
                        constructor(a, b) {
                            this.type = a;
                            this.evaluate = b
                        }
                    },
                    nac = class {
                        as(a, b) {
                            const c = this.kfa,
                                d = this.resultType;
                            if (a.length < c.length) throw Error(`Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`);
                            for (let e = 0; e < c.length; e++)
                                if (!$5(a[e], c[e])) throw Error(`Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`);
                            if (!$5(d, b)) throw Error(`return type ${d} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.kfa = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var Aac = class {
                        add(a) {
                            a = a(Cbc, this.types);
                            return new Aac({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        evaluate(a) {
                            const b = this.types;
                            switch (a.kind) {
                                case 0:
                                    switch (a.name) {
                                        case "string":
                                            return b.string;
                                        case "number":
                                            return b.number;
                                        case "boolean":
                                            return b.hh;
                                        case "undefined":
                                            return b.undefined;
                                        default:
                                            throw new E(a);
                                    }
                                case 1:
                                    return b.instance(a.name);
                                case 4:
                                    switch (a.name) {
                                        case "array":
                                            return b.array(this.evaluate(a.UGa));
                                        case "set":
                                            return b.set(this.evaluate(a.UGa));
                                        default:
                                            throw new E(a);
                                    }
                                case 5:
                                    switch (a.name) {
                                        case "map":
                                            const c = this.evaluate(a.UGa);
                                            a = this.evaluate(a.lAb);
                                            if (!$5(c, b.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                            return b.map(c, a);
                                        default:
                                            throw new E(a);
                                    }
                                case 3:
                                    return b.union(...a.args.map(c => this.evaluate(c)));
                                case 2:
                                    return b.Fc(pg(a.args, c => this.evaluate(c)));
                                default:
                                    throw new E(a);
                            }
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new fbc(this.classes);
                            this.values = new rbc(this.classes)
                        }
                    },
                    Cbc = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.Slb = new W5([j6.Fc(b)],
                                j6.instance(this), d => n6.instance(this, c(d.fields)))
                        }
                    };
                var Dbc;
                Dbc = Symbol.iterator;
                var oac = class {
                    static A(a) {
                        O(a, {
                            F2: q6
                        })
                    }
                    get F2() {
                        const a = new Map;
                        this.base.forEach(b => a.set(this.Cf(b), b));
                        return a
                    }
                    hs(a) {
                        return D(this.F2.get(a))
                    }
                    vU(a) {
                        return a != null ? this.Cf(a) : void 0
                    }
                    get empty() {
                        return this.base.empty
                    }
                    count() {
                        return this.base.count()
                    }
                    toArray() {
                        return this.base.toArray().map(this.Cf)
                    }
                    Pk() {
                        return td(this.base.Pk(), this.Cf)
                    }[Dbc]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    first(a) {
                        return this.vU(this.base.first(a && (b => a(this.Cf(b)))))
                    }
                    last(a) {
                        return this.vU(this.base.last(a && (b => a(this.Cf(b)))))
                    }
                    next(a,
                        b) {
                        return this.vU(this.base.next(this.hs(a), b && (c => b(this.Cf(c)))))
                    }
                    Ub(a, b) {
                        return this.vU(this.base.Ub(this.hs(a), b && (c => b(this.Cf(c)))))
                    }
                    je(a, b) {
                        return this.base.je(this.hs(a), this.hs(b))
                    }
                    Xt(a) {
                        return this.base.Xt(this.hs(a))
                    }
                    has(a) {
                        return this.base.has(this.hs(a))
                    }
                    set(a, b) {
                        return this.Cf(this.base.set(a, this.YE(b)))
                    }
                    replace(a, b) {
                        return this.Cf(this.base.replace(this.hs(a), this.YE(b)))
                    }
                    append(a) {
                        return this.Cf(this.base.append(this.YE(a)))
                    }
                    prepend(a) {
                        return this.Cf(this.base.prepend(this.YE(a)))
                    }
                    DE(a,
                        b) {
                        return this.Cf(this.base.DE(a && this.hs(a), this.YE(b)))
                    }
                    insertBefore(a, b) {
                        return this.Cf(this.base.insertBefore(a && this.hs(a), this.YE(b)))
                    }
                    EE(a, b) {
                        return this.base.EE(a && this.hs(a), b.map(this.YE)).map(this.Cf)
                    }
                    delete(a) {
                        this.base.delete(this.hs(a))
                    }
                    Jx(a) {
                        this.base.Jx(a && (b => a(this.Cf(b))))
                    }
                    pp(a, b) {
                        this.base.pp(a && this.hs(a), this.hs(b))
                    }
                    uq(a) {
                        return new __c.DM(this, a)
                    }
                    map(a) {
                        return this.base.map((b, c) => a(this.Cf(b), c))
                    }
                    flatMap(a) {
                        return this.base.flatMap((b, c) => a(this.Cf(b), c))
                    }
                    filter(a) {
                        return this.base.filter((b,
                            c) => a(this.Cf(b), c)).map(this.Cf)
                    }
                    forEach(a) {
                        this.base.forEach((b, c) => a(this.Cf(b), c))
                    }
                    reduce(a, b) {
                        return this.base.reduce((c, d) => a(c, this.Cf(d)), b)
                    }
                    some(a) {
                        return this.base.some(b => a(this.Cf(b)))
                    }
                    every(a) {
                        return this.base.every(b => a(this.Cf(b)))
                    }
                    constructor(a, b, c) {
                        this.base = a;
                        this.YE = b;
                        this.Cf = c;
                        oac.A(this)
                    }
                };
                var Ebc;
                Ebc = Symbol.iterator;
                var qac = class {
                    static A(a) {
                        O(a, {
                            F2: q6
                        })
                    }
                    get F2() {
                        const a = new Map;
                        this.base.forEach(b => a.set(this.Cf(b), b));
                        return a
                    }
                    hs(a) {
                        return D(this.F2.get(a))
                    }
                    vU(a) {
                        return a != null ? this.Cf(a) : void 0
                    }
                    get size() {
                        return this.base.size
                    }
                    get(a) {
                        a = this.base.get(a);
                        return this.vU(a)
                    }
                    has(a) {
                        return this.base.has(a)
                    }
                    forEach(a) {
                        this.base.forEach((b, c) => a(this.Cf(b), c))
                    }
                    map(a) {
                        return this.base.map((b, c) => a(this.Cf(b), c))
                    }
                    set(a, b) {
                        return this.Cf(this.base.set(a, this.YE(b)))
                    }
                    every(a) {
                        return this.base.every((b, c) => a(this.Cf(b),
                            c))
                    }
                    delete(a) {
                        this.base.delete(a)
                    }
                    entries() {
                        return sac(this.base.entries(), ([a, b]) => [a, this.Cf(b)])
                    }
                    keys() {
                        return this.base.keys()
                    }
                    values() {
                        return sac(this.base.values(), this.Cf)
                    }[Ebc]() {
                        return this.Pk()[Symbol.iterator]()
                    }
                    Pk() {
                        return td(this.base.Pk(), this.Cf)
                    }
                    constructor(a, b, c) {
                        this.base = a;
                        this.YE = b;
                        this.Cf = c;
                        qac.A(this)
                    }
                };
                var yac = class {
                    error(a, b) {
                        return Error(`widget '${this.Owb}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.Owb = a
                    }
                };
                var Gbc = class {
                        constructor(a, b) {
                            this.uga = a;
                            w(b.Wd === "fixed", "Responsive documents are not supported in widget rendering.");
                            this.kb = b;
                            this.Ol = new Fbc(this.uga, this.kb)
                        }
                    },
                    F6 = class {
                        get index() {
                            return this.jI(this.page)
                        }
                        get id() {
                            return this.page.id
                        }
                        get title() {
                            return this.page.title
                        }
                        get anchor() {
                            return this.page.anchor
                        }
                        get gib() {
                            return this.page.nf
                        }
                        constructor(a, b) {
                            this.page = a;
                            this.jI = b
                        }
                    },
                    Hbc = class extends F6 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "fixed"
                        }
                    },
                    Ibc = class extends F6 {
                        constructor(a,
                            b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "concatenated-fixed"
                        }
                    },
                    Jbc = class extends F6 {
                        constructor(a, b, c) {
                            super(a, b);
                            this.page = a;
                            this.container = c;
                            this.type = "responsive"
                        }
                    },
                    Kbc = class {
                        get id() {
                            var a;
                            return (a = this.uga) === null || a === void 0 ? void 0 : a.id
                        }
                        get extension() {
                            var a;
                            return (a = this.uga) === null || a === void 0 ? void 0 : a.extension
                        }
                        get language() {
                            return this.kb.language
                        }
                        constructor(a, b) {
                            this.uga = a;
                            this.kb = b
                        }
                    },
                    Fbc = class extends Kbc {
                        static A(a) {
                            O(a, {
                                V: q6({
                                    equals: Oac.shallow
                                }),
                                RSa: q6({
                                    equals: Oac.shallow
                                })
                            })
                        }
                        get V() {
                            return this.kb.V.map(a =>
                                this.qfb(a))
                        }
                        get RSa() {
                            return this.kb.V.toArray()
                        }
                        constructor(a, b) {
                            super(a, b);
                            this.GH = a;
                            this.kb = b;
                            this.type = (Fbc.A(this), "fixed");
                            this.bNa = u6(c => new Hbc(c, this.jI, this));
                            this.qfb = u6(c => {
                                switch (c.type) {
                                    case "fixed":
                                        return this.bNa(c);
                                    case "concatenated-fixed":
                                        return new Ibc(c, this.jI, this);
                                    case "responsive":
                                        return new Jbc(c, this.jI, this);
                                    default:
                                        throw new E(c);
                                }
                            });
                            this.jI = u6(c => this.RSa.indexOf(c))
                        }
                    };
                var Lbc = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    Pk() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        r6()
                    },
                    Ub() {
                        r6()
                    },
                    je() {
                        r6()
                    },
                    Xt() {
                        r6()
                    },
                    has() {
                        return !1
                    },
                    uq() {
                        return this
                    },
                    map() {
                        return []
                    },
                    flatMap() {
                        return []
                    },
                    filter() {
                        return []
                    },
                    forEach() {},
                    reduce(a, b) {
                        return b
                    },
                    some() {
                        return !1
                    },
                    every() {
                        return !0
                    },
                    [Symbol.iterator]() {
                        return [][Symbol.iterator]()
                    }
                });
                var Mbc;
                Mbc = Symbol.iterator;
                var Gac = class {
                    static A(a) {
                        O(a, {
                            Fe: q6,
                            Ln: q6
                        })
                    }
                    get Fe() {
                        return this.w7a().map(a => {
                            let b = this.kOa.get(a);
                            b == null && (b = `${this.Hgb++}`, this.kOa.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get Ln() {
                        const a = new Map;
                        this.Fe.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    vj(a) {
                        return D(this.Ln.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.Fe.length
                    }
                    count() {
                        return this.Fe.length
                    }
                    toArray() {
                        return this.Fe.map(a => a.ref)
                    }
                    Pk() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get EM() {
                        const a = this.Fe[0];
                        return a && a.ref
                    }
                    get IN() {
                        const a =
                            this.Fe[this.Fe.length - 1];
                        return a && a.ref
                    }
                    first(a) {
                        if (!a) return this.EM;
                        const b = this.Fe.find(c => a(c.ref));
                        return b && b.ref
                    }
                    last(a) {
                        if (!a) return this.IN;
                        const b = this.Fe;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.Fe;
                        for (a = this.vj(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Ub(a, b) {
                        const c = this.Fe;
                        for (a = this.vj(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    je(a, b) {
                        a = this.Ln.get(a);
                        b = this.Ln.get(b);
                        w(a != null);
                        w(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    Xt(a) {
                        return this.Fe[this.vj(a)].id
                    }
                    has(a) {
                        return this.Ln.has(a)
                    }
                    uq(a) {
                        return new __c.DM(this, a)
                    }
                    map(a) {
                        return this.Fe.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.Fe.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.Fe.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.Fe.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.Fe.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.Fe.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.Fe.every(b => a(b.ref, b.id))
                    }[Mbc]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.w7a =
                            a;
                        this.Hgb = (Gac.A(this), 0);
                        this.kOa = new WeakMap
                    }
                };
                var Nbc = new Set,
                    Obc = {
                        JD: () => ({
                            Pa: Lbc
                        })
                    },
                    Pbc = class {
                        static A(a) {
                            O(a, {
                                oga: Pac.shallow
                            })
                        }
                        Chb(a, b, {
                            element: c,
                            exports: d
                        }) {
                            const e = D(this.qrb.Cga.get(a));
                            w(e.element === b.element);
                            w(!this.oga.has(a));
                            b = {
                                element: Jac(this, b, c),
                                exports: d
                            };
                            this.oga.set(a, b);
                            Nbc.has(a) || (__c.yP.set(a, Obc), Nbc.add(a));
                            return b
                        }
                        zdb(a) {
                            var b;
                            return (b = this.oga.get(a)) === null || b === void 0 ? void 0 : b.element
                        }
                        constructor(a, b, c, d, e, f) {
                            this.qrb = a;
                            this.B1a = b;
                            this.Xna = c;
                            this.F = d;
                            this.Mwb = e;
                            this.Ww = f;
                            this.oga = (Pbc.A(this), new Map)
                        }
                    };
                var Qbc = class {
                    static A(a) {
                        O(a, {
                            Cga: Pac.shallow
                        })
                    }
                    Dhb(a, b) {
                        w(!this.Cga.has(a));
                        b = {
                            document: Nac(this.LJa(a, b.document)),
                            element: Nac(this.LJa(a, b.element))
                        };
                        this.Cga.set(a, b);
                        return b
                    }
                    constructor(a) {
                        this.LJa = a;
                        this.Cga = (Qbc.A(this), new Map)
                    }
                };
                __c.JSa = {
                    Ihb: function(a) {
                        var b = a.F;
                        const c = a.Qwb;
                        var d = a.GH;
                        const e = a.kb;
                        a = {
                            jo: Cac(),
                            Xna: Bbc
                        };
                        const {
                            jo: f,
                            Xna: g
                        } = a;
                        a = new Qbc(zac(f));
                        d = new Gbc(d, e);
                        b = new Pbc(a, f, g, b, d, c);
                        return {
                            FDa: a,
                            BQb: a,
                            k7: b,
                            j7: b
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/5e41aa5228642cb0.js.map