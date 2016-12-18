jQuery.cookie = function(e, t, i) {
    if (typeof t != 'undefined') {
        i = i || {};
        if (t === null) {
            t = '';
            i.expires = -1
        };
        var l = '';
        if (i.expires && (typeof i.expires == 'number' || i.expires.toUTCString)) {
            var n;
            if (typeof i.expires == 'number') {
                n = new Date();
                n.setTime(n.getTime() + (i.expires * 24 * 60 * 60 * 1000))
            } else {
                n = i.expires
            };
            l = '; expires=' + n.toUTCString()
        };
        var c = i.path ? '; path=' + (i.path) : '',
            u = i.domain ? '; domain=' + (i.domain) : '',
            h = i.secure ? '; secure' : '';
        document.cookie = [e, '=', encodeURIComponent(t), l, c, u, h].join('')
    } else {
        var a = null;
        if (document.cookie && document.cookie != '') {
            var o = document.cookie.split(';');
            for (var s = 0; s < o.length; s++) {
                var r = jQuery.trim(o[s]);
                if (r.substring(0, e.length + 1) == (e + '=')) {
                    a = decodeURIComponent(r.substring(e.length + 1));
                    break
                }
            }
        };
        return a
    }
};
(function(e, t, i) {
    'use strict';
    e.map(['localStorage', 'sessionStorage'], function(n) {
        var r = {
            cookiePrefix: 'fallback:' + n + ':',
            cookieOptions: {
                path: '/',
                domain: i.domain,
                expires: ('localStorage' === n) ? {
                    expires: 365
                } : undefined
            }
        };
        try {
            e.support[n] = n in t && t[n] !== null
        } catch (s) {
            e.support[n] = !1
        };
        e[n] = function(s, o) {
            var a = e.extend({}, r, e[n].options);
            this.getItem = function(i) {
                var o = function(i) {
                    return JSON.parse(e.support[n] ? t[n].getItem(i) : e.cookie(a.cookiePrefix + i))
                };
                if (typeof i === 'string') return o(i);
                var r = [],
                    s = i.length;
                while (s--) r[s] = o(i[s]);
                return r
            };
            this.setItem = function(i, s) {
                s = JSON.stringify(s);
                return e.support[n] ? t[n].setItem(i, s) : e.cookie(a.cookiePrefix + i, s, a.cookieOptions)
            };
            this.removeItem = function(i) {
                return e.support[n] ? t[n].removeItem(i) : e.cookie(a.cookiePrefix + i, null, e.extend(a.cookieOptions, {
                    expires: -1
                }))
            };
            this.clear = function() {
                if (e.support[n]) {
                    return t[n].clear()
                } else {
                    var s = new RegExp('^' + a.cookiePrefix, ''),
                        r = e.extend(a.cookieOptions, {
                            expires: -1
                        });
                    if (i.cookie && i.cookie !== '') {
                        e.map(i.cookie.split(';'), function(t) {
                            if (s.test(t = e.trim(t))) {
                                e.cookie(t.substr(0, t.indexOf('=')), null, r)
                            }
                        })
                    }
                }
            };
            if (typeof s !== 'undefined') {
                return typeof o !== 'undefined' ? (o === null ? this.removeItem(s) : this.setItem(s, o)) : this.getItem(s)
            };
            return this
        };
        e[n].options = r
    })
}(jQuery, window, document));