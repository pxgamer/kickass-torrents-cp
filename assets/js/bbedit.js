(function($) {
    $.bbedit = {
        baseURL: '/assets/images/',
        i18n: {
            'default': {
                'b': 'Bold',
                'i': 'Italic',
                'u': 'Underline',
                's': 'Strike through',
                'url': 'Insert link',
                'torrent': 'Insert torrent link',
                'user': 'Insert link to user profile',
                'image': 'Insert image',
                'code': 'Insert code',
                'quote': 'Insert quote',
                'smiles': 'Show smiles',
                'spoiler': 'Insert spoiler',
                'size': 'Font size',
                'align': 'Text alignment',
                'list': 'Insert List',
                'color': 'Set text color',
                'youtube': 'Embed YouTube video',
                'preview': 'Preview',
                'biggrin': 'Big grin',
                'cry': 'Cry',
                'dizzy': 'Dizzy',
                'funk': 'Funk',
                'huffy': 'Huffy',
                'lol': 'Laugh out Loud',
                'loveliness': 'Loveliness',
                'mad': 'Mad',
                'sad': 'Sad',
                'shocked': 'Shocked',
                'shy': 'Shy',
                'sleepy': 'Sleepy',
                'smile': 'Smile',
                'sweat': 'Sweat',
                'titter': 'Titter',
                'tongue': 'Tongue out',
                'pirate': 'Pirate',
                'nervous': 'Nervous Laughter',
                'white': 'White Flag',
                'cold': 'Cold Sweat',
                'lucky': 'Ya feelin lucky, punk??',
                'boo': 'Boo',
                'wink': 'Little D',
                'dull': 'Dull',
                'chuckle': 'Chuckle',
                'clap': 'Clap',
                'drunk': 'Drunk',
                'finger': 'Middle finger',
                'inlove': 'In love',
                'nerd': 'Nerd',
                'no': 'No',
                'rofl': 'ROFL',
                'sealed': 'Lips sealed',
                'smirk': 'Smirk',
                'think': 'Think',
                'yes': 'Yes',
                'wait': 'Wait',
                'wave': 'Wave',
                'cool': 'Cool dude',
                'evil': 'Evil',
                'punch': 'Punch',
                'doh': 'Doh',
                'yawn': 'Yawn',
                'tmi': 'TMI',
                'fubar': 'FUBAR',
                'rock': 'Rock',
                'bandit': 'Bandit',
                'swear': 'Swear',
                'facepalm': 'Facepalm',
                'thumb_dwn': 'Thumbs Down',
                'thumb_up': 'Thumbs Up'
            }
        },
        menus: {
            'size': {
                '200': 'Big',
                '100': 'Normal',
                'small': 'Small'
            },
            'align': {
                'left': 'Left',
                'center': 'Center',
                'right': 'Right',
                'justify': 'Justify'
            },
            'list': {
                'bullet': 'Bulleted List',
                'numeric': 'Numeric List',
                'additem': 'Add Item'
            },
            'image': {
                'upload': 'Insert image',
                'link': 'Link image',
            },
            'color': {
                'yellow': '',
                'orange': '',
                'red': '',
                'blue': '',
                'purple': '',
                'green': '',
                'white': '',
                'gray': '',
                'black': '',
            }
        }
    };
    $.fn.extend({
        bbedit: function(s) {
            this.defaults = {
                highlight: !0,
                enableToolbar: !0,
                enableSmileybar: !0,
                isforSignature: !1,
                reportbox: !1,
                lang: 'default',
                tags: 'b,i,u,s,image,url,torrent,user,code,quote,smiles,spoiler,size,align,list,color,youtube,preview',
                hasmenu: 'size,align',
                smilies: 'biggrin,cry,dizzy,funk,huffy,lol,loveliness,mad,sad,shocked,shy,sleepy,smile,sweat,titter,tongue,pirate,boo,wink,dull,chuckle,clap,drunk,finger,inlove,nerd,no,rofl,sealed,smirk,think,yes,wait,wave,cool,evil,punch,doh,yawn,tmi,fubar,rock,bandit,swear,facepalm,thumb_up,thumb_dwn',
                attachImage: !0,
                lastBBcode: ''
            };
            var s = $.extend(this.defaults, s),
                a = s.tags.split(/,\s*/),
                c = '<div class="bbedit-toolbar">';
            for (var r in a) {
                c += ((a[r] in $.bbedit.menus) ? '<div class="bbedit-hasmenu">' : '') + '<span class="ka ka-' + a[r] + ' bbedit-' + a[r] + '" title="' + $.bbedit.i18n[s.lang][a[r]] + '"></span>' + ((a[r] in $.bbedit.menus) ? '</div> ' : ' ')
            };
            c += '</div>';
            var o = s.smilies.split(/,\s*/),
                u = '<div class="clear"></div>',
                l = '<div class="bbedit-smileybar">';
            for (var r in o) {
                if (o[r] != '|' && o != undefined) {
                    l += '<img src="' + $.bbedit.baseURL + 'smiley/' + o[r] + '.gif" class="bbedit-' + o[r] + '" alt="' + o[r] + '" title="' + $.bbedit.i18n[s.lang][o[r]] + '" /> '
                } else {
                    l += '<br />'
                }
            };
            l += '</div>';
            return this.each(function() {
                var r = s;
                r.ta = this;
                var u = 'sm' + Math.random();
                u = u.replace('0.', '');
                $(this).bind('select click keyup', function() {
                    if (document.selection) {
                        var i = document.selection.createRange(),
                            e = r.ta.createTextRange(),
                            t = e.duplicate();
                        e.moveToBookmark(i.getBookmark());
                        t.setEndPoint('EndToStart', e);
                        r.selectionStart = t.text.length;
                        r.selectionEnd = t.text.length + i.text.length
                    }
                });
                if (s.enableToolbar) {
                    var a = $(c);
                    $(this).before(a);
                    if (s.isforSignature) a.find('.bbedit-code, .bbedit-quote, .bbedit-spoiler, .bbedit-youtube').remove();
                    if (s.reportbox) a.find('.bbedit-smiles, .bbedit-hasmenu:has(.bbedit-size, .bbedit-align, .bbedit-color), .bbedit-youtube').remove();
                    if (!s.preview) {
                        a.find('.bbedit-preview').remove()
                    } else {
                        a.find('.bbedit-preview').attr('data-preview', s.preview).before('<span class="bbedit-separator"></span> ')
                    };
                    a.find('.bbedit-hasmenu').each(function() {
                        i($(this))
                    });
                    a.find('.bbedit-b').click(function() {
                        t(r, '[b]', '[/b]')
                    });
                    a.find('.bbedit-i').click(function() {
                        t(r, '[i]', '[/i]')
                    });
                    a.find('.bbedit-u').click(function() {
                        t(r, '[u]', '[/u]')
                    });
                    a.find('.bbedit-s').click(function() {
                        t(r, '[s]', '[/s]')
                    });
                    a.find('.bbedit-code').click(function() {
                        t(r, '[code]', '[/code]')
                    });
                    a.find('.bbedit-quote').click(function() {
                        t(r, '[quote]', '[/quote]')
                    });
                    a.find('.bbedit-spoiler').click(function() {
                        var input = prompt('Enter spoiler button text:');
                        if (input.replace(/ /g, '') != '') {
                            t(r, '[spoiler="' + input.replace(/"/g, '`') + '"]', '[/spoiler]')
                        } else {
                            t(r, '[spoiler]', '[/spoiler]')
                        }
                    });
                    a.find('.bbedit-align').click(function() {
                        var input = prompt('Enter alignment:');
                        if (input == 'left' || input == 'center' || input == 'right' || input == 'justify')
                            t(r, '[' + input + ']', '[/' + input + ']')
                    });
                    a.find('[class*="bbedit-align-"]').click(function() {
                        var i = $(this).attr('class').replace(/.*bbedit-align-/, '');
                        t(r, '[' + i + ']', '[/' + i + ']')
                    });
                    a.find('.bbedit-list').click(function() {
                        t(r, '[*] ', '')
                    });
                    a.find('[class*="bbedit-list-"]').click(function() {
                        if ($(this).is('.bbedit-list-additem')) {
                            t(r, '[*] ', '')
                        } else if (e(this).is('.bbedit-list-numeric')) {
                            t(r, '[list=1]\n', '\n[/list]')
                        } else {
                            t(r, '[list]\n', '\n[/list]')
                        }
                    });
                    a.find('.bbedit-size').click(function() {
                        var e = prompt('Text size');
                        if (e) t(r, '[size=' + e + ']', '[/size]')
                    });
                    a.find('[class*="bbedit-size-"]').click(function() {
                        var i = $(this).attr('class').replace(/.*bbedit-size-/, '');
                        if (i == 'small') {
                            t(r, '[small]', '[/small]')
                        } else {
                            t(r, '[size=' + i + ']', '[/size]')
                        }
                    });
                    a.find('.bbedit-color').click(function() {
                        var i = prompt('Enter color');
                        if (/^acl[\W\D]*([^\s]+)$/i.test(i)) {
                            var n = i.match(/^acl[\W\D]*([^\s]+)$/i)[1];
                            var a = $('<b></b>').addClass('aclColor_' + n).css('color').match(/\d+/g);
                            i = '#';
                            for (var o = 0; o < 3; o++) {
                                var s = parseInt(a[o]).toString(16);
                                i += s.length == 1 ? '0' + s : s
                            };
                            t(r, '[color=' + i + ']', '[/color]')
                        } else if (/^#*([a-f0-9]{3}){1,2}$/i.test(i)) {
                            t(r, '[color=' + (/^#/.test(i) ? '' : '#') + i + ']', '[/color]')
                        } else if (i != '' && i != null) {
                            t(r, '[color="' + i + '"]', '[/color]')
                        }
                    });
                    a.find('[class*="bbedit-color-"]').click(function() {
                        var i = $(this).attr('class').replace(/.*bbedit-color-/, '');
                        if (i == 'menu') return;
                        t(r, '[color="' + i + '"]', '[/color]')
                    });
                    a.find('.bbedit-image-link').click(function() {
                        t(r, function(e) {
                            if (e != '') {
                                return '[img]' + e + '[/img]'
                            } else {
                                var t = prompt('Image URL: ', '');
                                if (t != null && t != '') {
                                    return '[img]' + t + '[/img]'
                                };
                                return !1
                            }
                        })
                    });
                    a.find('.bbedit-url').click(function() {
                        t(r, function(e) {
                            if (/^https?:\/\//i.test(e)) {
                                return '[url]' + e + '[/url]'
                            } else {
                                var t = prompt('URL: ', '');
                                if (t != null && t != '') {
                                    if (!/^https?:\/\//i.test(t)) {
                                        t = 'http://' + t
                                    };
                                    if (e == '') {
                                        return '[url="' + t + '"]' + t + '[/url]'
                                    } else {
                                        return '[url="' + t + '"]' + e + '[/url]'
                                    }
                                };
                                return !1
                            }
                        })
                    });
                    a.find('.bbedit-youtube').click(function() {
                        t(r, function(e) {
                            if (e.length > 0) {
                                return '[youtube]' + e + '[/youtube]'
                            } else {
                                var t = prompt('YouTube URL: ', '');
                                if (t != null && t != '') {
                                    return '[youtube]' + t + '[/youtube]'
                                };
                                return !1
                            }
                        })
                    });
                    a.find('.bbedit-image-upload, .bbedit-image').imageSelector({
                        select: function(i) {
                            for (var n in i) {
                                if (s.attachImage) {
                                    $(this).parents('form:eq(0)').find('.objectAttachmentsJs').append($('<div/>').attr('class', 'galleryThumbSizerStills inlineblock').append($('<input/>').attr('type', 'hidden').attr('name', 'image_ids[]').val(i[n].id)).append($('<a/>').attr('class', 'topmarg2px leftmarg2px absolute').click(function() {
                                        $(this).parent().remove()
                                    }).append($('<span/>').attr('class', 'ka ka16 ka-delete ka-red'))).append($('<a/>').attr('rel', 'images_' + u).attr('class', 'galleryThumb').attr('href', i[n].link).fancybox().append($('<img/>').attr('src', i[n].thumb_link))))
                                } else {
                                    t(r, '[image=' + i[n].name + ']')
                                }
                            }
                        }
                    });
                    a.find('.bbedit-smiles').click(function() {
                        if ($(r.ta).hasClass('activeSmiles')) {
                            $(r.ta).removeClass('activeSmiles')
                        } else {
                            $(r.ta).addClass('activeSmiles')
                        };
                        $('#' + u).toggle();
                        return !1
                    });
                    a.find('.bbedit-user').click(function() {
                        t(r, function(e) {
                            var t = prompt('Nickname: ', e);
                            if (t != null && t != '') {
                                t = t.replace(/https?.+\/user\/([^\/]+)\/.*/, '$1');
                                return '[user="' + t + '"]'
                            } else {
                                return !1
                            }
                        })
                    });
                    a.find('.bbedit-torrent').click(function() {
                        t(r, function(e) {
                            var t = prompt('Torrent link, id or hash: ', e);
                            if (t != null && t != '') {
                                t = t.replace(/https?.+t(\d+)\.html/, '$1');
                                if ((/\d+/i.test(t)) || (/^[a-f0-9]{40}/i.test(t))) {
                                    return '[torrent=' + t + ']'
                                };
                                return 'Wrong torrent: ' + t
                            } else {
                                return !1
                            }
                        })
                    });
                    a.find('.bbedit-preview').click(function() {
                        n(r, $(this).attr('data-preview'))
                    })
                };
                if (s.enableSmileybar) {
                    var h = $(l);
                    h.attr('id', u);
                    $(this).after(h);
                    h.hide();
                    for (var f in o) {
                        var d = h.find('.bbedit-' + o[f]);
                        d.click(function() {
                            t(r, '[:Q' + $(this).attr('class').replace(/bbedit-/, '') + ']')
                        })
                    }
                }
            })
        }
    });

    function t(e, t, i) {
        var n = e.ta,
            r = e.selectionStart || n.selectionStart || 0,
            l = e.selectionEnd || n.selectionEnd || 0,
            a = n.value.substring(r, l),
            s;
        if (typeof t == 'function') {
            s = t(a);
            if (s === !1) {
                return
            }
        } else {
            if (!i || i == '') {
                s = a + t
            } else {
                s = t + a + i
            }
        };
        n.value = n.value.substring(0, r) + s + n.value.substr(l);
        n.focus();
        if (typeof n.createTextRange != 'undefined') {
            var o = n.createTextRange();
            if (e.highlight) {
                o.moveStart('character', r);
                o.moveEnd('character', r + s.length)
            } else {
                o.moveStart('character', r + s.length);
                o.moveEnd('character', r + s.length)
            };
            o.select()
        } else if (typeof n.selectionStart != 'undefined') {
            if (e.highlight) {
                n.selectionStart = r;
                n.selectionEnd = r + s.length
            } else {
                n.selectionStart = r + s.length;
                n.selectionEnd = r + s.length
            }
        } else {
            n.value += s
        }
    };

    function i(t) {
        var i = t.find('[class*="bbedit-"]').attr('class').replace(/.*bbedit-/, ''),
            n = '<ul class="bbedit-menu ' + (i == 'color' ? 'bbedit-color-menu' : '') + '">';
        $.each($.bbedit.menus[i], function(e, t) {
            if (i == 'color') {
                n += '<li style="background-color:' + e + ';" class="bbedit-' + i + '-' + e + '" title="' + t + '"><span></span><i>' + t + '</i></li>'
            } else {
                n += '<li class="ka ka-' + i + '-' + e + ' bbedit-' + i + '-' + e + '" title="' + t + '"><span></span><i>' + t + '</i></li>'
            }
        });
        t.append(n + '</ul>')
    };

    function n(t, i) {
        bbcode = t.ta.value;
        lastBBcode = t.lastBBcode;
        if (t.lastBBcode != bbcode) {
            if (bbcode.replace(/\s|\r|\t|\n/gm, '') != '') {
                $.ajax({
                    'type': 'POST',
                    'url': '/preview.php',
                    'data': {
                        data: bbcode
                    },
                    beforeSend: function() {
                        $(i).show().html('<div class="center"><img src="/assets/images/indicator.gif" alt="loading"/></div>')
                    },
                    success: function(t) {
                        $(i).html(t);
                        $(i).find('.ajaxLink').fancybox()
                    }
                })
            } else {
                $(i).html('')
            };
            t.lastBBcode = bbcode
        }
    }
})(jQuery);