(function(e, t) {
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error('jQuery requires a window with a document');
        return t(e)
    } : t(e)
})('undefined' != typeof window ? window : this, function(e, i) {
    var m = [],
        s = e.document,
        f = m.slice,
        je = m.concat,
        V = m.push,
        L = m.indexOf,
        F = {},
        Mt = F.toString,
        A = F.hasOwnProperty,
        r = {},
        Ae = '2.2.3',
        t = function(e, i) {
            return new t.fn.init(e, i)
        },
        Et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Ot = /^-ms-/,
        zt = /-([\da-z])/gi,
        Lt = function(e, t) {
            return t.toUpperCase()
        };
    t.fn = t.prototype = {
        jquery: Ae,
        constructor: t,
        selector: '',
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : f.call(this)
        },
        pushStack: function(e) {
            var i = t.merge(this.constructor(), e);
            return i.prevObject = this, i.context = this.context, i
        },
        each: function(e) {
            return t.each(this, e)
        },
        map: function(e) {
            return this.pushStack(t.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var i = this.length,
                t = +e + (0 > e ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: V,
        sort: m.sort,
        splice: m.splice
    }, t.extend = t.fn.extend = function() {
        var o, r, n, i, a, l, e = arguments[0] || {},
            s = 1,
            u = arguments.length,
            c = !1;
        for ('boolean' == typeof e && (c = e, e = arguments[s] || {}, s++), 'object' == typeof e || t.isFunction(e) || (e = {}), s === u && (e = this, s--); u > s; s++)
            if (null != (o = arguments[s]))
                for (r in o) n = e[r], i = o[r], e !== i && (c && i && (t.isPlainObject(i) || (a = t.isArray(i))) ? (a ? (a = !1, l = n && t.isArray(n) ? n : []) : l = n && t.isPlainObject(n) ? n : {}, e[r] = t.extend(c, l, i)) : void 0 !== i && (e[r] = i));
        return e
    }, t.extend({
        expando: 'jQuery' + (Ae + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return 'function' === t.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var i = e && e.toString();
            return !t.isArray(e) && i - parseFloat(i) + 1 >= 0
        },
        isPlainObject: function(e) {
            var i;
            if ('object' !== t.type(e) || e.nodeType || t.isWindow(e)) return !1;
            if (e.constructor && !A.call(e, 'constructor') && !A.call(e.constructor.prototype || {}, 'isPrototypeOf')) return !1;
            for (i in e);
            return void 0 === i || A.call(e, i)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? F[Mt.call(e)] || 'object' : typeof e
        },
        globalEval: function(e) {
            var i, n = eval;
            e = t.trim(e), e && (1 === e.indexOf('use strict') ? (i = s.createElement('script'), i.text = e, s.head.appendChild(i).parentNode.removeChild(i)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(Ot, 'ms-').replace(zt, Lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, i = 0;
            if (G(e)) {
                for (n = e.length; n > i; i++)
                    if (t.call(e[i], i, e[i]) === !1) break
            } else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? '' : (e + '').replace(Et, '')
        },
        makeArray: function(e, i) {
            var n = i || [];
            return null != e && (G(Object(e)) ? t.merge(n, 'string' == typeof e ? [e] : e) : V.call(n, e)), n
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : L.call(t, e, i)
        },
        merge: function(e, t) {
            for (var s = +t.length, i = 0, n = e.length; s > i; i++) e[n++] = t[i];
            return e.length = n, e
        },
        grep: function(e, t, i) {
            for (var s, r = [], n = 0, o = e.length, a = !i; o > n; n++) s = !t(e[n], n), s !== a && r.push(e[n]);
            return r
        },
        map: function(e, t, i) {
            var o, s, n = 0,
                r = [];
            if (G(e))
                for (o = e.length; o > n; n++) s = t(e[n], n, i), null != s && r.push(s);
            else
                for (n in e) s = t(e[n], n, i), null != s && r.push(s);
            return je.apply([], r)
        },
        guid: 1,
        proxy: function(e, i) {
            var s, r, n;
            return 'string' == typeof i && (s = e[i], i = e, e = s), t.isFunction(e) ? (r = f.call(arguments, 2), n = function() {
                return e.apply(i || this, r.concat(f.call(arguments)))
            }, n.guid = e.guid = e.guid || t.guid++, n) : void 0
        },
        now: Date.now,
        support: r
    }), 'function' == typeof Symbol && (t.fn[Symbol.iterator] = m[Symbol.iterator]), t.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function(e, t) {
        F['[object ' + t + ']'] = t.toLowerCase()
    });

    function G(e) {
        var i = !!e && 'length' in e && e.length,
            n = t.type(e);
        return 'function' === n || t.isWindow(e) ? !1 : 'array' === n || 0 === i || 'number' == typeof i && i > 0 && i - 1 in e
    };
    var w = function(e) {
        var D, o, t, A, G, I, H, Z, N, v, S, y, n, c, u, l, w, M, P, a = 'sizzle' + 1 * new Date,
            h = e.document,
            p = 0,
            ce = 0,
            ee = Y(),
            te = Y(),
            E = Y(),
            W = function(e, t) {
                return e === t && (S = !0), 0
            },
            ie = 1 << 31,
            ue = {}.hasOwnProperty,
            x = [],
            he = x.pop,
            de = x.push,
            b = x.push,
            ne = x.slice,
            k = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            s = '[\\x20\\t\\r\\n\\f]',
            C = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
            se = '\\[' + s + '*(' + C + ')(?:' + s + '*([*^$|!~]?=)' + s + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + C + '))|)' + s + '*\\]',
            B = ':(' + C + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + se + ')*)|.*)\\)|)',
            fe = new RegExp(s + '+', 'g'),
            O = new RegExp('^' + s + '+|((?:^|[^\\\\])(?:\\\\.)*)' + s + '+$', 'g'),
            pe = new RegExp('^' + s + '*,' + s + '*'),
            me = new RegExp('^' + s + '*([>+~]|' + s + ')' + s + '*'),
            ge = new RegExp('=' + s + '*([^\\]\'"]*?)' + s + '*\\]', 'g'),
            ve = new RegExp(B),
            re = new RegExp('^' + C + '$'),
            z = {
                ID: new RegExp('^#(' + C + ')'),
                CLASS: new RegExp('^\\.(' + C + ')'),
                TAG: new RegExp('^(' + C + '|[*])'),
                ATTR: new RegExp('^' + se),
                PSEUDO: new RegExp('^' + B),
                CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + s + '*(even|odd|(([+-]|)(\\d*)n|)' + s + '*(?:([+-]|)' + s + '*(\\d+)|))' + s + '*\\)|)', 'i'),
                bool: new RegExp('^(?:' + R + ')$', 'i'),
                needsContext: new RegExp('^' + s + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + s + '*((?:-\\d)?\\d*)' + s + '*\\)|)(?=[^-]|$)', 'i')
            },
            ye = /^(?:input|select|textarea|button)$/i,
            be = /^h\d$/i,
            j = /^[^{]+\{\s*\[native \w/,
            we = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            q = /[+~]/,
            xe = /'|\\/g,
            m = new RegExp('\\\\([\\da-f]{1,6}' + s + '?|(' + s + ')|.)', 'ig'),
            g = function(e, t, i) {
                var n = '0x' + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            oe = function() {
                y()
            };
        try {
            b.apply(x = ne.call(h.childNodes), h.childNodes), x[h.childNodes.length].nodeType
        } catch (i) {
            b = {
                apply: x.length ? function(e, t) {
                    de.apply(e, ne.call(t))
                } : function(e, t) {
                    var i = e.length,
                        n = 0;
                    while (e[i++] = t[n++]);
                    e.length = i - 1
                }
            }
        };

        function r(e, t, i, s) {
            var d, v, f, c, k, w, m, x, g = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (i = i || [], 'string' != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return i;
            if (!s && ((t ? t.ownerDocument || t : h) !== n && y(t), t = t || n, u)) {
                if (11 !== p && (w = we.exec(e)))
                    if (d = w[1]) {
                        if (9 === p) {
                            if (!(f = t.getElementById(d))) return i;
                            if (f.id === d) return i.push(f), i
                        } else if (g && (f = g.getElementById(d)) && P(t, f) && f.id === d) return i.push(f), i
                    } else {
                        if (w[2]) return b.apply(i, t.getElementsByTagName(e)), i;
                        if ((d = w[3]) && o.getElementsByClassName && t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(d)), i
                    };
                if (o.qsa && !E[e + ' '] && (!l || !l.test(e))) {
                    if (1 !== p) g = t, x = e;
                    else if ('object' !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute('id')) ? c = c.replace(xe, '\\$&'): t.setAttribute('id', c = a), m = I(e), v = m.length, k = re.test(c) ? '#' + c : '[id=\'' + c + '\']';
                        while (v--) m[v] = k + ' ' + L(m[v]);
                        x = m.join(','), g = q.test(e) && X(t.parentNode) || t
                    };
                    if (x) try {
                        return b.apply(i, g.querySelectorAll(x)), i
                    } catch (r) {} finally {
                        c === a && t.removeAttribute('id')
                    }
                }
            };
            return Z(e.replace(O, '$1'), t, i, s)
        };

        function Y() {
            var i = [];

            function e(n, s) {
                return i.push(n + ' ') > t.cacheLength && delete e[i.shift()], e[n + ' '] = s
            };
            return e
        };

        function d(e) {
            return e[a] = !0, e
        };

        function f(e) {
            var i = n.createElement('div');
            try {
                return !!e(i)
            } catch (t) {
                return !1
            } finally {
                i.parentNode && i.parentNode.removeChild(i), i = null
            }
        };

        function U(e, i) {
            var n = e.split('|'),
                s = n.length;
            while (s--) t.attrHandle[n[s]] = i
        };

        function ae(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || ie) - (~e.sourceIndex || ie);
            if (n) return n;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return e ? 1 : -1
        };

        function ke(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return 'input' === i && t.type === e
            }
        };

        function Ce(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ('input' === i || 'button' === i) && t.type === e
            }
        };

        function T(e) {
            return d(function(t) {
                return t = +t, d(function(i, n) {
                    var s, r = e([], i.length, t),
                        o = r.length;
                    while (o--) i[s = r[o]] && (i[s] = !(n[s] = i[s]))
                })
            })
        };

        function X(e) {
            return e && 'undefined' != typeof e.getElementsByTagName && e
        };
        o = r.support = {}, G = r.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? 'HTML' !== t.nodeName : !1
        }, y = r.setDocument = function(e) {
            var d, i, r = e ? e.ownerDocument || e : h;
            return r !== n && 9 === r.nodeType && r.documentElement ? (n = r, c = n.documentElement, u = !G(n), (i = n.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener('unload', oe, !1) : i.attachEvent && i.attachEvent('onunload', oe)), o.attributes = f(function(e) {
                return e.className = 'i', !e.getAttribute('className')
            }), o.getElementsByTagName = f(function(e) {
                return e.appendChild(n.createComment('')), !e.getElementsByTagName('*').length
            }), o.getElementsByClassName = j.test(n.getElementsByClassName), o.getById = f(function(e) {
                return c.appendChild(e).id = a, !n.getElementsByName || !n.getElementsByName(a).length
            }), o.getById ? (t.find.ID = function(e, t) {
                if ('undefined' != typeof t.getElementById && u) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }, t.filter.ID = function(e) {
                var t = e.replace(m, g);
                return function(e) {
                    return e.getAttribute('id') === t
                }
            }) : (delete t.find.ID, t.filter.ID = function(e) {
                var t = e.replace(m, g);
                return function(e) {
                    var i = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                    return i && i.value === t
                }
            }), t.find.TAG = o.getElementsByTagName ? function(e, t) {
                return 'undefined' != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : o.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    r = 0,
                    s = t.getElementsByTagName(e);
                if ('*' === e) {
                    while (i = s[r++]) 1 === i.nodeType && n.push(i);
                    return n
                };
                return s
            }, t.find.CLASS = o.getElementsByClassName && function(e, t) {
                return 'undefined' != typeof t.getElementsByClassName && u ? t.getElementsByClassName(e) : void 0
            }, w = [], l = [], (o.qsa = j.test(n.querySelectorAll)) && (f(function(e) {
                c.appendChild(e).innerHTML = '<a id=\'' + a + '\'></a><select id=\'' + a + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && l.push('[*^$]=' + s + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || l.push('\\[' + s + '*(?:value|' + R + ')'), e.querySelectorAll('[id~=' + a + '-]').length || l.push('~='), e.querySelectorAll(':checked').length || l.push(':checked'), e.querySelectorAll('a#' + a + '+*').length || l.push('.#.+[+~]')
            }), f(function(e) {
                var t = n.createElement('input');
                t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && l.push('name' + s + '*[*^$|!~]?='), e.querySelectorAll(':enabled').length || l.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), l.push(',.*:')
            })), (o.matchesSelector = j.test(M = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.oMatchesSelector || c.msMatchesSelector)) && f(function(e) {
                o.disconnectedMatch = M.call(e, 'div'), M.call(e, '[s!=\'\']:x'), w.push('!=', B)
            }), l = l.length && new RegExp(l.join('|')), w = w.length && new RegExp(w.join('|')), d = j.test(c.compareDocumentPosition), P = d || j.test(c.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, W = d ? function(e, t) {
                if (e === t) return S = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !o.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === h && P(h, e) ? -1 : t === n || t.ownerDocument === h && P(h, t) ? 1 : v ? k(v, e) - k(v, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return S = !0, 0;
                var i, s = 0,
                    a = e.parentNode,
                    l = t.parentNode,
                    r = [e],
                    o = [t];
                if (!a || !l) return e === n ? -1 : t === n ? 1 : a ? -1 : l ? 1 : v ? k(v, e) - k(v, t) : 0;
                if (a === l) return ae(e, t);
                i = e;
                while (i = i.parentNode) r.unshift(i);
                i = t;
                while (i = i.parentNode) o.unshift(i);
                while (r[s] === o[s]) s++;
                return s ? ae(r[s], o[s]) : r[s] === h ? -1 : o[s] === h ? 1 : 0
            }, n) : n
        }, r.matches = function(e, t) {
            return r(e, null, null, t)
        }, r.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== n && y(e), t = t.replace(ge, '=\'$1\']'), o.matchesSelector && u && !E[t + ' '] && (!w || !w.test(t)) && (!l || !l.test(t))) try {
                var s = M.call(e, t);
                if (s || o.disconnectedMatch || e.document && 11 !== e.document.nodeType) return s
            } catch (i) {};
            return r(t, n, null, [e]).length > 0
        }, r.contains = function(e, t) {
            return (e.ownerDocument || e) !== n && y(e), P(e, t)
        }, r.attr = function(e, i) {
            (e.ownerDocument || e) !== n && y(e);
            var r = t.attrHandle[i.toLowerCase()],
                s = r && ue.call(t.attrHandle, i.toLowerCase()) ? r(e, i, !u) : void 0;
            return void 0 !== s ? s : o.attributes || !u ? e.getAttribute(i) : (s = e.getAttributeNode(i)) && s.specified ? s.value : null
        }, r.error = function(e) {
            throw new Error('Syntax error, unrecognized expression: ' + e)
        }, r.uniqueSort = function(e) {
            var n, s = [],
                t = 0,
                i = 0;
            if (S = !o.detectDuplicates, v = !o.sortStable && e.slice(0), e.sort(W), S) {
                while (n = e[i++]) n === e[i] && (t = s.push(i));
                while (t--) e.splice(s[t], 1)
            };
            return v = null, e
        }, A = r.getText = function(e) {
            var n, i = '',
                s = 0,
                t = e.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ('string' == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += A(e)
                } else if (3 === t || 4 === t) return e.nodeValue
            } else
                while (n = e[s++]) i += A(n);
            return i
        }, t = r.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: z,
            attrHandle: {},
            find: {},
            relative: {
                '>': {
                    dir: 'parentNode',
                    first: !0
                },
                ' ': {
                    dir: 'parentNode'
                },
                '+': {
                    dir: 'previousSibling',
                    first: !0
                },
                '~': {
                    dir: 'previousSibling'
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(m, g), e[3] = (e[3] || e[4] || e[5] || '').replace(m, g), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || r.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && r.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var i, t = !e[6] && e[2];
                    return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : t && ve.test(t) && (i = I(t, !0)) && (i = t.indexOf(')', t.length - i) - t.length) && (e[0] = e[0].slice(0, i), e[2] = t.slice(0, i)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(m, g).toLowerCase();
                    return '*' === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = ee[e + ' '];
                    return t || (t = new RegExp('(^|' + s + ')' + e + '(' + s + '|$)')) && ee(e, function(e) {
                        return t.test('string' == typeof e.className && e.className || 'undefined' != typeof e.getAttribute && e.getAttribute('class') || '')
                    })
                },
                ATTR: function(e, t, i) {
                    return function(n) {
                        var s = r.attr(n, e);
                        return null == s ? '!=' === t : t ? (s += '', '=' === t ? s === i : '!=' === t ? s !== i : '^=' === t ? i && 0 === s.indexOf(i) : '*=' === t ? i && s.indexOf(i) > -1 : '$=' === t ? i && s.slice(-i.length) === i : '~=' === t ? (' ' + s.replace(fe, ' ') + ' ').indexOf(i) > -1 : '|=' === t ? s === i || s.slice(0, i.length + 1) === i + '-' : !1) : !0
                    }
                },
                CHILD: function(e, t, i, n, s) {
                    var l = 'nth' !== e.slice(0, 3),
                        o = 'last' !== e.slice(-4),
                        r = 'of-type' === t;
                    return 1 === n && 0 === s ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, c) {
                        var m, g, f, u, d, v, y = l !== o ? 'nextSibling' : 'previousSibling',
                            b = t.parentNode,
                            x = r && t.nodeName.toLowerCase(),
                            w = !c && !r,
                            h = !1;
                        if (b) {
                            if (l) {
                                while (y) {
                                    u = t;
                                    while (u = u[y])
                                        if (r ? u.nodeName.toLowerCase() === x : 1 === u.nodeType) return !1;
                                    v = y = 'only' === e && !v && 'nextSibling'
                                };
                                return !0
                            };
                            if (v = [o ? b.firstChild : b.lastChild], o && w) {
                                u = b, f = u[a] || (u[a] = {}), g = f[u.uniqueID] || (f[u.uniqueID] = {}), m = g[e] || [], d = m[0] === p && m[1], h = d && m[2], u = d && b.childNodes[d];
                                while (u = ++d && u && u[y] || (h = d = 0) || v.pop())
                                    if (1 === u.nodeType && ++h && u === t) {
                                        g[e] = [p, d, h];
                                        break
                                    }
                            } else if (w && (u = t, f = u[a] || (u[a] = {}), g = f[u.uniqueID] || (f[u.uniqueID] = {}), m = g[e] || [], d = m[0] === p && m[1], h = d), h === !1)
                                while (u = ++d && u && u[y] || (h = d = 0) || v.pop())
                                    if ((r ? u.nodeName.toLowerCase() === x : 1 === u.nodeType) && ++h && (w && (f = u[a] || (u[a] = {}), g = f[u.uniqueID] || (f[u.uniqueID] = {}), g[e] = [p, h]), u === t)) break;
                            return h -= s, h === n || h % n === 0 && h / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var s, n = t.pseudos[e] || t.setFilters[e.toLowerCase()] || r.error('unsupported pseudo: ' + e);
                    return n[a] ? n(i) : n.length > 1 ? (s = [e, e, '', i], t.setFilters.hasOwnProperty(e.toLowerCase()) ? d(function(e, t) {
                        var s, r = n(e, i),
                            o = r.length;
                        while (o--) s = k(e, r[o]), e[s] = !(t[s] = r[o])
                    }) : function(e) {
                        return n(e, 0, s)
                    }) : n
                }
            },
            pseudos: {
                not: d(function(e) {
                    var t = [],
                        n = [],
                        i = H(e.replace(O, '$1'));
                    return i[a] ? d(function(e, t, n, s) {
                        var o, a = i(e, null, s, []),
                            r = e.length;
                        while (r--)(o = a[r]) && (e[r] = !(t[r] = o))
                    }) : function(e, s, r) {
                        return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: d(function(e) {
                    return function(t) {
                        return r(e, t).length > 0
                    }
                }),
                contains: d(function(e) {
                    return e = e.replace(m, g),
                        function(t) {
                            return (t.textContent || t.innerText || A(t)).indexOf(e) > -1
                        }
                }),
                lang: d(function(e) {
                    return re.test(e || '') || r.error('unsupported lang: ' + e), e = e.replace(m, g).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = u ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + '-');
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === c
                },
                focus: function(e) {
                    return e === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return 'input' === t && !!e.checked || 'option' === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !t.pseudos.empty(e)
                },
                header: function(e) {
                    return be.test(e.nodeName)
                },
                input: function(e) {
                    return ye.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return 'input' === t && 'button' === e.type || 'button' === t
                },
                text: function(e) {
                    var t;
                    return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
                },
                first: T(function() {
                    return [0]
                }),
                last: T(function(e, t) {
                    return [t - 1]
                }),
                eq: T(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: T(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: T(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: T(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: T(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, t.pseudos.nth = t.pseudos.eq;
        for (D in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[D] = ke(D);
        for (D in {
                submit: !0,
                reset: !0
            }) t.pseudos[D] = Ce(D);

        function le() {};
        le.prototype = t.filters = t.pseudos, t.setFilters = new le, I = r.tokenize = function(e, i) {
            var o, s, l, a, n, c, u, h = te[e + ' '];
            if (h) return i ? 0 : h.slice(0);
            n = e, c = [], u = t.preFilter;
            while (n) {
                o && !(s = pe.exec(n)) || (s && (n = n.slice(s[0].length) || n), c.push(l = [])), o = !1, (s = me.exec(n)) && (o = s.shift(), l.push({
                    value: o,
                    type: s[0].replace(O, ' ')
                }), n = n.slice(o.length));
                for (a in t.filter) !(s = z[a].exec(n)) || u[a] && !(s = u[a](s)) || (o = s.shift(), l.push({
                    value: o,
                    type: a,
                    matches: s
                }), n = n.slice(o.length));
                if (!o) break
            };
            return i ? n.length : n ? r.error(e) : te(e, c).slice(0)
        };

        function L(e) {
            for (var t = 0, n = e.length, i = ''; n > t; t++) i += e[t].value;
            return i
        };

        function K(e, t, i) {
            var n = t.dir,
                s = i && 'parentNode' === n,
                r = ce++;
            return t.first ? function(t, i, r) {
                while (t = t[n])
                    if (1 === t.nodeType || s) return e(t, i, r)
            } : function(t, i, o) {
                var l, c, u, h = [p, r];
                if (o) {
                    while (t = t[n])
                        if ((1 === t.nodeType || s) && e(t, i, o)) return !0
                } else
                    while (t = t[n])
                        if (1 === t.nodeType || s) {
                            if (u = t[a] || (t[a] = {}), c = u[t.uniqueID] || (u[t.uniqueID] = {}), (l = c[n]) && l[0] === p && l[1] === r) return h[2] = l[2];
                            if (c[n] = h, h[2] = e(t, i, o)) return !0
                        }
            }
        };

        function Q(e) {
            return e.length > 1 ? function(t, i, n) {
                var s = e.length;
                while (s--)
                    if (!e[s](t, i, n)) return !1;
                return !0
            } : e[0]
        };

        function Te(e, t, i) {
            for (var n = 0, s = t.length; s > n; n++) r(e, t[n], i);
            return i
        };

        function F(e, t, i, n, s) {
            for (var o, a = [], r = 0, l = e.length, c = null != t; l > r; r++)(o = e[r]) && (i && !i(o, n, s) || (a.push(o), c && t.push(r)));
            return a
        };

        function J(e, t, i, n, s, r) {
            return n && !n[a] && (n = J(n)), s && !s[a] && (s = J(s, r)), d(function(r, o, a, l) {
                var h, u, d, m = [],
                    p = [],
                    g = o.length,
                    v = r || Te(t || '*', a.nodeType ? [a] : a, []),
                    f = !e || !r && t ? v : F(v, m, e, a, l),
                    c = i ? s || (r ? e : g || n) ? [] : o : f;
                if (i && i(f, c, a, l), n) {
                    h = F(c, p), n(h, [], a, l), u = h.length;
                    while (u--)(d = h[u]) && (c[p[u]] = !(f[p[u]] = d))
                };
                if (r) {
                    if (s || e) {
                        if (s) {
                            h = [], u = c.length;
                            while (u--)(d = c[u]) && h.push(f[u] = d);
                            s(null, c = [], h, l)
                        };
                        u = c.length;
                        while (u--)(d = c[u]) && (h = s ? k(r, d) : m[u]) > -1 && (r[h] = !(o[h] = d))
                    }
                } else c = F(c === o ? c.splice(g, c.length) : c), s ? s(null, o, c, l) : b.apply(o, c)
            })
        };

        function V(e) {
            for (var o, s, n, l = e.length, c = t.relative[e[0].type], u = c || t.relative[' '], i = c ? 1 : 0, h = K(function(e) {
                    return e === o
                }, u, !0), d = K(function(e) {
                    return k(o, e) > -1
                }, u, !0), r = [function(e, t, i) {
                    var n = !c && (i || t !== N) || ((o = t).nodeType ? h(e, t, i) : d(e, t, i));
                    return o = null, n
                }]; l > i; i++)
                if (s = t.relative[e[i].type]) r = [K(Q(r), s)];
                else {
                    if (s = t.filter[e[i].type].apply(null, e[i].matches), s[a]) {
                        for (n = ++i; l > n; n++)
                            if (t.relative[e[n].type]) break;
                        return J(i > 1 && Q(r), i > 1 && L(e.slice(0, i - 1).concat({
                            value: ' ' === e[i - 2].type ? '*' : ''
                        })).replace(O, '$1'), s, n > i && V(e.slice(i, n)), l > n && V(e = e.slice(n)), l > n && L(e))
                    };
                    r.push(s)
                };
            return Q(r)
        };

        function De(e, i) {
            var s = i.length > 0,
                o = e.length > 0,
                a = function(a, l, c, h, d) {
                    var f, x, v, w = 0,
                        m = '0',
                        k = a && [],
                        g = [],
                        C = N,
                        T = a || o && t.find.TAG('*', d),
                        D = p += null == C ? 1 : Math.random() || .1,
                        S = T.length;
                    for (d && (N = l === n || l || d); m !== S && null != (f = T[m]); m++) {
                        if (o && f) {
                            x = 0, l || f.ownerDocument === n || (y(f), c = !u);
                            while (v = e[x++])
                                if (v(f, l || n, c)) {
                                    h.push(f);
                                    break
                                };
                            d && (p = D)
                        };
                        s && ((f = !v && f) && w--, a && k.push(f))
                    };
                    if (w += m, s && m !== w) {
                        x = 0;
                        while (v = i[x++]) v(k, g, l, c);
                        if (a) {
                            if (w > 0)
                                while (m--) k[m] || g[m] || (g[m] = he.call(h));
                            g = F(g)
                        };
                        b.apply(h, g), d && !a && g.length > 0 && w + i.length > 1 && r.uniqueSort(h)
                    };
                    return d && (p = D, N = C), k
                };
            return s ? d(a) : a
        };
        return H = r.compile = function(e, t) {
            var n, s = [],
                r = [],
                i = E[e + ' '];
            if (!i) {
                t || (t = I(e)), n = t.length;
                while (n--) i = V(t[n]), i[a] ? s.push(i) : r.push(i);
                i = E(e, De(r, s)), i.selector = e
            };
            return i
        }, Z = r.select = function(e, i, n, s) {
            var l, r, a, d, f, h = 'function' == typeof e && e,
                c = !s && I(e = h.selector || e);
            if (n = n || [], 1 === c.length) {
                if (r = c[0] = c[0].slice(0), r.length > 2 && 'ID' === (a = r[0]).type && o.getById && 9 === i.nodeType && u && t.relative[r[1].type]) {
                    if (i = (t.find.ID(a.matches[0].replace(m, g), i) || [])[0], !i) return n;
                    h && (i = i.parentNode), e = e.slice(r.shift().value.length)
                };
                l = z.needsContext.test(e) ? 0 : r.length;
                while (l--) {
                    if (a = r[l], t.relative[d = a.type]) break;
                    if ((f = t.find[d]) && (s = f(a.matches[0].replace(m, g), q.test(r[0].type) && X(i.parentNode) || i))) {
                        if (r.splice(l, 1), e = s.length && L(r), !e) return b.apply(n, s), n;
                        break
                    }
                }
            };
            return (h || H(e, c))(s, i, !u, n, !i || q.test(e) && X(i.parentNode) || i), n
        }, o.sortStable = a.split('').sort(W).join('') === a, o.detectDuplicates = !!S, y(), o.sortDetached = f(function(e) {
            return 1 & e.compareDocumentPosition(n.createElement('div'))
        }), f(function(e) {
            return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href')
        }) || U('type|href|height|width', function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
        }), o.attributes && f(function(e) {
            return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value')
        }) || U('value', function(e, t, i) {
            return i || 'input' !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), f(function(e) {
            return null == e.getAttribute('disabled')
        }) || U(R, function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), r
    }(e);
    t.find = w, t.expr = w.selectors, t.expr[':'] = t.expr.pseudos, t.uniqueSort = t.unique = w.uniqueSort, t.text = w.getText, t.isXMLDoc = w.isXML, t.contains = w.contains;
    var b = function(e, i, n) {
            var s = [],
                r = void 0 !== n;
            while ((e = e[i]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (r && t(e).is(n)) break;
                    s.push(e)
                };
            return s
        },
        Se = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        Ie = t.expr.match.needsContext,
        Pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Nt = /^.[^:#\[\.,]*$/;

    function Z(e, i, n) {
        if (t.isFunction(i)) return t.grep(e, function(e, t) {
            return !!i.call(e, t, e) !== n
        });
        if (i.nodeType) return t.grep(e, function(e) {
            return e === i !== n
        });
        if ('string' == typeof i) {
            if (Nt.test(i)) return t.filter(i, e, n);
            i = t.filter(i, e)
        };
        return t.grep(e, function(e) {
            return L.call(i, e) > -1 !== n
        })
    };
    t.filter = function(e, i, n) {
        var s = i[0];
        return n && (e = ':not(' + e + ')'), 1 === i.length && 1 === s.nodeType ? t.find.matchesSelector(s, e) ? [s] : [] : t.find.matches(e, t.grep(i, function(e) {
            return 1 === e.nodeType
        }))
    }, t.fn.extend({
        find: function(e) {
            var i, s = this.length,
                n = [],
                r = this;
            if ('string' != typeof e) return this.pushStack(t(e).filter(function() {
                for (i = 0; s > i; i++)
                    if (t.contains(r[i], this)) return !0
            }));
            for (i = 0; s > i; i++) t.find(e, r[i], n);
            return n = this.pushStack(s > 1 ? t.unique(n) : n), n.selector = this.selector ? this.selector + ' ' + e : e, n
        },
        filter: function(e) {
            return this.pushStack(Z(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(Z(this, e || [], !0))
        },
        is: function(e) {
            return !!Z(this, 'string' == typeof e && Ie.test(e) ? t(e) : e || [], !1).length
        }
    });
    var De, jt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        At = t.fn.init = function(e, i, n) {
            var r, o;
            if (!e) return this;
            if (n = n || De, 'string' == typeof e) {
                if (r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : jt.exec(e), !r || !r[1] && i) return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
                if (r[1]) {
                    if (i = i instanceof t ? i[0] : i, t.merge(this, t.parseHTML(r[1], i && i.nodeType ? i.ownerDocument || i : s, !0)), Pe.test(r[1]) && t.isPlainObject(i))
                        for (r in i) t.isFunction(this[r]) ? this[r](i[r]) : this.attr(r, i[r]);
                    return this
                };
                return o = s.getElementById(r[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = s, this.selector = e, this
            };
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : t.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(t) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), t.makeArray(e, this))
        };
    At.prototype = t.fn, De = t(s);
    var It = /^(?:parents|prev(?:Until|All))/,
        Pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    t.fn.extend({
        has: function(e) {
            var i = t(e, this),
                n = i.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (t.contains(this, i[e])) return !0
            })
        },
        closest: function(e, i) {
            for (var n, r = 0, a = this.length, s = [], o = Ie.test(e) || 'string' != typeof e ? t(e, i || this.context) : 0; a > r; r++)
                for (n = this[r]; n && n !== i; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && t.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    };
            return this.pushStack(s.length > 1 ? t.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? 'string' == typeof e ? L.call(t(e), this[0]) : L.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, i) {
            return this.pushStack(t.uniqueSort(t.merge(this.get(), t(e, i))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function Ne(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    };
    t.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return b(e, 'parentNode')
        },
        parentsUntil: function(e, t, i) {
            return b(e, 'parentNode', i)
        },
        next: function(e) {
            return Ne(e, 'nextSibling')
        },
        prev: function(e) {
            return Ne(e, 'previousSibling')
        },
        nextAll: function(e) {
            return b(e, 'nextSibling')
        },
        prevAll: function(e) {
            return b(e, 'previousSibling')
        },
        nextUntil: function(e, t, i) {
            return b(e, 'nextSibling', i)
        },
        prevUntil: function(e, t, i) {
            return b(e, 'previousSibling', i)
        },
        siblings: function(e) {
            return Se((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Se(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || t.merge([], e.childNodes)
        }
    }, function(e, i) {
        t.fn[e] = function(n, s) {
            var r = t.map(this, i, n);
            return 'Until' !== e.slice(-5) && (s = n), s && 'string' == typeof s && (r = t.filter(s, r)), this.length > 1 && (Pt[e] || t.uniqueSort(r), It.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var u = /\S+/g;

    function Ft(e) {
        var i = {};
        return t.each(e.match(u) || [], function(e, t) {
            i[t] = !0
        }), i
    };
    t.Callbacks = function(e) {
        e = 'string' == typeof e ? Ft(e) : t.extend({}, e);
        var a, n, c, r, i = [],
            o = [],
            s = -1,
            u = function() {
                for (r = e.once, c = a = !0; o.length; s = -1) {
                    n = o.shift();
                    while (++s < i.length) i[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = i.length, n = !1)
                };
                e.memory || (n = !1), a = !1, r && (i = n ? [] : '')
            },
            l = {
                add: function() {
                    return i && (n && !a && (s = i.length - 1, o.push(n)), function r(n) {
                        t.each(n, function(n, s) {
                            t.isFunction(s) ? e.unique && l.has(s) || i.push(s) : s && s.length && 'string' !== t.type(s) && r(s)
                        })
                    }(arguments), n && !a && u()), this
                },
                remove: function() {
                    return t.each(arguments, function(e, n) {
                        var r;
                        while ((r = t.inArray(n, i, r)) > -1) i.splice(r, 1), s >= r && s--
                    }), this
                },
                has: function(e) {
                    return e ? t.inArray(e, i) > -1 : i.length > 0
                },
                empty: function() {
                    return i && (i = []), this
                },
                disable: function() {
                    return r = o = [], i = n = '', this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return r = o = [], n || (i = n = ''), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, t) {
                    return r || (t = t || [], t = [e, t.slice ? t.slice() : t], o.push(t), a || u()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, t.extend({
        Deferred: function(e) {
            var s = [
                    ['resolve', 'done', t.Callbacks('once memory'), 'resolved'],
                    ['reject', 'fail', t.Callbacks('once memory'), 'rejected'],
                    ['notify', 'progress', t.Callbacks('memory')]
                ],
                r = 'pending',
                n = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return t.Deferred(function(r) {
                            t.each(s, function(s, o) {
                                var a = t.isFunction(e[s]) && e[s];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && t.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[o[0] + 'With'](this === n ? r.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? t.extend(e, n) : n
                    }
                },
                i = {};
            return n.pipe = n.then, t.each(s, function(e, t) {
                var o = t[2],
                    a = t[3];
                n[t[1]] = o.add, a && o.add(function() {
                    r = a
                }, s[1 ^ e][2].disable, s[2][2].lock), i[t[0]] = function() {
                    return i[t[0] + 'With'](this === i ? n : this, arguments), this
                }, i[t[0] + 'With'] = o.fireWith
            }), n.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var i = 0,
                s = f.call(arguments),
                n = s.length,
                o = 1 !== n || e && t.isFunction(e.promise) ? n : 0,
                r = 1 === o ? e : t.Deferred(),
                c = function(e, t, i) {
                    return function(n) {
                        t[e] = this, i[e] = arguments.length > 1 ? f.call(arguments) : n, i === a ? r.notifyWith(t, i) : --o || r.resolveWith(t, i)
                    }
                },
                a, u, l;
            if (n > 1)
                for (a = new Array(n), u = new Array(n), l = new Array(n); n > i; i++) s[i] && t.isFunction(s[i].promise) ? s[i].promise().progress(c(i, u, a)).done(c(i, l, s)).fail(r.reject) : --o;
            return o || r.resolveWith(l, s), r.promise()
        }
    });
    var z;
    t.fn.ready = function(e) {
        return t.ready.promise().done(e), this
    }, t.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? t.readyWait++ : t.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --t.readyWait : t.isReady) || (t.isReady = !0, e !== !0 && --t.readyWait > 0 || (z.resolveWith(s, [t]), t.fn.triggerHandler && (t(s).triggerHandler('ready'), t(s).off('ready'))))
        }
    });

    function H() {
        s.removeEventListener('DOMContentLoaded', H), e.removeEventListener('load', H), t.ready()
    };
    t.ready.promise = function(i) {
        return z || (z = t.Deferred(), 'complete' === s.readyState || 'loading' !== s.readyState && !s.documentElement.doScroll ? e.setTimeout(t.ready) : (s.addEventListener('DOMContentLoaded', H), e.addEventListener('load', H))), z.promise(i)
    }, t.ready.promise();
    var d = function(e, i, n, s, r, a, l) {
            var o = 0,
                u = e.length,
                c = null == n;
            if ('object' === t.type(n)) {
                r = !0;
                for (o in n) d(e, i, o, n[o], !0, a, l)
            } else if (void 0 !== s && (r = !0, t.isFunction(s) || (l = !0), c && (l ? (i.call(e, s), i = null) : (c = i, i = function(e, i, n) {
                    return c.call(t(e), n)
                })), i))
                for (; u > o; o++) i(e[o], n, l ? s : s.call(e[o], o, i(e[o], n)));
            return r ? e : c ? i.call(e) : u ? i(e[0], n) : a
        },
        j = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function N() {
        this.expando = t.expando + N.uid++
    };
    N.uid = 1, N.prototype = {
        register: function(e, t) {
            var i = t || {};
            return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!j(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, j(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, i) {
            var n, s = this.cache(e);
            if ('string' == typeof t) s[t] = i;
            else
                for (n in t) s[n] = t[n];
            return s
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, i, n) {
            var s;
            return void 0 === i || i && 'string' == typeof i && void 0 === n ? (s = this.get(e, i), void 0 !== s ? s : this.get(e, t.camelCase(i))) : (this.set(e, i, n), void 0 !== n ? n : i)
        },
        remove: function(e, i) {
            var r, n, o, s = e[this.expando];
            if (void 0 !== s) {
                if (void 0 === i) this.register(e);
                else {
                    t.isArray(i) ? n = i.concat(i.map(t.camelCase)) : (o = t.camelCase(i), i in s ? n = [i, o] : (n = o, n = n in s ? [n] : n.match(u) || [])), r = n.length;
                    while (r--) delete s[n[r]]
                }(void 0 === i || t.isEmptyObject(s)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var i = e[this.expando];
            return void 0 !== i && !t.isEmptyObject(i)
        }
    };
    var n = new N,
        o = new N,
        St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Te = /[A-Z]/g;

    function Me(e, i, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = 'data-' + i.replace(Te, '-$&').toLowerCase(), n = e.getAttribute(r), 'string' == typeof n) {
                try {
                    n = 'true' === n ? !0 : 'false' === n ? !1 : 'null' === n ? null : +n + '' === n ? +n : St.test(n) ? t.parseJSON(n) : n
                } catch (s) {};
                o.set(e, i, n)
            } else n = void 0;
        return n
    };
    t.extend({
        hasData: function(e) {
            return o.hasData(e) || n.hasData(e)
        },
        data: function(e, t, i) {
            return o.access(e, t, i)
        },
        removeData: function(e, t) {
            o.remove(e, t)
        },
        _data: function(e, t, i) {
            return n.access(e, t, i)
        },
        _removeData: function(e, t) {
            n.remove(e, t)
        }
    }), t.fn.extend({
        data: function(e, i) {
            var a, r, l, s = this[0],
                c = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (l = o.get(s), 1 === s.nodeType && !n.get(s, 'hasDataAttrs'))) {
                    a = c.length;
                    while (a--) c[a] && (r = c[a].name, 0 === r.indexOf('data-') && (r = t.camelCase(r.slice(5)), Me(s, r, l[r])));
                    n.set(s, 'hasDataAttrs', !0)
                };
                return l
            };
            return 'object' == typeof e ? this.each(function() {
                o.set(this, e)
            }) : d(this, function(i) {
                var n, r;
                if (s && void 0 === i) {
                    if (n = o.get(s, e) || o.get(s, e.replace(Te, '-$&').toLowerCase()), void 0 !== n) return n;
                    if (r = t.camelCase(e), n = o.get(s, r), void 0 !== n) return n;
                    if (n = Me(s, r, void 0), void 0 !== n) return n
                } else r = t.camelCase(e), this.each(function() {
                    var t = o.get(this, r);
                    o.set(this, r, i), e.indexOf('-') > -1 && void 0 !== t && o.set(this, e, i)
                })
            }, null, i, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                o.remove(this, e)
            })
        }
    }), t.extend({
        queue: function(e, i, s) {
            var r;
            return e ? (i = (i || 'fx') + 'queue', r = n.get(e, i), s && (!r || t.isArray(s) ? r = n.access(e, i, t.makeArray(s)) : r.push(s)), r || []) : void 0
        },
        dequeue: function(e, i) {
            i = i || 'fx';
            var n = t.queue(e, i),
                o = n.length,
                s = n.shift(),
                r = t._queueHooks(e, i),
                a = function() {
                    t.dequeue(e, i)
                };
            'inprogress' === s && (s = n.shift(), o--), s && ('fx' === i && n.unshift('inprogress'), delete r.stop, s.call(e, a, r)), !o && r && r.empty.fire()
        },
        _queueHooks: function(e, i) {
            var s = i + 'queueHooks';
            return n.get(e, s) || n.access(e, s, {
                empty: t.Callbacks('once memory').add(function() {
                    n.remove(e, [i + 'queue', s])
                })
            })
        }
    }), t.fn.extend({
        queue: function(e, i) {
            var n = 2;
            return 'string' != typeof e && (i = e, e = 'fx', n--), arguments.length < n ? t.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                var n = t.queue(this, e, i);
                t._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && t.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                t.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || 'fx', [])
        },
        promise: function(e, i) {
            var s, o = 1,
                a = t.Deferred(),
                r = this,
                l = this.length,
                c = function() {
                    --o || a.resolveWith(r, [r])
                };
            'string' != typeof e && (i = e, e = void 0), e = e || 'fx';
            while (l--) s = n.get(r[l], e + 'queueHooks'), s && s.empty && (o++, s.empty.add(c));
            return c(), a.promise(i)
        }
    });
    var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        I = new RegExp('^(?:([+-])=|)(' + Ce + ')([a-z%]*)$', 'i'),
        p = ['Top', 'Right', 'Bottom', 'Left'],
        P = function(e, i) {
            return e = i || e, 'none' === t.css(e, 'display') || !t.contains(e.ownerDocument, e)
        };

    function Ee(e, i, n, s) {
        var c, o = 1,
            h = 20,
            u = s ? function() {
                return s.cur()
            } : function() {
                return t.css(e, i, '')
            },
            l = u(),
            a = n && n[3] || (t.cssNumber[i] ? '' : 'px'),
            r = (t.cssNumber[i] || 'px' !== a && +l) && I.exec(t.css(e, i));
        if (r && r[3] !== a) {
            a = a || r[3], n = n || [], r = +l || 1;
            do o = o || '.5', r /= o, t.style(e, i, r + a); while (o !== (o = u() / l) && 1 !== o && --h)
        };
        return n && (r = +r || +l || 0, c = n[1] ? r + (n[1] + 1) * n[2] : +n[2], s && (s.unit = a, s.start = r, s.end = c)), c
    };
    var we = /^(?:checkbox|radio)$/i,
        xe = /<([\w:-]+)/,
        ke = /^$|\/(?:java|ecma)script/i,
        c = {
            option: [1, '<select multiple=\'multiple\'>', '</select>'],
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', '']
        };
    c.optgroup = c.option, c.tbody = c.tfoot = c.colgroup = c.caption = c.thead, c.th = c.td;

    function a(e, i) {
        var n = 'undefined' != typeof e.getElementsByTagName ? e.getElementsByTagName(i || '*') : 'undefined' != typeof e.querySelectorAll ? e.querySelectorAll(i || '*') : [];
        return void 0 === i || i && t.nodeName(e, i) ? t.merge([e], n) : n
    };

    function ee(e, t) {
        for (var i = 0, s = e.length; s > i; i++) n.set(e[i], 'globalEval', !t || n.get(t[i], 'globalEval'))
    };
    var Dt = /<|&#?\w+;/;

    function Oe(e, i, n, s, o) {
        for (var r, l, m, d, g, f, u = i.createDocumentFragment(), p = [], h = 0, v = e.length; v > h; h++)
            if (r = e[h], r || 0 === r)
                if ('object' === t.type(r)) t.merge(p, r.nodeType ? [r] : r);
                else if (Dt.test(r)) {
            l = l || u.appendChild(i.createElement('div')), m = (xe.exec(r) || ['', ''])[1].toLowerCase(), d = c[m] || c._default, l.innerHTML = d[1] + t.htmlPrefilter(r) + d[2], f = d[0];
            while (f--) l = l.lastChild;
            t.merge(p, l.childNodes), l = u.firstChild, l.textContent = ''
        } else p.push(i.createTextNode(r));
        u.textContent = '', h = 0;
        while (r = p[h++])
            if (s && t.inArray(r, s) > -1) o && o.push(r);
            else if (g = t.contains(r.ownerDocument, r), l = a(u.appendChild(r), 'script'), g && ee(l), n) {
            f = 0;
            while (r = l[f++]) ke.test(r.type || '') && n.push(r)
        };
        return u
    };
    ! function() {
        var i = s.createDocumentFragment(),
            e = i.appendChild(s.createElement('div')),
            t = s.createElement('input');
        t.setAttribute('type', 'radio'), t.setAttribute('checked', 'checked'), t.setAttribute('name', 't'), e.appendChild(t), r.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = '<textarea>x</textarea>', r.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ct = /^key/,
        Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        be = /^([^.]*)(?:\.(.+)|)/;

    function W() {
        return !0
    };

    function x() {
        return !1
    };

    function ze() {
        try {
            return s.activeElement
        } catch (e) {}
    };

    function te(e, i, n, s, r, o) {
        var a, l;
        if ('object' == typeof i) {
            'string' != typeof n && (s = s || n, n = void 0);
            for (l in i) te(e, l, n, s, i[l], o);
            return e
        };
        if (null == s && null == r ? (r = n, s = n = void 0) : null == r && ('string' == typeof n ? (r = s, s = void 0) : (r = s, s = n, n = void 0)), r === !1) r = x;
        else if (!r) return e;
        return 1 === o && (a = r, r = function(e) {
            return t().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = t.guid++)), e.each(function() {
            t.event.add(this, i, r, s, n)
        })
    };
    t.event = {
        global: {},
        add: function(e, i, s, r, o) {
            var f, p, g, m, v, c, l, h, a, y, b, d = n.get(e);
            if (d) {
                s.handler && (f = s, s = f.handler, o = f.selector), s.guid || (s.guid = t.guid++), (m = d.events) || (m = d.events = {}), (p = d.handle) || (p = d.handle = function(i) {
                    return 'undefined' != typeof t && t.event.triggered !== i.type ? t.event.dispatch.apply(e, arguments) : void 0
                }), i = (i || '').match(u) || [''], v = i.length;
                while (v--) g = be.exec(i[v]) || [], a = b = g[1], y = (g[2] || '').split('.').sort(), a && (l = t.event.special[a] || {}, a = (o ? l.delegateType : l.bindType) || a, l = t.event.special[a] || {}, c = t.extend({
                    type: a,
                    origType: b,
                    data: r,
                    handler: s,
                    guid: s.guid,
                    selector: o,
                    needsContext: o && t.expr.match.needsContext.test(o),
                    namespace: y.join('.')
                }, f), (h = m[a]) || (h = m[a] = [], h.delegateCount = 0, l.setup && l.setup.call(e, r, y, p) !== !1 || e.addEventListener && e.addEventListener(a, p)), l.add && (l.add.call(e, c), c.handler.guid || (c.handler.guid = s.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), t.event.global[a] = !0)
            }
        },
        remove: function(e, i, s, r, o) {
            var p, y, c, f, m, l, h, d, a, v, b, g = n.hasData(e) && n.get(e);
            if (g && (f = g.events)) {
                i = (i || '').match(u) || [''], m = i.length;
                while (m--)
                    if (c = be.exec(i[m]) || [], a = b = c[1], v = (c[2] || '').split('.').sort(), a) {
                        h = t.event.special[a] || {}, a = (r ? h.delegateType : h.bindType) || a, d = f[a] || [], c = c[2] && new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)'), y = p = d.length;
                        while (p--) l = d[p], !o && b !== l.origType || s && s.guid !== l.guid || c && !c.test(l.namespace) || r && r !== l.selector && ('**' !== r || !l.selector) || (d.splice(p, 1), l.selector && d.delegateCount--, h.remove && h.remove.call(e, l));
                        y && !d.length && (h.teardown && h.teardown.call(e, v, g.handle) !== !1 || t.removeEvent(e, a, g.handle), delete f[a])
                    } else
                        for (a in f) t.event.remove(e, a + i[m], s, r, !0);
                t.isEmptyObject(f) && n.remove(e, 'handle events')
            }
        },
        dispatch: function(e) {
            e = t.event.fix(e);
            var a, l, o, s, i, c = [],
                u = f.call(arguments),
                h = (n.get(this, 'events') || {})[e.type] || [],
                r = t.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !r.preDispatch || r.preDispatch.call(this, e) !== !1) {
                c = t.event.handlers.call(this, e, h), a = 0;
                while ((s = c[a++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, l = 0;
                    while ((i = s.handlers[l++]) && !e.isImmediatePropagationStopped()) e.rnamespace && !e.rnamespace.test(i.namespace) || (e.handleObj = i, e.data = i.data, o = ((t.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, u), void 0 !== o && (e.result = o) === !1 && (e.preventDefault(), e.stopPropagation()))
                };
                return r.postDispatch && r.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, i) {
            var o, s, r, a, c = [],
                l = i.delegateCount,
                n = e.target;
            if (l && n.nodeType && ('click' !== e.type || isNaN(e.button) || e.button < 1))
                for (; n !== this; n = n.parentNode || this)
                    if (1 === n.nodeType && (n.disabled !== !0 || 'click' !== e.type)) {
                        for (s = [], o = 0; l > o; o++) a = i[o], r = a.selector + ' ', void 0 === s[r] && (s[r] = a.needsContext ? t(r, this).index(n) > -1 : t.find(r, this, null, [n]).length), s[r] && s.push(a);
                        s.length && c.push({
                            elem: n,
                            handlers: s
                        })
                    };
            return l < i.length && c.push({
                elem: this,
                handlers: i.slice(l)
            }), c
        },
        props: 'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
        fixHooks: {},
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
            filter: function(e, t) {
                var o, i, n, r = t.button;
                return null == e.pageX && null != t.clientX && (o = e.target.ownerDocument || s, i = o.documentElement, n = o.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[t.expando]) return e;
            var r, o, a, n = e.type,
                l = e,
                i = this.fixHooks[n];
            i || (this.fixHooks[n] = i = Tt.test(n) ? this.mouseHooks : Ct.test(n) ? this.keyHooks : {}), a = i.props ? this.props.concat(i.props) : this.props, e = new t.Event(l), r = a.length;
            while (r--) o = a[r], e[o] = l[o];
            return e.target || (e.target = s), 3 === e.target.nodeType && (e.target = e.target.parentNode), i.filter ? i.filter(e, l) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ze() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: 'focusin'
            },
            blur: {
                trigger: function() {
                    return this === ze() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: 'focusout'
            },
            click: {
                trigger: function() {
                    return 'checkbox' === this.type && this.click && t.nodeName(this, 'input') ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return t.nodeName(e.target, 'a')
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, t.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, t.Event = function(e, i) {
        return this instanceof t.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? W : x) : this.type = e, i && t.extend(this, i), this.timeStamp = e && e.timeStamp || t.now(), void(this[t.expando] = !0)) : new t.Event(e, i)
    }, t.Event.prototype = {
        constructor: t.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = W, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = W, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = W, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, t.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
    }, function(e, i) {
        t.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var s, r = this,
                    n = e.relatedTarget,
                    o = e.handleObj;
                return n && (n === r || t.contains(r, n)) || (e.type = o.origType, s = o.handler.apply(this, arguments), e.type = i), s
            }
        }
    }), t.fn.extend({
        on: function(e, t, i, n) {
            return te(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return te(this, e, t, i, n, 1)
        },
        off: function(e, i, n) {
            var s, r;
            if (e && e.preventDefault && e.handleObj) return s = e.handleObj, t(e.delegateTarget).off(s.namespace ? s.origType + '.' + s.namespace : s.origType, s.selector, s.handler), this;
            if ('object' == typeof e) {
                for (r in e) this.off(r, i, e[r]);
                return this
            };
            return i !== !1 && 'function' != typeof i || (n = i, i = void 0), n === !1 && (n = x), this.each(function() {
                t.event.remove(this, e, n, i)
            })
        }
    });
    var yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        bt = /<script|<style|<link/i,
        wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, i) {
        return t.nodeName(e, 'table') && t.nodeName(11 !== i.nodeType ? i : i.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e
    };

    function Ht(e) {
        return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e
    };

    function Wt(e) {
        var t = xt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute('type'), e
    };

    function Fe(e, i) {
        var s, u, r, l, c, h, d, a;
        if (1 === i.nodeType) {
            if (n.hasData(e) && (l = n.access(e), c = n.set(i, l), a = l.events)) {
                delete c.handle, c.events = {};
                for (r in a)
                    for (s = 0, u = a[r].length; u > s; s++) t.event.add(i, r, a[r][s])
            };
            o.hasData(e) && (h = o.access(e), d = t.extend({}, h), o.set(i, d))
        }
    };

    function Rt(e, t) {
        var i = t.nodeName.toLowerCase();
        'input' === i && we.test(e.type) ? t.checked = e.checked : 'input' !== i && 'textarea' !== i || (t.defaultValue = e.defaultValue)
    };

    function g(e, i, s, o) {
        i = je.apply([], i);
        var h, m, u, d, l, v, c = 0,
            f = e.length,
            b = f - 1,
            p = i[0],
            y = t.isFunction(p);
        if (y || f > 1 && 'string' == typeof p && !r.checkClone && wt.test(p)) return e.each(function(t) {
            var n = e.eq(t);
            y && (i[0] = p.call(this, t, n.html())), g(n, i, s, o)
        });
        if (f && (h = Oe(i, e[0].ownerDocument, !1, e, o), m = h.firstChild, 1 === h.childNodes.length && (h = m), m || o)) {
            for (u = t.map(a(h, 'script'), Ht), d = u.length; f > c; c++) l = h, c !== b && (l = t.clone(l, !0, !0), d && t.merge(u, a(l, 'script'))), s.call(e[c], l, c);
            if (d)
                for (v = u[u.length - 1].ownerDocument, t.map(u, Wt), c = 0; d > c; c++) l = u[c], ke.test(l.type || '') && !n.access(l, 'globalEval') && t.contains(v, l) && (l.src ? t._evalUrl && t._evalUrl(l.src) : t.globalEval(l.textContent.replace(kt, '')))
        };
        return e
    };

    function He(e, i, n) {
        for (var s, o = i ? t.filter(i, e) : e, r = 0; null != (s = o[r]); r++) n || 1 !== s.nodeType || t.cleanData(a(s)), s.parentNode && (n && t.contains(s.ownerDocument, s) && ee(a(s, 'script')), s.parentNode.removeChild(s));
        return e
    };
    t.extend({
        htmlPrefilter: function(e) {
            return e.replace(yt, '<$1></$2>')
        },
        clone: function(e, i, n) {
            var s, u, l, o, c = e.cloneNode(!0),
                h = t.contains(e.ownerDocument, e);
            if (!(r.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || t.isXMLDoc(e)))
                for (o = a(c), l = a(e), s = 0, u = l.length; u > s; s++) Rt(l[s], o[s]);
            if (i)
                if (n)
                    for (l = l || a(e), o = o || a(c), s = 0, u = l.length; u > s; s++) Fe(l[s], o[s]);
                else Fe(e, c);
            return o = a(c, 'script'), o.length > 0 && ee(o, !h && a(e, 'script')), c
        },
        cleanData: function(e) {
            for (var s, i, r, l = t.event.special, a = 0; void 0 !== (i = e[a]); a++)
                if (j(i)) {
                    if (s = i[n.expando]) {
                        if (s.events)
                            for (r in s.events) l[r] ? t.event.remove(i, r) : t.removeEvent(i, r, s.handle);
                        i[n.expando] = void 0
                    };
                    i[o.expando] && (i[o.expando] = void 0)
                }
        }
    }), t.fn.extend({
        domManip: g,
        detach: function(e) {
            return He(this, e, !0)
        },
        remove: function(e) {
            return He(this, e)
        },
        text: function(e) {
            return d(this, function(e) {
                return void 0 === e ? t.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return g(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return g(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return g(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return g(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, i = 0; null != (e = this[i]); i++) 1 === e.nodeType && (t.cleanData(a(e, !1)), e.textContent = '');
            return this
        },
        clone: function(e, i) {
            return e = null == e ? !1 : e, i = null == i ? e : i, this.map(function() {
                return t.clone(this, e, i)
            })
        },
        html: function(e) {
            return d(this, function(e) {
                var n = this[0] || {},
                    s = 0,
                    r = this.length;
                if (void 0 === e && 1 === n.nodeType) return n.innerHTML;
                if ('string' == typeof e && !bt.test(e) && !c[(xe.exec(e) || ['', ''])[1].toLowerCase()]) {
                    e = t.htmlPrefilter(e);
                    try {
                        for (; r > s; s++) n = this[s] || {}, 1 === n.nodeType && (t.cleanData(a(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (i) {}
                };
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return g(this, arguments, function(i) {
                var n = this.parentNode;
                t.inArray(this, e) < 0 && (t.cleanData(a(this)), n && n.replaceChild(i, this))
            }, e)
        }
    }), t.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function(e, i) {
        t.fn[e] = function(e) {
            for (var s, r = [], o = t(e), a = o.length - 1, n = 0; a >= n; n++) s = n === a ? this : this.clone(!0), t(o[n])[i](s), V.apply(r, s.get());
            return this.pushStack(r)
        }
    });
    var O, ye = {
        HTML: 'block',
        BODY: 'block'
    };

    function We(e, i) {
        var n = t(i.createElement(e)).appendTo(i.body),
            s = t.css(n[0], 'display');
        return n.detach(), s
    };

    function ie(e) {
        var n = s,
            i = ye[e];
        return i || (i = We(e, n), 'none' !== i && i || (O = (O || t('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(n.documentElement), n = O[0].contentDocument, n.write(), n.close(), i = We(e, n), O.detach()), ye[e] = i), i
    };
    var ve = /^margin/,
        Q = new RegExp('^(' + Ce + ')(?!px)[a-z%]+$', 'i'),
        E = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        },
        J = function(e, t, i, n) {
            var r, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            r = i.apply(e, n || []);
            for (s in t) e.style[s] = o[s];
            return r
        },
        S = s.documentElement;
    ! function() {
        var l, o, c, u, n = s.createElement('div'),
            i = s.createElement('div');
        if (i.style) {
            i.style.backgroundClip = 'content-box', i.cloneNode(!0).style.backgroundClip = '', r.clearCloneStyle = 'content-box' === i.style.backgroundClip, n.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', n.appendChild(i);

            function a() {
                i.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', i.innerHTML = '', S.appendChild(n);
                var t = e.getComputedStyle(i);
                l = '1%' !== t.top, u = '2px' === t.marginLeft, o = '4px' === t.width, i.style.marginRight = '50%', c = '4px' === t.marginRight, S.removeChild(n)
            };
            t.extend(r, {
                pixelPosition: function() {
                    return a(), l
                },
                boxSizingReliable: function() {
                    return null == o && a(), o
                },
                pixelMarginRight: function() {
                    return null == o && a(), c
                },
                reliableMarginLeft: function() {
                    return null == o && a(), u
                },
                reliableMarginRight: function() {
                    var r, t = i.appendChild(s.createElement('div'));
                    return t.style.cssText = i.style.cssText = '-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', t.style.marginRight = t.style.width = '0', i.style.width = '1px', S.appendChild(n), r = !parseFloat(e.getComputedStyle(t).marginRight), S.removeChild(n), i.removeChild(t), r
                }
            })
        }
    }();

    function k(e, i, n) {
        var a, l, c, s, o = e.style;
        return n = n || E(e), s = n ? n.getPropertyValue(i) || n[i] : void 0, '' !== s && void 0 !== s || t.contains(e.ownerDocument, e) || (s = t.style(e, i)), n && !r.pixelMarginRight() && Q.test(s) && ve.test(i) && (a = o.width, l = o.minWidth, c = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = a, o.minWidth = l, o.maxWidth = c), void 0 !== s ? s + '' : s
    };

    function ne(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    };
    var gt = /^(none|table(?!-c[ea]).+)/,
        vt = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        },
        pe = {
            letterSpacing: '0',
            fontWeight: '400'
        },
        me = ['Webkit', 'O', 'Moz', 'ms'],
        ge = s.createElement('div').style;

    function Re(e) {
        if (e in ge) return e;
        var i = e[0].toUpperCase() + e.slice(1),
            t = me.length;
        while (t--)
            if (e = me[t] + i, e in ge) return e
    };

    function Be(e, t, i) {
        var n = I.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || 'px') : t
    };

    function qe(e, i, n, s, r) {
        for (var o = n === (s ? 'border' : 'content') ? 4 : 'width' === i ? 1 : 0, a = 0; 4 > o; o += 2) 'margin' === n && (a += t.css(e, n + p[o], !0, r)), s ? ('content' === n && (a -= t.css(e, 'padding' + p[o], !0, r)), 'margin' !== n && (a -= t.css(e, 'border' + p[o] + 'Width', !0, r))) : (a += t.css(e, 'padding' + p[o], !0, r), 'padding' !== n && (a += t.css(e, 'border' + p[o] + 'Width', !0, r)));
        return a
    };

    function Ye(i, n, o) {
        var c = !0,
            a = 'width' === n ? i.offsetWidth : i.offsetHeight,
            l = E(i),
            u = 'border-box' === t.css(i, 'boxSizing', !1, l);
        if (s.msFullscreenElement && e.top !== e && i.getClientRects().length && (a = Math.round(100 * i.getBoundingClientRect()[n])), 0 >= a || null == a) {
            if (a = k(i, n, l), (0 > a || null == a) && (a = i.style[n]), Q.test(a)) return a;
            c = u && (r.boxSizingReliable() || a === i.style[n]), a = parseFloat(a) || 0
        };
        return a + qe(i, n, o || (u ? 'border' : 'content'), c, l) + 'px'
    };

    function Ue(e, i) {
        for (var o, s, l, a = [], r = 0, c = e.length; c > r; r++) s = e[r], s.style && (a[r] = n.get(s, 'olddisplay'), o = s.style.display, i ? (a[r] || 'none' !== o || (s.style.display = ''), '' === s.style.display && P(s) && (a[r] = n.access(s, 'olddisplay', ie(s.nodeName)))) : (l = P(s), 'none' === o && l || n.set(s, 'olddisplay', l ? o : t.css(s, 'display'))));
        for (r = 0; c > r; r++) s = e[r], s.style && (i && 'none' !== s.style.display && '' !== s.style.display || (s.style.display = i ? a[r] || '' : 'none'));
        return e
    };
    t.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = k(e, 'opacity');
                        return '' === i ? '1' : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            'float': 'cssFloat'
        },
        style: function(e, i, n, s) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, c, a, l = t.camelCase(i),
                    u = e.style;
                return i = t.cssProps[l] || (t.cssProps[l] = Re(l) || l), a = t.cssHooks[i] || t.cssHooks[l], void 0 === n ? a && 'get' in a && void 0 !== (o = a.get(e, !1, s)) ? o : u[i] : (c = typeof n, 'string' === c && (o = I.exec(n)) && o[1] && (n = Ee(e, i, o), c = 'number'), null != n && n === n && ('number' === c && (n += o && o[3] || (t.cssNumber[l] ? '' : 'px')), r.clearCloneStyle || '' !== n || 0 !== i.indexOf('background') || (u[i] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(e, n, s)) || (u[i] = n)), void 0)
            }
        },
        css: function(e, i, n, s) {
            var r, l, a, o = t.camelCase(i);
            return i = t.cssProps[o] || (t.cssProps[o] = Re(o) || o), a = t.cssHooks[i] || t.cssHooks[o], a && 'get' in a && (r = a.get(e, !0, n)), void 0 === r && (r = k(e, i, s)), 'normal' === r && i in pe && (r = pe[i]), '' === n || n ? (l = parseFloat(r), n === !0 || isFinite(l) ? l || 0 : r) : r
        }
    }), t.each(['height', 'width'], function(e, i) {
        t.cssHooks[i] = {
            get: function(e, n, s) {
                return n ? gt.test(t.css(e, 'display')) && 0 === e.offsetWidth ? J(e, vt, function() {
                    return Ye(e, i, s)
                }) : Ye(e, i, s) : void 0
            },
            set: function(e, n, s) {
                var r, o = s && E(e),
                    a = s && qe(e, i, s, 'border-box' === t.css(e, 'boxSizing', !1, o), o);
                return a && (r = I.exec(n)) && 'px' !== (r[3] || 'px') && (e.style[i] = n, n = t.css(e, i)), Be(e, n, a)
            }
        }
    }), t.cssHooks.marginLeft = ne(r.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(k(e, 'marginLeft')) || e.getBoundingClientRect().left - J(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + 'px' : void 0
    }), t.cssHooks.marginRight = ne(r.reliableMarginRight, function(e, t) {
        return t ? J(e, {
            display: 'inline-block'
        }, k, [e, 'marginRight']) : void 0
    }), t.each({
        margin: '',
        padding: '',
        border: 'Width'
    }, function(e, i) {
        t.cssHooks[e + i] = {
            expand: function(t) {
                for (var n = 0, r = {}, s = 'string' == typeof t ? t.split(' ') : [t]; 4 > n; n++) r[e + p[n] + i] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, ve.test(e) || (t.cssHooks[e + i].set = Be)
    }), t.fn.extend({
        css: function(e, i) {
            return d(this, function(e, i, n) {
                var r, o, a = {},
                    s = 0;
                if (t.isArray(i)) {
                    for (r = E(e), o = i.length; o > s; s++) a[i[s]] = t.css(e, i[s], !1, r);
                    return a
                };
                return void 0 !== n ? t.style(e, i, n) : t.css(e, i)
            }, e, i, arguments.length > 1)
        },
        show: function() {
            return Ue(this, !0)
        },
        hide: function() {
            return Ue(this)
        },
        toggle: function(e) {
            return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                P(this) ? t(this).show() : t(this).hide()
            })
        }
    });

    function l(e, t, i, n, s) {
        return new l.prototype.init(e, t, i, n, s)
    };
    t.Tween = l, l.prototype = {
        constructor: l,
        init: function(e, i, n, s, r, o) {
            this.elem = e, this.prop = n, this.easing = r || t.easing._default, this.options = i, this.start = this.now = this.cur(), this.end = s, this.unit = o || (t.cssNumber[n] ? '' : 'px')
        },
        cur: function() {
            var e = l.propHooks[this.prop];
            return e && e.get ? e.get(this) : l.propHooks._default.get(this)
        },
        run: function(e) {
            var i, n = l.propHooks[this.prop];
            return this.options.duration ? this.pos = i = t.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = i = e, this.now = (this.end - this.start) * i + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : l.propHooks._default.set(this), this
        }
    }, l.prototype.init.prototype = l.prototype, l.propHooks = {
        _default: {
            get: function(e) {
                var i;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (i = t.css(e.elem, e.prop, ''), i && 'auto' !== i ? i : 0)
            },
            set: function(e) {
                t.fx.step[e.prop] ? t.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[t.cssProps[e.prop]] && !t.cssHooks[e.prop] ? e.elem[e.prop] = e.now : t.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, l.propHooks.scrollTop = l.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, t.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: 'swing'
    }, t.fx = l.prototype.init, t.fx.step = {};
    var y, M, pt = /^(?:toggle|show|hide)$/,
        mt = /queueHooks$/;

    function Xe() {
        return e.setTimeout(function() {
            y = void 0
        }), y = t.now()
    };

    function R(e, t) {
        var n, s = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > s; s += 2 - t) n = p[s], i['margin' + n] = i['padding' + n] = e;
        return t && (i.opacity = i.width = e), i
    };

    function Ke(e, t, i) {
        for (var s, r = (h.tweeners[t] || []).concat(h.tweeners['*']), n = 0, o = r.length; o > n; n++)
            if (s = r[n].call(i, t, e)) return s
    };

    function Bt(e, i, s) {
        var r, d, m, f, a, g, c, v, h = this,
            p = {},
            l = e.style,
            u = e.nodeType && P(e),
            o = n.get(e, 'fxshow');
        s.queue || (a = t._queueHooks(e, 'fx'), null == a.unqueued && (a.unqueued = 0, g = a.empty.fire, a.empty.fire = function() {
            a.unqueued || g()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, t.queue(e, 'fx').length || a.empty.fire()
            })
        })), 1 === e.nodeType && ('height' in i || 'width' in i) && (s.overflow = [l.overflow, l.overflowX, l.overflowY], c = t.css(e, 'display'), v = 'none' === c ? n.get(e, 'olddisplay') || ie(e.nodeName) : c, 'inline' === v && 'none' === t.css(e, 'float') && (l.display = 'inline-block')), s.overflow && (l.overflow = 'hidden', h.always(function() {
            l.overflow = s.overflow[0], l.overflowX = s.overflow[1], l.overflowY = s.overflow[2]
        }));
        for (r in i)
            if (d = i[r], pt.exec(d)) {
                if (delete i[r], m = m || 'toggle' === d, d === (u ? 'hide' : 'show')) {
                    if ('show' !== d || !o || void 0 === o[r]) continue;
                    u = !0
                };
                p[r] = o && o[r] || t.style(e, r)
            } else c = void 0;
        if (t.isEmptyObject(p)) 'inline' === ('none' === c ? ie(e.nodeName) : c) && (l.display = c);
        else {
            o ? 'hidden' in o && (u = o.hidden) : o = n.access(e, 'fxshow', {}), m && (o.hidden = !u), u ? t(e).show() : h.done(function() {
                t(e).hide()
            }), h.done(function() {
                var i;
                n.remove(e, 'fxshow');
                for (i in p) t.style(e, i, p[i])
            });
            for (r in p) f = Ke(u ? o[r] : 0, r, h), r in o || (o[r] = f.start, u && (f.end = f.start, f.start = 'width' === r || 'height' === r ? 1 : 0))
        }
    };

    function qt(e, i) {
        var n, r, o, s, a;
        for (n in e)
            if (r = t.camelCase(n), o = i[r], s = e[n], t.isArray(s) && (o = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), a = t.cssHooks[r], a && 'expand' in a) {
                s = a.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], i[n] = o)
            } else i[r] = o
    };

    function h(e, i, n) {
        var o, a, l = 0,
            d = h.prefilters.length,
            r = t.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var l = y || Xe(), t = Math.max(0, s.startTime + s.duration - l), c = t / s.duration || 0, i = 1 - c, n = 0, o = s.tweens.length; o > n; n++) s.tweens[n].run(i);
                return r.notifyWith(e, [s, i, t]), 1 > i && o ? t : (r.resolveWith(e, [s]), !1)
            },
            s = r.promise({
                elem: e,
                props: t.extend({}, i),
                opts: t.extend(!0, {
                    specialEasing: {},
                    easing: t.easing._default
                }, n),
                originalProperties: i,
                originalOptions: n,
                startTime: y || Xe(),
                duration: n.duration,
                tweens: [],
                createTween: function(i, n) {
                    var r = t.Tween(e, s.opts, i, n, s.opts.specialEasing[i] || s.opts.easing);
                    return s.tweens.push(r), r
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? s.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; n > i; i++) s.tweens[i].run(1);
                    return t ? (r.notifyWith(e, [s, 1, 0]), r.resolveWith(e, [s, t])) : r.rejectWith(e, [s, t]), this
                }
            }),
            c = s.props;
        for (qt(c, s.opts.specialEasing); d > l; l++)
            if (o = h.prefilters[l].call(s, e, c, s.opts)) return t.isFunction(o.stop) && (t._queueHooks(s.elem, s.opts.queue).stop = t.proxy(o.stop, o)), o;
        return t.map(c, Ke, s), t.isFunction(s.opts.start) && s.opts.start.call(e, s), t.fx.timer(t.extend(u, {
            elem: e,
            anim: s,
            queue: s.opts.queue
        })), s.progress(s.opts.progress).done(s.opts.done, s.opts.complete).fail(s.opts.fail).always(s.opts.always)
    };
    t.Animation = t.extend(h, {
            tweeners: {
                '*': [function(e, t) {
                    var i = this.createTween(e, t);
                    return Ee(i.elem, e, I.exec(t), i), i
                }]
            },
            tweener: function(e, i) {
                t.isFunction(e) ? (i = e, e = ['*']) : e = e.match(u);
                for (var n, s = 0, r = e.length; r > s; s++) n = e[s], h.tweeners[n] = h.tweeners[n] || [], h.tweeners[n].unshift(i)
            },
            prefilters: [Bt],
            prefilter: function(e, t) {
                t ? h.prefilters.unshift(e) : h.prefilters.push(e)
            }
        }), t.speed = function(e, i, n) {
            var s = e && 'object' == typeof e ? t.extend({}, e) : {
                complete: n || !n && i || t.isFunction(e) && e,
                duration: e,
                easing: n && i || i && !t.isFunction(i) && i
            };
            return s.duration = t.fx.off ? 0 : 'number' == typeof s.duration ? s.duration : s.duration in t.fx.speeds ? t.fx.speeds[s.duration] : t.fx.speeds._default, null != s.queue && s.queue !== !0 || (s.queue = 'fx'), s.old = s.complete, s.complete = function() {
                t.isFunction(s.old) && s.old.call(this), s.queue && t.dequeue(this, s.queue)
            }, s
        }, t.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(P).css('opacity', 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, i, s, r) {
                var l = t.isEmptyObject(e),
                    a = t.speed(i, s, r),
                    o = function() {
                        var i = h(this, t.extend({}, e), a);
                        (l || n.get(this, 'finish')) && i.stop(!0)
                    };
                return o.finish = o, l || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
            },
            stop: function(e, i, s) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(s)
                };
                return 'string' != typeof e && (s = i, i = e, e = void 0), i && e !== !1 && this.queue(e || 'fx', []), this.each(function() {
                    var l = !0,
                        i = null != e && e + 'queueHooks',
                        a = t.timers,
                        o = n.get(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && mt.test(i) && r(o[i]);
                    for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(s), l = !1, a.splice(i, 1));
                    !l && s || t.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || 'fx'), this.each(function() {
                    var i, o = n.get(this),
                        s = o[e + 'queue'],
                        a = o[e + 'queueHooks'],
                        r = t.timers,
                        l = s ? s.length : 0;
                    for (o.finish = !0, t.queue(this, e, []), a && a.stop && a.stop.call(this, !0), i = r.length; i--;) r[i].elem === this && r[i].queue === e && (r[i].anim.stop(!0), r.splice(i, 1));
                    for (i = 0; l > i; i++) s[i] && s[i].finish && s[i].finish.call(this);
                    delete o.finish
                })
            }
        }), t.each(['toggle', 'show', 'hide'], function(e, i) {
            var n = t.fn[i];
            t.fn[i] = function(e, t, s) {
                return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(R(i, !0), e, t, s)
            }
        }), t.each({
            slideDown: R('show'),
            slideUp: R('hide'),
            slideToggle: R('toggle'),
            fadeIn: {
                opacity: 'show'
            },
            fadeOut: {
                opacity: 'hide'
            },
            fadeToggle: {
                opacity: 'toggle'
            }
        }, function(e, i) {
            t.fn[e] = function(e, t, n) {
                return this.animate(i, e, t, n)
            }
        }), t.timers = [], t.fx.tick = function() {
            var n, e = 0,
                i = t.timers;
            for (y = t.now(); e < i.length; e++) n = i[e], n() || i[e] !== n || i.splice(e--, 1);
            i.length || t.fx.stop(), y = void 0
        }, t.fx.timer = function(e) {
            t.timers.push(e), e() ? t.fx.start() : t.timers.pop()
        }, t.fx.interval = 13, t.fx.start = function() {
            M || (M = e.setInterval(t.fx.tick, t.fx.interval))
        }, t.fx.stop = function() {
            e.clearInterval(M), M = null
        }, t.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, t.fn.delay = function(i, n) {
            return i = t.fx ? t.fx.speeds[i] || i : i, n = n || 'fx', this.queue(n, function(t, n) {
                var s = e.setTimeout(t, i);
                n.stop = function() {
                    e.clearTimeout(s)
                }
            })
        },
        function() {
            var e = s.createElement('input'),
                t = s.createElement('select'),
                i = t.appendChild(s.createElement('option'));
            e.type = 'checkbox', r.checkOn = '' !== e.value, r.optSelected = i.selected, t.disabled = !0, r.optDisabled = !i.disabled, e = s.createElement('input'), e.value = 't', e.type = 'radio', r.radioValue = 't' === e.value
        }();
    var fe, D = t.expr.attrHandle;
    t.fn.extend({
        attr: function(e, i) {
            return d(this, t.attr, e, i, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                t.removeAttr(this, e)
            })
        }
    }), t.extend({
        attr: function(e, i, n) {
            var s, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 'undefined' == typeof e.getAttribute ? t.prop(e, i, n) : (1 === o && t.isXMLDoc(e) || (i = i.toLowerCase(), r = t.attrHooks[i] || (t.expr.match.bool.test(i) ? fe : void 0)), void 0 !== n ? null === n ? void t.removeAttr(e, i) : r && 'set' in r && void 0 !== (s = r.set(e, n, i)) ? s : (e.setAttribute(i, n + ''), n) : r && 'get' in r && null !== (s = r.get(e, i)) ? s : (s = t.find.attr(e, i), null == s ? void 0 : s))
        },
        attrHooks: {
            type: {
                set: function(e, i) {
                    if (!r.radioValue && 'radio' === i && t.nodeName(e, 'input')) {
                        var n = e.value;
                        return e.setAttribute('type', i), n && (e.value = n), i
                    }
                }
            }
        },
        removeAttr: function(e, i) {
            var n, s, o = 0,
                r = i && i.match(u);
            if (r && 1 === e.nodeType)
                while (n = r[o++]) s = t.propFix[n] || n, t.expr.match.bool.test(n) && (e[s] = !1), e.removeAttribute(n)
        }
    }), fe = {
        set: function(e, i, n) {
            return i === !1 ? t.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, t.each(t.expr.match.bool.source.match(/\w+/g), function(e, i) {
        var n = D[i] || t.find.attr;
        D[i] = function(e, t, i) {
            var s, r;
            return i || (r = D[t], D[t] = s, s = null != n(e, t, i) ? t.toLowerCase() : null, D[t] = r), s
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;
    t.fn.extend({
        prop: function(e, i) {
            return d(this, t.prop, e, i, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[t.propFix[e] || e]
            })
        }
    }), t.extend({
        prop: function(e, i, n) {
            var r, s, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && t.isXMLDoc(e) || (i = t.propFix[i] || i, s = t.propHooks[i]), void 0 !== n ? s && 'set' in s && void 0 !== (r = s.set(e, n, i)) ? r : e[i] = n : s && 'get' in s && null !== (r = s.get(e, i)) ? r : e[i]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var i = t.find.attr(e, 'tabindex');
                    return i ? parseInt(i, 10) : dt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            'for': 'htmlFor',
            'class': 'className'
        }
    }), r.optSelected || (t.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), t.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function() {
        t.propFix[this.toLowerCase()] = this
    });
    var K = /[\t\r\n\f]/g;

    function v(e) {
        return e.getAttribute && e.getAttribute('class') || ''
    };
    t.fn.extend({
        addClass: function(e) {
            var a, i, n, s, r, l, o, c = 0;
            if (t.isFunction(e)) return this.each(function(i) {
                t(this).addClass(e.call(this, i, v(this)))
            });
            if ('string' == typeof e && e) {
                a = e.match(u) || [];
                while (i = this[c++])
                    if (s = v(i), n = 1 === i.nodeType && (' ' + s + ' ').replace(K, ' ')) {
                        l = 0;
                        while (r = a[l++]) n.indexOf(' ' + r + ' ') < 0 && (n += r + ' ');
                        o = t.trim(n), s !== o && i.setAttribute('class', o)
                    }
            };
            return this
        },
        removeClass: function(e) {
            var a, n, i, s, r, l, o, c = 0;
            if (t.isFunction(e)) return this.each(function(i) {
                t(this).removeClass(e.call(this, i, v(this)))
            });
            if (!arguments.length) return this.attr('class', '');
            if ('string' == typeof e && e) {
                a = e.match(u) || [];
                while (n = this[c++])
                    if (s = v(n), i = 1 === n.nodeType && (' ' + s + ' ').replace(K, ' ')) {
                        l = 0;
                        while (r = a[l++])
                            while (i.indexOf(' ' + r + ' ') > -1) i = i.replace(' ' + r + ' ', ' ');
                        o = t.trim(i), s !== o && n.setAttribute('class', o)
                    }
            };
            return this
        },
        toggleClass: function(e, i) {
            var s = typeof e;
            return 'boolean' == typeof i && 'string' === s ? i ? this.addClass(e) : this.removeClass(e) : t.isFunction(e) ? this.each(function(n) {
                t(this).toggleClass(e.call(this, n, v(this), i), i)
            }) : this.each(function() {
                var i, o, r, a;
                if ('string' === s) {
                    o = 0, r = t(this), a = e.match(u) || [];
                    while (i = a[o++]) r.hasClass(i) ? r.removeClass(i) : r.addClass(i)
                } else void 0 !== e && 'boolean' !== s || (i = v(this), i && n.set(this, '__className__', i), this.setAttribute && this.setAttribute('class', i || e === !1 ? '' : n.get(this, '__className__') || ''))
            })
        },
        hasClass: function(e) {
            var i, t, n = 0;
            i = ' ' + e + ' ';
            while (t = this[n++])
                if (1 === t.nodeType && (' ' + v(t) + ' ').replace(K, ' ').indexOf(i) > -1) return !0;
            return !1
        }
    });
    var ut = /\r/g,
        ht = /[\x20\t\r\n\f]+/g;
    t.fn.extend({
        val: function(e) {
            var i, n, r, s = this[0]; {
                if (arguments.length) return r = t.isFunction(e), this.each(function(n) {
                    var s;
                    1 === this.nodeType && (s = r ? e.call(this, n, t(this).val()) : e, null == s ? s = '' : 'number' == typeof s ? s += '' : t.isArray(s) && (s = t.map(s, function(e) {
                        return null == e ? '' : e + ''
                    })), i = t.valHooks[this.type] || t.valHooks[this.nodeName.toLowerCase()], i && 'set' in i && void 0 !== i.set(this, s, 'value') || (this.value = s))
                });
                if (s) return i = t.valHooks[s.type] || t.valHooks[s.nodeName.toLowerCase()], i && 'get' in i && void 0 !== (n = i.get(s, 'value')) ? n : (n = s.value, 'string' == typeof n ? n.replace(ut, '') : null == n ? '' : n)
            }
        }
    }), t.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var i = t.find.attr(e, 'value');
                    return null != i ? i : t.trim(t.text(e)).replace(ht, ' ')
                }
            },
            select: {
                get: function(e) {
                    for (var a, i, l = e.options, n = e.selectedIndex, s = 'select-one' === e.type || 0 > n, c = s ? null : [], u = s ? n + 1 : l.length, o = 0 > n ? u : s ? n : 0; u > o; o++)
                        if (i = l[o], (i.selected || o === n) && (r.optDisabled ? !i.disabled : null === i.getAttribute('disabled')) && (!i.parentNode.disabled || !t.nodeName(i.parentNode, 'optgroup'))) {
                            if (a = t(i).val(), s) return a;
                            c.push(a)
                        };
                    return c
                },
                set: function(e, i) {
                    var s, n, r = e.options,
                        o = t.makeArray(i),
                        a = r.length;
                    while (a--) n = r[a], (n.selected = t.inArray(t.valHooks.option.get(n), o) > -1) && (s = !0);
                    return s || (e.selectedIndex = -1), o
                }
            }
        }
    }), t.each(['radio', 'checkbox'], function() {
        t.valHooks[this] = {
            set: function(e, i) {
                return t.isArray(i) ? e.checked = t.inArray(t(e).val(), i) > -1 : void 0
            }
        }, r.checkOn || (t.valHooks[this].get = function(e) {
            return null === e.getAttribute('value') ? 'on' : e.value
        })
    });
    var de = /^(?:focusinfocus|focusoutblur)$/;
    t.extend(t.event, {
        trigger: function(i, r, o, a) {
            var g, l, u, v, d, f, h, m = [o || s],
                c = A.call(i, 'type') ? i.type : i,
                p = A.call(i, 'namespace') ? i.namespace.split('.') : [];
            if (l = u = o = o || s, 3 !== o.nodeType && 8 !== o.nodeType && !de.test(c + t.event.triggered) && (c.indexOf('.') > -1 && (p = c.split('.'), c = p.shift(), p.sort()), d = c.indexOf(':') < 0 && 'on' + c, i = i[t.expando] ? i : new t.Event(c, 'object' == typeof i && i), i.isTrigger = a ? 2 : 3, i.namespace = p.join('.'), i.rnamespace = i.namespace ? new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, i.result = void 0, i.target || (i.target = o), r = null == r ? [i] : t.makeArray(r, [i]), h = t.event.special[c] || {}, a || !h.trigger || h.trigger.apply(o, r) !== !1)) {
                if (!a && !h.noBubble && !t.isWindow(o)) {
                    for (v = h.delegateType || c, de.test(v + c) || (l = l.parentNode); l; l = l.parentNode) m.push(l), u = l;
                    u === (o.ownerDocument || s) && m.push(u.defaultView || u.parentWindow || e)
                };
                g = 0;
                while ((l = m[g++]) && !i.isPropagationStopped()) i.type = g > 1 ? v : h.bindType || c, f = (n.get(l, 'events') || {})[i.type] && n.get(l, 'handle'), f && f.apply(l, r), f = d && l[d], f && f.apply && j(l) && (i.result = f.apply(l, r), i.result === !1 && i.preventDefault());
                return i.type = c, a || i.isDefaultPrevented() || h._default && h._default.apply(m.pop(), r) !== !1 || !j(o) || d && t.isFunction(o[c]) && !t.isWindow(o) && (u = o[d], u && (o[d] = null), t.event.triggered = c, o[c](), t.event.triggered = void 0, u && (o[d] = u)), i.result
            }
        },
        simulate: function(e, i, n) {
            var s = t.extend(new t.Event, n, {
                type: e,
                isSimulated: !0
            });
            t.event.trigger(s, null, i), s.isDefaultPrevented() && n.preventDefault()
        }
    }), t.fn.extend({
        trigger: function(e, i) {
            return this.each(function() {
                t.event.trigger(e, i, this)
            })
        },
        triggerHandler: function(e, i) {
            var n = this[0];
            return n ? t.event.trigger(e, i, n, !0) : void 0
        }
    }), t.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function(e, i) {
        t.fn[i] = function(e, t) {
            return arguments.length > 0 ? this.on(i, null, e, t) : this.trigger(i)
        }
    }), t.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), r.focusin = 'onfocusin' in e, r.focusin || t.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function(e, i) {
        var s = function(e) {
            t.event.simulate(i, e.target, t.event.fix(e))
        };
        t.event.special[i] = {
            setup: function() {
                var t = this.ownerDocument || this,
                    r = n.access(t, i);
                r || t.addEventListener(e, s, !0), n.access(t, i, (r || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this,
                    r = n.access(t, i) - 1;
                r ? n.access(t, i, r) : (t.removeEventListener(e, s, !0), n.remove(t, i))
            }
        }
    });
    var T = e.location,
        U = t.now(),
        X = /\?/;
    t.parseJSON = function(e) {
        return JSON.parse(e + '')
    }, t.parseXML = function(i) {
        var s;
        if (!i || 'string' != typeof i) return null;
        try {
            s = (new e.DOMParser).parseFromString(i, 'text/xml')
        } catch (n) {
            s = void 0
        };
        return s && !s.getElementsByTagName('parsererror').length || t.error('Invalid XML: ' + i), s
    };
    var rt = /#.*$/,
        ce = /([?&])_=[^&]*/,
        ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        at = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        lt = /^(?:GET|HEAD)$/,
        ct = /^\/\//,
        ue = {},
        q = {},
        he = '*/'.concat('*'),
        Y = s.createElement('a');
    Y.href = T.href;

    function Qe(e) {
        return function(i, n) {
            'string' != typeof i && (n = i, i = '*');
            var s, r = 0,
                o = i.toLowerCase().match(u) || [];
            if (t.isFunction(n))
                while (s = o[r++]) '+' === s[0] ? (s = s.slice(1) || '*', (e[s] = e[s] || []).unshift(n)) : (e[s] = e[s] || []).push(n)
        }
    };

    function Je(e, i, n, s) {
        var r = {},
            a = e === q;

        function o(l) {
            var c;
            return r[l] = !0, t.each(e[l] || [], function(e, t) {
                var l = t(i, n, s);
                return 'string' != typeof l || a || r[l] ? a ? !(c = l) : void 0 : (i.dataTypes.unshift(l), o(l), !1)
            }), c
        };
        return o(i.dataTypes[0]) || !r['*'] && o('*')
    };

    function se(e, i) {
        var n, s, r = t.ajaxSettings.flatOptions || {};
        for (n in i) void 0 !== i[n] && ((r[n] ? e : s || (s = {}))[n] = i[n]);
        return s && t.extend(!0, e, s), e
    };

    function Yt(e, t, i) {
        var o, s, r, a, l = e.contents,
            n = e.dataTypes;
        while ('*' === n[0]) n.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader('Content-Type'));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    n.unshift(s);
                    break
                };
        if (n[0] in i) r = n[0];
        else {
            for (s in i) {
                if (!n[0] || e.converters[s + ' ' + n[0]]) {
                    r = s;
                    break
                };
                a || (a = s)
            };
            r = r || a
        };
        return r ? (r !== n[0] && n.unshift(r), i[r]) : void 0
    };

    function Ut(e, t, i, n) {
        var u, r, o, c, a, l = {},
            h = e.dataTypes.slice();
        if (h[1])
            for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
        r = h.shift();
        while (r)
            if (e.responseFields[r] && (i[e.responseFields[r]] = t), !a && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = r, r = h.shift())
                if ('*' === r) r = a;
                else if ('*' !== a && a !== r) {
            if (o = l[a + ' ' + r] || l['* ' + r], !o)
                for (u in l)
                    if (c = u.split(' '), c[1] === r && (o = l[a + ' ' + c[0]] || l['* ' + c[0]])) {
                        o === !0 ? o = l[u] : l[u] !== !0 && (r = c[0], h.unshift(c[1]));
                        break
                    };
            if (o !== !0)
                if (o && e['throws']) t = o(t);
                else try {
                    t = o(t)
                } catch (s) {
                    return {
                        state: 'parsererror',
                        error: o ? s : 'No conversion from ' + a + ' to ' + r
                    }
                }
        };
        return {
            state: 'success',
            data: t
        }
    };
    t.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: T.href,
            type: 'GET',
            isLocal: at.test(T.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': he,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
            },
            converters: {
                '* text': String,
                'text html': !0,
                'text json': t.parseJSON,
                'text xml': t.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, i) {
            return i ? se(se(e, t.ajaxSettings), i) : se(t.ajaxSettings, e)
        },
        ajaxPrefilter: Qe(ue),
        ajaxTransport: Qe(q),
        ajax: function(i, n) {
            'object' == typeof i && (n = i, i = void 0), n = n || {};
            var p, l, b, g, w, d, m, f, r = t.ajaxSetup({}, n),
                h = r.context || r,
                x = r.context && (h.nodeType || h.jquery) ? t(h) : t.event,
                k = t.Deferred(),
                C = t.Callbacks('once memory'),
                v = r.statusCode || {},
                D = {},
                S = {},
                c = 0,
                I = 'canceled',
                o = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === c) {
                            if (!g) {
                                g = {};
                                while (t = ot.exec(b)) g[t[1].toLowerCase()] = t[2]
                            };
                            t = g[e.toLowerCase()]
                        };
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === c ? b : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return c || (e = S[i] = S[i] || e, D[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return c || (r.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > c)
                                for (t in e) v[t] = [v[t], e[t]];
                            else o.always(e[o.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || I;
                        return p && p.abort(t), y(0, t), this
                    }
                };
            if (k.promise(o).complete = C.add, o.success = o.done, o.error = o.fail, r.url = ((i || r.url || T.href) + '').replace(rt, '').replace(ct, T.protocol + '//'), r.type = n.method || n.type || r.method || r.type, r.dataTypes = t.trim(r.dataType || '*').toLowerCase().match(u) || [''], null == r.crossDomain) {
                d = s.createElement('a');
                try {
                    d.href = r.url, d.href = d.href, r.crossDomain = Y.protocol + '//' + Y.host != d.protocol + '//' + d.host
                } catch (a) {
                    r.crossDomain = !0
                }
            };
            if (r.data && r.processData && 'string' != typeof r.data && (r.data = t.param(r.data, r.traditional)), Je(ue, r, n, o), 2 === c) return o;
            m = t.event && r.global, m && 0 === t.active++ && t.event.trigger('ajaxStart'), r.type = r.type.toUpperCase(), r.hasContent = !lt.test(r.type), l = r.url, r.hasContent || (r.data && (l = r.url += (X.test(l) ? '&' : '?') + r.data, delete r.data), r.cache === !1 && (r.url = ce.test(l) ? l.replace(ce, '$1_=' + U++) : l + (X.test(l) ? '&' : '?') + '_=' + U++)), r.ifModified && (t.lastModified[l] && o.setRequestHeader('If-Modified-Since', t.lastModified[l]), t.etag[l] && o.setRequestHeader('If-None-Match', t.etag[l])), (r.data && r.hasContent && r.contentType !== !1 || n.contentType) && o.setRequestHeader('Content-Type', r.contentType), o.setRequestHeader('Accept', r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ('*' !== r.dataTypes[0] ? ', ' + he + '; q=0.01' : '') : r.accepts['*']);
            for (f in r.headers) o.setRequestHeader(f, r.headers[f]);
            if (r.beforeSend && (r.beforeSend.call(h, o, r) === !1 || 2 === c)) return o.abort();
            I = 'abort';
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) o[f](r[f]);
            if (p = Je(q, r, n, o)) {
                if (o.readyState = 1, m && x.trigger('ajaxSend', [o, r]), 2 === c) return o;
                r.async && r.timeout > 0 && (w = e.setTimeout(function() {
                    o.abort('timeout')
                }, r.timeout));
                try {
                    c = 1, p.send(D, y)
                } catch (a) {
                    if (!(2 > c)) throw a;
                    y(-1, a)
                }
            } else y(-1, 'No Transport');

            function y(i, n, s, a) {
                var d, T, y, f, g, u = n;
                2 !== c && (c = 2, w && e.clearTimeout(w), p = void 0, b = a || '', o.readyState = i > 0 ? 4 : 0, d = i >= 200 && 300 > i || 304 === i, s && (f = Yt(r, o, s)), f = Ut(r, f, o, d), d ? (r.ifModified && (g = o.getResponseHeader('Last-Modified'), g && (t.lastModified[l] = g), g = o.getResponseHeader('etag'), g && (t.etag[l] = g)), 204 === i || 'HEAD' === r.type ? u = 'nocontent' : 304 === i ? u = 'notmodified' : (u = f.state, T = f.data, y = f.error, d = !y)) : (y = u, !i && u || (u = 'error', 0 > i && (i = 0))), o.status = i, o.statusText = (n || u) + '', d ? k.resolveWith(h, [T, u, o]) : k.rejectWith(h, [o, u, y]), o.statusCode(v), v = void 0, m && x.trigger(d ? 'ajaxSuccess' : 'ajaxError', [o, r, d ? T : y]), C.fireWith(h, [o, u]), m && (x.trigger('ajaxComplete', [o, r]), --t.active || t.event.trigger('ajaxStop')))
            };
            return o
        },
        getJSON: function(e, i, n) {
            return t.get(e, i, n, 'json')
        },
        getScript: function(e, i) {
            return t.get(e, void 0, i, 'script')
        }
    }), t.each(['get', 'post'], function(e, i) {
        t[i] = function(e, n, s, r) {
            return t.isFunction(n) && (r = r || s, s = n, n = void 0), t.ajax(t.extend({
                url: e,
                type: i,
                dataType: r,
                data: n,
                success: s
            }, t.isPlainObject(e) && e))
        }
    }), t._evalUrl = function(e) {
        return t.ajax({
            url: e,
            type: 'GET',
            dataType: 'script',
            async: !1,
            global: !1,
            'throws': !0
        })
    }, t.fn.extend({
        wrapAll: function(e) {
            var i;
            return t.isFunction(e) ? this.each(function(i) {
                t(this).wrapAll(e.call(this, i))
            }) : (this[0] && (i = t(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && i.insertBefore(this[0]), i.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return t.isFunction(e) ? this.each(function(i) {
                t(this).wrapInner(e.call(this, i))
            }) : this.each(function() {
                var i = t(this),
                    n = i.contents();
                n.length ? n.wrapAll(e) : i.append(e)
            })
        },
        wrap: function(e) {
            var i = t.isFunction(e);
            return this.each(function(n) {
                t(this).wrapAll(i ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                t.nodeName(this, 'body') || t(this).replaceWith(this.childNodes)
            }).end()
        }
    }), t.expr.filters.hidden = function(e) {
        return !t.expr.filters.visible(e)
    }, t.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var tt = /%20/g,
        it = /\[\]$/,
        le = /\r?\n/g,
        nt = /^(?:submit|button|image|reset|file)$/i,
        st = /^(?:input|select|textarea|keygen)/i;

    function re(e, i, n, s) {
        var r;
        if (t.isArray(i)) t.each(i, function(t, i) {
            n || it.test(e) ? s(e, i) : re(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, s)
        });
        else if (n || 'object' !== t.type(i)) s(e, i);
        else
            for (r in i) re(e + '[' + r + ']', i[r], n, s)
    };
    t.param = function(e, i) {
        var n, s = [],
            r = function(e, i) {
                i = t.isFunction(i) ? i() : null == i ? '' : i, s[s.length] = encodeURIComponent(e) + '=' + encodeURIComponent(i)
            };
        if (void 0 === i && (i = t.ajaxSettings && t.ajaxSettings.traditional), t.isArray(e) || e.jquery && !t.isPlainObject(e)) t.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) re(n, e[n], i, r);
        return s.join('&').replace(tt, '+')
    }, t.fn.extend({
        serialize: function() {
            return t.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = t.prop(this, 'elements');
                return e ? t.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !t(this).is(':disabled') && st.test(this.nodeName) && !nt.test(e) && (this.checked || !we.test(e))
            }).map(function(e, i) {
                var n = t(this).val();
                return null == n ? null : t.isArray(n) ? t.map(n, function(e) {
                    return {
                        name: i.name,
                        value: e.replace(le, '\r\n')
                    }
                }) : {
                    name: i.name,
                    value: n.replace(le, '\r\n')
                }
            }).get()
        }
    }), t.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var et = {
            0: 200,
            1223: 204
        },
        C = t.ajaxSettings.xhr();
    r.cors = !!C && 'withCredentials' in C, r.ajax = C = !!C, t.ajaxTransport(function(t) {
        var i, n;
        return r.cors || C && !t.crossDomain ? {
            send: function(s, r) {
                var l, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (l in t.xhrFields) a[l] = t.xhrFields[l];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || s['X-Requested-With'] || (s['X-Requested-With'] = 'XMLHttpRequest');
                for (l in s) a.setRequestHeader(l, s[l]);
                i = function(e) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, 'abort' === e ? a.abort() : 'error' === e ? 'number' != typeof a.status ? r(0, 'error') : r(a.status, a.statusText) : r(et[a.status] || a.status, a.statusText, 'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = i(), n = a.onerror = i('error'), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        i && n()
                    })
                }, i = i('abort');
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (i) throw o
                }
            },
            abort: function() {
                i && i()
            }
        } : void 0
    }), t.ajaxSetup({
        accepts: {
            script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            'text script': function(e) {
                return t.globalEval(e), e
            }
        }
    }), t.ajaxPrefilter('script', function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET')
    }), t.ajaxTransport('script', function(e) {
        if (e.crossDomain) {
            var n, i;
            return {
                send: function(r, o) {
                    n = t('<script>').prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on('load error', i = function(e) {
                        n.remove(), i = null, e && o('error' === e.type ? 404 : 200, e.type)
                    }), s.head.appendChild(n[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var ae = [],
        B = /(=)\?(?=&|$)|\?\?/;
    t.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function() {
            var e = ae.pop() || t.expando + '_' + U++;
            return this[e] = !0, e
        }
    }), t.ajaxPrefilter('json jsonp', function(i, n, s) {
        var r, o, a, l = i.jsonp !== !1 && (B.test(i.url) ? 'url' : 'string' == typeof i.data && 0 === (i.contentType || '').indexOf('application/x-www-form-urlencoded') && B.test(i.data) && 'data');
        return l || 'jsonp' === i.dataTypes[0] ? (r = i.jsonpCallback = t.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(B, '$1' + r) : i.jsonp !== !1 && (i.url += (X.test(i.url) ? '&' : '?') + i.jsonp + '=' + r), i.converters['script json'] = function() {
            return a || t.error(r + ' was not called'), a[0]
        }, i.dataTypes[0] = 'json', o = e[r], e[r] = function() {
            a = arguments
        }, s.always(function() {
            void 0 === o ? t(e).removeProp(r) : e[r] = o, i[r] && (i.jsonpCallback = n.jsonpCallback, ae.push(r)), a && t.isFunction(o) && o(a[0]), a = o = void 0
        }), 'script') : void 0
    }), t.parseHTML = function(e, i, n) {
        if (!e || 'string' != typeof e) return null;
        'boolean' == typeof i && (n = i, i = !1), i = i || s;
        var r = Pe.exec(e),
            o = !n && [];
        return r ? [i.createElement(r[1])] : (r = Oe([e], i, o), o && o.length && t(o).remove(), t.merge([], r.childNodes))
    };
    var oe = t.fn.load;
    t.fn.load = function(e, i, n) {
        if ('string' != typeof e && oe) return oe.apply(this, arguments);
        var s, a, l, r = this,
            o = e.indexOf(' ');
        return o > -1 && (s = t.trim(e.slice(o)), e = e.slice(0, o)), t.isFunction(i) ? (n = i, i = void 0) : i && 'object' == typeof i && (a = 'POST'), r.length > 0 && t.ajax({
            url: e,
            type: a || 'GET',
            dataType: 'html',
            data: i
        }).done(function(e) {
            l = arguments, r.html(s ? t('<div>').append(t.parseHTML(e)).find(s) : e)
        }).always(n && function(e, t) {
            r.each(function() {
                n.apply(this, l || [e.responseText, t, e])
            })
        }), this
    }, t.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function(e, i) {
        t.fn[i] = function(e) {
            return this.on(i, e)
        }
    }), t.expr.filters.animated = function(e) {
        return t.grep(t.timers, function(t) {
            return e === t.elem
        }).length
    };

    function Ve(e) {
        return t.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    };
    t.offset = {
        setOffset: function(e, i, n) {
            var o, a, l, c, s, u, f, h = t.css(e, 'position'),
                d = t(e),
                r = {};
            'static' === h && (e.style.position = 'relative'), s = d.offset(), l = t.css(e, 'top'), u = t.css(e, 'left'), f = ('absolute' === h || 'fixed' === h) && (l + u).indexOf('auto') > -1, f ? (o = d.position(), c = o.top, a = o.left) : (c = parseFloat(l) || 0, a = parseFloat(u) || 0), t.isFunction(i) && (i = i.call(e, n, t.extend({}, s))), null != i.top && (r.top = i.top - s.top + c), null != i.left && (r.left = i.left - s.left + a), 'using' in i ? i.using.call(e, r) : d.css(r)
        }
    }, t.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(i) {
                t.offset.setOffset(this, e, i)
            });
            var i, r, n = this[0],
                s = {
                    top: 0,
                    left: 0
                },
                o = n && n.ownerDocument;
            if (o) return i = o.documentElement, t.contains(i, n) ? (s = n.getBoundingClientRect(), r = Ve(o), {
                top: s.top + r.pageYOffset - i.clientTop,
                left: s.left + r.pageXOffset - i.clientLeft
            }) : s
        },
        position: function() {
            if (this[0]) {
                var e, n, s = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return 'fixed' === t.css(s, 'position') ? n = s.getBoundingClientRect() : (e = this.offsetParent(), n = this.offset(), t.nodeName(e[0], 'html') || (i = e.offset()), i.top += t.css(e[0], 'borderTopWidth', !0), i.left += t.css(e[0], 'borderLeftWidth', !0)), {
                    top: n.top - i.top - t.css(s, 'marginTop', !0),
                    left: n.left - i.left - t.css(s, 'marginLeft', !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && 'static' === t.css(e, 'position')) e = e.offsetParent;
                return e || S
            })
        }
    }), t.each({
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    }, function(e, i) {
        var n = 'pageYOffset' === i;
        t.fn[e] = function(t) {
            return d(this, function(e, t, s) {
                var r = Ve(e);
                return void 0 === s ? r ? r[i] : e[t] : void(r ? r.scrollTo(n ? r.pageXOffset : s, n ? s : r.pageYOffset) : e[t] = s)
            }, e, t, arguments.length)
        }
    }), t.each(['top', 'left'], function(e, i) {
        t.cssHooks[i] = ne(r.pixelPosition, function(e, n) {
            return n ? (n = k(e, i), Q.test(n) ? t(e).position()[i] + 'px' : n) : void 0
        })
    }), t.each({
        Height: 'height',
        Width: 'width'
    }, function(e, i) {
        t.each({
            padding: 'inner' + e,
            content: i,
            '': 'outer' + e
        }, function(n, s) {
            t.fn[s] = function(s, r) {
                var o = arguments.length && (n || 'boolean' != typeof s),
                    a = n || (s === !0 || r === !0 ? 'margin' : 'border');
                return d(this, function(i, n, s) {
                    var r;
                    return t.isWindow(i) ? i.document.documentElement['client' + e] : 9 === i.nodeType ? (r = i.documentElement, Math.max(i.body['scroll' + e], r['scroll' + e], i.body['offset' + e], r['offset' + e], r['client' + e])) : void 0 === s ? t.css(i, n, a) : t.style(i, n, s, a)
                }, i, o ? s : void 0, o, null)
            }
        })
    }), t.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', i)
        },
        size: function() {
            return this.length
        }
    }), t.fn.andSelf = t.fn.addBack, 'function' == typeof define && define.amd && define('jquery', [], function() {
        return t
    });
    var Ge = e.jQuery,
        Ze = e.$;
    return t.noConflict = function(i) {
        return e.$ === t && (e.$ = Ze), i && e.jQuery === t && (e.jQuery = Ge), t
    }, i || (e.jQuery = e.$ = t), t
});
//----
(function(e, t, i) {
    e.migrateVersion = '1.3.0';
    var c = {};
    e.migrateWarnings = [];
    if (!e.migrateMute && t.console && t.console.log) {
        t.console.log('JQMIGRATE: Logging is active')
    };
    if (e.migrateTrace === i) {
        e.migrateTrace = !0
    };
    e.migrateReset = function() {
        c = {};
        e.migrateWarnings.length = 0
    };

    function n(i) {
        var n = t.console;
        if (!c[i]) {
            c[i] = !0;
            e.migrateWarnings.push(i);
            if (n && n.warn && !e.migrateMute) {
                n.warn('JQMIGRATE: ' + i);
                if (e.migrateTrace && n.trace) {
                    n.trace()
                }
            }
        }
    };

    function r(t, i, s, r) {
        if (Object.defineProperty) {
            try {
                Object.defineProperty(t, i, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        n(r);
                        return s
                    },
                    set: function(e) {
                        n(r);
                        s = e
                    }
                });
                return
            } catch (o) {}
        };
        e._definePropertyBroken = !0;
        t[i] = s
    };
    if (document.compatMode === 'BackCompat') {
        n('jQuery is not compatible with Quirks Mode')
    };
    var l = e('<input/>', {
            size: 1
        }).attr('size') && e.attrFn,
        v = e.attr,
        M = e.attrHooks.value && e.attrHooks.value.get || function() {
            return null
        },
        E = e.attrHooks.value && e.attrHooks.value.set || function() {
            return i
        },
        O = /^(?:input|button)$/i,
        z = /^[238]$/,
        L = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        F = /^(?:checked|selected)$/i;
    r(e, 'attrFn', l || {}, 'jQuery.attrFn is deprecated');
    e.attr = function(t, s, r, o) {
        var a = s.toLowerCase(),
            c = t && t.nodeType;
        if (o) {
            if (v.length < 4) {
                n('jQuery.fn.attr( props, pass ) is deprecated')
            };
            if (t && !z.test(c) && (l ? s in l : e.isFunction(e.fn[s]))) {
                return e(t)[s](r)
            }
        };
        if (s === 'type' && r !== i && O.test(t.nodeName) && t.parentNode) {
            n('Can\'t change the \'type\' of an input or button in IE 6/7/8')
        };
        if (!e.attrHooks[a] && L.test(a)) {
            e.attrHooks[a] = {
                get: function(t, n) {
                    var s, r = e.prop(t, n);
                    return r === !0 || typeof r !== 'boolean' && (s = t.getAttributeNode(n)) && s.nodeValue !== !1 ? n.toLowerCase() : i
                },
                set: function(t, i, n) {
                    var s;
                    if (i === !1) {
                        e.removeAttr(t, n)
                    } else {
                        s = e.propFix[n] || n;
                        if (s in t) {
                            t[s] = !0
                        };
                        t.setAttribute(n, n.toLowerCase())
                    };
                    return n
                }
            };
            if (F.test(a)) {
                n('jQuery.fn.attr(\'' + a + '\') might use property instead of attribute')
            }
        };
        return v.call(e, t, s, r)
    };
    e.attrHooks.value = {
        get: function(e, t) {
            var i = (e.nodeName || '').toLowerCase();
            if (i === 'button') {
                return M.apply(this, arguments)
            };
            if (i !== 'input' && i !== 'option') {
                n('jQuery.fn.attr(\'value\') no longer gets properties')
            };
            return t in e ? e.value : null
        },
        set: function(e, t) {
            var i = (e.nodeName || '').toLowerCase();
            if (i === 'button') {
                return E.apply(this, arguments)
            };
            if (i !== 'input' && i !== 'option') {
                n('jQuery.fn.attr(\'value\', val) no longer sets properties')
            };
            e.value = t
        }
    };
    var o, s, g = e.fn.init,
        j = e.parseJSON,
        A = /^\s*</,
        N = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, s, r) {
        var a, o;
        if (t && typeof t === 'string' && !e.isPlainObject(s) && (a = N.exec(e.trim(t))) && a[0]) {
            if (!A.test(t)) {
                n('$(html) HTML strings must start with \'<\' character')
            };
            if (a[3]) {
                n('$(html) HTML text after last tag is ignored')
            };
            if (a[0].charAt(0) === '#') {
                n('HTML string cannot start with a \'#\' character');
                e.error('JQMIGRATE: Invalid selector string (XSS)')
            };
            if (s && s.context) {
                s = s.context
            };
            if (e.parseHTML) {
                return g.call(this, e.parseHTML(a[2], s && s.ownerDocument || s || document, !0), s, r)
            }
        };
        if (t === '#') {
            n('jQuery( \'#\' ) is not a valid selector');
            t = []
        };
        o = g.apply(this, arguments);
        if (t && t.selector !== i) {
            o.selector = t.selector;
            o.context = t.context
        } else {
            o.selector = typeof t === 'string' ? t : '';
            if (t) {
                o.context = t.nodeType ? t : s || document
            }
        };
        return o
    };
    e.fn.init.prototype = e.fn;
    e.parseJSON = function(e) {
        if (!e) {
            n('jQuery.parseJSON requires a valid JSON string');
            return null
        };
        return j.apply(this, arguments)
    };
    e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || '',
            version: t[2] || '0'
        }
    };
    if (!e.browser) {
        o = e.uaMatch(navigator.userAgent);
        s = {};
        if (o.browser) {
            s[o.browser] = !0;
            s.version = o.version
        };
        if (s.chrome) {
            s.webkit = !0
        } else if (s.webkit) {
            s.safari = !0
        };
        e.browser = s
    };
    r(e, 'browser', e.browser, 'jQuery.browser is deprecated');
    e.boxModel = e.support.boxModel = (document.compatMode === 'CSS1Compat');
    r(e, 'boxModel', e.boxModel, 'jQuery.boxModel is deprecated');
    r(e.support, 'boxModel', e.support.boxModel, 'jQuery.support.boxModel is deprecated');
    e.sub = function() {
        function t(e, i) {
            return new t.fn.init(e, i)
        };
        e.extend(!0, t, this);
        t.superclass = this;
        t.fn = t.prototype = this();
        t.fn.constructor = t;
        t.sub = this.sub;
        t.fn.init = function(n, s) {
            var r = e.fn.init.call(this, n, s, i);
            return r instanceof t ? r : t(r)
        };
        t.fn.init.prototype = t.fn;
        var i = t(document);
        n('jQuery.sub() is deprecated');
        return t
    };
    e.fn.size = function() {
        n('jQuery.fn.size() is deprecated; use the .length property');
        return this.length
    };
    var a = !1;
    if (e.swap) {
        e.each(['height', 'width', 'reliableMarginRight'], function(t, i) {
            var n = e.cssHooks[i] && e.cssHooks[i].get;
            if (n) {
                e.cssHooks[i].get = function() {
                    var e;
                    a = !0;
                    e = n.apply(this, arguments);
                    a = !1;
                    return e
                }
            }
        })
    };
    e.swap = function(e, t, i, s) {
        var o, r, l = {};
        if (!a) {
            n('jQuery.swap() is undocumented and deprecated')
        };
        for (r in t) {
            l[r] = e.style[r];
            e.style[r] = t[r]
        };
        o = i.apply(e, s || []);
        for (r in t) {
            e.style[r] = l[r]
        };
        return o
    };
    e.ajaxSetup({
        converters: {
            'text json': e.parseJSON
        }
    });
    var P = e.fn.data;
    e.fn.data = function(t) {
        var r, s, o = this[0];
        if (o && t === 'events' && arguments.length === 1) {
            r = e.data(o, t);
            s = e._data(o, t);
            if ((r === i || r === s) && s !== i) {
                n('Use of jQuery.fn.data(\'events\') is deprecated');
                return s
            }
        };
        return P.apply(this, arguments)
    };
    var I = /\/(java|ecma)script/i;
    if (!e.clean) {
        e.clean = function(t, i, s, r) {
            i = i || document;
            i = !i.nodeType && i[0] || i;
            i = i.ownerDocument || i;
            n('jQuery.clean() is deprecated');
            var a, o, c, u, l = [];
            e.merge(l, e.buildFragment(t, i).childNodes);
            if (s) {
                c = function(e) {
                    if (!e.type || I.test(e.type)) {
                        return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : s.appendChild(e)
                    }
                };
                for (a = 0;
                    (o = l[a]) != null; a++) {
                    if (!(e.nodeName(o, 'script') && c(o))) {
                        s.appendChild(o);
                        if (typeof o.getElementsByTagName !== 'undefined') {
                            u = e.grep(e.merge([], o.getElementsByTagName('script')), c);
                            l.splice.apply(l, [a + 1, 0].concat(u));
                            a += u.length
                        }
                    }
                }
            };
            return l
        }
    };
    var k = e.event.add,
        C = e.event.remove,
        T = e.event.trigger,
        D = e.fn.toggle,
        u = e.fn.live,
        h = e.fn.die,
        S = e.fn.load,
        d = 'ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess',
        f = new RegExp('\\b(?:' + d + ')\\b'),
        p = /(?:^|\s)hover(\.\S+|)\b/,
        m = function(t) {
            if (typeof(t) !== 'string' || e.event.special.hover) {
                return t
            };
            if (p.test(t)) {
                n('\'hover\' pseudo-event is deprecated, use \'mouseenter mouseleave\'')
            };
            return t && t.replace(p, 'mouseenter$1 mouseleave$1')
        };
    if (e.event.props && e.event.props[0] !== 'attrChange') {
        e.event.props.unshift('attrChange', 'attrName', 'relatedNode', 'srcElement')
    };
    if (e.event.dispatch) {
        r(e.event, 'handle', e.event.dispatch, 'jQuery.event.handle is undocumented and deprecated')
    };
    e.event.add = function(e, t, i, s, r) {
        if (e !== document && f.test(t)) {
            n('AJAX events should be attached to document: ' + t)
        };
        k.call(this, e, m(t || ''), i, s, r)
    };
    e.event.remove = function(e, t, i, n, s) {
        C.call(this, e, m(t) || '', i, n, s)
    };
    e.each(['load', 'unload', 'error'], function(t, i) {
        e.fn[i] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            n('jQuery.fn.' + i + '() is deprecated');
            if (i === 'load' && typeof arguments[0] === 'string') {
                return S.apply(this, arguments)
            };
            e.splice(0, 0, i);
            if (arguments.length) {
                return this.bind.apply(this, e)
            };
            this.triggerHandler.apply(this, e);
            return this
        }
    });
    e.fn.toggle = function(t, i) {
        if (!e.isFunction(t) || !e.isFunction(i)) {
            return D.apply(this, arguments)
        };
        n('jQuery.fn.toggle(handler, handler...) is deprecated');
        var s = arguments,
            o = t.guid || e.guid++,
            r = 0,
            a = function(i) {
                var n = (e._data(this, 'lastToggle' + t.guid) || 0) % r;
                e._data(this, 'lastToggle' + t.guid, n + 1);
                i.preventDefault();
                return s[n].apply(this, arguments) || !1
            };
        a.guid = o;
        while (r < s.length) {
            s[r++].guid = o
        };
        return this.click(a)
    };
    e.fn.live = function(t, i, s) {
        n('jQuery.fn.live() is deprecated');
        if (u) {
            return u.apply(this, arguments)
        };
        e(this.context).on(t, this.selector, i, s);
        return this
    };
    e.fn.die = function(t, i) {
        n('jQuery.fn.die() is deprecated');
        if (h) {
            return h.apply(this, arguments)
        };
        e(this.context).off(t, this.selector || '**', i);
        return this
    };
    e.event.trigger = function(e, t, i, s) {
        if (!i && !f.test(e)) {
            n('Global events are undocumented and deprecated')
        };
        return T.call(this, e, t, i || document, s)
    };
    e.each(d.split('|'), function(t, i) {
        e.event.special[i] = {
            setup: function() {
                var t = this;
                if (t !== document) {
                    e.event.add(document, i + '.' + e.guid, function() {
                        e.event.trigger(i, Array.prototype.slice.call(arguments, 1), t, !0)
                    });
                    e._data(this, i, e.guid++)
                };
                return !1
            },
            teardown: function() {
                if (this !== document) {
                    e.event.remove(document, i + '.' + e._data(this, i))
                };
                return !1
            }
        }
    });
    e.event.special.ready = {
        setup: function() {
            n('\'ready\' event is deprecated')
        }
    };
    var w = e.fn.andSelf || e.fn.addBack,
        x = e.fn.find;
    e.fn.andSelf = function() {
        n('jQuery.fn.andSelf() replaced by jQuery.fn.addBack()');
        return w.apply(this, arguments)
    };
    e.fn.find = function(e) {
        var t = x.apply(this, arguments);
        t.context = this.context;
        t.selector = this.selector ? this.selector + ' ' + e : e;
        return t
    };
    if (e.Callbacks) {
        var y = e.Deferred,
            b = [
                ['resolve', 'done', e.Callbacks('once memory'), e.Callbacks('once memory'), 'resolved'],
                ['reject', 'fail', e.Callbacks('once memory'), e.Callbacks('once memory'), 'rejected'],
                ['notify', 'progress', e.Callbacks('memory'), e.Callbacks('memory')]
            ];
        e.Deferred = function(t) {
            var i = y(),
                s = i.promise();
            i.pipe = s.pipe = function() {
                var t = arguments;
                n('deferred.pipe() is deprecated');
                return e.Deferred(function(n) {
                    e.each(b, function(r, o) {
                        var a = e.isFunction(t[r]) && t[r];
                        i[o[1]](function() {
                            var t = a && a.apply(this, arguments);
                            if (t && e.isFunction(t.promise)) {
                                t.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                            } else {
                                n[o[0] + 'With'](this === s ? n.promise() : this, a ? [t] : arguments)
                            }
                        })
                    });
                    t = null
                }).promise()
            };
            i.isResolved = function() {
                n('deferred.isResolved is deprecated');
                return i.state() === 'resolved'
            };
            i.isRejected = function() {
                n('deferred.isRejected is deprecated');
                return i.state() === 'rejected'
            };
            if (t) {
                t.call(i, i)
            };
            return i
        }
    }
})(jQuery, window);

//----

(function(e) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], e)
    } else {
        e((typeof(jQuery) != 'undefined') ? jQuery : window.Zepto)
    }
}(function(e) {
    'use strict';
    var i = {};
    i.fileapi = e('<input type=\'file\'/>').get(0).files !== undefined;
    i.formdata = window.FormData !== undefined;
    var r = !!e.fn.prop;
    e.fn.attr2 = function() {
        if (!r) {
            return this.attr.apply(this, arguments)
        };
        var e = this.prop.apply(this, arguments);
        if ((e && e.jquery) || typeof e === 'string') {
            return e
        };
        return this.attr.apply(this, arguments)
    };
    e.fn.ajaxSubmit = function(n) {
        if (!this.length) {
            t('ajaxSubmit: skipping submit process - no element selected');
            return this
        };
        var o, y, a, s = this;
        if (typeof n == 'function') {
            n = {
                success: n
            }
        } else if (n === undefined) {
            n = {}
        };
        o = n.type || this.attr2('method');
        y = n.url || this.attr2('action');
        a = (typeof y === 'string') ? e.trim(y) : '';
        a = a || window.location.href || '';
        if (a) {
            a = (a.match(/^([^#]+)/) || [])[1]
        };
        n = e.extend(!0, {
            url: a,
            success: e.ajaxSettings.success,
            type: o || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
        }, n);
        var m = {};
        this.trigger('form-pre-serialize', [this, n, m]);
        if (m.veto) {
            t('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
            return this
        };
        if (n.beforeSerialize && n.beforeSerialize(this, n) === !1) {
            t('ajaxSubmit: submit aborted via beforeSerialize callback');
            return this
        };
        var p = n.traditional;
        if (p === undefined) {
            p = e.ajaxSettings.traditional
        };
        var d = [],
            f, c = this.formToArray(n.semantic, d);
        if (n.data) {
            n.extraData = n.data;
            f = e.param(n.data, p)
        };
        if (n.beforeSubmit && n.beforeSubmit(c, this, n) === !1) {
            t('ajaxSubmit: submit aborted via beforeSubmit callback');
            return this
        };
        this.trigger('form-submit-validate', [c, this, n, m]);
        if (m.veto) {
            t('ajaxSubmit: submit vetoed via form-submit-validate trigger');
            return this
        };
        var h = e.param(c, p);
        if (f) {
            h = (h ? (h + '&' + f) : f)
        };
        if (n.type.toUpperCase() == 'GET') {
            n.url += (n.url.indexOf('?') >= 0 ? '&' : '?') + h;
            n.data = null
        } else {
            n.data = h
        };
        var l = [];
        if (n.resetForm) {
            l.push(function() {
                s.resetForm()
            })
        };
        if (n.clearForm) {
            l.push(function() {
                s.clearForm(n.includeHidden)
            })
        };
        if (!n.dataType && n.target) {
            var I = n.success || function() {};
            l.push(function(t) {
                var i = n.replaceTarget ? 'replaceWith' : 'html';
                e(n.target)[i](t).each(I, arguments)
            })
        } else if (n.success) {
            l.push(n.success)
        };
        n.success = function(e, t, i) {
            var a = n.context || this;
            for (var r = 0, o = l.length; r < o; r++) {
                l[r].apply(a, [e, t, i || s, s])
            }
        };
        if (n.error) {
            var S = n.error;
            n.error = function(e, t, i) {
                var r = n.context || this;
                S.apply(r, [e, t, i, s])
            }
        };
        if (n.complete) {
            var D = n.complete;
            n.complete = function(e, t) {
                var i = n.context || this;
                D.apply(i, [e, t, s])
            }
        };
        var T = e('input[type=file]:enabled', this).filter(function() {
                return e(this).val() !== ''
            }),
            b = T.length > 0,
            w = 'multipart/form-data',
            x = (s.attr('enctype') == w || s.attr('encoding') == w),
            v = i.fileapi && i.formdata;
        t('fileAPI :' + v);
        var C = (b || x) && !v,
            u;
        if (n.iframe !== !1 && (n.iframe || C)) {
            if (n.closeKeepAlive) {
                e.get(n.closeKeepAlive, function() {
                    u = k(c)
                })
            } else {
                u = k(c)
            }
        } else if ((b || x) && v) {
            u = j(c)
        } else {
            u = e.ajax(n)
        };
        s.removeData('jqxhr').data('jqxhr', u);
        for (var g = 0; g < d.length; g++) {
            d[g] = null
        };
        this.trigger('form-submit-notify', [this, n]);
        return this;

        function P(t) {
            var s = e.param(t, n.traditional).split('&'),
                a = s.length,
                o = [],
                i, r;
            for (i = 0; i < a; i++) {
                s[i] = s[i].replace(/\+/g, ' ');
                r = s[i].split('=');
                o.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])])
            };
            return o
        };

        function j(t) {
            var a = new FormData();
            for (var i = 0; i < t.length; i++) {
                a.append(t[i].name, t[i].value)
            };
            if (n.extraData) {
                var r = P(n.extraData);
                for (i = 0; i < r.length; i++) {
                    if (r[i]) {
                        a.append(r[i][0], r[i][1])
                    }
                }
            };
            n.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, n, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: o || 'POST'
            });
            if (n.uploadProgress) {
                s.xhr = function() {
                    var t = e.ajaxSettings.xhr();
                    if (t.upload) {
                        t.upload.addEventListener('progress', function(e) {
                            var t = 0,
                                i = e.loaded || e.position,
                                s = e.total;
                            if (e.lengthComputable) {
                                t = Math.ceil(i / s * 100)
                            };
                            n.uploadProgress(e, i, s, t)
                        }, !1)
                    };
                    return t
                }
            };
            s.data = null;
            var l = s.beforeSend;
            s.beforeSend = function(e, t) {
                if (n.formData) {
                    t.data = n.formData
                } else {
                    t.data = a
                };
                if (l) {
                    l.call(this, e, t)
                }
            };
            return e.ajax(s)
        };

        function k(i) {
            var u = s[0],
                C, x, a, m, b, f, h, l, y, g, T, w, p = e.Deferred();
            p.abort = function(e) {
                l.abort(e)
            };
            if (i) {
                for (x = 0; x < d.length; x++) {
                    C = e(d[x]);
                    if (r) {
                        C.prop('disabled', !1)
                    } else {
                        C.removeAttr('disabled')
                    }
                }
            };
            a = e.extend(!0, {}, e.ajaxSettings, n);
            a.context = a.context || a;
            b = 'jqFormIO' + (new Date().getTime());
            if (a.iframeTarget) {
                f = e(a.iframeTarget);
                g = f.attr2('name');
                if (!g) {
                    f.attr2('name', b)
                } else {
                    b = g
                }
            } else {
                f = e('<iframe name="' + b + '" src="' + a.iframeSrc + '" />');
                f.css({
                    position: 'absolute',
                    top: '-1000px',
                    left: '-1000px'
                })
            };
            h = f[0];
            l = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: 'n/a',
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(i) {
                    var s = (i === 'timeout' ? 'timeout' : 'aborted');
                    t('aborting upload... ' + s);
                    this.aborted = 1;
                    try {
                        if (h.contentWindow.document.execCommand) {
                            h.contentWindow.document.execCommand('Stop')
                        }
                    } catch (n) {};
                    f.attr('src', a.iframeSrc);
                    l.error = s;
                    if (a.error) {
                        a.error.call(a.context, l, s, i)
                    };
                    if (m) {
                        e.event.trigger('ajaxError', [l, a, s])
                    };
                    if (a.complete) {
                        a.complete.call(a.context, l, s)
                    }
                }
            };
            m = a.global;
            if (m && 0 === e.active++) {
                e.event.trigger('ajaxStart')
            };
            if (m) {
                e.event.trigger('ajaxSend', [l, a])
            };
            if (a.beforeSend && a.beforeSend.call(a.context, l, a) === !1) {
                if (a.global) {
                    e.active--
                };
                p.reject();
                return p
            };
            if (l.aborted) {
                p.reject();
                return p
            };
            y = u.clk;
            if (y) {
                g = y.name;
                if (g && !y.disabled) {
                    a.extraData = a.extraData || {};
                    a.extraData[g] = y.value;
                    if (y.type == 'image') {
                        a.extraData[g + '.x'] = u.clk_x;
                        a.extraData[g + '.y'] = u.clk_y
                    }
                }
            };
            var j = 1,
                k = 2;

            function A(e) {
                var n = null;
                try {
                    if (e.contentWindow) {
                        n = e.contentWindow.document
                    }
                } catch (i) {
                    t('cannot get iframe.contentWindow document: ' + i)
                };
                if (n) {
                    return n
                };
                try {
                    n = e.contentDocument ? e.contentDocument : e.document
                } catch (i) {
                    t('cannot get iframe.contentDocument: ' + i);
                    n = e.document
                };
                return n
            };
            var I = e('meta[name=csrf-token]').attr('content'),
                P = e('meta[name=csrf-param]').attr('content');
            if (P && I) {
                a.extraData = a.extraData || {};
                a.extraData[P] = I
            };

            function N() {
                var l = s.attr2('target'),
                    c = s.attr2('action'),
                    m = 'multipart/form-data',
                    g = s.attr('enctype') || s.attr('encoding') || m;
                u.setAttribute('target', b);
                if (!o || /post/i.test(o)) {
                    u.setAttribute('method', 'POST')
                };
                if (c != a.url) {
                    u.setAttribute('action', a.url)
                };
                if (!a.skipEncodingOverride && (!o || /post/i.test(o))) {
                    s.attr({
                        encoding: 'multipart/form-data',
                        enctype: 'multipart/form-data'
                    })
                };
                if (a.timeout) {
                    w = setTimeout(function() {
                        T = !0;
                        v(j)
                    }, a.timeout)
                };

                function d() {
                    try {
                        var i = A(h).readyState;
                        t('state = ' + i);
                        if (i && i.toLowerCase() == 'uninitialized') {
                            setTimeout(d, 50)
                        }
                    } catch (e) {
                        t('Server abort: ', e, ' (', e.name, ')');
                        v(k);
                        if (w) {
                            clearTimeout(w)
                        };
                        w = undefined
                    }
                };
                var r = [];
                try {
                    if (a.extraData) {
                        for (var n in a.extraData) {
                            if (a.extraData.hasOwnProperty(n)) {
                                if (e.isPlainObject(a.extraData[n]) && a.extraData[n].hasOwnProperty('name') && a.extraData[n].hasOwnProperty('value')) {
                                    r.push(e('<input type="hidden" name="' + a.extraData[n].name + '">').val(a.extraData[n].value).appendTo(u)[0])
                                } else {
                                    r.push(e('<input type="hidden" name="' + n + '">').val(a.extraData[n]).appendTo(u)[0])
                                }
                            }
                        }
                    };
                    if (!a.iframeTarget) {
                        f.appendTo('body')
                    };
                    if (h.attachEvent) {
                        h.attachEvent('onload', v)
                    } else {
                        h.addEventListener('load', v, !1)
                    };
                    setTimeout(d, 15);
                    try {
                        u.submit()
                    } catch (i) {
                        var p = document.createElement('form').submit;
                        p.apply(u)
                    }
                } finally {
                    u.setAttribute('action', c);
                    u.setAttribute('enctype', g);
                    if (l) {
                        u.setAttribute('target', l)
                    } else {
                        s.removeAttr('target')
                    };
                    e(r).remove()
                }
            };
            if (a.forceSync) {
                N()
            } else {
                setTimeout(N, 10)
            };
            var D, c, z = 50,
                S;

            function v(i) {
                if (l.aborted || S) {
                    return
                };
                c = A(h);
                if (!c) {
                    t('cannot access response document');
                    i = k
                };
                if (i === j && l) {
                    l.abort('timeout');
                    p.reject(l, 'timeout');
                    return
                } else if (i == k && l) {
                    l.abort('server abort');
                    p.reject(l, 'error', 'server abort');
                    return
                };
                if (!c || c.location.href == a.iframeSrc) {
                    if (!T) {
                        return
                    }
                };
                if (h.detachEvent) {
                    h.detachEvent('onload', v)
                } else {
                    h.removeEventListener('load', v, !1)
                };
                var s = 'success',
                    r;
                try {
                    if (T) {
                        throw 'timeout'
                    };
                    var b = a.dataType == 'xml' || c.XMLDocument || e.isXMLDoc(c);
                    t('isXml=' + b);
                    if (!b && window.opera && (c.body === null || !c.body.innerHTML)) {
                        if (--z) {
                            t('requeing onLoad callback, DOM not available');
                            setTimeout(v, 250);
                            return
                        }
                    };
                    var o = c.body ? c.body : c.documentElement;
                    l.responseText = o ? o.innerHTML : null;
                    l.responseXML = c.XMLDocument ? c.XMLDocument : c;
                    if (b) {
                        a.dataType = 'xml'
                    };
                    l.getResponseHeader = function(e) {
                        var t = {
                            'content-type': a.dataType
                        };
                        return t[e.toLowerCase()]
                    };
                    if (o) {
                        l.status = Number(o.getAttribute('status')) || l.status;
                        l.statusText = o.getAttribute('statusText') || l.statusText
                    };
                    var y = (a.dataType || '').toLowerCase(),
                        x = /(json|script|text)/.test(y);
                    if (x || a.textarea) {
                        var g = c.getElementsByTagName('textarea')[0];
                        if (g) {
                            l.responseText = g.value;
                            l.status = Number(g.getAttribute('status')) || l.status;
                            l.statusText = g.getAttribute('statusText') || l.statusText
                        } else if (x) {
                            var u = c.getElementsByTagName('pre')[0],
                                d = c.getElementsByTagName('body')[0];
                            if (u) {
                                l.responseText = u.textContent ? u.textContent : u.innerText
                            } else if (d) {
                                l.responseText = d.textContent ? d.textContent : d.innerText
                            }
                        }
                    } else if (y == 'xml' && !l.responseXML && l.responseText) {
                        l.responseXML = M(l.responseText)
                    };
                    try {
                        D = O(l, y, a)
                    } catch (n) {
                        s = 'parsererror';
                        l.error = r = (n || s)
                    }
                } catch (n) {
                    t('error caught: ', n);
                    s = 'error';
                    l.error = r = (n || s)
                };
                if (l.aborted) {
                    t('upload aborted');
                    s = null
                };
                if (l.status) {
                    s = (l.status >= 200 && l.status < 300 || l.status === 304) ? 'success' : 'error'
                };
                if (s === 'success') {
                    if (a.success) {
                        a.success.call(a.context, D, 'success', l)
                    };
                    p.resolve(l.responseText, 'success', l);
                    if (m) {
                        e.event.trigger('ajaxSuccess', [l, a])
                    }
                } else if (s) {
                    if (r === undefined) {
                        r = l.statusText
                    };
                    if (a.error) {
                        a.error.call(a.context, l, s, r)
                    };
                    p.reject(l, 'error', r);
                    if (m) {
                        e.event.trigger('ajaxError', [l, a, r])
                    }
                };
                if (m) {
                    e.event.trigger('ajaxComplete', [l, a])
                };
                if (m && !--e.active) {
                    e.event.trigger('ajaxStop')
                };
                if (a.complete) {
                    a.complete.call(a.context, l, s)
                };
                S = !0;
                if (a.timeout) {
                    clearTimeout(w)
                };
                setTimeout(function() {
                    if (!a.iframeTarget) {
                        f.remove()
                    } else {
                        f.attr('src', a.iframeSrc)
                    };
                    l.responseXML = null
                }, 100)
            };
            var M = e.parseXML || function(e, t) {
                    if (window.ActiveXObject) {
                        t = new ActiveXObject('Microsoft.XMLDOM');
                        t.async = 'false';
                        t.loadXML(e)
                    } else {
                        t = (new DOMParser()).parseFromString(e, 'text/xml')
                    };
                    return (t && t.documentElement && t.documentElement.nodeName != 'parsererror') ? t : null
                },
                E = e.parseJSON || function(e) {
                    return window['eval']('(' + e + ')')
                },
                O = function(t, i, n) {
                    var r = t.getResponseHeader('content-type') || '',
                        o = i === 'xml' || !i && r.indexOf('xml') >= 0,
                        s = o ? t.responseXML : t.responseText;
                    if (o && s.documentElement.nodeName === 'parsererror') {
                        if (e.error) {
                            e.error('parsererror')
                        }
                    };
                    if (n && n.dataFilter) {
                        s = n.dataFilter(s, i)
                    };
                    if (typeof s === 'string') {
                        if (i === 'json' || !i && r.indexOf('json') >= 0) {
                            s = E(s)
                        } else if (i === 'script' || !i && r.indexOf('javascript') >= 0) {
                            e.globalEval(s)
                        }
                    };
                    return s
                };
            return p
        }
    };
    e.fn.ajaxForm = function(i) {
        i = i || {};
        i.delegation = i.delegation && e.isFunction(e.fn.on);
        if (!i.delegation && this.length === 0) {
            var r = {
                s: this.selector,
                c: this.context
            };
            if (!e.isReady && r.s) {
                t('DOM not ready, queuing ajaxForm');
                e(function() {
                    e(r.s, r.c).ajaxForm(i)
                });
                return this
            };
            t('terminating; zero elements found by selector' + (e.isReady ? '' : ' (DOM not ready)'));
            return this
        };
        if (i.delegation) {
            e(document).off('submit.form-plugin', this.selector, n).off('click.form-plugin', this.selector, s).on('submit.form-plugin', this.selector, i, n).on('click.form-plugin', this.selector, i, s);
            return this
        };
        return this.ajaxFormUnbind().bind('submit.form-plugin', i, n).bind('click.form-plugin', i, s)
    };

    function n(t) {
        var i = t.data;
        if (!t.isDefaultPrevented()) {
            t.preventDefault();
            e(t.target).ajaxSubmit(i)
        }
    };

    function s(t) {
        var n = t.target,
            s = e(n);
        if (!(s.is('[type=submit],[type=image]'))) {
            var o = s.closest('[type=submit]');
            if (o.length === 0) {
                return
            };
            n = o[0]
        };
        var i = this;
        i.clk = n;
        if (n.type == 'image') {
            if (t.offsetX !== undefined) {
                i.clk_x = t.offsetX;
                i.clk_y = t.offsetY
            } else if (typeof e.fn.offset == 'function') {
                var r = s.offset();
                i.clk_x = t.pageX - r.left;
                i.clk_y = t.pageY - r.top
            } else {
                i.clk_x = t.pageX - n.offsetLeft;
                i.clk_y = t.pageY - n.offsetTop
            }
        };
        setTimeout(function() {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    };
    e.fn.ajaxFormUnbind = function() {
        return this.unbind('submit.form-plugin click.form-plugin')
    };
    e.fn.formToArray = function(t, n) {
        var o = [];
        if (this.length === 0) {
            return o
        };
        var a = this[0],
            y = this.attr('id'),
            l = t ? a.getElementsByTagName('*') : a.elements,
            p;
        if (l && !/MSIE [678]/.test(navigator.userAgent)) {
            l = e(l).get()
        };
        if (y) {
            p = e(':input[form="' + y + '"]').get();
            if (p.length) {
                l = (l || []).concat(p)
            }
        };
        if (!l || !l.length) {
            return o
        };
        var h, c, r, u, s, g, v;
        for (h = 0, g = l.length; h < g; h++) {
            s = l[h];
            r = s.name;
            if (!r || s.disabled) {
                continue
            };
            if (t && a.clk && s.type == 'image') {
                if (a.clk == s) {
                    o.push({
                        name: r,
                        value: e(s).val(),
                        type: s.type
                    });
                    o.push({
                        name: r + '.x',
                        value: a.clk_x
                    }, {
                        name: r + '.y',
                        value: a.clk_y
                    })
                };
                continue
            };
            u = e.fieldValue(s, !0);
            if (u && u.constructor == Array) {
                if (n) {
                    n.push(s)
                };
                for (c = 0, v = u.length; c < v; c++) {
                    o.push({
                        name: r,
                        value: u[c]
                    })
                }
            } else if (i.fileapi && s.type == 'file') {
                if (n) {
                    n.push(s)
                };
                var f = s.files;
                if (f.length) {
                    for (c = 0; c < f.length; c++) {
                        o.push({
                            name: r,
                            value: f[c],
                            type: s.type
                        })
                    }
                } else {
                    o.push({
                        name: r,
                        value: '',
                        type: s.type
                    })
                }
            } else if (u !== null && typeof u != 'undefined') {
                if (n) {
                    n.push(s)
                };
                o.push({
                    name: r,
                    value: u,
                    type: s.type,
                    required: s.required
                })
            }
        };
        if (!t && a.clk) {
            var m = e(a.clk),
                d = m[0];
            r = d.name;
            if (r && !d.disabled && d.type == 'image') {
                o.push({
                    name: r,
                    value: m.val()
                });
                o.push({
                    name: r + '.x',
                    value: a.clk_x
                }, {
                    name: r + '.y',
                    value: a.clk_y
                })
            }
        };
        return o
    };
    e.fn.formSerialize = function(t) {
        return e.param(this.formToArray(t))
    };
    e.fn.fieldSerialize = function(t) {
        var i = [];
        this.each(function() {
            var r = this.name;
            if (!r) {
                return
            };
            var n = e.fieldValue(this, t);
            if (n && n.constructor == Array) {
                for (var s = 0, o = n.length; s < o; s++) {
                    i.push({
                        name: r,
                        value: n[s]
                    })
                }
            } else if (n !== null && typeof n != 'undefined') {
                i.push({
                    name: this.name,
                    value: n
                })
            }
        });
        return e.param(i)
    };
    e.fn.fieldValue = function(t) {
        for (var n = [], s = 0, o = this.length; s < o; s++) {
            var r = this[s],
                i = e.fieldValue(r, t);
            if (i === null || typeof i == 'undefined' || (i.constructor == Array && !i.length)) {
                continue
            };
            if (i.constructor == Array) {
                e.merge(n, i)
            } else {
                n.push(i)
            }
        };
        return n
    };
    e.fieldValue = function(t, i) {
        var f = t.name,
            s = t.type,
            h = t.tagName.toLowerCase();
        if (i === undefined) {
            i = !0
        };
        if (i && (!f || t.disabled || s == 'reset' || s == 'button' || (s == 'checkbox' || s == 'radio') && !t.checked || (s == 'submit' || s == 'image') && t.form && t.form.clk != t || h == 'select' && t.selectedIndex == -1)) {
            return null
        };
        if (h == 'select') {
            var l = t.selectedIndex;
            if (l < 0) {
                return null
            };
            var c = [],
                u = t.options,
                a = (s == 'select-one'),
                d = (a ? l + 1 : u.length);
            for (var o = (a ? l : 0); o < d; o++) {
                var n = u[o];
                if (n.selected) {
                    var r = n.value;
                    if (!r) {
                        r = (n.attributes && n.attributes.value && !(n.attributes.value.specified)) ? n.text : n.value
                    };
                    if (a) {
                        return r
                    };
                    c.push(r)
                }
            };
            return c
        };
        return e(t).val()
    };
    e.fn.clearForm = function(t) {
        return this.each(function() {
            e('input,select,textarea', this).clearFields(t)
        })
    };
    e.fn.clearFields = e.fn.clearInputs = function(t) {
        var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var n = this.type,
                s = this.tagName.toLowerCase();
            if (i.test(n) || s == 'textarea') {
                this.value = ''
            } else if (n == 'checkbox' || n == 'radio') {
                this.checked = !1
            } else if (s == 'select') {
                this.selectedIndex = -1
            } else if (n == 'file') {
                if (/MSIE/.test(navigator.userAgent)) {
                    e(this).replaceWith(e(this).clone(!0))
                } else {
                    e(this).val('')
                }
            } else if (t) {
                if ((t === !0 && /hidden/.test(n)) || (typeof t == 'string' && e(this).is(t))) {
                    this.value = ''
                }
            }
        })
    };
    e.fn.resetForm = function() {
        return this.each(function() {
            if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
                this.reset()
            }
        })
    };
    e.fn.enable = function(e) {
        if (e === undefined) {
            e = !0
        };
        return this.each(function() {
            this.disabled = !e
        })
    };
    e.fn.selected = function(t) {
        if (t === undefined) {
            t = !0
        };
        return this.each(function() {
            var n = this.type;
            if (n == 'checkbox' || n == 'radio') {
                this.checked = t
            } else if (this.tagName.toLowerCase() == 'option') {
                var i = e(this).parent('select');
                if (t && i[0] && i[0].type == 'select-one') {
                    i.find('option').selected(!1)
                };
                this.selected = t
            }
        })
    };
    e.fn.ajaxSubmit.debug = !1;

    function t() {
        if (!e.fn.ajaxSubmit.debug) {
            return
        };
        var t = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
        if (window.console && window.console.log) {
            window.console.log(t)
        } else if (window.opera && window.opera.postError) {
            window.opera.postError(t)
        }
    }
}));