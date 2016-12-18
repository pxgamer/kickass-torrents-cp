$.fn.customFileInput = function() {
    return $(this).each(function() {
        var e = $(this).addClass('customfile-input').mouseover(function() {
                t.addClass('customfile-hover')
            }).mouseout(function() {
                t.removeClass('customfile-hover')
            }).focus(function() {
                t.addClass('customfile-focus');
                e.data('val', e.val())
            }).blur(function() {
                t.removeClass('customfile-focus');
                $(this).trigger('checkChange')
            }).bind('disable', function() {
                e.prop('disabled', !0);
                t.addClass('customfile-disabled')
            }).bind('enable', function() {
                e.prop('disabled', !1);
                t.removeClass('customfile-disabled')
            }).bind('checkChange', function() {
                if (e.val() && e.val() != e.data('val')) {
                    e.trigger('change')
                }
            }).bind('change', function() {
                var e = $(this).val().split(/\\/).pop(),
                    t = 'customfile-ext-' + e.split('.').pop().toLowerCase();
                i.text(e).removeClass(i.data('fileExt') || '').addClass(t).data('fileExt', t).addClass('customfile-feedback-populated');
                n.html('<span>Change</span>')
            }).click(function() {
                e.data('val', e.val());
                setTimeout(function() {
                    e.trigger('checkChange')
                }, 100)
            }),
            t = $('<div class="customfile"></div>'),
            i = $('<span class="customfile-feedback" aria-hidden="true">No file selected...</span>').appendTo(t),
            n = $('<span class="customfile-button siteButton bigButton" aria-hidden="true"><span>Browse</span></span>').appendTo(t);
        if (e.is('[disabled]')) {
            e.trigger('disable')
        };
        t.mousemove(function(i) {
            e.css({
                'left': i.pageX - t.offset().left - e.outerWidth() + 20,
                'top': i.pageY - t.offset().top - 10
            })
        }).insertAfter(e);
        e.appendTo(t)
    })
};
(function(e) {
    e.fn.showPassword = function(t, i) {
        var n = e(this);
        e.fn.showPassword.checker = function(t, i) {
            e('input[id="' + t + '"]').click(function() {
                if (e(this).attr('checked')) {
                    e('input.' + i).val(n.val()).attr('id', n.attr('id')).attr('name', n.attr('name'));
                    e('input.' + i).css('display', 'inline');
                    n.css('display', 'none').removeAttr('id').removeAttr('name')
                } else {
                    n.val(e('input.' + i).val()).attr('id', e('input.' + i).attr('id')).attr('name', e('input.' + i).attr('name'));
                    n.css('display', 'inline');
                    e('input.' + i).css('display', 'none').removeAttr('id').removeAttr('name')
                }
            })
        };
        return this.each(function() {
            var s = {
                classname: 'nobr block font11px lightgrey',
                name: 'password-input',
                text: ' Show password'
            };
            var r = 'spcb_' + parseInt(Math.random() * 1000),
                o = r.replace('spcb_', 'spin_');
            if (n.attr('class') !== '') {
                var l = o + ' ' + n.attr('class')
            } else {
                var l = o
            };
            if (typeof t == 'object') {
                e.extend(s, t)
            };
            if (typeof i == 'object') {
                e.extend(s, i)
            };
            var c = s.name;
            if (s.classname == '') {
                theclass = ''
            } else {
                theclass = ' class="' + s.classname + '"'
            };
            e(this).before('<input type="text" value="" class="' + l + '" style="display: none;" />');
            var a = '<label' + theclass + '><input type="checkbox" id="' + r + '" name="' + c + '" value="sp" />' + s.text + '</label>';
            if (t == 'object' || typeof t == 'undefined') {
                e(this).after(a)
            } else {
                e(t).html(a)
            };
            e.fn.showPassword.checker(r, o);
            return this
        })
    }
})(jQuery);
jQuery.notification = (function(e, t) {
    var i = (function() {
            if (t.Notification && t.Notification.permissionLevel) return t.Notification;
            var n = t.webkitNotifications;
            if (!n) return (function() {
                var t = {};
                t.permissionLevel = function() {
                    return 'unsupported'
                };
                t.requestPermission = e.noop;
                return t
            }());
            var s = ['granted', 'default', 'denied'],
                i = function(t, s) {
                    s = s || {};
                    if (!t) {
                        return
                    };
                    var r = n.createNotification(s.iconUrl || '', t, s.body || '');
                    r.titleDir = s.titleDir || 'auto';
                    r.body = s.body || '';
                    r.bodyDir = s.bodyDir || 'auto';
                    r.tag = s.tag || '';
                    r.replaceId = s.tag || '';
                    r.iconUrl = s.iconUrl || '';
                    r.onclick = s.onclick || e.noop;
                    r.onshow = s.onshow || e.noop;
                    r.onerror = s.onerror || e.noop;
                    r.onclose = s.onclose || e.noop;
                    if (i.permissionLevel() === 'granted') {
                        r.show()
                    };
                    return r
                };
            i.permissionLevel = function() {
                return i.permission = s[n.checkPermission()]
            };
            i.permissionLevel();
            i.requestPermission = function(s) {
                if (i.permissionLevel() !== 'default') {
                    s();
                    return
                };
                e(document).one('click', function() {
                    if (n.requestPermission.length) {
                        n.requestPermission(function() {
                            i.permissionLevel();
                            s()
                        });
                        return
                    };
                    n.requestPermission();
                    var e = t.setInterval(function() {
                        var n = i.permissionLevel();
                        if (n !== 'default') {
                            t.clearInterval(e);
                            s()
                        }
                    }, 200)
                })
            };
            return i
        }()),
        n = function(t) {
            var n = e.Deferred();
            if (!i.prototype) {
                n.reject('unsupported');
                return n.promise()
            };
            if (typeof t === 'string') {
                t = {
                    title: t
                }
            };
            t = t || {};
            t.autoclose = typeof t.autoclose === 'undefined' ? !0 : t.autoclose;
            t.timeout = t.timeout || Infinity;
            i.requestPermission(function() {
                if ((i.permission || i.permissionLevel()) !== 'granted') {
                    n.reject(i.permissionLevel());
                    return
                };
                var e = new i(t.title, t);
                if (isFinite(t.timeout)) {
                    e.addEventListener('show', function() {
                        setTimeout(function() {
                            e.cancel()
                        }, t.timeout)
                    }, !1)
                };
                if (t.autoclose) {
                    e.addEventListener('click', function() {
                        e.cancel()
                    }, !1)
                };
                n.resolve(e)
            });
            return n.promise()
        };
    n.permissionLevel = i.permissionLevel;
    n.requestPermission = i.requestPermission;
    return n
}(jQuery, window));
this.vtip = function() {
    this.xOffset = -10;
    this.yOffset = 10;
    $('.vtip').unbind().hover(function(e) {
        var t = $(this).next('.vtipContentjs').size() ? $(this).next('.vtipContentjs').html() : this.title;
        this.t = this.title;
        this.title = '';
        $('body').append('<div id="vtip"><img id="vtipArrow" />' + t + '</div>');
        $('div#vtip').css({
            top: e.pageY + yOffset,
            left: e.pageX + xOffset
        }).fadeIn('fast')
    }, function() {
        this.title = this.t;
        $('div#vtip').fadeOut('slow').remove()
    })
};
jQuery(document).ready(function(e) {
    vtip()
});
(function(e) {
    'function' == typeof define && define.amd ? define(['jquery'], e) : e(jQuery)
})(function(e) {
    function r(t, i) {
        var n, s, r, a = t.nodeName.toLowerCase();
        return 'area' === a ? (n = t.parentNode, s = n.name, t.href && s && 'map' === n.nodeName.toLowerCase() ? (r = e('img[usemap=\'#' + s + '\']')[0], !!r && o(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(a) ? !t.disabled : 'a' === a ? t.href || i : i) && o(t)
    };

    function o(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return 'hidden' === e.css(this, 'visibility')
        }).length
    };

    function h(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css('position'), ('absolute' === t || 'relative' === t || 'fixed' === t) && (i = parseInt(e.css('zIndex'), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        };
        return 0
    };

    function a() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = 'ui-datepicker-div', this._inlineClass = 'ui-datepicker-inline', this._appendClass = 'ui-datepicker-append', this._triggerClass = 'ui-datepicker-trigger', this._dialogClass = 'ui-datepicker-dialog', this._disableClass = 'ui-datepicker-disabled', this._unselectableClass = 'ui-datepicker-unselectable', this._currentClass = 'ui-datepicker-current-day', this._dayOverClass = 'ui-datepicker-days-cell-over', this.regional = [], this.regional[''] = {
            closeText: 'Done',
            prevText: 'Prev',
            nextText: 'Next',
            currentText: 'Today',
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            weekHeader: 'Wk',
            dateFormat: 'mm/dd/yy',
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ''
        }, this._defaults = {
            showOn: 'focus',
            showAnim: 'fadeIn',
            showOptions: {},
            defaultDate: null,
            appendText: '',
            buttonText: '...',
            buttonImage: '',
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: 'c-10:c+10',
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: '+10',
            minDate: null,
            maxDate: null,
            duration: 'fast',
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: '',
            altFormat: '',
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional['']), this.regional.en = e.extend(!0, {}, this.regional['']), this.regional['en-US'] = e.extend(!0, {}, this.regional.en), this.dpDiv = l(e('<div id=\'' + this._mainDivId + '\' class=\'ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>'))
    };

    function l(t) {
        var i = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
        return t.delegate(i, 'mouseout', function() {
            e(this).removeClass('ui-state-hover'), -1 !== this.className.indexOf('ui-datepicker-prev') && e(this).removeClass('ui-datepicker-prev-hover'), -1 !== this.className.indexOf('ui-datepicker-next') && e(this).removeClass('ui-datepicker-next-hover')
        }).delegate(i, 'mouseover', c)
    };

    function c() {
        e.datepicker._isDisabledDatepicker(t.inline ? t.dpDiv.parent()[0] : t.input[0]) || (e(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover'), e(this).addClass('ui-state-hover'), -1 !== this.className.indexOf('ui-datepicker-prev') && e(this).addClass('ui-datepicker-prev-hover'), -1 !== this.className.indexOf('ui-datepicker-next') && e(this).addClass('ui-datepicker-next-hover'))
    };

    function n(t, i) {
        e.extend(t, i);
        for (var n in i) null == i[n] && (t[n] = i[n]);
        return t
    };
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: '1.11.4',
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css('position'),
                s = 'absolute' === i,
                r = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                n = this.parents().filter(function() {
                    var t = e(this);
                    return s && 'static' === t.css('position') ? !1 : r.test(t.css('overflow') + t.css('overflow-y') + t.css('overflow-x'))
                }).eq(0);
            return 'fixed' !== i && n.length ? n : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = 'ui-id-' + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr('id')
            })
        }
    }), e.extend(e.expr[':'], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, n) {
            return !!e.data(t, n[3])
        },
        focusable: function(t) {
            return r(t, !isNaN(e.attr(t, 'tabindex')))
        },
        tabbable: function(t) {
            var i = e.attr(t, 'tabindex'),
                n = isNaN(i);
            return (n || i >= 0) && r(t, !n)
        }
    }), e('<a>').outerWidth(1).jquery || e.each(['Width', 'Height'], function(t, i) {
        function r(t, i, n, s) {
            return e.each(o, function() {
                i -= parseFloat(e.css(t, 'padding' + this)) || 0, n && (i -= parseFloat(e.css(t, 'border' + this + 'Width')) || 0), s && (i -= parseFloat(e.css(t, 'margin' + this)) || 0)
            }), i
        };
        var o = 'Width' === i ? ['Left', 'Right'] : ['Top', 'Bottom'],
            n = i.toLowerCase(),
            s = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn['inner' + i] = function(t) {
            return void 0 === t ? s['inner' + i].call(this) : this.each(function() {
                e(this).css(n, r(this, t) + 'px')
            })
        }, e.fn['outer' + i] = function(t, o) {
            return 'number' != typeof t ? s['outer' + i].call(this, t) : this.each(function() {
                e(this).css(n, r(this, t, !0, o) + 'px')
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e('<a>').data('a-b', 'a').removeData('a-b').data('a-b') && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(i, n) {
                return 'number' == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), n && n.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = 'onselectstart' in document.createElement('div') ? 'selectstart' : 'mousedown';
            return function() {
                return this.bind(e + '.ui-disableSelection', function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind('.ui-disableSelection')
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css('zIndex', t);
            if (this.length)
                for (var n, s, i = e(this[0]); i.length && i[0] !== document;) {
                    if (n = i.css('position'), ('absolute' === n || 'relative' === n || 'fixed' === n) && (s = parseInt(i.css('zIndex'), 10), !isNaN(s) && 0 !== s)) return s;
                    i = i.parent()
                };
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, n) {
            var s, r = e.ui[t].prototype;
            for (s in n) r.plugins[s] = r.plugins[s] || [], r.plugins[s].push([i, n[s]])
        },
        call: function(e, t, i, n) {
            var s, r = e.plugins[t];
            if (r && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (s = 0; r.length > s; s++) e.options[r[s][0]] && r[s][1].apply(e.element, i)
        }
    };
    var u = 0,
        s = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var s, r, o;
            for (o = 0; null != (r = i[o]); o++) try {
                s = e._data(r, 'events'), s && s.remove && e(r).triggerHandler('remove')
            } catch (n) {};
            t(i)
        }
    }(e.cleanData), e.widget = function(t, i, n) {
        var l, r, s, a, c = {},
            o = t.split('.')[0];
        return t = t.split('.')[1], l = o + '-' + t, n || (n = i, i = e.Widget), e.expr[':'][l.toLowerCase()] = function(t) {
            return !!e.data(t, l)
        }, e[o] = e[o] || {}, r = e[o][t], s = e[o][t] = function(e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new s(e, t)
        }, e.extend(s, r, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }), a = new i, a.options = e.widget.extend({}, a.options), e.each(n, function(t, n) {
            return e.isFunction(n) ? (c[t] = function() {
                var e = function() {
                        return i.prototype[t].apply(this, arguments)
                    },
                    s = function(e) {
                        return i.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, i = this._super,
                        r = this._superApply;
                    return this._super = e, this._superApply = s, t = n.apply(this, arguments), this._super = i, this._superApply = r, t
                }
            }(), void 0) : (c[t] = n, void 0)
        }), s.prototype = e.widget.extend(a, {
            widgetEventPrefix: r ? a.widgetEventPrefix || t : t
        }, c, {
            constructor: s,
            namespace: o,
            widgetName: t,
            widgetFullName: l
        }), r ? (e.each(r._childConstructors, function(t, i) {
            var n = i.prototype;
            e.widget(n.namespace + '.' + n.widgetName, s, i._proto)
        }), delete r._childConstructors) : i._childConstructors.push(s), e.widget.bridge(t, s), s
    }, e.widget.extend = function(t) {
        for (var i, n, o = s.call(arguments, 1), r = 0, a = o.length; a > r; r++)
            for (i in o[r]) n = o[r][i], o[r].hasOwnProperty(i) && void 0 !== n && (t[i] = e.isPlainObject(n) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], n) : e.widget.extend({}, n) : n);
        return t
    }, e.widget.bridge = function(t, i) {
        var n = i.prototype.widgetFullName || t;
        e.fn[t] = function(r) {
            var l = 'string' == typeof r,
                a = s.call(arguments, 1),
                o = this;
            return l ? this.each(function() {
                var i, s = e.data(this, n);
                return 'instance' === r ? (o = s, !1) : s ? e.isFunction(s[r]) && '_' !== r.charAt(0) ? (i = s[r].apply(s, a), i !== s && void 0 !== i ? (o = i && i.jquery ? o.pushStack(i.get()) : i, !1) : void 0) : e.error('no such method \'' + r + '\' for ' + t + ' widget instance') : e.error('cannot call methods on ' + t + ' prior to initialization; attempted to call method \'' + r + '\'')
            }) : (a.length && (r = e.widget.extend.apply(null, [r].concat(a))), this.each(function() {
                var t = e.data(this, n);
                t ? (t.option(r || {}), t._init && t._init()) : e.data(this, n, new i(r, this))
            })), o
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: 'widget',
        widgetEventPrefix: '',
        defaultElement: '<div>',
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = u++, this.eventNamespace = '.' + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger('create', null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr('aria-disabled').removeClass(this.widgetFullName + '-disabled ui-state-disabled'), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus')
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var n, s, r, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ('string' == typeof t)
                if (o = {}, n = t.split('.'), t = n.shift(), n.length) {
                    for (s = o[t] = e.widget.extend({}, this.options[t]), r = 0; n.length - 1 > r; r++) s[n[r]] = s[n[r]] || {}, s = s[n[r]];
                    if (t = n.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                    s[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i
                };
            return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, 'disabled' === e && (this.widget().toggleClass(this.widgetFullName + '-disabled', !!t), t && (this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus'))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, i, n) {
            var r, s = this;
            'boolean' != typeof t && (n = i, i = t, t = !1), n ? (i = r = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, r = this.widget()), e.each(n, function(n, o) {
                function a() {
                    return t || s.options.disabled !== !0 && !e(this).hasClass('ui-state-disabled') ? ('string' == typeof o ? s[o] : o).apply(s, arguments) : void 0
                };
                'string' != typeof o && (a.guid = o.guid = o.guid || a.guid || e.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/),
                    c = l[1] + s.eventNamespace,
                    u = l[2];
                u ? r.delegate(u, c, a) : i.bind(c, a)
            })
        },
        _off: function(t, i) {
            i = (i || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function n() {
                return ('string' == typeof e ? i[e] : e).apply(i, arguments)
            };
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass('ui-state-hover')
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass('ui-state-hover')
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass('ui-state-focus')
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass('ui-state-focus')
                }
            })
        },
        _trigger: function(t, i, n) {
            var s, r, o = this.options[t];
            if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], r = i.originalEvent)
                for (s in r) s in i || (i[s] = r[s]);
            return this.element.trigger(i, n), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: 'fadeIn',
        hide: 'fadeOut'
    }, function(t, i) {
        e.Widget.prototype['_' + t] = function(n, s, r) {
            'string' == typeof s && (s = {
                effect: s
            });
            var a, o = s ? s === !0 || 'number' == typeof s ? i : s.effect || i : t;
            s = s || {}, 'number' == typeof s && (s = {
                duration: s
            }), a = !e.isEmptyObject(s), s.complete = r, s.delay && n.delay(s.delay), a && e.effects && e.effects.effect[o] ? n[t](s) : o !== t && n[o] ? n[o](s.duration, s.easing, r) : n.queue(function(i) {
                e(this)[t](), r && r.call(n[0]), i()
            })
        }
    }), e.widget;
    var i = !1;
    e(document).mouseup(function() {
            i = !1
        }), e.widget('ui.mouse', {
            version: '1.11.4',
            options: {
                cancel: 'input,textarea,button,select,option',
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind('mousedown.' + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind('click.' + this.widgetName, function(i) {
                    return !0 === e.data(i.target, t.widgetName + '.preventClickEvent') ? (e.removeData(i.target, t.widgetName + '.preventClickEvent'), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind('.' + this.widgetName), this._mouseMoveDelegate && this.document.unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!i) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var n = this,
                        s = 1 === t.which,
                        r = 'string' == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return s && !r && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + '.preventClickEvent') && e.removeData(t.target, this.widgetName + '.preventClickEvent'), this._mouseMoveDelegate = function(e) {
                        return n._mouseMove(e)
                    }, this._mouseUpDelegate = function(e) {
                        return n._mouseUp(e)
                    }, this.document.bind('mousemove.' + this.widgetName, this._mouseMoveDelegate).bind('mouseup.' + this.widgetName, this._mouseUpDelegate), t.preventDefault(), i = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                    if (!t.which) return this._mouseUp(t)
                };
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                return this.document.unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + '.preventClickEvent', !0), this._mouseStop(t)), i = !1, !1
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }),
        function() {
            function d(e, t, i) {
                return [parseFloat(e[0]) * (h.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (h.test(e[1]) ? i / 100 : 1)]
            };

            function n(t, i) {
                return parseInt(e.css(t, i), 10) || 0
            };

            function p(t) {
                var i = t[0];
                return 9 === i.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(i) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            };
            e.ui = e.ui || {};
            var s, r, i = Math.max,
                t = Math.abs,
                o = Math.round,
                a = /left|center|right/,
                l = /top|center|bottom/,
                c = /[\+\-]\d+(\.[\d]+)?%?/,
                u = /^\w+/,
                h = /%$/,
                f = e.fn.position;
            e.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== s) return s;
                        var n, i, t = e('<div style=\'display:block;position:absolute;width:50px;height:50px;overflow:hidden;\'><div style=\'height:100px;width:auto;\'></div></div>'),
                            r = t.children()[0];
                        return e('body').append(t), n = r.offsetWidth, t.css('overflow', 'scroll'), i = r.offsetWidth, n === i && (i = t[0].clientWidth), t.remove(), s = n - i
                    },
                    getScrollInfo: function(t) {
                        var i = t.isWindow || t.isDocument ? '' : t.element.css('overflow-x'),
                            n = t.isWindow || t.isDocument ? '' : t.element.css('overflow-y'),
                            s = 'scroll' === i || 'auto' === i && t.width < t.element[0].scrollWidth,
                            r = 'scroll' === n || 'auto' === n && t.height < t.element[0].scrollHeight;
                        return {
                            width: r ? e.position.scrollbarWidth() : 0,
                            height: s ? e.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(t) {
                        var i = e(t || window),
                            n = e.isWindow(i[0]),
                            s = !!i[0] && 9 === i[0].nodeType;
                        return {
                            element: i,
                            isWindow: n,
                            isDocument: s,
                            offset: i.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: n || s ? i.width() : i.outerWidth(),
                            height: n || s ? i.height() : i.outerHeight()
                        }
                    }
                }, e.fn.position = function(s) {
                    if (!s || !s.of) return f.apply(this, arguments);
                    s = e.extend({}, s);
                    var y, h, m, v, g, w, x = e(s.of),
                        C = e.position.getWithinInfo(s.within),
                        T = e.position.getScrollInfo(C),
                        b = (s.collision || 'flip').split(' '),
                        k = {};
                    return w = p(x), x[0].preventDefault && (s.at = 'left top'), h = w.width, m = w.height, v = w.offset, g = e.extend({}, v), e.each(['my', 'at'], function() {
                        var t, i, e = (s[this] || '').split(' ');
                        1 === e.length && (e = a.test(e[0]) ? e.concat(['center']) : l.test(e[0]) ? ['center'].concat(e) : ['center', 'center']), e[0] = a.test(e[0]) ? e[0] : 'center', e[1] = l.test(e[1]) ? e[1] : 'center', t = c.exec(e[0]), i = c.exec(e[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], s[this] = [u.exec(e[0])[0], u.exec(e[1])[0]]
                    }), 1 === b.length && (b[1] = b[0]), 'right' === s.at[0] ? g.left += h : 'center' === s.at[0] && (g.left += h / 2), 'bottom' === s.at[1] ? g.top += m : 'center' === s.at[1] && (g.top += m / 2), y = d(k.at, h, m), g.left += y[0], g.top += y[1], this.each(function() {
                        var p, w, l = e(this),
                            c = l.outerWidth(),
                            u = l.outerHeight(),
                            D = n(this, 'marginLeft'),
                            S = n(this, 'marginTop'),
                            I = c + D + n(this, 'marginRight') + T.width,
                            P = u + S + n(this, 'marginBottom') + T.height,
                            a = e.extend({}, g),
                            f = d(k.my, l.outerWidth(), l.outerHeight());
                        'right' === s.my[0] ? a.left -= c : 'center' === s.my[0] && (a.left -= c / 2), 'bottom' === s.my[1] ? a.top -= u : 'center' === s.my[1] && (a.top -= u / 2), a.left += f[0], a.top += f[1], r || (a.left = o(a.left), a.top = o(a.top)), p = {
                            marginLeft: D,
                            marginTop: S
                        }, e.each(['left', 'top'], function(t, i) {
                            e.ui.position[b[t]] && e.ui.position[b[t]][i](a, {
                                targetWidth: h,
                                targetHeight: m,
                                elemWidth: c,
                                elemHeight: u,
                                collisionPosition: p,
                                collisionWidth: I,
                                collisionHeight: P,
                                offset: [y[0] + f[0], y[1] + f[1]],
                                my: s.my,
                                at: s.at,
                                within: C,
                                elem: l
                            })
                        }), s.using && (w = function(e) {
                            var n = v.left - a.left,
                                d = n + h - c,
                                r = v.top - a.top,
                                f = r + m - u,
                                o = {
                                    target: {
                                        element: x,
                                        left: v.left,
                                        top: v.top,
                                        width: h,
                                        height: m
                                    },
                                    element: {
                                        element: l,
                                        left: a.left,
                                        top: a.top,
                                        width: c,
                                        height: u
                                    },
                                    horizontal: 0 > d ? 'left' : n > 0 ? 'right' : 'center',
                                    vertical: 0 > f ? 'top' : r > 0 ? 'bottom' : 'middle'
                                };
                            c > h && h > t(n + d) && (o.horizontal = 'center'), u > m && m > t(r + f) && (o.vertical = 'middle'), o.important = i(t(n), t(d)) > i(t(r), t(f)) ? 'horizontal' : 'vertical', s.using.call(this, e, o)
                        }), l.offset(e.extend(a, {
                            using: w
                        }))
                    })
                }, e.ui.position = {
                    fit: {
                        left: function(e, t) {
                            var c, o = t.within,
                                s = o.isWindow ? o.scrollLeft : o.offset.left,
                                a = o.width,
                                l = e.left - t.collisionPosition.marginLeft,
                                n = s - l,
                                r = l + t.collisionWidth - a - s;
                            t.collisionWidth > a ? n > 0 && 0 >= r ? (c = e.left + n + t.collisionWidth - a - s, e.left += n - c) : e.left = r > 0 && 0 >= n ? s : n > r ? s + a - t.collisionWidth : s : n > 0 ? e.left += n : r > 0 ? e.left -= r : e.left = i(e.left - l, e.left)
                        },
                        top: function(e, t) {
                            var c, a = t.within,
                                s = a.isWindow ? a.scrollTop : a.offset.top,
                                o = t.within.height,
                                l = e.top - t.collisionPosition.marginTop,
                                n = s - l,
                                r = l + t.collisionHeight - o - s;
                            t.collisionHeight > o ? n > 0 && 0 >= r ? (c = e.top + n + t.collisionHeight - o - s, e.top += n - c) : e.top = r > 0 && 0 >= n ? s : n > r ? s + o - t.collisionHeight : s : n > 0 ? e.top += n : r > 0 ? e.top -= r : e.top = i(e.top - l, e.top)
                        }
                    },
                    flip: {
                        left: function(e, i) {
                            var a, l, n = i.within,
                                p = n.offset.left + n.scrollLeft,
                                u = n.width,
                                c = n.isWindow ? n.scrollLeft : n.offset.left,
                                h = e.left - i.collisionPosition.marginLeft,
                                d = h - c,
                                f = h + i.collisionWidth - u - c,
                                s = 'left' === i.my[0] ? -i.elemWidth : 'right' === i.my[0] ? i.elemWidth : 0,
                                r = 'left' === i.at[0] ? i.targetWidth : 'right' === i.at[0] ? -i.targetWidth : 0,
                                o = -2 * i.offset[0];
                            0 > d ? (a = e.left + s + r + o + i.collisionWidth - u - p, (0 > a || t(d) > a) && (e.left += s + r + o)) : f > 0 && (l = e.left - i.collisionPosition.marginLeft + s + r + o - c, (l > 0 || f > t(l)) && (e.left += s + r + o))
                        },
                        top: function(e, i) {
                            var a, l, n = i.within,
                                p = n.offset.top + n.scrollTop,
                                u = n.height,
                                c = n.isWindow ? n.scrollTop : n.offset.top,
                                h = e.top - i.collisionPosition.marginTop,
                                d = h - c,
                                f = h + i.collisionHeight - u - c,
                                m = 'top' === i.my[1],
                                s = m ? -i.elemHeight : 'bottom' === i.my[1] ? i.elemHeight : 0,
                                r = 'top' === i.at[1] ? i.targetHeight : 'bottom' === i.at[1] ? -i.targetHeight : 0,
                                o = -2 * i.offset[1];
                            0 > d ? (l = e.top + s + r + o + i.collisionHeight - u - p, (0 > l || t(d) > l) && (e.top += s + r + o)) : f > 0 && (a = e.top - i.collisionPosition.marginTop + s + r + o - c, (a > 0 || f > t(a)) && (e.top += s + r + o))
                        }
                    },
                    flipfit: {
                        left: function() {
                            e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var t, i, n, s, o, a = document.getElementsByTagName('body')[0],
                        l = document.createElement('div');
                    t = document.createElement(a ? 'div' : 'body'), n = {
                        visibility: 'hidden',
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: 'none'
                    }, a && e.extend(n, {
                        position: 'absolute',
                        left: '-1000px',
                        top: '-1000px'
                    });
                    for (o in n) t.style[o] = n[o];
                    t.appendChild(l), i = a || document.documentElement, i.insertBefore(t, i.firstChild), l.style.cssText = 'position: absolute; left: 10.7432222px;', s = e(l).offset().left, r = s > 10 && 11 > s, t.innerHTML = '', i.removeChild(t)
                }()
        }(), e.ui.position, e.widget('ui.draggable', e.ui.mouse, {
            version: '1.11.4',
            widgetEventPrefix: 'drag',
            options: {
                addClasses: !0,
                appendTo: 'parent',
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: 'auto',
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: 'original',
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: 'default',
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: 'both',
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                'original' === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass('ui-draggable'), this.options.disabled && this.element.addClass('ui-draggable-disabled'), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(e, t) {
                this._super(e, t), 'handle' === e && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is('.ui-draggable-dragging') ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled'), this._removeHandleClassName(), this._mouseDestroy(), void 0)
            },
            _mouseCapture: function(t) {
                var i = this.options;
                return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest('.ui-resizable-handle').length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? 'iframe' : i.iframeFix), !0) : !1)
            },
            _blockFrames: function(t) {
                this.iframeBlocks = this.document.find(t).map(function() {
                    var t = e(this);
                    return e('<div>').css('position', 'absolute').appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(t) {
                var n = this.document[0];
                if (this.handleElement.is(t.target)) try {
                    n.activeElement && 'body' !== n.activeElement.nodeName.toLowerCase() && e(n.activeElement).blur()
                } catch (i) {}
            },
            _mouseStart: function(t) {
                var i = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass('ui-draggable-dragging'), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css('position'), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return 'fixed' === e(this).css('position')
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger('start', t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
            },
            _refreshOffsets: function(e) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                }
            },
            _mouseDrag: function(t, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo('absolute'), !i) {
                    var n = this._uiHash();
                    if (this._trigger('drag', t, n) === !1) return this._mouseUp({}), !1;
                    this.position = n.position
                };
                return this.helper[0].style.left = this.position.left + 'px', this.helper[0].style.top = this.position.top + 'px', e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var n = this,
                    i = !1;
                return e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), 'invalid' === this.options.revert && !i || 'valid' === this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    n._trigger('stop', t) !== !1 && n._clear()
                }) : this._trigger('stop', t) !== !1 && this._clear(), !1
            },
            _mouseUp: function(t) {
                return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is('.ui-draggable-dragging') ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass('ui-draggable-handle')
            },
            _removeHandleClassName: function() {
                this.handleElement.removeClass('ui-draggable-handle')
            },
            _createHelper: function(t) {
                var n = this.options,
                    s = e.isFunction(n.helper),
                    i = s ? e(n.helper.apply(this.element[0], [t])) : 'clone' === n.helper ? this.element.clone().removeAttr('id') : this.element;
                return i.parents('body').length || i.appendTo('parent' === n.appendTo ? this.element[0].parentNode : n.appendTo), s && i[0] === this.element[0] && this._setPositionRelative(), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css('position')) || i.css('position', 'absolute'), i
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css('position')) || (this.element[0].style.position = 'relative')
            },
            _adjustOffsetFromHelper: function(t) {
                'string' == typeof t && (t = t.split(' ')), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), 'left' in t && (this.offset.click.left = t.left + this.margins.left), 'right' in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 'top' in t && (this.offset.click.top = t.top + this.margins.top), 'bottom' in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function(e) {
                return /(html|body)/i.test(e.tagName) || e === this.document[0]
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    i = this.document[0];
                return 'absolute' === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ('relative' !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var e = this.element.position(),
                    t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top - (parseInt(this.helper.css('top'), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                    left: e.left - (parseInt(this.helper.css('left'), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css('marginLeft'), 10) || 0,
                    top: parseInt(this.element.css('marginTop'), 10) || 0,
                    right: parseInt(this.element.css('marginRight'), 10) || 0,
                    bottom: parseInt(this.element.css('marginBottom'), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var r, t, i, n = this.options,
                    s = this.document[0];
                return this.relativeContainer = null, n.containment ? 'window' === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : 'document' === n.containment ? (this.containment = [0, 0, e(s).width() - this.helperProportions.width - this.margins.left, (e(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ('parent' === n.containment && (n.containment = this.helper[0].parentNode), t = e(n.containment), i = t[0], i && (r = /(scroll|auto)/.test(t.css('overflow')), this.containment = [(parseInt(t.css('borderLeftWidth'), 10) || 0) + (parseInt(t.css('paddingLeft'), 10) || 0), (parseInt(t.css('borderTopWidth'), 10) || 0) + (parseInt(t.css('paddingTop'), 10) || 0), (r ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css('borderRightWidth'), 10) || 0) - (parseInt(t.css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (r ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css('borderBottomWidth'), 10) || 0) - (parseInt(t.css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = t), void 0) : (this.containment = null, void 0)
            },
            _convertPositionTo: function(e, t) {
                t || (t = this.position);
                var i = 'absolute' === e ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ('fixed' === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ('fixed' === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(e, t) {
                var i, l, s, r, n = this.options,
                    c = this._isRootNode(this.scrollParent[0]),
                    o = e.pageX,
                    a = e.pageY;
                return c && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), t && (this.containment && (this.relativeContainer ? (l = this.relativeContainer.offset(), i = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (a = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (a = i[3] + this.offset.click.top)), n.grid && (s = n.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY, a = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - n.grid[1] : s + n.grid[1] : s, r = n.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX, o = i ? r - this.offset.click.left >= i[0] || r - this.offset.click.left > i[2] ? r : r - this.offset.click.left >= i[0] ? r - n.grid[0] : r + n.grid[0] : r), 'y' === n.axis && (o = this.originalPageX), 'x' === n.axis && (a = this.originalPageY)), {
                    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? -this.offset.scroll.top : c ? 0 : this.offset.scroll.top),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? -this.offset.scroll.left : c ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass('ui-draggable-dragging'), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _normalizeRightBottom: function() {
                'y' !== this.options.axis && 'auto' !== this.helper.css('right') && (this.helper.width(this.helper.width()), this.helper.css('right', 'auto')), 'x' !== this.options.axis && 'auto' !== this.helper.css('bottom') && (this.helper.height(this.helper.height()), this.helper.css('bottom', 'auto'))
            },
            _trigger: function(t, i, n) {
                return n = n || this._uiHash(), e.ui.plugin.call(this, t, [i, n, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo('absolute'), n.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, n)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), e.ui.plugin.add('draggable', 'connectToSortable', {
            start: function(t, i, n) {
                var s = e.extend({}, i, {
                    item: n.element
                });
                n.sortables = [], e(n.options.connectToSortable).each(function() {
                    var i = e(this).sortable('instance');
                    i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger('activate', t, s))
                })
            },
            stop: function(t, i, n) {
                var s = e.extend({}, i, {
                    item: n.element
                });
                n.cancelHelperRemoval = !1, e.each(n.sortables, function() {
                    var e = this;
                    e.isOver ? (e.isOver = 0, n.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                        position: e.placeholder.css('position'),
                        top: e.placeholder.css('top'),
                        left: e.placeholder.css('left')
                    }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger('deactivate', t, s))
                })
            },
            drag: function(t, i, n) {
                e.each(n.sortables, function() {
                    var r = !1,
                        s = this;
                    s.positionAbs = n.positionAbs, s.helperProportions = n.helperProportions, s.offset.click = n.offset.click, s._intersectsWith(s.containerCache) && (r = !0, e.each(n.sortables, function() {
                        return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== s && this._intersectsWith(this.containerCache) && e.contains(s.element[0], this.element[0]) && (r = !1), r
                    })), r ? (s.isOver || (s.isOver = 1, n._parent = i.helper.parent(), s.currentItem = i.helper.appendTo(s.element).data('ui-sortable-item', !0), s.options._helper = s.options.helper, s.options.helper = function() {
                        return i.helper[0]
                    }, t.target = s.currentItem[0], s._mouseCapture(t, !0), s._mouseStart(t, !0, !0), s.offset.click.top = n.offset.click.top, s.offset.click.left = n.offset.click.left, s.offset.parent.left -= n.offset.parent.left - s.offset.parent.left, s.offset.parent.top -= n.offset.parent.top - s.offset.parent.top, n._trigger('toSortable', t), n.dropped = s.element, e.each(n.sortables, function() {
                        this.refreshPositions()
                    }), n.currentItem = n.element, s.fromOutside = n), s.currentItem && (s._mouseDrag(t), i.position = s.position)) : s.isOver && (s.isOver = 0, s.cancelHelperRemoval = !0, s.options._revert = s.options.revert, s.options.revert = !1, s._trigger('out', t, s._uiHash(s)), s._mouseStop(t, !0), s.options.revert = s.options._revert, s.options.helper = s.options._helper, s.placeholder && s.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(t), i.position = n._generatePosition(t, !0), n._trigger('fromSortable', t), n.dropped = !1, e.each(n.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), e.ui.plugin.add('draggable', 'cursor', {
            start: function(t, i, n) {
                var s = e('body'),
                    r = n.options;
                s.css('cursor') && (r._cursor = s.css('cursor')), s.css('cursor', r.cursor)
            },
            stop: function(t, i, n) {
                var s = n.options;
                s._cursor && e('body').css('cursor', s._cursor)
            }
        }), e.ui.plugin.add('draggable', 'opacity', {
            start: function(t, i, n) {
                var s = e(i.helper),
                    r = n.options;
                s.css('opacity') && (r._opacity = s.css('opacity')), s.css('opacity', r.opacity)
            },
            stop: function(t, i, n) {
                var s = n.options;
                s._opacity && e(i.helper).css('opacity', s._opacity)
            }
        }), e.ui.plugin.add('draggable', 'scroll', {
            start: function(e, t, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && 'HTML' !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(t, i, n) {
                var s = n.options,
                    a = !1,
                    o = n.scrollParentNotHidden[0],
                    r = n.document[0];
                o !== r && 'HTML' !== o.tagName ? (s.axis && 'x' === s.axis || (n.overflowOffset.top + o.offsetHeight - t.pageY < s.scrollSensitivity ? o.scrollTop = a = o.scrollTop + s.scrollSpeed : t.pageY - n.overflowOffset.top < s.scrollSensitivity && (o.scrollTop = a = o.scrollTop - s.scrollSpeed)), s.axis && 'y' === s.axis || (n.overflowOffset.left + o.offsetWidth - t.pageX < s.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + s.scrollSpeed : t.pageX - n.overflowOffset.left < s.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - s.scrollSpeed))) : (s.axis && 'x' === s.axis || (t.pageY - e(r).scrollTop() < s.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < s.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + s.scrollSpeed))), s.axis && 'y' === s.axis || (t.pageX - e(r).scrollLeft() < s.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < s.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + s.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
            }
        }), e.ui.plugin.add('draggable', 'snap', {
            start: function(t, i, n) {
                var s = n.options;
                n.snapElements = [], e(s.snap.constructor !== String ? s.snap.items || ':data(ui-draggable)' : s.snap).each(function() {
                    var t = e(this),
                        i = t.offset();
                    this !== n.element[0] && n.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function(t, i, n) {
                var o, a, l, c, u, d, h, f, s, g, v = n.options,
                    r = v.snapTolerance,
                    p = i.offset.left,
                    y = p + n.helperProportions.width,
                    m = i.offset.top,
                    b = m + n.helperProportions.height;
                for (s = n.snapElements.length - 1; s >= 0; s--) u = n.snapElements[s].left - n.margins.left, d = u + n.snapElements[s].width, h = n.snapElements[s].top - n.margins.top, f = h + n.snapElements[s].height, u - r > y || p > d + r || h - r > b || m > f + r || !e.contains(n.snapElements[s].item.ownerDocument, n.snapElements[s].item) ? (n.snapElements[s].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {
                    snapItem: n.snapElements[s].item
                })), n.snapElements[s].snapping = !1) : ('inner' !== v.snapMode && (o = r >= Math.abs(h - b), a = r >= Math.abs(f - m), l = r >= Math.abs(u - y), c = r >= Math.abs(d - p), o && (i.position.top = n._convertPositionTo('relative', {
                    top: h - n.helperProportions.height,
                    left: 0
                }).top), a && (i.position.top = n._convertPositionTo('relative', {
                    top: f,
                    left: 0
                }).top), l && (i.position.left = n._convertPositionTo('relative', {
                    top: 0,
                    left: u - n.helperProportions.width
                }).left), c && (i.position.left = n._convertPositionTo('relative', {
                    top: 0,
                    left: d
                }).left)), g = o || a || l || c, 'outer' !== v.snapMode && (o = r >= Math.abs(h - m), a = r >= Math.abs(f - b), l = r >= Math.abs(u - p), c = r >= Math.abs(d - y), o && (i.position.top = n._convertPositionTo('relative', {
                    top: h,
                    left: 0
                }).top), a && (i.position.top = n._convertPositionTo('relative', {
                    top: f - n.helperProportions.height,
                    left: 0
                }).top), l && (i.position.left = n._convertPositionTo('relative', {
                    top: 0,
                    left: u
                }).left), c && (i.position.left = n._convertPositionTo('relative', {
                    top: 0,
                    left: d - n.helperProportions.width
                }).left)), !n.snapElements[s].snapping && (o || a || l || c || g) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {
                    snapItem: n.snapElements[s].item
                })), n.snapElements[s].snapping = o || a || l || c || g)
            }
        }), e.ui.plugin.add('draggable', 'stack', {
            start: function(t, i, n) {
                var r, o = n.options,
                    s = e.makeArray(e(o.stack)).sort(function(t, i) {
                        return (parseInt(e(t).css('zIndex'), 10) || 0) - (parseInt(e(i).css('zIndex'), 10) || 0)
                    });
                s.length && (r = parseInt(e(s[0]).css('zIndex'), 10) || 0, e(s).each(function(t) {
                    e(this).css('zIndex', r + t)
                }), this.css('zIndex', r + s.length))
            }
        }), e.ui.plugin.add('draggable', 'zIndex', {
            start: function(t, i, n) {
                var s = e(i.helper),
                    r = n.options;
                s.css('zIndex') && (r._zIndex = s.css('zIndex')), s.css('zIndex', r.zIndex)
            },
            stop: function(t, i, n) {
                var s = n.options;
                s._zIndex && e(i.helper).css('zIndex', s._zIndex)
            }
        }), e.ui.draggable, e.widget('ui.droppable', {
            version: '1.11.4',
            widgetEventPrefix: 'drop',
            options: {
                accept: '*',
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: 'default',
                tolerance: 'intersect',
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var t, i = this.options,
                    n = i.accept;
                this.isover = !1, this.isout = !0, this.accept = e.isFunction(n) ? n : function(e) {
                    return e.is(n)
                }, this.proportions = function() {
                    return arguments.length ? (t = arguments[0], void 0) : t ? t : t = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, this._addToManager(i.scope), i.addClasses && this.element.addClass('ui-droppable')
            },
            _addToManager: function(t) {
                e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this)
            },
            _splice: function(e) {
                for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t, 1)
            },
            _destroy: function() {
                var t = e.ui.ddmanager.droppables[this.options.scope];
                this._splice(t), this.element.removeClass('ui-droppable ui-droppable-disabled')
            },
            _setOption: function(t, i) {
                if ('accept' === t) this.accept = e.isFunction(i) ? i : function(e) {
                    return e.is(i)
                };
                else if ('scope' === t) {
                    var n = e.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n), this._addToManager(i)
                };
                this._super(t, i)
            },
            _activate: function(t) {
                var i = e.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger('activate', t, this.ui(i))
            },
            _deactivate: function(t) {
                var i = e.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger('deactivate', t, this.ui(i))
            },
            _over: function(t) {
                var i = e.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger('over', t, this.ui(i)))
            },
            _out: function(t) {
                var i = e.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger('out', t, this.ui(i)))
            },
            _drop: function(t, i) {
                var n = i || e.ui.ddmanager.current,
                    s = !1;
                return n && (n.currentItem || n.element)[0] !== this.element[0] ? (this.element.find(':data(ui-droppable)').not('.ui-draggable-dragging').each(function() {
                    var i = e(this).droppable('instance');
                    return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && e.ui.intersect(n, e.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, t) ? (s = !0, !1) : void 0
                }), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger('drop', t, this.ui(n)), this.element) : !1) : !1
            },
            ui: function(e) {
                return {
                    draggable: e.currentItem || e.element,
                    helper: e.helper,
                    position: e.position,
                    offset: e.positionAbs
                }
            }
        }), e.ui.intersect = function() {
            function e(e, t, i) {
                return e >= t && t + i > e
            };
            return function(t, i, n, s) {
                if (!i.offset) return !1;
                var a = (t.positionAbs || t.position.absolute).left + t.margins.left,
                    l = (t.positionAbs || t.position.absolute).top + t.margins.top,
                    c = a + t.helperProportions.width,
                    u = l + t.helperProportions.height,
                    r = i.offset.left,
                    o = i.offset.top,
                    h = r + i.proportions().width,
                    d = o + i.proportions().height;
                switch (n) {
                    case 'fit':
                        return a >= r && h >= c && l >= o && d >= u;
                    case 'intersect':
                        return a + t.helperProportions.width / 2 > r && h > c - t.helperProportions.width / 2 && l + t.helperProportions.height / 2 > o && d > u - t.helperProportions.height / 2;
                    case 'pointer':
                        return e(s.pageY, o, i.proportions().height) && e(s.pageX, r, i.proportions().width);
                    case 'touch':
                        return (l >= o && d >= l || u >= o && d >= u || o > l && u > d) && (a >= r && h >= a || c >= r && h >= c || r > a && c > h);
                    default:
                        return !1
                }
            }
        }(), e.ui.ddmanager = {
            current: null,
            droppables: {
                'default': []
            },
            prepareOffsets: function(t, i) {
                var n, r, s = e.ui.ddmanager.droppables[t.options.scope] || [],
                    a = i ? i.type : null,
                    o = (t.currentItem || t.element).find(':data(ui-droppable)').addBack();
                e: for (n = 0; s.length > n; n++)
                    if (!(s[n].options.disabled || t && !s[n].accept.call(s[n].element[0], t.currentItem || t.element))) {
                        for (r = 0; o.length > r; r++)
                            if (o[r] === s[n].element[0]) {
                                s[n].proportions().height = 0;
                                continue;
                                e
                            };
                        s[n].visible = 'none' !== s[n].element.css('display'), s[n].visible && ('mousedown' === a && s[n]._activate.call(s[n], i), s[n].offset = s[n].element.offset(), s[n].proportions({
                            width: s[n].element[0].offsetWidth,
                            height: s[n].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(t, i) {
                var n = !1;
                return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), n
            },
            dragStart: function(t, i) {
                t.element.parentsUntil('body').bind('scroll.droppable', function() {
                    t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
                })
            },
            drag: function(t, i) {
                t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var n, o, r, a = e.ui.intersect(t, this, this.options.tolerance, i),
                            s = !a && this.isover ? 'isout' : a && !this.isover ? 'isover' : null;
                        s && (this.options.greedy && (o = this.options.scope, r = this.element.parents(':data(ui-droppable)').filter(function() {
                            return e(this).droppable('instance').options.scope === o
                        }), r.length && (n = e(r[0]).droppable('instance'), n.greedyChild = 'isover' === s)), n && 'isover' === s && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[s] = !0, this['isout' === s ? 'isover' : 'isout'] = !1, this['isover' === s ? '_over' : '_out'].call(this, i), n && 'isout' === s && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                    }
                })
            },
            dragStop: function(t, i) {
                t.element.parentsUntil('body').unbind('scroll.droppable'), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            }
        }, e.ui.droppable, e.widget('ui.resizable', e.ui.mouse, {
            version: '1.11.4',
            widgetEventPrefix: 'resize',
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: 'slow',
                animateEasing: 'swing',
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: 'e,s,se',
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(e) {
                return parseInt(e, 10) || 0
            },
            _isNumber: function(e) {
                return !isNaN(parseInt(e, 10))
            },
            _hasScroll: function(t, i) {
                if ('hidden' === e(t).css('overflow')) return !1;
                var n = i && 'left' === i ? 'scrollLeft' : 'scrollTop',
                    s = !1;
                return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
            },
            _create: function() {
                var o, r, s, i, a, n = this,
                    t = this.options;
                if (this.element.addClass('ui-resizable'), e.extend(this, {
                        _aspectRatio: !!t.aspectRatio,
                        aspectRatio: t.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: t.helper || t.ghost || t.animate ? t.helper || 'ui-resizable-helper' : null
                    }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e('<div class=\'ui-wrapper\' style=\'overflow: hidden;\'></div>').css({
                        position: this.element.css('position'),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css('top'),
                        left: this.element.css('left')
                    })), this.element = this.element.parent().data('ui-resizable', this.element.resizable('instance')), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css('marginLeft'),
                        marginTop: this.originalElement.css('marginTop'),
                        marginRight: this.originalElement.css('marginRight'),
                        marginBottom: this.originalElement.css('marginBottom')
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css('resize'), this.originalElement.css('resize', 'none'), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: 'static',
                        zoom: 1,
                        display: 'block'
                    })), this.originalElement.css({
                        margin: this.originalElement.css('margin')
                    }), this._proportionallyResize()), this.handles = t.handles || (e('.ui-resizable-handle', this.element).length ? {
                        n: '.ui-resizable-n',
                        e: '.ui-resizable-e',
                        s: '.ui-resizable-s',
                        w: '.ui-resizable-w',
                        se: '.ui-resizable-se',
                        sw: '.ui-resizable-sw',
                        ne: '.ui-resizable-ne',
                        nw: '.ui-resizable-nw'
                    } : 'e,s,se'), this._handles = e(), this.handles.constructor === String)
                    for ('all' === this.handles && (this.handles = 'n,e,s,w,se,sw,ne,nw'), o = this.handles.split(','), this.handles = {}, r = 0; o.length > r; r++) s = e.trim(o[r]), a = 'ui-resizable-' + s, i = e('<div class=\'ui-resizable-handle ' + a + '\'></div>'), i.css({
                        zIndex: t.zIndex
                    }), 'se' === s && i.addClass('ui-icon ui-icon-gripsmall-diagonal-se'), this.handles[s] = '.ui-resizable-' + s, this.element.append(i);
                this._renderAxis = function(t) {
                    var i, s, r, o;
                    t = t || this.element;
                    for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {
                        mousedown: n._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), r = ['padding', /ne|nw|n/.test(i) ? 'Top' : /se|sw|s/.test(i) ? 'Bottom' : /^e$/.test(i) ? 'Right' : 'Left'].join(''), t.css(r, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find('.ui-resizable-handle')), this._handles.disableSelection(), this._handles.mouseover(function() {
                    n.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), n.axis = i && i[1] ? i[1] : 'se')
                }), t.autoHide && (this._handles.hide(), e(this.element).addClass('ui-resizable-autohide').mouseenter(function() {
                    t.disabled || (e(this).removeClass('ui-resizable-autohide'), n._handles.show())
                }).mouseleave(function() {
                    t.disabled || n.resizing || (e(this).addClass('ui-resizable-autohide'), n._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, i = function(t) {
                    e(t).removeClass('ui-resizable ui-resizable-disabled ui-resizable-resizing').removeData('resizable').removeData('ui-resizable').unbind('.resizable').find('.ui-resizable-handle').remove()
                };
                return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                    position: t.css('position'),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css('top'),
                    left: t.css('left')
                }).insertAfter(t), t.remove()), this.originalElement.css('resize', this.originalResizeStyle), i(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var n, i, s = !1;
                for (n in this.handles) i = e(this.handles[n])[0], (i === t.target || e.contains(i, t.target)) && (s = !0);
                return !this.options.disabled && s
            },
            _mouseStart: function(t) {
                var s, r, o, n = this.options,
                    i = this.element;
                return this.resizing = !0, this._renderProxy(), s = this._num(this.helper.css('left')), r = this._num(this.helper.css('top')), n.containment && (s += e(n.containment).scrollLeft() || 0, r += e(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: s,
                    top: r
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: i.width(),
                    height: i.height()
                }, this.originalSize = this._helper ? {
                    width: i.outerWidth(),
                    height: i.outerHeight()
                } : {
                    width: i.width(),
                    height: i.height()
                }, this.sizeDiff = {
                    width: i.outerWidth() - i.width(),
                    height: i.outerHeight() - i.height()
                }, this.originalPosition = {
                    left: s,
                    top: r
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = 'number' == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = e('.ui-resizable-' + this.axis).css('cursor'), e('body').css('cursor', 'auto' === o ? this.axis + '-resize' : o), i.addClass('ui-resizable-resizing'), this._propagate('start', t), !0
            },
            _mouseDrag: function(t) {
                var i, n, s = this.originalMousePosition,
                    o = this.axis,
                    a = t.pageX - s.left || 0,
                    l = t.pageY - s.top || 0,
                    r = this._change[o];
                return this._updatePrevProperties(), r ? (i = r.apply(this, [t, a, l]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate('resize', t), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger('resize', t, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var n, s, r, o, a, l, c, u = this.options,
                    i = this;
                return this._helper && (n = this._proportionallyResizeElements, s = n.length && /textarea/i.test(n[0].nodeName), r = s && this._hasScroll(n[0], 'left') ? 0 : i.sizeDiff.height, o = s ? 0 : i.sizeDiff.width, a = {
                    width: i.helper.width() - o,
                    height: i.helper.height() - r
                }, l = parseInt(i.element.css('left'), 10) + (i.position.left - i.originalPosition.left) || null, c = parseInt(i.element.css('top'), 10) + (i.position.top - i.originalPosition.top) || null, u.animate || this.element.css(e.extend(a, {
                    top: c,
                    left: l
                })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !u.animate && this._proportionallyResize()), e('body').css('cursor', 'auto'), this.element.removeClass('ui-resizable-resizing'), this._propagate('stop', t), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var e = {};
                return this.position.top !== this.prevPosition.top && (e.top = this.position.top + 'px'), this.position.left !== this.prevPosition.left && (e.left = this.position.left + 'px'), this.size.width !== this.prevSize.width && (e.width = this.size.width + 'px'), this.size.height !== this.prevSize.height && (e.height = this.size.height + 'px'), this.helper.css(e), e
            },
            _updateVirtualBoundaries: function(e) {
                var n, s, r, o, t, i = this.options;
                t = {
                    minWidth: this._isNumber(i.minWidth) ? i.minWidth : 0,
                    maxWidth: this._isNumber(i.maxWidth) ? i.maxWidth : 1 / 0,
                    minHeight: this._isNumber(i.minHeight) ? i.minHeight : 0,
                    maxHeight: this._isNumber(i.maxHeight) ? i.maxHeight : 1 / 0
                }, (this._aspectRatio || e) && (n = t.minHeight * this.aspectRatio, r = t.minWidth / this.aspectRatio, s = t.maxHeight * this.aspectRatio, o = t.maxWidth / this.aspectRatio, n > t.minWidth && (t.minWidth = n), r > t.minHeight && (t.minHeight = r), t.maxWidth > s && (t.maxWidth = s), t.maxHeight > o && (t.maxHeight = o)), this._vBoundaries = t
            },
            _updateCache: function(e) {
                this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
            },
            _updateRatio: function(e) {
                var t = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), 'sw' === n && (e.left = t.left + (i.width - e.width), e.top = null), 'nw' === n && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
            },
            _respectSize: function(e) {
                var t = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                    s = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                    r = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                    o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    l = this.position.top + this.size.height,
                    c = /sw|nw|w/.test(i),
                    u = /nw|ne|n/.test(i);
                return r && (e.width = t.minWidth), o && (e.height = t.minHeight), n && (e.width = t.maxWidth), s && (e.height = t.maxHeight), r && c && (e.left = a - t.minWidth), n && c && (e.left = a - t.maxWidth), o && u && (e.top = l - t.minHeight), s && u && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
            },
            _getPaddingPlusBorderDimensions: function(e) {
                for (var t = 0, i = [], n = [e.css('borderTopWidth'), e.css('borderRightWidth'), e.css('borderBottomWidth'), e.css('borderLeftWidth')], s = [e.css('paddingTop'), e.css('paddingRight'), e.css('paddingBottom'), e.css('paddingLeft')]; 4 > t; t++) i[t] = parseInt(n[t], 10) || 0, i[t] += parseInt(s[t], 10) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var t = this.element,
                    i = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e('<div style=\'overflow:hidden;\'></div>'), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: 'absolute',
                    left: this.elementOffset.left + 'px',
                    top: this.elementOffset.top + 'px',
                    zIndex: ++i.zIndex
                }), this.helper.appendTo('body').disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(e, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function(e, t) {
                    var i = this.originalSize,
                        n = this.originalPosition;
                    return {
                        left: n.left + t,
                        width: i.width - t
                    }
                },
                n: function(e, t, i) {
                    var n = this.originalSize,
                        s = this.originalPosition;
                    return {
                        top: s.top + i,
                        height: n.height - i
                    }
                },
                s: function(e, t, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(t, i, n) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                },
                sw: function(t, i, n) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                },
                ne: function(t, i, n) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                },
                nw: function(t, i, n) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                }
            },
            _propagate: function(t, i) {
                e.ui.plugin.call(this, t, [i, this.ui()]), 'resize' !== t && this._trigger(t, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), e.ui.plugin.add('resizable', 'animate', {
            stop: function(t) {
                var i = e(this).resizable('instance'),
                    s = i.options,
                    n = i._proportionallyResizeElements,
                    r = n.length && /textarea/i.test(n[0].nodeName),
                    l = r && i._hasScroll(n[0], 'left') ? 0 : i.sizeDiff.height,
                    c = r ? 0 : i.sizeDiff.width,
                    u = {
                        width: i.size.width - c,
                        height: i.size.height - l
                    },
                    o = parseInt(i.element.css('left'), 10) + (i.position.left - i.originalPosition.left) || null,
                    a = parseInt(i.element.css('top'), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(e.extend(u, a && o ? {
                    top: a,
                    left: o
                } : {}), {
                    duration: s.animateDuration,
                    easing: s.animateEasing,
                    step: function() {
                        var s = {
                            width: parseInt(i.element.css('width'), 10),
                            height: parseInt(i.element.css('height'), 10),
                            top: parseInt(i.element.css('top'), 10),
                            left: parseInt(i.element.css('left'), 10)
                        };
                        n && n.length && e(n[0]).css({
                            width: s.width,
                            height: s.height
                        }), i._updateCache(s), i._propagate('resize', t)
                    }
                })
            }
        }), e.ui.plugin.add('resizable', 'containment', {
            start: function() {
                var n, r, o, a, l, c, u, t = e(this).resizable('instance'),
                    h = t.options,
                    d = t.element,
                    s = h.containment,
                    i = s instanceof e ? s.get(0) : /parent/.test(s) ? d.parent().get(0) : s;
                i && (t.containerElement = e(i), /document/.test(s) || s === document ? (t.containerOffset = {
                    left: 0,
                    top: 0
                }, t.containerPosition = {
                    left: 0,
                    top: 0
                }, t.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height: e(document).height() || document.body.parentNode.scrollHeight
                }) : (n = e(i), r = [], e(['Top', 'Right', 'Left', 'Bottom']).each(function(e, i) {
                    r[e] = t._num(n.css('padding' + i))
                }), t.containerOffset = n.offset(), t.containerPosition = n.position(), t.containerSize = {
                    height: n.innerHeight() - r[3],
                    width: n.innerWidth() - r[1]
                }, o = t.containerOffset, a = t.containerSize.height, l = t.containerSize.width, c = t._hasScroll(i, 'left') ? i.scrollWidth : l, u = t._hasScroll(i) ? i.scrollHeight : a, t.parentData = {
                    element: i,
                    left: o.left,
                    top: o.top,
                    width: c,
                    height: u
                }))
            },
            resize: function(t) {
                var a, l, c, u, i = e(this).resizable('instance'),
                    f = i.options,
                    n = i.containerOffset,
                    h = i.position,
                    r = i._aspectRatio || t.shiftKey,
                    o = {
                        top: 0,
                        left: 0
                    },
                    d = i.containerElement,
                    s = !0;
                d[0] !== document && /static/.test(d.css('position')) && (o = n), h.left < (i._helper ? n.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - n.left : i.position.left - o.left), r && (i.size.height = i.size.width / i.aspectRatio, s = !1), i.position.left = f.helper ? n.left : 0), h.top < (i._helper ? n.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - n.top : i.position.top), r && (i.size.width = i.size.height * i.aspectRatio, s = !1), i.position.top = i._helper ? n.top : 0), c = i.containerElement.get(0) === i.element.parent().get(0), u = /relative|absolute/.test(i.containerElement.css('position')), c && u ? (i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top) : (i.offset.left = i.element.offset().left, i.offset.top = i.element.offset().top), a = Math.abs(i.sizeDiff.width + (i._helper ? i.offset.left - o.left : i.offset.left - n.left)), l = Math.abs(i.sizeDiff.height + (i._helper ? i.offset.top - o.top : i.offset.top - n.top)), a + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - a, r && (i.size.height = i.size.width / i.aspectRatio, s = !1)), l + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - l, r && (i.size.width = i.size.height * i.aspectRatio, s = !1)), s || (i.position.left = i.prevPosition.left, i.position.top = i.prevPosition.top, i.size.width = i.prevSize.width, i.size.height = i.prevSize.height)
            },
            stop: function() {
                var t = e(this).resizable('instance'),
                    n = t.options,
                    s = t.containerOffset,
                    r = t.containerPosition,
                    o = t.containerElement,
                    i = e(t.helper),
                    a = i.offset(),
                    l = i.outerWidth() - t.sizeDiff.width,
                    c = i.outerHeight() - t.sizeDiff.height;
                t._helper && !n.animate && /relative/.test(o.css('position')) && e(this).css({
                    left: a.left - r.left - s.left,
                    width: l,
                    height: c
                }), t._helper && !n.animate && /static/.test(o.css('position')) && e(this).css({
                    left: a.left - r.left - s.left,
                    width: l,
                    height: c
                })
            }
        }), e.ui.plugin.add('resizable', 'alsoResize', {
            start: function() {
                var t = e(this).resizable('instance'),
                    i = t.options;
                e(i.alsoResize).each(function() {
                    var t = e(this);
                    t.data('ui-resizable-alsoresize', {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css('left'), 10),
                        top: parseInt(t.css('top'), 10)
                    })
                })
            },
            resize: function(t, i) {
                var n = e(this).resizable('instance'),
                    o = n.options,
                    s = n.originalSize,
                    r = n.originalPosition,
                    a = {
                        height: n.size.height - s.height || 0,
                        width: n.size.width - s.width || 0,
                        top: n.position.top - r.top || 0,
                        left: n.position.left - r.left || 0
                    };
                e(o.alsoResize).each(function() {
                    var t = e(this),
                        s = e(this).data('ui-resizable-alsoresize'),
                        n = {},
                        r = t.parents(i.originalElement[0]).length ? ['width', 'height'] : ['width', 'height', 'top', 'left'];
                    e.each(r, function(e, t) {
                        var i = (s[t] || 0) + (a[t] || 0);
                        i && i >= 0 && (n[t] = i || null)
                    }), t.css(n)
                })
            },
            stop: function() {
                e(this).removeData('resizable-alsoresize')
            }
        }), e.ui.plugin.add('resizable', 'ghost', {
            start: function() {
                var t = e(this).resizable('instance'),
                    i = t.options,
                    n = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: 'block',
                    position: 'relative',
                    height: n.height,
                    width: n.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass('ui-resizable-ghost').addClass('string' == typeof i.ghost ? i.ghost : ''), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = e(this).resizable('instance');
                t.ghost && t.ghost.css({
                    position: 'relative',
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = e(this).resizable('instance');
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), e.ui.plugin.add('resizable', 'grid', {
            resize: function() {
                var c, t = e(this).resizable('instance'),
                    i = t.options,
                    p = t.size,
                    a = t.originalSize,
                    l = t.originalPosition,
                    u = t.axis,
                    h = 'number' == typeof i.grid ? [i.grid, i.grid] : i.grid,
                    r = h[0] || 1,
                    o = h[1] || 1,
                    d = Math.round((p.width - a.width) / r) * r,
                    f = Math.round((p.height - a.height) / o) * o,
                    n = a.width + d,
                    s = a.height + f,
                    m = i.maxWidth && n > i.maxWidth,
                    g = i.maxHeight && s > i.maxHeight,
                    v = i.minWidth && i.minWidth > n,
                    y = i.minHeight && i.minHeight > s;
                i.grid = h, v && (n += r), y && (s += o), m && (n -= r), g && (s -= o), /^(se|s|e)$/.test(u) ? (t.size.width = n, t.size.height = s) : /^(ne)$/.test(u) ? (t.size.width = n, t.size.height = s, t.position.top = l.top - f) : /^(sw)$/.test(u) ? (t.size.width = n, t.size.height = s, t.position.left = l.left - d) : ((0 >= s - o || 0 >= n - r) && (c = t._getPaddingPlusBorderDimensions(this)), s - o > 0 ? (t.size.height = s, t.position.top = l.top - f) : (s = o - c.height, t.size.height = s, t.position.top = l.top + a.height - s), n - r > 0 ? (t.size.width = n, t.position.left = l.left - d) : (n = r - c.width, t.size.width = n, t.position.left = l.left + a.width - n))
            }
        }), e.ui.resizable, e.widget('ui.selectable', e.ui.mouse, {
            version: '1.11.4',
            options: {
                appendTo: 'body',
                autoRefresh: !0,
                distance: 0,
                filter: '*',
                tolerance: 'touch',
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var t, i = this;
                this.element.addClass('ui-selectable'), this.dragged = !1, this.refresh = function() {
                    t = e(i.options.filter, i.element[0]), t.addClass('ui-selectee'), t.each(function() {
                        var t = e(this),
                            i = t.offset();
                        e.data(this, 'selectable-item', {
                            element: this,
                            $element: t,
                            left: i.left,
                            top: i.top,
                            right: i.left + t.outerWidth(),
                            bottom: i.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass('ui-selected'),
                            selecting: t.hasClass('ui-selecting'),
                            unselecting: t.hasClass('ui-unselecting')
                        })
                    })
                }, this.refresh(), this.selectees = t.addClass('ui-selectee'), this._mouseInit(), this.helper = e('<div class=\'ui-selectable-helper\'></div>')
            },
            _destroy: function() {
                this.selectees.removeClass('ui-selectee').removeData('selectable-item'), this.element.removeClass('ui-selectable ui-selectable-disabled'), this._mouseDestroy()
            },
            _mouseStart: function(t) {
                var i = this,
                    n = this.options;
                this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(n.filter, this.element[0]), this._trigger('start', t), e(n.appendTo).append(this.helper), this.helper.css({
                    left: t.pageX,
                    top: t.pageY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter('.ui-selected').each(function() {
                    var n = e.data(this, 'selectable-item');
                    n.startselected = !0, t.metaKey || t.ctrlKey || (n.$element.removeClass('ui-selected'), n.selected = !1, n.$element.addClass('ui-unselecting'), n.unselecting = !0, i._trigger('unselecting', t, {
                        unselecting: n.element
                    }))
                }), e(t.target).parents().addBack().each(function() {
                    var s, n = e.data(this, 'selectable-item');
                    return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass('ui-selected'), n.$element.removeClass(s ? 'ui-unselecting' : 'ui-selected').addClass(s ? 'ui-selecting' : 'ui-unselecting'), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger('selecting', t, {
                        selecting: n.element
                    }) : i._trigger('unselecting', t, {
                        unselecting: n.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function(t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var o, a = this,
                        l = this.options,
                        i = this.opos[0],
                        n = this.opos[1],
                        s = t.pageX,
                        r = t.pageY;
                    return i > s && (o = s, s = i, i = o), n > r && (o = r, r = n, n = o), this.helper.css({
                        left: i,
                        top: n,
                        width: s - i,
                        height: r - n
                    }), this.selectees.each(function() {
                        var o = e.data(this, 'selectable-item'),
                            c = !1;
                        o && o.element !== a.element[0] && ('touch' === l.tolerance ? c = !(o.left > s || i > o.right || o.top > r || n > o.bottom) : 'fit' === l.tolerance && (c = o.left > i && s > o.right && o.top > n && r > o.bottom), c ? (o.selected && (o.$element.removeClass('ui-selected'), o.selected = !1), o.unselecting && (o.$element.removeClass('ui-unselecting'), o.unselecting = !1), o.selecting || (o.$element.addClass('ui-selecting'), o.selecting = !0, a._trigger('selecting', t, {
                            selecting: o.element
                        }))) : (o.selecting && ((t.metaKey || t.ctrlKey) && o.startselected ? (o.$element.removeClass('ui-selecting'), o.selecting = !1, o.$element.addClass('ui-selected'), o.selected = !0) : (o.$element.removeClass('ui-selecting'), o.selecting = !1, o.startselected && (o.$element.addClass('ui-unselecting'), o.unselecting = !0), a._trigger('unselecting', t, {
                            unselecting: o.element
                        }))), o.selected && (t.metaKey || t.ctrlKey || o.startselected || (o.$element.removeClass('ui-selected'), o.selected = !1, o.$element.addClass('ui-unselecting'), o.unselecting = !0, a._trigger('unselecting', t, {
                            unselecting: o.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(t) {
                var i = this;
                return this.dragged = !1, e('.ui-unselecting', this.element[0]).each(function() {
                    var n = e.data(this, 'selectable-item');
                    n.$element.removeClass('ui-unselecting'), n.unselecting = !1, n.startselected = !1, i._trigger('unselected', t, {
                        unselected: n.element
                    })
                }), e('.ui-selecting', this.element[0]).each(function() {
                    var n = e.data(this, 'selectable-item');
                    n.$element.removeClass('ui-selecting').addClass('ui-selected'), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger('selected', t, {
                        selected: n.element
                    })
                }), this._trigger('stop', t), this.helper.remove(), !1
            }
        }), e.widget('ui.sortable', e.ui.mouse, {
            version: '1.11.4',
            widgetEventPrefix: 'sort',
            ready: !1,
            options: {
                appendTo: 'parent',
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: 'auto',
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: 'original',
                items: '> *',
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: 'default',
                tolerance: 'intersect',
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(e, t, i) {
                return e >= t && t + i > e
            },
            _isFloating: function(e) {
                return /left|right/.test(e.css('float')) || /inline|table-cell/.test(e.css('display'))
            },
            _create: function() {
                this.containerCache = {}, this.element.addClass('ui-sortable'), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(e, t) {
                this._super(e, t), 'handle' === e && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                this.element.find('.ui-sortable-handle').removeClass('ui-sortable-handle'), e.each(this.items, function() {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass('ui-sortable-handle')
                })
            },
            _destroy: function() {
                this.element.removeClass('ui-sortable ui-sortable-disabled').find('.ui-sortable-handle').removeClass('ui-sortable-handle'), this._mouseDestroy();
                for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + '-item');
                return this
            },
            _mouseCapture: function(t, i) {
                var n = null,
                    r = !1,
                    s = this;
                return this.reverting ? !1 : this.options.disabled || 'static' === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() {
                    return e.data(this, s.widgetName + '-item') === s ? (n = e(this), !1) : void 0
                }), e.data(t.target, s.widgetName + '-item') === s && (n = e(t.target)), n ? !this.options.handle || i || (e(this.options.handle, n).find('*').addBack().each(function() {
                    this === t.target && (r = !0)
                }), r) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1 : !1)
            },
            _mouseStart: function(t, i, n) {
                var r, o, s = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, e.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css('position', 'absolute'), this.cssPosition = this.helper.css('position'), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && 'auto' !== s.cursor && (o = this.document.find('body'), this.storedCursor = o.css('cursor'), o.css('cursor', s.cursor), this.storedStylesheet = e('<style>*{ cursor: ' + s.cursor + ' !important; }</style>').appendTo(o)), s.opacity && (this.helper.css('opacity') && (this._storedOpacity = this.helper.css('opacity')), this.helper.css('opacity', s.opacity)), s.zIndex && (this.helper.css('zIndex') && (this._storedZIndex = this.helper.css('zIndex')), this.helper.css('zIndex', s.zIndex)), this.scrollParent[0] !== this.document[0] && 'HTML' !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger('start', t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger('activate', t, this._uiHash(this));
                return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass('ui-sortable-helper'), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                var o, s, r, a, i = this.options,
                    n = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo('absolute'), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && 'HTML' !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - this.document.scrollTop() < i.scrollSensitivity ? n = this.document.scrollTop(this.document.scrollTop() - i.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < i.scrollSensitivity && (n = this.document.scrollTop(this.document.scrollTop() + i.scrollSpeed)), t.pageX - this.document.scrollLeft() < i.scrollSensitivity ? n = this.document.scrollLeft(this.document.scrollLeft() - i.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < i.scrollSensitivity && (n = this.document.scrollLeft(this.document.scrollLeft() + i.scrollSpeed))), n !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo('absolute'), this.options.axis && 'y' === this.options.axis || (this.helper[0].style.left = this.position.left + 'px'), this.options.axis && 'x' === this.options.axis || (this.helper[0].style.top = this.position.top + 'px'), o = this.items.length - 1; o >= 0; o--)
                    if (s = this.items[o], r = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === a ? 'next' : 'prev']()[0] !== r && !e.contains(this.placeholder[0], r) && ('semi-dynamic' === this.options.type ? !e.contains(this.element[0], r) : !0)) {
                        if (this.direction = 1 === a ? 'down' : 'up', 'pointer' !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                        this._rearrange(t, s), this._trigger('change', t, this._uiHash());
                        break
                    };
                return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger('sort', t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, i) {
                if (t) {
                    if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                        var o = this,
                            r = this.placeholder.offset(),
                            n = this.options.axis,
                            s = {};
                        n && 'x' !== n || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), n && 'y' !== n || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
                            o._clear(t)
                        })
                    } else this._clear(t, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), 'original' === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper') : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger('deactivate', null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger('out', null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                };
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 'original' !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(t) {
                var n = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, e(n).each(function() {
                    var n = (e(t.item || this).attr(t.attribute || 'id') || '').match(t.expression || /(.+)[\-=_](.+)/);
                    n && i.push((t.key || n[1] + '[]') + '=' + (t.key && t.expression ? n[1] : n[2]))
                }), !i.length && t.key && i.push(t.key + '='), i.join('&')
            },
            toArray: function(t) {
                var n = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, n.each(function() {
                    i.push(e(t.item || this).attr(t.attribute || 'id') || '')
                }), i
            },
            _intersectsWith: function(e) {
                var t = this.positionAbs.left,
                    c = t + this.helperProportions.width,
                    i = this.positionAbs.top,
                    u = i + this.helperProportions.height,
                    n = e.left,
                    r = n + e.width,
                    s = e.top,
                    o = s + e.height,
                    a = this.offset.click.top,
                    l = this.offset.click.left,
                    h = 'x' === this.options.axis || i + a > s && o > i + a,
                    d = 'y' === this.options.axis || t + l > n && r > t + l,
                    f = h && d;
                return 'pointer' === this.options.tolerance || this.options.forcePointerForContainers || 'pointer' !== this.options.tolerance && this.helperProportions[this.floating ? 'width' : 'height'] > e[this.floating ? 'width' : 'height'] ? f : t + this.helperProportions.width / 2 > n && r > c - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > s && o > u - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(e) {
                var n = 'x' === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    s = 'y' === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                    r = n && s,
                    t = this._getDragVerticalDirection(),
                    i = this._getDragHorizontalDirection();
                return r ? this.floating ? i && 'right' === i || 'down' === t ? 2 : 1 : t && ('down' === t ? 2 : 1) : !1
            },
            _intersectsWithSides: function(e) {
                var n = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                    s = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    t = this._getDragVerticalDirection(),
                    i = this._getDragHorizontalDirection();
                return this.floating && i ? 'right' === i && s || 'left' === i && !s : t && ('down' === t && n || 'up' === t && !n)
            },
            _getDragVerticalDirection: function() {
                var e = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== e && (e > 0 ? 'down' : 'up')
            },
            _getDragHorizontalDirection: function() {
                var e = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== e && (e > 0 ? 'right' : 'left')
            },
            refresh: function(e) {
                return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var e = this.options;
                return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
            },
            _getItemsAsjQuery: function(t) {
                function c() {
                    l.push(this)
                };
                var n, s, o, i, l = [],
                    r = [],
                    a = this._connectWith();
                if (a && t)
                    for (n = a.length - 1; n >= 0; n--)
                        for (o = e(a[n], this.document[0]), s = o.length - 1; s >= 0; s--) i = e.data(o[s], this.widgetFullName), i && i !== this && !i.options.disabled && r.push([e.isFunction(i.options.items) ? i.options.items.call(i.element) : e(i.options.items, i.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'), i]);
                for (r.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : e(this.options.items, this.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'), this]), n = r.length - 1; n >= 0; n--) r[n][0].each(c);
                return e(l)
            },
            _removeCurrentsFromItems: function() {
                var t = this.currentItem.find(':data(' + this.widgetName + '-item)');
                this.items = e.grep(this.items, function(e) {
                    for (var i = 0; t.length > i; i++)
                        if (t[i] === e.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [this];
                var n, s, o, i, a, l, c, h, d = this.items,
                    r = [
                        [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : e(this.options.items, this.element), this]
                    ],
                    u = this._connectWith();
                if (u && this.ready)
                    for (n = u.length - 1; n >= 0; n--)
                        for (o = e(u[n], this.document[0]), s = o.length - 1; s >= 0; s--) i = e.data(o[s], this.widgetFullName), i && i !== this && !i.options.disabled && (r.push([e.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                            item: this.currentItem
                        }) : e(i.options.items, i.element), i]), this.containers.push(i));
                for (n = r.length - 1; n >= 0; n--)
                    for (a = r[n][1], l = r[n][0], s = 0, h = l.length; h > s; s++) c = e(l[s]), c.data(this.widgetName + '-item', a), d.push({
                        item: c,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(t) {
                this.floating = this.items.length ? 'x' === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, n, r, s;
                for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item, t || (n.width = r.outerWidth(), n.height = r.outerHeight()), s = r.offset(), n.left = s.left, n.top = s.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) s = this.containers[i].element.offset(), this.containers[i].containerCache.left = s.left, this.containers[i].containerCache.top = s.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(t) {
                t = t || this;
                var n, i = t.options;
                i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                    element: function() {
                        var s = t.currentItem[0].nodeName.toLowerCase(),
                            i = e('<' + s + '>', t.document[0]).addClass(n || t.currentItem[0].className + ' ui-sortable-placeholder').removeClass('ui-sortable-helper');
                        return 'tbody' === s ? t._createTrPlaceholder(t.currentItem.find('tr').eq(0), e('<tr>', t.document[0]).appendTo(i)) : 'tr' === s ? t._createTrPlaceholder(t.currentItem, i) : 'img' === s && i.attr('src', t.currentItem.attr('src')), n || i.css('visibility', 'hidden'), i
                    },
                    update: function(e, s) {
                        (!n || i.forcePlaceholderSize) && (s.height() || s.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css('paddingTop') || 0, 10) - parseInt(t.currentItem.css('paddingBottom') || 0, 10)), s.width() || s.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css('paddingLeft') || 0, 10) - parseInt(t.currentItem.css('paddingRight') || 0, 10)))
                    }
                }), t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
            },
            _createTrPlaceholder: function(t, i) {
                var n = this;
                t.children().each(function() {
                    e('<td>&#160;</td>', n.document[0]).attr('colspan', e(this).attr('colspan') || 1).appendTo(i)
                })
            },
            _contactContainers: function(t) {
                var n, s, u, r, d, f, a, h, l, c, o = null,
                    i = null;
                for (n = this.containers.length - 1; n >= 0; n--)
                    if (!e.contains(this.currentItem[0], this.containers[n].element[0]))
                        if (this._intersectsWith(this.containers[n].containerCache)) {
                            if (o && e.contains(this.containers[n].element[0], o.element[0])) continue;
                            o = this.containers[n], i = n
                        } else this.containers[n].containerCache.over && (this.containers[n]._trigger('out', t, this._uiHash(this)), this.containers[n].containerCache.over = 0);
                if (o)
                    if (1 === this.containers.length) this.containers[i].containerCache.over || (this.containers[i]._trigger('over', t, this._uiHash(this)), this.containers[i].containerCache.over = 1);
                    else {
                        for (u = 1e4, r = null, l = o.floating || this._isFloating(this.currentItem), d = l ? 'left' : 'top', f = l ? 'width' : 'height', c = l ? 'clientX' : 'clientY', s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[i].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (a = this.items[s].item.offset()[d], h = !1, t[c] - a > this.items[s][f] / 2 && (h = !0), u > Math.abs(t[c] - a) && (u = Math.abs(t[c] - a), r = this.items[s], this.direction = h ? 'up' : 'down'));
                        if (!r && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[i]) return this.currentContainer.containerCache.over || (this.containers[i]._trigger('over', t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                        r ? this._rearrange(t, r, null, !0) : this._rearrange(t, null, this.containers[i].element, !0), this._trigger('change', t, this._uiHash()), this.containers[i]._trigger('change', t, this._uiHash(this)), this.currentContainer = this.containers[i], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[i]._trigger('over', t, this._uiHash(this)), this.containers[i].containerCache.over = 1
                    }
            },
            _createHelper: function(t) {
                var n = this.options,
                    i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : 'clone' === n.helper ? this.currentItem.clone() : this.currentItem;
                return i.parents('body').length || e('parent' !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css('position'),
                    top: this.currentItem.css('top'),
                    left: this.currentItem.css('left')
                }), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
            },
            _adjustOffsetFromHelper: function(t) {
                'string' == typeof t && (t = t.split(' ')), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), 'left' in t && (this.offset.click.left = t.left + this.margins.left), 'right' in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 'top' in t && (this.offset.click.top = t.top + this.margins.top), 'bottom' in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return 'absolute' === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ('relative' === this.cssPosition) {
                    var e = this.currentItem.position();
                    return {
                        top: e.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
                        left: e.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                };
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
                    top: parseInt(this.currentItem.css('marginTop'), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, n, s, i = this.options;
                'parent' === i.containment && (i.containment = this.helper[0].parentNode), ('document' === i.containment || 'window' === i.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, 'document' === i.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ('document' === i.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || (t = e(i.containment)[0], n = e(i.containment).offset(), s = 'hidden' !== e(t).css('overflow'), this.containment = [n.left + (parseInt(e(t).css('borderLeftWidth'), 10) || 0) + (parseInt(e(t).css('paddingLeft'), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css('borderTopWidth'), 10) || 0) + (parseInt(e(t).css('paddingTop'), 10) || 0) - this.margins.top, n.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css('borderLeftWidth'), 10) || 0) - (parseInt(e(t).css('paddingRight'), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css('borderTopWidth'), 10) || 0) - (parseInt(e(t).css('paddingBottom'), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(t, i) {
                i || (i = this.position);
                var n = 'absolute' === t ? 1 : -1,
                    s = 'absolute' !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    r = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function(t) {
                var n, s, i = this.options,
                    r = t.pageX,
                    o = t.pageY,
                    a = 'absolute' !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(a[0].tagName);
                return 'relative' !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - i.grid[1] : n + i.grid[1] : n, s = this.originalPageX + Math.round((r - this.originalPageX) / i.grid[0]) * i.grid[0], r = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - i.grid[0] : s + i.grid[0] : s)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                    left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                }
            },
            _rearrange: function(e, t, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], 'down' === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function() {
                    s === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function(e, t) {
                function s(e, t, i) {
                    return function(n) {
                        i._trigger(e, n, t._uiHash(t))
                    }
                };
                this.reverting = !1;
                var i, n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (i in this._storedCSS)('auto' === this._storedCSS[i] || 'static' === this._storedCSS[i]) && (this._storedCSS[i] = '');
                    this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper')
                } else this.currentItem.show();
                for (this.fromOutside && !t && n.push(function(e) {
                        this._trigger('receive', e, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not('.ui-sortable-helper')[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function(e) {
                        this._trigger('update', e, this._uiHash())
                    }), this !== this.currentContainer && (t || (n.push(function(e) {
                        this._trigger('remove', e, this._uiHash())
                    }), n.push(function(e) {
                        return function(t) {
                            e._trigger('receive', t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), n.push(function(e) {
                        return function(t) {
                            e._trigger('update', t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || n.push(s('deactivate', this, this.containers[i])), this.containers[i].containerCache.over && (n.push(s('out', this, this.containers[i])), this.containers[i].containerCache.over = 0);
                if (this.storedCursor && (this.document.find('body').css('cursor', this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css('opacity', this._storedOpacity), this._storedZIndex && this.helper.css('zIndex', 'auto' === this._storedZIndex ? '' : this._storedZIndex), this.dragging = !1, t || this._trigger('beforeStop', e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                    for (i = 0; n.length > i; i++) n[i].call(this, e);
                    this._trigger('stop', e, this._uiHash())
                };
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() {
                e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(t) {
                var i = t || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || e([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: t ? t.element : null
                }
            }
        }), e.widget('ui.menu', {
            version: '1.11.4',
            defaultElement: '<ul>',
            delay: 300,
            options: {
                icons: {
                    submenu: 'ui-icon-carat-1-e'
                },
                items: '> *',
                menus: 'ul',
                position: {
                    my: 'left-1 top',
                    at: 'right top'
                },
                role: 'menu',
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass('ui-menu ui-widget ui-widget-content').toggleClass('ui-menu-icons', !!this.element.find('.ui-icon').length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this.options.disabled && this.element.addClass('ui-state-disabled').attr('aria-disabled', 'true'), this._on({
                    'mousedown .ui-menu-item': function(e) {
                        e.preventDefault()
                    },
                    'click .ui-menu-item': function(t) {
                        var i = e(t.target);
                        !this.mouseHandled && i.not('.ui-state-disabled').length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has('.ui-menu').length ? this.expand(t) : !this.element.is(':focus') && e(this.document[0].activeElement).closest('.ui-menu').length && (this.element.trigger('focus', [!0]), this.active && 1 === this.active.parents('.ui-menu').length && clearTimeout(this.timer)))
                    },
                    'mouseenter .ui-menu-item': function(t) {
                        if (!this.previousFilter) {
                            var i = e(t.currentTarget);
                            i.siblings('.ui-state-active').removeClass('ui-state-active'), this.focus(t, i)
                        }
                    },
                    mouseleave: 'collapseAll',
                    'mouseleave .ui-menu': 'collapseAll',
                    focus: function(e, t) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, i)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    },
                    keydown: '_keydown'
                }), this.refresh(), this._on(this.document, {
                    click: function(e) {
                        this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr('aria-activedescendant').find('.ui-menu').addBack().removeClass('ui-menu ui-widget ui-widget-content ui-menu-icons ui-front').removeAttr('role').removeAttr('tabIndex').removeAttr('aria-labelledby').removeAttr('aria-expanded').removeAttr('aria-hidden').removeAttr('aria-disabled').removeUniqueId().show(), this.element.find('.ui-menu-item').removeClass('ui-menu-item').removeAttr('role').removeAttr('aria-disabled').removeUniqueId().removeClass('ui-state-hover').removeAttr('tabIndex').removeAttr('role').removeAttr('aria-haspopup').children().each(function() {
                    var t = e(this);
                    t.data('ui-menu-submenu-carat') && t.remove()
                }), this.element.find('.ui-menu-divider').removeClass('ui-menu-divider ui-widget-content')
            },
            _keydown: function(t) {
                var i, s, n, r, o = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move('first', 'first', t);
                        break;
                    case e.ui.keyCode.END:
                        this._move('last', 'last', t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is('.ui-state-disabled') && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        o = !1, s = this.previousFilter || '', n = String.fromCharCode(t.keyCode), r = !1, clearTimeout(this.filterTimer), n === s ? r = !0 : n = s + n, i = this._filterMenuItems(n), i = r && -1 !== i.index(this.active.next()) ? this.active.nextAll('.ui-menu-item') : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                };
                o && t.preventDefault()
            },
            _activate: function(e) {
                this.active.is('.ui-state-disabled') || (this.active.is('[aria-haspopup=\'true\']') ? this.expand(e) : this.select(e))
            },
            refresh: function() {
                var i, t, s = this,
                    r = this.options.icons.submenu,
                    n = this.element.find(this.options.menus);
                this.element.toggleClass('ui-menu-icons', !!this.element.find('.ui-icon').length), n.filter(':not(.ui-menu)').addClass('ui-menu ui-widget ui-widget-content ui-front').hide().attr({
                    role: this.options.role,
                    'aria-hidden': 'true',
                    'aria-expanded': 'false'
                }).each(function() {
                    var t = e(this),
                        i = t.parent(),
                        n = e('<span>').addClass('ui-menu-icon ui-icon ' + r).data('ui-menu-submenu-carat', !0);
                    i.attr('aria-haspopup', 'true').prepend(n), t.attr('aria-labelledby', i.attr('id'))
                }), i = n.add(this.element), t = i.find(this.options.items), t.not('.ui-menu-item').each(function() {
                    var t = e(this);
                    s._isDivider(t) && t.addClass('ui-widget-content ui-menu-divider')
                }), t.not('.ui-menu-item, .ui-menu-divider').addClass('ui-menu-item').uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), t.filter('.ui-state-disabled').attr('aria-disabled', 'true'), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: 'menuitem',
                    listbox: 'option'
                }[this.options.role]
            },
            _setOption: function(e, t) {
                'icons' === e && this.element.find('.ui-menu-icon').removeClass(this.options.icons.submenu).addClass(t.submenu), 'disabled' === e && this.element.toggleClass('ui-state-disabled', !!t).attr('aria-disabled', t), this._super(e, t)
            },
            focus: function(e, t) {
                var i, n;
                this.blur(e, e && 'focus' === e.type), this._scrollIntoView(t), this.active = t.first(), n = this.active.addClass('ui-state-focus').removeClass('ui-state-active'), this.options.role && this.element.attr('aria-activedescendant', n.attr('id')), this.active.parent().closest('.ui-menu-item').addClass('ui-state-active'), e && 'keydown' === e.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), i = t.children('.ui-menu'), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger('focus', e, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var o, a, i, n, s, r;
                this._hasScroll() && (o = parseFloat(e.css(this.activeMenu[0], 'borderTopWidth')) || 0, a = parseFloat(e.css(this.activeMenu[0], 'paddingTop')) || 0, i = t.offset().top - this.activeMenu.offset().top - o - a, n = this.activeMenu.scrollTop(), s = this.activeMenu.height(), r = t.outerHeight(), 0 > i ? this.activeMenu.scrollTop(n + i) : i + r > s && this.activeMenu.scrollTop(n + i - s + r))
            },
            blur: function(e, t) {
                t || clearTimeout(this.timer), this.active && (this.active.removeClass('ui-state-focus'), this.active = null, this._trigger('blur', e, {
                    item: this.active
                }))
            },
            _startOpening: function(e) {
                clearTimeout(this.timer), 'true' === e.attr('aria-hidden') && (this.timer = this._delay(function() {
                    this._close(), this._open(e)
                }, this.delay))
            },
            _open: function(t) {
                var i = e.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find('.ui-menu').not(t.parents('.ui-menu')).hide().attr('aria-hidden', 'true'), t.show().removeAttr('aria-hidden').attr('aria-expanded', 'true').position(i)
            },
            collapseAll: function(t, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var n = i ? this.element : e(t && t.target).closest(this.element.find('.ui-menu'));
                    n.length || (n = this.element), this._close(n), this.blur(t), this.activeMenu = n
                }, this.delay)
            },
            _close: function(e) {
                e || (e = this.active ? this.active.parent() : this.element), e.find('.ui-menu').hide().attr('aria-hidden', 'true').attr('aria-expanded', 'false').end().find('.ui-state-active').not('.ui-state-focus').removeClass('ui-state-active')
            },
            _closeOnDocumentClick: function(t) {
                return !e(t.target).closest('.ui-menu').length
            },
            _isDivider: function(e) {
                return !/[^\-\u2014\u2013\s]/.test(e.text())
            },
            collapse: function(e) {
                var t = this.active && this.active.parent().closest('.ui-menu-item', this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function(e) {
                var t = this.active && this.active.children('.ui-menu ').find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(e, t)
                }))
            },
            next: function(e) {
                this._move('next', 'first', e)
            },
            previous: function(e) {
                this._move('prev', 'last', e)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll('.ui-menu-item').length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll('.ui-menu-item').length
            },
            _move: function(e, t, i) {
                var n;
                this.active && (n = 'first' === e || 'last' === e ? this.active['first' === e ? 'prevAll' : 'nextAll']('.ui-menu-item').eq(-1) : this.active[e + 'All']('.ui-menu-item').eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[t]()), this.focus(i, n)
            },
            nextPage: function(t) {
                var i, n, s;
                return this.active ? (this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll('.ui-menu-item').each(function() {
                    return i = e(this), 0 > i.offset().top - n - s
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? 'last' : 'first']())), void 0) : (this.next(t), void 0)
            },
            previousPage: function(t) {
                var i, n, s;
                return this.active ? (this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll('.ui-menu-item').each(function() {
                    return i = e(this), i.offset().top - n + s > 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop('scrollHeight')
            },
            select: function(t) {
                this.active = this.active || e(t.target).closest('.ui-menu-item');
                var i = {
                    item: this.active
                };
                this.active.has('.ui-menu').length || this.collapseAll(t, !0), this._trigger('select', t, i)
            },
            _filterMenuItems: function(t) {
                var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'),
                    n = RegExp('^' + i, 'i');
                return this.activeMenu.find(this.options.items).filter('.ui-menu-item').filter(function() {
                    return n.test(e.trim(e(this).text()))
                })
            }
        }), e.widget('ui.autocomplete', {
            version: '1.11.4',
            defaultElement: '<input>',
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: 'left top',
                    at: 'left bottom',
                    collision: 'none'
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, i, n, s = this.element[0].nodeName.toLowerCase(),
                    r = 'textarea' === s,
                    o = 'input' === s;
                this.isMultiLine = r ? !0 : o ? !1 : this.element.prop('isContentEditable'), this.valueMethod = this.element[r || o ? 'val' : 'text'], this.isNewMenu = !0, this.element.addClass('ui-autocomplete-input').attr('autocomplete', 'off'), this._on(this.element, {
                    keydown: function(s) {
                        if (this.element.prop('readOnly')) return t = !0, n = !0, i = !0, void 0;
                        t = !1, n = !1, i = !1;
                        var r = e.ui.keyCode;
                        switch (s.keyCode) {
                            case r.PAGE_UP:
                                t = !0, this._move('previousPage', s);
                                break;
                            case r.PAGE_DOWN:
                                t = !0, this._move('nextPage', s);
                                break;
                            case r.UP:
                                t = !0, this._keyEvent('previous', s);
                                break;
                            case r.DOWN:
                                t = !0, this._keyEvent('next', s);
                                break;
                            case r.ENTER:
                                this.menu.active && (t = !0, s.preventDefault(), this.menu.select(s));
                                break;
                            case r.TAB:
                                this.menu.active && this.menu.select(s);
                                break;
                            case r.ESCAPE:
                                this.menu.element.is(':visible') && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(s)
                        }
                    },
                    keypress: function(n) {
                        if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(':visible')) && n.preventDefault(), void 0;
                        if (!i) {
                            var s = e.ui.keyCode;
                            switch (n.keyCode) {
                                case s.PAGE_UP:
                                    this._move('previousPage', n);
                                    break;
                                case s.PAGE_DOWN:
                                    this._move('nextPage', n);
                                    break;
                                case s.UP:
                                    this._keyEvent('previous', n);
                                    break;
                                case s.DOWN:
                                    this._keyEvent('next', n)
                            }
                        }
                    },
                    input: function(e) {
                        return n ? (n = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(e) {
                        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
                    }
                }), this._initSource(), this.menu = e('<ul>').addClass('ui-autocomplete ui-front').appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu('instance'), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        e(t.target).closest('.ui-menu-item').length || this._delay(function() {
                            var t = this;
                            this.document.one('mousedown', function(n) {
                                n.target === t.element[0] || n.target === i || e.contains(i, n.target) || t.close()
                            })
                        })
                    },
                    menufocus: function(t, i) {
                        var n, s;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one('mousemove', function() {
                            e(t.target).trigger(t.originalEvent)
                        }), void 0) : (s = i.item.data('ui-autocomplete-item'), !1 !== this._trigger('focus', t, {
                            item: s
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value), n = i.item.attr('aria-label') || s.value, n && e.trim(n).length && (this.liveRegion.children().hide(), e('<div>').text(n).appendTo(this.liveRegion)), void 0)
                    },
                    menuselect: function(e, t) {
                        var i = t.item.data('ui-autocomplete-item'),
                            n = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                            this.previous = n, this.selectedItem = i
                        })), !1 !== this._trigger('select', e, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                    }
                }), this.liveRegion = e('<span>', {
                    role: 'status',
                    'aria-live': 'assertive',
                    'aria-relevant': 'additions'
                }).addClass('ui-helper-hidden-accessible').appendTo(this.document[0].body), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr('autocomplete')
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass('ui-autocomplete-input').removeAttr('autocomplete'), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(e, t) {
                this._super(e, t), 'source' === e && this._initSource(), 'appendTo' === e && this.menu.element.appendTo(this._appendTo()), 'disabled' === e && t && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest('.ui-front')), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var i, n, t = this;
                e.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, n) {
                    n(e.ui.autocomplete.filter(i, t.term))
                }) : 'string' == typeof this.options.source ? (n = this.options.source, this.source = function(i, s) {
                    t.xhr && t.xhr.abort(), t.xhr = e.ajax({
                        url: n,
                        data: i,
                        dataType: 'json',
                        success: function(e) {
                            s(e)
                        },
                        error: function() {
                            s([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(e) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        i = this.menu.element.is(':visible'),
                        n = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                    (!t || t && !i && !n) && (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function(e, t) {
                return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger('search', t) !== !1 ? this._search(e) : void 0
            },
            _search: function(e) {
                this.pending++, this.element.addClass('ui-autocomplete-loading'), this.cancelSearch = !1, this.source({
                    term: e
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return e.proxy(function(e) {
                    t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass('ui-autocomplete-loading')
                }, this)
            },
            __response: function(e) {
                e && (e = this._normalize(e)), this._trigger('response', null, {
                    content: e
                }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger('open')) : this._close()
            },
            close: function(e) {
                this.cancelSearch = !0, this._close(e)
            },
            _close: function(e) {
                this.menu.element.is(':visible') && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger('close', e))
            },
            _change: function(e) {
                this.previous !== this._value() && this._trigger('change', e, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                    return 'string' == typeof t ? {
                        label: t,
                        value: t
                    } : e.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function(t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width('').outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, i) {
                var n = this;
                e.each(i, function(e, i) {
                    n._renderItemData(t, i)
                })
            },
            _renderItemData: function(e, t) {
                return this._renderItem(e, t).data('ui-autocomplete-item', t)
            },
            _renderItem: function(t, i) {
                return e('<li>').text(i.label).appendTo(t)
            },
            _move: function(e, t) {
                return this.menu.element.is(':visible') ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(e, t) {
                (!this.isMultiLine || this.menu.element.is(':visible')) && (this._move(e, t), t.preventDefault())
            }
        }), e.extend(e.ui.autocomplete, {
            escapeRegex: function(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
            },
            filter: function(t, i) {
                var n = RegExp(e.ui.autocomplete.escapeRegex(i), 'i');
                return e.grep(t, function(e) {
                    return n.test(e.label || e.value || e)
                })
            }
        }), e.widget('ui.autocomplete', e.ui.autocomplete, {
            options: {
                messages: {
                    noResults: 'No search results.',
                    results: function(e) {
                        return e + (e > 1 ? ' results are' : ' result is') + ' available, use up and down arrow keys to navigate.'
                    }
                }
            },
            __response: function(t) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e('<div>').text(i).appendTo(this.liveRegion))
            }
        }), e.ui.autocomplete, e.extend(e.ui, {
            datepicker: {
                version: '1.11.4'
            }
        });
    var t;
    e.extend(a.prototype, {
        markerClassName: 'hasDatepicker',
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return n(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, i) {
            var n, r, s;
            n = t.nodeName.toLowerCase(), r = 'div' === n || 'span' === n, t.id || (this.uuid += 1, t.id = 'dp' + this.uuid), s = this._newInst(e(t), r), s.settings = e.extend({}, i || {}), 'input' === n ? this._connectDatepicker(t, s) : r && this._inlineDatepicker(t, s)
        },
        _newInst: function(t, i) {
            var n = t[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1');
            return {
                id: n,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? l(e('<div class=\'' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\'></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var n = e(t);
            i.append = e([]), i.trigger = e([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, 'datepicker', i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var s, n, r, o = this._get(i, 'appendText'),
                a = this._get(i, 'isRTL');
            i.append && i.append.remove(), o && (i.append = e('<span class=\'' + this._appendClass + '\'>' + o + '</span>'), t[a ? 'before' : 'after'](i.append)), t.unbind('focus', this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, 'showOn'), ('focus' === s || 'both' === s) && t.focus(this._showDatepicker), ('button' === s || 'both' === s) && (n = this._get(i, 'buttonText'), r = this._get(i, 'buttonImage'), i.trigger = e(this._get(i, 'buttonImageOnly') ? e('<img/>').addClass(this._triggerClass).attr({
                src: r,
                alt: n,
                title: n
            }) : e('<button type=\'button\'></button>').addClass(this._triggerClass).html(r ? e('<img/>').attr({
                src: r,
                alt: n,
                title: n
            }) : n)), t[a ? 'before' : 'after'](i.trigger), i.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, 'autoSize') && !e.inline) {
                var n, s, r, t, i = new Date(2009, 11, 20),
                    o = this._get(e, 'dateFormat');
                o.match(/[DM]/) && (n = function(e) {
                    for (s = 0, r = 0, t = 0; e.length > t; t++) e[t].length > s && (s = e[t].length, r = t);
                    return r
                }, i.setMonth(n(this._get(e, o.match(/MM/) ? 'monthNames' : 'monthNamesShort'))), i.setDate(n(this._get(e, o.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 - i.getDay())), e.input.attr('size', this._formatDate(e, i).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var n = e(t);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), e.data(t, 'datepicker', i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css('display', 'block'))
        },
        _dialogDatepicker: function(t, i, s, r, o) {
            var l, c, u, h, d, a = this._dialogInst;
            return a || (this.uuid += 1, l = 'dp' + this.uuid, this._dialogInput = e('<input type=\'text\' id=\'' + l + '\' style=\'position: absolute; top: -100px; width: 0px;\'/>'), this._dialogInput.keydown(this._doKeyDown), e('body').append(this._dialogInput), a = this._dialogInst = this._newInst(this._dialogInput, !1), a.settings = {}, e.data(this._dialogInput[0], 'datepicker', a)), n(a.settings, r || {}), i = i && i.constructor === Date ? this._formatDate(a, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, u = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + h, u / 2 - 150 + d]), this._dialogInput.css('left', this._pos[0] + 20 + 'px').css('top', this._pos[1] + 'px'), a.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], 'datepicker', a), this
        },
        _destroyDatepicker: function(i) {
            var n, s = e(i),
                r = e.data(i, 'datepicker');
            s.hasClass(this.markerClassName) && (n = i.nodeName.toLowerCase(), e.removeData(i, 'datepicker'), 'input' === n ? (r.append.remove(), r.trigger.remove(), s.removeClass(this.markerClassName).unbind('focus', this._showDatepicker).unbind('keydown', this._doKeyDown).unbind('keypress', this._doKeyPress).unbind('keyup', this._doKeyUp)) : ('div' === n || 'span' === n) && s.removeClass(this.markerClassName).empty(), t === r && (t = null))
        },
        _enableDatepicker: function(t) {
            var i, n, s = e(t),
                r = e.data(t, 'datepicker');
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), 'input' === i ? (t.disabled = !1, r.trigger.filter('button').each(function() {
                this.disabled = !1
            }).end().filter('img').css({
                opacity: '1.0',
                cursor: ''
            })) : ('div' === i || 'span' === i) && (n = s.children('.' + this._inlineClass), n.children().removeClass('ui-state-disabled'), n.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var i, n, s = e(t),
                r = e.data(t, 'datepicker');
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), 'input' === i ? (t.disabled = !0, r.trigger.filter('button').each(function() {
                this.disabled = !0
            }).end().filter('img').css({
                opacity: '0.5',
                cursor: 'default'
            })) : ('div' === i || 'span' === i) && (n = s.children('.' + this._inlineClass), n.children().addClass('ui-state-disabled'), n.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, 'datepicker')
            } catch (i) {
                throw 'Missing instance data for this datepicker'
            }
        },
        _optionDatepicker: function(t, i, s) {
            var o, c, a, l, r = this._getInst(t);
            return 2 === arguments.length && 'string' == typeof i ? 'defaults' === i ? e.extend({}, e.datepicker._defaults) : r ? 'all' === i ? e.extend({}, r.settings) : this._get(r, i) : null : (o = i || {}, 'string' == typeof i && (o = {}, o[i] = s), r && (this._curInst === r && this._hideDatepicker(), c = this._getDateDatepicker(t, !0), a = this._getMinMaxDate(r, 'min'), l = this._getMinMaxDate(r, 'max'), n(r.settings, o), null !== a && void 0 !== o.dateFormat && void 0 === o.minDate && (r.settings.minDate = this._formatDate(r, a)), null !== l && void 0 !== o.dateFormat && void 0 === o.maxDate && (r.settings.maxDate = this._formatDate(r, l)), 'disabled' in o && (o.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), r), this._autoSize(r), this._setDate(r, c), this._updateAlternate(r), this._updateDatepicker(r)), void 0)
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var s, o, r, i = e.datepicker._getInst(t.target),
                n = !0,
                a = i.dpDiv.is('.ui-datepicker-rtl');
            if (i._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), n = !1;
                    break;
                case 13:
                    return r = e('td.' + e.datepicker._dayOverClass + ':not(.' + e.datepicker._currentClass + ')', i.dpDiv), r[0] && e.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, r[0]), s = e.datepicker._get(i, 'onSelect'), s ? (o = e.datepicker._formatDate(i), s.apply(i.input ? i.input[0] : null, [o, i])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(i, 'stepBigMonths') : -e.datepicker._get(i, 'stepMonths'), 'M');
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(i, 'stepBigMonths') : +e.datepicker._get(i, 'stepMonths'), 'M');
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), n = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), n = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, a ? 1 : -1, 'D'), n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(i, 'stepBigMonths') : -e.datepicker._get(i, 'stepMonths'), 'M');
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, 'D'), n = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, a ? -1 : 1, 'D'), n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(i, 'stepBigMonths') : +e.datepicker._get(i, 'stepMonths'), 'M');
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, 'D'), n = t.ctrlKey || t.metaKey;
                    break;
                default:
                    n = !1
            }
            else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : n = !1;
            n && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, n, s = e.datepicker._getInst(t.target);
            return e.datepicker._get(s, 'constrainInput') ? (i = e.datepicker._possibleChars(e.datepicker._get(s, 'dateFormat')), n = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || ' ' > n || !i || i.indexOf(n) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var s, n = e.datepicker._getInst(t.target);
            if (n.input.val() !== n.lastVal) try {
                s = e.datepicker.parseDate(e.datepicker._get(n, 'dateFormat'), n.input ? n.input.val() : null, e.datepicker._getFormatConfig(n)), s && (e.datepicker._setDateFromField(n), e.datepicker._updateAlternate(n), e.datepicker._updateDatepicker(n))
            } catch (i) {};
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, 'input' !== t.nodeName.toLowerCase() && (t = e('input', t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, a, l, s, r, o, c;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, 'beforeShow'), l = a ? a.apply(t, [t, i]) : {}, l !== !1 && (n(i.settings, l), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ''), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), s = !1, e(t).parents().each(function() {
                    return s |= 'fixed' === e(this).css('position'), !s
                }), r = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: 'absolute',
                    display: 'block',
                    top: '-1000px'
                }), e.datepicker._updateDatepicker(i), r = e.datepicker._checkOffset(i, r, s), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? 'static' : s ? 'fixed' : 'absolute',
                    display: 'none',
                    left: r.left + 'px',
                    top: r.top + 'px'
                }), i.inline || (o = e.datepicker._get(i, 'showAnim'), c = e.datepicker._get(i, 'duration'), i.dpDiv.css('z-index', h(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[o] ? i.dpDiv.show(o, e.datepicker._get(i, 'showOptions'), c) : i.dpDiv[o || 'show'](o ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(i) {
            this.maxRows = 4, t = i, i.dpDiv.empty().append(this._generateHTML(i)), this._attachHandlers(i);
            var n, s = this._getNumberOfMonths(i),
                r = s[1],
                a = 17,
                o = i.dpDiv.find('.' + this._dayOverClass + ' a');
            o.length > 0 && c.apply(o.get(0)), i.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width(''), r > 1 && i.dpDiv.addClass('ui-datepicker-multi-' + r).css('width', a * r + 'em'), i.dpDiv[(1 !== s[0] || 1 !== s[1] ? 'add' : 'remove') + 'Class']('ui-datepicker-multi'), i.dpDiv[(this._get(i, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl'), i === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(i) && i.input.focus(), i.yearshtml && (n = i.yearshtml, setTimeout(function() {
                n === i.yearshtml && i.yearshtml && i.dpDiv.find('select.ui-datepicker-year:first').replaceWith(i.yearshtml), n = i.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(':visible') && !e.input.is(':disabled') && !e.input.is(':focus')
        },
        _checkOffset: function(t, i, n) {
            var s = t.dpDiv.outerWidth(),
                r = t.dpDiv.outerHeight(),
                c = t.input ? t.input.outerWidth() : 0,
                a = t.input ? t.input.outerHeight() : 0,
                o = document.documentElement.clientWidth + (n ? 0 : e(document).scrollLeft()),
                l = document.documentElement.clientHeight + (n ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, 'isRTL') ? s - c : 0, i.left -= n && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= n && i.top === t.input.offset().top + a ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > o && o > s ? Math.abs(i.left + s - o) : 0), i.top -= Math.min(i.top, i.top + r > l && l > r ? Math.abs(r + a) : 0), i
        },
        _findPos: function(t) {
            for (var i, n = this._getInst(t), s = this._get(n, 'isRTL'); t && ('hidden' === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[s ? 'previousSibling' : 'nextSibling'];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var n, r, s, o, i = this._curInst;
            !i || t && i !== e.data(t, 'datepicker') || this._datepickerShowing && (n = this._get(i, 'showAnim'), r = this._get(i, 'duration'), s = function() {
                e.datepicker._tidyDialog(i)
            }, e.effects && (e.effects.effect[n] || e.effects[n]) ? i.dpDiv.hide(n, e.datepicker._get(i, 'showOptions'), r, s) : i.dpDiv['slideDown' === n ? 'slideUp' : 'fadeIn' === n ? 'fadeOut' : 'hide'](n ? r : null, s), n || s(), this._datepickerShowing = !1, o = this._get(i, 'onClose'), o && o.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : '', i]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: 'absolute',
                left: '0',
                top: '-100px'
            }), e.blockUI && (e.unblockUI(), e('body').append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar')
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    n = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents('#' + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest('.' + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== n) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, n) {
            var r = e(t),
                s = this._getInst(r[0]);
            this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(s, i + ('M' === n ? this._get(s, 'showCurrentAtPos') : 0), n), this._updateDatepicker(s))
        },
        _gotoToday: function(t) {
            var n, s = e(t),
                i = this._getInst(s[0]);
            this._get(i, 'gotoCurrent') && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(s)
        },
        _selectMonthYear: function(t, i, n) {
            var r = e(t),
                s = this._getInst(r[0]);
            s['selected' + ('M' === n ? 'Month' : 'Year')] = s['draw' + ('M' === n ? 'Month' : 'Year')] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(r)
        },
        _selectDay: function(t, i, n, s) {
            var r, o = e(t);
            e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (r = this._getInst(o[0]), r.selectedDay = r.currentDay = e('a', s).html(), r.selectedMonth = r.currentMonth = i, r.selectedYear = r.currentYear = n, this._selectDate(t, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, '')
        },
        _selectDate: function(t, i) {
            var s, r = e(t),
                n = this._getInst(r[0]);
            i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), s = this._get(n, 'onSelect'), s ? s.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger('change'), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], 'object' != typeof n.input[0] && n.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, n, s, r = this._get(t, 'altField');
            r && (i = this._get(t, 'altFormat') || this._get(t, 'dateFormat'), n = this._getDate(t), s = this.formatDate(i, n, this._getFormatConfig(t)), e(r).each(function() {
                e(this).val(s)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, '']
        },
        iso8601Week: function(e) {
            var i, t = new Date(e.getTime());
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, n) {
            if (null == t || null == i) throw 'Invalid arguments';
            if (i = 'object' == typeof i ? '' + i : i + '', '' === i) return null;
            var a, d, f, s, r = 0,
                p = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                b = 'string' != typeof p ? p : (new Date).getFullYear() % 100 + parseInt(p, 10),
                w = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                x = (n ? n.dayNames : null) || this._defaults.dayNames,
                k = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                C = (n ? n.monthNames : null) || this._defaults.monthNames,
                o = -1,
                l = -1,
                c = -1,
                m = -1,
                g = !1,
                h = function(e) {
                    var i = t.length > a + 1 && t.charAt(a + 1) === e;
                    return i && a++, i
                },
                u = function(e) {
                    var s = h(e),
                        n = '@' === e ? 14 : '!' === e ? 20 : 'y' === e && s ? 4 : 'o' === e ? 3 : 2,
                        o = 'y' === e ? n : 1,
                        a = RegExp('^\\d{' + o + ',' + n + '}'),
                        t = i.substring(r).match(a);
                    if (!t) throw 'Missing number at position ' + r;
                    return r += t[0].length, parseInt(t[0], 10)
                },
                y = function(t, n, s) {
                    var o = -1,
                        a = e.map(h(t) ? s : n, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(a, function(e, t) {
                            var n = t[1];
                            return i.substr(r, n.length).toLowerCase() === n.toLowerCase() ? (o = t[0], r += n.length, !1) : void 0
                        }), -1 !== o) return o + 1;
                    throw 'Unknown name at position ' + r
                },
                v = function() {
                    if (i.charAt(r) !== t.charAt(a)) throw 'Unexpected literal at position ' + r;
                    r++
                };
            for (a = 0; t.length > a; a++)
                if (g) '\'' !== t.charAt(a) || h('\'') ? v() : g = !1;
                else switch (t.charAt(a)) {
                    case 'd':
                        c = u('d');
                        break;
                    case 'D':
                        y('D', w, x);
                        break;
                    case 'o':
                        m = u('o');
                        break;
                    case 'm':
                        l = u('m');
                        break;
                    case 'M':
                        l = y('M', k, C);
                        break;
                    case 'y':
                        o = u('y');
                        break;
                    case '@':
                        s = new Date(u('@')), o = s.getFullYear(), l = s.getMonth() + 1, c = s.getDate();
                        break;
                    case '!':
                        s = new Date((u('!') - this._ticksTo1970) / 1e4), o = s.getFullYear(), l = s.getMonth() + 1, c = s.getDate();
                        break;
                    case '\'':
                        h('\'') ? v() : g = !0;
                        break;
                    default:
                        v()
                };
            if (i.length > r && (f = i.substr(r), !/^\s+/.test(f))) throw 'Extra/unparsed characters found in date: ' + f;
            if (-1 === o ? o = (new Date).getFullYear() : 100 > o && (o += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (b >= o ? 0 : -100)), m > -1)
                for (l = 1, c = m;;) {
                    if (d = this._getDaysInMonth(o, l - 1), d >= c) break;
                    l++, c -= d
                };
            if (s = this._daylightSavingAdjust(new Date(o, l - 1, c)), s.getFullYear() !== o || s.getMonth() + 1 !== l || s.getDate() !== c) throw 'Invalid date';
            return s
        },
        ATOM: 'yy-mm-dd',
        COOKIE: 'D, dd M yy',
        ISO_8601: 'yy-mm-dd',
        RFC_822: 'D, d M y',
        RFC_850: 'DD, dd-M-y',
        RFC_1036: 'D, d M y',
        RFC_1123: 'D, d M yy',
        RFC_2822: 'D, d M yy',
        RSS: 'D, d M y',
        TICKS: '!',
        TIMESTAMP: '@',
        W3C: 'yy-mm-dd',
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) return '';
            var s, c = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                u = (i ? i.dayNames : null) || this._defaults.dayNames,
                h = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                d = (i ? i.monthNames : null) || this._defaults.monthNames,
                r = function(t) {
                    var i = e.length > s + 1 && e.charAt(s + 1) === t;
                    return i && s++, i
                },
                o = function(e, t, i) {
                    var n = '' + t;
                    if (r(e))
                        for (; i > n.length;) n = '0' + n;
                    return n
                },
                l = function(e, t, i, n) {
                    return r(e) ? n[t] : i[t]
                },
                n = '',
                a = !1;
            if (t)
                for (s = 0; e.length > s; s++)
                    if (a) '\'' !== e.charAt(s) || r('\'') ? n += e.charAt(s) : a = !1;
                    else switch (e.charAt(s)) {
                        case 'd':
                            n += o('d', t.getDate(), 2);
                            break;
                        case 'D':
                            n += l('D', t.getDay(), c, u);
                            break;
                        case 'o':
                            n += o('o', Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case 'm':
                            n += o('m', t.getMonth() + 1, 2);
                            break;
                        case 'M':
                            n += l('M', t.getMonth(), h, d);
                            break;
                        case 'y':
                            n += r('y') ? t.getFullYear() : (10 > t.getYear() % 100 ? '0' : '') + t.getYear() % 100;
                            break;
                        case '@':
                            n += t.getTime();
                            break;
                        case '!':
                            n += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case '\'':
                            r('\'') ? n += '\'' : a = !0;
                            break;
                        default:
                            n += e.charAt(s)
                    };
            return n
        },
        _possibleChars: function(e) {
            var t, i = '',
                n = !1,
                s = function(i) {
                    var n = e.length > t + 1 && e.charAt(t + 1) === i;
                    return n && t++, n
                };
            for (t = 0; e.length > t; t++)
                if (n) '\'' !== e.charAt(t) || s('\'') ? i += e.charAt(t) : n = !1;
                else switch (e.charAt(t)) {
                    case 'd':
                    case 'm':
                    case 'y':
                    case '@':
                        i += '0123456789';
                        break;
                    case 'D':
                    case 'M':
                        return null;
                    case '\'':
                        s('\'') ? i += '\'' : n = !0;
                        break;
                    default:
                        i += e.charAt(t)
                };
            return i
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var o = this._get(e, 'dateFormat'),
                    s = e.lastVal = e.input ? e.input.val() : null,
                    r = this._getDefaultDate(e),
                    n = r,
                    a = this._getFormatConfig(e);
                try {
                    n = this.parseDate(o, s, a) || r
                } catch (i) {
                    s = t ? '' : s
                };
                e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = s ? n.getDate() : 0, e.currentMonth = s ? n.getMonth() : 0, e.currentYear = s ? n.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, 'defaultDate'), new Date))
        },
        _determineDate: function(t, i, n) {
            var r = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                o = function(i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, 'dateFormat'), i, e.datepicker._getFormatConfig(t))
                    } catch (n) {};
                    for (var l = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, o = l.getFullYear(), a = l.getMonth(), s = l.getDate(), c = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = c.exec(i); r;) {
                        switch (r[2] || 'd') {
                            case 'd':
                            case 'D':
                                s += parseInt(r[1], 10);
                                break;
                            case 'w':
                            case 'W':
                                s += 7 * parseInt(r[1], 10);
                                break;
                            case 'm':
                            case 'M':
                                a += parseInt(r[1], 10), s = Math.min(s, e.datepicker._getDaysInMonth(o, a));
                                break;
                            case 'y':
                            case 'Y':
                                o += parseInt(r[1], 10), s = Math.min(s, e.datepicker._getDaysInMonth(o, a))
                        };
                        r = c.exec(i)
                    };
                    return new Date(o, a, s)
                },
                s = null == i || '' === i ? n : 'string' == typeof i ? o(i) : 'number' == typeof i ? isNaN(i) ? n : r(i) : new Date(i.getTime());
            return s = s && 'Invalid Date' == '' + s ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, i) {
            var s = !t,
                r = e.selectedMonth,
                o = e.selectedYear,
                n = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = n.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = n.getMonth(), e.drawYear = e.selectedYear = e.currentYear = n.getFullYear(), r === e.selectedMonth && o === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? '' : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && '' === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var n = this._get(t, 'stepMonths'),
                i = '#' + t.id.replace(/\\\\/g, '\\');
            t.dpDiv.find('[data-handler]').map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(i, -n, 'M')
                    },
                    next: function() {
                        e.datepicker._adjustDate(i, +n, 'M')
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(i, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(i, this, 'M'), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(i, this, 'Y'), !1
                    }
                };
                e(this).bind(this.getAttribute('data-event'), t[this.getAttribute('data-handler')])
            })
        },
        _generateHTML: function(e) {
            var v, l, T, c, D, y, S, I, X, u, P, K, Q, J, V, j, w, G, A, x, a, p, N, m, M, h, s, E, O, z, L, k, F, i, H, W, b, d, C, R = new Date,
                B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                r = this._get(e, 'isRTL'),
                te = this._get(e, 'showButtonPanel'),
                Z = this._get(e, 'hideIfNoPrevNext'),
                q = this._get(e, 'navigationAsDateFormat'),
                o = this._getNumberOfMonths(e),
                ie = this._get(e, 'showCurrentAtPos'),
                ee = this._get(e, 'stepMonths'),
                Y = 1 !== o[0] || 1 !== o[1],
                U = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                g = this._getMinMaxDate(e, 'min'),
                f = this._getMinMaxDate(e, 'max'),
                t = e.drawMonth - ie,
                n = e.drawYear;
            if (0 > t && (t += 12, n--), f)
                for (v = this._daylightSavingAdjust(new Date(f.getFullYear(), f.getMonth() - o[0] * o[1] + 1, f.getDate())), v = g && g > v ? g : v; this._daylightSavingAdjust(new Date(n, t, 1)) > v;) t--, 0 > t && (t = 11, n--);
            for (e.drawMonth = t, e.drawYear = n, l = this._get(e, 'prevText'), l = q ? this.formatDate(l, this._daylightSavingAdjust(new Date(n, t - ee, 1)), this._getFormatConfig(e)) : l, T = this._canAdjustMonth(e, -1, n, t) ? '<a class=\'ui-datepicker-prev ui-corner-all\' data-handler=\'prev\' data-event=\'click\' title=\'' + l + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (r ? 'e' : 'w') + '\'>' + l + '</span></a>' : Z ? '' : '<a class=\'ui-datepicker-prev ui-corner-all ui-state-disabled\' title=\'' + l + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (r ? 'e' : 'w') + '\'>' + l + '</span></a>', c = this._get(e, 'nextText'), c = q ? this.formatDate(c, this._daylightSavingAdjust(new Date(n, t + ee, 1)), this._getFormatConfig(e)) : c, D = this._canAdjustMonth(e, 1, n, t) ? '<a class=\'ui-datepicker-next ui-corner-all\' data-handler=\'next\' data-event=\'click\' title=\'' + c + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (r ? 'w' : 'e') + '\'>' + c + '</span></a>' : Z ? '' : '<a class=\'ui-datepicker-next ui-corner-all ui-state-disabled\' title=\'' + c + '\'><span class=\'ui-icon ui-icon-circle-triangle-' + (r ? 'w' : 'e') + '\'>' + c + '</span></a>', y = this._get(e, 'currentText'), S = this._get(e, 'gotoCurrent') && e.currentDay ? U : B, y = q ? this.formatDate(y, S, this._getFormatConfig(e)) : y, I = e.inline ? '' : '<button type=\'button\' class=\'ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all\' data-handler=\'hide\' data-event=\'click\'>' + this._get(e, 'closeText') + '</button>', X = te ? '<div class=\'ui-datepicker-buttonpane ui-widget-content\'>' + (r ? I : '') + (this._isInRange(e, S) ? '<button type=\'button\' class=\'ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all\' data-handler=\'today\' data-event=\'click\'>' + y + '</button>' : '') + (r ? '' : I) + '</div>' : '', u = parseInt(this._get(e, 'firstDay'), 10), u = isNaN(u) ? 0 : u, P = this._get(e, 'showWeek'), K = this._get(e, 'dayNames'), Q = this._get(e, 'dayNamesMin'), J = this._get(e, 'monthNames'), V = this._get(e, 'monthNamesShort'), j = this._get(e, 'beforeShowDay'), w = this._get(e, 'showOtherMonths'), G = this._get(e, 'selectOtherMonths'), A = this._getDefaultDate(e), x = '', p = 0; o[0] > p; p++) {
                for (N = '', this.maxRows = 4, m = 0; o[1] > m; m++) {
                    if (M = this._daylightSavingAdjust(new Date(n, t, e.selectedDay)), h = ' ui-corner-all', s = '', Y) {
                        if (s += '<div class=\'ui-datepicker-group', o[1] > 1) switch (m) {
                            case 0:
                                s += ' ui-datepicker-group-first', h = ' ui-corner-' + (r ? 'right' : 'left');
                                break;
                            case o[1] - 1:
                                s += ' ui-datepicker-group-last', h = ' ui-corner-' + (r ? 'left' : 'right');
                                break;
                            default:
                                s += ' ui-datepicker-group-middle', h = ''
                        };
                        s += '\'>'
                    };
                    for (s += '<div class=\'ui-datepicker-header ui-widget-header ui-helper-clearfix' + h + '\'>' + (/all|left/.test(h) && 0 === p ? r ? D : T : '') + (/all|right/.test(h) && 0 === p ? r ? T : D : '') + this._generateMonthYearHeader(e, t, n, g, f, p > 0 || m > 0, J, V) + '</div><table class=\'ui-datepicker-calendar\'><thead><tr>', E = P ? '<th class=\'ui-datepicker-week-col\'>' + this._get(e, 'weekHeader') + '</th>' : '', a = 0; 7 > a; a++) O = (a + u) % 7, E += '<th scope=\'col\'' + ((a + u + 6) % 7 >= 5 ? ' class=\'ui-datepicker-week-end\'' : '') + '><span title=\'' + K[O] + '\'>' + Q[O] + '</span></th>';
                    for (s += E + '</tr></thead><tbody>', z = this._getDaysInMonth(n, t), n === e.selectedYear && t === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, z)), L = (this._getFirstDayOfMonth(n, t) - u + 7) % 7, k = Math.ceil((L + z) / 7), F = Y ? this.maxRows > k ? this.maxRows : k : k, this.maxRows = F, i = this._daylightSavingAdjust(new Date(n, t, 1 - L)), H = 0; F > H; H++) {
                        for (s += '<tr>', W = P ? '<td class=\'ui-datepicker-week-col\'>' + this._get(e, 'calculateWeek')(i) + '</td>' : '', a = 0; 7 > a; a++) b = j ? j.apply(e.input ? e.input[0] : null, [i]) : [!0, ''], d = i.getMonth() !== t, C = d && !G || !b[0] || g && g > i || f && i > f, W += '<td class=\'' + ((a + u + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + (d ? ' ui-datepicker-other-month' : '') + (i.getTime() === M.getTime() && t === e.selectedMonth && e._keyEvent || A.getTime() === i.getTime() && A.getTime() === M.getTime() ? ' ' + this._dayOverClass : '') + (C ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') + (d && !w ? '' : ' ' + b[1] + (i.getTime() === U.getTime() ? ' ' + this._currentClass : '') + (i.getTime() === B.getTime() ? ' ui-datepicker-today' : '')) + '\'' + (d && !w || !b[2] ? '' : ' title=\'' + b[2].replace(/'/g, '&#39;') + '\'') + (C ? '' : ' data-handler=\'selectDay\' data-event=\'click\' data-month=\'' + i.getMonth() + '\' data-year=\'' + i.getFullYear() + '\'') + '>' + (d && !w ? '&#xa0;' : C ? '<span class=\'ui-state-default\'>' + i.getDate() + '</span>' : '<a class=\'ui-state-default' + (i.getTime() === B.getTime() ? ' ui-state-highlight' : '') + (i.getTime() === U.getTime() ? ' ui-state-active' : '') + (d ? ' ui-priority-secondary' : '') + '\' href=\'#\'>' + i.getDate() + '</a>') + '</td>', i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                        s += W + '</tr>'
                    };
                    t++, t > 11 && (t = 0, n++), s += '</tbody></table>' + (Y ? '</div>' + (o[0] > 0 && m === o[1] - 1 ? '<div class=\'ui-datepicker-row-break\'></div>' : '') : ''), N += s
                };
                x += N
            };
            return x += X, e._keyEvent = !1, x
        },
        _generateMonthYearHeader: function(e, t, i, n, s, o, g, w) {
            var v, y, a, h, d, f, r, u, p = this._get(e, 'changeMonth'),
                m = this._get(e, 'changeYear'),
                b = this._get(e, 'showMonthAfterYear'),
                l = '<div class=\'ui-datepicker-title\'>',
                c = '';
            if (o || !p) c += '<span class=\'ui-datepicker-month\'>' + g[t] + '</span>';
            else {
                for (v = n && n.getFullYear() === i, y = s && s.getFullYear() === i, c += '<select class=\'ui-datepicker-month\' data-handler=\'selectMonth\' data-event=\'change\'>', a = 0; 12 > a; a++)(!v || a >= n.getMonth()) && (!y || s.getMonth() >= a) && (c += '<option value=\'' + a + '\'' + (a === t ? ' selected=\'selected\'' : '') + '>' + w[a] + '</option>');
                c += '</select>'
            };
            if (b || (l += c + (!o && p && m ? '' : '&#xa0;')), !e.yearshtml)
                if (e.yearshtml = '', o || !m) l += '<span class=\'ui-datepicker-year\'>' + i + '</span>';
                else {
                    for (h = this._get(e, 'yearRange').split(':'), d = (new Date).getFullYear(), f = function(e) {
                            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? d : t
                        }, r = f(h[0]), u = Math.max(r, f(h[1] || '')), r = n ? Math.max(r, n.getFullYear()) : r, u = s ? Math.min(u, s.getFullYear()) : u, e.yearshtml += '<select class=\'ui-datepicker-year\' data-handler=\'selectYear\' data-event=\'change\'>'; u >= r; r++) e.yearshtml += '<option value=\'' + r + '\'' + (r === i ? ' selected=\'selected\'' : '') + '>' + r + '</option>';
                    e.yearshtml += '</select>', l += e.yearshtml, e.yearshtml = null
                };
            return l += this._get(e, 'yearSuffix'), b && (l += (!o && p && m ? '' : '&#xa0;') + c), l += '</div>'
        },
        _adjustInstDate: function(e, t, i) {
            var s = e.drawYear + ('Y' === i ? t : 0),
                r = e.drawMonth + ('M' === i ? t : 0),
                o = Math.min(e.selectedDay, this._getDaysInMonth(s, r)) + ('D' === i ? t : 0),
                n = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, r, o)));
            e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), ('M' === i || 'Y' === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, 'min'),
                n = this._getMinMaxDate(e, 'max'),
                s = i && i > t ? i : t;
            return n && s > n ? n : s
        },
        _notifyChange: function(e) {
            var t = this._get(e, 'onChangeMonthYear');
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, 'numberOfMonths');
            return null == t ? [1, 1] : 'number' == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + 'Date'), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, i, n) {
            var r = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : r[0] * r[1]), 1));
            return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var i, r, o = this._getMinMaxDate(e, 'min'),
                a = this._getMinMaxDate(e, 'max'),
                n = null,
                s = null,
                l = this._get(e, 'yearRange');
            return l && (i = l.split(':'), r = (new Date).getFullYear(), n = parseInt(i[0], 10), s = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (n += r), i[1].match(/[+\-].*/) && (s += r)), (!o || t.getTime() >= o.getTime()) && (!a || t.getTime() <= a.getTime()) && (!n || t.getFullYear() >= n) && (!s || s >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, 'shortYearCutoff');
            return t = 'string' != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, 'dayNamesShort'),
                dayNames: this._get(e, 'dayNames'),
                monthNamesShort: this._get(e, 'monthNamesShort'),
                monthNames: this._get(e, 'monthNames')
            }
        },
        _formatDate: function(e, t, i, n) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var s = t ? 'object' == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, 'dateFormat'), s, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e('#' + e.datepicker._mainDivId).length && e('body').append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return 'string' != typeof t || 'isDisabled' !== t && 'getDate' !== t && 'widget' !== t ? 'option' === t && 2 === arguments.length && 'string' == typeof arguments[1] ? e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() {
            'string' == typeof t ? e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker['_' + t + 'Datepicker'].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new a, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = '1.11.4', e.datepicker
});


(function(e, t) {
    e.fn.fcbkcomplete = function(t) {
        return this.queue(function() {
            function O() {
                z();
                P(0)
            };

            function z() {
                l = e('<ul class="holder textinput"></ul>').width(n.width);
                if (n.attachto) {
                    if (typeof(n.attachto) == 'object') {
                        n.attachto.append(l)
                    } else {
                        e(n.attachto).append(l)
                    }
                } else {
                    s.after(l)
                };
                c = e('<div class="facebook-auto">').width(n.width);
                if (n.complete_text != '') {
                    var t = n.complete_text;
                    if (n.select_all_text) {
                        c.children('.default').append(e('<a href="" class="select_all_items">' + n.select_all_text + '</a>').click(function() {
                            e(s).trigger('selectAll');
                            return !1
                        }))
                    }
                };
                c.hover(function() {
                    w = 0
                }, function() {
                    w = 1
                });
                r = e('<ul id="' + f + '_feed"></ul>').width(n.width);
                l.after(c.prepend(r));
                L()
            };

            function L() {
                name = s.attr('name');
                if (n.bricket) {
                    if (typeof(name) != 'undefined' && name.indexOf('[]') == -1) {
                        name = name + '[]'
                    }
                };
                var t = e('<' + s.get(0).tagName + ' name="' + name + '" id="' + f + '" multiple="multiple" class="' + s.get(0).className + ' hidden">').data('cache', {});
                e.each(s.children('option'), function(i, n) {
                    n = e(n);
                    t.data('cache')[n.val()] = n.text();
                    if (n.hasClass('selected')) {
                        var s = u(n.text(), n.val(), !0, n.hasClass('locked'));
                        t.append('<option value="' + n.val() + '" selected="selected" id="opt_' + s + '"class="selected">' + n.text() + '</option>')
                    }
                });
                s.after(t);
                s.remove();
                s = t;
                e(s).bind('addItem', function(e, t) {
                    u(t.title, t.value, 0, 0, 0)
                });
                e(s).bind('removeItem', function(e, t) {
                    var i = l.children('li[rel=' + t.value + ']');
                    if (i.length) {
                        C(i)
                    }
                });
                e(s).bind('destroy', function(e, t) {
                    l.remove();
                    c.remove();
                    s.show()
                });
                e(s).bind('selectAll', function(t, i) {
                    var n = e(s).val() || [];
                    e.each(e(s).data('cache'), function(t, i) {
                        if (e.inArray(t, n) === -1) {
                            u(i, t, 0, 0, 0)
                        }
                    });
                    r.parent().hide()
                })
            };

            function u(t, i, r, o, a) {
                if (!p()) {
                    return !1
                };
                var m = 'bit-box' + (o ? ' locked' : ''),
                    c = E(),
                    g = document.createTextNode(d(t)),
                    h = e('<a class="closebutton" href="#"></a>'),
                    y = e('<li class="' + m + '" rel="' + i + '" id="pt_' + c + '"></li>').prepend(g).append(h);
                l.append(y);
                h.click(function() {
                    C(e(this).parent('li'));
                    return !1
                });
                if (!r) {
                    e('#' + f + '_annoninput').remove();
                    P(a);
                    var u = e('<option value="' + d(i) + '" id="opt_' + c + '" class="selected" selected="selected">' + d(t) + '</option>');
                    s.append(u);
                    if (n.onselect) {
                        I(n.onselect, u)
                    };
                    s.change()
                };
                l.children('li.bit-box.deleted').removeClass('deleted');
                v(1);
                return c
            };

            function C(t) {
                if (!t.hasClass('locked')) {
                    t.fadeOut('fast');
                    var i = t.attr('id');
                    if (n.onremove) {
                        var r = i ? e('#o' + i + '') : s.children('option[value=' + t.attr('rel') + ']');
                        I(n.onremove, r)
                    };
                    if (i) {
                        e('#o' + i + '').remove()
                    } else {
                        s.children('option[value="' + t.attr('rel') + '"]').remove()
                    };
                    t.remove();
                    s.change();
                    b = 0
                }
            };

            function P(t) {
                var s = e('<li class="bit-input" id="' + f + '_annoninput">'),
                    i = e('<input type="text" class="maininput" size="' + n.input_min_size + '" autocomplete="off">');
                if (n.input_tabindex > 0) i.attr('tabindex', n.input_tabindex);
                if (n.input_name != '') i.attr('name', n.input_name);
                l.append(s.append(i));
                i.focus(function() {
                    y = !0;
                    if (p()) {
                        c.fadeIn('fast')
                    }
                });
                i.blur(function() {
                    y = !1;
                    if (w) {
                        c.fadeOut('fast')
                    } else {}
                });
                l.click(function() {
                    if (n.input_min_size < 0 && r.length) {
                        M(m(i.val(), 1))
                    };
                    i.focus();
                    if (r.length && i.val().length > n.input_min_size) {
                        r.show()
                    } else {
                        v(1);
                        c.children('.default').show()
                    }
                });
                i.keypress(function(e) {
                    if (e.keyCode == a.enter) {
                        return !1
                    };
                    var t = (n.input_min_size > i.val().length) ? n.input_min_size : (i.val().length + 1);
                    i.attr('size', t).width(parseInt(i.css('font-size')) * t)
                });
                i.keyup(function(t) {
                    var s = m(i.val(), 1);
                    if (t.keyCode == a.backspace && s.length == 0) {
                        v(1);
                        if (!l.children('li.bit-box:last').hasClass('locked')) {
                            if (l.children('li.bit-box.deleted').length == 0) {
                                l.children('li.bit-box:last').addClass('deleted');
                                return !1
                            } else {
                                if (b) {
                                    return
                                };
                                b = 1;
                                l.children('li.bit-box.deleted').fadeOut('fast', function() {
                                    C(e(this));
                                    return !1
                                })
                            }
                        }
                    };
                    if (t.keyCode != a.downarrow && t.keyCode != a.uparrow && t.keyCode != a.leftarrow && t.keyCode != a.rightarrow && s.length >= n.input_min_size) {
                        M(s);
                        c.children('.default').hide();
                        r.show()
                    }
                });
                if (n.oncreate) {
                    I(n.oncreate, i)
                };
                if (t) {
                    setTimeout(function() {
                        i.focus();
                        c.children('.default').show()
                    }, 1)
                }
            };

            function T(t, i) {
                r.html('');
                if (!n.cache && i != null) {
                    h.clear()
                };
                W(t);
                if (i != null && i.length) {
                    e.each(i, function(e, t) {
                        h.set(m(t.key), m(t.value))
                    })
                };
                var a = n.maxshownitems < h.length() ? n.maxshownitems : h.length(),
                    l = '';
                e.each(h.search(t), function(e, i) {
                    if (a) {
                        if (n.filter_selected && s.children('option[value="' + i.key + '"]').hasClass('selected')) {} else {
                            l += '<li rel="' + i.key + '">' + d(F(i.value, t)) + '</li>';
                            g++;
                            a--
                        }
                    }
                });
                r.append(l);
                if (n.firstselected) {
                    o = r.children('li:visible:first');
                    o.addClass('auto-focus')
                };
                if (g > n.height) {
                    r.css({
                        'height': (n.height * 24) + 'px',
                        'overflow': 'auto'
                    })
                } else {
                    r.css('height', 'auto')
                };
                if (p() && c.is(':hidden')) {
                    c.show()
                }
            };

            function F(e, t) {
                var r = n.filter_begin ? '' : '(.*)',
                    o = n.filter_begin ? '<em>$1</em>$2' : '$1<em>$2</em>$3',
                    a = r + (n.filter_case ? '(' + t + ')(.*)' : '(' + t.toLowerCase() + ')(.*)');
                try {
                    var s = new RegExp(a, ((n.filter_case) ? 'g' : 'gi')),
                        e = e.replace(s, o)
                } catch (i) {};
                return e
            };

            function j() {
                r.children('li').mouseover(function() {
                    r.children('li').removeClass('auto-focus');
                    o = e(this);
                    o.addClass('auto-focus')
                });
                r.children('li').mouseout(function() {
                    e(this).removeClass('auto-focus');
                    o = null
                })
            };

            function H() {
                r.unbind('mouseover').unbind('mouseout').mousemove(function() {
                    j();
                    r.unbind('mousemove')
                })
            };

            function D() {
                var t = e('#' + f + '_annoninput').children('.maininput');
                j();
                r.children('li').unbind('mousedown').mousedown(function() {
                    var t = e(this);
                    u(t.text(), t.attr('rel'), 0, 0, 1);
                    v(1);
                    c.hide()
                });
                t.unbind('keydown');
                t.keydown(function(t) {
                    if (t.keyCode != a.backspace) {
                        l.children('li.bit-box.deleted').removeClass('deleted')
                    };
                    if ((t.keyCode == a.enter || t.keyCode == a.tab || t.keyCode == a.comma) && N()) {
                        var i = o;
                        u(i.text(), i.attr('rel'), 0, 0, 1);
                        return S(t)
                    };
                    if ((t.keyCode == a.enter || t.keyCode == a.tab || t.keyCode == a.comma) && !N()) {
                        if (n.newel) {
                            var s = m(e(this).val());
                            u(s, s, 0, 0, 1);
                            return S(t)
                        };
                        if ((n.addontab || n.addoncomma) && n.newel) {
                            o = r.children('li:visible:first');
                            var i = o;
                            u(i.text(), i.attr('rel'), 0, 0, 1);
                            return S(t)
                        }
                    };
                    if (t.keyCode == a.downarrow) {
                        A('first')
                    };
                    if (t.keyCode == a.uparrow) {
                        A('last')
                    }
                })
            };

            function A(e) {
                H();
                if (o == null || o.length == 0) {
                    o = r.children('li:visible:' + e);
                    r.get(0).scrollTop = e == 'first' ? 0 : parseInt(o.get(0).scrollHeight, 10) * (parseInt(r.children('li:visible').length, 10) - Math.round(n.height / 2))
                } else {
                    o.removeClass('auto-focus');
                    o = e == 'first' ? o.nextAll('li:visible:first') : o.prevAll('li:visible:first');
                    var t = parseInt(o.prevAll('li:visible').length, 10),
                        i = parseInt(o.nextAll('li:visible').length, 10);
                    if (((e == 'first' ? t : i) > Math.round(n.height / 2) || (e == 'first' ? t : i) <= Math.round(n.height / 2)) && typeof(o.get(0)) != 'undefined') {
                        r.get(0).scrollTop = parseInt(o.get(0).scrollHeight, 10) * (t - Math.round(n.height / 2))
                    }
                };
                r.children('li').removeClass('auto-focus');
                o.addClass('auto-focus')
            };

            function S(e) {
                c.hide();
                e.preventDefault();
                o = null;
                return !1
            };

            function p() {
                return n.maxitems != 0 && (l.children('li.bit-box').length < n.maxitems)
            };

            function W(t) {
                if (n.newel && p()) {
                    r.children('li[fckb=1]').remove();
                    if (t.length == 0) {
                        return
                    };
                    var i = e('<li rel="' + t + '" fckb="1">').html(d(t));
                    r.prepend(i);
                    g++
                };
                return
            };

            function I(e, t) {
                var n = {};
                for (i = 0; i < t.get(0).attributes.length; i++) {
                    if (t.get(0).attributes[i].nodeValue != null) {
                        n['_' + t.get(0).attributes[i].nodeName] = t.get(0).attributes[i].nodeValue
                    }
                };
                return e.call(e, n)
            };

            function N() {
                if (o == null || o.length == 0) {
                    return !1
                };
                return !0
            };

            function m(e, t) {
                if (typeof t != 'undefined') {
                    for (i = 0; i < e.length; i++) {
                        var n = e.charCodeAt(i);
                        if ((a.exclamation <= n && n <= a.slash) || (a.colon <= n && n <= a.at) || (a.squarebricket_left <= n && n <= a.apostrof)) {
                            e = e.replace(e[i], escape(e[i]))
                        }
                    };
                    e = e.replace(/(\{|\}|\*)/i, '\\$1')
                };
                return e.replace(/script(.*)/g, '')
            };

            function d(e, t) {
                e = e.toString();
                e = e.replace('\\', '');
                if (typeof t != 'undefined') {
                    return e
                };
                return unescape(e)
            };

            function v(e) {
                r.children().remove();
                if (e) {
                    r.hide()
                }
            };

            function M(t) {
                g = 0;
                if (n.json_url && p()) {
                    if (n.cache && k.get(t)) {
                        T(t);
                        D()
                    } else {
                        x++;
                        var i = x;
                        setTimeout(function() {
                            if (i != x) return;
                            e.getJSON(n.json_url, {
                                'tag': d(t)
                            }, function(e) {
                                if (!y) return;
                                T(t, e);
                                k.set(t, 1);
                                D()
                            })
                        }, n.delay)
                    }
                } else {
                    T(t);
                    D()
                }
            };
            var n = e.extend({
                json_url: null,
                width: 522,
                cache: !1,
                height: '10',
                newel: !1,
                addontab: !1,
                addoncomma: !1,
                firstselected: !1,
                filter_case: !1,
                filter_selected: !1,
                filter_begin: !1,
                complete_text: 'Start to type...',
                select_all_text: null,
                maxshownitems: 30,
                maxitems: 10,
                oncreate: null,
                onselect: null,
                onremove: null,
                attachto: null,
                delay: 350,
                input_tabindex: 0,
                input_min_size: 1,
                input_name: '',
                bricket: !0
            }, t);
            var l = null,
                r = null,
                c = null,
                g = 0,
                y = !1,
                o = null,
                b = 0,
                w = 1,
                s = e(this),
                f = s.attr('id'),
                x = 0,
                k = {
                    'set': function(e, t) {
                        var i = s.data('jsoncache');
                        i[e] = t;
                        s.data('jsoncache', i)
                    },
                    'get': function(e) {
                        return s.data('jsoncache')[e] != 'undefined' ? s.data('jsoncache')[e] : null
                    },
                    'init': function() {
                        s.data('jsoncache', {})
                    }
                };
            var a = {
                'enter': 13,
                'tab': 9,
                'comma': 188,
                'backspace': 8,
                'leftarrow': 37,
                'uparrow': 38,
                'rightarrow': 39,
                'downarrow': 40,
                'exclamation': 33,
                'slash': 47,
                'colon': 58,
                'at': 64,
                'squarebricket_left': 91,
                'apostrof': 96
            };
            var E = function() {
                    var i = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
                        n = '';
                    for (var t = 0; t < 32; t++) {
                        var e = Math.floor(Math.random() * i.length);
                        n += i.substring(e, e + 1)
                    };
                    return n
                },
                h = {
                    'search': function(t, i) {
                        var r = [],
                            o = new RegExp((n.filter_begin ? '^' : '') + t, (n.filter_case ? 'g' : 'gi'));
                        e.each(s.data('cache'), function(e, t) {
                            if (typeof t.search === 'function') {
                                if (t.search(o) != -1) {
                                    r.push({
                                        'key': e,
                                        'value': t
                                    })
                                }
                            }
                        });
                        return r
                    },
                    'set': function(e, t) {
                        var i = s.data('cache');
                        i[e] = t;
                        s.data('cache', i)
                    },
                    'get': function(e) {
                        return s.data('cache')[e] != 'undefined' ? s.data('cache')[e] : null
                    },
                    'clear': function() {
                        s.data('cache', {})
                    },
                    'length': function() {
                        if (typeof(s.data('cache')) == 'object') {
                            var e = 0;
                            for (i in s.data('cache')) {
                                e++
                            };
                            return e
                        } else {
                            return s.data('cache').length
                        }
                    },
                    'init': function() {
                        if (s.data('cache') == 'undefined') {
                            s.data('cache', {})
                        }
                    }
                };
            O();
            k.init();
            h.init();
            return this
        })
    }
})(jQuery);
(function(e) {
    e.fn.tooManyTabs = function(t) {
        var i = this,
            s = {
                moreTabSelector: '.more-tab',
                dropdownSelector: '.menu-more',
                tabSelector: 'li:not(.action-tab, .drop-tab, .plus-tab)',
                excludeSelector: '.action-tab:visible'
            };
        var r = 2;
        i.readjustTabs = function() {
            i.$moreTab = e(i.config.moreTabSelector, this);
            i.$dropdown = e(i.config.dropdownSelector, this);
            var a = i.$moreTab.outerWidth();
            i.$moreTab.hide();
            var s = e(e(i.config.tabSelector, this).get().reverse());
            s.show();
            var r = (kat.mobile ? 0 : 20);
            e(i.config.excludeSelector, this).each(function() {
                r += parseInt(e(this).outerWidth())
            });
            var o = e(window).width(),
                n = o - r,
                t = 0;
            s.each(function() {
                t += parseInt(e(this).outerWidth())
            });
            i.freeRatio = Math.round(n / t);
            if (t > n) {
                i.$dropdown.html('');
                i.$moreTab.show();
                n -= a;
                s.each(function() {
                    if (t < n) {
                        return !1
                    } else {
                        t -= e(this).outerWidth();
                        i.addTabToDropdown(e(this));
                        e(this).hide()
                    }
                });
                i.$moreTab.hover(function() {
                    clearTimeout(e.data(this, 'timer'));
                    e('ul', this).stop(!0, !0).slideDown(200)
                }, function() {
                    e.data(this, 'timer', setTimeout(e.proxy(function() {
                        e('ul', this).stop(!0, !0).slideUp(200)
                    }, this), 200))
                })
            } else {
                i.$moreTab.hide();
                s.show()
            }
        };
        i.addTabToDropdown = function(t) {
            var n = e('<li class=\'drop-tab\'>' + t.html() + '</li>');
            n.click(function() {
                t.triggerHandler('click');
                e(this).remove()
            });
            i.$dropdown.append(n)
        };
        i.bindEvents = function() {
            e(window).resize(function() {
                i.readjustTabs()
            })
        };
        var n = function(t) {
            i.config = e.extend({}, s, t);
            i.bindEvents();
            i.readjustTabs()
        };
        n(t)
    }
})(jQuery);
(function(e) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], e)
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        e(require('jquery'))
    } else {
        e(jQuery)
    }
}(function(e) {
    e.timeago = function(t) {
        if (t instanceof Date) {
            return i(t)
        } else if (typeof t === 'string') {
            return i(e.timeago.parse(t))
        } else if (typeof t === 'number') {
            return i(new Date(t))
        } else {
            return i(e.timeago.datetime(t))
        }
    };
    var t = e.timeago;
    e.extend(e.timeago, {
        settings: {
            refreshMillis: 60000,
            allowPast: !0,
            allowFuture: !1,
            localeTitle: !1,
            cutoff: 0,
            autoDispose: !0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: 'ago',
                suffixFromNow: 'from now',
                inPast: 'any moment now',
                now: 'just now',
                seconds: '%d seconds',
                minute: 'a minute',
                minutes: '%d minutes',
                hour: 'an hour',
                hours: '%d&nbsp;hours',
                day: 'a day',
                days: '%d&nbsp;days',
                month: 'about a month',
                months: '%d months',
                year: 'about a year',
                years: '%d&nbsp;years',
                wordSeparator: ' ',
                numbers: []
            },
            addAgo: !0
        },
        inWords: function(t) {
            if (!this.settings.allowPast && !this.settings.allowFuture) {
                throw 'timeago allowPast and allowFuture settings can not both be set to false.'
            };
            var i = this.settings.strings,
                u = i.prefixAgo,
                h = this.settings.addAgo ? i.suffixAgo : '';
            if (this.settings.allowFuture) {
                if (t < 0) {
                    u = i.prefixFromNow;
                    h = i.suffixFromNow
                }
            };
            if (!this.settings.allowPast && t >= 0) {
                return this.settings.strings.inPast
            };
            var s = Math.abs(t) / 1000,
                o = s / 60,
                a = o / 60,
                r = a / 24,
                c = r / 365;

            function n(n, s) {
                var r = e.isFunction(n) ? n(s, t) : n,
                    o = (i.numbers && i.numbers[s]) || s;
                return r.replace(/%d/i, o)
            };
            if (s < 10) {
                return i.now
            };
            var d = s < 10 && n(i.now, Math.round(s)) || s < 45 && n(i.seconds, Math.round(s)) || s < 90 && n(i.minute, 1) || o < 45 && n(i.minutes, Math.round(o)) || o < 90 && n(i.hour, 1) || a < 24 && n(i.hours, Math.round(a)) || a < 42 && n(i.day, 1) || r < 30 && n(i.days, Math.round(r)) || r < 45 && n(i.month, 1) || r < 365 && n(i.months, Math.round(r / 30)) || c < 1.5 && n(i.year, 1) || n(i.years, Math.round(c)),
                l = i.wordSeparator || '';
            if (i.wordSeparator === undefined) {
                l = ' '
            };
            return e.trim([u, d, h].join(l))
        },
        parse: function(t) {
            var i = e.trim(t);
            i = i.replace(/\.\d+/, '');
            i = i.replace(/-/, '/').replace(/-/, '/');
            i = i.replace(/T/, ' ').replace(/Z/, ' UTC');
            i = i.replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2');
            i = i.replace(/([\+\-]\d\d)$/, ' $100');
            return new Date(i)
        },
        datetime: function(i) {
            var n = t.isTime(i) ? e(i).attr('datetime') : (e(i).data('date') || e(i).attr('title'));
            return t.parse(n)
        },
        isTime: function(t) {
            return e(t).get(0).tagName.toLowerCase() === 'time'
        }
    });
    var s = {
        init: function() {
            var s = e.proxy(n, this);
            s();
            var i = t.settings;
            if (i.refreshMillis > 0) {
                this._timeagoInterval = setInterval(s, i.refreshMillis)
            }
        },
        update: function(i) {
            var s = (i instanceof Date) ? i : t.parse(i);
            e(this).data('timeago', {
                datetime: s
            });
            if (t.settings.localeTitle) e(this).attr('title', s.toLocaleString());
            n.apply(this)
        },
        updateFromDOM: function() {
            e(this).data('timeago', {
                datetime: t.parse(t.isTime(this) ? e(this).attr('datetime') : (e(this).data('datetime') || e(this).attr('title')))
            });
            n.apply(this)
        },
        dispose: function() {
            if (this._timeagoInterval) {
                window.clearInterval(this._timeagoInterval);
                this._timeagoInterval = null
            }
        }
    };
    e.fn.timeago = function(e, t) {
        var i = e ? s[e] : s.init;
        if (!i) {
            throw new Error('Unknown function name \'' + e + '\' for timeago')
        };
        this.each(function() {
            i.call(this, t)
        });
        return this
    };

    function n() {
        var s = t.settings;
        if (s.autoDispose && !e.contains(document.documentElement, this)) {
            e(this).timeago('dispose');
            return this
        };
        var n = o(this);
        if (!isNaN(n.datetime)) {
            if (s.cutoff == 0 || Math.abs(r(n.datetime)) < s.cutoff) {
                e(this).html(i(n.datetime))
            }
        };
        return this
    };

    function o(i) {
        i = e(i);
        t.settings.addAgo = !i.data('age');
        if (!i.data('timeago')) {
            i.data('timeago', {
                datetime: t.datetime(i)
            });
            var n = e.trim(i.text());
            if (t.settings.localeTitle) {
                i.attr('title', i.data('timeago').datetime.toLocaleString())
            } else if (n.length > 0 && !(t.isTime(i) && i.attr('title'))) {
                i.attr('title', n)
            }
        };
        return i.data('timeago')
    };

    function i(e) {
        return t.inWords(r(e))
    };

    function r(e) {
        return (new Date().getTime() - e.getTime())
    };
    document.createElement('abbr');
    document.createElement('time')
}));
(function(e, t) {
    'use strict';
    t.State = {
        COOKIE_NAME: 'state',
        last: 0,
        get: function() {
            return e.cookie(this.COOKIE_NAME)
        },
        set: function(t) {
            e.cookie(this.COOKIE_NAME, t, {
                path: '/'
            })
        },
        update: function() {
            this.last = new Date().getTime();
            this.set(this.last)
        },
        init: function() {
            var i = this;
            if (!this.get()) {
                this.update()
            };
            e(t).focus(function() {
                i.update()
            })
        },
        isCurrent: function() {
            return (this.last == this.get())
        },
        run: function(e) {
            if (this.isCurrent()) {
                e()
            }
        }
    };
    State.init()
})(jQuery, window);
(function(e, t, i, n) {
    var s = e(t);
    e.fn.lazyload = function(r) {
        var a = this,
            c, o = {
                threshold: 0,
                failure_limit: 0,
                event: 'scroll',
                effect: 'show',
                container: t,
                data_attribute: 'original',
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
            };

        function l() {
            var t = 0;
            a.each(function() {
                var i = e(this);
                if (o.skip_invisible && !i.is(':visible')) {
                    return
                };
                if (e.abovethetop(this, o) || e.leftofbegin(this, o)) {} else if (!e.belowthefold(this, o) && !e.rightoffold(this, o)) {
                    i.trigger('appear');
                    t = 0
                } else {
                    if (++t > o.failure_limit) {
                        return !1
                    }
                }
            })
        };
        if (r) {
            if (n !== r.failurelimit) {
                r.failure_limit = r.failurelimit;
                delete r.failurelimit
            };
            if (n !== r.effectspeed) {
                r.effect_speed = r.effectspeed;
                delete r.effectspeed
            };
            e.extend(o, r)
        };
        c = (o.container === n || o.container === t) ? s : e(o.container);
        if (0 === o.event.indexOf('scroll')) {
            c.on(o.event, function() {
                return l()
            })
        };
        this.each(function() {
            var i = this,
                t = e(i);
            i.loaded = !1;
            if (t.attr('src') === n || t.attr('src') === !1) {
                if (t.is('img')) {
                    t.attr('src', o.placeholder)
                }
            };
            t.one('appear', function() {
                if (!this.loaded) {
                    if (o.appear) {
                        var n = a.length;
                        o.appear.call(i, n, o)
                    };
                    e('<img />').one('load', function() {
                        var n = t.attr('data-' + o.data_attribute);
                        t.hide();
                        if (t.is('img')) {
                            t.attr('src', n)
                        } else {
                            t.css('background-image', 'url(\'' + n + '\')')
                        };
                        t[o.effect](o.effect_speed);
                        i.loaded = !0;
                        var r = e.grep(a, function(e) {
                            return !e.loaded
                        });
                        a = e(r);
                        if (o.load) {
                            var s = a.length;
                            o.load.call(i, s, o)
                        }
                    }).attr('src', t.attr('data-' + o.data_attribute))
                }
            });
            if (0 !== o.event.indexOf('scroll')) {
                t.on(o.event, function() {
                    if (!i.loaded) {
                        t.trigger('appear')
                    }
                })
            }
        });
        s.on('resize', function() {
            l()
        });
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            s.on('pageshow', function(t) {
                if (t.originalEvent && t.originalEvent.persisted) {
                    a.each(function() {
                        e(this).trigger('appear')
                    })
                }
            })
        };
        e(i).ready(function() {
            l()
        });
        return this
    };
    e.belowthefold = function(i, r) {
        var o;
        if (r.container === n || r.container === t) {
            o = (t.innerHeight ? t.innerHeight : s.height()) + s.scrollTop()
        } else {
            o = e(r.container).offset().top + e(r.container).height()
        };
        return o <= e(i).offset().top - r.threshold
    };
    e.rightoffold = function(i, r) {
        var o;
        if (r.container === n || r.container === t) {
            o = s.width() + s.scrollLeft()
        } else {
            o = e(r.container).offset().left + e(r.container).width()
        };
        return o <= e(i).offset().left - r.threshold
    };
    e.abovethetop = function(i, r) {
        var o;
        if (r.container === n || r.container === t) {
            o = s.scrollTop()
        } else {
            o = e(r.container).offset().top
        };
        return o >= e(i).offset().top + r.threshold + e(i).height()
    };
    e.leftofbegin = function(i, r) {
        var o;
        if (r.container === n || r.container === t) {
            o = s.scrollLeft()
        } else {
            o = e(r.container).offset().left
        };
        return o >= e(i).offset().left + r.threshold + e(i).width()
    };
    e.inviewport = function(t, i) {
        return !e.rightoffold(t, i) && !e.leftofbegin(t, i) && !e.belowthefold(t, i) && !e.abovethetop(t, i)
    };
    e.extend(e.expr[':'], {
        'below-the-fold': function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        'above-the-top': function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        'right-of-screen': function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        'left-of-screen': function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        'in-viewport': function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        'above-the-fold': function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        'right-of-fold': function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        'left-of-fold': function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
})(jQuery, window, document);
(function(e, t) {
    'use strict';
    var i = function(t) {
        this.options = e.extend({
            iconUrl: '',
            acl: 0,
            title: '',
            text: '',
            timeout: 0,
            zIndex: 1100
        }, t);
        this.div = e('<div class="ajaxAlert" style="left: 10px; bottom: 10px; display: none; z-index: ' + this.options.zIndex + ';"><div class="ajaxAlertBody"><div class="commentbody"><div class="userPic"><div class="height50px userPicHeight relative"><img src="' + this.options.iconUrl + '" style="display: inline;"></div></div><div class="commentcontent"><div class="commentownerLeft"><span class="badgeInline"><span class="plain bold aclColor_' + this.options.acl + '">' + this.options.title + '</span></span></div><p class="commentText botmarg5px"></p></div></div></div></div>')
    };
    i.prototype = {
        open: function() {
            e('body').append(this.div);
            e('.commentText', this.div).html(this.options.text);
            i.add(this);
            if (this.options.timeout) {
                var t = this;
                setTimeout(function() {
                    t.close()
                }, this.options.timeout)
            };
            return this
        },
        on: function(e, t) {
            var i = this;
            this.div.on(e, function(e) {
                t.call(i, e)
            });
            return this
        },
        close: function() {
            var e = this;
            this.div.fadeOut('slow', function() {
                e.div.remove();
                i.remove(e);
                e = null
            });
            return this
        },
        move: function(i) {
            if (i == 0) this.div.fadeIn();
            var c = this.div.outerWidth(),
                s = this.div.outerHeight(),
                n = 10,
                r = 10,
                o = Math.floor(e(t).height() / (s + n)),
                a = Math.ceil((i + 1) / o) - 1,
                l = i % o,
                u = a * n + n + a * c,
                h = l * r + r + l * s;
            this.div.animate({
                bottom: h,
                left: u,
                opacity: i == 0 ? 1 : 0.5
            });
            return this
        }
    };
    i._stack = [];
    i.add = function(e) {
        i._stack.push(e);
        i.reorder()
    };
    i.remove = function(t) {
        var n = e.inArray(t, i._stack);
        if (n != -1) {
            i._stack.splice(n, 1);
            i.reorder()
        }
    };
    i.reorder = function() {
        for (var e = i._stack.length - 1, t = 0; e >= 0; e--, t++) {
            i._stack[e].move(t)
        }
    };
    t.AlertWindow = i
})(jQuery, window);
(function(e, t) {
    function i(i) {
        this.state = null;
        this.xhr = null;
        this.options = e.extend({
            element: null,
            multiple: !0,
            maxFiles: 10,
            albumId: 0,
            dragAndDrop: !1,
            select: null,
            dragEnter: null,
            dragLeave: null
        }, i);
        if (this.options.element) {
            var s = this,
                n = e(this.options.element);
            n.click(function() {
                s.open();
                return !1
            });
            if (this.options.dragAndDrop) {
                var r = !1,
                    o = !1;
                if (typeof this.options.dragEnter == 'function' || typeof this.options.dragLeave == 'function') {
                    e(t).bind('dragover', function() {
                        r = !0
                    });
                    e(t).bind('dragleave', function() {
                        r = !1
                    });
                    var a = setInterval(function() {
                        if (!o) {
                            if (r) {
                                if (typeof s.options.dragEnter == 'function') {
                                    s.options.dragEnter.call(s.options.element)
                                }
                            } else {
                                if (typeof s.options.dragLeave == 'function') {
                                    s.options.dragLeave.call(s.options.element)
                                }
                            }
                        }
                    }, 250)
                };
                n.addClass('ui-uploadee');
                n.bind('dragenter dragover', function() {
                    r = !0;
                    return !1
                });
                n.bind('dragleave', function() {
                    r = !1;
                    return !1
                });
                n.bind('drop', function(t) {
                    r = !1;
                    try {
                        var l = [];
                        e.each(t.originalEvent.dataTransfer.files, function() {
                            if (this.type.match(/image\/.+/)) {
                                l.push(this)
                            }
                        });
                        if (l.length) {
                            var a = new FormData();
                            a.append('ajax', 1);
                            e.each(l, function() {
                                a.append('files[]', this)
                            });
                            e.ajax({
                                url: '/image/upload/',
                                type: 'POST',
                                data: a,
                                dataType: 'json',
                                cache: !1,
                                processData: !1,
                                contentType: !1,
                                beforeSend: function() {
                                    o = !0;
                                    n.next('.alertfield').remove();
                                    n.removeClass('ui-uploaded').addClass('ui-uploading')
                                },
                                complete: function() {
                                    o = !1;
                                    n.removeClass('ui-uploading').addClass('ui-uploaded')
                                },
                                success: function(t) {
                                    if (t.method == 'error') {
                                        n.after(e('<div/>').addClass('alertfield').append(t.html))
                                    } else {
                                        s.parseResponse(t.html)
                                    }
                                },
                                error: function(t) {
                                    n.after(e('<div/>').addClass('alertfield').append(t.responseText))
                                }
                            })
                        }
                    } catch (i) {};
                    return !1
                })
            }
        }
    };
    i.prototype.open = function() {
        this.load('/image/select/' + (this.options.albumId ? 'album/' + this.options.albumId : 'recent') + '/')
    };
    i.prototype.load = function(t, i) {
        var n = this;
        e.fancybox.showActivity();
        e.get(t, function(t) {
            e.fancybox.hideActivity();
            if (e.fancybox.isActive() && !i) {
                n.state = e.fancybox.saveState()
            };
            e.fancybox(t.html, {
                onCleanup: function() {
                    return n.abort()
                },
                onComplete: function() {
                    var t = e('#fancybox-content'),
                        i = e('.imageUploadError', t),
                        o = e('.imageUploadFile', t),
                        s = e('.imageUploadUrl', t),
                        r = e('.indicator', t);

                    function a(t) {
                        var i = [];
                        e(t).each(function() {
                            var t = e(this);
                            i.push({
                                id: t.data('imageId'),
                                name: t.data('imageName'),
                                link: t.attr('href'),
                                thumb_link: t.find('img').attr('src')
                            })
                        });
                        n.onSelect(i)
                    };
                    if (n.state) {
                        e('.fancyCustomTop', t).attr('title', 'Back to "' + n.state.title + '"').show().click(function() {
                            e.fancybox.restoreState(n.state);
                            return !1
                        })
                    };
                    e('.pages a', t).click(function() {
                        if (n.abort()) {
                            n.load(e(this).attr('href'), !0)
                        };
                        return !1
                    });
                    e('.imageClose', t).click(function() {
                        n.close()
                    });
                    if (n.options.multiple) {
                        e('.imageSelector', t).selectable({
                            filter: '.galleryThumbSizerStills',
                            stop: function() {
                                var t = e(this),
                                    i = t.find('.ui-selected a'),
                                    s = i.size();
                                t.next('button').remove();
                                if (s == 1) {
                                    a(i)
                                } else if (s < n.options.maxFiles) {
                                    t.after(e('<button type="submit" class="siteButton bigButton"><span>Select ' + s + ' image(s)</span></button>').click(function() {
                                        a(i)
                                    }))
                                }
                            }
                        })
                    } else {
                        e('.imageSelector a', t).click(function() {
                            a(this);
                            return !1
                        })
                    };
                    e('.imageUpload', t).ajaxForm({
                        dataType: 'json',
                        beforeSubmit: function() {
                            try {
                                if (o.is(':visible')) {
                                    var r = e('input[type=file]', o).get(0);
                                    if (!r.files.length && !s.val()) {
                                        throw 'No file(s) selected'
                                    } else if (r.files.length > n.options.maxFiles) {
                                        throw 'Too many files selected'
                                    }
                                } else if (s.is(':visible')) {
                                    var r = e('input[type=text]', s);
                                    if (!r.val()) {
                                        throw 'Please enter URL'
                                    }
                                }
                            } catch (t) {
                                i.html(t).fadeIn('slow');
                                return !1
                            }
                        },
                        beforeSend: function() {
                            i.hide();
                            e.fancybox.showActivity();
                            e('button', t).prop('disabled', !0)
                        },
                        complete: function() {
                            e.fancybox.hideActivity();
                            e('button', t).prop('disabled', !1)
                        },
                        success: function(e) {
                            if (e.method == 'error') {
                                i.html(e.html).fadeIn('slow');
                                r.hide()
                            } else {
                                n.parseResponse(e.html)
                            }
                        },
                        error: function(e) {
                            r.hide();
                            if (!e.aborted) {
                                i.html(e.responseText);
                                i.fadeIn('slow')
                            }
                        },
                        xhr: function() {
                            var t = e.ajaxSettings.xhr();
                            t.upload.addEventListener('progress', function(e) {
                                if (e.lengthComputable) {
                                    var t = (e.loaded / e.total * 100).toFixed(0) + '%';
                                    r.show();
                                    r.find('div').width(t);
                                    r.find('span').html(t)
                                }
                            }, !1);
                            return t
                        }
                    });
                    e('.switcherBox a', t).click(function() {
                        var t = e(this);
                        t.parent().find('a').removeClass('active');
                        t.addClass('active');
                        if (t.hasClass('switchRight')) {
                            s.show();
                            o.hide()
                        };
                        if (t.hasClass('switchLeft')) {
                            s.hide();
                            o.show()
                        }
                    });
                    e('.imageUploadInput input[type=file]', t).attr('multiple', n.options.multiple).customFileInput()
                }
            })
        }, 'json')
    };
    i.prototype.abort = function() {
        if (this.xhr && !this.xhr.aborted) {
            if (confirm('Abort uploading?')) {
                try {
                    this.xhr.abort();
                    return !0
                } catch (e) {}
            } else {
                return !1
            }
        };
        return !0
    };
    i.prototype.close = function() {
        this.state = null;
        e.fancybox.close()
    };
    i.prototype.parseResponse = function(t) {
        var i = [],
            n = e.parseJSON(t);
        e.each(n, function() {
            i.push({
                id: this.id,
                name: this.name,
                link: this.link,
                thumb_link: this.thumb_link
            })
        });
        this.onSelect(i)
    };
    i.prototype.onSelect = function(t) {
        if (this.state) {
            e.fancybox.restoreState(this.state)
        } else {
            this.close()
        };
        if (t.length && typeof this.options.select == 'function') {
            this.options.select.call(this.options.element, t, this)
        }
    };
    t.ImageSelector = i;
    e.fn.imageSelector = function(t) {
        if (this.length) {
            e.each(this, function() {
                t = e.extend({}, t, {
                    element: this
                });
                new i(t)
            })
        };
        return this
    }
})(jQuery, window);
(function(e, t) {
    'use strict';
    var i = {
        playing: !1,
        timeout: 500,
        play: function(e) {
            if (i.playing) return !1;
            i.playing = !0;
            setTimeout(function() {
                i.playing = !1
            }, this.timeout);
            var n = t.createElement('audio');
            if (n && typeof n.canPlayType == 'function') {
                if (n.canPlayType('audio/ogg') != '') {
                    n.src = e + '.ogg';
                    n.play();
                    return !0
                } else if (n.canPlayType('audio/mpeg') != '') {
                    n.src = e + '.mp3';
                    n.play();
                    return !0
                }
            } else {
                var s = t.createElement('embed');
                s.setAttribute('autostart', 'true');
                s.setAttribute('hidden', 'true');
                s.setAttribute('loop', 'false');
                s.setAttribute('src', e + '.mp3');
                t.body.appendChild(s);
                return !0
            };
            return !1
        }
    };
    e.Sound = i
})(window, document);

(function(e, t, i) {
    'use strict';
    e.fn.tabs = function(n) {
        var s = null;
        n = e.extend({
            useHash: !0,
            default: null,
            tabSelector: '> div',
            linkSelector: '.tabNavigation:first a',
            selectedTabClass: 'selectedTab',
            onShow: function() {}
        }, n);

        function r() {
            var e = t.hash.substring(1);
            e = e.replace(/_\d+$/, '');
            e = e.replace(/_.+$/, '');
            return e
        };
        e(this).each(function() {
            var l = e(n.tabSelector, this),
                a = e(n.linkSelector, this);
            l.hide();

            function u(e, r) {
                if (!e) return;
                a.removeClass(n.selectedTabClass);
                l.hide();
                l.filter('#' + e).show();
                l.filter('#tab-' + e).show();
                a.filter('[rel=' + e + ']').addClass(n.selectedTabClass);
                if (n.useHash && r) {
                    if (i.replaceState) {
                        i.replaceState({}, '', '#' + e)
                    } else {
                        t.hash = e
                    }
                };
                s = e
            };
            var o = e(),
                c = r();
            if (n.useHash && c) {
                o = a.filter('[rel=' + c + ']')
            };
            if (!o.length && n.default) {
                o = a.filter('[rel=' + n.default+']')
            };
            if (!o.length) {
                o = a.filter('.' + n.selectedTabClass)
            };
            if (!o.length) {
                o = a.filter(':first')
            };
            u(o.prop('rel'));
            a.click(function() {
                n.onShow(s, e(this));
                u(e(this).prop('rel'), !0);
                return !1
            })
        });
        return this
    };
    e(function() {
        e('.tabSwitcher').tabs()
    })
})(jQuery, document.location, history);

function width(e, t) {
    w = document.documentElement.clientWidth;
    return (w <= e) ? e + 'px' : ((w >= t) ? t + 'px' : 'auto')
};

function Toggle(e, t) {
    var i = $(t);
    $('#' + e).toggle();
    if ($(t).parent().hasClass('folder')) {
        $(t).parent().addClass('folderopen');
        $(t).parent().removeClass('folder')
    } else {
        $(t).parent().addClass('folder');
        $(t).parent().removeClass('folderopen')
    }
};
$(document).on('click', '#openAllFolders', function() {
    var e = $('#torrent_files table'),
        t = $('#closeAllFolders');
    if (e.has(e.css('display', 'none'))) {
        e.css('display', 'table');
        $(this).toggle();
        $(t).toggle()
    };
    $('span').parent().removeClass('folder');
    $('span').parent().addClass('folderopen');
    if ($('td').is('.torTree', '.torFileIcon', '.torFileName', '.torFileSize')) {
        $('td').removeClass('folderopen')
    }
});
$(document).on('click', '#closeAllFolders', function() {
    var e = $('#torrent_files table'),
        t = $('#openAllFolders');
    if (e.has(e.css('display', 'table'))) {
        e.css('display', 'none');
        $(this).toggle();
        $(t).toggle()
    };
    $('span').parent().removeClass('folderopen');
    $('span').parent().addClass('folder');
    if ($('td').hasClass('novertpad')) {
        $('td').removeClass('folder')
    }
});

function Show(e) {
    $('#' + e).show()
};

function Hide(e) {
    $('#' + e).hide()
}(function(e) {
    e.Tache = {
        Data: [],
        Delete: function(e) {
            i(e)
        },
        DeleteAll: function() {
            n()
        },
        Get: function(e) {
            s(e)
        },
        SetTimeout: function(e) {
            r(e)
        },
        Timeout: 600
    };

    function t(e) {
        var t = e.url;
        t += e.data.torrentId;
        t += ((typeof e.dataType == 'string') ? e.dataType : '');
        t += ((typeof e.type == 'string') ? e.type : '');
        return t
    };

    function i(i) {
        if (typeof i.url != 'string') {
            alert('No AJAX URL passed');
            return
        };
        var s = t(i),
            r = new Date();
        for (var n = e.Tache.Data.length; n > 0; n--) {
            if ((((r.valueOf() - e.Tache.Data[n - 1].dtAge.valueOf()) / 1000) > e.Tache.Timeout) || (e.Tache.Data[n - 1].sIdentifier == s)) {
                e.Tache.Data.splice(n - 1, 1)
            }
        }
    };

    function n() {
        e.Tache.Data = []
    };

    function s(i) {
        if (typeof i.url != 'string') {
            alert('No AJAX URL passed');
            return
        };
        var s = t(i),
            o = new Date();
        for (var n = e.Tache.Data.length; n > 0; n--) {
            if (((o.valueOf() - e.Tache.Data[n - 1].dtAge.valueOf()) / 1000) > e.Tache.Timeout) {
                e.Tache.Data.splice(n - 1, 1)
            } else if (e.Tache.Data[n - 1].sIdentifier == s) {
                i.success(e.Tache.Data[n - 1].oData);
                return
            }
        };
        var r = i.success;
        i.success = function(t) {
            e.Tache.Data.push({
                sIdentifier: s,
                oData: t,
                dtAge: new Date()
            });
            r(t)
        };
        e.ajax(i)
    };

    function r(t) {
        e.Tache.Timeout = t
    }
})(jQuery);
$(function() {
    var i = 1000,
        n, e = !0,
        t = $('<div id="previewPopupContainer">   <div class="tail"></div>   <div class="prevAV topOriented darkivorybg" id="prevAV">Loading...</div>   <div id="previewPopupContent"><img style="display:block;" src="/assets/images/indicator.gif"></div></div>');
    $('body').append(t);
    $('.icommentjs').on('mouseover', function(i) {
        var a = $(this).attr('rel').split(','),
            r = a[0];
        currentID = a[1];
        if (r == '') return;
        if (e) clearTimeout(e);
        var n = $(this).offset(),
            l = $(this).width(),
            s = n.left - 340;
        if (s > 0) {
            var o = 'leftPlacing previewPopupContainer'
        } else {
            var o = 'rightPlacing previewPopupContainer';
            s = (n.left + 5 + l)
        };
        $('#previewPopupContainer').attr('class', o);
        t.css({
            left: s + 'px',
            top: n.top - 5 + 'px'
        });
        $('#previewPopupContent').html('&nbsp;');
        $('#prevAV').html('Loading...');
        $.Tache.Get({
            type: 'GET',
            url: '/get_comments.php',
            cache: !0,
            data: {
                ajax: '1',
                torrentId: r
            },
            beforeSend: function() {
                $('#previewPopupContent').html('<center style="margin:auto 0;width:340px;"><img style="display:block !important;" src="/assets/images/indicator.gif"></center>')
            },
            success: function(e) {
                if (e.indexOf(r) > 0) {
                    $('#previewPopupContent').html(e);
                    var t = $('#previewPopupContent').find('.ratestring').remove();
                    $('#prevAV').html(t);
                    t.show()
                } else {
                    $('#previewPopupContent').html('');
                    $('#prevAV').html('No comments')
                }
            }
        });
        t.fadeIn(500)
    });
    $('.icommentjs').on('mouseout', function() {
        if (e) clearTimeout(e);
        e = setTimeout(function() {
            t.css('display', 'none')
        }, i)
    })
});

function doFade(e) {
    for (var t = 0; t < 3; t++) {
        doFadeOnce(e)
    }
};

function doFadeOnce(e) {
    $(e).css('opacity', 1).animate({
        opacity: 0.0
    }, 500).animate({
        opacity: 1.0
    }, 500)
};

function deleteLocation(e) {
    $.ajax({
        type: 'POST',
        url: '/moderator/torrent/deletelocation/',
        data: {
            ajax: 1,
            location: e
        },
        dataType: 'json',
        success: function(t) {
            $('#tl_' + e).fadeOut(500, function() {
                $('#tl_' + e).remove()
            })
        }
    })
};

function undeleteLocation(e) {
    $.ajax({
        type: 'POST',
        url: '/moderator/torrent/undeletelocation/',
        data: {
            ajax: 1,
            location: e
        },
        dataType: 'json',
        success: function(t) {
            $('#tlc_' + e).fadeOut(500)
        }
    })
};

function setDeleted(e, t, i, n, s) {
    var r = s ? 1 : 0,
        o = $('#del_' + e).html();
    $.ajax({
        type: 'POST',
        url: '/moderator/torrent/' + (n ? '' : 'un') + 'deletetorrent/' + t + '/',
        data: {
            ajax: 1,
            copyright: r
        },
        dataType: 'json',
        beforeSend: function() {
            $('#del_' + e).html('<img src="/assets/images/indicator.gif">')
        },
        success: function(s) {
            if (s.method == 'error') {
                alert(s.html);
                $('#del_' + e).html(o);
                return !1
            };
            if (i) {
                $('#del_' + e).html('<a href="javascript: ' + (n ? 'un' : '') + 'deleteTorrent(\'' + e + '\', \'' + t + '\', true);"><i class="ka ka16 ka-delete ka-' + (n ? 'green' : 'red') + '"></i></a>')
            } else {
                $('#del_' + e).html('<a href="javascript: ' + (n ? 'un' : '') + 'deleteTorrent(\'' + e + '\', \'' + t + '\');"><i class="ka ka16 ka-delete ka-' + (n ? 'green' : 'red') + '"></i> ' + (n ? 'un' : '') + 'delete torrent</a>')
            }
        }
    })
};

function deleteTorrent(e, t, i, n) {
    setDeleted(e, t, i, 1, n)
};

function undeleteTorrent(e, t, i) {
    setDeleted(e, t, i, 0)
};

function setVerification(e, t, i) {
    $.ajax({
        type: 'POST',
        url: '/moderator/torrent/' + (i ? '' : 'un') + 'verify/' + t + '/',
        data: {
            ajax: 1,
            hash: t
        },
        dataType: 'json',
        beforeSend: function() {
            $('#ver_' + e).html('<img src="/assets/images/indicator.gif">')
        },
        success: function(n) {
            $('#ver_' + e).html('<a href="javascript: ' + (i ? 'un' : '') + 'verifyTorrent(\'' + e + '\', \'' + t + '\');"> <i class="ka ka16 ' + (i ? 'ka-unverify ka-red' : 'ka-verify ka-green') + '"></i></a>')
        }
    })
};

function verifyTorrent(e, t) {
    setVerification(e, t, 1)
};

function unverifyTorrent(e, t) {
    setVerification(e, t, 0)
};

function rateTopComment(e, t) {
    $.ajax({
        type: 'POST',
        url: '/comments/rate/' + (t ? 'like' : 'dislike') + '/' + e + '/',
        dataType: 'json',
        beforeSend: function() {
            $('#topcommrate_' + e).html('<img src="/assets/images/indicator.gif">')
        },
        success: function(t) {
            if (t.method == 'show') {
                $('#topratediv_' + e).html(t.html);
                $('a.ajaxLink').fancybox()
            } else {
                $('#topcommrate_' + e).html('error');
                $('#topratediv_' + e).html($('#commrate_' + e))
            }
        },
        error: function(t) {
            $('#topcommrate_' + e).html('error')
        }
    })
};

function rateTopMinus(e) {
    rateTopComment(e, 0)
};

function rateTopPlus(e) {
    rateTopComment(e, 1)
};

function rateComment(e, t) {
    $.ajax({
        type: 'POST',
        url: '/comments/rate/' + (t ? 'like' : 'dislike') + '/' + e + '/',
        dataType: 'json',
        beforeSend: function() {
            $('#commrate_' + e).html('<img src="/assets/images/indicator.gif">')
        },
        success: function(i) {
            if (i.method == 'show') {
                if (!t) {
                    if (!$('#cshow_' + e).length) {
                        $('#comment_' + e).find('div.commentownerLeft').append('<a class="siteButton smallButton reject showComment" id="cshow_' + e + '" href="javascript:showComment(' + e + ')"><span>Show comment</span></a>')
                    } else {
                        $('#cshow_' + e).href = 'javascript:showComment(\'+id+\')';
                        $('#cshow_' + e).html('<span>Show comment</span>')
                    };
                    if ($('#comment_' + e).parent().hasClass('reply')) {
                        $('#comment_' + e).parent().parent().addClass('hiddenComment')
                    } else {
                        $('#comment_' + e).parent().addClass('hiddenComment')
                    };
                    $('#cpic_' + e).hide();
                    $('#cdate_' + e).hide();
                    $('#ctext_' + e).hide();
                    $('#rep_link' + e).hide()
                };
                $('#ratediv_' + e).html(i.html);
                $('a.ajaxLink').fancybox()
            } else if (i.method == 'error') {
                alert(i.html);
                $('#commrate_' + e).html('error');
                $('#ratediv_' + e).html($('#commrate_' + e))
            } else {
                $('#commrate_' + e).html('error');
                $('#ratediv_' + e).html($('#commrate_' + e))
            }
        }
    })
};

function rateMinus(e) {
    rateComment(e, 0)
};

function ratePlus(e) {
    rateComment(e, 1)
};

function showComment(e) {
    $('#cpic_' + e).toggle();
    $('#cdate_' + e).css('display', 'inline');
    $('#ctext_' + e).toggle();
    $('#rep_link' + e).toggle();
    if ($('#ctext_' + e + ':visible').length) {
        $('#cshow_' + e).html('<span>Hide</span>')
    } else {
        $('#cshow_' + e).html('<span>Show</span>')
    }
};

function getFiles(e, t, i) {
    $.ajax({
        type: 'POST',
        url: '/torrents/getfiles/' + e + '/',
        data: {
            ajax: 1,
            all: t,
            dir: i
        },
        dataType: 'json',
        beforeSend: function() {
            $('#torrent_files').html('<center style="margin:auto 0;width:100%;"><img src="/assets/images/indicator.gif"></center>')
        },
        success: function(e) {
            $('#torrent_files').html(e.html)
        }
    })
};

function updateFeedback(e) {
    e = e || 1;
    var t = $('#menu_feedback .menuValue'),
        n = parseInt(t.text()) || 0,
        i = n + e;
    if (i > 0) {
        t.text(i).show();
        doFade(t.parent())
    } else {
        t.hide()
    }
};

function trim(e, t) {
    return ltrim(rtrim(e, t), t)
};

function ltrim(e, t) {
    t = t || '\\s';
    return e.replace(new RegExp('^[' + t + ']+', 'g'), '')
};

function rtrim(e, t) {
    t = t || '\\s';
    return e.replace(new RegExp('[' + t + ']+$', 'g'), '')
};
String.prototype.ReplaceAll = function(e, t) {
    var i = this;
    if (typeof(e) == String) {
        var n = i.indexOf(e)
    } else {
        var n = i.match(e)
    }
    while (n != -1) {
        i = i.replace(e, t);
        n = i.indexOf(e)
    };
    return i
};
String.prototype.HighlightSpecial = function() {
    var e = this;
    e = e.replace(/(&lt;.+?&gt;)/g, '<span class="highlightTag">$1</span>');
    e = e.replace(/(&lt;\/+?&gt;)/gi, '<span class="highlightTag">$1</span>');
    e = e.replace(/(&amp;.+?;)/gi, '<span class="highlightEntity">$1</span>');
    e = e.replace(/(%\d+)/gi, '<span class="highlightParam">$1</span>');
    return e
};

function doSearch(e) {
    text = e;
    text = text.ReplaceAll(new RegExp(/\s\s+/gi), ' ');
    text = jQuery.trim(text);
    e = encodeURIComponent(text).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
    if (!e) {
        window.location = '/new/';
        return !1
    };
    window.location = '/usearch/' + e + '/';
    return !1
};

function proof(e) {
    $(e).append('<input type="hidden" name="turing" value="iamhuman">')
};

function reportComment(e) {
    $.ajax({
        type: 'POST',
        url: '/comments/report/' + e + '/',
        data: {
            ajax: '1'
        },
        dataType: 'json',
        beforeSend: function() {
            $('#report_comment_' + e).html('<img src="/assets/images/indicator.gif">')
        },
        success: function(t) {
            if (t.method == 'error') {
                alert(t.html)
            } else $('#report_comment_' + e).replaceWith('<a class="siteButton smallButton disabledButton"><span>reported</span></a>')
        },
        error: function(t) {
            $('#report_comment_' + e).html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>')
        }
    });
    return !1
};

function reportPost(e) {
    $.ajax({
        type: 'POST',
        url: '/community/report/post/' + e + '/',
        dataType: 'json',
        beforeSend: function() {
            $('#report_post_' + e).removeClass('ka-red ka-report').html('<img src="/assets/images/indicator.gif">')
        },
        success: function(t) {
            if (t.method == 'error') {
                $('#report_post_' + e).remove();
                alert(t.html)
            } else {
                $('#report_post_' + e).replaceWith('<span class="kaButton smallButton normalText disabledButton"><i class="ka ka-report"></i>reported</span>')
            }
        },
        error: function(t) {
            $('#report_post_' + e).html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>')
        }
    });
    return !1
};

function reportThread(e, t) {
    if (!e.reason.value) {
        alert('Please fill out the reason field.');
        return !1
    };
    $.fancybox.showActivity();
    var i = $(e).find('button[type=submit]').prop('disabled', !0);
    i.addClass('disabledButton');
    $.ajax({
        type: 'POST',
        url: '/community/report/thread/' + t + '/',
        data: {
            reason: e.reason.value
        },
        dataType: 'json',
        beforeSend: function() {
            $('#report_thread_' + t).html('<img src="/assets/images/indicator.gif">')
        },
        success: function(e) {
            if (e.method == 'error') {
                alert(e.html);
                $.fancybox.hideActivity();
                i.removeClass('disabledButton').prop('disabled', !1)
            } else {
                $('#report_thread_' + t).replaceWith('<a class="kaButton smallButton normalText disabledButton"><i class="ka ka-report"></i> reported</a>');
                $.fancybox.close()
            }
        },
        error: function(e) {
            $('#report_thread_' + t).html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>');
            $.fancybox.close()
        }
    });
    return !1
};
last = 0;

function comment(e) {
    if (last) {
        $('cf_' + last).setStyle('display', 'none')
    };
    if (last != e) {
        $('cf_' + e).setStyle('display', 'block');
        $('cf_edit_' + e).focus();
        last = e
    } else {
        last = 0
    }
};

function getPage(e, t, i) {
    var n = '#morecomments_' + e,
        s = $('#tab-comment_comments').length ? '#tab-comment_comments' : '#comments';
    if ($(s).html() == '') {
        n = s
    };
    $.ajax({
        type: 'POST',
        url: '/comments/index/' + i + '/' + t + '/',
        data: {
            ajax: '1',
            page: e
        },
        dataType: 'json',
        beforeSend: function() {
            $((n == s ? n : '#showmore_' + e)).html('<img src="/assets/images/indicator.gif">')
        },
        success: function(t) {
            container = $(n);
            container.html(t.html);
            var s = container.find('#comment_votes');
            if (s.length) {
                var r = container.find('#comment_comments');
                container.before($(r.html()));
                r.remove();
                if (s.children().size()) $('#tab-votes_button').show();
                $('#tab-comment_votes').append($(s.html()));
                s.remove()
            };
            $(n).fadeIn('fast');
            $('#showmore_' + e).hide();
            $('a.ajaxLink').fancybox();
            try {
                $('img.lazyjs').lazyload({
                    effect: 'fadeIn',
                    skip_invisible: !1
                })
            } catch (i) {}
        },
        error: function(t) {
            $(n).html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>');
            $(n).center();
            $('#showmore_' + e).hide()
        }
    })
};

function getAll(e, t, i) {
    var n = '#morecomments_' + e,
        s = $('#tab-comment_comments').length ? '#tab-comment_comments' : '#comments';
    if ($(s).html() == '') {
        n = s
    };
    $.ajax({
        type: 'POST',
        url: '/comments/index/' + i + '/' + t + '/',
        data: {
            ajax: '1',
            all: '1',
            page: e
        },
        dataType: 'json',
        beforeSend: function() {
            $((n == s ? n : '#showmore_' + e)).html('<img src="/assets/images/indicator.gif">')
        },
        success: function(t) {
            container = $(n);
            container.html(t.html);
            var s = container.find('#comment_votes');
            if (s.length) {
                var r = container.find('#comment_comments');
                container.before($(r.html()));
                r.remove();
                if (s.children().size()) $('#tab-votes_button').show();
                $('#tab-comment_votes').append($(s.html()));
                s.remove()
            };
            $(n).fadeIn('fast');
            $('#showmore_' + e).hide();
            $('a.ajaxLink').fancybox();
            try {
                $('img.lazyjs').lazyload({
                    effect: 'fadeIn',
                    skip_invisible: !1
                })
            } catch (i) {}
        },
        error: function(t) {
            $(n).html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>');
            $(n).center();
            $('#showmore_' + e).hide()
        }
    })
};

function loadTrailers(e) {
    $.ajax({
        type: 'POST',
        url: '/torrents/details/' + e + '/trailer/',
        dataType: 'json',
        beforeSend: function() {
            $('#tab-trailer').html('<img src="/assets/images/indicator.gif">')
        },
        success: function(e) {
            $('#tab-trailer').html(e.html).show();
            $('#trailer_link').unbind('click.my')
        },
        error: function(e) {
            $('#tab-trailer').html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>')
        }
    })
};

function validateComment(e) {
    if ((e.content.value == '')) {
        alert('Please fill the comment field');
        return !1
    };
    if ((e.content.value.length < 3)) {
        alert('Comment is too short');
        return !1
    };
    return !0
};

function disableSubmit(e) {
    $(e).find('button[type=submit]').prop('disabled', !0).addClass('disabledButton');
    return !0
};

function addComment(e, t) {
    e.turing.value = 'iamhuman';
    var n = $(e).serialize();
    n = n + '&ajax=1';
    var s = (typeof(e.pid) == 'undefined') ? 0 : e.pid.value;
    if (n.indexOf('audio_rate') == -1) {
        if (!validateComment(e)) return !1
    };
    var r = $(e).find('button[type=submit]');
    r.prop('disabled', !0).addClass('disabledButton');
    var i = $('#tab-comment_comments').length ? '#tab-comment_comments' : '#comments';
    $(i).show();
    $.ajax({
        type: 'POST',
        url: '/comments/create/' + t + '/',
        data: n,
        dataType: 'json',
        success: function(t) {
            if (t.method == 'error') {
                var n = $('<div class="alertfield">' + t.html + '</div>');
                n.prependTo(i);
                return !1
            };
            if (s) {
                var n = $('<div class="reply"><div class="commentThread">' + t.html + '</div></div>');
                n.appendTo($('#comment_' + s).parent());
                hideReply(s)
            } else {
                var n = $('<div class="commentThread">' + t.html + '</div>');
                n.prependTo(i)
            };
            n.hide();
            n.fadeIn('fast');
            n.find('.ajaxLink').fancybox();
            e.reset();
            $(e).find('.galleryThumbSizerStills').remove()
        },
        error: function(e) {
            $(i).html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>');
            $(i).center()
        },
        complete: function() {
            r.prop('disabled', !1).removeClass('disabledButton');
            $('.captcha', e).click()
        }
    });
    return !1
};

function hideReply(e) {
    $('#rep' + e).hide();
    $('#close_link' + e).hide();
    $('#rep_link' + e).show()
};

function showReply(e) {
    $('#rep' + e).show();
    $('#close_link' + e).show();
    $('#rep_link' + e).hide();
    var t = $('#comment_form').find('input[name=pid]').val();
    if (t && t != e) hideReply(t);
    $('#comment_form').appendTo('#rep' + e).show().find('input[name=pid]').val(e);
    $('#rep' + e).find('img.captcha').click()
};

function deleteWidget(e) {
    $.ajax({
        type: 'POST',
        url: '/account/settings/widgets/',
        data: {
            ajax: 1,
            remove: 1,
            id: e
        },
        dataType: 'json',
        success: function(t) {
            $('#order_' + e).fadeOut(250, function() {
                $('#order_' + e).remove()
            })
        }
    })
};

function deletePost(e) {
    $.ajax({
        type: 'POST',
        url: '/community/post/delete/' + e + '/',
        dataType: 'json',
        success: function(t) {
            if (t.method == 'error') {
                alert(t.html)
            } else {

                $('#post'+e).closest('.thread_post').addClass('deletedPost').find('.post_body').hide();
                $('#post'+e).closest('.thread_post').find('.undelete_button').show();
                $('#post'+e).closest('.thread_post').find('.delete_button').hide();
            }
        },
        error: function(e) {
            console.log(e)
        }
    })
};
function undeletePost(e) {
    $.ajax({
        type: 'POST',
        url: '/community/post/undelete/' + e + '/',
        dataType: 'json',
        success: function(t) {
            if (t.method == 'error') {
                alert(t.html)
            } else {
                $('#post'+e).closest('.thread_post').removeClass('deletedPost');
                $('#post'+e).closest('.thread_post').find('.undelete_button').hide();
                $('#post'+e).closest('.thread_post').find('.delete_button').show();
            }
        },
        error: function(e) {
            console.log(e)
        }
    })
};
function ratePost(id, like) {
    if ($('#rate_box_'+id).is('.disabled')) return false;
    $('#rate_box_'+id).addClass('disabled');
    $.ajax({
        type: 'POST',
        url: '/community/post/like/'+id+'/',
        dataType: 'json',
        beforeSend: function() {
            $('#rate_box_'+id).find('.ka.kasmall');
            $('#rate_box_'+id).prepend('<img src="/assets/images/indicator.gif">')
        }, success: function(t) {
            $('#rate_box_'+id).find('img').remove();
            $('#rate_box_'+id).removeClass('disabled');
            if (t.method == 'error') {
                alert(t.html)
            } else {
                adjustRating(id, like);
            }
        },
        error: function(e) {
            console.log(e)
            $('#rate_box_'+id).find('img').remove();
            $('#rate_box_'+id).removeClass('disabled');
        }
    });
}
function adjustRating(id, like) {
    btn = $('#rate_box_'+id);
    btn.find('.ka.ka16').hide();
    btn.find('.ratemark').removeClass('positive negative');
    btn.find('.ratemark .ka').remove();
    var count = parseInt(trim(btn.find('.ratemark').text())) + like;
    console.log(count);
    btn.parent().find('.ratemark').addClass(count>0?'positive':'negative').html('<i class="ka ka-arrow2-'+(count>0?'up':(count<0?'down':''))+'">'+count+'</i>');
}

function DeleteComment(e) {
    var t = $('#tab-comment_comments').length ? '#tab-comment_comments' : '#comments';
    $.ajax({
        type: 'POST',
        url: '/comments/delete/',
        data: {
            ajax: '1',
            cid: e
        },
        dataType: 'json',
        success: function(t) {
            if (t.method == 'error') {
                alert(t.html)
            } else $('#comment_' + e).fadeOut(500, function() {
                $('#comment_' + e).remove()
            })
        },
        error: function(e) {
            $(t).html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>');
            $(t).center();
            $('#darkenBackground').hide()
        }
    })
};

function unDeleteComment(e, t) {
    var i = $('#tab-comment_comments').length ? '#tab-comment_comments' : '#comments';
    $.ajax({
        type: 'POST',
        url: '/comments/undelete/' + e + '/',
        data: {
            ajax: '1'
        },
        dataType: 'json',
        beforeSend: function() {
            $('#ctext_' + e).html('<img src="/assets/images/indicator.gif">')
        },
        success: function(i) {
            $('#ctext_' + e).fadeIn(500, function() {
                $('#ctext_' + e).html(i.html)
            });
            $('#restore_' + e).hide();
            $('#rep_link' + e).html('<a href="javascript: DeleteComment(' + e + ');">delete</a>');
            $(t).removeClass('greenButton');
            $(t).addClass('redButton');
            $(t).attr('onClick', 'DeleteComment(' + e + ');')
        },
        error: function(e) {
            $(i).html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>');
            $(i).center();
            $('#darkenBackground').hide()
        }
    })
};
var current_edit_comment = 0,
    top_edit = !1;

function editComment(e, t) {
    var i = (t ? '#topctext_' : '#ctext_') + e;
    top_edit = t;
    if (current_edit_comment > 0) {
        $((t ? '#topctext_' : '#ctext_') + current_edit_comment).html($('#cbuffer').html())
    } else {
        if ($('#cbuffer').length == 0) $('body').append('<div id="cbuffer" style="display:none"></div>')
    };
    current_edit_comment = e;
    $('#cbuffer').html($(i).html());
    $.ajax({
        type: 'GET',
        url: '/comments/edit/' + e + '/',
        dataType: 'json',
        beforeSend: function() {
            $(i).html('<img src="/assets/images/indicator.gif" alt="loading..."/>');
            $(i).fadeIn('fast')
        },
        success: function(t) {
            $('#edited_' + e).remove();
            $(i).html(t.html).find('.ajaxLink').fancybox();
            current_edit_comment = 0
        }
    });
    return !1
};

function cancelEditComment(e) {
    current_edit_comment = 0;
    $((top_edit ? '#topctext_' : '#ctext_') + e).html($('#cbuffer').html());
    return !1
};

function saveComment(e, t) {
    var i = $(e).serialize();
    i = i;
    var n = (typeof(e.pid) == 'undefined') ? 0 : e.pid.value;
    if (!validateComment(e)) return !1;
    e.submit.disabled = !0;
    $.ajax({
        type: 'POST',
        url: '/comments/edit/' + t + '/',
        data: i,
        dataType: 'json',
        beforeSend: function() {
            e.submit.disabled = !0
        },
        success: function(i) {
            if (i.method == 'error') {
                var n = $('<div class="alertfield">' + i.html + '</div>');
                n.prependTo($(e));
                e.submit.disabled = !1;
                return !1
            };
            $((top_edit ? '#topctext_' : '#ctext_') + t).html(i.html).find('.ajaxLink').fancybox()
        },
        error: function(e) {
            $((top_edit ? '#topctext_' : '#ctext_') + t).html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>')
        }
    });
    return !1
};

function replyPost(e) {
    $('#pid').val(e);
    doFadeOnce($('#content_' + e).parent().parent());
    $('#replytext').val('');
    $('#replytext').focus();
    return !1
};
var current_edit_id = 0;

function editPost(e) {
    if (current_edit_id > 0) {
        $('#content_' + current_edit_id).html($('#cbuffer').html())
    };
    current_edit_id = e;
    $('#cbuffer').html($('#content_' + e).html());
    $.ajax({
        type: 'GET',
        url: '/community/post/edit/' + e + '/',
        dataType: 'json',
        beforeSend: function() {
            $('#content_' + e).html('<img src="/assets/images/indicator.gif" alt="loading..."/>');
            $('#content_' + e).fadeIn('fast')
        },
        success: function(t) {
            console.log(e);
            console.log(t);
            $('#edited_' + e).remove();
            $('#content_' + e).html(t.html).find('.ajaxLink').fancybox();
            $('#post' + e).find('.smallButtonsline').hide();
            current_edit_id = 0
        }
    });
    return !1
};

function cancelEditPost(e) {
    current_edit_id = 0;
    $('#content_' + e).html($('#cbuffer').html());
    $('#post' + e).find('.smallButtonsline').show();
    return !1
};

function savePost(e) {
    var postform = $('#editpost_'+e);
    if (!postform.length || postform.find('#saveedit_'+e).is('.disabledButton')) return false;
    $.ajax({
        type: 'POST',
        url: '/community/post/edit/'+e+'/',
        data: {'content':postform.find('[name="pid"]').val()},
        dataType: 'json',
        beforeSend: function() {
            postform.find('a').addClass('disabledButton');
        },
        success: function(i) {
            if (i.method == 'error') {
                var n = $('<div class="alertfield">' + i.html + '</div>');
                n.prependTo($('editpost_'+e));
                postform.find('a').removeClass('disabledButton');
                return false;
            }
            $('#content_' + e).html(i.html).find('.ajaxLink').fancybox();
            $('#post' + e).find('.smallButtonsline').show()
        },
        error: function(e) {
            $('#content_' + t).html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>')
        }
    });
    return !1
};

function quotePost(e, t) {
    $('#pid').val(0);
    var i = t != undefined ? '#post_' + e : '#content_' + e,
        n = toBBcode($(i).html()),
        s = $(i).closest('.commentbody').find('.badgeUsernamejs').find('a').html();
    $('#replytext').val($('#replytext').val() + '[quote="' + s + '"]' + n + '[/quote]\n');
    $('#replytext').focus();
    return !1
};

function toBBcode(e) {
    e = trim(e);
    var t = $('<div>' + e + '</div>'),
        i = null,
        s = null;
    t.html(t.html().replace(/<br([^>]*)>/igm, '\r'));
    while (t.find('div.spoiler_container .spoiler_js').length) {
        i = t.find('div.spoiler_container').first();
        i.replaceWith('[spoiler]' + i.find('.spoiler_js').html() + '[/spoiler]')
    }
    while (t.find('div.quote').length) {
        i = t.find('div.quote').first();
        s = '';
        if (i.find('> .quoteAuthor.plain a').length) {
            s = '="' + i.find('> .quoteAuthor.plain a').html() + '"';
            i.find('> .quoteAuthor.plain').remove()
        };
        if (i.find('> .quote-content').length) {
            i.replaceWith('[quote' + s + ']' + i.find('> .quote-content').html() + '[/quote]')
        };
        i.replaceWith('[quote' + s + ']' + i.html() + '[/quote]')
    }
    while (t.find('div.spoiler_body').length) {
        i = t.find('div.spoiler_body').first();
        s = '';
        if (i.find('> .spoiler_header > .spoiler_toggle.spoiler_custom').length) {
            s = '="' + i.find('> .spoiler_header > .spoiler_toggle.spoiler_custom').html() + '"'
        };
        i.replaceWith('[spoiler' + s + ']' + i.find('> .spoiler_js').html() + '[/spoiler]')
    };
    t.find('pre').each(function() {
        if ($(this).find('code').length) {
            $(this).replaceWith('[code]' + $(this).find('code').html() + '[/code]')
        } else {
            $(this).replaceWith('[pre]' + $(this).html() + '[/pre]')
        }
    });
    while (t.find('span[style^="color:"]').length) {
        i = t.find('span[style^="color:"]').first();
        s = i.attr('style').match(/color:(.*)/)[1];
        i.replaceWith('[color=' + s + ']' + i.html() + '[/color]')
    }
    while (t.find('span[style^="text-decoration: underline;"]').length) {
        i = t.find('span[style^="text-decoration: underline;"]').first();
        i.replaceWith('[u]' + i.html() + '[/u]')
    }
    while (t.find('span[style^="font-size:"]').length) {
        i = t.find('span[style^="font-size:"]').first();
        s = i.attr('style').match(/font-size:(.*)/)[1].replace(/%/g, '');
        if (/px/.test(s)) s = '"' + s + '"';
        i.replaceWith('[size=' + s + ']' + i.html() + '[/size]')
    }
    while (t.find('div[class="left"],div[class="center"],div[class="right"],div[class="justify"]').length) {
        i = t.find('div[class="left"],div[class="center"],div[class="right"],div[class="justify"]').first();
        s = i.attr('class');
        i.replaceWith('[' + s + ']' + i.html() + '[/' + s + ']')
    };
    t.html(t.html().replace(/<small>/igm, '[small]').replace(/<\/small>/igm, '[/small]'));
    t.html(t.html().replace(/<hr([^>]*)>/igm, '[hr]'));
    t.html(t.html().replace(/<(b|big|strong)>/ig, '[b]').replace(/<\/(b|big|strong)>/ig, '[/b]'));
    t.html(t.html().replace(/<i>/ig, '[i]').replace(/<\/i>/ig, '[/i]'));
    t.find('iframe[src*="embed/"]').each(function() {
        $(this).replaceWith('[youtube]' + $(this).attr('src').match(/.*embed\/([^"]*)/i)[1] + '[/youtube]')
    });
    t.find('ul.bblist').each(function() {
        $(this).replaceWith('[list]' + $(this).html() + '[/list]')
    });
    t.find('ol.bblist').each(function() {
        $(this).replaceWith('[list=1]' + $(this).html() + '[/list]')
    });
    t.html(t.html().replace(/<li>/ig, '[*]'));
    t.find('a.ka-widget[widget-type="page"][rel]').each(function() {
        $(this).replaceWith('[' + $(this).attr('rel') + ']')
    });
    t.find('a.ka-widget[widget-type][rel]').each(function() {
        $(this).replaceWith('[' + $(this).attr('widget-type') + '=' + $(this).attr('rel') + ']')
    });
    t.find('.achBadge:has(> a[rel])').each(function() {
        $(this).replaceWith('[achievement=' + $(this).find('> a[rel]').attr('rel') + ']')
    });
    t.find('span.red[title]').each(function() {
        $(this).replaceWith('[user="' + $(this).attr('title') + '"]')
    });
    t.find('.badgeInline').each(function() {
        $(this).replaceWith('[user="' + $(this).find('a.plain').html() + '"]')
    });
    t.find('img[class="emoticon"][src*="/images/smiley/"]').each(function() {
        $(this).replaceWith('[:Q' + $(this).attr('src').match(/\/images\/smiley\/([^>]+).gif/i)[1] + ']')
    });
    t.find('img[src]').each(function() {
        i = $(this);
        s = '';
        var t = i.parent(),
            n = /yuq\.me\/users\/\d+\/\d+\/([a-z0-9]+)\.(gif|png|jpg)/i,
            e = i.is('[data-original]') ? i.attr('data-original') : i.attr('src');
        if (t.is('a[href]')) {
            if (t.is('.ajaxLink')) {
                if (i.is('[width]')) {
                    s = ' width=' + i.attr('width');
                    t.replaceWith('[img' + s + ']' + e + '[/img]')
                } else {
                    e = t.attr('href');
                    t.replaceWith('[image=' + (n.test(e) ? e.match(n)[1] : 'invalid image') + ']')
                }
            } else {
                if (i.is('[width]')) s = ' width=' + i.attr('width');
                i.replaceWith('[img' + s + ']' + e + '[/img]')
            }
        } else {
            if (n.test(e)) {
                i.replaceWith('[image=' + e.match(n)[1] + ']')
            } else {
                i.replaceWith('[img]' + e + '[/img]')
            }
        }
    });
    t.html(t.html().replace(/<a href="[^"]*?\/users\/\d+\/\d+\/([a-z0-9]+)\.(gif|png|jpg)"[^>]*?><img[^>]*?src="[^"]*?"[^>]*?><\/a>/ig, '[image=$1]'));
    t.html(t.html().replace(/<img.*?src=".*?\/u\/\d+\/([a-z0-9]+)\.(gif|png|jpg)".*?>/ig, '[image=$1]'));
    t.html(t.html().replace(/<img src="([^>]+)">/ig, '[img]$1[\/img]'));
    t.html(t.html().replace(/<img[^>]*src=["']?([^>"]+)["'][^>]*?>/ig, '[img]$1[\/img]'));
    t.find('a[href^="/confirm/url/"]').each(function() {
        var e = atob(decodeURIComponent($(this).attr('href').match(/\/confirm\/url\/([^\/]*)/)[1]).replace('_', '/')),
            t = $(this).html();
        if (e == t) {
            $(this).replaceWith('[url]' + e + '[/url]')
        } else {
            $(this).replaceWith('[url="' + e + '"]' + t + '[/url]')
        }
    });
    t.html(t.html().replace(/<span><\/span>/ig, ''));
    t.html(t.html().replace(/<i class="ka ka16 ka-message"><\/i>/ig, ''));
    t.find('.vtipContentjs').remove();
    t.html(t.html().replace(/<span class="blank"><\/span>[^>]+<\/span>/ig, ''));
    var n = t.html();
    n = n.replace(/<a class="plain" href="\/user\/([^>"]+)\/"><strong>([^>]+)<\/strong><\/a>/gi, '[user="$1"]');
    n = n.replace(/<a class="plain" href="\/user\/([^>\/"]+)\/">([^>]+)<\/a>/gi, '[user="$1"]');
    n = n.replace(/<span class="blank"><\/span>[^>]+<\/span>/gi, '');
    n = n.replace(/<a [^>]*href="\/messenger\/create\/[^>]+imessage"><\/a>/gi, '');
    n = n.replace(/class="repValue[^>]+>[^<]+<\/span>/gi, '></span>');
    n = n.replace(/<STRONG>/gi, '[b]');
    n = n.replace(/<\/STRONG>/gi, '[/b]');
    n = n.replace(/<a[^>]*?href="\/confirm\/url[^>]+>(https?[^>]+)<\/a>/gi, '[url]$1[\/url]');
    n = n.replace(/<a rel="nofollow" href="[^>"]+\/user\/([^>\/"]+)\/">.+\/user\/([^>"]+)\/<\/a>/gi, '[user="$1"]$2[\/user]');
    n = n.replace(/<a rel="nofollow" href="[^>"]+\/user\/([^>\/"]+)\/">([^>]+)<\/a>/gi, '[user="$1"]$2[\/user]');
    n = n.replace(/<a rel="nofollow" href="([^>"]+)">([^>]+)<\/a>/gi, '[url="$1"]$2[\/url]');
    n = n.replace(/<P>/gi, '\r\r');
    n = n.replace(/<\/P>/gi, '');
    n = n.replace(/<P [^>]*>/gi, '\r\r');
    n = n.replace(/<a[^>]+href=["']([^>"']+)["'][^>]*>([^>]+)<\/a>/gi, '[url="$1"]$2[\/url]');
    n = n.replace(/<A HREF/i, '[url');
    n = n.replace(/<\/A>/i, '[/url]');
    n = n.replace(/<[^>]*>/g, '');
    n = n.replace(/">/g, '"]');
    n = n.replace(/&lt;/ig, '<').replace(/&gt;/ig, '>');
    return n
};

function showAlbum(e, t) {
    var i = $(e).parent().parent().find('.container_js'),
        n = $(e).parent();
    if (i.is(':visible')) {
        i.fadeOut('fast');
        n.removeClass('versionsUnFolded');
        n.addClass('versionsFolded');
        return !1
    };
    $.ajax({
        type: 'POST',
        url: '/media/getalbum/' + t + '/',
        dataType: 'json',
        error: function() {
            i.html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>')
        },
        beforeSend: function() {
            i.html('<img src="/assets/images/indicator.gif" alt="loading..."/>');
            i.fadeIn('fast')
        },
        success: function(e) {
            i.html(e.html);
            n.removeClass('versionsFolded');
            n.addClass('versionsUnFolded')
        }
    });
    return !1
};

function showEpisodeInfo(e, t) {
    var i = $(e).parent().parent().find('.container_js'),
        n = $(e).parent();
    if (i.is(':visible')) {
        i.fadeOut('fast');
        n.removeClass('versionsUnFolded');
        n.addClass('versionsFolded');
        return !1
    };
    $.ajax({
        type: 'POST',
        url: '/media/getepisode/' + t + '/',
        dataType: 'json',
        error: function() {
            i.html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>')
        },
        beforeSend: function() {
            i.html('<img src="/assets/images/indicator.gif" alt="loading..."/>');
            i.fadeIn('fast')
        },
        success: function(e) {
            i.html(e.html);
            n.removeClass('versionsFolded');
            n.addClass('versionsUnFolded');
            i.find('.askFeedbackjs').click(askFeedback)
        }
    });
    return !1
};

function showAnimeEpisodeInfo(e, t) {
    var i = $(e).parent().parent().find('.container_js'),
        n = $(e).parent();
    if (i.is(':visible')) {
        i.fadeOut('fast');
        n.removeClass('versionsUnFolded');
        n.addClass('versionsFolded');
        return !1
    };
    $.ajax({
        type: 'POST',
        url: '/media/getanimeepisode/' + t + '/',
        dataType: 'json',
        error: function() {
            i.html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>')
        },
        beforeSend: function() {
            i.html('<img src="/assets/images/indicator.gif" alt="loading..."/>');
            i.fadeIn('fast')
        },
        success: function(e) {
            i.html(e.html);
            n.removeClass('versionsFolded');
            n.addClass('versionsUnFolded')
        }
    });
    return !1
};

function toggleQuestions(e, t) {
    if ($('#' + e + '_group').is(':visible')) {
        $('#' + e + '_group').fadeOut('fast');
        $(t).parent().removeClass('questionGroupUnFolded');
        $(t).parent().addClass('questionGroupFolded');
        return !1
    } else {
        $('#' + e + '_group').fadeIn('fast');
        $(t).parent().removeClass('questionGroupFolded');
        $(t).parent().addClass('questionGroupUnFolded')
    }
};

function showNewComments(e) {
    if ($('#torrent_' + e).is(':visible')) {
        $('#torrent_' + e).fadeOut('fast');
        $('#infoList_' + e).removeClass('versionsUnFolded');
        $('#infoList_' + e).addClass('versionsFolded');
        return !1
    };
    $.ajax({
        type: 'POST',
        url: '/account/new_comments/',
        data: {
            ajax: 1,
            torrentId: e
        },
        dataType: 'json',
        beforeSend: function() {
            $('#torrent_' + e).html('<img src="/assets/images/indicator.gif" alt="loading..."/>');
            $('#torrent_' + e).fadeIn('fast')
        },
        success: function(t) {
            $('#torrent_' + e).html(t.html);
            $('#infoList_' + e).removeClass('versionsFolded');
            $('#infoList_' + e).addClass('versionsUnFolded')
        }
    });
    return !1
};

function getCategories(e, t) {
    $.ajax({
        type: 'POST',
        url: '/torrents/getcategory/' + t + '/' + e + '/',
        dataType: 'json',
        beforeSend: function() {
            $('#cat_place_' + e).html('<img src="/assets/images/indicator.gif" alt="loading..."/>')
        },
        success: function(t) {
            $('#cat_place_' + e).html(t.html).show()
        }
    });
    return !1
};

function validateIdea(e) {
    if ((e.text.value == '')) {
        alert('Please fill the description field');
        return !1
    };
    if ((e.name.value.length < 4)) {
        alert('Idea name is too short');
        return !1
    };
    if ((e.category.value == '')) {
        alert('Please select category');
        return !1
    };
    return !0
};
var force_submit_idea = !1;

function searchSimilarIdeas(e) {
    if (!validateIdea(e)) return !1;
    var t = $(e).serialize();
    t = t + '&ajax=1' + (force_submit_idea ? '&force=1' : '');
    e.submit.disabled = !0;
    $.ajax({
        type: 'POST',
        url: '/ideabox/create/',
        data: t,
        dataType: 'json',
        beforeSend: function() {
            $('#similar_ideas').html('<img src="/assets/images/indicator.gif">');
            e.submit.disabled = !0
        },
        success: function(t) {
            e.submit.disabled = !1;
            if (t.idea_link != undefined) {
                document.location = t.idea_link;
                return !1
            } else if (t.method == 'error') {
                $('#similar_ideas').attr('style', 'color: red;')
            } else {
                $('#butsave').html('<span>save</span>')
            };
            $('#similar_ideas').html(t.html);
            $('#similar_ideas').fadeIn('fast');
            force_submit_idea = !0
        },
        error: function(t) {
            $('#similar_ideas').html('<center>Something nasty happened. Please try to reload a page or visit kastatus.com for details.</center>');
            e.submit.disabled = !1
        }
    });
    return !1
};

function getSubcategory(e) {
    $.ajax({
        type: 'POST',
        url: '/torrents/getcategory/' + $('#categoryId_' + e + ' :selected').val() + '/' + e + '/',
        dataType: 'json',
        beforeSend: function() {
            $('#cat_place_' + e).html('<img src="/assets/images/indicator.gif">')
        },
        success: function(t) {
            $('#cat_place_' + e).html(t.html)
        }
    });
    return !1
};

function setCategory(e) {
    var t = $('#sub_cat_' + e + ' :selected').val() != undefined ? $('#sub_cat_' + e + ' :selected').val() : 0,
        i = $('#cat_' + e).html();
    $.ajax({
        type: 'POST',
        url: '/moderator/torrent/changecategory/' + e + '/',
        data: {
            ajax: 1,
            categoryId: $('#categoryId_' + e + ' :selected').val(),
            sub_cat: t
        },
        dataType: 'json',
        beforeSend: function() {
            $('#cat_' + e).html('<img src="/assets/images/indicator.gif" alt="loading..."/>')
        },
        success: function(t) {
            if (t.method == 'error') {
                alert(t.html);
                $('#cat_' + e).html(i)
            } else {
                $('#cat_' + e).html(t.html)
            };
            $('#cat_place_' + e).hide()
        }
    });
    return !1
};

function requestReseed(e, t) {
    $.ajax({
        type: 'POST',
        url: '/torrents/requestreseed/' + e + '/',
        data: {
            ajax: 1
        },
        dataType: 'json',
        beforeSend: function(e) {
            $(t).html('<img src="/assets/images/indicator.gif" alt="loading..."/>')
        },
        success: function(e) {
            $(t).hide();
            $('#reseed_div').html('RESEED HAS BEEN REQUESTED FOR THIS TORRENT').show()
        }
    });
    return !1
};

function hideSidebar() {
    $('#sidebar').hide();
    $('#hidesidebar').hide();
    $('#showsidebar').show();
    $.post('/account/hidesidebar/', {
        hide: 1,
        ajax: 1
    });
    return !1
};

function showSidebar() {
    $('#sidebar').show();
    $('#hidesidebar').show();
    $('#showsidebar').hide();
    $.post('/account/hidesidebar/', {
        hide: 0,
        ajax: 1
    });
    return !1
};

function saveAndClosePartner(e) {
    $.cookie('partner' + e, '1', {
        expires: 365,
        path: '/'
    });
    $('#promoPartner' + e).fadeOut('fast')
};

function saveAndCloseLeech() {
    $.cookie('leech', '1', {
        expires: 365,
        path: '/'
    });
    $('#promoLeechmonster').fadeOut('fast')
};

function saveFriendRequest(e) {
    $.ajax({
        type: 'POST',
        url: e.href,
        data: {
            ajax: '1'
        },
        dataType: 'json',
        success: function(t) {
            if (t.method == 'error') return alert(t.html);
            $(e).parent().parent().parent().fadeOut('fast').remove()
        }
    });
    return !1
};

function uploadChangeCat() {
    $.ajax({
        type: 'POST',
        url: '/torrents/getcategory/' + $('#categoryId :selected').val() + '/',
        dataType: 'json',
        beforeSend: function() {
            $('#subcat').html('<img src="/assets/images/indicator.gif">')
        },
        success: function(e) {
            var t = $('#categoryId :selected').val();
            $('#tvshow,#movie,#game,#book,#anime,#music,#langs,#subs,#scrcp,#scrns').hide();
            if (t == 2) {
                $('#movie,#langs,#subs,#scrcp,#scrns,#completeness').show()
            } else if (t == 21) {
                $('#tvshow,#langs,#subs,#scrcp,#scrns,#completeness').show()
            } else if (t == 4) {
                $('#game,#langs,#scrns,#completeness').show()
            } else if (t == 6) {
                $('#scrcp,#scrns,#completeness').show()
            } else if (t == 7) {
                $('#anime,#langs,#subs,#scrcp,#scrns,#completeness').show()
            } else if (t == 9) {
                $('#book').show()
            } else if (t == 12) {
                $('#music').show()
            };
            $('#subcat').html(e.html)
        }
    })
};

function askFeedback() {
    var e = $(this),
        i = e.attr('href'),
        t = e.data('id');
    if (t) {
        $.post('/account/askfeedback/' + t + '/', {}, function(e) {
            if (e.method == 'error') {
                alert('Error: ' + e.html)
            } else {
                updateFeedback();
                document.location.href = i
            }
        }, 'json').error(function(e) {
            console.log(e)
        });
        return !1
    } else {
        updateFeedback()
    }
};

function toggleTags(e, t) {
    t = t || 0;
    if (t) {
        $.ajax({
            type: 'POST',
            url: '/account/toggletagcloud/show/',
            dataType: 'json',
            success: function(e) {
                $('#tagcloud').html(e.html).slideDown('normal')
            }
        });
        $(e).html('<span class="font80perc">&#x25B2;</span>');
        $(e).prop('title', 'Hide tagcloud');
        $(e).attr('onclick', 'toggleTags(this);')
    } else {
        $('#tagcloud').slideUp('normal');
        $.post('/account/toggletagcloud/hide/');
        $(e).prop('title', 'Show tagcloud');
        $(e).html('<span class="font80perc">&#x25BC;</span>');
        $(e).attr('onclick', 'toggleTags(this, 1);')
    }
};

function uploadFile(e) {
    $(e).parent().find('.switchRight').removeClass('active');
    $(e).addClass('active');
    $('#fileinput_container').html('<input type=\'file\' name=\'file\' class=\'primary inputfile\' />').find('input[type=file]').customFileInput();
    return !1
};

function uploadUrl(e) {
    $(e).parent().find('.switchLeft').removeClass('active');
    $(e).addClass('active');
    $('#fileinput_container').html('<input type=\'url\' class=\'primary textinput longtextinput\' name=\'uploadUrl\' value=\'\' />');
    return !1
};

function setLanguage(e, t) {
    $('#langSelectorLine').hide();
    $.cookie('lang_code', e, {
        expires: 365,
        path: '/',
        domain: t
    });
    $.post('/account/switch_language/' + e + '/');
    window.location.reload()
};

function refreshMeta(e) {
    var t = Math.floor(Math.random() * 99999999999);
    $.ajax({
        type: 'POST',
        url: $(e).attr('href'),
        dataType: 'json',
        beforeSend: function() {
            $(e).replaceWith('<img id="prg' + t + '" src="/assets/images/indicator.gif">')
        },
        success: function(e) {
            $('#prg' + t).replaceWith('ok')
        }
    });
    return !1
};

function doLogout(e) {
    var t = e ? document[e] : document.logoutform;
    t.submit();
    return !1
};
$.fn.makePost = function(e) {
    if (!$(this).length) {
        return this
    };
    $(this).unbind('click.pst').bind('click.pst', function(e) {
        e.preventDefault();
        $(this).blur();
        $.post($(this).attr('href'), {}, function(e) {
            if (e.method == 'error') {
                alert('Error: ' + e.html)
            } else {
                document.location.reload()
            }
        }, 'json').error(function(e) {
            console.log('XHR Error: ' + e.responseText)
        });
        return
    });
    return this
};
(function(e, t, i, n) {
    e.fn.doubleTapToGo = function(n) {
        if (!('ontouchstart' in t) && !navigator.msMaxTouchPoints && !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) return !1;
        this.each(function() {
            var t = !1;
            e(this).on('click', function(i) {
                var n = e(this);
                if (n[0] != t[0]) {
                    i.preventDefault();
                    t = n
                }
            });
            e(i).on('click touchstart MSPointerDown', function(i) {
                var s = !0,
                    r = e(i.target).parents();
                for (var n = 0; n < r.length; n++)
                    if (r[n] == t[0]) s = !1;
                if (s) t = !1
            })
        });
        return this
    }
})(jQuery, window, document);
$(function() {
    $('a.ajaxLink').fancybox();
    $('a.postLink').makePost();
    $('#translate_link').fancybox({
        autoDimensions: !1,
        width: 500
    });
    var i = 'ch|tw|bn'.split('|');
    if (i.indexOf($.cookie('lang_code')) >= 0) {
        var t = '#navigation li a .menuItem:not(.usernameProfile), #navigation li .dropdown li a, footer ul li a, .sliderbox ul li span.explanation, .data tr th a, .font11px, small, .font10px, .firstPost strong, #translate_link strong';
        $(t).addClass('thinGlyph')
    };
    $(document).on('click', 'td.forumhideJS', function(e) {
        var r = $(this),
            n = r.attr('rel');
        if (e.target.nodeName == 'A') return;
        var t = $('#forum_' + n),
            s = t.hasClass('hideBlockJS') ? null : 1;
        $.cookie('kat_settings[hide_forum][' + n + ']', s, {
            expires: 365,
            path: '/'
        });
        t.slideToggle('normal');
        var i = $(e.target);
        if (t.hasClass('hideBlockJS')) {
            t.removeClass('hideBlockJS').addClass('showBlockJS');
            i.attr('title', i.data('hide-title'))
        } else {
            t.removeClass('showBlockJS').addClass('hideBlockJS');
            i.attr('title', i.data('show-title'))
        }
    });
    $(document).on('click', '.foldClose', function() {
        var t = $(this).parent().parent().find('ul').attr('rel'),
            e = $('#' + t),
            i = e.hasClass('hideBlockJS') ? null : 1;
        $.cookie('kat_settings[sidebar][' + t + ']', i, {
            expires: 365,
            path: '/'
        });
        if (e.hasClass('hideBlockJS')) {
            e.removeClass('hideBlockJS').addClass('showBlockJS');
            $(this).removeClass('ka-arrow2-down').addClass('ka-arrow2-up')
        } else {
            e.removeClass('showBlockJS').addClass('hideBlockJS');
            $(this).removeClass('ka-arrow2-up').addClass('ka-arrow2-down')
        }
    });
    $(document).on('click', '#toggleAch', function() {
        var e = $('table .achTable'),
            t = e.hasClass('hideBlockJS') ? null : 1;
        $.cookie('kat_settings[hide_achievements]', t, {
            expires: 365,
            path: '/'
        });
        e.toggle();
        if (e.hasClass('hideBlockJS')) {
            e.removeClass('hideBlockJS').addClass('showBlockJS')
        } else {
            e.removeClass('showBlockJS').addClass('hideBlockJS')
        }
    });
    $(document).on('click', '#toggleFriends', function() {
        var e = $('#onlineFriends'),
            t = e.hasClass('hideBlockJS') ? 0 : 1;
        $.cookie('kat_settings[hide_friends]', t, {
            expires: 365,
            path: '/'
        });
        e.toggle();
        if (e.hasClass('hideBlockJS')) {
            e.removeClass('hideBlockJS').addClass('showBlockJS')
        } else {
            e.removeClass('showBlockJS').addClass('hideBlockJS')
        }
    });
    $(document).on('click', '#toggleAwaiting', function() {
        var e = $('#awaitingFriends'),
            t = e.hasClass('hideBlockJS') ? 0 : 1;
        $.cookie('kat_settings[hide_friends_awaiting]', t, {
            expires: 365,
            path: '/'
        });
        e.toggle();
        if (e.hasClass('hideBlockJS')) {
            e.removeClass('hideBlockJS').addClass('showBlockJS')
        } else {
            e.removeClass('showBlockJS').addClass('hideBlockJS')
        }
    });
    $(document).on('click', '#togglePending', function() {
        var e = $('#pendingFriends'),
            t = e.hasClass('hideBlockJS') ? 0 : 1;
        $.cookie('kat_settings[hide_friends_pending]', t, {
            expires: 365,
            path: '/'
        });
        e.toggle();
        if (e.hasClass('hideBlockJS')) {
            e.removeClass('hideBlockJS').addClass('showBlockJS')
        } else {
            e.removeClass('showBlockJS').addClass('hideBlockJS')
        }
    });
    $(document).on('click', '.hideChatBar', function() {
        $.cookie('kat_settings[chatbar]', 1, {
            expires: 365,
            path: '/'
        });
        $('#chat-bar-full').hide();
        $('#chat-bar-short').show();
        $('.chat-bar').addClass('chat-bar-short')
    });
    $(document).on('click', '.showChatBar', function() {
        $.cookie('kat_settings[chatbar]', null, {
            expires: 365,
            path: '/'
        });
        $('#chat-bar-full').show();
        $('#chat-bar-short').hide();
        $('.chat-bar').removeClass('chat-bar-short')
    });
    $(document).on('click', '.closeChatBar', function() {
        $.cookie('kat_settings[chatbar]', 2, {
            expires: 365,
            path: '/'
        });
        $('.chat-bar').hide()
    });
    $(document).on('keypress', '.quicksubmit', function(e) {
        if (e.keyCode === 13 && (e.ctrlKey || e.metaKey)) {
            $(this).parents('form').eq(0).submit();
            return !1
        }
    });
    $('.comareajs').each(function() {
        $(this).bbedit()
    }).one('focus', function(e) {
        var t = $(this).parent().find('.captchaformjs');
        t.show();
        t.find('img').trigger('click')
    });
    $.fancybox.queue($('#achievements').children().toArray(), {
        timeout: 30000,
        onNext: function(e) {
            $.post('/achievement/mark/' + $(e).data('achievement-id') + '/')
        }
    });
    $('#contentSearch').autocomplete({
        cache: !0,
        minLength: 2,
        open: function(e, t) {
            $('#contentSearch').autocomplete('widget').addClass('ui-search-autocomplete')
        },
        source: function(e, t) {
            $.ajax({
                url: '/get_queries.php',
                dataType: 'json',
                data: {
                    query: e.term
                },
                success: function(e) {
                    if (e.query.length == 0) return;
                    t($.map(e.query[0].options, function(e) {
                        return {
                            label: e.text,
                            value: e.text
                        }
                    }))
                }
            })
        },
        select: function(e, t) {
            window.location = '/usearch/' + t.item.value + '/'
        }
    });
    if (kat.detect_lang && $.cookie('lang_detected') == null) {
        $.ajax({
            type: 'POST',
            url: '/detectlang/',
            dataType: 'json',
            success: function(e) {
                if (e != null) $('#langSelectorLine').html(e.html).slideDown('normal')
            }
        })
    };
    try {
        $('img.lazyjs').lazyload({
            effect: 'fadeIn'
        })
    } catch (e) {};
    $(document).on('click', 'img.captcha', function() {
        this.src = '/captcha/show/?' + Math.floor(Math.random() * 10000)
    });
    $(document).on('click', '.captchareload', function() {
        $(this).parent().find('img.captcha').click()
    });
    $(document).on('click', '.spoiler_toggle', function() {
        $(this).parent().parent().toggleClass('spoiler_opened').find('.spoiler_js').first().toggle()
    });
    $('.askFeedbackjs').click(askFeedback);
    $('.voteButton_js').on('click', function(e) {
        e.preventDefault();
        var t = $(this).parent(),
            i = $(this).is('.ka-thumbs-up');
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: $(this).attr('href'),
            beforeSend: function() {
                t.find('.ratemark').html('<img src="/assets/images/indicator.gif">').removeClass('plus minus');
                t.find('.ratemark .ka').remove()
            },
            success: function(e) {
                t.find('.ka16').remove();
                if (e.method == 'ok') {
                    t.prepend('<a class="ka kasmall ka16 ' + (i ? 'ka-thumbs-up' : 'ka-thumbs-down') + ' ka-disabled"><span></span></a>');
                    var n = parseInt(e.html);
                    t.find('.ratemark').html(e.html).addClass((n > 0 ? 'plus' : (n < 0 ? 'minus' : ''))).prepend('<i class="ka ka-arrow2-' + (n > 0 ? 'up' : 'down') + '"></i>')
                } else {
                    t.find('.ratemark').html('error')
                }
            },
            error: function() {
                t.find('.ka16').remove();
                t.find('.ratemark').html('error')
            }
        })
    });
    $(document).on('click', '#showHideSearch', function(e) {
        e.preventDefault();
        var t = $(this);
        $('#torrentSearch').slideToggle('fast');
        if (t.hasClass('ka-delete')) t.attr('class', 'ka ka-zoom');
        else if (t.hasClass('ka-zoom')) t.attr('class', 'ka ka-delete')
    });
    if (('ontouchstart' in document.documentElement)) {
        $('#tagcloud').hide().addClass('folded')
    };
    $('#navigation li:has(ul)').doubleTapToGo();
    $('.icommentjs').doubleTapToGo();
    $('.checkboxchecker').each(populateCheckBoxes());
    $('#thnxLink,#fakeLink').click(function() {
        var t = $(this),
            i = t.data('hash'),
            e;
        if (t.is('.jslike')) {
            e = 'like'
        } else if (t.is('.jsunlike')) {
            e = 'unlike'
        } else if (t.is('.jsdislike')) {
            e = 'dislike'
        } else if (t.is('.jsundislike')) {
            e = 'undislike'
        } else {
            return !1
        };
        $.ajax({
            type: 'POST',
            url: '/torrents/vote/' + e + '/' + i + '/',
            dataType: 'json',
            success: function(t) {
                if (t.method == 'error') {
                    alert(t.html);
                    return
                };
                $('#thnxCount span').html(t.thanks_count != 0 ? '+' + t.thanks_count : 0);
                $('#fakeCount span').html(t.fakes_count != 0 ? '-' + t.fakes_count : 0);
                var i = $('#thnxLink'),
                    n = $('#fakeLink');
                switch (e) {
                    case 'like':
                        i.removeClass('jslike').addClass('jsunlike');
                        n.removeClass('jsdislike').addClass('gfunchecked');
                        break;
                    case 'unlike':
                        i.removeClass('jsunlike').addClass('jslike');
                        n.removeClass('gfunchecked').addClass('jsdislike');
                        break;
                    case 'dislike':
                        i.removeClass('jslike').addClass('gfunchecked');
                        n.removeClass('jsdislike').addClass('jsundislike');
                        break;
                    case 'undislike':
                        i.removeClass('gfunchecked').addClass('jslike');
                        n.removeClass('jsundislike').addClass('jsdislike');
                        break
                }
            }
        });
        return !1
    });
    jQuery('.timeago').timeago()
});

function populateCheckBoxes() {
    return function() {
        var e = $(this),
            i = e.data('selector'),
            t = $(i);
        e.click(function(i) {
            t.prop('checked', e.prop('checked'));
            i.stopPropagation()
        });
        t.click(function(i) {
            var n = !0;
            t.each(function() {
                if (!$(this).prop('checked')) {
                    n = !1;
                    return !1
                }
            });
            e.prop('checked', n);
            i.stopPropagation()
        })
    }
};

function updateMessagesCount(e) {
    var t = $('#menu_messages_count');
    if (e > 0) {
        if (!t.length) return;
        t.html(e).parent().show()
    } else {
        t.parent().hide()
    }
};

function confirm_url(e, t) {
    dont = $(e).prop('checked') ? 1 : null;
    $.cookie('kat_settings[dont_ask]', dont, {
        expires: 365,
        path: '/',
        domain: t
    })
};
$(function() {
    $.fn.extend({
        addFilters: function() {
            return this.each(function() {
                $(this).find('tr.firstr > *').each(function() {
                    $(this).attr('style', 'width: ' + $(this).width() + 'px !important')
                });
                $(this).find('tr.firstr > :eq(0)').html('<select class="tableFilter" id="tableFilter_event"><option value="">Event</option></select>');
                $(this).find('tr.firstr > :eq(1)').html('<select class="tableFilter" id="tableFilter_performer"><option value="">Performed by</option></select>');
                filterEvents = [];
                filterPerformers = [];
                var e, t;
                $(this).find('tr:not(.firstr)').each(function() {
                    e = $(this).find(':eq(0)').text();
                    t = $(this).find(':eq(1) .badgeInline .plain').text();
                    if (filterEvents.indexOf(e) < 0) {
                        filterEvents.push(e);
                        $('#tableFilter_event').append('<option value="' + e + '">' + e + '</option>')
                    };
                    if (filterPerformers.indexOf(t) < 0) {
                        filterPerformers.push(t);
                        $('#tableFilter_performer').append('<option value="' + t + '">' + t + '</option>')
                    }
                })
            })
        }
    });
    $(document).delegate('.tableFilter', 'change', function() {
        $(this).closest('table').find('tr:not(.firstr)').each(function() {
            $(this).hide();
            if (($(this).find(':eq(0)').text() == $('#tableFilter_event').val() || $('#tableFilter_event').val() == '') && ($(this).find(':eq(1) .badgeInline .plain').text() == $('#tableFilter_performer').val() || $('#tableFilter_performer').val() == '')) $(this).show()
        })
    })
});
$(function() {
    $('#feedback').click(function() {
        var e = $('<div />').css({
            position: 'absolute',
            zIndex: 9990,
            cursor: 'crosshair',
            left: 0,
            top: 0,
            width: $(document).width(),
            height: $(document).height(),
            background: '#000',
            opacity: 0.5
        }).appendTo('body');
        var t = $('<div />').css({
            color: '#fff',
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '100px',
            marginLeft: '-50px',
            lineHeight: '16px',
            fontWeight: 'bold'
        }).append($('<img />').attr('src', '/assets/images/indicator.gif').css({
            marginRight: '5px',
            verticalAlign: 'top'
        })).append('Loading...').appendTo(e);
        $(window).bind('keypress.fb', function(i) {
            if (i.keyCode == 27) {
                $(window).unbind('keypress.fb');
                t.remove();
                e.remove()
            }
        });
        $.getScript('/assets/js/feedback/html2canvas.min-' + kat.release_id + '.js', function() {
            $.getJSON('/issue/form/?_=' + new Date().getTime(), function(i) {
                $.getScript('/assets/js/feedback/feedback-' + kat.release_id + '.js', function() {
                    t.remove();
                    $(window).unbind('.fb');
                    $('body').feedback(i.html, e);
                    $('.lazyjs').lazyload()
                })
            })
        });
        return !1
    })
});
function page_specify(btn) {
    var pageNum = prompt('Enter page number');
    if (!isNaN(pageNum)) {
        pageNum = parseInt(pageNum);
        var p = {'base_url':   btn.parent().attr('base_url'),
                 'url_suffix': btn.parent().attr('url_suffix'),
                 'last':       parseInt(btn.parent().attr('num_pages')),
                 'cur':        parseInt(btn.parent().attr('cur_page'))};
        if (pageNum != p.cur && pageNum > 0 && pageNum <= p.last) {
            // if (last.is('.ajaxLink')) { // if last button is .ajaxLink then it implies it's being fancyboxed, or at least the destination page(s) should be fancyboxed. 
            //  $('<a href="' + base_url+pageNum+'/'+url_suffix + '"' + (last.is('[rel="nofollow"]') ? ' rel="nofollow"' : '') + '></a>').fancybox().click();
            // } else {
            //  location.href = base_url+pageNum+'/'+url_suffix;
            // }
            location.href = p.base_url+pageNum+'/'+p.url_suffix;
        }
    }
};