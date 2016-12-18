(function(e) {
    var c, g, p, n, T, o, C, a, b, w, d = 0,
        i = {},
        u = [],
        h = 0,
        t = {},
        l = [],
        D = null,
        m = new Image(),
        P = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
        H = /[^\.]\.(swf)\s*$/i,
        j, A = 1,
        y = 0,
        v = '',
        f, r, s = !1,
        x = e.extend(e('<div/>')[0], {
            prop: 0
        }),
        Q, S, N = function() {
            if (g) g.hide();
            m.onerror = m.onload = null;
            if (D) {
                D.abort()
            };
            if (c) c.empty()
        },
        L = function() {
            if (!1 === i.onError(u, d, i)) {
                g.hide();
                s = !1;
                return
            };
            i.titleShow = !1;
            i.width = 'auto';
            i.height = 'auto';
            if (c) c.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
            k()
        },
        I = function() {
            var n = u[d],
                t, r, l, h, f, a;
            N();
            i = e.extend({}, e.fn.fancybox.defaults, (typeof e(n).data('fancybox') == 'undefined' ? i : e(n).data('fancybox')));
            a = i.onStart(u, d, i);
            if (a === !1) {
                s = !1;
                return
            } else if (typeof a == 'object') {
                i = e.extend(i, a)
            };
            l = i.title || (n.nodeName ? e(n).attr('title') : n.title) || '';
            if (n.nodeName && !i.orig) {
                i.orig = e(n).children('img:first').length ? e(n).children('img:first') : e(n)
            };
            if (l === '' && i.orig && i.titleFromAlt) {
                l = i.orig.attr('alt')
            };
            t = i.href || (n.nodeName ? e(n).attr('href') : n.href) || null;
            if ((/^(?:javascript)/i).test(t) || t == '#') {
                t = null
            };
            if (i.type) {
                r = i.type;
                if (!t) {
                    t = i.content
                }
            } else if (i.content) {
                r = 'html'
            } else if (t) {
                if (t.match(P)) {
                    r = 'image'
                } else if (t.match(H)) {
                    r = 'swf'
                } else if (e(n).hasClass('iframe')) {
                    r = 'iframe'
                } else if (t.indexOf('#') === 0) {
                    r = 'inline'
                } else {
                    r = 'ajax'
                }
            };
            if (!r) {
                L();
                return
            };
            if (r == 'inline') {
                n = t.substr(t.indexOf('#'));
                r = e(n).length > 0 ? 'inline' : 'ajax'
            };
            i.type = r;
            i.href = t;
            i.title = l;
            if (i.close_timeout !== undefined) {
                S = setTimeout('$.fancybox.close()', i.close_timeout)
            };
            if (i.autoDimensions) {
                if (i.type == 'html' || i.type == 'inline' || i.type == 'ajax') {
                    i.width = 'auto';
                    i.height = 'auto'
                } else {
                    i.autoDimensions = !1
                }
            };
            if (i.modal) {
                i.overlayShow = !0;
                i.hideOnOverlayClick = !1;
                i.hideOnContentClick = !1;
                i.enableEscapeButton = !1;
                i.showCloseButton = !1
            };
            i.padding = parseInt(i.padding, 20);
            i.margin = parseInt(i.margin, 0);
            c.css('padding', (i.padding + i.margin));
            e('.fancybox-inline-tmp').unbind('fancybox-cancel').bind('fancybox-change', function() {
                e(this).replaceWith(o.children())
            });
            switch (r) {
                case 'html':
                    c.html(i.content);
                    k();
                    break;
                case 'inline':
                    if (e(n).parent().is('#fancybox-content') === !0) {
                        s = !1;
                        return
                    };
                    e('<div class="fancybox-inline-tmp" />').hide().bind('fancybox-cleanup', function() {
                        e(this).replaceWith(o.children())
                    }).bind('fancybox-cancel', function() {
                        e(this).replaceWith(c.children())
                    });
                    e(n).clone().show().appendTo(c);
                    k();
                    break;
                case 'image':
                    s = !1;
                    e.fancybox.showActivity();
                    m = new Image();
                    m.onerror = function(t) {
                        e(this).attr('src', '/assets/images/404.jpg')
                    };
                    m.onload = function() {
                        s = !0;
                        m.onerror = m.onload = null;
                        W()
                    };
                    m.src = t;
                    break;
                case 'swf':
                    i.scrolling = 'no';
                    h = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + i.width + '" height="' + i.height + '"><param name="movie" value="' + t + '"></param>';
                    f = '';
                    e.each(i.swf, function(e, t) {
                        h += '<param name="' + e + '" value="' + t + '"></param>';
                        f += ' ' + e + '="' + t + '"'
                    });
                    h += '<embed src="' + t + '" type="application/x-shockwave-flash" width="' + i.width + '" height="' + i.height + '"' + f + '></embed></object>';
                    c.html(h);
                    k();
                    break;
                case 'ajax':
                    s = !1;
                    e.fancybox.showActivity();
                    i.ajax.win = i.ajax.success;
                    D = e.ajax(e.extend({}, i.ajax, {
                        url: t,
                        data: i.ajax.data || {},
                        dataType: 'json',
                        crossDomain: !1,
                        error: function(e, t, i) {
                            if (e.status > 0) {
                                if (katUser && katUser.acl > 5) {
                                    c.html(e.responseText);
                                    k()
                                } else {
                                    L()
                                }
                            }
                        },
                        success: function(e, n, s) {
                            var r = typeof s == 'object' ? s : D;
                            if (r.status == 200) {
                                if (typeof i.ajax.win == 'function') {
                                    a = i.ajax.win(t, e, n, s);
                                    if (a === !1) {
                                        g.hide();
                                        return
                                    } else if (typeof a == 'string' || typeof a == 'object') {
                                        e = a
                                    }
                                };
                                if (typeof e == 'object') {
                                    if (e.method == 'error') {
                                        var e = '<h2>Error</h2><div class="alertfield">' + e.html + '</div>'
                                    } else if (e.method == 'ok') {
                                        if (e.url != null) {
                                            window.location = e.url;
                                            return
                                        };
                                        var e = '<h2>Reloading...</h2><br>';
                                        window.location.reload(!0)
                                    } else if (e.method == 'show') {
                                        var e = e.html
                                    }
                                } else if (e == '{"method":"ok","html":""}') {
                                    var e = '<h2>Reloading...</h2><br>';
                                    window.location.reload(!0)
                                };
                                c.html(e);
                                k()
                            }
                        }
                    }));
                    break;
                case 'iframe':
                    M();
                    break
            }
        },
        k = function() {
            var t = i.width,
                n = i.height;
            if (t.toString().indexOf('%') > -1) {
                t = parseInt((e(window).width() - (i.margin * 2)) * parseFloat(t) / 100, 10) + 'px'
            } else {
                t = t == 'auto' ? 'auto' : t + 'px'
            };
            if (n.toString().indexOf('%') > -1) {
                n = parseInt((e(window).height() - (i.margin * 2)) * parseFloat(n) / 100, 10) + 'px'
            } else {
                n = n == 'auto' ? 'auto' : n + 'px'
            };
            if (c) c.wrapInner('<div style="width:' + t + ';height:' + n + ';overflow: ' + (i.scrolling == 'auto' ? 'visible' : (i.scrolling == 'yes' ? 'scroll' : 'hidden')) + ';position:relative;"></div>');
            i.width = c ? c.width() : 0;
            i.height = c ? c.height() : 0;
            M()
        },
        W = function() {
            i.width = m.width;
            i.height = m.height;
            e('<img />').attr({
                'id': 'fancybox-img',
                'src': m.src,
                'alt': i.title
            }).appendTo(c);
            M()
        },
        M = function() {
            var m, v;
            if (g) g.hide();
            l = u;
            h = d;
            t = i;
            if (n.is(':visible') && !1 === t.onCleanup(l, h, t)) {
                e.event.trigger('fancybox-cancel');
                s = !1;
                return
            };
            s = !0;
            e(o.add(p)).unbind();
            e(window).unbind('resize.fb scroll.fb');
            e(document).unbind('keydown.fb');
            if (n.is(':visible') && t.titlePosition !== 'outside') {
                n.css('height', n.height())
            };
            if (t.overlayShow) {
                p.css({
                    'background-color': t.overlayColor,
                    'opacity': t.overlayOpacity,
                    'cursor': t.hideOnOverlayClick ? 'pointer' : 'auto',
                    'height': e(document).height()
                });
                if (!p.is(':visible')) {
                    p.show()
                }
            } else {
                p.hide()
            };
            r = U();
            B();
            if (n.is(':visible')) {
                e(C.add(b).add(w)).hide();
                m = n.position(), f = {
                    top: m.top,
                    left: m.left,
                    width: n.width(),
                    height: n.height()
                };
                v = (f.width == r.width && f.height == r.height);
                o.fadeTo(t.changeFade, 0.3, function() {
                    var n = function() {
                        o.html(c.contents()).fadeTo(t.changeFade, 1, E)
                    };
                    e.event.trigger('fancybox-change');
                    o.empty().removeAttr('filter').css({
                        'width': r.width - t.padding * 2,
                        'height': i.autoDimensions ? 'auto' : r.height - y - t.padding * 2
                    });
                    if (v) {
                        n()
                    } else {
                        x.prop = 0;
                        e(x).animate({
                            prop: 1
                        }, {
                            duration: t.changeSpeed,
                            easing: t.easingChange,
                            step: O,
                            complete: n
                        })
                    }
                });
                return
            };
            n.removeAttr('style');
            if (t.transitionIn == 'elastic') {
                f = F();
                o.html(c.contents());
                n.show();
                if (t.opacity) {
                    r.opacity = 0
                };
                x.prop = 0;
                e(x).animate({
                    prop: 1
                }, {
                    duration: t.speedIn,
                    easing: t.easingIn,
                    step: O,
                    complete: E
                });
                return
            };
            if (t.titlePosition == 'inside' && y > 0) {
                a.show()
            };
            o.css({
                'width': r.width - t.padding * 2,
                'height': i.autoDimensions ? 'auto' : r.height - y - t.padding * 2
            }).html(c.contents());
            n.css(r).fadeIn(t.transitionIn == 'none' ? 0 : t.speedIn, E)
        },
        R = function(e) {
            if (e && e.length) {
                if (t.titlePosition == 'float') {
                    return '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + e + '</td><td id="fancybox-title-float-right"></td></tr></table>'
                };
                return '<div id="fancybox-title-' + t.titlePosition + '">' + e + '</div>'
            };
            return !1
        },
        B = function() {
            v = t.title || '';
            y = 0;
            a.empty().removeAttr('style').removeClass();
            if (t.titleShow === !1) {
                a.hide();
                return
            };
            v = e.isFunction(t.titleFormat) ? t.titleFormat(v, l, h, t) : R(v);
            if (!v || v === '') {
                a.hide();
                return
            };
            a.addClass('fancybox-title-' + t.titlePosition).html(v).appendTo('body').show();
            switch (t.titlePosition) {
                case 'inside':
                    a.css({
                        'width': r.width - (t.padding * 2),
                        'marginLeft': t.padding,
                        'marginRight': t.padding
                    });
                    y = a.outerHeight(!0);
                    a.appendTo(T);
                    r.height += y;
                    break;
                case 'over':
                    a.css({
                        'marginLeft': t.padding,
                        'width': r.width - (t.padding * 2),
                        'bottom': t.padding
                    }).appendTo(T);
                    break;
                case 'float':
                    a.css('left', parseInt((a.width() - r.width - 40) / 2, 10) * -1).appendTo(n);
                    break;
                case 'none':
                    break;
                default:
                    a.css({
                        'width': r.width - (t.padding * 2),
                        'paddingLeft': t.padding,
                        'paddingRight': t.padding
                    }).appendTo(n);
                    break
            };
            a.hide()
        },
        q = function() {
            if (t.enableEscapeButton || t.enableKeyboardNav) {
                e(document).bind('keydown.fb', function(i) {
                    if (i.keyCode == 27 && t.enableEscapeButton) {
                        i.preventDefault();
                        e.fancybox.close()
                    } else if ((i.keyCode == 37 || i.keyCode == 39) && t.enableKeyboardNav && i.target.tagName !== 'INPUT' && i.target.tagName !== 'TEXTAREA' && i.target.tagName !== 'SELECT') {
                        i.preventDefault();
                        e.fancybox[i.keyCode == 37 ? 'prev' : 'next']()
                    }
                })
            };
            if (!t.showNavArrows) {
                b.hide();
                w.hide();
                return
            };
            if ((t.cyclic && l.length > 1) || h !== 0) {
                b.show()
            };
            if ((t.cyclic && l.length > 1) || h != (l.length - 1)) {
                w.show()
            }
        },
        E = function() {
            if (i.autoDimensions) {
                o.css('height', 'auto')
            };
            n.css('height', 'auto');
            if (v && v.length) {
                a.show()
            };
            if (t.showCloseButton) {
                C.show()
            };
            q();
            if (t.hideOnContentClick) {
                o.bind('click', e.fancybox.close)
            };
            if (t.hideOnOverlayClick) {
                p.bind('click', e.fancybox.close)
            };
            e(window).bind('resize.fb', e.fancybox.resize);
            if (t.centerOnScroll) {
                e(window).bind('scroll.fb', e.fancybox.center)
            };
            if (t.type == 'iframe') {
                e('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" allowtransparency="true" scrolling="' + i.scrolling + '" src="' + t.href + '"></iframe>').appendTo(o)
            };
            n.show();
            s = !1;
            e.fancybox.center();
            t.onComplete(l, h, t);
            o.find('[autofocus]').focus();
            Y()
        },
        Y = function() {
            var e, t;
            if ((l.length - 1) > h) {
                e = l[h + 1].href;
                if (typeof e !== 'undefined' && e.match(P)) {
                    t = new Image();
                    t.src = e
                }
            };
            if (h > 0) {
                e = l[h - 1].href;
                if (typeof e !== 'undefined' && e.match(P)) {
                    t = new Image();
                    t.src = e
                }
            }
        },
        O = function(e) {
            var i = {
                width: parseInt(f.width + (r.width - f.width) * e, 10),
                height: parseInt(f.height + (r.height - f.height) * e, 10),
                top: parseInt(f.top + (r.top - f.top) * e, 10),
                left: parseInt(f.left + (r.left - f.left) * e, 10)
            };
            if (typeof r.opacity !== 'undefined') {
                i.opacity = e < 0.5 ? 0.5 : e
            };
            n.css(i);
            o.css({
                'width': i.width - t.padding * 2,
                'height': i.height - (y * e) - t.padding * 2
            })
        },
        z = function() {
            return [e(window).width() - (t.margin * 2), e(window).height() - (t.margin * 2), e(document).scrollLeft() + t.margin, e(document).scrollTop() + t.margin]
        },
        U = function() {
            var n = z(),
                e = {},
                o = t.autoScale,
                s = t.padding * 2,
                r;
            if (t.width.toString().indexOf('%') > -1) {
                e.width = parseInt((n[0] * parseFloat(t.width)) / 100, 10)
            } else {
                e.width = t.width + s
            };
            if (t.height.toString().indexOf('%') > -1) {
                e.height = parseInt((n[1] * parseFloat(t.height)) / 100, 10)
            } else {
                e.height = t.height + s
            };
            if (o && (e.width > n[0] || e.height > n[1])) {
                if (i.type == 'image' || i.type == 'swf') {
                    r = (t.width) / (t.height);
                    if ((e.width) > n[0]) {
                        e.width = n[0];
                        e.height = parseInt(((e.width - s) / r) + s, 10)
                    };
                    if ((e.height) > n[1]) {
                        e.height = n[1];
                        e.width = parseInt(((e.height - s) * r) + s, 10)
                    }
                } else {
                    e.width = Math.min(e.width, n[0]);
                    e.height = Math.min(e.height, n[1])
                }
            };
            e.top = parseInt(Math.max(n[3] - 20, n[3] + ((n[1] - e.height - 40) * 0.5)), 10);
            e.left = parseInt(Math.max(n[2] - 20, n[2] + ((n[0] - e.width - 40) * 0.5)), 10);
            return e
        },
        X = function(e) {
            var t = e.offset();
            t.top += parseInt(e.css('paddingTop'), 10) || 0;
            t.left += parseInt(e.css('paddingLeft'), 10) || 0;
            t.top += parseInt(e.css('border-top-width'), 10) || 0;
            t.left += parseInt(e.css('border-left-width'), 10) || 0;
            t.width = e.width();
            t.height = e.height();
            return t
        },
        F = function() {
            var r = i.orig ? e(i.orig) : !1,
                o = {},
                n, s;
            if (r && r.length) {
                n = X(r);
                o = {
                    width: n.width + (t.padding * 2),
                    height: n.height + (t.padding * 2),
                    top: n.top - t.padding - 20,
                    left: n.left - t.padding - 20
                }
            } else {
                s = z();
                o = {
                    width: t.padding * 2,
                    height: t.padding * 2,
                    top: parseInt(s[3] + s[1] * 0.5, 10),
                    left: parseInt(s[2] + s[0] * 0.5, 10)
                }
            };
            return o
        },
        K = function() {
            if (!g.is(':visible')) {
                clearInterval(j);
                return
            };
            e('div', g).css('top', (A * -40) + 'px');
            A = (A + 1) % 12
        };
    e.fn.fancybox = function(t) {
        if (!e(this).length) {
            return this
        };
        e(this).data('fancybox', e.extend({}, t, (e.metadata ? e(this).metadata() : {}))).unbind('click.fb').bind('click.fb', function(t) {
            t.preventDefault();
            if (s) {
                return
            };
            s = !0;
            e(this).blur();
            u = [];
            d = 0;
            var i = e(this).attr('rel') || '';
            if (!i || i == '' || i === 'nofollow' || i === 'nofollow noopener noreferrer') {
                u.push(this)
            } else {
                u = e('a[rel=' + i + '], area[rel=' + i + ']');
                d = u.index(this)
            };
            I();
            return
        });
        return this
    };
    e.fancybox = function(t) {
        var n;
        if (s) {
            return
        };
        s = !0;
        n = typeof arguments[1] !== 'undefined' ? arguments[1] : {};
        u = [];
        d = parseInt(n.index, 10) || 0;
        if (e.isArray(t)) {
            for (var i = 0, r = t.length; i < r; i++) {
                if (typeof t[i] == 'object') {
                    e(t[i]).data('fancybox', e.extend({}, n, t[i]))
                } else {
                    t[i] = e({}).data('fancybox', e.extend({
                        content: t[i]
                    }, n))
                }
            };
            u = jQuery.merge(u, t)
        } else {
            if (typeof t == 'object') {
                e(t).data('fancybox', e.extend({}, n, t))
            } else {
                t = e({}).data('fancybox', e.extend({
                    content: t
                }, n))
            };
            u.push(t)
        };
        if (d > u.length || d < 0) {
            d = 0
        };
        I()
    };
    e.fancybox.isActive = function() {
        return e('#fancybox-content').is(':visible')
    };
    e.fancybox.setContent = function(t) {
        e('#fancybox-content div').html(t);
        e.fancybox.resize()
    };
    e.fancybox.queue = function(t, i) {
        if (!t.length) return;
        i = e.extend({
            onNext: null,
            timeout: 0
        }, i);
        var s = t.pop(),
            n = e(s).html();
        if (i.timeout) {
            setTimeout(function() {
                e.fancybox.close()
            }, i.timeout)
        };
        if (typeof i.onNext == 'function') {
            i.onNext.call(this, n)
        };
        if (e.fancybox.isActive()) {
            e.fancybox.setContent(n);
            return
        };
        e.fancybox({
            content: n,
            hideOnContentClick: !0,
            onCleanup: function() {
                if (t.length) {
                    e.fancybox.queue(t, i);
                    return !1
                }
            }
        })
    };
    e.fancybox.saveState = function() {
        var t = e('#fancybox-wrap'),
            i = e('#fancybox-content');
        return {
            title: i.find('h1,h2,h3').eq(0).text(),
            div: e('<div/>').hide().appendTo('body').append(i.contents()),
            wrapTop: t.css('top'),
            wrapLeft: t.css('left'),
            wrapWidth: t.css('width'),
            contentWidth: i.css('width')
        }
    };
    e.fancybox.restoreState = function(t) {
        e('#fancybox-wrap').css({
            top: t.wrapTop,
            left: t.wrapLeft,
            width: t.wrapWidth
        });
        e('#fancybox-content').empty().append(t.div.contents()).css({
            width: t.contentWidth
        });
        t.div.remove()
    };
    e.fancybox.showActivity = function() {
        clearInterval(j);
        g.show();
        j = setInterval(K, 66)
    };
    e.fancybox.hideActivity = function() {
        g.hide()
    };
    e.fancybox.next = function() {
        return e.fancybox.pos(h + 1)
    };
    e.fancybox.prev = function() {
        return e.fancybox.pos(h - 1)
    };
    e.fancybox.pos = function(e) {
        if (s) {
            return
        };
        e = parseInt(e);
        u = l;
        if (e > -1 && e < l.length) {
            d = e;
            I()
        } else if (t.cyclic && l.length > 1) {
            d = e >= l.length ? 0 : l.length - 1;
            I()
        };
        return
    };
    e.fancybox.cancel = function() {
        if (s) {
            return
        };
        s = !0;
        e.event.trigger('fancybox-cancel');
        N();
        i.onCancel(u, d, i);
        s = !1
    };
    e.fancybox.close = function() {
        if (S !== undefined) {
            clearTimeout(S);
            delete S
        };
        if (s || n.is(':hidden')) {
            return
        };
        s = !0;
        if (t && !1 === t.onCleanup(l, h, t)) {
            s = !1;
            return
        };
        N();
        e(C.add(b).add(w)).hide();
        e(o.add(p)).unbind();
        e(window).unbind('resize.fb scroll.fb');
        e(document).unbind('keydown.fb');
        o.find('iframe').attr('src', 'about:blank');
        if (t.titlePosition !== 'inside') {
            a.empty()
        };
        n.stop();

        function u() {
            p.fadeOut('fast');
            a.empty().hide();
            n.hide();
            e('.fancybox-inline-tmp').trigger('fancybox-cleanup');
            o.empty();
            t.onClosed(l, h, t);
            l = i = [];
            h = d = 0;
            t = i = {};
            s = !1
        };
        if (t.transitionOut == 'elastic') {
            f = F();
            var c = n.position();
            r = {
                top: c.top,
                left: c.left,
                width: n.width(),
                height: n.height()
            };
            if (t.opacity) {
                r.opacity = 1
            };
            a.empty().hide();
            x.prop = 1;
            e(x).animate({
                prop: 0
            }, {
                duration: t.speedOut,
                easing: t.easingOut,
                step: O,
                complete: u
            })
        } else {
            n.fadeOut(t.transitionOut == 'none' ? 0 : t.speedOut, u)
        }
    };
    e.fancybox.resize = function() {
        if (p.is(':visible')) {
            p.css('height', e(document).height())
        };
        e.fancybox.center(!0)
    };
    e.fancybox.center = function() {
        var e, i;
        if (s) {
            return
        };
        i = arguments[0] === !0 ? 1 : 0;
        e = z();
        if (!i && (n.width() > e[0] || n.height() > e[1])) {
            return
        };
        n.stop().animate({
            'top': parseInt(Math.max(e[3] - 20, e[3] + ((e[1] - o.height() - 40) * 0.5) - t.padding)),
            'left': parseInt(Math.max(e[2] - 20, e[2] + ((e[0] - o.width() - 40) * 0.5) - t.padding))
        }, typeof arguments[0] == 'number' ? arguments[0] : 200)
    };
    e.fancybox.init = function() {
        if (e('#fancybox-wrap').length) {
            return
        };
        e('body').append(c = e('<div id="fancybox-tmp"></div>'), g = e('<div id="fancybox-loading"><div></div></div>'), p = e('<div id="fancybox-overlay"></div>'), n = e('<div id="fancybox-wrap"></div>'));
        T = e('<div id="fancybox-outer"></div>').appendTo(n);
        T.append(o = e('<div id="fancybox-content"></div>'), C = e('<a data-nop id="fancybox-close"><i class="ka ka16 ka-delete"></i></a>'), a = e('<div id="fancybox-title"></div>'), b = e('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), w = e('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
        C.click(e.fancybox.close);
        g.click(e.fancybox.cancel);
        b.click(function(t) {
            t.preventDefault();
            e.fancybox.prev()
        });
        w.click(function(t) {
            t.preventDefault();
            e.fancybox.next()
        });
        if (e.fn.mousewheel) {
            n.bind('mousewheel.fb', function(t, i) {
                if (s) {
                    t.preventDefault()
                } else if (e(t.target).get(0).clientHeight == 0 || e(t.target).get(0).scrollHeight === e(t.target).get(0).clientHeight) {
                    t.preventDefault();
                    e.fancybox[i > 0 ? 'prev' : 'next']()
                }
            })
        }
    };
    e.fn.fancybox.defaults = {
        padding: 10,
        margin: 40,
        opacity: !1,
        modal: !1,
        cyclic: !1,
        scrolling: 'auto',
        width: 560,
        height: 340,
        autoScale: !0,
        autoDimensions: !0,
        centerOnScroll: !1,
        ajax: {},
        swf: {
            wmode: 'transparent'
        },
        hideOnOverlayClick: !0,
        hideOnContentClick: !1,
        overlayShow: !0,
        overlayOpacity: 0.9,
        titleShow: !1,
        titlePosition: 'float',
        titleFormat: null,
        titleFromAlt: !1,
        transitionIn: 'fade',
        transitionOut: 'fade',
        speedIn: 300,
        speedOut: 300,
        changeSpeed: 300,
        changeFade: 'fast',
        easingIn: 'swing',
        easingOut: 'swing',
        showCloseButton: !0,
        showNavArrows: !0,
        enableEscapeButton: !0,
        enableKeyboardNav: !0,
        onStart: function() {},
        onCancel: function() {},
        onComplete: function() {},
        onCleanup: function() {},
        onClosed: function() {},
        onError: function() {}
    };
    e(document).ready(function() {
        e.fancybox.init()
    })
})(jQuery);