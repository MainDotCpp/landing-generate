(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [82232], {

        /***/
        931757: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var n_ = __webpack_require__(519427).computed;
                var USb, VSb = class {
                    get value() {
                        return this.box.get()
                    }
                    constructor(a, b) {
                        this.id = a;
                        this.box = b
                    }
                };
                USb = Symbol.iterator;
                __c.o_ = class {
                    static A(a) {
                        __c.O(a, {
                            Ln: n_,
                            EM: n_,
                            IN: n_
                        })
                    }
                    get Ln() {
                        const a = new Map;
                        this.cells.forEach((b, c) => a.set(b.value, c));
                        return a
                    }
                    vj(a) {
                        return __c.D(this.Ln.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.cells.length
                    }
                    count() {
                        return this.cells.length
                    }
                    toArray() {
                        return this.cells.map(a => a.value)
                    }
                    Pk() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get EM() {
                        const a = this.cells[0];
                        return a && a.value
                    }
                    get IN() {
                        const a = this.cells[this.cells.length - 1];
                        return a && a.value
                    }
                    first(a) {
                        if (!a) return this.EM;
                        const b = this.cells.find(c =>
                            a(c.value));
                        return b && b.value
                    }
                    last(a) {
                        if (!a) return this.IN;
                        const b = this.cells;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.value)) return d.value
                        }
                    }
                    next(a, b) {
                        const c = this.cells;
                        for (a = this.vj(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    Ub(a, b) {
                        const c = this.cells;
                        for (a = this.vj(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (d && (!b || b(d.value))) return d.value
                        }
                    }
                    je(a, b) {
                        a = this.Ln.get(a);
                        b = this.Ln.get(b);
                        __c.w(a != null);
                        __c.w(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    Xt(a) {
                        return this.cells[this.vj(a)].id
                    }
                    has(a) {
                        return this.Ln.has(a)
                    }
                    uq(a) {
                        return new __c.DM(this,
                            a)
                    }
                    map(a) {
                        return this.cells.map(b => a(b.value, b.id))
                    }
                    flatMap(a) {
                        return this.cells.flatMap(b => a(b.value, b.id))
                    }
                    filter(a) {
                        return this.cells.filter(b => a(b.value, b.id)).map(b => b.value)
                    }
                    forEach(a) {
                        this.cells.forEach(b => a(b.value, b.id))
                    }
                    reduce(a, b) {
                        return this.cells.reduce((c, d) => a(c, d.value, d.id), b)
                    }
                    some(a) {
                        return this.cells.some(b => a(b.value, b.id))
                    }
                    every(a) {
                        return this.cells.every(b => a(b.value, b.id))
                    }[USb]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.cells = (__c.o_.A(this), void 0);
                        this.cells =
                            a.map((b, c) => new VSb(String(c), b))
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/15d8b4c2162f95b0.js.map