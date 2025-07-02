(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [26489], {

        /***/
        564722: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var XPb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.Tr(a),
                                d = c instanceof __c.Ur ? c.Qp() : c;
                            return __c.Kq(b, e => {
                                e = __c.Tr(e);
                                e = e instanceof __c.Ur ? __c.tG(e, d) : e;
                                return Math.abs(__c.ms(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    YPb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.pr(b)[0]).join("")
                    },
                    aQb = function(a = "") {
                        a = ZPb(a);
                        a = Math.floor(a() * $Pb.length);
                        return $Pb[a]
                    },
                    bQb = __webpack_require__(875604),
                    cQb =
                    bQb.memo,
                    dQb = bQb.useId;
                var ZPb = __webpack_require__(503216);
                var eQb = __webpack_require__(443763),
                    jZ = eQb.jsx,
                    fQb = eQb.jsxs;
                var gQb = __webpack_require__,
                    hQb = gQb(993864),
                    kZ = gQb.n_x(hQb)();
                __c.iQb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var $Pb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.Vr(__c.Or(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var jQb = cQb(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        yR: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    if (d) {
                        a = __c.Tr(d);
                        var n = a instanceof __c.Ur ? __c.Wr(a) : __c.Vr(a)
                    } else n = e ? aQb(e) : "#8e8e8e";
                    var p = dQb();
                    switch (l) {
                        case "circle":
                            a = jZ("defs", {
                                children: jZ("clipPath", {
                                    id: p,
                                    children: jZ("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = jZ("defs", {
                                children: jZ("clipPath", {
                                    id: p,
                                    children: jZ("rect", {
                                        id: `${p}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    switch (l) {
                        case "circle":
                            p = jZ("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: kZ("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = jZ("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: kZ("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    n = XPb(n);
                    return jZ("span", {
                        role: f,
                        "aria-label": g,
                        className: kZ("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: fQb("svg", {
                            className: h,
                            style: k,
                            children: [a, p, jZ("text", {
                                x: "50%",
                                y: "50%",
                                "aria-hidden": "true",
                                textAnchor: "middle",
                                fill: n,
                                fontWeight: "500",
                                fontSize: "50%",
                                dominantBaseline: "central",
                                letterSpacing: "0.01rem",
                                dy: "-0.04em",
                                children: YPb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var kQb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var lQb = ({
                    borderColor: a,
                    KVa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => jZ("span", {
                    className: kZ(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        "--RKyZlA": a,
                        ...e
                    },
                    role: f,
                    "aria-label": f === "img" ? c : void 0,
                    ...g
                });
                __c.mQb = ({
                    name: a,
                    t7a: b,
                    ariaLabel: c,
                    yR: d,
                    backgroundColor: e,
                    borderColor: f,
                    Qq: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = kZ("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? jZ(lQb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        KVa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? jZ(jQb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        yR: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : jZ(lQb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        KVa: kQb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/7cb74b5b39699bfa.js.map