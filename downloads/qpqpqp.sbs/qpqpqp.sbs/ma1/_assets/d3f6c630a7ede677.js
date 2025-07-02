(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [85862], {

        /***/
        914242: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var j_;
                __c.i_ = function(a) {
                    return {
                        kind: 0,
                        RJ: a
                    }
                };
                j_ = function(a, b, c) {
                    return (d, ...e) => ({
                        key: d,
                        GZa: a,
                        ZVa: b,
                        type: c(...e)
                    })
                };
                __c.k_ = function(a) {
                    const b = new Set;
                    for (const d of Object.values(a)) {
                        __c.w(!b.has(d.key), 'duplicate key: "{}"', d.key);
                        var c;
                        if (c = d.GZa === 1) a: switch (c = d.type, c.kind) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                c = !1;
                                break a;
                            case 6:
                            case 7:
                            case 8:
                                c = !0;
                                break a;
                            default:
                                throw new __c.E(c);
                        }
                        __c.w(!c, 'settable mutable: "{}"', d.key);
                        b.add(d.key)
                    }
                    return a
                };
                __c.l_ = j_(1, 0, __c.i_);
                __c.QSb = j_(1, 0, function(a) {
                    return {
                        kind: 3,
                        range: a
                    }
                });
                __c.RSb = j_(1, 0, function(a) {
                    return {
                        kind: 4,
                        itemType: a
                    }
                });
                __c.SSb = j_(1, 1, __c.i_);
                __c.TSb = j_(0, 0, function(a) {
                    return {
                        kind: 6,
                        name: a
                    }
                });
                __c.m_ = __c.k_({});
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/d3f6c630a7ede677.js.map