function e(e, t, n, i) { Object.defineProperty(e, t, { get: n, set: i, enumerable: !0, configurable: !0 }) } function t(e) { Object.defineProperty(e, '__esModule', { value: !0, configurable: !0 }) } function n(e) { return e && e.__esModule ? e.default : e } const i = typeof globalThis != 'undefined' ? globalThis : typeof self != 'undefined' ? self : typeof window != 'undefined' ? window : typeof global != 'undefined' ? global : {}; const o = {}; const r = {}; let s = i.parcelRequire645f; s == null && ((s = function (e) {
  if (e in o)
    return o[e].exports; if (e in r) { const t = r[e]; delete r[e]; const n = { id: e, exports: {} }; return o[e] = n, t.call(n.exports, n, n.exports), n.exports } const i = new Error(`Cannot find module '${e}'`); throw i.code = 'MODULE_NOT_FOUND', i
}).register = function (e, t) { r[e] = t }, i.parcelRequire645f = s), s.register('2q3cG', (t, n) => {
  let i, o; e(t.exports, 'register', () => { return i }, (e) => { return i = e }), e(t.exports, 'resolve', () => { return o }, (e) => { return o = e }); const r = {}; i = function (e) { for (let t = Object.keys(e), n = 0; n < t.length; n++)r[t[n]] = e[t[n]] }, o = function (e) {
    const t = r[e]; if (t == null)
      throw new Error(`Could not resolve bundle with id ${e}`); return t
  }
}), s.register('60YFH', (e, t) => {
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
  !(function (t, n) {
    typeof e.exports == 'object'
      ? e.exports = t.document
        ? n(t, !0)
        : function (e) {
          if (!e.document)
            throw new Error('jQuery requires a window with a document'); return n(e)
        }
      : n(t)
  }(typeof window != 'undefined' ? window : e.exports, (e, t) => {
    const n = []; const i = Object.getPrototypeOf; const o = n.slice; const r = n.flat ? function (e) { return n.flat.call(e) } : function (e) { return n.concat.apply([], e) }; const s = n.push; const a = n.indexOf; const l = {}; const c = l.toString; const d = l.hasOwnProperty; const u = d.toString; const p = u.call(Object); const f = {}; const h = function (e) { return typeof e == 'function' && typeof e.nodeType != 'number' && typeof e.item != 'function' }; const v = function (e) { return e != null && e === e.window }; const g = e.document; const y = { type: !0, src: !0, nonce: !0, noModule: !0 }; function m(e, t, n) {
      let i; let o; const r = (n = n || g).createElement('script'); if (r.text = e, t) {
        for (i in y)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o)
      } n.head.appendChild(r).parentNode.removeChild(r)
    } function w(e) { return e == null ? `${e}` : typeof e == 'object' || typeof e == 'function' ? l[c.call(e)] || 'object' : typeof e } const b = '3.6.0'; const x = function (e, t) { return new x.fn.init(e, t) }; function T(e) { const t = !!e && 'length' in e && e.length; const n = w(e); return !h(e) && !v(e) && (n === 'array' || t === 0 || typeof t == 'number' && t > 0 && t - 1 in e) }x.fn = x.prototype = { jquery: b, constructor: x, length: 0, toArray() { return o.call(this) }, get(e) { return e == null ? o.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack(e) { const t = x.merge(this.constructor(), e); return t.prevObject = this, t }, each(e) { return x.each(this, e) }, map(e) { return this.pushStack(x.map(this, (t, n) => { return e.call(t, n, t) })) }, slice() { return this.pushStack(o.apply(this, arguments)) }, first() { return this.eq(0) }, last() { return this.eq(-1) }, even() { return this.pushStack(x.grep(this, (e, t) => { return (t + 1) % 2 })) }, odd() { return this.pushStack(x.grep(this, (e, t) => { return t % 2 })) }, eq(e) { const t = this.length; const n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end() { return this.prevObject || this.constructor() }, push: s, sort: n.sort, splice: n.splice }, x.extend = x.fn.extend = function () {
      let e; let t; let n; let i; let o; let r; let s = arguments[0] || {}; let a = 1; const l = arguments.length; let c = !1; for (typeof s == 'boolean' && (c = s, s = arguments[a] || {}, a++), typeof s == 'object' || h(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
        if ((e = arguments[a]) != null) {
          for (t in e)i = e[t], t !== '__proto__' && s !== i && (c && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {}, o = !1, s[t] = x.extend(c, r, i)) : void 0 !== i && (s[t] = i))
        }
      } return s
    }, x.extend({ expando: `jQuery${(b + Math.random()).replace(/\D/g, '')}`, isReady: !0, error(e) { throw new Error(e) }, noop() {}, isPlainObject(e) { let t, n; return !(!e || c.call(e) !== '[object Object]') && (!(t = i(e)) || typeof (n = d.call(t, 'constructor') && t.constructor) == 'function' && u.call(n) === p) }, isEmptyObject(e) { let t; for (t in e) return !1; return !0 }, globalEval(e, t, n) { m(e, { nonce: t && t.nonce }, n) }, each(e, t) {
      let n; let i = 0; if (T(e)) {
        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
      }
      else {
        for (i in e) {
          if (!1 === t.call(e[i], i, e[i]))
            break
        }
      } return e
    }, makeArray(e, t) { const n = t || []; return e != null && (T(new Object(e)) ? x.merge(n, typeof e == 'string' ? [e] : e) : s.call(n, e)), n }, inArray(e, t, n) { return t == null ? -1 : a.call(t, e, n) }, merge(e, t) { for (var n = +t.length, i = 0, o = e.length; i < n; i++)e[o++] = t[i]; return e.length = o, e }, grep(e, t, n) { for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)!t(e[o], o) !== s && i.push(e[o]); return i }, map(e, t, n) {
      let i; let o; let s = 0; const a = []; if (T(e)) {
        for (i = e.length; s < i; s++)(o = t(e[s], s, n)) != null && a.push(o)
      }
      else {
        for (s in e)(o = t(e[s], s, n)) != null && a.push(o)
      } return r(a)
    }, guid: 1, support: f }), typeof Symbol == 'function' && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), (e, t) => { l[`[object ${t}]`] = t.toLowerCase() }); const k
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
= (function (e) {
  let t; let n; let i; let o; let r; let s; let a; let l; let c; let d; let u; let p; let f; let h; let v; let g; let y; let m; let w; const b = `sizzle${1 * new Date()}`; const x = e.document; let T = 0; let k = 0; const S = le(); const C = le(); const $ = le(); const A = le(); let E = function (e, t) { return e === t && (u = !0), 0 }; const L = {}.hasOwnProperty; let j = []; const D = j.pop; const N = j.push; let O = j.push; const H = j.slice; const q = function (e, t) {
    for (let n = 0, i = e.length; n < i; n++) {
      if (e[n] === t)
        return n
    } return -1
  }; const P = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped'; const M = '[\\x20\\t\\r\\n\\f]'; const I = `(?:\\\\[\\da-fA-F]{1,6}${M}?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+`; const R = `\\[${M}*(${I})(?:${M}*([*^$|!~]?=)${M}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${I}))|)${M}*\\]`; const z = `:(${I})(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|${R})*)|.*)\\)|)`; const W = new RegExp(`${M}+`, 'g'); const F = new RegExp(`^${M}+|((?:^|[^\\\\])(?:\\\\.)*)${M}+$`, 'g'); const _ = new RegExp(`^${M}*,${M}*`); const B = new RegExp(`^${M}*([>+~]|${M})${M}*`); const U = new RegExp(`${M}|>`); const X = new RegExp(z); const Y = new RegExp(`^${I}$`); const G = { ID: new RegExp(`^#(${I})`), CLASS: new RegExp(`^\\.(${I})`), TAG: new RegExp(`^(${I}|\\*)`), ATTR: new RegExp(`^${R}`), PSEUDO: new RegExp(`^${z}`), CHILD: new RegExp(`^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(${M}*(even|odd|(([+-]|)(\\d*)n|)${M}*(?:([+-]|)${M}*(\\d+)|))${M}*\\)|)`, 'i'), bool: new RegExp(`^(?:${P})$`, 'i'), needsContext: new RegExp(`^${M}*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(${M}*((?:-\\d)?\\d*)${M}*\\)|)(?=[^-]|$)`, 'i') }; const V = /HTML$/i; const J = /^(?:input|select|textarea|button)$/i; const Q = /^h\d$/i; const K = /^[^{]+\{\s*\[native \w/; const Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/; const ee = /[+~]/; const te = new RegExp(`\\\\[\\da-fA-F]{1,6}${M}?|\\\\([^\\r\\n\\f])`, 'g'); const ne = function (e, t) { const n = `0x${e.slice(1)}` - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) }; const ie = /([\0-\x1F\x7F]|^-?\d)|^-$|[^\0-\x1F\x7F-\uFFFF\w-]/g; const oe = function (e, t) { return t ? e === '\0' ? '�' : `${e.slice(0, -1)}\\${e.charCodeAt(e.length - 1).toString(16)} ` : `\\${e}` }; const re = function () { p() }; const se = be((e) => { return !0 === e.disabled && e.nodeName.toLowerCase() === 'fieldset' }, { dir: 'parentNode', next: 'legend' }); try { O.apply(j = H.call(x.childNodes), x.childNodes), j[x.childNodes.length].nodeType }
  catch (e) { O = { apply: j.length ? function (e, t) { N.apply(e, H.call(t)) } : function (e, t) { for (var n = e.length, i = 0; e[n++] = t[i++];);e.length = n - 1 } } } function ae(e, t, i, o) {
    let r; let a; let c; let d; let u; let h; let y; let m = t && t.ownerDocument; const x = t ? t.nodeType : 9; if (i = i || [], typeof e != 'string' || !e || x !== 1 && x !== 9 && x !== 11)
      return i; if (!o && (p(t), t = t || f, v)) {
      if (x !== 11 && (u = Z.exec(e))) {
        if (r = u[1]) {
          if (x === 9) {
            if (!(c = t.getElementById(r)))
              return i; if (c.id === r)
              return i.push(c), i
          }
          else if (m && (c = m.getElementById(r)) && w(t, c) && c.id === r) {
            return i.push(c), i
          }
        }
        else {
          if (u[2])
            return O.apply(i, t.getElementsByTagName(e)), i; if ((r = u[3]) && n.getElementsByClassName && t.getElementsByClassName)
            return O.apply(i, t.getElementsByClassName(r)), i
        }
      } if (n.qsa && !A[`${e} `] && (!g || !g.test(e)) && (x !== 1 || t.nodeName.toLowerCase() !== 'object')) {
        if (y = e, m = t, x === 1 && (U.test(e) || B.test(e))) { for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((d = t.getAttribute('id')) ? d = d.replace(ie, oe) : t.setAttribute('id', d = b)), a = (h = s(e)).length; a--;)h[a] = `${d ? `#${d}` : ':scope'} ${we(h[a])}`; y = h.join(',') } try { return O.apply(i, m.querySelectorAll(y)), i }
        catch (t) { A(e, !0) }
        finally { d === b && t.removeAttribute('id') }
      }
    } return l(e.replace(F, '$1'), t, i, o)
  } function le() { const e = []; return function t(n, o) { return e.push(`${n} `) > i.cacheLength && delete t[e.shift()], t[`${n} `] = o } } function ce(e) { return e[b] = !0, e } function de(e) {
    let t = f.createElement('fieldset'); try { return !!e(t) }
    catch (e) { return !1 }
    finally { t.parentNode && t.parentNode.removeChild(t), t = null }
  } function ue(e, t) { for (let n = e.split('|'), o = n.length; o--;)i.attrHandle[n[o]] = t } function pe(e, t) {
    let n = t && e; const i = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex; if (i)
      return i; if (n) {
      for (;n = n.nextSibling;) {
        if (n === t)
          return -1
      }
    } return e ? 1 : -1
  } function fe(e) { return function (t) { return t.nodeName.toLowerCase() === 'input' && t.type === e } } function he(e) { return function (t) { const n = t.nodeName.toLowerCase(); return (n === 'input' || n === 'button') && t.type === e } } function ve(e) { return function (t) { return 'form' in t ? t.parentNode && !1 === t.disabled ? 'label' in t ? 'label' in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : 'label' in t && t.disabled === e } } function ge(e) { return ce((t) => { return t = +t, ce((n, i) => { for (var o, r = e([], n.length, t), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o])) }) }) } function ye(e) { return e && void 0 !== e.getElementsByTagName && e } for (t in n = ae.support = {}, r = ae.isXML = function (e) { const t = e && e.namespaceURI; const n = e && (e.ownerDocument || e).documentElement; return !V.test(t || n && n.nodeName || 'HTML') }, p = ae.setDocument = function (e) {
    let t; let o; const s = e ? e.ownerDocument || e : x; return s != f && s.nodeType === 9 && s.documentElement
      ? (h = (f = s).documentElement, v = !r(f), x != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener('unload', re, !1) : o.attachEvent && o.attachEvent('onunload', re)), n.scope = de((e) => { return h.appendChild(e).appendChild(f.createElement('div')), void 0 !== e.querySelectorAll && !e.querySelectorAll(':scope fieldset div').length }), n.attributes = de((e) => { return e.className = 'i', !e.getAttribute('className') }), n.getElementsByTagName = de((e) => { return e.appendChild(f.createComment('')), !e.getElementsByTagName('*').length }), n.getElementsByClassName = K.test(f.getElementsByClassName), n.getById = de((e) => { return h.appendChild(e).id = b, !f.getElementsByName || !f.getElementsByName(b).length }), n.getById
          ? (i.filter.ID = function (e) { const t = e.replace(te, ne); return function (e) { return e.getAttribute('id') === t } }, i.find.ID = function (e, t) { if (void 0 !== t.getElementById && v) { const n = t.getElementById(e); return n ? [n] : [] } })
          : (i.filter.ID = function (e) { const t = e.replace(te, ne); return function (e) { const n = void 0 !== e.getAttributeNode && e.getAttributeNode('id'); return n && n.value === t } }, i.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && v) {
                let n; let i; let o; let r = t.getElementById(e); if (r) {
                  if ((n = r.getAttributeNode('id')) && n.value === e)
                    return [r]; for (o = t.getElementsByName(e), i = 0; r = o[i++];) {
                    if ((n = r.getAttributeNode('id')) && n.value === e)
                      return [r]
                  }
                } return []
              }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { let n; const i = []; let o = 0; const r = t.getElementsByTagName(e); if (e === '*') { for (;n = r[o++];)n.nodeType === 1 && i.push(n); return i } return r }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && v)
            return t.getElementsByClassName(e)
        }, y = [], g = [], (n.qsa = K.test(f.querySelectorAll)) && (de((e) => { let t; h.appendChild(e).innerHTML = `<a id='${b}'></a><select id='${b}-\r\\' msallowcapture=''><option selected=''></option></select>`, e.querySelectorAll('[msallowcapture^=\'\']').length && g.push(`[*^$]=${M}*(?:''|"")`), e.querySelectorAll('[selected]').length || g.push(`\\[${M}*(?:value|${P})`), e.querySelectorAll(`[id~=${b}-]`).length || g.push('~='), (t = f.createElement('input')).setAttribute('name', ''), e.appendChild(t), e.querySelectorAll('[name=\'\']').length || g.push(`\\[${M}*name${M}*=${M}*(?:''|"")`), e.querySelectorAll(':checked').length || g.push(':checked'), e.querySelectorAll(`a#${b}+*`).length || g.push('.#.+[+~]'), e.querySelectorAll('\\\f'), g.push('[\\r\\n\\f]') }), de((e) => { e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>'; const t = f.createElement('input'); t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && g.push(`name${M}*[*^$|!~]?=`), e.querySelectorAll(':enabled').length !== 2 && g.push(':enabled', ':disabled'), h.appendChild(e).disabled = !0, e.querySelectorAll(':disabled').length !== 2 && g.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), g.push(',.*:') })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && de((e) => { n.disconnectedMatch = m.call(e, '*'), m.call(e, '[s!=\'\']:x'), y.push('!=', z) }), g = g.length && new RegExp(g.join('|')), y = y.length && new RegExp(y.join('|')), t = K.test(h.compareDocumentPosition), w = t || K.test(h.contains)
          ? function (e, t) { const n = e.nodeType === 9 ? e.documentElement : e; const i = t && t.parentNode; return e === i || !(!i || i.nodeType !== 1 || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) }
          : function (e, t) {
            if (t) {
              for (;t = t.parentNode;) {
                if (t === e)
                  return !0
              }
            } return !1
          }, E = t
          ? function (e, t) {
            if (e === t)
              return u = !0, 0; let i = !e.compareDocumentPosition - !t.compareDocumentPosition; return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == x && w(x, e) ? -1 : t == f || t.ownerDocument == x && w(x, t) ? 1 : d ? q(d, e) - q(d, t) : 0 : 4 & i ? -1 : 1)
          }
          : function (e, t) {
            if (e === t)
              return u = !0, 0; let n; let i = 0; const o = e.parentNode; const r = t.parentNode; const s = [e]; const a = [t]; if (!o || !r)
              return e == f ? -1 : t == f ? 1 : o ? -1 : r ? 1 : d ? q(d, e) - q(d, t) : 0; if (o === r)
              return pe(e, t); for (n = e; n = n.parentNode;)s.unshift(n); for (n = t; n = n.parentNode;)a.unshift(n); for (;s[i] === a[i];)i++; return i ? pe(s[i], a[i]) : s[i] == x ? -1 : a[i] == x ? 1 : 0
          }, f)
      : f
  }, ae.matches = function (e, t) { return ae(e, null, null, t) }, ae.matchesSelector = function (e, t) {
    if (p(e), n.matchesSelector && v && !A[`${t} `] && (!y || !y.test(t)) && (!g || !g.test(t))) {
      try {
        const i = m.call(e, t); if (i || n.disconnectedMatch || e.document && e.document.nodeType !== 11)
          return i
      }
      catch (e) { A(t, !0) }
    } return ae(t, f, null, [e]).length > 0
  }, ae.contains = function (e, t) { return (e.ownerDocument || e) != f && p(e), w(e, t) }, ae.attr = function (e, t) { (e.ownerDocument || e) != f && p(e); const o = i.attrHandle[t.toLowerCase()]; let r = o && L.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !v) : void 0; return void 0 !== r ? r : n.attributes || !v ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, ae.escape = function (e) { return (`${e}`).replace(ie, oe) }, ae.error = function (e) { throw new Error(`Syntax error, unrecognized expression: ${e}`) }, ae.uniqueSort = function (e) { let t; const i = []; let o = 0; let r = 0; if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(E), u) { for (;t = e[r++];)t === e[r] && (o = i.push(r)); for (;o--;)e.splice(i[o], 1) } return d = null, e }, o = ae.getText = function (e) {
    let t; let n = ''; let i = 0; const r = e.nodeType; if (r) {
      if (r === 1 || r === 9 || r === 11) {
        if (typeof e.textContent == 'string')
          return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += o(e)
      }
      else if (r === 3 || r === 4) {
        return e.nodeValue
      }
    }
    else {
      for (;t = e[i++];)n += o(t)
    } return n
  }, (i = ae.selectors = { cacheLength: 50, createPseudo: ce, match: G, attrHandle: {}, find: {}, relative: { '>': { dir: 'parentNode', first: !0 }, ' ': { dir: 'parentNode' }, '+': { dir: 'previousSibling', first: !0 }, '~': { dir: 'previousSibling' } }, preFilter: { ATTR(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne), e[2] === '~=' && (e[3] = ` ${e[3]} `), e.slice(0, 4) }, CHILD(e) { return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === 'nth' ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === 'even' || e[3] === 'odd')), e[5] = +(e[7] + e[8] || e[3] === 'odd')) : e[3] && ae.error(e[0]), e }, PSEUDO(e) { let t; const n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG(e) { const t = e.replace(te, ne).toLowerCase(); return e === '*' ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS(e) { let t = S[`${e} `]; return t || (t = new RegExp(`(^|${M})${e}(${M}|$)`), S(e, (e) => { return t.test(typeof e.className == 'string' && e.className || void 0 !== e.getAttribute && e.getAttribute('class') || '') })) }, ATTR(e, t, n) { return function (i) { let o = ae.attr(i, e); return o == null ? t === '!=' : !t || (o += '', t === '=' ? o === n : t === '!=' ? o !== n : t === '^=' ? n && o.indexOf(n) === 0 : t === '*=' ? n && o.includes(n) : t === '$=' ? n && o.slice(-n.length) === n : t === '~=' ? (` ${o.replace(W, ' ')} `).includes(n) : t === '|=' && (o === n || o.slice(0, n.length + 1) === `${n}-`)) } }, CHILD(e, t, n, i, o) {
    const r = e.slice(0, 3) !== 'nth'; const s = e.slice(-4) !== 'last'; const a = t === 'of-type'; return i === 1 && o === 0
      ? function (e) { return !!e.parentNode }
      : function (t, n, l) {
        let c; let d; let u; let p; let f; let h; let v = r !== s ? 'nextSibling' : 'previousSibling'; const g = t.parentNode; const y = a && t.nodeName.toLowerCase(); const m = !l && !a; let w = !1; if (g) {
          if (r) {
            for (;v;) {
              for (p = t; p = p[v];) {
                if (a ? p.nodeName.toLowerCase() === y : p.nodeType === 1)
                  return !1
              } h = v = e === 'only' && !h && 'nextSibling'
            } return !0
          } if (h = [s ? g.firstChild : g.lastChild], s && m) {
            for (w = (f = (c = (d = (u = (p = g)[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[v] || (w = f = 0) || h.pop();) {
              if (p.nodeType === 1 && ++w && p === t) { d[e] = [T, f, w]; break }
            }
          }
          else if (m && (w = f = (c = (d = (u = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === w) {
            for (;(p = ++f && p && p[v] || (w = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : p.nodeType !== 1) || !++w || (m && ((d = (u = p[b] || (p[b] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [T, w]), p !== t)););
          } return (w -= o) === i || w % i == 0 && w / i >= 0
        }
      }
  }, PSEUDO(e, t) { let n; const o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error(`unsupported pseudo: ${e}`); return o[b] ? o(t) : o.length > 1 ? (n = [e, e, '', t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((e, n) => { for (var i, r = o(e, t), s = r.length; s--;)e[i = q(e, r[s])] = !(n[i] = r[s]) }) : function (e) { return o(e, 0, n) }) : o } }, pseudos: { not: ce((e) => { const t = []; const n = []; const i = a(e.replace(F, '$1')); return i[b] ? ce((e, t, n, o) => { for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r)) }) : function (e, o, r) { return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop() } }), has: ce((e) => { return function (t) { return ae(e, t).length > 0 } }), contains: ce((e) => { return e = e.replace(te, ne), function (t) { return (t.textContent || o(t)).includes(e) } }), lang: ce((e) => {
    return Y.test(e || '') || ae.error(`unsupported lang: ${e}`), e = e.replace(te, ne).toLowerCase(), function (t) {
      let n; do {
        if (n = v ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
          return (n = n.toLowerCase()) === e || n.indexOf(`${e}-`) === 0
      } while ((t = t.parentNode) && t.nodeType === 1); return !1
    }
  }), target(t) { const n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root(e) { return e === h }, focus(e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ve(!1), disabled: ve(!0), checked(e) { const t = e.nodeName.toLowerCase(); return t === 'input' && !!e.checked || t === 'option' && !!e.selected }, selected(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty(e) {
    for (e = e.firstChild; e; e = e.nextSibling) {
      if (e.nodeType < 6)
        return !1
    } return !0
  }, parent(e) { return !i.pseudos.empty(e) }, header(e) { return Q.test(e.nodeName) }, input(e) { return J.test(e.nodeName) }, button(e) { const t = e.nodeName.toLowerCase(); return t === 'input' && e.type === 'button' || t === 'button' }, text(e) { let t; return e.nodeName.toLowerCase() === 'input' && e.type === 'text' && ((t = e.getAttribute('type')) == null || t.toLowerCase() === 'text') }, first: ge(() => { return [0] }), last: ge((e, t) => { return [t - 1] }), eq: ge((e, t, n) => { return [n < 0 ? n + t : n] }), even: ge((e, t) => { for (let n = 0; n < t; n += 2)e.push(n); return e }), odd: ge((e, t) => { for (let n = 1; n < t; n += 2)e.push(n); return e }), lt: ge((e, t, n) => { for (let i = n < 0 ? n + t : n > t ? t : n; --i >= 0;)e.push(i); return e }), gt: ge((e, t, n) => { for (let i = n < 0 ? n + t : n; ++i < t;)e.push(i); return e }) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })i.pseudos[t] = fe(t); for (t in { submit: !0, reset: !0 })i.pseudos[t] = he(t); function me() {} function we(e) { for (var t = 0, n = e.length, i = ''; t < n; t++)i += e[t].value; return i } function be(e, t, n) {
    const i = t.dir; const o = t.next; const r = o || i; const s = n && r === 'parentNode'; const a = k++; return t.first
      ? function (t, n, o) {
        for (;t = t[i];) {
          if (t.nodeType === 1 || s)
            return e(t, n, o)
        } return !1
      }
      : function (t, n, l) {
        let c; let d; let u; const p = [T, a]; if (l) {
          for (;t = t[i];) {
            if ((t.nodeType === 1 || s) && e(t, n, l))
              return !0
          }
        }
        else {
          for (;t = t[i];) {
            if (t.nodeType === 1 || s) {
              if (d = (u = t[b] || (t[b] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) {
                t = t[i] || t
              }
              else {
                if ((c = d[r]) && c[0] === T && c[1] === a)
                  return p[2] = c[2]; if (d[r] = p, p[2] = e(t, n, l))
                  return !0
              }
            }
          }
        } return !1
      }
  } function xe(e) {
    return e.length > 1
      ? function (t, n, i) {
        for (let o = e.length; o--;) {
          if (!e[o](t, n, i))
            return !1
        } return !0
      }
      : e[0]
  } function Te(e, t, n, i, o) { for (var r, s = [], a = 0, l = e.length, c = t != null; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a))); return s } function ke(e, t, n, i, o, r) {
    return i && !i[b] && (i = ke(i)), o && !o[b] && (o = ke(o, r)), ce((r, s, a, l) => {
      let c; let d; let u; const p = []; const f = []; const h = s.length; const v = r || (function (e, t, n) { for (let i = 0, o = t.length; i < o; i++)ae(e, t[i], n); return n }(t || '*', a.nodeType ? [a] : a, [])); const g = !e || !r && t ? v : Te(v, p, e, a, l); let y = n ? o || (r ? e : h || i) ? [] : s : g; if (n && n(g, y, a, l), i) {
        for (c = Te(y, f), i(c, [], a, l), d = c.length; d--;)(u = c[d]) && (y[f[d]] = !(g[f[d]] = u))
      } if (r) { if (o || e) { if (o) { for (c = [], d = y.length; d--;)(u = y[d]) && c.push(g[d] = u); o(null, y = [], c, l) } for (d = y.length; d--;)(u = y[d]) && (c = o ? q(r, u) : p[d]) > -1 && (r[c] = !(s[c] = u)) } }
      else {
        y = Te(y === s ? y.splice(h, y.length) : y), o ? o(null, s, y, l) : O.apply(s, y)
      }
    })
  } function Se(e) {
    for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[' '], l = s ? 1 : 0, d = be((e) => { return e === t }, a, !0), u = be((e) => { return q(t, e) > -1 }, a, !0), p = [function (e, n, i) { const o = !s && (i || n !== c) || ((t = n).nodeType ? d(e, n, i) : u(e, n, i)); return t = null, o }]; l < r; l++) {
      if (n = i.relative[e[l].type]) {
        p = [be(xe(p), n)]
      }
      else { if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) { for (o = ++l; o < r && !i.relative[e[o].type]; o++);return ke(l > 1 && xe(p), l > 1 && we(e.slice(0, l - 1).concat({ value: e[l - 2].type === ' ' ? '*' : '' })).replace(F, '$1'), n, l < o && Se(e.slice(l, o)), o < r && Se(e = e.slice(o)), o < r && we(e)) }p.push(n) }
    } return xe(p)
  } return me.prototype = i.filters = i.pseudos, i.setFilters = new me(), s = ae.tokenize = function (e, t) {
    let n; let o; let r; let s; let a; let l; let c; const d = C[`${e} `]; if (d)
      return t ? 0 : d.slice(0); for (a = e, l = [], c = i.preFilter; a;) {
      for (s in n && !(o = _.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = B.exec(a)) && (n = o.shift(), r.push({ value: n, type: o[0].replace(F, ' ') }), a = a.slice(n.length)), i.filter)!(o = G[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({ value: n, type: s, matches: o }), a = a.slice(n.length)); if (!n)
        break
    } return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
  }, a = ae.compile = function (e, t) {
    let n; const o = []; const r = []; let a = $[`${e} `]; if (!a) {
      for (t || (t = s(e)), n = t.length; n--;)(a = Se(t[n]))[b] ? o.push(a) : r.push(a); a = $(e, (function (e, t) {
        const n = t.length > 0; const o = e.length > 0; const r = function (r, s, a, l, d) {
          let u; let h; let g; let y = 0; let m = '0'; const w = r && []; let b = []; const x = c; const k = r || o && i.find.TAG('*', d); const S = T += x == null ? 1 : Math.random() || 0.1; const C = k.length; for (d && (c = s == f || s || d); m !== C && (u = k[m]) != null; m++) {
            if (o && u) {
              for (h = 0, s || u.ownerDocument == f || (p(u), a = !v); g = e[h++];) {
                if (g(u, s || f, a)) { l.push(u); break }
              }d && (T = S)
            }n && ((u = !g && u) && y--, r && w.push(u))
          } if (y += m, n && m !== y) {
            for (h = 0; g = t[h++];)g(w, b, s, a); if (r) {
              if (y > 0) {
                for (;m--;)w[m] || b[m] || (b[m] = D.call(l))
              } b = Te(b)
            }O.apply(l, b), d && !r && b.length > 0 && y + t.length > 1 && ae.uniqueSort(l)
          } return d && (T = S, c = x), w
        }; return n ? ce(r) : r
      }(r, o))), a.selector = e
    } return a
  }, l = ae.select = function (e, t, n, o) {
    let r; let l; let c; let d; let u; const p = typeof e == 'function' && e; const f = !o && s(e = p.selector || e); if (n = n || [], f.length === 1) {
      if ((l = f[0] = f[0].slice(0)).length > 2 && (c = l[0]).type === 'ID' && t.nodeType === 9 && v && i.relative[l[1].type]) {
        if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
          return n; p && (t = t.parentNode), e = e.slice(l.shift().value.length)
      } for (r = G.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[d = c.type]);) {
        if ((u = i.find[d]) && (o = u(c.matches[0].replace(te, ne), ee.test(l[0].type) && ye(t.parentNode) || t))) {
          if (l.splice(r, 1), !(e = o.length && we(l)))
            return O.apply(n, o), n; break
        }
      }
    } return (p || a(e, f))(o, t, !v, n, !t || ee.test(e) && ye(t.parentNode) || t), n
  }, n.sortStable = b.split('').sort(E).join('') === b, n.detectDuplicates = !!u, p(), n.sortDetached = de((e) => { return 1 & e.compareDocumentPosition(f.createElement('fieldset')) }), de((e) => { return e.innerHTML = '<a href=\'#\'></a>', e.firstChild.getAttribute('href') === '#' }) || ue('type|href|height|width', (e, t, n) => {
    if (!n)
      return e.getAttribute(t, t.toLowerCase() === 'type' ? 1 : 2)
  }), n.attributes && de((e) => { return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), e.firstChild.getAttribute('value') === '' }) || ue('value', (e, t, n) => {
    if (!n && e.nodeName.toLowerCase() === 'input')
      return e.defaultValue
  }), de((e) => { return e.getAttribute('disabled') == null }) || ue(P, (e, t, n) => {
    let i; if (!n)
      return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
  }), ae
}(e)); x.find = k, x.expr = k.selectors, x.expr[':'] = x.expr.pseudos, x.uniqueSort = x.unique = k.uniqueSort, x.text = k.getText, x.isXMLDoc = k.isXML, x.contains = k.contains, x.escapeSelector = k.escape; const S = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && e.nodeType !== 9;) {
        if (e.nodeType === 1) {
          if (o && x(e).is(n))
            break; i.push(e)
        }
      } return i
    }; const C = function (e, t) { for (var n = []; e; e = e.nextSibling)e.nodeType === 1 && e !== t && n.push(e); return n }; const $ = x.expr.match.needsContext; function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } const E = /^<([a-z][^/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>)?$/i; function L(e, t, n) { return h(t) ? x.grep(e, (e, i) => { return !!t.call(e, i, e) !== n }) : t.nodeType ? x.grep(e, (e) => { return e === t !== n }) : typeof t != 'string' ? x.grep(e, (e) => { return a.call(t, e) > -1 !== n }) : x.filter(t, e, n) }x.filter = function (e, t, n) { const i = t[0]; return n && (e = `:not(${e})`), t.length === 1 && i.nodeType === 1 ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, (e) => { return e.nodeType === 1 })) }, x.fn.extend({ find(e) {
      let t; let n; const i = this.length; const o = this; if (typeof e != 'string') {
        return this.pushStack(x(e).filter(function () {
          for (t = 0; t < i; t++) {
            if (x.contains(o[t], this))
              return !0
          }
        }))
      } for (n = this.pushStack([]), t = 0; t < i; t++)x.find(e, o[t], n); return i > 1 ? x.uniqueSort(n) : n
    }, filter(e) { return this.pushStack(L(this, e || [], !1)) }, not(e) { return this.pushStack(L(this, e || [], !0)) }, is(e) { return !!L(this, typeof e == 'string' && $.test(e) ? x(e) : e || [], !1).length } }); let j; const D = /^(?:\s*(<[\s\S]+>)[^>]*|#([\w-]+))$/; (x.fn.init = function (e, t, n) {
      let i, o; if (!e)
        return this; if (n = n || j, typeof e == 'string') {
        if (!(i = e[0] === '<' && e[e.length - 1] === '>' && e.length >= 3 ? [null, e, null] : D.exec(e)) || !i[1] && t)
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (i[1]) {
          if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), E.test(i[1]) && x.isPlainObject(t)) {
            for (i in t)h(this[i]) ? this[i](t[i]) : this.attr(i, t[i])
          } return this
        } return (o = g.getElementById(i[2])) && (this[0] = o, this.length = 1), this
      } return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, j = x(g); const N = /^(?:parents|prev(?:Until|All))/; const O = { children: !0, contents: !0, next: !0, prev: !0 }; function H(e, t) { for (;(e = e[t]) && e.nodeType !== 1;);return e }x.fn.extend({ has(e) {
      const t = x(e, this); const n = t.length; return this.filter(function () {
        for (let e = 0; e < n; e++) {
          if (x.contains(this, t[e]))
            return !0
        }
      })
    }, closest(e, t) {
      let n; let i = 0; const o = this.length; const r = []; const s = typeof e != 'string' && x(e); if (!$.test(e)) {
        for (;i < o; i++) {
          for (n = this[i]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : n.nodeType === 1 && x.find.matchesSelector(n, e))) { r.push(n); break }
          }
        }
      } return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r)
    }, index(e) { return e ? typeof e == 'string' ? a.call(x(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add(e, t) { return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t)))) }, addBack(e) { return this.add(e == null ? this.prevObject : this.prevObject.filter(e)) } }), x.each({ parent(e) { const t = e.parentNode; return t && t.nodeType !== 11 ? t : null }, parents(e) { return S(e, 'parentNode') }, parentsUntil(e, t, n) { return S(e, 'parentNode', n) }, next(e) { return H(e, 'nextSibling') }, prev(e) { return H(e, 'previousSibling') }, nextAll(e) { return S(e, 'nextSibling') }, prevAll(e) { return S(e, 'previousSibling') }, nextUntil(e, t, n) { return S(e, 'nextSibling', n) }, prevUntil(e, t, n) { return S(e, 'previousSibling', n) }, siblings(e) { return C((e.parentNode || {}).firstChild, e) }, children(e) { return C(e.firstChild) }, contents(e) { return e.contentDocument != null && i(e.contentDocument) ? e.contentDocument : (A(e, 'template') && (e = e.content || e), x.merge([], e.childNodes)) } }, (e, t) => { x.fn[e] = function (n, i) { let o = x.map(this, t, n); return e.slice(-5) !== 'Until' && (i = n), i && typeof i == 'string' && (o = x.filter(i, o)), this.length > 1 && (O[e] || x.uniqueSort(o), N.test(e) && o.reverse()), this.pushStack(o) } }); const q = /[^\x20\t\r\n\f]+/g; function P(e) { return e } function M(e) { throw e } function I(e, t, n, i) {
      let o; try { e && h(o = e.promise) ? o.call(e).done(t).fail(n) : e && h(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i)) }
      catch (e) { n.apply(void 0, [e]) }
    }x.Callbacks = function (e) {
      e = typeof e == 'string' ? (function (e) { const t = {}; return x.each(e.match(q) || [], (e, n) => { t[n] = !0 }), t }(e)) : x.extend({}, e); let t; let n; let i; let o; let r = []; let s = []; let a = -1; const l = function () {
        for (o = o || e.once, i = t = !0; s.length; a = -1) {
          for (n = s.shift(); ++a < r.length;)!1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1)
        } e.memory || (n = !1), t = !1, o && (r = n ? [] : '')
      }; var c = { add() { return r && (n && !t && (a = r.length - 1, s.push(n)), (function t(n) { x.each(n, (n, i) => { h(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && w(i) !== 'string' && t(i) }) }(arguments)), n && !t && l()), this }, remove() { return x.each(arguments, (e, t) => { for (var n; (n = x.inArray(t, r, n)) > -1;)r.splice(n, 1), n <= a && a-- }), this }, has(e) { return e ? x.inArray(e, r) > -1 : r.length > 0 }, empty() { return r && (r = []), this }, disable() { return o = s = [], r = n = '', this }, disabled() { return !r }, lock() { return o = s = [], n || t || (r = n = ''), this }, locked() { return !!o }, fireWith(e, n) { return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this }, fire() { return c.fireWith(this, arguments), this }, fired() { return !!i } }; return c
    }, x.extend({ Deferred(t) {
      const n = [['notify', 'progress', x.Callbacks('memory'), x.Callbacks('memory'), 2], ['resolve', 'done', x.Callbacks('once memory'), x.Callbacks('once memory'), 0, 'resolved'], ['reject', 'fail', x.Callbacks('once memory'), x.Callbacks('once memory'), 1, 'rejected']]; let i = 'pending'; var o = { state() { return i }, always() { return r.done(arguments).fail(arguments), this }, catch(e) { return o.then(null, e) }, pipe() { let e = arguments; return x.Deferred((t) => { x.each(n, (n, i) => { const o = h(e[i[4]]) && e[i[4]]; r[i[1]](function () { const e = o && o.apply(this, arguments); e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[`${i[0]}With`](this, o ? [e] : arguments) }) }), e = null }).promise() }, then(t, i, o) {
        let r = 0; function s(t, n, i, o) {
          return function () {
            let a = this; let l = arguments; const c = function () {
              let e, c; if (!(t < r)) {
                if ((e = i.apply(a, l)) === n.promise())
                  throw new TypeError('Thenable self-resolution'); c = e && (typeof e == 'object' || typeof e == 'function') && e.then, h(c) ? o ? c.call(e, s(r, n, P, o), s(r, n, M, o)) : (r++, c.call(e, s(r, n, P, o), s(r, n, M, o), s(r, n, P, n.notifyWith))) : (i !== P && (a = void 0, l = [e]), (o || n.resolveWith)(a, l))
              }
            }; var d = o
              ? c
              : function () {
                try { c() }
                catch (e) { x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= r && (i !== M && (a = void 0, l = [e]), n.rejectWith(a, l)) }
              }; t ? d() : (x.Deferred.getStackHook && (d.stackTrace = x.Deferred.getStackHook()), e.setTimeout(d))
          }
        } return x.Deferred((e) => { n[0][3].add(s(0, e, h(o) ? o : P, e.notifyWith)), n[1][3].add(s(0, e, h(t) ? t : P)), n[2][3].add(s(0, e, h(i) ? i : M)) }).promise()
      }, promise(e) { return e != null ? x.extend(e, o) : o } }; var r = {}; return x.each(n, (e, t) => { const s = t[2]; const a = t[5]; o[t[1]] = s.add, a && s.add(() => { i = a }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), r[t[0]] = function () { return r[`${t[0]}With`](this === r ? void 0 : this, arguments), this }, r[`${t[0]}With`] = s.fireWith }), o.promise(r), t && t.call(r, r), r
    }, when(e) {
      let t = arguments.length; let n = t; const i = new Array(n); const r = o.call(arguments); const s = x.Deferred(); const a = function (e) { return function (n) { i[e] = this, r[e] = arguments.length > 1 ? o.call(arguments) : n, --t || s.resolveWith(i, r) } }; if (t <= 1 && (I(e, s.done(a(n)).resolve, s.reject, !t), s.state() === 'pending' || h(r[n] && r[n].then)))
        return s.then(); for (;n--;)I(r[n], a(n), s.reject); return s.promise()
    } }); const R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; x.Deferred.exceptionHook = function (t, n) { e.console && e.console.warn && t && R.test(t.name) && e.console.warn(`jQuery.Deferred exception: ${t.message}`, t.stack, n) }, x.readyException = function (t) { e.setTimeout(() => { throw t }) }; const z = x.Deferred(); function W() { g.removeEventListener('DOMContentLoaded', W), e.removeEventListener('load', W), x.ready() }x.fn.ready = function (e) { return z.then(e).catch((e) => { x.readyException(e) }), this }, x.extend({ isReady: !1, readyWait: 1, ready(e) { (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || z.resolveWith(g, [x])) } }), x.ready.then = z.then, g.readyState === 'complete' || g.readyState !== 'loading' && !g.documentElement.doScroll ? e.setTimeout(x.ready) : (g.addEventListener('DOMContentLoaded', W), e.addEventListener('load', W)); const F = function (e, t, n, i, o, r, s) {
      let a = 0; const l = e.length; let c = n == null; if (w(n) === 'object') {
        for (a in o = !0, n)F(e, t, a, n[a], !0, r, s)
      }
      else if (void 0 !== i && (o = !0, h(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) { return c.call(x(e), n) })), t)) {
        for (;a < l; a++)t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)))
      } return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }; const _ = /^-ms-/; const B = /-([a-z])/g; function U(e, t) { return t.toUpperCase() } function X(e) { return e.replace(_, 'ms-').replace(B, U) } const Y = function (e) { return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType }; function G() { this.expando = x.expando + G.uid++ }G.uid = 1, G.prototype = { cache(e) { let t = e[this.expando]; return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set(e, t, n) {
      let i; const o = this.cache(e); if (typeof t == 'string') {
        o[X(t)] = n
      }
      else {
        for (i in t)o[X(i)] = t[i]
      } return o
    }, get(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] }, access(e, t, n) { return void 0 === t || t && typeof t == 'string' && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove(e, t) { let n; const i = e[this.expando]; if (void 0 !== i) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(q) || []).length; for (;n--;) delete i[t[n]] }(void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData(e) { const t = e[this.expando]; return void 0 !== t && !x.isEmptyObject(t) } }; const V = new G(); const J = new G(); const Q = /^(?:\{[\s\S]*\}|\[[\s\S]*\])$/; const K = /[A-Z]/g; function Z(e, t, n) {
      let i; if (void 0 === n && e.nodeType === 1) {
        if (i = `data-${t.replace(K, '-$&').toLowerCase()}`, typeof (n = e.getAttribute(i)) == 'string') {
          try { n = (function (e) { return e === 'true' || e !== 'false' && (e === 'null' ? null : e === `${+e}` ? +e : Q.test(e) ? JSON.parse(e) : e) }(n)) }
          catch (e) {}J.set(e, t, n)
        }
        else {
          n = void 0
        }
      } return n
    }x.extend({ hasData(e) { return J.hasData(e) || V.hasData(e) }, data(e, t, n) { return J.access(e, t, n) }, removeData(e, t) { J.remove(e, t) }, _data(e, t, n) { return V.access(e, t, n) }, _removeData(e, t) { V.remove(e, t) } }), x.fn.extend({ data(e, t) {
      let n; let i; let o; const r = this[0]; const s = r && r.attributes; if (void 0 === e) { if (this.length && (o = J.get(r), r.nodeType === 1 && !V.get(r, 'hasDataAttrs'))) { for (n = s.length; n--;)s[n] && (i = s[n].name).indexOf('data-') === 0 && (i = X(i.slice(5)), Z(r, i, o[i])); V.set(r, 'hasDataAttrs', !0) } return o } return typeof e == 'object'
        ? this.each(function () { J.set(this, e) })
        : F(this, function (t) {
            let n; if (r && void 0 === t)
              return void 0 !== (n = J.get(r, e)) || void 0 !== (n = Z(r, e)) ? n : void 0; this.each(function () { J.set(this, e, t) })
          }, null, t, arguments.length > 1, null, !0)
    }, removeData(e) { return this.each(function () { J.remove(this, e) }) } }), x.extend({ queue(e, t, n) {
      let i; if (e)
        return t = `${t || 'fx'}queue`, i = V.get(e, t), n && (!i || Array.isArray(n) ? i = V.access(e, t, x.makeArray(n)) : i.push(n)), i || []
    }, dequeue(e, t) { t = t || 'fx'; const n = x.queue(e, t); let i = n.length; let o = n.shift(); const r = x._queueHooks(e, t); o === 'inprogress' && (o = n.shift(), i--), o && (t === 'fx' && n.unshift('inprogress'), delete r.stop, o.call(e, () => { x.dequeue(e, t) }, r)), !i && r && r.empty.fire() }, _queueHooks(e, t) { const n = `${t}queueHooks`; return V.get(e, n) || V.access(e, n, { empty: x.Callbacks('once memory').add(() => { V.remove(e, [`${t}queue`, n]) }) }) } }), x.fn.extend({ queue(e, t) { let n = 2; return typeof e != 'string' && (t = e, e = 'fx', n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each(function () { const n = x.queue(this, e, t); x._queueHooks(this, e), e === 'fx' && n[0] !== 'inprogress' && x.dequeue(this, e) }) }, dequeue(e) { return this.each(function () { x.dequeue(this, e) }) }, clearQueue(e) { return this.queue(e || 'fx', []) }, promise(e, t) { let n; let i = 1; const o = x.Deferred(); const r = this; let s = this.length; const a = function () { --i || o.resolveWith(r, [r]) }; for (typeof e != 'string' && (t = e, e = void 0), e = e || 'fx'; s--;)(n = V.get(r[s], `${e}queueHooks`)) && n.empty && (i++, n.empty.add(a)); return a(), o.promise(t) } }); const ee = /[+-]?(?:\d*\.)?\d+(?:[eE][+-]?\d+)?/.source; const te = new RegExp(`^(?:([+-])=|)(${ee})([a-z%]*)$`, 'i'); const ne = ['Top', 'Right', 'Bottom', 'Left']; const ie = g.documentElement; let oe = function (e) { return x.contains(e.ownerDocument, e) }; const re = { composed: !0 }; ie.getRootNode && (oe = function (e) { return x.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument }); const se = function (e, t) { return (e = t || e).style.display === 'none' || e.style.display === '' && oe(e) && x.css(e, 'display') === 'none' }; function ae(e, t, n, i) { let o; let r; let s = 20; const a = i ? function () { return i.cur() } : function () { return x.css(e, t, '') }; let l = a(); let c = n && n[3] || (x.cssNumber[t] ? '' : 'px'); let d = e.nodeType && (x.cssNumber[t] || c !== 'px' && +l) && te.exec(x.css(e, t)); if (d && d[3] !== c) { for (l /= 2, c = c || d[3], d = +l || 1; s--;)x.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0), d /= r; d *= 2, x.style(e, t, d + c), n = n || [] } return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o } const le = {}; function ce(e) { let t; const n = e.ownerDocument; const i = e.nodeName; let o = le[i]; return o || (t = n.body.appendChild(n.createElement(i)), o = x.css(t, 'display'), t.parentNode.removeChild(t), o === 'none' && (o = 'block'), le[i] = o, o) } function de(e, t) { for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? (n === 'none' && (o[r] = V.get(i, 'display') || null, o[r] || (i.style.display = '')), i.style.display === '' && se(i) && (o[r] = ce(i))) : n !== 'none' && (o[r] = 'none', V.set(i, 'display', n))); for (r = 0; r < s; r++)o[r] != null && (e[r].style.display = o[r]); return e }x.fn.extend({ show() { return de(this, !0) }, hide() { return de(this) }, toggle(e) { return typeof e == 'boolean' ? e ? this.show() : this.hide() : this.each(function () { se(this) ? x(this).show() : x(this).hide() }) } }); let ue; let pe; const fe = /^(?:checkbox|radio)$/i; const he = /<([a-z][^/\0>\x20\t\r\n\f]*)/i; const ve = /^$|^module$|\/(?:java|ecma)script/i; ue = g.createDocumentFragment().appendChild(g.createElement('div')), (pe = g.createElement('input')).setAttribute('type', 'radio'), pe.setAttribute('checked', 'checked'), pe.setAttribute('name', 't'), ue.appendChild(pe), f.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = '<textarea>x</textarea>', f.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue, ue.innerHTML = '<option></option>', f.option = !!ue.lastChild; const ge = { thead: [1, '<table>', '</table>'], col: [2, '<table><colgroup>', '</colgroup></table>'], tr: [2, '<table><tbody>', '</tbody></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: [0, '', ''] }; function ye(e, t) { let n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || '*') : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || '*') : [], void 0 === t || t && A(e, t) ? x.merge([e], n) : n } function me(e, t) { for (let n = 0, i = e.length; n < i; n++)V.set(e[n], 'globalEval', !t || V.get(t[n], 'globalEval')) }ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, f.option || (ge.optgroup = ge.option = [1, '<select multiple=\'multiple\'>', '</select>']); const we = /<|&#?\w+;/; function be(e, t, n, i, o) {
      for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) {
        if ((r = e[f]) || r === 0) {
          if (w(r) === 'object') {
            x.merge(p, r.nodeType ? [r] : r)
          }
          else if (we.test(r)) { for (s = s || u.appendChild(t.createElement('div')), a = (he.exec(r) || ['', ''])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + x.htmlPrefilter(r) + l[2], d = l[0]; d--;)s = s.lastChild; x.merge(p, s.childNodes), (s = u.firstChild).textContent = '' }
          else {
            p.push(t.createTextNode(r))
          }
        }
      } for (u.textContent = '', f = 0; r = p[f++];) {
        if (i && x.inArray(r, i) > -1) {
          o && o.push(r)
        }
        else if (c = oe(r), s = ye(u.appendChild(r), 'script'), c && me(s), n) {
          for (d = 0; r = s[d++];)ve.test(r.type || '') && n.push(r)
        }
      } return u
    } const xe = /^([^.]*)(?:\.(.+))?/; function Te() { return !0 } function ke() { return !1 } function Se(e, t) {
      return e === (function () {
        try { return g.activeElement }
        catch (e) {}
      }()) == (t === 'focus')
    } function Ce(e, t, n, i, o, r) {
      let s, a; if (typeof t == 'object') { for (a in typeof n != 'string' && (i = i || n, n = void 0), t)Ce(e, a, n, i, t[a], r); return e } if (i == null && o == null ? (o = n, i = n = void 0) : o == null && (typeof n == 'string' ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o)
        o = ke; else if (!o)
        return e; return r === 1 && (s = o, o = function (e) { return x().off(e), s.apply(this, arguments) }, o.guid = s.guid || (s.guid = x.guid++)), e.each(function () { x.event.add(this, t, o, i, n) })
    } function $e(e, t, n) {
      n
        ? (V.set(e, t, !1), x.event.add(e, t, { namespace: !1, handler(e) {
            let i; let r; let s = V.get(this, t); if (1 & e.isTrigger && this[t]) {
              if (s.length)
                (x.event.special[t] || {}).delegateType && e.stopPropagation(); else if (s = o.call(arguments), V.set(this, t, s), i = n(this, t), this[t](), s !== (r = V.get(this, t)) || i ? V.set(this, t, !1) : r = {}, s !== r)
                return e.stopImmediatePropagation(), e.preventDefault(), r && r.value
            }
            else {
              s.length && (V.set(this, t, { value: x.event.trigger(x.extend(s[0], x.Event.prototype), s.slice(1), this) }), e.stopImmediatePropagation())
            }
          } }))
        : void 0 === V.get(e, t) && x.event.add(e, t, Te)
    }x.event = { global: {}, add(e, t, n, i, o) {
      let r; let s; let a; let l; let c; let d; let u; let p; let f; let h; let v; const g = V.get(e); if (Y(e)) {
        for (n.handler && (n = (r = n).handler, o = r.selector), o && x.find.matchesSelector(ie, o), n.guid || (n.guid = x.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function (t) { return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0 }), c = (t = (t || '').match(q) || ['']).length; c--;)f = v = (a = xe.exec(t[c]) || [])[1], h = (a[2] || '').split('.').sort(), f && (u = x.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = x.event.special[f] || {}, d = x.extend({ type: f, origType: v, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && x.expr.match.needsContext.test(o), namespace: h.join('.') }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), x.event.global[f] = !0)
      }
    }, remove(e, t, n, i, o) {
      let r; let s; let a; let l; let c; let d; let u; let p; let f; let h; let v; const g = V.hasData(e) && V.get(e); if (g && (l = g.events)) {
        for (c = (t = (t || '').match(q) || ['']).length; c--;) {
          if (f = v = (a = xe.exec(t[c]) || [])[1], h = (a[2] || '').split('.').sort(), f) { for (u = x.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp(`(^|\\.)${h.join('\\.(?:.*\\.|)')}(\\.|$)`), s = r = p.length; r--;)d = p[r], !o && v !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && (i !== '**' || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d)); s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || x.removeEvent(e, f, g.handle), delete l[f]) }
          else {
            for (f in l)x.event.remove(e, f + t[c], n, i, !0)
          }
        }x.isEmptyObject(l) && V.remove(e, 'handle events')
      }
    }, dispatch(e) {
      let t; let n; let i; let o; let r; let s; const a = Array.from({ length: arguments.length }); const l = x.event.fix(e); const c = (V.get(this, 'events') || Object.create(null))[l.type] || []; const d = x.event.special[l.type] || {}; for (a[0] = l, t = 1; t < arguments.length; t++)a[t] = arguments[t]; if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
        for (s = x.event.handlers.call(this, l, c), t = 0; (o = s[t++]) && !l.isPropagationStopped();) {
          for (l.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();)l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()))
        } return d.postDispatch && d.postDispatch.call(this, l), l.result
      }
    }, handlers(e, t) {
      let n; let i; let o; let r; let s; const a = []; const l = t.delegateCount; let c = e.target; if (l && c.nodeType && !(e.type === 'click' && e.button >= 1)) {
        for (;c !== this; c = c.parentNode || this) {
          if (c.nodeType === 1 && (e.type !== 'click' || !0 !== c.disabled)) { for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = `${(i = t[n]).selector} `] && (s[o] = i.needsContext ? x(o, this).index(c) > -1 : x.find(o, this, null, [c]).length), s[o] && r.push(i); r.length && a.push({ elem: c, handlers: r }) }
        }
      } return c = this, l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
    }, addProp(e, t) {
      Object.defineProperty(x.Event.prototype, e, { enumerable: !0, configurable: !0, get: h(t)
        ? function () {
          if (this.originalEvent)
            return t(this.originalEvent)
        }
        : function () {
          if (this.originalEvent)
            return this.originalEvent[e]
        }, set(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } })
    }, fix(e) { return e[x.expando] ? e : new x.Event(e) }, special: { load: { noBubble: !0 }, click: { setup(e) { const t = this || e; return fe.test(t.type) && t.click && A(t, 'input') && $e(t, 'click', Te), !1 }, trigger(e) { const t = this || e; return fe.test(t.type) && t.click && A(t, 'input') && $e(t, 'click'), !0 }, _default(e) { const t = e.target; return fe.test(t.type) && t.click && A(t, 'input') && V.get(t, 'click') || A(t, 'a') } }, beforeunload: { postDispatch(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, x.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, x.Event = function (e, t) {
      if (!(this instanceof x.Event))
        return new x.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : ke, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = { constructor: x.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault() { const e = this.originalEvent; this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault() }, stopPropagation() { const e = this.originalEvent; this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation() { const e = this.originalEvent; this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, x.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, x.event.addProp), x.each({ focus: 'focusin', blur: 'focusout' }, (e, t) => { x.event.special[e] = { setup() { return $e(this, e, Se), !1 }, trigger() { return $e(this, e), !0 }, _default() { return !0 }, delegateType: t } }), x.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, (e, t) => { x.event.special[e] = { delegateType: t, bindType: t, handle(e) { let n; const i = e.relatedTarget; const o = e.handleObj; return i && (i === this || x.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), x.fn.extend({ on(e, t, n, i) { return Ce(this, e, t, n, i) }, one(e, t, n, i) { return Ce(this, e, t, n, i, 1) }, off(e, t, n) {
      let i, o; if (e && e.preventDefault && e.handleObj)
        return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? `${i.origType}.${i.namespace}` : i.origType, i.selector, i.handler), this; if (typeof e == 'object') { for (o in e) this.off(o, t, e[o]); return this } return !1 !== t && typeof t != 'function' || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () { x.event.remove(this, e, n, t) })
    } }); const Ae = /<script|<style|<link/i; const Ee = /checked\s*(?:[^=]|=\s*.checked.)/i; const Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function je(e, t) { return A(e, 'table') && A(t.nodeType !== 11 ? t : t.firstChild, 'tr') && x(e).children('tbody')[0] || e } function De(e) { return e.type = `${e.getAttribute('type') !== null}/${e.type}`, e } function Ne(e) { return (e.type || '').slice(0, 5) === 'true/' ? e.type = e.type.slice(5) : e.removeAttribute('type'), e } function Oe(e, t) {
      let n, i, o, r, s, a; if (t.nodeType === 1) {
        if (V.hasData(e) && (a = V.get(e).events)) {
          for (o in V.remove(t, 'handle events'), a) {
            for (n = 0, i = a[o].length; n < i; n++)x.event.add(t, o, a[o][n])
          }
        } J.hasData(e) && (r = J.access(e), s = x.extend({}, r), J.set(t, s))
      }
    } function He(e, t, n, i) {
      t = r(t); let o; let s; let a; let l; let c; let d; let u = 0; const p = e.length; const v = p - 1; const g = t[0]; const y = h(g); if (y || p > 1 && typeof g == 'string' && !f.checkClone && Ee.test(g))
        return e.each(function (o) { const r = e.eq(o); y && (t[0] = g.call(this, o, r.html())), He(r, t, n, i) }); if (p && (s = (o = be(t, e[0].ownerDocument, !1, e, i)).firstChild, o.childNodes.length === 1 && (o = s), s || i)) {
        for (l = (a = x.map(ye(o, 'script'), De)).length; u < p; u++)c = o, u !== v && (c = x.clone(c, !0, !0), l && x.merge(a, ye(c, 'script'))), n.call(e[u], c, u); if (l) {
          for (d = a[a.length - 1].ownerDocument, x.map(a, Ne), u = 0; u < l; u++)c = a[u], ve.test(c.type || '') && !V.access(c, 'globalEval') && x.contains(d, c) && (c.src && (c.type || '').toLowerCase() !== 'module' ? x._evalUrl && !c.noModule && x._evalUrl(c.src, { nonce: c.nonce || c.getAttribute('nonce') }, d) : m(c.textContent.replace(Le, ''), c, d))
        }
      } return e
    } function qe(e, t, n) { for (var i, o = t ? x.filter(t, e) : e, r = 0; (i = o[r]) != null; r++)n || i.nodeType !== 1 || x.cleanData(ye(i)), i.parentNode && (n && oe(i) && me(ye(i, 'script')), i.parentNode.removeChild(i)); return e }x.extend({ htmlPrefilter(e) { return e }, clone(e, t, n) {
      let i; let o; let r; let s; let a; let l; let c; const d = e.cloneNode(!0); const u = oe(e); if (!(f.noCloneChecked || e.nodeType !== 1 && e.nodeType !== 11 || x.isXMLDoc(e))) {
        for (s = ye(d), i = 0, o = (r = ye(e)).length; i < o; i++)a = r[i], l = s[i], c = void 0, (c = l.nodeName.toLowerCase()) === 'input' && fe.test(a.type) ? l.checked = a.checked : c !== 'input' && c !== 'textarea' || (l.defaultValue = a.defaultValue)
      } if (t) {
        if (n) {
          for (r = r || ye(e), s = s || ye(d), i = 0, o = r.length; i < o; i++)Oe(r[i], s[i])
        }
        else {
          Oe(e, d)
        }
      } return (s = ye(d, 'script')).length > 0 && me(s, !u && ye(e, 'script')), d
    }, cleanData(e) {
      for (var t, n, i, o = x.event.special, r = 0; void 0 !== (n = e[r]); r++) {
        if (Y(n)) {
          if (t = n[V.expando]) {
            if (t.events) {
              for (i in t.events)o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle)
            } n[V.expando] = void 0
          }n[J.expando] && (n[J.expando] = void 0)
        }
      }
    } }), x.fn.extend({ detach(e) { return qe(this, e, !0) }, remove(e) { return qe(this, e) }, text(e) { return F(this, function (e) { return void 0 === e ? x.text(this) : this.empty().each(function () { this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || (this.textContent = e) }) }, null, e, arguments.length) }, append() { return He(this, arguments, function (e) { this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || je(this, e).appendChild(e) }) }, prepend() { return He(this, arguments, function (e) { if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) { const t = je(this, e); t.insertBefore(e, t.firstChild) } }) }, before() { return He(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after() { return He(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty() { for (var e, t = 0; (e = this[t]) != null; t++)e.nodeType === 1 && (x.cleanData(ye(e, !1)), e.textContent = ''); return this }, clone(e, t) { return e = e != null && e, t = t == null ? e : t, this.map(function () { return x.clone(this, e, t) }) }, html(e) {
      return F(this, function (e) {
        let t = this[0] || {}; let n = 0; const i = this.length; if (void 0 === e && t.nodeType === 1)
          return t.innerHTML; if (typeof e == 'string' && !Ae.test(e) && !ge[(he.exec(e) || ['', ''])[1].toLowerCase()]) {
          e = x.htmlPrefilter(e); try { for (;n < i; n++)(t = this[n] || {}).nodeType === 1 && (x.cleanData(ye(t, !1)), t.innerHTML = e); t = 0 }
          catch (e) {}
        }t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith() { const e = []; return He(this, arguments, function (t) { const n = this.parentNode; x.inArray(this, e) < 0 && (x.cleanData(ye(this)), n && n.replaceChild(t, this)) }, e) } }), x.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, (e, t) => { x.fn[e] = function (e) { for (var n, i = [], o = x(e), r = o.length - 1, a = 0; a <= r; a++)n = a === r ? this : this.clone(!0), x(o[a])[t](n), s.apply(i, n.get()); return this.pushStack(i) } }); const Pe = new RegExp(`^(${ee})(?!px)[a-z%]+$`, 'i'); const Me = function (t) { let n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) }; const Ie = function (e, t, n) { let i; let o; const r = {}; for (o in t)r[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.call(e), t)e.style[o] = r[o]; return i }; const Re = new RegExp(ne.join('|'), 'i'); function ze(e, t, n) { let i; let o; let r; let s; const a = e.style; return (n = n || Me(e)) && ((s = n.getPropertyValue(t) || n[t]) !== '' || oe(e) || (s = x.style(e, t)), !f.pixelBoxStyles() && Pe.test(s) && Re.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? `${s}` : s } function We(e, t) {
      return { get() {
        if (!e())
          return (this.get = t).apply(this, arguments); delete this.get
      } }
    }!(function () { function t() { if (d) { c.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0', d.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%', ie.appendChild(c).appendChild(d); const t = e.getComputedStyle(d); i = t.top !== '1%', l = n(t.marginLeft) === 12, d.style.right = '60%', s = n(t.right) === 36, o = n(t.width) === 36, d.style.position = 'absolute', r = n(d.offsetWidth / 3) === 12, ie.removeChild(c), d = null } } function n(e) { return Math.round(Number.parseFloat(e)) } let i; let o; let r; let s; let a; let l; var c = g.createElement('div'); var d = g.createElement('div'); d.style && (d.style.backgroundClip = 'content-box', d.cloneNode(!0).style.backgroundClip = '', f.clearCloneStyle = d.style.backgroundClip === 'content-box', x.extend(f, { boxSizingReliable() { return t(), o }, pixelBoxStyles() { return t(), s }, pixelPosition() { return t(), i }, reliableMarginLeft() { return t(), l }, scrollboxSize() { return t(), r }, reliableTrDimensions() { let t, n, i, o; return a == null && (t = g.createElement('table'), n = g.createElement('tr'), i = g.createElement('div'), t.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate', n.style.cssText = 'border:1px solid', n.style.height = '1px', i.style.height = '9px', i.style.display = 'block', ie.appendChild(t).appendChild(n).appendChild(i), o = e.getComputedStyle(n), a = Number.parseInt(o.height, 10) + Number.parseInt(o.borderTopWidth, 10) + Number.parseInt(o.borderBottomWidth, 10) === n.offsetHeight, ie.removeChild(t)), a } })) }()); const Fe = ['Webkit', 'Moz', 'ms']; const _e = g.createElement('div').style; const Be = {}; function Ue(e) {
      const t = x.cssProps[e] || Be[e]; return t || (e in _e
        ? e
        : Be[e] = (function (e) {
          for (let t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;) {
            if ((e = Fe[n] + t) in _e)
              return e
          }
        }(e)) || e)
    } const Xe = /^(none|table(?!-c[ea]).+)/; const Ye = /^--/; const Ge = { position: 'absolute', visibility: 'hidden', display: 'block' }; const Ve = { letterSpacing: '0', fontWeight: '400' }; function Je(e, t, n) { const i = te.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t } function Qe(e, t, n, i, o, r) {
      let s = t === 'width' ? 1 : 0; let a = 0; let l = 0; if (n === (i ? 'border' : 'content'))
        return 0; for (;s < 4; s += 2)n === 'margin' && (l += x.css(e, n + ne[s], !0, o)), i ? (n === 'content' && (l -= x.css(e, `padding${ne[s]}`, !0, o)), n !== 'margin' && (l -= x.css(e, `border${ne[s]}Width`, !0, o))) : (l += x.css(e, `padding${ne[s]}`, !0, o), n !== 'padding' ? l += x.css(e, `border${ne[s]}Width`, !0, o) : a += x.css(e, `border${ne[s]}Width`, !0, o)); return !i && r >= 0 && (l += Math.max(0, Math.ceil(e[`offset${t[0].toUpperCase()}${t.slice(1)}`] - r - l - a - 0.5)) || 0), l
    } function Ke(e, t, n) {
      const i = Me(e); let o = (!f.boxSizingReliable() || n) && x.css(e, 'boxSizing', !1, i) === 'border-box'; let r = o; let s = ze(e, t, i); const a = `offset${t[0].toUpperCase()}${t.slice(1)}`; if (Pe.test(s)) {
        if (!n)
          return s; s = 'auto'
      } return (!f.boxSizingReliable() && o || !f.reliableTrDimensions() && A(e, 'tr') || s === 'auto' || !Number.parseFloat(s) && x.css(e, 'display', !1, i) === 'inline') && e.getClientRects().length && (o = x.css(e, 'boxSizing', !1, i) === 'border-box', (r = a in e) && (s = e[a])), `${(s = Number.parseFloat(s) || 0) + Qe(e, t, n || (o ? 'border' : 'content'), r, i, s)}px`
    } function Ze(e, t, n, i, o) { return new Ze.prototype.init(e, t, n, i, o) }x.extend({ cssHooks: { opacity: { get(e, t) { if (t) { const n = ze(e, 'opacity'); return n === '' ? '1' : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style(e, t, n, i) {
      if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
        let o; let r; let s; const a = X(t); const l = Ye.test(t); const c = e.style; if (l || (t = Ue(a)), s = x.cssHooks[t] || x.cssHooks[a], void 0 === n)
          return s && 'get' in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t]; (r = typeof n) === 'string' && (o = te.exec(n)) && o[1] && (n = ae(e, t, o), r = 'number'), n != null && n == n && (r !== 'number' || l || (n += o && o[3] || (x.cssNumber[a] ? '' : 'px')), f.clearCloneStyle || n !== '' || t.indexOf('background') !== 0 || (c[t] = 'inherit'), s && 'set' in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
      }
    }, css(e, t, n, i) { let o; let r; let s; const a = X(t); return Ye.test(t) || (t = Ue(a)), (s = x.cssHooks[t] || x.cssHooks[a]) && 'get' in s && (o = s.get(e, !0, n)), void 0 === o && (o = ze(e, t, i)), o === 'normal' && t in Ve && (o = Ve[t]), n === '' || n ? (r = Number.parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o } }), x.each(['height', 'width'], (e, t) => {
      x.cssHooks[t] = { get(e, n, i) {
        if (n)
          return !Xe.test(x.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, i) : Ie(e, Ge, () => { return Ke(e, t, i) })
      }, set(e, n, i) { let o; const r = Me(e); const s = !f.scrollboxSize() && r.position === 'absolute'; const a = (s || i) && x.css(e, 'boxSizing', !1, r) === 'border-box'; let l = i ? Qe(e, t, i, a, r) : 0; return a && s && (l -= Math.ceil(e[`offset${t[0].toUpperCase()}${t.slice(1)}`] - Number.parseFloat(r[t]) - Qe(e, t, 'border', !1, r) - 0.5)), l && (o = te.exec(n)) && (o[3] || 'px') !== 'px' && (e.style[t] = n, n = x.css(e, t)), Je(0, n, l) } }
    }), x.cssHooks.marginLeft = We(f.reliableMarginLeft, (e, t) => {
      if (t)
        return `${Number.parseFloat(ze(e, 'marginLeft')) || e.getBoundingClientRect().left - Ie(e, { marginLeft: 0 }, () => { return e.getBoundingClientRect().left })}px`
    }), x.each({ margin: '', padding: '', border: 'Width' }, (e, t) => { x.cssHooks[e + t] = { expand(n) { for (var i = 0, o = {}, r = typeof n == 'string' ? n.split(' ') : [n]; i < 4; i++)o[e + ne[i] + t] = r[i] || r[i - 2] || r[0]; return o } }, e !== 'margin' && (x.cssHooks[e + t].set = Je) }), x.fn.extend({ css(e, t) { return F(this, (e, t, n) => { let i; let o; const r = {}; let s = 0; if (Array.isArray(t)) { for (i = Me(e), o = t.length; s < o; s++)r[t[s]] = x.css(e, t[s], !1, i); return r } return void 0 !== n ? x.style(e, t, n) : x.css(e, t) }, e, t, arguments.length > 1) } }), x.Tween = Ze, Ze.prototype = { constructor: Ze, init(e, t, n, i, o, r) { this.elem = e, this.prop = n, this.easing = o || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (x.cssNumber[n] ? '' : 'px') }, cur() { const e = Ze.propHooks[this.prop]; return e && e.get ? e.get(this) : Ze.propHooks._default.get(this) }, run(e) { let t; const n = Ze.propHooks[this.prop]; return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ze.propHooks._default.set(this), this } }, Ze.prototype.init.prototype = Ze.prototype, Ze.propHooks = { _default: { get(e) { let t; return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, '')) && t !== 'auto' ? t : 0 }, set(e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.nodeType !== 1 || !x.cssHooks[e.prop] && e.elem.style[Ue(e.prop)] == null ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit) } } }, Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = { set(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.easing = { linear(e) { return e }, swing(e) { return 0.5 - Math.cos(e * Math.PI) / 2 }, _default: 'swing' }, x.fx = Ze.prototype.init, x.fx.step = {}; let et; let tt; const nt = /^(?:toggle|show|hide)$/; const it = /queueHooks$/; function ot() { tt && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, x.fx.interval), x.fx.tick()) } function rt() { return e.setTimeout(() => { et = void 0 }), et = Date.now() } function st(e, t) { let n; let i = 0; const o = { height: e }; for (t = t ? 1 : 0; i < 4; i += 2 - t)o[`margin${n = ne[i]}`] = o[`padding${n}`] = e; return t && (o.opacity = o.width = e), o } function at(e, t, n) {
      for (var i, o = (lt.tweeners[t] || []).concat(lt.tweeners['*']), r = 0, s = o.length; r < s; r++) {
        if (i = o[r].call(n, t, e))
          return i
      }
    } function lt(e, t, n) {
      let i; let o; let r = 0; const s = lt.prefilters.length; const a = x.Deferred().always(() => { delete l.elem }); var l = function () {
        if (o)
          return !1; for (var t = et || rt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++)c.tweens[r].run(i); return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
      }; var c = a.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n), originalProperties: t, originalOptions: n, startTime: et || rt(), duration: n.duration, tweens: [], createTween(t, n) { const i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(i), i }, stop(t) {
        let n = 0; const i = t ? c.tweens.length : 0; if (o)
          return this; for (o = !0; n < i; n++)c.tweens[n].run(1); return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
      } }); const d = c.props; for (!(function (e, t) {
        let n, i, o, r, s; for (n in e) {
          if (o = t[i = X(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = x.cssHooks[i]) && 'expand' in s) {
            for (n in r = s.expand(r), delete e[i], r)n in e || (e[n] = r[n], t[n] = o)
          }
          else {
            t[i] = o
          }
        }
      }(d, c.opts.specialEasing)); r < s; r++) {
        if (i = lt.prefilters[r].call(c, e, d, c.opts))
          return h(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i
      } return x.map(d, at, c), h(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c
    }x.Animation = x.extend(lt, { tweeners: { '*': [function (e, t) { const n = this.createTween(e, t); return ae(n.elem, e, te.exec(t), n), n }] }, tweener(e, t) { h(e) ? (t = e, e = ['*']) : e = e.match(q); for (var n, i = 0, o = e.length; i < o; i++)n = e[i], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) {
      let i; let o; let r; let s; let a; let l; let c; let d; const u = 'width' in t || 'height' in t; const p = this; const f = {}; const h = e.style; let v = e.nodeType && se(e); let g = V.get(e, 'fxshow'); for (i in n.queue || ((s = x._queueHooks(e, 'fx')).unqueued == null && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () { s.unqueued || a() }), s.unqueued++, p.always(() => { p.always(() => { s.unqueued--, x.queue(e, 'fx').length || s.empty.fire() }) })), t) {
        if (o = t[i], nt.test(o)) {
          if (delete t[i], r = r || o === 'toggle', o === (v ? 'hide' : 'show')) {
            if (o !== 'show' || !g || void 0 === g[i])
              continue; v = !0
          }f[i] = g && g[i] || x.style(e, i)
        }
      } if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f)) {
        for (i in u && e.nodeType === 1 && (n.overflow = [h.overflow, h.overflowX, h.overflowY], (c = g && g.display) == null && (c = V.get(e, 'display')), (d = x.css(e, 'display')) === 'none' && (c ? d = c : (de([e], !0), c = e.style.display || c, d = x.css(e, 'display'), de([e]))), (d === 'inline' || d === 'inline-block' && c != null) && x.css(e, 'float') === 'none' && (l || (p.done(() => { h.display = c }), c == null && (d = h.display, c = d === 'none' ? '' : d)), h.display = 'inline-block')), n.overflow && (h.overflow = 'hidden', p.always(() => { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), l = !1, f)l || (g ? 'hidden' in g && (v = g.hidden) : g = V.access(e, 'fxshow', { display: c }), r && (g.hidden = !v), v && de([e], !0), p.done(() => { for (i in v || de([e]), V.remove(e, 'fxshow'), f)x.style(e, i, f[i]) })), l = at(v ? g[i] : 0, i, p), i in g || (g[i] = l.start, v && (l.end = l.start, l.start = 0))
      }
    }], prefilter(e, t) { t ? lt.prefilters.unshift(e) : lt.prefilters.push(e) } }), x.speed = function (e, t, n) { const i = e && typeof e == 'object' ? x.extend({}, e) : { complete: n || !n && t || h(e) && e, duration: e, easing: n && t || t && !h(t) && t }; return x.fx.off ? i.duration = 0 : typeof i.duration != 'number' && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), i.queue != null && !0 !== i.queue || (i.queue = 'fx'), i.old = i.complete, i.complete = function () { h(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue) }, i }, x.fn.extend({ fadeTo(e, t, n, i) { return this.filter(se).css('opacity', 0).show().end().animate({ opacity: t }, e, n, i) }, animate(e, t, n, i) { const o = x.isEmptyObject(e); const r = x.speed(t, n, i); const s = function () { const t = lt(this, x.extend({}, e), r); (o || V.get(this, 'finish')) && t.stop(!0) }; return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s) }, stop(e, t, n) {
      const i = function (e) { const t = e.stop; delete e.stop, t(n) }; return typeof e != 'string' && (n = t, t = e, e = void 0), t && this.queue(e || 'fx', []), this.each(function () {
        let t = !0; let o = e != null && `${e}queueHooks`; const r = x.timers; const s = V.get(this); if (o) {
          s[o] && s[o].stop && i(s[o])
        }
        else {
          for (o in s)s[o] && s[o].stop && it.test(o) && i(s[o])
        } for (o = r.length; o--;)r[o].elem !== this || e != null && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1)); !t && n || x.dequeue(this, e)
      })
    }, finish(e) { return !1 !== e && (e = e || 'fx'), this.each(function () { let t; const n = V.get(this); const i = n[`${e}queue`]; const o = n[`${e}queueHooks`]; const r = x.timers; const s = i ? i.length : 0; for (n.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;)r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1)); for (t = 0; t < s; t++)i[t] && i[t].finish && i[t].finish.call(this); delete n.finish }) } }), x.each(['toggle', 'show', 'hide'], (e, t) => { const n = x.fn[t]; x.fn[t] = function (e, i, o) { return e == null || typeof e == 'boolean' ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, o) } }), x.each({ slideDown: st('show'), slideUp: st('hide'), slideToggle: st('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, (e, t) => { x.fn[e] = function (e, n, i) { return this.animate(t, e, n, i) } }), x.timers = [], x.fx.tick = function () { let e; let t = 0; const n = x.timers; for (et = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || x.fx.stop(), et = void 0 }, x.fx.timer = function (e) { x.timers.push(e), x.fx.start() }, x.fx.interval = 13, x.fx.start = function () { tt || (tt = !0, ot()) }, x.fx.stop = function () { tt = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fn.delay = function (t, n) { return t = x.fx && x.fx.speeds[t] || t, n = n || 'fx', this.queue(n, (n, i) => { const o = e.setTimeout(n, t); i.stop = function () { e.clearTimeout(o) } }) }, (function () { let e = g.createElement('input'); const t = g.createElement('select').appendChild(g.createElement('option')); e.type = 'checkbox', f.checkOn = e.value !== '', f.optSelected = t.selected, (e = g.createElement('input')).value = 't', e.type = 'radio', f.radioValue = e.value === 't' }()); let ct; const dt = x.expr.attrHandle; x.fn.extend({ attr(e, t) { return F(this, x.attr, e, t, arguments.length > 1) }, removeAttr(e) { return this.each(function () { x.removeAttr(this, e) }) } }), x.extend({ attr(e, t, n) {
      let i; let o; const r = e.nodeType; if (r !== 3 && r !== 8 && r !== 2)
        return void 0 === e.getAttribute ? x.prop(e, t, n) : (r === 1 && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? n === null ? void x.removeAttr(e, t) : o && 'set' in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, `${n}`), n) : o && 'get' in o && (i = o.get(e, t)) !== null ? i : (i = x.find.attr(e, t)) == null ? void 0 : i)
    }, attrHooks: { type: { set(e, t) { if (!f.radioValue && t === 'radio' && A(e, 'input')) { const n = e.value; return e.setAttribute('type', t), n && (e.value = n), t } } } }, removeAttr(e, t) {
      let n; let i = 0; const o = t && t.match(q); if (o && e.nodeType === 1) {
        for (;n = o[i++];)e.removeAttribute(n)
      }
    } }), ct = { set(e, t, n) { return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n } }, x.each(x.expr.match.bool.source.match(/\w+/g), (e, t) => { const n = dt[t] || x.find.attr; dt[t] = function (e, t, i) { let o; let r; const s = t.toLowerCase(); return i || (r = dt[s], dt[s] = o, o = n(e, t, i) != null ? s : null, dt[s] = r), o } }); const ut = /^(?:input|select|textarea|button)$/i; const pt = /^(?:a|area)$/i; function ft(e) { return (e.match(q) || []).join(' ') } function ht(e) { return e.getAttribute && e.getAttribute('class') || '' } function vt(e) { return Array.isArray(e) ? e : typeof e == 'string' && e.match(q) || [] }x.fn.extend({ prop(e, t) { return F(this, x.prop, e, t, arguments.length > 1) }, removeProp(e) { return this.each(function () { delete this[x.propFix[e] || e] }) } }), x.extend({ prop(e, t, n) {
      let i; let o; const r = e.nodeType; if (r !== 3 && r !== 8 && r !== 2)
        return r === 1 && x.isXMLDoc(e) || (t = x.propFix[t] || t, o = x.propHooks[t]), void 0 !== n ? o && 'set' in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && 'get' in o && (i = o.get(e, t)) !== null ? i : e[t]
    }, propHooks: { tabIndex: { get(e) { const t = x.find.attr(e, 'tabindex'); return t ? Number.parseInt(t, 10) : ut.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: 'htmlFor', class: 'className' } }), f.optSelected || (x.propHooks.selected = { get(e) { const t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set(e) { const t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), x.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () { x.propFix[this.toLowerCase()] = this }), x.fn.extend({ addClass(e) {
      let t; let n; let i; let o; let r; let s; let a; let l = 0; if (h(e))
        return this.each(function (t) { x(this).addClass(e.call(this, t, ht(this))) }); if ((t = vt(e)).length) {
        for (;n = this[l++];) {
          if (o = ht(n), i = n.nodeType === 1 && ` ${ft(o)} `) { for (s = 0; r = t[s++];)!i.includes(` ${r} `) && (i += `${r} `); o !== (a = ft(i)) && n.setAttribute('class', a) }
        }
      } return this
    }, removeClass(e) {
      let t; let n; let i; let o; let r; let s; let a; let l = 0; if (h(e))
        return this.each(function (t) { x(this).removeClass(e.call(this, t, ht(this))) }); if (!arguments.length)
        return this.attr('class', ''); if ((t = vt(e)).length) {
        for (;n = this[l++];) {
          if (o = ht(n), i = n.nodeType === 1 && ` ${ft(o)} `) {
            for (s = 0; r = t[s++];) {
              for (;i.includes(` ${r} `);)i = i.replace(` ${r} `, ' ')
            } o !== (a = ft(i)) && n.setAttribute('class', a)
          }
        }
      } return this
    }, toggleClass(e, t) {
      const n = typeof e; const i = n === 'string' || Array.isArray(e); return typeof t == 'boolean' && i
        ? t ? this.addClass(e) : this.removeClass(e)
        : h(e)
          ? this.each(function (n) { x(this).toggleClass(e.call(this, n, ht(this), t), t) })
          : this.each(function () {
              let t, o, r, s; if (i) {
                for (o = 0, r = x(this), s = vt(e); t = s[o++];)r.hasClass(t) ? r.removeClass(t) : r.addClass(t)
              }
              else {
                void 0 !== e && n !== 'boolean' || ((t = ht(this)) && V.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : V.get(this, '__className__') || ''))
              }
            })
    }, hasClass(e) {
      let t; let n; let i = 0; for (t = ` ${e} `; n = this[i++];) {
        if (n.nodeType === 1 && (` ${ft(ht(n))} `).includes(t))
          return !0
      } return !1
    } }); const gt = /\r/g; x.fn.extend({ val(e) { let t; let n; let i; const o = this[0]; return arguments.length ? (i = h(e), this.each(function (n) { let o; this.nodeType === 1 && ((o = i ? e.call(this, n, x(this).val()) : e) == null ? o = '' : typeof o == 'number' ? o += '' : Array.isArray(o) && (o = x.map(o, (e) => { return e == null ? '' : `${e}` })), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, o, 'value') || (this.value = o)) })) : o ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && 'get' in t && void 0 !== (n = t.get(o, 'value')) ? n : typeof (n = o.value) == 'string' ? n.replace(gt, '') : n == null ? '' : n : void 0 } }), x.extend({ valHooks: { option: { get(e) { const t = x.find.attr(e, 'value'); return t != null ? t : ft(x.text(e)) } }, select: { get(e) {
      let t; let n; let i; const o = e.options; const r = e.selectedIndex; const s = e.type === 'select-one'; const a = s ? null : []; const l = s ? r + 1 : o.length; for (i = r < 0 ? l : s ? r : 0; i < l; i++) {
        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))) {
          if (t = x(n).val(), s)
            return t; a.push(t)
        }
      } return a
    }, set(e, t) { for (var n, i, o = e.options, r = x.makeArray(t), s = o.length; s--;)((i = o[s]).selected = x.inArray(x.valHooks.option.get(i), r) > -1) && (n = !0); return n || (e.selectedIndex = -1), r } } } }), x.each(['radio', 'checkbox'], function () {
      x.valHooks[this] = { set(e, t) {
        if (Array.isArray(t))
          return e.checked = x.inArray(x(e).val(), t) > -1
      } }, f.checkOn || (x.valHooks[this].get = function (e) { return e.getAttribute('value') === null ? 'on' : e.value })
    }), f.focusin = 'onfocusin' in e; const yt = /^(?:focusinfocus|focusoutblur)$/; const mt = function (e) { e.stopPropagation() }; x.extend(x.event, { trigger(t, n, i, o) { let r; let s; let a; let l; let c; let u; let p; let f; const y = [i || g]; let m = d.call(t, 'type') ? t.type : t; let w = d.call(t, 'namespace') ? t.namespace.split('.') : []; if (s = f = a = i = i || g, i.nodeType !== 3 && i.nodeType !== 8 && !yt.test(m + x.event.triggered) && (m.includes('.') && (w = m.split('.'), m = w.shift(), w.sort()), c = !m.includes(':') && `on${m}`, (t = t[x.expando] ? t : new x.Event(m, typeof t == 'object' && t)).isTrigger = o ? 2 : 3, t.namespace = w.join('.'), t.rnamespace = t.namespace ? new RegExp(`(^|\\.)${w.join('\\.(?:.*\\.|)')}(\\.|$)`) : null, t.result = void 0, t.target || (t.target = i), n = n == null ? [t] : x.makeArray(n, [t]), p = x.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, n))) { if (!o && !p.noBubble && !v(i)) { for (l = p.delegateType || m, yt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)y.push(s), a = s; a === (i.ownerDocument || g) && y.push(a.defaultView || a.parentWindow || e) } for (r = 0; (s = y[r++]) && !t.isPropagationStopped();)f = s, t.type = r > 1 ? l : p.bindType || m, (u = (V.get(s, 'events') || Object.create(null))[t.type] && V.get(s, 'handle')) && u.apply(s, n), (u = c && s[c]) && u.apply && Y(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault()); return t.type = m, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !Y(i) || c && h(i[m]) && !v(i) && ((a = i[c]) && (i[c] = null), x.event.triggered = m, t.isPropagationStopped() && f.addEventListener(m, mt), i[m](), t.isPropagationStopped() && f.removeEventListener(m, mt), x.event.triggered = void 0, a && (i[c] = a)), t.result } }, simulate(e, t, n) { const i = x.extend(new x.Event(), n, { type: e, isSimulated: !0 }); x.event.trigger(i, null, t) } }), x.fn.extend({ trigger(e, t) { return this.each(function () { x.event.trigger(e, t, this) }) }, triggerHandler(e, t) {
      const n = this[0]; if (n)
        return x.event.trigger(e, t, n, !0)
    } }), f.focusin || x.each({ focus: 'focusin', blur: 'focusout' }, (e, t) => { const n = function (e) { x.event.simulate(t, e.target, x.event.fix(e)) }; x.event.special[t] = { setup() { const i = this.ownerDocument || this.document || this; const o = V.access(i, t); o || i.addEventListener(e, n, !0), V.access(i, t, (o || 0) + 1) }, teardown() { const i = this.ownerDocument || this.document || this; const o = V.access(i, t) - 1; o ? V.access(i, t, o) : (i.removeEventListener(e, n, !0), V.remove(i, t)) } } }); const wt = e.location; const bt = { guid: Date.now() }; const xt = /\?/; x.parseXML = function (t) {
      let n, i; if (!t || typeof t != 'string')
        return null; try { n = (new e.DOMParser()).parseFromString(t, 'text/xml') }
      catch (e) {} return i = n && n.getElementsByTagName('parsererror')[0], n && !i || x.error(`Invalid XML: ${i ? x.map(i.childNodes, (e) => { return e.textContent }).join('\n') : t}`), n
    }; const Tt = /\[\]$/; const kt = /\r?\n/g; const St = /^(?:submit|button|image|reset|file)$/i; const Ct = /^(?:input|select|textarea|keygen)/i; function $t(e, t, n, i) {
      let o; if (Array.isArray(t)) {
        x.each(t, (t, o) => { n || Tt.test(e) ? i(e, o) : $t(`${e}[${typeof o == 'object' && o != null ? t : ''}]`, o, n, i) })
      }
      else if (n || w(t) !== 'object') {
        i(e, t)
      }
      else {
        for (o in t)$t(`${e}[${o}]`, t[o], n, i)
      }
    }x.param = function (e, t) {
      let n; const i = []; const o = function (e, t) { const n = h(t) ? t() : t; i[i.length] = `${encodeURIComponent(e)}=${encodeURIComponent(n == null ? '' : n)}` }; if (e == null)
        return ''; if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) {
        x.each(e, function () { o(this.name, this.value) })
      }
      else {
        for (n in e)$t(n, e[n], t, o)
      } return i.join('&')
    }, x.fn.extend({ serialize() { return x.param(this.serializeArray()) }, serializeArray() { return this.map(function () { const e = x.prop(this, 'elements'); return e ? x.makeArray(e) : this }).filter(function () { const e = this.type; return this.name && !x(this).is(':disabled') && Ct.test(this.nodeName) && !St.test(e) && (this.checked || !fe.test(e)) }).map(function (e, t) { const n = x(this).val(); return n == null ? null : Array.isArray(n) ? x.map(n, (e) => { return { name: t.name, value: e.replace(kt, '\r\n') } }) : { name: t.name, value: n.replace(kt, '\r\n') } }).get() } }); const At = /%20/g; const Et = /#.*$/; const Lt = /([?&])_=[^&]*/; const jt = /^(.*?):[ \t]*([^\r\n]*)$/gm; const Dt = /^(?:GET|HEAD)$/; const Nt = /^\/\//; const Ot = {}; const Ht = {}; const qt = '*/'.concat('*'); const Pt = g.createElement('a'); function Mt(e) {
      return function (t, n) {
        typeof t != 'string' && (n = t, t = '*'); let i; let o = 0; const r = t.toLowerCase().match(q) || []; if (h(n)) {
          for (;i = r[o++];)i[0] === '+' ? (i = i.slice(1) || '*', (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
      }
    } function It(e, t, n, i) { const o = {}; const r = e === Ht; function s(a) { let l; return o[a] = !0, x.each(e[a] || [], (e, a) => { const c = a(t, n, i); return typeof c != 'string' || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1) }), l } return s(t.dataTypes[0]) || !o['*'] && s('*') } function Rt(e, t) { let n; let i; const o = x.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]); return i && x.extend(!0, e, i), e }Pt.href = wt.href, x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: wt.href, type: 'GET', isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol), global: !0, processData: !0, async: !0, contentType: 'application/x-www-form-urlencoded; charset=UTF-8', accepts: { '*': qt, 'text': 'text/plain', 'html': 'text/html', 'xml': 'application/xml, text/xml', 'json': 'application/json, text/javascript' }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' }, converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': x.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup(e, t) { return t ? Rt(Rt(e, x.ajaxSettings), t) : Rt(x.ajaxSettings, e) }, ajaxPrefilter: Mt(Ot), ajaxTransport: Mt(Ht), ajax(t, n) {
      typeof t == 'object' && (n = t, t = void 0), n = n || {}; let i; let o; let r; let s; let a; let l; let c; let d; let u; let p; const f = x.ajaxSetup({}, n); const h = f.context || f; const v = f.context && (h.nodeType || h.jquery) ? x(h) : x.event; const y = x.Deferred(); const m = x.Callbacks('once memory'); let w = f.statusCode || {}; const b = {}; const T = {}; let k = 'canceled'; var S = { readyState: 0, getResponseHeader(e) {
        let t; if (c) {
          if (!s) {
            for (s = {}; t = jt.exec(r);)s[`${t[1].toLowerCase()} `] = (s[`${t[1].toLowerCase()} `] || []).concat(t[2])
          } t = s[`${e.toLowerCase()} `]
        } return t == null ? null : t.join(', ')
      }, getAllResponseHeaders() { return c ? r : null }, setRequestHeader(e, t) { return c == null && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this }, overrideMimeType(e) { return c == null && (f.mimeType = e), this }, statusCode(e) {
        let t; if (e) {
          if (c) {
            S.always(e[S.status])
          }
          else {
            for (t in e)w[t] = [w[t], e[t]]
          }
        } return this
      }, abort(e) { const t = e || k; return i && i.abort(t), C(0, t), this } }; if (y.promise(S), f.url = (`${t || f.url || wt.href}`).replace(Nt, `${wt.protocol}//`), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || '*').toLowerCase().match(q) || [''], f.crossDomain == null) {
        l = g.createElement('a'); try { l.href = f.url, l.href = l.href, f.crossDomain = `${Pt.protocol}//${Pt.host}` != `${l.protocol}//${l.host}` }
        catch (e) { f.crossDomain = !0 }
      } if (f.data && f.processData && typeof f.data != 'string' && (f.data = x.param(f.data, f.traditional)), It(Ot, f, n, S), c)
        return S; for (u in (d = x.event && f.global) && x.active++ == 0 && x.event.trigger('ajaxStart'), f.type = f.type.toUpperCase(), f.hasContent = !Dt.test(f.type), o = f.url.replace(Et, ''), f.hasContent ? f.data && f.processData && (f.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 && (f.data = f.data.replace(At, '+')) : (p = f.url.slice(o.length), f.data && (f.processData || typeof f.data == 'string') && (o += (xt.test(o) ? '&' : '?') + f.data, delete f.data), !1 === f.cache && (o = o.replace(Lt, '$1'), p = `${xt.test(o) ? '&' : '?'}_=${bt.guid++}${p}`), f.url = o + p), f.ifModified && (x.lastModified[o] && S.setRequestHeader('If-Modified-Since', x.lastModified[o]), x.etag[o] && S.setRequestHeader('If-None-Match', x.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && S.setRequestHeader('Content-Type', f.contentType), S.setRequestHeader('Accept', f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== '*' ? `, ${qt}; q=0.01` : '') : f.accepts['*']), f.headers)S.setRequestHeader(u, f.headers[u]); if (f.beforeSend && (!1 === f.beforeSend.call(h, S, f) || c))
        return S.abort(); if (k = 'abort', m.add(f.complete), S.done(f.success), S.fail(f.error), i = It(Ht, f, n, S)) {
        if (S.readyState = 1, d && v.trigger('ajaxSend', [S, f]), c)
          return S; f.async && f.timeout > 0 && (a = e.setTimeout(() => { S.abort('timeout') }, f.timeout)); try { c = !1, i.send(b, C) }
        catch (e) {
          if (c)
            throw e; C(-1, e)
        }
      }
      else {
        C(-1, 'No Transport')
      } function C(t, n, s, l) {
        let u; let p; let g; let b; let T; let k = n; c || (c = !0, a && e.clearTimeout(a), i = void 0, r = l || '', S.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || t === 304, s && (b = (function (e, t, n) {
          for (var i, o, r, s, a = e.contents, l = e.dataTypes; l[0] === '*';)l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type')); if (i) {
            for (o in a) {
              if (a[o] && a[o].test(i)) { l.unshift(o); break }
            }
          } if (l[0] in n) {
            r = l[0]
          }
          else { for (o in n) { if (!l[0] || e.converters[`${o} ${l[0]}`]) { r = o; break }s || (s = o) }r = r || s } if (r)
            return r !== l[0] && l.unshift(r), n[r]
        }(f, S, s))), !u && x.inArray('script', f.dataTypes) > -1 && x.inArray('json', f.dataTypes) < 0 && (f.converters['text script'] = function () {}), b = (function (e, t, n, i) {
          let o; let r; let s; let a; let l; const c = {}; const d = e.dataTypes.slice(); if (d[1]) {
            for (s in e.converters)c[s.toLowerCase()] = e.converters[s]
          } for (r = d.shift(); r;) {
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift()) {
              if (r === '*') {
                r = l
              }
              else if (l !== '*' && l !== r) {
                if (!(s = c[`${l} ${r}`] || c[`* ${r}`])) {
                  for (o in c) {
                    if ((a = o.split(' '))[1] === r && (s = c[`${l} ${a[0]}`] || c[`* ${a[0]}`])) { !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1])); break }
                  }
                } if (!0 !== s) {
                  if (s && e.throws) {
                    t = s(t)
                  }
                  else {
                    try { t = s(t) }
                    catch (e) { return { state: 'parsererror', error: s ? e : `No conversion from ${l} to ${r}` } }
                  }
                }
              }
            }
          } return { state: 'success', data: t }
        }(f, b, S, u)), u ? (f.ifModified && ((T = S.getResponseHeader('Last-Modified')) && (x.lastModified[o] = T), (T = S.getResponseHeader('etag')) && (x.etag[o] = T)), t === 204 || f.type === 'HEAD' ? k = 'nocontent' : t === 304 ? k = 'notmodified' : (k = b.state, p = b.data, u = !(g = b.error))) : (g = k, !t && k || (k = 'error', t < 0 && (t = 0))), S.status = t, S.statusText = `${n || k}`, u ? y.resolveWith(h, [p, k, S]) : y.rejectWith(h, [S, k, g]), S.statusCode(w), w = void 0, d && v.trigger(u ? 'ajaxSuccess' : 'ajaxError', [S, f, u ? p : g]), m.fireWith(h, [S, k]), d && (v.trigger('ajaxComplete', [S, f]), --x.active || x.event.trigger('ajaxStop')))
      } return S
    }, getJSON(e, t, n) { return x.get(e, t, n, 'json') }, getScript(e, t) { return x.get(e, void 0, t, 'script') } }), x.each(['get', 'post'], (e, t) => { x[t] = function (e, n, i, o) { return h(n) && (o = o || i, i = n, n = void 0), x.ajax(x.extend({ url: e, type: t, dataType: o, data: n, success: i }, x.isPlainObject(e) && e)) } }), x.ajaxPrefilter((e) => { let t; for (t in e.headers)t.toLowerCase() === 'content-type' && (e.contentType = e.headers[t] || '') }), x._evalUrl = function (e, t, n) { return x.ajax({ url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, converters: { 'text script': function () {} }, dataFilter(e) { x.globalEval(e, t, n) } }) }, x.fn.extend({ wrapAll(e) { let t; return this[0] && (h(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { for (var e = this; e.firstElementChild;)e = e.firstElementChild; return e }).append(this)), this }, wrapInner(e) { return h(e) ? this.each(function (t) { x(this).wrapInner(e.call(this, t)) }) : this.each(function () { const t = x(this); const n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap(e) { const t = h(e); return this.each(function (n) { x(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap(e) { return this.parent(e).not('body').each(function () { x(this).replaceWith(this.childNodes) }), this } }), x.expr.pseudos.hidden = function (e) { return !x.expr.pseudos.visible(e) }, x.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, x.ajaxSettings.xhr = function () {
      try { return new e.XMLHttpRequest() }
      catch (e) {}
    }; const zt = { 0: 200, 1223: 204 }; let Wt = x.ajaxSettings.xhr(); f.cors = !!Wt && 'withCredentials' in Wt, f.ajax = Wt = !!Wt, x.ajaxTransport((t) => {
      let n, i; if (f.cors || Wt && !t.crossDomain) {
        return { send(o, r) {
          let s; const a = t.xhr(); if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) {
            for (s in t.xhrFields)a[s] = t.xhrFields[s]
          } for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest'), o)a.setRequestHeader(s, o[s]); n = function (e) { return function () { n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, e === 'abort' ? a.abort() : e === 'error' ? typeof a.status != 'number' ? r(0, 'error') : r(a.status, a.statusText) : r(zt[a.status] || a.status, a.statusText, (a.responseType || 'text') !== 'text' || typeof a.responseText != 'string' ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = n(), i = a.onerror = a.ontimeout = n('error'), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () { a.readyState === 4 && e.setTimeout(() => { n && i() }) }, n = n('abort'); try { a.send(t.hasContent && t.data || null) }
          catch (e) {
            if (n)
              throw e
          }
        }, abort() { n && n() } }
      }
    }), x.ajaxPrefilter((e) => { e.crossDomain && (e.contents.script = !1) }), x.ajaxSetup({ accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { 'text script': function (e) { return x.globalEval(e), e } } }), x.ajaxPrefilter('script', (e) => { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET') }), x.ajaxTransport('script', (e) => {
      let t, n; if (e.crossDomain || e.scriptAttrs)
        return { send(i, o) { t = x('<script>').attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on('load error', n = function (e) { t.remove(), n = null, e && o(e.type === 'error' ? 404 : 200, e.type) }), g.head.appendChild(t[0]) }, abort() { n && n() } }
    }); let Ft; const _t = []; const Bt = /(=)\?(?=&|$)|\?\?/; x.ajaxSetup({ jsonp: 'callback', jsonpCallback() { const e = _t.pop() || `${x.expando}_${bt.guid++}`; return this[e] = !0, e } }), x.ajaxPrefilter('json jsonp', (t, n, i) => {
      let o; let r; let s; const a = !1 !== t.jsonp && (Bt.test(t.url) ? 'url' : typeof t.data == 'string' && (t.contentType || '').indexOf('application/x-www-form-urlencoded') === 0 && Bt.test(t.data) && 'data'); if (a || t.dataTypes[0] === 'jsonp')
        return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Bt, `$1${o}`) : !1 !== t.jsonp && (t.url += `${(xt.test(t.url) ? '&' : '?') + t.jsonp}=${o}`), t.converters['script json'] = function () { return s || x.error(`${o} was not called`), s[0] }, t.dataTypes[0] = 'json', r = e[o], e[o] = function () { s = arguments }, i.always(() => { void 0 === r ? x(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, _t.push(o)), s && h(r) && r(s[0]), s = r = void 0 }), 'script'
    }), f.createHTMLDocument = ((Ft = g.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>', Ft.childNodes.length === 2), x.parseHTML = function (e, t, n) { return typeof e != 'string' ? [] : (typeof t == 'boolean' && (n = t, t = !1), t || (f.createHTMLDocument ? ((i = (t = g.implementation.createHTMLDocument('')).createElement('base')).href = g.location.href, t.head.appendChild(i)) : t = g), r = !n && [], (o = E.exec(e)) ? [t.createElement(o[1])] : (o = be([e], t, r), r && r.length && x(r).remove(), x.merge([], o.childNodes))); let i, o, r }, x.fn.load = function (e, t, n) { let i; let o; let r; const s = this; const a = e.indexOf(' '); return a > -1 && (i = ft(e.slice(a)), e = e.slice(0, a)), h(t) ? (n = t, t = void 0) : t && typeof t == 'object' && (o = 'POST'), s.length > 0 && x.ajax({ url: e, type: o || 'GET', dataType: 'html', data: t }).done(function (e) { r = arguments, s.html(i ? x('<div>').append(x.parseHTML(e)).find(i) : e) }).always(n && ((e, t) => { s.each(function () { n.apply(this, r || [e.responseText, t, e]) }) })), this }, x.expr.pseudos.animated = function (e) { return x.grep(x.timers, (t) => { return e === t.elem }).length }, x.offset = { setOffset(e, t, n) { let i; let o; let r; let s; let a; let l; const c = x.css(e, 'position'); const d = x(e); const u = {}; c === 'static' && (e.style.position = 'relative'), a = d.offset(), r = x.css(e, 'top'), l = x.css(e, 'left'), (c === 'absolute' || c === 'fixed') && (r + l).includes('auto') ? (s = (i = d.position()).top, o = i.left) : (s = Number.parseFloat(r) || 0, o = Number.parseFloat(l) || 0), h(t) && (t = t.call(e, n, x.extend({}, a))), t.top != null && (u.top = t.top - a.top + s), t.left != null && (u.left = t.left - a.left + o), 'using' in t ? t.using.call(e, u) : d.css(u) } }, x.fn.extend({ offset(e) {
      if (arguments.length)
        return void 0 === e ? this : this.each(function (t) { x.offset.setOffset(this, e, t) }); let t; let n; const i = this[0]; return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0
    }, position() {
      if (this[0]) {
        let e; let t; let n; const i = this[0]; let o = { top: 0, left: 0 }; if (x.css(i, 'position') === 'fixed') {
          t = i.getBoundingClientRect()
        }
        else { for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && x.css(e, 'position') === 'static';)e = e.parentNode; e && e !== i && e.nodeType === 1 && ((o = x(e).offset()).top += x.css(e, 'borderTopWidth', !0), o.left += x.css(e, 'borderLeftWidth', !0)) } return { top: t.top - o.top - x.css(i, 'marginTop', !0), left: t.left - o.left - x.css(i, 'marginLeft', !0) }
      }
    }, offsetParent() { return this.map(function () { for (var e = this.offsetParent; e && x.css(e, 'position') === 'static';)e = e.offsetParent; return e || ie }) } }), x.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, (e, t) => {
      const n = t === 'pageYOffset'; x.fn[e] = function (i) {
        return F(this, (e, i, o) => {
          let r; if (v(e) ? r = e : e.nodeType === 9 && (r = e.defaultView), void 0 === o)
            return r ? r[t] : e[i]; r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
        }, e, i, arguments.length)
      }
    }), x.each(['top', 'left'], (e, t) => {
      x.cssHooks[t] = We(f.pixelPosition, (e, n) => {
        if (n)
          return n = ze(e, t), Pe.test(n) ? `${x(e).position()[t]}px` : n
      })
    }), x.each({ Height: 'height', Width: 'width' }, (e, t) => { x.each({ 'padding': `inner${e}`, 'content': t, '': `outer${e}` }, (n, i) => { x.fn[i] = function (o, r) { const s = arguments.length && (n || typeof o != 'boolean'); const a = n || (!0 === o || !0 === r ? 'margin' : 'border'); return F(this, (t, n, o) => { let r; return v(t) ? i.indexOf('outer') === 0 ? t[`inner${e}`] : t.document.documentElement[`client${e}`] : t.nodeType === 9 ? (r = t.documentElement, Math.max(t.body[`scroll${e}`], r[`scroll${e}`], t.body[`offset${e}`], r[`offset${e}`], r[`client${e}`])) : void 0 === o ? x.css(t, n, a) : x.style(t, n, o, a) }, t, s ? o : void 0, s) } }) }), x.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], (e, t) => { x.fn[t] = function (e) { return this.on(t, e) } }), x.fn.extend({ bind(e, t, n) { return this.on(e, null, t, n) }, unbind(e, t) { return this.off(e, null, t) }, delegate(e, t, n, i) { return this.on(t, e, n, i) }, undelegate(e, t, n) { return arguments.length === 1 ? this.off(e, '**') : this.off(t, e || '**', n) }, hover(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), x.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), (e, t) => { x.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }); const Ut = /^\s+|\s+$/g; x.proxy = function (e, t) {
      let n, i, r; if (typeof t == 'string' && (n = e[t], t = e, e = n), h(e))
        return i = o.call(arguments, 2), r = function () { return e.apply(t || this, i.concat(o.call(arguments))) }, r.guid = e.guid = e.guid || x.guid++, r
    }, x.holdReady = function (e) { e ? x.readyWait++ : x.ready(!0) }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = A, x.isFunction = h, x.isWindow = v, x.camelCase = X, x.type = w, x.now = Date.now, x.isNumeric = function (e) { const t = x.type(e); return (t === 'number' || t === 'string') && !isNaN(e - Number.parseFloat(e)) }, x.trim = function (e) { return e == null ? '' : (`${e}`).replace(Ut, '') }, typeof define == 'function' && define.amd && define('jquery', [], () => { return x }); const Xt = e.jQuery; const Yt = e.$; return x.noConflict = function (t) { return e.$ === x && (e.$ = Yt), t && e.jQuery === x && (e.jQuery = Xt), x }, void 0 === t && (e.jQuery = e.$ = x), x
  }))
}), s('2q3cG').register(JSON.parse('{"jz2IP":"aiwrap_faq.0749faf6.js","hyShf":"kv.mp4","lDinw":"kv_pc.mp4","dm17b":"kv_takumi.mp4","lJ6sC":"kv_takumi_pc.mp4"}')); const a = (function (e) {
  let t; const n = Object.prototype; const i = n.hasOwnProperty; const o = typeof Symbol == 'function' ? Symbol : {}; const r = o.iterator || '@@iterator'; const s = o.asyncIterator || '@@asyncIterator'; const a = o.toStringTag || '@@toStringTag'; function l(e, t, n) { return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t] } try { l({}, '') }
  catch (e) { l = function (e, t, n) { return e[t] = n } } function c(e, t, n, i) {
    const o = t && t.prototype instanceof g ? t : g; const r = Object.create(o.prototype); const s = new E(i || []); return r._invoke = (function (e, t, n) {
      let i = u; return function (o, r) {
        if (i === f)
          throw new Error('Generator is already running'); if (i === h) {
          if (o === 'throw')
            throw r; return j()
        } for (n.method = o, n.arg = r; ;) {
          const s = n.delegate; if (s) {
            const a = C(s, n); if (a) {
              if (a === v)
                continue; return a
            }
          } if (n.method === 'next') {
            n.sent = n._sent = n.arg
          }
          else if (n.method === 'throw') {
            if (i === u)
              throw i = h, n.arg; n.dispatchException(n.arg)
          }
          else {
            n.method === 'return' && n.abrupt('return', n.arg)
          } i = f; const l = d(e, t, n); if (l.type === 'normal') {
            if (i = n.done ? h : p, l.arg === v)
              continue; return { value: l.arg, done: n.done }
          }l.type === 'throw' && (i = h, n.method = 'throw', n.arg = l.arg)
        }
      }
    }(e, n, s)), r
  } function d(e, t, n) {
    try { return { type: 'normal', arg: e.call(t, n) } }
    catch (e) { return { type: 'throw', arg: e } }
  }e.wrap = c; var u = 'suspendedStart'; var p = 'suspendedYield'; var f = 'executing'; var h = 'completed'; var v = {}; function g() {} function y() {} function m() {} let w = {}; l(w, r, function () { return this }); const b = Object.getPrototypeOf; const x = b && b(b(L([]))); x && x !== n && i.call(x, r) && (w = x); const T = m.prototype = g.prototype = Object.create(w); function k(e) { ['next', 'throw', 'return'].forEach((t) => { l(e, t, function (e) { return this._invoke(t, e) }) }) } function S(e, t) { function n(o, r, s, a) { const l = d(e[o], e, r); if (l.type !== 'throw') { const c = l.arg; const u = c.value; return u && typeof u == 'object' && i.call(u, '__await') ? t.resolve(u.__await).then((e) => { n('next', e, s, a) }, (e) => { n('throw', e, s, a) }) : t.resolve(u).then((e) => { c.value = e, s(c) }, (e) => { return n('throw', e, s, a) }) }a(l.arg) } let o; this._invoke = function (e, i) { function r() { return new t((t, o) => { n(e, i, t, o) }) } return o = o ? o.then(r, r) : r() } } function C(e, n) {
    const i = e.iterator[n.method]; if (i === t) {
      if (n.delegate = null, n.method === 'throw') {
        if (e.iterator.return && (n.method = 'return', n.arg = t, C(e, n), n.method === 'throw'))
          return v; n.method = 'throw', n.arg = new TypeError('The iterator does not provide a \'throw\' method')
      } return v
    } const o = d(i, e.iterator, n.arg); if (o.type === 'throw')
      return n.method = 'throw', n.arg = o.arg, n.delegate = null, v; const r = o.arg; return r ? r.done ? (n[e.resultName] = r.value, n.next = e.nextLoc, n.method !== 'return' && (n.method = 'next', n.arg = t), n.delegate = null, v) : r : (n.method = 'throw', n.arg = new TypeError('iterator result is not an object'), n.delegate = null, v)
  } function $(e) { const t = { tryLoc: e[0] }; 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t) } function A(e) { const t = e.completion || {}; t.type = 'normal', delete t.arg, e.completion = t } function E(e) { this.tryEntries = [{ tryLoc: 'root' }], e.forEach($, this), this.reset(!0) } function L(e) {
    if (e) {
      const n = e[r]; if (n)
        return n.call(e); if (typeof e.next == 'function')
        return e; if (!isNaN(e.length)) {
        let o = -1; const s = function n() {
          for (;++o < e.length;) {
            if (i.call(e, o))
              return n.value = e[o], n.done = !1, n
          } return n.value = t, n.done = !0, n
        }; return s.next = s
      }
    } return { next: j }
  } function j() { return { value: t, done: !0 } } return y.prototype = m, l(T, 'constructor', m), l(m, 'constructor', y), y.displayName = l(m, a, 'GeneratorFunction'), e.isGeneratorFunction = function (e) { const t = typeof e == 'function' && e.constructor; return !!t && (t === y || (t.displayName || t.name) === 'GeneratorFunction') }, e.mark = function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, a, 'GeneratorFunction')), e.prototype = Object.create(T), e }, e.awrap = function (e) { return { __await: e } }, k(S.prototype), l(S.prototype, s, function () { return this }), e.AsyncIterator = S, e.async = function (t, n, i, o, r) { void 0 === r && (r = Promise); const s = new S(c(t, n, i, o), r); return e.isGeneratorFunction(n) ? s : s.next().then((e) => { return e.done ? e.value : s.next() }) }, k(T), l(T, a, 'Generator'), l(T, r, function () { return this }), l(T, 'toString', () => { return '[object Generator]' }), e.keys = function (e) {
    const t = []; for (const n in e)t.push(n); return t.reverse(), function n() {
      for (;t.length;) {
        const i = t.pop(); if (i in e)
          return n.value = i, n.done = !1, n
      } return n.done = !0, n
    }
  }, e.values = L, E.prototype = { constructor: E, reset(e) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = 'next', this.arg = t, this.tryEntries.forEach(A), !e) {
      for (const n in this)n.charAt(0) === 't' && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
    }
  }, stop() {
    this.done = !0; const e = this.tryEntries[0].completion; if (e.type === 'throw')
      throw e.arg; return this.rval
  }, dispatchException(e) {
    if (this.done)
      throw e; const n = this; function o(i, o) { return a.type = 'throw', a.arg = e, n.next = i, o && (n.method = 'next', n.arg = t), !!o } for (let r = this.tryEntries.length - 1; r >= 0; --r) {
      const s = this.tryEntries[r]; var a = s.completion; if (s.tryLoc === 'root')
        return o('end'); if (s.tryLoc <= this.prev) {
        const l = i.call(s, 'catchLoc'); const c = i.call(s, 'finallyLoc'); if (l && c) {
          if (this.prev < s.catchLoc)
            return o(s.catchLoc, !0); if (this.prev < s.finallyLoc)
            return o(s.finallyLoc)
        }
        else if (l) {
          if (this.prev < s.catchLoc)
            return o(s.catchLoc, !0)
        }
        else {
          if (!c)
            throw new Error('try statement without catch or finally'); if (this.prev < s.finallyLoc)
            return o(s.finallyLoc)
        }
      }
    }
  }, abrupt(e, t) { for (let n = this.tryEntries.length - 1; n >= 0; --n) { const o = this.tryEntries[n]; if (o.tryLoc <= this.prev && i.call(o, 'finallyLoc') && this.prev < o.finallyLoc) { var r = o; break } }r && (e === 'break' || e === 'continue') && r.tryLoc <= t && t <= r.finallyLoc && (r = null); const s = r ? r.completion : {}; return s.type = e, s.arg = t, r ? (this.method = 'next', this.next = r.finallyLoc, v) : this.complete(s) }, complete(e, t) {
    if (e.type === 'throw')
      throw e.arg; return e.type === 'break' || e.type === 'continue' ? this.next = e.arg : e.type === 'return' ? (this.rval = this.arg = e.arg, this.method = 'return', this.next = 'end') : e.type === 'normal' && t && (this.next = t), v
  }, finish(e) {
    for (let t = this.tryEntries.length - 1; t >= 0; --t) {
      const n = this.tryEntries[t]; if (n.finallyLoc === e)
        return this.complete(n.completion, n.afterLoc), A(n), v
    }
  }, catch(e) { for (let t = this.tryEntries.length - 1; t >= 0; --t) { const n = this.tryEntries[t]; if (n.tryLoc === e) { const i = n.completion; if (i.type === 'throw') { var o = i.arg; A(n) } return o } } throw new Error('illegal catch attempt') }, delegateYield(e, n, i) { return this.delegate = { iterator: L(e), resultName: n, nextLoc: i }, this.method === 'next' && (this.arg = t), v } }, e
}({})); try { regeneratorRuntime = a }
catch (e) { typeof globalThis == 'object' ? globalThis.regeneratorRuntime = a : new Function('r', 'regeneratorRuntime = r')(a) } let l = {}; const c = {}; t(c), e(c, 'default', () => { return d }); var d = function (e) { const t = Array.from(e.querySelectorAll('[data-accordion-trigger]')); const n = e.querySelector('[data-accordion-icon]'); const i = e.querySelector('[data-accordion-body]'); t.length !== 0 && n !== null && i !== null && Array.from(t).forEach(e => e.addEventListener('click', () => { i.classList.toggle('is-open'), n.classList.toggle('is-open') })) }; const u = {}; t(u), e(u, 'default', () => { return p }); var p = function (e) { const t = document.querySelector('[data-hamburger-nav'); t !== null && e.addEventListener('click', () => { e.classList.toggle('is-active'), t.classList.toggle('is-active') }) }; const f = {}; t(f), e(f, 'default', () => { return h }); var h = function (e, t) {
  const n = t.appendClass; if (void 0 === n)
    return; let i = null; const o = new IntersectionObserver((t, o) => { t.forEach((t) => { t.isIntersecting && t.target === e && (e.classList.add(n), o.unobserve(e), i !== null && window.cancelAnimationFrame(i)) }) }); i = window.requestAnimationFrame(() => o.observe(e))
}; const v = {}; t(v), e(v, 'default', () => { return g }); new URL(s('2q3cG').resolve('hyShf'), import.meta.url).toString(); new URL(s('2q3cG').resolve('lDinw'), import.meta.url).toString(); new URL(s('2q3cG').resolve('dm17b'), import.meta.url).toString(); new URL(s('2q3cG').resolve('lJ6sC'), import.meta.url).toString(); var g = async function (e, t) {
  if (!(t == null ? void 0 : t.src.pc) || !t.src.sp)
    return; const n = window.matchMedia('(min-width: 769px)'); const i = () => {
    e.src = n.matches ? t.src.pc : t.src.sp, (async (e) => {
      const t = e.parentNode; if (t !== null) {
        try { await e.play() }
        catch (n) { const i = document.createElement('img'); t.removeChild(e), t.appendChild(i) }
      }
    })(e)
  }; n.addEventListener('change', () => { i() }), i()
}; const y = {}; t(y), e(y, 'default', () => { return m }); var m = function (e, t) { const n = e.children[0]; const { width: i } = n.getBoundingClientRect(); let o; const r = (o = t.direction) !== null && void 0 !== o ? o : 'left'; const s = () => { const e = document.body.clientWidth; return Math.ceil(e / i) }; const a = s(); const l = (e) => { const t = document.createDocumentFragment(); return [...new Array(e)].forEach(() => { t.appendChild(n.cloneNode(!0)) }), t }; e.appendChild(l(a)), window.addEventListener('resize', () => { const t = s(); if (a !== t && t > a) { const i = l(t); i.appendChild(n.cloneNode(!0)), e.replaceChildren(i) } }); let c = 0; const d = () => { r === 'left' ? c > -i ? c-- : c = 0 : c < i ? c++ : c = 0, e.style.transform = `translate3d(${c}px, 0, 0)`, window.requestAnimationFrame(() => d()) }; d() }; const w = {}; t(w), e(w, 'default', () => { return k }); const b = {}; t(b), e(b, 'createPlayer', () => { return x }), e(b, 'default', () => { return T }); function x(e, t, n) { new window.YT.Player(e, { videoId: t, playerVars: { rel: 0 }, events: { onReady: n } }) } var T = function () {
  return new Promise((e, t) => {
    const n = document.createElement('script'); const i = document.getElementsByTagName('script')[0]; if (n.src = 'https://www.youtube.com/iframe_api', i.parentNode === null)
      return t(); i.parentNode.insertBefore(n, i), window.onYouTubeIframeAPIReady = () => { e() }
  })
}; var k = function (e, t) {
  const n = document.querySelector('[data-modal-dialog]'); if (n === null)
    return; const i = n.querySelector('[data-modal-close]'); const o = n.querySelector('[data-modal-container'); if (o === null || i === null)
    return; const r = e.children[0]; const s = () => { const e = o.lastChild; e !== null && (o.removeChild(e), o.classList.remove('is-video'), i.removeEventListener('click', s), n.removeEventListener('close', s), n.removeEventListener('click', a), n.close()) }; const a = (e) => { e.target === n && n.close() }; e.addEventListener('click', () => {
    if (t.videoId) { const e = document.createElement('div'); const n = `youTubeModalPlay-${t.videoId}`; e.setAttribute('id', n), o.appendChild(e), o.classList.add('is-video'), x(n, t.videoId, (e) => { e.target.playVideo() }) }
    else { const e = r.cloneNode(!0); e.classList.remove('max-content'), o.appendChild(e) }i.addEventListener('click', s), n.addEventListener('close', s), n.addEventListener('click', a), n.showModal()
  })
}; const S = {}; t(S), e(S, 'default', () => { return C }); var C = function (e) { Array.from(e.children).forEach((e) => { let t; const n = ((t = e.getAttribute('href')) === null || void 0 === t ? void 0 : t.match(/.*?\.[^/.]+$/)) || null; n !== null && location.pathname === n[0] && e.classList.add('is-active') }) }; const $ = {}; t($), e($, 'default', () => { return A }); var A = function (e) { let t = null; window.addEventListener('scroll', () => { t === null && (t = setTimeout(() => { window.scrollY > 100 ? e.classList.add('is-visible') : e.classList.remove('is-visible'), t = null }, 300)) }) }; const E = {}; t(E), e(E, 'default', () => { return D }); let L; const j = s('60YFH'); L = function (e) {
  let t; let n = window.Slick || {}; t = 0, (n = function (n, i) { let o; const r = this; r.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: e(n), appendDots: e(n), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: '50px', cssEase: 'ease', customPaging(t, n) { return e('<button type="button" />').text(n + 1) }, dots: !1, dotsClass: 'slick-dots', draggable: !0, easing: 'linear', edgeFriction: 0.35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: 'ondemand', mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: 'window', responsive: null, rows: 1, rtl: !1, slide: '', slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, r.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = 'hidden', r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = 'visibilitychange', r.windowWidth = 0, r.windowTimer = null, o = e(n).data('slick') || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = 'mozHidden', r.visibilityChange = 'mozvisibilitychange') : void 0 !== document.webkitHidden && (r.hidden = 'webkitHidden', r.visibilityChange = 'webkitvisibilitychange'), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^\s*(<[\s\S]+>)[^>]*$/, r.registerBreakpoints(), r.init(!0) }).prototype.activateADA = function () { this.$slideTrack.find('.slick-active').attr({ 'aria-hidden': 'false' }).find('a, input, button, select').attr({ tabindex: '0' }) }, n.prototype.addSlide = n.prototype.slickAdd = function (t, n, i) {
    const o = this; if (typeof n == 'boolean')
      i = n, n = null; else if (n < 0 || n >= o.slideCount)
      return !1; o.unload(), typeof n == 'number' ? n === 0 && o.$slides.length === 0 ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((t, n) => { e(n).attr('data-slick-index', t) }), o.$slidesCache = o.$slides, o.reinit()
  }, n.prototype.animateHeight = function () { const e = this; if (e.options.slidesToShow === 1 && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) { const t = e.$slides.eq(e.currentSlide).outerHeight(!0); e.$list.animate({ height: t }, e.options.speed) } }, n.prototype.animateSlide = function (t, n) { const i = {}; const o = this; o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({ top: t }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({ animStart: o.currentLeft }).animate({ animStart: t }, { duration: o.options.speed, easing: o.options.easing, step(e) { e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = `translate(${e}px, 0px)`, o.$slideTrack.css(i)) : (i[o.animType] = `translate(0px,${e}px)`, o.$slideTrack.css(i)) }, complete() { n && n.call() } })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = `translate3d(${t}px, 0px, 0px)` : i[o.animType] = `translate3d(0px,${t}px, 0px)`, o.$slideTrack.css(i), n && setTimeout(() => { o.disableTransition(), n.call() }, o.options.speed)) }, n.prototype.getNavTarget = function () { let t = this.options.asNavFor; return t && t !== null && (t = e(t).not(this.$slider)), t }, n.prototype.asNavFor = function (t) { const n = this.getNavTarget(); n !== null && typeof n == 'object' && n.each(function () { const n = e(this).slick('getSlick'); n.unslicked || n.slideHandler(t, !0) }) }, n.prototype.applyTransition = function (e) { const t = this; const n = {}; !1 === t.options.fade ? n[t.transitionType] = `${t.transformType} ${t.options.speed}ms ${t.options.cssEase}` : n[t.transitionType] = `opacity ${t.options.speed}ms ${t.options.cssEase}`, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n) }, n.prototype.autoPlay = function () { const e = this; e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed)) }, n.prototype.autoPlayClear = function () { this.autoPlayTimer && clearInterval(this.autoPlayTimer) }, n.prototype.autoPlayIterator = function () { const e = this; let t = e.currentSlide + e.options.slidesToScroll; e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (e.direction === 1 && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : e.direction === 0 && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t)) }, n.prototype.buildArrows = function () { const t = this; !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass('slick-arrow'), t.$nextArrow = e(t.options.nextArrow).addClass('slick-arrow'), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'), t.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true')) : t.$prevArrow.add(t.$nextArrow).addClass('slick-hidden').attr({ 'aria-disabled': 'true', 'tabindex': '-1' })) }, n.prototype.buildDots = function () { let t; let n; const i = this; if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) { for (i.$slider.addClass('slick-dotted'), n = e('<ul />').addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1)n.append(e('<li />').append(i.options.customPaging.call(this, i, t))); i.$dots = n.appendTo(i.options.appendDots), i.$dots.find('li').first().addClass('slick-active') } }, n.prototype.buildOut = function () { const t = this; t.$slides = t.$slider.children(`${t.options.slide}:not(.slick-cloned)`).addClass('slick-slide'), t.slideCount = t.$slides.length, t.$slides.each((t, n) => { e(n).attr('data-slick-index', t).data('originalStyling', e(n).attr('style') || '') }), t.$slider.addClass('slick-slider'), t.$slideTrack = t.slideCount === 0 ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css('opacity', 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e('img[data-lazy]', t.$slider).not('[src]').addClass('slick-loading'), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses(typeof t.currentSlide == 'number' ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass('draggable') }, n.prototype.buildRows = function () { let e; let t; let n; let i; let o; let r; let s; const a = this; if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) { for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) { const l = document.createElement('div'); for (t = 0; t < a.options.rows; t++) { const c = document.createElement('div'); for (n = 0; n < a.options.slidesPerRow; n++) { const d = e * s + (t * a.options.slidesPerRow + n); r.get(d) && c.appendChild(r.get(d)) }l.appendChild(c) }i.appendChild(l) }a.$slider.empty().append(i), a.$slider.children().children().children().css({ width: `${100 / a.options.slidesPerRow}%`, display: 'inline-block' }) } }, n.prototype.checkResponsive = function (t, n) { let i; let o; let r; const s = this; let a = !1; const l = s.$slider.width(); const c = window.innerWidth || e(window).width(); if (s.respondTo === 'window' ? r = c : s.respondTo === 'slider' ? r = l : s.respondTo === 'min' && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && s.options.responsive !== null) { for (i in o = null, s.breakpoints)s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i])); o !== null ? s.activeBreakpoint !== null ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, s.breakpointSettings[o] === 'unslick' ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, s.breakpointSettings[o] === 'unslick' ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : s.activeBreakpoint !== null && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger('breakpoint', [s, a]) } }, n.prototype.changeSlide = function (t, n) { let i; let o; const r = this; let s = e(t.currentTarget); switch (s.is('a') && t.preventDefault(), s.is('li') || (s = s.closest('li')), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) { case 'previous':o = i === 0 ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n); break; case 'next':o = i === 0 ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n); break; case 'index':var a = t.data.index === 0 ? 0 : t.data.index || s.index() * r.options.slidesToScroll; r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger('focus'); break; default: } }, n.prototype.checkNavigable = function (e) {
    let t, n; if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) {
      e = t[t.length - 1]
    }
    else {
      for (const i in t) { if (e < t[i]) { e = n; break }n = t[i] }
    } return e
  }, n.prototype.cleanUpEvents = function () { const t = this; t.options.dots && t.$dots !== null && (e('li', t.$dots).off('click.slick', t.changeSlide).off('mouseenter.slick', e.proxy(t.interrupt, t, !0)).off('mouseleave.slick', e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off('keydown.slick', t.keyHandler)), t.$slider.off('focus.slick blur.slick'), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off('click.slick', t.changeSlide), t.$nextArrow && t.$nextArrow.off('click.slick', t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off('keydown.slick', t.keyHandler), t.$nextArrow && t.$nextArrow.off('keydown.slick', t.keyHandler))), t.$list.off('touchstart.slick mousedown.slick', t.swipeHandler), t.$list.off('touchmove.slick mousemove.slick', t.swipeHandler), t.$list.off('touchend.slick mouseup.slick', t.swipeHandler), t.$list.off('touchcancel.slick mouseleave.slick', t.swipeHandler), t.$list.off('click.slick', t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off('keydown.slick', t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off('click.slick', t.selectHandler), e(window).off(`orientationchange.slick.slick-${t.instanceUid}`, t.orientationChange), e(window).off(`resize.slick.slick-${t.instanceUid}`, t.resize), e('[draggable!=true]', t.$slideTrack).off('dragstart', t.preventDefault), e(window).off(`load.slick.slick-${t.instanceUid}`, t.setPosition) }, n.prototype.cleanUpSlideEvents = function () { const t = this; t.$list.off('mouseenter.slick', e.proxy(t.interrupt, t, !0)), t.$list.off('mouseleave.slick', e.proxy(t.interrupt, t, !1)) }, n.prototype.cleanUpRows = function () { let e; const t = this; t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr('style'), t.$slider.empty().append(e)) }, n.prototype.clickHandler = function (e) { !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()) }, n.prototype.destroy = function (t) { const n = this; n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e('.slick-cloned', n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', ''), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', ''), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () { e(this).attr('style', e(this).data('originalStyling')) }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass('slick-slider'), n.$slider.removeClass('slick-initialized'), n.$slider.removeClass('slick-dotted'), n.unslicked = !0, t || n.$slider.trigger('destroy', [n]) }, n.prototype.disableTransition = function (e) { const t = this; const n = {}; n[t.transitionType] = '', !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n) }, n.prototype.fadeSlide = function (e, t) { const n = this; !1 === n.cssTransitions ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }), t && setTimeout(() => { n.disableTransition(e), t.call() }, n.options.speed)) }, n.prototype.fadeSlideOut = function (e) { const t = this; !1 === t.cssTransitions ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 })) }, n.prototype.filterSlides = n.prototype.slickFilter = function (e) { const t = this; e !== null && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit()) }, n.prototype.focusHandler = function () { const t = this; t.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (n) { n.stopImmediatePropagation(); const i = e(this); setTimeout(() => { t.options.pauseOnFocus && (t.focussed = i.is(':focus'), t.autoPlay()) }, 0) }) }, n.prototype.getCurrent = n.prototype.slickCurrentSlide = function () { return this.currentSlide }, n.prototype.getDotCount = function () {
    const e = this; let t = 0; let n = 0; let i = 0; if (!0 === e.options.infinite) {
      if (e.slideCount <= e.options.slidesToShow) {
        ++i
      }
      else {
        for (;t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
      }
    }
    else if (!0 === e.options.centerMode) {
      i = e.slideCount
    }
    else if (e.options.asNavFor) {
      for (;t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
    }
    else {
      i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll)
    } return i - 1
  }, n.prototype.getLeft = function (e) { let t; let n; let i; let o; const r = this; let s = 0; return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (r.options.slidesToShow === 2 ? o = -1.5 : r.options.slidesToShow === 1 && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children('.slick-slide').eq(e) : r.$slideTrack.children('.slick-slide').eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children('.slick-slide').eq(e) : r.$slideTrack.children('.slick-slide').eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t }, n.prototype.getOption = n.prototype.slickGetOption = function (e) { return this.options[e] }, n.prototype.getNavigableIndexes = function () { let e; const t = this; let n = 0; let i = 0; const o = []; for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;)o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; return o }, n.prototype.getSlick = function () { return this }, n.prototype.getSlideCount = function () {
    let t; let n; const i = this; return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide
      ? (i.$slideTrack.find('.slick-slide').each((o, r) => {
          if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft)
            return t = r, !1
        }), Math.abs(e(t).attr('data-slick-index') - i.currentSlide) || 1)
      : i.options.slidesToScroll
  }, n.prototype.goTo = n.prototype.slickGoTo = function (e, t) { this.changeSlide({ data: { message: 'index', index: Number.parseInt(e) } }, t) }, n.prototype.init = function (t) { const n = this; e(n.$slider).hasClass('slick-initialized') || (e(n.$slider).addClass('slick-initialized'), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger('init', [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay()) }, n.prototype.initADA = function () { const t = this; const n = Math.ceil(t.slideCount / t.options.slidesToShow); const i = t.getNavigableIndexes().filter((e) => { return e >= 0 && e < t.slideCount }); t.$slides.add(t.$slideTrack.find('.slick-cloned')).attr({ 'aria-hidden': 'true', 'tabindex': '-1' }).find('a, input, button, select').attr({ tabindex: '-1' }), t.$dots !== null && (t.$slides.not(t.$slideTrack.find('.slick-cloned')).each(function (n) { const o = i.indexOf(n); if (e(this).attr({ role: 'tabpanel', id: `slick-slide${t.instanceUid}${n}`, tabindex: -1 }), o !== -1) { const r = `slick-slide-control${t.instanceUid}${o}`; e(`#${r}`).length && e(this).attr({ 'aria-describedby': r }) } }), t.$dots.attr('role', 'tablist').find('li').each(function (o) { const r = i[o]; e(this).attr({ role: 'presentation' }), e(this).find('button').first().attr({ 'role': 'tab', 'id': `slick-slide-control${t.instanceUid}${o}`, 'aria-controls': `slick-slide${t.instanceUid}${r}`, 'aria-label': `${o + 1} of ${n}`, 'aria-selected': null, 'tabindex': '-1' }) }).eq(t.currentSlide).find('button').attr({ 'aria-selected': 'true', 'tabindex': '0' }).end()); for (let o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++)t.options.focusOnChange ? t.$slides.eq(o).attr({ tabindex: '0' }) : t.$slides.eq(o).removeAttr('tabindex'); t.activateADA() }, n.prototype.initArrowEvents = function () { const e = this; !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, e.changeSlide), e.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on('keydown.slick', e.keyHandler), e.$nextArrow.on('keydown.slick', e.keyHandler))) }, n.prototype.initDotEvents = function () { const t = this; !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e('li', t.$dots).on('click.slick', { message: 'index' }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on('keydown.slick', t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e('li', t.$dots).on('mouseenter.slick', e.proxy(t.interrupt, t, !0)).on('mouseleave.slick', e.proxy(t.interrupt, t, !1)) }, n.prototype.initSlideEvents = function () { const t = this; t.options.pauseOnHover && (t.$list.on('mouseenter.slick', e.proxy(t.interrupt, t, !0)), t.$list.on('mouseleave.slick', e.proxy(t.interrupt, t, !1))) }, n.prototype.initializeEvents = function () { const t = this; t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, t.swipeHandler), t.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, t.swipeHandler), t.$list.on('touchend.slick mouseup.slick', { action: 'end' }, t.swipeHandler), t.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, t.swipeHandler), t.$list.on('click.slick', t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on('keydown.slick', t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on('click.slick', t.selectHandler), e(window).on(`orientationchange.slick.slick-${t.instanceUid}`, e.proxy(t.orientationChange, t)), e(window).on(`resize.slick.slick-${t.instanceUid}`, e.proxy(t.resize, t)), e('[draggable!=true]', t.$slideTrack).on('dragstart', t.preventDefault), e(window).on(`load.slick.slick-${t.instanceUid}`, t.setPosition), e(t.setPosition) }, n.prototype.initUI = function () { const e = this; !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show() }, n.prototype.keyHandler = function (e) { const t = this; e.target.tagName.match('TEXTAREA|INPUT|SELECT') || (e.keyCode === 37 && !0 === t.options.accessibility ? t.changeSlide({ data: { message: !0 === t.options.rtl ? 'next' : 'previous' } }) : e.keyCode === 39 && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? 'previous' : 'next' } })) }, n.prototype.lazyLoad = function () {
    let t; let n; let i; const o = this; function r(t) { e('img[data-lazy]', t).each(function () { const t = e(this); const n = e(this).attr('data-lazy'); const i = e(this).attr('data-srcset'); const r = e(this).attr('data-sizes') || o.$slider.attr('data-sizes'); const s = document.createElement('img'); s.onload = function () { t.animate({ opacity: 0 }, 100, () => { i && (t.attr('srcset', i), r && t.attr('sizes', r)), t.attr('src', n).animate({ opacity: 1 }, 200, () => { t.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading') }), o.$slider.trigger('lazyLoaded', [o, t, n]) }) }, s.onerror = function () { t.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'), o.$slider.trigger('lazyLoadError', [o, t, n]) }, s.src = n }) } if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, i <= o.slideCount && i++)), t = o.$slider.find('.slick-slide').slice(n, i), o.options.lazyLoad === 'anticipated') {
      for (let s = n - 1, a = i, l = o.$slider.find('.slick-slide'), c = 0; c < o.options.slidesToScroll; c++)s < 0 && (s = o.slideCount - 1), t = (t = t.add(l.eq(s))).add(l.eq(a)), s--, a++
    } r(t), o.slideCount <= o.options.slidesToShow ? r(o.$slider.find('.slick-slide')) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find('.slick-cloned').slice(0, o.options.slidesToShow)) : o.currentSlide === 0 && r(o.$slider.find('.slick-cloned').slice(-1 * o.options.slidesToShow))
  }, n.prototype.loadSlider = function () { const e = this; e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass('slick-loading'), e.initUI(), e.options.lazyLoad === 'progressive' && e.progressiveLazyLoad() }, n.prototype.next = n.prototype.slickNext = function () { this.changeSlide({ data: { message: 'next' } }) }, n.prototype.orientationChange = function () { this.checkResponsive(), this.setPosition() }, n.prototype.pause = n.prototype.slickPause = function () { this.autoPlayClear(), this.paused = !0 }, n.prototype.play = n.prototype.slickPlay = function () { const e = this; e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1 }, n.prototype.postSlide = function (t) { const n = this; n.unslicked || (n.$slider.trigger('afterChange', [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr('tabindex', 0).focus())) }, n.prototype.prev = n.prototype.slickPrev = function () { this.changeSlide({ data: { message: 'previous' } }) }, n.prototype.preventDefault = function (e) { e.preventDefault() }, n.prototype.progressiveLazyLoad = function (t) { t = t || 1; let n; let i; let o; let r; let s; const a = this; const l = e('img[data-lazy]', a.$slider); l.length ? (n = l.first(), i = n.attr('data-lazy'), o = n.attr('data-srcset'), r = n.attr('data-sizes') || a.$slider.attr('data-sizes'), (s = document.createElement('img')).onload = function () { o && (n.attr('srcset', o), r && n.attr('sizes', r)), n.attr('src', i).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading'), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger('lazyLoaded', [a, n, i]), a.progressiveLazyLoad() }, s.onerror = function () { t < 3 ? setTimeout(() => { a.progressiveLazyLoad(t + 1) }, 500) : (n.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'), a.$slider.trigger('lazyLoadError', [a, n, i]), a.progressiveLazyLoad()) }, s.src = i) : a.$slider.trigger('allImagesLoaded', [a]) }, n.prototype.refresh = function (t) { let n; let i; const o = this; i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, { currentSlide: n }), o.init(), t || o.changeSlide({ data: { message: 'index', index: n } }, !1) }, n.prototype.registerBreakpoints = function () {
    let t; let n; let i; const o = this; const r = o.options.responsive || null; if (e.type(r) === 'array' && r.length) {
      for (t in o.respondTo = o.options.respondTo || 'window', r) {
        if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) { for (n = r[t].breakpoint; i >= 0;)o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--; o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings }
      }o.breakpoints.sort((e, t) => { return o.options.mobileFirst ? e - t : t - e })
    }
  }, n.prototype.reinit = function () { const t = this; t.$slides = t.$slideTrack.children(t.options.slide).addClass('slick-slide'), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && t.currentSlide !== 0 && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on('click.slick', t.selectHandler), t.setSlideClasses(typeof t.currentSlide == 'number' ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger('reInit', [t]) }, n.prototype.resize = function () { const t = this; e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(() => { t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition() }, 50)) }, n.prototype.removeSlide = n.prototype.slickRemove = function (e, t, n) {
    const i = this; if (e = typeof e == 'boolean' ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
      return !1; i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
  }, n.prototype.setCSS = function (e) { let t; let n; const i = this; let o = {}; !0 === i.options.rtl && (e = -e), t = i.positionProp == 'left' ? `${Math.ceil(e)}px` : '0px', n = i.positionProp == 'top' ? `${Math.ceil(e)}px` : '0px', o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = `translate(${t}, ${n})`, i.$slideTrack.css(o)) : (o[i.animType] = `translate3d(${t}, ${n}, 0px)`, i.$slideTrack.css(o))) }, n.prototype.setDimensions = function () { const e = this; !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({ padding: `0px ${e.options.centerPadding}` }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: `${e.options.centerPadding} 0px` })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children('.slick-slide').length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children('.slick-slide').length))); const t = e.$slides.first().outerWidth(!0) - e.$slides.first().width(); !1 === e.options.variableWidth && e.$slideTrack.children('.slick-slide').width(e.slideWidth - t) }, n.prototype.setFade = function () { let t; const n = this; n.$slides.each((i, o) => { t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({ position: 'relative', right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) : e(o).css({ position: 'relative', left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) }), n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 }) }, n.prototype.setHeight = function () { const e = this; if (e.options.slidesToShow === 1 && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) { const t = e.$slides.eq(e.currentSlide).outerHeight(!0); e.$list.css('height', t) } }, n.prototype.setOption = n.prototype.slickSetOption = function () {
    let t; let n; let i; let o; let r; const s = this; let a = !1; if (e.type(arguments[0]) === 'object' ? (i = arguments[0], a = arguments[1], r = 'multiple') : e.type(arguments[0]) === 'string' && (i = arguments[0], o = arguments[1], a = arguments[2], arguments[0] === 'responsive' && e.type(arguments[1]) === 'array' ? r = 'responsive' : void 0 !== arguments[1] && (r = 'single')), r === 'single') {
      s.options[i] = o
    }
    else if (r === 'multiple') {
      e.each(i, (e, t) => { s.options[e] = t })
    }
    else if (r === 'responsive') {
      for (n in o) {
        if (e.type(s.options.responsive) !== 'array') {
          s.options.responsive = [o[n]]
        }
        else { for (t = s.options.responsive.length - 1; t >= 0;)s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--; s.options.responsive.push(o[n]) }
      }
    }a && (s.unload(), s.reinit())
  }, n.prototype.setPosition = function () { const e = this; e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger('setPosition', [e]) }, n.prototype.setProps = function () { const e = this; const t = document.body.style; e.positionProp = !0 === e.options.vertical ? 'top' : 'left', e.positionProp === 'top' ? e.$slider.addClass('slick-vertical') : e.$slider.removeClass('slick-vertical'), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && (typeof e.options.zIndex == 'number' ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = 'OTransform', e.transformType = '-o-transform', e.transitionType = 'OTransition', void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = 'MozTransform', e.transformType = '-moz-transform', e.transitionType = 'MozTransition', void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = 'webkitTransform', e.transformType = '-webkit-transform', e.transitionType = 'webkitTransition', void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = 'msTransform', e.transformType = '-ms-transform', e.transitionType = 'msTransition', void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = 'transform', e.transformType = 'transform', e.transitionType = 'transition'), e.transformsEnabled = e.options.useTransform && e.animType !== null && !1 !== e.animType }, n.prototype.setSlideClasses = function (e) {
    let t; let n; let i; let o; const r = this; if (n = r.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true'), r.$slides.eq(e).addClass('slick-current'), !0 === r.options.centerMode) { const s = r.options.slidesToShow % 2 == 0 ? 1 : 0; t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass('slick-active').attr('aria-hidden', 'false') : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass('slick-active').attr('aria-hidden', 'false')), e === 0 ? n.eq(n.length - 1 - r.options.slidesToShow).addClass('slick-center') : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass('slick-center')), r.$slides.eq(e).addClass('slick-center') }
    else {
      e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false') : n.length <= r.options.slidesToShow ? n.addClass('slick-active').attr('aria-hidden', 'false') : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass('slick-active').attr('aria-hidden', 'false') : n.slice(i, i + r.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false'))
    }r.options.lazyLoad !== 'ondemand' && r.options.lazyLoad !== 'anticipated' || r.lazyLoad()
  }, n.prototype.setupInfinite = function () { let t; let n; let i; const o = this; if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) { for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1)n = t - 1, e(o.$slides[n]).clone(!0).attr('id', '').attr('data-slick-index', n - o.slideCount).prependTo(o.$slideTrack).addClass('slick-cloned'); for (t = 0; t < i + o.slideCount; t += 1)n = t, e(o.$slides[n]).clone(!0).attr('id', '').attr('data-slick-index', n + o.slideCount).appendTo(o.$slideTrack).addClass('slick-cloned'); o.$slideTrack.find('.slick-cloned').find('[id]').each(function () { e(this).attr('id', '') }) } }, n.prototype.interrupt = function (e) { e || this.autoPlay(), this.interrupted = e }, n.prototype.selectHandler = function (t) { const n = this; const i = e(t.target).is('.slick-slide') ? e(t.target) : e(t.target).parents('.slick-slide'); let o = Number.parseInt(i.attr('data-slick-index')); o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o) }, n.prototype.slideHandler = function (e, t, n) {
    let i; let o; let r; let s; let a; let l; const c = this; if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) {
      if (!1 === t && c.asNavFor(e), i = e, a = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = c.swipeLeft === null ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) {
        !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, () => { c.postSlide(i) }) : c.postSlide(i))
      }
      else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) {
        !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, () => { c.postSlide(i) }) : c.postSlide(i))
      }
      else {
        if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger('beforeChange', [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick('getSlick')).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade)
          return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, () => { c.postSlide(o) })) : c.postSlide(o), void c.animateHeight(); !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, () => { c.postSlide(o) }) : c.postSlide(o)
      }
    }
  }, n.prototype.startLoad = function () { const e = this; !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass('slick-loading') }, n.prototype.swipeDirection = function () { let e; let t; let n; let i; const o = this; return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? 'left' : 'right' : i >= 135 && i <= 225 ? !1 === o.options.rtl ? 'right' : 'left' : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? 'down' : 'up' : 'vertical' }, n.prototype.swipeEnd = function (e) {
    let t; let n; const i = this; if (i.dragging = !1, i.swiping = !1, i.scrolling)
      return i.scrolling = !1, !1; if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX)
      return !1; if (!0 === i.touchObject.edgeHit && i.$slider.trigger('edge', [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) { switch (n = i.swipeDirection()) { case 'left':case 'down':t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0; break; case 'right':case 'up':t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1 }n != 'vertical' && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger('swipe', [i, n])) }
    else {
      i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }
  }, n.prototype.swipeHandler = function (e) {
    const t = this; if (!(!1 === t.options.swipe || 'ontouchend' in document && !1 === t.options.swipe || !1 === t.options.draggable && e.type.includes('mouse')))
      switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) { case 'start':t.swipeStart(e); break; case 'move':t.swipeMove(e); break; case 'end':t.swipeEnd(e) }
  }, n.prototype.swipeMove = function (e) { let t; let n; let i; let o; let r; let s; const a = this; return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && r.length !== 1) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt((a.touchObject.curX - a.touchObject.startX) ** 2)), s = Math.round(Math.sqrt((a.touchObject.curY - a.touchObject.startY) ** 2)), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (a.currentSlide === 0 && n === 'right' || a.currentSlide >= a.getDotCount() && n === 'left') && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft)))) }, n.prototype.swipeStart = function (e) {
    let t; const n = this; if (n.interrupted = !0, n.touchObject.fingerCount !== 1 || n.slideCount <= n.options.slidesToShow)
      return n.touchObject = {}, !1; void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
  }, n.prototype.unfilterSlides = n.prototype.slickUnfilter = function () { const e = this; e.$slidesCache !== null && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit()) }, n.prototype.unload = function () { const t = this; e('.slick-cloned', t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '') }, n.prototype.unslick = function (e) { const t = this; t.$slider.trigger('unslick', [t, e]), t.destroy() }, n.prototype.updateArrows = function () { const e = this; Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'), e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'), e.currentSlide === 0 ? (e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))) }, n.prototype.updateDots = function () { const e = this; e.$dots !== null && (e.$dots.find('li').removeClass('slick-active').end(), e.$dots.find('li').eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass('slick-active')) }, n.prototype.visibility = function () { const e = this; e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1) }, e.fn.slick = function () {
    let e; let t; const i = this; const o = arguments[0]; const r = Array.prototype.slice.call(arguments, 1); const s = i.length; for (e = 0; e < s; e++) {
      if (typeof o == 'object' || void 0 === o ? i[e].slick = new n(i[e], o) : t = i[e].slick[o].apply(i[e].slick, r), void 0 !== t)
        return t
    } return i
  }
}, typeof define == 'function' && define.amd ? define(['jquery'], L) : L(s('60YFH')); var D = function (e) { n(j)(e).slick({ slidesToShow: 2, slidesToScroll: 1, autoplay: !0, responsive: [{ breakpoint: 1025, settings: { slidesToShow: 1, variableWidth: !0, centerPadding: '8px', centerMode: !0 } }], nextArrow: '<button class="sliderPrev"><svg viewBox="0 0 24 24" class="sliderArrowIcon"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><path d="M 15.7087 11.2925 C 15.7077 11.2915 15.7057 11.2915 15.7047 11.2905 L 9.7067 5.2925 C 9.3167 4.9015 8.6837 4.9015 8.2927 5.2925 C 7.9017 5.6835 7.9017 6.3165 8.2927 6.7075 L 13.5867 12.0005 L 8.2927 17.2945 C 7.9017 17.6855 7.9017 18.3175 8.2927 18.7085 C 8.6837 19.0995 9.3167 19.0995 9.7067 18.7085 L 15.7047 12.7115 C 15.7057 12.7095 15.7077 12.7095 15.7087 12.7085 C 15.9037 12.5135 16.0017 12.2565 16.0017 12.0005 C 16.0017 11.7445 15.9037 11.4875 15.7087 11.2925" fill="currentColor" /></g></svg></button>', prevArrow: '<button class="sliderNext"><svg viewBox="0 0 24 24" class="sliderArrowIcon"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><path d="M 10.4146 12.0005 L 15.7086 6.7075 C 16.0996 6.3165 16.0996 5.6835 15.7086 5.2925 C 15.3176 4.9015 14.6846 4.9015 14.2946 5.2925 L 8.2966 11.2905 C 8.2956 11.2915 8.2936 11.2915 8.2926 11.2925 C 8.0976 11.4875 7.9996 11.7445 7.9996 12.0005 C 7.9996 12.2565 8.0976 12.5135 8.2926 12.7085 C 8.2936 12.7095 8.2956 12.7095 8.2966 12.7115 L 14.2946 18.7085 C 14.6846 19.0995 15.3176 19.0995 15.7086 18.7085 C 16.0996 18.3175 16.0996 17.6855 15.7086 17.2945 L 10.4146 12.0005 Z" fill="currentColor" /></g></svg></button>' }) }; const N = {}; t(N), e(N, 'default', () => { return O }); var O = function (e, t) {
  const n = t.targetId; const i = t.destination; const o = document.querySelector(`[data-smooth-scroll-target-id="${n}"]`); if (o === null && void 0 === i)
    return; e.addEventListener('click', () => { window.scrollTo({ top: o === null ? Number(t.destination) : o.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' }) })
}; const H = {}; t(H), e(H, 'default', () => { return q }); var q = async function (e, t) {
  if (void 0 === t.videoId)
    return; const n = e.nextElementSibling; if (n === null)
    return; const i = `youTubeInlinePlay-${t.videoId}`; n.setAttribute('id', i), x(i, t.videoId, (t) => { e.addEventListener('click', () => { e.classList.add('is-hidden'), t.target.playVideo() }) })
}; const P = {}; t(P), e(P, 'default', () => { return M }); var M = async function (e, t) {
  if (void 0 === t.videoId)
    return; const n = t.videoId; const i = document.querySelector('[data-youtube-modal'); if (i === null)
    return; const o = i.querySelector('[data-youtube-modal-iframe-container]'); const r = i.querySelectorAll('[data-youtube-modal-close'); if (o === null || r.length === 0)
    return; const s = 'youTubeModal'; o.setAttribute('id', s), e.addEventListener('click', () => { i.classList.add('is-active'), x(s, n, (e) => { e.target.playVideo(), r.forEach(t => t.addEventListener('click', () => { i.classList.remove('is-active'), e.target.destroy() })) }) })
}; l = { accordion: c, hamburger: u, inview: f, kv: v, marquee: y, modal: w, nav: S, pageTop: $, slider: E, smoothScroll: N, youTubeInit: b, youTubeInlinePlay: H, youTubeModal: P }, (async () => { await l.youTubeInit.default(), document.querySelectorAll('[data-slider]').forEach((e) => { l.slider.default(e) }), Array.from(document.querySelectorAll('[data-module]')).forEach((e) => { let t; const n = (t = e.getAttribute('data-module')) === null || void 0 === t ? void 0 : t.split(/\s+/); const i = e.getAttribute('data-options') || null; void 0 !== n && n.forEach((t) => { const o = i ? n.length > 1 ? JSON.parse(i)[t] : JSON.parse(i) : {}; l[t].default(e, o) }) }) })()
